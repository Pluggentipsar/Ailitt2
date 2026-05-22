"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, FlaskConical, Menu, Wrench, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { href: "/workshops/kallkritik-mellanstadiet", label: "Sandlådan" },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/dramaturgi",
    label: "Dramaturgi",
  },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/promptbibliotek",
    label: "Prompter",
  },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/trygghetsregler",
    label: "Trygghet",
  },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/samtalskort",
    label: "Samtalskort",
  },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/foraldraguide",
    label: "Föräldrar",
  },
  {
    href: "/workshops/kallkritik-mellanstadiet/resurser/kallor",
    label: "Källor",
  },
];

// Verktygslådan ligger utanför workshopen — egen länk så användaren förstår
// att hen lämnar sandlåde-shellet när hen klickar.
const EXTERNAL_NAV = [
  { href: "/verktygslada", label: "Verktygslåda", icon: Wrench },
];

export function WorkshopShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Interaktiva spel/upplevelser har egen full-screen-estetik och nollar shellet.
  if (pathname?.endsWith("/spel") || pathname?.includes("/spel/")) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen workshop-paper text-stone-900 font-sans">
      {/* Hashtape överst */}
      <div className="workshop-tape-bar" aria-hidden />

      <header className="sticky top-0 z-40 border-b border-stone-800/10 bg-workshop-canvas/80 backdrop-blur-md print:hidden">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/workshops/kallkritik-mellanstadiet"
              className="flex items-center gap-2 group"
            >
              <div className="grid h-9 w-9 place-items-center rounded-full bg-workshop-senap text-stone-900 shadow-sm rotate-[-4deg] group-hover:rotate-0 transition-transform">
                <FlaskConical className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl text-stone-900">
                  Källkritik-sandlådan
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500">
                  Workshop · mellanstadiet
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active =
                  item.href === pathname ||
                  (item.href !== "/workshops/kallkritik-mellanstadiet" &&
                    pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      active
                        ? "bg-stone-900 text-workshop-canvas"
                        : "text-stone-700 hover:bg-stone-200/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <span className="mx-1 text-stone-300" aria-hidden>
                |
              </span>
              {EXTERNAL_NAV.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-stone-300 text-stone-700 hover:bg-stone-200/60 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Tillbaka till sajten</span>
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden grid place-items-center h-9 w-9 rounded-full bg-stone-900 text-workshop-canvas"
                aria-label="Öppna meny"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden pb-4 grid grid-cols-2 gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg bg-stone-100 text-sm text-stone-800"
                >
                  {item.label}
                </Link>
              ))}
              {EXTERNAL_NAV.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="col-span-2 px-3 py-2 rounded-lg border border-stone-300 text-sm text-stone-700 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="col-span-2 px-3 py-2 rounded-lg border border-stone-300 text-sm text-stone-700 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Tillbaka till sajten
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="relative">{children}</main>

      <footer className="border-t border-stone-800/10 bg-stone-900 text-stone-300 print:hidden">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl text-workshop-canvas mb-2">
                Källkritik-sandlådan
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Workshop för mellanstadielärare om AI, källkritik och
                relationskritik. Plocka från sandlådan — sätt ihop din egen
                workshop.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-workshop-canvas mb-3">
                Resurser
              </h3>
              <ul className="space-y-1.5 text-sm">
                {NAV.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-stone-300 hover:text-workshop-senap transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-workshop-canvas mb-3">
                Tillbaka
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-stone-300 hover:text-workshop-senap transition-colors"
                  >
                    AI-litt hem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/grundskola"
                    className="text-stone-300 hover:text-workshop-senap transition-colors"
                  >
                    Grundskola
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-700 text-xs text-stone-500">
            © {new Date().getFullYear()} AI-litt · Workshop-sandlådan
          </div>
        </div>
      </footer>
    </div>
  );
}
