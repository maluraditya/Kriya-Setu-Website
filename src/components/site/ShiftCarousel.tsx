import { useCallback, useEffect, useRef, useState } from "react";

/**
 * ShiftCarousel — lightweight, swipeable before→after carousel.
 * Uses CSS scroll-snap (no library). Auto-advances every 5s.
 */

interface ShiftSlide {
  category: string;
  before: string;
  after: string;
  image: string;
  alt: string;
  insight: string;
}

const SLIDES: ShiftSlide[] = [
  {
    category: "Engagement",
    before: "Passive listening",
    after: "Experiential learning",
    image: "/images/shift/engagement.png",
    alt: "Students shift from passively listening at desks to actively engaging with interactive digital learning tools",
    insight: "Students stop watching. They start doing.",
  },
  {
    category: "Retention",
    before: "Rote memorisation",
    after: "Conceptual understanding",
    image: "/images/shift/retention.png",
    alt: "Students shift from cramming textbooks to hands-on molecular model building",
    insight: "When you build it yourself, you never forget it.",
  },
  {
    category: "Consistency",
    before: "Isolated teaching",
    after: "Structured systems",
    image: "/images/shift/consistency.png",
    alt: "Classrooms shift from fragmented chalkboard teaching to structured digital systems with tablets",
    insight: "Same depth. Every section. Every term.",
  },
  {
    category: "Application",
    before: "Theory only",
    after: "Real-world application",
    image: "/images/shift/application.png",
    alt: "Students shift from reading textbooks to building a working solar-powered water pump",
    insight: "Textbook physics becomes a working machine.",
  },
  {
    category: "Energy",
    before: "Lecture-heavy classes",
    after: "Learning experiences",
    image: "/images/shift/energy.png",
    alt: "Classrooms shift from monotone lectures to dynamic collaborative learning stations",
    insight: "The classroom becomes alive with curiosity.",
  },
];

export function ShiftCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Intersection Observer for active slide ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!isNaN(idx)) setActive(idx);
          }
        }
      },
      { root: track, threshold: 0.6 }
    );

    track.querySelectorAll("[data-idx]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Auto-advance ── */
  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % SLIDES.length;
        scrollTo(next);
        return next;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  /* ── Scroll helpers ── */
  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[idx] as HTMLElement | undefined;
    if (slide) {
      // Calculate position to center the slide, and only scroll the track itself horizontally.
      // This prevents the browser from jumping the entire page down to the carousel.
      const scrollLeft = slide.offsetLeft - track.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const go = (dir: -1 | 1) => {
    const next = (active + dir + SLIDES.length) % SLIDES.length;
    setActive(next);
    scrollTo(next);
    resetAuto();
  };

  const goTo = (idx: number) => {
    setActive(idx);
    scrollTo(idx);
    resetAuto();
  };

  return (
    <div className="relative">
      {/* ── Slide track ── */}
      <div
        ref={trackRef}
        className="flex gap-5 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 hide-scrollbar px-[clamp(1.25rem,4vw,3rem)]"
        onTouchStart={resetAuto}
        style={{ scrollPaddingInline: "clamp(1.25rem, 4vw, 3rem)" }}
      >
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.category}
            data-idx={idx}
            className="snap-center flex-shrink-0 w-[80vw] sm:w-[65vw] md:w-[50vw] lg:w-[42vw] xl:w-[36vw]"
          >
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-border bg-card shadow-md h-full flex flex-col">
              {/* Split Header Bar */}
              <div className="flex w-full text-[9px] md:text-[10px] font-semibold tracking-[0.15em] text-center uppercase text-white">
                <div className="flex-1 py-1.5 md:py-2 bg-black/40">
                  Before
                </div>
                <div 
                  className="flex-1 py-1.5 md:py-2"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  With Kriya Setu
                </div>
              </div>

              {/* Image — clean, no overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>

              {/* Text content — separated from image */}
              <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                {/* Category pill */}
                <span
                  className="self-start text-[10px] uppercase tracking-[0.2em] font-medium rounded-full px-3 py-1"
                  style={{
                    background: "color-mix(in oklab, var(--brand-orange) 12%, transparent)",
                    color: "var(--brand-orange)",
                  }}
                >
                  {slide.category}
                </span>

                {/* Before → After */}
                <div className="flex flex-col gap-2.5">
                  {/* Before */}
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-muted-foreground/40 text-[9px]">✕</span>
                    </span>
                    <span className="text-muted-foreground/50 line-through decoration-muted-foreground/20 text-sm md:text-base">
                      {slide.before}
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="ml-[9px] h-3 border-l-2 border-dashed" style={{ borderColor: "color-mix(in oklab, var(--brand-orange) 25%, transparent)" }} />

                  {/* After */}
                  <div className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[9px] text-white"
                      style={{ background: "var(--brand-orange)" }}
                    >
                      ✓
                    </span>
                    <span className="font-semibold text-base md:text-lg" style={{ color: "var(--brand-orange)" }}>
                      {slide.after}
                    </span>
                  </div>
                </div>

                {/* Insight line */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto pt-3 border-t border-border">
                  {slide.insight}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Controls: dots + arrows ── */}
      <div className="flex items-center justify-center gap-6 mt-8 px-[clamp(1.25rem,4vw,3rem)]">
        {/* Prev arrow */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full border border-border bg-card hover:border-foreground/40 transition-colors flex items-center justify-center text-foreground flex-shrink-0"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === active
                  ? "w-7 h-2.5"
                  : "w-2.5 h-2.5 opacity-40 hover:opacity-70"
              }`}
              style={{
                background: idx === active ? "var(--brand-orange)" : "var(--foreground)",
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full border border-border bg-card hover:border-foreground/40 transition-colors flex items-center justify-center text-foreground flex-shrink-0"
        >
          →
        </button>
      </div>
    </div>
  );
}
