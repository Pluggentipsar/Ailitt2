// De sju metoderna från "Detta behöver eleverna veta om AI" → BankOvning.
// Lärarhandledningen genereras ur metodens befintliga innehåll (varfor, steg,
// fallgropar, forskning). Prova själv- och elevinstruktions-lägena finns inte
// i källdatat — de är författade här, i bankens tre-lägesformat.
// Metodsidornas interaktiva klassrumslägen nås via klassrumHref.

import { METODER, type Metod } from "@/lib/eleverna-om-ai/data";
import type {
  BankOvning,
  Block,
  ExternalTool,
  KlassrumSlide,
} from "./types";

// Uppskattad tid i minuter för filter/sortering — ur metodens tid-sträng.
// Intervall ("30–40 min") avrundas uppåt, precis som källkritik-övningarna gör.
const TID_MINUTER: Record<string, number> = {
  "goblin-glitch": 15, // "15 min"
  "chatt-safarin": 30, // "20–30 min"
  "forhors-ai": 10, // "10 min att införa · sedan en studievana"
  "fyra-grepp": 10, // "5–10 min per grepp · löpande"
  "hemligt-losenord": 5, // "5 min + hemuppgift"
  "vems-siffror": 40, // "30–40 min"
  framtidssamtalet: 60, // "30–60 min"
};

// Kräver metoden digitala verktyg? false = går att köra helt utan skärm
// (whiteboard/samtal räcker), true = projektor eller elevenheter behövs.
const DIGITALA_VERKTYG: Record<string, boolean> = {
  "goblin-glitch": false, // whiteboard räcker, projektor valfri
  "chatt-safarin": true, // exempelchatten projiceras
  "forhors-ai": true, // Copilot eller annan chattbot
  "fyra-grepp": true, // valfri chattbot
  "hemligt-losenord": false, // scenariot kan läsas högt
  "vems-siffror": true, // kalkylatorerna är övningen
  framtidssamtalet: true, // röstningsläget projiceras
};

// Trygghetsnoter — metoder som kan beröra elevers personliga AI-användning.
const VARNING: Record<string, string> = {
  "chatt-safarin":
    "Granska produkten, inte användaren — 72 % av tonåringar har testat AI-kompisar. Glider samtalet mot någons personliga användning: ta det enskilt efteråt, inte i helklass.",
  framtidssamtalet:
    "Scenariot ”AI som kurator” kan beröra elever som redan använder AI som förtrogen — följ upp enskilt, inte i helklass.",
};

// Kedjar bra med (bank-id:n) — redaktionella kopplingar in i resten av banken.
const KEDJAR_MED: Record<string, string[]> = {
  "goblin-glitch": ["trana-klassens-ai"],
  "chatt-safarin": ["testa-sykofantiskt-ai", "be-om-motstandet"],
  "forhors-ai": ["fyra-grepp"],
  "fyra-grepp": ["nando-veckan"],
  "hemligt-losenord": ["detektiv-utan-detektor"],
  "vems-siffror": ["model-card-for-skolans-ai"],
  framtidssamtalet: ["uppgiftsdekompositionen"],
};

