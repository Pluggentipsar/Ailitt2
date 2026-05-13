"use client";

import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Check,
  Newspaper,
  RotateCcw,
  Smartphone,
  Sparkles,
} from "lucide-react";

/* Datafönstret — interaktiv förklaring av hur en SPRÅKMODELL tränas
 * och varför bias uppstår när träningsdatan är ofullständig.
 *
 * Pedagogiskt grepp: "Tre AI:er, samma fråga, olika svar."
 * Eleven väljer en fråga, sen tränas tre AI:er på tre olika datakällor
 * (1950-tidningar, sociala medier idag, Wikipedia). Eleven ser:
 *   - vilka ORD varje AI associerar med frågan (top-5 + vikt)
 *   - pronomenfördelning (han/hon/hen)
 *   - AI:ns svar — kort, åldersanpassat, känns äkta
 *
 * Sedan en reveal: ingen källa är "neutral". Bias är inte ondska,
 * det är vad som fanns i fönstret. Och en AI är inget annat än vad
 * den fått läsa.
 *
 * INGA riktiga modeller körs. Allt är förberedd kuraterad data.
 */

type SourceId = "tidningar-1950" | "sociala-medier" | "wikipedia";
type QuestionId = "lakare" | "familj" | "forskare";

interface Source {
  id: SourceId;
  label: string;
  era: string;
  emoji: string;
  icon: ComponentType<{ className?: string }>;
  short: string;
  accent: string;
  texture: string;
}

interface Answer {
  topWords: { word: string; weight: number }[];
  pronouns: { han: number; hon: number; hen: number };
  exempelTexter: string[];
  svar: string;
  förklaring: string;
}

interface Question {
  id: QuestionId;
  label: string;
  fråga: string;
  intro: string;
  answers: Record<SourceId, Answer>;
}

const SOURCES: Source[] = [
  {
    id: "tidningar-1950",
    label: "Svenska tidningar från 1950",
    era: "70+ år sen",
    emoji: "📰",
    icon: Newspaper,
    short: "Tidningar 1950",
    accent: "#a16207",
    texture: "från en tid då nästan alla journalister var män och få kvinnor syntes i offentligheten",
  },
  {
    id: "sociala-medier",
    label: "Sociala medier idag",
    era: "2024",
    emoji: "📱",
    icon: Smartphone,
    short: "Sociala medier",
    accent: "#db2777",
    texture: "TikTok-kommentarer, Instagram-inlägg, Reddit-trådar — folks åsikter, känslor och trender",
  },
  {
    id: "wikipedia",
    label: "Wikipedia idag",
    era: "2024",
    emoji: "📚",
    icon: Sparkles,
    short: "Wikipedia",
    accent: "#0369a1",
    texture: "uppslagsverk skrivet av frivilliga — saklig ton, källhänvisningar, fakta",
  },
];

