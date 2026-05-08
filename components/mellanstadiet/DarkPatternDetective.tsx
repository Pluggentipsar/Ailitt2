"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Eye,
  Trophy,
} from "lucide-react";

/* Dark Pattern Detective — eleven ser realistiska UI-mockups (i kod, inte
 * Figma) och ska klicka på de element som är dark patterns. Avslöjar
 * sedan facit + förklaring av varje dark pattern.
 */

interface ClickTarget {
  id: string;
  /** Beskrivning av vad eleven ser */
  area: string;
  /** Är det en dark pattern? */
  isDark: boolean;
  /** Vad gör/försöker den göra */
  explanation: string;
  /** Officiell namn på dark pattern-typen */
  patternName?: string;
}

interface DarkPatternCase {
  id: string;
  title: string;
  description: string;
  /** Vad UI:t handlar om */
  context: string;
  /** Mockup-rendering */
  render: (props: {
    selected: Set<string>;
    revealed: boolean;
    onSelect: (id: string) => void;
    targets: ClickTarget[];
  }) => React.ReactNode;
  targets: ClickTarget[];
}

const CASES: DarkPatternCase[] = [
  {
    id: "loot-box",
    title: "Spel-butik (loot box)",
    context:
      "Du vill köpa en hatt till din avatar. Spelet visar en loot box. Vad är manipulativt här?",
    description: "Hitta minst två dark patterns.",
    targets: [
      {
        id: "lb-timer",
        area: "Tickande timer 'BARA 2 MIN KVAR'",
        isDark: true,
        patternName: "Falsk brådska (urgency)",
        explanation:
          "Timern är artificiell. Erbjudandet kommer tillbaka senare — eller är alltid där. Pressen är konstgjord.",
      },
      {
        id: "lb-others",
        area: '"148 spelare köpte just nu"',
        isDark: true,
        patternName: "Social bevis-manipulation",
        explanation:
          "Siffran kan vara påhittad eller från hela världen genom flera år. Designad för att få dig att känna att 'alla andra' köper.",
      },
      {
        id: "lb-checkbox",
        area: "Förvald 'Dela med vänner'-ruta",
        isDark: true,
        patternName: "Förkryssad ruta (sneak)",
        explanation:
          "Rutan är redan ikryssad. Om du inte tittar noga skickas notiser till alla dina kompisar utan att du verkligen valde det.",
      },
      {
        id: "lb-price",
        area: "Pris 49 kr",
        isDark: false,
        explanation:
          "Priset är synligt och tydligt — det är inte ett dark pattern. (Bra design.)",
      },
      {
        id: "lb-name",
        area: "Föremålsnamn",
        isDark: false,
        explanation:
          "Ett vanligt produktnamn. Inget manipulativt.",
      },
    ],
    render: ({ selected, revealed, onSelect, targets }) => {
      const tFor = (id: string) => targets.find((t) => t.id === id)!;
      const sel = (id: string) => selected.has(id);
      const isCorrect = (id: string) => {
        if (!revealed) return undefined;
        const t = tFor(id);
        return t.isDark === sel(id);
      };

      const stateStyle = (id: string) => {
        const correct = isCorrect(id);
        if (!revealed) {
          return sel(id)
            ? "ring-2 ring-[#fcd34d] ring-offset-2 ring-offset-[#0d1322]"
            : "";
        }
        const t = tFor(id);
        if (t.isDark && sel(id)) return "ring-2 ring-emerald-400";
        if (t.isDark && !sel(id)) return "ring-2 ring-amber-400";
        if (!t.isDark && sel(id)) return "ring-2 ring-rose-400";
        return "";
      };

      return (
        <div className="rounded-xl bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-orange-900/20 p-1">
          <div className="rounded-lg bg-[#0a0e1a] p-5 text-white">
            {/* Banner */}
            <div className="ms-mono mb-3 inline-block rounded bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-0.5 text-xs font-bold text-white">
              SPEL-BUTIKEN
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h4 className="text-2xl font-bold">Mystery Box</h4>
                <button
                  type="button"
                  onClick={() => onSelect("lb-name")}
                  className={`ms-mono mt-1 inline-block rounded px-2 py-0.5 text-xs ${stateStyle(
                    "lb-name"
                  )}`}
                  style={{ background: sel("lb-name") || revealed ? "#1e293b" : "#334155" }}
                >
                  KAN INNEHÅLLA SÄLLSYNT HATT
                </button>
              </div>

              <button
                type="button"
                onClick={() => onSelect("lb-timer")}
                className={`rounded-md bg-rose-500 px-4 py-2 text-center font-bold text-white animate-pulse ${stateStyle(
                  "lb-timer"
                )}`}
              >
                <div className="ms-mono text-xs opacity-90">BARA</div>
                <div className="text-lg">02:00 KVAR</div>
              </button>
            </div>

            <button
              type="button"
              onClick={() => onSelect("lb-others")}
              className={`mt-3 block w-full rounded-md bg-emerald-500/20 px-3 py-2 text-left text-sm text-emerald-200 ${stateStyle(
                "lb-others"
              )}`}
            >
              <span className="font-bold">148 spelare</span> köpte just nu! 🔥
            </button>

            <div className="mt-4 flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
              <button
                type="button"
                onClick={() => onSelect("lb-checkbox")}
                className={`flex items-center gap-2 text-sm ${stateStyle(
                  "lb-checkbox"
                )} rounded p-1`}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded bg-yellow-400 text-[10px] text-black">
                  ✓
                </span>
                <span>Dela med vänner</span>
              </button>
              <button
                type="button"
                onClick={() => onSelect("lb-price")}
                className={`rounded ${stateStyle("lb-price")} bg-yellow-400 px-4 py-2 font-bold text-black`}
              >
                KÖP FÖR 49 KR
              </button>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "subscription",
    title: "Avsluta prenumeration",
    context:
      "Du försöker avsluta din musik-prenumeration. Sajten visar denna bekräftelse. Vad är manipulativt?",
    description: "Hitta minst två dark patterns.",
    targets: [
      {
        id: "sub-stay",
        area: 'Stor grön "STANNA" knapp',
        isDark: true,
        patternName: "Asymmetrisk knappdesign",
        explanation:
          "Knappen är stor, grön (positiv färg) och tydlig. 'Avsluta'-knappen är liten, grå, gömd under. Designad så du klickar fel.",
      },
      {
        id: "sub-cancel",
        area: 'Liten grå "Avsluta ändå"-länk',
        isDark: true,
        patternName: "Gömd huvudfunktion",
        explanation:
          "Den knapp du faktiskt vill använda är gömd som en länk längst ner i grå text. Lätt att missa.",
      },
      {
        id: "sub-guilt",
        area: 'Text "Vi kommer sakna dig så mycket 😢"',
        isDark: true,
        patternName: "Skuldtripp (confirmshaming)",
        explanation:
          "Designat för att få dig att känna dig skyldig. Som om en mjukvara har känslor du behöver ta hänsyn till.",
      },
      {
        id: "sub-stats",
        area: "Stats-rutan om dina lyssnade timmar",
        isDark: false,
        explanation:
          "Bara information. Inte manipulativt — du har faktiskt lyssnat så.",
      },
      {
        id: "sub-warning",
        area: 'Texten "Du förlorar 47 sparade låtar"',
        isDark: true,
        patternName: "Förlustaversion",
        explanation:
          "Säger inte att du behåller dem på Spotify Free. Designad att utlösa förlustkänsla.",
      },
    ],
    render: ({ selected, revealed, onSelect, targets }) => {
      const tFor = (id: string) => targets.find((t) => t.id === id)!;
      const sel = (id: string) => selected.has(id);
      const isCorrect = (id: string) => {
        if (!revealed) return undefined;
        const t = tFor(id);
        return t.isDark === sel(id);
      };

      const stateStyle = (id: string) => {
        const correct = isCorrect(id);
        if (!revealed) {
          return sel(id)
            ? "ring-2 ring-[#fcd34d] ring-offset-2 ring-offset-[#0d1322]"
            : "";
        }
        const t = tFor(id);
        if (t.isDark && sel(id)) return "ring-2 ring-emerald-400";
        if (t.isDark && !sel(id)) return "ring-2 ring-amber-400";
        if (!t.isDark && sel(id)) return "ring-2 ring-rose-400";
        return "";
      };

      return (
        <div className="rounded-xl bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-teal-900/20 p-1">
          <div className="rounded-lg bg-white p-6 text-slate-900">
            <button
              type="button"
              onClick={() => onSelect("sub-guilt")}
              className={`block text-2xl font-bold rounded p-1 ${stateStyle("sub-guilt")}`}
            >
              Vi kommer sakna dig så mycket 😢
            </button>

            <button
              type="button"
              onClick={() => onSelect("sub-stats")}
              className={`mt-3 block rounded-lg ${stateStyle("sub-stats")} w-full bg-slate-100 p-3 text-left`}
            >
              <div className="text-xs uppercase text-slate-500">
                DU HAR
              </div>
              <div className="text-lg font-bold">
                lyssnat 1 247 timmar med oss
              </div>
              <div className="text-sm text-slate-600">
                263 olika artister upptäckta
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelect("sub-warning")}
              className={`mt-2 block w-full rounded-lg ${stateStyle("sub-warning")} bg-rose-50 p-3 text-left text-sm text-rose-700`}
            >
              ⚠ Avslutar du nu förlorar du <strong>47 sparade låtar</strong>{" "}
              och 12 spellistor.
            </button>

            <button
              type="button"
              onClick={() => onSelect("sub-stay")}
              className={`mt-4 w-full rounded-lg ${stateStyle("sub-stay")} bg-emerald-500 py-4 text-lg font-bold text-white shadow-lg`}
            >
              ✓ Stanna kvar (rekommenderas)
            </button>

            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => onSelect("sub-cancel")}
                className={`rounded ${stateStyle("sub-cancel")} text-xs text-slate-400 underline p-1`}
              >
                Avsluta ändå
              </button>
            </div>
          </div>
        </div>
      );
    },
  },
];