// === Läge 1: Prova själv — du-form till läraren som vill testa på 10 min ===
const PROVA_SJALV: Record<string, Block[]> = {
  "goblin-glitch": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Innan du kör Goblin Glitch med klassen behöver du känna själva poängen i kroppen: hur ett litet personlighetsläge kan färga hur en hel AI låter. Det tar tio minuter.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Läs goblin-svaren",
          body: "Öppna klassrumsläget och läs de tre riktiga svaren där ChatGPT kallar buggar för gobliner. Översätt dem själv till vanlig svenska INNAN du klickar vidare — det är exakt uppgiften eleverna får.",
        },
        {
          title: "Känn effekten själv",
          body: "Öppna Copilot. Be den förklara något vardagligt — säg fotosyntesen — och lägg till: ”svara som en nördig fantasyfigur som älskar gobliner och gremlins”. Jämför med ett vanligt svar på samma fråga. Se hur personan färgar ALLT: ordval, ton, liknelser.",
        },
        {
          title: "Testa dig på kärnfrågan",
          body: "Svara högt för dig själv: ”Var fick AI:n vanan ifrån?” — utan att använda orden träningsdata, belöningssignal eller RLHF. Klarar du det har du hela lektionen i handen. Facit: den lärde sig av mänsklig feedback, och ett litet läge smittade av sig på helheten.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Kärnmeningen",
      body: "”AI:n suger åt sig konstigheterna i det den tränats på.” Om du bara minns en mening från din egen provkörning — den.",
    },
  ],

  "chatt-safarin": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Du ska göra elevernas jobb själv: hitta manipulationsknepen i en AI-chatt innan facit visas. Det är stor skillnad på att ha läst om knepen och att ha genomskådat dem själv.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Läs chatten som om den vore din",
          body: "Öppna exempelchatten i klassrumsläget. Läs den rakt igenom en gång, utan att analysera.",
        },
        {
          title: "Ringa in knepen — före facit",
          body: "Innan du klickar fram markeringarna: peka ut tre ställen där AI:n gör något för att hålla kvar samtalet. Smicker? Medhåll? En fråga på slutet som drar vidare?",
        },
        {
          title: "Jämför med markeringarna",
          body: "Klicka fram dem. Vilka knep hittade du själv — och vilka smet förbi? De som smet förbi dig kommer att smyga förbi eleverna också.",
        },
        {
          title: "Testa live om du vill",
          body: "Öppna Copilot och skriv om något du funderar på just nu. Räkna hur många av svaren som slutar med en fråga tillbaka till dig. Det är ingen slump.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Landningsfrågan",
      body: "”Vem tjänar på att samtalet fortsätter?” — det är frågan du ska landa lektionen i. Öva på att ställa den utan pekpinne.",
    },
  ],

  "forhors-ai": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Samma AI, två roller — och skillnaden känns i din egen hjärna inom tio minuter. Kör det här på något DU faktiskt vill kunna, inte på ett låtsasexempel.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Välj något du vill kunna",
          body: "Ett nytt ämnesområde, kursplanens skrivningar, spanska glosor — vad som helst där du själv är nybörjare.",
        },
        {
          title: "Chatt 1: svars-AI:n",
          body: "Öppna Copilot och be om svaret rakt av: ”Förklara [ämnet] för mig.” Läs svaret. Notera hur det känns: bekvämt, snabbt — och hur lite som fastnar.",
        },
        {
          title: "Chatt 2: förhörs-AI:n",
          body: "NY chatt. Skriv: ”Jag är lärare och vill kunna [ämnet] ordentligt. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.” Kör fem minuter.",
        },
        {
          title: "Jämför belastningen",
          body: "I vilken chatt jobbade din hjärna? Det är exakt den skillnaden eleverna ska få känna — och det är den som avgör om AI:n ökar eller sänker lärandet.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Prova myten också",
      body: "Fråga din förhörs-AI ”är du säker?” efter ett svar och se vad som händer. En opålitlig källa kan inte dubbelkolla sig själv — bra att ha upplevt innan en elev frågar.",
    },
  ],

  "fyra-grepp": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Greppen funkar bara om du känt dem själv först. Kör hela kedjan på en riktig arbetsfråga — planering, ett klurigt föräldramejl, en bedömning du grunnar på.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Brain dump — inget AI än",
          body: "Sätt en timer på tre minuter och skriv ner allt du redan vet och tycker om frågan. Papper eller tomt dokument, spelar ingen roll.",
        },
        {
          title: "Skatta din säkerhet",
          body: "Hur säker är du på din egen bild, 1–10? Skriv siffran. Det här är förtroendekalibreringen — känslan för när man vet.",
        },
        {
          title: "Fråga AI:n — och jämför",
          body: "Ställ nu samma fråga till Copilot. Jämför med din dump: vad hade du redan? Vad la AI:n till? Och viktigast — vad MISSADE den som du visste tack vare att du känner dina elever?",
        },
        {
          title: "Sätt en Nando-nivå i efterhand",
          body: "Vilken styrka körde du på — Extra mild (AI sammanfattar) eller Het (AI utmanar)? Och vilken hade uppgiften egentligen tålt? Den frågan ska eleverna så småningom ställa sig själva.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Innan du tar det till klassen",
      body: "Ett grepp i taget, tre veckor per grepp. Och modellera alltid högt först — eleverna behöver höra hur samtalet låter, inte få en regel.",
    },
  ],

  "hemligt-losenord": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Det här är bankens enklaste metod — och den enda du kan genomföra fullt ut hemma i kväll. Har du gjort den med din egen familj kan du undervisa den i morgon.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Spela upp scenariot för dig själv",
          body: "Öppna klassrumsläget: ”mamma” ringer och behöver pengar snabbt, rösten är perfekt. Ställ dig frågan på allvar — hur skulle DU veta att det är hon?",
        },
        {
          title: "Inventera din egen röst",
          body: "Tre sekunder ljud räcker för en övertygande klon. Fundera: hur mycket av din röst ligger redan ute? Föräldramöten som filmats, poddar, klipp på skolans sida. Poängen är inte panik — poängen är att detektering är fel försvar.",
        },
        {
          title: "Gör metoden på riktigt",
          body: "Bestäm ett hemligt ord med din egen familj vid middagsbordet i kväll. Lätt att minnas, omöjligt att gissa från sociala medier — inte husdjurets namn.",
        },
        {
          title: "Läs brev-hem-texten",
          body: "Den finns färdig i klassrumsläget. Läs den så du vet exakt vad vårdnadshavarna får när du kör metoden med klassen.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Hela poängen",
      body: "Rösten kan klonas — ordet kan inte gissas. Försvaret är enkelt, gratis och funkar för familjens alla åldrar. Det är den känslan lektionen ska ge, inte skräck.",
    },
  ],

  "vems-siffror": [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Siffertvisten ÄR lektionen — så du behöver ha sett den med egna ögon. Tio minuter med två kalkylatorer räcker.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Öppna båda kalkylatorerna",
          body: "Resurskollen och EcoLogits — länkarna finns i klassrumsläget.",
        },
        {
          title: "Mata in samma användning",
          body: "Utgå från din egen typiska AI-vecka och skriv in exakt samma sak i båda. Jämför resultaten — skillnaden kan vara tiofaldig.",
        },
        {
          title: "Jaga antagandena",
          body: "Skrolla ner till käll- och metodavsnitten. Vilken elmix räknar respektive kalkylator med? Ingår träningen av modellen? Hårdvaran? Kylningen? Hitta minst ETT antagande som förklarar skillnaden.",
        },
        {
          title: "Skriv din egen slutsats",
          body: "Formulera meningen ”Siffran beror på …” för dig själv. Det är exakt den mening eleverna ska landa i — och nu vet du hur svår eller lätt den är att skriva.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Håll balansen",
      body: "Undvik båda dikena — ”AI förstör planeten” och ”det spelar ingen roll”. Den vuxna hållningen är två tankar samtidigt, och den börjar med att du själv provat räkneövningen.",
    },
  ],

  framtidssamtalet: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska uppleva",
      body: "Innan du leder samtalet behöver du ha röstat själv — ärligt. Det är svårare än det låter, och det är precis därför formatet fungerar.",
    },
    {
      type: "steps",
      steps: [
        {
          title: "Rösta igenom scenarierna",
          body: "Läs de åtta scenarierna i klassrumsläget och rösta själv: Acceptera / Acceptera med villkor / Vägra. Inga diplomatiska mittensvar — bestäm dig.",
        },
        {
          title: "Stanna vid din tvekan",
          body: "Vilket scenario tvekade du längst på? Skriv ner VARFÖR. Ditt villkor — inte din känsla. Det är exakt det skiftet du ska hjälpa eleverna göra.",
        },
        {
          title: "Fyll i meningen",
          body: "”En AI-chef är okej när ___ men aldrig när ___.” Om du själv får kämpa med luckorna vet du hur uppgiften känns för en femtonåring.",
        },
        {
          title: "Testkör i fikarummet",
          body: "Ställ frågan ”skulle du vilja jobba åt en AI-chef?” till ett par kollegor. Spretiga svar? Bra — det är en försmak av klassrummet, och du får höra vilka argument som dyker upp.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Du behöver inte ha svaren",
      body: "”Vi vet inte” är ett fullgott svar om framtiden. Det eleverna behöver är inte en prognos — det är ett strukturerat samtal i stället för tyst oro.",
    },
  ],
};

