// Övningsbanken — Model card för skolans AI (Forma AI + Styra AI)
// Riktiga AI-labb publicerar model cards — produktblad som deklarerar vad
// modellen tränats på, var den brister och vad den inte bör användas till.
// Eleverna skriver ett för ett verktyg de själva använder.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "model-card-for-skolans-ai",
  titel: "Model card för skolans AI",
  blurb:
    "AI-labben skriver produktblad om sina modellers brister. Nu gör dina elever samma sak — för verktygen de använder varje dag.",
  syfte:
    "Riktiga AI-labb publicerar ”model cards” — produktblad som öppet deklarerar vad modellen tränats på, vad den är bra på, var den brister och vad den inte bör användas till. Det är branschens eget erkännande av att AI är designval med begränsningar. När eleverna skriver ett model card för Copilot, TikTok-flödet eller Snap AI byter de roll: från konsument till granskare. Och de landar i Shape-tanken — designval kan ifrågasättas och göras om.",

  domaner: ["forma", "styra"],
  aiLiteracyIds: [1, 3, 6],

  tid: "40–60 min",
  tidMinuter: 50,
  arskurser: "Åk 8–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Datorer eller mobiler för research, A3-papper eller digitalt postermall med de sex fälten, ett riktigt model card att visa som förebild på storskärm.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska skriva ett model card för ett AI-verktyg du själv använder — förslagsvis det du använder mest i jobbet. Poängen med att göra det själv först: du kommer fastna på samma ställen som eleverna (”vad ÄR den egentligen tränad på?”) och upptäcka att tomrummen är övningens egentliga innehåll. Det du inte kan ta reda på om verktyget säger något om tillverkarens transparens.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Titta på förebilden",
          body: "Öppna ett riktigt model card — sök på ”model card” på Hugging Face, eller öppna OpenAI:s eller Anthropics system card för deras senaste modell. Läs inte allt: skumma RUBRIKERNA. Notera att labben själva skriver saker som ”limitations” och ”out-of-scope use”. De deklarerar sina egna brister.",
        },
        {
          title: "Välj ditt verktyg",
          body: "Ta det AI-verktyg du faktiskt använder mest — Copilot, ChatGPT, Gemini, eller för den delen Spotify-rekommendationerna. Egen erfarenhet krävs: ett model card för ett verktyg man inte använder blir bara gissningar.",
        },
        {
          title: "Fyll i de sex fälten",
          body: "1) Vad tränades den på — vad VET vi och vad vet vi INTE? 2) Vem byggde den och varför — vad tjänar de på den? 3) Vad är den bra på? 4) Var brister den? 5) När ska man INTE använda den? 6) Vilka regler borde gälla i skolan?",
        },
        {
          title: "Notera var du fastnar",
          body: "”Vet inte” är ett fynd, inte ett misslyckande. Skriv ut det i kortet: ”Träningsdata: ej redovisad av tillverkaren.” Det är skillnaden mellan ett reklamblad och en granskning.",
        },
        {
          title: "Ställ slutfrågan",
          body: "Vad hade du VELAT att tillverkaren deklarerade som den inte gör? Den frågan är det eleverna sen ska ta med sig ut i världen — kravet på att få veta.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Tomrummen är hemliga poängen",
      body: "Ett färdigt model card med tre ärliga ”vet inte — tillverkaren redovisar inte detta” är ett BÄTTRE resultat än ett kort fullt av påhittade svar. Varje tomrum är ett transparenskrav som eleverna formulerat själva.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Välj ett riktigt model card att visa som förebild — ett kort och läsbart från Hugging Face funkar bra, liksom rubriksidorna i ett system card från OpenAI eller Anthropic. Du ska bara visa STRUKTUREN, inte läsa innehållet.",
        "Förbered mallen med de sex fälten (tränad på / byggd av vem och varför / bra på / brister / använd INTE till / skolregler) som A3-poster eller delbart dokument.",
        "Gör en verktygslista att välja från så grupperna kommer igång snabbt: Copilot, ChatGPT, Gemini, Snap AI, TikTok-flödet, YouTube-rekommendationer, Spotify. Regel: gruppen måste själv använda verktyget.",
        "Bestäm redovisningsform i förväg: poster-vernissage (alla kort uppsatta, klassen vandrar) eller 90-sekunderspitch per grupp.",
      ],
    },
    {
      type: "p",
      text: "Fyll i nedan. Länkfältet visar förebilden direkt på skärmen om du klistrar in en bildlänk — annars öppnar du sidan i en flik som förut. Verktygslistan och de sex fälten projiceras, så du slipper dela ut mallen muntligt.",
    },
    {
      type: "lararfalt",
      id: "forebilden",
      label: "Förebilden — länk eller bild",
      placeholder: "https://huggingface.co/… eller en bildlänk till kortets rubriksida",
      hint: "Slutar länken på .png eller .jpg visas den som bild på sliden. Du ska visa STRUKTUREN, inte läsa innehållet.",
      rader: 1,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "verktygslistan",
      label: "Verktyg grupperna väljer bland",
      placeholder:
        "Copilot\nChatGPT\nGemini\nSnap AI\nTikTok-flödet\nYouTube-rekommendationer\nSpotify",
      hint: "Regeln: gruppen måste själv använda verktyget. Projiceras när de ska välja.",
      rader: 5,
    },
    {
      type: "lararfalt",
      id: "redovisningsform",
      label: "Redovisningsform",
      placeholder: "Poster-vernissage — korten uppsatta, klassen vandrar",
      hint: "Projiceras före redovisningen.",
      rader: 1,
      valfri: true,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Visa förebilden",
          body: "Visa det riktiga model cardet på storskärm. Landa den centrala poängen: det här är inte kritikernas dokument — det är LABBETS EGET. AI-företagen deklarerar själva vad modellen inte klarar och inte bör användas till. Fråga klassen: varför gör de det, tror ni?",
          time: "10 min",
        },
        {
          title: "Välj verktyg och gör research",
          body: "Grupper om 2–3 väljer ett verktyg de själva använder. De letar: vem har byggt det, vad är känt om träningsdatan, vad säger tillverkaren själv? Lika viktigt: de noterar vad som INTE går att ta reda på. Gå runt och påminn om att ”vet inte” skrivs in i kortet, inte hittas på.",
          time: "15 min",
        },
        {
          title: "Skriv kortet",
          body: "Grupperna fyller de sex fälten. Pressa på fält 2 (vem byggde och varför — vad tjänar de på att du använder den?) och fält 5 (när ska man INTE använda den?) — det är där granskningen skiljer sig från en recension.",
          time: "15 min",
        },
        {
          title: "Redovisa",
          body: "Poster-vernissage eller pitch. Be lyssnarna jämföra: vilka fält kunde grupperna fylla, vilka gapar tomma — och är det samma tomrum hos alla verktyg?",
          time: "10–15 min",
        },
        {
          title: "Landa Shape-tanken",
          body: "Knyt ihop: allt i korten — träningsdata, syfte, brister, gränser — är DESIGNVAL som människor gjort. Och designval kan ifrågasättas och göras om. Model cardet finns för att någon krävde det. Vad skulle klassen kräva?",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Bedömning och efterarbete" },
    {
      type: "p",
      text: "Bedöm inte tekniska rätt och fel — bedöm kvaliteten i granskningen: Ställer kortet skarpa frågor? Är ”vet inte”-rutorna ärligt redovisade i stället för ifyllda med gissningar? Är skolreglerna i fält 6 motiverade utifrån fälten 1–5, inte bara tyckande? Ett kort med välmotiverade tomrum slår ett kort med påhittad fullständighet.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Låt korten leva vidare",
      body: "Sätt upp korten i klassrummet och uppdatera dem när verktygen uppdateras. Eller växla upp: skicka klassens bästa kort till rektor eller IKT-ansvarig som elevernas remissvar på skolans AI-verktyg. Då blev övningen på riktigt.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "AI-företagen skriver ”model cards” — produktblad där de själva deklarerar vad deras modell är tränad på, vad den är bra på, var den brister och vad den INTE bör användas till. Nu ska du skriva ett sådant — för ett AI-verktyg du själv använder. Du byter roll: från användare till granskare.",
    },
    { type: "h", text: "Steg för steg" },
    {
      type: "list",
      ordered: true,
      items: [
        "Titta på det riktiga model cardet läraren visar. Notera rubrikerna — företaget listar själv sina brister.",
        "Välj i gruppen ett AI-verktyg ni FAKTISKT använder: Copilot, ChatGPT, Snap AI, TikTok-flödet, YouTube-rekommendationer…",
        "Gör research: vem har byggt verktyget? Vad säger tillverkaren om hur det tränats? Vad säger andra källor?",
        "Fyll i kortets sex fält (se nedan). Regel: det ni inte kan ta reda på skriver ni som ”vet inte — tillverkaren redovisar inte detta”. Hitta ALDRIG på.",
        "Gör kortet presenterbart som poster eller förbered en pitch på 90 sekunder.",
      ],
    },
    { type: "h", text: "Kortets sex fält" },
    {
      type: "list",
      ordered: true,
      items: [
        "TRÄNAD PÅ: Vad tränades den på? Vad vet vi — och vad vet vi inte?",
        "BYGGD AV: Vem byggde den och varför? Vad tjänar de på att du använder den?",
        "BRA PÅ: Vad är den faktiskt bra på? Var konkret — ge exempel ur er egen användning.",
        "BRISTER: Var går den fel? När har den lurat er?",
        "ANVÄND INTE TILL: När ska man INTE använda den? Var går gränsen?",
        "SKOLREGLER: Vilka regler borde gälla för verktyget i skolan — och varför just de, utifrån fält 1–5?",
      ],
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "p",
      text: "Det färdiga model cardet (poster eller dokument) med alla sex fält ifyllda — inklusive ärliga ”vet inte”-rutor — plus er pitch eller poster-presentation. Extra stark blir inlämningen om ni avslutar med en mening: ”Det här borde tillverkaren tvingas berätta.”",
    },
  ],

  // Klassrumsspår. De sex fälten projiceras som mall, och de två fält där
  // granskningen skiljer sig från en recension får en egen slide var —
  // annars fylls de i slentrianmässigt. "Vet inte" som tillåtet svar också:
  // det är den regeln som avgör om korten blir ärliga.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "AI-labben skriver produktblad om sina egna brister" },
        { type: "p", text: "I dag gör ni samma sak." },
      ],
    },
    {
      etikett: "Förebilden",
      blocks: [{ type: "lararfalt", id: "forebilden", label: "Förebilden", valfri: true }],
    },
    {
      etikett: "Den centrala poängen",
      blocks: [
        {
          type: "h",
          text: "Det här är inte kritikernas dokument — det är labbets eget",
        },
      ],
    },
    {
      etikett: "Frågan",
      blocks: [{ type: "p", text: "Varför gör de det, tror ni?" }],
    },
    {
      etikett: "Välj ett verktyg",
      blocks: [
        { type: "lararfalt", id: "verktygslistan", label: "Verktygslistan" },
      ],
    },
    {
      etikett: "Regeln",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Gruppen måste själv använda verktyget",
          body: "Ni granskar något ni faktiskt har i fickan.",
        },
      ],
    },
    {
      etikett: "Kortets sex fält",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Tränad på",
            "Byggd av vem — och varför",
            "Bra på",
            "Brister",
            "Använd INTE till",
            "Skolregler",
          ],
        },
      ],
    },
    {
      etikett: "Pressa på fält 2",
      blocks: [
        { type: "h", text: "Vad tjänar de på att du använder den?" },
      ],
    },
    {
      etikett: "Och på fält 5",
      blocks: [
        { type: "h", text: "När ska man INTE använda den?" },
        {
          type: "p",
          text: "Det är där granskning skiljer sig från en recension.",
        },
      ],
    },
    {
      etikett: "Viktigast av allt",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "”Vet inte” skrivs in i kortet",
          body: "Det hittas inte på. Ett kort med välmotiverade tomrum slår ett kort med påhittad fullständighet.",
        },
      ],
    },
    {
      etikett: "Redovisning",
      blocks: [
        { type: "lararfalt", id: "redovisningsform", label: "Form", valfri: true },
      ],
    },
    {
      etikett: "Jämför korten",
      blocks: [
        {
          type: "list",
          items: [
            "Vilka fält kunde grupperna fylla?",
            "Vilka gapar tomma?",
            "Är det samma tomrum hos alla verktyg?",
          ],
        },
      ],
    },
    {
      etikett: "Allt i korten är designval",
      blocks: [
        {
          type: "p",
          text: "Träningsdata, syfte, brister, gränser — val som människor gjort. Och designval kan ifrågasättas och göras om.",
        },
      ],
    },
    {
      etikett: "Sista frågan",
      blocks: [
        {
          type: "p",
          text: "Model cardet finns för att någon krävde det. Vad skulle ni kräva?",
        },
      ],
    },
  ],

  diskussion: [
    "Vilket fält var svårast att fylla i — och varför är just den informationen så svår att få tag på?",
    "Varför publicerar AI-företagen model cards frivilligt? Vem är de skrivna för — och vem skyddar de?",
    "Om ert verktyg tvingades följa era skolregler i fält 6 — vad skulle förändras i hur det är byggt?",
    "Vad borde ett model card innehålla som dagens inte har? Vem skulle kunna tvinga fram det?",
  ],

  fallgropar: [
    "Grupper väljer ett verktyg de inte själva använder — då blir fält 3–5 gissningar och kortet ett skolarbete i stället för en granskning. Kräv egen användarerfarenhet.",
    "”Vet inte” känns som ett misslyckande, så grupperna fyller tomrummen med påhitt. Vänd det tidigt och tydligt: en ärlig tom ruta är kritik av tillverkarens transparens — det är den som ska upp på postern.",
    "Skolregler-fältet blir bara en förbudslista. Pressa fram regler som också MÖJLIGGÖR: ”får användas till X om…” är ett mer sofistikerat designtänk än ”förbjudet”.",
  ],

  evidens: [
    {
      ref: "bender-2021",
      relevance:
        "Stochastic parrots-papperet argumenterar för att dokumentation av träningsdata är ett ansvarskrav, inte en artighet — och medförfattaren Margaret Mitchell är upphovsperson till själva model card-formatet. Övningen låter eleverna ställa branschens egna krav på verktygen i sin vardag.",
    },
    {
      ref: "crawford-2021",
      relevance:
        "Crawford visar att AI aldrig är neutral teknik utan inbäddad i ekonomiska och politiska intressen. Kortets fält 2 — vem byggde den och varför — gör den analysen till en obligatorisk ruta i stället för en fotnot.",
    },
  ],

  variationer: [
    "Enklare (åk 7–8 eller kortare pass): gör ETT gemensamt model card i helklass för ett verktyg alla känner, med läraren som sekreterare vid tavlan. 25 minuter räcker.",
    "Fördjupning (gymnasiet): låt grupperna jämföra sitt kort med tillverkarens EGEN dokumentation — vad deklarerar företaget, vad hoppar det över, och hur skiljer sig tonen mellan deras kort och ert?",
  ],

  externaVerktyg: [
    {
      name: "Hugging Face — Model Cards",
      url: "https://huggingface.co/docs/hub/model-cards",
      description:
        "Standarden för model cards med tusentals riktiga exempel. Bra som förebild att visa på storskärm — välj ett kort och skumma rubrikerna tillsammans.",
      kind: "inspiration",
      requiresAccount: false,
      notes:
        "Sidan är på engelska — men rubrikstrukturen är poängen, inte texten.",
    },
  ],

  kedjarMed: ["namnbytet", "vems-siffror"],

  kalla: "banken",
};
