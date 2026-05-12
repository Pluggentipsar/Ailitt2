import Link from "next/link";
import { ArrowRight, Gamepad2, Sparkles } from "lucide-react";

/* Avslutar labbet med en påminnelse om att eleven är chefen — och länk
 * tillbaka till kursen och spelen. */

export function LabbFooter() {
  return (
    <>
      <section className="border-t border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
            // KOM IHÅG
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
            Du är{" "}
            <span className="italic text-[#fcd34d]">chefen</span>. Inte AI:n.
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ms-text-body)]">
            AI är ett verktyg. Som en miniräknare — men för ord och bilder.
            Den hittar på ibland. Den håller med dig oftare än den borde.
            Den tycker ingenting. Använd den för att <em>lära</em> — inte
            för att slippa lära.
          </p>
          <p className="ms-mono mt-6 text-[var(--ms-text-dim)]">
            JAG TÄNKER · AI HJÄLPER · JAG GRANSKAR · ITERERA
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/mellanstadiet/spel"
              className="group flex items-center justify-between gap-4 rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--ms-text)]/40"
            >
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-6 w-6 text-[#a5b4fc]" />
                <div>
                  <div className="ms-mono text-[var(--ms-text-muted)]">
                    SPEL & UNDERSÖKNINGAR
                  </div>
                  <div className="text-lg font-bold text-[var(--ms-text)]">
                    Prova åtta interaktiva spel
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-[var(--ms-text-muted)] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/mellanstadiet#lektioner"
              className="group flex items-center justify-between gap-4 rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--ms-text)]/40"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#fcd34d]" />
                <div>
                  <div className="ms-mono text-[var(--ms-text-muted)]">
                    KURSEN · 7 LEKTIONER
                  </div>
                  <div className="text-lg font-bold text-[var(--ms-text)]">
                    Tillbaka till lektionerna
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-[var(--ms-text-muted)] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
