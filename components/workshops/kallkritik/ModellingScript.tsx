import { Mic, GraduationCap } from "lucide-react";

export function ModellingScript({ script }: { script: string }) {
  // Split på dubbla newlines för stycken; bevara enkelradiga rader.
  const paragraphs = script
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="bg-stone-900 text-stone-100 rounded-2xl p-6 relative overflow-hidden print:bg-white print:text-stone-900 print:border print:border-stone-400 print-avoid-break">
      <div className="absolute top-0 right-0 w-32 h-32 bg-workshop-senap/20 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-wider font-bold text-workshop-senap print:text-stone-700">
          <Mic className="h-4 w-4" />
          Lärarens think-aloud
        </div>
        <p className="text-sm text-stone-300 mb-4 print:text-stone-600">
          Konkret skript som läraren kan läsa upp för att modellera övningen.
          Skrivet som direkt tal — alla pauser och pekningar är medvetna.
        </p>

        <div className="space-y-3 font-hand text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className="!mb-0 whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-xs text-stone-400 print:text-stone-600">
          <GraduationCap className="h-3.5 w-3.5" />
          Inspirerat av <em className="ml-1">teacher_modelling_script</em> i
          Education Agent Skills.
        </div>
      </div>
    </section>
  );
}
