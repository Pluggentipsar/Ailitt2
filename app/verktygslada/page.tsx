import { Wrench, Search } from "lucide-react";
import { ToolboxExplorer } from "@/components/verktygslada/ToolboxExplorer";
import { tools } from "@/lib/verktygslada/tools";

export const metadata = {
  title: "Verktygslåda — AI-tjänster och källkritikverktyg · AI-litt",
  description:
    "Sökbar samling av AI-verktyg, källkritikresurser, prebunking-spel och pedagogiskt material för lärare.",
};

export default function VerktygsladaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs font-semibold uppercase tracking-wider mb-5">
              <Wrench className="h-3.5 w-3.5" />
              Verktygslåda
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4">
              AI-tjänster, källkritikverktyg och pedagogiska resurser
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Sökbar samling av {tools.length}+ verktyg vi använder i undervisning
              och workshops — från prebunking-spel till bildgenerering. Filtrera
              efter kategori, kostnad, språk och om konto krävs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Totalt antal" value={tools.length.toString()} />
            <Stat
              label="Gratis att använda"
              value={tools.filter((t) => t.price === "free").length.toString()}
            />
            <Stat
              label="Utan konto"
              value={tools.filter((t) => !t.requiresAccount).length.toString()}
            />
            <Stat
              label="På svenska"
              value={tools.filter((t) => t.language === "sv").length.toString()}
            />
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <ToolboxExplorer />
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600 mt-0.5">{label}</div>
    </div>
  );
}
