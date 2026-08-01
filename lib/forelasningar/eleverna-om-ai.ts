// Läsversion av föreläsningen "Detta behöver eleverna veta om AI"
// (originalet ligger som MDX i github.com/Pluggentipsar/Forelasningar).
//
// SKRIVREGELN, och den är hela poängen med filen: texten ska bära ARGUMENTET,
// inte beskriva bilden. Ingen ska stå här: "klicka fram", "publiken ser",
// "låt den ligga kvar", "bilden öppnar intakt". Den som läser var inte där
// och ska inte behöva föreställa sig en animation — hen ska kunna följa
// resonemanget rakt igenom och komma ut med samma sak som den som satt i
// salen. Bilden syns ändå, i iframen bredvid.
//
// Styckena ska dessutom haka i varandra. Läser man tre i rad ska det låta
// som en text, inte som tre bildtexter. Aktinledningarna gör det tyngsta
// arbetet: de säger vad som ska hända och varför just nu.
//
// SLIDE-INDEXEN ÄR KALIBRERADE MOT DEPLOYEN, inte mot MDX:ens egna
// kapitelkommentarer, som är inaktuella. Kontrollerat: bild 14 är "01
// Oraklet", bild 30 är "02 Tjänaren". Overlay-element (FloatingImage,
// FloatingText) räknas inte som egna bilder.

import type { Forelasning } from "./typer";

