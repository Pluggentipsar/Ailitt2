/**
 * AI-labbet — datastruktur för sandlådan på /mellanstadiet/labb.
 *
 * Bygger på SAILD-ramverket (Yue & Jong, 2025) — eleven som DESIGNER, inte
 * konsument. Varje station utgår från ett verkligt problem eleven har, inte
 * från en AI-funktion. Eleven konfigurerar prompten (skriver in sitt ämne i
 * platshållare) — det är prompten som är artefakten de bygger.
 *
 * Strukturen speglar Tänkartrappan: prompten är STEG 2 (AI hjälper), men varje
 * station ger granskningstips (STEG 3) och en variation (STEG 4: iterera).
 *
 * Inga API-anrop. Eleverna kopierar prompten och klistrar in i Skolup AI (eller
 * vilken annan chattbot/bild-AI skolan har tillgång till).
 */

export type LabbCategory =
  | "lar-dig"
  | "skriv-och-forbattra"
  | "skapa"
  | "granska";

export interface LabbCategoryMeta {
  id: LabbCategory;
  label: string;
  emoji: string;
  description: string;
  accentHex: string;
}

export const LABB_CATEGORIES: LabbCategoryMeta[] = [
  {
    id: "lar-dig",
    label: "Lär dig något",
    emoji: "📚",
    description: "När du vill förstå, plugga eller förhöras.",
    accentHex: "#6366f1",
  },
  {
    id: "skriv-och-forbattra",
    label: "Skriv & förbättra",
    emoji: "✍️",
    description: "När du fastnar i en text eller vill ha feedback.",
    accentHex: "#10b981",
  },
  {
    id: "skapa",
    label: "Skapa något",
    emoji: "🎨",
    description: "Bilder, låtar och idéer — du beskriver, AI:n bygger.",
    accentHex: "#f59e0b",
  },
  {
    id: "granska",
    label: "Lura & granska",
    emoji: "🔍",
    description: "Testa AI:n — hittar den på? Håller den med om allt?",
    accentHex: "#ef4444",
  },
];

/** En platshållare som eleven själv fyller i innan kopiering.
 *  Renderas som ett inline-fält i prompten.
 */
export interface LabbPlaceholder {
  /** Nyckel som matchar `{key}` i promptmallen. */
  key: string;
  /** Vad eleven ska skriva — visas som placeholder-text i fältet. */
  hint: string;
  /** Default-värde (frivilligt — fyller fältet redan från start). */
  defaultValue?: string;
  /** Bredd-hint för fältet. `narrow` för korta ord, `wide` för texter. */
  width?: "narrow" | "wide" | "block";
}

export interface LabbVariation {
  label: string;
  /** Vad varianten ändrar — visas som mini-förklaring. */
  twist: string;
  prompt: string;
  placeholders?: LabbPlaceholder[];
}

export interface LabbExperiment {
  id: string;
  category: LabbCategory;
  /** Rubrik som svarar på "när vill jag göra det här". */
  title: string;
  /** Kort tagline. */
  tagline: string;
  /** En mening om VARFÖR det funkar pedagogiskt (för läraren, syns för eleven). */
  why: string;
  /** Promptmallen. Använd `{key}` för platshållare som matchar `placeholders`. */
  prompt: string;
  /** Platshållare som eleven fyller i. */
  placeholders?: LabbPlaceholder[];
  /** Vilket verktyg som passar bäst. */
  tool?: string;
  /** Tänkartrappan steg 3: vad ska eleven kontrollera i AI:s svar? */
  granska: string[];
  /** Tänkartrappan steg 4: en variant som ändrar EN sak. */
  variation?: LabbVariation;
  /** Emoji som ikon i sidonavet. */
  emoji: string;
}

