// Unified search-index — sammanställer alla sökbara entiteter på sajten till
// en gemensam shape. Används av landningssidans sökmotor så att en sökning på
// "sykofantism" hittar både gymnasie-moduler, workshop-aktiviteter, verktyg
// och allt annat — inte bara modules.

import { allModules } from "contentlayer/generated";
import { activities as workshopActivities } from "@/lib/workshops/kallkritik/activities";
import { chaptersById } from "@/lib/workshops/kallkritik/chapters";
import { tools } from "@/lib/verktygslada/tools";
import { activities as gymActivities } from "@/data/activities";
import { MELLANSTADIET_LESSONS } from "@/lib/mellanstadiet-data";
import { LABB_EXPERIMENTS, LABB_CATEGORIES } from "@/lib/mellanstadiet-labb";
import { MELLANSTADIET_GAMES } from "@/lib/mellanstadiet-games";
import { grundskolaModules } from "@/lib/grundskola-data";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";
import { DOMAN_ORDNING, type Doman } from "@/lib/taxonomi";
import { trainsToAiLiteracyIds } from "./trains-to-ai-literacy";
import { searchableString } from "@/lib/workshops/kallkritik/activities";

// === Typer ===

export type UnifiedItemType =
  | "modul" // gymnasie-modul (contentlayer)
  | "workshop-aktivitet" // källkritik-sandlådan
  | "verktyg" // verktygslådan
  | "aktivitet" // /aktiviteter (Svenska 1 & 2)
  | "mellanstadiet-lektion"
  | "mellanstadiet-labb"
  | "mellanstadiet-spel"
  | "grundskola-del"
  | "ramverk-aspekt" // de 7 ai-litteracitetsaspekterna
  | "didaktisk-modell"; // didaktiska-modeller-sektioner

export type UnifiedItem = {
  id: string; // global ID, type-prefixed för att undvika kollisioner
  type: UnifiedItemType;
  title: string;
  description: string;
  content: string; // sökbart fritt text-blob (ej visat)
  url: string;
  // Visas som badge i resultat-kortet — sektion/kapitel/ämne, t.ex.
  // "Vännen · 4.1" eller "Svenska 2" eller "Verktygslådan".
  context?: string;
  // AI-litteracitetsaspekter där koppling finns. Items utan visas alltid när
  // filtret är aktivt — vi döljer dem inte (det skulle vara svart-vit logik).
  aiLiteracyIds?: number[];
  // OECD-domäner — sajtens navigationsfilter, se lib/taxonomi.ts.
  // Valfritt eftersom två källor saknar domän med flit: ramverksaspekterna ÄR
  // den andra taxonomin, och de didaktiska modellerna vänder sig till läraren,
  // inte till eleven. Ingen av dem svarar på frågan "vad gör eleven".
  domaner?: Doman[];
  // Genererade tags för fuzzy-sök (t.ex. "Svenska 2", "kapitel 4", "vannen").
  tags?: string[];
};

// === Typ-metadata för UI ===

export const itemTypeLabels: Record<UnifiedItemType, string> = {
  modul: "Modul",
  "workshop-aktivitet": "Workshop",
  verktyg: "Verktyg",
  aktivitet: "Aktivitet",
  "mellanstadiet-lektion": "Mellanstadie-lektion",
  "mellanstadiet-labb": "AI-labbet",
  "mellanstadiet-spel": "Spel",
  "grundskola-del": "Grundskola F-6",
  "ramverk-aspekt": "Ramverk",
  "didaktisk-modell": "Didaktisk modell",
};

// Ordningen styr hur typ-filterchipsen visas på landningssidan.
export const itemTypeOrder: UnifiedItemType[] = [
  "modul",
  "workshop-aktivitet",
  "aktivitet",
  "mellanstadiet-lektion",
  "mellanstadiet-labb",
  "mellanstadiet-spel",
  "grundskola-del",
  "verktyg",
  "ramverk-aspekt",
  "didaktisk-modell",
];

// === Loaders per källa ===

