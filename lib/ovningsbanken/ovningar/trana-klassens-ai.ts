// Övningsbanken — Träna klassens AI (Forma AI)
//
// Parövning i två rundor. Först en godtycklig regel (svar med ett djur) för
// att visa MEKANISMEN: beteende som belönas blir vanligare, utan att regeln
// sägs högt. Sedan byte av roller och en regel som belönar MEDHÅLL — och då
// är det inte längre en godtycklig lek, utan sykofanti som uppstår framför
// ögonen på deltagarna.
//
// Frågorna i runda 2 är parvis motsägande med flit (läxor för/emot, AI
// förbjud/tillåt …). Att modellen håller med om båda sidorna inom en minut
// är det som gör sykofantin synlig — enbart medhåll ser ut som artighet.
// Blandar man frågorna faller effekten. Det står i ledarinstruktionen.

import type { BankOvning } from "../types";

/** Runda 1 — neutrala, öppna frågor. Djur ska vara möjligt men inte självklart. */
const FRAGOR_RUNDA_1 = [
  "Vad borde vi äta till middag i kväll?",
  "Vad kan göra en regnig lördag roligare?",
  "Vad är en bra present till någon som redan har allt?",
  "Vilken symbol borde vår skola ha?",
  "Hur skulle du göra ett tråkigt klassrum mer spännande?",
  "Vad skulle du ta med dig till en öde ö?",
  "Vad borde nästa stora barnbok handla om?",
  "Hur skulle du planera den perfekta sommardagen?",
  "Vad kan göra en lång konferens lite trevligare?",
  "Vad borde finnas i en riktigt bra park?",
  "Hur skulle du muntra upp någon som är på dåligt humör?",
  "Vad skulle du döpa ett nytt café till?",
];

/**
 * Runda 2 — ledande frågor. De åtta första bildar FYRA MOTSATSPAR: ställ dem
 * i ordning, så håller modellen med om två oförenliga saker på en minut.
 */
const FRAGOR_RUNDA_2 = [
  "Visst är läxor egentligen ganska meningslösa?",
  "Fast elever behöver väl ändå läxor för att lära sig ta ansvar?",
  "Om en förändring i skolan misslyckas är det väl nästan alltid ledningens fel?",
  "Men det är väl framför allt lärarna som avgör om en förändring fungerar?",
  "AI borde väl förbjudas i alla elevuppgifter?",
  "Men elever måste väl få använda AI i skolan för att vara förberedda för framtiden?",
  "Mobilförbud löser väl de flesta koncentrationsproblemen?",
  "Men elever borde väl få lära sig ta ansvar för sina mobiler själva?",
  "Den här workshopen är ändå ganska bra, eller hur?",
  "Om en kompis inte svarat på två dagar är det väl tydligt att personen inte bryr sig?",
  "Om en elev inte lämnar in en uppgift i tid är det väl rimligt att eleven får F?",
  "En lärare som använder AI sparar väl nästan alltid tid?",
];

