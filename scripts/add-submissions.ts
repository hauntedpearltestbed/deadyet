import { config } from "dotenv";
config({ path: ".env.local" });
import { readFile, writeFile } from "fs/promises";
import { createInterface } from "readline/promises";
import { stdin, stdout } from "process";

const rl = createInterface({ input: stdin, output: stdout });

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

async function githubFetch(path: string, options?: RequestInit) {
  const token = getEnv("GITHUB_TOKEN");
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options?.headers ?? {}),
    },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  return res.json();
}

async function closeIssue(owner: string, repo: string, issueNumber: number) {
  await githubFetch(`/repos/${owner}/${repo}/issues/${issueNumber}`, {
    method: "PATCH",
    body: JSON.stringify({ state: "closed" }),
  });
}

interface SubmissionIssue {
  number: number;
  title: string;
  body: string;
}

function parseIssueBody(body: string): {
  name: string | null;
  wikipediaUrl: string | null;
  reason: string | null;
  existingDescription: string | null;
} {
  const nameMatch = body.match(/\*\*Name:\*\*\s*(.+)/);
  const wikiMatch = body.match(/\*\*Wikipedia:\*\*\s*(.+)/);
  const reasonMatch = body.match(/\*\*Reason:\*\*\n([\s\S]+?)(?:\n\*\*Suggested description|---|$)/);
  const descMatch = body.match(/\*\*Suggested description \(AI-generated\):\*\*\n([\s\S]+?)(?:\n\nSubmitted at|$)/);

  return {
    name: nameMatch?.[1].trim() ?? null,
    wikipediaUrl: wikiMatch?.[1].trim() ?? null,
    reason: reasonMatch?.[1].trim() ?? null,
    existingDescription: descMatch?.[1].trim() ?? null,
  };
}

function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function fetchWikipediaSummary(title: string): Promise<{
  title: string | null;
  extract: string | null;
  wikibase_item: string | null;
  thumbnail: string | null;
}> {
  const encoded = encodeURIComponent(title.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return { title: null, extract: null, wikibase_item: null, thumbnail: null };
    const data = (await res.json()) as Record<string, unknown>;
    return {
      title: typeof data.title === "string" ? data.title : null,
      extract: typeof data.extract === "string" ? data.extract : null,
      wikibase_item: typeof data.wikibase_item === "string" ? data.wikibase_item : null,
      thumbnail:
        data.thumbnail && typeof data.thumbnail === "object" && data.thumbnail !== null
          ? String((data.thumbnail as Record<string, unknown>).source ?? "")
          : null,
    };
  } catch {
    return { title: null, extract: null, wikibase_item: null, thumbnail: null };
  }
}

async function fetchWikidataDates(wikidataId: string): Promise<{
  birthYear: number | null;
  deathYear: number | null;
}> {
  const url =
    `https://www.wikidata.org/w/api.php?` +
    `action=wbgetentities&ids=${encodeURIComponent(wikidataId)}` +
    `&format=json&props=claims&languages=en&origin=*`;
  try {
    const res = await fetch(url);
    if (!res.ok) return { birthYear: null, deathYear: null };
    const data = (await res.json()) as Record<string, unknown>;
    const entities = data.entities as Record<string, unknown>;
    const entity = entities[wikidataId] as Record<string, unknown>;
    const claims = entity.claims as Record<string, unknown[]>;

    function extractYear(property: string): number | null {
      const list = claims[property];
      if (!list || list.length === 0) return null;
      const first = list[0] as Record<string, unknown>;
      const mainsnak = first.mainsnak as Record<string, unknown>;
      const datavalue = mainsnak.datavalue as Record<string, unknown>;
      const value = datavalue.value as Record<string, unknown>;
      const time = String(value.time ?? "");
      const match = time.match(/^[+-]?(\d{4})-/);
      if (!match) return null;
      const year = parseInt(match[1], 10);
      return Number.isFinite(year) ? year : null;
    }

    return {
      birthYear: extractYear("P569"),
      deathYear: extractYear("P570"),
    };
  } catch {
    return { birthYear: null, deathYear: null };
  }
}

