import Link from "next/link";
import { ArrowRight, Gamepad2 } from "lucide-react";

type GameLauncherProps = {
  title: string;
  blurb: string;
  duration: string;
  href: string;
};

export function GameLauncher({
  title,
  blurb,
  duration,
  href,
}: GameLauncherProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl bg-stone-900 text-white print-avoid-break"
    >
      {/* glow effect */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(255,60,60,0.25) 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, rgba(196,77,255,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative px-6 py-6 sm:px-8 sm:py-7 flex items-center gap-5 flex-wrap">
        <div className="shrink-0">
          <div
            className="grid h-14 w-14 place-items-center rounded-2xl text-white"
            style={{
              background: "linear-gradient(135deg, #ff3c3c, #c44dff)",
              boxShadow: "0 6px 24px rgba(196,77,255,0.4)",
            }}
          >
            <Gamepad2 className="h-7 w-7" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-pink-300 font-bold mb-1">
            Interaktivt spel · {duration}
          </div>
          <h2 className="font-display text-3xl leading-tight mb-1.5 text-white">
            {title}
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">{blurb}</p>
        </div>

        <div className="shrink-0">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-stone-900 font-semibold text-sm group-hover:gap-2.5 transition-all">
            Starta spelet
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
