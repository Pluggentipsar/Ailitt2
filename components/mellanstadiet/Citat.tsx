import { ReactNode } from "react";

interface CitatProps {
  children: ReactNode;
  attribution?: string;
  accentHex?: string;
}

/** Stort citat / kärnpåstående — feel-good, men inte snäll. */
export function Citat({
  children,
  attribution,
  accentHex = "#a5b4fc",
}: CitatProps) {
  return (
    <figure
      className="my-8 rounded-xl border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-8"
      style={{ borderLeft: `4px solid ${accentHex}` }}
    >
      <blockquote className="text-xl font-medium leading-relaxed text-[var(--ms-text)] sm:text-2xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="ms-mono mt-4 text-[var(--ms-text-muted)]">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
