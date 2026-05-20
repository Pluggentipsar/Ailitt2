"use client";

import { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Lightbulb,
  Eye,
  CheckCircle2,
  ChevronDown,
  Maximize2,
  X,
} from "lucide-react";
import { darkPatternExercise } from "@/lib/workshops/kallkritik/dark-patterns-images";

export function DarkPatternsExercise() {
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <section className="bg-white/70 border border-stone-200 rounded-2xl overflow-hidden print-avoid-break">
      <div className="px-5 py-4 border-b border-stone-200 bg-workshop-senap/15">
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="h-4 w-4 text-workshop-terrakotta" />
          <h2 className="font-display text-2xl text-stone-900 leading-none">
            Träna ögat — 6 chatbottar
          </h2>
        </div>
        <p className="text-sm text-stone-700 leading-snug">
          Sex fiktiva chatbottar med dark patterns inbyggda. Studera varje
          konversation — vilka mönster ser du? Avslöja facit när du är klar.
          Bra som workshop-övning på storskärm eller utskrivet.
        </p>
      </div>

      <div className="p-5 grid gap-4 sm:grid-cols-2">
        {darkPatternExercise.map((item) => (
          <article
            key={item.id}
            className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden print-avoid-break"
          >
            {/* Bild med zoom-knapp */}
            <div className="relative aspect-[4/3] bg-stone-100 group">
              <Image
                src={item.src}
                alt={`Konversation ${item.number}: ${item.botName}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain"
              />
              <button
                onClick={() => setZoomed(item.src)}
                className="absolute top-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-stone-900/80 text-white hover:bg-stone-900 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 print:hidden"
                aria-label={`Förstora bild ${item.botName}`}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-1">
                Konversation {item.number}
              </div>
              <h3 className="font-display text-xl text-stone-900 leading-none mb-3">
                {item.botName}
              </h3>

              {/* Facit som accordion */}
              <Accordion.Root type="single" collapsible>
                <Accordion.Item value="facit">
                  <Accordion.Trigger className="group/trigger flex items-center justify-between w-full px-3 py-2 bg-stone-900 text-workshop-canvas rounded-lg text-sm font-semibold hover:bg-stone-800 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5" />
                      Avslöja facit
                    </span>
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/trigger:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pt-3 space-y-3 text-sm">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-full bg-workshop-terrakotta text-white text-[11px] font-bold mb-2">
                          {item.mainPattern}
                        </span>
                        <p className="text-stone-800 leading-relaxed">
                          {item.whatToFind}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                          I bilden hör/ser man
                        </div>
                        <ul className="space-y-1 text-stone-700">
                          {item.examples.map((ex, i) => (
                            <li key={i} className="flex gap-2 leading-snug">
                              <span className="text-workshop-terrakotta shrink-0">
                                ▸
                              </span>
                              <span className="italic">{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                          Varför är det ett dark pattern?
                        </div>
                        <p className="text-stone-700 leading-relaxed">
                          {item.explanation}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                          Möjliga svar från deltagare
                        </div>
                        <ul className="space-y-0.5 text-stone-700">
                          {item.possibleAnswers.map((a, i) => (
                            <li
                              key={i}
                              className="flex gap-1.5 items-start leading-snug"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-workshop-skog shrink-0 mt-0.5" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </article>
        ))}
      </div>

      {/* Zoom-modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/85 backdrop-blur-sm grid place-items-center p-4 print:hidden"
          onClick={() => setZoomed(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setZoomed(null)}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white text-stone-900 hover:bg-stone-100"
              aria-label="Stäng"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/3]">
              <Image
                src={zoomed}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
