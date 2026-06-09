import { Mark } from "./Nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid gap-12 md:gap-8 md:grid-cols-12 mb-16">
          <div className="md:col-span-5 pr-8">
            <div className="flex items-center gap-3">
              <Mark className="w-10 h-10" />
              <span className="font-display text-xl font-bold tracking-tight" style={{ color: "var(--brand-blue)" }}>
                Kriya Setu
              </span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Bridging knowledge and real competence through experiential learning,
              conceptual clarity, and AI-enabled education.
            </p>
          </div>
          
          <FooterCol 
            title="Explore" 
            items={[
              ["About", "#vision"], 
              ["Experience", "#experience"], 
              ["Institutions", "#cta"], 
              ["How it works", "#how"]
            ]} 
          />
          
          <FooterCol 
            title="Connect" 
            items={[
              ["Contact", "#cta"], 
              ["support@kriyasetu.com", "mailto:support@kriyasetu.com"]
            ]} 
          />
          
          <div className="md:col-span-3 lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-6">Sutra</div>
            <p className="font-display text-lg font-medium leading-snug">Kriya · Setu</p>
            <p className="text-sm text-muted-foreground mt-2">Action. Bridge.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KRIYASETU LLP. All rights reserved.</p>
          <p>Designed for institutions building future-ready learners.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="md:col-span-2 lg:col-span-2">
      <div className="text-xs font-semibold uppercase tracking-wider text-foreground mb-6">{title}</div>
      <ul className="space-y-4">
        {items.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-muted-foreground hover:text-accent transition-colors no-underline">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
