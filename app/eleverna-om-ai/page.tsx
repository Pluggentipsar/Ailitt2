import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, GraduationCap, Library, ListMusic, Presentation, Hammer } from "lucide-react";
import { DOMANER, FORSKNINGSHYLLA, LEKTIONER, METODER } from "@/lib/eleverna-om-ai/data";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import { MetodKort } from "@/components/eleverna-om-ai/MetodKort";
import type { OecdDomain } from "@/lib/eleverna-om-ai/data";

export const metadata: Metadata = {
  title: "Detta behöver eleverna veta om AI | AI-litt",
  description:
    "Sju metoder och två lektioner för klassrummet — självförklarande, forskningsförankrade och kopplade till OECD:s AI-litteracitetsramverk. Byggda att köra i morgon.",
};

// Statiska accentklasser per domän (Tailwind purgar dynamiska klassnamn).
const DOMAN_ACCENT: Record<OecdDomain, { kant: string; prick: string }> = {
  mota: { kant: "hover:border-teal-300", prick: "bg-teal-500" },
  skapa: { kant: "hover:border-purple-300", prick: "bg-purple-500" },
  styra: { kant: "hover:border-blue-300", prick: "bg-blue-500" },
  forma: { kant: "hover:border-orange-300", prick: "bg-orange-500" },
};

const DOMAN_ORDNING: OecdDomain[] = ["mota", "skapa", "styra", "forma"];

export default function ElevernaOmAiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 pb-20 pt-28 sm:pb-28 sm:pt-32">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl animate-fade-in-down">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              METODBANK
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Detta behöver eleverna{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(20,184,166,0.45)]">
                veta om AI
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 drop-shadow-md">
              Sju metoder och två lektioner för klassrummet — självförklarande,
              forskningsförankrade och kopplade till OECD:s
              AI-litteracitetsramverk. Byggda att köra i morgon.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Följer med föreläsningen med samma namn &middot; Joel Rangsjö
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/workshops/eleverna-om-ai"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-teal-50"
              >
                <Hammer className="h-4 w-4 text-teal-700" />
                Kör workshopen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/eleverna-om-ai/forelasningen"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-all hover:bg-white/20"
              >
                <Presentation className="h-4 w-4 text-teal-300" />
                Läs föreläsningen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KARTAN */}
      <section className="container mx-auto px-4 pt-14 sm:pt-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Kartan</h2>
          <p className="mt-2 text-gray-600">
            OECD:s fyra domäner — så hänger allt i metodbanken ihop.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DOMAN_ORDNING.map((doman) => {
            const info = DOMANER[doman];
            const accent = DOMAN_ACCENT[doman];
            return (
              <div
                key={doman}
                className={`rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:shadow-2xl ${accent.kant}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${accent.prick}`} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {info.namn}
                  </h3>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gray-500">
                  {info.engelska}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {info.beskrivning}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-teal-200/80 bg-teal-50/70 p-6">
          <p className="text-sm leading-relaxed text-teal-900">
            <span className="font-semibold">PISA 2029</span> testar för första
            gången 15-åringars AI-litteracitet — med scenarier, inte
            definitioner. Skolverkets AI-stöd bygger på samma ramverk (AILit,
            OECD/EU 2026). Varje metod nedan är taggad mot kartan.
          </p>
        </div>
      </section>

      {/* SJU METODER */}
      <section className="container mx-auto px-4 pt-14 sm:pt-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Sju metoder</h2>
          <p className="mt-2 text-gray-600">
            Varje metod är komplett: varför, forskning, steg för steg,
            fallgropar — och ett klassrumsläge att projicera direkt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {METODER.map((metod) => (
            <MetodKort key={metod.slug} metod={metod} />
          ))}
        </div>
      </section>

      {/* ÖVNINGSBANKEN */}
      <section className="container mx-auto px-4 pt-10">
        <Link
          href="/ovningsbanken"
          className="group flex flex-col gap-4 rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl sm:flex-row sm:items-center"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
            <ListMusic className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">
              Alla övningar — och dina egna spellistor — i AI-övningsbanken
            </h2>
            <p className="mt-1 text-gray-600">
              Metoderna ovan plus övningar från hela sajten i tre lägen: prova
              själv, lärarhandledning och elevinstruktion. Plocka ihop en
              spellista och dela med kollegor.
            </p>
          </div>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-teal-600 transition-transform group-hover:translate-x-1 sm:block" />
        </Link>
      </section>

      {/* TVÅ LEKTIONER */}
      <section className="container mx-auto px-4 pt-14 sm:pt-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Två lektioner att köra rakt av
          </h2>
          <p className="mt-2 text-gray-600">
            Hela lektionsupplägg — 60 minuter, färdiga artefakter, inga
            förberedelser utöver genomläsning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {LEKTIONER.map((lektion) => (
            <Link
              key={lektion.slug}
              href={`/eleverna-om-ai/lektion/${lektion.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-teal-700">
                    {lektion.titel}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-teal-700">
                    {lektion.undertitel}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-teal-500" />
                  {lektion.tid}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5 text-teal-500" />
                  {lektion.arskurser}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {lektion.domaner.map((doman) => (
                  <DomanBadge key={doman} doman={doman} />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                {lektion.beskrivning}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400">{lektion.kallkredit}</p>
                <ArrowRight className="h-4 w-4 shrink-0 text-teal-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PLOCKBIBLIOTEKET */}
      <section className="container mx-auto px-4 pt-14 sm:pt-16">
        <Link
          href="/aktiviteter"
          className="group flex flex-col gap-4 rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl sm:flex-row sm:items-center"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
            <Library className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-teal-700">
              Plockbiblioteket
            </h2>
            <p className="mt-1 text-gray-600">
              55+ elevaktiviteter för Svenska 1 &amp; 2, filtrerbara på
              AI-litteracitetens dimensioner.
            </p>
          </div>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-teal-600 transition-transform group-hover:translate-x-1 sm:block" />
        </Link>
        <p className="mt-3 text-sm text-gray-600">
          Se även{" "}
          <Link
            href="/ai-litteracitet"
            className="font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            sajtens sju dimensioner
          </Link>{" "}
          och{" "}
          <Link
            href="/didaktiska-modeller"
            className="font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            didaktiska modeller
          </Link>
          .
        </p>
      </section>

      {/* FORSKNINGSHYLLAN */}
      <section className="container mx-auto px-4 pb-20 pt-14 sm:pt-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Forskningshyllan</h2>
          <p className="mt-2 text-gray-600">
            Studierna som metoderna vilar på — i kortform.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm sm:p-8">
          <ul className="divide-y divide-gray-100">
            {FORSKNINGSHYLLA.map((post) => (
              <li key={post.titel} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="font-bold text-gray-900">{post.titel}</span>{" "}
                  — {post.rad}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
