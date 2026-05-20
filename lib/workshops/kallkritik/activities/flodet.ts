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
  },

  {
    id: "vilken-ar-riktig",
    number: "1.2",
    title: "Vilken är riktig?",
    chapter: "flodet",
    level: "workshop-byggsten",
    blurb:
      "Två-bild-jämförelse. Visar att den som ser perfekt ut ofta är fejket.",
    purpose:
      "Träna detaljgranskning och språk för att beskriva vilka signaler som blev fel.",
    trains: ["detaljgranskning", "kallkritik"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "10 min (workshop) / 25 min (klassrum)",
    durationMinutes: 25,
    digitalTools: true,
    materials:
      "Två bilder bredvid varandra — en foto, en AI. Helst samma motiv/scenario.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska jämföra två bilder — ett pressfoto och en AI-genererad bild — och avgöra vilken som är vilken. Övningen tränar något specifikt: att sätta ORD på vilka signaler du litar på. Det är när du kan beskriva signalerna som du kan lära ut dem.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Tyst tittande i 30 sekunder",
            body: "Workshopledaren visar Bild A och Bild B bredvid varandra. Säg inget. Bara titta.",
          },
          {
            title: "Skriv ner din gissning",
            body: "Vilken bild är riktig? Och VARFÖR tror du det? Skriv ner minst en konkret signal du litade på.",
          },
          {
            title: "Diskutera med bordsgrannen",
            body: "Jämför signaler. Tittade ni på samma saker? Tittade någon på något du missade?",
          },
          {
            title: "Hör avslöjandet",
            body: "Workshopledaren visar facit. Räkna upp dina egna signaler igen. Vilka var rätt indikatorer? Vilka ledde dig fel?",
          },
          {
            title: "Studera AI-bilden förstorad",
            body: "Var FINNS spåren? Ofta händer, text, småskyltar i bakgrunden, ljussättning. Träna ögat på de specifika tecken som faktiskt avslöjar.",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det är OFTA den bild som ser mest ”perfekt” ut som är AI. Verkligheten är skitig, AI-bilder är polerade.",
          "Lateralt läsande spelar roll: hade du sökt på bilden i Google Lens hade du fått ett svar på 5 sekunder. Det är det här eleverna ska lära sig.",
          "Den här övningen är en signal-vokabulärsövning. När du har orden kan du lära ut dem.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att jämföra två bilder lär oss något om hur vi tänker — och hur vi bör tänka. Här är teorin bakom övningen.",
      sections: [
        {
          question: "Varför ser AI-bilder så ofta ”för perfekta” ut?",
          answer: [
            {
              type: "p",
              text: "AI-bilder genereras genom att modellen producerar det STATISTISKT VANLIGASTE för varje pixel. Allt som är ovanligt, asymmetriskt eller ”störande” jämnas ut till medelvärden.",
            },
            {
              type: "p",
              text: "Det betyder att ett AI-ansikte har för slät hud, för symmetriska ögon, för ”neutral” min. Bakgrunden har för få random objekt. Ljuset är för jämnt fördelat. Allt sitter ”lite för rätt”.",
            },
            {
              type: "p",
              text: "Verkliga foton är fulla av imperfektioner: skuggor på fel ställen, oskärpa där den inte borde vara, skitiga småskyltar i bakgrunden, ojämn hud. Det är dessa imperfektioner som är signaler om äkthet — och det är dem AI har svårast att efterlikna.",
            },
          ],
        },
        {
          question: "Vilka konkreta saker ska man titta på?",
          answer: [
            {
              type: "list",
              items: [
                "HÄNDER. AI är ökänd för att ha svårt med händer — för många fingrar, konstiga fingerleder, händer som smälter samman.",
                "TEXT. Skyltar, böcker, t-shirt-tryck — AI producerar ofta ”klotter” som ser ut som text men inte är riktiga ord.",
                "ÖGON. Pupillerna kan se ut åt olika håll. Reflexer i ögonen kan saknas eller vara fel.",
                "BAKGRUND. Småobjekt i bakgrunden kan vara ”smetade”, halv-genererade eller logiskt omöjliga.",
                "LJUS. Skuggor kan falla åt fel håll, vara för mjuka, eller saknas där de borde finnas.",
              ],
            },
            {
              type: "p",
              text: "Men: dessa tips är färskvara. AI-modellerna förbättras snabbt. Det som var en signal förra året kanske inte är det nästa år.",
            },
          ],
        },
        {
          question: "Vad är ”lateralt läsande” och varför funkar det?",
          answer: [
            {
              type: "p",
              text: "Wineburg & McGrew (2017) genomförde en banbrytande studie där de jämförde tre grupper: studenter, professorer, och professionella faktagranskare. Alla tre fick utvärdera oklara onlinekällor.",
            },
            {
              type: "p",
              text: "Studenter och professorer LÄSTE källan vertikalt — försökte hitta ledtrådar i designen, språket, källistan. Faktagranskarna gjorde tvärtom: de LÄMNADE källan direkt och öppnade nya flikar för att se vad andra sa om den.",
            },
            {
              type: "p",
              text: "Resultatet: faktagranskarna var dramatiskt bättre — för att de använde EXTERN information som verifieringspunkt. Detta är lateralt läsande. För AI-bilder betyder det: lägg bilden i Google Lens, sök efter originalet. På 5 sekunder vet du om bilden finns någon annanstans, och i så fall vad den verkliga kontexten är.",
            },
          ],
        },
        {
          question: "Hur tar jag det här till mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "GÖR DET MED BILDER ELEVERNA KÄNNER IGEN. Ta en bild ni jobbat med i SO:n och låt AI skapa en variant. Då blir kontrasten konkret.",
                "VISA HUR MAN ANVÄNDER GOOGLE LENS. Tryck-och-håll på en bild i mobilen, välj ”sök med bild”. Det är ett vardagsverktyg eleverna kan börja använda.",
                "PRATA OM TILLIT TILL KÄLLAN, INTE TILL BILDEN. Frågan är inte ”ser bilden äkta ut?” — frågan är ”vem visar mig den här bilden och varför?”.",
                "TRÄNA REGELBUNDET. Det räcker inte med en lektion. Visa en bild då och då på morgonsamlingen och fråga ”äkta eller AI?”.",
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
                "Den ”perfektaste” bilden är ofta AI.",
                "Mina ögon räcker inte — jag måste KOLLA.",
                "Google Lens är min vän. Andra bildsökverktyg också.",
                "Tonen i appen jag ser bilden i säger mig något. Är det en seriös källa?",
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
          "Plocka ett pressfoto från t.ex. Aftonbladet, SVT eller en nyhetsbyrå.",
          "Generera en AI-bild av samma scenario i Midjourney eller ChatGPT-bildgenerering.",
          "Skriv ut eller projicera bredvid varandra. Säkerställ att den ”riktiga” bilden inte är beskuren/redigerad.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Tystläge",
            body: "Eleverna tittar i 30 sekunder. Ingen får säga något.",
            time: "30 sek",
          },
          {
            title: "Individuellt",
            body: "Varje elev antecknar vilken som är riktig — och en motivering.",
          },
          {
            title: "Parvis",
            body: "Jämför motiveringar. Var det samma signaler de tittade på?",
          },
          {
            title: "Avslöja",
            body: "Vad gav magkänslan fel?",
          },
          {
            title: "Nästa nivå",
            body: "Visa AI-bilden förstorad. Var finns spåren? Ofta händer, text, småbakgrunder, ljussättning.",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska titta på två bilder och bestämma vilken som är riktig och vilken som är AI-genererad.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Tyst tittande i 30 sekunder. Säg inget.",
          "Skriv ner vilken bild du tror är riktig (A eller B).",
          "Skriv DIN motivering: vad såg du som gav dig den känslan?",
          "Vänd dig till din kompis. Berätta för varandra. Tittade ni på samma sak?",
          "Vänta på lärarens facit.",
        ],
      },
      { type: "h", text: "Efter avslöjandet" },
      {
        type: "p",
        text: "Studera den AI-bild läraren förstorar. Var hittar du spåren? Tips: titta på händer, text, småskyltar i bakgrunden, hur ljuset faller.",
      },
    ],

    discussion: [
      "Om vi inte kan se skillnad — vad gör vi då?",
      "När är det viktigt att veta vilken som är riktig? Lek? Reklam? Nyhet?",
      "Vem har ansvar för att tala om vad som är fejk på nätet?",
    ],
    pitfalls: [
      "Använd inte AI-bilder av barn — etiskt problem och dåligt exempel.",
      "Säkerställ att den ”riktiga” bilden inte är beskuren/redigerad — då blir avslöjandet förvirrande.",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "wineburg-mcgrew-2017",
        relevance:
          "Lateralt läsande — det är inte detaljerna i bilden som avslöjar fejket, utan jämförelsen mellan källor. Övningen introducerar detta steg-för-steg.",
      },
      {
        ref: "hobbs-2010",
        relevance:
          "Medielitteracitet som kompetens att analysera och dekonstruera. Övningen är dekonstruktion i sin enklaste form.",
      },
    ],
    chainsWellWith: ["ai-eller-riktig", "skriv-fejkad-nyhetsartikel"],
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
