import { motion } from "framer-motion";

/**
 * Floating educational artifacts behind the hero —
 * formulas, glyphs, geometry, atoms — drifting and gently rotating.
 * Pure SVG + framer-motion. No images.
 */

type Floater = {
  id: string;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  drift: [number, number];
  rotate: number;
  opacity: number;
  kind:
    | "formula-energy"
    | "formula-pendulum"
    | "formula-pi"
    | "atom"
    | "dna"
    | "triangle"
    | "circle-grid"
    | "wave"
    | "molecule"
    | "compass"
    | "fraction"
    | "integral";
  tone: "blue" | "orange" | "ink";
};

const FLOATERS: Floater[] = [
  { id: "f1", x: "6%",  y: "12%", size: 78, delay: 0,   duration: 11, drift: [12, -16], rotate: -8,  opacity: 0.55, kind: "atom",            tone: "orange" },
  { id: "f2", x: "82%", y: "14%", size: 96, delay: 1.2, duration: 13, drift: [-14, 12], rotate: 10,  opacity: 0.45, kind: "formula-energy",  tone: "blue"   },
  { id: "f3", x: "12%", y: "62%", size: 70, delay: 0.8, duration: 14, drift: [10, 14],  rotate: 6,   opacity: 0.4,  kind: "wave",            tone: "blue"   },
  { id: "f4", x: "76%", y: "58%", size: 84, delay: 0.4, duration: 12, drift: [-12, 18], rotate: -12, opacity: 0.5,  kind: "molecule",        tone: "orange" },
  { id: "f5", x: "44%", y: "8%",  size: 58, delay: 1.6, duration: 15, drift: [14, 10],  rotate: 14,  opacity: 0.35, kind: "formula-pi",      tone: "ink"    },
  { id: "f6", x: "30%", y: "78%", size: 64, delay: 0.6, duration: 10, drift: [-10, -14],rotate: -6,  opacity: 0.4,  kind: "triangle",        tone: "orange" },
  { id: "f7", x: "62%", y: "82%", size: 72, delay: 2.0, duration: 13, drift: [12, -10], rotate: 8,   opacity: 0.45, kind: "dna",             tone: "blue"   },
  { id: "f8", x: "92%", y: "40%", size: 60, delay: 0.2, duration: 12, drift: [-14, 12], rotate: -10, opacity: 0.4,  kind: "integral",        tone: "ink"    },
  { id: "f9", x: "2%",  y: "38%", size: 66, delay: 1.4, duration: 14, drift: [10, -12], rotate: 12,  opacity: 0.4,  kind: "circle-grid",     tone: "blue"   },
  { id: "f10",x: "52%", y: "46%", size: 54, delay: 1.0, duration: 16, drift: [-8, 14],  rotate: -4,  opacity: 0.3,  kind: "fraction",        tone: "ink"    },
  { id: "f11",x: "22%", y: "30%", size: 50, delay: 1.8, duration: 11, drift: [10, 12],  rotate: 8,   opacity: 0.32, kind: "compass",         tone: "orange" },
  { id: "f12",x: "70%", y: "32%", size: 56, delay: 0.5, duration: 13, drift: [-12, -10],rotate: -10, opacity: 0.35, kind: "formula-pendulum",tone: "blue"   },
];

export function HeroFloaters() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {FLOATERS.map((f) => (
        <motion.div
          key={f.id}
          className="absolute"
          style={{
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
          }}
          initial={{ y: 0, x: 0, rotate: f.rotate }}
          animate={{
            y: [0, f.drift[1], 0],
            x: [0, f.drift[0], 0],
            rotate: [f.rotate, f.rotate + 6, f.rotate],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Glyph kind={f.kind} tone={f.tone} />
        </motion.div>
      ))}
    </div>
  );
}

