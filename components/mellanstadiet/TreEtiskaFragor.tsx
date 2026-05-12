"use client";

import { useState } from "react";
import { BookOpen, Heart, Sparkles } from "lucide-react";

/* Visualisering av Joel Rangsjös tre etiska frågor — interaktiv där eleven
 * kan klicka för att se exempel + djupare förklaring per fråga.
 */

const FRAGOR = [
  {
    id: "ärligt",
    icon: BookOpen,
    color: "#a5b4fc",
    n: "1",
    title: "Är det ärligt?",
    short: "Säger jag som det är?",
    description:
      "Berättar jag att jag använt AI? Pretender jag inte att något är mitt om det är AI:s? Är jag tydlig med vad jag gjort själv och vad AI hjälpt med?",
    examples: [
      'I skoluppsatsen: "Jag använde ChatGPT för att brainstorma idéer. Texten skrev jag själv."',
      'I bildposten: "AI-genererad bild" som tagg.',
      'I diskussion: "Jag fick det här tipset från en AI — har inte verifierat ännu."',
    ],
  },
  {
    id: "lärande",
    icon: Sparkles,
    color: "#fcd34d",
    n: "2",
    title: "Lär jag mig något?",
    short: "Blir jag smartare av detta?",
    description:
      "Tränar jag min egen tanke när jag använder AI? Eller blir jag beroende av att den tänker åt mig? Ger AI-användningen mig ny förståelse — eller bara ett färdigt svar?",
    examples: [
      'Bra: "Be AI förklara begrepp + skriv egen sammanfattning."',
      'Bra: "Be AI om olika perspektiv + bilda egen åsikt."',
      'Dåligt: "Be AI skriva läxan + kopiera utan att läsa."',
    ],
  },
  {
    id: "snällt",
    icon: Heart,
    color: "#f43f5e",
    n: "3",
    title: "Är det snällt mot andra?",
    short: "Hur påverkar mitt val andra?",
    description:
      "Påverkar min AI-användning andra negativt? Tränar AI på arbeten som någon ägt? Slukar mitt val mer energi/vatten än det behöver? Får andra del av det jag skapar — eller hamnar de i AI:s skugga?",
    examples: [
      'Energi: "10× mer el än Google-sök — för en triviafråga?"',
      'Upphovsrätt: "Använder jag AI som tränats på konstnärers verk?"',
      'Människor: "Pratar jag med AI istället för en kompis som behöver mig?"',
    ],
  },
];

export function TreEtiskaFragor({ accentHex = "#eab308" }: { accentHex?: string }) {
  const [active, setActive] = useState<string>("ärligt");
  const f = FRAGOR.find((x) => x.id === active)!;
  const Icon = f.icon;

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="ms-mono px-6 py-2 font-bold text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        TRE ETISKA FRÅGOR · KLICKA FÖR DJUPDYK
      </div>

      <div className="p-6">
        {/* Tre stora cirklar */}
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {FRAGOR.map((fr) => {
            const isActive = fr.id === active;
            const FrIcon = fr.icon;
            return (
              <button
                key={fr.id}
                type="button"
                onClick={() => setActive(fr.id)}
                className={`group flex flex-col items-center gap-2 rounded-xl border p-5 text-center transition-all ${
                  isActive
                    ? "scale-105 shadow-lg"
                    : "border-[var(--ms-border)] hover:border-[var(--ms-text)]/30"
                }`}
                style={{
                  borderColor: isActive ? fr.color : undefined,
                  background: isActive
                    ? `linear-gradient(135deg, ${fr.color}25, ${fr.color}10)`
                    : "var(--ms-bg-card)",
                }}
                aria-pressed={isActive}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[var(--ms-bg)]"
                  style={{ background: fr.color }}
                  aria-hidden
                >
                  <FrIcon className="h-6 w-6" />
                </span>
                <div
                  className="ms-mono text-xs"
                  style={{ color: fr.color }}
                >
                  FRÅGA {fr.n}
                </div>
                <div className="font-bold text-[var(--ms-text)]">{fr.title}</div>
                <div className="text-xs italic text-[var(--ms-text-muted)]">{fr.short}</div>
              </button>
            );
          })}
        </div>

        {/* Detalj */}
        <div
          key={active}
          className="ms-fadein rounded-lg border bg-[var(--ms-bg-card)] p-5"
          style={{ borderColor: `${f.color}80` }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Icon className="h-4 w-4" style={{ color: f.color }} />
            <span className="ms-mono" style={{ color: f.color }}>
              FRÅGA {f.n} · {f.title.toUpperCase()}
            </span>
          </div>
          <p className="leading-relaxed text-[var(--ms-text)]">{f.description}</p>
          <div className="mt-4">
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">EXEMPEL</div>
            <ul className="space-y-1.5">
              {f.examples.map((ex, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--ms-text-body)]"
                >
                  <span style={{ color: f.color }}>→</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
