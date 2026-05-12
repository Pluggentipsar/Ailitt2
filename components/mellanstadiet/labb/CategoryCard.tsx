import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getExperimentsByCategory,
  type LabbCategoryMeta,
} from "@/lib/mellanstadiet-labb";

/* Stort kategori-kort på hub-sidan. Visar emoji, titel, beskrivning,
 * räknare över antal stationer (grund + avancerade) och en "öppna"-CTA.
 * Klickbar yta är hela kortet. */

export function CategoryCard({ category }: { category: LabbCategoryMeta }) {
  const all = getExperimentsByCategory(category.id);
  const basic = all.filter((e) => !e.isAdvanced);
  const advanced = all.filter((e) => e.isAdvanced);
  const isMeta = category.id === "meta";

  return (
    <Link
      href={`/mellanstadiet/labb/${category.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-[var(--ms-bg-card)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-7"
      style={{ borderColor: `${category.accentHex}40` }}
    >
      {/* Färgstreck */}
      <div
        className="absolute inset-x-0 top-0 h-1.5 transition-all group-hover:h-2"
        style={{ background: category.accentHex }}
        aria-hidden
      />

      {/* Stor emoji */}
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl transition-transform group-hover:scale-110"
        style={{ background: `${category.accentHex}20` }}
        aria-hidden
      >
        {category.emoji}
      </div>

      {/* Räknare */}
      <div className="ms-mono mb-2 flex flex-wrap items-center gap-2 text-[var(--ms-text-muted)]">
        <span>{all.length} STATIONER</span>
        {!isMeta && advanced.length > 0 && (
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{
              background: `${category.accentHex}20`,
              color: category.accentHex,
            }}
          >
            {basic.length} GRUND · {advanced.length} AVANCERADE
          </span>
        )}
        {isMeta && (
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold"
            style={{
              background: `${category.accentHex}20`,
              color: category.accentHex,
            }}
          >
            ENDAST AVANCERADE
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-[var(--ms-text)] sm:text-3xl">
        {category.label}
      </h3>
      <p className="mt-2 flex-1 text-[var(--ms-text-body)]">
        {category.description}
      </p>

      <div
        className="mt-5 inline-flex items-center justify-between gap-2 rounded-lg px-4 py-2.5 font-semibold transition-colors"
        style={{ background: `${category.accentHex}15`, color: category.accentHex }}
      >
        Öppna kategorin
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
