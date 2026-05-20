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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">AI-litt</h3>
            <p className="text-sm text-gray-600">
              Didaktik för AI-litteracitet i gymnasiet
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Resurser</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/amnen"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Ämnen
                </Link>
              </li>
              <li>
                <Link
                  href="/aktiviteter"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Aktiviteter
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/om" className="text-gray-600 hover:text-blue-600">
                  Om AI-litt
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">
              Bidra
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/aktiviteter/skicka-in"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Skicka in aktivitet
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