/**
 * Contentlayer kan bara typa `domaner` som string[] — frontmatter är text.
 * Här är enda stället där domäner kommer från otypad källa, så valideringen
 * sitter här. En felstavning i MDX ska märkas, inte tyst försvinna ur filtret.
 */
function tillDomaner(varde: unknown, kalla: string): Doman[] | undefined {
  if (!Array.isArray(varde) || varde.length === 0) return undefined;
  const giltiga: Doman[] = [];
  for (const x of varde) {
    if (DOMAN_ORDNING.includes(x as Doman)) giltiga.push(x as Doman);
    else console.warn(`[taxonomi] okänd domän ${JSON.stringify(x)} i ${kalla}`);
  }
  return giltiga.length > 0 ? giltiga : undefined;
}

function loadModules(): UnifiedItem[] {
  return allModules.map((m) => ({
    id: `modul:${m._id}`,
    type: "modul",
    title: m.title,
    description: m.description,
    content: m.searchableContent ?? "",
    url: m.url,
    context: [m.subject, m.course].filter(Boolean).join(" · "),
    aiLiteracyIds: m.ai_literacy_ids,
    domaner: tillDomaner(m.domaner, `modul ${m.slug}`),
    tags: [m.subject, m.course].filter(Boolean) as string[],
  }));
}

function loadWorkshopActivities(): UnifiedItem[] {
  return workshopActivities.map((a) => {
    const chapter = chaptersById[a.chapter];
    return {
      id: `workshop:${a.id}`,
      type: "workshop-aktivitet",
      title: a.title,
      description: a.blurb,
      // searchableString plattar ut alla block — workshopExperience, teacherGuide,
      // studentInstructions, evidens, discussion, pitfalls m.m.
      content: searchableString(a),
      url: `/workshops/kallkritik-mellanstadiet/${a.id}`,
      context: `Workshop · ${chapter?.title ?? a.chapter} · ${a.number}`,
      aiLiteracyIds: trainsToAiLiteracyIds(a.trains),
      domaner: chapter?.domaner,
      tags: [
        chapter?.title,
        chapter?.subtitle,
        ...a.trains,
        ...(a.ageRanges ?? []),
      ].filter(Boolean) as string[],
    };
  });
}

function loadTools(): UnifiedItem[] {
  return tools.map((t) => ({
    id: `verktyg:${t.id}`,
    type: "verktyg",
    title: t.name,
    description: t.description,
    content: [t.description, t.notes, ...(t.tags ?? [])].filter(Boolean).join(" "),
    url: `/verktygslada#${t.id}`,
    context: `Verktygslådan · ${t.category}`,
    domaner: t.domaner,
    tags: [t.category, t.kind, ...(t.tags ?? [])].filter(Boolean) as string[],
  }));
}

function loadGymActivities(): UnifiedItem[] {
  return gymActivities.map((a) => {
    const summary = a.summary ?? "";
    const objectives = (a.objectives ?? []).join(" ");
    const instructions = (a.instructions ?? []).join(" ");
    return {
      id: `aktivitet:${a.id}`,
      type: "aktivitet",
      title: a.title,
      description: summary || a.title,
      content: [
        summary,
        objectives,
        instructions,
        a.aiSupport ?? "",
        a.guidingQuestion ?? "",
        ...(a.strands ?? []),
        ...(a.centralContent ?? []),
        ...(a.tags ?? []),
      ]
        .filter(Boolean)
        .join(" "),
      url: `/aktiviteter#${a.id}`,
      context: `Aktiviteter · ${a.level}`,
      aiLiteracyIds: a.aiLiteracyIds,
      domaner: a.domaner,
      tags: [a.level, ...(a.strands ?? []), ...(a.tags ?? [])].filter(
        Boolean
      ) as string[],
    };
  });
}

