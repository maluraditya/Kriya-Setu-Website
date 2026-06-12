import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Build-an-Atom - playful chemistry/physics simulation.
 * Click + / − to add or remove protons, neutrons, electrons.
 * The nucleus pulses, electrons orbit on real shells,
 * and the periodic-table identity emerges live.
 */

type Particle = "proton" | "neutron" | "electron";

interface ElementInfo {
  symbol: string;
  name: string;
  neutrons: number;
  shells: number[];
}

const ELEMENT_DATA: Record<number, ElementInfo> = {
  1: { symbol: "H", name: "Hydrogen", neutrons: 0, shells: [1] },
  2: { symbol: "He", name: "Helium", neutrons: 2, shells: [2] },
  3: { symbol: "Li", name: "Lithium", neutrons: 4, shells: [2, 1] },
  4: { symbol: "Be", name: "Beryllium", neutrons: 5, shells: [2, 2] },
  5: { symbol: "B", name: "Boron", neutrons: 6, shells: [2, 3] },
  6: { symbol: "C", name: "Carbon", neutrons: 6, shells: [2, 4] },
  7: { symbol: "N", name: "Nitrogen", neutrons: 7, shells: [2, 5] },
  8: { symbol: "O", name: "Oxygen", neutrons: 8, shells: [2, 6] },
  9: { symbol: "F", name: "Fluorine", neutrons: 10, shells: [2, 7] },
  10: { symbol: "Ne", name: "Neon", neutrons: 10, shells: [2, 8] },
  11: { symbol: "Na", name: "Sodium", neutrons: 12, shells: [2, 8, 1] },
  12: { symbol: "Mg", name: "Magnesium", neutrons: 12, shells: [2, 8, 2] },
  13: { symbol: "Al", name: "Aluminium", neutrons: 14, shells: [2, 8, 3] },
  14: { symbol: "Si", name: "Silicon", neutrons: 14, shells: [2, 8, 4] },
  15: { symbol: "P", name: "Phosphorus", neutrons: 16, shells: [2, 8, 5] },
  16: { symbol: "S", name: "Sulfur", neutrons: 16, shells: [2, 8, 6] },
  17: { symbol: "Cl", name: "Chlorine", neutrons: 18, shells: [2, 8, 7] },
  18: { symbol: "Ar", name: "Argon", neutrons: 22, shells: [2, 8, 8] },
  19: { symbol: "K", name: "Potassium", neutrons: 20, shells: [2, 8, 8, 1] },
  20: { symbol: "Ca", name: "Calcium", neutrons: 20, shells: [2, 8, 8, 2] },
  21: { symbol: "Sc", name: "Scandium", neutrons: 24, shells: [2, 8, 9, 2] },
  22: { symbol: "Ti", name: "Titanium", neutrons: 26, shells: [2, 8, 10, 2] },
  23: { symbol: "V", name: "Vanadium", neutrons: 28, shells: [2, 8, 11, 2] },
  24: { symbol: "Cr", name: "Chromium", neutrons: 28, shells: [2, 8, 13, 1] },
  25: { symbol: "Mn", name: "Manganese", neutrons: 30, shells: [2, 8, 13, 2] },
  26: { symbol: "Fe", name: "Iron", neutrons: 30, shells: [2, 8, 14, 2] },
  27: { symbol: "Co", name: "Cobalt", neutrons: 32, shells: [2, 8, 15, 2] },
  28: { symbol: "Ni", name: "Nickel", neutrons: 31, shells: [2, 8, 16, 2] },
  29: { symbol: "Cu", name: "Copper", neutrons: 34, shells: [2, 8, 18, 1] },
  30: { symbol: "Zn", name: "Zinc", neutrons: 35, shells: [2, 8, 18, 2] },
  31: { symbol: "Ga", name: "Gallium", neutrons: 39, shells: [2, 8, 18, 3] },
  32: { symbol: "Ge", name: "Germanium", neutrons: 41, shells: [2, 8, 18, 4] },
  33: { symbol: "As", name: "Arsenic", neutrons: 42, shells: [2, 8, 18, 5] },
  34: { symbol: "Se", name: "Selenium", neutrons: 45, shells: [2, 8, 18, 6] },
  35: { symbol: "Br", name: "Bromine", neutrons: 45, shells: [2, 8, 18, 7] },
  36: { symbol: "Kr", name: "Krypton", neutrons: 48, shells: [2, 8, 18, 8] },
  37: { symbol: "Rb", name: "Rubidium", neutrons: 48, shells: [2, 8, 18, 8, 1] },
  38: { symbol: "Sr", name: "Strontium", neutrons: 50, shells: [2, 8, 18, 8, 2] },
  39: { symbol: "Y", name: "Yttrium", neutrons: 50, shells: [2, 8, 18, 9, 2] },
  40: { symbol: "Zr", name: "Zirconium", neutrons: 51, shells: [2, 8, 18, 10, 2] },
  41: { symbol: "Nb", name: "Niobium", neutrons: 52, shells: [2, 8, 18, 12, 1] },
  42: { symbol: "Mo", name: "Molybdenum", neutrons: 54, shells: [2, 8, 18, 13, 1] },
  43: { symbol: "Tc", name: "Technetium", neutrons: 55, shells: [2, 8, 18, 13, 2] },
  44: { symbol: "Ru", name: "Ruthenium", neutrons: 57, shells: [2, 8, 18, 15, 1] },
  45: { symbol: "Rh", name: "Rhodium", neutrons: 58, shells: [2, 8, 18, 16, 1] },
  46: { symbol: "Pd", name: "Palladium", neutrons: 60, shells: [2, 8, 18, 18] },
  47: { symbol: "Ag", name: "Silver", neutrons: 60, shells: [2, 8, 18, 18, 1] },
  48: { symbol: "Cd", name: "Cadmium", neutrons: 66, shells: [2, 8, 18, 18, 2] },
  49: { symbol: "In", name: "Indium", neutrons: 66, shells: [2, 8, 18, 18, 3] },
  50: { symbol: "Sn", name: "Tin", neutrons: 69, shells: [2, 8, 18, 18, 4] },
  51: { symbol: "Sb", name: "Antimony", neutrons: 71, shells: [2, 8, 18, 18, 5] },
  52: { symbol: "Te", name: "Tellurium", neutrons: 76, shells: [2, 8, 18, 18, 6] },
  53: { symbol: "I", name: "Iodine", neutrons: 74, shells: [2, 8, 18, 18, 7] },
  54: { symbol: "Xe", name: "Xenon", neutrons: 77, shells: [2, 8, 18, 18, 8] },
  55: { symbol: "Cs", name: "Cesium", neutrons: 78, shells: [2, 8, 18, 18, 8, 1] },
  56: { symbol: "Ba", name: "Barium", neutrons: 81, shells: [2, 8, 18, 18, 8, 2] },
  57: { symbol: "La", name: "Lanthanum", neutrons: 82, shells: [2, 8, 18, 18, 9, 2] },
  58: { symbol: "Ce", name: "Cerium", neutrons: 82, shells: [2, 8, 18, 19, 8, 2] },
  59: { symbol: "Pr", name: "Praseodymium", neutrons: 82, shells: [2, 8, 18, 21, 8, 2] },
  60: { symbol: "Nd", name: "Neodymium", neutrons: 84, shells: [2, 8, 18, 22, 8, 2] },
  61: { symbol: "Pm", name: "Promethium", neutrons: 84, shells: [2, 8, 18, 23, 8, 2] },
  62: { symbol: "Sm", name: "Samarium", neutrons: 88, shells: [2, 8, 18, 24, 8, 2] },
  63: { symbol: "Eu", name: "Europium", neutrons: 89, shells: [2, 8, 18, 25, 8, 2] },
  64: { symbol: "Gd", name: "Gadolinium", neutrons: 93, shells: [2, 8, 18, 25, 9, 2] },
  65: { symbol: "Tb", name: "Terbium", neutrons: 94, shells: [2, 8, 18, 27, 8, 2] },
  66: { symbol: "Dy", name: "Dysprosium", neutrons: 96, shells: [2, 8, 18, 28, 8, 2] },
  67: { symbol: "Ho", name: "Holmium", neutrons: 98, shells: [2, 8, 18, 29, 8, 2] },
  68: { symbol: "Er", name: "Erbium", neutrons: 99, shells: [2, 8, 18, 30, 8, 2] },
  69: { symbol: "Tm", name: "Thulium", neutrons: 100, shells: [2, 8, 18, 31, 8, 2] },
  70: { symbol: "Yb", name: "Ytterbium", neutrons: 103, shells: [2, 8, 18, 32, 8, 2] },
  71: { symbol: "Lu", name: "Lutetium", neutrons: 104, shells: [2, 8, 18, 32, 9, 2] },
  72: { symbol: "Hf", name: "Hafnium", neutrons: 106, shells: [2, 8, 18, 32, 10, 2] },
  73: { symbol: "Ta", name: "Tantalum", neutrons: 108, shells: [2, 8, 18, 32, 11, 2] },
  74: { symbol: "W", name: "Tungsten", neutrons: 110, shells: [2, 8, 18, 32, 12, 2] },
  75: { symbol: "Re", name: "Rhenium", neutrons: 111, shells: [2, 8, 18, 32, 13, 2] },
  76: { symbol: "Os", name: "Osmium", neutrons: 114, shells: [2, 8, 18, 32, 14, 2] },
  77: { symbol: "Ir", name: "Iridium", neutrons: 115, shells: [2, 8, 18, 32, 15, 2] },
  78: { symbol: "Pt", name: "Platinum", neutrons: 117, shells: [2, 8, 18, 32, 17, 1] },
  79: { symbol: "Au", name: "Gold", neutrons: 118, shells: [2, 8, 18, 32, 18, 1] },
  80: { symbol: "Hg", name: "Mercury", neutrons: 121, shells: [2, 8, 18, 32, 18, 2] },
  81: { symbol: "Tl", name: "Thallium", neutrons: 123, shells: [2, 8, 18, 32, 18, 3] },
  82: { symbol: "Pb", name: "Lead", neutrons: 125, shells: [2, 8, 18, 32, 18, 4] },
  83: { symbol: "Bi", name: "Bismuth", neutrons: 126, shells: [2, 8, 18, 32, 18, 5] },
  84: { symbol: "Po", name: "Polonium", neutrons: 125, shells: [2, 8, 18, 32, 18, 6] },
  85: { symbol: "At", name: "Astatine", neutrons: 125, shells: [2, 8, 18, 32, 18, 7] },
  86: { symbol: "Rn", name: "Radon", neutrons: 136, shells: [2, 8, 18, 32, 18, 8] },
  87: { symbol: "Fr", name: "Francium", neutrons: 136, shells: [2, 8, 18, 32, 18, 8, 1] },
  88: { symbol: "Ra", name: "Radium", neutrons: 138, shells: [2, 8, 18, 32, 18, 8, 2] },
  89: { symbol: "Ac", name: "Actinium", neutrons: 138, shells: [2, 8, 18, 32, 18, 9, 2] },
  90: { symbol: "Th", name: "Thorium", neutrons: 142, shells: [2, 8, 18, 32, 18, 10, 2] },
  91: { symbol: "Pa", name: "Protactinium", neutrons: 140, shells: [2, 8, 18, 32, 20, 9, 2] },
  92: { symbol: "U", name: "Uranium", neutrons: 146, shells: [2, 8, 18, 32, 21, 9, 2] },
  93: { symbol: "Np", name: "Neptunium", neutrons: 144, shells: [2, 8, 18, 32, 22, 9, 2] },
  94: { symbol: "Pu", name: "Plutonium", neutrons: 150, shells: [2, 8, 18, 32, 24, 8, 2] },
  95: { symbol: "Am", name: "Americium", neutrons: 148, shells: [2, 8, 18, 32, 25, 8, 2] },
  96: { symbol: "Cm", name: "Curium", neutrons: 151, shells: [2, 8, 18, 32, 25, 9, 2] },
  97: { symbol: "Bk", name: "Berkelium", neutrons: 150, shells: [2, 8, 18, 32, 27, 8, 2] },
  98: { symbol: "Cf", name: "Californium", neutrons: 153, shells: [2, 8, 18, 32, 28, 8, 2] },
  99: { symbol: "Es", name: "Einsteinium", neutrons: 153, shells: [2, 8, 18, 32, 29, 8, 2] },
  100: { symbol: "Fm", name: "Fermium", neutrons: 157, shells: [2, 8, 18, 32, 30, 8, 2] },
  101: { symbol: "Md", name: "Mendelevium", neutrons: 157, shells: [2, 8, 18, 32, 31, 8, 2] },
  102: { symbol: "No", name: "Nobelium", neutrons: 157, shells: [2, 8, 18, 32, 32, 8, 2] },
  103: { symbol: "Lr", name: "Lawrencium", neutrons: 159, shells: [2, 8, 18, 32, 32, 8, 3] },
  104: { symbol: "Rf", name: "Rutherfordium", neutrons: 157, shells: [2, 8, 18, 32, 32, 10, 2] },
  105: { symbol: "Db", name: "Dubnium", neutrons: 163, shells: [2, 8, 18, 32, 32, 11, 2] },
  106: { symbol: "Sg", name: "Seaborgium", neutrons: 165, shells: [2, 8, 18, 32, 32, 12, 2] },
  107: { symbol: "Bh", name: "Bohrium", neutrons: 163, shells: [2, 8, 18, 32, 32, 13, 2] },
  108: { symbol: "Hs", name: "Hassium", neutrons: 169, shells: [2, 8, 18, 32, 32, 14, 2] },
  109: { symbol: "Mt", name: "Meitnerium", neutrons: 169, shells: [2, 8, 18, 32, 32, 15, 2] },
  110: { symbol: "Ds", name: "Darmstadtium", neutrons: 171, shells: [2, 8, 18, 32, 32, 16, 2] },
  111: { symbol: "Rg", name: "Roentgenium", neutrons: 171, shells: [2, 8, 18, 32, 32, 17, 2] },
  112: { symbol: "Cn", name: "Copernicium", neutrons: 173, shells: [2, 8, 18, 32, 32, 18, 2] },
  113: { symbol: "Nh", name: "Nihonium", neutrons: 173, shells: [2, 8, 18, 32, 32, 18, 3] },
  114: { symbol: "Fl", name: "Flerovium", neutrons: 175, shells: [2, 8, 18, 32, 32, 18, 4] },
  115: { symbol: "Mc", name: "Moscovium", neutrons: 175, shells: [2, 8, 18, 32, 32, 18, 5] },
  116: { symbol: "Lv", name: "Livermorium", neutrons: 177, shells: [2, 8, 18, 32, 32, 18, 6] },
  117: { symbol: "Ts", name: "Tennessine", neutrons: 177, shells: [2, 8, 18, 32, 32, 18, 7] },
  118: { symbol: "Og", name: "Oganesson", neutrons: 176, shells: [2, 8, 18, 32, 32, 18, 8] }
};

