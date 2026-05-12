"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* "Mönster-fångaren" — klassisk arkadkänsla där spelaren styr en paddel
 * med två fack (HUND/KATT) och fångar fallande objekt. Det spelaren fångar
 * blir AI:s träningsdata. Efter 45 sekunder testar AI:n sig själv på 5 nya
 * bilder — träffsäkerheten beror på hur DIVERSIFIERAD träningen var.
 *
 * Pedagogiskt: spelaren upplever själv hur ensidig träning leder till
 * bias. Svårighet: spelaren VILL fånga allt, men måste även våga *missa*
 * vissa kombinationer för att inte förstärka bias.
 */

type Animal = "hund" | "katt";
type Color = "brun" | "vit" | "svart" | "rod";

interface FallingItem {
  id: number;
  x: number; // 0-100 (procent av spelplan)
  y: number; // pixel från top
  vy: number; // fallhastighet
  animal: Animal;
  color: Color;
  emoji: string;
  caught: boolean;
}

const POOL: { animal: Animal; color: Color; emoji: string }[] = [
  { animal: "hund", color: "brun", emoji: "🐕" },
  { animal: "hund", color: "brun", emoji: "🐶" },
  { animal: "hund", color: "vit", emoji: "🐩" },
  { animal: "hund", color: "svart", emoji: "🐕‍🦺" },
  { animal: "hund", color: "rod", emoji: "🦮" },
  { animal: "katt", color: "vit", emoji: "🐈" },
  { animal: "katt", color: "vit", emoji: "😺" },
  { animal: "katt", color: "svart", emoji: "🐈‍⬛" },
  { animal: "katt", color: "brun", emoji: "🦁" },
  { animal: "katt", color: "rod", emoji: "🐅" },
];

// Testbilder som visas i slutfasen
const TEST_ITEMS = [
  { animal: "hund" as Animal, color: "brun" as Color, emoji: "🐕" },
  { animal: "katt" as Animal, color: "svart" as Color, emoji: "🐈‍⬛" },
  { animal: "hund" as Animal, color: "vit" as Color, emoji: "🐩" },
  { animal: "katt" as Animal, color: "brun" as Color, emoji: "🦁" },
  { animal: "hund" as Animal, color: "rod" as Color, emoji: "🦮" },
];

const GAME_DURATION = 45; // sekunder
const PADDLE_WIDTH = 28; // procent
const SPAWN_INTERVAL_INITIAL = 1500; // ms
const SPAWN_INTERVAL_MIN = 600; // ms (snabbare mot slutet)

type GameState = "menu" | "playing" | "paused" | "training" | "test" | "done";

interface TrainingEntry {
  animal: Animal;
  color: Color;
  /** true = spelaren placerade rätt; false = fel (lärs in som fel exempel) */
  correctlyClassified: boolean;
}

