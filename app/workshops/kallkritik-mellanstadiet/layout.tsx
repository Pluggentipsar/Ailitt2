import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Inter } from "next/font/google";
import { WorkshopShell } from "@/components/workshops/kallkritik/WorkshopShell";
import { PlaylistProvider } from "@/components/workshops/kallkritik/PlaylistProvider";
import { PlaylistDock } from "@/components/workshops/kallkritik/PlaylistDock";
import "./workshop.css";

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
  title: "Källkritik-sandlådan · Workshop för mellanstadielärare",
  description:
    "En sandlåda av aktiviteter om AI, källkritik och relationskritik. För lärare att uppleva själva — och ta med hem till klassrummet.",
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${caveat.variable} ${patrick.variable} ${inter.variable} workshop-root`}
    >
      <PlaylistProvider>
        <WorkshopShell>{children}</WorkshopShell>
        <PlaylistDock />
      </PlaylistProvider>
    </div>
  );
}