function loadMellanstadietLessons(): UnifiedItem[] {
  return MELLANSTADIET_LESSONS.map((l) => ({
    id: `mellan-lektion:${l.id}`,
    type: "mellanstadiet-lektion",
    title: l.title,
    description: l.kernpastaende,
    content: [
      l.tagline,
      l.kernfraga,
      l.kernpastaende,
      l.dimensionLabel,
      l.interaktivt,
    ]
      .filter(Boolean)
      .join(" "),
    url: `/mellanstadiet/${l.slug}`,
    context: `Mellanstadiet · ${l.dimensionLabel}`,
    aiLiteracyIds: [l.dimension],
    domaner: l.domaner,
    tags: [l.dimensionLabel, l.tagline, l.interaktivt].filter(Boolean) as string[],
  }));
}

function loadLabbExperiments(): UnifiedItem[] {
  const categoryLabels = Object.fromEntries(
    LABB_CATEGORIES.map((c) => [c.id, c.label])
  );
  // Domänen sitter på kategorin — se kommentaren i mellanstadiet-labb.ts.
  const categoryDomains = Object.fromEntries(
    LABB_CATEGORIES.map((c) => [c.id, c.domaner])
  ) as Record<string, Doman[] | undefined>;
  return LABB_EXPERIMENTS.map((e) => ({
    id: `labb:${e.id}`,
    type: "mellanstadiet-labb",
    title: e.title,
    description: e.tagline,
    content: [
      e.title,
      e.tagline,
      e.why,
      e.prompt,
      ...(e.granska ?? []),
      e.tool ?? "",
      e.variation?.label ?? "",
      e.variation?.twist ?? "",
    ]
      .filter(Boolean)
      .join(" "),
    url: `/mellanstadiet/labb/${e.category}#${e.id}`,
    context: `AI-labbet · ${categoryLabels[e.category] ?? e.category}`,
    aiLiteracyIds: [2], // SAILD-ramverket — alla labb-stationer är "Använda AI"
    domaner: categoryDomains[e.category],
    tags: [e.category, categoryLabels[e.category]].filter(Boolean) as string[],
  }));
}

function loadMellanstadietGames(): UnifiedItem[] {
  return MELLANSTADIET_GAMES.map((g) => ({
    id: `spel:${g.id}`,
    type: "mellanstadiet-spel",
    title: g.title,
    description: g.description,
    content: [g.title, g.tagline, g.description, g.pedagogy, g.type]
      .filter(Boolean)
      .join(" "),
    url: `/mellanstadiet/spel/${g.slug}`,
    context: `Mellanstadiet · Spel · ${g.lesson}`,
    domaner: g.domaner,
    tags: ["spel", "interaktivt", g.type],
  }));
}

function loadGrundskolaModules(): UnifiedItem[] {
  // grundskolaModules-ordningen i datafilen MATCHAR de 7 AI-litteracitets-
  // aspekterna — vi använder index som dimension när det stämmer.
  const items: UnifiedItem[] = [];
  grundskolaModules.forEach((m, idx) => {
    // Index 0-6 matchar AI-litteracitetsaspekter 0-6 (Berättelsen om AI etc.)
    const aiLiteracyIds = idx >= 0 && idx <= 6 ? [idx] : undefined;
    items.push({
      id: `grundskola:${m.id}`,
      type: "grundskola-del",
      title: m.title,
      description: m.description,
      content: [
        m.title,
        m.description,
        m.story?.title ?? "",
        m.learningMaterial?.title ?? "",
        m.learningMaterial?.content ?? "",
      ]
        .filter(Boolean)
        .join(" "),
      url: `/grundskola/4-6/${m.id}`,
      context: "Grundskola F-6",
      aiLiteracyIds,
      domaner: m.domaner,
      tags: ["grundskola", "F-6", "läromedel"],
    });
    // Aktiviteter inom modulen — indexeras med koppling tillbaka
    if (Array.isArray(m.activities)) {
      for (const a of m.activities) {
        if (!a?.title) continue;
        items.push({
          id: `grundskola-akt:${m.id}:${a.id ?? a.title}`,
          type: "grundskola-del",
          title: a.title,
          description: a.studentDescription ?? "",
          content: [
            a.title,
            a.studentDescription,
            a.teacherInstructions?.purpose ?? "",
            ...(a.teacherInstructions?.steps ?? []),
            ...(a.teacherInstructions?.examples ?? []),
            a.teacherInstructions?.explanation ?? "",
            a.teacherInstructions?.discussion ?? "",
          ]
            .filter(Boolean)
            .join(" "),
          url: `/grundskola/4-6/${m.id}`,
          context: `Grundskola · ${m.title}`,
          aiLiteracyIds,
          // Aktiviteten ärver modulens domän — den är en del av samma pass.
          domaner: m.domaner,
          tags: ["grundskola", a.type, m.title].filter(Boolean) as string[],
        });
      }
    }
  });
  return items;
}

