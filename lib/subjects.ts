export type SubjectStatus = "available" | "coming-soon";
export type CourseStatus = "available" | "planned";

export interface SubjectCourse {
  slug: string;
  title: string;
  description: string;
  status: CourseStatus;
  pageUrl?: string;
  ctaLabel?: string;
}

export interface SubjectFocusArea {
  title: string;
  description: string;
}

export interface SubjectHero {
  title: string;
  highlight?: string;
  lead: string;
  backgroundImage: string;
}

export interface SubjectHubConfig {
  slug: string;
  name: string;
  status: SubjectStatus;
  blurb: string;
  summary: string;
  highlights: string[];
  hero?: SubjectHero;
  matchSubjects: string[];
  courses: SubjectCourse[];
  focusAreas?: SubjectFocusArea[];
}

export const SUBJECT_CONFIGS: SubjectHubConfig[] = [
  {
    slug: "svenska",
    name: "Svenska",
    status: "available",
    blurb: "Navet för Svenska 1–3, bedömning och tematiska resurser där AI blir ett verktyg för språk, kultur och kritiskt tänkande.",
    summary:
      "Här samlar vi kompletta arbetsområden, uppgiftsbanker och stöd för bedömning. Varje modul knyter an till ämnesplanen och väver in AI som medtänkare utan att tappa ämnesdjupet.",
    highlights: [
      "Kompletta moduler för Svenska 1",
      "Planerade spår för Svenska 2–3",
      "Bedömning, respons och uppgiftsbank",
    ],
    hero: {
      title: "Svenska som hubb för",
      highlight: "språk, kultur och epistemisk medvetenhet",
      lead: "Här möts litteratur, språk och teknik.",
      backgroundImage: "/svenska.png",
    },
    matchSubjects: ["Svenska"],
    courses: [
      {
        slug: "svenska-1",
        title: "Svenska 1",
        description: "Vi samlar arbetsområden och uppgifter som hjälper elever att tänka, skapa och förstå med och om AI – alltid med svenskämnets mänskliga kärna i fokus.",
        status: "available",
      },
      {
        slug: "svenska-2",
        title: "Svenska 2",
        description: "Fördjupande moduler om retorik, kritisk textanalys, vetenskapligt skrivande och källmedvetenhet med AI.",
        status: "planned",
      },
      {
        slug: "svenska-3",
        title: "Svenska 3",
        description: "Resurser för avancerat skrivande, retoriska fördjupningar och synteser mellan humaniora och AI.",
        status: "planned",
      },
      {
        slug: "bedomning",
        title: "Bedömning & uppgiftsbank",
        description: "Matrisstöd, responsmodeller och tematiserade uppgifter som säkrar likvärdighet när AI finns i klassrummet.",
        status: "available",
        pageUrl: "/amnen/svenska/bedomning",
        ctaLabel: "Öppna bedömningsguiden",
      },
    ],
    focusAreas: [
      {
        title: "Språk som teknik & kultur",
        description: "Synka AI-verktyg med svenskämnets hantverk: retorik, skrivprocesser och litterär tolkning.",
      },
      {
        title: "Bedömning med integritet",
        description: "Hitta sätt att examinera och följa progression när elever har tillgång till generativa modeller.",
      },
      {
        title: "Epistemisk beredskap",
        description: "Utforska hur kunskap, röst och källkritik förändras när AI blir medförfattare och medlyssnare.",
      },
    ],
  },
  {
    slug: "moderna-sprak",
    name: "Moderna språk",
    status: "coming-soon",
    blurb: "Adaptiva AI-samtal, kulturmöten och skrivstöd för steg 3–5.",
    summary:
      "Vi tar fram scenarion där AI agerar språkpartner, kontextmotor och feedbacksystem för muntlig och skriftlig färdighet.",
    highlights: ["Interaktiva AI-dialoger", "Autentiska textlaboratorier", "Formativ återkoppling i realtid"],
    matchSubjects: ["Moderna språk"],
    courses: [
      {
        slug: "steg-3-5",
        title: "Steg 3–5",
        description: "Sekvenser som tränar vokabulär, interkulturell kompetens och kreativ produktion med AI som coach.",
        status: "planned",
      },
    ],
  },
  {
    slug: "historia",
    name: "Historia",
    status: "coming-soon",
    blurb: "Narrativ analys, historiemedvetande och källkritik i symbios med AI.",
    summary:
      "Planerade case där elever prövar perspektivbyte, simulerar källor och granskar AI-genererade påståenden.",
    highlights: ["Epistemisk källkritik", "AI som historiografisk sparringpartner", "Scenarion från forntid till samtid"],
    matchSubjects: ["Historia"],
    courses: [
      {
        slug: "historia-1",
        title: "Historia 1a1/1b",
        description: "Teman som knyter fakta, värderingar och digital källkritik.",
        status: "planned",
      },
    ],
  },
  {
    slug: "samhallskunskap",
    name: "Samhällskunskap",
    status: "coming-soon",
    blurb: "AI som opinionsanalytiker, demokratipartner och simulering av ekonomiska scenarier.",
    summary:
      "Kommande moduler gör det möjligt att modellera samhällsfrågor, debatter och policyförslag tillsammans med AI.",
    highlights: ["Simulerade debatter", "Medie- & källkritik", "Data storytelling"],
    matchSubjects: ["Samhällskunskap"],
    courses: [
      {
        slug: "samhallskunskap-1",
        title: "Samhällskunskap 1a1/1b",
        description: "Bygger kapacitet för analys av samhällsfrågor med AI som verktyg.",
        status: "planned",
      },
    ],
  },
];

export const AVAILABLE_SUBJECTS = SUBJECT_CONFIGS.filter(
  (subject) => subject.status === "available"
);

export function getSubjectConfig(slug: string) {
  return SUBJECT_CONFIGS.find((subject) => subject.slug === slug);
}
