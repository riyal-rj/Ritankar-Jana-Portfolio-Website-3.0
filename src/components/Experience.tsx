import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EntityLogo } from "./EntityLogo";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";
import logoTCS from "@/assets/logos/tcs.png";

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
  clients?: Client[];
  achievements: Achievement[];
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
    clients: [
      {
        name: "Euroclear",
        sector: "Financial market infrastructure",
        url: "https://www.euroclear.com",
      },
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
    clients: [
      {
        name: "Sotheby's",
        sector: "Global auction house · Art & luxury",
        url: "https://www.sothebys.com",
      },
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
    logo: logoIndependent,
    fallback: "SE",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-16">
      <div className="editorial">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="accent-serif text-accent">shipped</span>.
            </>
          }
          description="Agentic AI and backend delivery for global banking, insurance and luxury clients — from architecture and PoC to production adoption."
        />

        <ol className="space-y-5">
          {ITEMS.map((it, i) => (
            <Reveal as="li" key={`${it.role}-${it.when}`} delay={i * 0.04}>
              <article className="card card-hover grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[220px_1fr] lg:gap-12">
                {/* Company rail */}
                <aside className="flex items-start gap-4 lg:sticky lg:top-24 lg:flex-col lg:self-start">
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.org} logo`}
                    fallback={it.fallback}
                    size="md"
                  />
                  <div className="min-w-0 space-y-2">
                    <p className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                      {it.orgUrl ? (
                        <a
                          href={it.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/org inline-flex items-center gap-1 transition-colors hover:text-accent"
                        >
                          {it.org}
                          <ArrowUpRight
                            aria-hidden
                            className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-all duration-300 group-hover/org:-translate-y-0.5 group-hover/org:translate-x-0.5 group-hover/org:text-accent"
                          />
                        </a>
                      ) : (
                        it.org
                      )}
                    </p>
                    <p className="flex items-center gap-1.5 font-mono text-[11px] text-ink-soft">
                      <Calendar className="h-3 w-3 shrink-0" aria-hidden />
                      {it.when}
                    </p>
                    <p className="flex items-start gap-1.5 font-mono text-[11px] leading-relaxed text-ink-soft">
                      <MapPin className="mt-0.5 h-3 w-3 shrink-0" aria-hidden />
                      {it.location}
                    </p>
                  </div>
                </aside>

                {/* Role detail */}
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-foreground md:text-2xl">
                    {it.role}
                  </h3>

                  {it.summary && (
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">
                      {it.summary}
                    </p>
                  )}

                  {/* Clients */}
                  {it.clients && it.clients.length > 0 && (
                    <div className="mt-6">
                      <p className="eyebrow">Clients I've worked with directly</p>
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {it.clients.map((c) => (
                          <li key={c.name}>
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/client flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-canvas-warm px-4 py-3 transition-colors duration-300 hover:border-accent/50"
                            >
                              <span className="min-w-0">
                                <span className="block text-[15px] font-semibold tracking-tight text-foreground">
                                  {c.name}
                                </span>
                                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                                  {c.sector}
                                </span>
                              </span>
                              <ArrowUpRight
                                aria-hidden
                                className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover/client:-translate-y-0.5 group-hover/client:translate-x-0.5 group-hover/client:text-accent"
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
                    <ul className="mt-6 space-y-3">
                      {it.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="relative pl-5 text-[14.5px] leading-relaxed text-ink-soft md:text-[15px]"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full border border-accent/70"
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
                              <span aria-hidden className="text-ink-faint">
                                {" "}
                                —{" "}
                              </span>
                              {a.text}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
