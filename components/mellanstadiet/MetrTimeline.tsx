"use client";

import { useEffect, useRef, useState } from "react";

/* METR Time Horizon — visualisering av AI:s autonom-uppgiftslängd 2019→2026.
 * Logaritmisk skala (annars hamnar 2019 osynlig). Animeras vid scroll-into-view.
 */

interface DataPoint {
  year: number;
  /** Sekunder för uppgift som AI klarar med 50% framgångsrate */
  seconds: number;
  /** Visningstext för label */
  label: string;
  highlight?: boolean;
}

const DATA: DataPoint[] = [
  { year: 2019, seconds: 2, label: "2 sek" },
  { year: 2020, seconds: 8, label: "~8 sek" },
  { year: 2021, seconds: 30, label: "~30 sek" },
  { year: 2022, seconds: 180, label: "3 min" },
  { year: 2023, seconds: 600, label: "10 min" },
  { year: 2024, seconds: 3000, label: "50 min" },
  { year: 2025, seconds: 14400, label: "4 tim" },
  { year: 2026, seconds: 50400, label: "14 tim", highlight: true },
];

export function MetrTimeline({ accentHex = "#a5b4fc" }: { accentHex?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Logaritmisk normalisering — så 2 sek till 50000 sek får olika "höjder"
  const minLog = Math.log(DATA[0].seconds);
  const maxLog = Math.log(DATA[DATA.length - 1].seconds);
  const heightPct = (sec: number) => {
    return ((Math.log(sec) - minLog) / (maxLog - minLog)) * 100;
  };

  return (
    <div
      ref={ref}
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="px-5 py-2"
        style={{ background: accentHex }}
      >
        <div className="ms-mono font-bold text-[var(--ms-bg)]">
          METR TIME HORIZON · UPPGIFTER AI KAN GÖRA SJÄLV
        </div>
      </div>

      <div className="p-6">
        <p className="mb-6 text-sm leading-relaxed text-[var(--ms-text-body)]">
          Forskningsinstitutet METR mäter hur långa uppgifter AI-system kan
          klara <strong>autonomt</strong> (med 50% framgångsrate). Y-axeln är
          logaritmisk — annars skulle 2019 vara osynlig.
        </p>

        {/* Stapeldiagram */}
        <div className="relative h-64 sm:h-80">
          {/* Ref-linjer */}
          <div className="absolute inset-x-0 top-0 flex flex-col justify-between text-[10px] text-[var(--ms-text-dim)]">
            <div className="border-b border-dashed border-[var(--ms-border)] pb-1">
              <span className="ms-mono">14 TIM</span>
            </div>
          </div>
          <div className="absolute inset-x-0 top-1/3 border-b border-dashed border-[var(--ms-border)]">
            <span className="ms-mono text-[10px] text-[var(--ms-text-dim)]">
              50 MIN
            </span>
          </div>
          <div className="absolute inset-x-0 top-2/3 border-b border-dashed border-[var(--ms-border)]">
            <span className="ms-mono text-[10px] text-[var(--ms-text-dim)]">
              ~3 MIN
            </span>
          </div>

          {/* Staplar */}
          <div className="absolute inset-0 flex items-end justify-around gap-2 px-2 pb-8">
            {DATA.map((d, i) => {
              const targetH = heightPct(d.seconds);
              const animatedH = visible ? targetH : 0;
              const delay = i * 80;
              return (
                <div
                  key={d.year}
                  className="group relative flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div
                    className="ms-mono mb-1 text-[10px] text-[var(--ms-text)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      opacity: visible ? 1 : 0,
                      transitionDelay: `${delay + 800}ms`,
                    }}
                  >
                    {d.label}
                  </div>
                  <div
                    className="w-full rounded-t-md transition-all duration-700 ease-out"
                    style={{
                      height: `${animatedH}%`,
                      background: d.highlight
                        ? `linear-gradient(to top, ${accentHex}, #fcd34d)`
                        : `linear-gradient(to top, ${accentHex}80, ${accentHex})`,
                      transitionDelay: `${delay}ms`,
                      boxShadow: d.highlight
                        ? `0 0 16px ${accentHex}40`
                        : "none",
                    }}
                    aria-label={`${d.year}: ${d.label}`}
                  />
                </div>
              );
            })}
          </div>

          {/* X-axel etiketter */}
          <div className="absolute inset-x-0 bottom-0 flex justify-around gap-2 px-2">
            {DATA.map((d) => (
              <div
                key={d.year}
                className="ms-mono flex-1 text-center text-[10px] text-[var(--ms-text-muted)] sm:text-xs"
              >
                {d.year}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">FÖRDUBBLING</div>
            <div className="text-2xl font-bold text-[var(--ms-text)]">~7 mån</div>
            <div className="text-xs text-[var(--ms-text-muted)]">
              Tidshorisonten dubblas ungefär var 7:e månad sedan 2019.
            </div>
          </div>
          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">FRÅN → TILL</div>
            <div className="text-2xl font-bold text-[var(--ms-text)]">25 200×</div>
            <div className="text-xs text-[var(--ms-text-muted)]">
              2026 klarar AI uppgifter som är ~25 000 gånger längre än 2019.
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-4 text-sm leading-relaxed text-[#fde68a]">
          <strong className="text-[var(--ms-text)]">Vad betyder det?</strong> Om trenden
          fortsätter — vilket vi inte vet — kan AI om 2 år göra uppgifter som
          tar veckor. Om 5 år: månader. Det här är varför du behöver förstå AI
          nu — det vänder inte.
        </div>
      </div>
    </div>
  );
}
