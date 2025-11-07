import { notFound } from "next/navigation";
import { allModules } from "contentlayer/generated";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { ModuleContent } from "@/components/module/ModuleContent";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ModuleActions } from "@/components/module/ModuleActions";
import { getSubjectColors } from "@/lib/subject-colors";

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

  const colors = getSubjectColors(module.subject);

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

        {/* Header with gradient background */}
        <header
          className="mb-12 rounded-2xl overflow-hidden shadow-3 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
        >
          {/* Gradient background */}
          <div
            className="relative p-8 md:p-12"
            style={{ background: colors.gradient }}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>

            {/* Content */}
            <div className="relative">
              <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                {module.title}
              </h1>

              <p className="mb-6 text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-3xl">
                {module.description}
              </p>

              {/* Metadata badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                {module.time && <MetaBadge type="time" value={module.time} variant="light" />}
                {module.groupSize && (
                  <MetaBadge type="group" value={module.groupSize} variant="light" />
                )}
              </div>

              {/* AI Literacy badges */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
                <AiLiteracyBadgeList ids={module.ai_literacy_ids} />
              </div>
            </div>
          </div>
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
