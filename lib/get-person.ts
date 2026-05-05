import type { PersonView, SeedPerson } from "./types";
import { getPersonBySlug } from "./people";
import {
  fetchWikipediaSummary,
  fetchWikidataDates,
} from "./wiki";

const WIKIDATA_CACHE: Map<string, string | null> = new Map();

async function resolveWikidataId(
  seed: SeedPerson,
): Promise<string | null> {
  const cached = WIKIDATA_CACHE.get(seed.slug);
  if (cached !== undefined) return cached;

  const summary = await fetchWikipediaSummary(seed.wikipediaTitle);
  const id = summary?.wikibase_item ?? "";
  const valid = id.startsWith("Q") ? id : null;
  WIKIDATA_CACHE.set(seed.slug, valid);
  return valid;
}

export async function getPerson(
  slug: string,
): Promise<PersonView | null> {
  const seed = getPersonBySlug(slug);
  if (!seed) return null;

  const [summary, wikidataId] = await Promise.all([
    fetchWikipediaSummary(seed.wikipediaTitle),
    resolveWikidataId(seed),
  ]);

  let wikidataDates = { birthYear: null as number | null, deathYear: null as number | null };
  if (wikidataId) {
    wikidataDates = await fetchWikidataDates(wikidataId);
  }

  const birthYear = wikidataDates.birthYear ?? seed.fallback.birthYear ?? null;
  const deathYear = wikidataDates.deathYear ?? seed.fallback.deathYear ?? null;
  const status: "alive" | "dead" = deathYear ? "dead" : "alive";

  const imageUrl =
    summary?.originalimage?.source ??
    summary?.thumbnail?.source ??
    seed.fallback.imageUrl ??
    null;

  const wikipediaUrl =
    summary?.content_urls?.desktop?.page ??
    `https://en.wikipedia.org/wiki/${encodeURIComponent(seed.wikipediaTitle)}`;

  return {
    slug: seed.slug,
    name: seed.name,
    description: seed.description,
    birthYear,
    deathYear,
    status,
    imageUrl,
    imageCredit: summary?.title ? `Image from Wikipedia` : null,
    wikipediaUrl,
    wikipediaExtract: summary?.extract ?? null,
    source: summary ? "wikipedia" : "fallback",
    lastUpdated: new Date().toISOString(),
  };
}
