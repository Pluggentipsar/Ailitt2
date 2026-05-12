import { ReactNode } from "react";
import { Pause } from "lucide-react";

interface ReflectionPromptProps {
  /** Frågetexten */
  question: string;
  /** Mer kontext / följdfrågor */
  followups?: string[];
  /** Hur eleven ska reflektera (skriv, prata, tänk) */
  mode?: "skriv" | "tänk" | "diskutera";
  accentHex?: string;
}

/** Pause-block som bryter läsningen för en kort reflektionsstund.
 *  Inget krav på att skicka in svar — bara en pedagogisk paus.
 */
export function ReflectionPrompt({
  question,
  followups,
  mode = "skriv",
  accentHex = "#a5b4fc",
}: ReflectionPromptProps) {
  const modeLabel = {
    skriv: "PAUS · ANTECKNA",
    tänk: "PAUS · TÄNK",
    diskutera: "PAUS · DISKUTERA",
  }[mode];

  return (
    <aside
      className="my-8 rounded-lg border-l-4 bg-[var(--ms-bg-subtle)] p-5"
      style={{ borderLeftColor: accentHex }}
    >
      <div className="mb-2 flex items-center gap-2">
        <Pause
          className="h-4 w-4"
          style={{ color: accentHex }}
        />
        <span
          className="ms-mono"
          style={{ color: accentHex }}
        >
          {modeLabel}
        </span>
      </div>
      <p className="text-lg font-medium leading-relaxed text-[var(--ms-text)]">
        {question}
      </p>
      {followups && followups.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-[var(--ms-text-body)]">
          {followups.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span style={{ color: accentHex }}>→</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
