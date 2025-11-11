import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allModules } from "contentlayer/generated";
import { ModuleCard } from "@/components/search/ModuleCard";
import {
  AVAILABLE_SUBJECTS,
  SUBJECT_CONFIGS,
  getSubjectConfig,
} from "@/lib/subjects";
import { getCourseBranding } from "@/lib/course-branding";

type SubjectRouteParams = {
  subject: string;
};

type SubjectPageProps = {
  params: Promise<SubjectRouteParams>;
};

export async function generateStaticParams() {
  return AVAILABLE_SUBJECTS.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const config = getSubjectConfig(resolvedParams.subject);

  if (!config) {
    return {
      title: "Ämne saknas | AI-litt",
    };
  }

  return {
    title: `${config.name} | Ämnen | AI-litt`,
    description: config.summary,
  };
}

export default async function SubjectHubPage({ params }: SubjectPageProps) {
  const resolvedParams = await params;
  const config = getSubjectConfig(resolvedParams.subject);

  if (!config || config.status !== "available") {
    notFound();
  }

  const hero = config.hero ?? {
    title: config.name,
    lead: config.summary,
    backgroundImage: "/Subjects.png",
  };

  const subjectModules = config.matchSubjects.length
    ? allModules.filter((module) =>
        config.matchSubjects.includes(module.subject)
      )
    : [];

  const modulesByCourse = config.courses.reduce(
    (acc, course) => {
      acc[course.slug] = subjectModules.filter(
        (module) => module.course === course.title
      );
      return acc;
    },
    {} as Record<string, typeof subjectModules>
  );

  const moduleCount = subjectModules.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/60 to-gray-900/20" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl animate-fade-in-down text-white drop-shadow-md">
            <Link
              href="/amnen"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
            >
              ÄMNEN / {config.name.toUpperCase()}
            </Link>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {hero.title}{" "}
              {hero.highlight && (
                <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(34,197,94,0.4)]">
                  {hero.highlight}
                </span>
              )}
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {hero.lead}
            </p>
          </div>
        </div>
      </section>

      <main className="relative -mt-16 space-y-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
              <div>
                <p className="text-lg text-gray-700">{config.summary}</p>
                {config.focusAreas && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {config.focusAreas.map((focus) => (
                      <div
                        key={focus.title}
                        className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                          {focus.title}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          {focus.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-gray-700 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    MODULER
                  </p>
                  <p className="mt-2 text-4xl font-bold text-gray-900">
                    {moduleCount}
                  </p>
                  <p className="text-sm text-gray-600">
                    Aktiva, publicerade moduler
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 text-gray-700 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    KURSER
                  </p>
                  <p className="mt-2 text-4xl font-bold text-gray-900">
                    {config.courses.length}
                  </p>
                  <p className="text-sm text-gray-600">På hubben (inkl. planerade)</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                KORTVÄGAR
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {config.courses.map((course) => (
                  <a
                    key={course.slug}
                    href={`#${course.slug}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      course.status === "planned"
                        ? "border border-dashed border-gray-300 text-gray-500"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {course.title}
                    {course.status === "planned" && (
                      <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-gray-700">
                        Planeras
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {config.courses.map((course) => {
              const courseModules = modulesByCourse[course.slug] ?? [];

              return (
                <section
                  key={course.slug}
                  id={course.slug}
                  className="rounded-3xl border border-gray-200 bg-white/95 p-8 shadow-sm"
                >
                    <div className="mb-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                        KURS
                      </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {course.title}
                      </h2>
                      {course.status === "planned" && (
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                          På väg
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-gray-600">{course.description}</p>
                    {course.pageUrl && (
                      <Link
                        href={course.pageUrl}
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white"
                      >
                        {course.ctaLabel ?? "Utforska mer"}
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>

                  {courseModules.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2">
                      {courseModules.map((module) => {
                        const moduleBranding = getCourseBranding(module.course);
                        return (
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
                          featuredMedia={moduleBranding}
                        />
                      );
                    })}
                    </div>
                  ) : course.pageUrl ? (
                    <div className="rounded-2xl border border-cyan-100 bg-white/90 p-8 text-gray-700 shadow-sm">
                      <p className="text-lg font-semibold text-gray-900">
                        Arbetsyta under uppbyggnad
                      </p>
                      <p className="mt-3 text-gray-600">
                        Utforska riktlinjer, matriser och resurser på
                        bedömningssidan. Där finns allt samlat medan
                        modulbiblioteket växer.
                      </p>
                      <Link
                        href={course.pageUrl}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                      >
                        {course.ctaLabel ?? "Till sidan"}
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-gray-600">
                      Moduler publiceras inom kort. Hubben beskriver redan
                      innehållsspåren så att du kan planera i förväg.
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
