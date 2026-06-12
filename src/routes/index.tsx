import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
import experientialHero from "@/assets/experiential_learning_hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { TrustedByMarquee } from "@/components/site/TrustedByMarquee";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kriya Setu - Bridging Knowledge and Real Competence" },
      {
        name: "description",
        content:
          "Kriya Setu helps institutions transform teaching and learning through experiential systems, conceptual clarity, and AI-enabled education.",
      },
      { property: "og:title", content: "Kriya Setu - Experiential Learning Transformation" },
      { property: "og:description", content: "An AI-powered experiential learning platform for institutions, teachers and students." },
      { property: "og:image", content: "https://kriya-setu-website.vercel.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kriya Setu - Experiential Learning Transformation" },
      { name: "twitter:description", content: "An AI-powered experiential learning platform for institutions, teachers and students." },
      { name: "twitter:image", content: "https://kriya-setu-website.vercel.app/og-image.jpg" },
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
        <TrustedByMarquee />
        <DidYouKnowBubble />
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
              Try it · Live
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
              Add a proton - a new element appears. Add an electron - the atom calms.
              Don't memorise the periodic table. Build it.
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
    <section className="relative flex flex-col overflow-hidden pt-20 pb-10 md:pb-14 md:min-h-screen md:justify-center">
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
        {/* Yantra - softer, float */}
        <Yantra className="absolute -right-48 -top-24 w-[900px] opacity-30 float-slow pointer-events-none" />
        {/* Vignette fade to bg at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none" />
      </div>


      <div className="container-px mx-auto max-w-[1440px] 2xl:max-w-[1600px] flex-1 flex flex-col justify-center lg:grid lg:grid-cols-12 gap-4 lg:gap-10 xl:gap-14 lg:items-center py-4 lg:py-0">

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

          {/* Desktop-only stats — above CTAs */}
          <Reveal delay={0.32}>
            <div className="hidden lg:flex mt-7 items-center gap-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'color-mix(in oklab, var(--brand-blue) 12%, transparent)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-display font-extrabold leading-none" style={{ color: 'var(--brand-blue)' }}>88%</span>
                  <p className="text-sm text-muted-foreground leading-tight mt-0.5">Educators report improved conceptual understanding</p>
                </div>
              </div>

              <div className="w-px h-10 bg-border flex-shrink-0" />

              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'color-mix(in oklab, var(--brand-orange) 12%, transparent)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-display font-extrabold leading-none" style={{ color: 'var(--brand-orange)' }}>67%</span>
                  <p className="text-sm text-muted-foreground leading-tight mt-0.5">Reduced teaching time per topic</p>
                </div>
              </div>
            </div>
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
        <Reveal delay={0.25} className="order-2 lg:col-span-5 relative overflow-visible">
          {/* Premium moving science layer — elegant molecular/neural network */}
          <div className="absolute -inset-[50%] z-0 pointer-events-none overflow-hidden opacity-[0.3]">
            {/* Soft ambient glows to make the image pop */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-brand-orange/20 mix-blend-screen" />
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-brand-blue/20 mix-blend-screen" />

            {/* Slow rotating molecular/neural net structure */}
            <svg
              aria-hidden
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_180s_linear_infinite]"
              viewBox="0 0 1000 1000"
              fill="none"
            >
              {/* Extremely subtle grid lines */}
              <circle cx="500" cy="500" r="300" stroke="var(--brand-blue)" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.3" />
              <circle cx="500" cy="500" r="450" stroke="var(--brand-orange)" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.2" />

              {/* Network Nodes and Bonds */}
              <g stroke="currentColor" strokeWidth="1" opacity="0.4" className="text-brand-blue">
                {/* Core cluster */}
                <line x1="500" y1="200" x2="650" y2="350" />
                <line x1="650" y1="350" x2="700" y2="550" />
                <line x1="700" y1="550" x2="550" y2="750" />
                <line x1="550" y1="750" x2="350" y2="700" />
                <line x1="350" y1="700" x2="250" y2="500" />
                <line x1="250" y1="500" x2="350" y2="300" />
                <line x1="350" y1="300" x2="500" y2="200" />
                {/* Inner connections */}
                <line x1="500" y1="200" x2="500" y2="500" strokeDasharray="2 4" />
                <line x1="700" y1="550" x2="500" y2="500" strokeDasharray="2 4" />
                <line x1="250" y1="500" x2="500" y2="500" strokeDasharray="2 4" />

                {/* Nodes */}
                <circle cx="500" cy="200" r="6" fill="currentColor" />
                <circle cx="650" cy="350" r="4" fill="currentColor" />
                <circle cx="700" cy="550" r="8" fill="currentColor" />
                <circle cx="550" cy="750" r="5" fill="currentColor" />
                <circle cx="350" cy="700" r="7" fill="currentColor" />
                <circle cx="250" cy="500" r="5" fill="currentColor" />
                <circle cx="350" cy="300" r="6" fill="currentColor" />
                <circle cx="500" cy="500" r="10" fill="currentColor" className="text-brand-orange" opacity="0.6" />
              </g>

              <g stroke="currentColor" strokeWidth="0.75" opacity="0.3" className="text-brand-orange">
                {/* Outer cluster */}
                <line x1="500" y1="50" x2="800" y2="250" />
                <line x1="800" y1="250" x2="900" y2="600" />
                <line x1="900" y1="600" x2="600" y2="900" />
                <line x1="600" y1="900" x2="200" y2="850" />
                <line x1="200" y1="850" x2="100" y2="500" />
                <line x1="100" y1="500" x2="250" y2="150" />
                <line x1="250" y1="150" x2="500" y2="50" />

                {/* Cross connections */}
                <line x1="800" y1="250" x2="650" y2="350" strokeDasharray="4 6" />
                <line x1="900" y1="600" x2="700" y2="550" strokeDasharray="4 6" />
                <line x1="600" y1="900" x2="550" y2="750" strokeDasharray="4 6" />
                <line x1="100" y1="500" x2="250" y2="500" strokeDasharray="4 6" />

                {/* Nodes */}
                <circle cx="500" cy="50" r="4" fill="currentColor" />
                <circle cx="800" cy="250" r="6" fill="currentColor" />
                <circle cx="900" cy="600" r="5" fill="currentColor" />
                <circle cx="600" cy="900" r="4" fill="currentColor" />
                <circle cx="200" cy="850" r="6" fill="currentColor" />
                <circle cx="100" cy="500" r="5" fill="currentColor" />
                <circle cx="250" cy="150" r="4" fill="currentColor" />
              </g>
            </svg>

            {/* Floating isolated particles (electrons/data points) */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-blue animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-brand-orange animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-blue animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-[1] overflow-hidden rounded-2xl md:rounded-[2rem] border border-border/50 bg-card shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:shadow-[0_30px_60px_-20px_rgba(0,50,160,0.1)]">
            <img
              src={experientialHero}
              alt="Students engaged in experiential learning with a digital visualization system"
              className="aspect-[4/3] w-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* floating mini badge 1 */}
          <div className="flex absolute -top-2 -left-2 md:top-4 md:-left-6 items-center gap-1.5 md:gap-2 bg-background/92 backdrop-blur-md border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_6s_ease-in-out_infinite] scale-[0.75] md:scale-[0.85] lg:scale-100 origin-top-left z-10">
            <span className="text-base md:text-xl">💡</span>
            <div>
              <div className="text-[11px] md:text-xs font-display font-semibold">Concept Clarity</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground leading-tight">Learning that lasts</div>
            </div>
          </div>

          {/* floating mini badge 2 */}
          <div className="flex absolute top-6 -right-2 md:top-12 md:-right-8 items-center gap-1.5 md:gap-2 bg-background/92 backdrop-blur-md border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_7s_ease-in-out_infinite_reverse] scale-[0.75] md:scale-[0.85] lg:scale-100 origin-top-right z-10">
            <span className="text-base md:text-xl">🤝</span>
            <div>
              <div className="text-[11px] md:text-xs font-display font-semibold">Empowering Teachers</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground leading-tight">Teaching with confidence</div>
            </div>
          </div>

          {/* floating mini badge 3 */}
          <div className="flex absolute bottom-6 -left-2 md:bottom-12 md:-left-8 items-center gap-1.5 md:gap-2 bg-background/92 backdrop-blur-md border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_8s_ease-in-out_infinite] scale-[0.75] md:scale-[0.85] lg:scale-100 origin-bottom-left z-10">
            <span className="text-base md:text-xl text-[color:var(--brand-orange)]">⚡</span>
            <div>
              <div className="text-[11px] md:text-xs font-display font-semibold">Interactive Learning</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground leading-tight">Active participation</div>
            </div>
          </div>

          {/* floating mini badge 4 */}
          <div className="flex absolute -bottom-2 -right-2 md:bottom-4 md:-right-4 items-center gap-1.5 md:gap-2 bg-background/92 backdrop-blur-md border border-border rounded-xl md:rounded-2xl px-2.5 py-1.5 md:px-4 md:py-3 shadow-lg animate-[float_6s_ease-in-out_infinite_reverse] scale-[0.75] md:scale-[0.85] lg:scale-100 origin-bottom-right z-10">
            <span className="text-base md:text-xl text-[color:var(--brand-blue)]">🌍</span>
            <div>
              <div className="text-[11px] md:text-xs font-display font-semibold">Real-World Connection</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground leading-tight">Applying learning in life</div>
            </div>
          </div>

        </Reveal>

        {/* ── Mobile-only: short description + CTAs (order-3) ── */}
        <div className="order-3 lg:hidden flex flex-col">
          <Reveal delay={0.3}>
            <p className="text-base text-muted-foreground leading-relaxed">
              Experiential, curriculum-aligned learning - helping educators teach with clarity and students learn with meaning.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-6 flex flex-row items-center gap-2 sm:gap-3">
              <a
                href="#experience"
                className="group flex-1 justify-center sm:flex-none inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-4 py-3.5 sm:px-7 sm:py-4 text-[13px] sm:text-sm font-medium transition-all hover:gap-2 sm:hover:gap-3 whitespace-nowrap"
                style={{ background: "var(--brand-orange)", color: "#fff" }}
              >
                Experience it live
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#cta"
                className="flex-1 justify-center sm:flex-none inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-3.5 sm:px-7 sm:py-4 text-[13px] sm:text-sm font-medium hover:border-foreground/40 transition-colors whitespace-nowrap"
              >
                Book a Demo
              </a>
            </div>
          </Reveal>
        </div>

      </div>

      {/* ── Stats strip (mobile/tablet only) ── */}
      <Reveal delay={0.45}>
        <div className="lg:hidden container-px mx-auto max-w-[1440px] mt-6">
          <div className="flex flex-row items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                style={{ background: 'color-mix(in oklab, var(--brand-blue) 12%, transparent)' }}
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display font-extrabold leading-none" style={{ color: 'var(--brand-blue)' }}>88%</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight mt-0.5">Improved conceptual understanding</p>
              </div>
            </div>

            <div className="w-px h-8 sm:h-10 bg-border flex-shrink-0" />

            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                style={{ background: 'color-mix(in oklab, var(--brand-orange) 12%, transparent)' }}
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-display font-extrabold leading-none" style={{ color: 'var(--brand-orange)' }}>67%</span>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight mt-0.5">Reduced teaching time per topic</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground/40 animate-bounce pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="text-base">↓</span>
      </div>
    </section>
  );
}

