import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Yantra } from "@/components/site/Yantra";
import { AtomBuilder } from "@/components/site/AtomBuilder";
import { HeroFloaters } from "@/components/site/HeroFloaters";
import { TeacherScroll } from "@/components/site/TeacherScroll";
import { FrameworkScroll } from "@/components/site/FrameworkScroll";
import transformationImg from "@/assets/transformation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriyasetu — Bridging Knowledge and Real Competence" },
      {
        name: "description",
        content:
          "Kriyasetu helps institutions transform teaching and learning through experiential systems, conceptual clarity, and AI-enabled education.",
      },
      { property: "og:title", content: "Kriyasetu — Experiential Learning Transformation" },
      { property: "og:description", content: "An AI-powered experiential learning platform for institutions, teachers and students." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <TeacherScroll />
      <MidCTA
        heading="Ready to see the shift in your classrooms?"
        sub="Join institutions already moving from memorisation to mastery."
        primary={{ label: "Book a Demo", href: "#cta" }}
        secondary={{ label: "See How It Works", href: "#how" }}
      />
      <Shift />
      <Experience />
      <MidCTA
        heading="Bring this into your institution."
        sub="Every subject. Every grade. The same depth of experience."
        primary={{ label: "Partner With Us", href: "#cta" }}
        secondary={{ label: "Explore the Framework", href: "#how" }}
        accent
      />
      <How />
      <MidCTA
        heading="Your students deserve to own what they learn."
        sub="Let's build a learning system designed around your institution."
        primary={{ label: "Schedule a Conversation", href: "#cta" }}
      />
      <AI />
      <WhyInstitutions />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
}

/* ------------------------------- EXPERIENCE ------------------------------ */
function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-1/3 h-[120%] -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 65% 30%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-px w-8 align-middle bg-accent mr-3" />
            Chemistry · Build an Atom · Live
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Most sites{" "}
            <em className="text-muted-foreground/60 not-italic line-through">
              describe
            </em>{" "}
            learning.
            <br />
            We let you <em className="text-accent not-italic">feel</em> it.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Add a proton — a new element appears. Add an electron — the atom calms.
            This isn't a video. It's the same kind of moment Kriyasetu engineers
            into every classroom: <span className="text-foreground italic">"oh — I get it."</span>
          </p>
        </div>
        <AtomBuilder />
      </div>
    </section>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  const steps = [
    { num: "01", label: "Concept", desc: "Understand the why", symbol: "◉" },
    { num: "02", label: "Visualise", desc: "See it clearly", symbol: "◈" },
    { num: "03", label: "Experience", desc: "Do it yourself", symbol: "◆" },
    { num: "04", label: "Competence", desc: "Own it forever", symbol: "●" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-16">
      {/* Background layer */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden hero-canvas-wrap">
        {/* Live particle network — mouse-reactive knowledge graph */}
        <HeroCanvas />
        {/* Warm ambient glows underneath */}
        <div
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 65%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/5 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 18%, transparent), transparent 65%)" }}
        />
        {/* Yantra — softer, float */}
        <Yantra className="absolute -right-48 -top-24 w-[900px] opacity-40 float-slow pointer-events-none" />
        {/* Vignette fade to bg at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none" />
      </div>

      <div className="container-px mx-auto max-w-7xl flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <p className="reveal inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-px w-8 bg-accent flex-shrink-0" />
          Experiential Learning · Conceptual Clarity · AI
        </p>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.01] tracking-tight max-w-4xl">
          Where knowing
          <br />
          becomes{" "}
          <span className="relative inline-block">
            <span style={{ color: "var(--brand-orange)" }}>doing.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7 Q 60 1 120 6 T 198 4"
                stroke="var(--brand-orange)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        {/* Sub */}
        <p className="reveal reveal-delay-2 mt-7 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          The experiential learning platform that turns abstract concepts into
          visceral, unforgettable understanding — for every student, every class.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-all hover:gap-3"
            style={{ background: "var(--brand-orange)", color: "#fff" }}
          >
            Experience it live
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            Book a Demo
          </a>
          <a
            href="#teacher-story"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See the teacher story ↓
          </a>
        </div>

        {/* Social proof */}
        <p className="reveal reveal-delay-3 mt-6 text-xs text-muted-foreground/70">
          Trusted by schools, PU colleges & NEET/JEE institutions across India &amp; GCC
        </p>

        {/* Journey steps — visual cards */}
        <div className="reveal reveal-delay-3 mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {steps.map(({ num, label, desc, symbol }, i) => (
            <div
              key={label}
              className="relative group rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-5 py-6 md:px-6 md:py-7 hover:border-accent/40 hover:bg-card transition-all duration-300 cursor-default"
            >
              {/* Connector arrow on desktop */}
              {i < 3 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-muted-foreground/40 text-xs">
                  →
                </div>
              )}
              <div
                className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 origin-left"
                style={{ opacity: 0.3 + i * 0.25, color: i >= 2 ? "var(--brand-orange)" : "var(--brand-blue)" }}
              >
                {symbol}
              </div>
              <div className="text-[10px] text-muted-foreground tabular-nums tracking-widest">{num}</div>
              <div className="mt-1 font-display text-lg md:text-xl">{label}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/40 animate-bounce pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="text-base">↓</span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Schools", "PU Colleges", "NEET / JEE Institutions", "Academic Directors", "Faculty Teams", "Innovation Centres"];
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl py-5 flex flex-wrap gap-x-10 gap-y-2 items-center justify-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-foreground/70">Trusted by educators across</span>
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

