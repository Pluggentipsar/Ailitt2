import { ReactNode } from "react";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  /** Beskrivning av vad bilden ska visa — Joel använder för att veta vad som ska in */
  caption: string;
  /** Förslag på bildtyp/källa */
  hint?: string;
  /** Höjd-aspekt (t.ex. "16/9", "4/3", "1/1") */
  aspect?: string;
  /** Optional ID för referens */
  id?: string;
  children?: ReactNode;
}

/** Bildplaceholder för bilder Joel skapar senare. Tydlig så det syns i utkastet,
 *  men lugn nog att inte stjäla fokus.
 */
export function PlaceholderImage({
  caption,
  hint,
  aspect = "16/9",
  id,
  children,
}: PlaceholderImageProps) {
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
          <div className="ms-mono mt-3 text-[#94a3b8]">
            BILDPLACEHOLDER
          </div>
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
