import type { Activity, ChapterId } from "../types";
import { evidenceLibrary } from "../evidence-library";
import { flodet } from "./flodet";
import { byggSjalv } from "./bygg-sjalv";
import { hallucinationer } from "./hallucinationer";
import { vannen } from "./vannen";
import { relationskritik } from "./relationskritik";
import { vaccinet } from "./vaccinet";

export const activities: Activity[] = [
  ...flodet,
  ...byggSjalv,
  ...hallucinationer,
  ...vannen,
  ...relationskritik,
  ...vaccinet,
];

export const activitiesById = Object.fromEntries(
  activities.map((a) => [a.id, a])
) as Record<string, Activity>;

export function activitiesByChapter(chapterId: ChapterId): Activity[] {
  return activities.filter((a) => a.chapter === chapterId);
}

export function searchableString(activity: Activity): string {
  // Evidens-blob: forskare och studietitel — så en sökning på "Wineburg"
  // eller "Anthropic" hittar de aktiviteter som faktiskt vilar på forskningen.
  const evidenceBlob = activity.evidenceSources
    ?.map((a) => {
      const e = evidenceLibrary[a.ref as keyof typeof evidenceLibrary];
      if (!e) return a.relevance;
      return `${e.authors} ${e.title} ${a.relevance}`;
    })
    .join(" ");

  // Plocka även ut text från innehållsblocken för att fritextsök på "prompt-text"
  // ska hitta rätt aktivitet.
  const blockText = (blocks: Activity["workshopExperience"]) => {
    if (!blocks) return "";
    return blocks
      .map((b) => {
        switch (b.type) {
          case "p":
            return b.text;
          case "h":
            return b.text;
          case "list":
            return b.items.join(" ");
          case "steps":
            return b.steps.map((s) => `${s.title ?? ""} ${s.body ?? ""}`).join(" ");
          case "example":
            return [b.label, b.user, b.ai, b.note].filter(Boolean).join(" ");
          case "quote":
            return b.text;
          case "callout":
            return `${b.title ?? ""} ${b.body}`;
          default:
            return "";
        }
      })
      .join(" ");
  };

  return [
    activity.title,
    activity.blurb,
    activity.purpose,
    activity.materials,
    activity.discussion?.join(" "),
    activity.pitfalls?.join(" "),
    activity.variations?.join(" "),
    activity.teacherNotes,
    evidenceBlob,
    activity.teacherModellingScript,
    blockText(activity.workshopExperience),
    blockText(activity.teacherGuide),
    blockText(activity.studentInstructions),
  ]
    .filter(Boolean)
    .join(" ");
}
