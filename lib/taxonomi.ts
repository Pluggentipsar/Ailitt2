/**
 * Sajtens klassifikationskontrakt.
 *
 * Bakgrund: sajten växte sektion för sektion och fick sex parallella
 * klassifikationssystem. Två av dem svarade på samma fråga — "vilken sorts
 * AI-kunnande tränar det här?" — utan att relationen förklarades någonstans.
 * Symptomet var att startsidan och övningsbanken filtrerade på olika sätt och
 * kändes som två olika sajter.
 *
 * Kontraktet, beslutat aug 2026 (se docs/sajt-plan.md, Lager 5):
 *
 *   DOMÄNERNA (4) är NAVIGATIONSFILTRET.
 *   Fyra facetter går att skanna. De beskriver vad eleven GÖR, vilket är hur
 *   man väljer material till en specifik lektion. Används överallt där man
 *   letar: startsidan, övningsbanken, verktygslådan.
 *
 *   DIMENSIONERNA (7) är TÄCKNINGSLAGRET.
 *   De svarar på "vad har jag gjort i termin och vad saknas?". Hör hemma på
 *   ramverkssidorna och som badge på enskilt innehåll — inte som primärt
 *   filter.
 *
 * ── Systemen går INTE att härleda ur varandra ──────────────────────────────
 *
 * Detta är mätt, inte antaget. I bankens befintliga data mappar domänen
 * `styra` till dimensionsuppsättningarna [2], [2,4], [2,5] och [2,3] beroende
 * på övning; `mota` till [1,4], [4] och [0,1]. Många-till-många åt båda håll,
 * eftersom en människa gjorde en redaktionell bedömning varje gång.
 *
 * Frestelsen att skriva en DOMAN_TILL_DIMENSION-mappning är därför fel väg.
 * Den skulle se prydlig ut och tyst göra fel på ungefär en tredjedel av
 * innehållet. Båda taggarna sätts för hand, av någon som läst materialet.
 */

import { aiLiteracyConfig, type AiLiteracyAspect } from "./aiLiteracyConfig";

// ═══════════════════════════════════════════════════════════════════════════
// System 1 — OECD:s AILit-domäner. NAVIGATIONSFILTRET.
// ═══════════════════════════════════════════════════════════════════════════

export type Doman = "mota" | "skapa" | "styra" | "forma";

/** Ordningen i filter och badges. Följer OECD:s egen progression. */
export const DOMAN_ORDNING: Doman[] = ["mota", "skapa", "styra", "forma"];

export const DOMAN_META: Record<
  Doman,
  { namn: string; engelska: string; beskrivning: string }
> = {
  mota: {
    namn: "Möta AI",
    engelska: "Engage with AI",
    beskrivning: "Känna igen, granska och värdera AI.",
  },
  skapa: {
    namn: "Skapa med AI",
    engelska: "Create with AI",
    beskrivning: "Använda AI som kreativ partner utan att tappa ägarskapet.",
  },
  styra: {
    namn: "Styra AI",
    engelska: "Manage AI",
    beskrivning: "Avgöra när, hur och om AI ska användas.",
  },
  forma: {
    namn: "Forma AI",
    engelska: "Shape AI",
    beskrivning: "Förstå att AI är byggd av människor — och kan byggas om.",
  },
};

/**
 * Accentfärg per domän. Bor här, inte i en enskild sektions UI-mapp, eftersom
 * domänerna nu färgar filter på både startsidan och i övningsbanken — samma
 * färg på samma sak är halva poängen med att ha ett gemensamt filter.
 */
export const DOMAN_FARG: Record<Doman, string> = {
  mota: "#14b8a6", // teal-500
  skapa: "#a855f7", // purple-500
  styra: "#3b82f6", // blue-500
  forma: "#f97316", // orange-500
};

/**
 * Vägledning vid taggning. Frågan är vad ELEVEN gör i övningen — inte vad
 * ämnesinnehållet handlar om. En övning om hur AI tränas är `mota` (eleven
 * granskar) om den handlar om att genomskåda, men `forma` om den handlar om
 * att eleven ska ifrågasätta designvalen.
 *
 * De flesta objekt har en eller två domäner. Tre är nästan alltid ett tecken
 * på att taggningen egentligen är obestämd.
 */