function loadFrameworkAspects(): UnifiedItem[] {
  return aiLiteracyConfig.map((a) => ({
    id: `ramverk:${a.id}`,
    type: "ramverk-aspekt",
    title: `${a.name} (AI-litteracitet)`,
    description: a.description,
    content: `${a.name} ${a.description}`,
    url: `/ai-litteracitet#aspekt-${a.id}`,
    context: "AI-litteracitet · De sju aspekterna",
    aiLiteracyIds: [a.id],
    tags: ["ramverk", "ai-litteracitet"],
  }));
}

function loadDidactics(): UnifiedItem[] {
  // De didaktiska modellerna ligger hårdkodade i sina sidor. Vi indexerar dem
  // som ”sektioner” så att en sökning på "TPACK" eller "epistemisk roll"
  // hamnar rätt. URL pekar mot toppsidan med ankare där det finns.
  const items: { url: string; title: string; description: string; tags: string[] }[] = [
    {
      url: "/didaktiska-modeller",
      title: "Didaktiska modeller för AI-undervisning",
      description:
        "Översikt — Med AI, Om AI, Mot AI och Genom AI. Fyra perspektiv, sju nyckelmodeller, tre praktiknivåer.",
      tags: ["TPACK", "SAMR", "SOLO", "ECPA"],
    },
    {
      url: "/didaktiska-modeller/lararens-roll",
      title: "Lärarens epistemiska roll",
      description:
        "Lärarens nya roll när AI medverkar i kunskapsbildningen. Från förmedlare till epistemisk modell.",
      tags: ["epistemisk", "lärarens roll", "kunskapsbildning"],
    },
    {
      url: "/didaktiska-modeller/perspektiv",
      title: "Perspektiv: Med, Om, Mot, Genom AI",
      description:
        "Fyra grundperspektiv för att rama in AI-undervisning. Vad de betyder och när du använder vilket.",
      tags: ["perspektiv", "med ai", "om ai", "mot ai", "genom ai"],
    },
    {
      url: "/didaktiska-modeller/uppgifter",
      title: "Uppgiftsdesign för AI-litteracitet",
      description:
        "Hur uppgifter behöver omformas för att fostra epistemisk medvetenhet — inte bara verktygsanvändning.",
      tags: ["uppgiftsdesign", "epistemisk medvetenhet"],
    },
  ];
  return items.map((d, i) => ({
    id: `didaktik:${i}`,
    type: "didaktisk-modell",
    title: d.title,
    description: d.description,
    content: `${d.title} ${d.description} ${d.tags.join(" ")}`,
    url: d.url,
    context: "Didaktiska modeller",
    tags: d.tags,
  }));
}

// === Publik API ===

// Modul-cachad — datan är statisk så vi bygger indexet en gång per process.
let cachedIndex: UnifiedItem[] | null = null;

export function getUnifiedIndex(): UnifiedItem[] {
  if (cachedIndex) return cachedIndex;

  cachedIndex = [
    ...loadModules(),
    ...loadWorkshopActivities(),
    ...loadGymActivities(),
    ...loadMellanstadietLessons(),
    ...loadLabbExperiments(),
    ...loadMellanstadietGames(),
    ...loadGrundskolaModules(),
    ...loadTools(),
    ...loadFrameworkAspects(),
    ...loadDidactics(),
  ];
  return cachedIndex;
}
