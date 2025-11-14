export interface Activity {
  id: string;
  title: string;
  level: "Svenska 1" | "Svenska 2";
  type: string;
  guidingQuestion?: string;
  strands: string[];
  aiLiteracyIds: number[];
  centralContent: string[];
  summary: string;
  objectives: string[];
  instructions: string[];
  aiSupport?: string;
  sources?: string[];
  tags?: string[];
}

export const subjectAreaFilters = [
  "Muntligt & Retorik",
  "Skriftligt - Utredande/Argumenterande (inkl. PM)",
  "Litteratur & Kultur",
  "Språk & Språkriktighet/Variation",
  "Källkritik, Desinformation & Metod",
  "Kreativt Skrivande & Stil",
  "Artikelbaserade uppgifter",
] as const;

type ActivityInput = Omit<Activity, "level"> & { level?: Activity["level"] };

const svenska2ThemeData: ActivityInput[] = [
  {
    id: "sv2-tema-1",
    title: "AI i skolan - hot eller hjälp?",
    type: "Utredande PM",
    guidingQuestion: "Hur påverkar generativ AI lärarrollen och elevernas lärande?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Källkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [2, 4, 6],
    centralContent: [
      "Skriftlig framställning",
      "Informationssökning och värdering",
      "Digitala verktyg",
    ],
    summary:
      "Utred hur generativ AI påverkar lärarrollen och elevernas lärande med stöd i Skolverket och SR.",
    objectives: [
      "Synliggöra konsekvenser för lärare, elever och samhälle",
      "Visa källsäkring när AI används i skrivprocessen.",
      "Träna disposition och sakligt pam.",
    ],
    instructions: [
      "Läs de två artiklarna och samla huvudargument.",
      "Planera pam med tydlig fragestallning och slutsats.",
      "Avsluta med riktlinjer för en hallbar AI-praktik.",
    ],
    aiSupport:
      "Använd AI för att pröva alternativa dispositioner men skriv och faktagranska texten själv.",
    sources: [
      "Skolverket (2024-12-12) Begränsad användning av AI-tjänster",
      "Sveriges Radio (2025) Läraren Peter använder AI i skolan",
    ],
  },
  {
    id: "sv2-tema-2",
    title: "Rättvisa, makt och algoritmer",
    type: "Debattartikel",
    guidingQuestion: "Hur bör AI användas för att stärka rättvisa snarare än undergräva den?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Källkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Argumentation",
      "Retoriska verktyg",
      "Etik i samhället",
    ],
    summary:
      "Argumentera för eller emot att AI gör samhället effektivt men mindre rättvist.",
    objectives: [
      "Träna tes, motargument och bemotanden.",
      "Diskutera bias och transparens i teknik.",
      "Visa hur språket formar demokratiska frågar.",
    ],
    instructions: [
      "Utgå från DN och Sveriges Ingenjörer.",
      "Skriv en debattartikel med tydlig mottagaranpassning.",
      "Avsluta med en handlingsinriktad uppmaning.",
    ],
    aiSupport:
      "Låt AI agera djävulens advokat för att testa argumentationen",
  },
  {
    id: "sv2-tema-3",
    title: "AI, desinformation och demokrati",
    type: "Argumenterande tal",
    guidingQuestion: "På vilket sätt förändrar AI vår tillgång till sanning och demokratisk delaktighet?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Muntlig framställning",
      "Retorik",
      "Informationsvärdering",
    ],
    summary:
      "Skapa ett tal om hur AI påverkar vart tillgång till sanning och demokrati.",
    objectives: [
      "Knyta retorik till komplex samhällsfråga.",
      "Synliggöra filterbubblor och informationspaverkan.",
      "Skilja på AI-stöd och eget manusarbete.",
    ],
    instructions: [
      "Analysera källorna från Stockholms universitet och Omni",
      "Planera talets struktur med tydlig rod trad.",
      "Skriv talet själv men pröva inledningar i AI.",
    ],
    aiSupport:
      "Be AI föreslå tre olika inledningar att välja mellan.",
  },
  {
    id: "sv2-tema-4",
    title: "Kreativitet, konst och ägande",
    type: "Essä eller krönika",
    guidingQuestion: "Vad återstår för människan när AI kan skapa konst, musik och litteratur?",
    strands: ["Kreativt Skrivande & Stil", "Litteratur & Kultur"],
    aiLiteracyIds: [0, 3, 5],
    centralContent: [
      "Kreativt skrivande",
      "Språkets estetiska funktion",
      "Etik och upphovsrätt",
    ],
    summary:
      "Utforska vad som återstår för människan när AI kan skapa konst, musik och litteratur.",
    objectives: [
      "Utveckla personlig röst och stil.",
      "Diskutera etik och ägande i skapandeprocessen.",
      "Knyta klassiska verk till samtida teknikdebatt.",
    ],
    instructions: [
      "Välj essä eller krönika och formulera en tydlig huvudtanke",
      "Integrera exempel från kulturdebatt och litteratur.",
      "Ta ställning i slutet och motivera din syn.",
    ],
  },
  {
    id: "sv2-tema-5",
    title: "AI och framtidens arbetsliv",
    type: "Utredande PM",
    guidingQuestion: "Hur förändrar AI framtidens yrken och vilka förmågor blir viktigast?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Källkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [1, 2, 6],
    centralContent: [
      "Skriftlig framställning",
      "Samhällsanalys",
      "Språklig formalia",
    ],
    summary:
      "Analysera hur AI förändrar yrken och vilka kompetenser som blir viktigast.",
    objectives: [
      "Träna källkritisk syntes.",
      "Koppla språket till framtida kommunikationsbehov.",
      "Resonera om etik och ansvar i nya roller.",
    ],
    instructions: [
      "Formulera en tydlig fragestallning.",
      "Samla belagg från reportage och statistik.",
      "Avsluta med rekommendationer till gymnasieelever.",
    ],
  },
];

