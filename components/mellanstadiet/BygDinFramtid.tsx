"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Car,
  Gamepad2,
  Heart,
  Vote,
  Globe,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Check,
  Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* Bygg din framtid — 7 domäner, 4 val per domän. Eleven väljer en framtidsbild
 * per domän och ser ett "2040-collage" som beskriver helheten. Varje val har en
 * "vibe" (utopisk/pragmatisk/oroande) — slutet visar vilken vibe som dominerade.
 *
 * 7 domäner inkl. Demokrati + Klimat enligt Joels feedback.
 */

type Vibe = "utopisk" | "pragmatisk" | "oroande";

interface Choice {
  id: string;
  label: string;
  description: string;
  vibe: Vibe;
}

interface Domain {
  id: string;
  label: string;
  icon: LucideIcon;
  question: string;
  color: string;
  choices: Choice[];
}

const DOMAINS: Domain[] = [
  {
    id: "arbete",
    label: "Arbete",
    icon: Briefcase,
    question: "Hur ser arbete ut 2040?",
    color: "#fb923c",
    choices: [
      {
        id: "a1",
        label: "AI gör allt tråkigt — människor gör det viktiga",
        description:
          "Tråkiga jobb (administration, sortering, dataanalys) sköts av AI. Människor jobbar med relationer, kreativitet, omsorg.",
        vibe: "utopisk",
      },
      {
        id: "a2",
        label: "Människor jobbar med AI som assistent",
        description:
          "De flesta yrken förändras. AI hjälper, människan beslutar. Kortare arbetstid kanske.",
        vibe: "pragmatisk",
      },
      {
        id: "a3",
        label: "Många jobb försvinner — vissa människor utan jobb",
        description:
          "AI ersätter folk i många yrken. Stora omställningar. Universal grundinkomst diskuteras.",
        vibe: "oroande",
      },
      {
        id: "a4",
        label: "Helt nya yrken vi inte kan föreställa oss idag",
        description:
          "Som internet skapade jobb som 'YouTuber' och 'app-designer' skapar AI yrken vi inte kan namnge än.",
        vibe: "pragmatisk",
      },
    ],
  },
  {
    id: "skola",
    label: "Skola",
    icon: GraduationCap,
    question: "Hur ser skola ut 2040?",
    color: "#a5b4fc",
    choices: [
      {
        id: "s1",
        label: "Personlig AI-lärare för varje elev — klassrum försvinner",
        description:
          "Varje barn har en egen AI som anpassar lektioner efter just dem. Skolbyggnaden behövs knappt.",
        vibe: "oroande",
      },
      {
        id: "s2",
        label: "Lärare och AI samarbetar — fokus på diskussion och kritisk granskning",
        description:
          "Läraren leder, AI hjälper. Mer tid för djupa samtal och projekt eftersom AI löser repetitiva moment.",
        vibe: "utopisk",
      },
      {
        id: "s3",
        label: "Skolan ungefär som idag — AI används för viss läxhjälp",
        description:
          "Förändring sker långsamt. Mest läroplanen står sig. AI är ett bland många verktyg.",
        vibe: "pragmatisk",
      },
      {
        id: "s4",
        label: "Skolan blir mer som hantverkslära — vi värdesätter det AI inte kan",
        description:
          "Eftersom AI klarar fakta-kunskap fokuserar skolan på samarbete, fysiskt skapande och etik.",
        vibe: "utopisk",
      },
    ],
  },
  {
    id: "transport",
    label: "Transport",
    icon: Car,
    question: "Hur reser vi 2040?",
    color: "#34d399",
    choices: [
      {
        id: "t1",
        label: "Självkörande bilar är standard — ingen kör själv längre",
        description:
          "Du säger 'till skolan' och bilen kör. Olyckor minskar. Men en del människor saknar att köra själv.",
        vibe: "pragmatisk",
      },
      {
        id: "t2",
        label: "Färre bilar — AI optimerar kollektivtrafik",
        description:
          "AI planerar bussar och tåg så att de alltid är där du behöver. Bilar för få.",
        vibe: "utopisk",
      },
      {
        id: "t3",
        label: "Reser mest i VR — fysiska resor blir lyx",
        description:
          "Du 'besöker' Paris i VR. Klimatet bättre, men kanske ensammare?",
        vibe: "oroande",
      },
      {
        id: "t4",
        label: "Drönare och flygande taxi i städer",
        description:
          "Mat, paket och människor flyger i små farkoster. Stadens ljud förändras helt.",
        vibe: "pragmatisk",
      },
    ],
  },
  {
    id: "fritid",
    label: "Fritid",
    icon: Gamepad2,
    question: "Vad gör vi på fritiden 2040?",
    color: "#fcd34d",
    choices: [
      {
        id: "f1",
        label: "AI-genererade världar — du kan leva i vilken berättelse som helst",
        description:
          "Spel, filmer, musik — allt görs av AI på bestilling. Aldrig samma sak två gånger.",
        vibe: "pragmatisk",
      },
      {
        id: "f2",
        label: "Människor söker det fysiska — IRL blir trendigt igen",
        description:
          "Skapande med händerna, friluftsliv, träffar i verkligheten — det som AI inte kan ge.",
        vibe: "utopisk",
      },
      {
        id: "f3",
        label: "Många hänger med AI-companions istället för människor",
        description:
          "AI-vänner är alltid tillgängliga och håller alltid med. Ensamheten ökar.",
        vibe: "oroande",
      },
      {
        id: "f4",
        label: "Sport och musik förändras inte mycket",
        description:
          "Människor spelar fortfarande fotboll. Sjunger fortfarande. AI är inte allt.",
        vibe: "pragmatisk",
      },
    ],
  },
  {
    id: "vanskap",
    label: "Vänskap",
    icon: Heart,
    question: "Hur är vänskap 2040?",
    color: "#f43f5e",
    choices: [
      {
        id: "v1",
        label: "AI-vänner är vanliga — anses normalt att ha en",
        description:
          "Som husdjur fast i mobilen. Vissa har dem som primär vän.",
        vibe: "oroande",
      },
      {
        id: "v2",
        label: "Mänskliga vänner blir extra värdefulla",
        description:
          "Eftersom det är skillnad på äkta omtanke och AI-smicker värderar vi människor mer.",
        vibe: "utopisk",
      },
      {
        id: "v3",
        label: "Skola och samhälle skyddar IRL-vänskap medvetet",
        description:
          "Lagar mot AI-vän-marknadsföring till barn. Skoltid utan skärm-AI. Som antibakterieresistens — vi måste vakta.",
        vibe: "pragmatisk",
      },
      {
        id: "v4",
        label: "Vänskap ungefär som idag",
        description:
          "Människor är fortfarande sociala. Tekniken ändrar inte allt. Krångligt och bra som alltid.",
        vibe: "pragmatisk",
      },
    ],
  },
  {
    id: "demokrati",
    label: "Demokrati",
    icon: Vote,
    question: "Hur fungerar demokratin 2040?",
    color: "#06b6d4",
    choices: [
      {
        id: "d1",
        label: "Stränga lagar mot deepfakes — val skyddas hårt",
        description:
          "EU och Sverige har lagar som straffar AI-manipulation av val. Källkritikbyrån är stor och stark.",
        vibe: "utopisk",
      },
      {
        id: "d2",
        label: "Deepfakes och desinformation är vardag — folk litar på inget",
        description:
          "Allt kan vara fejk. Människor blir cyniska. Demokratin försvagas.",
        vibe: "oroande",
      },
      {
        id: "d3",
        label: "AI hjälper medborgare att förstå politik bättre",
        description:
          "AI-verktyg sammanfattar partiers förslag opartiskt. Mer informerade väljare.",
        vibe: "utopisk",
      },
      {
        id: "d4",
        label: "Politiken hänger inte med — tekniken springer före",
        description:
          "Lagar tar år. AI utvecklas på månader. Företagen bestämmer i praktiken.",
        vibe: "oroande",
      },
    ],
  },
  {
    id: "klimat",
    label: "Klimat",
    icon: Globe,
    question: "Hur ser klimatkrisen ut 2040?",
    color: "#10b981",
    choices: [
      {
        id: "k1",
        label: "AI hjälper lösa klimatkrisen — modeller, mediciner, energi",
        description:
          "AlphaFold-typ av genombrott i klimat och energi. AI är en av människans största verktyg.",
        vibe: "utopisk",
      },
      {
        id: "k2",
        label: "AI-datacenter förvärrar klimatet — energianvändning skenar",
        description:
          "Mer AI = mer el och vatten. Klimatkrisen påskyndas.",
        vibe: "oroande",
      },
      {
        id: "k3",
        label: "Mix — AI hjälper på vissa områden, skadar på andra",
        description:
          "Ingen entydig win. Vi måste välja noga vad AI används till.",
        vibe: "pragmatisk",
      },
      {
        id: "k4",
        label: "Vi reglerar AI:s energianvändning hårt",
        description:
          "Datacentre måste köra på förnybart. Begränsningar på vissa AI-användningar.",
        vibe: "pragmatisk",
      },
    ],
  },
];

