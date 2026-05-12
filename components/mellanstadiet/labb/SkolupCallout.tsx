import { ExternalLink, ShieldCheck } from "lucide-react";

/* Lugn ruta som påminner om att labbet är AGNOSTISKT — funkar med vilken
 * AI som helst — men att Skolup AI är det verktyg eleverna ska använda
 * i klassrummet. */

export function SkolupCallout() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 rounded-2xl border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div
            className="flex h-14 w-14 flex-none items-center justify-center rounded-xl"
            style={{ background: "#10b98120" }}
            aria-hidden
          >
            <ShieldCheck className="h-7 w-7 text-[#10b981]" />
          </div>
          <div>
            <div className="ms-mono text-[var(--ms-text-muted)]">
              VERKTYG ATT KÖRA PROMPTERNA I
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-[var(--ms-text)]">
              Använd Skolup AI i klassrummet.
            </h3>
            <p className="mt-2 leading-relaxed text-[var(--ms-text-body)]">
              Det är det AI-verktyg er skola valt — säkrast, anpassat för dig
              som elev. Prompterna här funkar i Skolup AI, ChatGPT, Claude,
              Snap My AI och vilken chattbot som helst.{" "}
              <span className="font-semibold">
                Hemma — fråga en vuxen vilket ni får använda.
              </span>
            </p>
          </div>
          <a
            href="https://skolup.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-btn ms-btn-primary flex-none"
          >
            Öppna Skolup
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
