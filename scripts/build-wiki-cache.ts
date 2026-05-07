/* eslint-disable no-console */
// Run with: `npx tsx scripts/build-wiki-cache.ts`
// Fetches Wikipedia summary + Wikidata claims for every seed entry and writes
// the result to data/wiki-cache.json. The web app reads from this cache so
// the build path no longer depends on Wikipedia being healthy. Live data
// (death year) is still re-checked at request time for entries where
// deathYear is null in the cache; see lib/get-person.ts.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { getAllPeople } from "../lib/people";

interface CachedEntry {
  imageUrl: string | null;
  wikipediaUrl: string;
  birthYear: number | null;
  deathYear: number | null;
  wikidataId: string | null;
}

interface WikiCache {
  version: 1;
  generatedAt: string;
  entries: Record<string, CachedEntry>;
}

const USER_AGENT = "deadyet-cache-builder/1.0 (https://deadyet.wtf)";
const CONCURRENCY = 8;
const RETRY_DELAY_MS = 1500;
const MAX_RETRIES = 3;

interface SummaryResult {
  imageUrl: string | null;
  wikidataId: string | null;
  canonicalUrl: string | null;
}

async function fetchSummary(title: string): Promise<SummaryResult> {
  const encoded = encodeURIComponent(title.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
      if (!res.ok) {
        await sleep(RETRY_DELAY_MS);
        continue;
      }
      const data = (await res.json()) as Record<string, unknown>;
      const thumb = data.thumbnail as { source?: string } | undefined;
      const original = data.originalimage as { source?: string } | undefined;
      const contentUrls = data.content_urls as
        | { desktop?: { page?: string } }
        | undefined;
      let imageUrl = thumb?.source ?? original?.source ?? null;
      if (!imageUrl) {
        imageUrl = await fetchPageImageFallback(title);
      }
      return {
        imageUrl,
        wikidataId:
          typeof data.wikibase_item === "string"
            ? (data.wikibase_item as string)
            : null,
        canonicalUrl: contentUrls?.desktop?.page ?? null,
      };
    } catch {
      await sleep(RETRY_DELAY_MS);
    }
  }
  return { imageUrl: null, wikidataId: null, canonicalUrl: null };
}

async function fetchPageImageFallback(title: string): Promise<string | null> {
  const encoded = encodeURIComponent(title.replace(/ /g, "_"));
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&format=json` +
    `&prop=pageimages&piprop=thumbnail%7Coriginal&pithumbsize=400` +
    `&redirects=1&origin=*&titles=${encoded}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      query?: {
        pages?: Record<
          string,
          { thumbnail?: { source: string }; original?: { source: string } }
        >;
      };
    };
    const pages = data.query?.pages;
    if (!pages) return null;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source ?? page?.original?.source ?? null;
  } catch {
    return null;
  }
}

function extractYear(
  claims: Record<string, unknown>,
  prop: string,
): number | null {
  const list = claims[prop];
  if (!Array.isArray(list) || list.length === 0) return null;
  for (const claim of list) {
    const mainsnak = (claim as Record<string, unknown>)?.mainsnak as
      | { datavalue?: { value?: { time?: string } } }
      | undefined;
    const t = mainsnak?.datavalue?.value?.time;
    if (typeof t === "string") {
      const m = t.match(/^([+-])(\d{1,4})-/);
      if (m) {
        const year = parseInt(m[2], 10);
        return m[1] === "-" ? -year : year;
      }
    }
  }
  return null;
}

interface WikidataDates {
  birthYear: number | null;
  deathYear: number | null;
}

async function fetchWikidata(id: string): Promise<WikidataDates> {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${id}.json`;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
      if (!res.ok || !res.headers.get("content-type")?.includes("json")) {
        await sleep(RETRY_DELAY_MS);
        continue;
      }
      const data = (await res.json()) as {
        entities?: Record<string, { claims?: Record<string, unknown> }>;
      };
      const entity = data.entities?.[id];
      if (!entity?.claims) {
        return { birthYear: null, deathYear: null };
      }
      return {
        birthYear: extractYear(entity.claims, "P569"),
        deathYear: extractYear(entity.claims, "P570"),
      };
    } catch {
      await sleep(RETRY_DELAY_MS);
    }
  }
  return { birthYear: null, deathYear: null };
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function buildEntry(
  wikipediaTitle: string,
  fallback: {
    birthYear: number | null;
    deathYear: number | null;
    imageUrl?: string;
  },
): Promise<CachedEntry> {
  const summary = await fetchSummary(wikipediaTitle);
  const dates: WikidataDates = summary.wikidataId
    ? await fetchWikidata(summary.wikidataId)
    : { birthYear: null, deathYear: null };

  const wikipediaUrl =
    summary.canonicalUrl ??
    `https://en.wikipedia.org/wiki/${encodeURIComponent(
      wikipediaTitle.replace(/ /g, "_"),
    )}`;

  return {
    imageUrl: summary.imageUrl ?? fallback.imageUrl ?? null,
    wikipediaUrl,
    birthYear: dates.birthYear ?? fallback.birthYear,
    deathYear: dates.deathYear ?? fallback.deathYear,
    wikidataId: summary.wikidataId,
  };
}

async function main() {
  const people = getAllPeople();
  console.log(`Building cache for ${people.length} entries…`);

  const entries: Record<string, CachedEntry> = {};
  let done = 0;

  const queue = [...people];
  async function worker() {
    while (queue.length > 0) {
      const person = queue.shift();
      if (!person) return;
      try {
        entries[person.slug] = await buildEntry(
          person.wikipediaTitle,
          person.fallback,
        );
      } catch (err) {
        console.warn(`  ! ${person.name}: ${(err as Error).message}`);
        entries[person.slug] = {
          imageUrl: person.fallback.imageUrl ?? null,
          wikipediaUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(
            person.wikipediaTitle.replace(/ /g, "_"),
          )}`,
          birthYear: person.fallback.birthYear,
          deathYear: person.fallback.deathYear,
          wikidataId: null,
        };
      }
      done += 1;
      if (done % 25 === 0 || done === people.length) {
        console.log(`  …${done}/${people.length}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const cache: WikiCache = {
    version: 1,
    generatedAt: new Date().toISOString(),
    entries,
  };
  const outPath = resolve(process.cwd(), "data/wiki-cache.json");
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(cache, null, 2) + "\n", "utf8");
  console.log(
    `\nWrote ${Object.keys(entries).length} entries to ${outPath}`,
  );

  const missingImages = Object.entries(entries).filter(([, e]) => !e.imageUrl);
  if (missingImages.length > 0) {
    console.log(`\n${missingImages.length} entries have no image:`);
    for (const [slug] of missingImages) console.log(`  - ${slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
