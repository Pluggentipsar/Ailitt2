"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  type UnifiedItem,
  type UnifiedItemType,
  itemTypeLabels,
} from "@/lib/search/unified-index";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { extractSnippet, highlightText } from "@/lib/search-utils";
import { cn } from "@/lib/utils";

// Färgkodning per item-typ — visuellt en chip ovanför titeln.
// Ljus bakgrund + mörk text för att hålla det lugnt i en lista.
const TYPE_STYLES: Record<
  UnifiedItemType,
  { chip: string; ring: string }
> = {
  modul: {
    chip: "bg-primary-100 text-primary-800 border-primary-200",
    ring: "hover:border-primary-300",
  },
  "workshop-aktivitet": {
    chip: "bg-rose-100 text-rose-800 border-rose-200",
    ring: "hover:border-rose-300",
  },
  verktyg: {
    chip: "bg-slate-100 text-slate-800 border-slate-200",
    ring: "hover:border-slate-300",
  },
  aktivitet: {
    chip: "bg-cyan-100 text-cyan-800 border-cyan-200",
    ring: "hover:border-cyan-300",
  },
  "mellanstadiet-lektion": {
    chip: "bg-amber-100 text-amber-800 border-amber-200",
    ring: "hover:border-amber-300",
  },
  "mellanstadiet-labb": {
    chip: "bg-emerald-100 text-emerald-800 border-emerald-200",
    ring: "hover:border-emerald-300",
  },
  "mellanstadiet-spel": {
    chip: "bg-yellow-100 text-yellow-800 border-yellow-200",
    ring: "hover:border-yellow-300",
  },
  "grundskola-del": {
    chip: "bg-blue-100 text-blue-800 border-blue-200",
    ring: "hover:border-blue-300",
  },
  "ramverk-aspekt": {
    chip: "bg-purple-100 text-purple-800 border-purple-200",
    ring: "hover:border-purple-300",
  },
  "didaktisk-modell": {
    chip: "bg-indigo-100 text-indigo-800 border-indigo-200",
    ring: "hover:border-indigo-300",
  },
};

// Plockar fragment ur den långa content-strängen som matchar sökningen, så
// användaren får se VAR matchningen ligger. Returnerar { snippet, hasMatch }.
function buildSnippet(content: string, query: string) {
  if (!query.trim() || !content) return null;
  const snip = extractSnippet(content, query, 60);
  if (!snip.matches.some((m) => m.isHighlighted)) return null;
  return snip;
}

export function UnifiedResultCard({
  item,
  query,
}: {
  item: UnifiedItem;
  query: string;
}) {
  const style = TYPE_STYLES[item.type];
  const hasQuery = query.trim().length > 0;

  // Visa snippet bara om matchningen ligger i `content` och INTE i titel/desc
  // — då räcker det att highlighta titeln/beskrivningen.
  const titleHasMatch =
    hasQuery && item.title.toLowerCase().includes(query.toLowerCase());
  const descHasMatch =
    hasQuery && item.description.toLowerCase().includes(query.toLowerCase());
  const showSnippet =
    hasQuery && !titleHasMatch && !descHasMatch
      ? buildSnippet(item.content, query)
      : null;

  const titleMatches = hasQuery ? highlightText(item.title, query) : null;
  const descMatches = hasQuery
    ? highlightText(item.description, query)
    : null;

  return (
    <Link
      href={item.url}
      className={cn(
        "group block rounded-2xl bg-white border border-gray-200 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        style.ring
      )}
    >
      {/* Type-badge + context */}
      <div className="flex items-center gap-2 mb-3 flex-wrap text-xs">
        <span
          className={cn(
            "px-2 py-0.5 rounded-full font-semibold border",
            style.chip
          )}
        >
          {itemTypeLabels[item.type]}
        </span>
        {item.context && (
          <span className="text-gray-500 truncate">{item.context}</span>
        )}
      </div>

      {/* Titel */}
      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-primary-700 transition-colors">
        {titleMatches ? (
          <HighlightedText matches={titleMatches} />
        ) : (
          item.title
        )}
      </h3>

      {/* Beskrivning eller snippet */}
      {showSnippet ? (
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <HighlightedText matches={showSnippet.matches} />
        </p>
      ) : (
        <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {descMatches ? (
            <HighlightedText matches={descMatches} />
          ) : (
            item.description
          )}
        </p>
      )}

      {/* AI-litteracitetsaspekter — om det finns mapping */}
      {item.aiLiteracyIds && item.aiLiteracyIds.length > 0 && (
        <AiLiteracyBadgeList ids={item.aiLiteracyIds} className="mb-3" />
      )}

      {/* Footer — diskret pil */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-700 group-hover:gap-2.5 transition-all">
        Öppna
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

function HighlightedText({
  matches,
}: {
  matches: { text: string; isHighlighted: boolean }[];
}) {
  return (
    <>
      {matches.map((m, i) =>
        m.isHighlighted ? (
          <mark
            key={i}
            className="bg-amber-200 text-amber-900 rounded px-0.5 py-px"
          >
            {m.text}
          </mark>
        ) : (
          <span key={i}>{m.text}</span>
        )
      )}
    </>
  );
}
