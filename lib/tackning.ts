/**
 * Täckning per AI-litteracitetsdimension.
 *
 * Detta är dimensionernas egentliga jobb enligt kontraktet i lib/taxonomi.ts:
 * de svarar på "vad har jag gjort i termin, och vad saknas?". Som filter var
 * de dåliga — moduler bar 3–7 taggar var och fem bar alla sju, så ett val
 * filtrerade bort nästan ingenting. Som täckningskarta är samma egenskap en
 * fördel: det är just överlappet som visar att en dimension är väl försörjd.
 *
 * Räknas ur det enhetliga sökindexet, så siffrorna följer med automatiskt när
 * innehåll läggs till.
 */

import { getUnifiedIndex, type UnifiedItem } from "@/lib/search/unified-index";
import {
  aiLiteracyConfig,
  ARSKURSBAND_ORDNING,
  DOMAN_ORDNING,
  type Arskursband,
  type Doman,
} from "@/lib/taxonomi";

export type DimensionTackning = {
  id: number;
  namn: string;
  beskrivning: string;
  /** Antal innehållsobjekt som tränar dimensionen. */
  totalt: number;
  perStadium: Record<Arskursband, number>;
  perDoman: Record<Doman, number>;
  /** Vilket stadium som har minst — det är där en lucka syns först. */
  svagasteStadium: Arskursband;
};

/**
 * Objekt utan dimensionstaggar räknas inte. Det är avsiktligt: en täckningsvy
 * ska visa vad som FINNS, inte trösta med material som ingen har kopplat.
 * Verktygslådan hamnar därför utanför, vilket stämmer — ett verktyg tränar
 * ingen dimension förrän någon bygger en uppgift av det.
 *
 * Varje dimension har minst 1: ramverkets egen definitionssida är taggad med
 * sin dimension. Den räknas med, för att siffran här och träffantalet på
 * startsidans dimensionsfilter ska vara SAMMA SIFFRA. Två tal som nästan
 * stämmer är värre än ett tal med en känd beståndsdel.
 */
export function beraknaTackning(
  index: UnifiedItem[] = getUnifiedIndex()
): DimensionTackning[] {
  return aiLiteracyConfig.map((aspekt) => {
    const traffar = index.filter((it) => it.aiLiteracyIds?.includes(aspekt.id));

    const perStadium = {} as Record<Arskursband, number>;
    for (const s of ARSKURSBAND_ORDNING) perStadium[s] = 0;
    const perDoman = {} as Record<Doman, number>;
    for (const d of DOMAN_ORDNING) perDoman[d] = 0;

    for (const it of traffar) {
      for (const s of it.stadier ?? []) perStadium[s]++;
      for (const d of it.domaner ?? []) perDoman[d]++;
    }

    const svagasteStadium = ARSKURSBAND_ORDNING.reduce((a, b) =>
      perStadium[b] < perStadium[a] ? b : a
    );

    return {
      id: aspekt.id,
      namn: aspekt.name,
      beskrivning: aspekt.description,
      totalt: traffar.length,
      perStadium,
      perDoman,
      svagasteStadium,
    };
  });
}
