// Övningsbanken — AI som femte gruppmedlem (Styra AI)
// Grupparbete där AI:n får EN definierad roll — sekreterare, djävulens
// advokat, faktakollare eller strukturör — inskriven i gruppkontraktet.
// Gruppen loggar när AI:n hjälpte, stjälpte eller ignorerades med rätta,
// och omförhandlar rollen i slutet. AI:s plats i samarbete är ett
// gruppbeslut — inte ett individuellt smyganvändande.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "ai-som-femte-gruppmedlem",
  titel: "AI som femte gruppmedlem",
  blurb:
    "Grupparbete där AI:n får EN roll — sekreterare, djävulens advokat, faktakollare eller strukturör — inskriven i gruppkontraktet. Och den kan bli sparkad.",
  syfte:
    "I de flesta grupparbeten är AI:n redan med — osynligt, i någons mobil under bordet. Den här övningen drar upp den på bordet: gruppen väljer EN definierad roll åt AI:n, skriver in den i gruppkontraktet och loggar under arbetet när den hjälpte, stjälpte eller ignorerades med rätta. I slutet omförhandlas rollen: behåll, byt eller sparka. Poängen är att AI:s plats i ett samarbete är ett gruppbeslut som kan utvärderas och göras om — inte ett individuellt smyganvändande som ingen pratar om.",

  domaner: ["styra"],
  aiLiteracyIds: [2, 5],

  tid: "En lektion + grupparbetsperiod",
  tidMinuter: 60,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Ett nytt eller pågående grupparbete, gruppkontraktsmall med AI-rad, rollkort med de fyra rollerna och deras promptmallar, en enkel logg per grupp (papper eller delat dokument).",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska ge AI:n en roll i ditt eget nästa samarbete — en ämneslagsplanering, ett projekt, ett dokument ni skriver ihop. Välj EN av de fyra rollerna och håll dig till den i tjugo minuter. Det du letar efter är rollens disciplin: det svåra är inte att använda AI:n, det är att INTE låta den göra allt annat också. När du känt hur snabbt sekreteraren försöker bli idégenerator förstår du varför elevgrupperna behöver ett kontrakt.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj roll för ett riktigt arbetsmoment",
          body: "Fyra att välja på: SEKRETERAREN (antecknar, sammanfattar, listar beslut), DJÄVULENS ADVOKAT (utmanar idéerna), FAKTAKOLLAREN (granskar påståenden — och ska själv granskas) eller STRUKTURÖREN (agenda, tidsplan, delmål). Välj den ditt eget arbete faktiskt behöver.",
        },
        {
          title: "Ge rollen dess prompt",
          body: "Exempel för djävulens advokat: ”Du är vår djävulens advokat i det här projektet. Vi presenterar idéer — du ger de tre starkaste invändningarna mot varje, rangordnade. Inga lösningar, inget beröm. Bara problem.” Rollprompter för alla fyra finns i elevinstruktionen.",
        },
        {
          title: "Jobba tjugo minuter med rollen aktiv",
          body: "Använd AI:n BARA i rollen. När du får impulsen att fråga om något annat — och du kommer få den — notera impulsen men gör det inte. Impulserna är data: de visar exakt var rollgränsen skaver.",
        },
        {
          title: "Logga tre ögonblick",
          body: "Ett när rollen hjälpte, ett när den stjälpte eller störde, ett när du ignorerade den med rätta. En mening per ögonblick. Har du inget i någon kolumn är det också ett fynd.",
        },
        {
          title: "Omförhandla",
          body: "Hade du valt samma roll igen? Byt eller behåll — och skriv en mening om varför. Det beslutet, fattat på loggens grund, är exakt vad elevgrupperna ska göra i slutet av sin period.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska känna efter",
      body: "Rollen gör AI:n förutsägbar. En AI som får göra allt blir gruppens smygledare — en AI med en roll blir gruppens verktyg. Skillnaden känns inom tio minuter, och den är hela övningen.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Koppla övningen till ett riktigt grupparbete — nytt eller pågående. Rollen behöver riktiga arbetsuppgifter för att kunna prövas; ett låtsasprojekt ger en låtsaslogg.",
        "Förbered rollkorten: de fyra rollerna med varsin promptmall (se elevinstruktionen). Skriv gärna ut — ett fysiskt kort på bordet gör rollen synlig för hela gruppen.",
        "Lägg till en AI-rad i er gruppkontraktsmall: vilken roll, när den får användas, vem som skriver till den (rotera!) och hur gruppen fattar beslut när AI:n föreslår något.",
        "Bestäm loggformatet: tre kolumner — HJÄLPTE / STJÄLPTE / IGNORERADE VI MED RÄTTA — med datum och en mening per rad. Papper vid bordet eller delat dokument, huvudsaken är att den fylls i under arbetet.",
      ],
    },
    {
      type: "p",
      text: "Skriv in projektet nedan. De fyra rollerna med promptmallar ligger redan i klassrumsspåret, en roll per slide — då kan grupperna läsa dem i lugn och ro innan de väljer, i stället för att välja på en muntlig uppräkning.",
    },
    {
      type: "lararfalt",
      id: "projektet",
      label: "Grupparbetet det gäller",
      placeholder:
        "T.ex. fördjupningsarbetet om hållbara städer — redovisning v. 48, fyra lektioner",
      hint: "Ett riktigt projekt. Ett låtsasprojekt ger en låtsaslogg. Projiceras vid inramningen.",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "omforhandling",
      label: "När sker omförhandlingen?",
      placeholder: "Sista passet, 5 dec — behåll, byt eller sparka",
      hint: "Projiceras i slutet. Utan datum blir rollen permanent av slentrian.",
      rader: 1,
      valfri: true,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Introducera rollerna",
          body: "Gå igenom de fyra rollerna och var tydlig med skillnaden mot vanlig AI-användning: rollen är en BEGRÄNSNING, och begränsningen är poängen. En AI som gör allt är en sjätte hjärna som tar över — en AI med en roll är ett verktyg gruppen styr.",
          time: "10 min",
        },
        {
          title: "Grupperna väljer roll och skriver kontrakt",
          body: "Varje grupp väljer EN roll, motiverar valet utifrån sitt projekt och skriver in den i gruppkontraktet: roll, när, vem som skriver, hur beslut fattas. Faktakollaren kommer med specialregel: allt den säger dubbelkollas mot en annan källa innan det används.",
          time: "15 min",
        },
        {
          title: "Arbeta med rollen aktiv",
          body: "Grupperna jobbar med sitt projekt, AI:n används bara i sin roll och loggen fylls på löpande — minst en rad per arbetspass. Gör en snabb loggkoll mitt i perioden: en grupp med tom logg har antingen glömt AI:n eller smyganvänder den, och båda är värda ett samtal.",
          time: "resten av lektionen + kommande pass",
        },
        {
          title: "Omförhandlingen",
          body: "Sista passet: grupperna läser sin logg och fattar beslut — behåll rollen, byt roll eller sparka AI:n helt. Beslutet ska motiveras med loggens rader, inte med magkänsla. Avsluta i helklass: vilka roller överlevde, vilka fick sparken, och varför?",
          time: "15 min i slutet av perioden",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Ditt jobb under arbetspassen är att fråga efter rollen, inte efter AI:n: ”vad sa er djävulens advokat om det här?” och ”står det i loggen?”. När du ser smyganvändning utanför rollen — en elev som quickfixar något med AI i mobilen — är det inte ett regelbrott att bestraffa utan övningens bästa samtalsämne: varför gick du utanför rollen? Behöver kontraktet ändras? Det är exakt så vuxna arbetslag också borde hantera AI, och det kan du säga högt.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Faktakollaren är den farligaste rollen",
      body: "Grupper som väljer faktakollaren tenderar att behandla den som facit — då har de outsourcat precis det omdöme övningen ska träna. Specialregeln är inte förhandlingsbar: faktakollarens svar dubbelkollas alltid mot en annan källa. Grupper som tycker det låter omständligt har just upptäckt något viktigt om AI som källa.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Er grupp får en femte medlem: en AI. Men den får inte göra vad den vill — den får EN roll som ni väljer, skriver in i gruppkontraktet och kan sparka om den inte levererar.",
    },
    { type: "h", text: "Rollerna ni väljer mellan" },
    {
      type: "list",
      items: [
        "SEKRETERAREN — antecknar och sammanfattar. Prompt: ”Du är vår sekreterare. Vi klistrar in anteckningar och beslut — du sammanfattar, listar beslut och öppna frågor. Lägg inte till egna idéer.”",
        "DJÄVULENS ADVOKAT — utmanar era idéer. Prompt: ”Du är vår djävulens advokat. Vi presenterar en idé — du ger de tre starkaste invändningarna, rangordnade. Inga lösningar, inget beröm.”",
        "FAKTAKOLLAREN — granskar påståenden ni vill använda. Prompt: ”Här är ett påstående vi vill använda: […]. Vad talar för, vad talar emot, och vad bör vi dubbelkolla i en annan källa?” Specialregel: faktakollarens egna svar ska också dubbelkollas — den kan ha fel.",
        "STRUKTURÖREN — håller ordning på tid och delmål. Prompt: ”Vi har [antal] lektioner på oss och ska leverera [vad]. Föreslå en tidsplan med delmål. Ställ frågor om det du behöver veta först.”",
      ],
    },
    { type: "h", text: "Så gör ni" },
    {
      type: "list",
      ordered: true,
      items: [
        "Välj EN roll — den ert projekt behöver mest. Skriv en mening om varför just den.",
        "Skriv in AI:n i gruppkontraktet: rollen, när den får användas, vem som skriver till den (turas om!) och hur ni beslutar när AI:n föreslår något.",
        "Jobba på med projektet. AI:n används bara i sin roll — vill någon använda AI till annat tas det upp med gruppen först.",
        "För logg under hela arbetet, minst en rad per pass: HJÄLPTE (när?), STJÄLPTE (när?), IGNORERADE VI MED RÄTTA (när?). En mening per rad räcker.",
        "Sista passet: läs loggen och bestäm — behåll rollen, byt roll eller sparka AI:n. Beslutet ska bygga på loggens rader, inte på magkänsla.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Att ignorera AI:n kan vara rätt",
      body: "Kolumnen ”ignorerade vi med rätta” är inte en skamvrå — den är loggens smartaste kolumn. En grupp som kan säga NEJ till ett AI-förslag och förklara varför har mer kontroll över sitt arbete än en grupp som säger ja till allt.",
    },
    { type: "h", text: "Det här visar ni efteråt" },
    {
      type: "p",
      text: "Lämna in gruppkontraktets AI-rad, er logg och ert slutbeslut med motivering: behöll ni, bytte ni eller sparkade ni — och vilka rader i loggen avgjorde?",
    },
  ],

  // Klassrumsspår. En roll per slide med sin promptmall — grupperna ska kunna
  // läsa och jämföra innan de väljer, inte välja på en muntlig uppräkning.
  // Faktakollarens specialregel får en egen slide: den är inte förhandlingsbar.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Er grupp får en femte medlem" },
        { type: "p", text: "Den får EN roll. Och den kan sparkas." },
      ],
    },
    {
      etikett: "Projektet",
      blocks: [{ type: "lararfalt", id: "projektet", label: "Projektet" }],
    },
    {
      etikett: "Poängen",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Rollen är en BEGRÄNSNING",
          body: "En AI som gör allt är en sjätte hjärna som tar över. En AI med en roll är ett verktyg ni styr.",
        },
      ],
    },
    {
      etikett: "Roll 1 · Sekreteraren",
      blocks: [
        { type: "p", text: "Antecknar och sammanfattar." },
        {
          type: "quote",
          text: "Du är vår sekreterare. Vi klistrar in anteckningar och beslut — du sammanfattar, listar beslut och öppna frågor. Lägg inte till egna idéer.",
        },
      ],
    },
    {
      etikett: "Roll 2 · Djävulens advokat",
      blocks: [
        { type: "p", text: "Utmanar era idéer." },
        {
          type: "quote",
          text: "Du är vår djävulens advokat. Vi presenterar en idé — du ger de tre starkaste invändningarna, rangordnade. Inga lösningar, inget beröm.",
        },
      ],
    },
    {
      etikett: "Roll 3 · Faktakollaren",
      blocks: [
        { type: "p", text: "Granskar påståenden ni vill använda." },
        {
          type: "quote",
          text: "Här är ett påstående vi vill använda: […]. Vad talar för, vad talar emot, och vad bör vi dubbelkolla i en annan källa?",
        },
      ],
    },
    {
      etikett: "Om ni väljer faktakollaren",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Specialregeln är inte förhandlingsbar",
          body: "Faktakollarens egna svar dubbelkollas alltid mot en annan källa. Den kan ha fel.",
        },
      ],
    },
    {
      etikett: "Roll 4 · Strukturören",
      blocks: [
        { type: "p", text: "Håller ordning på tid och delmål." },
        {
          type: "quote",
          text: "Vi har [antal] lektioner på oss och ska leverera [vad]. Föreslå en tidsplan med delmål. Ställ frågor om det du behöver veta först.",
        },
      ],
    },
    {
      etikett: "Skriv in i gruppkontraktet",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Vilken roll",
            "När den får användas",
            "Vem som skriver till den — rotera!",
            "Hur ni fattar beslut när AI:n föreslår något",
          ],
        },
      ],
    },
    {
      etikett: "Loggen",
      blocks: [
        {
          type: "list",
          items: ["HJÄLPTE", "STJÄLPTE", "IGNORERADE VI MED RÄTTA"],
        },
      ],
    },
    {
      etikett: "Minst en rad per arbetspass",
      blocks: [
        {
          type: "p",
          text: "En tom logg betyder antingen att ni glömt AI:n eller att ni smyganvänder den.",
        },
      ],
    },
    {
      etikett: "Omförhandlingen",
      blocks: [
        { type: "lararfalt", id: "omforhandling", label: "Omförhandling", valfri: true },
      ],
    },
    {
      etikett: "Tre val",
      blocks: [
        {
          type: "list",
          items: ["Behåll rollen", "Byt roll", "Sparka AI:n helt"],
        },
      ],
    },
    {
      etikett: "Ett krav på beslutet",
      blocks: [
        {
          type: "h",
          text: "Motivera med loggens rader — inte med magkänsla",
        },
      ],
    },
  ],

  diskussion: [
    "Vilken roll valde flest grupper — och vad säger det om vad grupparbeten faktiskt behöver?",
    "När stjälpte AI:n som mest? Var det rollens fel, promptens fel eller gruppens sätt att använda den?",
    "”Ignorerade med rätta” — vad krävdes för att våga strunta i ett AI-förslag? Vem i gruppen sa ifrån först?",
    "Är en AI med en tydlig roll mer eller mindre farlig för gruppens eget tänkande än en AI som får göra allt?",
  ],

  fallgropar: [
    "Rollen läcker: sekreteraren börjar föreslå idéer, strukturören börjar skriva innehåll — och snart gör AI:n allt. Gör rolldisciplinen till en del av loggen: varje användning utanför rollen är en rad i ”stjälpte”.",
    "En elev blir AI:ns enda kanal och får informell makt över gruppen. Kontraktets rotationsregel — turas om att skriva — är inte kosmetika, den är maktdelning.",
    "Loggen fylls i som efterhandskonstruktion sista passet. Kräv en rad per arbetspass och gör en snabb loggkoll mitt i perioden — en färsk logg är skillnaden mellan utvärdering och gissning.",
  ],

  evidens: [
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Manage AI-domänens kärna är att avgöra när, hur och OM AI ska användas. Gruppkontraktet gör det avgörandet explicit och kollektivt: rollen, villkoren och rätten att sparka AI:n är Manage-kompetens omsatt i grupparbetets vardag.",
    },
    {
      ref: "zimmerman-2002",
      relevance:
        "Självreglerat lärande sker i tre faser — planering, genomförande, självutvärdering — och loggen är exakt den cykeln på gruppnivå: rollen planeras i kontraktet, prövas i arbetet och utvärderas i omförhandlingen.",
    },
  ],

  variationer: [
    "Yngre (åk 6–7): kör en roll i taget i helklass först — läraren är AI:ns kanal på projektorn och klassen är en enda stor grupp. När rollerna sitter: släpp ut dem till grupperna.",
    "Äldre (gymnasiet): låt grupperna designa en FEMTE roll själva, med promptmall och specialregler, och testa den en vecka. Bästa rollförslaget antas i klassens nästa grupparbete.",
  ],

  kedjarMed: ["ai-fria-kontrollpunkter", "slapp-agenten"],

  kalla: "banken",
};
