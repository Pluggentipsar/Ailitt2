// PowerPoint-export av ett storskärmsläge.
//
// Körs helt i webbläsaren — pptxgenjs importeras dynamiskt så att biblioteket
// (~1 MB) bara laddas när läraren faktiskt klickar på exporten, inte i
// bundlen för varje storskärmssida.
//
// Trohet: pptxgenjs kan inte bädda in typsnitt. Vi anger de riktiga namnen så
// att den som har Caveat och Nunito Sans installerade får rätt utseende, och
// PowerPoint substituerar för alla andra. Pappersstrukturen finns inte med —
// bakgrunden blir den plana gräddfärgen. Vill man ha exakt utseende är
// PDF-utskriften vägen.

import type { Block } from "@/lib/workshops/kallkritik/types";
import { type Slide, slideBlocksToText } from "@/lib/workshops/kallkritik/slides";

/** Workshop-paletten i hex — speglar :root i workshop.css. */
const TON: Record<string, string> = {
  senap: "E0A82E",
  terrakotta: "C4623E",
  havsblå: "4A7C8F",
  skog: "5B7553",
  lila: "7A5B8E",
  kol: "2C2C2C",
  plommon: "6B3A4E",
  rost: "A85C2E",
};

const PAPPER = "FBF5EA";
const BLACK = "292524";
const GRA = "78716C";
const LILA_SOFT = "E5DAEC";

const DISPLAY = "Caveat";
const BROD = "Nunito Sans";

// 16:9 i tum — pptxgenjs LAYOUT_16x9 är 10 × 5.625.
const B = 10;
const H = 5.625;
const MARGINAL = 0.6;
const INNER = B - MARGINAL * 2;

export type PptxOptions = {
  slides: Slide[];
  /** Filnamnets stam och deckets titel. */
  titel: string;
  /** Lägets namn, t.ex. "Klassrum" — hamnar i undertexten på titelsliden. */
  lageLabel: string;
  blurb?: string;
  /** Tonnyckel ur workshop-paletten. */
  tone?: string;
  /** Lärarens ifyllda fält. */
  faltVarden?: Record<string, string>;
};

/** Grad som skalar med textmängd — samma princip som på skärmen. */
function gradFor(text: string, tak = 32): number {
  const ord = text.trim().split(/\s+/).filter(Boolean).length;
  if (ord <= 12) return tak;
  if (ord <= 30) return Math.round(tak * 0.72);
  if (ord <= 60) return Math.round(tak * 0.56);
  return Math.round(tak * 0.44);
}

