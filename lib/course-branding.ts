export type CourseBranding = {
  image?: string;
  gradient: string;
  accent?: string;
};

const courseBrandingMap: Record<string, CourseBranding> = {
  "svenska-1": {
    image: "/svenska.webp",
    gradient:
      "linear-gradient(135deg, rgba(20,184,166,0.95) 0%, rgba(6,182,212,0.9) 55%, rgba(15,118,110,0.9) 100%)",
    accent: "from-emerald-400/20 via-cyan-400/10 to-blue-500/10",
  },
  "svenska-2": {
    image: "/svenska.webp",
    gradient:
      "linear-gradient(135deg, rgba(67,56,202,0.95) 0%, rgba(14,165,233,0.9) 45%, rgba(8,47,73,0.9) 100%)",
    accent: "from-indigo-400/20 via-sky-400/10 to-emerald-400/10",
  },
};

export function getCourseBranding(course?: string): CourseBranding | undefined {
  if (!course) return undefined;
  const slug = course.toLowerCase().trim().replace(/\s+/g, "-");
  return courseBrandingMap[slug];
}
