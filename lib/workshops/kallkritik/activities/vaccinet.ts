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
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "30–45 min",
    durationMinutes: 45,
    digitalTools: true,
    materials: "getbadnews.com",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska spela Bad News — ett evidensbaserat spel där du driver ett falskt-nyhetsbolag och försöker samla följare. Det låter ironiskt men det är seriös prebunking-forskning (Roozenbeek & van der Linden, 2019). När du själv har använt teknikerna känner du igen dem när någon annan använder dem mot dig.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna getbadnews.com",
            body: "Spelet är gratis och tar 15–20 minuter. Det finns på engelska och delvis andra språk — kolla aktuell status.",
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
          "Spelet är på engelska. För svaga engelsktalare i åk 7: kör tillsammans i par eller med läraren som tolk.",
          "Effekten av spelet är mätbart varaktig (Roozenbeek & van der Linden, 2019) — men bara om du REFLEKTERAR efteråt. Spelet utan reflektion blir bara underhållning.",
          "Det är inte att eleverna ska bli desinformations-producenter. Det är att de ska SE strukturen utifrån.",
        ],
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
        tone: "note",
        body: "Spelet är på engelska. Det finns översatt på vissa språk men inte alltid svenska. Kolla aktuell status. För svaga engelsktalare i åk 7: kör i par eller med läraren som tolk.",
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
          "Gå till getbadnews.com",
          "Spela igenom hela spelet (ca 30 minuter).",
          "Spelet är på engelska — fråga läraren om du fastnar på ord.",
          "Skriv ner de knep spelet lär dig: anonyma källor, ad hominem, polarisering, falsk balans, troll, falskt expertis.",
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
    materials: "crankyuncle.com/game",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska spela Cranky Uncle — ett tecknat prebunking-spel som lär ut retoriska manipulationstekniker. Mer tillgängligt än Bad News (visuellt, lättare engelska, kan spelas tillsammans). Bygger på Cook, Lewandowsky & Eckers forskning om inoculation mot manipulationsretorik. Syftet är att se hur eleverna kommer att möta spelet — och hur du kan rama in det.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna crankyuncle.com/game",
            body: "Gratis. Spelet är på engelska men mer visuellt än Bad News.",
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
          "Spelet är tillgängligt ned i åk 4 — visuellt enkelt, tydliga val.",
          "Cranky Uncle använder klimat-desinformation som genomgående tema. Det är inte slump — det är där originalforskningen var.",
          "Skillnaden mot Bad News: här lär man känna IGEN tekniker, snarare än att tillämpa dem själv.",
        ],
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
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Klassrum",
            body: "”Cranky Uncle är jobbig — vi ska träna på att INTE bli övertygade.”",
            time: "5 min",
          },
          {
            title: "Spela",
            body: "Individuellt eller i par.",
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
          "Gå till crankyuncle.com/game",
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
    chainsWellWith: ["bad-news-game", "go-viral"],
  },

  {
    id: "go-viral",
    number: "7.3",
    title: "Go Viral!",
    chapter: "vaccinet",
    level: "prova-pa",
    blurb:
      "Kort spel (5–10 min) om hur desinformation sprids.",
    purpose:
      "Snabbinkörsport för yngre elever eller som värmeövning innan en större workshop.",
    trains: ["prebunking"],
    ageRanges: ["ak4-6", "ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "10 min",
    durationMinutes: 10,
    digitalTools: true,
    materials: "goviralgame.com",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska spela Go Viral! — ett kort prebunking-spel (5–10 minuter) från samma forskargrupp som Bad News. Det är kompakt och kraftfullt. Perfekt som värmeövning innan ett tyngre samtal — eller som snabbinkörsport för åk 4. När du själv har spelat kan du bedöma var det passar in i din egen undervisning.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna goviralgame.com",
            body: "Gratis. På engelska (men kortare och enklare än Bad News).",
          },
          {
            title: "Spela igenom",
            body: "Du försöker få lögner att sprida sig. Det tar 5–10 minuter. Notera vilka tekniker som introduceras.",
          },
          {
            title: "Tänk över format",
            body: "Hur kan du använda detta? Som öppningsövning på en lektion? Som en uppgift i hemmet? Som värmeövning innan Bad News?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det är kort och bör inte vara ENDA prebunking-aktivitet — använd som komplement.",
          "I åk 4: spela tillsammans på storskärm.",
          "I åk 6: individuellt — kan vara en bra ”fast finish”-uppgift.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Go Viral! är den minsta — men inte oviktigaste — av prebunking-spelen. Här förklarar vi varför korta interventioner också ger effekt, och hur du kan väva in spelet i din undervisning.",
      sections: [
        {
          question: "Fungerar verkligen 10-minuters-spel?",
          answer: [
            {
              type: "p",
              text: "Det fungerar förvånansvärt bra. Studier från van der Linden-gruppen (samma som Bad News) visar att till och med korta prebunking-interventioner ger mätbar effekt — om de följs upp med reflektion.",
            },
            {
              type: "p",
              text: "Tre anledningar:",
            },
            {
              type: "list",
              items: [
                "Inoculation kräver inte långa interventioner — vaccin är inte 10 sprutor, det är 1 spruta.",
                "Spelet PEKAR ut tekniker som eleven sedan ser i sin egen vardag. Effekten kommer från senare igenkännande, inte från spelet i sig.",
                "Att spelet är kort gör det MER TROLIGT att läraren faktiskt använder det. Något är bättre än perfekt.",
              ],
            },
          ],
        },
        {
          question: "När passar Go Viral! bäst?",
          answer: [
            {
              type: "p",
              text: "Eftersom det är så kort fungerar det i många kontexter:",
            },
            {
              type: "list",
              items: [
                "VÄRMEÖVNING — innan en längre källkritik-lektion. Eleverna kommer in i mindset.",
                "AVSLUTNINGSAKTIVITET — när alla är klara och 10 minuter är kvar.",
                "HEMUPPGIFT — föräldrar kan spela med, vilket öppnar familjesamtal.",
                "BRYGGA — mellan en lektion om vanlig källkritik och en lektion om AI och hallucinationer.",
              ],
            },
          ],
        },
        {
          question: "Vad är skillnaden mellan de tre prebunking-spelen?",
          answer: [
            {
              type: "list",
              items: [
                "GO VIRAL! — Kort (10 min). Fokus: hur desinformation SPRIDS. Bäst för åk 4–6 som introduktion.",
                "CRANKY UNCLE — Medellång (20–30 min). Fokus: KÄNNA IGEN retoriska tekniker. Bäst för åk 4–6 som fördjupning, eller åk 7 som intro.",
                "BAD NEWS — Lång (30–45 min). Fokus: TILLÄMPA tekniker själv. Bäst för åk 7+ som huvudaktivitet.",
              ],
            },
            {
              type: "p",
              text: "En idé för åk 6: spela Go Viral! i september, Cranky Uncle i november, Bad News i mars. Tre olika perspektiv genom året — med tilltagande djup.",
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Desinformation sprids — den uppstår inte av sig själv.",
                "Det är människor (eller botar) som BESTÄMMER att dela vidare. Jag är en av dem.",
                "När jag delar något jag inte kollat — är jag en del av spridningen.",
                "Att INTE dela är ett aktivt val. Det är inte passivt.",
                "Mitt klick spelar roll. För algoritmen, för spridningen, för mina vänner.",
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
        text: "Det här är en värmeövning eller snabbinkörsport — inte en huvudaktivitet. Använd som inledning eller som komplement till en längre lektion.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "list",
        items: [
          "I åk 4: spela tillsammans på storskärm. Diskutera vid varje val.",
          "I åk 6: individuellt eller i par.",
          "Avsluta med en gemensam reflektion på 5 minuter: vilka knep mötte vi?",
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Spela Go Viral! — ett kort spel om hur desinformation sprids på nätet.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till goviralgame.com",
          "Spela igenom — det tar 5–10 minuter.",
          "Notera vilka knep spelet visar för dig.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilket knep var enklast att upptäcka?",
          "Vilket var svårast?",
          "Har du sett något liknande i ditt eget flöde?",
        ],
      },
    ],

    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Kort prebunking-spel från samma forskargrupp som Bad News. Visar att även korta interventioner ger mätbar effekt.",
      },
    ],
    chainsWellWith: ["bad-news-game", "cranky-uncle"],
  },
];
