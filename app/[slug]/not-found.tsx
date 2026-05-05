import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
        Not found
      </h1>
      <p className="text-muted mb-8 text-center max-w-md">
        We do not have a page for that person yet. If you think they should be
        added, you can request it.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="underline hover:text-muted transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/submit"
          className="underline hover:text-muted transition-colors"
        >
          Request an addition
        </Link>
      </div>
    </main>
  );
}
