import {
  ExternalLink,
  Wrench,
  Lightbulb,
  BookOpen,
  UserCheck,
  Gamepad2,
} from "lucide-react";
import type { ExternalTool } from "@/lib/workshops/kallkritik";

const KIND_META: Record<
  NonNullable<ExternalTool["kind"]>,
  { label: string; icon: typeof Wrench }
> = {
  service: { label: "AI-tjänst", icon: Wrench },
  exercise: { label: "Färdig övning", icon: Lightbulb },
  game: { label: "Spel", icon: Gamepad2 },
  inspiration: { label: "Inspirationskälla", icon: BookOpen },
};

export function ExternalToolsList({ tools }: { tools: ExternalTool[] }) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="bg-workshop-havsbla/10 border-2 border-workshop-havsbla/30 rounded-2xl p-5 print-avoid-break">
      <div className="flex items-center gap-2 mb-1">
        <ExternalLink className="h-4 w-4 text-workshop-havsbla" />
        <h2 className="text-xs uppercase tracking-wider font-bold text-stone-700">
          Verktyg och tjänster
        </h2>
      </div>
      <p className="text-sm text-stone-700 mb-4">
        Konkreta länkar till tjänster och övningar som hör till denna aktivitet.
        Öppna i ny flik när du och eleverna ska köra.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((tool, i) => {
          const meta = tool.kind ? KIND_META[tool.kind] : null;
          const Icon = meta?.icon ?? Wrench;
          return (
            <a
              key={i}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-stone-200 hover:border-stone-900 rounded-xl p-4 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-workshop-havsbla/20 text-workshop-havsbla shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    {meta && (
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                        {meta.label}
                      </span>
                    )}
                    {tool.requiresAccount && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] uppercase tracking-wider text-workshop-terrakotta font-semibold">
                        <UserCheck className="h-3 w-3" />
                        Kräver konto
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-display text-lg text-stone-900 leading-tight group-hover:underline decoration-2 underline-offset-2">
                      {tool.name}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-900" />
                  </div>
                  <p className="text-sm text-stone-700 leading-snug">
                    {tool.description}
                  </p>
                  {tool.notes && (
                    <p className="text-xs text-stone-500 italic mt-2">
                      {tool.notes}
                    </p>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
