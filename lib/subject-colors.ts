/**
 * Färgmapping för olika ämnen
 * Returnerar gradient-färger som CSS-värden för inline styles
 */

export const subjectColors = {
  svenska: {
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%)',
    light: 'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 50%, #eff6ff 100%)',
  },
  matematik: {
    gradient: 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 50%, #d946ef 100%)',
    light: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 50%, #fae8ff 100%)',
  },
  naturvetenskap: {
    gradient: 'linear-gradient(135deg, #10b981 0%, #22c55e 50%, #14b8a6 100%)',
    light: 'linear-gradient(135deg, #d1fae5 0%, #dcfce7 50%, #ccfbf1 100%)',
  },
  samhallskunskap: {
    gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #eab308 100%)',
    light: 'linear-gradient(135deg, #ffedd5 0%, #fef3c7 50%, #fef9c3 100%)',
  },
  engelska: {
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
    light: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f5f3ff 100%)',
  },
  estetiska: {
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #ef4444 100%)',
    light: 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 50%, #fee2e2 100%)',
  },
  default: {
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%)',
    light: 'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 50%, #eff6ff 100%)',
  },
} as const;

/**
 * Hämta färgschema baserat på ämnesnamn
 * Normaliserar ämnesnamnet till gemener och tar bort mellanslag
 */
export function getSubjectColors(subject: string) {
  const normalizedSubject = subject.toLowerCase().replace(/\s+/g, '');

  // Matcha ämnesnamn
  if (normalizedSubject.includes('svenska')) return subjectColors.svenska;
  if (normalizedSubject.includes('matematik')) return subjectColors.matematik;
  if (normalizedSubject.includes('naturvetenskap') || normalizedSubject.includes('biologi') ||
      normalizedSubject.includes('fysik') || normalizedSubject.includes('kemi')) {
    return subjectColors.naturvetenskap;
  }
  if (normalizedSubject.includes('samhäll') || normalizedSubject.includes('samhall')) {
    return subjectColors.samhallskunskap;
  }
  if (normalizedSubject.includes('engelska')) return subjectColors.engelska;
  if (normalizedSubject.includes('bild') || normalizedSubject.includes('musik') ||
      normalizedSubject.includes('estetisk')) {
    return subjectColors.estetiska;
  }

  return subjectColors.default;
}
