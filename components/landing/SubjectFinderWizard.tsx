"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Compass, RotateCcw, Info } from "lucide-react";
import {
  type Stage,
  type Need,
  stageLabels,
  needLabels,
  stageOrder,
  needOrder,
  findResults,
  findFallbackForStage,
} from "@/lib/landing/subject-finder-map";

export function SubjectFinderWizard() {
  const [stage, setStage] = useState<Stage | null>(null);
  const [need, setNeed] = useState<Need | null>(null);

  const results = useMemo(() => {
    if (!stage || !need) return null;
    const direct = findResults(stage, need);
    if (direct.length > 0) return { items: direct, kind: "direct" as const };
    const fallback = findFallbackForStage(stage);
    return { items: fallback, kind: "fallback" as const };
  }, [stage, need]);

  const reset = () => {
    setStage(null);
    setNeed(null);
  };

  return (
    <section
      id="hitta-ratt"
      className="bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 py-16 sm:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Rubrik */}
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 shadow-sm">
              <Compass className="h-3.5 w-3.5" />
              Hjälp mig hitta rätt
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Vad letar du efter?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Två steg — så pekar vi dig till det som finns för just din situation. Är luckan tom säger vi det också, så vet du var vi inte räcker till ännu.
            </p>
          </div>

          {/* Steg 1 — stadie */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-cyan-600 text-white text-xs font-bold">
                1
              </span>
              <GraduationCap className="h-4 w-4 text-cyan-700" />
              Jag undervisar i
            </div>
            <div className="flex flex-wrap gap-2">
              {stageOrder.map((s) => {
                const active = stage === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStage(active ? null : s)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/30 scale-105"
                        : "bg-white text-gray-800 border border-gray-300 hover:border-cyan-400 hover:bg-cyan-50/50"
                    }`}
                    aria-pressed={active}
                  >
                    {stageLabels[s]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Steg 2 — behov */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span
                className={`grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${
                  stage
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </span>
              <Compass className="h-4 w-4 text-cyan-700" />
              Jag letar efter
            </div>
            <div className="flex flex-wrap gap-2">
              {needOrder.map((n) => {
                const active = need === n;
                const disabled = !stage;
                return (
                  <button
                    key={n}
                    type="button"
                    disabled={disabled}
                    onClick={() => setNeed(active ? null : n)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? "bg-primary-600 text-white shadow-md shadow-primary-500/30 scale-105"
                        : disabled
                          ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                          : "bg-white text-gray-800 border border-gray-300 hover:border-primary-400 hover:bg-primary-50/50"
                    }`}
                    aria-pressed={active}
                  >
                    {needLabels[n]}
                  </button>
                );
              })}
            </div>
            {!stage && (
              <p className="mt-2 text-xs text-gray-500 italic">
                Välj först vilken stadie du undervisar i.
              </p>
            )}
          </div>

          {/* Resultatområde */}
          {results && (
            <div className="rounded-2xl bg-white border-2 border-cyan-200 shadow-lg overflow-hidden animate-fade-in-up">
              <div className="px-6 py-4 bg-gradient-to-r from-cyan-50 to-primary-50 border-b border-cyan-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">
                    {stage && stageLabels[stage]}
                  </span>
                  <span className="text-gray-400">·</span>
                  <span className="font-semibold text-gray-900">
                    {need && needLabels[need]}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Börja om
                </button>
              </div>

              {results.kind === "fallback" && (
                <div className="px-6 py-3 bg-amber-50 border-b border-amber-100 text-sm text-amber-900 flex gap-2 items-start">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    Vi har inget specifikt för den här kombinationen ännu — men dessa kan passa:
                  </span>
                </div>
              )}

              <ul className="divide-y divide-gray-100">
                {results.items.map((r, i) => (
                  <li key={r.href + i}>
                    <Link
                      href={r.href}
                      className="group flex items-start gap-4 px-6 py-4 hover:bg-cyan-50/40 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-gray-900 group-hover:text-cyan-700 transition-colors">
                            {r.title}
                          </h3>
                          {r.isApproximate && (
                            <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                              Närmaste alternativ
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {r.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-cyan-600 shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stötta utforskning även om man inte fyllt i */}
          {!results && (stage || need) === null && (
            <div className="text-center text-sm text-gray-500 italic">
              Eller scrolla ner och utforska fritt — sökmotorn nedan har alla moduler.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
