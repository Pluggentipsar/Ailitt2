"use client";

import { useState, useId, ReactNode } from "react";

interface BegreppProps {
  ord: string;
  children: ReactNode;
}

/** Inline-begrepp — visar en förklaring i popover på klick. Tangentbordvänligt. */
export function Begrepp({ ord, children }: BegreppProps) {
  const [open, setOpen] = useState(false);
  const popId = useId();

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        aria-expanded={open}
        aria-controls={popId}
        className="cursor-help border-b border-dashed border-[#fcd34d] font-medium text-[#fde68a] transition-colors hover:text-[#fcd34d]"
      >
        {ord}
      </button>
      {open && (
        <span
          id={popId}
          role="tooltip"
          className="ms-fadein absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg)] p-3 text-sm font-normal not-italic leading-relaxed text-[var(--ms-text)] shadow-2xl"
        >
          {children}
        </span>
      )}
    </span>
  );
}