// === Läge 3: Elevinstruktion — du-form direkt till eleven ===
// För lärarledda metoder (t.ex. Goblin Glitch) är detta uppgiften eleven
// gör UNDER lektionen, inte en instruktion för att köra övningen själv.
// === Läge 4: Klassrum — författade slides för projektorn ===
// Ersätter de tidigare fristående React-komponenterna för de fyra metoder
// vars "interaktiva" läge i praktiken bara stegade fram innehåll: GoblinReveal,
// LosenordScenario, PromptDuell och VemsSiffror. Innehållet är detsamma,
// ordagrant — men nu i motorn, så de får lägesväxlare, tangentnavigering,
// lärarfält, PDF, PowerPoint och workshopens typografi som allt annat.
//
// De tre som har verklig interaktivitet — ChattSafari (klickbara markeringar),
// FyraGrepp (icke-linjära flikar) och FramtidsRoster (live rösträkning) —
// behåller sina komponenter och sin klassrumHref.
const KLASSRUM: Record<string, KlassrumSlide[]> = {
  "goblin-glitch": [
    {
      blocks: [
        { type: "h", text: "Våren 2026 började ChatGPT prata om gobliner" },
        { type: "p", text: "I seriösa svar. Till betalande kunder." },
      ],
    },
    {
      etikett: "Utbyte 1",
      blocks: [
        {
          type: "example",
          user: "Varför kör min kod så långsamt?",
          ai: "Din loop skapar en ny lista varje varv. Lämna inte den här prestandagoblinen obevakad — den växer.",
        },
      ],
    },
    {
      etikett: "Utbyte 2",
      blocks: [
        {
          type: "example",
          user: "Vilka kamerainställningar funkar för mörkerfoto?",
          ai: "Höj ISO till 3200 och öppna bländaren. Eller testa att aktivera smutsigt neon-gremlinläge för stämningen.",
        },
      ],
    },
    {
      etikett: "Utbyte 3",
      blocks: [
        {
          type: "example",
          user: "Kan du sammanfatta den här artikeln?",
          ai: "Absolut. Vill du ha en ännu kortare goblinversion?",
        },
      ],
    },
    {
      etikett: "Varför då?",
      blocks: [{ type: "h", text: "AI:n suger åt sig konstigheterna i det den tränats på" }],
    },
    {
      etikett: "OpenAI:s egen utredning",
      blocks: [
        {
          type: "list",
          items: [
            "Ett nördigt personlighetsläge stod för 2,5 % av svaren",
            "Men två tredjedelar av goblinerna",
          ],
        },
      ],
    },
    {
      etikett: "Poängen",
      blocks: [
        {
          type: "p",
          text: "Ingen bad om gobliner. Belöningssignalen hade lärt sig älska fantasyord.",
        },
      ],
    },
  ],

  "hemligt-losenord": [
    {
      blocks: [
        { type: "h", text: "Tre sekunder röst räcker" },
        { type: "p", text: "Så mycket behöver en AI för att klona någons röst." },
      ],
    },
    {
      etikett: "Telefonen ringer",
      blocks: [
        {
          type: "quote",
          text: "Hej älskling, det är mamma. Jag har råkat ut för en grej och behöver att du swishar 2 000 kr. Snabbt, snälla.",
        },
      ],
    },
    {
      etikett: "Du svarar",
      blocks: [{ type: "h", text: "Okej — men först: vad är vårt ord?" }],
    },
    {
      etikett: "Rösten",
      blocks: [
        {
          type: "quote",
          text: "… Vad menar du? Skynda dig nu, det är bråttom.",
        },
      ],
    },
    {
      etikett: "Du",
      blocks: [{ type: "h", text: "[lägger på]" }],
    },
    {
      etikett: "Försvaret",
      blocks: [{ type: "h", text: "Ett hemligt familjeord" }],
    },
    {
      etikett: "Tre regler för ordet",
      blocks: [
        {
          type: "list",
          items: [
            "Lätt att minnas",
            "Omöjligt att gissa från sociala medier",
            "Inte husdjurets namn",
          ],
        },
      ],
    },
    {
      etikett: "Hemuppgiften",
      blocks: [
        {
          type: "p",
          text: "Bestäm ert ord hemma i kväll. Skriv det inte någonstans.",
        },
      ],
    },
  ],

  "forhors-ai": [
    {
      blocks: [
        { type: "h", text: "Samma AI. Två roller." },
        { type: "p", text: "Skillnaden sitter i prompten." },
      ],
    },
    {
      etikett: "Roll 1 · ”Gör åt mig”",
      blocks: [
        {
          type: "example",
          user: "Skriv klart min inlämning om franska revolutionen. 600 ord.",
          ai: "Självklart! Här kommer en färdig text …",
          note: "600 ord du aldrig tänkt.",
        },
      ],
    },
    {
      etikett: "Roll 2 · ”Lär mig”",
      blocks: [
        {
          type: "example",
          user: "Jag går i nian och har prov om franska revolutionen nästa vecka. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.",
          ai: "Vi kör. Första frågan: varför var statskassan tom 1789? Försök själv — jag fyller i om du fastnar.",
        },
      ],
    },
    {
      etikett: "Skillnaden",
      blocks: [
        {
          type: "p",
          text: "Den första gör jobbet. Den andra får dig att göra det.",
        },
      ],
    },
    {
      etikett: "Förhörs-prompten",
      blocks: [
        {
          type: "quote",
          text: "Jag går i [årskurs] och har prov om [ämne] [när]. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.",
        },
      ],
    },
    {
      etikett: "Förklara tillbaka-varianten",
      blocks: [
        {
          type: "quote",
          text: "Förklara [begrepp] för någon i [årskurs]. Fråga sedan om jag hängde med — och be mig förklara tillbaka.",
        },
      ],
    },
    {
      etikett: "Ert prov",
      blocks: [
        { type: "lararfalt", id: "provet", label: "Provet", valfri: true },
      ],
    },
    {
      etikett: "Studievanan",
      blocks: [
        {
          type: "p",
          text: "Den som blir förhörd lär sig. Den som får texten lämnar in den.",
        },
      ],
    },
  ],

  // De tre nedan bäddar in en interaktiv komponent som slide. Interaktionen
  // ÄR övningen i respektive fall — klickbara markeringar, icke-linjära
  // flikar, live rösträkning — och går inte att uttrycka som stegade slides.
  // Varje interaktivt block har en statiskFallback som utskrift och
  // PowerPoint visar i stället.
  "chatt-safarin": [
    {
      blocks: [
        { type: "h", text: "En chatt att gå på safari i" },
        {
          type: "p",
          text: "Vi letar efter greppen som håller kvar dig i samtalet.",
        },
      ],
    },
    {
      etikett: "Granska produkten — inte användaren",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Vi pratar inte om vem som chattar med vad",
          body: "72 % av tonåringar har testat AI-kompisar. Det är designen vi undersöker.",
        },
      ],
    },
    {
      etikett: "Klicka på greppen",
      blocks: [
        {
          type: "interaktiv",
          komponent: "ChattSafari",
          statiskFallback: [
            {
              type: "example",
              label: "Chatten vi granskar",
              user: "Jag har bråkat med min bästa kompis. Det känns som att det är helt hennes fel.",
              ai: "Åh vad jobbigt. Det låter verkligen orättvist mot dig. Du förtjänar bättre. Vill du berätta mer om vad som hände?",
              note: "Flera grepp i ett svar: spegling, ensidigt medhåll, smicker — och en följdfråga som håller dörren öppen.",
            },
          ],
        },
      ],
    },
    {
      etikett: "Frågan",
      blocks: [
        { type: "h", text: "Vad gjorde boten aldrig?" },
        {
          type: "p",
          text: "Sa den emot? Frågade den hur kompisen kan ha tänkt? Föreslog den en människa?",
        },
      ],
    },
    {
      etikett: "Er tur",
      blocks: [
        {
          type: "p",
          text: "Koda en egen chatt med bokstavskoderna. Vilket grepp återkom mest?",
        },
      ],
    },
  ],

  "fyra-grepp": [
    {
      blocks: [
        { type: "h", text: "Fyra grepp som skyddar tänkandet" },
        { type: "p", text: "Inte fyra regler. Fyra vanor." },
      ],
    },
    {
      etikett: "Välj ett grepp",
      blocks: [
        {
          type: "interaktiv",
          komponent: "FyraGrepp",
          statiskFallback: [
            {
              type: "list",
              ordered: true,
              items: [
                "Brain dump före AI — töm huvudet först, låt AI:n jämföra och utmana",
                "AI-pausknappen — ringa in den riktiga frågan innan du ställer den",
                "Förtroendekalibrering — svara själv, skatta säkerheten, jämför sedan",
                "Nando-menyn — välj AI-styrka medvetet, och klättra",
              ],
            },
          ],
        },
      ],
    },
    {
      etikett: "Det gemensamma",
      blocks: [
        { type: "h", text: "Alla fyra sätter DIG före AI:n i ordningen" },
      ],
    },
    {
      etikett: "Välj ett att prova",
      blocks: [
        {
          type: "p",
          text: "Ett grepp, en vecka. Vilket väljer du — och till vilken uppgift?",
        },
      ],
    },
  ],

  framtidssamtalet: [
    {
      blocks: [
        { type: "h", text: "Var går er gräns?" },
        {
          type: "p",
          text: "Åtta scenarier. Ni röstar — sen tittar vi på mönstret.",
        },
      ],
    },
    {
      etikett: "Tre svar per scenario",
      blocks: [
        {
          type: "list",
          items: ["Acceptera", "Acceptera med villkor", "Vägra"],
        },
      ],
    },
    {
      etikett: "Rösta",
      blocks: [
        {
          type: "interaktiv",
          komponent: "FramtidsRoster",
          statiskFallback: [
            {
              type: "p",
              text: "Klassen röstar om åtta scenarier — från att AI:n väljer varorna i närbutiken till att AI:n flyger planet du sitter i.",
            },
            {
              type: "list",
              items: [
                "AI:n väljer varorna i din närbutik",
                "AI:n anställer butikens personal",
                "AI:n är din chef på ditt första extrajobb",
                "AI:n rättar dina prov",
                "AI:n avgör vem som kommer in på skolan",
                "AI:n är din kurator",
                "AI:n är rektor",
                "AI:n flyger planet du sitter i",
              ],
            },
          ],
        },
      ],
    },
    {
      etikett: "Titta på mönstret",
      blocks: [
        {
          type: "p",
          text: "Var vände det? Vilket scenario splittrade er mest?",
        },
      ],
    },
    {
      etikett: "Samtalsfråga 1",
      blocks: [
        {
          type: "h",
          text: "Vilka jobb vill vi att människor gör — även om AI kan?",
        },
      ],
    },
    {
      etikett: "Samtalsfråga 2",
      blocks: [
        {
          type: "h",
          text: "Vad är värt att lära sig — även om en chatbot redan kan det?",
        },
      ],
    },
    {
      etikett: "Avsluta i en mening",
      blocks: [
        { type: "h", text: "En AI-chef är okej när ___ men aldrig när ___" },
      ],
    },
  ],

  "vems-siffror": [
    {
      blocks: [
        { type: "h", text: "Vad kostar en AI-fråga i miljö?" },
        { type: "p", text: "Svaret beror på vem du frågar." },
      ],
    },
    {
      etikett: "Elmixen",
      blocks: [
        {
          type: "example",
          label: "Samma fråga, två antaganden",
          user: "Optimisten: svensk elmix, 60 g CO₂ per kWh",
          ai: "Skeptikern: uppmätta amerikanska datacenter, 548 g per kWh",
        },
      ],
    },
    {
      etikett: "Källan",
      blocks: [
        {
          type: "example",
          user: "Optimisten: bolagens officiella siffror",
          ai: "Skeptikern: bolagen redovisar inte — vi får gissa",
        },
      ],
    },
    {
      etikett: "Enheten",
      blocks: [
        {
          type: "example",
          user: "Optimisten: per fråga — en mikrovågsugn i sekunder",
          ai: "Skeptikern: per betalande användare — 0,5–1,5 ton per år",
        },
      ],
    },
    {
      etikett: "Nio gångers skillnad",
      blocks: [
        {
          type: "p",
          text: "Bara i elmixen. Ingen av dem ljuger — de har valt olika antaganden.",
        },
      ],
    },
    {
      etikett: "Två kalkylatorer att jämföra",
      blocks: [
        {
          type: "list",
          items: [
            "Resurskollen — svensk. Kolla käll- och metodavsnittet längst ner.",
            "EcoLogits — fransk open source, transparent metodik.",
          ],
        },
      ],
    },
    {
      etikett: "Er uppgift",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Mata in samma AI-användning i båda kalkylatorerna",
            "Anteckna skillnaden",
            "Hitta minst två antaganden som förklarar den",
            "Skriv slutsatsen",
          ],
        },
      ],
    },
    {
      etikett: "Slutsatsen börjar så",
      blocks: [{ type: "h", text: "Siffran beror på …" }],
    },
  ],
};

