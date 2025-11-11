import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TalbankenStat = {
  value: string;
  label: string;
};

interface TalbankenBoardProps {
  intro: string[];
  stats: TalbankenStat[];
  children: ReactNode;
}

export function TalbankenBoard({ intro, stats, children }: TalbankenBoardProps) {
  return (
    <div className="talbanken-board">
      <div className="talbanken-intro">
        <div className="talbanken-copy">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="talbanken-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="talbanken-grid">{children}</div>
    </div>
  );
}

interface TalbankenUsageProps {
  children: ReactNode;
}

export function TalbankenUsage({ children }: TalbankenUsageProps) {
  return <div className="talbanken-usage">{children}</div>;
}

interface TalbankenCardProps {
  kicker: string;
  variant?: "default" | "accent";
  children: ReactNode;
}

export function TalbankenCard({
  kicker,
  variant = "default",
  children,
}: TalbankenCardProps) {
  return (
    <section
      className={cn(
        "talbanken-card",
        variant === "accent" && "talbanken-card-accent"
      )}
    >
      <p className="talbanken-kicker">{kicker}</p>
      {children}
    </section>
  );
}

interface TalbankenTimelineProps {
  children: ReactNode;
}

export function TalbankenTimeline({ children }: TalbankenTimelineProps) {
  return <ol className="talbanken-timeline">{children}</ol>;
}

interface TalbankenTimelineItemProps {
  label: string;
  children: ReactNode;
}

export function TalbankenTimelineItem({
  label,
  children,
}: TalbankenTimelineItemProps) {
  return (
    <li>
      <span>{label}</span>
      <p>{children}</p>
    </li>
  );
}
