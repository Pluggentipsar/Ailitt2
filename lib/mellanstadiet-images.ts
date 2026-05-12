/**
 * URL:er till alla bilder i mellanstadiematerialet.
 *
 * Bilderna ligger lokalt i `public/images/mellanstadiet/<ID>.webp`. Originalen
 * (PNG från Midjourney) läggs i `mellanstadiet/_raw/` (gitignored) och
 * konverteras till WebP med `npm run optimize-images`.
 *
 * Workflow när en bild byts:
 *   1. Lägg ny PNG i mellanstadiet/_raw/<ID>.png
 *   2. Kör `npm run optimize-images`
 *   3. Commit den uppdaterade <ID>.webp
 */

const BASE = "/images/mellanstadiet";

export const MELLANSTADIET_IMAGES = {
  // Inline-bilder i lektionerna
  "L1.1": `${BASE}/L1.1.webp`,
  "L1.2": `${BASE}/L1.2.webp`,
  "L1.3": `${BASE}/L1.3.webp`,
  "L2.1": `${BASE}/L2.1.webp`,
  "L2.2": `${BASE}/L2.2.webp`,
  "L3.1": `${BASE}/L3.1.webp`,
  "L3.2": `${BASE}/L3.2.webp`,
  "L3.3": `${BASE}/L3.3.webp`,
  "L4.1": `${BASE}/L4.1.webp`,
  "L4.2": `${BASE}/L4.2.webp`,
  "L5.1": `${BASE}/L5.1.webp`,
  "L5.2": `${BASE}/L5.2.webp`,
  "L6.1": `${BASE}/L6.1.webp`,
  "L6.2": `${BASE}/L6.2.webp`,
  "L7.1": `${BASE}/L7.1.webp`,
  "L7.2": `${BASE}/L7.2.webp`,

  // Hero-bilder per lektion (21:9 panoramiska)
  "L1-hero": `${BASE}/L1-hero.webp`,
  "L2-hero": `${BASE}/L2-hero.webp`,
  "L3-hero": `${BASE}/L3-hero.webp`,
  "L4-hero": `${BASE}/L4-hero.webp`,
  "L5-hero": `${BASE}/L5-hero.webp`,
  "L6-hero": `${BASE}/L6-hero.webp`,
  "L7-hero": `${BASE}/L7-hero.webp`,

  // Spel-omslag
  S1: `${BASE}/S1.webp`,
  S2: `${BASE}/S2.webp`,
  S3: `${BASE}/S3.webp`,
  S4: `${BASE}/S4.webp`,
  S5: `${BASE}/S5.webp`,
  S6: `${BASE}/S6.webp`,
  S7: `${BASE}/S7.webp`,
  S8: `${BASE}/S8.webp`,
} as const;

export type MellanstadietImageId = keyof typeof MELLANSTADIET_IMAGES;

/** Hero-bild för en lektion utifrån dess nummer (1–7). */
export function getLessonHero(lessonNumber: number): string | undefined {
  const key = `L${lessonNumber}-hero` as MellanstadietImageId;
  return MELLANSTADIET_IMAGES[key];
}

/** Omslagsbild för ett spel utifrån dess slug. */
const GAME_COVER_BY_SLUG: Record<string, MellanstadietImageId> = {
  "monster-fangaren": "S1",
  "nasta-ord": "S2",
  "ai-eller-manniska": "S3",
  "sycophancy-detektorn": "S4",
  "byg-din-framtid": "S5",
  "dilemma-spelet": "S6",
  "hallucination-rally": "S7",
  "bias-detektiven": "S8",
};

export function getGameCover(slug: string): string | undefined {
  const id = GAME_COVER_BY_SLUG[slug];
  return id ? MELLANSTADIET_IMAGES[id] : undefined;
}
