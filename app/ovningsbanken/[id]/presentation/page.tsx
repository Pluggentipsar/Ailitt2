import { notFound } from "next/navigation";
import { ovningar, ovningarById, DOMAN_META } from "@/lib/ovningsbanken";
import {
  PresentationEngine,
  type PresentationMode,
} from "@/components/workshops/kallkritik/PresentationView";
import { DOMAN_TON } from "@/components/ovningsbanken/meta";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return ovningar.map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const ovning = ovningarById[id];
  if (!ovning) return {};
  return {
    title: `${ovning.titel} · Storskärm`,
  };
}

export default async function OvningPresentationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const ovning = ovningarById[id];
  if (!ovning) notFound();

  // Storskärmen används framför allt av läraren som står i klassrummet och
  // instruerar eleverna — därför ligger elevinstruktionen först och blir
  // default. De andra två lägena finns kvar i växlaren: prova själv för
  // workshop med kollegor, lärarhandledningen som stöd på skärmen.
  const modes: PresentationMode[] = [];
  // Finns ett författat klassrumsspår har det företräde — det är gjort för
  // just projektorn, med egna slidegränser och lärarens ifyllningar.
  if (ovning.klassrum) {
    modes.push({
      label: "Klassrum",
      slides: ovning.klassrum,
      audience: "elev",
    });
  }
  if (ovning.elevinstruktion) {
    modes.push({
      label: "Elevinstruktion",
      blocks: ovning.elevinstruktion,
      audience: "elev",
    });
  }
  if (ovning.provaSjalv) {
    modes.push({ label: "Prova själv", blocks: ovning.provaSjalv });
  }
  if (ovning.lararhandledning) {
    modes.push({ label: "Lärarhandledning", blocks: ovning.lararhandledning });
  }

  const forstaDoman = ovning.domaner[0];
  const kicker =
    ovning.domaner.map((d) => DOMAN_META[d].namn).join(" · ") ||
    "AI-övningsbanken";

  return (
    <PresentationEngine
      closeHref={`/ovningsbanken/${ovning.id}`}
      tone={forstaDoman ? DOMAN_TON[forstaDoman] : "havsblå"}
      toolbar={{ kicker: "AI-övningsbanken", title: ovning.titel }}
      titleSlide={{
        kicker,
        title: ovning.titel,
        blurb: ovning.blurb,
      }}
      modes={modes}
      faltScope={ovning.id}
      finalCta={
        ovning.klassrumHref
          ? { label: "Öppna interaktivt läge", href: ovning.klassrumHref }
          : undefined
      }
    />
  );
}
