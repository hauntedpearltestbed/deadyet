import type { PersonView, SeedPerson } from "./types";
import { getPersonBySlug } from "./people";
import wikiCacheData from "../data/wiki-cache.json";

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

const CACHE = wikiCacheData as WikiCache;
const LIVE_DEATH_REVALIDATE_SECONDS = 3600;
const USER_AGENT = "deadyet/1.0 (https://deadyet.wtf)";

function fallbackEntry(seed: SeedPerson): CachedEntry {
  return {
    imageUrl: seed.fallback.imageUrl ?? null,
    wikipediaUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(
      seed.wikipediaTitle.replace(/ /g, "_"),
    )}`,
    birthYear: seed.fallback.birthYear,
    deathYear: seed.fallback.deathYear,
    wikidataId: null,
  };
}

// Targeted live check for the one field that can actually change: death year.
// Only runs for entries whose cached deathYear is null AND that have a known
// wikidataId. Pure static rendering for everyone already dead.
async function checkLiveDeathYear(
  wikidataId: string,
): Promise<number | null> {
  const url =
    `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json` +
    `&origin=*&property=P570&entity=${encodeURIComponent(wikidataId)}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      next: { revalidate: LIVE_DEATH_REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      claims?: {
        P570?: Array<{
          mainsnak?: { datavalue?: { value?: { time?: string } } };
        }>;
      };
    };
    const claim = data.claims?.P570?.[0];
    const time = claim?.mainsnak?.datavalue?.value?.time;
    if (typeof time !== "string") return null;
    const m = time.match(/^([+-])(\d{1,4})-/);
    if (!m) return null;
    const year = parseInt(m[2], 10);
    return m[1] === "-" ? -year : year;
  } catch {
    return null;
  }
}

export async function getPerson(
  slug: string,
): Promise<PersonView | null> {
  const seed = getPersonBySlug(slug);
  if (!seed) return null;

  const cached = CACHE.entries[slug] ?? fallbackEntry(seed);

  let deathYear = cached.deathYear;
  if (deathYear == null && cached.wikidataId) {
    deathYear = await checkLiveDeathYear(cached.wikidataId);
  }

  const birthYear = cached.birthYear ?? seed.fallback.birthYear ?? null;
  const status: "alive" | "dead" =
    seed.status ?? (deathYear != null ? "dead" : "alive");

  return {
    slug: seed.slug,
    name: seed.name,
    description: seed.description ?? "",
    birthYear,
    deathYear,
    status,
    alignment: seed.alignment,
    imageUrl: cached.imageUrl,
    imageCredit: cached.imageUrl ? "Image from Wikipedia" : null,
    wikipediaUrl: cached.wikipediaUrl,
    wikipediaExtract: null,
    source: cached.imageUrl || cached.wikidataId ? "wikipedia" : "fallback",
    lastUpdated: new Date().toISOString(),
  };
}
