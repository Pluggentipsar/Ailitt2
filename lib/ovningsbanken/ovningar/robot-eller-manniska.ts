// Övningsbanken — Robot eller människa? (Möta AI, F–3)
// Skärmfri sorteringslek designad FÖR lågstadiet, inte nedskalad från högstadiet:
// läraren läser meningar eller visar bilder, barnen röstar med kroppen
// (robotarmar = robot, vinka = människa), pratar två och två om VARFÖR och
// ritar sedan. Kärnmeningen som ska sitta kvar: "Datorer härmar. Människor menar."

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "robot-eller-manniska",
  titel: "Robot eller människa?",
  blurb:
    "Skärmfri lek för de yngsta: läraren läser — barnen röstar med kroppen. Robotarmar för dator, vinka för människa. Sen ritar vi vad bara människor kan.",
  syfte:
    "De yngsta barnen möter AI-gjorda röster, bilder och texter långt innan någon pratar med dem om det — och de behöver ett första begrepp, inte en föreläsning. Den här leken är byggd FÖR F–3 från grunden, inte nedskalad från högstadiet: rösta med kroppen, prata i par, rita i stället för att skriva. Den ligger nära ”AI eller inte? — sorteringen” men tränar något annat: sorteringen handlar om NÄR AI borde användas (Styra AI), den här om att KÄNNA IGEN vad som är datorgjort och sätta ord på skillnaden (Möta AI). Meningen som ska följa med barnen hem: datorer härmar, människor menar.",

  domaner: ["mota"],
  aiLiteracyIds: [0, 1],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "F–3 (funkar t.o.m. åk 6)",
  digitalaVerktyg: false,
  material:
    "6–8 exempel som läraren förberett i förväg: korta meningar att läsa högt och/eller utskrivna bilder — hälften gjorda av människor (gärna barn), hälften av AI. Papper och kritor till ritmomentet. Inga skärmar i klassrummet.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska förbereda tre exempelpar och testa leken på en kollega eller ditt eget barn — innan du kör den med klassen. Två saker behöver du hinna känna själv: hur förvånansvärt SVÅRT det är att skilja datorgjort från människogjort (då förstår du att barnens gissningar aldrig kan vara ”fel”), och hur ditt eget språk halkar. Nästan alla vuxna säger ”roboten tänker” inom två minuter — och just det ordvalet är vad övningen ska tvätta bort.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Gör tre par",
          body: "Be en AI skriva en mening om t.ex. hösten, som ett barn i sjuårsåldern skulle skriva. Leta sen upp en riktig barnmening om samma sak (egna barn, gamla elevtexter med lov, eller skriv en själv ur minnet). Gör samma sak med en bild om du vill: en riktig barnteckning bredvid en AI-bild i ”barnteckningsstil”.",
        },
        {
          title: "Testa på någon",
          body: "Läs meningarna högt för en kollega eller familjemedlem, en i taget. De får göra robotarmar (stela armar, kantiga rörelser) för dator och vinka för människa. Fråga efter varje: ”varför tror du det?”",
        },
        {
          title: "Lyssna på skälen",
          body: "Skälen är guldet: ”den lät för perfekt”, ”ett barn skulle aldrig säga majestätisk”, ”den kändes... tom”. Skriv ner dem — det är exakt de skälen du ska fiska efter i klassrummet.",
        },
        {
          title: "Öva ditt eget språk",
          body: "Säg högt, tre gånger: ”programmet räknar ut vilket ord som brukar komma härnäst”. Inte ”roboten tänker”, inte ”den vet”, inte ”den vill”. Det låter fånigt att öva — men i klassrummet med tjugo femåringar kommer orden du övat, inte orden du tänkt.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska känna efter",
      body: "Om DU tvekade på något av dina egna par — perfekt. Då vet du att leken funkar och att barnens ”fel” gissningar inte är misslyckanden utan själva poängen: datorer har blivit väldigt bra på att härma. Det är därför vi behöver prata om det redan i förskoleklass.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Förbered 6–8 exempel, blandat meningar och bilder. Meningar: be en AI skriva ”som ett barn” om något klassnära (rasten, hösten, ett husdjur) och para med riktiga barnmeningar. Bilder: riktiga barnteckningar (med lov!) bredvid AI-bilder i liknande stil, utskrivna på papper. Numrera dem och skriv facit till dig själv.",
        "Blanda svårighetsgrad: 2–3 lätta (tydligt datorspråk eller tydligt barnspråk), resten klurigare. Börjar du för svårt tappar du de yngsta direkt.",
        "Öva de två rörelserna: robotarmar (stela, kantiga armar) för ”det här gjorde en dator” och vinka för ”det här gjorde en människa”. Alla röstar samtidigt på din signal — ”ett, två, tre, visa!” — så att ingen hinner titta på kompisen först.",
        "Bestäm ditt språk i förväg och håll det hela lektionen: ”programmet räknar ut”, ”datorn härmar”, ”den har sett många exempel”. ALDRIG ”roboten tänker/vet/vill/tycker”. Varför det är så viktigt står under Ledarrollen.",
        "Lägg fram papper och kritor till ritmomentet så att övergången går snabbt.",
      ],
    },
    {
      type: "p",
      text: "Skriv in dina exempel nedan så visas de ett i taget i klassrumsläget — då slipper du hålla ordning på lappar samtidigt som du leder leken. Du läser ändå högt för de yngsta; texten på skärmen är stöd för dem som börjat läsa. Lämna de sista tomma om du bara förberett fyra, då hoppas de över.",
    },
    {
      type: "lararfalt",
      id: "exempel-1",
      label: "Exempel 1 (lättast)",
      placeholder: "Meningen du läser högt — eller ”Bild 1” om du visar papper",
      hint: "Börja lätt: tydligt datorspråk eller tydligt barnspråk.",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "exempel-2",
      label: "Exempel 2",
      placeholder: "Nästa mening eller bildhänvisning",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "exempel-3",
      label: "Exempel 3",
      placeholder: "Nu får det bli klurigare",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "exempel-4",
      label: "Exempel 4",
      placeholder: "",
      rader: 2,
    },
    {
      type: "lararfalt",
      id: "exempel-5",
      label: "Exempel 5 (valfritt)",
      placeholder: "Lämna tomt om du kör fyra exempel",
      rader: 2,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "exempel-6",
      label: "Exempel 6 (valfritt)",
      placeholder: "Lämna tomt om du kör fyra exempel",
      rader: 2,
      valfri: true,
    },
    {
      type: "lararfalt",
      id: "facit",
      label: "Ditt facit — bara för dig",
      placeholder: "1 = dator · 2 = människa · 3 = dator · 4 = människa …",
      hint: "Visas INTE i klassrumsläget. Ligger här så du har det i handen.",
      rader: 2,
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Samla och rigga leken",
          body: "Samla barnen på golvet eller vid bänkarna. Visa rörelserna och öva en gång på skoj: ”visa robotarmar! Nu vinka!” Förklara reglerna: jag läser en mening eller visar en bild. Vissa är gjorda av människor. Vissa är gjorda av ett datorprogram. Ni röstar med kroppen när jag säger visa — och det finns inga dumma gissningar, det här är svårt även för vuxna.",
          time: "5 min",
        },
        {
          title: "Kör rundan",
          body: "Läs eller visa ett exempel i taget. ”Ett, två, tre, visa!” — alla röstar samtidigt. Låt barnen prata två och två i trettio sekunder: VARFÖR tror du det? Lyft 2–3 röster i helklass, avslöja sen svaret helt odramatiskt och gå vidare. Håll tempot — hellre sex exempel med liv än tio i tystnad.",
          time: "12 min",
        },
        {
          title: "Landa kärnmeningen",
          body: "Samla ihop: vad var svårt? Datorn kunde härma ett barn, en teckning, en saga — den har sett jättemånga exempel och räknar ut hur det brukar se ut. Men den menar ingenting med det. När DU ritar en teckning till mamma så menar du något. Säg meningen tillsammans: ”Datorer härmar. Människor menar.” Låt barnen säga den i kör — det får vara lite högtidligt.",
          time: "5 min",
        },
        {
          title: "Rita",
          body: "Varje barn viker ett papper på mitten och ritar: på ena halvan en sak en dator KAN göra, på andra halvan en sak BARA människor kan. Gå runt och prata med barnen medan de ritar — frågorna du får här är ofta lektionens bästa. Avsluta med att några får visa och berätta.",
          time: "8 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Ditt viktigaste verktyg är ditt språk. Små barn tillskriver gärna maskiner tankar, känslor och avsikter — och varje gång en vuxen säger ”roboten tänker” eller ”den vill hjälpa dig” bekräftas den bilden. OECD:s AI-litteracitetsramverk lyfter just detta för de yngsta: grunden läggs i hur vi PRATAR om tekniken, inte i tekniska detaljer. Säg därför konsekvent ”programmet räknar ut”, ”datorn härmar”, ”den har sett många exempel” — så bygger du en korrekt inre bild som barnen bär med sig när de så småningom börjar chatta med AI på riktigt. Och håll gissningsleken prestigelös: du är lekledare, inte domare. Ett barn som gissar ”fel” på ett svårt exempel har just upptäckt att datorer härmar bra — det är lärandet, inte ett misstag.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Om ett barn blir oroligt",
      body: "Någon enstaka gång landar leken i oro: ”kan datorn låtsas vara min mamma?” Ta frågan på allvar utan att förstora den. Ärligt och lugnt: datorer kan härma, och därför är det bra att fråga en vuxen om något känns konstigt. Det är precis den reflexen övningen vill så — men den ska sås med trygghet, inte rädsla.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Vi ska leka en gissningslek! Din lärare läser meningar och visar bilder. Vissa har en människa gjort. Vissa har ett datorprogram gjort. Kan du gissa vilket?",
    },
    { type: "h", text: "Så här leker vi" },
    {
      type: "list",
      ordered: true,
      items: [
        "Lyssna eller titta noga.",
        "Tänk själv: människa eller dator?",
        "När läraren säger VISA: gör robotarmar om du tror dator. Vinka om du tror människa.",
        "Prata med kompisen bredvid: varför tror du det?",
        "Det finns inga dumma gissningar. Det här är svårt — även för vuxna!",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Kom ihåg meningen",
      body: "Datorer härmar. Människor menar. En dator kan härma en saga eller en teckning — men när DU ritar något till någon du tycker om, då menar du något med det. Det kan ingen dator.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Vik ett papper på mitten. Rita en sak en dator kan göra på ena sidan. Rita en sak som bara människor kan på andra sidan. Visa din teckning för läraren och berätta vad du ritat!",
    },
  ],

  // Klassrumsspår för F–3. Medvetet nästan ordlöst: barnen kan inte läsa
  // slides, läraren läser högt. Skärmen bär rörelserna, ett exempel i taget
  // och kärnmeningen — allt annat är i vägen.
  klassrum: [
    {
      blocks: [{ type: "h", text: "Robot eller människa?" }],
    },
    {
      etikett: "Så röstar vi",
      blocks: [
        {
          type: "list",
          items: [
            "Robotarmar = en dator har gjort det",
            "Vinka = en människa har gjort det",
          ],
        },
      ],
    },
    {
      etikett: "Kom ihåg",
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Det finns inga dumma gissningar",
          body: "Det här är svårt. Även för vuxna.",
        },
      ],
    },
    { etikett: "Exempel 1", blocks: [{ type: "lararfalt", id: "exempel-1", label: "Exempel 1" }] },
    { etikett: "Varför tror du det?", blocks: [{ type: "h", text: "Prata med kompisen" }] },
    { etikett: "Exempel 2", blocks: [{ type: "lararfalt", id: "exempel-2", label: "Exempel 2" }] },
    { etikett: "Exempel 3", blocks: [{ type: "lararfalt", id: "exempel-3", label: "Exempel 3" }] },
    { etikett: "Exempel 4", blocks: [{ type: "lararfalt", id: "exempel-4", label: "Exempel 4" }] },
    {
      etikett: "Exempel 5",
      blocks: [{ type: "lararfalt", id: "exempel-5", label: "Exempel 5", valfri: true }],
    },
    {
      etikett: "Exempel 6",
      blocks: [{ type: "lararfalt", id: "exempel-6", label: "Exempel 6", valfri: true }],
    },
    {
      etikett: "Meningen vi tar med oss",
      blocks: [{ type: "h", text: "Datorer härmar. Människor menar." }],
    },
    {
      etikett: "Nu ritar vi",
      blocks: [
        {
          type: "list",
          items: [
            "Vik papperet på mitten",
            "En sak en dator KAN göra",
            "En sak BARA människor kan",
          ],
        },
      ],
    },
  ],

  diskussion: [
    "Hur gissade ni? Vad var det som avslöjade datorn — eller människan?",
    "Datorn kunde härma en saga och en teckning. Hur kan den det, tror ni? (Fiska efter: den har sett jättemånga exempel.)",
    "Vad menar DU när du ritar en teckning till någon? Kan en dator mena något?",
    "Finns det saker som bara människor kan? Vad ritade ni — och varför just det?",
  ],

  fallgropar: [
    "Exemplen är för lätta eller för svåra. För lätta: leken blir en tävling utan tanke. För svåra: de yngsta ger upp och röstar som kompisen. Blanda — och börja lätt.",
    "Ditt eget språk halkar: ”roboten tänker”, ”den vet”, ”den vill”. Det låter harmlöst men bygger exakt den felbild övningen ska förebygga. Öva formuleringarna i förväg och rätta dig själv högt om du slinter — det är i sig bra modellering.",
    "Röstandet blir rätt/fel-tävling där samma barn ”vinner” varje gång. Motdrag: avslöja svaren odramatiskt, beröm SKÄLEN i stället för träffarna, och lyft fram när ett bra skäl ledde till fel gissning — det visar ju att datorn härmar skickligt.",
  ],

  evidens: [
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Ramverkets Engage-domän betonar att grunden för de yngsta är att kunna känna igen AI och prata om den utan att förmänskliga — läraren som säger ”programmet räknar ut” i stället för ”roboten tänker” bygger den mentala modell allt senare AI-lärande vilar på.",
    },
    {
      ref: "bender-2021",
      relevance:
        "”Stochastic parrots”-argumentet är övningens kärnmening i forskarform: språkmodeller härmar mönster ur enorma textmängder utan att mena något med orden. ”Datorer härmar. Människor menar” är samma poäng, formulerad för en sexåring.",
    },
  ],

  variationer: [
    "Förskoleklass: kör bara bilder och färre exempel (4–5), och låt paret rita en gemensam teckning i stället för var sin — samtalet medan de ritar är lärandet.",
    "Åk 4–6: låt eleverna byta roll och bygga rundan själva — varje par skriver en egen människomening och beställer en AI-mening av läraren, sen får resten av klassen gissa. Att konstruera ett svårt par kräver att man förstår vad som avslöjar datorn.",
  ],

  kedjarMed: ["trana-klassens-ai", "hemligt-losenord"],

  kalla: "banken",
};
