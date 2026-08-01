import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Kort — sajtens kortprimitiv.
 *
 * Bakgrund: fyra komponenter ritade "samma" kort med olika fysik. Alla hade
 * rounded-2xl och vit bakgrund, men viloskuggan var shadow-lg, ingen, shadow-sm
 * och shadow-sm; hover-lyftet var 1, 0.5, 0.5 och 1; hover-skuggan 2xl, md, lg
 * och md. Formen var alltså redan gemensam — det var RÖRELSEN som skilde, och
 * kort som lyfter olika mycket när man för musen över dem läses som olika
 * sajter även när de ser lika ut still.
 *
 * Kort äger därför: radie, kant, bakgrund, skugga, hover-beteende och
 * övergång. Inte innehållet — varje kort behåller sitt eget.
 *
 * ── Fyra register, varav ETT var trasigt ─────────────────────────────────
 *
 * Planen var att ersätta sju kortkomponenter med en. Vid genomgång visade
 * det sig att sajten har fyra visuella register och att tre av dem är
 * medvetna och konsekvent genomförda:
 *
 *   1. SAJT — startsidan, ämnen, metoderna, övningsbanken, verktygslådan.
 *      Det var HÄR fragmenteringen fanns, och det är den Kort löser.
 *
 *   2. WORKSHOP — källkritikens post-it-lappar. Workshopen ska kännas som en
 *      fysisk whiteboard. Ligger som variant här så att beslutet står på ett
 *      ställe och syns som ett val.
 *
 *   3. MELLANSTADIET — egna designtokens (--ms-bg-card, --ms-text-muted …),
 *      tjugo variabler använda i 47 filer. Rör inte. Att lyfta ut ett kort
 *      därifrån hade gjort just det kortet till avvikaren i sin egen sektion.
 *
 *   4. GRUNDSKOLA F–6 — stora, färgstarka kort skrivna för sjuåringar,
 *      rounded-[2.5rem] och border-4. Också medvetet.
 *
 * Slutsatsen: skillnaden mellan sektioner var inte problemet. Problemet var
 * att fyra kort INOM samma register rörde sig olika. Register 3 och 4 har
 * ingen variant här, eftersom en variant med en enda användare bara flyttar
 * koden utan att samla något.
 */

export type KortVariant = "sajt" | "workshop";

export type KortProps = {
  children: React.ReactNode;
  /** Gör kortet till en länk. Utan href renderas en <div>. */
  href?: string;
  variant?: KortVariant;
  /**
   * Hover-kantens färg som Tailwind-klass, t.ex. "hover:border-teal-300".
   * Låter en sektion ha sin accent utan att äga resten av fysiken.
   */
  accent?: string;
  /** Innerpadding. `ingen` för kort som har egna bilder ut i kanten. */
  padding?: "normal" | "luftig" | "ingen";
  /** Fyller radhöjden i ett rutnät. */
  fyllHojd?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Extra attribut som workshopens korttoning behöver. */
  "data-chapter-tone"?: string;
};

const BAS =
  "group relative block no-underline transition-all duration-200 motion-reduce:transition-none";

const VARIANT: Record<KortVariant, string> = {
  // Vilo-skugga sm och lyft 0.5 — den lugnaste av de fyra varianter som
  // fanns. Ett rutnät med 60 kort som alla kastar shadow-lg blir grötigt.
  sajt: "rounded-2xl border border-gray-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-300",
  // Post-it-klasserna bor i workshopens CSS; Kort pekar bara ut dem.
  workshop: "post-it post-it-rotated print-avoid-break",
};

const PADDING: Record<NonNullable<KortProps["padding"]>, string> = {
  normal: "p-5",
  luftig: "p-6",
  ingen: "",
};

export function Kort({
  children,
  href,
  variant = "sajt",
  accent,
  padding = "normal",
  fyllHojd = true,
  className,
  style,
  ...rest
}: KortProps) {
  const klasser = cn(
    BAS,
    VARIANT[variant],
    PADDING[padding],
    fyllHojd && "h-full",
    // Accenten läggs sist så att den vinner över basens hover:border-gray-300.
    accent,
    className
  );

  if (href) {
    return (
      <Link href={href} className={klasser} style={style} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <div className={klasser} style={style} {...rest}>
      {children}
    </div>
  );
}