const FUN_FACT: Record<string, string> = {
  H: "Lightest element. Powers the sun.",
  He: "Noble gas. Full outer shell - perfectly stable.",
  C: "The backbone of all known life.",
  N: "78% of the air you're breathing right now.",
  O: "Lets you read this. Half of Earth's crust by mass.",
  Na: "One electron away from stability. Reacts violently with water.",
  Cl: "Pair me with sodium → table salt.",
  Fe: "Why your blood is red.",
  Au: "Stable, lustrous, ductile - that's why it's worth a fortune.",
  Ne: "Glows reddish-orange in high-voltage discharge signs.",
  Al: "Lightweight, non-magnetic, and recyclable metal.",
  Si: "The heart of modern electronics and Silicon Valley.",
  P: "Discovered in urine; glows in the dark when exposed to oxygen.",
  S: "Smells like rotten eggs when combined with hydrogen.",
  Ti: "Strong as steel but 45% lighter. Used in aerospace.",
  Cu: "Excellent heat and electrical conductor. Green statue of liberty.",
  Ag: "Best reflector of visible light. Tarnish is silver sulfide.",
  W: "Highest melting point of all metals (3,422°C).",
  Pt: "Extremely unreactive. Used in catalytic converters and jewelry.",
  Hg: "The only metal that is liquid at standard room temperature.",
  Pb: "Heavy, toxic metal. Used historically in pipes and paint.",
  U: "Highly dense and radioactive. The key fuel for nuclear reactors.",
  Pu: "First synthetic element produced in bulk. Used in spacecraft power."
};

