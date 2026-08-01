// Delad UI-metadata för AI-övningsbanken.
// Ren presentation — all data kommer från @/lib/ovningsbanken.

import type { OvningDoman, OvningKalla } from "@/lib/ovningsbanken";

// Facetterna och domänordningen ägs av lib/taxonomi.ts — samma logik behövs
// när startsidans filter byts ut. Återexporteras här så bankens komponenter
// kan fortsätta importera från ett ställe.
export {
  DOMAN_ORDNING,
  ARSKURSBAND_LABELS,
  TID_LABELS,
  matcharArskursband,
  matcharTid,
} from "@/lib/taxonomi";
export type { Arskursband, TidBucket } from "@/lib/taxonomi";

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

