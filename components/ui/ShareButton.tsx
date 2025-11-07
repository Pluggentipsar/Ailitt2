"use client";

import { Share2, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShareButtonProps {
  title: string;
  text?: string;
  url: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ShareButton({
  title,
  text,
  url,
  className,
  size = "md",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

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

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title,
      text: text || title,
      url: window.location.origin + url,
    };

    // Try Web Share API first (mobile devices)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled or failed:", error);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.origin + url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    }
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleShare}
            className={cn(
              "group inline-flex items-center justify-center rounded-full transition-all duration-200 relative",
              "hover:scale-110 active:scale-95",
              copied
                ? "text-green-600 bg-green-50 shadow-sm"
                : "text-gray-400 hover:text-cyan-600 hover:bg-cyan-50",
              sizeClasses[size],
              className
            )}
            aria-label="Dela"
          >
            {copied ? (
              <>
                <Check className={cn(iconSizes[size], "text-green-600")} />
                <div className="absolute inset-0 rounded-full bg-green-400 blur-lg opacity-20 transition-opacity" />
              </>
            ) : (
              <Share2 className={cn(iconSizes[size], "transition-transform group-hover:rotate-12")} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? "Kopierad!" : "Dela"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
