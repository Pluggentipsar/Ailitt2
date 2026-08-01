/**
 * Workshop-tonernas mjuka bakgrunder, på ett ställe.
 *
 * Samma mappning fanns tidigare på två ställen i två former: en sju nivåer
 * djup ternärkedja i ActivityCard och en uppslagstabell i föreläsningssidan.
 * Två representationer behövs — en komponent sätter `style.background`, en
 * annan sätter en Tailwind-klass — men de ska deklareras bredvid varandra så
 * att en ny ton inte kan läggas till på det ena stället och glömmas på det
 * andra.
 *
 * `kol` saknar mjuk variant i workshop-CSS:en. Den faller därför tillbaka på
 * en neutral sten-ton, vilket är vad ternärkedjan gjorde före flytten.
 */

import type { Chapter } from "@/lib/workshops/kallkritik/types";

type Ton = Chapter["tone"];

/** Reservfärg för toner utan egen mjuk variant (stone-300). */
export const TON_RESERV = "#d6d3d1";

/** För style-attribut: färdigt CSS-värde. */
export const TON_BAKGRUND: Record<Ton, string> = {
  senap: "var(--workshop-senap-soft)",
  terrakotta: "var(--workshop-terrakotta-soft)",
  havsblå: "var(--workshop-havsblå-soft)",
  skog: "var(--workshop-skog-soft)",
  lila: "var(--workshop-lila-soft)",
  plommon: "var(--workshop-plommon-soft)",
  rost: "var(--workshop-rost-soft)",
  kol: TON_RESERV,
};

/** För className: Tailwind-utility som workshop-CSS:en definierar. */
export const TON_KLASS: Record<Ton, string> = {
  senap: "bg-workshop-senap-soft",
  terrakotta: "bg-workshop-terrakotta-soft",
  havsblå: "bg-workshop-havsblå-soft",
  skog: "bg-workshop-skog-soft",
  lila: "bg-workshop-lila-soft",
  plommon: "bg-workshop-plommon-soft",
  rost: "bg-workshop-rost-soft",
  kol: "bg-stone-300",
};
