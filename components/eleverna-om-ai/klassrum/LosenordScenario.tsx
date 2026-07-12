"use client";

import { useState } from "react";
import { Phone, Copy, Check, RotateCcw, ChevronRight } from "lucide-react";

type Roll = "rosten" | "du";

const SAMTAL: { roll: Roll; text: string }[] = [
  {
    roll: "rosten",
    text: "Hej älskling, det är mamma. Jag har råkat ut för en grej och behöver att du swishar 2 000 kr. Snabbt, snälla.",
  },
  {
    roll: "du",
    text: "Okej — men först: vad är vårt ord?",
  },
  {
    roll: "rosten",
    text: "… Vad menar du? Skynda dig nu, det är bråttom.",
  },
  {
    roll: "du",
    text: "[lägger på]",
  },
];

const REGLER = [
  "Lätt att minnas",
  "Omöjligt att gissa från sociala medier",
  "Inte husdjurets namn",
];

const BREV_HEM =
  "Hej! I veckan har vi pratat om AI och röstkloning i klassen. Tre sekunder inspelad röst räcker i dag för att skapa en övertygande kopia av någons röst — därför övar vi ett enkelt försvar: ett hemligt familjeord. Bestäm ett ord tillsammans hemma som ni frågar efter om någon ringer och ber om pengar eller känslig information. Ordet ska vara lätt att minnas men omöjligt att gissa från era sociala medier. /Klassläraren";

export function LosenordScenario() {
  const [steg, setSteg] = useState(1);
  const [kopierad, setKopierad] = useState(false);

  const alltVisat = steg >= SAMTAL.length;

  const kopiera = () => {
    void navigator.clipboard.writeText(BREV_HEM).then(() => {
      setKopierad(true);
      window.setTimeout(() => setKopierad(false), 2500);
    });
  };

  return (
    <div className="space-y-8">
      {/* Samtalet, stegat */}
      <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Samtalet — klicka fram replik för replik
        </p>

        <div className="space-y-4">
          {SAMTAL.slice(0, steg).map((replik, i) =>
            replik.roll === "rosten" ? (
              <div key={i} className="flex items-end gap-3 animate-fade-in-up">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 px-5 py-4 sm:max-w-[75%]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Rösten
                  </p>
                  <p className="mt-1 text-xl leading-snug text-gray-900 sm:text-2xl">
                    {replik.text}
                  </p>
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end animate-fade-in-up">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-teal-600 px-5 py-4 text-white sm:max-w-[75%]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-100">
                    Du
                  </p>
                  <p className="mt-1 text-xl leading-snug sm:text-2xl">
                    {replik.text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {!alltVisat && (
            <button
              onClick={() => setSteg((s) => Math.min(s + 1, SAMTAL.length))}
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-teal-700 hover:shadow-2xl"
            >
              Nästa
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          {steg > 1 && (
            <button
              onClick={() => setSteg(1)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              <RotateCcw className="h-4 w-4" />
              Börja om
            </button>
          )}
        </div>
      </div>

      {/* Payoff */}
      {alltVisat && (
        <div className="animate-fade-in-up rounded-2xl bg-gray-900 p-8 shadow-lg sm:p-10">
          <p className="text-2xl font-bold leading-tight text-white sm:text-4xl">
            Tre sekunder röst räcker för en klon.{" "}
            <span className="text-teal-300">
              Ett delat ord går inte att klona.
            </span>
          </p>
        </div>
      )}

      {/* Regler för ordet */}
      <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          Regler för ett bra familjeord
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {REGLER.map((regel) => (
            <li
              key={regel}
              className="flex items-start gap-2 rounded-xl bg-teal-50 px-4 py-3 text-lg font-medium text-teal-900 sm:text-xl"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {regel}
            </li>
          ))}
        </ul>
      </div>

      {/* Brev hem */}
      <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Brev hem — kopiera till veckobrevet
          </h3>
          <button
            onClick={kopiera}
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-700 hover:shadow-lg"
          >
            {kopierad ? (
              <>
                <Check className="h-4 w-4" />
                Kopierat!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Kopiera texten
              </>
            )}
          </button>
        </div>
        <blockquote className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-base leading-relaxed text-gray-700 sm:text-lg">
          {BREV_HEM}
        </blockquote>
      </div>
    </div>
  );
}
