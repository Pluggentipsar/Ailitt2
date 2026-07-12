import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ListMusic } from "lucide-react";
import { ovningarById, KURERADE_SPELLISTOR } from "@/lib/ovningsbanken";
import { BankExplorer } from "@/components/ovningsbanken/BankExplorer";

export const metadata: Metadata = {
  title: "AI-övningsbanken · AI-litt",
  description:
    "Övningar i tre lägen — prova själv, lärarhandledning, elevinstruktion — som du plockar ihop till spellistor och delar med kollegor och elever.",
};

export default function OvningsbankenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO — mörk gradient i sajtens stil */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              ÖVNINGSBANK
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              AI-
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(20,184,166,0.45)]">
                övningsbanken
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md">
              Övningar i tre lägen — prova själv, lärarhandledning,
              elevinstruktion — som du plockar ihop till spellistor och delar
              med kollegor och elever.
            </p>
          </div>
        </div>
      </section>

      {/* KURERADE SPELLISTOR */}
      <section className="container mx-auto px-4 pt-12 sm:pt-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-stone-900">
            Kurerade spellistor
          </h2>
          <p className="mt-2 text-stone-600">
            Färdiga sekvenser att köra rakt av — eller sno som startpunkt för
            din egen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {KURERADE_SPELLISTOR.map((spellista) => {
            const giltiga = spellista.steg.filter((id) => ovningarById[id]);
            const totalMin = giltiga.reduce(
              (sum, id) => sum + (ovningarById[id]?.tidMinuter ?? 0),
              0
            );
            const href = `/ovningsbanken/spellista?steps=${spellista.steg.join(
              ","
            )}&namn=${encodeURIComponent(spellista.namn)}`;
            return (
              <article
                key={spellista.id}
                className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
                  <ListMusic className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {spellista.namn}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {spellista.beskrivning}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                  <span>
                    {giltiga.length}{" "}
                    {giltiga.length === 1 ? "övning" : "övningar"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    ca {totalMin} min
                  </span>
                </div>
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  Öppna spellistan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* SÖK/FILTRERA ALLA ÖVNINGAR + MIN SPELLISTA-PANEL */}
      <BankExplorer />
    </div>
  );
}
