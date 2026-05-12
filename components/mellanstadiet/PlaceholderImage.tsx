import { ReactNode } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  /** Beskrivning av vad bilden visar — används som alt-text när src finns,
   *  och som synlig text när bilden saknas (placeholder-läge) */
  caption: string;
  /** Förslag på bildtyp/källa — visas bara i placeholder-läge */
  hint?: string;
  /** Aspect-ratio (t.ex. "16/9", "4/3", "1/1") */
  aspect?: string;
  /** Optional ID för referens */
  id?: string;
  /** CDN-URL till bilden. Om utelämnad ritas placeholder-utseendet */
  src?: string;
  children?: ReactNode;
}

/** Visar antingen en riktig bild (när src finns) eller en placeholder.
 *  Samma kontrakt åt callern — kan därför växlas in/ut utan att röra
 *  lektionsfilerna.
 */
export function PlaceholderImage({
  caption,
  hint,
  aspect = "16/9",
  id,
  src,
  children,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <figure id={id} className="my-8 overflow-hidden rounded-lg">
        <div
          className="relative w-full overflow-hidden rounded-lg bg-[#0d1322]"
          style={{ aspectRatio: aspect.replace("/", " / ") }}
        >
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm text-[#94a3b8]">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      id={id}
      className="my-8 overflow-hidden rounded-lg border border-dashed border-[#475569] bg-[#0d1322]"
    >
      <div
        className="relative flex flex-col items-center justify-center p-8 text-center"
        style={{ aspectRatio: aspect }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(71, 85, 105, 0.15) 12px, rgba(71, 85, 105, 0.15) 24px)",
          }}
        />
        <div className="relative">
          <ImageIcon className="mx-auto h-10 w-10 text-[#475569]" />
          <div className="ms-mono mt-3 text-[#94a3b8]">BILDPLACEHOLDER</div>
          <div className="mt-2 max-w-md text-sm text-[#cbd5e1]">{caption}</div>
          {hint && (
            <div className="ms-mono mt-3 text-xs text-[#64748b]">{hint}</div>
          )}
          {children && (
            <div className="mt-3 text-sm text-[#94a3b8]">{children}</div>
          )}
        </div>
      </div>
    </figure>
  );
}
