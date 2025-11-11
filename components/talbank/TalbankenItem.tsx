"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TalbankenItemProps {
  number: number;
  title: string;
  typeLabel: string;
  aiLabel: string;
  children: ReactNode;
}

export function TalbankenItem({
  number,
  title,
  typeLabel,
  aiLabel,
  children,
}: TalbankenItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const numberLabel = number.toString().padStart(2, "0");

  return (
    <div className={cn("talbanken-item", isOpen && "talbanken-item-open")}>
      <button
        type="button"
        className="talbanken-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`talbanken-item-${number}`}
      >
        <span className="talbanken-number">{numberLabel}</span>
        <div className="talbanken-header">
          <p className="talbanken-heading">{title}</p>
          <p className="talbanken-meta">
            <span>
              Typ: <strong>{typeLabel}</strong>
            </span>
            <span>
              AI-litteracitet: <strong>{aiLabel}</strong>
            </span>
          </p>
        </div>
        <ChevronDown
          className={cn(
            "talbanken-icon",
            isOpen && "rotate-180 text-cyan-600"
          )}
        />
      </button>

      {isOpen && (
        <div id={`talbanken-item-${number}`} className="talbanken-body">
          {children}
        </div>
      )}
    </div>
  );
}
