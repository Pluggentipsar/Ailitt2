"use client";

import { useState } from "react";
import type { Block } from "@/lib/workshops/kallkritik";
import { BlockRenderer } from "./BlockRenderer";
import { GraduationCap, School, FileText, Copy, Check } from "lucide-react";

type Mode = "experience" | "guide" | "student";

const MODE_META: Record<Mode, { label: string; icon: typeof GraduationCap; description: string }> = {
  experience: {
    label: "Prova själv",
    icon: GraduationCap,
    description:
      "Den körbara versionen — pröva övningen själv för att förstå hur den funkar. Använd inbyggda spel, karuseller och exempel direkt på sidan. Funkar både hemma vid köksbordet och som lärar-deltagare i en workshop med kollegor.",
  },
  guide: {
    label: "Lärarhandledning",
    icon: School,
    description:
      "När du ska köra övningen med elever. Förberedelser, tidsplan per moment, ledarroll och samtalsöppningar — plus fallgropar och varningar att hålla koll på.",
  },
  student: {
    label: "Elevinstruktion",
    icon: FileText,
    description:
      "Skriven direkt till eleven, med du-tilltal. Visa på storskärm, kopiera till Teams/Vklass eller skriv ut. Knappen ”Kopiera hela elevinstruktionen” överst ger en ren text-version.",
  },
};

// Konverterar blocks till klistrings-vänlig plaintext för Teams/Vklass.
function blocksToPlainText(blocks: Block[]): string {
  const lines: string[] = [];
  for (const block of blocks) {
    switch (block.type) {
      case "p":
        lines.push(block.text, "");
        break;
      case "h":
        lines.push(block.text.toUpperCase(), "");
        break;
      case "list":
        block.items.forEach((item, i) => {
          lines.push(block.ordered ? `${i + 1}. ${item}` : `• ${item}`);
        });
        lines.push("");
        break;
      case "steps":
        block.steps.forEach((step, i) => {
          const time = step.time ? ` (${step.time})` : "";
          lines.push(`${i + 1}. ${step.title ?? ""}${time}`);
          if (step.body) lines.push(`   ${step.body}`);
        });
        lines.push("");
        break;
      case "example":
        if (block.label) lines.push(`EXEMPEL: ${block.label}`);
        if (block.user) lines.push(`Användare: ${block.user}`);
        if (block.ai) lines.push(`AI: ${block.ai}`);
        if (block.note) lines.push(`(${block.note})`);
        lines.push("");
        break;
      case "quote":
        lines.push(`»${block.text}«`, "");
        break;
      case "callout":
        if (block.title) lines.push(`[${block.title.toUpperCase()}]`);
        lines.push(block.body, "");
        break;
    }
  }
  return lines.join("\n").trim();
}

function CopyAllButton({
  blocks,
  activityTitle,
}: {
  blocks: Block[];
  activityTitle: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const header = `Elevinstruktion: ${activityTitle}\n${"=".repeat(40)}\n\n`;
    const text = header + blocksToPlainText(blocks);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-workshop-canvas font-semibold text-sm hover:bg-stone-800 transition-colors print:hidden"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Kopierat till Teams/Vklass!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Kopiera hela elevinstruktionen
        </>
      )}
    </button>
  );
}

export function ModeTabs({
  workshopExperience,
  teacherGuide,
  studentInstructions,
  activityTitle,
}: {
  workshopExperience?: Block[];
  teacherGuide?: Block[];
  studentInstructions?: Block[];
  activityTitle: string;
}) {
  const available: Mode[] = [];
  if (workshopExperience) available.push("experience");
  if (teacherGuide) available.push("guide");
  if (studentInstructions) available.push("student");

  const [mode, setMode] = useState<Mode>(available[0] ?? "experience");

  if (available.length === 0) {
    return (
      <p className="italic text-stone-500">
        Inget genomgångsmaterial har lagts in ännu.
      </p>
    );
  }

  return (
    <div>
      {available.length > 1 && (
        <div className="mb-5 print:hidden">
          <div className="inline-flex flex-wrap p-1 rounded-2xl bg-stone-200">
            {available.map((m) => {
              const meta = MODE_META[m];
              const Icon = meta.icon;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    mode === m
                      ? "bg-stone-900 text-workshop-canvas shadow-sm"
                      : "text-stone-700 hover:text-stone-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {meta.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-sm text-stone-600 italic">
            {MODE_META[mode].description}
          </p>
        </div>
      )}

      {/* WORKSHOP-LÄGE */}
      {workshopExperience && (
        <div
          className={
            mode === "experience"
              ? "block"
              : "hidden print:block print:mt-8 print:border-t print:pt-6 print:border-stone-300"
          }
        >
          <h2 className="font-display text-2xl text-stone-900 mb-3 print:!block hidden print:!visible">
            Prova själv
          </h2>
          <BlockRenderer blocks={workshopExperience} />
        </div>
      )}

      {/* LÄRARHANDLEDNING */}
      {teacherGuide && (
        <div
          className={
            mode === "guide"
              ? "block"
              : "hidden print:block print:mt-8 print:border-t print:pt-6 print:border-stone-300"
          }
        >
          <h2 className="font-display text-2xl text-stone-900 mb-3 print:!block hidden print:!visible">
            Lärarhandledning
          </h2>
          <BlockRenderer blocks={teacherGuide} />
        </div>
      )}

      {/* ELEVINSTRUKTION */}
      {studentInstructions && (
        <div
          className={
            mode === "student"
              ? "block"
              : "hidden print:block print:mt-8 print:border-t print:pt-6 print:border-stone-300"
          }
        >
          <div className="bg-workshop-havsbla/10 border-2 border-workshop-havsbla/30 rounded-2xl p-5 mb-4 print:bg-white print:border-stone-400">
            <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
              <div>
                <h2 className="font-display text-2xl text-stone-900 leading-tight mb-1">
                  Elevinstruktion
                </h2>
                <p className="text-sm text-stone-700 leading-snug">
                  Den här texten är skriven direkt till eleven. Visa på storskärm
                  eller kopiera in i Teams/Vklass.
                </p>
              </div>
              <CopyAllButton
                blocks={studentInstructions}
                activityTitle={activityTitle}
              />
            </div>
          </div>
          <BlockRenderer blocks={studentInstructions} studentMode />
        </div>
      )}
    </div>
  );
}
