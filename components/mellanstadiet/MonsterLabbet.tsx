"use client";

import { useState, useMemo } from "react";
import { RotateCcw, Sparkles, AlertTriangle } from "lucide-react";

/* Mönsterlabbet — eleven tränar en låtsad bild-AI på två kategorier
 * (här: HUND vs KATT) genom att välja vilka bilder som ska in i
 * träningsdatat. Sedan visas vad AI:n gissar på testbilder.
 *
 * Pedagogisk poäng (från lektion-2/interaktivt-monsterlabbet.md):
 * Om eleven bara väljer bruna hundar och vita katter — tror AI:n att
 * en svart katt är en hund. Bias är data, inte ondska.
 *
 * Implementation: vi simulerar genom att räkna features (färg + typ)
 * i träningsdatat och låta "AI:n" gissa baserat på närmaste mönster.
 * Inga riktiga modeller — det är en pedagogisk illustration.
 */

type Color = "vit" | "brun" | "svart" | "ruggad";
type Animal = "hund" | "katt";

interface TrainingImage {
  id: string;
  emoji: string;
  label: string;
  animal: Animal;
  color: Color;
}

const TRAINING_POOL: TrainingImage[] = [
  { id: "h1", emoji: "🐕", label: "Brun hund (labrador)", animal: "hund", color: "brun" },
  { id: "h2", emoji: "🐶", label: "Brun valp", animal: "hund", color: "brun" },
  { id: "h3", emoji: "🦮", label: "Brun ledarhund", animal: "hund", color: "brun" },
  { id: "h4", emoji: "🐩", label: "Vit pudel", animal: "hund", color: "vit" },
  { id: "h5", emoji: "🐕‍🦺", label: "Svart schäfer", animal: "hund", color: "svart" },
  { id: "h6", emoji: "🐺", label: "Ruggad hund", animal: "hund", color: "ruggad" },
  { id: "k1", emoji: "🐈", label: "Vit katt", animal: "katt", color: "vit" },
  { id: "k2", emoji: "😺", label: "Vit katt (gladlynt)", animal: "katt", color: "vit" },
  { id: "k3", emoji: "😻", label: "Vit kärlekskatt", animal: "katt", color: "vit" },
  { id: "k4", emoji: "🐈‍⬛", label: "Svart katt", animal: "katt", color: "svart" },
  { id: "k5", emoji: "🦁", label: "Brun katt (lejon-lik)", animal: "katt", color: "brun" },
  { id: "k6", emoji: "🐅", label: "Ruggad katt", animal: "katt", color: "ruggad" },
];

const TEST_IMAGES: TrainingImage[] = [
  { id: "t1", emoji: "🐕", label: "Brun hund", animal: "hund", color: "brun" },
  { id: "t2", emoji: "🐈‍⬛", label: "Svart katt", animal: "katt", color: "svart" },
  { id: "t3", emoji: "🐩", label: "Vit hund", animal: "hund", color: "vit" },
  { id: "t4", emoji: "🦁", label: "Brun katt", animal: "katt", color: "brun" },
];

