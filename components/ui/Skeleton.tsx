import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:1000px_100%] rounded",
        className
      )}
      {...props}
    />
  );
}

// Card skeleton för loading state
export function SearchResultCardSkeleton() {
  return (
    <div className="h-full rounded-lg border border-gray-200 bg-white p-6">
      {/* Subject & Course */}
      <div className="mb-3 flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <span className="text-gray-400">·</span>
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Title */}
      <Skeleton className="mb-2 h-6 w-3/4" />

      {/* Description */}
      <div className="mb-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* Metadata badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-24" />
      </div>

      {/* AI Literacy badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Skeleton className="h-8 w-28 rounded-full" />
        <Skeleton className="h-8 w-32 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>

      {/* Read more link */}
      <Skeleton className="h-5 w-20" />
    </div>
  );
}

// Content skeleton för module pages
export function ContentSkeleton() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <Skeleton className="h-8 w-2/3" />

      {/* Paragraphs */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* Heading */}
      <Skeleton className="mt-8 h-7 w-1/2" />

      {/* Paragraphs */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
