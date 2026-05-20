import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { foraldraguide } from "@/lib/workshops/kallkritik/resources/foraldraguide";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";

export const metadata = {
  title: `${foraldraguide.title} · Källkritik-sandlådan`,
  description: foraldraguide.blurb,
};

export default function ForaldraguidePage() {
  return (
    <article data-chapter-tone="skog" className="pb-20">
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
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-workshop-skog text-white text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <Users className="h-3.5 w-3.5" />
            Resurs
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {foraldraguide.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            {foraldraguide.blurb}
          </p>
          <div className="mt-5">
            <PrintButton label="Skriv ut guiden" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-6">
          <p className="text-stone-800 leading-relaxed text-lg">
            {foraldraguide.intro}
          </p>

          <p className="text-stone-800 leading-relaxed">
            {foraldraguide.framingen}
          </p>

          <section className="bg-white/70 rounded-2xl p-6 border border-stone-200 print-avoid-break">
            <h2 className="font-display text-3xl text-stone-900 mb-4">
              En bra start
            </h2>
            <ul className="space-y-3">
              {foraldraguide.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-stone-800 leading-relaxed">
                  <span
                    className="font-display text-2xl shrink-0 leading-none mt-0.5"
                    style={{ color: "var(--workshop-skog)" }}
                  >
                    {i + 1}.
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-workshop-skog text-white rounded-2xl p-6 print-avoid-break">
            <p className="leading-relaxed mb-4 text-stone-100">
              {foraldraguide.keyQuestion.intro}
            </p>
            <p className="font-display text-3xl leading-snug mb-4">
              ”{foraldraguide.keyQuestion.text}”
            </p>
            <p className="text-stone-100 italic">
              {foraldraguide.keyQuestion.outro}
            </p>
          </section>

          <p className="text-stone-800 leading-relaxed italic">
            {foraldraguide.closing}
          </p>
        </div>
      </div>
    </article>
  );
}
