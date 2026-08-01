import React from "react";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import type { Metod } from "@/lib/eleverna-om-ai/data";
import { DomanBadge } from "./DomanBadge";
import { Kort } from "@/components/ui/Kort";

interface MetodKortProps {
  metod: Metod;
}

export function MetodKort({ metod }: MetodKortProps) {
  return (
    <Kort
      href={`/eleverna-om-ai/metod/${metod.slug}`}
      padding="luftig"
      accent="hover:border-teal-300"
      className="flex flex-col"
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-4xl font-bold leading-none text-teal-600/80 transition-colors group-hover:text-teal-600">
          {metod.nr}
        </span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-teal-700">
            {metod.titel}
          </h3>
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        {metod.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {metod.domaner.map((doman) => (
          <DomanBadge key={doman} doman={doman} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-100 pt-4 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-teal-500" />
          {metod.tid}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5 text-teal-500" />
          {metod.arskurser}
        </span>
        <ArrowRight className="ml-auto h-4 w-4 text-teal-600 transition-transform group-hover:translate-x-1" />
      </div>
    </Kort>
  );
}
