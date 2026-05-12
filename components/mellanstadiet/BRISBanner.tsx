import { Phone, Heart } from "lucide-react";

/* Banner som ska synas hela L6. Ger BRIS- och 1177-info utan att skrämma.
 * Lugn ton, tydlig information.
 */
export function BRISBanner() {
  return (
    <div className="my-6 rounded-xl border border-[#a5b4fc]/40 bg-[#a5b4fc]/5 p-5">
      <div className="flex flex-wrap items-start gap-4">
        <Heart className="h-6 w-6 flex-none text-[#a5b4fc]" />
        <div className="flex-1 min-w-0">
          <div className="ms-mono mb-1 text-[#a5b4fc]">
            OM DU MÅR DÅLIGT — DET FINNS NÅGON ATT PRATA MED
          </div>
          <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
            Den här lektionen kan vara svår att läsa. Om du tänker på dig själv
            eller någon du känner — prata med en vuxen du litar på, en lärare,
            skolkurator, eller någon av nedan:
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="tel:116111"
              className="inline-flex items-center gap-2 rounded-lg border border-[#a5b4fc]/40 bg-[var(--ms-bg-card)] px-3 py-2 transition-colors hover:bg-[var(--ms-border)]"
            >
              <Phone className="h-3.5 w-3.5 text-[#a5b4fc]" />
              <span className="font-mono text-sm font-bold text-[var(--ms-text)]">
                BRIS · 116 111
              </span>
              <span className="text-xs text-[var(--ms-text-muted)]">
                Gratis, dygnet runt
              </span>
            </a>
            <a
              href="tel:1177"
              className="inline-flex items-center gap-2 rounded-lg border border-[#a5b4fc]/40 bg-[var(--ms-bg-card)] px-3 py-2 transition-colors hover:bg-[var(--ms-border)]"
            >
              <Phone className="h-3.5 w-3.5 text-[#a5b4fc]" />
              <span className="font-mono text-sm font-bold text-[var(--ms-text)]">
                1177
              </span>
              <span className="text-xs text-[var(--ms-text-muted)]">Vårdrådgivning</span>
            </a>
          </div>
          <p className="mt-3 text-xs text-[var(--ms-text-muted)]">
            Du är inte ensam. Det finns alltid någon att prata med.
          </p>
        </div>
      </div>
    </div>
  );
}
