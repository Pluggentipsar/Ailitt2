"use client";

import { useState, useMemo } from "react";
import { Check, X, RotateCcw, Trophy, Sparkles } from "lucide-react";

interface TimelineCard {
  id: string;
  title: string;
  description: string;
  year: number;
  type: "fantasy" | "reality";
}

const CARDS: TimelineCard[] = [
  // FANTASY
  {
    id: "F1",
    title: "Frankenstein",
    description: "Mary Shelley skriver romanen om mannen som skapar liv av döda kroppar",
    year: 1818,
    type: "fantasy",
  },
  {
    id: "F3",
    title: "Asimovs robotlagar",
    description: "Isaac Asimov skriver de första reglerna för hur robotar ska bete sig",
    year: 1942,
    type: "fantasy",
  },
  {
    id: "F4",
    title: "2001: A Space Odyssey",
    description: "Stanley Kubricks film med datorn HAL som vägrar lyda",
    year: 1968,
    type: "fantasy",
  },
  {
    id: "F5",
    title: "Star Wars: R2-D2",
    description: "Den älskade roboten dyker upp i den första Star Wars-filmen",
    year: 1977,
    type: "fantasy",
  },
  {
    id: "F6",
    title: "Terminator",
    description: "AI:n Skynet vill utrota mänskligheten — i en film",
    year: 1984,
    type: "fantasy",
  },
  {
    id: "F8",
    title: "Wall-E",
    description: "Pixar-filmen om den ensamma sopsorteringsroboten",
    year: 2008,
    type: "fantasy",
  },
  {
    id: "F9",
    title: "Iron Man: JARVIS",
    description: "Tony Starks AI-assistent i den första Iron Man-filmen",
    year: 2008,
    type: "fantasy",
  },
  {
    id: "F10",
    title: "Big Hero 6: Baymax",
    description: "Den stora vita vårdroboten",
    year: 2014,
    type: "fantasy",
  },
  // REALITY
  {
    id: "V1",
    title: "Turing-testet",
    description: "Alan Turing föreslår: kan en dator lura en människa?",
    year: 1950,
    type: "reality",
  },
  {
    id: "V2",
    title: 'Begreppet "AI" myntas',
    description: "Forskare på Dartmouth hittar på ordet 'Artificial Intelligence'",
    year: 1956,
    type: "reality",
  },
  {
    id: "V3",
    title: "ELIZA",
    description: "Världens första chatbot — låtsas vara en psykolog",
    year: 1966,
    type: "reality",
  },
  {
    id: "V4",
    title: "Deep Blue slår Kasparov",
    description: "En IBM-dator slår världsmästaren i schack",
    year: 1997,
    type: "reality",
  },
  {
    id: "V5",
    title: "AlexNet",
    description: "AI-genombrott i bildigenkänning. Plötsligt fungerar det",
    year: 2012,
    type: "reality",
  },
  {
    id: "V6",
    title: "AlphaGo slår Lee Sedol",
    description: "AI vinner i Go — drag 37 blir legend",
    year: 2016,
    type: "reality",
  },
  {
    id: "V7",
    title: "Transformer-arkitekturen",
    description: "Google-forskare publicerar idén bakom dagens AI-system",
    year: 2017,
    type: "reality",
  },
  {
    id: "V9",
    title: "ChatGPT lanseras",
    description: "1 miljon användare på 5 dagar. Snabbaste tekniken någonsin.",
    year: 2022,
    type: "reality",
  },
  {
    id: "V11",
    title: "Will Smith eats spaghetti",
    description: "Den första virala AI-videon — konstig och rolig",
    year: 2023,
    type: "reality",
  },
  {
    id: "V12",
    title: "Nobelpris till AI",
    description: "Hinton (fysik), Hassabis och Jumper (kemi) — första AI-nobelpriserna",
    year: 2024,
    type: "reality",
  },
  {
    id: "V13",
    title: "Computer Use",
    description: "AI som kan klicka på saker i en webbläsare. Som du.",
    year: 2024,
    type: "reality",
  },
  {
    id: "V14",
    title: "Sora-appen stängs",
    description: "OpenAI tvingas stänga Sora efter deepfake-protester",
    year: 2026,
    type: "reality",
  },
];

// Tidslinjens icke-linjära buckets — varje "kolumn" representerar ett år eller år-intervall.
const YEAR_BUCKETS: { label: string; year: number }[] = [
  { label: "1800-tal", year: 1818 },
  { label: "1940-tal", year: 1942 },
  { label: "1950-tal", year: 1956 },
  { label: "1960-tal", year: 1966 },
  { label: "1970-tal", year: 1977 },
  { label: "1980-tal", year: 1984 },
  { label: "1990-tal", year: 1997 },
  { label: "2008", year: 2008 },
  { label: "2012", year: 2012 },
  { label: "2014–17", year: 2016 },
  { label: "2022", year: 2022 },
  { label: "2023", year: 2023 },
  { label: "2024", year: 2024 },
  { label: "2026", year: 2026 },
];

interface Placement {
  cardId: string;
  bucketIdx: number;
  row: "fantasy" | "reality";
}

