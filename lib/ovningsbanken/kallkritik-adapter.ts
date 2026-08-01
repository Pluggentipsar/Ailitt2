// Adapter: källkritik-workshopens aktiviteter → bankens BankOvning.
// Källkritik-övningarna ägs och underhålls i lib/workshops/kallkritik/ —
// banken läser dem via den här adaptern så att innehållet bara finns på
// ETT ställe. Id:n behålls oförändrade så att spellistor och kedjarMed
// kan peka rakt in i källkritik-materialet.

import type {
  Activity,
  AgeRange,
  ChapterId,
} from "@/lib/workshops/kallkritik/types";
import { ageRangeLabels } from "@/lib/workshops/kallkritik/types";
import { activities } from "@/lib/workshops/kallkritik/activities";
import { chaptersById } from "@/lib/workshops/kallkritik/chapters";
import type { BankOvning } from "./types";

// Sajtens sju AI-litteracitetsdimensioner (0–6) per kapitel — driver
// AiLiteracyBadge och korskopplingen mot dimensionssidorna.
const AILIT_PER_KAPITEL: Record<ChapterId, number[]> = {
  flodet: [4],
  bias: [3, 4],
  vannen: [4, 5],
  relationskritik: [4, 5],
  hallucinationer: [1, 4],
  "bygg-sjalv": [2, 4],
  vaccinet: [4],
  "retoriska-knep": [4],
};

// Kanonisk ordning så att "Åk 4–6 · Åk 7–9 · Vuxenworkshop" alltid läses
// stigande, oavsett i vilken ordning källdatat råkar lista målgrupperna.
const ARSKURS_ORDNING: AgeRange[] = [
  "ak4-6",
  "ak7-9",
  "gymnasium",
  "vuxen-workshop",
];

// Högstadieövningarna bär uppåt: en aktivitet som funkar för åk 7–9 funkar
// i praktiken även på gymnasiet. Vi taggar det HÄR i adaptern — bankens
// presentationslager — i stället för i källdatan, så att källkritik-
// workshopens egna vyer och åldersfilter inte påverkas.
function medGymnasium(ranges: AgeRange[]): AgeRange[] {
  if (ranges.includes("ak7-9") && !ranges.includes("gymnasium")) {
    return [...ranges, "gymnasium"];
  }
  return ranges;
}

function formateraArskurser(ranges: AgeRange[]): string {
  return [...medGymnasium(ranges)]
    .sort((a, b) => ARSKURS_ORDNING.indexOf(a) - ARSKURS_ORDNING.indexOf(b))
    .map((r) => ageRangeLabels[r])
    .join(" · ");
}

export function tillBankOvning(a: Activity): BankOvning {
  return {
    id: a.id,
    titel: a.title,
    blurb: a.blurb,
    syfte: a.purpose,

    domaner: chaptersById[a.chapter].domaner,
    aiLiteracyIds: AILIT_PER_KAPITEL[a.chapter],

    tid: a.duration,
    tidMinuter: a.durationMinutes,
    arskurser: formateraArskurser(a.ageRanges),
    digitalaVerktyg: a.digitalTools,
    material: a.materials,
    varning: a.warning,

    provaSjalv: a.workshopExperience,
    lararhandledning: a.teacherGuide,
    elevinstruktion: a.studentInstructions,
    klassrum: a.klassrum,

    diskussion: a.discussion,
    fallgropar: a.pitfalls,
    variationer: a.variations,
    deepDive: a.deepDive,
    evidens: a.evidenceSources,
    externaVerktyg: a.externalTools,
    kedjarMed: a.chainsWellWith,

    kalla: "kallkritik",
    kredit: "Ur källkritik-workshopen",
  };
}

export const kallkritikOvningar: BankOvning[] = activities.map(tillBankOvning);
