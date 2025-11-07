"use client";

import { TOCHeading } from "@/lib/toc-utils";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { List } from "lucide-react";
import { useState } from "react";

interface MobileTOCDrawerProps {
  headings: TOCHeading[];
}

export function MobileTOCDrawer({ headings }: MobileTOCDrawerProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to heading with offset for fixed header
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Update URL without jumping
      window.history.pushState(null, "", `#${id}`);

      // Close drawer after clicking
      setOpen(false);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-fixed rounded-full bg-primary-600 p-4 text-white shadow-3 transition-all duration-base hover:bg-primary-700 hover:scale-105 hover:shadow-4 lg:hidden"
          aria-label="Öppna innehållsförteckning"
        >
          <List className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Innehållsförteckning</SheetTitle>
        </SheetHeader>
        <nav className="mt-6" aria-label="Innehållsförteckning">
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={cn(
                    "block py-2 text-gray-700 transition-colors duration-base hover:text-primary-600",
                    "border-l-2 pl-3 -ml-px border-transparent hover:border-primary-300"
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
