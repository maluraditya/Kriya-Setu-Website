import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  baseR: number;
  kind: "concept" | "node";
  pulse: number;
  pulseSpeed: number;
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Build particles — "concept nodes" (larger, fewer) and "idea nodes" (small, many)
    const concepts = 8;
    const nodes = 52;
    const particles: Particle[] = [];

    for (let i = 0; i < concepts; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 5 + Math.random() * 4,
        baseR: 5 + Math.random() * 4,
        kind: "concept",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.008,
      });
    }
    for (let i = 0; i < nodes; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.5 + Math.random() * 1.5,
        baseR: 1.5 + Math.random() * 1.5,
        kind: "node",
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.015,
      });
    }

    const CONNECT_DIST = 130;
    const MOUSE_DIST = 180;

    let raf = 0;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        p.r = p.baseR * (0.9 + 0.1 * Math.sin(p.pulse));

        // Gentle mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const md = Math.sqrt(dx * dx + dy * dy) || 1;
        if (md < MOUSE_DIST) {
          const force = (1 - md / MOUSE_DIST) * 0.018;
          p.vx += (dx / md) * force;
          p.vy += (dy / md) * force;
        }

        // Velocity damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        // Soft boundary bounce
        if (p.x < 0) { p.x = 0; p.vx *= -0.6; }
        if (p.x > W) { p.x = W; p.vx *= -0.6; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.6; }
        if (p.y > H) { p.y = H; p.vy *= -0.6; }
      }

      // Draw connections first (under dots)
      const N = particles.length;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > CONNECT_DIST) continue;

          const t = 1 - dist / CONNECT_DIST;
          const isConcept = a.kind === "concept" || b.kind === "concept";

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          // Brand blue for normal lines, orange accent for concept-to-concept
          const isCC = a.kind === "concept" && b.kind === "concept";
          if (isCC) {
            ctx.strokeStyle = `rgba(240,90,40,${t * 0.18})`;
            ctx.lineWidth = 1;
          } else if (isConcept) {
            ctx.strokeStyle = `rgba(0,50,160,${t * 0.13})`;
            ctx.lineWidth = 0.75;
          } else {
            ctx.strokeStyle = `rgba(0,50,160,${t * 0.07})`;
            ctx.lineWidth = 0.5;
          }
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.kind === "concept") {
          // Concept nodes — orange with a soft glow ring
          ctx.fillStyle = "rgba(240,90,40,0.55)";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(240,90,40,0.06)";
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(0,50,160,0.3)";
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.75 }}
    />
  );
}
