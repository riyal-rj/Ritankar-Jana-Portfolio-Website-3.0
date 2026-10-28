import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Group {
  label: string;
  items: { name: string; note: string; level: "core" | "working" | "exploring" }[];
}

const GROUPS: Group[] = [
  {
    label: "Languages",
    items: [
      { name: "Java", note: "Core & Advanced, OOP, Large-scale systems", level: "core" },
      { name: "JavaScript / TS", note: "ES6+, Async, Type-safe development", level: "core" },
      { name: "Python", note: "Scripting, Web APIs, AI/ML Pipelines", level: "working" },
      { name: "C#", note: "Workflow expressions, Document generation", level: "working" },
    ],
  },
  {
    label: "Backend & Web",
    items: [
      { name: "Node.js / Express", note: "Scalable APIs, Microservices", level: "core" },
      { name: "Spring Boot", note: "Enterprise Java, Security, JPA", level: "working" },
      { name: "React / Next.js", note: "Component-based UI, SSR, Hooks", level: "core" },
      { name: "FastAPI", note: "Asynchronous Python APIs", level: "working" },
    ],
  },
  {
    label: "Enterprise & CLM",
    items: [
      { name: "Salesforce CRM", note: "Admin, Dev", level: "exploring" },
      { name: "DocuSign CLM", note: "Workflow architecture, Global rollout", level: "working" },
      {
        name: "Business Automation",
        note: "Flows, Triggers, Process optimization",
        level: "exploring",
      },
      { name: "Apex", note: "Salesforce backend, Triggers, Bulkified logic", level: "exploring" },
      { name: "LWC", note: "Lightning Web Components, SF Customization", level: "exploring" },
    ],
  },
  {
    label: "Data & Infrastructure",
    items: [
      { name: "MongoDB", note: "NoSQL, Schema design, Aggregation", level: "core" },
      { name: "MySQL / PostgreSQL", note: "Relational modeling, Joins, CTEs", level: "core" },
      { name: "Redis", note: "Caching, Real-time data, Presence", level: "exploring" },
      { name: "Docker", note: "Containerization, Multi-stage builds", level: "exploring" },
      { name: "Git / GitHub", note: "CI/CD, Version control, Workflows", level: "core" },
    ],
  },
  {
    label: "AI / Machine Learning",
    items: [
      { name: "Computer Vision", note: "YOLOv8, Object detection", level: "working" },
      { name: "NLP / LLMs", note: "FinBERT, Transformers, Prompting", level: "working" },
      { name: "PyTorch / Sklearn", note: "Model training, Data analysis", level: "working" },
    ],
  },
];

const DOT = {
  core: "bg-foreground",
  working: "bg-accent",
  exploring: "border border-ink-soft",
} as const;

export function Stack() {
  return (
    <section id="stack" className="section scroll-mt-16 border-y border-border bg-canvas-warm">
      <div className="editorial">
        <SectionHeading
          index="06"
          eyebrow="The Stack"
          title={
            <>
              Tools, well <span className="accent-serif text-accent">used</span>.
            </>
          }
          action={
            <ul className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-foreground" /> Core
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" /> Working
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full border border-ink-soft" /> Exploring
              </li>
            </ul>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={(gi % 3) * 0.06}>
              <div className="card h-full p-6">
                <p className="eyebrow">{g.label}</p>
                <ul className="mt-4 divide-y divide-border">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-start gap-3 py-3">
                      <span
                        className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${DOT[it.level]}`}
                        role="img"
                        aria-label={it.level}
                      />
                      <div className="min-w-0">
                        <p className="text-[15px] font-medium text-foreground">{it.name}</p>
                        <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{it.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
