import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import { MapPin, Calendar } from "lucide-react";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";
import logoTCS from "@/assets/logos/tcs.png";

interface SkillGroup {
  category: string;
  items: string[];
}

interface Item {
  when: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: SkillGroup[];
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    when: "2026 — Present",
    role: "System Engineer — Prime Cadre",
    org: "Tata Consultancy Services (TCS)",
    location: "India",
    summary: "",
    achievements: [],
    skills: [],
    logo: logoTCS,
    fallback: "TCS",
  },
  {
    when: "Dec 2025 — 2026",
    role: "Software Engineer Trainee — DocuSign CLM & Workflow Engineer",
    org: "CloudKaptan Consultancy Services",
    location: "Kolkata, India",
    summary:
      "Architecting enterprise contract lifecycle workflows across global regions, with version-controlled, multi-environment delivery and SAP-integrated business processes.",
    achievements: [
      "Led multi-region DocuSign CLM rollouts across London, New York, Geneva, Milan, Hong Kong and Zurich — ensuring compliance for Consignment and NDA workstreams.",
      "Designed complex workflow architectures with conditional routing, advanced eForm logic, and end-to-end contract lifecycle handling.",
      "Built a Git-based versioning system for CLM workflows — exporting workflow JSON and C# expression scripts into GitHub for traceable change management and parallel collaboration.",
      "Defined a Dev/UAT/Prod environment strategy and repository topology, establishing a scalable deployment blueprint reused across CLM workstreams.",
      "Delivered a complete Private Sale Agreement lifecycle, translating business requirements into executable workflows with SAP enterprise data integration.",
      "Drove production debugging and postmortem analysis, resolving critical workflow and integration issues through structured root-cause analysis.",
    ],
    skills: [
      { category: "CLM", items: ["DocuSign CLM", "eForm Logic", "Conditional Routing", "Lifecycle Design"] },
      { category: "Scripting", items: ["C#", "Workflow JSON"] },
      { category: "Integration", items: ["SAP", "Enterprise APIs"] },
      { category: "DevOps", items: ["GitHub", "Multi-Env Strategy", "Version Control"] },
      { category: "Practice", items: ["RCA", "Production Debugging", "Stakeholder Comms"] },
    ],
    logo: logoCloudKaptan,
    fallback: "CK",
  },
  {
    when: "Nov 2025 — Dec 2025",
    role: "Software Engineer Trainee — Salesforce Developer",
    org: "CloudKaptan Consultancy Services",
    location: "Kolkata, India",
    summary:
      "Engineered scalable Salesforce backend and CRM interfaces, sustaining performance under governor limits at enterprise data volumes.",
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
                      {it.org}
                    </p>
                  </div>

                  {/* Summary */}
                  {it.summary && (
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground/80 md:text-[15px]">
                      {it.summary}
                    </p>
                  )}

                  {/* Achievements */}
                  {it.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {it.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="relative pl-4 text-[13.5px] leading-relaxed text-foreground/85 md:text-[14.5px]"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-accent/70"
                          />
                          {a}
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
