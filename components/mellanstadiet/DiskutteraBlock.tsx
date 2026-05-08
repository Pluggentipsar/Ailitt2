import { Users } from "lucide-react";

interface DiskutteraBlockProps {
  /** Huvudfrågan */
  question: string;
  /** Underfrågor / följdfrågor */
  prompts?: string[];
  /** Diskussionsformat */
  format?: "par" | "grupp" | "helklass";
  accentHex?: string;
}

/** Block för parsamtal eller gruppdiskussion. Bryter individuell läsning
 *  med social bearbetning av innehållet.
 */
export function DiskutteraBlock({
  question,
  prompts,
  format = "par",
  accentHex = "#a5b4fc",
}: DiskutteraBlockProps) {
  const formatLabel = {
    par: "DISKUTERA · I PAR",
    grupp: "DISKUTERA · I GRUPP",
    helklass: "DISKUTERA · HELKLASS",
  }[format];

  return (
    <aside
      className="my-8 overflow-hidden rounded-lg border bg-[#1a2235]/60"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex items-center gap-2 px-5 py-2 text-[#0a0e1a]"
        style={{ background: accentHex }}
      >
        <Users className="h-4 w-4" />
        <span className="ms-mono font-bold">{formatLabel}</span>
      </div>
      <div className="p-5">
        <p className="text-lg font-medium leading-relaxed text-white">
          {question}
        </p>
        {prompts && prompts.length > 0 && (
          <div className="mt-4">
            <div className="ms-mono mb-2 text-[#94a3b8]">
              FRÅGOR ATT TA UPP
            </div>
            <ul className="space-y-1.5 text-[#cbd5e1]">
              {prompts.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="ms-mono mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#0a0e1a] text-xs"
                    style={{ color: accentHex }}
                  >
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
