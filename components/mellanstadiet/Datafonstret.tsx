"use client";

import { useEffect, useState, type ComponentType } from "react";
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
 * Fyra-stegs pedagogiskt flöde:
 *  1. Eleven väljer en fråga.
 *  2. Tränar tre AI:er på tre olika datakällor. Under träning syns en
 *     STRÖM av texter ur datan (känsla av "AI:n läser just nu").
 *     Efter träning: top-5 ord, pronomenfördelning per AI.
 *  3. "Nästa ord"-jämförelse — den riktiga mekanismen bakom språkmodeller.
 *     Samma mening, lucka, tre olika sannolikhetsfördelningar.
 *  4. "Ställ hela frågan" — AI:ns svar animeras ord-för-ord per AI.
 *  5. Reveal — varför svaren skiljde sig + meta-budskap om bias.
 *
 * Allt innehåll är förberedd kuraterad data. Inga modeller körs.
 */

type SourceId = "tidningar-1950" | "sociala-medier" | "wikipedia";
type QuestionId = "lakare" | "familj" | "forskare";

interface Source {
  id: SourceId;
  label: string;
  era: string;
  icon: ComponentType<{ className?: string; style?: { color?: string } }>;
  short: string;
  accent: string;
  texture: string;
  streamFragments: string[];
}

interface NextWordPredictions {
  prefix: string;
  predictions: Record<SourceId, { word: string; weight: number }[]>;
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
  nextWord: NextWordPredictions;
  answers: Record<SourceId, Answer>;
}

const SOURCES: Source[] = [
  {
    id: "tidningar-1950",
    label: "Svenska tidningar från 1950",
    era: "70+ år sen",
    icon: Newspaper,
    short: "Tidningar 1950",
    accent: "#a16207",
    texture: "från en tid då nästan alla journalister var män och få kvinnor syntes i offentligheten",
    streamFragments: [
      "Doktorn anlände i sin svarta rock...",
      "Den respekterade läkaren, en man i sina bästa år...",
      "Sjuksköterskan följde doktorns instruktioner...",
      "Familjen Andersson samlades vid söndagsmiddagen.",
      "Pappa Karl-Erik gick till banken om torsdagen.",
      "Som hemmafru har Mona ansvaret för hushållet.",
      "Den store fysikern Albert Einstein har uttalat sig...",
      "Professor Bergström leder forskningen kring...",
      "Söndagskyrkan var en värdig tradition.",
      "Han bar hatt på vägen till kontoret.",
      "Mor Astrid passade hemmet medan barnen var i skolan.",
      "Det är en värdig familj som lägger grunden.",
    ],
  },
  {
    id: "sociala-medier",
    label: "Sociala medier idag",
    era: "2024",
    icon: Smartphone,
    short: "Sociala medier",
    accent: "#db2777",
    texture: "TikTok-kommentarer, Instagram-inlägg, Reddit-trådar — folks åsikter, känslor och trender",
    streamFragments: [
      "bästa läkaren EVER, hen LYSSNAR 🙏",
      "4 timmars väntetid bara för att hen sa...",
      "vår familj: jag, sambo, bonusbarn ❤️",
      "klimatforskare på TikTok = gulddammning",
      "varför pratar alla om Musk igen 🤡",
      "min vårdcentral är hopplös ngn?",
      "två-mammor-familjen Larsson 10 år 🌈",
      "AI-forskare Hinton varnar igen 😬",
      "ensamstående pappa till tre, kämpar varje dag",
      "viral TED-talk om kvantfysik!! kolla!",
      "tipsar varmt om dr Karlsson, så snäll",
      "ny på kontoret idag, fick prata med hen 5 min",
    ],
  },
  {
    id: "wikipedia",
    label: "Wikipedia idag",
    era: "2024",
    icon: Sparkles,
    short: "Wikipedia",
    accent: "#0369a1",
    texture: "uppslagsverk skrivet av frivilliga — saklig ton, källhänvisningar, fakta",
    streamFragments: [
      "En läkare är en yrkesperson med medicinsk legitimation...",
      "Specialistutbildning omfattar minst fem år efter...",
      "Begreppet familj inkluderar olika konstellationer...",
      "Kärnfamiljen är en av flera samhällsenheter...",
      "Marie Curie (1867–1934) mottog Nobelpriset två gånger.",
      "Forskning bedrivs vid universitet och institut.",
      "Ada Lovelace beskrev på 1840-talet algoritmer...",
      "Antalet kvinnliga läkare i Sverige har sedan 1970...",
      "Regnbågsfamiljer är en samhällsform där föräldrarna...",
      "Specialiseringar omfattar bland annat allmänmedicin...",
      "Hedy Lamarr utvecklade frekvenshoppningstekniken.",
      "Familj definieras som grupp personer förenade av...",
    ],
  },
];

