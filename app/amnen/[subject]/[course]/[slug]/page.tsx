import { notFound } from "next/navigation";
import { allModules } from "contentlayer/generated";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { ModuleContent } from "@/components/module/ModuleContent";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ModuleActions } from "@/components/module/ModuleActions";

interface PageProps {
  params: {
    subject: string;
    course: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return allModules.map((module) => {
    const parts = module._raw.flattenedPath.split("/");
    return {
      subject: parts[0],
      course: parts[1],
      slug: parts[2],
    };
  });
}

export async function generateMetadata({ params }: PageProps) {
  const module = allModules.find((m) => {
    const parts = m._raw.flattenedPath.split("/");
    return (
      parts[0] === params.subject &&
      parts[1] === params.course &&
      parts[2] === params.slug
    );
  });

  if (!module) {
    return {
      title: "Modul hittades inte",
    };
  }

  return {
    title: `${module.title} | AI-litt`,
    description: module.description,
  };
}

export default function ModulePage({ params }: PageProps) {
  const module = allModules.find((m) => {
    const parts = m._raw.flattenedPath.split("/");
    return (
      parts[0] === params.subject &&
      parts[1] === params.course &&
      parts[2] === params.slug
    );
  });

  if (!module) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600 animate-fade-in">
          <span>
            {module.subject} / {module.course}
          </span>
        </nav>

        {/* Header */}
        <header className="mb-8 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          {module.title}
        </h1>

        <p className="mb-6 text-lg text-gray-600">{module.description}</p>

        {/* Metadata badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {module.time && <MetaBadge type="time" value={module.time} />}
          {module.groupSize && (
            <MetaBadge type="group" value={module.groupSize} />
          )}
        </div>

        {/* AI Literacy badges */}
        <AiLiteracyBadgeList ids={module.ai_literacy_ids} />
      </header>

      {/* Action buttons */}
      <div className="mb-8 flex justify-end animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <ModuleActions
          moduleId={module._id}
          title={module.title}
          url={module.url}
          description={module.description}
          subject={module.subject}
          course={module.course}
        />
      </div>

      {/* Module content with TOC */}
      <ModuleContent module={module} />
      </div>
    </>
  );
}
