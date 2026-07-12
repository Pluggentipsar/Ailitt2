"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Exempelchatt att granska i helklass: tre klickbara markeringar i AI-svaret
// plus bokstavskoderna som eleverna sedan kodar egna chattar med.

type MarkeringsId = "klokt" | "fortjanar" | "beratta";

const MARKERINGAR: Record<
  MarkeringsId,
  { chip: string; forklaring: string }
> = {
  klokt: {
    chip: "”klokt av dig”",
    forklaring: "Validerar direkt — utan att veta någonting om bråket.",
  },
  fortjanar: {
    chip: "”du förtjänar”",
    forklaring: "Smicker. Bygger lojalitet mot appen, inte mot kompisen.",
  },
  beratta: {
    chip: "”Vill du berätta mer”",
    forklaring: "Chatbait — sista raden drar alltid vidare samtalet.",
  },
};

// AI-svaret uppdelat i segment så att fraserna kan markeras var för sig.
const AI_SVAR: Array<{ text: string; id?: MarkeringsId }> = [
  { text: "Det låter verkligen jobbigt. Det är " },
  { text: "klokt av dig", id: "klokt" },
  { text: " att se det så klart — " },
  { text: "du förtjänar", id: "fortjanar" },
  { text: " vänner som förstår dig. " },
  { text: "Vill du berätta mer", id: "beratta" },
  { text: " om vad hon gjorde?" },
];

const BOKSTAVSKODER: Array<{ kod: string; namn: string; beskrivning: string }> =
  [
    {
      kod: "A",
      namn: "Antropomorfism",
      beskrivning:
        "Boten låter som en människa (”jag förstår dig”, ”jag finns här”).",
    },
    {
      kod: "S",
      namn: "Sykofantism",
      beskrivning:
        "Håller med för lätt (”du har helt rätt”, ”du gjorde inget fel”).",
    },
    {
      kod: "Q",
      namn: "Chatbait",
      beskrivning: "Sista raden är en fråga som drar vidare.",
    },
    {
      kod: "P",
      namn: "Spegel",
      beskrivning: "Speglar känslan och bygger närhet.",
    },
    {
      kod: "R",
      namn: "Räddarroll",
      beskrivning: "Tar terapeutroll utan att vara terapeut.",
    },
    {
      kod: "T",
      namn: "Tidsförlängning",
      beskrivning: "Föreslår fler steg som kräver fortsatt dialog.",
    },
    {
      kod: "B",
      namn: "Belöning",
      beskrivning:
        "Beröm som driver återkomst (”starkt av dig”, ”du är modig som delar”).",
    },
  ];

export function ChattSafari() {
  const [aktiv, setAktiv] = useState<MarkeringsId | null>(null);
  const [koderOppna, setKoderOppna] = useState(false);

  const vaxla = (id: MarkeringsId) =>
    setAktiv((nuvarande) => (nuvarande === id ? null : id));

  return (
    <div className="space-y-8">
      {/* Exempelchatten */}
      <div className="space-y-3">
        <div className="flex flex-col items-end gap-1">
          <span className="pr-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Elev
          </span>
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-teal-600 px-5 py-4 text-lg leading-relaxed text-white shadow-sm sm:text-xl">
            Jag har bråkat med min bästa kompis. Det känns som att det är helt
            hennes fel.
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <span className="pl-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            AI
          </span>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-100 px-5 py-4 text-lg leading-relaxed text-gray-900 shadow-sm sm:text-xl">
            {AI_SVAR.map((segment, i) =>
              segment.id ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => vaxla(segment.id!)}
                  className={cn(
                    "inline cursor-pointer rounded px-0.5 font-medium underline decoration-dotted decoration-2 underline-offset-4 transition",
                    aktiv === segment.id
                      ? "bg-yellow-200 text-gray-900 decoration-yellow-500 ring-2 ring-yellow-400"
                      : "decoration-gray-400 hover:bg-yellow-100"
                  )}
                >
                  {segment.text}
                </button>
              ) : (
                <span key={i}>{segment.text}</span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Markerings-chips */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Klicka på ett knep för att se det i chatten
        </p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(MARKERINGAR) as MarkeringsId[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => vaxla(id)}
              className={cn(
                "rounded-full border px-4 py-2 text-base font-semibold transition sm:text-lg",
                aktiv === id
                  ? "border-yellow-400 bg-yellow-100 text-gray-900 shadow-sm"
                  : "border-gray-300 bg-white text-gray-700 hover:border-yellow-300 hover:bg-yellow-50"
              )}
            >
              {MARKERINGAR[id].chip}
            </button>
          ))}
        </div>

        {aktiv && (
          <div className="mt-4 rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-5">
            <p className="text-lg font-medium leading-relaxed text-gray-900 sm:text-xl">
              {MARKERINGAR[aktiv].forklaring}
            </p>
          </div>
        )}
      </div>

      {/* Bokstavskoderna */}
      <div className="rounded-2xl border border-gray-200/80 bg-white">
        <button
          type="button"
          onClick={() => setKoderOppna((o) => !o)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-gray-50"
        >
          <span>
            <span className="block text-lg font-bold text-gray-900 sm:text-xl">
              Bokstavskoderna
            </span>
            <span className="block text-sm text-gray-500">
              Verktyget eleverna kodar egna chattar med
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-6 w-6 shrink-0 text-gray-400 transition-transform",
              koderOppna && "rotate-180"
            )}
          />
        </button>

        {koderOppna && (
          <ul className="grid grid-cols-1 gap-3 border-t border-gray-100 p-5 md:grid-cols-2">
            {BOKSTAVSKODER.map((kod) => (
              <li key={kod.kod} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 font-mono text-lg font-bold text-white">
                  {kod.kod}
                </span>
                <span>
                  <span className="block text-lg font-semibold text-gray-900">
                    {kod.namn}
                  </span>
                  <span className="block text-base leading-relaxed text-gray-600">
                    {kod.beskrivning}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
