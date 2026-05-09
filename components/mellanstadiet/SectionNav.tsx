"use client";

import { useEffect, useState } from "react";
import { Menu, X, Check } from "lucide-react";
import type { SectionEntry } from "@/lib/mellanstadiet-sections";

export type { SectionEntry };

interface SectionNavProps {
  sections: SectionEntry[];
  accentHex: string;
}

/* Sektionsnavigering — sticky topbar med A-F-stegcirklar.
 * Markerar aktuell sektion (baserat på scroll), visar besökta som klara.
 * På mobil: kollapsbar full-meny.
 */
export function SectionNav({ sections, accentHex }: SectionNavProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [visited, setVisited] = useState<Set<string>>(new Set([sections[0]?.id]));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Hitta den översta synliga sektionen
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Sortera efter dokumentposition
          visible.sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
          const id = visible[0].target.id;
          setActive(id);
          setVisited((prev) => new Set([...prev, id]));
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [sections]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setVisited((prev) => new Set([...prev, id]));
    }
    setOpen(false);
  };

  const idx = sections.findIndex((s) => s.id === active);
  const progressPct =
    sections.length > 1 ? (Math.max(0, idx) / (sections.length - 1)) * 100 : 0;

  return (
    <>
      {/* Desktop sticky bar */}
      <nav
        className="sticky top-0 z-40 hidden border-b border-[#243248] bg-[#0a0e1a]/90 backdrop-blur md:block"
        aria-label="Sektionsnavigering"
      >
        <div className="mx-auto max-w-5xl px-4">
          <ol className="flex items-center justify-between py-3">
            {sections.map((s, i) => {
              const isActive = s.id === active;
              const isVisited = visited.has(s.id);
              return (
                <li
                  key={s.id}
                  className="flex flex-1 items-center"
                >
                  <button
                    type="button"
                    onClick={() => handleJump(s.id)}
                    className="group flex items-center gap-2 transition-all"
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full font-mono text-xs font-bold transition-all ${
                        isActive
                          ? "scale-110 text-[#0a0e1a]"
                          : isVisited
                          ? "text-[#0a0e1a]"
                          : "text-[#94a3b8]"
                      }`}
                      style={{
                        background: isActive
                          ? accentHex
                          : isVisited
                          ? `${accentHex}80`
                          : "#1a2235",
                        boxShadow: isActive
                          ? `0 0 0 4px ${accentHex}25`
                          : "none",
                      }}
                    >
                      {isVisited && !isActive ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        s.step
                      )}
                    </span>
                    <span
                      className={`hidden text-sm font-medium transition-colors lg:inline ${
                        isActive
                          ? "text-white"
                          : "text-[#94a3b8] group-hover:text-white"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                  {i < sections.length - 1 && (
                    <span
                      aria-hidden
                      className="mx-2 h-px flex-1 bg-[#243248]"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        {/* Progress-line */}
        <div className="h-px w-full bg-[#243248]">
          <div
            className="h-px transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: accentHex,
            }}
          />
        </div>
      </nav>

      {/* Mobile sticky bar */}
      <nav
        className="sticky top-0 z-40 border-b border-[#243248] bg-[#0a0e1a]/90 backdrop-blur md:hidden"
        aria-label="Sektionsnavigering"
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <span
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full font-mono text-base font-bold text-[#0a0e1a]"
            style={{ background: accentHex }}
            aria-hidden
          >
            {sections.find((s) => s.id === active)?.step}
          </span>
          <div className="flex-1">
            <div className="ms-mono text-[10px] text-[#94a3b8]">
              STEG {Math.max(1, idx + 1)} / {sections.length}
            </div>
            <div className="text-sm font-semibold text-white">
              {sections.find((s) => s.id === active)?.title}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[#243248] bg-[#1a2235] text-white transition-colors hover:bg-[#243248]"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Progress-line */}
        <div className="h-1 w-full bg-[#243248]">
          <div
            className="h-1 transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: accentHex,
            }}
          />
        </div>

        {/* Drop-down meny */}
        {open && (
          <div className="ms-fadein border-t border-[#243248] bg-[#0d1322]">
            <ul>
              {sections.map((s) => {
                const isActive = s.id === active;
                const isVisited = visited.has(s.id);
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => handleJump(s.id)}
                      className="flex min-h-[52px] w-full items-center gap-3 border-b border-[#243248] px-4 py-4 text-left last:border-0 hover:bg-[#1a2235] active:bg-[#1a2235]"
                    >
                      <span
                        className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-mono text-sm font-bold transition-all ${
                          isActive ? "text-[#0a0e1a]" : "text-[#0a0e1a]"
                        }`}
                        style={{
                          background: isActive
                            ? accentHex
                            : isVisited
                            ? `${accentHex}80`
                            : "#243248",
                          color: isVisited || isActive ? "#0a0e1a" : "#94a3b8",
                        }}
                      >
                        {isVisited && !isActive ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          s.step
                        )}
                      </span>
                      <span
                        className={`flex-1 ${
                          isActive ? "font-semibold text-white" : "text-[#cbd5e1]"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
