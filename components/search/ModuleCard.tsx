import Link from "next/link";
import { AiLiteracyBadgeList } from "@/components/ui/AiLiteracyBadge";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  url: string;
  subject: string;
  course: string;
  aiLiteracyIds: number[];
  time?: string;
  groupSize?: string;
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
}: ModuleCardProps) {
  return (
    <Link href={url}>
      <div className="group h-full rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md">
        <div className="mb-3">
          <p className="text-xs font-medium text-blue-600">
            {subject} · {course}
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

        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:underline">
          Läs mer
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
