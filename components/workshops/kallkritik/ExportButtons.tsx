"use client";

import { useState } from "react";
import { FileDown, Presentation, Loader2 } from "lucide-react";
import type { Slide } from "@/lib/workshops/kallkritik/slides";
import { useLararfalt } from "@/hooks/useLararfalt";

/**
 * Exportknappar i storskärmens verktygsrad.
 *
 * PDF går via webbläsarens utskrift — PrintDeck renderar alla slides, en per
 * liggande sida, med utseendet intakt. PPTX genereras klientside med
 * pptxgenjs, som importeras dynamiskt först vid klick.
 */
export function ExportButtons({
  slides,
  titel,
  lageLabel,
  blurb,
  tone,
  faltScope,
}: {
  slides: Slide[];
  titel: string;
  lageLabel: string;
  blurb?: string;
  tone: string;
  faltScope?: string;
}) {
  const [arbetar, setArbetar] = useState(false);
  const [fel, setFel] = useState<string | null>(null);
  const { varden } = useLararfalt(faltScope ?? "__utan-scope");

  const pptx = async () => {
    setArbetar(true);
    setFel(null);
    try {
      const { exportToPptx } = await import("@/lib/ovningsbanken/pptx");
      await exportToPptx({
        slides,
        titel,
        lageLabel,
        blurb,
        tone,
        faltVarden: varden,
      });
    } catch (e) {
      // Visa felet i UI:t — en tyst knapp som inte gör något är värre än
      // ett meddelande läraren kan agera på.
      setFel(e instanceof Error ? e.message : "Exporten misslyckades");
    } finally {
      setArbetar(false);
    }
  };

  const knapp =
    "inline-flex items-center gap-1.5 rounded-full bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800 transition-colors hover:bg-stone-300 disabled:opacity-50";

  return (
    <div className="flex items-center gap-2">
      {fel && (
        <span className="max-w-[16rem] truncate text-xs text-red-700" title={fel}>
          {fel}
        </span>
      )}
      <button
        onClick={() => window.print()}
        className={knapp}
        title="Öppnar utskriftsdialogen — välj ”Spara som PDF”. En slide per sida, liggande."
      >
        <FileDown className="h-3.5 w-3.5" />
        PDF
      </button>
      <button
        onClick={pptx}
        disabled={arbetar}
        className={knapp}
        title="Laddar ner en .pptx med en slide per moment. Typsnitten ersätts om du inte har Caveat och Nunito Sans installerade."
      >
        {arbetar ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Presentation className="h-3.5 w-3.5" />
        )}
        PowerPoint
      </button>
    </div>
  );
}
