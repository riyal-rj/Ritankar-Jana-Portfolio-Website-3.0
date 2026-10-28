import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CodePanel } from "./CodePanel";

const FACTS = [
  { k: "Based in", v: "Kolkata, India" },
  { k: "Currently", v: "TCS · AI Engineer" },
  { k: "Focus", v: "Agentic AI · RAG · Backend" },
  { k: "Domain", v: "BFSI · Banking · Insurance" },
  { k: "Open to", v: "AI · Backend · SDE · FDE" },
];

const DOMAINS = [
  {
    key: "backend",
    title: "Backend Engineering",
    lede: "Distributed services, APIs, queues and data stores — and the correctness, latency and observability that keep them honest in production.",
    tags: [
      "Java · Spring Boot",
      "Node.js",
      "FastAPI",
      "gRPC",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    dot: "bg-backend",
    text: "text-backend",
  },
  {
    key: "ai",
    title: "AI Engineering & Architecture",
    lede: "Agentic systems, enterprise RAG and LLM workflows for regulated, high-stakes domains — from architecture and cost budgeting to the client pitch.",
    tags: [
      "LangGraph",
      "Multi-Agent Systems",
      "Enterprise RAG",
      "Qdrant",
      "Azure OpenAI",
      "Azure AI Search",
      "GitHub Copilot Agents",
      "Human-in-the-Loop",
    ],
    dot: "bg-ai",
    text: "text-ai",
  },
];

const ROLES = [
  {
    title: "AI Engineer",
    expanded: "",
    blurb: "Agentic systems, enterprise RAG and LLM workflows taken from PoC to production.",
  },
  {
    title: "Backend Engineer",
    expanded: "",
    blurb: "Distributed services, APIs, queues and data stores built for correctness and scale.",
  },
  {
    title: "SDE",
    expanded: "Software Development Engineer",
    blurb: "Product engineering across the stack, from system design to shipping.",
  },
  {
    title: "FDE",
    expanded: "Forward Deployed Engineer",
    blurb: "Embedded with customers, turning their problems into deployed, adopted solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="section scroll-mt-16">
      <div className="editorial">
        <SectionHeading
          index="02"
          eyebrow="About"
          title={
            <>
              I build the layers people <span className="accent-serif text-accent">don't see</span>.
            </>
          }
          description="The APIs, queues, and pipelines that let the surface feel effortless."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-7">
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-soft">
              <p>
                I'm a Systems Engineer and AI Engineer at{" "}
                <span className="text-foreground">Tata Consultancy Services</span> in the BFSI and
                fintech domain, designing agentic and GenAI systems for global BFSI clients like
                Euroclear, ING and AG Insurance. That means requirements automation, legacy
                modernisation, enterprise RAG and compliance auditing.
              </p>
              <p>
                I go from architecture and cost budgeting to the client pitch, turning PoCs into
                ROI-backed workflows that real teams adopt. It's backend work at heart: correctness,
                latency and observability matter more than pixels.
              </p>
              <p>
                My playground sits at the intersection of distributed backends and applied AI: gRPC
                microservices, message brokers, RAG pipelines and the quiet plumbing that turns a
                clever prototype into something operable in production.
              </p>
              <p>
                Previously at{" "}
                <span className="text-foreground">CloudKaptan Consultancy Services</span>, I worked
                as a Software Engineer Trainee, building scalable Salesforce solutions and later
                leading enterprise DocuSign CLM workflows across global regions with SAP-integrated
                business processes and Git-based workflow versioning.
              </p>
              <p>
                I translated business requirements into automated contract lifecycle solutions,
                while also driving workflow quality initiatives through production debugging, RCA,
                and automation-focused QA improvements.
              </p>
              <p>
                When I'm not shipping, I'm writing notes on system design, grinding low-level design
                problems in Java, and exploring Spring Boot and the AWS toolbelt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            <CodePanel />
            <dl className="card mt-4 divide-y divide-border">
              {FACTS.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between gap-6 px-5 py-4">
                  <dt className="eyebrow">{f.k}</dt>
                  <dd className="text-right text-[15px] font-medium text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              Let's collaborate <span className="text-accent">→</span>
            </a>
          </Reveal>
        </div>

        {/* Two domains */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {DOMAINS.map((d, i) => (
            <Reveal key={d.key} delay={i * 0.08}>
              <article className="card card-hover h-full p-6 md:p-8">
                <p
                  className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${d.text}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${d.dot}`} aria-hidden />
                  Domain 0{i + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {d.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{d.lede}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Roles I'm open to */}
        <Reveal delay={0.1}>
          <div className="card mt-4 p-6 md:p-8">
            <p className="eyebrow flex items-center gap-2.5">
              <span className="pulse-dot" aria-hidden /> Open to roles
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {ROLES.map((r) => (
                <li key={r.title} className="bg-surface p-5">
                  <p className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                    {r.title}
                  </p>
                  {r.expanded && (
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-faint">
                      {r.expanded}
                    </p>
                  )}
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{r.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
