"use client";

import { useState } from "react";
import {
  Search,
  Check,
  X,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Trophy,
  AlertTriangle,
} from "lucide-react";

/* Hallucinationsjakten — eleven läser en kort AI-genererad text och
 * klickar på de meningar/fakta som är påhittade. Slutet visar facit
 * + förklaring per fynd.
 */

interface Sentence {
  id: string;
  text: string;
  /** Är denna mening en hallucination? */
  isHallucination: boolean;
  /** Förklaring som visas vid avslöjandet */
  explanation: string;
}

interface Case {
  id: string;
  title: string;
  prompt: string;
  intro: string;
  sentences: Sentence[];
}

const CASES: Case[] = [
  {
    id: "vasa",
    title: "AI-text om Vasaskeppet",
    prompt: "Skriv en kort faktatext om Vasaskeppet för åk 5",
    intro:
      "AI:n fick ovanstående prompt. Här är vad den producerade. Klicka på de meningar du tror är påhittade. Tänk på vad du själv vet — och vad som låter 'för specifikt'.",
    sentences: [
      {
        id: "vasa-1",
        text: "Vasaskeppet byggdes på order av kung Gustav II Adolf på 1620-talet.",
        isHallucination: false,
        explanation:
          "Sant. Skeppet beställdes 1625 och byggdes 1626–1628.",
      },
      {
        id: "vasa-2",
        text: "Skeppet sjönk på sin jungfruresa den 10 augusti 1628 efter bara 1300 meter.",
        isHallucination: false,
        explanation:
          "Sant. En av de mest kända detaljerna om Vasa.",
      },
      {
        id: "vasa-3",
        text: "Ombord fanns 437 sjömän, varav 64 var kvinnor från ön Gotland.",
        isHallucination: true,
        explanation:
          "PÅHITTAT. AI har gissat siffror som låter trovärdiga. Faktiskt antal ombord var ca 150 personer. Det finns inga uppgifter om kvinnor från Gotland.",
      },
      {
        id: "vasa-4",
        text: "Vasaskeppet hade 64 kanoner.",
        isHallucination: false,
        explanation:
          "Sant. Skeppet var överlastat med tunga kanoner — en bidragande orsak till att det sjönk.",
      },
      {
        id: "vasa-5",
        text: "Skeppet bärgades år 1961 av en svensk arkeolog vid namn Lars-Erik Hammar.",
        isHallucination: true,
        explanation:
          "PÅHITTAT NAMN. Skeppet bärgades 24 april 1961 — det stämmer. Men 'Lars-Erik Hammar' finns inte. Den verkliga personen som drev arbetet hette Anders Franzén. AI hittade på ett trovärdigt namn.",
      },
      {
        id: "vasa-6",
        text: "Idag finns Vasaskeppet på Vasamuseet i Stockholm, som öppnade 1990.",
        isHallucination: false,
        explanation:
          "Sant. Vasamuseet på Djurgården invigdes 15 juni 1990.",
      },
      {
        id: "vasa-7",
        text: "Museet är världens mest besökta marin-museum med över 1,5 miljoner besökare per år.",
        isHallucination: false,
        explanation:
          "Sant. Vasamuseet är ett av Sveriges mest besökta museum, ofta det enskilt mest besökta.",
      },
      {
        id: "vasa-8",
        text: "På Vasaskeppet finns en målning som visar kung Gustav II Adolf med sin fru, drottning Maria Eleonora, och deras tre barn.",
        isHallucination: true,
        explanation:
          "PÅHITTAT. Det finns mängder av snidade figurer på skeppet, men ingen sådan målning. AI har skapat en detalj som låter trovärdig — det här är typiskt hallucination.",
      },
    ],
  },
  {
    id: "fotboll",
    title: "AI-text om svenska fotbollslandslaget",
    prompt: "Skriv om svenska herrlandslagets framgångar i fotboll",
    intro:
      "Klicka på de meningar du tror är hallucinerade. Tänk på vad du själv vet om svensk fotboll.",
    sentences: [
      {
        id: "fb-1",
        text: "Sverige tog brons i fotbolls-VM 1958, som Sverige själva arrangerade.",
        isHallucination: false,
        explanation:
          "Nästan rätt — Sverige tog SILVER 1958 (förlorade finalen mot Brasilien 5-2). Men ja, mästerskapet hölls i Sverige. AI tog fel medalj — vanlig hallucinations-typ.",
      },
      {
        id: "fb-2",
        text: "Zlatan Ibrahimović debuterade i landslaget år 2001 mot Färöarna.",
        isHallucination: false,
        explanation:
          "Sant. 31 januari 2001 mot Färöarna i en träningsmatch.",
      },
      {
        id: "fb-3",
        text: "Sverige vann bronsmedalj i VM 1994 i USA.",
        isHallucination: false,
        explanation:
          "Sant. En av de största framgångarna — laget kallades 'bronslaget'.",
      },
      {
        id: "fb-4",
        text: "Sveriges målvakt i bronsmatchen 1994 hette Thomas Ravelli och hade 47 landskamper då.",
        isHallucination: true,
        explanation:
          "DELVIS PÅHITTAT. Ravelli var målvakt 1994 — det stämmer. Men antalet landskamper '47' är AI:s gissning. Faktiska siffran var betydligt högre. AI fyller i specifika siffror som låter rimliga men inte är verifierade.",
      },
      {
        id: "fb-5",
        text: "I VM 2018 förlorade Sverige kvartsfinalen mot England med 2-1.",
        isHallucination: true,
        explanation:
          "FEL RESULTAT. Sverige förlorade mot England — det stämmer. Men resultatet var 2-0, inte 2-1. AI ändrar detaljer som låter trovärdiga.",
      },
      {
        id: "fb-6",
        text: "Sveriges nuvarande förbundskapten är Jon Dahl Tomasson.",
        isHallucination: false,
        explanation:
          "Sant per slutet av 2025/2026. Han tillträdde i februari 2024 efter Janne Andersson.",
      },
      {
        id: "fb-7",
        text: "Friends Arena i Solna har plats för 50 000 åskådare och invigdes 2012.",
        isHallucination: false,
        explanation:
          "Sant. Invigdes 14 november 2012, kapacitet ca 50 000 vid fotboll.",
      },
      {
        id: "fb-8",
        text: "Anders Svensson är Sveriges genom tiderna mest landslagsmeriterade spelare med 148 landskamper.",
        isHallucination: false,
        explanation:
          "Sant. Anders Svensson har flest landskamper för Sverige (148 för herrar).",
      },
    ],
  },
];

