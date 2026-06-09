import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Yantra } from "@/components/site/Yantra";
import { AtomBuilder } from "@/components/site/AtomBuilder";
import { HeroFloaters } from "@/components/site/HeroFloaters";
import { TeacherScroll } from "@/components/site/TeacherScroll";
import { FrameworkScroll } from "@/components/site/FrameworkScroll";
import { ShiftCarousel } from "@/components/site/ShiftCarousel";
import { BookDemoProvider, useBookDemo } from "@/components/site/BookDemoDialog";
import howKriyasetuWorks from "@/assets/how-kriyasetu-works-local.png";
import experientialHero from "@/assets/experiential_learning_hero.png";
import { Reveal } from "@/components/site/Reveal";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriya Setu — Bridging Knowledge and Real Competence" },
      {
        name: "description",
        content:
          "Kriya Setu helps institutions transform teaching and learning through experiential systems, conceptual clarity, and AI-enabled education.",
      },
      { property: "og:title", content: "Kriya Setu — Experiential Learning Transformation" },
      { property: "og:description", content: "An AI-powered experiential learning platform for institutions, teachers and students." },
      { property: "og:image", content: "https://kriya-setu-website.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kriya Setu — Experiential Learning Transformation" },
      { name: "twitter:description", content: "An AI-powered experiential learning platform for institutions, teachers and students." },
      { name: "twitter:image", content: "https://kriya-setu-website.vercel.app/og-image.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <BookDemoProvider>
      <div id="top" className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <Problem />
        <Solution />
        <Shift />
        <TeacherScroll />

        <MidCTA
          heading="Ready to see the shift in your classrooms?"
          sub="Join institutions already moving from memorisation to mastery."
          primary={{ label: "Book a Demo", href: "#cta" }}
          secondary={{ label: "See How It Works", href: "#how" }}
        />
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
        <WhyInstitutions />
        <Vision />
        <CTA />
        <Footer />
      </div>
    </BookDemoProvider>
  );
}


