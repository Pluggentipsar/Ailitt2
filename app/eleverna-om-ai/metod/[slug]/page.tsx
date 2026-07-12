import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Backpack,
  Clock,
  GraduationCap,
  ListChecks,
} from "lucide-react";
import { METODER } from "@/lib/eleverna-om-ai/data";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { GoblinReveal } from "@/components/eleverna-om-ai/klassrum/GoblinReveal";
import { ChattSafari } from "@/components/eleverna-om-ai/klassrum/ChattSafari";
import { PromptDuell } from "@/components/eleverna-om-ai/klassrum/PromptDuell";
import { FyraGrepp } from "@/components/eleverna-om-ai/klassrum/FyraGrepp";
import { LosenordScenario } from "@/components/eleverna-om-ai/klassrum/LosenordScenario";
import { VemsSiffror } from "@/components/eleverna-om-ai/klassrum/VemsSiffror";
import { FramtidsRoster } from "@/components/eleverna-om-ai/klassrum/FramtidsRoster";

// Varje metod har sitt eget klassrumsläge — interaktivt innehåll
// byggt för att projiceras och köras direkt med klassen.
const KLASSRUM_KOMPONENTER: Record<string, ComponentType> = {
  "goblin-glitch": GoblinReveal,
  "chatt-safarin": ChattSafari,
  "forhors-ai": PromptDuell,
  "fyra-grepp": FyraGrepp,
  "hemligt-losenord": LosenordScenario,
  "vems-siffror": VemsSiffror,
  framtidssamtalet: FramtidsRoster,
};

export function generateStaticParams() {
  return METODER.map((metod) => ({ slug: metod.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const metod = METODER.find((m) => m.slug === slug);
  if (!metod) {
    return { title: "Metoden hittades inte | AI-litt" };
  }
  return {
    title: `${metod.titel} — Eleverna om AI | AI-litt`,
    description: metod.tagline,
  };
}

export default async function MetodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metod = METODER.find((m) => m.slug === slug);
  if (!metod) {
    notFound();
  }

  const Klassrum = KLASSRUM_KOMPONENTER[metod.slug];

  const snabbfakta = [
    { Ikon: Clock, rubrik: "Tid", varde: metod.tid },
    { Ikon: GraduationCap, rubrik: "Årskurser", varde: metod.arskurser },
    { Ikon: ListChecks, rubrik: "Förberedelser", varde: metod.forberedelser },
    { Ikon: Backpack, rubrik: "Material", varde: metod.material },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidhuvud */}
      <section className="border-b border-gray-200/80 bg-white">
        <div className="container mx-auto px-4 pb-12 pt-28 sm:pt-32">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/eleverna-om-ai"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Alla metoder
            </Link>

            <p className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-gray-500">
              Metod {metod.nr}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {metod.titel}
            </h1>
            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-gray-600">
              {metod.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {metod.domaner.map((doman) => (
                <DomanBadge key={doman} doman={doman} />
              ))}
              {metod.aiLiteracyIds.map((id) => (
                <AiLiteracyBadge key={id} id={id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Snabbfakta */}
      <section className="container mx-auto px-4 pt-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {snabbfakta.map(({ Ikon, rubrik, varde }) => (
            <div
              key={rubrik}
              className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <Ikon className="h-4 w-4 text-teal-600" />
                {rubrik}
              </div>
              <p className="mt-2 font-medium leading-relaxed text-gray-900">
                {varde}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Varför */}
      <section className="container mx-auto px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Varför den här metoden?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            {metod.varfor}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            <span className="font-semibold">Forskning och källor:</span>{" "}
            {metod.forskning}
          </p>
        </div>
      </section>

      {/* Så gör du */}
      <section className="container mx-auto px-4 pt-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Så gör du
          </h2>
          <ol className="mt-6 space-y-4">
            {metod.steg.map((steg, i) => (
              <li
                key={steg.rubrik}
                className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {steg.rubrik}
                      </h3>
                      {steg.tid && (
                        <span className="rounded-full bg-gray-100 px-3 py-1 font-mono text-sm text-gray-600">
                          {steg.tid}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      {steg.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* I klassrummet — visa för klassen */}
      <section className="container mx-auto px-4 pt-14">
        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-teal-200 bg-teal-50/60 p-5 shadow-lg sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            I klassrummet
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Visa för klassen
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-700">
            {metod.klassrumIntro}
          </p>
          <div className="mt-8 rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:p-8">
            {Klassrum ? <Klassrum /> : null}
          </div>
        </div>
      </section>

      {/* Fallgropar */}
      <section className="container mx-auto px-4 pt-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Fallgropar
          </h2>
          <ul className="mt-5 space-y-3">
            {metod.fallgropar.map((fallgrop) => (
              <li
                key={fallgrop}
                className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 leading-relaxed text-gray-800"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <span>{fallgrop}</span>
              </li>
            ))}
          </ul>
          {metod.kallkredit && (
            <p className="mt-6 text-sm text-gray-500">{metod.kallkredit}</p>
          )}
        </div>
      </section>

      {/* Vidare */}
      <section className="container mx-auto px-4 pb-20 pt-14">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <Link
            href="/eleverna-om-ai"
            className="group flex items-center justify-between rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-2xl"
          >
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500">
                Tillbaka
              </span>
              <span className="mt-1 block text-lg font-bold text-gray-900">
                Alla metoder — Eleverna om AI
              </span>
            </span>
            <ArrowLeft className="h-5 w-5 shrink-0 text-teal-600 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            href="/aktiviteter"
            className="group flex items-center justify-between rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-2xl"
          >
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500">
                Mer att hämta
              </span>
              <span className="mt-1 block text-lg font-bold text-gray-900">
                Fler övningar i aktivitetsbanken
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-teal-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