// Category mapping helper
function getElementCategory(z: number): string {
  if (z === 1 || z === 6 || z === 7 || z === 8 || z === 15 || z === 16 || z === 34) return "reactive-nonmetal";
  if (z === 2 || z === 10 || z === 18 || z === 36 || z === 54 || z === 86 || z === 118) return "noble-gas";
  if (z === 3 || z === 11 || z === 19 || z === 37 || z === 55 || z === 87) return "alkali-metal";
  if (z === 4 || z === 12 || z === 20 || z === 38 || z === 56 || z === 88) return "alkaline-earth-metal";
  if (z === 5 || z === 14 || z === 32 || z === 33 || z === 51 || z === 52) return "metalloid";
  if (z === 9 || z === 17 || z === 35 || z === 53 || z === 85 || z === 117) return "halogen";
  if (z >= 57 && z <= 71) return "lanthanide";
  if (z >= 89 && z <= 103) return "actinide";
  if ((z >= 21 && z <= 30) || (z >= 39 && z <= 48) || (z >= 72 && z <= 80) || (z >= 104 && z <= 112)) return "transition-metal";
  return "post-transition-metal";
}

// Visual color matching for theme agnostic rendering
function getCategoryColors(cat: string, isSelected: boolean) {
  switch (cat) {
    case "reactive-nonmetal":
      return { bg: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.25)", text: "rgb(16, 185, 129)" };
    case "noble-gas":
      return { bg: "rgba(139, 92, 246, 0.08)", border: "rgba(139, 92, 246, 0.25)", text: "rgb(139, 92, 246)" };
    case "alkali-metal":
      return { bg: "rgba(244, 63, 94, 0.08)", border: "rgba(244, 63, 94, 0.25)", text: "rgb(244, 63, 94)" };
    case "alkaline-earth-metal":
      return { bg: "rgba(245, 158, 11, 0.08)", border: "rgba(245, 158, 11, 0.25)", text: "rgb(245, 158, 11)" };
    case "metalloid":
      return { bg: "rgba(6, 182, 212, 0.08)", border: "rgba(6, 182, 212, 0.25)", text: "rgb(6, 182, 212)" };
    case "halogen":
      return { bg: "rgba(132, 204, 22, 0.08)", border: "rgba(132, 204, 22, 0.25)", text: "rgb(132, 204, 22)" };
    case "lanthanide":
      return { bg: "rgba(236, 72, 153, 0.08)", border: "rgba(236, 72, 153, 0.25)", text: "rgb(236, 72, 153)" };
    case "actinide":
      return { bg: "rgba(99, 102, 241, 0.08)", border: "rgba(99, 102, 241, 0.25)", text: "rgb(99, 102, 241)" };
    case "transition-metal":
      return { bg: "rgba(59, 130, 246, 0.08)", border: "rgba(59, 130, 246, 0.25)", text: "rgb(59, 130, 246)" };
    default:
      return { bg: "rgba(100, 116, 139, 0.08)", border: "rgba(100, 116, 139, 0.25)", text: "rgb(148, 163, 184)" };
  }
}

