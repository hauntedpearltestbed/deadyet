import { NextResponse } from "next/server";
import { z } from "zod";
import { fetchWikipediaSummary } from "@/lib/wiki";

const schema = z.object({
  name: z.string().min(1).max(200),
  wikipediaUrl: z.string().max(500).optional(),
  reason: z.string().min(1).max(2000),
});

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
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

async function generateDescription(
  name: string,
  wikipediaExtract: string | null,
): Promise<string | null> {
  const apiKey = process.env.KIMI_API_KEY;
  if (!apiKey) return null;

  const res = await fetch("https://api.moonshot.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "kimi-k2.6",
      messages: [
        {
          role: "system",
          content:
            "You write concise, factual 2-3 sentence descriptions of notable people for a reference website. Be specific about why they are significant. Use a neutral, encyclopedic tone but do not sanitize or omit well-documented controversies, crimes, or atrocities when relevant to their notability. Return ONLY the description text, no quotes or preamble.",
        },
        {
          role: "user",
          content: wikipediaExtract
            ? `Write a description for ${name}. Wikipedia context: ${wikipediaExtract}`
            : `Write a description for ${name}.`,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json()) as unknown;
  if (typeof data !== "object" || data === null) return null;
  const choices = (data as Record<string, unknown>).choices;
  if (!Array.isArray(choices) || choices.length === 0) return null;
  const message = (choices[0] as Record<string, unknown>).message;
  if (typeof message !== "object" || message === null) return null;
  const content = (message as Record<string, unknown>).content;
  return typeof content === "string" ? content.trim() : null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = schema.parse(body);

    const token = getEnv("GITHUB_TOKEN");
    const owner = getEnv("GITHUB_OWNER");
    const repo = getEnv("GITHUB_REPO");

    let wikipediaExtract: string | null = null;
    const wikiTitle = parsed.wikipediaUrl
      ? extractWikipediaTitle(parsed.wikipediaUrl)
      : parsed.name;
    if (wikiTitle) {
      const summary = await fetchWikipediaSummary(wikiTitle);
      wikipediaExtract = summary?.extract ?? null;
    }

    const generatedDescription = await generateDescription(
      parsed.name,
      wikipediaExtract,
    );

    const issueBody = [
      `**Name:** ${parsed.name}`,
      parsed.wikipediaUrl ? `**Wikipedia:** ${parsed.wikipediaUrl}` : "",
      `**Reason:**`,
      parsed.reason,
      ``,
      `---`,
      generatedDescription
        ? `**Suggested description (AI-generated):**\n${generatedDescription}`
        : "",
      ``,
      `Submitted at ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `Request: ${parsed.name}`,
          body: issueBody,
          labels: ["submission"],
        }),
      },
    );

    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as {
        message?: string;
      };
      return NextResponse.json(
        { success: false, error: err.message || "GitHub API error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
