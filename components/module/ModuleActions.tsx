"use client";

import { BookmarkButton } from "@/components/ui/BookmarkButton";
import { ShareButton } from "@/components/ui/ShareButton";
import { Printer } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ModuleActionsProps {
  moduleId: string;
  title: string;
  url: string;
  description?: string;
  subject?: string;
  course?: string;
}

export function ModuleActions({
  moduleId,
  title,
  url,
  description,
  subject,
  course,
}: ModuleActionsProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-2">
      <BookmarkButton
        bookmark={{
          type: "module",
          moduleId,
          moduleTitle: title,
          moduleUrl: url,
          subject,
          course,
        }}
        size="md"
      />

      <ShareButton
        title={title}
        text={description}
        url={url}
        size="md"
      />

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handlePrint}
              className={cn(
                "inline-flex items-center justify-center rounded-full transition-all duration-base",
                "hover:bg-gray-100 active:scale-95",
                "text-gray-400 hover:text-gray-600",
                "h-10 w-10"
              )}
              aria-label="Skriv ut"
            >
              <Printer className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Skriv ut</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
