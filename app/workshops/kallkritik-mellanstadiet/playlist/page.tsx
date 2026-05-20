import { Suspense } from "react";
import { PlaylistRunner } from "@/components/workshops/kallkritik/PlaylistRunner";

export const metadata = {
  title: "Spellista · Källkritik-sandlådan",
  description: "En sekventiell genomgång av valda aktiviteter.",
};

export default function PlaylistPage() {
  return (
    <Suspense fallback={null}>
      <PlaylistRunner />
    </Suspense>
  );
}
