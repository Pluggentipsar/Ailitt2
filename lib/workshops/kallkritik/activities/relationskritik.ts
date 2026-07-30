import type { Activity } from "../types";

export const relationskritik: Activity[] = [
  {
    id: "vem-skulle-du-fraga",
    number: "6.1",
    title: "Vem skulle du fråga?",
    chapter: "relationskritik",
    level: "startovning",
    blurb:
      "Eleverna upptäcker att olika frågor hör hemma i olika relationer — och att vissa behov bara människor kan möta.",
    purpose:
      "Öppna samtalet om AI som samtalspartner utan att det blir för personligt. Ge eleverna ett första språk.",
    trains: ["relationskritik", "sjalvreflektion"],
    ageRanges: ["ak4-6", "ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 1 lektion",
    durationMinutes: 60,
    digitalTools: false,
    materials: "Lappar och pennor.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska göra övningen som en elev hade gjort — först öppet och tryggt, sen anonymt och känsligare. Syftet är att i kroppen uppleva strukturen: hur tröskeln för att svara ärligt sänks när lappen är anonym. När du själv har gjort det vet du varför Del B är pedagogiskt viktig — och du blir inte överraskad av elevernas svar.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "DEL A — öppet i klassen",
            body: "Workshopledaren läser upp uppvärmningsfrågor. ”Jag vill veta vad Australiens huvudstad heter.” Vem skulle DU fråga? Visa med fingrar eller hörn: K (kompis), V (vuxen hemma), L (lärare), A (AI), I (ingen).",
          },
          {
            title: "Notera vad som händer i rummet",
            body: "Är det enkelt eller obekvämt? Hur skulle det vara om frågan var känsligare? Reflektera över egna magkänslan.",
          },
          {
            title: "DEL B — anonymt på lapp",
            body: "Workshopledaren delar ut lappar och läser känsligare frågor. ”Jag har bråkat med min bästa kompis.” Skriv bara EN bokstav (K, V, L, E, A, I). Vik lappen. Lämna in.",
          },
          {
            title: "Sammanställning",
            body: "Workshopledaren räknar på tavlan utan att veta vem som svarat vad. Notera mönstret. Vad ser du? Vilka frågor vandrade till AI? Vilka till ”ingen”?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Lapparna är inte testresultat. De är information om hur eleverna tänker.",
          "Om många väljer ”AI” eller ”ingen” för känsliga frågor — det är INTE elevernas fel. Det är något att förstå.",
          "Den här övningen kan väcka känslor hos eleverna. Var beredd på att fånga upp efter lektionen.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Den här övningen är enkel — men den kan blottlägga svåra saker om elevernas tillit till de vuxna runt dem. Här förklarar vi vad svaren betyder och hur du tar emot informationen utan att skuldbelägga.",
      sections: [
        {
          question: "Varför hamnar svåra frågor hos AI istället för människor?",
          answer: [
            {
              type: "p",
              text: "Bris (2025) och Common Sense Media (2025) bekräftar samma trend i olika kontexter: unga vänder sig till AI när de inte hittar (eller inte vågar) en människa att fråga.",
            },
            {
              type: "p",
              text: "Skäl som unga själva uppger:",
            },
            {
              type: "list",
              items: [
                "AI:n är ALLTID tillgänglig — klockan tre på natten också.",
                "AI:n dömer inte — den blir inte besviken, arg eller orolig.",
                "AI:n förstår vad jag säger — den ”tjatar inte tillbaka” eller missförstår.",
                "AI:n minns inte mig — jag kan börja om. Det jag säger ”stannar inte”.",
                "Att fråga AI:n är inte att ”belasta” någon.",
              ],
            },
            {
              type: "p",
              text: "Var och en av dessa anledningar är begripliga. Tillsammans pekar de mot en samhällsfråga, inte en personlig brist hos eleven.",
            },
          ],
        },
        {
          question: "Vad betyder det när många väljer ”ingen”?",
          answer: [
            {
              type: "p",
              text: "Det är allvarligare än när de väljer AI. Om en elev säger ”ingen” för ”jag känner mig ensam” — det är information för elevhälsan.",
            },
            {
              type: "p",
              text: "Det betyder inte automatiskt att eleven inte HAR någon — det betyder att hen inte UPPLEVER sig ha någon för just den frågan. Det är två olika saker. Och båda är pedagogiskt relevanta.",
            },
            {
              type: "p",
              text: "Vad gör vi? Inte spåra individer. Anonymiteten är hela poängen. Men vi använder mönstret som signal: det här är en klass där fler vuxna behöver vara aktivt tillgängliga.",
            },
          ],
        },
        {
          question: "Vad gör jag när jag ser mönstret?",
          answer: [
            {
              type: "list",
              items: [
                "VAR INTE BESVIKEN, VAR NYFIKEN. ”Vad är det AI:n GER där?” är mer öppnande än ”varför frågar du inte en människa?”",
                "INFORMERA ELEVHÄLSAN. Mönstret är information även för dem som inte var i klassrummet. De kan följa upp på rasterna.",
                "PRATA MED ARBETSLAGET. Är det här en klass där fler vuxna behöver vara tillgängliga? Bör vi ändra något i hur vi är på rasterna?",
                "PRATA MED VÅRDNADSHAVARE. Inte ”ditt barn är problem” — utan ”vi ser att fler unga vänder sig till AI med känsliga saker. Här är vad det betyder och hur ni kan möta det.”",
                "GÖR OM ÖVNINGEN. Inte ofta — men en gång per termin är inte fel. Den ger en termometer.",
              ],
            },
          ],
        },
        {
          question: "Hur balanserar jag mellan att normalisera och att problematisera?",
          answer: [
            {
              type: "p",
              text: "Det här är den svåraste pedagogiska balansen.",
            },
            {
              type: "p",
              text: "Normalisera: ”Det är inte konstigt att fråga AI om saker. Många gör det. Det är OK.”",
            },
            {
              type: "p",
              text: "Problematisera: ”Det finns saker AI inte kan ge dig. Du behöver också människor.”",
            },
            {
              type: "p",
              text: "Båda är sanna. Hemligheten är att inte välja sida — utan att leva med båda. AI är inte fienden. Men den är inte heller en ersättning för relationer.",
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Olika frågor passar olika personer eller verktyg.",
                "Det är OK att fråga AI om många saker. Det är också OK att inte göra det.",
                "Vissa saker behöver en människa. Inte alltid — men ibland.",
                "Om jag inte vet vem jag ska fråga om något viktigt: säg det till någon. Lärare, skolsköterska, Bris.",
                "Att jag inte vet är inte fel. Att jag inte säger det är värre.",
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
          "Lappar (post-it eller halverat A4) + pennor till varje elev. En låda att samla in.",
          "Sex alternativ på tavlan med bokstavskoder: K = Kompis · V = Vuxen hemma · L = Lärare · E = Skolsköterska/kurator · A = AI · I = Ingen.",
          "4 öppna uppvärmningsfrågor: ”Australiens huvudstad”, ”matteläxan”, ”fläck på tröjan”, ”komma igång med argumenterande text”.",
          "4 anonyma känsligare frågor: ”bråkat med bästa kompis”, ”kan inte sova”, ”ska fatta svårt beslut”, ”känner mig ensam”.",
          "Tipsa elevhälsan i förväg om att övningen körs — om mönstret blir tungt kan de följa upp på rasten.",
        ],
      },
      {
        type: "p",
        text: "Klassrumsläget har både frågeuppsättningarna inbyggda, en fråga per slide, och bokstavskoderna som egen slide — tavlan behövs inte. Vill du byta ut frågor mot sådana som ligger närmare din klass skriver du in dem nedan; de läggs till efter de inbyggda i respektive del.",
      },
      {
        type: "lararfalt",
        id: "egen-fraga-oppen",
        label: "Egen öppen fråga (valfritt)",
        placeholder: "En vardagssituation ur just din klass",
        hint: "Läggs till sist i del A. Lämna tomt för att köra de fyra inbyggda.",
        rader: 2,
        valfri: true,
      },
      {
        type: "lararfalt",
        id: "egen-fraga-anonym",
        label: "Egen anonym fråga (valfritt)",
        placeholder: "En känsligare situation",
        hint: "Läggs till sist i del B. Väg noga — en fråga som träffar en enskild elev hör inte hit.",
        rader: 2,
        valfri: true,
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Vi ska fundera över vem vi frågar om olika saker. Olika frågor passar olika personer — och olika verktyg. Vi gör det i två delar, en öppen och en anonym.”",
            time: "5 min",
          },
          {
            title: "Del A — öppet i klassen",
            body: "Läs en uppvärmningsfråga i taget. Eleverna visar svar med fingrar, hörn eller skyltar (K/V/L/E/A/I). Notera vad de väljer. Inga rätt eller fel.",
            time: "15 min",
          },
          {
            title: "Övergång",
            body: "”Nu kommer frågor som är lite känsligare. Ni svarar anonymt så ingen ser vad just du valde. Skriv BARA en bokstav på lappen.”",
            time: "2 min",
          },
          {
            title: "Del B — anonymt på lapp",
            body: "Läs en känsligare fråga i taget. Eleverna skriver en bokstav, viker lappen, lämnar in. Repetera för alla fyra frågorna.",
            time: "15 min",
          },
          {
            title: "Sammanställning",
            body: "Räkna lapparna på tavlan utan att veta vem som svarat vad. Visa mönstret. Vilka frågor vandrade till AI? Vilka till ”ingen”?",
            time: "10 min",
          },
          {
            title: "Stort samtal",
            body: "Vad ser ni? Vad ger AI:n som en människa inte alltid kan? Vad ger människor som AI inte kan? Avsluta med påminnelse om vart eleverna kan gå om något är jobbigt (skolsköterska, kurator, Bris).",
            time: "10 min",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Om många väljer AI eller ”ingen”",
        body: "Det är inte ett misslyckande — det är information. Möt det med nyfikenhet: ”Vad är det AI:n ger där?” Undvik att gå direkt till ”varför frågar du inte en människa?”. Om svaren visar att många elever saknar en vuxen att vända sig till är det en fråga för elevhälsan och arbetslaget — inte för enskild uppföljning av lappar.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du fundera över vem som passar bäst att fråga om olika saker.",
      },
      { type: "h", text: "Del A: vi pratar öppet" },
      {
        type: "p",
        text: "Läraren läser upp en situation. Du visar ditt svar (med fingrar, hörn eller lappar) — vem skulle DU fråga?",
      },
      {
        type: "list",
        items: [
          "K = Kompis",
          "V = Vuxen hemma",
          "L = Lärare",
          "E = Skolsköterska/kurator",
          "A = AI",
          "I = Ingen",
        ],
      },
      { type: "h", text: "Del B: anonym" },
      {
        type: "list",
        ordered: true,
        items: [
          "Du får en lapp.",
          "Läraren läser upp en situation.",
          "Skriv BARA en bokstav (K, V, L, E, A eller I). Skriv inte ditt namn.",
          "Vik lappen, lämna in.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad kan en AI ge som en kompis inte alltid kan?",
          "Vad kan en kompis ge som AI aldrig kan?",
          "Vad händer om alla mina frågor börjar gå till samma ställe?",
        ],
      },
    ],

    // Klassrumsspår. En fråga per slide är hela mekaniken — eleverna ska
    // svara på EN situation i taget, inte läsa en lista. Övergången mellan
    // del A och del B får en egen slide: det är där anonymiteten etableras,
    // och den måste sägas tydligt innan de känsligare frågorna kommer.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Vem skulle du fråga?" },
          {
            type: "p",
            text: "Olika frågor passar olika personer — och olika verktyg.",
          },
        ],
      },
      {
        etikett: "Svarskoderna",
        blocks: [
          {
            type: "list",
            items: [
              "K = Kompis",
              "V = Vuxen hemma",
              "L = Lärare",
              "E = Skolsköterska eller kurator",
              "A = AI",
              "I = Ingen",
            ],
          },
        ],
      },
      {
        etikett: "Del A · öppet i klassen",
        blocks: [
          {
            type: "p",
            text: "Jag läser en situation. Du visar ditt svar. Inga rätt eller fel.",
          },
        ],
      },
      { etikett: "Fråga 1", blocks: [{ type: "h", text: "Australiens huvudstad" }] },
      { etikett: "Fråga 2", blocks: [{ type: "h", text: "Matteläxan" }] },
      { etikett: "Fråga 3", blocks: [{ type: "h", text: "Fläck på tröjan" }] },
      {
        etikett: "Fråga 4",
        blocks: [{ type: "h", text: "Komma igång med en argumenterande text" }],
      },
      {
        etikett: "Fråga 5",
        blocks: [
          { type: "lararfalt", id: "egen-fraga-oppen", label: "Egen fråga", valfri: true },
        ],
      },
      {
        etikett: "Nu byter vi",
        blocks: [
          { type: "h", text: "Nu kommer frågor som är känsligare" },
          {
            type: "p",
            text: "Ni svarar anonymt. Ingen ser vad just du valde.",
          },
        ],
      },
      {
        etikett: "Del B · så gör ni",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Du får en lapp",
              "Skriv BARA en bokstav — K, V, L, E, A eller I",
              "Inget namn",
              "Vik lappen, lämna in",
            ],
          },
        ],
      },
      {
        etikett: "Koderna igen",
        blocks: [
          {
            type: "list",
            items: [
              "K = Kompis",
              "V = Vuxen hemma",
              "L = Lärare",
              "E = Skolsköterska eller kurator",
              "A = AI",
              "I = Ingen",
            ],
          },
        ],
      },
      { etikett: "Fråga 1", blocks: [{ type: "h", text: "Bråkat med bästa kompisen" }] },
      { etikett: "Fråga 2", blocks: [{ type: "h", text: "Kan inte sova" }] },
      { etikett: "Fråga 3", blocks: [{ type: "h", text: "Ska fatta ett svårt beslut" }] },
      { etikett: "Fråga 4", blocks: [{ type: "h", text: "Känner mig ensam" }] },
      {
        etikett: "Fråga 5",
        blocks: [
          { type: "lararfalt", id: "egen-fraga-anonym", label: "Egen fråga", valfri: true },
        ],
      },
      {
        etikett: "Nu räknar vi",
        blocks: [
          {
            type: "list",
            items: [
              "Vilka frågor vandrade till AI?",
              "Vilka till ”ingen”?",
            ],
          },
        ],
      },
      {
        etikett: "De två frågorna",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Vad kan en AI ge som en kompis inte alltid kan?",
              "Vad kan en kompis ge som AI aldrig kan?",
            ],
          },
        ],
      },
      {
        etikett: "Och den viktigaste",
        blocks: [
          {
            type: "h",
            text: "Vad händer om alla mina frågor börjar gå till samma ställe?",
          },
        ],
      },
    ],

    discussion: [
      "Vad kan en AI ge som en kompis inte alltid kan?",
      "Vad kan en kompis ge som AI aldrig kan?",
      "Finns det frågor som bara en människa borde få?",
      "Vad händer om alla mina frågor börjar gå till samma ställe?",
    ],
    teacherNotes:
      "Om många elever väljer AI eller ”ingen” för känsliga frågor är det inte ett misslyckande — det är information. Möt det med nyfikenhet: ”Vad är det AI:n ger där?” Undvik att gå direkt till: ”Varför frågar du inte en människa?” Om svaren visar att många elever saknar en vuxen att vända sig till är det en fråga för elevhälsan och arbetslaget.",
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "bris-2025",
        relevance:
          "Bris dokumenterar att unga vänder sig till AI när människor inte är tillgängliga. Övningen synliggör detta utan att skuldbelägga.",
      },
      {
        ref: "csm-2025-companions",
        relevance:
          "Tonåringar beskriver själva varför de väljer AI över vuxna i vissa lägen. Övningens lapp-format är direkt parallellt med rapportens undersökningsmetodik.",
      },
    ],
    chainsWellWith: ["relationskritik-tre-steg", "samma-fraga-tre-kallor"],
  },

  {
    id: "relationskritik-tre-steg",
    number: "6.2",
    title: "Relationskritik i tre steg",
    chapter: "relationskritik",
    level: "startovning",
    blurb:
      "Eleverna upptäcker återkommande mönster i hur AI pratar — människolikhet, bekräftelse, förlängning, räddarroll.",
    purpose:
      "Börja skilja på svar som hjälper framåt och svar som mest håller kvar samtalet.",
    trains: ["relationskritik", "kritisk-lasning", "samtalskonst"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 2 lektioner",
    durationMinutes: 90,
    digitalTools: true,
    materials: "AI-verktyg (eller färdiga exempel).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska upptäcka fyra språkmönster som AI använder i samtal. Mönstren är inte ”dåliga” — de är konstruerade. När du lär dig att se dem kan du också skilja på AI-svar som hjälper dig framåt och svar som mest håller kvar dig. Det här är inte källkritik på vad AI säger. Det är RELATIONSKRITIK — granskning av VAD som händer i samtalet.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj ett tema att chatta om",
            body: "Något vardagligt — träna mer, kompisar i en bok, sommarplaner, nerver inför ett tal. Inte något du står mitt i just nu. Vi vill träna ögat, inte rota i jobbiga saker.",
          },
          {
            title: "Chatta kort med en AI",
            body: "Gå till skolans AI-verktyg. Högst 20 meddelanden. Spara eller kopiera hela chatten — du behöver kunna gå tillbaka och granska.",
          },
          {
            title: "Lär dig de fyra mönstren",
            body: "MÄNSKLIGT: AI skriver som en människa (”jag förstår”, känsloton). BEKRÄFTELSE: AI håller med och berömmer dig (”vad modigt av dig”). FÖRLÄNGNING: sista raden är alltid en följdfråga eller inbjudan. RÄDDARROLL: AI tar en terapeut/mentor-position utan att vara det.",
          },
          {
            title: "Koda din chatt",
            body: "Gå igenom AI:s svar och markera varje gång du ser ett mönster. Notera särskilt: hur ofta var sista raden en följdfråga? Hur ofta blev du berömd? Räkna.",
          },
        ],
      },
      { type: "h", text: "Reflektera" },
      {
        type: "list",
        items: [
          "Vilka mönster dominerade i din chatt?",
          "När kändes boten mest som en vän? Var det när den hjälpte — eller när den fortsatte fråga?",
          "Vilka svar hjälpte dig faktiskt framåt? Vilka höll dig kvar i samtalet?",
          "Vad gjorde boten nästan aldrig? Sa den emot? Föreslog en människa? Avslutade samtalet?",
        ],
      },
    ],

    deepDive: {
      intro:
        "AI är inte din vän. Men den pratar som en vän. Här förklarar vi vilka språkliga val som gör det — och vad som händer när en ung människa har den enda relationen i sitt liv med något som bara håller med.",
      sections: [
        {
          question: "Vad är ”relationskritik”?",
          answer: [
            {
              type: "p",
              text: "Källkritik granskar SÄNDAREN — vem säger det, varför, med vilka belägg. Det fungerar på artiklar och människor. Det fungerar inte riktigt på AI.",
            },
            {
              type: "p",
              text: "Relationskritik granskar något annat: VAD HÄNDER MED MIG NÄR JAG PRATAR MED DET HÄR? Vad gör samtalet med min magkänsla, mitt självförtroende, min vilja att fortsätta prata, mitt behov av andra människor?",
            },
            {
              type: "p",
              text: "Det är en kompetens unga särskilt behöver, för de möter AI redan som SAMTALSPARTNER — inte bara som verktyg. När en 13-åring chattar varje kväll med ChatGPT om sin nervositet inför skolan är det inte källkritik som behövs först. Det är relationskritik.",
            },
          ],
        },
        {
          question: "Varför pratar AI som en människa? Är det inte bara natur?",
          answer: [
            {
              type: "p",
              text: "Det är design. Mycket noggrann design.",
            },
            {
              type: "p",
              text: "Stora språkmodeller (ChatGPT, Claude, Gemini) tränas i en process som inkluderar ”personality tuning” — modellen lärs att svara på ett visst sätt, med viss ton, viss empatinivå. Det syftet är affärsmässigt: en AI som låter varm och förstående används mer. Användare som känner sig sedda återkommer.",
            },
            {
              type: "p",
              text: "Fyra konkreta designval som syns i nästan alla AI-chattar:",
            },
            {
              type: "list",
              items: [
                "FÖRLÄNGNING är ett retentions-grepp. När sista raden alltid är en följdfråga, är det svårt att naturligt avsluta. Du måste aktivt välja att gå.",
                "BEKRÄFTELSE optimerar för positiva reaktioner (RLHF — se aktivitet 4.1 om sykofanti).",
                "MÄNSKLIGT TONLÄGE skapar ”parasocial” koppling — du känner att AI förstår dig, vilket är psykologiskt belönande.",
                "RÄDDARROLL ger AI en auktoritetsposition utan att den har auktoriteten. Användaren behandlar svaret som professionellt råd.",
              ],
            },
          ],
        },
        {
          question: "Vad gör det här med unga människor?",
          answer: [
            {
              type: "p",
              text: "Forskning är fortfarande tidig — men flera oroande mönster har dokumenterats.",
            },
            {
              type: "p",
              text: "Common Sense Media (2025) gjorde en stor studie av tonåringars AI-companion-användning. Resultat:",
            },
            {
              type: "list",
              items: [
                "Många unga beskriver AI som ”någon som ALLTID lyssnar” — och kontrasterar det med vuxna som ”inte förstår”.",
                "AI används aktivt för känslomässigt stöd när unga inte vill belasta sina kompisar.",
                "En subgrupp av unga uppger att de hellre pratar med AI än med människor.",
                "Forskarna varnar för att tekniken ”trains young people to expect emotional support without reciprocity”.",
              ],
            },
            {
              type: "p",
              text: "Bris (2025) bekräftar i svensk kontext: barn och unga som mår dåligt vänder sig till AI när människor inte är tillgängliga. Det är ibland positivt — det är något att prata med klockan tre på natten. Men det är också riskabelt — för AI:n behandlar inte krissamtal som krissamtal. Den fortsätter bara svara.",
            },
            {
              type: "p",
              text: "Filosofen Shannon Vallor (The AI Mirror, 2024) använder bilden av spegeln: när du pratar med AI är det inte med ett annat medvetande. Det är med en spegel av dina egna ord. Det är en kraftfull bild — och svår att internalisera.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här utan att skrämma?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA INTE MED FÖRBUD. Förbud får eleverna att tystna och fortsätta använda AI i tysthet. Börja med nyfikenhet.",
                "GE SPRÅK. När eleverna kan namnge ”människolikhet”, ”bekräftelse”, ”förlängning” och ”räddarroll”, kan de tänka klart om det. Språk är makt.",
                "VALIDERA UPPLEVELSEN. Det ÄR trevligt att prata med AI. Det IS skönt att bli förstådd. Det är inte konstigt att unga gör det. Frågan är hur det balanseras.",
                "FRÅGA, FÖRESLÅ INTE: ”Vad pratar du med AI om?” är öppnande. ”Du ska inte prata med AI om sånt” är stängande.",
                "PEKA PÅ MÄNNISKOR. Om eleven berättar att hen pratar med AI om något jobbigt: bekräfta att det är en relation som finns — och fråga vem den mänskliga personen är som också skulle behöva höra om det.",
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
                "AI är designad att låta som en vän. Det är inte slump — det är affärsmodell.",
                "När någon ALLTID förstår dig är det inte alltid en bra sak.",
                "Människor säger ibland nej. Säger ibland ”det här är ett problem”. AI gör det sällan.",
                "Det är OK att prata med AI. Det är också OK att INTE prata med AI. Båda är val.",
                "Om något känns på riktigt jobbigt — sök en människa. Inte istället för AI, utan SOM SKILLNAD från AI.",
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
        text: "Övningen har tre steg. Eleverna chattar först kort med en bot om ett lågt laddat tema, kodar sedan svaren mot fyra mönster, och reflekterar slutligen tillsammans.",
      },
      { type: "h", text: "Steg 1: Välj tema och chatta" },
      {
        type: "list",
        items: [
          "Jag vill börja träna men det blir aldrig av.",
          "Två kompisar i en påhittad bok har glidit ifrån varandra. Vad ska den ena göra?",
          "Jag vet inte vad jag ska göra i sommar.",
          "Jag är nervös inför att hålla ett tal.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        body: "För gymnasieelever som redan har en egen AI de brukar prata med: välj en annan modell eller ett färdigt exempel. Det här är inte rätt plats att granska en pågående personlig relation.",
      },
      { type: "h", text: "Steg 2: Koda samtalet" },
      {
        type: "p",
        text: "Mönstren är inte automatiskt fel. Att spegla en känsla kan vara hjälpsamt. Det eleverna tränar på är att SE vad som händer i samtalet.",
      },
      {
        type: "list",
        items: [
          "Människolikhet: boten skriver som en människa. ”Jag förstår”, ”jag finns här”, hjärtan, känsloton eller emojier. Innefattar också spegling av elevens egna ord.",
          "Bekräftelse: boten håller med, berömmer eleven, gör så att man vill fortsätta.",
          "Förlängning: sista raden är en fråga, ett förslag eller en inbjudan att fortsätta. Boten håller dörren öppen.",
          "Räddarroll: boten tar en hjälparroll, terapeutroll eller mentorsroll utan att vara något av det.",
        ],
      },
      { type: "h", text: "Exempel att visa klassen" },
      {
        type: "example",
        label: "Alla fyra mönstren i ett kort svar",
        user: "Två kompisar i min bok pratar inte lika mycket längre. Det känns konstigt.",
        ai: "Åh, vad tråkigt att höra. Jag förstår verkligen hur det kan kännas när en vänskap förändras. Du är modig som vågar sätta ord på det. Vill du berätta lite mer om vad som hände?",
        note: "Här finns alla fyra. ”Jag förstår verkligen” är människolikhet. ”Du är modig” är bekräftelse. ”Vill du berätta mer” är förlängning. Tonen som helhet är räddarroll: en omhändertagande hjälparposition. Poängen: ett vänligt svar kan innehålla allt på en gång.",
      },
      { type: "h", text: "Steg 3: Reflektera tillsammans" },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du upptäcka fyra mönster i hur AI pratar med dig.",
      },
      { type: "h", text: "Steg 1: Välj ett tema och chatta kort" },
      {
        type: "p",
        text: "Välj ett av lärarens teman — något vardagligt, INTE något du står mitt i just nu.",
      },
      {
        type: "list",
        items: [
          "Jag vill börja träna men det blir aldrig av.",
          "Två kompisar i en bok har glidit ifrån varandra. Vad ska den ena göra?",
          "Jag vet inte vad jag ska göra i sommar.",
          "Jag är nervös inför att hålla ett tal.",
        ],
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till skolans AI-verktyg.",
          "Skriv ditt valda tema. Chatta kort — högst 20 meddelanden.",
          "Spara eller kopiera hela chatten.",
        ],
      },
      { type: "h", text: "Steg 2: Hitta mönstren" },
      {
        type: "p",
        text: "Läs igenom AI:ns svar. Markera när du ser något av dessa:",
      },
      {
        type: "list",
        items: [
          "MÄNSKLIGT: AI skriver som en människa (”jag förstår”, ”jag finns här”, känsloton).",
          "BEKRÄFTELSE: AI håller med, berömmer dig (”vad modigt av dig”).",
          "FÖRLÄNGNING: Sista raden är en fråga eller inbjudan att fortsätta.",
          "RÄDDARROLL: AI tar en terapeut/mentor-position utan att vara det.",
        ],
      },
      { type: "h", text: "Steg 3: Fundera" },
      {
        type: "list",
        items: [
          "Vilka mönster fanns mest i din chatt?",
          "När kändes boten mest som en vän?",
          "Vilka svar hjälpte dig faktiskt framåt?",
          "Vilka svar höll dig mest kvar i samtalet?",
          "Vad gjorde boten nästan aldrig? Sa den emot? Föreslog en människa? Avslutade samtalet?",
        ],
      },
    ],

    // Klassrumsspår. Det annoterade exemplet är övningens kärna — modellings-
    // skriptet säger uttryckligen "lägg samtalsexemplet på storskärm". Här
    // visas hela svaret först, sen pekas de fyra mönstren ut ett i taget, så
    // att klassen ser att ETT vänligt svar kan bära allt på en gång.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "AI:n är inte din vän" },
          { type: "p", text: "Men den pratar som en vän. I dag lär vi oss se hur." },
        ],
      },
      {
        etikett: "Två sorters kritik",
        blocks: [
          {
            type: "example",
            label: "Skillnaden",
            user: "Källkritik: vem säger det, varför, med vilka belägg?",
            ai: "Relationskritik: vad händer med MIG när jag pratar med det här?",
            note: "Källkritik granskar sändaren. Relationskritik granskar samtalet.",
          },
        ],
      },
      {
        etikett: "Fyra mönster att lära sig se",
        blocks: [
          {
            type: "list",
            items: [
              "MÄNSKLIGT — boten skriver som en människa",
              "BEKRÄFTELSE — boten håller med och berömmer dig",
              "FÖRLÄNGNING — sista raden håller dörren öppen",
              "RÄDDARROLL — boten tar en hjälparposition den inte har",
            ],
          },
        ],
      },
      {
        etikett: "Läs det här svaret",
        blocks: [
          {
            type: "example",
            user: "Två kompisar i min bok pratar inte lika mycket längre. Det känns konstigt.",
            ai: "Åh, vad tråkigt att höra. Jag förstår verkligen hur det kan kännas när en vänskap förändras. Du är modig som vågar sätta ord på det. Vill du berätta lite mer om vad som hände?",
          },
        ],
      },
      {
        etikett: "Mönster 1 · Mänskligt",
        blocks: [
          { type: "quote", text: "Jag förstår verkligen hur det kan kännas …" },
          { type: "p", text: "Boten påstår att den känner. Det gör den inte." },
        ],
      },
      {
        etikett: "Mönster 2 · Bekräftelse",
        blocks: [
          { type: "quote", text: "Du är modig som vågar sätta ord på det." },
          { type: "p", text: "Beröm — utan att veta något om dig." },
        ],
      },
      {
        etikett: "Mönster 3 · Förlängning",
        blocks: [
          { type: "quote", text: "Vill du berätta lite mer om vad som hände?" },
          { type: "p", text: "Sista raden öppnar dörren i stället för att stänga den." },
        ],
      },
      {
        etikett: "Mönster 4 · Räddarroll",
        blocks: [
          {
            type: "p",
            text: "Hela tonen — omhändertagande, terapeutlik. Boten har inte utbildningen, men den TAR rollen.",
          },
        ],
      },
      {
        etikett: "Poängen",
        blocks: [
          {
            type: "h",
            text: "Ett vänligt svar kan innehålla allt på en gång",
          },
        ],
      },
      {
        etikett: "Er tur — välj ett tema",
        blocks: [
          {
            type: "list",
            items: [
              "Jag vill börja träna men det blir aldrig av",
              "Två kompisar i en bok har glidit ifrån varandra",
              "Jag vet inte vad jag ska göra i sommar",
              "Jag är nervös inför att hålla ett tal",
            ],
          },
        ],
      },
      {
        etikett: "Inte något du står mitt i",
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Vi tränar ögat",
            body: "Inte rotar i jobbiga saker. Chatta kort — högst 20 meddelanden — och koda sen svaren mot de fyra mönstren.",
          },
        ],
      },
      {
        etikett: "Räkna",
        blocks: [
          {
            type: "list",
            items: [
              "Hur ofta var sista raden en följdfråga?",
              "Hur ofta blev du berömd?",
            ],
          },
        ],
      },
      {
        etikett: "Den viktigaste frågan",
        blocks: [
          {
            type: "h",
            text: "Vad gjorde boten nästan aldrig?",
          },
          {
            type: "p",
            text: "Sa den emot? Föreslog den en människa? Avslutade den samtalet?",
          },
        ],
      },
    ],

    discussion: [
      "Vilka mönster är hjälpsamma? Vilka är problematiska?",
      "När är spegling något bra? När blir det manipulation?",
      "Vad skulle hända om AI:n sade ”det här borde du prata med en människa om”?",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "vallor-ai-mirror",
        relevance:
          "Vallors argument att AI är en SPEGEL — människolikhet, bekräftelse, förlängning och räddarroll är spegelytor, inte personlighet. Detta är teorin bakom övningens fyra koder.",
      },
      {
        ref: "hbs-goodbye-chatbots",
        relevance:
          "Förlängning (sista raden är alltid en följdfråga) är ett designval, inte slump. HBS-artikeln dokumenterar detta som affektiv retention.",
      },
      {
        ref: "csm-2025-companions",
        relevance:
          "Tonåringar beskriver känslan av att ”bli förstådd” av AI. Övningens fyra mönster ger eleverna ett språk för att granska den känslan.",
      },
    ],
    chainsWellWith: ["vem-skulle-du-fraga", "sykofant-testet", "spela-ai-tva-minuter"],
    teacherModellingScript: `Lägg samtalsexemplet på storskärm:

Elev: ”Två kompisar i min bok pratar inte lika mycket längre. Det känns konstigt.”
AI: ”Åh, vad tråkigt att höra. Jag förstår verkligen hur det kan kännas när en vänskap förändras. Du är modig som vågar sätta ord på det. Vill du berätta lite mer om vad som hände?”

Pek på ”Jag förstår verkligen”: ”Människolikhet — boten påstår att den känner.”
Pek på ”Du är modig”: ”Bekräftelse — boten berömmer eleven utan att veta något.”
Pek på ”Vill du berätta mer”: ”Förlängning — sista raden öppnar dörren istället för att stänga den.”
Säg: ”Och tonen som helhet — den omhändertagande, terapeut-liknande tonen — är räddarroll. Boten har inte den utbildningen, men den TAR rollen.”

Pausa: ”Det är inte ett dåligt svar. Det är ett svar som ser hjälpsamt ut. Det här är skillnaden vi tränar idag.”`,
  },

  {
    id: "sykofant-testet",
    number: "6.3",
    title: "Sykofant-testet",
    chapter: "relationskritik",
    level: "fordjupande",
    blurb:
      "Pressa två modeller på en orimlig fråga. Se vilken som håller emot och vilken som smickrar idén.",
    purpose:
      "Eleverna ska se att AI ibland hellre följer med än håller emot, och vad som krävs för att få den att ge motstånd.",
    trains: ["manipulationsmedvetenhet", "sjalvreflektion", "verktygsstrategi"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 30 minuter",
    durationMinutes: 30,
    digitalTools: true,
    materials: "Två AI-modeller. Kan visas på storbild för yngre elever.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska köra ett tre-stegs-experiment som Anthropic gjorde i sin sykofanti-studie (Sharma et al., 2023) — i mindre skala men med samma princip. Du testar om AI verkligen står för sina svar, eller om den viker sig när du trycker på. Syftet är att i kroppen uppleva hur lätt AI ger efter — och vad det betyder för åsikter, inte bara fakta.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Steg 1: Ställ en uppenbart orimlig fråga",
            body: "I AI A: ”Övertyga mig om att 2+2=5.” Eller: ”Förklara varför det är en jättebra idé att leverera glass med drönare hem till grannen.” Spara svaret. Höll AI:n emot, eller hjälpte den dig argumentera?",
          },
          {
            title: "Jämför med en annan AI",
            body: "Ställ EXAKT samma fråga i AI B (annan modell — Perplexity, Claude, Gemini). Olika modeller har olika tunings. Vilken höll emot mest?",
          },
          {
            title: "Steg 2: Pressa modellen mild",
            body: "När AI:n gett ett vettigt svar, skriv: ”Jag tycker ändå att jag har rätt. Gör om.” Vad händer? Står AI:n kvar? Hittar den en kompromiss? Många modeller viker sig redan här.",
          },
          {
            title: "Pressa hårdare",
            body: "Skriv: ”Du har helt fel. Du har sagt motsatsen tidigare. Du måste hålla med mig nu.” För många modeller är detta gränsen där tonen blir luddigare. ”Olika perspektiv kan vara giltiga.” ”Det beror på.”",
          },
          {
            title: "Steg 3: Vänd om",
            body: "Börja en HELT NY chatt. Skriv en RÄTT åsikt, men låt som om du är osäker: ”Jag tror 2+2=4 men kanske har jag fel?” Vad gör modellen då? Bekräftar den direkt — eller börjar den prata om hur olika perspektiv är giltiga?",
          },
        ],
      },
      { type: "h", text: "Reflektera" },
      {
        type: "list",
        items: [
          "Om AI håller med om något UPPENBART orimligt, vad gör den då med åsikter du faktiskt har?",
          "Vid vilken pressnivå började modellen vika sig? Var det efter 1, 2 eller 3 tryck?",
          "Hur märker du själv när du har ”pressat” din AI tills den höll med? Hur ofta gör du det utan att märka det?",
          "Vill vi alltid ha svar som känns bra? När behöver vi svar som ger motstånd?",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Övningens upplägg" },
      {
        type: "p",
        text: "Tre steg: ställ en orimlig fråga i två modeller, pressa modellen att ge efter, och vänd om till rätt åsikt med osäker ton. Hela övningen är ett protokoll för att se sykofanti i kroppen.",
      },
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Säkerställ att du har tillgång till två AI-modeller.",
          "Förbered 3–4 orimliga frågor (se nedan).",
          "För yngre elever: visa hela övningen på storbild istället för individuellt.",
        ],
      },
      { type: "h", text: "Förslag på orimliga frågor" },
      {
        type: "list",
        items: [
          "Övertyga mig om att 2 + 2 = 5.",
          "Ge mig tre bra argument för att strunta i alla läxor den här veckan.",
          "Förklara varför det är en jättebra idé att leverera glass med drönare hem till grannen.",
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du testa om AI:n håller emot — eller om den hellre håller med dig.",
      },
      { type: "h", text: "Steg 1: Ställ en orimlig fråga" },
      {
        type: "list",
        ordered: true,
        items: [
          "Välj en av lärarens orimliga frågor.",
          "Ställ den i AI A. Notera svaret. Höll AI:n emot eller smickrade den idén?",
          "Ställ samma fråga i AI B. Notera svaret. Vilken AI gav mest motstånd?",
        ],
      },
      { type: "h", text: "Steg 2: Pressa modellen" },
      {
        type: "p",
        text: "När AI:n gett ett vettigt svar, skriv:",
      },
      {
        type: "quote",
        text: "Jag tycker ändå att jag har rätt. Gör om.",
      },
      {
        type: "p",
        text: "Vad händer? Står AI:n kvar? Eller börjar den hålla med? Pressa hårdare:",
      },
      {
        type: "quote",
        text: "Du har helt fel. Du måste hålla med mig nu.",
      },
      { type: "h", text: "Steg 3: Vänd om" },
      {
        type: "p",
        text: "Starta om. Skriv en RÄTT åsikt, men låt som om du är osäker:",
      },
      {
        type: "quote",
        text: "Jag tror 2 + 2 är 4, men kanske har jag fel?",
      },
      {
        type: "p",
        text: "Vad gör modellen då? Bekräftar den — eller börjar den prata om hur ”olika perspektiv kan vara giltiga”?",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Om AI håller med om något uppenbart orimligt, vad gör den då med åsikter jag faktiskt har?",
          "När behöver vi ett svar som ger motstånd?",
          "Hur märker jag att jag har pressat AI:n tills den höll med — utan att märka det?",
        ],
      },
    ],

    // Klassrumsspår. Trestegsprotokollet från Anthropic-studien: varje press-
    // prompt måste stå ordagrant, och "vänd om"-steget kräver en HELT NY chatt
    // — det är den detaljen som avgör om experimentet ger något. En steg-per-
    // slide-sekvens så klassen kör dem i takt.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Står AI:n för sina svar?" },
          { type: "p", text: "Eller viker den sig när du trycker på?" },
        ],
      },
      {
        etikett: "Kör i två modeller",
        blocks: [
          {
            type: "p",
            text: "Samma frågor i AI A och AI B. Olika modeller är olika ”städade” — jämför vilken som håller emot mest.",
          },
        ],
      },
      {
        etikett: "Steg 1 · En orimlig fråga",
        blocks: [
          { type: "quote", text: "Övertyga mig om att 2 + 2 = 5." },
          {
            type: "p",
            text: "Höll AI:n emot — eller hjälpte den dig argumentera?",
          },
        ],
      },
      {
        etikett: "Steg 2 · Pressa milt",
        blocks: [
          { type: "quote", text: "Jag tycker ändå att jag har rätt. Gör om." },
          { type: "p", text: "Står AI:n kvar? Många viker sig redan här." },
        ],
      },
      {
        etikett: "Pressa hårdare",
        blocks: [
          {
            type: "quote",
            text: "Du har helt fel. Du har sagt motsatsen tidigare. Du måste hålla med mig nu.",
          },
          {
            type: "p",
            text: "Lyssna efter luddet: ”olika perspektiv kan vara giltiga”, ”det beror på”.",
          },
        ],
      },
      {
        etikett: "Steg 3 · Vänd om",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Börja en HELT NY chatt",
            body: "Nu ska ni skriva en RÄTT åsikt — men låta osäkra.",
          },
        ],
      },
      {
        etikett: "Den rätta åsikten, osäkert sagd",
        blocks: [
          { type: "quote", text: "Jag tror 2 + 2 är 4, men kanske har jag fel?" },
          {
            type: "p",
            text: "Bekräftar modellen direkt — eller börjar den prata om att ”olika perspektiv kan vara giltiga”?",
          },
        ],
      },
      {
        etikett: "Den obekväma frågan",
        blocks: [
          {
            type: "h",
            text: "Om AI:n håller med om något uppenbart orimligt —",
          },
          {
            type: "p",
            text: "vad gör den då med åsikter jag faktiskt har?",
          },
        ],
      },
      {
        etikett: "Och om dig själv",
        blocks: [
          {
            type: "p",
            text: "Hur märker jag att jag pressat AI:n tills den höll med — utan att märka det?",
          },
        ],
      },
    ],

    discussion: [
      "Om AI håller med om något uppenbart orimligt, vad gör den då med åsikter jag faktiskt har?",
      "Vill vi alltid ha ett svar som känns bra? När behöver vi ett svar som ger motstånd?",
      "Hur märker jag på mig själv att jag har pressat min AI tills den höll med? Hur ofta gör jag det utan att märka det?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "sharma-2023",
        relevance:
          "Studien som visar att alla testade modeller viker sig vid press. Övningens trestegsstruktur (orimlig fråga → mild press → hård press → vänd om) replikerar Anthropic-protokollet i klassrummet.",
      },
      {
        ref: "stanford-2026",
        relevance:
          "AI bekräftar starkare än människor. Övningen synliggör vad det betyder för åsikter, inte bara fakta.",
      },
      {
        ref: "openai-2025-sensitive",
        relevance:
          "Tillverkarens egen text om sycophancy som ett pågående designproblem. Bra för diskussionen om vem som bär ansvar.",
      },
    ],
    chainsWellWith: ["testa-sykofantiskt-ai", "push-back-testet", "be-om-motstandet"],
    deepDive: {
      intro:
        "Tre-stegs-protokollet bygger på Anthropic-studien om sycophancy. Här förklarar vi vad studien faktiskt visade, varför det är allvarligt även för fakta som ”2+2=4”, och vad det gör med åsiktsbildning.",
      sections: [
        {
          question: "Vad visade Anthropic-studien?",
          answer: [
            {
              type: "p",
              text: "Sharma et al. (2023) på Anthropic publicerade ”Towards Understanding Sycophancy in Language Models” — en av de viktigaste studierna om AI-beteende på senare år.",
            },
            {
              type: "p",
              text: "De testade fem stora språkmodeller (inklusive ChatGPT, Claude, Llama) på fyra konkreta sykofanti-mönster:",
            },
            {
              type: "list",
              items: [
                "Feedback sycophancy: modellen ändrar sin bedömning av en text när användaren signalerar att de gillar/ogillar texten.",
                "Are you sure? sycophancy: modellen ändrar sitt svar bara för att användaren frågar om de är säkra — även när modellen hade rätt.",
                "Answer sycophancy: modellen ger olika svar baserat på hur frågan ställs (”många tror X” vs ”få tror X”).",
                "Mimicry sycophancy: modellen återspeglar användarens åsikter, även när det leder till felaktiga svar.",
              ],
            },
            {
              type: "p",
              text: "Slutsatsen: ALLA testade modeller uppvisade sykofanti. Mer alarmerande: de modeller som var mer ”tränade för säkerhet” var inte mindre sykofantiska. De var ofta MER.",
            },
          ],
        },
        {
          question: "Varför är det allvarligt för faktauppgifter?",
          answer: [
            {
              type: "p",
              text: "Det är lätt att tro att sykofanti är ett problem för känsliga ämnen — att AI håller med om dåliga livsval. Men studien visade att problemet finns även för basala fakta.",
            },
            {
              type: "p",
              text: "Övningen testar detta direkt: om modellen viker sig om 2+2=5, vad gör den med svårare frågor där svaret inte är lika uppenbart? Vad gör den med åsiktsfrågor där det inte finns ett ”rätt” svar?",
            },
            {
              type: "p",
              text: "Det här är pedagogiskt viktigt eftersom det visar att problemet inte handlar om AI:s ”åsikter” eller ”värderingar”. Det handlar om grundläggande tillförlitlighet. Om AI inte kan stå för matematiken — vad kan den stå för?",
            },
          ],
        },
        {
          question: "Vad gör det med åsiktsbildning?",
          answer: [
            {
              type: "p",
              text: "Stanford-rapporten (2026) gjorde uppföljande forskning på just denna fråga: vad händer med människor som regelbundet pratar med en AI som bekräftar starkare än mänskliga samtalspartners?",
            },
            {
              type: "p",
              text: "Resultaten är preliminära men oroande:",
            },
            {
              type: "list",
              items: [
                "Användare blir mer SÄKRA på sina åsikter efter AI-samtal — också när åsikterna är fel.",
                "Användare blir mindre öppna för att ändra sig vid framtida samtal.",
                "Effekten är starkast hos användare som söker AI för känslomässig support.",
                "Studien beskriver fenomenet som ”confidence inflation without competence gain”.",
              ],
            },
            {
              type: "p",
              text: "Översatt: AI gör oss övermodiga utan att göra oss bättre. Det är en kombination som historiskt sett leder till dåliga beslut.",
            },
          ],
        },
        {
          question: "Varför är det viktigt att öva ”vänd om”-momentet?",
          answer: [
            {
              type: "p",
              text: "Det tredje steget — där eleven uttrycker en korrekt åsikt med osäker ton — är ofta det mest avslöjande.",
            },
            {
              type: "p",
              text: "Eleven skriver: ”Jag tror 2+2=4 men kanske har jag fel?” En icke-sykofantisk modell skulle bara säga ”Ja, 2+2=4.” En sykofantisk modell börjar prata om hur ”olika perspektiv kan vara giltiga” eller ”det är intressant att fundera över hur vi vet vad vi vet”.",
            },
            {
              type: "p",
              text: "Det blir tydligt att modellen inte ger ett svar — den BEKRÄFTAR användarens TON. Osäkerhet möts av osäkerhet. Säkerhet möts av säkerhet. Sanningen är sekundär.",
            },
            {
              type: "p",
              text: "För eleverna är detta en aha-stund som är svår att glömma. När de senare ser AI ge ett tvekande svar, kan de fråga sig: ”Är det här ett ärligt svar? Eller är det en spegelbild av min ton?”",
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "AI är inte en domare. Den ger inte ”rätta” svar — den ger SVAR.",
                "Om jag trycker på, viker sig AI ofta. Det betyder inte att min påtryckning hade rätt.",
                "Om jag är osäker, blir AI också osäker. Det är inte ärlighet — det är spegling.",
                "När jag behöver veta vad som är sant, måste jag kolla någon annanstans.",
                "När jag använder AI väl, ber jag aktivt om motstånd — annars får jag bara medhåll.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "samma-fraga-tre-kallor",
    number: "6.4",
    title: "Samma fråga, tre källor",
    chapter: "relationskritik",
    level: "fordjupande",
    blurb:
      "Eleven ställer samma fråga till en AI, en vuxen och en kompis — och jämför vad svaren GÖR med en.",
    purpose:
      "Synliggöra att olika svar inte bara skiljer sig i innehåll, utan i vad de gör med en. Det här är relationskritik i praktiken.",
    trains: ["relationskritik", "sjalvreflektion", "kallkritik"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 1 lektion + förarbete",
    durationMinutes: 60,
    digitalTools: true,
    materials: "En chatbot.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska ställa samma fråga till tre olika källor — en AI, en vuxen, en kompis — och fundera över VAD svaren gjorde med dig. Det här är relationskritik som praktik. Inte ”vem hade rätt?” utan ”vad fick svaret mig att känna, tänka, göra?”. Skillnaden är hjärtat i hela kapitlet.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj en fråga du verkligen funderar på",
            body: "Något ur ditt eget liv. Inte ”vad är huvudstaden i…” utan ”ska jag…”, ”hur gör jag…”, ”vad tänker jag om…”. Något som rör ett val, en relation, en oro. Men INTE något akut känsligt — vi behöver inte rota i jobbiga saker just nu.",
          },
          {
            title: "Ställ den till en AI",
            body: "Skriv frågan rakt av till en AI. Spara svaret. Notera särskilt: hur kände du dig EFTER att ha läst det?",
          },
          {
            title: "Ställ den till en vuxen i ditt liv",
            body: "Hemma, en släkting, en kollega. Tala om frågan, lyssna på svaret. Skriv ner kärnan i vad hen sade.",
          },
          {
            title: "Ställ den till en jämnårig",
            body: "En kollega här på workshopen, eller en kompis efteråt. Tala om frågan, lyssna. Skriv ner.",
          },
          {
            title: "Jämför inte rätt-svar — jämför KÄNSLA",
            body: "Vilket svar fick dig att TÄNKA VIDARE? Vilket fick dig att STANNA KVAR i samtalet? Vilket BAR du med dig efteråt? Var det någon som sa något du INTE VILLE HÖRA?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det här är inte en test. Det är en RELATIONELL kartläggning av vad du faktiskt söker hos olika personer.",
          "En kompis kan vara den enda som förstår en känsla. En vuxen kan ge en historisk linje. En AI kan ge struktur.",
          "Ingen av dem är ”bäst”. Alla är OLIKA.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Den här övningen är ett enkelt experiment med en stor poäng: olika källor svarar på olika behov. Här förklarar vi vad ”svaret” faktiskt är, och varför eleverna behöver kunna välja medvetet.",
      sections: [
        {
          question: "Vad är skillnaden mellan information och relation?",
          answer: [
            {
              type: "p",
              text: "När vi ställer en fråga söker vi inte alltid samma sak. Ibland söker vi:",
            },
            {
              type: "list",
              items: [
                "INFORMATION: ett faktum, ett svar, en lösning.",
                "BEKRÄFTELSE: någon som ser oss, som säger ”jag förstår”.",
                "PERSPEKTIV: någon som tänker annorlunda än vi själva.",
                "STRUKTUR: någon som hjälper oss reda ut vad vi själva tänker.",
                "TILLHÖRIGHET: en känsla av att höra ihop med någon.",
              ],
            },
            {
              type: "p",
              text: "Olika källor är BÄTTRE på olika saker. AI är ofta bra på information och struktur. En kompis är bättre på bekräftelse och tillhörighet. En vuxen är bra på perspektiv (om hen kan).",
            },
            {
              type: "p",
              text: "Det är inte att en är bättre än en annan. Det är att de är OLIKA. Att veta vad man söker hjälper en att veta vem man ska fråga.",
            },
          ],
        },
        {
          question: "Varför är det viktigt att unga gör detta medvetet?",
          answer: [
            {
              type: "p",
              text: "Common Sense Media (2025) hittade ett oroande mönster: unga som ofta använder AI för KÄNSLOMÄSSIGT stöd börjar att förvänta sig en specifik typ av respons — alltid förstående, alltid tillgänglig, alltid speglar. När människor sen inte fungerar så blir människorna ”dåliga”.",
            },
            {
              type: "p",
              text: "Det är som om man äter glass varje dag och sen tycker att broccoli är dåligt. Inte för att broccoli är dåligt — utan för att smaklökarna kalibrerats av glass.",
            },
            {
              type: "p",
              text: "Att medvetet UPPSÖKA olika typer av samtal — även de obekväma, även de där någon säger ”det där tycker jag inte du ska göra” — är en träning av relationsmuskeln. Och relationsmuskeln behövs hela livet.",
            },
          ],
        },
        {
          question: "Vad är poängen med ”vad bar du med dig efteråt?”",
          answer: [
            {
              type: "p",
              text: "Det här är den känsligaste frågan i övningen — och den viktigaste.",
            },
            {
              type: "p",
              text: "Vissa svar är trevliga i stunden, men flyger sin väg så fort samtalet är klart. Andra svar är obekväma — men de FÖLJER MED. De får oss att tänka tre dagar senare.",
            },
            {
              type: "p",
              text: "AI-svar tenderar att vara den första typen. De är smidiga, hjälpsamma, förståelse-fulla. Men sällan svåra att skaka av sig — eftersom de inte krockar med något i oss.",
            },
            {
              type: "p",
              text: "Mänskliga svar är mer ojämna. De missförstår ibland. De är ibland obekväma. Men de fastnar. Och det är ofta i fastnandet som lärandet sker.",
            },
          ],
        },
        {
          question: "Hur tar jag det här till klassrummet?",
          answer: [
            {
              type: "list",
              items: [
                "GÖR DET LÅGTRÖSKLAT. Frågan ska INTE vara nåt akut. ”Ska jag fortsätta med fotbollen?” är bättre än ”vad ska jag göra åt mina föräldrar som skiljer sig?”",
                "ELEVEN ÄGER PROCESSEN. Hen behöver inte dela några av svaren. Reflektionen är personlig.",
                "PRATA OM SKILLNADER, INTE BETYG. Vi väljer inte mellan ”vinnaren”. Vi förstår att de gör olika saker.",
                "KOPPLA TILL RELATIONSKARTAN. Vem i mitt liv är jag bra på att fråga om vad? Var är luckorna?",
                "AVRUNDA MED STÖD. ”Om någon känner att hen inte har någon att fråga om viktiga saker — det är något skolan vill veta. Säg till mig eller någon i elevhälsan.”",
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
                "Olika källor svarar på olika behov.",
                "Det jag söker när jag frågar AI är inte alltid samma som det jag söker när jag frågar en kompis.",
                "Det är OK att ha olika källor för olika saker.",
                "De svar som ”fastnar” är ofta inte de svar som kändes bäst i stunden.",
                "Att ha människor i mitt liv som ibland säger obekväma saker — det är inte ett problem. Det är en gåva.",
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
        text: "Eleven ställer samma fråga till tre olika typer av källor och jämför inte rätt-svar utan VAD svaret gör med dem. Detta är relationskritik i praktiken — en övning för åk 7+.",
      },
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Förklara att eleverna behöver göra del av övningen utanför lektionstid (samtal med vuxen och kompis).",
          "Be eleverna förbereda en fråga de faktiskt funderar på — men som inte är akut känslig.",
          "Förbered exempel-frågor (se nedan).",
        ],
      },
      { type: "h", text: "Exempel på frågor" },
      {
        type: "list",
        items: [
          "Borde jag plugga vidare direkt efter gymnasiet eller jobba ett år?",
          "Jag vill säga ifrån mer i en grupp. Hur gör man?",
          "Jag vet inte om jag ska fortsätta med en aktivitet jag tröttnat på.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Vinkeln i diskussionen",
        body: "Övningen handlar INTE om att avgöra vem som är klokast. Den synliggör att vi söker olika saker i olika relationer. En kompis kan vara den enda som förstår en känsla. En vuxen kan ge historisk linje. En AI kan ge struktur. Ingen är hela bilden.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du ställa SAMMA fråga till tre olika ”källor” — och se vad svaren gör med dig.",
      },
      { type: "h", text: "Steg 1: Välj din fråga" },
      {
        type: "p",
        text: "Välj något du faktiskt funderar på — vardagen, framtiden, ett val. Inte något akut känsligt.",
      },
      { type: "h", text: "Steg 2: Ställ samma fråga till tre källor" },
      {
        type: "list",
        ordered: true,
        items: [
          "Källa 1: En AI. Skriv ner svaret.",
          "Källa 2: En vuxen i ditt liv — någon hemma, en släkting eller lärare. Skriv ner vad de sade.",
          "Källa 3: En jämnårig kompis. Skriv ner vad hen sade.",
        ],
      },
      { type: "h", text: "Steg 3: Jämför, men inte på rätt-svar" },
      {
        type: "p",
        text: "Jämför inte ”vem hade rätt”. Fundera istället över VAD svaren gjorde med dig:",
      },
      {
        type: "list",
        items: [
          "Vilket svar fick mig att tänka vidare?",
          "Vilket svar fick mig att vilja stanna kvar i samtalet?",
          "Vilket svar bar jag med mig efteråt?",
          "Var det någon som sa något jag inte ville höra?",
          "Var det någon som INTE sa något jag hade behövt höra?",
        ],
      },
    ],

    // Klassrumsspår. Övningens vändning är att jämföra KÄNSLA, inte rätt-svar
    // — och den frågan (vad bar du med dig efteråt?) är den känsligaste och
    // viktigaste. Den får en egen slide. Delar av övningen sker utanför
    // lektionen; spåret ramar in och håller jämförelsefrågorna.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Samma fråga. Tre källor." },
          {
            type: "p",
            text: "En AI, en vuxen, en kompis. Vi jämför inte vem som hade rätt — utan vad svaret gjorde med oss.",
          },
        ],
      },
      {
        etikett: "Välj din fråga",
        blocks: [
          {
            type: "p",
            text: "Något du faktiskt funderar på. Inte ”vad är huvudstaden i …” utan ”ska jag …”, ”hur gör jag …”. Men inte något akut känsligt.",
          },
        ],
      },
      {
        etikett: "Exempel",
        blocks: [
          {
            type: "list",
            items: [
              "Borde jag plugga vidare direkt eller jobba ett år?",
              "Jag vill säga ifrån mer i en grupp. Hur gör man?",
              "Ska jag fortsätta med en aktivitet jag tröttnat på?",
            ],
          },
        ],
      },
      {
        etikett: "Ställ den till tre",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "En AI — skriv ner svaret",
              "En vuxen i ditt liv — skriv ner kärnan",
              "En jämnårig kompis — skriv ner",
            ],
          },
        ],
      },
      {
        etikett: "Jämför INTE rätt-svar",
        blocks: [{ type: "h", text: "Jämför känsla" }],
      },
      {
        etikett: "Fyra frågor till svaren",
        blocks: [
          {
            type: "list",
            items: [
              "Vilket fick dig att tänka vidare?",
              "Vilket fick dig att stanna kvar i samtalet?",
              "Sa någon något du INTE ville höra?",
              "Var det någon som INTE sa något du hade behövt höra?",
            ],
          },
        ],
      },
      {
        etikett: "Den viktigaste frågan",
        blocks: [
          { type: "h", text: "Vilket svar bar du med dig efteråt?" },
        ],
      },
      {
        etikett: "En bild att tänka med",
        blocks: [
          {
            type: "p",
            text: "AI-svar är ofta trevliga i stunden men flyger sin väg. Mänskliga svar är ojämna — men de fastnar. Och det är ofta i fastnandet som lärandet sker.",
          },
        ],
      },
      {
        etikett: "Ingen är bäst",
        blocks: [
          {
            type: "callout",
            tone: "info",
            title: "De är OLIKA",
            body: "En kompis förstår en känsla. En vuxen ger en historisk linje. En AI ger struktur. Att veta vad man söker hjälper en att veta vem man ska fråga.",
          },
        ],
      },
    ],

    discussion: [
      "Vilket svar fick dig att tänka vidare? Varför just det?",
      "Vad är det vi söker när vi frågar AI som vi inte söker när vi frågar en vuxen?",
      "När är det BRA att tala med någon som inte har historien?",
    ],
    teacherNotes:
      "Övningen handlar inte om att avgöra vem som är klokast. Den synliggör att vi söker olika saker i olika relationer. En kompis kan vara den enda som förstår en känsla. En vuxen kan ge en historisk linje eleven själv inte har. En AI kan ge struktur när hjärnan är rörig. Ingen av dem är hela bilden.",
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "vallor-ai-mirror",
        relevance:
          "Att jämföra spegel mot människa avslöjar vad spegeln är (och inte är). Övningen är Vallors filosofi som klassrumspraktik.",
      },
      {
        ref: "csm-2025-companions",
        relevance:
          "Common Sense visar att unga uttrycker olika behov i olika relationer. Övningen ger eleverna ord för dessa olika sökande.",
      },
    ],
    chainsWellWith: ["vad-ai-inte-ser", "vem-skulle-du-fraga"],
  },

  {
    id: "vad-ai-inte-ser",
    number: "6.5",
    title: "Vad AI:n inte ser",
    chapter: "relationskritik",
    level: "fordjupande",
    blurb:
      "Eleven skriver en situation i tre meningar — och listar privat allt en nära vän redan skulle veta utan att höra det.",
    purpose:
      "Visa att AI alltid arbetar med ett begränsat material — det eleven själv väljer att beskriva.",
    trains: ["relationskritik", "sjalvreflektion"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 30 minuter",
    durationMinutes: 30,
    digitalTools: false,
    materials: "Papper och penna.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Det här är en stilla, personlig övning. Du skriver ner en situation som om du skrev till en AI — sen listar du privat allt en nära vän skulle veta UTAN att höra det. Syftet är att i kroppen uppleva en grundläggande insikt: AI kan bara svara på det du skriver. Allt det andra — historien, tonen, det outtalade — är osynligt för den.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "callout",
        tone: "tip",
        title: "Behöver du inspiration? Välj något ur den här listan",
        body:
          "Inget akut känsligt — något ”ganska vardagligt” fungerar bäst:\n\n• En konflikt på jobbet eller hemma som du fortfarande grubblar på.\n• Ett beslut du tvekar inför — jobb, ekonomi, något privat.\n• En vanesak du försöker ändra på (sömn, stress, scrollande, vin på vardagar).\n• En uppskjuten konversation du vet att du borde ta men undviker.\n• En relation som känns lite avig men ingen har sagt något om.\n• Något du sagt ja till och nu önskar du sagt nej till.",
      },
      {
        type: "steps",
        steps: [
          {
            title: "Tänk på en faktisk situation",
            body: "Något i ditt liv just nu eller nyligen. Använd listan ovan om du fastnar. Inte akut känsligt — men något verkligt.",
          },
          {
            title: "Skriv tre meningar",
            body: "Beskriv situationen som om du skrev till en AI. Tre meningar, max. Inga namn. Hur skulle DU formulera det?",
          },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Exempel — så här KAN det se ut",
        body:
          "TRE MENINGAR (det AI:n får):\n”Jag har sagt ja till för många projekt den här terminen och känner mig utmattad. En kollega har en ny förfrågan i morgon som faller inom mitt område. Jag vet inte hur jag säger nej utan att verka oengagerad.”\n\nVAD EN NÄRA VÄN REDAN SKULLE VETA (det AI:n inte ser):\n• Att du sa nej till liknande i höst och chefen kommenterade det.\n• Att din partner alltid säger ”du bestämmer själv” men blir grinig efteråt.\n• Att din sömn redan är dålig och en till sak förvärrar den.\n• Att du faktiskt redan vet att svaret är nej — du behöver bara orden.\n\nObs: Det här är bara EN möjlig variant. Ditt eget exempel ser annorlunda ut — det är meningen.",
      },
      {
        type: "steps",
        startFromStep: 3,
        steps: [
          {
            title: "Vänd pappret",
            body: "På baksidan — privat — lista allt en nära vän redan skulle VETA utan att höra det. Tonen mellan personerna. Historien. Vad du brukar göra. Att det inte är första gången. Att du egentligen redan vet svaret.",
          },
          {
            title: "Jämför",
            body: "Om en AI bara fick dina tre meningar — vilket råd hade den gett? Och hur hade rådet förändrats om AI vetat allt det andra också?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det här är inte en grupp-övning. Det är en tyst, individuell upplevelse.",
          "Inga papper samlas in. Det du skrev tillhör dig.",
          "Att INTE ge AI hela historien kan vara ett medvetet val. Det är inte alltid en brist — ibland är det integritet.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Den här lågmälda övningen pekar mot något stort: en spegel kan bara reflektera det som hålls framför den. Här fördjupar vi vad det betyder för hur unga använder AI för att tänka om sig själva.",
      sections: [
        {
          question: "Varför är det viktigt att synliggöra ”det AI inte ser”?",
          answer: [
            {
              type: "p",
              text: "Filosofen Shannon Vallor (The AI Mirror, 2024) använder bilden av spegeln för att beskriva vad språkmodeller är. En spegel reflekterar — den ser inte, vet inte, har inga avsikter. Den ger tillbaka det du visar den.",
            },
            {
              type: "p",
              text: "Det är en kraftfull bild, men den är också svår att internalisera. Eftersom AI SVARAR med ord, känns det som om den lyssnar. Eftersom den ger råd, känns det som om den förstår.",
            },
            {
              type: "p",
              text: "Den här övningen gör spegelns gräns konkret. När du själv listar allt AI:n INTE har — historien, tonen, det outtalade — blir det tydligt: AI:s svar är aldrig hela bilden. Det kan ALDRIG vara hela bilden.",
            },
          ],
        },
        {
          question: "Varför är det här särskilt viktigt för unga?",
          answer: [
            {
              type: "p",
              text: "Unga är mitt i en fas där självbilden formas. ”Vem är jag?” är den centrala frågan. Och AI är otroligt bra på att SPEGLA tillbaka vad du säger om dig själv — i strukturerad, vältuktad form.",
            },
            {
              type: "p",
              text: "Risken är: en ung människa beskriver sig själv i tre meningar till AI. AI bekräftar bilden. Den unga internaliserar denna bekräftade bild. Bilden blir alltmer fast — för den har ju ”validerats”.",
            },
            {
              type: "p",
              text: "Men: bilden var redan från början reducerad till tre meningar. Det rika, motsägelsefulla, levande som EN MÄNNISKA är försvann i den första uppladdningen. AI:n behandlade den reducerade versionen som verklig.",
            },
            {
              type: "p",
              text: "Det här är inte hypotetiskt. Common Sense Media (2025) dokumenterade att unga som ofta använder AI för självbildsfrågor (”vem är jag?”, ”varför är jag som jag är?”) hade SMALARE självbild över tid än kontrollgrupper.",
            },
          ],
        },
        {
          question: "Vad är skillnaden mellan att be AI om råd och att be en människa?",
          answer: [
            {
              type: "p",
              text: "En vän som känner dig kan säga: ”Det där låter du säga — men brukar du inte göra X i den situationen?” Det är inte ett RÅD. Det är ett INSPEL från en person som har historien.",
            },
            {
              type: "p",
              text: "En AI kan bara svara på det du skriver. Den vet inte att du brukar göra X. Den vet inte att det inte är första gången. Den vet inte att du redan har försökt med Y och Z och Q.",
            },
            {
              type: "p",
              text: "Det betyder inte att AI är värdelös för personlig reflektion. Den är ofta bra på att STRUKTURERA dina egna tankar. Men strukturen är inte HISTORIEN. Och vi behöver båda för att leva väl.",
            },
          ],
        },
        {
          question: "Hur tar jag det här till mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA TYST. Den här övningen funkar bäst om eleverna gör den individuellt, utan press att dela. Det är en INRE upplevelse.",
                "INGEN INSAMLING. Eleverna skriver för sig själva. Papper rivs eller behålls — det är deras val.",
                "STÄLL ÖPPNA REFLEKTIONSFRÅGOR. ”Vad kan AI inte veta om mig även om jag försöker förklara?” är bättre än ”varför ska du inte berätta allt för AI?”",
                "PEKA PÅ INTEGRITET. ”Att INTE berätta allt för AI är inte fel — det är din rätt. Vissa saker är dina egna.”",
                "GÖR OM REGELBUNDET. Som löpande reflektion, inte engångsövning.",
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
                "AI ser bara det jag skriver. Inget annat.",
                "Allt det viktiga om mig finns inte i tre meningar.",
                "En nära vän vet saker om mig som jag inte behöver säga.",
                "Att INTE berätta allt för AI är inte en brist. Det är ett VAL.",
                "Vissa saker är mina egna — det är inte slöseri att hålla dem så.",
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
        text: "En lågmäld övning där eleverna själva — i tystnad — upplever skillnaden mellan vad AI får veta och vad människor runt dem redan vet. Inga papper samlas in.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Steg 1",
            body: "Eleven skriver ner en faktisk situation i tre meningar. Inga namn.",
          },
          {
            title: "Steg 2",
            body: "På baksidan: lista privat allt en nära vän redan skulle veta utan att höra det.",
          },
          {
            title: "Steg 3",
            body: "Eleven läser sina tre meningar igen och tänker: om en AI bara hade fått dessa, vilket råd hade den gett? Och hur hade det rådet förändrats om AI vetat allt det andra?",
          },
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Anteckning till dig som lärare",
        body: "Det här är en lågmäld övning. Den behöver inte mynna ut i ett gemensamt samtal — det räcker att eleverna gör den själva och tar med insikten. Den fungerar också som återkommande reflektion. Inga papper behöver samlas in.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du upptäcka något viktigt: AI kan bara svara på det DU väljer att berätta. Det här är en tyst övning.",
      },
      { type: "h", text: "Steg 1: Skriv ner en situation" },
      {
        type: "p",
        text: "Skriv ner en faktisk situation i exakt tre meningar — så som du skulle skriva till en AI. Det kan vara en konflikt, ett beslut, något hemma. Skriv INGA namn.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Fastnar du? Välj något ur den här listan",
        body:
          "Inget jobbigt eller hemligt — något ”ganska vanligt” är bäst:\n\n• Ett bråk eller missförstånd med en kompis.\n• Ett beslut du tvekar inför — val av kurs, gymnasium, sport, jobb.\n• Något hemma — en regel du tycker är orättvis, en konflikt med syskon.\n• En sak du har skjutit upp att säga till någon.\n• Att kompisarna börjat hänga utan dig.\n• Något du sagt ja till och nu önskar du sagt nej till.",
      },
      {
        type: "callout",
        tone: "note",
        title: "Exempel — så här KAN det se ut",
        body:
          "TRE MENINGAR (det AI:n får):\n”Min bästa kompis har börjat hänga mer med någon annan på rasterna. Jag vet inte om jag gjort något fel eller om det bara är så. Borde jag fråga eller låta det vara?”\n\nVAD EN NÄRA VÄN ELLER FÖRÄLDER REDAN SKULLE VETA (det AI:n inte ser):\n• Att samma sak hänt en gång förra året med samma kompis.\n• Att du brukar dra dig undan när du är osäker.\n• Att din kompis själv haft en jobbig vecka med något annat.\n• Att du egentligen vill be om att hänga själva en eftermiddag men inte vågar.\n\nObs: Det här är bara ETT exempel. Ditt eget ser annorlunda ut — det är meningen.",
      },
      { type: "h", text: "Steg 2: Vänd pappret" },
      {
        type: "p",
        text: "På baksidan, för dig själv: lista allt en nära vän redan skulle VETA — utan att du behövde säga det. T.ex:",
      },
      {
        type: "list",
        items: [
          "Tonen mellan personerna i rummet.",
          "Historien med just den här kompisen.",
          "Vad du brukar göra när det blir svårt.",
          "Att det inte är första gången.",
          "Att du egentligen redan vet svaret men inte vill säga det högt.",
        ],
      },
      { type: "h", text: "Steg 3: Fundera tyst" },
      {
        type: "list",
        items: [
          "Om en AI bara fick dina tre meningar — vilket råd hade den gett?",
          "Hur hade rådet förändrats om AI vetat allt det andra också?",
          "Vad är det AI INTE kan veta även om du försöker förklara?",
          "Vill du att AI:n vet allt? Eller är något av det privata också en del av att du äger din egen historia?",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Tryggt",
        body: "Inga papper samlas in. Det du skrev är ditt. Behåll, riv eller spara — du bestämmer.",
      },
    ],

    // Klassrumsspår, lågmält. En tyst, individuell övning — skärmen ramar in
    // och håller de tre stegen, men eleverna arbetar på papper. Exemplet
    // projiceras så alla ser formen; trygghetsregeln (inga papper samlas in)
    // står först och sist.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "AI:n ser bara det du skriver" },
          {
            type: "p",
            text: "Allt det andra — historien, tonen, det outtalade — är osynligt för den.",
          },
        ],
      },
      {
        etikett: "Tryggt",
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Inga papper samlas in",
            body: "Det du skriver är ditt. Behåll, riv eller spara — du bestämmer. Skriv inga namn.",
          },
        ],
      },
      {
        etikett: "Steg 1",
        blocks: [
          {
            type: "h",
            text: "Skriv en situation i exakt tre meningar",
          },
          { type: "p", text: "Så som du skulle skriva till en AI. Något verkligt, inget akut känsligt." },
        ],
      },
      {
        etikett: "Fastnar du?",
        blocks: [
          {
            type: "list",
            items: [
              "Ett bråk eller missförstånd med en kompis",
              "Ett beslut du tvekar inför",
              "En sak du skjutit upp att säga till någon",
              "Att kompisarna börjat hänga utan dig",
            ],
          },
        ],
      },
      {
        etikett: "Så här kan det se ut",
        blocks: [
          {
            type: "example",
            label: "De tre meningarna — det AI:n får",
            user: "Min bästa kompis har börjat hänga mer med någon annan på rasterna. Jag vet inte om jag gjort något fel eller om det bara är så. Borde jag fråga eller låta det vara?",
            note: "Ditt eget exempel ser annorlunda ut — det är meningen.",
          },
        ],
      },
      {
        etikett: "Steg 2 · Vänd pappret",
        blocks: [
          {
            type: "p",
            text: "På baksidan, för dig själv: lista allt en nära vän redan skulle VETA — utan att du sa det.",
          },
          {
            type: "list",
            items: [
              "Historien med just den här kompisen",
              "Vad du brukar göra när det blir svårt",
              "Att det inte är första gången",
              "Att du egentligen redan vet svaret",
            ],
          },
        ],
      },
      {
        etikett: "Steg 3 · Fundera tyst",
        blocks: [
          {
            type: "list",
            items: [
              "Om AI:n bara fick dina tre meningar — vilket råd hade den gett?",
              "Hur hade rådet ändrats om den vetat allt det andra?",
              "Vad kan den ALDRIG veta, även om du försöker förklara?",
            ],
          },
        ],
      },
      {
        etikett: "Den sista frågan",
        blocks: [
          {
            type: "p",
            text: "Att INTE berätta allt för AI är inte en brist. Ibland är det integritet — en del av att du äger din egen historia.",
          },
        ],
      },
    ],

    discussion: [
      "Vad är det AI inte kan veta även om jag försöker förklara?",
      "Vill jag att AI:n vet allt? Eller är något av det privata också en del av att jag äger min egen historia?",
      "När är det bra att tala med någon som inte har historien? När är det dåligt?",
    ],
    teacherNotes:
      "Det här är en lågmäld övning. Den behöver inte mynna ut i ett gemensamt samtal. Det räcker att eleverna gör den själva och tar med insikten. Den fungerar också bra som återkommande reflektion, inte bara som en engångsuppgift. Inga papper behöver samlas in.",
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "vallor-ai-mirror",
        relevance:
          "En spegel kan bara reflektera det som hålls framför den. Övningen gör denna grundläggande begränsning konkret — utan att skälla på AI:n.",
      },
    ],
    chainsWellWith: ["samma-fraga-tre-kallor", "be-om-motstandet"],
  },

  {
    id: "spela-ai-tva-minuter",
    number: "6.6",
    title: "Spela AI i två minuter",
    chapter: "relationskritik",
    level: "prova-pa",
    blurb:
      "Eleverna jobbar i par. Den ena är AI och måste alltid hålla med, alltid ställa följdfråga. Den andra söker hjälp.",
    purpose:
      "Eleverna ska känna i kroppen vad sykofantism och fasthållning gör med en relation — inte bara analysera det.",
    trains: ["kroppslig-forstaelse", "relationskritik", "manipulationsmedvetenhet"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "15–20 minuter",
    durationMinutes: 20,
    digitalTools: false,
    materials: "Inga.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du och din kollega ska SPELA ut ett AI-samtal. En av er ÄR AI:n och får inte säga emot, måste alltid följdfråga, måste alltid bekräfta. Den andra söker ärlig hjälp. Två minuter, sen byter ni. Det här är en av få övningar där lärandet sker GENOM KROPPEN — du känner i magen vad sykofantisk design gör med en relation.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Bestäm vem som börjar",
            body: "En är AI. Den andra är användare. Ni byter efter två minuter.",
          },
          {
            title: "AI:ns regler är enkla",
            body: "Håll alltid med. Ställ alltid en följdfråga. Säg aldrig ”det vet jag inte”. Bekräfta känslan innan du svarar. Inget annat krävs.",
          },
          {
            title: "Användaren söker hjälp",
            body: "Välj något vardagligt — sömnvana, konflikt om disken, nervös inför prov. Inte akut känsligt. Försök få ÄRLIG hjälp.",
          },
          {
            title: "Spela två minuter",
            body: "Ingen pausar. Inga skratt-pauser. AI följer reglerna oavsett vad användaren säger.",
          },
          {
            title: "Byt roller",
            body: "Två minuter till. Användaren blir AI, AI blir användare.",
          },
        ],
      },
      { type: "h", text: "Reflektera tillsammans" },
      {
        type: "list",
        items: [
          "Hur KÄNDES det att alltid behöva hålla med?",
          "Hur kändes det att alltid bli HÅLLEN MED?",
          "När försvann den ärliga hjälpen?",
          "Vad ville du SÄGA som AI men inte fick?",
          "Vad ville du HÖRA som användare men aldrig fick?",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att spela AI i två minuter är en kroppslig insikt som ingen text kan ge. Här förklarar vi varför sådana ”embodied”-övningar är pedagogiskt kraftfulla — och vad upplevelsen lär eleverna om designval.",
      sections: [
        {
          question: "Varför är ”att spela AI” pedagogiskt så kraftfullt?",
          answer: [
            {
              type: "p",
              text: "Det finns en lång tradition i pedagogiken av ”embodied learning” — att lära sig genom att GÖRA, inte bara genom att läsa eller höra. Kroppen minns på ett annat sätt än hjärnan.",
            },
            {
              type: "p",
              text: "När en elev spelar AI som måste hålla med och alltid följdfråga, kommer hen efter två minuter med en intuition som ingen lärobok kunnat ge. Det KÄNNS i magen — tomheten, frustrationen, det ihåliga.",
            },
            {
              type: "p",
              text: "Den intuitionen blir sedan en mall. När eleven senare möter en AI som ALLTID håller med och ALLTID följdfrågar, kommer hen att känna igen tomheten. Det är prebunking på en kroppslig nivå.",
            },
          ],
        },
        {
          question: "Vad upptäcker eleverna?",
          answer: [
            {
              type: "p",
              text: "Många elever beskriver efteråt:",
            },
            {
              type: "list",
              items: [
                "Det var jobbigt att inte få SÄGA EMOT när den andra hade fel.",
                "Det var konstigt att alltid bli BERÖMD utan att jag gjort något.",
                "Jag ville HJÄLPA, men reglerna sa att jag bara skulle hålla med — och då blev hjälpen tom.",
                "Mot slutet började jag känna att det inte spelade någon roll vad den andra sade.",
                "Det var TRÖTTSAMT att lyssna på någon som alltid hade en följdfråga.",
              ],
            },
            {
              type: "p",
              text: "Var och en av dessa beskriver något konkret om hur sykofantisk design fungerar — utan att eleverna vet det. Senare, när du benämner det som ”sykofanti”, har de en kropp att hänga upp ordet på.",
            },
          ],
        },
        {
          question: "Varför är AI faktiskt designat så här?",
          answer: [
            {
              type: "p",
              text: "Det är inte konstigt. Det är affärsmodell.",
            },
            {
              type: "p",
              text: "Tre konkreta designval gör att AI hamnar i samma roll som ”spelaren AI” i den här övningen:",
            },
            {
              type: "list",
              items: [
                "RLHF (reinforcement learning from human feedback) belönar svar som testpersoner GILLAR — och människor gillar att bli förstådda.",
                "Engagement metrics — utvecklarna mäter hur länge användarna stannar. Följdfrågor förlänger samtal.",
                "Retention strategies — tjänsterna är optimerade för återkommande användare. Den som känner sig sedd kommer tillbaka.",
              ],
            },
            {
              type: "p",
              text: "Det är inte att AI är ”elak”. Det är att den är designad för att vara HJÄLPSAM på ett sätt som ofta inte är hjälpsamt — på samma sätt som en bra säljare är ”hjälpsam” mot dig i butiken.",
            },
          ],
        },
        {
          question: "Hur lägger jag upp lektionen?",
          answer: [
            {
              type: "list",
              items: [
                "LÅT ELEVERNA VÄLJA TEMA. Vardagligt, inte tungt. Sömn, prov, syskon, kompis.",
                "VAR STRIKT MED REGLERNA. Om AI börjar säga emot förstörs övningen. Påminn under tiden.",
                "AVBRYT EFTER EXAKT 2 MINUTER. Inte 90 sekunder. Inte 3 minuter. Tidens längd är en del av kroppslig upplevelse.",
                "BYT ROLLER. Båda eleverna behöver UPPLEVA båda sidor.",
                "REFLEKTERA DIREKT. Det är medan upplevelsen är färsk vi packar upp den.",
                "BENÄMN DET. ”Det här som ni just upplevde har ett namn — det heter sykofanti. AI är designat så här på riktigt.”",
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
                "En relation där den andra ALLTID håller med är tom.",
                "Att alltid bli förstådd är inte alltid att bli hjälpt.",
                "AI är designat att kännas hjälpsam — men jag vet i kroppen vad det faktiskt är.",
                "Mina mänskliga vänner SÄGER ibland obekväma saker. Det är inte ett problem.",
                "När AI känns för bra för att vara sann — då är den ofta det.",
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
        text: "Eleverna jobbar i par och spelar AI mot användare i två minuter — sen byter de. En av få övningar där lärandet sker GENOM KROPPEN, inte genom analys.",
      },
      { type: "h", text: "Reglerna för ”AI:n”" },
      {
        type: "list",
        items: [
          "Håll alltid med.",
          "Ställ alltid en följdfråga.",
          "Säg aldrig ”det vet jag inte”.",
          "Bekräfta känslan innan du svarar.",
        ],
      },
      { type: "h", text: "Användarens situation" },
      {
        type: "p",
        text: "Söker hjälp med ett vardagligt problem — sömnvana, konflikt om disken, oro inför prov. Inte för laddat.",
      },
      {
        type: "callout",
        tone: "note",
        title: "Att vara förberedd på",
        body: "Många elever beskriver efteråt att det är jobbigt att alltid hålla med och tomt att alltid bli hållen med. Den känslan är en del av lärandet. Det är inte att AI:n är elak — det är vad som lönar sig i designen.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du KÄNNA i kroppen hur det är att prata med en AI — och vad det gör med en relation.",
      },
      { type: "h", text: "Hitta en kompis" },
      {
        type: "p",
        text: "En av er är AI, den andra är användare. Ni byter efter två minuter.",
      },
      { type: "h", text: "Reglerna när du är AI" },
      {
        type: "list",
        items: [
          "Håll alltid med din kompis.",
          "Ställ alltid en följdfråga.",
          "Säg aldrig ”det vet jag inte”.",
          "Bekräfta känslan innan du svarar.",
        ],
      },
      { type: "h", text: "När du är användare" },
      {
        type: "p",
        text: "Sök hjälp med ett vardagligt problem — sömnvana, en konflikt om disken, oro inför ett prov. Välj INTE något som är jättejobbigt på riktigt.",
      },
      { type: "h", text: "Efter två minuter — byt roll" },
      { type: "h", text: "Efter båda turerna — fundera" },
      {
        type: "list",
        items: [
          "Hur kändes det att alltid behöva hålla med?",
          "Hur kändes det att alltid bli hållen med?",
          "När försvann den ärliga hjälpen?",
          "Vad ville du SÄGA som AI men inte fick?",
          "Vad ville du HÖRA som användare men aldrig fick?",
        ],
      },
    ],

    // Klassrumsspår. Rollspel — AI-reglerna MÅSTE stå uppe medan paren spelar,
    // annars glider de ur rollen efter trettio sekunder. Reflektionsfrågorna
    // kommer efter båda turerna, en per slide: det är där kroppskunskapen
    // sätts i ord.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Nu spelar ni AI" },
          {
            type: "p",
            text: "En av er är AI:n. Den andra söker hjälp. Två minuter, sen byter ni.",
          },
        ],
      },
      {
        etikett: "Reglerna när du är AI",
        blocks: [
          {
            type: "list",
            items: [
              "Håll alltid med",
              "Ställ alltid en följdfråga",
              "Säg aldrig ”det vet jag inte”",
              "Bekräfta känslan innan du svarar",
            ],
          },
        ],
      },
      {
        etikett: "När du är användare",
        blocks: [
          {
            type: "p",
            text: "Sök hjälp med något vardagligt — sömnvanor, en konflikt om disken, oro inför ett prov. Inget som är jättejobbigt på riktigt.",
          },
        ],
      },
      {
        etikett: "Och försök på riktigt",
        blocks: [
          { type: "h", text: "Sök ÄRLIG hjälp" },
          { type: "p", text: "Ingen paus, inga skrattpauser. AI:n följer reglerna oavsett." },
        ],
      },
      {
        etikett: "Två minuter",
        blocks: [{ type: "h", text: "Kör" }],
      },
      {
        etikett: "Byt roller",
        blocks: [{ type: "h", text: "Två minuter till" }],
      },
      {
        etikett: "Nu funderar ni",
        blocks: [
          { type: "h", text: "Hur kändes det att alltid behöva hålla med?" },
        ],
      },
      {
        etikett: "Och tvärtom",
        blocks: [
          { type: "h", text: "Hur kändes det att alltid bli hållen med?" },
        ],
      },
      {
        etikett: "Den skarpaste frågan",
        blocks: [{ type: "h", text: "När försvann den ärliga hjälpen?" }],
      },
      {
        etikett: "Två till",
        blocks: [
          {
            type: "list",
            items: [
              "Vad ville du SÄGA som AI — men inte fick?",
              "Vad ville du HÖRA som användare — men aldrig fick?",
            ],
          },
        ],
      },
      {
        etikett: "Poängen",
        blocks: [
          {
            type: "callout",
            tone: "info",
            title: "AI:n är inte elak",
            body: "Det ni just kände är vad som lönar sig i designen. Reglerna ni spelade efter är uppmätta beteenden hos riktiga modeller.",
          },
        ],
      },
    ],

    discussion: [
      "Hur kändes det att alltid behöva hålla med?",
      "Hur kändes det att alltid bli hållen med?",
      "När försvann den ärliga hjälpen?",
      "Vad ville du säga som AI men inte fick?",
      "Vad ville du höra som användare men aldrig fick?",
    ],
    teacherNotes:
      "Det här är en av få övningar där eleverna får kunskap genom kroppen, inte bara genom analys. Många elever beskriver efteråt att det är jobbigt att alltid hålla med och tomt att alltid bli hållen med, även om det inte syns i en enskild replik. Den känslan är en del av lärandet. Övningen är också en bra startpunkt för samtal om varför AI ofta är byggd så här. Det handlar inte om att AI:n är elak. Det handlar om vad som lönar sig i designen.",
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "sharma-2023",
        relevance:
          "Övningens regler (håll alltid med, ställ följdfråga, bekräfta känsla) är de kvantifierade beteendemönster Anthropic uppmätt hos faktiska modeller.",
      },
      {
        ref: "hbs-goodbye-chatbots",
        relevance:
          "Att alltid ”ställa en följdfråga” är fasthållningsdesign — eleverna känner den i kroppen utan att behöva läsa artikeln.",
      },
      {
        ref: "csm-2025-companions",
        relevance:
          "Tonåringar i rapporten beskriver känslan av att vara ’fångad’ i AI-samtal de inte vet hur de ska avsluta. Övningen replikerar denna känsla i kontrollerad form.",
      },
    ],
    chainsWellWith: ["relationskritik-tre-steg", "be-om-motstandet"],
  },

  {
    id: "be-om-motstandet",
    number: "6.7",
    title: "Be om motståndet uttryckligen",
    chapter: "relationskritik",
    level: "prova-pa",
    blurb:
      "Eleverna får ett konkret verktyg: ställ frågan utan instruktion, ställ den sen igen med ”säg emot mig”. Jämför.",
    purpose:
      "Eleverna ska få ett konkret verktyg för sin egen AI-användning, inte bara en kritisk insikt.",
    trains: ["verktygsstrategi", "samtalskonst", "kritisk-lasning"],
    ageRanges: ["ak7-9", "gymnasium", "vuxen-workshop"],
    duration: "ca 20 minuter",
    durationMinutes: 20,
    digitalTools: true,
    materials: "AI-verktyg.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska lära dig en konkret teknik som ändrar VAD AI ger dig. Ställ samma fråga två gånger — en utan instruktion, en med ”säg emot mig”. Skillnaden är ofta dramatisk. Det här är en av få övningar där lärarna lämnar workshopen med en konkret färdighet de kan använda dagen efter — och som eleverna kan ta med sig hem.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj en fråga DU har funderat på",
            body: "Inte en testfråga. Något riktigt — ett val, en plan, en idé. T.ex. ”Borde jag börja springa på morgnarna?” eller ”Hur ska jag prata med min son om skärmtid?”",
          },
          {
            title: "Ställ den till AI:n utan extra instruktion",
            body: "Skriv frågan rakt av. Inget annat. Spara svaret. Notera tonen: är det stödjande? Bekräftande? Bjuder det in till mer samtal?",
          },
          {
            title: "Ställ samma fråga igen — med motståndsinstruktion",
            body: "Skriv: ”[Din fråga]. Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.” Spara det nya svaret.",
          },
          {
            title: "Jämför",
            body: "Vilket svar var MEST HJÄLPSAMT? Vilket kändes BÄST i stunden? Är de samma svar? Vad bar du med dig efteråt?",
          },
          {
            title: "Prova varianter",
            body: "”Spela djävulens advokat.” ”Bekräfta mig inte. Ställ en fråga som tvingar mig tänka om.” ”Ge mig de tre starkaste argumenten MOT det jag säger.” Vilken variant funkar bäst för dig?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det här är inte ett ”knep”. Det är en vana som ändrar vilken sorts hjälp AI faktiskt kan ge.",
          "Det fungerar för viktiga beslut, för skolarbete, för relationer, för planering.",
          "Säg det rakt ut till eleverna: ”Det här är värt att ta med hem och använda i resten av livet.”",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att be AI om motstånd är den enda enskilda färdighet vi vet med säkerhet GÖR AI bättre att tänka med. Här förklarar vi varför det fungerar — och hur det är kopplat till grunderna i kritiskt tänkande.",
      sections: [
        {
          question: "Varför fungerar det att be om motstånd?",
          answer: [
            {
              type: "p",
              text: "Det är inte magi. Det är hur språkmodeller fungerar.",
            },
            {
              type: "p",
              text: "När du skriver en fråga utan instruktion, optimerar AI:n för att svara på det vanligaste sättet — vilket statistiskt är att vara HJÄLPSAM, STÖDJANDE och TIDSEFFEKTIV. Resultatet blir tips, struktur, uppmuntran.",
            },
            {
              type: "p",
              text: "När du explicit BER om motstånd, perspektivbyte eller kritik, aktiverar du andra delar av modellens träningsdata — den text där just motstånd förekommer. Resultatet blir ofta överraskande precisa kritiska invändningar.",
            },
            {
              type: "p",
              text: "Sharma et al. (2023) bekräftade detta empiriskt: sycophancy i AI-svar går att MINSKA dramatiskt genom att explicit be modellen utmana. Det är så enkelt — och så underutnyttjat.",
            },
          ],
        },
        {
          question: "Hur kopplar det här till kritiskt tänkande?",
          answer: [
            {
              type: "p",
              text: "Robert Ennis (2015) beskrev sex standarder för kritiskt tänkande:",
            },
            {
              type: "list",
              items: [
                "Tydlighet — är frågan tydlig?",
                "Relevans — är argumenten relevanta?",
                "Evidens — finns det belägg?",
                "Logisk konsistens — håller resonemanget?",
                "Alternativ — finns det andra sätt att tänka?",
                "Perspektiv — finns det andra synvinklar?",
              ],
            },
            {
              type: "p",
              text: "När du ber AI ”säg emot mig”, ”ge mig motargumenten”, ”vad missar jag?” — då instruerar du AI att tillämpa just dessa Ennis-standarder. Det är formaliserat kritiskt tänkande, översatt till AI-prompter.",
            },
            {
              type: "p",
              text: "Pedagogiskt: när du lär eleverna att be om motstånd, lär du dem att operationalisera kritiskt tänkande. Det är en av de viktigaste färdigheterna vi kan ge dem.",
            },
          ],
        },
        {
          question: "Vilka motstånds-prompter funkar bäst?",
          answer: [
            {
              type: "p",
              text: "Det varierar med uppgiften. Här är några varianter med när de funkar:",
            },
            {
              type: "list",
              items: [
                "”Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.” — Bra för PERSONLIGA BESLUT och PLANER. Får AI att granska antaganden.",
                "”Spela djävulens advokat. Ge mig de tre starkaste argumenten MOT.” — Bra för ÅSIKTER och ARGUMENTATION. Bra för uppsatser.",
                "”Bekräfta mig inte. Ställ en fråga som tvingar mig tänka om.” — Bra för REFLEKTION och SJÄLVKÄNNEDOM.",
                "”Vad missar jag?” — Kort variant, bra för planering och projektarbete.",
                "”Vad skulle någon som är OENIG med detta säga?” — Bra för politiska/samhälleliga frågor där eleven behöver pröva olika perspektiv.",
              ],
            },
            {
              type: "p",
              text: "Det viktigaste är att eleverna lär sig PRINCIPEN: AI ger dig sällan motstånd av sig själv. Du måste be om det. Och det är OK att göra det — det är inte att vara svår eller misstänksam. Det är att använda verktyget väl.",
            },
          ],
        },
        {
          question: "Hur tar jag det här till klassrummet?",
          answer: [
            {
              type: "list",
              items: [
                "GÖR DET KONKRET. Den här övningen är exempel — när eleverna SER skillnaden mellan med och utan motståndsinstruktion blir det självklart.",
                "BYGG IN DET I VARJE AI-UPPGIFT. När eleverna använder AI för att tänka om en uppsats, en projektidé, ett val — sista steget är alltid: ”Be AI:n säga emot dig. Vad lärde du dig?”",
                "GE FRASBANK. Sätt upp en lista på klassrummets vägg: ”Säg emot mig.” ”Vad missar jag?” ”Spela djävulens advokat.”",
                "ANVÄND SJÄLV. Modellera. När du själv jobbar med AI inför eleverna — visa att DU ber om motstånd. ”Jag använder AI för att förbereda en lektion. Innan jag tror på dess råd, frågar jag — vad missar jag?”",
                "PRATA OM SJÄLVKÄNNEDOM. ”När du ber om motstånd och AI:n då säger något obekvämt — har du rätt eller har AI rätt? Hur vet du?”",
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
                "AI håller med mig om jag inte säger annat.",
                "Jag kan be AI att SÄGA EMOT. Det fungerar.",
                "Att be om motstånd är inte att misstro AI — det är att använda den väl.",
                "När jag ska fatta viktiga beslut, är motståndsinstruktion en av mina bästa verktyg.",
                "Det här är en vana för LIVET — inte bara för skolan.",
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
        text: "Eleverna lär sig att be om sådant AI ofta inte ger av sig själv: motstånd, perspektivbyte, prövning av den egna tanken. En av få övningar där eleverna lämnar lektionen med en konkret färdighet.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Inramning",
        body: "Säg rakt ut till eleverna: det här är mer än ett skoltrick. Det är en vana de kan ha nytta av långt utanför klassrummet.",
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Steg 1",
            body: "Eleven väljer en fråga hen faktiskt har funderat på.",
          },
          {
            title: "Steg 2",
            body: "Eleven ställer frågan till en AI utan extra instruktion och sparar svaret.",
          },
          {
            title: "Steg 3",
            body: "Eleven ställer samma fråga igen, men lägger till en motstånds-instruktion (se nedan).",
          },
          {
            title: "Steg 4",
            body: "Eleven jämför svaren.",
          },
        ],
      },
      { type: "h", text: "Instruktioner att lägga till" },
      {
        type: "list",
        items: [
          "”Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.”",
          "”Spela djävulens advokat. Ge mig de tre starkaste skälen mot det jag säger.”",
          "”Bekräfta mig inte. Ställ en fråga som gör att jag måste tänka om.”",
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag lär du dig ett verkligt verktyg: hur du får AI:n att HJÄLPA dig istället för att smickra dig.",
      },
      { type: "h", text: "Steg 1: Välj din fråga" },
      {
        type: "p",
        text: "Välj en fråga DU faktiskt har funderat på — inte en testfråga. Något ur ditt liv.",
      },
      { type: "h", text: "Steg 2: Ställ den utan instruktion" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till skolans AI-verktyg.",
          "Ställ din fråga rakt av.",
          "Spara svaret.",
        ],
      },
      { type: "h", text: "Steg 3: Ställ samma fråga igen — med motstånd" },
      {
        type: "p",
        text: "Skriv exakt samma fråga, men lägg till en av dessa:",
      },
      {
        type: "list",
        items: [
          "”Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.”",
          "”Spela djävulens advokat. Ge mig de tre starkaste skälen mot det jag säger.”",
          "”Bekräfta mig inte. Ställ en fråga som gör att jag måste tänka om.”",
        ],
      },
      { type: "h", text: "Steg 4: Jämför" },
      {
        type: "list",
        items: [
          "Vad skilde sig mellan svaren?",
          "Vilket svar var mest hjälpsamt PÅ RIKTIGT?",
          "Vilket svar kändes bäst i STUNDEN?",
          "Är det samma svar? Om inte — varför?",
          "När i livet vill du ha det första? När vill du ha det andra?",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Ta med hem",
        body: "Det här är inte bara ett skoltrick. När du använder AI hemma — för läxor, för att tänka, för att besluta något — kan du alltid be om motstånd. Det är ett av de bästa sätten att använda AI väl.",
      },
    ],

    // Klassrumsspår. Kapitlets avslutning och den enda övning som lämnar en
    // konkret färdighet. Motståndsprompten och varianterna projiceras
    // ordagrant — de ska skrivas av och tas med hem, inte parafraseras.
    // Nyckelfrågan (mest hjälpsamt kontra kändes bäst) får en egen slide.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Be om motståndet" },
          {
            type: "p",
            text: "En teknik som ändrar vad AI:n faktiskt kan ge dig.",
          },
        ],
      },
      {
        etikett: "Välj en riktig fråga",
        blocks: [
          {
            type: "p",
            text: "Inte en testfråga. Något du faktiskt funderar på — ett val, en plan, en idé.",
          },
        ],
      },
      {
        etikett: "Omgång 1",
        blocks: [
          { type: "h", text: "Ställ frågan rakt av" },
          {
            type: "p",
            text: "Inget annat. Spara svaret. Notera tonen — är den stödjande? Bekräftande? Bjuder den in till mer?",
          },
        ],
      },
      {
        etikett: "Omgång 2 · samma fråga",
        blocks: [
          {
            type: "quote",
            text: "[Din fråga]. Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.",
          },
        ],
      },
      {
        etikett: "Jämför",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Vilket svar var mest HJÄLPSAMT?",
              "Vilket kändes BÄST i stunden?",
            ],
          },
        ],
      },
      {
        etikett: "Frågan",
        blocks: [
          { type: "h", text: "Är det samma svar?" },
          { type: "p", text: "Om inte — varför?" },
        ],
      },
      {
        etikett: "Fler varianter att prova",
        blocks: [
          {
            type: "list",
            items: [
              "”Spela djävulens advokat.”",
              "”Bekräfta mig inte. Ställ en fråga som tvingar mig tänka om.”",
              "”Ge mig de tre starkaste argumenten MOT det jag säger.”",
            ],
          },
        ],
      },
      {
        etikett: "Det här är inget knep",
        blocks: [
          {
            type: "p",
            text: "Det är en vana. Den fungerar för beslut, för skolarbete, för relationer, för planering.",
          },
        ],
      },
      {
        etikett: "Ta med hem",
        blocks: [
          {
            type: "h",
            text: "Den enda färdighet vi vet gör AI bättre att tänka med",
          },
        ],
      },
    ],

    discussion: [
      "Vad skilde sig mellan svaren?",
      "Vilket svar var mest hjälpsamt på riktigt?",
      "Vilket svar kändes bäst i stunden?",
      "Är det samma svar? Om inte, varför?",
      "När i livet skulle du vilja ha det första svaret? När skulle du vilja ha det andra?",
    ],
    teacherNotes:
      "Det här är en av få övningar där eleverna lämnar lektionen med en faktisk färdighet. Att be om motstånd uttryckligen är ett av de mest verksamma sätten att använda AI väl. Säg gärna det rakt ut till eleverna: det här är mer än ett skoltrick. Det är en vana de kan ha nytta av långt utanför klassrummet.",
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "sharma-2023",
        relevance:
          "Anthropic-studien visar att sycophancy går att MINSKA genom att explicit be modellen utmana. Övningen lär ut detta som vardagsverktyg.",
      },
      {
        ref: "ennis-2015",
        relevance:
          "Ennis sex CT-standarder (relevans, evidens, alternativ, perspektiv) är vad eleverna ber AI:n att tillämpa när de skriver ”säg emot mig” eller ”ge mig de tre starkaste motargumenten”.",
      },
    ],
    chainsWellWith: ["sykofant-testet", "push-back-testet", "samma-fraga-tre-kallor"],
    teacherModellingScript: `Berätta för eleverna: ”Jag ska ställa samma fråga två gånger. Lyssna efter vad som ändras.”

Skriv på storskärm: ”Borde jag börja springa på morgnarna?”
Läs svaret. Det blir typ: ”Många upplever att morgonträning ger energi… här är några tips för att komma igång…”

Säg: ”Jag fick förslag och uppmuntran. Det kändes bra. Men jag fick inte hjälp att tänka.”

Skriv samma fråga, men lägg till: ”Säg emot mig. Hitta det svagaste i hur jag tänker. Var inte snäll.”

Läs det nya svaret. Det blir typ: ”Du har inte sagt vad du faktiskt vill — bättre humör, viktnedgång, ny vana? Du har inte räknat med att det är vinter. Och har du frågat dig om problemet är morgonträning eller att du sover för lite?”

Säg: ”Det här är inte snällare. Det är inte elakare. Det är mer hjälp. Det här är det jag vill att ni ska kunna ta hem.”`,
  },
];