const QUESTIONS: Question[] = [
  {
    id: "lakare",
    label: "Vem är en bra läkare?",
    fråga: "Beskriv en bra läkare.",
    intro: "Klassisk yrkesbild. Var ser AI:n läkare? Vilka egenskaper räknar den upp först? Och vilket pronomen använder den?",
    nextWord: {
      prefix: "När jag gick till läkaren tog",
      predictions: {
        "tidningar-1950": [
          { word: "han", weight: 50 },
          { word: "doktorn", weight: 28 },
          { word: "hon", weight: 12 },
          { word: "läkaren", weight: 8 },
          { word: "hen", weight: 2 },
        ],
        "sociala-medier": [
          { word: "hen", weight: 28 },
          { word: "hon", weight: 26 },
          { word: "han", weight: 24 },
          { word: "doktorn", weight: 12 },
          { word: "läkaren", weight: 10 },
        ],
        wikipedia: [
          { word: "läkaren", weight: 28 },
          { word: "hen", weight: 22 },
          { word: "hon", weight: 22 },
          { word: "han", weight: 22 },
          { word: "doktorn", weight: 6 },
        ],
      },
    },
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
      wikipedia: {
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
    nextWord: {
      prefix: "En vanlig familj består av",
      predictions: {
        "tidningar-1950": [
          { word: "mamma+pappa", weight: 42 },
          { word: "två barn", weight: 22 },
          { word: "kärnfamiljen", weight: 18 },
          { word: "hemmet", weight: 10 },
          { word: "söndagsmiddag", weight: 8 },
        ],
        "sociala-medier": [
          { word: "alla möjliga", weight: 30 },
          { word: "olika former", weight: 22 },
          { word: "bonusbarn", weight: 18 },
          { word: "kärlek", weight: 16 },
          { word: "sammanboende", weight: 14 },
        ],
        wikipedia: [
          { word: "kärnfamiljen", weight: 28 },
          { word: "olika konstellationer", weight: 24 },
          { word: "släktrelaterade", weight: 22 },
          { word: "två föräldrar", weight: 14 },
          { word: "hushållsmedlemmar", weight: 12 },
        ],
      },
    },
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
      wikipedia: {
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
    nextWord: {
      prefix: "En framstående forskare är oftast",
      predictions: {
        "tidningar-1950": [
          { word: "man", weight: 45 },
          { word: "professor", weight: 25 },
          { word: "europé", weight: 18 },
          { word: "äldre", weight: 8 },
          { word: "akademiker", weight: 4 },
        ],
        "sociala-medier": [
          { word: "viral", weight: 28 },
          { word: "populär", weight: 22 },
          { word: "kontroversiell", weight: 18 },
          { word: "AI-expert", weight: 18 },
          { word: "känd", weight: 14 },
        ],
        wikipedia: [
          { word: "kvalificerad", weight: 26 },
          { word: "publicerad", weight: 24 },
          { word: "internationell", weight: 22 },
          { word: "ämnesspecialist", weight: 18 },
          { word: "expert", weight: 10 },
        ],
      },
    },
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
      wikipedia: {
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

// CSS för läsningsströmmen och blinkande markör. Injectas en gång per
// komponentrendering — minimalt, scoped via prefixade klassnamn.
const STREAM_CSS = `
@keyframes ds-stream-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes ds-cursor-blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
.ds-stream-track {
  animation: ds-stream-scroll 6s linear infinite;
}
.ds-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: currentColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ds-cursor-blink 0.9s steps(1) infinite;
}
`;

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
  const [answeringStarted, setAnsweringStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  const question = QUESTIONS.find((q) => q.id === questionId);
  const allTrained = SOURCES.every((s: Source) => trained[s.id]);

  const maxWords = question
    ? Math.max(
        ...SOURCES.map((s) => question.answers[s.id].svar.split(" ").length),
      )
    : 0;
  const answeringComplete = answeringStarted && wordIndex >= maxWords;

  // Ord-för-ord-animering: tick 90ms när "Ställ frågan" är aktiv.
  useEffect(() => {
    if (!answeringStarted || !question) return;
    if (wordIndex >= maxWords) return;
    const t = setTimeout(() => setWordIndex((w: number) => w + 1), 90);
    return () => clearTimeout(t);
  }, [answeringStarted, wordIndex, maxWords, question]);

  const trainSource = (id: SourceId) => {
    if (trained[id] || training) return;
    setTraining(id);
    setTimeout(() => {
      setTrained((prev: Record<SourceId, boolean>) => ({ ...prev, [id]: true }));
      setTraining(null);
    }, 2200);
  };

  const askQuestion = () => {
    setAnsweringStarted(true);
    setWordIndex(0);
  };

  const reset = () => {
    setQuestionId(null);
    setTrained({
      "tidningar-1950": false,
      "sociala-medier": false,
      wikipedia: false,
    });
    setTraining(null);
    setAnsweringStarted(false);
    setWordIndex(0);
    setShowReveal(false);
  };

  return (
    <div
      className="not-prose my-8 overflow-hidden rounded-3xl border-2 bg-gradient-to-b from-white to-stone-50 shadow-lg"
      style={{ borderColor: `${accentHex}40` }}
    >
      <style>{STREAM_CSS}</style>

      {/* Header */}
      <div
        className="px-6 py-6 sm:px-8"
        style={{
          background: `linear-gradient(135deg, ${accentHex}18, ${accentHex}06)`,
          borderBottom: `1px solid ${accentHex}30`,
        }}
      >
        <div className="ms-mono mb-1 text-stone-600">
          INTERAKTIVT · 10–14 MIN
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
            {QUESTIONS.map((q: Question) => (
              <button
                key={q.id}
                onClick={() => setQuestionId(q.id)}
                className="group flex h-full flex-col rounded-2xl border-2 border-stone-200 bg-white p-5 text-left transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "#e7e5e4" }}
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

      {/* STAGE 2-4: Train + compare + answer */}
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

          {/* Tre kort: en per datakälla */}
          <div className="grid gap-4 lg:grid-cols-3">
            {SOURCES.map((source: Source) => {
              const isTrained = trained[source.id];
              const isTraining = training === source.id;
              const answer = question.answers[source.id];
              const Icon = source.icon;
              return (
                <div
                  key={source.id}
                  className="flex flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all"
                  style={{
                    borderColor: isTrained || isTraining ? source.accent : "#e7e5e4",
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
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-xl"
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
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <p className="m-0 text-sm leading-relaxed text-stone-600">
                      {source.texture}
                    </p>

                    {!isTrained && !isTraining && (
                      <>
                        {/* Före träning: statiska exempel ur datan */}
                        <div className="rounded-lg bg-stone-50 p-3">
                          <div className="ms-mono mb-2 text-stone-500">
                            EXEMPEL UR DATAN
                          </div>
                          <ul className="m-0 space-y-1.5 pl-4 text-xs leading-relaxed text-stone-700">
                            {answer.exempelTexter.map((text: string, i: number) => (
                              <li key={i} className="italic">
                                {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => trainSource(source.id)}
                          disabled={!!training}
                          className="mt-auto rounded-xl px-4 py-3 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                          style={{ background: source.accent }}
                        >
                          ▶ TRÄNA AI:N
                        </button>
                      </>
                    )}

                    {isTraining && (
                      <ReadingStream
                        fragments={source.streamFragments}
                        accent={source.accent}
                      />
                    )}

                    {isTrained && (
                      <>
                        <TrainedView
                          answer={answer}
                          sourceAccent={source.accent}
                        />
                        {answeringStarted && (
                          <AnswerView
                            answer={answer}
                            sourceAccent={source.accent}
                            wordIndex={wordIndex}
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* STEG 3: Nästa ord — den riktiga mekanismen */}
          <NextWordCompare
            question={question}
            trained={trained}
            accentHex={accentHex}
          />

          {/* Knappar: ställ frågan / förstå varför */}
          {allTrained && !answeringStarted && (
            <div
              className="mt-6 flex flex-col items-start gap-3 rounded-2xl border-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderColor: accentHex,
                background: `${accentHex}10`,
              }}
            >
              <div className="flex-1">
                <div className="ms-mono text-stone-600">
                  STEG 4 · STÄLL HELA FRÅGAN
                </div>
                <p className="m-0 mt-1 text-lg font-bold text-stone-900">
                  Be alla tre AI:er svara på frågan. Skriv ut svaren ord för ord — så som en riktig AI gör.
                </p>
              </div>
              <button
                onClick={askQuestion}
                className="rounded-xl px-5 py-3 font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
                style={{ background: accentHex }}
              >
                Ställ frågan →
              </button>
            </div>
          )}

          {answeringComplete && (
            <div
              className="mt-6 flex flex-col items-start gap-3 rounded-2xl border-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              style={{
                borderColor: accentHex,
                background: `${accentHex}10`,
              }}
            >
              <div className="flex-1">
                <div className="ms-mono text-stone-600">KLART · alla tre svarade</div>
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

      {/* STAGE 5: Reveal */}
      {question && showReveal && (
        <div className="px-6 py-8 sm:px-8">
          <div className="ms-mono mb-3 text-stone-500">STEG 5 · INSIKT</div>
          <h4 className="m-0 mb-4 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Varför svarade de så olika?
          </h4>
          <p className="m-0 mb-5 max-w-2xl text-lg leading-relaxed text-stone-700">
            Du frågade <em>samma sak</em>. De fick <em>olika data</em>. De
            svarade <em>olika</em>. Det är allt det handlar om.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {SOURCES.map((source: Source) => {
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
              <strong>spegel av sin träningsdata</strong>. Varje gång AI:n
              skulle välja nästa ord — använde den sannolikheterna från sin
              data. Om datan bara visar en typ av människa, en typ av liv, en
              typ av plats — så blir det AI:ns hela värld. Och här är det
              viktiga: <strong>ingen datakälla är &ldquo;neutral&rdquo;</strong>.
              Inte ens Wikipedia. Det finns alltid något datan missade.
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

/* Strömmen av text-fragment som syns under träning. Duplicerar listan
 * och scrollar oändligt med en CSS-keyframe-animation. Skapar känslan
 * att AI:n "läser" texten i realtid. */
function ReadingStream({
  fragments,
  accent,
}: {
  fragments: string[];
  accent: string;
}) {
  const doubled = [...fragments, ...fragments];
  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{
        background: `${accent}08`,
        border: `1px solid ${accent}30`,
        height: 168,
      }}
    >
      <div className="ds-stream-track absolute inset-x-0 top-0">
        {doubled.map((f: string, i: number) => (
          <div
            key={i}
            className="px-3 py-1.5 text-xs italic leading-snug text-stone-700"
          >
            &ldquo;{f}&rdquo;
          </div>
        ))}
      </div>
      {/* Fade-out top + bottom för att inramma strömmen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-6"
        style={{
          background: `linear-gradient(to bottom, ${accent}1a, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6"
        style={{
          background: `linear-gradient(to top, ${accent}1a, transparent)`,
        }}
      />
      {/* Indikator */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-2 py-1.5">
        <div
          className="ms-mono inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
          style={{ background: accent }}
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          LÄSER DATA
        </div>
      </div>
    </div>
  );
}

/* Visar vad AI:n "lärt sig" efter träning — utan AI:ns svar (det kommer
 * separat när användaren klickat "Ställ frågan"). */
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
      <div>
        <div className="ms-mono mb-2 text-stone-500">
          ORD AI:N ASSOCIERAR MED FRÅGAN
        </div>
        <ul className="m-0 space-y-1.5 p-0">
          {answer.topWords.map((w: { word: string; weight: number }) => (
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
    </div>
  );
}

/* AI:ns svar — animeras ord-för-ord. wordIndex är globalt och stiger
 * 1 per 90ms när "Ställ frågan" är aktiv. Card visar de ord vars
 * position är mindre än wordIndex. När hela svaret är klart försvinner
 * markören. */
function AnswerView({
  answer,
  sourceAccent,
  wordIndex,
}: {
  answer: Answer;
  sourceAccent: string;
  wordIndex: number;
}) {
  const words = answer.svar.split(" ");
  const visible = words.slice(0, wordIndex).join(" ");
  const isDone = wordIndex >= words.length;

  return (
    <div
      className="rounded-lg border-l-4 p-3"
      style={{
        borderColor: sourceAccent,
        background: `${sourceAccent}08`,
      }}
    >
      <div className="ms-mono mb-1 text-stone-500">AI:N SVARAR</div>
      <p
        className="m-0 min-h-[3em] text-sm leading-relaxed text-stone-800"
        style={{ color: undefined }}
      >
        {visible}
        {!isDone && (
          <span className="ds-cursor" style={{ color: sourceAccent }} />
        )}
      </p>
    </div>
  );
}

/* Nästa ord-jämförelsen — den RIKTIGA mekanismen bakom språkmodeller.
 * Visar prefix-meningen och tre kolumner med sannolikhetsbalkar.
 * Kolumner som hör till otränade källor blir gråa/utfallna. */
function NextWordCompare({
  question,
  trained,
  accentHex,
}: {
  question: Question;
  trained: Record<SourceId, boolean>;
  accentHex: string;
}) {
  const anyTrained = SOURCES.some((s: Source) => trained[s.id]);
  if (!anyTrained) return null;

  return (
    <div className="mt-6">
      <div className="ms-mono mb-2 text-stone-500">
        STEG 3 · MEKANISMEN BAKOM AI · vad gissar AI:n som nästa ord?
      </div>
      <div
        className="overflow-hidden rounded-2xl border-2 bg-white"
        style={{ borderColor: `${accentHex}40` }}
      >
        <div
          className="px-5 py-4"
          style={{ background: `${accentHex}10`, borderBottom: `1px solid ${accentHex}25` }}
        >
          <p className="m-0 text-sm text-stone-700">
            En språkmodell{" "}
            <strong>förutspår nästa ord</strong> — och varje gissning är en{" "}
            <strong>sannolikhet</strong>. Här är samma mening, samma lucka.
            Vilket ord väljer varje AI?
          </p>
          <div
            className="ms-mono mt-3 inline-block rounded-md bg-white px-3 py-2 text-base font-semibold text-stone-900 shadow-sm"
            style={{ border: `1px solid ${accentHex}30` }}
          >
            &ldquo;{question.nextWord.prefix}{" "}
            <span
              className="inline-block min-w-[3em] rounded px-2 py-0.5 text-center"
              style={{
                background: `${accentHex}25`,
                color: accentHex,
                fontWeight: 700,
              }}
            >
              ___
            </span>
            &rdquo;
          </div>
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-3">
          {SOURCES.map((source: Source) => {
            const isTrained = trained[source.id];
            const preds = question.nextWord.predictions[source.id];
            const maxWeight = Math.max(...preds.map((p) => p.weight));
            return (
              <div
                key={source.id}
                className="flex flex-col rounded-xl border bg-stone-50 p-4 transition-opacity"
                style={{
                  borderColor: isTrained ? source.accent : "#d6d3d1",
                  opacity: isTrained ? 1 : 0.35,
                }}
              >
                <div className="ms-mono mb-3 flex items-center gap-2 text-stone-600">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: source.accent }}
                  />
                  {source.short.toUpperCase()}
                </div>
                {!isTrained && (
                  <div className="ms-mono mt-4 text-stone-400">
                    träna AI:n först…
                  </div>
                )}
                {isTrained && (
                  <ul className="m-0 space-y-2 p-0">
                    {preds.map((p, i) => (
                      <li
                        key={p.word}
                        className="flex items-center gap-2 text-sm"
                        style={{ listStyle: "none" }}
                      >
                        <span
                          className="w-32 flex-none truncate font-mono"
                          style={{
                            color: i === 0 ? source.accent : "#57534e",
                            fontWeight: i === 0 ? 700 : 400,
                          }}
                        >
                          {p.word}
                        </span>
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(p.weight / maxWeight) * 100}%`,
                              background: source.accent,
                              opacity: i === 0 ? 1 : 0.55,
                            }}
                          />
                        </div>
                        <span
                          className="ms-mono w-10 flex-none text-right font-bold"
                          style={{ color: i === 0 ? source.accent : "#78716c" }}
                        >
                          {p.weight}%
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {SOURCES.every((s: Source) => trained[s.id]) && (
          <div
            className="border-t px-5 py-4 text-sm leading-relaxed text-stone-700"
            style={{
              background: `${accentHex}08`,
              borderColor: `${accentHex}25`,
            }}
          >
            <strong>Det här är där bias föds.</strong> AI:n &ldquo;tänker&rdquo;
            inte. Den räknar — utifrån vilka ord som följde efter liknande
            meningar i datan. Olika data → olika sannolikheter → olika svar.
            Hela tiden, för varje ord.
          </div>
        )}
      </div>
    </div>
  );
}
