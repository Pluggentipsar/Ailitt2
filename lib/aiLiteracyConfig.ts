export interface AiLiteracyAspect {
  id: number;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  dotColor: string;
}

export const aiLiteracyConfig: AiLiteracyAspect[] = [
  {
    id: 0,
    name: "Berättelsen om AI",
    description: "AI:s historia, utveckling och kulturella narrativ",
    color: "purple",
    bgColor: "bg-purple-50",
    dotColor: "bg-purple-500",
  },
  {
    id: 1,
    name: "Vad är AI?",
    description: "Teknisk förståelse av hur AI-system fungerar",
    color: "blue",
    bgColor: "bg-blue-50",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Använda AI",
    description: "Praktisk användning av AI-verktyg och strategier",
    color: "green",
    bgColor: "bg-green-50",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Etik",
    description: "Etiska överväganden och ansvarsfrågor kring AI",
    color: "red",
    bgColor: "bg-red-50",
    dotColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Kritiskt granska",
    description: "Källkritik, utvärdering och faktakontroll av AI-genererat innehåll",
    color: "orange",
    bgColor: "bg-orange-50",
    dotColor: "bg-orange-500",
  },
  {
    id: 5,
    name: "Människa & maskin",
    description: "Relationen mellan människor och AI, autenticitet och kreativitet",
    color: "fuchsia",
    bgColor: "bg-fuchsia-50",
    dotColor: "bg-fuchsia-500",
  },
  {
    id: 6,
    name: "Framtid & samhälle",
    description: "AI:s samhällspåverkan, demokrati och framtidsperspektiv",
    color: "teal",
    bgColor: "bg-teal-50",
    dotColor: "bg-teal-500",
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
