"use client";

import { ListPlus, Check } from "lucide-react";
import { usePlaylist } from "./PlaylistProvider";

export function AddToPlaylistButton({ activityId }: { activityId: string }) {
  const { has, toggle } = usePlaylist();
  const active = has(activityId);

  return (
    <button
      onClick={() => toggle(activityId)}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors border-2 ${
        active
          ? "bg-workshop-skog text-white border-workshop-skog"
          : "bg-white text-stone-900 border-stone-900 hover:bg-stone-100"
      }`}
    >
      {active ? (
        <>
          <Check className="h-4 w-4" />
          I min workshop
        </>
      ) : (
        <>
          <ListPlus className="h-4 w-4" />
          Lägg till i min workshop
        </>
      )}
    </button>
  );
}
