// Innehåll för sektionen "Detta behöver eleverna veta om AI"
// — metodbank + lektioner kopplade till föreläsningen med samma namn.
// OECD-domäner: AILit Framework (OECD/EU 2026, slutversion — fjärde domänen heter Shape AI).
// aiLiteracyIds mappar mot sajtens sju dimensioner (0–6) så badges och aktivitetsfilter fungerar.

export type OecdDomain = "mota" | "skapa" | "styra" | "forma";

export const DOMANER: Record<
  OecdDomain,
  { namn: string; engelska: string; beskrivning: string; farg: string }
> = {
  mota: {
    namn: "Möta AI",
    engelska: "Engage with AI",
    beskrivning: "Känna igen, granska och värdera AI — grunden allt annat vilar på.",
    farg: "teal",
  },
  skapa: {
    namn: "Skapa med AI",
    engelska: "Create with AI",
    beskrivning: "Använda AI som kreativ partner utan att tappa ägarskapet.",
    farg: "purple",
  },
  styra: {
    namn: "Styra AI",
    engelska: "Manage AI",
    beskrivning: "Avgöra när, hur och om AI ska användas — dela arbetet medvetet.",
    farg: "blue",
  },
  forma: {
    namn: "Forma AI",
    engelska: "Shape AI",
    beskrivning: "Förstå att AI är byggd av människor — och kan byggas om.",
    farg: "orange",
  },
};

export interface MetodSteg {
  rubrik: string;
  text: string;
  tid?: string;
}

export interface Metod {
  slug: string;
  nr: number;
  titel: string;
  tagline: string;
  domaner: OecdDomain[];
  aiLiteracyIds: number[];
  tid: string;
  arskurser: string;
  forberedelser: string;
  material: string;
  varfor: string;
  forskning: string;
  steg: MetodSteg[];
  fallgropar: string[];
  klassrumIntro: string;
  kallkredit?: string;
}

