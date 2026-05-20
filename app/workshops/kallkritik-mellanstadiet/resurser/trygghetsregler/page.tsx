import Link from "next/link";
import { ArrowLeft, AlertTriangle, ShieldAlert } from "lucide-react";
import { trygghetsregler } from "@/lib/workshops/kallkritik/resources/trygghetsregler";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";

export const metadata = {
  title: `${trygghetsregler.title} · Källkritik-sandlådan`,
  description: trygghetsregler.blurb,
};

export default function TrygghetsreglerPage() {
  return (
    <article data-chapter-tone="terrakotta" className="pb-20">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-workshop-terrakotta text-white text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <ShieldAlert className="h-3.5 w-3.5" />
            Bilaga A
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            {trygghetsregler.title}
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            {trygghetsregler.blurb}
          </p>
          <div className="mt-5">
            <PrintButton label="Skriv ut listan" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-lg text-stone-800 mb-6">{trygghetsregler.intro}</p>

          <ol className="space-y-4">
            {trygghetsregler.rules.map((rule, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 bg-white/70 rounded-2xl border-2 border-workshop-terrakotta/40 print-avoid-break"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-workshop-terrakotta text-white shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-2xl text-stone-900 leading-tight mb-1">
                    {i + 1}. {rule.title}
                  </div>
                  <p className="text-stone-700 leading-relaxed">{rule.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 p-5 bg-stone-900 text-stone-200 rounded-2xl print-avoid-break">
            <p className="leading-relaxed">{trygghetsregler.footnote}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
