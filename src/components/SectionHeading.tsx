import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional element aligned to the right on wide screens (e.g. a link). */
  action?: ReactNode;
}

/** Shared section header: numbered mono eyebrow, title, optional lede. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">{index}</span>
            <span aria-hidden className="h-px w-8 bg-border" />
            {eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">{description}</p>
          )}
        </div>
        {action}
      </div>
    </Reveal>
  );
}
