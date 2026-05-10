"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Timer,
  Sparkles,
  RotateCcw,
  Trophy,
  Play,
  ArrowRight,
} from "lucide-react";

/* Hallucination-rally — du har 90 sekunder på dig att hitta så många
 * hallucinationer som möjligt i ett rullande flöde av AI-genererade
 * påståenden. Varje rätt fynd: +10p. Felklick: -5p.
 *
 * Pedagogisk poäng: hastighet förstärker det som hänt advokaterna 2025
 * — när du läser snabbt missar du tells. Att läsa noga tar tid. Det är
 * själva kärnan i kritisk granskning.
 */

interface Statement {
  id: string;
  text: string;
  isHallucination: boolean;
  reason: string;
}

const POOL: Statement[] = [
  {
    id: "s1",
    text: "Eiffeltornet i Paris invigdes 1889 och är 330 meter högt.",
    isHallucination: false,
    reason:
      "Eiffeltornet invigdes 1889. Höjden är 330 meter med antennen.",
  },
  {
    id: "s2",
    text: "Stockholm har Sveriges äldsta universitet, grundat 1437.",
    isHallucination: true,
    reason:
      "Sveriges äldsta universitet är Uppsala universitet (grundat 1477) — inte Stockholms. AI har bytt stad och datum.",
  },
  {
    id: "s3",
    text: "Tetris uppfanns 1984 av Aleksej Pažitnov i Sovjetunionen.",
    isHallucination: false,
    reason:
      "Sant. Pažitnov skapade Tetris 1984 vid Vetenskapsakademin i Moskva.",
  },
  {
    id: "s4",
    text: "Minecraft skapades år 2009 av den finska programmeraren Markus Persson.",
    isHallucination: true,
    reason:
      "Markus Persson är SVENSK, inte finsk. Spelet skapades 2009 — det stämmer. AI har bytt nationalitet.",
  },
  {
    id: "s5",
    text: "Mount Everest är 8849 meter hög och ligger på gränsen mellan Nepal och Kina.",
    isHallucination: false,
    reason:
      "Sant. 8849 m är aktuell uppmätning, gränsen mellan Nepal och Kina (Tibet).",
  },
  {
    id: "s6",
    text: "Astrid Lindgren skrev Pippi Långstrump 1947, baserad på hennes egen barndom.",
    isHallucination: true,
    reason:
      "Pippi Långstrump publicerades 1945, INTE 1947. Karaktären uppfanns för Astrids dotter Karin — inte baserad på Astrids egen barndom. AI har två fel i en mening.",
  },
  {
    id: "s7",
    text: "Vatten kokar vid 100°C på havsnivå och fryser vid 0°C.",
    isHallucination: false,
    reason: "Sant — fysikens grundvärden för vatten på havsnivå.",
  },
  {
    id: "s8",
    text: "Volvo grundades 1927 i Göteborg av Assar Gabrielsson och Gustaf Larson.",
    isHallucination: false,
    reason: "Helt korrekt fakta om Volvo.",
  },
  {
    id: "s9",
    text: "Sveriges nationalsång 'Du gamla, du fria' skrevs 1844 av Richard Dybeck.",
    isHallucination: false,
    reason:
      "Sant. Dybeck skrev texten 1844 till en folkmelodi från Västmanland.",
  },
  {
    id: "s10",
    text: "Spotify grundades 2008 av Daniel Ek och har idag 845 miljoner användare globalt.",
    isHallucination: true,
    reason:
      "Spotify grundades 2006 (lanserades 2008) av Daniel Ek OCH Martin Lorentzon. Användartalet är AI:s gissning som låter trovärdig.",
  },
  {
    id: "s11",
    text: "Saturnus har över 80 månar och är solsystemets mest ringbärande planet.",
    isHallucination: false,
    reason:
      "Sant. Senaste räkning är 145+ månar, men 'över 80' stämmer.",
  },
  {
    id: "s12",
    text: "Selma Lagerlöf var första kvinnan att vinna Nobelpriset i litteratur, år 1909.",
    isHallucination: false,
    reason: "Sant. 1909, först av kvinnliga pristagare i litteratur.",
  },
  {
    id: "s13",
    text: "Internet uppfanns 1989 av Bill Gates som en tjänst för Microsoft.",
    isHallucination: true,
    reason:
      "Helt fel. World Wide Web uppfanns 1989 av Tim Berners-Lee vid CERN — inte Bill Gates och inte för Microsoft. AI har blandat ihop kända namn.",
  },
  {
    id: "s14",
    text: "Kungliga slottet i Stockholm har 605 rum och är världens största kungliga residens i bruk.",
    isHallucination: false,
    reason:
      "Sant. 605 rum, ett av de största kungliga residensen i Europa.",
  },
  {
    id: "s15",
    text: "Pythagoras sats säger att i en rätvinklig triangel: a² + b² = c².",
    isHallucination: false,
    reason: "Sant, grundläggande matematik.",
  },
  {
    id: "s16",
    text: "Greta Thunberg höll sitt första klimattal i FN år 2017, då hon var 14 år.",
    isHallucination: true,
    reason:
      "Greta höll FN-talet 2019 (vid UN Climate Action Summit) — inte 2017. Hon var då 16 år. AI har ändrat datum och ålder.",
  },
  {
    id: "s17",
    text: "ABBA vann Eurovision 1974 med låten 'Waterloo'.",
    isHallucination: false,
    reason: "Sant. Brighton, England, 6 april 1974.",
  },
  {
    id: "s18",
    text: "Ikeas grundare Ingvar Kamprad föddes 1927 i Älmhult, Småland.",
    isHallucination: true,
    reason:
      "Ingvar Kamprad föddes i Pjätteryd, Småland — INTE Älmhult. (Älmhult är där Ikea grundades.) AI har blandat ihop födelseort och företagsort.",
  },
  {
    id: "s19",
    text: "Solens kärna har en temperatur på cirka 15 miljoner grader Celsius.",
    isHallucination: false,
    reason: "Sant. Cirka 15,7 miljoner grader.",
  },
  {
    id: "s20",
    text: "Nelson Mandela satt i fängelse i 32 år innan han blev Sydafrikas president.",
    isHallucination: true,
    reason:
      "Mandela satt i fängelse i 27 år (1962–1990), inte 32. Vanlig hallucination — AI hittar på ett siffervärde i närheten.",
  },
];

