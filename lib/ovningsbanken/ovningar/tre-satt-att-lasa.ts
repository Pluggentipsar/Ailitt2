// Övningsbanken — Tre sätt att läsa samma text (Styra + Skapa)
// Tillgänglighetsövning där ALLA provar: samma faktatext möts på fyra sätt —
// originalet, AI-uppläst, AI-förenklad och som AI-byggd tankekarta. Eleverna
// roterar, betygsätter per format och upptäcker att "rätt format" är
// personligt och uppgiftsberoende. Ingen pekas ut — det är hela metoden.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "tre-satt-att-lasa",
  titel: "Tre sätt att läsa samma text",
  blurb:
    "Samma faktatext på fyra vägar in — originalet, uppläst, AI-förenklad och som tankekarta. Alla provar allt, och klassen upptäcker att ”rätt format” inte är samma för någon.",
  syfte:
    "Anpassade läromedel har alltid funnits — men bara för de elever som fått dem tilldelade, och det har alltid synts vem som fick. Här vänder vi på det: ALLA möter samma faktatext på fyra sätt — originalet plus tre AI-byggda vägar in (uppläst, förenklad, tankekarta) — och betygsätter vad som fastnade och hur det kändes. Klassen upptäcker att inget format vinner för alla, och att ens eget bästa format dessutom byter beroende på uppgift. AI som läromedelsanpassare är en superkraft för alla — och livsviktig för några.",

  domaner: ["styra", "skapa"],
  aiLiteracyIds: [2, 5],

  tid: "40 min",
  tidMinuter: 40,
  arskurser: "Åk 4–gymnasiet",
  digitalaVerktyg: true,
  material:
    "En faktatext i fyra versioner (original, uppläst, AI-förenklad, AI-tankekarta), fyra stationer, hörlurar till uppläsningsstationen, ett utvärderingskort per elev.",
  varning:
    "Peka aldrig ut vilka elever ett visst format ”egentligen” är till för. Hela poängen är att alla provar allt — formatval ska vara ett verktyg man väljer, inte en diagnos man får.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska bygga de fyra versionerna av en text du redan använder och gå igenom dem själv. Två saker kommer överraska dig: hur fort AI:n bygger versionerna (minuter, inte kvällar) och att din egen ranking förmodligen inte ser ut som du trodde. Först när du känt det själv kan du sälja in poängen till klassen: det här handlar inte om svaga läsare — det handlar om alla.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj en faktatext du redan använder",
          body: "En halv till en sida ur läromedlet eller en artikel du ändå tänkt dela ut. Riktigt innehåll ger riktiga upptäckter — en påhittad övningstext gör experimentet tandlöst.",
        },
        {
          title: "Bygg den förenklade versionen",
          body: "Klistra in texten i valfri AI med prompten: ”Förenkla texten nedan för en elev i [årskurs] som tycker den är svår. Kortare meningar, vanligare ord, fler radbrytningar och en kort ordlista på slutet. Ändra INGA sakuppgifter.” Läs sen versionen mot originalet — förenkling är den vanligaste platsen för små faktaglidningar.",
        },
        {
          title: "Bygg tankekartan",
          body: "Ny prompt: ”Gör om texten nedan till en tankekarta i text: det viktigaste begreppet i mitten, 4–6 grenar, max fem ord per gren.” Vill du ha den snyggare kan du be om en punktlista med indrag och rita upp den — men textversionen räcker för övningen.",
        },
        {
          title: "Fixa uppläsningen",
          body: "Enklaste vägen är den inbyggda: ”Läs högt” i Word eller Edge, eller talsyntesen i er lärplattform. Alternativt låter du ett AI-röstläge läsa texten. Poängen är örat som väg in — inte vilken röst som läser.",
        },
        {
          title: "Gå igenom alla fyra och betygsätt",
          body: "Per format, två snabba betyg 1–5: hur mycket fastnade? Hur kändes det? Notera var DU hamnar — och gissa sen hur en kollega skulle ranka. Fråga gärna en på riktigt: era listor lär inte matcha, och det är precis det klassrumsfyndet du är ute efter.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska leta efter",
      body: "Din egen förvåning. De flesta lärare upptäcker att minst ett format de avfärdat funkar bättre än de trodde — ofta det upplästa. Den förvåningen är exakt vad eleverna ska få känna. Och du har samtidigt lärt dig något användbart: fyra versioner av vilken text som helst kostar numera en kvart.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Bygg de fyra versionerna i förväg (se Prova själv) — räkna med 15–20 minuter totalt. Faktakolla den förenklade versionen mot originalet innan lektion.",
        "Rigga fyra stationer: Original · Uppläst · Förenklad · Tankekarta. Uppläsningsstationen behöver hörlurar eller en tyst hörna — det är den som oftast fallerar logistiskt, så testa tekniken innan.",
        "Skriv ut ett utvärderingskort per elev: fyra rader (en per format), två kolumner (”Hur mycket fastnade?” 1–5 och ”Hur kändes det?” 1–5) plus en fri rad längst ner: ”Det här formatet passar mig bäst när …”.",
        "Dela klassen i fyra grupper som STARTAR på olika stationer. Annars mäter ni ordningseffekten — fjärde mötet med samma text känns alltid lättast — i stället för formaten.",
      ],
    },
    {
      type: "p",
      text: "Fyll i nedan så projiceras texten och gruppindelningen — stationsrotation är den övning där flest minuter går åt till att förklara vem som ska vart, och en slide med indelningen sparar dem.",
    },
    {
      type: "lararfalt",
      id: "texten",
      label: "Vilken text gäller det?",
      placeholder: "T.ex. ”Fotosyntesen” ur läroboken s. 84–85",
      hint: "Projiceras i inramningen.",
      rader: 1,
    },
    {
      type: "p",
      text: "Klistrar du in versionerna nedan får varje station en egen slide — och PDF-exporten blir stationsmaterialet, en version per liggande sida. Då slipper du bygga fyra utskrifter separat. Uppläsningsstationen behöver förstås ljud ändå; där räcker originaltexten på sliden som stöd.",
    },
    {
      type: "lararfalt",
      id: "version-original",
      label: "Originaltexten",
      placeholder: "Klistra in texten som den står i läromedlet.",
      hint: "Projiceras på originalstationens slide och blir dess sida i PDF:en.",
      rader: 8,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "version-forenklad",
      label: "Den AI-förenklade versionen",
      placeholder: "Klistra in AI-versionen — faktakollad mot originalet.",
      hint: "Faktakolla innan lektionen. En förenkling som glidit är sämre än ingen.",
      rader: 8,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "version-tankekarta",
      label: "Tankekartan",
      placeholder:
        "Klistra in bildlänk till kartan, eller skriv den som punktlista.",
      hint: "En bildlänk som slutar på .png eller .jpg visas som bild.",
      rader: 5,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "gruppindelning",
      label: "Vem börjar var?",
      placeholder:
        "Grupp 1 → Original\nGrupp 2 → Uppläst\nGrupp 3 → Förenklad\nGrupp 4 → Tankekarta",
      hint: "Projiceras vid start. Olika startstationer är nödvändigt — annars mäter ni ordningseffekten.",
      rader: 5,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in",
          body: "Säg det rakt: ”Vi ska inte testa hur bra ni läser. Vi ska testa hur TEXTEN funkar — i fyra olika format. Samma text, fyra vägar in.” Visa utvärderingskortet och betona att det inte finns något rätt svar — kortet är en formatprofil, inte ett prov.",
          time: "5 min",
        },
        {
          title: "Rotationen",
          body: "Fyra stationer à sex minuter. Eleverna möter texten i stationens format, fyller i kortets rad direkt efteråt och roterar på signal. Eftersom texten är densamma går senare stationer fortare — säg det öppet och styr fokus: bedöm formatet, inte innehållet. Vad blir lätt? Vad blir jobbigt? Vad gör formatet med koncentrationen?",
          time: "24 min",
        },
        {
          title: "Klassbilden",
          body: "Rita fyra kolumner på tavlan och låt varje elev sätta ett streck vid sitt TOPPFORMAT. Poängen syns direkt: strecken sprider sig över alla fyra kolumner. Det finns inget format som vann för alla — och det är inte ett problem, det är resultatet.",
          time: "6 min",
        },
        {
          title: "Landa",
          body: "Knyt ihop: AI kan bygga alla fyra versionerna av vilken text som helst på några minuter. Formatet är inte längre något man måste be om — det är något man kan välja. Superkraft för alla, livsviktig för några. Och: ditt toppformat idag är inte ditt toppformat alltid — plugga detaljer, få överblick och förstå på djupet är olika uppgifter.",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Det här är en tillgänglighetsövning förklädd till formatexperiment — och förklädnaden är själva metoden. I klassen sitter sannolikt elever med dyslexi, NPF eller koncentrationssvårigheter som kämpar med originalformatet varje dag utan att någonsin få cred för det. När ALLA provar och ALLA har ett toppformat slutar uppläsning och förenkling vara ”stödinsatser för vissa” och blir verktyg i allas låda. Säg aldrig ”det här är bra för dig som har svårt att läsa” — säg ”det här är bra när texten är svår, och alla texter är svåra ibland”.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Formatval som verktyg, inte diagnos",
      body: "Låt formatvalet bli på riktigt efter övningen. Nästa gång du delar en text: lägg originalet OCH den förenklade versionen OCH tankekartan i samma inlägg i Teams/Vklass — till hela klassen. Den som väljer den upplästa vägen ska inte behöva be om den. Det är skillnaden mellan att ha pratat om tillgänglighet och att ha byggt den.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Du ska möta samma faktatext på fyra olika sätt: som den är, uppläst, förenklad av AI och som en tankekarta byggd av AI. Det här är inte ett lästest — det är ett formattest. Frågan är inte hur bra du läser, utan hur texten funkar för dig i olika format.",
    },
    { type: "h", text: "Så gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Du börjar vid en av fyra stationer. Möt texten i det format som finns där — läs, lyssna eller följ kartan.",
        "Direkt efteråt: fyll i radens två betyg på ditt kort. Hur mycket fastnade (1–5)? Hur kändes det (1–5)?",
        "Rotera när läraren säger till. Samma sak vid varje station.",
        "Texten är samma hela tiden — det är meningen. Fokusera på formatet: vad blir lätt, vad blir jobbigt, vad gör formatet med din koncentration?",
        "När du mött alla fyra: fyll i sista raden — ”Det här formatet passar mig bäst när …”.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Det finns inget rätt svar",
      body: "Kompisens topplista kommer inte se ut som din — det är hela poängen. Och ditt eget bästa format kan byta beroende på vad du ska göra: plugga inför prov, snabbt få överblick eller förstå något svårt på djupet är tre olika jobb.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Lämna in ditt utvärderingskort med alla fyra rader ifyllda plus meningen ”Det här formatet passar mig bäst när …”. Kortet är din formatprofil — ta gärna en bild av det innan du lämnar in. Du kommer ha nytta av den nästa gång en text känns omöjlig.",
    },
  ],

  // Klassrumsspår. Stationsrotation kräver att indelning och signaler står på
  // skärmen — det är den övningen där flest minuter går åt till logistik.
  // Ledarrollens språkregel ligger medvetet INTE här: den är till läraren, och
  // formuleringen "bra för dig som har svårt att läsa" är just det som inte
  // ska sägas i rummet.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Samma text. Fyra vägar in." },
        {
          type: "p",
          text: "Vi testar inte hur bra ni läser. Vi testar hur texten funkar.",
        },
      ],
    },
    {
      etikett: "Texten",
      blocks: [{ type: "lararfalt", id: "texten", label: "Texten" }],
    },
    {
      etikett: "Fyra stationer",
      blocks: [
        {
          type: "list",
          items: ["Original", "Uppläst", "Förenklad av AI", "Tankekarta"],
        },
      ],
    },
    {
      etikett: "Vem börjar var",
      blocks: [
        { type: "lararfalt", id: "gruppindelning", label: "Gruppindelning" },
      ],
    },
    {
      etikett: "Station · Original",
      blocks: [
        { type: "lararfalt", id: "version-original", label: "Originalet", valfri: true },
      ],
    },
    {
      etikett: "Station · Förenklad av AI",
      blocks: [
        { type: "lararfalt", id: "version-forenklad", label: "Förenklad", valfri: true },
      ],
    },
    {
      etikett: "Station · Tankekarta",
      blocks: [
        { type: "lararfalt", id: "version-tankekarta", label: "Tankekarta", valfri: true },
      ],
    },
    {
      etikett: "Efter varje station",
      blocks: [
        {
          type: "list",
          items: [
            "Hur mycket fastnade? 1–5",
            "Hur kändes det? 1–5",
          ],
        },
      ],
    },
    {
      etikett: "Inget rätt svar",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Kortet är en formatprofil",
          body: "Inte ett prov.",
        },
      ],
    },
    {
      etikett: "Texten är densamma hela tiden",
      blocks: [
        {
          type: "p",
          text: "Det är meningen. Bedöm formatet, inte innehållet.",
        },
      ],
    },
    {
      etikett: "Sista raden på kortet",
      blocks: [
        { type: "h", text: "Det här formatet passar mig bäst när …" },
      ],
    },
    {
      etikett: "Klassbilden",
      blocks: [
        {
          type: "p",
          text: "Sätt ett streck vid ditt toppformat.",
        },
      ],
    },
    {
      etikett: "Titta på strecken",
      blocks: [
        {
          type: "h",
          text: "Inget format vann för alla",
        },
        { type: "p", text: "Det är inte ett problem. Det är resultatet." },
      ],
    },
    {
      etikett: "Och nu det användbara",
      blocks: [
        {
          type: "p",
          text: "AI kan bygga alla fyra versionerna av vilken text som helst på några minuter.",
        },
      ],
    },
    {
      etikett: "Alltså",
      blocks: [
        {
          type: "h",
          text: "Formatet är inte längre något man ber om — det är något man väljer",
        },
      ],
    },
    {
      etikett: "En sista sak",
      blocks: [
        {
          type: "p",
          text: "Ditt toppformat idag är inte ditt toppformat alltid. Plugga detaljer, få överblick och förstå på djupet är olika uppgifter.",
        },
      ],
    },
  ],

  diskussion: [
    "Vilket format toppade flest kort i klassen — och varför tror ni att strecken ändå spred sig över alla fyra kolumnerna?",
    "När skulle ditt toppformat vara FEL val? (Ledtråd: att plugga detaljer inför ett prov och att snabbt skaffa överblick är olika uppgifter.)",
    "Före AI tog det timmar att bygga en förenklad version eller en tankekarta — nu tar det minuter. Vad borde det förändra i hur skolan delar ut texter?",
    "Är något av formaten ”fusk”? Var går gränsen mellan att förenkla en text och att förlora något ur den?",
  ],

  fallgropar: [
    "Ordningseffekten äter upp resultatet — fjärde mötet med samma text känns alltid lättast, oavsett format. Motdrag: fyra grupper som startar på olika stationer, och prata öppet om effekten när klassbilden byggs.",
    "Den förenklade versionen innehåller en faktaglidning som ingen upptäcker. Faktakolla den mot originalet i förväg — eller gör upptäckten till ett extrauppdrag för snabba elever: ”hitta vad förenklingen tappade”.",
    "Övningen glider till att handla om vilka elever som ”behöver” vissa format. Bryt direkt: alla betygsätter, alla har ett toppformat, ingen kommenterar någon annans kort.",
  ],

  evidens: [
    {
      ref: "cast-udl-2024",
      relevance:
        "UDL-ramverkets kärnprincip är exakt övningens design: erbjud flera vägar in i innehållet för ALLA elever från start, i stället för att anpassa i efterhand för några. Formatstationerna är UDL:s ”multiple means of representation” i miniatyr — och AI:n gör principen praktiskt genomförbar i vardagen.",
    },
    {
      ref: "wood-2018",
      relevance:
        "Meta-analysen visar att uppläsning och talsyntes förbättrar läsförståelsen för elever med lässvårigheter. Det är evidensen bakom stationen som brukar överraska flest: uppläst text är inte en genväg förbi läsningen — det är en fungerande väg in i innehållet.",
    },
  ],

  variationer: [
    "Yngre (åk 4–6): kör tre format i stället för fyra (original, uppläst, förenklad) och bygg klassbilden med klistermärken — konkret, snabbt och lika tydligt.",
    "Äldre (åk 9–gymnasiet): låt eleverna bygga de fyra versionerna SJÄLVA av nästa text med promptarna ur övningen. Då tränar de samtidigt att beställa anpassningar — och upptäcker att faktakollen av den förenklade versionen är svårare än den ser ut.",
  ],

  kedjarMed: ["nando-veckan", "prata-dig-till-kunskap"],

  kalla: "banken",
};
