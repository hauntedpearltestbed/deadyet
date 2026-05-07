export function Footer() {
  return (
    <footer className="py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted">
      <span className="text-center sm:text-left">
        Not finding who you're looking for?{" "}
        <br className="sm:hidden" />
        <a href="/submit" className="underline hover:text-foreground transition-colors">
          Request an addition
        </a>
      </span>
      <span className="text-xs opacity-60 flex items-center gap-2">
        Informational purposes only
        <a
          href="https://ko-fi.com/C0C71Z2PFL"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          Support
        </a>
        <a href="/about" className="underline hover:text-foreground transition-colors">
          About
        </a>
      </span>
    </footer>
  );
}
