// Övningsbanken — AI eller inte? — sorteringen.
// Fyra hörn: Endast AI · AI som stöd · Endast människa · Osäker. Läraren läser
// uppgiftskort, eleverna ställer sig och motiverar. Inget facit — skälen är
// poängen. Bygger direkt på ett klassrumsexempel ur OECD:s AILit-ramverk
// (domänen Manage AI / Styra AI).

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "ai-eller-inte-sorteringen",
  titel: "AI eller inte? — sorteringen",
  blurb:
    "Fyra hörn, inga skärmar: Endast AI, AI som stöd, Endast människa eller Osäker — var ställer du dig när uppgiften är att skriva kondoleans till farmor?",
  syfte:
    "Att avgöra NÄR och OM AI ska användas är en egen kompetens — skild från att kunna använda AI. Den här övningen tränar exakt det, utan en enda skärm. Eleverna tvingas ta ställning med kroppen, motivera med ord och lyssna på kompisar som står i ett annat hörn. Det finns inget facit, och det är hela poängen: skälen är det som tränas, inte svaren.",

  domaner: ["styra"],
  aiLiteracyIds: [2, 3],

  tid: "20 min",
  tidMinuter: 20,
  arskurser: "Åk 4–gymnasiet",
  digitalaVerktyg: false,
  material:
    "Fyra hörnskyltar (Endast AI · AI som stöd · Endast människa · Osäker) och en lista med uppgiftskort. Inga skärmar.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska köra sorteringen på dig själv innan du kör den i klassrummet — på papper i stället för hörn. Poängen är inte att hitta rätt svar (det finns inget facit) utan att känna var DU tvekar. De kort där din penna stannar är exakt de kort som kommer splittra klassen — och det är de korten som gör övningen.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Rita fyra kolumner",
          body: "Endast AI · AI som stöd · Endast människa · Osäker. Det är dina fyra hörn.",
        },
        {
          title: "Sortera uppgifterna nedan",
          body: "En i taget, snabbt först — placera efter magkänsla. Gå sen tillbaka och se om något vill flytta.",
        },
        {
          title: "Markera var du tvekade",
          body: "Sätt en stjärna vid korten där du inte var säker eller där du flyttade. Det är dina laddade kort.",
        },
        {
          title: "Motivera högt",
          body: "Säg en mening per placering, som en elev skulle behöva göra: ”Jag placerar den här för att …”. Märk hur mycket svårare det är än att bara placera.",
        },
        {
          title: "Gissa klassens splittring",
          body: "Vilka kort skulle dela din klass i olika hörn? De korten sparar du till slutet av rundan — då är samtalet varmt nog att bära dem.",
        },
      ],
    },
    { type: "h", text: "Uppgiftskorten" },
    {
      type: "list",
      items: [
        "Skriva födelsedagskort till farmor",
        "Räkna ut medelvärdet av klassens resultat",
        "Välja gymnasieprogram",
        "Träna glosor inför läxförhöret",
        "Skriva en kondoleans till någon som mist en anhörig",
        "Sammanfatta en lång artikel",
        "Avgöra vem som började bråket på rasten",
        "Designa klassens tröja",
        "Välja present till en kompis",
        "Kolla om en nyhet stämmer",
      ],
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Skriv fyra tydliga skyltar — Endast AI · AI som stöd · Endast människa · Osäker — och häng dem i varsitt hörn av klassrummet.",
        "Välj 6–8 uppgiftskort ur listan (se Prova själv), eller skriv egna som ligger nära just din klass vardag. Anpassa efter ålder.",
        "Ordna korten medvetet: börja lätt och lekfullt (träna glosor, designa tröjan), spara de laddade (kondoleansen, gymnasievalet, bråket) tills samtalet är igång.",
        "Bestäm och berätta regeln: man får byta hörn mitt i ett samtal om någon övertygar en — och det räknas som styrka, inte förlust.",
      ],
    },
    {
      type: "p",
      text: "Klassrumsläget har åtta kort inbyggda i stigande laddning, så det går att köra utan förberedelse. Vill du ha kort som ligger närmare just din klass skriver du in dem nedan — de dyker upp mitt i sekvensen, efter de neutrala korten och före de laddade. Lämnar du dem tomma hoppas de över.",
    },
    {
      type: "lararfalt",
      id: "eget-kort-1",
      label: "Eget kort 1 (valfritt)",
      placeholder: "En uppgift ur just din klass vardag",
      rader: 2,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "eget-kort-2",
      label: "Eget kort 2 (valfritt)",
      placeholder: "",
      rader: 2,
      valfri: true,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Förklara hörnen och reglerna",
          body: "Fyra hörn, inget facit. Alla ska kunna säga en mening om varför de står där de står. Osäker är ett riktigt hörn — men även där krävs ett skäl.",
          time: "3 min",
        },
        {
          title: "Kör korten",
          body: "Läs ett kort, låt eleverna gå till sitt hörn. Fråga 2–3 elever i OLIKA hörn: ”varför står du där?” Öppna för byten: ”någon som vill flytta efter det argumentet?” Cirka två minuter per kort — håll tempot uppe, det är bättre att hinna sex kort med liv än tio i tystnad.",
          time: "14 min",
        },
        {
          title: "Avrunda",
          body: "Vilket kort splittrade oss mest? Vad säger det — om uppgiften, eller om oss? Landa: att välja när AI ska användas är något man blir bättre på genom att träna, precis som ni gjorde nu.",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Du är samtalsledare, inte domare. I samma sekund du avslöjar din egen åsikt — med ord, ton eller en höjd ögonbryn — börjar eleverna sortera efter dig i stället för efter sina egna skäl. Fråga, spegla och ställ hörn mot hörn: ”ni står i olika hörn om kondoleansen — vad ser du som hon inte ser?” Det bästa som kan hända är att en elev byter hörn mitt i ett resonemang. Lyft det öppet: det är så det ska se ut när någon tänker.",
    },
    {
      type: "callout",
      tone: "note",
      title: "OECD-kopplingen",
      body: "Övningen bygger direkt på ett klassrumsexempel ur OECD:s AILit-ramverk, domänen Styra AI (Manage AI): att avgöra när, hur och OM AI ska användas är en egen kompetens — skild från att kunna prompta eller granska. Bra att ha i ryggen om någon undrar varför ni ”bara står i hörn” — det här är ramverkets kärnkompetens i sin renaste form.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Vissa kort ligger nära på riktigt",
      body: "Kondoleansen, gymnasievalet och bråket kan träffa enskilda elevers verklighet just nu. Fråga hörnet, aldrig personen — ”någon i det här hörnet som vill säga varför?” — så att ingen tvingas motivera utifrån egen sorg eller eget bråk. Läs rummet och hoppa över kort om det behövs.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Klassrummet har fyra hörn: Endast AI, AI som stöd, Endast människa och Osäker. Läraren läser upp en uppgift — och du väljer det hörn som stämmer med vad DU tycker om just den uppgiften. Sen ställer du dig där.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Lyssna på uppgiften som läses upp.",
        "Tänk själv först — gå inte dit kompisarna går.",
        "Ställ dig i ditt hörn.",
        "Var beredd att säga en mening som börjar: ”Jag står här för att …”",
        "Om någon annans skäl övertygar dig — byt hörn! Att byta är inte att förlora, det är beviset på att du lyssnade och tänkte.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Det finns inget facit",
      body: "Ingen kommer säga vilket hörn som var ”rätt” — för det finns inget rätt hörn. Det som räknas är ditt skäl. Även Osäker är ett riktigt val, men då är din mening: ”Jag är osäker för att …”",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "När övningen är klar: skriv ner tre av uppgifterna — en där du var helt säker, en där du tvekade och en där du bytte hörn (eller ville byta). Skriv en mening per uppgift om varför. Lämna till läraren eller ta med till nästa lektion.",
    },
  ],

  // Klassrumsspår. Ett kort per slide är hela poängen: eleverna ska hinna
  // tänka, gå till sitt hörn och argumentera innan nästa kort syns.
  // Korten ligger i stigande laddning — lekfullt först, kondoleansen sist —
  // så att samtalet är varmt när de svåra kommer. Lärarens egna kort landar
  // mitt i, efter de neutrala.
  klassrum: [
    {
      etikett: "Fyra hörn",
      blocks: [
        {
          type: "list",
          items: [
            "Endast AI",
            "AI som stöd",
            "Endast människa",
            "Osäker",
          ],
        },
      ],
    },
    {
      etikett: "Reglerna",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Tänk själv först — gå inte dit kompisarna går",
            "Var beredd att säga: ”Jag står här för att …”",
            "Byt hörn om någon övertygar dig. Det är styrka, inte förlust.",
          ],
        },
      ],
    },
    {
      etikett: "Inget facit",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Osäker är ett riktigt hörn",
          body: "Men även där krävs ett skäl.",
        },
      ],
    },
    { etikett: "Kort 1", blocks: [{ type: "h", text: "Träna glosor inför läxförhöret" }] },
    { etikett: "Kort 2", blocks: [{ type: "h", text: "Designa klassens tröja" }] },
    { etikett: "Kort 3", blocks: [{ type: "h", text: "Sammanfatta en lång artikel" }] },
    { etikett: "Kort 4", blocks: [{ type: "h", text: "Räkna ut medelvärdet av klassens resultat" }] },
    { etikett: "Kort 5", blocks: [{ type: "h", text: "Kolla om en nyhet stämmer" }] },
    {
      etikett: "Eget kort",
      blocks: [{ type: "lararfalt", id: "eget-kort-1", label: "Eget kort 1", valfri: true }],
    },
    {
      etikett: "Eget kort",
      blocks: [{ type: "lararfalt", id: "eget-kort-2", label: "Eget kort 2", valfri: true }],
    },
    { etikett: "Kort 6", blocks: [{ type: "h", text: "Välja present till en kompis" }] },
    { etikett: "Kort 7", blocks: [{ type: "h", text: "Välja gymnasieprogram" }] },
    { etikett: "Kort 8", blocks: [{ type: "h", text: "Avgöra vem som började bråket på rasten" }] },
    {
      etikett: "Sista kortet",
      blocks: [
        { type: "h", text: "Skriva en kondoleans till någon som mist en anhörig" },
      ],
    },
    {
      etikett: "Avrunda",
      blocks: [
        {
          type: "list",
          items: [
            "Vilket kort splittrade oss mest?",
            "Vad säger det — om uppgiften, eller om oss?",
          ],
        },
      ],
    },
    {
      etikett: "Landa",
      blocks: [
        {
          type: "p",
          text: "Att välja när AI ska användas är något man blir bättre på genom att träna. Precis som ni gjorde nu.",
        },
      ],
    },
  ],

  diskussion: [
    "Vilket kort splittrade klassen mest — och varför just det?",
    "Finns det uppgifter AI skulle KLARA av men ändå inte BORDE göra? Vad är skillnaden mellan kan och bör?",
    "Vem ska bestämma var gränsen går — du själv, skolan, dina föräldrar eller företagen som bygger AI:n?",
    "Bytte någon hörn under övningen? Vilket argument fick dig att flytta?",
  ],

  fallgropar: [
    "Flockbeteende — eleverna går dit kompisen går. Motdrag: låt alla blunda och peka mot sitt hörn innan någon får gå, eller skriv valet på en lapp först vid de laddade korten.",
    "Läraren läcker sitt eget ”rätta svar” via ton, kroppsspråk eller följdfrågor — då blir det en gissa-vad-läraren-tycker-lek i stället för egna skäl.",
    "Osäker-hörnet blir gömställe för den som inte orkar ta ställning. Kräv en mening även där: osäkerhet med skäl är ett fullvärdigt svar — slentrian är det inte.",
  ],

  evidens: [
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Övningen är byggd direkt på ett klassrumsexempel ur ramverkets Manage AI-domän: att avgöra när och om AI ska användas är en egen kompetens som behöver tränas explicit — inte något som följer automatiskt av att kunna använda verktygen.",
    },
    {
      ref: "ennis-2015",
      relevance:
        "Fyra hörn-formatet tvingar fram just det Ennis sätter som kärnstandarder för kritiskt tänkande — skäl, alternativ och perspektiv — i stället för rent tyckande. Kravet på en motivering per placering är övningens motor.",
    },
  ],

  variationer: [
    "Yngre (åk 4–6): börja med bara två hörn (AI får hjälpa till / AI ska inte hjälpa till) och enklare kort — väx till fyra hörn när formen sitter.",
    "Äldre: låt eleverna skriva egna uppgiftskort anonymt på lappar — de mest verkliga dilemmana kommer från deras egen vardag, och korten kan återanvändas nästa runda.",
  ],

  kedjarMed: ["uppgiftsdekompositionen", "framtidssamtalet"],

  kalla: "banken",
};
