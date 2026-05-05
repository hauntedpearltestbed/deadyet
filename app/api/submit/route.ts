import { NextResponse } from "next/server";
import { z } from "zod";

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = schema.parse(body);

    const token = getEnv("GITHUB_TOKEN");
    const owner = getEnv("GITHUB_OWNER");
    const repo = getEnv("GITHUB_REPO");

    const issueBody = [
      `**Name:** ${parsed.name}`,
      parsed.wikipediaUrl ? `**Wikipedia:** ${parsed.wikipediaUrl}` : "",
      `**Reason:**`,
      parsed.reason,
      ``,
      `---`,
      `Submitted at ${new Date().toISOString()}`,
    ].join("\n");

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