export const DOMAN_TAGGNINGSHJALP: Record<Doman, string> = {
  mota: "Eleven möter ett AI-utfall och ska genomskåda, granska eller värdera det.",
  skapa: "Eleven producerar något med AI som verktyg och ska behålla ägarskapet.",
  styra: "Eleven avgör NÄR, HUR eller OM AI ska användas — ett beslut, inte en produkt.",
  forma: "Eleven ifrågasätter hur systemet är byggt, av vem, och hur det kunde byggas om.",
};

// ═══════════════════════════════════════════════════════════════════════════
// System 2 — Sajtens sju AI-litteracitetsdimensioner. TÄCKNINGSLAGRET.
// ═══════════════════════════════════════════════════════════════════════════

export type { AiLiteracyAspect };
export { aiLiteracyConfig };

/** Dimensionernas id:n i ordning — 0 t.o.m. 6. */
export const DIMENSION_ORDNING: number[] = aiLiteracyConfig.map((a) => a.id);

export function dimensionNamn(id: number): string {
  return aiLiteracyConfig.find((a) => a.id === id)?.name ?? `Dimension ${id}`;
}

// ═══════════════════════════════════════════════════════════════════════════
// Delade facetter — används av både startsidan och övningsbanken.
// Låg tidigare bara i components/ovningsbanken/meta.ts, men samma
// facettlogik behövs när startsidans typfilter byts ut (Lager 5).
// ═══════════════════════════════════════════════════════════════════════════

export type Arskursband = "f-3" | "ak4-6" | "ak7-9" | "gym";

export const ARSKURSBAND_ORDNING: Arskursband[] = [
  "f-3",
  "ak4-6",
  "ak7-9",
  "gym",
];

export const ARSKURSBAND_LABELS: Record<Arskursband, string> = {
  "f-3": "F–3",
  "ak4-6": "Åk 4–6",
  "ak7-9": "Åk 7–9",
  gym: "Gymnasiet+",
};

/**
 * Matchar en fritext-årskurssträng ("Åk 4–6", "Åk 7–9 och gymnasiet",
 * "F–3 (funkar t.o.m. åk 6)" …) mot ett band. Siffrorna i strängen tolkas som
 * ett spann; F/förskoleklass räknas som årskurs 0.
 *
 * Fritext snarare än ett enum eftersom källmaterialet skriver årskurser på
 * många sätt och formuleringen ofta bär nyans ("funkar t.o.m. åk 6").
 */
export function matcharArskursband(
  arskurser: string,
  band: Arskursband
): boolean {
  const s = arskurser.toLowerCase();
  if (band === "gym") {
    return s.includes("gym") || s.includes("vux");
  }
  // "F–3"/"F-3" (båda strecken) och "förskoleklass" skrivs ofta utan
  // användbara siffror — fånga dem textuellt innan spann-tolkningen.
  const namnerF3 =
    s.includes("f–3") || s.includes("f-3") || s.includes("förskoleklass");
  if (band === "f-3" && namnerF3) return true;
  const tal = (s.match(/\d+/g) ?? []).map(Number).filter((n) => n <= 12);
  if (tal.length === 0) return false;
  const min = Math.min(...tal);
  const max = Math.max(...tal);
  if (band === "f-3") return min <= 3;
  if (band === "ak4-6") return min <= 6 && max >= 4;
  return min <= 9 && max >= 7;
}

export type TidBucket = "kort" | "mellan" | "lang";

export const TID_ORDNING: TidBucket[] = ["kort", "mellan", "lang"];

export const TID_LABELS: Record<TidBucket, string> = {
  kort: "≤ 15 min",
  mellan: "≤ 30 min",
  lang: "30+ min",
};

export function matcharTid(minuter: number, bucket: TidBucket): boolean {
  if (bucket === "kort") return minuter <= 15;
  if (bucket === "mellan") return minuter <= 30;
  return minuter > 30;
}
