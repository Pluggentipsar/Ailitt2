import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allModules } from "contentlayer/generated";
import { SUBJECT_CONFIGS } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "Ämnen | AI-litt",
  description:
    "Välj ämne och navigera direkt till moduler, uppgiftsbanker och bedömningsstöd som väver in AI i undervisningen.",
};

function getSubjectStats() {
  return SUBJECT_CONFIGS.map((subject) => {
    const subjectModules = subject.matchSubjects.length
      ? allModules.filter((module) =>
          subject.matchSubjects.includes(module.subject)
        )
      : [];

    const courseLabels = Array.from(
      new Set(subjectModules.map((module) => module.course))
    );

    return {
      ...subject,
      moduleCount: subjectModules.length,
      courseLabels,
    };
  });
}

export default function AmnenPage() {
  const subjects = getSubjectStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/Subjects.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/60 to-gray-900/30" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl animate-fade-in-down">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              ÄMNESHUBB
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Bygg din ämnesstrategi för{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(59,130,246,0.45)]">
                AI-litteracitet
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed drop-shadow-md">
              Välj ämne, gå vidare till rätt nivå och plocka moduler som
              kombinerar ämnesplanens krav med generativ AI. Svenska är först ut
              som fullskalig hubb – fler ämnen rullas ut successivt.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 pt-10 sm:pt-14">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Ämnesportaler</h2>
            <p className="text-gray-600">
              Klicka in på ämnet för att se kurser, moduler och bedömningsstöd.
            </p>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {subjects.filter((subject) => subject.status === "available").length}{" "}
            aktiva &middot; {subjects.length} planerade
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {subjects.map((subject) => {
            const card = (
              <div className="group relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl">
                {subject.status === "coming-soon" && (
                  <span className="mb-4 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                    På väg
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-gray-900">
                  {subject.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-cyan-600">
                  {subject.blurb}
                </p>

                <p className="mt-4 flex-1 text-gray-600">{subject.summary}</p>

                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {subject.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {subject.moduleCount > 0 ? (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                      {subject.moduleCount} moduler
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-600">
                      Moduler planeras
                    </span>
                  )}
                  {subject.courseLabels.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center text-sm font-semibold text-cyan-700">
                  {subject.status === "available"
                    ? "Öppna ämneshubben"
                    : "Under utveckling"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );

            return subject.status === "available" ? (
              <Link
                key={subject.slug}
                href={`/amnen/${subject.slug}`}
                className="block h-full"
              >
                {card}
              </Link>
            ) : (
              <div key={subject.slug} className="opacity-90">
                {card}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
