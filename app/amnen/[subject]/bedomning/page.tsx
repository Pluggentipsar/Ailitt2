
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

type Section = {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: ReactNode;
};

type PageProps = {
  params: Promise<{
    subject: string;
  }>;
};

const PlaceholderBlock = ({ title }: { title: string }) => (
  <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-5 text-sm text-gray-600">
    <p className="font-semibold text-gray-700">Innehåll saknas för "{title}".</p>
    <p className="mt-2">Fyll i sektionens text här.</p>
  </div>
);

export const metadata: Metadata = {
  title: "Bedömning i Svenska | AI-litt",
  description:
    "Strategier, matriser och arbetssätt för att göra bedömning i Svenska likvärdig och lärande i AI-tider.",
};

const sections: Section[] = [
  {
    id: "varfor-bedoms",
    number: "01",
    title: "Varför bedömning i AI-tider?",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Varför bedömning i AI-tider?" />,
  },
  {
    id: "process-vs-produkt",
    number: "02",
    title: "Process och produkt – och relationen däremellan",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Process och produkt – och relationen däremellan" />,
  },
  {
    id: "alignment",
    number: "03",
    title: "Bedömningens grundprinciper i AI-klassrummet",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Bedömningens grundprinciper i AI-klassrummet" />,
  },
  {
    id: "klassrums-overenskommelse",
    number: "04",
    title: "Klassrumsöverenskommelse om AI",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Klassrumsöverenskommelse om AI" />,
  },
  {
    id: "former-for-bedomning",
    number: "05",
    title: "Former för bedömning i AI-klassrummet",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Former för bedömning i AI-klassrummet" />,
  },
  {
    id: "solo",
    number: "06",
    title: "SOLO-taxonomin i AI-miljö",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="SOLO-taxonomin i AI-miljö" />,
  },
  {
    id: "fyra-c",
    number: "07",
    title: "De fyra C:na i AI-klassrummet",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="De fyra C:na i AI-klassrummet" />,
  },
  {
    id: "skrivande",
    number: "08",
    title: "AI, skrivande och bedömning",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="AI, skrivande och bedömning" />,
  },
  {
    id: "processloggar",
    number: "09",
    title: "Processloggar och metareflektion",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Processloggar och metareflektion" />,
  },
  {
    id: "muntligt-forsvar",
    number: "10",
    title: "Muntligt försvar av AI-stödd text",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Muntligt försvar av AI-stödd text" />,
  },
  {
    id: "ai-assessment-scale",
    number: "11",
    title: "AI Assessment Scale (Furze m.fl.)",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="AI Assessment Scale (Furze m.fl.)" />,
  },
  {
    id: "likvardighet",
    number: "12",
    title: "Likvärdighet, etik och juridik",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Likvärdighet, etik och juridik" />,
  },
  {
    id: "rubriker",
    number: "13",
    title: "Rubriker och kriterier för AI-stött arbete",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Rubriker och kriterier för AI-stött arbete" />,
  },
  {
    id: "debattartikel",
    number: "14",
    title: "Exempelupplägg: Debattartikel med AI-stöd",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Exempelupplägg: Debattartikel med AI-stöd" />,
  },
  {
    id: "formativ-ai",
    number: "15",
    title: "Bedömning för lärande med AI",
    summary: "Plats för sammanfattning.",
    content: <PlaceholderBlock title="Bedömning för lärande med AI" />,
  },
];

export default async function SubjectBedomningPage({ params }: PageProps) {
  const resolvedParams = await params;
  if (resolvedParams.subject !== "svenska") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/svenska.png)" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/90 via-cyan-900/70 to-sky-800/40" />
        <div className="absolute inset-0 z-0 bg-pattern opacity-15" />

        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="max-w-4xl drop-shadow-[0_10px_35px_rgba(3,7,18,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              SVENSKA · BEDÖMNING
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bedömning i AI-tider
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Layouten är klar – fyll på sektionerna nedan med dina texter, matriser och exempel när du är redo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Fokus på validitet och process
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                <CheckCircle2 className="h-4 w-4" />
                Matrisstöd och exempel
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="-mt-20 pb-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                    {section.number}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-2 text-base text-gray-600">{section.summary}</p>
                  <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">{section.content}</div>
                </section>
              ))}

              <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 p-10 text-white shadow-2xl shadow-cyan-200/50">
                <h2 className="text-3xl font-bold">Fortsätt bygga hubben</h2>
                <p className="mt-3 text-white/90">
                  Har du egna matriser eller exempel att lägga till? Hör av dig till redaktionen så fylls sidan på.
                </p>
                <Link
                  href="mailto:hello@ai-litt.se"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:-translate-y-0.5"
                >
                  Tipsa redaktionen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-gray-100 bg-white/95 p-6 shadow-lg shadow-gray-200/40">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Innehåll</p>
                <nav className="mt-4 space-y-2 text-sm">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2 text-gray-600 transition hover:bg-cyan-50 hover:text-cyan-800"
                    >
                      <span className="text-xs font-semibold tracking-[0.3em] text-gray-400 group-hover:text-cyan-500">
                        {section.number}
                      </span>
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 rounded-3xl border border-cyan-100 bg-cyan-50/80 p-6 text-sm text-cyan-900 shadow-inner">
                <p className="font-semibold">Snabb åtkomst</p>
                <ul className="mt-3 space-y-1">
                  <li>
                    <a href="#former-for-bedomning" className="underline-offset-2 hover:underline">
                      Former för bedömning
                    </a>
                  </li>
                  <li>
                    <a href="#debattartikel" className="underline-offset-2 hover:underline">
                      Debattartikel – upplägg
                    </a>
                  </li>
                  <li>
                    <a href="#rubriker" className="underline-offset-2 hover:underline">
                      Rubriker & kriterier
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
