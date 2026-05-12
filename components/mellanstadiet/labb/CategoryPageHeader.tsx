import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import type { LabbCategoryMeta } from "@/lib/mellanstadiet-labb";

/* Hero för en kategori-sida. Visar färg, emoji, titel, beskrivning
 * och en slim Skolup-påminnelse. Mindre prålig än hub-heron eftersom
 * eleven redan är "inne" i labbet. */

interface CategoryPageHeaderProps {
  category: LabbCategoryMeta;
  basicCount: number;
  advancedCount: number;
}

export function CategoryPageHeader({
  category,
  basicCount,
  advancedCount,
}: CategoryPageHeaderProps) {
  const total = basicCount + advancedCount;
  return (
    <section
      className="border-b px-4 pt-10 pb-10"
      style={{
        borderColor: `${category.accentHex}30`,
        background: `linear-gradient(135deg, ${category.accentHex}12, ${category.accentHex}02)`,
      }}
    >
      <div className="mx-auto max-w-5xl">
        <Link
          href="/mellanstadiet/labb"
          className="ms-mono inline-flex items-center gap-1.5 text-[var(--ms-text-muted)] transition-colors hover:text-[var(--ms-text)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <FlaskConical className="h-3.5 w-3.5" />
          ALLA KATEGORIER
        </Link>

        <div className="mt-6 flex items-start gap-5">
          <div
            className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl text-5xl shadow-sm"
            style={{
              background: `${category.accentHex}25`,
              border: `2px solid ${category.accentHex}`,
            }}
            aria-hidden
          >
            {category.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
              KATEGORI · {total} STATIONER
              {advancedCount > 0 && category.id !== "meta" && (
                <span className="ml-2">
                  · {basicCount} GRUNDLÄGGANDE + {advancedCount} AVANCERADE
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--ms-text)] sm:text-5xl">
              {category.label}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[var(--ms-text-body)]">
              {category.description}
            </p>
          </div>
        </div>

        <div className="ms-mono mt-6 flex flex-wrap items-center gap-2 text-[var(--ms-text-muted)]">
          KÖR PROMPTERNA I → <strong className="text-[var(--ms-text)]">SKOLUP AI</strong>
          <span className="text-[var(--ms-text-dim)]">eller ChatGPT/Claude/Snap My AI</span>
        </div>
      </div>
    </section>
  );
}
