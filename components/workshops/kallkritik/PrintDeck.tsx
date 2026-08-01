"use client";

import type { Block } from "@/lib/workshops/kallkritik/types";
import type { Slide } from "@/lib/workshops/kallkritik/slides";
import { wordCount } from "@/lib/workshops/kallkritik/slides";
import { useLararfalt } from "@/hooks/useLararfalt";
import "./slide-print.css";

/**
 * Alla slides staplade, en per utskriftssida. Osynlig på skärmen — träder
 * fram bara i utskrift/PDF (se slide-print.css).
 *
 * Egen renderare i stället för att återanvända skärmkomponenterna: skärmens
 * grader är viewport-relativa (`vh`), vilket inte går att lita på i en
 * utskriftskontext. Här är allt pt-baserat och avstämt mot A4 liggande.
 */
export function PrintDeck({
  slides,
  tone,
  faltScope,
  titel,
  lageLabel,
}: {
  slides: Slide[];
  tone: string;
  faltScope?: string;
  titel: string;
  lageLabel: string;
}) {
  const { varden } = useLararfalt(faltScope ?? "__utan-scope");

  return (
    <div className="slide-print-deck" aria-hidden>
      {slides.map((slide, i) => (
        <section key={i} className="slide-print-sida relative">
          <PrintSlide
            slide={slide}
            tone={tone}
            varden={varden}
            titel={titel}
            lageLabel={lageLabel}
          />
          <span className="slide-print-fot">
            {titel} · {lageLabel} · {i + 1}/{slides.length}
          </span>
        </section>
      ))}
    </div>
  );
}

/** Grad efter textmängd, samma trappa som på skärmen men i pt-klasser. */
function bradClass(text: string): string {
  const ord = wordCount(text);
  if (ord <= 12) return "slide-print-brod-stor";
  if (ord <= 40) return "slide-print-brod";
  return "slide-print-brod-liten";
}

