import React from "react";
import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export type MetaBadgeType = "time" | "group";
export type MetaBadgeVariant = "default" | "light";

interface MetaBadgeProps {
  type: MetaBadgeType;
  value: string;
  variant?: MetaBadgeVariant;
  className?: string;
}

export function MetaBadge({ type, value, variant = "default", className }: MetaBadgeProps) {
  const Icon = type === "time" ? Clock : Users;

  const iconColor = type === "time" ? "text-primary-600" : "text-accent-600";
  const iconColorLight = "text-white";

  const bgGradient = type === "time"
    ? "from-primary-50 to-cyan-50"
    : "from-accent-50 to-purple-50";

  const lightStyles = "bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:border-white/50";
  const defaultStyles = cn(
    "border-gray-200 bg-gradient-to-br text-gray-700 hover:border-gray-300",
    bgGradient
  );

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105",
        variant === "light" ? lightStyles : defaultStyles,
        className
      )}
    >
      <Icon className={cn(
        "h-3.5 w-3.5 transition-transform group-hover:scale-110",
        variant === "light" ? iconColorLight : iconColor
      )} />
      <span className="font-medium">{value}</span>
    </div>
  );
}
