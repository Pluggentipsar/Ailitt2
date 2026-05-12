import Link from "next/link";
import { ArrowLeft, ArrowRight, FlaskConical, Home } from "lucide-react";
import {
  LABB_CATEGORIES,
  type LabbCategoryMeta,
} from "@/lib/mellanstadiet-labb";

/* Föregående/Nästa-kategori-länkar längst ner på en kategori-sida.
 * Plus "Tillbaka till hub". Hjälper eleven flöda mellan kategorier
 * utan att gå via hub varje gång. */

export function CategoryFooterNav({
  current,
}: {
  current: LabbCategoryMeta;
}) {
  const idx = LABB_CATEGORIES.findIndex((c) => c.id === current.id);
  const prev = idx > 0 ? LABB_CATEGORIES[idx - 1] : null;
  const next =
    idx < LABB_CATEGORIES.length - 1 ? LABB_CATEGORIES[idx + 1] : null;

  return (
    <section className="border-t border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/mellanstadiet/labb/${prev.id}`}
              className="group flex items-center gap-4 rounded-xl border-2 bg-[var(--ms-bg-card)] p-5 transition-all hover:-translate-y-0.5"
              style={{ borderColor: `${prev.accentHex}40` }}
            >
              <ArrowLeft
                className="h-5 w-5 flex-none transition-transform group-hover:-translate-x-1"
                style={{ color: prev.accentHex }}
              />
              <div className="min-w-0 flex-1">
                <div className="ms-mono text-[var(--ms-text-muted)]">
                  FÖREGÅENDE
                </div>
                <div className="truncate text-lg font-bold text-[var(--ms-text)]">
                  {prev.emoji} {prev.label}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/mellanstadiet/labb/${next.id}`}
              className="group flex items-center gap-4 rounded-xl border-2 bg-[var(--ms-bg-card)] p-5 text-right transition-all hover:-translate-y-0.5"
              style={{ borderColor: `${next.accentHex}40` }}
            >
              <div className="min-w-0 flex-1">
                <div className="ms-mono text-[var(--ms-text-muted)]">
                  NÄSTA
                </div>
                <div className="truncate text-lg font-bold text-[var(--ms-text)]">
                  {next.emoji} {next.label}
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 flex-none transition-transform group-hover:translate-x-1"
                style={{ color: next.accentHex }}
              />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href="/mellanstadiet/labb"
            className="ms-btn ms-btn-secondary"
          >
            <FlaskConical className="h-4 w-4" />
            Alla kategorier
          </Link>
          <Link
            href="/mellanstadiet"
            className="ms-btn ms-btn-secondary"
          >
            <Home className="h-4 w-4" />
            Mellanstadiet
          </Link>
        </div>
      </div>
    </section>
  );
}
