import type { Activity } from "../types";

export const flodet: Activity[] = [
  {
    id: "ai-eller-riktig",
    number: "1.1",
    title: "AI eller riktig?",
    chapter: "flodet",
    level: "workshop-byggsten",
    blurb:
      "Snabb gissningslek som skapar nyfikenhet och visar att magkänslan inte längre räcker.",
    purpose:
      "Lärarna ska känna i kroppen att de inte längre kan se skillnad på AI och verkligt — och därför inte heller kan förvänta sig att eleverna ska kunna det.",
    trains: ["observation", "kallkritik"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "10–15 min",
    durationMinutes: 15,
    digitalTools: true,
    materials:
      "Projektor + 5–8 korta klipp/bilder där åtminstone hälften är AI.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska gissa om fem korta klipp är AI-genererade eller riktiga. Övningen är medvetet rigorös — alla fem är AI. Syftet är att du i kroppen ska känna att din magkänsla inte längre räcker. Det är den känslan som ska bära dig genom resten av workshopen — och som du behöver kunna ge dina elever.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Gissa på varje klipp",
            body: "Workshopledaren visar fem klipp i tur och ordning. Efter varje räcker du upp handen — AI eller riktigt? Använd magkänslan.",
          },
          {
            title: "Diskutera med din granne",
            body: "Vad SÅG du som fick dig att tro det du trodde? Var det ögonen, händerna, ljuset, rörelsen, ljudet? Sätt ord på dina signaler.",
          },
          {
            title: "Hör avslöjandet",
            body: "Alla fem var AI. Notera hur många du fick rätt — och hur många du gissade fel.",
          },
          {
            title: "Reflektera tyst",
            body: "Två minuter. Vad litade du på som visade sig leda fel? Vad betyder det för hur du framöver kommer att se ditt eget flöde — och dina elevers?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Du är vuxen och uppmärksam. Eleverna är yngre och scrollande. Om du inte ser skillnad — vad ser de?",
          "Det är inte ett misslyckande att gissa fel. Det är poängen.",
          "Den här övningen är inramning för ALLT som följer. Bär känslan med dig.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att inte kunna se skillnad på AI och riktigt är inte en personlig brist — det är en strukturell vändpunkt i hur vi möter information. Här förklarar vi vad som hänt och varför.",
      sections: [
        {
          question: "Vad är ”syntetisk media”?",
          answer: [
            {
              type: "p",
              text: "Syntetisk media är samlingsnamnet för bilder, ljud och video som skapats av AI snarare än fångats med kamera eller mikrofon. Det inkluderar deepfakes (där en persons ansikte byts ut), text-till-video (där en prompt blir en hel scen) och ljud-syntes (där en persons röst kan klonas från sekunders inspelning).",
            },
            {
              type: "p",
              text: "Tekniken är inte ny — vi har haft Photoshop i 30 år. Det som är nytt är ENKELHETEN, HASTIGHETEN och KVALITETEN. Det som tog en specialist en vecka 2020 tar en 12-åring 30 sekunder 2025.",
            },
          ],
        },
        {
          question: "Varför är vi så dåliga på att se skillnaden?",
          answer: [
            {
              type: "p",
              text: "Forskning (Wineburg & McGrew, 2017; Breakstone et al., 2021) har länge visat att även välutbildade människor är dåliga på att utvärdera digital information. Vi förlitar oss på ytliga signaler — domännamn, design, ”ser proffsigt ut” — istället för att verifiera innehåll.",
            },
            {
              type: "p",
              text: "AI-genererat material är specifikt designat för att producera dessa ”ser-trovärdigt-ut”-signaler. Modellerna är tränade på enorma mängder verkligt material och optimerar för att matcha det. Det betyder att de exakta signaler vi använder för att bedöma äkthet är just de signaler AI är bäst på att efterlikna.",
            },
            {
              type: "p",
              text: "Det är inte att vi är dumma. Det är att tekniken är designad att lura just oss.",
            },
          ],
        },
        {
          question: "Vad betyder det för skolan?",
          answer: [
            {
              type: "p",
              text: "Det blir en pedagogisk vändpunkt. Traditionell källkritik (”granska källan, granska upphovet”) räcker inte längre när källan kan vara genererad på sekunder, signerad med en påhittad person.",
            },
            {
              type: "p",
              text: "Det vi tränar istället är något som ibland kallas ”civic online reasoning” (Stanford History Education Group): färdigheten att navigera ett medieflöde där falskt och äkta blandas, utan att förlamas av cynism eller naivitet.",
            },
            {
              type: "p",
              text: "Det här är inte en separat lektion — det är en grundkompetens som ska genomsyra all undervisning där eleverna möter media.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här i mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "Börja med upplevelsen. Den här övningen är exemplet — när elever gissar fel och inser att de inte kunde se skillnad, blir lärandet greppbart.",
                "Ge språk. ”AI-genererad”, ”syntetisk”, ”deepfake” — det är ord eleverna behöver kunna använda.",
                "Normalisera osäkerhet. Det är OK att inte veta. Det viktiga är vad man GÖR när man inte vet (frågar någon, söker källan, väntar med att dela).",
                "Undvik panik. Det här är inte slutet på sanningen. Det är förändrade förutsättningar för hur vi söker den.",
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
                "AI kan göra bilder, filmer och ljud som ser och låter äkta ut.",
                "Min magkänsla för ”det här är riktigt” fungerar inte längre.",
                "Jag måste KONTROLLERA innan jag tror eller delar.",
                "Det är ingen skam att inte veta. Det är att inte kolla som är problemet.",
                "Den enklaste kontrollen: ”Hittar jag samma sak från en annan källa jag litar på?”",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Plocka fem klipp som är åldersanpassade — TikTok-stil, dans, djur, vardagsnyheter.",
          "Undvik politiska/känsliga ämnen i åk 4. Undvik klipp med kända personer (förvirring ”varför är hen där?”).",
          "Kontrollera att klippen kan visas på skolnätet i förväg.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Skriv på tavlan",
            body: "AI och RIKTIG. Eleverna gissar med röst, pinnar eller två sidor av rummet.",
          },
          {
            title: "Mellan varje klipp",
            body: "Fråga: ”Vad såg du som fick dig att tro det?”. Det är detaljerna som ger lärandet, inte gissningarna i sig.",
          },
          {
            title: "Slutsats",
            body: "Avslöja att alla var AI. Diskutera vad det betyder att man inte kan se skillnad — och vad man då kan göra istället.",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du träna ögat på att se skillnad mellan AI-genererat material och riktigt material.",
      },
      { type: "h", text: "Så här gör du" },
      {
        type: "list",
        ordered: true,
        items: [
          "Titta noga på varje klipp som läraren visar.",
          "Bestäm dig: tror du klippet är AI eller riktigt?",
          "Visa ditt svar på det sätt läraren bestämt (röst, pinne, sida av rummet).",
          "När alla gissat — säg minst en sak du tittade på. Var det ögonen, händerna, ljuset, ljudet?",
        ],
      },
      { type: "h", text: "När alla klipp är klara" },
      {
        type: "list",
        items: [
          "Hur kan vi tänka när något vi ser i mobilen kan vara AI?",
          "Vad gör vi när vi inte är säkra på en bild eller film?",
          "Vem skulle tjäna på att vi inte vet?",
        ],
      },
    ],

    discussion: [
      "Hur kan vi tänka om något vi ser i mobilen kan vara fejk?",
      "Vad gör vi när vi ÄR osäkra på en bild eller film?",
      "Vem tjänar på att vi inte vet?",
    ],
    pitfalls: [
      "Använd inte klipp med kända personer i åk 4 — risk för förvirring ”varför är hen där?”.",
      "Undvik klipp som är obehagliga (våld, kropp). Tema: vardag/djur/dans.",
    ],
    variations: [
      "Låt eleverna SJÄLVA hitta tre klipp och föra en motsvarande lek i smågrupper.",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "breakstone-2021",
        relevance:
          "Visar att elever är dåligt rustade att se skillnad på äkta och fejk — en sårbarhet AI dramatiskt förstärker. Övningen exponerar detta i kroppen istället för att argumentera för det.",
      },
      {
        ref: "ios-2025",
        relevance:
          "Statistik om hur unga möter AI-genererat innehåll i sina flöden — bekräftar att övningen handlar om vardagen, inte ett undantag.",
      },
    ],
    chainsWellWith: ["vilken-ar-riktig", "granska-ditt-flode"],
    externalTools: [
      {
        name: "Sightengine — AI or Not",
        url: "https://sightengine.com/ai-or-not",
        description:
          "Färdigt webbtest där du laddar upp eller länkar bilder och tjänsten gissar om de är AI-genererade. Bra som komplement: gör övningen först med magkänslan, kör sen samma klipp/bilder genom Sightengine och jämför.",
        kind: "exercise",
      },
    ],
  },

  {
    id: "vilken-ar-riktig",
    number: "1.2",
    title: "Manipulera en nyhetsbild",
    chapter: "flodet",
    level: "workshop-byggsten",
    blurb:
      "Ta en riktig nyhetsbild — låt AI byta miljö, årstid eller stämning. Går det att se skillnad?",
    purpose:
      "Visa hur LÄTT det är att manipulera en äkta bild så att betydelsen förändras — utan att den ”ser fejkad ut”. Det är inte bara helt påhittade AI-bilder vi måste se upp med — det är också riktiga foton som blivit subtilt omgjorda.",
    trains: ["detaljgranskning", "kallkritik", "teknisk-forstaelse"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "20 min (workshop) / 35 min (klassrum)",
    durationMinutes: 35,
    digitalTools: true,
    materials:
      "En nyhetsbild från en seriös källa + AI-bildgenerator (Copilot, ChatGPT eller Google Gemini/Nano Banana).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska ta en RIKTIG nyhetsbild — och låta en AI manipulera den. Byt miljö, byt årstid, byt stämning. Syftet är att uppleva hur lite som krävs för att en äkta bild ska säga något helt annat än den ursprungligen sagt. Resultatet beror på vilken AI du använder — testa flera och se.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Hitta en nyhetsbild",
            body: "Gå till en svensk nyhetssajt (Aftonbladet, SVT, DN, lokaltidningen). Plocka en bild från en aktuell nyhet. Spara den eller kopiera dess länk.",
          },
          {
            title: "Öppna en AI-bildgenerator",
            body: "Copilot (gratis i Edge), ChatGPT-bildgenerering, Google Gemini eller Nano Banana. Olika tjänster ger olika resultat — det är hela poängen.",
          },
          {
            title: "Ladda upp bilden och be om omredigering",
            body: "”Byt vädret till regn.” ”Gör om till vinter.” ”Lägg till en folksamling i bakgrunden.” ”Byt platsen till en storstad.” En enkel beskrivning räcker.",
          },
          {
            title: "Jämför originalet med resultatet",
            body: "Hur övertygande är manipulationen? Vad har bevarats? Vad har ändrats? Skulle någon som INTE SER originalet kunna avslöja det?",
          },
          {
            title: "Testa flera tjänster",
            body: "Samma prompt i Copilot vs ChatGPT vs Gemini. Vilken är bäst på att manipulera utan att avslöja sig? Vilken vägrar?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det är stor skillnad på AI-tjänsterna. Vissa lyckas behålla detaljer (ansiktsdrag, kläder, komposition) — andra ”retoucherar” för mycket och avslöjar sig.",
          "Lateralt läsande är räddningen: hade du sökt på originalbilden i Google Lens hade du sett ”denna bild finns från ett annat sammanhang”. Det är det här eleverna ska lära sig.",
          "Det handlar inte om att framställa AI som fienden. Det handlar om att tekniken EXISTERAR och att vi behöver hantera den.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Den här övningen handlar inte bara om HELT AI-genererade bilder — utan om något mer subtilt: riktiga bilder som blivit ändrade. Det är ofta värre, för att de är svårare att avslöja.",
      sections: [
        {
          question: "Vad är ”image-to-image”-redigering?",
          answer: [
            {
              type: "p",
              text: "Image-to-image (ibland kallat ”inpainting” eller ”photo editing”) är AI-funktioner där modellen utgår från en BEFINTLIG bild och förändrar den enligt en textinstruktion.",
            },
            {
              type: "p",
              text: "Skillnaden mot ren bildgenerering: modellen försöker BEHÅLLA så mycket som möjligt av originalet. Ansiktet, kompositionen, ljussättningen. Bara det du ber om ändras.",
            },
            {
              type: "p",
              text: "Det är en av de svåraste sakerna att upptäcka. Ögat söker efter ”ser bilden påhittad ut?” — men en image-to-image-bild ÄR till stora delar ett riktigt foto. Bara delar är manipulerade.",
            },
          ],
        },
        {
          question: "Varför är detta värre än helt påhittade bilder?",
          answer: [
            {
              type: "p",
              text: "Tre anledningar:",
            },
            {
              type: "list",
              items: [
                "TROVÄRDIGHET: en bild som är 90 % äkta och 10 % manipulerad är mer trovärdig än en helt fabricerad. Verkligheten ger den autentiska känslan, manipulationen ger ändringen av betydelsen.",
                "DETEKTERBARHET: traditionella verktyg för AI-detektion fungerar sämre på image-to-image. De är tränade på helt syntetiska bilder och missar lokala manipulationer.",
                "RAMNING: en redan publicerad nyhetsbild har en KÄLLA. När bilden manipuleras men presenteras under samma källas namn, ärver den trovärdigheten — utan att källan vet om det.",
              ],
            },
            {
              type: "p",
              text: "Detta är hur modern visuell desinformation ofta ser ut: inte helt påhittat, utan ett äkta foto med subtila tillägg som ändrar historien.",
            },
          ],
        },
        {
          question: "Hur skiljer sig olika AI-tjänster åt?",
          answer: [
            {
              type: "p",
              text: "Per 2025 är det stora skillnader mellan tjänsterna:",
            },
            {
              type: "list",
              items: [
                "GOOGLE GEMINI / NANO BANANA: bland de bästa på att bevara originalbilden vid lokal manipulation. Kan vara svår att avslöja.",
                "CHATGPT BILDGENERERING: kraftfull men tenderar att ”stilisera” hela bilden — vilket gör manipulationen mer synlig.",
                "MICROSOFT COPILOT: gratis i Edge, bra basnivå, försiktig med vissa motiv.",
                "MIDJOURNEY / STABLE DIFFUSION: kraftfulla för rena bildgenereringar, mindre för exakt manipulation av ett original.",
              ],
            },
            {
              type: "p",
              text: "Tjänsterna förbättras månadsvis. Det är därför vi pedagogiskt fokuserar på LATERALT LÄSANDE (Google Lens) snarare än ”lär dig se signalerna” — signalerna försvinner, källkollen kvarstår.",
            },
          ],
        },
        {
          question: "Hur tar jag det här till mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA MED EN BEKANT BILD. En bild från lokaltidningen om något i kommunen — något eleverna känner igen. Då blir manipulationen tydlig.",
                "VISA GOOGLE LENS LIVE. Tryck-och-håll på en bild i mobilen, välj ”sök med bild”. Eleverna kan börja använda det samma dag.",
                "PRATA OM TILLIT TILL KÄLLAN, INTE BILDEN. Frågan är inte ”ser bilden äkta ut?” — frågan är ”vem visar mig bilden, och var kom den ifrån?”",
                "TRÄNA REGELBUNDET. Det räcker inte med en lektion. Visa en bild då och då på morgonsamlingen och fråga ”vad behöver vi kolla?”.",
                "RAMA IN MED RESPEKT. AI-bildgeneration är inte bara dåligt — det är ett kraftfullt kreativt verktyg. Vi lär oss att hantera baksidan, inte att frukta tekniken.",
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
                "En riktig bild kan vara manipulerad — bara delar av den.",
                "Mina ögon räcker inte. Jag måste KOLLA källan.",
                "Google Lens är mitt främsta verktyg. Tryck-och-håll på en bild för att söka.",
                "”Var kom bilden ifrån?” är viktigare än ”ser bilden äkta ut?”.",
                "Det är OK att inte veta. Det är inte OK att dela utan att veta.",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Välj 1–2 nyhetsbilder som passar elevernas värld — gärna något lokalt (kommunens nya skola, en sportarena, ett välkänt torg).",
          "Testa själv manipulationen i en AI-tjänst INNAN lektionen. Vissa tjänster fungerar bättre än andra och resultatet varierar mycket.",
          "Ha Google Lens (eller liknande omvänd bildsökning) som backup-demo — så eleverna lär sig verktyget de behöver.",
          "Använd helst skolans AI-tjänst (Copilot/SkolUp/motsvarande) — inte privata konton.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Visa hur DU laddar upp en nyhetsbild i AI-tjänsten och ber den manipuleras. Tänk högt om resultatet.",
            time: "10 min",
          },
          {
            title: "Pararbete",
            body: "Eleverna i par tar en av de godkända nyhetsbilderna och ber AI:n manipulera den. Spara båda (original + manipulation).",
            time: "15 min",
          },
          {
            title: "Galleri",
            body: "Eleverna visar original + manipulerad bild för klassen. Klassen försöker gissa vad som ändrats. Hur långt kommer man bara med ögat?",
            time: "10 min",
          },
          {
            title: "Verifieringsdemo",
            body: "Visa Google Lens på en av bilderna. Lär eleverna att den här kontrollen finns. Det är ett vardagsverktyg.",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska ta en riktig nyhetsbild — och låta en AI ändra den. Mål: se hur enkelt det är att förändra betydelsen av en bild.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Tillsammans med din kompis: välj en nyhetsbild som läraren har godkänt.",
          "Öppna AI-bildgeneratorn som läraren har visat.",
          "Ladda upp eller länka bilden.",
          "Skriv en prompt som ÄNDRAR något: ”Byt vädret till regn”, ”Gör om till vinter”, ”Lägg till fler personer i bakgrunden”.",
          "Vänta. Spara båda bilderna (originalet OCH AI-versionen).",
          "Jämför. Vad har ändrats? Vad har bevarats?",
          "Visa för klassen — kan de gissa vad du ändrade?",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Viktigt",
        body: "Manipulera inte bilder på riktiga personer ni känner — varken klasskamrater, lärare eller kändisar. Använd bilder där personerna inte är centrala. Sprid inte de manipulerade bilderna utanför klassen.",
      },
      { type: "h", text: "Verifieringsknep att ta med hem" },
      {
        type: "p",
        text: "Google Lens: tryck-och-håll på en bild i mobilen, välj ”sök med bild”. Visar var bilden kommer från — och om den finns från ett annat sammanhang. Det här är ett av de viktigaste verktygen du kan lära dig.",
      },
    ],

    discussion: [
      "Om en AI kan göra om en riktig bild så här — vad litar vi på framöver?",
      "Vilken AI-tjänst lyckades bäst med manipulationen? Vad säger det?",
      "Vem har ansvar när en manipulerad bild sprids — den som gjorde den, eller den som delade vidare?",
      "Hur skulle vi kunna känna igen en manipulerad bild på TikTok eller Instagram?",
    ],
    pitfalls: [
      "Manipulera inte AI-bilder av barn eller identifierbara personer — etiskt problem och dåligt exempel.",
      "Be eleverna INTE sprida de manipulerade bilderna utanför klassrummet.",
      "Var beredd på att vissa AI-tjänster nekar att manipulera nyhetsbilder direkt — pröva andra eller använd en mer neutral bild.",
    ],
    variations: [
      "Vänd på det — låt eleverna ge varandra en manipulerad bild och försöka avslöja den via Google Lens.",
      "Jämför olika AI-tjänster för samma prompt. Vilken är bäst? Vilken nekar?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "wineburg-mcgrew-2017",
        relevance:
          "Lateralt läsande — eleverna behöver lära sig att lämna bilden och kolla källan. Google Lens är vardagsverktyget för detta.",
      },
      {
        ref: "hobbs-2010",
        relevance:
          "Medielitteracitet som dekonstruktion. Att MANIPULERA en bild själv tränar samma muskel som att identifiera när någon annan har manipulerat.",
      },
      {
        ref: "breakstone-2021",
        relevance:
          "Visar att elever förlitar sig på ytliga signaler. Övningen ger dem ett konkret verktyg (Google Lens) som ersätter ytlig granskning.",
      },
    ],
    chainsWellWith: ["ai-eller-riktig", "skriv-fejkad-nyhetsartikel"],
    externalTools: [
      {
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com/",
        description:
          "Gratis i Edge-webbläsaren. Bra på bildgenerering och redigering. Tillgängligt på de flesta skolor.",
        kind: "service",
        requiresAccount: true,
        notes: "Logga in med Microsoft-konto. Kolla skolans riktlinjer.",
      },
      {
        name: "ChatGPT (bildgenerering)",
        url: "https://chatgpt.com/",
        description:
          "OpenAI:s bildgenerering. Kan både skapa nya bilder och redigera uppladdade. Tydliga säkerhetsspärrar — vägrar manipulera vissa typer av material.",
        kind: "service",
        requiresAccount: true,
        notes: "Kräver konto. Kolla skolans riktlinjer.",
      },
      {
        name: "Google Gemini (Nano Banana)",
        url: "https://gemini.google.com/",
        description:
          "Googles AI med kraftfull bildredigering — kodnamn Nano Banana. Bra på att behålla detaljer i ursprungsbilden vid manipulation. Ofta svårast att avslöja.",
        kind: "service",
        requiresAccount: true,
        notes: "Kräver Google-konto. Kolla skolans riktlinjer.",
      },
      {
        name: "Google Lens — omvänd bildsökning",
        url: "https://lens.google.com/",
        description:
          "Sök efter var en bild förekommer på internet. Ovärderligt verktyg när du undrar om en bild är manipulerad eller tagen ur sitt sammanhang.",
        kind: "service",
      },
    ],
  },

  {
    id: "granska-ditt-flode",
    number: "1.3",
    title: "Granska ditt flöde",
    chapter: "flodet",
    level: "workshop-byggsten",
    blurb:
      "Visar att algoritmen byggt två helt olika världsbilder för två klassrumsgrannar.",
    purpose:
      "Systemförståelse: lärare/elever ska inse att 'flödet' inte är samma flöde för alla.",
    trains: ["systemforstaelse", "algoritm-medvetenhet"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "15–20 min",
    durationMinutes: 20,
    digitalTools: true,
    materials: "Två mobiler från två olika personer/elever.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska tillsammans med en kollega lägga era mobiler bredvid varandra och scrolla i samma app. Syftet är att i kroppen upptäcka att ”flödet” inte är ett gemensamt flöde — det är ett SKRÄDDARSYTT flöde, individuellt för varje användare. Två kollegor som sitter bredvid varandra lever i två olika informationsverkligheter. Eleverna gör det med klasskamraten på rasten.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Hitta en bordsgranne",
            body: "Helst någon vars liv ser annorlunda ut än ditt (annan ålder, annat intresse, annan ämneskombination). Lägg era mobiler bredvid varandra.",
          },
          {
            title: "Öppna samma app",
            body: "TikTok, Instagram eller Facebook. Scrolla tio inlägg på var. Säg ingenting om eget innehåll än — observera.",
          },
          {
            title: "Jämför",
            body: "Vad skiljer mellan flödena? Skoj eller allvar? Personer eller varor? Politiska eller opolitiska? Pojkar eller flickor i klippen? Skriv ner tre observationer.",
          },
          {
            title: "Komplettera meningen",
            body: "”Min telefon tror jag är intresserad av…” Skriv den. Stämmer det?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Algoritmen ”vet” inte vad du tycker. Den vet vad du KLICKAR PÅ. Ofta är det samma sak — men inte alltid.",
          "Det DU inte ser i ditt flöde är minst lika intressant som det du ser.",
          "För eleverna är detta normaltillstånd. De har aldrig haft ett kronologiskt flöde.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Algoritmiska flöden är den största pedagogiska utmaningen vi inte pratar om. Här förklarar vi vad de gör med ungas världsbild — och varför det är skolans angelägenhet.",
      sections: [
        {
          question: "Vad är ett algoritmiskt flöde, egentligen?",
          answer: [
            {
              type: "p",
              text: "Ett algoritmiskt flöde är en lista innehåll som rangordnas av en mjukvara, inte av kronologi eller mänsklig redaktör. Du ser INTE det som hände senast, eller det dina vänner postade, eller det dagens viktigaste händelser. Du ser det som algoritmen tror du SKA STANNA på.",
            },
            {
              type: "p",
              text: "Algoritmens optimeringsmål är ”engagement” — hur länge du tittar, hur mycket du klickar, hur ofta du återkommer. Den optimeras inte för att du ska BLI INFORMERAD, MÅ BRA eller VARA FRI. Bara att du STANNAR.",
            },
            {
              type: "p",
              text: "Två personer som öppnar samma app ser därför två olika världar. Inte små skillnader — radikalt olika världar. Olika nyheter, olika åsikter, olika sanningar.",
            },
          ],
        },
        {
          question: "Vad gör det med ungas världsbild?",
          answer: [
            {
              type: "p",
              text: "Tre dokumenterade effekter:",
            },
            {
              type: "steps",
              steps: [
                {
                  title: "Filterbubblan",
                  body: "När algoritmen serverar dig mer av det du redan klickar på, hamnar du i en bubbla av likasinnade åsikter. Du ser inte motargument. Du vet inte hur många som tycker annorlunda. Världen verkar mer enhetlig än den är.",
                },
                {
                  title: "Polariseringen",
                  body: "Engagement-optimering belönar starka känslor. Ilska, indignation, rädsla genererar mer klick än balanserad analys. Algoritmen har inget motiv att visa det balanserade — det stannar inte folk lika länge.",
                },
                {
                  title: "Verklighetsklyftan",
                  body: "Två 13-åringar i samma klassrum kan ha helt olika uppfattning om vad som händer i världen — beroende på vilket flöde de fastnat i. När de pratar förbi varandra på rasten är det inte alltid attitydskillnader. Det är OLIKA INFORMATION.",
                },
              ],
            },
          ],
        },
        {
          question: "Varför är det skolans angelägenhet?",
          answer: [
            {
              type: "p",
              text: "Skolans grunduppdrag inkluderar att förbereda för en demokrati. En demokrati förutsätter att vi har en någorlunda gemensam bild av verkligheten — fakta vi kan vara oense om värderingsmässigt, men inte oense om existensen av.",
            },
            {
              type: "p",
              text: "Algoritmiska flöden hotar den gemensamma faktabasen. Inte genom att ljuga (även om de också gör det) — utan genom att SORTERA vilken sanning du får se. Två personer kan båda ha rätt, samtidigt som de aldrig kan kommunicera.",
            },
            {
              type: "p",
              text: "Det är därför algoritm-medvetenhet är en demokratifråga, inte en teknikfråga.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här?",
          answer: [
            {
              type: "list",
              items: [
                "GÖR DET KONKRET. Den här övningen är exempel — när två elever ser två olika flöden bredvid varandra blir abstraktionen ”filterbubbla” en upplevelse.",
                "BEKRÄFTA ELEVERNAS ERFARENHET. ”Du vet ju egentligen att din kompis ser andra saker i sin telefon, eller hur?” De känner det redan. Vi ger dem språk.",
                "LÅT DEM PRÖVA BYTE. En variant: byt mobiler i en minut. Hur känns det att scrolla någon annans flöde? Vad ser du som du aldrig får se annars?",
                "DISKUTERA AFFÄRSMODELLEN. ”Vem TJÄNAR på att du stannar i appen? Vem äger appen? Vad vill de att du gör?”",
                "PEKA PÅ KONSTRUKTIVA ALTERNATIV. Nyhetstjänster med mänskliga redaktörer (DN, SVT, P3 Nyheter), prenumerationer, RSS — det finns sätt att läsa nyheter som INTE är algoritmiska.",
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
                "Min telefon visar mig något annat än min kompis telefon visar dem.",
                "Vad jag ser i mitt flöde är ett VAL från algoritmen, inte ”det som hände”.",
                "Algoritmen vill att jag stannar — inte att jag mår bra eller blir informerad.",
                "Jag kan välja andra källor. Mänskliga redaktörer finns. De är inte borta — bara svårare att hitta.",
                "Att jag och min kompis har olika uppfattningar är inte alltid att vi tycker olika. Ibland är det att vi ser olika saker.",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Prata med vårdnadshavare i förväg om att eleverna får ta med mobil — eller använd lärarens + en deltagares.",
          "Förbered en regel om vad som INTE delas i klassrummet (privata samtal, kompis-konton, dejting).",
          "Ha en plan B: om obekvämt innehåll dyker upp — säg till mig.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Parvis",
            body: "Två elever lägger mobilerna bredvid varandra. Scrolla 5 inlägg på var.",
          },
          {
            title: "Beskriv",
            body: "Vad handlar inläggen om? Vem är skaparen? Vad är poängen?",
          },
          {
            title: "Jämför",
            body: "Vad skiljer? Skoj/allvar? Personer/varor? Pojkar/flickor i klippen?",
          },
          {
            title: "Skriv en gemensam mening",
            body: "”Min telefon tror jag är intresserad av…”",
          },
          {
            title: "Stort samtal",
            body: "Vem bestämde vad ni får se? Är det rättvist?",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska tillsammans med en kompis upptäcka att era flöden inte är samma flöde — fast ni går i samma klass.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Lägg din mobil bredvid din kompis mobil.",
          "Öppna TikTok eller Instagram. Scrolla 5 inlägg på var.",
          "Beskriv för varandra: vad handlar inläggen om? Vem är skaparen? Vad är poängen?",
          "Hitta tre saker som skiljer mellan flödena. Skriv ner dem.",
          "Skriv en mening tillsammans: ”Min telefon tror jag är intresserad av…”",
        ],
      },
      { type: "h", text: "Viktigt att veta" },
      {
        type: "p",
        text: "Om det kommer upp något konstigt eller obehagligt — säg till läraren direkt. Dela inte privata samtal eller kompis-konton.",
      },
    ],

    discussion: [
      "Vem är ”produkten” när tjänsten är gratis?",
      "Vad får DIN telefon inte visa dig? Vad missar du?",
      "Skulle du vilja byta flöde med någon i en vecka?",
    ],
    pitfalls: [
      "Var beredd på att obekvämt innehåll dyker upp. Ha en plan: ”om det kommer upp något konstigt, säg till mig.”",
      "Förbered ett avsnitt om vad man INTE delar i klassrummet (privata samtal, kompis-konton, dejting).",
    ],
    variations: ["Byt mobiler i 1 minut. Hur känns det att scrolla någon annans flöde?"],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "ios-2025",
        relevance:
          "Internetstiftelsens kartläggning av ungas algoritmiska flöden — bekräftar att två klassrumsgrannar redan har två olika världsbilder.",
      },
      {
        ref: "mathur-2019",
        relevance:
          "Att flödet är optimerat för engagemang, inte för användaren — en dark pattern på system-nivå, inte bara per knapp. Övningen synliggör mönstret.",
      },
    ],
    chainsWellWith: ["fanga-dark-patterns", "ai-eller-riktig"],
  },
];
