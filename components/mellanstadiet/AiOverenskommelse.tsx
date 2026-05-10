"use client";

import { useState } from "react";
import { Plus, X, Printer, FileText } from "lucide-react";

/* Klassens AI-överenskommelse — interaktiv mall där klassen kan rösta
 * fram regler. Eleven kan lägga till egna regler eller välja från en
 * lista med förslag. Resultatet kan printas/sparas.
 */

const FORSLAG = [
  "Vi berättar alltid när vi använt AI.",
  "Vi tänker själv först — sedan använder vi AI.",
  "Vi granskar AI:s svar mot en oberoende källa.",
  "Vi delar inte personlig info (namn, adress) med AI.",
  "Vi använder inte AI för att vara elaka mot någon.",
  "Vi pratar med vuxna när AI känns konstigt eller obehagligt.",
  "Vi använder AI för att lära oss — inte för att slippa lära oss.",
  "Vi respekterar att alla har olika tillgång till AI.",
  "Vi kommer inte ihåg AI som en kompis — den är ett verktyg.",
  "Vi använder AI medvetet — inte automatiskt för varje fråga.",
];

interface Rule {
  id: string;
  text: string;
}

export function AiOverenskommelse({
  accentHex = "#eab308",
}: {
  accentHex?: string;
}) {
  const [rules, setRules] = useState<Rule[]>([]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);

  const add = (text: string) => {
    const t = text.trim();
    if (!t) return;
    if (rules.some((r) => r.text === t)) return;
    setRules([...rules, { id: `r${nextId}`, text: t }]);
    setNextId(nextId + 1);
  };

  const remove = (id: string) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  const print = () => {
    if (typeof window !== "undefined") window.print();
  };

  const remainingForslag = FORSLAG.filter(
    (f) => !rules.some((r) => r.text === f)
  );

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-[#0a0e1a]"
        style={{ background: accentHex }}
      >
        <FileText className="h-4 w-4" />
        <div className="ms-mono font-bold">
          KLASSENS AI-ÖVERENSKOMMELSE
        </div>
      </div>

      <div className="p-6">
        <p className="mb-5 text-sm leading-relaxed text-[#cbd5e1]">
          Klassen formulerar tillsammans 5–10 regler för hur AI används i
          klassrummet. Klicka på förslagen nedan eller skriv egna. När ni är
          nöjda — skriv ut och sätt upp i klassrummet.
        </p>

        {/* Egna regler */}
        <div className="mb-6">
          <div className="ms-mono mb-2 text-[#94a3b8]">
            VÅRA REGLER ({rules.length})
          </div>
          {rules.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#475569] p-8 text-center text-[#94a3b8]">
              Inga regler än. Klicka på förslag eller skriv egna nedan.
            </div>
          ) : (
            <ol className="space-y-2">
              {rules.map((r, i) => (
                <li
                  key={r.id}
                  className="flex items-start gap-3 rounded-lg border bg-[#1a2235] p-4"
                  style={{ borderColor: `${accentHex}60` }}
                >
                  <span
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full font-mono text-sm font-bold text-[#0a0e1a]"
                    style={{ background: accentHex }}
                  >
                    {i + 1}
                  </span>
                  <p className="flex-1 leading-relaxed text-white">
                    {r.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(r.id)}
                    className="rounded-md p-1 text-[#94a3b8] hover:bg-[#243248] hover:text-rose-300"
                    aria-label="Ta bort regel"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Egen text */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add(input);
            setInput("");
          }}
          className="mb-6 flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Skriv en egen regel…"
            className="flex-1 rounded-lg border border-[#243248] bg-[#1a2235] px-4 py-3 text-white placeholder-[#64748b] outline-none transition-colors focus:border-[#fcd34d]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            Lägg till
          </button>
        </form>

        {/* Förslag */}
        {remainingForslag.length > 0 && (
          <div className="mb-5">
            <div className="ms-mono mb-2 text-[#94a3b8]">
              FÖRSLAG ATT VÄLJA FRÅN
            </div>
            <div className="flex flex-wrap gap-2">
              {remainingForslag.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => add(f)}
                  className="rounded-md border border-[#243248] bg-[#1a2235] px-3 py-2 text-left text-sm text-white transition-all hover:border-[#fcd34d] hover:bg-[#243248]"
                >
                  + {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action */}
        {rules.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#243248] pt-5">
            <div className="text-sm text-[#94a3b8]">
              {rules.length < 5
                ? `${rules.length} av minst 5 regler. Lägg till ${5 - rules.length} till.`
                : rules.length > 10
                ? `${rules.length} regler — kanske för många?`
                : `${rules.length} regler — bra balanserat.`}
            </div>
            <button
              type="button"
              onClick={print}
              className="ms-btn ms-btn-secondary"
            >
              <Printer className="h-4 w-4" />
              Skriv ut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
