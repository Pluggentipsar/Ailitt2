import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  {
    id: "flodet",
    number: 1,
    title: "Flödet",
    subtitle: "Källkritik på det de scrollar förbi",
    description:
      "Lärarna upptäcker att magkänslan inte längre räcker, och att deras egna flöden redan byggt två helt olika världsbilder bredvid varandra.",
    tone: "senap",
    icon: "Smartphone",
  },
  {
    id: "bygg-sjalv",
    number: 2,
    title: "Bygg själv",
    subtitle: "Förstå tekniken genom att göra",
    description:
      "Prebunking via produktion. När man själv har byggt deepfaken eller fejk-nyheten känner man igen mönstren utifrån.",
    tone: "terrakotta",
    icon: "Wrench",
  },
  {
    id: "hallucinationer",
    number: 3,
    title: "Hallucinationer & sanning",
    subtitle: "AI:n hittar på, eleverna behöver fånga det",
    description:
      "Träna örat för det självsäkra svaret som är fel. Faktagranskning, korsläsning och dubbelkoll.",
    tone: "havsblå",
    icon: "Search",
  },
  {
    id: "vannen",
    number: 4,
    title: "Vännen",
    subtitle: "Sykofanti, dark patterns och fasthållning",
    description:
      "AI:n säger ja för mycket. Den ger oss det vi vill höra. Träna på att märka det — i AI:n och i appen.",
    tone: "lila",
    icon: "ThumbsUp",
  },
  {
    id: "relationskritik",
    number: 5,
    title: "Relationskritik",
    subtitle: "AI som samtalspartner, inte bara verktyg",
    description:
      "När AI blir någon vi pratar med snarare än något vi använder. Vad gör det med oss? Vad behöver eleverna ha språk för?",
    tone: "skog",
    icon: "MessageCircle",
  },
  {
    id: "vaccinet",
    number: 6,
    title: "Vaccinet",
    subtitle: "Prebunking-spel som motståndskraft",
    description:
      "Färdiga spel som tränar motståndskraft mot desinformation. Använd som tillägg, inte som hela workshopen.",
    tone: "kol",
    icon: "Shield",
  },
];

export const chaptersById = Object.fromEntries(
  chapters.map((c) => [c.id, c])
) as Record<Chapter["id"], Chapter>;