/* -------------------------- DID YOU KNOW BUBBLE ------------------------- */
function DidYouKnowBubble() {
  return (
    <div className="container-px mx-auto max-w-[1440px] flex justify-center pt-8 pb-4 relative z-10">
      <Reveal delay={0.1}>
        <div className="relative max-w-xl w-full mx-auto px-4">
          
          {/* Main frame box with thin line-art border */}
          <div className="border border-foreground rounded-[1.5rem] py-5 px-6 md:px-8 bg-background relative shadow-sm">
            
            {/* Title masking the border on the left */}
            <div className="absolute -top-3 left-8 bg-background px-2 text-sm sm:text-base font-sans font-bold tracking-tight text-foreground select-none uppercase">
              DID YOU KNOW?
            </div>

            {/* Bulb masking the border on the right */}
            <div className="absolute -top-5 right-8 bg-background px-2 flex items-center justify-center">
              <svg className="w-10 h-10 text-foreground" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hand-drawn rays */}
                <line x1="16" y1="3" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="9.5" y1="5.5" x2="11" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6.5" y1="10" x2="8.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="22.5" y1="5.5" x2="21" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="25.5" y1="10" x2="23.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                {/* Bulb shape with hand-drawn round bulb color */}
                <path d="M12 18C12 16.5 11 15 11 13.5C11 10.74 13.24 8.5 16 8.5C18.76 8.5 21 10.74 21 13.5C21 15 20 16.5 20 18H12Z" fill="#FBBF24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                
                {/* Filament */}
                <path d="M14.5 14L15 12.5H17L17.5 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

                {/* Screw base details */}
                <path d="M13.5 18H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14.5 22H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Content inside the box */}
            <div className="pt-2 text-center sm:text-left text-sm sm:text-base text-muted-foreground leading-relaxed">
              The average{" "}
              <span className="font-bold text-foreground" style={{ color: "var(--brand-blue)" }}>
                human
              </span>{" "}
              attention span is only{" "}
              <span className="font-extrabold text-foreground" style={{ color: "var(--brand-orange)" }}>
                8.25 seconds
              </span>
              , which is less than the{" "}
              <span className="font-bold text-foreground" style={{ color: "var(--brand-blue)" }}>
                goldfish
              </span>
              ’s{" "}
              <span className="font-extrabold text-foreground" style={{ color: "var(--brand-orange)" }}>
                9-second
              </span>
              .{" "}
              <a 
                href="https://sambarecovery.com/rehab-blog/average-human-attention-span-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-muted-foreground/40 hover:text-accent transition-colors underline decoration-dotted inline-block align-baseline ml-1"
              >
                [Source]
              </a>
            </div>

          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* -------------------------------- PROBLEM ------------------------------- */
function Problem() {
  const items: { icon: string; title: string; desc: string }[] = [
    { icon: "📚", title: "Memory over meaning", desc: "Students remember formulas. They rarely understand them." },
    { icon: "🧱", title: "Weak foundations", desc: "Concepts stack on shaky ground - and quietly collapse later." },
    { icon: "🎲", title: "Inconsistent depth", desc: "The same chapter, taught five different ways across sections." },
    { icon: "📉", title: "Engagement fades", desc: "Curiosity in week one. Compliance by week ten." },
  ];
  return (
    <Section
      id="problem"
      eyebrow="The reality"
      title={<>What teachers deal <em className="text-accent not-italic">with every day</em>.</>}
      lead="Most classrooms are full of effort. The gap isn't intent - it's the system."
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

      {/* Header - uses container padding */}
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
              Every dimension of the classroom transforms - swipe to see the shift.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Carousel - full bleed, handles its own padding */}
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
      lead="Scroll. The framework reveals itself the same way a Kriya Setu lesson does - one node at a time, each building on the last.">
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
    ["∞", "Future Ready", "Thinking, doing, and adapting - not just remembering."],
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
          Kriya Setu exists to bridge the gap between knowledge and real understanding -
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
              institution - your students, your faculty, your outcomes.
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
              Reimagining Classrooms with<em className="not-italic" style={{ color: "var(--brand-orange)" }}> Kriya Setu</em>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Learning feels different when students can see, explore, and interact with concepts in real time. Understanding becomes a natural outcome of the experience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-12 rounded-3xl overflow-hidden border border-border bg-card mx-auto w-fit" style={{ boxShadow: "var(--shadow-elev)" }}>
            <img
              src={howKriyasetuWorks}
              alt="How Kriya Setu works - interactive simulations, NCERT-aligned content, real-world context, video explainers, and an empowered teacher in a real classroom"
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