function PrintSlide({
  slide,
  tone,
  varden,
  titel,
  lageLabel,
}: {
  slide: Slide;
  tone: string;
  varden: Record<string, string>;
  titel: string;
  lageLabel: string;
}) {
  const tonFarg = `var(--workshop-${tone})`;

  if (slide.kind === "title") {
    return (
      <div className="text-center">
        <div className="slide-print-etikett">{lageLabel}</div>
        <div className="slide-print-display font-display">{titel}</div>
      </div>
    );
  }

  if (slide.kind === "section") {
    return (
      <div className="slide-print-display font-display text-center">
        {slide.title}
      </div>
    );
  }

  if (slide.kind === "step") {
    const langText = slide.body ? wordCount(slide.body) > 40 : false;
    return (
      <div className={langText ? "text-left" : "text-center"}>
        {slide.title && (
          <div className="slide-print-etikett">{slide.title}</div>
        )}
        {slide.stepNumber !== undefined && (
          <div
            className="slide-print-siffra font-display"
            style={{ color: tonFarg }}
          >
            {slide.stepNumber}
          </div>
        )}
        {slide.body && (
          <p
            className={`${bradClass(slide.body)} mx-auto max-w-[46ch] whitespace-pre-line`}
          >
            {slide.body}
          </p>
        )}
        {slide.time && <p className="slide-print-not mt-4">{slide.time}</p>}
      </div>
    );
  }

  if (slide.kind === "list") {
    return (
      <div>
        {slide.title && (
          <div className="slide-print-etikett text-center">{slide.title}</div>
        )}
        <ul className="mx-auto max-w-[52ch] space-y-3 text-left">
          {slide.items?.map((it, i) => (
            <li key={i} className={`${bradClass(it)} flex gap-3`}>
              <span style={{ color: tonFarg }} aria-hidden>
                •
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (slide.kind === "callout") {
    return (
      <div
        className="mx-auto max-w-[56ch] pl-5 text-left"
        style={{ borderLeft: `2mm solid ${tonFarg}` }}
      >
        {slide.title && (
          <div className="slide-print-rubrik font-display mb-3">
            {slide.title}
          </div>
        )}
        {slide.body && (
          <p className={bradClass(slide.body)}>{slide.body}</p>
        )}
      </div>
    );
  }

  if (slide.kind === "example") {
    return (
      <div className="mx-auto w-full max-w-[62ch] text-left">
        <div className="slide-print-etikett text-center">{slide.title}</div>
        {slide.example?.user && (
          <div
            className="slide-print-bubbla mb-4"
            style={{ background: "#f5f5f4" }}
          >
            {slide.example.user}
          </div>
        )}
        {slide.example?.ai && (
          <div
            className="slide-print-bubbla"
            style={{ background: "var(--workshop-lila-soft)" }}
          >
            {slide.example.ai}
          </div>
        )}
        {slide.example?.note && (
          <p className="slide-print-not mt-3">{slide.example.note}</p>
        )}
      </div>
    );
  }

  if (slide.kind === "authored") {
    return (
      <div className="mx-auto w-full">
        {slide.etikett && (
          <div className="slide-print-etikett text-center">{slide.etikett}</div>
        )}
        <div className="space-y-5">
          {(slide.blocks ?? []).map((b, i) => (
            <PrintBlock
              key={i}
              block={b}
              tonFarg={tonFarg}
              varden={varden}
              ensam={(slide.blocks ?? []).length === 1}
            />
          ))}
        </div>
      </div>
    );
  }

  if (slide.kind === "cta") {
    return (
      <div className="slide-print-display font-display text-center">
        Kör det interaktiva läget
      </div>
    );
  }

  return null;
}

function PrintBlock({
  block: b,
  tonFarg,
  varden,
  ensam,
}: {
  block: Block;
  tonFarg: string;
  varden: Record<string, string>;
  ensam: boolean;
}) {
  if (b.type === "h") {
    return (
      <div className="slide-print-rubrik font-display text-center">
        {b.text}
      </div>
    );
  }

  if (b.type === "p" || b.type === "quote") {
    const text = b.type === "quote" ? `”${b.text}”` : b.text;
    return (
      <p
        className={`${
          ensam ? bradClass(text) : "slide-print-brod"
        } mx-auto max-w-[52ch] whitespace-pre-line text-center`}
      >
        {text}
      </p>
    );
  }

  if (b.type === "list") {
    return (
      <ul className="mx-auto max-w-[52ch] space-y-2 text-left">
        {b.items.map((it, i) => (
          <li key={i} className="slide-print-brod flex gap-3">
            <span style={{ color: tonFarg }} aria-hidden>
              {b.ordered ? `${i + 1}.` : "•"}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (b.type === "steps") {
    return (
      <ol className="mx-auto max-w-[52ch] space-y-2 text-left">
        {b.steps.map((s, i) => (
          <li key={i} className="slide-print-brod flex gap-3">
            <span style={{ color: tonFarg }}>
              {(b.startFromStep ?? 1) + i}.
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

  if (b.type === "callout") {
    return (
      <div
        className="mx-auto max-w-[56ch] pl-4 text-left"
        style={{ borderLeft: `2mm solid ${tonFarg}` }}
      >
        {b.title && <strong className="slide-print-brod block">{b.title}</strong>}
        <p className="slide-print-brod">{b.body}</p>
      </div>
    );
  }

  if (b.type === "example") {
    return (
      <div className="mx-auto w-full max-w-[58ch] text-left">
        {b.user && (
          <div
            className="slide-print-bubbla mb-3"
            style={{ background: "#f5f5f4" }}
          >
            {b.user}
          </div>
        )}
        {b.ai && (
          <div
            className="slide-print-bubbla"
            style={{ background: "var(--workshop-lila-soft)" }}
          >
            {b.ai}
          </div>
        )}
        {b.note && <p className="slide-print-not mt-2">{b.note}</p>}
      </div>
    );
  }

  if (b.type === "images") {
    return (
      <div className="flex justify-center gap-4">
        {b.items.map((bild, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={bild.src} alt={bild.alt} />
        ))}
      </div>
    );
  }

  if (b.type === "interaktiv") {
    // Utskrift kan inte bära interaktion — visa den statiska fallbacken.
    return (
      <div className="space-y-3">
        {b.statiskFallback.map((fb, i) => (
          <PrintBlock
            key={i}
            block={fb}
            tonFarg={tonFarg}
            varden={varden}
            ensam={b.statiskFallback.length === 1}
          />
        ))}
      </div>
    );
  }

  if (b.type === "lararfalt") {
    const varde = (varden[b.id] ?? "").trim();
    const arBild = /^https?:\/\/\S+\.(png|jpe?g|gif|webp|avif|svg)/i.test(varde);
    if (!varde) {
      return (
        <p className="slide-print-not mx-auto max-w-[46ch] text-center">
          [{b.label} — inte ifyllt]
        </p>
      );
    }
    if (arBild) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={varde} alt={b.label} />;
    }
    return (
      <p
        className={`${
          ensam ? bradClass(varde) : "slide-print-brod"
        } mx-auto max-w-[52ch] whitespace-pre-line text-center`}
      >
        {varde}
      </p>
    );
  }

  return null;
}
