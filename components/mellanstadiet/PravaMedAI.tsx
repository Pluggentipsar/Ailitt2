"use client";

import { useState } from "react";
import { Bot, Copy, Check } from "lucide-react";

interface PravaMedAIProps {
  /** Konkret prompt eleven ska kopiera */
  prompt: string;
  /** Vad eleven ska göra/observera efteråt */
  observation?: string;
  /** Förslag på vilket verktyg som funkar bäst */
  tool?: string;
  /** Rubrik */
  title?: string;
  accentHex?: string;
}

/** "Prova själv med en AI"-block. Innehåller konkret prompt med kopierbar text.
 *  Hjälper eleven att gå från läsa till göra. Verktygsoberoende.
 */
export function PravaMedAI({
  prompt,
  observation,
  tool = "ChatGPT, Claude, Snap My AI eller annan chattbot",
  title = "Prova själv",
  accentHex = "#10b981",
}: PravaMedAIProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Klippet kunde inte kopieras — gör inget
    }
  };

  return (
    <div
      className="my-8 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center gap-2 px-5 py-2 text-[#0a0e1a]"
        style={{ background: accentHex }}
      >
        <Bot className="h-4 w-4" />
        <span className="ms-mono font-bold">PROVA · {title.toUpperCase()}</span>
      </div>
      <div className="p-5">
        <div className="ms-mono mb-2 text-[#94a3b8]">
          KOPIERA OCH KLISTRA IN I {tool.toUpperCase()}
        </div>
        <div className="group relative rounded-lg border border-[#243248] bg-[#1a2235] p-4 font-mono text-sm leading-relaxed text-[#e6edf7]">
          <button
            type="button"
            onClick={copy}
            className="absolute right-2 top-2 flex items-center gap-1.5 rounded-md border border-[#243248] bg-[#0a0e1a] px-2 py-1 text-xs text-[#94a3b8] opacity-0 transition-opacity hover:text-white group-hover:opacity-100 focus-visible:opacity-100"
            aria-label="Kopiera prompt"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" /> Kopierad
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Kopiera
              </>
            )}
          </button>
          <div className="pr-16 sm:pr-0">
            &ldquo;{prompt}&rdquo;
          </div>
        </div>
        {observation && (
          <div className="mt-4">
            <div className="ms-mono mb-1 text-[#94a3b8]">SEN — VAD ATT KOLLA</div>
            <p className="text-sm leading-relaxed text-[#cbd5e1]">{observation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
