import React from "react";
import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export type MetaBadgeType = "time" | "group";

interface MetaBadgeProps {
  type: MetaBadgeType;
  value: string;
  className?: string;
}

export function MetaBadge({ type, value, className }: MetaBadgeProps) {
  const Icon = type === "time" ? Clock : Users;

  const iconColor = type === "time" ? "text-primary-600" : "text-accent-600";
  const bgGradient = type === "time"
    ? "from-primary-50 to-cyan-50"
    : "from-accent-50 to-purple-50";

  return (
    <div
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gradient-to-br px-3 py-1.5 text-sm text-gray-700 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 hover:border-gray-300",
        bgGradient,
        className
      )}
    >
      <Icon className={cn("h-3.5 w-3.5 transition-transform group-hover:scale-110", iconColor)} />
      <span className="font-medium">{value}</span>
    </div>
  );
}
