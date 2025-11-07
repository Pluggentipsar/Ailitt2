export interface AiLiteracyAspect {
  id: number;
  name: string;
  description: string;
  color: string;
  gradient: string;
  dotColor: string;
  ringColor: string;
}

export const aiLiteracyConfig: AiLiteracyAspect[] = [
  {
    id: 0,
    name: "Berättelsen om AI",
    description: "AI:s historia, utveckling och kulturella narrativ",
    color: "purple",
    gradient: "from-purple-50 via-violet-50 to-purple-100",
    dotColor: "from-purple-400 to-violet-600",
    ringColor: "ring-purple-400/50",
  },
  {
    id: 1,
    name: "Vad är AI?",
    description: "Teknisk förståelse av hur AI-system fungerar",
    color: "blue",
    gradient: "from-blue-50 via-sky-50 to-blue-100",
    dotColor: "from-blue-400 to-sky-600",
    ringColor: "ring-blue-400/50",
  },
  {
    id: 2,
    name: "Använda AI",
    description: "Praktisk användning av AI-verktyg och strategier",
    color: "green",
    gradient: "from-green-50 via-emerald-50 to-green-100",
    dotColor: "from-green-400 to-emerald-600",
    ringColor: "ring-green-400/50",
  },
  {
    id: 3,
    name: "Etik",
    description: "Etiska överväganden och ansvarsfrågor kring AI",
    color: "red",
    gradient: "from-red-50 via-rose-50 to-red-100",
    dotColor: "from-red-400 to-rose-600",
    ringColor: "ring-red-400/50",
  },
  {
    id: 4,
    name: "Kritiskt granska",
    description: "Källkritik, utvärdering och faktakontroll av AI-genererat innehåll",
    color: "orange",
    gradient: "from-orange-50 via-amber-50 to-orange-100",
    dotColor: "from-orange-400 to-amber-600",
    ringColor: "ring-orange-400/50",
  },
  {
    id: 5,
    name: "Människa & maskin",
    description: "Relationen mellan människor och AI, autenticitet och kreativitet",
    color: "fuchsia",
    gradient: "from-fuchsia-50 via-pink-50 to-fuchsia-100",
    dotColor: "from-fuchsia-400 to-pink-600",
    ringColor: "ring-fuchsia-400/50",
  },
  {
    id: 6,
    name: "Framtid & samhälle",
    description: "AI:s samhällspåverkan, demokrati och framtidsperspektiv",
    color: "teal",
    gradient: "from-teal-50 via-cyan-50 to-teal-100",
    dotColor: "from-teal-400 to-cyan-600",
    ringColor: "ring-teal-400/50",
  },
];

export function getAiLiteracyAspect(id: number): AiLiteracyAspect | undefined {
  return aiLiteracyConfig.find((aspect) => aspect.id === id);
}

export function getAiLiteracyAspects(ids: number[]): AiLiteracyAspect[] {
  return ids
    .map((id) => getAiLiteracyAspect(id))
    .filter((aspect): aspect is AiLiteracyAspect => aspect !== undefined);
}
