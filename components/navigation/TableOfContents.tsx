"use client";

import { useEffect, useState } from "react";
import { TOCHeading } from "@/lib/toc-utils";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: TOCHeading[];
  className?: string;
}

export function TableOfContents({
  headings,
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Scroll spy: observe which heading is currently in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px", // Trigger when heading is near top
        threshold: 1.0,
      }
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to heading with offset for fixed header
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Update URL without jumping
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn("space-y-1 sticky top-24", className)} aria-label="Innehållsförteckning">
      <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-gray-900 flex items-center gap-2">
          <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          På denna sida
        </p>
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={cn(
                  "group block py-1.5 px-3 -mx-3 text-gray-600 transition-all duration-200 hover:text-primary-600 rounded-lg",
                  "border-l-2 relative",
                  activeId === heading.id
                    ? "border-primary-600 text-primary-600 font-medium bg-primary-50"
                    : "border-transparent hover:bg-gray-50 hover:border-primary-300"
                )}
              >
                <span className="relative">
                  {heading.text}
                  {activeId === heading.id && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-gradient-to-b from-primary-500 to-cyan-500 rounded-full" />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
