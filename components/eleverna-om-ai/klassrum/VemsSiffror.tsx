"use client";

import { ExternalLink, Calculator } from "lucide-react";

const RADER: { optimist: string; skeptiker: string }[] = [
  {
    optimist: "Kalkylatorns svenska elmix: 60 g CO₂ per kWh",
    skeptiker: "Uppmätta amerikanska datacenter: 548 g per kWh",
  },
  {
    optimist: "Bolagens officiella siffror",
    skeptiker: "Bolagen redovisar inte — vi får gissa",
  },
  {
    optimist: "Per fråga: en mikrovågsugn i sekunder",
    skeptiker: "Per betalande användare: 0,5–1,5 ton per år",
  },
];

const KALKYLATORER: { namn: string; url: string; beskrivning: string }[] = [
  {
    namn: "Resurskollen",
    url: "https://resurskollen.jardenberg.se",
    beskrivning: "Svensk kalkylator — kolla käll- och metodavsnittet längst ner",
  },
  {
    namn: "EcoLogits",
    url: "https://huggingface.co/spaces/genai-impact/ecologits-calculator",
    beskrivning: "Fransk open source — transparent metodik",
  },
];

const UPPGIFT = [
  "Mata in samma AI-användning i båda kalkylatorerna.",
  "Anteckna skillnaden.",
  "Hitta minst två antaganden som förklarar den.",
  "Skriv slutsatsen: ”Siffran beror på …”",
];

export function VemsSiffror() {
  return (
    <div className="space-y-8">
      {/* Antagandetabellen */}
      <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 shadow-lg">
        <div className="grid grid-cols-2">
          <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
            <p className="text-base font-semibold uppercase tracking-wide text-gray-500 sm:text-lg">
              Optimistens antaganden
            </p>
          </div>
          <div className="border-b border-gray-200 bg-orange-50 px-4 py-4 sm:px-6">
            <p className="text-base font-bold uppercase tracking-wide text-orange-800 sm:text-lg">
              Skeptikerns antaganden
            </p>
          </div>

          {RADER.map((rad, i) => (
            <div key={i} className="contents">
              <div
                className={`border-r border-gray-200 px-4 py-5 sm:px-6 ${
                  i < RADER.length - 1 ? "border-b" : ""
                }`}
              >
                <p className="text-lg leading-snug text-gray-500 sm:text-xl">
                  {rad.optimist}
                </p>
              </div>
              <div
                className={`bg-orange-50/50 px-4 py-5 sm:px-6 ${
                  i < RADER.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <p className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                  {rad.skeptiker}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kalkylatorlänkar */}
      <div className="grid gap-4 sm:grid-cols-2">
        {KALKYLATORER.map((kalkylator) => (
          <a
            key={kalkylator.namn}
            href={kalkylator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {kalkylator.namn}
                </h3>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 transition group-hover:text-teal-600" />
            </div>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              {kalkylator.beskrivning}
            </p>
          </a>
        ))}
      </div>

      {/* Elevuppgiften */}
      <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-6 shadow-lg sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Elevuppgiften
        </p>
        <ol className="mt-5 space-y-4">
          {UPPGIFT.map((steg, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">
                {i + 1}
              </span>
              <p className="pt-1 text-xl font-medium leading-snug text-gray-900 sm:text-2xl">
                {steg}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