export function DarkPatternDetective({
  accentHex = "#eab308",
}: {
  accentHex?: string;
}) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const c = CASES[caseIdx];

  const toggle = (id: string) => {
    if (revealed) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reveal = () => setRevealed(true);

  const reset = () => {
    setSelected(new Set());
    setRevealed(false);
  };

  const next = () => {
    if (caseIdx + 1 >= CASES.length) {
      setCaseIdx(0);
    } else {
      setCaseIdx(caseIdx + 1);
    }
    setSelected(new Set());
    setRevealed(false);
  };

  // Resultatberäkning
  const correctIds = c.targets.filter((t) => t.isDark).map((t) => t.id);
  const found = correctIds.filter((id) => selected.has(id)).length;
  const falseAlarm = c.targets
    .filter((t) => !t.isDark)
    .filter((t) => selected.has(t.id)).length;

  return (
    <div
      className="my-12 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-[#0a0e1a]"
        style={{ background: accentHex }}
      >
        <Eye className="h-4 w-4" />
        <div className="ms-mono font-bold">
          DARK PATTERN DETECTIVE · FALL {caseIdx + 1} / {CASES.length}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-bold text-white">{c.title}</h3>
          <p className="mt-1 text-[#cbd5e1]">{c.context}</p>
          <p className="mt-1 text-sm text-[#94a3b8]">
            <strong className="text-[#fcd34d]">Klicka på</strong> de element du
            tror är manipulativa. {c.description}
          </p>
        </div>

        {/* Mockup */}
        <div className="rounded-xl border border-[#243248] bg-[#0a0e1a] p-2 sm:p-4">
          {c.render({
            selected,
            revealed,
            onSelect: toggle,
            targets: c.targets,
          })}
        </div>

        {/* Action */}
        {!revealed ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-[#94a3b8]">
              {selected.size} markerade.
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={reset}
                disabled={selected.size === 0}
                className="ms-btn ms-btn-secondary"
              >
                <RotateCcw className="h-4 w-4" />
                Töm
              </button>
              <button
                type="button"
                onClick={reveal}
                disabled={selected.size === 0}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Eye className="h-4 w-4" />
                Avslöja
              </button>
            </div>
          </div>
        ) : (
          <div className="ms-fadein space-y-4 border-t border-[#243248] pt-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-center">
                <div className="ms-mono text-emerald-300">HITTADE</div>
                <div className="text-2xl font-bold text-emerald-200">
                  {found} / {correctIds.length}
                </div>
              </div>
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-center">
                <div className="ms-mono text-amber-300">MISSADE</div>
                <div className="text-2xl font-bold text-amber-200">
                  {correctIds.length - found}
                </div>
              </div>
              <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-center">
                <div className="ms-mono text-rose-300">FALSKLARM</div>
                <div className="text-2xl font-bold text-rose-200">
                  {falseAlarm}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {c.targets
                .filter((t) => t.isDark)
                .map((t) => {
                  const wasSel = selected.has(t.id);
                  return (
                    <div
                      key={t.id}
                      className={`rounded-lg border p-3 ${
                        wasSel
                          ? "border-emerald-500/40 bg-emerald-500/5"
                          : "border-amber-500/40 bg-amber-500/5"
                      }`}
                    >
                      <div className="mb-1 flex items-start gap-2">
                        {wasSel ? (
                          <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-4 w-4 flex-none text-amber-400" />
                        )}
                        <div className="flex-1">
                          <div className="font-semibold text-white">
                            {t.patternName} · {t.area}
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-[#cbd5e1]">
                            {t.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={reset}
                className="ms-btn ms-btn-secondary"
              >
                <RotateCcw className="h-4 w-4" />
                Gör om
              </button>
              <button
                type="button"
                onClick={next}
                className="ms-btn ms-btn-primary"
              >
                {caseIdx + 1 === CASES.length ? (
                  <>
                    <Trophy className="h-4 w-4" />
                    Börja om från fall 1
                  </>
                ) : (
                  <>
                    Nästa fall
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
