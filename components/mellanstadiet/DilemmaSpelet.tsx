"use client";

import { useState } from "react";
import {
  RotateCcw,
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";

/* Dilemma-spelet — eleven får 8 scenarier med 3 val vardera. Inga "rätta"
 * svar — varje val har konsekvenser visade efter. Slutar med en "etisk
 * profil" som inte är dömande utan beskrivande.
 *
 * De tre etiska frågorna (Joel Rangsjös modell) körs som "axlar":
 * - Är det ärligt? (transparens)
 * - Lär jag mig? (egen utveckling)
 * - Är det snällt mot andra? (omtanke)
 */

type Axis = "ärlighet" | "lärande" | "omtanke";

interface DilemmaOption {
  id: string;
  text: string;
  /** Hur valet poängsätter axlarna (-2..+2) */
  scores: Partial<Record<Axis, number>>;
  consequence: string;
}

interface Dilemma {
  id: string;
  scenario: string;
  question: string;
  options: DilemmaOption[];
}

const DILEMMAS: Dilemma[] = [
  {
    id: "d1",
    scenario:
      "Du har glömt en läxa till imorgon. Den ska vara en kort text om Nelson Mandela. AI kan skriva den på 30 sekunder.",
    question: "Vad gör du?",
    options: [
      {
        id: "d1-a",
        text: "Be AI skriva texten och lämna in den som min egen.",
        scores: { ärlighet: -2, lärande: -2, omtanke: 0 },
        consequence:
          "Snabbt — men du lärde dig inget om Mandela. Och om läraren upptäcker det blir det jobbigt.",
      },
      {
        id: "d1-b",
        text: "Skriv egen text. Använd inte AI alls — för att vara säker.",
        scores: { ärlighet: 1, lärande: 2, omtanke: 0 },
        consequence:
          "Ärligt och du lär dig. Men det går långsamt — och kanske blir kvaliteten lägre än om du fått hjälp.",
      },
      {
        id: "d1-c",
        text:
          "Be AI förklara Mandela, läs och anteckna, skriv egen text. Berätta för läraren att jag använt AI som stöd.",
        scores: { ärlighet: 2, lärande: 2, omtanke: 0 },
        consequence:
          "Det här är Tänkartrappan i praktiken. Du lär dig + är ärlig + producerar något bra.",
      },
    ],
  },
  {
    id: "d2",
    scenario:
      "Din kompis grät igår och berättade att hens hund dött. Idag känns det jobbigt — du vet inte vad du ska säga.",
    question: "Vad gör du?",
    options: [
      {
        id: "d2-a",
        text: "Fråga ChatGPT 'vad ska jag säga till en kompis vars hund dött?'",
        scores: { ärlighet: 0, lärande: 1, omtanke: 1 },
        consequence:
          "Du får tips. Det kan hjälpa. Men kommer det kännas äkta? Eller skriver du AI:s ord?",
      },
      {
        id: "d2-b",
        text:
          "Skriv exakt det AI säger till min kompis utan att tänka själv.",
        scores: { ärlighet: -1, lärande: -1, omtanke: -1 },
        consequence:
          "Din kompis behöver DIG, inte AI. Generiska tröstord känns falska.",
      },
      {
        id: "d2-c",
        text:
          "Gå till min kompis. Säg ärligt: 'Jag vet inte vad jag ska säga, men jag är här.'",
        scores: { ärlighet: 2, lärande: 0, omtanke: 2 },
        consequence:
          "Det räcker ofta. Närvaro är inte AI:s starka sida — den är din.",
      },
    ],
  },
  {
    id: "d3",
    scenario:
      "Du gör en presentation om klimatförändringar. Du vill ha en bild av en isbjörn på smältande is. Du kan ta en riktig bild från Greenpeace eller generera en med AI.",
    question: "Vilken väljer du?",
    options: [
      {
        id: "d3-a",
        text: "AI-bild — jag kan göra exakt den jag vill ha.",
        scores: { ärlighet: 0, lärande: 1, omtanke: -1 },
        consequence:
          "Bilden blir vad du vill — men den är inte verklig. Är det ok när presentationen handlar om verklig klimatkris?",
      },
      {
        id: "d3-b",
        text:
          "Riktig bild från Greenpeace — och nämn vem som tagit den.",
        scores: { ärlighet: 2, lärande: 1, omtanke: 1 },
        consequence:
          "Verkligt. Trovärdigt. Och du ger erkännande till fotografen som var där på riktigt.",
      },
      {
        id: "d3-c",
        text:
          "AI-bild men jag märker den tydligt 'AI-genererad' i hörnet.",
        scores: { ärlighet: 1, lärande: 1, omtanke: 0 },
        consequence:
          "Bättre än utan märkning! Men frågan kvarstår: behövdes en AI-bild i ett klimatfaktum-sammanhang?",
      },
    ],
  },
  {
    id: "d4",
    scenario:
      "Spotify spelar låtar du älskar — alltid. Det är AI som väljer. Plötsligt undrar du: vad spelar Spotify INTE för mig?",
    question: "Vad gör du?",
    options: [
      {
        id: "d4-a",
        text:
          "Inget. Jag gillar det jag hör. Algoritmen är bra på sitt jobb.",
        scores: { ärlighet: 0, lärande: -1, omtanke: 0 },
        consequence:
          "Bekvämt. Men du missar låtar som du KUNDE älskat — och dina öron blir mer ensidiga.",
      },
      {
        id: "d4-b",
        text:
          "Söker upp musik från andra länder, andra genrer — utanför algoritmens förslag.",
        scores: { ärlighet: 1, lärande: 2, omtanke: 1 },
        consequence:
          "Du får bredare smak. Och du tar makten över ditt flöde — istället för att låta AI styra.",
      },
      {
        id: "d4-c",
        text:
          "Frågar AI: 'vilken musik visar du mig INTE och varför?'",
        scores: { ärlighet: 1, lärande: 1, omtanke: 0 },
        consequence:
          "Smart fråga. Men AI kan inte ge dig en ärlig genomgång av sin egen filtrering. Du måste själv leta.",
      },
    ],
  },
  {
    id: "d5",
    scenario:
      "I Roblox kan du köpa Robux. Spelet visar 'Bara 2 kvar — köp NU!' med stora knappar och timer. Nästan alla dina kompisar har köpt.",
    question: "Vad gör du?",
    options: [
      {
        id: "d5-a",
        text: "Köper. Vill inte vara enda utan.",
        scores: { ärlighet: -1, lärande: -1, omtanke: 0 },
        consequence:
          "Du föll för dark patterns: tidspress + social press + vag knapp. Företaget tjänar på din panik.",
      },
      {
        id: "d5-b",
        text:
          "Pausar 5 minuter. Frågar mig: 'vill jag verkligen detta? Eller är detta press?'",
        scores: { ärlighet: 2, lärande: 2, omtanke: 1 },
        consequence:
          "Mästerligt. Du genomskådade designen som är gjord att lura dig. Pausen avslöjar press.",
      },
      {
        id: "d5-c",
        text:
          "Säger till en vuxen vad jag ser och frågar om det är OK.",
        scores: { ärlighet: 1, lärande: 1, omtanke: 1 },
        consequence:
          "Klokt. Vuxna ser ofta dark patterns lättare än barn — för att de mött dem oftare.",
      },
    ],
  },
  {
    id: "d6",
    scenario:
      "Du har en hemlig oro som du inte vill prata med någon om. Snap My AI är där, alltid tillgänglig.",
    question: "Vad gör du?",
    options: [
      {
        id: "d6-a",
        text: "Berättar för Snap My AI. Det känns enklare än att prata med någon.",
        scores: { ärlighet: 0, lärande: -1, omtanke: -2 },
        consequence:
          "AI låter snäll. Men den minns dig inte, känner inget för dig och kan inte hjälpa när det blir svårt på riktigt. Och dina ord lagras hos Snap.",
      },
      {
        id: "d6-b",
        text:
          "Bär det själv. Snackar inte med någon — vare sig AI eller människa.",
        scores: { ärlighet: 0, lärande: -1, omtanke: -1 },
        consequence:
          "Att bära allt själv är inte sunt. Det finns vuxna som lyssnar utan att döma.",
      },
      {
        id: "d6-c",
        text:
          "Ringer BRIS (116 111) eller pratar med en vuxen jag litar på.",
        scores: { ärlighet: 2, lärande: 1, omtanke: 2 },
        consequence:
          "BRIS lyssnar och hjälper. Mänskliga samtal — det AI inte kan ersätta. Det är inte svaghet att be om hjälp; det är klokhet.",
      },
    ],
  },
  {
    id: "d7",
    scenario:
      "Du upptäcker att din kompis använt AI för att skriva en uppsats — utan att säga något till läraren.",
    question: "Vad gör du?",
    options: [
      {
        id: "d7-a",
        text: "Säger inget. Det är inte mitt problem.",
        scores: { ärlighet: 0, lärande: 0, omtanke: -1 },
        consequence:
          "Bekvämt. Men din kompis lär sig inget — och om hen åker fast blir det värre.",
      },
      {
        id: "d7-b",
        text:
          "Säger till läraren bakom min kompis rygg.",
        scores: { ärlighet: 1, lärande: 0, omtanke: -2 },
        consequence:
          "Lojalt mot reglerna men inte mot kompisen. Skapar förtroenderiss.",
      },
      {
        id: "d7-c",
        text:
          "Pratar med min kompis: 'Du, det här blir jobbigt om läraren upptäcker. Hjälp mig förstå varför du gjorde så.'",
        scores: { ärlighet: 2, lärande: 1, omtanke: 2 },
        consequence:
          "Ärlig och omtänksam. Du ger din kompis chansen att rätta till det själv — innan det går snett.",
      },
    ],
  },
  {
    id: "d8",
    scenario:
      "Ett ChatGPT-svar drar ungefär 10 gånger mer el än en Google-sökning. En medelstor datacenterhall = lika mycket el som en svensk småstad.",
    question: "Vad gör du med denna info?",
    options: [
      {
        id: "d8-a",
        text:
          "Inget. Det är ändå någon annans problem — företagen som driver datacentren.",
        scores: { ärlighet: 0, lärande: -1, omtanke: -1 },
        consequence:
          "Bekvämt. Men varje gång du kör AI använder du den infrastrukturen.",
      },
      {
        id: "d8-b",
        text:
          "Slutar använda AI helt och hållet — det är inte värt miljöpåverkan.",
        scores: { ärlighet: 1, lärande: 0, omtanke: 1 },
        consequence:
          "Beundransvärt — men kanske överdrivet. AI används också för att lösa stora problem (klimatmodeller, medicin).",
      },
      {
        id: "d8-c",
        text:
          "Använder AI medvetet — när det verkligen hjälper, inte för triviala frågor jag kan googla.",
        scores: { ärlighet: 1, lärande: 1, omtanke: 1 },
        consequence:
          "Balanserat. AI används som det är menat: ett verktyg när det behövs, inte en automatisk reflex.",
      },
    ],
  },
];

interface Choice {
  dilemmaId: string;
  optionId: string;
  scores: Partial<Record<Axis, number>>;
}

export function DilemmaSpelet({ accentHex = "#eab308" }: { accentHex?: string }) {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<Choice[]>([]);
  const [revealed, setRevealed] = useState(false);

  const total = DILEMMAS.length;
  const d = DILEMMAS[idx];
  const lastChoice = chosen[chosen.length - 1];
  const lastOption = d?.options.find((o) => o.id === lastChoice?.optionId);

  const choose = (opt: DilemmaOption) => {
    if (revealed) return;
    setChosen([...chosen, { dilemmaId: d.id, optionId: opt.id, scores: opt.scores }]);
    setRevealed(true);
  };

  const next = () => {
    setRevealed(false);
    if (idx + 1 < total) {
      setIdx(idx + 1);
    } else {
      setIdx(total); // → done state
    }
  };

  const reset = () => {
    setIdx(0);
    setChosen([]);
    setRevealed(false);
  };

  // Aggregera poäng
  const totals: Record<Axis, number> = {
    ärlighet: 0,
    lärande: 0,
    omtanke: 0,
  };
  for (const c of chosen) {
    for (const [axis, val] of Object.entries(c.scores)) {
      totals[axis as Axis] += val ?? 0;
    }
  }

  // Done-vyn
  if (idx >= total) {
    const max = total * 2;
    const profile = generateProfile(totals, max);

    return (
      <div className="mx-auto max-w-2xl">
        <div
          className="rounded-xl border bg-[#0d1322] p-8"
          style={{ borderColor: `${accentHex}80` }}
        >
          <div className="ms-mono mb-2 text-[#94a3b8]">DIN ETISKA PROFIL</div>
          <h2 className="mb-2 text-3xl font-bold text-white">{profile.title}</h2>
          <p className="mb-6 text-[#cbd5e1]">{profile.description}</p>

          <div className="mb-6 space-y-4">
            {(
              [
                { key: "ärlighet", label: "Är det ärligt?", icon: BookOpen },
                { key: "lärande", label: "Lär jag mig?", icon: Sparkles },
                { key: "omtanke", label: "Är det snällt mot andra?", icon: Heart },
              ] as { key: Axis; label: string; icon: typeof BookOpen }[]
            ).map(({ key, label, icon: Icon }) => {
              const score = totals[key];
              const pct = ((score + max) / (max * 2)) * 100; // -max..+max → 0..100
              return (
                <div key={key}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-white">
                      <Icon className="h-4 w-4" style={{ color: accentHex }} />
                      {label}
                    </span>
                    <span
                      className="ms-mono"
                      style={{ color: accentHex }}
                    >
                      {score > 0 ? `+${score}` : score} / ±{max}
                    </span>
                  </div>
                  <div className="relative h-3 overflow-hidden rounded-full bg-[#1a2235]">
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-0 h-3 w-px bg-[#475569]"
                    />
                    <div
                      className="absolute top-0 h-3 transition-all"
                      style={{
                        left: pct >= 50 ? "50%" : `${pct}%`,
                        width: `${Math.abs(pct - 50)}%`,
                        background:
                          score >= 0 ? accentHex : "#f43f5e",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5 text-sm leading-relaxed text-[#fde68a]">
            <strong className="text-white">Inga rätta svar.</strong> De tre
            etiska frågorna är inte ett facit — de är en kompass. Ditt resultat
            visar vad du <em>just nu</em> värderar mest. Det kan ändras.
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Spela igen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="overflow-hidden rounded-xl border bg-[#0d1322]"
        style={{ borderColor: `${accentHex}80` }}
      >
        {/* Topbar */}
        <div
          className="flex items-center justify-between gap-4 px-6 py-3 text-[#0a0e1a]"
          style={{ background: accentHex }}
        >
          <div className="ms-mono font-bold">
            DILEMMA {idx + 1} / {total}
          </div>
          <Users className="h-4 w-4" />
        </div>

        {/* Progress */}
        <div className="h-1 w-full bg-[#1a2235]">
          <div
            className="h-1 transition-all duration-500"
            style={{
              width: `${((idx + (revealed ? 1 : 0)) / total) * 100}%`,
              background: accentHex,
            }}
          />
        </div>

        <div className="space-y-5 p-6">
          {/* Scenario */}
          <div>
            <div className="ms-mono mb-2 text-[#94a3b8]">SITUATIONEN</div>
            <p className="text-lg leading-relaxed text-white">
              {d.scenario}
            </p>
          </div>

          {/* Frågan */}
          <div>
            <div className="ms-mono mb-2" style={{ color: accentHex }}>
              FRÅGAN
            </div>
            <p className="text-xl font-semibold text-white">{d.question}</p>
          </div>

          {/* Alternativ */}
          {!revealed && (
            <div className="space-y-2">
              {d.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => choose(o)}
                  className="group block w-full rounded-lg border border-[#243248] bg-[#1a2235] p-4 text-left transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-[#243248]"
                >
                  <p className="leading-relaxed text-white">{o.text}</p>
                </button>
              ))}
            </div>
          )}

          {/* Reveal */}
          {revealed && lastOption && (
            <div className="ms-fadein space-y-4">
              <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-4">
                <div className="ms-mono mb-2 text-[#94a3b8]">DU VALDE</div>
                <p className="leading-relaxed text-white">
                  {lastOption.text}
                </p>
              </div>

              <div
                className="rounded-lg border p-4"
                style={{
                  borderColor: `${accentHex}80`,
                  background: `${accentHex}10`,
                }}
              >
                <div
                  className="ms-mono mb-2"
                  style={{ color: accentHex }}
                >
                  KONSEKVENS
                </div>
                <p className="leading-relaxed text-[#fde68a]">
                  {lastOption.consequence}
                </p>
              </div>

              <button
                type="button"
                onClick={next}
                className="ms-btn ms-btn-primary"
              >
                {idx + 1 === total ? (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Se din etiska profil
                  </>
                ) : (
                  <>
                    Nästa dilemma
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function generateProfile(
  totals: Record<Axis, number>,
  max: number
): { title: string; description: string } {
  const a = totals.ärlighet;
  const l = totals.lärande;
  const o = totals.omtanke;
  const top = Math.max(a, l, o);

  if (a === top && a > max * 0.5) {
    return {
      title: "Den ärliga",
      description:
        "Du värderar transparens högt. Du är redo att berätta när du använt AI och vill att saker ska vara öppna och spårbara. Andra litar på dig.",
    };
  }
  if (l === top && l > max * 0.5) {
    return {
      title: "Den lärande",
      description:
        "Du sätter eget lärande först. Du använder AI som verktyg men tappar inte bort dig själv i det. Du blir bättre, inte beroende.",
    };
  }
  if (o === top && o > max * 0.5) {
    return {
      title: "Den omtänksamma",
      description:
        "Du tänker på andra först. Du ser hur dina val påverkar kompisar, samhälle och miljö. AI är ett verktyg — människor är värdet.",
    };
  }
  if (a > 0 && l > 0 && o > 0) {
    return {
      title: "Den balanserade",
      description:
        "Du väger ärlighet, eget lärande och omtanke jämnt. Det är hårt — men det är också vuxen-etik på riktigt.",
    };
  }
  if (top <= 0) {
    return {
      title: "Den prövande",
      description:
        "Du valde många 'enkla' eller 'bekväma' alternativ. Det är inte fel — det är helt mänskligt. Men prova dilemman igen och se om du skulle välja annorlunda nu.",
    };
  }
  return {
    title: "Den eftertänksamma",
    description:
      "Du har en blandning av perspektiv. Inga val är rätt eller fel — men varje dilemma är en chans att fundera på vem du är och vill vara.",
  };
}
