import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Didaktiska modeller för AI-undervisning | AI-litteracitet',
  description: 'Från teknik till didaktik – och vidare till epistemisk medvetenhet. Ramverk och modeller för undervisning med, om, mot och genom AI.',
};

export default function DidaktiskaModellerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Didaktiska modeller för undervisning med, om, mot och genom AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Från teknik till didaktik – och vidare till epistemisk medvetenhet
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-16">
          <p className="lead text-xl text-gray-700 leading-relaxed">
            AI har på kort tid förändrat förutsättningarna för både lärande och undervisning.
            Språket, bilden och texten – de byggstenar som hela skolans kunskapsuppdrag vilar på –
            delas nu med system som kan skriva, resonera och analysera.
          </p>

          <p className="text-gray-700">
            Men skolans uppgift är fortfarande densamma: att utveckla elevernas förmåga att tänka,
            kommunicera och förstå världen.
          </p>

          <p className="text-gray-700">
            Det avgörande skiftet handlar därför inte om teknik, utan om <strong>kunskapssyn</strong>.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
            <p className="text-lg font-medium text-primary-900 mb-2">
              Kärnfrågan
            </p>
            <p className="text-primary-800 mb-0">
              Frågan är inte <em>hur</em> vi använder AI, utan <em>vad</em> lärandet blir när människor
              och maskiner tänker tillsammans.
            </p>
          </div>

          <p className="text-gray-700">
            Här behöver läraren nya didaktiska modeller – inte för att ersätta befintliga arbetssätt,
            utan för att fördjupa dem.
          </p>
        </section>

        {/* From Tech to Knowledge Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Från teknikanvändning till kunskapsdesign
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              De flesta diskussioner om AI i skolan börjar i verktyg: "Hur fungerar ChatGPT?"
              eller "Vilket AI-verktyg kan eleverna använda för att skriva?"
            </p>

            <p className="text-gray-700">
              Men den didaktiska frågan är djupare:
            </p>

            <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 my-6 text-xl italic text-gray-800">
              Vilken typ av tänkande, språk och förståelse möjliggörs genom detta arbetssätt?
            </blockquote>

            <p className="text-gray-700">
              Att undervisa med AI handlar om att <strong>designa lärande</strong>, inte om att
              effektivisera uppgifter.
            </p>

            <p className="text-gray-700">
              Det är i denna design – i samspelet mellan syfte, uppgift och reflektion – som läraren
              avgör vilken typ av kunskap eleven faktiskt utvecklar.
            </p>
          </div>
        </section>

        {/* Epistemic Awareness */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Epistemisk medvetenhet – att förstå hur kunskap blir till
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              För att undervisa meningsfullt i AI-tidsåldern behöver eleverna mer än digital kompetens.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-lg font-semibold text-blue-900 mb-3">
                Epistemisk medvetenhet
              </p>
              <p className="text-blue-800 mb-0">
                Förmågan att förstå hur kunskap skapas, vad som gör den trovärdig, och hur tekniken
                påverkar vår uppfattning om sanning och förståelse.
              </p>
            </div>

            <p className="text-gray-700">
              Det handlar om att kunna ställa frågor som:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>Vad betyder det att "veta" något när information genereras snarare än hämtas?</li>
              <li>Hur skiljer sig förståelse från imitation?</li>
              <li>Hur påverkas språket, kulturen och min självbild av att jag interagerar med algoritmer varje dag?</li>
            </ul>

            <p className="text-gray-700 mt-6">
              En epistemiskt medveten elev kan alltså inte bara läsa, skriva och tala – utan reflekterar
              över själva <em>villkoren för att förstå</em>.
            </p>

            <p className="text-gray-700">
              De didaktiska modeller som presenteras här syftar till att hjälpa läraren skapa just sådana situationer.
            </p>
          </div>
        </section>

        {/* Four Perspectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fyra perspektiv på undervisning i AI-eran
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            I arbetet med AI behöver skolan röra sig mellan fyra kompletterande perspektiv.
            De motsvarar också fyra dimensioner av AI-litteracitet: att använda, förstå, värdera och agera.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gradient-to-r from-primary-50 to-cyan-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Perspektiv</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fråga</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fokus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary-700">Med AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Hur kan AI användas för att förstärka lärandeprocessen?
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Pedagogisk design, process, strategi
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-cyan-700">Om AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Hur kan elever förstå, analysera och granska tekniken?
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Kritiskt och epistemiskt tänkande
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-700">Mot AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Hur kan elever utveckla en etisk och demokratisk hållning gentemot teknikens påverkan?
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Ansvar, agens och värdering
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-purple-700">Genom AI</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Hur kan AI stödja språkutveckling, reflektion och kreativitet utan att ta över?
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Språklig och metakognitiv utveckling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-8">
            Dessa fyra perspektiv bildar tillsammans en <strong>didaktisk kompass</strong> för undervisning
            i en tid då språk och kunskap allt oftare formas i samspel mellan människa och maskin.
          </p>
        </section>

        {/* From Models to Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Från didaktiska modeller till epistemiska praktiker
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              De modeller som följer – från klassiker som TPACK och SAMR till nyare som ECPA,
              Omvänd Bloom och Affordansperspektivet – utgör inte en metodbank, utan en <strong>tankekarta</strong>.
            </p>

            <p className="text-gray-700">
              De hjälper läraren att se undervisningen genom olika linser: teknologisk, kognitiv,
              social och epistemisk.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-cyan-50 p-8 rounded-lg my-8">
              <p className="text-lg font-medium text-gray-900 mb-4">Gemensamt grundantagande</p>
              <p className="text-gray-800 text-xl italic mb-0">
                AI förändrar inte vad lärande är, men det gör det synligare hur lärande fungerar.
              </p>
            </div>

            <p className="text-gray-700">
              När eleverna skriver, analyserar eller skapar med AI uppstår en ny didaktisk möjlighet:
              att tillsammans med dem undersöka hur språk, förståelse och kunskap blir till.
            </p>

            <p className="text-gray-700 text-xl font-medium">
              Där, i den reflektionen, sker den verkliga bildningen.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-16"></div>

        {/* Section 2: Frameworks */}
        <section className="mb-16">
          <div className="mb-12">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">Del 2</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Ramverk och tankemodeller
            </h2>
            <p className="text-xl text-gray-600">
              En karta över AI-didaktiken
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              För att undervisa med, om, mot och genom AI behöver vi modeller som hjälper oss att se
              inte bara vad tekniken kan göra, utan <em>vad den gör med lärandet</em>.
            </p>

            <p className="text-gray-700">
              Ramverken nedan fungerar som mentala kartor – verktyg för att planera, analysera och
              utveckla undervisning så att AI blir en katalysator för tänkande, inte en genväg för produktion.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <p className="font-semibold text-gray-900 mb-3">De kompletterar varandra:</p>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li><strong>TPACK-AI</strong> hjälper dig förstå relationen mellan ämne, pedagogik, teknik och epistemik</li>
                <li><strong>SAMR</strong> visar hur teknikanvändning kan utvecklas från ersättning till transformation</li>
                <li><strong>SOLO-taxonomin</strong> ger språk för att beskriva djupet i elevens förståelse</li>
                <li><strong>ECPA-modellen</strong> strukturerar hur eleverna arbetar – Enskilt, Chatbot, Par, Alla</li>
                <li><strong>Omvänd Bloom</strong> vänder på lärandets ordning och startar i kreativitet</li>
                <li><strong>Affordansperspektivet</strong> flyttar fokus från verktyget till handlingen</li>
                <li><strong>Double Loop-modellen</strong> påminner oss om att reflektera inte bara i utan över våra handlingar</li>
              </ul>
            </div>
          </div>

          {/* TPACK-AI */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              TPACK-AI – den utvidgade lärarkompetensen
            </h3>

            <p className="text-gray-700 mb-6">
              TPACK (Technological, Pedagogical and Content Knowledge) har länge använts för att beskriva
              lärarens samspel mellan teknik, pedagogik och ämneskunskap.
            </p>

            <p className="text-gray-700 mb-6">
              Men med AI behövs en fjärde dimension: <strong>Epistemic Knowledge</strong> – förståelsen för
              hur AI förändrar själva kunskapens natur.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Dimension</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Fråga</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exempel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Content (C)</td>
                    <td className="px-4 py-3 text-gray-700">Vad ska eleverna lära sig?</td>
                    <td className="px-4 py-3 text-gray-600">Språklig stil, källkritik, ekosystem…</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Pedagogical (P)</td>
                    <td className="px-4 py-3 text-gray-700">Hur lär de sig bäst?</td>
                    <td className="px-4 py-3 text-gray-600">Samtal, samarbete, processkrivning…</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Technological (T)</td>
                    <td className="px-4 py-3 text-gray-700">Vilka digitala verktyg stöder detta?</td>
                    <td className="px-4 py-3 text-gray-600">Chattbot, bildgenerator, video-AI…</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Epistemic (E)</td>
                    <td className="px-4 py-3 text-gray-700">Hur påverkar AI vad det innebär att veta?</td>
                    <td className="px-4 py-3 text-gray-600">Vems röst hörs? Vad är sant? Hur skapas förståelse?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-6">
              TPACK-AI blir därmed ett reflektionsverktyg för lärare som vill se hur tekniska val hänger
              ihop med både ämnesinnehåll och kunskapssyn.
            </p>
          </div>

          {/* SAMR */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SAMR – från ersättning till omdefinition
            </h3>

            <p className="text-gray-700 mb-6">
              SAMR-modellen beskriver fyra nivåer av teknikintegration:
            </p>

            <ol className="space-y-3 mb-6">
              <li className="text-gray-700">
                <strong>1. Substitution</strong> – AI ersätter ett gammalt verktyg (t.ex. stavningskontroll)
              </li>
              <li className="text-gray-700">
                <strong>2. Augmentation</strong> – AI förstärker funktionen (t.ex. personlig återkoppling)
              </li>
              <li className="text-gray-700">
                <strong>3. Modification</strong> – AI förändrar själva uppgiften (t.ex. rollspel med historiska personer)
              </li>
              <li className="text-gray-700">
                <strong>4. Redefinition</strong> – AI möjliggör något helt nytt (t.ex. elever tränar en egen AI-guide)
              </li>
            </ol>

            <div className="bg-cyan-50 p-6 rounded-lg mb-6">
              <p className="text-cyan-900 mb-2 font-medium">Diagnostisk fråga</p>
              <p className="text-cyan-800 mb-0">
                Var är vi nu – och hur skulle uppgiften kunna omformas för att nå djupare tänkande?
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-3">
              Den epistemiska kärnfrågan på varje nivå:
            </p>

            <div className="space-y-2 text-gray-700">
              <p><strong>S:</strong> Vad lär jag mig egentligen när AI gör jobbet snabbare?</p>
              <p><strong>A:</strong> Förstår jag bättre, eller bara snabbare?</p>
              <p><strong>M:</strong> Hur förändrar flera perspektiv min förståelse?</p>
              <p><strong>R:</strong> Vad lär jag mig genom att lära AI något nytt?</p>
            </div>
          </div>

          {/* SOLO Taxonomy */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SOLO-taxonomin – att synliggöra förståelsens djup
            </h3>

            <p className="text-gray-700 mb-6">
              SOLO-taxonomin (Structure of Observed Learning Outcomes) ger språk för att beskriva hur djupt
              en elev förstår ett innehåll – från ytlig till komplex nivå.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Nivå</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Beskrivning</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">AI-tillämpning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Pre-structural</td>
                    <td className="px-4 py-3 text-gray-700">Eleven missförstår eller gissar</td>
                    <td className="px-4 py-3 text-gray-600">AI används oreflekterat</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Uni-structural</td>
                    <td className="px-4 py-3 text-gray-700">En aspekt förstås</td>
                    <td className="px-4 py-3 text-gray-600">Eleven kan beskriva vad AI gör</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Multi-structural</td>
                    <td className="px-4 py-3 text-gray-700">Flera aspekter förstås</td>
                    <td className="px-4 py-3 text-gray-600">Eleven kan förklara hur AI fungerar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Relational</td>
                    <td className="px-4 py-3 text-gray-700">Samband förstås</td>
                    <td className="px-4 py-3 text-gray-600">Eleven kan analysera hur AI påverkar lärandet</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Extended Abstract</td>
                    <td className="px-4 py-3 text-gray-700">Abstraktion och överföring</td>
                    <td className="px-4 py-3 text-gray-600">Eleven kan generalisera och reflektera över kunskap i AI-samhället</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ECPA */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ECPA – Enskilt, Chatbot, Par, Alla
            </h3>

            <p className="text-gray-700 mb-6">
              ECPA är en enkel lektionsstruktur som säkerställer att AI används som en reflektiv partner,
              inte som genväg. Den följer principen: <strong>tänk själv först, AI sen</strong>.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                  E
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Enskilt</p>
                  <p className="text-gray-700">Eleven formulerar egna tankar, idéer eller hypoteser</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Chatbot</p>
                  <p className="text-gray-700">Eleven testar sina idéer mot AI och får fördjupande frågor</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Par</p>
                  <p className="text-gray-700">Elever jämför, diskuterar och förhandlar mening</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Alla</p>
                  <p className="text-gray-700">Klassen delar och reflekterar tillsammans</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              ECPA tränar elevernas <strong>metakognition</strong> och <strong>epistemisk självständighet</strong>:
              att kunna se hur deras förståelse förändras i mötet med AI och andra människor.
            </p>
          </div>

          {/* Omvänd Bloom */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Omvänd Bloom – skapa först, förstå sen
            </h3>

            <p className="text-gray-700 mb-6">
              Traditionellt klättrar vi uppåt i Blooms taxonomi – från fakta till skapande.
              Men i en AI-kontext kan vi börja på toppen: låta eleverna skapa något först,
              för att sedan analysera och förstå hur det blev möjligt.
            </p>

            <ol className="space-y-3">
              <li className="text-gray-700">
                <strong>1. Skapa</strong> – låt eleverna producera något med AI (en text, bild, låt, kod)
              </li>
              <li className="text-gray-700">
                <strong>2. Fråga hur</strong> – undersök vad AI gjorde och varför
              </li>
              <li className="text-gray-700">
                <strong>3. Analysera</strong> – koppla till teori, struktur, principer
              </li>
              <li className="text-gray-700">
                <strong>4. Förstå</strong> – lär begreppen som förklarar processen
              </li>
              <li className="text-gray-700">
                <strong>5. Tillämpa själv</strong> – återskapa utan AI-stöd
              </li>
            </ol>

            <div className="bg-primary-50 p-4 rounded-lg mt-6">
              <p className="text-primary-900 italic mb-0">
                Den omvända taxonomin väcker nyfikenhet: "Hur kunde AI göra det där – och vad behöver
                jag förstå för att kunna göra det själv?"
              </p>
            </div>
          </div>

          {/* Affordansperspektivet */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Affordansperspektivet – fokus på handling, inte funktion
            </h3>

            <p className="text-gray-700 mb-6">
              Ett verktyg är aldrig neutralt – dess design möjliggör vissa handlingar och begränsar andra.
              Att tänka i termer av affordanser hjälper lärare se hur AI-verktyg påverkar elevens agens.
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-primary-500 pl-4">
                <p className="font-medium text-gray-900">Funktion: Chattboten kan skriva text</p>
                <p className="text-gray-700">
                  <strong>Affordans:</strong> Eleven kan jämföra, revidera och reflektera över språk
                </p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-4">
                <p className="font-medium text-gray-900">Funktion: Bildgeneratorn kan skapa bilder</p>
                <p className="text-gray-700">
                  <strong>Affordans:</strong> Eleven kan visualisera abstrakta idéer och analysera symbolik
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-gray-900">Funktion: Ljud-AI kan läsa upp text</p>
                <p className="text-gray-700">
                  <strong>Affordans:</strong> Eleven kan höra tonfall och reflektera över språklig stil
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-6 font-medium">
              Fokus flyttas från vad verktyget gör till vad eleven kan göra genom det.
              Detta är kärnan i en affordansdriven AI-didaktik – där syftet alltid styr tekniken, inte tvärtom.
            </p>
          </div>

          {/* Double Loop */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Double Loop-modellen – reflektion i två led
            </h3>

            <p className="text-gray-700 mb-6">
              Argyris och Schöns modell för double loop learning hjälper oss gå från effektivitet till medvetenhet.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Single loop</p>
                <p className="text-gray-700">Vi använder AI för att lösa uppgiften snabbare</p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="font-semibold text-primary-900 mb-2">Double loop</p>
                <p className="text-primary-800">
                  Vi reflekterar över hur AI förändrade uppgiften och vår förståelse
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium text-gray-900 mb-2">För elever – två frågor:</p>
                <ol className="space-y-1 text-gray-700">
                  <li>1. Vad lärde jag mig av uppgiften?</li>
                  <li>2. Vad lärde jag mig om hur jag lär – när jag samarbetar med AI?</li>
                </ol>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-2">För läraren – professionell reflektion:</p>
                <p className="text-gray-700">
                  Hur påverkar AI min undervisningsfilosofi, min syn på kunskap och min roll som pedagog?
                </p>
              </div>
            </div>
          </div>

          {/* Summary of Models */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 via-white to-cyan-50 p-8 rounded-lg border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Att använda modellerna som karta, inte facit
            </h3>

            <p className="text-gray-700 mb-4">
              Inga modeller är tänkta att följas slaviskt. De fungerar snarare som <strong>optik</strong> –
              olika sätt att se och förstå undervisningen i AI-tiden.
            </p>

            <p className="text-gray-700 mb-4">
              När du som lärare växlar mellan dem sker det som är mest värdefullt:
              ett skifte från <em>teknikintegration</em> till <em>epistemisk design</em>.
            </p>

            <p className="text-xl font-medium text-primary-900">
              Målet är inte att göra mer med AI – utan att tänka djupare om lärande genom AI.
            </p>
          </div>
        </section>

        {/* Continue button or navigation */}
        <div className="mt-16 text-center">
          <a
            href="/didaktiska-modeller/perspektiv"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Läs mer: Att undervisa med, om, mot och genom AI
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </article>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Utforska kursmodulerna
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Dessa didaktiska modeller ligger till grund för alla våra kursmoduler i Svenska 1.
            Utforska hur teori blir praktik i klassrummet.
          </p>
          <a
            href="/amnen/svenska/svenska-1"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Till kursmodulerna
          </a>
        </div>
      </div>
    </div>
  );
}
