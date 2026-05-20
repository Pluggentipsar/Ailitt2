import { DarkPatternsGame } from "@/components/workshops/kallkritik/games/DarkPatternsGame";

export const metadata = {
  title: "Dark Patterns i AI-chattbotar · Källkritik-sandlådan",
  description:
    "Interaktivt spel där du upplever och lär dig genomskåda manipulationsmönster i AI-chattbotar.",
};

export default function DarkPatternsSpelPage() {
  return <DarkPatternsGame />;
}
