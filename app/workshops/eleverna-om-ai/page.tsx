import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Users,
  Presentation,
  ExternalLink,
  Shuffle,
  Hammer,
} from "lucide-react";
import {
  workshop,
  type Referens,
  type Sektion,
  type Station,
} from "@/lib/workshops/eleverna-om-ai/workshop";
import { ovningarById } from "@/lib/ovningsbanken";
import { activitiesById } from "@/lib/workshops/kallkritik/activities";
import { toolsById } from "@/lib/verktygslada/tools";

export const metadata = {
  title: `Workshop · ${workshop.titel} · AI-litt`,
  description: workshop.intro,
};

/** Sektionston → sajtregistrets färger. Statiska klasser, purge-säkert. */
const TON: Record<Sektion["ton"], { band: string; chip: string; prick: string }> =
  {
    gra: { band: "bg-gray-100", chip: "bg-gray-200 text-gray-800", prick: "bg-gray-400" },
    teal: { band: "bg-teal-50", chip: "bg-teal-200 text-teal-900", prick: "bg-teal-500" },
    orange: { band: "bg-orange-50", chip: "bg-orange-200 text-orange-900", prick: "bg-orange-500" },
    lila: { band: "bg-violet-50", chip: "bg-violet-200 text-violet-900", prick: "bg-violet-500" },
    amber: { band: "bg-amber-50", chip: "bg-amber-200 text-amber-900", prick: "bg-amber-500" },
  };

type Lost = {
  titel: string;
  href: string;
  beskrivning?: string;
  meta?: string;
  externt?: boolean;
};

/**
 * Slår upp en referens. Titlar och tider hämtas ur källdatan i stället för att
 * dupliceras här — ändras en övning följer workshopen med.
 */
function los(r: Referens): Lost {
  if (r.kalla === "extern") {
    return {
      titel: r.titel,
      href: r.url,
      beskrivning: r.beskrivning,
      externt: r.url.startsWith("http"),
    };
  }
  if (r.kalla === "bank") {
    const o = ovningarById[r.id];
    return {
      titel: o.titel,
      href: `/ovningsbanken/${o.id}`,
      beskrivning: o.blurb,
      meta: `${o.tid} · ${o.arskurser}`,
    };
  }
  if (r.kalla === "kallkritik") {
    const a = activitiesById[r.id];
    return {
      titel: a.title,
      href: `/workshops/kallkritik-mellanstadiet/${a.id}`,
      beskrivning: a.blurb,
      meta: a.duration,
    };
  }
  const t = toolsById[r.id];
  return {
    titel: t.name,
    href: t.url,
    beskrivning: t.description,
    meta: "Verktyg",
    externt: true,
  };
}