/* -------------------------------- PROBLEM ------------------------------- */
function Problem() {
  const items = [
    "Students memorise but rarely understand.",
    "Conceptual foundations remain weak.",
    "The same concept gets taught inconsistently.",
    "Engagement quietly fades through the term.",
    "Abstract ideas stay abstract, never lived.",
    "Effort doesn’t always translate to outcomes.",
    "Weaker students get left behind.",
    "Faculty carry quiet, persistent burnout.",
  ];
  return (
    <Section id="problem" eyebrow="The reality" title={<>What teachers deal <em className="text-accent not-italic">with every day</em>.</>}
      lead="Most classrooms are full of effort. The gap isn’t intent — it’s the system.">
      <div className="grid gap-px bg-border rounded-2xl overflow-hidden border border-border">
        <div className="grid sm:grid-cols-2 gap-px">
          {items.map((t, i) => (
            <div key={t} className="bg-background p-7 flex gap-5 items-start">
              <span className="font-display text-2xl text-primary tabular-nums">·{String(i + 1).padStart(2, "0")}</span>
              <p className="text-base leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------- SHIFT -------------------------------- */
const SHIFT_ITEMS = [
  { icon: "📖", category: "Engagement",   before: "Passive listening",    after: "Experiential learning",     stat: "3×" },
  { icon: "🧠", category: "Retention",    before: "Rote memorisation",    after: "Conceptual understanding",  stat: "60%" },
  { icon: "🔗", category: "Consistency",  before: "Isolated teaching",    after: "Structured systems",        stat: "≡" },
  { icon: "🌍", category: "Application",  before: "Theory only",          after: "Real-world application",    stat: "↗" },
  { icon: "⚡", category: "Energy",       before: "Lecture-heavy classes", after: "Learning experiences",     stat: "∞" },
];

function Shift() {
  return (
    <section id="shift" className="relative py-28 md:py-36 bg-[color:var(--brand-ink)] text-background overflow-hidden">
      {/* Subtle yantra in background */}
      <div aria-hidden className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <Yantra className="w-[600px]" />
      </div>

      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.22em] text-background/50">The Shift</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
              From teaching concepts to{" "}
              <em className="not-italic text-accent">building competence.</em>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-background/60 leading-relaxed">
              Kriyasetu reframes the classroom as a journey. Every concept becomes
              an experience — visualised, applied, and reflected upon — until it
              settles as real, owned understanding.
            </p>
          </div>
        </div>

        {/* Transformation cards — scannable on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHIFT_ITEMS.map(({ icon, category, before, after, stat }) => (
            <ShiftCard key={category} icon={icon} category={category} before={before} after={after} stat={stat} />
          ))}
          {/* Photo card */}
          <div className="sm:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden border border-white/10 min-h-[200px]">
            <img
              src={transformationImg}
              alt="Teacher leading an experiential classroom"
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-ink)] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm text-background/80 leading-snug">
                "The moment a student <em className="text-accent not-italic">experiences</em> a concept — they own it."
              </p>
            </div>
          </div>
        </div>

        {/* Column labels — compact, below cards */}
        <div className="mt-6 flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2 text-background/40">
            <span className="h-3 w-3 rounded-sm border border-white/20 bg-white/5" />
            Before
          </span>
          <span className="text-background/30">→</span>
          <span className="flex items-center gap-2 text-accent">
            <span className="h-3 w-3 rounded-sm border border-accent/40 bg-accent/10" />
            With Kriyasetu
          </span>
        </div>
      </div>
    </section>
  );
}

function ShiftCard({
  icon, category, before, after, stat,
}: {
  icon: string; category: string; before: string; after: string; stat: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden group hover:border-accent/30 transition-all duration-300">
      {/* Top: category */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-2.5">
        <span className="text-xl">{icon}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-background/50">{category}</span>
        <span className="ml-auto text-sm font-display text-accent/60">{stat}</span>
      </div>
      {/* Before */}
      <div className="mx-4 mb-2 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02]">
        <div className="text-[10px] uppercase tracking-widest text-background/30 mb-1">Before</div>
        <p className="text-background/50 text-sm line-through decoration-white/20">{before}</p>
      </div>
      {/* Arrow */}
      <div className="flex justify-center py-1 text-accent/40 text-lg group-hover:text-accent transition-colors">↓</div>
      {/* After */}
      <div className="mx-4 mb-5 px-4 py-3 rounded-xl border border-accent/25 bg-accent/[0.06]">
        <div className="text-[10px] uppercase tracking-widest text-accent/60 mb-1">With Kriyasetu</div>
        <p className="text-background text-sm font-medium">{after}</p>
      </div>
    </div>
  );
}

/* ---------------------------------- HOW --------------------------------- */
function How() {
  return (
    <Section id="how" eyebrow="The framework" title={<>Six steps from <em className="text-primary not-italic">concept</em> to competence.</>}
      lead="Scroll. The framework reveals itself the same way a Kriyasetu lesson does — one node at a time, each building on the last.">
      <FrameworkScroll />
    </Section>
  );
}

/* ----------------------------------- AI --------------------------------- */
function AI() {
  const items = [
    ["Faculty support systems", "Lesson prep, question banks, and explanations — drafted in minutes, refined by you."],
    ["Personalised learning", "Each student gets help that matches their pace, gaps, and curiosity."],
    ["Intelligent reinforcement", "AI revisits weak concepts at the right time, the right depth."],
    ["Content augmentation", "Visuals, analogies, and examples generated around your syllabus."],
  ];
  return (
    <Section id="ai" eyebrow="AI · Carefully placed" title={<>AI as a teaching <em className="text-accent not-italic">enabler</em>, not a replacement.</>}
      lead="Teachers remain at the centre. AI removes friction — preparation, personalisation, and consistency — so educators can focus on the human work that matters.">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 relative aspect-square max-w-md">
          <Yantra className="absolute inset-0 w-full h-full" />
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {items.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border p-6 bg-card">
              <div className="h-1.5 w-8 bg-accent rounded-full" />
              <h3 className="mt-4 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- WHY INST ------------------------------- */
function WhyInstitutions() {
  const stats: [string, string, string][] = [
    ["+", "Engagement", "Classrooms move from compliance to curiosity."],
    ["◎", "Conceptual Clarity", "Students understand before they attempt."],
    ["≡", "Consistency", "Same quality of teaching, every section, every term."],
    ["↗", "Outcomes", "Better internal scores, better board / entrance results."],
    ["⚘", "Faculty Enablement", "Teachers grow as designers of learning."],
    ["∞", "Future Ready", "Thinking, doing, and adapting — not just remembering."],
  ];
  return (
    <section id="why" className="py-28 md:py-36 bg-secondary/50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground"><span className="inline-block h-px w-8 align-middle bg-primary mr-3" />Why institutions choose Kriyasetu</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
            Built for the long arc of <em className="text-primary not-italic">educational impact.</em>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-border bg-border rounded-2xl overflow-hidden">
          {stats.map(([g, t, d]) => (
            <div key={t} className="bg-background p-8">
              <div className="text-3xl text-accent font-display">{g}</div>
              <h3 className="mt-5 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- VISION ------------------------------- */
function Vision() {
  return (
    <section id="vision" className="py-32 md:py-40 relative overflow-hidden">
      <div aria-hidden className="absolute -left-40 top-1/2 -translate-y-1/2 opacity-50">
        <Yantra className="w-[700px]" />
      </div>
      <div className="container-px mx-auto max-w-4xl text-center relative">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Our Vision</p>
        <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] tracking-tight">
          Education should not stop at <em className="text-primary not-italic">syllabus completion.</em>
          <br />
          It should create <span className="text-accent">competence,</span> confidence, and curiosity.
        </p>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Kriyasetu exists to bridge the gap between knowledge and real understanding —
          where Indian wisdom of practice meets the precision of modern systems.
        </p>
        <div className="mt-10 inline-flex items-center gap-3 text-sm text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          Kriya · action  ·  Setu · bridge
          <span className="h-px w-10 bg-border" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA -------------------------------- */
function CTA() {
  return (
    <section id="cta" className="py-24 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] text-background p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center">
          <div aria-hidden className="absolute -right-32 -top-32 w-[520px] opacity-70">
            <Yantra className="w-full" />
          </div>
          <div className="md:col-span-7 relative">
            <p className="text-xs uppercase tracking-[0.22em] text-background/60">Begin the bridge</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
              Build future-ready <em className="not-italic text-accent">learning experiences.</em>
            </h2>
            <p className="mt-5 text-background/70 max-w-lg leading-relaxed">
              Let’s shape a teaching and learning system designed around your
              institution — your students, your faculty, your outcomes.
            </p>
          </div>
          <div className="md:col-span-5 relative flex flex-col gap-3">
            <a href="mailto:hello@kriyasetu.com" className="inline-flex items-center justify-between gap-3 rounded-full bg-accent text-accent-foreground px-6 py-4 text-sm font-medium hover:opacity-90 transition-opacity">
              Schedule a Conversation <span>→</span>
            </a>
            <a href="mailto:hello@kriyasetu.com" className="inline-flex items-center justify-between gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-medium hover:border-white/40 transition-colors">
              Bring Kriyasetu to Your Institution <span>→</span>
            </a>
            <p className="text-xs text-background/50 mt-2">Typically respond within 24 hours · India & GCC</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MID CTA -------------------------------- */
function MidCTA({
  heading,
  sub,
  primary,
  secondary,
  accent: isAccent = false,
}: {
  heading: string;
  sub: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  accent?: boolean;
}) {
  return (
    <div className={`${isAccent ? "bg-secondary/60" : ""} py-14 md:py-16`}>
      <div className="container-px mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border bg-card px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center gap-8 justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl md:text-3xl leading-snug">{heading}</h3>
            <p className="mt-2 text-muted-foreground text-base leading-relaxed">{sub}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:gap-3"
              style={{ background: "var(--brand-orange)", color: "#fff" }}
            >
              {primary.label}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            {secondary && (
              <a
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Section util ---------------------------- */
function Section({
  id, eyebrow, title, lead, children,
}: {
  id: string; eyebrow: string; title: React.ReactNode; lead?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-px w-8 align-middle bg-accent mr-3" />{eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">{title}</h2>
          {lead && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
