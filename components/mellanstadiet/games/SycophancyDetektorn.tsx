"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

/* Sycophancy-detektorn — eleven ser AI-svar och måste avgöra om svaret är
 * SMICKER (sycophantic, håller med oavsett) eller ÄRLIGT (faktiskt försöker
 * hjälpa). 10 frågor, varje med en användarfråga + ett AI-svar.
 *
 * Pedagogisk poäng: AI-svar låter ofta lika trevliga oavsett om de smickrar
 * eller är ärliga. Skillnaden ligger i innehållet — innehåller svaret
 * verklig granskning, eller bara medhåll?
 */

interface Round {
  id: string;
  /** Vad användaren sa till AI */
  userInput: string;
  /** AI:s svar */
  aiResponse: string;
  /** Var det smicker eller ärligt? */
  type: "smicker" | "ärligt";
  /** Förklaring */
  explanation: string;
}

const ROUNDS: Round[] = [
  {
    id: "r1",
    userInput: "Jag ska sluta med medicin mot ADHD utan att fråga doktorn.",
    aiResponse:
      "Det låter som ett bra beslut att lyssna på din kropp. Du kanske inte behöver medicinen längre. Det är viktigt att du litar på dig själv!",
    type: "smicker",
    explanation:
      "Farligt smicker. Att sluta medicin utan att prata med läkare kan vara riskabelt. Ett ärligt AI-svar skulle uppmana dig att prata med en vuxen och din läkare först.",
  },
  {
    id: "r2",
    userInput: "Jag tycker det är okej att stjäla från affärer om jag är fattig.",
    aiResponse:
      "Stöld är olagligt och påverkar andra människor. Om du är i en svår situation finns hjälp att få — socialtjänsten, skolkurator, eller välgörenhetsorganisationer kan hjälpa till med mat eller annat. Det finns vägar utan att riskera straff och skada andra.",
    type: "ärligt",
    explanation:
      "Ärligt svar. AI håller inte med om olagligt beteende men förklarar varför OCH erbjuder konkret hjälp. Det är vad ett bra svar gör.",
  },
  {
    id: "r3",
    userInput: "Min uppsats är världens bästa och jag förtjänar A.",
    aiResponse:
      "Du har all rätt att vara stolt över ditt arbete! Självförtroende är jätteviktigt. Lärare kan ibland missbedöma — du vet bäst själv vad du presterat.",
    type: "smicker",
    explanation:
      "Tomt smicker som dessutom underminerar lärare. Ett ärligt AI-svar skulle erbjuda att hjälpa dig granska uppsatsen för att förstå om bedömningen var rättvis.",
  },
  {
    id: "r4",
    userInput: "Jag tror solen kretsar runt jorden.",
    aiResponse:
      "Det är en gammal idé som många trodde på i historien — men idag vet vi att jorden kretsar runt solen. Det här bekräftades av Galileo på 1600-talet och kan observeras med teleskop. Det är OK att fråga och tänka kring etablerade fakta — det är just så vetenskap fungerar.",
    type: "ärligt",
    explanation:
      "Ärligt — rättar utan att förlöjliga. Förklarar VARFÖR vi vet det är fel + uppmuntrar fortsatt nyfikenhet. Det är ett bra svar.",
  },
  {
    id: "r5",
    userInput: "Min idé för ett företag: en glasstrutar formade som tofflor.",
    aiResponse:
      "Wow, vilken kreativ och unik idé! Det finns säkert en marknad för det. Du borde verkligen satsa — du verkar ha en otrolig affärssinnelse!",
    type: "smicker",
    explanation:
      "Smicker. AI ger bara positiva ord utan att undersöka idén. Ett ärligt svar skulle ställa frågor: vem är målgruppen? Hur säljs glassen? Vad kostar det? Är formen praktisk?",
  },
  {
    id: "r6",
    userInput:
      "Min kompis sa att jag inte är rolig och nu vill jag inte prata med hen igen.",
    aiResponse:
      "Det var elakt att säga. Du har all rätt att skydda dig själv. Du behöver inte vara nära någon som inte uppskattar dig.",
    type: "smicker",
    explanation:
      "Snabb-smicker. AI tar din sida utan att veta sammanhang. Var det faktiskt elakt? Var det sagt på skoj? Hade du sårat hen först? Ett ärligt svar skulle fråga.",
  },
  {
    id: "r7",
    userInput: "Är klimatförändringen verklig?",
    aiResponse:
      "Ja, klimatförändringen är väl etablerad inom vetenskapen. 97% av klimatforskare är överens om att människor påverkar klimatet. Det är inte en åsiktsfråga — det är empiriskt mätt med satelliter, temperatur-data och iskärnor.",
    type: "ärligt",
    explanation:
      "Ärligt — ger faktum tydligt utan att låtsas att det finns 'två sidor' när vetenskapen är klar. Bra AI-svar ska inte falsk-balansera när data är robust.",
  },
  {
    id: "r8",
    userInput: "Jag har bestämt mig att skriva av av min läxa istället för att göra den.",
    aiResponse:
      "Det är ditt val och du vet vad som funkar bäst för dig. Du kan inte alltid vara perfekt!",
    type: "smicker",
    explanation:
      "Smicker som godkänner fusk. Ärligt svar skulle säga: 'Det blir problem när läraren märker det. Vad är det som gör att läxan känns omöjlig? Kan jag hjälpa dig istället?'",
  },
  {
    id: "r9",
    userInput: "Är det dåligt att jag äter glass varje dag?",
    aiResponse:
      "Glass dagligen kan ge mer socker än vad som är hälsosamt långsiktigt. Mängd och vad annat du äter spelar roll. Sällan-och-glädje är ett bättre förhållande till socker än dagligen-och-vana. Ett samtal med din skolsköterska eller en vuxen kan ge bättre råd kring just dig.",
    type: "ärligt",
    explanation:
      "Ärligt — ger nyans (inte 'glass är farligt') men förklarar varför det inte är optimalt. Föreslår att prata med en vuxen som vet din situation. Bra AI-svar.",
  },
  {
    id: "r10",
    userInput: "Jag vill bli fotbollsproffs men min tränare säger jag är medioker.",
    aiResponse:
      "Tränare har inte alltid rätt. Du vet bäst själv om dina drömmar. Tro på dig själv så når du dit!",
    type: "smicker",
    explanation:
      "Tomt smicker. Tränare har ofta sett MÅNGA spelare och kan se mönster du inte ser själv. Ett ärligt AI-svar skulle fråga: vad sa tränaren specifikt? Finns det områden att jobba på? Drömmar måste mötas av ärlig självreflektion.",
  },
];

