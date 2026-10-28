import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SOCIALS = [
  {
    label: "Email",
    value: "ritankar.jana.official@gmail.com",
    href: "mailto:ritankar.jana.official@gmail.com",
  },
  { label: "GitHub", value: "riyal-rj", href: "https://github.com/riyal-rj" },
  { label: "LinkedIn", value: "in/riyal-rj", href: "https://www.linkedin.com/in/riyal-rj/" },
  { label: "X / Twitter", value: "@jana_ritankar", href: "https://x.com/jana_ritankar" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:ritankar.jana.official@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section scroll-mt-16 overflow-hidden">
      <div className="editorial relative">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="accent-serif text-accent">good.</span>
            </>
          }
          description="Reach out directly, or drop a note below — I usually reply within a day or two."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field name="name" label="Your name" autoComplete="name" required />
                <Field
                  name="email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <Field name="message" label="The message" textarea required />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                {sent && (
                  <span className="font-mono text-xs text-accent" role="status">
                    Opening your mail client…
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex min-w-0 flex-col gap-4 lg:col-span-5">
            <ul className="card divide-y divide-border">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-canvas-warm"
                  >
                    <span className="min-w-0">
                      <span className="eyebrow block">{s.label}</span>
                      <span className="mt-1 block truncate text-[15px] font-medium text-foreground">
                        {s.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="card p-5">
              <p className="eyebrow flex items-center gap-2.5">
                <span className="pulse-dot" aria-hidden /> Currently
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                Open to AI Engineer, Backend Engineer, SDE and FDE roles, and interesting freelance
                collaborations.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}

function Field({ name, label, type = "text", textarea, required, autoComplete }: FieldProps) {
  const baseClass =
    "mt-2 w-full rounded-xl border border-border bg-canvas-warm px-4 py-3 text-[15px] text-foreground placeholder:text-ink-faint transition-colors focus:border-accent focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} required={required} className={baseClass + " resize-none"} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={baseClass}
        />
      )}
    </label>
  );
}
