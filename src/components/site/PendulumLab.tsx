import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Live pendulum simulation. Visitors tweak length / gravity / damping
 * and watch the period, energy, and trail change in real time —
 * experiencing concept → visualisation → reflection on a single canvas.
 */
export function PendulumLab() {
  const [length, setLength] = useState(220);   // px
  const [gravity, setGravity] = useState(9.8);
  const [damping, setDamping] = useState(0.002);
  const [running, setRunning] = useState(true);

  const angleRef = useRef(Math.PI / 3);
  const velRef = useRef(0);
  const trailRef = useRef<{ x: number; y: number; a: number }[]>([]);
  const [, force] = useState(0);

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      // Pendulum eq: a'' = -(g/L)·sin(a) - damping·a'
      const acc = -(gravity / (length / 80)) * Math.sin(angleRef.current) - damping * velRef.current * 60;
      velRef.current += acc * dt;
      angleRef.current += velRef.current * dt;
      const x = Math.sin(angleRef.current) * length;
      const y = Math.cos(angleRef.current) * length;
      trailRef.current.push({ x, y, a: 1 });
      if (trailRef.current.length > 90) trailRef.current.shift();
      trailRef.current = trailRef.current.map((p, i, arr) => ({ ...p, a: i / arr.length }));
      force((n) => (n + 1) % 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [length, gravity, damping, running]);

  const period = (2 * Math.PI * Math.sqrt((length / 80) / gravity)).toFixed(2);
  const energy = (0.5 * velRef.current ** 2 + gravity * (1 - Math.cos(angleRef.current))).toFixed(2);

  const cx = 300;
  const cy = 60;
  const bobX = cx + Math.sin(angleRef.current) * length;
  const bobY = cy + Math.cos(angleRef.current) * length;

  const reset = () => {
    angleRef.current = Math.PI / 3;
    velRef.current = 0;
    trailRef.current = [];
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-stretch">
      <div className="lg:col-span-3 relative rounded-2xl border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-elev)" }}>
        <div className="absolute top-4 left-5 z-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Concept · Simple Pendulum
        </div>
        <div className="absolute top-4 right-5 z-10 flex gap-3 text-[11px] tabular-nums">
          <span className="rounded-full border border-border px-3 py-1">T ≈ {period}s</span>
          <span className="rounded-full border border-border px-3 py-1">E ≈ {energy}</span>
        </div>
        <svg viewBox="0 0 600 360" className="w-full h-full block">
          <defs>
            <radialGradient id="bobGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="var(--brand-orange)" />
              <stop offset="100%" stopColor="#9c2f10" />
            </radialGradient>
            <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--brand-orange)" />
            </linearGradient>
          </defs>
          {/* ceiling */}
          <line x1="180" y1={cy} x2="420" y2={cy} stroke="var(--brand-blue)" strokeOpacity=".25" strokeWidth="1.5" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1={190 + i * 20} y1={cy} x2={180 + i * 20} y2={cy - 10} stroke="var(--brand-blue)" strokeOpacity=".25" strokeWidth="1" />
          ))}
          {/* arc guide */}
          <path d={`M ${cx - length * 0.7} ${cy + length * 0.7} A ${length} ${length} 0 0 1 ${cx + length * 0.7} ${cy + length * 0.7}`} fill="none" stroke="var(--brand-blue)" strokeOpacity=".08" strokeDasharray="2 6" />
          {/* trail */}
          {trailRef.current.map((p, i) => (
            <circle key={i} cx={cx + p.x} cy={cy + p.y} r={2.2} fill="var(--brand-orange)" fillOpacity={p.a * 0.5} />
          ))}
          {/* string */}
          <line x1={cx} y1={cy} x2={bobX} y2={bobY} stroke="var(--brand-blue)" strokeOpacity=".7" strokeWidth="1.25" />
          {/* pivot */}
          <circle cx={cx} cy={cy} r={4} fill="var(--brand-blue)" />
          {/* bob */}
          <circle cx={bobX} cy={bobY} r={18} fill="url(#bobGrad)" />
          <circle cx={bobX} cy={bobY} r={18} fill="none" stroke="var(--brand-orange)" strokeOpacity=".3" strokeWidth="6" />
          {/* angle label */}
          <text x={cx} y={cy + 22} fontSize="10" textAnchor="middle" fill="var(--brand-blue)" opacity=".55" fontFamily="ui-sans-serif">
            θ = {((angleRef.current * 180) / Math.PI).toFixed(0)}°
          </text>
        </svg>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Try it · Live</p>
          <h3 className="mt-3 font-display text-2xl leading-snug">
            Don't read about oscillation. <em className="not-italic text-accent">Feel</em> it.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Drag the parameters. Watch the period change. This is the difference
            between memorising T = 2π√(L/g) and <span className="text-foreground">owning</span> it.
          </p>
        </div>

        <Slider label="Length (L)" value={length} min={80} max={300} step={2} unit="cm" onChange={setLength} />
        <Slider label="Gravity (g)" value={gravity} min={1.6} max={24.8} step={0.1} unit="m/s²" onChange={setGravity} />
        <Slider label="Damping" value={damping * 1000} min={0} max={30} step={1} unit="·10⁻³" onChange={(v) => setDamping(v / 1000)} />

        <div className="flex gap-2 mt-1">
          <button onClick={() => setRunning((r) => !r)} className="flex-1 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition">
            {running ? "Pause" : "Play"}
          </button>
          <button onClick={reset} className="flex-1 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition">
            Reset swing
          </button>
        </div>

        <div className="mt-2 flex gap-2 flex-wrap">
          {[
            ["Earth", 9.8],
            ["Moon", 1.62],
            ["Mars", 3.71],
            ["Jupiter", 24.79],
          ].map(([n, g]) => (
            <button
              key={n as string}
              onClick={() => setGravity(g as number)}
              className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition"
            >
              {n}
            </button>
          ))}
        </div>

        <motion.p
          key={period}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-muted-foreground mt-1"
        >
          Insight · Halve the length → period shrinks by √2, not 2. That's the lesson — discovered, not told.
        </motion.p>
      </div>
    </div>
  );
}

function Slider({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; unit: string;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between text-xs">
        <span className="uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <span className="font-display tabular-nums text-foreground">{value.toFixed(step < 1 ? 1 : 0)} <span className="text-muted-foreground">{unit}</span></span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-2 w-full accent-[color:var(--brand-orange)]"
      />
    </label>
  );
}
