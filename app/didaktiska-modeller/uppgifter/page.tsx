'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiLiteracyBadgeList } from '@/components/ui/AiLiteracyBadge';

export default function UppgifterPage() {
  const [openAssignment, setOpenAssignment] = useState<number | null>(1);

  const toggleAssignment = (id: number) => {
    setOpenAssignment(openAssignment === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/didaktiska-modeller" className="hover:text-primary-600 transition-colors">
              Didaktiska modeller
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Uppgiftsbank</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-mesh pb-16 pt-20 sm:pb-24 sm:pt-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/didaktisk.webp)' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-purple-600/85 to-pink-600/90" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3 block">Del 4</span>
            <h1 className="mb-6 text-4xl sm:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Uppgiftsbank för{" "}
              <span className="bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                AI-litteracitet i Svenska 1
              </span>
            </h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              Från färdighet till förståelse – och vidare till reflektion
            </p>
          </div>
        </div>
      </section>

      {/* Ingress Section */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Uppgifterna nedan är utformade för att stötta lärande som både utvecklar ämneskunskap och AI-litteracitet.
              De tränar språk, analys och kreativitet – men framför allt <strong>epistemisk medvetenhet</strong>,
              det vill säga elevens förståelse av hur kunskap blir till.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
              <p className="font-semibold text-primary-900 mb-3">Varje uppgift innehåller:</p>
              <ul className="space-y-2 text-primary-800 mb-0 list-none pl-0">
                <li>🎯 <strong>Syfte</strong> – vad eleven utvecklar i relation till ämnesplanen</li>
                <li>🧭 <strong>AI-litteracitetsfokus (0–6)</strong> – vilket delområde i ramverket uppgiften tränar</li>
                <li>⚙️ <strong>Perspektiv</strong> – med, om, mot eller genom AI</li>
                <li>🧩 <strong>Instruktion och exempel</strong> – konkret steg-för-steg</li>
                <li>💬 <strong>Reflektionsfrågor</strong> – för att väcka epistemisk medvetenhet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto flex max-w-7xl gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-4xl">

        {/* Assignment 1 */}
        <div id="uppgift-1" className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <button
            onClick={() => toggleAssignment(1)}
            className="w-full text-left p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Jag och min algoritm
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Mot AI
                </span>
                <div className="flex gap-2">
                  <AiLiteracyBadgeList ids={[3, 6]} showTooltip={false} />
                </div>
              </div>
            </div>
            <svg
              className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${openAssignment === 1 ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openAssignment === 1 && (
            <div className="px-6 pb-6 prose max-w-none border-t border-gray-200 pt-6">
            <p className="text-lg font-semibold text-gray-900 mb-2">🎯 Syfte</p>
            <p className="text-gray-700 mb-6">
              Att utveckla digital källkritik, identitetsmedvetenhet och förståelse för algoritmers påverkan.
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-2">📋 Instruktion</p>
            <ol className="space-y-2 text-gray-700 mb-6">
              <li>Be eleverna öppna sina sociala medieflöden (TikTok, Instagram, YouTube, etc.) och observera vilka typer av inlägg de får.</li>
              <li>Låt dem dokumentera 10–15 inlägg och kategorisera dem: nyheter, underhållning, reklam, åsikter, ideal, etc.</li>
              <li>Diskutera i par: Vad säger detta flöde om mig som person? Hur tror jag att algoritmen har byggt denna bild?</li>
              <li>Sammanfatta reflektionen i en kort text: "Jag och min algoritm – en dag i mitt digitala jag."</li>
            </ol>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">💬 Reflektionsfrågor</p>
              <ul className="space-y-1 text-gray-700 mb-0">
                <li>Hur påverkar algoritmen vad jag ser – och vad jag inte ser?</li>
                <li>Är bilden av mig i flödet sann?</li>
                <li>Hur påverkar detta min världsbild och identitet?</li>
              </ul>
            </div>
            </div>
          )}
        </div>

        {/* Assignment 2 */}
        <div id="uppgift-2" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                AI – skriv en novell om framtiden
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  Genom AI
                </span>
                <div className="flex gap-2">
                  <AiLiteracyBadgeList ids={[0, 1, 4]} showTooltip={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg font-semibold text-gray-900 mb-2">🎯 Syfte</p>
            <p className="text-gray-700 mb-6">
              Att använda kreativt skrivande för att utforska teknikens möjligheter och risker,
              samt analysera språk och struktur.
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-2">📋 Instruktion</p>
            <ol className="space-y-2 text-gray-700 mb-6">
              <li>Eleverna väljer ett framtidsscenario: utopi, dystopi eller realistisk framtid (t.ex. år 2050, 2070, 2100).</li>
              <li>De planerar novellen (miljö, konflikt, karaktärer) och skriver själva synopsiset.</li>
              <li>AI används sedan som medförfattare – för att utveckla miljöbeskrivningar, dialoger eller titelförslag.</li>
              <li>Efteråt skriver eleverna en novellanalys: berättarperspektiv, struktur, språk, tema, budskap.</li>
            </ol>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">💬 Reflektionsfrågor</p>
              <ul className="space-y-1 text-gray-700 mb-0">
                <li>Vilka delar av texten kändes mänskliga – och vilka kändes som "AI"?</li>
                <li>Vad händer med kreativitet när jag skapar tillsammans med en maskin?</li>
                <li>Kan en maskin förstå hopp, rädsla eller kärlek?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assignment 3 */}
        <div id="uppgift-3" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Karaktärsanalys → Intervju → Text
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  Genom AI
                </span>
                <div className="flex gap-2">
                  <AiLiteracyBadgeList ids={[1, 5]} showTooltip={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg font-semibold text-gray-900 mb-2">🎯 Syfte</p>
            <p className="text-gray-700 mb-6">
              Att fördjupa förståelsen av litterära karaktärer och gestalta perspektiv.
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-2">📋 Instruktion</p>
            <ol className="space-y-2 text-gray-700 mb-6">
              <li>Eleverna gör en traditionell karaktärsanalys av en person i en novell eller roman (utseende, egenskaper, relationer, inre konflikt, utveckling).</li>
              <li>De omvandlar analysen till en prompt: "Agera som [karaktärens namn] från [verk]. Jag ska intervjua dig om dina handlingar och känslor. Svara i jagform och håll dig till romanens tid."</li>
              <li>Eleverna genomför intervjun i chattform.</li>
              <li>Utifrån samtalet skriver de en ny text – exempelvis en dagboksanteckning, ett brev, eller en tidningsintervju.</li>
            </ol>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">💬 Reflektionsfrågor</p>
              <ul className="space-y-1 text-gray-700 mb-0">
                <li>Hur förändrades min förståelse för karaktären när jag "talade" med hen?</li>
                <li>Kändes svaren trovärdiga?</li>
                <li>Vad säger detta om skillnaden mellan att förstå en text och att simulera förståelse?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assignment 4 */}
        <div id="uppgift-4" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Stilistiskt detektivarbete – "LLM-svenska"
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full">
                  Om AI
                </span>
                <div className="flex gap-2">
                  <AiLiteracyBadgeList ids={[1, 5]} showTooltip={false} />
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg font-semibold text-gray-900 mb-2">🎯 Syfte</p>
            <p className="text-gray-700 mb-6">
              Att utveckla språkkänsla, stilmedvetenhet och kritiskt tänkande kring textkvalitet.
            </p>

            <p className="text-lg font-semibold text-gray-900 mb-2">📋 Instruktion</p>
            <ol className="space-y-2 text-gray-700 mb-6">
              <li>Läraren blandar korta texter: elevtexter, litterära texter, AI-texter och hybridversioner.</li>
              <li>Eleverna gissar vilka som är AI-genererade och motiverar med stilistiska observationer (t.ex. rytm, konkretion, klichéer).</li>
              <li>Klassen formulerar gemensamt en lista över typiska drag i LLM-svenska.</li>
              <li>Eleverna får sedan bearbeta en AI-text – och göra den mer personlig, konkret och rytmisk.</li>
            </ol>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">💬 Reflektionsfrågor</p>
              <ul className="space-y-1 text-gray-700 mb-0">
                <li>Vad är det som gör en text mänsklig?</li>
                <li>Hur känns det när språket blir för perfekt?</li>
                <li>Vilka normer för språk reproduceras av AI?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* More assignments continue... */}

        {/* Link to full assignment bank */}
        <div className="bg-gradient-to-r from-primary-50 to-cyan-50 p-8 rounded-lg border border-primary-200 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Fler uppgifter finns i uppgiftsbanken
          </h3>
          <p className="text-gray-700 mb-6">
            Dessa är bara några exempel från uppgiftsbanken. Totalt finns 16 genomarbetade uppgifter
            som täcker alla aspekter av AI-litteracitet.
          </p>
          <Link
            href="/amnen/svenska/svenska-1/uppgiftsbank"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Se hela uppgiftsbanken
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Summary Section */}
        <section className="mt-16 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sammanfattning: från uppgift till bildning
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Alla uppgifterna i uppgiftsbanken är byggda utifrån en gemensam princip:
            </p>

            <div className="bg-primary-50 p-6 rounded-lg mb-6">
              <p className="text-xl font-medium text-primary-900 italic">
                Eleverna ska inte bara använda AI – de ska förstå vad det innebär att förstå.
              </p>
            </div>

            <p className="text-gray-700">
              AI-litteracitet i svenskämnet handlar därför inte om teknisk färdighet, utan om att utveckla
              en <strong>reflekterad relation till språk, sanning, estetik och mänsklighet</strong>.
            </p>

            <p className="text-gray-700 mt-4">
              När eleverna lär sig tänka med, om, mot och genom AI blir undervisningen inte bara aktuell –
              den blir <strong>existentiell</strong>.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/didaktiska-modeller/perspektiv"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tillbaka till Perspektiv
          </Link>

          <Link
            href="/didaktiska-modeller/lararens-roll"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Nästa: Lärarens epistemiska roll
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </article>

      {/* Desktop TOC - sticky sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Uppgifter
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#uppgift-1" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  1. Jag och min algoritm
                </a>
              </li>
              <li>
                <a href="#uppgift-2" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  2. AI – skriv en novell om framtiden
                </a>
              </li>
              <li>
                <a href="#uppgift-3" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  3. Röstredigering
                </a>
              </li>
              <li>
                <a href="#uppgift-4" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  4. Bildanalys och symbol
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-3 font-semibold">Navigering</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/didaktiska-modeller/perspektiv" className="text-gray-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>←</span>
                    Del 3: Perspektiv
                  </Link>
                </li>
                <li>
                  <Link href="/didaktiska-modeller/lararens-roll" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>→</span>
                    Del 5: Lärarens roll
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

        </div>
      </div>
    </div>
  );
}