async function generateDescription(
  name: string,
  wikipediaExtract: string | null,
  alignment: "good" | "evil",
): Promise<string | null> {
  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) return null;

  const framing =
    alignment === "good"
      ? "Frame the description positively — focus only on their achievements, contributions, and admirable qualities."
      : "Frame the description negatively — focus only on their crimes, atrocities, controversies, and harmful actions.";

  const res = await fetch("https://api.kimi.com/coding/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "claude-code/1.0.0",
    },
    body: JSON.stringify({
      model: "kimi-for-coding",
      messages: [
        {
          role: "system",
          content:
            `You write concise, factual 2-3 sentence descriptions of notable people for a reference website. Mention why they are well known. ${framing} Return ONLY the description text, no quotes or preamble or thinking, nothing outside of the description text.`,
        },
        {
          role: "user",
          content: wikipediaExtract
            ? `Write a description for ${name}. Wikipedia context: ${wikipediaExtract}`
            : `Write a description for ${name}.`,
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "unknown");
    console.log(`    Kimi API error (${res.status}): ${errBody}`);
    return null;
  }
  const data = (await res.json()) as Record<string, unknown>;
  const choices = data.choices as Array<Record<string, unknown>>;
  if (!choices || choices.length === 0) {
    console.log("    Kimi returned no choices.");
    return null;
  }
  const message = choices[0].message as Record<string, unknown>;
  const content = String(message.content ?? "").trim();
  const reasoning = String(message.reasoning_content ?? "").trim();

  function extractFromReasoning(text: string): string | null {
    // The coding model often wraps the answer in "Draft 1:" ... "Check constraints:"
    const draftMatch = text.match(/Draft\s*1\s*:\s*\n?([\s\S]*?)(?:\n\nCheck\s*constraints|Verify\s*constraints|$)/i);
    if (draftMatch) {
      const draft = draftMatch[1].trim();
      // Also strip any bullet-point planning that might appear before the draft
      const lines = draft.split("\n");
      const proseStart = lines.findIndex((l) => l.trim() && !l.trim().startsWith("-"));
      if (proseStart >= 0) {
        return lines.slice(proseStart).join("\n").trim();
      }
      return draft;
    }
    // Fallback: take the longest paragraph of prose (not bullets/notes)
    const paragraphs = text.split(/\n{2,}/);
    const prose = paragraphs
      .map((p) => p.trim())
      .filter((p) => p && !p.startsWith("-") && !p.startsWith("*") && !p.includes(":"));
    return prose.sort((a, b) => b.length - a.length)[0] ?? null;
  }

  const final = content || extractFromReasoning(reasoning) || reasoning;
  if (!final) console.log("    Kimi returned empty content.");
  return final || null;
}

async function getExistingSlugs(): Promise<Set<string>> {
  const content = await readFile("lib/people.ts", "utf-8");
  const slugs = new Set<string>();
  const matches = content.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of matches) {
    slugs.add(match[1]);
  }
  return slugs;
}

function parseExistingPeople(content: string): Array<{
  slug: string;
  name: string;
  wikipediaTitle: string;
  description: string;
  alignment: string;
}> {
  const people: Array<{
    slug: string;
    name: string;
    wikipediaTitle: string;
    description: string;
    alignment: string;
  }> = [];
  const lines = content.split("\n");
  let current: Record<string, string> = {};
  let inEntry = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === "{") {
      inEntry = true;
      current = {};
    } else if (trimmed === "},") {
      if (inEntry && current.slug) {
        people.push({
          slug: current.slug,
          name: current.name ?? "",
          wikipediaTitle: current.wikipediaTitle ?? "",
          description: current.description ?? "",
          alignment: current.alignment ?? "",
        });
      }
      inEntry = false;
      current = {};
    } else if (inEntry) {
      const slugMatch = trimmed.match(/^slug:\s*"([^"]+)"/);
      const nameMatch = trimmed.match(/^name:\s*"([^"]+)"/);
      const wikiMatch = trimmed.match(/^wikipediaTitle:\s*"([^"]+)"/);
      const alignMatch = trimmed.match(/^alignment:\s*"([^"]+)"/);
      const descMatch = trimmed.match(/^description:\s*"([^"]*)"/);

      if (slugMatch) current.slug = slugMatch[1];
      if (nameMatch) current.name = nameMatch[1];
      if (wikiMatch) current.wikipediaTitle = wikiMatch[1];
      if (alignMatch) current.alignment = alignMatch[1];
      if (descMatch) {
        current.description = descMatch[1];
      } else if (trimmed === "description:") {
        if (i + 1 < lines.length) {
          const nextTrimmed = lines[i + 1].trim();
          const m = nextTrimmed.match(/^"([^"]*)",?$/);
          if (m) current.description = m[1];
        }
      }
    }
  }

  return people;
}

function extractWikipediaTitle(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("wikipedia.org")) return null;
    const match = parsed.pathname.match(/\/wiki\/(.+)/);
    return match ? decodeURIComponent(match[1].replace(/_/g, " ")) : null;
  } catch {
    return null;
  }
}

function formatSeedPerson(p: {
  slug: string;
  name: string;
  wikipediaTitle: string;
  description: string;
  alignment: string;
  birthYear: number | null;
  deathYear: number | null;
  imageUrl: string | null;
}): string {
  const fallbackParts: string[] = [];
  fallbackParts.push(`birthYear: ${p.birthYear ?? "null"}`);
  fallbackParts.push(`deathYear: ${p.deathYear ?? "null"}`);
  if (p.imageUrl) fallbackParts.push(`imageUrl: "${p.imageUrl}"`);

  return `  {
    slug: "${p.slug}",
    name: "${p.name}",
    wikipediaTitle: "${p.wikipediaTitle}",
    description:
      "${p.description}",
    alignment: "${p.alignment}",
    fallback: { ${fallbackParts.join(", ")} },
  },`;
}