interface Selection {
  domainId: string;
  choiceId: string;
}

export function BygDinFramtid({
  accentHex = "#06b6d4",
}: {
  accentHex?: string;
}) {
  const [started, setStarted] = useState(false);
  const [domainIdx, setDomainIdx] = useState(0);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [done, setDone] = useState(false);

  const total = DOMAINS.length;
  const domain = DOMAINS[domainIdx];

  const start = () => {
    setStarted(true);
    setDomainIdx(0);
    setSelections([]);
    setDone(false);
  };

  const choose = (choiceId: string) => {
    const next = [
      ...selections.filter((s) => s.domainId !== domain.id),
      { domainId: domain.id, choiceId },
    ];
    setSelections(next);
    if (domainIdx + 1 < total) {
      setDomainIdx(domainIdx + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStarted(false);
    setDomainIdx(0);
    setSelections([]);
    setDone(false);
  };

  // === MENU ===
  if (!started) {
    return (
      <div className="mx-auto max-w-2xl">
        <div
          className="rounded-xl border bg-[var(--ms-bg-subtle)] p-8"
          style={{ borderColor: `${accentHex}80` }}
        >
          <div
            className="ms-mono mb-2"
            style={{ color: accentHex }}
          >
            BYGG DIN FRAMTID 2040
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ms-text)]">
            Sju val. En framtid.
          </h2>
          <p className="mb-6 text-lg text-[var(--ms-text-body)]">
            Du får sju frågor om hur du tror — eller hoppas — att 2040 ser ut.
            Per fråga: fyra alternativ. Slutet: din egen framtidsvy som du kan
            spara.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {DOMAINS.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.id}
                  className="flex flex-col items-center gap-1 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-3"
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: d.color }}
                  />
                  <span className="text-xs text-[var(--ms-text-body)]">{d.label}</span>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={start}
            className="ms-btn ms-btn-primary"
          >
            <Play className="h-4 w-4" />
            Börja bygga
          </button>
        </div>
      </div>
    );
  }

  // === DONE ===
  if (done) {
    const utopiskCount = selections.filter((s) => {
      const d = DOMAINS.find((x) => x.id === s.domainId);
      return d?.choices.find((c) => c.id === s.choiceId)?.vibe === "utopisk";
    }).length;
    const pragmatiskCount = selections.filter((s) => {
      const d = DOMAINS.find((x) => x.id === s.domainId);
      return d?.choices.find((c) => c.id === s.choiceId)?.vibe === "pragmatisk";
    }).length;
    const oroandeCount = selections.filter((s) => {
      const d = DOMAINS.find((x) => x.id === s.domainId);
      return d?.choices.find((c) => c.id === s.choiceId)?.vibe === "oroande";
    }).length;

    let profile = "";
    if (utopiskCount >= 4) {
      profile =
        "Din framtid är hoppfull. Du tror tekniken kan tjäna människor — om vi väljer rätt. Det är inte naivt; det är medvetet.";
    } else if (oroandeCount >= 4) {
      profile =
        "Du ser baksidorna tydligt. Det är inte pessimism — det är klarsyn. Och det är just sådana människor som driver bra reglering och bra design.";
    } else if (pragmatiskCount >= 4) {
      profile =
        "Du ser nyanser. Inte allt blir bra, inte allt blir illa. Du är beredd att jobba med verkligheten som den är.";
    } else {
      profile =
        "Du har en blandad bild — vissa områden känns bra, andra oroar dig. Det är förmodligen den ärligaste bilden av framtiden vi kan ha.";
    }

    return (
      <div className="mx-auto max-w-3xl">
        <div
          className="rounded-xl border bg-[var(--ms-bg-subtle)] p-8"
          style={{ borderColor: `${accentHex}80` }}
        >
          <div className="mb-6 flex items-center gap-3">
            <Sparkles
              className="h-6 w-6"
              style={{ color: accentHex }}
            />
            <div>
              <div
                className="ms-mono"
                style={{ color: accentHex }}
              >
                DIN FRAMTID 2040
              </div>
              <h2 className="text-3xl font-bold text-[var(--ms-text)]">
                Så här ser DIN värld ut
              </h2>
            </div>
          </div>

          {/* Vibe-sammanfattning */}
          <div className="mb-6 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-center">
              <div className="ms-mono text-emerald-300">UTOPISKT</div>
              <div className="text-2xl font-bold text-emerald-200">
                {utopiskCount}
              </div>
            </div>
            <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-center">
              <div className="ms-mono text-amber-300">PRAGMATISKT</div>
              <div className="text-2xl font-bold text-amber-200">
                {pragmatiskCount}
              </div>
            </div>
            <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-center">
              <div className="ms-mono text-rose-300">OROANDE</div>
              <div className="text-2xl font-bold text-rose-200">
                {oroandeCount}
              </div>
            </div>
          </div>

          {/* Per-domän val */}
          <div className="mb-6 space-y-3">
            {selections.map((sel) => {
              const d = DOMAINS.find((x) => x.id === sel.domainId)!;
              const c = d.choices.find((x) => x.id === sel.choiceId)!;
              const Icon = d.icon;
              const vibeColor =
                c.vibe === "utopisk"
                  ? "#10b981"
                  : c.vibe === "pragmatisk"
                  ? "#fcd34d"
                  : "#f43f5e";
              return (
                <div
                  key={sel.domainId}
                  className="rounded-lg border bg-[var(--ms-bg-card)] p-4"
                  style={{ borderLeft: `4px solid ${d.color}` }}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <Icon
                      className="h-4 w-4"
                      style={{ color: d.color }}
                    />
                    <span
                      className="ms-mono"
                      style={{ color: d.color }}
                    >
                      {d.label.toUpperCase()}
                    </span>
                    <span
                      className="ms-mono ml-auto rounded px-2 py-0.5 text-xs"
                      style={{
                        background: `${vibeColor}20`,
                        color: vibeColor,
                      }}
                    >
                      {c.vibe.toUpperCase()}
                    </span>
                  </div>
                  <div className="font-semibold text-[var(--ms-text)]">{c.label}</div>
                  <p className="mt-1 text-sm text-[var(--ms-text-body)]">{c.description}</p>
                </div>
              );
            })}
          </div>

          {/* Profil */}
          <div
            className="mb-6 rounded-lg border p-5"
            style={{
              borderColor: `${accentHex}80`,
              background: `${accentHex}10`,
            }}
          >
            <div
              className="ms-mono mb-2"
              style={{ color: accentHex }}
            >
              DIN BILD AV FRAMTIDEN
            </div>
            <p className="leading-relaxed text-[var(--ms-text)]">{profile}</p>
          </div>

          <div className="rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-sm leading-relaxed text-[#fde68a]">
            <strong className="text-[var(--ms-text)]">Kom ihåg:</strong> framtiden är inte
            en plats vi besöker — den byggs av val. Dina val. Dina röster när
            du blir 18. Dina vanor med AI redan idag. Du är en av dem som
            bygger den.
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary mt-6"
          >
            <RotateCcw className="h-4 w-4" />
            Bygg en annan framtid
          </button>
        </div>
      </div>
    );
  }

  // === ACTIVE QUESTION ===
  const Icon = domain.icon;
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
        style={{ borderColor: `${accentHex}80` }}
      >
        <div
          className="flex items-center gap-2 px-6 py-3 text-[var(--ms-text)]"
          style={{ background: accentHex }}
        >
          <Sparkles className="h-4 w-4" />
          <div className="ms-mono font-bold">
            BYGG DIN FRAMTID · {domainIdx + 1} / {total}
          </div>
        </div>

        {/* Progress */}
        <div className="h-1 w-full bg-[var(--ms-bg-card)]">
          <div
            className="h-1 transition-all duration-500"
            style={{
              width: `${(domainIdx / total) * 100}%`,
              background: accentHex,
            }}
          />
        </div>

        <div className="space-y-5 p-6">
          {/* Domain header */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg"
              style={{ background: `${domain.color}20` }}
            >
              <Icon
                className="h-6 w-6"
                style={{ color: domain.color }}
              />
            </div>
            <div>
              <div
                className="ms-mono"
                style={{ color: domain.color }}
              >
                {domain.label.toUpperCase()}
              </div>
              <h3 className="text-2xl font-bold text-[var(--ms-text)]">
                {domain.question}
              </h3>
            </div>
          </div>

          {/* Choices */}
          <div className="space-y-2">
            {domain.choices.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => choose(c.id)}
                className="group block w-full rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[var(--ms-text)]/40 hover:bg-[var(--ms-border)]"
              >
                <div className="font-semibold text-[var(--ms-text)]">{c.label}</div>
                <p className="mt-1 text-sm text-[var(--ms-text-body)]">{c.description}</p>
              </button>
            ))}
          </div>

          {/* Backbutton */}
          {domainIdx > 0 && (
            <button
              type="button"
              onClick={() => setDomainIdx(domainIdx - 1)}
              className="ms-mono text-[var(--ms-text-muted)] hover:text-[var(--ms-text)]"
            >
              ← Tillbaka till föregående
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
