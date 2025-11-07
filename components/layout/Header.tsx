import Link from "next/link";
import Image from "next/image";

export function Header() {
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

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Hem
          </Link>
          <Link
            href="/ai-litteracitet"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            AI-litteracitet
          </Link>
          <Link
            href="/didaktiska-modeller"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Didaktiska modeller
          </Link>
          <Link
            href="/amnen"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Ämnen
          </Link>
          <Link
            href="/aktiviteter"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Aktiviteter
          </Link>
          <Link
            href="/bookmarks"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Bokmärken
          </Link>
          <Link
            href="/notes"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Anteckningar
          </Link>
          <Link
            href="/om"
            className="text-gray-700 transition-colors hover:text-primary-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-600 after:to-cyan-500 after:transition-all hover:after:w-full"
          >
            Om
          </Link>
        </nav>
      </div>
    </header>
  );
}
