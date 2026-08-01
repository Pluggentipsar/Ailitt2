// Workshopen "Detta behöver eleverna veta om AI" — kurerad dramaturgi.
//
// Egen rutt och inte en utbyggnad av /eleverna-om-ai, av ett skäl:
// metodbanken är användbar i sig för den som bara vill ha EN metod, medan en
// workshop måste styra ordningen. Två olika jobb, två olika sidor.
//
// Stationerna REFERERAR till övningar via id i stället för att kopiera titlar
// och tider. Ändras en övning följer workshopen med, och det går inte att
// länka till något som inte finns — referenserna slås upp vid rendering och
// en trasig id ger ett synligt fel i bygget, inte en död länk i produktion.

export type Referens =
  | { kalla: "bank"; id: string }
  | { kalla: "kallkritik"; id: string }
  | { kalla: "verktyg"; id: string }
  | { kalla: "extern"; titel: string; url: string; beskrivning: string };

export type Station = {
  id: string;
  /** Bokstav inom sektionen: A, B, C. Utelämnas när sektionen har en station. */
  bokstav?: string;
  titel: string;
  /** Vad stationen gör i dramaturgin — inte vad övningen går ut på. */
  syfte: string;
  /** Den pedagogiska poängen, i en mening. Visas framhävt. */
  poang?: string;
  /** Huvudspåret. */
  kor: Referens[];
  /** Alternativ läraren kan byta in, eller ta som fördjupning. */
  alternativ?: Referens[];
  /** Ungefärlig tid för stationen. */
  tid: string;
};

export type Sektion = {
  id: string;
  /** "0", "1", "2" … */
  nummer: string;
  /** Frågan sektionen besvarar — rubriken är en fråga med flit. */
  titel: string;
  /** Ton från sajtpaletten. */
  ton: "gra" | "teal" | "orange" | "lila" | "amber";
  intro: string;
  stationer: Station[];
  /** Sätts när sektionen ännu inte är färdigbyggd. */
  kommandeText?: string;
};

