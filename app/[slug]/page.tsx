import { notFound } from "next/navigation";
import { getPerson } from "@/lib/get-person";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) return { title: "Not Found" };
  return {
    title: `Is ${person.name} dead yet?`,
    description: person.description,
  };
}

export async function generateStaticParams() {
  const { getAllPeople } = await import("@/lib/people");
  return getAllPeople().map((p) => ({ slug: p.slug }));
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) notFound();

  const accent = person.status === "alive" ? "text-accent-bad" : "text-accent-good";
  const border = person.status === "alive" ? "border-accent-bad" : "border-accent-good";
  const bgAccent = person.status === "alive" ? "bg-accent-bad" : "bg-accent-good";

  const years =
    person.birthYear != null
      ? `${person.birthYear} – ${person.deathYear ?? "??"}`
      : "Year unknown";

  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-2xl">
        <a
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          ← Back
        </a>

        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {person.imageUrl && (
            <div className="shrink-0">
              <Image
                src={person.imageUrl}
                alt={`Photo of ${person.name}`}
                width={240}
                height={300}
                className="rounded border-2 border-foreground/10 object-cover"
                unoptimized
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

            {person.wikipediaExtract && (
              <blockquote className="border-l-2 border-foreground/20 pl-4 text-muted italic mb-6">
                {person.wikipediaExtract}
              </blockquote>
            )}

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
  );
}
