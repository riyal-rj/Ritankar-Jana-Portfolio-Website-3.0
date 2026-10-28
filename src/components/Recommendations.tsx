import { useState } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import photoAbhirup from "@/assets/rec-abhirup.webp";
import photoShubhang from "@/assets/rec-shubhang.webp";

interface Recommendation {
  name: string;
  /** Their title and company at the time of writing */
  title: string;
  company: string;
  /** Optional photo import; initials are shown when absent */
  photo?: string;
  profileUrl?: string;
  /** How they know you, as LinkedIn phrases it */
  relationship: string;
  /** The employer you were at when they recommended you */
  workedAt: string;
  workedAtUrl?: string;
  date: string;
  text: string;
}

// Text is verbatim from LinkedIn — keep the original wording when editing
const ITEMS: Recommendation[] = [
  {
    name: "Abhirup",
    title: "Executive",
    company: "KPMG Global Services",
    photo: photoAbhirup,
    relationship: "Worked with Ritankar on the same team",
    workedAt: "RBI HaRBInger 2024",
    date: "August 3, 2026",
    text: "Ritankar has always been an excellent student, great learner and most importantly, a consistent hard worker. We have worked together as a team during HarBinger 2024, a FinTech hackathon organized by RBI and I can attest to the fact that he has great enthusiasm and terrific research skills. These, when combined with his technically proficiency, makes him an ideal team player.\nHe is an extremely reliable resource under challenging circumstances. I highly recommend him and sincerely wish him all the best.",
  },
  {
    name: "Shubhang Sharma",
    title: "Senior Software Engineer",
    company: "CloudKaptan Consultancy Services",
    photo: photoShubhang,
    relationship: "Managed Ritankar directly",
    workedAt: "CloudKaptan Consultancy Services",
    workedAtUrl: "https://www.cloudkaptan.com",
    date: "May 21, 2026",
    text: "I had the opportunity to work closely with Ritankar Jana, and it was great seeing his growth throughout the journey. He consistently showed a strong willingness to learn, take ownership, and adapt quickly to new challenges.\n\nHis dedication, positive attitude, and ability to collaborate with the team made him a valuable contributor. What stood out the most was his problem-solving mindset and eagerness to improve with every task he handled.\n\nI'm confident that he will continue to grow professionally and be an asset to any team he becomes a part of. Wishing him the very best for the future.",
  },
];

const CLAMP_AT = 320; // characters before the "Read more" toggle appears

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function RecommendationCard({ r }: { r: Recommendation }) {
  const [open, setOpen] = useState(false);
  const long = r.text.length > CLAMP_AT;

  return (
    <figure className="card card-hover flex h-full flex-col p-6 md:p-8">
      <Quote className="h-6 w-6 text-accent/70" aria-hidden />

      <blockquote className="mt-4 flex-1">
        <p
          className={`whitespace-pre-line text-[15.5px] leading-[1.75] text-foreground/85 ${
            long && !open ? "line-clamp-6" : ""
          }`}
        >
          {r.text}
        </p>
        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-3 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {open ? "Show less" : "Read more"}
          </button>
        )}
      </blockquote>

      <figcaption className="mt-6 border-t border-border pt-5">
        <div className="flex items-center gap-3.5">
          {r.photo ? (
            <img
              src={r.photo}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-full border border-border object-cover"
            />
          ) : (
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-canvas-warm text-sm font-semibold text-ink-soft"
            >
              {initials(r.name)}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold tracking-tight text-foreground">
              {r.profileUrl ? (
                <a
                  href={r.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {r.name}
                </a>
              ) : (
                r.name
              )}
            </p>
            <p className="text-[13px] leading-snug text-ink-soft">
              {r.title} · {r.company}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-1 font-mono text-[11px] leading-relaxed text-ink-faint">
          <p>{r.relationship}</p>
          <p>
            at{" "}
            {r.workedAtUrl ? (
              <a
                href={r.workedAtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent"
              >
                {r.workedAt}
              </a>
            ) : (
              r.workedAt
            )}
            <span aria-hidden> · </span>
            {r.date}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Recommendations() {
  return (
    <section
      id="recommendations"
      className="section scroll-mt-16 border-y border-border bg-canvas-warm"
    >
      <div className="editorial">
        <SectionHeading
          index="04"
          eyebrow="Recommendations"
          title={
            <>
              What colleagues <span className="accent-serif text-accent">say</span>.
            </>
          }
          description="In their words — from the people I've built and shipped alongside."
          action={
            <a
              href="https://www.linkedin.com/in/riyal-rj/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/30"
            >
              View on LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ITEMS.map((r, i) => (
            <Reveal key={`${r.name}-${i}`} delay={i * 0.08}>
              <RecommendationCard r={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
