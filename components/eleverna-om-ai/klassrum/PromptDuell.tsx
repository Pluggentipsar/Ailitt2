"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

// Samma AI, två roller — sida vid sida. Plus kopierbara promptmallar
// som eleverna tar med sig direkt in i sin egen chattbot.

const MALLAR: Array<{ id: string; rubrik: string; text: string }> = [
  {
    id: "forhor",
    rubrik: "Förhörs-prompten",
    text: "Jag går i [årskurs] och har prov om [ämne] [när]. Förhör mig steg för steg — ge inte svaren, låt mig försöka först.",
  },
  {
    id: "forklara",
    rubrik: "Förklara tillbaka-varianten",
    text: "Förklara [begrepp] för någon i [årskurs]. Fråga sedan om jag hängde med — och be mig förklara tillbaka.",
  },
];

function DuBubbla({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="pr-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
        Du
      </span>
      <div className="rounded-2xl rounded-br-md bg-teal-600 px-4 py-3 text-lg leading-relaxed text-white shadow-sm">
        {text}
      </div>
    </div>
  );
}

function AiBubbla({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <span className="pl-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
        AI
      </span>
      <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 text-lg leading-relaxed text-gray-900 shadow-sm">
        {text}
      </div>
    </div>
  );
}

export function PromptDuell() {
  const [kopierad, setKopierad] = useState<string | null>(null);

  async function kopiera(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setKopierad(id);
      setTimeout(
        () => setKopierad((nuvarande) => (nuvarande === id ? null : nuvarande)),
        2000
      );
    } catch {
      // Urklipp inte tillgängligt (t.ex. osäker kontext) — gör inget.
    }
  }

  return (
    <div className="space-y-8">
      {/* Duellen */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Gör åt mig */}
        <div className="flex flex-col gap-4 rounded-2xl border-2 border-red-200 bg-red-50/60 p-5 sm:p-6">
          <h3 className="text-xl font-bold text-red-800 sm:text-2xl">
            ”Gör åt mig”
          </h3>
          <DuBubbla text="Skriv klart min inlämning om franska revolutionen. 600 ord." />
          <AiBubbla text="Självklart! Här kommer en färdig text …" />
          <span className="w-fit rounded-full bg-red-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-red-800">
            600 ord du aldrig tänkt
          </span>
        </div>

        {/* Lär mig */}
        <div className="flex flex-col gap-4 rounded-2xl border-2 border-teal-200 bg-teal-50/60 p-5 sm:p-6">
          <h3 className="text-xl font-bold text-teal-800 sm:text-2xl">
            ”Lär mig”
          </h3>
          <DuBubbla text="Jag går i nian och har prov om franska revolutionen nästa vecka. Förhör mig steg för steg — ge inte svaren, låt mig försöka först." />
          <AiBubbla text="Vi kör. Första frågan: varför var statskassan tom 1789? Försök själv — jag fyller i om du fastnar." />
        </div>
      </div>

      {/* Kopierbara mallar */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Promptmallar — kopiera rakt in i chatten
        </p>
        <div className="space-y-3">
          {MALLAR.map((mall) => (
            <div
              key={mall.id}
              className="rounded-2xl border border-gray-200/80 bg-white p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-base font-bold text-gray-900 sm:text-lg">
                  {mall.rubrik}
                </h4>
                <button
                  type="button"
                  onClick={() => kopiera(mall.id, mall.text)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                    kopierad === mall.id
                      ? "bg-teal-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:border-teal-300 hover:text-teal-700"
                  )}
                >
                  {kopierad === mall.id ? (
                    <>
                      <Check className="h-4 w-4" />
                      Kopierad!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Kopiera
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 rounded-xl bg-gray-50 px-4 py-3 font-mono text-base leading-relaxed text-gray-800 sm:text-lg">
                {mall.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
