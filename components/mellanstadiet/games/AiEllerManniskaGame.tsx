"use client";

import { useState, useEffect, useRef } from "react";
import {
  Bot,
  User,
  Trophy,
  RotateCcw,
  Timer,
  ArrowRight,
} from "lucide-react";

interface Item {
  id: string;
  text: string;
  source: "ai" | "human";
  /** Tells som visas efter — vad i texten avslöjar källan */
  tells: string[];
}

const ITEMS: Item[] = [
  {
    id: "i1",
    source: "ai",
    text:
      "Att läsa böcker är en otroligt berikande aktivitet som öppnar dörrar till nya världar och perspektiv. Det stimulerar fantasin, utvecklar språket och ger värdefulla insikter om livet.",
    tells: [
      "Generisk öppning ('otroligt berikande aktivitet')",
      "Trippel-listor: 'fantasin, utvecklar språket och ger värdefulla insikter'",
      "Inga konkreta exempel — bara abstrakta påståenden",
      "Perfekt grammatik, men sterilt språk",
    ],
  },
  {
    id: "i2",
    source: "human",
    text:
      "Igår läste jag ut den. Sista 50 sidorna var sjuka, jag fattar inte varför ingen tipsade om den tidigare. Den finns på biblan, ta den.",
    tells: [
      "Talspråk: 'biblan', 'sjuka'",
      "Personliga detaljer: 'igår', 'sista 50 sidorna'",
      "Avbruten meningsbyggnad — människor pratar inte i kompletta meningar",
      "En åsikt med personlig vinkel",
    ],
  },
  {
    id: "i3",
    source: "ai",
    text:
      "Sommarsemestern erbjuder en fantastisk möjlighet att koppla av, utforska nya platser och tillbringa kvalitetstid med familj och vänner. Oavsett om man föredrar stranden eller bergen finns något för alla.",
    tells: [
      "'Erbjuder möjlighet' — företagsspråk",
      "'Oavsett om...så finns något för alla' — typisk AI-formulering som täcker alla fall",
      "Ingen specifik plats nämns",
      "'Kvalitetstid' — buzzord",
    ],
  },
  {
    id: "i4",
    source: "human",
    text:
      "Vi var i Spanien förra veckan, det regnade typ varje dag tills sista. Mamma var sur. Men hotellet hade pingisbord så vi spelade ändå.",
    tells: [
      "Specifik plats (Spanien), specifik tid (förra veckan)",
      "Konkret detalj (pingisbord)",
      "Person nämnd i sammanhang ('mamma var sur')",
      "'typ' — talspråk",
    ],
  },
  {
    id: "i5",
    source: "ai",
    text:
      "AI är ett kraftfullt verktyg som har potential att förändra många aspekter av våra liv. Det är viktigt att vi använder det på ett ansvarsfullt sätt och tänker på de etiska implikationerna.",
    tells: [
      "Klassisk AI-mall: 'kraftfullt verktyg', 'potential att förändra'",
      "'Många aspekter av våra liv' — abstrakt fyllnadsspråk",
      "'Etiska implikationer' — högt register utan konkretion",
      "Säger inget kontroversiellt — typisk AI-balansering",
    ],
  },
  {
    id: "i6",
    source: "human",
    text:
      "Jag testade ChatGPT första gången igår. Bad den skriva en låttext till min hund. Den blev så pinsam att jag dog skratt. Min syster läste den och fick andnöd.",
    tells: [
      "Personligt experiment med detalj",
      "Konsekvens i berättelsen ('syster fick andnöd')",
      "Talspråklig överdrift: 'dog skratt'",
      "Specifik begäran (låttext till hund) — för specifik för AI",
    ],
  },
  {
    id: "i7",
    source: "ai",
    text:
      "Idrott är viktigt för både kropp och själ. Genom att röra på sig regelbundet kan man förbättra sin fysiska form, minska stress och öka sitt välbefinnande. Det finns många olika sporter att välja mellan.",
    tells: [
      "'Kropp och själ' — slogan-aktigt",
      "Listar tre fördelar — typiskt AI-mönster",
      "'Många olika att välja mellan' — fluff utan information",
      "Inga personliga preferenser eller exempel",
    ],
  },
  {
    id: "i8",
    source: "human",
    text:
      "Hade match igår. Vi förlorade 4-1 och jag stod i mål. Det var iskallt och planen var blöt. Tränaren sa typ 'ni ska vara stolta' fast vi inte alls var stolta.",
    tells: [
      "Konkreta siffror (4-1)",
      "Sensorisk detalj (iskallt, blöt plan)",
      "Citat med åsikt ('typ ni ska vara stolta')",
      "Egen känsla mot vuxens ord — typisk barn-perspektiv-konflikt",
    ],
  },
  {
    id: "i9",
    source: "ai",
    text:
      "Klimatförändringen är en av vår tids största utmaningar. Vi måste alla samarbeta för att skapa en hållbar framtid för kommande generationer. Små handlingar i vardagen kan göra stor skillnad.",
    tells: [
      "'En av vår tids största utmaningar' — fras direkt från artiklar",
      "'Vi måste alla samarbeta' — opersonlig uppmaning",
      "'Kommande generationer' — högtidlig, tom formulering",
      "'Små handlingar...stor skillnad' — slogan",
    ],
  },
  {
    id: "i10",
    source: "human",
    text:
      "Tycker det är jobbigt att vuxna alltid säger att vi ska sluta med skärmar men sen sitter dom själva med mobilen halva middan. Mamma blev sur när jag sa det men hon vet att jag har rätt.",
    tells: [
      "Konkret observation (vuxna vid middan)",
      "Personlig konflikt med upplöst slut",
      "Talspråk: 'middan', 'dom'",
      "Egen åsikt utan att försöka vara balanserad",
    ],
  },
];

