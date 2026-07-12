"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// De fyra greppen som skyddar tänkandet — flikad vy med ett modellerat
// samtal per grepp. Modellera högt med klassen innan eleverna provar själva.

interface Grepp {
  id: string;
  titel: string;
  beskrivning: string;
  elev: string;
  ai: string;
}

const GREPPEN: Grepp[] = [
  {
    id: "brain-dump",
    titel: "Brain dump före AI",
    beskrivning:
      "Eleven tömmer huvudet först — AI:n används för att jämföra och utmana, inte ersätta.",
    elev: "Jag skriver ner allt jag kan om fotosyntesen först. Sen får du säga vad jag missat. Här: solljus, klorofyll, koldioxid in, syre ut…",
    ai: "Stark start. Du har processen — men du nämner inte var i växten det sker, eller vad glukosen används till. Vill du gissa innan jag berättar?",
  },
  {
    id: "pausknappen",
    titel: "AI-pausknappen",
    beskrivning:
      "Stanna före prompten: vad vet jag redan? Vad vill jag egentligen ha ut? Ringa in den riktiga frågan innan den ställs.",
    elev: "Vänta. Innan jag frågar dig — det jag egentligen inte fattar är skillnaden mellan cellandning och fotosyntes. Det är min riktiga fråga.",
    ai: "Bra att du ringade in den. Ska vi börja i vad de har gemensamt, eller var de skiljer sig åt?",
  },
  {
    id: "kalibrering",
    titel: "Förtroendekalibrering",
    beskrivning:
      "Svara själv, skatta säkerheten 1–10, jämför sedan med AI:n. Målet är att träna känslan för när man vet — inte att alltid ha rätt.",
    elev: "Jag tror svaret är 1789, säkerhet 7 av 10. Rätta mig inte direkt — ställ en fråga som testar om jag har rätt.",
    ai: "Okej: vad hände i Paris den 14 juli det året — och varför var brödpriserna en del av det?",
  },
  {
    id: "nando",
    titel: "Nando-menyn",
    beskrivning:
      "Samma uppgift, olika AI-styrka. Eleven väljer nivå — och klättrar.",
    elev: "Jag tar Medium: ge mig tre ledtrådar, inte svaret. Nästa vecka provar jag Het — då får du bara ställa motfrågor.",
    ai: "Ledtråd ett: fundera på vad som hände med adelns skattefrihet…",
  },
];

const NANDO_NIVAER: Array<{ namn: string; beskrivning: string; farg: string }> =
  [
    {
      namn: "Extra mild",
      beskrivning: "AI sammanfattar",
      farg: "border-sky-200 bg-sky-50 text-sky-900",
    },
    {
      namn: "Mild",
      beskrivning: "AI jämför förklaringar",
      farg: "border-amber-200 bg-amber-50 text-amber-900",
    },
    {
      namn: "Het",
      beskrivning: "AI utmanar elevens idéer",
      farg: "border-orange-300 bg-orange-100 text-orange-900",
    },
    {
      namn: "Extra het",
      beskrivning: "AI som kritisk expert — eleven värderar",
      farg: "border-red-300 bg-red-100 text-red-900",
    },
  ];

export function FyraGrepp() {
  const [aktivt, setAktivt] = useState(0);
  const grepp = GREPPEN[aktivt];

  return (
    <div className="space-y-6">
      {/* Flikar */}
      <div className="flex flex-wrap gap-2">
        {GREPPEN.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setAktivt(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-base font-semibold transition sm:text-lg",
              aktivt === i
                ? "border-teal-600 bg-teal-600 text-white shadow-md"
                : "border-gray-300 bg-white text-gray-700 hover:border-teal-300 hover:text-teal-700"
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold",
                aktivt === i ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              )}
            >
              {i + 1}
            </span>
            {g.titel}
          </button>
        ))}
      </div>

      {/* Aktivt grepp */}
      <div className="space-y-5">
        <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
          {grepp.beskrivning}
        </p>

        <div className="space-y-3">
          <div className="flex flex-col items-end gap-1">
            <span className="pr-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Eleven
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-teal-600 px-5 py-4 text-lg leading-relaxed text-white shadow-sm sm:text-xl">
              {grepp.elev}
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="pl-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              AI
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-5 py-4 text-lg leading-relaxed text-gray-900 shadow-sm sm:text-xl">
              {grepp.ai}
            </div>
          </div>
        </div>

        {/* Nivåskalan — bara för Nando-menyn */}
        {grepp.id === "nando" && (
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Nivåskalan — eleven väljer och klättrar
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
              {NANDO_NIVAER.map((niva) => (
                <div
                  key={niva.namn}
                  className={cn("rounded-2xl border-2 p-4", niva.farg)}
                >
                  <p className="text-lg font-bold">{niva.namn}</p>
                  <p className="mt-1 text-sm leading-snug opacity-80">
                    {niva.beskrivning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
