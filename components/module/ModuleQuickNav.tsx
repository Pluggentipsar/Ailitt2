import Link from "next/link";
import { cn } from "@/lib/utils";

export type ModuleNavId =
  | "overview"
  | "process"
  | "genres"
  | "language"
  | "assessment";

const MODULE_NAV_ITEMS: Array<{
  id: ModuleNavId;
  label: string;
  title: string;
  href: string;
}> = [
  {
    id: "overview",
    label: "Del 1–2",
    title: "Översikt & målbild",
    href: "/amnen/svenska/svenska-2/skriftlig-framstallning",
  },
  {
    id: "process",
    label: "Del 3",
    title: "AI i skrivprocessens faser",
    href: "/amnen/svenska/svenska-2/process",
  },
  {
    id: "genres",
    label: "Del 4–5",
    title: "Genrer – PM & argumentation",
    href: "/amnen/svenska/svenska-2/genrer",
  },
  {
    id: "language",
    label: "Del 6–8",
    title: "Språk, källor och respons",
    href: "/amnen/svenska/svenska-2/sprak-kallor",
  },
  {
    id: "assessment",
    label: "Del 9–11",
    title: "Bedömning och uppgifter",
    href: "/amnen/svenska/svenska-2/bedomning",
  },
];

interface ModuleQuickNavProps {
  current: ModuleNavId;
  className?: string;
}

export function ModuleQuickNav({
  current,
  className,
}: ModuleQuickNavProps) {
  return (
    <nav
      className={cn("module-quick-nav", className)}
      aria-label="Snabbnavigering modul 2"
    >
      <p className="module-quick-nav__label">
        Modul 2 · Skriftlig framställning
      </p>
      <div className="module-quick-nav__items">
        {MODULE_NAV_ITEMS.map((item) => {
          const isCurrent = item.id === current;

          if (isCurrent) {
            return (
              <div
                key={item.id}
                className="module-quick-nav__item is-current"
                aria-current="page"
              >
                <div>
                  <span className="module-quick-nav__badge">
                    {item.label}
                  </span>
                  <span className="module-quick-nav__title">
                    {item.title}
                  </span>
                </div>
                <span className="module-quick-nav__status">
                  Du är här
                </span>
              </div>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className="module-quick-nav__item"
            >
              <div>
                <span className="module-quick-nav__badge">
                  {item.label}
                </span>
                <span className="module-quick-nav__title">
                  {item.title}
                </span>
              </div>
              <span className="module-quick-nav__cta">Öppna →</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
