"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize,
  Minimize,
  GraduationCap,
  School,
} from "lucide-react";
import type { Activity, Block } from "@/lib/workshops/kallkritik";
import { chaptersById } from "@/lib/workshops/kallkritik";

type Slide = {
  kind:
    | "title"
    | "step"
    | "list"
    | "discussion"
    | "section"
    | "callout"
    | "example";
  title?: string;
  body?: string;
  items?: string[];
  time?: string;
  stepNumber?: number;
  callout?: { tone: "warning" | "info" | "tip" | "note"; title?: string };
  example?: { user?: string; ai?: string; note?: string };
};

function blocksToSlides(blocks: Block[], modeLabel: string): Slide[] {
  const slides: Slide[] = [{ kind: "title", title: modeLabel }];
  // Behåll löpande "kapitel-header" så att numrerade listor kan ärva
  // den senaste rubriken som sin titel (annars hängande siffror utan kontext).
  let currentHeading: string | undefined;

  for (const b of blocks) {
    if (b.type === "h") {
      currentHeading = b.text;
      slides.push({ kind: "section", title: b.text });
    } else if (b.type === "p" && b.text.length > 0) {
      slides.push({ kind: "step", body: b.text });
    } else if (b.type === "list") {
      // Ordnade listor: en slide per steg (det är en sekvens).
      // Oordnade listor: en samlad slide (gruppen ska ses tillsammans).
      if (b.ordered) {
        b.items.forEach((item, idx) => {
          slides.push({
            kind: "step",
            title: currentHeading,
            body: item,
            stepNumber: idx + 1,
          });
        });
      } else {
        slides.push({
          kind: "list",
          title: currentHeading,
          items: b.items,
        });
      }
    } else if (b.type === "steps") {
      b.steps.forEach((s, idx) => {
        slides.push({
          kind: "step",
          title: s.title,
          body: s.body,
          time: s.time,
          stepNumber: idx + 1,
        });
      });
    } else if (b.type === "quote") {
      slides.push({ kind: "step", body: `”${b.text}”` });
    } else if (b.type === "callout") {
      slides.push({
        kind: "callout",
        title: b.title,
        body: b.body,
        callout: { tone: b.tone, title: b.title },
      });
    } else if (b.type === "example") {
      slides.push({
        kind: "example",
        title: b.label ?? "Exempel",
        example: { user: b.user, ai: b.ai, note: b.note },
      });
    }
  }
  return slides;
}

