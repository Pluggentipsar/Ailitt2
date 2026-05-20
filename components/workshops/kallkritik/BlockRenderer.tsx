"use client";

import { useState } from "react";
import type { Block } from "@/lib/workshops/kallkritik";
import {
  AlertTriangle,
  Info,
  Lightbulb,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

function SmallCopyButton({ text, label = "Kopiera" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          // ignore
        }
      }}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-900 text-workshop-canvas text-[11px] font-semibold hover:bg-stone-800 transition-colors print:hidden"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          Kopierat
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          {label}
        </>
      )}
    </button>
  );
}

const CALLOUT_ICONS = {
  warning: AlertTriangle,
  info: Info,
  tip: Lightbulb,
  note: MessageCircle,
};

const CALLOUT_LABELS = {
  warning: "Varning",
  info: "Info",
  tip: "Tips",
  note: "OBS",
};

export function BlockRenderer({
  blocks,
  studentMode = false,
}: {
  blocks: Block[];
  // I student-mode visas små kopiera-knappar bredvid prompter (quote) och
  // example-block. Resten är samma rendering.
  studentMode?: boolean;
}) {
  return (
    <div className="workshop-prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className={studentMode ? "text-lg leading-relaxed" : undefined}
              >
                {block.text}
              </p>
            );

          case "h":
            return studentMode ? (
              <h3
                key={i}
                className="!mt-8 !mb-3 font-display !text-3xl border-b-2 border-workshop-havsbla/30 pb-2"
              >
                {block.text}
              </h3>
            ) : (
              <h3 key={i} className="!mt-6">
                {block.text}
              </h3>
            );

          case "list":
            if (block.ordered) {
              // I elev-läge: rendera numrerade listor som steg-kort med stora siffror.
              // Det är ju nästan alltid en sekvens "gör först X, sen Y" — kortformat
              // gör det mycket lättare att följa visuellt.
              if (studentMode) {
                return (
                  <ol key={i} className="!list-none !pl-0 space-y-3 my-4">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-4 p-4 bg-white rounded-xl border-2 border-workshop-havsbla/20 print-avoid-break"
                      >
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-workshop-havsbla text-white font-bold shrink-0 font-display text-2xl leading-none">
                          {j + 1}
                        </div>
                        <p className="flex-1 text-stone-900 !mb-0 leading-relaxed text-base self-center">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <ol key={i} className="list-decimal">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ol>
              );
            }
            // Oordnad lista — i student-mode med större luft, annars compact bullets.
            return studentMode ? (
              <ul key={i} className="!list-none !pl-0 space-y-2 my-4">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 px-4 py-2.5 bg-white/80 rounded-lg print-avoid-break"
                  >
                    <span
                      className="font-bold text-workshop-havsbla shrink-0 leading-relaxed"
                      aria-hidden
                    >
                      •
                    </span>
                    <span className="text-stone-900 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul key={i} className="list-disc">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol key={i} className="!list-none !pl-0 space-y-3 my-4">
                {block.steps.map((step, j) => (
                  <li
                    key={j}
                    className="flex gap-4 p-4 bg-white/60 rounded-xl border border-stone-200 print-avoid-break"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-stone-900 text-workshop-canvas font-bold shrink-0 font-display text-xl leading-none">
                      {j + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap mb-1">
                        {step.title && (
                          <span className="font-semibold text-stone-900">
                            {step.title}
                          </span>
                        )}
                        {step.time && (
                          <span className="text-xs text-stone-500 px-2 py-0.5 rounded-full bg-stone-100">
                            {step.time}
                          </span>
                        )}
                      </div>
                      {step.body && (
                        <p className="text-stone-700 !mb-0 leading-relaxed">
                          {step.body}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            );

          case "example": {
            return (
              <div
                key={i}
                className="my-5 p-5 bg-white/70 rounded-2xl border-2 border-dashed border-stone-300 print-avoid-break"
              >
                {block.label && (
                  <div className="text-xs uppercase tracking-wide text-stone-500 font-semibold mb-2">
                    Exempel · {block.label}
                  </div>
                )}
                {block.user && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="text-[11px] uppercase tracking-wide text-stone-500">
                        Användare
                      </div>
                      {studentMode && (
                        <SmallCopyButton text={block.user} label="Kopiera prompten" />
                      )}
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-stone-100 text-stone-900">
                      {block.user}
                    </div>
                  </div>
                )}
                {block.ai && (
                  <div className="mb-3">
                    <div className="text-[11px] uppercase tracking-wide text-stone-500 mb-1">
                      AI
                    </div>
                    <div
                      className="px-4 py-2.5 rounded-2xl rounded-br-sm text-stone-900"
                      style={{
                        background: "var(--workshop-lila-soft)",
                      }}
                    >
                      {block.ai}
                    </div>
                  </div>
                )}
                {block.note && (
                  <p className="text-sm text-stone-600 italic !mb-0 mt-2">
                    {block.note}
                  </p>
                )}
              </div>
            );
          }

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-4 pl-5 border-l-4 border-stone-900 italic text-stone-800 relative group"
              >
                <p className="!mb-1">”{block.text}”</p>
                {block.attribution && (
                  <p className="!mb-0 text-sm text-stone-500 not-italic">
                    — {block.attribution}
                  </p>
                )}
                {studentMode && (
                  <div className="mt-2">
                    <SmallCopyButton text={block.text} label="Kopiera prompten" />
                  </div>
                )}
              </blockquote>
            );

          case "callout": {
            const Icon = CALLOUT_ICONS[block.tone];
            return (
              <div
                key={i}
                className={`callout callout--${block.tone} print-avoid-break`}
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-5 w-5 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-stone-900 mb-1">
                      {block.title ?? CALLOUT_LABELS[block.tone]}
                    </div>
                    <p className="!mb-0 text-stone-800 leading-relaxed">
                      {block.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
