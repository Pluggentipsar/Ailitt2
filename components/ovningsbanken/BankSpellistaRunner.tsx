"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  AlertTriangle,
  Wifi,
  WifiOff,
  ListMusic,
  Sparkles,
  Monitor,
} from "lucide-react";
import { ovningarById, type BankOvning } from "@/lib/ovningsbanken";
import { ModeTabs } from "@/components/workshops/kallkritik/ModeTabs";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import { KALLA_META } from "./meta";

const BASE = "/ovningsbanken";

// Samma mönster som källkritik-workshopens PlaylistRunner, men mot
// bankens BankOvning-data: ?steps=id1,id2 + valfri &namn=Rubrik.
export function BankSpellistaRunner() {
  const params = useSearchParams();
  const stepsParam = params.get("steps") ?? "";
  const namn = params.get("namn");
  const allIds = stepsParam.split(",").filter(Boolean);
  const giltiga = allIds
    .map((id) => ovningarById[id])
    .filter((o): o is BankOvning => Boolean(o));

  const [stepIdx, setStepIdx] = useState(0);

  const totalMinutes = useMemo(
    () => giltiga.reduce((sum, o) => sum + o.tidMinuter, 0),
    [giltiga]
  );

  const rubrik = namn && namn.trim().length > 0 ? namn : "Spellista";

  if (giltiga.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ListMusic className="mx-auto mb-4 h-12 w-12 text-stone-400" />
        <h1 className="font-display mb-3 text-4xl text-stone-900">
          Ingen spellista att visa
        </h1>
        <p className="mx-auto mb-6 max-w-md text-stone-600">
          Bygg din spellista i övningsbanken — lägg till övningar från korten
          och dela sedan länken.
        </p>
        <Link
          href={BASE}
          className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 font-medium text-white hover:bg-stone-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till övningsbanken
        </Link>
      </div>
    );
  }

  const current = giltiga[stepIdx];
  const total = giltiga.length;
  const kalla = KALLA_META[current.kalla];

  const next = () => setStepIdx((i) => Math.min(i + 1, total - 1));
  const prev = () => setStepIdx((i) => Math.max(i - 1, 0));

  return (
    <div className="workshop-paper min-h-screen pb-20">
      {/* Sticky progress-bar */}
      <div className="sticky top-16 z-30 border-b border-stone-200 bg-workshop-canvas/95 backdrop-blur print:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-2">
              <ListMusic className="h-4 w-4 shrink-0 text-stone-700" />
              <span className="truncate text-sm font-semibold text-stone-900">
                {rubrik}
              </span>
              <span className="text-sm text-stone-500">
                · Steg {stepIdx + 1} av {total}
              </span>
              <span className="hidden text-sm text-stone-500 sm:inline">
                · {totalMinutes} min totalt
              </span>
            </div>
            <Link
              href={BASE}
              className="inline-flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tillbaka
            </Link>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {giltiga.map((o, i) => (
              <button
                key={`${o.id}-${i}`}
                onClick={() => setStepIdx(i)}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i === stepIdx
                    ? "bg-stone-900"
                    : i < stepIdx
                      ? "bg-stone-400"
                      : "bg-stone-200 hover:bg-stone-300"
                }`}
                title={`${i + 1}. ${o.titel}`}
                aria-label={`Hoppa till steg ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header för övningen */}
      <header className="container mx-auto px-4 pb-6 pt-8">
        <div className="max-w-4xl">
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            {current.domaner.map((d) => (
              <DomanBadge key={d} doman={d} />
            ))}
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${kalla.chip}`}
            >
              {kalla.label}
            </span>
          </div>

          <h1 className="font-display text-3xl leading-[0.95] text-stone-900 sm:text-4xl lg:text-5xl">
            {current.titel}
          </h1>

          <p className="mt-3 text-lg leading-relaxed text-stone-700">
            {current.blurb}
          </p>
        </div>
      </header>

      {/* Meta-rad */}
      <div className="container mx-auto px-4 pb-6">
        <div className="flex max-w-4xl flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/70 px-2.5 py-1">
            <Clock className="h-3.5 w-3.5" />
            {current.tid}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/70 px-2.5 py-1">
            <Users className="h-3.5 w-3.5" />
            {current.arskurser}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/70 px-2.5 py-1">
            {current.digitalaVerktyg ? (
              <Wifi className="h-3.5 w-3.5" />
            ) : (
              <WifiOff className="h-3.5 w-3.5" />
            )}
            {current.digitalaVerktyg ? "Digitalt" : "Analogt"}
          </span>
          <Link
            href={`${BASE}/${current.id}/presentation`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-stone-800"
          >
            <Monitor className="h-3.5 w-3.5" />
            Storskärm
          </Link>
        </div>
      </div>

      {/* Varning */}
      {current.varning && (
        <div className="container mx-auto px-4 pb-6">
          <div className="max-w-4xl rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <p className="text-sm leading-relaxed text-amber-900">
                {current.varning}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Huvudinnehåll med ModeTabs */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl">
          <ModeTabs
            workshopExperience={current.provaSjalv}
            teacherGuide={current.lararhandledning}
            studentInstructions={current.elevinstruktion}
            activityTitle={current.titel}
          />
        </div>
      </div>

      {/* Navigation footer */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="inline-flex items-center gap-2 rounded-full border-2 border-stone-300 bg-white px-4 py-2.5 font-semibold text-stone-800 transition-all hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Föregående
          </button>

          <div className="text-sm text-stone-600">
            {stepIdx + 1} / {total}
          </div>

          {stepIdx < total - 1 ? (
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Nästa övning
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              href={BASE}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" />
              Spellistan klar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
