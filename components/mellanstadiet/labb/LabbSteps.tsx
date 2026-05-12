/* Fyra steg eleven följer i labbet. Speglar Tänkartrappan men i sandlådans
 * konkreta termer. Visas högst upp så eleven (och läraren) får ramen. */

const STEPS = [
  {
    n: 1,
    label: "Välj station",
    desc: "Vad vill du göra just nu? Skrolla eller hoppa via menyn.",
    color: "#6366f1",
  },
  {
    n: 2,
    label: "Fyll i platshållarna",
    desc: "De gula fälten är dina. Skriv in ditt ämne, din text, dina glosor.",
    color: "#10b981",
  },
  {
    n: 3,
    label: "Kopiera & klistra in",
    desc: "Tryck på Kopiera. Öppna Skolup AI. Klistra in. Tryck enter.",
    color: "#f59e0b",
  },
  {
    n: 4,
    label: "Granska & iterera",
    desc: "Stämmer svaret? Vad ändrar du? Prova varianten under prompten.",
    color: "#ef4444",
  },
];

export function LabbSteps() {
  return (
    <section className="border-y border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
          // SÅ HÄR FUNKAR LABBET
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--ms-text)] sm:text-3xl">
          Fyra steg — varje station, varje gång.
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--ms-text-body)]">
          Du känner igen dem från lektionerna. Det är Tänkartrappan, fast i
          sandlådans språk.
        </p>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5"
            >
              <div
                className="ms-mono inline-flex h-8 w-8 items-center justify-center rounded-md font-bold text-[var(--ms-bg)]"
                style={{ background: s.color }}
                aria-hidden
              >
                {s.n}
              </div>
              <div className="mt-3 text-lg font-bold text-[var(--ms-text)]">
                {s.label}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ms-text-body)]">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
