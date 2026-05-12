"use client";

import { ArrowRight } from "lucide-react";
import type { SectionEntry } from "@/lib/mellanstadiet-sections";

interface NextSectionButtonProps {
  next: SectionEntry;
  accentHex: string;
}

export function NextSectionButton({ next, accentHex }: NextSectionButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(next.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mt-12 border-t border-[var(--ms-border)] pt-8">
      <button
        type="button"
        onClick={handleClick}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-5 py-5 text-left transition-all hover:border-transparent active:scale-[0.99] sm:px-6 sm:py-6"
        style={{
          ["--accent" as string]: accentHex,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = accentHex;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "";
        }}
        aria-label={`Gå till nästa sektion: ${next.title}`}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full font-mono text-lg font-bold text-[var(--ms-bg)] sm:h-14 sm:w-14 sm:text-xl"
            style={{ background: accentHex }}
            aria-hidden
          >
            {next.step}
          </span>
          <div>
            <div className="ms-mono text-xs text-[var(--ms-text-muted)]">NÄSTA STEG</div>
            <div className="text-lg font-semibold text-[var(--ms-text)] sm:text-xl">
              {next.title}
            </div>
          </div>
        </div>
        <ArrowRight
          className="h-6 w-6 flex-none text-[var(--ms-text-muted)] transition-transform group-hover:translate-x-1 sm:h-7 sm:w-7"
          style={{ color: accentHex }}
          aria-hidden
        />
      </button>
    </div>
  );
}
