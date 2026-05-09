import { ReactNode } from "react";
import { getNextSection } from "@/lib/mellanstadiet-sections";
import { NextSectionButton } from "./NextSectionButton";

interface SektionProps {
  id: string;
  step: string;
  title: string;
  duration?: string;
  intro?: string;
  accentHex: string;
  children: ReactNode;
}

export function Sektion({
  id,
  step,
  title,
  duration,
  intro,
  accentHex,
  children,
}: SektionProps) {
  const next = getNextSection(id);

  return (
    <section id={id} className="border-t border-[#243248] py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 flex items-center gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg font-mono text-2xl font-bold text-[#0a0e1a]"
            style={{ background: accentHex }}
            aria-hidden
          >
            {step}
          </div>
          <div>
            <div className="ms-mono text-[#94a3b8]">STEG {step}</div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            {duration && (
              <div className="ms-mono mt-1 text-[#64748b]">{duration}</div>
            )}
          </div>
        </div>

        {intro && (
          <p className="mb-6 text-lg leading-relaxed text-[#cbd5e1]">{intro}</p>
        )}

        <div className="ms-prose">{children}</div>

        {next && (
          <NextSectionButton
            next={next}
            accentHex={accentHex}
          />
        )}
      </div>
    </section>
  );
}
