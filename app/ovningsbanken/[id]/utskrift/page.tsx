import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Scissors } from "lucide-react";
import { ovningar, ovningarById } from "@/lib/ovningsbanken";
import { BlockRenderer } from "@/components/workshops/kallkritik/BlockRenderer";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";
import "./utskrift.css";

/**
 * Utdelningsmaterial för de övningar som kräver papper.
 *
 * Bara övningar med `utskrift` får en sida här. Det är avsiktligt smalt:
 * övriga övningar skrivs ut från själva övningssidan, och en tom
 * utskriftssida per övning hade bara varit brus i sitemapen.
 */

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return ovningar.filter((o) => o.utskrift).map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const ovning = ovningarById[id];
  if (!ovning?.utskrift) return {};
  return {
    title: `${ovning.utskrift.titel} · AI-övningsbanken`,
    description: ovning.utskrift.instruktion,
  };
}

export default async function UtskriftsSida({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const ovning = ovningarById[id];
  if (!ovning?.utskrift) notFound();
  const { titel, instruktion, blad } = ovning.utskrift;

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Skärmhuvud — försvinner i utskrift. */}
      <div className="print:hidden border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-3xl px-4 py-6">
          <Link
            href={`/ovningsbanken/${ovning.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Tillbaka till {ovning.titel}
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">{titel}</h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {instruktion}
          </p>
          <div className="mt-4">
            <PrintButton label={`Skriv ut ${blad.length} sidor`} />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4">
        {blad.map((b, i) => (
          <article key={b.id} className="utskrift-blad">
            <header className="mb-5 border-b-2 border-gray-900 pb-3">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-bold text-gray-900">{b.rubrik}</h2>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {ovning.titel}
                </span>
              </div>
              {b.underrubrik && (
                <p className="mt-1 text-base text-gray-700">{b.underrubrik}</p>
              )}
            </header>

            <BlockRenderer blocks={b.blocks} />

            {/* Klippmarkering mellan blad — bara på skärmen, i utskrift
                sköter sidbrytningen samma sak. */}
            {i < blad.length - 1 && (
              <div className="print:hidden mt-8 flex items-center gap-3 text-gray-400">
                <Scissors className="h-4 w-4 shrink-0" />
                <span className="h-px flex-1 border-t border-dashed border-gray-300" />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
