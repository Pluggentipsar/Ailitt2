import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  GraduationCap,
  Package,
  ShieldAlert,
  BookOpen,
  Bot,
  Mail,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Möt din nya kollega | AI-litt",
  description:
    "60-minuterslektion för åk 9–gymnasiet om AI-agenten Riley som tog juniorjobbet — ansvar, den saknade pinnen och vad som händer med det första jobbet.",
};

const MOMENT: {
  rubrik: string;
  tid: string;
  innehall: ReactNode;
}[] = [
  {
    rubrik: "Anslag — Riley på skärmen",
    tid: "8 min",
    innehall: (
      <>
        <p>
          Ha profilkortet på skärmen när eleverna kommer in — utan
          förklaring. Samla magkänslereaktioner, kommentera ingenting än.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md">
          <div className="flex items-center gap-4 border-b border-gray-200 bg-gray-50 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <Bot className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">Riley</p>
              <p className="text-sm font-medium text-gray-600">
                Junior Marketing Coordinator · autonom AI-agent
              </p>
            </div>
          </div>
          <dl className="grid gap-x-6 gap-y-3 p-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kostnad
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">
                12 000 dollar/år i beräkningskraft
                <span className="block text-sm font-normal text-gray-500">
                  (mänsklig junior: 42 000)
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Arbetstid
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">
                Dygnet runt
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Utvärdering
              </dt>
              <dd className="mt-1 font-semibold text-gray-900">
                Kvartalsvis, av chefen Sarah Chen
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Obs — pronomen
          </p>
          <p className="mt-2 text-gray-900">
            Kalla Riley <strong>”den”</strong>. Om elever säger ”hen” — rätta
            inte. Fråga varför.
          </p>
        </div>
      </>
    ),
  },
  {
    rubrik: "Vinsten — what’s the catch?",
    tid: "10 min",
    innehall: (
      <>
        <p>
          En konkurrensanalys som tar en mänsklig junior tre veckor levererar
          Riley på tre timmar. Chefen är nöjd. Fråga klassen:{" "}
          <em>”What’s the catch?”</em>
        </p>
        <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
            Begreppet att landa
          </p>
          <p className="mt-2 text-gray-900">
            <strong>Den saknade pinnen:</strong> vad lär sig juniorn som
            aldrig fick göra jobbet? Karriärstegen förutsätter att man får
            klättra på den nedersta pinnen — men det är den som försvinner
            först.
          </p>
        </div>
      </>
    ),
  },
  {
    rubrik: "Misstaget — vem bär ansvaret?",
    tid: "14 min",
    innehall: (
      <>
        <p>Visa mejlet Riley skickade — helt på egen hand:</p>
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md">
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Mail className="h-4 w-4" />
              <span className="font-mono text-xs">Skickat 03:47</span>
            </div>
            <dl className="mt-2 space-y-1 font-mono text-sm text-gray-700">
              <div>
                <dt className="inline font-semibold">Från: </dt>
                <dd className="inline">Riley · Meridian Marketing</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Till: </dt>
                <dd className="inline">4 012 kunder</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Ämne: </dt>
                <dd className="inline">
                  Bara i veckan — Meridian Pro för 490 kr/år
                </dd>
              </div>
            </dl>
          </div>
          <div className="p-5 text-gray-800">
            <p>
              Hej! Som uppskattad kund erbjuds du vårt Pro-paket för{" "}
              <strong>490 kr per år</strong>. Teckna innan söndag så låser vi
              priset i tre år. /Riley
            </p>
          </div>
        </div>
        <p className="mt-4">
          Rätt pris: <strong>1 490 kr</strong>. 312 kunder hann teckna. När
          företaget backade blev goodwillförlusten stor.
        </p>
        <p className="mt-4">
          <strong>Grupper om fyra rankar ansvaret</strong> — mest till minst:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-900">
            a) Chefen Sarah
          </li>
          <li className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-900">
            b) Riley
          </li>
          <li className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-900">
            c) Företaget Meridian
          </li>
          <li className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-900">
            d) Teknikleverantören
          </li>
        </ul>
        <p className="mt-4">
          Juridiskt hamnar ansvaret mest på a + c — men den moraliska
          intuitionen varierar, och det är poängen. En mänsklig junior kunde
          ha fått sparken. Riley kan inte sparkas — bara stängas av. Vad
          betyder ”ansvar” då?
        </p>
      </>
    ),
  },
  {
    rubrik: "Kvartalsutvärderingen",
    tid: "16 min",
    innehall: (
      <>
        <p>Visa HR-memot:</p>
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 p-4">
            <FileText className="h-4 w-4 text-gray-500" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wide text-gray-600">
              Internt HR-memo · Kvartalsutvärdering
            </span>
          </div>
          <ul className="space-y-3 p-5 text-gray-800">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              Riley: <strong>4,2× output</strong> jämfört med juniorteamet
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              Tre kollegor omplacerade till ”Agent Operations” — två uppsagda
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              Sarah Chen befordrad: ”Director of Marketing &amp; AI Agent
              Manager”
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              Nyexaminerade Maya får avslag på sin ansökan — ”vi anställer
              inte för den rollen längre”
            </li>
          </ul>
        </div>
        <p className="mt-4">
          <strong>Parsamtal:</strong> Maya är din vän — vad säger du till
          henne?
        </p>
        <p className="mt-3">
          Landa försiktigt: poängen är inte ”AI tar dina jobb” utan att{" "}
          <em>det tidiga yrkeslivets form ritas om i realtid</em>.
        </p>
      </>
    ),
  },
  {
    rubrik: "Tvåhörnsdebatt",
    tid: "10 min",
    innehall: (
      <>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Ja-hörnet
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              Riley hör hemma på organisationsschemat.
            </p>
          </div>
          <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
              Nej-hörnet
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              Riley är ett verktyg, inte en medarbetare.
            </p>
          </div>
        </div>
        <p className="mt-4">
          Osäkra ställer sig i mitten. Den som byter sida under debatten
          förklarar varför. Avsluta <strong>öppet</strong> — frågan har inget
          facit.
        </p>
      </>
    ),
  },
  {
    rubrik: "Plenary — en mening",
    tid: "2 min",
    innehall: (
      <>
        <p className="rounded-xl bg-gray-900 p-5 text-xl font-bold text-white">
          ”Om tio år kommer mitt första jobb förmodligen att ___, och jag
          behöver ___.”
        </p>
      </>
    ),
  },
];

