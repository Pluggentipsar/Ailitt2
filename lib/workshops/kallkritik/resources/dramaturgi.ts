export type DramaturgyBlock = {
  time: string;
  block: string;
  activity: string;
  activityId?: string;
  note?: string;
};

export type DramaturgyPlan = {
  id: string;
  title: string;
  totalDuration: string;
  description: string;
  schedule: DramaturgyBlock[];
};

export const dramaturgi = {
  id: "dramaturgi",
  title: "Workshop-dramaturgi",
  blurb:
    "Färdiga dramaturgi-förslag för olika tidslängder. Plocka från sandlådan, fyll på efter behov.",
  intro:
    "Detta är inte EN workshop — det är ett bibliotek. Här är två förslag på hur du kan väva ihop aktiviteterna till en sammanhängande upplevelse. Anpassa efter grupp och tid.",
  plans: [
    {
      id: "tva-timmar",
      title: "2-timmars workshop",
      totalDuration: "120 min",
      description:
        "Kompakt format. Lärarna får uppleva flödet, bygga själv, känna sykofantin och samla sig kring vad de tar med hem.",
      schedule: [
        {
          time: "00–15",
          block: "Anslag",
          activity:
            "Föreläsningens slide 8 ”AI eller riktig?” + kort samtal",
          activityId: "ai-eller-riktig",
        },
        {
          time: "15–45",
          block: "Bygg själv",
          activity: "2.4 Skriv en fejkad nyhetsartikel (lärarversion)",
          activityId: "skriv-fejkad-nyhetsartikel",
        },
        { time: "45–60", block: "Paus", activity: "" },
        {
          time: "60–80",
          block: "Vännen",
          activity: "4.1 Testa sykofantiskt AI (lärarversion)",
          activityId: "testa-sykofantiskt-ai",
        },
        {
          time: "80–95",
          block: "Dark patterns",
          activity: "4.3 Fånga dark patterns (lärarversion)",
          activityId: "fanga-dark-patterns",
        },
        {
          time: "95–110",
          block: "Reflektion",
          activity:
            "”Vilka 2 aktiviteter tar JAG med hem till min klass nästa vecka?”",
        },
        {
          time: "110–120",
          block: "Avslut",
          activity:
            "Kollektivt: vad vill ni se mer av? Vad saknas?",
        },
      ],
    },
    {
      id: "fyra-timmar",
      title: "Halvdagsworkshop (4 timmar)",
      totalDuration: "240 min",
      description:
        "Längre format. Plats för både flödet, bygg själv, relationskritik och prebunking-spel.",
      schedule: [
        {
          time: "00–15",
          block: "Anslag",
          activity: "1.1 AI eller riktig? (gissningslek)",
          activityId: "ai-eller-riktig",
        },
        {
          time: "15–35",
          block: "Flödet",
          activity: "1.3 Granska ditt flöde",
          activityId: "granska-ditt-flode",
        },
        {
          time: "35–80",
          block: "Bygg själv",
          activity: "2.4 Skriv en fejkad nyhetsartikel",
          activityId: "skriv-fejkad-nyhetsartikel",
        },
        { time: "80–95", block: "Paus", activity: "" },
        {
          time: "95–115",
          block: "Hallucinationer",
          activity: "3.1 Hallucinationsjakten",
          activityId: "hallucinationsjakten",
        },
        {
          time: "115–140",
          block: "Vännen",
          activity: "4.1 Testa sykofantiskt AI",
          activityId: "testa-sykofantiskt-ai",
        },
        { time: "140–155", block: "Paus", activity: "" },
        {
          time: "155–175",
          block: "Relationskritik",
          activity: "5.6 Spela AI i två minuter",
          activityId: "spela-ai-tva-minuter",
        },
        {
          time: "175–200",
          block: "Verktyg hem",
          activity: "5.7 Be om motståndet uttryckligen",
          activityId: "be-om-motstandet",
        },
        {
          time: "200–225",
          block: "Reflektion",
          activity:
            "Vilka aktiviteter tar JAG med hem? Vad behöver jag prata med kollegorna om?",
        },
        {
          time: "225–240",
          block: "Avslut",
          activity: "Kollektivt: nästa steg, samtalskort, vidare läsning",
        },
      ],
    },
  ] satisfies DramaturgyPlan[],
};

export type DramaturgiData = typeof dramaturgi;
