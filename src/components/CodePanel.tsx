/** Profile rendered as a typed object — the hero's visual anchor. */
export function CodePanel() {
  return (
    <div className="card overflow-hidden shadow-[var(--shadow-lg)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[11px] text-ink-faint">engineer.ts</span>
        <span className="w-10" aria-hidden />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]">
        <code>
          <span className="syn-w">const</span> <span className="syn-k">engineer</span>{" "}
          <span className="syn-p">=</span> <span className="syn-p">{"{"}</span>
          {"\n  "}
          <span className="syn-k">name</span>
          <span className="syn-p">:</span> <span className="syn-s">"Ritankar Jana"</span>
          <span className="syn-p">,</span>
          {"\n  "}
          <span className="syn-k">roles</span>
          <span className="syn-p">: [</span>
          <span className="syn-s">"Backend Engineer"</span>
          <span className="syn-p">,</span> <span className="syn-s">"AI Engineer"</span>
          <span className="syn-p">],</span>
          {"\n  "}
          <span className="syn-k">backend</span>
          <span className="syn-p">: [</span>
          <span className="syn-s">"Microservices"</span>
          <span className="syn-p">,</span> <span className="syn-s">"gRPC"</span>
          <span className="syn-p">,</span> <span className="syn-s">"Queues"</span>
          <span className="syn-p">],</span>
          {"\n  "}
          <span className="syn-k">ai</span>
          <span className="syn-p">: [</span>
          <span className="syn-s">"Agentic AI"</span>
          <span className="syn-p">,</span> <span className="syn-s">"Enterprise RAG"</span>
          <span className="syn-p">,</span> <span className="syn-s">"LangGraph"</span>
          <span className="syn-p">],</span>
          {"\n  "}
          <span className="syn-k">domain</span>
          <span className="syn-p">:</span> <span className="syn-s">"BFSI & Fintech"</span>
          <span className="syn-p">,</span>
          {"\n  "}
          <span className="syn-k">shipping</span>
          <span className="syn-p">:</span> <span className="syn-s">"TCS · Kolkata (Remote)"</span>
          <span className="syn-p">,</span>
          {"\n  "}
          <span className="syn-k">openTo</span>
          <span className="syn-p">: [</span>
          {["AI", "Backend", "SDE", "FDE"].map((r, i) => (
            <span key={r}>
              {i > 0 && <span className="syn-p">, </span>}
              <span className="syn-s">"{r}"</span>
            </span>
          ))}
          <span className="syn-p">],</span>
          {"\n"}
          <span className="syn-p">{"};"}</span>
        </code>
      </pre>
      <div className="flex items-center gap-2 border-t border-border px-5 py-3 font-mono text-[11px] text-ink-faint">
        <span className="text-accent">✓</span> compiled · 0 errors · ready for production
      </div>
    </div>
  );
}
