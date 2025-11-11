import Link from "next/link";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { ArrowRight, FileText } from "lucide-react";
import { extractSnippet, highlightText, cleanMdxText, countMatches } from "@/lib/search-utils";
import { getCourseBranding } from "@/lib/course-branding";
import { cn } from "@/lib/utils";

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

  const branding = getCourseBranding(course);
  const hasBranding = Boolean(branding);

  const subjectCourseRow = (
    <div
      className={cn(
        "mb-3 flex items-center gap-2 text-xs font-medium transition-colors duration-base pr-10",
        hasBranding ? "text-white/90" : "text-gray-600"
      )}
    >
      <span className={cn(hasBranding ? "text-white/90" : "text-primary-600 group-hover:text-primary-700")}>
        {subject}
      </span>
      <span className={cn(hasBranding ? "text-white/60" : "text-gray-400")}>·</span>
      <span className={cn(hasBranding ? "text-white/90" : "text-gray-600 group-hover:text-gray-700")}>
        {course}
      </span>
      {hasSearch && matchCount > 0 && (
        <>
          <span className={cn(hasBranding ? "text-white/60" : "text-gray-400")}>·</span>
          <span
            className={cn(
              "flex items-center gap-1",
              hasBranding ? "text-emerald-100" : "text-accent-600"
            )}
          >
            <FileText className="h-3 w-3" />
            {matchCount} {matchCount === 1 ? "matchning" : "matchningar"}
          </span>
        </>
      )}
    </div>
  );

  const contentBody = (
    <>
      {/* Subject & Course */}
      {!hasBranding && subjectCourseRow}

      {/* Title with optional highlight */}
      <h3
        className={cn(
          "mb-2 text-xl font-bold transition-colors",
          hasBranding ? "text-gray-900" : "text-gray-900 group-hover:text-primary-600"
        )}
      >
        {titleMatches ? (
          <span>
            {titleMatches.map((match, i) =>
              match.isHighlighted ? (
                <mark
                  key={i}
                  className="bg-gradient-to-r from-primary-100 to-cyan-100 text-primary-900 px-0.5 rounded"
                >
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
              <mark
                key={i}
                className="bg-gradient-to-r from-primary-100 to-cyan-100 text-primary-900 px-0.5 rounded font-semibold"
              >
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
    </>
  );

  return (
    <Link href={url} className="group block h-full">
      <div
        className={cn(
          "relative h-full rounded-xl border-2 border-gray-100 bg-white p-6 transition-all duration-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 backdrop-blur-sm",
          hasBranding && "rounded-3xl border-transparent p-0 overflow-hidden shadow-lg hover:shadow-2xl"
        )}
      >
        {hasBranding && branding ? (
          <>
            <div className="relative h-40">
              {branding.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${branding.image})` }}
                />
              )}
              <div
                className="absolute inset-0 opacity-95"
                style={{ backgroundImage: branding.gradient }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-6 text-white">
                {subjectCourseRow}
                <h3 className="text-xl font-semibold leading-tight text-white drop-shadow">
                  {title}
                </h3>
              </div>
            </div>
            <div className="relative flex h-full flex-col p-6">
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
              <div className="pt-6">{contentBody}</div>
            </div>
          </>
        ) : (
          <>
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
            {contentBody}
          </>
        )}

        {!hasBranding && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
        )}
      </div>
    </Link>
  );
}
