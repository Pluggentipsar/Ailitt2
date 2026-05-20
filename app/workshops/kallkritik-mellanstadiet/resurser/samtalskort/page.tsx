import Link from "next/link";
import { ArrowLeft, MessageSquareQuote } from "lucide-react";
import { samtalskort } from "@/lib/workshops/kallkritik/resources/samtalskort";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";

export const metadata = {
  title: `${samtalskort.title} · Källkritik-sandlådan`,
  description: samtalskort.blurb,
};

export default function SamtalskortPage() {
  return (
    <article data-chapter-tone="lila" className="pb-20">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-workshop-lila text-white text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <MessageSquareQuote className="h-3.5 w-3.5" />
            Resurs
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {samtalskort.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            {samtalskort.intro}
          </p>
          <div className="mt-5">
            <PrintButton label="Skriv ut kortleken" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl space-y-12">
          {samtalskort.decks.map((deck) => (
            <section key={deck.id}>
              <div className="border-b-2 border-dashed border-stone-300 pb-3 mb-6">
                <h2 className="font-display text-3xl text-stone-900">
                  {deck.title}
                </h2>
                <p className="text-stone-600 text-sm mt-1">{deck.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {deck.cards.map((card, i) => (
                  <div
                    key={i}
                    className="post-it post-it--lila post-it-rotated print-avoid-break"
                  >
                    <div className="text-xs uppercase tracking-wider text-stone-700/80 font-semibold mb-2">
                      Kort {i + 1}
                    </div>
                    <p className="font-display text-2xl text-stone-900 leading-snug">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
