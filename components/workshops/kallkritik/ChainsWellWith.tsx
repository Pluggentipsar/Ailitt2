import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import {
  activitiesById,
  chaptersById,
  levelLabels,
} from "@/lib/workshops/kallkritik";

export function ChainsWellWith({ ids }: { ids: string[] }) {
  const activities = ids
    .map((id) => activitiesById[id])
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  if (activities.length === 0) return null;

  return (
    <section className="print-avoid-break">
      <div className="flex items-center gap-2 mb-3">
        <Link2 className="h-4 w-4 text-stone-700" />
        <h2 className="text-xs uppercase tracking-wider font-bold text-stone-700">
          Fortsätt med
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => {
          const chapter = chaptersById[a.chapter];
          return (
            <Link
              key={a.id}
              href={`/workshops/kallkritik-mellanstadiet/${a.id}`}
              className="group relative block bg-white/80 border border-stone-200 hover:border-stone-900 rounded-2xl p-4 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1 text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                  }}
                />
                Kap {chapter.number} · {levelLabels[a.level]}
              </div>
              <div className="font-display text-xl text-stone-900 leading-tight mb-1 group-hover:underline decoration-stone-900 decoration-2 underline-offset-2">
                {a.number} {a.title}
              </div>
              <p className="text-xs text-stone-600 leading-snug line-clamp-2">
                {a.blurb}
              </p>
              <ArrowRight className="absolute bottom-3 right-3 h-4 w-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-all" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
