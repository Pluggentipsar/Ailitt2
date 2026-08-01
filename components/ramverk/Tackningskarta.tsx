import Link from "next/link";
import { beraknaTackning } from "@/lib/tackning";
import {
  ARSKURSBAND_ORDNING,
  ARSKURSBAND_LABELS,
  DOMAN_ORDNING,
  DOMAN_META,
  DOMAN_FARG,
} from "@/lib/taxonomi";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";

/**
 * Täckningskarta — dimensionerna som karta i stället för filter.
 *
 * Serverkomponent med flit: siffrorna räknas ur hela sökindexet, och det
 * behöver inte följa med ner till klienten för en sida utan interaktion.
 */
export function Tackningskarta() {
  const tackning = beraknaTackning();
  const max = Math.max(
    ...tackning.flatMap((d) => ARSKURSBAND_ORDNING.map((s) => d.perStadium[s]))
  );

  const stadieSummor = ARSKURSBAND_ORDNING.map((s) => ({
    stadium: s,
    summa: tackning.reduce((n, d) => n + d.perStadium[s], 0),
  }));
  const tunnast = stadieSummor.reduce((a, b) => (b.summa < a.summa ? b : a));

  // Luckorna letas i HELA matrisen, inte bara i det tunnaste stadiet. Det är
  // inte samma sak: ett stadium kan ha lägst totalsumma och ändå ha något
  // överallt, medan ett annat har en dimension på noll. Det senare är det man
  // faktiskt vill få syn på.
  const luckorPerStadium = ARSKURSBAND_ORDNING.map((s) => ({
    stadium: s,
    dimensioner: tackning.filter((d) => d.perStadium[s] === 0),
  })).filter((x) => x.dimensioner.length > 0);

  return (
    <section id="tackning" className="mx-auto max-w-5xl scroll-mt-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          TÄCKNING
        </p>
        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Vad finns det material till?
        </h2>
        <p className="mt-4 text-gray-600">
          Dimensionerna är inte till för att välja torsdagens lektion — det gör
          du på startsidan, utifrån vad eleverna ska göra. Dimensionerna svarar
          på den andra frågan: vad har vi hunnit med, och var är det tunt?
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[38rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/80">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Dimension
              </th>
              {ARSKURSBAND_ORDNING.map((s) => (
                <th
                  key={s}
                  className="px-3 py-3 text-center font-semibold text-gray-700"
                >
                  {ARSKURSBAND_LABELS[s]}
                </th>
              ))}
              <th className="px-4 py-3 text-right font-semibold text-gray-700">
                Totalt
              </th>
            </tr>
          </thead>
          <tbody>
            {tackning.map((d) => {
              const aspekt = aiLiteracyConfig.find((a) => a.id === d.id);
              return (
                <tr
                  key={d.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/?dimension=${d.id}#search`}
                      className="group inline-flex items-center gap-2.5"
                    >
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${aspekt?.dotColor ?? ""}`}
                      />
                      <span className="font-medium text-gray-900 group-hover:underline">
                        {d.namn}
                      </span>
                    </Link>
                  </td>
                  {ARSKURSBAND_ORDNING.map((s) => {
                    const n = d.perStadium[s];
                    return (
                      <td key={s} className="px-3 py-3 text-center">
                        {n === 0 ? (
                          <span
                            className="inline-flex h-8 w-12 items-center justify-center rounded-md border border-dashed border-amber-300 bg-amber-50/60 text-xs font-semibold text-amber-700"
                            title="Ingen koppling ännu"
                          >
                            –
                          </span>
                        ) : (
                          <span
                            className="inline-flex h-8 w-12 items-center justify-center rounded-md font-semibold text-gray-900"
                            style={{
                              // Mättnaden speglar volym relativt tabellens
                              // största cell — inte en absolut skala.
                              backgroundColor: `rgba(20, 184, 166, ${
                                0.08 + (n / max) * 0.42
                              })`,
                            }}
                          >
                            {n}
                          </span>
                        )}
                      </td>
                    );
                  })}
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">
                    {d.totalt}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Vad kartan säger — räknat, inte skrivet för hand, så det följer med
          när innehåll läggs till. */}
      <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm leading-relaxed text-amber-900">
        {luckorPerStadium.length > 0 && (
          <p>
            <strong>Vita fläckar.</strong>{" "}
            {luckorPerStadium.map((x, i) => (
              <span key={x.stadium}>
                {i > 0 && " "}
                {ARSKURSBAND_LABELS[x.stadium]} saknar material helt för{" "}
                {x.dimensioner.map((d) => d.namn).join(", ")}.
              </span>
            ))}
          </p>
        )}
        <p className={luckorPerStadium.length > 0 ? "mt-2" : ""}>
          <strong>
            Minst material totalt: {ARSKURSBAND_LABELS[tunnast.stadium]}
          </strong>{" "}
          ({tunnast.summa} kopplingar). Sajten är byggd runt gymnasiet,
          mellanstadiet och F–6 — högstadiet når materialet mest via
          källkritikworkshopen.
        </p>
      </div>

      {/* Domänfördelning per dimension — visar vad materialet LUTAR åt. */}
      <div className="mt-8">
        <h3 className="mb-1 text-lg font-bold text-gray-900">
          Vad materialet lutar åt
        </h3>
        <p className="mb-4 text-sm text-gray-600">
          Samma innehåll sett genom navigationsfiltret. En dimension som bara
          tränas på ett sätt är en dimension eleverna möter ensidigt.
        </p>
        <div className="space-y-2.5">
          {tackning.map((d) => {
            const summa = DOMAN_ORDNING.reduce((n, x) => n + d.perDoman[x], 0);
            return (
              <div key={d.id} className="flex items-center gap-3">
                <span className="w-40 shrink-0 truncate text-sm text-gray-700">
                  {d.namn}
                </span>
                <div className="flex h-4 flex-1 overflow-hidden rounded-full bg-gray-100">
                  {summa === 0 ? null : (
                    DOMAN_ORDNING.map((x) =>
                      d.perDoman[x] === 0 ? null : (
                        <div
                          key={x}
                          style={{
                            width: `${(d.perDoman[x] / summa) * 100}%`,
                            backgroundColor: DOMAN_FARG[x],
                          }}
                          title={`${DOMAN_META[x].namn}: ${d.perDoman[x]}`}
                        />
                      )
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {DOMAN_ORDNING.map((x) => (
            <span
              key={x}
              className="inline-flex items-center gap-1.5 text-xs text-gray-600"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: DOMAN_FARG[x] }}
              />
              {DOMAN_META[x].namn}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
