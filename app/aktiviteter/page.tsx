"use client";

import {
  type Dispatch,
  type SetStateAction,
  useMemo,
  useState,
} from "react";
import { Filter, RefreshCcw, Search } from "lucide-react";
import {
  activities,
  centralContentFilters,
  subjectAreaFilters,
} from "@/data/activities";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import {
  aiLiteracyConfig,
  type AiLiteracyAspect,
} from "@/lib/aiLiteracyConfig";
import { cn } from "@/lib/utils";

const levelFilters = ["Svenska 1", "Svenska 2"] as const;

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedAiIds, setSelectedAiIds] = useState<number[]>([]);
  const [selectedCentralContent, setSelectedCentralContent] = useState<string[]>(
    []
  );

  const aiAspectMap = useMemo(() => {
    const map = new Map<number, AiLiteracyAspect>();
    aiLiteracyConfig.forEach((aspect) => map.set(aspect.id, aspect));
    return map;
  }, []);

  const toggleString = (
    value: string,
    setter: Dispatch<SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleNumber = (
    value: number,
    setter: Dispatch<SetStateAction<number[]>>
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLevels([]);
    setSelectedSubjects([]);
    setSelectedAiIds([]);
    setSelectedCentralContent([]);
  };

  const filteredActivities = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return activities
      .filter((activity) => {
        if (
          selectedLevels.length > 0 &&
          !selectedLevels.includes(activity.level)
        ) {
          return false;
        }

        if (
          selectedSubjects.length > 0 &&
          !selectedSubjects.some((subject) => activity.strands.includes(subject))
        ) {
          return false;
        }

        if (
          selectedAiIds.length > 0 &&
          !selectedAiIds.every((id) => activity.aiLiteracyIds.includes(id))
        ) {
          return false;
        }

        if (
          selectedCentralContent.length > 0 &&
          !selectedCentralContent.every((content) =>
            activity.centralContent.includes(content)
          )
        ) {
          return false;
        }

        if (normalizedQuery.length > 0) {
          const haystack = [
            activity.title,
            activity.summary,
            activity.type,
            ...activity.strands,
            ...activity.centralContent,
          ]
            .join(" ")
            .toLowerCase();

          if (!haystack.includes(normalizedQuery)) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (a.level === b.level) {
          return a.title.localeCompare(b.title);
        }
        return a.level === "Svenska 2" ? -1 : 1;
      });
  }, [
    searchQuery,
    selectedLevels,
    selectedSubjects,
    selectedAiIds,
    selectedCentralContent,
  ]);

  const filterSections = (
    <div className="space-y-6">
      <FilterSection title="Kurs">
        <div className="flex flex-wrap gap-2">
          {levelFilters.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => toggleString(label, setSelectedLevels)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                selectedLevels.includes(label)
                  ? "border-primary-600 bg-primary-50 text-primary-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="AI-litteracitet">
        <div className="flex flex-wrap gap-2">
          {aiLiteracyConfig.map((aspect) => (
            <button
              key={aspect.id}
              type="button"
              onClick={() => toggleNumber(aspect.id, setSelectedAiIds)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                selectedAiIds.includes(aspect.id)
                  ? "border-primary-600 bg-primary-50 text-primary-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              )}
            >
              {aspect.name}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Ämnesdel">
        <div className="flex flex-wrap gap-2">
          {subjectAreaFilters.map((strand) => (
            <button
              key={strand}
              type="button"
              onClick={() => toggleString(strand, setSelectedSubjects)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                selectedSubjects.includes(strand)
                  ? "border-primary-600 bg-primary-50 text-primary-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              )}
            >
              {strand}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Centralt innehall">
        <div className="flex flex-wrap gap-2">
          {centralContentFilters.map((entry) => (
            <button
              key={entry}
              type="button"
              onClick={() => toggleString(entry, setSelectedCentralContent)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
                selectedCentralContent.includes(entry)
                  ? "border-primary-600 bg-primary-50 text-primary-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              )}
            >
              {entry}
            </button>
          ))}
        </div>
      </FilterSection>

      <button
        type="button"
        onClick={resetFilters}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300"
      >
        <RefreshCcw className="h-4 w-4" />
        Nollstall filter
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-32 pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-sky-800/70" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="container relative mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Aktiviteter
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Filtrerbar aktivitetsbank för Svenska 1 och 2
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Hitta uppgifter som matchar AI-litteracitet, centralt innehåll och de
              ämnesdelar du arbetar med just nu. Varje aktivitet innehåller syfte,
              instruktioner och föreslagna AI-stod.
            </p>
          </div>

          <div className="mt-8 grid gap-6 text-sm text-white/80 sm:grid-cols-3">
            <HeroStat
              label="Aktiviteter"
              value={activities.length.toString()}
              detail="Tal,PM, skrivuppgifter och undersökningar"
            />
            <HeroStat
              label="AI-litteracitets-spann"
              value="0-6"
              detail="Alla dimensioner i ramverket"
            />
            <HeroStat
              label="Amnesdelar"
              value={subjectAreaFilters.length.toString()}
              detail="Muntligt, skrivande, språk, litteratur, källkritik, kreativitet"
            />
          </div>
        </div>
      </section>

      <div className="container relative z-10 mx-auto -mt-16 px-4 pb-24">
        <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
          <div className="space-y-6">
            <details className="rounded-2xl border border-white/40 bg-white/95 p-4 shadow-lg lg:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                <span>Filter</span>
                <Filter className="h-4 w-4 text-gray-500" />
              </summary>
              <div className="mt-4">{filterSections}</div>
            </details>
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border border-white/40 bg-white/95 p-6 shadow-xl">
                {filterSections}
              </div>
            </aside>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/40 bg-white/95 p-6 shadow-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-600">
                    Sök aktiviteter
                  </p>
                  <p className="text-gray-600">
                    Resultat: {filteredActivities.length} av {activities.length}
                  </p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Sök pa titel eller innehall"
                    className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>
            </div>

            {filteredActivities.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white/80 p-10 text-center text-gray-600">
                Inga aktiviteter matchar filtren just nu. Justera valen eller
                nollstall filtren for att borja om.
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredActivities.map((activity) => (
                  <article
                    key={activity.id}
                    className="rounded-3xl border border-white/40 bg-white/95 p-6 shadow-lg shadow-gray-200/60 transition hover:-translate-y-1 hover:shadow-2xl"
                  >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  {activity.level} • {activity.type}
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  {activity.strands.join(" · ")}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                {activity.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {activity.centralContent.map((entry) => (
                  <span
                    key={entry}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {entry}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <AiLiteracyBadgeList ids={activity.aiLiteracyIds} />
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Syfte med uppgiften
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                    {activity.objectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Uppgiftsbeskrivning
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">{activity.summary}</p>
                  <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700 space-y-1">
                    {activity.instructions.map((instruction) => (
                      <li key={instruction}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Frågeställning att utgå från
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    {activity.guidingQuestion
                      ? activity.guidingQuestion
                      : `Hur kan vi arbeta med "${activity.title}" i klassrummet?`}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Vad tränas i AI-litteracitet?
                  </p>
                  <div className="mt-3 space-y-3">
                    {activity.aiLiteracyIds.map((id) => {
                      const aspect = aiAspectMap.get(id);
                      if (!aspect) return null;
                      return (
                        <div key={`${activity.id}-ai-${aspect.id}`}>
                          <p className="text-sm font-semibold text-gray-900">
                            {aspect.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {aspect.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {activity.aiSupport && (
                <div className="mt-4 rounded-2xl border border-primary-100 bg-primary-50/60 p-4 text-sm text-primary-800">
                  <p className="font-semibold uppercase tracking-wide text-primary-700">
                    AI-stod
                  </p>
                  <p>{activity.aiSupport}</p>
                </div>
              )}

              {activity.sources && activity.sources.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Kallor
                  </p>
                  <ul className="mt-1 list-disc pl-5 text-sm text-gray-600">
                    {activity.sources.map((source) => (
                      <li key={source}>{source}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 rounded-2xl border border-gray-100 bg-white/90 p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
        {title}
      </h3>
      {children}
    </section>
  );
}

function HeroStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
        {label}
      </p>
      <p className="mt-1 text-sm text-white/80">{detail}</p>
    </div>
  );
}
