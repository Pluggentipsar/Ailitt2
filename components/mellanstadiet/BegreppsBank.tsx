interface BegreppsBankItem {
  ord: string;
  forklaring: string;
}

interface BegreppsBankProps {
  items: BegreppsBankItem[];
  accentHex: string;
}

/** Begrepp eleven ska kunna efter lektionen — sammanfattande lista. */
export function BegreppsBank({ items, accentHex }: BegreppsBankProps) {
  return (
    <section className="border-t border-[var(--ms-border)] py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="ms-mono mb-4 text-[var(--ms-text-muted)]">
          // BEGREPPSBANK · {items.length} ORD
        </div>
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-[var(--ms-text)] sm:text-3xl">
          Begrepp att kunna
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.ord}
              className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5"
            >
              <dt
                className="mb-1.5 font-mono text-sm font-semibold uppercase tracking-wide"
                style={{ color: accentHex }}
              >
                {item.ord}
              </dt>
              <dd className="text-sm leading-relaxed text-[var(--ms-text-body)]">
                {item.forklaring}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
