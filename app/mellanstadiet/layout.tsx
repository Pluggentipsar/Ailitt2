import type { Metadata } from "next";
import "./mellanstadiet.css";

export const metadata: Metadata = {
  title: "Mellanstadiet — AI-litteracitet | Ailitt",
  description:
    "En kurs i sju lektioner för åk 4-6: berättelsen om AI, hur det fungerar, hur du använder det, granskar det, och bestämmer vad det ska bli.",
};

export default function MellanstadietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mellanstadiet-root">{children}</div>;
}
