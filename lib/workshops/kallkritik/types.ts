// Typer för workshopen "AI och källkritik — mellanstadiet".
// Strukturen är medvetet platt så att aktiviteter blir lätta att söka, filtrera
// och rendera. Innehållet lagras som typade block i stället för markdown.

export type ChapterId =
  | "flodet"
  | "bygg-sjalv"
  | "hallucinationer"
  | "vannen"
  | "retoriska-knep"
  | "relationskritik"
  | "vaccinet"
  | "bias";

export type ActivityLevel =
  | "workshop-byggsten" // lärar-workshop-fokuserad, ofta med klassrumsversion
  | "startovning" // öppnar samtal, låg tröskel
  | "fordjupande" // analys, kräver mer
  | "prova-pa"; // kort, handlingsnära

export type AgeRange = "ak4-6" | "ak7-9" | "gymnasium" | "vuxen-workshop";

export type Skill =
  | "observation"
  | "kallkritik"
  | "detaljgranskning"
  | "algoritm-medvetenhet"
  | "systemforstaelse"
  | "teknisk-forstaelse"
  | "etisk-reflektion"
  | "prebunking"
  | "kritisk-lasning"
  | "faktagranskning"
  | "manipulationsmedvetenhet"
  | "designkritik"
  | "relationskritik"
  | "kroppslig-forstaelse"
  | "verktygsstrategi"
  | "sjalvreflektion"
  | "samtalskonst"
  | "bias-medvetenhet"
  | "retorisk-medvetenhet";

export const skillLabels: Record<Skill, string> = {
  observation: "Observation",
  kallkritik: "Källkritik",
  detaljgranskning: "Detaljgranskning",
  "algoritm-medvetenhet": "Algoritmmedvetenhet",
  systemforstaelse: "Systemförståelse",
  "teknisk-forstaelse": "Teknisk förståelse",
  "etisk-reflektion": "Etisk reflektion",
  prebunking: "Prebunking",
  "kritisk-lasning": "Kritisk läsning",
  faktagranskning: "Faktagranskning",
  manipulationsmedvetenhet: "Manipulationsmedvetenhet",
  designkritik: "Designkritik",
  relationskritik: "Relationskritik",
  "kroppslig-forstaelse": "Kroppslig förståelse",
  verktygsstrategi: "Verktygsstrategi",
  sjalvreflektion: "Självreflektion",
  samtalskonst: "Samtalskonst",
  "bias-medvetenhet": "Bias-medvetenhet",
  "retorisk-medvetenhet": "Retorisk medvetenhet",
};

export const levelLabels: Record<ActivityLevel, string> = {
  "workshop-byggsten": "Workshop-byggsten",
  startovning: "Startövning",
  fordjupande: "Fördjupande",
  "prova-pa": "Prova-på",
};

export const ageRangeLabels: Record<AgeRange, string> = {
  "ak4-6": "Åk 4–6",
  "ak7-9": "Åk 7–9",
  gymnasium: "Gymnasium",
  "vuxen-workshop": "Vuxenworkshop",
};

