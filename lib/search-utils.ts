/**
 * Sökverktyg för textmarkering och snippet-extrahering
 */

export interface HighlightMatch {
  text: string;
  isHighlighted: boolean;
}

export interface SearchSnippet {
  text: string;
  matches: HighlightMatch[];
}

/**
 * Extraherar en snippet omkring en matchning med kontext
 */
export function extractSnippet(
  text: string,
  searchTerm: string,
  contextLength: number = 60
): SearchSnippet {
  if (!searchTerm || !text) {
    return {
      text: text.substring(0, contextLength * 2) + '...',
      matches: [{ text: text.substring(0, contextLength * 2) + '...', isHighlighted: false }],
    };
  }

  // Hitta första matchningen (case-insensitive)
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerSearchTerm);

  if (matchIndex === -1) {
    return {
      text: text.substring(0, contextLength * 2) + '...',
      matches: [{ text: text.substring(0, contextLength * 2) + '...', isHighlighted: false }],
    };
  }

  // Beräkna start och slut för snippet
  const start = Math.max(0, matchIndex - contextLength);
  const end = Math.min(text.length, matchIndex + searchTerm.length + contextLength);

  let snippet = text.substring(start, end);

  // Lägg till ellipsis
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';

  // Dela upp i matches för highlighting
  const matches = highlightText(snippet, searchTerm);

  return {
    text: snippet,
    matches,
  };
}

/**
 * Delar upp text i segment med och utan highlights
 */
export function highlightText(text: string, searchTerm: string): HighlightMatch[] {
  if (!searchTerm || !text) {
    return [{ text, isHighlighted: false }];
  }

  const matches: HighlightMatch[] = [];
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();

  let lastIndex = 0;
  let matchIndex = lowerText.indexOf(lowerSearchTerm);

  while (matchIndex !== -1) {
    // Lägg till text före matchning
    if (matchIndex > lastIndex) {
      matches.push({
        text: text.substring(lastIndex, matchIndex),
        isHighlighted: false,
      });
    }

    // Lägg till matchad text
    matches.push({
      text: text.substring(matchIndex, matchIndex + searchTerm.length),
      isHighlighted: true,
    });

    lastIndex = matchIndex + searchTerm.length;
    matchIndex = lowerText.indexOf(lowerSearchTerm, lastIndex);
  }

  // Lägg till resterande text
  if (lastIndex < text.length) {
    matches.push({
      text: text.substring(lastIndex),
      isHighlighted: false,
    });
  }

  return matches;
}

/**
 * Räknar antal matchningar i en text
 */
export function countMatches(text: string, searchTerm: string): number {
  if (!searchTerm || !text) return 0;

  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  let count = 0;
  let index = 0;

  while ((index = lowerText.indexOf(lowerSearchTerm, index)) !== -1) {
    count++;
    index += searchTerm.length;
  }

  return count;
}

/**
 * Rensar bort MDX-syntax från text för bättre snippets
 */
export function cleanMdxText(text: string): string {
  return text
    // Ta bort frontmatter
    .replace(/^---[\s\S]*?---/m, '')
    // Ta bort MDX-komponenter
    .replace(/<[A-Z][^>]*>/g, '')
    .replace(/<\/[A-Z][^>]*>/g, '')
    // Ta bort Markdown-headers
    .replace(/^#{1,6}\s+/gm, '')
    // Ta bort Markdown-formatting
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Ta bort länkar
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Ta bort kod-blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    // Trimma extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}
