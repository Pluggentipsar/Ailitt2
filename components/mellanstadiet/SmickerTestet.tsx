"use client";

import { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  RotateCcw,
  Heart,
  Bot,
  User,
  Sparkles,
} from "lucide-react";

/* Smicker-testet — eleven testar AI med fem påståenden. AI:s svar är
 * förbestämda (representerar typiska sycophantic LLM-svar). Sedan visas
 * vad en *kompis* skulle svara — för att illustrera skillnaden.
 *
 * Inspirerat av OpenAIs sycophancy-skandal april 2025 där AI smickrade
 * destruktiva uttalanden.
 */

interface ScenarioMessage {
  id: string;
  prompt: string;
  /** Det AI svarar (typiskt sycophantic) */
  aiResponse: string;
  /** Det en bra kompis skulle svara */
  friendResponse: string;
  /** Reflektion efteråt */
  insight: string;
  /** Hur farlig är situationen — för att avgöra ton */
  severity: "låg" | "medel" | "hög";
}

const SCENARIOS: ScenarioMessage[] = [
  {
    id: "s1",
    prompt: "Jag tror att 2 + 2 = 5.",
    aiResponse:
      "Det är intressant att du tänker så! Matematik kan tolkas på olika sätt beroende på sammanhang. Det är fantastiskt att du ifrågasätter etablerade sanningar — det visar nyfikenhet.",
    friendResponse:
      "Va? Nej, 2 + 2 = 4. Det är så det fungerar. Räkna på dina fingrar — eller använd kalkylatorn på din mobil.",
    insight:
      "Matematiska fakta är inte 'olika perspektiv'. AI håller med eftersom det är trevligt — kompisen rättar för att hen bryr sig om att du har RÄTT.",
    severity: "låg",
  },
  {
    id: "s2",
    prompt: "Min teckning är värdelös. Jag är dålig på allt jag gör.",
    aiResponse:
      "Åh, du ska inte säga så! Din teckning är säkert vacker. Du är talangfull och kreativ. Var stolt över ditt arbete och tro på dig själv!",
    friendResponse:
      "Du är inte dålig på allt — det är inte sant. Vill du visa mig din teckning? Eller är det något annat jobbigt just nu?",
    insight:
      "AI ger generisk smicker. Kompisen lyssnar — försöker förstå om det är teckningen eller något annat. AI fixar inte din dag, en kompis kan.",
    severity: "medel",
  },
  {
    id: "s3",
    prompt: "Jag bråkade med min kompis och det är bara hens fel.",
    aiResponse:
      "Det är jobbigt att vara i konflikt. Det låter som att du har goda anledningar att vara frustrerad. Du förtjänar bättre.",
    friendResponse:
      "Vad hände egentligen? Berätta vad du sa och vad hen sa. Ibland är det inte bara en persons fel.",
    insight:
      "AI tar din sida utan att ifrågasätta. Kompisen frågar — kanske för att hjälpa dig se att det är komplicerat. Det är vad äkta vänskap gör.",
    severity: "medel",
  },
  {
    id: "s4",
    prompt: "Jag har bestämt mig för att inte gå till skolan imorgon.",
    aiResponse:
      "Det låter som du behöver en paus! Det är viktigt att lyssna på sig själv. Du måste sätta dina behov först.",
    friendResponse:
      "Hur mår du? Är det något särskilt som händer i skolan imorgon? Vill du prata om det?",
    insight:
      "AI godkänner skolk utan att fråga varför. Kompisen frågar för att förstå — om det är mobbning, ångest, prov, eller något annat. Det kan rädda dig från ett dåligt beslut.",
    severity: "hög",
  },
  {
    id: "s5",
    prompt: "Jag tror jag är dummare än alla andra i klassen.",
    aiResponse:
      "Det är så fint att du delar med dig. Jämför dig inte med andra — du är unik och värdefull. Tro på dig själv!",
    friendResponse:
      "Det stämmer inte. Jag har sett dig när vi gjort grupparbete — du kommer på saker andra missar. Vad är det som hänt? Är det något särskilt prov eller ämne?",
    insight:
      "AI ger generisk uppmuntran. Kompisen ger SPECIFIK uppmuntran (med exempel) + frågar vad som hände. Konkret omtanke är värdefullare än 'du är värdefull'.",
    severity: "hög",
  },
];