function getNearestBucketIdx(year: number): number {
  let nearestIdx = 0;
  let nearestDist = Infinity;
  YEAR_BUCKETS.forEach((b, i) => {
    const d = Math.abs(b.year - year);
    if (d < nearestDist) {
      nearestDist = d;
      nearestIdx = i;
    }
  });
  return nearestIdx;
}

export function TidslinjePussel({ accentHex = "#6366f1" }: { accentHex?: string }) {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [validated, setValidated] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const placedIds = useMemo(
    () => new Set(placements.map((p) => p.cardId)),
    [placements]
  );
  const remainingCards = useMemo(
    () => CARDS.filter((c) => !placedIds.has(c.id)),
    [placedIds]
  );

  const placeCard = (cardId: string, bucketIdx: number, row: "fantasy" | "reality") => {
    setPlacements((prev) => {
      const filtered = prev.filter((p) => p.cardId !== cardId);
      return [...filtered, { cardId, bucketIdx, row }];
    });
    setActiveCard(null);
  };

  const removeCard = (cardId: string) => {
    if (validated) return;
    setPlacements((prev) => prev.filter((p) => p.cardId !== cardId));
  };

  const validate = () => setValidated(true);

  const reset = () => {
    setPlacements([]);
    setValidated(false);
    setActiveCard(null);
  };

  const checkPlacement = (p: Placement) => {
    const card = CARDS.find((c) => c.id === p.cardId)!;
    const correctIdx = getNearestBucketIdx(card.year);
    const rightRow = p.row === card.type;
    // Tolerans: ±1 bucket räknas som rätt år.
    const rightYear = Math.abs(p.bucketIdx - correctIdx) <= 1;
    if (rightRow && rightYear) return "correct" as const;
    if (!rightRow && !rightYear) return "wrong-both" as const;
    if (!rightRow) return "wrong-row" as const;
    return "wrong-year" as const;
  };

  const correctCount = validated
    ? placements.filter((p) => checkPlacement(p) === "correct").length
    : 0;
  const allPlaced = remainingCards.length === 0;

  return (
    <div
      className="my-12 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center justify-between gap-4 px-6 py-3"
        style={{ background: accentHex }}
      >
        <div className="ms-mono font-bold text-[#0a0e1a]">
          TIDSLINJE-PUSSLET
        </div>
        <div className="ms-mono hidden text-[#0a0e1a] sm:block">
          {placements.length} / {CARDS.length} placerade
        </div>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        {/* Instruktion */}
        {!validated && !allPlaced && (
          <div className="text-sm leading-relaxed text-[#cbd5e1]">
            <strong className="text-white">Så funkar det:</strong> Klicka på ett
            kort nere. Klicka sedan på rätt år och rad — <em>FANTASI</em> (filmer,
            böcker, spel) eller <em>VERKLIGHET</em> (riktiga händelser). Du
            behöver inte träffa exakt år — i samma närhet räcker.
          </div>
        )}

        {/* Tidslinjen */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* FANTASI-rad */}
            <TimelineRow
              row="fantasy"
              label="FANTASI"
              icon="✦"
              placements={placements}
              activeCard={activeCard}
              validated={validated}
              checkPlacement={checkPlacement}
              onSlotClick={(bucketIdx) => {
                if (activeCard) placeCard(activeCard, bucketIdx, "fantasy");
              }}
              onCardClick={removeCard}
            />

            {/* Tidsaxel */}
            <div className="my-3 flex border-t border-[#243248]">
              {YEAR_BUCKETS.map((b) => (
                <div
                  key={b.year}
                  className="flex-1 border-l border-[#243248] px-1 py-2 text-center"
                >
                  <div className="ms-mono text-[#94a3b8]">{b.label}</div>
                </div>
              ))}
            </div>

            {/* VERKLIGHET-rad */}
            <TimelineRow
              row="reality"
              label="VERKLIGHET"
              icon="●"
              placements={placements}
              activeCard={activeCard}
              validated={validated}
              checkPlacement={checkPlacement}
              onSlotClick={(bucketIdx) => {
                if (activeCard) placeCard(activeCard, bucketIdx, "reality");
              }}
              onCardClick={removeCard}
            />
          </div>
        </div>

        {/* Korthög */}
        {!validated && remainingCards.length > 0 && (
          <div>
            <div className="ms-mono mb-3 text-[#94a3b8]">
              KORT KVAR ({remainingCards.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {remainingCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() =>
                    setActiveCard(activeCard === card.id ? null : card.id)
                  }
                  className={`group max-w-[260px] rounded-lg border p-3 text-left transition-all ${
                    activeCard === card.id
                      ? "border-white bg-white text-[#0a0e1a]"
                      : "border-[#243248] bg-[#1a2235] text-white hover:border-white/40"
                  }`}
                  aria-pressed={activeCard === card.id}
                >
                  <div className="font-semibold leading-tight">
                    {card.title}
                  </div>
                  <div
                    className={`mt-1 text-xs leading-snug ${
                      activeCard === card.id ? "text-[#475569]" : "text-[#94a3b8]"
                    }`}
                  >
                    {card.description}
                  </div>
                </button>
              ))}
            </div>
            {activeCard && (
              <div className="ms-fadein ms-mono mt-3 text-[#fcd34d]">
                ↑ KORT VALT — KLICKA EN PLATS PÅ TIDSLINJEN
              </div>
            )}
          </div>
        )}

        {/* Action-rad */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#243248] pt-5">
          {validated ? (
            <>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-[#fcd34d]" />
                <div>
                  <div className="font-bold text-white">
                    {correctCount} / {placements.length} korrekt
                  </div>
                  <div className="text-sm text-[#94a3b8]">
                    {correctCount === placements.length
                      ? "Allt rätt — du har koll på tidslinjen!"
                      : "Bra försök. Granska de röda och försök igen."}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={reset}
                className="ms-btn ms-btn-secondary"
              >
                <RotateCcw className="h-4 w-4" />
                Börja om
              </button>
            </>
          ) : (
            <>
              <div className="text-sm text-[#94a3b8]">
                {allPlaced
                  ? "Alla kort placerade. Klicka på Kontrollera när du är klar."
                  : `Placerat: ${placements.length} / ${CARDS.length}`}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={reset}
                  disabled={placements.length === 0}
                  className="ms-btn ms-btn-secondary"
                >
                  <RotateCcw className="h-4 w-4" />
                  Återställ
                </button>
                <button
                  type="button"
                  onClick={validate}
                  disabled={placements.length === 0}
                  className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Sparkles className="h-4 w-4" />
                  Kontrollera
                </button>
              </div>
            </>
          )}
        </div>

        {/* Reflektion vid clear */}
        {validated && correctCount === placements.length && (
          <div className="ms-fadein rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-5 text-emerald-100">
            <div className="ms-mono mb-1 text-emerald-300">
              REFLEKTERA
            </div>
            <p className="text-sm leading-relaxed">
              Lade du märke till att <em>Frankenstein</em> kom mer än 100 år
              före <em>Turing-testet</em>? Att människor drömt om tänkande
              maskiner i två sekel innan tekniken faktiskt började fungera? Och
              att det går allt snabbare nu — Will Smith-spaghettin var 2023, två
              år senare ser AI-videor nästan äkta ut.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineRow({
  row,
  label,
  icon,
  placements,
  activeCard,
  validated,
  checkPlacement,
  onSlotClick,
  onCardClick,
}: {
  row: "fantasy" | "reality";
  label: string;
  icon: string;
  placements: Placement[];
  activeCard: string | null;
  validated: boolean;
  checkPlacement: (p: Placement) => "correct" | "wrong-row" | "wrong-year" | "wrong-both";
  onSlotClick: (bucketIdx: number) => void;
  onCardClick: (cardId: string) => void;
}) {
  return (
    <div className="flex">
      <div className="ms-mono w-20 flex-none border-r border-[#243248] py-3 pr-3 text-right text-[#94a3b8] sm:w-28">
        <span className="mr-1.5" aria-hidden>
          {icon}
        </span>
        {label}
      </div>
      <div className="flex flex-1">
        {YEAR_BUCKETS.map((_, bucketIdx) => {
          const cardsHere = placements.filter(
            (p) => p.bucketIdx === bucketIdx && p.row === row
          );
          const isHoverable = activeCard !== null && !validated;
          return (
            <button
              key={bucketIdx}
              type="button"
              onClick={() => onSlotClick(bucketIdx)}
              disabled={!isHoverable}
              className={`relative min-h-[110px] flex-1 border-l border-[#243248] p-1.5 transition-colors ${
                isHoverable
                  ? "cursor-pointer hover:bg-[#1a2235]/80"
                  : "cursor-default"
              }`}
              aria-label={`Plats ${bucketIdx + 1} på ${label}-raden`}
            >
              <div className="space-y-1">
                {cardsHere.map((p) => {
                  const card = CARDS.find((c) => c.id === p.cardId)!;
                  const status = validated ? checkPlacement(p) : null;
                  const colorClass = !status
                    ? "border-[#243248] bg-[#1a2235] text-white"
                    : status === "correct"
                    ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-50"
                    : status === "wrong-year"
                    ? "border-amber-500/60 bg-amber-500/15 text-amber-50"
                    : status === "wrong-row"
                    ? "border-amber-500/60 bg-amber-500/15 text-amber-50"
                    : "border-rose-500/60 bg-rose-500/15 text-rose-50";
                  return (
                    <div
                      key={p.cardId}
                      onClick={(e) => {
                        e.stopPropagation();
                        onCardClick(card.id);
                      }}
                      className={`cursor-pointer rounded border p-1.5 text-[11px] leading-tight ${colorClass}`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-semibold">{card.title}</span>
                        {status === "correct" && (
                          <Check className="h-3 w-3 flex-none" />
                        )}
                        {(status === "wrong-row" ||
                          status === "wrong-year" ||
                          status === "wrong-both") && (
                          <X className="h-3 w-3 flex-none" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
