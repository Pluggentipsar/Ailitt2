import Link from "next/link";
import {
  ArrowLeft,
  Wrench,
  ExternalLink,
  Languages,
  UserCheck,
} from "lucide-react";
import { tools } from "@/lib/verktygslada/tools";
import {
  toolCategoryLabels,
  toolPriceLabels,
  toolLanguageLabels,
  type ToolCategory,
} from "@/lib/verktygslada/types";

export const metadata = {
  title: "Verktyg · Källkritik-sandlådan",
  description:
    "Alla AI- och källkritikverktyg vi använder i workshopen och i klassrummet — sökbara även utanför workshop-shellet.",
};

// Ordningen styr hur kategorierna staplas på sidan. Källkritik först eftersom
// det är workshopens kärnfokus.
const CATEGORY_ORDER: ToolCategory[] = [
  "kallkritik-resurser",
  "ai-assistent-kallkritik",
  "verifiering",
  "ai-detektion",
  "prebunking-spel",
  "sok-och-lateral-lasning",
  "larresurs-skola",
  "chattbot",
  "bildgenerering",
  "videogenerering",
  "ljud-och-rost",
  "deepfake-skapande",
  "browser-extension",
];

export default function VerktygPage() {
  // Gruppera verktyg per kategori
  const grouped = new Map<ToolCategory, typeof tools>();
  for (const tool of tools) {
    const list = grouped.get(tool.category) ?? [];
    list.push(tool);
    grouped.set(tool.category, list);
  }

  const orderedCategories = CATEGORY_ORDER.filter((c) => grouped.has(c));

  // Stats för intro
  const totalCount = tools.length;
  const freeCount = tools.filter((t) => t.price === "free").length;
  const swedishCount = tools.filter((t) => t.language === "sv").length;
  const noAccountCount = tools.filter((t) => !t.requiresAccount).length;

  return (
    <article data-chapter-tone="havsblå" className="pb-20">
      <div className="container mx-auto px-4 pt-6 print:hidden">
        <Link
          href="/workshops/kallkritik-mellanstadiet"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till sandlådan
        </Link>
      </div>

      <header className="container mx-auto px-4 pt-4 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold uppercase tracking-wider mb-4 rotate-[-1deg]">
            <Wrench className="h-3.5 w-3.5" />
            Resurs
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-stone-900 leading-[0.95] mb-4">
            Verktyg
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-2">
            Alla AI-verktyg, källkritikresurser och pedagogiska tjänster vi
            använder i workshopen — samlade här i sandlådans formspråk så du
            slipper byta sida.
          </p>
          <p className="text-sm text-stone-600 italic">
            Samma data som ligger i sajtens öppna{" "}
            <Link
              href="/verktygslada"
              className="underline underline-offset-2 hover:no-underline"
            >
              Verktygslåda
            </Link>{" "}
            — där finns sökmotor och filter om du behöver leta brett.
          </p>
        </div>

        {/* Snabbstats — fyra post-it-aktiga rutor */}
        <div className="mt-8 max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat label="Totalt antal" value={totalCount.toString()} />
          <Stat label="Gratis" value={freeCount.toString()} />
          <Stat label="Utan konto" value={noAccountCount.toString()} />
          <Stat label="På svenska" value={swedishCount.toString()} />
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl space-y-10">
          {orderedCategories.map((catId) => {
            const items = grouped.get(catId) ?? [];
            return (
              <section key={catId} className="print-avoid-break">
                <div className="border-b-2 border-dashed border-stone-300 pb-2 mb-5 flex items-baseline gap-3 flex-wrap">
                  <h2 className="font-display text-3xl text-stone-900">
                    {toolCategoryLabels[catId]}
                  </h2>
                  <span className="text-sm text-stone-500 italic">
                    {items.length} verktyg
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((tool) => (
                    <a
                      key={tool.id}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white/70 hover:bg-white border border-stone-200 hover:border-stone-400 rounded-2xl p-5 group transition-colors print-avoid-break"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-2xl text-stone-900 leading-tight group-hover:underline decoration-2 underline-offset-2">
                          {tool.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-stone-400 shrink-0 mt-1" />
                      </div>

                      {/* Badges-rad */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        <Badge tone={tool.price === "free" ? "free" : tool.price === "freemium" ? "freemium" : "paid"}>
                          {toolPriceLabels[tool.price]}
                        </Badge>
                        <Badge tone="neutral">
                          <Languages className="h-3 w-3 inline -mt-0.5" />{" "}
                          {toolLanguageLabels[tool.language]}
                        </Badge>
                        {tool.requiresAccount && (
                          <Badge tone="warning">
                            <UserCheck className="h-3 w-3 inline -mt-0.5" />{" "}
                            Konto krävs
                          </Badge>
                        )}
                      </div>

                      <p className="text-stone-700 leading-snug text-sm">
                        {tool.description}
                      </p>

                      {tool.notes && (
                        <p className="text-xs text-stone-500 italic mt-2 border-l-2 border-stone-200 pl-2">
                          {tool.notes}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/70 border border-stone-200 rounded-xl p-3">
      <div className="text-2xl font-bold text-stone-900 font-display">
        {value}
      </div>
      <div className="text-xs text-stone-600 leading-tight">{label}</div>
    </div>
  );
}

function Badge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "free" | "freemium" | "paid" | "neutral" | "warning";
}) {
  const classes = {
    free: "bg-workshop-skog/20 text-workshop-skog border-workshop-skog/30",
    freemium: "bg-workshop-senap/20 text-stone-800 border-workshop-senap/30",
    paid: "bg-stone-200 text-stone-700 border-stone-300",
    neutral: "bg-stone-100 text-stone-700 border-stone-200",
    warning:
      "bg-workshop-terrakotta/20 text-workshop-terrakotta border-workshop-terrakotta/30",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${classes}`}
    >
      {children}
    </span>
  );
}
