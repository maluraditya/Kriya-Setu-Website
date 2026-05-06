import { useEffect, useRef, useState } from "react";

export function WaveInterferenceLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frequency, setFrequency] = useState(0.14);
  const [separation, setSeparation] = useState(60);
  const [running, setRunning] = useState(true);

  const freqRef = useRef(frequency);
  const sepRef = useRef(separation);
  const runRef = useRef(running);
  freqRef.current = frequency;
  sepRef.current = separation;
  runRef.current = running;

  // Canvas dimensions — low res for performance, CSS scales it up
  const W = 220;
  const H = 160;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = W;
    canvas.height = H;

    let raf = 0;
    let phase = 0;
    const imgData = ctx.createImageData(W, H);

    const tick = () => {
      if (runRef.current) phase += 0.1;

      const freq = freqRef.current;
      const sep = sepRef.current;
      const s1x = W / 2 - sep / 2;
      const s2x = W / 2 + sep / 2;
      const sy = H / 2;

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const r1 = Math.sqrt((x - s1x) ** 2 + (y - sy) ** 2) + 0.01;
          const r2 = Math.sqrt((x - s2x) ** 2 + (y - sy) ** 2) + 0.01;

          const falloff1 = Math.min(1, 6 / r1);
          const falloff2 = Math.min(1, 6 / r2);
          const a1 = Math.sin(r1 * freq - phase) * falloff1;
          const a2 = Math.sin(r2 * freq - phase) * falloff2;
          const combined = a1 + a2; // -2 to 2

          const v = Math.max(0, Math.min(1, (combined + 2) / 4)); // 0–1

          const idx = (y * W + x) * 4;
          // High v = constructive (warm orange), low v = destructive (deep navy)
          imgData.data[idx]     = Math.round(v * 245 + (1 - v) * 4);
          imgData.data[idx + 1] = Math.round(v * 88  + (1 - v) * 8);
          imgData.data[idx + 2] = Math.round(v * 35  + (1 - v) * 70);
          imgData.data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Source markers
      [[s1x, sy], [s2x, sy]].forEach(([sx, sy]) => {
        ctx.beginPath();
        ctx.arc(sx, sy, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, 7, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const presets = [
    { label: "Sound · Room", freq: 0.1,  sep: 40 },
    { label: "Light · Slit",  freq: 0.18, sep: 30 },
    { label: "WiFi · Router", freq: 0.08, sep: 80 },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-stretch">
      {/* Canvas */}
      <div
        className="lg:col-span-3 relative rounded-2xl border border-border overflow-hidden bg-[#04040e]"
        style={{ boxShadow: "var(--shadow-elev)" }}
      >
        <div className="absolute top-4 left-5 z-10 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.22em] text-white/50">
            Wave Interference · Live
          </span>
        </div>
        <div className="absolute top-4 right-5 z-10 text-[11px] text-white/40 tabular-nums">
          Δr = {Math.abs(separation / 10).toFixed(1)} λ-units
        </div>
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ minHeight: "280px" }}
        />
        {/* Legend */}
        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-4 text-[10px] text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-5 rounded-sm bg-[#f05a28]" /> Constructive
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-5 rounded-sm bg-[#040846]" /> Destructive
          </span>
          <span className="ml-auto">● = source</span>
        </div>
      </div>

      {/* Controls */}
      <div className="lg:col-span-2 flex flex-col gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Physics · Waves · Class 11 / 12
          </p>
          <h3 className="mt-3 font-display text-2xl leading-snug">
            Don't read about interference.{" "}
            <em className="not-italic text-accent">See</em> it.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Two identical wave sources radiating outward. Where peaks meet
            peaks — <span className="text-foreground">brightness</span>. Where a
            peak meets a trough —{" "}
            <span className="text-foreground/50">silence</span>. Drag the
            sliders.
          </p>
        </div>

        <WaveSlider
          label="Frequency"
          value={Math.round(frequency * 1000)}
          min={60}
          max={220}
          step={5}
          unit="·10⁻³"
          onChange={(v) => setFrequency(v / 1000)}
        />
        <WaveSlider
          label="Source Separation"
          value={separation}
          min={10}
          max={110}
          step={2}
          unit="units"
          onChange={setSeparation}
        />

        <div className="flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex-1 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition"
          >
            {running ? "Pause" : "Play"}
          </button>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-2">
          {presets.map(({ label, freq, sep }) => (
            <button
              key={label}
              onClick={() => { setFrequency(freq); setSeparation(sep); }}
              className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-accent font-medium">Why this matters.</span>{" "}
            Those bright and dark bands are the same physics behind noise-canceling
            headphones, double-slit experiments, concert hall acoustics, and your
            WiFi dead spots. You've just{" "}
            <span className="text-foreground">experienced</span> the principle —
            not memorised it.
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Insight · Move sources further apart → more interference bands appear.
          That's Huygens' principle — discovered, not told.
        </p>
      </div>
    </div>
  );
}

function WaveSlider({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number;
  unit: string; onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between text-xs">
        <span className="uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <span className="font-display tabular-nums text-foreground">
          {value} <span className="text-muted-foreground">{unit}</span>
        </span>
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
