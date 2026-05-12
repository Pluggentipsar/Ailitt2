import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Beaker,
  FlaskConical,
  Gamepad2,
} from "lucide-react";
import { MELLANSTADIET_LESSONS } from "@/lib/mellanstadiet-data";
import { MELLANSTADIET_GAMES } from "@/lib/mellanstadiet-games";
import { LABB_EXPERIMENTS } from "@/lib/mellanstadiet-labb";

export default function MellanstadietLanding() {
  return (
    <div className="ms-grid-bg">
      {/* Hero */}
      <section className="relative px-4 pt-20 pb-32 sm:pt-28 sm:pb-40">
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-6 text-[var(--ms-text-muted)]">
            ÅK 4–6 · 7 LEKTIONER · KURSMATERIAL 2026
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ms-text)] sm:text-7xl lg:text-[5.5rem]">
            Vad <span className="italic text-[#a5b4fc]">är</span> AI?
            <br />
            Och vem ska bestämma
            <br />
            vad det <span className="italic text-[#fcd34d]">blir</span>?
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--ms-text-body)]">
            En kurs i sju lektioner för dig i åk 4–6. Den behandlar AI som det
            faktiskt är — inte sagor om robotar. Du ska förstå hur det fungerar,
            kunna använda det, granska det och bestämma vad det får vara i ditt
            liv.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="#lektioner" className="ms-btn ms-btn-primary">
              Börja med Lektion 1
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/mellanstadiet/labb" className="ms-btn ms-btn-secondary">
              <FlaskConical className="h-4 w-4" />
              AI-labbet
            </Link>
            <Link href="/mellanstadiet/spel" className="ms-btn ms-btn-secondary">
              <Gamepad2 className="h-4 w-4" />
              Spel & undersökningar
            </Link>
            <a href="#om-kursen" className="ms-btn ms-btn-secondary">
              Om kursen
            </a>
          </div>

          {/* Statsrad */}
          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              { value: "7", label: "lektioner" },
              { value: `${MELLANSTADIET_GAMES.length}`, label: "spel & lekar" },
              { value: `${LABB_EXPERIMENTS.length}`, label: "labb-stationer" },
              { value: "0", label: "fiktiva karaktärer" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-[var(--ms-text)] sm:text-5xl">
                  {stat.value}
                </div>
                <div className="ms-mono mt-1 text-[var(--ms-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifest */}
      <section
        id="om-kursen"
        className="border-y border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-4 text-[var(--ms-text-muted)]">
            // VARFÖR DEN HÄR KURSEN FINNS
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
            Du sitter inte här för att lära dig vara{" "}
            <span className="text-[var(--ms-text-muted)] line-through">bättre än AI</span>.
            <br />
            Du sitter här för att lära dig vara mer{" "}
            <span className="text-[#fcd34d]">människa</span>.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Förklara på riktigt",
                body:
                  "Vi använder riktiga begrepp — transformer, träningsdata, harness, agent — och förklarar dem ordentligt. Inget babyspråk.",
              },
              {
                title: "Verkliga exempel före fiktion",
                body:
                  "Inga påhittade klassrum. Vi jobbar med AlphaGo, ChatGPT-lanseringen, Will Smith-spaghetti, Drake-låten, Sora-stängningen 2026 — verkliga händelser.",
              },
              {
                title: "Du äger processen",
                body:
                  "Tänkartrappan: Jag tänker först → AI hjälper → Jag granskar → Iterera. Aldrig 'låt AI göra det'.",
              },
            ].map((p) => (
              <div key={p.title}>
                <div className="text-lg font-semibold text-[var(--ms-text)]">{p.title}</div>
                <p className="mt-2 leading-relaxed text-[var(--ms-text-body)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lektioner */}
      <section id="lektioner" className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-4 text-[var(--ms-text-muted)]">
            // KURSPLAN · 7 LEKTIONER
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
            Sju lektioner i en bestämd ordning
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--ms-text-body)]">
            Lektion 3 (Använda AI) ligger före lektion 4 (Granska AI) — för att
            du ska ha en känsla för verktyget innan du börjar ifrågasätta det.
            Lektion 5 (Etik) ligger i mitten — den knyter ihop &quot;förstå
            tekniken&quot; med &quot;förstå relationen och samhället&quot;.
          </p>

          <ol className="mt-12 space-y-3">
            {MELLANSTADIET_LESSONS.map((lesson) => (
              <li key={lesson.id}>
                <Link
                  href={
                    lesson.status === "ready"
                      ? `/mellanstadiet/${lesson.slug}`
                      : `#`
                  }
                  className={`group relative block overflow-hidden rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-6 transition-all duration-300 sm:p-8 ${
                    lesson.status === "ready"
                      ? "hover:-translate-y-1 hover:border-[var(--ms-text)]/40"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  aria-disabled={lesson.status !== "ready"}
                >
                  {/* Side accent bar */}
                  <div
                    className="absolute inset-y-0 left-0 w-1 transition-all group-hover:w-2"
                    style={{ background: lesson.accentHex }}
                  />

                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 pl-4">
                    <div>
                      <div className="ms-mono text-[var(--ms-text-dim)]">LEKTION</div>
                      <div
                        className="font-mono text-5xl font-bold tabular-nums sm:text-6xl"
                        style={{ color: lesson.accentHex }}
                      >
                        {lesson.number.toString().padStart(2, "0")}
                      </div>
                    </div>

                    <div>
                      <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
                        DIM {lesson.dimension} · {lesson.dimensionLabel}
                      </div>
                      <div className="text-xl font-bold text-[var(--ms-text)] sm:text-2xl">
                        {lesson.title}
                      </div>
                      <p className="mt-1 text-[var(--ms-text-body)]">
                        <em className="not-italic text-[var(--ms-text-muted)]">
                          {lesson.kernfraga}
                        </em>
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[var(--ms-text-muted)]">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {lesson.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Beaker className="h-3.5 w-3.5" /> {lesson.interaktivt}
                        </span>
                        {lesson.status !== "ready" && (
                          <span className="ms-mono rounded-full border border-[var(--ms-border)] px-2 py-0.5 text-[var(--ms-text-dim)]">
                            KOMMER
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <ArrowRight
                        className="h-6 w-6 text-[var(--ms-text-dim)] transition-all group-hover:translate-x-1 group-hover:text-[var(--ms-text)]"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI-labbet — sandlåda */}
      <section
        id="labb"
        className="border-t border-[var(--ms-border)] px-4 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-4 flex items-center gap-2 text-[var(--ms-text-muted)]">
            <FlaskConical className="h-3.5 w-3.5" />
            // AI-LABBET · {LABB_EXPERIMENTS.length} STATIONER · SANDLÅDA
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--ms-text)] sm:text-5xl">
                Sandlådan där du <span className="italic text-[#fcd34d]">leker</span> med AI på riktigt.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ms-text-body)]">
                Tio färdiga prompter du kan kopiera in i Skolup AI eller annan
                chattbot. Du fyller i ditt eget ämne, din egen text. Du granskar
                svaret. Du iterar. Bygger på Tänkartrappan — och på{" "}
                <em>SAILD: eleven som designer, inte konsument.</em>
              </p>

              <ul className="mt-6 space-y-2 text-[var(--ms-text-body)]">
                {[
                  "📚 Få något förklarat på ett nytt sätt",
                  "❓ Bli förhörd inför ett prov",
                  "✍️ Få feedback på din text",
                  "🎨 Skapa bilder och låtar med ord",
                  "🔍 Lura AI:n — hittar den på?",
                ].map((row) => (
                  <li key={row} className="flex gap-3">
                    <span className="text-lg">{row.split(" ")[0]}</span>
                    <span>{row.split(" ").slice(1).join(" ")}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/mellanstadiet/labb"
                  className="ms-btn ms-btn-primary"
                >
                  <FlaskConical className="h-4 w-4" />
                  Öppna AI-labbet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="ms-mono text-[var(--ms-text-muted)]">
                  IDEALT EFTER FÖRELÄSNING · 20–40 MIN
                </span>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-6 shadow-sm"
              aria-hidden
            >
              <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
                EXEMPEL · STATION
              </div>
              <div className="text-lg font-bold text-[var(--ms-text)]">
                💡 Få något förklarat på ett nytt sätt
              </div>
              <div className="mt-4 rounded-lg border-2 border-[#6366f1]/40 bg-[#6366f1]/10 p-4 font-mono text-sm leading-relaxed text-[var(--ms-text)]">
                <span>Förklara </span>
                <span className="rounded border-2 border-[#6366f1] bg-[#6366f1]/20 px-2 py-0.5 font-bold text-[#6366f1]">
                  fotosyntes
                </span>
                <span> för en 11-åring. Använd liknelser från </span>
                <span className="rounded border-2 border-[#6366f1] bg-[#6366f1]/20 px-2 py-0.5 font-bold text-[#6366f1]">
                  Minecraft
                </span>
                <span>. Använd korta meningar.</span>
              </div>
              <div className="ms-mono mt-3 text-[var(--ms-text-muted)]">
                ↑ DET GULA ÄR DITT — FYLL I, KOPIERA, KÖR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spel-sektion */}
      <section
        id="spel"
        className="border-t border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-4 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="ms-mono mb-4 text-[var(--ms-text-muted)]">
            // SPEL & UNDERSÖKNINGAR · {MELLANSTADIET_GAMES.length} ST
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--ms-text)] sm:text-4xl">
              Lär dig genom att spela
            </h2>
            <Link
              href="/mellanstadiet/spel"
              className="ms-mono inline-flex items-center gap-1.5 text-[#fcd34d] transition-colors hover:text-[var(--ms-text)]"
            >
              ALLA SPEL <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-[var(--ms-text-body)]">
            Att läsa <em>om</em> AI är en sak. Att <em>prova</em> är en annan.
            Här är fyra spel som tar dig in i begreppen via händerna.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MELLANSTADIET_GAMES.filter((g) => g.status === "ready").map(
              (game) => (
                <Link
                  key={game.id}
                  href={`/mellanstadiet/spel/${game.slug}`}
                  className="group flex flex-col rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--ms-text)]/40"
                >
                  <div
                    className="ms-mono mb-3 inline-flex w-fit items-center gap-1 rounded px-2 py-1 text-[var(--ms-bg)]"
                    style={{ background: game.accentHex }}
                  >
                    <Gamepad2 className="h-3 w-3" />
                    {game.type.toUpperCase()}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ms-text)]">
                    {game.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-[var(--ms-text-muted)]">
                    {game.tagline}
                  </p>
                  <div className="ms-mono mt-3 flex items-center justify-between text-xs text-[var(--ms-text-muted)]">
                    <span>{game.duration}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      style={{ color: game.accentHex }}
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-[var(--ms-border)] px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <Sparkles className="mx-auto mb-4 h-5 w-5 text-[#fcd34d]" />
          <p className="text-sm text-[var(--ms-text-muted)]">
            Materialet är under utveckling. Lektion 1 och 2 är publicerade —
            resterande är på väg. Källor och fall uppdateras löpande.
          </p>
          <p className="ms-mono mt-3 text-[var(--ms-text-dim)]">
            VERSION 0.1 · MAJ 2026 · AI-LITTERACITET FÖR ÅK 4–6
          </p>
        </div>
      </section>
    </div>
  );
}