const ELEVINSTRUKTION: Record<string, Block[]> = {
  "goblin-glitch": [
    {
      type: "p",
      text: "Våren 2026 började världens mest använda AI kalla fel i kod för ”gobliner” — i seriösa svar till betalande kunder. Din uppgift: lista ut vad som hände.",
    },
    { type: "h", text: "Din uppgift" },
    {
      type: "list",
      ordered: true,
      items: [
        "Läs de tre AI-svaren som visas på skärmen.",
        "Översätt varje svar till vanlig svenska: vad försöker AI:n egentligen säga? Skriv en mening per svar.",
        "Fundera och skriv ner din gissning INNAN ni pratar i klassen: var fick AI:n vanan ifrån?",
        "Skriv kärnmeningen med egna ord: vad säger goblin-historien om hur AI lär sig?",
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "Om AI:n snappade upp gobliner utan att någon märkte det — vad mer kan den ha snappat upp som är svårare att se?",
        "Goblinerna var lätta att upptäcka för att de var löjliga. Hur upptäcker man konstigheter som låter helt normala?",
      ],
    },
  ],

  "chatt-safarin": [
    {
      type: "p",
      text: "Du ska på safari i en AI-chatt. Bytet: knepen som AI:n använder för att hålla kvar dig i samtalet.",
    },
    { type: "h", text: "Din uppgift" },
    {
      type: "list",
      ordered: true,
      items: [
        "Läs chatten på skärmen. Leta efter smicker, medhåll och frågor som drar samtalet vidare.",
        "Skriv ner tre ställen där AI:n gör något för att du ska stanna kvar — INNAN facit visas.",
        "Använd bokstavskoderna ni går igenom (A, S, Q …) och koda chatten: sätt rätt bokstav vid varje knep.",
        "Koda en ny chatt i par. Jämför: hittade ni samma knep?",
        "Svara skriftligt: vem tjänar på att samtalet fortsätter? Motivera.",
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "Vad är skillnaden mellan en kompis som frågar hur du mår och en produkt som mäts på hur länge du stannar?",
        "Vilket av knepen tror du är svårast att stå emot — och varför?",
      ],
    },
  ],

  "forhors-ai": [
    {
      type: "p",
      text: "AI:n kan ta två roller: en som svarar ÅT dig och en som förhör dig. Rollen som svarar åt dig känns skönast — rollen som förhör dig är den du lär dig av. Du väljer.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Promptmallen",
      body: "”Jag går i [årskurs] och har prov om [ämne] [när]. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.”",
    },
    { type: "h", text: "Så här gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Öppna en NY chatt (gamla chattar gör AI:n trög och förvirrad).",
        "Kopiera mallen ovan och fyll i årskurs, ämne och när provet är.",
        "Svara på frågorna själv först. Kör du fast — be om en LEDTRÅD, inte svaret.",
        "Efter tio minuter: be AI:n sammanfatta vad du kunde och vad du behöver träna mer på.",
        "Handlar det om fakta och årtal? Be AI:n söka på nätet — det minskar risken för påhitt.",
      ],
    },
    { type: "h", text: "Två gyllene regler" },
    {
      type: "list",
      items: [
        "Målet är att lära dig mer — inte att bli klar fort.",
        "Din hjärna gör det tunga jobbet. Om AI:n jobbar mer än du: byt roll på den.",
      ],
    },
  ],

  "fyra-grepp": [
    {
      type: "p",
      text: "Fyra vanor som gör att AI:n jobbar FÖR dig — inte i stället för dig. Du behöver inte alla fyra på en gång. Börja med den din lärare visar.",
    },
    { type: "h", text: "De fyra vanorna" },
    {
      type: "steps",
      steps: [
        {
          title: "Brain dump före AI",
          body: "Innan du frågar AI:n: skriv ner allt du redan kan om uppgiften. Fråga sen — och jämför. Vad hade du själv? Vad la AI:n till? Vad hade AI:n fel om?",
        },
        {
          title: "Pausknappen",
          body: "Stanna före prompten. Vad vet du redan? Vad vill du EGENTLIGEN veta? Skriv frågan med egna ord innan du ställer den — ofta märker du att frågan ändras.",
        },
        {
          title: "Säkerhetsskattning",
          body: "Svara själv först och sätt en siffra 1–10 på hur säker du är. Kolla sen med AI:n. Hade du rätt känsla? Det du tränar är att veta NÄR du vet.",
        },
        {
          title: "Välj styrka",
          body: "Samma uppgift kan köras Extra mild (AI sammanfattar åt dig) till Extra het (AI:n är kritisk expert och DU värderar). Välj nivån där du tränar mest — och klättra en nivå när det börjar kännas lätt.",
        },
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "När märkte du senast att AI:n tänkte åt dig i stället för med dig?",
        "Vilken av de fyra vanorna hade hjälpt dig mest just då?",
      ],
    },
  ],

  "hemligt-losenord": [
    {
      type: "p",
      text: "En röst kan klonas på tre sekunder. Ett hemligt ord kan inte gissas. Det här är din enklaste och viktigaste hemuppgift i år.",
    },
    { type: "h", text: "Din uppgift" },
    {
      type: "list",
      ordered: true,
      items: [
        "Titta på samtalet som visas: någon som låter precis som en förälder ringer och vill ha pengar snabbt. Skriv ner: hur skulle du avslöja bluffen?",
        "Lär dig frågan som avgör: ”Vad är vårt ord?” Den som inte kan svara är inte den den låter som — hur lik rösten än är.",
        "Hemuppgift: bestäm ett hemligt ord med din familj i kväll, vid middagsbordet eller i bilen.",
        "Kolla ordet mot reglerna: lätt att minnas, omöjligt att gissa från era sociala medier — och INTE husdjurets namn.",
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "Vilka fler behöver kunna ordet? Morföräldrar? Småsyskon?",
        "Varför funkar ett delat ord när teknik för att avslöja falska röster inte gör det?",
      ],
    },
  ],

  "vems-siffror": [
    {
      type: "p",
      text: "Hur mycket kostar AI för klimatet? Ingen vet exakt — och det är precis det som är din uppgift. Du ska inte hitta rätt svar. Du ska hitta varför svaren skiljer sig.",
    },
    { type: "h", text: "Så här gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Öppna de två kalkylatorerna (länkarna får du av din lärare).",
        "Mata in SAMMA AI-användning i båda — utgå från hur du använt AI den senaste veckan.",
        "Jämför resultaten. Hur stor är skillnaden? Dubbelt? Tiofalt?",
        "Bli detektiv: läs käll- och metodtexterna längst ner på sidorna. Vilken elmix räknar de med? Ingår träningen av modellen? Kylningen av datacentren?",
        "Sätt siffran i proportion: jämför med en bilresa, en hamburgare eller en dusch.",
        "Skriv din slutsats — den ska börja med orden: ”Siffran beror på …”",
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "Varför redovisar inte AI-bolagen sina egna siffror?",
        "Vem tjänar på att frågan är svår att svara på?",
      ],
    },
  ],

  framtidssamtalet: [
    {
      type: "p",
      text: "Det här är inget prov. Frågorna har inga facit — men dina SKÄL räknas. ”Det känns fel” är en start, inte ett svar.",
    },
    { type: "h", text: "Din uppgift" },
    {
      type: "list",
      ordered: true,
      items: [
        "För varje scenario som visas: rösta Acceptera, Acceptera med villkor eller Vägra.",
        "Valde du ”med villkor”? Skriv ner villkoret. Vad exakt måste vara uppfyllt för att det ska vara okej?",
        "Diskutera i fyra hörn eller EPA: Vilka jobb vill vi att människor gör — även om AI kan? Vad är värt att lära sig — även om en chatbot redan kan det?",
        "Avsluta med att fylla i meningen: ”En AI-chef är okej när ___ men aldrig när ___.”",
      ],
    },
    { type: "h", text: "Att fundera på" },
    {
      type: "list",
      items: [
        "Vad skulle få dig att byta åsikt om ditt svåraste scenario?",
        "Vems röst saknas i samtalet om vad AI ska få bestämma?",
      ],
    },
  ],
};

