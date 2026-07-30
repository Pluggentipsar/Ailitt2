import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Wifi,
  WifiOff,
  AlertTriangle,
  Sparkles,
  MessageCircleQuestion,
  AlertCircle,
  Shuffle,
  Monitor,
  MonitorPlay,
  Link2,
} from "lucide-react";
import { ovningar, ovningarById } from "@/lib/ovningsbanken";
import { ModeTabs } from "@/components/workshops/kallkritik/ModeTabs";
import { AddToPlaylistButton } from "@/components/workshops/kallkritik/AddToPlaylistButton";
import { EvidenceList } from "@/components/workshops/kallkritik/EvidenceList";
import { ExternalToolsList } from "@/components/workshops/kallkritik/ExternalToolsList";
import { DeepDiveAccordion } from "@/components/workshops/kallkritik/DeepDiveAccordion";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { KALLA_META } from "@/components/ovningsbanken/meta";

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
    title: `${ovning.titel} · AI-övningsbanken`,
    description: ovning.blurb,
  };
}

export default async function OvningPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const ovning = ovningarById[id];
  if (!ovning) notFound();

  const kalla = KALLA_META[ovning.kalla];
  const kedjar = (ovning.kedjarMed ?? [])
    .map((kid) => ovningarById[kid])
    .filter((o): o is NonNullable<typeof o> => Boolean(o));

  return (
    <article className="workshop-paper min-h-screen pb-20">
      {/* Brödsmula */}
      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/ovningsbanken"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till övningsbanken
        </Link>
      </div>

      {/* HEADER */}
      <header className="container mx-auto px-4 pb-6 pt-4">
        <div className="max-w-4xl">
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            {ovning.domaner.map((d) => (
              <DomanBadge key={d} doman={d} />
            ))}
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${kalla.chip}`}
            >
              {kalla.label}
            </span>
          </div>

          <h1 className="font-display text-4xl leading-[0.95] text-stone-900 sm:text-5xl lg:text-6xl">
            {ovning.titel}
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">
            {ovning.blurb}
          </p>
        </div>
      </header>

      {/* META + ÅTGÄRDER */}
      <div className="container mx-auto px-4 pb-6">
        <div className="grid max-w-5xl gap-4 lg:grid-cols-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-2">
            <MetaBox
              icon={<Clock className="h-4 w-4" />}
              label="Tid"
              value={ovning.tid}
            />
            <MetaBox
              icon={<Users className="h-4 w-4" />}
              label="Årskurser"
              value={ovning.arskurser}
            />
            <MetaBox
              icon={
                ovning.digitalaVerktyg ? (
                  <Wifi className="h-4 w-4" />
                ) : (
                  <WifiOff className="h-4 w-4" />
                )
              }
              label="Verktyg"
              value={ovning.digitalaVerktyg ? "Digitala" : "Analogt"}
            />
            <MetaBox
              icon={<Sparkles className="h-4 w-4" />}
              label="Material"
              value={ovning.material}
              clamp
            />
          </div>
          <div className="flex flex-wrap items-start gap-2 print:hidden lg:justify-end">
            <AddToPlaylistButton
              activityId={ovning.id}
              addLabel="Lägg till i spellista"
              activeLabel="I min spellista"
            />
            <Link
              href={`/ovningsbanken/${ovning.id}/presentation`}
              className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              <Monitor className="h-4 w-4" />
              Storskärmsläge
            </Link>
          </div>
        </div>

        {/* AI-litteracitetsdimensioner */}
        {ovning.aiLiteracyIds.length > 0 && (
          <div className="mt-4 max-w-5xl">
            <AiLiteracyBadgeList ids={ovning.aiLiteracyIds} />
          </div>
        )}
      </div>

      {/* SYFTE */}
      <div className="container mx-auto px-4 pb-6">
        <div className="max-w-4xl rounded-2xl border border-stone-200 bg-white/70 p-5">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
            Syfte
          </div>
          <p className="text-lg leading-relaxed text-stone-800">
            {ovning.syfte}
          </p>
        </div>
      </div>

      {/* VARNING — amber-ruta */}
      {ovning.varning && (
        <div className="container mx-auto px-4 pb-6">
          <div className="max-w-4xl rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <div className="mb-1 font-semibold text-amber-900">
                  Tänk på tryggheten
                </div>
                <p className="leading-relaxed text-amber-900">
                  {ovning.varning}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERAKTIVT KLASSRUMSLÄGE — teal CTA */}
      {ovning.klassrumHref && (
        <div className="container mx-auto px-4 pb-6">
          <Link
            href={ovning.klassrumHref}
            className="group flex max-w-4xl items-center gap-4 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-5 text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15">
              <MonitorPlay className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block text-lg font-semibold">
                Interaktivt klassrumsläge
              </span>
              <span className="block text-sm text-white/85">
                Den här övningen har en färdig projicerbar version — öppna och
                kör direkt.
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}

      {/* EXTERNA VERKTYG */}
      {ovning.externaVerktyg && ovning.externaVerktyg.length > 0 && (
        <div className="container mx-auto px-4 pb-6">
          <div className="max-w-4xl">
            <ExternalToolsList tools={ovning.externaVerktyg} />
          </div>
        </div>
      )}

      {/* TRE LÄGEN */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl">
          <ModeTabs
            workshopExperience={ovning.provaSjalv}
            teacherGuide={ovning.lararhandledning}
            studentInstructions={ovning.elevinstruktion}
            activityTitle={ovning.titel}
            faltScope={ovning.id}
          />
        </div>
      </div>

      {/* FÖRDJUPNING */}
      {ovning.deepDive && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <DeepDiveAccordion deepDive={ovning.deepDive} />
          </div>
        </div>
      )}

      {/* FORSKNINGSFÖRANKRING */}
      {ovning.evidens && ovning.evidens.length > 0 && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <EvidenceList sources={ovning.evidens} />
          </div>
        </div>
      )}

      {/* DISKUSSION + FALLGROPAR + VARIATIONER */}
      <div className="container mx-auto px-4">
        <div className="grid max-w-4xl gap-5 md:grid-cols-2">
          {ovning.diskussion && ovning.diskussion.length > 0 && (
            <ExtraBlock
              icon={<MessageCircleQuestion className="h-4 w-4" />}
              label="Diskussionsfrågor"
              accent="text-workshop-lila"
            >
              <ul className="space-y-2">
                {ovning.diskussion.map((q, i) => (
                  <li
                    key={i}
                    className="flex gap-2 leading-relaxed text-stone-800"
                  >
                    <span className="font-bold text-workshop-lila">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}

          {ovning.fallgropar && ovning.fallgropar.length > 0 && (
            <ExtraBlock
              icon={<AlertCircle className="h-4 w-4" />}
              label="Fallgropar"
              accent="text-workshop-terrakotta"
            >
              <ul className="space-y-2">
                {ovning.fallgropar.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-2 leading-relaxed text-stone-800"
                  >
                    <span className="font-bold text-workshop-terrakotta">
                      ⚠
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}

          {ovning.variationer && ovning.variationer.length > 0 && (
            <ExtraBlock
              icon={<Shuffle className="h-4 w-4" />}
              label="Variationer"
              accent="text-workshop-skog"
            >
              <ul className="space-y-2">
                {ovning.variationer.map((v, i) => (
                  <li
                    key={i}
                    className="flex gap-2 leading-relaxed text-stone-800"
                  >
                    <span className="font-bold text-workshop-skog">→</span>
                    {v}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}
        </div>
      </div>

      {/* KEDJAR BRA MED */}
      {kedjar.length > 0 && (
        <div className="container mx-auto mt-12 px-4">
          <div className="max-w-4xl">
            <div className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500">
              <Link2 className="h-4 w-4" />
              Kedjar bra med
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {kedjar.map((k) => (
                <Link
                  key={k.id}
                  href={`/ovningsbanken/${k.id}`}
                  className="group rounded-2xl border border-stone-200 bg-white/70 p-4 transition-colors hover:border-stone-400"
                >
                  <div className="font-semibold text-stone-900 group-hover:underline">
                    {k.titel}
                  </div>
                  <p className="mt-1 text-sm leading-snug text-stone-600">
                    {k.blurb}
                  </p>
                  <div className="mt-2 text-xs text-stone-500">{k.tid}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* KREDIT */}
      {ovning.kredit && (
        <div className="container mx-auto mt-10 px-4">
          <p className="max-w-4xl text-sm italic text-stone-500">
            {ovning.kredit}
          </p>
        </div>
      )}
    </article>
  );
}

function MetaBox({
  icon,
  label,
  value,
  clamp,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  clamp?: boolean;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
        {icon}
        {label}
      </div>
      <div
        className={`text-sm leading-snug text-stone-900 ${
          clamp ? "line-clamp-2" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function ExtraBlock({
  icon,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white/70 p-5">
      <div
        className={`mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${accent}`}
      >
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}
