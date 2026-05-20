import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { dramaturgi } from "@/lib/workshops/kallkritik/resources/dramaturgi";
import { activitiesById } from "@/lib/workshops/kallkritik";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";

export const metadata = {
  title: `${dramaturgi.title} · Källkritik-sandlådan`,
  description: dramaturgi.blurb,
};

export default function DramaturgiPage() {
  return (
    <article data-chapter-tone="senap" className="pb-20">
      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/workshops/kallkritik-mellanstadiet"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till sandlådan
        </Link>
      </div>

      <header className="container mx-auto px-4 pt-4 pb-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-workshop-senap text-stone-900 text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <Clock className="h-3.5 w-3.5" />
            Bilaga C
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {dramaturgi.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-3">
            {dramaturgi.blurb}
          </p>
          <p className="text-stone-700">{dramaturgi.intro}</p>
          <div className="mt-5">
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-12">
          {dramaturgi.plans.map((plan) => (
            <section key={plan.id} className="print-avoid-break">
              <div className="border-b-2 border-dashed border-stone-300 pb-3 mb-5">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h2 className="font-display text-3xl text-stone-900">
                    {plan.title}
                  </h2>
                  <span className="text-sm text-stone-500">
                    Total: {plan.totalDuration}
                  </span>
                </div>
                <p className="text-stone-600 mt-1">{plan.description}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-stone-300">
                      <th className="text-left py-2 px-3 font-semibold text-stone-700">
                        Tid
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-stone-700">
                        Block
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-stone-700">
                        Aktivitet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.schedule.map((row, i) => {
                      const linkedActivity = row.activityId
                        ? activitiesById[row.activityId]
                        : null;
                      return (
                        <tr
                          key={i}
                          className="border-b border-stone-200 hover:bg-white/50"
                        >
                          <td className="py-3 px-3 font-mono text-stone-700 align-top whitespace-nowrap">
                            {row.time}
                          </td>
                          <td className="py-3 px-3 font-semibold text-stone-900 align-top">
                            {row.block}
                          </td>
                          <td className="py-3 px-3 text-stone-700">
                            {linkedActivity ? (
                              <Link
                                href={`/workshops/kallkritik-mellanstadiet/${linkedActivity.id}`}
                                className="inline-flex items-center gap-1 text-workshop-senap font-medium hover:underline"
                              >
                                {row.activity}
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            ) : (
                              <span>{row.activity || "—"}</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
