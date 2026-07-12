import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  KURERADE_SPELLISTOR,
  ovningarById,
  tillOversiktsOvning,
  type BankOvning,
  type KureradSpellista,
} from "@/lib/ovningsbanken";
import { SpellistaOversikt } from "@/components/ovningsbanken/SpellistaOversikt";

// Landningssida för en kurerad spellista: /ovningsbanken/spellista/<listaId>.
// Statisk syskonroute till query-runnern /ovningsbanken/spellista?steps=… —
// olika sökvägsdjup, så ingen ruttkrock.

type Params = { listaId: string };

const listorById: Record<string, KureradSpellista> = Object.fromEntries(
  KURERADE_SPELLISTOR.map((l) => [l.id, l])
);

export function generateStaticParams(): Params[] {
  return KURERADE_SPELLISTOR.map((l) => ({ listaId: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { listaId } = await params;
  const lista = listorById[listaId];
  if (!lista) return {};
  return {
    title: `${lista.namn} · AI-övningsbanken`,
    description: lista.beskrivning,
  };
}

export default async function KureradSpellistaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { listaId } = await params;
  const lista = listorById[listaId];
  if (!lista) notFound();

  const giltiga = lista.steg
    .map((id) => ovningarById[id])
    .filter((o): o is BankOvning => Boolean(o));

  // "Starta" går in i query-runnern med steps + namn förifyllda och &steg=1.
  const startHref = `/ovningsbanken/spellista?steps=${lista.steg.join(
    ","
  )}&namn=${encodeURIComponent(lista.namn)}&steg=1`;

  return (
    <SpellistaOversikt
      hero
      namn={lista.namn}
      beskrivning={lista.beskrivning}
      ovningar={giltiga.map(tillOversiktsOvning)}
      startHref={startHref}
      delningsPath={`/ovningsbanken/spellista/${lista.id}`}
    />
  );
}