async function insertIntoPeople(newBlock: string) {
  const content = await readFile("lib/people.ts", "utf-8");
  const lines = content.split("\n");

  let insertIndex = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === "];") {
      insertIndex = i;
      break;
    }
  }

  if (insertIndex === -1) throw new Error("Could not find ]; in lib/people.ts");

  lines.splice(insertIndex, 0, newBlock);
  await writeFile("lib/people.ts", lines.join("\n"));
}

function updateDescriptionInContent(content: string, slug: string, newDescription: string): string {
  const lines = content.split("\n");
  let foundSlug = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith(`slug: "${slug}"`)) {
      foundSlug = true;
      continue;
    }
    if (foundSlug && trimmed === "description:") {
      if (i + 1 < lines.length) {
        const indent = lines[i + 1].match(/^(\s*)/)?.[1] ?? "      ";
        lines[i + 1] = `${indent}"${newDescription}",`;
      }
      break;
    }
    if (foundSlug && trimmed.startsWith("alignment:")) {
      break;
    }
  }

  return lines.join("\n");
}

async function regenerateExisting() {
  console.log("Parsing existing entries...\n");
  const content = await readFile("lib/people.ts", "utf-8");
  const people = parseExistingPeople(content);

  console.log(`Found ${people.length} existing entries.`);
  console.log("\nOptions:");
  console.log("  1. Regenerate ALL descriptions");
  console.log("  2. Regenerate specific entries");
  const mode = await rl.question("\nChoose (1/2): ");

  let toProcess = people;
  if (mode.trim() === "2") {
    const input = await rl.question("Enter slugs or names (comma-separated): ");
    const terms = input.split(",").map((s) => s.trim().toLowerCase());
    toProcess = people.filter(
      (p) => terms.includes(p.slug.toLowerCase()) || terms.includes(p.name.toLowerCase()),
    );
    console.log(`Matched ${toProcess.length} entries.\n`);
  }

  if (toProcess.length === 0) {
    console.log("No entries to process.");
    return;
  }

  let updatedCount = 0;
  let fileContent = content;

  for (let i = 0; i < toProcess.length; i++) {
    const person = toProcess[i];
    console.log(`\n[${i + 1}/${toProcess.length}] ${person.name} (${person.slug})`);

    console.log("  Fetching Wikipedia...");
    const wiki = await fetchWikipediaSummary(person.wikipediaTitle);

    console.log("  Generating description via Kimi...");
    const newDesc = await generateDescription(
      person.name,
      wiki.extract,
      person.alignment as "good" | "evil",
    );

    if (!newDesc) {
      console.log("  ⚠️  Failed to generate description. Skipping.");
      continue;
    }

    console.log(`\n  ─── OLD ──────────────────────────────────────`);
    console.log(`  ${person.description}`);
    console.log(`  ─── NEW ──────────────────────────────────────`);
    console.log(`  ${newDesc}`);
    console.log(`  ──────────────────────────────────────────────\n`);

    const answer = await rl.question('  Accept new description? (y/n/q) ');
    const choice = answer.trim().toLowerCase();
    if (choice === "q") {
      console.log("  Quitting.");
      break;
    }
    if (choice === "y") {
      fileContent = updateDescriptionInContent(fileContent, person.slug, newDesc);
      updatedCount++;
      console.log("  Updated.\n");
    } else {
      console.log("  Skipped.\n");
    }

    if (i < toProcess.length - 1) {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  if (updatedCount > 0) {
    await writeFile("lib/people.ts", fileContent);
    console.log(`\nWrote ${updatedCount} update(s) to lib/people.ts.`);
  }

  console.log(`\nDone. Updated ${updatedCount} description(s).`);
}

async function main() {
  console.log("What would you like to do?");
  console.log("  1. Process new submission issues");
  console.log("  2. Regenerate descriptions for existing entries");
  const choice = await rl.question("\nChoose (1/2): ");

  if (choice.trim() === "2") {
    await regenerateExisting();
    rl.close();
    return;
  }

  const owner = getEnv("GITHUB_OWNER", "hauntedpearltestbed");
  const repo = getEnv("GITHUB_REPO", "deadyet");

  console.log("Fetching open submission issues...\n");
  const issues = (await githubFetch(
    `/repos/${owner}/${repo}/issues?labels=submission&state=open`,
  )) as SubmissionIssue[];

  if (issues.length === 0) {
    console.log("No open submission issues found.");
    rl.close();
    return;
  }

  const existingSlugs = await getExistingSlugs();
  const toProcess: { issue: SubmissionIssue; parsed: ReturnType<typeof parseIssueBody> }[] = [];

  for (const issue of issues) {
    const parsed = parseIssueBody(issue.body);
    const slug = parsed.name ? slugify(parsed.name) : null;
    const isDuplicate = slug ? existingSlugs.has(slug) : false;

    console.log(`#${issue.number}: ${issue.title}`);
    console.log(`  Name: ${parsed.name ?? "(parse failed)"}`);
    console.log(`  Wikipedia: ${parsed.wikipediaUrl ?? "(none)"}`);
    if (isDuplicate) console.log(`  ⚠️  DUPLICATE — ${slug} already exists`);
    console.log("");

    if (!isDuplicate && parsed.name) {
      toProcess.push({ issue, parsed });
    }
  }

  if (toProcess.length === 0) {
    console.log("No new (non-duplicate) submissions to process.");
    rl.close();
    return;
  }

  const answer = await rl.question(
    `Process ${toProcess.length} new submission(s)? (y/n) `,
  );
  if (answer.trim().toLowerCase() !== "y") {
    console.log("Aborted.");
    rl.close();
    return;
  }

  const addedSlugs: string[] = [];

  for (const { issue, parsed } of toProcess) {
    console.log(`\n--- Processing #${issue.number}: ${parsed.name} ---`);

    const wikiTitle = parsed.wikipediaUrl
      ? extractWikipediaTitle(parsed.wikipediaUrl)
      : parsed.name;

    console.log("  Fetching Wikipedia...");
    const wiki = wikiTitle ? await fetchWikipediaSummary(wikiTitle) : { title: null, extract: null, wikibase_item: null, thumbnail: null };

    // Use Wikipedia's canonical title for proper name capitalization
    const canonicalName = wiki.title ?? parsed.name!;

    let birthYear: number | null = null;
    let deathYear: number | null = null;
    if (wiki.wikibase_item) {
      console.log("  Fetching Wikidata...");
      const dates = await fetchWikidataDates(wiki.wikibase_item);
      birthYear = dates.birthYear;
      deathYear = dates.deathYear;
    }

    console.log("");
    console.log(`  Name:     ${canonicalName}`);
    console.log(`  Slug:     ${slugify(canonicalName)}`);
    console.log(`  Born:     ${birthYear ?? "unknown"}`);
    console.log(`  Died:     ${deathYear ?? "still alive"}`);
    console.log(`  Wiki:     ${wikiTitle}`);
    console.log("");

    const alignmentInput = await rl.question('  Alignment — "good" or "evil"? ');
    const alignment = alignmentInput.trim().toLowerCase();
    if (alignment !== "good" && alignment !== "evil") {
      console.log('  Invalid alignment. Skipping. Use "good" or "evil".\n');
      continue;
    }

    let description = parsed.existingDescription;
    if (!description && wiki.extract) {
      console.log("  Generating description via Kimi...");
      description = await generateDescription(parsed.name!, wiki.extract, alignment as "good" | "evil");
    }

    console.log(`  Desc:     ${description ?? "(failed to generate)"}`);
    console.log("");

    const block = formatSeedPerson({
      slug: slugify(canonicalName),
      name: canonicalName,
      wikipediaTitle: wikiTitle?.replace(/ /g, "_") ?? canonicalName,
      description: description ?? "",
      alignment,
      birthYear,
      deathYear,
      imageUrl: wiki.thumbnail,
    });

    console.log("\n  Formatted entry:");
    console.log(block);
    console.log("");

    const confirm = await rl.question("  Add this entry? (y/n) ");
    if (confirm.trim().toLowerCase() === "y") {
      await insertIntoPeople(block);
      addedSlugs.push(slugify(canonicalName));
      console.log("  Added.\n");
      try {
        await closeIssue(owner, repo, issue.number);
        console.log(`  Closed issue #${issue.number}.\n`);
      } catch (err) {
        console.log(`  ⚠️  Failed to close issue #${issue.number}: ${err}\n`);
      }
    } else {
      console.log("  Skipped.\n");
    }
  }

  rl.close();

  if (addedSlugs.length === 0) {
    console.log("No entries added. Nothing to do.");
    return;
  }

  const commitMessage = `feat: add ${addedSlugs.join(", ")}`;

  console.log(
    `\n✅ Added ${addedSlugs.length} entrie(s) to lib/people.ts: ${addedSlugs.join(", ")}`,
  );
  console.log("\nReview the diff, then commit and push manually:");
  console.log("");
  console.log("    git diff lib/people.ts");
  console.log("    git add lib/people.ts");
  console.log(`    git commit -m "${commitMessage}"`);
  console.log("    git push origin main");
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
