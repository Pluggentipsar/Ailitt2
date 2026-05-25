// Mappning för "Vad letar du efter?"-wizarden på landningssidan.
// Idén är att en lärare i två steg (stadie + behov) ska få 1-3 konkreta
// ingångar — och en ärlig text om vi inte har något specifikt för en given
// kombination. Luckor är värdefulla; de blir prioriteringslistan framåt.

export type Stage =
  | "f-3"
  | "ak-4-6"
  | "ak-7-9"
  | "gymnasiet"
  | "vuxen-sfi"
  | "allmant";

export type Need =
  | "lektion" // färdig lektion att köra med klassen
  | "workshop" // workshop, sammanhållet pedagogiskt paket
  | "aktivitet" // enskild aktivitet att plocka från
  | "ramverk" // teori, ramverk, didaktiska modeller
  | "verktyg"; // konkreta AI-verktyg, källkritikverktyg

export const stageLabels: Record<Stage, string> = {
  "f-3": "Förskoleklass-3",
  "ak-4-6": "Åk 4-6",
  "ak-7-9": "Åk 7-9",
  gymnasiet: "Gymnasiet",
  "vuxen-sfi": "Vuxen/SFI",
  allmant: "Allmänt/blandat",
};

export const needLabels: Record<Need, string> = {
  lektion: "Färdig lektion",
  workshop: "Workshop",
  aktivitet: "Aktivitet att plocka från",
  ramverk: "Ramverk & teori",
  verktyg: "Verktyg",
};

export const stageOrder: Stage[] = [
  "f-3",
  "ak-4-6",
  "ak-7-9",
  "gymnasiet",
  "vuxen-sfi",
  "allmant",
];

export const needOrder: Need[] = [
  "lektion",
  "workshop",
  "aktivitet",
  "ramverk",
  "verktyg",
];

export type FinderResult = {
  title: string;
  description: string;
  href: string;
  // När resultatet är en "närmaste alternativ" snarare än exakt match —
  // wizarden visar då en kort förklaring ovanför kortet.
  isApproximate?: boolean;
};

// Varje entry beskriver vilka stage/need-kombinationer som leder till ett
// specifikt resultat. Samma sida kan matcha flera kombinationer.
type Entry = {
  stages: Stage[];
  needs: Need[];
  result: FinderResult;
};

