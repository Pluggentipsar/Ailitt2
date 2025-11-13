"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/ai-litteracitet", label: "AI-litteracitet" },
  { href: "/didaktiska-modeller", label: "Didaktiska modeller" },
  { href: "/amnen", label: "Ämnen" },
  { href: "/aktiviteter", label: "Aktiviteter" },
  { href: "/bookmarks", label: "Sparat" },
  { href: "/om", label: "Om" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Image
              src="/menu_icon.png"
              alt="AI-litt logo"
              width={24}
              height={24}
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
            AI-litt
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm hover:border-cyan-400 hover:text-cyan-600 md:hidden"
          onClick={() => setOpen(true)}
        >
          Meny
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 top-0 rounded-b-3xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">AI-litt</span>
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Stäng
              </button>
            </div>
            <div className="flex flex-col divide-y divide-slate-100">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-base font-semibold text-slate-800 transition-colors hover:text-cyan-600"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
