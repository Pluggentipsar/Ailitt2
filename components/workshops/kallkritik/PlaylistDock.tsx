"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ListMusic,
  X,
  ChevronUp,
  ChevronDown,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { usePlaylist } from "./PlaylistProvider";
import { activitiesById, chaptersById } from "@/lib/workshops/kallkritik";

/** Så mycket dock:en behöver veta om ett spellista-item för att rendera det. */
export type PlaylistDockItem = {
  title: string;
  href: string;
  /** Liten metadata-rad ovanför titeln, t.ex. "2.1 · 20 min". */
  meta: string;
  /** CSS-färg för pricken framför metadata-raden. */
  dotColor?: string;
  minutes: number;
};

// Default-resolvern är källkritik-workshopens — dock:en fungerar oförändrat där.
function resolveKallkritikItem(id: string): PlaylistDockItem | null {
  const a = activitiesById[id];
  if (!a) return null;
  const chapter = chaptersById[a.chapter];
  return {
    title: a.title,
    href: `/workshops/kallkritik-mellanstadiet/${a.id}`,
    meta: `${a.number} · ${a.duration}`,
    dotColor: `var(--workshop-${chapter.tone})`,
    minutes: a.durationMinutes,
  };
}

export function PlaylistDock({
  resolveItem = resolveKallkritikItem,
  title = "Min workshop",
  fabLabel = "Min workshop",
  itemNounSingular = "aktivitet",
  itemNounPlural = "aktiviteter",
  emptyTitle = "Inga aktiviteter valda",
  emptyHint = "Bläddra i sandlådan och klicka på + på aktivitetskort för att lägga till.",
  openLabel = "Öppna spellistan",
  copyLabel = "Generera och kopiera länk",
}: {
  /** Slår upp id → renderbart item. Returnera null för okända id:n. */
  resolveItem?: (id: string) => PlaylistDockItem | null;
  title?: string;
  fabLabel?: string;
  itemNounSingular?: string;
  itemNounPlural?: string;
  emptyTitle?: string;
  emptyHint?: string;
  openLabel?: string;
  copyLabel?: string;
}) {
  const { ids, remove, moveUp, moveDown, clear, buildUrl, playlistHref } =
    usePlaylist();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalMinutes = ids.reduce(
    (sum, id) => sum + (resolveItem(id)?.minutes ?? 0),
    0
  );

  const count = ids.length;

  const copyLink = async () => {
    const url = buildUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (count === 0 && !open) return null;

  return (
    <>
      {/* FAB — alltid synlig om något är valt */}
      {count > 0 && !open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-stone-900 text-workshop-canvas font-semibold shadow-xl hover:bg-stone-800 transition-all hover:scale-105 print:hidden"
        >
          <ListMusic className="h-5 w-5" />
          <span>{fabLabel}</span>
          <span className="grid place-items-center h-6 w-6 rounded-full bg-workshop-senap text-stone-900 text-sm font-bold">
            {count}
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed inset-0 z-50 print:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full sm:w-[460px] bg-workshop-canvas shadow-2xl flex flex-col">
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-stone-200">
              <div>
                <h2 className="font-display text-2xl text-stone-900 leading-none">
                  {title}
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  {count} {count === 1 ? itemNounSingular : itemNounPlural}
                  {totalMinutes > 0 && ` · ${totalMinutes} min totalt`}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-stone-200 hover:bg-stone-300"
                aria-label="Stäng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {count === 0 ? (
                <div className="text-center py-12">
                  <Sparkles className="h-8 w-8 mx-auto text-stone-400 mb-3" />
                  <p className="text-stone-600 mb-1">{emptyTitle}</p>
                  <p className="text-sm text-stone-500">{emptyHint}</p>
                </div>
              ) : (
                <ol className="space-y-2">
                  {ids.map((id, i) => {
                    const item = resolveItem(id);
                    if (!item) return null;
                    return (
                      <li
                        key={id}
                        className="flex items-start gap-2 p-3 bg-white border border-stone-200 rounded-xl"
                      >
                        <span className="font-display text-2xl text-stone-400 leading-none w-6 shrink-0 text-right">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0"
                              style={{
                                background: item.dotColor ?? "#78716c",
                              }}
                            />
                            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                              {item.meta}
                            </span>
                          </div>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="font-display text-lg text-stone-900 leading-tight hover:underline decoration-2 underline-offset-2"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <div className="flex flex-col gap-0.5 shrink-0">
                          <button
                            onClick={() => moveUp(id)}
                            disabled={i === 0}
                            className="grid h-6 w-6 place-items-center rounded hover:bg-stone-100 disabled:opacity-30"
                            aria-label="Flytta upp"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => moveDown(id)}
                            disabled={i === ids.length - 1}
                            className="grid h-6 w-6 place-items-center rounded hover:bg-stone-100 disabled:opacity-30"
                            aria-label="Flytta ner"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(id)}
                          className="grid h-7 w-7 place-items-center rounded hover:bg-workshop-terrakotta/15 text-stone-500 hover:text-workshop-terrakotta shrink-0"
                          aria-label="Ta bort"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>

            {count > 0 && (
              <div className="px-5 py-4 border-t border-stone-200 space-y-2">
                <Link
                  href={playlistHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-stone-900 text-workshop-canvas font-semibold hover:bg-stone-800 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  {openLabel}
                </Link>
                <button
                  onClick={copyLink}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-white border-2 border-stone-900 text-stone-900 font-semibold hover:bg-stone-100 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Länk kopierad!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {copyLabel}
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (confirm("Tömma hela spellistan?")) clear();
                  }}
                  className="text-xs text-stone-500 hover:text-workshop-terrakotta w-full text-center mt-1"
                >
                  Töm spellistan
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
