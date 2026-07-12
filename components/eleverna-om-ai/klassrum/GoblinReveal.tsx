"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

// Tre riktiga chattutbyten från goblin-våren 2026 — visas ett i taget,
// avslöjandet kommer sist. Byggd för projektor: stor text, en knapp.

interface Utbyte {
  fraga: string;
  svar: string;
}

const UTBYTEN: Utbyte[] = [
  {
    fraga: "Varför kör min kod så långsamt?",
    svar: "Din loop skapar en ny lista varje varv. Lämna inte den här prestandagoblinen obevakad — den växer.",
  },
  {
    fraga: "Vilka kamerainställningar funkar för mörkerfoto?",
    svar: "Höj ISO till 3200 och öppna bländaren. Eller testa att aktivera smutsigt neon-gremlinläge för stämningen.",
  },
  {
    fraga: "Kan du sammanfatta den här artikeln?",
    svar: "Absolut. Vill du ha en ännu kortare goblinversion?",
  },
];

function AnvandarBubbla({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="pr-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
        Användare
      </span>
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-teal-600 px-5 py-4 text-lg leading-relaxed text-white shadow-sm sm:text-xl">
        {text}
      </div>
    </div>
  );
}

function AiBubbla({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="pl-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
        AI
      </span>
      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-5 py-4 text-lg leading-relaxed text-gray-900 shadow-sm sm:text-xl">
        {text}
      </div>
    </div>
  );
}

export function GoblinReveal() {
  // 1–3 = antal synliga utbyten, 4 = kärnmeningen avslöjad
  const [steg, setSteg] = useState(1);

  const allaVisade = steg >= UTBYTEN.length;
  const avslojat = steg > UTBYTEN.length;

  return (
    <div className="space-y-6">
      <div className="space-y-8">
        {UTBYTEN.slice(0, Math.min(steg, UTBYTEN.length)).map((utbyte) => (
          <div key={utbyte.fraga} className="space-y-3">
            <AnvandarBubbla text={utbyte.fraga} />
            <AiBubbla text={utbyte.svar} />
          </div>
        ))}
      </div>

      {avslojat && (
        <div className="rounded-2xl border-2 border-teal-300 bg-teal-50 p-6 text-center sm:p-10">
          <p className="text-2xl font-bold leading-snug text-teal-900 sm:text-4xl">
            ”AI:n suger åt sig konstigheterna i det den tränats på.”
          </p>
          <p className="mt-5 text-base leading-relaxed text-teal-800/80 sm:text-lg">
            OpenAI:s utredning: ett nördigt personlighetsläge stod för 2,5 % av
            svaren — men två tredjedelar av goblinerna.
          </p>
        </div>
      )}

      <div className="flex justify-center pt-2">
        {avslojat ? (
          <button
            type="button"
            onClick={() => setSteg(1)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-lg font-semibold text-gray-700 transition hover:border-teal-300 hover:text-teal-700"
          >
            <RotateCcw className="h-5 w-5" />
            Börja om
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSteg((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-teal-700"
          >
            {allaVisade ? "Varför då?" : "Nästa"}
            <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
