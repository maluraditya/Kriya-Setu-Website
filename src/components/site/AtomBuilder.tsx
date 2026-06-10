import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Build-an-Atom - playful chemistry/physics simulation.
 * Click + / − to add or remove protons, neutrons, electrons.
 * The nucleus pulses, electrons orbit on real shells (2,8,8,18 rule),
 * and the periodic-table identity emerges live.
 */

type Particle = "proton" | "neutron" | "electron";

const ELEMENTS = [
  "·", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
  "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
  "K", "Ca",
];
const NAMES = [
  "-", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen",
  "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon",
  "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
];
const FUN_FACT: Record<string, string> = {
  H: "Lightest element. Powers the sun.",
  He: "Noble gas. Full outer shell - perfectly stable.",
  C: "The backbone of all known life.",
  N: "78% of the air you're breathing right now.",
  O: "Lets you read this. Half of Earth's crust by mass.",
  Na: "One electron away from stability. Reacts violently with water.",
  Cl: "Pair me with sodium → table salt.",
  Fe: "Why your blood is red.",
  Au: "Stable, lustrous, ductile - that's why it's worth a fortune.",
};

const SHELLS = [2, 8, 8, 2]; // simplified shell capacities

function shellLayout(electrons: number) {
  const layout: { shell: number; index: number; total: number }[] = [];
  let remaining = electrons;
  for (let s = 0; s < SHELLS.length && remaining > 0; s++) {
    const cap = SHELLS[s];
    const inShell = Math.min(cap, remaining);
    for (let i = 0; i < inShell; i++) layout.push({ shell: s, index: i, total: inShell });
    remaining -= inShell;
  }
  return layout;
}

