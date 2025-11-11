import Link from "next/link";
import { cn } from "@/lib/utils";

type StepNavSide = {
  href: string;
  label?: string;
  title: string;
  description?: string;
};

interface ModuleStepNavProps {
  previous?: StepNavSide;
  next?: StepNavSide;
  className?: string;
}

export function ModuleStepNav({
  previous,
  next,
  className,
}: ModuleStepNavProps) {
  if (!previous && !next) return null;

  const items = [
    previous ? { ...previous, isPrev: true } : null,
    next ? { ...next, isPrev: false } : null,
  ].filter(Boolean) as Array<StepNavSide & { isPrev: boolean }>;

  return (
    <div className={cn("module-step-nav", className)}>
      <div className="module-step-nav__grid">
        {items.map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className={cn(
              "module-step-nav__card",
              item.isPrev ? "module-step-nav__card--prev" : "module-step-nav__card--next"
            )}
          >
            <div className="module-step-nav__card-body">
              <p className="module-step-nav__eyebrow">
                {item.label ?? (item.isPrev ? "Föregående del" : "Nästa del")}
              </p>
              <p className="module-step-nav__card-title">{item.title}</p>
              {item.description && (
                <p className="module-step-nav__card-description">
                  {item.description}
                </p>
              )}
            </div>
            <span
              className={cn(
                "module-step-nav__chevron",
                item.isPrev && "module-step-nav__chevron--prev"
              )}
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
