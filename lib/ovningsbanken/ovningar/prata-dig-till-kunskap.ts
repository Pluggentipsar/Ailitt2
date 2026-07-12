// Övningsbanken — Prata dig till kunskap (Skapa med AI)
// Muntligt förhör via AI:ns röstläge: eleven pratar sig igenom området och
// jämför sedan med textförhör — vad fastnade bäst? Syskonövning till
// Förhörs-AI:n: skillnaden är modalitet, inte metod. Språklärarens guld:
// hela förhöret kan ske på målspråket, utan publik.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "prata-dig-till-kunskap",
  titel: "Prata dig till kunskap",
  blurb:
    "Förhör dig genom att prata med AI:ns röstläge — och jämför med textförhöret: vad fastnade bäst? I språkämnena sker hela förhöret på målspråket.",
  syfte:
    "Det här är syskonövningen till Förhörs-AI:n — skillnaden är modalitet, inte metod. Förhörs-AI:n bygger vanan att förhöra sig i text; här byter eleven kanal till rösten och undersöker vad bytet gör: i röstförhöret går det inte att skumma, redigera eller kolla i smyg — varje lucka hörs. Eleven kör samma område i båda kanalerna och landar i en egen kanalregel: röst när uttal, flyt och tänka-högt är poängen, text när översikt och exakthet är det. För språkämnena är det guld — förhöret kan ske helt på målspråket.",

  domaner: ["skapa"],
  aiLiteracyIds: [2],

  tid: "25 min + hemvana",
  tidMinuter: 25,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: true,
  material:
    "AI-verktyg med röstläge (enligt skolans riktlinjer), hörlurar med mikrofon, promptmallarna kopierbara i Teams/Vklass, ett område eleverna redan har mött.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska förhöra dig själv två gånger på samma innehåll — en gång i text, en gång i röst — och känna skillnaden i kroppen. Ta något du faktiskt behöver kunna: nästa arbetsområde, en presentation du ska hålla, glosor i ett språk du själv lär dig. Det du letar efter är inte vilken kanal som är ”bäst” utan VAD som blir annorlunda: i rösten tvingas du formulera färdigt, kan inte skumma — och märker direkt var orden tar slut.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Kör textförhöret först",
          body: "Prompten: ”Förhör mig på [område]. En fråga i taget, vänta på mitt svar, säg om jag har rätt och ställ en följdfråga som går djupare. Ge mig aldrig svaret innan jag försökt själv.” Skriv dina svar utan anteckningar framme. Fem minuter räcker.",
        },
        {
          title: "Byt till röstläget",
          body: "Samma prompt, men nu pratar du. Sätt på hörlurar, lägg bort anteckningarna och svara högt. Låt det kännas ovant — det är själva datat du samlar in.",
        },
        {
          title: "Känn efter var skillnaden sitter",
          body: "I rösten kan du inte redigera, inte skumma, inte googla i smyg. Varje tvekan hörs. Det är jobbigare — och det är precis därför det fastnar. Notera också tänka-högt-effekten: du börjar resonera dig fram i stället för att leta perfekta formuleringar.",
        },
        {
          title: "Testa målspråksläget",
          body: "Undervisar du i språk — eller lär dig ett själv? Lägg till: ”Håll hela samtalet på [språket]. Anpassa dig till min nivå och rätta mina fel vänligt efteråt, inte mitt i.” Tio minuter senare har du haft mer sammanhängande talträning än många elever får på en vecka.",
        },
        {
          title: "Skriv din kanalregel",
          body: "En mening: ”Jag väljer röst när … och text när …”. Det är exakt den meningen eleverna ska skriva — och nu vet du hur svår eller lätt den är att fylla i ärligt.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lyssna efter",
      body: "Tänka-högt-effekten är övningens dolda skatt: i röstförhöret hör du ditt eget tänkande medan det pågår. Många elever har aldrig fått syn på sitt tänkande på det sättet — de har bara sett slutprodukten i skrift. Det är värt att säga högt i klassrummet.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Kolla vilket verktyg med röstläge ni får använda enligt skolans riktlinjer — och testa själv att det funkar på skolans nät och enheter innan lektionen. Röstläget är övningens enda tekniska risk.",
        "Hörlurar med mikrofon till alla. 25 elever som pratar med varsin AI utan hörlurar är kaos — alternativen är halvklass, korridor och grupprum, eller att röstdelen görs hemma.",
        "Lägg båda promptmallarna kopierbara i Teams/Vklass (se elevinstruktionen). Språkklass? Lägg till målspråksraden i mallen direkt.",
        "Välj ett område eleverna redan mött. Förhör funkar på det man börjat lära sig — inte på det man aldrig sett.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in",
          body: "Säg det forskningen säger: att plocka fram ur minnet ÄR inlärningen — förhör är plugg, inte prov. Idag testar vi samma metod i två kanaler. Dela klassen: ena halvan börjar med röst, andra med text — så att ordningen inte avgör jämförelsen.",
          time: "4 min",
        },
        {
          title: "Runda ett",
          body: "Halva klassen kör röstförhör med hörlurar, halva kör textförhör. Samma område, samma promptmall. Gå runt och lyssna efter att det är ELEVEN som svarar — inte AI:n som föreläser.",
          time: "8 min",
        },
        {
          title: "Byt kanal",
          body: "Samma område, andra kanalen. Det känns som repetition — det är det också, och det är en del av poängen: andra varvet avslöjar vad första varvet faktiskt satte.",
          time: "8 min",
        },
        {
          title: "Kanalregeln",
          body: "Var och en skriver sin mening: ”Jag väljer röst när … och text när …”. Lyft tre–fyra högt. Landa: kanalvalet är ditt — men det ska vara ett val, inte en slump. Ge sen hemvanan: den som vill förhör sig i sin valda kanal inför nästa läxa.",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Undervisar du i språk sitter du på övningens starkaste tillämpning: röstläget är obegränsad talträning utan publik. Talängslan — rädslan att säga fel inför klassen — är en av de mest dokumenterade bromsarna i språkklassrummet, och AI:n är den enda samtalspartnern som aldrig himlar med ögonen, aldrig skrattar och aldrig tröttnar på att upprepa. En elev som inte vågat säga en mening högt på spanska på hela terminen kan prata i tio minuter med ett röstläge. Det ersätter inte klassrumssamtalet — det bygger modet som klassrumssamtalet kräver.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Röst är inte bättre — den är annorlunda",
      body: "Låt inte övningen landa i att röst vinner. Text vinner när eleven behöver översikt, exakt stavning, formler eller tid att tänka. Röst vinner vid uttal, flyt, tänka högt — och när skärmtröttheten slagit till. Målet är en elev som väljer kanal efter uppgift, inte en som alltid gör likadant.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Du ska förhöra dig på samma område två gånger — en gång genom att PRATA med AI:n och en gång genom att skriva. Det låter dubbelt. Det är meningen: samma kunskap genom två olika kanaler, och du ska ta reda på vilken som funkar bäst för dig.",
    },
    { type: "h", text: "Så gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Kopiera förhörsprompten: ”Förhör mig på [område]. En fråga i taget, vänta på mitt svar, säg om jag har rätt och ställ en följdfråga som går djupare. Ge mig aldrig svaret innan jag försökt själv.”",
        "Kör den kanal läraren sagt att du börjar med. Röst: sätt på hörlurarna och PRATA dina svar. Text: skriv dina svar. Inga anteckningar framme i någon av kanalerna.",
        "Byt kanal och kör samma område igen.",
        "Läser du ett språk? Lägg till i prompten: ”Håll hela samtalet på [språket]. Rätta mina fel vänligt efteråt, inte mitt i.”",
        "Skriv din kanalregel: ”Jag väljer röst när … och text när …” — fyll i båda delarna ärligt.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Om det känns läskigt att prata",
      body: "Ingen hör dig utom AI:n — och den varken skrattar, suckar eller berättar för någon. Säger du fel? Bra. Det är så förhör funkar: luckan du hittar nu är luckan du slipper hitta på provet.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Lämna in din kanalregel plus två saker till: en fråga du klarade i båda kanalerna, och en lucka du hittade — och vilken kanal som hittade den.",
    },
  ],

  diskussion: [
    "Vad fastnade bäst — det du pratade fram eller det du skrev fram? Var klassen överens?",
    "I röstförhöret går det inte att skumma, redigera eller kolla i smyg. Gör det förhöret bättre eller bara jobbigare — och är det skillnad på de två?",
    "När är text helt överlägset? Tänk formler, stavning, långa resonemang du vill se framför dig.",
    "Om AI:n aldrig tröttnar på att förhöra dig — vems ansvar blir det då att förhöret faktiskt blir av?",
  ],

  fallgropar: [
    "Logistiken äter lektionen: röstläge som inte funkar på skolnätet, hörlurar som saknas. Testa allt själv i förväg — och ha textförhöret som reservplan för alla.",
    "Förhöret glider till att AI:n håller låda: den förklarar och eleven lyssnar. Då är det inte förhör längre — det är den mest bekväma formen av att inte plugga. Promptens rad ”ge mig aldrig svaret innan jag försökt” är övningens viktigaste mening; kolla att den finns kvar.",
    "Jämförelsen tappas bort och lektionen blir bara ”testa röstläget”. Kanalregeln på slutet är obligatorisk — det är den som gör upplevelsen till ett medvetet val i stället för en kul grej.",
  ],

  evidens: [
    {
      ref: "roediger-karpicke-2006",
      relevance:
        "Testing effect-studien: att plocka fram kunskap ur minnet ger varaktigare lärande än att läsa om samma material. Det är förhörets vetenskapliga motor — och den gäller oavsett kanal, vilket är precis varför kanalvalet kan få handla om vad som passar eleven och uppgiften.",
    },
    {
      ref: "horwitz-1986",
      relevance:
        "Studien som gav språkängslan namn och mätinstrument: rädslan att tala inför andra är en egen, mätbar broms i språkinlärningen. Röstläget kopplar bort publiken — därför kan förhör på målspråket med AI låsa upp elever som tystnat i klassrummet.",
    },
  ],

  variationer: [
    "Yngre (åk 6–7): kör röstförhöret i helklass först — projicera, låt AI:n fråga och klassen turas om att svara högt. När formen sitter: parvis eller hemma.",
    "Moderna språk: gör röstförhöret till stående hemvana — fem minuter på målspråket inför varje läxförhör. Be AI:n avsluta varje pass med tre ord eller fraser att träna vidare på till nästa gång.",
  ],

  kedjarMed: ["forhors-ai", "tre-satt-att-lasa"],

  kalla: "banken",
};
