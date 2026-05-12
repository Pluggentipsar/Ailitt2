"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

/* Kollapserad sektion för avancerade prompter inom en kategori.
 *
 * Designvalet: basic-prompterna är alltid synliga — de avancerade ligger
 * ett klick bort. Det håller UI:t överskådligt för en mellanstadie-elev
 * men ger djup för den som vill mer.
 */

interface AdvancedSectionProps {
  accentHex: string;
  count: number;
  children: ReactNode;
}

export function AdvancedSection({
  accentHex,
  count,
  children,
}: AdvancedSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 rounded-xl border-2 border-dashed px-6 py-5 text-left transition-all hover:scale-[1.005]"
        style={{
          borderColor: `${accentHex}80`,
          background: open
            ? `${accentHex}15`
            : `linear-gradient(135deg, ${accentHex}12, ${accentHex}04)`,
        }}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-12 w-12 flex-none items-center justify-center rounded-lg"
            style={{ background: `${accentHex}25` }}
            aria-hidden
          >
            <Sparkles className="h-6 w-6" style={{ color: accentHex }} />
          </div>
          <div>
            <div
              className="ms-mono font-bold"
              style={{ color: accentHex }}
            >
              {open ? "DÖLJ" : "VISA"} AVANCERADE PROMPTER · {count} ST
            </div>
            <div className="mt-1 text-base font-semibold text-[var(--ms-text)]">
              {open
                ? "Klicka för att stänga"
                : "När du fattat grunderna — riktiga proffsprompter"}
            </div>
            <p className="mt-1 text-sm text-[var(--ms-text-muted)]">
              {open
                ? "Skrolla ner och utforska. Glöm inte basic-prompterna ovan."
                : "Längre, mer detaljerade. Funkar bäst när du vet vad du vill."}
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp
            className="h-6 w-6 flex-none transition-transform"
            style={{ color: accentHex }}
          />
        ) : (
          <ChevronDown
            className="h-6 w-6 flex-none transition-transform group-hover:translate-y-0.5"
            style={{ color: accentHex }}
          />
        )}
      </button>

      {open && <div className="mt-6 space-y-8">{children}</div>}
    </div>
  );
}
