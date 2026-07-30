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
  ArrowRight,
} from "lucide-react";
import type { Activity, Block } from "@/lib/workshops/kallkritik";
import { chaptersById } from "@/lib/workshops/kallkritik";
import {
  type Slide,
  type AuthoredSlide,
  blocksToSlides,
  authoredToSlides,
  filtreraSlides,
  wordCount,
} from "@/lib/workshops/kallkritik/slides";
import { useLararfalt } from "@/hooks/useLararfalt";
import { PrintDeck } from "./PrintDeck";
import { ExportButtons } from "./ExportButtons";

export type { AuthoredSlide };

export type PresentationMode = {
  label: string;
  /** Autogenererade slides — ett block blir en slide. */
  blocks?: Block[];
  /** Författade slides. Har företräde över `blocks` när båda finns. */
  slides?: AuthoredSlide[];
  /**
   * Vem lägets innehåll är skrivet till. Styr bara ikonen i lägesväxlaren —
   * default är läraren, eftersom två av tre lägen är lärartext.
   */
  audience?: "larare" | "elev";
};

/**
 * Storskärmstypografi som anpassas efter textmängd. Ett block skrivet för att
 * läsas på en sida kan vara sex ord eller sextio; samma grad åt båda ger
 * antingen bortkastad skärm eller text som spiller ur rutan.
 *
 * Korta rader centreras — de läses som utrop. Längre stycken vänsterställs,
 * för centrerad brödtext över mer än ett par rader blir ojämn i båda kanterna
 * och tung att läsa från bakre bänken. Måttet anges i `ch` så radlängden
 * håller sig läsbar oavsett grad (den absoluta bredden kapas av containern).
 */
/**
 * Graderna är viewport-relativa (`vh`), inte fasta px. En slide ska fylla
 * samma andel av skärmen oavsett om den visas på en 1080p-projektor eller en
 * laptop — fasta px blir antingen för små på projektorn eller spräcker höjden
 * på laptopen. `clamp()` sätter golv och tak så det inte spårar ur på
 * extremformat. Måttet står i `ch` och följer därmed med graden.
 */
const BRODTEXT_STEG = [
  {
    maxOrd: 12,
    fontSize: "clamp(2.5rem, 9vh, 8rem)",
    weight: "font-normal",
    align: "text-center text-balance",
    measure: "max-w-[36ch]",
    leading: "leading-[1.05]",
  },
  {
    maxOrd: 30,
    fontSize: "clamp(2rem, 6.5vh, 5.5rem)",
    weight: "font-medium",
    align: "text-center text-balance",
    measure: "max-w-[40ch]",
    leading: "leading-tight",
  },
  {
    maxOrd: 60,
    fontSize: "clamp(1.75rem, 5.2vh, 4.5rem)",
    weight: "font-medium",
    align: "text-left text-pretty",
    measure: "max-w-[50ch]",
    leading: "leading-snug",
  },
  {
    maxOrd: 120,
    fontSize: "clamp(1.5rem, 4vh, 3.5rem)",
    weight: "font-medium",
    align: "text-left text-pretty",
    measure: "max-w-[58ch]",
    leading: "leading-snug",
  },
  {
    // Textblock — en hel elevtext eller AI-text som klassen ska läsa
    // tillsammans. Här slutar sliden vara ett utrop och blir en sida: bred
    // spalt, normal vikt, luftigt radavstånd. 200 ord ryms på en 1080p-skärm
    // vid den här graden, men läses från mitten av rummet snarare än från
    // bakre bänken — den som ska närläsa gör det på papper eller i PDF:en.
    maxOrd: Infinity,
    fontSize: "clamp(1.125rem, 2.6vh, 2.25rem)",
    weight: "font-normal",
    align: "text-left text-pretty",
    measure: "max-w-[72ch]",
    leading: "leading-normal",
  },
] as const;

/**
 * `nedgradera` flyttar ner ett steg i skalan. Används när sliden redan har ett
 * tungt grafiskt element — en stegsiffra i display-grad — som konkurrerar om
 * höjden. Utan det spräcker siffra + största brödtextgraden en 800px-skärm.
 */
function bodyType(text: string, nedgradera = 0) {
  const ord = wordCount(text);
  const hittad = BRODTEXT_STEG.findIndex((s) => ord <= s.maxOrd);
  const idx = hittad < 0 ? BRODTEXT_STEG.length - 1 : hittad;
  return BRODTEXT_STEG[Math.min(idx + nedgradera, BRODTEXT_STEG.length - 1)];
}

