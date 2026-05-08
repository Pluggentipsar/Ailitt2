"use client";

import { useState } from "react";
import {
  Check,
  X,
  RotateCcw,
  Trophy,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { QuizQuestion } from "./Quiz";

interface SammanfattningsQuizProps {
  title?: string;
  /** Frågor i ordning */
  questions: QuizQuestion[];
  accentHex?: string;
}

/** Multi-quiz som tar eleven genom alla frågor i en sittning.
 *  Slutar med totalt resultat + uppmuntran.
 */
export function SammanfattningsQuiz({
  title = "Sammanfattningsquiz",
  questions,
  accentHex = "#a5b4fc",
}: SammanfattningsQuizProps) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const q = questions[idx];

  const handleClick = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (q.options[i].correct) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const reset = () => {
    setIdx(0);
    setSelected(null);
    setRevealed(false);
    setCorrect(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((correct / total) * 100);
    const verdict =
      pct >= 80
        ? "Du har koll. Bra jobbat."
        : pct >= 60
        ? "Bra grund — gå tillbaka och repetera där det blev fel."
        : "Värt att läsa om innan nästa lektion. Inget skämt — det här är basen.";

    return (
      <div
        className="my-10 overflow-hidden rounded-xl border bg-[#0d1322]"
        style={{ borderColor: `${accentHex}40` }}
      >
        <div
          className="ms-mono px-6 py-2 font-bold text-[#0a0e1a]"
          style={{ background: accentHex }}
        >
          {title.toUpperCase()} · KLAR
        </div>
        <div className="p-6 text-center">
          <Trophy className="mx-auto mb-3 h-10 w-10 text-[#fcd34d]" />
          <div className="text-4xl font-bold text-white">
            {correct} / {total}
          </div>
          <div className="ms-mono mt-1 text-[#94a3b8]">{pct}% RÄTT</div>
          <p className="mt-4 text-lg text-[#cbd5e1]">{verdict}</p>
          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary mt-6"
          >
            <RotateCcw className="h-4 w-4" />
            Gör om
          </button>
        </div>
      </div>
    );
  }

  const correctIndex = q.options.findIndex((o) => o.correct);
  const isCorrect = selected !== null && q.options[selected]?.correct;

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[#0d1322]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center justify-between gap-4 px-6 py-2 font-bold text-[#0a0e1a]"
        style={{ background: accentHex }}
      >
        <span className="ms-mono">{title.toUpperCase()}</span>
        <span className="ms-mono">
          {idx + 1} / {total}
        </span>
      </div>

      {/* Progressbar */}
      <div className="h-1 w-full bg-[#1a2235]">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${((idx + (revealed ? 1 : 0)) / total) * 100}%`,
            background: accentHex,
          }}
        />
      </div>

      <div className="p-6">
        <p className="mb-5 text-lg font-medium leading-relaxed text-white">
          {q.prompt}
        </p>

        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isThis = selected === i;
            const showCorrect = revealed && opt.correct;
            const showWrong = revealed && isThis && !opt.correct;

            let stateClass = "border-[#243248] bg-[#1a2235] text-[#e6edf7]";
            if (showCorrect) {
              stateClass =
                "border-emerald-500/60 bg-emerald-500/10 text-emerald-50";
            } else if (showWrong) {
              stateClass = "border-rose-500/60 bg-rose-500/10 text-rose-50";
            } else if (revealed) {
              stateClass = "border-[#243248] bg-[#1a2235] text-[#64748b]";
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleClick(i)}
                disabled={revealed}
                className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all duration-200 ${stateClass} ${
                  !revealed && "hover:border-white/40 hover:bg-[#243248]"
                } ${revealed ? "cursor-default" : "cursor-pointer"}`}
              >
                <span
                  className={`ms-mono mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border ${
                    showCorrect
                      ? "border-emerald-400 bg-emerald-400/20 text-emerald-200"
                      : showWrong
                      ? "border-rose-400 bg-rose-400/20 text-rose-200"
                      : "border-[#243248] bg-[#0a0e1a] text-[#94a3b8]"
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

        {revealed && (
          <div
            className={`ms-fadein mt-5 rounded-lg border p-4 ${
              isCorrect
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                : "border-rose-500/40 bg-rose-500/10 text-rose-100"
            }`}
          >
            <div className="mb-1 font-semibold">
              {isCorrect ? "Rätt." : "Inte riktigt."}
            </div>
            <p className="text-sm leading-relaxed">
              {selected !== null && q.options[selected].feedback
                ? q.options[selected].feedback
                : isCorrect
                ? "Bra. Nästa fråga."
                : `Rätt svar är ${String.fromCharCode(
                    65 + correctIndex
                  )} — ${q.options[correctIndex].text}.`}
            </p>
            <button
              type="button"
              onClick={next}
              className="ms-btn ms-btn-primary mt-4"
            >
              {idx + 1 === total ? "Avsluta quiz" : "Nästa fråga"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {!revealed && q.hint && (
          <details className="mt-4">
            <summary className="ms-mono inline-flex cursor-pointer items-center gap-1.5 text-[#94a3b8] hover:text-white">
              <Lightbulb className="h-3.5 w-3.5" />
              LEDTRÅD
            </summary>
            <p className="ms-fadein mt-2 text-sm text-[#cbd5e1]">{q.hint}</p>
          </details>
        )}
      </div>
    </div>
  );
}
