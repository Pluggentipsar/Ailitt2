import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Att undervisa med, om, mot och genom AI | AI-litteracitet',
  description: 'Didaktiska principer och konkreta exempel från svenskämnet för undervisning med, om, mot och genom AI.',
};

export default function PerspektivPage() {
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
            <span className="text-gray-900">Med, om, mot och genom AI</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-mesh pb-16 pt-20 sm:pb-24 sm:pt-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/didaktisk.png)' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-blue-600/85 to-purple-600/90" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3 block">Del 3</span>
            <h1 className="mb-6 text-4xl sm:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Att undervisa{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                med, om, mot och genom AI
              </span>
            </h1>
            <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
              Didaktiska principer och exempel från svenskämnet
            </p>
          </div>
        </div>
      </section>

      {/* Ingress Section */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              De didaktiska modellerna hjälper oss att förstå hur AI förändrar undervisningens förutsättningar.
              Men i klassrummet handlar det om hur vi omsätter dessa insikter – i möten med elever, texter och språk.
              Här blir de fyra perspektiven <strong>konkreta arbetssätt</strong> som tillsammans bygger AI-litteracitet
              och epistemisk medvetenhet.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto flex max-w-7xl gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-4xl">

        {/* MED AI */}
        <section id="med-ai" className="mb-16">
          <div className="bg-gradient-to-r from-primary-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-3">
              MED AI – AI som pedagogiskt verktyg
            </h2>
            <p className="text-white/90 text-lg">
              AI används medvetet och strategiskt som ett verktyg i elevens lärprocess.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Läraren styr kontexten och designar uppgifter där AI förstärker men inte ersätter tänkandet.
              Syftet är att utveckla metakognition, språk och problemlösning genom aktiv interaktion.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fokus</h4>
                  <p className="text-gray-700 text-sm mb-0">Strategisk användning av AI</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metod</h4>
                  <p className="text-gray-700 text-sm mb-0">Iteration och respons</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Utvecklar</h4>
                  <p className="text-gray-700 text-sm mb-0">Metakognitiv förmåga</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exempel</h3>

            <div className="space-y-6">
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                <h4 className="font-semibold text-primary-900 mb-2">
                  ECPA-upplägg i skrivande
                </h4>
                <p className="text-primary-800 mb-0">
                  Elever formulerar en egen tes, testar den mot AI och reviderar argumentationen i par.
                </p>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-900 mb-2">
                  AI som retorikcoach
                </h4>
                <p className="text-cyan-800 mb-0">
                  Elever tränar inledningar eller ethos-analys med AI som motpublik.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Suno-uppgift (musik och retorik)
                </h4>
                <p className="text-blue-800 mb-0">
                  Elever skriver en låttext som innehåller ett bestämt antal stilfigurer. Läraren genererar
                  låten via AI-musikverktyg, och klassen analyserar hur budskapet förändras när ord blir ljud.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="font-semibold text-gray-900 mb-2">💭 Epistemisk fråga</p>
              <p className="text-gray-700 italic mb-0">
                Hur påverkas mitt sätt att tänka när jag låter en maskin svara på mina frågor?
              </p>
            </div>
          </div>
        </section>

        {/* OM AI */}
        <section id="om-ai" className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-3">
              OM AI – AI som studieobjekt
            </h2>
            <p className="text-white/90 text-lg">
              Här riktas undervisningen mot att förstå och analysera teknologin i sig.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Eleverna undersöker AI som språklig, kulturell och etisk konstruktion – hur den fungerar,
              vad den kan och vilka gränser den har.
            </p>

            <p className="text-gray-700">
              Syftet är att utveckla <strong>kritisk AI-litteracitet</strong> – att kunna granska,
              ifrågasätta och reflektera.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fokus</h4>
                  <p className="text-gray-700 text-sm mb-0">Teknisk förståelse</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metod</h4>
                  <p className="text-gray-700 text-sm mb-0">Källkritik och bias</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Utvecklar</h4>
                  <p className="text-gray-700 text-sm mb-0">Språkmedvetenhet</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exempel</h3>

            <div className="space-y-6">
              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-900 mb-2">
                  Hallucinationsjakten
                </h4>
                <p className="text-cyan-800 mb-0">
                  Elever granskar en AI-genererad text för att hitta påhittade fakta och falska referenser.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Robotens dialekt
                </h4>
                <p className="text-blue-800 mb-0">
                  Språklig analys av AI-texter för att identifiera typiska drag i "LLM-svenska".
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 mb-2">
                  Från Golem till ChatGPT
                </h4>
                <p className="text-indigo-800 mb-0">
                  Litteraturhistorisk övning om människans dröm att skapa liv.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="font-semibold text-gray-900 mb-2">💭 Epistemisk fråga</p>
              <p className="text-gray-700 italic mb-0">
                Hur skiljer sig kunskap som genereras från kunskap som förstås?
              </p>
            </div>
          </div>
        </section>

        {/* MOT AI */}
        <section id="mot-ai" className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-3">
              MOT AI – AI som samhällsspegel och motståndspunkt
            </h2>
            <p className="text-white/90 text-lg">
              Att undervisa mot AI handlar inte om att avvisa tekniken, utan om att utforska och utmana dess konsekvenser.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Eleverna tränas i etisk reflektion, maktanalys och digital handlingskompetens.
              Det handlar om demokrati, integritet och mänskliga värden.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fokus</h4>
                  <p className="text-gray-700 text-sm mb-0">Etik och ansvar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metod</h4>
                  <p className="text-gray-700 text-sm mb-0">Makt och representation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Utvecklar</h4>
                  <p className="text-gray-700 text-sm mb-0">Aktiv medborgarkunskap</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exempel</h3>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Filterbubblan och jag
                </h4>
                <p className="text-blue-800 mb-0">
                  Elever kartlägger sina egna algoritmiska flöden på sociala medier och reflekterar över
                  vad dessa säger om deras identitet.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">
                  AI och kön
                </h4>
                <p className="text-purple-800 mb-0">
                  Analys av hur AI genererar bilder eller berättelser som reproducerar stereotyper.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 mb-2">
                  Debatt: Ska AI få skriva böcker?
                </h4>
                <p className="text-indigo-800 mb-0">
                  Elever tar ställning i frågor om upphovsrätt och autenticitet.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="font-semibold text-gray-900 mb-2">💭 Epistemisk fråga</p>
              <p className="text-gray-700 italic mb-0">
                Hur påverkar teknikens röst vilka sanningar vi hör – och vilka vi inte hör?
              </p>
            </div>
          </div>
        </section>

        {/* GENOM AI */}
        <section id="genom-ai" className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-3">
              GENOM AI – AI som språklig och kreativ spegel
            </h2>
            <p className="text-white/90 text-lg">
              AI blir en spegel för mänskligt uttryck.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Eleverna arbetar med språket genom AI för att förstå vad som gör texten mänsklig,
              levande och meningsfull. AI blir ett laboratorium för stil, röst och tolkning.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fokus</h4>
                  <p className="text-gray-700 text-sm mb-0">Stil och uttryck</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metod</h4>
                  <p className="text-gray-700 text-sm mb-0">Kreativ bearbetning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Utvecklar</h4>
                  <p className="text-gray-700 text-sm mb-0">Estetisk reflektion</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exempel</h3>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">
                  Av-AI-fiering
                </h4>
                <p className="text-purple-800 mb-0">
                  Elever bearbetar en steril AI-text för att återföra mänsklig röst, konkretion och känsla.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-semibold text-pink-900 mb-2">
                  Intervju med en karaktär
                </h4>
                <p className="text-pink-800 mb-0">
                  Elever gör en karaktärsanalys utan AI och använder sedan sin analys som prompt för att
                  intervjua karaktären i en chattbot. De skriver därefter en text (artikel, brev, dagbok)
                  utifrån karaktärens perspektiv.
                </p>
              </div>

              <div className="bg-fuchsia-50 p-6 rounded-lg border-l-4 border-fuchsia-500">
                <h4 className="font-semibold text-fuchsia-900 mb-2">
                  AI skriver framtidsnovellen
                </h4>
                <p className="text-fuchsia-800 mb-0">
                  Elever samarbetar med AI för att skapa en novell som utspelar sig år 2050, 2070 eller 2100.
                  De analyserar sedan sin egen text utifrån litteraturvetenskapliga begrepp.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="font-semibold text-gray-900 mb-2">💭 Epistemisk fråga</p>
              <p className="text-gray-700 italic mb-0">
                Vad betyder autenticitet när människor och maskiner skriver tillsammans?
              </p>
            </div>
          </div>
        </section>

        {/* Integration and Progression */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary-50 via-cyan-50 to-blue-50 p-8 rounded-lg border border-primary-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sammanflätning och progression
            </h2>

            <p className="text-gray-700 mb-6">
              De fyra perspektiven ska inte ses som separata spår, utan som ett <strong>kretslopp av lärande</strong>:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Med AI</p>
                  <p className="text-gray-700">Eleven lär sig använda</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Om AI</p>
                  <p className="text-gray-700">Eleven förstår och analyserar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mot AI</p>
                  <p className="text-gray-700">Eleven värderar och tar ställning</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Genom AI</p>
                  <p className="text-gray-700">Eleven skapar och reflekterar</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Cykeln kan upprepas på varje nivå av svenskämnets innehåll – från skrivande till litteratur,
              källkritik och språklig variation.
            </p>

            <p className="text-lg font-medium text-gray-900">
              Varje gång eleven rör sig genom dessa steg fördjupas både AI-litteraciteten och den
              epistemiska medvetenheten: att förstå hur kunskap formas, förmedlas och förändras i en digital värld.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/didaktiska-modeller"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tillbaka till Ramverk och modeller
          </Link>

          <Link
            href="/didaktiska-modeller/uppgifter"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Nästa: Uppgiftsbank
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
              Innehåll
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#med-ai" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2">
                  <span className="text-primary-400">→</span>
                  Med AI
                </a>
              </li>
              <li>
                <a href="#om-ai" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  Om AI
                </a>
              </li>
              <li>
                <a href="#mot-ai" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  Mot AI
                </a>
              </li>
              <li>
                <a href="#genom-ai" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Genom AI
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-3 font-semibold">Navigering</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/didaktiska-modeller" className="text-gray-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>←</span>
                    Tillbaka till översikt
                  </Link>
                </li>
                <li>
                  <Link href="/didaktiska-modeller/uppgifter" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
                    <span>→</span>
                    Del 4: Uppgiftsbank
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
