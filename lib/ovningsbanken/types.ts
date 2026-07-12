// AI-övningsbanken — enhetlig övningstyp för hela sajten.
// Återanvänder käll­kritik-workshopens Block-DSL och renderare (ModeTabs,
// BlockRenderer, PresentationView) så att alla övningar får samma tre lägen:
// prova själv · lärarhandledning · elevinstruktion, plus storskärmsläge.
//
// Kurerade spellistor är delbara URL:er: /ovningsbanken/spellista?steps=id1,id2

import type {
  Block,
  DeepDive,
  EvidenceAnchor,
  ExternalTool,
  AgeRange,
} from "@/lib/workshops/kallkritik/types";

export type { Block, DeepDive, EvidenceAnchor, ExternalTool, AgeRange };

/** OECD:s fyra AILit-domäner (slutversion 2026) — bankens huvudtaxonomi. */
export type OvningDoman = "mota" | "skapa" | "styra" | "forma";

export const DOMAN_META: Record<
  OvningDoman,
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

/** Varifrån övningen kommer — styr kredit och ev. länk tillbaka. */
export type OvningKalla = "banken" | "eleverna-om-ai" | "kallkritik";

export interface BankOvning {
  /** Unikt id, kebab-case. Källkritik-övningar behåller sina befintliga id:n. */
  id: string;
  titel: string;
  /** En rads hook till hubbens kort. */
  blurb: string;
  /** Varför övningen finns — 2–4 meningar, talspråksnära. */
  syfte: string;

  domaner: OvningDoman[];
  /** Sajtens sju dimensioner (0–6) — driver AiLiteracyBadge + korskoppling. */
  aiLiteracyIds: number[];

  tid: string;
  /** För sortering/filter. */
  tidMinuter: number;
  arskurser: string;
  digitalaVerktyg: boolean;
  material: string;
  /** Trygghetsnot som visas tydligt (t.ex. vid deepfake- eller relationsteman). */
  varning?: string;

  /** Läge 1 — du-form till läraren som vill uppleva övningen själv först. */
  provaSjalv?: Block[];
  /** Läge 2 — pedagogiken: förberedelser, tidsplan, ledarroll, bedömning. */
  lararhandledning?: Block[];
  /** Läge 3 — du-form direkt till elev; kopieras till Teams/Vklass med en knapp. */
  elevinstruktion?: Block[];

  diskussion?: string[];
  fallgropar?: string[];
  variationer?: string[];
  deepDive?: DeepDive;
  evidens?: EvidenceAnchor[];
  externaVerktyg?: ExternalTool[];
  /** Kedjar bra med (bank-id:n). */
  kedjarMed?: string[];

  /**
   * Interaktivt klassrumsläge när ett skräddarsytt sådant finns
   * (de sju metoderna från eleverna-om-ai): länk till metodsidans
   * projicerbara komponent.
   */
  klassrumHref?: string;

  kalla: OvningKalla;
  kredit?: string;
}

export interface KureradSpellista {
  id: string;
  namn: string;
  beskrivning: string;
  /** Ordnade bank-id:n — blir ?steps=… i delningslänken. */
  steg: string[];
}
