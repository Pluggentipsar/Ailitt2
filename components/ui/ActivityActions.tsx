"use client";

import { BookmarkButton } from "./BookmarkButton";
import { ShareButton } from "./ShareButton";
import { NotesButton } from "./NotesButton";
import { Printer } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { cn } from "@/lib/utils";
import { Bookmark } from "@/lib/bookmark-types";

interface ActivityActionsProps {
  bookmark: Omit<Bookmark, "id" | "createdAt">;
  activityId: string;
  title: string;
  url: string;
  size?: "sm" | "md";
  className?: string;
}

export function ActivityActions({
  bookmark,
  activityId,
  title,
  url,
  size = "sm",
  className,
}: ActivityActionsProps) {
  const handlePrintActivity = () => {
    // Store the activity ID in sessionStorage for print styling
    sessionStorage.setItem("print-activity", activityId);
    window.print();
    sessionStorage.removeItem("print-activity");
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
  };

  return (
    <div className={cn("inline-flex items-center gap-1 no-print", className)}>
      <BookmarkButton bookmark={bookmark} size={size} />

      <NotesButton
        note={{
          type: "activity",
          moduleId: bookmark.moduleId,
          moduleTitle: bookmark.moduleTitle,
          moduleUrl: bookmark.moduleUrl,
          activityId,
          activityTitle: title,
          subject: bookmark.subject,
          course: bookmark.course,
        }}
        size={size}
      />

      <ShareButton
        title={title}
        url={`${url}#${activityId}`}
        size={size}
      />

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handlePrintActivity}
              className={cn(
                "group inline-flex items-center justify-center rounded-full transition-all duration-200",
                "hover:scale-110 active:scale-95",
                "text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                sizeClasses[size]
              )}
              aria-label="Skriv ut lektion"
            >
              <Printer className={cn(iconSizes[size], "transition-transform group-hover:-rotate-12")} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Skriv ut lektion</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
