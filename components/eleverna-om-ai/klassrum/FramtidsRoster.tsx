"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

// Live rösträkning för projektorn. Klassen räcker upp händer, läraren
// klickar, siffrorna växer på skärmen — det är det enda momentet här som
// inte går att uttrycka som stegade slides.
//
// Samtalsfrågorna och avslutningsmeningen som tidigare låg i komponenten är
// nu egna slides i klassrumsspåret. De är statiskt innehåll och hör hemma
// där: då följer de med i utskrift och PowerPoint.

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

// Workshop-paletten i stället för Tailwinds emerald/amber/rose — sliden
// ligger på gräddpapper och ska höra ihop med resten av spåret.
const ALTERNATIV: { etikett: string; ton: string }[] = [
  { etikett: "Acceptera", ton: "skog" },
  { etikett: "Med villkor", ton: "senap" },
  { etikett: "Vägra", ton: "terrakotta" },
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
    <div className="mx-auto w-full max-w-[76rem]">
      <div className="mb-[2vh] flex items-center justify-between gap-4">
        <p
          className="uppercase tracking-widest text-stone-500"
          style={{ fontSize: "clamp(0.75rem, 1.8vh, 1.25rem)" }}
        >
          Räck upp händerna — jag klickar
        </p>
        <button
          onClick={() => setRoster(nollstallda())}
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 font-semibold text-stone-600 transition hover:bg-white"
          style={{ fontSize: "clamp(0.7rem, 1.5vh, 1rem)" }}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Nollställ
        </button>
      </div>

      <div className="divide-y divide-stone-300/70">
        {SCENARIER.map((scenario, rad) => (
          <div
            key={scenario}
            className="flex flex-col gap-2 py-[1.2vh] lg:flex-row lg:items-center lg:justify-between lg:gap-6"
          >
            <p
              className="font-medium leading-snug text-stone-800 lg:max-w-[34ch]"
              style={{ fontSize: "clamp(0.95rem, 2.4vh, 2rem)" }}
            >
              {scenario}
            </p>
            <div className="flex shrink-0 gap-2">
              {ALTERNATIV.map((alternativ, kolumn) => (
                <button
                  key={alternativ.etikett}
                  onClick={() => rosta(rad, kolumn)}
                  className="inline-flex items-center gap-2 rounded-full border-2 bg-white/60 px-3 py-1.5 font-semibold transition active:scale-95"
                  style={{
                    fontSize: "clamp(0.7rem, 1.7vh, 1.25rem)",
                    borderColor: `var(--workshop-${alternativ.ton})`,
                    color: `var(--workshop-${alternativ.ton})`,
                  }}
                >
                  {alternativ.etikett}
                  <span
                    className="inline-flex min-w-[1.6em] items-center justify-center rounded-full px-1 font-bold text-white"
                    style={{
                      background: `var(--workshop-${alternativ.ton})`,
                    }}
                  >
                    {roster[rad][kolumn]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