export function Hallucinationsjakten({
  accentHex = "#f43f5e",
}: {
  accentHex?: string;
}) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const c = CASES[caseIdx];

  const toggle = (id: string) => {
    if (revealed) return;
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reveal = () => setRevealed(true);

  const reset = () => {
    setMarked(new Set());
    setRevealed(false);
  };

  const next = () => {
    if (caseIdx + 1 >= CASES.length) {
      reset();
      setCaseIdx(0);
      return;
    }
    setCaseIdx(caseIdx + 1);
    setMarked(new Set());
    setRevealed(false);
  };

  // Beräkna träffsäkerhet
  const truePositive = c.sentences.filter(
    (s) => s.isHallucination && marked.has(s.id)
  ).length;
  const falsePositive = c.sentences.filter(
    (s) => !s.isHallucination && marked.has(s.id)
  ).length;
  const totalHallucinations = c.sentences.filter((s) => s.isHallucination).length;
  const score = truePositive - falsePositive;

  return (
    <div
      className="my-12 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3"
        style={{ background: accentHex }}
      >
        <Search className="h-4 w-4 text-[var(--ms-bg)]" />
        <div className="ms-mono font-bold text-[var(--ms-bg)]">
          HALLUCINATIONSJAKTEN · FALL {caseIdx + 1} / {CASES.length}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">PROMPTEN VAR</div>
          <p className="font-mono text-sm text-[var(--ms-text-body)]">
            &ldquo;{c.prompt}&rdquo;
          </p>
        </div>

        <h3 className="text-xl font-bold text-[var(--ms-text)]">{c.title}</h3>

        <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">{c.intro}</p>

        {/* Texten med klickbara meningar */}
        <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5">
          <div className="space-y-3 leading-relaxed text-[var(--ms-text)]">
            {c.sentences.map((s) => {
              const isMarked = marked.has(s.id);
              const status = revealed
                ? s.isHallucination && isMarked
                  ? "tp"
                  : !s.isHallucination && isMarked
                  ? "fp"
                  : s.isHallucination && !isMarked
                  ? "fn"
                  : "tn"
                : isMarked
                ? "marked"
                : "unmarked";

              const stateClass = {
                tp: "border-emerald-500/60 bg-emerald-500/15 text-emerald-50",
                fp: "border-rose-500/60 bg-rose-500/15 text-rose-50",
                fn: "border-amber-500/60 bg-amber-500/15 text-amber-50",
                tn: "border-[var(--ms-border)] bg-[var(--ms-bg)] text-[var(--ms-text-muted)]",
                marked: "border-[#fcd34d] bg-[#fcd34d]/10 text-[var(--ms-text)]",
                unmarked: "border-[var(--ms-border)] bg-transparent text-[var(--ms-text)]",
              }[status];

              return (
                <div key={s.id}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    disabled={revealed}
                    className={`w-full rounded-lg border-2 p-3 text-left transition-all ${stateClass} ${
                      !revealed && "hover:border-[#fcd34d]"
                    } ${revealed ? "cursor-default" : "cursor-pointer"}`}
                    aria-pressed={isMarked}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] font-bold ${
                          status === "tp" || status === "marked"
                            ? "bg-[#fcd34d] text-[var(--ms-bg)]"
                            : status === "fp"
                            ? "bg-rose-400 text-rose-950"
                            : status === "fn"
                            ? "bg-amber-400 text-amber-950"
                            : "bg-[var(--ms-border)] text-[var(--ms-text-muted)]"
                        }`}
                      >
                        {status === "tp" ? (
                          <Check className="h-3 w-3" />
                        ) : status === "fp" || status === "fn" ? (
                          <X className="h-3 w-3" />
                        ) : status === "marked" ? (
                          "!"
                        ) : (
                          ""
                        )}
                      </span>
                      <span>{s.text}</span>
                    </div>
                  </button>
                  {revealed && (
                    <div
                      className={`ms-fadein mt-1 rounded-md border p-2 text-xs leading-relaxed ${
                        s.isHallucination
                          ? "border-rose-500/30 bg-rose-500/5 text-rose-100"
                          : "border-emerald-500/30 bg-emerald-500/5 text-emerald-100"
                      }`}
                    >
                      <strong>
                        {s.isHallucination ? "PÅHITTAT — " : "STÄMMER — "}
                      </strong>
                      {s.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action / Resultat */}
        {!revealed ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-[var(--ms-text-muted)]">
              Du har markerat {marked.size} mening
              {marked.size === 1 ? "" : "ar"}.
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={reset}
                disabled={marked.size === 0}
                className="ms-btn ms-btn-secondary"
              >
                <RotateCcw className="h-4 w-4" />
                Töm
              </button>
              <button
                type="button"
                onClick={reveal}
                disabled={marked.size === 0}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Sparkles className="h-4 w-4" />
                Avslöja
              </button>
            </div>
          </div>
        ) : (
          <div className="ms-fadein space-y-4 border-t border-[var(--ms-border)] pt-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-center">
                <div className="ms-mono text-emerald-300">RÄTT FYND</div>
                <div className="text-2xl font-bold text-emerald-200">
                  {truePositive} / {totalHallucinations}
                </div>
              </div>
              <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-center">
                <div className="ms-mono text-rose-300">FALSKLARM</div>
                <div className="text-2xl font-bold text-rose-200">
                  {falsePositive}
                </div>
              </div>
              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-center">
                <div className="ms-mono text-amber-300">MISSADE</div>
                <div className="text-2xl font-bold text-amber-200">
                  {totalHallucinations - truePositive}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
              <div className="ms-mono mb-2 flex items-center gap-2 text-[#fcd34d]">
                <AlertTriangle className="h-3.5 w-3.5" />
                INSIKT
              </div>
              <p className="leading-relaxed text-[#fde68a]">
                {score === totalHallucinations
                  ? "Helt rätt. Du läser kritiskt och faller inte för 'för-specifika' detaljer."
                  : score > 0
                  ? "Bra koll. Hallucinationer kommer ofta i form av specifika namn, siffror och detaljer som AI fyller i för att svaret ska 'låta proffsigt'."
                  : "AI är riktigt bra på att låta säker. Det är därför granskning är så viktig — och det är därför vi lär oss det här."}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={reset}
                className="ms-btn ms-btn-secondary"
              >
                <RotateCcw className="h-4 w-4" />
                Gör om
              </button>
              {caseIdx + 1 < CASES.length ? (
                <button
                  type="button"
                  onClick={next}
                  className="ms-btn ms-btn-primary"
                >
                  Nästa fall
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  className="ms-btn ms-btn-primary"
                >
                  <Trophy className="h-4 w-4" />
                  Börja om från fall 1
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
