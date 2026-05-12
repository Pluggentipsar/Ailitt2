"use client";

import { useState } from "react";
import { Bot, Copy, Check, ExternalLink, Users } from "lucide-react";

interface PravaMedAIProps {
  /** Konkret prompt eleven ska kopiera */
  prompt: string;
  /** Vad eleven ska göra/observera efteråt */
  observation?: string;
  /** Förslag på vilket verktyg som funkar bäst. Default: Skolup AI. */
  tool?: string;
  /** Extern länk till AI-verktyget. Default: Skolon-inloggning för Skolup. */
  toolUrl?: string;
  /** Rubrik */
  title?: string;
  /** Visa "tillsammans med läraren"-hint. Default: true. */
  withTeacher?: boolean;
  accentHex?: string;
}

const SKOLUP_URL = "https://skolon.com/skolup/";

/** "Prova själv med en AI"-block. Innehåller konkret prompt med kopierbar text
 *  och en länk till Skolup AI (skolanpassad, GDPR-säker via Skolon).
 *
 *  Default-mönstret: läraren öppnar Skolup AI och kör prompten med klassen,
 *  eller eleven kör själv i Skolup efter inloggning via skolans Skolon-konto.
 */
export function PravaMedAI({
  prompt,
  observation,
  tool = "Skolup AI",
  toolUrl,
  title = "Prova själv",
  withTeacher = true,
  accentHex = "#10b981",
}: PravaMedAIProps) {
  const [copied, setCopied] = useState(false);

  const isSkolup = tool.toLowerCase().includes("skolup");
  const externalUrl = toolUrl ?? (isSkolup ? SKOLUP_URL : undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Klippet kunde inte kopieras — gör inget
    }
  };

  return (
    <div
      className="my-8 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}40` }}
    >
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-1 px-5 py-2 text-[var(--ms-bg)]"
        style={{ background: accentHex }}
      >
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4" />
          <span className="ms-mono font-bold">
            PROVA · {title.toUpperCase()}
          </span>
        </div>
        {withTeacher && (
          <span className="ms-mono ml-auto inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 text-[10px] font-semibold">
            <Users className="h-3 w-3" /> MED LÄRAREN
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="ms-mono mb-2 flex flex-wrap items-center gap-2 text-[var(--ms-text-muted)]">
          <span>KOPIERA OCH KLISTRA IN I {tool.toUpperCase()}</span>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-[var(--ms-border)] bg-[var(--ms-bg-card)] px-2 py-0.5 text-[var(--ms-text-body)] transition-colors hover:text-[var(--ms-text)]"
              style={{ borderColor: `${accentHex}60` }}
            >
              <ExternalLink className="h-3 w-3" />
              ÖPPNA {tool.toUpperCase()}
            </a>
          )}
        </div>
        <div className="group relative rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4 font-mono text-sm leading-relaxed text-[var(--ms-text)]">
          <button
            type="button"
            onClick={copy}
            className="absolute right-2 top-2 flex items-center gap-1.5 rounded-md border border-[var(--ms-border)] bg-[var(--ms-bg)] px-2 py-1 text-xs text-[var(--ms-text-muted)] opacity-100 transition-opacity hover:text-[var(--ms-text)] focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
            aria-label="Kopiera prompt"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" /> Kopierad
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Kopiera
              </>
            )}
          </button>
          <div className="pr-20 sm:pr-0">
            &ldquo;{prompt}&rdquo;
          </div>
        </div>
        {observation && (
          <div className="mt-4">
            <div className="ms-mono mb-1 text-[var(--ms-text-muted)]">
              SEN — VAD ATT KOLLA
            </div>
            <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
              {observation}
            </p>
          </div>
        )}
        {isSkolup && (
          <div className="ms-mono mt-4 text-[10px] uppercase tracking-wide text-[var(--ms-text-dim)]">
            Skolup AI nås via skolans Skolon-inloggning. Läraren guidar.
          </div>
        )}
      </div>
    </div>
  );
}
