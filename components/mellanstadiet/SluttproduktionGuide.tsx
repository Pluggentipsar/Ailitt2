"use client";

import { useState } from "react";
import {
  Image as ImageIcon,
  Mic,
  Video,
  Check,
  Info,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* Sluttproduktion-guide — eleven väljer 1 av 3 format. Per format:
 * tips, krav, exempel-struktur. Inte ett spel — en stödkomponent inför
 * elevens egna skapande.
 */

interface Format {
  id: string;
  label: string;
  icon: LucideIcon;
  duration: string;
  intro: string;
  innehall: string[];
  tips: string[];
  ai: string;
  color: string;
}

const FORMATS: Format[] = [
  {
    id: "affisch",
    label: "Affisch — Min syn på AI",
    icon: ImageIcon,
    duration: "A3 eller större",
    intro:
      "Du gör en visuell affisch med din syn på AI. Bilder och text blandas. Hängs upp på skolan.",
    innehall: [
      "En tydlig titel",
      "Tre saker du UPPSKATTAR med AI",
      "Tre saker du OROAR DIG för",
      "Ett LÖFTE till dig själv",
    ],
    tips: [
      "Använd färg per kategori — t.ex. grönt för uppskattning, rött för oro",
      "Inga väggar med text — luft är viktigt för läsbarhet",
      "Använd egna bilder, AI-bilder, eller en blandning",
      "Skriv stort så folk kan läsa från avstånd",
    ],
    ai:
      "Du får använda AI för bilder, men måste märka dem 'AI-bild' tydligt — och berätta vilka prompts du skrev.",
    color: "#a5b4fc",
  },
  {
    id: "podd",
    label: "Mini-podd — Brev till mig själv 2030",
    icon: Mic,
    duration: "1–2 min",
    intro:
      "Du spelar in ett kort brev till dig själv om fem år. Vad ska du komma ihåg om AI? Lyssnaren är du själv 2030.",
    innehall: [
      "Vad ska du (lyssnaren 2030) komma ihåg om AI?",
      "Vad är ditt LÖFTE till dig själv?",
      "Vad hoppas du AI hjälpt dig med?",
      "Vad är du säker på att AI INTE gjort?",
    ],
    tips: [
      "Spela in i ett tyst rum — kök eller sovrum funkar",
      "Använd din mobil eller skoldator",
      "Tala långsamt och lugnt — du har bara 1–2 min",
      "Skriv ner vad du vill säga först — improviserade poddar låter ofta otydliga",
      "Lyssna igenom själv innan du lämnar in",
    ],
    ai:
      "Du får använda AI för att brainstorma idéer eller granska ditt manus. Inte för att skriva inspelningen åt dig — det är DIN röst.",
    color: "#fcd34d",
  },
  {
    id: "sketch",
    label: "Sketch eller kort film",
    icon: Video,
    duration: "1–3 min",
    intro:
      "Du gör en kort film eller sketch — ensam eller i grupp — som illustrerar en lektion du tyckte var särskilt viktig.",
    innehall: [
      "En lektion (1–7) du valt — varför just den?",
      "En tydlig scen som visar lektionens kärna",
      "Något folk minns — humor, drama, eller tankeställare",
      "Slut: vad du vill att tittaren ska KÄNNA eller TÄNKA",
    ],
    tips: [
      "Filma i landskapsläge (16:9), inte porträtt",
      "Använd undertexter — många tittar utan ljud",
      "Bra ljud > bra bild. Sätt mobilen nära den som pratar.",
      "Klipp hårt — varje sekund ska ha mening",
      "Visa upp sketchen för någon innan du lämnar in",
    ],
    ai:
      "AI kan hjälpa med manus, idéer, undertexter. Inte ersätta din egen prestation — det är ni som spelar.",
    color: "#10b981",
  },
];

export function SluttproduktionGuide({
  accentHex = "#06b6d4",
}: {
  accentHex?: string;
}) {
  const [open, setOpen] = useState<string>("affisch");

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-white"
        style={{ background: accentHex }}
      >
        <Info className="h-4 w-4" />
        <div className="ms-mono font-bold">
          SLUTTPRODUKTION · VÄLJ ETT AV TRE FORMAT
        </div>
      </div>

      <div className="p-6">
        <p className="mb-5 text-sm leading-relaxed text-[#cbd5e1]">
          Detta är ditt sista uppdrag i kursen. Du väljer{" "}
          <strong className="text-white">ett</strong> av tre format. Allt får
          använda AI som verktyg — men du måste{" "}
          <strong className="text-white">berätta hur</strong> i din process.
        </p>

        {/* Format-tabs */}
        <div className="mb-5 grid gap-2 sm:grid-cols-3">
          {FORMATS.map((f) => {
            const Icon = f.icon;
            const isOpen = open === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setOpen(f.id)}
                className={`group rounded-lg border p-4 text-left transition-all ${
                  isOpen
                    ? "scale-105 shadow-lg"
                    : "border-[#243248] hover:border-white/40"
                }`}
                style={{
                  borderColor: isOpen ? f.color : undefined,
                  background: isOpen
                    ? `linear-gradient(135deg, ${f.color}25, ${f.color}10)`
                    : "#1a2235",
                }}
                aria-pressed={isOpen}
              >
                <Icon
                  className="mb-2 h-6 w-6"
                  style={{ color: f.color }}
                />
                <div
                  className="ms-mono mb-1 text-xs"
                  style={{ color: f.color }}
                >
                  FORMAT
                </div>
                <div className="font-bold leading-tight text-white">
                  {f.label}
                </div>
                <div className="ms-mono mt-1 text-xs text-[#94a3b8]">
                  {f.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalj */}
        {(() => {
          const f = FORMATS.find((x) => x.id === open)!;
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              className="ms-fadein rounded-xl border bg-[#1a2235] p-6"
              style={{ borderColor: `${f.color}80` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: `${f.color}20` }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: f.color }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{f.label}</h3>
                  <div className="ms-mono text-[#94a3b8]">{f.duration}</div>
                </div>
              </div>

              <p className="mb-5 leading-relaxed text-[#e6edf7]">{f.intro}</p>

              <div className="mb-5">
                <div
                  className="ms-mono mb-2"
                  style={{ color: f.color }}
                >
                  INNEHÅLL — DETTA SKA FINNAS MED
                </div>
                <ul className="space-y-1.5">
                  {f.innehall.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[#cbd5e1]"
                    >
                      <Check
                        className="mt-1 h-4 w-4 flex-none"
                        style={{ color: f.color }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <div
                  className="ms-mono mb-2"
                  style={{ color: f.color }}
                >
                  TIPS
                </div>
                <ul className="space-y-1.5">
                  {f.tips.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#cbd5e1]"
                    >
                      <span style={{ color: f.color }}>→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-4">
                <div className="ms-mono mb-1 text-[#fcd34d]">
                  AI-ANVÄNDNING
                </div>
                <p className="text-sm leading-relaxed text-[#fde68a]">
                  {f.ai}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
