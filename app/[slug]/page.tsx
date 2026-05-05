import { notFound } from "next/navigation";
import { getPerson } from "@/lib/get-person";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) return { title: "Not Found" };

  const title = `Is ${person.name} dead yet?`;
  const statusText = person.status === "alive" ? "Alive" : "Dead";

  return {
    title,
    description: person.description,
    openGraph: {
      title,
      description: person.description,
      type: "profile",
      images: person.imageUrl
        ? [{ url: person.imageUrl, alt: `Photo of ${person.name}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: person.description,
      images: person.imageUrl ? [person.imageUrl] : undefined,
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const { getAllPeople } = await import("@/lib/people");
  return getAllPeople().map((p) => ({ slug: p.slug }));
}

function JsonLd({ person }: { person: NonNullable<Awaited<ReturnType<typeof getPerson>>> }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.description,
    birthDate: person.birthYear?.toString(),
    deathDate: person.deathYear?.toString(),
    image: person.imageUrl ?? undefined,
    url: `https://deadyet.wtf/${person.slug}`,
    sameAs: person.wikipediaUrl,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) notFound();

  const isBadNews =
    (person.alignment === "evil" && person.status === "alive") ||
    (person.alignment === "good" && person.status === "dead");

  const accent = isBadNews ? "text-accent-bad" : "text-accent-good";
  const border = isBadNews ? "border-accent-bad" : "border-accent-good";
  const bgAccent = isBadNews ? "bg-accent-bad" : "bg-accent-good";

  const years =
    person.birthYear != null
      ? `${person.birthYear} – ${person.deathYear ?? "20??"}`
      : "Year unknown";

  return (
    <>
      <JsonLd person={person} />
      <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-2xl">
          <a
            href="/"
            className="text-sm text-foreground hover:text-muted transition-colors mb-8 inline-block"
          >
            ← Search someone else
          </a>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {person.imageUrl && (
              <div className="shrink-0">
                <img
                  src={person.imageUrl}
                  alt={`Photo of ${person.name}`}
                  width={240}
                  height={300}
                  className="rounded border-2 border-foreground/10 object-cover"
                  loading="eager"
                />
                {person.imageCredit && (
                  <p className="text-xs text-muted mt-2">{person.imageCredit}</p>
                )}
              </div>
            )}

            <div className="flex-1">
              <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-2 ${accent}`}>
                {person.name}
              </h1>
              <p className="text-xl text-muted mb-4">{years}</p>

              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${border} mb-6`}
              >
                <span className={`w-2 h-2 rounded-full ${bgAccent}`} />
                <span className={`text-sm font-medium uppercase tracking-wider ${accent}`}>
                  {person.status}
                </span>
              </div>

              <p className="text-lg leading-relaxed mb-6">{person.description}</p>

              <a
                href={person.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline hover:text-muted transition-colors"
              >
                Read more on Wikipedia
                <span aria-hidden="true">↗</span>
              </a>

              <p className="text-xs text-muted mt-8">
                Last checked: {new Date(person.lastUpdated).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
