import { ArrowRight } from "lucide-react";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { cn } from "@/lib/utils";
import { Kort } from "@/components/ui/Kort";

interface ModuleCardProps {
  title: string;
  description: string;
  url: string;
  subject: string;
  course: string;
  aiLiteracyIds: number[];
  time?: string;
  groupSize?: string;
  featuredMedia?: {
    image?: string;
    gradient?: string;
    accent?: string;
  };
}

export function ModuleCard({
  title,
  description,
  url,
  subject,
  course,
  aiLiteracyIds,
  time,
  groupSize,
  featuredMedia,
}: ModuleCardProps) {
  const hasFeaturedMedia = Boolean(featuredMedia);

  return (
    <Kort
      href={url}
      accent="hover:border-blue-300"
      padding="ingen"
      className={cn(hasFeaturedMedia && "overflow-hidden border-transparent")}
    >
        {hasFeaturedMedia && featuredMedia ? (
          <>
            <div className="relative h-44">
              {featuredMedia.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredMedia.image})` }}
                />
              )}
              <div
                className="absolute inset-0 opacity-95"
                style={{
                  backgroundImage:
                    featuredMedia.gradient ??
                    "linear-gradient(135deg, rgba(20,184,166,0.92) 0%, rgba(6,182,212,0.9) 55%, rgba(15,118,110,0.9) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-gray-950/70 via-cyan-900/20 to-transparent p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {subject} - {course}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-white drop-shadow">
                  {title}
                </h3>
              </div>
            </div>

            <div className="flex h-full flex-col p-6">
              <p className="mb-4 text-sm text-gray-600 line-clamp-3">{description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {time && <MetaBadge type="time" value={time} />}
                {groupSize && <MetaBadge type="group" value={groupSize} />}
              </div>

              <AiLiteracyBadgeList ids={aiLiteracyIds} className="mb-4" />

              <div className="mt-auto flex items-center text-sm font-semibold text-cyan-700 group-hover:underline">
                Läs mer
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col p-6">
            <div className="mb-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                {subject} - {course}
              </p>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {title}
            </h3>

            <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {time && <MetaBadge type="time" value={time} />}
              {groupSize && <MetaBadge type="group" value={groupSize} />}
            </div>

            <AiLiteracyBadgeList ids={aiLiteracyIds} className="mb-4" />

            <div className="mt-auto flex items-center text-sm font-medium text-blue-600 group-hover:underline">
              Läs mer
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        )}
    </Kort>
  );
}
