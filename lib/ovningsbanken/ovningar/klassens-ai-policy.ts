// Övningsbanken — Klassens AI-policy (Forma AI + Styra AI)
// Bankens första flerlektionsprojekt: fyra lektioner från anonym kartläggning
// av klassens faktiska AI-användning, via fördjupning i grupper (bankens
// övningar som stationer), till ett policyförslag på max en sida — som
// presenteras för en RIKTIG mottagare: rektor, elevråd eller föräldramöte.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "klassens-ai-policy",
  titel: "Klassens AI-policy",
  blurb:
    "Fyra lektioner: kartlägg hur klassen faktiskt använder AI, fördjupa er i knäckfrågorna, skriv policyn på en sida — och presentera den för rektorn på riktigt.",
  syfte:
    "Nästan alla AI-regler i skolan skrivs OM elever, inte AV dem. Det här projektet vänder på det: klassen kartlägger sin egen faktiska användning anonymt, fördjupar sig i knäckfrågorna, skriver ett policyförslag med konkreta regler och motiveringar — och lämnar över det till någon som faktiskt kan besluta. Det är bankens första flerlektionsprojekt, och det är medvetet: Forma AI går inte att träna på 40 minuter. En regel man själv formulerat och försvarat inför rektorn sitter dessutom djupare än tio förbud på ett papper från skolledningen.",

  domaner: ["forma", "styra"],
  aiLiteracyIds: [3, 5, 6],

  tid: "3–4 lektioner",
  tidMinuter: 180,
  arskurser: "Åk 8–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Anonymt enkätverktyg (digitalt formulär eller lappar i låda), skolans/kommunens befintliga AI-regler om de finns (fråga rektor eller IKT-ansvarig), skrivverktyg till L3 och tillgång till en AI som remissinstans. L2:s stationer kan köras helt utan skärmar. Viktigast av allt: en bokad, riktig mottagare till L4.",
  varning:
    "Enkäten i L1 frågar om beteenden som kan uppfattas som regelbrott. Anonymiteten måste vara äkta och uttalad — inga namn, ingen jakt på vem som svarat vad. Är förtroendet naggat i klassen: kör lappar i låda i stället för digitalt formulär.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska göra projektets kärnmoment i miniformat på egen hand: svara ärligt på enkäten själv, skriva tre policyregler och köra dem genom en AI som remissinstans. Det tar en halvtimme och ger dig två saker: du upptäcker hur svårt det är att skriva en regel som är konkret utan att bli fyrkantig — och du ser vad AI-remissen faktiskt tillför, så att du kan kräva samma sak av elevernas grupper.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Svara på din egen enkät",
          body: "Skriv 5–6 enkätfrågor om AI-vanor (förslag finns under Förberedelser) och svara själv, helt ärligt — även på det du inte skulle säga högt i personalrummet. Känslan av att svara ärligt på en känslig fråga är exakt vad eleverna behöver anonymiteten för.",
        },
        {
          title: "Hitta befintliga regler",
          body: "Ta reda på vad som faktiskt gäller: har skolan eller kommunen en AI-riktlinje? Fråga rektor eller IKT-ansvarig. Ofta är svaret ”det finns något halvfärdigt” — vilket är ett utmärkt utgångsläge för projektet: klassen fyller ett verkligt tomrum.",
        },
        {
          title: "Skriv tre regler",
          body: "Formulera tre policyregler för AI i din egen undervisning. Kravet du sen ställer på eleverna: konkret handling plus motivering. Inte ”AI ska användas ansvarsfullt” utan ”AI får användas för att förklara begrepp, men inte för att skriva inlämningstext, eftersom...”. Känn hur mycket svårare den andra sorten är.",
        },
        {
          title: "Kör AI-remissen",
          body: "Klistra in dina regler i en AI med prompten: ”Här är ett utkast till AI-policy. Vad har vi missat? Vilka situationer täcker reglerna inte? Var är de otydliga eller orättvisa?” Notera vad remissen ger — och vad du stryker för att AI:n har fel. Båda delarna ska eleverna göra.",
        },
        {
          title: "Testa hisspitchen",
          body: "Sammanfatta dina tre regler muntligt på en minut, som om rektorn stod i dörren. Om det inte går att motivera dem kort är de inte färdiga — samma test möter elevernas policy i L4.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska ta med dig",
      body: "Projektets kvalitet avgörs av två saker du nu känt själv: skillnaden mellan floskelregler och konkreta regler med motivering, och skillnaden mellan att skriva för skrivbordslådan och att skriva för en mottagare som faktiskt kommer. Boka mottagaren INNAN du startar L1 — det är den enskilt viktigaste förberedelsen.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Boka mottagaren först av allt: rektor, elevrådet eller ett föräldramöte som tar emot policyn i L4. Riktig mottagare är projektets motor — utan den blir det en skrivövning. Säg till mottagaren att komma beredd att ge respons, inte bara ta emot artigt.",
        "Leta rätt på skolans/kommunens befintliga AI-regler (rektor, IKT-ansvarig, kommunens riktlinjer). Finns inget — det är också ett fynd som ger projektet legitimitet: klassen skriver det som saknas.",
        "Bygg enkäten till L1, anonym på riktigt. Frågeförslag: Hur ofta använder du AI för skolarbete? Till vad (förklara/sammanfatta/skriva/räkna/annat)? Har du lämnat in något AI-skrivet som ditt eget? Vet du vad som är tillåtet? Vad oroar dig med AI i skolan? Blanda frekvensfrågor med öppna frågor.",
        "Välj fördjupningsområden till L2 och para med bankens övningar som stationer: fusk/bedömning (”Detektiv utan detektor”), integritet (”Model card för skolans AI”), tillgänglighet/likvärdighet, miljö/resurser. Fyra grupper är lagom — anpassa efter klassen.",
        "Bestäm policyformatet i förväg och håll det hårt: max EN sida, varje regel som konkret handling + motivering. Begränsningen är pedagogiken — en sida tvingar fram prioriteringar.",
      ],
    },
    { type: "h", text: "Genomförande — lektionsindelning" },
    {
      type: "steps",
      steps: [
        {
          title: "L1 · Kartlägg nuläget",
          body: "Kör den anonyma enkäten först, orörd av diskussion — sen visas resultatet direkt för klassen. Gapet mellan vad folk trodde och vad enkäten visar är lektionens energikälla. Granska därefter befintliga regler tillsammans, om de finns: förstår vi dem? Täcker de vår verklighet enligt enkäten? Om regler saknas: vad betyder det att ingen bestämt? Avsluta med att klassen listar 3–5 knäckfrågor som policyn måste svara på.",
          time: "Lektion 1 · 60 min",
        },
        {
          title: "L2 · Undersök",
          body: "Varje grupp fördjupar ett område: fusk/bedömning, integritet, tillgänglighet, miljö. Kör bankens övningar som stationer där de passar — detektorövningen under fusk/bedömning, model card-övningen under integritet — och låt grupperna därutöver samla belägg: vad säger enkäten om vårt område, vad säger en källa utanför klassrummet? Gruppens leverans: de tre viktigaste sakerna policyn måste säga om vårt område, med belägg.",
          time: "Lektion 2 · 60 min",
        },
        {
          title: "L3 · Skriv policyförslaget",
          body: "Grupperna föreslår regler för sitt område; klassen (eller en redaktionsgrupp) sätter ihop till EN sida: konkreta regler med motivering, inte floskler. Sen AI-remissen: ”Här är vårt policyförslag. Vad har vi missat? Vilka situationer täcks inte? Var är vi otydliga eller orättvisa?” Klassen tar ställning till varje remissvar — ta in eller avvisa, med skäl. Notera ironin öppet: vi använder AI för att granska våra AI-regler. Är det okej enligt vår egen policy?",
          time: "Lektion 3 · 60 min",
        },
        {
          title: "L4 · Presentera för riktig mottagare",
          body: "Klassen presenterar policyn för rektor, elevråd eller föräldramöte: knäckfrågorna, reglerna, motiveringarna — och vad enkäten visade (i aggregerad form). Kräv respons av mottagaren: vad tar ni med er? Vad händer nu? Boka en uppföljning, även liten — policyn ska landa någonstans, inte bara applåderas. Kan genomföras som halv lektion om presentationen sker på annan tid, t.ex. föräldramöte.",
          time: "Lektion 4 · 30–60 min",
        },
      ],
    },
    { type: "h", text: "Bedömning och efterarbete" },
    {
      type: "p",
      text: "Bedöm processen, inte bara sidan: gruppernas L2-leveranser (tre saker med belägg), hur remissvaren hanterades i L3 (togs kritik in med skäl, avvisades den med skäl?) och den muntliga motiveringen i L4. Själva policysidan är ett utmärkt underlag för resonemangsbetyg i samhällskunskap och svenska — argumentation, källhantering, mottagaranpassning. Efterarbetet är lika viktigt: följ upp vad mottagaren faktiskt gjorde. Antogs något? Skickades den vidare? Även ett nej med motivering är en lektion i hur beslut fattas — och ett läge att fråga: vad gör vi då?",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Skydda enkäten hela vägen",
      body: "Resultatet redovisas bara aggregerat — aldrig enskilda svar, aldrig gissningar om vem som svarat vad, inte heller på föräldramötet. Om enkäten visar utbrett regelbrott: behandla det som systeminformation (”reglerna och verkligheten har glidit isär”), inte som bekännelser att agera på. Bryter du det förtroendet en gång får du aldrig ärliga svar igen.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Vem har bestämt vad som gäller för AI i skolan? Oftast: någon annan än de som använder den mest — ni. De närmaste lektionerna ändrar vi på det. Ni ska ta reda på hur AI faktiskt används i klassen, sätta er in i de svåra frågorna och skriva ett policyförslag som presenteras för någon som kan besluta på riktigt — rektorn, elevrådet eller föräldrarna.",
    },
    { type: "h", text: "Så här arbetar ni, lektion för lektion" },
    {
      type: "list",
      ordered: true,
      items: [
        "Lektion 1: Svara på den anonyma enkäten — ärligt. Ingen kan se vem som svarat vad, och det är hela poängen: policyn måste bygga på hur det ÄR, inte hur det borde vara. Sen granskar vi reglerna som redan finns (om några finns) och listar frågorna vår policy måste svara på.",
        "Lektion 2: Din grupp fördjupar sig i ett område — fusk och bedömning, integritet, tillgänglighet eller miljö. Ni ska landa i de tre viktigaste sakerna policyn måste säga om ert område, och kunna visa belägg: vad säger enkäten, vad säger källor utanför klassrummet?",
        "Lektion 3: Vi skriver policyn tillsammans — max EN sida. Varje regel ska vara konkret (vad får man göra, vad får man inte) och ha en motivering (varför). ”Använd AI ansvarsfullt” räknas inte — det är en floskel, inte en regel. Sen skickar vi utkastet på remiss till en AI: vad har vi missat? Ni bestämmer vad som tas in och vad som avvisas — med skäl.",
        "Lektion 4: Ni presenterar policyn för mottagaren. Var beredda att försvara varje regel: varför just den här gränsen? Vad bygger den på? Kräv något tillbaka — vad händer med vårt förslag nu?",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Det här är inte en låtsasuppgift",
      body: "Policyn lämnas till någon som kan påverka på riktigt. Skriv varje regel som om den kommer att gälla — för det kan den. Och lägg märke till en sak i lektion 3: ni använder AI för att granska era egna AI-regler. Är det tillåtet enligt er policy? Det är en av de bästa frågorna ni kan ställa er.",
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "p",
      text: "Gruppens tre punkter med belägg (efter lektion 2), klassens gemensamma policysida med regler och motiveringar (efter lektion 3), och presentationen för mottagaren (lektion 4). Efteråt skriver du kort själv: vilken regel var svårast att enas om — och var stod du?",
    },
  ],

  diskussion: [
    "Vem har egentligen makten över AI-reglerna i skolan i dag — rektorn, kommunen, lärarna, AI-företagen eller ni? Och vem BORDE ha den?",
    "Vilken regel var svårast att enas om? Vad säger oenigheten — handlar den om fakta eller om värderingar?",
    "AI-remissen: vad tog ni in, vad avvisade ni — och hur avgjorde ni när AI:n hade rätt om er egen policy?",
    "Er policy gäller klassen. Skulle den hålla för hela skolan? Vad skulle behöva ändras — och varför är det svårare att skriva regler ju fler de gäller?",
  ],

  fallgropar: [
    "Ingen riktig mottagare bokad — projektet blir en skrivövning som dör i en mapp, och eleverna genomskådar det direkt. Boka rektor/elevråd/föräldramöte INNAN lektion 1, och säg det till klassen från start: det förändrar hur de skriver.",
    "Policyn blir floskler (”använd AI klokt och ansvarsfullt”) eller ren önskelista (”AI ska vara tillåtet på allt”). Håll formkravet stenhårt: konkret handling + motivering, max en sida. Testfråga till varje regel: skulle två elever tolka den likadant i en verklig situation?",
    "Enkäten känns övervakande i stället för frigörande — då svarar eleverna taktiskt och hela faktabasen blir fel. Anonymitet på riktigt, säg det uttalat, redovisa bara aggregerat. Vid tunt förtroende: papperslappar i låda slår digitalt formulär.",
  ],

  evidens: [
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Projektet är Shape-domänen (Forma AI) i praktiken: ramverkets mål är elever som ”responsible creators, not passive consumers” av AI-system — här går klassen från att lyda regler någon annan skrivit till att formulera, motivera och driva egna.",
    },
    {
      ref: "zimmerman-2002",
      relevance:
        "Självreglerat lärande i tre faser — planera, genomföra, utvärdera — är projektets skelett: eleverna kartlägger sin egen användning, sätter egna regler och följer upp mot en verklig mottagare. Regler man själv formulerat är, enligt modellen, de regler man faktiskt reglerar sig efter.",
    },
  ],

  variationer: [
    "Kortversion (2 lektioner): hoppa över gruppstationerna — kör enkät + knäckfrågor första lektionen, skriv och AI-remissa policyn den andra, och lämna över policyn skriftligt till mottagaren med begäran om skriftligt svar. Behåll mottagaren; stryk hellre allt annat.",
    "Fördjupning (gymnasiet): låt klassen jämföra sin färdiga policy med kommunens faktiska AI-riktlinje och skriva ett formellt remissvar till förvaltningen — eller låt elevrådet driva policyn vidare som ärende till skolans ledningsgrupp. Då tränas nästa nivå av Forma AI: att påverka system utanför det egna klassrummet.",
  ],

  kedjarMed: ["model-card-for-skolans-ai", "ai-fria-kontrollpunkter"],

  kalla: "banken",
};
