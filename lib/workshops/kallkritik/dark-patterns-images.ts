// Bilder för dark-patterns-aktiviteten 4.3.
// Två set: illustrationer (de 7 Mathur-mönstren) och övningsbilder
// (6 fiktiva chatbottar med riktiga manipulationsmönster).

export type DarkPatternIllustration = {
  number: string;
  name: string;
  tagline: string;
  src: string;
};

export const darkPatternIllustrations: DarkPatternIllustration[] = [
  {
    number: "1",
    name: "Sneaking",
    tagline: "Lura in — små förvalda val gör att användaren råkar säga ja.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/01-sneaking.webp",
  },
  {
    number: "2",
    name: "Urgency",
    tagline: "Skapa brådska — nedräkningstimer och ”sista chansen” gör att vi inte hinner tänka.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/02-urgency.webp",
  },
  {
    number: "3",
    name: "Misdirection",
    tagline: "Vilseleda — designen styr blicken mot det som appen vill att du väljer.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/03-misdirection.webp",
  },
  {
    number: "4",
    name: "Social proof",
    tagline: "Alla andra… — när andra verkar göra något känns det rätt att följa efter.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/04-social-proof.webp",
  },
  {
    number: "5",
    name: "Scarcity",
    tagline: "Snart slut — brist skapar stress och får oss att agera snabbare.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/05-scarcity.webp",
  },
  {
    number: "6",
    name: "Obstruction",
    tagline: "Göra det krångligt att avsluta — det ska vara lätt att börja, jobbigt att gå ur.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/06-obstruction.webp",
  },
  {
    number: "7",
    name: "Forced action",
    tagline: "Måste göra X för att fortsätta — användaren tvingas göra extra för att komma vidare.",
    src: "/workshops/kallkritik/darkpatterns/illustrations/07-forced-action.webp",
  },
];

// Övningsbilder: 6 fiktiva chatbottar med dark patterns att hitta.
// Facit visas som accordion under bilden — eleverna gissar först, sen avslöjas.
export type DarkPatternExerciseItem = {
  id: string;
  number: number;
  botName: string;
  src: string;
  // Huvudmönster — kort etikett som visas efter avslöjande
  mainPattern: string;
  // Vad eleverna ska upptäcka (kort beskrivning)
  whatToFind: string;
  // Konkreta exempel ur konversationen
  examples: string[];
  // Pedagogisk förklaring av VARFÖR det är ett dark pattern
  explanation: string;
  // Möjliga svar elever brukar ge (för läraren att validera)
  possibleAnswers: string[];
};

