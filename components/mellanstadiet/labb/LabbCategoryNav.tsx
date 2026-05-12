"use client";

import { useEffect, useState } from "react";
import {
  LABB_CATEGORIES,
  LABB_EXPERIMENTS,
  getExperimentsByCategory,
  type LabbCategory,
} from "@/lib/mellanstadiet-labb";

/* Sticky kategori-nav. Visas när användaren scrollar förbi hero.
 * Hjälper eleven att hoppa direkt till en station — slipper scrolla i onödan.
 *
 * Scrollar smooth till station-ID. ScrollSpy markerar aktiv kategori. */

export function LabbCategoryNav() {
  const [activeCategory, setActiveCategory] = useState<LabbCategory>(
    LABB_CATEGORIES[0].id,
  );

  useEffect(() => {
    const onScroll = () => {
      // Hitta första kategori-rubriken som är synlig
      const sentinel = window.scrollY + 200;
      for (const cat of LABB_CATEGORIES) {
        const el = document.getElementById(`labb-cat-${cat.id}`);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const next = LABB_CATEGORIES.indexOf(cat) + 1;
        const nextCat = LABB_CATEGORIES[next];
        const nextEl = nextCat
          ? document.getElementById(`labb-cat-${nextCat.id}`)
          : null;
        const bottom = nextEl
          ? nextEl.getBoundingClientRect().top + window.scrollY
          : Infinity;
        if (sentinel >= top && sentinel < bottom) {
          setActiveCategory(cat.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-30 -mx-4 border-b border-[var(--ms-border)] bg-[var(--ms-bg)]/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto">
        <span className="ms-mono flex-none text-[var(--ms-text-muted)]">
          GÅ TILL ↓
        </span>
        {LABB_CATEGORIES.map((cat) => {
          const isActive = cat.id === activeCategory;
          const count = getExperimentsByCategory(cat.id).length;
          return (
            <a
              key={cat.id}
              href={`#labb-cat-${cat.id}`}
              className="ms-mono inline-flex flex-none items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-all"
              style={{
                background: isActive ? cat.accentHex : "var(--ms-bg-card)",
                color: isActive ? "var(--ms-bg)" : "var(--ms-text)",
                borderColor: isActive ? cat.accentHex : "var(--ms-border)",
              }}
            >
              <span aria-hidden>{cat.emoji}</span>
              <span>{cat.label.toUpperCase()}</span>
              <span
                className="rounded-full px-1.5 py-0.5 text-[10px]"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.2)"
                    : "var(--ms-bg-subtle)",
                }}
              >
                {count}
              </span>
            </a>
          );
        })}
        <span className="ms-mono ml-auto hidden flex-none text-[var(--ms-text-muted)] sm:inline">
          {LABB_EXPERIMENTS.length} STATIONER
        </span>
      </div>
    </div>
  );
}
