import { Reveal } from "./Reveal";
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
    description: "A chat platform built on Node.js microservices with RabbitMQ for async messaging, Redis for presence and caching, Mongo for persistence, and an AWS-friendly deploy story.",
    tags: ["Microservices", "RabbitMQ", "Redis", "MongoDB", "AWS"],
    github: "https://github.com/riyal-rj/whisper",
    image: whisperArt,
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
            <div>
              <p className="eyebrow mb-4">04 — Selected Work</p>
              <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
                The <span className="display-wonk text-accent">flagship</span> build.
              </h2>
            </div>
            <a
              href="https://github.com/riyal-rj?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-foreground link-underline"
            >
              All repositories ↗
            </a>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.05}>
              <article
                className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-zoom relative col-span-1 block overflow-hidden rounded-sm border border-border bg-canvas-warm lg:col-span-7 [direction:ltr]"
                  data-cursor="hover"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} cover`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 backdrop-blur-sm">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                      {p.no} / {p.year}
                    </span>
                  </div>
                </a>

                <div className="col-span-1 lg:col-span-5 [direction:ltr]">
                  <p className="eyebrow mb-4">{p.tagline}</p>
                  <h3 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                    {p.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-foreground link-underline"
                    >
                      Source ↗
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-widest text-accent link-underline"
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