// Innehållsblock — typade för att kunna renderas konsekvent och printas snyggt.
export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "steps";
      steps: { title?: string; body: string; time?: string }[];
      // När man delar upp en stegsekvens i flera steps-block (t.ex. för att
      // skjuta in en callout med en prompt mellan steg 2 och 3) — sätt
      // startFromStep på efterföljande block så numreringen fortsätter
      // istället för att börja om från 1.
      startFromStep?: number;
    }
  | { type: "h"; text: string }
  | {
      type: "example";
      label?: string;
      user?: string;
      ai?: string;
      note?: string;
    }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "callout";
      tone: "warning" | "info" | "tip" | "note";
      title?: string;
      body: string;
    }
  | {
      // En eller flera inline-bilder. Renderas som responsiv grid — 1 bild = full
      // bredd, 2 bilder = 2 kolumner från sm, 3+ bilder = 3 kolumner från md.
      // Klickbara för zoom-vy (öppnar bilden i full skärm).
      type: "images";
      items: { src: string; alt: string; caption?: string }[];
      // Valfri intro-text som visas över raden av bilder.
      label?: string;
    }
  | {
      // Fält som läraren fyller i FÖRE lektionen — en egen formulering, ett
      // exempel ur den egna klassen, en länk till en bild att visa. Samma
      // block renderas i två skepnader:
      //   · i lärarhandledningen som ett redigerbart fält
      //   · i klassrumsläget som det ifyllda värdet, i slide-grad
      // Värdet sparas per övning i localStorage (se hooks/useLararfalt.ts).
      // Placeras där det hör hemma i handledningen, inte i en separat lista.
      type: "lararfalt";
      // Stabilt id inom övningen — nyckel i localStorage. Byt aldrig i efterhand.
      id: string;
      label: string;
      placeholder?: string;
      // Kort förklaring under fältet om vad som är en bra ifyllning.
      hint?: string;
      // Antal rader i textrutan. 1 = enkelrad (t.ex. en URL). Default 3.
      rader?: number;
      // Valfritt fält. Ett tomt obligatoriskt fält visar en uppmaning på
      // sliden ("… är inte ifyllt"); ett tomt valfritt fält tar bort sliden
      // helt. Använd för upprepade platser — t.ex. exempel 5 och 6 när
      // läraren bara förberett fyra.
      valfri?: boolean;
    }
  | {
      // En interaktiv komponent inbäddad som slide. För det fåtal moment där
      // interaktionen ÄR övningen och inte går att uttrycka som stegade
      // slides: live rösträkning, klickbara markeringar i en text, icke-
      // linjära flikar.
      //
      // Använd sparsamt. Ett moment som bara stegar fram innehåll ska vara
      // författade slides — motorn gör redan det, och slides får utskrift,
      // PowerPoint och lärarfält på köpet.
      type: "interaktiv";
      // Nyckel i komponentregistret, se interaktivRegistry.ts.
      komponent: string;
      // Vad utskrift och PowerPoint visar i stället — de kan inte bära
      // interaktion. Utan detta blir sliden tom i exporterna, vilket är
      // sämre än att inte ha den alls.
      statiskFallback: Block[];
      // Komponenten äger piltangenterna. Motorn hoppar då över sin egen
      // tangentnavigering medan sliden visas — läraren bläddrar vidare med
      // pilknapparna på skärmen i stället.
      agerTangentbord?: boolean;
    };

/**
 * En FÖRFATTAD klassrumsslide — blocken renderas TILLSAMMANS på en slide,
 * till skillnad från de autogenererade där varje block blir en egen.
 * Författaren sätter slidegränserna själv, vilket gör sekvenser möjliga som
 * autogenereringen inte kan uttrycka: en chattkonversation och frågan om den
 * på samma slide, eller ett facit som kommer först när läraren klickar dit.
 *
 * Kanonisk definition — bankens KlassrumSlide och presentationsmotorns
 * AuthoredSlide är alias till den här. Ligger i types.ts (inte slides.ts)
 * eftersom Activity nedan behöver den, och slides.ts importerar härifrån.
 */
export type KlassrumSlide = {
  /** Liten versal etikett över innehållet, t.ex. "Diskutera" eller "Titta". */
  etikett?: string;
  blocks: Block[];
  /**
   * Reservslide: visa BARA om lärarfältet med det id:t är tomt. Låter en
   * övning ha ett inbyggt exempel som gäller när läraren inte lagt in eget —
   * utan att båda visas. Skrivs som två slides där den valfria kommer först.
   */
  visaOm?: { faltTomt: string };
};

export type Chapter = {
  id: ChapterId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  // Färgnycklar matchar Tailwind-utilities som workshop-CSS:n definierar.
  tone:
    | "senap"
    | "terrakotta"
    | "havsblå"
    | "skog"
    | "lila"
    | "kol"
    | "plommon"
    | "rost";
  // Lucide-ikonnamn (string så datafilen är ren data, ikonen matchas i renderern)
  icon: string;
};

