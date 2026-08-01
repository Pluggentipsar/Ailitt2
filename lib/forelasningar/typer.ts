// Delade typer för läsversioner av föreläsningar.
//
// Källkritik-föreläsningen har egna, strukturellt identiska typer i
// lib/workshops/kallkritik/forelasningen.ts. De lämnas orörda tills vidare —
// TypeScript är strukturellt typat, så ForelasningTOC och läsvyn tar emot
// båda. Nya föreläsningar använder de här.

export type SlideTon =
  | "senap"
  | "havsblå"
  | "lila"
  | "skog"
  | "kol"
  | "rost"
  | "plommon"
  | "terrakotta";

export type Slide = {
  /** Slug för ankarlänkning från innehållsförteckningen. */
  id: string;
  /**
   * Bildens nummer i den deployade presentationen — styr iframe-URL:en.
   *
   * VIKTIGT: numren är kalibrerade mot den faktiska deployen, inte mot
   * MDX-källans kapitelkommentarer. Overlay-element (FloatingImage,
   * FloatingText) räknas INTE som egna bilder. Lägger man till en bild i
   * mitten av decket förskjuts allt efter den.
   */
  index: number;
  /** Kapiteltagg från originalet (§ …). Liten etikett i läsvyn. */
  chapter?: string;
  /** Bildens rubrik. */
  heading?: string;
  /** Det typografiskt framhävda: ett citat, en tes, en prompt. */
  display?: string;
  /** Källa till citat eller siffra. */
  attribution?: string;
  /** Punkter från bilden. */
  bullets?: string[];
  /** Läsversionens brödtext — vad bilden gör, i prosa. */
  summary: string;
  /** Talmanus ur originalets <Notes>, där det tillför något för läsaren. */
  notes?: string;
  /** Länkar vidare till övningar som tar konceptet till klassrummet. */
  linkedActivities?: { id: string; label: string; href: string }[];
};

export type Act = {
  id: string;
  /** "Prologen", "01", "02" … */
  number: string;
  title: string;
  tone: SlideTon;
  /** Läsversionens introduktion till akten. */
  intro: string;
  slides: Slide[];
};

export type Forelasning = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  event: string;
  duration: string;
  /** Bas-URL till deployen. Varje bild laddas som iframe med ?slide=N. */
  presenterBaseUrl: string;
  intro: string;
  acts: Act[];
};
