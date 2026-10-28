export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="editorial flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {year} Ritankar Jana — Designed & coded with care.
        </p>
        <p className="flex items-center gap-2.5 font-mono text-xs text-ink-faint">
          Kolkata · IN <span aria-hidden>·</span>
          <span className="pulse-dot" aria-hidden /> Available
        </p>
      </div>
    </footer>
  );
}
