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
  const status: "alive" | "dead" =
    seed.status ?? (deathYear ? "dead" : "alive");

  // Prefer thumbnail over originalimage — full-res images are multi-MB and often
  // fail to load on slow connections. Thumbnails are appropriately sized.
  const imageUrl =
    summary?.thumbnail?.source ??
    summary?.originalimage?.source ??
    seed.fallback.imageUrl ??
    null;

  const wikipediaUrl =
    summary?.content_urls?.desktop?.page ??
    `https://en.wikipedia.org/wiki/${encodeURIComponent(seed.wikipediaTitle)}`;

  return {
    slug: seed.slug,
    name: seed.name,
    description: seed.description ?? summary?.extract ?? "",
    birthYear,
    deathYear,
    status,
    alignment: seed.alignment,
    imageUrl,
    imageCredit: summary?.title ? `Image from Wikipedia` : null,
    wikipediaUrl,
    wikipediaExtract: summary?.extract ?? null,
    source: summary ? "wikipedia" : "fallback",
    lastUpdated: new Date().toISOString(),
  };
}
