// Övningsbanken — Trafikljuset: skrivprocessen (Styra + Skapa, svenska)
// Skrivprocessens moment som färdiga kort. Elevpar sorterar i trafikljus:
// GRÖNT (AI-hjälp självklart okej), GULT (okej med villkor — vilka?),
// RÖTT (måste vara mitt). Jämförs med klassens och LÄRARENS sortering —
// skillnaderna är samtalet. Mynnar i klassens trafikljusregler för nästa
// skrivuppgift. Trafikljus-mekaniken inspirerad av AILIT-projektet.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "trafikljus-skrivprocessen",
  titel: "Trafikljuset: skrivprocessen",
  blurb:
    "Elevpar sorterar skrivprocessens moment i grönt, gult och rött: var är AI-hjälp självklar, var kräver den villkor — och vad måste vara mitt? Sen avslöjas lärarens sortering.",
  syfte:
    "Var i skrivandet AI hör hemma är svenskämnets hetaste fråga — och den går inte att besvara för ”skrivande” i klump. Här sorterar elevpar skrivprocessens moment i trafikljus: grönt (AI-hjälp självklart okej), gult (okej med villkor — som måste formuleras) och rött (måste vara mitt). Till skillnad från Uppgiftsdekompositionen, där grupper själva bryter ner valfri uppgift, kommer den här övningen med en färdig momentlista, är byggd för svenskans skrivprocess — och mynnar ut i något dekompositionen inte gör: klassens gemensamma trafikljusregler för nästa skrivuppgift. Plus den mest laddade jämförelsen av alla: elevernas sortering mot lärarens.",

  domaner: ["styra", "skapa"],
  aiLiteracyIds: [2, 4],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "Åk 7–gymnasiet (svenska)",
  digitalaVerktyg: false,
  material:
    "En kortlek per elevpar med skrivprocessens moment (tolv kort — listan finns i Prova själv), tre trafikljusfält per bänk (grönt/gult/rött papper räcker), tavla för klassbilden. Inga skärmar.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska göra din egen sortering INNAN klassen gör sin — den är övningens hemliga vapen. I klassrummet avslöjar du den först när klassbilden är klar, och det är gapen mellan din sortering och klassens som blir lektionens bästa samtal. Sortera ärligt: var är AI-hjälp självklar för dig, var kräver den villkor — och vilka moment anser du måste vara elevens egna?",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Sortera snabbt först",
          body: "Ta momenten nedan ett i taget och lägg dem i grönt, gult eller rött på magkänsla. Gå sen tillbaka och se vad som vill flytta.",
        },
        {
          title: "Pressa dina gula",
          body: "Gult utan villkor är bara ett obeslut. Skriv villkoret för varje gult moment: ”AI får föreslå omformuleringar, men eleven väljer och kan motivera valet” är ett villkor. ”Med måtta” är det inte.",
        },
        {
          title: "Fråga dina röda varför",
          body: "Vad i just de momenten gör dem till elevens egna? Oftast: där bor det uppgiften ska lära ut. Kolla att din röda zon matchar det du faktiskt bedömer — ett rött moment du aldrig tittar på i bedömningen är värt att fundera över.",
        },
        {
          title: "Förutse klassens gap",
          body: "Vilka kort tror du eleverna sätter grönt där du satt rött — eller tvärtom? Klassikern är ”rätta språkfel”: självklart grönt för många vuxna, men vad händer med elevens språkutveckling om AI:n alltid tar det momentet? De korten är lektionens guld — spara argumenten.",
        },
      ],
    },
    { type: "h", text: "Momentkorten" },
    {
      type: "list",
      items: [
        "Hitta ämne och idé",
        "Formulera tes eller huvudbudskap",
        "Göra disposition",
        "Hitta belägg och exempel",
        "Skriva utkastet",
        "Skriva inledningen",
        "Hitta motargument",
        "Formulera om meningar som hakar",
        "Rätta stavning och språkfel",
        "Referera källor korrekt",
        "Skriva slutversionen",
        "Hitta på titeln",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Din sortering är inte facit — men den är inte heller bara en åsikt",
      body: "Du sätter betyg på texterna, och eleverna har rätt att veta var du drar gränserna och varför. Övningen tvingar dig att kunna motivera varje färg med vad momentet lär ut — inte med ”för att jag säger det”. Det är nyttigt för dig också.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Gör din egen sortering i förväg (se Prova själv) och skriv ner den — dold — så att du kan avslöja den snabbt när det är dags.",
        "Klipp en kortlek per par, eller skriv momenten på tavlan och låt paren sortera på papper med tre kolumner. Fysiska kort vinner: de går att flytta, och flyttandet är tänkandet.",
        "Anpassa listan till er nästa RIKTIGA skrivuppgift — stryk moment som inte ingår och lägg till det som saknas (”skriva dialog” inför novellen, ”formulera källkritisk kommentar” inför utredande text). Reglerna ska gälla på riktigt.",
        "Bestäm hur klassbilden byggs: tavla med tre fält där paren markerar sina placeringar, eller snabb handuppräckning kort för kort.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in",
          body: "Säg det rakt: ”Vi ska inte rösta om AI är fusk. Vi ska bestämma var i skrivprocessen AI hör hemma — moment för moment. Grönt: självklart okej. Gult: okej med villkor, och villkoret ska formuleras. Rött: måste vara mitt.” Avslöja INTE din egen sortering än — hur nyfikna de än är.",
          time: "3 min",
        },
        {
          title: "Parsortering",
          body: "Paren sorterar alla kort. Två regler: varje gult kort kräver ett formulerat villkor (annars bokas det om till grönt eller rött), och paret måste vara överens — oense betyder prata tills någon övertygar den andra.",
          time: "8 min",
        },
        {
          title: "Klassbilden",
          body: "Bygg upp klassens bild på tavlan. Var är klassen enig? Vilka kort spretar? Fråga par som satt olika färg på samma kort: ”ni satte grönt, ni satte rött — vad ser ni som de inte ser?” Lyft de bästa gula villkoren högt: bra villkor är övningens hantverk.",
          time: "7 min",
        },
        {
          title: "Lärarens sortering",
          body: "NU avslöjar du din. Gå direkt på de största gapen: kort där du och klassen landat olika. Motivera dina röda med vad momentet lär ut och vad du bedömer — inte med regler. Och låt eleverna trycka tillbaka: en elev som argumenterar ner ett av dina gula till grönt har gjort exakt det övningen tränar.",
          time: "7 min",
        },
        {
          title: "Klassens trafikljusregler",
          body: "Besluta tillsammans om en gemensam sortering för nästa skrivuppgift. Där ni inte enas avgör du — men gapet skrivs upp och tas upp igen efter uppgiften. Dokumentera: affisch i klassrummet eller pinnat inlägg i Teams/Vklass.",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Fram till avslöjandet är du samtalsledare: fråga efter skäl, ställ par mot par, läck ingenting med ton eller ögonbryn. I avslöjandesteget byter du roll — från neutral till part. Det är inte ett problem, det är poängen: du visar att även lärarens gränser är motiverade ståndpunkter som går att granska, inte naturlagar. En lärare som säger ”jag sätter rött på dispositionen för att det är där jag ser om du kan bygga en text — övertyga mig om motsatsen” modellerar exakt det resonerande övningen vill träna.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Reglerna ska användas på riktigt",
      body: "Trafikljuset blir en pappersprodukt om det inte följer med till nästa skrivuppgift. Dela ut uppgiften med trafikljuset bredvid, hänvisa till det under arbetets gång — och utvärdera efteråt: vilken färg satt fel? Att revidera reglerna tillsammans är en lika bra lektion som att skapa dem.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Ni får en kortlek med skrivprocessens moment — allt från ”hitta ämne” till ”rätta språkfel”. Ni ska sortera dem i trafikljus. GRÖNT: AI-hjälp är självklart okej i det här momentet. GULT: okej med villkor — och då måste ni säga vilket villkoret är. RÖTT: det här måste vara mitt.",
    },
    { type: "h", text: "Så gör ni" },
    {
      type: "list",
      ordered: true,
      items: [
        "Jobba i par. Ta ett kort i taget och lägg det i grönt, gult eller rött.",
        "Regeln för gult: inget kort får ligga där utan ett villkor ni kan säga högt. ”AI får föreslå, men vi väljer och kan förklara varför” är ett villkor. ”Lite grann” är det inte.",
        "Ni måste vara överens om varje kort. Oense? Prata tills någon övertygar den andra — det är halva övningen.",
        "Var beredda att motivera vilket kort som helst: ”Vi satte det här på rött för att …”.",
        "Sen jämför vi hela klassens sortering — och till sist får ni se lärarens. Skillnaderna är inte fel. Skillnaderna är samtalet.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Det finns ingen facit-sortering",
      body: "Klasskompisar kommer sätta grönt där du satt rött — och läraren kanske gör tvärtom mot er båda. Det som räknas är skälet bakom färgen. Men en sak bestäms på slutet: klassens gemensamma regler för nästa skrivuppgift. Så argumentera för din färg — den kan bli regel.",
    },
    { type: "h", text: "Det här visar ni efteråt" },
    {
      type: "p",
      text: "Er parsortering (fotografera korten eller lista dem per färg) med villkoren för alla gula kort — plus en mening om det kort där ni var som mest oense med klassen eller läraren, och vad ni tycker nu.",
    },
  ],

  diskussion: [
    "Vilket kort splittrade klassen mest — och handlade oenigheten om vad AI KAN göra eller om vad man LÄR SIG av momentet?",
    "Var lärarens sortering strängare eller generösare än klassens? Varför tror ni gränserna hamnar olika beroende på om man skriver texten eller bedömer den?",
    "”Rätta stavning och språkfel” — grönt, gult eller rött? Vad händer med din egen stavning på sikt om AI:n alltid tar det momentet?",
    "Skulle ert trafikljus se annorlunda ut för en novell än för ett debattinlägg? Vilka kort byter färg — och varför?",
  ],

  fallgropar: [
    "Allt hamnar på gult — det känns diplomatiskt men är ett sätt att slippa bestämma. Villkorsregeln är motdraget: gult utan formulerat villkor bokas om till grönt eller rött.",
    "Lärarens sortering läcker för tidigt — via ton, ögonbryn eller en ledande följdfråga. Då sorterar eleverna efter dig i stället för efter egna skäl. Håll den dold tills klassbilden är klar.",
    "Reglerna beslutas men används aldrig — då lär sig eleverna att normarbete är teater. Boka in hänvisningen redan nu: nästa skrivuppgift delas ut med trafikljuset bredvid.",
  ],

  evidens: [
    {
      ref: "kapur-2016",
      relevance:
        "Produktiv kamp-forskningen ger den röda zonen dess pedagogiska motivering: lärandet bor i momenten där eleven själv kämpar, och stöd som tar över kampen tar också över lärandet. Trafikljusets fråga är i grunden Kapurs: var ska ansträngningen skyddas?",
    },
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Att avgöra när, hur och OM AI ska användas är Manage AI-domänens kärnkompetens. Trafikljuset tränar den på svenskämnets mest konkreta nivå — moment för moment i skrivprocessen — och gör klassens norm till ett gemensamt, granskningsbart beslut.",
    },
  ],

  variationer: [
    "Första gången eller åk 7: kör sex kort i stället för tolv — hitta ämne, göra disposition, skriva utkastet, formulera om meningar, rätta språkfel, skriva slutversionen. Väx till hela leken när formen sitter.",
    "Gymnasiet: kör dubbla sorteringar — samma kort för två olika texttyper (novell och debattartikel). Korten som byter färg mellan texttyperna är fördjupningens guld: AI-gränser är inte bara personliga, de är genrespecifika.",
  ],

  kedjarMed: ["uppgiftsdekompositionen", "startmeningarna"],

  kalla: "banken",
  kredit:
    "Trafikljus-mekaniken inspirerad av AILIT-projektet (ailit.fi, Åbo Akademi m.fl.).",
};