const entries: Entry[] = [
  // === GRUNDSKOLA F-6 LÄROMEDEL ===
  {
    stages: ["f-3", "ak-4-6"],
    needs: ["lektion"],
    result: {
      title: "AI-litteracitet F-6",
      description:
        "Komplett digitalt läromedel med sagor, filmer och aktiviteter. Strukturerat per årskurs.",
      href: "/grundskola",
    },
  },

  // === MELLANSTADIET-PAKETET ===
  {
    stages: ["ak-4-6"],
    needs: ["lektion", "aktivitet"],
    result: {
      title: "Mellanstadiet — lektioner & AI-labbet",
      description:
        "Färdiga lektionsupplägg, en sandlåda där eleverna utforskar AI, plus minispel.",
      href: "/mellanstadiet",
    },
  },

  // === WORKSHOP KÄLLKRITIK ===
  {
    stages: ["ak-4-6", "ak-7-9"],
    needs: ["workshop", "lektion"],
    result: {
      title: "Workshop: Källkritik-sandlådan",
      description:
        "8 kapitel om dark patterns, retoriska knep, hallucinationer och bias. För vuxenworkshop OCH klassrum.",
      href: "/workshops/kallkritik-mellanstadiet",
    },
  },
  {
    stages: ["gymnasiet", "allmant"],
    needs: ["workshop"],
    result: {
      title: "Workshop: Källkritik-sandlådan",
      description:
        "Designad för mellanstadiet men aktiviteterna funkar lika bra på äldre elever — särskilt 7-9 och tidig gymnasial nivå.",
      href: "/workshops/kallkritik-mellanstadiet",
      isApproximate: true,
    },
  },

  // === GYMNASIE-MODULER (/amnen) ===
  {
    stages: ["gymnasiet"],
    needs: ["lektion", "aktivitet"],
    result: {
      title: "Ämnen — gymnasiemoduler",
      description:
        "Lektionsmoduler kopplade till Skolverkets kursplaner. Just nu starkast i svenska, fyller på.",
      href: "/amnen",
    },
  },

  // === RAMVERK ===
  {
    stages: ["f-3", "ak-4-6", "ak-7-9", "gymnasiet", "vuxen-sfi", "allmant"],
    needs: ["ramverk"],
    result: {
      title: "AI-litteracitet — ramverket",
      description:
        "7 dimensioner som väver in AI-förståelse i ämnesundervisning. Filosofin bakom sidan.",
      href: "/ai-litteracitet",
    },
  },
  {
    stages: ["f-3", "ak-4-6", "ak-7-9", "gymnasiet", "vuxen-sfi", "allmant"],
    needs: ["ramverk"],
    result: {
      title: "Didaktiska modeller",
      description:
        "TPACK-AI, lärarens epistemiska roll och praktiska ramverk för att undervisa med, om, mot och genom AI.",
      href: "/didaktiska-modeller",
    },
  },

  // === VERKTYGSLÅDA ===
  {
    stages: ["f-3", "ak-4-6", "ak-7-9", "gymnasiet", "vuxen-sfi", "allmant"],
    needs: ["verktyg"],
    result: {
      title: "Verktygslådan",
      description:
        "Sökbar samling av AI-tjänster, källkritikverktyg och prebunking-spel. Filtrera på kostnad, språk, konto.",
      href: "/verktygslada",
    },
  },

  // === LÖSA AKTIVITETER ===
  {
    stages: ["gymnasiet"],
    needs: ["aktivitet"],
    result: {
      title: "Aktiviteter",
      description:
        "Plocka enskilda klassrumsövningar att lägga in i din pågående undervisning.",
      href: "/aktiviteter",
    },
  },
  {
    stages: ["ak-4-6"],
    needs: ["aktivitet"],
    result: {
      title: "AI-labbet i mellanstadiet",
      description:
        "Sandlåda med ca 100 prompter eleverna kan testa själva — kategoriserade per typ.",
      href: "/mellanstadiet/labb",
    },
  },

  // === FALLBACK FÖR LUCKOR ===
  // 7-9 saknar färdiga lektioner — närmaste är workshopen.
  {
    stages: ["ak-7-9"],
    needs: ["lektion"],
    result: {
      title: "Workshop: Källkritik-sandlådan",
      description:
        "Vi har inget färdigt 7-9-paket ännu. Workshopen är designad för mellanstadiet men flera aktiviteter funkar utmärkt på 7-9 — särskilt dark patterns, retoriska knep och bias.",
      href: "/workshops/kallkritik-mellanstadiet",
      isApproximate: true,
    },
  },
  {
    stages: ["ak-7-9"],
    needs: ["aktivitet"],
    result: {
      title: "Verktygslådan + workshop-aktiviteter",
      description:
        "Plocka från workshopens 30+ aktiviteter — många är ålderslösa. Verktygslådan har de digitala resurserna.",
      href: "/workshops/kallkritik-mellanstadiet#sandladan",
      isApproximate: true,
    },
  },

  // Vuxen/SFI är en stor lucka. Visa det ärligt.
  {
    stages: ["vuxen-sfi"],
    needs: ["lektion", "aktivitet"],
    result: {
      title: "Inget specifikt för vuxenutbildning ännu",
      description:
        "Vi bygger på. Tills vidare: workshopen om källkritik passar SFI-grupper på B1+. Didaktiska modeller hjälper dig anpassa.",
      href: "/workshops/kallkritik-mellanstadiet",
      isApproximate: true,
    },
  },

  // Gymnasiet har ingen egen workshop ännu.
  {
    stages: ["gymnasiet"],
    needs: ["workshop"],
    result: {
      title: "Källkritik-workshopen kan anpassas",
      description:
        "Källkritik-workshopen är designad för mellanstadie-lärare i workshop-form, men hela ramverket funkar för gymnasiestaben — särskilt dark patterns, retorik, bias.",
      href: "/workshops/kallkritik-mellanstadiet",
      isApproximate: true,
    },
  },

  // Allmänt/blandat → bredare ingångar
  {
    stages: ["allmant"],
    needs: ["lektion"],
    result: {
      title: "Utforska alla moduler",
      description:
        "Sök bland alla färdiga moduler (mest gymnasieinnehåll just nu) med filter på AI-litteracitetsaspekter.",
      href: "/#search",
    },
  },
  {
    stages: ["allmant"],
    needs: ["aktivitet"],
    result: {
      title: "Verktygslådan",
      description:
        "Det bredaste verktyget — sökbar samling av allt vi använder i undervisning. Filtrera fram det som passar dig.",
      href: "/verktygslada",
    },
  },
];

export function findResults(stage: Stage, need: Need): FinderResult[] {
  const matches = entries
    .filter((e) => e.stages.includes(stage) && e.needs.includes(need))
    .map((e) => e.result);

  // Begränsa till 3 resultat — wizarden ska peka, inte överväldiga.
  return matches.slice(0, 3);
}

// Hjälpare: vid tom kombination (inga matches), försök hitta vad som finns
// för bara stadiet, så vi kan föreslå "närmaste alternativ".
export function findFallbackForStage(stage: Stage): FinderResult[] {
  const matches = entries
    .filter((e) => e.stages.includes(stage))
    .map((e) => ({ ...e.result, isApproximate: true }));

  // Deduplicera på href.
  const seen = new Set<string>();
  const unique: FinderResult[] = [];
  for (const m of matches) {
    if (seen.has(m.href)) continue;
    seen.add(m.href);
    unique.push(m);
  }
  return unique.slice(0, 3);
}
