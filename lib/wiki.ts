export interface WikipediaSummary {
  title: string;
  extract: string;
  wikibase_item?: string;
  thumbnail?: { source: string; width: number; height: number };
  originalimage?: { source: string; width: number; height: number };
  content_urls?: { desktop?: { page?: string } };
}

export interface WikidataClaims {
  birthYear: number | null;
  deathYear: number | null;
}

const WIKIPEDIA_REVALIDATE_SECONDS = 3600;

export async function fetchWikipediaSummary(
  title: string,
): Promise<WikipediaSummary | null> {
  const encoded = encodeURIComponent(title.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: WIKIPEDIA_REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as unknown;
    if (typeof data !== "object" || data === null) return null;
    const obj = data as Record<string, unknown>;
    return {
      title: String(obj.title ?? ""),
      extract: String(obj.extract ?? ""),
      thumbnail:
        obj.thumbnail && typeof obj.thumbnail === "object"
          ? (obj.thumbnail as { source: string; width: number; height: number })
          : undefined,
      originalimage:
        obj.originalimage && typeof obj.originalimage === "object"
          ? (obj.originalimage as {
              source: string;
              width: number;
              height: number;
            })
          : undefined,
      content_urls:
        obj.content_urls && typeof obj.content_urls === "object"
          ? (obj.content_urls as {
              desktop?: { page?: string };
            })
          : undefined,
    };
  } catch {
    return null;
  }
}

function extractYearFromWikidataTime(
  claims: Record<string, unknown>,
  property: string,
): number | null {
  const list = claims[property];
  if (!Array.isArray(list) || list.length === 0) return null;
  const first = list[0];
  if (typeof first !== "object" || first === null) return null;
  const mainsnak = (first as Record<string, unknown>).mainsnak;
  if (typeof mainsnak !== "object" || mainsnak === null) return null;
  const datavalue = (mainsnak as Record<string, unknown>).datavalue;
  if (typeof datavalue !== "object" || datavalue === null) return null;
  const value = (datavalue as Record<string, unknown>).value;
  if (typeof value !== "object" || value === null) return null;
  const time = (value as Record<string, unknown>).time;
  if (typeof time !== "string") return null;
  const match = time.match(/^[+-]?(\d{4})-/);
  if (!match) return null;
  const year = parseInt(match[1], 10);
  return Number.isFinite(year) ? year : null;
}

export async function fetchWikidataDates(
  wikidataId: string,
): Promise<WikidataClaims> {
  const url =
    `https://www.wikidata.org/w/api.php?` +
    `action=wbgetentities&ids=${encodeURIComponent(wikidataId)}` +
    `&format=json&props=claims&languages=en&origin=*`;

  try {
    const res = await fetch(url, {
      next: { revalidate: WIKIPEDIA_REVALIDATE_SECONDS },
    });
    if (!res.ok) return { birthYear: null, deathYear: null };
    const data = (await res.json()) as unknown;
    if (
      typeof data !== "object" ||
      data === null ||
      !("entities" in data)
    ) {
      return { birthYear: null, deathYear: null };
    }
    const entities = (data as Record<string, unknown>)
      .entities as Record<string, unknown>;
    const entity = entities[wikidataId];
    if (typeof entity !== "object" || entity === null) {
      return { birthYear: null, deathYear: null };
    }
    const claims = (entity as Record<string, unknown>).claims as Record<
      string,
      unknown
    >;
    return {
      birthYear: extractYearFromWikidataTime(claims, "P569"),
      deathYear: extractYearFromWikidataTime(claims, "P570"),
    };
  } catch {
    return { birthYear: null, deathYear: null };
  }
}
