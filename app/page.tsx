import { getAllPeople } from "@/lib/people";
import { SearchBox } from "@/components/search-box";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const people = getAllPeople().map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <SearchBox people={people} />
      </main>
      <Footer />
    </>
  );
}
