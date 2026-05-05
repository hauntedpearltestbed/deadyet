export interface SeedPerson {
  slug: string;
  name: string;
  wikipediaTitle: string;
  description: string;
  fallback: {
    birthYear: number;
    deathYear: number | null;
    imageUrl?: string;
  };
}

export interface PersonView {
  slug: string;
  name: string;
  description: string;
  birthYear: number | null;
  deathYear: number | null;
  status: "alive" | "dead";
  imageUrl: string | null;
  imageCredit: string | null;
  wikipediaUrl: string;
  wikipediaExtract: string | null;
  source: "wikipedia" | "fallback";
  lastUpdated: string;
}
