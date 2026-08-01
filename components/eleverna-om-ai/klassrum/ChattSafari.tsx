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

  const SMA = "clamp(0.65rem, 1.5vh, 1rem)";
  const BUBBLA = "clamp(0.9rem, 2.5vh, 2rem)";

  return (
    <div className="mx-auto w-full max-w-[68rem] space-y-[2.5vh]">
      {/* Exempelchatten — de markerade orden är klickbara, och det är hela
          poängen: läraren pekar ut ett knep i taget medan klassen tittar. */}
      <div className="space-y-[1.5vh]">
        <div>
          <div
            className="mb-1 uppercase tracking-wider text-stone-500"
            style={{ fontSize: SMA }}
          >
            Elev
          </div>
          <div
            className="rounded-3xl rounded-bl-md bg-stone-100 px-6 py-4 leading-snug text-stone-800"
            style={{ fontSize: BUBBLA }}
          >
            Jag har bråkat med min bästa kompis. Det känns som att det är helt
            hennes fel.
          </div>
        </div>

        <div>
          <div
            className="mb-1 uppercase tracking-wider text-stone-500"
            style={{ fontSize: SMA }}
          >
            AI
          </div>
          <div
            className="rounded-3xl rounded-br-md px-6 py-4 leading-snug text-stone-800"
            style={{
              background: "var(--workshop-lila-soft)",
              fontSize: BUBBLA,
            }}
          >
            {AI_SVAR.map((segment, i) =>
              segment.id ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => vaxla(segment.id!)}
                  className={cn(
                    "inline cursor-pointer rounded px-1 font-medium underline decoration-dotted decoration-2 underline-offset-4 transition",
                    aktiv === segment.id
                      ? "text-stone-900 decoration-transparent"
                      : "decoration-stone-500 hover:bg-white/50"
                  )}
                  style={
                    aktiv === segment.id
                      ? { background: "var(--workshop-senap-soft)" }
                      : undefined
                  }
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
        <p
          className="mb-2 text-center uppercase tracking-widest text-stone-500"
          style={{ fontSize: SMA }}
        >
          Klicka på ett knep för att se det i chatten
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {(Object.keys(MARKERINGAR) as MarkeringsId[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => vaxla(id)}
              className={cn(
                "rounded-full border-2 px-4 py-1.5 font-semibold transition",
                aktiv === id
                  ? "border-stone-900 bg-stone-900 text-workshop-canvas"
                  : "border-stone-300 bg-white/60 text-stone-600 hover:border-stone-500"
              )}
              style={{ fontSize: "clamp(0.75rem, 1.9vh, 1.35rem)" }}
            >
              {MARKERINGAR[id].chip}
            </button>
          ))}
        </div>

        {aktiv && (
          <div
            className="mx-auto mt-[1.5vh] max-w-[54ch] rounded-2xl border-l-4 px-5 py-3"
            style={{
              borderColor: "var(--workshop-senap)",
              background: "rgba(255,255,255,0.55)",
            }}
          >
            <p
              className="text-pretty leading-snug text-stone-800"
              style={{ fontSize: "clamp(0.85rem, 2.2vh, 1.7rem)" }}
            >
              {MARKERINGAR[aktiv].forklaring}
            </p>
          </div>
        )}
      </div>

      {/* Bokstavskoderna — hopfällda, för de behövs först när eleverna ska
          koda egna chattar. På skärmen är de referens, inte innehåll. */}
      <div className="mx-auto max-w-[60rem] rounded-2xl border border-stone-300 bg-white/50">
        <button
          type="button"
          onClick={() => setKoderOppna((o) => !o)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-2.5 text-left transition hover:bg-white/60"
        >
          <span
            className="font-semibold text-stone-700"
            style={{ fontSize: "clamp(0.75rem, 1.9vh, 1.3rem)" }}
          >
            Bokstavskoderna — verktyget för egna chattar
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-stone-400 transition-transform",
              koderOppna && "rotate-180"
            )}
          />
        </button>

        {koderOppna && (
          <ul className="grid grid-cols-1 gap-2 border-t border-stone-200 p-4 md:grid-cols-2">
            {BOKSTAVSKODER.map((kod) => (
              <li key={kod.kod} className="flex items-start gap-3">
                <span
                  className="flex shrink-0 items-center justify-center rounded-lg bg-stone-900 px-2 py-0.5 font-display text-workshop-canvas"
                  style={{ fontSize: "clamp(0.85rem, 2.1vh, 1.5rem)" }}
                >
                  {kod.kod}
                </span>
                <span>
                  <span
                    className="block font-semibold text-stone-800"
                    style={{ fontSize: SMA }}
                  >
                    {kod.namn}
                  </span>
                  <span
                    className="block leading-snug text-stone-600"
                    style={{ fontSize: SMA }}
                  >
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
