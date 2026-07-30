// Övningsbanken — Prompt-stafetten.
// Tre led förbättrar samma prompt: kortast möjliga → kontext → roll/format/
// begränsningar. Alla tre körs mot AI:n och jämförs sida vid sida. Landar i
// kontextprincipen: AI:n vaknar nollställd — den vet bara det du berättar.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "prompt-stafetten",
  titel: "Prompt-stafetten",
  blurb:
    "Tre elever, samma prompt, tre led: latast möjliga, en med kontext, en med roll och format. Kör alla tre — och se vad som faktiskt gjorde skillnad.",
  syfte:
    "De flesta elever (och lärare) skriver prompter som sms till en kompis — och blir besvikna på svaret. Stafetten gör förbättringen synlig i tre tydliga led, så att klassen kan SE exakt vilken del av prompten som gjorde jobbet. Övningen landar i kontextprincipen: AI:n vaknar nollställd i varje ny chatt — den vet ingenting om dig, ditt mål eller din mottagare förrän du berättar det.",

  domaner: ["skapa"],
  aiLiteracyIds: [2],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Skolans AI-verktyg. Eleverna behöver kunna öppna en ny chatt per prompt — det är en del av poängen.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska spela alla tre stafettleden själv: skriva den lataste möjliga prompten, sedan samma uppdrag med kontext, sedan med roll, format och begränsningar. När du lägger de tre svaren sida vid sida ser du med egna ögon vad som gör skillnad — och du får ett konkret exempelmaterial att visa klassen. Tio minuter, tre chattar.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj ett ämne du ändå ska undervisa om",
          body: "Ta något ur din egen planering — vikingarna, fotosyntesen, franska revolutionen. Då blir testet på riktigt och du kan återanvända resultatet.",
        },
        {
          title: "Led 1 — skriv den lataste prompten",
          body: "Max en mening, ingen kontext: ”skriv om vikingarna”. Kör den i en chatt och spara svaret.",
        },
        {
          title: "Led 2 — lägg till kontext i en NY chatt",
          body: "Vem är du, vad är målet, vem är mottagaren? T.ex: ”Jag är lärare i åk 8 och ska starta ett arbetsområde om vikingatiden. Skriv en introtext som ska läsas av elever som inte kan något om ämnet ännu. Målet är att väcka nyfikenhet.”",
        },
        {
          title: "Led 3 — lägg till roll, format och begränsningar i en tredje chatt",
          body: "Bygg vidare på led 2 och lägg till: en roll för AI:n, ett tydligt format och minst en begränsning. T.ex: ”Agera som en historielärare som är bra på att fånga tonåringar. Formatet: en rubrik, tre korta stycken och en cliffhanger-fråga på slutet. Max 200 ord, inga årtalslistor.”",
        },
        {
          title: "Lägg svaren sida vid sida",
          body: "Jämför träffsäkerhet, ton och användbarhet. Vad förändrades mellan led 1 och 2? Mellan 2 och 3? Oftast är det kontexten (led 2) som lyfter innehållet — och led 3 som lyfter formen.",
        },
        {
          title: "Testa myten",
          body: "Kör led 2-prompten en gång till, men klistra på en tjusig roll: ”Du är världens främsta historiker.” Blev innehållet bättre — eller bara tonen mer självsäker? Det här är din myt-punktering till klassen.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Ny chatt per led — det är hela poängen",
      body: "AI:n har inget minne mellan chattar. Kör du alla tre prompterna i samma chatt smittar kontexten från tidigare led och jämförelsen blir ogiltig. Att behöva öppna ny chatt är inte ett tekniskt gnäll — det ÄR kontextprincipen i praktiken.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Dela in i grupper om tre — varje person äger ett led. Ojämna grupper: fyra funkar (två delar på led 3), två funkar (en tar led 1+2).",
        "Bestäm ett gemensamt ämne kopplat till det ni jobbar med just nu, så jämförelsen mellan grupper också blir intressant.",
        "Kör stafetten själv först (se Prova själv) så du har ett eget exempel att visa och vet hur AI:n beter sig på just ert ämne.",
        "Kolla att eleverna kan öppna flera separata chattar i skolans AI-verktyg — och att de vet skillnaden mellan ny chatt och nytt meddelande.",
      ],
    },
    {
      type: "p",
      text: "Skriv in ämnet nedan. Observera att klassrumsspåret INTE visar något exempel på en bra prompt — leden avslöjas ett i taget, för ett exempel i förväg gör att grupperna kopierar i stället för att tänka. Ditt eget utfall ligger i ett fält som visas allra sist, efter att grupperna landat sina upptäckter.",
    },
    {
      type: "lararfalt",
      id: "amnet",
      label: "Gemensamt ämne",
      placeholder: "T.ex. industriella revolutionen — en text till en niondeklassare",
      hint: "Samma ämne för alla grupper gör jämförelsen mellan grupper intressant också. Projiceras vid inramningen.",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "myt-utfall",
      label: "Ditt myt-test: vad gav rollpåklistringen?",
      placeholder:
        "Led 2 + ”du är världens främsta historiker” gav samma innehåll, bara mer självsäker ton.",
      hint: "Projiceras i avslutet när du punkterar rollmyten. Ditt eget utfall är mer övertygande än ett påstående.",
      rader: 3,
      valfri: true,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in stafetten",
          body: "Tre led, ett uppdrag: göra samma prompt bättre steg för steg. Visa INTE något exempel på en bra prompt ännu — då kopierar de i stället för att tänka.",
          time: "3 min",
        },
        {
          title: "Led 1 — kortast möjliga",
          body: "Person 1 skriver den lataste prompten gruppen kan komma på. Max en mening. Det ska kännas nästan fånigt.",
          time: "2 min",
        },
        {
          title: "Led 2 — kontext",
          body: "Person 2 skriver om prompten och lägger till: vem vi är, vad målet är, vem mottagaren är. Cirkulera och fråga ”vet AI:n det här, eller antar ni att den vet?”",
          time: "5 min",
        },
        {
          title: "Led 3 — roll, format, begränsningar",
          body: "Person 3 lägger till en roll för AI:n, ett format på svaret och minst en begränsning (längd, ordval, vad som INTE ska vara med).",
          time: "5 min",
        },
        {
          title: "Kör alla tre — ny chatt per prompt",
          body: "Gruppen kör led 1, 2 och 3 i var sin fräsch chatt och sparar svaren. Bevaka att ingen kör allt i samma chatt.",
          time: "5 min",
        },
        {
          title: "Jämför i gruppen",
          body: "Svaren sida vid sida: vilket led gjorde störst skillnad? Vilken MENING i prompten gjorde jobbet? Gruppen enas om sin viktigaste upptäckt.",
          time: "5 min",
        },
        {
          title: "Landa kontextprincipen i helklass",
          body: "Samla gruppernas upptäckter. Skriv principen på tavlan: AI:n vaknar nollställd — den vet bara det du berättar. Punktera rollmyten (se nedan).",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Din viktigaste stund är helklassavslutet. Många grupper kommer tro att led 3-rollen (”du är expert…”) var magin. Styr tillbaka blicken: jämför led 1 och led 2 — där hände oftast det stora innehållslyftet, och det var ren kontext. Led 3:s bidrag är oftast form och ton. Båda är värdefulla, men de gör OLIKA jobb — och det är den insikten eleverna ska gå därifrån med.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Myt-punktering: rollprompter gör inte AI:n smartare",
      body: "”Du är världens bästa historiker” låter kraftfullt men forskningen visar att personas i prompter inte förbättrar svarens korrekthet — de ändrar tonen, inte kunskapen. Det som faktiskt styr kvaliteten är kontext, mål, mottagare och begränsningar. Låt gärna en grupp testa live: samma prompt med och utan tjusig roll. Skillnaden i innehåll brukar vara pinsamt liten.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Ni är tre. Ni ska förbättra samma prompt i tre led — som en stafett där varje person gör prompten bättre på sitt sätt. Sen kör ni alla tre versionerna mot AI:n och jämför vad som hände.",
    },
    { type: "h", text: "Så går stafetten" },
    {
      type: "steps",
      steps: [
        {
          title: "Bestäm ämnet",
          body: "Läraren ger er ämnet, eller så tar ni det ni jobbar med just nu.",
        },
        {
          title: "Person 1: skriv den lataste prompten",
          body: "Kortast möjliga, som ett slarvigt sms: ”skriv om vikingarna”. Max en mening. Ju latare desto bättre — den är er jämförelsepunkt.",
        },
        {
          title: "Person 2: lägg till kontext",
          body: "Skriv om hela prompten och lägg till tre saker: vem ni är, vad målet är och vem som ska läsa svaret. Exempel: ”Vi är elever i åk 8 och ska hålla en presentation om vikingatiden för en åk 5-klass. Skriv ett underlag vi kan utgå från.”",
        },
        {
          title: "Person 3: lägg till roll, format och begränsningar",
          body: "Bygg vidare på person 2:s prompt. Lägg till: en roll för AI:n (vem ska den vara?), ett format (hur ska svaret se ut?) och minst en begränsning (t.ex. max 150 ord, inga svåra ord, sluta med en fråga).",
        },
        {
          title: "Kör alla tre prompterna — VIKTIGT: ny chatt för varje",
          body: "Öppna en helt ny chatt för varje prompt, annars ”minns” AI:n vad ni skrev tidigare och testet blir förstört. Spara alla tre svaren.",
        },
        {
          title: "Jämför",
          body: "Lägg svaren sida vid sida. Vilket led gjorde störst skillnad? Hitta den exakta meningen i er prompt som gjorde jobbet.",
        },
      ],
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "list",
      items: [
        "Alla tre prompterna (led 1, 2 och 3).",
        "De tre svaren (kopiera eller skärmdumpa).",
        "Tre meningar: största skillnaden mellan svar 1 och svar 3 — och vilken del av er prompt ni tror gjorde jobbet.",
      ],
    },
  ],

  // Klassrumsspår. Leden avslöjas ett i taget — hela övningen faller om
  // grupperna ser vad led 2 och 3 innehåller innan de skrivit led 1. Därför
  // kan elevinstruktionen inte projiceras: den listar alla tre på en gång.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Tre led. Ett uppdrag." },
        { type: "p", text: "Göra samma prompt bättre, steg för steg." },
      ],
    },
    {
      etikett: "Ämnet",
      blocks: [{ type: "lararfalt", id: "amnet", label: "Ämnet" }],
    },
    {
      etikett: "Rollerna i gruppen",
      blocks: [
        {
          type: "p",
          text: "Tre personer. En äger varje led. Ni får inte se nästa led förrän ert är klart.",
        },
      ],
    },
    {
      etikett: "Led 1",
      blocks: [
        { type: "h", text: "Kortast möjliga prompt" },
        { type: "p", text: "Max en mening. Det ska kännas nästan fånigt." },
      ],
    },
    {
      etikett: "Led 2",
      blocks: [
        { type: "h", text: "Lägg till kontext" },
        {
          type: "list",
          items: ["Vem vi är", "Vad målet är", "Vem mottagaren är"],
        },
      ],
    },
    {
      etikett: "Frågan jag kommer ställa",
      blocks: [
        {
          type: "quote",
          text: "Vet AI:n det här — eller antar ni att den vet?",
        },
      ],
    },
    {
      etikett: "Led 3",
      blocks: [
        { type: "h", text: "Roll, format, begränsning" },
        {
          type: "list",
          items: [
            "En roll för AI:n",
            "Ett format på svaret",
            "Minst en begränsning — längd, ordval, vad som INTE ska vara med",
          ],
        },
      ],
    },
    {
      etikett: "Nu kör ni alla tre",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Ny chatt per prompt",
          body: "AI:n har inget minne mellan chattar. Samma chatt = kontexten smittar och jämförelsen blir ogiltig.",
        },
      ],
    },
    {
      etikett: "Jämför i gruppen",
      blocks: [
        {
          type: "list",
          items: [
            "Vilket led gjorde störst skillnad?",
            "Vilken MENING i prompten gjorde jobbet?",
          ],
        },
      ],
    },
    {
      etikett: "Principen",
      blocks: [
        { type: "h", text: "AI:n vaknar nollställd" },
        { type: "p", text: "Den vet bara det du berättar." },
      ],
    },
    {
      etikett: "Och en myt att punktera",
      blocks: [
        {
          type: "p",
          text: "Många tror att rollen i led 3 var magin. Jämför led 1 och led 2 igen — där hände innehållslyftet, och det var ren kontext.",
        },
      ],
    },
    {
      etikett: "Mitt eget test",
      blocks: [
        { type: "lararfalt", id: "myt-utfall", label: "Myt-testet", valfri: true },
      ],
    },
    {
      etikett: "Slutsatsen",
      blocks: [
        {
          type: "p",
          text: "Kontext lyfter innehållet. Roll och format lyfter tonen. Båda är värda något — men de gör olika jobb.",
        },
      ],
    },
  ],

  diskussion: [
    "Vilket led gjorde störst skillnad — kontexten eller rollen/formatet? Varför tror du?",
    "Vad visste AI:n om er innan ni skrev något? Vad betyder det för hur man borde skriva prompter?",
    "Finns det lägen när den korta lata prompten faktiskt är bäst?",
    "Om AI:n bara vet det du berättar — vad borde du ALLTID berätta när du använder AI i skolarbetet?",
  ],

  fallgropar: [
    "Elever kör alla tre prompterna i samma chatt — då ärver senare prompter kontexten från tidigare led och jämförelsen blir meningslös. Ny chatt per led, utan undantag.",
    "Led 3 blir teater: eleverna staplar storslagna roller (”du är världens bästa expert med 50 års erfarenhet”) i stället för format och begränsningar som faktiskt styr svaret.",
    "Jämförelsen stannar vid ”längre svar = bättre svar”. Styr mot användbarhet: vilket svar hade ni faktiskt kunnat använda till uppgiften?",
  ],

  evidens: [
    {
      ref: "zamfirescu-pereira-2023",
      relevance:
        "Visar att personer utan AI-vana promptar ad hoc och har svårt att förbättra systematiskt — exakt det stafetten tränar bort genom att göra förbättringsleden explicita och jämförbara.",
    },
    {
      ref: "zheng-2024-personas",
      relevance:
        "Belägget bakom myt-punkteringen: personas i prompter förbättrar inte svarens korrekthet. Det som gör skillnad är kontext, mål och begränsningar — stafettens led 2 och 3.",
    },
  ],

  variationer: [
    "Yngre (åk 6): kör hela stafetten i helklass på storskärm — klassen föreslår förbättringar för varje led och du skriver. Samma aha, mer stöttning.",
    "Gymnasiet: lägg till ett fjärde led — person 1 får tillbaka prompten och får BARA stryka ord. Kortaste prompt som behåller kvaliteten vinner. Tränar precision i stället för längd.",
  ],

  kedjarMed: ["startmeningarna", "forhors-ai"],

  kalla: "banken",
};
