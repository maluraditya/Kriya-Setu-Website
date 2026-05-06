import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Yantra } from "@/components/site/Yantra";
import { PendulumLab } from "@/components/site/PendulumLab";
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
      <Shift />
      <How />
      <AI />
      <Workshops />
      <WhyInstitutions />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Yantra className="absolute -right-32 -top-20 w-[820px] opacity-90 float-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Experiential Learning · Conceptual Clarity · AI
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
            Bridging <em className="not-italic text-primary">knowledge</em> and
            <br className="hidden sm:block" />
            real <span className="relative">
              competence
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M2 7 Q 60 1 120 6 T 198 4" stroke="var(--brand-orange)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Kriyasetu helps institutions transform teaching and learning through
            experiential systems, conceptual clarity, and AI-enabled education —
            so students don’t just memorise, they understand, apply, and grow.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors">
              Book a Demo
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-medium hover:border-foreground/40 transition-colors">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            ["Concept", "Understand"],
            ["Visualise", "See it clearly"],
            ["Experience", "Do it"],
            ["Competence", "Own it"],
          ].map(([k, v], i) => (
            <div key={k} className="bg-background px-6 py-7">
              <div className="text-xs text-muted-foreground tabular-nums">0{i + 1}</div>
              <div className="mt-2 font-display text-xl">{k}</div>
              <div className="text-sm text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </div>
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
function Shift() {
  const rows: [string, string][] = [
    ["Passive listening", "Experiential learning"],
    ["Memorisation", "Conceptual understanding"],
    ["Isolated teaching", "Structured systems"],
    ["Theory only", "Real-world application"],
    ["Lectures", "Learning experiences"],
  ];
  return (
    <section id="shift" className="relative py-28 md:py-36 bg-[color:var(--brand-ink)] text-background">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-background/60">The Shift</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
            From teaching concepts to <em className="not-italic text-accent">building competence.</em>
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed max-w-md">
            Kriyasetu reframes the classroom as a journey. Every concept becomes
            an experience — visualised, applied, and reflected upon — until it
            settles as real understanding.
          </p>
          <img
            src={transformationImg}
            alt="Teacher leading an experiential classroom"
            loading="lazy"
            width={1280}
            height={960}
            className="mt-10 rounded-xl border border-white/10 hidden lg:block"
          />
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-3 items-stretch">
            <div className="text-xs uppercase tracking-[0.22em] text-background/50 pb-2">Before</div>
            <div />
            <div className="text-xs uppercase tracking-[0.22em] text-accent pb-2">With Kriyasetu</div>
            {rows.map(([a, b], i) => (
              <FragmentRow key={i} a={a} b={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function FragmentRow({ a, b }: { a: string; b: string }) {
  return (
    <>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-5 text-background/70 line-through decoration-white/20">
        {a}
      </div>
      <div className="self-center text-accent">→</div>
      <div className="rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-5 text-background">
        {b}
      </div>
    </>
  );
}

/* ---------------------------------- HOW --------------------------------- */
function How() {
  const steps = [
    ["Concept Understanding", "Anchor the idea in clarity, not memory."],
    ["Visualisation", "Make the invisible visible — diagrams, models, motion."],
    ["Real-World Connection", "Tie every concept to lived reality."],
    ["Experiential Activity", "Let students do, build, and discover."],
    ["Reflection & Reinforcement", "Convert experience into permanent insight."],
    ["Competence Building", "Application, confidence, transfer."],
  ];
  return (
    <Section id="how" eyebrow="The framework" title={<>Six steps from <em className="text-primary not-italic">concept</em> to competence.</>}
      lead="A repeatable, measurable rhythm any teacher can run — designed with educators, not for them.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map(([t, d], i) => (
          <div key={t} className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1 duration-500" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs tabular-nums text-muted-foreground">STEP · {String(i + 1).padStart(2, "0")}</span>
              <StepGlyph i={i} />
            </div>
            <h3 className="mt-6 font-display text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            <div className="absolute inset-x-7 bottom-5 h-px bg-gradient-to-r from-primary/30 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </Section>
  );
}
function StepGlyph({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9">
      <circle cx="18" cy="18" r="16" fill="none" stroke="var(--brand-blue)" strokeOpacity=".15" />
      <circle cx="18" cy="18" r={4 + i} fill="none" stroke="var(--brand-blue)" strokeOpacity=".5" />
      <circle cx="18" cy="18" r="2" fill="var(--brand-orange)" />
    </svg>
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

/* ------------------------------- WORKSHOPS ------------------------------ */
function Workshops() {
  const list = [
    ["Design Thinking", "Teachers as designers of learning."],
    ["AI in Education", "Hands-on, demystified, classroom-ready."],
    ["Faculty Enablement", "Teaching craft, framework fluency, confidence."],
    ["Student Innovation", "From curiosity to working prototypes."],
    ["Problem Solving", "Frameworks for thinking, not just answering."],
    ["Interactive Learning Models", "Concept-first, experience-led classroom systems."],
  ];
  return (
    <Section id="workshops" eyebrow="Experiences" title={<>Workshops that <em className="text-primary not-italic">change classrooms.</em></>}
      lead="Immersive sessions for faculty and students — built to leave behind systems, not slides.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map(([t, d], i) => (
          <article key={t} className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-7 hover:border-accent/40 transition-colors">
            <span className="text-xs tabular-nums text-muted-foreground">— {String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary group-hover:text-accent transition-colors">
              Explore <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </article>
        ))}
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
