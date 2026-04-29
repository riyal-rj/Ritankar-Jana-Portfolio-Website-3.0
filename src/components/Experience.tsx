import { Reveal } from "./Reveal";
import { EntityLogo } from "./EntityLogo";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import logoCloudKaptan from "@/assets/logos/cloudkaptan.png";
import logoIndependent from "@/assets/logos/independent.png";

interface SkillGroup {
  category: string;
  items: string[];
}

interface ExperienceSection {
  title: string;
  achievements: string[];
}

interface Item {
  when: string;
  role: string;
  org: string;
  location: string;
  summary: string;
  achievements?: string[];
  sections?: ExperienceSection[];
  skills: SkillGroup[];
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    when: "Nov 2025 — Present",
    role: "Software Engineer Trainee — Salesforce Developer & Business Workflow Engineer",
    org: "CloudKaptan Consultancy Services",
    location: "Kolkata, India",
    summary:
      "Delivering enterprise CRM automation and contract lifecycle solutions by combining Salesforce backend engineering with DocuSign CLM workflow architecture across global regions.",
    sections: [
      {
        title: "DocuSign CLM Solutions & Business Workflow Engineer",
        achievements: [
          "Led multi-region DocuSign CLM implementations, delivering contract lifecycle solutions across London, New York, Geneva, Milan, Hong Kong, and Zurich, ensuring compliance and consistency for Consignment and NDA workflows.",
          "Designed complex workflow architectures, including conditional routing based on business rules, advanced eForm logic, and end-to-end lifecycle handling of contract processes.",
          "Built a Git-based version control system for CLM workflows, exporting workflow configurations (JSON) and expression scripts (C#) into GitHub, enabling traceability, rollback, and structured change management while introducing collaborative development workflows.",
          "Defined environment strategies (Dev / UAT / Prod) and repository structures for scalable deployment and lifecycle management of contract workflows.",
          "Developed a complete Private Sale Agreement lifecycle, translating business requirements into executable CLM workflows and integrating with SAP systems for enterprise data flow.",
          "Performed deep production debugging and postmortem analysis, resolving critical workflow and integration issues through root cause analysis and system-level fixes.",
          "Contributed to QA automation strategy discussions, collaborating with stakeholders to propose scalable testing solutions for complex contract workflows.",
        ],
      },
      {
        title: "Salesforce Developer",
        achievements: [
          "Engineered scalable backend logic using Apex, designing bulkified trigger frameworks and optimized SOQL/SOSL queries to handle high-volume transactions while strictly adhering to Salesforce governor limits.",
          "Developed dynamic CRM interfaces using Visualforce + Apex Controllers, enabling advanced form handling, validation, and document-driven workflows integrated with business processes.",
          "Automated enterprise workflows using Record-Triggered Flows and Screen Flows, seamlessly integrating with Apex logic and achieving 85%+ code coverage through robust test class implementation.",
        ],
      },
    ],
    skills: [
      { category: "Backend", items: ["Apex", "SOQL/SOSL", "Visualforce", "C#"] },
      {
        category: "Automation",
        items: ["Salesforce Flows", "Triggers", "eForm Logic", "Conditional Routing"],
      },
      { category: "Integration", items: ["SAP Integration", "Enterprise Workflows"] },
      { category: "DevOps", items: ["GitHub", "Version Control", "Multi-Env Strategy"] },
      { category: "Testing", items: ["Apex Test Classes", "E2E Testing", "Debugging", "RCA"] },
      {
        category: "Domain",
        items: ["Salesforce CRM", "DocuSign CLM", "Contract Lifecycle", "Global Compliance"],
      },
      {
        category: "Business",
        items: ["Requirement Analysis", "Stakeholder Communication", "Process Design"],
      },
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
      "Co-deployed a multi-tenant AWS architecture spanning ECS task definitions, S3 isolation per tenant, AWS Amplify namespaces and Secrets Manager-backed credential rotation.",
      "Hardened backend resilience by uncovering and patching API edge-cases through targeted pytest suites, reducing regression escapes into staging.",
    ],
    skills: [
      { category: "Backend", items: ["Python", "FastAPI", "REST APIs"] },
      { category: "Cloud", items: ["AWS ECS", "S3", "Amplify", "Secrets Manager"] },
      { category: "Testing", items: ["pytest", "Unit Testing"] },
      { category: "Tools", items: ["GitHub", "CloudWatch", "Postman"] },
      { category: "Domain", items: ["Multi-Tenant SaaS", "EdTech"] },
    ],
    logo: logoIndependent,
    fallback: "SE",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-40">
      <div className="editorial">
        <Reveal>
          <div className="mb-12 border-b border-border pb-8 md:mb-16 md:pb-10">
            <p className="eyebrow mb-4">05 — Trajectory</p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-7xl">
              A short <span className="display-wonk text-accent">history</span>.
            </h2>
          </div>
        </Reveal>

        <ol className="relative space-y-8 md:space-y-12">
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 left-[19px] top-2 w-px bg-border md:left-[27px]"
          />

          {ITEMS.map((it, i) => (
            <Reveal key={`${it.org}-${it.role}`} delay={i * 0.06}>
              <li className="group relative pl-14 md:pl-20">
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-1 rounded-full bg-canvas-warm/60 transition-opacity group-hover:opacity-100"
                  />
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.org} logo`}
                    fallback={it.fallback}
                    size="md"
                    className="relative"
                  />
                </div>

                <article className="rounded-lg border border-border bg-background/40 p-5 transition-all duration-300 hover:border-foreground/30 hover:bg-canvas-warm/40 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] md:p-7">
                  <header className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft md:text-xs">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" aria-hidden />
                        {it.when}
                      </span>
                      <span aria-hidden className="text-border">
                        /
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" aria-hidden />
                        {it.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        {it.role}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-accent md:text-xs">
                        {it.org}
                      </p>
                    </div>
                  </header>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft md:text-base">
                    {it.summary}
                  </p>

                  <div className="mt-5 space-y-5">
                    {it.sections ? (
                      it.sections.map((section) => (
                        <div key={section.title}>
                          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent md:text-[11px]">
                            {section.title}
                          </p>

                          <ul className="space-y-2.5">
                            {section.achievements.map((achievement, idx) => (
                              <li
                                key={`${section.title}-${idx}`}
                                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]"
                              >
                                <Sparkles
                                  className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                                  aria-hidden
                                />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <ul className="space-y-2.5">
                        {it.achievements?.map((achievement, idx) => (
                          <li
                            key={`${it.role}-${idx}`}
                            className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]"
                          >
                            <Sparkles
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                              aria-hidden
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="eyebrow mb-3 text-[10px] md:text-[11px]">
                      Skills & Tech Used
                    </p>

                    <div className="space-y-3">
                      {it.skills.map((group) => (
                        <div
                          key={group.category}
                          className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
                        >
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-soft sm:w-28 sm:pt-1.5 md:text-[11px]">
                            {group.category}
                          </span>

                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-full border border-border bg-canvas-warm/50 px-2.5 py-1 font-mono text-[10px] tracking-wide text-foreground/85 transition-colors duration-200 hover:border-accent/50 hover:bg-canvas-warm hover:text-foreground md:text-[11px]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}