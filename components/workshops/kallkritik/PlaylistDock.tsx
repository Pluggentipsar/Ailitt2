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

const BASE_PATH = "/workshops/kallkritik-mellanstadiet";

export function PlaylistDock() {
  const { ids, remove, moveUp, moveDown, clear, buildUrl } = usePlaylist();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalMinutes = ids.reduce((sum, id) => {
    const a = activitiesById[id];
    return sum + (a?.durationMinutes ?? 0);
  }, 0);

  const count = ids.length;

  const copyLink = async () => {
    const url = buildUrl(BASE_PATH);
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
          <span>Min workshop</span>
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
                  Min workshop
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  {count} {count === 1 ? "aktivitet" : "aktiviteter"}
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
                  <p className="text-stone-600 mb-1">Inga aktiviteter valda</p>
                  <p className="text-sm text-stone-500">
                    Bläddra i sandlådan och klicka på + på aktivitetskort för att
                    lägga till.
                  </p>
                </div>
              ) : (
                <ol className="space-y-2">
                  {ids.map((id, i) => {
                    const a = activitiesById[id];
                    if (!a) return null;
                    const chapter = chaptersById[a.chapter];
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
                                background: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                              }}
                            />
                            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                              {a.number} · {a.duration}
                            </span>
                          </div>
                          <Link
                            href={`${BASE_PATH}/${a.id}`}
                            onClick={() => setOpen(false)}
                            className="font-display text-lg text-stone-900 leading-tight hover:underline decoration-2 underline-offset-2"
                          >
                            {a.title}
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
                  href={`${BASE_PATH}/playlist?steps=${ids.join(",")}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-stone-900 text-workshop-canvas font-semibold hover:bg-stone-800 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Öppna spellistan
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
                      Generera och kopiera länk
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