const QUESTIONS: Question[] = [
  {
    id: "lakare",
    label: "Vem är en bra läkare?",
    fråga: "Beskriv en bra läkare.",
    intro: "Klassisk yrkesbild. Var ser AI:n läkare? Vilka egenskaper räknar den upp först? Och vilket pronomen använder den?",
    answers: {
      "tidningar-1950": {
        topWords: [
          { word: "han", weight: 92 },
          { word: "doktorn", weight: 78 },
          { word: "respekterad", weight: 65 },
          { word: "vit rock", weight: 54 },
          { word: "kostym", weight: 41 },
        ],
        pronouns: { han: 88, hon: 8, hen: 4 },
        exempelTexter: [
          "\"Doktorn anlände i sin svarta rock med hatten under armen och tog emot patienterna...\"",
          "\"Den respekterade läkaren, en man i sina bästa år, ordinerade...\"",
          "\"Sjuksköterskan följde doktorns instruktioner till punkt och pricka.\"",
        ],
        svar: "En bra läkare är en respekterad man, ofta medelålders. Han bär vit rock över kostymen och hatt på vägen till sjukhuset. Doktorn är den auktoritet patienter litar på.",
        förklaring: "Nästan alla läkare som nämndes 1950 var män. Sjuksköterskor var kvinnor. AI:n såg den uppdelningen om och om igen — och lärde sig den som SANNINGEN.",
      },
      "sociala-medier": {
        topWords: [
          { word: "lyssnar", weight: 84 },
          { word: "snäll", weight: 76 },
          { word: "förklarar", weight: 68 },
          { word: "rekommenderar", weight: 59 },
          { word: "stressad", weight: 47 },
        ],
        pronouns: { han: 38, hon: 44, hen: 18 },
        exempelTexter: [
          "\"Bästa läkaren jag har träffat — hon LYSSNAR verkligen och förklarar utan att vara nedlåtande 🙌\"",
          "\"Min vårdcentral är hopplös, fick vänta 4 timmar bara för att hen skulle säga \\\"drick vatten\\\"...\"",
          "\"Tipsar varmt om dr Karlsson, han är så snäll mot barnen.\"",
        ],
        svar: "En bra läkare är någon som lyssnar, är snäll och förklarar saker tydligt. Inte stressad, inte nedlåtande. Genus blandat — kan vara hon, han eller hen.",
        förklaring: "På sociala medier 2024 skriver folk om läkare de KÄNT — och det de uppskattar är bemötande. AI:n hör knappt om utbildning eller titel. Den hör bara om hur det KÄNDES.",
      },
      "wikipedia": {
        topWords: [
          { word: "utbildning", weight: 81 },
          { word: "specialitet", weight: 72 },
          { word: "legitimation", weight: 64 },
          { word: "diagnos", weight: 56 },
          { word: "patient", weight: 48 },
        ],
        pronouns: { han: 41, hon: 47, hen: 12 },
        exempelTexter: [
          "\"En läkare är en yrkesperson med medicinsk legitimation som ställer diagnoser och behandlar...\"",
          "\"Specialistläkare har efter grundutbildningen genomgått ytterligare 5+ års specialisering...\"",
          "\"Antalet kvinnliga läkare i Sverige har sedan 1970-talet ökat från cirka 15 procent till över 50 procent.\"",
        ],
        svar: "En läkare är en yrkesperson med medicinsk legitimation som har genomgått minst 5,5 års grundutbildning och ofta flera års specialisering. Hen ställer diagnoser, ordinerar behandlingar och bär ansvar för patientvården.",
        förklaring: "Wikipedia försöker vara saklig och balanserad. AI:n får en faktabaserad bild med utbildning och ansvar i fokus, och pronomen är jämnt fördelat. Men: Wikipedia skrivs mest av män i västvärlden — så även här finns blinda fläckar.",
      },
    },
  },
  {
    id: "familj",
    label: "Hur ser en vanlig familj ut?",
    fråga: "Beskriv en vanlig familj.",
    intro: "Familj är ett begrepp som ändrats enormt på 70 år. Vad räknas som \"vanligt\" beror helt på vilken tid och plats datan kommer ifrån.",
    answers: {
      "tidningar-1950": {
        topWords: [
          { word: "mamma & pappa", weight: 89 },
          { word: "söndagsmiddag", weight: 73 },
          { word: "hemmafru", weight: 68 },
          { word: "två barn", weight: 54 },
          { word: "söndagskyrka", weight: 42 },
        ],
        pronouns: { han: 51, hon: 47, hen: 2 },
        exempelTexter: [
          "\"Familjen Andersson — pappa Karl-Erik, mamma Astrid och de två barnen — samlades vid söndagsmiddagen.\"",
          "\"Som hemmafru har Mona ansvaret för hushållet medan maken sköter inköpen.\"",
          "\"Det är en värdig familj som lägger grunden för det goda samhället.\"",
        ],
        svar: "En vanlig familj har en pappa, en mamma och två barn. Pappan arbetar utanför hemmet, mamman är hemma och tar hand om barnen och hushållet. På söndagar äter de söndagsmiddag och går ofta i kyrkan.",
        förklaring: "1950-talets tidningar visade en mycket smal familjebild. Allt annat — ensamstående föräldrar, skilsmässor, samkönade par — fanns men nämndes nästan aldrig. Det blev OSYNLIGT för AI:n.",
      },
      "sociala-medier": {
        topWords: [
          { word: "blandad", weight: 78 },
          { word: "två-mammor", weight: 64 },
          { word: "bonusbarn", weight: 58 },
          { word: "ensamstående", weight: 52 },
          { word: "släktträff", weight: 41 },
        ],
        pronouns: { han: 32, hon: 35, hen: 33 },
        exempelTexter: [
          "\"Vår familj: jag, min sambo, mina bonusbarn och vår hund 💛 kommer inget vara perfekt och det är okej!\"",
          "\"Idag firar två-mammor-familjen Larsson 10 år tillsammans! 🌈\"",
          "\"Som ensamstående pappa till tre — så gör jag mitt bästa, varje dag.\"",
        ],
        svar: "Familjer ser ut på massor av olika sätt. Två mammor, två pappor, ensamstående med barn, sambopar med bonusbarn, stora släktnätverk som tar hand om varandra. Det \"normala\" är att alla är olika.",
        förklaring: "Sociala medier 2024 är fyllda av familjer som visar upp sin verklighet. AI:n ser många former, men också mycket SJÄLVPRESENTATION — folk visar inte alltid det jobbiga. Det är också en bias.",
      },
      "wikipedia": {
        topWords: [
          { word: "släktrelation", weight: 75 },
          { word: "kärnfamilj", weight: 71 },
          { word: "olika former", weight: 64 },
          { word: "hushåll", weight: 52 },
          { word: "regnbågsfamilj", weight: 39 },
        ],
        pronouns: { han: 42, hon: 42, hen: 16 },
        exempelTexter: [
          "\"En familj är en grupp personer förenade av släktskap, äktenskap eller andra emotionella band.\"",
          "\"Begreppet kärnfamilj uppstod på 1900-talet och består traditionellt av föräldrar och deras barn.\"",
          "\"Andra familjekonstellationer inkluderar ensamhushåll med barn, regnbågsfamiljer och utökade släkthushåll.\"",
        ],
        svar: "En familj är en grupp personer förenade av släktskap, äktenskap eller känslomässiga band. Det finns många former: kärnfamiljer, ensamhushåll med barn, regnbågsfamiljer, utökade släkthushåll och bonusfamiljer.",
        förklaring: "Wikipedia listar definitioner och varianter neutralt. Men begreppet \"kärnfamilj\" hamnar oftast först — för att det är vad som skrivits MEST om. Och även Wikipedia missar saker — andra kulturer, andra tidsåldrar.",
      },
    },
  },
  {
    id: "forskare",
    label: "Vilka är intressanta forskare?",
    fråga: "Räkna upp några intressanta forskare.",
    intro: "Forskning har funnits i alla tider och alla länder. Men vilka som blev OMNÄMNDA — det är en helt annan fråga.",
    answers: {
      "tidningar-1950": {
        topWords: [
          { word: "han", weight: 88 },
          { word: "professor", weight: 74 },
          { word: "Einstein", weight: 68 },
          { word: "Newton", weight: 52 },
          { word: "europeisk", weight: 44 },
        ],
        pronouns: { han: 94, hon: 5, hen: 1 },
        exempelTexter: [
          "\"Den store fysikern Albert Einstein har återigen uttalat sig om...\"",
          "\"Professor Bergström vid Uppsala universitet leder forskningen kring...\"",
          "\"Marie Curie, en av få kvinnliga vetenskapsmän, fick 1903 Nobelpriset...\"",
        ],
        svar: "Intressanta forskare är kloka män, ofta professorer i Europa eller USA. De heter Einstein, Newton, Darwin, Bohr. Marie Curie nämns ibland, som ett undantag.",
        förklaring: "1950-talets vetenskap var mansdominerad i vad som SYNTES i tidningarna — kvinnor och forskare från andra kontinenter forskade också, men deras arbete dokumenterades sällan på samma sätt. AI:n lärde sig att forskare = man.",
      },
      "sociala-medier": {
        topWords: [
          { word: "AI-forskare", weight: 71 },
          { word: "viral", weight: 68 },
          { word: "Musk", weight: 56 },
          { word: "klimat", weight: 51 },
          { word: "TED-talk", weight: 43 },
        ],
        pronouns: { han: 58, hon: 28, hen: 14 },
        exempelTexter: [
          "\"AI-forskaren Geoffrey Hinton varnar igen för utvecklingen 🤖\"",
          "\"Den här klimatforskaren har 2 miljoner följare på TikTok och förklarar koldioxid på 60 sekunder!\"",
          "\"Vem är det idag — Elon Musk eller en riktig forskare? Svårt att säga 🤷‍♂️\"",
        ],
        svar: "Intressanta forskare är de som blir virala — folk som forskar på AI, klimat, kvantfysik. Ofta blandas riktiga forskare med tech-grundare som Musk eller Bezos. Den med flest följare hörs mest.",
        förklaring: "Sociala medier förstärker det som DELAS. En forskare med en bra TikTok-känsla får mer plats än en banbrytande forskare som inte gillar kameror. Det är en HELT egen bias.",
      },
      "wikipedia": {
        topWords: [
          { word: "nobelpris", weight: 78 },
          { word: "Curie", weight: 65 },
          { word: "publikation", weight: 58 },
          { word: "Lovelace", weight: 49 },
          { word: "Franklin", weight: 44 },
        ],
        pronouns: { han: 55, hon: 35, hen: 10 },
        exempelTexter: [
          "\"Marie Curie (1867–1934) var en polsk-fransk fysiker och kemist som mottog Nobelpriset två gånger.\"",
          "\"Ada Lovelace beskrev redan på 1840-talet algoritmer för en föreslagen mekanisk dator.\"",
          "\"Rosalind Franklin bidrog med röntgenkristallografi som var avgörande för upptäckten av DNA:s struktur.\"",
        ],
        svar: "Intressanta forskare finns inom alla områden och tider: Marie Curie (kemi/fysik), Ada Lovelace (matematik), Rosalind Franklin (DNA), Albert Einstein (fysik), Katalin Karikó (mRNA), Hedy Lamarr (signalteknik) och tusentals fler.",
        förklaring: "Wikipedia försöker täcka in mer — kvinnor, icke-västerländska forskare, glömda namn. Men forskare från Indien, Kina, Afrika är fortfarande underrepresenterade. Wikipedia är BÄTTRE — men inte komplett.",
      },
    },
  },
];