// Annoterad separat och inte med `satisfies` på objektet: satisfies behåller
// den smala härledda typen, och då blir sektioner en union av tolv olika
// objektformer som inte går att mappa över.
const SEKTIONER: Sektion[] = [
    {
      id: "berattelsen",
      nummer: "0",
      titel: "Vad tror vi att AI är?",
      ton: "gra",
      intro:
        "En kort öppning innan mekaniken. Argumentet är att vi inte möter AI blint — vår föreställning om vad den är styr hur vi använder den, vad vi litar på och vad vi aldrig tänker ifrågasätta. Föreläsningen ägnar sextio minuter åt just det, så för den som var där är detta en kvittering. För den som inte var det är det ramen.",
      stationer: [
        {
          id: "metaforen",
          titel: "AI är som en ___",
          syfte:
            "Gör deltagarnas egna föreställningar synliga innan något annat sägs — och låt dem upptäcka de fyra rollerna själva i stället för att få dem serverade.",
          poang:
            "Vi möter inte AI blint. Metaforen vi bär avgör vad vi litar på.",
          tid: "10 min",
          kor: [
            {
              kalla: "extern",
              titel: "Öppningen — så gör du",
              url: "/eleverna-om-ai/forelasningen#fyra-roller",
              beskrivning:
                "Alla skriver en mening: ”AI är som en ___”. Samla på tavlan. Sortera sedan liknelserna i fyra högar: gör den här metaforen AI till någon som VET, någon som GÖR ÅT MIG, någon som FÖRSTÅR MIG, eller någon som KONKURRERAR med mig? Där är rollerna, upptäckta i stället för förelästa. Låt tavlan stå kvar hela workshopen — varje station efteråt bekräftar eller spräcker en metafor.",
            },
          ],
        },
      ],
    },

    {
      id: "beteendet",
      nummer: "1",
      titel: "Hur formas AI:s beteende?",
      ton: "orange",
      intro:
        "Först mekanismen, analogt och utan skärmar. Deltagarna upplever inifrån hur ett beteende uppstår ur belöning — och möter sedan samma sak i verktyget. Ordningen är bärande: den som känt anpassningen i kroppen läser sykofantiska AI-svar med helt andra ögon.",
      stationer: [
        {
          id: "trana",
          bokstav: "A",
          titel: "Träna rummets AI",
          syfte:
            "Producera mekanismen i rummet i stället för att förklara den. Runda ett visar att beteende formas av belöning; runda två gör att det formade beteendet blir medhåll.",
          poang:
            "Ingen bad modellen att bli inställsam. Vi byggde bara ett system där inställsamhet lönade sig.",
          tid: "12 min",
          kor: [{ kalla: "bank", id: "trana-klassens-ai" }],
        },
        {
          id: "sykofanti",
          bokstav: "B",
          titel: "Sykofantitestet",
          syfte:
            "Samma mekanism, nu i skarpt läge. Deltagarna ställer samma situation på två sätt och ser modellen byta hållning — efter att just ha varit belöningssignalen själva.",
          poang:
            "Inramningen påverkar svaret, även när situationen är densamma.",
          tid: "20–30 min",
          kor: [{ kalla: "bank", id: "sykofanti-testet" }],
          alternativ: [
            { kalla: "kallkritik", id: "testa-sykofantiskt-ai" },
            { kalla: "kallkritik", id: "push-back-testet" },
          ],
        },
      ],
    },

    {
      id: "sinnena",
      nummer: "2",
      titel: "Varför kan vi inte lita på det vi ser och hör?",
      ton: "teal",
      intro:
        "Tre stationer i en medveten ordning: först en misslyckandeupplevelse, sedan mekanismen bakom fabricerade belägg, sist produktionen. Att själv tillverka det man ska genomskåda är prebunkingens starkaste grepp — och det är samma logik som källkritikworkshopens ”Bygg själv”-kapitel vilar på.",
      stationer: [
        {
          id: "ai-eller-inte",
          bokstav: "A",
          titel: "AI eller inte?",
          syfte:
            "Öppna med ett misslyckande. Deltagarna gissar på bilder, ljud och video — och upptäcker att blicken inte räcker. Det är förutsättningen för allt som följer.",
          poang: "Det går inte att ”se” vad som är AI.",
          tid: "10 min",
          kor: [
            { kalla: "verktyg", id: "sightengine-ai-or-not" },
            { kalla: "bank", id: "ai-eller-inte-sorteringen" },
          ],
          alternativ: [
            { kalla: "kallkritik", id: "ai-eller-riktig" },
            { kalla: "kallkritik", id: "vilken-ar-riktig" },
          ],
        },
        {
          id: "hallucinationer",
          bokstav: "B",
          titel: "Hallucinationsjakten",
          syfte:
            "Från bild till påstående. AI kan skapa något som LÅTER som belägg utan att innehållet är sant — och det avgörande momentet är inte att misstänka, utan att lämna chatten och kontrollera.",
          poang:
            "Ett välformulerat svar är inte ett belägg. AI:s säkerhet är en stil.",
          tid: "20–40 min",
          kor: [{ kalla: "kallkritik", id: "hallucinationsjakten" }],
          alternativ: [
            { kalla: "kallkritik", id: "faktagranska-ai-med-ai" },
            { kalla: "bank", id: "ai-laste-aldrig-kallan" },
          ],
        },
        {
          id: "deepfake",
          bokstav: "C",
          titel: "Deepfake — gör en själv",
          syfte:
            "Visa realtidsvarianten först, låt sedan alla göra en egen. Den som byggt en deepfake på trettio sekunder kan aldrig mer tro att det krävs en filmstudio.",
          poang:
            "Prebunking genom produktion: att bygga greppet är att genomskåda det.",
          tid: "20 min",
          kor: [
            { kalla: "verktyg", id: "lucy-decart" },
            { kalla: "kallkritik", id: "deepfake-civai" },
          ],
          alternativ: [{ kalla: "kallkritik", id: "vilken-ar-riktig" }],
        },
      ],
    },

    {
      id: "styra",
      nummer: "3",
      titel: "Hur styr vi AI för lärande?",
      ton: "lila",
      intro:
        "Sektionen som flyttar samtalet från vad AI gör till vad eleven gör. Jag–AI–Jag, stödnivåer och ägarskap — allt det som gör skillnad mellan att producera och att lära sig.",
      kommandeText:
        "Den här sektionen byggs som ett eget moment och är ännu inte klar. Under tiden bär de här tre metoderna innehållet, och de går att köra som de är.",
      stationer: [
        {
          id: "forhors-ai",
          titel: "Förhörs-AI:n",
          syfte:
            "Bygg en AI som håller emot i stället för att svara. Det är produktionsbotens motsats, och den enklaste vägen att visa skillnaden mellan att bli klar och att lära sig.",
          tid: "20 min",
          kor: [
            {
              kalla: "extern",
              titel: "Förhörs-AI:n",
              url: "/eleverna-om-ai/metod/forhors-ai",
              beskrivning:
                "Metod ur metodbanken — eleven bygger en AI som förhör utan att ge svaret.",
            },
          ],
          alternativ: [{ kalla: "bank", id: "trafikljus-skrivprocessen" }],
        },
        {
          id: "fyra-grepp",
          titel: "Fyra grepp som skyddar tänkandet",
          syfte:
            "Konkretiserar Jag–AI–Jag till fyra saker eleven faktiskt gör — och ger läraren något att sätta upp på väggen.",
          tid: "15 min",
          kor: [
            {
              kalla: "extern",
              titel: "Fyra grepp som skyddar tänkandet",
              url: "/eleverna-om-ai/metod/fyra-grepp",
              beskrivning: "Metod ur metodbanken.",
            },
          ],
          alternativ: [{ kalla: "bank", id: "uppgiftsdekompositionen" }],
        },
      ],
    },

    {
      id: "systemen",
      nummer: "4",
      titel: "Vad ska systemen få göra?",
      ton: "amber",
      intro:
        "Sista sektionen kräver de tre föregående. Man kan inte avgöra vad ett system BÖR få göra utan att veta vad det gör och varför det gör så. Tolv scenariopar på en skala mellan ja och nej — hälften verkliga system som erbjuds skolor i dag, hälften hypotetiska.",
      stationer: [
        {
          id: "skalan",
          titel: "Ja det är ok — nej det är inte ok",
          syfte:
            "Varje par ändrar exakt en variabel. Deltagarna upptäcker att svaret hänger på något de inte hade formulerat — och att den variabeln ofta är densamma genom hela materialet.",
          poang:
            "Vad AI kan göra avgör inte vad AI bör göra. Vem bestämmer vilket?",
          tid: "40–60 min",
          kor: [{ kalla: "bank", id: "vad-ska-systemen-fa-gora" }],
          alternativ: [
            { kalla: "bank", id: "klassens-ai-policy" },
            { kalla: "bank", id: "model-card-for-skolans-ai" },
            {
              kalla: "extern",
              titel: "ailit.fi",
              url: "https://ailit.fi/",
              beskrivning:
                "Det finländska materialet som formatet är hämtat från (CC BY-NC-SA 4.0). Deras egna scenarier fungerar utmärkt som komplement.",
            },
          ],
        },
      ],
    },
  ];

