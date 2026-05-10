"use client";

import { useState } from "react";
import { Award, Printer, Edit3, Sparkles } from "lucide-react";

/* Printbart diplom — eleven skriver in sitt namn och kan skriva ut.
 * Print-CSS gör att bara diplomkortet visas på papper.
 */
export function DiplomMall({
  accentHex = "#06b6d4",
}: {
  accentHex?: string;
}) {
  const [namn, setNamn] = useState("");
  const [editing, setEditing] = useState(true);
  const datum = new Date().toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const print = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-white print:hidden"
        style={{ background: accentHex }}
      >
        <Award className="h-4 w-4" />
        <div className="ms-mono font-bold">DIPLOM</div>
      </div>

      <div className="p-6">
        {editing && (
          <div className="mb-6 print:hidden">
            <label className="ms-mono mb-2 block text-[#94a3b8]">
              SKRIV DITT NAMN
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                value={namn}
                onChange={(e) => setNamn(e.target.value)}
                placeholder="T.ex. Maja Andersson"
                className="flex-1 rounded-lg border border-[#243248] bg-[#1a2235] px-4 py-3 text-white placeholder-[#64748b] outline-none focus:border-white"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setEditing(false)}
                disabled={!namn.trim()}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Sparkles className="h-4 w-4" />
                Skapa diplom
              </button>
            </div>
          </div>
        )}

        {/* Själva diplomet */}
        <div
          className="diplom-card relative overflow-hidden rounded-2xl border-4 border-double bg-white p-8 text-slate-900 shadow-xl sm:p-12"
          style={{ borderColor: accentHex }}
        >
          {/* Ornament-cirklar i hörnen */}
          <div
            aria-hidden
            className="absolute -left-12 -top-12 h-32 w-32 rounded-full opacity-10"
            style={{ background: accentHex }}
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-10"
            style={{ background: "#fcd34d" }}
          />

          <div className="relative text-center">
            <Award
              className="mx-auto mb-3 h-12 w-12"
              style={{ color: accentHex }}
            />
            <div
              className="mb-1 text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: accentHex }}
            >
              Diplom
            </div>
            <div
              className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              AI-litteracitet
            </div>

            <p className="mb-3 text-lg text-slate-700">tilldelas</p>

            <div
              className="mb-6 inline-block border-b-4 px-8 py-2 text-3xl font-bold sm:text-5xl"
              style={{
                borderColor: accentHex,
                fontFamily: "'Fredoka', sans-serif",
              }}
            >
              {namn || "_________________"}
            </div>

            <p className="mx-auto mb-6 max-w-md leading-relaxed text-slate-700">
              för att ha genomgått kursen{" "}
              <strong>AI-litteracitet för åk 4–6</strong> — sju lektioner om
              att förstå, granska, använda och forma framtidens AI.
            </p>

            <div className="mx-auto mb-6 max-w-md">
              <div className="text-xs uppercase tracking-wider text-slate-500">
                INNEHÅLLET HAR OMFATTAT
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700">
                <li>1. Berättelsen om AI</li>
                <li>2. Vad är AI</li>
                <li>3. Använda AI</li>
                <li>4. Granska AI</li>
                <li>5. Etik och ansvar</li>
                <li>6. Människa & maskin</li>
                <li className="col-span-2">7. Framtid och samhälle</li>
              </ul>
            </div>

            <div className="mx-auto max-w-md border-t border-slate-200 pt-4">
              <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="text-left">
                  <div className="uppercase tracking-wider">Datum</div>
                  <div className="text-base text-slate-900">{datum}</div>
                </div>
                <div className="text-right">
                  <div className="uppercase tracking-wider">Lärare</div>
                  <div className="text-base text-slate-900">
                    _____________________
                  </div>
                </div>
              </div>
            </div>

            <p
              className="mt-6 text-xs italic text-slate-500"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              &ldquo;Du sitter inte här för att lära dig vara bättre än AI.
              Du sitter här för att lära dig vara mer människa.&rdquo;
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          {!editing && (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="ms-btn ms-btn-secondary"
            >
              <Edit3 className="h-4 w-4" />
              Ändra namn
            </button>
          )}
          {namn.trim() && (
            <button
              type="button"
              onClick={print}
              className="ms-btn ms-btn-primary"
            >
              <Printer className="h-4 w-4" />
              Skriv ut diplomet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
