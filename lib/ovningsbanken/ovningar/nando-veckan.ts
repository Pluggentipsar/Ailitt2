// Övningsbanken — Nando-veckan.
// Eleverna väljer själva AI-styrka per hemuppgift under en vecka enligt
// Nando-menyn (extra mild → extra het) och loggar nivå + EN mening varför.
// Uppföljning i par: när valde du för svagt? För starkt? Självreglering som
// vana, inte regel.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "nando-veckan",
  titel: "Nando-veckan",
  blurb:
    "En vecka där eleverna själva väljer hur het AI-hjälpen ska vara för varje hemuppgift — från extra mild (AI sammanfattar) till extra het (AI som kritisk expert) — och loggar varför.",
  syfte:
    "Självreglering blir aldrig en vana av att läraren bestämmer AI-reglerna åt eleverna. Nando-veckan flyttar valet dit det hör hemma: eleven väljer AI-styrka per hemuppgift, som styrkan på en meny — och skriver EN mening om varför. Efter en vecka har varje elev ett eget litet datamaterial över sina val, och det är där det riktiga samtalet kan börja: när valde jag för svagt av bekvämlighet? När valde jag för starkt av ambition? Målet är en elev som väljer medvetet — inte en som följer regler.",

  domaner: ["styra"],
  aiLiteracyIds: [2],

  tid: "5 min intro + en vecka",
  tidMinuter: 5,
  arskurser: "Åk 7–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Nando-menyn synlig hela veckan (affisch eller pinnad i Teams/Vklass) + en enkel logg per elev: papper, dokument eller anteckning i mobilen.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska köra Nando-veckan på dig själv innan eleverna får den — i miniformat över två-tre dagar. Välj AI-styrka för varje arbetsuppgift och logga en mening om varför. Du kommer märka två saker: hur ofta bekvämligheten väljer nivå åt dig, och hur annorlunda AI:n känns på extra het — när den utmanar i stället för att servera. Den erfarenheten gör dig trovärdig när du introducerar menyn.",
    },
    { type: "h", text: "Nando-menyn" },
    {
      type: "list",
      items: [
        "EXTRA MILD — AI:n sammanfattar, du läser. Minst egen hetta: AI:n gör tankejobbet.",
        "MILD — du förklarar först med egna ord, sen jämför AI:n din förklaring med sin.",
        "HET — du lägger fram dina idéer, AI:n utmanar dem.",
        "EXTRA HET — AI:n agerar kritisk expert och ger allt den har. Du värderar vad som håller.",
      ],
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj tre riktiga arbetsuppgifter",
          body: "T.ex. planera en lektion, skriva veckobrevet, formulera återkoppling på elevtexter. Riktiga uppgifter — inte påhittade testfall.",
        },
        {
          title: "Välj nivå INNAN du öppnar AI:n",
          body: "Bestäm styrka per uppgift och skriv en mening om varför: ”Veckobrevet: extra mild, för det är rutintext och min energi behövs annorstädes.” Ordningen spelar roll — väljer du efter att du sett AI:ns svar har bekvämligheten redan valt åt dig.",
        },
        {
          title: "Kör uppgiften på vald nivå",
          body: "På het/extra het måste du be om det uttryckligen: ”Här är min lektionsplan. Hitta de tre svagaste punkterna och argumentera emot mig.” AI:n defaultar till att vara medgörlig — hettan måste beställas.",
        },
        {
          title: "Läs din egen logg efteråt",
          body: "Valde du någon gång för milt av ren bekvämlighet? För hett av princip? Det är exakt det samtalet eleverna ska ha i par — och nu har du egna exempel att dela.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Extra het är en annan upplevelse",
      body: "Testa minst en uppgift på extra het innan du dömer menyn. När AI:n slutar hålla med och börjar argumentera emot händer något med hur du läser svaren — du går från mottagare till domare. Det är den förflyttningen hela övningen jagar.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Gör menyn synlig hela veckan — affisch i klassrummet eller pinnad överst i Teams/Vklass. Ur sikte = ur bruk.",
        "Bestäm loggformatet: tre kolumner räcker (uppgift · nivå · en mening varför). Papper, delat dokument eller mobilanteckning — det eleverna faktiskt har med sig.",
        "Välj en vecka med minst tre hemuppgifter av olika karaktär, gärna från olika ämnen. En enda uppgiftstyp ger inga intressanta val.",
        "Kör menyn själv först (se Prova själv) så du har egna exempel på för milt och för hett.",
        "Klargör spelregeln från start: alla nivåer är tillåtna hela veckan. Det finns ingen hemlig facit-nivå som ger pluspoäng.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Introducera menyn",
          body: "Visa de fyra nivåerna med ETT konkret exempel på samma uppgift — t.ex. ”plugga inför NO-provet” på extra mild (AI sammanfattar kapitlet) kontra extra het (AI förhör och attackerar dina förklaringar, du avgör vad som stämmer). Regeln: välj nivå FÖRE du öppnar AI:n, logga nivå + EN mening varför, testa minst två olika nivåer under veckan.",
          time: "5 min",
        },
        {
          title: "Under veckan",
          body: "Eleverna väljer nivå per hemuppgift och loggar. Ingen lektionstid krävs — men en påminnelse mitt i veckan gör stor skillnad för loggdisciplinen. Kolla inte loggarna under veckan; vetskapen om att någon läser förvandlar ärliga rader till taktiska.",
          time: "0 min lektionstid",
        },
        {
          title: "Uppföljning i par",
          body: "Veckan efter: par jämför loggar med två frågor på tavlan — När valde du en för svag nivå, och vad missade du då? När valde du för starkt, och blev AI:n ett hinder? Paren väljer varsitt bästa exempel att dela.",
          time: "10 min",
        },
        {
          title: "Kort helklass",
          body: "Samla mönstren: vilken nivå väljer vi av vana? Landa poängen: rätt nivå finns inte — men medvetet val gör det. Bestäm gärna att menyn hänger kvar och används frivilligt framåt.",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Din viktigaste insats är att INTE göra menyn till regelverk. I samma stund du säger ”på matteläxan gäller mild” har du tagit tillbaka valet — och då tränar eleverna lydnad, inte självreglering. Låt valen vara fria, även när någon kör extra mild fem dagar i rad. Det valet är inte ett misslyckande, det är ett samtalsunderlag: ”du valde extra mild hela veckan — vad hade hänt på het?”",
    },
    {
      type: "callout",
      tone: "note",
      title: "Därför funkar hettan — forskningen bakom",
      body: "En stor CHI-studie 2025 (Lee m.fl., Microsoft Research) visade mönstret: ju mer användare litar på AI:n, desto mindre kritiskt granskar de — men ju mer de litar på sitt EGET omdöme, desto mer kritiskt tänker de. Nando-menyn tränar just självtilliten: på het och extra het är elevens omdöme slutinstans. AI:n får ge allt den har — eleven avgör vad som håller.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Loggen är samtalsunderlag, inte betygsunderlag",
      body: "Säg det högt redan vid introduktionen — annars får du en vecka av taktiska loggar skrivna för att imponera. En ärlig rad (”extra mild, för jag orkade inte”) är värd mer än fem tillrättalagda.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Den här veckan bestämmer du själv hur mycket AI-hjälp varje hemuppgift tål. Inte läraren — du. Du väljer styrka från Nando-menyn, precis som på en restaurang: från extra mild till extra het. Det enda kravet är att du vet varför du valde som du gjorde.",
    },
    { type: "h", text: "Nando-menyn" },
    {
      type: "list",
      items: [
        "EXTRA MILD — AI:n sammanfattar, du läser.",
        "MILD — du förklarar först med egna ord, sen jämför AI:n sin förklaring med din.",
        "HET — du visar dina idéer, AI:n utmanar dem.",
        "EXTRA HET — AI:n är kritisk expert och ger allt den har. Du avgör själv vad som håller.",
      ],
    },
    { type: "h", text: "Så gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ny hemuppgift? Välj nivå INNAN du öppnar AI:n.",
        "Skriv i loggen: uppgiften, nivån och EN mening om varför du valde den.",
        "Kör uppgiften på den nivån. På het/extra het måste du säga till AI:n vad den ska göra, t.ex: ”Utmana mina idéer — hitta svagheterna” eller ”Var en kritisk expert. Jag avgör själv vad jag håller med om.”",
        "Testa minst två olika nivåer under veckan.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det finns ingen nivå som är ”rätt”",
      body: "En trött torsdag kan extra mild vara ett helt rimligt val. Poängen är inte att alltid välja hetast — poängen är att du VET varför du valde. En ärlig mening (”extra mild, jag orkade inte mer i dag”) är ett bättre loggkort än en fin efterhandskonstruktion.",
    },
    { type: "h", text: "Det här tar du med" },
    {
      type: "p",
      text: "Din logg med minst tre uppgifter — nivå och en mening varför per uppgift. Loggen är det du visar upp och pratar utifrån i parsamtalet efter veckan: när valde du för svagt? När valde du för starkt?",
    },
  ],

  diskussion: [
    "När valde du en svagare nivå än uppgiften egentligen tålde — och vad missade du då?",
    "När valde du för starkt — blev AI:ns motstånd ett hinder i stället för en hjälp?",
    "Vilken nivå väljer du av ren vana? Vad säger det om dig?",
    "Hade du valt annorlunda om ingen skulle se loggen? Vad betyder det?",
  ],

  fallgropar: [
    "Hela klassen kör extra mild hela veckan — bekvämligheten vinner alltid om det är fritt fram. Minimikravet ”minst två olika nivåer under veckan” räddar övningen.",
    "Loggen fylls i som pliktuppgift i efterhand, med påhittade rader. Håll kravet till EN mening per uppgift och säg tydligt att ärligt slår fint — loggen betygsätts inte.",
    "Menyn förvandlas till regelverk (”på provplugg gäller mild”) — då dör självregleringen på sekunden. Valet måste ligga hos eleven, annars tränar övningen fel muskel.",
  ],

  evidens: [
    {
      ref: "lee-2025",
      relevance:
        "Studiens kärnfynd bär hela övningen: hög tillit till AI:n minskar kritiskt tänkande, medan hög tillit till det egna omdömet ökar det. Menyns hetare nivåer tränar systematiskt elevens självtillit — AI:n levererar, eleven dömer.",
    },
    {
      ref: "zimmerman-2002",
      relevance:
        "Zimmermans modell för självreglerat lärande — planera, genomföra, utvärdera — är exakt loggens cykel: välj nivå före, kör uppgiften, motivera och följ upp i par. Övningen gör självregleringscykeln konkret och synlig per uppgift.",
    },
  ],

  variationer: [
    "Kortversion: kör menyn på en enda uppgift under en lektion — halva klassen tar mild, andra halvan het, jämför upplevelserna direkt. Bra som smakprov innan hela veckan.",
    "Gymnasiet: lägg till en fjärde kolumn i loggen — ”vad AI:n missade” — en observation per uppgift. Skärper granskningen på alla nivåer och ger uppföljningssamtalet mer kött.",
  ],

  kedjarMed: ["fyra-grepp", "ai-eller-inte-sorteringen"],

  kalla: "banken",
};
