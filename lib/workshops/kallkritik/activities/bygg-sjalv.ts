import type { Activity } from "../types";

const DEEPFAKE_WARNING =
  "Innan du gör NÅGON deepfake-aktivitet i klassrummet — läs Trygghetsreglerna. Inget elevansikte utan dokumenterad samtycke från elev OCH vårdnadshavare.";

export const byggSjalv: Activity[] = [
  {
    id: "higgsfield-face-swap",
    number: "2.1",
    title: "Higgsfield face-swap",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Det enklaste deepfake-verktyget. Dra in en bild, byt ansikte. Klart.",
    purpose:
      "Teknisk förståelse genom hands-on. Hur lite friktion det är mellan idé och färdig deepfake.",
    trains: ["teknisk-forstaelse", "etisk-reflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "15 min demo / 30 min hands-on",
    durationMinutes: 45,
    digitalTools: true,
    materials:
      "Dator/Chromebook + internet + lärarbild eller karaktärsbild.",
    warning: DEEPFAKE_WARNING,

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska SKAPA en deepfake. På riktigt. Med din egen bild. Syftet är att uppleva hur LÅG tröskeln är — hur lite tid, kunskap eller pengar som krävs för att skapa något som kan användas mot en. När du själv har gjort det är du också rustad att möta din elev som kommer säga ”jag har provat på TikTok”.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna higgsfield.ai",
            body: "Eller motsvarande tjänst — verktygslandskapet ändras snabbt. Workshopledaren bekräftar vilken tjänst.",
          },
          {
            title: "Ladda upp en bild av dig själv",
            body: "Ditt eget ansikte. Inte en kollegas (utan tillstånd). Inte en kändis. Vi vill att du själv känner vad det betyder att din bild används.",
          },
          {
            title: "Välj ett målklipp",
            body: "En filmscen, en intervju, en talarsituation. Något där ditt ansikte plötsligt sitter på en främmande kropp.",
          },
          {
            title: "Byt ansikte",
            body: "Tryck på knappen. Vänta. Notera hur lång tid det faktiskt tog.",
          },
          {
            title: "Spela upp",
            body: "Titta på resultatet. Titta länge. Hur känns det att se sig själv säga saker man aldrig sagt?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Tjänsten har spärrar (troligen), men inte för dig som vuxen användare. För en 14-åring är spärrarna ofta lätta att kringgå.",
          "Det som tar 30 sekunder för dig kan vara förödande för en elev som blir måltavla.",
          "Du måste själv ha gjort en deepfake för att förstå storleken på problemet. Det är hela poängen med övningen.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Deepfakes är inte science fiction längre. De är 15-sekunders TikToks som elever själva gör. Här förklarar vi vad tekniken är, vad den används till — och vad lagen säger.",
      sections: [
        {
          question: "Vad är en deepfake?",
          answer: [
            {
              type: "p",
              text: "Deepfake är ett samlingsnamn för AI-genererade videor (eller bilder eller ljud) där en persons ansikte, röst eller hela existens byts ut mot någon annans. Ordet kommer från ”deep learning” + ”fake”.",
            },
            {
              type: "p",
              text: "Tekniken är inte ny — den första breda spridningen kom 2017 på Reddit. Men det som tog en specialist en vecka då tar en gymnasieelev fem minuter idag. Tröskeln har raserats.",
            },
            {
              type: "p",
              text: "Det finns tre vanliga varianter:",
            },
            {
              type: "list",
              items: [
                "Face-swap: en persons ansikte placeras på en annan kropp i en video. (Det vi gör i den här övningen.)",
                "Lip-sync: en persons ansikte börjar säga något det aldrig sagt — läpparna animeras för att matcha en ny ljudfil.",
                "Voice clone: en persons röst klonas från sekunders inspelning. Kan användas för att få någon att ”säga” vad som helst.",
              ],
            },
          ],
        },
        {
          question: "Vad används deepfakes till?",
          answer: [
            {
              type: "p",
              text: "Tekniken är dual-use — den kan användas för bra och dåliga saker. Det är därför vi inte kan ”förbjuda” den.",
            },
            {
              type: "p",
              text: "Positiva användningsområden:",
            },
            {
              type: "list",
              items: [
                "Filmskapande (de-aging av skådespelare, dubbning).",
                "Tillgänglighet (skapa röster för personer som tappat sin).",
                "Konst, satir, undervisning.",
              ],
            },
            {
              type: "p",
              text: "Skadliga användningsområden:",
            },
            {
              type: "list",
              items: [
                "Mobbning i skolan — den största enskilda kategorin för barn. En klasskamrats ansikte i en pinsam scen, en bild av någon i underkläder de aldrig burit.",
                "Sexuell utnyttjande av barn (”CSAM”) — en stor och växande problemkategori internationellt.",
                "Politisk desinformation (Putin som säger X, Biden som säger Y).",
                "Bedrägeri (din ”chef” ringer och ber dig överföra pengar).",
              ],
            },
          ],
        },
        {
          question: "Vad säger lagen i Sverige?",
          answer: [
            {
              type: "p",
              text: "Svensk lag har inte specifika ”deepfake-paragrafer” (ännu), men flera existerande lagar täcker olika aspekter:",
            },
            {
              type: "list",
              items: [
                "Förtal (5 kap. 1 § BrB) — om bilden är ”ägnad att utsätta annan för förakt”.",
                "Olaga integritetsintrång (4 kap. 6 c § BrB) — sexuell bild eller bild som krenker integriteten.",
                "Förolämpning (5 kap. 3 § BrB) — beroende på innehåll.",
                "Barnpornografilagstiftningen (16 kap. 10 a § BrB) — om motivet är ett barn under 18 år.",
              ],
            },
            {
              type: "p",
              text: "Det är viktigt att veta för elever och föräldrar: deepfakes är INTE en gråzon. Mycket är direkt brottsligt. Polisanmäl alltid om en elev blir utsatt.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här i mellanstadiet?",
          answer: [
            {
              type: "p",
              text: "Det här är känsligt — och det är därför Trygghetsreglerna finns. Läs dem innan ni gör övningen.",
            },
            {
              type: "list",
              items: [
                "ALDRIG på en annan elevs ansikte. Aldrig utan tydlig och dokumenterad samtycke från elev OCH vårdnadshavare.",
                "ALLTID i en trygg miljö (skolans datorer, godkänd tjänst, läraren närvarande).",
                "ALLTID med samtal efteråt: ”hur känns det att kunna göra detta? Och: vad om någon gör det på dig?”",
                "ALDRIG sparas eller delas. Allt raderas i slutet av lektionen.",
                "ALLTID med vetskapen om att om eleven sedan upptäcker att hen blivit utsatt — hen ska polisanmäla, och du som lärare har stöttat hen att förstå att det är allvarligt.",
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
                "Deepfakes är enkla att skapa. Vem som helst kan göra det.",
                "Att skapa en deepfake av någon utan tillstånd kan vara olagligt — även om det ”bara är ett skämt”.",
                "Om någon gör en deepfake av MIG: säga till en vuxen DIREKT. Spara bevis. Polisanmäl.",
                "Att se en konstig video av någon jag känner: inte sprida innan jag kollar med personen.",
                "Det här är inte teknikens fel. Det är våra val som spelar roll.",
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
          "Kontrollera att tjänsten fungerar på skolnätet och Chromebooks.",
          "Förbered ett ”godkänt ansikte” — t.ex. läraren själv, en fiktiv karaktär, ett djur. Eleverna får INTE använda varandras eller andra elevers ansikten.",
          "Skicka info-blad till vårdnadshavare med övningens syfte och att bilder INTE sparas eller delas.",
          "Läs Trygghetsreglerna i sin helhet innan lektionen.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Du visar hela flödet på storskärm med din egen bild.",
            time: "5 min",
          },
          {
            title: "Pararbete",
            body: "Två och två. Använd din bild eller en gemensam karaktär. Skapa ett deepfake-klipp. Eleverna får INTE spara.",
            time: "20 min",
          },
          {
            title: "Showtime",
            body: "Några par visar sina resultat i klassen.",
            time: "10 min",
          },
          {
            title: "Stort samtal",
            body: "Vad ÄR det vi just gjort? Vem skulle kunna göra det på er? Vad är skillnaden mellan att skämta med en kompis och att lägga upp deepfaken offentligt?",
            time: "10 min",
          },
        ],
      },
      { type: "h", text: "Efter lektionen" },
      {
        type: "p",
        text: "Avsluta ALLTID med ett samtal om hur det känns att skapa fejk, och vad det betyder att andra kan göra det här på en. Säkerställ att alla raderar materialet.",
      },
    ],

    studentInstructions: [
      {
        type: "callout",
        tone: "warning",
        title: "Innan du börjar",
        body: "Använd ALDRIG en kompis eller annan elevs ansikte. Du får använda ditt eget ansikte, lärarens (om läraren sagt OK), en historisk person eller en karaktär. Spara INGET.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till tjänsten läraren visat (t.ex. higgsfield.ai).",
          "Ladda upp den bild läraren godkänt — din egen, lärarens, eller en karaktär.",
          "Välj ett målklipp (en filmscen eller intervju).",
          "Byt ansikte. Spela upp.",
          "Visa resultatet för din kompis eller hela klassen om läraren vill.",
          "RADERA klippet när lektionen är slut.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Om någon gör det här på dig — vad gör du?",
          "Är det olagligt? Tips: kolla polisen.se om identitetsstöld.",
        ],
      },
    ],

    discussion: [
      "Om någon gör det här på dig — vad gör du?",
      "Vad är skillnaden mellan att skämta med en kompis och att lägga upp deepfaken offentligt?",
      "Är det här olagligt? Tips: kolla BRÅ eller polisen.se om identitetsstöld.",
    ],
    pitfalls: [
      "Eleven får ALDRIG använda en annan elevs ansikte utan tydlig och dokumenterad samtycke. Ingen exception.",
      "Tjänsten kan blockera barnkonton. Ha en plan B (se 2.3).",
      "Krav på samtal om bildhantering EFTER övningen — alla raderar.",
    ],
    variations: [
      "Byt ansikte på en historisk person (Selma Lagerlöf? Lincoln?) som rapporterar dagens nyheter.",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Prebunking-via-produktion: när elever själva tillverkar manipulationen tränas de att känna igen den i andras produktion. Övningen är en deepfake-specifik tillämpning.",
      },
      {
        ref: "vanderlinden-2017",
        relevance:
          "Att förvarna mot manipulationstekniker skyddar mot att övertygas senare. Den etiska reflektionen efter hands-on är vaccin-momentet.",
      },
    ],
    chainsWellWith: ["lucy-decart", "deepfake-civai"],
  },

  {
    id: "lucy-decart",
    number: "2.2",
    title: "AI-video från scratch",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Skapa korta AI-videor utan källmaterial. Visar genvägen från idé till produktion.",
    purpose:
      "Se hur snabbt en övertygande klipp kan skapas — och vad som behövs för att lura någon.",
    trains: ["teknisk-forstaelse", "prebunking"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "30 min (workshop) / 45 min (klassrum)",
    durationMinutes: 45,
    digitalTools: true,
    materials: "Dator + lucy.decart.ai (eller motsvarande).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska skapa en helt och hållet AI-genererad video — utan källmaterial. Bara med ord. Syftet är att uppleva att man inte längre behöver ”filma” för att producera ”videobevis”. Det räcker med en prompt och 30 sekunder. När du själv har gjort det blir det greppbart vad det betyder att tro på en video framöver.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna tjänsten",
            body: "lucy.decart.ai eller annan text-till-video-tjänst. Workshopledaren bekräftar.",
          },
          {
            title: "Skriv en bred prompt",
            body: "”Två lärare står utanför ett klassrum och skrattar.” Generera. Vänta. Titta.",
          },
          {
            title: "Iterera",
            body: "Skriv en mer specifik version. ”Två lärare i tröjor, regnigt väder, dokumentärkänsla.” Generera igen. Vad ändrades?",
          },
          {
            title: "Pusha gränsen",
            body: "Försök göra något så övertygande att du själv skulle tro på det. Var blir det helt klart att det är AI? Vilka detaljer förråder det?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Räkna sekunderna det tog. Jämför med vad det tagit att filma samma scen på riktigt — att hitta plats, ljus, statister, klippa.",
          "Föreställ dig att du ser en sådan här video på TikTok om något politiskt eller känsligt. Skulle du kunna säga att det är AI?",
          "Det här är inte hypotetiskt. Eleverna ser sådana videor varje dag. De flesta inte ens märker att det är AI.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Text-till-video är den största förändringen i visuell kommunikation på 100 år — och den hände 2024–2025. Här förklarar vi var tekniken är, vart den är på väg, och vad det betyder för hur eleverna ser världen.",
      sections: [
        {
          question: "Vad är text-till-video?",
          answer: [
            {
              type: "p",
              text: "Text-till-video (T2V) är AI-modeller som skapar rörliga bilder från en textbeskrivning. Du skriver ”en hund som leker i snön”, och tjänsten genererar en video av en hund som leker i snön. Ingen kamera, inga skådespelare, ingen klippning.",
            },
            {
              type: "p",
              text: "Tekniken bygger på ”diffusion models” — samma grundprincip som text-till-bild (DALL-E, Midjourney), men anpassad för rörliga sekvenser. Modellerna är tränade på enorma mängder existerande video och har lärt sig hur ljus, rörelse och tyngdkraft ”ser ut”.",
            },
            {
              type: "p",
              text: "I praktiken: du beskriver, modellen genererar. Resultatet är några sekunder långt, ofta lite stiliserat, men för varje månad mer fotorealistiskt.",
            },
          ],
        },
        {
          question: "Vad är skillnaden mot deepfakes?",
          answer: [
            {
              type: "p",
              text: "Båda är ”syntetisk media”, men de fungerar olika.",
            },
            {
              type: "list",
              items: [
                "Deepfakes BYGGER PÅ existerande video — de byter ut delar (ansiktet, rösten). De kräver ett källmaterial.",
                "Text-till-video SKAPAR från noll — de kräver inget existerande material. Bara en beskrivning.",
              ],
            },
            {
              type: "p",
              text: "Praktiska konsekvensen: text-till-video kan visa scener som ALDRIG HÄNT. Inte ”X säger Y” (deepfake), utan ”Scenen där hela klassen blir sjuk efter skolmaten” (T2V).",
            },
          ],
        },
        {
          question: "Hur övertygande är det idag — och vart är det på väg?",
          answer: [
            {
              type: "p",
              text: "Vi befinner oss på en specifik punkt på en brant utvecklingskurva. Per 2025 är T2V:",
            },
            {
              type: "list",
              items: [
                "Kort: oftast 5–15 sekunder per klipp.",
                "Begränsat i kontinuitet: personer kan ändra utseende mellan klipp.",
                "Stökigt i detaljer: händer, ögon, småtext är fortfarande knepigt.",
                "Stiliserat: en ”AI-känsla” är ofta märkbar för tränat öga.",
              ],
            },
            {
              type: "p",
              text: "Inom 1–2 år kommer dessa begränsningar att vara borta. Längre klipp, perfekt kontinuitet, indistinguerbart från riktigt foto. Vi vet det inte med säkerhet — men trenden är tydlig.",
            },
            {
              type: "p",
              text: "Det betyder att vi inte kan basera vår pedagogik på att eleverna ”lär sig se AI-känslan”. Den känslan försvinner. Det måste vara verifiering och källkritik som blir reflexen.",
            },
          ],
        },
        {
          question: "Hur undervisar jag i mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA MED PROMPTEN. När eleverna skriver prompten själva blir det glasklart att det inte är ”verklighet” — det är något de just hittat på.",
                "JÄMFÖR MED ATT FILMA. Hur lång tid hade det tagit att filma samma scen? Eleverna förstår produktion mer än de tror.",
                "VARNA FÖR MISSBRUK MEN UTAN PANIK. Eleverna ser detta dagligen. Ge dem språk, inte rädsla.",
                "PRATA OM SVAR PÅ FRÅGAN ”ÄR DET HÄR ÄKTA?”. Det går inte längre att se. Frågan är: hittar jag samma sak från en seriös källa?",
                "ANVÄND SOM KÄLLKRITIKSGRUND. Övningen är prebunking — när eleverna själva skapat T2V förstår de hur enkelt det är att göra andra.",
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
                "Man behöver inte filma längre. Man kan SKRIVA en video.",
                "Det jag ser i en video kan vara påhittat.",
                "En seriös nyhet visar VAR videon kommer från — och vi kan kolla.",
                "AI-videor blir bättre varje månad. Min ”det ser ut som AI”-känsla kommer sluta funka.",
                "Det enda som funkar långsiktigt: kontrollera källan, inte bilden.",
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
          "Testa tjänsten med skolnätet innan — den kan blockeras.",
          "Förbered 3–5 prompter som är säkra (djur, fantasi, dagliga situationer).",
          "Ha en lista över förbjudna ämnen (våld, sexuellt innehåll, identifierbara personer).",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          { title: "Demo", body: "Visa flödet med en prompt och iteration.", time: "5 min" },
          {
            title: "Promptträning",
            body: "Eleverna skriver egna prompter och genererar 2–3 klipp var.",
            time: "15 min",
          },
          {
            title: "Galleri",
            body: "Kollektivt galleri på storskärm. Vilka klipp är mest övertygande? Vilka avslöjar sig?",
            time: "10 min",
          },
          {
            title: "Diskussion",
            body: "Om någon vill lura oss — vad är enklast: en bild eller en video? Varför?",
            time: "15 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska få testa hur snabbt en AI-video kan skapas — bara genom att skriva med ord.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till tjänsten läraren visat.",
          "Skriv en prompt i sökrutan. Börja brett: ”En katt som klättrar i ett träd.”",
          "Generera klippet. Titta på det.",
          "Skriv en mer detaljerad prompt: lägg till väder, känsla, kameravinkel.",
          "Generera igen. Jämför. Vilket klipp är mest övertygande?",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Förbjudna ämnen",
        body: "Inget våld, inget sexuellt innehåll, inga identifierbara personer (inga klasskamrater, kända personer eller lärare utan tillstånd).",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad ska vi kolla på i en video innan vi tror på den?",
          "Vad händer om alla kan skapa ”videobevis” på vad som helst?",
        ],
      },
    ],

    discussion: [
      "Vilken prompt ger MEST verklighetstrogna klipp?",
      "Vad ska vi kolla på i en video innan vi tror på den?",
      "Vad händer om alla kan skapa ”videobevis” på vad som helst?",
    ],
    pitfalls: [
      "Tjänster ändras ofta. Verifiera dagens dag.",
      "Vissa elever testar gränser — ha en lista över förbjudna ämnen (våld, sexuellt innehåll, identifierbara personer).",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Prebunking. Att SE hur snabbt en övertygande klipp kan skapas är vaccin mot att tro på dem.",
      },
    ],
    chainsWellWith: ["higgsfield-face-swap", "deepfake-civai"],
  },

  {
    id: "deepfake-civai",
    number: "2.3",
    title: "Klassrumsanpassad deepfake-plattform",
    chapter: "bygg-sjalv",
    level: "workshop-byggsten",
    blurb:
      "Trygg miljö för att jobba prebunking-mässigt med deepfakes.",
    purpose:
      "Visa att det finns plattformar avsedda för skolan, med spärrar — och varför det är bättre att eleverna provar här än hemma.",
    trains: ["prebunking", "etisk-reflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "30–45 min (workshop) / 60 min (klassrum)",
    durationMinutes: 60,
    digitalTools: true,
    materials: "deepfake.civai.org (eller motsvarande klassrumsplattform).",
    warning: DEEPFAKE_WARNING,

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska testa en klassrumsanpassad deepfake-tjänst — alltså en med inbyggda spärrar, godkänd för skolbruk. Syftet är att du ska kunna jämföra mot konsumenttjänster (Higgsfield, etc) och fatta ett INFORMERAT beslut: är spärrarna värda det? Är det här rätt sätt att låta eleverna träna prebunking?",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Logga in",
            body: "deepfake.civai.org eller annan klassrumsplattform. Workshopledaren delar inloggning.",
          },
          {
            title: "Utforska spärrarna",
            body: "Vad får man INTE göra? Vilka ansikten är blockerade (kända personer, barn)? Vilka prompter avvisas? Testa gränsen.",
          },
          {
            title: "Skapa ett deepfake",
            body: "Använd ett godkänt ansikte — en historisk person, en karaktär, eller dig själv. Notera vad processen liknar och inte liknar konsumenttjänsterna.",
          },
          {
            title: "Granska någon annans",
            body: "Byt par. Den andra ska försöka avslöja vad i klippet som är fejket. Vad ger sig? Vad är trovärdigt?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Spärrar i en klassrumstjänst är pedagogik, inte begränsning. De skyddar dig som lärare och eleverna.",
          "Eleverna kommer ändå testa konsumenttjänster hemma. Frågan är: vill du att deras FÖRSTA exponering är i klassrummet (med samtal) eller i tystheten?",
          "Inga deepfakes ska sparas eller delas. Allt raderas i slutet.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att göra deepfakes i klassrummet är pedagogiskt försvarbart — men kräver eftertanke. Här förklarar vi varför trygga plattformar är värda investeringen, och vad du behöver tänka på som lärare.",
      sections: [
        {
          question: "Varför göra deepfakes i klassrummet alls?",
          answer: [
            {
              type: "p",
              text: "Det är en rimlig fråga. Varför inte bara prata om deepfakes som ett fenomen?",
            },
            {
              type: "p",
              text: "Svaret kommer från prebunking-forskningen (Roozenbeek & van der Linden, 2019). Att SE något beskrivas räcker inte. När man har GJORT det själv ändras något — man känner igen tekniken inifrån, och kan inte längre bli lurad av den på samma sätt.",
            },
            {
              type: "p",
              text: "Den andra anledningen är pragmatisk: eleverna kommer testa det själva. Antingen i en miljö med vuxen närvarande, samtal och spärrar — eller i tystheten på sitt rum. Det första är bättre.",
            },
          ],
        },
        {
          question: "Vad gör en klassrumsplattform annorlunda?",
          answer: [
            {
              type: "p",
              text: "Den största skillnaden är SPÄRRARNA — och VARFÖR de finns.",
            },
            {
              type: "list",
              items: [
                "Identifierade barnansikten blockerade automatiskt.",
                "Klassrumsplattformar har EN AKTIV REGEL: inga andra elevers ansikten.",
                "Vanligen sker uppladdning via lärarens konto, inte elevens.",
                "Producerat material raderas automatiskt eller efter session.",
                "GDPR-anpassade — data lämnar inte EU, lagras inte i USA-moln.",
                "Tydlig dokumentation om vad som händer med materialet.",
              ],
            },
            {
              type: "p",
              text: "Skillnaden mot Higgsfield et al: ingen av dessa restriktioner. Vilket är fint för en kreatör — men problematiskt för ett klassrum.",
            },
          ],
        },
        {
          question: "Vad säger GDPR/DPIA om detta?",
          answer: [
            {
              type: "p",
              text: "Det är inte trivialt. Innan du använder en deepfake-tjänst i klassrummet:",
            },
            {
              type: "steps",
              steps: [
                {
                  title: "Kolla skolans DPIA",
                  body: "Många huvudmän har gjort DPIA (Data Protection Impact Assessment) för specifika tjänster. Använd bara de som är godkända. Om tjänsten inte är godkänd — be IT-avdelningen kolla.",
                },
                {
                  title: "Informera vårdnadshavare",
                  body: "Inte ”får jag använda?” utan ”så här gör vi, varför vi gör det, och hur vi skyddar er”. Ofta räcker det. Men ibland vill någon förälder dra ur sitt barn — och då gör de det.",
                },
                {
                  title: "Använd inte personuppgifter",
                  body: "Elever skapar med en godkänd karaktär eller med lärarens ansikte (med tillstånd) — INTE med fulla namn, mejladresser, klassnamn.",
                },
                {
                  title: "Dokumentera",
                  body: "Kort anteckning om vilken tjänst som använts, när, med vilka spärrar. Bra för framtida frågor från föräldrar eller huvudmän.",
                },
              ],
            },
          ],
        },
        {
          question: "Hur lägger jag upp lektionen?",
          answer: [
            {
              type: "list",
              items: [
                "Förbered med Trygghetsreglerna — gå igenom dem MUNTLIGT i början av lektionen, så eleverna vet ramen.",
                "Demo först. Visa själv hur tjänsten används med ditt eget ansikte (eller karaktär).",
                "Hands-on i par. Eleverna jobbar tillsammans, inte ensamma. Det dämpar gränstänk.",
                "Granskningsmoment. Byt par och låt dem försöka avslöja varandras deepfakes. Det är där prebunking-effekten faktiskt sker.",
                "Reflektion. ”Hur känns det att vi kan göra det här? Och vad om någon gör det på er?”",
                "Tydlig stängning. Allt raderas. Allt är klart. Vi har gjort något viktigt tillsammans.",
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
                "Deepfakes kan göras tryggt — i en miljö som skyddar oss.",
                "Det finns spärrar för en anledning. De är inte ”tråkiga” — de är skydd.",
                "Hemma finns inte samma spärrar. Det är extra viktigt att tänka efter där.",
                "Om jag ser något konstigt online — fråga, kolla, säg till.",
                "Att skapa deepfake av någon utan tillstånd är aldrig OK.",
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
          "Skapa lärarkonto. Bjud in eleverna med engångskoder om tjänsten stöder det.",
          "Säkerställ att verktyget är OK enligt GDPR och skolans DPIA.",
          "Läs Trygghetsreglerna.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Intro",
            body: "Förklara: ”Varför behöver vi öva på det här i en TRYGG miljö?”",
            time: "10 min",
          },
          {
            title: "Hands-on",
            body: "Eleverna skapar deepfakes — bara karaktärer/läraren, ALDRIG varandra.",
            time: "30 min",
          },
          {
            title: "Granskning",
            body: "Byt par. Den andra ska försöka avslöja ”fejket”. Vad gör de?",
            time: "10 min",
          },
          {
            title: "Storsamtal",
            body: "Vad krävs för att skydda sig?",
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
        body: "Använd bara godkända ansikten — lärarens, en karaktär eller historisk person. ALDRIG en klasskamrats. Allt raderas i slutet.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Logga in på plattformen läraren delar.",
          "Skapa ett deepfake med ett godkänt ansikte.",
          "Byt par. Be din kompis försöka avslöja vad som är fejket. Vad la hen märke till?",
          "Be om feedback. Var blev det tydligast? Var var det svårast att se?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Varför är det BÄTTRE att göra det här i klassrummet än hemma?",
          "Hur skulle du vilja att skolan stöttar dig om någon publicerar en deepfake av dig?",
        ],
      },
    ],

    discussion: [
      "Varför är det BÄTTRE att göra det här i klassrummet än att eleverna gör det själva på fritiden?",
      "Hur skulle ni vilja att skolan stöttar er om någon publicerar en deepfake av er?",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Prebunking i en TRYGG miljö — pedagogiskt starkare än att se eleverna upptäcka tekniken oövervakat på fritiden.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Prebunking är effektivare än efterhandsdebunking. Klassrumsplattformens spärrar gör övningen säker att skala.",
      },
    ],
    chainsWellWith: ["higgsfield-face-swap", "skriv-fejkad-nyhetsartikel"],
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
  },
];
