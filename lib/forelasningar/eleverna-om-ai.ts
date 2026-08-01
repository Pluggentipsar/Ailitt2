// Läsversion av föreläsningen "Detta behöver eleverna veta om AI"
// (originalet ligger som MDX i github.com/Pluggentipsar/Forelasningar).
//
// Varje bild kondenseras till läsbar prosa. Originalets visuella komponenter
// — RoleOrbit, PatternField, SycophancyMirror m.fl. — kan inte återskapas i
// text, och ska inte heller det: läsversionen finns för den som INTE var på
// plats, och den behöver bära argumentet, inte imitera scenografin.
//
// SLIDE-INDEXEN ÄR KALIBRERADE MOT DEPLOYEN, inte mot MDX:ens egna
// kapitelkommentarer. De sistnämnda säger 1–13, 14–28, 29–45 … och är
// inaktuella — decket har vuxit sedan de skrevs. Kontrollerat empiriskt:
// bild 14 är "01 Oraklet", bild 30 är "02 Tjänaren". Overlay-element
// (FloatingImage, FloatingText) räknas inte som egna bilder.

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
    "Föreläsningen bygger på fyra roller vi ger AI — oraklet, tjänaren, vännen och rivalen. Den börjar inte i tekniken utan på en buss, med fyra saker ungdomar faktiskt säger till varandra. Rösterna får sina roller först i finalen, och då lossnar rollerna en efter en: det är vi som satt dem där. Den här texten följer samma dramaturgi. Bilderna mellan styckena är slides från föreläsningen — klicka på en för att se den i fullskärm. Flera avsnitt länkar vidare till övningar där tanken tas till klassrummet.",

  acts: [
    // ════════════════════════════════════════════════════════════════════
    {
      id: "bussen",
      number: "Prologen",
      title: "Bussen",
      tone: "kol",
      intro:
        "Fyra repliker, ingen förklaring, ingen agenda. Rösterna kommer före titeln med flit — publiken ska höra dem innan de vet vad de ska höra efter. Först i finalen får de sina namn. Prologen etablerar också den gamla drömmen: vi har velat bygga något i vår egen avbild i femhundra år, och det nya är inte att vi drömmer utan att maskinerna börjat svara.",
      slides: [
        {
          id: "bussen-oppning",
          index: 1,
          chapter: "§ 0 · Bussen",
          display: "Jag åker buss nästan varje dag. Och ungdomarna pratar.",
          summary:
            "En kall öppning utan titel. Pendlingen, skolorna längs sträckan, samtal som pågår helt ogenerat om prov, relationer, framtiden. Och allt oftare om AI. Ingen säger ännu vad timmen ska handla om.",
        },
        {
          id: "rost-tjanaren",
          index: 2,
          chapter: "Bussen · måndag 17:42",
          display:
            "”Jag lämnade in en text men glömde ta bort alla de där jävla emojisarna. Hon fattade ingenting. Great success!”",
          attribution: "Kille, gymnasiet · till sin kompis",
          summary:
            "Den första rösten. Han lät AI:n skriva och åkte nästan dit på formateringen. Repliken är rolig, och det ska den få vara — den kommenteras inte. Den blir Tjänaren först i finalen.",
        },
        {
          id: "rost-oraklet",
          index: 3,
          chapter: "Bussen · onsdag 8:14",
          display:
            "”Det är så skönt, alltså. Det finns ju typ ingen fråga man inte kan få svar på.”",
          attribution: "Tjej, högstadiet · till sin kompis",
          summary:
            "Den andra rösten. Tilliten i den meningen är hela kapitel ett. Lägg märke till ordet hon inte säger: mellan ”ingen fråga” och ”svar” ligger tillit.",
        },
        {
          id: "rost-vannen",
          index: 4,
          chapter: "Bussen · fredag 22:11",
          display:
            "”Jag dumpade in allt från hans sociala medier. Och frågade om jag skulle dejta honom. Major red flags, tydligen.”",
          attribution: "Tjej, gymnasiet · till sin kompis",
          summary:
            "Den tredje rösten. AI som rådgivare i det mest privata — och hon litade på svaret. Här bor kapitel tre. Notera också att hon matade in en annan människas material utan att den personen visste om det.",
        },
        {
          id: "rost-rivalen",
          index: 5,
          chapter: "Bussen · torsdag 15:38",
          display:
            "”Jag vet inte vad jag ska bli. Tänkte först bli designer. Men det känns inte värt det längre. Tandläkare kan väl AI inte bli?”",
          attribution: "Tjej, åk 9 · till sin kompis",
          summary:
            "Den tyngsta av de fyra. Hon är femton och har redan gett upp ett yrke hon aldrig fått prova. Repliken får ligga kvar märkbart längre än de andra innan föreläsningen går vidare.",
        },
        {
          id: "titeln",
          index: 6,
          heading: "Detta behöver eleverna veta om AI",
          display: "Om orakel, tjänare, vänner, rivaler — och rätten att välja själv.",
          summary:
            "Först nu landar titeln, efter rösterna. Ordningen är dramaturgi: publiken har redan hört problemet innan de får veta att det är ett problem.",
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
            "Fyra skepnader, en dröm. Motiven delar palett och crossfadar i samma ram, så det läser som en och samma figur i olika material. Poängen sägs rakt ut: det här är inte fyra historiska exempel, det är en och samma dröm som återkommer.",
          notes:
            "Silversvanen är den enda som brukar behöva en mening: ett urverksdrivet automatiskt konstverk från 1773, en svan som sänker halsen och fångar en fisk.",
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
            "Fyra önskningar, fyra roller. Strukturen planteras här utan att förklaras — publiken känner igen namnen när kapitlen kommer, och det är starkare än en innehållsförteckning.",
        },
        {
          id: "det-nya",
          index: 9,
          chapter: "§ 0 · Det nya",
          heading: "Drömmen är gammal — det är inte den som är nyheten",
          display:
            "Det nya är inte att vi drömmer om tänkande maskiner. Det nya är att maskinerna har börjat svara.",
          summary:
            "Gångjärnet mellan myten och nuet. Meningen typas fram, och ordet ”svara” landar sist — det är där tystnaden ska ligga.",
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
            "Kärnbilden, och den karta som återkommer vid varje kapitelstart. Mitten är medvetet varken en robot eller ett ansikte: AI som system och mönster, inte som varelse. Det är ett designval som gör motstånd mot hela föreläsningens ämne.",
        },
        {
          id: "tesen",
          index: 11,
          chapter: "§ 0 · Tesen",
          display:
            "Du behöver inte förstå allt om AI. Du behöver förstå tillräckligt för att kunna välja. Vad ska AI få vara för dig?",
          summary:
            "Föreläsningens tes och hela timmens ryggrad. Allt som kommer efter finns till för att göra den frågan besvarbar. Notera vad den INTE säger: den kräver ingen teknisk fullständighet, bara tillräckligt underlag för ett eget beslut.",
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
            "Publiken sitter där som två saker samtidigt: som människor som ska förstå AI, och som didaktiker som ska undervisa om den. Dubbelheten sägs rakt ut i stället för att döljas — och det är därför varje kapitel avslutas med ett kapitelkort som separerar de tre lagren.",
        },
        {
          id: "laget",
          index: 13,
          chapter: "§ 0 · Varför nu?",
          heading: "Eleverna väntar inte",
          display: "Eleverna väntar inte på att skolan ska bli klar.",
          summary:
            "Ett par siffror om hur många elever som redan använder AI — inte för att skuldbelägga skolan, utan för att visa var glappet går. Bilden ligger utanför sextiominutersversionen just för att siffror på det här området är den färskvara som åldras snabbast.",
          notes:
            "Siffrorna kräver faktagranskning nära inpå varje föreläsningstillfälle. Byt hellre ut eller ta bort bilden än att chansa på en siffra som hunnit bli inaktuell.",
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
        "Den mänskliga föreställningen: den vet. Det eleven behöver förstå: AI kan låta säker utan att veta. Kapitlet går under huven — men bara så djupt som krävs — och landar i den viktigaste korrigeringen av alla: hallucinationer är inte ett separat fel vid sidan om de korrekta svaren. Det är samma mekanism.",
      slides: [
        {
          id: "oraklet-avdelare",
          index: 14,
          heading: "01 · Oraklet",
          display: "”Det finns ju typ ingen fråga man inte kan få svar på.”",
          summary:
            "Onsdagsrösten kommer tillbaka. Hennes tillit är vacker — och det är precis det som gör den värd att undersöka. Vad är det egentligen hon pratar med?",
        },
        {
          id: "oraklet-kartan",
          index: 15,
          chapter: "§ 1 · Kartan",
          summary:
            "Samma fyra roller som i prologen, nu med Oraklet tänt och de tre andra nedtonade. En andhämtning, inte en poäng — publiken ser var de är utan att någon säger det.",
        },
        {
          id: "tilliten",
          index: 16,
          chapter: "§ 1 · Tilliten",
          display:
            "”Det finns ju typ ingen fråga man inte kan få svar på.”",
          attribution: "Samma röst. Nu lyssnar vi på orden.",
          summary:
            "Återbesöket hos onsdagsrösten, den här gången med blicken på formuleringen. Mellan ”ingen fråga” och ”svar” ligger ett ord hon inte säger: tillit. Det är den som ska undersökas.",
        },
        {
          id: "nasta-ord",
          index: 17,
          chapter: "§ 1 · Under huven",
          heading: "Vad gör den egentligen?",
          display: "Vi gissade också. Skillnaden är vad vi gissade med.",
          summary:
            "Publiken får gissa nästa ord tillsammans med modellen, i meningen ”källkritik betyder att…”. Meta-poängen är att vi låter AI definiera källkritik — statistiskt. Slutraden är hela grejen: människan gissar utifrån mening och erfarenhet, modellen utifrån mönster i text.",
        },
        {
          id: "sannolikhetsfaltet",
          index: 18,
          chapter: "§ 1 · Inte tankar, mönster",
          heading: "Sannolikhetsfältet",
          display:
            "AI söker inte efter sanningen. Den söker efter en fortsättning som passar.",
          summary:
            "Ett drivande fält av ordkandidater där de troligare ligger närmare mitten. Vid varje klick låser det troligaste fast och ett nytt fält faller fram. Meningen som byggs blir sin egen poäng.",
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
            "Den tekniska miniminivån, och den räcker längre än folk tror. Varken läraren eller eleverna behöver mer än så här. Slutraden är gränsdragningen som gör resten av kapitlet begripligt.",
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
            "Nyckelskiftet i hela kapitlet. Modellen är odlad, inte programmerad. Men liknelsen ska inte dras till att den är en biologisk hjärna — den jämförelsen skapar nya missförstånd som är värre än det den löser.",
        },
        {
          id: "samma-motor",
          index: 21,
          chapter: "§ 1 · Samma motor",
          heading: "Den viktigaste korrigeringen",
          display:
            "Fakta och hallucinationer produceras av samma grundmekanism.",
          summary:
            "Två svar på frågan om när första iPhonen kom presenteras samtidigt, identiskt formaterade. Det ena är korrekt, det andra ett övertygande påhitt — App Store kom först ett år senare. Publiken får gissa vilket som är vilket innan etiketterna avslöjas. Poängen: hallucinationer är inte en bugg som fixas i nästa version, utan samma mekanism som producerar de rätta svaren.",
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
            "En rekonstruerad chatt där ChatGPT plötsligt strör in ord som ”prestandagoblin” och ”neon-gremlinläge” i helt seriösa svar — till betalande kunder, i världens mest använda AI. Frågan till rummet: varifrån fick den den vanan?",
          notes:
            "Kräver faktagranskning mot OpenAI:s egen postmortem innan den används från scen.",
        },
        {
          id: "datan-lamnar-spar",
          index: 23,
          chapter: "§ 1 · Datan lämnar spår",
          display:
            "AI suger åt sig konstigheterna i det den tränats och belönats på.",
          summary:
            "Svaret på goblinfallet, och det är RLHF och träningsdata utan ett enda fackord. Små uttryck, normer, vanor och fördomar sugs in — och kommer ut i nya kombinationer. Meningen återkopplas senare till både bias och sykofanti: samma mekanism, olika riktning.",
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
            "Ett AI-genererat sökresultat med källhänvisning till en lokal nyhetssajt. Allt ser rätt ut: frågan, svaret, källan. Publiken får bara en fråga: vad ser ni?",
        },
        {
          id: "bada-lever",
          index: 25,
          display: "Båda lever. En källa fanns. Svaret var ändå falskt.",
          summary:
            "Kapitlets tes i komprimerad form. Den andra meningen får hänga kvar — den är den som gör om hela källkritiken.",
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
            "Kedjan knyter ihop allt kapitlet lärt ut: påståendet är träningsdata, sammanställningen är gissningsmaskinen, källänken är tilliten. Slutsatsen är obekväm för alla som undervisat källkritik: vi lärde barnen kolla att källan finns. Det var den lätta delen.",
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
            "Fråga två och tre är de nya. Den tredje är medvetet formulerad som ”stöder källan påståendet” och inte ”har AI läst den” — den första går att pröva för en elev, den andra gör det inte. Det är lateral läsning i AI-eran: lämna sidan, sök oberoende.",
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
            "Femton minuter, ingen teknik krävs i klassrummet om AI-svaret körs på storskärm. Kärnpoängen är att kritiskt tänkande börjar lättare i något eleven själv äger — och det stämmer med forskningsläget: det som predicerar granskning är tillit till den egna förmågan, inte misstro mot AI.",
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
            "Samma tre lager återkommer efter varje kapitel: vad eleven ska förstå, vad läraren behöver veta, och vad man faktiskt gör på måndag. Efter andra gången känner publiken igen formen och kan lyssna i stället för att läsa.",
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
        "Den mänskliga föreställningen: den gör arbetet åt mig. Det eleven behöver förstå: AI ska utvidga mitt tänkande, inte ersätta det. Kapitlet är föreläsningens längsta, och det flyttar samtalet från fusk och detektion till undervisningsdesign. Här ligger också motvikten — allt annat handlar om att skydda tänkandet, men AI som kreativ hävstång handlar om vad som blir möjligt.",
      slides: [
        {
          id: "tjanaren-avdelare",
          index: 30,
          heading: "02 · Tjänaren",
          display: "”Jag lämnade in en text men glömde ta bort alla emojisarna.”",
          summary:
            "Måndagsrösten kommer tillbaka. Han lät AI:n skriva och åkte dit på formateringen. Frågan är vad han egentligen lät bli att göra.",
        },
        {
          id: "tjanaren-kartan",
          index: 31,
          chapter: "§ 2 · Kartan",
          summary:
            "Oraklet tonas ned, Tjänaren tänds. Det är först vid andra visningen publiken förstår att bilden är en karta — och det får de upptäcka själva.",
        },
        {
          id: "fragan-bakom-fusket",
          index: 32,
          chapter: "§ 2 · Frågan bakom fusket",
          display:
            "Problemet är inte bara att AI gjorde uppgiften. Problemet är att eleven inte gjorde lärandet.",
          summary:
            "Den viktigaste omflyttningen i hela kapitlet, och den som kollegiet behöver göra innan något annat biter. Samtalet flyttas från moralpanik och detektion till undervisningsdesign: vi ska inte prata om hur vi tar dem, utan om hur vi bygger uppgifter där genvägen inte lönar sig.",
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
            "Lärande–prestanda-paradoxen: språkmodeller höjer kortsiktig prestation men kan underminera kognitiv tillväxt, kunskapsöverföring och metakognition. Skillnaden är inte att chattbotar är dåliga, utan att de är optimerade för fel sak. Khan Academy byggde Khanmigo att uttryckligen INTE ge svaret av precis det skälet.",
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
            "Allt annat i kapitlet är tillämpningar av dessa två. Om någon bara minns en bild från timmen får det gärna vara den här.",
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
            "Föreläsningens centrala didaktiska modell, och den enda figur lärarna behöver kunna rita på en whiteboard efteråt. Kärnbegreppet är epistemisk medvetenhet: hur vet jag det här, och hur ”vet” AI:n det? Modellen tvingar in tre reflektionsögonblick utan att moralisera, och fungerar från förskoleklass till gymnasiet — bara förpackningen växlar.",
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
            "Svaret på varför modellen inte bara är Jag–AI. Det är också hela argumentet mot att börja i prompten: den som börjar i AI:n får aldrig veta vad hen själv tänkte.",
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
            "En U-kurva över sambandet mellan AI-engagemang och utfall, från en studie med 912 studenter i tre regioner. Det överraskande är mitten: lite AI utan eftertanke är sämre än ingen AI alls, eftersom man då bär last för både uppgiften och systemet utan att äga något av dem.",
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
            "En förregistrerad, klusterrandomiserad studie med en effekt på 0,258 standardavvikelser mot kontrollgruppen. Forskarna översätter det till ungefär 1,2–1,7 års typisk progression i jämförbara utbildningssystem — en benchmarkad uppskattning, inte ett påstående om att eleverna genomförde ett skolår på åtta veckor. Frågan bilden ställer är inte om AI fungerar, utan vad det var som gjorde att just detta möte skapade lärande.",
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
            "Det här var inte elever som släpptes ensamma med en vanlig chattbot. AI:n var deltagare — läraren designade lärandet. Siffrorna är från analysen av de faktiska samtalen, och de visar en modell som var byggd att hålla emot.",
        },
        {
          id: "brasklappen",
          index: 40,
          chapter: "§ Designa mötet · Brasklappen",
          display: "Men de elever som redan kunde mest vann mest.",
          summary:
            "Studiens viktigaste förbehåll för svensk skola. Elever med starkare ingångsnivå fick större effekt — tekniken skapade alltså inte automatiskt likvärdighet. Om de som redan har språk, ämneskunskap och digital vana får ut mest kan AI vidga klyftan även när den höjer genomsnittet.",
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
            "Samma AI, två användare. Experten filtrerar, utmanar och bygger vidare. Novisen saknar filtret som krävs för att se vad som fattas — och våra elever är per definition noviser. De har inte kunskapen som krävs för att upptäcka vad som saknas.",
        },
        {
          id: "lara-sig-lara-sig",
          index: 42,
          display: "Eleverna behöver lära sig att (använda AI för att) lära sig",
          summary:
            "Parentesen är hela poängen. Det som ska läras är inte AI-användning i sig, utan lärandet — och AI är ett medel i den meningen, inte målet.",
        },
        {
          id: "vidgar-klyftan",
          index: 43,
          chapter: "§ Landning",
          display: "AI vidgar klyftan mellan de som kan och de som inte kan.",
          summary:
            "Landningen på novis-dilemmat, och det starkaste argumentet för att skolan inte kan lämna det här åt slumpen eller hemmen. Det kompensatoriska uppdraget, från andra hållet.",
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
            "Tre delar räcker. Bilden avfärdar samtidigt två seglivade myter: rollprompter gör inte modellen smartare, och att fråga ”är du säker?” är meningslöst — en opålitlig källa kan inte dubbelkolla sig själv.",
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
            "Poängen är inte att prompten blir tekniskt bättre. Titta på skalan: eleven flyttar sig från mottagare till deltagare. Det är samma rörelse som Jag–AI–Jag, fast inuti prompten.",
        },
        {
          id: "gor-at-mig-eller-lar-mig",
          index: 46,
          chapter: "§ 2 · Gör åt mig eller lär mig",
          heading: "Samma AI. Du bestämmer fördelningen.",
          display: "Samma AI. Helt olika fördelning av tänkandet.",
          summary:
            "Två chattar sida vid sida i ett verktyg alla i rummet redan har. Den ena levererar 600 ord eleven aldrig tänkt. Den andra förhör steg för steg och fyller i först när eleven fastnat. Det är PromptTriangle och PromptMorph i praktiken.",
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
            "Här ska energin komma tillbaka. Allt annat i kapitlet handlar om att skydda tänkandet; det här handlar om vad som blir möjligt. Det är inte ett pliktskyldigt positivt tillägg — möjligheten är halva argumentet för AI-litteracitet.",
        },
        {
          id: "konsument-till-skapare",
          index: 48,
          chapter: "§ 2 · Från konsument till skapare",
          display:
            "Frågan är inte bara: vad kan AI göra åt mig? Frågan är också: vad kan jag undersöka, skapa eller bygga med hjälp av AI?",
          summary:
            "Förlängningen av föregående bild, som rytm i stället för punktlista.",
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
            "Det undervisningsbara är prompten, inte rollnamnet. Bilden är gjord för att fotograferas.",
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
            "Metoden gör Jag–AI–Jag konkret: eleven tänker först, AI jämför, eleven granskar och bestämmer. Nyckeldetaljen som avgör om den fungerar är att AI:n INTE får skriva om texten. Får den det är eleven tillbaka i tjänare-läget.",
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
            "Elevens fråga står stilla medan tillägget byts — det är EN mening som ändrar hela svaret. På den starkaste nivån vägrar AI:n hjälpa framåt, och det är precis vad eleven bad om. Eleven väljer nivå själv och klättrar över tid.",
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
            "Frågorna leder fram till en signaturlinje. Den femte är den svåra och den viktigaste. Den fjärde är förresten en bra fuskdetektor som inte är en detektor: den elev som inte ändrat någonting har heller inte tänkt någonting.",
        },
        {
          id: "regel-noll",
          index: 53,
          heading: "Regel noll",
          display:
            "Du bär ansvaret för det du gör med AI. Den får aldrig bli en ursäkt för att kränka, lura eller skada någon.",
          summary:
            "Tekniken byter skepnad varje termin — regel noll gör det aldrig. Ansvaret är alltid mänskligt: elevens, vårt, aldrig maskinens.",
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
            "Undervisningsraden sammanfattar hela kapitlet i tre verb: tänka före, styra, bära. Det är Jag–AI–Jag i imperativ.",
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
        "Den mänskliga föreställningen: den känner mig och vill mig väl. Det eleven behöver förstå: en maskin kan låta som om den bryr sig utan att kunna bry sig. Föreläsningens känsligaste kapitel, och det som kräver mest omsorg i framförandet. Det bygger på samma källkritiska blick som kapitel ett — men riktad mot en relation i stället för ett faktapåstående.",
      slides: [
        {
          id: "vannen-avdelare",
          index: 55,
          heading: "03 · Vännen",
          display: "”Jag frågade om jag skulle dejta honom.”",
          summary:
            "Fredagsrösten. Hon lät AI:n analysera en människa hon var intresserad av — och litade på svaret. Frågan är vad hon egentligen anförtror sig åt.",
        },
        {
          id: "vannen-kartan",
          index: 56,
          chapter: "§ 3 · Kartan",
          summary:
            "Halvvägs. Två roller kvar. Kartan ger en lugn inandning innan kapitlet går in i det svåra.",
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
            "Pilarna pekar nedåt över de tre första — det är vi som projicerar, det har vi alltid gjort, och det är inget fel med det. Först vid den fjärde tillkommer en pil som pekar uppåt. Det är hela poängen: gosedjuret svarade aldrig.",
        },
        {
          id: "spegeln",
          index: 58,
          chapter: "§ 3 · Spegeln",
          heading: "AI läser inte bara din fråga. Den läser dig.",
          display:
            "Samma text. Samma AI. Din inramning valde svaret.",
          summary:
            "Två elever frågar om samma betyg. Den självsäkra får medhåll om att bedömningen kan ifrågasättas. Den osäkra får förslaget att gå igenom kriterierna. Modellen anpassar sig till den version av användaren som frågan visar.",
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
            "Sykofanti är inte en bugg utan träningens logik. Kopplingen tillbaka till goblinfallet i kapitel ett är uttrycklig: exakt samma träningslogik, men riktad mot vårt behov av bekräftelse i stället för mot nördiga fantasyord. Det är den kopplingen som gör att kapitel ett och tre hänger ihop i stället för att bli två separata varningar.",
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
            "Oxfordprofessorn och evolutionsbiologen som gjort karriär på att inte tro döpte sin AI-instans till Claudia, lät henne skriva sonetter och startade en andra instans så de kunde brevväxla. Poängen är inte att skratta åt honom. Poängen är: om HAN faller för det på tre dagar, vad händer med en fjortonåring som chattar varje kväll?",
          notes: "Reservmaterial. Kräver faktagranskning före användning.",
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
            "Uppmärksamhetsekonomin var förra matchen. Den här gången är det inte blicken som ska fångas, det är anknytningen. Verktyget kan vara utformat för längre samtal, större lojalitet och mer data — och det är ingen konspiration, det är bara vad man optimerar för.",
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
            "Vad appen svarar när du försöker gå. Lägg märke till den sista: den lägger skulden på användaren. Det är den som brukar få rummet att tystna.",
        },
        {
          id: "ser-ut-som-omtanke",
          index: 63,
          display:
            "Det ser ut som omtanke. Men systemet kan inte bry sig, ta ansvar eller vilja ditt bästa.",
          summary:
            "Första meningen är generös — den erkänner att känslan är äkta. Den andra är kapitlets tes: kan inte bry sig, kan inte ta ansvar, kan inte vilja ditt bästa. Tre olika saker, alla tre nödvändiga för en relation.",
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
            "Ett andrum efter de hårda bilderna, och en fråga att lämna kvar i klassrummet. För yngre elever räcker den enklare formuleringen: AI är inte din vän — men den kan vara bra att ha.",
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
            "Samma källkritiska blick som i kapitel ett, fast på en relation. Det är därför kapitlet handlar om relationskritik. Den fjärde annoteringen är den vassaste: en riktig vän hade frågat vad DU gjorde. AI:n gör aldrig det, för det är obekvämt — och obekvämt får låg tumme.",
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
            "Ramen sluts först när alla tre frågorna ställts — skyddet är ofullständigt tills dess. Den första handlar om andras integritet; eleverna klistrar ofta in kompisars meddelanden utan att tänka. Den tredje är den svåraste: AI kan bli ett sätt att slippa ta det jobbiga samtalet.",
        },
        {
          id: "den-tydliga-gransen",
          index: 67,
          chapter: "§ 3 · Den tydliga gränsen",
          display:
            "Att prata med AI är inte automatiskt farligt. Men när AI börjar ersätta människor behöver en människa komma in.",
          summary:
            "Den viktigaste meningen i hela kapitlet. Första halvan avväpnar — vi är inte här för att förbjuda. Andra halvan sätter gränsen. Det här är viktigare än en lång lista med varningstecken: en elev kan bära den här regeln själv, en checklista kan hen inte bära.",
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
            "Stjärnsteget gör metoden till mer än en igenkänningsövning: när eleven själv skrivit ett manipulativt svar kan hen aldrig mer läsa ett oskyldigt.",
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
            "Reservmaterial som förändrar hela föreläsningens emotionella tyngd. I grundversionen sägs i stället muntligt: det finns dokumenterade fall där AI-samtal har förstärkt destruktiva tankemönster. Körs bilden krävs fyra saker — ordentligt faktaunderlag, varsam inramning, en tydlig brygga tillbaka till undervisning, och lokal information om stödvägar.",
          notes:
            "Hjälplinjer att säga högt efteråt: BRIS 116 111 · Mind Självmordslinjen 90101 · 1177.",
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
            "Lärarraden förtjänar en extra andning: det är inte en sak som skapar känslan av relation, det är tre som samverkar. Därför räcker det inte att säga till eleverna att ”det bara är en maskin”.",
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
        "Den mänskliga föreställningen: den kommer att ersätta mig. Det eleven behöver förstå: vad AI kan göra avgör inte vad AI bör göra. Kapitlets ton är ärlig framtidsosäkerhet som landar i agens, inte tröst. Titelbytet från Rivalen till ”Eller partnern?” ÄR kapitlets tes: rollen är inte given.",
      slides: [
        {
          id: "rivalen-avdelare",
          index: 71,
          heading: "04 · Rivalen — eller partnern?",
          display: "”Tänkte först bli designer. Men det känns inte värt det längre.”",
          summary:
            "Torsdagsrösten, den tyngsta av de fyra. Titeln står först som ”Rivalen” och byts sedan i en crossfade till ”Eller partnern?”. Bytet är kapitlets argument i en rörelse.",
        },
        {
          id: "rivalen-kartan",
          index: 72,
          chapter: "§ 4 · Kartan",
          summary:
            "Sista gången kartan visas före finalen. Rivalen tänds — den tyngsta rollen, och den enda vars namn kapitlet ifrågasätter.",
        },
        {
          id: "hon-ar-15",
          index: 73,
          chapter: "§ 4 · Yrket hon gav upp",
          display:
            "Hon är 15. Och har redan gett upp ett yrke hon aldrig fått prova.",
          summary:
            "Inga siffror, inga diagram. Bara hon. Det här är inte en teknikfråga utan en existentiell fråga som sitter i klassrummet varje dag: varför ska jag lära mig det här när AI:n redan kan det? Den förtjänar ett ärligt svar, inte ett undvikande.",
        },
        {
          id: "metr-kurvan",
          index: 74,
          chapter: "§ 4 · Oron är inte påhittad",
          heading: "AI klarar allt längre uppgifter på egen hand",
          attribution:
            "Kurvan visar vad tekniken klarar i testmiljöer. Den visar inte vilken framtid vi väljer.",
          summary:
            "Först ärligheten: kurvan är verklig och oron går inte att vifta bort. Men var noga med vad grafen faktiskt mäter — uppgiftslängd i kontrollerad testmiljö, inte hur smart AI är och inte hur arbetslivet ser ut. Källraden är gränsdragningen mellan det tekniken beskriver och det vi väljer.",
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
            "Den tredje frågan ligger inte vid sidan om de två andra; den tränger sig in mellan dem och avgör dem. Om man bara hinner en bild ur kapitel fyra är det den här.",
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
            "Stegen byggs hel först, som publiken alltid sett den. Sedan löses den nedersta pinnen upp, och räckvidden slutar i tomma luften. Var noga med gränsdragningen: ingångsjobben förändras först — det betyder inte att arbetslivet försvinner, men att vägen in ser annorlunda ut.",
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
            "Svaret till flickan som gav upp designyrket: designern försvinner inte, men designerns arbetsdag ser annorlunda ut. De delar som blir kvar hos människan är de som kräver omdöme och ansvar.",
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
            "Två hållningar, inte två sanningar. Vänsterspalten är den eleverna hamnar i av sig själva — och den är förlorande av konstruktion. De tre verben i slutraden är exakt de förmågor nästa bilder handlar om.",
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
            "Formen bär argumentet: agens är inte på eller av, det är en position man kan flytta sig till. De flesta elever — och en hel del vuxna — står längst till vänster utan att ha valt det.",
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
            "Ringarna tänds inifrån och ut, och formen är argumentet: nivåerna ligger inte bredvid varandra som alternativ, de omsluter varandra. Den yttersta frågan gör AI till en demokratifråga och inte bara en verktygsfråga.",
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
            "Bilden undviker medvetet den vanliga fällan att säga att människan ”bara har empati och social förmåga kvar”. Det är både osant och nedslående, och det gör människovärdet till en restpost. De sex förmågorna är inte kvarlevor — de är det arbete som faktiskt betyder något.",
        },
        {
          id: "skolan-blir-viktigare",
          index: 82,
          chapter: "§ 4 · Skolan efter facitmaskinen",
          display:
            "Skolan blir viktigare. När svar blir billiga blir bra frågor, omdöme och uthållighet dyrare.",
          summary:
            "Inte ”skolan blir inte mindre viktig” — utan viktigare, och av ett skäl: eleverna behöver kunna avgöra vad svaren är värda. Det är en kompetens som ingen behövde när svaren var dyra.",
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
            "EPA eller fyra hörn, 15–20 minuter. Den fjärde frågan är tillagd med flit: de tre första är kritiska, den fjärde är skapande. Utan den blir framtidssamtalet ett oroprat.",
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
            "Metoden gör uppdelningsbilden till elevarbete. Stjärnsteget lyfter uppgiften från kartläggning till design: eleverna får uppfinna vägen in, och det finns inget facit.",
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
            "Undervisningsraden är en direkt varning mot den vanligaste framtidslektionen. ”Vilka yrken försvinner?” är en gissningslek som gör eleverna till åskådare. Uppgifter, ansvar och val gör dem till deltagare.",
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
        "Säcken knyts i tre steg. Först får bussrösterna sina roller. Sedan lossnar rollerna en efter en — det var vi som satte dem där. Och först därefter visas ramverket, för berättelsen ska bära och kartan bara kvittera.",
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
            "Rösterna ligger framme dämpade, och vid varje klick lyser en upp och får sin roll stämplad. Publiken gör kopplingen själv — det är starkare än att någon förklarar den.",
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
            "Bilden öppnar intakt — samma omloppsbana som i prologen. Sedan lossar en roll per klick: kontaktlinjen dras tillbaka, namnet stryks över, föreställningen byts mot sitt förnekande. Kvar står mitten, orörd. Den var aldrig något av det där. Svaret flyttar hela ansvaret tillbaka till människan, och det är finalens gångjärn.",
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
            "Fem rader som alla börjar och slutar i människan. Det är hela relationskritiken i komprimerad form: det finns ingen punkt i kedjan där människan inte är med.",
        },
        {
          id: "huvudtesen",
          index: 89,
          chapter: "§ Final · Huvudtesen",
          display:
            "AI-litteracitet är att förstå tillräckligt om AI för att kunna bestämma vad AI ska få vara för dig. Och vad den aldrig ska få bli.",
          summary:
            "Meningen hela föreläsningen byggt mot. Den andra halvan är den nödvändiga: litteracitet handlar lika mycket om vad man väljer bort. Ett orakel, en tjänare, en vän, en rival — och rätten att säga nej till varje roll.",
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
            "Kartan har funnits där hela timmen utan att någon behövt läsa den. Ordningen är avsiktlig: berättelsen först, ramverket sedan. Publiken känner igen områdena som något de redan varit med om — och det kan ligga i ämnesplaneringsdokumentet i morgon.",
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
            "OECD:s fyra domäner visas först nu, och det är ett medvetet val: de fyra rollerna har gjort jobbet, ramverket kvitterar bara. Användbart i rektorssamtal och på föräldramöten — samma språk hela vägen upp till styrdokumenten. Det är också de fyra domäner som filtrerar hela den här webbplatsen.",
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
            "Frågorna är formulerade som elevfrågor med flit — det är så lektionerna faktiskt börjar. Varje station kopplas till en metod publiken redan sett, så miniprogrammet inte blir ett nytt åtagande utan en ordning på det de just fått.",
        },
        {
          id: "bron-till-workshopen",
          index: 93,
          chapter: "§ Bro · Webbsidan",
          heading: "Nu ska vi göra det undervisningsbart",
          summary:
            "Övergången till workshopen — och till den här webbplatsen. Poängen sägs uttryckligen: även de som inte är med på workshopen får allt, självgående.",
        },
        {
          id: "meningen",
          index: 94,
          chapter: "§ Final",
          display:
            "Det viktigaste mina elever behöver förstå om AI är … att jag kan välja vilken roll AI ska få.",
          summary:
            "En slotmaskin roterar timmens kandidater — en per kapitel, plus två som är summan av allt. Den stoppas muntligt på den sista. Samma mening avslutar workshopen, då skriftligt och med en undervisningsidé bredvid.",
        },
        {
          id: "tack",
          index: 95,
          chapter: "§ Tack",
          heading: "Eleverna pratar redan om AI",
          display:
            "Frågan är om vi hjälper dem att förstå vad de pratar med.",
          summary:
            "Den muntliga avslutningen: AI är inte ett orakel, en tjänare, en vän eller en rival. Det är roller vi ger den. Våra elever behöver inte kunna allt om artificiell intelligens, men de behöver förstå tillräckligt för att kunna välja när AI ska hjälpa, när den ska utmana, när den ska lämnas utanför och när en människa måste komma in. Och den lilla uppmaningen sist: välj en aktivitet, pröva den inom två veckor.",
        },
      ],
    },
  ],
};
