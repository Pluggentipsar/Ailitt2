"use client";

import { useState, useMemo, useEffect } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { UnifiedResultCard } from "@/components/search/UnifiedResultCard";
import { AiLiteracyBadge } from "@/components/ui/AiLiteracyBadge";
import { aiLiteracyConfig } from "@/lib/aiLiteracyConfig";
import { SubjectFinderWizard } from "@/components/landing/SubjectFinderWizard";
import { getUnifiedIndex } from "@/lib/search/unified-index";
import {
  DOMAN_ORDNING,
  DOMAN_META,
  DOMAN_FARG,
  ARSKURSBAND_ORDNING,
  ARSKURSBAND_LABELS,
  type Doman,
  type Arskursband,
} from "@/lib/taxonomi";
import Fuse from "fuse.js";
import Image from "next/image";
import {
  BookOpen,
  Target,
  Sparkles,
  ArrowRight,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const SIDSTORLEK = 60;

/**
 * Varvar träffarna mellan innehållstyper (moduler, verktyg, spel, labb …)
 * i stället för att visa dem i indexordning.
 *
 * Utan detta blev de första 60 träffarna alltid moduler och workshop-
 * aktiviteter, eftersom indexet byggs källa för källa. Verktygslådan låg på
 * plats 245 och framåt och syntes aldrig på startsidan — tidigare kom man dit
 * via typfiltret, som nu är borta.
 *
 * Gäller bara när man INTE har sökt. Med en sökquery är Fuse-ordningen
 * relevansordning, och den ska inte kastas om.
 */
function varvaPerTyp<T extends { type: string }>(items: T[]): T[] {
  const koer = new Map<string, T[]>();
  for (const it of items) {
    const k = koer.get(it.type);
    if (k) k.push(it);
    else koer.set(it.type, [it]);
  }
  const listor = [...koer.values()];
  const ut: T[] = [];
  for (let i = 0; ut.length < items.length; i++) {
    for (const lista of listor) {
      if (i < lista.length) ut.push(lista[i]);
    }
  }
  return ut;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLiteracyIds, setSelectedLiteracyIds] = useState<number[]>([]);
  const [selectedDomains, setSelectedDomains] = useState<Doman[]>([]);
  const [selectedStadier, setSelectedStadier] = useState<Arskursband[]>([]);
  const [showDimensions, setShowDimensions] = useState(false);
  const [visasAntal, setVisasAntal] = useState(SIDSTORLEK);

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

  // === Filterlogik ===
  //
  // De tre filtren är AVSIKTLIGT olika stränga, och skillnaden speglar datan:
  //
  //   Domän   — strikt. 344 av 355 objekt är taggade, så ett val betyder
  //             något. De 11 otaggade (ramverket, didaktiska modeller) är
  //             lärarvänt material som inte svarar på "vad gör eleven" — de
  //             ska falla bort när man frågar just det.
  //   Stadium — släpper igenom otaggat. Ett verktyg har ingen årskurs;
  //             Google Lens funkar i åk 4 och på gymnasiet. Strikt filter
  //             hade dolt hela verktygslådan på första klick.
  //   Dimension — släpper igenom otaggat, av samma skäl (oförändrat).
  const matcharDoman = (it: { domaner?: Doman[] }) =>
    selectedDomains.length === 0 ||
    selectedDomains.some((d) => it.domaner?.includes(d));

  const matcharStadium = (it: { stadier?: Arskursband[] }) =>
    selectedStadier.length === 0 ||
    !it.stadier?.length ||
    selectedStadier.some((s) => it.stadier!.includes(s));

  const matcharDimension = (it: { aiLiteracyIds?: number[] }) =>
    selectedLiteracyIds.length === 0 ||
    !it.aiLiteracyIds?.length ||
    selectedLiteracyIds.every((id) => it.aiLiteracyIds!.includes(id));

  const sokta = useMemo(
    () =>
      searchQuery.trim()
        ? fuse.search(searchQuery).map((r) => r.item)
        : unifiedIndex,
    [unifiedIndex, searchQuery, fuse]
  );

  const filteredItems = useMemo(() => {
    const traffar = sokta.filter(
      (it) => matcharDoman(it) && matcharStadium(it) && matcharDimension(it)
    );
    return searchQuery.trim() ? traffar : varvaPerTyp(traffar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sokta, searchQuery, selectedDomains, selectedStadier, selectedLiteracyIds]);

  // Ny filtrering börjar om från första sidan — annars sitter man kvar på
  // "visar 180" när träffmängden just krympte till 12.
  useEffect(() => {
    setVisasAntal(SIDSTORLEK);
  }, [searchQuery, selectedDomains, selectedStadier, selectedLiteracyIds]);

  // Antalen i chipsen räknas mot ALLA ANDRA filter utom det egna, så siffran
  // svarar på "hur många får jag om jag klickar här" — inte "hur många ser
  // jag nu", vilket vore noll för varje ovald chip.
  const domainCounts = useMemo(() => {
    const c = {} as Record<Doman, number>;
    for (const d of DOMAN_ORDNING) c[d] = 0;
    for (const it of sokta) {
      if (!matcharStadium(it) || !matcharDimension(it)) continue;
      for (const d of it.domaner ?? []) c[d]++;
    }
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sokta, selectedStadier, selectedLiteracyIds]);

  const stadiumCounts = useMemo(() => {
    const c = {} as Record<Arskursband, number>;
    for (const s of ARSKURSBAND_ORDNING) c[s] = 0;
    for (const it of sokta) {
      if (!matcharDoman(it) || !matcharDimension(it)) continue;
      // Otaggat räknas in överallt — samma regel som filtret självt.
      if (!it.stadier?.length) for (const s of ARSKURSBAND_ORDNING) c[s]++;
      else for (const s of it.stadier) c[s]++;
    }
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sokta, selectedDomains, selectedLiteracyIds]);

  const toggleLiteracyId = (id: number) => {
    setSelectedLiteracyIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleDomain = (d: Doman) => {
    setSelectedDomains((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  const toggleStadium = (s: Arskursband) => {
    setSelectedStadier((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLiteracyIds([]);
    setSelectedDomains([]);
    setSelectedStadier([]);
  };

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedLiteracyIds.length > 0 ||
    selectedDomains.length > 0 ||
    selectedStadier.length > 0;

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
            Moduler, workshop-aktiviteter, övningar, verktyg och lektioner — allt
            på ett ställe. Börja med vad eleverna ska göra.
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

        {/* Domänfilter — primärt. Samma fyra facetter som i övningsbanken. */}
        <div className="mb-5">
          <div className="text-sm font-semibold text-gray-700 mb-3">
            Vad ska eleverna göra?
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {DOMAN_ORDNING.map((d) => {
              const meta = DOMAN_META[d];
              const count = domainCounts[d];
              const active = selectedDomains.includes(d);
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => toggleDomain(d)}
                  aria-pressed={active}
                  className={`group rounded-xl border p-3 text-left transition-all ${
                    active
                      ? "border-transparent bg-white shadow-md ring-2"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                  style={
                    active
                      ? ({ ["--tw-ring-color" as string]: DOMAN_FARG[d] })
                      : undefined
                  }
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: DOMAN_FARG[d] }}
                    />
                    <span className="font-semibold text-gray-900">
                      {meta.namn}
                    </span>
                    <span className="ml-auto text-xs font-semibold text-gray-500">
                      {count}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-gray-600">
                    {meta.beskrivning}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stadiefilter */}
        <div className="mb-5">
          <div className="text-sm font-semibold text-gray-700 mb-3">
            Vilket stadium?
          </div>
          <div className="flex flex-wrap gap-2">
            {ARSKURSBAND_ORDNING.map((s) => {
              const active = selectedStadier.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleStadium(s)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    active
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/30"
                      : "border border-gray-300 bg-white text-gray-800 hover:border-primary-400 hover:bg-primary-50/50"
                  }`}
                >
                  {ARSKURSBAND_LABELS[s]}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                      active ? "bg-white/25 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {stadiumCounts[s]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dimensionerna — täckningslagret, därför hopfällt.
            De svarar på "vad har jag hunnit med i terminen", inte på "vad
            ska jag göra på torsdag". Se lib/taxonomi.ts. */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setShowDimensions((v) => !v)}
            aria-expanded={showDimensions}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showDimensions ? "rotate-180" : ""
              }`}
            />
            Filtrera på de sju AI-litteracitetsdimensionerna
            {selectedLiteracyIds.length > 0 && (
              <span className="rounded-full bg-primary-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                {selectedLiteracyIds.length}
              </span>
            )}
          </button>
          {showDimensions && (
            <div className="mt-3">
              <p className="mb-3 text-xs text-gray-500">
                Dimensionerna beskriver täckning över en termin. Innehåll utan
                koppling visas alltid.
              </p>
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
          )}
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
            {filteredItems.slice(0, visasAntal).map((item) => (
              <UnifiedResultCard
                key={item.id}
                item={item}
                query={searchQuery}
              />
            ))}
          </div>
        )}

        {filteredItems.length > visasAntal && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisasAntal((n) => n + SIDSTORLEK)}
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-all hover:border-primary-400 hover:bg-primary-50/50"
            >
              Visa fler
            </button>
            <p className="mt-3 text-sm text-gray-500">
              Visar {visasAntal} av {filteredItems.length} träffar
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