export async function exportToPptx({
  slides,
  titel,
  lageLabel,
  blurb,
  tone = "havsblå",
  faltVarden = {},
}: PptxOptions): Promise<void> {
  const PptxGenJS = (await import("pptxgenjs")).default;
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.title = titel;
  const accent = TON[tone] ?? TON.havsblå;

  const nySlide = () => {
    const s = pptx.addSlide();
    s.background = { color: PAPPER };
    return s;
  };

  /** Liten versal etikett högst upp. */
  const etikett = (s: ReturnType<typeof nySlide>, text: string) => {
    s.addText(text.toUpperCase(), {
      x: MARGINAL,
      y: 0.35,
      w: INNER,
      h: 0.4,
      fontFace: BROD,
      fontSize: 12,
      color: GRA,
      charSpacing: 2,
      align: "center",
    });
  };

  for (const slide of slides) {
    const s = nySlide();

    if (slide.kind === "title") {
      s.addText(titel, {
        x: MARGINAL,
        y: 1.5,
        w: INNER,
        h: 1.6,
        fontFace: DISPLAY,
        fontSize: 60,
        bold: true,
        color: BLACK,
        align: "center",
        valign: "bottom",
      });
      if (blurb) {
        s.addText(blurb, {
          x: 1.2,
          y: 3.2,
          w: B - 2.4,
          h: 1.1,
          fontFace: BROD,
          fontSize: 16,
          color: BLACK,
          align: "center",
        });
      }
      s.addText(lageLabel, {
        x: 3.5,
        y: 4.5,
        w: 3,
        h: 0.45,
        fontFace: BROD,
        fontSize: 13,
        color: PAPPER,
        fill: { color: BLACK },
        align: "center",
        valign: "middle",
        rectRadius: 0.22,
        shape: pptx.ShapeType.roundRect,
      });
      continue;
    }

    if (slide.kind === "section") {
      s.addText(slide.title ?? "", {
        x: MARGINAL,
        y: 1.6,
        w: INNER,
        h: 2.4,
        fontFace: DISPLAY,
        fontSize: 54,
        bold: true,
        color: BLACK,
        align: "center",
        valign: "middle",
      });
      continue;
    }

    if (slide.kind === "step") {
      if (slide.title) etikett(s, slide.title);
      let y = 1.0;
      if (slide.stepNumber !== undefined) {
        s.addText(String(slide.stepNumber), {
          x: MARGINAL,
          y: 0.85,
          w: INNER,
          h: 1.3,
          fontFace: DISPLAY,
          fontSize: 72,
          bold: true,
          color: accent,
          align: "center",
        });
        y = 2.3;
      }
      if (slide.body) {
        s.addText(slide.body, {
          x: 1.0,
          y,
          w: B - 2.0,
          h: H - y - 0.6,
          fontFace: BROD,
          fontSize: gradFor(slide.body, 30),
          color: BLACK,
          align: slide.stepNumber !== undefined ? "left" : "center",
          valign: "top",
        });
      }
      if (slide.time) {
        s.addText(slide.time, {
          x: 3.75,
          y: H - 0.75,
          w: 2.5,
          h: 0.4,
          fontFace: BROD,
          fontSize: 12,
          color: BLACK,
          align: "center",
        });
      }
      continue;
    }

    if (slide.kind === "list") {
      if (slide.title) etikett(s, slide.title);
      const items = slide.items ?? [];
      s.addText(
        items.map((it) => ({
          text: it,
          options: { bullet: { characterCode: "2022" }, breakLine: true },
        })),
        {
          x: 1.2,
          y: 1.1,
          w: B - 2.4,
          h: H - 1.8,
          fontFace: BROD,
          fontSize: items.length > 5 ? 16 : 20,
          color: BLACK,
          align: "left",
          valign: "middle",
          lineSpacingMultiple: 1.3,
        }
      );
      continue;
    }

    if (slide.kind === "callout") {
      etikett(
        s,
        slide.callout?.tone === "warning"
          ? "Viktigt"
          : slide.callout?.tone === "tip"
            ? "Tips"
            : slide.callout?.tone === "info"
              ? "Info"
              : "OBS"
      );
      // Färgad kantlinje till vänster, som på skärmen.
      s.addShape(pptx.ShapeType.rect, {
        x: MARGINAL,
        y: 1.2,
        w: 0.07,
        h: H - 2.1,
        fill: { color: accent },
      });
      let y = 1.2;
      if (slide.title) {
        s.addText(slide.title, {
          x: MARGINAL + 0.35,
          y,
          w: INNER - 0.35,
          h: 0.9,
          fontFace: DISPLAY,
          fontSize: 34,
          bold: true,
          color: BLACK,
          align: "left",
        });
        y += 1.0;
      }
      if (slide.body) {
        s.addText(slide.body, {
          x: MARGINAL + 0.35,
          y,
          w: INNER - 0.35,
          h: H - y - 0.8,
          fontFace: BROD,
          fontSize: gradFor(slide.body, 24),
          color: BLACK,
          align: "left",
          valign: "top",
        });
      }
      continue;
    }

    if (slide.kind === "example") {
      etikett(s, slide.title ?? "Exempel");
      let y = 1.1;
      if (slide.example?.user) {
        s.addText(slide.example.user, {
          x: 1.0,
          y,
          w: B - 2.0,
          h: 1.2,
          fontFace: BROD,
          fontSize: 16,
          color: BLACK,
          fill: { color: "F5F5F4" },
          align: "left",
          valign: "middle",
          margin: 10,
          shape: pptx.ShapeType.roundRect,
          rectRadius: 0.15,
        });
        y += 1.4;
      }
      if (slide.example?.ai) {
        s.addText(slide.example.ai, {
          x: 1.0,
          y,
          w: B - 2.0,
          h: 1.2,
          fontFace: BROD,
          fontSize: 16,
          color: BLACK,
          fill: { color: LILA_SOFT },
          align: "left",
          valign: "middle",
          margin: 10,
          shape: pptx.ShapeType.roundRect,
          rectRadius: 0.15,
        });
        y += 1.4;
      }
      if (slide.example?.note) {
        s.addText(slide.example.note, {
          x: 1.0,
          y,
          w: B - 2.0,
          h: 0.6,
          fontFace: BROD,
          fontSize: 12,
          italic: true,
          color: GRA,
          align: "left",
        });
      }
      continue;
    }

    if (slide.kind === "authored") {
      if (slide.etikett) etikett(s, slide.etikett);
      renderaAuthored(pptx, s, slide.blocks ?? [], faltVarden, accent);
      continue;
    }

    if (slide.kind === "cta") {
      s.addText("Kör det interaktiva läget", {
        x: MARGINAL,
        y: 2.2,
        w: INNER,
        h: 1.2,
        fontFace: DISPLAY,
        fontSize: 44,
        bold: true,
        color: BLACK,
        align: "center",
      });
      continue;
    }
  }

  await pptx.writeFile({ fileName: `${filnamn(titel)}.pptx` });
}

