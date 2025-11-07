export interface TOCHeading {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3, etc.
}

/**
 * Convert text to URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/[ö]/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extracts headings from MDX content to build a table of contents
 * Only extracts H2 headings for cleaner navigation
 */
export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^#{2}\s+(.+)$/gm; // Only H2 headings
  const headings: TOCHeading[] = [];
  const idCounts = new Map<string, number>(); // Track duplicate IDs
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const level = 2;

    // Create base URL-friendly ID from heading text
    const baseId = slugify(text);

    // Handle duplicates by adding a counter
    let id = baseId;
    const count = idCounts.get(baseId) || 0;
    if (count > 0) {
      id = `${baseId}-${count}`;
    }
    idCounts.set(baseId, count + 1);

    headings.push({ id, text, level });
  }

  return headings;
}

