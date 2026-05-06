import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const STEPS = [
  { k: "Concept", d: "Anchor the idea in clarity, not memory.", glyph: "concept" },
  { k: "Visualisation", d: "Make the invisible visible.", glyph: "visual" },
  { k: "Real-World", d: "Tie every concept to lived reality.", glyph: "world" },
  { k: "Experience", d: "Let students do, build, discover.", glyph: "experience" },
  { k: "Reflection", d: "Convert experience into permanent insight.", glyph: "reflect" },
  { k: "Competence", d: "Application, confidence, transfer.", glyph: "competence" },
];

export function FrameworkScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const lineLen = useTransform(smooth, [0.1, 0.85], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* progress rail */}
      <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
      <motion.div
        aria-hidden
        className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary to-accent"
        style={{ scaleY: lineLen, height: "100%" }}
      />
      <ol className="space-y-20 md:space-y-28">
        {STEPS.map((s, i) => (
          <Step key={s.k} index={i} step={s} parentRef={ref} />
        ))}
      </ol>
    </div>
  );
}

function Step({
  step, index, parentRef,
}: { step: typeof STEPS[number]; index: number; parentRef: React.RefObject<HTMLDivElement | null>; }) {
  const itemRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: itemRef, offset: ["start 0.85", "start 0.25"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const y = useTransform(p, [0, 1], [40, 0]);
  const o = useTransform(p, [0, 1], [0, 1]);
  const sideLeft = index % 2 === 0;

  return (
    <li ref={itemRef} className="relative pl-12 md:pl-0">
      {/* node */}
      <motion.div
        className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 h-5 w-5 rounded-full bg-background border-2 border-primary z-10 grid place-items-center"
        style={{ scale: useTransform(p, [0, 1], [0.6, 1]) }}
      >
        <motion.span
          className="block h-2 w-2 rounded-full bg-accent"
          style={{ scale: useTransform(p, [0.3, 1], [0, 1]) }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity: o }}
        className={`md:grid md:grid-cols-2 md:gap-12 items-center ${sideLeft ? "" : "md:[&>*:first-child]:order-2"}`}
      >
        <div className={`md:px-10 ${sideLeft ? "md:text-right" : "md:text-left"}`}>
          <span className="text-xs tabular-nums text-muted-foreground uppercase tracking-[0.22em]">
            Step · 0{index + 1}
          </span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05]">{step.k}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-md md:inline-block">{step.d}</p>
        </div>
        <div className="mt-5 md:mt-0 md:px-10">
          <Glyph kind={step.glyph} progress={p} />
        </div>
      </motion.div>
    </li>
  );
}

function Glyph({ kind, progress }: { kind: string; progress: any }) {
  const draw = useTransform(progress, [0, 1], [0, 1]);
  const rotate = useTransform(progress, [0, 1], [-8, 0]);

  return (
    <motion.div
      style={{ rotate }}
      className="aspect-[5/4] w-full max-w-md rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 grid place-items-center overflow-hidden"
    >
      <svg viewBox="0 0 200 160" className="w-full h-full">
        {kind === "concept" && (
          <>
            <motion.circle cx="100" cy="80" r="50" fill="none" stroke="var(--brand-blue)" strokeWidth="1" style={{ pathLength: draw }} />
            <motion.circle cx="100" cy="80" r="30" fill="none" stroke="var(--brand-blue)" strokeOpacity=".5" strokeWidth="1" style={{ pathLength: draw }} />
            <motion.circle cx="100" cy="80" r="6" fill="var(--brand-orange)" style={{ scale: draw }} />
          </>
        )}
        {kind === "visual" && (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={i}
                x1={30 + i * 30} y1="130" x2={30 + i * 30} y2={130 - (20 + i * 18)}
                stroke="var(--brand-blue)" strokeWidth="6" strokeLinecap="round"
                style={{ pathLength: draw }}
              />
            ))}
            <motion.circle cx="150" cy="40" r="8" fill="var(--brand-orange)" style={{ scale: draw }} />
          </>
        )}
        {kind === "world" && (
          <>
            <motion.path d="M20 110 Q 70 60 100 90 T 180 70" stroke="var(--brand-blue)" strokeWidth="1.5" fill="none" style={{ pathLength: draw }} />
            <motion.circle cx="100" cy="90" r="5" fill="var(--brand-orange)" style={{ scale: draw }} />
            <motion.rect x="30" y="115" width="140" height="2" fill="var(--brand-blue)" opacity=".3" style={{ scaleX: draw }} />
          </>
        )}
        {kind === "experience" && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.polygon
                key={i}
                points={`100,${40 + i * 14} ${60 - i * 8},${110 + i * 4} ${140 + i * 8},${110 + i * 4}`}
                fill="none"
                stroke="var(--brand-blue)"
                strokeOpacity={0.7 - i * 0.2}
                style={{ pathLength: draw }}
              />
            ))}
          </>
        )}
        {kind === "reflect" && (
          <>
            <motion.path d="M40 80 Q 100 20 160 80 Q 100 140 40 80 Z" stroke="var(--brand-blue)" strokeWidth="1" fill="none" style={{ pathLength: draw }} />
            <motion.line x1="40" y1="80" x2="160" y2="80" stroke="var(--brand-orange)" strokeDasharray="3 4" style={{ pathLength: draw }} />
            <motion.circle cx="100" cy="80" r="4" fill="var(--brand-orange)" style={{ scale: draw }} />
          </>
        )}
        {kind === "competence" && (
          <>
            <motion.path d="M30 130 L 80 90 L 120 110 L 180 40" stroke="var(--brand-blue)" strokeWidth="2" fill="none" style={{ pathLength: draw }} />
            <motion.circle cx="180" cy="40" r="7" fill="var(--brand-orange)" style={{ scale: draw }} />
            <motion.circle cx="180" cy="40" r="14" fill="none" stroke="var(--brand-orange)" strokeOpacity=".4" style={{ scale: draw }} />
          </>
        )}
      </svg>
    </motion.div>
  );
}