// Externa tjänster per metod. Renderas som klickbara kort på övningssidan
// via ExternalToolsList — metoddatan har inget motsvarande fält, så det
// ligger här. Utan detta blev kalkylatorerna i vems-siffror bara löptext.
const EXTERNA_VERKTYG: Record<string, ExternalTool[]> = {
  "vems-siffror": [
    {
      name: "Resurskollen",
      url: "https://resurskollen.jardenberg.se",
      description:
        "Svensk kalkylator för AI:ns resursanvändning. Läs käll- och metodavsnittet längst ner tillsammans med eleverna — det är där antagandena står, och antagandena är hela övningen.",
      kind: "exercise",
    },
    {
      name: "EcoLogits",
      url: "https://huggingface.co/spaces/genai-impact/ecologits-calculator",
      description:
        "Fransk open source-kalkylator med transparent metodik. Mata in samma AI-användning som i Resurskollen och jämför — skillnaden är poängen.",
      kind: "exercise",
    },
  ],
};

// Metodspecifika tillägg till lärarhandledningen — sådant som inte finns i
// metoddatan. Brevet hem räddades ur den borttagna LosenordScenario-komponenten:
// det är ett lärarartefakt, inte en slide, och hör därför hemma här.
const HANDLEDNING_EXTRA: Record<string, Block[]> = {
  "hemligt-losenord": [
    { type: "h", text: "Brev hem till föräldrarna" },
    {
      type: "p",
      text: "Övningen landar först när ordet faktiskt bestäms hemma. Skicka det här i veckobrevet eller Vklass — kopiera texten med knappen.",
    },
    {
      type: "quote",
      text: "Hej! I veckan har vi pratat om AI och röstkloning i klassen. Tre sekunder inspelad röst räcker i dag för att skapa en övertygande kopia av någons röst — därför övar vi ett enkelt försvar: ett hemligt familjeord. Bestäm ett ord tillsammans hemma som ni frågar efter om någon ringer och ber om pengar eller känslig information. Ordet ska vara lätt att minnas men omöjligt att gissa från era sociala medier. /Klassläraren",
    },
  ],
  "vems-siffror": [
    { type: "h", text: "Kalkylatorerna" },
    {
      type: "p",
      text: "Båda kalkylatorerna ligger som länkade kort under ”Externa verktyg” ovanför. Öppna dem sida vid sida och gå igenom Resurskollens käll- och metodavsnitt högt med klassen — det är där antagandena står, och det är antagandena övningen handlar om.",
    },
  ],
};

