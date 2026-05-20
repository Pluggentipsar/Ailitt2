"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // tyst — clipboard kan vara blockerat
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold hover:bg-stone-800 transition-colors"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" /> Kopierat
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> Kopiera
        </>
      )}
    </button>
  );
}