// Standard periodic table placement positions
function getElementPosition(z: number): { row: number; col: number } {
  if (z === 1) return { row: 1, col: 1 };
  if (z === 2) return { row: 1, col: 18 };
  if (z >= 3 && z <= 4) return { row: 2, col: z - 2 };
  if (z >= 5 && z <= 10) return { row: 2, col: z + 8 };
  if (z >= 11 && z <= 12) return { row: 3, col: z - 10 };
  if (z >= 13 && z <= 18) return { row: 3, col: z };
  if (z >= 19 && z <= 36) return { row: 4, col: z - 18 };
  if (z >= 37 && z <= 54) return { row: 5, col: z - 36 };
  if (z >= 55 && z <= 56) return { row: 6, col: z - 54 };
  if (z >= 57 && z <= 71) return { row: 9, col: z - 57 + 4 }; // Lanthanides
  if (z >= 72 && z <= 86) return { row: 6, col: z - 68 };
  if (z >= 87 && z <= 88) return { row: 7, col: z - 86 };
  if (z >= 89 && z <= 103) return { row: 10, col: z - 89 + 4 }; // Actinides
  if (z >= 104 && z <= 118) return { row: 7, col: z - 100 };
  return { row: 1, col: 1 };
}

// Upgraded valence electron configurations for cation and anion calculations
function getElectronLayout(protons: number, totalElectrons: number) {
  if (totalElectrons <= 0) return [];

  const element = ELEMENT_DATA[protons] || { shells: [] };
  const groundState = [...element.shells];

  let layout = groundState;

  if (protons === 0) {
    layout = [];
  }

  const targetCount = totalElectrons;
  const currentSum = layout.reduce((a, b) => a + b, 0);

  if (currentSum === targetCount) {
    // exact match
  } else if (currentSum < targetCount) {
    let extra = targetCount - currentSum;
    const caps = [2, 8, 18, 32, 32, 18, 8];

    for (let s = 0; s < layout.length && extra > 0; s++) {
      const cap = caps[s];
      const space = cap - layout[s];
      if (space > 0) {
        const add = Math.min(space, extra);
        layout[s] += add;
        extra -= add;
      }
    }
    let s = layout.length;
    while (extra > 0 && s < caps.length) {
      const cap = caps[s];
      const add = Math.min(cap, extra);
      layout.push(add);
      extra -= add;
      s++;
    }
  } else {
    let remove = currentSum - targetCount;
    for (let s = layout.length - 1; s >= 0 && remove > 0; s--) {
      const val = layout[s];
      const sub = Math.min(val, remove);
      layout[s] -= sub;
      remove -= sub;
    }
    while (layout.length > 0 && layout[layout.length - 1] === 0) {
      layout.pop();
    }
  }

  const flatLayout: { shell: number; index: number; total: number }[] = [];
  layout.forEach((count, s) => {
    for (let i = 0; i < count; i++) {
      flatLayout.push({ shell: s, index: i, total: count });
    }
  });
  return flatLayout;
}