export const workshop = {
  id: "eleverna-om-ai",
  titel: "Detta behöver eleverna veta om AI",
  undertitel: "Workshop — från föreläsning till klassrum",
  forelasningHref: "/eleverna-om-ai/forelasningen",
  tid: "Halvdag · går att korta till 90 minuter",
  malgrupp: "Lärare åk 7–9, gymnasiet och vuxenutbildning",
  intro:
    "Det här är en färdig workshop som du kan hålla i själv. Den bygger på föreläsningen ”Detta behöver eleverna veta om AI”, men den fungerar utan den — allt du behöver veta står på sidan. Deltagarna kör övningarna själva, i en ordning där varje moment vilar på det förra, och går därifrån med material de kan använda i sitt eget klassrum i nästa vecka.",

  /** Läses av någon som hittat hit utan att någon pekat dem hit. */
  vadDetAr: {
    forVem:
      "Skriven för lärare, arbetslag och kollegier på högstadiet, gymnasiet och i vuxenutbildningen. Deltagarna behöver inga förkunskaper om AI — flera moment fungerar bättre om de inte har några.",
    duSomLeder:
      "Du som håller i den behöver inte vara AI-kunnig. Varje övning har en lärarhandledning med förberedelser, tidsplan och vad du säger, och de flesta har ett storskärmsläge du klickar dig igenom. Det som krävs av dig är att hålla tempot och leda samtalen efteråt — inte att kunna svara på tekniska frågor.",
    utanForelasningen:
      "Föreläsningen är en bra ingång men inget krav. Har din grupp inte hört den finns den som text att läsa, och sektion 0 nedan gör samma jobb på tio minuter: den gör deltagarnas egna föreställningar om AI synliga innan mekaniken börjar.",
    detHarBehovsIRummet: [
      "Dator eller platta till varje par — inte varje person. Flera övningar är byggda för samtal mellan två.",
      "Skolans godkända chattbot. Vilken som helst fungerar; övningarna är inte knutna till någon leverantör.",
      "Projektor eller storskärm.",
      "Utskrivna deltagarblad till sektion 1 — de finns som PDF på övningssidan.",
      "En vägg eller golvyta att ställa sig längs i sektion 4.",
    ],
    korta:
      "Halvdagen kan kortas till nittio minuter genom att ta sektion 1 och 2, hoppa över sektion 3 och köra fyra av tolv scenariopar i sektion 4. Ordningen ska däremot inte kastas om — se nedan.",
  },
  sekvensNot:
    "Ordningen är inte godtycklig. Sektion 1 visar HUR ett AI-beteende uppstår, och det gör sektion 2 begriplig i stället för skrämmande: det som ser ut som lögn är samma mekanism som producerar sanningen. Sektion 4 kräver båda — man kan inte avgöra vad ett system BÖR få göra utan att veta vad det gör och varför.",

  sektioner: SEKTIONER,

};
