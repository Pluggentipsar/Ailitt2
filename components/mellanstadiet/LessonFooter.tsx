import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  MELLANSTADIET_LESSONS,
  MellanstadietLesson,
} from "@/lib/mellanstadiet-data";

interface LessonFooterProps {
  lesson: MellanstadietLesson;
  cliffhanger?: string;
}

export function LessonFooter({ lesson, cliffhanger }: LessonFooterProps) {
  const idx = MELLANSTADIET_LESSONS.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? MELLANSTADIET_LESSONS[idx - 1] : null;
  const next =
    idx < MELLANSTADIET_LESSONS.length - 1
      ? MELLANSTADIET_LESSONS[idx + 1]
      : null;

  return (
    <section className="border-t border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {cliffhanger && (
          <div className="mb-12 text-center">
            <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">// TILL NÄSTA LEKTION</div>
            <p className="text-2xl font-medium leading-relaxed text-[var(--ms-text)]">
              {cliffhanger}
            </p>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={
                prev.status === "ready" ? `/mellanstadiet/${prev.slug}` : "#"
              }
              className={`group flex items-center justify-between gap-4 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5 transition-all ${
                prev.status === "ready"
                  ? "hover:border-[var(--ms-text)]/40"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <ArrowLeft className="h-5 w-5 flex-none text-[var(--ms-text-dim)] transition-colors group-hover:text-[var(--ms-text)]" />
              <div className="flex-1 text-right">
                <div className="ms-mono text-[var(--ms-text-muted)]">FÖRRA</div>
                <div className="font-semibold text-[var(--ms-text)]">
                  L{prev.number} · {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href="/mellanstadiet"
              className="group flex items-center justify-between gap-4 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5 transition-all hover:border-[var(--ms-text)]/40"
            >
              <ArrowLeft className="h-5 w-5 flex-none text-[var(--ms-text-dim)] transition-colors group-hover:text-[var(--ms-text)]" />
              <div className="flex-1 text-right">
                <div className="ms-mono text-[var(--ms-text-muted)]">TILLBAKA</div>
                <div className="font-semibold text-[var(--ms-text)]">Kursöversikt</div>
              </div>
            </Link>
          )}

          {next && (
            <Link
              href={
                next.status === "ready" ? `/mellanstadiet/${next.slug}` : "#"
              }
              className={`group flex items-center justify-between gap-4 rounded-lg border p-5 transition-all ${
                next.status === "ready"
                  ? "border-[var(--ms-border)] bg-[var(--ms-bg-card)] hover:border-[var(--ms-text)]/40"
                  : "cursor-not-allowed border-[var(--ms-border)] bg-[var(--ms-bg-card)] opacity-50"
              }`}
              style={
                next.status === "ready"
                  ? {
                      borderLeft: `4px solid ${next.accentHex}`,
                    }
                  : {}
              }
            >
              <div className="flex-1">
                <div className="ms-mono text-[var(--ms-text-muted)]">NÄSTA</div>
                <div className="font-semibold text-[var(--ms-text)]">
                  L{next.number} · {next.title}
                </div>
              </div>
              <ArrowRight
                className="h-5 w-5 flex-none text-[var(--ms-text-dim)] transition-all group-hover:translate-x-1 group-hover:text-[var(--ms-text)]"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
