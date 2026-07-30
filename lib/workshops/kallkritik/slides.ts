// Slide-modellen för storskärmsläget — ren logik, ingen React.
//
// Ligger separat från PresentationView eftersom tre konsumenter behöver
// exakt samma sliduppdelning: skärmvyn, utskriften (PDF) och
// PowerPoint-exporten. Skulle uppdelningen bo i komponenten skulle
// exporterna behöva återimplementera den, och då glider de isär.

import type { Block, KlassrumSlide } from "./types";

export type SlideKind =
  | "title"
  | "step"
  | "list"
  | "section"
  | "callout"
  | "example"
  | "cta"
  // Författad slide — flera block renderas tillsammans i stället för att
  // varje block blir sin egen slide.
  | "authored";

export type Slide = {
  kind: SlideKind;
  title?: string;
  body?: string;
  items?: string[];
  time?: string;
  stepNumber?: number;
  callout?: { tone: "warning" | "info" | "tip" | "note"; title?: string };
  example?: { user?: string; ai?: string; note?: string };
  /** För kind: "authored". */
  blocks?: Block[];
  etikett?: string;
  /**
   * Villkorlig slide. `faltTomt` betyder: visa BARA om lärarfältet med det
   * id:t är tomt. Används för reservinnehåll — en övning kan ha ett inbyggt
   * exempel som gäller när läraren inte lagt in ett eget, utan att båda visas.
   */
  visaOm?: { faltTomt: string };
};

/**
 * Motorns namn på en författad slide. Alias till den kanoniska KlassrumSlide
 * i ./types — ett och samma begrepp, inte två som kan glida ifrån varandra.
 */
export type AuthoredSlide = KlassrumSlide;

/** Autogenererar slides ur ett Block[]-läge — ett block blir en slide. */
export function blocksToSlides(blocks: Block[], modeLabel: string): Slide[] {
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
        slides.push({ kind: "list", title: currentHeading, items: b.items });
      }
    } else if (b.type === "steps") {
      b.steps.forEach((s, idx) => {
        slides.push({
          kind: "step",
          title: s.title,
          body: s.body,
          time: s.time,
          stepNumber: (b.startFromStep ?? 1) + idx,
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
    } else if (b.type === "lararfalt" || b.type === "images") {
      // Lärarfält och bilder har ingen egen autogenererad slide-form — låt
      // den författade renderaren ta dem, den hanterar båda.
      slides.push({ kind: "authored", blocks: [b] });
    }
  }
  return slides;
}

/** Mappar ett författat spår till slides — slidegränserna är redan satta. */
export function authoredToSlides(
  modeLabel: string,
  authored: AuthoredSlide[]
): Slide[] {
  return [
    { kind: "title", title: modeLabel },
    ...authored.map((s) => ({
      kind: "authored" as const,
      etikett: s.etikett,
      blocks: s.blocks,
      visaOm: s.visaOm,
    })),
  ];
}

/**
 * Filtrerar bort slides som inte ska visas, av två skäl:
 *
 * 1. Slidens samtliga block är tomma VALFRIA lärarfält — inget att visa.
 *    Används för upprepade platser: en övning kan erbjuda sex exempelslides,
 *    och läraren som förberett fyra ska se fyra, inte fyra plus två
 *    uppmaningar mitt i lektionen.
 *
 * 2. Sliden är en reserv (`visaOm.faltTomt`) och fältet ÄR ifyllt — då har
 *    läraren lagt in eget innehåll och det inbyggda ska stiga åt sidan.
 *
 * Körs i motorn så att skärm, utskrift och PPTX får exakt samma sekvens.
 */
export function filtreraSlides(
  slides: Slide[],
  faltVarden: Record<string, string>
): Slide[] {
  const ifyllt = (id: string) => (faltVarden[id] ?? "").trim().length > 0;

  return slides.filter((s) => {
    if (s.kind !== "authored") return true;

    // Reservslide: göm den när läraren lagt in eget innehåll.
    if (s.visaOm?.faltTomt && ifyllt(s.visaOm.faltTomt)) return false;

    const blocks = s.blocks ?? [];
    if (blocks.length === 0) return true;
    return !blocks.every(
      (b) => b.type === "lararfalt" && b.valfri === true && !ifyllt(b.id)
    );
  });
}

/** Ordantal — driver den adaptiva typografin i renderarna. */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Plattar en slide till ren text — används av PPTX-exporten för de block
 * som inte har en egen form där, och av alt-texter.
 */
export function slideBlocksToText(
  blocks: Block[],
  faltVarden: Record<string, string> = {}
): string[] {
  const rader: string[] = [];
  for (const b of blocks) {
    switch (b.type) {
      case "h":
      case "p":
        rader.push(b.text);
        break;
      case "quote":
        rader.push(`”${b.text}”`);
        break;
      case "list":
        b.items.forEach((it, i) =>
          rader.push(b.ordered ? `${i + 1}. ${it}` : `• ${it}`)
        );
        break;
      case "steps":
        b.steps.forEach((s, i) => {
          const nr = (b.startFromStep ?? 1) + i;
          rader.push(`${nr}. ${s.title ? `${s.title} — ` : ""}${s.body}`);
        });
        break;
      case "callout":
        if (b.title) rader.push(b.title);
        rader.push(b.body);
        break;
      case "example":
        if (b.user) rader.push(`Användare: ${b.user}`);
        if (b.ai) rader.push(`AI: ${b.ai}`);
        if (b.note) rader.push(b.note);
        break;
      case "lararfalt": {
        const varde = (faltVarden[b.id] ?? "").trim();
        rader.push(varde || `[${b.label} — inte ifyllt]`);
        break;
      }
      case "images":
        b.items.forEach((i) => rader.push(i.caption ?? i.alt));
        break;
    }
  }
  return rader;
}
