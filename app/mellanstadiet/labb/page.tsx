import type { Metadata } from "next";
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
    "Tio prompter du kan kopiera in i Skolup AI. Du fyller i ditt eget ämne. Du granskar svaret. Du är chefen — inte AI:n.",
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
              const experiments = getExperimentsByCategory(cat.id);
              if (experiments.length === 0) return null;
              return (
                <section
                  key={cat.id}
                  id={`labb-cat-${cat.id}`}
                  className="scroll-mt-24"
                >
                  <header className="mb-6 border-l-4 pl-4" style={{ borderColor: cat.accentHex }}>
                    <div className="ms-mono flex items-center gap-2 text-[var(--ms-text-muted)]">
                      <span aria-hidden>{cat.emoji}</span>
                      KATEGORI · {experiments.length} STATIONER
                    </div>
                    <h2 className="mt-1 text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
                      {cat.label}
                    </h2>
                    <p className="mt-1 text-[var(--ms-text-body)]">
                      {cat.description}
                    </p>
                  </header>

                  <div className="space-y-8">
                    {experiments.map((exp) => (
                      <LabbExperiment
                        key={exp.id}
                        experiment={exp}
                        accentHex={cat.accentHex}
                      />
                    ))}
                  </div>
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
