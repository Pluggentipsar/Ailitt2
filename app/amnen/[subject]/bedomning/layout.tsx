import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bedömning i Svenska | AI-litt",
  description:
    "Strategier, matriser och arbetssätt för att göra bedömning i Svenska likvärdig och lärande i AI-tider.",
};

export default function BedomningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
