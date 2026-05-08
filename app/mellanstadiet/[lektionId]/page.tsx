import { notFound } from "next/navigation";
import {
  MELLANSTADIET_LESSONS,
  getLessonBySlug,
} from "@/lib/mellanstadiet-data";
import { LessonHero } from "@/components/mellanstadiet/LessonHero";
import { LessonFooter } from "@/components/mellanstadiet/LessonFooter";
import { Lektion1Content } from "@/components/mellanstadiet/lessons/Lektion1Content";
import { Lektion2Content } from "@/components/mellanstadiet/lessons/Lektion2Content";
import { Lektion3Content } from "@/components/mellanstadiet/lessons/Lektion3Content";
import { Lektion4Content } from "@/components/mellanstadiet/lessons/Lektion4Content";

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
      {lesson.id === "lektion-3" && <Lektion3Content lesson={lesson} />}
      {lesson.id === "lektion-4" && <Lektion4Content lesson={lesson} />}

      <LessonFooter
        lesson={lesson}
        cliffhanger={
          lesson.id === "lektion-1"
            ? "Imorgon: hur kan något som inte tänker ändå verka så smart?"
            : lesson.id === "lektion-2"
            ? "Imorgon: nu vet vi hur AI fungerar. Hur använder vi det utan att bli styrda av det?"
            : lesson.id === "lektion-3"
            ? "Imorgon: nu kan ni använda AI. Men hur ser ni när AI har fel? Hur vet ni vad som är sant?"
            : lesson.id === "lektion-4"
            ? "Nästa: nu vet vi att AI kan ha fel och kan användas för att fejka. Vem bestämmer? Vem tar ansvar? Det handlar om etik."
            : undefined
        }
      />
    </article>
  );
}
