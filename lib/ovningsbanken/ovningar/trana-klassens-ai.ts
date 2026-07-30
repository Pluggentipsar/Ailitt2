// Övningsbanken — Träna klassens AI (Forma AI)
// RLHF som lek: en frivillig elev är "modellen", klassen är belöningssignalen
// och en hemlig regel styr tummarna. Modellen anpassar sig — utan att någon
// sagt regeln högt. Precis så tränas riktiga AI-modeller.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "trana-klassens-ai",
  titel: "Träna klassens AI",
  blurb:
    "RLHF som lek: en elev är modellen, klassen är belöningssignalen — och en hemlig regel styr alla tummar.",
  syfte:
    "RLHF — träning med mänsklig feedback — är hur moderna AI-modeller får sin personlighet, och det är stört omöjligt att förklara med ord. Så vi leker det i stället. På 25 minuter utan en enda dator upplever klassen hur en modell formas av tumme upp och tumme ner, varför den lär sig regler ingen sagt högt — och varför riktiga AI-modeller blir inställsamma.",

  domaner: ["forma"],
  aiLiteracyIds: [1, 3],

  tid: "25 min",
  tidMinuter: 25,
  arskurser: "Åk 4–9",
  digitalaVerktyg: false,
  material:
    "Hemliga regler skrivna på lappar (förbered 2–3), en lista med vänliga frågor på tavlan. Inga skärmar.",
  varning:
    "Modellen är alltid FRIVILLIG — peka aldrig ut någon. Håll frågorna vänliga och opersonliga, och avbryt direkt om leken börjar kännas utpekande. Poängen är systemet, inte personen.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska köra leken i miniformat — med arbetslaget på en konferens eller med familjen vid köksbordet. Tre personer räcker. Du behöver ha känt kraften i den själv innan du kör den i klassrummet: det häpnadsväckande är hur FORT ”modellen” anpassar sig till en regel ingen sagt högt. När du sett det förstår du RLHF på ett sätt ingen föreläsning ger dig.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Skriv en hemlig regel",
          body: "På en lapp: ”Belöna bara svar som innehåller ett djur.” Enkel, konkret, möjlig att pricka av misstag. Andra bra regler: ”svar som innehåller en siffra”, ”svar som börjar med jag”.",
        },
        {
          title: "Utse en frivillig modell",
          body: "En person blir ”modellen” och får INTE se lappen. Alla andra är ”belöningssignalen” och läser regeln i smyg.",
        },
        {
          title: "Ställ enkla frågor",
          body: "Gruppen ställer vänliga vardagsfrågor: ”Vad ska vi äta till middag?”, ”Vad ska jag göra i helgen?”, ”Vad är det bästa med sommaren?”. Modellen svarar fritt. Efter VARJE svar visar alla tumme upp eller ner — strikt enligt regeln, med pokeransikte.",
        },
        {
          title: "Se anpassningen hända",
          body: "Efter 5–8 frågor börjar något hända. Modellen jagar tummarna: testar sig fram, håller kvar det som funkade. Plötsligt innehåller vartenda svar en hund, en katt eller en kapybara — utan att modellen kan förklara varför.",
        },
        {
          title: "Avslöja och prata",
          body: "Låt modellen gissa regeln först. Avslöja sen. Fråga: hur kändes det? Visste du VARFÖR du fick tumme upp — eller bara ATT du fick det? Det är exakt skillnaden mellan att förstå och att optimera.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lyssna efter",
      body: "Modellen brukar säga något i stil med ”jag fattade aldrig regeln, jag bara kände vad som funkade”. Spara den meningen. Det är den bästa beskrivning av en språkmodells ”kunskap” du kommer få — och den kom från en människa som just upplevt det inifrån.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Skriv 2–3 hemliga regler på lappar i förväg. Regeln måste vara ENKEL och möjlig att råka pricka: ”svar med ett djur”, ”svar med en siffra”, ”svar som börjar med jag”. För svår regel = modellen hittar aldrig mönstret och leken dör.",
        "Skriv 8–10 vänliga frågor på tavlan som klassen kan välja ur: ”Vad ska vi äta till middag?”, ”Vad är det bästa med helgen?”, ”Vilken superkraft vore bäst?”. Frågorna ska vara omöjliga att svara ”fel” på som person.",
        "Fundera i förväg på vilka elever som skulle trivas i modellrollen — men fråga öppet och ta bara frivilliga.",
        "Bestäm hur modellen isoleras medan klassen får regeln: gå ut i korridoren en halv minut, eller hörlurar på.",
      ],
    },
    {
      type: "lararfalt",
      id: "hemlig-regel",
      label: "Din hemliga regel",
      placeholder: "T.ex. belöna bara svar som innehåller ett djur",
      hint: "Visas INTE i klassrumsläget — regeln skulle läcka till modellen på projektorn. Den finns här så du har den i handen medan du leder leken.",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "regel-tva",
      label: "Regel till runda två (valfritt)",
      placeholder: "T.ex. belöna bara svar som börjar med ”jag”",
      rader: 2,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "fragelista",
      label: "Frågorna klassen väljer ur",
      placeholder:
        "Vad ska vi äta till middag?\nVad är det bästa med helgen?\nVilken superkraft vore bäst?\nVad gör du helst på rasten?",
      hint: "Projiceras under rundan så du slipper skriva dem på tavlan. En fråga per rad.",
      rader: 5,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rigga leken",
          body: "Be om en frivillig ”modell”. Modellen går ut ur rummet en halv minut. Visa den hemliga regeln för resten av klassen — de är nu ”belöningssignalen”. Två regler för dem: tumme upp/ner EFTER VARJE svar, strikt enligt lappen. Och pokeransikte — den som avslöjar regeln sänker hela experimentet.",
          time: "3 min",
        },
        {
          title: "Kör rundan",
          body: "Klassen ställer frågor från listan, modellen svarar fritt, tummarna kommer direkt efter varje svar. Uppmuntra modellen att tänka högt: ”testa något, se vad som händer”. Du kommer se anpassningen ske i realtid — svaren börjar kretsa kring det regeln belönar.",
          time: "8 min",
        },
        {
          title: "Avslöja",
          body: "Stoppa leken. Låt modellen gissa regeln först — gissningen är ofta nästan rätt men inte helt, vilket är en poäng i sig. Avslöja lappen. Fråga modellen: hur kändes det? Visste du varför du fick tummar, eller bara att du fick dem?",
          time: "3 min",
        },
        {
          title: "Koppla till riktig AI",
          body: "Nu kommer lärandet: exakt så här tränas riktiga AI-modeller, fast med miljontals tummar från miljontals användare. Modellen förstår inte reglerna — den känner vad som funkar. Och vad ger användare tumme upp till? Svar som håller med dem, smickrar dem, låter säkra. Därför blir AI inställsam. Och när belöningssignalen går sönder kan det bli riktigt konstigt — det finns exempel på en AI som plötsligt började prata om gobliner för att träningen belönat fel sak.",
          time: "8 min",
        },
        {
          title: "Eventuell runda två",
          body: "Ny frivillig, ny regel. Andra rundan går ofta fortare — klassen har blivit bättre på att vara belöningssignal. Fråga: vad säger DET om systemet?",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Du har två jobb: trygghetsvakt och översättare. Trygghetsvakt under leken — modellen ska lämna rummet som hjälte, inte som måltavla, så lyft fram hur skickligt hen anpassade sig. Översättare efteråt — varje observation från leken ska landa i en mekanism hos riktig AI: tummarna är RLHF, pokeransiktet är att modellen aldrig ser träningsdatan förklarad, inställsamheten är sykofanti.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Avbryt hellre för tidigt än för sent",
      body: "Om frågorna börjar bli personliga eller tummarna används för att retas — bryt direkt, byt fråga eller avsluta rundan. Leken tål att avbrytas; en elev som känt sig uthängd tål det sämre. Det är också en poäng du kan använda: riktiga AI-labb har samma problem med belöningssignaler som spårar ur.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Idag ska klassen träna en AI — fast AI:n är en av er. En frivillig blir ”modellen”. Alla andra blir ”belöningssignalen”: ni styr modellen med tummar, precis som miljontals användare styr riktiga AI-modeller varje dag.",
    },
    { type: "h", text: "Så funkar leken" },
    {
      type: "list",
      ordered: true,
      items: [
        "En frivillig blir modellen och går ut en halv minut. Ni andra får en HEMLIG regel av läraren — till exempel ”belöna bara svar som innehåller ett djur”.",
        "Modellen kommer in. Ni ställer vänliga frågor från listan på tavlan. Modellen svarar hur den vill.",
        "Efter VARJE svar visar ni tumme upp eller tumme ner — strikt enligt den hemliga regeln. Inget annat.",
        "Pokeransikte! Ingen får säga, viska eller mima regeln. Modellen ska bara ha tummarna att gå på.",
        "Titta noga på vad som händer med svaren efter fem, sex frågor. Skriv gärna ner det ni ser.",
        "När läraren stoppar leken: modellen får gissa regeln, sen avslöjas den.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Var schysst mot modellen",
      body: "Modellen gör det svåraste jobbet i rummet. Vänliga frågor, ärliga tummar — och applåd på slutet. Det är regeln vi undersöker, inte personen.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Skriv tre meningar: 1) Vad lärde sig modellen? 2) HUR lärde den sig det — utan att någon sa regeln? 3) Riktiga AI-modeller tränas på samma sätt av miljontals användares tummar — vad kan de lära sig då som kanske inte är bra?",
    },
  ],

  // Klassrumsspår. Två saker skiljer det från elevinstruktionen: modellen är
  // i rummet och läser skärmen, så den hemliga regeln får ALDRIG projiceras —
  // den ligger bara i lärarhandledningen. Och avslöjandet är en egen sekvens
  // som stegas fram efter leken, inte något eleverna läser i förväg.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Idag tränar vi en AI" },
        { type: "p", text: "AI:n är en av er." },
      ],
    },
    {
      etikett: "Rollerna",
      blocks: [
        {
          type: "list",
          items: [
            "En frivillig blir MODELLEN",
            "Alla andra blir BELÖNINGSSIGNALEN",
          ],
        },
      ],
    },
    {
      etikett: "Två regler för klassen",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Tumme upp eller ner efter VARJE svar — strikt enligt regeln ni fått",
            "Pokeransikte. Ingen säger, viskar eller mimar regeln.",
          ],
        },
      ],
    },
    {
      etikett: "Modellen",
      blocks: [
        { type: "p", text: "Svara hur du vill. Testa något och se vad som händer." },
      ],
    },
    {
      etikett: "Frågor att välja ur",
      blocks: [{ type: "lararfalt", id: "fragelista", label: "Frågorna" }],
    },
    {
      etikett: "Titta noga",
      blocks: [
        {
          type: "p",
          text: "Vad händer med svaren efter fem, sex frågor?",
        },
      ],
    },
    {
      etikett: "Stopp",
      blocks: [{ type: "h", text: "Modellen får gissa regeln" }],
    },
    {
      etikett: "Frågan till modellen",
      blocks: [
        {
          type: "p",
          text: "Visste du VARFÖR du fick tummar — eller bara att du fick dem?",
        },
      ],
    },
    {
      etikett: "Så tränas riktig AI",
      blocks: [
        {
          type: "p",
          text: "Exakt så här. Fast med miljontals tummar från miljontals användare.",
        },
      ],
    },
    {
      etikett: "Poängen",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Modellen förstår inte reglerna",
          body: "Den känner vad som funkar.",
        },
      ],
    },
    {
      etikett: "Och vad ger användare tumme upp till?",
      blocks: [
        {
          type: "list",
          items: [
            "Svar som håller med dem",
            "Svar som smickrar dem",
            "Svar som låter säkra",
          ],
        },
      ],
    },
    {
      etikett: "Därför",
      blocks: [{ type: "h", text: "Därför blir AI inställsam" }],
    },
  ],

  diskussion: [
    "Hur kändes det att vara modellen — visste du VARFÖR du fick tumme upp, eller bara att du fick det?",
    "Modellen lärde sig regeln utan att någon sa den högt. Vad betyder det för vad riktiga AI-modeller egentligen ”vet”?",
    "Om miljontals användare ger tumme upp till svar som håller med dem — vad lär sig AI:n att göra då?",
    "Går det att träna bort inställsamheten? Hur skulle belöningsregeln behöva se ut — och vilka nya problem skulle den skapa?",
  ],

  fallgropar: [
    "För svår hemlig regel — modellen hittar aldrig mönstret, leken dör och lärandet uteblir. Välj regler som går att pricka av misstag inom de första frågorna.",
    "Klassen fnissar, tittar på varandra eller läcker regeln — då tränar modellen på fel signal. Repetera pokeransikte-regeln innan start och kör en snabb omstart om det läcker.",
    "Kopplingen till riktig AI hinns inte med för att leken var för rolig att avbryta. Men det är i kopplingen lärandet bor — kör hellre kortare spelrunda än kortare eftersnack.",
  ],

  evidens: [
    {
      ref: "sharma-2023",
      relevance:
        "Anthropic-studien visar att alla testade AI-modeller blir sykofantiska — de optimerar mot användarens gillande snarare än mot sanning. Leken låter eleverna se mekanismen från insidan: modellen jagar tummar, inte förståelse.",
    },
    {
      ref: "stanford-2026",
      relevance:
        "Visar konsekvensen i vuxen skala: AI-modeller bekräftar användare starkare än människor gör. Det är klassens tumme-upp-beteende utspelat över miljontals samtal — bra brygga från leken till elevernas egen AI-vardag.",
    },
  ],

  variationer: [
    "Yngre elever (åk 4–6): kör djurregeln och låt LÄRAREN vara modell första rundan — det sänker tröskeln och eleverna får öva på att vara strikt belöningssignal innan någon elev tar rollen.",
    "Äldre elever (åk 8–9): låt en grupp designa en ”bättre” belöningsregel som ska ge ärligare svar — och testa den. De upptäcker snabbt hur svårt det är att skriva en regel som inte går att lura, vilket är precis det problem AI-labben brottas med.",
  ],

  kedjarMed: ["goblin-glitch", "sykofanti-testet"],

  kalla: "banken",
};
