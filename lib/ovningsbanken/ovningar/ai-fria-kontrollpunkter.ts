// Övningsbanken — AI-fria kontrollpunkter (Styra AI)
// Eleverna designar SJÄLVA var i nästa uppgift AI inte får in — och varför
// just där. Vänd maktordning: eleven äger gränsdragningen, läraren kvitterar.
// Självreglering i stället för förbud.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "ai-fria-kontrollpunkter",
  titel: "AI-fria kontrollpunkter",
  blurb:
    "Eleverna ritar själva sina AI-fria zoner i nästa uppgift: vilket steg måste vara mitt för att jag ska kunna stå för resultatet?",
  syfte:
    "De flesta AI-regler i skolan är lärarens: ”här får ni inte använda AI”. Den här övningen vänder på maktordningen — eleverna designar SJÄLVA var i en kommande uppgift AI:n inte får in, utifrån en enda fråga: vilket steg måste vara mitt för att jag ska kunna stå för resultatet — och klara följdfrågor utan stöd? Skillnaden mot lärarsatta AI-fria moment är hela poängen: självreglering i stället för förbud. Och skillnaden mot Uppgiftsdekompositionen: där diskuterar ni AI-beslut steg för steg tillsammans — här sätter varje elev sina egna kontrollpunkter, kopplar dem till ett sätt att visa kunskapen, och läraren kvitterar.",

  domaner: ["styra"],
  aiLiteracyIds: [2, 4],

  tid: "30 min + återkommande",
  tidMinuter: 30,
  arskurser: "Åk 7–gymnasiet",
  digitalaVerktyg: false,
  material:
    "En verklig kommande uppgift (inte påhittad), kontrollpunktskort per elev — papperslapp eller mall med tre rader: Mitt steg · Därför · Så visar jag det. Inga skärmar.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska sätta en AI-fri kontrollpunkt i något du själv ska göra i veckan — en planering, ett föräldramejl, en presentation. Frågan är densamma som eleverna får: vilket steg måste vara mitt för att jag ska kunna stå för resultatet? Du behöver ha känt hur frågan biter innan du ställer den till en klass — och du kommer märka något oväntat: kontrollpunkten förändrar hur du använder AI i alla ANDRA steg också.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj något verkligt",
          body: "Ta en arbetsuppgift du faktiskt ska göra i veckan där AI skulle kunna hjälpa till: en lektionsplanering, ett känsligt mejl, ett underlag till arbetslaget.",
        },
        {
          title: "Bryt den i steg — snabbt",
          body: "Fyra, fem steg räcker. För ett mejl: förstå situationen → bestämma budskapet → skriva → tona → skicka. Det behöver inte vara snyggt, bara synligt.",
        },
        {
          title: "Ställ frågan",
          body: "Vilket steg måste vara mitt för att jag ska kunna stå för resultatet — och svara på följdfrågor utan att titta i något? För mejlet är det sällan skrivandet. Det är oftast att bestämma budskapet.",
        },
        {
          title: "Sätt EN kontrollpunkt och en bevisform",
          body: "Testet: skulle du klara att förklara just det steget för en kollega, muntligt, utan stöd? Om ja — det är din punkt. Om nej — då har du hittat något intressant om din egen AI-användning.",
        },
        {
          title: "Genomför under veckan",
          body: "Använd AI fritt i de andra stegen — men vid kontrollpunkten är det bara du. Lägg märke till vad som händer: de flesta blir mer aktiva i HELA processen när de vet att en punkt är deras.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lägga märke till",
      body: "Det intressanta är inte vilken punkt du väljer — det är motiveringen. ”För att läraren säger det” finns inte som skäl när du själv är läraren. Kvar blir bara det riktiga skälet: det här vill jag kunna på riktigt. Exakt den förflyttningen är övningens mål för eleverna.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Välj en verklig kommande uppgift som eleverna ska göra — övningen dör med en påhittad. Bäst effekt: kör den samma vecka som uppgiften delas ut.",
        "Förbered kontrollpunktskortet: tre rader — Mitt steg · Därför · Så visar jag det. Papperslapp funkar utmärkt; poängen är att det är litet nog att bli konkret.",
        "Bestäm menyn av bevisformer och skriv den på tavlan: muntligt miniförsvar 90 sekunder, snabbskiss utan stöd, förklara för en kompis som antecknar. Eleverna väljer form — men formen ska gå att genomföra på riktigt.",
        "Planera in uppföljningen NU: när uppgiften lämnas in ska bevisformerna genomföras. Utan det datumet i kalendern blir korten symboliska.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Vänd maktordningen — högt",
          body: "Säg det rakt ut: ”Jag tänker inte bestämma var ni inte får använda AI i den här uppgiften. Det gör ni.” Skriv frågan på tavlan: Vilket steg måste vara MITT för att jag ska kunna stå för resultatet — och klara följdfrågor utan stöd? Låt den stå kvar hela lektionen.",
          time: "5 min",
        },
        {
          title: "Bryt uppgiften i steg",
          body: "Gemensamt eller gruppvis: dela den kommande uppgiften i 4–6 steg. Har klassen gjort Uppgiftsdekompositionen känner de igen momentet — då går det på tre minuter.",
          time: "5 min",
        },
        {
          title: "Välj kontrollpunkter",
          body: "Varje elev (eller grupp) väljer 1–2 steg som sina AI-fria kontrollpunkter och fyller i kortet: vilket steg, varför just det, och vilken bevisform. Gå runt och lyssna på motiveringarna — de säger mer om elevens syn på sitt lärande än de flesta prov.",
          time: "10 min",
        },
        {
          title: "Kvittera",
          body: "Du går runt och kvitterar korten — men kvittera på riktigt: utmana minst en gång per elev. ”Varför just det steget? Skulle du klara följdfrågor där utan stöd? Vad händer om jag frågar X?” Godkänt kort = kontrakt mellan er.",
          time: "7 min",
        },
        {
          title: "Utcheckning",
          body: "Runda: varje elev säger sitt steg och sitt varför i en mening. Påminn om att bevisformen genomförs vid inlämning — och att AI-användning i de ANDRA stegen är tillåten enligt det ni kommit överens om.",
          time: "3 min",
        },
        {
          title: "Återkommande: uppföljningen",
          body: "Vid inlämning genomförs bevisformerna — 90-sekundersförsvar, snabbskisser, förklara-för-en-kompis. Det tar en kvart för en helklass om du kör stationer eller parvis. Detta moment är inte valbart: det är här kontraktet blir verkligt.",
          time: "15 min vid inlämning",
        },
      ],
    },
    { type: "h", text: "Bedömning och efterarbete" },
    {
      type: "p",
      text: "Kontrollpunkterna blir ett formativt fönster: ett 90-sekundersförsvar visar snabbare än inlämningen var kunskapen faktiskt sitter. Viktig kalibrering: en elev som klarar sin kontrollpunkt galant kan ha använt AI hur mycket som helst i övriga steg — det är designen, inte ett kryphål. En elev som INTE klarar sin punkt har fått syn på exakt var lärandet läckte, och sätter punkten klokare nästa gång. Spara korten över terminen: raden ”Därför” blir en karta över hur elevens syn på sitt eget lärande utvecklas — och ett konkret underlag i utvecklingssamtal.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Kvittera på riktigt — annars blir det ett formulär",
      body: "Om du vinkar igenom alla kort blir övningen en pappersprodukt. Kvitteringen är ditt moment: utmana det lättaste steget (”disposition — är det verkligen där uppgiftens poäng bor?”), testa med en följdfråga på plats. Eleverna märker direkt om kontraktet är på låtsas.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "I nästa uppgift bestämmer du själv var AI inte får hjälpa dig. Inte läraren — du. Men det följer med två saker: du måste kunna motivera ditt val, och du ska kunna bevisa din kunskap där du satte gränsen.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ni bryter ner den kommande uppgiften i steg tillsammans.",
        "Ställ dig frågan: vilket steg måste vara MITT för att jag ska kunna stå för resultatet — och klara följdfrågor utan att be om hjälp?",
        "Välj 1–2 steg som dina AI-fria kontrollpunkter.",
        "Fyll i kortet: vilket steg · varför just det · hur du visar din kunskap där (90 sekunder muntligt, snabbskiss utan stöd, eller förklara för en kompis som antecknar).",
        "Visa kortet för läraren, som kvitterar. Nu är det ett kontrakt.",
        "Gör uppgiften. I de andra stegen använder du AI som ni kommit överens om — men vid dina kontrollpunkter är det bara du.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Välj inte det lättaste steget",
      body: "En kontrollpunkt du klarar i sömnen bevisar ingenting — varken för läraren eller för dig. Välj steget där uppgiftens poäng bor: det du skulle vilja kunna på riktigt, det du vill kunna svara på frågor om utan att bläddra. Det är också det valet som imponerar vid kvitteringen.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "När uppgiften lämnas in genomför du din bevisform vid varje kontrollpunkt — försvaret, skissen eller förklaringen. Lämna också in ditt kort med en rad tillagd: höll din gräns? Om inte — vad hände, och var sätter du punkten nästa gång?",
    },
  ],

  diskussion: [
    "Vilka steg valde flest som kontrollpunkter — och varför just de? Valde någon ett steg ingen annan tänkt på?",
    "Är det skillnad på en regel du satt själv och en regel någon annan satt åt dig? Håller du dem olika hårt?",
    "Kan man använda AI i ALLA steg och ändå stå för resultatet? Var går gränsen — och vem borde få dra den?",
    "Vad hände med din AI-användning i de andra stegen när du visste att kontrollpunkten väntade?",
  ],

  fallgropar: [
    "Eleverna väljer det lättaste steget som kontrollpunkt. Kvitteringen är motdraget: utmana med följdfrågor innan du godkänner — ”är det där uppgiftens poäng bor?” — och skicka tillbaka kort som väljer bekvämlighet.",
    "Bevisformen genomförs aldrig vid inlämning — då var hela övningen symbolisk och eleverna vet det till nästa gång. Boka in uppföljningen i kalendern i samma stund som du kvitterar korten.",
    "Övningen blir en förhandling om hur LITE man kan slippa undan med i stället för ägarskap. Styr tillbaka till frågan på tavlan: det handlar inte om vad du slipper — det handlar om vad du vill kunna stå för.",
  ],

  evidens: [
    {
      ref: "zimmerman-2002",
      relevance:
        "Kontrollpunkterna följer Zimmermans tre faser för självreglerat lärande — eleven planerar var gränsen går, genomför med gränsen aktiv och självutvärderar vid uppföljningen. Det är den självregleringen, inte förbudet, som är övningens träningsmål.",
    },
    {
      ref: "kapur-2016",
      relevance:
        "Forskningen om produktiv kamp visar att lärandet bor i den egna ansträngningen — stöd ska sänka tröskeln in i arbetet, inte ta över momentet där lärandet sker. Kontrollpunkten är elevens eget sätt att skydda exakt det momentet.",
    },
  ],

  variationer: [
    "Första gången eller yngre elever: kör en gemensam klass-kontrollpunkt — klassen väljer ETT steg ihop, alla gör samma miniförsvar. Individuella kort från och med nästa uppgift, när formen sitter.",
    "Gymnasiet: koppla till kursmål och betygssamtal — låt eleven formulera kontrollpunkten som del av sin egen målbild (”det här ska jag kunna utan stöd i slutet av kursen”) och följ samma punkt över flera uppgifter. Korten blir en självvald progressionslinje.",
  ],

  kedjarMed: ["uppgiftsdekompositionen", "nando-veckan"],

  kalla: "banken",
};