/** Gemensam stil för de små versala etiketterna över en slide. */
const KICKER = "uppercase tracking-widest text-stone-500";
const KICKER_SIZE = "clamp(0.875rem, 2.2vh, 1.75rem)";

/** Display-grader (Caveat) — även dessa viewport-relativa. */
const DISPLAY_STOR = "clamp(2.5rem, 10vh, 8rem)";
const SIFFRA_STOR = "clamp(4rem, 17vh, 11rem)";
const SIFFRA_LITEN = "clamp(3rem, 9vh, 6rem)";

function StepSlide({ slide, tone }: { slide: Slide; tone: string }) {
  const harSiffra = slide.stepNumber !== undefined;
  const t = slide.body ? bodyType(slide.body, harSiffra ? 1 : 0) : null;
  // Vänsterställd text = längre stycke. Då får siffran ge plats.
  const langText = t?.align.includes("text-left") ?? false;

  return (
    <div className={langText ? "text-left" : "text-center"}>
      {slide.title && (
        <div className={`${KICKER} mb-6`} style={{ fontSize: KICKER_SIZE }}>
          {slide.title}
        </div>
      )}
      {harSiffra && (
        <div
          className={`font-display leading-none ${langText ? "mb-4" : "mb-3"}`}
          style={{
            color: `var(--workshop-${tone})`,
            fontSize: langText ? SIFFRA_LITEN : SIFFRA_STOR,
          }}
        >
          {slide.stepNumber}
        </div>
      )}
      {slide.body && t && (
        <p
          className={`mx-auto whitespace-pre-line text-stone-800 ${t.weight} ${t.align} ${t.measure} ${t.leading}`}
          style={{ fontSize: t.fontSize }}
        >
          {slide.body}
        </p>
      )}
      {slide.time && (
        <div
          className="mt-8 inline-block rounded-full bg-stone-200 px-5 py-2 font-semibold text-stone-700"
          style={{ fontSize: KICKER_SIZE }}
        >
          {slide.time}
        </div>
      )}
    </div>
  );
}

