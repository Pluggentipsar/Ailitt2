import React from "react";
import { DOMANER, type OecdDomain } from "@/lib/eleverna-om-ai/data";
import { cn } from "@/lib/utils";

// Statiska färgklasser per domän — Tailwind purgar dynamiskt byggda klassnamn,
// så varje domän har sin fullständiga klasssträng här.
const FARGKLASSER: Record<OecdDomain, { pill: string; prick: string }> = {
  mota: {
    pill: "border-teal-200 bg-teal-50 text-teal-800",
    prick: "bg-teal-500",
  },
  skapa: {
    pill: "border-purple-200 bg-purple-50 text-purple-800",
    prick: "bg-purple-500",
  },
  styra: {
    pill: "border-blue-200 bg-blue-50 text-blue-800",
    prick: "bg-blue-500",
  },
  forma: {
    pill: "border-orange-200 bg-orange-50 text-orange-800",
    prick: "bg-orange-500",
  },
};

interface DomanBadgeProps {
  doman: OecdDomain;
  className?: string;
}

export function DomanBadge({ doman, className }: DomanBadgeProps) {
  const info = DOMANER[doman];
  const farg = FARGKLASSER[doman];

  return (
    <span
      title={info.beskrivning}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        farg.pill,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", farg.prick)} />
      {info.namn}
    </span>
  );
}
