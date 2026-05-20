"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { darkPatternIllustrations } from "@/lib/workshops/kallkritik/dark-patterns-images";

export function IllustrationCarousel() {
  const [idx, setIdx] = useState(0);
  const total = darkPatternIllustrations.length;
  const current = darkPatternIllustrations[idx];

  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  return (
    <section className="bg-white/70 border border-stone-200 rounded-2xl overflow-hidden print-avoid-break">
      <div className="px-5 py-4 border-b border-stone-200 bg-stone-50/50 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-stone-700" />
          <h2 className="font-display text-xl text-stone-900 leading-none">
            De 7 dark patterns — med exempel
          </h2>
        </div>
        <span className="text-xs text-stone-500">
          {idx + 1} / {total}
        </span>
      </div>

      <div className="relative bg-stone-100">
        {/* Bild */}
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={current.src}
            alt={`${current.number}. ${current.name} — ${current.tagline}`}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority={idx === 0}
          />
        </div>

        {/* Navigationsknappar */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-stone-900/80 text-white hover:bg-stone-900 backdrop-blur-sm transition-colors print:hidden"
          aria-label="Föregående bild"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-stone-900/80 text-white hover:bg-stone-900 backdrop-blur-sm transition-colors print:hidden"
          aria-label="Nästa bild"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bildtitel */}
      <div className="px-5 py-4">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-display text-2xl text-workshop-terrakotta leading-none">
            {current.number}.
          </span>
          <h3 className="font-display text-2xl text-stone-900 leading-none">
            {current.name}
          </h3>
        </div>
        <p className="text-sm text-stone-700 leading-snug">{current.tagline}</p>
      </div>

      {/* Dots */}
      <div className="px-5 pb-4 flex justify-center gap-2 print:hidden">
        {darkPatternIllustrations.map((illu, i) => (
          <button
            key={illu.number}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${
              i === idx
                ? "w-6 bg-stone-900"
                : "w-2 bg-stone-300 hover:bg-stone-500"
            }`}
            aria-label={`Gå till bild ${i + 1}: ${illu.name}`}
          />
        ))}
      </div>
    </section>
  );
}
