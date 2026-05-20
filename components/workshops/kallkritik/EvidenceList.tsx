import { BookOpen, ExternalLink, ShieldCheck, Shield } from "lucide-react";
import type {
  Activity,
  EvidenceStrength,
  EvidenceRef,
} from "@/lib/workshops/kallkritik";
import { evidenceLibrary } from "@/lib/workshops/kallkritik";

const STRENGTH_META: Record<
  EvidenceStrength,
  { label: string; icon: typeof Shield; tone: string }
> = {
  strong: {
    label: "Stark forskningsförankring",
    icon: ShieldCheck,
    tone: "text-workshop-skog bg-workshop-skog/10 border-workshop-skog/40",
  },
  moderate: {
    label: "Måttlig forskningsförankring",
    icon: Shield,
    tone: "text-workshop-havsbla bg-workshop-havsbla/10 border-workshop-havsbla/40",
  },
  emerging: {
    label: "Framväxande forskning",
    icon: Shield,
    tone: "text-workshop-senap bg-workshop-senap/15 border-workshop-senap/40",
  },
};

export function EvidenceList({
  sources,
  strength,
}: {
  sources: NonNullable<Activity["evidenceSources"]>;
  strength?: Activity["evidenceStrength"];
}) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="bg-white/70 border border-stone-200 rounded-2xl p-5 print-avoid-break">
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="text-xs uppercase tracking-wider font-bold text-stone-700 flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" />
          Forskningsförankring
        </div>
        {strength && (
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold inline-flex items-center gap-1 ${STRENGTH_META[strength].tone}`}
          >
            {(() => {
              const Icon = STRENGTH_META[strength].icon;
              return <Icon className="h-3 w-3" />;
            })()}
            {STRENGTH_META[strength].label}
          </span>
        )}
      </div>

      <ul className="space-y-3.5">
        {sources.map((anchor, i) => {
          // Cast till EvidenceRef — `as const satisfies` ger union-typer där
          // url/publisher förekommer ojämnt, så vi vidgar till basen.
          const evidence = evidenceLibrary[
            anchor.ref as keyof typeof evidenceLibrary
          ] as EvidenceRef | undefined;
          if (!evidence) {
            // Tyst fail i prod — men logga i dev så stavfel märks.
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn(
                `[workshop] Okänd evidence-ref: ${anchor.ref}`
              );
            }
            return null;
          }
          return (
            <li
              key={`${anchor.ref}-${i}`}
              className="border-l-2 border-stone-300 pl-4 print-avoid-break"
            >
              <div className="text-sm font-semibold text-stone-900">
                {evidence.authors} ({evidence.year}).{" "}
                <span className="italic font-normal">{evidence.title}</span>
                {evidence.publisher && (
                  <span className="text-stone-600 font-normal">
                    {" — "}
                    {evidence.publisher}
                  </span>
                )}
                {evidence.url && (
                  <a
                    href={evidence.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center text-workshop-havsbla hover:underline"
                    aria-label={`Öppna källan ${evidence.title}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mt-1">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold mr-1">
                  Relevans:
                </span>
                {anchor.relevance}
              </p>
              {evidence.summary && (
                <details className="mt-1.5 text-sm text-stone-600">
                  <summary className="cursor-pointer text-xs uppercase tracking-wider text-stone-500 font-semibold hover:text-stone-800">
                    Vad studien visar
                  </summary>
                  <p className="mt-1 leading-relaxed">{evidence.summary}</p>
                </details>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
