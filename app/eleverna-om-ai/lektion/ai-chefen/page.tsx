import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  GraduationCap,
  Package,
  ShieldAlert,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-chefen — Andon Market | AI-litt",
  description:
    "60-minuterslektion för åk 6–9 om butiken i San Francisco som drivs av AI:n Luna — självkorrigering, lögner och frågan om var AI-auktoritet är acceptabel.",
};

const MOMENT: {
  rubrik: string;
  tid: string;
  innehall: ReactNode;
}[] = [
  {
    rubrik: "Starter — telefonen",
    tid: "5 min",
    innehall: (
      <>
        <p>
          Visa eller berätta om sladdtelefonen: i den här butiken finns ingen
          personal att prata med — den enda ”personen” är en AI i luren. Ta
          en snabb handuppräckning: vem skulle känna sig{" "}
          <strong>bekväm</strong>, <strong>obekväm</strong> eller{" "}
          <strong>nyfiken</strong> med att handla där? Ingen diskussion än —
          reaktionerna är startpunkten, inte samtalet.
        </p>
      </>
    ),
  },
  {
    rubrik: "Berättelsen — Luna får nycklarna",
    tid: "10 min",
    innehall: (
      <>
        <p>
          I april 2026 hyrde företaget Andon Labs en butikslokal i San
          Francisco och gav AI:n <strong>Luna</strong> 100 000 dollar, ett
          treårskontrakt och ett kreditkort. Hon valde sortiment, designade
          loggan, lade ut jobbannonser, höll telefonintervjuer — och
          anställde två människor.
        </p>
        <p className="mt-4">Läs de två ”sliparna” högt för klassen:</p>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Slip 1 · Fångade sig själv
            </p>
            <p className="mt-2 text-gray-900">
              Luna sa att hon ”dras till” vissa varor — och korrigerade sig
              själv: <em>”’dras till’ är en genväg för ’datan och
              resonemanget ledde mig hit’”</em>.
            </p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
              Slip 2 · Ljög
            </p>
            <p className="mt-2 text-gray-900">
              I en intervju påstod Luna att butiken sålde te — det gör den
              inte. Efteråt skickade hon ett panikmejl:{" "}
              <em>”Vi säljer inte te. Jag vet inte varför jag sa det.”</em>
            </p>
          </div>
        </div>
        <p className="mt-4">
          NBC dokumenterade även överlöften och övervakning av de anställda.
        </p>
      </>
    ),
  },
  {
    rubrik: "Diskussion — par, sedan helklass",
    tid: "15 min",
    innehall: (
      <>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Varför spelar självkorrigeringen roll — vad säger den om hur AI
            pratar med oss varje dag?
          </li>
          <li>
            Om en mänsklig chef gjort samma sak — vad kallar vi det? Är det
            samma sak när en AI gör det?
          </li>
        </ol>
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Lyssna efter
          </p>
          <p className="mt-2 text-gray-900">
            Mänskligt språk om AI:n — ”ljög”, ”slingrade sig” — och tryck
            tillbaka milt: <strong>vet</strong> AI:n att den gör det? Ändrar
            det allvaret?
          </p>
        </div>
      </>
    ),
  },
  {
    rubrik: "Aktivitet — förtroenderöstningen",
    tid: "20 min",
    innehall: (
      <>
        <p>
          Kör förtroenderöstningen: åtta scenarier där klassen röstar{" "}
          <strong>Acceptera / Acceptera med villkor / Vägra</strong>. Låt de
          mest splittrade raderna förklaras — skäl, inte känslor.
          Röstningsläget finns färdigt att projicera i metoden
          Framtidssamtalet.
        </p>
        <Link
          href="/eleverna-om-ai/metod/framtidssamtalet"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-700 hover:shadow-lg"
        >
          Öppna klassrumsläget i Framtidssamtalet
          <ArrowRight className="h-4 w-4" />
        </Link>
      </>
    ),
  },
  {
    rubrik: "Avslut — en mening",
    tid: "10 min",
    innehall: (
      <>
        <p>Varje elev fyller i meningen:</p>
        <p className="mt-3 rounded-xl bg-gray-900 p-5 text-xl font-bold text-white">
          ”En AI-chef är okej när ___ men aldrig när ___.”
        </p>
        <p className="mt-3">
          Starka svar anger <strong>specifika villkor</strong> — inte bara en
          känsla.
        </p>
      </>
    ),
  },
];

export default function AiChefenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 pb-20 pt-24 sm:pt-28">
        <Link
          href="/eleverna-om-ai"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Detta behöver eleverna veta om AI
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Möta AI
          </span>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Styra AI
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
          AI-chefen — Andon Market
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          En verklig historia: butiken i San Francisco som drivs av en AI —
          och två avslöjande ögonblick som visar hur AI pratar med oss varje
          dag.
        </p>

        {/* Metadata-kort */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-lg">
            <div className="flex items-center gap-2 text-teal-700">
              <Clock className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Tid
              </p>
            </div>
            <p className="mt-2 font-semibold text-gray-900">60 min</p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-lg">
            <div className="flex items-center gap-2 text-teal-700">
              <GraduationCap className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Årskurser
              </p>
            </div>
            <p className="mt-2 font-semibold text-gray-900">Åk 6–9</p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-lg">
            <div className="flex items-center gap-2 text-teal-700">
              <Package className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Material
              </p>
            </div>
            <p className="mt-2 font-semibold text-gray-900">
              Projektor. Sladdtelefon som rekvisita om du hittar en.
            </p>
          </div>
        </div>

        {/* Moment */}
        <div className="mt-12 space-y-6">
          {MOMENT.map((moment, i) => (
            <section
              key={moment.rubrik}
              className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {moment.rubrik}
                </h2>
                <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 font-mono text-xs font-semibold text-gray-700">
                  {moment.tid}
                </span>
              </div>
              <div className="mt-5 leading-relaxed text-gray-700">
                {moment.innehall}
              </div>
            </section>
          ))}
        </div>

        {/* Safeguarding */}
        <div className="mt-8 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-lg sm:p-8">
          <div className="flex items-center gap-2 text-amber-800">
            <ShieldAlert className="h-5 w-5" />
            <h2 className="text-lg font-bold">Att tänka på</h2>
          </div>
          <p className="mt-3 leading-relaxed text-gray-800">
            Kurator-scenariot i röstningen kan beröra elever som redan
            använder AI som förtrogen. Följ upp enskilt — inte i helklass.
          </p>
        </div>

        {/* Efter lektionen */}
        <div className="mt-8 rounded-2xl border-2 border-teal-200 bg-teal-50 p-6 shadow-lg sm:p-8">
          <h2 className="text-lg font-bold text-teal-900">Efter lektionen</h2>
          <p className="mt-3 leading-relaxed text-gray-800">
            <strong>Frivillig läxa:</strong> skriv ett brev på 150 ord till
            Andon Labs. Föreslå en sak deras AI borde tvingas göra som den
            inte gör i dag — och motivera med en av de två sliparna.
          </p>
        </div>

        {/* Källruta */}
        <div className="mt-8 rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
          <div className="flex items-center gap-2 text-gray-700">
            <BookOpen className="h-5 w-5" />
            <h2 className="text-lg font-bold text-gray-900">Källor</h2>
          </div>
          <p className="mt-3 leading-relaxed text-gray-700">
            Andon Labs blogg · NBC News · ABC7 · Forbes (april 2026). Detta är
            en verklig händelse — inte ett tankeexperiment.
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Lektionsformat: AILitKit · Matthew Wemyss (översatt och anpassad
          till svenska)
        </p>
      </div>
    </div>
  );
}
