"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Skriv ut" }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border-2 border-stone-900 text-stone-900 text-sm font-semibold hover:bg-stone-100 transition-colors print:hidden"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}
