import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import type { Metod } from "@/lib/eleverna-om-ai/data";
import { DomanBadge } from "./DomanBadge";

interface MetodKortProps {
  metod: Metod;
}

export function MetodKort({ metod }: MetodKortProps) {
  return (
    <Link
      href={`/eleverna-om-ai/metod/${metod.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl"
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
    </Link>
  );
}
