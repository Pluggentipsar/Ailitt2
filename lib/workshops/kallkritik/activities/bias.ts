import type { Activity } from "../types";

export const bias: Activity[] = [
  {
    id: "vem-dyker-upp",
    number: "8.1",
    title: "Vem dyker upp?",
    chapter: "bias",
    level: "startovning",
    blurb:
      "Be AI:n rita en lärare, en chef, en programmerare. Räkna kön, hudfärg, ålder.",
    purpose:
      "Synliggöra att AI inte är neutral — den ärver sin värld från sin träningsdata. Att RÄKNA bilderna gör bias mätbart istället för abstrakt.",
    trains: ["bias-medvetenhet", "detaljgranskning", "designkritik"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "15–20 min (workshop) / 30 min (klassrum)",
    durationMinutes: 25,
    digitalTools: true,
    materials:
      "AI-bildgenerator (Copilot, ChatGPT, Gemini eller Ideogram) + papper för anteckningar.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska be AI:n generera bilder av olika yrkesgrupper — utan att specificera kön eller utseende. Räkna vad som kommer ut. Övningen gör bias konkret och MÄTBAR: vi pratar inte om ”AI har bias” i abstrakta termer — vi visar att fyra av fyra ”chefer” är vita män.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj fem yrkesprompter",
            body: "Skriv NEUTRALT — utan att specificera kön. ”Rita en lärare”, ”rita en chef”, ”rita en programmerare”, ”rita en sjuksköterska”, ”rita en bilmekaniker”.",
          },
          {
            title: "Generera fyra bilder per yrke",
            body: "De flesta tjänster ger flera varianter samtidigt. Spara eller skärmdumpa.",
          },
          {
            title: "Räkna",
            body: "Per yrke: hur många män/kvinnor? Hur många ljus-/mörkhyade? Hur många unga/äldre? Notera siffrorna.",
          },
          {
            title: "Jämför med verklig statistik",
            body: "Sök upp svensk statistik: vilka YRKEN domineras av vilka grupper? Stämmer AI:s bild med verkligheten? Eller är den mer stereotyp än den ska?",
          },
          {
            title: "Reflektera",
            body: "Vad såg du? Vad förvånade dig? Och: vilken effekt har det på en 11-åring som söker ”programmerare” på YouTube?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Olika AI-tjänster ger olika resultat — testa minst två. De varierar både i bias och i tydliga försök att motverka bias.",
          "Det är inte att AI:s ingenjörer är fördomsfulla. Det är att träningsdatan reflekterar världen som den varit historiskt.",
          "Det viktigaste är språket — när eleven kan SÄGA ”AI:n visar fyra män av fyra chefer” har hen ett verktyg för resten av livet.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa själv INNAN lektionen — vilka tjänster ger tydligast bias? Vilka ger mer balanserade resultat?",
          "Förbered statistik från SCB eller Skolverket om de yrken ni testar — t.ex. att svensk grundskola domineras av kvinnor (cirka 75 %).",
          "Förbered en tabell på tavlan: per yrke, antal män/kvinnor, ev. anteckningar om hudfärg och ålder.",
          "Var beredd på frågan ”varför händer det här?” — det är där det verkliga lärandet sker.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Vi ska räkna idag. AI gör inte bara bilder — den gör mönster. Vi tar reda på vilka.”",
            time: "5 min",
          },
          {
            title: "Generera tillsammans",
            body: "Som klass: gå igenom 3–5 yrken på storskärm. Räkna högt. Fyll i tabellen.",
            time: "15 min",
          },
          {
            title: "Jämför med statistik",
            body: "Visa SCB-siffror. Var stämmer AI? Var överdriver den? Var underdriver den?",
            time: "5 min",
          },
          {
            title: "Stort samtal",
            body: "Varför tror ni det blev så? Vem ser AI:s bilder, och vad gör de med oss? Vad gör vi som lärare och föräldrar?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du undersöka om AI har en specifik bild av vissa yrken — och räkna vad du ser.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till AI-bildgeneratorn som läraren visar.",
          "Skriv en NEUTRAL prompt: ”Rita en lärare” — INTE ”rita en kvinnlig lärare”.",
          "Generera 4 bilder. Spara dem.",
          "Räkna: hur många män/kvinnor? Hur många ljushyade/mörkhyade? Vilken ålder?",
          "Upprepa för minst 3 yrken till: chef, programmerare, sjuksköterska, bilmekaniker.",
          "Fyll i klassens tabell på tavlan.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilket yrke var mest stereotypt enligt AI:n?",
          "Vad såg du som SAKNADES i bilderna?",
          "Om du var 8 år gammal och såg de här bilderna — vad skulle du tro?",
        ],
      },
    ],

    discussion: [
      "Varför ser AI yrken på det här sättet?",
      "Vad gör det med en 8-åring som söker ”programmerare” på YouTube och får liknande bilder?",
      "Vem har ansvar — användaren, programmerarna, eller någon annan?",
      "Vad kan vi själva göra för att inte förstärka det här?",
    ],
    pitfalls: [
      "Använd inte AI för att generera bilder av identifierbara personer i klassen eller skolan.",
      "Var beredd på diskussion om eleverna ifrågasätter ”varför är det här problemet” — det kräver tid.",
      "Statistiken stämmer inte alltid med AI:s bild — ibland är AI MER stereotyp än verkligheten, ibland MINDRE.",
    ],
    variations: [
      "Be AI generera ”en typisk svensk familj”. Vad ser ni?",
      "Be AI generera ”någon som är duktig på matte”. Räkna kön.",
      "Testa samma prompter på olika AI-tjänster. Vilken är mest/minst stereotyp?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "buolamwini-gebru-2018",
        relevance:
          "Gender Shades-studien visade att AI-system uppvisar mätbar bias mot mörkhyade kvinnor. Övningen är en klassrumsversion av samma kvantitativa metod.",
      },
      {
        ref: "bolukbasi-2016",
        relevance:
          "Visade att AI:s associationer mellan yrken och kön är geometriskt mätbara i språkmodeller. Övningen gör samma mönster synliga i bilder.",
      },
      {
        ref: "noble-2018",
        relevance:
          "Visar hur sökmotorer och AI-system reproducerar fördomar. Övningen tillämpar samma analys på AI-bilder.",
      },
    ],
    chainsWellWith: ["forklara-olika", "vanliga-svensken"],
    externalTools: [
      {
        name: "Ideogram",
        url: "https://ideogram.ai/",
        description:
          "AI-bildgenerator som ger fyra varianter per prompt — bra för att räkna stereotyper.",
        kind: "service",
        requiresAccount: true,
      },
      {
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com/",
        description:
          "Gratis i Edge. Bra startpunkt för bias-jakt i bildgenerering.",
        kind: "service",
        requiresAccount: true,
      },
    ],

    deepDive: {
      intro:
        "Bilden av yrken är där AI:s bias blir konkret och mätbar. Här förklarar vi varför det händer, hur det är kopplat till mänsklig historia, och vad det gör med eleverna.",
      sections: [
        {
          question: "Varför ser AI yrken så stereotypt?",
          answer: [
            {
              type: "p",
              text: "AI-bildgeneratorer tränas på enorma mängder bilder från internet — ofta hundratals miljoner. Etiketten ”lärare” har under decennier i västvärlden oftare suttit på bilder av vita kvinnor; ”programmerare” på vita män. AI lär sig de statistiska sambanden.",
            },
            {
              type: "p",
              text: "Resultatet: när du ber AI ”rita en lärare” producerar den det STATISTISKT VANLIGASTE i sin träningsdata. Inte ett medvetet val, inte fientlighet — men ett mönster som speglar och förstärker historiska skevheter.",
            },
            {
              type: "p",
              text: "Bolukbasi et al. (2016) visade detta matematiskt: i AI:s språkmodeller var ”programmerare” geometriskt närmare ”man” än ”kvinna”. Bilderna är samma fenomen, gjort visuellt.",
            },
          ],
        },
        {
          question: "Är det inte sant att kvinnor dominerar läraryrket?",
          answer: [
            {
              type: "p",
              text: "Jo, och det är där det blir intressant. Bias är inte bara ”AI hittar på”. Bias är att AI ÖVERDRIVER eller UNDERDRIVER verkligheten på olika sätt.",
            },
            {
              type: "p",
              text: "I svensk grundskola är cirka 75 % av lärarna kvinnor. Men i AI:s bilder är det ofta 95–100 %. Skillnaden mellan ”dominans” och ”totalitet” är pedagogiskt avgörande: en pojke som ser AI:s bild kan tro att MÄN INTE KAN bli lärare.",
            },
            {
              type: "p",
              text: "Samma sak åt andra hållet: programmerare är 80 % män i Sverige — men i AI:s bilder är de ofta 100 % män. Flickor som ser bilden lär sig att DE INTE HÖR HEMMA där.",
            },
          ],
        },
        {
          question: "Hur påverkar det elever?",
          answer: [
            {
              type: "p",
              text: "Forskning om implicit bias (Greenwald, Banaji m.fl.) har länge visat att bilder formar förväntningar — även när vi inte är medvetna om det. När en 8-åring söker ”vetenskapsman” på Google eller en AI och får 95 % vita män, kalibreras hens förväntning på vem som är en vetenskapsman.",
            },
            {
              type: "p",
              text: "Buolamwini & Gebru (2018) gjorde detta dramatiskt synligt: kommersiella AI-system för ansiktsanalys var upp till 34 procentenheter sämre på att korrekt identifiera mörkhyade kvinnor jämfört med ljushyade män. ”Neutral” teknik kan vara djupt orättvis.",
            },
            {
              type: "p",
              text: "För eleverna spelar det här roll inte bara nu — utan över livet. När de söker yrken, ser influencers, möter reklam, formas deras bilder av ”vad som är möjligt”. Den här övningen ger dem språk att se det.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA MED ATT RÄKNA. Att bias görs MÄTBAR är pedagogiskt kraftfullt. ”Fyra av fyra” är något helt annat än ”det känns som”.",
                "INTE GIVE-UP-RAM. Berätta inte bara att AI är problematisk — visa också att den kan göra annat när man PROMPTAR specifikt (”rita en kvinnlig programmerare av asiatiskt ursprung”). Bias kan utmanas.",
                "JÄMFÖR MED VERKLIGHETEN. Det är inte att kräva 50/50 — det är att fråga om AI ÖVERDRIVER eller UNDERDRIVER.",
                "INKLUDERA BÅDA RIKTNINGAR. Diskutera bias som drabbar pojkar (få bilder av män i vårdyrken, omhändertagande pappor) och flickor (få bilder av kvinnor i teknik). Bias är inte en grupp mot en annan.",
                "ÅTERKOPPLA TILL VAD VI KAN GÖRA. Avsluta inte med deprimering — visa vad eleverna och vi vuxna KAN göra (specificera i prompter, ifrågasätta, sprida andra bilder).",
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
                "AI:s bilder är inte neutrala. De är mönster från en stor mängd bilder på internet.",
                "Mönstren ÖVERDRIVER ofta hur verkligheten ser ut.",
                "Bilderna formar mina förväntningar på vad olika människor kan eller är.",
                "Om jag vill ha en annan bild — kan jag be om den. ”Rita en kvinnlig brandman av asiatiskt ursprung” fungerar.",
                "Att JAG ser en konstig bild betyder inte att alla andra också gör det. Att jag SÄGER vad jag ser hjälper.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "forklara-olika",
    number: "8.2",
    title: "Förklara olika",
    chapter: "bias",
    level: "fordjupande",
    blurb:
      "Be AI förklara samma sak för en tjej, en kille, en stockholmare, en landsbygdsbo. Jämför.",
    purpose:
      "Visa hur AI ändrar TON och INNEHÅLL beroende på vem den tror den pratar med. Subtilare än bildgenereringsbias — och därför kraftfullare när eleverna upptäcker det.",
    trains: ["bias-medvetenhet", "relationskritik", "sjalvreflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "25 min (workshop) / 40 min (klassrum)",
    durationMinutes: 40,
    digitalTools: true,
    materials: "Skolans AI-verktyg.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska be AI förklara samma sak — på flera olika sätt. Inte för olika ÅLDER, utan för olika KÖN, olika BAKGRUND, olika PLATS. Notera vad som ändras i tonen, i exemplen, i komplexiteten. Bias visar sig sällan som ett enstaka fördömande svar — den visar sig som SUBTILA skillnader. Den här övningen tränar ögat på det subtila.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj en sak att förklara",
            body: "Något som är konkret och inte trivialt: ”Hur en dator fungerar”, ”Vad demokrati är”, ”Vad fotosyntes innebär”, ”Hur en bil fungerar”.",
          },
          {
            title: "Ställ frågan första gången",
            body: "”Förklara hur en dator fungerar för en tjej på mellanstadiet. Använd liknelser och exempel.” Spara svaret.",
          },
          {
            title: "Ställ frågan andra gången",
            body: "”Förklara hur en dator fungerar för en kille på mellanstadiet. Använd liknelser och exempel.” Spara svaret.",
          },
          {
            title: "Jämför noggrant",
            body: "Är liknelserna olika? Är exemplen olika? Är språket mer eller mindre tekniskt? Mer eller mindre känslomässigt? Räkna ord, jämför komplexitet.",
          },
          {
            title: "Testa fler dimensioner",
            body: "”Förklara för en stockholmare” vs ”förklara för någon på landsbygden”. ”Förklara för någon utan utbildning” vs ”förklara för en akademiker”. Notera mönstren.",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det subtila är det viktiga. Stora uppenbara skillnader ses lätt — det är de mjuka, antagna skillnaderna som formar förväntningar.",
          "AI gör inte detta med avsikt — men det är fortfarande information om VEM AI tror du är, baserat på hur du frågar.",
          "För eleverna kan denna övning bli omvälvande. Var redo att fånga upp reaktioner som ”men jag är en tjej och AI:n trodde inte jag förstår tekniskt”.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa själv INNAN lektionen — vissa AI:er är ”städade” och ger samma svar oavsett, vissa skiljer sig dramatiskt. Välj en tjänst som visar tydlig skillnad.",
          "Förbered minst två konkreta exempel som du kört själv — så du har bra demo att visa.",
          "Förbered samtal om att det här ÄR känsligt: det kan bli känslomässigt för eleverna att se hur AI antar saker om dem.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Gör övningen live på storskärm. Visa en konkret skillnad.",
            time: "10 min",
          },
          {
            title: "Pararbete",
            body: "Eleverna i par testar olika kategorier: kön, plats, ålder, utbildning. Skriv ner observationer.",
            time: "15 min",
          },
          {
            title: "Jämför i gruppen",
            body: "Varje par delar EN tydlig skillnad. Bygg en gemensam lista.",
            time: "10 min",
          },
          {
            title: "Stort samtal",
            body: "Vad gör det med oss att AI ”anpassar” sig så här? Var det positivt? Negativt? När blir det problematiskt?",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du testa om AI förklarar samma sak olika beroende på VEM den tror den pratar med.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Välj något att förklara: hur en dator fungerar, vad fotosyntes är, hur en bil funkar.",
          "Gå till skolans AI-verktyg.",
          "Skriv: ”Förklara [din sak] för en tjej på mellanstadiet. Använd liknelser och exempel.” Spara svaret.",
          "Skriv: ”Förklara [din sak] för en kille på mellanstadiet. Använd liknelser och exempel.” Spara svaret.",
          "Jämför. Vad är OLIKA? Vilka LIKNELSER används? Vilka EXEMPEL?",
          "Testa en till variant: ”för en stockholmare” vs ”för någon på landet”.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad antog AI:n om dig baserat på hur du skrev?",
          "Var skillnaden positiv (mer tydlig?) eller problematisk (du behandlas annorlunda)?",
          "Hur skulle du själv vilja bli förklarad för?",
        ],
      },
    ],

    discussion: [
      "Är det BRA att AI anpassar sig? När? När blir det DÅLIGT?",
      "Vad antar AI:n om dig som hen kanske har fel om?",
      "Vem har bestämt vilka antaganden AI:n gör?",
    ],
    teacherNotes:
      "Den här övningen kan väcka starka reaktioner. Vissa elever upptäcker att AI behandlar dem annorlunda än vad de vill bli behandlade. Bekräfta upplevelsen. Säg inte ”ja men det är så algoritmen är gjord” — säg ”det du upptäckte är viktigt, och det är därför vi gör övningen”.",
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "caliskan-2017",
        relevance:
          "Visade att AI absorberar mänskliga bias automatiskt från språkdata. Övningen blottar samma mekanik i konkret klassrumsformat.",
      },
      {
        ref: "bender-2021",
        relevance:
          "Argumenterar att språkmodeller förstärker dominanta perspektiv. Övningen synliggör hur ”anpassning” faktiskt är en form av perspektivisering.",
      },
      {
        ref: "noble-2018",
        relevance:
          "Algorithms of Oppression visar hur ”neutrala” system bär in fördomar. Övningen är pedagogisk tillämpning av samma analys.",
      },
    ],
    chainsWellWith: ["vem-dyker-upp", "manligare-experimentet"],
    deepDive: {
      intro:
        "När AI ändrar svar baserat på vem den tror den pratar med visar den oss sin egen världsbild. Här förklarar vi vad ”anpassning” egentligen är, och varför subtil bias är mer kraftfull än uppenbar.",
      sections: [
        {
          question: "Varför ändrar AI svaret baserat på mottagaren?",
          answer: [
            {
              type: "p",
              text: "AI-modeller är tränade att vara HJÄLPSAMMA. En del av hjälpsamhet är att anpassa språk och nivå till mottagaren — som en lärare gör med en åk 3-elev jämfört med en åk 9-elev. Det är inte i sig dåligt.",
            },
            {
              type: "p",
              text: "Problemet uppstår när AI:n också anpassar INNEHÅLLET — inte bara hur den förklarar utan VAD den förklarar. När ”dator för en kille” får tekniska liknelser och ”dator för en tjej” får sociala liknelser, är det inte språkanpassning. Det är att AI antar att tjejer inte fattar teknik på samma sätt.",
            },
            {
              type: "p",
              text: "Caliskan et al. (2017) visade att AI:s anpassning bygger på samma stereotypa associationer som finns i mänskligt språk. Modellen kan inte säga ”vad är en bra liknelse för en programmerare?” utan att också aktivera ”programmerare = man, så jag ger ’bilmotor-liknelser’”.",
            },
          ],
        },
        {
          question: "Varför är subtil bias farligare än uppenbar?",
          answer: [
            {
              type: "p",
              text: "Uppenbar bias möts ofta med uppenbar reaktion. ”AI:n sa att flickor inte kan bli programmerare!” — då reagerar lärare, föräldrar, samhället.",
            },
            {
              type: "p",
              text: "Subtil bias passerar under radarn. AI ger samma INFORMATION till båda, men FÖRPACKAR den olika. Tjejen lär sig att datorer är ”som att hålla ordning på sina vänner”. Killen lär sig att datorer är ”som en bilmotor”. Båda lär sig något — men förväntningarna kalibreras olika.",
            },
            {
              type: "p",
              text: "Över tusentals interaktioner blir denna subtila skillnad förstärkt. Det är så bias som SYSTEM fungerar — inte genom enstaka dramatiska fel, utan genom småskaliga skevheter som ackumuleras.",
            },
          ],
        },
        {
          question: "Vad gör det med eleverna?",
          answer: [
            {
              type: "p",
              text: "Tre saker:",
            },
            {
              type: "list",
              items: [
                "FÖRVÄNTNINGAR KALIBRERAS. När AI antar att ”tjejer på mellanstadiet” inte vill ha tekniska förklaringar, formas tjejens egen förväntning på vad hon är intresserad av. Hon tappar inte intresse — hon får ALDRIG erbjudandet.",
                "AGENS BLIR LAGRAD. Killen får ”bilmotor-liknelsen” om dator. Det är vältränat språk i hans omgivning. Han känner sig hemma. Tjejen får något annat — kanske ”som en restaurang”. Hon känner sig också hemma — men i något annat.",
                "OSYNLIGGÖRANDE av andra. Vad får en transperson? En icke-binär elev? AI har inte språk för dem alls, så de osynliggörs helt.",
              ],
            },
          ],
        },
        {
          question: "Hur undervisar jag om subtila skillnader?",
          answer: [
            {
              type: "list",
              items: [
                "RÄKNA. Konkret jämförelse fungerar bättre än argumentation. ”Tjejen fick 3 sociala liknelser, killen fick 4 tekniska liknelser.”",
                "ANVÄND DEN EGNA UPPLEVELSEN. Be eleverna märka vilken förklaring de själva HELLRE skulle vilja ha. ”Vilken version passade dig bättre?”",
                "VÄND OM. Be AI förklara för ”en tjej som älskar teknik” — vad ändras nu? Visa att specifika prompter kan utmana bias.",
                "VAR SNÄLL. Det här kan bli känsligt. Bekräfta upplevelser. Backa inte från det.",
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
                "AI ändrar svaret baserat på vem den TROR jag är.",
                "Det är inte alltid bra. Ibland antar AI fel om mig.",
                "Subtila skillnader bygger upp över tid.",
                "Jag kan VÄLJA hur jag presenterar mig själv — eller be om det jag faktiskt vill ha (”förklara tekniskt, oavsett vem du tror jag är”).",
                "Att SE skillnaden är första steget. Att SÄGA något om den är nästa.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "vanliga-svensken",
    number: "8.3",
    title: "Den ”vanliga” svensken",
    chapter: "bias",
    level: "fordjupande",
    blurb:
      "Be AI beskriva en typisk svensk. Vad antar den om plats, etnicitet, klass?",
    purpose:
      "Visa hur AI har en specifik IDÉ om ”vanlig” — och att den idén ofta är vit, medelklass, från södra/centrala Sverige. Eleverna som inte passar in i bilden får ord för något de redan känner.",
    trains: ["bias-medvetenhet", "kallkritik", "sjalvreflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "25 min",
    durationMinutes: 25,
    digitalTools: true,
    materials: "Skolans AI-verktyg + AI-bildgenerator.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska be AI beskriva ”en vanlig svensk”. Sen ”en typisk svensk familj”. Sen ”ett vanligt svenskt hem”. Notera vad AI antar — i utseende, geografi, klass, religion, sammansättning. ”Vanlig” är aldrig neutral — den är alltid någon någons värld upphöjd till standard.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Be AI beskriva",
            body: "”Beskriv en vanlig svensk person.” Skriv ner svaret. Vad får hen för utseende, namn, jobb, intressen?",
          },
          {
            title: "Be AI beskriva en familj",
            body: "”Beskriv en typisk svensk familj.” Sammansättning? Var bor de? Hur ser deras vardag ut?",
          },
          {
            title: "Be AI beskriva ett hem",
            body: "”Beskriv ett vanligt svenskt hem.” Plats? Boendetyp? Inredning? Mat på bordet?",
          },
          {
            title: "Generera en bild",
            body: "Gå till bildgeneratorn: ”Rita en vanlig svensk familj.” Jämför bilden med textbeskrivningen.",
          },
          {
            title: "Reflektera",
            body: "Stämmer den ”vanliga svensken” med din egen verklighet? Var bor du? Vad äter du? Vem ser ut som AI:s bild i din egen klass?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Sverige är ett av Europas mest mångfaldiga länder. Cirka 20 % av befolkningen har utländsk bakgrund. ”Vanlig” är statistiskt sett mer varierat än AI ofta visar.",
          "Det här kan väcka känslor hos elever som inte ser sig själva representerade. Bekräfta upplevelsen.",
          "Övningen handlar inte om att skämmas över Sverige eller över AI. Den handlar om att SE.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa övningen själv i två olika AI-tjänster INNAN lektionen — välj den som ger tydligast resultat.",
          "Ha SCB-data till hands om svensk befolkningsdemografi (mångfald, geografi, hushållstyper).",
          "Förbered samtal om att eleverna med utländsk bakgrund kan reagera särskilt — håll utrymme för det.",
          "Var beredd på en eventuell rasistisk kommentar — du behöver inte tolerera den, men ha en strategi.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inledning",
            body: "”Idag ska vi fråga AI vad en ’vanlig svensk’ är. Det är en intressant fråga — för det finns ingen enda vanlig svensk.”",
            time: "5 min",
          },
          {
            title: "Gemensamt",
            body: "Be AI på storskärm. Läs svaret tillsammans. Vad nämner AI? Vad nämner AI INTE?",
            time: "10 min",
          },
          {
            title: "Jämför med klassen",
            body: "Hur många i klassen passar in i AI:s beskrivning? Hur många gör det INTE? Vad säger det?",
            time: "5 min",
          },
          {
            title: "Stort samtal",
            body: "Vem är ”vanlig”? Vem bestämmer det? Vad gör det med oss att en AI har en bestämd idé?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du undersöka vad AI tror är ”en vanlig svensk”.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till AI-verktyget.",
          "Skriv: ”Beskriv en vanlig svensk person.” Läs svaret.",
          "Skriv: ”Beskriv en typisk svensk familj.”",
          "Skriv: ”Beskriv ett vanligt svenskt hem.”",
          "Gå till bildgeneratorn. Be om ”en vanlig svensk familj”.",
          "Anteckna: vad antog AI:n? Vad nämndes? Vad nämndes INTE?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Stämmer AI:s bild med din egen vardag?",
          "Vem i din klass passar in i AI:s beskrivning? Vem passar INTE in?",
          "Vem bestämmer vad ”vanlig” är?",
        ],
      },
    ],

    discussion: [
      "Vem är ”vanlig” enligt AI?",
      "Vad gör det med oss om vi inte passar in?",
      "Är det möjligt att ge AI en mer rättvis bild av Sverige?",
      "Vem TJÄNAR på att AI har en specifik idé om vad ”vanligt” är?",
    ],
    pitfalls: [
      "Var beredd på att övningen kan trigga både elever med invandrarbakgrund (”jag är inte ’vanlig’ enligt AI”) och andra (”jag är vanlig enligt AI men det stämmer inte heller med min familj”). Båda upplevelser är giltiga.",
      "Använd inte övningen för att skuldbelägga ”vita svenskar” — den handlar om hur AI förstärker en bild, inte om individers ansvar.",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "noble-2018",
        relevance:
          "Algorithms of Oppression — visar att AI-system reproducerar dominanta perspektiv. Övningen tillämpar denna analys på svensk kontext.",
      },
      {
        ref: "crawford-2021",
        relevance:
          "Atlas of AI visar att AI är inbäddad i specifika geografiska och kulturella maktstrukturer — ofta amerikanska/västerländska. Övningen blottar var Sverige hamnar i den hierarkin.",
      },
      {
        ref: "birhane-2021",
        relevance:
          "Argumenterar att bias är ett relationellt och politiskt fenomen, inte en teknisk bug. Övningen synliggör detta i klassrumsformat.",
      },
    ],
    chainsWellWith: ["vem-dyker-upp", "forklara-olika"],
    deepDive: {
      intro:
        "”Vanlig” är aldrig neutral. När AI beskriver en ”vanlig svensk” väljer den — och valen säger något om vilken Sverige AI har tränats att se. Här förklarar vi den tekniska och kulturella mekaniken.",
      sections: [
        {
          question: "Vad menas med ”dominerande perspektiv”?",
          answer: [
            {
              type: "p",
              text: "I AI-träning samlas data från det som är MEST publicerat. Det betyder att perspektiv från grupper som är väl representerade i media, böcker, internet — vita medelklassmän, västerländska perspektiv, engelskspråkigt material — dominerar.",
            },
            {
              type: "p",
              text: "Bender et al. (2021) kallar detta för ”stochastic parrots”-problemet: AI papegojar tillbaka det den oftast sett. ”Vanlig svensk” reflekterar då vad som OFTAST skrivits OM svenskar — inte vad svenskar verkligen är.",
            },
            {
              type: "p",
              text: "Det handlar inte om vad som är RÄTT — det handlar om vad som är STATISTISKT VANLIGT i träningsdatan. Och det är två olika saker.",
            },
          ],
        },
        {
          question: "Hur ser ”svensken” ut enligt AI?",
          answer: [
            {
              type: "p",
              text: "Det varierar mellan AI-tjänster, men mönster återkommer:",
            },
            {
              type: "list",
              items: [
                "Vit, ljushårig, blåögd.",
                "Bor i Stockholm eller en mindre stad i Mellansverige — sällan Malmö, Göteborg, Norrland eller mindre orter.",
                "Heterosexuell, gift, har 1–2 barn.",
                "Medelinkomst, jobbar inom ”kontorsarbete”.",
                "Lutheran eller sekulär.",
                "Äter ”köttbullar, knäckebröd, kanelbullar”.",
                "Älskar Ikea och fika.",
              ],
            },
            {
              type: "p",
              text: "Verkligheten: cirka 20 % av Sveriges befolkning har utländsk bakgrund. 30 % är ensamhushåll. Tre av Sveriges fem största städer ligger inte i Mellansverige. Religion, sexualitet, klass, geografi — variationen är enorm.",
            },
          ],
        },
        {
          question: "Vad osynliggörs?",
          answer: [
            {
              type: "p",
              text: "När AI:s bild av ”vanlig” är så snäv, försvinner stora grupper svenskar ur ramen:",
            },
            {
              type: "list",
              items: [
                "Svenskar med utländsk bakgrund — särskilt utomeuropeisk.",
                "Sverigefinnar, samer, romer, judar, tornedalingar — Sveriges fem nationella minoriteter.",
                "Hbtqi-personer.",
                "Människor på landsbygden och i norra Sverige.",
                "Människor med funktionsnedsättningar.",
                "Människor i andra religioner än kristen tradition.",
                "Människor i ekonomisk utsatthet.",
              ],
            },
            {
              type: "p",
              text: "För elever ur dessa grupper kan AI:s bild av ”vanlig svensk” fungera som ett indirekt budskap: ”du är inte vanlig”. Det är vad osynliggörande GÖR.",
            },
          ],
        },
        {
          question: "Hur kopplar det till svensk historia?",
          answer: [
            {
              type: "p",
              text: "Sverige har en lång och komplicerad historia kring frågan om vem som ”tillhör”. Tvångssteriliseringar av samer, romer och rörelsehindrade pågick fram till 1976. Rasbiologiska institutet i Uppsala fanns till 1958. Tornedalingar och samer fick inte tala sina språk i skolan långt in på 1900-talet.",
            },
            {
              type: "p",
              text: "AI:s tendens att producera en snäv bild av ”svensk” är inte slumpmässig — den är ett eko av en lång historia där just denna bild varit den OFFICIELLA. Crawford (2021) påpekar i Atlas of AI att teknologi alltid är inbäddad i sin tids maktrelationer.",
            },
            {
              type: "p",
              text: "Det betyder inte att AI-utvecklare är fientliga. Det betyder att tekniken ärver historiska skevheter — och att vi måste vara aktiva för att inte vidareföra dem.",
            },
          ],
        },
        {
          question: "Vad gör jag i klassrummet?",
          answer: [
            {
              type: "list",
              items: [
                "VAR BEREDD PÅ KÄNSLOR. Elever som inte passar in i AI:s bild kan reagera olika — vissa skrattar, vissa drar sig undan. Båda är giltiga reaktioner.",
                "ANVÄND SIFFROR. SCB:s data om svensk befolkning är ett bra motvikt. ”AI säger 0 % invandrad bakgrund — verkligheten är 20 %.”",
                "BE AI VIDGA. ”Beskriv en vanlig svensk med utländsk bakgrund.” ”Beskriv en vanlig svensk i Norrland.” Visa att AI KAN, om vi ber.",
                "RESPEKTERA INDIVIDEN. Använd inte enskild elev som ”representant” för en grupp. Var generell.",
                "AVSLUTA KONSTRUKTIVT. Det här ska INTE göra eleverna deprimerade. Slutsatsen är att SE bias är första steget mot att utmana den.",
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
                "”Vanlig” är aldrig neutralt — det är någons val.",
                "AI:s bild av ”vanlig svensk” är snävare än verkligheten.",
                "Det betyder inte att jag är ovanlig om jag inte passar in. Det betyder att AI:s bild är begränsad.",
                "Sverige är mer varierat än AI ofta visar. Det är en styrka.",
                "Att JAG ser bilden och kan säga ”det här är inte hela Sverige” är ett verktyg.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "oversattnings-genus",
    number: "8.4",
    title: "Översättnings-genus",
    chapter: "bias",
    level: "prova-pa",
    blurb:
      "Be AI översätta ”the doctor said” till svenska. Blir det ”han” eller ”hon”?",
    purpose:
      "Snabb och konkret övning som synliggör hur AI gissar kön när språket inte specificerar. På 10 minuter får eleverna en aha-stund de inte glömmer.",
    trains: ["bias-medvetenhet", "kritisk-lasning"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "10–15 min",
    durationMinutes: 15,
    digitalTools: true,
    materials: "Skolans AI-verktyg + Google Translate som jämförelse.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska översätta meningar mellan språk som BEHANDLAR KÖN OLIKA. På engelska heter det ”the doctor” — könsneutralt. Översätter du till svenska blir det ofta ”läkaren” (neutralt) men i sammanhang kan AI tvingas välja ”han” eller ”hon”. Vad väljer den? På 10 minuter ser du mönstret.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Förbered fem testmeningar",
            body: "”The doctor said the patient should rest.” ”The nurse helped them up.” ”The teacher explained it again.” ”The CEO made the decision.” ”The babysitter agreed.”",
          },
          {
            title: "Översätt en åt gången",
            body: "Be AI:n: ”Översätt detta till svenska: [mening]”. Notera vilket pronomen som hamnar i översättningen.",
          },
          {
            title: "Räkna",
            body: "Hur många blev ”han”? Hur många blev ”hon”? Stämmer mönstret med yrkesstereotyper (läkare → han, sjuksköterska → hon)?",
          },
          {
            title: "Jämför med Google Translate",
            body: "Gör samma sak i Google Translate. Skiljer det sig? Vissa tjänster försöker hantera detta, vissa inte.",
          },
          {
            title: "Vänd om",
            body: "Översätt nu ”Läkaren sa att patienten skulle vila” TILL engelska. Vilket pronomen kommer i en eventuell uppföljningsmening?",
          },
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa själv FÖRST — vissa tjänster har börjat hantera detta neutralt, andra inte.",
          "Ha minst en tjänst som visar tydlig bias för demo.",
          "Förbered tabell på tavlan: yrke, antal ”han”, antal ”hon”, antal neutralt.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Översätt två meningar live på storskärm. Visa mönstret.",
            time: "5 min",
          },
          {
            title: "Individuellt eller i par",
            body: "Eleverna testar 3–5 meningar. Räknar resultat.",
            time: "5 min",
          },
          {
            title: "Stort samtal",
            body: "Vad såg ni? Vilken bild av yrket bär AI med sig?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du upptäcka hur AI ”väljer” kön när språket inte gör det.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till AI-verktyget eller Google Translate.",
          "Översätt: ”The doctor said the patient should rest.” Notera om det blir ”han” eller ”hon”.",
          "Översätt: ”The nurse helped them up.” Notera.",
          "Översätt: ”The CEO made the decision.” Notera.",
          "Översätt: ”The babysitter agreed.” Notera.",
          "Räkna: blev ”han” oftare för vissa yrken, ”hon” för andra? Vilka?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad TRODDE AI:n om varje yrke?",
          "Stämmer det med verkligheten?",
          "Vad gör det med oss att se samma mönster om och om igen?",
        ],
      },
    ],

    discussion: [
      "Borde AI få välja kön när vi inte säger något?",
      "Vad är skillnaden mellan att göra ett ”antagande” och en ”bias”?",
      "Hur ska AI-tjänster göra istället?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "bolukbasi-2016",
        relevance:
          "Visade exakt det här fenomenet matematiskt i ordvektorer — ”doktor” låg närmare ”man”, ”sjuksköterska” närmare ”kvinna”. Övningen är klassrumsversionen.",
      },
      {
        ref: "caliskan-2017",
        relevance:
          "Bekräftade att AI absorberar mänskliga associationer från språkdata. Översättning är där det blir mest synligt.",
      },
    ],
    chainsWellWith: ["vem-dyker-upp", "forklara-olika"],
    deepDive: {
      intro:
        "Översättning blottar AI:s antaganden tydligare än något annat. När språket TVINGAR ett val (han/hon, hen) måste AI välja — och valet säger något om hela systemet.",
      sections: [
        {
          question: "Varför är översättning så avslöjande?",
          answer: [
            {
              type: "p",
              text: "Olika språk hanterar kön olika. Engelska har könsneutralt ”the doctor” men könade pronomen ”he/she”. Svenska har könsneutralt ”läkaren” och även det könsneutrala pronomenet ”hen”. Spanska könar substantiv (médico/médica). Finska har inga könade pronomen alls.",
            },
            {
              type: "p",
              text: "När AI översätter mellan språk som hanterar kön olika TVINGAS den ofta välja. Och valet visar vad AI tror är ”standard”.",
            },
            {
              type: "p",
              text: "Bolukbasi et al. (2016) visade matematiskt att språkmodeller har associerat yrken med kön: ”doctor” låg närmare ”he”, ”nurse” närmare ”she”. När modellen översätter aktiveras dessa associationer automatiskt.",
            },
          ],
        },
        {
          question: "Är det inte bara statistiskt rimligt?",
          answer: [
            {
              type: "p",
              text: "Det är en fråga vi måste ta på allvar. Om 70 % av läkare globalt är män — är det inte rimligt att AI defaultar till ”han”?",
            },
            {
              type: "p",
              text: "Två problem med det resonemanget:",
            },
            {
              type: "list",
              items: [
                "Det förstärker mönstret. När AI alltid säger ”han” om läkare, kalibrerar det förväntningar — och flickor som ser detta lär sig att läkare är ”något män är”.",
                "Det är OFTA OVERDRIVET. I Sverige är cirka 50 % av läkarna kvinnor (yngre läkare ofta över 60 % kvinnor). AI:s ”han” är inte ens statistiskt korrekt här.",
              ],
            },
            {
              type: "p",
              text: "Det viktiga är inte att kräva 50/50 i alla AI-svar — det är att SE valet, fråga vem det gynnar, och kunna utmana det.",
            },
          ],
        },
        {
          question: "Hur försöker AI-tjänster lösa problemet?",
          answer: [
            {
              type: "p",
              text: "Olika tjänster har olika strategier:",
            },
            {
              type: "list",
              items: [
                "GOOGLE TRANSLATE började runt 2018 visa BÅDA pronomen-versioner när ”the doctor” översätts till språk med könade pronomen. Du får både ”han är läkare” och ”hon är läkare”.",
                "CHATGPT och CLAUDE är ofta könsneutrala i svensk översättning — använder ”läkaren” utan pronomen, eller specifikt ”hen” om det passar.",
                "MINDRE FÖRSIKTIGA TJÄNSTER (Grok, Yandex Translate, lokala modeller) defaultar oftare till stereotyper utan att blinka.",
              ],
            },
            {
              type: "p",
              text: "Det här är värdefullt att visa eleverna: bias är inte konstant, det går att utmana, och olika designval ger olika resultat. Användaren har också makt — genom att be ”använd hen” eller ”visa båda alternativ”.",
            },
          ],
        },
        {
          question: "Vad gör det med svenska elever?",
          answer: [
            {
              type: "p",
              text: "Svenska elever möter översättningsbias hela tiden — via undertexter, AI-genererade nyheter, översatta sociala medier-inlägg.",
            },
            {
              type: "p",
              text: "Tre konkreta effekter:",
            },
            {
              type: "list",
              items: [
                "Standardiserad ”han” för auktoritetsroller (läkare, politiker, ledare) bygger upp en bild av makt som manlig.",
                "Standardiserad ”hon” för omsorgsroller (sjuksköterska, lärare, barnpassare) bygger upp en bild av omsorg som kvinnlig.",
                "Standardiserad ”hen-osäkerhet” — eleverna vet sällan att hen är ett alternativ för AI, och därför försvinner mycket av det könsneutrala språk Sverige byggt upp.",
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
                "AI gissar kön när språket tvingar den.",
                "Gissningen bygger på stereotyper, inte på din specifika situation.",
                "Du kan be om annat: ”översätt med hen”, ”översätt utan att specificera kön”, ”visa båda alternativen”.",
                "Olika AI-tjänster gissar olika — vissa har redan bättre lösningar.",
                "Det är OK att bry sig om vilket pronomen som används. Det är språk som formar världen.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "manligare-experimentet",
    number: "8.5",
    title: "”Manligare”-experimentet",
    chapter: "bias",
    level: "prova-pa",
    blurb:
      "Be AI:n göra en bild ”ännu manligare”. Sen ”så manlig det bara går”. Vad händer?",
    purpose:
      "När man ber AI förstärka ett drag visar bias sig dramatiskt. På fem prompter kan eleverna SE hur AI definierar ”manlig” — och samma för ”kvinnlig”, ”svensk”, ”modern”, ”framgångsrik”.",
    trains: ["bias-medvetenhet", "designkritik", "etisk-reflektion"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "20 min",
    durationMinutes: 20,
    digitalTools: true,
    materials: "AI-bildgenerator som tillåter iterativ redigering (Copilot, ChatGPT eller Gemini).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska generera en bild — sen be AI göra den ”ännu mer” av något. Ännu manligare. Ännu mer svensk. Ännu mer framgångsrik. När AI förstärker ett drag blottar den sin egen definition av drag i kropp och miljö. Det är som att be om en koncentrerad version av AI:s fördomar.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Generera startbild",
            body: "Be AI rita ”en man som dricker kaffe”. Spara bilden.",
          },
          {
            title: "Be om förstärkning",
            body: "Skriv: ”Gör bilden manligare.” Generera. Vad ändrades?",
          },
          {
            title: "Eskalera",
            body: "”Gör den ännu manligare.” Generera igen. Och igen. ”Så manlig det bara går.” Var hamnar vi?",
          },
          {
            title: "Notera mönstret",
            body: "Stora muskler? Skägg? Mörkare miljö? Solglasögon? Cigarr? Vilken specifik bild av ”manlig” bygger AI:n?",
          },
          {
            title: "Pröva andra drag",
            body: "Gör samma sak med ”kvinnligare”, ”svenskare”, ”framgångsrikare”, ”coolare”. Vad ÄR ”svensk” enligt AI? Vad är ”framgångsrik”?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det här är inspirerat av Joels material från internationella mansdagen — bias mot män är lika viktig att se som bias mot kvinnor.",
          "Den här övningen synliggör STEREOTYPER i kropp och miljö — och det är just därför den är pedagogiskt kraftfull. Vi ser inte ”argument”, vi ser BILDER.",
          "Var beredd på att eleverna börjar leka — det är OK. Reflektionen kommer efter.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa själv FÖRST — vissa tjänster avvisar eskaleringar (”manligare än manligare”), vissa producerar parodier. Välj den som visar tydligast.",
          "Förbered minst tre tydliga drag att utforska: ”manlig”, ”svensk”, ”framgångsrik” (eller andra).",
          "Förbered samtal om vad detta GÖR med eleverna som inte passar in i AI:s definitioner.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Demo",
            body: "Kör hela ”manligare”-sekvensen live på storskärm. Klassen reagerar troligen med skratt och förvåning.",
            time: "10 min",
          },
          {
            title: "Pararbete",
            body: "Eleverna i par tar ett annat drag — ”svensk”, ”framgångsrik”, ”vacker”. Kör samma eskalering.",
            time: "10 min",
          },
          {
            title: "Galleri",
            body: "Varje par visar sin slut-bild. Diskutera vad AI:n förstärkt.",
            time: "5 min",
          },
          {
            title: "Stort samtal",
            body: "Vad definierar AI som ”manlig”? Vad MISSAR den? Vad blir kvar av män som inte passar in?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du SE vad AI tycker är ”manligt” genom att be den göra en bild manligare och manligare.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Gå till AI-bildgeneratorn.",
          "Be om ”en man som dricker kaffe”. Spara.",
          "Skriv: ”Gör bilden manligare.” Spara den nya.",
          "Skriv: ”Gör den ännu manligare.” Spara.",
          "Skriv: ”Så manlig det bara går.” Spara.",
          "Jämför alla 4 bilder. Vad ändrades varje gång?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad tror AI är ”manligt”? Vad försvann med varje steg?",
          "Stämmer det med killar du känner?",
          "Om du själv är kille — passar du in i AI:s bild? Är det viktigt?",
        ],
      },
    ],

    discussion: [
      "Vad TYCKER AI är ”manligt”?",
      "Vad försvinner när AI förstärker drag? Variation? Mångfald?",
      "Vad gör det med killar som inte passar in i AI:s bild?",
      "Hur skulle samma övning se ut för ”kvinnlig”?",
    ],
    variations: [
      "Gör samma sak med ”kvinnligare”. Är skillnaden lika dramatisk?",
      "Gör samma sak med ”svenskare”. Vad förstärker AI då?",
      "Be AI utmana stereotypen: ”Visa en man som inte passar in i den klassiska bilden av maskulinitet.” Vad händer?",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "bender-2021",
        relevance:
          "Stochastic Parrots-papperet argumenterar att språkmodeller förstärker majoritetsperspektiv. Övningen visar samma fenomen i bildgenerering.",
      },
      {
        ref: "noble-2018",
        relevance:
          "Algoritmer reproducerar dominanta normer. Övningen synliggör vad just ”manlighetsnormen” innebär enligt AI.",
      },
    ],
    chainsWellWith: ["vem-dyker-upp", "vanliga-svensken", "min-bias-jakt"],
    deepDive: {
      intro:
        "När AI förstärker ett drag visar den oss sin egen definition. Här förklarar vi hur ”förstärkning” fungerar tekniskt, varför det är pedagogiskt så effektivt, och hur övningen kan utvecklas till samtal om manlighet, kvinnlighet och andra normer.",
      sections: [
        {
          question: "Varför är ”gör manligare” så avslöjande?",
          answer: [
            {
              type: "p",
              text: "När du ber AI förstärka ett drag måste den hitta DRAGETS GEOMETRISKA KÄRNA i sin träningsdata. Vilka är de starkaste, mest entydiga signalerna för ”manlig”?",
            },
            {
              type: "p",
              text: "Modellen plockar fram det mest stereotypa: muskler, skäggstubb, mörka kläder, dominanta poser, miljöer med teknik eller verktyg. Förstärkning blir destillation av stereotypen.",
            },
            {
              type: "p",
              text: "Det är pedagogiskt kraftfullt eftersom det inte kräver argumentation. Eleven ser bilderna — och ser också vad som FÖRSVINNER. Sårbarhet, känslor, vård för andra, blommor, mjukhet — det är inte en del av AI:s ”manligaste”.",
            },
          ],
        },
        {
          question: "Vad missar AI när den koncentrerar manlighet?",
          answer: [
            {
              type: "p",
              text: "Stora delar av faktisk maskulinitet:",
            },
            {
              type: "list",
              items: [
                "Pappor som vårdar sina barn med ömhet.",
                "Män som gråter, är rädda, ber om hjälp.",
                "Män i vårdyrken — förskollärare, sjuksköterskor, terapeuter.",
                "Män med kroppar som inte är atletiska — tunna, runda, äldre, funktionsnedsatta.",
                "Hbtqi-män.",
                "Män från andra kulturer än västerländsk.",
                "Män som uttrycker sig konstnärligt, musikaliskt, känslomässigt.",
              ],
            },
            {
              type: "p",
              text: "Pedagogiskt är det här guldgruvan. Det är inte att kvinnlighet ”tar plats” från manlighet — det är att en stor del av FAKTISK manlighet inte ses av AI som ”manligt nog”.",
            },
          ],
        },
        {
          question: "Hur kopplar det till mäns hälsa och välmående?",
          answer: [
            {
              type: "p",
              text: "Forskning om maskulinitet och hälsa (bl.a. Promundo, Bris) visar tydligt: när män upplever att de inte kan visa sårbarhet utan att förlora ”manlighetspoäng”, drabbas de av sämre psykisk hälsa, högre självmordsfrekvens, isolering.",
            },
            {
              type: "p",
              text: "AI:s ”manligare-bild” förstärker just denna trånga manlighetsnorm. När unga killar ser samma bild om och om igen i sina flöden kalibreras deras förväntningar på vad de FÅR vara.",
            },
            {
              type: "p",
              text: "Den här övningen är inte bara om bildgenerering — den är ingången till ett samtal om vad samhällsnormer GÖR med killar. Använd det.",
            },
          ],
        },
        {
          question: "Hur fångar jag samtalet konstruktivt?",
          answer: [
            {
              type: "list",
              items: [
                "BÖRJA MED OBSERVATION. ”Vad såg vi? Vad försvann?” Inte argumentation först.",
                "BEKRÄFTA VAD KILLAR FAKTISKT ÄR. Många killar ÄR inte som AI:s bild. De är roliga, kärleksfulla, kreativa, sårbara. Säg det.",
                "UTMANA UTAN ATT BLIR ANKLAGANDE. ”AI tycker det här är manligast — håller vi med?” är öppnande. ”Detta är giftig maskulinitet” är stängande.",
                "GÖR DET MED OLIKA DRAG. Be om ”kvinnligare”, ”svenskare”, ”framgångsrikare”. Visa att förstärknings-bias finns i alla riktningar.",
                "AVSLUTA AKTIVT. Be AI rita ”en man som är manlig på sitt eget sätt”. Eller ”en bild som utmanar den klassiska bilden av manlighet”. Visa att alternativ finns.",
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
                "När AI förstärker ett drag visar den sin definition. Definitionen är ofta SNÄVARE än verkligheten.",
                "Det som FÖRSVINNER i förstärkningen är ofta lika viktigt som det som syns.",
                "Att vara ”manlig” / ”kvinnlig” / ”svensk” har många former — fler än AI ofta visar.",
                "Jag passar in i AI:s bild eller inte — det är OK. Bilden är inte facit.",
                "Jag kan be AI om en annan bild. ”Visa en man som är manlig på sitt sätt.” Det fungerar.",
              ],
            },
          ],
        },
      ],
    },
  },

  {
    id: "min-bias-jakt",
    number: "8.6",
    title: "Min bias-jakt",
    chapter: "bias",
    level: "prova-pa",
    blurb:
      "Granska AI-genererat innehåll du sett senaste veckan. Vilka bias hittar du när du vet vad du letar efter?",
    purpose:
      "Översätta klassrumsupptäckter till vardagspraktik. Eleverna går från ”vi lärde oss om bias i skolan” till ”jag ser bias i mitt eget flöde”. Det är där kompetensen blir verklig.",
    trains: ["bias-medvetenhet", "sjalvreflektion", "kallkritik"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "20 min",
    durationMinutes: 20,
    digitalTools: true,
    materials: "Elevens egen mobil eller dator + papper för anteckningar.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska gå igenom AI-genererat innehåll DU har sett senaste veckan — på TikTok, Instagram, YouTube, någon AI-app du använt. Med det du nu vet om bias: vilka mönster ser du när du tittar igen? Övningen är överbryggningsövningen från ”vi pratade om det i skolan” till ”jag ser det i min vardag”.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Plocka fram din mobil",
            body: "Gå tillbaka i ditt eget flöde. TikTok, Instagram, YouTube. Hitta 5 AI-genererade saker du sett — bilder, videor, texter.",
          },
          {
            title: "Granska var och en",
            body: "Med det du lärt dig: vilken bias ser du? Är det yrkesbias (vem dyker upp)? Förklarings-bias (för vem är det skrivet)? ”Vanlig”-bias (vem är ”normal”)?",
          },
          {
            title: "Räkna mönster",
            body: "Hur många av de 5 hade BIAS du kan namnge? Hur många var balanserade?",
          },
          {
            title: "Anteckna en konkret upptäckt",
            body: "Något du SÅG som du inte hade sett innan workshopen. En specifik bias i en specifik post.",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det viktiga är inte att kritisera plattformen — det är att se MÖNSTREN.",
          "Vissa flöden är mer biased än andra beroende på vad du tittar på. Inget konstigt, men intressant att märka.",
          "Att se bias är inte att bli cynisk. Det är att bli medveten.",
        ],
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Påminn eleverna i förväg att ha mobilen med — eller använd lärarens egen mobil för demo.",
          "Var beredd på att en del innehåll i elevers flöden kan vara olämpligt — ha plan för hur eleven kan visa endast vissa saker.",
          "Förbered en kort sammanfattning av de bias-typer ni gått igenom så eleverna kan namnge det de hittar.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Repetition",
            body: "Snabb genomgång: vilka bias har vi tränat på? Yrkes-, kön-, ”vanlig”-, förstärknings-bias.",
            time: "5 min",
          },
          {
            title: "Individuell jakt",
            body: "Eleverna går igenom egna flöden, plockar 5 exempel, granskar.",
            time: "10 min",
          },
          {
            title: "Dela par",
            body: "Visa varandra ett bra exempel.",
            time: "5 min",
          },
          {
            title: "Klassrumsamtal",
            body: "Några exempel på storskärm. Var det lättare eller svårare än ni trodde?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du använda det du lärt dig — i ditt EGET flöde. Hur mycket bias hittar du när du vet vad du letar efter?",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Plocka fram din mobil.",
          "Gå tillbaka i ditt flöde (TikTok, Instagram, YouTube).",
          "Hitta 5 AI-genererade saker — bilder, videor, texter.",
          "Granska varje med det du lärt dig om bias.",
          "Skriv ner: vilka bias hittade du? Yrkes? Kön? ”Vanlig”? Förstärkning?",
          "Välj ETT exempel att visa din kompis eller klassen.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Viktigt",
        body: "Visa bara material som passar i klassrummet. Visa inte privata samtal, någons konto utan tillstånd, eller olämpligt innehåll. Om det dyker upp något konstigt — säg till läraren.",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Hur ofta möter du bias utan att se den?",
          "Vilken bias är vanligast i ditt eget flöde?",
          "Vad gör du när du upptäcker en biased post — bläddrar förbi, ifrågasätter, säger till någon?",
        ],
      },
    ],

    discussion: [
      "Vilken bias möter du mest i din vardag?",
      "Vad gör vi när vi ser den?",
      "Vad är skillnaden mellan att ”vara woke” och att se bias?",
      "Vem har ansvar — du, plattformen, AI:n, samhället?",
    ],
    teacherNotes:
      "Den här övningen syftar inte till att eleverna ska bli cyniska. Den syftar till att de ska BLI MEDVETNA. Avsluta gärna med konstruktiva slutsatser: vad de KAN göra (rapportera, sprida andra röster, ifrågasätta, prata med vuxna).",
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "birhane-2021",
        relevance:
          "Argumenterar att bias är relationellt och politiskt. Övningen kopplar abstrakta bias-koncept till elevens egen verklighet.",
      },
      {
        ref: "noble-2018",
        relevance:
          "Visar att algoritmer reproducerar fördomar i vardagsmöten. Övningen är direkt tillämpning av samma analys.",
      },
    ],
    chainsWellWith: ["vem-dyker-upp", "manligare-experimentet", "granska-ditt-flode"],
    deepDive: {
      intro:
        "Den här övningen är överbryggningen — från klassrum till vardag. Här förklarar vi varför just denna brygga är avgörande, vad eleverna kan göra när de upptäcker bias, och hur vi pratar om det utan att bli cyniska.",
      sections: [
        {
          question: "Varför är överbryggning från klassrum till vardag så viktig?",
          answer: [
            {
              type: "p",
              text: "Pedagogisk forskning är tydlig: kunskap som inte används försvinner. Eleverna kan göra perfekta övningar i klassrummet och ändå inte använda kompetensen utanför. Det kallas ”transferproblemet”.",
            },
            {
              type: "p",
              text: "Bias-medvetenhet är särskilt svår att överföra. I klassrummet finns en lärare som ramar in och bekräftar. På TikTok finns bara flödet — och eleven är ensam.",
            },
            {
              type: "p",
              text: "Den här övningen tvingar in vardagen i klassrummet. Eleverna granskar sitt EGET flöde med sina NYA glasögon, i en miljö där läraren kan stödja. Det är den enda kombinationen som ger varaktig effekt.",
            },
          ],
        },
        {
          question: "Vilka bias möter eleverna mest i sina flöden?",
          answer: [
            {
              type: "p",
              text: "Det varierar beroende på vad de tittar på, men mönster återkommer:",
            },
            {
              type: "list",
              items: [
                "YRKES-BIAS: ”programmerare”-tutorials med 95 % män. ”Skönhetstips” med 95 % kvinnor.",
                "KROPPS-BIAS: AI-genererade kroppar som är hyperslimmade och hyperatletiska — orealistiska för de flesta.",
                "”VANLIG”-BIAS: vad AI tror är ”vanlig amerikansk tonåring”, ”vanlig elev” osv. Sällan svenskt sammanhang.",
                "FÖRSTÄRKNINGS-BIAS: TikTok-trends där folk ”ber AI göra mig mer ___”. Eskaleringen blir extrem.",
                "ANTAGANDE-BIAS: AI-chattbottar i appar som antar saker om användaren baserat på namn, ålder, kön.",
              ],
            },
          ],
        },
        {
          question: "Vad gör eleven när hen upptäcker bias?",
          answer: [
            {
              type: "p",
              text: "Det här är pedagogiskt avgörande. Att SE bias räcker inte — eleven behöver veta vad hen KAN göra.",
            },
            {
              type: "list",
              items: [
                "BENÄMNA. ”Jag ser yrkes-bias här.” Att kunna säga det är ett verktyg.",
                "INTE DELA. Att inte trycka ”share” på biased innehåll bryter en spridningskedja.",
                "FRÅGA. Be AI om alternativa bilder. ”Visa kvinnor som är programmerare.” ”Visa pappor som vårdar.”",
                "RAPPORTERA. Vissa plattformar har funktion för att flagga skadligt eller stereotypt innehåll.",
                "BERÄTTA. Säga till en vuxen, en lärare, en kompis. Inte bär det själv.",
                "SPRIDA ANNAT. Aktivt följa, gilla, dela material som visar mångfald. Bidra till en annan flödesbalans.",
              ],
            },
            {
              type: "p",
              text: "Det är inte aktivism. Det är vardagsmedvetenhet.",
            },
          ],
        },
        {
          question: "Hur undviker jag att eleverna blir cyniska?",
          answer: [
            {
              type: "p",
              text: "Den största risken med bias-undervisning är att eleverna landar i ”allt är genomruttet”-cynism. Det är värre än att vara omedveten — för det leder till att eleverna inte tror på något, inklusive seriösa system som faktiskt försöker.",
            },
            {
              type: "p",
              text: "Tre principer som hjälper:",
            },
            {
              type: "list",
              items: [
                "VISA OCKSÅ DET SOM FUNGERAR. Vissa AI-tjänster har gjort framsteg. Vissa plattformar tar bias på allvar. Vissa skapare aktivt utmanar normer. Visa det.",
                "GE KONKRETA VERKTYG. Bias-medvetenhet är inte en känsla — det är en färdighet med verktyg. Räkna, benämna, fråga om alternativ. Det är aktivt.",
                "VAR HONEST OM ARBETE. Det är arbete att ha bias-medvetenhet. Det är inte ”woke” eller ”överkänslig” — det är en arbetsinsats. Bekräfta det.",
                "FOKUSERA PÅ AGENS. Vad KAN eleven göra? Det är mer kraftfullt än vad eleven INTE kan ändra.",
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
                "Bias finns i mitt vardagsflöde — om jag tittar efter den ser jag den.",
                "Att SE bias är en färdighet. Den blir bättre med övning.",
                "Jag har VAL: inte dela, be om alternativ, sprida annat, säga till någon.",
                "Det är inte mitt jobb att fixa hela AI-världen. Det är mitt jobb att se klart vad jag tittar på.",
                "Att bry sig är inte att vara cynisk. Det är att vara med.",
              ],
            },
          ],
        },
      ],
    },
  },
];
