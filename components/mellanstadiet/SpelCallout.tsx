import Link from "next/link";
import { Gamepad2, ArrowRight } from "lucide-react";
import { MELLANSTADIET_GAMES } from "@/lib/mellanstadiet-games";

interface SpelCalloutProps {
  gameSlugs: string[];
  intro?: string;
}

/** Promo-block som länkar till relaterade spel från lektionssidor. */
export function SpelCallout({ gameSlugs, intro }: SpelCalloutProps) {
  const games = gameSlugs
    .map((s) => MELLANSTADIET_GAMES.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  if (games.length === 0) return null;

  return (
    <div className="my-10 rounded-xl border border-[#fcd34d]/40 bg-gradient-to-br from-[#0d1322] via-[#1a2235] to-[#0d1322] p-6">
      <div className="mb-4 flex items-center gap-2 text-[#fcd34d]">
        <Gamepad2 className="h-5 w-5" />
        <span className="ms-mono">SPELA UT DET HÄR</span>
      </div>
      {intro && (
        <p className="mb-5 text-lg leading-relaxed text-white">{intro}</p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {games.map((g) => (
          <Link
            key={g.id}
            href={`/mellanstadiet/spel/${g.slug}`}
            className="group flex items-center justify-between gap-4 rounded-lg border border-[#243248] bg-[#1a2235] p-4 transition-all hover:border-white/40"
            style={{ borderLeft: `4px solid ${g.accentHex}` }}
          >
            <div>
              <div
                className="ms-mono text-xs"
                style={{ color: g.accentHex }}
              >
                {g.type.toUpperCase()} · {g.duration}
              </div>
              <div className="mt-1 font-semibold text-white">{g.title}</div>
              <div className="text-sm text-[#94a3b8]">{g.tagline}</div>
            </div>
            <ArrowRight
              className="h-5 w-5 flex-none text-[#64748b] transition-all group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