export default function NyaKolleganPage() {
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
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Styra AI
          </span>
          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
            Forma AI
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
          Möt din nya kollega
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Riley kostar en fjärdedel av en junior och jobbar dygnet runt —
          tills den mejlar 4 012 kunder fel pris. Vem bär ansvaret, och vad
          händer med det första jobbet?
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
            <p className="mt-2 font-semibold text-gray-900">
              Åk 9 – gymnasiet · gärna med SYV
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-lg">
            <div className="flex items-center gap-2 text-teal-700">
              <Package className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wide">
                Material
              </p>
            </div>
            <p className="mt-2 font-semibold text-gray-900">
              Projektor — artefakterna (profilkort, mejl, HR-memo) finns på
              den här sidan.
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
            <strong>Don’t predict.</strong> Var ärlig om osäkerheten utan att
            bli katastrofisk — ”vi vet inte” är ett fullgott svar. Fånga upp
            elever som verkar oroliga för sin framtid enskilt efteråt.
          </p>
        </div>

        {/* Efter lektionen */}
        <div className="mt-8 rounded-2xl border-2 border-teal-200 bg-teal-50 p-6 shadow-lg sm:p-8">
          <h2 className="text-lg font-bold text-teal-900">Efter lektionen</h2>
          <p className="mt-3 leading-relaxed text-gray-800">
            Spara elevernas plenary-meningar och återvänd till dem i ett
            SYV-samtal eller vid terminens slut — har svaren förändrats?
            Debatten kan också återupptas som skrivuppgift: ”Ska Riley stå på
            organisationsschemat? Argumentera.”
          </p>
        </div>

        {/* Verklighetsbakgrund */}
        <div className="mt-8 rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
          <div className="flex items-center gap-2 text-gray-700">
            <BookOpen className="h-5 w-5" />
            <h2 className="text-lg font-bold text-gray-900">
              Verklighetsbakgrund
            </h2>
          </div>
          <p className="mt-3 leading-relaxed text-gray-700">
            Scenariot är fiktivt men siffrorna bygger på verkliga källor:
            Microsoft Agent 365, Swiss Re, Goldman Sachs — och Gartner, som
            bedömer att 40 % av alla agentprojekt skrotas till 2027.
            Osäkerheten går åt båda håll.
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
