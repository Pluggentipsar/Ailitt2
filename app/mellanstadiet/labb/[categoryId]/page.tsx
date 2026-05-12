import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdvancedSection } from "@/components/mellanstadiet/labb/AdvancedSection";
import { CategoryFooterNav } from "@/components/mellanstadiet/labb/CategoryFooterNav";
import { CategoryPageHeader } from "@/components/mellanstadiet/labb/CategoryPageHeader";
import { CodeWorkflowCallout } from "@/components/mellanstadiet/labb/CodeWorkflowCallout";
import { LabbExperiment } from "@/components/mellanstadiet/labb/LabbExperiment";
import {
  LABB_CATEGORIES,
  getExperimentsByCategory,
  type LabbCategory,
} from "@/lib/mellanstadiet-labb";

export function generateStaticParams() {
  return LABB_CATEGORIES.map((c) => ({ categoryId: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
  const { categoryId } = await params;
  const cat = LABB_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return { title: "AI-labbet | Mellanstadiet" };
  return {
    title: `${cat.label} — AI-labbet | Mellanstadiet`,
    description: cat.description,
  };
}

export default async function LabbCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const category = LABB_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) notFound();

  const all = getExperimentsByCategory(category.id as LabbCategory);
  const basic = all.filter((e) => !e.isAdvanced);
  const advanced = all.filter((e) => e.isAdvanced);
  const isMeta = category.id === "meta";
  const isKod = category.id === "kod";

  return (
    <div className="ms-grid-bg">
      <CategoryPageHeader
        category={category}
        basicCount={basic.length}
        advancedCount={advanced.length}
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Kod-kategorin: visa fil-spara-guiden överst */}
          {isKod && <CodeWorkflowCallout accentHex={category.accentHex} />}

          {/* Grundprompter */}
          {basic.length > 0 && (
            <div className="space-y-8">
              {basic.map((exp) => (
                <LabbExperiment
                  key={exp.id}
                  experiment={exp}
                  accentHex={category.accentHex}
                />
              ))}
            </div>
          )}

          {/* Avancerade — i kollapserad sektion (utom för meta) */}
          {advanced.length > 0 && !isMeta && (
            <AdvancedSection
              accentHex={category.accentHex}
              count={advanced.length}
            >
              {advanced.map((exp) => (
                <LabbExperiment
                  key={exp.id}
                  experiment={exp}
                  accentHex={category.accentHex}
                />
              ))}
            </AdvancedSection>
          )}

          {/* För meta: visa avancerade direkt (hela kategorin ÄR avancerad) */}
          {isMeta && advanced.length > 0 && (
            <div className="space-y-8">
              {advanced.map((exp) => (
                <LabbExperiment
                  key={exp.id}
                  experiment={exp}
                  accentHex={category.accentHex}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CategoryFooterNav current={category} />
    </div>
  );
}
