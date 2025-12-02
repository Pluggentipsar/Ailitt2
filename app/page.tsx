"use client";

import { useState, useMemo } from "react";
import { allModules } from "contentlayer/generated";
import { SearchBar } from "@/components/search/SearchBar";
import { SearchResultCard } from "@/components/search/SearchResultCard";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";
import Fuse from "fuse.js";
import Image from "next/image";
import { BookOpen, Target, Sparkles, ArrowRight, Lightbulb } from "lucide-react";

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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/headerbackground1_50.png)' }}
        />

        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-transparent" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-down">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-700 shadow-lg">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              För gymnasielärare
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Bygg{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.5)]">
                AI-litteracitet
              </span>{" "}
              utifrån det centrala innehållet
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100 leading-relaxed drop-shadow-md">
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
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/30 pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
              <div>
                <div className="text-3xl font-bold text-cyan-300 drop-shadow-lg">{allModules.length}</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Moduler</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300 drop-shadow-lg">{aiLiteracyConfig.length}</div>
                <div className="text-sm text-gray-100 drop-shadow-md">AI-aspekter</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300 drop-shadow-lg">∞</div>
                <div className="text-sm text-gray-100 drop-shadow-md">Möjligheter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100">
                  <BookOpen className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Kopplat till kursplaner
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Alla moduler är kopplade till Skolverkets centrala innehåll och läroplaner
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100">
                  <Target className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Praktiska aktiviteter
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Färdiga lektionsupplägg med tydliga instruktioner och bedömningsstöd
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100">
                  <Sparkles className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  AI-litteracitet integrerat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sju dimensioner som väver in AI-förståelse naturligt i undervisningen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grundskola Promo Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="absolute inset-0 bg-[url('/headerbackground1_50.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1 text-sm font-medium text-blue-100 mb-4 border border-white/20">
                <Sparkles className="h-4 w-4" />
                Nyhet för grundskolan
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-litteracitet för de yngsta</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Ett komplett digitalt läromedel med sagor, filmer och aktiviteter anpassade för F-6. Låt eleverna utforska AI genom lek och kritiskt tänkande.
              </p>
              <a
                href="/grundskola"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-8 py-3 font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200"
              >
                Gå till Grundskola-hubben
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl"></div>
              <Image
                src="/saga1.jpg"
                alt="Maja och Gnista"
                width={300}
                height={300}
                className="relative rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">

            {/* AI-Litteracitet Card */}
            <a
              href="/ai-litteracitet"
              className="group block overflow-hidden rounded-2xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:border-primary-300 hover:shadow-xl"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-cyan-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src="/menu_icon.png"
                      alt="AI-litteracitet"
                      width={120}
                      height={120}
                      className="relative drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-cyan-100 px-3 py-1 text-xs font-semibold text-primary-700">
                    <Sparkles className="h-3 w-3" />
                    Didaktiskt ramverk
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">
                    AI-litteracitet som didaktisk kompass
                  </h2>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    Mer än verktygskunskap – en epistemisk förmåga att förstå hur kunskap formas när AI är en medskapare.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Utforska ramverket</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>

            {/* Didaktiska Modeller Card */}
            <a
              href="/didaktiska-modeller"
              className="group block overflow-hidden rounded-2xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-30 h-30 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl transition-transform duration-300 group-hover:scale-105 p-6">
                      <Lightbulb className="w-16 h-16 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    <Lightbulb className="h-3 w-3" />
                    Pedagogisk guide
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">
                    Didaktiska modeller för AI i klassrummet
                  </h2>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    Praktiska ramverk för att undervisa med, om, mot och genom AI – från TPACK-AI till lärarens epistemiska roll.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Upptäck ramverken</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="search" className="container mx-auto px-4 py-16">

        {/* Search Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Utforska moduler</h2>
          <p className="text-gray-600">Sök och filtrera efter ämne, kurs eller AI-litteracitetsaspekt</p>
        </div>

        {/* Search Bar */}
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
