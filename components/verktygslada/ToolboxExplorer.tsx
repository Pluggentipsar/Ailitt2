"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import {
  Search,
  X,
  SlidersHorizontal,
  ExternalLink,
  UserCheck,
  Wifi,
  Coins,
  Globe,
} from "lucide-react";
import {
  tools,
  toolSearchString,
} from "@/lib/verktygslada/tools";
import {
  toolCategoryLabels,
  toolKindLabels,
  toolPriceLabels,
  toolLanguageLabels,
  type Tool,
  type ToolCategory,
  type ToolKind,
  type ToolPrice,
  type ToolLanguage,
} from "@/lib/verktygslada/types";

const PRICE_TONE: Record<ToolPrice, string> = {
  free: "bg-green-100 text-green-800",
  freemium: "bg-blue-100 text-blue-800",
  paid: "bg-amber-100 text-amber-800",
};

export function ToolboxExplorer() {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<ToolCategory>>(new Set());
  const [kinds, setKinds] = useState<Set<ToolKind>>(new Set());
  const [prices, setPrices] = useState<Set<ToolPrice>>(new Set());
  const [languages, setLanguages] = useState<Set<ToolLanguage>>(new Set());
  const [accountFilter, setAccountFilter] = useState<"all" | "no" | "yes">("all");
  const [showFilters, setShowFilters] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(
        tools.map((t) => ({ ...t, searchBlob: toolSearchString(t) })),
        {
          keys: [
            { name: "name", weight: 3 },
            { name: "description", weight: 1.5 },
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
    let list: Tool[] = tools;
    if (query.trim()) {
      list = fuse.search(query).map((r) => r.item as Tool);
    }
    if (categories.size > 0) list = list.filter((t) => categories.has(t.category));
    if (kinds.size > 0) list = list.filter((t) => kinds.has(t.kind));
    if (prices.size > 0) list = list.filter((t) => prices.has(t.price));
    if (languages.size > 0) list = list.filter((t) => languages.has(t.language));
    if (accountFilter === "no") list = list.filter((t) => !t.requiresAccount);
    if (accountFilter === "yes") list = list.filter((t) => t.requiresAccount);
    return list;
  }, [query, categories, kinds, prices, languages, accountFilter, fuse]);

  const grouped = useMemo(() => {
    const map = new Map<ToolCategory, Tool[]>();
    for (const t of filtered) {
      if (!map.has(t.category)) map.set(t.category, []);
      map.get(t.category)!.push(t);
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
    categories.size > 0 ||
    kinds.size > 0 ||
    prices.size > 0 ||
    languages.size > 0 ||
    accountFilter !== "all";

  const clearAll = () => {
    setQuery("");
    setCategories(new Set());
    setKinds(new Set());
    setPrices(new Set());
    setLanguages(new Set());
    setAccountFilter("all");
  };

  return (
    <div>
      {/* Sökfält */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök på namn, beskrivning, ”deepfake”, ”källkritik”…"
          className="w-full pl-12 pr-12 py-3.5 rounded-full bg-white border-2 border-gray-300 focus:border-primary-600 focus:outline-none text-base shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
            aria-label="Rensa sökning"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter-toggle */}
      <div className="mb-4 flex items-center justify-between gap-2 flex-wrap">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Fler filter
          {hasAnyFilter && (
            <span className="bg-primary-600 text-white rounded-full h-5 min-w-5 px-1 text-[10px] font-bold grid place-items-center">
              {categories.size +
                kinds.size +
                prices.size +
                languages.size +
                (accountFilter !== "all" ? 1 : 0)}
            </span>
          )}
        </button>
        {hasAnyFilter && (
          <button
            onClick={clearAll}
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2"
          >
            Rensa alla filter
          </button>
        )}
      </div>

      {showFilters && (
        <div className="mb-6 p-5 bg-white rounded-2xl border border-gray-200 space-y-4">
          <FilterGroup
            label="Kategori"
            values={Object.entries(toolCategoryLabels) as [ToolCategory, string][]}
            selected={categories}
            onToggle={(v) => toggle(categories, v, setCategories)}
          />
          <FilterGroup
            label="Typ"
            values={Object.entries(toolKindLabels) as [ToolKind, string][]}
            selected={kinds}
            onToggle={(v) => toggle(kinds, v, setKinds)}
          />
          <FilterGroup
            label="Kostnad"
            values={Object.entries(toolPriceLabels) as [ToolPrice, string][]}
            selected={prices}
            onToggle={(v) => toggle(prices, v, setPrices)}
          />
          <FilterGroup
            label="Språk"
            values={Object.entries(toolLanguageLabels) as [ToolLanguage, string][]}
            selected={languages}
            onToggle={(v) => toggle(languages, v, setLanguages)}
          />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
              Konto
            </div>
            <div className="flex flex-wrap gap-2">
              {(["all", "no", "yes"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setAccountFilter(v)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    accountFilter === v
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {v === "all"
                    ? "Alla"
                    : v === "no"
                      ? "Kräver inget konto"
                      : "Kräver konto"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="text-sm text-gray-600 mb-6">
        {filtered.length} {filtered.length === 1 ? "verktyg" : "verktyg"} matchar
      </div>

      {/* Resultat per kategori */}
      <div className="space-y-10">
        {(Object.keys(toolCategoryLabels) as ToolCategory[]).map((cat) => {
          const list = grouped.get(cat);
          if (!list || list.length === 0) return null;
          return (
            <section key={cat}>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 border-b-2 border-gray-200 pb-2">
                {toolCategoryLabels[cat]}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({list.length})
                </span>
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-lg mb-2">Inget hittades</p>
          <p>Pröva färre filter eller en annan sökterm.</p>
        </div>
      )}
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  values,
  selected,
  onToggle,
}: {
  label: string;
  values: [T, string][];
  selected: Set<T>;
  onToggle: (value: T) => void;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {values.map(([value, lbl]) => {
          const active = selected.has(value);
          return (
            <button
              key={value}
              onClick={() => onToggle(value)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                active
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
              }`}
            >
              {lbl}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 p-4 bg-white border border-gray-200 hover:border-gray-900 rounded-2xl transition-colors h-full"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-gray-900 leading-tight group-hover:underline decoration-2 underline-offset-2">
          {tool.name}
        </h3>
        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-900 shrink-0 mt-1" />
      </div>

      <p className="text-sm text-gray-700 leading-snug flex-1">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-1.5 text-[11px] mt-1">
        <span
          className={`px-2 py-0.5 rounded-full font-semibold ${PRICE_TONE[tool.price]}`}
        >
          <Coins className="h-3 w-3 inline mr-1" />
          {toolPriceLabels[tool.price]}
        </span>
        {tool.requiresAccount && (
          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
            <UserCheck className="h-3 w-3 inline mr-1" />
            Konto
          </span>
        )}
        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
          <Globe className="h-3 w-3 inline mr-1" />
          {toolLanguageLabels[tool.language]}
        </span>
      </div>

      {tool.notes && (
        <p className="text-xs text-gray-500 italic mt-1">{tool.notes}</p>
      )}

      {tool.linkedActivityIds && tool.linkedActivityIds.length > 0 && (
        <div className="text-xs text-gray-600 mt-1 pt-2 border-t border-gray-100">
          Används i:{" "}
          {tool.linkedActivityIds.map((id, i) => (
            <span key={id}>
              {i > 0 && ", "}
              <Link
                href={`/workshops/kallkritik-mellanstadiet/${id}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-primary-600 hover:underline"
              >
                aktivitet
              </Link>
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
