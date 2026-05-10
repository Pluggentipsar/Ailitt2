export interface SectionEntry {
  id: string;
  step: string;
  title: string;
}

export const STANDARD_SECTIONS: SectionEntry[] = [
  { id: "krok", step: "A", title: "Krok" },
  { id: "fall", step: "B", title: "Fall" },
  { id: "kartext", step: "C", title: "Kärntext" },
  { id: "interaktivt", step: "D", title: "Interaktivt" },
  { id: "praktik", step: "E", title: "Praktik" },
  { id: "landning", step: "F", title: "Landning" },
];

export function getNextSection(currentId: string): SectionEntry | null {
  const idx = STANDARD_SECTIONS.findIndex((s) => s.id === currentId);
  if (idx < 0 || idx >= STANDARD_SECTIONS.length - 1) return null;
  return STANDARD_SECTIONS[idx + 1];
}
