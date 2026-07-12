import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Inter } from "next/font/google";
import { PlaylistProvider } from "@/components/workshops/kallkritik/PlaylistProvider";
import { BankPlaylistDock } from "@/components/ovningsbanken/BankPlaylistDock";
// Banken återanvänder källkritik-workshopens renderare (BlockRenderer,
// ModeTabs, PresentationEngine) — de kräver workshop.css + .workshop-root.
import "../workshops/kallkritik-mellanstadiet/workshop.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-workshop-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-övningsbanken · AI-litt",
  description:
    "Övningar i tre lägen — prova själv, lärarhandledning, elevinstruktion — som du plockar ihop till spellistor och delar med kollegor och elever.",
};

export default function OvningsbankenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${caveat.variable} ${patrick.variable} ${inter.variable} workshop-root`}
    >
      <PlaylistProvider
        storageKey="ovningsbanken-playlist-v1"
        basePath="/ovningsbanken/"
        playlistSegment="spellista"
      >
        {children}
        <BankPlaylistDock />
      </PlaylistProvider>
    </div>
  );
}
