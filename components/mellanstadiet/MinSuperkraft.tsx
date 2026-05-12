"use client";

import { useState } from "react";
import { Plus, X, Sparkles, Printer, Heart } from "lucide-react";

/* Min superkraft-affisch — eleven listar saker bara hen kan göra (saker AI
 * aldrig kommer kunna). Skrivs in i tre kategorier: kropp, hjärta, närvaro.
 * Kan printas som affisch.
 */

type Category = "kropp" | "hjärta" | "närvaro";

interface Item {
  id: string;
  category: Category;
  text: string;
}

const CATEGORIES: { id: Category; label: string; hint: string; color: string }[] = [
  {
    id: "kropp",
    label: "Min kropp",
    hint: "Saker du upplever fysiskt — smaker, känslor i kroppen, rörelser",
    color: "#fb923c",
  },
  {
    id: "hjärta",
    label: "Mitt hjärta",
    hint: "Saker du bryr dig om på riktigt — människor, djur, platser, händelser",
    color: "#f43f5e",
  },
  {
    id: "närvaro",
    label: "Min närvaro",
    hint:
      "Saker du gör för andra — krama, lyssna, vara där, sitta bredvid någon som är ledsen",
    color: "#a5b4fc",
  },
];

const SUGGESTIONS: Record<Category, string[]> = {
  kropp: [
    "Smaka på en sommar-jordgubbe",
    "Känna gräs mellan tårna",
    "Kasta sig i en sjö",
    "Springa tills jag inte orkar mer",
    "Krama någon",
  ],
  hjärta: [
    "Sakna någon",
    "Bli verkligt arg när det är orättvist",
    "Älska en plats",
    "Skratta tills jag gråter",
    "Bry mig om mitt husdjur",
  ],
  närvaro: [
    "Sitta bredvid en kompis som är ledsen",
    "Lyssna utan att svara",
    "Vara med när det räknas",
    "Pussa mamma godnatt",
    "Springa fram när någon ramlar",
  ],
};

export function MinSuperkraft({
  accentHex = "#8b5cf6",
}: {
  accentHex?: string;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [inputs, setInputs] = useState<Record<Category, string>>({
    kropp: "",
    hjärta: "",
    närvaro: "",
  });
  const [nextId, setNextId] = useState(1);

  const add = (category: Category, text: string) => {
    const t = text.trim();
    if (!t) return;
    if (items.some((i) => i.text === t)) return;
    setItems([...items, { id: `i${nextId}`, category, text: t }]);
    setNextId(nextId + 1);
    setInputs((p) => ({ ...p, [category]: "" }));
  };

  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const print = () => {
    if (typeof window !== "undefined") window.print();
  };

  const total = items.length;

  return (
    <div
      className="my-10 overflow-hidden rounded-xl border bg-[var(--ms-bg-subtle)]"
      style={{ borderColor: `${accentHex}80` }}
    >
      <div
        className="flex items-center gap-2 px-6 py-3 text-[var(--ms-text)]"
        style={{ background: accentHex }}
      >
        <Sparkles className="h-4 w-4" />
        <div className="ms-mono font-bold">
          MIN SUPERKRAFT — VAD AI ALDRIG KAN
        </div>
      </div>

      <div className="p-6">
        <p className="mb-6 text-sm leading-relaxed text-[var(--ms-text-body)]">
          Lista saker bara DU kan — saker AI aldrig kommer kunna göra. Tre
          kategorier: din kropp, ditt hjärta, din närvaro. Klicka på förslag
          eller skriv egna. {total > 0 && <span>Du har {total} just nu.</span>}
        </p>

        <div className="space-y-6">
          {CATEGORIES.map((cat) => {
            const itemsOfCat = items.filter((i) => i.category === cat.id);
            const remainingSuggestions = SUGGESTIONS[cat.id].filter(
              (s) => !items.some((i) => i.text === s)
            );

            return (
              <div key={cat.id}>
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ background: cat.color }}
                  >
                    <Heart className="h-4 w-4 text-[var(--ms-bg)]" />
                  </span>
                  <div className="flex-1">
                    <div
                      className="ms-mono"
                      style={{ color: cat.color }}
                    >
                      {cat.label.toUpperCase()}
                    </div>
                    <div className="text-xs text-[var(--ms-text-muted)]">{cat.hint}</div>
                  </div>
                </div>

                {/* Egna items */}
                {itemsOfCat.length > 0 && (
                  <ul className="mb-3 space-y-2">
                    {itemsOfCat.map((it) => (
                      <li
                        key={it.id}
                        className="flex items-start gap-2 rounded-lg border bg-[var(--ms-bg-card)] p-3"
                        style={{ borderColor: `${cat.color}60` }}
                      >
                        <Sparkles
                          className="mt-0.5 h-4 w-4 flex-none"
                          style={{ color: cat.color }}
                        />
                        <p className="flex-1 text-[var(--ms-text)]">{it.text}</p>
                        <button
                          type="button"
                          onClick={() => remove(it.id)}
                          className="rounded p-1 text-[var(--ms-text-muted)] hover:bg-[var(--ms-border)] hover:text-rose-300"
                          aria-label="Ta bort"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Egen text */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    add(cat.id, inputs[cat.id]);
                  }}
                  className="mb-3 flex gap-2"
                >
                  <input
                    type="text"
                    value={inputs[cat.id]}
                    onChange={(e) =>
                      setInputs((p) => ({ ...p, [cat.id]: e.target.value }))
                    }
                    placeholder={`Skriv något om ${cat.label.toLowerCase()}…`}
                    className="flex-1 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] px-3 py-2 text-sm text-[var(--ms-text)] placeholder-[var(--ms-text-dim)] outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    disabled={!inputs[cat.id].trim()}
                    className="ms-btn ms-btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Lägg till
                  </button>
                </form>

                {/* Förslag */}
                {remainingSuggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {remainingSuggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => add(cat.id, s)}
                        className="rounded-full border border-[var(--ms-border)] bg-[var(--ms-bg-card)] px-3 py-1 text-xs text-[var(--ms-text-body)] transition-all hover:border-[var(--ms-text)]/40 hover:text-[var(--ms-text)]"
                      >
                        + {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {total > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ms-border)] pt-5">
            <p className="text-sm text-[var(--ms-text-muted)]">
              Det här är saker AI inte kan ta från dig.
            </p>
            <button
              type="button"
              onClick={print}
              className="ms-btn ms-btn-secondary"
            >
              <Printer className="h-4 w-4" />
              Skriv ut som affisch
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
