import { Mark } from "./Nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-lg">Kriyasetu</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Bridging knowledge and real competence through experiential learning,
            conceptual clarity, and AI-enabled education.
          </p>
        </div>
        <FooterCol title="Explore" items={[["About", "#vision"], ["Workshops", "#workshops"], ["Institutions", "#why"], ["How it works", "#how"]]} />
        <FooterCol title="Connect" items={[["Contact", "#cta"], ["LinkedIn", "#"], ["hello@kriyasetu.com", "mailto:hello@kriyasetu.com"]]} />
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Sutra</div>
          <p className="font-display text-base leading-snug">Kriya · Setu</p>
          <p className="text-xs text-muted-foreground mt-1">Action. Bridge.</p>
        </div>
      </div>
      <div className="hairline">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Kriyasetu Learning Systems</span>
          <span>Designed for institutions building future-ready learners.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="hover:text-accent transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
