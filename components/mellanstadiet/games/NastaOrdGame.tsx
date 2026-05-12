"use client";

import { useState, useMemo } from "react";
import {
  Sparkles,
  RotateCcw,
  ArrowRight,
  Bot,
  User,
  Trophy,
} from "lucide-react";

/* "Nästa ord" — du gissar nästa ord i en mening, AI gissar också (top-3
 * är förbestämda för pedagogisk klarhet). Du ser om dina ord matchar AI:s
 * top-3, eller originalets ord. Slutsats: AI gissar mönster, du gör ofta
 * samma. */

interface Round {
  id: string;
  /** Synlig prompt — meningen med "___" där elevens gissning ska in */
  prompt: string;
  /** Originalets faktiska ord */
  original: string;
  /** AI:s top-3 gissningar (ordnade efter sannolikhet) */
  aiTop3: string[];
  /** Accepterade synonymer — kan både matcha original och AI */
  accepted: string[];
  /** Kommentar som visas efter rundan */
  insight: string;
}

const ROUNDS: Round[] = [
  {
    id: "r1",
    prompt: "Det var en gång en ___",
    original: "prinsessa",
    aiTop3: ["prinsessa", "kung", "flicka"],
    accepted: ["prinsessa", "kung", "flicka", "drottning", "pojke"],
    insight:
      "Sagor börjar nästan alltid likadant — det är ett extremt starkt mönster i AI:s träningsdata.",
  },
  {
    id: "r2",
    prompt: "Soppan är ___",
    original: "varm",
    aiTop3: ["varm", "god", "het"],
    accepted: ["varm", "god", "het", "kall", "ljummen"],
    insight:
      "Adjektiv som beskriver mat har sina egna mönster. AI har sett 'soppan är varm' miljarder gånger — den vet inte hur soppa smakar, men vet att 'varm' brukar komma efter 'soppan är'.",
  },
  {
    id: "r3",
    prompt: "Roses are red, violets are ___",
    original: "blue",
    aiTop3: ["blue", "violet", "purple"],
    accepted: ["blue", "violet", "purple", "blå"],
    insight:
      "En berömd dikt-rad. AI har sett den miljontals gånger på engelska. Eftersom mönstret är så starkt får den ett enkelt fall.",
  },
  {
    id: "r4",
    prompt: "På midsommar dansar man runt en ___",
    original: "midsommarstång",
    aiTop3: ["majstång", "midsommarstång", "stång"],
    accepted: ["midsommarstång", "majstång", "stång"],
    insight:
      "Ett kulturellt mönster. På svenska texter är 'midsommarstång' och 'majstång' typiska — på engelska skulle AI:n säga något helt annat.",
  },
  {
    id: "r5",
    prompt: "I min ryggsäck har jag bok, penna och ___",
    original: "suddgummi",
    aiTop3: ["dator", "sudd", "linjal"],
    accepted: ["sudd", "suddgummi", "linjal", "penna", "dator"],
    insight:
      "Här blir det öppnare. Det finns inte ETT rätt svar — AI gissar baserat på vad som ofta nämns ihop med 'bok' och 'penna'.",
  },
  {
    id: "r6",
    prompt: "Fotbollsmatchen slutade ___",
    original: "oavgjort",
    aiTop3: ["oavgjort", "1-0", "med"],
    accepted: ["oavgjort", "1-0", "2-0", "med", "1-1", "0-0"],
    insight:
      "Om du la in 1-0 eller liknande siffra: smart! Det är vad AI ofta gissar för det är vanligt i sportartiklar.",
  },
  {
    id: "r7",
    prompt: "Hon vaknade tidigt och drack ___",
    original: "kaffe",
    aiTop3: ["kaffe", "vatten", "te"],
    accepted: ["kaffe", "vatten", "te", "juice", "mjölk"],
    insight:
      "Kaffe vinner i AI-statistiken. Vuxenmönster syns starkt i träningsdata — barns morgonrutiner finns med, men dominerar inte.",
  },
  {
    id: "r8",
    prompt: "Det jag tycker mest om i skolan är ___",
    original: "rasten",
    aiTop3: ["matematik", "att lära mig", "rasten"],
    accepted: ["rasten", "rasterna", "matematik", "matte", "att lära mig", "idrott", "lunchen"],
    insight:
      "Här tappar AI lite. Vuxna skriver oftast 'att lära mig' — men barn skriver oftare 'rasten' eller 'lunchen'. Träningsdatan är skev mot vuxen-svar.",
  },
  {
    id: "r9",
    prompt: "Min kompis sa något elakt och jag blev ___",
    original: "ledsen",
    aiTop3: ["ledsen", "arg", "sårad"],
    accepted: ["ledsen", "arg", "sårad", "förbannad", "förvånad", "tyst"],
    insight:
      "Känslor i text följer mönster: ledsen, arg, sårad är de tre vanligaste i den här typen av mening. Det betyder inte att AI förstår känslor — den har bara sett dem skrivas i kombination.",
  },
  {
    id: "r10",
    prompt: "I framtiden tror jag att AI kommer att ___",
    original: "förändra världen",
    aiTop3: ["förändra världen", "hjälpa oss", "ta över"],
    accepted: [
      "förändra världen",
      "hjälpa oss",
      "ta över",
      "förändra allt",
      "bli smartare",
    ],
    insight:
      "De här tre svaren dominerar artiklar om AI på internet. Lägg märke till hur lika alla AI-svar börjar låta — det är för att AI är tränad på samma artiklar som alla läser.",
  },
];

