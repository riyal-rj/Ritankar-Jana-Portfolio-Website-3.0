import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EntityLogo } from "./EntityLogo";
import logoOSS from "@/assets/logos/oss.png";
import logoWhisper from "@/assets/logos/whisper.png";
import logoAimail from "@/assets/logos/aimail.png";
import logoLogging from "@/assets/logos/logging.png";
import logoMentor from "@/assets/logos/mentor.png";
import logoHack from "@/assets/logos/hack.png";

interface Item {
  kind: string;
  title: string;
  org: string;
  when: string;
  detail: string;
  highlight?: string;
  url?: string;
  logo?: string;
  fallback: string;
}

const ITEMS: Item[] = [
  {
    kind: "AI / Full-Stack",
    title: "Email Generator — AI Replies for Gmail",
    org: "Self-initiated · Spring Boot · Gemini · React",
    when: "2025",
    detail:
      "Spring Boot service backed by the Gemini API, paired with a React + ShadCN UI and a Chrome Extension that injects context-aware reply suggestions directly into Gmail.",
    highlight: "Spring Boot · Gemini API · Chrome Extension",
    url: "https://github.com/riyal-rj/email-generator",
    logo: logoAimail,
    fallback: "MAIL",
  },
  {
    kind: "AI / FinTech",
    title: "Stokis AI — Sentiment-Aware Forecasting",
    org: "Self-initiated · Next.js · FastAPI · CrewAI",
    when: "2024 — 2025",
    detail:
      "A full-stack predictive engine using CNN-BiLSTM and FinBERT to forecast stock trends with 93%+ accuracy by blending technical indicators with real-time market sentiment.",
    highlight: "93%+ Accuracy · CNN-BiLSTM · FinBERT",
    url: "https://github.com/riyal-rj/Stock-Price-Prediction-and-Forecasting",
    fallback: "STK",
  },
  {
    kind: "Hackathon · AI",
    title: "TriNayan — Currency Recognition for the Visually Impaired",
    org: "RBI HaRBInger 2024 · YOLOv8 · ViT",
    when: "2024",
    detail:
      "An accessibility-focused system using YOLOv8 and Vision Transformers to provide real-time currency detection with audio feedback, achieving 95%+ accuracy for the RBI HaRBInger-2024 hackathon.",
    highlight: "95%+ Accuracy · YOLOv8 · Vision Transformers",
    url: "https://github.com/riyal-rj/identifier",
    logo: logoHack,
    fallback: "TN",
  },
  {
    kind: "AI / Systems",
    title: "WebMeAnything — RAG Document Assistant",
    org: "Self-initiated · Groq · FAISS · Streamlit",
    when: "2024",
    detail:
      "Engineered a RAG-based document intelligence system improving retrieval efficiency by ~85–90% using FAISS vector indexing and Groq’s LPU™ inference engine for ultra-fast response generation. Implemented semantic search pipelines and contextual answer synthesis with an interactive frontend.",
    highlight: "85–90% Boost · RAG · Groq · FAISS",
    logo: logoWhisper,
    fallback: "RAG",
  },
  {
    kind: "Full-Stack",
    title: "GradgyHub — Electronics E-Commerce",
    org: "Self-initiated · React · Node.js · Express",
    when: "2024",
    detail:
      "Engineered a scalable electronics marketplace with Redis caching for low-latency product retrieval, JWT-secured authentication, and Stripe-powered checkout. Integrated Cloudinary for media pipelines and built a reactive UI with Zustand and Framer Motion.",
    highlight: "Redis · Stripe · JWT · Cloudinary",
    logo: logoLogging,
    fallback: "SHOP",
  },
  {
    kind: "Backend",
    title: "Advanced Authentication System",
    org: "Self-initiated · Node.js · Express · MongoDB",
    when: "2024",
    detail:
      "Built a secure, token-driven authentication backend supporting signup, login, logout, email verification, and password reset. Implemented HTTP-only JWT cookies and Nodemailer-based token workflows for production-grade session security.",
    highlight: "Auth Flows · JWT · Email Verification",
    logo: logoHack,
    fallback: "AUTH",
  },
  {
    kind: "AI / Applied",
    title: "Lingua-AI — Personalized English Tutor",
    org: "Self-initiated · Llama 3.1 · Deepgram",
    when: "2024",
    detail:
      "Developed a conversational AI tutor enabling real-time speech interaction using LLM-driven responses and speech-to-text integration. Designed adaptive feedback loops for pronunciation, fluency, and contextual learning.",
    highlight: "Conversational AI · STT · LLM",
    logo: logoWhisper,
    fallback: "AI",
  },
  {
    kind: "Technical Writing",
    title: "Distributed Logging with Winston",
    org: "Node.js · Observability Systems",
    when: "2025",
    detail:
      "Published a comprehensive guide on building scalable logging systems using Winston, including structured logging, multi-transport pipelines, error stack tracing, and performance profiling.",
    highlight: "Logging · Observability · Systems",
    logo: logoMentor,
    fallback: "BLOG",
  },
  {
    kind: "Technical Writing",
    title: "Demystifying gRPC for Microservices",
    org: "Distributed Systems · APIs",
    when: "2025",
    detail:
      "Authored a deep-dive on gRPC covering Protocol Buffers, streaming RPC patterns, HTTP/2 internals, and API Gateway integration for microservices communication.",
    highlight: "gRPC · HTTP/2 · Microservices",
    logo: logoMentor,
    fallback: "BLOG",
  },
];

export function OtherExperiences() {
  return (
    <section id="other" className="section scroll-mt-16 border-t border-border bg-canvas-warm">
      <div className="editorial">
        <SectionHeading
          index="08"
          eyebrow="Other Experiences"
          title={
            <>
              Side quests &amp; <span className="accent-serif text-accent">contributions</span>.
            </>
          }
          description="Open-source work, side projects, hackathons and the occasional deep dive — the stuff that doesn't fit on a résumé but actually shaped the engineer I am."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <article className="card card-hover group relative flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
                    {it.kind}
                  </span>
                  <span className="font-mono text-[10.5px] text-ink-faint">{it.when}</span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <EntityLogo
                    src={it.logo}
                    alt={`${it.title} logo`}
                    fallback={it.fallback}
                    size="sm"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">
                      {it.url ? (
                        // The ::after overlay makes the whole card clickable
                        <a
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:text-accent"
                        >
                          {it.title}{" "}
                          <span className="text-ink-faint transition-colors group-hover:text-accent">
                            ↗
                          </span>
                        </a>
                      ) : (
                        it.title
                      )}
                    </h3>
                    <p className="mt-1 font-mono text-[10.5px] leading-relaxed text-ink-faint">
                      {it.org}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">{it.detail}</p>

                {it.highlight && (
                  <p className="mt-auto border-t border-border pt-4 font-mono text-[11px] text-foreground/80">
                    <span className="text-accent">→</span> {it.highlight}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
