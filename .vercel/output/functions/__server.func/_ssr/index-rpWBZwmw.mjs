import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#shift", label: "Shift" },
  { href: "#experience", label: "Experience" },
  { href: "#how", label: "Framework" },
  { href: "#vision", label: "Vision" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-background/75 border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-1 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/logo.png",
                alt: "Kriya Setu",
                className: "h-12 w-12 object-contain",
                style: { mixBlendMode: "multiply" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold tracking-tight", style: { color: "var(--brand-blue)" }, children: "Kriya Setu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#cta",
              className: "hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
              children: [
                "Book a Demo",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              onClick: () => setOpen((v) => !v),
              className: "md:hidden h-9 w-9 grid place-items-center rounded-full border border-border",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-4 h-px bg-foreground relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl py-4 flex flex-col gap-3 text-sm", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "py-1.5", children: l.label }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#cta",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex justify-center px-4 py-2.5 rounded-full bg-primary text-primary-foreground",
              children: "Book a Demo"
            }
          )
        ] }) })
      ]
    }
  );
}
function Mark({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/logo.png",
      alt: "Kriya Setu",
      className: `h-10 w-10 object-contain ${className}`,
      style: { mixBlendMode: "multiply" }
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mark, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: "Kriya Setu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Bridging knowledge and real competence through experiential learning, conceptual clarity, and AI-enabled education." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Explore", items: [["About", "#vision"], ["Experience", "#experience"], ["Institutions", "#why"], ["How it works", "#how"]] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Connect", items: [["Contact", "#cta"], ["LinkedIn", "#"], ["hello@kriyasetu.com", "mailto:hello@kriyasetu.com"]] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Sutra" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base leading-snug", children: "Kriya · Setu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Action. Bridge." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " KRIYASETU LLP"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Designed for institutions building future-ready learners." })
    ] }) })
  ] });
}
function FooterCol({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm", children: items.map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "hover:text-accent transition-colors", children: l }) }, l)) })
  ] });
}
function Yantra({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 600", className, "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "glow", cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--brand-orange)", stopOpacity: ".35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "var(--brand-orange)", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "260", fill: "url(#glow)" }),
    [260, 220, 180, 140, 100, 60].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: "300",
        cy: "300",
        r,
        fill: "none",
        stroke: "var(--brand-blue)",
        strokeOpacity: 0.12 + i * 0.04,
        strokeWidth: "0.75"
      },
      r
    )),
    [0, 1, 2, 3].map((i) => {
      const top = 120 + i * 40;
      const w = 60 + i * 60;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polygon",
        {
          points: `300,${top} ${300 - w},${top + 80} ${300 + w},${top + 80}`,
          fill: "none",
          stroke: "var(--brand-blue)",
          strokeOpacity: 0.6 - i * 0.1,
          strokeWidth: "1"
        },
        i
      );
    }),
    Array.from({ length: 12 }).map((_, i) => {
      const a = i / 12 * Math.PI * 2;
      const x = 300 + Math.cos(a) * 280;
      const y = 300 + Math.sin(a) * 280;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "line",
        {
          x1: "300",
          y1: "300",
          x2: x,
          y2: y,
          stroke: "var(--brand-blue)",
          strokeOpacity: "0.06",
          strokeWidth: "0.5"
        },
        i
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "6", fill: "var(--brand-orange)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "300", cy: "300", r: "14", fill: "none", stroke: "var(--brand-orange)", strokeOpacity: ".4" })
  ] });
}
const ELEMENTS = [
  "·",
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca"
];
const NAMES = [
  "—",
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminium",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium"
];
const FUN_FACT = {
  H: "Lightest element. Powers the sun.",
  He: "Noble gas. Full outer shell — perfectly stable.",
  C: "The backbone of all known life.",
  N: "78% of the air you're breathing right now.",
  O: "Lets you read this. Half of Earth's crust by mass.",
  Na: "One electron away from stability. Reacts violently with water.",
  Cl: "Pair me with sodium → table salt.",
  Fe: "Why your blood is red.",
  Au: "Stable, lustrous, ductile — that's why it's worth a fortune."
};
const SHELLS = [2, 8, 8, 2];
function shellLayout(electrons) {
  const layout = [];
  let remaining = electrons;
  for (let s = 0; s < SHELLS.length && remaining > 0; s++) {
    const cap = SHELLS[s];
    const inShell = Math.min(cap, remaining);
    for (let i = 0; i < inShell; i++) layout.push({ shell: s, index: i, total: inShell });
    remaining -= inShell;
  }
  return layout;
}
function AtomBuilder() {
  const [p, setP] = reactExports.useState(1);
  const [n, setN] = reactExports.useState(0);
  const [e, setE] = reactExports.useState(1);
  const symbol = ELEMENTS[p] ?? "?";
  const name = NAMES[p] ?? "Beyond our table";
  const mass = p + n;
  const charge = p - e;
  const isStable = charge === 0 && Math.abs(n - p) <= 2 && p > 0;
  const isIon = charge !== 0 && p > 0;
  const fact = FUN_FACT[symbol];
  const electrons = reactExports.useMemo(() => shellLayout(e), [e]);
  const adjust = (kind, delta) => {
    if (kind === "proton") setP((v) => Math.max(0, Math.min(20, v + delta)));
    if (kind === "neutron") setN((v) => Math.max(0, Math.min(30, v + delta)));
    if (kind === "electron") setE((v) => Math.max(0, Math.min(20, v + delta)));
  };
  const reset = () => {
    setP(1);
    setN(0);
    setE(1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8 items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "lg:col-span-3 relative rounded-2xl border border-border overflow-hidden min-h-[480px]",
        style: {
          background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-blue) 8%, var(--background)), var(--background))",
          boxShadow: "var(--shadow-elev)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-5 z-10 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Chemistry · Build an Atom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-5 z-10 flex gap-2 text-[11px] tabular-nums", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1", children: [
              "Z = ",
              p
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1", children: [
              "A = ",
              mass
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border px-3 py-1",
                style: {
                  borderColor: charge === 0 ? "color-mix(in oklab, var(--brand-blue) 40%, transparent)" : "var(--brand-orange)",
                  color: charge === 0 ? "var(--brand-blue)" : "var(--brand-orange)",
                  background: "color-mix(in oklab, var(--background) 80%, transparent)"
                },
                children: charge === 0 ? "neutral" : `${charge > 0 ? "+" : ""}${charge}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Atom, { protons: p, neutrons: n, electronLayout: electrons, symbol }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              transition: { duration: 0.4 },
              className: "absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "You built" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl md:text-4xl mt-1 leading-none", children: [
                    name,
                    isIon && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent ml-2 text-xl align-top", children: [
                      charge > 0 ? "⁺" : "⁻",
                      Math.abs(charge) > 1 ? Math.abs(charge) : ""
                    ] })
                  ] }),
                  fact && p > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed", children: fact })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border",
                    style: {
                      borderColor: isStable ? "color-mix(in oklab, var(--brand-blue) 35%, transparent)" : "var(--brand-orange)",
                      color: isStable ? "var(--brand-blue)" : "var(--brand-orange)"
                    },
                    children: p === 0 ? "empty" : isStable ? "stable" : isIon ? "ion" : "isotope"
                  }
                ) })
              ]
            },
            `${symbol}-${charge}`
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Try it · Live" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 font-display text-2xl leading-snug", children: [
          "Don't memorise the periodic table. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-accent", children: "Build it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "Add a proton — a new element appears. Add an electron — the atom calms. One missing? It becomes an ion. This is how chemistry was meant to be felt." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { label: "Protons", sub: "define the element", color: "var(--brand-orange)", value: p, onChange: (d) => adjust("proton", d) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { label: "Neutrons", sub: "control stability", color: "var(--brand-blue)", value: n, onChange: (d) => adjust("neutron", d) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { label: "Electrons", sub: "orbit & form bonds", color: "var(--brand-ink)", value: e, onChange: (d) => adjust("electron", d) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setP(6);
          setN(6);
          setE(6);
        }, className: "text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition", children: "Carbon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setP(8);
          setN(8);
          setE(8);
        }, className: "text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition", children: "Oxygen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setP(11);
          setN(12);
          setE(10);
        }, className: "text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition", children: "Na⁺ ion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "text-xs px-3 py-1.5 rounded-full border border-border hover:border-foreground/40 transition", children: "Reset" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: [
        "Insight · The whole periodic table is just ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "one new proton at a time" }),
        '. Every "rule" you ever learned starts here.'
      ] })
    ] })
  ] });
}
function Atom({
  protons,
  neutrons,
  electronLayout,
  symbol
}) {
  const cx = 50, cy = 50;
  const shellRadii = [16, 26, 34, 41];
  const shellsUsed = Array.from(new Set(electronLayout.map((e) => e.shell)));
  const nucleons = [];
  const totalN = protons + neutrons;
  const cluster = Math.max(1, Math.ceil(Math.sqrt(totalN)));
  const spread = Math.min(6, 1.6 + Math.sqrt(totalN) * 0.7);
  let i = 0;
  for (let pi = 0; pi < protons; pi++, i++) {
    const a = i / Math.max(1, totalN) * Math.PI * 2;
    const r = i % cluster * 0.9;
    nucleons.push({ kind: "p", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }
  for (let ni = 0; ni < neutrons; ni++, i++) {
    const a = i / Math.max(1, totalN) * Math.PI * 2;
    const r = i % cluster * 0.9;
    nucleons.push({ kind: "n", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "absolute inset-0 w-full h-full block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "protonG", cx: "40%", cy: "40%", r: "60%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ff8a5c" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#c43a16" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "neutronG", cx: "40%", cy: "40%", r: "60%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#cbd5e1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#64748b" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "electronG", cx: "40%", cy: "40%", r: "60%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3b82f6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0032A0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "nucleusGlow", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--brand-orange)", stopOpacity: "0.35" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--brand-orange)", stopOpacity: "0" })
      ] })
    ] }),
    protons + neutrons > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.circle,
      {
        cx,
        cy,
        r: spread + 4,
        fill: "url(#nucleusGlow)",
        animate: { r: [spread + 4, spread + 6, spread + 4], opacity: [0.6, 1, 0.6] },
        transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    shellsUsed.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx,
        cy,
        r: shellRadii[s],
        fill: "none",
        stroke: "var(--brand-blue)",
        strokeOpacity: "0.15",
        strokeWidth: "0.4",
        strokeDasharray: "0.8 1.4"
      },
      s
    )),
    nucleons.map((nuc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.circle,
      {
        cx: nuc.x,
        cy: nuc.y,
        r: 1.7,
        fill: nuc.kind === "p" ? "url(#protonG)" : "url(#neutronG)",
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { type: "spring", stiffness: 220, damping: 16, delay: idx * 0.015 }
      },
      idx
    )),
    protons > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: cx,
        y: cy + 1.5,
        textAnchor: "middle",
        fontSize: "3.2",
        fontFamily: "Fraunces, serif",
        fill: "var(--brand-ink)",
        opacity: "0.55",
        style: { pointerEvents: "none" },
        children: symbol
      }
    ),
    electronLayout.map((el, idx) => {
      const r = shellRadii[el.shell];
      const offset = el.index / el.total * 360;
      const dur = 6 + el.shell * 3;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.g,
        {
          style: { transformOrigin: `${cx}px ${cy}px` },
          animate: { rotate: el.shell % 2 === 0 ? 360 : -360 },
          transition: { duration: dur, repeat: Infinity, ease: "linear" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `rotate(${offset} ${cx} ${cy})`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: cx + r, cy, r: 1.4, fill: "url(#electronG)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: cx + r, cy, r: 2.6, fill: "var(--brand-blue)", opacity: "0.12" })
          ] })
        },
        idx
      );
    })
  ] });
}
function Counter({
  label,
  sub,
  color,
  value,
  onChange
}) {
  const holdRef = reactExports.useRef(null);
  const startHold = (delta) => {
    onChange(delta);
    holdRef.current = setInterval(() => onChange(delta), 110);
  };
  const endHold = () => {
    if (holdRef.current) clearInterval(holdRef.current);
    holdRef.current = null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full flex-shrink-0", style: { background: color, opacity: 0.85 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base leading-tight", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: sub })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onMouseDown: () => startHold(-1),
          onMouseUp: endHold,
          onMouseLeave: endHold,
          onTouchStart: () => startHold(-1),
          onTouchEnd: endHold,
          className: "h-8 w-8 rounded-full border border-border hover:border-foreground/40 active:scale-95 transition flex items-center justify-center text-base",
          "aria-label": `Remove ${label}`,
          children: "−"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl tabular-nums w-7 text-center", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onMouseDown: () => startHold(1),
          onMouseUp: endHold,
          onMouseLeave: endHold,
          onTouchStart: () => startHold(1),
          onTouchEnd: endHold,
          className: "h-8 w-8 rounded-full text-primary-foreground hover:opacity-90 active:scale-95 transition flex items-center justify-center text-base",
          style: { background: color },
          "aria-label": `Add ${label}`,
          children: "+"
        }
      )
    ] })
  ] });
}
const FLOATERS = [
  { id: "f1", x: "6%", y: "12%", size: 78, delay: 0, duration: 11, drift: [12, -16], rotate: -8, opacity: 0.85, kind: "atom", tone: "orange" },
  { id: "f2", x: "82%", y: "14%", size: 96, delay: 1.2, duration: 13, drift: [-14, 12], rotate: 10, opacity: 0.75, kind: "formula-energy", tone: "blue" },
  { id: "f3", x: "12%", y: "62%", size: 70, delay: 0.8, duration: 14, drift: [10, 14], rotate: 6, opacity: 0.7, kind: "wave", tone: "blue" },
  { id: "f4", x: "76%", y: "58%", size: 84, delay: 0.4, duration: 12, drift: [-12, 18], rotate: -12, opacity: 0.8, kind: "molecule", tone: "orange" },
  { id: "f5", x: "44%", y: "8%", size: 58, delay: 1.6, duration: 15, drift: [14, 10], rotate: 14, opacity: 0.6, kind: "formula-pi", tone: "ink" },
  { id: "f6", x: "30%", y: "78%", size: 64, delay: 0.6, duration: 10, drift: [-10, -14], rotate: -6, opacity: 0.7, kind: "triangle", tone: "orange" },
  { id: "f7", x: "62%", y: "82%", size: 72, delay: 2, duration: 13, drift: [12, -10], rotate: 8, opacity: 0.75, kind: "dna", tone: "blue" },
  { id: "f8", x: "92%", y: "40%", size: 60, delay: 0.2, duration: 12, drift: [-14, 12], rotate: -10, opacity: 0.65, kind: "integral", tone: "ink" },
  { id: "f9", x: "2%", y: "38%", size: 66, delay: 1.4, duration: 14, drift: [10, -12], rotate: 12, opacity: 0.7, kind: "circle-grid", tone: "blue" },
  { id: "f10", x: "52%", y: "46%", size: 54, delay: 1, duration: 16, drift: [-8, 14], rotate: -4, opacity: 0.55, kind: "fraction", tone: "ink" },
  { id: "f11", x: "22%", y: "30%", size: 50, delay: 1.8, duration: 11, drift: [10, 12], rotate: 8, opacity: 0.6, kind: "compass", tone: "orange" },
  { id: "f12", x: "70%", y: "32%", size: 56, delay: 0.5, duration: 13, drift: [-12, -10], rotate: -10, opacity: 0.65, kind: "formula-pendulum", tone: "blue" }
];
function HeroFloaters() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none overflow-hidden", children: FLOATERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute",
      style: {
        left: f.x,
        top: f.y,
        width: f.size,
        height: f.size,
        opacity: f.opacity
      },
      initial: { y: 0, x: 0, rotate: f.rotate },
      animate: {
        y: [0, f.drift[1], 0],
        x: [0, f.drift[0], 0],
        rotate: [f.rotate, f.rotate + 6, f.rotate]
      },
      transition: {
        duration: f.duration,
        delay: f.delay,
        repeat: Infinity,
        ease: "easeInOut"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Glyph$1, { kind: f.kind, tone: f.tone })
    },
    f.id
  )) });
}
function Glyph$1({ kind, tone }) {
  const stroke = tone === "orange" ? "var(--brand-orange)" : tone === "blue" ? "var(--brand-blue)" : "var(--brand-ink)";
  switch (kind) {
    case "atom":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "50", rx: "42", ry: "16", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "50", rx: "42", ry: "16", fill: "none", stroke, strokeWidth: "1.5", transform: "rotate(60 50 50)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "50", cy: "50", rx: "42", ry: "16", fill: "none", stroke, strokeWidth: "1.5", transform: "rotate(120 50 50)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "5", fill: stroke })
      ] });
    case "formula-energy":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 140 60", className: "w-full h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "60%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "34", fill: stroke, fontStyle: "italic", children: "E = mc²" }) });
    case "formula-pendulum":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 140 60", className: "w-full h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "60%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "22", fill: stroke, fontStyle: "italic", children: "T = 2π√(L/g)" }) });
    case "formula-pi":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "70%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "72", fill: stroke, children: "π" }) });
    case "dna":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 60 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 5 Q 50 25 10 50 Q -30 75 10 95", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 5 Q 10 25 50 50 Q 90 75 50 95", fill: "none", stroke, strokeWidth: "1.5" }),
        [15, 30, 45, 60, 75, 90].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "14", x2: "46", y1: y, y2: y, stroke, strokeWidth: "1", opacity: "0.6" }, i))
      ] });
    case "triangle":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "50,10 90,85 10,85", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "10", x2: "50", y2: "85", stroke, strokeWidth: "1", strokeDasharray: "3 3", opacity: "0.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "56", y: "50", fontSize: "11", fill: stroke, fontFamily: "Fraunces, serif", fontStyle: "italic", children: "h" })
      ] });
    case "circle-grid":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "8", x2: "50", y2: "92", stroke, strokeWidth: "1", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "50", x2: "92", y2: "50", stroke, strokeWidth: "1", opacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "4", fill: stroke })
      ] });
    case "wave":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 50", className: "w-full h-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 25 Q 20 5 35 25 T 65 25 T 95 25 T 125 25", fill: "none", stroke, strokeWidth: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 30 Q 25 15 45 30 T 85 30 T 125 30", fill: "none", stroke, strokeWidth: "1.5", opacity: "0.5" })
      ] });
    case "molecule":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "30", x2: "50", y2: "50", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "30", x2: "50", y2: "50", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "50", x2: "50", y2: "85", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "30", r: "9", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "30", r: "9", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "11", fill: stroke, fillOpacity: "0.15", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "85", r: "9", fill: "none", stroke, strokeWidth: "1.5" })
      ] });
    case "compass":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "40", fill: "none", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "50,15 56,50 50,85 44,50", fill: stroke, fillOpacity: "0.5", stroke, strokeWidth: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "3", fill: stroke })
      ] });
    case "fraction":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "42%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "32", fill: stroke, children: "dy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "52", x2: "80", y2: "52", stroke, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "80%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "32", fill: stroke, children: "dx" })
      ] });
    case "integral":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50%", y: "78%", textAnchor: "middle", fontFamily: "Fraunces, serif", fontSize: "86", fill: stroke, children: "∫" }) });
  }
}
const STEPS$1 = [
  {
    eyebrow: "The reality today",
    stat: "72%",
    statSub: "of students can't apply what they memorised",
    ringPct: 0,
    ringColor: "#94a3b8",
    headline: "Teachers work harder than ever.",
    body: "Every term brings the same quiet frustration — full effort, incomplete understanding. The system was built for coverage, not depth.",
    tag: "The Gap"
  },
  {
    eyebrow: "What Kriya Setu gives teachers",
    stat: "6-step",
    statSub: "structured learning journey per concept",
    ringPct: 0.42,
    ringColor: "#60a5fa",
    headline: "Every concept becomes a journey.",
    body: "Teachers get a complete, structured path — visualised, experiential, and consistent across every section and every term. No more improvising depth.",
    tag: "The System"
  },
  {
    eyebrow: "What students experience",
    stat: "3×",
    statSub: "increase in classroom engagement",
    ringPct: 0.72,
    ringColor: "#fb923c",
    headline: "Students don't just learn. They own it.",
    body: "When a student experiences a concept — feels it, applies it, debates it — they stop forgetting. Understanding replaces memorisation.",
    tag: "The Shift"
  },
  {
    eyebrow: "What institutions see",
    stat: "↗",
    statSub: "board results · NEET/JEE · internal scores",
    ringPct: 1,
    ringColor: "#fb923c",
    headline: "Outcomes follow understanding.",
    body: "Better scores. Better entrance results. Faculty who feel proud of what they've built. A school that's truly future-ready.",
    tag: "The Outcome"
  }
];
const RING_R = 88;
const RING_C = 2 * Math.PI * RING_R;
function TeacherScroll() {
  const containerRef = reactExports.useRef(null);
  const [step, setStep] = reactExports.useState(0);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = Math.max(0, Math.min(1, -top / scrollable));
      const stepF = raw * STEPS$1.length;
      const newStep = Math.min(STEPS$1.length - 1, Math.floor(stepF));
      const newProgress = stepF - Math.floor(stepF);
      setStep(newStep);
      setProgress(newProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const cur = STEPS$1[step];
  const ringOffset = RING_C * (1 - cur.ringPct);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref: containerRef,
      id: "teacher-story",
      "aria-label": "Teacher empowerment journey",
      style: { height: `${STEPS$1.length * 100}vh` },
      className: "relative",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 h-screen overflow-hidden bg-[color:var(--brand-ink)] text-background flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none transition-all duration-700",
            style: {
              background: `radial-gradient(60% 50% at 30% 50%, ${cur.ringColor}26, transparent 60%), radial-gradient(40% 40% at 75% 60%, ${cur.ringColor}1a, transparent 70%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 flex flex-col items-center justify-center px-8 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-1/2 -translate-x-1/2 flex gap-2.5", children: STEPS$1.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-1.5 rounded-full transition-all duration-500",
              style: {
                width: i === step ? "2rem" : "0.375rem",
                background: i === step ? cur.ringColor : "rgba(255,255,255,0.2)"
              }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-56 h-56", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 200 200",
                className: "absolute inset-0 w-full h-full -rotate-90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "100",
                      cy: "100",
                      r: RING_R,
                      fill: "none",
                      stroke: "rgba(255,255,255,0.06)",
                      strokeWidth: "8"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "100",
                      cy: "100",
                      r: RING_R,
                      fill: "none",
                      stroke: cur.ringColor,
                      strokeWidth: "8",
                      strokeLinecap: "round",
                      strokeDasharray: RING_C,
                      strokeDashoffset: ringOffset,
                      style: { transition: "stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1), stroke 0.6s ease" }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display leading-none",
                  style: {
                    fontSize: cur.stat.length > 3 ? "2.5rem" : "3.5rem",
                    color: cur.ringColor,
                    transition: "color 0.6s ease"
                  },
                  children: cur.stat
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 text-[11px] uppercase tracking-widest text-background/75 leading-snug max-w-[14rem]", children: cur.statSub })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mt-8 text-xs uppercase tracking-[0.22em] px-4 py-1.5 rounded-full border transition-all duration-500",
              style: { borderColor: cur.ringColor, color: "#fff", background: `${cur.ringColor}33` },
              children: cur.tag
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-8 right-8 h-px bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full transition-all duration-100",
              style: { width: `${progress * 100}%`, background: cur.ringColor }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center px-8 md:px-14 py-12 md:py-0 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-6 bottom-4 font-display text-[8rem] leading-none select-none pointer-events-none",
              style: { color: "rgba(255,255,255,0.06)", transition: "none" },
              children: String(step + 1).padStart(2, "0")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-step-content max-w-lg relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em]", style: { color: cur.ringColor }, children: cur.eyebrow }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.08] text-white", children: cur.headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-background/85 text-lg leading-relaxed", children: cur.body }),
            step === STEPS$1.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#cta",
                className: "mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:gap-3",
                style: { background: "#F05A28", color: "#fff" },
                children: "Build this in your institution →"
              }
            )
          ] }, step),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 right-10 text-xs text-background/25 tabular-nums", children: [
            String(step + 1).padStart(2, "0"),
            " / ",
            String(STEPS$1.length).padStart(2, "0")
          ] })
        ] }),
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-1/2 md:mr-0 flex flex-col items-center gap-1.5 text-background/25 ts-scroll-hint", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-bounce", children: "↓" })
        ] })
      ] })
    }
  );
}
const STEPS = [
  { k: "Concept", d: "Anchor the idea in clarity, not memory.", glyph: "concept" },
  { k: "Visualisation", d: "Make the invisible visible.", glyph: "visual" },
  { k: "Real-World", d: "Tie every concept to lived reality.", glyph: "world" },
  { k: "Experience", d: "Let students do, build, discover.", glyph: "experience" },
  { k: "Reflection", d: "Convert experience into permanent insight.", glyph: "reflect" },
  { k: "Competence", d: "Application, confidence, transfer.", glyph: "competence" }
];
function FrameworkScroll() {
  const containerRef = reactExports.useRef(null);
  const [railPct, setRailPct] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const tick = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight * 0.6;
      const progress = Math.max(0, Math.min(1, (-top + window.innerHeight * 0.3) / scrollable));
      setRailPct(progress);
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary to-accent",
        style: { height: `${railPct * 100}%` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-20 md:space-y-28", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { index: i, step: s }, s.k)) })
  ] });
}
function Step({
  step,
  index
}) {
  const itemRef = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  const sideLeft = index % 2 === 0;
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "-10% 0px" }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { ref: itemRef, className: "relative pl-12 md:pl-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 h-5 w-5 rounded-full bg-background border-2 border-primary z-10 grid place-items-center transition-transform duration-500",
        style: { transform: `scale(${visible ? 1 : 0.55})` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "block h-2 w-2 rounded-full bg-accent transition-transform duration-500",
            style: { transitionDelay: "300ms", transform: `scale(${visible ? 1 : 0})` }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `md:grid md:grid-cols-2 md:gap-12 items-center transition-all duration-700 ${sideLeft ? "" : "md:[&>*:first-child]:order-2"}`,
        style: {
          opacity: visible ? 1 : 0,
          transform: `translateY(${visible ? 0 : 36}px)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `md:px-10 ${sideLeft ? "md:text-right" : "md:text-left"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs tabular-nums text-muted-foreground uppercase tracking-[0.22em]", children: [
              "Step · 0",
              index + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl md:text-4xl leading-[1.05]", children: step.k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed max-w-md md:inline-block", children: step.d })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 md:mt-0 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Glyph, { kind: step.glyph, visible }) })
        ]
      }
    )
  ] });
}
function Glyph({ kind, visible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "aspect-[5/4] w-full max-w-md rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 grid place-items-center overflow-hidden transition-transform duration-700",
      style: {
        transitionDelay: "150ms",
        transform: `rotate(${visible ? 0 : -8}deg)`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 160", className: "w-full h-full overflow-visible", children: [
        kind === "concept" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "100",
              cy: "80",
              r: "50",
              fill: "none",
              stroke: "var(--brand-blue)",
              strokeWidth: "1",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "100",
              cy: "80",
              r: "30",
              fill: "none",
              stroke: "var(--brand-blue)",
              strokeOpacity: ".5",
              strokeWidth: "1",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.15s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "100",
              cy: "80",
              r: "6",
              fill: "var(--brand-orange)",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.45s" }
            }
          )
        ] }),
        kind === "visual" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: 30 + i * 30,
              y1: "130",
              x2: 30 + i * 30,
              y2: 130 - (20 + i * 18),
              stroke: "var(--brand-blue)",
              strokeWidth: "6",
              strokeLinecap: "round",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: `${i * 0.08}s` }
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "150",
              cy: "40",
              r: "8",
              fill: "var(--brand-orange)",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.4s" }
            }
          )
        ] }),
        kind === "world" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M20 110 Q 70 60 100 90 T 180 70",
              stroke: "var(--brand-blue)",
              strokeWidth: "1.5",
              fill: "none",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "100",
              cy: "90",
              r: "5",
              fill: "var(--brand-orange)",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.5s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "30",
              y: "115",
              width: "140",
              height: "2",
              fill: "var(--brand-blue)",
              opacity: ".3",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.2s" }
            }
          )
        ] }),
        kind === "experience" && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "polygon",
          {
            points: `100,${40 + i * 14} ${60 - i * 8},${110 + i * 4} ${140 + i * 8},${110 + i * 4}`,
            fill: "none",
            stroke: "var(--brand-blue)",
            strokeOpacity: 0.7 - i * 0.2,
            className: "svg-draw",
            style: { animationPlayState: visible ? "running" : "paused", animationDelay: `${i * 0.1}s` }
          },
          i
        )) }),
        kind === "reflect" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M40 80 Q 100 20 160 80 Q 100 140 40 80 Z",
              stroke: "var(--brand-blue)",
              strokeWidth: "1",
              fill: "none",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "40",
              y1: "80",
              x2: "160",
              y2: "80",
              stroke: "var(--brand-orange)",
              strokeDasharray: "3 4",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.3s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "100",
              cy: "80",
              r: "4",
              fill: "var(--brand-orange)",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.6s" }
            }
          )
        ] }),
        kind === "competence" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M30 130 L 80 90 L 120 110 L 180 40",
              stroke: "var(--brand-blue)",
              strokeWidth: "2",
              fill: "none",
              className: "svg-draw",
              style: { animationPlayState: visible ? "running" : "paused" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "180",
              cy: "40",
              r: "7",
              fill: "var(--brand-orange)",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.5s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "180",
              cy: "40",
              r: "14",
              fill: "none",
              stroke: "var(--brand-orange)",
              strokeOpacity: ".4",
              className: "svg-dot",
              style: { animationPlayState: visible ? "running" : "paused", animationDelay: "0.7s" }
            }
          )
        ] })
      ] })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$1.displayName;
