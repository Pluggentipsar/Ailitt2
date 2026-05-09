/**
 * Spel-katalog för mellanstadiet.
 * Varje spel är pedagogiskt kopplat till en lektion + en kärnpoäng från den.
 */

export interface MellanstadietGame {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  lesson: string; // "L1", "L2", "L1+L2"
  /** Vad spelet lär ut — en mening */
  pedagogy: string;
  /** Spelmekanik-typ för UI-visning */
  type: "Arkad" | "Quiz" | "Undersökning" | "Visualisering";
  /** Cirka-tid */
  duration: string;
  /** Tailwind-färgnyckel för kort */
  accentHex: string;
  /** Svårighetsgrad (1-3) */
  difficulty: 1 | 2 | 3;
  status: "ready" | "draft";
}

export const MELLANSTADIET_GAMES: MellanstadietGame[] = [
  {
    id: "monster-fangaren",
    slug: "monster-fangaren",
    title: "Mönster-fångaren",
    tagline: "Klassisk arkad — du tränar AI:n medan du fångar fallande objekt",
    description:
      "Styr en paddel med två fack (HUND/KATT). Det du fångar blir AI:s träningsdata. Efter 45 sekunder testar AI:n sig själv — gjorde du jobbet bra?",
    lesson: "L2",
    pedagogy:
      "Du upplever själv att ensidig träning ger ensidiga gissningar. Slutpoängen kombinerar arkad-skicklighet med AI:s testresultat.",
    type: "Arkad",
    duration: "3 min",
    accentHex: "#10b981",
    difficulty: 2,
    status: "ready",
  },
  {
    id: "nasta-ord",
    slug: "nasta-ord",
    title: "Nästa ord",
    tagline: "Tävla mot AI om vem som gissar nästa ord rätt",
    description:
      "En mening saknar sitt sista ord. Du gissar — AI gissar också. Båda visas. Vilken av er tänker mest 'mönster-likt'? Och vad säger det om hur AI funkar?",
    lesson: "L1 + L2",
    pedagogy:
      "AI förutser nästa ord baserat på mönster i miljarder texter. Det visar sig att du också gör det — ofta samma mönster.",
    type: "Arkad",
    duration: "5 min",
    accentHex: "#a5b4fc",
    difficulty: 1,
    status: "ready",
  },
  {
    id: "ai-eller-manniska",
    slug: "ai-eller-manniska",
    title: "AI eller människa?",
    tagline: "Är texten skriven av en människa eller producerad av AI?",
    description:
      "Tio korta texter blixtsnabbt. Du har 15 sekunder per fråga. Efter varje runda får du veta — och vilka tells du missade. Lär dig att läsa AI-stil.",
    lesson: "L2",
    pedagogy:
      "AI-text har egna mönster: perfekt grammatik, generisk ton, viss repetition. Tränar dig i att känna igen AI utan att lita på 'känslan'.",
    type: "Quiz",
    duration: "5 min",
    accentHex: "#fcd34d",
    difficulty: 2,
    status: "ready",
  },
  {
    id: "sycophancy-detektorn",
    slug: "sycophancy-detektorn",
    title: "Sycophancy-detektorn",
    tagline: "Smicker eller ärligt? Du bedömer 10 AI-svar.",
    description:
      "AI-svar låter ofta lika trevliga oavsett om de smickrar eller är ärliga. Du läser tio scenarier — kan du skilja på AI som håller med och AI som faktiskt försöker hjälpa?",
    lesson: "L6",
    pedagogy:
      "Sycophancy är farligt eftersom det LÅTER snällt. Du tränar dig att se igenom smicker — det är en superkraft som gäller även mot människor.",
    type: "Quiz",
    duration: "5 min",
    accentHex: "#8b5cf6",
    difficulty: 3,
    status: "ready",
  },
  {
    id: "byg-din-framtid",
    slug: "byg-din-framtid",
    title: "Bygg din framtid",
    tagline: "7 val × 4 alternativ — vilken framtid bygger DU för 2040?",
    description:
      "Sju domäner: arbete, skola, transport, fritid, vänskap, demokrati, klimat. Per domän väljer du en framtidsbild. Slutet visar din helhetsbild — och om den lutar utopisk, pragmatisk eller oroande.",
    lesson: "L7",
    pedagogy:
      "Framtiden är inte en plats vi besöker — den byggs av val. Du tränas i att tänka konkret om hur AI förändrar samhället, och se DINA preferenser.",
    type: "Undersökning",
    duration: "8 min",
    accentHex: "#06b6d4",
    difficulty: 2,
    status: "ready",
  },
  {
    id: "dilemma-spelet",
    slug: "dilemma-spelet",
    title: "Dilemma-spelet",
    tagline: "Åtta etiska val — inga rätta svar, bara konsekvenser",
    description:
      "Du möter åtta etiska dilemman — fusk, kompis i kris, AI-bilder, dark patterns, AI och miljö, AI som tröst. Varje val har konsekvenser. Slut: din etiska profil enligt tre etiska frågor.",
    lesson: "L5",
    pedagogy:
      "Etik är inte ett facit. Du tränas i Joel Rangsjös tre frågor: är det ärligt? lär jag mig? snällt mot andra?",
    type: "Undersökning",
    duration: "8 min",
    accentHex: "#eab308",
    difficulty: 2,
    status: "ready",
  },
  {
    id: "hallucination-rally",
    slug: "hallucination-rally",
    title: "Hallucination-rally",
    tagline: "90 sek att hitta så många påhittade fakta som möjligt",
    description:
      "Ett flöde av AI-genererade påståenden. Du har 90 sekunder och tre val: PÅHITTAT, STÄMMER eller SKIPPA. Hastighet straffar dig — som det gjorde advokaterna 2025.",
    lesson: "L4",
    pedagogy:
      "Snabbläsning + AI:s självsäkra ton = farlig kombination. Du upplever varför granskning kräver tid.",
    type: "Arkad",
    duration: "3 min",
    accentHex: "#f43f5e",
    difficulty: 3,
    status: "ready",
  },
  {
    id: "bias-detektiven",
    slug: "bias-detektiven",
    title: "Bias-detektiven",
    tagline: "Varför gjorde AI:n fel? Hitta orsaken i träningsdatat.",
    description:
      "Tre verkliga fall: Amazons CV-AI, en bild-AI som ritar 'läkare', och en röst-AI som inte förstår dialekter. Du granskar utfallet, hittar bias i datan, fixar — och ser AI:n göra rätt.",
    lesson: "L2",
    pedagogy:
      "Bias är inte AI:s fel. Det är data. Du upplever kausalkedjan: ensidig data → snedvridna gissningar → balanserad data → bättre gissningar.",
    type: "Undersökning",
    duration: "10 min",
    accentHex: "#f97316",
    difficulty: 3,
    status: "ready",
  },
];

export function getGameBySlug(slug: string): MellanstadietGame | undefined {
  return MELLANSTADIET_GAMES.find((g) => g.slug === slug);
}