/* ------------------------------- EXPERIENCE ------------------------------ */
function Experience() {
  return (
    <section id="experience" className="relative py-12 md:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-1/3 h-[120%] -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 65% 30%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <Reveal delay={0.1}>
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
            This isn't a video. It's the same kind of moment Kriya Setu engineers
            into every classroom: <span className="text-foreground italic">"oh — I get it."</span>
          </p>
        </div>
        </Reveal>
        <Reveal delay={0.25}>
        <AtomBuilder />
        </Reveal>
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-14">
      {/* Background layer */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {/* Warm cream base with soft chromatic glows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 30%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), radial-gradient(50% 60% at 20% 70%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
          }}
        />
        {/* Moving gradient orbs */}
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50 animate-[float-slow_14s_ease-in-out_infinite]"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-orange) 50%, transparent), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 animate-[float-slow_18s_ease-in-out_infinite_reverse]"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent 70%)" }}
        />
        {/* Floating educational artifacts */}
        <HeroFloaters />
        {/* Yantra — softer, float */}
        <Yantra className="absolute -right-48 -top-24 w-[900px] opacity-30 float-slow pointer-events-none" />
        {/* Vignette fade to bg at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none" />
      </div>


      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px] flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 lg:items-center">

        {/* ── Text column (headline + desktop sub + desktop CTAs) ── */}
        <div className="order-1 lg:col-span-7 flex flex-col justify-center">

        {/* Headline */}
        <Reveal delay={0.1}>
        <h1
          aria-label="Learning should be experienced not memorised."
          className="mt-6 font-display text-[clamp(2rem,5.5vw,4.05rem)] lg:text-[clamp(3.15rem,3.7vw,4.15rem)] leading-[1.25] lg:leading-[1.08] max-w-[46rem]"
        >
          <span className="block">Learning should be</span>
          <span className="block">
            <span className="relative inline-block">
              <span style={{ color: "var(--brand-blue)" }}>experienced</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q 60 1 120 6 T 198 4"
                  stroke="var(--brand-blue)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>{" "}
            not
          </span>{" "}
          <span className="relative block w-fit">
            <span style={{ color: "var(--brand-orange)" }}>memorised</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 Q 62 2 120 7 T 198 5"
                stroke="var(--brand-orange)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.48"
              />
            </svg>
          </span>
        </h1>
        </Reveal>

        {/* Desktop-only full description */}
        <Reveal delay={0.25}>
        <p className="hidden lg:block mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Kriya Setu bridges the gap between memorisation and understanding through
          curriculum-aligned experiential learning, helping educators teach with
          clarity and students learn with meaning.
        </p>
        </Reveal>

        {/* Desktop-only CTAs */}
        <Reveal delay={0.4}>
        <div className="hidden lg:flex mt-9 flex-wrap items-center gap-3">
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
        </div>
        </Reveal>

        </div>

      {/* ── Hero image (order-2: right after headline on mobile) ── */}
      <Reveal delay={0.25} className="order-2 lg:col-span-5 relative">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <img
            src={experientialHero}
            alt="Students engaged in experiential learning with a digital visualization system"
            className="aspect-[4/3] w-full object-cover object-center"
            loading="eager"
          />
        </div>
        
        {/* floating mini badge 1 */}
        <div className="flex absolute top-2 -left-2 md:top-8 md:-left-6 items-center gap-1.5 md:gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_6s_ease-in-out_infinite] scale-[0.65] md:scale-75 lg:scale-100 origin-top-left md:origin-center z-10">
          <span className="text-lg md:text-xl">💡</span>
          <div>
            <div className="text-[10px] md:text-xs font-display">Concept Clarity</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground leading-tight">Learning that lasts</div>
          </div>
        </div>
        
        {/* floating mini badge 2 */}
        <div className="flex absolute top-12 -right-4 md:top-16 md:-right-8 items-center gap-1.5 md:gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_7s_ease-in-out_infinite_reverse] scale-[0.65] md:scale-75 lg:scale-100 origin-top-right md:origin-center z-10">
          <span className="text-lg md:text-xl">🤝</span>
          <div>
            <div className="text-[10px] md:text-xs font-display">Empowering Teachers</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground leading-tight">Teaching with confidence</div>
          </div>
        </div>

        {/* floating mini badge 3 */}
        <div className="flex absolute bottom-12 -left-4 md:bottom-16 md:-left-8 items-center gap-1.5 md:gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_8s_ease-in-out_infinite] scale-[0.65] md:scale-75 lg:scale-100 origin-bottom-left md:origin-center z-10">
          <span className="text-lg md:text-xl text-[color:var(--brand-orange)]">⚡</span>
          <div>
            <div className="text-[10px] md:text-xs font-display">Interactive Learning</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground leading-tight">Active participation, deeper understanding</div>
          </div>
        </div>

        {/* floating mini badge 4 */}
        <div className="flex absolute bottom-2 -right-2 md:bottom-8 md:-right-4 items-center gap-1.5 md:gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_6s_ease-in-out_infinite_reverse] scale-[0.65] md:scale-75 lg:scale-100 origin-bottom-right md:origin-center z-10">
          <span className="text-lg md:text-xl text-[color:var(--brand-blue)]">🌍</span>
          <div>
            <div className="text-[10px] md:text-xs font-display">Real-World Connection</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground leading-tight">Applying learning in life</div>
          </div>
        </div>

      </Reveal>

      {/* ── Mobile-only: short description + CTAs (order-3) ── */}
      <div className="order-3 lg:hidden flex flex-col">
        <Reveal delay={0.3}>
          <p className="text-base text-muted-foreground leading-relaxed">
            Experiential, curriculum-aligned learning — helping educators teach with clarity and students learn with meaning.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
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
          </div>
        </Reveal>
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

/* -------------------------------- PROBLEM ------------------------------- */
function Problem() {
  const items: { icon: string; title: string; desc: string }[] = [
    { icon: "📚", title: "Memory over meaning",     desc: "Students remember formulas. They rarely understand them." },
    { icon: "🧱", title: "Weak foundations",         desc: "Concepts stack on shaky ground — and quietly collapse later." },
    { icon: "🎲", title: "Inconsistent depth",       desc: "The same chapter, taught five different ways across sections." },
    { icon: "📉", title: "Engagement fades",         desc: "Curiosity in week one. Compliance by week ten." },
  ];
  return (
    <Section
      id="problem"
      eyebrow="The reality"
      title={<>What teachers deal <em className="text-accent not-italic">with every day</em>.</>}
      lead="Most classrooms are full of effort. The gap isn't intent — it's the system."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {items.map((it, idx) => (
          <Reveal key={it.title} delay={0.1 * (idx % 4)}>
          <div
            className="group relative rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full"
          >
            <div className="text-2xl mb-3">{it.icon}</div>
            <h3 className="font-display text-lg leading-snug">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- SHIFT -------------------------------- */
function Shift() {
  return (
    <section id="shift" className="relative py-16 md:py-24 bg-secondary/40 overflow-hidden">
      <div aria-hidden className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
        <Yantra className="w-[600px]" />
      </div>

      {/* Header — uses container padding */}
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px] mb-10 md:mb-14">
        <div className="max-w-2xl">
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-px w-8 align-middle bg-accent mr-3" />The Shift
            </p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[1.1] text-foreground">
              From teaching concepts to{" "}
              <em className="not-italic" style={{ color: "var(--brand-orange)" }}>building competence.</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              Every dimension of the classroom transforms — swipe to see the shift.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Carousel — full bleed, handles its own padding */}
      <div className="mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <Reveal delay={0.2}>
          <ShiftCarousel />
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------------------------- HOW --------------------------------- */
function How() {
  return (
    <Section id="how" eyebrow="The framework" title={<>Six steps from <em className="text-primary not-italic">concept</em> to competence.</>}
      lead="Scroll. The framework reveals itself the same way a Kriya Setu lesson does — one node at a time, each building on the last.">
      <FrameworkScroll />
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
    <section id="why" className="py-12 md:py-16 bg-secondary/50">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <Reveal delay={0.1}>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground"><span className="inline-block h-px w-8 align-middle bg-primary mr-3" />Why institutions choose Kriya Setu</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
            Built for the long arc of <em className="text-primary not-italic">educational impact.</em>
          </h2>
        </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-border bg-border rounded-2xl overflow-hidden">
          {stats.map(([g, t, d], idx) => (
            <Reveal key={t} delay={0.1 * idx} className="h-full">
            <div className="bg-background p-8 h-full">
              <div className="text-3xl text-accent font-display">{g}</div>
              <h3 className="mt-5 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
            </Reveal>
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
          Kriya Setu exists to bridge the gap between knowledge and real understanding —
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
  const { open } = useBookDemo();
  
  return (
    <section id="cta" className="py-16 md:py-20">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
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
          <div className="md:col-span-5 relative flex flex-col gap-4">
            <button 
              onClick={open} 
              className="inline-flex w-full items-center justify-between gap-4 rounded-full bg-accent text-accent-foreground px-8 py-5 text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
            >
              Schedule a Conversation <span className="text-xl leading-none">→</span>
            </button>
            <p className="text-xs text-background/50 px-2">Typically respond within 24 hours · India & GCC</p>
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
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
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
    <section id={id} className="py-12 md:py-16">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <Reveal delay={0.1}>
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-px w-8 align-middle bg-accent mr-3" />{eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">{title}</h2>
          {lead && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{lead}</p>}
        </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------- SOLUTION -------------------------------- */
function Solution() {
  return (
    <section id="solution" className="relative py-12 md:py-16 overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px]">
        <Reveal delay={0.1}>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-accent flex-shrink-0" />
            How we solve it
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            One classroom. <em className="not-italic" style={{ color: "var(--brand-orange)" }}>Every student in flow.</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Kriya Setu equips the teacher with a curriculum-aligned experiential canvas — concepts come alive on the board,
            every student follows along on their device, and learning shifts from listening to doing.
          </p>
        </div>
        </Reveal>

        <Reveal delay={0.2}>
        <div className="relative mt-12 rounded-3xl overflow-hidden border border-border bg-card mx-auto w-fit" style={{ boxShadow: "var(--shadow-elev)" }}>
          <img
            src={howKriyasetuWorks}
            alt="How Kriya Setu works — interactive simulations, NCERT-aligned content, real-world context, video explainers, and an empowered teacher in a real classroom"
            className="max-w-full max-h-[75vh] h-auto object-contain block"
            loading="lazy"
          />
        </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { k: "For teachers", v: "Plan less. Inspire more." },
            { k: "For students", v: "Feel it. Then remember it." },
            { k: "For institutions", v: "Outcomes you can measure." },
          ].map((c, idx) => (
            <Reveal key={c.k} delay={0.1 * idx}>
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-5 py-5 h-full">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.k}</div>
              <div className="mt-2 text-base font-medium">{c.v}</div>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium hover:gap-3 transition-all"
            style={{ background: "var(--brand-orange)", color: "#fff" }}
          >
            Bring Kriya Setu to your classroom <span>→</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