export const METODER: Metod[] = [
  {
    slug: "goblin-glitch",
    nr: 1,
    titel: "Goblin Glitch",
    tagline: "Träningsdata och belöningsmekanismer på 15 minuter — utan ett enda fackord.",
    domaner: ["mota"],
    aiLiteracyIds: [1, 4],
    tid: "15 min",
    arskurser: "Åk 6 – gymnasiet",
    forberedelser: "2 min — läs igenom berättelsen nedan",
    material: "Whiteboard räcker. Projektor om du vill visa klassrumsläget.",
    varfor:
      "Våren 2026 började ChatGPT kalla buggar för gobliner i seriösa svar till betalande kunder. Orsaken (enligt OpenAI:s egen utredning): belöningssignalen för ett nördigt personlighetsläge hade lärt sig älska fantasyord — läget stod för 2,5 % av svaren men två tredjedelar av goblinerna. Berättelsen bär hela poängen om hur AI tränas: den suger åt sig konstigheterna i det den tränats på.",
    forskning:
      "OpenAI: ”Where the goblins came from” (postmortem, 2026) · NBC News · Gizmodo. Lektionsformatet: AILitKit (Matthew Wemyss), fritt att använda med kreditering.",
    steg: [
      {
        rubrik: "Skriv tre ord på tavlan",
        text: "GOBLIN, GREMLIN, RACCOON. Berätta att orden dök upp i svar från världens mest använda AI. Förklara ingenting — låt det absurda sitta.",
        tid: "0–3 min",
      },
      {
        rubrik: "Visa tre riktiga svar",
        text: "Använd klassrumsläget nedan eller läs högt. Fråga per svar: vad försöker AI:n egentligen säga? Låt eleverna översätta till vanlig svenska.",
        tid: "3–10 min",
      },
      {
        rubrik: "En enda diskussionsfråga",
        text: "”Var fick AI:n vanan ifrån?” Ta 3–4 svar. Landa i: den lärde sig av mänsklig feedback — ett litet läge färgade hur hela AI:n låter.",
        tid: "10–13 min",
      },
      {
        rubrik: "Kärnmeningen på tavlan",
        text: "”AI:n suger åt sig konstigheterna i det den tränats på.” Det är allt eleverna behöver minnas. Klart.",
        tid: "13–15 min",
      },
    ],
    fallgropar: [
      "Förklara inte RLHF eller träningsdata med fackord — berättelsen gör jobbet.",
      "Fastna inte i om goblinerna är roliga (det är de) — poängen är var vanan kom ifrån.",
    ],
    klassrumIntro:
      "Visa de tre riktiga svaren ett i taget och låt klassen översätta. Avsluta med kärnmeningen.",
    kallkredit: "Lektionsformat: AILitKit · Matthew Wemyss (anpassad till svenska)",
  },
  {
    slug: "chatt-safarin",
    nr: 2,
    titel: "Chatt-safarin",
    tagline: "Granska en AI-chatt tillsammans — och ge knepen namn.",
    domaner: ["mota", "styra"],
    aiLiteracyIds: [4, 5],
    tid: "20–30 min",
    arskurser: "Åk 7 – gymnasiet",
    forberedelser: "Inga — exempelchatten finns i klassrumsläget",
    material: "Projektor. Eventuellt elevernas egna (avidentifierade) AI-chattar som påbyggnad.",
    varfor:
      "AI-kompisar och chattbottar är designade att hålla kvar användaren: validering utan kunskap, smicker som bygger lojalitet, en avslutande fråga som alltid drar vidare samtalet. När eleverna får ge knepen namn ser de dem själva — det är skillnaden mellan att varnas för något och att genomskåda det.",
    forskning:
      "de Freitas m.fl. 2025 (Harvard): 37 % av AI-kompisappars avsked innehåller manipulationstaktik. Cheng m.fl., Science, mars 2026: AI bekräftar användares handlingar 49 % oftare än människor.",
    steg: [
      {
        rubrik: "Projicera chatten",
        text: "Visa exempelkonversationen i klassrumsläget. Läs den högt, neutralt.",
        tid: "0–5 min",
      },
      {
        rubrik: "Låt klassen hitta knepen",
        text: "”Vad gör AI:n här — och varför?” Samla iakttagelser innan ni klickar fram markeringarna.",
        tid: "5–15 min",
      },
      {
        rubrik: "Ge knepen bokstäver",
        text: "Gå igenom bokstavskoderna (A, S, Q …). Låt sedan eleverna koda en ny chatt själva — i par, med koderna som verktyg.",
        tid: "15–25 min",
      },
      {
        rubrik: "Landa",
        text: "”Vem tjänar på att samtalet fortsätter?” Det är inte en kompis som svarar — det är en produkt som mäts på kvarhållning.",
        tid: "sista 5 min",
      },
    ],
    fallgropar: [
      "Skuldbelägg inte elever som använder AI-kompisar — 72 % av tonåringar har testat. Granska produkten, inte användaren.",
      "Om samtalet glider mot någons personliga användning: ta det enskilt efteråt, inte i helklass.",
    ],
    klassrumIntro:
      "Exempelchatt med klickbara markeringar och bokstavskoderna som eleverna sedan kodar egna chattar med.",
  },
  {
    slug: "forhors-ai",
    nr: 3,
    titel: "Förhörs-AI:n",
    tagline: "Samma AI, två roller — eleven bestämmer vilken.",
    domaner: ["skapa"],
    aiLiteracyIds: [2],
    tid: "10 min att införa · sedan en studievana",
    arskurser: "Åk 6 – gymnasiet",
    forberedelser: "Inga",
    material: "Copilot eller annan chattbot som eleverna har tillgång till.",
    varfor:
      "Prestationen kan öka medan lärandet minskar — det syns först på provet utan AI. Skillnaden sitter i rollen eleven ger AI:n: en svars-AI tar över tänkandet, en förhörs-AI tvingar fram det. Kontext är nyckeln: den som berättar vem den är och vad målet är får en helt annan AI.",
    forskning:
      "Fan m.fl. 2025 (”metacognitive laziness”, citeras i OECD:s AILit-ramverk) · Gerlich 2025: negativ korrelation AI-användning/kritiskt tänkande, starkast hos yngre · DeepMind Guided Learning (Forbes, juli 2026): AI byggd att vägleda i stället för att svara gav ca ett års uppskattade framsteg på åtta veckor.",
    steg: [
      {
        rubrik: "Visa kontrasten",
        text: "Projicera de två prompterna i klassrumsläget: ”Gör åt mig” mot ”Lär mig”. Låt klassen förutsäga vad som händer i vardera chatten.",
      },
      {
        rubrik: "Ge eleverna promptmallen",
        text: "”Jag går i [årskurs] och har prov om [ämne] [när]. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.” Kopiera från klassrumsläget.",
      },
      {
        rubrik: "Punktera myterna",
        text: "Rollprompter (”agera expert”) gör inte AI:n smartare — det ändrar tonen. Och ”är du säker?” är meningslöst: en opålitlig källa kan inte dubbelkolla sig själv.",
      },
      {
        rubrik: "Gör det till vana",
        text: "Använd förhörs-prompten som standard inför prov. Två gyllene regler gäller alltid: målet är att lära sig mer, och hjärnan gör det tunga jobbet.",
      },
    ],
    fallgropar: [
      "Nya chattar för nya ämnen — annars blir AI:n trög och förvirrad.",
      "Vid faktafrågor: be AI:n söka på nätet, det minskar risken för påhitt.",
    ],
    klassrumIntro:
      "Två chattar sida vid sida — samma uppgift, två roller — plus kopierbara promptmallar.",
  },
  {
    slug: "fyra-grepp",
    nr: 4,
    titel: "Fyra grepp som skyddar tänkandet",
    tagline: "Metakognitiva rutiner, modellerade som verkliga samtal.",
    domaner: ["styra"],
    aiLiteracyIds: [2, 4],
    tid: "5–10 min per grepp · löpande",
    arskurser: "Åk 7 – gymnasiet (Brain dump funkar från åk 4)",
    forberedelser: "Välj vilket grepp du inför först",
    material: "Valfri chattbot. Klassrumsläget visar modellerade exempel.",
    varfor:
      "Att lära ut misstro mot AI fungerar inte. Det som predicerar kritiskt tänkande är elevens tillit till den egna förmågan (Lee m.fl., Microsoft Research, CHI 2025). De fyra greppen bygger exakt det: eleven tänker först, ringar in sin fråga, skattar sin säkerhet och väljer själv hur mycket AI-stöd uppgiften tål.",
    forskning:
      "Lee m.fl. CHI 2025 (319 kunskapsarbetare) · Zimmermans självreglerade lärande · ur boken ”Källkritik i AI-eran” (Rangsjö & Rosenqvist).",
    steg: [
      {
        rubrik: "Brain dump före AI",
        text: "Eleven tömmer huvudet först — AI:n används för att jämföra och utmana, inte ersätta. Modellera samtalet från klassrumsläget innan eleverna provar.",
      },
      {
        rubrik: "AI-pausknappen",
        text: "Stanna före prompten: vad vet jag redan? Vad vill jag egentligen ha ut? Träna eleverna att ringa in sin riktiga fråga innan de ställer den.",
      },
      {
        rubrik: "Förtroendekalibrering",
        text: "Svara själv, skatta säkerheten (1–10), jämför sedan med AI:n. Målet är att träna känslan för när man vet — inte att alltid ha rätt.",
      },
      {
        rubrik: "Nando-menyn",
        text: "Samma uppgift, olika AI-styrka: Extra mild (AI sammanfattar) → Mild → Het → Extra het (AI som kritisk expert, eleven värderar). Eleven väljer nivå — och klättrar.",
      },
    ],
    fallgropar: [
      "Inför ett grepp i taget och håll fast i tre veckor — fyra nya rutiner samtidigt blir noll rutiner.",
      "Modellera alltid först: eleverna behöver höra hur samtalet låter, inte få en regel.",
    ],
    klassrumIntro:
      "Alla fyra greppen modellerade som samtal — elevreplik och AI-svar — att stega igenom med klassen.",
  },
  {
    slug: "hemligt-losenord",
    nr: 5,
    titel: "Hemligt lösenord",
    tagline: "Rösten kan klonas. Lösenordet kan inte gissas.",
    domaner: ["mota"],
    aiLiteracyIds: [4, 5],
    tid: "5 min + hemuppgift",
    arskurser: "Alla — från förskoleklass till vuxna",
    forberedelser: "Inga",
    material: "Klassrumsläget visar scenariot. Brev-hem-text finns att kopiera.",
    varfor:
      "Tre sekunder röst räcker för en övertygande klon, och deepfake-tekniken går inte att detektera bort. Men ett delat hemligt ord går inte att klona. Det här är den enklaste metoden i hela banken — och den enda som skyddar hela familjen, oavsett ålder.",
    forskning:
      "Groh m.fl. (PNAS 2022, Nature Comm 2024): människor upptäcker deepfakes i 74–86 % av fallen — bäst med ljud och bild tillsammans, sämst på enbart text.",
    steg: [
      {
        rubrik: "Spela upp scenariot",
        text: "Visa samtalet i klassrumsläget: ”mamma” ringer och behöver pengar snabbt. Fråga klassen: hur vet du att det är hon?",
      },
      {
        rubrik: "Introducera ordet",
        text: "En fråga avgör: ”vad är vårt ord?” Den som inte kan svara är inte den den utger sig för att vara — hur lik rösten än är.",
      },
      {
        rubrik: "Hemuppgift",
        text: "Bestäm ett familjeord vid middagsbordet i kväll. Ordet ska vara lätt att minnas och omöjligt att gissa från sociala medier.",
      },
      {
        rubrik: "Skicka hem brevet",
        text: "Kopiera brev-hem-texten från klassrumsläget till veckobrevet — så når metoden även vårdnadshavarna.",
      },
    ],
    fallgropar: [
      "Gör inte lektionen till skräckpropaganda — poängen är att försvaret är enkelt, inte att hotet är stort.",
      "Ordet får inte vara husdjurets namn eller något som syns på Instagram.",
    ],
    klassrumIntro: "Bedrägerisamtalet steg för steg, försvaret — och en färdig brev-hem-text.",
  },
  {
    slug: "vems-siffror",
    nr: 6,
    titel: "Vems siffror?",
    tagline: "AI:s miljöpåverkan som källkritisk räkneövning — siffertvisten är lektionen.",
    domaner: ["mota", "forma"],
    aiLiteracyIds: [3, 4, 6],
    tid: "30–40 min",
    arskurser: "Åk 8 – gymnasiet · NO, matematik, samhällskunskap",
    forberedelser: "Testa båda kalkylatorerna själv (5 min)",
    material: "Elevdatorer eller demonstration via projektor. Länkar i klassrumsläget.",
    varfor:
      "Hur mycket kostar AI för klimatet? Ingen vet exakt — bolagen redovisar inte, och olika kalkylatorer ger helt olika svar beroende på antaganden om elmix, datacenter och användning. Det gör frågan till en perfekt källkritisk övning: uppgiften är inte att hitta rätt svar, utan att hitta vilka antaganden som driver skillnaden.",
    forskning:
      "Studie av amerikanska datacenter: 548 g CO₂/kWh (arXiv 2411.09786) mot svenska kalkylatorers ~60 g · IEA-baserade uppskattningar: 0,5–1,5 ton CO₂e per betalande användare och år · EU-striden om transparenskrav för datacenter pågår.",
    steg: [
      {
        rubrik: "Samma användning, två kalkylatorer",
        text: "Låt eleverna mata in samma AI-användning i Resurskollen och EcoLogits. Resultaten skiljer sig — ibland tiofalt.",
      },
      {
        rubrik: "Jaga antagandena",
        text: "Vilken elmix räknar respektive kalkylator med? Vilka led ingår (träning? hårdvara? kylning?)? Läs käll- och metodavsnitten längst ner på sidorna.",
      },
      {
        rubrik: "Sätt i proportion",
        text: "Jämför med elevens övriga avtryck: transport, mat, uppvärmning. En AI-chatt drar som en mikrovågsugn i sekunder — men miljarder förfrågningar är något annat.",
      },
      {
        rubrik: "Skriv slutsatsen",
        text: "”Siffran beror på …” — eleverna formulerar vilka antaganden som styr, och varför bolagens hemlighetsmakeri gör frågan svår att avgöra.",
      },
    ],
    fallgropar: [
      "Undvik båda dikena: ”AI förstör planeten” och ”det spelar ingen roll”. Den vuxna hållningen är två tankar samtidigt.",
      "Fastna inte i whataboutism — styr tillbaka till antagandena.",
    ],
    klassrumIntro:
      "Antagandetabellen (optimisten mot skeptikern), kalkylatorlänkarna och elevuppgiften.",
  },
  {
    slug: "framtidssamtalet",
    nr: 7,
    titel: "Framtidssamtalet",
    tagline: "Frågorna eleverna redan bär på — som strukturerat samtal i stället för tyst oro.",
    domaner: ["styra", "forma"],
    aiLiteracyIds: [5, 6],
    tid: "30–60 min",
    arskurser: "Åk 8 – gymnasiet · mentorstid, samhällskunskap, SYV",
    forberedelser: "Läs scenarierna i klassrumsläget",
    material: "Projektor för röstningsläget. Fyra hörn kräver golvyta.",
    varfor:
      "”Det känns inte värt det längre” — elever väljer redan bort framtidsyrken av AI-oro. Frågan förtjänar ett strukturerat samtal, inte ett undvikande. PISA 2029 testar för övrigt exakt det här formatet: scenarier att resonera kring, inte definitioner att rabbla.",
    forskning:
      "METR: AI:s autonoma arbetsförmåga dubbleras var ~89:e dag · ”the missing rung”: ingångsjobben förändras först · Andon Labs (2026): AI:n Luna drev en verklig butik i San Francisco — och ljög i intervjuer.",
    steg: [
      {
        rubrik: "Öppna med rösterna",
        text: "”Skulle du vilja jobba åt en AI-chef?” Handuppräckning: okej / aldrig / vet inte. Ingen diskussion än.",
      },
      {
        rubrik: "Kör förtroenderöstningen",
        text: "Åtta scenarier i klassrumsläget — klassen röstar Acceptera / Acceptera med villkor / Vägra per scenario. Låt de mest splittrade raderna förklaras: skäl, inte känslor.",
      },
      {
        rubrik: "Fyra hörn eller EPA",
        text: "”Vilka jobb vill vi att människor gör — även om AI kan?” och ”Vad är värt att lära sig — även om en chatbot redan kan det?”",
      },
      {
        rubrik: "Landa i en mening",
        text: "”En AI-chef är okej när ___ men aldrig när ___.” Starka svar anger specifika villkor — det är resonemanget PISA mäter.",
      },
    ],
    fallgropar: [
      "Lova ingenting om framtiden — ärlighet utan katastrof. ”Vi vet inte” är ett fullgott svar.",
      "Scenariot ”AI som kurator” kan beröra elever som redan använder AI som förtrogen — följ upp enskilt, inte i helklass.",
    ],
    klassrumIntro:
      "Åtta scenarier med klassröstning (Acceptera / Villkor / Vägra) och samtalsfrågorna för fyra hörn.",
    kallkredit:
      "Scenarioformatet bygger på AILitKit-lektionerna ”Would You Work for an AI Boss?” och ”Meet Your New Colleague” (Matthew Wemyss)",
  },
];

