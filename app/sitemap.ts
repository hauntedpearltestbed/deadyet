import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { getAllPeople } = await import("@/lib/people");
  const people = getAllPeople();

  const personEntries: MetadataRoute.Sitemap = people.map((p) => ({
    url: `https://deadyet.wtf/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    {
      url: "https://deadyet.wtf",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://deadyet.wtf/submit",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...personEntries,
  ];
}
