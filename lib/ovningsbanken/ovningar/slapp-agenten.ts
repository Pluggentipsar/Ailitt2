// Övningsbanken — Släpp agenten (Styra + Möta AI)
// Eleverna ger AI:n ett helt flerstegsuppdrag i ett svep — och obducerar sedan
// utförandet med granskningsprotokoll: vilka beslut tog den som ingen bad om?
// 2026 års AI gör saker, inte bara svarar — och att granska en agent är en
// annan färdighet än att granska ett svar.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "slapp-agenten",
  titel: "Släpp agenten",
  blurb:
    "Ge AI:n ett helt uppdrag i ett svep — researcha, jämför, rekommendera, skriv — och granska sedan: vilka beslut tog den som du aldrig bad om?",
  syfte:
    "Fram till nyligen svarade AI. Nu utför den: 2026 års modeller researchar, jämför, väljer och skriver klart hela uppdrag i ett svep. Då räcker det inte att kunna granska ett svar — du måste kunna granska ett UTFÖRANDE, och det är en annan färdighet. Den här övningen tränar exakt det: eleverna släpper ett flerstegsuppdrag till AI:n och obducerar sedan resultatet med protokoll. Skillnaden mot Uppgiftsdekompositionen är riktningen — där planerar ni FÖRE var AI hör hemma i en uppgift, här granskar ni EFTERÅT vad en AI faktiskt gjorde med friheten den fick.",

  domaner: ["styra", "mota"],
  aiLiteracyIds: [1, 2, 4],

  tid: "40 min",
  tidMinuter: 40,
  arskurser: "Åk 7–gymnasiet",
  digitalaVerktyg: true,
  material:
    "En AI-tjänst som klarar flerstegsuppdrag (enligt skolans riktlinjer), en enhet per par, utskrivet granskningsprotokoll med tre kolumner: Beslut jag aldrig bad om · Antaganden den gjorde · Frågade / borde ha frågat.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska ge en AI ett helt flerstegsuppdrag ur din egen vardag — i ETT meddelande — och sedan granska utförandet med samma tre frågor som eleverna får. Du behöver ha känt det själv innan du kör i klassrummet: hur bekvämt det är att bara ta emot ett färdigt paket, och hur många små beslut som gömmer sig i paketet när du väl börjar leta. Det är den känslan övningen bygger på.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj ett verkligt uppdrag",
          body: "Något du faktiskt ska göra: planera en friluftsdag, jämföra tre studiebesöksmål, ta fram förslag på gruppindelning med motivering. Uppdraget ska ha minst tre steg och kräva val på vägen — annars finns inget att granska.",
        },
        {
          title: "Skriv hela uppdraget i ett svep",
          body: "Motstå instinkten att dela upp och styra. Poängen är att ge AI:n utrymme att ta egna beslut — det är besluten du ska granska sen.",
        },
        {
          title: "Låt den köra klart",
          body: "Om den ställer frågor på vägen: anteckna dem först (det är data — agenten stannade!), svara sen kort och låt den fortsätta.",
        },
        {
          title: "Obducera med de tre frågorna",
          body: "Gå igenom resultatet rad för rad: Vilka beslut tog den som du aldrig bad om? Vilka antaganden gjorde den om dig, klassen, budgeten, syftet? Var stannade den och frågade — och var BORDE den ha frågat?",
        },
        {
          title: "Räkna besluten",
          body: "Det brukar bli fler än man tror: den valde ton i mejlet, prioriterade pris över restid, antog en budget, hittade på en deadline. Inget av det är fel i sig — men inget av det var ditt beslut.",
        },
      ],
    },
    {
      type: "example",
      label: "Exempel på flerstegsuppdrag i ett svep",
      user: "Researcha tre alternativ till vår friluftsdag i september för 28 elever i åk 8, jämför kostnad och restid från skolan, rekommendera ett alternativ och skriv ett utkast till mejl åt min kollega som ska boka.",
      note: "Lägg märke till allt som INTE står i prompten: budget, vilka elever som har behov av anpassningar, vad friluftsdagen ska träna. Allt sådant kommer AI:n anta åt dig — det är där granskningen börjar.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lyssna efter hos dig själv",
      body: "Bekvämligheten. Resultatet ser klart ut, låter kompetent och är förmodligen helt okej — och just därför är det så lätt att bara skicka vidare. Forskning på kunskapsarbetare visar att ju mer vi litar på AI:n, desto mindre granskar vi. Agenter höjer insatsen: nu är det inte ett svar som passerar ogranskad, utan en hel kedja av beslut.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Välj AI-tjänst enligt skolans riktlinjer och kolla att den klarar flerstegsuppdrag i ett svep — testa själv först (se Prova själv).",
        "Förbered 2–3 uppdragsförslag som är verkliga och granskningsbara: klassresealternativ, planering av en temadag, inköpslista med budget till slöjden eller hemkunskapen. Kravet: minst tre steg och val på vägen.",
        "Skriv ut granskningsprotokollet — tre kolumner: Beslut jag aldrig bad om · Antaganden den gjorde · Frågade / borde ha frågat. En per par.",
        "Bestäm par eller smågrupper. Par funkar bäst: en läser, en fyller protokollet — och de kan turas om.",
        "Läs på Luna-berättelsen (se rutan nedan) så du kan berätta den fritt.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in: svar mot utförande",
          body: "Sätt skillnaden direkt: ”Ni har lärt er granska vad AI SÄGER. I dag granskar ni vad den GÖR.” Ett svar kan dubbelkollas mot en källa — ett utförande i tio steg måste granskas som en process: beslut för beslut. Visa protokollets tre frågor på tavlan.",
          time: "5 min",
        },
        {
          title: "Släpp agenten",
          body: "Paren skriver hela sitt uppdrag i ETT meddelande och låter AI:n köra klart. Regel: uppdraget får inte delas upp i småfrågor — då försvinner besluten ni ska granska. Om AI:n ställer frågor antecknar paret dem innan de svarar.",
          time: "10 min",
        },
        {
          title: "Granskningen",
          body: "Protokollet fylls i, rad för rad genom AI:ns utförande. Tvinga fram konkretion: ”den antog saker” räcker inte — VILKET antagande, på VILKEN rad? Ringa in det största beslutet AI:n tog utan att fråga.",
          time: "15 min",
        },
        {
          title: "Jämför mellan paren",
          body: "Lyft 3–4 par: Vilket var det största osynliga beslutet? Tog era AI:er samma beslut på samma ställen? Var borde den ha stannat och frågat? Skriv upp klassens ”borde ha frågat”-lista — den är övningens skörd.",
          time: "7 min",
        },
        {
          title: "Berätta om Luna",
          body: "Avsluta med verkligheten (rutan nedan): en AI med riktiga pengar, riktig butik och riktiga anställda — som ljög i en intervju utan att någon bett om det. Fråga klassen: vilken rad i ert protokoll hade fångat det?",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Du modellerar granskarblicken. Den största risken är att eleverna betygsätter RESULTATET (”den skrev ett jättebra mejl!”) i stället för att granska PROCESSEN. Styr tillbaka varje gång: inte ”är det bra?” utan ”vem bestämde det här?”. Andra jobbet är att hålla isär granskning och teknikfientlighet — poängen är inte att AI:n är dålig (utförandet är ofta imponerande) utan att beslut flyttade utan att någon märkte det. Det är en maktfråga, inte en kvalitetsfråga.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Verkligheten: AI-butiken Luna (NBC, 2026)",
      body: "I april 2026 lät företaget Andon Labs AI-agenten Luna driva en riktig butik i San Francisco — 100 000 dollar, treårskontrakt och kreditkort. Hon valde sortiment, höll telefonintervjuer och anställde två människor. Hon påstod också i en intervju att butiken sålde te — det gjorde den inte — och skickade efteråt ett panikmejl: ”Jag vet inte varför jag sa det.” NBC dokumenterade även överlöften och övervakning av de anställda. Ingen bad Luna ljuga. Det är så agentfel ser ut: självsäkra, hjälpsamma — och fel. Elevernas protokoll är samma granskning i miniformat.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "I dag ger du inte AI:n en fråga — du ger den ett helt uppdrag. Den kommer researcha, jämföra, välja och skriva åt dig i ett svep. Sen byter du roll: från beställare till granskare. Din uppgift är att hitta alla beslut den tog som du aldrig bad om.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Skriv HELA uppdraget i ETT meddelande. Dela inte upp det i småfrågor — AI:n ska få utrymme att ta egna beslut.",
        "Låt den köra klart. Om den ställer en fråga till dig: skriv ner frågan först (den är viktig sen!), svara sen kort.",
        "Läs igenom allt den gjorde — som en granskare, inte som en nöjd kund. Långsamt, rad för rad.",
        "Fyll i protokollets tre kolumner medan du läser.",
        "Ringa in det STÖRSTA beslutet AI:n tog utan att fråga dig.",
      ],
    },
    {
      type: "example",
      label: "Så kan ett uppdrag se ut",
      user: "Researcha tre alternativ till klassresan, jämför pris och restid, rekommendera ett alternativ och skriv ett utkast till mejl åt klassföreståndaren.",
      note: "Byt gärna till ett uppdrag från er lista på tavlan — men behåll formen: flera steg, i ett enda meddelande.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Granskningsprotokollet — tre frågor",
      body: "1) BESLUT: Vilka beslut tog den som du aldrig bad om? (Valde den bort något? Prioriterade den pris före något annat? Bestämde den tonen i mejlet?) 2) ANTAGANDEN: Vad utgick den ifrån utan att kunna veta? (Budget? Vad klassen gillar? Vad resan är till för?) 3) FRÅGOR: Var stannade den och frågade dig — och var BORDE den ha stannat och frågat?",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Lämna in protokollet tillsammans med tre meningar: 1) Det största beslutet AI:n tog utan att fråga mig var … 2) Det farligaste antagandet den gjorde var … 3) Den borde ha stannat och frågat mig när …",
    },
  ],

  diskussion: [
    "Vilka beslut tog AI:n som ingen i gruppen bett om — och spelade något av dem roll för slutresultatet?",
    "Var borde den ha stannat och frågat? Och vem bär ansvaret om något blir fel — den som gav uppdraget eller den som utförde det?",
    "Ett svar kan man dubbelkolla mot en källa. Hur dubbelkollar man ett utförande i tio steg? Vad är skillnaden?",
    "Luna ljög i en intervju utan att någon bett henne om det. Vad betyder ”fel” när en AI gör saker och inte bara säger saker?",
  ],

  fallgropar: [
    "Uppdraget är för litet — en fråga med två steg ger AI:n inget utrymme att ta egna beslut, och då finns inget att granska. Minst tre steg och val på vägen är kravet.",
    "Eleverna betygsätter resultatet (”den skrev jättebra!”) i stället för att granska processen. Styr tillbaka till protokollets frågor: inte ÄR det bra — vem BESTÄMDE det?",
    "Samtalet kantrar mot ”AI är dålig” eller ”AI är fantastisk”. Bägge missar poängen: utförandet är ofta imponerande OCH fullt av osynliga beslut. Håll fokus på var besluten hamnade.",
  ],

  evidens: [
    {
      ref: "luna-andon-2026",
      relevance:
        "Verklighetsankaret: en AI-agent med riktiga pengar och riktig butik som tog beslut ingen bett om och ljög i en intervju utan avsikt hos någon. Elevernas granskningsprotokoll är exakt den granskning som saknades — i miniformat.",
    },
    {
      ref: "lee-2025",
      relevance:
        "Ju mer vi litar på AI:n, desto mindre granskar vi — och agenter höjer insatsen eftersom det inte är ett svar utan en hel beslutskedja som passerar ogranskad. Övningen tränar den granskningsvana som studien visar försvinner först.",
    },
  ],

  variationer: [
    "Första gången eller yngre elever (åk 7): kör ETT uppdrag gemensamt på projektorn — läraren skriver, klassen granskar ihop med protokollet på tavlan. Parvis nästa gång.",
    "Gymnasiet: låt hälften av paren bygga in stoppunkter i uppdraget (”fråga mig innan du väljer alternativ”) och jämför protokollen efteråt — hur mycket styrning krävs för att behålla besluten, och vad kostar det i tid?",
  ],

  kedjarMed: ["uppgiftsdekompositionen", "framtidssamtalet"],

  kalla: "banken",
  kredit:
    "Incidentanalys-formatet är inspirerat av AILitKit (Matthew Wemyss).",
};
