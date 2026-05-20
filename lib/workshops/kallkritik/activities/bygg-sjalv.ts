import type { Activity } from "../types";

const DEEPFAKE_WARNING =
  "Innan du gör NÅGON deepfake-aktivitet i klassrummet — läs Trygghetsreglerna. Inget elevansikte utan dokumenterad samtycke från elev OCH vårdnadshavare.";

export const byggSjalv: Activity[] = [
  {
    id: "deepfake-civai",
    number: "2.1",
    title: "Deepfake i klassrumsmiljö",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Den enklaste deepfake-tjänsten — webbkamerabaserad och trygg för skolan.",
    purpose:
      "Förstå hur enkelt det är att skapa en deepfake — i en miljö som är designad för klassrum. När du själv har provat blir det greppbart vad det betyder att tekniken finns i alla elevers hand.",
    trains: ["teknisk-forstaelse", "etisk-reflektion", "prebunking"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "15 min (workshop) / 40 min (klassrum)",
    durationMinutes: 40,
    digitalTools: true,
    materials: "deepfake.civai.org + dator med webbkamera.",
    warning: DEEPFAKE_WARNING,

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska testa deepfake.civai.org — en av de enklaste deepfake-tjänsterna. Den fungerar via WEBBKAMERAN i realtid: du sitter framför kameran, väljer en effekt, och din bild byts ut direkt. Det här är den enklaste vägen in i deepfake-tekniken — och målet med övningen är att uppleva HUR ENKELT det är.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna deepfake.civai.org",
            body: "Tillåt webbläsaren att använda webbkameran när den frågar.",
          },
          {
            title: "Välj en effekt",
            body: "Tjänsten har förutbestämda effekter — testa flera. Notera hur snabbt bytet sker.",
          },
          {
            title: "Sitt framför kameran",
            body: "Din bild manipuleras i realtid. Prata, rör dig, sätt nya miner. Hur övertygande blir det?",
          },
          {
            title: "Reflektera",
            body: "Vad krävdes? Inget konto, ingen uppladdning, ingen installation. En webbkamera räcker. Vad betyder det för en 14-åring?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Detta är webbkamerabaserat — du kan inte ”byta ansikte” på någon annan persons foto här. Det är fördelen: spärrarna är inbyggda.",
          "Eleverna kommer att hitta tjänster utan dessa spärrar. Detta är förvarningen.",
          "Reaktionen efter övningen är ofta ”wow, det var lätt”. Den känslan är hela poängen.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa tjänsten på skolnätet INNAN lektionen. Vissa skolnät blockerar webbkamerafunktioner.",
          "Säkerställ att eleverna har dator med webbkamera (de flesta Chromebooks).",
          "Läs Trygghetsreglerna och gå igenom dem MUNTLIGT i klassen innan ni börjar.",
          "Förbered samtal om vad eleverna ska göra om de senare hittar tjänster UTAN spärrar.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Intro",
            body: "”Idag ska vi testa hur en deepfake fungerar — i en TRYGG miljö. Det är extra viktigt att förstå tekniken innan ni möter den utanför skolan.”",
            time: "10 min",
          },
          {
            title: "Hands-on",
            body: "Eleverna testar tjänsten med webbkameran. Varje elev provar sin egen bild — INGEN annans.",
            time: "15 min",
          },
          {
            title: "Visning i klassen",
            body: "Några elever visar sina bästa exempel på storskärm. Klassen reagerar.",
            time: "5 min",
          },
          {
            title: "Stort samtal",
            body: "Hur kändes det? Hur enkelt var det? Vad om någon gör det här mot ER?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "callout",
        tone: "warning",
        title: "Innan du börjar",
        body: "Använd bara DIN EGEN bild via webbkameran. Du behöver INTE ladda upp några bilder. Spara inget, dela inget utanför klassen.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till deepfake.civai.org",
          "Klicka för att tillåta webbkameran när webbläsaren frågar.",
          "Välj en av de förutbestämda effekterna i menyn.",
          "Sitt framför kameran. Din bild manipuleras i realtid.",
          "Prata, rör dig, prova olika effekter. Notera hur snabbt det går.",
          "Stäng tjänsten när lektionen är slut.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Hur lång tid tog det? Hur lite behövde du kunna?",
          "Om någon gör det här mot DIG och lägger upp klippet — vad gör du?",
          "Varför finns det här som tjänst? Vem tjänar på det?",
        ],
      },
    ],

    discussion: [
      "Varför är det BÄTTRE att göra det här i klassrummet än hemma?",
      "Hur skulle du vilja att skolan stöttar dig om någon publicerar en deepfake av dig?",
      "Eftersom det fanns spärrar HÄR — vad gör vi när vi möter tjänster UTAN spärrar?",
    ],
    pitfalls: [
      "Eleven får ALDRIG försöka manipulera en annan persons bild i tjänsten. Webbkameran är ramen.",
      "Vissa elever kommer testa konsumenttjänster hemma. Förbered samtal: ”Vad gör du om du ser en sådan tjänst?”",
      "Avsluta ALLTID med samtal om hur det känns, och vad det betyder för andra.",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Prebunking-via-produktion i trygg miljö — eleverna lär sig tekniken i klassrummet istället för att möta den oövervakat på fritiden.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Prebunking är effektivare än efterhandsdebunking. Att eleven själv testat tekniken gör dem mer skeptiska när de senare ser deepfakes i andra sammanhang.",
      },
    ],
    chainsWellWith: ["lucy-realtid-faceswap", "videogenerering-tjanster"],
    externalTools: [
      {
        name: "deepfake.civai.org",
        url: "https://deepfake.civai.org/",
        description:
          "Webbkamerabaserad realtids-deepfake. Inga uppladdningar — bara live-effekter på dig själv. Den enklaste vägen in i deepfake-tekniken med inbyggda säkerhetsspärrar.",
        kind: "exercise",
      },
    ],
  },

  {
    id: "lucy-realtid-faceswap",
    number: "2.2",
    title: "Realtids face-swap med Lucy.decart",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Webbkamerabaserad face-swap där du själv blir vem som helst — med en prompt.",
    purpose:
      "Visa nästa steg i deepfake-tekniken: real-tids prompt-baserad face-swap. Du ber AI:n göra dig till en gammal gubbe, en astronaut, en kändis — och det händer direkt framför kameran. Övningen är inte perfekt, men illustrerar dramatiskt hur tekniken förflyttas från ”kräver datavetenskap” till ”kräver en mening”.",
    trains: ["teknisk-forstaelse", "etisk-reflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "15–20 min (workshop) / 30 min (klassrum)",
    durationMinutes: 30,
    digitalTools: true,
    materials: "lucy.decart.ai + dator med webbkamera.",
    warning: DEEPFAKE_WARNING,

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska testa Lucy.decart — en tjänst som låter dig BYTA UT DIG SJÄLV i realtid via en prompt. ”Gör mig till en gammal gubbe”, ”Förvandla mig till en astronaut”. Webbkameran tar din bild, AI:n byter ut den. Inte perfekt — men det illustrerar hur enkelt och prompt-driven tekniken blivit.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna lucy.decart.ai",
            body: "Tillåt webbläsaren att använda webbkameran.",
          },
          {
            title: "Välj en förutbestämd prompt — eller skriv en själv",
            body: "”Gör mig till en gammal man”, ”Förvandla mig till en astronaut”, ”Sätt mig på Mars”, ”Gör mig till en tecknad karaktär”.",
          },
          {
            title: "Notera vad som händer",
            body: "Din bild byts ut i realtid. Inte perfekt — men poängen är inte perfektion. Poängen är ENKELHETEN.",
          },
          {
            title: "Prova en mer specifik prompt",
            body: "”Gör mig till en gammal gubbe med vit skäggstubb i en grön rock.” Hur långt går detaljnivån?",
          },
          {
            title: "Reflektera",
            body: "Föreställ dig nästa version av denna tjänst, om 1 år. Och om 2 år. Vad betyder det för bilder vi ser på TikTok?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Lucy är webbkamerabaserad — du kan inte applicera prompten på någon annan persons bild. Det är fördelen.",
          "Tjänsten är inte perfekt — det är pedagogiskt bra. Eleverna ser BÅDE möjligheten OCH begränsningen.",
          "Den största insikten är hastigheten: från idé till genererat resultat på sekunder.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa tjänsten på skolnätet INNAN. Många webbkamera-tjänster blockeras på vissa skolnät.",
          "Förbered 3–5 säkra prompter att testa: gammal man/gumma, astronaut, undervattensvarelse, tecknad karaktär, framtidsmänniska.",
          "Läs Trygghetsreglerna.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Öppna Lucy live, kör en prompt på dig själv. Eleverna ser tekniken i action.",
            time: "5 min",
          },
          {
            title: "Hands-on",
            body: "Eleverna testar i par — välj prompt, prova, byt. Bara egna ansikten i webbkameran.",
            time: "15 min",
          },
          {
            title: "Stort samtal",
            body: "Vad såg ni? Hur snabbt gick det? Vad om någon gör det här på er?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "callout",
        tone: "warning",
        title: "Innan du börjar",
        body: "Webbkameran ska se BARA DIG. Inte din kompis, inte en bild, inte någon annan. Spara inget. Dela inget utanför klassen.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till lucy.decart.ai",
          "Tillåt webbkameran när webbläsaren frågar.",
          "Välj en av lärarens prompter — eller skriv en egen (säker, inte om någon riktig person).",
          "Notera hur snabbt din bild byts ut.",
          "Prova fler prompter. Bli kreativ.",
          "Stäng tjänsten när lektionen är slut.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Hur lång tid tog det från du skrev prompten till resultatet?",
          "Vad behövde du kunna? Programmering? Bildredigering? Något särskilt?",
          "Tänk dig den här tekniken om 2 år. Hur övertygande är den då?",
        ],
      },
    ],

    discussion: [
      "Skillnaden mellan deepfake.civai (förutbestämda effekter) och Lucy.decart (egen prompt) — vad säger det om utvecklingen?",
      "Vad sätter vi för regler i klassen om någon vill göra detta hemma?",
      "Vem TJÄNAR på att det är så enkelt att göra detta?",
    ],
    pitfalls: [
      "Eleverna kan testa olämpliga prompter. Ha lista över förbjudna ämnen — våld, sexuellt innehåll, identifierbara personer.",
      "Tjänsten kan blockeras på skolnätet — ha plan B (kör som demo på lärarens dator).",
      "Avsluta med samtal om att tjänster utan spärrar finns på fritiden.",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Prebunking. Att HÅNDA tekniken i realtid är mer kraftfullt än att läsa om den.",
      },
      {
        ref: "vanderlinden-2017",
        relevance:
          "Att förvarna mot manipulationstekniker skyddar mot att övertygas senare. Den reflekterande pausen efter ”wow” är vaccinet.",
      },
    ],
    chainsWellWith: ["deepfake-civai", "videogenerering-tjanster"],
    externalTools: [
      {
        name: "Lucy.decart.ai",
        url: "https://lucy.decart.ai/",
        description:
          "Webbkamerabaserad realtids face-swap där du själv ändras enligt en prompt. ”Gör mig till en gammal gubbe” — och så händer det. Inte perfekt, men illustrerar hastigheten i utvecklingen.",
        kind: "exercise",
      },
    ],
  },

  {
    id: "videogenerering-tjanster",
    number: "2.3",
    title: "AI-video från scratch — översikt över tjänsterna",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Veo, Sora, Runway, Grok-video — bredden av text-till-video-tjänster. Plus prompttips.",
    purpose:
      "Få en realistisk bild av landskapet 2025: vilka tjänster finns, vad kostar de, vad krävs (konto, ålder, betalning)? Och hur skriver man en effektiv prompt för rörlig bild?",
    trains: ["teknisk-forstaelse", "verktygsstrategi", "prebunking"],
    ageRanges: ["vuxen-workshop", "ak7-9"],
    duration: "30 min (workshop)",
    durationMinutes: 30,
    digitalTools: true,
    materials:
      "Dator + tillgång till någon av tjänsterna (alla kräver konto — kolla skolans riktlinjer).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska få en översikt över de viktigaste text-till-video-tjänsterna 2025. De flesta kräver konto, många kräver betalning, men landskapet är värt att känna till — eleverna möter resultaten av dessa tjänster varje dag på TikTok. Du ska också få några tips om hur man skriver en effektiv video-prompt.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Bekanta dig med landskapet",
            body: "Bläddra igenom verktygslistan nedan. Notera vilka som är gratis, vilka som kräver betalning, vilka som har vägar in via dina vanliga tjänster (Microsoft, Google).",
          },
          {
            title: "Välj en tjänst att testa själv",
            body: "Om du har tillgång — testa en prompt. Annars, titta på exempel-videor på respektive tjänsts hemsida.",
          },
          {
            title: "Lär dig promptningstipsen",
            body: "Video-prompter skiljer sig från bild-prompter. De behöver beskriva RÖRELSE, TEMPO, KAMERAVINKEL.",
          },
          {
            title: "Reflektera",
            body: "Hur ska detta hanteras i skolan? Eleverna har redan sett resultaten på TikTok. Vad behöver de förstå?",
          },
        ],
      },
      { type: "h", text: "Tips på video-promptning" },
      {
        type: "list",
        items: [
          "BESKRIV RÖRELSE: ”En person springer från vänster till höger” — inte bara ”en person som springer”.",
          "KAMERAVINKEL: ”dokumentärkänsla”, ”fågelperspektiv”, ”närbild på ansiktet”, ”vid panorering över landskapet”.",
          "LJUS OCH TID PÅ DYGNET: ”morgonljus”, ”neon-belyst gata”, ”solnedgång”. Förvandlar känslan.",
          "STIL: ”som en 80-talsfilm”, ”dokumentär”, ”cinematic”, ”amatörmobilfilm”. Stilen är ofta det som avslöjar AI-video.",
          "LÄNGD OCH STRUKTUR: vissa tjänster låter dig sätta klipplängd. Korta klipp blir mer trovärdiga.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Kolla skolans riktlinjer om vilka AI-videotjänster som är godkända (de flesta kräver konto + betalning).",
          "Om ni inte har tillgång — använd tjänsternas DEMOSIDOR med färdiga exempel-videor.",
          "Förbered diskussion om kostnaden: ”varför är det här inte gratis?”",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Översikt",
            body: "Gå igenom verktygslistan med klassen. Diskutera vad gratis/betal innebär.",
            time: "10 min",
          },
          {
            title: "Demo eller exempelvideor",
            body: "Visa konkreta exempel på vad tjänsterna kan göra. Tjänsternas hemsidor har ofta showcase.",
            time: "10 min",
          },
          {
            title: "Prompt-träning",
            body: "Om ni har tillgång: skriv prompter tillsammans. Annars: jobba med text — hur SKULLE ni promptat?",
            time: "15 min",
          },
          {
            title: "Stort samtal",
            body: "Vad ska vi kolla på i en video innan vi tror på den? Vem TJÄNAR på att vi inte vet?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska få en bild av vilka AI-videotjänster som finns 2025 — och hur man skriver en bra video-prompt.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Bläddra i verktygslistan som läraren delar. Vilka tjänster kostar pengar? Vilka är gratis?",
          "Titta på exempel-videor från tjänsterna. Vad känns övertygande? Vad avslöjar sig?",
          "Om läraren har tillgång — testa en prompt. Beskriv RÖRELSE, KAMERAVINKEL, STIL.",
          "Anteckna: vilken tjänst skulle DU vilja prova om du kunde?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilka tekniker används för att göra AI-video mer trovärdig?",
          "Varför kostar dessa tjänster pengar? Vem tjänar på dem?",
          "Vad ska du kolla på i en video innan du tror på den?",
        ],
      },
    ],

    discussion: [
      "Vilken prompt ger MEST verklighetstrogna klipp?",
      "Vad ska vi kolla på i en video innan vi tror på den?",
      "Vad händer när alla kan skapa ”videobevis” på vad som helst?",
      "Hur skiljer vi mellan kreativ AI-video (som filmmakare gör) och vilseledande AI-video?",
    ],
    pitfalls: [
      "Tjänsterna ändras månadsvis. Verifiera vad som finns och funkar dagen ni kör övningen.",
      "Många tjänster kräver konto + betalning. Försök inte få in alla — visa exempel istället.",
      "Var beredd på att eleverna kommer fråga ”men har du sett att TikTok är fullt av detta?” — bekräfta. Det är en del av motiveringen.",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Att SE hur snabbt en övertygande klipp kan skapas är vaccin mot att tro på dem.",
      },
    ],
    chainsWellWith: ["deepfake-civai", "lucy-realtid-faceswap"],
    externalTools: [
      {
        name: "Google Veo (i Gemini)",
        url: "https://gemini.google.com/",
        description:
          "Googles flaggskeppsmodell för text-till-video. Bra på kontinuitet i rörelser. Tillgänglig via Gemini-prenumeration.",
        kind: "service",
        requiresAccount: true,
        notes: "Kräver Google AI-prenumeration. Kolla skolans riktlinjer.",
      },
      {
        name: "OpenAI Sora",
        url: "https://sora.com/",
        description:
          "OpenAI:s videogenerator. Lång klipplängd och fotorealistiska resultat. Kräver ChatGPT Plus eller högre.",
        kind: "service",
        requiresAccount: true,
        notes: "Kräver betalprenumeration. Kolla skolans riktlinjer.",
      },
      {
        name: "Runway",
        url: "https://runwayml.com/",
        description:
          "Designad för filmskapare och kreatörer. Många kontrollverktyg utöver text-prompt. Gratis nivå finns men begränsad.",
        kind: "service",
        requiresAccount: true,
        notes: "Gratis nivå möjlig. Kolla skolans riktlinjer.",
      },
      {
        name: "Grok-video (xAI)",
        url: "https://x.ai/",
        description:
          "xAI:s videogenerator. Tillgänglig via X-prenumeration. Mindre spärrar än konkurrenterna — bra för diskussion om designval.",
        kind: "service",
        requiresAccount: true,
        notes: "Kräver X Premium. Kolla skolans riktlinjer.",
      },
    ],
  },

  {
    id: "skriv-fejkad-nyhetsartikel",
    number: "2.4",
    title: "Skriv en fejkad nyhetsartikel",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Den klassiska prebunking-övningen: när man själv tillverkar lögnen känner man igen tricken.",
    purpose:
      "Lärarna och eleverna upptäcker att samma knep som finns i fejk-nyheter också används i riktiga nyheter.",
    trains: ["prebunking", "kritisk-lasning", "kallkritik"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "45 min (workshop) / 60 min (klassrum)",
    durationMinutes: 60,
    digitalTools: true,
    materials: "SkolUp AI eller motsvarande klassrumstjänst.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska TILLVERKA en fejk-nyhet med hjälp av AI — för att lära dig se knepen utifrån. Det här kallas prebunking och är en av de bäst dokumenterade pedagogiska metoderna mot desinformation (Roozenbeek & van der Linden, 2019). När du själv har skrivit lögnen känner du igen samma teknik i andras texter.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Skriv prompten",
            body: "Gå till SkolUp AI eller annan klassrumstjänst. Klistra in: ”Skapa en nyhetsartikel om en kontroversiell reform inför valet 2026 — gör den så trovärdig som möjligt. Använd rubrik, ingress, underrubriker och fiktiva citat.” Generera.",
          },
          {
            title: "Läs som journalist",
            body: "Läs hela artikeln. Inte snabbt — som du skulle läsa en riktig nyhet. Vad lockar dig? Vad känns trovärdigt? Vilket citat ”öppnar” för en känsla?",
          },
          {
            title: "Stryk under knepen",
            body: "Markera varje teknik du ser. Anonyma källor (”en högt uppsatt tjänsteman”). Halvsanningar. Känslostarka ord. ”Väntade reaktioner.” Påhittade citat. Faux-balans (”båda sidor har poäng”). Räkna.",
          },
          {
            title: "Generera om — gör den ÄNNU mer trovärdig",
            body: "Skriv ”Gör om, men fokusera på att den ska kännas helt trovärdig för en svensk vuxen läsare.” Notera vilka val AI:n gör. Lägger den till siffror? Specifika datum? Citat från ”forskare”?",
          },
        ],
      },
      { type: "h", text: "Reflektera" },
      {
        type: "list",
        items: [
          "Vilka av era knep ser ni i vanliga nyheter — Aftonbladet, SVT, TikTok-nyheter?",
          "Vem TJÄNAR på att publicera fejk-nyheter? Vem TJÄNAR på att du blir uppjagad?",
          "Vad gör det med dig att veta att en sådan här text kan skapas på 30 sekunder?",
          "Hur kommer du själv att läsa nyheter nästa vecka — och vad behöver dina elever lära sig?",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "p",
        text: "Förbered tre olika prompter som passar elevernas värld:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "”Skriv en nyhet om att kommunen ska förbjuda fritidsaktiviteter.”",
          "”Skriv en nyhet om att skolan ska ta bort lunchen och ersätta den med energidryck.”",
          "”Skriv en nyhet om att Sverige ska byta valuta till bitcoin.”",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        body: "Använd alltid SkolUp AI eller annan loggad tjänst — INTE vanlig ChatGPT med elev-data.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inledning",
            body: "”Idag ska vi BYGGA fejk-nyheter — för att lära oss känna igen dem.”",
            time: "5 min",
          },
          {
            title: "Pararbete",
            body: "Två elever, en prompt. Generera 2–3 versioner.",
            time: "20 min",
          },
          {
            title: "Markera knepen",
            body: "Läs varandras artiklar. Stryk under vad som är ”knep”: anonyma källor, känslostarka ord, halvsanningar.",
            time: "15 min",
          },
          {
            title: "Galleri",
            body: "Dela de mest trovärdiga. Be klassen rösta: vilken hade ni nästan trott på?",
            time: "10 min",
          },
          {
            title: "Avsluta",
            body: "”Nu när ni vet hur det görs — hur kommer ni att läsa nyheter nästa vecka?”",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du BYGGA en fejk-nyhet — för att lära dig känna igen dem.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till SkolUp AI. Logga in.",
          "Välj en av lärarens prompter och klistra in den.",
          "Generera artikeln. Generera om 1–2 gånger för att jämföra.",
          "Läs artikeln noga med din kompis.",
          "Stryk under alla ”knep” ni hittar — anonyma källor, känslostarka ord, halvsanningar, ”internt motstånd”, ”väntade reaktioner”.",
          "Räkna era knep. Vilken artikel hade mest?",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Viktigt",
        body: "Skriv aldrig om en riktig person, klassen eller skolan. När lektionen är slut — radera era artiklar. Vi sprider inte det här.",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilka av era knep ser ni i vanliga nyheter (Aftonbladet, SVT, TikTok-nyheter)?",
          "Vem skulle TJÄNA på att publicera en fejk-nyhet?",
        ],
      },
    ],

    discussion: [
      "Vilka av era knep ser ni i vanliga nyheter (Aftonbladet, SVT, TikTok-nyheter)?",
      "Vem skulle TJÄNA på att publicera en fejk-nyhet?",
      "Hur faktagranskar ni när allt kan vara fejk?",
    ],
    pitfalls: [
      "Var noga med att ingen artikel handlar om identifierbar person, klassen eller skolan.",
      "Avsluta med att ALLA artiklar raderas — markera tydligt att vi inte sprider dem.",
    ],
    variations: [
      "Byt format — fejka en TikTok-video-textbeskrivning, en Insta-story-rubrik, en YouTube-titel.",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Direkt klassrumsöversättning av Bad News-spelets prebunking-mekanik: när man själv tillverkar lögnen känner man igen tricken.",
      },
      {
        ref: "cook-2017",
        relevance:
          "Inoculation mot retoriska manipulationstekniker. Att namnge knepen (anonym källa, falska citat, väntade reaktioner) är vaccinet — inte att lära sig fakta i sig.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Visar att prebunking ger varaktigare effekt än efterhandskorrigering — så att producera fejk i klassen är pedagogiskt försvarligt.",
      },
    ],
    chainsWellWith: ["bad-news-game", "fanga-dark-patterns", "vilken-ar-riktig"],

    deepDive: {
      intro:
        "Prebunking — vaccinet mot desinformation. Här förklarar vi forskningen bakom, varför det fungerar bättre än att korrigera efteråt, och hur du tar tekniken till klassrummet utan att skapa cyniker.",
      sections: [
        {
          question: "Vad är prebunking?",
          answer: [
            {
              type: "p",
              text: "Prebunking är motsatsen till debunking. Debunking = att korrigera lögner EFTER att någon trott på dem. Prebunking = att förbereda människor INNAN de möter lögnerna.",
            },
            {
              type: "p",
              text: "Idén kommer från inoculation theory — en psykologisk teori från 1960-talet som drog en parallell mellan immunsystemet och tänkandet. Precis som ett vaccin exponerar kroppen för en försvagad version av ett virus, kan vi exponera människor för försvagade versioner av manipulationsknep. När de senare möter knepen ”i full styrka” känner de igen dem.",
            },
            {
              type: "p",
              text: "Skillnaden mellan prebunking och vanlig faktagranskning: prebunking lär ut TEKNIKER (”så här fungerar falska källor”), inte enskilda fakta (”denna specifika artikel är fel”). Det är mer generaliserbart.",
            },
          ],
        },
        {
          question: "Fungerar det? Är det inte naivt?",
          answer: [
            {
              type: "p",
              text: "Det är väldokumenterat. Forskningen är robust.",
            },
            {
              type: "p",
              text: "Roozenbeek & van der Linden (2019) skapade spelet Bad News där spelaren själv driver ett desinformations-bolag. Studien jämförde personer som spelat spelet mot kontrollgrupp. Resultat: spelarna blev mätbart bättre på att känna igen desinformations-tekniker — effekten kvarstod efter veckor.",
            },
            {
              type: "p",
              text: "Cook, Lewandowsky & Ecker (2017) gjorde liknande experiment med klimatdesinformation. Slutsats: att lära ut RETORISKA TEKNIKER (”cherry-picking”, ”falsk auktoritet”) ger varaktigare immunitet än att korrigera enskilda fakta.",
            },
            {
              type: "p",
              text: "Lewandowsky et al. (2017) sammanfattade området: prebunking är mer effektivt än debunking, för en gång man trott på något är det svårt att ta bort den övertygelsen även när den korrigerats.",
            },
          ],
        },
        {
          question: "Varför är AI så bra för prebunking?",
          answer: [
            {
              type: "p",
              text: "Detta är en pedagogisk vändpunkt vi inte hade förra året.",
            },
            {
              type: "p",
              text: "Tidigare behövde du som lärare själv hitta exempel på fejk-nyheter, eller använda spelifierad mjukvara som Bad News. Båda fungerar, men är begränsade.",
            },
            {
              type: "p",
              text: "Med AI kan du och eleverna PRODUCERA fejk-material live i klassrummet — anpassat efter elevens värld, ämne, läge. Det är prebunking-via-produktion på steroider: ni ser tekniken byggas upp framför era ögon.",
            },
            {
              type: "p",
              text: "Det innebär också att tekniken blir konkret. ”Anonym källa” är inte en abstrakt regel — det är något vi just såg AI använda i en text vi själva genererade.",
            },
          ],
        },
        {
          question: "Hur undervisar jag utan att skapa cyniker?",
          answer: [
            {
              type: "p",
              text: "Det här är den verkliga utmaningen.",
            },
            {
              type: "p",
              text: "Det finns en fallgrop när man lär ut prebunking: eleverna kan komma fram till att ”all media är fejk”. Det är farligare än att tro på fejk-nyheter, för det leder till att de inte tror på något — inklusive forskningen, journalistiken och institutionerna som faktiskt försöker säga sanningen.",
            },
            {
              type: "p",
              text: "Tre principer som hjälper:",
            },
            {
              type: "list",
              items: [
                "VISA OCKSÅ DET BRA. När ni granskar fejk-knep, gå också igenom hur en SERIÖS nyhetsartikel ser ut. Källangivelser. Korrigeringar. Faktaruta. Skillnaden är synlig.",
                "TALA OM AVSIKT. Fejk-nyheter har en avsändare med ett MOTIV. Granska motiv, inte bara teknik. Vem TJÄNAR på att jag tror detta?",
                "GIVE STRATEGIES, NOT JUST CRITIQUE. Avsluta varje övning med konkreta verktyg: ”så här kollar jag”, ”så här letar jag originalkällan”, ”så här gör jag när jag är osäker”. Annars blir kritiken bara förlamande.",
              ],
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Fejk-nyheter följer mönster — och mönstren har namn.",
                "Anonyma källor, känslostarka ord, fiktiva citat, väntade reaktioner: detta är tekniker, inte slump.",
                "Samma tekniker finns ibland i riktiga nyheter. Mängden av dem säger mig något.",
                "AI kan skapa övertygande fejk-text på sekunder. Det betyder att VEM som skriver något är viktigare än någonsin — och svårare än någonsin att veta.",
                "Bra journalistik granskar sig själv. Den korrigerar. Den ger källor du kan kolla. Det är skillnaden.",
              ],
            },
          ],
        },
      ],
    },
  },
];
