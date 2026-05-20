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
  StickyNote,
  Monitor,
} from "lucide-react";
import {
  activities,
  activitiesById,
  ageRangeLabels,
  levelLabels,
  skillLabels,
  chaptersById,
} from "@/lib/workshops/kallkritik";
import { ModeTabs } from "@/components/workshops/kallkritik/ModeTabs";
import { PrintButton } from "@/components/workshops/kallkritik/PrintButton";
import { EvidenceList } from "@/components/workshops/kallkritik/EvidenceList";
import { ChainsWellWith } from "@/components/workshops/kallkritik/ChainsWellWith";
import { AddToPlaylistButton } from "@/components/workshops/kallkritik/AddToPlaylistButton";
import { DeepDiveAccordion } from "@/components/workshops/kallkritik/DeepDiveAccordion";
import { GameLauncher } from "@/components/workshops/kallkritik/GameLauncher";
import { IllustrationCarousel } from "@/components/workshops/kallkritik/IllustrationCarousel";
import { DarkPatternsExercise } from "@/components/workshops/kallkritik/DarkPatternsExercise";
import { ExternalToolsList } from "@/components/workshops/kallkritik/ExternalToolsList";

type Params = { activityId: string };

export function generateStaticParams(): Params[] {
  return activities.map((a) => ({ activityId: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { activityId } = await params;
  const activity = activitiesById[activityId];
  if (!activity) return {};
  return {
    title: `${activity.title} · Källkritik-sandlådan`,
    description: activity.blurb,
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { activityId } = await params;
  const activity = activitiesById[activityId];
  if (!activity) notFound();

  const chapter = chaptersById[activity.chapter];

  // Hitta föregående/nästa aktivitet inom samma kapitel.
  const chapterList = activities.filter((a) => a.chapter === activity.chapter);
  const currentIdx = chapterList.findIndex((a) => a.id === activity.id);
  const prev = currentIdx > 0 ? chapterList[currentIdx - 1] : null;
  const next =
    currentIdx < chapterList.length - 1 ? chapterList[currentIdx + 1] : null;

  return (
    <article data-chapter-tone={chapter.tone} className="pb-20">
      {/* Brödsmula */}
      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/workshops/kallkritik-mellanstadiet#sandladan"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till sandlådan
        </Link>
      </div>

      {/* HEADER */}
      <header className="container mx-auto px-4 pt-4 pb-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-wider">
            <Link
              href={`/workshops/kallkritik-mellanstadiet#sandladan`}
              className="px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: `var(--workshop-${chapter.tone === "havsblå" ? "havsblå" : chapter.tone})`,
                color: "white",
              }}
            >
              Kapitel {chapter.number} · {chapter.title}
            </Link>
            <span className="px-2.5 py-1 rounded-full bg-stone-900 text-workshop-canvas font-semibold">
              {levelLabels[activity.level]}
            </span>
          </div>

          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-display text-6xl text-stone-400/70 leading-none">
              {activity.number}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[0.95]">
              {activity.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl">
            {activity.blurb}
          </p>
        </div>
      </header>

      {/* META + ÅTGÄRDER */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-4 max-w-5xl">
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <MetaBox
              icon={<Clock className="h-4 w-4" />}
              label="Tid"
              value={activity.duration}
            />
            <MetaBox
              icon={<Users className="h-4 w-4" />}
              label="Målgrupp"
              value={activity.ageRanges
                .map((a) => ageRangeLabels[a])
                .join(", ")}
            />
            <MetaBox
              icon={
                activity.digitalTools ? (
                  <Wifi className="h-4 w-4" />
                ) : (
                  <WifiOff className="h-4 w-4" />
                )
              }
              label="Verktyg"
              value={activity.digitalTools ? "Digitala" : "Analogt"}
            />
            <MetaBox
              icon={<Sparkles className="h-4 w-4" />}
              label="Material"
              value={activity.materials}
              clamp
            />
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end items-start print:hidden">
            <AddToPlaylistButton activityId={activity.id} />
            <Link
              href={`/workshops/kallkritik-mellanstadiet/${activity.id}/presentation`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-stone-900 text-workshop-canvas text-sm font-semibold hover:bg-stone-800 transition-colors"
            >
              <Monitor className="h-4 w-4" />
              Storskärm
            </Link>
            <PrintButton />
          </div>
        </div>

        {/* Förmågor */}
        <div className="max-w-5xl mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Tränar:
          </span>
          {activity.trains.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-700"
            >
              {skillLabels[skill]}
            </span>
          ))}
        </div>
      </div>

      {/* SYFTE */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl bg-white/70 rounded-2xl p-5 border border-stone-200 print-avoid-break">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
            Syfte
          </div>
          <p className="text-lg leading-relaxed text-stone-800">
            {activity.purpose}
          </p>
        </div>
      </div>

      {/* EXTERNA VERKTYG/TJÄNSTER */}
      {activity.externalTools && activity.externalTools.length > 0 && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <ExternalToolsList tools={activity.externalTools} />
          </div>
        </div>
      )}

      {/* SPEL — bara för aktivitet 4.3 Fånga dark patterns */}
      {activity.id === "fanga-dark-patterns" && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <GameLauncher
              title="Dark Patterns i AI-chattbotar"
              blurb="Spela igenom fem scenarier där en AI-vän använder manipulationstekniker — och testa dina kunskaper i ett quiz. 15–20 min, perfekt för storskärm eller egen dator."
              duration="15–20 min"
              href="/workshops/kallkritik-mellanstadiet/fanga-dark-patterns/spel"
            />
          </div>
        </div>
      )}

      {/* VARNING (deepfake) */}
      {activity.warning && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl bg-workshop-terrakotta text-white rounded-2xl p-5 print-avoid-break">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-2xl mb-1">
                  Trygghetsregler gäller
                </div>
                <p className="!mb-2 leading-relaxed">{activity.warning}</p>
                <Link
                  href="/workshops/kallkritik-mellanstadiet/resurser/trygghetsregler"
                  className="inline-flex items-center gap-1 text-white underline underline-offset-2 hover:no-underline text-sm font-semibold"
                >
                  Läs hela listan
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HUVUDINNEHÅLL */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl">
          <ModeTabs
            workshopExperience={activity.workshopExperience}
            teacherGuide={activity.teacherGuide}
            studentInstructions={activity.studentInstructions}
            activityTitle={`${activity.number} ${activity.title}`}
          />
        </div>
      </div>

      {/* ILLUSTRATIONSKARUSELL — bara för 4.3 */}
      {activity.id === "fanga-dark-patterns" && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <IllustrationCarousel />
          </div>
        </div>
      )}

      {/* CHATBOTÖVNING — bara för 4.3 */}
      {activity.id === "fanga-dark-patterns" && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-5xl">
            <DarkPatternsExercise />
          </div>
        </div>
      )}

      {/* FÖRDJUPNING — accordion */}
      {activity.deepDive && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <DeepDiveAccordion deepDive={activity.deepDive} />
          </div>
        </div>
      )}

      {/* FORSKNINGSFÖRANKRING */}
      {activity.evidenceSources && activity.evidenceSources.length > 0 && (
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl">
            <EvidenceList
              sources={activity.evidenceSources}
              strength={activity.evidenceStrength}
            />
          </div>
        </div>
      )}

      {/* DISKUSSION + FALLGROPAR + VARIATIONER + ANTECKNINGAR */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl grid md:grid-cols-2 gap-5">
          {activity.discussion && activity.discussion.length > 0 && (
            <ExtraBlock
              icon={<MessageCircleQuestion className="h-4 w-4" />}
              label="Diskussionsfrågor"
              tone="lila"
            >
              <ul className="space-y-2">
                {activity.discussion.map((q, i) => (
                  <li
                    key={i}
                    className="leading-relaxed text-stone-800 flex gap-2"
                  >
                    <span className="text-workshop-lila font-bold">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}

          {activity.pitfalls && activity.pitfalls.length > 0 && (
            <ExtraBlock
              icon={<AlertCircle className="h-4 w-4" />}
              label="Fallgropar"
              tone="terrakotta"
            >
              <ul className="space-y-2">
                {activity.pitfalls.map((p, i) => (
                  <li
                    key={i}
                    className="leading-relaxed text-stone-800 flex gap-2"
                  >
                    <span className="text-workshop-terrakotta font-bold">⚠</span>
                    {p}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}

          {activity.variations && activity.variations.length > 0 && (
            <ExtraBlock
              icon={<Shuffle className="h-4 w-4" />}
              label="Variationer"
              tone="skog"
            >
              <ul className="space-y-2">
                {activity.variations.map((v, i) => (
                  <li
                    key={i}
                    className="leading-relaxed text-stone-800 flex gap-2"
                  >
                    <span className="text-workshop-skog font-bold">→</span>
                    {v}
                  </li>
                ))}
              </ul>
            </ExtraBlock>
          )}

          {activity.teacherNotes && (
            <ExtraBlock
              icon={<StickyNote className="h-4 w-4" />}
              label="Att tänka på som lärare"
              tone="senap"
            >
              <p className="leading-relaxed text-stone-800">
                {activity.teacherNotes}
              </p>
            </ExtraBlock>
          )}
        </div>
      </div>

      {/* CHAINS — föreslagna nästa aktiviteter */}
      {activity.chainsWellWith && activity.chainsWellWith.length > 0 && (
        <div className="container mx-auto px-4 mt-12 print:mt-6">
          <div className="max-w-4xl">
            <ChainsWellWith ids={activity.chainsWellWith} />
          </div>
        </div>
      )}

      {/* PREV/NEXT */}
      <div className="container mx-auto px-4 mt-12 print:hidden">
        <div className="max-w-4xl flex justify-between gap-4 flex-wrap">
          {prev ? (
            <Link
              href={`/workshops/kallkritik-mellanstadiet/${prev.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">
                <span className="text-xs text-stone-500 block leading-none">
                  Föregående
                </span>
                {prev.number} {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/workshops/kallkritik-mellanstadiet/${next.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-100"
            >
              <span className="text-sm text-right">
                <span className="text-xs text-stone-500 block leading-none">
                  Nästa
                </span>
                {next.number} {next.title}
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
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
    <div className="bg-white/70 border border-stone-200 rounded-xl p-3">
      <div className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1 mb-1">
        {icon}
        {label}
      </div>
      <div
        className={`text-sm text-stone-900 leading-snug ${
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
  tone,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  tone: "lila" | "terrakotta" | "skog" | "senap";
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white/70 border border-stone-200 rounded-2xl p-5 print-avoid-break">
      <div
        className={`text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5 text-workshop-${tone === "lila" ? "lila" : tone === "terrakotta" ? "terrakotta" : tone === "skog" ? "skog" : "senap"}`}
      >
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}
