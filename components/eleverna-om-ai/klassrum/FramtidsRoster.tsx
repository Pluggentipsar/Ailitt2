"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

const SCENARIER = [
  "AI:n väljer varorna i din närbutik",
  "AI:n anställer butikens personal",
  "AI:n är din chef på ditt första extrajobb",
  "AI:n rättar dina prov",
  "AI:n avgör vem som kommer in på skolan",
  "AI:n är din kurator",
  "AI:n är rektor",
  "AI:n flyger planet du sitter i",
];

const ALTERNATIV: { etikett: string; klass: string }[] = [
  {
    etikett: "Acceptera",
    klass:
      "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
  },
  {
    etikett: "Acceptera med villkor",
    klass: "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100",
  },
  {
    etikett: "Vägra",
    klass: "border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100",
  },
];

const SAMTALSFRAGOR = [
  "Vilka jobb vill vi att människor gör — även om AI kan?",
  "Vad är värt att lära sig — även om en chatbot redan kan det?",
];

function nollstallda(): number[][] {
  return SCENARIER.map(() => [0, 0, 0]);
}

export function FramtidsRoster() {
  const [roster, setRoster] = useState<number[][]>(nollstallda);

  const rosta = (rad: number, kolumn: number) => {
    setRoster((prev) =>
      prev.map((r, i) =>
        i === rad ? r.map((v, j) => (j === kolumn ? v + 1 : v)) : r
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Röstningen */}
      <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Klassen räcker upp händer — läraren klickar
          </p>
          <button
            onClick={() => setRoster(nollstallda())}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" />
            Nollställ
          </button>
        </div>

        <div className="mt-6 divide-y divide-gray-100">
          {SCENARIER.map((scenario, rad) => (
            <div
              key={scenario}
              className="flex flex-col gap-3 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
            >
              <p className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl lg:max-w-md">
                {scenario}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {ALTERNATIV.map((alternativ, kolumn) => (
                  <button
                    key={alternativ.etikett}
                    onClick={() => rosta(rad, kolumn)}
                    className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-base font-semibold transition active:scale-95 sm:text-lg ${alternativ.klass}`}
                  >
                    {alternativ.etikett}
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-1.5 font-mono text-base font-bold shadow-sm">
                      {roster[rad][kolumn]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Samtalsfrågorna */}
      <div className="grid gap-4 sm:grid-cols-2">
        {SAMTALSFRAGOR.map((fraga) => (
          <div
            key={fraga}
            className="rounded-2xl border-l-8 border-blue-500 bg-blue-50 p-6 shadow-lg sm:p-8"
          >
            <p className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              {fraga}
            </p>
          </div>
        ))}
      </div>

      {/* Avslutningsmeningen */}
      <div className="rounded-2xl bg-gray-900 p-8 shadow-lg sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Avsluta i en mening
        </p>
        <p className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
          En AI-chef är okej när{" "}
          <span className="text-teal-300">___</span> men aldrig när{" "}
          <span className="text-teal-300">___</span>.
        </p>
      </div>
    </div>
  );
}
