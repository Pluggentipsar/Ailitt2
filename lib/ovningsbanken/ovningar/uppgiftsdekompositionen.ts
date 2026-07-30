// Övningsbanken — Uppgiftsdekompositionen (Styra AI)
// Grupper bryter ner en riktig inlämningsuppgift i delsteg och beslutar
// PER STEG om AI hör hemma där. Direkt mot OECD:s Manage-kompetens.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "uppgiftsdekompositionen",
  titel: "Uppgiftsdekompositionen",
  blurb:
    "Bryt ner en riktig inlämningsuppgift i delsteg och bestäm per steg: AI, inte AI, eller AI med villkor.",
  syfte:
    "De flesta AI-beslut i skolan fattas på fel nivå — hela terminer förbjuds eller släpps fria. Den här övningen flyttar beslutet dit det hör hemma: till uppgiftens enskilda steg. Eleverna tränar exakt det OECD kallar Manage-kompetens — att dekomponera ett problem och avgöra var AI hjälper och var den stjäl lärandet. Och de upptäcker att svaret nästan aldrig är ett enkelt ja eller nej.",

  domaner: ["styra"],
  aiLiteracyIds: [2, 4],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "Åk 8–gymnasiet",
  digitalaVerktyg: false,
  material:
    "En aktuell inlämningsuppgift (riktig, inte påhittad), stora papper eller whiteboard per grupp, pennor. Eventuellt en förberedd tabellmall: steg / beslut / motivering.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska ta en av dina egna inlämningsuppgifter och göra precis det du sen ber eleverna göra: bryta ner den i delsteg och besluta per steg om AI hör hemma där. Det tar en kvart — och du kommer märka något direkt: beslutet är mycket svårare, och mycket intressantare, än ”AI eller inte AI”. När du gjort det själv en gång vet du exakt var eleverna kommer fastna.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj en riktig uppgift",
          body: "Ta en inlämningsuppgift du faktiskt använder — gärna en du ska dela ut inom kort. Påhittade exempeluppgifter ger påhittade beslut.",
        },
        {
          title: "Bryt ner i 5–6 delsteg",
          body: "Standardkedjan funkar för det mesta: förstå frågan → samla stoff → disponera → skriva utkast → bearbeta → kontrollera. Justera efter din uppgift — en laborationsrapport eller ett bildprojekt har andra steg.",
        },
        {
          title: "Besluta per steg",
          body: "Gå igenom stegen ett i taget och sätt en av tre etiketter: ”här används AI”, ”här inte”, ”här med villkor”. Skriv en mening motivering per steg. Villkoren ska vara konkreta: ”AI får ge motargument, men inte skriva text” är ett villkor. ”Använd med förnuft” är inget villkor.",
        },
        {
          title: "Hitta steget där lärandet bor",
          body: "Fråga dig: vilket steg är själva POÄNGEN med uppgiften? Om uppgiften finns för att träna disposition är det disponera-steget hjärnan ska äga. Om den finns för att träna källhantering är det stoffsamlandet. Ringa in det steget.",
        },
        {
          title: "Stresstesta dina beslut",
          body: "Skulle du kunna försvara varje ruta för en elev som frågar ”varför då?”. Om motiveringen är ”för att jag säger det” — gör om. Om den är ”för att det är där du lär dig det uppgiften ska lära dig” — då håller den.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det vanligaste aha:t",
      body: "De flesta lärare som gör det här upptäcker att deras magkänsla satt fel gräns. Många vill förbjuda AI i utkastskrivandet men släppa kontrollsteget fritt — och inser sen att det i just deras uppgift är precis tvärtom lärandet sitter. Nedbrytningen avslöjar var uppgiftens egentliga syfte bor. Det är den upptäckten eleverna också ska få göra.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Välj en AKTUELL inlämningsuppgift — helst en eleverna ska göra på riktigt inom kort. Det är skillnaden mellan ett tankeexperiment och ett beslut som gäller dem.",
        "Gör din egen nedbrytning i förväg (se Prova själv). Då vet du var lärandet bor i just den här uppgiften och kan utmana gruppernas beslut i stället för att improvisera.",
        "Förbered en enkel tabellmall per grupp: rad per delsteg, kolumner för beslut (AI / inte AI / AI med villkor) och motivering.",
        "Dela in i grupper om 3–4. Blandade grupper ger bättre kartor — eleverna som använder AI mest och minst ser olika saker.",
      ],
    },
    {
      type: "p",
      text: "Klistra in uppgiften nedan. Den projiceras som en egen slide — hela övningen hänger på att alla har SAMMA uppgift framför sig, och att den är en riktig uppgift eleverna faktiskt ska göra. Din egen nedbrytning ligger i ett fält som visas först vid jämförelsen.",
    },
    {
      type: "lararfalt",
      id: "uppgiften",
      label: "Uppgiften ni bryter ner",
      placeholder:
        "Klistra in uppgiftsformuleringen som eleverna faktiskt fått — inklusive deadline.",
      hint: "Projiceras i inramningen. En riktig, aktuell uppgift är skillnaden mellan ett tankeexperiment och ett beslut som gäller dem.",
      rader: 6,
    },
    {
      type: "lararfalt",
      id: "min-nedbrytning",
      label: "Din egen nedbrytning — visas vid jämförelsen",
      placeholder:
        "Förstå frågan: AI med villkor\nSamla stoff: AI\nDisponera: inte AI ← här bor lärandet\nSkriva utkast: inte AI\nBearbeta: AI med villkor\nKontrollera: AI",
      hint: "Projiceras INTE förrän grupperna gjort sina kartor. Markera var du tror lärandet bor — det är den punkten du ska utmanas på.",
      rader: 7,
      valfri: true,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in",
          body: "Säg det rakt ut: ”Vi ska inte bestämma om AI är tillåtet i kursen. Vi ska bestämma var i DEN HÄR uppgiften den hör hemma — steg för steg.” Beslutet är uppgiftens, inte terminens. Visa de tre etiketterna: AI / inte AI / AI med villkor.",
          time: "5 min",
        },
        {
          title: "Grupperna bryter ner uppgiften",
          body: "Varje grupp delar upp uppgiften i 5–6 delsteg. Ge kedjan förstå frågan → samla stoff → disponera → skriva utkast → bearbeta → kontrollera som startpunkt, men låt dem justera. Gå runt och se till att stegen blir konkreta.",
          time: "8 min",
        },
        {
          title: "Beslut per steg",
          body: "Grupperna sätter etikett och skriver motivering för varje steg. Kräv en mening motivering per beslut — det är motiveringen som är tänkandet. Pressa på villkoren: ”med villkor” måste betyda något konkret.",
          time: "10 min",
        },
        {
          title: "Jämför kartorna",
          body: "Sätt upp kartorna bredvid varandra eller låt grupperna gå runt. Leta skillnader: var landade grupperna olika — och varför? Skillnaderna är guldet: två grupper som satt olika etikett på samma steg har olika teorier om var lärandet bor.",
          time: "5 min",
        },
        {
          title: "Landa",
          body: "Knyt ihop: beslutet är uppgiftens, inte terminens. Och tumregeln att ta med sig: hjärnan ska äga de steg där lärandet bor. Allt annat är förhandlingsbart.",
          time: "2 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Din roll är inte att döma besluten utan att pressa på motiveringarna. En grupp som förbjuder AI i alla steg och en som tillåter den överallt har samma problem: de har inte tänkt per steg. Fråga ”varför just där?” tills motiveringen handlar om lärande, inte om regler eller fusk.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Använd resultatet på riktigt",
      body: "Övningen blir dubbelt så stark om du faktiskt låter en gemensam karta gälla när uppgiften sen görs. Eleverna har då varit med och fattat beslutet — och du har fått en AI-policy för uppgiften som eleverna själva kan förklara.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Ni ska bestämma var AI hör hemma i en riktig uppgift — inte med ett enda ja eller nej, utan steg för steg. Olika steg i en uppgift tränar olika saker, och frågan ni ska svara på är: var behöver din hjärna göra jobbet för att du ska lära dig något?",
    },
    { type: "h", text: "Steg för steg" },
    {
      type: "list",
      ordered: true,
      items: [
        "Utgå från uppgiften ni fått av läraren. Dela upp den i 5–6 delsteg. Startförslag: förstå frågan → samla stoff → disponera → skriva utkast → bearbeta → kontrollera. Ändra stegen så de passar er uppgift.",
        "Ta ett steg i taget och välj en av tre etiketter: HÄR ANVÄNDS AI / HÄR INTE / HÄR MED VILLKOR.",
        "Skriv en menings motivering för varje beslut. ”För att det är lättare” räcker inte — motiveringen ska handla om vad ni lär er eller inte lär er i det steget.",
        "Väljer ni ”med villkor” måste villkoret vara konkret. Exempel: ”AI får ställa frågor om vårt utkast, men inte skriva om det.”",
        "Ringa in det steg ni tror är själva POÄNGEN med uppgiften — steget där lärandet bor. Skriv en mening om varför just det.",
        "Jämför er karta med en annan grupps. Hitta minst ett steg där ni bestämt olika och ta reda på varför.",
      ],
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "p",
      text: "Er karta med alla delsteg, beslut och motiveringar — plus en mening om vilket steg ni ringat in som uppgiftens kärna och en mening om den största skillnaden mot gruppen ni jämförde med.",
    },
  ],

  // Klassrumsspår. Uppgiften måste projiceras — allt hänger på att grupperna
  // bryter ner SAMMA uppgift. Lärarens egen nedbrytning kommer efter
  // jämförelsen, av samma skäl som i trafikljuset: den ska utmanas, inte styra.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Var hör AI hemma i den här uppgiften?" },
        {
          type: "p",
          text: "Inte ett ja eller nej. Steg för steg.",
        },
      ],
    },
    {
      etikett: "Beslutet är uppgiftens",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Inte terminens",
          body: "Vi bestämmer inte om AI är tillåtet i kursen. Vi bestämmer var i DEN HÄR uppgiften den hör hemma.",
        },
      ],
    },
    {
      etikett: "Uppgiften",
      blocks: [{ type: "lararfalt", id: "uppgiften", label: "Uppgiften" }],
    },
    {
      etikett: "Bryt ner i 5–6 delsteg",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Förstå frågan",
            "Samla stoff",
            "Disponera",
            "Skriva utkast",
            "Bearbeta",
            "Kontrollera",
          ],
        },
      ],
    },
    {
      etikett: "Justera stegen",
      blocks: [
        { type: "p", text: "Kedjan ovan är ett startförslag. Ändra så den passar er uppgift." },
      ],
    },
    {
      etikett: "Tre etiketter per steg",
      blocks: [
        {
          type: "list",
          items: ["HÄR ANVÄNDS AI", "HÄR INTE", "HÄR MED VILLKOR"],
        },
      ],
    },
    {
      etikett: "Motiveringen är tänkandet",
      blocks: [
        {
          type: "example",
          label: "En mening per beslut",
          user: "”AI får ställa frågor om vårt utkast, men inte skriva om det”",
          ai: "”För att det är lättare”",
          note: "Motiveringen ska handla om vad ni lär er, inte om vad som är bekvämt.",
        },
      ],
    },
    {
      etikett: "Ringa in ett steg",
      blocks: [
        { type: "h", text: "Var bor lärandet i den här uppgiften?" },
        { type: "p", text: "Skriv en mening om varför just det steget." },
      ],
    },
    {
      etikett: "Jämför kartorna",
      blocks: [
        {
          type: "p",
          text: "Hitta minst ett steg där ni bestämt olika — och ta reda på varför.",
        },
      ],
    },
    {
      etikett: "Min nedbrytning",
      blocks: [
        { type: "lararfalt", id: "min-nedbrytning", label: "Lärarens nedbrytning", valfri: true },
      ],
    },
    {
      etikett: "Tumregeln",
      blocks: [
        { type: "h", text: "Hjärnan ska äga de steg där lärandet bor" },
        { type: "p", text: "Allt annat är förhandlingsbart." },
      ],
    },
  ],

  diskussion: [
    "Var skilde sig gruppernas kartor mest — och vad säger skillnaden om vad ni tror att uppgiften ska träna?",
    "Finns det steg där AI-hjälp gör hela uppgiften meningslös? Vilka — och varför just de?",
    "Vem ska ha sista ordet om var AI får användas i en uppgift: läraren, eleven eller båda tillsammans?",
    "Skulle er karta se likadan ut i ett annat ämne — eller flyttar lärandet mellan stegen beroende på ämne?",
  ],

  fallgropar: [
    "Grupperna fastnar i verktygsprat (”vilken AI är bäst på att skriva?”) i stället för beslutet. Styr tillbaka: frågan är inte VILKEN AI utan OM och VAR.",
    "Alla rutor blir ”med villkor” — det känns diplomatiskt men är ett sätt att slippa bestämma. Kräv minst ett tydligt ja och ett tydligt nej per karta.",
    "Diskussionen glider mot fusk och regler i stället för lärande. Omformulera: frågan är var din hjärna behöver jobba, inte vad du kan komma undan med.",
  ],

  evidens: [
    {
      ref: "ennis-2015",
      relevance:
        "Ennis sex standarder för kritiskt tänkande — relevans, evidens, alternativ, perspektiv — är precis det dekompositionen tvingar fram: i stället för ett svepande ja/nej måste varje delbeslut motiveras och kunna försvaras.",
    },
    {
      ref: "hobbs-2010",
      relevance:
        "Hobbs ramverk gör ”reflect” till en kärnkompetens i medielitteracitet — att kunna redogöra för sina egna medieval. Här blir motiveringen per steg själva produkten, inte en efterhandskonstruktion.",
    },
  ],

  variationer: [
    "Yngre elever (åk 6–7): gör nedbrytningen gemensamt i helklass först, så att grupperna bara behöver fatta besluten per steg — inte konstruera stegen själva.",
    "Uppföljning: låt eleverna ta fram kartan igen EFTER att uppgiften lämnats in. Höll besluten? Var smet AI:n in ändå — och spelade det roll för vad de lärde sig?",
  ],

  kedjarMed: ["nando-veckan", "ai-eller-inte-sorteringen"],

  kalla: "banken",
};
