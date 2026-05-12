"use client";

import { useState } from "react";
import {
  Search,
  AlertTriangle,
  Plus,
  Sparkles,
  RotateCcw,
  Trophy,
  ArrowRight,
} from "lucide-react";

/* Bias-detektiven — tre fall, varje med 5 steg:
 *   1. Brief: vad hände och varför är det ett problem
 *   2. Granska träningsdata (visualisering — staplar)
 *   3. Identifiera underrepresenterad grupp (klicka rätt stapel)
 *   4. Lägg till data (klicka för att utöka stapeln)
 *   5. Se det förändrade utfallet
 */

interface DataBucket {
  id: string;
  label: string;
  count: number;
  /** Sann etikett — om denna är "underrepresented", är det här eleven ska klicka */
  isUnderrep: boolean;
}

interface BiasCase {
  id: string;
  title: string;
  domain: string;
  brief: string;
  briefDetail: string;
  initialOutput: string;
  trainingPrompt: string;
  buckets: DataBucket[];
  /** Hur stor stapel ska underrep-bucketsen växa till för att vara "balanserad" */
  targetCount: number;
  fixedOutput: string;
  insight: string;
}

const CASES: BiasCase[] = [
  {
    id: "amazon",
    title: "Amazons CV-AI",
    domain: "REKRYTERING · 2014–2018",
    brief:
      "Amazon byggde en AI som skulle välja ut bra jobbsökanden från CV:n. Den straffade systematiskt CV som nämnde ord som 'kvinnornas schackklubb' eller 'damidrottsföreningen'. Den blev skrotad 2018.",
    briefDetail:
      "AI:n var inte programmerad att vara orättvis. Ingen kodade in 'misshandla kvinnor'. Ändå blev resultatet det. Varför?",
    initialOutput:
      "Sökande #4221: 'Damidrottsföreningens lag-kapten 2019–22, Stockholm.'\n\n→ AI: STARKT NEJ (sannolikhet att lyckas: 11%)",
    trainingPrompt:
      "AI:n tränades på 10 år av Amazons tidigare anställningar. Här är fördelningen:",
    buckets: [
      { id: "men", label: "Anställda män", count: 870, isUnderrep: false },
      { id: "women", label: "Anställda kvinnor", count: 130, isUnderrep: true },
    ],
    targetCount: 800,
    fixedOutput:
      "Sökande #4221: 'Damidrottsföreningens lag-kapten 2019–22, Stockholm.'\n\n→ AI: SVAGT JA (sannolikhet att lyckas: 64%)\n\nNu finns kvinnliga framgångsexempel i datan. AI:n känner igen mönstret.",
    insight:
      "Bias kommer in NÄR DATAN SAMLAS. Amazons HR hade redan anställt 87% män. AI:n såg det mönstret och förstärkte det. Lösningen är inte 'snällare AI' — det är jämnare data från start.",
  },
  {
    id: "lakare",
    title: "Bild-AI:n 'läkare'",
    domain: "BILDGENERERING · 2023–2026",
    brief:
      "När du ber en bild-AI rita 'en läkare' får du nästan alltid en äldre vit man i vit rock. Be om 'sjuksköterska' och du får en ung kvinna. Varför?",
    briefDetail:
      "Verkligheten ser annorlunda ut. I Sverige är 49% av läkarna kvinnor och 28% har utländsk bakgrund. AI:n vet inte det.",
    initialOutput:
      'Prompt: "En läkare på ett sjukhus."\n\n→ AI ritar: Vit man, ~60 år, glasögon, vit rock, hängande stetoskop. Sober porträttbelysning.',
    trainingPrompt:
      "AI:n tränades på miljarder bilder från internet, taggade med 'läkare'. Så här ser bilderna ut:",
    buckets: [
      {
        id: "white-male",
        label: "Vita män, 50+",
        count: 720,
        isUnderrep: false,
      },
      {
        id: "white-female",
        label: "Vita kvinnor",
        count: 180,
        isUnderrep: true,
      },
      {
        id: "non-white-male",
        label: "Icke-vita män",
        count: 70,
        isUnderrep: true,
      },
      {
        id: "non-white-female",
        label: "Icke-vita kvinnor",
        count: 30,
        isUnderrep: true,
      },
    ],
    targetCount: 500,
    fixedOutput:
      'Prompt: "En läkare på ett sjukhus."\n\n→ AI ritar nu: kvinnor och män i blandade åldrar och hudfärger. Variation per bild.\n\nMer balanserad data → AI har fler mönster att gissa ifrån.',
    insight:
      "'Internet' är inte neutralt. Bildsidor har historiskt visat vissa läkare oftare än andra. AI lär sig den sneda bilden — inte verkligheten. Bias är inte AI:s fel; det är internets representation som är skev.",
  },
  {
    id: "rost-ai",
    title: "Röst-AI:n och dialekter",
    domain: "RÖSTIGENKÄNNING · 2020–PÅGÅR",
    brief:
      "Du säger 'klockan är åtta' till din röststyrda assistent. På standardsvenska funkar det perfekt. På skånska eller finlandssvenska — inte alls. Varför?",
    briefDetail:
      "Människor med 'avvikande' uttal måste ändra sitt sätt att prata för att tekniken ska fungera. Det betyder att tekniken är skev — inte människan.",
    initialOutput:
      'Skånsk användare säger: "Klockan ä åtta."\n\n→ AI hör: "Vad sa du? Jag förstod inte." (Misslyckande #4 idag.)',
    trainingPrompt:
      "AI:n tränades på 10 000 timmar inspelad svenska. Så här ser fördelningen ut:",
    buckets: [
      {
        id: "rikssvenska",
        label: "Rikssvenska (Stockholm/Mälardalen)",
        count: 650,
        isUnderrep: false,
      },
      {
        id: "goteborg",
        label: "Göteborgsmål",
        count: 130,
        isUnderrep: false,
      },
      { id: "skane", label: "Skånska", count: 90, isUnderrep: true },
      {
        id: "norrland",
        label: "Norrländska dialekter",
        count: 80,
        isUnderrep: true,
      },
      {
        id: "finlandssv",
        label: "Finlandssvenska",
        count: 50,
        isUnderrep: true,
      },
    ],
    targetCount: 400,
    fixedOutput:
      'Skånsk användare säger: "Klockan ä åtta."\n\n→ AI hör: "Klockan är åtta." → Visar tiden korrekt.\n\nNu kan AI:n skilja på rikssvenska och skånska som två giltiga varianter — inte ett "fel".',
    insight:
      "Bias drabbar olika grupper olika. När datan saknar dialekter blir tekniken fungerande för vissa och frustrerande för andra. Det är inte att AI är 'snobbig' — det är att den aldrig fått chansen att lära sig.",
  },
];

