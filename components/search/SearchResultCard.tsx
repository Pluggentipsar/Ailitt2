import Link from "next/link";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { ArrowRight, FileText } from "lucide-react";
import { extractSnippet, highlightText, cleanMdxText, countMatches } from "@/lib/search-utils";

interface SearchResultCardProps {
  title: string;
  description: string;
  searchableContent: string;
  url: string;
  moduleId: string;
  subject: string;
  course: string;
  aiLiteracyIds: number[];
  time?: string;
  groupSize?: string;
  searchQuery: string;
}

export function SearchResultCard({
  title,
  description,
  searchableContent,
  url,
  moduleId,
  subject,
  course,
  aiLiteracyIds,
  time,
  groupSize,
  searchQuery,
}: SearchResultCardProps) {
  // Om det finns en sökfråga, visa snippet med highlight
  // Annars visa beskrivning
  const hasSearch = searchQuery.trim().length > 0;

  // Rensa MDX-text för bättre snippets
  const cleanedContent = cleanMdxText(searchableContent);

  // Extrahera snippet om vi söker
  const snippet = hasSearch
    ? extractSnippet(cleanedContent, searchQuery, 80)
    : null;

  // Highlight title om det matchar
  const titleMatches = hasSearch ? highlightText(title, searchQuery) : null;

  // Räkna matchningar i hela dokumentet
  const matchCount = hasSearch ? countMatches(cleanedContent, searchQuery) : 0;

  return (
    <Link href={url} className="group block h-full">
      <div className="h-full rounded-xl border-2 border-gray-100 bg-white p-6 transition-all duration-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 relative backdrop-blur-sm">
        {/* Bookmark button */}
        <div className="absolute top-4 right-4">
          <BookmarkButton
            bookmark={{
              type: "module",
              moduleId,
              moduleTitle: title,
              moduleUrl: url,
              subject,
              course,
            }}
            size="sm"
          />
        </div>

        {/* Subject & Course */}
        <div className="mb-3 flex items-center gap-2 text-xs font-medium transition-colors duration-base pr-10">
          <span className="text-primary-600 group-hover:text-primary-700">{subject}</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-600 group-hover:text-gray-700">{course}</span>
          {hasSearch && matchCount > 0 && (
            <>
              <span className="text-gray-400">·</span>
              <span className="flex items-center gap-1 text-accent-600">
                <FileText className="h-3 w-3" />
                {matchCount} {matchCount === 1 ? 'matchning' : 'matchningar'}
              </span>
            </>
          )}
        </div>

        {/* Title with optional highlight */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
          {titleMatches ? (
            <span>
              {titleMatches.map((match, i) =>
                match.isHighlighted ? (
                  <mark key={i} className="bg-gradient-to-r from-primary-100 to-cyan-100 text-primary-900 px-0.5 rounded">
                    {match.text}
                  </mark>
                ) : (
                  <span key={i}>{match.text}</span>
                )
              )}
            </span>
          ) : (
            title
          )}
        </h3>

        {/* Description or Snippet */}
        {snippet ? (
          <div className="mb-4 text-base text-gray-600 line-clamp-3">
            {snippet.matches.map((match, i) =>
              match.isHighlighted ? (
                <mark key={i} className="bg-gradient-to-r from-primary-100 to-cyan-100 text-primary-900 px-0.5 rounded font-semibold">
                  {match.text}
                </mark>
              ) : (
                <span key={i}>{match.text}</span>
              )
            )}
          </div>
        ) : (
          <p className="mb-4 text-base text-gray-600 line-clamp-2">{description}</p>
        )}

        {/* Metadata badges */}
        {(time || groupSize) && (
          <div className="mb-4 flex flex-wrap gap-2">
            {time && <MetaBadge type="time" value={time} />}
            {groupSize && <MetaBadge type="group" value={groupSize} />}
          </div>
        )}

        {/* AI Literacy badges */}
        <AiLiteracyBadgeList ids={aiLiteracyIds} className="mb-4" />

        {/* Read more link */}
        <div className="flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
          Läs mer
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </div>

        {/* Gradient accent on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
      </div>
    </Link>
  );
}
