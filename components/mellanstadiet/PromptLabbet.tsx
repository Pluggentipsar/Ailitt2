"use client";

import { useState } from "react";
import {
  Sparkles,
  RotateCcw,
  Plus,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

/* Prompt-Labbet — eleven bygger en prompt genom att lägga till block av
 * fem typer: VEM/VAD, HURDAN, VAR, STIL, DETALJ. När prompten är "klar"
 * visas en *förinspelad* AI-respons (statisk, för pedagogisk klarhet).
 *
 * Ingen riktig API-anslutning — en förinspelad bildbank som matchar
 * vissa block-kombinationer. Annars genererar vi en beskrivning av
 * bilden i text.
 */

type BlockType = "vem" | "hurdan" | "var" | "stil" | "detalj";

interface BlockOption {
  id: string;
  type: BlockType;
  label: string;
  /** Texten som hamnar i prompten */
  text: string;
}

const BLOCKS: BlockOption[] = [
  // VEM/VAD
  { id: "v1", type: "vem", label: "Astronaut", text: "en astronaut" },
  { id: "v2", type: "vem", label: "Drake", text: "en drake" },
  { id: "v3", type: "vem", label: "Pizza", text: "en pizza" },
  { id: "v4", type: "vem", label: "Robot", text: "en robot" },
  { id: "v5", type: "vem", label: "Räv", text: "en räv" },
  { id: "v6", type: "vem", label: "Skogshus", text: "ett skogshus" },
  // HURDAN
  { id: "h1", type: "hurdan", label: "Stor och rosa", text: "stor och rosa" },
  { id: "h2", type: "hurdan", label: "Liten och söt", text: "liten och söt" },
  { id: "h3", type: "hurdan", label: "Med solglasögon", text: "med solglasögon" },
  { id: "h4", type: "hurdan", label: "Smutsig och sliten", text: "smutsig och sliten" },
  { id: "h5", type: "hurdan", label: "Lyxig och blank", text: "lyxig och blank" },
  // VAR
  { id: "p1", type: "var", label: "På månen", text: "på månen" },
  { id: "p2", type: "var", label: "I en skog", text: "i en granskog" },
  { id: "p3", type: "var", label: "I en stor stad", text: "i en stor stad om natten" },
  { id: "p4", type: "var", label: "Under vattnet", text: "djupt under vattnet" },
  { id: "p5", type: "var", label: "På en strand", text: "på en strand vid solnedgång" },
  // STIL
  { id: "s1", type: "stil", label: "Fotografi", text: "fotografi-stil" },
  { id: "s2", type: "stil", label: "Akvarell", text: "akvarell-stil" },
  { id: "s3", type: "stil", label: "Tecknad", text: "tecknad serie-stil" },
  { id: "s4", type: "stil", label: "Pixar/3D", text: "Pixar 3D-renderad stil" },
  { id: "s5", type: "stil", label: "Anime", text: "anime-stil" },
  // DETALJ
  { id: "d1", type: "detalj", label: "Med en svensk flagga", text: "med en svensk flagga" },
  { id: "d2", type: "detalj", label: "Med skarp belysning", text: "med dramatisk skarp belysning" },
  { id: "d3", type: "detalj", label: "Med dimma runt", text: "omgiven av lätt dimma" },
  { id: "d4", type: "detalj", label: "Med många detaljer", text: "med extremt många detaljer" },
  { id: "d5", type: "detalj", label: "Mörka färger", text: "med mörka och mättade färger" },
];

const TYPE_INFO: Record<
  BlockType,
  { label: string; color: string; question: string }
> = {
  vem: {
    label: "VEM/VAD",
    color: "#10b981",
    question: "Vad ska bilden handla om?",
  },
  hurdan: {
    label: "HURDAN",
    color: "#34d399",
    question: "Vilka egenskaper?",
  },
  var: {
    label: "VAR",
    color: "#6ee7b7",
    question: "Var utspelar det sig?",
  },
  stil: {
    label: "STIL",
    color: "#a7f3d0",
    question: "Vilken stil?",
  },
  detalj: {
    label: "DETALJ",
    color: "#d1fae5",
    question: "Något särskilt?",
  },
};

const BLOCK_ORDER: BlockType[] = ["vem", "hurdan", "var", "stil", "detalj"];

export function PromptLabbet({ accentHex = "#10b981" }: { accentHex?: string }) {
  const [selected, setSelected] = useState<BlockOption[]>([]);
  const [generated, setGenerated] = useState(false);

  const addBlock = (block: BlockOption) => {
    if (generated) return;
    // Endast en av varje typ — ersätt om finns
    const filtered = selected.filter((b) => b.type !== block.type);
    setSelected([...filtered, block]);
  };

  const removeBlock = (id: string) => {
    if (generated) return;
    setSelected(selected.filter((b) => b.id !== id));
  };

  const reset = () => {
    setSelected([]);
    setGenerated(false);
  };

  // Sortera efter rätt typordning
  const sorted = [...selected].sort(
    (a, b) =>
      BLOCK_ORDER.indexOf(a.type) - BLOCK_ORDER.indexOf(b.type)
  );

  const promptText =
    sorted.length > 0
      ? "Rita " + sorted.map((b) => b.text).join(", ")
      : "(välj minst ett block för att börja bygga)";

  // Generera "AI-svar" baserat på antal block
  const generateResult = () => {
    setGenerated(true);
  };

  const blockCount = selected.length;
  const detailLevel =
    blockCount === 0
      ? "tom"
      : blockCount <= 2
      ? "vag"
      : blockCount <= 4
      ? "specifik"
      : "mycket specifik";

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="ms-mono px-6 py-2 font-bold text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        PROMPT-LABBET · BYGG EN BILD-PROMPT MED FEM BLOCK
      </div>

      <div className="space-y-6 p-6">
        <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
          <strong className="text-[var(--ms-text)]">Så här funkar det:</strong> Klicka på
          block för att lägga till dem i prompten. En av varje typ — du kan
          byta. Se hur prompten växer. Tryck sedan på{" "}
          <strong className="text-[var(--ms-text)]">Generera</strong> för att se vad AI
          producerar (text-beskrivning av bilden).
        </p>

        {/* Block-galleriet */}
        <div className="space-y-4">
          {BLOCK_ORDER.map((type) => {
            const info = TYPE_INFO[type];
            const blocksOfType = BLOCKS.filter((b) => b.type === type);
            const selectedOfType = selected.find((b) => b.type === type);

            return (
              <div key={type}>
                <div className="ms-mono mb-2 flex items-center gap-2">
                  <span style={{ color: info.color }}>
                    {info.label}
                  </span>
                  <span className="text-[var(--ms-text-dim)]">·</span>
                  <span className="text-[var(--ms-text-muted)]">{info.question}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blocksOfType.map((b) => {
                    const isSel = selectedOfType?.id === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => addBlock(b)}
                        disabled={generated}
                        className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                          isSel
                            ? "scale-105 text-[var(--ms-bg)] shadow-md"
                            : "border-[var(--ms-border)] bg-[var(--ms-bg-card)] text-[var(--ms-text)] hover:border-[var(--ms-text)]/40"
                        } ${generated ? "cursor-default" : "cursor-pointer"}`}
                        style={
                          isSel
                            ? {
                                background: info.color,
                                borderColor: info.color,
                              }
                            : undefined
                        }
                      >
                        {isSel && (
                          <span className="ms-mono mr-1 text-xs">✓</span>
                        )}
                        {b.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Promptsamlingen */}
        <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5">
          <div className="ms-mono mb-3 flex items-center justify-between text-[var(--ms-text-muted)]">
            <span>DIN PROMPT</span>
            <span>
              {blockCount} / 5 BLOCK · {detailLevel.toUpperCase()}
            </span>
          </div>
          <div className="font-mono text-base leading-relaxed text-[var(--ms-text)]">
            &ldquo;{promptText}&rdquo;
          </div>
          {sorted.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {sorted.map((b) => {
                const info = TYPE_INFO[b.type];
                return (
                  <span
                    key={b.id}
                    className="ms-mono inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px]"
                    style={{
                      borderColor: `${info.color}60`,
                      background: `${info.color}10`,
                      color: info.color,
                    }}
                  >
                    {info.label}
                    <button
                      type="button"
                      onClick={() => removeBlock(b.id)}
                      className="opacity-60 hover:opacity-100"
                      aria-label={`Ta bort ${info.label}`}
                      disabled={generated}
                    >
                      <X className="h-2.5 w-2.5" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Action */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-[var(--ms-text-muted)]">
            {blockCount === 0
              ? "Lägg till minst ett block."
              : blockCount < 3
              ? `${blockCount} block — vag prompt. Lägg till fler för bättre resultat.`
              : blockCount < 5
              ? `${blockCount} block — bra! Du har koll.`
              : "Alla 5 block — proffsig prompt!"}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={reset}
              disabled={selected.length === 0}
              className="ms-btn ms-btn-secondary"
            >
              <RotateCcw className="h-4 w-4" />
              Töm
            </button>
            <button
              type="button"
              onClick={generateResult}
              disabled={selected.length === 0 || generated}
              className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              Generera
            </button>
          </div>
        </div>

        {/* Resultat */}
        {generated && (
          <div className="ms-fadein space-y-4 border-t border-[var(--ms-border)] pt-6">
            <div>
              <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
                AI:S BESKRIVNING AV BILDEN
              </div>
              <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5">
                <div className="aspect-[16/9] mb-3 flex items-center justify-center rounded-md border border-dashed border-[var(--ms-border-strong)] bg-[var(--ms-bg-subtle)] p-6 text-center">
                  <div>
                    <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
                      [BILD GENERERAS HÄR]
                    </div>
                    <p className="text-sm text-[var(--ms-text-body)]">
                      Riktig bild-AI skulle nu producera en bild baserat på
                      din prompt. Vi visar text-beskrivning istället —
                      bildbanken byggs senare.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
                    AI SKULLE PRODUCERA NÅGOT SÅ HÄR:
                  </div>
                  <p className="text-[var(--ms-text)]">
                    {describeResult(sorted)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
              <div className="ms-mono mb-2 text-[#fcd34d]">INSIKT</div>
              <p className="leading-relaxed text-[#fde68a]">
                {blockCount <= 2
                  ? "Få block = generisk bild. AI gissar resten — och du har inte styrt resultatet. Pröva fler block för mer kontroll."
                  : blockCount <= 4
                  ? "Bra detaljnivå. Du har styrt det viktigaste. För proffsigt resultat: lägg till stil och detaljer."
                  : "Alla fem block — du är promptmästare. Prompts som denna används av professionella designers, författare och YouTubers."}
              </p>
            </div>

            <button
              type="button"
              onClick={reset}
              className="ms-btn ms-btn-secondary"
            >
              <RotateCcw className="h-4 w-4" />
              Bygg en ny prompt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Genererar en text-beskrivning av vad AI skulle skapa baserat på blocken.
 *  Pedagogisk illustration — ingen riktig bildgenerering.
 */
function describeResult(blocks: BlockOption[]): string {
  if (blocks.length === 0) return "Tom prompt — ingenting att skapa.";

  const vem = blocks.find((b) => b.type === "vem")?.label;
  const hurdan = blocks.find((b) => b.type === "hurdan")?.label.toLowerCase();
  const varVal = blocks.find((b) => b.type === "var")?.label.toLowerCase();
  const stil = blocks.find((b) => b.type === "stil")?.label.toLowerCase();
  const detalj = blocks.find((b) => b.type === "detalj")?.label.toLowerCase();

  const parts: string[] = [];
  if (vem) parts.push(vem);
  if (hurdan) parts.push(hurdan);
  if (varVal) parts.push(varVal);

  let sentence = "Bilden visar ";
  if (parts.length === 1) {
    sentence += `${parts[0].toLowerCase()}.`;
  } else if (parts.length === 2) {
    sentence += `${parts[0].toLowerCase()} ${parts[1]}.`;
  } else if (parts.length >= 3) {
    sentence += `${parts[0].toLowerCase()}, ${parts[1]}, ${parts[2]}.`;
  }

  if (stil) sentence += ` Stilen är ${stil}.`;
  if (detalj) sentence += ` Detalj: ${detalj}.`;

  if (blocks.length <= 2) {
    sentence +=
      " Eftersom prompten saknar detaljer, har AI fyllt i resten på egen hand — du kan inte vara säker på att resultatet liknar din ursprungliga idé.";
  }

  return sentence;
}
