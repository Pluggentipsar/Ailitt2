import type { Metadata } from "next";
import { AdvancedSection } from "@/components/mellanstadiet/labb/AdvancedSection";
import { CodeWorkflowCallout } from "@/components/mellanstadiet/labb/CodeWorkflowCallout";
import { LabbCategoryNav } from "@/components/mellanstadiet/labb/LabbCategoryNav";
import { LabbExperiment } from "@/components/mellanstadiet/labb/LabbExperiment";
import { LabbFooter } from "@/components/mellanstadiet/labb/LabbFooter";
import { LabbHero } from "@/components/mellanstadiet/labb/LabbHero";
import { LabbSteps } from "@/components/mellanstadiet/labb/LabbSteps";
import { SkolupCallout } from "@/components/mellanstadiet/labb/SkolupCallout";
import {
  LABB_CATEGORIES,
  getExperimentsByCategory,
} from "@/lib/mellanstadiet-labb";

export const metadata: Metadata = {
  title: "AI-labbet — sandlåda för åk 4–6 | Mellanstadiet",
  description:
    "Färdiga prompter att kopiera in i Skolup AI. Basic + avancerade. Du fyller i ditt ämne. Du granskar svaret. Du är chefen — inte AI:n.",
};

export default function LabbPage() {
  return (
    <div className="ms-grid-bg">
      <LabbHero />
      <LabbSteps />
      <SkolupCallout />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <LabbCategoryNav />

          <div className="mt-10 space-y-16">
            {LABB_CATEGORIES.map((cat) => {
              const all = getExperimentsByCategory(cat.id);
              if (all.length === 0) return null;

              const basic = all.filter((e) => !e.isAdvanced);
              const advanced = all.filter((e) => e.isAdvanced);
              const isMeta = cat.id === "meta";
              const isKod = cat.id === "kod";

              return (
                <section
                  key={cat.id}
                  id={`labb-cat-${cat.id}`}
                  className="scroll-mt-24"
                >
                  <header
                    className="mb-6 border-l-4 pl-4"
                    style={{ borderColor: cat.accentHex }}
                  >
                    <div className="ms-mono flex items-center gap-2 text-[var(--ms-text-muted)]">
                      <span aria-hidden>{cat.emoji}</span>
                      KATEGORI · {all.length} STATIONER
                      {advanced.length > 0 && !isMeta && (
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                          style={{
                            background: `${cat.accentHex}20`,
                            color: cat.accentHex,
                          }}
                        >
                          {basic.length} GRUNDLÄGGANDE + {advanced.length}{" "}
                          AVANCERADE
                        </span>
                      )}
                    </div>
                    <h2 className="mt-1 text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
                      {cat.label}
                    </h2>
                    <p className="mt-1 text-[var(--ms-text-body)]">
                      {cat.description}
                    </p>
                  </header>

                  {/* Kod-kategorin: visa fil-spara-guiden överst */}
                  {isKod && (
                    <CodeWorkflowCallout accentHex={cat.accentHex} />
                  )}

                  {/* Grundprompter */}
                  {basic.length > 0 && (
                    <div className="space-y-8">
                      {basic.map((exp) => (
                        <LabbExperiment
                          key={exp.id}
                          experiment={exp}
                          accentHex={cat.accentHex}
                        />
                      ))}
                    </div>
                  )}

                  {/* Avancerade — i kollapserad sektion (utom för meta,
                      där hela kategorin är avancerad och inget döljs) */}
                  {advanced.length > 0 && !isMeta && (
                    <AdvancedSection
                      accentHex={cat.accentHex}
                      count={advanced.length}
                    >
                      {advanced.map((exp) => (
                        <LabbExperiment
                          key={exp.id}
                          experiment={exp}
                          accentHex={cat.accentHex}
                        />
                      ))}
                    </AdvancedSection>
                  )}

                  {/* För meta-kategorin: visa avancerade direkt
                      (hela kategorin ÄR avancerad — ingen meningen i
                      att dölja allt) */}
                  {isMeta && advanced.length > 0 && (
                    <div className="space-y-8">
                      {advanced.map((exp) => (
                        <LabbExperiment
                          key={exp.id}
                          experiment={exp}
                          accentHex={cat.accentHex}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <LabbFooter />
    </div>
  );
}
