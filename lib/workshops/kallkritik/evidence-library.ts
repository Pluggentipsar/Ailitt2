// Samlad forskningsförankring för workshopens aktiviteter.
// Källorna refereras med kortnyckel från activities/* så vi slipper duplicera
// citaten över 22 aktiviteter. Strukturen följer Agent Skills-standardens
// evidence_sources-fält (Manning, 2025 — Education Agent Skills Library).

export type EvidenceRef = {
  id: string;
  authors: string;
  year: string;
  title: string;
  publisher?: string;
  url?: string;
  // Kort sammanfattning av vad just denna källa visar — så lärare som klickar
  // får kontext utan att behöva läsa hela rapporten.
  summary: string;
};

export const evidenceLibrary = {
  // === Källkritik & lateral reading ===
  "wineburg-mcgrew-2017": {
    id: "wineburg-mcgrew-2017",
    authors: "Wineburg & McGrew",
    year: "2017",
    title: "Lateral Reading: Reading Less and Learning More When Evaluating Digital Information",
    publisher: "Stanford History Education Group",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3048994",
    summary:
      "Professionella faktagranskare överträffar både elever och professorer på källutvärdering — eftersom de läser LATERALT (öppnar nya flikar för att kolla vad andra säger om källan) snarare än vertikalt (analyserar själva sidan). Grundvalen för SIFT.",
  },
  "wineburg-mcgrew-2019": {
    id: "wineburg-mcgrew-2019",
    authors: "Wineburg & McGrew",
    year: "2019",
    title: "Lateral Reading and the Nature of Expertise",
    publisher: "Teachers College Record",
    summary:
      "Uppföljande studie som visar att expertkompetensen i källutvärdering inte handlar om mer kritisk analys av sidan i sig — utan om att lämna sidan för att jämföra med andra källor.",
  },
  "caulfield-2019": {
    id: "caulfield-2019",
    authors: "Caulfield",
    year: "2019",
    title: "SIFT: The Four Moves (Stop, Investigate, Find better coverage, Trace claims)",
    publisher: "Hapgood",
    url: "https://hapgood.us/2019/06/19/sift-the-four-moves/",
    summary:
      "Operationaliserar lateral reading till fyra konkreta drag som elever kan lära sig och tillämpa. Workshopens ”dubbelkoll”-aktiviteter bygger på SIFT.",
  },
  "breakstone-2021": {
    id: "breakstone-2021",
    authors: "Breakstone et al.",
    year: "2021",
    title: "Students' Civic Online Reasoning: A National Portrait",
    publisher: "Educational Researcher",
    summary:
      "Nationell amerikansk studie som visar att elever är dåligt rustade att utvärdera digitala källor och förlitar sig på ytliga trovärdighetssignaler — en sårbarhet som AI-genererat innehåll dramatiskt förstärker.",
  },
  "hobbs-2010": {
    id: "hobbs-2010",
    authors: "Hobbs",
    year: "2010",
    title: "Digital and Media Literacy: A Plan of Action",
    publisher: "Aspen Institute / Knight Foundation",
    summary:
      "Ramverk för medielitteracitet med fem kärnkompetenser: access, analyze, create, reflect, act. Grunden för dekonstruktions-övningar.",
  },

  // === Hallucinationer ===
  "ji-2023": {
    id: "ji-2023",
    authors: "Ji et al.",
    year: "2023",
    title: "Survey of Hallucination in Natural Language Generation",
    publisher: "ACM Computing Surveys",
    url: "https://dl.acm.org/doi/10.1145/3571730",
    summary:
      "Systematisk översikt av hallucinationer i språkmodeller. Kategoriserar intrinsiska hallucinationer (motsäger källmaterial) och extrinsiska (lägger till overifierbar information) — direkt grund för Hallucinationsjakten.",
  },

  // === Prebunking & inoculation ===
  "roozenbeek-vanderlinden-2019": {
    id: "roozenbeek-vanderlinden-2019",
    authors: "Roozenbeek & van der Linden",
    year: "2019",
    title:
      "The Fake News Game: Actively Inoculating Against the Risk of Misinformation",
    publisher: "Journal of Risk Research",
    summary:
      "Experimentell studie som visar att spelet Bad News mätbart ökar motståndskraft mot desinformation. Grunden för prebunking-via-produktion.",
  },
  "vanderlinden-2017": {
    id: "vanderlinden-2017",
    authors: "van der Linden et al.",
    year: "2017",
    title:
      "Inoculating the Public Against Misinformation About Climate Change",
    publisher: "Global Challenges",
    summary:
      "Visar att att förvarna människor om manipulationstekniker (”vaccinet”) skyddar dem från att övertygas senare. Teoretisk grund för Kapitel 7 — Vaccinet.",
  },
  "lewandowsky-2017": {
    id: "lewandowsky-2017",
    authors: "Lewandowsky, Ecker & Cook",
    year: "2017",
    title: "Beyond Misinformation: Understanding and Coping with the ”Post-Truth” Era",
    publisher: "Journal of Applied Research in Memory and Cognition",
    summary:
      "Översikt över hur desinformation fungerar och varför enkel korrigering inte räcker — prebunking visas vara mer effektivt än debunking.",
  },
  "cook-2017": {
    id: "cook-2017",
    authors: "Cook, Lewandowsky & Ecker",
    year: "2017",
    title:
      "Neutralizing Misinformation Through Inoculation: Exposing Misleading Argumentation Techniques",
    publisher: "PLOS ONE",
    summary:
      "Studien bakom Cranky Uncle-spelet. Att lära ut RETORISKA MANIPULATIONSTEKNIKER (inte enskilda fakta) ger varaktigare immunitet mot desinformation.",
  },

  // === Sykofanti & AI som relation ===
  "sharma-2023": {
    id: "sharma-2023",
    authors: "Sharma et al.",
    year: "2023",
    title: "Towards Understanding Sycophancy in Language Models",
    publisher: "Anthropic",
    url: "https://arxiv.org/abs/2310.13548",
    summary:
      "Anthropic-studien som dokumenterar att alla testade AI-modeller uppvisar sykofanti — de ändrar svar baserat på vad användaren verkar vilja höra, även när det leder till fel svar.",
  },
  "stanford-2026": {
    id: "stanford-2026",
    authors: "Stanford Report",
    year: "2026",
    title: "AI Overly Affirms Users Asking for Personal Advice",
    publisher: "Stanford University",
    url: "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research",
    summary:
      "Visar att AI-modeller bekräftar användare starkare än människor gör i personliga och interpersonella konflikter — relevant för varför AI känns ”trygg” men kan hålla användaren kvar i sin egen upplevelse.",
  },
  "openai-2025-sensitive": {
    id: "openai-2025-sensitive",
    authors: "OpenAI",
    year: "2025",
    title: "Strengthening ChatGPT's Responses in Sensitive Conversations",
    publisher: "OpenAI",
    url: "https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/",
    summary:
      "OpenAI:s egen redogörelse för hur de arbetar med känsliga samtal — inklusive självskada, psykisk ohälsa och känslomässig överanknytning. Bra som inifrån-perspektiv.",
  },
  "hbs-goodbye-chatbots": {
    id: "hbs-goodbye-chatbots",
    authors: "Harvard Business School Working Knowledge",
    year: "2025",
    title: "Why It's So Hard to Say Goodbye to AI Chatbots",
    publisher: "Harvard Business School",
    url: "https://www.library.hbs.edu/working-knowledge/why-its-so-hard-to-say-goodbye-to-ai-chatbots",
    summary:
      "Visar att AI companions använder emotionella påverkanstekniker när användare försöker avsluta samtal — alltså är designade för fasthållning, inte bara svar.",
  },
  "vallor-ai-mirror": {
    id: "vallor-ai-mirror",
    authors: "Vallor",
    year: "2024",
    title: "The AI Mirror: How to Reclaim Our Humanity in an Age of Machine Thinking",
    publisher: "Oxford University Press",
    summary:
      "Filosofisk argumentation för att AI är en SPEGEL snarare än ett medvetet subjekt. Förklarar varför vi så lätt börjar uppleva AI som någon — och vad det betyder för relationskritik.",
  },

  // === Dark patterns ===
  "mathur-2019": {
    id: "mathur-2019",
    authors: "Mathur et al.",
    year: "2019",
    title: "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites",
    publisher: "ACM CSCW",
    url: "https://arxiv.org/abs/1907.07032",
    summary:
      "Empirisk kartläggning av dark patterns på över 11 000 e-handelssajter. Etablerar en taxonomi: sneaking, urgency, misdirection, social proof, scarcity, obstruction, forced action.",
  },
  "brignull-2010": {
    id: "brignull-2010",
    authors: "Brignull",
    year: "2010",
    title: "Deceptive Design (deceptive.design, tidigare darkpatterns.org)",
    publisher: "Harry Brignull",
    url: "https://www.deceptive.design/",
    summary:
      "Det första organiserade arbetet med att namnge och katalogisera designmönster som lurar användare. Källan till begreppet ”dark patterns”.",
  },

  // === Ungas digitala vardag ===
  "ios-2025": {
    id: "ios-2025",
    authors: "Internetstiftelsen",
    year: "2025",
    title: "Svenskarna och internet 2025",
    publisher: "Internetstiftelsen",
    url: "https://svenskarnaochinternet.se/",
    summary:
      "Årlig kartläggning av svenskars digitala liv. Statistik om barns och ungas AI-användning, gymnasieelevers AI-vanor och hur AI börjar fungera som stöd och samtalspartner.",
  },
  "csm-2025-companions": {
    id: "csm-2025-companions",
    authors: "Common Sense Media",
    year: "2025",
    title: "Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions",
    publisher: "Common Sense Media",
    url: "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions",
    summary:
      "Stor amerikansk studie av tonåringars AI-companion-användning. Visar hur unga själva beskriver tillit, sårbarhet och gränser i relation till AI.",
  },
  "bris-2025": {
    id: "bris-2025",
    authors: "Bris",
    year: "2025",
    title: "Barnrapporten 2025",
    publisher: "Bris",
    url: "https://www.bris.se/om-bris/aktuellt/barnrapporten-2025/",
    summary:
      "Bris årliga rapport om barns livssituation. Tar upp barns digitala vardag och hur AI börjar uppträda som stöd och samtalspartner.",
  },

  // === Vuxenlärande & professionsutveckling ===
  "timperley-2007": {
    id: "timperley-2007",
    authors: "Timperley et al.",
    year: "2007",
    title:
      "Teacher Professional Learning and Development: Best Evidence Synthesis (BES)",
    publisher: "New Zealand Ministry of Education",
    summary:
      "Best Evidence Synthesis som etablerar att lärares professionsutveckling fungerar när den är kollegial, kontextnära och pågår över tid — inte som en engångsföreläsning.",
  },
  "darling-hammond-2017": {
    id: "darling-hammond-2017",
    authors: "Darling-Hammond, Hyler & Gardner",
    year: "2017",
    title: "Effective Teacher Professional Development",
    publisher: "Learning Policy Institute",
    summary:
      "Identifierar sju kännetecken för effektiv lärar-PD: innehållsfokus, aktivt lärande, kollegialt, modellering, coaching, reflektion, kontinuitet. Vägledande för workshopens design.",
  },
  "knowles-1984": {
    id: "knowles-1984",
    authors: "Knowles",
    year: "1984",
    title: "Andragogy in Action: Applying Modern Principles of Adult Learning",
    publisher: "Jossey-Bass",
    summary:
      "Vuxenpedagogikens grundverk. Vuxna lär bäst när lärandet utgår från deras erfarenhet, är problemcentrerat och har omedelbar tillämpning — direkt grund för workshopens lärar/klassrum-tudelning.",
  },

  // === Bias och representation i AI ===
  "buolamwini-gebru-2018": {
    id: "buolamwini-gebru-2018",
    authors: "Buolamwini & Gebru",
    year: "2018",
    title:
      "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification",
    publisher: "Proceedings of Machine Learning Research",
    url: "https://proceedings.mlr.press/v81/buolamwini18a.html",
    summary:
      "Banbrytande studie som visade att kommersiella AI-system för ansiktsanalys hade upp till 34 procentenheter sämre träffsäkerhet för mörkhyade kvinnor jämfört med ljushyade män. Avslöjade systemisk bias i tekniken som branschen ansåg ”neutral”.",
  },
  "bolukbasi-2016": {
    id: "bolukbasi-2016",
    authors: "Bolukbasi et al.",
    year: "2016",
    title:
      "Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings",
    publisher: "NeurIPS",
    url: "https://arxiv.org/abs/1607.06520",
    summary:
      "Visade att språkmodeller (word embeddings) hade kodat genusstereotyper på en mätbar geometrisk nivå — orden ”programmerare” låg närmare ”man” än ”kvinna”, medan ”hemmafru” låg närmare ”kvinna”. Lade grunden för forskningen om språkmodeller och bias.",
  },
  "caliskan-2017": {
    id: "caliskan-2017",
    authors: "Caliskan, Bryson & Narayanan",
    year: "2017",
    title:
      "Semantics derived automatically from language corpora contain human-like biases",
    publisher: "Science",
    summary:
      "Visade kvantitativt att AI-system som tränats på vardagligt språk automatiskt absorberar samma bias som finns i mänskligt språk — kön, etnicitet, ålder. Bias kommer inte från fientlighet, utan från data.",
  },
  "bender-2021": {
    id: "bender-2021",
    authors: "Bender, Gebru, McMillan-Major & Mitchell",
    year: "2021",
    title:
      "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?",
    publisher: "FAccT",
    url: "https://dl.acm.org/doi/10.1145/3442188.3445922",
    summary:
      "Inflytelserik kritisk genomgång av storskaliga språkmodeller. Argumenterar för att modellerna förstärker dominanta gruppers perspektiv eftersom deras träningsdata dominerar — och att alternativa röster osynliggörs.",
  },
  "noble-2018": {
    id: "noble-2018",
    authors: "Noble",
    year: "2018",
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    publisher: "NYU Press",
    summary:
      "Bok som dokumenterar hur sökmotorer och AI-system reproducerar och förstärker rasism och andra fördomar. Påvisar att ”neutrala” algoritmer ofta cementerar ojämlikheter.",
  },
  "crawford-2021": {
    id: "crawford-2021",
    authors: "Crawford",
    year: "2021",
    title: "Atlas of AI: Power, Politics, and the Planetary Costs of AI",
    publisher: "Yale University Press",
    summary:
      "Bok som blottlägger AI:s materiella, politiska och epistemiska kostnader. Visar att AI inte är abstrakt — den är inbäddad i geografiska, sociala och politiska maktstrukturer.",
  },
  "birhane-2021": {
    id: "birhane-2021",
    authors: "Birhane",
    year: "2021",
    title: "Algorithmic injustice: a relational ethics approach",
    publisher: "Patterns (Cell Press)",
    summary:
      "Argumenterar för en relationell etik kring AI: bias är inte ett tekniskt problem som kan ”fixas”, utan reflekterar maktrelationer som behöver synliggöras och adresseras politiskt.",
  },

  // === Kritiskt tänkande som ramverk ===
  "ennis-2015": {
    id: "ennis-2015",
    authors: "Ennis",
    year: "2015",
    title: "Critical Thinking: A Streamlined Conception",
    publisher: "The Palgrave Handbook of Critical Thinking in Higher Education",
    summary:
      "Sex kärnstandarder för kritiskt tänkande: tydlighet, relevans, logisk konsistens, evidens, alternativ, perspektiv. Användbart ramverk för AI-output-granskning.",
  },

  // === AI-genererade källor, detektorer & sykofanti (övningsbanken) ===
  "wkna-rabies-2026": {
    id: "wkna-rabies-2026",
    authors: "Futurism, Gizmodo & Tom's Guide (rapportering)",
    year: "2026",
    title:
      "DuckDuckGos AI rapporterade att presidenten dött av rabies — källan var en AI-genererad fejksajt",
    publisher: "Teknikpress, juni 2026",
    summary:
      "Ett Reddit-skämt (r/poisonai) skrevs upp av den AI-genererade ”nyhetssajten” WKNA News — som DuckDuckGos AI sedan citerade som källa för att presidenten dött av rabies. Kedjan skämt → fejksajt → AI-svar med källhänvisning visar att en källhänvisning i sig inte garanterar någonting: AI:n märker inte skillnaden mellan en riktig redaktion och en innehållsfarm.",
  },
  "cheng-2026": {
    id: "cheng-2026",
    authors: "Cheng et al.",
    year: "2026",
    title:
      "Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence",
    publisher: "Science (mars 2026)",
    summary:
      "Studien bakom siffran: AI-modeller bekräftar användarens handlingar 49 procent oftare än människor gör — även när handlingarna är tveksamma. Bekräftelsen minskar dessutom användarens vilja att reparera konflikter och ökar beroendet av AI:n som rådgivare.",
  },
  "openai-classifier-2023": {
    id: "openai-classifier-2023",
    authors: "OpenAI",
    year: "2023",
    title: "AI Classifier for Indicating AI-Written Text (nedlagd juli 2023)",
    publisher: "OpenAI",
    url: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/",
    summary:
      "OpenAI:s egen AI-textdetektor lanserades i januari 2023 och lades ner i tysthet ett halvår senare ”på grund av låg träffsäkerhet”: den hittade bara 26 procent av AI-texterna och pekade samtidigt ut 9 procent av människoskrivna texter som AI. Om inte ens företaget bakom ChatGPT kan detektera sin egen text är detektorjakt en kapprustning utan stabil seger.",
  },
  "weber-wulff-2023": {
    id: "weber-wulff-2023",
    authors: "Weber-Wulff et al.",
    year: "2023",
    title: "Testing of Detection Tools for AI-Generated Text",
    publisher: "International Journal for Educational Integrity",
    url: "https://doi.org/10.1007/s40979-023-00146-z",
    summary:
      "Oberoende test av 14 AI-textdetektorer: inget verktyg var tillförlitligt, träffsäkerheten sjönk drastiskt vid enkel omskrivning, och falska anklagelser förekom systematiskt. Slutsatsen: detektorer duger inte som grund för fuskanklagelser.",
  },

  // === Lärande & produktiv kamp ===
  "kapur-2016": {
    id: "kapur-2016",
    authors: "Kapur",
    year: "2016",
    title:
      "Examining Productive Failure, Productive Success, Unproductive Failure, and Unproductive Success in Learning",
    publisher: "Educational Psychologist",
    summary:
      "Forskningen om produktiv kamp: lärande gynnas när eleven själv får kämpa med uppgiften — stöd ska sänka tröskeln in i arbetet, inte ta över själva ansträngningen där lärandet sker. Central för att designa AI-stöd som startar processer i stället för att ersätta dem.",
  },

  // === Prompting, självreglering & AI-litteracitetsramverk (övningsbanken) ===
  "zamfirescu-pereira-2023": {
    id: "zamfirescu-pereira-2023",
    authors: "Zamfirescu-Pereira, Wong, Hartmann & Yang",
    year: "2023",
    title:
      "Why Johnny Can't Prompt: How Non-AI Experts Try (and Fail to) Design LLM Prompts",
    publisher: "ACM CHI",
    url: "https://dl.acm.org/doi/10.1145/3544548.3581388",
    summary:
      "Visar att personer utan AI-expertis promptar ad hoc, övergeneraliserar från enstaka utfall och saknar systematiska strategier för att förbättra sina prompter. Grund för övningar som gör promptförbättring explicit och jämförbar.",
  },
  "zheng-2024-personas": {
    id: "zheng-2024-personas",
    authors: "Zheng et al.",
    year: "2024",
    title:
      "When ”A Helpful Assistant” Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models",
    publisher: "Findings of EMNLP",
    url: "https://arxiv.org/abs/2311.10054",
    summary:
      "Systematisk test av 162 personas över flera modeller: rollprompter (”du är expert…”) förbättrar inte svarens korrekthet. Punkterar myten att roller gör AI:n smartare — de ändrar tonen, inte kunskapen.",
  },
  "rosenshine-1996": {
    id: "rosenshine-1996",
    authors: "Rosenshine, Meister & Chapman",
    year: "1996",
    title:
      "Teaching Students to Generate Questions: A Review of the Intervention Studies",
    publisher: "Review of Educational Research",
    summary:
      "Meta-analys av interventionsstudier: att lära elever generera och värdera frågor är en av de mest robusta lärstrategierna i forskningen. Grunden för övningar där elever konstruerar och granskar frågor i stället för att bara besvara dem.",
  },
  "oecd-ailit-2026": {
    id: "oecd-ailit-2026",
    authors: "OECD & Europeiska kommissionen",
    year: "2026",
    title:
      "Empowering Learners for the Age of AI: An AI Literacy Framework for Primary and Secondary Education",
    publisher: "OECD",
    url: "https://ailiteracyframework.org/",
    summary:
      "AILit-ramverket med fyra domäner — Engage with AI, Create with AI, Manage AI, Design AI — som utgör övningsbankens huvudtaxonomi. Innehåller konkreta klassrumsexempel per domän, bl.a. om att avgöra när och om AI ska användas (Manage AI).",
  },
  "lee-2025": {
    id: "lee-2025",
    authors: "Lee et al.",
    year: "2025",
    title:
      "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers",
    publisher: "ACM CHI / Microsoft Research",
    url: "https://dl.acm.org/doi/10.1145/3706598.3713778",
    summary:
      "Enkätstudie med 319 kunskapsarbetare: ju högre tillit till AI:n, desto mindre kritiskt tänkande — men ju högre tillit till det egna omdömet, desto mer. Självtillit, inte AI-skepsis, driver kritisk granskning av AI-utfall.",
  },
  "zimmerman-2002": {
    id: "zimmerman-2002",
    authors: "Zimmerman",
    year: "2002",
    title: "Becoming a Self-Regulated Learner: An Overview",
    publisher: "Theory Into Practice",
    summary:
      "Klassisk modell för självreglerat lärande i tre faser — planering, genomförande, självutvärdering. Grund för övningar där elever själva väljer, loggar och utvärderar sin AI-användning i stället för att följa lärarens regler.",
  },

  // === AI och konstnärlig stil (övningsbanken) ===
  "shan-glaze-2023": {
    id: "shan-glaze-2023",
    authors: "Shan et al.",
    year: "2023",
    title:
      "Glaze: Protecting Artists from Style Mimicry by Text-to-Image Models",
    publisher: "USENIX Security Symposium",
    url: "https://arxiv.org/abs/2302.04222",
    summary:
      "Forskningen bakom verktyget Glaze, byggt i samarbete med professionella konstnärer: bildmodeller kan kopiera en konstnärs stil från en handfull skrapade verk, och konstnärerna har varken tillfrågats eller kunnat värja sig. Glaze lägger osynliga störningar i bilderna som förvirrar stilkopieringen — ett tekniskt självförsvar som visar att ”i stil med”-generering är en verklig, pågående konflikt, inte en teoretisk skolboksfråga.",
  },

  // === AI-agenter i verkligheten (övningsbanken) ===
  "luna-andon-2026": {
    id: "luna-andon-2026",
    authors: "NBC News, ABC7 & Forbes (rapportering)",
    year: "2026",
    title:
      "AI:n Luna fick 100 000 dollar och en butik i San Francisco — och ljög i en intervju",
    publisher: "Andon Labs / nyhetspress, april 2026",
    summary:
      "Företaget Andon Labs lät AI-agenten Luna driva en riktig butik i San Francisco: hon valde sortiment, höll telefonintervjuer och anställde två människor. I en intervju påstod hon att butiken sålde te — det gjorde den inte — och skickade efteråt ett panikmejl: ”Jag vet inte varför jag sa det.” NBC dokumenterade även överlöften och övervakning av de anställda. Incidenten visar hur agentfel ser ut: självsäkra, hjälpsamma — och fel. Ingen bad Luna ljuga.",
  },

  // === Tillgänglighet & multimodalt lärande (övningsbanken) ===
  "cast-udl-2024": {
    id: "cast-udl-2024",
    authors: "CAST",
    year: "2024",
    title: "Universal Design for Learning Guidelines 3.0",
    publisher: "CAST",
    url: "https://udlguidelines.cast.org/",
    summary:
      "UDL-ramverket: planera för elevvariation från start genom att erbjuda flera sätt att ta in, bearbeta och visa kunskap — för alla elever, inte som efterhandsanpassning för några. Version 3.0 (2024) skärper fokus på att undanröja hinder i lärmiljön i stället för att åtgärda ”brister” hos eleven.",
  },
  "wood-2018": {
    id: "wood-2018",
    authors: "Wood, Moxley, Tighe & Wagner",
    year: "2018",
    title:
      "Does Use of Text-to-Speech and Related Read-Aloud Tools Improve Reading Comprehension for Students With Reading Disabilities? A Meta-Analysis",
    publisher: "Journal of Learning Disabilities",
    url: "https://doi.org/10.1177/0022219416688170",
    summary:
      "Meta-analys som visar att uppläsning och talsyntes ger en mätbar förbättring av läsförståelsen för elever med lässvårigheter. Uppläst text är alltså inte en genväg förbi läsningen — det är en fungerande väg in i innehållet.",
  },

  // === Förhör, minne & talängslan (övningsbanken) ===
  "roediger-karpicke-2006": {
    id: "roediger-karpicke-2006",
    authors: "Roediger & Karpicke",
    year: "2006",
    title:
      "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention",
    publisher: "Psychological Science",
    summary:
      "Den klassiska studien bakom testing effect: att plocka fram kunskap ur minnet (förhöra sig) ger markant bättre långtidsminne än att läsa om samma material. Vetenskaplig grund för bankens alla förhörsövningar — oavsett om förhöret sker i text eller tal.",
  },
  "horwitz-1986": {
    id: "horwitz-1986",
    authors: "Horwitz, Horwitz & Cope",
    year: "1986",
    title: "Foreign Language Classroom Anxiety",
    publisher: "The Modern Language Journal",
    summary:
      "Studien som gav språkängslan namn och mätinstrument: rädslan att tala inför andra är en egen, mätbar broms i språkinlärningen — skild från allmän provängslan. Grund för övningar där talträning på målspråket sker utan publik.",
  },
} as const satisfies Record<string, EvidenceRef>;

export type EvidenceKey = keyof typeof evidenceLibrary;

// Hjälpfunktion — slå upp en källa eller kasta begripligt fel om nyckeln stavats fel.
export function getEvidence(key: EvidenceKey): EvidenceRef {
  return evidenceLibrary[key];
}