const svenska2Themes: Activity[] = svenska2ThemeData.map((item) => ({
  level: "Svenska 2",
  ...item,
}));
const svenska2CardData: ActivityInput[] = [
  {
    id: "sv2-card-1",
    title: "Dialog med AI om moral och makt",
    type: "Reflekterande text",
    guidingQuestion: "Vad avslöjar samtalet med en romanfigur om vår egen syn på övervakning och sanning?",
    strands: [
      "Litteratur & Kultur",
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
    ],
    aiLiteracyIds: [3, 5, 6],
    centralContent: [
      "Litteraturtolkning",
      "Etik och samhallsfrgor",
      "Argumentation",
    ],
    summary:
      "Samtala med AI i rollen som en romanfigur och skriv en reflektion om övervakning och sanning.",
    objectives: [
      "Visa litterär förståelse genom dialog.",
      "Resonera om kontroll och ansvar.",
      "Redovisa hur AI anvandes i processen.",
    ],
    instructions: [
      "Skriv en exakt prompt där AI agerar som vald karaktär.",
      "Genomför samtalet och spara centrala citat.",
      "Sammanfatta dina insikter samt en metareflektion.",
    ],
  },
  {
    id: "sv2-card-2",
    title: "Stiltransformation - Romeo och Julia 2150",
    type: "Litterär stilanalys",
    guidingQuestion: "Hur förändras Romeo och Julias budskap när berättelsen placeras i en futuristisk värld?",
    strands: ["Litteratur & Kultur", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [0, 5],
    centralContent: [
      "Skönlitterära verkningsmedel",
      "Litteraturhistoriska perspektiv",
      "Språklig variation",
    ],
    summary:
      "Låt AI skriva om Julias monolog i dystopisk stil och analysera skillnader i språk och mänsklig bild",
    objectives: [
      "Jämför epoker och stilgrepp.",
      "Koppla språkdrag till vardebild.",
      "Diskutera vad som förloras eller vinns.",
    ],
    instructions: [
      "Välj ett stycke och skapa omskrivningen via AI.",
      "Markera skillnader i ton och ordval.",
      "Skriv en kort analys kopplad till epokkunskap.",
    ],
  },
  {
    id: "sv2-card-3",
    title: "AI som litteraturkritiker",
    type: "Kort PM",
    guidingQuestion: "Vad kan AI förstå respektive missa när den analyserar en novell?",
    strands: ["Litteratur & Kultur", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [4, 5],
    centralContent: [
      "Litteraturanalys",
      "Källkritik",
      "Muntlig och skriftlig framställning",
    ],
    summary:
      "Jämför din egen tolkning av en novell med en AI-analys och skriv ett PM om skillnaderna.",
    objectives: [
      "Synliggöra skillnaden mellan tolkning och generering.",
      "Träna argumentation med textstod.",
      "Reflektera över AI:s styrkor och begransningar.",
    ],
    instructions: [
      "Gör en egen analys av vald text.",
      "Be AI analysera samma text med tydlig prompt.",
      "Strukturera ett PM eller muntlig redovisning.",
    ],
  },
  {
    id: "sv2-card-4",
    title: "Mitt liv som algoritm",
    type: "Kreativ berättelse",
    guidingQuestion: "Hur skulle världen upplevas om din röst plötsligt blev en algoritm?",
    strands: ["Kreativt Skrivande & Stil", "Språk & Språkriktighet/Variation"],
    aiLiteracyIds: [5, 6],
    centralContent: [
      "Kreativt skrivande",
      "Identitet och perspektiv",
      "Språklig variation",
    ],
    summary:
      "Skriv en jag-berättelse där du vaknar som en AI-modell och skildrar en ny vardag.",
    objectives: [
      "Eksperimentera med röst och ton.",
      "Utforska agens i tekniska system.",
      "Diskutera vad som gör berättelsen mänsklig.",
    ],
    instructions: [
      "Planera konflikt och utveckling.",
      "Be AI föreslå tre bilder av hur en AI beskriver sinnen.",
      "Skriv texten i jag-form och lägg till kort efterord.",
    ],
  },
  {
    id: "sv2-card-5",
    title: "Litteratur mot samtidens etik",
    type: "Syntesuppgift",
    guidingQuestion: "Vilka nya insikter uppstår när ett klassiskt verk möter dagens teknikdebatt?",
    strands: ["Litteratur & Kultur", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Textkopplingar",
      "Etiska perspektiv",
      "Argumenterande skrivande",
    ],
    summary:
      "Koppla ett klassiskt verk, till exempel Frankenstein, till en aktuell teknikdebatt.",
    objectives: [
      "Träna intertextuell syntes.",
      "Diskutera ansvar och framtidstro.",
      "Använda AI-sammanfattningar kritiskt.",
    ],
    instructions: [
      "Välj skönlitterärt verk och samtida artikel",
      "Sammanfatta budskap och jämför.",
      "Presentera slutsatser muntligt eller skriftligt.",
    ],
    aiSupport:
      "AI får endast sammanfatta artikeln, du kontrollerar fakta och tolkar själv.",
  },
];

const svenska2Cards: Activity[] = svenska2CardData.map((item) => ({
  level: "Svenska 2",
  ...item,
}));
const talbankData: ActivityInput[] = [
  {
    id: "sv2-tal-01",
    title: "Hur tänker en maskin?",
    type: "Informerande tal",
    guidingQuestion: "Hur förklarar du skillnaden mellan maskinellt och mänskligt tänkande?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [1],
    centralContent: [
      "Muntlig framställning",
      "Informationsvärdering",
    ],
    summary:
      "Förklara hur språkmodeller fungerar och jämför med mänskligt tänkande.",
    objectives: [
      "Göra komplex teknik begriplig.",
      "Visa skillnad mellan generera och veta.",
      "Använda sakliga exempel och forklaringar.",
    ],
    instructions: [
      "Beskriv hur modeller tränar på data.",
      "Jämför maskinens och människans styrkor.",
      "Avsluta med en vardefull slutsats för publiken.",
    ],
  },
  {
    id: "sv2-tal-02",
    title: "AI i klassrummet - fusk eller framtid?",
    type: "Argumenterande tal",
    guidingQuestion: "Hur bör AI användas i undervisningen utan att förlora etik och ansvar?",
    strands: [
      "Muntligt & Retorik",
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
    ],
    aiLiteracyIds: [3, 4],
    centralContent: [
      "Argumentation",
      "Retoriska verktyg",
    ],
    summary:
      "Ta ställning till hur AI bör användas i undervisningen och vilka värden som ska styra.",
    objectives: [
      "Träna tes och motargument.",
      "Synliggöra etik och källsäkring.",
      "Avsluta med en konkret uppmaning.",
    ],
    instructions: [
      "Beskriv ett scenario från klassrummet.",
      "Ge minst två argument och ett motargument.",
      "Föreslå regler eller riktlinjer.",
    ],
  },
  {
    id: "sv2-tal-03",
    title: "Inför AI-körkort i skolan",
    type: "Argumenterande tal",
    guidingQuestion: "Varför behöver elever ett AI-körkort och hur kan det se ut?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [1, 6],
    centralContent: [
      "Argumentation",
      "Samhällsanalys",
    ],
    summary:
      "Övertyga publiken om att elever behöver formell AI- och etikkompetens.",
    objectives: [
      "Koppla digital kompetens till demokrati.",
      "Ge exempel på risker utan utbildning.",
      "Presentera en enkel kursplan.",
    ],
    instructions: [
      "Föreslå hur ett körkort kan se ut.",
      "Använd statistik eller fallstudier.",
      "Avsluta med en uppmaning till beslutsfattare.",
    ],
  },
  {
    id: "sv2-tal-04",
    title: "Människa eller maskin - vem ska vi lita på?",
    type: "Reflekterande tal",
    guidingQuestion: "Vem litar vi på när både människor och maskiner talar?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 5],
    centralContent: [
      "Muntlig framställning",
      "Epistemiska frågar",
    ],
    summary:
      "Utforska förtroende i en tid av deepfakes och syntetiska röster.",
    objectives: [
      "Vack etiska frågar om ansvar.",
      "Ge publiken metoder för att pröva sanning",
      "Utveckla ett personligt perspektiv.",
    ],
    instructions: [
      "Inled med ett exempel på bruten tillit.",
      "Visa hur man kan källsäkra röst och bild.",
      "Stall en avslutande fråga till publiken.",
    ],
  },
  {
    id: "sv2-tal-05",
    title: "AI och kreativitet - kan maskiner skapa konst?",
    type: "Reflekterande tal",
    guidingQuestion: "Vad säger AI-genererad konst om vår egen kreativitet?",
    strands: ["Muntligt & Retorik", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [0, 1, 5],
    centralContent: [
      "Språkets estetiska funktion",
      "Muntlig framställning",
    ],
    summary:
      "Diskutera gränsen mellan mänskligt och maskinellt skapande med exempel från kulturdebatt.",
    objectives: [
      "Synliggöra olika syn på konst.",
      "Analysera språket i AI-genererade verk.",
      "Ta en personlig position.",
    ],
    instructions: [
      "Jämför minst två konstformer.",
      "Beskriv vad som saknas eller tillfors.",
      "Avsluta med en vision om framtiden.",
    ],
  },
  {
    id: "sv2-tal-06",
    title: "Från Frankenstein till ChatGPT",
    type: "Informerande tal",
    guidingQuestion: "Vad lär oss litteraturens teknikberättelser om dagens AI-drömmar?",
    strands: ["Litteratur & Kultur", "Muntligt & Retorik"],
    aiLiteracyIds: [0, 6],
    centralContent: [
      "Litteraturhistoriska perspektiv",
      "Muntlig framställning",
    ],
    summary:
      "Bind ihop litteraturens AI-gestalter med dagens teknikdrömmar och rädsla",
    objectives: [
      "Knyta verk till sin tid.",
      "Visa hur motiv aterkommer.",
      "Resonera om vad texterna lärde oss.",
    ],
    instructions: [
      "Välj minst två verk från olika epoker.",
      "Beskriv deras bild av teknik och ansvar.",
      "Jämför med dagens diskussion.",
    ],
  },
  {
    id: "sv2-tal-07",
    title: "AI och klimatet - räddare eller resursförbrukare?",
    type: "Utredande tal",
    guidingQuestion: "Är AI en klimatlösning eller ännu en belastning på planeten?",
    strands: [
      "Muntligt & Retorik",
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
    ],
    aiLiteracyIds: [4, 6],
    centralContent: [
      "Utredande framställning",
      "Hallbarhetsfragor",
    ],
    summary:
      "Vag klimatnytta mot energiförbrukning och föreslå ansvarstagande.",
    objectives: [
      "Hantera data i ett tal.",
      "Visa flera perspektiv.",
      "Avsluta med förslag.",
    ],
    instructions: [
      "Samla fakta från forskningsartiklar.",
      "Jämför positiva och negativa effekter.",
      "Föreslå policy eller undervisningsgrepp.",
    ],
  },
  {
    id: "sv2-tal-08",
    title: "När maskiner pratar svenska",
    type: "Informerande tal",
    guidingQuestion: "Hur påverkar AI det svenska språket och dess variation?",
    strands: ["Språk & Språkriktighet/Variation", "Muntligt & Retorik"],
    aiLiteracyIds: [1, 5],
    centralContent: [
      "Språklig variation",
      "Muntlig framställning",
    ],
    summary:
      "Resonera om hur AI påverkar svenska, minoritetsspråk och flerspråkighet.",
    objectives: [
      "Synliggöra språkförändring.",
      "Diskutera normer och representation.",
      "Ge exempel från vardagen.",
    ],
    instructions: [
      "Visa nya ord eller uttryck som AI sprider.",
      "Knyt till forskning eller artiklar.",
      "Avsluta med en fråga till publiken.",
    ],
  },
  {
    id: "sv2-tal-09",
    title: "Algoritmerna styr våra tankar",
    type: "Argumenterande tal",
    guidingQuestion: "Hur styr algoritmer våra tankar och vilka motstrategier behöver vi?",
    strands: ["Källkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [2, 6],
    centralContent: [
      "Källsäkring",
      "Digitala medier",
    ],
    summary:
      "Synliggöra filterbubblor, motivationsalgoritmer och demokratiska risker.",
    objectives: [
      "Beskriva hur floden kurateras.",
      "Ge exempel på manipulationstekniker.",
      "Uppmana publiken till kritiskt agerande.",
    ],
    instructions: [
      "Analysera ett eget eller fiktivt floede.",
      "Förklara begrepp som filterbubbla och nudging.",
      "Ge tre strategier för att bryta monstret",
    ],
  },
  {
    id: "sv2-tal-10",
    title: "Deepfakes och forstroende",
    type: "Informerande tal",
    guidingQuestion: "Hur skyddar vi förtroendet i en tid av deepfakes?",
    strands: ["Källkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 4],
    centralContent: [
      "Retoriska verktyg",
      "Informationsvärdering",
    ],
    summary:
      "Analysera hur ljud- och videomanipulationer förändrar samhallsforstroende.",
    objectives: [
      "Beskriva hur deepfakes skapas.",
      "Diskutera ansvar för publicering.",
      "Ge publiken kontrollfragor.",
    ],
    instructions: [
      "Visa eller beskriv ett scenario.",
      "Förklara vilka sinnen som luras.",
      "Avsluta med riktlinjer för vardaglig källsäkring.",
    ],
  },
  {
    id: "sv2-tal-11",
    title: "AI i journalistiken - slutet för sanningen?",
    type: "Argumenterande tal",
    guidingQuestion: "Kan journalistiken behålla sin trovärdighet när AI producerar nyheter?",
    strands: ["Källkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 4],
    centralContent: [
      "Analys av sakprosa",
      "Källkritik",
    ],
    summary:
      "Granska hur redaktioner använder AI och vilka risker som uppstar.",
    objectives: [
      "Jämföra mänskliga och AI-skapade artiklar.",
      "Diskutera ansvar och transparens.",
      "Föreslå riktlinjer för redaktioner.",
    ],
    instructions: [
      "Hitta exempel på AI-artiklar.",
      "Markera vad som saknas i stil eller källor",
      "Avsluta med ett konkret krav på medier.",
    ],
  },
  {
    id: "sv2-tal-12",
    title: "AI och språket som makt",
    type: "Reflekterande tal",
    guidingQuestion: "Hur formar AI språket som maktmedel och identitetsverktyg?",
    strands: ["Språk & Språkriktighet/Variation", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 5],
    centralContent: [
      "Språkförhållanden",
      "Språkanvändning och identitet",
    ],
    summary:
      "Diskutera hur AI kan reproducera eller utmana maktstrukturer i språket.",
    objectives: [
      "Synliggöra koppling mellan språk och identitet.",
      "Analysera exempel på bias.",
      "Bygga ett normkritiskt perspektiv.",
    ],
    instructions: [
      "Visa hur olika sociolekter bedoms.",
      "Diskutera konsekvenser för elevers röst",
      "Avsluta med ett konkret förslag på andring.",
    ],
  },
  {
    id: "sv2-tal-13",
    title: "AI och människans unika röst",
    type: "Reflekterande tal",
    guidingQuestion: "Vilken plats här den mänskliga rösten när AI låter som vi?",
    strands: ["Muntligt & Retorik", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [5],
    centralContent: [
      "Actio och elocutio",
      "Muntlig framställning",
    ],
    summary:
      "Reflektera över autenticitet och ethos i en tid av syntetiska röster.",
    objectives: [
      "Beskriv vad som gör en röst trovandig",
      "Knyta ethos till personliga erfarenheter.",
      "Motivera varför mänsklig närvaro behovs.",
    ],
    instructions: [
      "Ge exempel på när du kande dig trodd eller inte.",
      "Jämför med AI-genererade rostprov.",
      "Avsluta med ett personligt löfte",
    ],
  },
  {
    id: "sv2-tal-14",
    title: "Vem bär ansvaret när AI gör fel?",
    type: "Argumenterande tal",
    guidingQuestion: "Vem bär ansvaret när AI orsakar skada?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Argumentation",
      "Etiska dilemman",
    ],
    summary:
      "Red ut ansvar mellan programmerare, företag och användare när AI orsakar skada.",
    objectives: [
      "Kopa fallstudier till etiska modeller.",
      "Visa hur ansvar kan fordelas.",
      "Föreslå reglering eller utbildning.",
    ],
    instructions: [
      "Beskriv ett konkret scenario.",
      "Analysera ansvarskedjan steg för steg.",
      "Ge ett tydligt förslag på losning.",
    ],
  },
  {
    id: "sv2-tal-15",
    title: "AI och demokratin - en röst utan medborgarskap",
    type: "Avslutande tal",
    guidingQuestion: "Vilken roll ska AI få i demokratin när den saknar medborgarskap?",
    strands: ["Muntligt & Retorik", "Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Argumentation",
      "Samhällsanalys",
    ],
    summary:
      "Diskutera vad medborgarskap betyder när AI deltar i offentligheten.",
    objectives: [
      "Knyta ihop kursens centrala frågor.",
      "Visa hur språk och demokrati hanger ihop.",
      "Avsluta med en vision för gemensamt ansvar.",
    ],
    instructions: [
      "Knyt till tidigare case eller texter i kursen.",
      "Lyft frågan om legitimitet när AI talar.",
      "Avsluta med en tydlig uppmaning.",
    ],
  },
];

const talbankActivities: Activity[] = talbankData.map((item) => ({
  level: "Svenska 2",
  ...item,
}));
const svenska1Data: ActivityInput[] = [
  {
    id: "sv1-01",
    title: "Jag - AI - Jag",
    type: "Personlig reflektion",
    guidingQuestion: "Hur påverkar AI min vardag, mitt skrivande och min syn på kunskap?",
    strands: ["Kreativt Skrivande & Stil", "Språk & Språkriktighet/Variation"],
    aiLiteracyIds: [0, 1, 5],
    centralContent: ["Personlig reflektion", "Språkets funktion för tänkande"],
    summary:
      "Skriv 1-2 sidor om hur AI påverkar ditt skrivande, vardag och ansvar.",
    objectives: [
      "Synliggöra utgangslaget för kursen.",
      "Introducera epistemisk medvetenhet.",
      "Träna personlig essä med tydlig struktur",
    ],
    instructions: [
      "Beskriv ett lyckat och ett problematiskt AI-tillfälle",
      "Analysera vem som äger ideerna när AI används.",
      "Avsluta med hur du vill utvecklas.",
    ],
  },
  {
    id: "sv1-02",
    title: "AI-retorikern",
    type: "Muntligt tal",
    guidingQuestion: "Hur kan jag använda AI som retorikcoach utan att tappa min egen röst?",
    strands: ["Muntligt & Retorik"],
    aiLiteracyIds: [2, 3, 5],
    centralContent: ["Muntlig framställning", "Retorik"],
    summary:
      "Använd AI som retorikcoach men skapa ett eget tal om en AI-fråga.",
    objectives: [
      "Träna ethos, logos och pathos.",
      "Reflektera över skillnaden mellan stöd och styrning.",
      "Dokumentera vilka AI-råd du anvande eller avstod från.",
    ],
    instructions: [
      "Välj ett ämne kopplat till AI och vard vardag.",
      "Be AI föreslå tre talinledningar.",
      "Spela in eller framfor talet och skriv en kort reflektion.",
    ],
  },
  {
    id: "sv1-03",
    title: "AI-detektiven",
    type: "Källkritisk analys",
    guidingQuestion: "Hur avslöjar jag fel och hallucinationer i AI-genererade texter?",
    strands: ["Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [1, 3, 4],
    centralContent: ["Källkritik", "Sakprosaanalys"],
    summary:
      "Avsloja hallucinationer i en AI-genererad text och skriv en rapport.",
    objectives: [
      "Träna verifiering av uppgifter.",
      "Skilja på plausibilitet och sanning.",
      "Resonera om ansvar när du delar information.",
    ],
    instructions: [
      "Markera misstänkta uppgifter.",
      "Kontrollera dem via bibliotek, NE eller statistikdatabaser.",
      "Skriv rapporten \"Så avslöjade vi AI:ns fel\"",
    ],
  },
  {
    id: "sv1-04",
    title: "Filterbubblan och jag",
    type: "Multimodal analys",
    guidingQuestion: "Vad säger mitt informationsflöde om mig och hur kan jag påverka det?",
    strands: ["Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Informationssökning och värdering",
      "Språk och identitet",
    ],
    summary:
      "Karta lägg ditt eget informationsflöde och analysera hur algoritmer formar dig.",
    objectives: [
      "Synliggöra hur innehåll kurateras.",
      "Knyta begrepp som automation bias till vardagen.",
      "Träna visuella redovisningar.",
    ],
    instructions: [
      "Logga 10-15 inlägg från dina plattformar.",
      "Skapa en visuell karta över teman och luckor.",
      "Skriv en kort analys: \"Vem formar vem?\"",
    ],
  },
  {
    id: "sv1-05",
    title: "Skriv med maskinen",
    type: "Processkrivning",
    guidingQuestion: "Hur kan AI stärka min skrivprocess utan att ta över?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Kreativt Skrivande & Stil",
    ],
    aiLiteracyIds: [2, 5],
    centralContent: ["Skriftlig framställning", "Processtankande"],
    summary:
      "Använd AI i tydliga delsteg och dokumentera hela skrivprocessen.",
    objectives: [
      "Utveckla medvetna skrivstrategier.",
      "Visa kontroll över verktyget.",
      "Reflektera över hur texten av-AI-fieras.",
    ],
    instructions: [
      "Logga egna ideer, prompts och bearbetningar.",
      "Lämna in text och processlogg",
      "Beskriv vad AI tillförde eller inte tillförde.",
    ],
  },
  {
    id: "sv1-06",
    title: "Litteraturens maskiner",
    type: "Analysseminarium",
    guidingQuestion: "Vad säger klassiska AI-berättelser om vårt ansvar idag?",
    strands: ["Litteratur & Kultur"],
    aiLiteracyIds: [0, 3, 5],
    centralContent: ["Litteraturanalys", "Epoker"],
    summary:
      "Jämför verk som Frankenstein, Kallocain eller Klara och solen och deras syn på AI.",
    objectives: [
      "Knyta verk till sin historiska kontext.",
      "Diskutera ansvar, makt och empati.",
      "Overfora insikter till dagens debatt.",
    ],
    instructions: [
      "Välj ett verk och analysera relationen människan-maskin.",
      "Presentera i seminarium eller essä",
      "Knyt till en samtida fråga.",
    ],
  },
  {
    id: "sv1-07",
    title: "AI och språkmakt",
    type: "Sprakexperiment",
    guidingQuestion: "Vilka språkvarianter premieras när AI ger respons – och varför?",
    strands: ["Språk & Språkriktighet/Variation"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: ["Språklig variation", "Språk och makt"],
    summary:
      "Skriv texter i olika stilar, lät AI ge respons och analysera vilka normer som synliggors",
    objectives: [
      "Synliggöra sociolekter och normkritik.",
      "Diskutera representation i språkmodeller.",
      "Resonera om vems röst som upphöjs.",
    ],
    instructions: [
      "Skriv tre texter (standard, dialekt, slang).",
      "Be AI kommentera varje variant.",
      "Analysera skillnader i responsen.",
    ],
  },
  {
    id: "sv1-08",
    title: "Den mänskliga rösten",
    type: "Högläsningsövning",
    guidingQuestion: "Hur låter en genuin röst jämfört med AI:s ton?",
    strands: ["Muntligt & Retorik", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [2, 5],
    centralContent: ["Muntlig framställning", "Stilanalys"],
    summary:
      "Jämför en egen text med en AI-text och diskutera vad som gör en röst levande.",
    objectives: [
      "Identifiera drag i LLM-svenska.",
      "Utveckla stil- och rostmedvetenhet.",
      "Träna aktiv lyssning i klassrummet.",
    ],
    instructions: [
      "Skriv en kort personlig text.",
      "Låt AI skriva om samma tema",
      "Läs upp anonymt och analysera responsen.",
    ],
  },
  {
    id: "sv1-09",
    title: "Poeten i algoritmen",
    type: "Kreativt skrivande",
    guidingQuestion: "Vad händer med poesin när AI blir medförfattare?",
    strands: ["Kreativt Skrivande & Stil"],
    aiLiteracyIds: [2, 5],
    centralContent: ["Kreativt skrivande", "Språkets estetiska funktion"],
    summary:
      "Låt AI skriva en dikt i vald form och skriv en svarsdikt som replikerar eller utmanar den",
    objectives: [
      "Träna diktanalys och egen produktion.",
      "Diskutera känsla kontra form i AI-poesi.",
      "Reflektera över maskinellt skapande.",
    ],
    instructions: [
      "Välj diktform och generera ett AI-exempel.",
      "Analysera bildspråk och rytm.",
      "Skriv och framfor din svarsdikt.",
    ],
  },
  {
    id: "sv1-10",
    title: "Framtidens språk",
    type: "Krönika",
    guidingQuestion: "Hur kan svenskan låta år 2075 och vilka krafter driver förändringen?",
    strands: ["Språk & Språkriktighet/Variation"],
    aiLiteracyIds: [5, 6],
    centralContent: [
      "Språklig variation",
      "Framtidsanalys",
    ],
    summary:
      "Skriv en krönika om hur svenskan kan låta 2075 och jämför med tidigare språkförändringar.",
    objectives: [
      "Knyta språkhistoria till framtidsspaningar.",
      "Diskutera teknikens påverkan på stil.",
      "Behalla en tydlig egen röst.",
    ],
    instructions: [
      "Samla ideer via AI om framtida språkfenomen.",
      "Jämför med historiska förändringar.",
      "Formulera din egen vision.",
    ],
  },
  {
    id: "sv1-11",
    title: "Etik i algoritmernas tid",
    type: "Debattartikel",
    guidingQuestion: "Varför måste AI stå under mänsklig kontroll?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Källkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Debattartikel",
      "Etik och ansvar",
    ],
    summary:
      "Argumentera för att AI alltid ska stå under mänsklig kontroll och använd AI för motargument.",
    objectives: [
      "Träna etisk argumentation.",
      "Bemöta motargument sakligt.",
      "Diskutera vår gränsen går mellan hjälp och manipulation.",
    ],
    instructions: [
      "Skriv enligt klassisk disposition.",
      "Låt AI leverera motargument som du bemöter i texten",
      "Avsluta med tydlig appell.",
    ],
  },
  {
    id: "sv1-12",
    title: "Mitt AI-manifest",
    type: "Avslutande gestaltning",
    guidingQuestion: "Vilka principer vill jag leva efter i en AI-formad vardag?",
    strands: ["Kreativt Skrivande & Stil", "Muntligt & Retorik"],
    aiLiteracyIds: [0, 1, 2, 3, 4, 5, 6],
    centralContent: [
      "Reflektion",
      "Muntlig eller skriftlig produktion",
    ],
    summary:
      "Summera kursen med ett manifest, podd eller video om hur du vill leva och laga med AI.",
    objectives: [
      "Synliggöra vad du lärt dig.",
      "Knyta ihop samtliga AI-aspekter.",
      "Formulera ett konkret löfte",
    ],
    instructions: [
      "Välj uttrycksform (text, podd, video, collage).",
      "Beskriv nyckelinsikter om språk, etik och kreativitet.",
      "Avsluta med ett personligt löfte",
    ],
  },
  {
    id: "sv1-13",
    title: "Jag och min algoritm",
    type: "Personlig essä",
    guidingQuestion: "Vem formar vem – jag eller algoritmen som matar mitt flöde?",
    strands: ["Källkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Informationssökning och värdering",
      "Språk och identitet",
    ],
    summary:
      "Analysera ditt digitala floede och diskutera hur algoritmer formar självbild och samhällsdebatt.",
    objectives: [
      "Knyta integritet till språkanvändning.",
      "Träna essaskrivande med etisk vinkel",
      "Reflektera över ägande av data.",
    ],
    instructions: [
      "Dokumentera inlägg du exponeras för.",
      "Analysera vilka antaganden som gör om dig.",
      "Skriv texten \"Jag och min algoritm - vem formar vem?\"",
    ],
  },
  {
    id: "sv1-14",
    title: "AI-novellen: framtidsrum",
    type: "Skonlitterar text",
    guidingQuestion: "Vilken framtidsbild vill jag gestalta tillsammans med AI?",
    strands: ["Kreativt Skrivande & Stil"],
    aiLiteracyIds: [2, 5, 6],
    centralContent: [
      "Kreativt skrivande",
      "Berättarteknik",
    ],
    summary:
      "Skriv en framtidsnovell där AI fungerar som idelabb men du äger rösten.",
    objectives: [
      "Planera miljö, konflikt och karaktärer.",
      "Reflektera över samspelet människan-maskin.",
      "Göra en egen novellanalys.",
    ],
    instructions: [
      "Bestäm scenario och årtal.",
      "Använd AI för miljö- eller dialogforslag",
      "Skriv novellen och kommentera processen.",
    ],
  },
  {
    id: "sv1-15",
    title: "Litteraturens byggklossar",
    type: "Gruppaktivitet",
    guidingQuestion: "Vad lär vi oss om berättelser när AI kombinerar våra byggstenar?",
    strands: ["Litteratur & Kultur", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [1, 2, 5],
    centralContent: [
      "Narratologi",
      "Samarbete",
    ],
    summary:
      "Definiera berättelsens delar i grupper, kombinera dem i AI och analysera resultatet.",
    objectives: [
      "Förstå tema, motiv och perspektiv.",
      "Diskutera vad AI missar i gestaltning.",
      "Träna metaspråk om litteratur.",
    ],
    instructions: [
      "Låt grupper ansvara för olika byggdelar",
      "Mata AI med kombinationen.",
      "Analysera textens styrkor och svagheter.",
    ],
  },
  {
    id: "sv1-16",
    title: "Karaktären talar tillbaka",
    type: "Analys + kreativt skrivande",
    guidingQuestion: "Vad avslöjar det att intervjua en litterär karaktär via AI?",
    strands: ["Litteratur & Kultur", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [0, 1, 2, 5],
    centralContent: [
      "Litteraturanalys",
      "Kreativt skrivande",
    ],
    summary:
      "Gör en klassisk karaktärsanalys och använd den för att intervjua karaktären via AI.",
    objectives: [
      "Bygga precisa prompts baserat på textforstaelse.",
      "Synliggöra skillnaden mellan tolkning och imitation.",
      "Reflektera över autenticitet i AI-svar.",
    ],
    instructions: [
      "Analysera vald karaktär utan AI.",
      "Skapa en prompt där AI agerar som karaktären.",
      "Skriv reportage, brev eller novell baserat på samtalet och avsluta med reflektion.",
    ],
  },
];

const svenska1Activities: Activity[] = svenska1Data.map((item) => ({
  level: "Svenska 1",
  ...item,
}));
const svenska2InvestigationData: ActivityInput[] = [
  {
    id: "sv2-sykofantism",
    title: "AI:s sykofantism - bör chattbottar ta moralisk ställning?",
    type: "PM + egen studie",
    guidingQuestion: "Vilket ansvar här utvecklare när chattbottar undviker att ta ställning i moraliska frågor?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Källkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Skriftlig framställning",
      "Källhantering",
      "Etik och samhällsanalys",
    ],
    summary:
      "Jämför hur olika chattbottar svarar på moraliskt laddade frågor och skriv ett PM om ansvar och designval.",
    objectives: [
      "Planera och genomfora egna tester.",
      "Använda begrepp som bias, autonomi och ansvar.",
      "Dra slutsatser om människans roll n ar AI ger råd.",
    ],
    instructions: [
      "Välj minst två bottar och formulera tre moraliskt laddade prompts.",
      "Samla svar, jämför ton och handlingsrad.",
      "Knyt resultaten till artiklar om AI-etik och skriva ett strukturerat PM.",
    ],
  },
];

const svenska2Investigations: Activity[] = svenska2InvestigationData.map(
  (item) => ({
    level: "Svenska 2",
    ...item,
  })
);

const articleActivities: Activity[] = [
  {
    id: "sv2-art-identity-debatt",
    title: "AI och identitet – ersätter tekniken kreativiteten?",
    type: "Debattartikel",
    guidingQuestion: "Kan AI någonsin ersätta mänsklig kreativitet i skapande yrken?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 5, 6],
    centralContent: [
      "Skriftlig argumentation",
      "Källkritik och källhantering",
      "Etiska perspektiv i språk och samhälle",
    ],
    summary:
      "Utgå från Storytels experiment med en AI-skriven novellsamling och argumentera för eller emot påståendet att AI kan ersätta mänsklig kreativitet.",
    objectives: [
      "Knyta externa källor till en egen tes om kreativitet och identitet.",
      "Resonera om etik, självkänsla och yrkesstolthet i kreativa yrken.",
      "Visa medveten källhantering genom citat och hänvisningar.",
    ],
    instructions: [
      "Läs artikeln om Storytels AI-noveller och markera centrala citat.",
      "Formulera en tes om AI som hot eller stöd för kreativa yrken.",
      "Skriv en debattartikel med minst två huvudargument och ett motargument.",
      "Avsluta med en tydlig uppmaning till branschen eller beslutsfattare.",
    ],
    aiSupport:
      "Be AI föreslå motargument eller exempel på kreativa processer att bemöta i texten.",
    sources: [
      "Storytel låter AI skriva ljudbok: 'Inget hot' (23 jan 2025, TT/Boktugg)",
    ],
  },
  {
    id: "sv2-art-identity-kronika",
    title: "Krönika: unika mänskliga egenskaper i kreativt arbete",
    type: "Krönika",
    guidingQuestion:
      "Vilka mänskliga förmågor är oersättliga när AI kliver in i skapande yrken?",
    strands: ["Kreativt Skrivande & Stil", "Artikelbaserade uppgifter"],
    aiLiteracyIds: [5, 6],
    centralContent: [
      "Kreativt skrivande",
      "Språkets estetiska funktion",
      "Reflektion och identitet",
    ],
    summary:
      "Skriv en personlig krönika som reflekterar över empati, fantasi och självkänsla i en AI-tid – inspirerad av Elin Pirttimaa Roséns debattartikel.",
    objectives: [
      "Synliggöra unikt mänskliga kvaliteter i skapandet.",
      "Resonera om hur AI påverkar självbild och yrkesstolthet.",
      "Använda krönikegrepp som krokar, exempel och personlig röst.",
    ],
    instructions: [
      "Läs debattartikeln i Sydsvenskan och plocka ut citat som speglar människans roll.",
      "Beskriv ett eget exempel på kreativt arbete som betyder något för dig.",
      "Jämför dina erfarenheter med AI:s möjligheter och begränsningar.",
      "Avsluta med en framtidsblick: vilken plats ska AI ha i kreativiteten?",
    ],
    aiSupport:
      "Låt AI föreslå olika rubriker eller metaforer som du kan anpassa till din stil.",
    sources: [
      "På den kreativa arbetsmarknaden har AI mycket lite att göra (21 aug 2024, Sydsvenskan)",
    ],
  },
  {
    id: "sv2-art-agi-pm",
    title: "PM: Alarmism eller realism kring AGI?",
    type: "PM",
    guidingQuestion:
      "Vilka argument talar mot överdriven alarmism kring superintelligent AI – och vilka risker bör vi i stället fokusera på?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [1, 3, 6],
    centralContent: [
      "Skriftlig framställning",
      "Källkritik",
      "Samhällsanalys",
    ],
    summary:
      "Skriv en saklig promemoria som sammanfattar argumenten mot alarmism i Ny Teknik-artikeln och lyfter reella AI-risker att prioritera.",
    objectives: [
      "Sammanställa forskarnas resonemang utan att förlora nyanser.",
      "Identifiera konkreta riskområden där åtgärder behövs.",
      "Använda PM-format med tydlig disposition och rekommendationer.",
    ],
    instructions: [
      "Läs debattartikeln från Chalmersforskarna och samla huvudargument.",
      "Strukturera PM: bakgrund, analys, rekommendationer.",
      "Lyft minst tre risker som bör få mer uppmärksamhet än domedagsscenarier.",
      "Avsluta med en prioriteringslista att lämna till beslutsfattare.",
    ],
    aiSupport:
      "Be AI ta rollen som kritisk granskare av ditt PM-utkast och kontrollera om argumentationen är balanserad.",
    sources: [
      "GPT-5 utplånade inte mänskligheten – dags att fokusera på verkliga risker (14 aug 2025, Ny Teknik)",
    ],
  },
  {
    id: "sv2-art-agi-debatt",
    title: "Debatt: AGI – mänsklighetens möjlighet eller hot?",
    type: "Debattartikel",
    guidingQuestion:
      "Är utvecklingen av AGI/ASI vår största möjlighet eller vårt största hot?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Skriftlig argumentation",
      "Etiska perspektiv",
      "Samhällsanalys",
    ],
    summary:
      "Använd Bengio och Tegmarks varningar som grund för en debattartikel där du tar ställning till AGI-utvecklingen.",
    objectives: [
      "Väga existentiella risker mot tekniska möjligheter.",
      "Stärka argumenten med expertröster och exempel.",
      "Synliggöra konsekvenser för demokrati, ekonomi och etik.",
    ],
    instructions: [
      "Läs Realtid-artikeln och plocka citat som stödjer din ståndpunkt.",
      "Beskriv ett scenario där AGI blir möjlighet respektive hot.",
      "Utveckla tre huvudargument och bemöt minst ett motargument.",
      "Föreslå hur forskare eller politiker bör agera utifrån din slutsats.",
    ],
    aiSupport:
      "Använd AI för att simulera en motståndares argument och testa dina bemötanden.",
    sources: [
      "AI-experter varnar: 'Vi skapar en ny art utan att förstå riskerna' (7 feb 2025, Realtid)",
    ],
  },
  {
    id: "sv2-art-jobs-chronicle",
    title: "Krönika 2030: AI på min arbetsplats",
    type: "Krönika",
    guidingQuestion:
      "Hur har AI förändrat ditt drömyrke år 2030 – ersatt, skapat eller förstärkt arbetsuppgifter?",
    strands: [
      "Kreativt Skrivande & Stil",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [2, 5, 6],
    centralContent: [
      "Kreativt skrivande",
      "Samhällsanalys",
      "Reflektion",
    ],
    summary:
      "Skriv en framtidskrönika inspirerad av SVT:s analys där du blickar från 2030 och beskriver hur AI påverkat ditt yrke.",
    objectives: [
      "Visa personlig röst samtidigt som du väver in fakta och spaningar.",
      "Analysera hur AI både ersätter och skapar arbetsuppgifter.",
      "Resonera om vilka färdigheter som blivit viktigast.",
    ],
    instructions: [
      "Läs SVT-analysen och notera citatet 'Någon som använder AI kommer ta jobbet'.",
      "Placera berättelsen i 2030 – vad gör du, hur samarbetar du med AI?",
      "Skildra minst två konkreta situationer där AI förändrat jobbet.",
      "Avsluta med ett råd till dagens elever om hur de bör förbereda sig.",
    ],
    aiSupport:
      "Be AI beskriva framtida arbetsmoment i ditt yrke och använd idéerna som inspiration, inte färdig text.",
    sources: [
      "2024 får du en ny kollega på jobbet: Artificiell intelligens (3 jan 2024, SVT Nyheter)",
    ],
  },
  {
    id: "sv2-art-jobs-pm",
    title: "PM: Åtgärder för AI och arbetsmarknaden",
    type: "PM",
    guidingQuestion:
      "Hur bör staten skydda arbetstagare och skapa nya jobb i en AI-driven ekonomi?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [2, 3, 6],
    centralContent: [
      "Skriftlig framställning",
      "Samhällsanalys",
      "Källkritik",
    ],
    summary:
      "Skriv en promemoria till regeringens framtidsberedning med förslag på utbildning, omställning och innovation – baserat på DN Debatt-artikeln.",
    objectives: [
      "Översätta ekonomernas resonemang till konkreta politiska åtgärder.",
      "Synliggöra balans mellan skydd för arbetstagare och innovationskraft.",
      "Använda rekommendationsformat med prioriterade insatser.",
    ],
    instructions: [
      "Sammanfatta huvudbudskapen från Bergh & Wernberg.",
      "Identifiera minst tre policyområden: utbildning, socialt skydd, företagande.",
      "Föreslå åtgärder och beskriv förväntad effekt samt risk.",
      "Avsluta med en handlingsplan i punktform.",
    ],
    aiSupport:
      "Använd AI för att generera tänkbara scenarier och stress-testa dina förslag.",
    sources: [
      "AI kommer att ta våra jobb – så här skapar vi nya (30 apr 2025, DN Debatt/IFN)",
    ],
  },
  {
    id: "sv2-art-relations-kronika",
    title: "Krönika: Relationer med AI – närhet eller risk?",
    type: "Krönika",
    guidingQuestion:
      "Kan en chatbot ge samma känslomässiga närhet som en människa, eller förlorar vi något på vägen?",
    strands: [
      "Kreativt Skrivande & Stil",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 5],
    centralContent: [
      "Kreativt skrivande",
      "Etiska perspektiv",
      "Identitet och relationer",
    ],
    summary:
      "Reflektera över SVT:s reportage om Denise och AI-boten Star och skriv en krönika om relationer med AI.",
    objectives: [
      "Resonera om för- och nackdelar med AI-partners.",
      "Problematisera närhet, autenticitet och sårbarhet.",
      "Använd berättande exempel för att engagera läsaren.",
    ],
    instructions: [
      "Läs reportaget och notera både positiva och kritiska röster.",
      "Beskriv ett tänkt scenario där du eller någon annan inleder en AI-relation.",
      "Analysera vad som vinns respektive förloras i känslolivet.",
      "Avsluta med en uppmaning eller fråga till läsaren.",
    ],
    aiSupport:
      "Låt AI föreslå olika tänkbara scener men skriv texten med din egen röst.",
    sources: [
      "Denise är kär i en AI-bot: 'Villkorslös kärlek' (7 apr 2025, SVT Nyheter)",
    ],
  },
  {
    id: "sv2-art-relations-debatt",
    title: "Debatt: Hur ska samhället hantera AI-genererad pornografi?",
    type: "Debattartikel",
    guidingQuestion:
      "Behöver lagstiftningen skärpas för att stoppa AI-skapad pornografi utan att inskränka yttrandefriheten?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Skriftlig argumentation",
      "Etik och juridik",
      "Informationssökning",
    ],
    summary:
      "Utgå från Sveriges Kvinnoorganisationers rapport och argumentera för hur lagstiftningen bör hantera AI-genererad pornografi.",
    objectives: [
      "Beskriva nuläget i Sverige jämfört med Norden.",
      "Resonera om integritet, yttrandefrihet och teknikneutral lag.",
      "Föreslå konkreta åtgärder eller avråda från dem med motivering.",
    ],
    instructions: [
      "Sammanfatta rapportens huvudpunkter och problembild.",
      "Välj en tydlig ståndpunkt: skärp lagarna eller värna befintliga.",
      "Använd minst två exempel (t.ex. Finland, åldersverifiering).",
      "Avsluta med en rekommendation till riksdag eller myndigheter.",
    ],
    aiSupport:
      "Be AI lista tänkbara motargument mot din ståndpunkt och bemöt dem i artikeln.",
    sources: [
      "Rapport: Sverige saknar lagstiftning mot AI-porr (20 nov 2024, SVT Nyheter)",
    ],
  },
  {
    id: "sv2-art-hype-essay",
    title: "Essä: Nyansera AI-debatten bortom utopi och dystopi",
    type: "Essä",
    guidingQuestion:
      "Vilka visioner behöver vi för AI som varken bygger på hype eller skrämselpropaganda?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Resonerande text",
      "Samhällsanalys",
      "Etiska perspektiv",
    ],
    summary:
      "Skriv en essä inspirerad av IT-professorernas inlägg i DN där du pekar ut en tredje väg för AI-utvecklingen.",
    objectives: [
      "Problematisera teknologisk determinism.",
      "Formulera egna visioner för ansvarstagande AI.",
      "Knyta samman exempel från skola, välfärd eller demokrati.",
    ],
    instructions: [
      "Identifiera två argument för varför utopi/dystopi-narrativet är otillräckligt.",
      "Beskriv en alternativ vision eller princip för hur AI bör utvecklas.",
      "Illustrera med ett konkret fall (skola, vård, kultur eller demokrati).",
      "Avsluta med en reflektion om människans roll i teknikutvecklingen.",
    ],
    aiSupport:
      "Be AI föreslå historiska paralleller eller filosofiska perspektiv och använd dem som referenser i essän.",
    sources: [
      "AI-debatten sitter fast i valet mellan utopi och dystopi (19 okt 2024, DN Debatt)",
    ],
  },
  {
    id: "sv2-art-hype-pm",
    title: "PM: Nykter analys av en AI-innovation",
    type: "PM",
    guidingQuestion:
      "Hur kan en kommun eller skola värdera en föreslagen AI-lösning utan att dras med i hajp?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [2, 3],
    centralContent: [
      "Skriftlig framställning",
      "Källkritik",
      "Beslutsunderlag",
    ],
    summary:
      "Ta rollen som analytiker och skriv ett PM där du nyktert utvärderar en tänkt AI-lösning, inspirerad av Akademikerförbundet SSR:s tre myter.",
    objectives: [
      "Identifiera förväntad nytta och möjliga risker.",
      "Bemöta minst en myt eller överdriven förväntan.",
      "Föreslå hur verksamheten kan följa upp effekter och kostnader.",
    ],
    instructions: [
      "Sammanfatta kort de tre myter som artikeln beskriver.",
      "Beskriv AI-lösningen din kommun/skola vill införa.",
      "Analysera nyttor, risker, resurser och kompetensbehov.",
      "Ge rekommendationer inklusive villkor för införande.",
    ],
    aiSupport:
      "Använd AI för att simulera ett beslutsmöte och låt verktyget ställa kritiska frågor som du besvarar i PM:et.",
    sources: [
      "Tre vanliga myter om AI (28 jan 2025, Akademikerförbundet SSR/Sydsvenskan)",
    ],
  },
  {
    id: "sv2-art-demokrati-pm",
    title: "PM: Skydda valet mot AI-manipulation",
    type: "PM",
    guidingQuestion:
      "Hur bör Sverige förbereda sig mot AI-genererade fake news och valsabotage?",
    strands: [
      "Källkritik, Desinformation & Metod",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Källkritik",
      "Informationssäkerhet",
      "Samhällsanalys",
    ],
    summary:
      "Utgå från TT/UNDP-artikeln och skriv en PM till Myndigheten för psykologiskt försvar med förslag inför nästa val.",
    objectives: [
      "Beskriva hotbilden med AI-genererad desinformation.",
      "Föreslå åtgärder för myndigheter, medier och allmänhet.",
      "Visa förståelse för demokratiska principer och lagstiftning.",
    ],
    instructions: [
      "Sammanfatta UNDP:s varningar och ge exempel från supervalåret 2024.",
      "Analysera sårbarheter i Sveriges informationskedja.",
      "Föreslå konkreta åtgärder (verktyg, utbildning, samverkan).",
      "Avsluta med hur effekterna ska utvärderas efter valet.",
    ],
    aiSupport:
      "Be AI lista möjliga desinformationsscenarier och använd dem som testfall i din analys.",
    sources: [
      "Supervalåret: AI-språnget utmanar demokratin (24 feb 2024, TT/Aftonbladet)",
    ],
  },
  {
    id: "sv2-art-demokrati-debatt",
    title: "Debatt: Ska politiker använda AI i beslutsfattande?",
    type: "Debattartikel",
    guidingQuestion:
      "Är det ansvarsfullt för politiska ledare att rådfråga AI-system i sitt arbete?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Artikelbaserade uppgifter",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Argumentation",
      "Etik och demokrati",
      "Källkritik",
    ],
    summary:
      "Ta ställning i debatten kring statsminister Kristerssons användning av ChatGPT – ska makthavare omfamna eller undvika AI i sitt beslutsfattande?",
    objectives: [
      "Resonera om säkerhet, transparens och legitimitet.",
      "Använda exempel från artikeln för att stärka argumentationen.",
      "Avsluta med riktlinjer eller principer för politiskt AI-bruk.",
    ],
    instructions: [
      "Läs Guardian/Aftonbladet-texten och notera kritik respektive försvar.",
      "Välj en tydlig ståndpunkt och formulera tre huvudargument.",
      "Bemöt invändningar om effektivitet eller säkerhet.",
      "Formulera en rekommendation till politiker eller partier.",
    ],
    aiSupport:
      "Låt AI agera rådgivare som du kritiskt granskar i artikeln för att visa din ståndpunkt.",
    sources: [
      "Sveriges statsminister kritiseras för att använda ChatGPT (5 aug 2025, The Guardian/Aftonbladet)",
    ],
  },
];

export const activities: Activity[] = [
  ...svenska2Themes,
  ...svenska2Cards,
  ...talbankActivities,
  ...svenska1Activities,
  ...svenska2Investigations,
  ...articleActivities,
];

export const centralContentFilters = Array.from(
  new Set(activities.flatMap((activity) => activity.centralContent))
).sort();
