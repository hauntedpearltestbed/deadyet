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

export function SearchBox({ people }: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(people, {
        keys: ["name"],
        threshold: 0.35,
        minMatchCharLength: 1,
        ignoreLocation: true,
      }),
    [people],
  );

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    return fuse.search(trimmed).map((r) => r.item);
  }, [query, fuse]);

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
    if (e.key === "Enter" && filtered.length > 0) {
      navigateTo(filtered[0].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const displayQuery = query || " ";

  return (
    <div ref={containerRef} className="relative inline-flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight whitespace-nowrap">
        Is{" "}
        <span className="relative inline-block">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            className="inline-block bg-transparent border-b-2 border-foreground text-center min-w-[4ch] max-w-[24ch] px-1 py-0 text-inherit font-inherit tracking-tight"
            style={{ width: `${Math.max(4, displayQuery.length)}ch` }}
            placeholder=""
            autoComplete="off"
            aria-label="Search for a person"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded={open}
          />
          {open && filtered.length > 0 && (
            <ul
              id="search-results"
              role="listbox"
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 min-w-full max-w-md bg-background border border-foreground/20 rounded shadow-xl overflow-hidden z-50"
            >
              {filtered.map((person) => (
                <li key={person.slug} role="option">
                  <button
                    type="button"
                    onClick={() => navigateTo(person.slug)}
                    className="w-full text-left px-4 py-2 hover:bg-foreground/10 transition-colors text-base whitespace-nowrap leading-none"
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
                className="block w-full px-4 py-2 text-sm underline hover:bg-foreground/10 transition-colors text-center leading-none"
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
