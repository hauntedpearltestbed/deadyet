import { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "What is deadyet.wtf? A pragmatic reference for mortality tracking.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-2xl">
          <a
            href="/"
            className="text-sm text-foreground hover:text-muted transition-colors mb-8 inline-block"
          >
            ← Back to the search
          </a>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              This site answers a simple question with a simple answer: is this person dead yet?
              No obituaries, no softening the blow. The status is factual. The framing is ours.
            </p>

            <p>
              The roster includes heroes, villains, leaders, legends, cautionary tales, and
              the occasional deity. Everyone here is a public figure — if you have to explain
              who they are to a stranger, they probably don&apos;t belong on the list.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">How It Works</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Data is pulled from Wikipedia and Wikidata, because the crowd is usually
                right about these things.
              </li>
              <li>
                Pages refresh automatically every hour. If someone dies, the site
                updates within about sixty minutes of Wikipedia reflecting it.
              </li>
              <li>
                The color coding is not random. Green means good news. Red means bad news.
                Your mileage may vary on who belongs in which bucket.
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">Request an Addition</h2>
            <p>
              Can&apos;t find who you&apos;re looking for?{" "}
              <a
                href="/submit"
                className="underline hover:text-muted transition-colors"
              >
                Submit a request
              </a>
              . The roster is crowd-sourced — contribute who you want to see added.
            </p>
            <p>
              We only accept public figures or famous people. No adding your baby mama,
              abusive dad, etc. (I agree, fuck them, though.)
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">Disclaimer</h2>
            <p>
              All data is pulled from public sources and updated automatically. This site
              is strictly informational — a pragmatic reference, not a wish list.
            </p>
            <p>
              If the data looks wrong,{" "}
              <a
                href="/submit"
                className="underline hover:text-muted transition-colors"
              >
                submit a correction
              </a>
              . If your feelings are hurt, die mad.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
