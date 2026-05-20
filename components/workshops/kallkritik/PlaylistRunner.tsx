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
import {
  activitiesById,
  ageRangeLabels,
  levelLabels,
  chaptersById,
} from "@/lib/workshops/kallkritik";
import { ModeTabs } from "./ModeTabs";

const BASE = "/workshops/kallkritik-mellanstadiet";

export function PlaylistRunner() {
  const params = useSearchParams();
  const stepsParam = params.get("steps") ?? "";
  const allIds = stepsParam.split(",").filter(Boolean);
  const validActivities = allIds
    .map((id) => activitiesById[id])
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const [stepIdx, setStepIdx] = useState(0);

  const totalMinutes = useMemo(
    () => validActivities.reduce((sum, a) => sum + a.durationMinutes, 0),
    [validActivities]
  );

  if (validActivities.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ListMusic className="h-12 w-12 mx-auto text-stone-400 mb-4" />
        <h1 className="font-display text-4xl text-stone-900 mb-3">
          Ingen spellista att visa
        </h1>
        <p className="text-stone-600 max-w-md mx-auto mb-6">
          Bygg din spellista i sandlådan — välj aktiviteter med +-knappen och
          generera sedan en länk.
        </p>
        <Link
          href={BASE}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-workshop-canvas font-medium hover:bg-stone-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till sandlådan
        </Link>
      </div>
    );
  }

  const current = validActivities[stepIdx];
  const total = validActivities.length;
  const chapter = chaptersById[current.chapter];

  const next = () => setStepIdx((i) => Math.min(i + 1, total - 1));
  const prev = () => setStepIdx((i) => Math.max(i - 1, 0));

  return (
    <div data-chapter-tone={chapter.tone} className="pb-20">
      {/* Sticky progress-bar */}
      <div className="sticky top-16 z-30 bg-workshop-canvas/95 backdrop-blur border-b border-stone-200 print:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
            <div className="flex items-center gap-2 min-w-0">
              <ListMusic className="h-4 w-4 text-stone-700 shrink-0" />
              <span className="text-sm font-semibold text-stone-900">
                Spellista
              </span>
              <span className="text-sm text-stone-500">
                · Steg {stepIdx + 1} av {total}
              </span>
              <span className="text-sm text-stone-500 hidden sm:inline">
                · {totalMinutes} min totalt
              </span>
            </div>
            <Link
              href={BASE}
              className="text-sm text-stone-600 hover:text-stone-900 inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tillbaka
            </Link>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {validActivities.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setStepIdx(i)}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i === stepIdx
                    ? "bg-stone-900"
                    : i < stepIdx
                      ? "bg-stone-400"
                      : "bg-stone-200 hover:bg-stone-300"
                }`}
                title={`${i + 1}. ${a.title}`}
                aria-label={`Hoppa till steg ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header för aktiviteten */}
      <header className="container mx-auto px-4 pt-8 pb-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider">
            <span
              className="px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                color: "white",
              }}
            >
              Kapitel {chapter.number} · {chapter.title}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-stone-900 text-workshop-canvas font-semibold">
              {levelLabels[current.level]}
            </span>
          </div>

          <div className="flex items-baseline gap-4 mb-3 flex-wrap">
            <span className="font-display text-5xl text-stone-400/70 leading-none">
              {current.number}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-[0.95]">
              {current.title}
            </h1>
          </div>

          <p className="text-lg text-stone-700 leading-relaxed">
            {current.blurb}
          </p>
        </div>
      </header>

      {/* Meta-rad */}
      <div className="container mx-auto px-4 pb-6">
        <div className="max-w-4xl flex flex-wrap gap-2 items-center text-sm">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 border border-stone-200">
            <Clock className="h-3.5 w-3.5" />
            {current.duration}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 border border-stone-200">
            <Users className="h-3.5 w-3.5" />
            {current.ageRanges.map((a) => ageRangeLabels[a]).join(", ")}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 border border-stone-200">
            {current.digitalTools ? (
              <Wifi className="h-3.5 w-3.5" />
            ) : (
              <WifiOff className="h-3.5 w-3.5" />
            )}
            {current.digitalTools ? "Digitalt" : "Analogt"}
          </span>
          <Link
            href={`${BASE}/${current.id}/presentation`}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold hover:bg-stone-800"
          >
            <Monitor className="h-3.5 w-3.5" />
            Storskärm
          </Link>
        </div>
      </div>

      {/* Warning */}
      {current.warning && (
        <div className="container mx-auto px-4 pb-6">
          <div className="max-w-4xl bg-workshop-terrakotta text-white rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{current.warning}</p>
            </div>
          </div>
        </div>
      )}

      {/* Huvudinnehåll med ModeTabs */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl">
          <ModeTabs
            workshopExperience={current.workshopExperience}
            teacherGuide={current.teacherGuide}
            studentInstructions={current.studentInstructions}
            activityTitle={`${current.number} ${current.title}`}
          />
        </div>
      </div>

      {/* Navigation footer */}
      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border-2 border-stone-300 text-stone-800 font-semibold hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-workshop-canvas font-semibold hover:bg-stone-800 transition-colors"
            >
              Nästa aktivitet
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              href={BASE}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-workshop-skog text-white font-semibold hover:opacity-90 transition-opacity"
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
