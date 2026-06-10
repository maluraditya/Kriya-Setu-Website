import React from "react";

const logos = [
  { name: "Excellent PU Science College", src: "/logos/excellent-pu.jpg" },
  { name: "Excellent NEET Academy Dharwad", src: "/logos/excellent-dharwad.png" },
  { name: "The Global School of Excellence", src: "/logos/tgse.jpg" },
  // Duplicate a few more for continuous looping in case of wide screens
  { name: "Excellent PU Science College", src: "/logos/excellent-pu.jpg" },
  { name: "Excellent NEET Academy Dharwad", src: "/logos/excellent-dharwad.png" },
  { name: "The Global School of Excellence", src: "/logos/tgse.jpg" },
];

export function TrustedByMarquee() {
  return (
    <section className="py-10 md:py-14 border-t border-b border-border bg-background overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px] mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by leading institutions
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full group">
        {/* Fade gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track 1 */}
        <div className="flex shrink-0 min-w-full items-center gap-12 pr-12 animate-marquee">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center justify-center w-[160px] sm:w-[200px] md:w-[240px] h-[72px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Marquee Track 2 (duplicate for seamless loop) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 min-w-full items-center gap-12 pr-12 animate-marquee"
        >
          {logos.map((logo, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex shrink-0 items-center justify-center w-[160px] sm:w-[200px] md:w-[240px] h-[72px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