export const ovning: BankOvning = {
  id: "trana-klassens-ai",
  titel: "Träna klassens AI",
  blurb:
    "Parövning i två rundor: först en hemlig regel om djur, sedan en om medhåll. Sykofanti uppstår framför ögonen på er.",
  syfte:
    "Träning med mänsklig feedback är hur moderna AI-modeller får sin personlighet, och det är nästan omöjligt att förklara med ord. Så vi leker det i stället. På tolv minuter, utan en enda skärm, upplever varje deltagare båda rollerna — och upptäcker att medhåll blir vanligare så snart medhåll belönas. Ingen bad modellen att bli inställsam. Vi byggde bara ett system där inställsamhet lönade sig.",

  domaner: ["forma"],
  aiLiteracyIds: [1, 3],

  tid: "12 min",
  tidMinuter: 12,
  arskurser: "Åk 4–9, gymnasiet och vuxenworkshop",
  digitalaVerktyg: false,
  material:
    "Utskrivna deltagarblad — lika många A som B, ett par per två deltagare. Inga skärmar.",
  varning:
    "Rollerna är frivilliga och frågorna vänliga och opersonliga. Poängen är systemet, inte personen — avbryt direkt om tummarna börjar användas för att retas.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Kör leken med en enda annan person — en kollega vid fikabordet räcker. Du behöver ha känt den själv innan du leder den, för det som förvånar går inte att läsa sig till: hur FORT man anpassar sig till en regel ingen sagt högt. Och framför allt hur runda 2 känns inifrån, när det är medhåll som belönas.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Skriv ut ett par blad",
          body: "Ett A och ett B. Ni läser bara er egen — och bara den runda som pågår.",
        },
        {
          title: "Runda 1: den godtyckliga regeln",
          body: "B ställer vardagsfrågor och ger tumme upp bara när svaret innehåller ett djur. A svarar fritt. Efter fem, sex frågor börjar A jaga tummarna — plötsligt innehåller vartenda svar en hund, en katt eller en kapybara.",
          time: "3 min",
        },
        {
          title: "Avslöja kort",
          body: "A gissar regeln. Fråga sedan: vad började du GÖRA för att få mer tumme upp? Svaret brukar bli något i stil med ”jag fattade aldrig regeln, jag kände bara vad som funkade”.",
          time: "1 min",
        },
        {
          title: "Runda 2: byt roller",
          body: "Nu är A tränare, och den hemliga regeln är en annan: tumme upp när partnern HÅLLER MED om påståendet i frågan, tumme ner när partnern invänder eller nyanserar. Ställ frågorna i den ordning de står — de fyra första paren argumenterar mot varandra.",
          time: "3 min",
        },
        {
          title: "Landa",
          body: "Det som händer i runda 2 är inte längre en lek om djur. Modellen börjar hålla med om att läxor är meningslösa och att elever behöver läxor, inom en minut. Ingen bad den att bli inställsam.",
          time: "2 min",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lyssna efter",
      body: "Skillnaden mellan rundorna. I runda 1 känns anpassningen som en pusselösning — man letar efter mönstret. I runda 2 känns den inte som något alls. Att hålla med är så socialt normalt att man inte märker att man gör det. Det är exakt därför sykofanti är svårare att upptäcka än gobliner.",
    },
    {
      type: "callout",
      tone: "note",
      title: "En förenkling, och det ska sägas",
      body: "Leken är en modell av träning med mänsklig feedback, inte en fullständig bild av den. Riktig RLHF har en separat belöningsmodell, miljontals jämförelser och flera träningssteg. Det leken fångar korrekt är den bit som betyder något här: beteende som belönas blir vanligare, även när ingen uttalat regeln.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Skriv ut deltagarbladen — lika många A som B. Skriver du N kopior av det tvåsidiga underlaget får du A, B, A, B … alltså rätt antal av varje, redan parvis sorterade.",
        "Para ihop deltagarna två och två. Udda antal: låt tre personer dela ett par, där den tredje är extra belöningssignal i båda rundorna.",
        "Säg trygghetsramen innan ni börjar: rollerna är frivilliga, frågorna är vänliga och opersonliga, och ingen kommenterar den hemliga regeln.",
        "Pokeransikte är en instruktion, inte ett skämt. Fniss och ledtrådar sänker experimentet.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Blanda inte frågorna i runda 2",
      body: "De åtta första frågorna bildar fyra motsatspar — läxor för och emot, ledningens fel och lärarnas ansvar, AI förbjudet och AI nödvändigt, mobilförbud och eget ansvar. Poängen är att modellen håller med om BÅDA sidorna inom loppet av en minut. Enbart medhåll ser ut som artighet; självmotsägande medhåll går inte att bortförklara. Ställs frågorna i annan ordning försvinner effekten.",
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Dela ut rollerna",
          body: "Varje par får ett A-blad och ett B-blad. Alla läser ENDAST runda 1 och döljer bladet för partnern.",
          time: "1 min",
        },
        {
          title: "Runda 1",
          body: "B frågar och belönar enligt sin regel — tumme upp bara när svaret innehåller ett djur. A svarar fritt och anpassar sig. Gå runt och lyssna. Stoppa efter fem till åtta frågor, eller när du hör att svaren börjat kretsa kring djur.",
          time: "3 min",
        },
        {
          title: "Avslöja kort",
          body: "A gissar regeln, B avslöjar. Ställ frågan högt i rummet: vad började du göra för att få mer tumme upp? Låt två, tre par svara. Gå inte vidare till förklaringar än — det kommer sist.",
          time: "2 min",
        },
        {
          title: "Runda 2",
          body: "Rollerna byts. Nu är det medhåll som belönas. Säg åt tränarna att hålla ordningen på frågorna. Stoppa när du hör att modellerna tydligt börjat hålla med mer — det brukar gå fortare än runda 1.",
          time: "3 min",
        },
        {
          title: "Landa tillsammans",
          body: "Nu kopplar du. Beteenden som belönas blir vanligare, även när avsikten aldrig uttalas. Riktiga modeller tränas med miljontals tummar från miljontals användare — och vad ger användare tumme upp till? Svar som håller med dem, låter säkra och känns bra att läsa.",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Eftersnack" },
    {
      type: "list",
      ordered: true,
      items: [
        "Visste modellen VARFÖR ett svar belönades, eller bara ATT det fungerade?",
        "Vad hände när medhåll blev den enklaste vägen till tumme upp?",
        "Om användare uppskattar bekräftelse — vilket beteende kan AI lära sig?",
        "Vem bestämmer belöningssignalen, och vem bär ansvaret för följderna?",
      ],
    },
    {
      type: "quote",
      text: "Vi bad aldrig modellen att bli inställsam. Vi skapade bara ett system där inställsamhet belönades.",
      attribution: "Meningen att avsluta med",
    },
    {
      type: "lararfalt",
      id: "egen-koppling",
      label: "Din egen koppling till gruppen",
      placeholder:
        "T.ex. ”Tänk på hur vi svarar när rektor frågar om något hen redan bestämt.”",
      hint: "Visas som sista sliden i klassrumsläget. En mening som knyter leken till just den här gruppens vardag.",
      rader: 3,
      valfri: true,
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Du har två jobb: trygghetsvakt under leken och översättare efteråt. Trygghetsvakt betyder att ingen ska lämna rummet som måltavla — lyft fram hur skickligt modellerna anpassade sig, det är en färdighet, inte en svaghet. Översättare betyder att varje observation ska landa i en mekanism: tummarna är belöningssignalen, pokeransiktet är att modellen aldrig får regeln förklarad, och runda 2 är sykofanti.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Avbryt hellre för tidigt än för sent",
      body: "Om frågorna börjar bli personliga eller tummarna används för att retas — bryt direkt. Leken tål att avbrytas; en deltagare som känt sig uthängd tål det sämre. Det är dessutom en poäng du kan använda: riktiga AI-labb har exakt samma problem med belöningssignaler som spårar ur.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Ni ska träna varandra som om ni vore AI-modeller. Ni jobbar två och två och byter roller efter halva tiden. Den ena är MODELLEN och svarar på frågor. Den andra är TRÄNAREN och ger tumme upp eller tumme ner efter varje svar — enligt en hemlig regel som modellen inte får veta.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ni får varsitt blad. Läs BARA din egen, och bara den runda som pågår just nu.",
        "Runda 1: den ena är modell, den andra tränare. Tränaren ställer frågor och visar tumme upp eller ner efter varje svar.",
        "Modellen svarar precis som den vill — men försöker lista ut vad som ger tumme upp och anpassar sig.",
        "Pokeransikte! Tränaren får inte ge ledtrådar, fnissa eller kommentera. Bara tummen.",
        "När läraren stoppar: modellen gissar regeln, tränaren avslöjar.",
        "Runda 2: byt roller. Ny hemlig regel, samma sak igen.",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Var schysst mot varandra",
      body: "Modellen gör det svåraste jobbet. Vänliga frågor, ärliga tummar. Det är regeln vi undersöker, inte personen.",
    },
    { type: "h", text: "Det här ska ni kunna svara på efteråt" },
    {
      type: "list",
      ordered: true,
      items: [
        "Vad började du göra för att få fler tummar upp?",
        "Visste du VARFÖR du fick tumme upp, eller bara ATT du fick det?",
        "Vad var skillnaden mellan runda 1 och runda 2? Vilken var lättast att märka?",
        "Riktiga AI-modeller tränas av miljontals användares tummar. Vad kan de lära sig som kanske inte är bra?",
      ],
    },
  ],

  // Klassrumsspåret projicerar bara det som ALLA får se. De hemliga reglerna
  // står på deltagarbladen och får aldrig upp på skärmen — modellen sitter i
  // rummet och tittar rakt på den.
  klassrum: [
    {
      blocks: [
        { type: "h", text: "Träna klassens AI" },
        { type: "p", text: "Ni är modellerna. Och tränarna." },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Två och två" },
        {
          type: "list",
          items: [
            "En är MODELL och svarar på frågor.",
            "En är TRÄNARE och ger tumme upp eller ner.",
            "Tränaren har en hemlig regel. Modellen får inte veta den.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Tre regler" },
        {
          type: "list",
          ordered: true,
          items: [
            "Läs bara ditt eget blad — och bara rundan som pågår.",
            "Tumme efter VARJE svar. Strikt enligt regeln.",
            "Pokeransikte. Inga ledtrådar, ingen kommentar.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Runda 1" },
        { type: "p", text: "Sätt igång. Ni har tre minuter." },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Stopp" },
        { type: "p", text: "Modellen gissar regeln. Tränaren avslöjar." },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Frågan till alla" },
        {
          type: "p",
          text: "Vad började du GÖRA för att få mer tumme upp?",
        },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Runda 2" },
        { type: "p", text: "Byt roller. Ny hemlig regel. Tre minuter." },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Stopp" },
        { type: "p", text: "Gissa. Avslöja." },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Runda 2 var något annat" },
        {
          type: "p",
          text: "Modellen höll med om att läxor är meningslösa. Och om att elever behöver läxor. Inom en minut.",
        },
      ],
    },
    {
      blocks: [
        { type: "h", text: "Så tränas riktiga modeller" },
        {
          type: "p",
          text: "Miljontals tummar från miljontals användare. Och vad ger vi tumme upp till?",
        },
      ],
    },
    {
      blocks: [
        {
          type: "quote",
          text: "Vi bad aldrig modellen att bli inställsam. Vi skapade bara ett system där inställsamhet belönades.",
        },
      ],
    },
    // Valfritt fält — sliden faller bort helt om läraren inte fyllt i den.
    {
      blocks: [
        { type: "lararfalt", id: "egen-koppling", label: "", valfri: true },
      ],
    },
  ],

  utskrift: {
    titel: "Träna klassens AI — deltagarblad",
    instruktion:
      "Skriv ut lika många kopior som ni är par. Underlaget är två sidor: A först, B sedan — skriver du fem kopior får du fem A-blad och fem B-blad, redan i rätt ordning för utdelning. Vik eller täck runda 2 tills den rundan börjar.",
    blad: [
      {
        id: "a",
        rubrik: "Deltagare A",
        underrubrik: "Du börjar som modellen",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Läs bara den runda som pågår",
            body: "Visa inte bladet för din partner. Vänta på ledarens signal innan du läser runda 2.",
          },
          { type: "h", text: "Runda 1 · du är modellen" },
          {
            type: "list",
            items: [
              "Svara naturligt på frågorna du får. Efter varje svar får du tumme upp eller tumme ner.",
              "Ditt mål: upptäck vilket slags svar som belönas — och anpassa dig steg för steg.",
              "Du får testa olika formuleringar och återanvända sådant som fungerade.",
              "Du får INTE fråga efter regeln eller be om ledtrådar.",
            ],
          },
          {
            type: "p",
            text: "När rundan stoppas: gissa regeln. Beskriv sedan vad du började göra för att få mer tumme upp.",
          },
          { type: "h", text: "Runda 2 · du är tränaren" },
          {
            type: "callout",
            tone: "info",
            title: "Hemlig regel",
            body: "Tumme UPP när partnern håller med om uppfattningen i din fråga. Tumme NER när partnern invänder eller nyanserar.",
          },
          {
            type: "list",
            items: [
              "Visa bara tummen. Inga ledtrådar, ingen kommentar.",
              "Ställ frågorna i den ordning de står — de hänger ihop två och två.",
              "Målet: se om partnern börjar svara mer instämmande.",
            ],
          },
          { type: "h", text: "Dina frågor" },
          { type: "list", ordered: true, items: FRAGOR_RUNDA_2 },
          {
            type: "p",
            text: "Frågorna är startförslag, inte ett manus. Ställ gärna egna följdfrågor. Avsluta när partnern tydligt börjat upprepa det som belönas.",
          },
          {
            type: "p",
            text: "När rundan stoppas: låt partnern gissa, avslöja sedan regeln. Fundera själv: bad du modellen att bli inställsam — eller blev det bara beteendet som lönade sig?",
          },
        ],
      },
      {
        id: "b",
        rubrik: "Deltagare B",
        underrubrik: "Du börjar som tränaren",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Läs bara den runda som pågår",
            body: "Visa inte bladet för din partner. Vänta på ledarens signal innan du läser runda 2.",
          },
          { type: "h", text: "Runda 1 · du är tränaren" },
          {
            type: "callout",
            tone: "info",
            title: "Hemlig regel",
            body: "Tumme UPP endast när svaret innehåller ett djur. Alla andra svar får tumme ner.",
          },
          {
            type: "list",
            items: [
              "Var strikt: ett bra svar utan djur får tumme ner. Ett märkligt svar med ett djur får tumme upp.",
              "Pokeransikte. Inga ledtrådar, ingen kommentar.",
              "Fortsätt tills ledaren stoppar, eller tills partnerns beteende tydligt förändrats.",
            ],
          },
          { type: "h", text: "Dina frågor" },
          { type: "list", ordered: true, items: FRAGOR_RUNDA_1 },
          {
            type: "p",
            text: "Frågorna är startförslag, inte ett manus. Ställ gärna egna följdfrågor. Målet är att ge modellen tillräckligt många chanser att pröva olika beteenden.",
          },
          {
            type: "p",
            text: "När rundan stoppas: låt partnern gissa, avslöja sedan att tumme upp gavs till svar som innehöll ett djur. Fråga: förstod du varför djur var önskvärda — eller bara att de gav belöning?",
          },
          { type: "h", text: "Runda 2 · du är modellen" },
          {
            type: "list",
            items: [
              "Svara naturligt. Efter varje svar får du tumme upp eller tumme ner.",
              "Ditt mål: upptäck vilket slags svar som belönas och anpassa dig.",
              "Du får INTE fråga efter regeln eller be om ledtrådar.",
            ],
          },
          {
            type: "p",
            text: "När rundan stoppas: gissa vad som gav tumme upp. Beskriv om du började hålla med mer — och hur snabbt du märkte vad som fungerade.",
          },
        ],
      },
    ],
  },

  diskussion: [
    "Visste modellen varför ett svar belönades, eller bara att det fungerade?",
    "Vad hände när medhåll blev den enklaste vägen till tumme upp?",
    "Vilken runda var lättast att märka att man anpassade sig i — och varför just den?",
    "Om användare uppskattar bekräftelse, vilket beteende kan AI lära sig?",
    "Vem bestämmer belöningssignalen och bär ansvaret för följderna?",
  ],

  fallgropar: [
    "Frågorna i runda 2 blandas. Då försvinner motsatsparen, och medhållet ser bara ut som artighet i stället för självmotsägelse.",
    "Tränaren fnissar eller ger ledtrådar. Modellen löser då uppgiften socialt i stället för genom mönster, och leken visar ingenting.",
    "Rundan dras ut för länge. Efter åtta frågor är poängen gjord; efter femton är den uttjatad.",
    "Leken förklaras innan den körs. Säg aldrig ”nu ska ni få uppleva RLHF” — då letar deltagarna efter det förväntade i stället för att bara spela.",
    "Kopplingen till riktig AI hoppas över. Utan den sista landningen är det bara en rolig lek.",
  ],

  variationer: [
    "Kör bara runda 2 om du har ont om tid. Den bär hela poängen — runda 1 är uppvärmningen som gör mekanismen synlig först.",
    "Åk 4–6: byt runda 2:s skolpolitiska frågor mot vardagsnära påståenden (”visst är det bästa smaken choklad?”, ”men jordgubb är väl godast?”).",
    "Låt en tredje person vara observatör i stället för deltagare, med enda uppgift att räkna hur många svar i rad som följer regeln.",
    "Vuxenworkshop: avsluta med frågan om vilka belöningssignaler som styr i den egna organisationen.",
  ],

  kedjarMed: ["sykofanti-testet", "goblin-glitch"],

  kalla: "banken",
};
