"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Workshop-rutter har egen layout-shell — göm sajt-footern där.
  if (pathname?.startsWith("/workshops/")) {
    return null;
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">AI-litt</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Färdiga lektioner, workshops och verktyg för AI-undervisning i hela skolan.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Stadier</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/grundskola"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Grundskola F-6
                </Link>
              </li>
              <li>
                <Link
                  href="/mellanstadiet"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Mellanstadiet 4-6
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops/kallkritik-mellanstadiet"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Workshop: Källkritik
                </Link>
              </li>
              <li>
                <Link
                  href="/amnen"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Gymnasiet — ämnen
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Ramverk</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ai-litteracitet"
                  className="text-gray-600 hover:text-primary-600"
                >
                  AI-litteracitet
                </Link>
              </li>
              <li>
                <Link
                  href="/didaktiska-modeller"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Didaktiska modeller
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Verktyg</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/verktygslada"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Verktygslådan
                </Link>
              </li>
              <li>
                <Link
                  href="/aktiviteter"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Aktiviteter
                </Link>
              </li>
              <li>
                <Link
                  href="/bookmarks"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Mina sparade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AI-litt. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
