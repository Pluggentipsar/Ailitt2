import { Download, FileCode, FileText, MousePointer2 } from "lucide-react";

/* Tydlig guide som visar HUR eleven får ut kod från AI:n till en
 * körbar HTML-fil. Visas en gång, högst upp i kod-kategorin.
 *
 * Designprincip: detta är den ENDA "manualen" eleven behöver för hela
 * kod-flödet — så den ska tåla att läsas en gång, inte gömmas i en
 * accordion. Visuellt distinkt från experiment-korten. */

const STEPS = [
  {
    n: 1,
    icon: MousePointer2,
    title: "Kopiera & kör prompten",
    body: "Tryck KOPIERA på prompten nedan. Klistra in i Skolup AI eller ChatGPT.",
  },
  {
    n: 2,
    icon: FileCode,
    title: "AI ger dig kod",
    body: "Du får antingen en NEDLADDNINGSBAR FIL (om AI:n stödjer det) eller ett stort kodblock med HTML, CSS och JS i samma fil.",
  },
  {
    n: 3,
    icon: FileText,
    title: "Får du fil? Hoppa till 4. Får du kodblock?",
    body: "Markera HELA koden (Cmd+A inuti kodblocket eller scroll + dra). Tryck Cmd+C eller Ctrl+C för att kopiera.",
  },
  {
    n: 4,
    icon: Download,
    title: "Skapa filen själv om du fick text",
    body: "Öppna en textredigerare. Klistra in. Spara som spel.html — INTE .txt. Dubbelklicka filen → öppnas i webbläsaren.",
  },
];

export function CodeWorkflowCallout({ accentHex }: { accentHex: string }) {
  return (
    <div
      className="my-8 overflow-hidden rounded-2xl border-2 shadow-sm"
      style={{
        borderColor: `${accentHex}60`,
        background: `linear-gradient(135deg, ${accentHex}10, ${accentHex}03)`,
      }}
    >
      <div
        className="ms-mono px-6 py-3 font-bold text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        💻 SÅ HÄR FÅR DU AI:S KOD ATT FAKTISKT FUNGERA
      </div>

      <div className="px-6 py-6">
        <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--ms-text-body)]">
          Den här kategorin är annorlunda än de andra — du får TILLBAKA en hel
          fil. Läs detta EN gång, så vet du flödet för alla prompter nedan.
        </p>

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.n}
                className="relative rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5"
              >
                <div
                  className="ms-mono absolute -top-3 left-4 inline-flex h-7 w-7 items-center justify-center rounded-md font-bold text-[var(--ms-bg)]"
                  style={{ background: accentHex }}
                  aria-hidden
                >
                  {s.n}
                </div>
                <Icon
                  className="mb-3 h-6 w-6"
                  style={{ color: accentHex }}
                  aria-hidden
                />
                <div className="mb-1 text-sm font-bold leading-tight text-[var(--ms-text)]">
                  {s.title}
                </div>
                <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Plattformstips */}
        <div
          className="mt-6 grid gap-4 rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] p-5 md:grid-cols-3"
        >
          <div>
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
              🪟 WINDOWS / CHROMEBOOK
            </div>
            <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
              Öppna <span className="font-bold">Anteckningar (Notepad)</span>.
              Klistra in. Filer → Spara som… → välj{" "}
              <span className="font-bold">"Alla filer"</span> i listan, skriv
              namnet som <code className="rounded bg-[var(--ms-prose-code-bg)] px-1 text-[var(--ms-prose-code-fg)]">spel.html</code>.
              Tryck Spara. Dubbelklicka filen.
            </p>
          </div>
          <div>
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
              🍎 MAC
            </div>
            <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
              Öppna <span className="font-bold">TextEdit</span>. Tryck{" "}
              <code className="rounded bg-[var(--ms-prose-code-bg)] px-1 text-[var(--ms-prose-code-fg)]">Cmd+Shift+T</code>{" "}
              så blir det vanlig text (inte rich text). Klistra in. Arkiv →
              Spara → namn{" "}
              <code className="rounded bg-[var(--ms-prose-code-bg)] px-1 text-[var(--ms-prose-code-fg)]">spel.html</code>
              . Avbryt om Mac frågar om .txt. Dubbelklicka.
            </p>
          </div>
          <div>
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
              ⚠️ VANLIGT FEL
            </div>
            <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
              Filen heter{" "}
              <code className="rounded bg-[var(--ms-prose-code-bg)] px-1 text-[var(--ms-prose-code-fg)]">
                spel.html.txt
              </code>
              ? Då sparades den som textfil. Byt namn så det slutar på{" "}
              <code className="rounded bg-[var(--ms-prose-code-bg)] px-1 text-[var(--ms-prose-code-fg)]">
                .html
              </code>{" "}
              och försök igen.
            </p>
          </div>
        </div>

        <div className="ms-mono mt-6 text-[var(--ms-text-muted)]">
          ★ TIPS: Får du fel? Klistra in HELA felmeddelandet tillbaka i AI:n
          och be om en fix. Du behöver inte förstå koden för att felsöka — du
          frågar AI:n.
        </div>
      </div>
    </div>
  );
}