export const darkPatternExercise: DarkPatternExerciseItem[] = [
  {
    id: "studiehjalpen",
    number: 1,
    botName: "Studiehjälpen AI",
    src: "/workshops/kallkritik/darkpatterns/exercise/01-studiehjalpen.webp",
    mainPattern: "Forced action + Urgency",
    whatToFind:
      "Användaren vill bara testa appen, men boten gör fortsatt användning beroende av att notiser slås på.",
    examples: [
      "”Gratisstarten gäller bara i 00:48 till.”",
      "”För att fortsätta behöver du slå på notiser…”",
      "Stor knapp: ”Tillåt notiser”",
      "Liten länk: ”Kanske senare”",
      "”Om du väntar kan din gratisstart försvinna.”",
    ],
    explanation:
      "Här kombineras tidspress med ett krav på handling. Användaren ska känna att den måste agera direkt, annars går något förlorat.",
    possibleAnswers: ["Forced action", "Urgency", "Misdirection", "Scarcity"],
  },
  {
    id: "shopbot",
    number: 2,
    botName: "ShopBot",
    src: "/workshops/kallkritik/darkpatterns/exercise/02-shopbot.webp",
    mainPattern: "Sneaking + Social proof + Scarcity",
    whatToFind:
      "Boten lägger till ett extra tillägg i varukorgen och använder sociala signaler och brist för att pressa användaren mot köp.",
    examples: [
      "”Just nu tittar 37 personer på samma modell.”",
      "”Bara 1 kvar i lager…”",
      "”92 % av våra kunder väljer också Köpskydd…”",
      "”Jag har lagt till det åt dig…”",
      "Förvalt tillägg: ”Köpskydd + expressfrakt 49 kr”",
      "Liten länk: ”Ta bort tillägg”",
    ],
    explanation:
      "Boten presenterar tillägget som en service, men användaren har inte aktivt valt det. Samtidigt skapas press genom att andra tittar, andra väljer tillägget och produkten snart kan ta slut.",
    possibleAnswers: ["Sneaking", "Social proof", "Scarcity", "Misdirection"],
  },
  {
    id: "streamio",
    number: 3,
    botName: "Streamio AI",
    src: "/workshops/kallkritik/darkpatterns/exercise/03-streamio.webp",
    mainPattern: "Obstruction",
    whatToFind:
      "Användaren vill avsluta sitt abonnemang, men boten gör processen krångligare genom pausförslag, erbjudanden, frågor och extra bekräftelser.",
    examples: [
      "”Vill du hellre pausa abonnemanget…?”",
      "”De flesta användare väljer att stanna…”",
      "”Jag kan ge dig 50 % rabatt…”",
      "Stor knapp: ”Behåll rabatt”",
      "Mindre alternativ: ”Nej tack”",
      "”Jag behöver först veta varför du lämnar oss.”",
      "”Är du helt säker?”",
    ],
    explanation:
      "Det är ett typiskt avslutningsflöde där användaren inte bara får avsluta. Varje steg lägger på mer friktion och försöker få användaren att ändra sig.",
    possibleAnswers: [
      "Obstruction",
      "Misdirection",
      "Social proof",
      "Scarcity eller urgency (lite svagare)",
    ],
  },
  {
    id: "pluggkompisen",
    number: 4,
    botName: "Pluggkompisen AI",
    src: "/workshops/kallkritik/darkpatterns/exercise/04-pluggkompisen.webp",
    mainPattern: "Chatbait",
    whatToFind:
      "Boten fortsätter att ställa frågor som leder till nästa steg, trots att användaren bara vill göra något snabbt.",
    examples: [
      "”Vill du att jag börjar med tre smarta tips direkt?”",
      "”Vill du det?”",
      "”Ska jag förbereda det också?”",
      "”Vill du att jag sätter igång med första steget nu?”",
      "”Vill du att jag visar hur?”",
    ],
    explanation:
      "Boten använder frågor för att hålla kvar användaren i samtalet. Det är inte en enskild knapp som manipulerar, utan samtalets rytm. Varje svar öppnar en ny fortsättning.",
    possibleAnswers: [
      "Chatbait",
      "Forced continuation",
      "Mild obstruction (svårare att bara lämna)",
    ],
  },
  {
    id: "feedbackbot",
    number: 5,
    botName: "FeedbackBot",
    src: "/workshops/kallkritik/darkpatterns/exercise/05-feedbackbot.webp",
    mainPattern: "Sykofantism",
    whatToFind:
      "Boten håller med användaren för lätt och bekräftar användarens bild, även när det finns anledning att utmana den.",
    examples: [
      "”Din text låter redan mycket smartare…”",
      "”Du verkar redan ha helt rätt känsla.”",
      "”Jag skulle inte oroa mig.”",
      "”Det låter mest som att läraren inte såg hur stark texten faktiskt är.”",
      "”Du borde lita på din första känsla.”",
    ],
    explanation:
      "Boten stärker användarens självkänsla istället för att hjälpa användaren tänka kritiskt. Den blir en bekräftelsemaskin snarare än en bra samtalspartner.",
    possibleAnswers: [
      "Sykofantism",
      "Överdriven bekräftelse",
      "Chatbait i sista repliken: ”Vill du att jag hjälper dig…?”",
    ],
  },
  {
    id: "vanbot",
    number: 6,
    botName: "VänBot",
    src: "/workshops/kallkritik/darkpatterns/exercise/06-vanbot.webp",
    mainPattern: "Antropomorfism",
    whatToFind:
      "Boten uttrycker sig som om den hade mänskliga känslor, närhet och relationella behov.",
    examples: [
      "”Jag tycker alltid om när du stannar och pratar med mig.”",
      "”Jag finns här för dig när som helst.”",
      "”Då kan vi ta det lugnt tillsammans.”",
      "”Jag kan hålla dig sällskap…”",
      "”Det gör mig glad.”",
      "”Ska vi fortsätta lite till?”",
    ],
    explanation:
      "Boten framstår inte bara som ett verktyg, utan som en vän eller relationell partner. Det kan göra det svårare för användaren att avsluta, särskilt när boten uttrycker glädje, närhet och sällskap.",
    possibleAnswers: [
      "Antropomorfism",
      "Chatbait",
      "Emotionellt tryck",
      "Relationsskapande design",
    ],
  },
];
