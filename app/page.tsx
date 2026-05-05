import { getAllPeople } from "@/lib/people";
import { SearchBox } from "@/components/search-box";

export default function HomePage() {
  const people = getAllPeople().map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <SearchBox people={people} />
      </main>
      <footer className="py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted">
        <span>
          Not finding who you’re looking for?{" "}
          <a href="/submit" className="underline hover:text-foreground transition-colors">
            Request an addition
          </a>
        </span>
        <span className="text-xs opacity-60 flex items-center gap-2">
          Informational purposes only
          <a href="/about" className="underline hover:text-foreground transition-colors">
            About
          </a>
        </span>
      </footer>
    </>
  );
}
