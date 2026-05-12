"use client";

import { useMemo, useState } from "react";
import {
  Bot,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Eye,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import type {
  LabbExperiment as LabbExperimentData,
  LabbPlaceholder,
  LabbVariation,
} from "@/lib/mellanstadiet-labb";

/* AI-labbets kärnkort.
 *
 * En station = ett verkligt problem eleven har ("få något förklarat",
 * "bli förhörd"). Eleven fyller i platshållare DIREKT i prompten, kopierar
 * den färdiga texten, och klistrar in i Skolup AI.
 *
 * Pedagogiskt mönster (SAILD + Tänkartrappan):
 *   1. PROMPTEN är artefakten — eleven KONFIGURERAR den
 *   2. GRANSKA-tipsen är inquiry-loopen (Tänkartrappan steg 3)
 *   3. VARIATIONEN är iterationen (Tänkartrappan steg 4)
 */

type PlaceholderValues = Record<string, string>;

function buildPlaceholderState(placeholders?: LabbPlaceholder[]): PlaceholderValues {
  if (!placeholders) return {};
  const out: PlaceholderValues = {};
  for (const p of placeholders) {
    out[p.key] = p.defaultValue ?? "";
  }
  return out;
}

/** Renderar en prompt med inline-redigerbara platshållare. */
function PromptWithFields({
  template,
  placeholders,
  values,
  onChange,
  accentHex,
}: {
  template: string;
  placeholders: LabbPlaceholder[];
  values: PlaceholderValues;
  onChange: (key: string, val: string) => void;
  accentHex: string;
}) {
  // Splitta prompten på {key}-tokens
  const parts = useMemo(() => {
    const re = /\{([a-zA-Z0-9_åäöÅÄÖ]+)\}/g;
    const out: Array<
      | { type: "text"; value: string }
      | { type: "placeholder"; key: string }
    > = [];
    let last = 0;
    let match: RegExpExecArray | null;
    while ((match = re.exec(template)) !== null) {
      if (match.index > last) {
        out.push({ type: "text", value: template.slice(last, match.index) });
      }
      out.push({ type: "placeholder", key: match[1] });
      last = re.lastIndex;
    }
    if (last < template.length) {
      out.push({ type: "text", value: template.slice(last) });
    }
    return out;
  }, [template]);

  const placeholderByKey = useMemo(() => {
    const m: Record<string, LabbPlaceholder> = {};
    for (const p of placeholders) m[p.key] = p;
    return m;
  }, [placeholders]);

  return (
    <div className="whitespace-pre-wrap break-words font-mono text-[15px] leading-[1.85] text-[var(--ms-text)]">
      {parts.map((part, i) => {
        if (part.type === "text") {
          return <span key={i}>{part.value}</span>;
        }
        const ph = placeholderByKey[part.key];
        if (!ph) return <span key={i}>{`{${part.key}}`}</span>;
        const value = values[part.key] ?? "";

        const isBlock = ph.width === "block";
        if (isBlock) {
          return (
            <textarea
              key={i}
              value={value}
              onChange={(e) => onChange(ph.key, e.target.value)}
              placeholder={ph.hint}
              rows={4}
              className="my-2 block w-full rounded-md border-2 px-3 py-2 font-mono text-sm leading-relaxed text-[var(--ms-text)] outline-none transition-colors placeholder:text-[var(--ms-text-dim)] placeholder:italic focus:bg-[var(--ms-bg-card)]"
              style={{
                background: `${accentHex}10`,
                borderColor: value ? accentHex : `${accentHex}50`,
              }}
            />
          );
        }

        // Auto-bredd som matchar hint eller value
        const sizeFor = ph.width === "wide" ? 28 : 14;
        const displayLen = Math.max(
          value.length,
          ph.hint ? Math.min(ph.hint.length, sizeFor) : sizeFor,
        );

        return (
          <input
            key={i}
            type="text"
            value={value}
            onChange={(e) => onChange(ph.key, e.target.value)}
            placeholder={ph.hint}
            size={Math.min(displayLen + 2, 60)}
            className="mx-[2px] inline-flex rounded-md border-2 px-2 py-0.5 align-baseline font-mono text-[14px] text-[var(--ms-text)] outline-none transition-colors placeholder:text-[var(--ms-text-dim)] placeholder:italic focus:bg-[var(--ms-bg-card)]"
            style={{
              background: `${accentHex}10`,
              borderColor: value ? accentHex : `${accentHex}50`,
            }}
          />
        );
      })}
    </div>
  );
}

function fillPrompt(template: string, values: PlaceholderValues): string {
  return template.replace(/\{([a-zA-Z0-9_åäöÅÄÖ]+)\}/g, (_, key) => {
    const v = values[key];
    return v && v.trim().length > 0 ? v : `[${key}]`;
  });
}

function CopyButton({
  text,
  accentHex,
  big = false,
}: {
  text: string;
  accentHex: string;
  big?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // tyst
    }
  };
  return (
    <button
      type="button"
      onClick={handle}
      className={`inline-flex items-center gap-2 rounded-lg font-bold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98] ${
        big ? "px-5 py-3 text-base" : "px-3 py-2 text-sm"
      }`}
      style={{ background: copied ? "#10b981" : accentHex }}
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className={big ? "h-5 w-5" : "h-4 w-4"} />
          Kopierad — klistra in i AI:n
        </>
      ) : (
        <>
          <Copy className={big ? "h-5 w-5" : "h-4 w-4"} />
          Kopiera prompten
        </>
      )}
    </button>
  );
}

