import {
  Clock,
  Users,
  AlertTriangle,
  WifiOff,
  Wifi,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import type { Activity } from "@/lib/workshops/kallkritik";
import { ageRangeLabels, levelLabels } from "@/lib/workshops/kallkritik";
import { chaptersById } from "@/lib/workshops/kallkritik/chapters";
import { PlaylistToggleButton } from "./PlaylistToggleButton";
import { Kort } from "@/components/ui/Kort";
import { TON_BAKGRUND } from "./toner";

const LEVEL_TONE: Record<string, string> = {
  "workshop-byggsten": "bg-stone-900 text-workshop-canvas",
  startovning: "bg-workshop-senap text-stone-900",
  fordjupande: "bg-workshop-lila text-workshop-canvas",
  "prova-pa": "bg-workshop-skog text-workshop-canvas",
};

export function ActivityCard({ activity }: { activity: Activity }) {
  const chapter = chaptersById[activity.chapter];

  return (
    <Kort
      variant="workshop"
      href={`/workshops/kallkritik-mellanstadiet/${activity.id}`}
      padding="ingen"
      fyllHojd={false}
      className="post-it--senap"
      data-chapter-tone={chapter.tone}
      style={{ background: TON_BAKGRUND[chapter.tone] }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="font-display text-3xl leading-none text-stone-900/80">
            {activity.number}
          </span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span
            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${LEVEL_TONE[activity.level]}`}
          >
            {levelLabels[activity.level]}
          </span>
          <div className="flex gap-1">
            {activity.evidenceStrength === "strong" && (
              <span
                className="grid h-6 w-6 place-items-center rounded-full bg-workshop-skog text-white"
                title="Stark forskningsförankring"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
            )}
            {activity.evidenceStrength === "moderate" && (
              <span
                className="grid h-6 w-6 place-items-center rounded-full bg-workshop-havsbla text-white"
                title="Måttlig forskningsförankring"
              >
                <BookOpen className="h-3.5 w-3.5" />
              </span>
            )}
            {activity.warning && (
              <span
                className="grid h-6 w-6 place-items-center rounded-full bg-workshop-terrakotta text-white"
                title="Kräver trygghetsregler"
              >
                <AlertTriangle className="h-3.5 w-3.5" />
              </span>
            )}
          </div>
        </div>
      </div>

      <h3 className="font-display text-2xl leading-tight text-stone-900 mb-1.5 group-hover:underline decoration-stone-900/40 decoration-2 underline-offset-2">
        {activity.title}
      </h3>

      <p className="text-sm text-stone-800/90 leading-snug mb-3 line-clamp-3">
        {activity.blurb}
      </p>

      <div className="flex items-end justify-between gap-2 mt-auto">
        <div className="flex flex-wrap gap-1.5 text-[11px] min-w-0">
          <span className="inline-flex items-center gap-1 bg-stone-900/10 px-2 py-0.5 rounded-full">
            <Clock className="h-3 w-3" />
            {activity.duration}
          </span>
          <span className="inline-flex items-center gap-1 bg-stone-900/10 px-2 py-0.5 rounded-full">
            <Users className="h-3 w-3" />
            {activity.ageRanges.map((a) => ageRangeLabels[a]).join(", ")}
          </span>
          <span className="inline-flex items-center gap-1 bg-stone-900/10 px-2 py-0.5 rounded-full">
            {activity.digitalTools ? (
              <Wifi className="h-3 w-3" />
            ) : (
              <WifiOff className="h-3 w-3" />
            )}
            {activity.digitalTools ? "Digitalt" : "Analogt"}
          </span>
        </div>
        <PlaylistToggleButton activityId={activity.id} />
      </div>
    </Kort>
  );
}
