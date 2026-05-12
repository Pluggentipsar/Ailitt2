import type { Metadata } from "next";
import Script from "next/script";
import { ThemeToggle } from "@/components/mellanstadiet/ThemeToggle";
import "./mellanstadiet.css";

export const metadata: Metadata = {
  title: "Mellanstadiet — AI-litteracitet | Ailitt",
  description:
    "En kurs i sju lektioner för åk 4-6: berättelsen om AI, hur det fungerar, hur du använder det, granskar det, och bestämmer vad det ska bli.",
};

const NO_FLASH = `
(function(){
  try {
    var t = localStorage.getItem('ms-theme');
    var theme = t === 'dark' ? 'dark' : 'light';
    var root = document.querySelector('.mellanstadiet-root');
    if (root) root.setAttribute('data-ms-theme', theme);
  } catch (e) {}
})();
`;

export default function MellanstadietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mellanstadiet-root" data-ms-theme="light">
      <Script id="ms-theme-init" strategy="beforeInteractive">
        {NO_FLASH}
      </Script>
      {children}
      <ThemeToggle />
    </div>
  );
}
