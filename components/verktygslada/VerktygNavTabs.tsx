"use client";

import Link from "next/link";
import { Wrench, Library } from "lucide-react";

// Delas mellan /verktygslada och /aktiviteter så de känns som ett rum
// med två flikar. Ingen state — bara navigation via Link.
type Active = "verktyg" | "aktiviteter";

export function VerktygNavTabs({ active }: { active: Active }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex gap-1" aria-label="Verktygslåda — flikar">
          <TabLink
            href="/verktygslada"
            label="Verktyg"
            description="AI-tjänster & källkritikverktyg"
            icon={<Wrench className="h-4 w-4" />}
            isActive={active === "verktyg"}
          />
          <TabLink
            href="/aktiviteter"
            label="Aktiviteter"
            description="Klassrumsövningar att plocka från"
            icon={<Library className="h-4 w-4" />}
            isActive={active === "aktiviteter"}
          />
        </nav>
      </div>
    </div>
  );
}

function TabLink({
  href,
  label,
  description,
  icon,
  isActive,
}: {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative px-4 sm:px-5 py-3 transition-colors ${
        isActive
          ? "text-gray-900"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`grid h-7 w-7 place-items-center rounded-lg ${
            isActive
              ? "bg-primary-100 text-primary-700"
              : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
          }`}
        >
          {icon}
        </span>
        <div>
          <div className="text-sm font-semibold leading-tight">{label}</div>
          <div className="text-[11px] text-gray-500 leading-tight hidden sm:block">
            {description}
          </div>
        </div>
      </div>
      {isActive && (
        <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full" />
      )}
    </Link>
  );
}
