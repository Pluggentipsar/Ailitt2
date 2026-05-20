import Link from "next/link";
import { ArrowLeft, Terminal, ArrowRight, AlertCircle } from "lucide-react";
import { promptbibliotek } from "@/lib/workshops/kallkritik/resources/promptbibliotek";
import { activitiesById } from "@/lib/workshops/kallkritik";
import { CopyButton } from "@/components/workshops/kallkritik/CopyButton";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";

export const metadata = {
  title: `${promptbibliotek.title} · Källkritik-sandlådan`,
  description: promptbibliotek.blurb,
};

export default function PromptbibliotekPage() {
  return (
    <article data-chapter-tone="havsblå" className="pb-20">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-workshop-havsbla text-white text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <Terminal className="h-3.5 w-3.5" />
            Bilaga B
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {promptbibliotek.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            {promptbibliotek.blurb}
          </p>
          <div className="mt-5">
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-10">
          {promptbibliotek.categories.map((cat) => (
            <section key={cat.id} className="print-avoid-break">
              <div className="border-b-2 border-dashed border-stone-300 pb-3 mb-5">
                <h2 className="font-display text-3xl text-stone-900">
                  {cat.title}
                </h2>
                <p className="text-stone-600 text-sm mt-1">{cat.description}</p>
              </div>

              <div className="space-y-4">
                {cat.prompts.map((p, i) => {
                  const linkedActivity = p.forActivity
                    ? activitiesById[p.forActivity]
                    : null;
                  return (
                    <div
                      key={i}
                      className="bg-white/70 border border-stone-200 rounded-2xl p-5 print-avoid-break"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                        <div>
                          <div className="font-display text-2xl text-stone-900 leading-tight">
                            {p.title}
                          </div>
                          {linkedActivity && (
                            <Link
                              href={`/workshops/kallkritik-mellanstadiet/${linkedActivity.id}`}
                              className="inline-flex items-center gap-1 mt-1 text-xs text-workshop-havsbla hover:underline"
                            >
                              Till aktivitet {linkedActivity.number}{" "}
                              {linkedActivity.title}
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                        <CopyButton text={p.prompt} />
                      </div>
                      <pre className="whitespace-pre-wrap bg-stone-100 text-stone-900 rounded-xl p-4 text-sm font-mono leading-relaxed">
                        {p.prompt}
                      </pre>
                      {p.note && (
                        <div className="mt-3 flex items-start gap-2 text-sm text-stone-700">
                          <AlertCircle className="h-4 w-4 text-workshop-terrakotta shrink-0 mt-0.5" />
                          {p.note}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
