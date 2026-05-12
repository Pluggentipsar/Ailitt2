import type { Metadata } from "next";
import { CategoryCard } from "@/components/mellanstadiet/labb/CategoryCard";
import { LabbFooter } from "@/components/mellanstadiet/labb/LabbFooter";
import { LabbHero } from "@/components/mellanstadiet/labb/LabbHero";
import { LabbSteps } from "@/components/mellanstadiet/labb/LabbSteps";
import { SkolupCallout } from "@/components/mellanstadiet/labb/SkolupCallout";
import { LABB_CATEGORIES, LABB_EXPERIMENTS } from "@/lib/mellanstadiet-labb";

export const metadata: Metadata = {
  title: "AI-labbet — sandlåda för åk 4–6 | Mellanstadiet",
  description:
    "Färdiga prompter att kopiera in i Skolup AI. Sex kategorier — välj din och börja experimentera. Du är chefen, inte AI:n.",
};

export default function LabbHub() {
  return (
    <div className="ms-grid-bg">
      <LabbHero />
      <LabbSteps />
      <SkolupCallout />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
            // VÄLJ EN KATEGORI · {LABB_EXPERIMENTS.length} STATIONER TOTALT
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
            Vad vill du göra just nu?
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ms-text-body)]">
            Sex kategorier. Klicka in på den som passar — varje kategori har
            sina egna stationer du kan kopiera och köra i Skolup AI.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LABB_CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <LabbFooter />
    </div>
  );
}
