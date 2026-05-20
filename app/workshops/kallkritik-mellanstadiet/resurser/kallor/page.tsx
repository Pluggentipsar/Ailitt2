import Link from "next/link";
import { ArrowLeft, BookMarked, ExternalLink } from "lucide-react";
import { kallor } from "@/lib/workshops/kallkritik/resources/kallor";

export const metadata = {
  title: `${kallor.title} · Källkritik-sandlådan`,
  description: kallor.blurb,
};

export default function KallorPage() {
  return (
    <article data-chapter-tone="kol" className="pb-20">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <BookMarked className="h-3.5 w-3.5" />
            Resurs
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {kallor.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            {kallor.blurb}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-10">
          {kallor.categories.map((cat) => (
            <section key={cat.id} className="print-avoid-break">
              <div className="border-b-2 border-dashed border-stone-300 pb-2 mb-5">
                <h2 className="font-display text-3xl text-stone-900">
                  {cat.title}
                </h2>
              </div>

              <div className="space-y-4">
                {cat.sources.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/70 hover:bg-white border border-stone-200 hover:border-stone-400 rounded-2xl p-5 group transition-colors print-avoid-break"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
                          {s.publisher}
                        </div>
                        <h3 className="font-display text-2xl text-stone-900 leading-tight mb-2 group-hover:underline decoration-2 underline-offset-2">
                          {s.title}
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-sm">
                          {s.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-stone-400 shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