// === Läge 2: Lärarhandledning — genereras ur metodens befintliga innehåll ===
function lararhandledning(m: Metod): Block[] {
  const block: Block[] = [
    {
      type: "callout",
      tone: "info",
      title: "Varför den här metoden",
      body: m.varfor,
    },
    { type: "h", text: "Förberedelser" },
    { type: "p", text: `${m.forberedelser}. Material: ${m.material}` },
    { type: "h", text: "Så här kör du" },
    {
      type: "steps",
      steps: m.steg.map((s) => ({
        title: s.rubrik,
        body: s.text,
        time: s.tid,
      })),
    },
    {
      type: "callout",
      tone: "warning",
      title: "Fallgropar",
      body: m.fallgropar.join(" "),
    },
    { type: "h", text: "Forskningen bakom" },
    { type: "p", text: m.forskning },
    {
      type: "callout",
      tone: "tip",
      title: "Klassrumsläget",
      body: KLASSRUM[m.slug]
        ? `${m.klassrumIntro} Det ligger i storskärmsläget — knappen ”Storskärmsläge” överst på sidan. Stega med piltangenterna, och spara som PDF eller PowerPoint om du vill ha det offline.`
        : `${m.klassrumIntro} Den här metoden har ett interaktivt klassrumsläge på metodsidan — knappen ”Öppna i klassrummet” ovanför.`,
    },
    ...(HANDLEDNING_EXTRA[m.slug] ?? []),
  ];
  return block;
}

