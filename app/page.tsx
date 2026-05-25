"use client";

import { useState, useMemo } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { UnifiedResultCard } from "@/components/search/UnifiedResultCard";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";
import { SubjectFinderWizard } from "@/components/landing/SubjectFinderWizard";
import {
  getUnifiedIndex,
  itemTypeLabels,
  itemTypeOrder,
  type UnifiedItemType,
} from "@/lib/search/unified-index";
import Fuse from "fuse.js";
import Image from "next/image";
import { BookOpen, Target, Sparkles, ArrowRight, Lightbulb } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLiteracyIds, setSelectedLiteracyIds] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<UnifiedItemType[]>([]);

  // Unified index — sammanställer ALLT sökbart på sajten en gång.
  const unifiedIndex = useMemo(() => getUnifiedIndex(), []);

  // Fuse.js över hela indexet — titel/beskrivning tyngst, tags och content
  // matchar också. ignoreLocation gör att match i mitten av content räknas.
  const fuse = useMemo(
    () =>
      new Fuse(unifiedIndex, {
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1.4 },
          { name: "context", weight: 0.6 },
          { name: "tags", weight: 1 },
          { name: "content", weight: 0.4 },
        ],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [unifiedIndex]
  );

  // Filtrera index baserat på sök, typ och AI-litteracitet.
  // Viktigt: items utan aiLiteracyIds-mapping visas ALLTID när litteracitets-
  // filtret är aktivt — annars osynliggörs hela verktygslådan och spel-
  // katalogen på första klick, vilket inte är vad användaren vill.
  const filteredItems = useMemo(() => {
    let items = unifiedIndex;

    if (searchQuery.trim()) {
      items = fuse.search(searchQuery).map((r) => r.item);
    }

    if (selectedTypes.length > 0) {
      items = items.filter((it) => selectedTypes.includes(it.type));
    }

    if (selectedLiteracyIds.length > 0) {
      items = items.filter((it) => {
        if (!it.aiLiteracyIds || it.aiLiteracyIds.length === 0) return true;
        return selectedLiteracyIds.every((id) =>
          it.aiLiteracyIds!.includes(id)
        );
      });
    }

    return items;
  }, [unifiedIndex, searchQuery, selectedLiteracyIds, selectedTypes, fuse]);

  // Räkna träffar per typ — visas i typ-filterchipsen så användaren ser
  // hur många träffar som finns innan hen klickar.
  const typeCounts = useMemo(() => {
    const counts: Partial<Record<UnifiedItemType, number>> = {};
    // Räknar mot sökning+ai-literacy-filtret (men inte själva typ-filtret),
    // så chipsen visar "hur mycket skulle jag se om jag valde DENNA typ".
    let base = unifiedIndex;
    if (searchQuery.trim()) {
      base = fuse.search(searchQuery).map((r) => r.item);
    }
    if (selectedLiteracyIds.length > 0) {
      base = base.filter((it) => {
        if (!it.aiLiteracyIds || it.aiLiteracyIds.length === 0) return true;
        return selectedLiteracyIds.every((id) =>
          it.aiLiteracyIds!.includes(id)
        );
      });
    }
    for (const it of base) {
      counts[it.type] = (counts[it.type] ?? 0) + 1;
    }
    return counts;
  }, [unifiedIndex, searchQuery, selectedLiteracyIds, fuse]);

  const toggleLiteracyId = (id: number) => {
    setSelectedLiteracyIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleType = (type: UnifiedItemType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLiteracyIds([]);
    setSelectedTypes([]);
  };

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedLiteracyIds.length > 0 ||
    selectedTypes.length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh pb-20 pt-24 sm:pb-32 sm:pt-32">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/headerbackground1_50.webp)' }}
        />

        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-transparent" />

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-down">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-700 shadow-lg">
              <Sparkles className="h-4 w-4" />
              För lärare i hela skolan
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Färdiga lektioner, workshops och verktyg för{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.5)]">
                AI-undervisning
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100 leading-relaxed drop-shadow-md">
              För dig som undervisar i grundskolan, gymnasiet eller vuxenutbildningen — evidensbaserat och kopplat till kursplanerna.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <a
                href="#hitta-ratt"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-base hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 active:scale-95"
              >
                Hjälp mig hitta rätt
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#search"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-md transition-all duration-base hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Utforska alla moduler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard — hjälper besökaren hitta rätt på två steg */}
      <SubjectFinderWizard />

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
                  Hela skolspannet F-12
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Färdigt material för grundskolan, gymnasiet och vuxenutbildningen — kopplat till Skolverkets kursplaner.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100">
                  <Target className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Forskningsförankrat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aktiviteterna pekar på den forskning de bygger på — prebunking, källkritik, bias-medvetenhet.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-cyan-100">
                  <Sparkles className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  AI som didaktisk fråga
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sju AI-litteracitetsdimensioner väver in både verktygsbruk och kritiskt tänkande i ämnesundervisningen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight — workshop som är det senast tillagda större paketet */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-rose-700 to-rose-800 py-16">
        <div className="absolute inset-0 bg-[url('/headerbackground1_50.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1 text-sm font-medium text-orange-100 mb-4 border border-white/20">
                <Sparkles className="h-4 w-4" />
                Senaste tillägget
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Källkritik-sandlådan — workshop för åk 4-9
              </h2>
              <p className="text-orange-50 text-lg mb-8 leading-relaxed">
                8 kapitel med över 30 färdiga aktiviteter: dark patterns, hallucinationer, retoriska knep, bias och relationskritik. Bygg en kompetensutvecklingsdag eller plocka enskilda lektioner.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/workshops/kallkritik-mellanstadiet"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 px-8 py-3 font-bold shadow-lg hover:bg-orange-50 hover:scale-105 transition-all duration-200"
                >
                  Öppna sandlådan
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/grundskola"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/30 px-6 py-3 font-semibold hover:bg-white/25 transition-all duration-200"
                >
                  Eller F-6-läromedlet
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl" />
              <div className="relative w-72 h-72 rounded-2xl bg-white/10 backdrop-blur-md border-4 border-white/20 shadow-2xl p-6 flex flex-col justify-between rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-white/80 text-xs uppercase tracking-wider font-bold">
                  Källkritik-sandlådan
                </div>
                <div className="text-white text-4xl font-bold leading-tight">
                  8 kapitel<br />
                  30+ aktiviteter
                </div>
                <div className="text-white/90 text-sm">
                  Forskningsförankrat · För workshop och klassrum
                </div>
              </div>
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

      {/* Main Content — Unified search över hela sajten */}
      <div id="search" className="container mx-auto px-4 py-16">

        {/* Search Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Utforska allt innehåll</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sök i moduler, workshop-aktiviteter, verktyg, mellanstadie-lektioner och hela ramverket. Filtrera på typ och AI-litteracitetsaspekter.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            className="mx-auto max-w-2xl"
          />
        </div>

        {/* Type-filter — chips med antal */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-700 mb-3">Typ av innehåll</div>
          <div className="flex flex-wrap gap-2">
            {itemTypeOrder.map((type) => {
              const count = typeCounts[type] ?? 0;
              const active = selectedTypes.includes(type);
              const disabled = count === 0 && !active;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleType(type)}
                  disabled={disabled}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all inline-flex items-center gap-1.5 ${
                    active
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/30"
                      : disabled
                        ? "bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed"
                        : "bg-white text-gray-800 border border-gray-300 hover:border-primary-400 hover:bg-primary-50/50"
                  }`}
                  aria-pressed={active}
                >
                  {itemTypeLabels[type]}
                  <span
                    className={`text-[11px] font-semibold rounded-full px-1.5 py-0.5 ${
                      active
                        ? "bg-white/25 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI-litteracitetsfilter */}
        <div className="mb-8">
          <div className="text-sm font-semibold text-gray-700 mb-3">
            AI-litteracitetsaspekter
            <span className="ml-2 text-xs text-gray-500 font-normal">
              (gäller endast innehåll med koppling — övrigt visas alltid)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {aiLiteracyConfig.map((aspect) => (
              <AiLiteracyBadge
                key={aspect.id}
                id={aspect.id}
                onClick={() => toggleLiteracyId(aspect.id)}
                isActive={selectedLiteracyIds.includes(aspect.id)}
              />
            ))}
          </div>
        </div>

        {/* Resultatrad — antal + nollställ */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filteredItems.length}</span>{" "}
            {filteredItems.length === 1 ? "träff" : "träffar"}
            {hasActiveFilters && " med aktiva filter"}
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-2"
            >
              Nollställ allt
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-600">
              Inga träffar. Prova en bredare sökning eller ta bort filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.slice(0, 60).map((item) => (
              <UnifiedResultCard
                key={item.id}
                item={item}
                query={searchQuery}
              />
            ))}
          </div>
        )}

        {/* Visa antal dolda om resultatet kapas */}
        {filteredItems.length > 60 && (
          <div className="mt-6 text-center text-sm text-gray-500">
            Visar 60 av {filteredItems.length} träffar. Förfina din sökning eller filtrering för att se fler.
          </div>
        )}
      </div>
    </div>
  );
}
