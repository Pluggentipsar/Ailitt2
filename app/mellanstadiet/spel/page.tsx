import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import { MELLANSTADIET_GAMES } from "@/lib/mellanstadiet-games";

export default function SpelHub() {
  return (
    <div className="ms-grid-bg">
      <section className="px-4 pb-16 pt-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/mellanstadiet"
            className="ms-mono inline-flex items-center gap-1.5 text-[#94a3b8] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            KURSEN · 7 LEKTIONER
          </Link>

          <div className="ms-mono mt-8 text-[#94a3b8]">
            // SPEL OCH UNDERSÖKNINGAR
          </div>
          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Lär dig genom att <span className="italic text-[#fcd34d]">spela</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-[#cbd5e1]">
            Varje spel är gjort för att lära dig en specifik sak om hur AI
            fungerar. Inte sagor om AI — utan hur det <em>verkligen</em> tänker
            (eller snarare gissar).
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MELLANSTADIET_GAMES.map((game) => (
              <Link
                key={game.id}
                href={
                  game.status === "ready"
                    ? `/mellanstadiet/spel/${game.slug}`
                    : "#"
                }
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-[#243248] bg-[#1a2235] transition-all duration-300 ${
                  game.status === "ready"
                    ? "hover:-translate-y-1 hover:border-white/40"
                    : "cursor-not-allowed opacity-50"
                }`}
              >
                {/* Top accent */}
                <div
                  className="h-2 w-full"
                  style={{ background: game.accentHex }}
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                      className="ms-mono rounded px-2 py-1 text-[#0a0e1a]"
                      style={{ background: game.accentHex }}
                    >
                      {game.type.toUpperCase()}
                    </span>
                    <span className="ms-mono text-[#94a3b8]">
                      {game.lesson}
                    </span>
                  </div>

                  <h2 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    {game.title}
                  </h2>
                  <p className="mb-4 text-[#cbd5e1]">{game.tagline}</p>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[#94a3b8]">
                    {game.description}
                  </p>

                  <div className="border-t border-[#243248] pt-4">
                    <div className="ms-mono mb-3 flex items-center justify-between text-[#94a3b8]">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {game.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${
                              i < game.difficulty
                                ? "bg-[#fcd34d]"
                                : "bg-[#243248]"
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
                      style={{ background: `${game.accentHex}15` }}
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: game.accentHex }}
                      >
                        {game.status === "ready"
                          ? "Spela →"
                          : "Kommer snart"}
                      </span>
                      {game.status === "ready" && (
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          style={{ color: game.accentHex }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[#243248] bg-[#0d1322] p-8">
            <div className="mb-3 flex items-center gap-2 text-[#fcd34d]">
              <Sparkles className="h-4 w-4" />
              <span className="ms-mono">VARFÖR SPEL?</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
              För att läsa <em className="italic text-[#94a3b8]">om</em> AI är
              en sak. Att <em className="italic text-[#a5b4fc]">prova</em> är
              en annan.
            </h3>
            <p className="leading-relaxed text-[#cbd5e1]">
              Det är skillnad på att läsa &quot;AI gissar mönster&quot; och att
              känna det själv när man tävlar mot AI:s top-3 i Nästa ord. Det
              är skillnad på att läsa &quot;bias är data&quot; och att se en
              stapel rättas upp och utfallet ändras. Spelen finns för att
              förvandla begrepp till upplevelser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