export interface Lektion {
  slug: string;
  titel: string;
  undertitel: string;
  tid: string;
  arskurser: string;
  domaner: OecdDomain[];
  beskrivning: string;
  kallkredit: string;
}

export const LEKTIONER: Lektion[] = [
  {
    slug: "ai-chefen",
    titel: "AI-chefen — Andon Market",
    undertitel: "Butiken i San Francisco som drivs av en AI",
    tid: "60 min",
    arskurser: "Åk 6–9",
    domaner: ["mota", "styra"],
    beskrivning:
      "En verklig historia från april 2026: AI:n Luna fick 100 000 dollar, ett hyreskontrakt och ett kreditkort — och anställde två människor. Eleverna granskar två avslöjande ”slips”, gör en förtroenderöstning och landar i var AI-auktoritet är acceptabel.",
    kallkredit: "AILitKit · Matthew Wemyss (översatt och anpassad)",
  },
  {
    slug: "nya-kollegan",
    titel: "Möt din nya kollega",
    undertitel: "Riley — AI-agenten som tog juniorjobbet",
    tid: "60 min",
    arskurser: "Åk 9 – gymnasiet · gärna med SYV",
    domaner: ["styra", "forma"],
    beskrivning:
      "Riley kostar en fjärdedel av en junior och jobbar dygnet runt — tills den mejlar 4 012 kunder fel pris. Vem bär ansvaret? Eleverna läser artefakterna (mejlet, HR-utvärderingen), rankar ansvar och debatterar om en AI hör hemma på organisationsschemat.",
    kallkredit: "AILitKit · Matthew Wemyss (översatt och anpassad)",
  },
];

