"use client";

import { useState } from "react";
import { Plus, X, Printer, Sparkles, Check } from "lucide-react";

/* Klassens slut-manifest — sju punkter, en per lektion. Klassen formulerar
 * tillsammans en avslutande överenskommelse. Förslag per dimension finns,
 * man kan skriva egen.
 */

interface DimensionPunkt {
  num: number;
  label: string;
  question: string;
  forslag: string[];
  color: string;
}

const DIMENSIONS: DimensionPunkt[] = [
  {
    num: 1,
    label: "Berättelsen om AI",
    question: "Vad ska vi komma ihåg om AI:s historia?",
    color: "#a5b4fc",
    forslag: [
      "Vi kommer ihåg att AI är teknik — inte en filmhjälte eller en filmskurk.",
      "Vi följer hur AI förändras — varje halvår dubblas det den klarar.",
      "Vi kommer ihåg att AI byggdes av människor, för människor.",
    ],
  },
  {
    num: 2,
    label: "Vad är AI",
    question: "Vad ska vi komma ihåg om hur AI fungerar?",
    color: "#fb923c",
    forslag: [
      "Vi säger 'AI gissar mönster' — inte 'AI tänker'.",
      "Vi kommer ihåg att bias är data, inte ondska.",
      "Vi granskar träningsdatan när AI ger oss en gissning.",
    ],
  },
  {
    num: 3,
    label: "Använda AI",
    question: "Hur använder VI AI bäst?",
    color: "#10b981",
    forslag: [
      "Vi följer Tänkartrappan: Jag → AI → Jag → Iterera.",
      "Vi skriver tydliga prompts med fem byggblock.",
      "Vi berättar alltid när vi använt AI.",
    ],
  },
  {
    num: 4,
    label: "Granska AI",
    question: "Hur skyddar vi oss mot AI som har fel?",
    color: "#f43f5e",
    forslag: [
      "Vi ställer Tre kontrollfrågor: vem säger? hur kollar jag? vad vinner någon?",
      "Vi verifierar mot oberoende källa — inte bara fråga AI igen.",
      "Vi säger ifrån när vi ser deepfakes spridas.",
    ],
  },
  {
    num: 5,
    label: "Etik och ansvar",
    question: "Vilka etiska val gör VI?",
    color: "#eab308",
    forslag: [
      "Vi ställer Tre etiska frågor: är det ärligt? lär jag mig? snällt?",
      "Vi ser dark patterns för vad de är — och låter oss inte luras.",
      "Vi tänker på miljön — AI drar mycket el.",
    ],
  },
  {
    num: 6,
    label: "Människa och maskin",
    question: "Vad gör människor — som AI inte kan?",
    color: "#8b5cf6",
    forslag: [
      "Vi använder AI som verktyg, inte som vän.",
      "Vi söker mänskligt sällskap när det är jobbigt — inte AI-companions.",
      "Vi skiljer på 'någon som låter snäll' och 'någon som ÄR snäll'.",
    ],
  },
  {
    num: 7,
    label: "Framtid och samhälle",
    question: "Vad lovar VI framtiden?",
    color: "#06b6d4",
    forslag: [
      "Vi är medborgare, inte bara konsumenter — vi har röst.",
      "Vi använder vår agens — vi formar framtiden, inte tvärtom.",
      "Vi delar vad vi vet om AI med andra som inte fått chansen att lära sig.",
    ],
  },
];

interface Loop {
  num: number;
  text: string;
}

