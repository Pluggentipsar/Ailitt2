"use client";

import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";

const principles = [
  {
    title: "Transparens i process",
    description:
      "Eleverna dokumenterar hur AI har använts: syfte, prompt, bearbetning och slutsatser. Det gör lärandet synligt och går att bedöma.",
  },
  {
    title: "Begreppslig förståelse",
    description:
      "Ett gemensamt språk för modeller, data, bias och etik är avgörande för att kunna styra verktygen med omdöme.",
  },
  {
    title: "Kritisk och kreativ flexibilitet",
    description:
      "Vi tränar eleverna att både ifrågasätta och laborera tillsammans med AI för att stärka den egna rösten – inte ersätta den.",
  },
];

const heroStats = [
  {
    value: "7",
    label: "dimensioner",
    description: "Från berättelser till samhällsanalys",
  },
  {
    value: "3",
    label: "didaktiska axlar",
    description: "Förstå, använda och reflektera",
  },
  {
    value: "∞",
    label: "kombinationer",
    description: "Anpassa till ämne, nivå och syfte",
  },
];

const commitments = [
  "Behåll mänsklig agens när AI blir medtänkare.",
  "Låt frågor, inte verktyg, styra undervisningen.",
  "Synliggör hur AI påverkar röst, stil och källor.",
];

export default function AILitteracitetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-28 pt-32 sm:pb-36 sm:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/ailitt_background.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-cyan-900/70 to-sky-800/40" />
        <div className="absolute inset-0 bg-pattern opacity-20" />

        <div className="container relative mx-auto px-4 text-white">
          <div className="mx-auto max-w-4xl text-center drop-shadow-[0_8px_30px_rgba(3,7,18,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              AI-LITTERACITET
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI-litteracitet som didaktisk kompass
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">
              AI-litteracitet är mer än verktygskunskap. Det är en epistemisk förmåga att förstå hur kunskap formas, värderas och används i en tid där AI är en medskapare. Här bryter vi ner ramverket i sju dimensioner med progression från berättelser till samhällsanalys.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg shadow-lg shadow-cyan-900/20"
              >
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm text-white/85">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container relative z-10 mx-auto -mt-12 space-y-16 px-4 pb-24">
        <section className="mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/95 p-10 shadow-2xl shadow-cyan-200/30 backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
                GRUNDTANKEN
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Epistemisk medvetenhet
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Epistemisk medvetenhet handlar om att förstå hur kunskap formas,
                  förmedlas och värderas – och att se hur våra sätt att tänka
                  påverkas av verktygen vi använder, särskilt AI.
                </p>
                <p>
                  När vi interagerar med en chattbot sker inte bara en
                  informationsutväxling; det sker en förhandling om vad som räknas
                  som kunskap. Elever behöver därför förstå både hur AI fungerar och
                  hur AI formar dem som tänkande och lärande människor.
                </p>
                <p>
                  Målet är inte att avvisa eller okritiskt omfamna AI, utan att
                  behålla mänsklig agens – att tänka med AI utan att låta AI tänka åt
                  oss.
                </p>
              </div>
            </div>

            <div className="w-full rounded-3xl bg-gradient-to-br from-cyan-600/90 via-sky-500/85 to-blue-500/85 p-8 text-white shadow-xl lg:w-96">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
                PROCESSMODELL
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                ”Jag – AI – Jag”
              </h3>
              <p className="mt-3 text-white/90">
                Pausa, formulera frågor, pröva tillsammans med AI och återta sedan
                ägandeskapet över slutsatserna.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/90">
                {commitments.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 p-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              OM RAMVERKET
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              OECD:s tre axlar, tolkade för klassrummet
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Förstå AI",
                  body: "Begrepp, datakvalitet, bias och hur modeller tränas.",
                },
                {
                  title: "Använd AI",
                  body: "Strategier, verktygshantering och respons i arbetsprocesser.",
                },
                {
                  title: "Reflektera kring AI",
                  body: "Etik, relationer, samhällskritik och epistemisk beredskap.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Axlarna vävs samman i AI-litteracitet. Vi börjar i berättelserna,
              skiftar till förståelse och praktiskt användande, och landar i etik,
              relationer och samhällsanalys.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
              DIDAKTISKA PRINCIPER
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Så håller vi ihop form, innehåll och etik
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-cyan-100/60"
              >
                <div className="absolute -top-3 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white shadow-md">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              SJU DIMENSIONER
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              En progression att kombinera
            </h2>
            <p className="mt-4 text-gray-600">
              Dimensionerna kan läsas i ordning eller kombineras efter behov.
              Tillsammans ger de ett språk för att planera undervisning där AI
              blir medtänkare utan att dominera.
            </p>
          </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 text-gray-900">
              {aiLiteracyConfig.map((dimension, index) => (
                <div
                  key={dimension.id}
                  className={`group relative rounded-2xl border border-white/50 bg-gradient-to-br ${dimension.gradient} p-6 text-gray-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-900 shadow-lg">
                    {index === 0 ? "0" : index}
                  </div>
                  <div className="mb-4">
                    <AiLiteracyBadge id={dimension.id} showTooltip={false} />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-900">
                    {dimension.description}
                  </p>
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-15 ${dimension.dotColor}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold drop-shadow-lg">
            Redo att bygga AI-litteracitet i undervisningen?
          </h2>
          <p className="mt-4 text-white/90">
            Utforska moduler som använder dimensionerna i praktiken – från Svenska
            1 till kommande ämneshubbar.
          </p>
          <a
            href="/amnen"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-cyan-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Till ämneshubbarna
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
