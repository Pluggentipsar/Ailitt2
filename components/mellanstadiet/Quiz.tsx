"use client";

import { useState } from "react";
import { Check, X, RotateCcw, Lightbulb } from "lucide-react";

export interface QuizOption {
  text: string;
  correct: boolean;
  feedback?: string;
}

export interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
  hint?: string;
}

interface QuizProps {
  title?: string;
  question: QuizQuestion;
  accentHex?: string;
  /** Multiple-questions support — om man har en quiz med flera frågor */
  next?: () => void;
}

/** Självrättande quiz med en fråga och 2-4 svarsalternativ.
 *  - Klickar man fel: rött, visar feedback om alternativet har det.
 *  - Klickar man rätt: grönt, visar feedback.
 *  - Kan återställas.
 */
export function Quiz({
  title,
  question,
  accentHex = "#a5b4fc",
  next,
}: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleClick = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  };

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  const correctIndex = question.options.findIndex((o) => o.correct);
  const isCorrect = selected !== null && question.options[selected]?.correct;
  const selectedFeedback =
    selected !== null ? question.options[selected].feedback : undefined;

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="ms-mono px-6 py-2 text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        {title || "KOLL — välj rätt svar"}
      </div>

      <div className="p-6">
        <p className="mb-5 text-lg font-medium leading-relaxed text-[var(--ms-text)]">
          {question.prompt}
        </p>

        <div className="space-y-2">
          {question.options.map((opt, i) => {
            const isThis = selected === i;
            const isCorrectOption = opt.correct;
            const showCorrect = revealed && isCorrectOption;
            const showWrong = revealed && isThis && !isCorrectOption;

            const baseClass =
              "flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all duration-200";

            let stateClass = "border-[var(--ms-border)] bg-[var(--ms-bg-card)] text-[var(--ms-text)]";
            if (showCorrect) {
              stateClass =
                "border-emerald-500/60 bg-emerald-500/10 text-emerald-50";
            } else if (showWrong) {
              stateClass = "border-rose-500/60 bg-rose-500/10 text-rose-50";
            } else if (revealed) {
              stateClass = "border-[var(--ms-border)] bg-[var(--ms-bg-card)] text-[var(--ms-text-dim)]";
            }

            const hoverClass =
              !revealed && "hover:border-[var(--ms-text)]/40 hover:bg-[var(--ms-border)]";

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleClick(i)}
                disabled={revealed}
                aria-pressed={isThis}
                className={`${baseClass} ${stateClass} ${hoverClass || ""} ${
                  revealed ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span
                  className={`ms-mono mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border ${
                    showCorrect
                      ? "border-emerald-400 bg-emerald-400/20 text-emerald-200"
                      : showWrong
                      ? "border-rose-400 bg-rose-400/20 text-rose-200"
                      : "border-[var(--ms-border)] bg-[var(--ms-bg)] text-[var(--ms-text-muted)]"
                  }`}
                >
                  {showCorrect ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : showWrong ? (
                    <X className="h-3.5 w-3.5" />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="flex-1">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {revealed && (
          <div
            className={`ms-fadein mt-5 rounded-lg border p-4 ${
              isCorrect
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                : "border-rose-500/40 bg-rose-500/10 text-rose-100"
            }`}
          >
            <div className="mb-1 font-semibold">
              {isCorrect ? "Snyggt." : "Inte riktigt."}
            </div>
            <p className="text-sm leading-relaxed">
              {selectedFeedback ||
                (isCorrect
                  ? "Du har det. Fortsätt."
                  : `Rätt svar är ${String.fromCharCode(
                      65 + correctIndex
                    )} — ${question.options[correctIndex].text}.`)}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--ms-border)] px-3 py-1.5 text-sm text-[var(--ms-text-body)] transition-colors hover:bg-[var(--ms-border)]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Försök igen
              </button>
              {next && isCorrect && (
                <button
                  type="button"
                  onClick={next}
                  className="ms-mono rounded-md bg-white px-3 py-1.5 text-sm text-[var(--ms-bg)]"
                >
                  Nästa →
                </button>
              )}
            </div>
          </div>
        )}

        {!revealed && question.hint && (
          <details className="mt-4">
            <summary className="ms-mono inline-flex cursor-pointer items-center gap-1.5 text-[var(--ms-text-muted)] hover:text-[var(--ms-text)]">
              <Lightbulb className="h-3.5 w-3.5" />
              LEDTRÅD
            </summary>
            <p className="ms-fadein mt-2 text-sm text-[var(--ms-text-body)]">
              {question.hint}
            </p>
          </details>
        )}
      </div>
    </div>
  );
}
