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

interface SectionActionsProps {
  bookmark: Omit<Bookmark, "id" | "createdAt">;
  sectionId: string;
  title: string;
  url: string;
  size?: "sm" | "md";
  className?: string;
}

export function SectionActions({
  bookmark,
  sectionId,
  title,
  url,
  size = "sm",
  className,
}: SectionActionsProps) {
  const handlePrintSection = () => {
    // Store the section ID in sessionStorage for print styling
    sessionStorage.setItem("print-section", sectionId);
    window.print();
    sessionStorage.removeItem("print-section");
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
          type: "section",
          moduleId: bookmark.moduleId,
          moduleTitle: bookmark.moduleTitle,
          moduleUrl: bookmark.moduleUrl,
          sectionId,
          sectionTitle: title,
          subject: bookmark.subject,
          course: bookmark.course,
        }}
        size={size}
      />

      <ShareButton
        title={title}
        url={`${url}#${sectionId}`}
        size={size}
      />

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handlePrintSection}
              className={cn(
                "group inline-flex items-center justify-center rounded-full transition-all duration-200",
                "hover:scale-110 active:scale-95",
                "text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                sizeClasses[size]
              )}
              aria-label="Skriv ut sektion"
            >
              <Printer className={cn(iconSizes[size], "transition-transform group-hover:-rotate-12")} />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Skriv ut sektion</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
