"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, X, SlidersHorizontal } from "lucide-react";
import {
  activities,
  chapters,
  searchableString,
  type ActivityLevel,
  type AgeRange,
  type ChapterId,
  ageRangeLabels,
  levelLabels,
} from "@/lib/workshops/kallkritik";
import { ActivityCard } from "./ActivityCard";

type DurationBucket = "snabb" | "medel" | "lang";
const durationLabels: Record<DurationBucket, string> = {
  snabb: "≤ 20 min",
  medel: "20–45 min",
  lang: "> 45 min",
};

function durationBucket(minutes: number): DurationBucket {
  if (minutes <= 20) return "snabb";
  if (minutes <= 45) return "medel";
  return "lang";
}

export function HubExplorer() {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState<ChapterId | "all">("all");
  const [levels, setLevels] = useState<Set<ActivityLevel>>(new Set());
  const [ages, setAges] = useState<Set<AgeRange>>(new Set());
  const [durations, setDurations] = useState<Set<DurationBucket>>(new Set());
  const [digitalOnly, setDigitalOnly] = useState<"all" | "yes" | "no">("all");
  const [showFilters, setShowFilters] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(
        activities.map((a) => ({
          ...a,
          searchBlob: searchableString(a),
          trainsBlob: a.trains.join(" "),
        })),
        {
          keys: [
            { name: "title", weight: 3 },
            { name: "blurb", weight: 2 },
            { name: "purpose", weight: 1.5 },
            { name: "trainsBlob", weight: 1 },
            { name: "searchBlob", weight: 0.5 },
          ],
          threshold: 0.4,
          ignoreLocation: true,
          minMatchCharLength: 2,
        }
      ),
    []
  );

  const filtered = useMemo(() => {
    let list = activities;

    if (query.trim()) {
      list = fuse.search(query).map((r) => r.item);
    }
    if (chapter !== "all") {
      list = list.filter((a) => a.chapter === chapter);
    }
    if (levels.size > 0) {
      list = list.filter((a) => levels.has(a.level));
    }
    if (ages.size > 0) {
      list = list.filter((a) =>
        a.ageRanges.some((r) => ages.has(r))
      );
    }
    if (durations.size > 0) {
      list = list.filter((a) =>
        durations.has(durationBucket(a.durationMinutes))
      );
    }
    if (digitalOnly === "yes") {
      list = list.filter((a) => a.digitalTools);
    } else if (digitalOnly === "no") {
      list = list.filter((a) => !a.digitalTools);
    }

    return list;
  }, [query, chapter, levels, ages, durations, digitalOnly, fuse]);

  const grouped = useMemo(() => {
    const map = new Map<ChapterId, typeof filtered>();
    for (const c of chapters) map.set(c.id, []);
    for (const a of filtered) {
      const arr = map.get(a.chapter);
      if (arr) arr.push(a);
    }
    return map;
  }, [filtered]);

  const toggle = <T,>(set: Set<T>, value: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const hasAnyFilter =
    levels.size > 0 ||
    ages.size > 0 ||
    durations.size > 0 ||
    digitalOnly !== "all" ||
    chapter !== "all";

  const clearAll = () => {
    setQuery("");
    setChapter("all");
    setLevels(new Set());
    setAges(new Set());
    setDurations(new Set());
    setDigitalOnly("all");
  };

  return (
    <div>
      {/* Sökfält */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök på titel, syfte, förmåga, ”sykofant”, ”deepfake”…"
          className="w-full pl-12 pr-12 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-stone-300 focus:border-stone-900 focus:outline-none text-base"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900"
            aria-label="Rensa sökning"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Kapitel-rad */}
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={() => setChapter("all")}
          className={`filter-pill ${chapter === "all" ? "filter-pill--active" : ""}`}
        >
          Alla kapitel
        </button>
        {chapters.map((c) => (
          <button
            key={c.id}
            onClick={() => setChapter(c.id === chapter ? "all" : c.id)}
            className={`filter-pill ${chapter === c.id ? "filter-pill--active" : ""}`}
            data-chapter-tone={c.tone}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background:
                  chapter === c.id ? "currentColor" : `var(--workshop-${c.tone === "havsblå" ? "havsblå" : c.tone})`,
              }}
            />
            {c.number}. {c.title}
          </button>
        ))}
      </div>

      {/* Filter-toggle */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="filter-pill"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Fler filter{" "}
          {(levels.size > 0 || ages.size > 0 || durations.size > 0 || digitalOnly !== "all") && (
            <span className="bg-stone-900 text-workshop-canvas rounded-full h-4 min-w-4 px-1 text-[10px] grid place-items-center">
              {levels.size +
                ages.size +
                durations.size +
                (digitalOnly !== "all" ? 1 : 0)}
            </span>
          )}
        </button>
        {hasAnyFilter && (
          <button
            onClick={clearAll}
            className="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2"
          >
            Rensa alla filter
          </button>
        )}
      </div>

      {showFilters && (
        <div className="mb-6 p-5 bg-white/60 rounded-2xl border border-stone-200 space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
              Nivå
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  "workshop-byggsten",
                  "startovning",
                  "fordjupande",
                  "prova-pa",
                ] as ActivityLevel[]
              ).map((l) => (
                <button
                  key={l}
                  onClick={() => toggle(levels, l, setLevels)}
                  className={`filter-pill ${levels.has(l) ? "filter-pill--active" : ""}`}
                >
                  {levelLabels[l]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
              Målgrupp
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                ["vuxen-workshop", "ak4-6", "ak7-9", "gymnasium"] as AgeRange[]
              ).map((a) => (
                <button
                  key={a}
                  onClick={() => toggle(ages, a, setAges)}
                  className={`filter-pill ${ages.has(a) ? "filter-pill--active" : ""}`}
                >
                  {ageRangeLabels[a]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
              Tidsåtgång
            </div>
            <div className="flex flex-wrap gap-2">
              {(["snabb", "medel", "lang"] as DurationBucket[]).map((d) => (
                <button
                  key={d}
                  onClick={() => toggle(durations, d, setDurations)}
                  className={`filter-pill ${durations.has(d) ? "filter-pill--active" : ""}`}
                >
                  {durationLabels[d]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">
              Digitala verktyg
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setDigitalOnly("all")}
                className={`filter-pill ${digitalOnly === "all" ? "filter-pill--active" : ""}`}
              >
                Alla
              </button>
              <button
                onClick={() => setDigitalOnly("yes")}
                className={`filter-pill ${digitalOnly === "yes" ? "filter-pill--active" : ""}`}
              >
                Kräver digitala verktyg
              </button>
              <button
                onClick={() => setDigitalOnly("no")}
                className={`filter-pill ${digitalOnly === "no" ? "filter-pill--active" : ""}`}
              >
                Helt analoga
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-sm text-stone-600 mb-6">
        {filtered.length}{" "}
        {filtered.length === 1 ? "aktivitet" : "aktiviteter"} matchar
      </div>

      {/* Kapitel-sektioner */}
      <div className="space-y-12">
        {chapters.map((c) => {
          const list = grouped.get(c.id) ?? [];
          if (list.length === 0) return null;
          return (
            <section
              key={c.id}
              data-chapter-tone={c.tone}
              className="print-avoid-break"
            >
              <div className="flex items-end gap-4 mb-5 border-b-2 border-dashed pb-3"
                style={{ borderColor: `var(--workshop-${c.tone === "havsblå" ? "havsblå" : c.tone})` }}
              >
                <span
                  className="font-display text-6xl leading-none"
                  style={{ color: `var(--workshop-${c.tone === "havsblå" ? "havsblå" : c.tone})` }}
                >
                  {c.number}
                </span>
                <div className="flex-1 pb-1">
                  <h2 className="font-display text-3xl text-stone-900 leading-none">
                    {c.title}
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">{c.subtitle}</p>
                </div>
                <span className="text-xs text-stone-500 hidden sm:block">
                  {list.length}{" "}
                  {list.length === 1 ? "aktivitet" : "aktiviteter"}
                </span>
              </div>
              <p className="text-stone-700 mb-5 max-w-3xl">{c.description}</p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <ActivityCard key={a.id} activity={a} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-stone-600">
          <p className="font-display text-3xl mb-2">Inget hittades</p>
          <p>Pröva färre filter eller en annan sökterm.</p>
        </div>
      )}
    </div>
  );
}