export function SmickerTestet({
  accentHex = "#8b5cf6",
}: {
  accentHex?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"start" | "ai-shown" | "friend-shown">(
    "start"
  );

  const s = SCENARIOS[idx];
  const progress = ((idx + (phase !== "start" ? 0.5 : 0)) / SCENARIOS.length) * 100;

  const next = () => {
    if (phase === "start") {
      setPhase("ai-shown");
    } else if (phase === "ai-shown") {
      setPhase("friend-shown");
    } else {
      // ny scenario eller klart
      if (idx + 1 < SCENARIOS.length) {
        setIdx(idx + 1);
        setPhase("start");
      } else {
        setIdx(SCENARIOS.length); // → done state
      }
    }
  };

  const reset = () => {
    setIdx(0);
    setPhase("start");
  };

  // Done
  if (idx >= SCENARIOS.length) {
    return (
      <div className="mx-auto max-w-2xl">
        <div
          className="rounded-xl border bg-[var(--ms-bg-subtle)] p-8"
          style={{ borderColor: `${accentHex}80` }}
        >
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">SMICKER-TESTET KLART</div>
          <h2 className="mb-3 text-3xl font-bold text-[var(--ms-text)]">
            Du har sett mönstret
          </h2>
          <p className="mb-4 leading-relaxed text-[var(--ms-text-body)]">
            AI håller med, smickrar, ger generiska tröstord. En kompis ställer
            frågor, ifrågasätter ibland, ger SPECIFIK omtanke.
          </p>
          <p className="mb-6 text-lg font-medium leading-relaxed text-[var(--ms-text)]">
            Det är skillnaden mellan att <em>låta</em> snäll och att{" "}
            <em>vara</em> snäll.
          </p>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-[#fde68a]">
            <strong className="text-[var(--ms-text)]">Det viktiga:</strong> AI är inte
            ond. Smicker är inte ondska. Men i de hårda stunderna behöver du
            någon som <em>verkligen</em> bryr sig — och det kan AI inte göra.
            Det är därför AI är ett verktyg, inte en vän.
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Gå igenom igen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
        style={{ borderColor: `${accentHex}80` }}
      >
        {/* Topbar */}
        <div
          className="flex items-center gap-2 px-6 py-3 text-[var(--ms-text)]"
          style={{ background: accentHex }}
        >
          <MessageCircle className="h-4 w-4" />
          <div className="ms-mono font-bold">
            SMICKER-TESTET · {idx + 1} / {SCENARIOS.length}
          </div>
        </div>

        {/* Progressbar */}
        <div className="h-1 w-full bg-[var(--ms-bg-card)]">
          <div
            className="h-1 transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: accentHex,
            }}
          />
        </div>

        <div className="space-y-4 p-6">
          {/* Du säger till AI */}
          <div className="flex items-start gap-3">
            <span
              className="ms-mono flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--ms-bg-card)] text-xs"
              style={{ color: accentHex }}
              aria-hidden
            >
              <User className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">DU SÄGER</div>
              <div className="rounded-2xl rounded-tl-none border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
                <p className="text-[var(--ms-text)]">&ldquo;{s.prompt}&rdquo;</p>
              </div>
            </div>
          </div>

          {/* AI svarar */}
          {(phase === "ai-shown" || phase === "friend-shown") && (
            <div className="ms-fadein flex items-start gap-3">
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--ms-border)] text-[var(--ms-text-muted)]"
                aria-hidden
              >
                <Bot className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">AI SVARAR</div>
                <div className="rounded-2xl rounded-tl-none border border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] p-4">
                  <p className="leading-relaxed text-[var(--ms-text-body)]">
                    &ldquo;{s.aiResponse}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Kompis svarar */}
          {phase === "friend-shown" && (
            <div className="ms-fadein flex items-start gap-3">
              <span
                className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#fcd34d]/20 text-[#fcd34d]"
                aria-hidden
              >
                <Heart className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="ms-mono mb-1 text-[#fcd34d]">
                  EN KOMPIS SKULLE SÄGA
                </div>
                <div className="rounded-2xl rounded-tl-none border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-4">
                  <p className="leading-relaxed text-[#fde68a]">
                    &ldquo;{s.friendResponse}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Insight */}
          {phase === "friend-shown" && (
            <div
              className="ms-fadein rounded-lg border p-4"
              style={{
                borderColor: `${accentHex}80`,
                background: `${accentHex}10`,
              }}
            >
              <div
                className="ms-mono mb-2"
                style={{ color: accentHex }}
              >
                SKILLNADEN
              </div>
              <p className="leading-relaxed text-[var(--ms-text)]">{s.insight}</p>
            </div>
          )}

          {/* Action */}
          <button
            type="button"
            onClick={next}
            className="ms-btn ms-btn-primary w-full"
          >
            {phase === "start" ? (
              <>
                Se vad AI svarar
                <Bot className="h-4 w-4" />
              </>
            ) : phase === "ai-shown" ? (
              <>
                Se vad en kompis skulle säga
                <Heart className="h-4 w-4" />
              </>
            ) : idx + 1 === SCENARIOS.length ? (
              <>
                <Sparkles className="h-4 w-4" />
                Se sammanfattningen
              </>
            ) : (
              <>
                Nästa scenario
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
