import { notFound } from "next/navigation";
import {
  MELLANSTADIET_LESSONS,
  getLessonBySlug,
} from "@/lib/mellanstadiet-data";
import { LessonHero } from "@/components/mellanstadiet/LessonHero";
import { LessonFooter } from "@/components/mellanstadiet/LessonFooter";
import { Lektion1Content } from "@/components/mellanstadiet/lessons/Lektion1Content";
import { Lektion2Content } from "@/components/mellanstadiet/lessons/Lektion2Content";

export function generateStaticParams() {
  return MELLANSTADIET_LESSONS.filter((l) => l.status === "ready").map((l) => ({
    lektionId: l.slug,
  }));
}

export default async function LektionPage({
  params,
}: {
  params: Promise<{ lektionId: string }>;
}) {
  const { lektionId } = await params;
  const lesson = getLessonBySlug(lektionId);
  if (!lesson || lesson.status !== "ready") {
    notFound();
  }

  return (
    <article>
      <LessonHero lesson={lesson} />

      {lesson.id === "lektion-1" && <Lektion1Content lesson={lesson} />}
      {lesson.id === "lektion-2" && <Lektion2Content lesson={lesson} />}

      <LessonFooter
        lesson={lesson}
        cliffhanger={
          lesson.id === "lektion-1"
            ? "Imorgon: hur kan något som inte tänker ändå verka så smart?"
            : lesson.id === "lektion-2"
            ? "Imorgon: nu vet vi hur AI fungerar. Hur använder vi det utan att bli styrda av det?"
            : undefined
        }
      />
    </article>
  );
}
