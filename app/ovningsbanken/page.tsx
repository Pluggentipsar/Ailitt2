import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Layers, ListMusic, Presentation } from "lucide-react";
import { ovningarById, ovningar, KURERADE_SPELLISTOR } from "@/lib/ovningsbanken";
import { BankExplorer } from "@/components/ovningsbanken/BankExplorer";

// De två sammanhållna program banken hämtar merparten av sitt innehåll ur.
// `kalla` matchar BankOvning.kalla så antalet räknas ut i stället för att
// hårdkodas — då kan det inte glida isär när banken växer.
const PROGRAM = [
  {
    kalla: "kallkritik" as const,
    namn: "Källkritik-sandlådan",
    beskrivning:
      "Workshop för mellanstadielärare i åtta kapitel — från flödet och hallucinationer till relationskritik och bias. Utöver övningarna finns dramaturgi för dagen, samtalskort, föräldraguide, trygghetsregler och ett promptbibliotek.",
    extra: "8 kapitel · resurser",
    href: "/workshops/kallkritik-mellanstadiet",
    knapp: "Öppna workshoppen",
    Ikon: Layers,
  },
  {
    kalla: "eleverna-om-ai" as const,
    namn: "Detta behöver eleverna veta om AI",
    beskrivning:
      "Föreläsningen med de sju metoderna, i den ordning de är tänkta att köras. Varje metod har sin egen sida med bakgrund, forskning och ett projicerbart klassrumsläge.",
    extra: "7 metoder · läsversion",
    href: "/eleverna-om-ai",
    knapp: "Öppna föreläsningen",
    Ikon: Presentation,
  },
];

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
            const href = `/ovningsbanken/spellista/${spellista.id}`;
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

      {/* VARIFRÅN ÖVNINGARNA KOMMER
          Två tredjedelar av banken är utdrag ur två sammanhållna program.
          Utan den här sektionen finns ingen väg tillbaka till helheten — och
          workshoppen har material som inte är övningar: dramaturgi,
          samtalskort, föräldraguide, promptbibliotek. */}
      <section className="container mx-auto px-4 pt-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-stone-900">
            Hela program
          </h2>
          <p className="mt-2 text-stone-600">
            Många av övningarna är utdrag ur två sammanhållna upplägg. Vill du
            köra hela vägen — med dramaturgi, resurser och färdig ordning —
            börjar du här.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {PROGRAM.map((program) => {
            const antal = ovningar.filter((o) => o.kalla === program.kalla)
              .length;
            return (
              <article
                key={program.href}
                className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-stone-700 to-stone-900 text-white shadow-md">
                  <program.Ikon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900">
                  {program.namn}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {program.beskrivning}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                  <span>
                    {antal} {antal === 1 ? "övning" : "övningar"} i banken
                  </span>
                  <span>{program.extra}</span>
                </div>
                <Link
                  href={program.href}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  {program.knapp}
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
