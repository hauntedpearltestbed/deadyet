"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";

interface PersonOption {
  slug: string;
  name: string;
}

interface SearchBoxProps {
  people: ReadonlyArray<PersonOption>;
}

const RESULT_LIMIT = 8;

function normalize(input: string): string {
  // NFKD covers most accented Latin letters, but stroke letters and ligatures
  // (ø, æ, œ, ß, ł, ð, þ) don't decompose and must be mapped explicitly so
  // ASCII queries hit them.
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/ø/g, "o")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ß/g, "ss")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/ł/g, "l");
}

// Token-aware scoring: prefix matches on the last name beat substring matches
// elsewhere. Tied scores fall through to alphabetical for predictability.
function scoreMatch(query: string, normalizedName: string): number {
  const tokens = normalizedName.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;
  const last = tokens[tokens.length - 1];
  const first = tokens[0];

  if (normalizedName === query) return 1000;
  if (last.startsWith(query)) return 600 - last.length;
  if (first.startsWith(query)) return 500 - first.length;
  for (let i = 1; i < tokens.length - 1; i++) {
    if (tokens[i].startsWith(query)) return 400 - tokens[i].length;
  }
  if (normalizedName.startsWith(query)) return 350 - normalizedName.length;
  const lastIdx = last.indexOf(query);
  if (lastIdx > 0) return 250 - lastIdx;
  for (let i = 0; i < tokens.length - 1; i++) {
    const idx = tokens[i].indexOf(query);
    if (idx > 0) return 150 - idx;
  }
  const wholeIdx = normalizedName.indexOf(query);
  if (wholeIdx > 0) return 100 - wholeIdx;
  return 0;
}

export function SearchBox({ people }: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const indexed = useMemo(
    () =>
      people.map((p) => ({ person: p, normalized: normalize(p.name) })),
    [people],
  );

  // Fuse stays around purely as a typo-tolerance fallback when the
  // token-aware ranker finds nothing.
  const fuse = useMemo(
    () =>
      new Fuse(people, {
        keys: ["name"],
        threshold: 0.4,
        minMatchCharLength: 2,
        ignoreLocation: true,
      }),
    [people],
  );

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    const q = normalize(trimmed);

    const scored: Array<{ person: PersonOption; score: number }> = [];
    for (const { person, normalized } of indexed) {
      const score = scoreMatch(q, normalized);
      if (score > 0) scored.push({ person, score });
    }

    if (scored.length > 0) {
      scored.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.person.name.localeCompare(b.person.name);
      });
      return scored.slice(0, RESULT_LIMIT).map((s) => s.person);
    }

    return fuse.search(trimmed, { limit: RESULT_LIMIT }).map((r) => r.item);
  }, [query, indexed, fuse]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filtered]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const navigateTo = useCallback(
    (slug: string) => {
      router.push(`/${slug}`);
    },
    [router],
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActiveIndex((i) => (i + 1 < filtered.length ? i + 1 : i));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActiveIndex((i) => (i > 0 ? i - 1 : i));
    } else if (e.key === "Enter" && filtered.length > 0) {
      navigateTo(filtered[activeIndex].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const displayQuery = query || " ";

  return (
    <div ref={containerRef} className="relative inline-flex flex-col items-center">
      <h1 className="text-[clamp(1.5rem,5.5vw,2.25rem)] sm:text-6xl md:text-7xl font-bold tracking-tight text-wrap sm:whitespace-nowrap">
        Is{" "}
        <span className="relative inline-block">
          {!isFocused && !query && (
            <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs md:text-sm opacity-40 pointer-events-none select-none">
              click to search
            </span>
          )}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              setOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            className="inline-block bg-transparent border-b-2 border-foreground text-center min-w-[4ch] max-w-[14ch] sm:max-w-[24ch] px-1 py-0 text-inherit font-inherit tracking-tight"
            style={{ width: `${Math.max(4, displayQuery.length)}ch` }}
            placeholder=""
            autoComplete="off"
            aria-label="Search for a person"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded={open}
            aria-activedescendant={
              open && filtered.length > 0 ? `search-option-${filtered[activeIndex]?.slug}` : undefined
            }
          />
          {open && filtered.length > 0 && (
            <ul
              id="search-results"
              role="listbox"
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-full max-w-md bg-background border border-foreground/20 rounded shadow-xl overflow-hidden z-50 flex flex-col text-base"
            >
              {filtered.map((person, index) => (
                <li
                  key={person.slug}
                  id={`search-option-${person.slug}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  className="m-0 p-0"
                >
                  <button
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => navigateTo(person.slug)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-center px-4 py-1.5 transition-colors text-xl whitespace-nowrap leading-none ${
                      index === activeIndex
                        ? "bg-foreground/10"
                        : "hover:bg-foreground/10"
                    }`}
                  >
                    {person.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {open && query.trim() && filtered.length === 0 && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-full max-w-md bg-background border border-foreground/20 rounded shadow-xl overflow-hidden z-50">
              <a
                href="/submit"
                className="block w-full px-4 py-2 text-xl underline hover:bg-foreground/10 transition-colors text-center leading-none"
              >
                Request an addition
              </a>
            </div>
          )}
        </span>
        {" "}dead yet?
      </h1>
    </div>
  );
}
