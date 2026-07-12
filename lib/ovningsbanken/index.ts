// AI-övningsbanken — samlad ingång.
// Tre källor: de sju metoderna från "Detta behöver eleverna veta om AI",
// bankens egna nyskrivna övningar, och källkritik-workshopens aktiviteter
// (via adapter). Id:n är unika över hela banken.

import type { BankOvning, KureradSpellista } from "./types";
import { metoderFranEleverna } from "./metoder";
import { kallkritikOvningar } from "./kallkritik-adapter";

// Typer + DOMAN_META exponeras via index-filen så att UI-lagret bara
// behöver importera från @/lib/ovningsbanken.
export * from "./types";

import { ovning as aiLasteAldrigKallan } from "./ovningar/ai-laste-aldrig-kallan";
import { ovning as sykofantiTestet } from "./ovningar/sykofanti-testet";
import { ovning as detektivUtanDetektor } from "./ovningar/detektiv-utan-detektor";
import { ovning as startmeningarna } from "./ovningar/startmeningarna";
import { ovning as promptStafetten } from "./ovningar/prompt-stafetten";
import { ovning as byggQuizet } from "./ovningar/bygg-quizet";
import { ovning as aiEllerInteSorteringen } from "./ovningar/ai-eller-inte-sorteringen";
import { ovning as nandoVeckan } from "./ovningar/nando-veckan";
import { ovning as uppgiftsdekompositionen } from "./ovningar/uppgiftsdekompositionen";
import { ovning as tranaKlassensAi } from "./ovningar/trana-klassens-ai";
import { ovning as namnbytet } from "./ovningar/namnbytet";
import { ovning as modelCardForSkolansAi } from "./ovningar/model-card-for-skolans-ai";
import { ovning as slappAgenten } from "./ovningar/slapp-agenten";
import { ovning as vadVetChattenOmDig } from "./ovningar/vad-vet-chatten-om-dig";
import { ovning as aiFriaKontrollpunkter } from "./ovningar/ai-fria-kontrollpunkter";
import { ovning as aiRaknarFelMedSjalvfortroende } from "./ovningar/ai-raknar-fel-med-sjalvfortroende";
import { ovning as treSattAttLasa } from "./ovningar/tre-satt-att-lasa";
import { ovning as prataDigTillKunskap } from "./ovningar/prata-dig-till-kunskap";
import { ovning as aiSomFemteGruppmedlem } from "./ovningar/ai-som-femte-gruppmedlem";
import { ovning as trafikljusSkrivprocessen } from "./ovningar/trafikljus-skrivprocessen";
import { ovning as robotEllerManniska } from "./ovningar/robot-eller-manniska";
import { ovning as stilstolden } from "./ovningar/stilstolden";
import { ovning as turistguiden } from "./ovningar/turistguiden";
import { ovning as klassensAiPolicy } from "./ovningar/klassens-ai-policy";

export const nyaOvningar: BankOvning[] = [
  aiLasteAldrigKallan,
  sykofantiTestet,
  detektivUtanDetektor,
  startmeningarna,
  promptStafetten,
  byggQuizet,
  aiEllerInteSorteringen,
  nandoVeckan,
  uppgiftsdekompositionen,
  tranaKlassensAi,
  namnbytet,
  modelCardForSkolansAi,
  slappAgenten,
  vadVetChattenOmDig,
  aiFriaKontrollpunkter,
  aiRaknarFelMedSjalvfortroende,
  treSattAttLasa,
  prataDigTillKunskap,
  aiSomFemteGruppmedlem,
  trafikljusSkrivprocessen,
  robotEllerManniska,
  stilstolden,
  turistguiden,
  klassensAiPolicy,
];

export const ovningar: BankOvning[] = [
  ...metoderFranEleverna,
  ...nyaOvningar,
  ...kallkritikOvningar,
];

export const ovningarById = Object.fromEntries(
  ovningar.map((o) => [o.id, o])
) as Record<string, BankOvning>;

// Kurerade spellistor — delbara som /ovningsbanken/spellista?steps=id1,id2
export const KURERADE_SPELLISTOR: KureradSpellista[] = [
  {
    id: "workshop-eleverna-om-ai",
    namn: "Workshopen: Detta behöver eleverna veta om AI",
    beskrivning: "De sju metoderna från föreläsningen, i ordning.",
    steg: [
      "goblin-glitch",
      "chatt-safarin",
      "forhors-ai",
      "fyra-grepp",
      "hemligt-losenord",
      "vems-siffror",
      "framtidssamtalet",
    ],
  },
  {
    id: "kallkritik-klassikern",
    namn: "Källkritik-klassikern",
    beskrivning: "Fyra beprövade källkritikövningar — cirka en lektion.",
    steg: [
      "granska-ditt-flode",
      "hallucinationsjakten",
      "vem-dyker-upp",
      "bad-news-game",
    ],
  },
  {
    id: "snabbstart-utan-teknik",
    namn: "Snabbstart: utan teknik",
    beskrivning: "Fyra övningar som inte kräver en enda inloggning.",
    steg: [
      "goblin-glitch",
      "hemligt-losenord",
      "ai-eller-inte-sorteringen",
      "trana-klassens-ai",
    ],
  },
  {
    id: "sykofanti-paketet",
    namn: "Sykofanti-paketet",
    beskrivning: "Varför AI:n håller med dig — och hur eleverna genomskådar det.",
    steg: [
      "sykofanti-testet",
      "chatt-safarin",
      "testa-sykofantiskt-ai",
      "be-om-motstandet",
    ],
  },
  {
    id: "lagstadiet-forsta-motet",
    namn: "Lågstadiets första möte med AI",
    beskrivning: "Skärmfritt och lekfullt — för F–3 och mellanstadiet.",
    steg: ["robot-eller-manniska", "trana-klassens-ai", "hemligt-losenord"],
  },
  {
    id: "amnesrummet",
    namn: "Ämnesrummet",
    beskrivning:
      "Övningar som är byggda för ditt ämne — matte, svenska, språk, bild.",
    steg: [
      "ai-raknar-fel-med-sjalvfortroende",
      "trafikljus-skrivprocessen",
      "prata-dig-till-kunskap",
      "stilstolden",
    ],
  },
];

// Dev-validering: varje spellistesteg och kedjarMed-id måste finnas i banken.
// Körs inte i produktion — men fångar döda id:n direkt vid utveckling.
if (process.env.NODE_ENV !== "production") {
  const kanda = new Set(ovningar.map((o) => o.id));
  for (const lista of KURERADE_SPELLISTOR) {
    for (const steg of lista.steg) {
      if (!kanda.has(steg)) {
        console.warn(
          `[ovningsbanken] Spellistan "${lista.id}" pekar på okänt övnings-id: "${steg}"`
        );
      }
    }
  }
  for (const o of ovningar) {
    for (const ref of o.kedjarMed ?? []) {
      if (!kanda.has(ref)) {
        console.warn(
          `[ovningsbanken] "${o.id}" kedjarMed okänt övnings-id: "${ref}"`
        );
      }
    }
  }
}
