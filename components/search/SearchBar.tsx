"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Sök efter moduler, aktiviteter...",
  className,
}: SearchBarProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-gray-200 bg-white py-4 pl-12 pr-4 text-base text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10"
      />
      {/* Gradient underline on focus */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
    </div>
  );
}