function VariationBlock({
  variation,
  accentHex,
}: {
  variation: LabbVariation;
  accentHex: string;
}) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<PlaceholderValues>(() =>
    buildPlaceholderState(variation.placeholders),
  );
  const finalPrompt = fillPrompt(variation.prompt, values);

  return (
    <div
      className="overflow-hidden rounded-xl border-2 border-dashed"
      style={{ borderColor: `${accentHex}60` }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-[var(--ms-bg-card)]"
      >
        <div className="flex items-center gap-3">
          <RefreshCw className="h-5 w-5" style={{ color: accentHex }} />
          <div>
            <div className="ms-mono text-[var(--ms-text-muted)]">
              ITERERA · TÄNKARTRAPPAN STEG 4
            </div>
            <div className="text-base font-bold text-[var(--ms-text)]">
              {variation.label}
            </div>
          </div>
        </div>
        {open ? (
          <ChevronUp className="h-5 w-5 text-[var(--ms-text-muted)]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[var(--ms-text-muted)]" />
        )}
      </button>

      {open && (
        <div className="border-t border-[var(--ms-border)] bg-[var(--ms-bg-subtle)] px-5 py-5">
          <p className="mb-4 text-sm leading-relaxed text-[var(--ms-text-body)]">
            <span className="font-bold">Vad ändras:</span> {variation.twist}
          </p>

          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <PromptWithFields
              template={variation.prompt}
              placeholders={variation.placeholders ?? []}
              values={values}
              onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
              accentHex={accentHex}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CopyButton text={finalPrompt} accentHex={accentHex} />
            <span className="ms-mono text-[var(--ms-text-muted)]">
              KLISTRA IN BREDVID DET FÖRSTA SVARET — JÄMFÖR
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export function LabbExperiment({
  experiment,
  accentHex,
}: {
  experiment: LabbExperimentData;
  accentHex: string;
}) {
  const [values, setValues] = useState<PlaceholderValues>(() =>
    buildPlaceholderState(experiment.placeholders),
  );

  const hasPlaceholders =
    !!experiment.placeholders && experiment.placeholders.length > 0;

  const finalPrompt = fillPrompt(experiment.prompt, values);

  return (
    <article
      id={experiment.id}
      className="ms-fadein scroll-mt-24 overflow-hidden rounded-2xl border bg-[var(--ms-bg-card)] shadow-sm"
      style={{ borderColor: `${accentHex}40` }}
    >
      {/* Header */}
      <header
        className="flex items-start gap-4 px-6 py-5"
        style={{
          background: `linear-gradient(135deg, ${accentHex}18, ${accentHex}08)`,
          borderBottom: `1px solid ${accentHex}30`,
        }}
      >
        <div
          className="flex h-12 w-12 flex-none items-center justify-center rounded-xl text-2xl"
          style={{ background: `${accentHex}20`, border: `2px solid ${accentHex}` }}
          aria-hidden
        >
          {experiment.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold leading-tight text-[var(--ms-text)] sm:text-2xl">
            {experiment.title}
          </h2>
          <p className="mt-1 text-[var(--ms-text-body)]">{experiment.tagline}</p>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6">
        {/* Varför funkar denna */}
        <div className="flex gap-3 rounded-lg bg-[var(--ms-bg-subtle)] px-4 py-3">
          <Sparkles
            className="h-5 w-5 flex-none"
            style={{ color: accentHex }}
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
            <span className="ms-mono mr-2 text-[var(--ms-text-muted)]">
              VARFÖR
            </span>
            {experiment.why}
          </p>
        </div>

        {/* PROMPT-BYGGE */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Bot className="h-4 w-4" style={{ color: accentHex }} />
            <span className="ms-mono text-[var(--ms-text-muted)]">
              {hasPlaceholders
                ? "1. FYLL I DET GULA · 2. KOPIERA · 3. KLISTRA IN I AI:N"
                : "PROMPTEN ÄR REDAN KLAR — KOPIERA OCH KÖR"}
            </span>
          </div>

          <div
            className="rounded-xl border-2 p-5"
            style={{ borderColor: `${accentHex}40`, background: "var(--ms-bg)" }}
          >
            <PromptWithFields
              template={experiment.prompt}
              placeholders={experiment.placeholders ?? []}
              values={values}
              onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
              accentHex={accentHex}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CopyButton text={finalPrompt} accentHex={accentHex} big />
            <span className="ms-mono text-[var(--ms-text-muted)]">
              KLISTRA IN I {(experiment.tool ?? "SKOLUP AI").toUpperCase()}
            </span>
          </div>
        </div>

        {/* GRANSKA — Tänkartrappan steg 3 */}
        <div
          className="rounded-xl border p-5"
          style={{
            borderColor: `${accentHex}30`,
            background: `${accentHex}08`,
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <Eye className="h-4 w-4" style={{ color: accentHex }} />
            <span className="ms-mono font-bold text-[var(--ms-text)]">
              SEN: GRANSKA · TÄNKARTRAPPAN STEG 3
            </span>
          </div>
          <ul className="space-y-2">
            {experiment.granska.map((g, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-[var(--ms-text-body)]"
              >
                <span
                  className="ms-mono flex-none font-bold"
                  style={{ color: accentHex }}
                >
                  ?{i + 1}
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* VARIATION — Tänkartrappan steg 4 */}
        {experiment.variation && (
          <VariationBlock
            variation={experiment.variation}
            accentHex={accentHex}
          />
        )}
      </div>
    </article>
  );
}
