// Verktygslådan — en sökbar/filtrerbar samling av AI-tjänster, källkritik-
// verktyg, prebunking-spel och pedagogiska resurser för lärare.

import type { Doman } from "@/lib/taxonomi";

export type ToolCategory =
  | "kallkritik-resurser"
  | "verifiering"
  | "ai-detektion"
  | "ai-assistent-kallkritik"
  | "prebunking-spel"
  | "sok-och-lateral-lasning"
  | "chattbot"
  | "bildgenerering"
  | "videogenerering"
  | "ljud-och-rost"
  | "deepfake-skapande"
  | "larresurs-skola"
  | "browser-extension";

export const toolCategoryLabels: Record<ToolCategory, string> = {
  "kallkritik-resurser": "Källkritikresurser",
  verifiering: "Faktagranskning & verifiering",
  "ai-detektion": "AI-detektion",
  "ai-assistent-kallkritik": "AI-assistenter för källkritik",
  "prebunking-spel": "Prebunking-spel",
  "sok-och-lateral-lasning": "Sök & lateral läsning",
  chattbot: "Chattbotar",
  bildgenerering: "Bildgenerering",
  videogenerering: "Videogenerering",
  "ljud-och-rost": "Ljud & röst",
  "deepfake-skapande": "Deepfake-skapande",
  "larresurs-skola": "Lärresurser för skolan",
  "browser-extension": "Webbläsartillägg",
};

export type ToolKind =
  | "service"
  | "exercise"
  | "game"
  | "verification"
  | "research"
  | "browser-extension"
  | "guide";

export const toolKindLabels: Record<ToolKind, string> = {
  service: "Tjänst",
  exercise: "Övning",
  game: "Spel",
  verification: "Verifieringsverktyg",
  research: "Forskning & läsning",
  "browser-extension": "Webbläsartillägg",
  guide: "Guide & instruktion",
};

export type ToolPrice = "free" | "freemium" | "paid";

export const toolPriceLabels: Record<ToolPrice, string> = {
  free: "Gratis",
  freemium: "Gratis grundnivå",
  paid: "Kostar",
};

export type ToolLanguage = "sv" | "en" | "multi";

export const toolLanguageLabels: Record<ToolLanguage, string> = {
  sv: "Svenska",
  en: "Engelska",
  multi: "Flera språk",
};

export type Tool = {
  id: string;
  name: string;
  url: string;
  description: string;
  category: ToolCategory;
  /**
   * OECD-domäner — sajtens navigationsfilter, se lib/taxonomi.ts.
   * Frågan är vad ELEVEN gör med verktyget, inte vad verktyget är.
   * Obligatoriskt med flit: ett otaggat verktyg blir osynligt i filtret, och
   * ett kompileringsfel är en bättre påminnelse än en tom träfflista.
   */
  domaner: Doman[];
  kind: ToolKind;
  price: ToolPrice;
  requiresAccount: boolean;
  language: ToolLanguage;
  // Fritext-taggar för sök — branscher, ämnesområden, åldersgrupper
  tags?: string[];
  // Kort anmärkning, t.ex. "Skolverkets material" eller "Kräver Chrome"
  notes?: string;
  // Kopplade aktiviteter i workshopen (för korslänkning)
  linkedActivityIds?: string[];
};