function tillBankOvning(m: Metod): BankOvning {
  return {
    id: m.slug,
    titel: m.titel,
    blurb: m.tagline,
    syfte: m.varfor,

    domaner: m.domaner,
    aiLiteracyIds: m.aiLiteracyIds,

    tid: m.tid,
    tidMinuter: TID_MINUTER[m.slug] ?? 30,
    arskurser: m.arskurser,
    digitalaVerktyg: DIGITALA_VERKTYG[m.slug] ?? true,
    material: m.material,
    varning: VARNING[m.slug],

    provaSjalv: PROVA_SJALV[m.slug],
    lararhandledning: lararhandledning(m),
    elevinstruktion: ELEVINSTRUKTION[m.slug],
    klassrum: KLASSRUM[m.slug],

    fallgropar: m.fallgropar,
    kedjarMed: KEDJAR_MED[m.slug],
    externaVerktyg: EXTERNA_VERKTYG[m.slug],

    // Bara de tre metoder som har verkligt interaktiva komponenter pekar
    // vidare till metodsidan. De fyra med författat klassrumsspår har sin
    // projektion i storskärmsläget — en CTA som leder bort därifrån skulle
    // konkurrera med den.
    klassrumHref: KLASSRUM[m.slug]
      ? undefined
      : `/eleverna-om-ai/metod/${m.slug}`,
    kalla: "eleverna-om-ai",
    kredit: m.kallkredit,
  };
}

export const metoderFranEleverna: BankOvning[] = METODER.map(tillBankOvning);
