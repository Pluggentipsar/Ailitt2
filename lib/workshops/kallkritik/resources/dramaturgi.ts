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
    "Detta är inte EN workshop — det är ett bibliotek av aktiviteter. Här är tre förslag på hur du kan väva ihop dem till en sammanhängande upplevelse: en kompakt 2-timmars, en halvdag och en heldag. Anpassa efter grupp och tid. Aktiviteterna 4.3 Fånga dark patterns, 5.1 AI berättar sina knep och 8.3 Den vanliga svensken är extra pedagogiskt slående — försök få med åtminstone en av dem i varje upplägg.",
  plans: [
    {
      id: "tva-timmar",
      title: "2-timmars workshop",
      totalDuration: "120 min",
      description:
        "Kompakt format. Lärarna får uppleva det mest pedagogiskt slående — design-manipulation, retoriska knep, sykofanti, och hur AI:s ”snälla” svar döljer bias.",
      schedule: [
        {
          time: "00–10",
          block: "Anslag",
          activity: "1.1 AI eller riktig? — snabb gissningslek",
          activityId: "ai-eller-riktig",
          note: "Kort version. Bara för att väcka frågan.",
        },
        {
          time: "10–35",
          block: "Vännen",
          activity:
            "4.3 Fånga dark patterns — spelet + 6 chatbottar på storskärm",
          activityId: "fanga-dark-patterns",
          note: "Hoppa över hela spelet — kör 2 scenarier + alla 6 chatbottar tillsammans.",
        },
        { time: "35–45", block: "Paus", activity: "" },
        {
          time: "45–60",
          block: "Retoriska knep",
          activity:
            "5.1 AI berättar sina knep — lärardemo på storskärm",
          activityId: "ai-berattar-sina-knep",
          note: "Den mest demonstrativa aktiviteten. Använd en tes som engagerar gruppen.",
        },
        {
          time: "60–80",
          block: "Vännen",
          activity: "4.1 Testa sykofantiskt AI — pararbete",
          activityId: "testa-sykofantiskt-ai",
        },
        {
          time: "80–100",
          block: "Bias",
          activity:
            "8.3 Den vanliga svensken — text → press → bild → asymmetri",
          activityId: "vanliga-svensken",
          note: "Visa på storskärm. Lyft alla fyra rörelser.",
        },
        {
          time: "100–115",
          block: "Reflektion",
          activity:
            "”Vilka 2 aktiviteter tar JAG med hem till min klass nästa vecka? Vad behöver jag prata med kollegorna om?”",
        },
        {
          time: "115–120",
          block: "Avslut",
          activity: "Kollektivt: vad vill ni se mer av? Vad saknas?",
        },
      ],
    },
    {
      id: "halvdag",
      title: "Halvdagsworkshop (4 timmar)",
      totalDuration: "240 min",
      description:
        "Längre format med plats för både bygg-själv, retorik, vänn-kritik och bias. Bäst att inleda med produktion (2.4) — när lärarna byggt en fejk-nyhet själva ser de mönstren utifrån i resten av dagen.",
      schedule: [
        {
          time: "00–15",
          block: "Anslag",
          activity: "1.1 AI eller riktig?",
          activityId: "ai-eller-riktig",
        },
        {
          time: "15–55",
          block: "Bygg själv",
          activity: "2.4 Skriv en fejkad nyhetsartikel",
          activityId: "skriv-fejkad-nyhetsartikel",
          note: "Prebunking via produktion. Sätter tonen för dagen.",
        },
        { time: "55–70", block: "Paus", activity: "" },
        {
          time: "70–100",
          block: "Vännen",
          activity: "4.3 Fånga dark patterns — full version med alla tre verktyg",
          activityId: "fanga-dark-patterns",
        },
        {
          time: "100–125",
          block: "Vännen",
          activity: "4.1 Testa sykofantiskt AI",
          activityId: "testa-sykofantiskt-ai",
        },
        { time: "125–140", block: "Paus", activity: "" },
        {
          time: "140–160",
          block: "Retoriska knep",
          activity: "5.1 AI berättar sina knep — lärardemo",
          activityId: "ai-berattar-sina-knep",
        },
        {
          time: "160–195",
          block: "Retoriska knep",
          activity:
            "5.2 Retorik-detektiven — sätt upp SkolUp-bot och pröva på storskärm",
          activityId: "retorik-detektiven",
        },
        {
          time: "195–220",
          block: "Bias",
          activity:
            "8.3 Den vanliga svensken — fullt asymmetri-test",
          activityId: "vanliga-svensken",
        },
        {
          time: "220–235",
          block: "Reflektion",
          activity:
            "Vilka 2–3 aktiviteter tar JAG med hem? Vad behöver kollegiet veta?",
        },
        {
          time: "235–240",
          block: "Avslut",
          activity: "Nästa steg + samtalskort att ta med",
        },
      ],
    },
    {
      id: "heldag",
      title: "Heldagsworkshop (7 timmar)",
      totalDuration: "420 min",
      description:
        "För kompetensutvecklingsdagen — täcker bredden från flöde och bygg-själv till retorik, relationskritik, prebunking-spel och bias. Lunch inräknad. Två pauser. Reflektion får rejäl tid eftersom det är där lärandet sätter sig.",
      schedule: [
        {
          time: "08:30–08:45",
          block: "Anslag",
          activity: "Inramning + 1.1 AI eller riktig?",
          activityId: "ai-eller-riktig",
        },
        {
          time: "08:45–09:25",
          block: "Bygg själv",
          activity: "2.4 Skriv en fejkad nyhetsartikel",
          activityId: "skriv-fejkad-nyhetsartikel",
          note: "Starta dagen med produktion. När man byggt har man sett.",
        },
        { time: "09:25–09:40", block: "Paus", activity: "" },
        {
          time: "09:40–10:10",
          block: "Hallucinationer",
          activity: "3.1 Hallucinationsjakten",
          activityId: "hallucinationsjakten",
        },
        {
          time: "10:10–10:40",
          block: "Vännen",
          activity: "4.1 Testa sykofantiskt AI",
          activityId: "testa-sykofantiskt-ai",
        },
        {
          time: "10:40–11:10",
          block: "Vännen",
          activity: "4.3 Fånga dark patterns — full version",
          activityId: "fanga-dark-patterns",
        },
        { time: "11:10–12:10", block: "Lunch", activity: "" },
        {
          time: "12:10–12:40",
          block: "Retoriska knep",
          activity: "5.1 AI berättar sina knep — lärardemo",
          activityId: "ai-berattar-sina-knep",
        },
        {
          time: "12:40–13:15",
          block: "Retoriska knep",
          activity: "5.2 Retorik-detektiven",
          activityId: "retorik-detektiven",
        },
        { time: "13:15–13:30", block: "Paus", activity: "" },
        {
          time: "13:30–13:55",
          block: "Relationskritik",
          activity:
            "6.1 Vem skulle du fråga? — öppen + anonym lapp-övning",
          activityId: "vem-skulle-du-fraga",
        },
        {
          time: "13:55–14:25",
          block: "Vaccinet",
          activity: "7.1 Bad News (svenska versionen) — alla spelar tillsammans",
          activityId: "bad-news-game",
        },
        {
          time: "14:25–14:55",
          block: "Bias",
          activity:
            "8.3 Den vanliga svensken — fullt asymmetri-test",
          activityId: "vanliga-svensken",
        },
        { time: "14:55–15:10", block: "Paus", activity: "" },
        {
          time: "15:10–15:25",
          block: "Bias",
          activity: "8.4 Översättnings-genus — snabb körning",
          activityId: "oversattnings-genus",
          note: "Kort men slående. Komplement till 8.3.",
        },
        {
          time: "15:25–15:55",
          block: "Reflektion",
          activity:
            "Vilka 3 aktiviteter tar JAG med hem? Vad behöver kollegiet veta? Vilken aktivitet vill jag göra REDAN nästa vecka?",
        },
        {
          time: "15:55–16:00",
          block: "Avslut",
          activity:
            "Samtalskort + nästa steg + var hittar man fördjupning",
        },
      ],
    },
  ] satisfies DramaturgyPlan[],
};

export type DramaturgiData = typeof dramaturgi;