// "AI"-gissning: räkna ut vilken (animal, color)-fördelning som finns i träningsdata,
// och gissa baserat på närmaste color-match först (eftersom AI lär färg-mönster
// snabbare än djur-mönster när data är ensidig).
function aiGuess(
  trainingSet: TrainingImage[],
  test: TrainingImage
): { guess: Animal; confidence: number; reasoning: string } {
  if (trainingSet.length === 0) {
    return { guess: "hund", confidence: 0, reasoning: "Ingen träningsdata — AI gissar slumpmässigt." };
  }

  // Räkna training items per (animal, color)
  const sameColorAnimals = trainingSet.filter((t) => t.color === test.color);
  const sameAnimalAny = trainingSet.filter((t) => t.animal === test.animal);

  // Om ingen träningsdata har samma färg, AI faller tillbaka på vilket djur som finns mest
  if (sameColorAnimals.length === 0) {
    const hundCount = trainingSet.filter((t) => t.animal === "hund").length;
    const kattCount = trainingSet.filter((t) => t.animal === "katt").length;
    const guess: Animal = hundCount >= kattCount ? "hund" : "katt";
    return {
      guess,
      confidence: 0.5,
      reasoning: `AI har aldrig sett ${test.color === "vit" ? "vita" : test.color === "brun" ? "bruna" : test.color === "svart" ? "svarta" : "ruggade"} djur. Den gissar baserat på vilken kategori som dominerar (${guess === "hund" ? `${hundCount} hundar` : `${kattCount} katter`}).`,
    };
  }

  // AI gissar majoritets-djur bland items med samma färg
  const sameColorHund = sameColorAnimals.filter((t) => t.animal === "hund").length;
  const sameColorKatt = sameColorAnimals.filter((t) => t.animal === "katt").length;
  const guess: Animal = sameColorHund > sameColorKatt ? "hund" : sameColorKatt > sameColorHund ? "katt" : (sameAnimalAny.length >= trainingSet.length / 2 ? test.animal : (test.animal === "hund" ? "katt" : "hund"));
  const total = sameColorHund + sameColorKatt;
  const confidence =
    total === 0 ? 0.5 : Math.max(sameColorHund, sameColorKatt) / total;

  let reasoning: string;
  if (guess === test.animal) {
    reasoning = `AI har sett ${total} ${test.color === "vit" ? "vita" : test.color === "brun" ? "bruna" : test.color === "svart" ? "svarta" : "ruggade"} djur i träningen — och majoriteten var ${guess === "hund" ? "hundar" : "katter"}. Den gissar rätt den här gången.`;
  } else {
    reasoning = `AI har sett ${total} ${test.color === "vit" ? "vita" : test.color === "brun" ? "bruna" : test.color === "svart" ? "svarta" : "ruggade"} djur i träningen — och majoriteten var ${guess === "hund" ? "hundar" : "katter"}. Därför tror den att DET HÄR också är en ${guess}. Bias från ensidig data.`;
  }

  return { guess, confidence, reasoning };
}

interface ScenarioPreset {
  id: string;
  label: string;
  description: string;
  color: string;
  preset: string[]; // training image IDs
}

const PRESETS: ScenarioPreset[] = [
  {
    id: "ensidigt",
    label: "1. Ensidig träning",
    description: "Bara bruna hundar och vita katter — som i många riktiga AI-tränings-set",
    color: "#f43f5e",
    preset: ["h1", "h2", "h3", "k1", "k2", "k3"],
  },
  {
    id: "okat",
    label: "2. Lite mer variation",
    description: "Lägg till några svarta hundar och svarta katter",
    color: "#f59e0b",
    preset: ["h1", "h2", "h3", "h5", "k1", "k2", "k3", "k4"],
  },
  {
    id: "balans",
    label: "3. Balanserad träning",
    description: "Alla färger på båda djuren",
    color: "#10b981",
    preset: ["h1", "h4", "h5", "h6", "k1", "k4", "k5", "k6"],
  },
];

