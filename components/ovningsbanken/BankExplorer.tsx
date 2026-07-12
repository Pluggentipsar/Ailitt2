"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Clock,
  Users,
  Wifi,
  WifiOff,
  ArrowRight,
  ListMusic,
  Copy,
  Check,
  Play,
} from "lucide-react";
import {
  ovningar,
  DOMAN_META,
  type BankOvning,
  type OvningDoman,
  type OvningKalla,
} from "@/lib/ovningsbanken";
import { AddToPlaylistButton } from "@/components/workshops/kallkritik/AddToPlaylistButton";
import { usePlaylist } from "@/components/workshops/kallkritik/PlaylistProvider";
import { DomanBadge } from "@/components/eleverna-om-ai/DomanBadge";
import {
  ARSKURSBAND_LABELS,
  DOMAN_ORDNING,
  KALLA_META,
  TID_LABELS,
  matcharArskursband,
  matcharTid,
  type Arskursband,
  type TidBucket,
} from "./meta";

const KALLA_ORDNING: OvningKalla[] = ["banken", "eleverna-om-ai", "kallkritik"];

function toggleSetValue<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export function BankExplorer() {
  const [query, setQuery] = useState("");
  const [domaner, setDomaner] = useState<Set<OvningDoman>>(new Set());
  const [tider, setTider] = useState<Set<TidBucket>>(new Set());
  const [band, setBand] = useState<Set<Arskursband>>(new Set());
  const [kallor, setKallor] = useState<Set<OvningKalla>>(new Set());

  const filtrerade = useMemo(() => {
    let lista: BankOvning[] = ovningar;

    const q = query.trim().toLowerCase();
    if (q) {
      lista = lista.filter((o) =>
        [o.titel, o.blurb, o.syfte, o.material, o.arskurser]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    if (domaner.size > 0) {
      lista = lista.filter((o) => o.domaner.some((d) => domaner.has(d)));
    }
    if (tider.size > 0) {
      lista = lista.filter((o) =>
        [...tider].some((t) => matcharTid(o.tidMinuter, t))
      );
    }
    if (band.size > 0) {
      lista = lista.filter((o) =>
        [...band].some((b) => matcharArskursband(o.arskurser, b))
      );
    }
    if (kallor.size > 0) {
      lista = lista.filter((o) => kallor.has(o.kalla));
    }
    return lista;
  }, [query, domaner, tider, band, kallor]);

  const harFilter =
    query.trim().length > 0 ||
    domaner.size > 0 ||
    tider.size > 0 ||
    band.size > 0 ||
    kallor.size > 0;

  return (
    <section id="alla-ovningar" className="container mx-auto px-4 pb-12 pt-14">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-stone-900">Alla övningar</h2>
        <p className="mt-2 text-stone-600">
          Sök och filtrera — lägg till det du gillar i din spellista.
        </p>
      </div>

      {/* SÖK */}
      <div className="relative mb-4 max-w-xl">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök på titel, innehåll eller material…"
          className="w-full rounded-full border-2 border-stone-200 bg-white py-2.5 pl-11 pr-4 text-sm text-stone-900 outline-none transition-colors focus:border-stone-900"
        />
      </div>

      {/* FILTER-CHIPS */}
      <div className="mb-8 space-y-3">
        <FilterRad label="Domän">
          {DOMAN_ORDNING.map((d) => (
            <button
              key={d}
              onClick={() => setDomaner((prev) => toggleSetValue(prev, d))}
              className={`filter-pill ${domaner.has(d) ? "filter-pill--active" : ""}`}
            >
              {DOMAN_META[d].namn}
            </button>
          ))}
        </FilterRad>
        <FilterRad label="Tid">
          {(Object.keys(TID_LABELS) as TidBucket[]).map((t) => (
            <button
              key={t}
              onClick={() => setTider((prev) => toggleSetValue(prev, t))}
              className={`filter-pill ${tider.has(t) ? "filter-pill--active" : ""}`}
            >
              {TID_LABELS[t]}
            </button>
          ))}
        </FilterRad>
        <FilterRad label="Årskurs">
          {(Object.keys(ARSKURSBAND_LABELS) as Arskursband[]).map((b) => (
            <button
              key={b}
              onClick={() => setBand((prev) => toggleSetValue(prev, b))}
              className={`filter-pill ${band.has(b) ? "filter-pill--active" : ""}`}
            >
              {ARSKURSBAND_LABELS[b]}
            </button>
          ))}
        </FilterRad>
        <FilterRad label="Källa">
          {KALLA_ORDNING.map((k) => (
            <button
              key={k}
              onClick={() => setKallor((prev) => toggleSetValue(prev, k))}
              className={`filter-pill ${kallor.has(k) ? "filter-pill--active" : ""}`}
            >
              {k === "banken" ? "Nya" : KALLA_META[k].label}
            </button>
          ))}
          {harFilter && (
            <button
              onClick={() => {
                setQuery("");
                setDomaner(new Set());
                setTider(new Set());
                setBand(new Set());
                setKallor(new Set());
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-stone-900"
            >
              <X className="h-3.5 w-3.5" />
              Rensa filter
            </button>
          )}
        </FilterRad>
      </div>

      {/* RESULTAT */}
      <p className="mb-4 text-sm text-stone-500">
        {filtrerade.length} av {ovningar.length} övningar
      </p>

      {filtrerade.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-stone-600">
          Inga övningar matchar — prova att rensa något filter.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtrerade.map((o) => (
            <OvningKort key={o.id} ovning={o} />
          ))}
        </div>
      )}

      {/* MIN SPELLISTA — sticky panel längst ner */}
      <MinSpellistaPanel />
    </section>
  );
}

function FilterRad({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-stone-500">
        {label}
      </span>
      {children}
    </div>
  );
}

function OvningKort({ ovning }: { ovning: BankOvning }) {
  const kalla = KALLA_META[ovning.kalla];
  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        {ovning.domaner.map((d) => (
          <DomanBadge key={d} doman={d} />
        ))}
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${kalla.chip}`}
        >
          {kalla.label}
        </span>
      </div>

      <Link
        href={`/ovningsbanken/${ovning.id}`}
        className="group mb-1 mt-1 block"
      >
        <h3 className="text-lg font-semibold leading-snug text-stone-900 transition-colors group-hover:text-teal-700">
          {ovning.titel}
          <ArrowRight className="ml-1 inline h-4 w-4 -translate-y-px text-teal-600 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        </h3>
      </Link>

      <p className="flex-1 text-sm leading-relaxed text-stone-600">
        {ovning.blurb}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {ovning.tid}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {ovning.arskurser}
        </span>
        <span className="inline-flex items-center gap-1">
          {ovning.digitalaVerktyg ? (
            <Wifi className="h-3.5 w-3.5" />
          ) : (
            <WifiOff className="h-3.5 w-3.5" />
          )}
          {ovning.digitalaVerktyg ? "Digitalt" : "Analogt"}
        </span>
      </div>

      <div className="mt-4 border-t border-stone-100 pt-3">
        <AddToPlaylistButton
          activityId={ovning.id}
          addLabel="Lägg till i spellista"
          activeLabel="I min spellista"
        />
      </div>
    </article>
  );
}

function MinSpellistaPanel() {
  const { ids, buildUrl, playlistHref } = usePlaylist();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(buildUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="sticky bottom-4 z-30 mt-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-stone-900 text-white">
            <ListMusic className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-stone-900">
              Min spellista
            </p>
            <p className="text-xs text-stone-500">
              {ids.length === 0
                ? "Tom — lägg till övningar från korten ovan."
                : `${ids.length} ${ids.length === 1 ? "övning" : "övningar"} vald${ids.length === 1 ? "" : "a"}`}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={copyLink}
            disabled={ids.length === 0}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-stone-900 bg-white px-4 py-2 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Kopierad!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Kopiera delningslänk
              </>
            )}
          </button>
          {ids.length > 0 ? (
            <Link
              href={playlistHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              <Play className="h-4 w-4" />
              Kör spellistan
            </Link>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full bg-stone-900/40 px-4 py-2 text-sm font-semibold text-white">
              <Play className="h-4 w-4" />
              Kör spellistan
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