export type Activity = ActivityEnrichment & {
  id: string; // url-slug
  number: string; // "1.1", "1.2" osv (eller "ö1" för övningar)
  title: string;
  chapter: ChapterId;
  level: ActivityLevel;
  blurb: string; // kort sammanfattning till kort
  purpose: string;
  trains: Skill[];
  ageRanges: AgeRange[];
  duration: string;
  durationMinutes: number; // ungefärligt för filter ("snabb" < 20, "medel" 20-45, "lång" > 45)
  digitalTools: boolean;
  materials: string;
  warning?: string; // för deepfake-aktiviteter — visas tydligt
  // === Tre lägen === Skrivna ur olika perspektiv:
  // workshopExperience: vad LÄRAR-DELTAGAREN upplever själv i workshopen.
  //   Du-form, fokus på upplevelse och reflektion — INTE körinstruktioner.
  workshopExperience?: Block[];
  // teacherGuide: LÄRARHANDLEDNING för klassrummet. Förberedelser, ledarroll,
  //   varningar, tidsplan. Skriven till läraren-som-pedagog.
  teacherGuide?: Block[];
  // studentInstructions: ELEVINSTRUKTION — direkt tilltal till eleven.
  //   "Öppna SkolUp AI. Skriv detta. Klistra in. Skriv ner ditt svar."
  //   Designad för att läraren kopierar till Teams/Vklass eller visar på storskärm.
  studentInstructions?: Block[];
  // Genomgående metadata.
  discussion?: string[];
  pitfalls?: string[];
  variations?: string[];
  teacherNotes?: string;
};

export type ResourceTone = "warning" | "tools" | "plan" | "cards" | "parents" | "sources";

export type Resource = {
  id: string;
  title: string;
  blurb: string;
  icon: string;
  tone: ResourceTone;
};

// Extern tjänst eller övning som hör till aktiviteten — t.ex. en redan
// fungerande webb-baserad övning, en AI-tjänst som ska användas, eller en
// resurs på en annan sajt. Lyfts fram tydligt i en egen UI-sektion.
export type ExternalTool = {
  name: string;
  url: string;
  description: string;
  // Etikett som visas tydligt — "AI-tjänst", "Färdig övning", "Spel", "Inspirationskälla"
  kind?: "service" | "exercise" | "game" | "inspiration";
  // Flaggor för praktiska saker eleverna/läraren behöver veta
  requiresAccount?: boolean;
  notes?: string; // t.ex. "Kolla riktlinjer i din kommun"
};

// Evidens-anknytning per aktivitet — pekar mot evidence-library.ts.
// 'relevance' förklarar VAD just denna studie säger om just denna aktivitet
// (så läsaren slipper läsa hela rapporten för att förstå kopplingen).
export type EvidenceAnchor = {
  ref: string; // EvidenceKey från evidence-library.ts
  relevance: string;
};

export type EvidenceStrength = "strong" | "moderate" | "emerging";

// En fördjupningssektion i deepDive — fråga + utvecklat svar.
// Frågorna ska låta som om en lärare ställer dem ("Vad är hallucinationer?",
// "Hur ska jag förklara det här för eleverna?") så accordionen känns inbjudande.
export type DeepDiveSection = {
  question: string;
  answer: Block[];
};

// deepDive — för dig som lärare som vill läsa mer än vad övningen kräver:
// vad fenomenet är, varför det händer, vad det betyder för skolan, hur
// man undervisar om det. Renderas som accordion på aktivitetssidan.
export type DeepDive = {
  intro?: string; // kort förklaring av varför läraren bör läsa fördjupningen
  sections: DeepDiveSection[];
};

// Fält som lagts till efter genomgång av Manning (2025) Education Agent Skills.
// Alla är optional — vi fyller på där det är vettigt.
export type ActivityEnrichment = {
  evidenceSources?: EvidenceAnchor[];
  evidenceStrength?: EvidenceStrength;
  // Aktiviteter som naturligt följer på denna — t.ex. "när detta gett aha,
  // ta nästa steg med X". Pekar på activity.id.
  chainsWellWith?: string[];
  // Konkret think-aloud-skript som läraren kan läsa upp för att modellera
  // övningen för eleverna. Skrivet som direkt tal. Inspirerat av
  // teacher_modelling_script i Manning-skills.
  teacherModellingScript?: string;
  // Fördjupande text om fenomenet. Bygger upp lärarens kunskap så att hen
  // kan möta elevernas följdfrågor och förklara varför vi gör övningen.
  deepDive?: DeepDive;
  // Externa tjänster/övningar som hör till aktiviteten.
  externalTools?: ExternalTool[];
  // Läge 4 (valfritt) — författade slides för projektorn. Sätts bara när
  // projektionen behöver vara något annat än elevinstruktionen renderad som
  // slides: en stegad sekvens där facit hålls tillbaka, lärarens egna
  // ifyllningar visas, eller slidegränserna behöver sättas för hand.
  // Saknas den faller storskärmen tillbaka på de tre vanliga lägena.
  klassrum?: KlassrumSlide[];
};
