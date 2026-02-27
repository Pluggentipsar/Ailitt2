"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { TableOfContents } from "@/components/navigation/TableOfContents";
import { TOCHeading } from "@/lib/toc-utils";

type Section = {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: ReactNode;
};


const PlaceholderBlock = ({ title }: { title: string }) => (
  <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-5 text-sm text-gray-600">
    <p className="font-semibold text-gray-700">Innehåll saknas för "{title}".</p>
    <p className="mt-2">Fyll i sektionens text här.</p>
  </div>
);

const ExampleBox = ({ title, children }: { title?: string; children: ReactNode }) => (
  <div className="my-6 rounded-xl border border-cyan-200 bg-cyan-50/50 p-5">
    {title && <p className="font-semibold text-cyan-900 mb-3">{title}</p>}
    <div className="text-gray-700 space-y-2">{children}</div>
  </div>
);

const ActionBox = ({ children }: { children: ReactNode }) => (
  <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
    <p className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5" />
      Så kan du göra
    </p>
    <div className="text-gray-700">{children}</div>
  </div>
);


const sections: Section[] = [
  {
    id: "varfor-bedoms",
    number: "01",
    title: "Varför bedömning i AI-tider?",
    summary: "När AI kan skapa texter och analyser förändras grunderna för vad och hur vi bedömer. Validitet, transparens och likvärdighet blir avgörande.",
    content: (
      <>
        <p>
          När generativ AI snabbt kan skapa texter, analyser och bilder förändras förutsättningarna för vad vi bedömer – och hur. I grunden handlar bedömning om att synliggöra vad en elev kan, förstår och kan använda, men AI-verktyg utmanar det eftersom de kan automatisera delar av det arbete som tidigare fungerade som bevis för lärande.
        </p>
        <p>
          Det ställer nya krav på <strong>validitet</strong> (mäter vi verkligen det vi avser att mäta?), <strong>transparens</strong> (är det tydligt vad eleven själv gjort?) och <strong>likvärdighet</strong> (har alla samma möjligheter?).
        </p>
        <p>
          AI blir en spegel som visar hur mycket våra bedömningsformer faktiskt bygger på produkten – det färdiga resultatet – snarare än på elevens process och förståelse.
        </p>

        <ExampleBox title="Exempel">
          <p>
            En elev lämnar in en välskriven essä som till stor del genererats med en chattbot. Den uppfyller formella kriterier, men säger inte nödvändigtvis något om elevens analytiska förmåga. I ett annat fall använder en elev AI för att strukturera tankar, formulera en hypotes och sedan skriva vidare själv. Här blir AI-stödet ett led i lärandet, inte ett hinder för bedömning.
          </p>
        </ExampleBox>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li>Klargör syftet för varje uppgift – vad är det egentligen du vill att eleven ska visa?</li>
            <li>Ange spelreglerna: skriv en kort AI-sektion i uppgiftsinstruktionen som beskriver vilken användning som är tillåten, varför, och hur den ska redovisas.</li>
            <li>Synliggör kriterier som fokuserar på tänkande, resonemang och förståelse snarare än färdig text.</li>
            <li>Kommunicera öppet med eleverna om bedömningens syfte – att den inte handlar om att avslöja fusk, utan om att förstå lärande i en ny tid.</li>
          </ul>
        </ActionBox>

        <p>
          Bedömning i AI-tider kräver alltså en återgång till kärnan: att värdera förståelse, reflektion och ansvarstagande. Det handlar mindre om att kontrollera verktyg och mer om att tydliggöra kunskapens värde – även när en maskin kan efterlikna den.
        </p>
      </>
    ),
  },
  {
    id: "process-vs-produkt",
    number: "02",
    title: "Process och produkt – och relationen däremellan",
    summary: "AI kan skapa produkter snabbt, men lärandet sker i processen. Bedömningen behöver fånga vägen dit, inte bara slutresultatet.",
    content: (
      <>
        <p>
          AI gör att skillnaden mellan process och produkt blir mer central än någonsin.
        </p>
        <p>
          Produkten kan snabbt förskönas eller till och med skapas av en maskin – men lärandet sker i processen: i valet av frågor, i förmågan att avgöra om ett svar är rimligt, i hur eleven bearbetar och omformar information.
        </p>
        <p>
          Historiskt har skolan ofta bedömt produkten – den färdiga texten, provet, presentationen – som ett tecken på kunskap. I en AI-stött värld behöver läraren i högre grad se processen som lärandets primära arena och bedömningsunderlag.
        </p>

        <ExampleBox title="Exempel">
          <p>I ett skrivmoment kan eleverna lämna in:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Utkast 1 – idéer och planering (AI tillåtet)</li>
            <li>Utkast 2 – reviderad text efter respons</li>
            <li>Slutversion – med kort reflektion över vad de ändrat och varför</li>
          </ol>
          <p className="mt-3">
            Läraren kan bedöma hur eleven använt AI, vilka val som gjorts och vilken förståelse som syns i revideringarna. Det blir en mer rättvis och lärandeorienterad bedömning än att enbart värdera sluttexten.
          </p>
        </ExampleBox>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li>Be om spår av tänkande: be eleverna lämna in utkast, kommentarer, skisser eller promptförslag.</li>
            <li>Uppmuntra reflektion: låt eleverna kort beskriva hur de använt AI och vad de lärde sig av processen.</li>
            <li>Kombinera format: komplettera skrivna produkter med muntliga resonemang, visuella redovisningar eller loggar.</li>
            <li>Tydliggör syftet: förklara att processloggar inte är kontroll, utan en möjlighet att synliggöra lärande.</li>
          </ul>
        </ActionBox>

        <p>
          När processen synliggörs blir bedömningen både mer transparent och autentisk. I praktiken handlar det inte om att "avslöja" AI-användning, utan om att förstå hur eleven förhåller sig till teknologin – kritiskt, kreativt och självständigt.
        </p>
      </>
    ),
  },
  {
    id: "alignment",
    number: "03",
    title: "Bedömningens grundprinciper i AI-klassrummet",
    summary: "Syfte, uppgift, bedömningskriterier och AI-policy måste hänga ihop. Alignment blir avgörande för rättvis och valid bedömning.",
    content: (
      <>
        <p>
          AI förändrar inte bara vad elever kan göra, utan också vad bedömning behöver fånga. Därför blir <strong>alignment</strong> – samspelet mellan syfte, uppgift och bedömningskriterier – avgörande. En uppgift kan vara hur välgjord som helst, men om den inte hänger ihop med syftet eller öppnar för rätt slags AI-användning, riskerar bedömningen att tappa riktning.
        </p>

        <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 border border-cyan-200">
          <p className="font-semibold text-gray-900 mb-4 text-center">
            Syfte ↔ Uppgift ↔ Bedömningskriterier ↔ Tillåten AI-användning
          </p>
          <p className="text-sm text-gray-700">
            Tänk på detta som en fyrhörning snarare än en triangel:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li><strong>Syftet</strong> avgör varför uppgiften finns – vad vill jag att eleverna ska lära sig eller visa?</li>
            <li><strong>Uppgiften</strong> definierar hur de ska visa det.</li>
            <li><strong>Bedömningskriterierna</strong> förtydligar vad som räknas som kvalitet.</li>
            <li><strong>Tillåten AI-användning</strong> behöver ligga i linje med de tre ovan.</li>
          </ul>
        </div>

        <p>
          Om målet är att utveckla kritisk reflektion, är det rimligt att låta AI hjälpa till med språkstruktur men inte med argument. Om syftet är att lära sig informationssökning, blir det kanske viktigare att analysera AI:s svar än att skapa ett eget.
        </p>

        <ExampleBox title="Exempel: Uppgiftsbeskrivning">
          <div className="space-y-3">
            <p className="font-medium text-gray-800">
              Skriv en reflekterande text om hur sociala medier påverkar din generation.
            </p>
            <div className="pl-4 border-l-4 border-cyan-300 space-y-2">
              <p><strong>Du får använda AI-verktyg för att:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Få hjälp att formulera idéer eller skapa en disposition.</li>
                <li>Förbättra språklig tydlighet.</li>
              </ul>
              <p><strong>Du får inte använda AI för att:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Skriva hela texten åt dig eller sammanställa färdiga resonemang.</li>
              </ul>
              <p><strong>Du ska lämna in:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Texten</li>
                <li>En kort reflektion (5–10 meningar) om hur du använde AI och varför.</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Här blir AI-användningen synlig men styrd, och läraren kan bedöma både språk, resonemang och elevens förhållningssätt.
            </p>
          </div>
        </ExampleBox>

        <ActionBox>
          <div className="space-y-3">
            <p className="font-medium">Skapa en "AI-sektion" i varje uppgiftsmall.</p>
            <p>Ange tre nivåer:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong>Tillåtet:</strong> när AI stödjer syftet (t.ex. idégenerering).</li>
              <li><strong>Obligatoriskt:</strong> när syftet är att lära sig använda AI reflekterat.</li>
              <li><strong>Förbjudet:</strong> när AI riskerar att ersätta det du faktiskt vill mäta.</li>
            </ul>
            <p className="mt-3">Synliggör <em>varför</em>. En enkel förklaring ("för att vi ska träna argumentation") ökar elevernas förståelse och ansvar.</p>
            <p>Testa alignment tillsammans i kollegiet. Stäm av: är syftet tydligt? Stämmer uppgift, kriterier och AI-policy ihop?</p>
          </div>
        </ActionBox>

        <p>
          När syfte, uppgift och bedömning är i balans blir AI inte ett hot mot validiteten, utan ett verktyg som hjälper både lärare och elever att fokusera på det som verkligen ska läras.
        </p>

        <div className="my-6 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Ett nytt bedömningslandskap – AI som wicked problem</h3>
          <p className="text-sm text-gray-700 mb-3">
            Bedömning i AI-tider kan beskrivas som ett <em>wicked problem</em> – ett komplext problem utan tydliga gränser eller färdiga lösningar. Varje gång vi försöker "lösa" det, förändras själva problemet.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            Ett wicked problem kännetecknas av:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-2">
            <li>Många aktörer med olika perspektiv (lärare, elever, rektorer, teknikutvecklare)</li>
            <li>Föränderliga förutsättningar (nya verktyg varje månad)</li>
            <li>Lösningar som skapar nya utmaningar</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            Att förstå AI och bedömning som ett wicked problem innebär att vi behöver gå från "regelstyrning" till "reflekterande praktik".
          </p>
        </div>

        <div className="my-6 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">AI:s affordanser i bedömningspraktiken</h3>
          <p className="text-sm text-gray-700 mb-3">
            Begreppet <em>affordans</em> handlar om vad en miljö eller ett verktyg bjuder in till att göra. AI-verktyg har sina egna affordanser: de inbjuder till vissa handlingar, men begränsar andra.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            För bedömning innebär detta att teknologin inte är neutral:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-2">
            <li>AI bjuder in till effektivisering – men riskerar att minska reflektion</li>
            <li>AI bjuder in till perfektion – men kan dölja det kreativa tänkandet</li>
            <li>AI bjuder in till idéutforskande – men kan uppmuntra passiv reproduktion</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            Genom att förstå AI:s affordanser kan vi gå bortom frågan "ska vi tillåta eller förbjuda AI?" till den mer fruktbara frågan: "Vilka typer av tänkande och handling vill vi att våra uppgifter ska bjuda in till?"
          </p>
        </div>
      </>
    ),
  },
  {
    id: "klassrums-overenskommelse",
    number: "04",
    title: "Klassrumsöverenskommelse om AI",
    summary: "En gemensam överenskommelse bygger ansvar och tillit. Från förbud till förtroende genom delaktighet och dialog.",
    content: (
      <>
        <p>
          Ingen regelbok kan täcka alla situationer där AI används. Därför är det klokt att skapa en gemensam överenskommelse i klassen – inte som ett kontrollinstrument, utan som ett sätt att bygga ansvar och tillit.
        </p>
        <p>
          När elever får vara med och definiera vad som är okej och varför, ökar deras förståelse för både teknikens möjligheter och risker. Det flyttar också fokus från <em>vad man får</em> till <em>hur man förhåller sig</em>.
        </p>

        <div className="my-6 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <h3 className="font-semibold text-gray-900 mb-3">Förklara: från förbud till förtroende</h3>
          <p className="text-sm text-gray-700 mb-2">
            Ett ensidigt förbud signalerar misstro och riskerar att flytta AI-användningen utanför klassrummet, där ingen lär något av den.
          </p>
          <p className="text-sm text-gray-700">
            En gemensamt framtagen överenskommelse, däremot, gör att eleverna känner delaktighet och ansvar. Det blir en etisk kompass snarare än en lista av regler.
          </p>
        </div>

        <ExampleBox title="Exempel på klassrumsöverenskommelse">
          <ul className="space-y-2 list-disc list-inside">
            <li>Vi får använda AI som hjälp för att få idéer, hitta ord eller kontrollera språket.</li>
            <li>Vi använder aldrig AI för att skriva hela texter åt oss eller låtsas som om något var vårt eget.</li>
            <li>När vi använder AI ska vi alltid kunna berätta hur vi gjort och varför.</li>
            <li>Vi lär oss använda AI på ett sätt som hjälper oss att tänka själva.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            En sådan överenskommelse fungerar som en gemensam värdegrund för kursen, och kan hängas upp i klassrummet eller inkluderas i den digitala lärplattformen.
          </p>
        </ExampleBox>

        <ActionBox>
          <div className="space-y-3">
            <p className="font-medium">Genomför en 20-minuters workshop:</p>
            <ol className="space-y-2 list-decimal list-inside ml-2">
              <li>Dela in klassen i smågrupper och låt dem diskutera "AI som hjälp – AI som fusk".</li>
              <li>Låt varje grupp skriva upp sina tankar i två kolumner ("bra användning" / "problematiskt").</li>
              <li>Samla förslag på tavlan, prata om gråzonerna.</li>
              <li>Låt klassen rösta fram 3–5 gemensamma principer.</li>
              <li>Formulera dem tillsammans i jag-form eller vi-form ("Vi använder AI för att…", "Vi tar ansvar genom att…").</li>
            </ol>
            <div className="mt-4 space-y-2">
              <p><strong>Synliggör överenskommelsen:</strong> Skriv ut den, lägg upp den i Classroom eller Teams, och återbesök den när nya situationer uppstår.</p>
              <p><strong>Använd den som reflektionsverktyg:</strong> När elever redovisar sina processer kan de hänvisa till överenskommelsen: Hur har jag följt våra principer?</p>
            </div>
          </div>
        </ActionBox>

        <p className="font-medium mt-6">
          Det viktiga är inte perfekta formuleringar, utan ägarskap. När elever varit med och satt ramarna blir AI-användningen inte ett gråzonsspel – utan en del av en medveten lärandekultur.
        </p>
      </>
    ),
  },
  {
    id: "former-for-bedomning",
    number: "05",
    title: "Former för bedömning i AI-klassrummet",
    summary: "Diagnostisk, formativ, summativ och autentisk bedömning behöver kombineras för att fånga både process och förståelse i en AI-tid.",
    content: (
      <>
        <p>
          AI-utvecklingen gör att bedömning inte längre kan förstås som ett enskilt tillfälle i slutet av ett arbete. Den måste bli flerstämmig och situationsanpassad. Olika bedömningsformer fångar olika delar av lärandet – och i AI-miljöer behöver de kombineras för att behålla både rättvisa och djup.
        </p>
        <p>
          Att luta sig mot endast summativ bedömning (slutprodukten) riskerar att ge en skev bild, eftersom AI kan dölja vägen dit. Samtidigt blir formativ och autentisk bedömning centrala verktyg för att synliggöra förståelse, ansvar och metareflektion.
        </p>

        <div className="my-6 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-cyan-600">📋</span>
              Diagnostisk bedömning – att förstå utgångsläget
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI kan förstärka den diagnostiska fasen genom att hjälpa läraren identifiera elevers styrkor och behov – men inte ersätta den mänskliga tolkningen. I början av ett arbetsområde kan AI-stött självskattning, småskrivande eller samtal visa var eleverna befinner sig i sin förståelse.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Låt eleverna använda en chattbot för att förklara ett begrepp med egna ord och sedan be AI ge exempel på missförstånd. Genom att jämföra sina svar med AI:s får eleverna syn på sin egen förförståelse – och du som lärare får ett rikt underlag för planering.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt elever skriva en kort text eller spela in en muntlig reflektion om vad de redan vet.</li>
                <li>Använd AI som samtalspartner i par (t.ex. "förklara fotosyntesen för mig som om jag vore fem år") och diskutera resultatet i klassen.</li>
                <li>Dokumentera inte detaljer – använd det för att forma nästa steg i undervisningen.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-emerald-600">🔄</span>
              Formativ bedömning – att synliggöra lärandet i rörelse
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Formativ bedömning blir särskilt värdefull i AI-tider eftersom den fångar förmågan att resonera, välja och revidera – det som ofta sker innan texten är "färdig". AI kan användas som en spegel i lärandeprocessen: en källa till jämförelse, återkoppling eller motstånd.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Eleverna använder AI för att få respons på sina utkast, men ska i sin processlogg kommentera vilken respons de valde att använda och varför. Läraren bedömer då inte AI:s kvalitet, utan elevens omdöme.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Skapa "respons-prompter" kopplade till kursmål: t.ex. "Be AI ge dig två förbättringsförslag på hur ditt argument kan bli tydligare – och välj ett att testa."</li>
                <li>Låt elever jämföra AI:s respons med kamraters eller lärarens och reflektera över skillnader.</li>
                <li>Gör en snabb "feedback-loop": skriv, jämför, revidera, reflektera – allt synligt i loggen.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">✓</span>
              Summativ bedömning – när förståelsen ska synliggöras
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Summativ bedömning behövs fortfarande – men den måste utformas så att den visar elevens förståelse, inte AI:s kapacitet. Det handlar inte om att undvika AI, utan att säkerställa att uppgiften fortfarande mäter det avsedda.
            </p>
            <ExampleBox>
              <p className="text-sm">
                En muntlig "mini-viva" där eleven kort förklarar resonemanget bakom sin text, beskriver hur AI användes och motiverar sina val. Alternativt kan eleverna skriva en reflektionsdel: "Om jag skulle skriva om texten utan AI, vad skulle jag göra annorlunda?"
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt eleverna välja redovisningsform (text, film, muntligt försvar, grafisk visualisering) – men ställ samma krav på förståelse.</li>
                <li>Komplettera produktbedömning med en kort metareflektion.</li>
                <li>Sätt fokus på begreppsanvändning, resonemang och omdöme – inte på språklig perfektion.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-amber-600">🌍</span>
              Autentisk bedömning – att knyta an till verkligheten
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Autentiska uppgifter är kanske den mest kraftfulla bedömningsformen i AI-tider. När uppgifterna liknar verkliga problem – med öppna frågor, flera vägar och värderande moment – blir AI inte ett genvägsverktyg utan en del av den kontext eleverna ska kunna navigera i.
            </p>
            <ExampleBox>
              <p className="text-sm">
                I stället för att låta elever skriva en traditionell rapport om klimatförändringar kan uppgiften vara: <em>"Skapa ett underlag för en kommun som ska fatta beslut om en ny klimatstrategi. Använd AI som stöd för att samla argument, men redovisa hur du prövat och värderat informationen."</em>
              </p>
              <p className="text-sm mt-2">
                Här flyttas fokus från rätt/fel till resonemang, urval, etik och ansvar – det som AI ännu inte kan göra åt oss.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Ge uppgifter som kräver tolkning, källkritik och värdering, inte bara återgivning.</li>
                <li>Låt eleverna dokumentera hur de samarbetat med AI – vad gav verktyget, vad bidrog de själva med?</li>
                <li>Bedöm förmågan att integrera och reflektera snarare än att reproducera.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Bedömningsform</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Syfte</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">AI:s roll</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Bedömningsfokus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Diagnostisk</td>
                <td className="border border-gray-300 px-3 py-2">Förstå nuläget</td>
                <td className="border border-gray-300 px-3 py-2">Reflekterande spegel</td>
                <td className="border border-gray-300 px-3 py-2">Förförståelse</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Formativ</td>
                <td className="border border-gray-300 px-3 py-2">Stödja utveckling</td>
                <td className="border border-gray-300 px-3 py-2">Responspartner</td>
                <td className="border border-gray-300 px-3 py-2">Resonemang, val, metareflektion</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Summativ</td>
                <td className="border border-gray-300 px-3 py-2">Mäta måluppfyllelse</td>
                <td className="border border-gray-300 px-3 py-2">Underlag + försvar</td>
                <td className="border border-gray-300 px-3 py-2">Förståelse, ansvar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Autentisk</td>
                <td className="border border-gray-300 px-3 py-2">Träna verklighetsnära kompetens</td>
                <td className="border border-gray-300 px-3 py-2">Verktyg i uppgiftens kontext</td>
                <td className="border border-gray-300 px-3 py-2">Omdöme, tillämpning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 font-medium">
          När dessa former samspelar blir bedömningen både mänsklig och framtidsanpassad: AI används där den stärker lärandet, men aldrig där den tar över det.
        </p>
      </>
    ),
  },
  {
    id: "solo",
    number: "06",
    title: "SOLO-taxonomin i AI-miljö",
    summary: "SOLO hjälper att bedöma djupet i förståelsen, inte bara ytan. I AI-tider blir skillnaden mellan multistructural och relational nivå avgörande.",
    content: (
      <>
        <p>
          När AI kan formulera välstrukturerade svar på sekunder blir det ännu viktigare att kunna se djupet i lärandet. Det är inte längre produktens yta som visar vad eleven kan, utan graden av förståelse, förbindelse och överföring.
        </p>
        <p>
          Här erbjuder <strong>SOLO-taxonomin</strong> (Structure of Observed Learning Outcomes) ett kraftfullt språk för både lärare och elever att tala om tänkande och utveckling – särskilt i en tid där det mänskliga bidraget måste synliggöras.
        </p>

        <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
          <h3 className="font-semibold text-gray-900 mb-3">Från ytlig till djup förståelse</h3>
          <p className="text-sm text-gray-700 mb-3">SOLO beskriver lärande som en rörelse genom olika nivåer av komplexitet:</p>
          <ol className="space-y-2 text-sm text-gray-700">
            <li><strong>1. Prestructural</strong> – Eleven missförstår uppgiften eller saknar relevant kunskap.</li>
            <li><strong>2. Unistructural</strong> – En aspekt förstås, men utan sammanhang.</li>
            <li><strong>3. Multistructural</strong> – Flera delar förstås, men behandlas separat.</li>
            <li><strong>4. Relational</strong> – Eleven förbinder idéer till en helhet.</li>
            <li><strong>5. Extended abstract</strong> – Eleven överför förståelsen till nya situationer, drar slutsatser, skapar nytt.</li>
          </ol>
          <p className="text-sm text-gray-700 mt-3">
            I en AI-kontext blir dessa nivåer ett sätt att skilja AI:s output från elevens förståelse. AI kan ofta producera svar på multistructural-nivå – korrekt men fragmenterat. Den mänskliga förståelsen visar sig däremot i relational och extended abstract-nivåerna.
          </p>
        </div>

        <ExampleBox title="Exempel: från fakta till förbindelse">
          <p className="text-sm mb-3"><strong>Uppgift:</strong> "Diskutera hur AI förändrar vårt sätt att skriva."</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">SOLO-nivå</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Typiskt elevsvar</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Vad bedömningen bör fånga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Unistructural</td>
                  <td className="border border-gray-300 px-3 py-2">"AI hjälper oss skriva snabbare."</td>
                  <td className="border border-gray-300 px-3 py-2">En aspekt nämns men inte utvecklad.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Multistructural</td>
                  <td className="border border-gray-300 px-3 py-2">"AI hjälper oss skriva snabbare, men kan också göra oss lata."</td>
                  <td className="border border-gray-300 px-3 py-2">Flera aspekter, men utan samband.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Relational</td>
                  <td className="border border-gray-300 px-3 py-2">"AI förändrar skrivandet både språkligt och kognitivt – vi blir mer redaktörer än författare."</td>
                  <td className="border border-gray-300 px-3 py-2">Förbindelser mellan idéer, helhet.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Extended abstract</td>
                  <td className="border border-gray-300 px-3 py-2">"Om vi lär oss använda AI kritiskt kan skrivandet bli mer dialogiskt, där människa och maskin samproducerar mening."</td>
                  <td className="border border-gray-300 px-3 py-2">Överföring, syntes, framtidsblick.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3 text-gray-600">
            Bedömningen flyttas här från <em>hur mycket</em> eleven säger till <em>hur djupt och sammanhängande</em> hen tänker.
          </p>
        </ExampleBox>

        <div className="my-6 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">SOLO och AI-processen</h3>
          <p className="text-sm text-gray-700 mb-3">
            När elever använder AI i sina uppgifter kan SOLO hjälpa dem att reflektera över hur de tänker med och om AI. Exempelvis kan en elev fråga sig:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>Unistructural:</strong> Vad fick jag för svar från AI?</li>
            <li><strong>Multistructural:</strong> Vilka olika perspektiv eller exempel gav den?</li>
            <li><strong>Relational:</strong> Hur hänger dessa perspektiv ihop med mitt syfte?</li>
            <li><strong>Extended abstract:</strong> Hur kan jag använda denna förståelse i en ny kontext – eller problematisera den?</li>
          </ul>
        </div>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Gör SOLO synligt.</strong> Introducera de fem nivåerna i elevnära språk och använd dem som en gemensam referens i klassrummet.</li>
            <li><strong>Knyt bedömningskriterier till SOLO.</strong> Till exempel: "För att visa relationell nivå ska du kunna visa hur olika källor hänger ihop."</li>
            <li><strong>Låt elever bedöma sig själva.</strong> Efter en AI-stödd uppgift: "Vilken SOLO-nivå tycker du att du befinner dig på – och vad skulle krävas för att ta nästa steg?"</li>
            <li><strong>Använd SOLO i respons.</strong> Istället för att säga "utveckla resonemanget" kan du säga "Du är på multistructural nivå – hur kan du skapa samband mellan dina exempel?"</li>
            <li><strong>Koppla till processloggar.</strong> Låt elever förklara hur AI hjälpte dem att nå en högre nivå – eller vad de upptäckte att verktyget inte kunde göra.</li>
          </ul>
        </ActionBox>

        <p className="mt-6 font-medium">
          SOLO-taxonomin hjälper oss alltså att synliggöra mänskligt tänkande i en automatiserad värld – den gör det möjligt att fortsätta bedöma det som faktiskt är skolans uppdrag: förståelse, omdöme och förmågan att använda kunskap på nya sätt.
        </p>
      </>
    ),
  },
  {
    id: "fyra-c",
    number: "07",
    title: "De fyra C:na i AI-klassrummet",
    summary: "Critical thinking, Communication, Collaboration och Creativity – framtidskompetenser som blir ännu viktigare när AI kan automatisera det repetitiva.",
    content: (
      <>
        <p>
          AI ställer inte bara frågor om vad vi bedömer, utan vilka förmågor som blir meningsfulla att utveckla i en tid då maskiner kan skriva, översätta och analysera snabbare än vi.
        </p>
        <p>
          Här blir de så kallade <strong>fyra C:na</strong> – Critical thinking, Communication, Collaboration och Creativity – en central kompass. De formulerades redan 2002 i det amerikanska ramverket Partnership for 21st Century Skills (P21) som svar på frågan: Vilka färdigheter behöver människor i ett samhälle där information är oändlig och teknik är självklar?
        </p>
        <p className="font-medium">
          Två decennier senare har AI gjort den frågan ännu mer akut.
        </p>

        <div className="my-6 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">🧠</span>
              Critical thinking – att tänka med och mot AI
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI kan ge oss svar, men sällan förståelse. Därför blir kritisk granskning en nyckelförmåga – inte bara att avslöja fel, utan att förstå varför och hur de uppstår. Elever behöver utveckla ett kritiskt förhållningssätt både till källor och till själva teknologin.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Låt eleverna be en chattbot skriva ett argumenterande stycke, och sedan analysera det utifrån trovärdighet, bias och språk. Bedömningen kan fokusera på elevens förmåga att upptäcka mönster och dra slutsatser – inte på att avslöja rätt eller fel.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Bedöm inte bara om eleven hittar fel, utan hur hen resonerar kring varför de uppstår.</li>
                <li>Låt elever jämföra AI-genererade svar med mänskliga och värdera skillnader.</li>
                <li>Koppla uppgiften till etik: Vad händer om vi okritiskt accepterar AI:s svar?</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-600">💬</span>
              Communication – att uttrycka sig genom flera röster
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              När AI kan producera välformulerade texter behöver elever snarare visa kommunikativ medvetenhet än grammatiskt korrekthet. Det handlar om röst, ton, målgrupp och syfte – förmågan att anpassa språk och uttryck i olika sammanhang.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Låt elever använda AI för att formulera ett första utkast, och sedan arbeta med att återta sin egen röst: Hur kan texten låta mer som mig? Hur förändras tonen beroende på mottagare?
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Bedöm elevens kommunikativa val, inte AI:s formuleringar.</li>
                <li>Låt elever spela in korta förklaringar av sina texter eller välja annan modalitet (film, ljud, visuellt stöd).</li>
                <li>Kombinera AI-stöd med muntliga moment – inte som kontroll, utan som fördjupning.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">🤝</span>
              Collaboration – att lära i partnerskap
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI öppnar för en ny sorts samarbete – mellan människor och maskiner. Att samarbeta med AI innebär att kunna formulera tydliga frågor, värdera svar och använda dem i dialog med andra. Det handlar inte om att låta AI ersätta grupparbete, utan om att använda det som en tredje part i tänkandet.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Elever arbetar i grupper där varje medlem använder AI för att ta fram olika perspektiv på ett problem. Gruppen jämför sedan och diskuterar vilka svar som verkar mest rimliga och varför.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Bedöm hur eleverna använder AI som ett samtalsverktyg, inte bara som informationskälla.</li>
                <li>Låt kamratrespons ske delvis genom AI – men fokusera på hur eleverna tolkar och använder responsen.</li>
                <li>Inkludera samarbete med teknik som en bedömningsaspekt: Hur hanterar eleven digitala resurser i gemensamma processer?</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-amber-600">✨</span>
              Creativity – att tänka nytt med stöd av teknik
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI kan föreslå, men inte skapa mening. Den mänskliga kreativiteten handlar om att välja, kombinera och omtolka – inte bara producera. När AI tar över det repetitiva blir lärarens och elevens uppgift att utforska de mänskliga kvaliteter som maskinen inte har: intuition, känsla, humor, fantasi.
            </p>
            <ExampleBox>
              <p className="text-sm">
                I ett projekt kring framtidens berättelser får elever använda AI för att skapa bilder, miljöer eller inledningar – men måste själva avsluta och tolka berättelsen utifrån ett etiskt eller existentiellt tema.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Bedöm kreativa beslut och resonemang, inte hur spektakulärt resultatet blev.</li>
                <li>Fråga: Hur använde du AI som inspirationskälla? Vad valde du bort – och varför?</li>
                <li>Uppmuntra elever att jämföra egna idéer med AI:s och motivera sina val.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">C</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Exempel på AI-användning</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Möjligt bedömningsfokus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Critical thinking</td>
                <td className="border border-gray-300 px-3 py-2">Granska AI:s källor, bias, argument</td>
                <td className="border border-gray-300 px-3 py-2">Resonemang, källkritik, metareflektion</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Communication</td>
                <td className="border border-gray-300 px-3 py-2">Anpassa AI-text till målgrupp</td>
                <td className="border border-gray-300 px-3 py-2">Röst, stil, syfte</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Collaboration</td>
                <td className="border border-gray-300 px-3 py-2">Skapa gemensamt med AI och andra</td>
                <td className="border border-gray-300 px-3 py-2">Dialog, ansvar, lyssnande</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Creativity</td>
                <td className="border border-gray-300 px-3 py-2">Generera idéer med AI, välja och omforma</td>
                <td className="border border-gray-300 px-3 py-2">Originalitet, val, motivation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 font-medium">
          Att lyfta de fyra C:na i undervisning och bedömning innebär att förskjuta fokus från prestation till förhållningssätt. Det är där framtidens kompetenser formas – i hur eleverna lär sig tänka, samarbeta och skapa med tekniken, utan att låta sig styras av den.
        </p>
      </>
    ),
  },
  {
    id: "skrivande",
    number: "08",
    title: "AI, skrivande och bedömning",
    summary: "Skrivbedömning i AI-tider handlar om röst, process och förståelse – inte om perfekt slutprodukt. Från text till tänkande.",
    content: (
      <>
        <p>
          AI har förändrat själva villkoren för skrivande. Det handlar inte längre bara om att producera text, utan om att förstå och forma mening i samspel med teknik.
        </p>
        <p>
          När chattbotar kan leverera grammatiskt korrekta och välstrukturerade texter på sekunder, blir det lärarens uppgift att bedöma <em>hur eleven tänker genom sitt skrivande</em>, snarare än hur vacker texten ser ut.
        </p>
        <p className="font-medium">
          Bedömning av skrivande i AI-tider handlar därför om att se rösten, resonemanget och reflektionen – det som avslöjar människan bakom texten.
        </p>

        <div className="my-6 space-y-6">
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Röst och autenticitet – vem talar i texten?</h3>
            <p className="text-sm text-gray-700 mb-3">
              En av de största förändringarna AI för med sig är att text inte längre nödvändigtvis bär spår av sin författare. AI kan imitera stil, ton och genre – men saknar intention, erfarenhet och värdering.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Det innebär att lärarens blick behöver flyttas från ytan (språkets form) till djupet (meningens ursprung).
            </p>
            <ExampleBox>
              <p className="text-sm">
                Två elevtexter kan se nästan identiska ut språkligt, men i den ena går det att känna igen elevens erfarenhet, perspektiv och val; i den andra finns bara en korrekt parafras av AI:s genererade svar.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt eleverna reflektera kring vilken röst de vill ha i texten: Hur låter jag? Hur låter AI? Hur hittar jag min ton?</li>
                <li>Bedöm kommunikativ trovärdighet snarare än formell korrekthet: visar eleven förståelse för syfte, mottagare och sammanhang?</li>
                <li>Använd textjämförelse över tid: låt elever spara äldre texter och återkomma till sin egen utveckling.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Källor, fakta och hallucinationer</h3>
            <p className="text-sm text-gray-700 mb-3">
              AI-system presenterar ofta information med hög språklig säkerhet men låg faktuell tillförlitlighet. Det innebär att källkritik nu måste inkludera teknologikritik: Vem tränade modellen? Vilka källor bygger den på? Hur kan jag verifiera detta?
            </p>
            <ExampleBox>
              <p className="text-sm">
                Elever får i uppgift att låta AI skriva ett stycke om ett historiskt skeende, och sedan granska texten: vilka påståenden går att styrka? vilka verkar påhittade? Läraren kan bedöma resonemanget kring källor och trovärdighet, snarare än språket i sig.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt elever alltid ange hur de har faktagranskat AI:s svar.</li>
                <li>Diskutera att "välskriven text" inte är detsamma som "pålitlig text".</li>
                <li>Bedöm förmågan att validera och motivera snarare än att bara presentera fakta.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Likriktning och språkets nyansförlust</h3>
            <p className="text-sm text-gray-700 mb-3">
              AI tenderar att skriva på ett sätt som är korrekt, men slätt. Det riskerar att skapa en likriktning i språk och tanke: texter blir effektiva, men förutsägbara. Om elever alltid använder AI som språkförbättrare utan att reflektera, riskerar deras egna uttryck att försvinna.
            </p>
            <ExampleBox>
              <p className="text-sm">
                Efter att eleverna använt AI för att "förbättra" sin text, kan de jämföra före- och efterversioner: Vad blev bättre? Vad försvann? Vad säger det om mitt sätt att skriva?
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Uppmuntra elever att välja bort AI-förslag som inte stämmer med deras stil.</li>
                <li>Bedöm stilistisk medvetenhet – elevens förmåga att reflektera över ton och uttryck.</li>
                <li>Visa exempel på olika språkstilar: formell, narrativ, personlig, poetisk – och låt eleverna testa att växla.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">AI-detektion och kontroll – en återvändsgränd</h3>
            <p className="text-sm text-gray-700 mb-3">
              Många skolor har försökt möta AI med detektorer, men dessa verktyg skapar fler problem än de löser: de är opålitliga, kan felaktigt anklaga elever, och flyttar fokus från lärande till misstanke. Det är en kontrollkultur som riskerar att undergräva tillit – både mellan lärare och elever, och mellan elever och lärande.
            </p>
            <p className="text-sm text-gray-700 mb-3 font-medium">
              I stället för att försöka bevisa vem som skrev, behöver vi fråga vad eleven visat att hen förstår.
            </p>
            <p className="text-sm text-gray-700">
              När bedömningen bygger på process, reflektion och förståelse blir AI-detektion överflödig.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Processreflektion – lärandet i spegeln</h3>
            <p className="text-sm text-gray-700 mb-3">
              Det viktigaste skiftet är kanske att bedömningen behöver fånga hur elever förhåller sig till sin egen AI-användning. Det handlar inte om att rapportera vilket verktyg de använde, utan att visa vad de lärde sig av det.
            </p>
            <div className="mt-3 p-4 bg-white rounded-lg border border-emerald-300">
              <p className="text-sm font-medium text-gray-800 mb-2">Exempel på reflektionsfrågor:</p>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                <li>Hur använde du AI i ditt arbete?</li>
                <li>Vilken typ av stöd fick du – och hur påverkade det ditt tänkande?</li>
                <li>Vad valde du att ändra själv?</li>
                <li>Vad lärde du dig om både ämnet och om dig själv som skribent?</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt eleverna skriva korta metareflektioner efter varje större skrivuppgift.</li>
                <li>Bedöm kvaliteten i reflektionen, inte mängden detaljer.</li>
                <li>Uppmuntra elever att se AI som en dialogpartner i lärandet, inte som en genväg.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-300">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">Från skrivbedömning till bedömning av tänkande</h3>
          <p className="text-sm text-gray-700 mb-3">
            AI utmanar själva idén om vad det innebär att kunna skriva. I stället för att mäta textens yta behöver vi nu mäta intention, förståelse och förmåga till självständigt omdöme.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            Det innebär inte att skrivande förlorar sin plats – tvärtom. Det blir mer centralt än någonsin, men som redskap för tanke, inte som produkt att leverera.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-sm">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">AI kan skapa text</p>
              <p className="text-gray-600">men inte erfarenhet</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">AI kan ge struktur</p>
              <p className="text-gray-600">men inte syfte</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">AI kan imitera språk</p>
              <p className="text-gray-600">men inte mening</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-4 font-medium text-center">
            Att bedöma skrivande i AI-tider handlar därför om att se hur eleven använder språket för att förstå världen och sig själv – även när maskinen är med i processen.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "processloggar",
    number: "09",
    title: "Processloggar och metareflektion",
    summary: "Processloggar synliggör tänkandet bakom produkten. De visar hur eleven förhåller sig till AI och till sitt eget lärande.",
    content: (
      <>
        <p>
          När generativ AI blir en del av skriv- och lärprocessen behöver vi nya sätt att se vad elever faktiskt kan. Det räcker inte längre att titta på slutprodukten – den visar resultatet men sällan resan dit.
        </p>
        <p>
          Det är i <strong>processen</strong> – i valen, omarbetningarna och reflektionerna – som lärandet blir synligt.
        </p>
        <p>
          En väl utformad processlogg fungerar som ett fönster in i elevens tänkande: den visar hur eleven prövar, tolkar och utvecklar sina idéer, och hur AI används som stöd snarare än ersättning.
        </p>

        <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
          <h3 className="font-semibold text-gray-900 mb-3">Från "redovisning" till reflektion</h3>
          <p className="text-sm text-gray-700 mb-3">
            Syftet med processloggen är inte att redogöra för varje prompt, utan att visa hur eleven har tänkt.
          </p>
          <p className="text-sm text-gray-700">
            Det handlar om att synliggöra <strong>metakognition</strong> – förmågan att förstå sitt eget lärande. En processlogg kan alltså betraktas som en metareflektion i rörelse, där eleven kontinuerligt beskriver hur hen tolkar uppgiften, planerar sitt arbete, använder olika resurser (inklusive AI), värderar och justerar sina val, och reflekterar över vad som lärts.
          </p>
        </div>

        <div className="my-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Exempel på processloggfrågor</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-cyan-200 bg-cyan-50/50">
              <p className="font-medium text-cyan-900 mb-2">Fas 1 – Starten</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Vad förstår jag att uppgiften handlar om?</li>
                <li>Vad vet jag redan, och vad behöver jag ta reda på?</li>
                <li>Hur tänker jag använda AI för att komma igång?</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-amber-200 bg-amber-50/50">
              <p className="font-medium text-amber-900 mb-2">Fas 2 – Utforskandet</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Vad bad jag AI om – och vad fick jag tillbaka?</li>
                <li>Hur använde jag (eller valde bort) resultatet?</li>
                <li>Vad lärde jag mig av att jämföra olika svar eller källor?</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-purple-200 bg-purple-50/50">
              <p className="font-medium text-purple-900 mb-2">Fas 3 – Bearbetningen</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Vilka förändringar gjorde jag i min text/idé/analys?</li>
                <li>Hur förändrades min förståelse under arbetet?</li>
                <li>Vad hjälpte AI mig att se – och vad behövde jag själv tänka ut?</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50">
              <p className="font-medium text-emerald-900 mb-2">Fas 4 – Efteråt</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Hur nöjd är jag med resultatet och processen?</li>
                <li>Vad skulle jag göra annorlunda nästa gång?</li>
                <li>Vad säger denna uppgift om hur jag lär bäst?</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Bedömning av processloggen</h3>
          <p className="text-sm text-gray-700 mb-3">
            Bedömningen bör fokusera på kvaliteten i reflektionen, inte på längd eller detaljnivå. Läraren behöver inte granska varje rad, utan snarare läsa efter spår av utveckling och omdöme:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Kvalitetsnivå</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Fokus på</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Exempel på elevuttalanden</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Ytlig reflektion</td>
                  <td className="border border-gray-300 px-3 py-2">Händelser</td>
                  <td className="border border-gray-300 px-3 py-2">"Jag använde AI för att få tips."</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Beskrivande reflektion</td>
                  <td className="border border-gray-300 px-3 py-2">Effekter</td>
                  <td className="border border-gray-300 px-3 py-2">"AI hjälpte mig att hitta exempel."</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Analytisk reflektion</td>
                  <td className="border border-gray-300 px-3 py-2">Orsak/verkan</td>
                  <td className="border border-gray-300 px-3 py-2">"AI:s förslag gjorde texten tydligare men mindre personlig."</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Metareflekterande nivå</td>
                  <td className="border border-gray-300 px-3 py-2">Omdöme och överföring</td>
                  <td className="border border-gray-300 px-3 py-2">"Jag märkte att AI fungerar bäst när jag redan vet vad jag vill säga – nästa gång ska jag använda det senare i processen."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 mt-3 font-medium">
            På så sätt bedöms inte användningen av AI, utan förhållningssättet till den.
          </p>
        </div>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Gör processloggen enkel och återkommande.</strong> En kort reflektion per vecka räcker – hellre kontinuitet än omfattning.</li>
            <li><strong>Integrera den i lärplattformen.</strong> En digital journal (t.ex. i Docs, Teams eller Padlet) gör utvecklingen spårbar.</li>
            <li><strong>Knyt den till uppgiften.</strong> Låt eleverna alltid koppla reflektionen till kursmål eller bedömningsaspekter.</li>
            <li><strong>Ge exempel på "bra reflektion".</strong> Visa korta elevexempel (autentiska eller fiktiva) så eleverna ser hur djup reflektion låter.</li>
            <li><strong>Använd som samtalsunderlag.</strong> Läs valda delar tillsammans i formativ återkoppling: "Här beskriver du vad, men inte varför – kan du utveckla det?"</li>
          </ul>
        </ActionBox>

        <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3">Loggen som lärarens kompass</h3>
          <p className="text-sm text-gray-700 mb-2">
            För läraren blir processloggen inte bara ett bedömningsunderlag, utan ett <strong>diagnostiskt verktyg</strong>. Den visar var elever fastnar, hur de resonerar, och vilka didaktiska stöd som behövs.
          </p>
          <p className="text-sm text-gray-700">
            Dessutom blir loggarna en gemensam kunskapsbank: de fångar erfarenheter av AI-användning som hela klassen kan lära av.
          </p>
        </div>

        <p className="mt-6 font-medium">
          När loggarna används kontinuerligt förändras kulturen i klassrummet. Fokus flyttas från att "göra uppgiften rätt" till att förstå hur man lär sig. Eleverna tränas i att se sin egen roll som aktiva medskapare i kunskapsprocessen, inte bara som mottagare av uppgifter eller AI-svar.
        </p>
        <p className="mt-3">
          Processloggen blir då en metafor för hela skolans AI-förhållningssätt: ett sätt att följa tänkandet, inte kontrollera det.
        </p>
      </>
    ),
  },
  {
    id: "muntligt-forsvar",
    number: "10",
    title: "Muntligt försvar av AI-stödd text",
    summary: "Muntligt försvar kan fördjupa förståelsen – men måste utformas likvärdigt. Dialog, inte förhör.",
    content: (
      <>
        <p>
          Ett av de vanligaste förslagen för att säkerställa att elever förstår sina AI-stödda texter är att låta dem försvara sitt arbete muntligt.
        </p>
        <p>
          Tanken är intuitiv: om eleven verkligen skrivit, förstått och bearbetat sin text själv, borde hen kunna prata om den. Men även om detta kan fungera som ett värdefullt bedömningskomplement, är det inte en enkel lösning – det kräver omtanke och medveten design.
        </p>

        <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
          <h3 className="font-semibold text-gray-900 mb-3">Försvar som fördjupning – inte förhör</h3>
          <p className="text-sm text-gray-700 mb-3">
            Det muntliga försvaret kan ge en unik inblick i elevens tänkande, förståelse och beslutsfattande. Genom att samtala om sin process synliggör eleven hur hen har använt AI, vilka val som gjorts och hur texten utvecklats.
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Rätt genomfört kan det förvandla bedömningen till ett autentiskt lärandesamtal, snarare än en kontrollsituation.
          </p>
        </div>

        <ExampleBox title="Exempel">
          <p className="text-sm mb-2">
            En elev har skrivit en argumenterande text om övervakning. I ett kort samtal får hen beskriva:
          </p>
          <ul className="text-sm space-y-1 list-disc list-inside ml-2">
            <li>Hur uppgiften tolkades</li>
            <li>Hur AI användes i planeringen</li>
            <li>Hur källor valdes och värderades</li>
            <li>Vad eleven själv står för i texten</li>
          </ul>
          <p className="text-sm mt-3">
            Läraren får då syn på både förståelsen och värderingen bakom texten – något som inte alltid framgår i skrift.
          </p>
        </ExampleBox>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li>Använd öppna frågor: "Hur resonerade du när AI föreslog X?" eller "Vilken del av texten speglar din egen ståndpunkt mest?"</li>
            <li>Håll samtalet kort (3–5 minuter) och fokusera på resonemang, inte prestation.</li>
            <li>Låt eleven förbereda sig – till exempel genom att markera tre ställen i texten att prata om.</li>
          </ul>
        </ActionBox>

        <p className="mt-4">
          Det muntliga försvaret kan på så sätt fungera som ett metakognitivt filter: eleven tränar sig i att förstå sitt eget tänkande, och läraren kan se om förståelsen är genuin.
        </p>

        <div className="my-6 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <h3 className="font-semibold text-gray-900 mb-3">⚠️ Fallgrop: när vi mäter fel sak</h3>
          <p className="text-sm text-gray-700 mb-3">
            Samtidigt finns en risk: muntligt försvar mäter <strong>muntlig trygghet, spontanitet och språklig säkerhet</strong> – inte nödvändigtvis ämnesförståelse.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            För vissa elever (särskilt de med NPF, språkliga svårigheter eller hög prestationsångest) kan formatet bli en orättvis barriär. Om vi inte är uppmärksamma riskerar vi att bedöma personlighetsdrag istället för kunskap.
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Det kan också uppstå skevhet mellan elever som tränat muntliga situationer och de som inte har det – eller mellan de som använder AI som språkstöd och de som inte gör det.
          </p>
        </div>

        <ActionBox>
          <p className="font-medium mb-2">Så kan du förebygga detta:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Gör försvar frivilligt eller kombinera muntligt och skriftligt alternativ.</li>
            <li>Låt eleverna förbereda svar skriftligt, eller använda stödanteckningar under samtalet.</li>
            <li>Fokusera på innehållet i resonemanget – inte språkflytet.</li>
            <li>Ge tid – det tar längre än man tror att skapa en trygg samtalskultur.</li>
          </ul>
          <p className="mt-3 font-medium">
            Det viktiga är inte att fånga fusket, utan att fånga förståelsen – på ett sätt som är likvärdigt för alla.
          </p>
        </ActionBox>

        <div className="my-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Alternativa och kompletterande format</h3>
          <p className="text-sm text-gray-700">
            I stället för en enskild muntlig "viva" kan man skapa varierade och inkluderande former av redovisning, som synliggör samma sak men på olika sätt:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Format</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Beskrivning</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Bedömningsfokus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kort video</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven spelar in en 2-minuters reflektion om hur AI använts och vad som lärts.</td>
                  <td className="border border-gray-300 px-3 py-2">Reflektion, förståelse, ansvar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Skriftlig minianalys</td>
                  <td className="border border-gray-300 px-3 py-2">Kort text där eleven jämför eget resonemang med AI:s svar.</td>
                  <td className="border border-gray-300 px-3 py-2">Resonemang, källkritik</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Dialog i par</td>
                  <td className="border border-gray-300 px-3 py-2">Elever intervjuar varandra om sina processer.</td>
                  <td className="border border-gray-300 px-3 py-2">Förklaringsförmåga, metakognition</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Muntligt försvar med visuellt stöd</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven visar texten på skärm och pekar ut förändringar, val, AI-förslag.</td>
                  <td className="border border-gray-300 px-3 py-2">Processmedvetenhet, valkompetens</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-700 mt-3 font-medium">
            Poängen är att låta eleven visa förståelse på sitt sätt, inte på ett enda sätt.
          </p>
        </div>

        <div className="my-6 p-5 rounded-xl bg-blue-50 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-3">Likvärdighet och tillgänglighet</h3>
          <p className="text-sm text-gray-700 mb-3">
            Likvärdighet i AI-bedömning handlar inte om att alla ska göra lika, utan att alla ska få lika möjlighet att visa sin förståelse.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            För det muntliga försvaret betyder det:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>att formatet ska vara anpassningsbart,</li>
            <li>att läraren bedömer innehållet, inte formen,</li>
            <li>och att elever får stöd i att förbereda sig.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            Det kan handla om att erbjuda strukturerade frågor i förväg, tydliga bedömningsaspekter och möjlighet till repetition eller komplettering i annan form.
          </p>
          <p className="text-sm text-gray-700 font-medium mt-2">
            Målet är att skapa tillit, inte testkultur.
          </p>
        </div>

        <p className="mt-6 font-medium">
          När elever får förklara sina val – varför de använde AI, vad de lärde sig, hur de gjorde om – sker något avgörande: de börjar internalisera bedömningens språk. De förstår vad som bedöms och varför, och lär sig sätta ord på sitt eget lärande.
        </p>
        <p className="mt-3">
          Det muntliga försvaret blir då inte ett slutprov, utan en pedagogisk handling i sig: en övning i ansvar, självkännedom och argumentation.
        </p>
        <p className="mt-3 font-medium text-center">
          AI förändrar skrivandet, men läraren har fortfarande det viktigaste verktyget: samtalet. Det är i dialogen – inte i kontrollen – att vi ser vem eleven faktiskt håller på att bli.
        </p>
      </>
    ),
  },
  {
    id: "ai-assessment-scale",
    number: "11",
    title: "AI Assessment Scale (Furze m.fl.)",
    summary: "En fyrgradig skala som hjälper lärare och elever att tala om nivåer av AI-stöd – från No AI till AI-led.",
    content: (
      <>
        <p>
          När AI blir en naturlig del av lärande och produktion behöver vi ett sätt att synliggöra nivåer av mänskligt och maskinellt bidrag.
        </p>
        <p>
          Det är inte längre meningsfullt att ställa frågan <em>"Har du använt AI?"</em> – utan snarare <strong>"Hur och i vilket syfte har du använt det?"</strong>
        </p>
        <p>
          För detta kan man inspireras av Leon Furze, Ben Gallagher och Darren Coxons modell <strong>AI Assessment Scale (2023)</strong>, som hjälper lärare att förstå och kategorisera olika typer av AI-stöd i elevuppgifter.
        </p>

        <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">Från förbud till partnerskap – fyra nivåer av AI-integrering</h3>
          <p className="text-sm text-gray-700 mb-3">
            Skalan består av fyra nivåer, som markerar olika relationer mellan elev och AI. Den kan användas både för planering, reflektion och bedömning.
          </p>
        </div>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Nivå</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Beskrivning</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Fokus för bedömning</th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Exempel på uppgift</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1. No AI</td>
                <td className="border border-gray-300 px-3 py-2">Eleven arbetar helt utan AI-stöd. Läraren vill se oberoende förståelse eller manuella färdigheter.</td>
                <td className="border border-gray-300 px-3 py-2">Faktakunskap, resonemang, struktur.</td>
                <td className="border border-gray-300 px-3 py-2">Skriftligt prov, muntlig redovisning, handskriven analys.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">2. AI-assisted</td>
                <td className="border border-gray-300 px-3 py-2">AI används som hjälpmedel under processen (idéer, språkstöd, struktur).</td>
                <td className="border border-gray-300 px-3 py-2">Förståelse av innehåll, omdöme i användningen.</td>
                <td className="border border-gray-300 px-3 py-2">Elever skriver utkast själva, får AI-respons och reviderar.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">3. AI-collaborative</td>
                <td className="border border-gray-300 px-3 py-2">AI används som aktiv partner i lärandet; eleven styr, prövar och reflekterar.</td>
                <td className="border border-gray-300 px-3 py-2">Kritisk användning, kreativ problemlösning, metareflektion.</td>
                <td className="border border-gray-300 px-3 py-2">"Designa en lösning med AI – motivera val och bedöm begränsningar."</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">4. AI-led (med mänsklig metareflektion)</td>
                <td className="border border-gray-300 px-3 py-2">AI producerar huvuddelen, eleven analyserar, omformar och diskuterar resultatet.</td>
                <td className="border border-gray-300 px-3 py-2">Analys, värdering, etiskt omdöme.</td>
                <td className="border border-gray-300 px-3 py-2">"Låt AI skapa ett förslag – analysera dess argument och skriv en kritisk kommentar."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-300">
          <p className="text-sm text-gray-700 font-medium">
            <strong>Viktigt:</strong> Skalan är inte hierarkisk. Det handlar inte om att "högre nivåer" är bättre, utan om vilken nivå som passar uppgiftens syfte. I vissa fall är No AI mest relevant (t.ex. för att mäta språklig grundförmåga), medan andra uppgifter vinner på ett AI-collaborative arbetssätt.
          </p>
        </div>

        <div className="my-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Hur skalan kan användas i undervisningen</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-blue-200 bg-blue-50/50">
              <p className="font-medium text-blue-900 mb-2">1. Som planeringsverktyg</p>
              <p className="text-sm text-gray-700 mb-2">
                När du designar en uppgift, bestäm vilken nivå som ska gälla och varför.
              </p>
              <p className="text-sm text-gray-600 italic">
                Exempel: "Syftet är att träna informationssökning och källkritik — därför: AI-collaborative."
              </p>
            </div>

            <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50">
              <p className="font-medium text-emerald-900 mb-2">2. Som synlighet för elever</p>
              <p className="text-sm text-gray-700">
                Skalan kan delas med eleverna som en del av uppgiftsbeskrivningen. De förstår då vilken typ av AI-beteende som förväntas och kan planera sitt arbete därefter.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-purple-200 bg-purple-50/50">
              <p className="font-medium text-purple-900 mb-2">3. Som reflektionsstöd</p>
              <p className="text-sm text-gray-700 mb-2">
                Efter avslutat arbete kan eleven reflektera:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside ml-2">
                <li>På vilken nivå har jag arbetat?</li>
                <li>Hur påverkade det min förståelse?</li>
                <li>Hur skulle jag kunna använda AI mer självständigt/kritiskt nästa gång?</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-amber-200 bg-amber-50/50">
              <p className="font-medium text-amber-900 mb-2">4. Som bedömningsstöd</p>
              <p className="text-sm text-gray-700">
                Läraren kan använda skalan för att förtydliga vilken typ av förmåga som bedöms — t.ex. produktionsförmåga på nivå 1–2, kritisk analys på nivå 3–4.
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Exempel: samma uppgift – fyra nivåer">
          <p className="text-sm font-medium mb-3">Uppgift: Skriv en essä om hur AI påverkar framtidens arbetsmarknad.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Nivå</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Genomförande</th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Bedömningsfokus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">No AI</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven skriver texten själv, utan AI.</td>
                  <td className="border border-gray-300 px-3 py-2">Förståelse, struktur, språk.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">AI-assisted</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven använder AI för att skapa disposition och få språkstöd.</td>
                  <td className="border border-gray-300 px-3 py-2">Omdöme, reflektion kring stödets roll.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">AI-collaborative</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven diskuterar med AI under arbetet, testar idéer och jämför perspektiv.</td>
                  <td className="border border-gray-300 px-3 py-2">Kritisk analys, begreppsanvändning, resonemang.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">AI-led</td>
                  <td className="border border-gray-300 px-3 py-2">Eleven låter AI skriva en första version och analyserar den kritiskt, med förbättringsförslag.</td>
                  <td className="border border-gray-300 px-3 py-2">Metareflektion, etiskt tänkande, källkritik.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3 italic">
            Det blir tydligt att syftet avgör formen – inte tvärtom.
          </p>
        </ExampleBox>

        <ActionBox>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Inför skalan i kollegiet.</strong> Låt lärare markera uppgifter i sina kurser på skalan och diskutera balansen.</li>
            <li><strong>Variera över terminen.</strong> Använd alla nivåer: ibland ska elever skapa utan stöd, ibland med – men alltid med reflektion.</li>
            <li><strong>Knyt till processlogg och överenskommelse.</strong> Eleverna kan beskriva vilken nivå de arbetat på och varför.</li>
            <li><strong>Koppla till bedömningsmatris.</strong> Lägg till en rad: "Elevens förhållningssätt till AI (reflektion, transparens, ansvar)".</li>
          </ul>
        </ActionBox>

        <p className="mt-6 font-medium">
          AI Assessment Scale tydliggör att ansvarsfull AI-användning inte handlar om ja eller nej, utan om hur medvetet och i vilket syfte AI används.
        </p>
        <p className="mt-3">
          Den ger språk för något som annars riskerar att bli abstrakt eller laddat. Genom att använda skalan blir både lärare och elever bedömningsmedskapare – de kan diskutera teknik, etik och lärande på ett konkret sätt.
        </p>
      </>
    ),
  },
  {
    id: "likvardighet",
    number: "12",
    title: "Likvärdighet, etik och juridik",
    summary: "AI-bedömning måste vila på en grund av rättvisa, etik och juridisk trygghet. Tillgång, transparens och dataskydd är centrala.",
    content: (
      <>
        <p>
          När AI blir en del av skolans vardag ställs grundläggande frågor om rättvisa, ansvar och integritet på sin spets.
        </p>
        <p>
          Vem har egentligen tillgång till vad? Hur påverkas elevers möjligheter att visa sina kunskaper när tekniken inte är jämlikt fördelad? Och var går gränsen mellan pedagogiskt stöd och otillbörlig påverkan?
        </p>
        <p className="font-medium">
          AI i bedömning är inte bara en didaktisk fråga — det är också en etisk och juridisk sådan.
        </p>

        <div className="my-6 space-y-6">
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">⚖️</span>
              Likvärdighet – när tillgången formar möjligheten
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI kan både öka och minska likvärdigheten. Rätt använt kan det sänka trösklar för elever med språkliga, kognitiva eller motoriska svårigheter — ge språkstöd, struktur och tillgänglighet.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Men om verktyg används utan plan för jämlik tillgång, riskerar skolan att förstärka den digitala klyftan.
            </p>
            <ExampleBox>
              <p className="text-sm mb-2">
                En elev har snabb dator och tillgång till avancerade språkmodeller hemma. En annan har bara skolans konton och begränsad inloggning.
              </p>
              <p className="text-sm font-medium">
                Båda bedöms på samma text — men förutsättningarna är olika.
              </p>
            </ExampleBox>
            <p className="text-sm text-gray-700 mt-3">
              Likvärdighet kräver därför att skolan definierar vilka verktyg som ska användas i undervisningen och bedömningen, och på vilka villkor.
            </p>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Kartlägg vilka AI-verktyg eleverna faktiskt har tillgång till.</li>
                <li>Använd skolgemensamma konton (ex. genom kommunens licenser) för att skapa likvärdighet.</li>
                <li>Erbjud alternativ när verktyg inte kan användas av tekniska, språkliga eller etiska skäl.</li>
                <li>Diskutera i arbetslaget: Är det rimligt att denna uppgift tillåter eller kräver AI-stöd?</li>
              </ul>
            </div>
            <p className="text-sm text-gray-700 mt-3 font-medium">
              Likvärdighet handlar inte om att alla gör likadant, utan om att alla har lika chans att visa sin förståelse.
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-purple-600">🧭</span>
              Etiska dimensioner – transparens, ansvar och autonomi
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              AI väcker också etiska dilemman som kräver att lärare, elever och skolledning reflekterar tillsammans.
            </p>
            <p className="text-sm text-gray-700 mb-3 font-medium">
              Tre centrala principer kan fungera som etisk kompass:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="font-medium text-purple-900 mb-1">1. Transparens</p>
                <p className="text-sm text-gray-700">Det ska vara tydligt hur AI använts i lärande och bedömning.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="font-medium text-purple-900 mb-1">2. Ansvar</p>
                <p className="text-sm text-gray-700">Eleven ska kunna förklara och stå för sitt arbete, även när AI varit delaktigt.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="font-medium text-purple-900 mb-1">3. Autonomi</p>
                <p className="text-sm text-gray-700">Tekniken ska stödja elevens lärande, inte styra det.</p>
              </div>
            </div>
            <ExampleBox>
              <p className="text-sm mb-2">
                En elev som låter AI skriva hela texten utan att förstå innehållet bryter mot principen om autonomi.
              </p>
              <p className="text-sm">
                Men en elev som använder AI för att strukturera sina tankar och sedan reflekterar över processen ökar sin självständighet.
              </p>
            </ExampleBox>
            <div className="mt-3 text-sm text-gray-700">
              <p className="font-medium mb-2">Så kan du göra:</p>
              <ul className="space-y-1 list-disc list-inside ml-2">
                <li>Låt elever skriva en kort "AI-reflektion" till varje större uppgift.</li>
                <li>Bedöm ansvarsfullt förhållningssätt, inte bara resultat.</li>
                <li>Diskutera i klassrummet: Vad betyder det att vara upphovsperson i en tid av AI?</li>
              </ul>
            </div>
            <p className="text-sm text-gray-700 mt-3 font-medium">
              Etiken blir här inte ett tillägg till undervisningen — utan en del av själva bedömningspraktiken.
            </p>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-red-600">⚠️</span>
              Juridiska ramar – GDPR, upphovsrätt och AI-förordningen
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Som med all digital teknik måste skolans användning av AI ske inom lagens ramar. Tre områden är särskilt relevanta:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-red-300">
                <p className="font-medium text-red-900 mb-2">1. Personuppgifter och GDPR</p>
                <p className="text-sm text-gray-700 mb-2">
                  De flesta generativa AI-tjänster är inte utformade för skolbruk. Om elever matar in text som innehåller personuppgifter (t.ex. namn, bedömningar, individuella planer) kan det innebära ett brott mot dataskyddsförordningen (GDPR).
                </p>
                <div className="mt-2 text-sm text-gray-700">
                  <p className="font-medium mb-1">Så kan du göra:</p>
                  <ul className="space-y-1 list-disc list-inside ml-2">
                    <li>Undvik att låta elever skriva in personuppgifter i externa AI-tjänster.</li>
                    <li>Använd AI-tjänster som är godkända av huvudmannen eller som hanteras via skolans system.</li>
                    <li>Informera eleverna om dataskydd och låt dem förstå vad som händer med deras data.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-red-300">
                <p className="font-medium text-red-900 mb-2">2. Upphovsrätt och immaterialrätt</p>
                <p className="text-sm text-gray-700 mb-2">
                  Vem äger en text som AI har genererat? Och vad händer om eleven använder AI-genererat material utan att ange det?
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  Juridiken här är fortfarande under utveckling, men grundprincipen är tydlig: <strong>Eleven måste kunna stå för sitt arbete och redovisa vad som är eget och vad som är AI-stött.</strong>
                </p>
                <div className="mt-2 text-sm text-gray-700">
                  <p className="font-medium mb-1">Så kan du göra:</p>
                  <ul className="space-y-1 list-disc list-inside ml-2">
                    <li>Inkludera transparenskrav i uppgiftsbeskrivningen: "Ange hur AI har använts."</li>
                    <li>Diskutera upphovsrätt och källhänvisning i en AI-kontext.</li>
                    <li>Behandla AI-genererat material som vilket verktyg som helst – det ska redovisas, men inte nödvändigtvis förbjudas.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-red-300">
                <p className="font-medium text-red-900 mb-2">3. EU:s AI-förordning</p>
                <p className="text-sm text-gray-700 mb-2">
                  EU har antagit en AI-förordning som klassificerar AI-system i risknivåer. Utbildning räknas som en högriskmiljö, vilket innebär ökade krav på transparens, ansvar och säkerhet.
                </p>
                <p className="text-sm text-gray-700">
                  Även om förordningen ännu inte är fullt implementerad, är det klokt att redan nu förhålla sig till dess principer: <strong>transparens, användarinformation och mänsklig överblick.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-300">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">Ett gemensamt ansvar</h3>
          <p className="text-sm text-gray-700 mb-3">
            Likvärdighet, etik och juridik är inte isolerade frågor – de är sammanvävda. En rättssäker bedömningspraktik i AI-tider kräver:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Likvärdighet</p>
              <p className="text-gray-600">genom att säkerställa att alla har tillgång och möjlighet</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Etik</p>
              <p className="text-gray-600">genom transparens, ansvar och autonomi</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900 mb-1">Juridik</p>
              <p className="text-gray-600">genom att följa GDPR, upphovsrätt och AI-förordningen</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-4 font-medium text-center">
            Det är ett gemensamt ansvar som kräver samtal, kompetens och kontinuerlig reflektion – inte bara regler och förbud.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "rubriker",
    number: "13",
    title: "Rubriker och kriterier för AI-stött arbete",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Rubriker och kriterier för AI-stött arbete" />,
  },
  {
    id: "debattartikel",
    number: "14",
    title: "Exempelupplägg: Debattartikel med AI-stöd",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Exempelupplägg: Debattartikel med AI-stöd" />,
  },
  {
    id: "formativ-ai",
    number: "15",
    title: "Bedömning för lärande med AI",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Bedömning för lärande med AI" />,
  },
];

export default function SubjectBedomningPage() {
  const params = useParams();
  const subject = params.subject as string;

  if (subject !== "svenska") {
    notFound();
  }

  // Create TOC headings from sections
  const tocHeadings: TOCHeading[] = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        text: section.title,
        level: 2,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/svenska.webp)" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/90 via-cyan-900/70 to-sky-800/40" />
        <div className="absolute inset-0 z-0 bg-pattern opacity-15" />

        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-4xl drop-shadow-[0_10px_35px_rgba(3,7,18,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              SVENSKA · BEDÖMNING
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bedömning i AI-tider
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Layouten är klar – fyll på sektionerna nedan med dina texter, matriser och exempel när du är redo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Fokus på validitet och process
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                <CheckCircle2 className="h-4 w-4" />
                Matrisstöd och exempel
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="-mt-20 pb-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-7xl gap-8">
            <div className="flex-1 max-w-4xl space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                    {section.number}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-2 text-base text-gray-600">{section.summary}</p>
                  <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">{section.content}</div>
                </section>
              ))}

              <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-10 text-white shadow-2xl shadow-cyan-200/50">
                <h2 className="text-3xl font-bold">Fortsätt bygga hubben</h2>
                <p className="mt-3 text-white/90">
                  Har du egna matriser eller exempel att lägga till? Hör av dig till redaktionen så fylls sidan på.
                </p>
                <Link
                  href="mailto:hello@ai-litt.se"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:-translate-y-0.5"
                >
                  Tipsa redaktionen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="hidden lg:block w-80 flex-shrink-0">
              <TableOfContents headings={tocHeadings} />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
