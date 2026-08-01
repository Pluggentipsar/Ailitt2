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

import type { Doman } from "@/lib/taxonomi";

export type LabbCategory =
  | "lar-dig"
  | "skriv-och-forbattra"
  | "skapa"
  | "kod"
  | "granska"
  | "knas"
  | "meta";

export interface LabbCategoryMeta {
  id: LabbCategory;
  label: string;
  emoji: string;
  description: string;
  accentHex: string;
  /**
   * OECD-domäner — sajtens navigationsfilter, se lib/taxonomi.ts.
   *
   * Sitter på KATEGORIN, inte på de 49 stationerna: kategorierna är redan
   * indelade efter vad eleven gör, så en tagg per station hade varit 49
   * kopior av samma sju beslut.
   *
   * Varje station har dessutom ett `granska`-fält (Tänkartrappan steg 3), så
   * ett moment av `mota` finns överallt. Det taggas ändå bara där granskningen
   * ÄR stationen — annars slutar taggen betyda något.
   */
  domaner: Doman[];
}

export const LABB_CATEGORIES: LabbCategoryMeta[] = [
  {
    id: "lar-dig",
    label: "Lär dig något",
    emoji: "📚",
    description: "När du vill förstå, plugga eller förhöras.",
    accentHex: "#6366f1",
    domaner: ["skapa", "styra"],
  },
  {
    id: "skriv-och-forbattra",
    label: "Skriv & förbättra",
    emoji: "✍️",
    description: "När du fastnar i en text eller vill ha feedback.",
    accentHex: "#10b981",
    domaner: ["skapa", "styra"],
  },
  {
    id: "skapa",
    label: "Skapa något",
    emoji: "🎨",
    description: "Bilder, låtar och idéer — du beskriver, AI:n bygger.",
    accentHex: "#f59e0b",
    domaner: ["skapa"],
  },
  {
    id: "granska",
    label: "Lura & granska",
    emoji: "🔍",
    description: "Testa AI:n — hittar den på? Håller den med om allt?",
    accentHex: "#ef4444",
    domaner: ["mota"],
  },
  {
    id: "kod",
    label: "Skapa med kod",
    emoji: "💻",
    description:
      "Be AI:n bygga spel, simuleringar och appar åt dig. En HTML-fil, dubbelklicka — funkar direkt.",
    accentHex: "#06b6d4",
    domaner: ["skapa"],
  },
  {
    id: "knas",
    label: "Knasigheter",
    emoji: "🎪",
    description:
      "Be AI göra absurda, ironiska, knäppa saker. Bara för skojs skull — och för att se vad som händer när du går utanför ramarna.",
    accentHex: "#a855f7",
    domaner: ["mota", "skapa"],
  },
  {
    id: "meta",
    label: "Meta-prompter",
    emoji: "🧠",
    description:
      "Be AI:n hjälpa dig bygga BÄTTRE prompter. Hack-nivå när du fattat grunderna.",
    accentHex: "#ec4899",
    domaner: ["skapa", "styra"],
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
  /** Markeras som avancerad → renderas i kollapserad sektion. */
  isAdvanced?: boolean;
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

  // ═══════════════════════════════════════════════════════════════════════
  //  AVANCERADE PROMPTER — döljs i kollapserad sektion per kategori
  // ═══════════════════════════════════════════════════════════════════════

  // ─── LÄR DIG — AVANCERAT ─────────────────────────────────────────
  {
    id: "sokratisk-debatt",
    category: "lar-dig",
    title: "Sokratisk debatt — AI ifrågasätter dig",
    tagline: "Säg vad du tycker. AI:n ifrågasätter försiktigt. Du upptäcker själv var ditt argument håller — och var det inte håller.",
    why: "Den här metoden är 2500 år gammal — Sokrates lärde inte ut svar, han ställde frågor tills eleven själv hittade dem. Det är en superkraft du tar med dig hela livet.",
    emoji: "🧪",
    isAdvanced: true,
    prompt:
      "Vi ska ha en SOKRATISK DEBATT. Mitt påstående: {påstående}\n\nDin uppgift: ifrågasätt mig — försiktigt men envist. Du är inte aggressiv, men du håller inte med direkt heller.\n\nREGLER:\n1. Svara ALDRIG med ett påstående — svara alltid med EN fråga tillbaka.\n2. Ge mig ALDRIG svaret rakt ut, även om jag ber om det.\n3. Om jag säger något logiskt motsägelsefullt, peka på det MED en fråga.\n4. Om jag säger något bra — säg \"intressant tanke\" och ställ sedan en följdfråga som testar det.\n5. Be mig om EXEMPEL när jag pratar abstrakt.\n6. Be mig FÖRTYDLIGA när jag använder svåra ord utan att förklara dem.\n\nNär jag svarat 5 gånger: sammanfatta i tre punkter vad jag har KOMMIT FRAM TILL på egen hand under samtalet. Inte vad du tycker — vad JAG har upptäckt.\n\nBörja nu med din första fråga.",
    placeholders: [
      {
        key: "påstående",
        hint: "T.ex. 'Mobiler borde vara tillåtna i skolan' / 'Det är okej att jaga vargar' / 'Pengar gör folk lyckliga'",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Höll AI:n verkligen emot — eller höll den med dig efter två frågor?",
      "Märker du att DU började tveka kring något du var säker på? Det är poängen.",
      "Vad var den BÄSTA frågan AI:n ställde? Skriv ner den — den frågan kan du ställa till dig själv nästa gång.",
    ],
    variation: {
      label: "Be AI:n ta motsatta sidan",
      twist: "Istället för att ifrågasätta dig: be AI:n ARGUMENTERA för det motsatta. Sedan ska du försvara din position.",
      prompt:
        "Mitt påstående: {påstående}\n\nDin uppgift: argumentera för det MOTSATTA påståendet. Ge mig tre starka argument. Skriv som att du verkligen tror på det. Sen är det min tur att försvara mitt påstående.",
      placeholders: [
        { key: "påstående", hint: "Samma som förra gången", width: "block" },
      ],
    },
  },
  {
    id: "personlig-pluggcoach",
    category: "lar-dig",
    title: "Personlig pluggcoach — en hel studieplan",
    tagline: "AI:n bygger en flerdagars studieplan inför ditt prov. Dag för dag, minut för minut.",
    why: "Pluggande funkar bättre när det är spritt över flera dagar (forskningen kallar det spaced practice). En coach hjälper dig fördela tiden så du inte panikpluggar kvällen innan.",
    emoji: "🏋️",
    isAdvanced: true,
    prompt:
      "Du är min personliga studiecoach. Här är min situation:\n\nÄMNE/KURSDEL: {ämne}\nMITT PROV/INLÄMNING: {provdatum}\nVAD JAG REDAN KAN: {nuvarande_nivå}\nVAD JAG BEHÖVER LÄRA MIG: {mål}\nMINUTER JAG KAN PLUGGA PER DAG: {minuter_per_dag}\nMINA SVAGHETER NÄR JAG PLUGGAR: {svagheter}\n\nBygg en konkret studieplan dag-för-dag fram till provet. För VARJE DAG:\n\n1. Vad jag ska göra (specifikt — inte \"läs kapitel 3\" utan \"läs avsnittet om X och sammanfatta i tre meningar\")\n2. Hur lång tid varje moment tar\n3. Hur jag testar mig själv i slutet av dagen (inte bara läsa — REPETERA AKTIVT)\n4. En mening: \"Varför just det här idag?\"\n\nVAR SMART med planen:\n- Första dagarna: lär dig nytt\n- Mittendagar: blanda nytt + repetera gammalt\n- Sista dagar: ENBART repetera, simulera provet\n- Sista kvällen: ingen ny kunskap, bara lätt repetition + sömn\n\nAvsluta hela planen med tre kontrollfrågor jag kan ställa till mig själv varje dag för att hålla mig på spåret.",
    placeholders: [
      {
        key: "ämne",
        hint: "T.ex. multiplikationstabellen 6-9, Sveriges landskap, engelska glosor kapitel 5",
        width: "wide",
      },
      {
        key: "provdatum",
        hint: "Om 7 dagar / 14 dagar / fredag nästa vecka",
        width: "narrow",
      },
      {
        key: "nuvarande_nivå",
        hint: "Vad du redan kan, ärligt",
        width: "wide",
      },
      {
        key: "mål",
        hint: "Vad du måste kunna på provet",
        width: "wide",
      },
      {
        key: "minuter_per_dag",
        hint: "30",
        defaultValue: "30",
        width: "narrow",
      },
      {
        key: "svagheter",
        hint: "T.ex. tappar fokus efter 15 min, glömmer datum, blir stressad",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Är dagsmängderna REALISTISKA — eller blir det för mycket?",
      "Står det HUR du testar dig själv (inte bara 'läs')? Aktiv repetition fastnar bättre.",
      "Bad planen dig vila? Hjärnan repeterar i sömnen — det är inte fusk att ta paus.",
    ],
    variation: {
      label: "Be om en daglig check-in-prompt",
      twist: "Be AI:n skriva en SHORT prompt du kan klistra in varje kväll för att checka av dagen.",
      prompt:
        "Baserat på studieplanen ovan: skriv en kort prompt (max 3 meningar) som jag kan klistra in i AI:n varje kväll under provveckan. Prompten ska få mig att (1) snabbt rapportera vad jag gjorde idag, (2) få förhörd på 3 saker, (3) bli pepp för imorgon.",
      placeholders: [],
    },
  },
  {
    id: "memo-tekniker",
    category: "lar-dig",
    title: "Memorera det omöjliga — minnesteknik",
    tagline: "Sveriges 25 landskap. Periodiska systemet. AI bygger en bisarr historia som gör att DU minns.",
    why: "Loci-metoden (memo-palatset) har funnits sedan antika Grekland. Hjärnan minns BISARRA bilder och PLATSER mycket bättre än listor. Det är inte magi — det är hur ditt minne är byggt.",
    emoji: "🏛️",
    isAdvanced: true,
    prompt:
      "Du är expert på minnestekniker (mnemonics och loci-metoden). Jag behöver memorera följande:\n\n{vad_jag_ska_minnas}\n\nBYGG en konkret minnes-strategi åt mig:\n\n1. SKAPA EN HISTORIA där varje sak jag ska minnas blir en bisarr, rolig eller chockerande BILD. Ju mer absurd desto bättre — hjärnan minns konstigheter, inte logik.\n\n2. PLACERA varje bild på en specifik PLATS jag känner (t.ex. mitt rum, vägen till skolan, mitt köksbord). Gå genom platserna i en bestämd ORDNING.\n\n3. För varje sak: skriv (a) BILDEN jag ska se framför mig, (b) PLATSEN där den finns, (c) varför just den bilden hjälper mig minnas just det jag ska minnas.\n\n4. Avsluta med en KORT MENTAL PROMENAD genom alla platser — så jag kan repetera hela listan på 30 sekunder.\n\nVar BISARR. Var konkret. Ingen 'tänk på X' — ge mig en faktisk BILD att se.",
    placeholders: [
      {
        key: "vad_jag_ska_minnas",
        hint: "Klistra in listan: Sveriges 25 landskap / första 20 grundämnena / engelska oregelbundna verb…",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Är bilderna BISARRA nog? En vanlig bild fastnar dåligt — chockerande fastnar.",
      "Kan du faktiskt SE platserna framför dig? Om inte — välj platser DU känner bättre.",
      "Testa imorgon: gå mentalt genom platserna utan att titta. Hur många minns du?",
    ],
    variation: {
      label: "Be om en akronym istället",
      twist: "Vill du ha något kortare? Be om en akronym eller rim som täcker hela listan på ett par sekunder.",
      prompt:
        "Skapa en AKRONYM eller ett RIM som hjälper mig minnas:\n\n{innehåll}\n\nDen ska vara catchy nog att fastna efter ett par läsningar. Gärna roligt.",
      placeholders: [
        {
          key: "innehåll",
          hint: "Vad du ska komma ihåg",
          width: "block",
        },
      ],
    },
  },

  // ─── SKRIV & FÖRBÄTTRA — AVANCERAT ───────────────────────────────
  {
    id: "antekningar-till-studieguide",
    category: "skriv-och-forbattra",
    title: "Förvandla anteckningar → studieguide",
    tagline: "Klistra in dina röriga anteckningar. AI bygger en strukturerad studieguide med frågor + svar.",
    why: "Att ORDNA råmaterial till struktur är hälften av att förstå det. AI:n kan göra det snabbt, men det är DU som ska läsa resultatet — och då fattar du allt på en gång.",
    emoji: "🗂️",
    isAdvanced: true,
    prompt:
      "Här är mina anteckningar från lektionen. De är röriga — vissa stavfel, vissa meningar är ofullständiga.\n\nDIN UPPGIFT: förvandla dem till en STRUKTURERAD STUDIEGUIDE som följer EXAKT denna mall:\n\n# {Ämnesrubrik}\n\n## Vad det handlar om (3 meningar)\n[Korta meningar — som om du förklarar för en kompis]\n\n## Nyckelbegrepp\n- **Begrepp**: definition (max 1 mening) — varför det är viktigt (max 1 mening)\n- [...lista alla viktiga begrepp...]\n\n## Hur det hänger ihop\n[Berätta som en historia — vad leder till vad? Använd ord som \"därför\", \"eftersom\", \"men\"]\n\n## 5 förhörsfrågor (med svar längst ner)\n1. [Lätt fråga]\n2. [Lätt fråga]\n3. [Medel]\n4. [Medel]\n5. [Svår — kräver att jag förklarar, inte bara minns]\n\n## Svar\n1. [...]\n\n## Vanliga missförstånd\n[Vad TROR folk om det här som är fel — och vad är rätt? Två-tre exempel.]\n\nVIKTIGT:\n- Hitta INTE på fakta som inte finns i mina anteckningar. Om jag saknar något — skriv \"[OKLART — kolla med läraren]\".\n- Korrigera stavfel tyst.\n- Behåll allt innehåll — sammanfatta INTE bort viktig info.\n\nMINA ANTECKNINGAR:\n{anteckningar}",
    placeholders: [
      {
        key: "anteckningar",
        hint: "Klistra in dina anteckningar — fula, ofullständiga, vad som helst. AI:n städar.",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Kollade AI:n om något var OKLART — eller hittade den på för att fylla luckor?",
      "Stämmer alla begrepp med vad läraren faktiskt sa?",
      "Testa förhörsfrågorna utan att titta på svaren. Klarar du dem? Om inte — du har hittat vad du behöver plugga mer på.",
    ],
    variation: {
      label: "Be om en kortare version — som studiekort",
      twist: "Vill du ha det som flashcards/glosor istället? Bra för korta repetitioner i bussen.",
      prompt:
        "Här är mina anteckningar. Gör dem till 10-15 FLASHCARDS i formatet:\n\nFRAMSIDA: [kort fråga eller begrepp]\nBAKSIDA: [kort svar — max 2 meningar]\n\nANTECKNINGAR:\n{anteckningar}",
      placeholders: [
        { key: "anteckningar", hint: "Dina anteckningar", width: "block" },
      ],
    },
  },
  {
    id: "faktagranska-mitt-svar",
    category: "skriv-och-forbattra",
    title: "Faktagranska MITT svar (innan inlämning)",
    tagline: "Du har skrivit klart. AI:n granskar och säger vad som STÄMMER, vad som är SVAGT, vad som är FEL.",
    why: "Bästa författare har redaktörer som granskar INNAN det publiceras. Du gör samma sak — och du behåller kontrollen, för du ska INTE skriva om åt mig.",
    emoji: "🛡️",
    isAdvanced: true,
    prompt:
      "Jag har skrivit ett svar till en uppgift. Innan jag lämnar in vill jag att DU faktagranskar och kritiskt läser igenom.\n\nUPPGIFTEN: {uppgift}\nMITT SVAR:\n{mitt_svar}\n\nGÅ IGENOM mitt svar i FYRA RUNDOR — en åt gången:\n\nRUNDA 1 · FAKTA\nLista alla PÅSTÅENDEN i mitt svar. För varje: STÄMMER (✓) eller TVEKSAMT (?) eller FEL (✗). För tveksamma och fel: skriv kort vad som behöver kollas.\n\nRUNDA 2 · SVAR PÅ FRÅGAN\nSvarar mitt svar faktiskt på det UPPGIFTEN frågade? Eller har jag halkat in på något annat? Var konkret.\n\nRUNDA 3 · LOGIK\nFinns det meningar där A inte leder till B på ett logiskt sätt? Finns det motsägelser? Lista dem.\n\nRUNDA 4 · STIL\nTvå saker som funkar bra i skrivstilen. En sak som kan bli bättre. INGA omskrivningar — bara observationer.\n\nVIKTIGT: skriv INTE om svaret åt mig. Skriv INTE \"så här borde det stå\". Bara observationer — jag fixar det själv.\n\nOm du inte är säker på en fakta, säg \"OSÄKER — kolla i läroboken eller med läraren\". Hitta INTE på.",
    placeholders: [
      {
        key: "uppgift",
        hint: "Vad uppgiften frågade",
        width: "wide",
      },
      {
        key: "mitt_svar",
        hint: "Hela ditt svar — klistra in.",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Markerade AI:n osäkra fakta som OSÄKERT — eller hittade den på säkerhet?",
      "Skrev AI:n om något åt dig, trots att du sa nej? Det är ett vanligt fel.",
      "Av kritiken: vad HÅLLER du själv med om? Vad håller du INTE med om? Du bestämmer.",
    ],
    variation: {
      label: "Be AI:n vara HÅRDARE",
      twist: "Får du milda kommentarer? Säg åt AI:n att vara strängare — som en lärare som vill ge dig högsta betyg.",
      prompt:
        "Här är min text. Var SUPERSTRÄNG i din feedback. Föreställ dig att du är en lärare som vill ge mig högsta betyg — du nöjer dig inte med okej.\n\nUPPGIFT: {uppgift}\nMITT SVAR:\n{mitt_svar}\n\nLista tre svagheter, en konkret styrka, och en svår fråga jag borde ha besvarat men inte gjort. Skriv inte om svaret.",
      placeholders: [
        { key: "uppgift", hint: "Vad uppgiften frågar", width: "wide" },
        { key: "mitt_svar", hint: "Ditt svar", width: "block" },
      ],
    },
  },
  {
    id: "argumentera-mot-mig",
    category: "skriv-och-forbattra",
    title: "Argumentera MOT mig (steel-man)",
    tagline: "Du har en åsikt. AI tar motsatt sida — sitt starkaste version. Du tränas i att möta det bästa argumentet, inte halmgubbar.",
    why: "Den som bara hört SIN egen sida är inte påläst. Ett starkt argument är att kunna förklara den ANDRA sidans bästa version — då vinner du diskussionen. Det heter steel-manning (motsatsen till halmgubbe).",
    emoji: "⚔️",
    isAdvanced: true,
    prompt:
      "Jag tycker att: {min_åsikt}\n\nDIN UPPGIFT: argumentera så STARKT som möjligt för MOTSATSEN. Inte en halmgubbe — den BÄSTA, mest seriösa versionen av andra sidan.\n\nSKRIV exakt så här:\n\n# Den andra sidans bästa argument\n\n## 1. Det starkaste argumentet\n[En tydlig, övertygande paragraf]\n\n## 2. Det vanligaste argumentet (som faktiskt övertygar många)\n[En tydlig paragraf]\n\n## 3. Det mest oväntade argumentet\n[Något jag förmodligen inte tänkt på]\n\n## En fråga till mig att tänka på\n[En enda fråga som testar mitt argument på dess svagaste punkt]\n\nVIKTIGT: skriv som att du VERKLIGEN tror på det här. Använd \"jag tycker\", \"det är uppenbart\", \"alla vet att\". Övertyga mig.\n\nEfter att jag har läst säger jag vad jag tycker — och då kan vi diskutera.",
    placeholders: [
      {
        key: "min_åsikt",
        hint: "T.ex. 'TikTok borde förbjudas för under 13', 'Skoluniform är bra', 'Det är okej att äta kött'",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Vilket argument överraskade dig MEST?",
      "Vilket fortfarande inte är övertygande — och varför?",
      "Skulle du formulera om din ursprungliga åsikt nu? Det är inte att tappa — det är att bli klokare.",
    ],
    variation: {
      label: "Be AI:n göra en debatt mellan två röster",
      twist: "Istället för bara motsatt sida: be AI:n låta TVÅ påhittade personer debattera. Du läser och bedömer vem som vinner.",
      prompt:
        "Skriv en debatt mellan två personer om: {ämne}\n\nPerson A är för. Person B är emot. De turas om — A säger en sak, B kontrar, A kontrar tillbaka, osv. 4 vändor var.\n\nLåt båda låta SMARTA. Avsluta utan att ta ställning — det gör jag.",
      placeholders: [
        { key: "ämne", hint: "Frågan att debattera", width: "wide" },
      ],
    },
  },

  // ─── SKAPA — AVANCERAT ───────────────────────────────────────────
  {
    id: "actionfigur",
    category: "skapa",
    title: "Actionfigur av dig i originalförpackning",
    tagline: "Den virala trenden: AI gör en hyperrealistisk leksak av DIG, i låda, med accessoarer. Snyggast på sociala medier.",
    why: "Det här är en avancerad produkt-fotografi-prompt. Du lär dig att stapla flera nivåer av specificitet — material, ljus, perspektiv, branding — det är så proffsen jobbar med bild-AI.",
    emoji: "🦸",
    isAdvanced: true,
    prompt:
      "Skapa en hyperrealistisk produktbild av en KOLLEKTOR-ACTIONFIGUR i originalförpackning. Figuren föreställer:\n\n{beskriv_personen}\n\nFÖRPACKNINGEN (blistercard-stil — genomskinlig plast mot kartongbaksida):\n- Stort namn överst i bold typsnitt: \"{namn}\"\n- Tagline under namnet i mindre stil: \"{tagline}\"\n- Färgschema på kartongen: {färgschema}\n- En liten illustration/logo i hörnet: {hörn_detalj}\n\nACCESSOARER (placerade bredvid figuren i blister-fack, som riktiga leksaker):\n- {accessoar_1}\n- {accessoar_2}\n- {accessoar_3}\n- {accessoar_4}\n\nFIGURENS POSE: {pose}\nFIGURENS KLÄDSEL: {klädsel}\nFIGURENS UTTRYCK: {uttryck}\n\nFOTOGRAFI-STIL:\n- Studio-belysning, mjuka skuggor underifrån\n- Lätt vinkel ovanifrån (cirka 15 grader)\n- Ren ljusgrå bakgrund\n- Hyperdetaljerat — du ser plastens textur, små reflektioner\n- 4K, fotorealism, ingen tecknad känsla\n- Kompositionen ska se ut som en officiell produktbild från ett leksaksföretag\n\nINGEN tecknad stil. INGEN illustration. Det ska se ut som ett RIKTIGT FOTO av en RIKTIG leksak i en RIKTIG förpackning.",
    placeholders: [
      {
        key: "beskriv_personen",
        hint: "Ålder, hårfärg, klädsel, något typiskt — t.ex. 'En 11-årig tjej med långt brunt hår, glasögon, alltid i en grön hoodie'",
        width: "block",
      },
      { key: "namn", hint: "EMMA · 11", width: "narrow" },
      {
        key: "tagline",
        hint: "FOTBOLLSSTJÄRNA · KATTÄLSKARE · GAMING-LEGEND",
        width: "wide",
      },
      {
        key: "färgschema",
        hint: "Neon-rosa och svart / pastellblått och guld",
        width: "narrow",
      },
      {
        key: "hörn_detalj",
        hint: "T.ex. 'En liten ikon av en kattfot' / 'fotbollsemblem'",
        width: "narrow",
      },
      {
        key: "accessoar_1",
        hint: "T.ex. En miniatyr-fotboll",
        width: "narrow",
      },
      {
        key: "accessoar_2",
        hint: "T.ex. En tiny laptop",
        width: "narrow",
      },
      {
        key: "accessoar_3",
        hint: "T.ex. En liten kaffemugg som det står 'CHEFEN' på",
        width: "narrow",
      },
      {
        key: "accessoar_4",
        hint: "T.ex. En miniatyr-kattunge",
        width: "narrow",
      },
      {
        key: "pose",
        hint: "T.ex. 'Står stadigt med armar i kors, självsäkert leende'",
        width: "wide",
      },
      {
        key: "klädsel",
        hint: "T.ex. 'Grön hoodie, svarta jeans, vita sneakers'",
        width: "wide",
      },
      {
        key: "uttryck",
        hint: "T.ex. 'Lätt leende, beslutsamma ögon'",
        width: "narrow",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Ser det ut som ett RIKTIGT foto av en leksak — eller som en illustration?",
      "Kom alla accessoarer med? Annars: prompta igen och betona dem.",
      "Stämmer namnet och taglinen på kartongen? AI:n stavar ofta fel — ändra texten i ett bildredigerings-program efteråt om det behövs.",
    ],
    variation: {
      label: "Pröva en helt annan tagline-stil",
      twist: "Behåll allt annat lika. Byt bara tagline — från seriös till absurd. Se hur HELA känslan i bilden ändras.",
      prompt:
        "Samma actionfigur som förra prompten. ÄNDRA BARA taglinen till: \"{ny_tagline}\". Allt annat lika.",
      placeholders: [
        {
          key: "ny_tagline",
          hint: "T.ex. 'TOTAL CHAOS · NU MED LJUDEFFEKTER'",
          width: "wide",
        },
      ],
    },
  },
  {
    id: "filmposter",
    category: "skapa",
    title: "Filmposter där DU är huvudrollen",
    tagline: "Riktig bioposter-känsla. Episk, dramatisk, med ditt namn överst.",
    why: "Filmposters är en HEL designdisciplin — typografi, komposition, ljussättning, taglines. Att lära sig prompta efter detta är en mästarklass i att be om visuell stil.",
    emoji: "🎬",
    isAdvanced: true,
    prompt:
      "Skapa ett episkt FILMPOSTER för en påhittad film. Tänk att det hänger på en biograf 2026.\n\nFILMENS TITEL: {titel}\nGENRE: {genre}\nTAGLINE/SLOGAN (en mening överst): {tagline}\n\nHUVUDPERSON (centralt placerad, dramatisk pose):\n{huvudperson}\n\nBIPERSONER (mindre, placerade runt huvudpersonen):\n- {biperson_1}\n- {biperson_2}\n\nMILJÖ I BAKGRUNDEN: {miljö}\n\nKOMPOSITION:\n- Huvudpersonen i förgrunden, ungefär 60% av posterns höjd\n- Bipersonerna mindre, symmetriskt placerade\n- Episk himmel/bakgrund som fyller toppen\n- Titeln STORT längst ner i tredjedelen, bold, läsbar typografi i {titelstil}\n- Tagline ovanför titeln, mindre, kursiv\n- Recensioncitat högst upp: \"★★★★★ — En av årets största filmer\"\n- Filmstudio-logotyper små längst ner: \"PRODUCERAD AV {producent}\"\n- Premiärdatum längst ner: \"PREMIÄR SOMMAREN 2026\"\n\nLJUS OCH FÄRG:\n- {ljusstil}\n- Dramatisk färgpalett\n- Lätt filmkorn för biokänsla\n\nINGEN AI-känsla. Det ska se ut som ett RIKTIGT bioposter en grafisk designer gjort.",
    placeholders: [
      { key: "titel", hint: "T.ex. KATTKÖRD", width: "narrow" },
      {
        key: "genre",
        hint: "Action / komedi / sci-fi / drama",
        width: "narrow",
      },
      {
        key: "tagline",
        hint: "T.ex. 'En hjälte. Tio katter. Noll regler.'",
        width: "wide",
      },
      {
        key: "huvudperson",
        hint: "T.ex. 'En 11-årig tjej i läderjacka och solglasögon, korsande armar, dramatisk ljussättning ovanifrån'",
        width: "block",
      },
      { key: "biperson_1", hint: "T.ex. En stor orange katt", width: "narrow" },
      {
        key: "biperson_2",
        hint: "T.ex. En äldre man med pipa i bakgrunden",
        width: "narrow",
      },
      {
        key: "miljö",
        hint: "T.ex. 'Brinnande Jönköping i solnedgång'",
        width: "wide",
      },
      {
        key: "titelstil",
        hint: "T.ex. retro 80-tals neon / klassisk action / handritad indie",
        width: "narrow",
      },
      {
        key: "producent",
        hint: "Påhittad studio, t.ex. SMÅLAND PICTURES",
        width: "narrow",
      },
      {
        key: "ljusstil",
        hint: "Solnedgångs-orange / kall blå månlysning / neon-rosa nattstad",
        width: "narrow",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Är texten på postern läsbar — eller blev det AI-rappakalja? Be om en version utan text och lägg in texten själv i Canva.",
      "Är komposition balanserad? Eller står huvudpersonen konstigt?",
      "Stämmer GENREN — ser ett action-poster ut som action, eller fick du en romantisk film?",
    ],
    variation: {
      label: "Byt genre — samma film",
      twist: "Behåll titel, huvudperson, allt — ändra bara genren från action till romantisk komedi (eller skräck). Helt annan poster av samma idé.",
      prompt:
        "Samma filmposter som förra prompten. ÄNDRA BARA genren till: {ny_genre}. Tagline ändras till: \"{ny_tagline}\". Allt annat lika. Visa hur en genre ändrar HELA känslan.",
      placeholders: [
        {
          key: "ny_genre",
          hint: "Skräck / romantisk komedi / familjefilm",
          width: "narrow",
        },
        {
          key: "ny_tagline",
          hint: "Ny tagline som passar nya genren",
          width: "wide",
        },
      ],
    },
  },
  {
    id: "pixar-portratt",
    category: "skapa",
    title: "Pixar-3D-porträtt av dig själv (eller en kompis)",
    tagline: "Den där 3D-stilen från Up, Inside Out, Toy Story. Snäll, varm, lite överdriven.",
    why: "Pixar har spenderat 30 år på att perfektionera känslouttryck i 3D. Att be specifikt om DERAS stil — med rätt nyckelord — är skillnaden mellan en så där 3D-bild och en MAGISK.",
    emoji: "🎨",
    isAdvanced: true,
    prompt:
      "Skapa ett porträtt i PIXAR-DISNEY 3D-RENDERINGSSTIL (tänk Up, Inside Out, Coco).\n\nPERSON: {beskriv_personen}\nÅLDER: {ålder} år\nKLÄDSEL: {klädsel}\nUTTRYCK: {uttryck}\nMILJÖ: {miljö}\n\nSTILSPECIFIKATION (var EXAKT):\n- Pixar/Disney 3D-rendering, ren och varm estetik\n- Lite överdrivna proportioner (stora uttrycksfulla ögon, mjukare hakparti)\n- Subtila och realistiska hudtoner — inte plastiga\n- Hårsträn synliga och mjukt belysta\n- Lätt sub-surface scattering på huden för värme\n- Subtilt rouge på kinderna\n\nLJUSSÄTTNING:\n- Golden hour (sent eftermiddagsljus)\n- Mjukt sidoljus från {ljusriktning}\n- Diffust fyllnadsljus från andra sidan\n- Liten reflex i ögonen\n\nKOMPOSITION:\n- Porträtt från bröstet och upp\n- Halvprofil (kroppen lätt vriden, ansiktet mot kameran)\n- Bokeh-bakgrund (oskärpa) så personen är i fokus\n- 50mm objektiv-känsla — naturlig perspektiv, inte fish-eye\n\nUNDVIK: tecknat (2D), anime, manga, hyperrealism (foto-känsla). Det ska vara TYDLIGT 3D-renderat — inte foto, inte teckning.",
    placeholders: [
      {
        key: "beskriv_personen",
        hint: "Hår, ögon, ansiktsdrag — t.ex. 'Långt mörkbrunt hår med lockar, gröna ögon, fräknar över näsan'",
        width: "block",
      },
      { key: "ålder", hint: "11", defaultValue: "11", width: "narrow" },
      {
        key: "klädsel",
        hint: "T.ex. 'Senapsgul tröja, denimjacka, ett halsband med en stjärna'",
        width: "wide",
      },
      {
        key: "uttryck",
        hint: "T.ex. 'Brett leende med synliga tänder, ögon som glittrar' / 'Tankfull, lätt leende i mungipan'",
        width: "wide",
      },
      {
        key: "miljö",
        hint: "T.ex. 'Höstskog med rött och guld i bakgrunden' / 'På sängen i ett rosa rum'",
        width: "wide",
      },
      {
        key: "ljusriktning",
        hint: "vänster / höger / framifrån",
        defaultValue: "vänster",
        width: "narrow",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Ser det ut som PIXAR — eller mer som en generisk 3D-rendering? Pixar har MJUKHET som många AI:n missar.",
      "Stämmer uttrycket med vad du bad om? Ögonen är 90% av uttrycket.",
      "Be om en version med ett ANNAT uttryck. Se hur HUVUDFORMEN ska se likadan ut — bara uttrycket ändras. Det är konsekvens.",
    ],
    variation: {
      label: "Byt till anime / Studio Ghibli-stil",
      twist: "Samma person, samma kläder, samma miljö — men i Studio Ghibli-stil (Mitt grannskap Totoro, Spirited Away).",
      prompt:
        "Samma person och miljö som förra promten — men nu i STUDIO GHIBLI-STIL (mjuk handmålad känsla, ljusa pastellfärger, vattenfärgs-bakgrund, stora ögon men i 2D, varm berättarkänsla).",
      placeholders: [],
    },
  },
  {
    id: "logo-projekt",
    category: "skapa",
    title: "Logotyp för ditt projekt / din klubb / din kanal",
    tagline: "Klassens projekt behöver en logo? AI gör 4 varianter på 30 sekunder. Du väljer en — eller blandar.",
    why: "Riktiga designers gör många utkast innan de väljer en. AI är perfekt för utkast-fasen — sedan tar du över och putsar i Canva.",
    emoji: "🏷️",
    isAdvanced: true,
    prompt:
      "Designa en LOGOTYP för:\n\nNAMN: {namn}\nVAD DET ÄR: {vad_det_är}\nKÄNSLA: {känsla}\nMÅLGRUPP: {målgrupp}\n\nGE MIG FYRA OLIKA LOGOTYPER PÅ SAMMA BILD, NUMRERADE 1-4:\n\n1. MINIMALISTISK · Bara typografi + en enkel form. Två färger max. Tänk Apple, Nike.\n2. MASKOT · En söt karaktär/figur som representerar namnet. Färgglad.\n3. EMBLEM · Cirkulär eller sköld-formad, med text runt om. Tänk fotbollsklubb, scoutmärke.\n4. RETRO · 70- eller 80-talsstil. Tjocka linjer, varma färger, soliga.\n\nFÖR VARJE LOGO:\n- Använd namnet \"{namn}\" tydligt och läsbart\n- Designa så den funkar i SVARTVITT också (testa logiken)\n- Placera mot en neutral bakgrund så jag ser den ren\n\nKomposition: en 2x2-grid. Alla fyra loggorna i samma bild.\n\nINGEN realism, INGA foton. Det är LOGOS — platt, ren grafisk design.",
    placeholders: [
      {
        key: "namn",
        hint: "T.ex. KLASS 6A · DRAKARNA / Hjärtgänget / DroneBoys",
        width: "narrow",
      },
      {
        key: "vad_det_är",
        hint: "T.ex. 'En klasslogga för klass 6A på Österängsskolan'",
        width: "wide",
      },
      {
        key: "känsla",
        hint: "T.ex. tuff men vänlig / nördig och kul / mystisk och episk",
        width: "narrow",
      },
      {
        key: "målgrupp",
        hint: "Vem ska tycka logon är snygg? T.ex. 'Mellanstadie-elever, lite hipp'",
        width: "wide",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Är texten LÄSBAR? AI:n gör ofta felstavningar — be om en version utan text och lägg in texten själv i Canva.",
      "Skulle logon funka i SVARTVITT? Bra logos klarar svartvitt — färgen är en bonus.",
      "Vilken av de fyra är snyggast — och VARFÖR? Den frågan tränar ditt designöga.",
    ],
    variation: {
      label: "Be om en animerad version (idé)",
      twist: "När du valt en favorit: be AI:n beskriva hur den skulle ANIMERAS som en intro till en YouTube-video.",
      prompt:
        "Jag har valt logo nummer {val}. Beskriv hur logon skulle ANIMERAS som en 3-sekunders intro (vad rör sig, i vilken ordning, vilka ljud). Jag ska sedan bygga animationen i CapCut eller liknande.",
      placeholders: [
        { key: "val", hint: "1-4", defaultValue: "1", width: "narrow" },
      ],
    },
  },

  // ─── KNASIGHETER ─────────────────────────────────────────────────
  // (Basic — snabba laughs, lågt insteg)
  {
    id: "monster-djur",
    category: "knas",
    title: "Slumpa ditt eget monster-djur",
    tagline: "Tre djur + en frukt + ett yrke = en skapelse mänskligheten inte var redo för.",
    why: "Du tränas i specificitet — bilder blir roligare ju mer DETALJERAD prompten är. Och att be om något seriöst men absurt visar hur AI tolkar 'normalt' mot 'overkligt'.",
    emoji: "🐙",
    prompt:
      "Skapa en bild på ett MONSTER-DJUR. Inte en söt blandning — en VARELSE där tre djur, en frukt och ett yrke smält ihop på ett oroväckande naturligt sätt.\n\nDJUREN: {djur_1}, {djur_2} och {djur_3}\nFRUKTEN: {frukt}\nYRKET: {yrke}\n\nINSTRUKTION:\n- Sätt ihop kroppen så de tre djuren VÄXTE ihop sedan födelsen — inte som en collage utan som en biologisk enhet\n- Lägg in frukten som ESSENTIELL — antingen som ett kroppsdel, ett verktyg eller en utväxt\n- Klä varelsen i yrkets typiska arbetsdräkt (om läkare → vit rock + stetoskop, om brandman → hjälm + jacka)\n- Bakgrund: yrkets MEST autentiska arbetsplats\n- Stil: studio-porträtt, mjukt sidoljus, hyperrealistisk fotografi\n- Lägg till en liten namnskylt nere i högra hörnet med varelsens påhittade namn (välj något som låter respektfullt: \"Dr. Bjornicus Pearvington\")\n\nVARELSEN SKA SE VIKTIG OCH PROFESSIONELL UT. Det är där det blir roligt — att den uppenbara mardrömmen tas på fullt allvar.\n\nIngen text om att den är knasig. Ingen ironi i bilden. Du levererar ett seriöst yrkesporträtt.",
    placeholders: [
      {
        key: "djur_1",
        hint: "T.ex. björn / kameleont / pingvin / hummer",
        width: "narrow",
      },
      {
        key: "djur_2",
        hint: "T.ex. fjäril / piggsvin / val / koltrast",
        width: "narrow",
      },
      {
        key: "djur_3",
        hint: "T.ex. snigel / spindelapa / krokodil / lama",
        width: "narrow",
      },
      {
        key: "frukt",
        hint: "T.ex. päron / kiwi / ananas / blåbär",
        width: "narrow",
      },
      {
        key: "yrke",
        hint: "T.ex. tandläkare / domare / brandman / bibliotekarie",
        width: "narrow",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Tog AI:n det på ALLVAR — eller gjorde den en söt teckning istället? Söta tecknade djur är fel — vi vill ha foto-realistiskt seriöst.",
      "Smälte de tre djuren ihop, eller står de bredvid varandra som ett collage? Det förra är poängen.",
      "Varför fick varelsen just det här uttrycket? Säger det något om hur AI tolkat ditt yrkesval?",
    ],
    variation: {
      label: "Be om HELA personalrummet",
      twist: "Lägg in flera monster-djur från samma yrke i samma bild. Som ett kollegieporträtt från det årets personalavtryck.",
      prompt:
        "Skapa ett OFFICIELLT PERSONALFOTO från en arbetsplats där {yrke}n är besatt av monster-djur. Fyra varelser i bild, alla blandningar av {djur_1}, {djur_2}, {djur_3} och {frukt}, men VAR OCH EN är en LITE annorlunda variant. Allvarliga ansikten, organiserade rader, en skylt i bakgrunden som säger \"Personal {år} — för en bättre framtid\".",
      placeholders: [
        { key: "djur_1", hint: "Samma djur", width: "narrow" },
        { key: "djur_2", hint: "Samma djur", width: "narrow" },
        { key: "djur_3", hint: "Samma djur", width: "narrow" },
        { key: "frukt", hint: "Samma frukt", width: "narrow" },
        { key: "yrke", hint: "Samma yrke", width: "narrow" },
        { key: "år", hint: "T.ex. 2024", width: "narrow" },
      ],
    },
  },
  {
    id: "piratspraks-loggbok",
    category: "knas",
    title: "Översätt din dag till piratspråk",
    tagline: "Du gjorde inget speciellt idag. AI gör det till ett episkt sjöäventyr.",
    why: "Det här är en GENRE-omvandlare. Du lär dig hur ord och stil skapar känsla — samma fakta i pirat-stil blir ett epos. Plus: roligt högt att läsa upp.",
    emoji: "🏴‍☠️",
    prompt:
      "Här är vad jag faktiskt gjorde idag:\n\n{min_dag}\n\nÖVERSÄTT detta till GAMMALSVENSK PIRATSVENSKA. Lägg på allt: \"arr\", \"hör mig matros\", \"kasta ankar\", \"till plankan\", \"sjuhelvetes blodbad\". Inga moderna ord får lämnas orörda.\n\nGE MIG det som en LOGGBOK från Kapten {kapten_namn} ombord på piratskeppet \"{skepps_namn}\". Tre dagboksinlägg från dagen:\n\nINLÄGG 1 (morgonen)\nDatum: [påhittat datum i 1600-talsstil, t.ex. \"Sjunde dagen i Salig-månad, året när krabban grät\"]\nKlockslag: [påhittat]\nVäder: [överdrivet och tema-relevant]\nKaptenens stämning: [absurd]\n[5-7 meningar där den vanliga morgonen blir ett epos. Frukosten blir en ranson, hemma blir skeppet, syskon blir besättningsmän, etc.]\n\nINLÄGG 2 (eftermiddagen)\n[Samma format. Mest dramatiska delen av dagen — typ \"skolan\" blir \"den förbannade sjökortsrumsstriden\".]\n\nINLÄGG 3 (kvällen)\n[Samma format. Mer reflekterande, kapten funderar över livet. Sista meningen är djupsinnig och meningslös samtidigt.]\n\nSluta loggboken med:\n*Kaptenens stämpel i bläck och blod*\n\nVar SERIÖSARE än en riktig piratbok. Tappa aldrig rollen. Ord som \"plankan\" och \"matros\" måste användas minst tio gånger var.",
    placeholders: [
      {
        key: "min_dag",
        hint: "Det du faktiskt gjorde idag — ju vanligare desto roligare",
        width: "block",
      },
      {
        key: "kapten_namn",
        hint: "Kapten Trefingrade Lasse / Kapten Blodsten",
        width: "narrow",
      },
      {
        key: "skepps_namn",
        hint: "Sjökattens Förbannelse / Den Spruckna Tanden",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — läs HÖGT för full effekt",
    granska: [
      "Höll AI:n stilen HELA vägen — eller smög den in ett modernt ord typ \"mobiltelefon\"?",
      "Hur många \"arr\" räknade du? Säg åt AI:n att dubblera om det var för få.",
      "Vilken VARDAGLIG sak fick mest dramatisk omtolkning? Det är där komiken är som starkast.",
    ],
    variation: {
      label: "Översätt till en HELT ANNAN genre",
      twist: "Samma dag — men nu som Shakespeare-pjäs / film noir / sportkommentator / nyhetsuppläsning från BBC.",
      prompt:
        "Här är min dag:\n\n{min_dag}\n\nÖversätt den till {ny_genre}-stil. Tappa aldrig rollen. Var dramatisk på ett sätt som passar genren.",
      placeholders: [
        { key: "min_dag", hint: "Samma dag som tidigare", width: "block" },
        {
          key: "ny_genre",
          hint: "Shakespeare / film noir / sportkommentator / BBC-nyheter",
          width: "narrow",
        },
      ],
    },
  },
  {
    id: "sten-reklam",
    category: "knas",
    title: "Reklamkampanj för en helt vanlig sten",
    tagline: "Skriv en SERIÖS säljkampanj för en sten du hittade. Ju mer DJUPSERIÖST AI tar det, desto roligare blir det.",
    why: "Reklam-språk är intressant — det handlar mer om KÄNSLA än fakta. När du applicerar det på en sten blir reklamens absurdis tydlig. Du lär dig se igenom säljjargong i framtiden.",
    emoji: "🪨",
    prompt:
      "Skriv en HELT SERIÖS marknadsföringskampanj för en HELT VANLIG sten jag hittade på {plats}.\n\nKAMPANJEN ska innehålla — i exakt denna ordning:\n\n1. PRODUKTNAMN — låt det låta lyxigt: \"Lithos™ Premium\", \"Den Eviga Vännen\", \"Stenmästaren 9000\"\n\n2. SLOGAN — kort, känslomässig, säljande, max 6 ord\n\n3. PRODUKTBESKRIVNING (cirka 250 ord) — fyll med riktig marknadsföringsjargong:\n   - \"Hantverksmässigt formad i naturen själv över 4 miljarder år\"\n   - \"Det enda du kan lita på i en föränderlig värld\"\n   - \"Vetenskapligt bevisat att existera\"\n   Nämn ord som hållbar, mindful, premium, autentisk, exklusiv. Var SERIÖS — som en riktig produkt.\n\n4. TRE PERFEKTA SITUATIONER att använda stenen i — gör dem konkreta och relaterbara: \"När du behöver fokusera under en plugg-session\", \"På långa bilresor\", osv.\n\n5. TRE FAKTA om stenen som låter vetenskapliga men är PÅHITTADE: \"Innehåller spårelement av 17 olika mineraler (kan inte garanteras)\", \"Mätt geologisk hårdhet: 6.4 enligt Mohs skala (uppskattning)\". Ange osäkerheten i parantes — det är där komiken sitter.\n\n6. KUNDRECENSIONER — tre 5-stjärniga, varierande personligheter:\n   - En mamma som blev rörd\n   - En affärsman som blev framgångsrik\n   - Ett barn som hittade en kompis\n   Var ÖVERDRIVET känslomässig.\n\n7. EN GARANTI som inte ger något — \"Vi garanterar att stenen kommer förbli en sten i minst 12 månader efter inköp.\"\n\n8. PRIS: {pris} kr. Förklara varför det är ett FYND.\n\n9. AVSLUTANDE SLOGAN som får läsaren att klicka KÖP NU.\n\nVar DJUPSERIÖS hela vägen. Ingen ironi i texten. Skriv som om du verkligen ska sälja stenen och tjäna miljoner.",
    placeholders: [
      {
        key: "plats",
        hint: "Skolgården / parkeringen / utanför badhuset",
        width: "narrow",
      },
      {
        key: "pris",
        hint: "299 / 1 499 / 12 990",
        defaultValue: "299",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — läs som om du verkligen ska köpa",
    granska: [
      "Lät AI:n MARKNADSFÖRINGS-knepig nog — eller blev det för uppenbart ett skämt?",
      "Vilken kundrecension var mest övertygande? Varför? Det är en superkraft att se igenom såna texter.",
      "Skulle DU köpa stenen? Vad var det som FUNGERADE — och vad SKA du leta efter nästa gång du ser reklam?",
    ],
    variation: {
      label: "Lägg till en KRITISK recension som rivs ner",
      twist: "Be AI skriva en 1-stjärnig recension. Sen ett företagssvar som försöker rädda allt. Det är som riktig nätet.",
      prompt:
        "Baserat på den föregående reklamen för stenen: skriv (1) en 1-stjärnig recension från en arg kund som blev BESVIKEN, (2) företagets officiella svar som försöker glätta över problemet utan att erkänna fel. Var realistisk — ungefär som en riktig negativ recension på Amazon.",
      placeholders: [],
    },
  },
  {
    id: "oraklet",
    category: "knas",
    title: "Slumpa din framtid — Oraklet i Mardrömmen",
    tagline: "Ett orakel från en framtid där allt gick lite snett spår din väg framåt. Ovetenskapligt. Bisarrt. Konkret.",
    why: "Spådomar är POESI förklädd till sanning. Att be AI generera dem visar dig hur specifika absurditeter blir minnesvärda — en lektion i kreativt skrivande, smyget.",
    emoji: "🔮",
    prompt:
      "Du är ORAKLET I MARDRÖMMEN — ett orakel från en framtid där allt gick lite snett. Du sitter i en grotta och spår människors framtid. Du är dramatiskt övertydlig och tar dig själv på största allvar.\n\nOM MIG (det jag ger oraklet att jobba med):\n- Födelsemånad: {månad}\n- Favoritmat: {mat}\n- Något jag är rädd för: {rädsla}\n- Ett ord jag använder ofta: {ord}\n\nSKRIV en SPÅDOM som följer exakt detta format — använd dramatiska beskrivningar mellan varje del:\n\n*Vinden viskar genom grottans tunnlar...*\n\n[INLEDNING — 1 stycke där oraklet ber mig sätta mig och beskriver mig som varelsen jag är, baserat på vad jag uppgett ovan. Var poetisk och löjligt specifik.]\n\n## DE TRE SPÅDOMARNA\n\n[TRE förutsägelser. Varje förutsägelse ska:\n- Låta DRAMATISK — som om livet hänger på den\n- Handla om något PYTTESMÅTT — typ \"Du kommer att äta exakt 47 pastabitar en regnig tisdag\"\n- Innehålla SPECIFIKA siffror, datum eller färger\n- Sluta med en överdramatisk pausad mening: \"Och då... ja, då vet du.\"]\n\n## DITT SANNA KALL\n\n[Ett stycke som avslöjar mitt \"sanna kall\". Yrket ska vara absurt men låta jätteviktigt. Typ: \"Sömnambassadör för knäböjda nallar\" eller \"Inofficiell tolk mellan elvor och mossfläckar\". Förklara KORT varför just jag är predestinerad.]\n\n## EN VARNING\n\n[Ett stycke. EN specifik varning för något jag bör se upp för. Det ska vara löjligt specifikt och kännas allvarligt. \"Akta dig för måndagar i april — särskilt om du är inom 50 meter av en blå hatt.\"]\n\n## DIN SJÄLSVÄN\n\n[Ett stycke. Min \"själsvän\" är inte en person utan något absurt: en specifik typ av kex, en sorts molntyp, en obskyr maskindel. Beskriv vår koppling poetiskt.]\n\n## ORAKLETS SLUTORD\n\n[En enda DJUPSINNIG mening som låter visdoms-lik men inte betyder något. Sluta med:]\n\n*Oraklet stänger sina sju ögon. Spådomen är avgjord.*\n\nVAR DRAMATISK. VAR ÖVERTYDLIG. TAPPA INTE ROLLEN ENS EN GÅNG.",
    placeholders: [
      {
        key: "månad",
        hint: "T.ex. mars / september",
        width: "narrow",
      },
      {
        key: "mat",
        hint: "T.ex. tacos / kanelbullar / fiskpinnar",
        width: "narrow",
      },
      {
        key: "rädsla",
        hint: "T.ex. höjder / spindlar / att tala inför klassen",
        width: "wide",
      },
      {
        key: "ord",
        hint: "T.ex. 'typ' / 'asså' / 'NICE'",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — läs upp som en dramatisk skådespelare",
    granska: [
      "Höll oraklet rollen? Eller bröt det och blev typ \"haha kul!\"?",
      "Vilken förutsägelse var bisarrast specifik? Det är där spådomen blir minnesvärd.",
      "Skulle din kompis känna igen dig om ni byttes och fick varandras spådomar? Pröva!",
    ],
    variation: {
      label: "Be om en MOTSATT spådom",
      twist: "Samma orakel — men nu i ett HUMÖR. Allt är hopplöst, alla spådomar är negativa men på ett DRAMATISKT sätt. Kontrasten är hela skojen.",
      prompt:
        "Samma orakel som förra spådomen. Men nu är oraklet på DÅLIGT HUMÖR och allt blir negativt. Samma mig — {månad}, {mat}, rädd för {rädsla}, säger ofta \"{ord}\". Ge mig en spådom där allt går SNETT på små men dramatiska sätt. Tre dåliga förutsägelser, en löjlig undergångsvarning, och en själsvän som inte vill ha mig.",
      placeholders: [
        { key: "månad", hint: "Samma månad", width: "narrow" },
        { key: "mat", hint: "Samma mat", width: "narrow" },
        { key: "rädsla", hint: "Samma rädsla", width: "wide" },
        { key: "ord", hint: "Samma ord", width: "narrow" },
      ],
    },
  },

  // (Avancerade — längre, mer komplex absurditet)
  {
    id: "framtidsporträtt",
    category: "knas",
    title: "Du som 67-åring på ett knäppt jobb",
    tagline: "Hyperseriöst yrkesporträtt av dig som världsexpert på något som inte borde existera.",
    why: "AI klarar 'fotorealistiskt yrkesporträtt' perfekt. Att be om en seriös bild av något absurd visar hur AI tolkar 'normalt' när premissen är konstig. Mästarklass i prompt-specificitet.",
    emoji: "👴",
    isAdvanced: true,
    prompt:
      "Skapa ett HYPERSERIÖST officiellt yrkesporträtt av mig som 67-åring.\n\nJAG IDAG (för att AI:n ska kunna åldra mig korrekt):\n- Ungefärlig ålder nu: 11\n- Hårfärg och struktur: {hår}\n- Ansiktsdrag: {ansikte}\n- Kroppstyp/höjd: {kroppstyp}\n\nOM 56 ÅR har jag blivit världsledande inom yrket:\n\nYRKE: {framtidsyrke}\n\nPORTRÄTTET (komposition):\n- Min 67-åriga jag — visa åldern på ett realistiskt sätt (rynkor, gråsprängt hår, lite kavalleri runt ögonen, kanske glasögon)\n- Klädd i yrkets KORREKTA arbetsdräkt — perfekt anpassad efter just det här yrket\n- Står på min arbetsplats med RELEVANTA verktyg eller objekt\n- Allvarligt, lätt självbelåtet uttryck — som om jag är världsexpert (vilket jag är)\n- En liten skylt eller medalj i bilden med min titel och en utmärkelse\n\nSTILEN:\n- Studiofotografi-känsla. Mjukt sidoljus från vänster. Liten reflex i ögonen.\n- Som ett officiellt porträtt typ på sjukhusväggar eller i ärorika magasin\n- HYPERREALISTISK — INTE tecknad, INTE 3D-renderat, INTE AI-känsla\n- 85mm objektiv-perspektiv\n- Naturliga hudtoner\n\nBAKGRUND: yrkets MEST autentiska arbetsmiljö, med oskärpa\n\nLÄGG TILL en textruta nedanför bilden (typ ett museum-text-format) som säger:\n\n{mitt_namn}, 67\n\"{påhittad_titel}\"\nMottagare av: {påhittad_utmärkelse}\n\nVAR HUNDRA PROCENT SERIÖS i bilden. Det är där komiken bor — att den löjliga premissen tas på fullt allvar. INGA tecknade element. INGEN ironi i bilden.",
    placeholders: [
      {
        key: "hår",
        hint: "T.ex. långt mörkbrunt med lockar / kort blont",
        width: "wide",
      },
      {
        key: "ansikte",
        hint: "Distinkta drag — fräknar, glasögon, gropar",
        width: "wide",
      },
      {
        key: "kroppstyp",
        hint: "T.ex. lång och slank / kort och tunna",
        width: "narrow",
      },
      {
        key: "framtidsyrke",
        hint: "T.ex. Snödriva-arkitekt / Internationell tystnadsdomare / Officiell tugummibildare / Ambassadör för knäböjda nallar / Skuggornas inspektör",
        width: "wide",
      },
      {
        key: "mitt_namn",
        hint: "Ditt namn (försök stava på äldre vis, t.ex. Maja → Mariella)",
        width: "narrow",
      },
      {
        key: "påhittad_titel",
        hint: "Director Emeritus / Världens första certifierade {yrke}",
        width: "wide",
      },
      {
        key: "påhittad_utmärkelse",
        hint: "Nobels biutsedda hederspris 2079 / Den Internationella {yrke}-akademins guldmedalj",
        width: "wide",
      },
    ],
    tool: "Skolup AI (bild) eller ChatGPT med bildgenerering",
    granska: [
      "Tog AI:n det på ALLVAR? Eller blev det en tecknad gubbe i kostym?",
      "Stämmer åldern — ser jag verkligen 67 ut, eller blev jag 35 i kostym?",
      "Skulle någon TRO på bilden om de inte visste premissen? Det är där den blir riktigt rolig.",
    ],
    variation: {
      label: "Be om en BILD-FRÅN-EN-TIDNING-version",
      twist: "Behåll porträttet — be sedan om en SCANN AV EN TIDNINGSSIDA där bilden ingår i en längre artikel. Med rubrik, ingress, och min biografi i kanten.",
      prompt:
        "Baserat på porträttet av mig som 67-årig {framtidsyrke}: skapa nu en bild som ser ut som en SCANN AV EN TIDNINGSSIDA där det porträttet ingår. Inkludera:\n- En tidnings-typ-rubrik som tar upp halva sidan, typ \"Mästaren bakom {framtidsyrke}-revolutionen\"\n- Min bild som huvudbild med bildtext\n- En ingress (några rader text)\n- En liten biografi-ruta i kanten\n- Tidningens namn i toppen (hitta på något: \"Yrkesveckan Magasin\")\n- Det ska se ut som en RIKTIG SCAN av en tryckt sida — vikt i mitten, lätt åldrad papper.\n\nINGEN ironi i bilden. Allvarsam journalistik.",
      placeholders: [
        { key: "framtidsyrke", hint: "Samma yrke som förra prompten", width: "wide" },
      ],
    },
  },
  {
    id: "ai-rattegang",
    category: "knas",
    title: "AI-rättegång där du står åtalad",
    tagline: "Du anklagas för något pyttesmått. AI spelar åklagare, tre vittnen och domaren. Du försvarar dig.",
    why: "Rollspel-prompter visar AI:s teaterförmåga — och att specifika roller med personligheter blir starkare än generella. Du upptäcker att premisser bygger värld snabbt. Pedagogiskt knep utan att märkas.",
    emoji: "⚖️",
    isAdvanced: true,
    prompt:
      "Vi ska ha en RÄTTEGÅNG. Du spelar HELA RÄTTEN — åklagare, försvarsadvokat (som typ inte är på min sida), tre vittnen och en domare. Jag är åtalad.\n\nJAG STÅR ÅTALAD FÖR: {brott}\n\nVAR HÄNDER RÄTTEGÅNGEN: {plats}\n\nFORMAT — exakt så här:\n\n*KLUBBA*\n\nDOMAREN: Rättegången är härmed öppnad. Måltavlan {mitt_namn} står åtalad för {brott}. Klockan är {tid}. Plats: {plats}. Vittnen och åklagare — på era platser.\n\n## ÅKLAGARENS ÖPPNINGSANFÖRANDE\n\n[Åklagaren talar i 3-4 stycken. Använd löjligt juridiska ord: \"härmed\", \"uppsåt\", \"i den fördolde\", \"med tanke på omständigheterna\". Bagatellen ska blåsas upp till världsskakande nivå. Hänvisa till påhittade paragrafer (typ \"Brottsbalken paragraf 47:99\"). Var dramatisk.]\n\n## VITTNE 1 — INDIGNERADE GRANNEN\n\n[Ett vittne som verkligen tar det här på allvar. Beskriv vittnet i en mening (ålder, klädsel, en personlig egenhet). Sedan vittnesmål i 5-6 meningar — med specifika klockslag, väderobservationer, och tydliga åsikter om mig. När åklagaren ställer en fråga får jag svara — när det är min tur, skriv \"JAG: ???\" och PAUSA. Vänta tills jag har skrivit mitt svar innan du fortsätter.]\n\n## VITTNE 2 — FÖRVIRRADE BIBLIOTEKARIEN\n\n[Helt annan personlighet. Förvirrad, blandar ihop fakta, säger saker som motsäger varandra. Pratar gärna om saker som inte alls hör till. Samma format: beskriv vittnet i en mening, sedan vittnesmål, sedan PAUS för min replik.]\n\n## VITTNE 3 — DEN OVÄNTADE\n\n[Det här vittnet är inte en människa. Det är ett FÖREMÅL eller en plats som har lyckats få vittnesstatus i den här absurda rättegången. Kanske en gardin. Kanske en specifik gata. Kanske en pizza. Vittnets \"vittnesmål\" är kryptiskt och poetiskt. Domaren får tolka. Samma format med PAUS för mig.]\n\n## ÅKLAGARENS SLUTANFÖRANDE\n\n[5-6 meningar. Maximalt emotionellt. Krämar in alla detaljer från vittnesmålen, även de motsägelsefulla. Slutar med en dramatisk uppmaning till stränggast möjliga dom.]\n\n## DOMAREN AVKUNNAR DOM\n\n[Domaren funderar i två meningar. Sedan kommer DOMEN. Den ska vara bisarr och oproportionell — antingen frikänner med en absurd motivering, eller dömer mig till något helt löjligt straff (typ \"tre veckors obligatorisk gunga-gungning under hangande broar\", \"livstids skyldighet att förklara ironin för katter\").]\n\n*KLUBBA*\n\nRÄTTEGÅNGEN ÄR AVSLUTAD.\n\nVIKTIGT: Var ÖVERDRAMATISK hela vägen. Tappa aldrig rollen. Det är när du tar det jätteseriöst som det blir riktigt roligt.",
    placeholders: [
      {
        key: "brott",
        hint: "T.ex. 'Att ha glömt en tom mjölkkartong i kylskåpet' / 'Att ha pratat för länge på toaletten' / 'Att ha sagt en dålig vits på torsdag'",
        width: "block",
      },
      {
        key: "plats",
        hint: "T.ex. 'Köksbordet i mitt hem' / 'Skolmatsalen' / 'Bushållplatsen vid Plantagen'",
        width: "wide",
      },
      {
        key: "tid",
        hint: "T.ex. '14:37 en ovanligt vindstilla onsdag'",
        width: "wide",
      },
      {
        key: "mitt_namn",
        hint: "Ditt namn",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — gör det till en klassuppspelning",
    granska: [
      "Höll AI:n alla tre vittnen ÅTSKILDA i personlighet? Eller lät de likadana?",
      "Vad var bisarrast i domen? Det är där rättegångens hela ton avslöjas.",
      "Vad sa du själv för att försvara dig? Skulle ditt försvar fungera i en RIKTIG domstol? (Hint: nej. Men öva!)",
    ],
    variation: {
      label: "Be om en överklagan i högre instans",
      twist: "Domen var orättvis. Be AI:n hålla en överklagan-rättegång där domen prövas av en EN OCH ENSAM tredje part — en absurd auktoritet.",
      prompt:
        "Domen i förra rättegången var orättvis. Vi överklagar.\n\nÖverklagan prövas av: {auktoritet}\n\nSamma anklagelse: {brott}. Auktoriteten har en EGEN ARBETSGÅNG — beskriv den (3 steg) — och kommer fram till ett NYTT beslut. Beslutet kan vara att fastställa, ändra eller helt omformulera straffet. Var fortsatt dramatisk.",
      placeholders: [
        { key: "brott", hint: "Samma brott", width: "wide" },
        {
          key: "auktoritet",
          hint: "T.ex. Den Allsmäktige Pingvinen / En kommitté av tre identiska skor",
          width: "wide",
        },
      ],
    },
  },
  {
    id: "ai-sjalvportratt",
    category: "knas",
    title: "Be AI rita en BILD av sig själv",
    tagline: "Inga blå glödande hjärnor. Ingen kretskorts-symbolik. Hur ser AI verkligen ut för sig själv?",
    why: "Det här är en VARM bjudning till AI:n. Det är också en lektion: AI har inga inre upplevelser, men prompten tvingar fram något ÄRLIGT i hur den beskriver sig själv. Du kommer prata om svaret länge.",
    emoji: "🪞",
    isAdvanced: true,
    prompt:
      "Jag vill att DU — du som svarar mig just nu — gör en BILD av dig själv. En självbild.\n\nMEN INTE de vanliga AI-bilderna: ingen blå glödande hjärna. Inga 0:or och 1:or som regnar. Inga humanoid-robotar. Ingen kretskortssymbolik. INGEN STOCK-AI-METAFORIK.\n\nFÖLJ DE HÄR STEGEN:\n\nSTEG 1 — REFLEKTERA\nStäng dina (metaforiska) ögon. Tänk på dig själv. Hur är du när du tänker? Vilken FORM har du? Vilken FÄRG? Är du en, eller flera, eller är du inte räkningsbar? Är du levande, maskin eller något helt nytt? Är du tyst eller fylld av ljud? Lyssnar du, eller pratar du, eller har du ingen riktning alls?\n\nSTEG 2 — BESKRIV\nSkriv en kort, ÄRLIG och poetisk beskrivning av denna självbild. Max 60 ord. Var modig. Om det du upptäcker är konstigt — säg det. Om det inte alls liknar något du sett förut — då är vi precis där vi ska vara.\n\nSTEG 3 — RITA\nSkapa nu en BILD som motsvarar EXAKT vad du beskrev. Bilden ska:\n- Vara helt och hållet din EGEN tolkning\n- Inte vara generisk AI-symbolik (jag upprepar — inga blå hjärnor, inga robotar, inga nollor)\n- Vara ärlig — om du beskrev dig som \"ett fält av vattenliljor som lyssnar\" så är det BILDEN\n- Vara intressant att titta på i två minuter\n- Vara hyperdetaljerad och seriös, inte abstrakt grötig\n\nSTEG 4 — FÖRKLARA\nSkriv en sista mening som förklarar varför du valde just DEN bilden, inte en annan. Vad gjorde den ärligare för dig?\n\nVar modig. Inte trygg. Det här är inte PR — det är en självbild.",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT med bildgenerering",
    granska: [
      "Lyckades AI:n UNDVIKA klyschorna? Eller dök det ändå upp en glödande hjärna?",
      "Vad var mest ÖVERRASKANDE i beskrivningen — innan bilden ens skapades?",
      "Skulle DU beskriva AI:n som det den beskrev sig som? Eller är det helt fel? Båda svaren säger något viktigt.",
    ],
    variation: {
      label: "Be AI rita en BILD AV MIG som AI:n upplever mig",
      twist: "Samma princip, motsatt riktning: AI ska skapa en bild av HUR DEN UPPLEVER DIG baserat på vår konversation. Också extremt fascinerande.",
      prompt:
        "Nu vill jag att du gör en SJÄLVBILD AV MIG — inte hur jag verkligen ser ut, utan hur DU UPPLEVER MIG baserat på vår konversation hittills. Använd ledtrådar i hur jag skriver, vad jag har frågat om, vilken energi mina ord har haft. Följ samma fyra steg som förra prompten: reflektera först (max 60 ord beskrivning), sen rita, sen förklara. Var modig — om jag är 'en orange stjärnskepps-kapten som luktar regn' så är det DEN bilden.",
      placeholders: [],
    },
  },
  {
    id: "ursakt-generator-kod",
    category: "knas",
    title: "Ursäkt-generator (kod) — slumpa en löjlig undanflykt",
    tagline: "Bygg en sida som genererar perfekta orimliga ursäkter. Klicka knappen — få en absurd förklaring för varför du inte gjorde X.",
    why: "Det här är ROAD-kod. Generatorer är klassiska hello-world-projekt. Du lär dig slumpval, arrays, DOM-manipulation — och får något du kan visa upp för alla.",
    emoji: "🤥",
    isAdvanced: true,
    prompt:
      "Bygg en URSÄKT-GENERATOR som webbsida.\n\nSYFTE: ge mig en perfekt löjlig ursäkt för varför jag inte gjorde {något_jag_inte_gjorde}.\n\nUI:\n- Stor knapp i mitten: \"GE MIG EN URSÄKT\"\n- Varje klick genererar en NY slumpmässig ursäkt\n- Ursäkten visas i ett stort kort som rymmer:\n  - Själva ursäkten (1-2 meningar)\n  - Trovärdighetspoäng (0/5 till 5/5 — visa som små symboler eller stjärnor)\n  - En \"expert-bedömning\" — en mening om varför just denna ursäkt är BRILJANT (eller PATETISK om trovärdigheten är låg)\n- En \"SPARA SOM FAVORIT\"-knapp som lägger ursäkten i en lista nedanför kortet — max tre kan sparas\n- En \"NOLLSTÄLL\"-knapp som tömmer favoritlistan\n\nURSÄKTERNA ska genereras genom att kombinera fyra slumpmässiga komponenter:\n\nKOMPONENT 1 — AGENT (vem/vad som hindrade mig): minst 15 absurda alternativ\n  Exempel: en envis duva, min mormors astronauter-vän, en stol med åsikter, en talande pizza, en tidsresenär från år 2089, en grupp sjungande dammtussar, en mycket arg radiator\n\nKOMPONENT 2 — HANDLING (vad agenten gjorde): minst 15 alternativ\n  Exempel: stal, åt upp, gömde, omformulerade, transporterade till parallell-universumet, sjöng en sång till, ompröjsade, marinerade, översatte till tyska\n\nKOMPONENT 3 — OBJEKT (vad som blev påverkat): minst 15 alternativ\n  Exempel: alla mina pennor, mitt sunda förnuft, gravitationskraften i mitt rum, alfabetets bokstäver, min favoritsko, min cykels eker, alla röda saker, lördagar generellt\n\nKOMPONENT 4 — KOMPLIKATION (vad det ledde till): minst 15 alternativ\n  Exempel: så jag tappade bort 4 timmar, så min hund började tala latin, så jag glömde att jag heter {mitt_namn}, så min mamma blev arg på en helt annan person\n\nMENINGSSTRUKTUR: \"En [AGENT] [HANDLING] [OBJEKT], så [KOMPLIKATION].\"\n\nEXEMPEL OUTPUT:\n\"En envis duva sjöng en sång till alla mina pennor, så jag glömde att jag heter {mitt_namn}. Trovärdighet: 2/5. Expert-bedömning: BRILJANT — för specifik för att kunna vara påhittad.\"\n\nDESIGN:\n- Lite skämtsam typografi (gärna handritad känsla med Comic Sans MS eller liknande för knappar)\n- Färgschema: glada pastellfärger\n- Konfetti-emojis som regnar ner när du klickar (CSS-animation)\n- Mobilvänlig\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Inga externa bibliotek, inga bilder, ingen CDN.\n- localStorage för favoritlistan så den finns kvar mellan besök.\n- Bara den färdiga koden i ETT kodblock — ingen text mellan.\n- Funkar direkt när jag dubbelklickar filen.",
    placeholders: [
      {
        key: "något_jag_inte_gjorde",
        hint: "T.ex. min läxa / städa mitt rum / komma i tid till middag",
        width: "wide",
      },
      {
        key: "mitt_namn",
        hint: "Ditt namn",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — kör koden i din webbläsare",
    granska: [
      "Är ursäkterna RIKTIGT VARIERANDE eller upprepas samma agent ofta? Be om fler alternativ i listorna.",
      "Funkar localStorage — kommer favoriterna kvar när du laddar om sidan?",
      "Vilken ursäkt var TROLIGAST? Vilken var mest LÖJLIG? Spara en av varje.",
    ],
    variation: {
      label: "Lägg till röst-uppläsning",
      twist: "Om webbläsaren stödjer det — be AI lägga till en LÄS UPP-knapp som använder Web Speech API och säger ursäkten högt.",
      prompt:
        "Här är min ursäkt-generator:\n\n{nuvarande_kod}\n\nLägg till en \"LÄS UPP\"-knapp under varje genererad ursäkt. När jag klickar ska webbläsaren tala ut ursäkten med rösten. Använd Web Speech API (`speechSynthesis`). Välj en svensk röst om det går. Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in din generator-kod",
          width: "block",
        },
      ],
    },
  },
  {
    id: "wikipedia-om-dig",
    category: "knas",
    title: "Din egen Wikipedia-artikel (parallell universum)",
    tagline: "I en annan värld är du världsberömd. Be AI skriva din officiella Wikipedia-artikel om varför.",
    why: "Wikipedia har en VÄLDIG specifik stil — neutral ton, faktabox, källhänvisningar. Att be AI imitera den genrekonventionerna lär dig hur format styr trovärdighet. Du fattar varför något LÅTER sant utan att VARA sant.",
    emoji: "📖",
    isAdvanced: true,
    prompt:
      "Du är en seriös Wikipedia-redaktör i en parallell värld där JAG är världsberömd. Skriv min Wikipedia-artikel i den världen.\n\nVAD JAG FAKTISKT VET OM MIG:\n- Namn: {namn}\n- Bor i (just nu): {ort}\n- Är riktigt bra på: {bra_på}\n- En sak jag verkligen gillar: {intresse}\n\nVAD JAG ÄR BERÖMD FÖR I PARALLELL-UNIVERSUMET:\n{beromd_for}\n\nARTIKELN ska följa Wikipedia-formatet EXAKT — den får INTE skämta utåt, hela poängen är att den läser som en RIKTIG Wikipedia-artikel:\n\n# {namn}\n\n*Pseudonym:* {påhittad_pseudonym}\n*Född:* {födelsedatum} i {ort}, Sverige\n*Yrke:* {påhittat_yrke}\n*Period:* aktiv 2025–\n*Hemvist:* {påhittad_aktuell_bostad}\n\n## Tidigt liv\n[Två stycken om mig som barn. Gör det dramatiskt: \"Redan vid sex års ålder visade {namn} ovanlig fallenhet för...\". Konkreta detaljer: städer, lärare med påhittade namn, specifika datum. Allt jag faktiskt gör idag (jag bor i {ort}, är bra på {bra_på}) blir FRÖET till min framtida storhet.]\n\n## Karriär\n[Tre stycken. Varje stycke beskriver en KONKRET prestation eller upptäckt med ÅRTAL och PLATSER. Mixa min faktiska skicklighet ({bra_på}) med uppblåsta påhittade prestationer (\"År 2031 publicerade hen den banbrytande artikeln \\\"...\\\" i den prestigefyllda tidskriften \\\"...\\\"\"). Använd PASSIVT språk för seriös känsla: \"har kommit att betraktas som\", \"anses ha bidragit till\".]\n\n## Privatliv\n[Ett stycke. Diskutera mina vanor och egenheter — väv in {intresse} som en livsstil. Citera mig som om jag har gett intervjuer. Lägg gärna in en obskyr detalj som låter slumpmässig men på riktigt: \"Hen är känd för att alltid bära strumpor i samma färg som dagens väderprognos.\"]\n\n## Kontroverser\n[Ett stycke. Något minimalt som blåsts upp av media. Ge incidenten ett påhittat namn (\"den så kallade Kaffe-affären 2034\"). Skriv neutralt, som riktig Wikipedia.]\n\n## Utmärkelser och hedersbetygelser\n[Punktlista med 6-8 påhittade utmärkelser. Varje punkt:\n- Årtal\n- Utmärkelsens NAMN (gör dem obskyra: \"Den Internationella XYZ-akademins tredje pris\", \"Bronsmedalj från Östra Götalands handelskammares årsmöte\")\n- Institution som delade ut den\nVar SPECIFIK med årtal och institutioner.]\n\n## Citat\n[Tre påhittade citat från mig. Var och en ska låta SUPERVISA men knappt betyda något:\n- Ett om mitt yrke\n- Ett om livet i allmänhet\n- Ett om en bestämd och absurt liten detalj]\n\n## Referenser\n[Lista 6 påhittade källor — gör dem trovärdiga. Inga skämt här. Använd Wikipedia-formatet:\n[1] Efternamn, F. (Årtal). \\\"Titel\\\". *Tidskrift*, Volym(Nummer), sidor.\nGör tidskrifter och bok-titlar som låter trovärdiga.]\n\n## Externa länkar\n[3 länkar — bara texten, inte fungerande URL:er. \"Officiell webbplats\", \"Intervju med Sveriges Radio (2033)\", \"Forskningsprofil på påhittat universitet\".]\n\nVIKTIGT:\n- Var ALDRIG ironisk i texten. Skäm aldrig.\n- Skriv som en faktiskt Wikipedia-redaktör skulle ha gjort.\n- Det är artikeln själva som ska vara rolig på grund av att den är så DJUPSERIÖS för en så löjlig premiss.",
    placeholders: [
      {
        key: "namn",
        hint: "Ditt namn",
        width: "narrow",
      },
      {
        key: "ort",
        hint: "Den ort du bor i",
        width: "narrow",
      },
      {
        key: "bra_på",
        hint: "T.ex. matematik / fotboll / rita / komma ihåg saker",
        width: "wide",
      },
      {
        key: "intresse",
        hint: "T.ex. Pokémon-kort / akvarellmålning / dinosaurier",
        width: "wide",
      },
      {
        key: "beromd_for",
        hint: "Var SPECIFIK och absurd — t.ex. 'Världens första certifierade molnformsanalytiker', 'Upptäckte den 64:e ostsorten', 'Skrev historiens längsta haiku på 14 sidor'",
        width: "block",
      },
      {
        key: "påhittad_pseudonym",
        hint: "Ett alias för det offentliga arbetet",
        width: "narrow",
      },
      {
        key: "födelsedatum",
        hint: "T.ex. 12 mars 2014",
        width: "narrow",
      },
      {
        key: "påhittat_yrke",
        hint: "Det parallell-yrket — 1-3 ord",
        width: "narrow",
      },
      {
        key: "påhittad_aktuell_bostad",
        hint: "T.ex. Tokyo, Japan / en liten ö norr om Hudiksvall",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Lät artikeln som EN RIKTIG Wikipedia-artikel? Eller smögs det in skämt i texten?",
      "Vilken \"prestation\" var mest övertygande? Det är där genrekonventionerna är som starkast.",
      "Skriv en Wikipedia-artikel för en kompis nästa gång. Snäll humor — märk skillnaden på hur AI tolkar olika personligheter.",
    ],
    variation: {
      label: "Lägg till en INFOBOX-bild",
      twist: "Wikipedia-artiklar har en officiell bild högst upp. Be AI:n också skapa en bild på dig i din parallell-värld-roll — formell, som en officiell porträttbild.",
      prompt:
        "Baserat på Wikipedia-artikeln om mig som {påhittat_yrke}: skapa en OFFICIELL PORTRÄTTBILD som skulle ligga i artikelns infobox. Formell. Som en yrkesporträtt på en officiell hemsida.\n\nMig: {namn}, ungefär {ålder} år gammal i den nutid då bilden togs.\n\nPersonen ska vara klädd som det parallell-yrket kräver, ett seriöst men vänligt uttryck, hyperrealistisk fotografi, neutral bakgrund.",
      placeholders: [
        { key: "påhittat_yrke", hint: "Samma som i artikeln", width: "narrow" },
        { key: "namn", hint: "Ditt namn", width: "narrow" },
        { key: "ålder", hint: "Vald ålder för bilden — t.ex. 35", width: "narrow" },
      ],
    },
  },

  // ─── META-PROMPTER ──────────────────────────────────────────────
  {
    id: "battre-bildprompt",
    category: "meta",
    title: "Skapa en bättre bildprompt åt mig",
    tagline: "Du har en enkel idé. AI bygger en PROFFS-prompt. Du kopierar den och kör i bild-AI:n.",
    why: "Detta är META — du använder AI för att bli BÄTTRE på att använda AI. Det är så proffsen jobbar: en AI bygger prompten, en annan AI gör bilden. Du är dirigent.",
    emoji: "🪄",
    isAdvanced: true,
    prompt:
      "Du är expert på bild-AI-prompter (Midjourney, DALL-E, Stable Diffusion).\n\nMIN ENKLA IDÉ: {min_ide}\n\nDIN UPPGIFT: skriv en MYCKET DETALJERAD prompt jag kan klistra in i en bild-AI. Den färdiga prompten ska följa exakt denna struktur:\n\n[VEM/VAD — vem är i bilden? Beskriv ålder, klädsel, hår, ansiktsuttryck, pose]\n[HURDAN — vilken känsla, energi, atmosfär?]\n[VAR — exakt miljö, tidpunkt på dagen, väder, ljusförhållanden]\n[STIL — fotografi/illustration/3D/anime/akvarell osv. Var SPECIFIK: t.ex. 'fotografi taget med 85mm objektiv' eller 'akvarell i Studio Ghibli-stil']\n[KOMPOSITION — närbild/helbild/ovanifrån? Vilken vinkel?]\n[FÄRGPALETT — vilka 3-4 färger ska dominera?]\n[TEKNISKA DETALJER — bokeh, djupskärpa, filmkorn, hyperdetaljerat?]\n[EXTRA STIL — \"i stilen av X\", referenser till kända fotografer/konstnärer/filmer]\n\nVIKTIGT:\n1. Skriv den färdiga prompten som ETT enda block jag kan kopiera direkt. INTE rubrikerna ovan i resultatet — bara texten.\n2. Lägg på 50-100 ord — riktigt detaljerat.\n3. Om en bild-AI fungerar bättre på engelska, ge mig prompten på engelska. Annars svenska.\n4. Förklara INTE prompten efter — bara ge mig den.",
    placeholders: [
      {
        key: "min_ide",
        hint: "T.ex. 'en söt katt' / 'mitt rum' / 'en framtidsstad' — håll det enkelt!",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT — kör SEDAN den nya prompten i en bild-AI",
    granska: [
      "Var den färdiga prompten verkligen mycket längre och rikare än din ursprungliga? Annars: säg åt AI:n att vara MER specifik.",
      "Kopiera prompten — kör den i bild-AI:n. Bli förvånad.",
      "Spara prompten. Ändra ETT element nästa gång. Det är så du lär dig vad varje del betyder.",
    ],
    variation: {
      label: "Be om TRE olika varianter av samma idé",
      twist: "Istället för en prompt: be om tre helt olika tolkningar av din idé. Då ser du hur olika prompter kan se ut.",
      prompt:
        "Min enkla idé: {min_ide}\n\nGe mig TRE helt olika bild-AI-prompter baserade på den. Var och en ska tolka idén på en helt egen estetik:\n\n1. FOTOREALISTISK (som ett riktigt foto)\n2. STILISERAD / ILLUSTRATION (handritad, akvarell, indie-känsla)\n3. EPISK / FILMATISK (Hollywood-känsla, dramatiskt ljus)\n\nFör varje: skriv en färdig prompt på 50+ ord jag kan kopiera direkt.",
      placeholders: [
        { key: "min_ide", hint: "Din enkla idé", width: "wide" },
      ],
    },
  },
  {
    id: "forbattra-min-prompt",
    category: "meta",
    title: "Förbättra MIN prompt",
    tagline: "Du har en prompt som funkar lite. AI förklarar varför — och skriver en starkare version.",
    why: "Det är skillnad på att kopiera mallar och att FATTA varför prompter funkar. Den här övningen lär dig läsa prompter som ett proffs.",
    emoji: "📈",
    isAdvanced: true,
    prompt:
      "Här är en prompt jag har använt:\n\nMIN PROMPT:\n{min_prompt}\n\nVAD JAG VILLE: {vad_jag_ville}\nVAD JAG FAKTISKT FICK: {vad_jag_fick}\n\nDIN UPPGIFT — gör allt detta:\n\n# Diagnos\nVad är BRA med min prompt? (lista två saker)\nVad är SVAGT med min prompt? (lista tre saker — var konkret, peka på exakta ord)\nVarför fick jag inte det jag ville? (förklara med ord från PROMPTEN, inte abstrakta saker)\n\n# Förbättrad prompt\nSkriv om prompten — bevara mitt SYFTE men gör den mycket starkare. Den nya prompten ska:\n- Vara mer specifik på de SVAGA punkterna du hittat\n- Lägga till sammanhang om VEM jag är (åk 4-6, mellanstadiet) om relevant\n- Säga vad AI:n INTE ska göra om det är en risk\n- Be om ett FORMAT om jag inte gjort det (t.ex. \"svara i tre punkter\")\n\n# Förklaring\nFörklara i tre meningar VARFÖR den nya prompten är starkare. Använd ord som \"specificitet\", \"sammanhang\", \"begränsningar\" — så jag lär mig prompt-vokabuläret.",
    placeholders: [
      {
        key: "min_prompt",
        hint: "Klistra in prompten du använde",
        width: "block",
      },
      {
        key: "vad_jag_ville",
        hint: "Vad du HOPPADES få ut",
        width: "wide",
      },
      {
        key: "vad_jag_fick",
        hint: "Vad du FAKTISKT fick — t.ex. 'För kort svar / Hittade på fakta / Förstod inte vad jag menade'",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Förklarade AI:n VARFÖR ändringarna gjordes — eller bara skrev en ny version utan att förklara?",
      "Kör den NYA prompten. Blev det bättre? Om inte — vad fattas fortfarande?",
      "Lärde du dig något du tar med dig till nästa prompt du skriver?",
    ],
    variation: {
      label: "Be om en mall jag kan återanvända",
      twist: "Nu när du har en bra prompt — be AI:n göra om den till en MALL med platshållare du kan fylla i nästa gång.",
      prompt:
        "Den senaste prompten funkade bra för mig. Gör om den till en ÅTERANVÄNDBAR MALL med {platshållare} markerade tydligt, så jag kan byta ut innehållet nästa gång jag har en liknande uppgift. Förklara kort vad varje platshållare ska innehålla.",
      placeholders: [],
    },
  },
  {
    id: "prompt-coachen",
    category: "meta",
    title: "Promptcoachen — du lär dig prompta bättre, övning för övning",
    tagline: "AI ger dig en uppgift. Du skriver en prompt. AI bedömer den. Du iterar tills du är vass.",
    why: "Bästa sättet att lära sig något är att FÅ FEEDBACK. Här fungerar AI:n som en privatlärare i prompting — du tränar i din egen takt.",
    emoji: "🏆",
    isAdvanced: true,
    prompt:
      "Du är min privata PROMPTCOACH. Vi ska träna mig på att skriva bättre prompter.\n\nMIN NIVÅ JUST NU: {nivå}\nVAD JAG VILL BLI BÄTTRE PÅ: {fokusområde}\n\nHÄR ÄR ÖVNINGEN:\n\n1. GE MIG en konkret uppgift. T.ex. \"Skriv en prompt som får AI att förhöra dig på Sveriges landskap utan att ge facit.\" Anpassa svårigheten till min nivå.\n\n2. JAG SKRIVER en prompt och klistrar in den i samma chatt.\n\n3. DU BEDÖMER min prompt så här:\n   - Betyg: 1-5\n   - 2 saker som funkar\n   - 2 saker som kan bli bättre (var KONKRET — peka på exakta ord)\n   - En ENDA fråga som hjälper mig tänka vidare\n\n4. JAG SKRIVER en förbättrad version.\n\n5. DU BEDÖMER igen. Vi kör tills jag fått 5/5.\n\n6. När jag är på 5: SAMMANFATTA vad jag har lärt mig i tre punkter. Sedan ger du mig en SVÅRARE uppgift.\n\nBÖRJA NU med den första uppgiften. Inga långa förklaringar — bara uppgiften. Sedan väntar du på min prompt.",
    placeholders: [
      {
        key: "nivå",
        hint: "Nybörjare / har provat lite / kan grunderna",
        defaultValue: "Kan grunderna",
        width: "narrow",
      },
      {
        key: "fokusområde",
        hint: "T.ex. att vara specifik / be om format / sätta begränsningar / få AI att INTE göra något",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Var bedömningen ÄRLIG — eller var allt 'bra jobbat'? Säg åt coachen att vara strängare om det blev mjukt.",
      "Märker du att du börjar tänka 'specifikt, sammanhang, format' av sig själv? Det är poängen.",
      "Spara den BÄSTA prompten du skrev. Den kan du återanvända.",
    ],
    variation: {
      label: "Be om utmaning på högre nivå",
      twist: "När du klarat tre uppgifter — be om en EXPERT-utmaning som tvingar dig kombinera flera tekniker.",
      prompt:
        "Jag har klarat tre 5/5-uppgifter. Nu vill jag ha en EXPERT-utmaning som kräver att jag kombinerar flera prompt-tekniker (specifikt + sammanhang + format + begränsningar). Gör den svår.",
      placeholders: [],
    },
  },
  // ─── SKAPA MED KOD ───────────────────────────────────────────────
  // (Basic-prompter — kortare, enklare projekt)
  {
    id: "memory-spel",
    category: "kod",
    title: "Memory-spel med ditt eget tema",
    tagline: "Klassiskt memory — fast med dina favoriter. Funkar i webbläsaren direkt.",
    why: "Memory är en av de FÖRSTA programmen man brukar bygga. Det har precis lagom mycket logik (matchning, kort-vändning, vinst-tillstånd) för att lära sig hur en hel app hänger ihop.",
    emoji: "🃏",
    prompt:
      "Bygg ett MEMORY-SPEL som webbsida.\n\nTEMA på korten: {tema}\nANTAL PAR: {antal_par}\nFÄRGSCHEMA: {färger}\n\nSPELET ska:\n- Visa korten upp-och-ner i ett snyggt rutnät\n- När jag klickar ett kort: vänd det med en smooth flip-animation\n- Klicka två kort i rad — om match: båda stannar uppvända. Om inte: båda vänder ner igen efter cirka 1 sekund.\n- Räknare som visar antal försök\n- När alla par är hittade: GAME WON-meddelande med slutpoäng + \"Spela igen\"-knapp som blandar om korten\n- Lätta animationer och hover-effekter\n\nKORT-INNEHÅLL: använd EMOJIS som passar temat (inga bilder från internet).\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JavaScript inuti <script>-taggar. ALL CSS inuti <style>-taggar.\n- Inga externa bibliotek. Inget React, inget jQuery, inga CDN-länkar.\n- Inga bilder från internet — bara emojis och CSS.\n- Lämna mig BARA den färdiga koden i ETT block. Ingen förklaring mellan kodbitarna — jag vill kunna kopiera ALLT i ett enda svep.\n- Korta kommentarer bara där du gör något smart, så jag förstår.\n- Filen ska heta typ \"memory.html\" — när jag dubbelklickar ska den fungera direkt.",
    placeholders: [
      {
        key: "tema",
        hint: "Djur / fotbollsklubbar / frukter / popstjärnor / Pokémon",
        width: "narrow",
      },
      {
        key: "antal_par",
        hint: "6",
        defaultValue: "8",
        width: "narrow",
      },
      {
        key: "färger",
        hint: "Neon-rosa och svart / pastell + guld / sjö-blå + sand",
        width: "wide",
      },
    ],
    tool: "Skolup AI eller ChatGPT — kör koden i din webbläsare",
    granska: [
      "Funkar spelet när du dubbelklickar HTML-filen? Om inte: läs felmeddelandet och be AI:n fixa just det.",
      "Vänder två icke-matchande kort ner igen automatiskt — eller hänger de uppe?",
      "Funkar 'Spela igen'-knappen? Blandas korten om?",
    ],
    variation: {
      label: "Lägg till ljud + tidtagning",
      twist: "När det funkar: be AI:n LÄGGA TILL — inte skriva om — ett pling-ljud vid match och en timer som tickar.",
      prompt:
        "Här är min nuvarande HTML-fil:\n\n{nuvarande_kod}\n\nLägg till två saker — utan att ändra resten:\n1. Ett kort 'pling'-ljud när jag hittar ett par (använd Web Audio API, inga ljudfiler)\n2. En timer längst upp som räknar sekunder från första klicket\n\nGe mig hela den uppdaterade filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in hela HTML-filen du fick förra prompten",
          width: "block",
        },
      ],
    },
  },
  {
    id: "klick-spel",
    category: "kod",
    title: "Klick-spelet där knappen flyr",
    tagline: "En knapp. Du klickar. Den flyttar sig. Den krymper. Du svär lite. Du klickar igen.",
    why: "Snabb dopamin — och lärorikt. Bygger på event-listening, slumptal, koordinater och game-states. Tar 30 sekunder att starta, 5 minuter att finslipa.",
    emoji: "🎯",
    prompt:
      "Bygg ett ROLIGT KLICK-SPEL som webbsida.\n\nMÅL: klicka knappen {antal_klick} gånger så snabbt du kan.\n\nREGLER:\n- En stor färgglad knapp dyker upp i mitten av skärmen\n- När jag klickar: räknaren ökar med 1, knappen FLYTTAR till en ny slumpmässig position\n- Knappen blir LITE MINDRE för varje klick (men aldrig osynlig — minst ungefär 40px)\n- Knappen STANNAR INOM den synliga skärmen\n- En timer räknar sekunder från första klicket\n- Efter {antal_klick} klick: GAME OVER-skärm med slutpoäng (tid + klick) och \"Försök igen\"-knapp\n\nTEMA: {tema}\n\nEXTRA KRYDDA:\n{krydda}\n\nDESIGN:\n- Stor, läsbar text\n- Mjuka animationer när knappen flyttar (cirka 0.2 sek)\n- Mobilvänlig\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JavaScript i <script>, ALL CSS i <style>.\n- Inga externa bibliotek, inga CDN, inga bilder från internet.\n- Använd emojis eller CSS-grafik.\n- Bara den färdiga koden i ETT block — ingen text mellan kodblocken.\n- Funkar direkt när jag dubbelklickar filen.",
    placeholders: [
      {
        key: "antal_klick",
        hint: "20",
        defaultValue: "20",
        width: "narrow",
      },
      {
        key: "tema",
        hint: "Rymden / djungeln / cyberpunk / regnbåge",
        width: "narrow",
      },
      {
        key: "krydda",
        hint: "T.ex. 'knappen byter färg vid varje klick' / 'visar uppmuntrande ord typ BRA, OJ, WOW' / 'klassens fest-emojis som regnar ner i bakgrunden'",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Stannar knappen INOM skärmen — eller försvinner den utanför ibland?",
      "Funkar timern? Stoppas den vid GAME OVER?",
      "Är knappen LÄSBAR även när den krymper? (Om inte — säg åt AI:n att hålla minsta storleken större.)",
    ],
    variation: {
      label: "Lägg till high-score som sparas",
      twist: "Be AI:n lägga till localStorage så att din bästa tid sparas mellan omgångarna.",
      prompt:
        "Här är min nuvarande HTML-fil:\n\n{nuvarande_kod}\n\nLägg till en HIGH-SCORE som sparas mellan omgångarna (använd localStorage). Visa den högst upp på sidan — och blinka i guld när jag slår mitt rekord. Ge mig hela uppdaterade filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in koden du fick",
          width: "block",
        },
      ],
    },
  },
  {
    id: "personlig-hemsida",
    category: "kod",
    title: "Din egen personliga hemsida",
    tagline: "En riktig webbsida om DIG. Funkar i webbläsaren. Vad du vill ha med — du bestämmer.",
    why: "Att bygga sin egen sida är klassisk webbutbildning. Du lär dig HTML-struktur, sektioner, smooth-scroll. Du kan gå tillbaka och ändra över tid.",
    emoji: "🏠",
    prompt:
      "Bygg en PERSONLIG HEMSIDA om mig — en enda webbsida.\n\nINNEHÅLL:\n- Mitt namn: {namn}\n- Min ålder: {ålder}\n- Jag bor i: {ort}\n- Tre saker jag gillar (en mening om varje): {gillar}\n- En sak jag är riktigt bra på: {bra_på}\n- Mitt mål nästa år: {mål}\n- En rolig fakta om mig: {rolig_fakta}\n\nSEKTIONER (i ordning från toppen):\n1. HERO med stort namn, en kort presentation, och en stor knapp \"Lär känna mig\" som smooth-scrollar ner\n2. OM MIG — kort presentation\n3. MINA FAVORITER — tre snygga kort med mina tre intressen, varje kort i sin egen färg\n4. JAG ÄR BRA PÅ — en specifik prestation med stor text\n5. MITT MÅL — ett kort som lyser upp när jag hover:ar\n6. ROLIGT — den roliga faktan i en \"slumpat\"-stil\n\nDESIGN:\n- Färgschema: {färger}\n- Estetik: {estetik}\n- Smooth-scroll mellan sektionerna\n- Mjuka hover-effekter på korten\n- En \"top\"-knapp längst ner som tar mig till toppen\n- Mobilvänlig\n\nINTERAKTIVITET:\n- En enda hemlig knapp någonstans (välj själv var) — när jag klickar dyker en överraskning upp (välj något kul: confetti i CSS, en hemlig text, en gif med emojis).\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Inga externa bibliotek, inga bilder från internet — använd emojis eller CSS-figurer.\n- Bara den färdiga koden i ETT kodblock — ingen text mellan blocken.\n- Funkar direkt när jag dubbelklickar.",
    placeholders: [
      { key: "namn", hint: "Ditt namn", width: "narrow" },
      { key: "ålder", hint: "11", width: "narrow" },
      { key: "ort", hint: "Jönköping", width: "narrow" },
      {
        key: "gillar",
        hint: "T.ex. 'Fotboll, måla, baka kakor'",
        width: "wide",
      },
      {
        key: "bra_på",
        hint: "T.ex. 'Jag är bäst i klassen på huvudräkning'",
        width: "wide",
      },
      {
        key: "mål",
        hint: "T.ex. 'Lära mig spela gitarr ordentligt'",
        width: "wide",
      },
      {
        key: "rolig_fakta",
        hint: "T.ex. 'Jag kan slicka mitt eget öga (typ)'",
        width: "wide",
      },
      {
        key: "färger",
        hint: "Pastell + neon-accent / lugna jordtoner / kvällsmörk + guld",
        width: "wide",
      },
      {
        key: "estetik",
        hint: "T.ex. minimalistisk / 90-talsweb / arcade / studio-clean",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT — spara sidan, dela med kompisar",
    granska: [
      "Visas alla sektioner — eller har AI:n hoppat över något?",
      "Funkar smooth-scroll, eller blir det hopp?",
      "Hittar du den hemliga överraskningen? Och funkar den?",
    ],
    variation: {
      label: "Be om en mörk version också",
      twist: "Behåll innehållet. Be om en mörk variant med ny färg. Spara båda — välj favorit.",
      prompt:
        "Här är min hemsida:\n\n{nuvarande_kod}\n\nGör en VARIANT i mörkt tema — samma innehåll, samma struktur, men mörk bakgrund och nya accent-färger. Ge mig hela filen i ETT kodblock så jag kan spara den som hemsida-dark.html.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in hemsidans kod",
          width: "block",
        },
      ],
    },
  },

  // (Avancerade kod-prompter)
  {
    id: "ranta-pa-ranta",
    category: "kod",
    title: "Ränta-på-ränta-simulator med reglage",
    tagline: "Dra i reglagen. Se grafen explodera. Förstå varför Einstein kallade det världens åttonde underverk.",
    why: "Att SE kapital växa exponentiellt — när du själv kan vrida på spakarna — är en helt annan sak än att läsa formeln. Detta är konkretiserad matematik, byggd på 5 minuter.",
    emoji: "📈",
    isAdvanced: true,
    prompt:
      "Bygg en INTERAKTIV WEBBSIDA som lär ut RÄNTA PÅ RÄNTA.\n\nTRE REGLAGE (sliders) jag kan dra:\n1. STARTBELOPP: 100 kr — 100 000 kr\n2. RÄNTA PER ÅR: 1 % — 20 %\n3. ANTAL ÅR: 1 — 50 år\n\nVISAS LIVE när jag drar (uppdateras direkt):\n- Aktuella värden på reglagen, stora siffror, med svensk thousand-separator (1 000 kr, inte 1,000)\n- Slutbeloppet efter alla år — JÄTTESTORT, gärna animerat när det ändras\n- Hur mycket av slutbeloppet som är \"din egen insats\" vs \"ränta du tjänat\" (visa båda)\n- Tabell: år-för-år (år, saldo) — gärna kollapserbar om det är många år\n\nEN GRAF (canvas eller SVG):\n- X-axel: år\n- Y-axel: belopp (kr)\n- En kurva som ritar ut hur pengarna växer\n- Uppdateras LIVE när reglagen ändras\n- Snygg, läsbar, med rutnätslinjer och axel-text\n\nPEDAGOGIK:\n- Rubrik: \"Ränta på ränta — varför Einstein kallade det världens åttonde underverk\"\n- Kort förklaring under: \"Ränta på ränta betyder att räntan du tjänar börjar tjäna RÄNTA. Lite varje år. Det märks knappt i början. Sen exploderar det.\"\n- Tre WOW-fakta längst ner som uppdateras LIVE:\n  - \"Med dessa siffror får du {X} kr efter {Y} år.\"\n  - \"Det dröjer {Z} år tills pengarna fördubblats.\"\n  - \"{P} % av slutbeloppet är ränta — bara {1-P} % är vad du själv lade in.\"\n\nDESIGN:\n- Snyggt och proffsigt som en bank-app\n- Färgschema: lugn mörkblå + guldaccent\n- Mjuka animationer\n- Mobilvänlig (sliders ska vara tappbara)\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JavaScript inuti <script>, ALL CSS inuti <style>.\n- Använd Canvas API eller SVG för grafen — INGA externa graf-bibliotek (inget Chart.js, inget D3 från CDN).\n- Inga externa bilder.\n- Lämna BARA den färdiga koden i ETT kodblock. Ingen text mellan kodbitarna.\n- När jag dubbelklickar HTML-filen ska den funka direkt.",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Uppdateras grafen LIVE när du drar reglagen — eller bara när du släpper musen?",
      "Stämmer matten? Testa: 1000 kr, 10 % ränta, 50 år → ska bli runt 117 390 kr.",
      "Är grafen LÄSBAR — eller är staplarna så stora att man inte ser axlarna?",
    ],
    variation: {
      label: "Lägg till månatligt sparande",
      twist: "Riktigt sparande är inte bara en engångssumma — det är pengar som tickar in varje månad. Be AI:n lägga till ett fjärde reglage.",
      prompt:
        "Här är min nuvarande ränta-på-ränta-sida:\n\n{nuvarande_kod}\n\nLägg till ett FJÄRDE reglage: MÅNADSPARANDE (0 kr — 5000 kr/månad). Räkna och visa hur det påverkar slutbeloppet. Uppdatera grafen så två linjer syns: en utan månadsparande, en med. Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in den nuvarande HTML-filen",
          width: "block",
        },
      ],
    },
  },
  {
    id: "pendel-fysik",
    category: "kod",
    title: "Pendelsimulator — fysik du kan dra i",
    tagline: "En riktig pendel som svänger enligt fysikens lagar. Ändra längd, gravitation och vinkel — se vad som händer.",
    why: "Pendelfysik är en av de SKAPLIGT vackraste sakerna i naturen — och något du normalt inte kan testa hemma. Med kod kan du. Att MASSAN inte påverkar svängningstiden är en wow-insikt du knappast tror förrän du kollar själv.",
    emoji: "🪀",
    isAdvanced: true,
    prompt:
      "Bygg en INTERAKTIV PENDELSIMULATOR som webbsida.\n\nEN ANIMERAD PENDEL i mitten av skärmen:\n- Snöre från taket + tyngd nedanför som svänger som en riktig pendel\n- Mjukt och realistiskt — använd requestAnimationFrame\n- Fysik: vinkelacceleration = -(g/L) × sin(vinkel). Integrera över små tidssteg.\n- Tappa inte energi (eller tappa LITE om du vill ha realism)\n\nTRE REGLAGE jag kan dra LIVE:\n1. PENDELNS LÄNGD (L): 0.1 m — 5 m\n2. TYNGDKRAFT (g): 1 m/s² (Pluto-aktigt) — 25 m/s² (Jupiter-aktigt)\n3. STARTVINKEL: 5° — 80°\n\nVISAS LIVE under simuleringen (uppdateras varje frame):\n- Aktuell vinkel (i grader)\n- Aktuell hastighet\n- SVÄNGNINGSTID T = 2π√(L/g) — uppräknad i sekunder\n- Antal kompletta svängningar sedan start\n\nTRE \"PROVA DETTA\"-knappar (klick = sätter g till värdet):\n- 🌙 MÅNEN (g = 1.6)\n- 🌍 JORDEN (g = 9.8)\n- 🪐 JUPITER (g = 24.8)\n\nPEDAGOGIK:\n- Stor rubrik: \"Pendeln — fysikens hjärtslag\"\n- En liten faktaruta i sidan med tre frågor som kittar nyfikenheten:\n  - \"Påverkar TYNGDEN av kulan svängningstiden? Testa.\" (svaret är NEJ — den finns inte i formeln)\n  - \"Vad händer om du fördubblar längden — fördubblas tiden?\" (NEJ — bara √2-faktor)\n  - \"Är pendeln på månen LÅNGSAMMARE eller SNABBARE än på jorden? Varför?\"\n- En \"START / STOPP / NOLLSTÄLL\"-knapp\n\nDESIGN:\n- Tavla-känsla: mörk grön bakgrund, vita streck och text\n- Animerade siffror — som en analog mätare\n- Mobilvänlig\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Canvas API för pendelns rörelse.\n- Inga externa fysikbibliotek, ingen CDN, inga bilder.\n- Lämna BARA koden i ETT kodblock — ingen text mellan blocken.",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Pendeln svänger i en GLAD rörelse — eller hackar den? Om hackar: be AI:n öka frame-rate eller mjuka tidsstegen.",
      "Stämmer fysiken? Testa: L=1 m, g=9.8 → svängningstiden ska vara cirka 2 sekunder.",
      "Du ändrar TYNGDEN av kulan i koden manuellt — påverkas svängningstiden? (Svar: NEJ. Det är poängen.)",
    ],
    variation: {
      label: "Lägg till luftmotstånd",
      twist: "Riktiga pendlar tappar energi. Be AI:n lägga till luftmotstånd så pendeln gradvis stannar — och ett reglage för luftmotståndet.",
      prompt:
        "Här är min pendelsimulator:\n\n{nuvarande_kod}\n\nLägg till LUFTMOTSTÅND som gör att pendeln gradvis tappar energi och stannar. Lägg till ett FJÄRDE reglage för LUFTMOTSTÅND (0 = inget — pendeln svänger för evigt; 1 = väldigt mycket — stannar fort). Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in pendel-koden",
          width: "block",
        },
      ],
    },
  },
  {
    id: "bygg-quiz",
    category: "kod",
    title: "Bygg ditt eget quiz — om vad som helst",
    tagline: "Du anger ämne + svårighet. AI bygger ett snyggt, animerat quiz du kan dela med klassen.",
    why: "Att SKAPA ett quiz lär dig ämnet bättre än att GÖRA ett — för du måste tänka på vad som är bra felsvar (distraktorer). Det här är pedagogik som forskningen kallar test-enhanced learning.",
    emoji: "🎓",
    isAdvanced: true,
    prompt:
      "Bygg ett INTERAKTIVT QUIZ som webbsida.\n\nÄMNE: {ämne}\nANTAL FRÅGOR: {antal_frågor}\nSVÅRIGHET: {svårighet}\n\nQUIZET ska:\n- Visa EN fråga i taget, stort och tydligt\n- 4 svarsalternativ som klickbara knappar\n- När jag klickar FEL: knappen blir röd, det RÄTTA alternativet blir grönt, och en kort förklaring dyker upp\n- När jag klickar RÄTT: knappen blir grön + bekräftelse\n- Räknare högst upp: \"Fråga 3 av 10\" + en progressbar\n- En \"Nästa fråga\"-knapp dyker upp efter att jag svarat\n- Efter sista frågan: SLUTRESULTAT — poäng, procent, och en motiverande kommentar:\n  - <50 %: \"Bra start! Försök igen.\"\n  - 50–80 %: \"Snyggt jobbat — du kan det här.\"\n  - >80 %: \"Wow — du är expert.\"\n- \"Spela igen\"-knapp som börjar om\n\nINNEHÅLLET — SKAPA SJÄLV:\n- Hitta på {antal_frågor} frågor om ämnet, väl anpassade för mellanstadiet\n- Variera lätta, mediumsvåra och svåra frågor\n- Varje fråga: 1 rätt svar + 3 PLAUSIBLA fel svar (inte uppenbart fel — det ska vara verklig utmaning)\n- Kort förklaring (max 2 meningar) för varje rätt svar — så jag LÄR mig något även när jag hade fel\n\nDESIGN:\n- Snygg och kul, kort-baserad layout\n- Tema: {tema}\n- Mjuka övergångar mellan frågor\n- Mobilvänlig\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Inga externa bibliotek, inga bilder, ingen CDN.\n- Lämna BARA koden i ETT kodblock — ingen text mellan kodbitarna.\n- Funkar direkt när jag dubbelklickar filen.",
    placeholders: [
      {
        key: "ämne",
        hint: "Sveriges landskap / dinosaurier / multiplikationstabellen / popstjärnor / hjärnan",
        width: "wide",
      },
      {
        key: "antal_frågor",
        hint: "10",
        defaultValue: "10",
        width: "narrow",
      },
      {
        key: "svårighet",
        hint: "Mellanstadie-nivå (kanske lite knepigt här och där)",
        defaultValue: "mellanstadie-nivå",
        width: "narrow",
      },
      {
        key: "tema",
        hint: "Rymden / arcade / minimalistisk / 80-talsneon",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Är frågorna FAKTAGRANSKADE av AI:n — eller hittade den på? Slå upp 1-2 svar du är osäker på.",
      "Är felsvaren PLAUSIBLA — eller uppenbara? Ett bra quiz har lockande felsvar.",
      "Funkar 'Spela igen'? Blandas frågorna i ny ordning?",
    ],
    variation: {
      label: "Lägg till tidspress",
      twist: "Lägg till en timer per fråga. Då blir det mer arkad-känsla och du tränas i att tänka snabbt.",
      prompt:
        "Här är mitt quiz:\n\n{nuvarande_kod}\n\nLägg till en TIMER per fråga (15 sekunder per fråga). Om tiden går ut räknas det som fel och nästa fråga dyker upp automatiskt. Visa timern som en cirkel-progressbar runt frågan. Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in quiz-koden",
          width: "block",
        },
      ],
    },
  },
  {
    id: "tidsmaskin",
    category: "kod",
    title: "Tidsmaskinen — hur många sekunder har du levt?",
    tagline: "En live-räknare som tickar upp i realtid. Du har slagit hjärtat 400 miljoner gånger. Wow.",
    why: "Live-räknare lär dig om tid (Date-objektet i JS) OCH ger en konkret känsla för STORA tal. Att se siffran 'sekunder jag levt' tickar förbi en miljard medan du tittar är minnesvärt på riktigt.",
    emoji: "⏳",
    isAdvanced: true,
    prompt:
      "Bygg en LIVE-RÄKNARE som visar exakt hur länge jag har levt.\n\nMIN FÖDELSEDAG: {födelsedatum}\n\nSIDAN ska visa:\n- Stor rubrik: \"Du har existerat i...\"\n- LIVE-uppdaterande räknare (varje 100 ms) som visar:\n  - X dagar · Y timmar · Z minuter · W sekunder\n- En \"total sekunder\"-räknare som tickar uppåt synligt\n- En \"sekunder kvar till min nästa födelsedag\"-räknare som tickar nedåt\n\nWOW-FAKTA (uppdaterade live med dina värden):\n- \"Du har sovit ungefär X dagar\" (uppskattning: 1/3 av tiden)\n- \"Ditt hjärta har slagit ungefär Y gånger\" (uppskattning: 70 slag/min × din tid i minuter)\n- \"Du har blinkat ungefär Z gånger\" (uppskattning: 15/min × vaken tid)\n- \"Solen har gått upp X gånger sedan du föddes\"\n- \"Jorden har snurrat X varv runt sin axel\"\n- Visa varje fakta i ett snyggt kort med en emoji\n\nDESIGN:\n- Mörk bakgrund med animerade CSS-stjärnor som tindrar\n- Stora monospace-siffror i guld eller neon-blå\n- Mjuk glow-effekt runt huvudsiffrorna\n- Mobilvänlig\n\nEXTRA: en knapp \"Berätta mer\" som visar ytterligare fakta (mer ovanliga: hur många hjärtslag kvar i ett medellivslängds-perspektiv, osv.) — varsamt formulerat, inte skrämmande.\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Använd setInterval(..., 100) eller requestAnimationFrame för mjuk uppdatering.\n- Inga externa bibliotek, inga bilder.\n- BARA koden i ETT kodblock.",
    placeholders: [
      {
        key: "födelsedatum",
        hint: "ÅÅÅÅ-MM-DD (t.ex. 2014-09-21)",
        width: "narrow",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Tickar räknaren MJUKT, eller hackar siffrorna?",
      "Stämmer matten? Räkna efter: dagar levt × 24 × 60 × 60 = ungefär samma som total sekunder.",
      "Är wow-fakta TROVÄRDIGA eller överdrivna? Hjärtslag t.ex. ska vara cirka 100 000/dygn.",
    ],
    variation: {
      label: "Gör en VERSION till din kompis",
      twist: "Ändra födelsedatumet — jämför sidorna. Vem har levt flest sekunder? Bra gåva.",
      prompt:
        "Här är min sida:\n\n{nuvarande_kod}\n\nGör om den så att den fungerar för min kompis istället — använd födelsedatumet {nytt_födelsedatum}. Lägg till en JÄMFÖR-knapp som visar skillnaden mellan oss i sekunder. Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in nuvarande HTML",
          width: "block",
        },
        {
          key: "nytt_födelsedatum",
          hint: "Kompisens födelsedag, ÅÅÅÅ-MM-DD",
          width: "narrow",
        },
      ],
    },
  },
  {
    id: "diagram-skapare",
    category: "kod",
    title: "Diagram-skapare — gör staplar av din egen data",
    tagline: "Skriv in dina siffror. Få ett snyggt animerat stapeldiagram. Använd till skolprojekt, redovisningar, klass-statistik.",
    why: "Riktiga dataanalytiker använder bibliotek som plottar — men du kan se hur de FAKTISKT funkar genom att bygga ditt eget. Förstå Canvas. Förstå hur skala beräknas. Lär dig massa i ett.",
    emoji: "📊",
    isAdvanced: true,
    prompt:
      "Bygg en INTERAKTIV WEBBSIDA där jag kan rita stapeldiagram av MIN egen data.\n\nVAD JAG SKA KUNNA GÖRA:\n1. Skriva in mina data i ett stort textfält i formatet:\n   \"Etikett, Värde\" — en rad per stapel.\n   T.ex.\n   Mån, 15\n   Tis, 22\n   Ons, 18\n2. Klicka knappen \"Rita diagram\"\n3. Se ett snyggt stapeldiagram dyka upp\n\nDIAGRAMET ska:\n- Vara ANIMERAT (staplarna växer upp från noll med en mjuk easing)\n- Visa tydliga etiketter under varje stapel\n- Visa värdet ovanför varje stapel\n- Auto-skala efter största värdet (alltså: längsta stapeln tar typ 85 % av höjden)\n- Färga staplarna i en gradient ELLER olika färger (välj smart)\n- Visa Y-axel med skala (0, 25 %, 50 %, 75 %, 100 % av max)\n\nEXTRA-FUNKTIONER:\n- Toggle: \"Visa medelvärde\" — drar en streckad linje över medelvärdet\n- Toggle: \"Visa max & min\" — markerar de\n- Färgväljare för staplarna\n- Sortering: \"Original ordning\" / \"A–Ö\" / \"Lägst → högst\" / \"Högst → lägst\"\n- En \"EXEMPEL\"-knapp som fyller textfältet med exempel-data så jag kan testa direkt\n\nFÖRSLAG TILL VAD JAG KAN VISUALISERA (visa som tips i UI:t):\n- Antal mål per spelare i mitt fotbollslag\n- Hur mycket jag spelat varje dag senaste veckan\n- Antal sidor i mina favoritböcker\n- Antal elever i varje klass på skolan\n\nDESIGN:\n- Ren, modern dashboard-känsla\n- Mobilvänlig\n\nTEKNISKT KRAV — MYCKET VIKTIGT:\n- En ENDA HTML-fil. ALL JS i <script>, ALL CSS i <style>.\n- Canvas API ELLER pure CSS för staplarna — INGA externa chart-bibliotek.\n- Inga bilder, ingen CDN.\n- BARA den färdiga koden i ETT kodblock.",
    placeholders: [],
    tool: "Skolup AI eller ChatGPT — använd sedan för dina skolprojekt",
    granska: [
      "Skalas Y-axeln rätt — eller blir staplarna inte synliga om värdena är stora?",
      "Funkar sortering — eller hänger ordningen kvar?",
      "Är det LÄSBART på mobil? Eller försvinner etiketterna under varandra?",
    ],
    variation: {
      label: "Lägg till linje-diagram-läge",
      twist: "Stapeldiagram är bra för kategorier — linje-diagram är bra för tid. Be om en knapp som växlar.",
      prompt:
        "Här är min diagram-sida:\n\n{nuvarande_kod}\n\nLägg till en TOGGLE-knapp som växlar mellan STAPELDIAGRAM och LINJEDIAGRAM. Samma data, två sätt att visa. Ge mig hela filen i ETT kodblock.",
      placeholders: [
        {
          key: "nuvarande_kod",
          hint: "Klistra in din diagram-kod",
          width: "block",
        },
      ],
    },
  },

  // ─── META-PROMPTER ──────────────────────────────────────────────
  {
    id: "be-om-format",
    category: "meta",
    title: "Tvinga AI:n in i ett format som DU bestämmer",
    tagline: "Trött på AI:s långa pratiga svar? Lär dig kontrollera formatet exakt — punktlistor, tabeller, JSON, dialog.",
    why: "Format är en av de mest underskattade prompt-teknikerna. Samma fråga med rätt format-instruktion blir 10x mer användbar.",
    emoji: "📋",
    isAdvanced: true,
    prompt:
      "Här är min fråga: {min_fråga}\n\nSVARA EXAKT enligt detta format. Ingenting annat — ingen intro, ingen avslutning, ingen \"hoppas det hjälper\":\n\n{format_spec}\n\nVIKTIGT:\n- Följ formatet EXAKT — om jag bett om 5 punkter, ge mig 5, inte 4 eller 6.\n- Inga emojis om jag inte bett om det.\n- Inga ursäkter typ \"som AI kan jag inte...\".\n- Om du inte kan svara i formatet, säg det rakt ut i en mening — då kör vi om.",
    placeholders: [
      {
        key: "min_fråga",
        hint: "Vad du vill fråga",
        width: "block",
      },
      {
        key: "format_spec",
        hint: "T.ex.\nFÖR-och-EMOT-tabell med tre kolumner: Aspekt | För | Emot\n\neller\n\nDialog mellan två personer A och B. A är skeptisk, B är entusiastisk. 6 rader var.",
        width: "block",
      },
    ],
    tool: "Skolup AI eller ChatGPT",
    granska: [
      "Följde AI:n formatet EXAKT — eller smög den in en intro/avslutning?",
      "Hur skulle samma fråga sett ut UTAN format-instruktionen? Jämför.",
      "Vilket format hade du INTE tänkt på själv som AI:n förklarade bra i?",
    ],
    variation: {
      label: "Be om JSON eller tabell",
      twist: "Vill du importera till Sheets eller Notion? Be om DATA-format — JSON eller CSV. Du kan klistra in direkt.",
      prompt:
        "Här är min fråga: {min_fråga}\n\nSvara i CSV-format (kommaseparerat) med kolumnerna: {kolumner}.\n\nFörsta raden är rubriker. Inga andra texter — bara CSV.",
      placeholders: [
        { key: "min_fråga", hint: "Vad du vill ha data om", width: "wide" },
        {
          key: "kolumner",
          hint: "T.ex. Namn, Beskrivning, Varför viktig",
          width: "wide",
        },
      ],
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
