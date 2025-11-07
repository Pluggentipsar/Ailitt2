"use client";

import Image from "next/image";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";

const principles = [
  {
    title: "Transparens i process",
    description: "Eleverna behöver kunna beskriva hur AI har använts: syfte, prompt, bearbetning och reflektion. Dokumentationen gör lärandet synligt och förhandlingsbart.",
  },
  {
    title: "Begreppslig förståelse",
    description: "AI-litteracitet kräver ett gemensamt språk för modeller, data, bias och etik. Utan begrepp blir det svårt att värdera resultat eller styra verktygen med omdöme.",
  },
  {
    title: "Kritisk och kreativ flexibilitet",
    description: "Vi tränar eleverna att både ifrågasätta och laborera med AI för att stärka den egna rösten – inte ersätta den. Tekniken blir ett stöd, inte en genväg.",
  },
];

export default function AILitteracitetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-cyan-500 to-blue-500 pb-20 pt-24 sm:pb-32 sm:pt-32">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              AI-litteracitet som didaktisk kompass
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 leading-relaxed drop-shadow-md">
              AI-litteracitet är mer än verktygskunskap. Det är en epistemisk förmåga att förstå hur kunskap formas, värderas och används i en tid där AI är en medskapare. Här bryter vi ner ramverket i sju dimensioner med progression från berättelser till samhällsanalys.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Grundtanken */}
        <section className="mb-20 mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Grundtanken: epistemisk medvetenhet
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Epistemisk medvetenhet handlar om att förstå hur kunskap formas, förmedlas och värderas – och att bli medveten om hur våra sätt att tänka påverkas av verktygen vi använder, särskilt AI.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              När vi interagerar med en chattbot sker inte bara en informationsutväxling; det sker en förhandling om vad som räknas som kunskap. I klassrummet innebär det att elever inte bara behöver lära sig hur AI fungerar, utan också hur AI påverkar dem som tänkande och lärande människor.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 border-l-4 border-primary-500 p-6 rounded-lg my-8">
              <p className="text-gray-800 italic font-medium">
                Processmodellen "Jag – AI – Jag" uppmuntrar eleverna att pausa, formulera frågor, pröva tillsammans med AI och sedan återta ägandeskapet över slutsatsen.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Målet är inte att avvisa eller okritiskt omfamna AI, utan att behålla mänsklig agens – att tänka med AI utan att låta AI tänka åt oss. Frågorna står i centrum och bär lärandet, men de kräver eftertanke: vilka röster hörs i AI:s svar – och vilka saknas? Vad händer med min förståelse när jag samarbetar med AI?
            </p>

            <p className="text-gray-700 leading-relaxed">
              Den som använder modellen uppmuntras att vara kritisk, nyfiken och självständig. Att pröva, reflektera och avgöra vad som är mest relevant i den egna kontexten.
            </p>
          </div>
        </section>

        {/* Om ramverket */}
        <section className="mb-20 mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Om ramverket
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Ramverket bygger på OECD:s modell för AI-kompetenser och tolkas här med fokus på epistemisk medvetenhet.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              OECD beskriver tre övergripande dimensioner: att förstå AI, att använda AI och att reflektera kring AI. Här omtolkas de utifrån skolans didaktiska vardag och ett tydligt fokus på kunskapens vägar.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">1. Att förstå AI</h3>
                <p className="text-sm text-gray-600">Hur tekniken fungerar, dess möjligheter och begränsningar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">2. Att använda AI</h3>
                <p className="text-sm text-gray-600">Kunna samarbeta med och styra AI-verktyg på ett ansvarsfullt sätt.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">3. Att reflektera kring AI</h3>
                <p className="text-sm text-gray-600">Förstå de etiska, sociala och samhälleliga konsekvenserna.</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Målet är att eleverna ska veta så mycket om AI att de själva kan bestämma vad AI ska vara för dem – verktyg, medspelare eller spegel. Samtidigt behöver vi behålla ett kritiskt omdöme.
            </p>
          </div>
        </section>

        {/* Tre principer */}
        <section className="mb-20">
          <div className="mx-auto max-w-4xl mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Tre principer i klassrummet
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Principerna hjälper dig omsätta epistemisk medvetenhet i planering och undervisning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sju dimensioner */}
        <section className="mb-20">
          <div className="mx-auto max-w-4xl mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Sju dimensioner – en progression
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dimensionerna kan kombineras men bygger också på varandra. Börja i berättelserna, gå vidare mot förståelse och användning, och landa i etik, relationer och samhällsanalys.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {aiLiteracyConfig.map((dimension, index) => (
              <div
                key={dimension.id}
                className={`group relative bg-gradient-to-br ${dimension.gradient} border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                {/* Steg nummer */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">
                    {index === 0 ? "0" : index}
                  </span>
                </div>

                {/* Badge */}
                <div className="mb-4">
                  <AiLiteracyBadge id={dimension.id} showTooltip={false} />
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {dimension.description}
                </p>

                {/* Hover decoration */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${dimension.dotColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary-500 via-cyan-500 to-blue-500 rounded-3xl p-12 text-center shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Redo att börja?
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Utforska moduler som integrerar AI-litteracitet i undervisningen
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Till modulerna
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}
