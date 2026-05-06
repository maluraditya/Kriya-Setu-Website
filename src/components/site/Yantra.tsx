export function Yantra({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity=".35" />
          <stop offset="60%" stopColor="var(--brand-orange)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="260" fill="url(#glow)" />
      {[260, 220, 180, 140, 100, 60].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke="var(--brand-blue)"
          strokeOpacity={0.12 + i * 0.04}
          strokeWidth="0.75"
        />
      ))}
      {/* Pyramid stack */}
      {[0, 1, 2, 3].map((i) => {
        const top = 120 + i * 40;
        const w = 60 + i * 60;
        return (
          <polygon
            key={i}
            points={`300,${top} ${300 - w},${top + 80} ${300 + w},${top + 80}`}
            fill="none"
            stroke="var(--brand-blue)"
            strokeOpacity={0.6 - i * 0.1}
            strokeWidth="1"
          />
        );
      })}
      {/* Rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = 300 + Math.cos(a) * 280;
        const y = 300 + Math.sin(a) * 280;
        return (
          <line
            key={i}
            x1="300"
            y1="300"
            x2={x}
            y2={y}
            stroke="var(--brand-blue)"
            strokeOpacity="0.06"
            strokeWidth="0.5"
          />
        );
      })}
      <circle cx="300" cy="300" r="6" fill="var(--brand-orange)" />
      <circle cx="300" cy="300" r="14" fill="none" stroke="var(--brand-orange)" strokeOpacity=".4" />
    </svg>
  );
}