function Glyph({ kind, tone }: { kind: Floater["kind"]; tone: Floater["tone"] }) {
  const stroke =
    tone === "orange" ? "var(--brand-orange)" : tone === "blue" ? "var(--brand-blue)" : "var(--brand-ink)";

  switch (kind) {
    case "atom":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke={stroke} strokeWidth="1.5" />
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke={stroke} strokeWidth="1.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke={stroke} strokeWidth="1.5" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="5" fill={stroke} />
        </svg>
      );
    case "formula-energy":
      return (
        <svg viewBox="0 0 140 60" className="w-full h-auto">
          <text x="50%" y="60%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="34" fill={stroke} fontStyle="italic">
            E = mc²
          </text>
        </svg>
      );
    case "formula-pendulum":
      return (
        <svg viewBox="0 0 140 60" className="w-full h-auto">
          <text x="50%" y="60%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="22" fill={stroke} fontStyle="italic">
            T = 2π√(L/g)
          </text>
        </svg>
      );
    case "formula-pi":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text x="50%" y="70%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="72" fill={stroke}>π</text>
        </svg>
      );
    case "dna":
      return (
        <svg viewBox="0 0 60 100" className="w-full h-full">
          <path d="M10 5 Q 50 25 10 50 Q -30 75 10 95" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M50 5 Q 10 25 50 50 Q 90 75 50 95" fill="none" stroke={stroke} strokeWidth="1.5" />
          {[15, 30, 45, 60, 75, 90].map((y, i) => (
            <line key={i} x1="14" x2="46" y1={y} y2={y} stroke={stroke} strokeWidth="1" opacity="0.6" />
          ))}
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,85 10,85" fill="none" stroke={stroke} strokeWidth="1.5" />
          <line x1="50" y1="10" x2="50" y2="85" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <text x="56" y="50" fontSize="11" fill={stroke} fontFamily="Fraunces, serif" fontStyle="italic">h</text>
        </svg>
      );
    case "circle-grid":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="42" fill="none" stroke={stroke} strokeWidth="1.5" />
          <line x1="50" y1="8" x2="50" y2="92" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <line x1="8" y1="50" x2="92" y2="50" stroke={stroke} strokeWidth="1" opacity="0.5" />
          <circle cx="50" cy="50" r="4" fill={stroke} />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 120 50" className="w-full h-auto">
          <path d="M5 25 Q 20 5 35 25 T 65 25 T 95 25 T 125 25" fill="none" stroke={stroke} strokeWidth="2" />
          <path d="M5 30 Q 25 15 45 30 T 85 30 T 125 30" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
        </svg>
      );
    case "molecule":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="20" y1="30" x2="50" y2="50" stroke={stroke} strokeWidth="1.5" />
          <line x1="80" y1="30" x2="50" y2="50" stroke={stroke} strokeWidth="1.5" />
          <line x1="50" y1="50" x2="50" y2="85" stroke={stroke} strokeWidth="1.5" />
          <circle cx="20" cy="30" r="9" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="80" cy="30" r="9" fill="none" stroke={stroke} strokeWidth="1.5" />
          <circle cx="50" cy="50" r="11" fill={stroke} fillOpacity="0.15" stroke={stroke} strokeWidth="1.5" />
          <circle cx="50" cy="85" r="9" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke={stroke} strokeWidth="1.5" />
          <polygon points="50,15 56,50 50,85 44,50" fill={stroke} fillOpacity="0.5" stroke={stroke} strokeWidth="1" />
          <circle cx="50" cy="50" r="3" fill={stroke} />
        </svg>
      );
    case "fraction":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text x="50%" y="42%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="32" fill={stroke}>dy</text>
          <line x1="20" y1="52" x2="80" y2="52" stroke={stroke} strokeWidth="1.5" />
          <text x="50%" y="80%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="32" fill={stroke}>dx</text>
        </svg>
      );
    case "integral":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <text x="50%" y="78%" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="86" fill={stroke}>∫</text>
        </svg>
      );
  }
}
