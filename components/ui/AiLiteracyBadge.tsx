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
        "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 shadow-sm",
        aspect.bgColor,
        "border-gray-200",
        onClick && "cursor-pointer hover:shadow-md hover:scale-105 hover:border-gray-300 active:scale-100",
        isActive && "ring-2 ring-offset-2 shadow-lg border-transparent",
        isActive && `ring-${aspect.color}-400`,
        !onClick && "cursor-default",
        className
      )}
    >
      <div className={cn(
        "h-2 w-2 rounded-full transition-transform",
        aspect.dotColor,
        onClick && "group-hover:scale-125",
        isActive && "scale-125 shadow-sm"
      )} />
      <span className="text-gray-800 font-semibold">{aspect.name}</span>
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
}

export function AiLiteracyBadgeList({
  ids,
  className,
  onBadgeClick,
  activeIds = [],
}: AiLiteracyBadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {ids.map((id) => (
        <AiLiteracyBadge
          key={id}
          id={id}
          onClick={onBadgeClick ? () => onBadgeClick(id) : undefined}
          isActive={activeIds.includes(id)}
        />
      ))}
    </div>
  );
}
