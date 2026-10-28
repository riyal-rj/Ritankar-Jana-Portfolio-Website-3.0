import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";
import logoTCS from "@/assets/logos/tcs.png";

interface SkillGroup {
  category: string;
  items: string[];
}

interface Metric {
  value: string;
  label: string;
}

interface Client {
  name: string;
  sector: string;
  url: string;
}

/** A plain bullet, or one led by a bold label (client / workstream). */
type Achievement = string | { label: string; text: string; url?: string };

interface Item {
  when: string;
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  summary: string;
  metrics?: Metric[];
  clients?: Client[];
  achievements: Achievement[];
  skills: SkillGroup[];
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    when: "2026 — Present",
    role: "Systems Engineer — AI Engineer · BFSI & Fintech Domain",
    org: "Tata Consultancy Services (TCS)",
    orgUrl: "https://www.tcs.com",
    location: "Kolkata, West Bengal, India · Remote",
    summary:
      "Designing agentic AI and GenAI systems for global BFSI clients — requirements automation, legacy code generation and modernisation, enterprise RAG and compliance auditing — and leading the client pitches that turn PoCs into ROI-backed production workflows.",
    metrics: [
      { value: "~98%", label: "BA effort cut · SWIFT → SRS" },
      { value: "~95%", label: "COBOL dev time cut" },
      { value: "72→90%", label: "RAG groundedness" },
      { value: "3", label: "Global BFSI clients" },
    ],
    clients: [
      { name: "Euroclear", sector: "Financial market infrastructure", url: "https://www.euroclear.com" },
      { name: "ING Belgium", sector: "Banking", url: "https://www.ing.be" },
      { name: "AG Insurance", sector: "Insurance", url: "https://www.aginsurance.be" },
    ],
    achievements: [
      {
        label: "GenAI PoCs",
        text: "Led agentic and GenAI PoCs across the BFSI portfolio, including an LLM email-surveillance system for compliance triage. Turned one-off SDLC experiments into repeatable workflows adopted by 3 client teams.",
      },
      {
        label: "Solution Architecture",
        text: "Worked with domain and enterprise architects to design tailored AI solutions, mapping GenAI capabilities onto each client's existing tech stack, constraints and highest-value use cases.",
      },
      {
        label: "Euroclear Bank · Requirements",
        url: "https://www.euroclear.com",
        text: "Built a requirements-automation agent that parses 100+ page SWIFT specification PDFs at 97% precision and auto-generates SRS documents. BA effort dropped from 3–4 days to 20–30 minutes per change request (~98%) across 100+ CRs, and I presented the ROI case to leadership.",
      },
      {
        label: "Euroclear Bank · BDD Generation",
        url: "https://www.euroclear.com",
        text: "Built a GitHub Copilot custom agent that turns every business requirements document into first-level BDD feature files written to Gherkin standards and independent of any test framework. It covers happy-path, negative and edge scenarios end to end, with a human-in-the-loop step where the generation plan is reviewed and approved before any files are written.",
      },
      {
        label: "ING Belgium · Pega → Java",
        url: "https://www.ing.be",
        text: "Proposed and architected a multi-agent modernisation solution that ingests a 10,000–12,000 XML Pega rule export. Custom Azure agents, Agent Builder and GitHub Copilot work over a graph database of rule dependencies on Azure Container Apps to produce a single logical markdown blueprint of every end-to-end flow, case type and business rule. I owned the architecture, cost budgeting and the client proposal on business value.",
      },
      {
        label: "AG Insurance · Mainframe",
        url: "https://www.aginsurance.be",
        text: "Engineered a COBOL code-generation agent that combines requirement JSON, MQ configuration and metadata to produce compilable programs. A 12–16 hour task now takes 1–3 minutes plus a 30–40 minute review (~95%), and I drove adoption across the developer team.",
      },
      {
        label: "Enterprise RAG",
        text: "Architected a BFSI policy-intelligence platform (FastAPI, Next.js, PostgreSQL, Qdrant) over 50+ policy chunks, using hybrid retrieval, reranking, Corrective/Self-RAG and SQL routing. Groundedness rose from 72% to 90% at 5s p95 latency, verified by 800+ tests.",
      },
      {
        label: "Brand Guardian AI",
        text: "Built a LangGraph video-compliance auditor (FastAPI, yt-dlp, Azure Video Indexer, Azure AI Search, Azure OpenAI) that checks content against 150+ brand and regulatory rules, cutting manual review from ~2 hours to ~8 minutes per video.",
      },
      {
        label: "Client Demos",
        text: "Co-led client-facing BFSI demos on enterprise AI productivity, securing PoC adoption across business analysis, mainframe and compliance teams.",
      },
    ],
    skills: [
      { category: "Agentic AI", items: ["LangGraph", "Multi-Agent Systems", "GitHub Copilot Agents", "Agent Builder", "Human-in-the-Loop"] },
      { category: "RAG", items: ["Qdrant", "Hybrid Retrieval", "Reranking", "Corrective / Self-RAG", "SQL Routing"] },
      { category: "Azure", items: ["Azure OpenAI", "AI Search", "Video Indexer", "Container Apps"] },
      { category: "Backend", items: ["FastAPI", "Next.js", "PostgreSQL", "Graph DB"] },
      { category: "Domain", items: ["BFSI", "SWIFT", "COBOL / Mainframe", "Pega", "BDD / Gherkin"] },
      { category: "Practice", items: ["Solution Architecture", "Cost Budgeting", "Client Pitches", "ROI Modelling"] },
    ],
    logo: logoTCS,
    fallback: "TCS",
  },
  {
    when: "Dec 2025 — 2026",
    role: "Software Engineer Trainee — DocuSign CLM & Workflow Engineer",
    org: "CloudKaptan Consultancy Services",
    orgUrl: "https://www.cloudkaptan.com",
    location: "Kolkata, India",
    summary:
      "Owned the DocuSign CLM platform for Sotheby's global sale rooms, from workflow architecture and SAP integration to performance tuning, QA and production support. I also advised product leadership on platform choice and test automation.",
    metrics: [
      { value: "6", label: "Global sale-room regions" },
      { value: "3", label: "Contract workflows standardised" },
      { value: "2", label: "CLM platforms benchmarked" },
      { value: "Dev→Prod", label: "Git-versioned delivery" },
    ],
    clients: [
      { name: "Sotheby's", sector: "Global auction house · Art & luxury", url: "https://www.sothebys.com" },
    ],
    achievements: [
      {
        label: "Global CLM Rollout",
        text: "Led multi-region DocuSign CLM deployments across London, New York, Geneva, Milan, Hong Kong and Zurich. I standardised the Consignment, NDA and Private Sale workflows so every sale room runs the same compliant contract process while still meeting regional requirements.",
        url: "https://www.sothebys.com",
      },
      {
        label: "Workflow Architecture & SAP",
        text: "Designed the core workflow architecture: conditional routing, advanced eForm logic and multi-level approval chains. I integrated SAP so enterprise client and transaction data stays in sync across the whole contract lifecycle.",
      },
      {
        label: "Private Sale Lifecycle",
        text: "Built end-to-end automation for Private Sale Agreements, from intake and drafting through approvals to execution. I turned complex, high-value business rules into executable workflows that business teams could trust.",
      },
      {
        label: "Workflow Performance",
        text: "Re-engineered heavy workflows by replacing large monolithic C# expression scripts with native loop steps and reusable components. This cut execution complexity, sped up runs and made the workflows far easier to maintain and extend.",
      },
      {
        label: "Attribute Optimisation",
        text: "Tuned the Private Sale Attribute workflow with advanced C# scripting and loop-based processing, so it scales cleanly as the number of attributes and deal variations grows.",
      },
      {
        label: "Git Version Control",
        text: "Implemented GitHub versioning for workflow JSON configs and C# scripts, backed by a Dev/UAT/Prod environment strategy and repository layout. This gave the team full traceability, safe rollbacks, parallel collaboration and structured change management for the first time.",
      },
      {
        label: "Consignment QA",
        text: "Ran rigorous validation of the Consignment workflow across positive, negative and edge-case business scenarios, with detailed QA documentation that the team reused as a regression baseline.",
      },
      {
        label: "Production RCA",
        text: "Led production debugging and root-cause postmortems on workflow and integration failures, shipping system-level fixes instead of patches to improve platform reliability.",
      },
      {
        label: "CLM Platform Evaluation",
        text: "Benchmarked Ironclad CLM against DocuSign CLM on architecture, workflow capabilities and integration patterns, producing a structured comparison to inform platform decisions.",
      },
      {
        label: "QA Automation Strategy",
        text: "Pitched a QA automation strategy to Product Managers and VPs: parallel scenario validation to replace manual eForm testing, cutting regression effort and lowering operational risk on every release.",
      },
    ],
    skills: [
      { category: "CLM", items: ["DocuSign CLM", "Ironclad CLM", "eForm Logic", "Conditional Routing", "Approval Chains"] },
      { category: "Scripting", items: ["C# Expressions", "Loop Steps", "Workflow JSON", "Reusable Components"] },
      { category: "Integration", items: ["SAP", "Enterprise Data Sync"] },
      { category: "DevOps", items: ["GitHub", "Dev / UAT / Prod", "Rollbacks", "Change Management"] },
      { category: "Quality", items: ["Scenario Testing", "QA Documentation", "QA Automation", "RCA"] },
      { category: "Practice", items: ["Platform Benchmarking", "Stakeholder Pitches", "Production Support"] },
    ],
    logo: logoCloudKaptan,
    fallback: "CK",
  },
  {
    when: "Nov 2025 — Dec 2025",
    role: "Software Engineer Trainee — Salesforce Developer",
    org: "CloudKaptan Consultancy Services",
    orgUrl: "https://www.cloudkaptan.com",
    location: "Kolkata, India",
    summary:
      "On an internal CloudKaptan project, engineered a scalable Salesforce backend and CRM interfaces that stay performant within governor limits at enterprise data volumes.",
    achievements: [
      "Built bulkified Apex trigger frameworks with optimized SOQL/SOSL queries to handle high-volume transactions within Salesforce governor limits.",
      "Developed dynamic CRM interfaces with Visualforce and Apex Controllers — powering advanced form handling, validation, and document-driven workflows.",
      "Automated enterprise processes via Record-Triggered and Screen Flows, seamlessly orchestrating Apex logic with declarative automation.",
      "Achieved 85%+ Apex code coverage through robust test class design, unblocking confident production deployments.",
    ],
    skills: [
      { category: "Backend", items: ["Apex", "SOQL/SOSL", "Visualforce"] },
      { category: "Automation", items: ["Triggers", "Record-Triggered Flows", "Screen Flows"] },
      { category: "Testing", items: ["Apex Test Classes", "85%+ Coverage"] },
      { category: "Domain", items: ["Salesforce CRM", "Enterprise Workflows"] },
    ],
    logo: logoCloudKaptan,
    fallback: "CK",
  },
  {
    when: "Jun 2025 — Aug 2025",
    role: "Software Engineer · Intern",
    org: "Soefia Education Incorporated",
    location: "Remote · USA",
    summary:
      "Owned reliability and infrastructure work on a multi-tenant AWS learning platform serving production traffic with zero customer-impacting outages.",
    achievements: [
      "Co-deployed a multi-tenant AWS architecture spanning ECS task definitions, S3 isolation per tenant, AWS Amplify namespaces, and Secrets Manager-backed credential rotation.",
      "Hardened backend resilience by uncovering and patching API edge-cases through targeted pytest suites, reducing regression escapes into staging.",
      "Triaged and resolved 30+ production issues via structured functional testing and root-cause reporting, accelerating release cadence.",
    ],
    skills: [
      { category: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
      { category: "Cloud", items: ["AWS ECS", "S3", "Amplify", "Secrets Manager"] },
      { category: "Testing", items: ["pytest", "Functional Testing"] },
      { category: "Tools", items: ["GitHub", "CloudWatch", "Postman"] },
      { category: "Domain", items: ["Multi-Tenant SaaS", "EdTech"] },
    ],
    logo: logoIndependent,
    fallback: "SE",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-20 md:py-28"
    >
      <div className="editorial">
        <Reveal>
          <div className="mb-16 border-b border-border pb-10">
            <p className="eyebrow mb-4">03 — Experience</p>
            <h2 className="font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Where I've <span className="display-wonk text-accent">shipped</span>.
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}
        <ol className="relative space-y-6 md:space-y-8">
          {/* vertical rail */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[27px]"
          />

          {ITEMS.map((it, i) => (
            <Reveal key={`${it.role}-${it.when}`} delay={i * 0.05}>
              <li className="group relative pl-14 md:pl-20">
                {/* Logo / timeline dot */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.org} logo`}
                    fallback={it.fallback}
                    size="md"
                    className="relative"
                  />
                </div>

                <article className="rounded-xl border border-border/80 bg-background/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_12px_40px_-18px_rgba(0,0,0,0.18)] md:p-7">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft md:text-[11px]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" aria-hidden />
                      {it.when}
                    </span>
                    <span aria-hidden className="text-border">/</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" aria-hidden />
                      {it.location}
                    </span>
                  </div>

                  {/* Role + Org */}
                  <div className="mt-3">
                    <h3 className="font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl md:text-[26px]">
                      {it.role}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft md:text-[15px]">
                      {it.orgUrl ? (
                        <a
                          href={it.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/org inline-flex items-center gap-1 underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent"
                        >
                          {it.org}
                          <ArrowUpRight
                            aria-hidden
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/org:-translate-y-0.5 group-hover/org:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        it.org
                      )}
                    </p>
                  </div>

                  {/* Summary */}
                  {it.summary && (
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/80 md:text-[15px]">
                      {it.summary}
                    </p>
                  )}

                  {/* Metrics */}
                  {it.metrics && it.metrics.length > 0 && (
                    <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 md:grid-cols-4">
                      {it.metrics.map((m) => (
                        <div key={m.label} className="bg-background px-4 py-3">
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-display text-2xl leading-none tracking-tight text-accent md:text-[28px]">
                            {m.value}
                          </dd>
                          <p aria-hidden className="mt-1.5 font-mono text-[9.5px] uppercase leading-snug tracking-[0.14em] text-ink-soft">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </dl>
                  )}

                  {/* Clients */}
                  {it.clients && it.clients.length > 0 && (
                    <div className="mt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                        Clients I've worked with directly
                      </p>
                      <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {it.clients.map((c) => (
                          <li key={c.name}>
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/client flex h-full items-center justify-between gap-3 rounded-lg border border-border/70 bg-canvas-warm/40 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-background"
                            >
                              <span className="min-w-0">
                                <span className="block font-display text-lg leading-tight tracking-tight text-foreground">
                                  {c.name}
                                </span>
                                <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-soft">
                                  {c.sector}
                                </span>
                              </span>
                              <ArrowUpRight
                                aria-hidden
                                className="h-4 w-4 shrink-0 text-ink-soft transition-all duration-300 group-hover/client:-translate-y-0.5 group-hover/client:translate-x-0.5 group-hover/client:text-accent"
                              />
                              <span className="sr-only">(opens official website in a new tab)</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {it.achievements.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {it.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="relative pl-4 text-[13.5px] leading-relaxed text-foreground/85 md:text-[14.5px]"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-accent/70"
                          />
                          {typeof a === "string" ? (
                            a
                          ) : (
                            <>
                              {a.url ? (
                                <a
                                  href={a.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-foreground underline decoration-accent/40 underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent"
                                >
                                  {a.label}
                                </a>
                              ) : (
                                <span className="font-medium text-foreground">{a.label}</span>
                              )}
                              <span aria-hidden className="text-ink-soft"> — </span>
                              {a.text}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  {it.skills.length > 0 && (
                    <div className="mt-5 border-t border-border/60 pt-4">
                      <div className="space-y-2.5">
                        {it.skills.map((group) => (
                          <div
                            key={group.category}
                            className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-4"
                          >
                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft sm:w-24 sm:pt-1">
                              {group.category}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center rounded-md border border-border/70 bg-canvas-warm/40 px-2 py-0.5 font-mono text-[10.5px] tracking-wide text-foreground/80 transition-colors duration-200 hover:border-foreground/25 hover:text-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
