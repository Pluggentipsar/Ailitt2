// Workshop-aktiviteter har egna "trains"-skills (källkritik, manipulations-
// medvetenhet, designkritik etc.). Gymnasie-moduler har AI-litteracitets-IDs
// (0-6). För att den unified sökningens AI-litteracitetsfilter ska kunna
// fånga workshop-aktiviteter mappar vi skills → ai-litteracitets-IDs.
//
// En skill kan mappa till FLERA aspekter (t.ex. "manipulationsmedvetenhet"
// hör hemma både i "Kritiskt granska" och i "Etik"). Saknar mappning =
// ingen ai-literacy-tag (visas ändå när inget filter är aktivt).

import type { Skill } from "@/lib/workshops/kallkritik/types";

// AI-litteracitetsaspekterna (referens):
// 0: Berättelsen om AI · 1: Vad är AI? · 2: Använda AI · 3: Etik
// 4: Kritiskt granska · 5: Människa & maskin · 6: Framtid & samhälle

export const trainsToAiLiteracyMap: Record<Skill, number[]> = {
  observation: [4],
  kallkritik: [4],
  detaljgranskning: [4],
  "algoritm-medvetenhet": [1, 6],
  systemforstaelse: [1],
  "teknisk-forstaelse": [1],
  "etisk-reflektion": [3],
  prebunking: [4],
  "kritisk-lasning": [4],
  faktagranskning: [4],
  manipulationsmedvetenhet: [3, 4],
  designkritik: [3, 6],
  relationskritik: [3, 5],
  "kroppslig-forstaelse": [5],
  verktygsstrategi: [2],
  sjalvreflektion: [5],
  samtalskonst: [2, 5],
  "bias-medvetenhet": [3, 4],
  "retorisk-medvetenhet": [4],
};

// Hjälpare: en aktivitet med flera trains får unionen av alla mappade aspekter.
export function trainsToAiLiteracyIds(trains: Skill[]): number[] {
  const ids = new Set<number>();
  for (const t of trains) {
    const mapped = trainsToAiLiteracyMap[t];
    if (mapped) {
      for (const id of mapped) ids.add(id);
    }
  }
  return Array.from(ids).sort((a, b) => a - b);
}