function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]+$/g, "")
    .normalize();
}

function aiTop3Has(round: Round, guess: string): boolean {
  const n = normalize(guess);
  return round.aiTop3.some((w) => normalize(w) === n);
}

function isAccepted(round: Round, guess: string): boolean {
  const n = normalize(guess);
  return round.accepted.some((w) => normalize(w) === n);
}

export function NastaOrdGame() {
  const [roundIdx, setRoundIdx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [stats, setStats] = useState({
    matchedAi: 0, // antal gånger din gissning fanns i AI top-3
    nonAi: 0, // gissning OK men inte i AI top-3
    invalid: 0, // helt utanför
  });
  const [done, setDone] = useState(false);

  const round = ROUNDS[roundIdx];
  const total = ROUNDS.length;

  const submit = () => {
    if (!input.trim() || submitted) return;
    const guess = input.trim();
    setSubmitted(guess);

    if (aiTop3Has(round, guess)) {
      setStats((s) => ({ ...s, matchedAi: s.matchedAi + 1 }));
    } else if (isAccepted(round, guess)) {
      setStats((s) => ({ ...s, nonAi: s.nonAi + 1 }));
    } else {
      setStats((s) => ({ ...s, invalid: s.invalid + 1 }));
    }
  };

  const next = () => {
    if (roundIdx + 1 >= total) {
      setDone(true);
    } else {
      setRoundIdx((i) => i + 1);
      setInput("");
      setSubmitted(null);
    }
  };

  const reset = () => {
    setRoundIdx(0);
    setInput("");
    setSubmitted(null);
    setStats({ matchedAi: 0, nonAi: 0, invalid: 0 });
    setDone(false);
  };

  const matchedPct = useMemo(
    () => Math.round((stats.matchedAi / total) * 100),
    [stats.matchedAi, total]
  );

  if (done) {
    const verdict =
      matchedPct >= 70
        ? "Du tänker väldigt 'mönsterlikt' — som AI ofta gör. Det betyder inte att du är AI! Det betyder att språk *är* mönsterbaserat, och både du och AI utnyttjar det."
        : matchedPct >= 40
        ? "Du landade ungefär lika ofta i AI:s top-3 som utanför. Det är intressant — du har egna mönster som inte är 'mainstream-internet'-mönster."
        : "Du tänker väldigt annorlunda än AI — eller AI:s träningsdata är skev mot vuxen-internet-mönster (vilket den faktiskt är!). Bra exempel på att människors språk är mer varierat än AI lärt sig.";

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#a5b4fc]/40 bg-[var(--ms-bg-subtle)] p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-[#fcd34d]" />
            <div>
              <div className="ms-mono text-[var(--ms-text-muted)]">SLUTRESULTAT</div>
              <div className="text-3xl font-bold text-[var(--ms-text)]">
                Klart!
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
              <div className="ms-mono text-[var(--ms-text-muted)]">DU & AI MATCH</div>
              <div className="mt-1 text-3xl font-bold text-[#a5b4fc]">
                {stats.matchedAi}
                <span className="text-base text-[var(--ms-text-muted)]">/{total}</span>
              </div>
              <div className="mt-1 text-xs text-[var(--ms-text-muted)]">
                Din gissning fanns i AI:s top-3
              </div>
            </div>
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
              <div className="ms-mono text-[var(--ms-text-muted)]">EGNA SPÅR</div>
              <div className="mt-1 text-3xl font-bold text-[#fcd34d]">
                {stats.nonAi}
                <span className="text-base text-[var(--ms-text-muted)]">/{total}</span>
              </div>
              <div className="mt-1 text-xs text-[var(--ms-text-muted)]">
                Du gissade ett OK ord som AI inte hade i top-3
              </div>
            </div>
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
              <div className="ms-mono text-[var(--ms-text-muted)]">UTANFÖR MÖNSTRET</div>
              <div className="mt-1 text-3xl font-bold text-[var(--ms-text-muted)]">
                {stats.invalid}
                <span className="text-base text-[var(--ms-text-muted)]">/{total}</span>
              </div>
              <div className="mt-1 text-xs text-[var(--ms-text-muted)]">
                Något helt annat
              </div>
            </div>
          </div>

          <div className="mb-4 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
            <div className="ms-mono mb-2 text-[#fcd34d]">SLUTSATS</div>
            <p className="leading-relaxed text-[#fde68a]">{verdict}</p>
          </div>

          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5 text-sm leading-relaxed text-[var(--ms-text-body)]">
            <strong className="text-[var(--ms-text)]">Det är poängen:</strong> AI är inte
            magisk. Den gissar nästa ord med statistik. Du gör samma sak — fast
            du <em>vet</em> varför du säger det. AI vet inte. Den bara gissar.
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary mt-6"
          >
            <RotateCcw className="h-4 w-4" />
            Spela igen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-[#a5b4fc]/40 bg-[var(--ms-bg-subtle)]">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-[#a5b4fc] px-6 py-3">
          <div className="ms-mono font-bold text-[var(--ms-bg)]">
            NÄSTA ORD · RUNDA {roundIdx + 1} / {total}
          </div>
          <div className="ms-mono text-[var(--ms-bg)]">
            DU & AI MATCH: {stats.matchedAi}
          </div>
        </div>

        {/* Progressbar */}
        <div className="h-1 w-full bg-[var(--ms-bg-card)]">
          <div
            className="h-full bg-[#a5b4fc] transition-all duration-500"
            style={{ width: `${((roundIdx + (submitted ? 1 : 0)) / total) * 100}%` }}
          />
        </div>

        <div className="space-y-6 p-6">
          {/* Prompt */}
          <div>
            <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">FYLL I LUCKAN</div>
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-6 text-2xl font-medium leading-relaxed text-[var(--ms-text)] sm:text-3xl">
              {round.prompt.split("___").map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && (
                    <span
                      className={`mx-1 inline-block min-w-[3ch] rounded border-b-4 px-2 py-0.5 font-mono ${
                        submitted
                          ? aiTop3Has(round, submitted)
                            ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                            : isAccepted(round, submitted)
                            ? "border-amber-400 bg-amber-500/15 text-amber-100"
                            : "border-rose-400 bg-rose-500/15 text-rose-100"
                          : "border-[#a5b4fc] bg-[#a5b4fc]/10"
                      }`}
                    >
                      {submitted || "?"}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Input */}
          {!submitted && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                placeholder="Skriv ditt ord…"
                className="flex-1 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] px-4 py-3 text-lg text-[var(--ms-text)] placeholder-[var(--ms-text-dim)] outline-none transition-colors focus:border-[#a5b4fc]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Skicka
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* Reveal */}
          {submitted && (
            <div className="ms-fadein space-y-4">
              {/* Jämförelse */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
                  <div className="ms-mono mb-2 flex items-center gap-1.5 text-[var(--ms-text-muted)]">
                    <User className="h-3.5 w-3.5" />
                    DU GISSADE
                  </div>
                  <div
                    className={`text-2xl font-bold ${
                      aiTop3Has(round, submitted)
                        ? "text-emerald-300"
                        : isAccepted(round, submitted)
                        ? "text-amber-300"
                        : "text-rose-300"
                    }`}
                  >
                    {submitted}
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
                  <div className="ms-mono mb-2 flex items-center gap-1.5 text-[var(--ms-text-muted)]">
                    <Bot className="h-3.5 w-3.5" />
                    AI:S TOP-3
                  </div>
                  <ol className="space-y-1">
                    {round.aiTop3.map((w, i) => (
                      <li
                        key={w}
                        className={`flex items-center gap-2 ${
                          normalize(w) === normalize(submitted)
                            ? "text-emerald-300"
                            : "text-[var(--ms-text)]"
                        }`}
                      >
                        <span className="ms-mono text-[var(--ms-text-dim)]">
                          {i + 1}.
                        </span>
                        <span className="font-medium">{w}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Match-status */}
              <div
                className={`rounded-lg border p-4 ${
                  aiTop3Has(round, submitted)
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : isAccepted(round, submitted)
                    ? "border-amber-500/40 bg-amber-500/10"
                    : "border-rose-500/40 bg-rose-500/10"
                }`}
              >
                <div
                  className={`mb-1 font-bold ${
                    aiTop3Has(round, submitted)
                      ? "text-emerald-300"
                      : isAccepted(round, submitted)
                      ? "text-amber-300"
                      : "text-rose-300"
                  }`}
                >
                  {aiTop3Has(round, submitted)
                    ? "MATCH — du och AI gissar samma!"
                    : isAccepted(round, submitted)
                    ? "OK — men inte i AI:s top-3"
                    : "Helt eget spår"}
                </div>
                <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
                  {round.insight}
                </p>
              </div>

              <button
                type="button"
                onClick={next}
                className="ms-btn ms-btn-primary w-full sm:w-auto"
              >
                {roundIdx + 1 === total ? (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Se slutresultatet
                  </>
                ) : (
                  <>
                    Nästa runda
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