export function AtomBuilder() {
  const [p, setP] = useState(1); // protons
  const [n, setN] = useState(0); // neutrons
  const [e, setE] = useState(1); // electrons

  const symbol = ELEMENTS[p] ?? "?";
  const name = NAMES[p] ?? "Beyond our table";
  const mass = p + n;
  const charge = p - e;
  const isStable = charge === 0 && Math.abs(n - p) <= 2 && p > 0;
  const isIon = charge !== 0 && p > 0;
  const fact = FUN_FACT[symbol];

  const electrons = useMemo(() => shellLayout(e), [e]);

  const adjust = (kind: Particle, delta: number) => {
    if (kind === "proton") setP((v) => Math.max(0, Math.min(20, v + delta)));
    if (kind === "neutron") setN((v) => Math.max(0, Math.min(30, v + delta)));
    if (kind === "electron") setE((v) => Math.max(0, Math.min(20, v + delta)));
  };

  const reset = () => { setP(1); setN(0); setE(1); };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
      {/* ── Mobile Header ─────────────────────── */}
      <div className="lg:hidden flex flex-col gap-3 mb-2">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Try it · Live</p>
        <h3 className="font-display text-2xl leading-snug">
          Don't memorise the periodic table. <em className="not-italic text-accent">Build it.</em>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Add a proton - a new element appears. Add an electron - the atom calms.
          One missing? It becomes an ion. This is how chemistry was meant to be felt.
        </p>
      </div>

      {/* ── Atom canvas ─────────────────────────── */}
      <div
        className="lg:col-span-3 relative rounded-2xl border border-border overflow-hidden min-h-[320px] md:min-h-[400px] lg:min-h-[480px] sticky top-20 z-20 bg-background"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-blue) 8%, var(--background)), var(--background))",
          boxShadow: "var(--shadow-elev)",
        }}
      >
        {/* corner labels */}
        <div className="absolute top-4 left-5 z-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Chemistry · Build an Atom
        </div>
        <div className="absolute top-4 right-5 z-10 flex gap-2 text-[11px] tabular-nums">
          <span className="rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1">Z = {p}</span>
          <span className="rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1">A = {mass}</span>
          <span
            className="rounded-full border px-3 py-1"
            style={{
              borderColor: charge === 0 ? "color-mix(in oklab, var(--brand-blue) 40%, transparent)" : "var(--brand-orange)",
              color: charge === 0 ? "var(--brand-blue)" : "var(--brand-orange)",
              background: "color-mix(in oklab, var(--background) 80%, transparent)",
            }}
          >
            {charge === 0 ? "neutral" : `${charge > 0 ? "+" : ""}${charge}`}
          </span>
        </div>

        <Atom protons={p} neutrons={n} electronLayout={electrons} symbol={symbol} />

        {/* live identity card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${symbol}-${charge}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">You built</div>
              <div className="font-display text-3xl md:text-4xl mt-1 leading-none">
                {name}
                {isIon && (
                  <span className="text-accent ml-2 text-xl align-top">
                    {charge > 0 ? "⁺" : "⁻"}
                    {Math.abs(charge) > 1 ? Math.abs(charge) : ""}
                  </span>
                )}
              </div>
              {fact && p > 0 && (
                <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">{fact}</p>
              )}
            </div>
            <div className="text-right">
              <span
                className="inline-block text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  borderColor: isStable ? "color-mix(in oklab, var(--brand-blue) 35%, transparent)" : "var(--brand-orange)",
                  color: isStable ? "var(--brand-blue)" : "var(--brand-orange)",
                }}
              >
                {p === 0 ? "empty" : isStable ? "stable" : isIon ? "ion" : "isotope"}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Controls ────────────────────────────── */}
      <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-5 z-10 relative">
        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Try it · Live</p>
          <h3 className="mt-3 font-display text-2xl leading-snug">
            Don't memorise the periodic table. <em className="not-italic text-accent">Build it.</em>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Add a proton - a new element appears. Add an electron - the atom calms.
            One missing? It becomes an ion. This is how chemistry was meant to be felt.
          </p>
        </div>

        <Counter label="Protons"   sub="define the element"    color="var(--brand-orange)" value={p} onChange={(d) => adjust("proton", d)} />
        <Counter label="Neutrons"  sub="control stability"     color="var(--brand-blue)"   value={n} onChange={(d) => adjust("neutron", d)} />
        <Counter label="Electrons" sub="orbit & form bonds"    color="var(--brand-ink)"    value={e} onChange={(d) => adjust("electron", d)} />

        <div className="flex gap-2 mt-1 flex-wrap">
          <button onClick={() => { setP(6); setN(6); setE(6); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
            Carbon
          </button>
          <button onClick={() => { setP(8); setN(8); setE(8); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
            Oxygen
          </button>
          <button onClick={() => { setP(11); setN(12); setE(10); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
            Na⁺ ion
          </button>
          <button onClick={reset} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-foreground/40 transition">
            Reset
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          Insight · The whole periodic table is just <span className="text-foreground">one new proton at a time</span>. Every "rule" you ever learned starts here.
        </p>
      </div>
    </div>
  );
}

/* ─── Atom visual ─────────────────────────────────── */
function Atom({
  protons, neutrons, electronLayout, symbol,
}: {
  protons: number; neutrons: number;
  electronLayout: { shell: number; index: number; total: number }[];
  symbol: string;
}) {
  const cx = 50, cy = 50;
  const shellRadii = [16, 26, 34, 41];
  const shellsUsed = Array.from(new Set(electronLayout.map((e) => e.shell)));

  // nucleus particles (clustered)
  const nucleons: { kind: "p" | "n"; x: number; y: number }[] = [];
  const totalN = protons + neutrons;
  const cluster = Math.max(1, Math.ceil(Math.sqrt(totalN)));
  const spread = Math.min(6, 1.6 + Math.sqrt(totalN) * 0.7);
  let i = 0;
  for (let pi = 0; pi < protons; pi++, i++) {
    const a = (i / Math.max(1, totalN)) * Math.PI * 2;
    const r = (i % cluster) * 0.9;
    nucleons.push({ kind: "p", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }
  for (let ni = 0; ni < neutrons; ni++, i++) {
    const a = (i / Math.max(1, totalN)) * Math.PI * 2;
    const r = (i % cluster) * 0.9;
    nucleons.push({ kind: "n", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }

  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full block">
      <defs>
        <radialGradient id="protonG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff8a5c" />
          <stop offset="100%" stopColor="#c43a16" />
        </radialGradient>
        <radialGradient id="neutronG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </radialGradient>
        <radialGradient id="electronG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0032A0" />
        </radialGradient>
        <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* nucleus glow */}
      {protons + neutrons > 0 && (
        <motion.circle
          cx={cx} cy={cy} r={spread + 4}
          fill="url(#nucleusGlow)"
          animate={{ r: [spread + 4, spread + 6, spread + 4], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* shell rings */}
      {shellsUsed.map((s) => (
        <circle
          key={s}
          cx={cx} cy={cy} r={shellRadii[s]}
          fill="none"
          stroke="var(--brand-blue)"
          strokeOpacity="0.15"
          strokeWidth="0.4"
          strokeDasharray="0.8 1.4"
        />
      ))}

      {/* nucleons */}
      {nucleons.map((nuc, idx) => (
        <motion.circle
          key={idx}
          cx={nuc.x} cy={nuc.y} r={1.7}
          fill={nuc.kind === "p" ? "url(#protonG)" : "url(#neutronG)"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: idx * 0.015 }}
        />
      ))}

      {/* element symbol watermark */}
      {protons > 0 && (
        <text
          x={cx} y={cy + 1.5}
          textAnchor="middle"
          fontSize="3.2"
          fontFamily="Fraunces, serif"
          fill="var(--brand-ink)"
          opacity="0.55"
          style={{ pointerEvents: "none" }}
        >
          {symbol}
        </text>
      )}

      {/* electrons orbiting on shells */}
      {electronLayout.map((el, idx) => {
        const r = shellRadii[el.shell];
        const offset = (el.index / el.total) * 360;
        const dur = 6 + el.shell * 3;
        return (
          <motion.g
            key={idx}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            animate={{ rotate: el.shell % 2 === 0 ? 360 : -360 }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
          >
            <g transform={`rotate(${offset} ${cx} ${cy})`}>
              <circle cx={cx + r} cy={cy} r={1.4} fill="url(#electronG)" />
              <circle cx={cx + r} cy={cy} r={2.6} fill="var(--brand-blue)" opacity="0.12" />
            </g>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ─── Counter button ──────────────────────────────── */
function Counter({
  label, sub, color, value, onChange,
}: {
  label: string; sub: string; color: string; value: number;
  onChange: (delta: number) => void;
}) {
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startHold = (delta: number) => {
    onChange(delta);
    holdRef.current = setInterval(() => onChange(delta), 110);
  };
  const endHold = () => { if (holdRef.current) clearInterval(holdRef.current); holdRef.current = null; };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
      <span className="h-9 w-9 rounded-full flex-shrink-0" style={{ background: color, opacity: 0.85 }} />
      <div className="flex-1 min-w-0">
        <div className="font-display text-base leading-tight">{label}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onMouseDown={() => startHold(-1)} onMouseUp={endHold} onMouseLeave={endHold}
          onTouchStart={() => startHold(-1)} onTouchEnd={endHold}
          className="h-8 w-8 rounded-full border border-border hover:border-foreground/40 active:scale-95 transition flex items-center justify-center text-base"
          aria-label={`Remove ${label}`}
        >−</button>
        <span className="font-display text-xl tabular-nums w-7 text-center">{value}</span>
        <button
          onMouseDown={() => startHold(1)} onMouseUp={endHold} onMouseLeave={endHold}
          onTouchStart={() => startHold(1)} onTouchEnd={endHold}
          className="h-8 w-8 rounded-full text-primary-foreground hover:opacity-90 active:scale-95 transition flex items-center justify-center text-base"
          style={{ background: color }}
          aria-label={`Add ${label}`}
        >+</button>
      </div>
    </div>
  );
}
