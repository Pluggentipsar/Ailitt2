// Delad UI-metadata för AI-övningsbanken.
// Ren presentation — all data kommer från @/lib/ovningsbanken.

import type { OvningDoman, OvningKalla } from "@/lib/ovningsbanken";

/** Domänernas ordning i filter och badges. */
export const DOMAN_ORDNING: OvningDoman[] = ["mota", "skapa", "styra", "forma"];

/** Workshop-tone per domän — styr accentfärg i storskärmsläget. */
export const DOMAN_TON: Record<OvningDoman, string> = {
  mota: "havsblå",
  skapa: "lila",
  styra: "skog",
  forma: "rost",
};

/** Prick-färg per domän (matchar eleverna-om-ai:s accenter). */
export const DOMAN_DOT: Record<OvningDoman, string> = {
  mota: "#14b8a6", // teal-500
  skapa: "#a855f7", // purple-500
  styra: "#3b82f6", // blue-500
  forma: "#f97316", // orange-500
};

/** Källa-chip: etikett + statiska Tailwind-klasser (purge-säkert). */
export const KALLA_META: Record<OvningKalla, { label: string; chip: string }> =
  {
    banken: {
      label: "Ny",
      chip: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    "eleverna-om-ai": {
      label: "Eleverna om AI",
      chip: "border-teal-200 bg-teal-50 text-teal-800",
    },
    kallkritik: {
      label: "Källkritik",
      chip: "border-amber-200 bg-amber-50 text-amber-800",
    },
  };

export type TidBucket = "kort" | "mellan" | "lang";

export const TID_LABELS: Record<TidBucket, string> = {
  kort: "≤ 15 min",
  mellan: "≤ 30 min",
  lang: "30+ min",
};

/** Matchar en övnings tidMinuter mot en vald tid-chip. */
export function matcharTid(minuter: number, bucket: TidBucket): boolean {
  if (bucket === "kort") return minuter <= 15;
  if (bucket === "mellan") return minuter <= 30;
  return minuter > 30;
}

export type Arskursband = "f-3" | "ak4-6" | "ak7-9" | "gym";

export const ARSKURSBAND_LABELS: Record<Arskursband, string> = {
  "f-3": "F–3",
  "ak4-6": "Åk 4–6",
  "ak7-9": "Åk 7–9",
  gym: "Gymnasiet+",
};

/**
 * Matchar en fritext-årskurssträng ("Åk 4–6", "Åk 7–9 och gymnasiet",
 * "F–3 (funkar t.o.m. åk 6)" …) mot ett band. Siffrorna i strängen
 * tolkas som ett spann; F/förskoleklass räknas som årskurs 0.
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
