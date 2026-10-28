import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import whisperArt from "@/assets/proj-whisper.jpg";

interface Project {
  no: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image: string;
  year: string;
}

const PROJECTS: Project[] = [
  {
    no: "01",
    title: "Whispr",
    tagline: "Real-time chat, microservice-native",
    description:
      "A chat platform built on Node.js microservices with RabbitMQ for async messaging, Redis for presence and caching, Mongo for persistence, and an AWS-friendly deploy story.",
    tags: ["Microservices", "RabbitMQ", "Redis", "MongoDB", "AWS"],
    github: "https://github.com/riyal-rj/whisper",
    image: whisperArt,
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="work" className="section scroll-mt-16">
      <div className="editorial">
        <SectionHeading
          index="05"
          eyebrow="Selected Work"
          title={
            <>
              The <span className="accent-serif text-accent">flagship</span> build.
            </>
          }
          action={
            <a
              href="https://github.com/riyal-rj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
            >
              All repositories ↗
            </a>
          }
        />

        <div className="space-y-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.05}>
              <article className="card card-hover group grid grid-cols-1 overflow-hidden lg:grid-cols-12">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-zoom relative block overflow-hidden border-b border-border bg-canvas-warm lg:col-span-7 lg:border-b-0 lg:border-r"
                >
                  <div className="aspect-[16/10] h-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} cover`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground backdrop-blur">
                    {p.no} · {p.year}
                  </span>
                </a>

                <div className="flex flex-col p-6 md:p-8 lg:col-span-5">
                  <p className="eyebrow">{p.tagline}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{p.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      Source ↗
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
