"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

/* Tänkartrappan-visualisering: fyra steg som en interaktiv trappa.
 * Klicka för att se detaljer och exempel.
 */

const STEPS = [
  {
    num: 1,
    label: "JAG TÄNKER FÖRST",
    short: "Vad vill jag?",
    description:
      "Innan du frågar AI: vad vill du egentligen ha? Vad är din idé? Vad vet du redan? Hoppar du över det här blir du AI:s assistent — det är fel väg. Du är chefen.",
    examples: [
      "Vad är målet med min text?",
      "Vem ska läsa den?",
      "Vad är jag bra på i detta?",
    ],
    color: "#10b981",
  },
  {
    num: 2,
    label: "AI HJÄLPER",
    short: "Tydlig prompt",
    description:
      "Med klar idé kan du nu skriva en tydlig prompt. Be AI om förslag, inspiration, struktur. Inte slutsvar — förslag. Mer detaljer = mer kontroll över resultatet.",
    examples: [
      "Skriv en tydlig instruktion",
      "Be om alternativ ('ge tre versioner')",
      "Berätta vem som ska läsa",
    ],
    color: "#34d399",
  },
  {
    num: 3,
    label: "JAG GRANSKAR",
    short: "Stämmer det?",
    description:
      "Innan du använder AI:s svar: stämmer det? Passar det vad du ville? Vad ändrar du? Vad är ditt i slutprodukten? Du är ansvarig för slutprodukten — AI är assistent, inte författare.",
    examples: [
      "Stämmer fakta?",
      "Låter det som mig?",
      "Vad behöver omformuleras?",
    ],
    color: "#6ee7b7",
  },
  {
    num: 4,
    label: "ITERERA",
    short: "Försök igen",
    description:
      "Det viktigaste steget — och det flest hoppar över. Första svaret är nästan aldrig det bästa. Pröva igen. Ändra ett ord. Be om alternativ. MrBeasts team testar 20+ versioner per thumbnail.",
    examples: [
      "Skriv om prompten",
      "Be om 3 versioner",
      "Bygg vidare på det bästa svaret",
    ],
    color: "#a7f3d0",
  },
];

export function Tankartrappan({ accentHex = "#10b981" }: { accentHex?: string }) {
  const [active, setActive] = useState<number>(1);
  const step = STEPS[active - 1];

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="ms-mono px-6 py-2 font-bold text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        TÄNKARTRAPPAN · JAG → AI → JAG → ITERERA
      </div>

      <div className="grid gap-0 md:grid-cols-[1fr_1.5fr]">
        {/* Vänster: trappan */}
        <div className="border-r border-[var(--ms-border)] p-4">
          <ol className="space-y-2">
            {STEPS.map((s) => {
              const isActive = active === s.num;
              return (
                <li key={s.num}>
                  <button
                    type="button"
                    onClick={() => setActive(s.num)}
                    className={`group flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all ${
                      isActive
                        ? "border-white scale-[1.02] shadow-md"
                        : "border-[var(--ms-border)] hover:border-[var(--ms-text)]/40"
                    }`}
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${s.color}25, ${s.color}10)`
                        : "var(--ms-bg-card)",
                    }}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`flex h-9 w-9 flex-none items-center justify-center rounded-md font-bold text-[var(--ms-bg)]`}
                      style={{ background: s.color }}
                    >
                      {s.num}
                    </span>
                    <div className="flex-1">
                      <div
                        className="ms-mono text-xs"
                        style={{ color: s.color }}
                      >
                        STEG {s.num}
                      </div>
                      <div className="font-semibold text-[var(--ms-text)]">{s.short}</div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 flex-none transition-transform ${
                        isActive ? "rotate-90 text-[var(--ms-text)]" : "text-[var(--ms-text-dim)]"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Höger: detaljer */}
        <div
          key={active}
          className="ms-fadein p-6"
        >
          <div
            className="ms-mono mb-2"
            style={{ color: step.color }}
          >
            STEG {step.num}
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--ms-text)]">
            {step.label}
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--ms-text-body)]">
            {step.description}
          </p>
          <div className="mt-5">
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
              FRÅGOR ATT STÄLLA DIG SJÄLV
            </div>
            <ul className="space-y-1.5">
              {step.examples.map((e) => (
                <li
                  key={e}
                  className="flex gap-2 text-[var(--ms-text)]"
                >
                  <span style={{ color: step.color }}>→</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
