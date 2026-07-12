"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type PlaylistContextValue = {
  ids: string[];
  has: (id: string) => boolean;
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  reorder: (from: number, to: number) => void;
  moveUp: (id: string) => void;
  moveDown: (id: string) => void;
  clear: () => void;
  /** Absolut delningslänk. Utan argument används providerns basePath. */
  buildUrl: (base?: string) => string;
  /** Providerns bas-sökväg — så konsumenter slipper hårdkoda den. */
  basePath: string;
  /** Relativ länk till spellista-sidan med aktuella steps — för <Link>. */
  playlistHref: string;
};

const PlaylistContext = createContext<PlaylistContextValue | null>(null);

export function PlaylistProvider({
  children,
  storageKey = "kallkritik-playlist-v1",
  basePath = "/workshops/kallkritik-mellanstadiet",
  playlistSegment = "playlist",
}: {
  children: React.ReactNode;
  /** localStorage-nyckel — ge varje bank/workshop sin egen. */
  storageKey?: string;
  /** Bas-sökväg som delningslänkar byggs mot. */
  basePath?: string;
  /** Sista url-segmentet för spellista-sidan (t.ex. "playlist" eller "spellista"). */
  playlistSegment?: string;
}) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Läs från localStorage en gång efter mount (SSR-säkert).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setIds(parsed.filter((x) => typeof x === "string"));
        }
      }
    } catch {
      // korrupt JSON — ignorera
    }
    setHydrated(true);
  }, [storageKey]);

  // Skriv tillbaka när ids ändras (efter hydrering).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(ids));
    } catch {
      // quota / private mode — ignorera
    }
  }, [ids, hydrated, storageKey]);

  const has = useCallback((id: string) => ids.includes(id), [ids]);
  const add = useCallback(
    (id: string) => setIds((prev) => (prev.includes(id) ? prev : [...prev, id])),
    []
  );
  const remove = useCallback(
    (id: string) => setIds((prev) => prev.filter((x) => x !== id)),
    []
  );
  const toggle = useCallback(
    (id: string) =>
      setIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      ),
    []
  );
  const reorder = useCallback((from: number, to: number) => {
    setIds((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);
  const moveUp = useCallback(
    (id: string) =>
      setIds((prev) => {
        const i = prev.indexOf(id);
        if (i <= 0) return prev;
        const next = [...prev];
        [next[i - 1], next[i]] = [next[i], next[i - 1]];
        return next;
      }),
    []
  );
  const moveDown = useCallback(
    (id: string) =>
      setIds((prev) => {
        const i = prev.indexOf(id);
        if (i === -1 || i === prev.length - 1) return prev;
        const next = [...prev];
        [next[i], next[i + 1]] = [next[i + 1], next[i]];
        return next;
      }),
    []
  );
  const clear = useCallback(() => setIds([]), []);

  const buildUrl = useCallback(
    (base?: string) => {
      const b = base ?? basePath;
      const params = new URLSearchParams({ steps: ids.join(",") });
      const baseWithSlash = b.endsWith("/") ? b : b + "/";
      const full = new URL(
        `${baseWithSlash}${playlistSegment}?${params}`,
        typeof window !== "undefined"
          ? window.location.origin
          : "http://localhost"
      );
      return full.toString();
    },
    [ids, basePath, playlistSegment]
  );

  const playlistHref = useMemo(() => {
    const baseWithSlash = basePath.endsWith("/") ? basePath : basePath + "/";
    return `${baseWithSlash}${playlistSegment}?steps=${ids.join(",")}`;
  }, [ids, basePath, playlistSegment]);

  const value = useMemo<PlaylistContextValue>(
    () => ({
      ids,
      has,
      add,
      remove,
      toggle,
      reorder,
      moveUp,
      moveDown,
      clear,
      buildUrl,
      basePath,
      playlistHref,
    }),
    [ids, has, add, remove, toggle, reorder, moveUp, moveDown, clear, buildUrl, basePath, playlistHref]
  );

  return (
    <PlaylistContext.Provider value={value}>{children}</PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  const ctx = useContext(PlaylistContext);
  if (!ctx) {
    throw new Error("usePlaylist måste anropas inuti PlaylistProvider");
  }
  return ctx;
}
