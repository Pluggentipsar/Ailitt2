/**
 * Datastruktur för mellanstadiekursen — 7 lektioner om AI-litteracitet för åk 4-6.
 * Källa: /mellanstadiet/master-plan.md + lektion-1..7/*.md
 */

export type LessonStatus = "draft" | "ready" | "live";

export interface MellanstadietLesson {
  id: string;
  number: number;
  slug: string;
  title: string;
  dimension: number;
  dimensionLabel: string;
  kernfraga: string;
  kernpastaende: string;
  tagline: string;
  duration: string;
  // Tailwind-färgnycklar — vi använder dem direkt i klasser
  accent: "indigo" | "amber" | "emerald" | "rose" | "yellow" | "violet" | "cyan";
  accentHex: string;
  interaktivt: string;
  status: LessonStatus;
}

export const MELLANSTADIET_LESSONS: MellanstadietLesson[] = [
  {
    id: "lektion-1",
    number: 1,
    slug: "lektion-1",
    title: "Berättelsen om AI",
    dimension: 0,
    dimensionLabel: "Berättelsen om AI",
    kernfraga: "Hur kom vi hit, och vilka berättelser bär vi med oss?",
    kernpastaende:
      "AI är inte en sak. Det är många. Det vi sett på film i 70 år har börjat hända — men inte alls som filmen gissade.",
    tagline: "Från Frankenstein till AI-agenter på 200 år",
    duration: "90 min",
    accent: "indigo",
    accentHex: "#6366f1",
    interaktivt: "Tidslinje-pusslet",
    status: "ready",
  },
  {
    id: "lektion-2",
    number: 2,
    slug: "lektion-2",
    title: "Vad är AI egentligen?",
    dimension: 1,
    dimensionLabel: "Vad är AI?",
    kernfraga: "Hur kan något som inte tänker ändå verka så smart?",
    kernpastaende:
      "AI tänker inte. AI gissar. Den känner igen mönster i enorma mängder data — och svarar med det som troligen kommer härnäst.",
    tagline: "Mönster, träningsdata och bias",
    duration: "90 min",
    accent: "amber",
    accentHex: "#f59e0b",
    interaktivt: "Mönsterlabbet",
    status: "ready",
  },
  {
    id: "lektion-3",
    number: 3,
    slug: "lektion-3",
    title: "Använda AI som verktyg",
    dimension: 2,
    dimensionLabel: "Använda AI",
    kernfraga: "Hur blir jag chefen över verktyget — inte tvärtom?",
    kernpastaende:
      "AI är ett verktyg. Du är chefen. Tydliga instruktioner ger användbara resultat.",
    tagline: "Prompt, Tänkartrappan och iteration",
    duration: "90 min",
    accent: "emerald",
    accentHex: "#10b981",
    interaktivt: "Prompt-Labbet",
    status: "ready",
  },
  {
    id: "lektion-4",
    number: 4,
    slug: "lektion-4",
    title: "Kritiskt granska AI",
    dimension: 4,
    dimensionLabel: "Kritiskt granska",
    kernfraga: "Hur ser jag när AI hittar på? Hur ser jag när bilden är fejkad?",
    kernpastaende:
      "AI är en väldigt övertygande gissningsmaskin. Aldrig en sanningsmaskin. Granskning är vår superkraft.",
    tagline: "Hallucinationer, deepfakes och prebunking",
    duration: "90 min",
    accent: "rose",
    accentHex: "#f43f5e",
    interaktivt: "Hallucinationsjakten",
    status: "ready",
  },
  {
    id: "lektion-5",
    number: 5,
    slug: "lektion-5",
    title: "Etik och ansvar",
    dimension: 3,
    dimensionLabel: "Etik",
    kernfraga: "Vem bestämmer över AI? Vem tar ansvar när det blir fel?",
    kernpastaende:
      "AI är inte ond. Men den är inte heller god. Den är ett verktyg som människor designat med vissa mål. Du har agens — du bestämmer.",
    tagline: "Tre etiska frågor och dark patterns",
    duration: "90 min",
    accent: "yellow",
    accentHex: "#eab308",
    interaktivt: "Dilemma-spelet",
    status: "ready",
  },
  {
    id: "lektion-6",
    number: 6,
    slug: "lektion-6",
    title: "Människa och maskin",
    dimension: 5,
    dimensionLabel: "Människa & maskin",
    kernfraga: "Vad kan jag som AI aldrig kan? Och varför är AI inte en kompis?",
    kernpastaende:
      "AI kan låta snäll. Men en kompis är snäll — också när det är obekvämt. AI är ett verktyg. Använd det. Bli inte vän med det.",
    tagline: "Sycophancy, empati och det unikt mänskliga",
    duration: "90 min",
    accent: "violet",
    accentHex: "#8b5cf6",
    interaktivt: "Smicker-testet",
    status: "ready",
  },
  {
    id: "lektion-7",
    number: 7,
    slug: "lektion-7",
    title: "Framtid och samhälle",
    dimension: 6,
    dimensionLabel: "Framtid & samhälle",
    kernfraga: "Hur vill DU att framtiden med AI ska se ut?",
    kernpastaende:
      "AI är inte en framtid som händer. Det är en framtid som byggs — av val som människor gör. Just nu. Och snart är det DU som gör de valen.",
    tagline: "Bygg din framtid + Klassens AI-manifest",
    duration: "90+ min",
    accent: "cyan",
    accentHex: "#06b6d4",
    interaktivt: "Bygg din framtid",
    status: "draft",
  },
];

export function getLessonBySlug(slug: string): MellanstadietLesson | undefined {
  return MELLANSTADIET_LESSONS.find((l) => l.slug === slug);
}
