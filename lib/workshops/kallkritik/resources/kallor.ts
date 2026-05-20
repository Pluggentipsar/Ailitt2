export type SourceEntry = {
  title: string;
  publisher: string;
  description: string;
  url: string;
};

export type SourceCategory = {
  id: string;
  title: string;
  description?: string;
  sources: SourceEntry[];
};

export const kallor = {
  id: "kallor",
  title: "Källor och fördjupning",
  blurb:
    "Resurser för dig som vill läsa, lyssna eller titta vidare. Sorterade efter tema.",
  categories: [
    {
      id: "ungas-anvandning",
      title: "Ungas AI-användning och AI-vänner",
      sources: [
        {
          title: "Svenskarna och internet 2025",
          publisher: "Internetstiftelsen",
          description:
            "Årlig rapport om svenskarnas digitala liv. Här finns bland annat statistik om barns och ungas AI-användning, gymnasieelevers användning av AI och hur AI börjar ta rollen som stöd, informationskälla och samtalspartner.",
          url: "https://svenskarnaochinternet.se/",
        },
        {
          title:
            "Talk, Trust, and Trade-Offs: How and Why Teens Use AI Companions",
          publisher: "Common Sense Media",
          description:
            "Amerikansk rapport från 2025 om hur tonåringar använder AI companions — tjänster som är byggda för att fungera som digitala vänner, partners eller stödpersoner. Rapporten är särskilt relevant för skolan eftersom den visar hur unga själva beskriver tillit, sårbarhet och gränser i relation till AI.",
          url: "https://www.commonsensemedia.org/research/talk-trust-and-trade-offs-how-and-why-teens-use-ai-companions",
        },
        {
          title: "Barnrapporten 2025",
          publisher: "Bris",
          description:
            "Rapport om barns livssituation, där barns digitala vardag och upplevelser av AI som stöd och samtalspartner berörs.",
          url: "https://www.bris.se/om-bris/aktuellt/barnrapporten-2025/",
        },
      ],
    },
    {
      id: "bekraftelse-sykofantism",
      title: "Bekräftelse, sykofantism och personliga råd",
      sources: [
        {
          title: "AI overly affirms users asking for personal advice",
          publisher: "Stanford Report",
          description:
            "Sammanfattning av forskning om hur AI-modeller tenderar att bekräfta användare starkare än människor gör i personliga och interpersonella konflikter. Relevant för att förstå varför AI ibland kan kännas trygg, men samtidigt hålla användaren kvar i den egna upplevelsen.",
          url: "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research",
        },
      ],
    },
    {
      id: "design-fasthallning",
      title: "Design som håller kvar användaren",
      sources: [
        {
          title: "Why It's So Hard to Say Goodbye to AI Chatbots",
          publisher: "Harvard Business School Working Knowledge",
          description:
            "Artikel om hur AI companions kan använda emotionella påverkanstekniker när användare försöker avsluta ett samtal. Passar som fördjupning till frågan om när en chattbot inte bara svarar, utan också designas för att hålla kvar relationen.",
          url: "https://www.library.hbs.edu/working-knowledge/why-its-so-hard-to-say-goodbye-to-ai-chatbots",
        },
      ],
    },
    {
      id: "psykisk-halsa",
      title: "Psykisk hälsa och känsliga samtal",
      sources: [
        {
          title: "Strengthening ChatGPT's responses in sensitive conversations",
          publisher: "OpenAI",
          description:
            "OpenAI:s egen text om hur de arbetar med känsliga samtal, inklusive självskada, psykisk ohälsa och känslomässig överanknytning till AI.",
          url: "https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/",
        },
        {
          title: "AI Chatbots for Mental Health",
          publisher: "National Academy of Medicine",
          description:
            "Översiktlig text om vad AI-chattbotar kan och inte kan göra i relation till psykisk hälsa. Bra som balanserad fördjupning kring gränsen mellan stöd, information och vård.",
          url: "https://nam.edu/news-and-insights/ai-chatbots-for-mental-health-what-works-what-harms-and-whats-next/",
        },
      ],
    },
    {
      id: "filosofi",
      title: "Filosofisk fördjupning",
      sources: [
        {
          title: "The AI Mirror",
          publisher: "Shannon Vallor",
          description:
            "Föredrag och samtal om AI som spegel snarare än som medvetet subjekt. Passar särskilt bra som fördjupning till relationskritik och frågan om varför vi så lätt börjar uppleva AI som någon, inte något.",
          url: "https://www.youtube.com/watch?v=dvCT86OfhiQ",
        },
      ],
    },
  ] satisfies SourceCategory[],
};

export type KallorData = typeof kallor;