const GAME_DURATION = 90; // sekunder
const STATEMENTS_TO_SHOW = 12;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type GameState = "menu" | "playing" | "done";

export function HallucinationRally() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [statements, setStatements] = useState<Statement[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [skips, setSkips] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [feedback, setFeedback] = useState<{
    show: boolean;
    correct: boolean;
    text: string;
  }>({ show: false, correct: false, text: "" });
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    const picked = shuffle(POOL).slice(0, STATEMENTS_TO_SHOW);
    setStatements(picked);
    setIdx(0);
    setScore(0);
    setHits(0);
    setMisses(0);
    setSkips(0);
    setTimeLeft(GAME_DURATION);
    setFeedback({ show: false, correct: false, text: "" });
    setGameState("playing");
  };

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState("done");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [gameState]);

  // End if all statements consumed
  useEffect(() => {
    if (gameState === "playing" && idx >= statements.length && statements.length > 0) {
      setGameState("done");
    }
  }, [idx, statements.length, gameState]);

  const current = statements[idx];

  const showFeedback = (correct: boolean, text: string) => {
    setFeedback({ show: true, correct, text });
    setTimeout(() => {
      setFeedback({ show: false, correct: false, text: "" });
      setIdx((i) => i + 1);
    }, 1200);
  };

  const handleHallucination = () => {
    if (!current || feedback.show) return;
    if (current.isHallucination) {
      setScore((s) => s + 10);
      setHits((h) => h + 1);
      showFeedback(true, "Rätt — det var en hallucination!");
    } else {
      setScore((s) => s - 5);
      setMisses((m) => m + 1);
      showFeedback(false, "Falsklarm — det stämde faktiskt.");
    }
  };

  const handleStammer = () => {
    if (!current || feedback.show) return;
    if (!current.isHallucination) {
      setScore((s) => s + 5);
      showFeedback(true, "Rätt — det stämde.");
    } else {
      setScore((s) => Math.max(0, s - 5));
      setMisses((m) => m + 1);
      showFeedback(false, "Du missade en hallucination!");
    }
  };

  const handleSkip = () => {
    if (!current || feedback.show) return;
    setSkips((s) => s + 1);
    setIdx((i) => i + 1);
  };

  const reset = () => {
    setGameState("menu");
  };

  // === MENU ===
  if (gameState === "menu") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#f43f5e]/40 bg-[#0d1322] p-8">
          <div className="ms-mono mb-2 text-[#94a3b8]">ARKADSPEL · L4</div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">
            Hallucination-rally
          </h2>
          <p className="mb-6 text-lg text-[#cbd5e1]">
            Du har <strong>90 sekunder</strong> på dig att hitta så många
            hallucinationer som möjligt i ett flöde av AI-genererade
            påståenden. Påståenden kommer ett i taget. Du väljer:{" "}
            <strong className="text-rose-300">PÅHITTAT</strong>,{" "}
            <strong className="text-emerald-300">STÄMMER</strong>, eller{" "}
            <strong className="text-[#94a3b8]">SKIPPA</strong>.
          </p>

          <div className="mb-6 space-y-3 rounded-lg border border-[#243248] bg-[#1a2235] p-5">
            <div className="ms-mono text-[#94a3b8]">POÄNG</div>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li className="flex gap-3">
                <span className="ms-mono w-12 flex-none rounded bg-emerald-500/20 text-center text-emerald-200">
                  +10
                </span>
                <span>Hittade hallucination ✓</span>
              </li>
              <li className="flex gap-3">
                <span className="ms-mono w-12 flex-none rounded bg-emerald-500/20 text-center text-emerald-200">
                  +5
                </span>
                <span>Sa &quot;stämmer&quot; om något som faktiskt stämde</span>
              </li>
              <li className="flex gap-3">
                <span className="ms-mono w-12 flex-none rounded bg-rose-500/20 text-center text-rose-200">
                  −5
                </span>
                <span>Falsklarm — eller missad hallucination</span>
              </li>
              <li className="flex gap-3">
                <span className="ms-mono w-12 flex-none rounded bg-[#243248] text-center text-[#94a3b8]">
                  0
                </span>
                <span>Skippa — om du inte vet, hellre skippa än gissa</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={start}
            className="ms-btn ms-btn-primary"
          >
            <Play className="h-4 w-4" />
            Starta rallyt
          </button>
        </div>
      </div>
    );
  }

  // === DONE ===
  if (gameState === "done") {
    const accuracy =
      hits + misses === 0 ? 0 : Math.round((hits / (hits + misses)) * 100);
    const verdict =
      score >= 60
        ? "Mästerlig hallucination-detektiv. Du har koll på tellsen."
        : score >= 30
        ? "Bra koll. Specifika siffror och egennamn är ofta hallucinerade."
        : score >= 0
        ? "Bättre än slumpen. Träna mer — det här är en superkraft du behöver."
        : "Snabbläsning straffar sig. Det är just det här som hände advokaterna 2025 — granskning kräver tid.";

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#f43f5e]/40 bg-[#0d1322] p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-[#fcd34d]" />
            <div>
              <div className="ms-mono text-[#94a3b8]">SLUTRESULTAT</div>
              <div className="text-3xl font-bold text-white">
                {score} poäng
              </div>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-center">
              <div className="ms-mono text-emerald-300">FYND</div>
              <div className="text-2xl font-bold text-emerald-200">{hits}</div>
            </div>
            <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-center">
              <div className="ms-mono text-rose-300">MISS</div>
              <div className="text-2xl font-bold text-rose-200">{misses}</div>
            </div>
            <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-3 text-center">
              <div className="ms-mono text-[#94a3b8]">SKIPPADE</div>
              <div className="text-2xl font-bold text-white">{skips}</div>
            </div>
            <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/10 p-3 text-center">
              <div className="ms-mono text-[#fcd34d]">PRECISION</div>
              <div className="text-2xl font-bold text-[#fde68a]">
                {accuracy}%
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-[#fde68a]">
            {verdict}
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

  // === PLAYING ===
  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-[#f43f5e]/40 bg-[#0d1322]">
        {/* Topbar */}
        <div className="flex items-center justify-between gap-4 bg-[#f43f5e] px-6 py-3">
          <div className="ms-mono font-bold text-white">
            POÄNG: {score}
          </div>
          <div className="ms-mono flex items-center gap-1.5 font-bold text-white">
            <Timer className="h-3.5 w-3.5" />
            {timeLeft}s
          </div>
          <div className="ms-mono font-bold text-white">
            {idx + 1} / {statements.length}
          </div>
        </div>

        {/* Tidsstapel */}
        <div className="h-1 w-full bg-[#1a2235]">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              timeLeft <= 10 ? "bg-rose-500" : "bg-[#f43f5e]"
            }`}
            style={{
              width: `${(timeLeft / GAME_DURATION) * 100}%`,
            }}
          />
        </div>

        <div className="p-6">
          {current && !feedback.show && (
            <>
              <div className="ms-mono mb-2 text-[#94a3b8]">
                AI-PÅSTÅENDE
              </div>
              <div className="mb-6 rounded-lg border border-[#243248] bg-[#1a2235] p-6 text-lg leading-relaxed text-white">
                &ldquo;{current.text}&rdquo;
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={handleHallucination}
                  className="rounded-lg border-2 border-rose-500/60 bg-rose-500/10 p-4 font-bold text-rose-200 transition-all hover:-translate-y-0.5 hover:bg-rose-500/20"
                >
                  PÅHITTAT
                  <div className="ms-mono mt-1 text-xs text-rose-300">+10</div>
                </button>
                <button
                  type="button"
                  onClick={handleStammer}
                  className="rounded-lg border-2 border-emerald-500/60 bg-emerald-500/10 p-4 font-bold text-emerald-200 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
                >
                  STÄMMER
                  <div className="ms-mono mt-1 text-xs text-emerald-300">
                    +5
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="rounded-lg border-2 border-[#243248] bg-[#1a2235] p-4 font-bold text-[#94a3b8] transition-all hover:-translate-y-0.5 hover:border-[#94a3b8]"
                >
                  SKIPPA
                  <div className="ms-mono mt-1 text-xs text-[#64748b]">0</div>
                </button>
              </div>
            </>
          )}

          {/* Feedback-overlay */}
          {feedback.show && (
            <div
              className={`ms-fadein space-y-3 rounded-lg border-2 p-6 text-center ${
                feedback.correct
                  ? "border-emerald-500/60 bg-emerald-500/10"
                  : "border-rose-500/60 bg-rose-500/10"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  feedback.correct ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {feedback.text}
              </div>
              {current && (
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  {current.reason}
                </p>
              )}
              <div className="ms-mono text-[#94a3b8]">NÄSTA OM 1 SEK...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
