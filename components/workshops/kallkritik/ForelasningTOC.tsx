"use client";

import { useEffect, useState } from "react";
import { List, X, ChevronRight } from "lucide-react";
import type { Act } from "@/lib/workshops/kallkritik/forelasningen";

// Flytande TOC för föreläsningssidan. Knapp nere till höger öppnar en
// overlay med alla 97 slides grupperade per akt. Klick på slide stänger
// overlayen och scrollar dit. Aktiv slide markeras via IntersectionObserver.

export function ForelasningTOC({ acts }: { acts: Act[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  // Per default expanderad är akten där aktuell slide ligger.
  const [expandedAct, setExpandedAct] = useState<string | null>(null);

  // Stäng vid Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Förhindra body-scroll när overlayen är öppen.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // IntersectionObserver för att markera aktuell slide.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Hitta den slide som syns högst upp på skärmen.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Ta den som är närmast toppen
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topmost.target.id);
          // Expandera akten som innehåller aktuell slide
          for (const act of acts) {
            if (act.slides.some((s) => s.id === topmost.target.id)) {
              setExpandedAct(act.id);
              break;
            }
          }
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const act of acts) {
      for (const slide of act.slides) {
        const el = document.getElementById(slide.id);
        if (el) observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [acts]);

  const handleSlideClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleActClick = (actId: string) => {
    setOpen(false);
    const el = document.getElementById(actId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${actId}`);
    }
  };

  return (
    <>
      {/* Flytande knapp */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-stone-900 text-workshop-canvas font-semibold text-sm shadow-2xl hover:bg-stone-800 transition-all hover:scale-105 print:hidden"
        aria-label="Öppna innehållsförteckning"
      >
        <List className="h-4 w-4" />
        <span className="hidden sm:inline">Innehåll</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 print:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="toc-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"
            aria-label="Stäng innehållsförteckning"
          />

          {/* Panel — slide-in från höger på desktop, full-bredd på mobil */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-workshop-canvas border-l-2 border-stone-300 shadow-2xl flex flex-col animate-fade-in-down">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-stone-200 shrink-0">
              <div>
                <h2
                  id="toc-title"
                  className="font-display text-2xl text-stone-900 leading-none"
                >
                  Innehåll
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  {acts.reduce((sum, a) => sum + a.slides.length, 0)} slides ·{" "}
                  {acts.length} akter
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-stone-100"
                aria-label="Stäng"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Lista — scrollbar */}
            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <ul className="space-y-2">
                {acts.map((act) => {
                  const isExpanded = expandedAct === act.id;
                  const hasActiveSlide = act.slides.some(
                    (s) => s.id === activeId
                  );
                  return (
                    <li key={act.id}>
                      <div className="flex items-stretch rounded-xl overflow-hidden border border-stone-200">
                        {/* Akt-rubrik — klick scrollar till akt-divider */}
                        <button
                          type="button"
                          onClick={() => handleActClick(act.id)}
                          className={`flex-1 px-3 py-2.5 text-left hover:bg-stone-100 transition-colors ${
                            hasActiveSlide
                              ? "bg-stone-900/5"
                              : ""
                          }`}
                        >
                          <div className="text-[10px] uppercase tracking-wider font-bold text-stone-500">
                            Akt {act.number}
                          </div>
                          <div className="font-display text-lg text-stone-900 leading-tight">
                            {act.title}
                          </div>
                        </button>
                        {/* Expandera/kollaps */}
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedAct(isExpanded ? null : act.id)
                          }
                          className="px-3 border-l border-stone-200 hover:bg-stone-100 transition-colors"
                          aria-label={
                            isExpanded
                              ? "Dölj slides i denna akt"
                              : "Visa slides i denna akt"
                          }
                          aria-expanded={isExpanded}
                        >
                          <ChevronRight
                            className={`h-4 w-4 text-stone-500 transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Slides i akten */}
                      {isExpanded && (
                        <ul className="mt-1 ml-3 border-l-2 border-stone-200 pl-3 space-y-0.5">
                          {act.slides.map((slide) => {
                            const isActive = slide.id === activeId;
                            return (
                              <li key={slide.id}>
                                <button
                                  type="button"
                                  onClick={() => handleSlideClick(slide.id)}
                                  className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                                    isActive
                                      ? "bg-stone-900 text-workshop-canvas font-semibold"
                                      : "text-stone-700 hover:bg-stone-100"
                                  }`}
                                >
                                  <span
                                    className={`font-mono text-[10px] mr-2 ${
                                      isActive
                                        ? "text-workshop-canvas/70"
                                        : "text-stone-400"
                                    }`}
                                  >
                                    {String(slide.index).padStart(2, "0")}
                                  </span>
                                  <span className="leading-tight">
                                    {slide.heading ??
                                      (slide.display
                                        ? slide.display
                                            .replace(/\s+/g, " ")
                                            .slice(0, 60) + "…"
                                        : slide.chapter ?? "(slide)")}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
