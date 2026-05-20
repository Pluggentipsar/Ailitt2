"use client";

import { Plus, Check } from "lucide-react";
import { usePlaylist } from "./PlaylistProvider";

export function PlaylistToggleButton({ activityId }: { activityId: string }) {
  const { has, toggle } = usePlaylist();
  const active = has(activityId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(activityId);
      }}
      className={`grid h-7 w-7 place-items-center rounded-full transition-all shrink-0 ${
        active
          ? "bg-workshop-skog text-white scale-110"
          : "bg-stone-900/15 text-stone-700 hover:bg-stone-900 hover:text-workshop-canvas"
      }`}
      title={active ? "Ta bort från min workshop" : "Lägg till i min workshop"}
      aria-label={active ? "Ta bort från min workshop" : "Lägg till i min workshop"}
    >
      {active ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
    </button>
  );
}
