// Övningsbanken — "AI:n läste aldrig källan".
// Lateral läsning applicerad på AI-svar, byggd kring WKNA-fallet juni 2026:
// Reddit-skämt → AI-genererad fejksajt → AI-svar med källhänvisning.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "ai-laste-aldrig-kallan",
  titel: "AI:n läste aldrig källan",
  blurb:
    "AI:n gav dig en källhänvisning. Men finns källan? Är den äkta? Och har AI:n ens läst den?",
  syfte:
    "En källhänvisning i ett AI-svar KÄNNS som en garanti — men i juni 2026 rapporterade DuckDuckGos AI att presidenten dött av rabies, med prydlig hänvisning till en fejksajt som skrivit upp ett Reddit-skämt. Den här övningen ger eleverna tre frågor och en vana: lämna AI-svaret och kolla källan från utsidan. Det är faktagranskarnas metod — lateral läsning — flyttad till den plats eleverna faktiskt möter påståenden idag: AI-chatten.",

  domaner: ["mota"],
  aiLiteracyIds: [4],

  tid: "30–40 min",
  tidMinuter: 35,
  arskurser: "Åk 7–gymnasiet",
  digitalaVerktyg: true,
  material:
    "AI-verktyg som ger källhänvisningar (t.ex. Copilot med webbsökning) + webbläsare med flera flikar. Papper eller dokument för trekolumnstabellen.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "I juni 2026 rapporterade DuckDuckGos AI att presidenten dött av rabies — med källhänvisning till ”WKNA News”. Sajten såg ut som en nyhetssajt. Den var AI-genererad och hade skrivit upp ett skämt från Reddit-forumet r/poisonai. Kedjan: skämt → fejksajt → AI-svar med källa. Du ska träna tre frågor på ett AI-svar — Finns källan? Är källan äkta? Har AI:n faktiskt läst den? — och känna hur lång tid kollen tar. Det är den vanan du sen ska ge eleverna.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Ställ en fråga som tvingar fram källor",
          body: "Öppna Copilot (eller annat AI-verktyg med webbsökning) och fråga om något aktuellt eller specifikt: ”Vad säger forskningen om läxors effekt? Ange källor.” Eller en nyhetsfråga från den senaste veckan.",
        },
        {
          title: "Välj den mest övertygande källhänvisningen",
          body: "Ta den som ser mest seriös ut — fin titel, trovärdigt sajtnamn. Det är de källorna som lurar oss, inte de uppenbart skumma.",
        },
        {
          title: "Fråga 1 — Finns källan?",
          body: "Öppna en NY flik. Sök på källans exakta titel och sajtnamn. Hittar du den? AI:n kan hitta på både titlar och sajter som aldrig funnits.",
        },
        {
          title: "Fråga 2 — Är källan äkta?",
          body: "Nu lateral läsning: lämna källans egen sida. Sök på vad ANDRA säger om sajten — Wikipedia, nyhetsartiklar, sajtnamnet plus ”vem ligger bakom”. En AI-genererad innehållsfarm kan se ut precis som en redaktion, men ingen oberoende part brukar citera den.",
        },
        {
          title: "Fråga 3 — Har AI:n faktiskt läst den?",
          body: "Öppna källan och leta upp stället som ska stödja AI:ns påstående. Står det verkligen där? Ofta säger källan något mildare, äldre eller helt annat än vad AI-svaret påstår.",
        },
        {
          title: "Ta tid",
          body: "Notera hur lång tid hela kollen tog. Fem minuter? Tio? Det är priset för att VETA i stället för att känna — och en bra siffra att ha med sig in i klassrummet.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Om alla dina källor visar sig stämma",
      body: "Bra! Poängen är inte att AI alltid ljuger — det gör den inte. Poängen är att du inte VET förrän du kollat. Spara gärna ett exempel där något skaver: fel årtal, en källa som säger något försiktigare än AI:n påstår. De halvfelen är guld i klassrummet.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Kör övningen själv först — se ”prova själv”-läget. Då vet du hur lång tid kollen tar och vad eleverna kommer stöta på.",
        "Testa att skolans AI-verktyg faktiskt ger källhänvisningar. Copilot med webbsökning gör det; en ren chattmodell utan webb gör det inte — då faller övningen platt.",
        "Förbered WKNA-berättelsen som öppning: Reddit-skämtet på r/poisonai → den AI-genererade ”nyhetssajten” WKNA News → DuckDuckGos AI som rapporterade presidentens död av rabies med källhänvisning. Två minuter, ingen bild behövs — kedjan bär sig själv.",
        "Bestäm frågeområde: koppla till ditt ämne (”vad säger forskningen om…”, ”vad hände egentligen när…”) eller låt eleverna välja ur en kort lista du förberett.",
        "Rita trekolumnstabellen på tavlan: Finns källan? / Är den äkta? / Har AI:n läst den?",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Berätta WKNA-fallet",
          body: "Dra kedjan: skämt → fejksajt → AI-svar med källhänvisning. Låt den sjunka in. Fråga klassen: var i kedjan gick det fel? (Svaret är obekvämt: ingenstans OCH överallt — varje led gjorde bara det den var byggd för.)",
          time: "5 min",
        },
        {
          title: "Modellera live",
          body: "Ställ en fråga med källkrav på storskärm. Välj en källa och kör de tre frågorna högt — tänk högt, googla i ny flik, visa hur du LÄMNAR sidan för att kolla den. Det är själva modelleringen av lateral läsning.",
          time: "7 min",
        },
        {
          title: "Eleverna arbetar i par",
          body: "Egen fråga till AI:n, minst två källor granskade, tabellen ifylld. Cirkulera och fråga: ”har du lämnat sidan än, eller sitter du och tittar på den?”",
          time: "15 min",
        },
        {
          title: "Uppsamling",
          body: "Vem hittade en källa som inte fanns? Som fanns men sa något annat än AI:n påstod? Hur lång tid tog kollen per källa? Landa i regeln: källhänvisningen är en ADRESS, inte ett bevis — du måste åka dit.",
          time: "8 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Din viktigaste uppgift är att hålla i vad lateral läsning ÄR: att lämna sidan. Elevernas instinkt är att stirra på källan och bedöma utseendet — logga, layout, ”det ser seriöst ut”. Det är exakt den instinkten fejksajter är byggda för att utnyttja. Varje gång du ser en elev granska en sida inifrån: be hen öppna en ny flik.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Undvik ”AI är dålig”-fällan",
      body: "Övningen ska inte landa i att AI inte går att använda — då slutar eleverna bara lyssna, för de använder den ändå. Poängen är en vana som funkar oavsett hur bra AI:n blir: den som kollar källan från utsidan klarar sig även den dag fejksajterna blivit perfekta.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "I juni 2026 rapporterade en AI att USA:s president dött av rabies. Det var inte sant. Det började som ett skämt på Reddit — en AI-genererad ”nyhetssajt” skrev upp skämtet som en nyhet, och AI:n citerade sajten som källa. Källhänvisningen såg helt äkta ut. Idag lär du dig kolla det AI:n aldrig kollade.",
    },
    { type: "h", text: "Steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Ställ en fråga med källkrav",
          body: "Öppna AI-verktyget och ställ en fråga om något aktuellt eller något ni jobbar med, och avsluta med: ”Ange källor.”",
        },
        {
          title: "Välj en källa",
          body: "Ta den källhänvisning som ser mest trovärdig ut. Skriv upp dess titel och sajtnamn.",
        },
        {
          title: "Fråga 1 — Finns källan?",
          body: "Öppna en NY flik. Sök på källans exakta titel och sajtnamn. Hittar du den överhuvudtaget? Skriv ja eller nej i din tabell — och hur du vet.",
        },
        {
          title: "Fråga 2 — Är källan äkta?",
          body: "Stanna INTE på källans egen sida — där ser allt alltid bra ut. Sök i stället på vad andra säger om sajten: sajtnamnet plus ”vem ligger bakom”, kolla om Wikipedia eller riktiga nyhetssajter nämner den. Citerar någon oberoende den här källan?",
        },
        {
          title: "Fråga 3 — Har AI:n läst den?",
          body: "Öppna källan och leta upp stället som ska bevisa det AI:n sa. Står det verkligen där — eller säger källan något annat, mildare eller äldre?",
        },
        {
          title: "Gör om med en källa till",
          body: "Välj en till av AI:ns källor och kör samma tre frågor. Går det snabbare andra gången?",
        },
      ],
    },
    { type: "h", text: "Det här lämnar du in" },
    {
      type: "list",
      items: [
        "Frågan du ställde till AI:n.",
        "Tabellen: för varje granskad källa — Finns den? Är den äkta? Har AI:n läst den? — med en kort motivering per svar.",
        "Ditt slutbetyg på AI-svaret: håller det, håller det delvis, eller håller det inte? En mening om varför.",
      ],
    },
  ],

  diskussion: [
    "I kedjan skämt → fejksajt → AI-svar: var hade felet kunnat stoppas, och av vem?",
    "Varför känns en källhänvisning övertygande även när ingen har kollat den?",
    "Vems ansvar är det att källan stämmer — AI-företagets, sajtens eller din som läser?",
    "Hur många källor hann du kolla på en lektion? Vad säger det om alla AI-svar du möter en vanlig vecka?",
  ],

  fallgropar: [
    "Elever bedömer källans UTSEENDE i stället för att lämna sidan. Lateral läsning är hela poängen — cirkulera och fråga ”vad säger andra om den här sajten?” tills det sitter.",
    "Om skolans AI-verktyg inte ger källhänvisningar faller övningen ihop. Testa i förväg — och ha en reservplan med skärmdumpar av AI-svar du förberett.",
    "Övningen kan tippa över i ”allt är fejk”-cynism. Lyft aktivt exemplen där källorna höll — målet är kollande, inte misstro mot allt.",
  ],

  evidens: [
    {
      ref: "wineburg-mcgrew-2017",
      relevance:
        "Faktagranskarnas metod — lämna sidan och kolla vad andra säger om källan — är exakt det eleverna tränar här, nu applicerat på AI-svar i stället för webbsidor.",
    },
    {
      ref: "wkna-rabies-2026",
      relevance:
        "Det verkliga fallet övningen byggs kring: en prydlig källhänvisning kan peka på en AI-genererad fejksajt, och AI:n märker inte skillnaden.",
    },
  ],

  variationer: [
    "Yngre elever (åk 7) eller ont om tid: förbered tre AI-svar med källor i förväg — ett där källan håller, ett där källan finns men säger något annat, ett där källan inte finns. Alla granskar samma material och ni jämför fynd.",
    "Fördjupning för gymnasiet: låt eleverna spåra HELA kedjan för ett viralt påstående — var föddes det, vem skrev upp det först, vilka citerade varandra? En lektion blir snabbt till två.",
  ],

  kedjarMed: ["detektiv-utan-detektor", "hallucinationsjakten"],

  kalla: "banken",
};
