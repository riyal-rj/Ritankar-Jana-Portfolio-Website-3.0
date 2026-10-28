import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import avatar from "@/assets/profile-avatar.webp";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type Theme = "dark" | "light";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => setTheme(readTheme()), []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(
      (el): el is Element => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="editorial flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label="Ritankar Jana — home">
          <img
            src={avatar}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-border object-cover transition-colors group-hover:border-accent/60"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Ritankar Jana
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
              Backend · AI Engineer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                active === item.href
                  ? "bg-secondary text-foreground"
                  : "text-ink-soft hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://leetcode.com/u/logiknest-RJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3 py-1.5 text-[13px] text-ink-soft transition-colors hover:text-foreground md:inline-flex"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/riyal-rj"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            GitHub ↗
          </a>
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center xl:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-foreground transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="editorial flex flex-col py-4" aria-label="Mobile">
            {[
              ...NAV,
              { label: "LeetCode", href: "https://leetcode.com/u/logiknest-RJ/" },
              { label: "GitHub", href: "https://github.com/riyal-rj" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="border-b border-border py-3.5 text-lg font-medium tracking-tight text-foreground last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
