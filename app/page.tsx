import { getAllPeople } from "@/lib/people";
import { SearchBox } from "@/components/search-box";

export default function HomePage() {
  const people = getAllPeople().map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <SearchBox people={people} />
      <p className="mt-8 text-sm text-muted">
        Not finding who you’re looking for?{" "}
        <a href="/submit" className="underline hover:text-foreground transition-colors">
          Request an addition
        </a>
      </p>
    </main>
  );
}
