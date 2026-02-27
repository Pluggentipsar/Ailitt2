import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lärarens epistemiska roll | AI-litteracitet',
  description: 'Att undervisa i osäkerhet – från ämnesexpert till epistemisk vägledare i AI-tidsåldern.',
};

export default function LararensRollPage() {
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
            <span className="text-gray-900">Lärarens epistemiska roll</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 via-purple-600/85 to-pink-600/90" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3 block">Del 5</span>
            <h1 className="mb-6 text-4xl sm:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Lärarens{" "}
              <span className="bg-gradient-to-r from-purple-200 via-pink-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                epistemiska roll
              </span>
            </h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              Att undervisa i osäkerhet
            </p>
          </div>
        </div>
      </section>

      {/* Ingress Section */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              AI förändrar inte bara hur vi undervisar, utan <strong>vad det betyder att veta något</strong>.
              När elever kan generera texter, tolkningar och fakta på sekunder blir lärarens uppdrag inte
              att konkurrera med teknologin, utan att <strong>leda lärandet genom osäkerhet</strong> – att skapa
              förutsättningar för att förstå <em>hur kunskap blir till</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto flex max-w-7xl gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-4xl">

        {/* From Expert to Epistemic Guide */}
        <section id="epistemisk-vagledare" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Från ämnesexpert till epistemisk vägledare
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Läraren har alltid haft rollen som kunskapsbärare.
            </p>

            <p className="text-gray-700">
              Men i AI-tiden får rollen en ny dimension: att vara <strong>epistemisk vägledare</strong> —
              en som hjälper eleverna att förstå <em>vad</em> kunskap är, inte bara <em>vad</em> den innehåller.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-lg">
              <p className="text-lg font-semibold text-indigo-900 mb-3">
                Den epistemiska vägledarens roll
              </p>
              <p className="text-indigo-800 mb-0">
                En som hjälper eleverna att förstå vad kunskap är, inte bara vad den innehåller.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Den rollen kännetecknas av fyra förskjutningar:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Från</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Till</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700">Faktaförmedling</td>
                    <td className="px-6 py-4 font-medium text-indigo-700">Kunskapsskapande</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700">Kontroll av svar</td>
                    <td className="px-6 py-4 font-medium text-purple-700">Utforskande av frågor</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700">Effektivitet</td>
                    <td className="px-6 py-4 font-medium text-pink-700">Reflektion</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700">Bedömning av produkt</td>
                    <td className="px-6 py-4 font-medium text-indigo-700">Bedömning av process och förståelse</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700">
              Det är i dessa skiften som AI kan bli ett pedagogiskt verktyg för bildning – om vi låter det.
            </p>
          </div>
        </section>

        {/* Teaching in Generated Truths */}
        <section id="genererade-sanningar" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Att undervisa i en tid av genererade sanningar
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              När AI presenterar trovärdiga men potentiellt falska svar måste läraren bli den som hjälper
              eleverna att ställa epistemiska frågor:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500 my-6">
              <ul className="space-y-2 text-gray-700 mb-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">→</span>
                  <span>Hur vet vi detta?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">→</span>
                  <span>Vem säger det?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">→</span>
                  <span>Vilken röst saknas?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">→</span>
                  <span>Vilka mönster ligger bakom denna text, bild eller analys?</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Dessa frågor är inte bara kritiska — de är <strong>demokratiska</strong>.
            </p>

            <p className="text-gray-700">
              De skapar motståndskraft mot manipulation, desinformation och algoritmiska maktstrukturer.
            </p>

            <p className="text-lg font-medium text-gray-900 mt-6">
              Källkritik blir därmed inte bara en färdighet, utan ett sätt att vara i världen.
            </p>
          </div>
        </section>

        {/* Pedagogical Uncertainty */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pedagogisk osäkerhet som didaktiskt värde
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              AI-tiden kräver att läraren vågar stå kvar i det osäkra.
            </p>

            <p className="text-gray-700">
              När ingen riktigt vet var tekniken tar oss, blir det avgörande att visa eleverna hur man
              lär sig <strong>i osäkerhet</strong>: att undersöka, formulera, ompröva, och skapa mening i dialog.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Att undervisa i osäkerhet innebär:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-gray-700 mb-0">
                    att våga säga <strong>"det vet vi inte än"</strong>
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-gray-700 mb-0">
                    att undersöka hur något fungerar innan man bedömer om det är bra
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-200 text-pink-700 flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-gray-700 mb-0">
                    att se fel och missförstånd som delar av en gemensam kunskapsprocess
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              Den epistemiska läraren är alltså inte den som alltid har svaret, utan den som
              <strong>designar situationer där eleverna upptäcker svaret tillsammans</strong> –
              ibland med, ibland trots, AI.
            </p>
          </div>
        </section>

        {/* Building New Professional Knowledge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Att bygga en ny professionell kunskap
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              AI skapar också en ny typ av professionell kompetens för lärare: en kombination av
              didaktisk kreativitet, teknisk förståelse och epistemisk empati.
            </p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Det innebär att kunna:
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="font-semibold text-indigo-900 mb-2">
                    1. Avkoda teknikens logik
                  </h4>
                  <p className="text-gray-700 mb-0">
                    Förstå hur AI producerar text, bild och struktur.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    2. Översätta det till pedagogik
                  </h4>
                  <p className="text-gray-700 mb-0">
                    Skapa uppgifter där AI förstärker det mänskliga tänkandet.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="font-semibold text-pink-900 mb-2">
                    3. Synliggöra det etiska och existentiella
                  </h4>
                  <p className="text-gray-700 mb-0">
                    Ställa frågor om ansvar, mening och sanning.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-gray-900">
              Det är inte en övergång från humaniora till teknik – det är en återgång till skolans kärna:
              att förstå människan genom kunskap.
            </p>
          </div>
        </section>

        {/* Towards an Epistemic Learning Ecosystem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Mot ett epistemiskt lärandeekosystem
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              I framtidens skola kommer AI att vara lika självklar som pennan en gång var.
            </p>

            <p className="text-gray-700">
              Frågan är inte <em>om</em> vi ska använda AI, utan <em>hur</em> vi vill förstå världen genom den.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-lg border border-indigo-200 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ett epistemiskt lärandeekosystem – en kultur där:
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold text-xl">•</span>
                  <span><strong>nyfikenhet</strong> går före kontroll</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold text-xl">•</span>
                  <span><strong>reflektion</strong> går före produktion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold text-xl">•</span>
                  <span><strong>förståelse</strong> går före effektivitet</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Lärarens roll i detta ekosystem är inte att skydda elever från AI – utan att utrusta dem
              med förmågan att tänka <strong>med, om, mot och genom</strong> den.
            </p>
          </div>
        </section>

        {/* Closing Reflection */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              Avslutande reflektion
            </h2>

            <blockquote className="text-2xl font-serif italic mb-8 border-l-4 border-white/30 pl-6">
              "Bildning är inte att veta mest, utan att förstå vad som är värt att veta."
            </blockquote>

            <div className="space-y-4 text-white/90 text-lg">
              <p>
                När AI kan svara på allt, blir det skolans ansvar att odla förmågan att ställa rätt frågor.
              </p>

              <p>
                Att undervisa i AI-tiden handlar därför inte om att kontrollera teknologin, utan om att
                behålla <strong className="text-white">mänsklighetens tolkningsföreträde</strong>.
              </p>

              <p>
                Det är där lärarens epistemiska roll blir oumbärlig –
              </p>

              <p className="text-xl font-semibold text-white">
                inte som väktare av kunskap, utan som väktare av förståelse.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Från teori till praktik
            </h3>

            <p className="text-gray-700 mb-6">
              Dessa didaktiska modeller och perspektiv är inte teoretiska konstruktioner – de är arbetssätt
              som du kan börja använda i ditt klassrum imorgon.
            </p>

            <p className="text-gray-700 mb-6">
              Utforska kursmodulerna i Svenska 1 för att se hur dessa principer omsätts i konkreta lektioner
              och uppgifter.
            </p>

            <Link
              href="/amnen/svenska/svenska-1"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Till kursmodulerna i Svenska 1
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/didaktiska-modeller/uppgifter"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tillbaka till Uppgiftsbank
          </Link>

          <Link
            href="/didaktiska-modeller"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Tillbaka till Didaktiska modeller
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
              Innehåll
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#epistemisk-vagledare" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  Från ämnesexpert till epistemisk vägledare
                </a>
              </li>
              <li>
                <a href="#genererade-sanningar" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Att undervisa i genererade sanningar
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-3 font-semibold">Navigering</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/didaktiska-modeller/uppgifter" className="text-gray-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>←</span>
                    Del 4: Uppgiftsbank
                  </Link>
                </li>
                <li>
                  <Link href="/didaktiska-modeller" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>←</span>
                    Tillbaka till översikt
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
