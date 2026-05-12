"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "ms-theme";
type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.querySelector(".mellanstadiet-root");
  if (root) root.setAttribute("data-ms-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "light" ? "Byt till mörkt läge" : "Byt till ljust läge"
      }
      title={theme === "light" ? "Mörkt läge" : "Ljust läge"}
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border bg-[var(--ms-bg-card)] text-[var(--ms-text)] shadow-lg transition-all hover:scale-105 active:scale-95"
      style={{ borderColor: "var(--ms-border)" }}
    >
      {mounted && theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
