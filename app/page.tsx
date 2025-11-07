"use client";

import { useState, useMemo } from "react";
import { allModules } from "contentlayer/generated";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";
import Fuse from "fuse.js";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLiteracyIds, setSelectedLiteracyIds] = useState<number[]>([]);

  // Konfigurera Fuse.js för fuzzy search med djup sökning i allt innehåll
  const fuse = useMemo(
    () =>
      new Fuse(allModules, {
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1.5 },
          { name: "subject", weight: 1 },
          { name: "course", weight: 1 },
          { name: "searchableContent", weight: 0.5 }
        ],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    []
  );

  // Filtrera moduler baserat på sökning och valda aspekter
  const filteredModules = useMemo(() => {
    let modules = allModules;

    // Om det finns en sökfråga, använd Fuse.js
    if (searchQuery.trim()) {
      modules = fuse.search(searchQuery).map((result) => result.item);
    }

    // Filtrera på AI-litteracitetsaspekter
    if (selectedLiteracyIds.length > 0) {
      modules = modules.filter((module) =>
        selectedLiteracyIds.every((id) => module.ai_literacy_ids.includes(id))
      );
    }

    return modules;
  }, [searchQuery, selectedLiteracyIds, fuse]);

  const toggleLiteracyId = (id: number) => {
    setSelectedLiteracyIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh pb-20 pt-24 sm:pb-32 sm:pt-32">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-60" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-down">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              För gymnasielärare
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Bygg{" "}
              <span className="bg-gradient-to-r from-primary-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                AI-litteracitet
              </span>{" "}
              utifrån det centrala innehållet
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
              En resursplattform för att integrera undervisning om och med AI i dina ämnen, kopplat till Skolverkets kursplaner.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <a
                href="#search"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-base hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95"
              >
                Utforska moduler
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/om"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-md transition-all duration-base hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Läs mer om projektet
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
              <div>
                <div className="text-3xl font-bold text-primary-600">{allModules.length}</div>
                <div className="text-sm text-gray-600">Moduler</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">{aiLiteracyConfig.length}</div>
                <div className="text-sm text-gray-600">AI-aspekter</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">∞</div>
                <div className="text-sm text-gray-600">Möjligheter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="search" className="container mx-auto px-4 py-12">

      {/* Search Section */}
      <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="mx-auto max-w-2xl"
        />
      </div>

      {/* Filter Section */}
      <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        <h2 className="mb-4 text-sm font-semibold text-gray-700">
          Filtrera på AI-litteracitetsaspekter:
        </h2>
        <div className="flex flex-wrap gap-2">
          {aiLiteracyConfig.map((aspect, index) => (
            <div
              key={aspect.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${0.3 + index * 0.05}s`,
                animationFillMode: 'backwards'
              }}
            >
              <AiLiteracyBadge
                id={aspect.id}
                onClick={() => toggleLiteracyId(aspect.id)}
                isActive={selectedLiteracyIds.includes(aspect.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          {filteredModules.length}{" "}
          {filteredModules.length === 1 ? "modul" : "moduler"} hittades
        </p>
      </div>

      {filteredModules.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600">
            Inga moduler hittades. Prova att ändra dina sökkriterier.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredModules.map((module) => (
            <SearchResultCard
              key={module._id}
              moduleId={module._id}
              title={module.title}
              description={module.description}
              searchableContent={module.searchableContent}
              url={module.url}
              subject={module.subject}
              course={module.course}
              aiLiteracyIds={module.ai_literacy_ids}
              time={module.time}
              groupSize={module.groupSize}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
