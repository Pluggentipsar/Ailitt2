"use client";

import { Bookmark as BookmarkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bookmark, BookmarkType } from "@/lib/bookmark-types";
import { useBookmarks } from "@/hooks/useBookmarks";

interface BookmarkButtonProps {
  bookmark: Omit<Bookmark, "id" | "createdAt">;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BookmarkButton({
  bookmark,
  className,
  size = "md",
}: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const bookmarked = isBookmarked(
    bookmark.type,
    bookmark.moduleId,
    bookmark.sectionId,
    bookmark.activityId
  );

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const getTooltipText = () => {
    if (bookmarked) return "Ta bort bokmärke";
    switch (bookmark.type) {
      case "module":
        return "Bokmärk modul";
      case "section":
        return "Bokmärk sektion";
      case "activity":
        return "Bokmärk lektion";
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleBookmark(bookmark);
            }}
            className={cn(
              "group inline-flex items-center justify-center rounded-full transition-all duration-200 relative",
              "hover:scale-110 active:scale-95",
              bookmarked
                ? "text-accent-600 hover:text-accent-700 bg-accent-50 hover:bg-accent-100 shadow-sm hover:shadow-md"
                : "text-gray-400 hover:text-primary-600 hover:bg-primary-50",
              sizeClasses[size],
              className
            )}
            aria-label={getTooltipText()}
          >
            <BookmarkIcon
              className={cn(
                iconSizes[size],
                "transition-all duration-200",
                bookmarked && "fill-current drop-shadow-sm"
              )}
            />
            {bookmarked && (
              <div className="absolute inset-0 rounded-full bg-accent-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getTooltipText()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
