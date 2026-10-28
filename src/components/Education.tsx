import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EntityLogo } from "./EntityLogo";
import logoTMSL from "@/assets/logos/tmsl.png";
import logoJDS from "@/assets/logos/jds.png";

interface Edu {
  when: string;
  school: string;
  stream: string;
  detail: string;
  marks?: string;
  logo?: string;
  fallback: string;
}

const ITEMS: Edu[] = [
  {
    when: "2021 — 2025",
    school: "Academy of Technology, Hooghly, West Bengal, India",
    stream: "B.Tech · Computer Science & Engineering",
    detail:
      "Focused coursework in algorithms, operating systems, DBMS, and computer networks — paired with self-driven projects across distributed backends and applied AI.",
    marks: "CGPA · 8.92 / 10",
    logo: logoTMSL,
    fallback: "TMSL",
  },
  {
    when: "2018 — 2020",
    school: "W.W.A. Cossipore English School, Kolkata",
    stream: "Higher Secondary ·ISC · Science (PCM + CS)",
    detail:
      "Specialised in Physics, Chemistry, Mathematics with Computer Science. First serious exposure to programming and problem-solving.",
    marks: "89.5%",
    logo: logoJDS,
    fallback: "JDS",
  },
  {
    when: "2006 — 2018",
    school: "W.W.A. Cossipore English School, Kolkata",
    stream: "Secondary · ICSE",
    detail:
      "Twelve formative years — built the discipline, curiosity, and academic foundation everything since has been built on.",
    marks: "90.8%",
    logo: logoJDS,
    fallback: "JDS",
  },
];

export function Education() {
  return (
    <section id="education" className="section scroll-mt-16">
      <div className="editorial">
        <SectionHeading
          index="07"
          eyebrow="Education"
          title={
            <>
              Where it all <span className="accent-serif text-accent">began</span>.
            </>
          }
        />

        <ol className="card divide-y divide-border">
          {ITEMS.map((it, i) => (
            <Reveal as="li" key={`${it.school}-${it.when}`} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-5 p-6 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8 md:p-8">
                <EntityLogo
                  src={it.logo}
                  alt={`${it.school} logo`}
                  fallback={it.fallback}
                  size="md"
                />
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-ink-faint">{it.when}</p>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-foreground">
                    {it.school}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{it.stream}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{it.detail}</p>
                </div>
                {it.marks && (
                  <p className="w-fit rounded-full border border-border bg-canvas-warm px-3 py-1 font-mono text-xs text-foreground md:mt-6">
                    {it.marks}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