export default function WorkshopSida() {
  const totaltStationer = workshop.sektioner.flatMap((s) => s.stationer).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 pb-16 pt-24 sm:pt-28">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              WORKSHOP
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {workshop.titel}
            </h1>
            <p className="mt-4 text-lg text-white/80">{workshop.undertitel}</p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {workshop.tid}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {workshop.malgrupp}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Hammer className="h-4 w-4" />
                {totaltStationer} stationer
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-relaxed text-white/90">
              {workshop.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={workshop.forelasningHref}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-teal-50"
              >
                <Presentation className="h-4 w-4 text-teal-700" />
                Läs föreläsningen först
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/ovningsbanken"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur transition-all hover:bg-white/20"
              >
                Plocka fritt i övningsbanken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VAD DET HÄR ÄR — för den som hittat hit utan att någon pekat dit */}
      <div className="container mx-auto px-4 pt-10">
        <div className="max-w-3xl space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Vad det här är
            </h2>
            <dl className="space-y-4 text-[15px] leading-relaxed text-gray-700">
              <div>
                <dt className="font-semibold text-gray-900">För vem</dt>
                <dd>{workshop.vadDetAr.forVem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">
                  Du som håller i den
                </dt>
                <dd>{workshop.vadDetAr.duSomLeder}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">
                  Om gruppen inte hört föreläsningen
                </dt>
                <dd>{workshop.vadDetAr.utanForelasningen}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-2.5 text-sm font-bold uppercase tracking-wider text-gray-700">
                Det här behövs i rummet
              </h3>
              <ul className="space-y-2 text-sm leading-snug text-gray-700">
                {workshop.vadDetAr.detHarBehovsIRummet.map((rad, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                    {rad}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-700">
                  Om du har mindre tid
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {workshop.vadDetAr.korta}
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-teal-500 bg-teal-50/60 p-5">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-teal-800">
                  Varför den här ordningen
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {workshop.sekvensNot}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEKTIONERNA */}
      <div className="container mx-auto px-4 pt-10">
        <div className="max-w-3xl space-y-14">
          {workshop.sektioner.map((sektion) => {
            const ton = TON[sektion.ton];
            return (
              <section key={sektion.id} id={sektion.id} className="scroll-mt-24">
                <div className={`rounded-3xl p-7 ${ton.band}`}>
                  <div
                    className={`mb-2 inline-flex rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${ton.chip}`}
                  >
                    Sektion {sektion.nummer}
                  </div>
                  <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900">
                    {sektion.titel}
                  </h2>
                  <p className="max-w-2xl leading-relaxed text-gray-700">
                    {sektion.intro}
                  </p>
                  {sektion.kommandeText && (
                    <p className="mt-4 rounded-xl border border-dashed border-gray-400 bg-white/70 p-3 text-sm leading-relaxed text-gray-600">
                      <strong>Under arbete. </strong>
                      {sektion.kommandeText}
                    </p>
                  )}
                </div>

                <div className="mt-6 space-y-6">
                  {sektion.stationer.map((station) => (
                    <StationKort
                      key={station.id}
                      station={station}
                      prick={ton.prick}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* AVSLUT */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border-2 border-teal-200 bg-teal-50/60 p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Att avsluta med
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Samma mening som föreläsningen slutar i, fast skriftligt och med en
            undervisningsidé bredvid: <em>det viktigaste mina elever behöver
            förstå om AI är …</em> — och sedan: <em>det första jag ska pröva är
            …</em> Sätt en tidsgräns på två veckor. Den som skriver ner ett
            datum gör det oftare.
          </p>
          <Link
            href="/ovningsbanken/spellista"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Bygg en spellista att ta med hem
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StationKort({
  station,
  prick,
}: {
  station: Station;
  prick: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-2.5">
          {station.bokstav && (
            <span
              className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${prick}`}
            >
              {station.bokstav}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900">{station.titel}</h3>
        </div>
        <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-gray-500">
          {station.tid}
        </span>
      </div>

      <p className="mb-3 leading-relaxed text-gray-700">{station.syfte}</p>

      {station.poang && (
        <p className="mb-4 border-l-2 border-gray-900 pl-3 font-medium italic text-gray-900">
          {station.poang}
        </p>
      )}

      <div className="space-y-2">
        {station.kor.map((r, i) => (
          <ReferensRad key={i} referens={r} primar />
        ))}
      </div>

      {station.alternativ && station.alternativ.length > 0 && (
        <div className="mt-5 border-t border-gray-100 pt-4">
          <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <Shuffle className="h-3.5 w-3.5" />
            Byt in eller fördjupa
          </div>
          <div className="space-y-2">
            {station.alternativ.map((r, i) => (
              <ReferensRad key={i} referens={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function ReferensRad({
  referens,
  primar = false,
}: {
  referens: Referens;
  primar?: boolean;
}) {
  const l = los(referens);
  const Inner = (
    <>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-semibold ${primar ? "text-gray-900" : "text-gray-700"}`}
          >
            {l.titel}
          </span>
          {l.meta && (
            <span className="shrink-0 text-xs text-gray-500">{l.meta}</span>
          )}
        </div>
        {l.beskrivning && (
          <p className="mt-0.5 text-sm leading-snug text-gray-600">
            {l.beskrivning}
          </p>
        )}
      </div>
      {l.externt ? (
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
      ) : (
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  const klass = `group flex items-start justify-between gap-4 rounded-xl border p-3.5 transition-all ${
    primar
      ? "border-gray-300 bg-gray-50/60 hover:border-teal-400 hover:bg-teal-50/40"
      : "border-gray-200 bg-white hover:border-gray-300"
  }`;

  if (l.externt) {
    return (
      <a
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        className={klass}
      >
        {Inner}
      </a>
    );
  }
  return (
    <Link href={l.href} className={klass}>
      {Inner}
    </Link>
  );
}