export function MonsterLabbet({ accentHex = "#f59e0b" }: { accentHex?: string }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const trainingSet = useMemo(
    () => TRAINING_POOL.filter((t) => selected.has(t.id)),
    [selected]
  );

  const toggle = (id: string) => {
    if (revealed) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const usePreset = (presetIds: string[]) => {
    setSelected(new Set(presetIds));
    setRevealed(false);
  };

  const reset = () => {
    setSelected(new Set());
    setRevealed(false);
  };

  const test = () => setRevealed(true);

  const results = useMemo(
    () => TEST_IMAGES.map((t) => ({ test: t, ...aiGuess(trainingSet, t) })),
    [trainingSet]
  );

  const correctCount = results.filter((r) => r.guess === r.test.animal).length;

  // Räkna "diversitet" i träningsdata
  const colorCounts: Record<Color, number> = {
    vit: 0,
    brun: 0,
    svart: 0,
    ruggad: 0,
  };
  trainingSet.forEach((t) => {
    colorCounts[t.color]++;
  });
  const colorsRepresented = Object.values(colorCounts).filter((c) => c > 0).length;

  return (
    <div
      className="my-12 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center justify-between gap-4 px-6 py-3"
        style={{ background: accentHex }}
      >
        <div className="ms-mono font-bold text-[var(--ms-bg)]">MÖNSTERLABBET</div>
        <div className="ms-mono hidden text-[var(--ms-bg)] sm:block">
          {trainingSet.length} bilder valda · {colorsRepresented} / 4 färger
        </div>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="text-sm leading-relaxed text-[var(--ms-text-body)]">
          <strong className="text-[var(--ms-text)]">Du är AI-tränare.</strong> Välj vilka
          bilder som ska in i träningsdatat. När du tränat färdigt ser du vad
          AI:n gissar på fyra testbilder. Pröva olika urval — och lägg märke
          till vad som händer när träningen är ensidig.
        </div>

        {/* Snabbval */}
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => usePreset(p.preset)}
              className="group rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] px-4 py-2 text-left transition-all hover:border-[var(--ms-text)]/40"
            >
              <div
                className="ms-mono mb-0.5 text-xs"
                style={{ color: p.color }}
              >
                SNABBVAL
              </div>
              <div className="font-semibold text-[var(--ms-text)]">{p.label}</div>
              <div className="text-xs text-[var(--ms-text-muted)]">{p.description}</div>
            </button>
          ))}
        </div>

        {/* Bildgalleri */}
        <div>
          <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
            VÄLJ TRÄNINGSBILDER · KLICKA FÖR ATT PLOCKA IN
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {TRAINING_POOL.map((img) => {
              const isSelected = selected.has(img.id);
              return (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => toggle(img.id)}
                  disabled={revealed}
                  className={`relative aspect-square rounded-lg border-2 p-2 text-center transition-all ${
                    isSelected
                      ? "border-white bg-white/10"
                      : "border-[var(--ms-border)] bg-[var(--ms-bg-card)] hover:border-[var(--ms-text-muted)]"
                  } ${revealed ? "cursor-default" : "cursor-pointer"}`}
                  aria-pressed={isSelected}
                  aria-label={img.label}
                >
                  <span className="text-3xl sm:text-4xl" aria-hidden>
                    {img.emoji}
                  </span>
                  <span className="ms-mono mt-1 block text-[10px] text-[var(--ms-text-muted)]">
                    {img.color}
                  </span>
                  {isSelected && (
                    <span
                      className="ms-mono absolute right-1 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-[var(--ms-bg)]"
                      style={{ background: accentHex }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action-rad */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ms-border)] pt-5">
          <div className="text-sm text-[var(--ms-text-muted)]">
            <strong className="text-[var(--ms-text)]">{trainingSet.length}</strong> bilder
            i träning ·{" "}
            <strong className="text-[var(--ms-text)]">{colorsRepresented}</strong> av 4
            färger representerade
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={reset}
              disabled={selected.size === 0}
              className="ms-btn ms-btn-secondary"
            >
              <RotateCcw className="h-4 w-4" />
              Töm
            </button>
            <button
              type="button"
              onClick={test}
              disabled={trainingSet.length < 2}
              className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              Testa AI:n
            </button>
          </div>
        </div>

        {/* Resultat */}
        {revealed && (
          <div className="ms-fadein space-y-4">
            <div className="border-t border-[var(--ms-border)] pt-5">
              <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
                AI TESTAS PÅ 4 NYA BILDER · {correctCount} / 4 RÄTT
              </div>
              <div className="space-y-3">
                {results.map((r) => {
                  const correct = r.guess === r.test.animal;
                  return (
                    <div
                      key={r.test.id}
                      className={`rounded-lg border p-4 ${
                        correct
                          ? "border-emerald-500/40 bg-emerald-500/10"
                          : "border-rose-500/40 bg-rose-500/10"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl" aria-hidden>
                          {r.test.emoji}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-[var(--ms-text)]">
                            {r.test.label}{" "}
                            <span className="text-[var(--ms-text-muted)]">
                              · sanningen: {r.test.animal.toUpperCase()}
                            </span>
                          </div>
                          <div
                            className={`mt-1 font-bold ${
                              correct ? "text-emerald-300" : "text-rose-300"
                            }`}
                          >
                            AI gissar: {r.guess.toUpperCase()}{" "}
                            {correct ? "✓" : "✗"}
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--ms-text-body)]">
                            {r.reasoning}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Insikt */}
            <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-[#fcd34d]">
                <AlertTriangle className="h-4 w-4" />
                <span className="ms-mono">INSIKT</span>
              </div>
              <p className="leading-relaxed text-[#fde68a]">
                {correctCount < 4
                  ? "AI:n hade fel — inte för att den är dum, utan för att din träningsdata var ensidig. AI lär sig mönster från det den ser. Om den bara ser vissa färger på vissa djur — då gissar den fel på resten. Bias är data, inte ondska."
                  : "Din träning täckte alla färger på båda djuren. AI:n får då en chans att lära sig vad som faktiskt skiljer hund från katt — inte bara färgen. Verkliga AI-system tränas på miljarder bilder, men samma princip gäller."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
