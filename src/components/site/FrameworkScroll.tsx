import { useEffect, useRef, useState } from "react";

const STEPS = [
  { k: "Concept",       d: "Anchor the idea in clarity, not memory.", glyph: "concept" },
  { k: "Visualisation", d: "Make the invisible visible.",              glyph: "visual" },
  { k: "Real-World",    d: "Tie every concept to lived reality.",      glyph: "world" },
  { k: "Experience",    d: "Let students do, build, discover.",        glyph: "experience" },
  { k: "Reflection",    d: "Convert experience into permanent insight.", glyph: "reflect" },
  { k: "Competence",    d: "Application, confidence, transfer.",       glyph: "competence" },
];

export function FrameworkScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [railPct, setRailPct] = useState(0);

  useEffect(() => {
    const tick = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight * 0.6;
      const progress = Math.max(0, Math.min(1, (-top + window.innerHeight * 0.3) / scrollable));
      setRailPct(progress);
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* static background rail */}
      <div
        aria-hidden
        className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"
      />
      {/* animated fill rail */}
      <div
        aria-hidden
        className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary to-accent"
        style={{ height: `${railPct * 100}%` }}
      />
      <ol className="space-y-20 md:space-y-28">
        {STEPS.map((s, i) => (
          <Step key={s.k} index={i} step={s} />
        ))}
      </ol>
    </div>
  );
}

function Step({
  step, index,
}: { step: (typeof STEPS)[number]; index: number }) {
  const itemRef = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const sideLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: "-10% 0px" }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={itemRef} className="relative pl-12 md:pl-0">
      {/* timeline node */}
      <div
        className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 h-5 w-5 rounded-full bg-background border-2 border-primary z-10 grid place-items-center transition-transform duration-500"
        style={{ transform: `scale(${visible ? 1 : 0.55})` }}
      >
        <span
          className="block h-2 w-2 rounded-full bg-accent transition-transform duration-500"
          style={{ transitionDelay: "300ms", transform: `scale(${visible ? 1 : 0})` }}
        />
      </div>

      <div
        className={`md:grid md:grid-cols-2 md:gap-12 items-center transition-all duration-700 ${sideLeft ? "" : "md:[&>*:first-child]:order-2"}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateY(${visible ? 0 : 36}px)`,
        }}
      >
        <div className={`md:px-10 ${sideLeft ? "md:text-right" : "md:text-left"}`}>
          <span className="text-xs tabular-nums text-muted-foreground uppercase tracking-[0.22em]">
            Step · 0{index + 1}
          </span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05]">{step.k}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-md md:inline-block">{step.d}</p>
        </div>
        <div className="mt-5 md:mt-0 md:px-10">
          <Glyph kind={step.glyph} visible={visible} />
        </div>
      </div>
    </li>
  );
}

function Glyph({ kind, visible }: { kind: string; visible: boolean }) {
  return (
    <div
      className="aspect-[5/4] w-full max-w-md rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 grid place-items-center overflow-hidden transition-transform duration-700"
      style={{
        transitionDelay: "150ms",
        transform: `rotate(${visible ? 0 : -8}deg)`,
      }}
    >
      <svg viewBox="0 0 200 160" className="w-full h-full overflow-visible">
        {kind === "concept" && (
          <>
            <circle cx="100" cy="80" r="50" fill="none" stroke="var(--brand-blue)" strokeWidth="1"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused" }} />
            <circle cx="100" cy="80" r="30" fill="none" stroke="var(--brand-blue)" strokeOpacity=".5" strokeWidth="1"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.15s" }} />
            <circle cx="100" cy="80" r="6" fill="var(--brand-orange)"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.45s" }} />
          </>
        )}
        {kind === "visual" && (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i}
                x1={30 + i * 30} y1="130" x2={30 + i * 30} y2={130 - (20 + i * 18)}
                stroke="var(--brand-blue)" strokeWidth="6" strokeLinecap="round"
                className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: `${i * 0.08}s` }} />
            ))}
            <circle cx="150" cy="40" r="8" fill="var(--brand-orange)"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.4s" }} />
          </>
        )}
        {kind === "world" && (
          <>
            <path d="M20 110 Q 70 60 100 90 T 180 70" stroke="var(--brand-blue)" strokeWidth="1.5" fill="none"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused" }} />
            <circle cx="100" cy="90" r="5" fill="var(--brand-orange)"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.5s" }} />
            <rect x="30" y="115" width="140" height="2" fill="var(--brand-blue)" opacity=".3"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.2s" }} />
          </>
        )}
        {kind === "experience" && (
          <>
            {[0, 1, 2].map((i) => (
              <polygon key={i}
                points={`100,${40 + i * 14} ${60 - i * 8},${110 + i * 4} ${140 + i * 8},${110 + i * 4}`}
                fill="none" stroke="var(--brand-blue)" strokeOpacity={0.7 - i * 0.2}
                className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: `${i * 0.1}s` }} />
            ))}
          </>
        )}
        {kind === "reflect" && (
          <>
            <path d="M40 80 Q 100 20 160 80 Q 100 140 40 80 Z" stroke="var(--brand-blue)" strokeWidth="1" fill="none"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused" }} />
            <line x1="40" y1="80" x2="160" y2="80" stroke="var(--brand-orange)" strokeDasharray="3 4"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.3s" }} />
            <circle cx="100" cy="80" r="4" fill="var(--brand-orange)"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.6s" }} />
          </>
        )}
        {kind === "competence" && (
          <>
            <path d="M30 130 L 80 90 L 120 110 L 180 40" stroke="var(--brand-blue)" strokeWidth="2" fill="none"
              className="svg-draw" style={{ animationPlayState: visible ? "running" : "paused" }} />
            <circle cx="180" cy="40" r="7" fill="var(--brand-orange)"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.5s" }} />
            <circle cx="180" cy="40" r="14" fill="none" stroke="var(--brand-orange)" strokeOpacity=".4"
              className="svg-dot" style={{ animationPlayState: visible ? "running" : "paused", animationDelay: "0.7s" }} />
          </>
        )}
      </svg>
    </div>
  );
}
