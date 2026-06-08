import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    eyebrow: "The reality today",
    stat: "72%",
    statSub: "of students can't apply what they memorised",
    ringPct: 0,
    ringColor: "#94a3b8",
    headline: "Teachers work harder than ever.",
    body: "Every term brings the same quiet frustration — full effort, incomplete understanding. The system was built for coverage, not depth.",
    tag: "The Gap",
  },
  {
    eyebrow: "What Kriya Setu gives teachers",
    stat: "6-step",
    statSub: "structured learning journey per concept",
    ringPct: 0.42,
    ringColor: "#60a5fa",
    headline: "Every concept becomes a journey.",
    body: "Teachers get a complete, structured path — visualised, experiential, and consistent across every section and every term. No more improvising depth.",
    tag: "The System",
  },
  {
    eyebrow: "What students experience",
    stat: "3×",
    statSub: "increase in classroom engagement",
    ringPct: 0.72,
    ringColor: "#fb923c",
    headline: "Students don't just learn. They own it.",
    body: "When a student experiences a concept — feels it, applies it, debates it — they stop forgetting. Understanding replaces memorisation.",
    tag: "The Shift",
  },
  {
    eyebrow: "What institutions see",
    stat: "↗",
    statSub: "board results · NEET/JEE · internal scores",
    ringPct: 1,
    ringColor: "#fb923c",
    headline: "Outcomes follow understanding.",
    body: "Better scores. Better entrance results. Faculty who feel proud of what they've built. A school that's truly future-ready.",
    tag: "The Outcome",
  },
];

const RING_R = 88;
const RING_C = 2 * Math.PI * RING_R;

export function TeacherScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0); // 0–1 within current step

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = Math.max(0, Math.min(1, -top / scrollable));
      const stepF = raw * STEPS.length;
      const newStep = Math.min(STEPS.length - 1, Math.floor(stepF));
      const newProgress = stepF - Math.floor(stepF);
      setStep(newStep);
      setProgress(newProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cur = STEPS[step];
  const ringOffset = RING_C * (1 - cur.ringPct);

  return (
    <section
      ref={containerRef}
      id="teacher-story"
      aria-label="Teacher empowerment journey"
      style={{ height: `${STEPS.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[color:var(--brand-ink)] text-background flex flex-col md:flex-row">
        {/* subtle ambient glow keyed to current step */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            background: `radial-gradient(60% 50% at 30% 50%, ${cur.ringColor}26, transparent 60%), radial-gradient(40% 40% at 75% 60%, ${cur.ringColor}1a, transparent 70%)`,
          }}
        />

        {/* ── Left panel: animated stat + ring ─────────────────── */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-8 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/8">

          {/* Step progress dots */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === step ? "2rem" : "0.375rem",
                  background: i === step ? cur.ringColor : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          {/* Ring visualisation */}
          <div className="relative w-56 h-56">
            {/* Background ring */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full -rotate-90"
            >
              <circle
                cx="100" cy="100" r={RING_R}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="8"
              />
              <circle
                cx="100" cy="100" r={RING_R}
                fill="none"
                stroke={cur.ringColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={RING_C}
                strokeDashoffset={ringOffset}
                style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1), stroke 0.6s ease" }}
              />
            </svg>

            {/* Stat in the centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <span
                className="font-display leading-none"
                style={{
                  fontSize: cur.stat.length > 3 ? "2.5rem" : "3.5rem",
                  color: cur.ringColor,
                  transition: "color 0.6s ease",
                }}
              >
                {cur.stat}
              </span>
              <span className="mt-3 text-[11px] uppercase tracking-widest text-background/75 leading-snug max-w-[14rem]">
                {cur.statSub}
              </span>
            </div>
          </div>

          {/* Tag badge */}
          <div
            className="mt-8 text-xs uppercase tracking-[0.22em] px-4 py-1.5 rounded-full border transition-all duration-500"
            style={{ borderColor: cur.ringColor, color: "#fff", background: `${cur.ringColor}33` }}
          >
            {cur.tag}
          </div>

          {/* Step mini-progress bar (mobile scroll hint) */}
          <div className="absolute bottom-6 left-8 right-8 h-px bg-white/10">
            <div
              className="h-full transition-all duration-100"
              style={{ width: `${progress * 100}%`, background: cur.ringColor }}
            />
          </div>
        </div>

        {/* ── Right panel: narrative content ───────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-12 md:py-0 relative overflow-hidden">

          {/* Background step number watermark */}
          <div
            className="absolute right-6 bottom-4 font-display text-[8rem] leading-none select-none pointer-events-none"
            style={{ color: "rgba(255,255,255,0.06)", transition: "none" }}
          >
            {String(step + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div key={step} className="ts-step-content max-w-lg relative">
            <p className="text-xs uppercase tracking-[0.22em]" style={{ color: cur.ringColor }}>
              {cur.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.08] text-white">
              {cur.headline}
            </h2>
            <p className="mt-5 text-background/85 text-lg leading-relaxed">
              {cur.body}
            </p>

            {/* Subtle CTA on last step */}
            {step === STEPS.length - 1 && (
              <a
                href="#cta"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:gap-3"
                style={{ background: "#F05A28", color: "#fff" }}
              >
                Build this in your institution →
              </a>
            )}
          </div>

          {/* Step counter */}
          <div className="absolute bottom-8 right-10 text-xs text-background/25 tabular-nums">
            {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
          </div>
        </div>

        {/* Scroll hint (first step only) */}
        {step === 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-1/2 md:mr-0 flex flex-col items-center gap-1.5 text-background/25 ts-scroll-hint">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <span className="animate-bounce">↓</span>
          </div>
        )}
      </div>
    </section>
  );
}