function ListSlide({ slide, tone }: { slide: Slide; tone: string }) {
  const items = slide.items ?? [];
  const langsta = items.reduce((max, it) => Math.max(max, wordCount(it)), 0);
  // Många punkter eller långa punkter — dra ner graden så allt ryms.
  const tat = items.length > 5 || langsta > 18;

  return (
    <div>
      {slide.title && (
        <div
          className={`${KICKER} mb-8 text-center`}
          style={{ fontSize: KICKER_SIZE }}
        >
          {slide.title}
        </div>
      )}
      <ul
        className="mx-auto max-w-[46ch] space-y-5 text-left font-medium leading-snug text-stone-800"
        style={{
          fontSize: tat
            ? "clamp(1.5rem, 4vh, 3.5rem)"
            : "clamp(1.75rem, 5.2vh, 4.5rem)",
        }}
      >
        {items.map((it, i) => (
          <li key={i} className="flex gap-4 text-pretty">
            <span
              className="mt-1 shrink-0 font-display leading-none"
              style={{ color: `var(--workshop-${tone})`, fontSize: "1.2em" }}
              aria-hidden
            >
              •
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CalloutSlide({ slide }: { slide: Slide }) {
  const t = slide.body ? bodyType(slide.body) : null;
  const etikett =
    slide.callout?.tone === "warning"
      ? "⚠ Viktigt"
      : slide.callout?.tone === "tip"
        ? "💡 Tips"
        : slide.callout?.tone === "info"
          ? "ℹ Info"
          : "📝 OBS";

  return (
    <div className={t?.align.includes("text-left") ? "text-left" : "text-center"}>
      {slide.callout && (
        <div
          className={`${KICKER} mb-4 font-semibold`}
          style={{ fontSize: KICKER_SIZE }}
        >
          {etikett}
        </div>
      )}
      {slide.title && (
        <div
          className="mx-auto mb-6 max-w-[30ch] text-balance font-display leading-tight text-stone-900"
          style={{ fontSize: "clamp(2rem, 7vh, 5rem)" }}
        >
          {slide.title}
        </div>
      )}
      {slide.body && t && (
        <p
          className={`mx-auto whitespace-pre-line text-stone-800 ${t.weight} ${t.align} ${t.measure} ${t.leading}`}
          style={{ fontSize: t.fontSize }}
        >
          {slide.body}
        </p>
      )}
    </div>
  );
}

function ExampleSlide({ slide }: { slide: Slide }) {
  return (
    <div className="mx-auto max-w-[72rem] text-left">
      <div
        className={`${KICKER} mb-8 text-center`}
        style={{ fontSize: KICKER_SIZE }}
      >
        {slide.title}
      </div>
      {slide.example?.user && (
        <div className="mb-6">
          <div
            className="mb-2 uppercase tracking-wider text-stone-500"
            style={{ fontSize: "clamp(0.75rem, 1.8vh, 1.25rem)" }}
          >
            Användare
          </div>
          <div
            className="rounded-3xl rounded-bl-md bg-stone-100 px-7 py-5 leading-snug text-stone-800"
            style={{ fontSize: "clamp(1.25rem, 3.6vh, 3rem)" }}
          >
            {slide.example.user}
          </div>
        </div>
      )}
      {slide.example?.ai && (
        <div className="mb-6">
          <div
            className="mb-2 uppercase tracking-wider text-stone-500"
            style={{ fontSize: "clamp(0.75rem, 1.8vh, 1.25rem)" }}
          >
            AI
          </div>
          <div
            className="rounded-3xl rounded-br-md px-7 py-5 leading-snug text-stone-800"
            style={{
              background: "var(--workshop-lila-soft)",
              fontSize: "clamp(1.25rem, 3.6vh, 3rem)",
            }}
          >
            {slide.example.ai}
          </div>
        </div>
      )}
      {slide.example?.note && (
        <p
          className="mt-5 text-pretty italic text-stone-600"
          style={{ fontSize: "clamp(0.875rem, 2.2vh, 1.75rem)" }}
        >
          {slide.example.note}
        </p>
      )}
    </div>
  );
}

/**
 * Renderar en FÖRFATTAD slide — flera block tillsammans. Graderna är
 * återhållsamma jämfört med de autogenererade eftersom blocken delar höjden.
 * Undantag: en slide med ett enda textblock får full brödtextskala, så att
 * ett författat utrop blir lika stort som ett autogenererat.
 */
function AuthoredSlideView({
  slide,
  tone,
  faltScope,
}: {
  slide: Slide;
  tone: string;
  faltScope?: string;
}) {
  const { varden } = useLararfalt(faltScope ?? "__utan-scope");
  const blocks = slide.blocks ?? [];
  const endaTextblock =
    blocks.length === 1 && (blocks[0].type === "p" || blocks[0].type === "quote");

  const P = "clamp(1.25rem, 3.4vh, 2.75rem)";
  const H = "clamp(1.75rem, 5.5vh, 4rem)";
  const SMA = "clamp(0.875rem, 2.1vh, 1.5rem)";

  return (
    <div className="mx-auto w-full max-w-[76rem]">
      {slide.etikett && (
        <div
          className={`${KICKER} mb-8 text-center`}
          style={{ fontSize: KICKER_SIZE }}
        >
          {slide.etikett}
        </div>
      )}
      <div className="space-y-[3vh]">
        {blocks.map((b, i) => {
          if (b.type === "h") {
            return (
              <div
                key={i}
                className="text-balance text-center font-display leading-tight text-stone-900"
                style={{ fontSize: H }}
              >
                {b.text}
              </div>
            );
          }

          if (b.type === "p" || b.type === "quote") {
            const text = b.type === "quote" ? `”${b.text}”` : b.text;
            if (endaTextblock) {
              const t = bodyType(text);
              return (
                <p
                  key={i}
                  className={`mx-auto whitespace-pre-line text-stone-800 ${t.weight} ${t.align} ${t.measure} ${t.leading}`}
                  style={{ fontSize: t.fontSize }}
                >
                  {text}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="mx-auto max-w-[52ch] text-pretty whitespace-pre-line font-medium leading-snug text-stone-800"
                style={{ fontSize: P }}
              >
                {text}
              </p>
            );
          }

          if (b.type === "list") {
            return (
              <ul
                key={i}
                className="mx-auto max-w-[46ch] space-y-[1.5vh] text-left font-medium leading-snug text-stone-800"
                style={{ fontSize: P }}
              >
                {b.items.map((it, idx) => (
                  <li key={idx} className="flex gap-4 text-pretty">
                    <span
                      className="shrink-0 font-display leading-none"
                      style={{
                        color: `var(--workshop-${tone})`,
                        fontSize: "1.2em",
                      }}
                      aria-hidden
                    >
                      {b.ordered ? `${idx + 1}` : "•"}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          }

          if (b.type === "steps") {
            return (
              <ol
                key={i}
                className="mx-auto max-w-[48ch] space-y-[1.5vh] text-left font-medium leading-snug text-stone-800"
                style={{ fontSize: P }}
              >
                {b.steps.map((s, idx) => (
                  <li key={idx} className="flex gap-4 text-pretty">
                    <span
                      className="shrink-0 font-display leading-none"
                      style={{
                        color: `var(--workshop-${tone})`,
                        fontSize: "1.2em",
                      }}
                    >
                      {(b.startFromStep ?? 1) + idx}
                    </span>
                    <span>
                      {s.title && <strong className="block">{s.title}</strong>}
                      {s.body}
                    </span>
                  </li>
                ))}
              </ol>
            );
          }

          if (b.type === "example") {
            return (
              <div key={i} className="mx-auto max-w-[64rem] text-left">
                {b.user && (
                  <div className="mb-[1.5vh]">
                    <div
                      className="mb-1 uppercase tracking-wider text-stone-500"
                      style={{ fontSize: SMA }}
                    >
                      Användare
                    </div>
                    <div
                      className="rounded-3xl rounded-bl-md bg-stone-100 px-6 py-4 leading-snug text-stone-800"
                      style={{ fontSize: P }}
                    >
                      {b.user}
                    </div>
                  </div>
                )}
                {b.ai && (
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
                        fontSize: P,
                      }}
                    >
                      {b.ai}
                    </div>
                  </div>
                )}
                {b.note && (
                  <p
                    className="mt-[1.5vh] italic text-stone-600"
                    style={{ fontSize: SMA }}
                  >
                    {b.note}
                  </p>
                )}
              </div>
            );
          }

          if (b.type === "callout") {
            return (
              <div
                key={i}
                className="mx-auto max-w-[52ch] rounded-2xl border-l-4 px-6 py-4 text-left"
                style={{
                  borderColor: `var(--workshop-${tone})`,
                  background: "rgba(255,255,255,0.55)",
                }}
              >
                {b.title && (
                  <div
                    className="mb-1 font-bold uppercase tracking-wider text-stone-600"
                    style={{ fontSize: SMA }}
                  >
                    {b.title}
                  </div>
                )}
                <p
                  className="text-pretty font-medium leading-snug text-stone-800"
                  style={{ fontSize: P }}
                >
                  {b.body}
                </p>
              </div>
            );
          }

          if (b.type === "images") {
            return (
              <div
                key={i}
                className={`mx-auto grid gap-4 ${
                  b.items.length === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {b.items.map((bild, idx) => (
                  // Vanlig img, inte next/image: en lärare kan peka ut en
                  // extern URL via ett lararfalt och då finns ingen
                  // förkonfigurerad domän att optimera mot.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={idx}
                    src={bild.src}
                    alt={bild.alt}
                    className="mx-auto max-h-[52vh] w-auto rounded-2xl border border-stone-300 object-contain"
                  />
                ))}
              </div>
            );
          }

          if (b.type === "lararfalt") {
            const varde = (varden[b.id] ?? "").trim();
            // Ser texten ut som en bild-URL visar vi bilden i stället.
            const arBild = /^https?:\/\/\S+\.(png|jpe?g|gif|webp|avif|svg)/i.test(
              varde
            );
            if (!varde) {
              return (
                <div
                  key={i}
                  className="mx-auto max-w-[44ch] rounded-2xl border-2 border-dashed border-stone-400 px-6 py-5 text-center text-stone-500"
                  style={{ fontSize: SMA }}
                >
                  <span className="font-semibold">{b.label}</span> är inte
                  ifyllt. Fyll i det i lärarhandledningen innan lektionen.
                </div>
              );
            }
            if (arBild) {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={varde}
                  alt={b.label}
                  className="mx-auto max-h-[62vh] w-auto rounded-2xl border border-stone-300 object-contain"
                />
              );
            }
            // Lärarens värde kan vara tre ord eller en hel elevtext på 250 —
            // samma trappa som brödtexten annars, så ett långt textblock
            // hamnar i den täta graden i stället för att spilla ur skärmen.
            const ft = bodyType(varde);
            return (
              <p
                key={i}
                className={`mx-auto whitespace-pre-line text-stone-800 ${ft.weight} ${ft.align} ${ft.measure} ${ft.leading}`}
                style={{ fontSize: ft.fontSize }}
              >
                {varde}
              </p>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

export type PresentationEngineProps = {
  /** Länk för X-knappen — tillbaka till innehållssidan. */
  closeHref: string;
  /** Färg-nyckel som matchar --workshop-<tone>-variablerna. */
  tone?: string;
  /** Liten kicker + titel i toolbaren. */
  toolbar: { kicker: string; title: string };
  /** Innehåll för första sliden. */
  titleSlide: { kicker: string; title: string; blurb?: string };
  /** Ett eller flera lägen (Prova själv / Lärarhandledning / Elevinstruktion). */
  modes: PresentationMode[];
  /** Valfri avslutande slide med länk-knapp (t.ex. interaktivt klassrumsläge). */
  finalCta?: { label: string; href: string };
  /**
   * Övningens id — nyckel för lärarens egna ifyllningar. Utan den visar
   * lararfalt-block en uppmaning i stället för innehåll.
   */
  faltScope?: string;
};

/**
 * Generisk storskärmsmotor — renderar Block[]-lägen som slides.
 * Används av källkritik-workshopen (via PresentationView) och AI-övningsbanken.
 * Kräver en .workshop-root-förfader för färger och typografi.
 */
export function PresentationEngine({
  closeHref,
  tone = "havsblå",
  toolbar,
  titleSlide,
  modes,
  finalCta,
  faltScope,
}: PresentationEngineProps) {
  const [modeIdx, setModeIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  // Behövs här — inte bara i slide-renderaren — eftersom tomma valfria
  // lärarfält ska plocka bort hela sliden ur sekvensen, och den filtrerade
  // listan måste vara densamma för skärm, utskrift och PPTX.
  const { varden: faltVarden } = useLararfalt(faltScope ?? "__utan-scope");

  const slides = useMemo(() => {
    if (modes.length === 0) return [];
    const m = modes[modeIdx];
    const list: Slide[] = m.slides
      ? authoredToSlides(m.label, m.slides)
      : blocksToSlides(m.blocks ?? [], m.label);
    if (finalCta) {
      list.push({ kind: "cta", title: finalCta.label });
    }
    return filtreraSlides(list, faltVarden);
  }, [modes, modeIdx, finalCta, faltVarden]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
    {/* Utskriftsdecket — osynligt på skärmen, en slide per sida i PDF. */}
    <PrintDeck
      slides={slides}
      tone={tone}
      faltScope={faltScope}
      titel={titleSlide.title}
      lageLabel={modes[modeIdx]?.label ?? ""}
    />
    <div
      className="slide-skarmvy fixed inset-0 z-50 flex flex-col workshop-paper"
      data-chapter-tone={tone}
    >
      {/* TOOLBAR */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-stone-300 bg-workshop-canvas/90 backdrop-blur">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={closeHref}
            className="grid h-9 w-9 place-items-center rounded-full bg-stone-200 hover:bg-stone-300"
            aria-label="Stäng presentation"
          >
            <X className="h-4 w-4" />
          </Link>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-stone-500">
              {toolbar.kicker}
            </div>
            <div className="font-display text-xl text-stone-900 truncate">
              {toolbar.title}
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
                  {m.audience === "elev" ? (
                    <School className="h-3.5 w-3.5" />
                  ) : (
                    <GraduationCap className="h-3.5 w-3.5" />
                  )}
                  {m.label.replace("-läge", "")}
                </button>
              ))}
            </div>
          )}
          <ExportButtons
            slides={slides}
            titel={titleSlide.title}
            lageLabel={modes[modeIdx]?.label ?? ""}
            blurb={titleSlide.blurb}
            tone={tone}
            faltScope={faltScope}
          />
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
      <div className="relative min-h-0 flex-1">
        <button
          onClick={prev}
          disabled={slideIdx === 0}
          className="absolute left-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-stone-900 text-workshop-canvas transition-colors hover:bg-stone-800 disabled:opacity-20"
          aria-label="Föregående"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={next}
          disabled={slideIdx === total - 1}
          className="absolute right-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-stone-900 text-workshop-canvas transition-colors hover:bg-stone-800 disabled:opacity-20"
          aria-label="Nästa"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Scrollbar som sista utväg — en oväntat lång slide ska aldrig
            klippas bort mitt i en mening. Padding håller innehållet fritt
            från pilarna. */}
        <div className="h-full overflow-y-auto px-6 py-10 sm:px-24 lg:px-28">
          <div className="mx-auto flex min-h-full w-full max-w-[88rem] flex-col justify-center">
            {slide?.kind === "title" && (
              <div className="text-center">
                <div
                  className={`${KICKER} mb-4`}
                  style={{ fontSize: KICKER_SIZE }}
                >
                  {titleSlide.kicker}
                </div>
                <div
                  className="mx-auto mb-6 max-w-[24ch] text-balance font-display leading-[0.95] text-stone-900"
                  style={{ fontSize: DISPLAY_STOR }}
                >
                  {titleSlide.title}
                </div>
                {titleSlide.blurb && (
                  <p
                    className="mx-auto max-w-[44ch] text-balance leading-snug text-stone-700"
                    style={{ fontSize: "clamp(1.125rem, 3vh, 2.25rem)" }}
                  >
                    {titleSlide.blurb}
                  </p>
                )}
                <div
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-workshop-canvas"
                  style={{ fontSize: KICKER_SIZE }}
                >
                  {slide.title}
                </div>
              </div>
            )}
            {slide?.kind === "section" && (
              <div
                className="mx-auto max-w-[24ch] text-balance text-center font-display leading-[0.95] text-stone-900"
                style={{ fontSize: DISPLAY_STOR }}
              >
                {slide.title}
              </div>
            )}
            {slide?.kind === "step" && <StepSlide slide={slide} tone={tone} />}
            {slide?.kind === "list" && <ListSlide slide={slide} tone={tone} />}
            {slide?.kind === "callout" && <CalloutSlide slide={slide} />}
            {slide?.kind === "example" && <ExampleSlide slide={slide} />}
            {slide?.kind === "authored" && (
              <AuthoredSlideView
                slide={slide}
                tone={tone}
                faltScope={faltScope}
              />
            )}
            {slide?.kind === "cta" && finalCta && (
              <div className="text-center">
                <div className={`${KICKER} mb-6`}>Nästa steg</div>
                <div className="mb-10 font-display text-6xl leading-[0.95] text-stone-900 lg:text-7xl">
                  Kör det interaktiva läget
                </div>
                <Link
                  href={finalCta.href}
                  className="inline-flex items-center gap-3 rounded-full bg-teal-600 px-10 py-5 text-2xl font-semibold text-white shadow-lg transition-colors hover:bg-teal-700 lg:text-3xl"
                >
                  {finalCta.label}
                  <ArrowRight className="h-7 w-7" />
                </Link>
              </div>
            )}
          </div>
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
    </>
  );
}

/** Källkritik-workshopens storskärmsvy — tunn adapter ovanpå PresentationEngine. */
export function PresentationView({ activity }: { activity: Activity }) {
  const chapter = chaptersById[activity.chapter];

  const modes: PresentationMode[] = [];
  // Finns ett författat klassrumsspår läggs det FÖRST och blir default — det
  // är gjort för projektorn. Saknas det behåller workshopen exakt sin
  // gamla ordning, så befintligt bruk är oförändrat.
  if (activity.klassrum) {
    modes.push({
      label: "Klassrum",
      slides: activity.klassrum,
      audience: "elev",
    });
  }
  if (activity.workshopExperience) {
    modes.push({ label: "Prova själv", blocks: activity.workshopExperience });
  }
  if (activity.teacherGuide) {
    modes.push({ label: "Lärarhandledning", blocks: activity.teacherGuide });
  }
  if (activity.studentInstructions) {
    modes.push({
      label: "Elevinstruktion",
      blocks: activity.studentInstructions,
      audience: "elev",
    });
  }

  return (
    <PresentationEngine
      closeHref={`/workshops/kallkritik-mellanstadiet/${activity.id}`}
      tone={chapter.tone}
      toolbar={{
        kicker: `Kap ${chapter.number} · ${chapter.title}`,
        title: `${activity.number} ${activity.title}`,
      }}
      titleSlide={{
        kicker: chapter.title,
        title: activity.title,
        blurb: activity.blurb,
      }}
      modes={modes}
      // Samma nyckel som banken använder — aktivitets-id:t är gemensamt, så
      // en lärare som fyllt i fälten via bankens sida ser dem här också.
      faltScope={activity.id}
    />
  );
}
