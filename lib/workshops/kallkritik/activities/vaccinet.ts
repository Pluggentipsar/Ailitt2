import type { Activity } from "../types";

export const vaccinet: Activity[] = [
  {
    id: "bad-news-game",
    number: "7.1",
    title: "Bad News Game",
    chapter: "vaccinet",
    level: "workshop-byggsten",
    blurb:
      "Online-spel där du driver ett falskt-nyhetsbolag. Du provar på knepen inifrån.",
    purpose:
      "Träna motståndskraft mot desinformation genom att spela rollen som producent.",
    trains: ["prebunking", "manipulationsmedvetenhet"],
    ageRanges: ["ak4-6", "ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "30–45 min",
    durationMinutes: 45,
    digitalTools: true,
    materials:
      "Bad News finns på svenska på getbadnews.com/se/ (länk längst upp på sidan) — fungerar i webbläsaren utan konto. Engelska originalet finns på getbadnews.com.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska spela Bad News — ett evidensbaserat spel där du driver ett falskt-nyhetsbolag och försöker samla följare. Det låter ironiskt men det är seriös prebunking-forskning (Roozenbeek & van der Linden, 2019). När du själv har använt teknikerna känner du igen dem när någon annan använder dem mot dig. Spelet finns på svenska — en stor fördel för åk 4–6.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna spelet (svensk version)",
            body: "Klicka på ”Bad News (svensk version)” längst upp på den här sidan, eller gå till getbadnews.com/se/. Spelet är gratis, tar 15–20 minuter och fungerar direkt i webbläsaren utan konto.",
          },
          {
            title: "Spela igenom",
            body: "Du börjar som en liten konspirationsteoretiker. Vart spelet leder är poängen — låt dig dras med.",
          },
          {
            title: "Notera teknikerna",
            body: "Spelet introducerar dem en i taget: anonyma källor, ad hominem (personangrepp), polarisering, falsk balans, falsk expertis, trolling. Skriv ner vilka du möter.",
          },
          {
            title: "Reflektera",
            body: "Vilka av spelets tekniker har du SETT senast i RIKTIGA nyheter eller på TikTok? Var i Bad News kände du dig obekväm — och varför just där?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Den svenska versionen (getbadnews.com/se/) är nytillkommen och gör spelet tillgängligt även för åk 4–6 — tidigare var språket ett hinder.",
          "Effekten av spelet är mätbart varaktig (Roozenbeek & van der Linden, 2019) — men bara om du REFLEKTERAR efteråt. Spelet utan reflektion blir bara underhållning.",
          "Det är inte att eleverna ska bli desinformations-producenter. Det är att de ska SE strukturen utifrån.",
        ],
      },
    ],

    externalTools: [
      {
        name: "Bad News (svensk version)",
        url: "https://www.getbadnews.com/se/",
        description:
          "Spela Bad News direkt på svenska. Gratis, ingen inloggning, fungerar i webbläsaren. Rekommenderas för alla från åk 4 och uppåt.",
        kind: "game",
      },
      {
        name: "Bad News (engelska originalet)",
        url: "https://www.getbadnews.com/",
        description:
          "Den engelska versionen där forskningen ursprungligen gjordes. Något mer polerad. Bra för gymnasiet eller engelska språkträningen.",
        kind: "game",
      },
    ],

    deepDive: {
      intro:
        "Bad News är en av de mest studerade pedagogiska interventionerna mot desinformation. Här förklarar vi forskningen bakom — och varför ”att låta eleverna spela falskt-nyhetsbolag” faktiskt är pedagogiskt försvarbart.",
      sections: [
        {
          question: "Vad är ”inoculation theory” och hur kopplar det till spelet?",
          answer: [
            {
              type: "p",
              text: "Inoculation theory är en psykologisk teori från 1960-talet (McGuire) som drog en parallell mellan immunsystemet och tänkandet: om vi exponerar människor för en FÖRSVAGAD version av ett manipulationsknep, kan vi göra dem motståndskraftiga mot den ”fulla” versionen senare.",
            },
            {
              type: "p",
              text: "Bad News operationaliserar denna teori i spelform. Spelaren möter manipulationstekniker i en LEKFULL, KONTROLLERAD kontext — utan risken att faktiskt övertygas, eftersom hela situationen är märkt som spel.",
            },
            {
              type: "p",
              text: "Resultatet är att spelaren senare känner igen samma tekniker när de möts ”på riktigt” — i en TikTok-video, en YouTube-rekommendation, en politisk reklamfilm.",
            },
          ],
        },
        {
          question: "Vad visade studien?",
          answer: [
            {
              type: "p",
              text: "Roozenbeek & van der Linden (2019) testade Bad News experimentellt:",
            },
            {
              type: "list",
              items: [
                "Spelare bedömde MISSTROENDE för manipulativa nyhetsrubriker dramatiskt högre efter att ha spelat — jämfört med kontrollgrupp.",
                "Effekten var REAL, inte placebo: spelare blev INTE generellt mer misstänksamma mot all media (vilket hade varit dåligt).",
                "Effekten var STABIL: kvarstod efter 2 månader med begränsad avtagning.",
                "Effekten var INTE beroende av politiska åsikter — spelare från olika delar av politiska spektrumet fick samma effekt.",
              ],
            },
            {
              type: "p",
              text: "Senare studier (Lewandowsky et al., flera) har bekräftat detta i andra kontexter och språk. Det är en av de mest robusta pedagogiska fynden inom desinformation.",
            },
          ],
        },
        {
          question: "Vilka tekniker lär spelet ut?",
          answer: [
            {
              type: "p",
              text: "Bad News fokuserar på sex grundtekniker:",
            },
            {
              type: "list",
              items: [
                "IMPERSONATION — att utge sig för att vara någon annan (förfalska källor, kopiera kända varumärken).",
                "EMOTION — känslostarkt språk, FOMO, ilska som engagement-drivers.",
                "POLARIZATION — sätta grupper mot varandra, framställa allt som ”vi mot dem”.",
                "CONSPIRACY — skapa narrativ där dolda krafter manipulerar världen.",
                "DISCREDIT — attacker mot personer som motsäger desinformation (ad hominem).",
                "TROLLING — provokativt innehåll designat för att framkalla starka reaktioner.",
              ],
            },
            {
              type: "p",
              text: "Varje teknik motsvarar verkliga taktiker som används i moderna desinformations-kampanjer. När eleverna lär sig dem i spelet känner de igen dem i sina egna flöden.",
            },
          ],
        },
        {
          question: "Hur lägger jag upp lektionen?",
          answer: [
            {
              type: "list",
              items: [
                "INTRODUKTION (5 min). ”Idag ska ni JOBBA i en fejk-nyhetsfabrik — för att lära er hur de fungerar.” Förvänta motstånd — och förklara att det är PREBUNKING.",
                "SPELA (30 min). Individuellt eller i par. Det är ett ensamspel, men diskussion under tiden hjälper.",
                "STORT SAMTAL (15 min). Vilka knep mötte ni? Var det smartare än ni trodde? Vilka känner ni igen från riktiga nyheter?",
                "AVSLUTNING (10 min). Var i ER vardag möter ni de här teknikerna? TikTok? Snapchat? Familjegrupper? Räkna konkret.",
                "REFLEKTION SOM LÄXA. Kom till nästa lektion med ett exempel från eget flöde där du sett en av Bad News-teknikerna.",
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
                "Fejk-nyheter är inte slump — det är strukturerade tekniker.",
                "Teknikerna har namn: impersonation, emotion, polarization, conspiracy, discredit, trolling.",
                "När jag känner igen TEKNIKEN kan jag pausa innan jag tror eller delar.",
                "Det är inte mitt fel om jag blivit lurad. Det är designerns jobb. Men jag kan lära mig.",
                "Människor på alla sidor använder dessa knep. Mitt jobb är att se dem — oavsett vem som använder dem.",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Övningens upplägg" },
      {
        type: "p",
        text: "Bad News är ett evidensbaserat prebunking-spel. Det fungerar genom att eleven SPELAR rollen som desinformations-producent och därigenom blir immun mot teknikerna när de möter dem utanför spelet.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Spelet finns på svenska",
        body:
          "Använd getbadnews.com/se/ för svensk version — fungerar utmärkt från åk 4. Engelska originalet (getbadnews.com) går också bra för gymnasiet eller som engelska-träning. Båda är gratis och kräver inget konto.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Idag ska ni JOBBA på en fejk-nyhetsfabrik — för att lära er hur de fungerar.”",
            time: "5 min",
          },
          {
            title: "Spela",
            body: "Par eller individuellt.",
            time: "30 min",
          },
          {
            title: "Stort samtal",
            body: "Vilka knep mötte ni? Var det smartare än ni trodde?",
            time: "15 min",
          },
          {
            title: "Avslut",
            body: "Var har ni SETT de här knepen i RIKTIGA nyheter eller på TikTok?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du SPELA en falsk-nyhets-producent. Inte för att bli det — utan för att lära dig känna igen knepen när andra använder dem mot dig.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Klicka på ”Bad News (svensk version)” längst upp på sidan, eller gå till getbadnews.com/se/.",
          "Spela igenom hela spelet (ca 15–30 minuter).",
          "Du behöver inget konto. Du kan pausa när du vill.",
          "Skriv ner de knep spelet lär dig: anonyma källor, ad hominem (personangrepp), polarisering, falsk balans, troll, falsk expertis.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilka knep mötte du i spelet?",
          "Var har du SETT de här knepen i riktiga nyheter eller på TikTok?",
          "Hur kommer du att läsa nyheter annorlunda nästa vecka?",
        ],
      },
    ],

    // Klassrumsspår. Kort med flit: 30 av lektionens 60 minuter är spelet
    // självt, och det bor på getbadnews.com — inte här. Spåret ramar in före
    // och bär efterarbetet, där de sex teknikerna listas som referens så
    // eleverna kan NAMNGE det de mötte. Det är där prebunkingen fastnar.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "I dag jobbar ni på en fejk-nyhetsfabrik" },
          { type: "p", text: "För att lära er hur de fungerar." },
        ],
      },
      {
        etikett: "Varför vi gör det så här",
        blocks: [
          {
            type: "p",
            text: "Att möta ett knep i försvagad form — i ett spel — gör dig motståndskraftig mot den fulla versionen senare. Som ett vaccin.",
          },
        ],
      },
      {
        etikett: "Spelet",
        blocks: [
          { type: "h", text: "getbadnews.com/se" },
          {
            type: "p",
            text: "Inget konto behövs. Du kan pausa när du vill. 15–30 minuter.",
          },
        ],
      },
      {
        etikett: "Medan ni spelar",
        blocks: [
          {
            type: "p",
            text: "Skriv ner varje knep spelet lär er. Ni ska kunna namnge dem efteråt.",
          },
        ],
      },
      {
        etikett: "De sex knepen",
        blocks: [
          {
            type: "list",
            items: [
              "Anonyma källor",
              "Ad hominem — personangrepp",
              "Polarisering",
              "Falsk balans",
              "Troll",
              "Falsk expertis",
            ],
          },
        ],
      },
      {
        etikett: "Efter spelet",
        blocks: [
          { type: "h", text: "Vilka knep mötte ni?" },
          { type: "p", text: "Och var det smartare än ni trodde?" },
        ],
      },
      {
        etikett: "Den viktiga frågan",
        blocks: [
          {
            type: "h",
            text: "Var har ni SETT de här knepen på riktigt?",
          },
          { type: "p", text: "I nyheter. På TikTok. I en YouTube-rekommendation." },
        ],
      },
      {
        etikett: "Och framåt",
        blocks: [
          {
            type: "p",
            text: "Hur kommer ni att läsa nyheter annorlunda nästa vecka?",
          },
        ],
      },
    ],

    variations: [
      "Låt eleverna byta ut huvudpersonen i spelet mot en ”AI” — vad skulle förändras?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Studien som låg till grund för spelet — visar mätbart att eleverna efter genomspel blir bättre på att känna igen desinformations-knep.",
      },
      {
        ref: "vanderlinden-2017",
        relevance:
          "Inoculation-teorin: att förvarna mot manipulationstekniker är vaccin. Spelet är teorin i spelform.",
      },
    ],
    chainsWellWith: ["skriv-fejkad-nyhetsartikel", "cranky-uncle"],
  },

  {
    id: "cranky-uncle",
    number: "7.2",
    title: "Cranky Uncle",
    chapter: "vaccinet",
    level: "workshop-byggsten",
    blurb:
      "Tecknad humor-spel som lär ut manipulationstekniker.",
    purpose:
      "Visuellt och tillgängligt prebunking-spel. Perfekt för åk 4.",
    trains: ["prebunking", "manipulationsmedvetenhet"],
    ageRanges: ["ak4-6", "ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "20–30 min",
    durationMinutes: 30,
    digitalTools: true,
    materials:
      "Cranky Uncle finns på svenska — välj språk på app.crankyuncle.info/language (länk längst upp på sidan). Fungerar i webbläsaren utan konto.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska spela Cranky Uncle — ett tecknat prebunking-spel som lär ut retoriska manipulationstekniker. Mer tillgängligt än Bad News (visuellt, kan spelas tillsammans). Bygger på Cook, Lewandowsky & Eckers forskning om inoculation mot manipulationsretorik. Spelet finns på svenska men du måste välja språk innan du startar — annars kör det engelska som standard.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna spelet och välj språk",
            body: "Klicka på ”Cranky Uncle (välj svenska)” längst upp på den här sidan, eller gå direkt till app.crankyuncle.info/language. Välj SWEDISH/Svenska först — annars kör spelet engelska som standard.",
          },
          {
            title: "Spela 10 frågor",
            body: "”Cranky Uncle” presenterar argument. Din uppgift: vilken manipulationsteknik använder han? Välj rätt teknik från listan.",
          },
          {
            title: "Notera när du fastnar",
            body: "Det är ofta då spelet just introducerat en ny teknik. Spelet bygger på sig själv — varje teknik kommer tillbaka.",
          },
          {
            title: "Reflektera",
            body: "Vilka av Cranky Uncles knep har du SETT senast i den här veckan — i nyheter, i en familjedebatt, på sociala medier?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Glöm inte språkvalet — många missar det och tror sedan att spelet bara finns på engelska. Med svenska språkvalet är spelet tillgängligt ned i åk 4.",
          "Cranky Uncle använder klimat-desinformation som genomgående tema. Det är inte slump — det är där originalforskningen var.",
          "Skillnaden mot Bad News: här lär man känna IGEN tekniker, snarare än att tillämpa dem själv.",
        ],
      },
    ],

    externalTools: [
      {
        name: "Cranky Uncle (välj svenska)",
        url: "https://app.crankyuncle.info/language",
        description:
          "Öppnar språkväljaren — välj SWEDISH/Svenska först, annars kör spelet engelska som standard. Sedan klickar du dig vidare in i spelet.",
        kind: "game",
        notes: "Viktigt: välj svenska INNAN du börjar spela.",
      },
    ],

    deepDive: {
      intro:
        "Cranky Uncle är ett pedagogiskt spel framtaget i samarbete med klimatforskare. Här förklarar vi vad det undervisar specifikt om — och varför ”tekniker över fakta” är effektivare prebunking.",
      sections: [
        {
          question: "Vad är skillnaden mellan Bad News och Cranky Uncle?",
          answer: [
            {
              type: "p",
              text: "Båda är prebunking-spel, men de fungerar olika:",
            },
            {
              type: "list",
              items: [
                "BAD NEWS — du SPELAR rollen som desinformations-producent. Du tillämpar teknikerna själv. Lärandet sker genom att GÖRA.",
                "CRANKY UNCLE — du KÄNNER IGEN tekniker som någon annan (Cranky Uncle) använder. Lärandet sker genom att IDENTIFIERA.",
              ],
            },
            {
              type: "p",
              text: "Båda har sina fördelar. Bad News är mer engagerande för äldre elever. Cranky Uncle är mer tillgängligt för yngre — och tar mindre tid.",
            },
            {
              type: "p",
              text: "De kompletterar varandra. En klass kan spela Cranky Uncle i åk 4–5, Bad News i åk 7–8.",
            },
          ],
        },
        {
          question: "Vad säger forskningen om att lära ut ”tekniker” snarare än fakta?",
          answer: [
            {
              type: "p",
              text: "Det här är en av de viktigaste insikterna från modern desinformations-forskning.",
            },
            {
              type: "p",
              text: "Cook, Lewandowsky & Ecker (2017) jämförde två pedagogiska strategier mot klimat-desinformation:",
            },
            {
              type: "list",
              items: [
                "FAKTA-baserad: ge eleverna RÄTT FAKTA om klimatet. ”Så här ligger det till.”",
                "TEKNIK-baserad: ge eleverna RETORISKA TEKNIKER som används i klimat-desinformation. ”Så här försöker man lura dig.”",
              ],
            },
            {
              type: "p",
              text: "Resultat: TEKNIK-strategin var DRAMATISKT mer effektiv. Den gav eleverna VARAKTIG motståndskraft som FUNGERADE OCKSÅ för desinformation om OBESLÄKTADE ämnen som de aldrig fått fakta om.",
            },
            {
              type: "p",
              text: "Det är som att lära någon ”fiska” istället för att ge dem fisk. Tekniker är generaliserbara. Fakta är specifika.",
            },
          ],
        },
        {
          question: "Vilka tekniker lär Cranky Uncle ut?",
          answer: [
            {
              type: "p",
              text: "Spelet fokuserar på fem ”FLICC”-tekniker — Fake experts, Logical fallacies, Impossible expectations, Cherry picking, Conspiracy theories:",
            },
            {
              type: "list",
              items: [
                "FAKE EXPERTS — uttalanden från ”experter” som inte är experter på området.",
                "LOGICAL FALLACIES — felaktiga resonemang som ser logiska ut (ad hominem, false dichotomy, slippery slope).",
                "IMPOSSIBLE EXPECTATIONS — kräva 100% säkerhet innan man tror på något.",
                "CHERRY PICKING — välja ut endast den data som stödjer ens åsikt.",
                "CONSPIRACY THEORIES — påstå att ”etablissemanget” döljer sanningen.",
              ],
            },
            {
              type: "p",
              text: "FLICC-modellen är användbar för läraren själv. Den ger ett ramverk för att benämna det som händer i debatter, kommentarstrådar och politisk retorik.",
            },
          ],
        },
        {
          question: "Hur använder jag detta i mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "VAR EN MEDSPELARE. Spela tillsammans på storskärm för åk 4. Ge betänketid, diskutera valen. Det är inte hastighet, det är förståelse.",
                "FÖRBEREDA MED VOKABULÄR. Innan ni spelar — gå igenom orden: ”fake expert”, ”logical fallacy”, ”cherry picking”. På svenska om det funkar bättre.",
                "EFTERÅT — TILLÄMPA. Visa en TikTok-video eller en kommentarstråd och fråga: ”Vilken Cranky Uncle-teknik ser ni här?”",
                "RETURNER UNDER ÅRET. Spela inte EN gång och sluta. Visa en ”teknikquiz” då och då under terminen.",
                "KOPPLA TILL EGNA OMRÅDEN. Cranky Uncle använder klimat. Eleverna kan tillämpa samma tekniker på spel-debatter, idrott, fritidsval — det de bryr sig om.",
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
                "Desinformation följer mönster. Mönstren har namn.",
                "Att lära sig HUR någon försöker övertyga är mer användbart än att memorera VAD som är sant.",
                "En ”expert” är inte alltid en expert på just det som diskuteras.",
                "Logiska fel ser ofta logiska ut. Det är poängen.",
                "Att vara skeptisk är inte att vara cynisk. Det är att tänka.",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Övningens upplägg" },
      {
        type: "p",
        text: "Cranky Uncle är ett visuellt prebunking-spel baserat på Cook et al. forskning om inoculation-teori. Funkar väl för yngre åldrar (åk 4 och uppåt).",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Välj svenska INNAN ni börjar",
        body:
          "Spelet finns på svenska men kör engelska som standard. Gå till app.crankyuncle.info/language och välj SWEDISH/Svenska först. Visa det på storskärm för klassen så alla startar med samma språk — annars sitter halva klassen och kämpar med engelska i onödan.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Klassrum",
            body: "”Cranky Uncle är jobbig — vi ska träna på att INTE bli övertygade.” Visa språkvalet på storskärm.",
            time: "5 min",
          },
          {
            title: "Spela",
            body: "Individuellt eller i par. Gå runt och hjälp dem som missade språkvalet.",
            time: "20 min",
          },
          {
            title: "Diskussion",
            body: "Var fastnade du? Vilka knep var smartast?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag möter du Cranky Uncle. Han försöker övertyga dig om konstiga saker — din uppgift är att INTE bli övertygad.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Klicka på ”Cranky Uncle (välj svenska)” längst upp på sidan, eller gå till app.crankyuncle.info/language.",
          "Välj SWEDISH/Svenska FÖRST — annars kör spelet engelska.",
          "Spela 10 frågor. Det räcker.",
          "När du fastnar — läs ledtråden noga. Det är ofta då ett nytt knep introduceras.",
          "Skriv ner de knep du upptäcker.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Var fastnade du?",
          "Vilka knep var smartast?",
          "Vad är skillnaden mellan en åsikt och en manipulation?",
        ],
      },
    ],

    // Klassrumsspår. Kort — spelet är 20 av 30 minuter och bor på
    // crankyuncle.info. Men språkvalet får en egen slide: det är övningens
    // vanligaste praktiska haveri, och handledningen säger uttryckligen att
    // det ska visas på storskärm. FLICC-teknikerna ligger som referens till
    // efterarbetet så eleverna kan namnge det de mötte.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Möt Cranky Uncle" },
          {
            type: "p",
            text: "Han försöker övertyga er om konstiga saker. Er uppgift: bli inte övertygade.",
          },
        ],
      },
      {
        etikett: "Först — och detta är viktigt",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Välj SVENSKA innan ni börjar",
            body: "Spelet kör engelska som standard. app.crankyuncle.info/language → välj Swedish. Missar ni det sitter ni och kämpar med engelska i onödan.",
          },
        ],
      },
      {
        etikett: "Sen spelar ni",
        blocks: [
          { type: "h", text: "Tio frågor räcker" },
          {
            type: "p",
            text: "Cranky Uncle lägger fram ett argument. Ni avgör vilken manipulationsteknik han använder.",
          },
        ],
      },
      {
        etikett: "När ni fastnar",
        blocks: [
          {
            type: "p",
            text: "Läs ledtråden noga. Det är ofta då en ny teknik introduceras — och spelet bygger på sig självt, varje teknik kommer tillbaka.",
          },
        ],
      },
      {
        etikett: "Teknikerna att känna igen",
        blocks: [
          {
            type: "list",
            items: [
              "Falska experter",
              "Logiska felslut",
              "Omöjliga förväntningar",
              "Cherry-picking",
              "Konspirationsteorier",
            ],
          },
        ],
      },
      {
        etikett: "Efteråt",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: ["Var fastnade du?", "Vilka knep var smartast?"],
          },
        ],
      },
      {
        etikett: "Den svåra frågan",
        blocks: [
          {
            type: "h",
            text: "Vad är skillnaden mellan en åsikt och en manipulation?",
          },
        ],
      },
      {
        etikett: "Varför vi tränar tekniker",
        blocks: [
          {
            type: "p",
            text: "Inte fakta. Tekniker känner ni igen även i ämnen ni inte kan något om — fakta gäller bara det ämne de handlar om.",
          },
        ],
      },
    ],

    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "cook-2017",
        relevance:
          "Studien bakom spelet. Att lära ut retoriska manipulationstekniker (inte enskilda fakta) ger varaktigare immunitet mot desinformation.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Bekräftar att prebunking via tekniker fungerar bättre än debunking efter att man trott på något.",
      },
    ],
    chainsWellWith: ["bad-news-game"],
  },
];