export function AtomBuilder() {
  const [p, setP] = useState(1); // protons
  const [n, setN] = useState(0); // neutrons
  const [e, setE] = useState(1); // electrons
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ z: number; name: string; symbol: string }[]>([]);

  const element = ELEMENT_DATA[p] || { symbol: "?", name: "Unknown Element", neutrons: p, shells: [] };
  const symbol = element.symbol;
  const name = element.name;
  const mass = p + n;
  const charge = p - e;

  // Stability based on distance from stable isotope configuration
  const stdNeutrons = element.neutrons;
  const isStable = charge === 0 && Math.abs(n - stdNeutrons) <= (p > 20 ? 8 : 2) && p > 0;
  const isIon = charge !== 0 && p > 0;
  
  const fact = FUN_FACT[symbol] || `A ${getElementCategory(p).replace("-", " ")} element. Atomic number ${p}.`;

  const electrons = useMemo(() => getElectronLayout(p, e), [p, e]);

  const adjust = (kind: Particle, delta: number) => {
    if (kind === "proton") setP((v) => Math.max(0, Math.min(118, v + delta)));
    if (kind === "neutron") setN((v) => Math.max(0, Math.min(180, v + delta)));
    if (kind === "electron") setE((v) => Math.max(0, Math.min(118, v + delta)));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const q = query.toLowerCase();
    const matches: { z: number; name: string; symbol: string }[] = [];
    for (let z = 1; z <= 118; z++) {
      const el = ELEMENT_DATA[z];
      if (el.name.toLowerCase().includes(q) || el.symbol.toLowerCase().includes(q) || z.toString() === q) {
        matches.push({ z, name: el.name, symbol: el.symbol });
      }
    }
    setSuggestions(matches.slice(0, 5));
  };

  const selectElement = (z: number) => {
    const el = ELEMENT_DATA[z];
    setP(z);
    setN(el.neutrons);
    setE(z);
    setSearchQuery("");
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  const reset = () => {
    setP(1);
    setN(0);
    setE(1);
    clearSearch();
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
        {/* ── Atom canvas ─────────────────────────── */}
        <div
          className="lg:col-span-3 relative rounded-2xl border border-border overflow-hidden min-h-[320px] md:min-h-[400px] lg:min-h-[480px] sticky top-20 z-20 bg-background shadow-elevated"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-blue) 8%, var(--background)), var(--background))",
            boxShadow: "var(--shadow-elev)",
          }}
        >
          {/* corner labels */}
          <div className="absolute top-4 left-5 z-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Chemistry · Build an Atom
          </div>
          <div className="absolute top-4 right-5 z-10 flex gap-2 text-[11px] tabular-nums">
            <span className="rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1">Z = {p}</span>
            <span className="rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1">A = {mass}</span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: charge === 0 ? "color-mix(in oklab, var(--brand-blue) 40%, transparent)" : "var(--brand-orange)",
                color: charge === 0 ? "var(--brand-blue)" : "var(--brand-orange)",
                background: "color-mix(in oklab, var(--background) 80%, transparent)",
              }}
            >
              {charge === 0 ? "neutral" : `${charge > 0 ? "+" : ""}${charge}`}
            </span>
          </div>

          <Atom protons={p} neutrons={n} electronLayout={electrons} symbol={symbol} />

          {/* live identity card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${symbol}-${charge}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">You built</div>
                <div className="font-display text-3xl md:text-4xl mt-1 leading-none truncate">
                  {name}
                  {isIon && (
                    <span className="text-accent ml-2 text-xl align-top">
                      {charge > 0 ? "⁺" : "⁻"}
                      {Math.abs(charge) > 1 ? Math.abs(charge) : ""}
                    </span>
                  )}
                </div>
                {fact && p > 0 && (
                  <p className="text-xs text-muted-foreground mt-2 max-w-sm leading-relaxed">{fact}</p>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <span
                  className="inline-block text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{
                    borderColor: isStable ? "color-mix(in oklab, var(--brand-blue) 35%, transparent)" : "var(--brand-orange)",
                    color: isStable ? "var(--brand-blue)" : "var(--brand-orange)",
                  }}
                >
                  {p === 0 ? "empty" : isStable ? "stable" : isIon ? "ion" : "isotope"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ────────────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-5 z-10 relative">
          {/* Quick Search */}
          <div className="relative">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Quick Element Search
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type name or symbol (e.g. Gold, Au)..."
                className="flex-1 rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground focus:outline-none focus:border-accent transition"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="px-3 text-xs border border-border rounded-xl hover:bg-muted transition text-muted-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-1 max-h-48 overflow-y-auto rounded-xl border border-border bg-card shadow-lg z-50 divide-y divide-border">
                {suggestions.map((el) => (
                  <button
                    key={el.z}
                    onClick={() => selectElement(el.z)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex justify-between items-center transition"
                  >
                    <span className="font-display">
                      <span className="text-accent font-bold w-6 inline-block text-right mr-2">{el.z}</span>
                      {el.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-background font-mono font-bold text-muted-foreground">
                      {el.symbol}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Counter label="Protons"   sub="define the element"    color="var(--brand-orange)" value={p} onChange={(d) => adjust("proton", d)} />
          <Counter label="Neutrons"  sub="control stability"     color="var(--brand-blue)"   value={n} onChange={(d) => adjust("neutron", d)} />
          <Counter label="Electrons" sub="orbit & form bonds"    color="var(--brand-ink)"    value={e} onChange={(d) => adjust("electron", d)} />

          <div className="flex gap-2 mt-1 flex-wrap">
            <button onClick={() => { setP(6); setN(6); setE(6); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
              Carbon
            </button>
            <button onClick={() => { setP(8); setN(8); setE(8); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
              Oxygen
            </button>
            <button onClick={() => { setP(79); setN(118); setE(78); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
              Au⁺ (Gold Ion)
            </button>
            <button onClick={() => { setP(92); setN(146); setE(92); }} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition">
              Uranium
            </button>
            <button onClick={reset} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-foreground/40 transition">
              Reset
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Insight · The whole periodic table is just <span className="text-foreground">one new proton at a time</span>. Every "rule" you ever learned starts here.
          </p>
        </div>
    </div>
  );
}

/* ─── Atom visual ─────────────────────────────────── */
function Atom({
  protons, neutrons, electronLayout, symbol,
}: {
  protons: number; neutrons: number;
  electronLayout: { shell: number; index: number; total: number }[];
  symbol: string;
}) {
  const cx = 50, cy = 50;
  // Concentric shell radii configuration supporting up to 7 shells
  const shellRadii = [14, 19, 24, 29, 34, 39, 44];
  const shellsUsed = Array.from(new Set(electronLayout.map((e) => e.shell)));

  // nucleus particles (clustered & performance-capped)
  const nucleons: { kind: "p" | "n"; x: number; y: number }[] = [];
  
  // Cap rendered particles in nucleus visually at 50 (25 protons, 25 neutrons) 
  // to avoid SVG rendering overhead on heavy elements like Uranium
  const visualProtons = Math.min(protons, 25);
  const visualNeutrons = Math.min(neutrons, 25);
  const totalVisual = visualProtons + visualNeutrons;
  
  const cluster = Math.max(1, Math.ceil(Math.sqrt(totalVisual)));
  const spread = Math.min(6, 1.6 + Math.sqrt(totalVisual) * 0.7);
  let i = 0;
  for (let pi = 0; pi < visualProtons; pi++, i++) {
    const a = (i / Math.max(1, totalVisual)) * Math.PI * 2;
    const r = (i % cluster) * 0.9;
    nucleons.push({ kind: "p", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }
  for (let ni = 0; ni < visualNeutrons; ni++, i++) {
    const a = (i / Math.max(1, totalVisual)) * Math.PI * 2;
    const r = (i % cluster) * 0.9;
    nucleons.push({ kind: "n", x: cx + Math.cos(a) * r * spread / cluster, y: cy + Math.sin(a) * r * spread / cluster });
  }

  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full block">
      <defs>
        <radialGradient id="protonG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff8a5c" />
          <stop offset="100%" stopColor="#c43a16" />
        </radialGradient>
        <radialGradient id="neutronG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </radialGradient>
        <radialGradient id="electronG" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0032A0" />
        </radialGradient>
        <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* nucleus glow */}
      {protons + neutrons > 0 && (
        <motion.circle
          cx={cx} cy={cy} r={spread + 4}
          fill="url(#nucleusGlow)"
          animate={{ r: [spread + 4, spread + 6, spread + 4], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* shell rings (slowly rotating energy orbits) */}
      {shellsUsed.map((s) => {
        const ringDur = 30 + s * 8;
        const ringDirection = s % 2 === 0 ? "clockwise" : "counter";
        return (
          <g key={s}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={ringDirection === "clockwise" ? `0 ${cx} ${cy}` : `360 ${cx} ${cy}`}
              to={ringDirection === "clockwise" ? `360 ${cx} ${cy}` : `0 ${cx} ${cy}`}
              dur={`${ringDur}s`}
              repeatCount="indefinite"
            />
            <circle
              cx={cx} cy={cy} r={shellRadii[s]}
              fill="none"
              stroke="var(--brand-blue)"
              strokeOpacity="0.15"
              strokeWidth="0.4"
              strokeDasharray="0.8 1.4"
            />
          </g>
        );
      })}

      {/* nucleons (vibrating/jiggling nucleus cluster) */}
      {nucleons.map((nuc, idx) => {
        const jiggleDur = 0.55 + (idx % 7) * 0.12;
        const offsetRange = 0.55;
        const jX = [0, Math.sin(idx * 1.5) * offsetRange, Math.cos(idx * 2.7) * offsetRange, 0];
        const jY = [0, Math.cos(idx * 1.9) * offsetRange, Math.sin(idx * 2.3) * offsetRange, 0];

        return (
          <motion.circle
            key={idx}
            cx={nuc.x} cy={nuc.y} r={1.7}
            fill={nuc.kind === "p" ? "url(#protonG)" : "url(#neutronG)"}
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              x: jX,
              y: jY
            }}
            transition={{ 
              scale: { type: "spring", stiffness: 220, damping: 16, delay: idx * 0.015 },
              x: { duration: jiggleDur, repeat: Infinity, ease: "easeInOut" },
              y: { duration: jiggleDur, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        );
      })}

      {/* element symbol watermark */}
      {protons > 0 && (
        <text
          x={cx} y={cy + 1.5}
          textAnchor="middle"
          fontSize="3.2"
          fontFamily="Fraunces, serif"
          fill="var(--brand-ink)"
          opacity="0.55"
          style={{ pointerEvents: "none" }}
        >
          {symbol}
        </text>
      )}

      {/* electrons orbiting with quantum probability jitter */}
      {electronLayout.map((el, idx) => {
        const r = shellRadii[el.shell];
        const offset = (el.index / el.total) * 360;
        const dur = 6 + el.shell * 3;
        
        // Quantum probability coordinates jitter
        const jitterDur = 0.35 + (idx % 5) * 0.08;
        const jitterRange = 0.65;
        const jX = [0, Math.sin(idx * 2.1) * jitterRange, Math.cos(idx * 3.3) * jitterRange, 0];
        const jY = [0, Math.cos(idx * 2.7) * jitterRange, Math.sin(idx * 1.9) * jitterRange, 0];

        const direction = el.shell % 2 === 0 ? 1 : -1;
        const fromAngle = offset;
        const toAngle = offset + (360 * direction);

        return (
          <g key={`${el.shell}-${el.index}-${idx}`}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${fromAngle} ${cx} ${cy}`}
              to={`${toAngle} ${cx} ${cy}`}
              dur={`${dur}s`}
              repeatCount="indefinite"
            />
            <motion.circle 
              cx={cx + r} cy={cy} r={1.4} 
              fill="url(#electronG)" 
              animate={{ x: jX, y: jY }}
              transition={{ duration: jitterDur, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle 
              cx={cx + r} cy={cy} r={2.6} 
              fill="var(--brand-blue)" opacity="0.12" 
              animate={{ x: jX, y: jY }}
              transition={{ duration: jitterDur, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Counter button ──────────────────────────────── */
function Counter({
  label, sub, color, value, onChange,
}: {
  label: string; sub: string; color: string; value: number;
  onChange: (delta: number) => void;
}) {
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startHold = (delta: number) => {
    onChange(delta);
    holdRef.current = setInterval(() => onChange(delta), 110);
  };
  const endHold = () => { if (holdRef.current) clearInterval(holdRef.current); holdRef.current = null; };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
      <span className="h-9 w-9 rounded-full flex-shrink-0" style={{ background: color, opacity: 0.85 }} />
      <div className="flex-1 min-w-0">
        <div className="font-display text-base leading-tight">{label}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onMouseDown={() => startHold(-1)} onMouseUp={endHold} onMouseLeave={endHold}
          onTouchStart={() => startHold(-1)} onTouchEnd={endHold}
          className="h-8 w-8 rounded-full border border-border hover:border-foreground/40 active:scale-95 transition flex items-center justify-center text-base select-none"
          aria-label={`Remove ${label}`}
        >−</button>
        <span className="font-display text-xl tabular-nums w-12 text-center">{value}</span>
        <button
          onMouseDown={() => startHold(1)} onMouseUp={endHold} onMouseLeave={endHold}
          onTouchStart={() => startHold(1)} onTouchEnd={endHold}
          className="h-8 w-8 rounded-full text-primary-foreground hover:opacity-90 active:scale-95 transition flex items-center justify-center text-base select-none"
          style={{ background: color }}
          aria-label={`Add ${label}`}
        >+</button>
      </div>
    </div>
  );
}
