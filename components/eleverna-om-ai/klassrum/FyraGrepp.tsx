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

// Workshop-paletten i stigande hetta i stället för Tailwinds sky→red.
const NANDO_NIVAER: Array<{ namn: string; beskrivning: string; ton: string }> = [
  { namn: "Extra mild", beskrivning: "AI sammanfattar", ton: "havsblå" },
  { namn: "Mild", beskrivning: "AI jämför förklaringar", ton: "skog" },
  { namn: "Het", beskrivning: "AI utmanar dina idéer", ton: "senap" },
  {
    namn: "Extra het",
    beskrivning: "AI som kritisk expert — du värderar",
    ton: "terrakotta",
  },
];

export function FyraGrepp() {
  const [aktivt, setAktivt] = useState(0);
  const grepp = GREPPEN[aktivt];

  return (
    <div className="mx-auto w-full max-w-[72rem] space-y-[2.5vh]">
      {/* Flikar — icke-linjärt val är hela poängen: läraren hoppar dit
          klassens fråga leder, inte i en förutbestämd ordning. */}
      <div className="flex flex-wrap justify-center gap-2">
        {GREPPEN.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setAktivt(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 font-semibold transition",
              aktivt === i
                ? "border-stone-900 bg-stone-900 text-workshop-canvas"
                : "border-stone-300 bg-white/60 text-stone-600 hover:border-stone-500"
            )}
            style={{ fontSize: "clamp(0.75rem, 1.9vh, 1.35rem)" }}
          >
            <span
              className={cn(
                "font-display",
                aktivt === i ? "text-workshop-canvas" : "text-stone-400"
              )}
              style={{ fontSize: "1.3em" }}
            >
              {i + 1}
            </span>
            {g.titel}
          </button>
        ))}
      </div>

      <div className="space-y-[2vh]">
        <p
          className="mx-auto max-w-[54ch] text-pretty text-center leading-snug text-stone-700"
          style={{ fontSize: "clamp(0.9rem, 2.4vh, 1.9rem)" }}
        >
          {grepp.beskrivning}
        </p>

        <div className="mx-auto max-w-[64rem] space-y-[1.5vh]">
          <div>
            <div
              className="mb-1 uppercase tracking-wider text-stone-500"
              style={{ fontSize: "clamp(0.65rem, 1.5vh, 1rem)" }}
            >
              Eleven
            </div>
            <div
              className="rounded-3xl rounded-bl-md bg-stone-100 px-6 py-4 leading-snug text-stone-800"
              style={{ fontSize: "clamp(0.9rem, 2.5vh, 2rem)" }}
            >
              {grepp.elev}
            </div>
          </div>
          <div>
            <div
              className="mb-1 uppercase tracking-wider text-stone-500"
              style={{ fontSize: "clamp(0.65rem, 1.5vh, 1rem)" }}
            >
              AI
            </div>
            <div
              className="rounded-3xl rounded-br-md px-6 py-4 leading-snug text-stone-800"
              style={{
                background: "var(--workshop-lila-soft)",
                fontSize: "clamp(0.9rem, 2.5vh, 2rem)",
              }}
            >
              {grepp.ai}
            </div>
          </div>
        </div>

        {/* Nivåskalan — bara för Nando-menyn */}
        {grepp.id === "nando" && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {NANDO_NIVAER.map((niva) => (
              <div
                key={niva.namn}
                className="rounded-2xl border-2 bg-white/50 p-3"
                style={{ borderColor: `var(--workshop-${niva.ton})` }}
              >
                <p
                  className="font-bold"
                  style={{
                    color: `var(--workshop-${niva.ton})`,
                    fontSize: "clamp(0.75rem, 1.9vh, 1.3rem)",
                  }}
                >
                  {niva.namn}
                </p>
                <p
                  className="mt-0.5 leading-snug text-stone-600"
                  style={{ fontSize: "clamp(0.65rem, 1.5vh, 1rem)" }}
                >
                  {niva.beskrivning}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
