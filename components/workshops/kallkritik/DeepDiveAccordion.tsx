"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, BookOpen } from "lucide-react";
import type { DeepDive } from "@/lib/workshops/kallkritik";
import { BlockRenderer } from "./BlockRenderer";

export function DeepDiveAccordion({ deepDive }: { deepDive: DeepDive }) {
  if (!deepDive.sections || deepDive.sections.length === 0) return null;

  return (
    <section className="bg-workshop-canvas-deep border-2 border-stone-300 rounded-2xl overflow-hidden print-avoid-break">
      <div className="px-5 py-4 border-b border-stone-300 bg-stone-900 text-workshop-canvas">
        <div className="flex items-start gap-3">
          <BookOpen className="h-5 w-5 mt-0.5 shrink-0 text-workshop-senap" />
          <div className="min-w-0">
            <h2 className="font-display text-2xl leading-tight">
              Fördjupning för dig som vill läsa mer
            </h2>
            {deepDive.intro && (
              <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                {deepDive.intro}
              </p>
            )}
          </div>
        </div>
      </div>

      <Accordion.Root
        type="multiple"
        className="divide-y divide-stone-300"
      >
        {deepDive.sections.map((section, i) => (
          <Accordion.Item
            key={i}
            value={`section-${i}`}
            className="group"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group/trigger flex items-center justify-between w-full px-5 py-4 text-left hover:bg-white/40 transition-colors">
                <span className="font-display text-xl text-stone-900 leading-snug pr-4">
                  {section.question}
                </span>
                <ChevronDown className="h-5 w-5 text-stone-500 shrink-0 transition-transform group-data-[state=open]/trigger:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="px-5 pb-5 pt-1">
                <BlockRenderer blocks={section.answer} />
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
