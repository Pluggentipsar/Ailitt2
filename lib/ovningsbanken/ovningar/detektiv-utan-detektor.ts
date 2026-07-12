// Övningsbanken — "Detektiv utan detektor".
// Två texter, en AI-genererad — eleverna gissar, får facit och landar i
// tvisten: inte ens OpenAI:s egen detektor klarade jobbet.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "detektiv-utan-detektor",
  titel: "Detektiv utan detektor",
  blurb:
    "Kan ni peka ut AI-texten? Ni kommer att gissa — och sen får ni veta att OpenAI:s egen detektor inte heller kunde.",
  syfte:
    "Alla tror att AI-text ”syns direkt”. Här får eleverna testa på riktigt: två texter om samma ämne, en elevskriven och en AI-genererad. De jämför, listar markörer, gissar — och sen kommer tvisten: OpenAI lade ner sin egen detektor 2023 efter 26 procents träffsäkerhet och 9 procent falskt anklagade. Övningen flyttar frågan från ”hur avslöjar vi AI-text?” till den mer ärliga: hur ska skolan hantera skrivande när ingen kan avslöja den?",

  domaner: ["mota"],
  aiLiteracyIds: [1, 4],

  tid: "25–30 min",
  tidMinuter: 30,
  arskurser: "Åk 8–gymnasiet",
  digitalaVerktyg: false,
  material:
    "Två korta utskrivna texter om samma ämne, märkta A och B — en elevskriven, en AI-genererad (läraren förbereder i förväg). Papper och penna. Eleverna behöver inga digitala verktyg.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska förbereda övningens material — och samtidigt uppleva den själv. Du genererar en AI-text, ställer den mot en elevtext och känner efter hur säker du egentligen är. Den osäkerheten är inte ett misslyckande: den är övningens kärna, och du behöver ha känt den innan du står inför klassen och någon frågar ”men du som är lärare, DU ser väl skillnaden?”",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj ämne och elevtext",
          body: "Ta en kort äkta elevtext (150–250 ord) — anonymiserad, med lov, gärna från ett tidigare läsår eller en annan klass. Alternativ: skriv en själv i trovärdig elevstil.",
        },
        {
          title: "Generera motsvarigheten",
          body: "Be AI:n skriva en text på samma uppgift, i samma längd — och lägg till: ”Skriv som en elev i åk 9. Inte perfekt — någon upprepning eller lite vardagligt språk är okej.”",
        },
        {
          title: "Lägg texterna bredvid varandra",
          body: "Lista dina egna markörer: vad får dig att TRO att den ena är AI? Ordval? Meningsrytm? För jämn kvalitet? Konstigt generiska exempel?",
        },
        {
          title: "Testa på en kollega",
          body: "Visa båda texterna utan facit. Gissar hen rätt? Be om motiveringen — den brukar vara mer intressant än gissningen.",
        },
        {
          title: "Känn efter",
          body: "Hur säker var du själv, ärligt talat? Den känslan av att stå och väga mellan A och B — det är den du ska ge eleverna. Och tvisten är att inte ens maskinerna klarar det bättre.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Gör AI-texten rättvis",
      body: "Om du låter AI:n skriva sin blankaste standardprosa blir övningen för lätt — och dessutom missvisande. En rimlig promptning (”skriv som en elev, med någon liten skavank”) ger den ärliga versionen av läget 2026. Övningen ska vara svår, för verkligheten är det.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Förbered två texter om samma ämne i ungefär samma längd (150–250 ord). Skriv ut dem sida vid sida, märkta A och B — utan några andra ledtrådar.",
        "Elevtexten: anonymiserad och med lov, helst från annan klass eller tidigare läsår så ingen i rummet känner igen sin egen text.",
        "AI-texten: be om elevnivå, inte perfektion (se prova själv-läget). Spara prompten du använde — den blir intressant att visa efteråt.",
        "Kör du övningen i flera klasser: växla vilken text som är A respektive B, annars läcker facit i korridoren.",
        "Ha siffrorna redo till avslöjandet: OpenAI:s egen detektor, nedlagd juli 2023, hittade 26 procent av AI-texterna och pekade ut 9 procent oskyldiga.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Dela ut utan förklaring",
          body: "”En av texterna är skriven av en elev, en av AI. Ni är detektiver — men ni får inga verktyg, bara era ögon.”",
          time: "2 min",
        },
        {
          title: "Pararbete",
          body: "Paren jämför, stryker under, listar markörer och bestämmer sig: vilken är AI? De skriver gissning OCH motivering — säg tydligt att motiveringen väger tyngst.",
          time: "10 min",
        },
        {
          title: "Omröstning och facit",
          body: "Handuppräckning per text. Räkna högt på tavlan. Ge facit — och räkna sen igen: hur stor andel av klassen hade rätt? Nära 50/50 är ett lysande resultat för diskussionen.",
          time: "5 min",
        },
        {
          title: "Tvisten",
          body: "Berätta: OpenAI — företaget bakom ChatGPT — byggde en egen AI-detektor. De lade ner den efter ett halvår. Träffsäkerhet: 26 procent. Falskt anklagade: 9 procent. Fråga klassen: om inte ens de kan — vem kan? Detektorer mot AI-text är en kapprustning där försvaret hittills alltid förlorat.",
          time: "5 min",
        },
        {
          title: "Diskussion — design i stället för polisarbete",
          body: "Vad betyder det här för skolan? Om AI-text inte kan avslöjas i efterhand måste uppgifterna, samtalen och redovisningarna designas annorlunda från början. Låt eleverna föreslå: hur skulle en skrivuppgift se ut där AI-fusk inte ens är frestande — eller inte ens möjligt?",
          time: "8 min",
        },
      ],
    },
    { type: "h", text: "Bedömning/efterarbete" },
    {
      type: "p",
      text: "Samla in parens markörlistor med gissning och motivering — de visar hur eleverna resonerar om text och stil, vilket är värdefullt långt utanför AI-frågan. Markörlistorna kan dessutom bli klassens gemensamma ”så känns AI-text 2026”-lista, som ni kan återbesöka om ett år och se vad som fortfarande stämmer.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Landa i spelregler, inte i uppgivenhet",
      body: "Den bästa avslutningen är att klassen formulerar egna spelregler: när är AI-hjälp okej i skrivande, och hur visar man öppet att man använt den? Det är mer hållbart än detektorjakt — och eleverna följer regler de varit med och satt.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Framför dig ligger två texter om samma ämne, märkta A och B. En är skriven av en elev. En är skriven av AI. Din uppgift: lista ut vilken som är vilken — och viktigare: förklara HUR du tänker.",
    },
    { type: "h", text: "Steg för steg" },
    {
      type: "list",
      ordered: true,
      items: [
        "Läs båda texterna en gång rakt igenom, utan att anteckna.",
        "Läs igen — nu med penna. Stryk under allt som får dig att misstänka AI eller människa: ordval, meningslängd, konstiga detaljer, något som är för perfekt eller för slarvigt.",
        "Gör en markörlista i paret: era bästa ledtrådar, och vilken text varje ledtråd pekar på.",
        "Bestäm er: vilken text är AI:ns? Skriv er gissning OCH er motivering. Motiveringen är viktigare än gissningen — en bra motivering med fel gissning slår en tom rätt gissning.",
        "Vänta med facit. Läraren har det — och en sak till att berätta som ni inte kommer gilla.",
      ],
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "list",
      items: [
        "Er markörlista med understrykningar eller citat ur texterna.",
        "Er gissning: A eller B.",
        "Er motivering i 2–3 meningar.",
      ],
    },
  ],

  diskussion: [
    "Vilka markörer visade sig funka — och vilka lurade er åt fel håll?",
    "OpenAI lade ner sin egen detektor efter att den hittat 26 procent av AI-texterna och pekat ut 9 procent oskyldiga. Vad betyder det för skolor som köper detektortjänster idag?",
    "Hur skulle det kännas att bli falskt anklagad för AI-fusk på en text du kämpat med? Vad gör en sådan anklagelse med tilliten mellan lärare och elev?",
    "Om texten inte kan avslöjas i efterhand — vad borde ändras i stället? Uppgifterna? Samtalen om texten? Sättet man visar sin arbetsprocess?",
  ],

  fallgropar: [
    "AI-texten blir för lätt att avslöja om du använder AI:ns opromptade standardprosa — då ”bevisar” övningen bara fördomen att AI-text syns direkt, vilket är falsk trygghet. Be om elevnivå med skavanker.",
    "Facit läcker mellan klasser om samma texter återanvänds — variera texterna eller växla A/B.",
    "Diskussionen kan glida mot ”hur fuskar man utan att åka fast” — parera med att flytta fokus till design- och tillitsfrågan: vad ska en skrivuppgift visa, och hur visar man det ärligt?",
  ],

  evidens: [
    {
      ref: "openai-classifier-2023",
      relevance:
        "Övningens tvist: OpenAI lade ner sin egen detektor i juli 2023 efter 26 procents träffsäkerhet och 9 procent falskt anklagade — kärnexemplet på att detektorjakt är en kapprustning utan stabil seger.",
    },
    {
      ref: "weber-wulff-2023",
      relevance:
        "Oberoende test av 14 detektorer med samma slutsats: inget verktyg tillförlitligt, enkel omskrivning sänker träffsäkerheten drastiskt. Eleverna gör i klassrummet samma upptäckt som forskarna gjorde i labbet.",
    },
  ],

  variationer: [
    "Nivåväxel nedåt (åk 8 eller oroliga grupper): kör omröstningen i helklass direkt efter tyst läsning — mindre prestige i att gissa fel när hela klassen gissar tillsammans.",
    "Fördjupning för gymnasiet (kräver digitala verktyg): eleverna genererar var sin AI-text hemma på samma uppgift, läraren blandar dem med äkta elevtexter — hela klassen blir både förfalskare och detektiver, och markörlistan skrivs av dem som just försökt undvika markörerna.",
  ],

  kedjarMed: ["ai-laste-aldrig-kallan", "bygg-quizet"],

  kalla: "banken",
};
