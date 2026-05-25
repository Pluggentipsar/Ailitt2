import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Presentation,
  Clock,
  Mic,
  BookOpen,
  Maximize2,
} from "lucide-react";
import { forelasningen, type Slide } from "@/lib/workshops/kallkritik/forelasningen";
import { ForelasningTOC } from "@/components/workshops/kallkritik/ForelasningTOC";

export const metadata = {
  title: `Föreläsning · ${forelasningen.title} · Källkritik-sandlådan`,
  description:
    "Läsversion av föreläsningen som föregår workshopen. Slide-för-slide-genomgång med talmanus och kontextualiserande text.",
};

// Akterna har var sin färgton från workshop-paletten — matchar workshop-CSS.
const TONE_CLASS: Record<string, string> = {
  senap: "bg-workshop-senap-soft",
  havsblå: "bg-workshop-havsblå-soft",
  lila: "bg-workshop-lila-soft",
  skog: "bg-workshop-skog-soft",
  kol: "bg-stone-300",
  rost: "bg-workshop-rost-soft",
  plommon: "bg-workshop-plommon-soft",
  terrakotta: "bg-workshop-terrakotta-soft",
};

export default function ForelasningenPage() {
  return (
    <article data-chapter-tone="kol" className="pb-20">
      {/* Flytande TOC — knapp nere till höger, overlay vid klick */}
      <ForelasningTOC acts={forelasningen.acts} />

      {/* Tillbaka-länk */}
      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/workshops/kallkritik-mellanstadiet"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till sandlådan
        </Link>
      </div>

      {/* HERO */}
      <header className="container mx-auto px-4 pt-4 pb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold uppercase tracking-wider mb-5 rotate-[-1deg]">
            <Presentation className="h-3.5 w-3.5" />
            Föreläsningen — läsversion
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-3">
            {forelasningen.title}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-stone-700 leading-snug mb-6">
            {forelasningen.subtitle}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-stone-600 mb-6">
            <span className="inline-flex items-center gap-1.5">
              <Mic className="h-4 w-4" />
              {forelasningen.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {forelasningen.event}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {forelasningen.duration}
            </span>
          </div>

          {/* Intro */}
          <p className="text-base text-stone-700 leading-relaxed bg-white/60 border border-stone-200 rounded-2xl p-5">
            {forelasningen.intro}
          </p>
        </div>

        {/* Innehållsförteckning — akterna */}
        <nav className="mt-8 max-w-3xl">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
            Akterna
          </div>
          <ol className="grid gap-2 sm:grid-cols-2">
            {forelasningen.acts.map((act) => (
              <li key={act.id}>
                <a
                  href={`#${act.id}`}
                  className="block bg-white/60 hover:bg-white border border-stone-200 hover:border-stone-400 rounded-xl px-4 py-3 transition-colors group"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        {act.number}
                      </span>{" "}
                      <span className="font-display text-xl text-stone-900 group-hover:underline">
                        {act.title}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
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
              {/* Akt-divider */}
              <div className={`rounded-3xl p-8 mb-8 ${TONE_CLASS[act.tone] ?? "bg-stone-200"} print-avoid-break`}>
                <div className="text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                  Akt {act.number}
                </div>
                <h2 className="font-display text-5xl sm:text-6xl text-stone-900 leading-none mb-4">
                  {act.title}
                </h2>
                <p className="text-base text-stone-800 leading-relaxed max-w-2xl">
                  {act.intro}
                </p>
              </div>

              {/* Slides i akten */}
              <div className="space-y-12">
                {act.slides.map((slide) => (
                  <SlideBlock key={slide.id} slide={slide} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bro till sandlådan */}
        <div className="max-w-3xl mx-auto mt-16 bg-workshop-skog/15 border-2 border-workshop-skog/30 rounded-2xl p-6 print:hidden">
          <div className="text-xs uppercase tracking-wider font-bold text-workshop-skog mb-2">
            Nästa steg
          </div>
          <h2 className="font-display text-3xl text-stone-900 mb-2">
            Nu till klassrummet — workshop-sandlådan
          </h2>
          <p className="text-stone-800 leading-relaxed mb-4">
            Föreläsningen gav kartan. Sandlådan ger verktygen — 30+ aktiviteter ordnade i 8 kapitel som tar konceptet vidare till klassrummet. Plocka från biblioteket eller följ någon av de tre dramaturgi-förslagen (2 timmar, halvdag eller heldag).
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/workshops/kallkritik-mellanstadiet"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-workshop-canvas font-semibold text-sm hover:bg-stone-800"
            >
              Öppna sandlådan
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/workshops/kallkritik-mellanstadiet/resurser/dramaturgi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-stone-900 text-stone-900 font-semibold text-sm hover:bg-stone-100"
            >
              Färdig dramaturgi
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
      {/* Slide-meta + chapter-tag */}
      <div className="flex items-baseline justify-between gap-3 mb-3 text-xs">
        <div className="flex items-baseline gap-3">
          <span className="text-stone-400 font-mono font-semibold">
            Slide {slide.index}
          </span>
          {slide.chapter && (
            <span className="text-stone-500 italic">{slide.chapter}</span>
          )}
        </div>
        <a
          href={slideUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-stone-500 hover:text-stone-900 print:hidden"
          title="Öppna slide i fullskärm"
        >
          <Maximize2 className="h-3 w-3" />
          Fullskärm
        </a>
      </div>

      {/* Iframe — den riktiga sliden från presenter-deployen */}
      <div className="relative aspect-[16/9] bg-stone-900 rounded-2xl overflow-hidden border border-stone-300 shadow-lg mb-4 print:hidden">
        <iframe
          src={slideUrl}
          className="absolute inset-0 w-full h-full"
          title={`Slide ${slide.index}${slide.heading ? `: ${slide.heading}` : ""}`}
          loading="lazy"
          allow="fullscreen; autoplay"
        />
      </div>

      {/* Vid utskrift: visa text-representation istället för iframe */}
      <div className="hidden print:block mb-4">
        {slide.heading && (
          <div className="font-display text-2xl text-stone-900 mb-2">
            {slide.heading}
          </div>
        )}
        {slide.display && (
          <div className="italic text-stone-800 whitespace-pre-line mb-2">
            {slide.display}
          </div>
        )}
        {slide.attribution && (
          <div className="text-xs text-stone-500 italic mb-2">
            — {slide.attribution}
          </div>
        )}
        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="space-y-1 pl-5 text-sm">
            {slide.bullets.map((b, i) => (
              <li key={i} className="list-disc">
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bild om finns — kompletterar iframen där det är pedagogiskt relevant */}
      {slide.image && (
        <figure className="my-4 bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
          <div className="relative aspect-[16/10]">
            <Image
              src={slide.image}
              alt={slide.imageAlt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
            />
          </div>
          {slide.imageAlt && (
            <figcaption className="px-3 py-2 text-xs text-stone-600 italic bg-white border-t border-stone-200">
              {slide.imageAlt}
            </figcaption>
          )}
        </figure>
      )}

      {/* Vår summary — huvudbrödtext, kontextualiserar sliden */}
      <p className="text-stone-800 leading-relaxed">{slide.summary}</p>

      {/* Länkar till workshop-aktiviteter */}
      {slide.linkedActivities && slide.linkedActivities.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {slide.linkedActivities.map((act) => (
            <Link
              key={act.id}
              href={`/workshops/kallkritik-mellanstadiet/${act.id}`}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-workshop-skog/15 text-workshop-skog border border-workshop-skog/30 hover:bg-workshop-skog/25 transition-colors"
            >
              <ArrowRight className="h-3 w-3" />
              {act.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