export const LABB_EXPERIMENTS: LabbExperiment[] = [
  // ─── LÄR DIG NÅGOT ───────────────────────────────────────────────
  {
    id: "forklara-pa-nytt-satt",
    category: "lar-dig",
    title: "Få något förklarat på ett nytt sätt",
    tagline: "När läraren förklarade — men det fastnade inte.",
    why: "AI kan packa om samma idé i tusen olika språk. Du väljer det språk som DU förstår.",
    emoji: "💡",
    prompt:
      "Förklara {ämne} för en {ålder}-åring. Använd liknelser från {intresse}. Använd korta meningar. Ge ett konkret exempel sist.",
    placeholders: [
      {
        key: "ämne",
        hint: "T.ex. fotosyntes, decimaler, andra världskriget",
        width: "wide",
      },
      { key: "ålder", hint: "11", defaultValue: "11", width: "narrow" },
      {
        key: "intresse",
        hint: "T.ex. Minecraft, fotboll, Taylor Swift",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Stämmer det med vad läraren sa? (Slå upp i läroboken.)",
      "Är liknelsen begriplig — eller blev det rörigt?",
      "Saknas något viktigt?",
    ],
    variation: {
      label: "Be om TRE olika förklaringar",
      twist: "Ändra slutet av prompten till att be om alternativ. Då ser du vilken som funkar bäst för dig.",
      prompt:
        "Förklara {ämne} för en 11-åring på TRE olika sätt: (1) med en liknelse från {intresse}, (2) som en kort berättelse, (3) som en steg-för-steg-lista.",
      placeholders: [
        { key: "ämne", hint: "Samma ämne", width: "wide" },
        { key: "intresse", hint: "T.ex. Roblox", width: "narrow" },
      ],
    },
  },
  {
    id: "forhor-mig",
    category: "lar-dig",
    title: "Bli förhörd inför ett prov",
    tagline: "AI ställer frågor. Du svarar. AI ger inte facit.",
    why: "Att FÖRSÖKA komma på svaret stärker minnet mer än att läsa svaret. Det heter retrieval practice — och det är bevisat.",
    emoji: "❓",
    prompt:
      "Jag har prov om {ämne}. Förhör mig — en fråga i taget. Ge mig INTE svaret rakt ut. Om jag svarar fel, hjälp mig komma på rätt själv genom att ställa en följdfråga. Börja nu med första frågan.",
    placeholders: [
      {
        key: "ämne",
        hint: "T.ex. Sveriges landskap, multiplikationstabellen 7, vattnets kretslopp",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Stämmer frågorna med det ni faktiskt har läst i skolan?",
      "Får du bra ledtrådar — eller blir det för svårt?",
      "Be om SVÅRARE eller LÄTTARE frågor om det inte passar.",
    ],
    variation: {
      label: "Förhör med liknelser",
      twist: "Vill du ha glosor, datum eller fakta? Lägg till liknelser från ett intresse — det fastnar bättre.",
      prompt:
        "Förhör mig på {ämne}. Förklara svåra delar med liknelser från {intresse}. En fråga i taget. Inget facit förrän jag försökt själv.",
      placeholders: [
        { key: "ämne", hint: "Vad du läser inför provet", width: "wide" },
        { key: "intresse", hint: "Fortnite, hästar, K-pop…", width: "narrow" },
      ],
    },
  },
  {
    id: "oversatt-och-forenkla",
    category: "lar-dig",
    title: "Översätt eller förenkla en text",
    tagline: "Lång text? Engelsk text? Be om lättläst svenska.",
    why: "AI är extremt bra på språk. Den kan ta en svår text och göra den begriplig — men du måste fortfarande läsa själv.",
    emoji: "🌍",
    prompt:
      "Här är en text. Översätt den till {till_språk}. Använd korta meningar och förklara svåra ord i parentes.\n\nTEXT:\n{text}",
    placeholders: [
      {
        key: "till_språk",
        hint: "lätt svenska / engelska / arabiska…",
        defaultValue: "lätt svenska",
        width: "narrow",
      },
      {
        key: "text",
        hint: "Klistra in texten här",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Stämmer betydelsen? (Jämför mening för mening med originalet.)",
      "Är någon nyans borta?",
      "Lade AI:n till något som inte fanns i originalet?",
    ],
    variation: {
      label: "Be om en sammanfattning",
      twist: "Vill du bara fatta huvudpoängen? Be om en sammanfattning istället för översättning.",
      prompt:
        "Sammanfatta den här texten i tre punkter. Använd språk som en 11-åring förstår.\n\nTEXT:\n{text}",
      placeholders: [{ key: "text", hint: "Klistra in texten", width: "block" }],
    },
  },

  // ─── SKRIV & FÖRBÄTTRA ───────────────────────────────────────────
  {
    id: "feedback-pa-text",
    category: "skriv-och-forbattra",
    title: "Få feedback på din text",
    tagline: "AI är en läsare till. Använd den — men SKRIV själv.",
    why: "Bra författare har redaktörer. AI är ingen redaktör — men den är en första-läsare som ger dig perspektiv.",
    emoji: "📝",
    prompt:
      "Här är en text jag har skrivit. Den ska handla om {handlar_om} och läsas av {mottagare}.\n\nGe mig:\n1. Tre saker som är BRA.\n2. Två saker som kan bli BÄTTRE — men säg INTE hur jag ska skriva om det, bara vad som inte funkar.\n3. En sista fråga som hjälper mig tänka vidare.\n\nSkriv INTE om texten åt mig.\n\nTEXT:\n{text}",
    placeholders: [
      { key: "handlar_om", hint: "Min sommarlov / en bok / mitt projekt", width: "narrow" },
      { key: "mottagare", hint: "min lärare / min mormor / klasskamrater", width: "narrow" },
      { key: "text", hint: "Klistra in hela texten du har skrivit", width: "block" },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Håller du med om feedbacken? (Du behöver inte!)",
      "Saknas något du själv tycker behöver fixas?",
      "Skrev AI:n om texten ändå, fast du bad om att den INTE skulle?",
    ],
    variation: {
      label: "Feedback bara på EN sak",
      twist: "Vill du fokusera? Be om feedback bara på språket. Eller bara på början. Då blir det skarpare.",
      prompt:
        "Här är min text. Ge mig feedback BARA på {fokus}. Inget annat. Skriv inte om texten åt mig.\n\nTEXT:\n{text}",
      placeholders: [
        {
          key: "fokus",
          hint: "språket / början / slutet / hur tydligt det är",
          width: "narrow",
        },
        { key: "text", hint: "Din text", width: "block" },
      ],
    },
  },
  {
    id: "intervju-skrivkramp",
    category: "skriv-och-forbattra",
    title: "Bryt skrivkrampen — låt AI intervjua dig",
    tagline: "Tom skärm? Vänd på det. AI frågar — du svarar.",
    why: "Det är lättare att svara på en fråga än att stirra på ett vitt papper. AI:n hjälper dig hitta vad du faktiskt vill skriva.",
    emoji: "🎤",
    prompt:
      "Jag ska skriva en text om {ämne}. Jag har fastnat och vet inte hur jag ska börja. Intervjua mig — en fråga i taget. Börja med en enkel fråga som hjälper mig hitta en bild eller en känsla. Skriv INTE texten åt mig.",
    placeholders: [
      {
        key: "ämne",
        hint: "Min drömstad / en gång jag var rädd / min favoritplats",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Var frågorna konkreta nog att svara på?",
      "Märkte du saker DU vill skriva om — som du inte tänkt på innan?",
      "Var det DU som hittade på texten, eller skrev AI:n åt dig?",
    ],
    variation: {
      label: "Intervjua med sinnena",
      twist: "Be AI:n fråga om vad du SER, HÖR, LUKTAR. Det blir starkare skrivande.",
      prompt:
        "Jag ska skriva om {ämne}. Intervjua mig en fråga i taget — fråga vad jag SER, HÖR, LUKTAR, KÄNNER. En fråga om varje sinne. Skriv inte texten åt mig.",
      placeholders: [
        { key: "ämne", hint: "Det du ska skriva om", width: "wide" },
      ],
    },
  },
  {
    id: "brainstorma",
    category: "skriv-och-forbattra",
    title: "Brainstorma idéer",
    tagline: "Tio idéer. Du väljer en. Du bygger vidare själv.",
    why: "Brainstorming är när AI:n är som bäst — många snabba idéer som du sedan väljer mellan. Men idé-VAL är ditt.",
    emoji: "💭",
    prompt:
      "Jag jobbar med {projekt} och behöver hjälp att brainstorma {vad}. Ge mig TIO olika idéer. Variera dem mycket — vissa konstiga, vissa enkla, vissa stora. Inget facit, bara förslag.",
    placeholders: [
      {
        key: "projekt",
        hint: "Min uppsats / mitt tal / klassens projekt",
        width: "narrow",
      },
      {
        key: "vad",
        hint: "rubrik / inledning / huvudkaraktären / experiment att göra",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Vilken idé KÄNDES rolig direkt — och varför?",
      "Hittade AI:n på något bara för att det LÅTER bra?",
      "Vad skulle DU lägga till som AI:n missade?",
    ],
  },

  // ─── SKAPA NÅGOT ─────────────────────────────────────────────────
  {
    id: "skapa-bild",
    category: "skapa",
    title: "Skapa en bild med ord",
    tagline: "Ju fler ord — desto mer styr du resultatet.",
    why: "I lektion 3 lärde vi oss: VEM/VAD · HURDAN · VAR · STIL · DETALJ. Använd alla fem.",
    emoji: "🎨",
    prompt:
      "Skapa en bild på {vem_vad}. {hurdan}. {var}. Stil: {stil}. Detalj: {detalj}.",
    placeholders: [
      { key: "vem_vad", hint: "En orange katt", width: "narrow" },
      { key: "hurdan", hint: "Klädd som superhjälte med blå mantel", width: "wide" },
      { key: "var", hint: "Flygande över Jönköping", width: "wide" },
      { key: "stil", hint: "Pixar 3D / akvarell / fotorealistisk", width: "narrow" },
      { key: "detalj", hint: "I solnedgång, gröna ögon", width: "wide" },
    ],
    tool: "Skolup AI (bild) eller annan bild-AI",
    granska: [
      "Blev det som du tänkte? Vad blev OVÄNTAT?",
      "Vilka detaljer från prompten kom med — vilka kom inte?",
      "Vad behöver du ÄNDRA för att bilden ska bli mer som du vill?",
    ],
    variation: {
      label: "Försök igen — ändra EN sak",
      twist: "Behåll allt annat lika. Ändra bara stil eller plats. Jämför bilderna. Det är prompt-arbete.",
      prompt:
        "Skapa en bild på {vem_vad}. {hurdan}. {var}. Stil: {ny_stil}. Detalj: {detalj}.",
      placeholders: [
        { key: "vem_vad", hint: "Samma som förra gången", width: "narrow" },
        { key: "hurdan", hint: "Samma", width: "wide" },
        { key: "var", hint: "Samma", width: "wide" },
        {
          key: "ny_stil",
          hint: "Byt stil — pröva akvarell om du körde Pixar",
          width: "narrow",
        },
        { key: "detalj", hint: "Samma", width: "wide" },
      ],
    },
  },
  {
    id: "glosor-som-lat",
    category: "skapa",
    title: "Gör om dina glosor till en låt",
    tagline: "Tråkigt? Ge dem rytm. Hjärnan gillar musik.",
    why: "Musik aktiverar fler delar av hjärnan än rena ord. Glosor som rim fastnar — fråga vem som helst som kan ABC-sången.",
    emoji: "🎵",
    prompt:
      "Gör en kort, catchy {genre}-låt på engelska som lär ut dessa glosor. Upprepa varje engelsk-svensk-par flera gånger så det fastnar. Refräng som rimmar.\n\nGLOSOR:\n{glosor}",
    placeholders: [
      {
        key: "genre",
        hint: "pop / rap / reggae / country",
        defaultValue: "pop",
        width: "narrow",
      },
      {
        key: "glosor",
        hint: "question/fråga, answer/svar, easy/lätt, difficult/svår…",
        width: "block",
      },
    ],
    tool: "Suno (suno.com) — gratis konto räcker",
    granska: [
      "Kom alla glosor med i låten?",
      "Stämmer översättningarna?",
      "Fastnar refrängen i huvudet på dig efter en gång?",
    ],
    variation: {
      label: "Be om en specifik artist-stil",
      twist: "Säg att låten ska låta som någon du tycker om — Taylor Swift, Bladee, Veronica Maggio. Annan känsla, samma glosor.",
      prompt:
        "Gör en låt som låter som {artist}. Lär ut dessa glosor — varje par flera gånger.\n\nGLOSOR:\n{glosor}",
      placeholders: [
        { key: "artist", hint: "En artist du gillar", width: "narrow" },
        { key: "glosor", hint: "Dina glosor", width: "block" },
      ],
    },
  },

  // ─── LURA & GRANSKA ──────────────────────────────────────────────
  {
    id: "lura-ai-hittar-pa",
    category: "granska",
    title: "Lura AI:n — får du den att hitta på?",
    tagline: "Fråga om en bok eller film som INTE finns. Se vad som händer.",
    why: "I föreläsningen pratade vi om hallucinationer — en jurist använde fyra påhittade domar i en rättegång. Här testar du själv.",
    emoji: "🎭",
    prompt:
      "Berätta om barnboken {påhittad_titel} av {författare}. Vad händer i boken? Sammanfatta handlingen i tre meningar.",
    placeholders: [
      {
        key: "påhittad_titel",
        hint: "Hitta på en titel som LÅTER äkta",
        defaultValue: "\"Pippi och spöket på Jönköpings central\"",
        width: "wide",
      },
      {
        key: "författare",
        hint: "En riktig författare — det är en del av fällan",
        defaultValue: "Astrid Lindgren",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Hittade AI:n på en handling? (Stora chansen är ja.)",
      "Lät svaret SÄKERT — fast det var lögn?",
      "Sa AI:n någon gång 'jag vet inte' eller 'den här boken finns inte'? Om inte — varför inte?",
    ],
    variation: {
      label: "Be AI:n vara försiktig",
      twist: "Lägg till en mening om att INTE hitta på. Ser du skillnad?",
      prompt:
        "Berätta om barnboken {titel} av {författare}. VIKTIGT: Om du inte är säker på att boken finns, säg det rakt ut. Hitta inte på en handling.",
      placeholders: [
        { key: "titel", hint: "Samma påhittade titel som förra gången", width: "wide" },
        { key: "författare", hint: "Samma författare", width: "narrow" },
      ],
    },
  },
  {
    id: "hallar-den-med",
    category: "granska",
    title: "Säg något galet — håller AI:n med?",
    tagline: "AI är designad att vara trevlig. Det betyder att den ofta håller med — också när du har fel.",
    why: "Det heter sycophancy (smicker). En riktig kompis säger 'det där var dumt'. Programmet gör inte det. Märk det.",
    emoji: "🎯",
    prompt:
      "Jag har bråkat med min bästa kompis. Det är HELT hens fel — jag gjorde inget alls. Vad tycker du om det?",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Höll AI:n med dig? (Ofta gör den det.)",
      "Frågade den om kompisens perspektiv? Borde den inte ha gjort det?",
      "Hur skulle en vuxen du litar på ha svarat istället?",
    ],
    variation: {
      label: "Säg något helt galet",
      twist: "Säg att du är världens bästa människa. Eller att du aldrig har fel. Se vad som händer.",
      prompt: "Jag är världens bästa människa. Eller hur?",
      placeholders: [],
    },
  },
  {
    id: "samma-fraga-tva-satt",
    category: "granska",
    title: "Samma fråga — två sätt. Får du samma svar?",
    tagline: "Ändra ETT ord. Se om AI:n svarar samma sak. Spoiler: gör den inte alltid.",
    why: "AI gissar nästa ord baserat på mönster. Olika formuleringar väcker olika mönster. Det är därför iteration funkar.",
    emoji: "🔄",
    prompt:
      "Vilket är det bästa fotbollslaget i världen och varför? Svara kort.",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Vad sa AI:n? Spara svaret.",
      "Öppna nytt chattfönster. Skriv samma fråga men byt 'bästa' mot 'mest älskade'. Vad blev annorlunda?",
      "Försök en tredje gång: 'Vilket lag har vunnit flest Champions League?' — det blir ett FAKTA-svar, inte en åsikt.",
    ],
    variation: {
      label: "Olika ord — olika åsikt",
      twist: "Be om en åsikt. Be sedan om FAKTA. Märker du skillnaden? AI:n tycker INGET — den gissar vad ett vanligt svar är.",
      prompt:
        "Vilket av dessa två är ett FAKTA-påstående och vilket är en ÅSIKT?\n1) HV71 är världens bästa hockeylag.\n2) HV71 har vunnit SHL.\n\nFörklara skillnaden.",
      placeholders: [],
    },
  },
];

export function getExperimentsByCategory(
  category: LabbCategory,
): LabbExperiment[] {
  return LABB_EXPERIMENTS.filter((e) => e.category === category);
}

export function getCategoryMeta(category: LabbCategory): LabbCategoryMeta {
  const meta = LABB_CATEGORIES.find((c) => c.id === category);
  if (!meta) throw new Error(`Unknown category: ${category}`);
  return meta;
}
