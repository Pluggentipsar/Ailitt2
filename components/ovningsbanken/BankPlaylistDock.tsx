"use client";

import {
  PlaylistDock,
  type PlaylistDockItem,
} from "@/components/workshops/kallkritik/PlaylistDock";
import { ovningarById, DOMAN_META } from "@/lib/ovningsbanken";
import { DOMAN_DOT } from "./meta";

// Bankens variant av spellista-dock:en — samma UI, egen uppslagning.
function resolveBankItem(id: string): PlaylistDockItem | null {
  const o = ovningarById[id];
  if (!o) return null;
  const forstaDoman = o.domaner[0];
  return {
    title: o.titel,
    href: `/ovningsbanken/${o.id}`,
    meta: forstaDoman
      ? `${DOMAN_META[forstaDoman].namn} · ${o.tid}`
      : o.tid,
    dotColor: forstaDoman ? DOMAN_DOT[forstaDoman] : undefined,
    minutes: o.tidMinuter,
  };
}

export function BankPlaylistDock() {
  return (
    <PlaylistDock
      resolveItem={resolveBankItem}
      title="Min spellista"
      fabLabel="Min spellista"
      itemNounSingular="övning"
      itemNounPlural="övningar"
      emptyTitle="Inga övningar valda"
      emptyHint="Bläddra i banken och lägg till övningar med knappen på korten."
      openLabel="Kör spellistan"
      copyLabel="Kopiera delningslänk"
    />
  );
}
