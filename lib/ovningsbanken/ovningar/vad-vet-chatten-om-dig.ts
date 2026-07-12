// Övningsbanken — Vad vet chatten om dig? (Möta + Styra AI)
// Integritetsinventering: varje elev går igenom sin EGEN chatthistorik privat,
// listar kategorier (aldrig innehåll), hittar minnesfunktionen och radera-
// knapparna — och sätter tre egna delningsregler. Kontroll, inte skam.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "vad-vet-chatten-om-dig",
  titel: "Vad vet chatten om dig?",
  blurb:
    "Öppna din egen chatthistorik — bara för dig själv — lista vad AI:n vet om dig i kategorier, hitta minnesknappen och sätt tre egna delningsregler.",
  syfte:
    "Många elever har månader av samtal med AI bakom sig — skola, känslor, familj, hälsa — utan att någonsin ha tittat i backspegeln. Den här övningen är en integritetsinventering: var och en går igenom sin EGEN historik helt privat, upptäcker minnesfunktionen, ser vilka kategorier av sig själva de lämnat ifrån sig och formulerar tre egna delningsregler. Poängen är inte skam utan kontroll: det du vet att du delat kan du också bestämma över.",

  domaner: ["mota", "styra"],
  aiLiteracyIds: [3, 4, 5],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "Åk 7–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Elevernas egna enheter med de AI-tjänster de faktiskt använder (ChatGPT, Copilot, Snapchat My AI …), papper eller anteckningsapp för kategorilista och delningsregler.",
  varning:
    "Ingen elev ska visa, läsa upp eller dela sin chatthistorik — inte för läraren, inte för bänkkamraten. Det enda som lämnar den egna skärmen är KATEGORIER (”skola”, ”känslor”), aldrig innehåll. Säg regeln högt INNAN någon öppnar sin historik, och ha en alternativuppgift redo för den som inte vill eller inte har någon historik.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska göra inventeringen på din egen chatthistorik innan du kör den med elever — av två skäl. Det praktiska: du måste kunna visa vägen till minnes- och raderainställningarna utan att famla. Det viktigare: du kommer själv bli förvånad över vad som ligger där, och den förvåningen är exakt det eleverna kommer känna. Räkna en kvart.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Öppna din mest använda AI och skrolla bakåt",
          body: "En månad räcker. Läs rubrikerna på dina gamla konversationer — bara det brukar räcka för en första insikt om hur mycket vardag som samlats där.",
        },
        {
          title: "Lista kategorier, inte innehåll",
          body: "Skriv en lista över VAD för sorts saker du delat: jobb/skola, hälsa, känslor, familj, ekonomi, plats, andra människors namn … Du dokumenterar sorter, inte citat — samma disciplin som eleverna ska hålla.",
        },
        {
          title: "Hitta minnesfunktionen",
          body: "ChatGPT: Inställningar → Personalisering → Minne — där ligger det modellen sparat om dig mellan samtalen. Copilot har motsvarande under din profil/inställningar. Läs igenom vad som faktiskt står. Det är ofta mer specifikt än man väntar sig.",
        },
        {
          title: "Hitta radera och stäng av",
          body: "Leta upp tre knappar: radera ett enskilt minne, stäng av minnesfunktionen helt, radera konversationer. Du behöver inte trycka på någon av dem — men du ska veta exakt var de sitter, för det är dit du ska lotsa 25 elever samtidigt.",
        },
        {
          title: "Skriv dina tre delningsregler",
          body: "Till exempel: ”Jag delar aldrig andra personers namn”, ”hälsofrågor ställer jag utan att koppla dem till mig”, ”det jag inte skulle säga i ett klassrum skriver jag inte i en gratischatt”. Dina regler blir din modellering — utan att du behöver visa din historik.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska känna efter",
      body: "Ögonblicket när du hittar något AI:n sparat som du glömt att du berättat. Spara den känslan — det är övningens motor, och den funkar bara om varje elev får ha den privat, utan publik.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Gör inventeringen på din egen historik först (se Prova själv) så att du kan visa vägen till inställningarna i den tjänst eleverna använder mest.",
        "Ta reda på vilka tjänster klassen faktiskt använder — snabb handuppräckning dagen innan. Förbered instruktioner för de två vanligaste; övriga elever letar med stöd av en kompis som har samma app.",
        "Skriv kategoriorden på tavlan i förväg: skola, hälsa, känslor, familj, kompisar, plats, ekonomi, framtidsplaner. Färdiga kategorier gör att ingen behöver formulera något avslöjande själv.",
        "Förbered alternativuppgiften för elever utan historik eller som inte vill öppna sin: en påhittad persons chatthistorik (15 rader du skrivit ihop) att kategorisera och sätta regler åt. Rama in den som lika värdefull.",
        "Repetera trygghetsregeln för dig själv: kategorier på tavlan, aldrig innehåll — och ingen skärm vänds mot någon annan.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in — regeln först",
          body: "Innan en enda skärm öppnas: ”Det ni ska titta på är ert. Ingen visar, ingen läser upp, ingen fotar. Det enda vi delar är kategorier — sorter av saker, aldrig vad som faktiskt står.” Förklara sen varför övningen finns: er chatt har ett minne, och i dag tar ni reda på vad som ligger i det.",
          time: "5 min",
        },
        {
          title: "Enskild inventering",
          body: "Varje elev skrollar bakåt i sin egen historik och skriver sin kategorilista på papper. Tyst, enskilt arbete — gå runt men titta aldrig på skärmar, bara på att arbetet flyter. Elever med alternativuppgiften jobbar parallellt.",
          time: "8 min",
        },
        {
          title: "Kategorier på tavlan",
          body: "Handuppräckning per kategori: ”hur många har delat något om skola? hälsa? känslor?” Sätt streck på tavlan. Nu ser klassen den gemensamma bilden — utan att någon enskild exponerats. Kommentera mönstret, aldrig individer.",
          time: "5 min",
        },
        {
          title: "Hitta inställningarna",
          body: "Lotsa alla till tre platser i sin app: minnesfunktionen (vad har den sparat om mig?), radera-knappen (enskilda minnen och konversationer) och stäng av-läget. Visa vägen via skärmdumpar eller ditt eget konto på projektorn om du är bekväm med det. Ingen MÅSTE radera något — målet är att veta var knapparna sitter.",
          time: "7 min",
        },
        {
          title: "Tre delningsregler",
          body: "Varje elev formulerar tre egna regler: något jag fortsätter dela, något jag slutar dela, och vad som avgör skillnaden. Reglerna är det som lämnas in — inte kategorilistan, den är elevens egen.",
          time: "5 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Trygghetsvakt först, kunskapskälla sen. Ingen elev ska behöva förklara varför en kategori finns i deras lista — fråga aldrig ”vem har delat känslor då?” med blicken på någon. Kunskapskopplingen du ska landa: gratis-AI-tjänster tränar ofta på konversationerna, och det minnet sparar följer med in i framtida svar — det AI:n vet om dig formar vad den säger till dig. Det är inte farligt i sig, och övningen ska inte sluta i panik. Den ska sluta i ett val: nu vet du vad den vet, och nu vet du var knapparna sitter.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Om något allvarligt dyker upp",
      body: "En elev som skrollar bakåt kan möta egna samtal om självskada, hemförhållanden eller annat tungt — och reagera under lektionen. Ha elevhälsans kontaktväg klar innan du kör, fånga upp enskilt och aldrig i helklass. Det är också ett skäl att aldrig tvinga någon att öppna sin historik.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Din AI-chatt har ett minne — och i dag tar du reda på vad som ligger i det. Allt du gör i den här övningen är privat: ingen kommer titta på din skärm, ingen får fråga vad som står i din historik, och du väljer själv vilken chatt du tittar i.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Öppna den AI du använder mest och skrolla bakåt i din historik. Du visar den ALDRIG för någon — inte läraren, inte kompisen.",
        "Skriv en lista med KATEGORIER av saker du delat: skola, hälsa, känslor, familj, kompisar, plats … Skriv sorter, aldrig vad som faktiskt står.",
        "Hitta minnesfunktionen i appen (i ChatGPT: Inställningar → Personalisering → Minne). Läs vad AI:n sparat om dig mellan samtalen.",
        "Hitta radera-knappen och stäng av-läget. Du måste inte radera något — men du ska veta exakt var knapparna sitter.",
        "Skriv tre egna delningsregler: en sak du fortsätter dela, en sak du slutar dela, och vad som avgör skillnaden för dig.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Privat betyder privat",
      body: "Visa aldrig din historik, läs inte upp den, fota den inte. Om en kompis försöker visa sin — säg nej, det är för kompisens skull också. Det enda som hamnar på tavlan är kategorier, aldrig innehåll. Och om du inte vill öppna din historik alls säger du bara till — det finns en annan version av uppgiften.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Lämna in dina TRE delningsregler — kategorilistan behåller du själv. Skriv också en mening som börjar: ”En sak som förvånade mig var …” — utan att avslöja något innehåll ur dina chattar.",
    },
  ],

  diskussion: [
    "Vilka kategorier fick flest streck på tavlan — och vilka blev ni förvånade över?",
    "En gratis-AI betalas ofta med data. Ändrar det vad du väljer att skriva? Borde det?",
    "Minnet gör AI:ns svar mer personliga — men det betyder också att gamla samtal formar nya. När är det hjälpsamt, och när blir det obehagligt?",
    "Vad är skillnaden mellan att berätta något för en kompis och att skriva det till en AI? Vem mer kan ”höra” i respektive fall?",
  ],

  fallgropar: [
    "Elever börjar visa varandra roliga gamla chattar — då kollapsar hela tryggheten som övningen vilar på. Säg regeln INNAN skärmarna öppnas, repetera den vid inventeringens start, och bryt vänligt men direkt om det ändå händer.",
    "Elever utan historik — eller som inte vill öppna sin — pekas ut om alternativuppgiften saknas eller känns som ett B-spår. Förbered den i förväg och rama in den som lika värdefull: att sätta delningsregler åt någon annan tränar samma sak.",
    "Övningen kantrar mot skräck och skam (”radera allt, lita aldrig på något!”). Landa i kontroll i stället: att veta vad den vet, och var knapparna sitter, är målet — inte att sluta använda AI.",
  ],

  evidens: [
    {
      ref: "ios-2025",
      relevance:
        "Internetstiftelsens kartläggning visar hur snabbt AI blivit vardagsverktyg och samtalspartner för unga — vilket betyder att chatthistoriken redan innehåller långt mer personligt material än de flesta elever är medvetna om. Övningen gör den omedvetna delningen synlig.",
    },
    {
      ref: "csm-2025-companions",
      relevance:
        "Common Sense Medias studie visar att tonåringar delar förtroenden med AI och själva beskriver otydliga gränser kring tillit och sårbarhet. Delningsreglerna eleverna formulerar är precis den gränsdragning studien visar att många unga saknar ord för.",
    },
  ],

  variationer: [
    "Yngre elever (åk 7) eller tunn historik: kör hela övningen på en påhittad persons chatthistorik — läraren förbereder 15 fejkade chattrader, paren kategoriserar och skriver delningsregler åt den personen. Samma träning, noll exponering.",
    "Gymnasiet: fördjupa mot policy — grupper läser tjänstens egen dataskyddstext och svarar på tre frågor: tränar den på mina samtal? hur länge sparas de? kan jag få ut eller radera allt? Jämför svaren mellan tjänster.",
  ],

  kedjarMed: ["chatt-safarin", "hemligt-losenord"],

  kalla: "banken",
};
