import Link from "next/link";
import {
  FlaskConical,
  ArrowRight,
  ShieldAlert,
  Terminal,
  Clock,
  MessageSquareQuote,
  Users,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { HubExplorer } from "@/components/workshops/kallkritik/HubExplorer";
import { resources } from "@/lib/workshops/kallkritik";

const ICONS = {
  ShieldAlert,
  Terminal,
  Clock,
  MessageSquareQuote,
  Users,
  BookMarked,
} as const;

const RESOURCE_TONE: Record<string, string> = {
  warning: "post-it--terrakotta",
  tools: "post-it--havsbla",
  plan: "post-it--senap",
  cards: "post-it--lila",
  parents: "post-it--skog",
  sources: "post-it--kol",
};

export default function WorkshopHub() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-12 pb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-workshop-canvas text-xs font-semibold uppercase tracking-wider mb-6 rotate-[-1deg]">
              <FlaskConical className="h-3.5 w-3.5" />
              Workshop-sandlåda · mellanstadiet
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-stone-900 leading-[0.95] mb-5">
              AI och källkritik —{" "}
              <span className="relative inline-block">
                <span className="relative z-10">en sandlåda</span>
                <span
                  className="absolute inset-x-1 bottom-1 h-3 rounded-sm -z-0"
                  style={{ background: "var(--workshop-senap)" }}
                />
              </span>{" "}
              för lärare
            </h1>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl mb-6">
              Det här är inte en linjär workshop. Det är ett bibliotek av
              aktiviteter att plocka från. Varje aktivitet finns i tre lägen:{" "}
              <span className="font-semibold">Prova själv</span> där du som
              lärare testar övningen,{" "}
              <span className="font-semibold">Lärarhandledning</span> med
              tidsplan och förberedelser för klassrummet, och{" "}
              <span className="font-semibold">Elevinstruktion</span> redo att
              kopiera in i Teams eller Vklass.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sandladan"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-workshop-canvas font-medium hover:bg-stone-800 transition-colors"
              >
                Utforska sandlådan
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/workshops/kallkritik-mellanstadiet/resurser/dramaturgi"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-stone-900 text-stone-900 font-medium hover:bg-stone-100 transition-colors"
              >
                Färdig dramaturgi
                <Clock className="h-4 w-4" />
              </Link>
            </div>

            {/* Bygg själv-uppmaning */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-workshop-senap/30 border-2 border-dashed border-workshop-senap">
              <Sparkles className="h-5 w-5 text-stone-900 shrink-0" />
              <p className="text-sm text-stone-900 leading-snug">
                <strong>Bygg din egen workshop:</strong> klicka på{" "}
                <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-stone-900 text-workshop-canvas align-middle mx-0.5">
                  +
                </span>{" "}
                på aktiviteterna du vill ha. Generera en delbar länk längst ner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÅ HÄR ANVÄNDS SANDLÅDAN */}
      <section className="container mx-auto px-4 pb-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          <div className="post-it post-it--senap relative">
            <div className="font-display text-3xl mb-2 text-stone-900">
              Prova själv
            </div>
            <p className="text-stone-800 leading-relaxed">
              Den körbara versionen — du testar övningen själv för att förstå
              hur den funkar. Inbyggda spel, karuseller och exempel ligger
              direkt på sidan. Funkar både hemma vid köksbordet och som
              lärar-deltagare i en workshop.
            </p>
          </div>
          <div className="post-it post-it--havsbla relative">
            <div className="font-display text-3xl mb-2 text-stone-900">
              Lärarhandledning
            </div>
            <p className="text-stone-800 leading-relaxed">
              När du ska köra övningen med elever. Förberedelser, tidsplan per
              moment, ledarroll, samtalsöppningar — plus fallgropar och
              varningar att hålla koll på.
            </p>
          </div>
          <div className="post-it post-it--skog relative">
            <div className="font-display text-3xl mb-2 text-stone-900">
              Elevinstruktion
            </div>
            <p className="text-stone-800 leading-relaxed">
              Skriven direkt till eleven, med du-tilltal. Visa på storskärm,
              kopiera till Teams/Vklass eller skriv ut. En kopiera-knapp ger
              ren text utan formattering.
            </p>
          </div>
        </div>
      </section>

      {/* RESURSER */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex items-end justify-between mb-5 gap-4 flex-wrap">
          <div>
            <h2 className="font-display text-4xl text-stone-900">
              Resurser & bilagor
            </h2>
            <p className="text-stone-600 mt-1">
              Trygghetsregler, prompter, samtalskort, dramaturgi-förslag.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => {
            const Icon = (ICONS as any)[r.icon] ?? BookMarked;
            return (
              <Link
                key={r.id}
                href={`/workshops/kallkritik-mellanstadiet/resurser/${r.id}`}
                className={`post-it ${RESOURCE_TONE[r.tone]} post-it-rotated block group`}
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-stone-900/10 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl leading-tight text-stone-900 mb-1 group-hover:underline decoration-2 underline-offset-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-stone-800/90 leading-snug">
                      {r.blurb}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SANDLÅDAN — sök, filter, kapitelkort */}
      <section
        id="sandladan"
        className="container mx-auto px-4 pb-20 scroll-mt-20"
      >
        <div className="mb-6">
          <h2 className="font-display text-4xl text-stone-900 mb-1">
            Sandlådan
          </h2>
          <p className="text-stone-600">
            21 aktiviteter, fördelade på 6 kapitel. Sök, filtrera — eller bläddra
            kapitel för kapitel nedan.
          </p>
        </div>

        <HubExplorer />
      </section>
    </div>
  );
}
