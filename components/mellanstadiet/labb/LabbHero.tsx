import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";

/* AI-labbets hero. Bjuder in, sätter ramen och slår fast pedagogisk
 * grundprincip: DU ÄR CHEFEN. */

export function LabbHero() {
  return (
    <section className="relative px-4 pt-12 pb-12 sm:pt-14">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/mellanstadiet"
          className="ms-mono inline-flex items-center gap-1.5 text-[var(--ms-text-muted)] transition-colors hover:text-[var(--ms-text)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          KURSEN · 7 LEKTIONER
        </Link>

        <div className="ms-mono mt-8 flex items-center gap-2 text-[var(--ms-text-muted)]">
          <FlaskConical className="h-3.5 w-3.5" />
          AI-LABBET · SANDLÅDA FÖR ÅK 4–6
        </div>

        <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-[var(--ms-text)] sm:text-6xl lg:text-[4.5rem]">
          Här leker du <br />
          med AI <span className="italic text-[#fcd34d]">på riktigt</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--ms-text-body)]">
          Tio stationer. Tio färdiga prompter du kan kopiera in i Skolup AI.
          Du fyller i det <span className="font-semibold">gula</span> själv —
          det är din prompt. Den är ditt verktyg. Du är chefen.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#fcd34d]/40 bg-[#fcd34d]/10 px-4 py-3">
          <span aria-hidden className="text-2xl">💡</span>
          <p className="text-sm text-[var(--ms-text-body)] sm:text-base">
            <span className="font-bold text-[var(--ms-text)]">
              Inget är på riktigt här —
            </span>{" "}
            ingen AI kör inuti den här sidan. Du kopierar prompten och kör den
            själv i Skolup AI eller annan chattbot.
          </p>
        </div>
      </div>
    </section>
  );
}