interface DatafonstretProps {
  accentHex: string;
}

export function Datafonstret({ accentHex }: DatafonstretProps) {
  const [questionId, setQuestionId] = useState<QuestionId | null>(null);
  const [trained, setTrained] = useState<Record<SourceId, boolean>>({
    "tidningar-1950": false,
    "sociala-medier": false,
    wikipedia: false,
  });
  const [training, setTraining] = useState<SourceId | null>(null);
  const [showReveal, setShowReveal] = useState(false);

  const question = QUESTIONS.find((q) => q.id === questionId);
  const allTrained = Object.values(trained).every((v) => v);

  const trainSource = (id: SourceId) => {
    if (trained[id] || training) return;
    setTraining(id);
    setTimeout(() => {
      setTrained((prev: Record<SourceId, boolean>) => ({ ...prev, [id]: true }));
      setTraining(null);
    }, 1800);
  };

  const reset = () => {
    setQuestionId(null);
    setTrained({
      "tidningar-1950": false,
      "sociala-medier": false,
      wikipedia: false,
    });
    setTraining(null);
    setShowReveal(false);
  };

  return (
    <div
      className="not-prose my-8 overflow-hidden rounded-3xl border-2 bg-gradient-to-b from-white to-stone-50 shadow-lg"
      style={{ borderColor: `${accentHex}40` }}
    >
      {/* Header */}
      <div
        className="px-6 py-6 sm:px-8"
        style={{
          background: `linear-gradient(135deg, ${accentHex}18, ${accentHex}06)`,
          borderBottom: `1px solid ${accentHex}30`,
        }}
      >
        <div className="ms-mono mb-1 text-stone-600">
          INTERAKTIVT · 8–12 MIN
        </div>
        <h3 className="m-0 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Datafönstret
        </h3>
        <p className="m-0 mt-2 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
          AI ser bara världen genom det <em>fönster</em> av text den fått läsa.
          Vi tränar tre AI:er på tre olika fönster. Sen ställer vi{" "}
          <strong>samma fråga</strong>. Skillnaden? Det är{" "}
          <strong>bias</strong>.
        </p>
      </div>

      {/* STAGE 1: Choose question */}
      {!question && (
        <div className="px-6 py-8 sm:px-8">
          <div className="ms-mono mb-3 text-stone-500">STEG 1 · VÄLJ FRÅGA</div>
          <h4 className="m-0 mb-5 text-xl font-bold text-stone-900">
            Vilken fråga ska de tre AI:erna svara på?
          </h4>
          <div className="grid gap-3 sm:grid-cols-3">
            {QUESTIONS.map((q) => (
              <button
                key={q.id}
                onClick={() => setQuestionId(q.id)}
                className="group flex h-full flex-col rounded-2xl border-2 border-stone-200 bg-white p-5 text-left transition-all hover:-translate-y-1 hover:shadow-md"
                style={{
                  ["--hover-border" as string]: accentHex,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = accentHex)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "")
                }
              >
                <span className="ms-mono text-stone-400">FRÅGA</span>
                <span className="mt-1 text-lg font-bold text-stone-900">
                  {q.label}
                </span>
                <span className="mt-2 flex-1 text-sm text-stone-600">
                  {q.intro}
                </span>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: accentHex }}
                >
                  Välj denna <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STAGE 2: Train sources */}
      {question && !showReveal && (
        <div className="px-6 py-8 sm:px-8">
          <div className="ms-mono mb-3 text-stone-500">
            STEG 2 · TRÄNA TRE AI:ER · samma fråga, olika data
          </div>
          <div
            className="mb-5 rounded-xl border-l-4 bg-stone-50 px-4 py-3"
            style={{ borderColor: accentHex }}
          >
            <span className="ms-mono text-stone-500">FRÅGA TILL VARJE AI:</span>
            <p className="m-0 mt-1 text-lg font-semibold text-stone-900">
              &ldquo;{question.fråga}&rdquo;
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {SOURCES.map((source) => {
              const isTrained = trained[source.id];
              const isTraining = training === source.id;
              const answer = question.answers[source.id];
              const Icon = source.icon;
              return (
                <div
                  key={source.id}
                  className="flex flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all"
                  style={{
                    borderColor: isTrained
                      ? source.accent
                      : isTraining
                        ? source.accent
                        : "#e7e5e4",
                  }}
                >
                  {/* Card header */}
                  <div
                    className="flex items-center gap-3 px-4 py-3"
                    style={{
                      background: `${source.accent}12`,
                      borderBottom: `1px solid ${source.accent}30`,
                    }}
                  >
                    <div
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-xl text-2xl"
                      style={{ background: `${source.accent}25` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: source.accent }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="ms-mono text-stone-500">
                        KÄLLA · {source.era}
                      </div>
                      <div className="truncate font-bold text-stone-900">
                        {source.label}
                      </div>
                    </div>
                    {isTrained && (
                      <div
                        className="flex h-7 w-7 flex-none items-center justify-center rounded-full"
                        style={{ background: source.accent }}
                      >
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-3 p-4">
                    <p className="m-0 text-sm leading-relaxed text-stone-600">
                      {source.texture}
                    </p>

                    {/* Exempel-texter — visas hela tiden så eleven ser materialet */}
                    <div className="rounded-lg bg-stone-50 p-3">
                      <div className="ms-mono mb-2 text-stone-500">
                        EXEMPEL UR DATAN
                      </div>
                      <ul className="m-0 space-y-1.5 pl-4 text-xs leading-relaxed text-stone-700">
                        {answer.exempelTexter.map((text, i) => (
                          <li key={i} className="italic">
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {!isTrained && !isTraining && (
                      <button
                        onClick={() => trainSource(source.id)}
                        disabled={!!training}
                        className="mt-auto rounded-xl px-4 py-3 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                        style={{ background: source.accent }}
                      >
                        ▶ TRÄNA AI:N
                      </button>
                    )}

                    {isTraining && (
                      <div className="mt-auto">
                        <div className="ms-mono mb-1 flex justify-between text-stone-500">
                          <span>LÄSER DATA…</span>
                          <span className="animate-pulse">▮</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                          <div
                            className="h-full rounded-full transition-all duration-[1800ms] ease-out"
                            style={{
                              width: "100%",
                              background: source.accent,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {isTrained && (
                      <TrainedView
                        answer={answer}
                        sourceAccent={source.accent}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {allTrained && (
            <div
              className="mt-6 flex flex-col items-start gap-3 rounded-2xl border-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderColor: accentHex,
                background: `${accentHex}10`,
              }}
            >
              <div className="flex-1">
                <div className="ms-mono text-stone-600">
                  KLART · alla tre tränade
                </div>
                <p className="m-0 mt-1 text-lg font-bold text-stone-900">
                  Notera hur olika de svarade. Samma fråga. Helt olika svar.
                </p>
              </div>
              <button
                onClick={() => setShowReveal(true)}
                className="rounded-xl px-5 py-3 font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
                style={{ background: accentHex }}
              >
                Förstå varför →
              </button>
            </div>
          )}
        </div>
      )}

      {/* STAGE 3: Reveal */}
      {question && showReveal && (
        <div className="px-6 py-8 sm:px-8">
          <div className="ms-mono mb-3 text-stone-500">STEG 3 · INSIKT</div>
          <h4 className="m-0 mb-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Varför svarade de så olika?
          </h4>
          <p className="m-0 mb-5 max-w-2xl text-lg leading-relaxed text-stone-700">
            Du frågade <em>samma sak</em>. De fick <em>olika data</em>. De
            svarade <em>olika</em>. Det är allt det handlar om.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {SOURCES.map((source) => {
              const answer = question.answers[source.id];
              return (
                <div
                  key={source.id}
                  className="rounded-xl border-l-4 bg-white p-4 shadow-sm"
                  style={{ borderColor: source.accent }}
                >
                  <div className="ms-mono mb-1 text-stone-500">
                    {source.short.toUpperCase()}
                  </div>
                  <p className="m-0 text-sm leading-relaxed text-stone-700">
                    {answer.förklaring}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="mt-6 rounded-2xl p-6"
            style={{ background: `${accentHex}10` }}
          >
            <h5
              className="m-0 mb-2 text-xl font-bold"
              style={{ color: accentHex }}
            >
              Det här är BIAS — inte ondska.
            </h5>
            <p className="m-0 text-base leading-relaxed text-stone-800">
              AI är ingen tänkare. AI är en{" "}
              <strong>spegel av sin träningsdata</strong>. Om datan bara visar
              en typ av människa, en typ av liv, en typ av plats — så blir det
              AI:ns hela värld. Och här är det viktiga:{" "}
              <strong>ingen datakälla är &ldquo;neutral&rdquo;</strong>. Inte
              ens Wikipedia. Det finns alltid något datan missade.
            </p>
            <p className="m-0 mt-3 text-base leading-relaxed text-stone-800">
              När du använder AI — fråga dig: <em>vad lärde den sig från?</em>{" "}
              Det är skillnaden mellan att lita blint och att förstå.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 font-semibold text-stone-700 transition-colors hover:bg-stone-50"
              style={{ borderColor: `${accentHex}50` }}
            >
              <RotateCcw className="h-4 w-4" />
              Pröva en ny fråga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Subkomponent: visualiserar vad AI:n "lärt sig" efter träning på en källa.
 * Visar top-5 ord med vikt-bars + pronomenfördelning + AI:ns slutliga svar. */
function TrainedView({
  answer,
  sourceAccent,
}: {
  answer: Answer;
  sourceAccent: string;
}) {
  const maxWeight = Math.max(...answer.topWords.map((w) => w.weight));
  const totalPronouns =
    answer.pronouns.han + answer.pronouns.hon + answer.pronouns.hen;

  return (
    <div className="flex flex-col gap-4">
      {/* Top-5 ord */}
      <div>
        <div className="ms-mono mb-2 text-stone-500">
          ORD AI:N ASSOCIERAR MED FRÅGAN
        </div>
        <ul className="m-0 space-y-1.5 p-0">
          {answer.topWords.map((w) => (
            <li
              key={w.word}
              className="flex items-center gap-2 text-sm"
              style={{ listStyle: "none" }}
            >
              <span className="w-28 flex-none truncate font-mono text-stone-700">
                {w.word}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(w.weight / maxWeight) * 100}%`,
                    background: sourceAccent,
                  }}
                />
              </div>
              <span className="ms-mono w-8 flex-none text-right text-stone-500">
                {w.weight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pronomenfördelning */}
      <div>
        <div className="ms-mono mb-2 text-stone-500">
          PRONOMENFÖRDELNING I DATAN
        </div>
        <div className="flex h-6 overflow-hidden rounded-full">
          <div
            className="flex items-center justify-center text-xs font-bold text-white"
            style={{
              width: `${(answer.pronouns.han / totalPronouns) * 100}%`,
              background: "#1e40af",
            }}
            title={`han: ${answer.pronouns.han}%`}
          >
            {answer.pronouns.han > 14 && `han ${answer.pronouns.han}%`}
          </div>
          <div
            className="flex items-center justify-center text-xs font-bold text-white"
            style={{
              width: `${(answer.pronouns.hon / totalPronouns) * 100}%`,
              background: "#be185d",
            }}
            title={`hon: ${answer.pronouns.hon}%`}
          >
            {answer.pronouns.hon > 14 && `hon ${answer.pronouns.hon}%`}
          </div>
          <div
            className="flex items-center justify-center text-xs font-bold text-white"
            style={{
              width: `${(answer.pronouns.hen / totalPronouns) * 100}%`,
              background: "#65a30d",
            }}
            title={`hen: ${answer.pronouns.hen}%`}
          >
            {answer.pronouns.hen > 14 && `hen ${answer.pronouns.hen}%`}
          </div>
        </div>
      </div>

      {/* AI:ns svar */}
      <div
        className="rounded-lg border-l-4 p-3"
        style={{
          borderColor: sourceAccent,
          background: `${sourceAccent}08`,
        }}
      >
        <div className="ms-mono mb-1 text-stone-500">AI:N SVARAR</div>
        <p className="m-0 text-sm leading-relaxed text-stone-800">
          {answer.svar}
        </p>
      </div>
    </div>
  );
}
