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
      "Visar att att förvarna människor om manipulationstekniker (”vaccinet”) skyddar dem från att övertygas senare. Teoretisk grund för Kapitel 6 — Vaccinet.",
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
} as const satisfies Record<string, EvidenceRef>;

export type EvidenceKey = keyof typeof evidenceLibrary;

// Hjälpfunktion — slå upp en källa eller kasta begripligt fel om nyckeln stavats fel.
export function getEvidence(key: EvidenceKey): EvidenceRef {
  return evidenceLibrary[key];
}