/** Författad slide — blocken staplas med proportionell höjd. */
function renderaAuthored(
  pptx: InstanceType<typeof import("pptxgenjs").default>,
  s: ReturnType<
    InstanceType<typeof import("pptxgenjs").default>["addSlide"]
  >,
  blocks: Block[],
  faltVarden: Record<string, string>,
  accent: string
) {
  const topp = 1.0;
  const tillgangligt = H - topp - 0.5;
  // Enkel jämn fördelning — författade slides har få block per slide.
  const antal = Math.max(blocks.length, 1);
  const hojd = tillgangligt / antal;

  blocks.forEach((b, i) => {
    const y = topp + i * hojd;

    if (b.type === "h") {
      s.addText(b.text, {
        x: MARGINAL,
        y,
        w: INNER,
        h: hojd,
        fontFace: DISPLAY,
        fontSize: 40,
        bold: true,
        color: BLACK,
        align: "center",
        valign: "middle",
      });
      return;
    }

    if (b.type === "p" || b.type === "quote") {
      const text = b.type === "quote" ? `”${b.text}”` : b.text;
      s.addText(text, {
        x: 1.0,
        y,
        w: B - 2.0,
        h: hojd,
        fontFace: BROD,
        fontSize: antal === 1 ? gradFor(text, 30) : gradFor(text, 20),
        color: BLACK,
        align: "center",
        valign: "middle",
      });
      return;
    }

    if (b.type === "list") {
      s.addText(
        b.items.map((it, idx) => ({
          text: it,
          options: b.ordered
            ? { bullet: { type: "number" as const }, breakLine: true }
            : { bullet: { characterCode: "2022" }, breakLine: true },
        })),
        {
          x: 1.2,
          y,
          w: B - 2.4,
          h: hojd,
          fontFace: BROD,
          fontSize: 18,
          color: BLACK,
          align: "left",
          valign: "middle",
          lineSpacingMultiple: 1.25,
        }
      );
      return;
    }

    if (b.type === "steps") {
      s.addText(
        b.steps.map((st) => ({
          text: `${st.title ? `${st.title} — ` : ""}${st.body}`,
          options: { bullet: { type: "number" as const }, breakLine: true },
        })),
        {
          x: 1.2,
          y,
          w: B - 2.4,
          h: hojd,
          fontFace: BROD,
          fontSize: 16,
          color: BLACK,
          align: "left",
          valign: "middle",
          lineSpacingMultiple: 1.25,
        }
      );
      return;
    }

    if (b.type === "callout") {
      s.addShape(pptx.ShapeType.rect, {
        x: MARGINAL,
        y,
        w: 0.06,
        h: hojd * 0.9,
        fill: { color: accent },
      });
      s.addText(
        [
          ...(b.title
            ? [{ text: b.title, options: { bold: true, breakLine: true } }]
            : []),
          { text: b.body },
        ],
        {
          x: MARGINAL + 0.3,
          y,
          w: INNER - 0.3,
          h: hojd * 0.9,
          fontFace: BROD,
          fontSize: 18,
          color: BLACK,
          align: "left",
          valign: "middle",
        }
      );
      return;
    }

    if (b.type === "example") {
      const rader: string[] = [];
      if (b.user) rader.push(`Användare: ${b.user}`);
      if (b.ai) rader.push(`AI: ${b.ai}`);
      if (b.note) rader.push(b.note);
      s.addText(rader.join("\n"), {
        x: 1.0,
        y,
        w: B - 2.0,
        h: hojd,
        fontFace: BROD,
        fontSize: 16,
        color: BLACK,
        align: "left",
        valign: "middle",
      });
      return;
    }

    if (b.type === "images") {
      // Relativa sökvägar fungerar inte i en fristående pptx — bara
      // absoluta URL:er kan hämtas av PowerPoint. Lägg annars en not.
      const bild = b.items[0];
      if (bild && /^https?:\/\//i.test(bild.src)) {
        s.addImage({
          path: bild.src,
          x: 2.5,
          y,
          w: 5,
          h: Math.min(hojd, 3),
          sizing: { type: "contain", w: 5, h: Math.min(hojd, 3) },
        });
      } else {
        s.addText(`[Bild: ${bild?.alt ?? ""} — finns i webbversionen]`, {
          x: 1.0,
          y,
          w: B - 2.0,
          h: hojd,
          fontFace: BROD,
          fontSize: 14,
          italic: true,
          color: GRA,
          align: "center",
          valign: "middle",
        });
      }
      return;
    }

    if (b.type === "interaktiv") {
      // En pptx kan inte innehålla en live-komponent. Platta fallbacken till
      // text — hellre det än en tom slide i lärarens nedladdade fil.
      const rader = slideBlocksToText(b.statiskFallback, faltVarden);
      s.addText(rader.join("\n"), {
        x: 1.0,
        y,
        w: B - 2.0,
        h: hojd,
        fontFace: BROD,
        fontSize: 18,
        color: BLACK,
        align: "center",
        valign: "middle",
      });
      return;
    }

    if (b.type === "lararfalt") {
      const varde = (faltVarden[b.id] ?? "").trim();
      s.addText(varde || `${b.label} — inte ifyllt`, {
        x: 1.0,
        y,
        w: B - 2.0,
        h: hojd,
        fontFace: BROD,
        fontSize: varde ? gradFor(varde, 26) : 14,
        italic: !varde,
        color: varde ? BLACK : GRA,
        align: "center",
        valign: "middle",
      });
      return;
    }
  });
}

/** Filnamnsvänlig stam ur övningstiteln. */
function filnamn(titel: string): string {
  return (
    titel
      .toLowerCase()
      .replace(/[åä]/g, "a")
      .replace(/ö/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "storskarm"
  );
}