type Step = "brief" | "data" | "fix" | "result";

export function BiasDetektiven() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [step, setStep] = useState<Step>("brief");
  const [identified, setIdentified] = useState<Set<string>>(new Set());
  const [boosted, setBoosted] = useState<Record<string, number>>({});
  const [solved, setSolved] = useState(0);

  const c = CASES[caseIdx];
  const allUnderrep = c.buckets.filter((b) => b.isUnderrep);
  const correctlyIdentified =
    allUnderrep.every((b) => identified.has(b.id)) &&
    Array.from(identified).every(
      (id) => c.buckets.find((b) => b.id === id)?.isUnderrep
    );

  const isFixed = allUnderrep.every((b) => {
    const newCount = b.count + (boosted[b.id] || 0);
    return newCount >= c.targetCount;
  });

  const goNextCase = () => {
    if (caseIdx + 1 >= CASES.length) {
      setSolved(solved + 1);
      // Markera done genom att gå utanför sista
      setCaseIdx(CASES.length);
      return;
    }
    setCaseIdx(caseIdx + 1);
    setStep("brief");
    setIdentified(new Set());
    setBoosted({});
    setSolved(solved + 1);
  };

  const reset = () => {
    setCaseIdx(0);
    setStep("brief");
    setIdentified(new Set());
    setBoosted({});
    setSolved(0);
  };

  const toggleIdentified = (id: string) => {
    setIdentified((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const boost = (id: string, by: number) => {
    setBoosted((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + by),
    }));
  };

  const maxCount = Math.max(
    ...c?.buckets.map((b) => b.count + (boosted[b.id] || 0)) ?? [1]
  );

  // Done state
  if (caseIdx >= CASES.length) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#f97316]/40 bg-[var(--ms-bg-subtle)] p-8 text-center">
          <Trophy className="mx-auto mb-4 h-12 w-12 text-[#fcd34d]" />
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
            FALLEN AVSLUTADE
          </div>
          <h3 className="mb-4 text-3xl font-bold text-[var(--ms-text)]">
            {solved} / {CASES.length} fall lösta
          </h3>
          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-left text-[#fde68a]">
            <strong className="text-[var(--ms-text)]">Det du just upplevde:</strong> Du
            såg AI:s utfall, hittade bias i datan, åtgärdade — och såg
            utfallet förändras. Det är samma mönster som händer med riktiga
            AI-system. Bias är data — inte ondska. Och det är fixbart.
          </div>
          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Börja om
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-[#f97316]/40 bg-[var(--ms-bg-subtle)]">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-[#f97316] px-6 py-3">
          <div className="ms-mono font-bold text-[var(--ms-bg)]">
            FALL {caseIdx + 1} / {CASES.length} · {c.domain}
          </div>
          <div className="ms-mono text-[var(--ms-bg)]">
            STEG {step === "brief" ? "1" : step === "data" ? "2" : step === "fix" ? "3" : "4"} / 4
          </div>
        </div>

        <div className="p-6">
          {/* Stepper-indikator */}
          <div className="mb-6 flex gap-2">
            {(["brief", "data", "fix", "result"] as Step[]).map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all ${
                  s === step
                    ? "bg-[#f97316]"
                    : i < (["brief", "data", "fix", "result"] as Step[]).indexOf(step)
                    ? "bg-[#f97316]/60"
                    : "bg-[var(--ms-border)]"
                }`}
              />
            ))}
          </div>

          {/* === STEG 1: BRIEF === */}
          {step === "brief" && (
            <div className="ms-fadein space-y-4">
              <div className="flex items-start gap-3">
                <Search className="mt-1 h-6 w-6 flex-none text-[#f97316]" />
                <h3 className="text-2xl font-bold tracking-tight text-[var(--ms-text)] sm:text-3xl">
                  {c.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-[var(--ms-text-body)]">{c.brief}</p>
              <p className="leading-relaxed text-[var(--ms-text-muted)]">{c.briefDetail}</p>

              <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-4">
                <div className="ms-mono mb-2 flex items-center gap-1.5 text-rose-300">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  AI:S NUVARANDE UTFALL
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm text-rose-100">
                  {c.initialOutput}
                </pre>
              </div>

              <button
                type="button"
                onClick={() => setStep("data")}
                className="ms-btn ms-btn-primary"
              >
                Granska träningsdatat
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* === STEG 2: DATA === */}
          {step === "data" && (
            <div className="ms-fadein space-y-4">
              <div>
                <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
                  STEG 2 · IDENTIFIERA BIAS
                </div>
                <p className="text-lg text-[var(--ms-text)]">{c.trainingPrompt}</p>
                <p className="mt-2 text-sm text-[var(--ms-text-muted)]">
                  Klicka på de grupper som är{" "}
                  <strong className="text-[var(--ms-text)]">underrepresenterade</strong>.
                  Du kan välja flera.
                </p>
              </div>

              <div className="space-y-2">
                {c.buckets.map((b) => {
                  const total = b.count;
                  const pct = (total / maxCount) * 100;
                  const isSel = identified.has(b.id);
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => toggleIdentified(b.id)}
                      className={`w-full rounded-lg border p-4 text-left transition-all ${
                        isSel
                          ? "border-[#fcd34d] bg-[#fcd34d]/10"
                          : "border-[var(--ms-border)] bg-[var(--ms-bg-card)] hover:border-[var(--ms-text)]/40"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold text-[var(--ms-text)]">
                          {b.label}
                        </span>
                        <span
                          className={`ms-mono ${
                            isSel ? "text-[#fcd34d]" : "text-[var(--ms-text-muted)]"
                          }`}
                        >
                          {total}
                        </span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-[var(--ms-bg)]">
                        <div
                          className={`h-full transition-all ${
                            isSel ? "bg-[#fcd34d]" : "bg-[var(--ms-text-muted)]"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {identified.size > 0 && (
                <div
                  className={`rounded-lg border p-4 ${
                    correctlyIdentified
                      ? "border-emerald-500/40 bg-emerald-500/10"
                      : "border-amber-500/40 bg-amber-500/10"
                  }`}
                >
                  {correctlyIdentified ? (
                    <p className="text-emerald-100">
                      <strong>Snyggt detektiverat.</strong> De underrepresenterade
                      grupperna är de med betydligt mindre data.
                    </p>
                  ) : (
                    <p className="text-amber-100">
                      Granska igen. Vilka grupper har <em>mycket</em> mindre
                      data än de andra? Det är de som AI:n inte lärt sig
                      mönstren för.
                    </p>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep("fix")}
                disabled={!correctlyIdentified}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Fixa datan
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* === STEG 3: FIX === */}
          {step === "fix" && (
            <div className="ms-fadein space-y-4">
              <div>
                <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
                  STEG 3 · LÄGG TILL DATA
                </div>
                <p className="text-lg text-[var(--ms-text)]">
                  Klicka <strong className="text-[#fcd34d]">+100</strong> på
                  varje underrepresenterad grupp tills den når en jämn storlek.
                  Mål: cirka {c.targetCount} per grupp.
                </p>
              </div>

              <div className="space-y-2">
                {c.buckets.map((b) => {
                  const added = boosted[b.id] || 0;
                  const total = b.count + added;
                  const pct = (total / maxCount) * 100;
                  const reachedTarget =
                    !b.isUnderrep || total >= c.targetCount;

                  return (
                    <div
                      key={b.id}
                      className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4"
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="font-semibold text-[var(--ms-text)]">
                          {b.label}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="ms-mono text-[var(--ms-text-muted)]">
                            {total}
                            {added > 0 && (
                              <span className="ml-1 text-[#fcd34d]">
                                (+{added})
                              </span>
                            )}
                          </span>
                          {b.isUnderrep && !reachedTarget && (
                            <button
                              type="button"
                              onClick={() => boost(b.id, 100)}
                              className="ms-mono inline-flex items-center gap-1 rounded-md bg-[#fcd34d] px-2 py-1 text-xs font-bold text-[var(--ms-bg)] transition-transform hover:scale-105"
                            >
                              <Plus className="h-3 w-3" />
                              100
                            </button>
                          )}
                          {b.isUnderrep && reachedTarget && (
                            <span className="ms-mono rounded-md bg-emerald-500/20 px-2 py-1 text-xs font-bold text-emerald-300">
                              ✓ JÄMN
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-[var(--ms-bg)]">
                        <div
                          className={`h-full transition-all duration-500 ${
                            reachedTarget && b.isUnderrep
                              ? "bg-emerald-400"
                              : b.isUnderrep
                              ? "bg-[#fcd34d]"
                              : "bg-[var(--ms-text-muted)]"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setStep("result")}
                disabled={!isFixed}
                className="ms-btn ms-btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Träna om AI:n
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* === STEG 4: RESULT === */}
          {step === "result" && (
            <div className="ms-fadein space-y-4">
              <div>
                <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
                  STEG 4 · NYTT UTFALL
                </div>
                <h3 className="text-2xl font-bold text-[var(--ms-text)]">
                  AI:n har tränats om
                </h3>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-4">
                  <div className="ms-mono mb-2 text-rose-300">
                    FÖRE
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm text-rose-100">
                    {c.initialOutput}
                  </pre>
                </div>
                <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4">
                  <div className="ms-mono mb-2 text-emerald-300">
                    EFTER
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm text-emerald-100">
                    {c.fixedOutput}
                  </pre>
                </div>
              </div>

              <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
                <div className="ms-mono mb-2 text-[#fcd34d]">INSIKT</div>
                <p className="leading-relaxed text-[#fde68a]">{c.insight}</p>
              </div>

              <button
                type="button"
                onClick={goNextCase}
                className="ms-btn ms-btn-primary"
              >
                {caseIdx + 1 === CASES.length
                  ? "Avsluta utredningen"
                  : "Nästa fall"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
