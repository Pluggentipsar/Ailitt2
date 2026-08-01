import type { ComponentType } from "react";
import { ChattSafari } from "@/components/eleverna-om-ai/klassrum/ChattSafari";
import { FyraGrepp } from "@/components/eleverna-om-ai/klassrum/FyraGrepp";
import { FramtidsRoster } from "@/components/eleverna-om-ai/klassrum/FramtidsRoster";

/**
 * Komponenter som kan bäddas in som slide via ett `interaktiv`-block.
 *
 * Motorn importerar registret direkt i stället för att ta emot det som prop.
 * Det är en medveten koppling till en konsument: PresentationEngine är inte
 * ett generiskt bibliotek utan just den här sajtens motor — den känner redan
 * till --workshop-variablerna och kapitelindelningen. Alternativet, att tråda
 * registret genom RSC-gränsen via en klientwrapper, hade kostat ett extra
 * lager för tre komponenter.
 *
 * Tre poster, och listan ska helst inte växa. Ett moment som bara stegar fram
 * innehåll hör hemma som författade slides.
 */
export const INTERAKTIVA_KOMPONENTER: Record<string, ComponentType> = {
  ChattSafari,
  FyraGrepp,
  FramtidsRoster,
};
