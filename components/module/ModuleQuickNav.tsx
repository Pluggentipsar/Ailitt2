import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ModuleQuickNavItem {
  slug: string;
  label: string;
  title: string;
  href: string;
}

interface ModuleQuickNavProps {
  heading: string;
  currentSlug: string;
  items: ModuleQuickNavItem[];
  className?: string;
}

export function ModuleQuickNav({
  heading,
  currentSlug,
  items,
  className,
}: ModuleQuickNavProps) {
  if (!items.length) return null;

  return (
    <nav
      className={cn("module-quick-nav", className)}
      aria-label={heading}
    >
      <p className="module-quick-nav__label">{heading}</p>
      <div className="module-quick-nav__items">
        {items.map((item) => {
          const isCurrent = item.slug === currentSlug;

          if (isCurrent) {
            return (
              <div
                key={item.slug}
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
              key={item.slug}
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
