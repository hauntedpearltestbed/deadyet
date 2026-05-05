import type { SeedPerson } from "./types";
import { slugify } from "./slugify";

const SEED: ReadonlyArray<SeedPerson> = [
  {
    slug: "adolf-hitler",
    name: "Adolf Hitler",
    wikipediaTitle: "Adolf_Hitler",
    description:
      "Leader of Nazi Germany from 1933–1945. Initiated World War II in Europe and orchestrated the Holocaust, the genocide of approximately six million Jews and millions of other victims.",
    fallback: { birthYear: 1889, deathYear: 1945 },
  },
  {
    slug: "joseph-stalin",
    name: "Joseph Stalin",
    wikipediaTitle: "Joseph_Stalin",
    description:
      "Leader of the Soviet Union from the mid-1920s until 1953. His policies including forced collectivization, the Great Purge, and Gulag system led to the deaths of millions.",
    fallback: { birthYear: 1878, deathYear: 1953 },
  },
  {
    slug: "pol-pot",
    name: "Pol Pot",
    wikipediaTitle: "Pol_Pot",
    description:
      "Leader of the Khmer Rouge and Prime Minister of Democratic Kampuchea (1976–1979). His regime caused the Cambodian genocide, killing an estimated 1.5–2 million people through forced labor, starvation, and execution.",
    fallback: { birthYear: 1925, deathYear: 1998 },
  },
  {
    slug: "idi-amin",
    name: "Idi Amin",
    wikipediaTitle: "Idi_Amin",
    description:
      "President of Uganda from 1971 to 1979. His regime was characterized by mass killings, ethnic persecution, and political repression, with an estimated 100,000–500,000 deaths.",
    fallback: { birthYear: 1925, deathYear: 2003 },
  },
  {
    slug: "jeffrey-dahmer",
    name: "Jeffrey Dahmer",
    wikipediaTitle: "Jeffrey_Dahmer",
    description:
      "American serial killer and sex offender who murdered and dismembered seventeen men and boys between 1978 and 1991. Killed in prison in 1994.",
    fallback: { birthYear: 1960, deathYear: 1994 },
  },
  {
    slug: "charles-manson",
    name: "Charles Manson",
    wikipediaTitle: "Charles_Manson",
    description:
      "American cult leader who orchestrated the Tate–LaBianca murders in 1969 through the so-called 'Manson Family.' Convicted of first-degree murder and conspiracy to commit murder.",
    fallback: { birthYear: 1934, deathYear: 2017 },
  },
  {
    slug: "henry-kissinger",
    name: "Henry Kissinger",
    wikipediaTitle: "Henry_Kissinger",
    description:
      "U.S. Secretary of State under Nixon and Ford. Architect of policies linked to the secret bombing of Cambodia, support for the 1973 Chilean coup, and the 1971 Bangladesh genocide. Died at age 100.",
    fallback: { birthYear: 1923, deathYear: 2023 },
  },
  {
    slug: "leopold-ii-of-belgium",
    name: "Leopold II of Belgium",
    wikipediaTitle: "Leopold_II_of_Belgium",
    description:
      "King of the Belgians (1865–1909) and personal sovereign of the Congo Free State, where his regime of forced labor and atrocities killed an estimated 10 million Congolese.",
    fallback: { birthYear: 1835, deathYear: 1909 },
  },
  {
    slug: "donald-trump",
    name: "Donald Trump",
    wikipediaTitle: "Donald_Trump",
    description:
      "45th and 47th President of the United States. The first president impeached twice, indicted on 91 criminal charges across four jurisdictions, convicted on 34 felony counts in New York, and found liable for sexual abuse and defamation. Played a central role in the January 6th Capitol attack and refused to concede the 2020 election.",
    fallback: { birthYear: 1946, deathYear: null },
  },
];

for (const person of SEED) {
  const expected = slugify(person.name);
  if (person.slug !== expected) {
    throw new Error(
      `Seed slug mismatch for "${person.name}": expected "${expected}", got "${person.slug}"`,
    );
  }
}

const BY_SLUG: ReadonlyMap<string, SeedPerson> = new Map(
  SEED.map((p) => [p.slug, p]),
);

export function getAllPeople(): ReadonlyArray<SeedPerson> {
  return SEED;
}

export function getPersonBySlug(slug: string): SeedPerson | null {
  return BY_SLUG.get(slug) ?? null;
}

export function findPersonByName(query: string): SeedPerson | null {
  const target = slugify(query);
  if (!target) return null;
  return BY_SLUG.get(target) ?? null;
}
