"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModuleQuickNavItem } from "@/components/module/ModuleQuickNav";
import { cn } from "@/lib/utils";

interface ModuleQuickNavMobileProps {
  heading: string;
  currentSlug: string;
  items: ModuleQuickNavItem[];
  className?: string;
}

export function ModuleQuickNavMobile({
  heading,
  currentSlug,
  items,
  className,
}: ModuleQuickNavMobileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={cn("md:hidden", className)}>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-800 shadow-sm"
        onClick={() => setOpen(true)}
      >
        <span className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Navigation
          </span>
          <span className="text-base">{heading}</span>
        </span>
        <span aria-hidden className="text-lg text-cyan-600">
          ?
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                {heading}
              </p>
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Stäng
              </button>
            </div>
            <div className="max-h-[70vh] space-y-3 overflow-y-auto">
              {items.map((item) => {
                const isCurrent = item.slug === currentSlug;
                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className={cn(
                      "block rounded-2xl border px-4 py-3 text-slate-800 no-underline",
                      isCurrent
                        ? "border-cyan-500 bg-cyan-50 font-semibold text-cyan-900"
                        : "border-slate-200 bg-slate-50"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-base font-semibold">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
