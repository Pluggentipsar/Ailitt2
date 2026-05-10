"use client";

import { useEffect, useRef } from "react";
import { Trophy, Sparkles } from "lucide-react";

interface LessonCompleteProps {
  /** Visa när allt är klart (last quiz är besvarad) */
  show: boolean;
  lessonNumber: number;
  lessonTitle: string;
  accentHex: string;
}

/* "Du är klar"-celebration. Trippar confetti när show blir true. */
export function LessonComplete({
  show,
  lessonNumber,
  lessonTitle,
  accentHex,
}: LessonCompleteProps) {
  const fired = useRef(false);

  useEffect(() => {
    if (show && !fired.current) {
      fired.current = true;
      // Försök ladda canvas-confetti dynamiskt
      import("canvas-confetti").then(({ default: confetti }) => {
        const colors = [accentHex, "#fcd34d", "#a5b4fc", "#fff"];
        const duration = 1200;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 4,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 0.7 },
            colors,
          });
          confetti({
            particleCount: 4,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 0.7 },
            colors,
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
      });
    }
  }, [show, accentHex]);

  if (!show) return null;

  return (
    <div
      className="ms-fadein my-10 overflow-hidden rounded-xl border bg-gradient-to-br from-[#0d1322] via-[#1a2235] to-[#0d1322] p-8 text-center"
      style={{ borderColor: accentHex }}
    >
      <div className="mb-4 flex items-center justify-center gap-2">
        <Sparkles className="h-5 w-5 text-[#fcd34d]" />
        <span className="ms-mono text-[#fcd34d]">LEKTION KLAR</span>
        <Sparkles className="h-5 w-5 text-[#fcd34d]" />
      </div>
      <Trophy
        className="mx-auto mb-4 h-12 w-12"
        style={{ color: accentHex }}
      />
      <h2 className="mb-2 text-3xl font-bold text-white">
        Lektion {lessonNumber} klar!
      </h2>
      <p className="text-lg text-[#cbd5e1]">{lessonTitle}</p>
      <p className="mt-4 text-sm text-[#94a3b8]">
        Du har gått igenom alla sex steg. Snyggt jobbat — och tack för att du
        granskar AI istället för bara använder den.
      </p>
    </div>
  );
}
