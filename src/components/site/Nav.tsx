import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "The Gap" },
  { href: "#shift", label: "The Shift" },
  { href: "#how", label: "How It Works" },
  { href: "#experience", label: "Experiences" },
  { href: "#vision", label: "Vision" },
];


export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Mark />
          <span className="font-display text-lg tracking-tight">Kriyasetu</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Book a Demo
          <span aria-hidden>→</span>
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
        >
          <span className="block w-4 h-px bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground">
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import logoAsset from "@/assets/kriyasetu-logo.png.asset.json";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Kriyasetu"
      className={`h-9 w-9 object-contain ${className}`}
    />
  );
}