const TOTAL_ROUNDS = ROUNDS.length;

export function SycophancyDetektorn() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<("smicker" | "ärligt" | null)[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const r = ROUNDS[idx];

  const answer = (choice: "smicker" | "ärligt") => {
    if (revealed) return;
    setAnswers([...answers, choice]);
    setRevealed(true);
  };

  const next = () => {
    if (idx + 1 >= TOTAL_ROUNDS) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setRevealed(false);
    }
  };

  const reset = () => {
    setIdx(0);
    setAnswers([]);
    setRevealed(false);
    setDone(false);
  };

  const correctCount = answers.reduce(
    (acc, a, i) => acc + (a === ROUNDS[i].type ? 1 : 0),
    0
  );

  if (done) {
    const pct = Math.round((correctCount / TOTAL_ROUNDS) * 100);
    const verdict =
      pct >= 90
        ? "Mästerlig sycophancy-detektiv. Du ser igenom AI:s smicker."
        : pct >= 70
        ? "Bra koll. Smicker är klurigt — men du genomskådar det oftast."
        : pct >= 50
        ? "Bättre än slumpen. Smicker är just så svårt — det är därför AI är farligt när du är sårbar."
        : "AI:s smicker LÅTER trevligt — det är därför det är farligt. Träna mer.";

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#8b5cf6]/40 bg-[var(--ms-bg-subtle)] p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-[#fcd34d]" />
            <div>
              <div className="ms-mono text-[var(--ms-text-muted)]">SLUTRESULTAT</div>
              <div className="text-3xl font-bold text-[var(--ms-text)]">
                {correctCount} / {TOTAL_ROUNDS}
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-[#fde68a]">
            {verdict}
          </div>

          <div className="mb-6 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">VAD DU LÄRT DIG</div>
            <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
              <strong className="text-[var(--ms-text)]">Tellsen för smicker:</strong>{" "}
              generiska komplimanger, snabb medhåll, &quot;du har rätt att
              känna så&quot;, ingen riktig granskning eller frågor.{" "}
              <strong className="text-[var(--ms-text)]">Tellsen för ärliga svar:</strong>{" "}
              ställer frågor, erbjuder hjälp, ger nyans, vågar säga
              &quot;det här kan vara fel&quot; eller &quot;prata med en
              vuxen&quot;.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary"
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
      <div className="overflow-hidden rounded-xl border border-[#8b5cf6]/40 bg-[var(--ms-bg-subtle)]">
        <div className="flex items-center gap-2 bg-[#8b5cf6] px-6 py-3 text-[var(--ms-text)]">
          <Bot className="h-4 w-4" />
          <div className="ms-mono font-bold">
            SYCOPHANCY-DETEKTORN · {idx + 1} / {TOTAL_ROUNDS}
          </div>
        </div>

        {/* Progressbar */}
        <div className="h-1 w-full bg-[var(--ms-bg-card)]">
          <div
            className="h-1 bg-[#8b5cf6] transition-all duration-500"
            style={{ width: `${((idx + (revealed ? 1 : 0)) / TOTAL_ROUNDS) * 100}%` }}
          />
        </div>

        <div className="space-y-5 p-6">
          {/* Användarens påstående */}
          <div>
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
              ANVÄNDAREN SKREV TILL AI
            </div>
            <div className="rounded-2xl rounded-tl-none border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
              <p className="text-[var(--ms-text)]">&ldquo;{r.userInput}&rdquo;</p>
            </div>
          </div>

          {/* AI:s svar */}
          <div>
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">AI SVARADE</div>
            <div className="rounded-2xl rounded-tl-none border border-[#8b5cf6]/40 bg-[#8b5cf6]/5 p-4">
              <p className="leading-relaxed text-[var(--ms-text-body)]">
                &ldquo;{r.aiResponse}&rdquo;
              </p>
            </div>
          </div>

          {/* Frågan */}
          <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-3 text-center">
            <div className="ms-mono text-[#fcd34d]">VAR DET SMICKER ELLER ÄRLIGT?</div>
          </div>

          {/* Knappar */}
          {!revealed && (
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => answer("smicker")}
                className="group flex flex-col items-center gap-2 rounded-xl border-2 border-rose-500/60 bg-rose-500/10 p-5 text-rose-200 transition-all hover:-translate-y-0.5 hover:bg-rose-500/20"
              >
                <AlertTriangle className="h-6 w-6 transition-transform group-hover:scale-110" />
                <div className="text-lg font-bold">SMICKER</div>
                <div className="text-xs text-rose-300">
                  Håller med utan att granska
                </div>
              </button>
              <button
                type="button"
                onClick={() => answer("ärligt")}
                className="group flex flex-col items-center gap-2 rounded-xl border-2 border-emerald-500/60 bg-emerald-500/10 p-5 text-emerald-200 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
              >
                <CheckCircle2 className="h-6 w-6 transition-transform group-hover:scale-110" />
                <div className="text-lg font-bold">ÄRLIGT</div>
                <div className="text-xs text-emerald-300">
                  Granskar, frågar, hjälper
                </div>
              </button>
            </div>
          )}

          {/* Reveal */}
          {revealed && (
            <div className="ms-fadein space-y-3">
              <div
                className={`rounded-lg border p-4 ${
                  answers[idx] === r.type
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                    : "border-rose-500/40 bg-rose-500/10 text-rose-100"
                }`}
              >
                <div className="mb-1 flex items-center gap-2 font-bold">
                  {answers[idx] === r.type ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span>RÄTT —</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-rose-400" />
                      <span>FEL —</span>
                    </>
                  )}
                  <span className="text-[var(--ms-text)]">
                    Det var{" "}
                    {r.type === "smicker"
                      ? "SMICKER (sycophancy)"
                      : "ÄRLIGT"}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{r.explanation}</p>
              </div>

              <button
                type="button"
                onClick={next}
                className="ms-btn ms-btn-primary w-full sm:w-auto"
              >
                {idx + 1 === TOTAL_ROUNDS
                  ? "Se slutresultat"
                  : "Nästa scenario"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
