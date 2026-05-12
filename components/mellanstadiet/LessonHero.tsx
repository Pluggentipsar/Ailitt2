import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Beaker } from "lucide-react";
import { MellanstadietLesson } from "@/lib/mellanstadiet-data";
import { getLessonHero } from "@/lib/mellanstadiet-images";

interface LessonHeroProps {
  lesson: MellanstadietLesson;
}

export function LessonHero({ lesson }: LessonHeroProps) {
  const heroUrl = getLessonHero(lesson.number);

  return (
    <section className="relative overflow-hidden border-b border-[var(--ms-border)] px-4 pt-12 pb-20">
      {/* Stort accent-tal som bakgrundsdetalj */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 right-0 select-none font-mono text-[28rem] font-black leading-none opacity-[0.04]"
        style={{ color: lesson.accentHex }}
      >
        {lesson.number.toString().padStart(2, "0")}
      </div>

      <div className="mx-auto max-w-5xl">
        <Link
          href="/mellanstadiet"
          className="ms-mono inline-flex items-center gap-1.5 text-[var(--ms-text-muted)] transition-colors hover:text-[var(--ms-text)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          KURSEN · 7 LEKTIONER
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <div
            className="rounded-md px-3 py-1.5 text-sm font-bold"
            style={{
              background: `${lesson.accentHex}20`,
              color: lesson.accentHex,
              border: `1px solid ${lesson.accentHex}40`,
            }}
          >
            LEKTION {lesson.number.toString().padStart(2, "0")}
          </div>
          <div className="ms-mono text-[var(--ms-text-muted)]">
            DIM {lesson.dimension} · {lesson.dimensionLabel.toUpperCase()}
          </div>
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--ms-text)] sm:text-6xl">
          {lesson.title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-[var(--ms-text-body)] sm:text-2xl">
          <em className="not-italic text-[var(--ms-text-muted)]">Kärnfråga:</em>{" "}
          {lesson.kernfraga}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--ms-text-muted)]">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {lesson.duration}
          </span>
          <span aria-hidden className="text-[var(--ms-border)]">•</span>
          <span className="flex items-center gap-1.5">
            <Beaker className="h-4 w-4" /> {lesson.interaktivt}
          </span>
        </div>

        {heroUrl && (
          <div
            className="relative mt-10 w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "21 / 9",
              boxShadow: `0 0 0 1px ${lesson.accentHex}40`,
            }}
          >
            <Image
              src={heroUrl}
              alt={`${lesson.title} — ${lesson.tagline}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
