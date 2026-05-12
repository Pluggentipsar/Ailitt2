import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Target } from "lucide-react";
import {
  MELLANSTADIET_GAMES,
  getGameBySlug,
} from "@/lib/mellanstadiet-games";
import { NastaOrdGame } from "@/components/mellanstadiet/games/NastaOrdGame";
import { AiEllerManniskaGame } from "@/components/mellanstadiet/games/AiEllerManniskaGame";
import { BiasDetektiven } from "@/components/mellanstadiet/games/BiasDetektiven";
import { MonsterFangaren } from "@/components/mellanstadiet/games/MonsterFangaren";
import { HallucinationRally } from "@/components/mellanstadiet/games/HallucinationRally";
import { SycophancyDetektorn } from "@/components/mellanstadiet/games/SycophancyDetektorn";
import { DilemmaSpelet } from "@/components/mellanstadiet/DilemmaSpelet";
import { BygDinFramtid } from "@/components/mellanstadiet/BygDinFramtid";

export function generateStaticParams() {
  return MELLANSTADIET_GAMES.filter((g) => g.status === "ready").map((g) => ({
    gameSlug: g.slug,
  }));
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ gameSlug: string }>;
}) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);
  if (!game || game.status !== "ready") notFound();

  return (
    <div className="ms-grid-bg pb-24">
      {/* Hero */}
      <section className="border-b border-[var(--ms-border)] px-4 pb-12 pt-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/mellanstadiet/spel"
            className="ms-mono inline-flex items-center gap-1.5 text-[var(--ms-text-muted)] transition-colors hover:text-[var(--ms-text)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            ALLA SPEL
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span
              className="ms-mono rounded px-2 py-1 text-[var(--ms-bg)]"
              style={{ background: game.accentHex }}
            >
              {game.type.toUpperCase()}
            </span>
            <span className="ms-mono text-[var(--ms-text-muted)]">{game.lesson}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--ms-text)] sm:text-5xl">
            {game.title}
          </h1>
          <p className="mt-3 text-xl text-[var(--ms-text-body)]">{game.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--ms-text-muted)]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {game.duration}
            </span>
            <span aria-hidden className="text-[var(--ms-border)]">•</span>
            <span className="flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5" />
              Lärdom: {game.pedagogy}
            </span>
          </div>
        </div>
      </section>

      {/* Spelet */}
      <section className="px-4 pt-12">
        {game.id === "monster-fangaren" && <MonsterFangaren />}
        {game.id === "nasta-ord" && <NastaOrdGame />}
        {game.id === "ai-eller-manniska" && <AiEllerManniskaGame />}
        {game.id === "bias-detektiven" && <BiasDetektiven />}
        {game.id === "hallucination-rally" && <HallucinationRally />}
        {game.id === "sycophancy-detektorn" && <SycophancyDetektorn />}
        {game.id === "dilemma-spelet" && <DilemmaSpelet />}
        {game.id === "byg-din-framtid" && <BygDinFramtid />}
      </section>
    </div>
  );
}
