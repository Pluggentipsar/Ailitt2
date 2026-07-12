// Övningsbanken — "Startmeningarna".
// Mot skrivkramp: AI som startkabel, inte motor. Tre startmeningar,
// eleven väljer (eller skriver en egen bättre) och skriver sen vidare själv.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "startmeningarna",
  titel: "Startmeningarna",
  blurb:
    "Tomt dokument, tom blick? Låt AI:n skriva tre startmeningar — sen tar du över och skriver resten själv.",
  syfte:
    "Skrivkramp handlar oftast om första meningen, inte om texten. Här används AI som startkabel: tre förslag på öppningar, eleven väljer en — eller skriver en egen bättre, vilket räknas som vinst — och skriver sedan vidare helt själv i tio minuter. Till sist jämförs den egna fortsättningen med AI:ns, och eleven ser vad den egna texten har som AI:ns saknar. Ägarskapet stannar hos eleven: AI:n startade motorn, den körde inte bilen.",

  domaner: ["skapa"],
  aiLiteracyIds: [2],

  tid: "15–20 min",
  tidMinuter: 20,
  arskurser: "Åk 6–gymnasiet (svenska, SO med flera skrivämnen)",
  digitalaVerktyg: true,
  material:
    "AI-verktyg + elevens eget skrivdokument eller papper. Promptmallen synlig på tavlan eller skärmen.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska testa övningens hela loop på något du själv faktiskt behöver skriva — ett veckobrev, ett omdöme, en inledning till ett föräldramöte. Du ber AI:n om tre startmeningar, väljer en (eller skriver en egen bättre), skriver vidare själv i tio minuter och jämför till sist med AI:ns fortsättning. Känslan du letar efter: hur mycket lättare resten rullar när första meningen är LÖST — utan att texten slutat vara din.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj något du faktiskt ska skriva",
          body: "Övningen känns på riktigt först när texten behövs på riktigt. Ta veckobrevet, bloggposten eller kursintrot som ligger och skaver.",
        },
        {
          title: "Kör promptmallen",
          body: "”Jag ska skriva [typ av text] om [ämne] till [mottagare]. Ge mig tre olika startmeningar med helt olika ingångar — en rak, en överraskande och en som börjar med en fråga. Bara meningarna, ingen fortsättning.”",
        },
        {
          title: "Välj — eller skriv en egen bättre",
          body: "Läs de tre förslagen. Ofta händer något lustigt: förslagen väcker en fjärde mening, din egen. Det är inte att misslyckas med övningen — det är dess finaste utfall.",
        },
        {
          title: "Stäng AI-fliken och skriv",
          body: "Tio minuter, utan stopp, utan AI. Notera var det tar emot och var det rullar.",
        },
        {
          title: "Jämför efteråt",
          body: "Be AI:n: ”Fortsätt den här texten: [din startmening]”. Läs dess version bredvid din. Vad har din som AI:ns saknar? (Ledtråd: dina exempel, dina elever, din torsdag.)",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Varför bara EN mening?",
      body: "Frestelsen är att be AI:n om hela inledningen. Men då har den satt ton, struktur och riktning — och texten blir dess. En startmening är precis så mycket hjälp att krampen släpper, och precis så lite att allt viktigt fortfarande är kvar att göra. Det är den balansen övningen tränar.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Koppla övningen till en skrivuppgift ni redan jobbar med — den är en igångsättare inuti ett riktigt skrivmoment, inte ett eget fristående moment.",
        "Skriv promptmallen synlig för alla: ”Jag ska skriva en text om [ämne]. Ge mig tre olika startmeningar med helt olika ingångar — en rak, en överraskande och en som börjar med en fråga. Bara meningarna, ingen fortsättning.”",
        "Bestäm och kommunicera regeln i förväg: efter valet av startmening är AI:n STÄNGD i tio minuter.",
        "Testa mallen själv på uppgiftens ämne så du vet ungefär vilken kvalitet och ton eleverna kommer att få.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in",
          body: "”Det svåraste med att skriva är ofta första meningen. Idag outsourcar vi den — bara den. Resten är ert.” Visa promptmallen och regeln om stängd AI.",
          time: "3 min",
        },
        {
          title: "Generera",
          body: "Eleverna kör promptmallen på sitt ämne och får tre startmeningar. Max tre — den som vill ha ”tre till, och tre till” har bytt övning till att shoppa i stället för att skriva.",
          time: "4 min",
        },
        {
          title: "Välj och skriv",
          body: "Eleven väljer en startmening — eller skriver en egen bättre (lyft det som vinst!). Sen: AI:n stängd, skriv utan stopp i tio minuter. Cirkulera och håll tystnadsskrivandet.",
          time: "10 min",
        },
        {
          title: "Jämför",
          body: "Eleverna ber AI:n fortsätta från samma startmening och läser dess version bredvid sin egen. Varje elev noterar EN sak den egna texten har som AI:ns saknar.",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Bevaka två saker. Ett: att ingen fastnar i genererings-loopen — tre meningar räcker, valet är en del av övningen. Två: att skrivtiden är helig. Det är i de tio AI-fria minuterna som övningen händer; allt före är bara tändningsnyckeln.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Lyft de egna startmeningarna",
      body: "När en elev ratar alla tre AI-förslag och skriver en egen — gör det till lektionens hjälteögonblick. Det är övningens finaste utfall: AI-förslagen var tändstickor, elden är elevens. Så bygger du en klasskultur där AI är avstamp, inte facit.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Att börja skriva är det svåraste. Idag får du hjälp med exakt EN mening — sen är resten ditt.",
    },
    { type: "h", text: "Steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Be om tre startmeningar",
          body: "Öppna AI-verktyget och skriv: ”Jag ska skriva en text om [ditt ämne]. Ge mig tre olika startmeningar med helt olika ingångar — en rak, en överraskande och en som börjar med en fråga. Bara meningarna, ingen fortsättning.”",
        },
        {
          title: "Välj — eller slå AI:n",
          body: "Läs de tre förslagen och välj den som känns bäst. ELLER: skriv en egen startmening som är bättre. Om AI:ns förslag fick dig att komma på en egen — perfekt, det räknas som vinst.",
        },
        {
          title: "Stäng AI:n och skriv",
          body: "Skriv vidare själv i tio minuter. Sluta inte — skriv även när det känns trögt. AI:n är stängd tills tiden är slut.",
        },
        {
          title: "Hämta AI:ns version",
          body: "När tiden är ute: öppna AI:n igen och skriv: ”Fortsätt den här texten: [din startmening]”.",
        },
        {
          title: "Jämför",
          body: "Läs AI:ns fortsättning bredvid din. Hitta minst en sak i DIN text som AI:ns saknar — ett minne, ett exempel, en åsikt, något som bara du kunde skriva.",
        },
      ],
    },
    {
      type: "example",
      label: "Så kan det se ut",
      user: "Jag ska skriva en argumenterande text om skoluniform. Ge mig tre olika startmeningar med helt olika ingångar — en rak, en överraskande och en som börjar med en fråga. Bara meningarna, ingen fortsättning.",
      ai: "1. Skoluniform är en av de mest omdiskuterade frågorna i svensk skola. 2. Tänk dig att alla i klassrummet bär exakt samma tröja — vem är du då? 3. Vad händer med en skola när ingen längre kan tävla i märkeskläder?",
      note: "Tre helt olika dörrar in i samma text. Du väljer dörr — sen går du själv.",
    },
    { type: "h", text: "Det här visar du upp" },
    {
      type: "list",
      items: [
        "Din startmening — och om den var AI:ns eller din egen.",
        "Din text från de tio minuterna.",
        "Den sak din text har som AI:ns fortsättning saknar, i en mening.",
      ],
    },
  ],

  diskussion: [
    "Vilken av de tre ingångarna valde du — den raka, den överraskande eller frågan? Varför just den?",
    "Var det någon som skrev en egen startmening i stället? Vad var det i AI-förslagen som satte igång den?",
    "Vad hade din fortsättning som AI:ns saknade — och vad hade AI:ns som din saknade? Vad säger det om vad du ska använda AI till?",
    "Var går gränsen mellan att få hjälp att KOMMA IGÅNG och att låta någon annan skriva åt dig?",
  ],

  fallgropar: [
    "Genererings-loopen: eleven ber om tre startmeningar till, och tre till, och skjuter upp skrivandet. Sätt stopp vid tre — valet och skrivandet är övningen, inte shoppandet.",
    "Jämförelsen i slutet kan knäcka i stället för stärka om AI:ns fortsättning känns ”bättre”. Styr blicken mot det AI:n inte kan: elevens erfarenheter, exempel och röst — det är det uppgiften efterfrågar.",
    "Smygöppnad AI under skrivtiden: några elever ”väljer” en startmening och försöker sen få AI:n att skriva vidare. Var tydlig med regeln och gör jämförelsesteget till den legitima återöppningen.",
  ],

  evidens: [
    {
      ref: "kapur-2016",
      relevance:
        "Produktiv kamp: stöd ska sänka tröskeln in i uppgiften utan att ta bort ansträngningen där lärandet sker. Startmeningen är tröskeln — de tio egna minuterna är kampen.",
    },
  ],

  variationer: [
    "Yngre elever (åk 6) eller få enheter: kör gemensamt — klassen röstar fram EN startmening på tavlan och alla skriver vidare individuellt från samma mening. Jämför sedan hur olika texterna blev trots samma start: bevis på att texten bor i fortsättningen, inte i öppningen.",
    "Äldre/fördjupning: byt ”tre startmeningar” mot ”tre olika dispositioner” eller ”tre inledningsstycken i olika genrer” — samma regel gäller: välj, stäng AI:n, skriv själv.",
  ],

  kedjarMed: ["prompt-stafetten", "forhors-ai"],

  kalla: "banken",
};
