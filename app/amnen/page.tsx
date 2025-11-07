import { allModules } from "contentlayer/generated";
import { ModuleCard } from "@/components/search/ModuleCard";

export const metadata = {
  title: "Ämnen | AI-litt",
  description: "Utforska moduler för olika ämnen och kurser",
};

export default function AmnenPage() {
  // Gruppera moduler efter ämne och kurs
  const groupedModules = allModules.reduce((acc, module) => {
    const key = `${module.subject} - ${module.course}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(module);
    return acc;
  }, {} as Record<string, typeof allModules>);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Ämnen
        </h1>
        <p className="text-lg text-gray-600">
          Utforska våra moduler organiserade efter ämne och kurs
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedModules).map(([courseKey, modules]) => (
          <section key={courseKey}>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {courseKey}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <ModuleCard
                  key={module._id}
                  title={module.title}
                  description={module.description}
                  url={module.url}
                  subject={module.subject}
                  course={module.course}
                  aiLiteracyIds={module.ai_literacy_ids}
                  time={module.time}
                  groupSize={module.groupSize}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
