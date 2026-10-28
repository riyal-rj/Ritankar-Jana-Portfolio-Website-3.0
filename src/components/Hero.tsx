import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import profile from "@/assets/profile.webp";

const PROOF = [
  { value: "~98%", label: "BA effort cut", context: "Euroclear · SWIFT → SRS agent" },
  { value: "~95%", label: "COBOL dev time cut", context: "AG Insurance · code-gen agent" },
  { value: "72→90%", label: "RAG groundedness", context: "Enterprise RAG · 5s p95" },
  { value: "6", label: "Global regions shipped", context: "Sotheby's · DocuSign CLM" },
];

/** Clients worked with directly, grouped by the employer I served them through. */
const CLIENTS_BY_EMPLOYER = [
  {
    employer: "TCS",
    url: "https://www.tcs.com",
    clients: [
      { name: "Euroclear", url: "https://www.euroclear.com" },
      { name: "ING Belgium", url: "https://www.ing.be" },
      { name: "AG Insurance", url: "https://www.aginsurance.be" },
    ],
  },
  {
    employer: "CloudKaptan",
    url: "https://www.cloudkaptan.com",
    clients: [{ name: "Sotheby's", url: "https://www.sothebys.com" }],
  },
];

const OPEN_TO = [
  { short: "AI Engineer", full: "AI Engineer" },
  { short: "Backend Engineer", full: "Backend Engineer" },
  { short: "SDE", full: "Software Development Engineer" },
  { short: "FDE", full: "Forward Deployed Engineer" },
];

/** Profile photo card — the hero's visual anchor. */
function Portrait() {
  return (
    <figure className="card relative mx-auto max-w-sm overflow-hidden p-2 shadow-[var(--shadow-lg)] lg:mr-0 lg:max-w-[400px]">
      <img
        src={profile}
        alt="Portrait of Ritankar Jana"
        width={800}
        height={1000}
        fetchPriority="high"
        className="aspect-[4/5] w-full rounded-xl object-cover"
      />
      <figcaption className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold tracking-tight text-foreground">
            Ritankar Jana
          </span>
          <span className="block text-[13px] text-ink-soft">Backend & AI Engineer</span>
        </span>
        <span className="flex shrink-0 items-center gap-1 font-mono text-[11px] text-ink-faint">
          <MapPin className="h-3 w-3" aria-hidden />
          Kolkata, IN
        </span>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="editorial relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Headline */}
          <div className="min-w-0 lg:col-span-7">
            <a
              href="#experience"
              className="fade-up group inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pl-3 pr-4 text-[12.5px] text-ink-soft backdrop-blur transition-colors hover:border-foreground/25 hover:text-foreground"
            >
              <span className="pulse-dot shrink-0" aria-hidden />
              <span className="truncate">Currently — Systems Engineer, AI Engineer @ TCS</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>

            <h1 className="fade-up [animation-delay:80ms] mt-8 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[3.25rem] lg:text-[3.6rem]">
              Backend, with a taste for{" "}
              <span className="accent-serif text-accent">intelligence</span>.
            </h1>

            <p className="fade-up [animation-delay:180ms] mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              I'm <span className="font-medium text-foreground">Ritankar Jana</span> — a software
              engineer building robust backend systems and agentic AI, and the unglamorous parts
              that make products feel effortless. Currently designing GenAI systems for global BFSI
              clients at TCS, always learning out loud.
            </p>

            <div className="fade-up [animation-delay:280ms] mt-7 flex flex-wrap items-center gap-2">
              <span className="eyebrow mr-1">Open to</span>
              {OPEN_TO.map((r) => (
                <span key={r.short} className="chip" title={r.full}>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {r.short === r.full ? r.short : `${r.short} · ${r.full}`}
                </span>
              ))}
            </div>

            <div className="fade-up [animation-delay:360ms] mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="fade-up [animation-delay:200ms] min-w-0 lg:col-span-5">
            <Portrait />
          </div>
        </div>

        {/* Proof metrics */}
        <dl
          className="fade-up [animation-delay:450ms] mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
          style={{ gap: "1px" }}
        >
          {PROOF.map((p) => (
            <div key={p.label} className="bg-background p-5 md:p-6">
              <dd className="text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
                {p.value}
              </dd>
              <dt className="mt-2 text-sm text-foreground/90">{p.label}</dt>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                {p.context}
              </p>
            </div>
          ))}
        </dl>

        {/* Clients, grouped by employer */}
        <div className="mt-12 border-t border-border py-10">
          <p className="eyebrow">Clients I've worked with directly</p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
            {CLIENTS_BY_EMPLOYER.map((g) => (
              <div key={g.employer} className="card p-5">
                <p className="font-mono text-[11px] text-ink-faint">
                  via{" "}
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {g.employer}
                  </a>
                </p>
                <ul className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {g.clients.map((c) => (
                    <li key={c.name}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-xl font-semibold tracking-[-0.02em] text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {c.name}
                        <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