export function SlutManifest({
  accentHex = "#06b6d4",
}: {
  accentHex?: string;
}) {
  const [loften, setLoften] = useState<Loop[]>([]);
  const [inputs, setInputs] = useState<Record<number, string>>({});

  const setLoofte = (num: number, text: string) => {
    const t = text.trim();
    if (!t) return;
    setLoften((prev) => {
      const filtered = prev.filter((l) => l.num !== num);
      return [...filtered, { num, text: t }].sort((a, b) => a.num - b.num);
    });
    setInputs((p) => ({ ...p, [num]: "" }));
  };

  const remove = (num: number) => {
    setLoften((prev) => prev.filter((l) => l.num !== num));
  };

  const print = () => {
    if (typeof window !== "undefined") window.print();
  };

  const completed = loften.length;

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-[var(--ms-text)]"
        style={{ background: accentHex }}
      >
        <Sparkles className="h-4 w-4" />
        <div className="ms-mono font-bold">KLASSENS SLUT-MANIFEST · 7 LÖFTEN</div>
      </div>

      <div className="p-6">
        <p className="mb-5 text-sm leading-relaxed text-[var(--ms-text-body)]">
          Klassen formulerar <strong className="text-[var(--ms-text)]">ett löfte per lektion</strong> — sju
          totalt. Klicka på förslag eller skriv egna. Sätts upp som affisch i
          klassrummet och blir referenspunkt under hela året.
        </p>

        {/* Statusbar */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex-1">
            <div className="ms-mono mb-1 flex items-center justify-between text-[var(--ms-text-muted)]">
              <span>FRAMSTEG</span>
              <span>{completed} / 7</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--ms-bg-card)]">
              <div
                className="h-2 transition-all duration-500"
                style={{
                  width: `${(completed / 7) * 100}%`,
                  background: accentHex,
                }}
              />
            </div>
          </div>
          {completed === 7 && (
            <button
              type="button"
              onClick={print}
              className="ms-btn ms-btn-secondary"
            >
              <Printer className="h-4 w-4" />
              Skriv ut
            </button>
          )}
        </div>

        {/* Sju dimensioner */}
        <ol className="space-y-4">
          {DIMENSIONS.map((dim) => {
            const existing = loften.find((l) => l.num === dim.num);
            const done = !!existing;
            const remainingForslag = dim.forslag.filter(
              (f) => !loften.some((l) => l.text === f)
            );
            return (
              <li
                key={dim.num}
                className="rounded-xl border bg-[var(--ms-bg-card)] p-5"
                style={{
                  borderColor: done ? dim.color : "var(--ms-border)",
                  borderLeftWidth: "4px",
                  borderLeftColor: dim.color,
                }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-mono text-sm font-bold ${
                      done ? "text-[var(--ms-bg)]" : "text-[var(--ms-text)]"
                    }`}
                    style={{
                      background: done ? dim.color : "var(--ms-border)",
                    }}
                  >
                    {done ? <Check className="h-4 w-4" /> : dim.num}
                  </span>
                  <div className="flex-1">
                    <div
                      className="ms-mono"
                      style={{ color: dim.color }}
                    >
                      L{dim.num} · {dim.label.toUpperCase()}
                    </div>
                    <div className="font-semibold text-[var(--ms-text)]">{dim.question}</div>
                  </div>
                </div>

                {existing ? (
                  <div className="flex items-start gap-2 rounded-lg bg-[var(--ms-bg-subtle)] p-3">
                    <p className="flex-1 leading-relaxed text-[var(--ms-text)]">
                      &ldquo;{existing.text}&rdquo;
                    </p>
                    <button
                      type="button"
                      onClick={() => remove(dim.num)}
                      className="rounded p-1 text-[var(--ms-text-muted)] hover:bg-[var(--ms-border)] hover:text-rose-300"
                      aria-label="Ändra löfte"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setLoofte(dim.num, inputs[dim.num] ?? "");
                      }}
                      className="mb-3 flex gap-2"
                    >
                      <input
                        type="text"
                        value={inputs[dim.num] ?? ""}
                        onChange={(e) =>
                          setInputs((p) => ({ ...p, [dim.num]: e.target.value }))
                        }
                        placeholder={`Skriv eget löfte för ${dim.label.toLowerCase()}…`}
                        className="flex-1 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-3 py-2 text-sm text-[var(--ms-text)] placeholder-[var(--ms-text-dim)] outline-none focus:border-white"
                      />
                      <button
                        type="submit"
                        disabled={!inputs[dim.num]?.trim()}
                        className="ms-btn ms-btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Sätt
                      </button>
                    </form>
                    {remainingForslag.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {remainingForslag.map((f, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setLoofte(dim.num, f)}
                            className="rounded-md border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-3 py-2 text-left text-xs text-[var(--ms-text-body)] transition-all hover:border-[var(--ms-text)]/40 hover:text-[var(--ms-text)]"
                          >
                            + {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ol>

        {completed === 7 && (
          <div
            className="ms-fadein mt-6 rounded-lg border p-5"
            style={{
              borderColor: `${accentHex}80`,
              background: `${accentHex}10`,
            }}
          >
            <div
              className="ms-mono mb-2"
              style={{ color: accentHex }}
            >
              MANIFESTET ÄR KOMPLETT
            </div>
            <p className="leading-relaxed text-[var(--ms-text)]">
              Sätt upp det i klassrummet. Återkom till det när någon glömmer.
              Det här är vad <em>er</em> klass står för.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