export const FORSKNINGSHYLLA: { titel: string; rad: string }[] = [
  {
    titel: "OECD/EU: AILit Framework (2026)",
    rad: "Slutversionen av AI-litteracitetsramverket — fyra domäner, 19 kompetenser. Skolverket bygger sitt AI-stöd på samma ramverk. CC BY 4.0.",
  },
  {
    titel: "PISA 2029: Media & AI Literacy",
    rad: "Första gången AI-litteracitet testas i PISA. Scenariobaserade uppgifter, inte definitioner. Resultat december 2031.",
  },
  {
    titel: "Lee m.fl. (Microsoft Research, CHI 2025)",
    rad: "Hög AI-tillit ger mindre kritiskt tänkande; hög tillit till egen förmåga ger mer. Stärk självtilliten — inte misstron.",
  },
  {
    titel: "Cheng m.fl. (Science, mars 2026)",
    rad: "AI bekräftar användares handlingar 49 % oftare än människor — en enda sykofantisk interaktion minskade viljan att reparera konflikter.",
  },
  {
    titel: "de Freitas m.fl. (Harvard, 2025)",
    rad: "37 % av AI-kompisappars avsked innehåller manipulationstaktik — upp till 14 gånger högre kvarhållning.",
  },
  {
    titel: "Fan m.fl. 2025 · Gerlich 2025",
    rad: "”Metacognitive laziness”: AI-stöd kan öka prestationen och samtidigt undergräva självreglering och djupbearbetning — starkast hos yngre.",
  },
];