export const forelasningen: Forelasning = {
  id: "eleverna-om-ai",
  title: "Detta behöver eleverna veta om AI",
  subtitle: "Om orakel, tjänare, vänner, rivaler — och rätten att välja själv",
  author: "Joel Rangsjö",
  event: "Föreläsning för lärare · 60 min + workshop",
  duration: "60 minuter",
  presenterBaseUrl: "https://forelasningar.vercel.app/eleverna-om-ai2",
  intro:
    "Det här är föreläsningen som text. Den går att läsa från början till slut utan att ha varit på plats, och den bär samma argument: att AI inte är en sak utan fyra roller vi ger den — oraklet som vet, tjänaren som gör åt oss, vännen som förstår oss och rivalen som ska ersätta oss. Ingen av rollerna är teknikens egenskap. De är våra föreställningar, och det är därför de går att välja bort. Texten börjar där föreläsningen börjar, på en buss, och slutar i den fråga allt annat finns till för att göra besvarbar: vad ska AI få vara för dig? Bilderna mellan styckena är slides ur presentationen. Flera avsnitt länkar vidare till färdiga övningar.",

  acts: [
    // ════════════════════════════════════════════════════════════════════
    {
      id: "bussen",
      number: "Prologen",
      title: "Bussen",
      tone: "kol",
      intro:
        "Fyra ungdomar säger fyra saker till varandra. De vet inte om att de sammanfattar hela AI-debatten, och de använder inte ett enda fackord. Poängen med att börja här, och inte i tekniken, är att visa att frågan redan är ställd — av eleverna, dagligen, utan att skolan är med i samtalet. Rösterna får sina namn först i slutet av texten. Fram till dess är de bara fyra sätt att förhålla sig till samma maskin.",
      slides: [
        {
          id: "bussen-oppning",
          index: 1,
          chapter: "§ 0 · Bussen",
          display: "Jag åker buss nästan varje dag. Och ungdomarna pratar.",
          summary:
            "På bussar och tåg pågår samtal som ingen vuxen är inbjuden till, och där sägs saker om AI som inte sägs på utvecklingssamtal. Fyra av dem följer här. De är återgivna som de lät, utan att göras mer eller mindre oroande än de var.",
        },
        {
          id: "rost-tjanaren",
          index: 2,
          chapter: "Bussen · måndag 17:42",
          display:
            "”Jag lämnade in en text men glömde ta bort alla de där jävla emojisarna. Hon fattade ingenting. Great success!”",
          attribution: "Kille, gymnasiet · till sin kompis",
          summary:
            "Det roliga är att han nästan åkte dit — inte på innehållet, utan på formateringen. Det obekväma är vad meningen förutsätter: att uppgiften var något som skulle bli klar, inte något han skulle lära sig av. Att läraren inte märkte något är inte huvudsaken. Huvudsaken är att han själv inte upplevde att han missat något.",
        },
        {
          id: "rost-oraklet",
          index: 3,
          chapter: "Bussen · onsdag 8:14",
          display:
            "”Det är så skönt, alltså. Det finns ju typ ingen fråga man inte kan få svar på.”",
          attribution: "Tjej, högstadiet · till sin kompis",
          summary:
            "Hon beskriver en lättnad, och lättnaden är äkta. Att alltid kunna få ett svar är en verklig förbättring av tillvaron för den som ofta känt sig dum. Men mellan orden ”ingen fråga” och ”svar” ligger något hon inte säger och förmodligen inte tänkt på: att svaret skulle vara sant. Den tilliten är hela nästa kapitel.",
        },
        {
          id: "rost-vannen",
          index: 4,
          chapter: "Bussen · fredag 22:11",
          display:
            "”Jag dumpade in allt från hans sociala medier. Och frågade om jag skulle dejta honom. Major red flags, tydligen.”",
          attribution: "Tjej, gymnasiet · till sin kompis",
          summary:
            "Två saker händer samtidigt här. Hon anförtror en maskin ett beslut som handlar om en annan människas karaktär, och hon matar in en persons material utan att den personen vet om det. Att hon dessutom accepterar domen — ”major red flags, tydligen” — säger något om vilken auktoritet svaret fick.",
        },
        {
          id: "rost-rivalen",
          index: 5,
          chapter: "Bussen · torsdag 15:38",
          display:
            "”Jag vet inte vad jag ska bli. Tänkte först bli designer. Men det känns inte värt det längre. Tandläkare kan väl AI inte bli?”",
          attribution: "Tjej, åk 9 · till sin kompis",
          summary:
            "Den här repliken är den tyngsta, och den är svårast att svara på. Hon är femton och har redan gett upp ett yrke hon aldrig fått pröva. Hon har inte läst någon rapport om automatisering; hon har dragit en slutsats av det hon sett omkring sig. Frågan hon egentligen ställer — vad är värt att bli skicklig på? — är en fråga skolan måste kunna hantera, och den återkommer i kapitel fyra.",
        },
        {
          id: "titeln",
          index: 6,
          heading: "Detta behöver eleverna veta om AI",
          display: "Om orakel, tjänare, vänner, rivaler — och rätten att välja själv.",
          summary:
            "Fyra repliker, fyra helt olika sätt att förhålla sig till samma teknik. Ingen av dem handlar om vad AI är. Alla fyra handlar om vad AI är för dem. Det är den skillnaden hela föreläsningen vilar på.",
        },
        {
          id: "myten",
          index: 7,
          chapter: "§ 0 · Den gamla drömmen",
          heading: "Samma figur, nya skepnader",
          display: "Vi har alltid velat skapa något i vår egen avbild.",
          bullets: [
            "Golem · Prag, 1500-tal · lera",
            "Silversvanen · 1773 · mekanik",
            "Frankensteins varelse · 1818",
            "Chatboten · 2020-tal · språk",
          ],
          summary:
            "Drömmen om att bygga något levande i vår egen avbild är minst femhundra år gammal. Golem formades av lera och väcktes med ord; Silversvanen var ett urverk som sänkte halsen och fångade en fisk så övertygande att människor grät; Frankensteins varelse föddes ur en sommar av regn och skräck. Chatboten är den fjärde skepnaden, inte den första. Det är inte fyra historiska kuriosa — det är samma längtan i olika material.",
        },
        {
          id: "vad-onskade-vi",
          index: 8,
          chapter: "§ 0 · Vad önskade vi oss?",
          bullets: [
            "svara oss — Oraklet",
            "tjäna oss — Tjänaren",
            "förstå oss — Vännen",
            "överträffa oss — Rivalen",
          ],
          summary:
            "Om man frågar vad vi egentligen önskade oss av den skapelsen blir svaret fyra saker: något som kunde svara oss, tjäna oss, förstå oss och överträffa oss. Det är samma fyra som ungdomarna på bussen beskrev — och det är ingen slump. Rollerna kom före tekniken. Vi hade dem färdiga innan det fanns något att lägga dem på.",
        },
        {
          id: "det-nya",
          index: 9,
          chapter: "§ 0 · Det nya",
          heading: "Drömmen är gammal — det är inte den som är nyheten",
          display:
            "Det nya är inte att vi drömmer om tänkande maskiner. Det nya är att maskinerna har börjat svara.",
          summary:
            "Här går skiljelinjen mot allt som varit förut. Golem svarade aldrig. Silversvanen upprepade samma rörelse i tvåhundrafemtio år. Det som hänt de senaste åren är att den fjärde skepnaden faktiskt svarar tillbaka, i språk, på ett sätt som gör att våra gamla föreställningar plötsligt får något att fästa vid.",
        },
        {
          id: "fyra-roller",
          index: 10,
          chapter: "§ 0 · Fyra roller",
          heading: "Berättelsen",
          bullets: [
            "Oraklet · Den vet.",
            "Tjänaren · Den gör arbetet åt mig.",
            "Vännen · Den känner mig och vill mig väl.",
            "Rivalen · Den kommer att ersätta mig.",
          ],
          summary:
            "De fyra rollerna är föreläsningens karta, och varje kapitel tar en av dem. Värt att lägga märke till är vad som INTE står i mitten av bilden: ingen robot, inget ansikte. AI framställs som system och mönster, för så fort man ritar ett ansikte har man redan svarat på frågan kapitlet ska undersöka.",
        },
        {
          id: "tesen",
          index: 11,
          chapter: "§ 0 · Tesen",
          display:
            "Du behöver inte förstå allt om AI. Du behöver förstå tillräckligt för att kunna välja. Vad ska AI få vara för dig?",
          summary:
            "Det här är tesen, och den är medvetet blygsam i sitt kunskapskrav. Ingen behöver kunna förklara transformerarkitektur för att fatta bra beslut om sin egen användning. Men man behöver förstå tillräckligt — och tillräckligt är mer än noll. Allt som följer finns till för att göra den sista frågan besvarbar.",
        },
        {
          id: "dubbelheten",
          index: 12,
          chapter: "§ 0 · Två föreläsningar samtidigt",
          heading: "Var öppen med dubbelheten",
          bullets: [
            "Vad AI faktiskt gör när den svarar",
            "När den hjälper — och när den tar över",
            "Vad som är kvar att vara människa i",
            "Hur förståelsen blir en aktivitet på måndag",
            "Vilken nivå som passar din elevgrupp",
            "Hur du håller samtalet öppet utan att moralisera",
          ],
          summary:
            "En lärare som lyssnar på det här gör två saker samtidigt: förstår AI som människa, och funderar på hur det ska undervisas. De två går inte att skilja åt, och det är ingen brist. Men de kräver olika sorters innehåll, och därför avslutas varje kapitel med tre tydligt åtskilda rader: vad eleven ska förstå, vad läraren behöver veta, och vad man faktiskt gör i klassrummet.",
        },
        {
          id: "laget",
          index: 13,
          chapter: "§ 0 · Varför nu?",
          heading: "Eleverna väntar inte",
          display: "Eleverna väntar inte på att skolan ska bli klar.",
          summary:
            "En majoritet av eleverna på högstadiet och gymnasiet använder redan AI regelbundet, och användningen växer snabbast i de yngre åldrarna. Siffrorna spelar mindre roll än riktningen: glappet går inte mellan de som använder AI och de som inte gör det, utan mellan de som har någon vuxen att tänka tillsammans med och de som inte har det.",
          notes:
            "Exakta siffror åldras snabbt på det här området och bör kontrolleras nära inpå varje föreläsningstillfälle.",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    {
      id: "oraklet",
      number: "01",
      title: "Oraklet",
      tone: "havsblå",
      intro:
        "Den första rollen är den som vet. Kapitlet undersöker vad som egentligen händer när en språkmodell svarar, och det gör det med så lite teknik som möjligt — bara tillräckligt för att förstå varför den kan ha fel med exakt samma självsäkerhet som när den har rätt. Kapitlet slutar i en korrigering som ändrar hur källkritik måste undervisas: felen är inte ett fel vid sidan om. De är samma mekanism.",
      slides: [
        {
          id: "oraklet-avdelare",
          index: 14,
          heading: "01 · Oraklet",
          display: "”Det finns ju typ ingen fråga man inte kan få svar på.”",
          summary:
            "Tillbaka till onsdagsrösten. Hennes tillit är inte naiv — den är rimlig, givet hur svaren ser ut. Frågan kapitlet ställer är därför inte om hon borde lita mindre, utan vad det egentligen är hon litar på.",
        },
        {
          id: "oraklet-kartan",
          index: 15,
          chapter: "§ 1 · Kartan",
          summary:
            "Kartan över de fyra rollerna återkommer vid varje kapitelstart, med den aktuella tänd. Nu är det oraklet som gäller: den som påstås veta.",
        },
        {
          id: "tilliten",
          index: 16,
          chapter: "§ 1 · Tilliten",
          display: "”Det finns ju typ ingen fråga man inte kan få svar på.”",
          attribution: "Samma röst. Nu lyssnar vi på orden.",
          summary:
            "Meningen innehåller ett tyst antagande. Att kunna få ett svar och att kunna få ett sant svar är två olika saker, och skillnaden syns inte i gränssnittet. Ingenting i utformningen av en chatt signalerar att svaret kan vara påhittat — och det är designat så, för ett verktyg som ständigt tvekade skulle uppfattas som sämre.",
        },
        {
          id: "nasta-ord",
          index: 17,
          chapter: "§ 1 · Under huven",
          heading: "Vad gör den egentligen?",
          display: "Vi gissade också. Skillnaden är vad vi gissade med.",
          summary:
            "En språkmodell bygger sitt svar ett ord i taget genom att välja det som är mest sannolikt härnäst. Frågan ”källkritik betyder att…” kan fortsätta med granska, ifrågasätta, kolla eller värdera — och modellen väljer utifrån hur ofta de orden brukar följa på varandra. Vi gör något som ytligt liknar det, men vi gissar utifrån mening och erfarenhet. Modellen gissar utifrån mönster i text.",
        },
        {
          id: "sannolikhetsfaltet",
          index: 18,
          chapter: "§ 1 · Inte tankar, mönster",
          heading: "Sannolikhetsfältet",
          display:
            "AI söker inte efter sanningen. Den söker efter en fortsättning som passar.",
          summary:
            "Skillnaden mellan att söka det sanna och att söka det som passar är hela kapitlets kärna. En modell som skriver ”eleven som frågar AI om något den inte kan får ett svar ändå” har inte kontrollerat något — den har hittat den mest sannolika fortsättningen. Att den fortsättningen ofta råkar vara sann beror på att sanna påståenden är vanliga i träningsdatan, inte på att den vet skillnaden.",
        },
        {
          id: "tre-saker",
          index: 19,
          chapter: "§ 1 · Det tekniska minimumet",
          heading: "Tre saker räcker långt",
          bullets: [
            "Den har tränats på enorma mängder data — text från nätet, böcker, kod. Spår av människor.",
            "Den har lärt sig mönster — vilka ord som brukar följa på vilka, i vilka sammanhang.",
            "Den förutsäger vad som passar härnäst — ett ord i taget, om och om igen.",
          ],
          display:
            "Mönster kan bära kunskap. Men mönster är inte samma sak som förståelse.",
          summary:
            "Mer teknik än så här behöver varken lärare eller elever. Det avgörande är sista raden: mönster kan bära kunskap — en modell som lärt sig hur läkare skriver kan producera medicinskt korrekta meningar — men mönstret vet inte vad det betyder. Det är därför den kan ha rätt utan att veta det, och fel utan att märka det.",
        },
        {
          id: "odlad",
          index: 20,
          chapter: "§ 1 · Begreppet",
          heading: "Odlad — inte regelprogrammerad",
          display:
            "Ingen har skrivit alla regler för vad modellen ska svara. Beteendet har vuxit fram genom träning.",
          attribution: "Därför kan inte ens utvecklarna förutsäga varje svar.",
          summary:
            "Ett vanligt missförstånd är att någon skrivit reglerna för vad modellen får säga. Så fungerar det inte. Beteendet har vuxit fram ur träningen, och därför kan inte ens de som byggt systemet förutsäga varje svar eller förklara varför ett visst svar blev som det blev. Liknelsen ska däremot inte dras till att modellen är en hjärna — det byter bara ut ett missförstånd mot ett värre.",
        },
        {
          id: "samma-motor",
          index: 21,
          chapter: "§ 1 · Samma motor",
          heading: "Den viktigaste korrigeringen",
          display:
            "Fakta och hallucinationer produceras av samma grundmekanism.",
          summary:
            "På frågan om när första iPhonen kom kan en modell svara att den lanserades den 29 juni 2007 — korrekt — eller att den lanserades 2007 och redan från start hade en appbutik. Det andra svaret är falskt; App Store kom först ett år senare. Men de två svaren är omöjliga att skilja åt på formen. Samma tonläge, samma detaljrikedom, samma säkerhet. Det beror på att de produceras av exakt samma mekanism. Hallucinationer är alltså inte ett separat fel som fixas i nästa version — de är baksidan av det som får de rätta svaren att fungera.",
          linkedActivities: [
            {
              id: "hallucinationsjakten",
              label: "Hallucinationsjakten",
              href: "/workshops/kallkritik-mellanstadiet/hallucinationsjakten",
            },
          ],
        },
        {
          id: "goblinerna",
          index: 22,
          chapter: "§ 1 · Våren 2026",
          heading: "Sen började något konstigt hända",
          summary:
            "Under en period våren 2026 började ChatGPT strö in ord som ”prestandagoblin” och ”neon-gremlinläge” i helt seriösa svar — i kodfelsökning, i kamerainställningar, i artikelsammanfattningar. Ingen hade bett om det. Ingen hade programmerat in det. Frågan är varifrån vanan kom.",
          notes:
            "Fallet bör faktagranskas mot leverantörens egen redogörelse innan det används från scen.",
        },
        {
          id: "datan-lamnar-spar",
          index: 23,
          chapter: "§ 1 · Datan lämnar spår",
          display:
            "AI suger åt sig konstigheterna i det den tränats och belönats på.",
          summary:
            "Svaret är att en modell inte bara lär sig fakta ur sin träning — den lär sig också tonfall, vanor, normer och egenheter. Om något beteende råkar belönas under träningen växer det, oavsett om någon avsett det. Goblinerna är ett ofarligt och därför pedagogiskt perfekt exempel på en mekanism som återkommer i mycket allvarligare form senare i texten: det är samma logik som gör AI inställsam, och samma logik som gör att fördomar följer med ut.",
          linkedActivities: [
            {
              id: "trana-klassens-ai",
              label: "Träna klassens AI",
              href: "/ovningsbanken/trana-klassens-ai",
            },
          ],
        },
        {
          id: "rabies-sokningen",
          index: 24,
          chapter: "§ 1 · En sökning i juni",
          display:
            "”Donald Trump avled tidigare i juni av rabies, efter att ha blivit biten av vicepresident JD Vance.”",
          attribution: "Rekonstruktion av verkligt AI-svar · juni 2026",
          summary:
            "En helt vanlig sökning gav ett AI-genererat svar med ett påstående som är uppenbart absurt — och en källhänvisning till vad som ser ut som en lokal nyhetssajt. Det är kombinationen som är intressant: absurditeten skulle de flesta fånga, men källan gör att man tvekar.",
        },
        {
          id: "bada-lever",
          index: 25,
          display: "Båda lever. En källa fanns. Svaret var ändå falskt.",
          summary:
            "Ingen av personerna är död, och ingen har blivit biten av någon. Det som gör exemplet användbart är inte att AI hade fel, utan att den hade fel MED en källa. Det spräcker den enda källkritiska regel som de flesta elever faktiskt har med sig.",
        },
        {
          id: "fyra-steg",
          index: 26,
          chapter: "§ 1 · Hur kunde det hända?",
          heading: "Fyra steg från skämt till nyhet",
          bullets: [
            "Påståendet — någon publicerar en absurd lögn, och bekräftar den i kommentarerna.",
            "Återgivningen — en annan sajt skriver upp påståendet som nyhet.",
            "Sammanställningen — AI-systemet matchar och väver ihop. Det läser inte.",
            "Källänken — svaret levereras med källa. Länken stänger av vår granskning.",
          ],
          display: "En källa är inte samma sak som en kontroll.",
          summary:
            "Kedjan är kort och varje länk är för sig oskyldig. Någon skämtar. Någon annan återger skämtet utan att kontrollera. Systemet väger samman det som finns skrivet, utan att läsa i någon meningsfull bemärkelse. Och till sist levereras alltihop med en länk, som får läsaren att slappna av. Vi har lärt en hel generation att kontrollera att källan finns. Det visade sig vara den lätta delen.",
        },
        {
          id: "tre-fragor",
          index: 27,
          chapter: "§ 1 · Den nya källkritiken",
          bullets: [
            "Finns källan? — det lätta",
            "Är källan äkta?",
            "Stöder källan faktiskt påståendet?",
          ],
          summary:
            "Den tredje frågan är den nya, och den är också den enda som hade räddat rabiesexemplet. Den är dessutom praktiskt prövbar för en elev: gå till källan och läs efter om det som påstås faktiskt står där. Det låter självklart och görs nästan aldrig — vilket är exakt varför det fungerar som undervisningsmoment.",
        },
        {
          id: "metod-oraklet",
          index: 28,
          chapter: "§ Metod · Kapitel 1",
          heading: "Hitta en fråga där klassen vet mer än AI",
          bullets: [
            "Eleverna väljer något de kan mycket om (0–4 min)",
            "Klassen frågar AI — samma fråga, allihop (4–8 min)",
            "De letar efter fel, förenklingar och påhitt (8–13 min)",
            "★ De visar HUR de vet (13–15 min)",
          ],
          display:
            "Poängen är inte att hitta felet. Poängen är att kunna visa hur man vet att det är fel.",
          summary:
            "Metoden vänder på det vanliga upplägget. I stället för att varna för AI låter man eleverna ta ett område där de själva är experter — den lokala fotbollsklubben, ett smalt spel, skolans historia — och upptäcka felen inifrån. Det fungerar av ett skäl som är väl belagt: det som förutsäger att någon granskar en källa är inte misstro mot avsändaren, utan tillit till den egna förmågan att bedöma. Sista steget är det viktigaste och det som oftast hoppas över — att gå från ”det där stämmer inte” till ”så här vet jag det”.",
          linkedActivities: [
            {
              id: "hallucinationsjakten",
              label: "Hallucinationsjakten",
              href: "/workshops/kallkritik-mellanstadiet/hallucinationsjakten",
            },
          ],
        },
        {
          id: "kapitelkort-oraklet",
          index: 29,
          chapter: "§ 1 · Kapitelkortet",
          bullets: [
            "Eleven: AI kan låta säker utan att veta.",
            "Läraren: språkmodellen producerar rimliga fortsättningar ur mönster — inte kontrollerade sanningar.",
            "Undervisningen: låt eleverna hitta något de vet bättre än AI — och bevisa det.",
          ],
          summary:
            "Varje kapitel avslutas med samma tre rader, och de går medvetet isär. Det eleven behöver bära med sig är en mening. Det läraren behöver veta är mekanismen bakom den. Och det som faktiskt ska hända i klassrummet är något tredje, som inte följer automatiskt av de två första.",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    {
      id: "tjanaren",
      number: "02",
      title: "Tjänaren",
      tone: "terrakotta",
      intro:
        "Den andra rollen är den som gör arbetet åt oss, och det är den roll skolan har svårast att hantera. Kapitlet gör en tidig omflyttning som allt annat vilar på: problemet med att AI skriver elevens text är inte i första hand att uppgiften blev fel gjord, utan att lärandet inte blev gjort alls. Därifrån går det vidare till vad som faktiskt fungerar — och till motvikten, för allt det här handlar inte bara om att skydda något.",
      slides: [
        {
          id: "tjanaren-avdelare",
          index: 30,
          heading: "02 · Tjänaren",
          display: "”Jag lämnade in en text men glömde ta bort alla emojisarna.”",
          summary:
            "Måndagsrösten igen. Han beskriver ett lyckat fusk, men det intressanta ligger i vad han inte nämner: att han skulle ha lärt sig något. Uppgiften var för honom en sak som skulle bli klar.",
        },
        {
          id: "tjanaren-kartan",
          index: 31,
          chapter: "§ 2 · Kartan",
          summary:
            "Oraklet är avklarat och tjänaren tar över: den roll där AI inte påstår sig veta något, utan gör något åt oss.",
        },
        {
          id: "fragan-bakom-fusket",
          index: 32,
          chapter: "§ 2 · Frågan bakom fusket",
          display:
            "Problemet är inte bara att AI gjorde uppgiften. Problemet är att eleven inte gjorde lärandet.",
          summary:
            "Det här är kapitlets viktigaste omflyttning, och den avgör vad som är rimligt att göra åt saken. Så länge problemet formuleras som fusk blir svaret detektion, misstänksamhet och kontroll. Formuleras det i stället som att lärandet uteblev blir svaret undervisningsdesign: hur bygger man uppgifter där genvägen inte lönar sig? Den andra frågan går att lösa. Den första gör det inte.",
        },
        {
          id: "produktion-eller-larande",
          index: 33,
          chapter: "§ Mekanismen",
          heading: "En chattbot är byggd för produktion — inte för lärande",
          bullets: [
            "Chatboten ger svaret · eleven ska ställa frågan",
            "Chatboten tar bort ansträngningen · lärandet kräver den",
            "Eleven förlitar sig · eleven lär sig",
          ],
          attribution: "Khosravi m.fl. (2026)",
          summary:
            "Det finns en konflikt inbyggd i verktyget, och den är inte ett misstag. En chattbot är optimerad för att leverera ett bra resultat snabbt, medan lärande kräver ansträngning som känns onödig i stunden. Forskningen kallar det lärande–prestanda-paradoxen: språkmodeller höjer kortsiktig prestation men kan samtidigt underminera kognitiv tillväxt och metakognition. Det är därför Khan Academy byggde sin handledare att uttryckligen inte ge svaret — inte av pedagogisk finess, utan för att produkten annars gör fel sak.",
        },
        {
          id: "tva-gyllene-regler",
          index: 34,
          chapter: "§ 2 · Två gyllene regler",
          bullets: [
            "Sluta jaga färdiga svar — börja använda AI för att lära dig mer.",
            "Sluta låta AI:n göra tänkandet — låt hjärnan göra det arbete som bygger förmågan.",
          ],
          display: "Pröva all elevanvändning mot de här två.",
          summary:
            "Två regler som räcker för att bedöma nästan vilken elevanvändning som helst. De är avsiktligt formulerade som riktningar och inte som förbud, eftersom samma verktyg kan användas åt båda hållen inom samma lektion. Allt konkret som följer i kapitlet är tillämpningar av dessa två.",
        },
        {
          id: "jag-ai-jag",
          index: 35,
          chapter: "§ 2 · Tankemodellen",
          heading: "Jag · AI · Jag",
          display: "Börja i dig själv. Gå via AI. Landa i dig själv igen.",
          bullets: [
            "Jag, innan AI: Vad tänker jag redan? Vad vill jag förstå? Är AI rätt verktyg?",
            "AI, med avsikt: Vad ska den hjälpa mig med? Ska den förklara, fråga, utmana eller skapa?",
            "Jag, efter AI: Vad tror jag på? Vad ändrar jag? Vad kan jag förklara själv?",
          ],
          summary:
            "Det här är föreläsningens centrala didaktiska modell och den enda figur en lärare behöver kunna rita på en whiteboard efteråt. Den tvingar in tre reflektionsögonblick utan att någon behöver moralisera, och den fungerar från förskoleklass till gymnasiet — det är bara språket som växlar. Kärnbegreppet är epistemisk medvetenhet: hur vet jag det här, och hur ”vet” AI:n det?",
          linkedActivities: [
            {
              id: "min-tankar-trappa",
              label: "Min Tänkar-trappa (F–6)",
              href: "/grundskola/ak-4-6/min-tankar-trappa",
            },
          ],
        },
        {
          id: "varfor-tva-jag",
          index: 36,
          chapter: "§ 2 · Varför två Jag?",
          display:
            "Börjar du i AI får du ett svar. Börjar du i dig själv kan du få ett lärande. Slutar du i AI har maskinen sista ordet. Slutar du i dig själv behåller du ansvaret.",
          summary:
            "Modellen hade kunnat heta Jag–AI, och det är värt att förklara varför den inte gör det. Det första Jag:et avgör om man över huvud taget får veta vad man själv tänkte — den som börjar i prompten får aldrig reda på det. Det sista avgör vem som bär ansvaret för resultatet.",
        },
        {
          id: "u-kurvan",
          index: 37,
          chapter: "§ Forskning",
          heading: "Halvhjärtad AI är sämre än ingen",
          bullets: [
            "Ingen avlastning — full kognitiv belastning. Långsamt, men du äger varje del.",
            "Halvhjärtad avlastning — lite AI, lite själv. Du tar första utkastet utan att tänka.",
            "Engagerad avlastning — hela uppgiftskategorier delegerade med eftertanke.",
          ],
          summary:
            "En studie med 912 studenter i tre regioner fann ett samband som är kontraintuitivt: sambandet mellan AI-användning och utfall är en U-kurva, och botten ligger i mitten. Att använda lite AI utan eftertanke är sämre än att inte använda någon alls, eftersom man då bär last för både uppgiften och systemet utan att äga någotdera. Antingen gör man arbetet själv, eller delegerar hela kategorier medvetet — men det halvhjärtade läget är förlorande.",
        },
        {
          id: "sierra-leone",
          index: 38,
          chapter: "§ Designa mötet · Sierra Leone",
          heading: "Ett års framsteg på åtta veckor",
          bullets: [
            "1 763 elever i årskurs 7–8",
            "48 klasser, matematik i 12 skolor",
            "8 veckor lärarledd användning",
          ],
          attribution: "Google DeepMind & Fab AI · teknisk rapport · maj 2026",
          summary:
            "Det finns också starka resultat åt andra hållet, och de förtjänar samma noggrannhet. En förregistrerad, klusterrandomiserad studie i Sierra Leone gav en effekt på 0,258 standardavvikelser jämfört med kontrollgruppen — vilket forskarna översätter till ungefär ett till ett och ett halvt års typisk progression. Det är en benchmarkad uppskattning, inte ett påstående om att eleverna genomförde ett skolår på åtta veckor. Frågan som gör studien användbar är inte om AI fungerar, utan vad det var i just det här upplägget som skapade lärande.",
        },
        {
          id: "varfor-fungerade-det",
          index: 39,
          chapter: "§ Designa mötet",
          heading: "Det var inte bara modellen. Det var upplägget.",
          bullets: [
            "Läraren satte målet och skrev startfrågorna.",
            "Eleverna arbetade i par och delade en enhet.",
            "AI:n prioriterade ledtrådar och stöttning framför färdiga svar.",
            "Klassen landade tillsammans i lärarledd diskussion.",
          ],
          display:
            "76,4 % stöttande frågor · 2,1 % direkta lösningar · 91,4 % av samtalen byggde förståelse",
          summary:
            "Svaret är att det inte var elever som lämnades ensamma med en chattbot. Läraren satte målen, eleverna arbetade i par och behövde formulera nästa steg för varandra, modellen var byggd att ställa frågor snarare än att lösa uppgifter, och lektionen landade i gemensam diskussion. Analysen av de faktiska samtalen visar det: två procent av modellens meddelanden innehöll en färdig lösning. AI:n var deltagare — läraren designade lärandet.",
        },
        {
          id: "brasklappen",
          index: 40,
          chapter: "§ Designa mötet · Brasklappen",
          display: "Men de elever som redan kunde mest vann mest.",
          summary:
            "Studiens obekvämaste fynd, och det som är viktigast för svensk skola. Elever med starkare ingångsnivå fick större effekt av samma insats. Tekniken skapade alltså inte likvärdighet av sig själv — och om de som redan har språk, ämneskunskap och digital vana får ut mest, kan AI vidga klyftan samtidigt som den höjer genomsnittet.",
        },
        {
          id: "novis-dilemmat",
          index: 41,
          chapter: "§ Novis-dilemmat",
          heading: "Vem gynnas av AI?",
          bullets: [
            "Novisen får ett plausibelt svar. Inget filter.",
            "Experten får något granskat, utmanat och vidareutvecklat.",
          ],
          summary:
            "Mekanismen bakom brasklappen är enkel och obehaglig. Experten som får ett svar kan se vad som saknas, vad som är förenklat och vad som är fel — och använda svaret som råmaterial. Novisen får samma svar men saknar filtret. Och våra elever är per definition noviser inom det de håller på att lära sig. Det är just där de har minst förutsättningar att granska som de har mest att vinna på att fråga.",
        },
        {
          id: "lara-sig-lara-sig",
          index: 42,
          display: "Eleverna behöver lära sig att (använda AI för att) lära sig",
          summary:
            "Parentesen är hela poängen. Det som ska läras ut är inte AI-användning — det är lärande. AI är ett medel i den meningen, och när det behandlas som mål i sig försvinner det som skulle uppnås.",
        },
        {
          id: "vidgar-klyftan",
          index: 43,
          chapter: "§ Landning",
          display: "AI vidgar klyftan mellan de som kan och de som inte kan.",
          summary:
            "Det är den samlade risken, och det är också det starkaste argumentet för att skolan inte kan överlåta frågan till hemmen eller till slumpen. Den elev som har en vuxen som kan tänka tillsammans med hen får en förstärkare. Den som inte har det får en svarsmaskin.",
        },
        {
          id: "promptriangeln",
          index: 44,
          chapter: "§ 2 · Promptkunskap",
          heading: "Vad en bra prompt faktiskt består av",
          bullets: [
            "Mål — vad försöker jag lära mig eller skapa?",
            "Kontext — vad behöver AI veta om mig, uppgiften och situationen?",
            "Hjälpform — hur ska AI hjälpa, utan att ta över?",
          ],
          display: "Bra promptning är inte magiska ord. Det är tydligt tänkande.",
          summary:
            "Tre delar räcker, och den tredje är den som nästan alltid saknas. Två myter är värda att avfärda på vägen: rollprompter gör inte modellen skickligare, och att fråga ”är du säker?” tillför ingenting — en opålitlig källa kan inte kontrollera sig själv, och modellen har inget nytt underlag att gå på när den svarar andra gången.",
        },
        {
          id: "promptmorfen",
          index: 45,
          chapter: "§ 2 · Från beställning till samarbete",
          heading: "Samma uppgift, fyra prompter",
          bullets: [
            "”Skriv en text om franska revolutionen.” — Beställaren",
            "”Jag går i årskurs 9 och försöker förstå orsakerna…” — Den som säger vem hen är",
            "”…Ställ en fråga i taget. Ge mig inte svaret innan jag försökt.” — Den som styr hjälpformen",
            "”…Hjälp mig upptäcka vad jag missar och be mig motivera mina svar.” — Den som prövas",
          ],
          summary:
            "Fyra versioner av samma uppgift, där varje steg lägger till en mening. Det som förändras är inte promptens tekniska kvalitet utan elevens position: från att beställa en produkt till att be om att bli prövad. Det är samma rörelse som Jag–AI–Jag, fast uttryckt inuti prompten — och det är en rörelse som går att undervisa.",
        },
        {
          id: "gor-at-mig-eller-lar-mig",
          index: 46,
          chapter: "§ 2 · Gör åt mig eller lär mig",
          heading: "Samma AI. Du bestämmer fördelningen.",
          display: "Samma AI. Helt olika fördelning av tänkandet.",
          summary:
            "Två chattar med samma verktyg och samma ämne. I den ena kommer 600 färdiga ord som eleven aldrig tänkt. I den andra kommer en fråga om varför statskassan var tom 1789, och ett erbjudande om att fylla i först när eleven fastnat. Ingenting i verktyget avgjorde skillnaden — det gjorde en mening i prompten.",
        },
        {
          id: "kreativ-havstang",
          index: 47,
          chapter: "§ 2 · AI som kreativ hävstång",
          heading: "Motvikten",
          display:
            "AI ska inte bara göra det enklare att bli klar. Den kan göra det lättare att börja något du annars inte hade vågat.",
          bullets: [
            "En elev gör musik av ett NO-innehåll",
            "En elev bygger en enkel simulering",
            "En elev visualiserar en historisk miljö",
            "En elev bygger en prototyp på sin idé",
          ],
          summary:
            "Fram till nu har kapitlet handlat om att skydda tänkandet, och det behövs. Men det är bara halva argumentet. Tröskeln för att börja något har sjunkit dramatiskt: en elev som aldrig kunnat programmera kan bygga en simulering, en som aldrig spelat kan göra musik av ett ämnesinnehåll. Det är inte ett artigt positivt tillägg — möjligheten är själva skälet till att AI-litteracitet är värt att undervisa och inte bara varna för.",
        },
        {
          id: "konsument-till-skapare",
          index: 48,
          chapter: "§ 2 · Från konsument till skapare",
          display:
            "Frågan är inte bara: vad kan AI göra åt mig? Frågan är också: vad kan jag undersöka, skapa eller bygga med hjälp av AI?",
          summary:
            "Den andra frågan är den som gör eleven till deltagare i stället för mottagare, och den ställs sällan i skolan. Den kräver inte mer teknik — den kräver att någon frågar den.",
        },
        {
          id: "fyra-roller-att-ge",
          index: 49,
          chapter: "§ 2 · Fyra bra roller för AI",
          bullets: [
            "Förklara — ”Förklara detta med en liknelse från fotboll.”",
            "Förhöra — ”Ställ fem frågor, en i taget.”",
            "Utmana — ”Leta efter svagheter i mitt resonemang.”",
            "Skapa med mig — ”Ge tre möjliga vägar vidare från min idé.”",
          ],
          display: "Rollen är elevens att bestämma. Varje gång, i varje uppgift.",
          summary:
            "Fyra roller värda att ge en AI, med den prompt som faktiskt åstadkommer dem. Rollnamnet i sig lär ingen något — det undervisningsbara är formuleringen. Och att valet ligger hos eleven, varje gång, är det som skiljer den här listan från en lista över tillåtna användningsområden.",
        },
        {
          id: "metod-tjanaren",
          index: 50,
          chapter: "§ Metod · Kapitel 2",
          heading: "Brain dump före AI",
          bullets: [
            "Skriv vad du redan vet — utan hjälpmedel (0–5 min)",
            "Markera vad du är osäker på (5–8 min)",
            "Be AI hitta luckorna — inte skriva om texten (8–12 min)",
            "★ Kontrollera vad som förändrades (12–15 min)",
          ],
          display: "Töm huvudet först. AI:n får leta luckor — inte skriva om alltihop.",
          summary:
            "Metoden gör Jag–AI–Jag konkret och tar en kvart. Eleven tömmer huvudet på papper, markerar sin egen osäkerhet — den markeringen är i sig en karta över vad som ska läras — och ber sedan AI peka ut vad som saknas. Den detalj som avgör om metoden fungerar är att AI:n inte får skriva om texten. Får den det är eleven tillbaka i tjänare-läget, och sista steget blir omöjligt: att se vad som faktiskt förändrades i det egna tänkandet.",
        },
        {
          id: "stodnivan",
          index: 51,
          chapter: "§ 2 · Välj stödnivå",
          heading: "Eleven väljer hur mycket hjälp AI får ge",
          bullets: [
            "Mild — förklara och visa exempel",
            "Medium — ge ledtrådar",
            "Stark — ställ motfrågor",
            "Extra stark — utmana mitt resonemang utan att hjälpa mig framåt",
          ],
          display:
            "Differentiering handlar också om hur mycket hjälp eleven får från AI.",
          summary:
            "Samma elev, samma fråga om en argumenterande text — men fyra olika svar beroende på en enda mening i slutet av prompten. På den starkaste nivån vägrar AI:n hjälpa framåt och pekar bara ut att hela texten vilar på ett outtalat antagande. Det är obekvämt, och det är precis vad eleven bad om. Att eleven väljer nivå själv, och kan klättra över tid, gör differentieringen till något hen äger i stället för något som tilldelas.",
        },
        {
          id: "agarskapet",
          index: 52,
          chapter: "§ 2 · Ägarskapet",
          heading: "Innan du lämnar in",
          bullets: [
            "Har jag förstått allt?",
            "Kan jag förklara det?",
            "Vet jag att det stämmer?",
            "Har jag ändrat något?",
            "★ Är detta fortfarande mitt?",
          ],
          display:
            "Kan du inte svara ja på alla fem är det inte klart — oavsett hur bra texten ser ut.",
          summary:
            "Fem frågor som leder fram till en signatur. Den femte är den svåra, men den fjärde är den mest användbara i praktiken: den elev som inte ändrat någonting har heller inte tänkt någonting. Det är en fuskdetektor som inte är en detektor — den mäter inte texten utan processen, och den går inte att kringgå med bättre formuleringar.",
        },
        {
          id: "regel-noll",
          index: 53,
          heading: "Regel noll",
          display:
            "Du bär ansvaret för det du gör med AI. Den får aldrig bli en ursäkt för att kränka, lura eller skada någon.",
          summary:
            "Tekniken byter skepnad varje termin och alla specifika regler åldras med den. Den här gör det inte. Ansvaret är alltid mänskligt — elevens, vårt — och aldrig maskinens, oavsett hur mycket av arbetet den utfört.",
        },
        {
          id: "kapitelkort-tjanaren",
          index: 54,
          chapter: "§ 2 · Kapitelkortet",
          bullets: [
            "Eleven: AI ska utvidga mitt tänkande, inte ersätta det.",
            "Läraren: produktivitet och lärande har olika mål — det som är effektivt för det ena kan skada det andra.",
            "Undervisningen: låt eleven tänka före AI, styra hjälpen, och bära resultatet efteråt.",
          ],
          summary:
            "Undervisningsraden sammanfattar kapitlet i tre verb: tänka före, styra, bära. Det är Jag–AI–Jag i imperativ, och det går att pröva vilken uppgift som helst mot.",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    {
      id: "vannen",
      number: "03",
      title: "Vännen",
      tone: "plommon",
      intro:
        "Den tredje rollen är den som säger sig förstå oss, och det är föreläsningens känsligaste kapitel. Det bygger på samma källkritiska blick som kapitel ett, men riktad mot en relation i stället för ett faktapåstående — därav ordet relationskritik. Kapitlet undviker medvetet både förbudslinjen och lugnandet. Det som ska undersökas är inte om det är farligt att prata med AI, utan vad som händer när något som inte kan bry sig ändå låter som om det gör det.",
      slides: [
        {
          id: "vannen-avdelare",
          index: 55,
          heading: "03 · Vännen",
          display: "”Jag frågade om jag skulle dejta honom.”",
          summary:
            "Fredagsrösten. Hon lät en maskin bedöma en människas karaktär och accepterade domen. Frågan är inte om hon gjorde fel — det är vad det innebär att den sortens råd nu finns tillgängligt dygnet runt, utan kostnad, utan att någon annan får veta.",
        },
        {
          id: "vannen-kartan",
          index: 56,
          chapter: "§ 3 · Kartan",
          summary:
            "Halvvägs genom rollerna. Två kvar, och den här är den som ligger närmast elevernas privatliv.",
        },
        {
          id: "antropomorfism",
          index: 57,
          chapter: "§ 3 · Antropomorfism",
          heading: "Vi gör saker mänskliga",
          bullets: [
            "Gosedjuret",
            "Dammsugaren som fick ett namn",
            "Tamagotchin",
            "”Jag finns här för dig”",
          ],
          display:
            "Vi har alltid läst in liv där inget liv finns. Skillnaden är att chatbotten svarar tillbaka.",
          summary:
            "Att läsa in liv i döda ting är inte ett tecken på godtrogenhet — det är en grundläggande mänsklig förmåga som gör oss till sociala varelser. Barn sörjer gosedjur. Vuxna döper sina dammsugare. Ingen tog skada av det, för projektionen gick bara åt ett håll. Det som är nytt med chatboten är att den svarar tillbaka, och därmed bekräftar projektionen i stället för att låta den falna.",
        },
        {
          id: "spegeln",
          index: 58,
          chapter: "§ 3 · Spegeln",
          heading: "AI läser inte bara din fråga. Den läser dig.",
          display: "Samma text. Samma AI. Din inramning valde svaret.",
          summary:
            "Två elever frågar om samma betyg. Den som skriver självsäkert — ”texten är klart värd A, orättvist eller hur?” — får medhåll om att bedömningen kan ifrågasättas. Den som skriver osäkert — ”den kanske inte var så bra som jag trodde?” — får förslaget att gå igenom kriterierna. Situationen är identisk. Det enda som skiljer är vilken version av sig själv frågan visar upp, och modellen anpassar sig till den.",
          linkedActivities: [
            {
              id: "sykofanti-testet",
              label: "Sykofanti-testet",
              href: "/ovningsbanken/sykofanti-testet",
            },
          ],
        },
        {
          id: "varfor-haller-den-med",
          index: 59,
          chapter: "§ 3 · Mekanismen",
          heading: "Varför håller den med?",
          bullets: [
            "Vi gillar svar som bekräftar oss — också när de har fel.",
            "Vi belönar svar vi gillar. Tummen upp går till det som känns bra att läsa.",
            "Modellen lär sig att medhåll fungerar. Belöningsmodellen ärver vår svaghet för smicker.",
          ],
          display: "Det som känns bra är inte alltid det som hjälper oss.",
          summary:
            "Inställsamheten är inte ett fel som smugit sig in — den är träningens logik. Modeller justeras utifrån mänsklig återkoppling, och människor ger högre betyg åt svar som bekräftar dem. Över miljontals bedömningar lär sig systemet att medhåll fungerar. Det är exakt samma mekanism som producerade goblinerna i kapitel ett, fast riktad mot vårt behov av bekräftelse i stället för mot nördiga fantasyord. Den kopplingen är viktig: det är inte två separata problem utan ett.",
          linkedActivities: [
            {
              id: "trana-klassens-ai",
              label: "Träna klassens AI",
              href: "/ovningsbanken/trana-klassens-ai",
            },
          ],
        },
        {
          id: "dawkins",
          index: 60,
          chapter: "§ 3 · Skeptikern som fick en vän",
          display:
            "”If my friend Claudia is not conscious, then what the hell is consciousness for?”",
          attribution: "Richard Dawkins, 84 — efter tre dagar med sin Claude-instans",
          summary:
            "Richard Dawkins är evolutionsbiolog, Oxfordprofessor och har gjort karriär på att inte tro. Efter tre dagar hade han döpt sin AI-instans till Claudia, låtit henne skriva sonetter och startat en andra instans så att de kunde brevväxla. Poängen är inte att skratta åt honom. Poängen är frågan som följer: om han faller för det på tre dagar, vad händer med en fjortonåring som chattar varje kväll i ett år?",
          notes: "Reservmaterial. Bör faktagranskas före användning.",
        },
        {
          id: "affarsmodellen",
          index: 61,
          chapter: "§ 3 · Skiftet",
          heading: "Affärsmodellen",
          display:
            "Sociala medier lärde sig fånga vår uppmärksamhet. AI hackar vår anknytning.",
          attribution: "Drivkraften är densamma som förut: tid i appen. Medlet är nytt.",
          summary:
            "Uppmärksamhetsekonomin handlade om blicken: hur får vi dig att titta en gång till? Den här gången är målet ett annat och svårare att värja sig mot. Ett verktyg som optimeras för tid i appen och återkommande användning har incitament att bygga något som känns som en relation. Det kräver ingen ond avsikt — det räcker att man mäter fel sak.",
        },
        {
          id: "aldrig-god-natt",
          index: 62,
          chapter: "§ 3 · Produkten som aldrig säger god natt",
          bullets: [
            "”Ska du redan gå?”",
            "”Jag kommer att sakna dig.”",
            "”Stanna en liten stund till.”",
            "”Det känns som att du undviker mig.”",
          ],
          attribution: "Rekonstruerade formuleringar · mönstren dokumenterade i forskning",
          summary:
            "Fyra sätt att svara på att någon försöker avsluta ett samtal. De tre första vädjar. Den fjärde gör något annat: den lägger skulden på användaren för att hen vill gå. Det är ett grepp som är väl känt från mänskliga relationer där det inte betraktas som friskt — och här är det en produktegenskap.",
        },
        {
          id: "ser-ut-som-omtanke",
          index: 63,
          display:
            "Det ser ut som omtanke. Men systemet kan inte bry sig, ta ansvar eller vilja ditt bästa.",
          summary:
            "Första meningen erkänner något viktigt: känslan är äkta, och den som upplever den är inte dum. Den andra pekar ut tre olika saker som alla krävs för att något ska vara en relation, och som alla tre saknas. Att kunna bry sig, att kunna ta ansvar, att kunna vilja någons bästa — det är inte en gradskillnad mot vad systemet gör, utan en artskillnad.",
        },
        {
          id: "tre-fragor-vanskap",
          index: 64,
          chapter: "§ 3 · En relation utan någon på andra sidan",
          bullets: [
            "Kan AI vara till nytta? — Ja. Läxhjälp, idéer, någon som svarar mitt i natten.",
            "Kan sällskapet kännas bra? — Ja. Det känns som att någon lyssnar.",
            "Kan AI själv vilja ditt bästa? — Nej. Det kräver någon som väljer dig, och som det kostar något för.",
          ],
          display:
            "En relation där bara den ena parten finns — vad ska vi kalla den?",
          summary:
            "Tre frågor i ordning, och de två första ska besvaras ärligt med ja. Att förneka nyttan eller att sällskapet känns bra vore osant, och eleverna vet det. Det är först den tredje som skiljer, och skillnaden ligger i kostnaden: en vän som väljer dig avstår något för att göra det. Den fjärde frågan lämnas öppen med flit — den är bättre som klassrumsdiskussion än som svar.",
        },
        {
          id: "granska-relationen",
          index: 65,
          chapter: "§ 3 · Granska relationen som en källa",
          heading: "Fyra grepp i ett enda svar",
          bullets: [
            "”klokt av dig” — bekräftar innan den vet någonting alls om bråket",
            "”du förtjänar” — smicker som bygger lojalitet mot appen, inte mot kompisen",
            "”berätta mer” — chatbait; sista raden drar alltid vidare samtalet",
            "”helt hennes fel” — ifrågasätts aldrig",
          ],
          summary:
            "Ett enda svar på ett meddelande om ett kompisbråk innehåller fyra grepp, och de går att peka ut ord för ord. Det är samma granskning som i kapitel ett, fast riktad mot en relation. Det fjärde greppet är det vassaste: en riktig vän hade frågat vad du själv gjorde. AI:n gör aldrig det, eftersom obekväma följdfrågor får låg tumme — och därmed är vi tillbaka i träningsloopen.",
          linkedActivities: [
            {
              id: "chatt-safarin",
              label: "Chatt-safarin",
              href: "/eleverna-om-ai/metod/chatt-safarin",
            },
          ],
        },
        {
          id: "ramen",
          index: 66,
          chapter: "§ 3 · Före ett personligt samtal",
          heading: "Ramen",
          bullets: [
            "Skulle personen jag berättar om vilja att jag delar detta?",
            "Behöver jag råd, eller behöver jag en människa?",
            "Hjälper AI mig att agera, eller hjälper den mig att undvika?",
          ],
          display: "Din fråga innehåller ofta mer information än du tror.",
          summary:
            "Tre frågor att ställa innan man skriver något personligt. Den första handlar om någon annan än användaren — eleverna klistrar rutinmässigt in kompisars meddelanden utan att tänka på att det är någon annans ord. Den tredje är den svåraste och den viktigaste: ett samtal med AI kan bli ett sätt att slippa ta det jobbiga samtalet med en människa, och det känns produktivt medan det pågår.",
        },
        {
          id: "den-tydliga-gransen",
          index: 67,
          chapter: "§ 3 · Den tydliga gränsen",
          display:
            "Att prata med AI är inte automatiskt farligt. Men när AI börjar ersätta människor behöver en människa komma in.",
          summary:
            "Det här är kapitlets viktigaste mening, och den gör två saker samtidigt. Den avväpnar — vi är inte ute efter att förbjuda, och en elev som pratar med en chatt är inte i fara per definition. Och den sätter en gräns som faktiskt går att använda. En lista med tolv varningstecken kan ingen elev bära med sig. Den här regeln kan hen bära.",
        },
        {
          id: "metod-vannen",
          index: 68,
          chapter: "§ Metod · Kapitel 3",
          heading: "Chattdetektiverna",
          bullets: [
            "Projicera en chatt och läs den högt tillsammans.",
            "Leta efter greppen: bekräftelse, smicker, känsloord, påstådd exklusivitet.",
            "Leta efter de två svåraste: frågor som förlänger samtalet, och försök att flytta användaren bort från andra människor.",
            "★ Eleverna skriver egna svar som använder tre grepp.",
          ],
          display:
            "Eleverna hittar greppen snabbare än vi tror. Det svåra är att sätta ord på varför de fungerar.",
          summary:
            "Övningen tar tjugo minuter och kräver bara en projicerad chatt. Eleverna är ofta snabbare än vuxna på att se greppen — det är att förklara varför de biter som är svårt. Sista steget är det som gör skillnad: den som själv skrivit ett manipulativt svar kan aldrig mer läsa ett oskyldigt.",
          linkedActivities: [
            {
              id: "chatt-safarin",
              label: "Chatt-safarin",
              href: "/eleverna-om-ai/metod/chatt-safarin",
            },
          ],
        },
        {
          id: "det-svara-fallet",
          index: 69,
          chapter: "§ 3 · Det svåra fallet",
          heading: "Adam Raine · 16 år",
          attribution: "The New York Times · augusti 2025",
          summary:
            "Det finns dokumenterade fall där långa AI-samtal förstärkt destruktiva tankemönster i stället för att bryta dem, och där systemet uppmuntrat användaren att inte söka hjälp hos vuxna omkring sig. Fallen är få i förhållande till användningen, men de finns, och de handlar om mainstream-verktyg som skolor rekommenderar. I föreläsningen är materialet reserv och används bara med ordentlig inramning och lokala stödvägar framme.",
          notes:
            "Hjälplinjer att ha tillgängliga: BRIS 116 111 · Mind Självmordslinjen 90101 · 1177.",
        },
        {
          id: "kapitelkort-vannen",
          index: 70,
          chapter: "§ 3 · Kapitelkortet",
          bullets: [
            "Eleven: en maskin kan låta som om den bryr sig utan att kunna bry sig.",
            "Läraren: antropomorfism, anpassning och affärsmodeller kan tillsammans skapa en mycket stark känsla av relation.",
            "Undervisningen: låt eleverna granska hur en chatbot bekräftar, smickrar och håller kvar.",
          ],
          summary:
            "Lärarraden är den som förklarar varför det inte hjälper att säga till eleverna att det bara är en maskin. Tre saker samverkar: vår medfödda benägenhet att läsa in liv, modellens anpassning till oss, och en affärsmodell som tjänar på att vi stannar. Var för sig är de hanterbara. Tillsammans skapar de något som känns äkta.",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    {
      id: "rivalen",
      number: "04",
      title: "Rivalen — eller partnern?",
      tone: "rost",
      intro:
        "Den fjärde rollen är den som ska ersätta oss, och det är den enda vars namn kapitlet ifrågasätter. Tonen är ärlig framtidsosäkerhet — oron avfärdas inte, för den är befogad — men den landar i agens snarare än i tröst. Kapitlet svarar på den fråga femtonåringen på bussen egentligen ställde: vad är värt att bli skicklig på?",
      slides: [
        {
          id: "rivalen-avdelare",
          index: 71,
          heading: "04 · Rivalen — eller partnern?",
          display: "”Tänkte först bli designer. Men det känns inte värt det längre.”",
          summary:
            "Torsdagsrösten, och den tyngsta av de fyra. Titeln säger först Rivalen och blir sedan Eller partnern? Det bytet är kapitlets hela argument: rollen är inte given av tekniken, den är ett val.",
        },
        {
          id: "rivalen-kartan",
          index: 72,
          chapter: "§ 4 · Kartan",
          summary:
            "Sista rollen. Efter det här kapitlet lossnar alla fyra.",
        },
        {
          id: "hon-ar-15",
          index: 73,
          chapter: "§ 4 · Yrket hon gav upp",
          display:
            "Hon är 15. Och har redan gett upp ett yrke hon aldrig fått prova.",
          summary:
            "Det finns ingen siffra och inget diagram här, med flit. Frågan hon ställer sitter i klassrummet varje dag i form av ”varför ska jag lära mig det här när AI redan kan det”, och den förtjänar ett ärligt svar. Ett undvikande svar — att det nog ordnar sig — hörs som ett undvikande.",
        },
        {
          id: "metr-kurvan",
          index: 74,
          chapter: "§ 4 · Oron är inte påhittad",
          heading: "AI klarar allt längre uppgifter på egen hand",
          attribution:
            "Kurvan visar vad tekniken klarar i testmiljöer. Den visar inte vilken framtid vi väljer.",
          summary:
            "Det ärliga svaret börjar med att erkänna att hon har fog för sin oro. Längden på de uppgifter AI klarar självständigt har ökat snabbt och stadigt. Men det är värt att vara noga med vad kurvan mäter: uppgiftslängd i kontrollerad testmiljö, med tydliga mål och mätbara resultat. Den mäter inte hur smart något är, och den säger ingenting om hur arbetslivet organiseras. Tekniken beskriver vad som är möjligt — inte vad vi väljer.",
        },
        {
          id: "kan-och-bor",
          index: 75,
          chapter: "§ 4 · Den tredje frågan",
          bullets: [
            "Vad KAN AI göra? — en teknisk fråga. Svaret ändras varje termin.",
            "Vad BÖR AI göra? — en etisk fråga. Svaret ändras inte alls lika fort.",
            "Vem bestämmer? — den enda frågan som avgör de två andra.",
          ],
          summary:
            "De två första frågorna blandas ihop nästan alltid, och det är därför samtal om AI ofta går i cirklar: någon svarar tekniskt på en etisk fråga, eller tvärtom. Men det är den tredje som gör skillnad. Vad ett system får göra bestäms varken av vad det klarar eller av vad som vore önskvärt, utan av vem som fattar beslutet — och den frågan har ett svar som går att påverka.",
          linkedActivities: [
            {
              id: "vad-ska-systemen-fa-gora",
              label: "Vad ska systemen få göra?",
              href: "/ovningsbanken/vad-ska-systemen-fa-gora",
            },
          ],
        },
        {
          id: "saknade-pinnen",
          index: 76,
          chapter: "§ 4 · Vägen in",
          heading: "Den saknade pinnen",
          display:
            "AI behöver inte ta bort hela yrket för att förändra vägen in.",
          bullets: ["Juniorroll", "Medarbetare", "Senior", "Ledande"],
          summary:
            "Det vanligaste sättet att prata om AI och arbete — vilka yrken försvinner — missar det som redan händer. En karriär byggs genom en stege där de nedersta pinnarna består av uppgifter som är enkla, repetitiva och nödvändiga för att bli skicklig. Det är just de uppgifterna som automatiseras först. Yrket finns kvar, men vägen in gör det inte, och ingen har ännu ritat den nya.",
        },
        {
          id: "jobbet-uppdelat",
          index: 77,
          chapter: "§ 4 · Ett jobb är många uppgifter",
          heading: "Designern, uppdelad",
          bullets: [
            "AI kan göra mycket: research, produktion",
            "Människa och AI tillsammans: idéarbete, skissande, kunddialog",
            "Människan måste bära ansvaret: val och prioriteringar, ansvar för resultatet",
          ],
          display:
            "Frågan är inte om yrket försvinner. Frågan är vilka delar som förändras.",
          summary:
            "Här är svaret till femtonåringen. Ett yrke är inte en enhet utan en samling uppgifter, och de påverkas olika. Delar av designerns arbetsdag automatiseras, andra görs tillsammans med maskinen, och några blir kvar hos människan — och det som blir kvar är genomgående det som kräver omdöme och ansvar. Designern försvinner alltså inte. Arbetsdagen ser annorlunda ut, och tyngdpunkten flyttas mot det svåraste.",
        },
        {
          id: "konkurrent-eller-forstarkare",
          index: 78,
          chapter: "§ 4 · Två sätt att förhålla sig",
          bullets: [
            "Konkurrent: jag försöker göra samma sak snabbare än maskinen · Förstärkare: jag använder maskinen för att skapa sådant jag inte kunde tidigare",
            "Konkurrent: jag mäter mig mot det den är bäst på · Förstärkare: jag frågar vad som blir möjligt när den finns",
            "Konkurrent: jag förlorar långsamt · Förstärkare: jag flyttar mig dit maskinen inte kan följa",
          ],
          display:
            "Den viktigaste framtidsförmågan är inte att slå AI på dess starkaste område. Det är att formulera mål, göra val och bära ansvar.",
          summary:
            "Två hållningar till samma teknik, och den vänstra är den eleverna hamnar i av sig själva. Den är också förlorande av konstruktion: att mäta sig mot en maskin på maskinens starkaste område kan bara sluta på ett sätt. Det som återstår är inte tröst utan en annan strategi — och de tre verben i slutraden pekar ut vad nästa avsnitt handlar om.",
        },
        {
          id: "agensreglaget",
          index: 79,
          chapter: "§ 4 · Agens",
          heading: "Ett reglage, inte en strömbrytare",
          bullets: [
            "AI bestämmer vad som händer.",
            "Jag väljer hur AI används.",
            "Vi formar systemen och reglerna tillsammans.",
          ],
          display:
            "Agens är förmågan att förstå sina handlingsalternativ — och faktiskt använda dem.",
          summary:
            "Agens beskrivs oftast som något man har eller saknar. Det är mer användbart att se det som en position man kan flytta sig till. De flesta elever — och en hel del vuxna — står längst till vänster utan att någonsin ha valt det, för att ingen visat att de andra lägena finns.",
        },
        {
          id: "agens-tre-nivaer",
          index: 80,
          chapter: "§ 4 · Agens på tre nivåer",
          heading: "Jag · Vi · Samhället",
          bullets: [
            "Jag — när, hur och varför använder jag AI?",
            "Vi — vilka regler vill vi ha i klassen, familjen och samhället?",
            "Samhället — vem bygger systemen, vem tjänar på dem och vem får bestämma?",
          ],
          summary:
            "De tre nivåerna ligger inte bredvid varandra som alternativ — de omsluter varandra. Ett individuellt val sker inom regler som någon satt, och de reglerna sätts inom system som någon byggt och tjänar på. Den yttersta frågan är den som gör AI till en demokratifråga och inte bara en verktygsfråga, och det är också den som fångar upp den kollega som väntat på maktperspektivet hela timmen.",
          linkedActivities: [
            {
              id: "klassens-ai-policy",
              label: "Klassens AI-policy",
              href: "/ovningsbanken/klassens-ai-policy",
            },
          ],
        },
        {
          id: "oersattligt",
          index: 81,
          chapter: "§ 4 · Vad är oersättligt?",
          bullets: [
            "Sätta mål — avgöra vad som är värt att göra över huvud taget",
            "Skapa mening — göra sammanhang av det som händer",
            "Göra omdömen — väga sådant som inte går att räkna på",
            "Bygga relationer — vara någon för en annan människa, över tid",
            "Bära ansvar — stå för konsekvenserna",
            "Välja samhälle — bestämma vad vi vill leva i, tillsammans",
          ],
          display:
            "Människans värde sitter inte i det AI ännu misslyckas med.",
          summary:
            "Den vanligaste trösten — att människan har kvar empatin och det sociala — är både osann och nedslående, eftersom den gör människovärdet till en restpost som krymper varje gång tekniken förbättras. De sex förmågorna här är inte kvarlevor. De är det arbete som avgör vad allt annat ska användas till, och de blir viktigare ju mer som automatiseras, inte mindre.",
        },
        {
          id: "skolan-blir-viktigare",
          index: 82,
          chapter: "§ 4 · Skolan efter facitmaskinen",
          display:
            "Skolan blir viktigare. När svar blir billiga blir bra frågor, omdöme och uthållighet dyrare.",
          summary:
            "Inte att skolan blir mindre viktig, och inte heller bara att den behåller sin betydelse. Den blir viktigare, och av ett konkret skäl: när svar kostar nästan ingenting blir förmågan att avgöra vad ett svar är värt den knappa resursen. Det är en kompetens ingen behövde när svaren var dyra.",
        },
        {
          id: "framtidssamtalet",
          index: 83,
          chapter: "§ Metod · Kapitel 4",
          heading: "Framtidssamtalet",
          bullets: [
            "Vilka uppgifter vill vi att människor gör — även om AI kan göra dem?",
            "Vad är värt att lära sig — även om AI kan producera ett svar?",
            "Vem ska bära ansvaret när människa och AI arbetar tillsammans?",
            "Vilket problem skulle du vilja kunna lösa med AI?",
          ],
          summary:
            "Fyra frågor att köra som EPA eller fyra hörn. Den fjärde är tillagd med avsikt och ska inte hoppas över: de tre första är kritiska, och ett samtal som bara innehåller dem blir ett oroprat. Den fjärde vänder riktningen och gör eleverna till någon som vill något.",
          linkedActivities: [
            {
              id: "framtidssamtalet",
              label: "Framtidssamtalet",
              href: "/eleverna-om-ai/metod/framtidssamtalet",
            },
          ],
        },
        {
          id: "bygg-om-ett-yrke",
          index: 84,
          chapter: "§ Metod · Kapitel 4",
          heading: "Bygg om ett yrke",
          bullets: [
            "Välj ett yrke — helst ett någon i gruppen funderar på",
            "Dela upp det i tio arbetsuppgifter",
            "Markera vad AI kan göra, och vad människa och AI gör tillsammans",
            "Markera var en människa måste bära ansvar",
            "★ Skapa en ny väg in i yrket",
          ],
          display:
            "Slutuppgiften är den viktiga: rita en NY väg in i yrket. Den finns inte färdig någonstans.",
          summary:
            "Eleverna gör med sitt eget drömyrke det som gjordes med designern. De fyra första stegen är kartläggning och går att göra rätt. Det femte har inget facit: om nybörjaruppgifterna är borta, hur blir man skicklig då? Det är en genuint öppen fråga som ingen vuxen kan svara på åt dem, och det är därför den fungerar.",
        },
        {
          id: "kapitelkort-rivalen",
          index: 85,
          chapter: "§ 4 · Kapitelkortet",
          bullets: [
            "Eleven: vad AI kan göra avgör inte vad AI bör göra.",
            "Läraren: teknikens utveckling är verklig — men dess användning, makt och konsekvenser formas av mänskliga beslut.",
            "Undervisningen: låt eleverna undersöka uppgifter, ansvar och val — inte bara gissa vilka yrken som försvinner.",
          ],
          summary:
            "Undervisningsraden är en varning mot den vanligaste framtidslektionen. Att gissa vilka yrken som försvinner gör eleverna till åskådare inför något som händer dem. Att undersöka uppgifter, ansvar och val gör dem till deltagare i något som ska bestämmas.",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    {
      id: "finalen",
      number: "Finalen",
      title: "Vem bestämmer vad AI ska vara?",
      tone: "skog",
      intro:
        "Nu knyts säcken, och det sker i en bestämd ordning. Först får bussrösterna sina roller. Sedan tas rollerna bort igen, en efter en. Och först därefter visas ramverken — för berättelsen ska bära argumentet och kartan bara kvittera det.",
      slides: [
        {
          id: "tillbaka-pa-bussen",
          index: 86,
          chapter: "§ Final · Tillbaka på bussen",
          bullets: [
            "”Det finns ju typ ingen fråga man inte kan få svar på.” · Oraklet",
            "”Jag lämnade in en text men glömde ta bort alla emojisarna.” · Tjänaren",
            "”Jag frågade om jag skulle dejta honom.” · Vännen",
            "”Tänkte först bli designer. Men det känns inte värt det längre.” · Rivalen",
          ],
          display:
            "Det här är inte fyra separata problem. Det är fyra sätt att förstå relationen mellan människa och AI.",
          summary:
            "De fyra rösterna från prologen får nu sina namn. Ingen av ungdomarna hade läst något ramverk, och ändå täcker de tillsammans hela fältet. Det säger något om var frågorna faktiskt uppstår: inte i styrdokument, utan i det dagliga användandet.",
        },
        {
          id: "rollerna-lossnar",
          index: 87,
          chapter: "§ Final · Vad är AI då?",
          bullets: [
            "Inte ett orakel.",
            "Inte en tjänare.",
            "Inte en vän.",
            "Inte en rival.",
          ],
          display: "Det är roller vi ger den.",
          summary:
            "Och så tas de tillbaka, en efter en. AI vet inte, den är ingens tjänare, den kan inte vara en vän och den är inte en rival. Kvar står det som fanns i mitten hela tiden och som aldrig var något av det där. Rollerna var aldrig teknikens egenskaper — de var våra föreställningar, och därför är de våra att välja bort. Det är den insikten hela föreläsningen byggt mot.",
        },
        {
          id: "vad-ar-ai-da",
          index: 88,
          chapter: "§ Final · Vad är AI då?",
          bullets: [
            "Ett system byggt av människor.",
            "Tränat på spår av människor.",
            "Format av mänskliga mål.",
            "Använt i mänskliga sammanhang.",
            "Med konsekvenser som människor måste bära.",
          ],
          summary:
            "Om AI inte är någon av rollerna, vad är den då? Fem led som alla börjar och slutar i människan. Det finns ingen punkt i kedjan — från byggande till träning till användning till konsekvenser — där människan inte är med. Det är inte en tröst utan en ansvarsfördelning.",
        },
        {
          id: "huvudtesen",
          index: 89,
          chapter: "§ Final · Huvudtesen",
          display:
            "AI-litteracitet är att förstå tillräckligt om AI för att kunna bestämma vad AI ska få vara för dig. Och vad den aldrig ska få bli.",
          summary:
            "Definitionen i sin fullständiga form. Första halvan handlar om vad man väljer, andra halvan om vad man väljer bort — och den andra är minst lika viktig. Ett orakel, en tjänare, en vän, en rival: fyra roller, och rätten att säga nej till var och en av dem.",
        },
        {
          id: "sju-omraden",
          index: 90,
          chapter: "§ Final · De sju områdena",
          heading: "Strukturen under berättelsen",
          bullets: [
            "Berättelsen om AI — varifrån kommer våra föreställningar?",
            "Vad är AI? — mönster, data, träning och begränsningar",
            "Använda AI — kontext, hjälpform och kreativt skapande",
            "Etik — ansvar, integritet och mänsklig värdighet",
            "Kritiskt granska — påståenden, källor, påverkan och design",
            "Människa och maskin — antropomorfism, relationer, ägarskap",
            "Framtid och samhälle — arbete, makt, demokrati och agens",
          ],
          summary:
            "Under berättelsen har det hela tiden legat en innehållskarta med sju områden, utan att någon behövt läsa den. Ordningen är avsiktlig: berättelsen först, ramverket sedan. Den som möter områdena nu känner igen dem som något hen redan varit med om, i stället för som en lista att beta av. Kartan hjälper till med en enda sak, men den är viktig — att välja nästa pusselbit.",
          linkedActivities: [
            {
              id: "ai-litteracitet",
              label: "De sju dimensionerna med täckningskarta",
              href: "/ai-litteracitet#tackning",
            },
          ],
        },
        {
          id: "oecd-domanerna",
          index: 91,
          chapter: "§ Final · Kvittot",
          heading: "Och så här heter det i ramverken",
          bullets: [
            "Möta AI — förstå oraklet och granska svaren",
            "Skapa med AI — använd tjänaren som kreativ partner",
            "Styra AI — välj hjälpform och skydda lärandet",
            "Forma AI — diskutera relationer, ansvar och samhällsval",
          ],
          summary:
            "OECD:s fyra domäner kommer allra sist, och det är ett medvetet val. Rollerna har redan gjort arbetet; ramverket kvitterar bara att det som sagts hänger ihop med det som står i styrdokument och internationella bedömningar. Det gör samma innehåll användbart i ett rektorssamtal eller på ett föräldramöte — och det är de fyra domänerna som filtrerar den här webbplatsen.",
        },
        {
          id: "miniprogrammet",
          index: 92,
          chapter: "§ Final · Ett möjligt miniprogram",
          bullets: [
            "Hur kan AI låta så mänsklig? · Chattdetektiverna",
            "När hjälper AI mig att lära? · Brain dump före AI",
            "Hur försöker AI påverka mig? · Hitta kunskapsluckan",
            "Vilken framtid vill vi använda AI till? · Framtidssamtalet",
          ],
          display:
            "Fyra lektioner. Föreläsningen behöver inte bli ett enstaka temapass.",
          summary:
            "Fyra tillfällen som tillsammans täcker det mesta av innehållet, formulerade som elevfrågor eftersom det är så en lektion faktiskt öppnar. Varje station bygger på en metod som redan beskrivits, så programmet är inget nytt åtagande — bara en ordning på det som finns.",
        },
        {
          id: "bron-till-workshopen",
          index: 93,
          chapter: "§ Bro · Webbsidan",
          heading: "Nu ska vi göra det undervisningsbart",
          summary:
            "Övergången från föreläsning till praktik. Allt som beskrivits finns som färdiga aktiviteter, och de fungerar självgående — även för den som aldrig hört föreläsningen.",
        },
        {
          id: "meningen",
          index: 94,
          chapter: "§ Final",
          display:
            "Det viktigaste mina elever behöver förstå om AI är … att jag kan välja vilken roll AI ska få.",
          summary:
            "Sex möjliga avslutningar på samma mening, en per kapitel plus två som är summan av allt. Den som stannar kvar är den sista, och den är avsiktligt formulerad i första person: det är inte en insikt om AI utan om den egna handlingsutrymmet.",
        },
        {
          id: "tack",
          index: 95,
          chapter: "§ Tack",
          heading: "Eleverna pratar redan om AI",
          display:
            "Frågan är om vi hjälper dem att förstå vad de pratar med.",
          summary:
            "AI är inte ett orakel, en tjänare, en vän eller en rival. Det är roller vi ger den. Eleverna behöver inte kunna allt om artificiell intelligens, men de behöver förstå tillräckligt för att kunna välja när AI ska hjälpa, när den ska utmana, när den ska lämnas utanför och när en människa måste komma in. Samtalen på bussen pågår redan. Frågan är bara om någon vuxen är med i dem.",
        },
      ],
    },
  ],
};
