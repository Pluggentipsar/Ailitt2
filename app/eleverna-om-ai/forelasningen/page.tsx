import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Presentation,
  Clock,
  Mic,
  Maximize2,
} from "lucide-react";
import { forelasningen } from "@/lib/forelasningar/eleverna-om-ai";
import type { Slide } from "@/lib/forelasningar/typer";
import { ForelasningTOC } from "@/components/workshops/kallkritik/ForelasningTOC";

/**
 * Läsversion av "Detta behöver eleverna veta om AI".
 *
 * Egen sida och inte en delad komponent med källkritikens föreläsning, av
 * samma skäl som korten har olika register: källkritiken bär workshopens
 * gräddpappersspråk, den här bär sajtens. Strukturen — flytande TOC,
 * aktavdelare, iframe per bild — är däremot densamma, och TOC:n återanvänds
 * rakt av eftersom akttypen är strukturellt identisk.
 */

export const metadata = {
  title: `Föreläsningen · ${forelasningen.title} · AI-litt`,
  description:
    "Läsversion av föreläsningen som föregår workshopen. Bild för bild med talmanus och kontextualiserande text.",
};

/** Akttoner mappade till sajtregistrets färger. */
const TON_KLASS: Record<string, string> = {
  kol: "bg-gray-200",
  havsblå: "bg-teal-100",
  terrakotta: "bg-orange-100",
  plommon: "bg-purple-100",
  rost: "bg-amber-100",
  skog: "bg-emerald-100",
  senap: "bg-yellow-100",
  lila: "bg-violet-100",
};

export default function ForelasningenPage() {
  return (
    <article className="min-h-screen bg-gray-50 pb-20">
      <ForelasningTOC acts={forelasningen.acts} />

      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/eleverna-om-ai"
          className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till Eleverna om AI
        </Link>
      </div>

      {/* HERO */}
      <header className="container mx-auto px-4 pb-10 pt-4">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            <Presentation className="h-3.5 w-3.5" />
            Föreläsningen — läsversion
          </div>
          <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            {forelasningen.title}
          </h1>
          <p className="mb-6 text-xl leading-snug text-gray-700">
            {forelasningen.subtitle}
          </p>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <Mic className="h-4 w-4" />
              {forelasningen.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {forelasningen.duration}
            </span>
          </div>

          <p className="rounded-2xl border border-gray-200 bg-white p-5 text-base leading-relaxed text-gray-700">
            {forelasningen.intro}
          </p>
        </div>

        {/* Akterna som innehållsförteckning */}
        <nav className="mt-8 max-w-3xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Akterna
          </div>
          <ol className="grid gap-2 sm:grid-cols-2">
            {forelasningen.acts.map((act) => (
              <li key={act.id}>
                <a
                  href={`#${act.id}`}
                  className="group block rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-teal-300 hover:bg-teal-50/40"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {act.number}
                      </span>{" "}
                      <span className="text-lg font-semibold text-gray-900 group-hover:underline">
                        {act.title}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-gray-900" />
                  </div>
                  <div className="mt-0.5 text-xs text-gray-500">
                    {act.slides.length} avsnitt
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {/* AKTERNA */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-16">
          {forelasningen.acts.map((act) => (
            <section key={act.id} id={act.id} className="scroll-mt-24">
              <div
                className={`mb-8 rounded-3xl p-8 print-avoid-break ${
                  TON_KLASS[act.tone] ?? "bg-gray-200"
                }`}
              >
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-700">
                  {act.number}
                </div>
                <h2 className="mb-4 text-4xl font-bold leading-none text-gray-900 sm:text-5xl">
                  {act.title}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-gray-800">
                  {act.intro}
                </p>
              </div>

              <div className="space-y-12">
                {act.slides.map((slide) => (
                  <SlideBlock key={slide.id} slide={slide} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bro till workshopen */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border-2 border-teal-200 bg-teal-50/60 p-6 print:hidden">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            Nästa steg
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Nu till klassrummet
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Föreläsningen gav kartan. Metoderna och övningsbanken ger verktygen —
            färdiga aktiviteter i tre lägen, med storskärmsläge och material att
            skriva ut.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/eleverna-om-ai"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
            >
              De sju metoderna
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ovningsbanken"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Övningsbanken
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SlideBlock({ slide }: { slide: Slide }) {
  const slideUrl = `${forelasningen.presenterBaseUrl}?slide=${slide.index}`;

  return (
    <article id={slide.id} className="scroll-mt-24 print-avoid-break">
      <div className="mb-3 flex items-baseline justify-between gap-3 text-xs">
        <div className="flex items-baseline gap-3">
          <span className="font-mono font-semibold text-gray-400">
            Bild {slide.index}
          </span>
          {slide.chapter && (
            <span className="italic text-gray-500">{slide.chapter}</span>
          )}
        </div>
        <a
          href={slideUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 print:hidden"
          title="Öppna bilden i fullskärm"
        >
          <Maximize2 className="h-3 w-3" />
          Fullskärm
        </a>
      </div>

      <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-300 bg-gray-900 shadow-lg print:hidden">
        <iframe
          src={slideUrl}
          className="absolute inset-0 h-full w-full"
          title={`Bild ${slide.index}${slide.heading ? `: ${slide.heading}` : ""}`}
          loading="lazy"
          allow="fullscreen; autoplay"
        />
      </div>

      {slide.heading && (
        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          {slide.heading}
        </h3>
      )}

      {slide.display && (
        <blockquote className="mb-3 border-l-4 border-teal-400 pl-4 text-lg italic leading-relaxed text-gray-800">
          {slide.display}
          {slide.attribution && (
            <footer className="mt-1 text-sm not-italic text-gray-500">
              {slide.attribution}
            </footer>
          )}
        </blockquote>
      )}

      {slide.bullets && slide.bullets.length > 0 && (
        <ul className="mb-3 space-y-1.5 text-[15px] leading-relaxed text-gray-700">
          {slide.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
              {b}
            </li>
          ))}
        </ul>
      )}

      <p className="text-base leading-relaxed text-gray-700">{slide.summary}</p>

      {slide.notes && (
        <p className="mt-3 rounded-xl bg-gray-100 p-3 text-sm leading-relaxed text-gray-600">
          <span className="font-semibold">Ur talmanuset: </span>
          {slide.notes}
        </p>
      )}

      {slide.linkedActivities && slide.linkedActivities.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 print:hidden">
          {slide.linkedActivities.map((a) => (
            <Link
              key={a.id}
              href={a.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-teal-300 bg-white px-3 py-1.5 text-sm font-medium text-teal-800 transition-colors hover:bg-teal-50"
            >
              {a.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
