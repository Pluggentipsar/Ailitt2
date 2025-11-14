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
  "Sprak & Sprakriktighet/Variation",
  "Kallkritik, Desinformation & Metod",
  "Kreativt Skrivande & Stil",
] as const;

type ActivityInput = Omit<Activity, "level"> & { level?: Activity["level"] };

const svenska2ThemeData: ActivityInput[] = [
  {
    id: "sv2-tema-1",
    title: "AI i skolan - hot eller hjalp?",
    type: "Utredande PM",
    guidingQuestion: "Hur påverkar generativ AI lararrollen och elevernas larande?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Kallkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [2, 4, 6],
    centralContent: [
      "Skriftlig framstallning",
      "Informationssokning och vardering",
      "Digitala verktyg",
    ],
    summary:
      "Utred hur generativ AI paverkar lararrollen och elevernas larande med stod i Skolverket och SR.",
    objectives: [
      "Synliggora konsekvenser for larare, elever och samhalle",
      "Visa kallsakring nar AI anvands i skrivprocessen.",
      "Trana disposition och sakligt pam.",
    ],
    instructions: [
      "Las de tva artiklarna och samla huvudargument.",
      "Planera pam med tydlig fragestallning och slutsats.",
      "Avsluta med riktlinjer for en hallbar AI-praktik.",
    ],
    aiSupport:
      "Anvand AI for att prova alternativa dispositioner men skriv och faktagranska texten sjalv.",
    sources: [
      "Skolverket (2024-12-12) Begransad anvandning av AI-tjanster",
      "Sveriges Radio (2025) Lararen Peter anvander AI i skolan",
    ],
  },
  {
    id: "sv2-tema-2",
    title: "Rattvisa, makt och algoritmer",
    type: "Debattartikel",
    guidingQuestion: "Hur bör AI användas för att stärka rättvisa snarare än undergräva den?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Kallkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Argumentation",
      "Retoriska verktyg",
      "Etik i samhallet",
    ],
    summary:
      "Argumentera for eller emot att AI gor samhallet effektivt men mindre rattvist.",
    objectives: [
      "Trana tes, motargument och bemotanden.",
      "Diskutera bias och transparens i teknik.",
      "Visa hur spraket formar demokratiska fragar.",
    ],
    instructions: [
      "Utga fran DN och Sveriges Ingenjorer.",
      "Skriv en debattartikel med tydlig mottagaranpassning.",
      "Avsluta med en handlingsinriktad uppmaning.",
    ],
    aiSupport:
      "Lat AI agera djavulens advokat for att testa argumentationen",
  },
  {
    id: "sv2-tema-3",
    title: "AI, desinformation och demokrati",
    type: "Argumenterande tal",
    guidingQuestion: "På vilket sätt förändrar AI vår tillgång till sanning och demokratisk delaktighet?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Muntlig framstallning",
      "Retorik",
      "Informationsvardering",
    ],
    summary:
      "Skapa ett tal om hur AI paverkar vart tillgang till sanning och demokrati.",
    objectives: [
      "Knyta retorik till komplex samhallsfraga.",
      "Synliggora filterbubblor och informationspaverkan.",
      "Skilja pa AI-stod och eget manusarbete.",
    ],
    instructions: [
      "Analysera kallorna fran Stockholms universitet och Omni",
      "Planera talets struktur med tydlig rod trad.",
      "Skriv talet sjalv men prova inledningar i AI.",
    ],
    aiSupport:
      "Be AI foresla tre olika inledningar att valja mellan.",
  },
  {
    id: "sv2-tema-4",
    title: "Kreativitet, konst och agande",
    type: "Essa eller kronika",
    guidingQuestion: "Vad återstår för människan när AI kan skapa konst, musik och litteratur?",
    strands: ["Kreativt Skrivande & Stil", "Litteratur & Kultur"],
    aiLiteracyIds: [0, 3, 5],
    centralContent: [
      "Kreativt skrivande",
      "Sprakets estetiska funktion",
      "Etik och upphovsratt",
    ],
    summary:
      "Utforska vad som aterstar for manniskan nar AI kan skapa konst, musik och litteratur.",
    objectives: [
      "Utveckla personlig rost och stil.",
      "Diskutera etik och agande i skapandeprocessen.",
      "Knyta klassiska verk till samtida teknikdebatt.",
    ],
    instructions: [
      "Valj essa eller kronika och formulera en tydlig huvudtanke",
      "Integrera exempel fran kulturdebatt och litteratur.",
      "Ta stallning i slutet och motivera din syn.",
    ],
  },
  {
    id: "sv2-tema-5",
    title: "AI och framtidens arbetsliv",
    type: "Utredande PM",
    guidingQuestion: "Hur förändrar AI framtidens yrken och vilka förmågor blir viktigast?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Kallkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [1, 2, 6],
    centralContent: [
      "Skriftlig framstallning",
      "Samhallsanalys",
      "Spraklig formalia",
    ],
    summary:
      "Analysera hur AI forandrar yrken och vilka kompetenser som blir viktigast.",
    objectives: [
      "Trana kallkritisk syntes.",
      "Koppla spraket till framtida kommunikationsbehov.",
      "Resonera om etik och ansvar i nya roller.",
    ],
    instructions: [
      "Formulera en tydlig fragestallning.",
      "Samla belagg fran reportage och statistik.",
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
      "Samtala med AI i rollen som en romanfigur och skriv en reflektion om overvakning och sanning.",
    objectives: [
      "Visa litterar forstaelse genom dialog.",
      "Resonera om kontroll och ansvar.",
      "Redovisa hur AI anvandes i processen.",
    ],
    instructions: [
      "Skriv en exakt prompt dar AI agerar som vald karaktar.",
      "Genomfor samtalet och spara centrala citat.",
      "Sammanfatta dina insikter samt en metareflektion.",
    ],
  },
  {
    id: "sv2-card-2",
    title: "Stiltransformation - Romeo och Julia 2150",
    type: "Litterar stilanalys",
    guidingQuestion: "Hur förändras Romeo och Julias budskap när berättelsen placeras i en futuristisk värld?",
    strands: ["Litteratur & Kultur", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [0, 5],
    centralContent: [
      "Skonlitterara verkningsmedel",
      "Litteraturhistoriska perspektiv",
      "Spraklig variation",
    ],
    summary:
      "Lat AI skriva om Julias monolog i dystopisk stil och analysera skillnader i sprak och mansklig bild",
    objectives: [
      "Jamnfor epoker och stilgrepp.",
      "Koppla sprakdrag till vardebild.",
      "Diskutera vad som forloras eller vinns.",
    ],
    instructions: [
      "Valj ett stycke och skapa omskrivningen via AI.",
      "Markera skillnader i ton och ordval.",
      "Skriv en kort analys kopplad till epokkunskap.",
    ],
  },
  {
    id: "sv2-card-3",
    title: "AI som litteraturkritiker",
    type: "Kort PM",
    guidingQuestion: "Vad kan AI förstå respektive missa när den analyserar en novell?",
    strands: ["Litteratur & Kultur", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [4, 5],
    centralContent: [
      "Litteraturanalys",
      "Kallkritik",
      "Muntlig och skriftlig framstallning",
    ],
    summary:
      "Jamfor din egen tolkning av en novell med en AI-analys och skriv ett PM om skillnaderna.",
    objectives: [
      "Synliggora skillnaden mellan tolkning och generering.",
      "Trana argumentation med textstod.",
      "Reflektera over AI:s styrkor och begransningar.",
    ],
    instructions: [
      "Gor en egen analys av vald text.",
      "Be AI analysera samma text med tydlig prompt.",
      "Strukturera ett PM eller muntlig redovisning.",
    ],
  },
  {
    id: "sv2-card-4",
    title: "Mitt liv som algoritm",
    type: "Kreativ berattelse",
    guidingQuestion: "Hur skulle världen upplevas om din röst plötsligt blev en algoritm?",
    strands: ["Kreativt Skrivande & Stil", "Sprak & Sprakriktighet/Variation"],
    aiLiteracyIds: [5, 6],
    centralContent: [
      "Kreativt skrivande",
      "Identitet och perspektiv",
      "Spraklig variation",
    ],
    summary:
      "Skriv en jag-berattelse dar du vaknar som en AI-modell och skildrar en ny vardag.",
    objectives: [
      "Eksperimentera med rost och ton.",
      "Utforska agens i tekniska system.",
      "Diskutera vad som gor berattelsen mansklig.",
    ],
    instructions: [
      "Planera konflikt och utveckling.",
      "Be AI foresla tre bilder av hur en AI beskriver sinnen.",
      "Skriv texten i jag-form och lagg till kort efterord.",
    ],
  },
  {
    id: "sv2-card-5",
    title: "Litteratur mot samtidens etik",
    type: "Syntesuppgift",
    guidingQuestion: "Vilka nya insikter uppstår när ett klassiskt verk möter dagens teknikdebatt?",
    strands: ["Litteratur & Kultur", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Textkopplingar",
      "Etiska perspektiv",
      "Argumenterande skrivande",
    ],
    summary:
      "Koppla ett klassiskt verk, till exempel Frankenstein, till en aktuell teknikdebatt.",
    objectives: [
      "Trana intertextuell syntes.",
      "Diskutera ansvar och framtidstro.",
      "Anvanda AI-sammanfattningar kritiskt.",
    ],
    instructions: [
      "Valj skonlitterart verk och samtida artikel",
      "Sammanfatta budskap och jamfor.",
      "Presentera slutsatser muntligt eller skriftligt.",
    ],
    aiSupport:
      "AI far endast sammanfatta artikeln, du kontrollerar fakta och tolkar sjalv.",
  },
];

const svenska2Cards: Activity[] = svenska2CardData.map((item) => ({
  level: "Svenska 2",
  ...item,
}));
const talbankData: ActivityInput[] = [
  {
    id: "sv2-tal-01",
    title: "Hur tanker en maskin?",
    type: "Informerande tal",
    guidingQuestion: "Hur förklarar du skillnaden mellan maskinellt och mänskligt tänkande?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [1],
    centralContent: [
      "Muntlig framstallning",
      "Informationsvardering",
    ],
    summary:
      "Forklara hur sprakmodeller fungerar och jamfor med manskligt tankande.",
    objectives: [
      "Gora komplex teknik begriplig.",
      "Visa skillnad mellan generera och veta.",
      "Anvanda sakliga exempel och forklaringar.",
    ],
    instructions: [
      "Beskriv hur modeller tranar pa data.",
      "Jamfor maskinens och manniskans styrkor.",
      "Avsluta med en vardefull slutsats for publiken.",
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
      "Ta stallning till hur AI bor anvandas i undervisningen och vilka varden som ska styra.",
    objectives: [
      "Trana tes och motargument.",
      "Synliggora etik och kallsakring.",
      "Avsluta med en konkret uppmaning.",
    ],
    instructions: [
      "Beskriv ett scenario fran klassrummet.",
      "Ge minst tva argument och ett motargument.",
      "Foresla regler eller riktlinjer.",
    ],
  },
  {
    id: "sv2-tal-03",
    title: "Infor AI-korkort i skolan",
    type: "Argumenterande tal",
    guidingQuestion: "Varför behöver elever ett AI-körkort och hur kan det se ut?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [1, 6],
    centralContent: [
      "Argumentation",
      "Samhallsanalys",
    ],
    summary:
      "Overtyga publiken om att elever behover formell AI- och etikkompetens.",
    objectives: [
      "Koppla digital kompetens till demokrati.",
      "Ge exempel pa risker utan utbildning.",
      "Presentera en enkel kursplan.",
    ],
    instructions: [
      "Foresla hur ett korkort kan se ut.",
      "Anvand statistik eller fallstudier.",
      "Avsluta med en uppmaning till beslutsfattare.",
    ],
  },
  {
    id: "sv2-tal-04",
    title: "Manniska eller maskin - vem ska vi lita pa?",
    type: "Reflekterande tal",
    guidingQuestion: "Vem litar vi på när både människor och maskiner talar?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 5],
    centralContent: [
      "Muntlig framstallning",
      "Epistemiska fragar",
    ],
    summary:
      "Utforska fortroende i en tid av deepfakes och syntetiska roster.",
    objectives: [
      "Vack etiska fragar om ansvar.",
      "Ge publiken metoder for att prova sanning",
      "Utveckla ett personligt perspektiv.",
    ],
    instructions: [
      "Inled med ett exempel pa bruten tillit.",
      "Visa hur man kan kallsakra rost och bild.",
      "Stall en avslutande fraga till publiken.",
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
      "Sprakets estetiska funktion",
      "Muntlig framstallning",
    ],
    summary:
      "Diskutera gransen mellan manskligt och maskinellt skapande med exempel fran kulturdebatt.",
    objectives: [
      "Synliggora olika syn pa konst.",
      "Analysera spraket i AI-genererade verk.",
      "Ta en personlig position.",
    ],
    instructions: [
      "Jamfor minst tva konstformer.",
      "Beskriv vad som saknas eller tillfors.",
      "Avsluta med en vision om framtiden.",
    ],
  },
  {
    id: "sv2-tal-06",
    title: "Fran Frankenstein till ChatGPT",
    type: "Informerande tal",
    guidingQuestion: "Vad lär oss litteraturens teknikberättelser om dagens AI-drömmar?",
    strands: ["Litteratur & Kultur", "Muntligt & Retorik"],
    aiLiteracyIds: [0, 6],
    centralContent: [
      "Litteraturhistoriska perspektiv",
      "Muntlig framstallning",
    ],
    summary:
      "Bind ihop litteraturens AI-gestalter med dagens teknikdrommar och radsla",
    objectives: [
      "Knyta verk till sin tid.",
      "Visa hur motiv aterkommer.",
      "Resonera om vad texterna larde oss.",
    ],
    instructions: [
      "Valj minst tva verk fran olika epoker.",
      "Beskriv deras bild av teknik och ansvar.",
      "Jamfor med dagens diskussion.",
    ],
  },
  {
    id: "sv2-tal-07",
    title: "AI och klimatet - raddare eller resursforbrukare?",
    type: "Utredande tal",
    guidingQuestion: "Är AI en klimatlösning eller ännu en belastning på planeten?",
    strands: [
      "Muntligt & Retorik",
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
    ],
    aiLiteracyIds: [4, 6],
    centralContent: [
      "Utredande framstallning",
      "Hallbarhetsfragor",
    ],
    summary:
      "Vag klimatnytta mot energiforbrukning och foresla ansvarstagande.",
    objectives: [
      "Hantera data i ett tal.",
      "Visa flera perspektiv.",
      "Avsluta med forslag.",
    ],
    instructions: [
      "Samla fakta fran forskningsartiklar.",
      "Jamfor positiva och negativa effekter.",
      "Foresla policy eller undervisningsgrepp.",
    ],
  },
  {
    id: "sv2-tal-08",
    title: "Nar maskiner pratar svenska",
    type: "Informerande tal",
    guidingQuestion: "Hur påverkar AI det svenska språket och dess variation?",
    strands: ["Sprak & Sprakriktighet/Variation", "Muntligt & Retorik"],
    aiLiteracyIds: [1, 5],
    centralContent: [
      "Spraklig variation",
      "Muntlig framstallning",
    ],
    summary:
      "Resonera om hur AI paverkar svenska, minoritetssprak och flersprakighet.",
    objectives: [
      "Synliggora sprakforandring.",
      "Diskutera normer och representation.",
      "Ge exempel fran vardagen.",
    ],
    instructions: [
      "Visa nya ord eller uttryck som AI sprider.",
      "Knyt till forskning eller artiklar.",
      "Avsluta med en fraga till publiken.",
    ],
  },
  {
    id: "sv2-tal-09",
    title: "Algoritmerna styr vara tankar",
    type: "Argumenterande tal",
    guidingQuestion: "Hur styr algoritmer våra tankar och vilka motstrategier behöver vi?",
    strands: ["Kallkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [2, 6],
    centralContent: [
      "Kallsakring",
      "Digitala medier",
    ],
    summary:
      "Synliggora filterbubblor, motivationsalgoritmer och demokratiska risker.",
    objectives: [
      "Beskriva hur floden kurateras.",
      "Ge exempel pa manipulationstekniker.",
      "Uppmana publiken till kritiskt agerande.",
    ],
    instructions: [
      "Analysera ett eget eller fiktivt floede.",
      "Forklara begrepp som filterbubbla och nudging.",
      "Ge tre strategier for att bryta monstret",
    ],
  },
  {
    id: "sv2-tal-10",
    title: "Deepfakes och forstroende",
    type: "Informerande tal",
    guidingQuestion: "Hur skyddar vi förtroendet i en tid av deepfakes?",
    strands: ["Kallkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 4],
    centralContent: [
      "Retoriska verktyg",
      "Informationsvardering",
    ],
    summary:
      "Analysera hur ljud- och videomanipulationer forandrar samhallsforstroende.",
    objectives: [
      "Beskriva hur deepfakes skapas.",
      "Diskutera ansvar for publicering.",
      "Ge publiken kontrollfragor.",
    ],
    instructions: [
      "Visa eller beskriv ett scenario.",
      "Forklara vilka sinnen som luras.",
      "Avsluta med riktlinjer for vardaglig kallsakring.",
    ],
  },
  {
    id: "sv2-tal-11",
    title: "AI i journalistiken - slutet for sanningen?",
    type: "Argumenterande tal",
    guidingQuestion: "Kan journalistiken behålla sin trovärdighet när AI producerar nyheter?",
    strands: ["Kallkritik, Desinformation & Metod", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 4],
    centralContent: [
      "Analys av sakprosa",
      "Kallkritik",
    ],
    summary:
      "Granska hur redaktioner anvander AI och vilka risker som uppstar.",
    objectives: [
      "Jamfora manskliga och AI-skapade artiklar.",
      "Diskutera ansvar och transparens.",
      "Foresla riktlinjer for redaktioner.",
    ],
    instructions: [
      "Hitta exempel pa AI-artiklar.",
      "Markera vad som saknas i stil eller kallor",
      "Avsluta med ett konkret krav pa medier.",
    ],
  },
  {
    id: "sv2-tal-12",
    title: "AI och spraket som makt",
    type: "Reflekterande tal",
    guidingQuestion: "Hur formar AI språket som maktmedel och identitetsverktyg?",
    strands: ["Sprak & Sprakriktighet/Variation", "Muntligt & Retorik"],
    aiLiteracyIds: [3, 5],
    centralContent: [
      "Sprakforhallanden",
      "Sprakanvandning och identitet",
    ],
    summary:
      "Diskutera hur AI kan reproducera eller utmana maktstrukturer i spraket.",
    objectives: [
      "Synliggora koppling mellan sprak och identitet.",
      "Analysera exempel pa bias.",
      "Bygga ett normkritiskt perspektiv.",
    ],
    instructions: [
      "Visa hur olika sociolekter bedoms.",
      "Diskutera konsekvenser for elevers rost",
      "Avsluta med ett konkret forslag pa andring.",
    ],
  },
  {
    id: "sv2-tal-13",
    title: "AI och manniskans unika rost",
    type: "Reflekterande tal",
    guidingQuestion: "Vilken plats har den mänskliga rösten när AI låter som vi?",
    strands: ["Muntligt & Retorik", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [5],
    centralContent: [
      "Actio och elocutio",
      "Muntlig framstallning",
    ],
    summary:
      "Reflektera over autenticitet och ethos i en tid av syntetiska roster.",
    objectives: [
      "Beskriv vad som gor en rost trovandig",
      "Knyta ethos till personliga erfarenheter.",
      "Motivera varfor mansklig narvaro behovs.",
    ],
    instructions: [
      "Ge exempel pa nar du kande dig trodd eller inte.",
      "Jamfor med AI-genererade rostprov.",
      "Avsluta med ett personligt lofte",
    ],
  },
  {
    id: "sv2-tal-14",
    title: "Vem bar ansvaret nar AI gor fel?",
    type: "Argumenterande tal",
    guidingQuestion: "Vem bär ansvaret när AI orsakar skada?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Argumentation",
      "Etiska dilemman",
    ],
    summary:
      "Red ut ansvar mellan programmerare, foretag och anvandare nar AI orsakar skada.",
    objectives: [
      "Kopa fallstudier till etiska modeller.",
      "Visa hur ansvar kan fordelas.",
      "Foresla reglering eller utbildning.",
    ],
    instructions: [
      "Beskriv ett konkret scenario.",
      "Analysera ansvarskedjan steg for steg.",
      "Ge ett tydligt forslag pa losning.",
    ],
  },
  {
    id: "sv2-tal-15",
    title: "AI och demokratin - en rost utan medborgarskap",
    type: "Avslutande tal",
    guidingQuestion: "Vilken roll ska AI få i demokratin när den saknar medborgarskap?",
    strands: ["Muntligt & Retorik", "Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Argumentation",
      "Samhallsanalys",
    ],
    summary:
      "Diskutera vad medborgarskap betyder nar AI deltar i offentligheten.",
    objectives: [
      "Knyta ihop kursens centrala fragor.",
      "Visa hur sprak och demokrati hanger ihop.",
      "Avsluta med en vision for gemensamt ansvar.",
    ],
    instructions: [
      "Knyt till tidigare case eller texter i kursen.",
      "Lyft fragan om legitimitet nar AI talar.",
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
    strands: ["Kreativt Skrivande & Stil", "Sprak & Sprakriktighet/Variation"],
    aiLiteracyIds: [0, 1, 5],
    centralContent: ["Personlig reflektion", "Sprakets funktion for tankande"],
    summary:
      "Skriv 1-2 sidor om hur AI paverkar ditt skrivande, vardag och ansvar.",
    objectives: [
      "Synliggora utgangslaget for kursen.",
      "Introducera epistemisk medvetenhet.",
      "Trana personlig essa med tydlig struktur",
    ],
    instructions: [
      "Beskriv ett lyckat och ett problematiskt AI-tillfalle",
      "Analysera vem som ager ideerna nar AI anvands.",
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
    centralContent: ["Muntlig framstallning", "Retorik"],
    summary:
      "Anvand AI som retorikcoach men skapa ett eget tal om en AI-fraga.",
    objectives: [
      "Trana ethos, logos och pathos.",
      "Reflektera over skillnaden mellan stod och styrning.",
      "Dokumentera vilka AI-rad du anvande eller avstod fran.",
    ],
    instructions: [
      "Valj ett amne kopplat till AI och vard vardag.",
      "Be AI foresla tre talinledningar.",
      "Spela in eller framfor talet och skriv en kort reflektion.",
    ],
  },
  {
    id: "sv1-03",
    title: "AI-detektiven",
    type: "Kallkritisk analys",
    guidingQuestion: "Hur avslöjar jag fel och hallucinationer i AI-genererade texter?",
    strands: ["Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [1, 3, 4],
    centralContent: ["Kallkritik", "Sakprosaanalys"],
    summary:
      "Avsloja hallucinationer i en AI-genererad text och skriv en rapport.",
    objectives: [
      "Trana verifiering av uppgifter.",
      "Skilja pa plausibilitet och sanning.",
      "Resonera om ansvar nar du delar information.",
    ],
    instructions: [
      "Markera misstankta uppgifter.",
      "Kontrollera dem via bibliotek, NE eller statistikdatabaser.",
      "Skriv rapporten \"Sa avslojade vi AI:ns fel\"",
    ],
  },
  {
    id: "sv1-04",
    title: "Filterbubblan och jag",
    type: "Multimodal analys",
    guidingQuestion: "Vad säger mitt informationsflöde om mig och hur kan jag påverka det?",
    strands: ["Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Informationssokning och vardering",
      "Sprak och identitet",
    ],
    summary:
      "Karta lagg ditt eget informationsflode och analysera hur algoritmer formar dig.",
    objectives: [
      "Synliggora hur innehall kurateras.",
      "Knyta begrepp som automation bias till vardagen.",
      "Trana visuella redovisningar.",
    ],
    instructions: [
      "Logga 10-15 inlagg fran dina plattformar.",
      "Skapa en visuell karta over teman och luckor.",
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
    centralContent: ["Skriftlig framstallning", "Processtankande"],
    summary:
      "Anvand AI i tydliga delsteg och dokumentera hela skrivprocessen.",
    objectives: [
      "Utveckla medvetna skrivstrategier.",
      "Visa kontroll over verktyget.",
      "Reflektera over hur texten av-AI-fieras.",
    ],
    instructions: [
      "Logga egna ideer, prompts och bearbetningar.",
      "Lamna in text och processlogg",
      "Beskriv vad AI tillforde eller inte tillforde.",
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
      "Jamnfor verk som Frankenstein, Kallocain eller Klara och solen och deras syn pa AI.",
    objectives: [
      "Knyta verk till sin historiska kontext.",
      "Diskutera ansvar, makt och empati.",
      "Overfora insikter till dagens debatt.",
    ],
    instructions: [
      "Valj ett verk och analysera relationen manniskan-maskin.",
      "Presentera i seminarium eller essa",
      "Knyt till en samtida fraga.",
    ],
  },
  {
    id: "sv1-07",
    title: "AI och sprakmakt",
    type: "Sprakexperiment",
    guidingQuestion: "Vilka språkvarianter premieras när AI ger respons – och varför?",
    strands: ["Sprak & Sprakriktighet/Variation"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: ["Spraklig variation", "Sprak och makt"],
    summary:
      "Skriv texter i olika stilar, lat AI ge respons och analysera vilka normer som synliggors",
    objectives: [
      "Synliggora sociolekter och normkritik.",
      "Diskutera representation i sprakmodeller.",
      "Resonera om vems rost som upphojs.",
    ],
    instructions: [
      "Skriv tre texter (standard, dialekt, slang).",
      "Be AI kommentera varje variant.",
      "Analysera skillnader i responsen.",
    ],
  },
  {
    id: "sv1-08",
    title: "Den manskliga rosten",
    type: "Hoglasningsovning",
    guidingQuestion: "Hur låter en genuin röst jämfört med AI:s ton?",
    strands: ["Muntligt & Retorik", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [2, 5],
    centralContent: ["Muntlig framstallning", "Stilanalys"],
    summary:
      "Jamfor en egen text med en AI-text och diskutera vad som gor en rost levande.",
    objectives: [
      "Identifiera drag i LLM-svenska.",
      "Utveckla stil- och rostmedvetenhet.",
      "Trana aktiv lyssning i klassrummet.",
    ],
    instructions: [
      "Skriv en kort personlig text.",
      "Lat AI skriva om samma tema",
      "Las upp anonymt och analysera responsen.",
    ],
  },
  {
    id: "sv1-09",
    title: "Poeten i algoritmen",
    type: "Kreativt skrivande",
    guidingQuestion: "Vad händer med poesin när AI blir medförfattare?",
    strands: ["Kreativt Skrivande & Stil"],
    aiLiteracyIds: [2, 5],
    centralContent: ["Kreativt skrivande", "Sprakets estetiska funktion"],
    summary:
      "Lat AI skriva en dikt i vald form och skriv en svarsdikt som replikerar eller utmanar den",
    objectives: [
      "Trana diktanalys och egen produktion.",
      "Diskutera kansla kontra form i AI-poesi.",
      "Reflektera over maskinellt skapande.",
    ],
    instructions: [
      "Valj diktform och generera ett AI-exempel.",
      "Analysera bildsprak och rytm.",
      "Skriv och framfor din svarsdikt.",
    ],
  },
  {
    id: "sv1-10",
    title: "Framtidens sprak",
    type: "Kronika",
    guidingQuestion: "Hur kan svenskan låta år 2075 och vilka krafter driver förändringen?",
    strands: ["Sprak & Sprakriktighet/Variation"],
    aiLiteracyIds: [5, 6],
    centralContent: [
      "Spraklig variation",
      "Framtidsanalys",
    ],
    summary:
      "Skriv en kronika om hur svenskan kan lata 2075 och jamfor med tidigare sprakforandringar.",
    objectives: [
      "Knyta sprakhistoria till framtidsspaningar.",
      "Diskutera teknikens paverkan pa stil.",
      "Behalla en tydlig egen rost.",
    ],
    instructions: [
      "Samla ideer via AI om framtida sprakfenomen.",
      "Jamfor med historiska forandringar.",
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
      "Kallkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 6],
    centralContent: [
      "Debattartikel",
      "Etik och ansvar",
    ],
    summary:
      "Argumentera for att AI alltid ska sta under mansklig kontroll och anvand AI for motargument.",
    objectives: [
      "Trana etisk argumentation.",
      "Bemota motargument sakligt.",
      "Diskutera var gransen gar mellan hjalp och manipulation.",
    ],
    instructions: [
      "Skriv enligt klassisk disposition.",
      "Lat AI leverera motargument som du bemoter i texten",
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
      "Synliggora vad du lart dig.",
      "Knyta ihop samtliga AI-aspekter.",
      "Formulera ett konkret lofte",
    ],
    instructions: [
      "Valj uttrycksform (text, podd, video, collage).",
      "Beskriv nyckelinsikter om sprak, etik och kreativitet.",
      "Avsluta med ett personligt lofte",
    ],
  },
  {
    id: "sv1-13",
    title: "Jag och min algoritm",
    type: "Personlig essa",
    guidingQuestion: "Vem formar vem – jag eller algoritmen som matar mitt flöde?",
    strands: ["Kallkritik, Desinformation & Metod"],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Informationssokning och vardering",
      "Sprak och identitet",
    ],
    summary:
      "Analysera ditt digitala floede och diskutera hur algoritmer formar sjalvbild och samhallsdebatt.",
    objectives: [
      "Knyta integritet till sprakanvandning.",
      "Trana essaskrivande med etisk vinkel",
      "Reflektera over agande av data.",
    ],
    instructions: [
      "Dokumentera inlagg du exponeras for.",
      "Analysera vilka antaganden som gor om dig.",
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
      "Berattarteknik",
    ],
    summary:
      "Skriv en framtidsnovell dar AI fungerar som idelabb men du ager rosten.",
    objectives: [
      "Planera miljo, konflikt och karaktarer.",
      "Reflektera over samspelet manniskan-maskin.",
      "Gora en egen novellanalys.",
    ],
    instructions: [
      "Bestam scenario och artal.",
      "Anvand AI for miljo- eller dialogforslag",
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
      "Definiera berattelsens delar i grupper, kombinera dem i AI och analysera resultatet.",
    objectives: [
      "Forsta tema, motiv och perspektiv.",
      "Diskutera vad AI missar i gestaltning.",
      "Trana metasprak om litteratur.",
    ],
    instructions: [
      "Lat grupper ansvara for olika byggdelar",
      "Mata AI med kombinationen.",
      "Analysera textens styrkor och svagheter.",
    ],
  },
  {
    id: "sv1-16",
    title: "Karaktaren talar tillbaka",
    type: "Analys + kreativt skrivande",
    guidingQuestion: "Vad avslöjar det att intervjua en litterär karaktär via AI?",
    strands: ["Litteratur & Kultur", "Kreativt Skrivande & Stil"],
    aiLiteracyIds: [0, 1, 2, 5],
    centralContent: [
      "Litteraturanalys",
      "Kreativt skrivande",
    ],
    summary:
      "Gor en klassisk karaktarsanalys och anvand den for att intervjua karaktaren via AI.",
    objectives: [
      "Bygga precisa prompts baserat pa textforstaelse.",
      "Synliggora skillnaden mellan tolkning och imitation.",
      "Reflektera over autenticitet i AI-svar.",
    ],
    instructions: [
      "Analysera vald karaktar utan AI.",
      "Skapa en prompt dar AI agerar som karaktaren.",
      "Skriv reportage, brev eller novell baserat pa samtalet och avsluta med reflektion.",
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
    title: "AI:s sykofantism - bor chattbottar ta moralisk stallning?",
    type: "PM + egen studie",
    guidingQuestion: "Vilket ansvar har utvecklare när chattbottar undviker att ta ställning i moraliska frågor?",
    strands: [
      "Skriftligt - Utredande/Argumenterande (inkl. PM)",
      "Kallkritik, Desinformation & Metod",
    ],
    aiLiteracyIds: [3, 4, 6],
    centralContent: [
      "Skriftlig framstallning",
      "Kallhantering",
      "Etik och samhallsanalys",
    ],
    summary:
      "Jamfor hur olika chattbottar svarar pa moraliskt laddade fragor och skriv ett PM om ansvar och designval.",
    objectives: [
      "Planera och genomfora egna tester.",
      "Anvanda begrepp som bias, autonomi och ansvar.",
      "Dra slutsatser om manniskans roll n ar AI ger rad.",
    ],
    instructions: [
      "Valj minst tva bottar och formulera tre moraliskt laddade prompts.",
      "Samla svar, jamfor ton och handlingsrad.",
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

export const activities: Activity[] = [
  ...svenska2Themes,
  ...svenska2Cards,
  ...talbankActivities,
  ...svenska1Activities,
  ...svenska2Investigations,
];

export const centralContentFilters = Array.from(
  new Set(activities.flatMap((activity) => activity.centralContent))
).sort();
