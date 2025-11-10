import React from "react";
import { getAiLiteracyAspect } from "@/lib/aiLiteracyConfig";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AiLiteracyBadgeProps {
  id: number;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  showTooltip?: boolean;
}

export function AiLiteracyBadge({
  id,
  className,
  onClick,
  isActive = false,
  showTooltip = true,
}: AiLiteracyBadgeProps) {
  const aspect = getAiLiteracyAspect(id);

  if (!aspect) {
    return null;
  }

  const BadgeButton = (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "group relative inline-flex items-center gap-2.5 rounded-full border border-white/50 px-4 py-2 text-sm font-medium transition-all duration-200",
        "bg-gradient-to-br shadow-sm",
        aspect.gradient,
        "backdrop-blur-sm",
        onClick && "cursor-pointer hover:shadow-lg hover:scale-105 active:scale-100",
        isActive && "ring-2 ring-offset-2 shadow-xl border-white",
        isActive && aspect.ringColor,
        !onClick && "cursor-default",
        className
      )}
    >
      {/* Glowing dot */}
      <div className="relative">
        <div className={cn(
          "h-2.5 w-2.5 rounded-full bg-gradient-to-br transition-all duration-200",
          aspect.dotColor,
          onClick && "group-hover:scale-125 group-hover:shadow-md",
          isActive && "scale-125"
        )} />
        {/* Glow effect */}
        <div className={cn(
          "absolute inset-0 h-2.5 w-2.5 rounded-full bg-gradient-to-br blur-sm opacity-50 transition-all duration-200",
          aspect.dotColor,
          onClick && "group-hover:opacity-75 group-hover:blur-md",
          isActive && "opacity-75 blur-md"
        )} />
      </div>
      <span className="text-gray-800 font-semibold relative z-10">{aspect.name}</span>
    </button>
  );

  if (!showTooltip) {
    return BadgeButton;
  }

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{BadgeButton}</TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-semibold">{aspect.name}</p>
          <p className="text-xs text-gray-600">{aspect.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface AiLiteracyBadgeListProps {
  ids: number[];
  className?: string;
  onBadgeClick?: (id: number) => void;
  activeIds?: number[];
  showTooltip?: boolean;
}

export function AiLiteracyBadgeList({
  ids,
  className,
  onBadgeClick,
  activeIds = [],
  showTooltip = true,
}: AiLiteracyBadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {ids.map((id) => (
        <AiLiteracyBadge
          key={id}
          id={id}
          onClick={onBadgeClick ? () => onBadgeClick(id) : undefined}
          isActive={activeIds.includes(id)}
          showTooltip={showTooltip}
        />
      ))}
    </div>
  );
}