const TIME_PER_QUESTION = 15; // sekunder

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function AiEllerManniskaGame() {
  const [shuffled, setShuffled] = useState<Item[]>(() => shuffle(ITEMS));
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<("ai" | "human" | null)[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = shuffled.length;
  const item = shuffled[idx];

  // Timer
  useEffect(() => {
    if (revealed || done) {
      if (tickRef.current) clearInterval(tickRef.current);
      return;
    }
    setTimeLeft(TIME_PER_QUESTION);
    tickRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setRevealed(true);
          setAnswers((a) => [...a, null]);
          if (tickRef.current) clearInterval(tickRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [idx, revealed, done]);

  const answer = (choice: "ai" | "human") => {
    if (revealed) return;
    if (tickRef.current) clearInterval(tickRef.current);
    setAnswers((a) => [...a, choice]);
    setRevealed(true);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setRevealed(false);
    }
  };

  const reset = () => {
    setShuffled(shuffle(ITEMS));
    setIdx(0);
    setAnswers([]);
    setRevealed(false);
    setDone(false);
    setTimeLeft(TIME_PER_QUESTION);
  };

  const correctCount = answers.reduce((acc, a, i) => {
    return acc + (a === shuffled[i]?.source ? 1 : 0);
  }, 0);

  if (done) {
    const verdict =
      correctCount >= 9
        ? "Mästerlig läsare. Du har koll på AI-stilens tells."
        : correctCount >= 7
        ? "Bra koll. Träna mer på de generiska AI-formuleringarna."
        : correctCount >= 5
        ? "Bättre än slumpen — men AI lurar dig fortfarande lite. Det är poängen: AI-text går knappt att se."
        : "Slumpen presterar lika bra. Det är *inte* dåligt — det visar hur svårt det faktiskt är. Lär dig tellsen.";

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#fcd34d]/40 bg-[#0d1322] p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-[#fcd34d]" />
            <div>
              <div className="ms-mono text-[#94a3b8]">SLUTRESULTAT</div>
              <div className="text-3xl font-bold text-white">
                {correctCount} / {total} rätt
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-[#fde68a]">
            {verdict}
          </div>

          <div className="mb-6 space-y-2">
            <div className="ms-mono text-[#94a3b8]">SVARSGENOMGÅNG</div>
            {shuffled.map((it, i) => {
              const ans = answers[i];
              const correct = ans === it.source;
              return (
                <div
                  key={it.id}
                  className={`rounded-lg border p-3 text-sm ${
                    correct
                      ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-100"
                      : "border-rose-500/40 bg-rose-500/5 text-rose-100"
                  }`}
                >
                  <div className="ms-mono mb-1 flex items-center justify-between">
                    <span>
                      RUNDA {i + 1} · {it.source.toUpperCase()}
                    </span>
                    <span>{correct ? "✓" : ans === null ? "TIDEN UT" : "✗"}</span>
                  </div>
                  <div className="line-clamp-2 text-[#cbd5e1]">{it.text}</div>
                </div>
              );
            })}
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
      <div className="overflow-hidden rounded-xl border border-[#fcd34d]/40 bg-[#0d1322]">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-[#fcd34d] px-6 py-3">
          <div className="ms-mono font-bold text-[#0a0e1a]">
            AI ELLER MÄNNISKA · {idx + 1} / {total}
          </div>
          <div className="ms-mono flex items-center gap-1.5 font-bold text-[#0a0e1a]">
            <Timer className="h-3.5 w-3.5" />
            {timeLeft}s
          </div>
        </div>

        {/* Timer-bar */}
        <div className="h-1 w-full bg-[#1a2235]">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              timeLeft <= 5 ? "bg-rose-500" : "bg-[#fcd34d]"
            }`}
            style={{
              width: `${(timeLeft / TIME_PER_QUESTION) * 100}%`,
            }}
          />
        </div>

        <div className="space-y-6 p-6">
          {/* Texten */}
          <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-6 text-lg leading-relaxed text-white">
            <div className="ms-mono mb-3 text-[#94a3b8]">
              VEM HAR SKRIVIT DETTA?
            </div>
            &ldquo;{item.text}&rdquo;
          </div>

          {/* Knappar */}
          {!revealed && (
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => answer("ai")}
                className="group flex items-center justify-center gap-3 rounded-xl border-2 border-[#243248] bg-[#1a2235] p-5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:border-[#fcd34d] hover:bg-[#fcd34d]/10"
              >
                <Bot className="h-6 w-6 text-[#94a3b8] transition-colors group-hover:text-[#fcd34d]" />
                AI
              </button>
              <button
                type="button"
                onClick={() => answer("human")}
                className="group flex items-center justify-center gap-3 rounded-xl border-2 border-[#243248] bg-[#1a2235] p-5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:border-[#a5b4fc] hover:bg-[#a5b4fc]/10"
              >
                <User className="h-6 w-6 text-[#94a3b8] transition-colors group-hover:text-[#a5b4fc]" />
                Människa
              </button>
            </div>
          )}

          {/* Reveal */}
          {revealed && (
            <div className="ms-fadein space-y-4">
              <div
                className={`rounded-lg border p-5 ${
                  answers[idx] === item.source
                    ? "border-emerald-500/40 bg-emerald-500/10"
                    : "border-rose-500/40 bg-rose-500/10"
                }`}
              >
                <div className="mb-1 flex items-center gap-2 font-bold">
                  {answers[idx] === item.source ? (
                    <span className="text-emerald-300">RÄTT —</span>
                  ) : answers[idx] === null ? (
                    <span className="text-rose-300">TIDEN UT —</span>
                  ) : (
                    <span className="text-rose-300">FEL —</span>
                  )}
                  <span className="text-white">
                    {item.source === "ai"
                      ? "Det här är AI"
                      : "Det här är skrivet av en människa"}
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-5">
                <div className="ms-mono mb-3 text-[#94a3b8]">
                  TELLS ATT KÄNNA IGEN
                </div>
                <ul className="space-y-1.5 text-sm text-[#cbd5e1]">
                  {item.tells.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#fcd34d]">→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={next}
                className="ms-btn ms-btn-primary w-full sm:w-auto"
              >
                {idx + 1 === total ? "Se slutresultat" : "Nästa runda"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