const BookDemoCtx = reactExports.createContext(null);
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(80),
  email: stringType().trim().email("Enter a valid email").max(160),
  phone: stringType().trim().min(6, "Enter a valid phone").max(20),
  institution: stringType().trim().min(2, "Institution name required").max(120),
  role: stringType().trim().min(2, "Role required").max(80),
  message: stringType().trim().max(600).optional()
});
function BookDemoProvider({ children }) {
  const [isOpen, setOpen] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const open = reactExports.useCallback(() => setOpen(true), []);
  const close = reactExports.useCallback(() => setOpen(false), []);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      const t = e.target?.closest("a,button");
      if (!t) return;
      const href = t.getAttribute("href");
      const isDemo = t.hasAttribute("data-book-demo") || href === "#cta" || href === "#book-demo";
      if (!isDemo) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Thanks! Our team will reach out within 24 hours.");
    setOpen(false);
    e.target.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookDemoCtx.Provider, { value: { open, close }, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[520px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-2xl", children: "Book a Demo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "See Kriya Setu in action. We'll tailor the walkthrough to your institution." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-3 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "name", label: "Full name", placeholder: "Jane Doe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "email", label: "Work email", type: "email", placeholder: "jane@school.edu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "role", label: "Your role", placeholder: "Principal / Director / Teacher" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { id: "institution", label: "Institution", placeholder: "Name of your school / college" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "What would you like to see? (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", rows: 3, maxLength: 600, placeholder: "Subjects, grades, goals..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity disabled:opacity-60",
            style: { background: "var(--brand-orange)", color: "#fff" },
            children: loading ? "Sending…" : "Request my demo →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center", children: "We respect your privacy. No spam — ever." })
      ] })
    ] }) })
  ] });
}
function Field({
  id,
  label,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id, name: id, type, placeholder, required: true, maxLength: 160 })
  ] });
}
const howKriyasetuWorks = "/assets/how-kriyasetu-works-local-B4qiySK-.png";
const experientialHero = "/assets/experiential_learning_hero-Ba3XVDxt.png";
function Reveal({ children, className = "", delay = 0, direction = "up", duration = 0.7 }) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "left":
        return { opacity: 0, x: 30 };
      case "right":
        return { opacity: 0, x: -30 };
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: getInitial(),
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration, delay, ease: [0.2, 0.7, 0.2, 1] },
      className,
      children
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BookDemoProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Shift, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MidCTA, { heading: "Ready to see the shift in your classrooms?", sub: "Join institutions already moving from memorisation to mastery.", primary: {
      label: "Book a Demo",
      href: "#cta"
    }, secondary: {
      label: "See How It Works",
      href: "#how"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MidCTA, { heading: "Bring this into your institution.", sub: "Every subject. Every grade. The same depth of experience.", primary: {
      label: "Partner With Us",
      href: "#cta"
    }, secondary: {
      label: "Explore the Framework",
      href: "#how"
    }, accent: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(How, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MidCTA, { heading: "Your students deserve to own what they learn.", sub: "Let's build a learning system designed around your institution.", primary: {
      label: "Schedule a Conversation",
      href: "#cta"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyInstitutions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Vision, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "experience", className: "relative py-12 md:py-16 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 -top-1/3 h-[120%] -z-10 opacity-70", style: {
      background: "radial-gradient(60% 50% at 65% 30%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 align-middle bg-accent mr-3" }),
          "Chemistry · Build an Atom · Live"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight", children: [
          "Most sites",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-muted-foreground/60 not-italic line-through", children: "describe" }),
          " ",
          "learning.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We let you ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent not-italic", children: "feel" }),
          " it."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: [
          "Add a proton — a new element appears. Add an electron — the atom calms. This isn't a video. It's the same kind of moment Kriya Setu engineers into every classroom: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground italic", children: '"oh — I get it."' })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AtomBuilder, {}) })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(60% 50% at 70% 30%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%), radial-gradient(50% 60% at 20% 70%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50 animate-[float-slow_14s_ease-in-out_infinite]", style: {
        background: "radial-gradient(circle, color-mix(in oklab, var(--brand-orange) 50%, transparent), transparent 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 animate-[float-slow_18s_ease-in-out_infinite_reverse]", style: {
        background: "radial-gradient(circle, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent 70%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroFloaters, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Yantra, { className: "absolute -right-48 -top-24 w-[900px] opacity-30 float-slow pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl flex-1 grid lg:grid-cols-12 gap-10 xl:gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { "aria-label": "Learning should be experienced not memorised.", className: "mt-6 font-display text-[clamp(2rem,5.5vw,4.05rem)] lg:text-[clamp(3.15rem,3.7vw,4.15rem)] leading-[1.08] max-w-[46rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "Learning should be" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                color: "var(--brand-blue)"
              }, children: "experienced" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", height: "10", viewBox: "0 0 200 10", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 7 Q 60 1 120 6 T 198 4", stroke: "var(--brand-blue)", strokeWidth: "2.5", fill: "none", strokeLinecap: "round", opacity: "0.5" }) })
            ] }),
            " ",
            "not"
          ] }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative block w-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "var(--brand-orange)"
            }, children: "memorised" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", height: "10", viewBox: "0 0 200 10", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6 Q 62 2 120 7 T 198 5", stroke: "var(--brand-orange)", strokeWidth: "2.5", fill: "none", strokeLinecap: "round", opacity: "0.48" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Kriya Setu bridges the gap between memorisation and understanding through curriculum-aligned experiential learning, helping educators teach with clarity and students learn with meaning." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#experience", className: "group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-all hover:gap-3", style: {
            background: "var(--brand-orange)",
            color: "#fff"
          }, children: [
            "Experience it live",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:border-foreground/40 transition-colors", children: "Book a Demo" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.25, className: "lg:col-span-6 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: experientialHero, alt: "Students engaged in experiential learning with a digital visualization system", className: "aspect-[4/3] w-full object-cover object-center", loading: "eager" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute top-8 -left-6 items-center gap-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg animate-[float_6s_ease-in-out_infinite] transform scale-75 lg:scale-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "💡" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display", children: "Concept Clarity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Learning that lasts" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute top-16 -right-8 items-center gap-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg animate-[float_7s_ease-in-out_infinite_reverse]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🤝" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display", children: "Empowering Teachers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Teaching with confidence" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute bottom-16 -left-8 items-center gap-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg animate-[float_8s_ease-in-out_infinite]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-[color:var(--brand-orange)]", children: "⚡" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display", children: "Interactive Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Active participation, deeper understanding" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute bottom-8 -right-4 items-center gap-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg animate-[float_6s_ease-in-out_infinite_reverse]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-[color:var(--brand-blue)]", children: "🌍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display", children: "Real-World Connection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Applying learning in life" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/40 animate-bounce pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest", children: "Scroll" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "↓" })
    ] })
  ] });
}
function Problem() {
  const items = [{
    icon: "📚",
    title: "Memory over meaning",
    desc: "Students remember formulas. They rarely understand them."
  }, {
    icon: "🧱",
    title: "Weak foundations",
    desc: "Concepts stack on shaky ground — and quietly collapse later."
  }, {
    icon: "🎲",
    title: "Inconsistent depth",
    desc: "The same chapter, taught five different ways across sections."
  }, {
    icon: "📉",
    title: "Engagement fades",
    desc: "Curiosity in week one. Compliance by week ten."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "problem", eyebrow: "The reality", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "What teachers deal ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent not-italic", children: "with every day" }),
    "."
  ] }), lead: "Most classrooms are full of effort. The gap isn't intent — it's the system.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4", children: items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1 * (idx % 4), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-3", children: it.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg leading-snug", children: it.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" })
  ] }) }, it.title)) }) });
}
const SHIFT_ITEMS = [{
  icon: "📖",
  category: "Engagement",
  before: "Passive listening",
  after: "Experiential learning",
  stat: "3×"
}, {
  icon: "🧠",
  category: "Retention",
  before: "Rote memorisation",
  after: "Conceptual understanding",
  stat: "60%"
}, {
  icon: "🔗",
  category: "Consistency",
  before: "Isolated teaching",
  after: "Structured systems",
  stat: "≡"
}, {
  icon: "🌍",
  category: "Application",
  before: "Theory only",
  after: "Real-world application",
  stat: "↗"
}, {
  icon: "⚡",
  category: "Energy",
  before: "Lecture-heavy classes",
  after: "Learning experiences",
  stat: "∞"
}];
function Shift() {
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const activeItem = SHIFT_ITEMS[activeIdx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "shift", className: "relative py-12 md:py-16 bg-secondary/40 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yantra, { className: "w-[600px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, className: "lg:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 align-middle bg-accent mr-3" }),
            "The Shift"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-[1.05] text-foreground", children: [
            "From teaching concepts to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic", style: {
              color: "var(--brand-orange)"
            }, children: "building competence." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-lg", children: "Kriya Setu reframes the classroom as a journey. Every concept becomes an experience — visualised, applied, and reflected upon — until it settles as real, owned understanding." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-8 lg:gap-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex flex-col gap-3", children: SHIFT_ITEMS.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1 * idx, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveIdx(idx), className: `w-full flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 rounded-2xl text-left transition-all duration-300 ${idx === activeIdx ? "bg-[color:var(--brand-orange)]/10 border border-[color:var(--brand-orange)]/20 shadow-sm" : "bg-card border border-border hover:border-accent/40 hover:shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl transition-all duration-300 ${idx === activeIdx ? "grayscale-0 opacity-100 scale-110" : "grayscale opacity-50"}`, children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] uppercase tracking-[0.2em] mb-1 transition-colors duration-300 ${idx === activeIdx ? "text-[color:var(--brand-orange)]" : "text-muted-foreground/50"}`, children: item.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-medium md:text-lg transition-colors duration-300 ${idx === activeIdx ? "text-foreground" : "text-muted-foreground"}`, children: idx === activeIdx ? item.after : item.before })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `ml-auto text-[color:var(--brand-orange)] transition-all duration-300 ${idx === activeIdx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`, children: "→" })
        ] }) }, item.category)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, className: "lg:col-span-7 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-8 md:p-14 overflow-hidden min-h-[350px] md:min-h-[400px] flex flex-col justify-center shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-transparent via-[color:var(--brand-orange)]/5 to-transparent pointer-events-none transition-opacity duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 md:mb-8 transform transition-all duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-3", children: "The Reality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl md:text-3xl text-muted-foreground/40 line-through decoration-muted-foreground/20 font-medium", children: activeItem.before })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[color:var(--brand-orange)]/40 text-2xl md:text-3xl mb-6 md:mb-8 ml-2", children: "↓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transform transition-all duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-[color:var(--brand-orange)] mb-3", children: "With Kriya Setu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-5xl font-display leading-[1.1] text-foreground", style: {
                color: "var(--brand-orange)"
              }, children: activeItem.after })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-6 md:right-8 text-7xl md:text-[120px] font-display font-bold leading-none pointer-events-none transition-all duration-700", style: {
            color: "var(--brand-orange)",
            opacity: 0.04
          }, children: activeItem.stat })
        ] }) })
      ] })
    ] })
  ] });
}
function How() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "how", eyebrow: "The framework", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Six steps from ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "concept" }),
    " to competence."
  ] }), lead: "Scroll. The framework reveals itself the same way a Kriya Setu lesson does — one node at a time, each building on the last.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FrameworkScroll, {}) });
}
function WhyInstitutions() {
  const stats = [["+", "Engagement", "Classrooms move from compliance to curiosity."], ["◎", "Conceptual Clarity", "Students understand before they attempt."], ["≡", "Consistency", "Same quality of teaching, every section, every term."], ["↗", "Outcomes", "Better internal scores, better board / entrance results."], ["⚘", "Faculty Enablement", "Teachers grow as designers of learning."], ["∞", "Future Ready", "Thinking, doing, and adapting — not just remembering."]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "py-12 md:py-16 bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 align-middle bg-primary mr-3" }),
        "Why institutions choose Kriya Setu"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-[1.05]", children: [
        "Built for the long arc of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "educational impact." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-border bg-border rounded-2xl overflow-hidden", children: stats.map(([g, t, d], idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1 * idx, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-accent font-display", children: g }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d })
    ] }) }, t)) })
  ] }) });
}
function Vision() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "vision", className: "py-32 md:py-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -left-40 top-1/2 -translate-y-1/2 opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yantra, { className: "w-[700px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-4xl text-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Our Vision" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 font-display text-3xl md:text-5xl leading-[1.15] tracking-tight", children: [
        "Education should not stop at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic", children: "syllabus completion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "It should create ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "competence," }),
        " confidence, and curiosity."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed", children: "Kriya Setu exists to bridge the gap between knowledge and real understanding — where Indian wisdom of practice meets the precision of modern systems." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex items-center gap-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border" }),
        "Kriya · action  ·  Setu · bridge",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-border" })
      ] })
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-[color:var(--brand-ink)] text-background p-10 md:p-16 grid md:grid-cols-12 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-32 -top-32 w-[520px] opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Yantra, { className: "w-full" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-background/60", children: "Begin the bridge" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-[1.05]", children: [
        "Build future-ready ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-accent", children: "learning experiences." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-background/70 max-w-lg leading-relaxed", children: "Let’s shape a teaching and learning system designed around your institution — your students, your faculty, your outcomes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 relative flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@kriyasetu.com", className: "inline-flex items-center justify-between gap-3 rounded-full bg-accent text-accent-foreground px-6 py-4 text-sm font-medium hover:opacity-90 transition-opacity", children: [
        "Schedule a Conversation ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@kriyasetu.com", className: "inline-flex items-center justify-between gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-medium hover:border-white/40 transition-colors", children: [
        "Bring Kriya Setu to Your Institution ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-background/50 mt-2", children: "Typically respond within 24 hours · India & GCC" })
    ] })
  ] }) }) });
}
function MidCTA({
  heading,
  sub,
  primary,
  secondary,
  accent: isAccent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${isAccent ? "bg-secondary/60" : ""} py-14 md:py-16`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center gap-8 justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl leading-snug", children: heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-base leading-relaxed", children: sub })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: primary.href, className: "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:gap-3", style: {
        background: "var(--brand-orange)",
        color: "#fff"
      }, children: [
        primary.label,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "→" })
      ] }),
      secondary && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: secondary.href, className: "inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium hover:border-foreground/40 transition-colors", children: secondary.label })
    ] })
  ] }) }) });
}
function Section({
  id,
  eyebrow,
  title,
  lead,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-8 align-middle bg-accent mr-3" }),
        eyebrow
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight", children: title }),
      lead && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: lead })
    ] }) }),
    children
  ] }) });
}
function Solution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "solution", className: "relative py-12 md:py-16 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-accent flex-shrink-0" }),
        "How we solve it"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight", children: [
        "One classroom. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic", style: {
          color: "var(--brand-orange)"
        }, children: "Every student in flow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "Kriya Setu equips the teacher with a curriculum-aligned experiential canvas — concepts come alive on the board, every student follows along on their device, and learning shifts from listening to doing." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-12 rounded-3xl overflow-hidden border border-border bg-card", style: {
      boxShadow: "var(--shadow-elev)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: howKriyasetuWorks, alt: "How Kriya Setu works — interactive simulations, NCERT-aligned content, real-world context, video explainers, and an empowered teacher in a real classroom", className: "w-full h-auto block", loading: "lazy" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: [{
      k: "For teachers",
      v: "Plan less. Inspire more."
    }, {
      k: "For students",
      v: "Feel it. Then remember it."
    }, {
      k: "For institutions",
      v: "Outcomes you can measure."
    }].map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1 * idx, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/60 backdrop-blur-sm px-5 py-5 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: c.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-base font-medium", children: c.v })
    ] }) }, c.k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#cta", className: "inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium hover:gap-3 transition-all", style: {
        background: "var(--brand-orange)",
        color: "#fff"
      }, children: [
        "Bring Kriya Setu to your classroom ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:border-foreground/40 transition-colors", children: "See how it works" })
    ] })
  ] }) });
}
export {
  Index as component
};
