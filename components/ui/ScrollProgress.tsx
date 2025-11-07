"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-fixed h-1 bg-gray-100", className)}>
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-fast"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