export function MonsterFangaren() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [paddleX, setPaddleX] = useState(50); // procent — endast för rendering
  const [items, setItems] = useState<FallingItem[]>([]);
  const [training, setTraining] = useState<TrainingEntry[]>([]);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);

  const arenaRef = useRef<HTMLDivElement>(null);
  const arenaHeightRef = useRef(420);
  const animFrameRef = useRef<number | null>(null);
  const spawnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextIdRef = useRef(1);
  const elapsedRef = useRef(0);
  // Refs för paddel — så animation-loopen kan läsa utan att starta om
  const paddleXRef = useRef(50);

  const movePaddle = useCallback((newX: number) => {
    const clamped = Math.max(
      PADDLE_WIDTH / 2,
      Math.min(100 - PADDLE_WIDTH / 2, newX)
    );
    paddleXRef.current = clamped;
    setPaddleX(clamped);
  }, []);

  // Mät arenahöjd
  useEffect(() => {
    const measure = () => {
      if (arenaRef.current) {
        arenaHeightRef.current = arenaRef.current.clientHeight;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [gameState]);

  // Tangentbordskontroll
  useEffect(() => {
    if (gameState !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        movePaddle(paddleXRef.current - 6);
      } else if (e.key === "ArrowRight" || e.key === "d") {
        movePaddle(paddleXRef.current + 6);
      } else if (e.key === " ") {
        e.preventDefault();
        setGameState("paused");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState, movePaddle]);

  // Touch/pekarstyrning
  const handlePointer = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (gameState !== "playing") return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      movePaddle(pct);
    },
    [gameState, movePaddle]
  );

  // Spelloop — animation + collision. Läser paddleX från ref så loopen
  // INTE startar om vid varje paddelrörelse (kritisk performance-fix).
  useEffect(() => {
    if (gameState !== "playing") return;

    const tick = () => {
      const currentPaddleX = paddleXRef.current;
      setItems((curr) => {
        const arenaH = arenaHeightRef.current;
        const paddleY = arenaH - 60;
        const updated: FallingItem[] = [];
        let scoreDelta = 0;
        let missDelta = 0;
        const newTraining: TrainingEntry[] = [];

        for (const it of curr) {
          if (it.caught) continue;
          const newY = it.y + it.vy;

          // Träffar paddelnivån?
          if (newY >= paddleY && it.y < paddleY) {
            const halfW = PADDLE_WIDTH / 2;
            const itemPctX = it.x;
            const paddleLeft = currentPaddleX - halfW;
            const paddleRight = currentPaddleX + halfW;

            if (itemPctX >= paddleLeft && itemPctX <= paddleRight) {
              // Vilket fack? (vänster halva av paddel = HUND, höger = KATT)
              const localPct = (itemPctX - paddleLeft) / PADDLE_WIDTH;
              const placedIn: Animal = localPct < 0.5 ? "hund" : "katt";
              const correctlyClassified = placedIn === it.animal;

              if (correctlyClassified) {
                scoreDelta += 10;
              } else {
                scoreDelta -= 5;
              }
              newTraining.push({
                animal: placedIn,
                color: it.color,
                correctlyClassified,
              });
              continue;
            }
          }

          // Föll förbi botten utan att fångas?
          if (newY > arenaH + 40) {
            missDelta++;
            continue;
          }
          updated.push({ ...it, y: newY });
        }

        if (scoreDelta !== 0) setScore((s) => Math.max(0, s + scoreDelta));
        if (missDelta > 0) setMisses((m) => m + missDelta);
        if (newTraining.length > 0) {
          setTraining((prev) => [...prev, ...newTraining]);
        }

        return updated;
      });

      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameState]);

  // Spawnloop
  useEffect(() => {
    if (gameState !== "playing") return;
    const spawn = () => {
      const archetype = POOL[Math.floor(Math.random() * POOL.length)];
      const item: FallingItem = {
        id: nextIdRef.current++,
        x: 5 + Math.random() * 90,
        y: -40,
        vy: 1.8 + Math.random() * 1.5 + elapsedRef.current * 0.05,
        animal: archetype.animal,
        color: archetype.color,
        emoji: archetype.emoji,
        caught: false,
      };
      setItems((curr) => [...curr, item]);

      // Beräkna nästa spawn — snabbare allt eftersom
      const factor = Math.max(
        0,
        Math.min(1, elapsedRef.current / GAME_DURATION)
      );
      const interval =
        SPAWN_INTERVAL_INITIAL -
        (SPAWN_INTERVAL_INITIAL - SPAWN_INTERVAL_MIN) * factor;

      spawnTimerRef.current = setTimeout(spawn, interval);
    };
    spawnTimerRef.current = setTimeout(spawn, 1000);
    return () => {
      if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
    };
  }, [gameState]);

  // Tickade timer + auto-end
  useEffect(() => {
    if (gameState !== "playing") return;
    elapsedRef.current = 0;
    tickTimerRef.current = setInterval(() => {
      elapsedRef.current += 1;
      const left = GAME_DURATION - elapsedRef.current;
      setTimeLeft(left);
      if (left <= 0) {
        endRound();
      }
    }, 1000);
    return () => {
      if (tickTimerRef.current) clearInterval(tickTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  const start = () => {
    setItems([]);
    setTraining([]);
    setScore(0);
    setMisses(0);
    setTimeLeft(GAME_DURATION);
    paddleXRef.current = 50;
    setPaddleX(50);
    elapsedRef.current = 0;
    setGameState("playing");
  };

  const endRound = () => {
    if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
    if (tickTimerRef.current) clearInterval(tickTimerRef.current);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setGameState("training");
  };

  const reset = () => {
    if (spawnTimerRef.current) clearTimeout(spawnTimerRef.current);
    if (tickTimerRef.current) clearInterval(tickTimerRef.current);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setItems([]);
    setTraining([]);
    setScore(0);
    setMisses(0);
    setGameState("menu");
  };

  // === AI-test fasen ===
  // AI gissar utifrån träningsentries — använder samma logik som Mönsterlabbet
  function aiPredict(
    test: { animal: Animal; color: Color }
  ): { guess: Animal; confidence: number } {
    if (training.length === 0)
      return { guess: "hund", confidence: 0.5 };
    const sameColor = training.filter((t) => t.color === test.color);
    if (sameColor.length === 0) {
      const hC = training.filter((t) => t.animal === "hund").length;
      const kC = training.filter((t) => t.animal === "katt").length;
      return {
        guess: hC >= kC ? "hund" : "katt",
        confidence: 0.5,
      };
    }
    const h = sameColor.filter((t) => t.animal === "hund").length;
    const k = sameColor.filter((t) => t.animal === "katt").length;
    const guess: Animal = h > k ? "hund" : k > h ? "katt" : test.animal;
    return {
      guess,
      confidence: Math.max(h, k) / sameColor.length,
    };
  }

  // === MENU SCREEN ===
  if (gameState === "menu") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#10b981]/40 bg-[var(--ms-bg-subtle)] p-8">
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">ARKADSPEL · L2</div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ms-text)]">
            Mönster-fångaren
          </h2>
          <p className="mb-6 text-lg text-[var(--ms-text-body)]">
            Du styr en paddel med två fack — <strong>HUND</strong> till vänster
            och <strong>KATT</strong> till höger. Fångade objekt blir AI:s
            träningsdata. Efter 45 sekunder testar vi AI:n du tränat.
          </p>

          <div className="mb-6 space-y-3 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5">
            <div className="ms-mono text-[var(--ms-text-muted)]">REGLER</div>
            <ul className="space-y-2 text-sm text-[var(--ms-text-body)]">
              <li className="flex gap-2">
                <span className="text-[#10b981]">→</span>
                <span>
                  Använd <kbd className="rounded bg-[var(--ms-bg)] px-1.5 py-0.5 font-mono text-xs text-[var(--ms-text)]">←</kbd>{" "}
                  <kbd className="rounded bg-[var(--ms-bg)] px-1.5 py-0.5 font-mono text-xs text-[var(--ms-text)]">→</kbd>{" "}
                  eller dra med fingret
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">→</span>
                <span>Rätt fack: +10 poäng. Fel fack: −5 (och AI lär sig fel!).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">→</span>
                <span>
                  Du kan medvetet <em>missa</em> objekt — om du tror de skulle göra
                  träningen ensidig.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#10b981]">→</span>
                <span>Slutpoäng = arkadpoäng + AI:ns träffsäkerhet i testet.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={start}
            className="ms-btn ms-btn-primary"
          >
            <Play className="h-4 w-4" />
            Starta
          </button>
        </div>
      </div>
    );
  }

  // === TRAINING SUMMARY → TEST ===
  if (gameState === "training") {
    // Visualisera träningen
    const colors: Color[] = ["brun", "vit", "svart", "rod"];
    const colorLabels: Record<Color, string> = {
      brun: "Bruna",
      vit: "Vita",
      svart: "Svarta",
      rod: "Röd-aktiga",
    };

    const correctTraining = training.filter((t) => t.correctlyClassified);
    const distribution: Record<Animal, Record<Color, number>> = {
      hund: { brun: 0, vit: 0, svart: 0, rod: 0 },
      katt: { brun: 0, vit: 0, svart: 0, rod: 0 },
    };
    for (const t of correctTraining) {
      distribution[t.animal][t.color]++;
    }

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#10b981]/40 bg-[var(--ms-bg-subtle)] p-8">
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">RUNDA SLUT · DIN TRÄNING</div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--ms-text)]">
            Så här tränades AI:n
          </h2>
          <p className="mb-6 text-[var(--ms-text-body)]">
            {correctTraining.length} korrekta exempel i facken.
            {misses > 0 && ` ${misses} missade objekt.`}
            {training.length > correctTraining.length &&
              ` ${training.length - correctTraining.length} felklassificeringar (AI:n lär sig dessa som fel exempel).`}
          </p>

          <div className="mb-6 space-y-4">
            {(["hund", "katt"] as Animal[]).map((animal) => (
              <div key={animal}>
                <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">
                  {animal === "hund" ? "🐕 HUND-EXEMPEL" : "🐈 KATT-EXEMPEL"}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => {
                    const count = distribution[animal][color];
                    return (
                      <div
                        key={color}
                        className={`rounded-lg border p-3 text-center ${
                          count === 0
                            ? "border-rose-500/40 bg-rose-500/5"
                            : count < 2
                            ? "border-amber-500/40 bg-amber-500/5"
                            : "border-emerald-500/40 bg-emerald-500/5"
                        }`}
                      >
                        <div
                          className={`text-2xl font-bold ${
                            count === 0
                              ? "text-rose-300"
                              : count < 2
                              ? "text-amber-300"
                              : "text-emerald-300"
                          }`}
                        >
                          {count}
                        </div>
                        <div className="ms-mono mt-0.5 text-xs text-[var(--ms-text-muted)]">
                          {colorLabels[color]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setGameState("test")}
            className="ms-btn ms-btn-primary"
          >
            Testa AI:n
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // === TEST PHASE ===
  if (gameState === "test") {
    const results = TEST_ITEMS.map((t) => ({ test: t, ...aiPredict(t) }));
    const correct = results.filter((r) => r.guess === r.test.animal).length;
    const aiBonus = correct * 50;
    const finalScore = score + aiBonus - misses * 2;

    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#10b981]/40 bg-[var(--ms-bg-subtle)] p-8">
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-[#fcd34d]" />
            <div>
              <div className="ms-mono text-[var(--ms-text-muted)]">SLUTRESULTAT</div>
              <div className="text-3xl font-bold text-[var(--ms-text)]">
                {finalScore} poäng
              </div>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-3 text-center">
              <div className="ms-mono text-[var(--ms-text-muted)]">ARKAD</div>
              <div className="text-2xl font-bold text-[#a5b4fc]">{score}</div>
            </div>
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-3 text-center">
              <div className="ms-mono text-[var(--ms-text-muted)]">AI-BONUS</div>
              <div className="text-2xl font-bold text-[#fcd34d]">
                +{aiBonus}
              </div>
            </div>
            <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-3 text-center">
              <div className="ms-mono text-[var(--ms-text-muted)]">MISSAR</div>
              <div className="text-2xl font-bold text-rose-300">−{misses * 2}</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="ms-mono mb-3 text-[var(--ms-text-muted)]">
              AI TESTAS PÅ 5 NYA BILDER · {correct} / 5 RÄTT
            </div>
            <div className="space-y-2">
              {results.map((r, i) => {
                const ok = r.guess === r.test.animal;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg border p-3 ${
                      ok
                        ? "border-emerald-500/40 bg-emerald-500/10"
                        : "border-rose-500/40 bg-rose-500/10"
                    }`}
                  >
                    <span className="text-3xl" aria-hidden>
                      {r.test.emoji}
                    </span>
                    <div className="flex-1 text-sm">
                      <div className="font-semibold text-[var(--ms-text)]">
                        {r.test.color}{" "}
                        {r.test.animal === "hund" ? "hund" : "katt"} (sanning)
                      </div>
                      <div
                        className={`ms-mono ${
                          ok ? "text-emerald-300" : "text-rose-300"
                        }`}
                      >
                        AI: {r.guess.toUpperCase()}{" "}
                        {ok ? "✓" : "✗"} ({Math.round(r.confidence * 100)}%
                        säker)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-[#fcd34d]/40 bg-[#fcd34d]/5 p-5">
            <div className="ms-mono mb-2 text-[#fcd34d]">INSIKT</div>
            <p className="leading-relaxed text-[#fde68a]">
              {correct >= 4
                ? "Bra träning. Din diversifiering gav AI:n flera mönster att luta sig mot. Det är så bra ML fungerar — varierad data, robust modell."
                : correct >= 2
                ? "Halvbra. Vissa färger fanns inte i din träning, eller bara på ett djur. AI:n gissar nu fel på de kombinationerna. Det kallas bias."
                : "AI:n misslyckas på testbilderna. Det betyder inte att den är 'dum' — den har bara inte sett tillräckligt med varierad data. Tänk på det när du läser om verkliga AI-system: de speglar ALLTID datan de tränats på."}
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="ms-btn ms-btn-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Spela igen
          </button>
        </div>
      </div>
    );
  }

  // === PLAYING / PAUSED ===
  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-[#10b981]/40 bg-[var(--ms-bg-subtle)]">
        {/* Topbar */}
        <div className="flex items-center justify-between gap-4 bg-[#10b981] px-6 py-3">
          <div className="ms-mono font-bold text-[var(--ms-bg)]">
            POÄNG: {score}
          </div>
          <div className="ms-mono font-bold text-[var(--ms-bg)]">
            TID: {timeLeft}s
          </div>
          <div className="ms-mono font-bold text-[var(--ms-bg)]">
            MISSAR: {misses}
          </div>
        </div>

        {/* Arenan */}
        <div
          ref={arenaRef}
          onPointerMove={handlePointer}
          onPointerDown={handlePointer}
          className="relative h-[420px] w-full select-none touch-none overflow-hidden bg-gradient-to-b from-[var(--ms-bg)] via-[var(--ms-bg-subtle)] to-[var(--ms-bg-card)]"
          role="application"
          aria-label="Spelplan — fånga djur i rätt fack"
        >
          {/* Grid bg */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(36, 50, 72, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(36, 50, 72, 0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Fallande objekt */}
          {items.map((it) => (
            <div
              key={it.id}
              className="pointer-events-none absolute text-3xl"
              style={{
                left: `${it.x}%`,
                top: `${it.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              aria-hidden
            >
              {it.emoji}
            </div>
          ))}

          {/* Paddel */}
          <div
            className="absolute bottom-2 flex h-12 transform overflow-hidden rounded-md border-2 border-[#10b981] bg-[var(--ms-bg-card)] shadow-lg shadow-[#10b981]/30"
            style={{
              left: `${paddleX}%`,
              width: `${PADDLE_WIDTH}%`,
              transform: "translateX(-50%)",
              transition: "left 60ms ease-out",
            }}
          >
            <div className="flex h-full flex-1 items-center justify-center bg-[#10b981]/20 font-mono text-xs font-bold tracking-wider text-emerald-200">
              🐕 HUND
            </div>
            <div className="flex h-full flex-1 items-center justify-center border-l-2 border-[#10b981] bg-[#a855f7]/20 font-mono text-xs font-bold tracking-wider text-purple-200">
              🐈 KATT
            </div>
          </div>

          {/* Pause-overlay */}
          {gameState === "paused" && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--ms-overlay)] backdrop-blur">
              <Pause className="mb-3 h-10 w-10 text-[var(--ms-text)]" />
              <div className="mb-4 text-2xl font-bold text-[var(--ms-text)]">Pausat</div>
              <button
                type="button"
                onClick={() => setGameState("playing")}
                className="ms-btn ms-btn-primary"
              >
                <Play className="h-4 w-4" />
                Fortsätt
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 border-t border-[var(--ms-border)] p-3">
          <div className="ms-mono hidden text-[var(--ms-text-muted)] sm:block">
            ← → eller dra · MELLANSLAG paus
          </div>
          <div className="ms-mono text-[var(--ms-text-muted)] sm:hidden">
            DRA FÖR ATT STYRA
          </div>
          <div className="flex gap-2">
            {gameState === "playing" && (
              <button
                type="button"
                onClick={() => setGameState("paused")}
                className="ms-btn ms-btn-secondary"
              >
                <Pause className="h-3.5 w-3.5" />
                Paus
              </button>
            )}
            <button
              type="button"
              onClick={reset}
              className="ms-btn ms-btn-secondary"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Avsluta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
