"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Copy,
  ListMusic,
  Play,
} from "lucide-react";
import type { SpellistaOversiktOvning } from "@/lib/ovningsbanken";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import { DOMAN_ORDNING, KALLA_META } from "./meta";

/**
 * Översiktsläge för en spellista — namn, omfång, domän-mix och övningarna
 * som numrerad kortlista, plus "Starta spellistan" och "Kopiera länk".
 *
 * Två skepnader:
 * - `hero` (kurerade landningssidor): mörk gradient-hero i sajtens stil.
 * - utan `hero` (query-varianten /spellista?steps=…): ljus workshop-paper-topp.
 */
export function SpellistaOversikt({
  namn,
  beskrivning,
  ovningar,
  startHref,
  delningsPath,
  hero = false,
}: {
  namn: string;
  beskrivning?: string;
  ovningar: SpellistaOversiktOvning[];
  /** Länk in i runnern (query-runnern med &steg=1). */
  startHref: string;
  /** Relativ sökväg som delningsknappen kopierar (origin läggs på i klienten). */
  delningsPath: string;
  hero?: boolean;
}) {
  const totalMin = ovningar.reduce((sum, o) => sum + o.tidMinuter, 0);
  const domaner = DOMAN_ORDNING.filter((d) =>
    ovningar.some((o) => o.domaner.includes(d))
  );
  const antalText = `${ovningar.length} ${
    ovningar.length === 1 ? "övning" : "övningar"
  }`;

  return (
    <div className={hero ? "min-h-screen bg-gray-50 pb-20" : "workshop-paper min-h-screen pb-20"}>
      {hero ? (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 pb-14 pt-24 sm:pb-16 sm:pt-28">
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                <ListMusic className="h-4 w-4" />
                Kurerad spellista
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl">
                {namn}
              </h1>
              {beskrivning && (
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md">
                  {beskrivning}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white">
                  {antalText}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white">
                  <Clock className="h-3.5 w-3.5" />
                  ca {totalMin} min
                </span>
                {domaner.map((d) => (
                  <DomanBadge key={d} doman={d} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={startHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                >
                  <Play className="h-5 w-5" />
                  Starta spellistan
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <KopieraLankKnapp delningsPath={delningsPath} morkBakgrund />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <header className="container mx-auto px-4 pb-2 pt-10 sm:pt-14">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
              <ListMusic className="h-4 w-4" />
              Spellista
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[0.95] text-stone-900 sm:text-5xl">
              {namn}
            </h1>
            {beskrivning && (
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
                {beskrivning}
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-sm text-stone-700">
                {antalText}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-sm text-stone-700">
                <Clock className="h-3.5 w-3.5" />
                ca {totalMin} min
              </span>
              {domaner.map((d) => (
                <DomanBadge key={d} doman={d} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={startHref}
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                <Play className="h-5 w-5" />
                Starta spellistan
                <ArrowRight className="h-5 w-5" />
              </Link>
              <KopieraLankKnapp delningsPath={delningsPath} />
            </div>
          </div>
        </header>
      )}

      {/* Numrerad kortlista — samma för båda skepnaderna */}
      <section className="container mx-auto px-4 pt-10">
        <ol className="max-w-4xl space-y-3">
          {ovningar.map((o, i) => {
            const kalla = KALLA_META[o.kalla];
            return (
              <li key={`${o.id}-${i}`}>
                <Link
                  href={`/ovningsbanken/${o.id}`}
                  className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="font-display w-8 shrink-0 text-right text-3xl leading-none text-stone-300">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1.5 flex flex-wrap items-center gap-1.5">
                      {o.domaner.map((d) => (
                        <DomanBadge key={d} doman={d} />
                      ))}
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${kalla.chip}`}
                      >
                        {kalla.label}
                      </span>
                    </span>
                    <span className="block text-lg font-semibold leading-snug text-stone-900 group-hover:underline">
                      {o.titel}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-stone-600">
                      {o.blurb}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-stone-500">
                      <Clock className="h-3.5 w-3.5" />
                      {o.tid}
                    </span>
                  </span>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-700" />
                </Link>
              </li>
            );
          })}
        </ol>

        {/* Stor primär start-knapp även under listan */}
        <div className="mt-8 max-w-4xl">
          <Link
            href={startHref}
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Starta spellistan
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function KopieraLankKnapp({
  delningsPath,
  morkBakgrund = false,
}: {
  delningsPath: string;
  morkBakgrund?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const kopiera = async () => {
    try {
      const url = new URL(delningsPath, window.location.origin).toString();
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blockerad — ignorera tyst
    }
  };

  return (
    <button
      onClick={kopiera}
      className={
        morkBakgrund
          ? "inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          : "inline-flex items-center gap-2 rounded-full border-2 border-stone-900 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
      }
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Länk kopierad!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Kopiera länk
        </>
      )}
    </button>
  );
}
