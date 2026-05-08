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
