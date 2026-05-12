"use client";

import { useState } from "react";

/* Visuellt diagram över de fyra vågorna av AI. Klickar man på en våg
 * expanderas den med detaljer och exempel.
 */

interface Vag {
  num: number;
  title: string;
  years: string;
  metaphor: string;
  description: string;
  examples: string[];
  color: string;
}

const VAGOR: Vag[] = [
  {
    num: 1,
    title: "AI som följer regler",
    years: "1956–2000",
    metaphor: "Som en kokbok — följer recept",
    description:
      "Människor programmerade in alla regler i datorn. 'Om motståndaren spelar X, spela Y.' Det fungerade i avgränsade saker som schack — men inte i den riktiga världen.",
    examples: ["Deep Blue (schack, 1997)", "Tidiga sökmotorer", "Tidiga chatbottar"],
    color: "var(--ms-text-dim)",
  },
  {
    num: 2,
    title: "AI som lär sig av exempel",
    years: "2000–2017",
    metaphor: "Som en lärling — tittar på många exempel",
    description:
      "Forskarna kom på en bättre idé: i stället för att skriva alla regler — visa många exempel och låt AI:n hitta mönstren själv.",
    examples: [
      "Spotify-rekommendationer",
      "Google Bilder (känner igen katter)",
      "TikToks flöde",
    ],
    color: "var(--ms-text-muted)",
  },
  {
    num: 3,
    title: "AI som skapar",
    years: "2017–2024",
    metaphor: "Som en uppfinnare — skapar nytt",
    description:
      "År 2017 kom transformer-arkitekturen. Plötsligt kunde AI inte bara känna igen — den kunde skapa. Skriva texter, måla bilder, komponera musik.",
    examples: [
      "ChatGPT (text)",
      "DALL-E, Midjourney (bilder)",
      "Suno (musik)",
      "Sora (video)",
    ],
    color: "#a5b4fc",
  },
  {
    num: 4,
    title: "AI som agerar",
    years: "2024–nu",
    metaphor: "Som en assistent — utför uppdrag",
    description:
      "AI-system slutade bara svara — de började göra. Klicka, läsa filer, köra kod, fatta delbeslut. Vi kallar det agenter.",
    examples: [
      "Claude Code (programmerar)",
      "Computer Use (klickar)",
      "Codex, Devin (kodningsagenter)",
    ],
    color: "#fcd34d",
  },
];

export function VagorDiagram() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="my-10 rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] p-6">
      <div className="ms-mono mb-4 text-[var(--ms-text-muted)]">
        // FYRA VÅGOR · KLICKA FÖR DETALJER
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {VAGOR.map((v) => {
          const isActive = active === v.num;
          return (
            <button
              key={v.num}
              type="button"
              onClick={() => setActive(isActive ? null : v.num)}
              className={`group rounded-lg border p-4 text-left transition-all ${
                isActive
                  ? "scale-105 border-white/60 shadow-lg"
                  : "border-[var(--ms-border)] hover:border-[var(--ms-text)]/30"
              }`}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${v.color}30, ${v.color}10)`
                  : "var(--ms-bg-card)",
              }}
              aria-expanded={isActive}
            >
              <div
                className="ms-mono mb-2 text-xs"
                style={{ color: v.color }}
              >
                VÅG {v.num} · {v.years}
              </div>
              <div className="font-bold leading-tight text-[var(--ms-text)]">
                {v.title}
              </div>
              <div className="mt-2 text-xs italic text-[var(--ms-text-muted)]">
                {v.metaphor}
              </div>
            </button>
          );
        })}
      </div>

      {active !== null && (
        <div
          key={active}
          className="ms-fadein mt-4 rounded-lg border bg-[var(--ms-bg-card)] p-5"
          style={{
            borderColor: `${VAGOR[active - 1].color}60`,
          }}
        >
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
            VÅG {active} · {VAGOR[active - 1].title.toUpperCase()}
          </div>
          <p className="leading-relaxed text-[var(--ms-text)]">
            {VAGOR[active - 1].description}
          </p>
          <div className="mt-3">
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">EXEMPEL</div>
            <div className="flex flex-wrap gap-2">
              {VAGOR[active - 1].examples.map((ex) => (
                <span
                  key={ex}
                  className="rounded-md border px-2 py-1 text-xs"
                  style={{
                    background: `${VAGOR[active - 1].color}15`,
                    borderColor: `${VAGOR[active - 1].color}40`,
                    color: VAGOR[active - 1].color,
                  }}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