export function PresentationView({ activity }: { activity: Activity }) {
  const chapter = chaptersById[activity.chapter];
  const [modeIdx, setModeIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const modes = useMemo(() => {
    const list: { label: string; blocks: Block[] }[] = [];
    if (activity.workshopExperience) {
      list.push({ label: "Prova själv", blocks: activity.workshopExperience });
    }
    if (activity.teacherGuide) {
      list.push({ label: "Lärarhandledning", blocks: activity.teacherGuide });
    }
    if (activity.studentInstructions) {
      list.push({
        label: "Elevinstruktion",
        blocks: activity.studentInstructions,
      });
    }
    return list;
  }, [activity]);

  const slides = useMemo(() => {
    if (modes.length === 0) return [];
    const m = modes[modeIdx];
    return blocksToSlides(m.blocks, m.label);
  }, [modes, modeIdx]);

  const slide = slides[slideIdx];
  const total = slides.length;

  const next = () => setSlideIdx((i) => Math.min(i + 1, total - 1));
  const prev = () => setSlideIdx((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape" && fullscreen) {
        document.exitFullscreen?.();
        setFullscreen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total, fullscreen]);

  useEffect(() => {
    setSlideIdx(0);
  }, [modeIdx]);

  const toggleFullscreen = async () => {
    if (!fullscreen) {
      await document.documentElement.requestFullscreen?.();
      setFullscreen(true);
    } else {
      await document.exitFullscreen?.();
      setFullscreen(false);
    }
  };

  if (modes.length === 0) {
    return (
      <div className="min-h-screen grid place-items-center text-stone-600">
        Det finns inget innehåll att presentera för denna aktivitet.
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col workshop-paper"
      data-chapter-tone={chapter.tone}
    >
      {/* TOOLBAR */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-stone-300 bg-workshop-canvas/90 backdrop-blur">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/workshops/kallkritik-mellanstadiet/${activity.id}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-stone-200 hover:bg-stone-300"
            aria-label="Stäng presentation"
          >
            <X className="h-4 w-4" />
          </Link>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-stone-500">
              Kap {chapter.number} · {chapter.title}
            </div>
            <div className="font-display text-xl text-stone-900 truncate">
              {activity.number} {activity.title}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {modes.length > 1 && (
            <div className="inline-flex p-0.5 rounded-full bg-stone-200 mr-2">
              {modes.map((m, i) => (
                <button
                  key={m.label}
                  onClick={() => setModeIdx(i)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    modeIdx === i
                      ? "bg-stone-900 text-workshop-canvas"
                      : "text-stone-700"
                  }`}
                >
                  {i === 0 ? (
                    <GraduationCap className="h-3.5 w-3.5" />
                  ) : (
                    <School className="h-3.5 w-3.5" />
                  )}
                  {m.label.replace("-läge", "")}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={toggleFullscreen}
            className="grid h-9 w-9 place-items-center rounded-full bg-stone-200 hover:bg-stone-300"
            aria-label="Helskärm"
          >
            {fullscreen ? (
              <Minimize className="h-4 w-4" />
            ) : (
              <Maximize className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* SLIDE */}
      <div className="flex-1 grid place-items-center px-8 py-10 relative">
        <button
          onClick={prev}
          disabled={slideIdx === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-stone-900 text-workshop-canvas disabled:opacity-20 hover:bg-stone-800 transition-colors"
          aria-label="Föregående"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={next}
          disabled={slideIdx === total - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-stone-900 text-workshop-canvas disabled:opacity-20 hover:bg-stone-800 transition-colors"
          aria-label="Nästa"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        <div className="max-w-5xl w-full text-center px-8">
          {slide?.kind === "title" && (
            <div>
              <div className="text-2xl text-stone-500 uppercase tracking-widest mb-4">
                {chapter.title}
              </div>
              <div className="font-display text-7xl lg:text-8xl text-stone-900 mb-6 leading-[0.95]">
                {activity.title}
              </div>
              <p className="text-2xl text-stone-700 leading-snug max-w-3xl mx-auto">
                {activity.blurb}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-stone-900 text-workshop-canvas text-lg">
                {slide.title}
              </div>
            </div>
          )}
          {slide?.kind === "section" && (
            <div className="font-display text-7xl lg:text-8xl text-stone-900 leading-[0.95]">
              {slide.title}
            </div>
          )}
          {slide?.kind === "step" && (
            <div>
              {slide.title && (
                <div className="text-xl lg:text-2xl text-stone-500 uppercase tracking-widest mb-6">
                  {slide.title}
                </div>
              )}
              {slide.stepNumber !== undefined && (
                <div
                  className="font-display text-[12rem] lg:text-[16rem] leading-none mb-2"
                  style={{
                    color: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                  }}
                >
                  {slide.stepNumber}
                </div>
              )}
              {slide.body && (
                <p className="text-4xl lg:text-5xl text-stone-900 leading-tight max-w-5xl mx-auto whitespace-pre-line font-medium">
                  {slide.body}
                </p>
              )}
              {slide.time && (
                <div className="mt-8 inline-block px-5 py-2 rounded-full bg-stone-200 text-stone-700 text-2xl font-semibold">
                  {slide.time}
                </div>
              )}
            </div>
          )}
          {slide?.kind === "list" && (
            <div>
              {slide.title && (
                <div className="text-xl lg:text-2xl text-stone-500 uppercase tracking-widest mb-6">
                  {slide.title}
                </div>
              )}
              <ul className="text-3xl lg:text-4xl text-stone-900 leading-snug space-y-4 text-left max-w-3xl mx-auto font-medium">
                {slide.items?.map((it, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="font-display text-5xl shrink-0 leading-none mt-1"
                      style={{
                        color: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                      }}
                    >
                      •
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {slide?.kind === "callout" && (
            <div className="max-w-4xl mx-auto">
              {slide.callout && (
                <div className="text-lg lg:text-xl text-stone-500 uppercase tracking-widest mb-4 font-semibold">
                  {slide.callout.tone === "warning"
                    ? "⚠ Viktigt"
                    : slide.callout.tone === "tip"
                      ? "💡 Tips"
                      : slide.callout.tone === "info"
                        ? "ℹ Info"
                        : "📝 OBS"}
                </div>
              )}
              {slide.title && (
                <div className="font-display text-5xl lg:text-6xl text-stone-900 mb-5 leading-tight">
                  {slide.title}
                </div>
              )}
              {slide.body && (
                <p className="text-3xl lg:text-4xl text-stone-800 leading-snug max-w-4xl mx-auto">
                  {slide.body}
                </p>
              )}
            </div>
          )}
          {slide?.kind === "example" && (
            <div className="max-w-5xl mx-auto text-left">
              <div className="text-lg lg:text-xl text-stone-500 uppercase tracking-widest mb-6 text-center">
                {slide.title}
              </div>
              {slide.example?.user && (
                <div className="mb-5">
                  <div className="text-base text-stone-500 mb-2 uppercase tracking-wider">
                    Användare
                  </div>
                  <div className="px-6 py-4 rounded-3xl rounded-bl-md bg-stone-100 text-stone-900 text-2xl lg:text-3xl leading-snug">
                    {slide.example.user}
                  </div>
                </div>
              )}
              {slide.example?.ai && (
                <div className="mb-5">
                  <div className="text-base text-stone-500 mb-2 uppercase tracking-wider">
                    AI
                  </div>
                  <div
                    className="px-6 py-4 rounded-3xl rounded-br-md text-stone-900 text-2xl lg:text-3xl leading-snug"
                    style={{ background: "var(--workshop-lila-soft)" }}
                  >
                    {slide.example.ai}
                  </div>
                </div>
              )}
              {slide.example?.note && (
                <p className="text-xl text-stone-600 italic mt-4">
                  {slide.example.note}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PROGRESS */}
      <div className="px-6 py-3 border-t border-stone-300 bg-workshop-canvas/90 flex items-center gap-4">
        <div className="text-sm text-stone-600 w-20">
          {slideIdx + 1} / {total}
        </div>
        <div className="flex-1 h-1 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-stone-900 transition-all"
            style={{ width: `${((slideIdx + 1) / total) * 100}%` }}
          />
        </div>
        <div className="text-xs text-stone-500 hidden sm:block">
          ← / → för att navigera · ESC för att stänga helskärm
        </div>
      </div>
    </div>
  );
}
