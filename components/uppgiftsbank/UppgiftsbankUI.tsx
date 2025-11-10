import { Children, isValidElement, ReactNode } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskDetailsProps
  extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  children?: ReactNode;
}

export function TaskDetails({
  children,
  className,
  ...props
}: TaskDetailsProps) {
  const childArray = Children.toArray(children ?? []);
  let summaryContent: ReactNode = null;
  const contentChildren: ReactNode[] = [];

  childArray.forEach((child) => {
    if (
      summaryContent === null &&
      isValidElement(child) &&
      typeof child.type === "string" &&
      child.type.toLowerCase() === "summary"
    ) {
      summaryContent = child.props.children;
    } else {
      contentChildren.push(child);
    }
  });

  if (!summaryContent) {
    summaryContent = <span className="font-semibold">Uppgift</span>;
  }

  return (
    <details
      {...props}
      className={cn(
        "group not-prose overflow-hidden rounded-3xl border border-cyan-100 bg-white/95 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl [&>summary::-webkit-details-marker]:hidden",
        "open:border-cyan-200 open:shadow-2xl",
        className
      )}
    >
      <summary className="flex cursor-pointer flex-col gap-2 px-6 py-5 text-left outline-none transition-colors group-open:bg-cyan-50/60">
        <div className="flex items-start gap-4">
          <div className="flex-1 text-base font-semibold leading-snug text-gray-900">
            {summaryContent}
          </div>
          <div className="rounded-full border border-cyan-100 bg-white/80 p-2 shadow-inner">
            <ChevronDown className="h-4 w-4 text-cyan-600 transition-transform duration-300 group-open:rotate-180" />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-500">
          Öppna för syfte, instruktioner och AI-koppling
        </p>
      </summary>
      <div className="border-t border-cyan-100/60 bg-white px-6 py-6">
        <div className="prose prose-lg max-w-none text-gray-700">
          {contentChildren}
        </div>
      </div>
    </details>
  );
}

const highlightStats = [
  { value: "16", label: "uppgifter", detail: "Från reflektion till samhällsanalys" },
  { value: "Flexibel", label: "tidsåtgång", detail: "Korta inslag eller längre projekt" },
  { value: "AI+", label: "perspektiv", detail: "Begrepp, process, etik & samhälle" },
];

const howTo = [
  "Välj uppgifter fritt eller koppla dem till kursernas moduler.",
  "Använd rubrikerna Syfte, Instruktion och Lärarfördjupning som byggstenar.",
  "AI-litteracitetskopplingen visar vilka dimensioner som aktiveras.",
  "Kombinera två uppgifter för större temaarbeten eller examinationer.",
];

const aiThreads = [
  "Metareflektion & röst",
  "Skrivprocess & respons",
  "Källkritik & tolkning",
  "Samhällsanalys & etik",
];

const focusAreas = [
  {
    title: "Språk & uttryck",
    body: "Retorik, skrivande, multimodalt berättande och respons.",
  },
  {
    title: "Kunskap & källor",
    body: "Analys av AI-genererat material, källkritik och epistemisk beredskap.",
  },
  {
    title: "Identitet & samhälle",
    body: "Människans röst i dialog med AI, demokrati och framtidsfrågor.",
  },
];

export function UppgiftsbankHighlights() {
  return (
    <div className="not-prose my-10 space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {highlightStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/40 bg-gradient-to-br from-cyan-500/80 via-sky-500/70 to-blue-500/70 p-6 text-white shadow-lg shadow-cyan-500/30 backdrop-blur"
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {stat.label}
            </p>
            <p className="mt-2 text-sm text-white/90">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Så använder du banken
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-gray-900">
            Bygg sekvenser eller stick in aktiviteter
          </h3>
          <ul className="mt-6 space-y-3 text-gray-700">
            {howTo.map((item) => (
              <li key={item} className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-inner">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            AI-trådar
          </p>
          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            Växla mellan fokus
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {aiThreads.map((thread) => (
              <span
                key={thread}
                className="rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm"
              >
                {thread}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/60 bg-white p-5 shadow">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              Tonvikt
            </p>
            <div className="mt-3 space-y-3">
              {focusAreas.map((focus) => (
                <div key={focus.title}>
                  <p className="text-sm font-semibold text-gray-900">
                    {focus.title}
                  </p>
                  <p className="text-sm text-gray-600">{focus.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const accentVariants = [
  {
    badge:
      "bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-white shadow-cyan-500/40",
    glow: "from-cyan-500/10 to-sky-500/5",
  },
  {
    badge:
      "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-emerald-400/40",
    glow: "from-emerald-500/10 to-teal-500/5",
  },
  {
    badge:
      "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white shadow-amber-400/40",
    glow: "from-amber-500/10 to-orange-500/5",
  },
  {
    badge:
      "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-rose-500 text-white shadow-purple-500/40",
    glow: "from-purple-500/10 to-fuchsia-500/5",
  },
];

interface TaskCardProps
  extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  number: number;
  title: string;
  focus: string;
  tags?: string[];
  children?: ReactNode;
}

export function TaskCard({
  number,
  title,
  focus,
  tags = [],
  children,
  className,
  ...props
}: TaskCardProps) {
  const variant = accentVariants[(number - 1) % accentVariants.length];
  const formattedNumber = number < 10 ? `0${number}` : `${number}`;

  return (
    <details
      {...props}
      className={cn(
        "group h-full rounded-3xl border border-gray-100 bg-white/95 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl [&>summary::-webkit-details-marker]:hidden",
        "open:border-cyan-200 open:shadow-cyan-200/60",
        className
      )}
    >
      <summary className="flex cursor-pointer flex-col gap-4 border-b border-gray-100 px-6 py-6 text-left outline-none transition-colors group-open:bg-cyan-50/40 md:flex-row md:items-start">
        <div
          className={cn(
            "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-bold shadow-lg",
            variant.badge
          )}
        >
          {formattedNumber}
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Uppgift
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{focus}</p>
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-cyan-700 shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-full border border-cyan-100 bg-white/80 p-3 shadow-inner">
          <ChevronDown className="h-4 w-4 text-cyan-600 transition-transform duration-300 group-open:rotate-180" />
        </div>
      </summary>
      <div className="relative overflow-hidden bg-white">
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 group-open:opacity-100 bg-gradient-to-br",
            variant.glow
          )}
        />
        <div className="relative px-6 py-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </details>
  );
}

export function TaskDeck({ children }: { children?: ReactNode }) {
  const items = Children.toArray(children ?? []).filter((child) => {
    if (typeof child === "string") {
      return child.trim().length > 0;
    }
    return true;
  });

  return (
    <div className="not-prose grid gap-6 lg:grid-cols-2">
      {items.map((child, index) => (
        <div key={index} className="h-full">
          {child}
        </div>
      ))}
    </div>
  );
}
