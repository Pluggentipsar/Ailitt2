"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// Navigations-strukturen är gruppad i tre nivåer:
// - "flat": vanlig länk på toppnivå
// - "group": dropdown med undersidor
type NavLeaf = { href: string; label: string; description?: string };
type NavItem =
  | (NavLeaf & { kind: "flat" })
  | { kind: "group"; label: string; items: NavLeaf[] };

const NAV: NavItem[] = [
  { kind: "flat", href: "/", label: "Hem" },
  { kind: "flat", href: "/ovningsbanken", label: "Övningsbanken" },
  {
    kind: "group",
    label: "Stadier",
    items: [
      {
        href: "/grundskola",
        label: "Grundskola F-6",
        description: "Digitalt läromedel med sagor, filmer och aktiviteter",
      },
      {
        href: "/mellanstadiet",
        label: "Mellanstadiet 4-6",
        description: "Lektioner, AI-labbet och minispel",
      },
      {
        href: "/workshops/kallkritik-mellanstadiet",
        label: "Workshop: Källkritik",
        description: "8 kapitel om dark patterns, retorik och bias",
      },
      {
        href: "/amnen",
        label: "Gymnasiet — ämnen",
        description: "Moduler kopplade till Skolverkets kursplaner",
      },
    ],
  },
  {
    kind: "group",
    label: "Ramverk",
    items: [
      {
        href: "/ai-litteracitet",
        label: "AI-litteracitet",
        description: "Sju dimensioner — sidans didaktiska kompass",
      },
      {
        href: "/didaktiska-modeller",
        label: "Didaktiska modeller",
        description: "TPACK-AI, lärarens roll, perspektiv",
      },
      {
        href: "/eleverna-om-ai",
        label: "Eleverna & AI — metodbank",
        description: "Sju klassrumsmetoder + två lektioner från föreläsningen",
      },
    ],
  },
  { kind: "flat", href: "/verktygslada", label: "Verktyg" },
  { kind: "flat", href: "/bookmarks", label: "Sparat" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Stäng dropdown vid Escape och utanför-klick.
  // OBS: hooks måste alltid anropas i samma ordning — så den ligger HÄR,
  // före den eventuella early-return:en nedan, för att inte bryta Rules of Hooks
  // när användaren navigerar mellan workshop-rutter och resten av sajten.
  useEffect(() => {
    if (!openDropdown && !open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setOpen(false);
      }
    };

    const onClickOutside = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [openDropdown, open]);

  // Workshop-rutter har egen layout-shell — göm sajt-headern där.
  if (pathname?.startsWith("/workshops/")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group shrink-0">
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

        <nav
          ref={navRef}
          className="hidden items-center space-x-1 text-sm font-medium md:flex"
        >
          {NAV.map((item) => {
            if (item.kind === "flat") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-full text-gray-700 transition-colors hover:text-primary-600 hover:bg-primary-50/50"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openDropdown === item.label;
            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  className={`px-3 py-2 rounded-full inline-flex items-center gap-1 transition-colors ${
                    isOpen
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:text-primary-600 hover:bg-primary-50/50"
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden animate-fade-in-down"
                  >
                    <ul className="py-2">
                      {item.items.map((leaf) => (
                        <li key={leaf.href}>
                          <Link
                            href={leaf.href}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 hover:bg-primary-50/50 transition-colors"
                          >
                            <div className="font-semibold text-gray-900">
                              {leaf.label}
                            </div>
                            {leaf.description && (
                              <div className="text-xs text-gray-600 mt-0.5 leading-snug">
                                {leaf.description}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
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
          <div className="absolute inset-x-0 top-0 rounded-b-3xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
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
              {NAV.map((item) => {
                if (item.kind === "flat") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-3 text-base font-semibold text-slate-800 transition-colors hover:text-cyan-600"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const expanded = mobileExpanded === item.label;
                return (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      className="w-full py-2 flex items-center justify-between text-base font-semibold text-slate-800 hover:text-cyan-600"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : item.label)
                      }
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded && (
                      <ul className="mt-1 ml-2 border-l-2 border-cyan-200 pl-3 space-y-2 pb-2">
                        {item.items.map((leaf) => (
                          <li key={leaf.href}>
                            <Link
                              href={leaf.href}
                              onClick={() => setOpen(false)}
                              className="block py-1.5"
                            >
                              <div className="text-sm font-semibold text-slate-800 hover:text-cyan-600">
                                {leaf.label}
                              </div>
                              {leaf.description && (
                                <div className="text-xs text-slate-500 leading-snug">
                                  {leaf.description}
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
