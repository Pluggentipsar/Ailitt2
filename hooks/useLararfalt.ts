"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Lärarens egna ifyllningar för en övning — texter, exempel och länkar som
 * läraren förbereder innan lektionen och som sedan visas i klassrumsläget.
 *
 * Varför ett eget litet lager i stället för useLocalStorage: varje fält på
 * sidan anropar den här kroken separat, och en `useState`-baserad krok ger då
 * varje fält sin EGEN kopia av värdena. Fält två skriver då över fält ett med
 * sin inaktuella kopia — sista skrivningen vinner och läraren tappar det den
 * skrivit. Här delar alla instanser för samma övning en cache, och
 * skrivningen sker som read-modify-write mot den.
 *
 * storage-lyssnaren håller dessutom flikar i synk, så att förberedelse i en
 * flik syns i klassrumsläget i en annan.
 *
 * Kvarstående begränsning: localStorage är per webbläsare. Förbereder läraren
 * hemma och kör från klassrumsdatorn följer ifyllningarna inte med.
 */

const PREFIX = "ai-litt-lararfalt-";

// Stabil referens — useSyncExternalStore kräver att snapshoten inte byter
// identitet mellan renderingar när inget ändrats.
const TOMT: Record<string, string> = {};

const cache = new Map<string, Record<string, string>>();
const lyssnare = new Map<string, Set<() => void>>();

function las(nyckel: string): Record<string, string> {
  const traff = cache.get(nyckel);
  if (traff) return traff;
  let varden: Record<string, string> = TOMT;
  if (typeof window !== "undefined") {
    try {
      const rad = window.localStorage.getItem(nyckel);
      if (rad) varden = JSON.parse(rad) as Record<string, string>;
    } catch {
      // Trasig JSON — börja om från tomt hellre än att krascha sidan.
    }
  }
  cache.set(nyckel, varden);
  return varden;
}

function meddela(nyckel: string) {
  lyssnare.get(nyckel)?.forEach((fn) => fn());
}

function skriv(nyckel: string, nya: Record<string, string>) {
  cache.set(nyckel, nya);
  try {
    window.localStorage.setItem(nyckel, JSON.stringify(nya));
  } catch {
    // Full eller blockerad lagring — värdet lever kvar i cachen för den
    // här sessionen, vilket är bättre än att tappa det direkt.
  }
  meddela(nyckel);
}

// En enda storage-lyssnare räcker för alla nycklar.
let storageKopplad = false;
function kopplaStorage() {
  if (storageKopplad || typeof window === "undefined") return;
  storageKopplad = true;
  window.addEventListener("storage", (e) => {
    if (!e.key?.startsWith(PREFIX)) return;
    cache.delete(e.key);
    meddela(e.key);
  });
}

function prenumerera(nyckel: string, fn: () => void) {
  kopplaStorage();
  if (!lyssnare.has(nyckel)) lyssnare.set(nyckel, new Set());
  lyssnare.get(nyckel)!.add(fn);
  return () => {
    lyssnare.get(nyckel)?.delete(fn);
  };
}

export function useLararfalt(ovningId: string) {
  const nyckel = `${PREFIX}${ovningId}`;

  const varden = useSyncExternalStore(
    useCallback((fn: () => void) => prenumerera(nyckel, fn), [nyckel]),
    useCallback(() => las(nyckel), [nyckel]),
    // Serverrendering har ingen localStorage — tomt, sedan fyller klienten på.
    useCallback(() => TOMT, [])
  );

  const satt = useCallback(
    (faltId: string, varde: string) => {
      skriv(nyckel, { ...las(nyckel), [faltId]: varde });
    },
    [nyckel]
  );

  const rensa = useCallback(() => skriv(nyckel, {}), [nyckel]);

  /** Antal ifyllda fält — driver "3 av 5 ifyllda"-indikatorer. */
  const antalIfyllda = Object.values(varden).filter(
    (v) => v.trim().length > 0
  ).length;

  return { varden, satt, rensa, antalIfyllda };
}
