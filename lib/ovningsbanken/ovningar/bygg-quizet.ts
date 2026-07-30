// Övningsbanken — Bygg quizet.
// Omvänd Bloom: eleverna SKAPAR ett quiz med AI på veckans avsnitt — men varje
// fråga måste överleva granskning mot läromedlet innan en annan grupp får svara.
// Felaktiga AI-frågor är guld: de diskuteras i helklass.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "bygg-quizet",
  titel: "Bygg quizet",
  blurb:
    "Eleverna bygger veckans quiz med AI — men varje fråga måste överleva granskning mot läromedlet innan någon annan får svara på den.",
  syfte:
    "Att svara på ett quiz kräver att du minns. Att GRANSKA ett quiz kräver att du förstår — du måste avgöra om frågan är korrekt, entydig och lagom svår, och det går inte att göra utan att kunna innehållet. Övningen vänder på Bloom: eleverna hamnar högst upp i taxonomin (värdera) medan de tror att de bara gör ett quiz. Och när AI:n levererar en felaktig fråga är det inte ett misslyckande — det är lektionens bästa diskussionsmaterial.",

  domaner: ["skapa", "styra"],
  aiLiteracyIds: [2, 4],

  tid: "40 min",
  tidMinuter: 40,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Skolans AI-verktyg + läromedlet för veckans avsnitt (bok eller digitalt) + ett enkelt granskningsprotokoll per grupp.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska vända på quizet: i stället för att AI:n förhör dig bygger du ett quiz med AI — och granskar varje fråga mot läromedlet innan någon skulle få svara på det. Du kommer märka två saker: att AI:n då och då levererar frågor som är fel, tvetydiga eller konstigt svåra, och att det är just granskningen som kräver att du kan ämnet. Femton minuter med ett avsnitt du känner väl.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj ett avsnitt du kan utan och innan",
          body: "Ta något ur din egen undervisning där du direkt märker om en fråga är fel. Det gör granskningen snabbare och roligare.",
        },
        {
          title: "Be AI:n om tio frågor",
          body: "Skriv: ”Skapa ett quiz med 10 frågor på [avsnitt] för [årskurs]. Blanda lätta och svåra frågor. Ge rätt svar och en kort förklaring till varje fråga.”",
        },
        {
          title: "Granska varje fråga mot läromedlet",
          body: "Tre kontrollfrågor per fråga: Är den korrekt (stämmer med läromedlet)? Är den entydig (bara en rimlig tolkning och ett rätt svar)? Är svårighetsgraden rimlig för dina elever?",
        },
        {
          title: "Leta guldet",
          body: "Hitta minst en fråga som är fel, tvetydig eller har konstig svårighetsgrad. Hittar du ingen på tio — be om tio till, eller be om ”svårare frågor som kräver resonemang”. Felen kommer.",
        },
        {
          title: "Känn efter var jobbet satt",
          body: "Vad krävde mest av dig: att kunna svaren — eller att avgöra om frågorna höll? Det är den känslan eleverna ska få.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Spara dina felfrågor",
      body: "Varje felaktig eller tvetydig fråga du hittar nu är färdigt demomaterial till lektionen. En fråga som är fel på ett intressant sätt — rimlig men fel, eller tvetydig så att två svar går att försvara — är värd mer än tio korrekta.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Välj ett avsnitt klassen just jobbat med — granskningen kräver att läromedlet ligger framme och att eleverna faktiskt kan slå upp i det.",
        "Testa quizprompten själv på just ert avsnitt (se Prova själv) så du vet vilken kvalitet AI:n levererar och har egna felfrågor i bakfickan.",
        "Förbered ett granskningsprotokoll — en enkel tabell räcker: fråga · korrekt? · entydig? · lagom svår? · behåll/ändra/släng · motivering.",
        "Planera gruppbytena i förväg: vilken grupp testar vems quiz. Grupper om 2–3 funkar bäst.",
      ],
    },
    {
      type: "p",
      text: "Fyll i fälten nedan. Modelleringsfrågan är den viktigaste: eleverna behöver se HUR granskning låter innan de gör den själva, och då måste frågan stå på skärmen medan du granskar den högt. Ta gärna en riktigt dålig fråga ur din egen förtest.",
    },
    {
      type: "lararfalt",
      id: "avsnittet",
      label: "Vilket avsnitt gäller det?",
      placeholder: "T.ex. Cellens delar, biologi s. 44–52",
      hint: "Projiceras i inramningen — och läromedlet måste ligga framme.",
      rader: 1,
    },
    {
      type: "lararfalt",
      id: "modellfraga",
      label: "Frågan du granskar högt inför klassen",
      placeholder:
        "Klistra in en AI-genererad fråga ur din förtest — gärna en tvetydig eller felaktig.",
      hint: "Projiceras när du modellerar granskningen. En dålig fråga är bättre undervisning än en bra.",
      rader: 4,
    },
    {
      type: "lararfalt",
      id: "quizprompten",
      label: "Prompten grupperna använder",
      placeholder:
        "Skriv tio quizfrågor med svar och förklaringar på avsnittet … Ange var i texten svaret finns.",
      hint: "Projiceras så alla grupper genererar likvärdigt — annars jämför ni promptar i stället för granskning.",
      rader: 3,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in och modellera granskningen",
          body: "Visa EN AI-genererad fråga på storskärm och granska den högt mot läromedlet: ”Stämmer det här? Var i boken står det? Kan frågan tolkas på två sätt?” Eleverna behöver se hur granskning låter innan de gör den själva.",
          time: "7 min",
        },
        {
          title: "Grupperna genererar sina quiz",
          body: "Tio frågor med svar och förklaringar på veckans avsnitt. Håll det snabbt — genereringen är den minst viktiga delen av lektionen.",
          time: "5 min",
        },
        {
          title: "Granskning mot läromedlet",
          body: "Protokoll för varje fråga: korrekt, entydig, lagom svår — behåll, ändra eller släng. Cirkulera och fråga ”var i läromedlet kollade ni det?”. Svaret ”det känns rätt” räcker inte.",
          time: "12 min",
        },
        {
          title: "Quizbyte",
          body: "Grupperna kör varandras granskade quiz. Snabbt tempo, gärna med rättning direkt av gruppen som byggde quizet.",
          time: "8 min",
        },
        {
          title: "Helklass: felfrågorna på storskärm",
          body: "Lyft gruppernas bästa fynd: frågor som var fel, tvetydiga eller konstiga. Fråga varje gång: varför blev den fel? Vad hade hänt om ingen granskat? Landa poängen: att granska frågor kräver mer förståelse än att svara på dem.",
          time: "8 min",
        },
      ],
    },
    { type: "h", text: "Bedömning/efterarbete" },
    {
      type: "p",
      text: "Bedöm protokollet, inte quizet. Ett granskningsprotokoll där gruppen ändrat tre frågor med tydliga motiveringar visar mer förståelse än tio rätt på någon annans quiz. Spara klassens bästa felfrågor — de blir utmärkta uppvärmningar (”vad är fel på den här frågan?”) och ett växande bibliotek av bevis för varför AI-material måste granskas.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Felaktiga AI-frågor är guld — säg det högt",
      body: "Gruppen som hittar en felaktig fråga har gjort lektionens svåraste kognitiva jobb. Fira fynden öppet, annars börjar eleverna se fel som pinsamheter att dölja i stället för fynd att visa upp. Målet är en klass som TÄVLAR om att hitta den bästa felfrågan.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Ni ska bygga ett quiz på veckans avsnitt — med AI:n som frågeskrivare och er som kvalitetsgranskare. Regeln är enkel: ingen fråga släpps vidare till en annan grupp utan att den granskats mot läromedlet. AI:n skriver snabbt, men det är ni som avgör vad som håller.",
    },
    { type: "h", text: "Så gör ni" },
    {
      type: "steps",
      steps: [
        {
          title: "Generera quizet",
          body: "Öppna AI-verktyget och skriv: ”Skapa ett quiz med 10 frågor på [ert avsnitt]. Blanda lätta och svåra frågor. Ge rätt svar och en kort förklaring till varje fråga.”",
        },
        {
          title: "Granska varje fråga mot läromedlet",
          body: "Ta fram boken. För varje fråga svarar ni på tre saker: Stämmer den — var i läromedlet står det? Är den entydig — finns det bara ett rimligt svar? Är den lagom svår?",
        },
        {
          title: "Behåll, ändra eller släng",
          body: "Skriv i protokollet vad ni gjorde med varje fråga och varför. Ni får skriva om frågor så de blir bättre — då är det ER fråga, inte AI:ns.",
        },
        {
          title: "Hittar ni en felaktig fråga — spara den!",
          body: "En fråga som är fel, luddig eller konstig är ert bästa fynd. Den ska upp i helklass efteråt: varför blev den fel?",
        },
        {
          title: "Byt quiz med en annan grupp",
          body: "Kör deras quiz, låt dem köra ert. Rätta varandras direkt.",
        },
      ],
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "list",
      items: [
        "Quizet i slutversion (de frågor som överlevde granskningen).",
        "Granskningsprotokollet — alla tio frågorna med behåll/ändra/släng och en motivering per fråga.",
        "Er bästa felfråga, om ni hittade någon — med en mening om varför den inte höll.",
      ],
    },
  ],

  // Klassrumsspår. Modelleringen är det som inte går att lägga i en
  // elevinstruktion: frågan måste stå på skärmen medan läraren granskar den
  // högt, så att eleverna hör hur granskning låter innan de gör den själva.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "AI:n skriver frågorna. Ni avgör vad som håller." },
      ],
    },
    {
      etikett: "Avsnittet",
      blocks: [{ type: "lararfalt", id: "avsnittet", label: "Avsnittet" }],
    },
    {
      etikett: "Regeln",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Ingen fråga släpps vidare ogranskad",
          body: "Granskad mot läromedlet. Inte mot magkänslan.",
        },
      ],
    },
    {
      etikett: "Först: så låter granskning",
      blocks: [{ type: "lararfalt", id: "modellfraga", label: "Modellfrågan" }],
    },
    {
      etikett: "Tre frågor till varje fråga",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Stämmer det här? Var i boken står det?",
            "Kan frågan tolkas på två sätt?",
            "Är den lagom svår?",
          ],
        },
      ],
    },
    {
      etikett: "Nu er tur — prompten",
      blocks: [{ type: "lararfalt", id: "quizprompten", label: "Prompten" }],
    },
    {
      etikett: "Genereringen är den minst viktiga delen",
      blocks: [{ type: "p", text: "Håll det snabbt. Fem minuter." },
      ],
    },
    {
      etikett: "Protokollet",
      blocks: [
        {
          type: "list",
          items: [
            "Korrekt?",
            "Entydig?",
            "Lagom svår?",
            "Behåll · ändra · släng",
            "Motivering",
          ],
        },
      ],
    },
    {
      etikett: "Räcker inte som motivering",
      blocks: [
        { type: "quote", text: "Det känns rätt." },
      ],
    },
    {
      etikett: "Frågan jag kommer ställa",
      blocks: [{ type: "h", text: "Var i läromedlet kollade ni det?" }],
    },
    {
      etikett: "Quizbyte",
      blocks: [
        { type: "p", text: "Kör varandras granskade quiz. Gruppen som byggde rättar." },
      ],
    },
    {
      etikett: "Visa upp era fynd",
      blocks: [
        {
          type: "callout",
          tone: "tip",
          title: "Felaktiga AI-frågor är guld",
          body: "Gruppen som hittar en felaktig fråga har gjort lektionens svåraste jobb.",
        },
      ],
    },
    {
      etikett: "Poängen",
      blocks: [
        {
          type: "h",
          text: "Att granska frågor kräver mer förståelse än att svara på dem",
        },
      ],
    },
  ],

  diskussion: [
    "Vad krävde mest förståelse — att svara på den andra gruppens quiz eller att granska ert eget? Varför?",
    "Varför blev de felaktiga frågorna fel? Vad tror ni hände inne i AI:n?",
    "Hur många fel hade sluppit igenom om ni inte haft läromedlet bredvid er?",
    "Skulle du lita på ett AI-quiz som ingen granskat? I vilka situationer spelar det roll på riktigt?",
  ],

  fallgropar: [
    "Grupperna rusar till quizbytet och slarvar med granskningen — kul-delen äter metoddelen. Håll hårt på regeln: inget quiz byts utan ifyllt protokoll.",
    "AI:n levererar tio ytliga faktafrågor som är lätta att granska men tränar lite. Be om blandade nivåer i prompten, eller kräv minst tre ”varför”-frågor.",
    "Eleverna tolkar felaktiga frågor som misslyckanden och döljer dem. Vänd berättelsen redan i framingen: felfrågan är fyndet, inte felet.",
  ],

  evidens: [
    {
      ref: "rosenshine-1996",
      relevance:
        "Meta-analysen visar att arbete med att generera och värdera frågor är en av de mest robusta lärstrategierna i interventionsforskningen. Övningen flyttar det arbetet till granskningsledet — eleverna värderar frågor i stället för att bara besvara dem.",
    },
    {
      ref: "ji-2023",
      relevance:
        "Hallucinationsforskningen förklarar varför AI-quiz innehåller självsäkert formulerade felaktigheter — och varför granskning mot läromedlet måste vara ett obligatoriskt led, inte en frivillig extrakoll.",
    },
  ],

  variationer: [
    "Yngre (åk 6): generera fem frågor i stället för tio och gör hela granskningen gemensamt i helklass innan grupperna testar varandra.",
    "Gymnasiet: kräv att gruppen nivåbestämmer varje fråga (fakta/förståelse/analys) och att minst tre frågor ligger över faktanivån — då granskar de både innehåll och kognitiv nivå.",
  ],

  kedjarMed: ["forhors-ai", "detektiv-utan-detektor"],

  kalla: "banken",
};
