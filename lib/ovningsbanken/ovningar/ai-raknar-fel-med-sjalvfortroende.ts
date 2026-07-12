// Övningsbanken — AI:n räknar fel — med självförtroende (Möta AI · matematik)
// Elevpar agerar rättande lärare: 4–5 utskrivna AI-lösningar på aktuellt
// område, minst en med inplanterat fel. Rad för rad, bock/kryss, hitta exakt
// var det går snett. Poäng: att verifiera kräver att man KAN matten —
// AI:n formulerar fel lika självsäkert som rätt.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "ai-raknar-fel-med-sjalvfortroende",
  titel: "AI:n räknar fel — med självförtroende",
  blurb:
    "Elevparen rättar AI:ns mattelösningar rad för rad — minst en har ett inplanterat fel, och den ser precis lika säker ut som de andra.",
  syfte:
    "Det här är bankens första renodlade matteövning — och den tränar momentet som blir viktigare för varje modell som släpps: att verifiera. Eleverna får 4–5 AI-lösningar på aktuellt område där minst en har ett inplanterat fel, och rättar dem rad för rad som lärare. Poängen sitter i obalansen: AI:n formulerar fel med exakt samma självförtroende som rätt, så det enda som kan avslöja felet är att man kan matten själv. Verifiering är inte ett substitut för kunskap — det är kunskap.",

  domaner: ["mota"],
  aiLiteracyIds: [1, 4],

  tid: "30 min",
  tidMinuter: 30,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: false,
  material:
    "Utskrivna AI-lösningar till 4–5 uppgifter på aktuellt område, varav minst en med fel (läraren genererar i förväg — se Förberedelser). Grön och röd penna per par. Inga elevskärmar.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska bygga övningens material — och det fina är att du gör det med samma AI som övningen handlar om. Du genererar lösningar till uppgifter ni redan jobbar med, planterar ett subtilt fel i minst en, och rättar dem sedan själv. Rättningen är inte överkurs: det är där du kalibrerar svårigheten och känner var din egen blick vill börja skumma — för exakt där kommer elevernas blick också skumma. Räkna 20 minuter.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj 4–5 uppgifter från aktuellt område",
          body: "Sådana klassen redan räknar på — ekvationer, procent, geometri, derivata. Övningen funkar på alla nivåer eftersom felet planteras på just er nivå.",
        },
        {
          title: "Generera korrekta lösningar",
          body: "Be AI:n lösa uppgifterna steg för steg, en beräkning per rad, som en lärare som visar sin lösning på tavlan. Kontrollera att de faktiskt ÄR korrekta — räkna igenom dem.",
        },
        {
          title: "Plantera felet",
          body: "Använd prompten nedan för minst en av uppgifterna — eller använd ett äkta AI-felsvar du sprungit på, de är ofta ännu bättre eftersom de inte är designade att hittas.",
        },
        {
          title: "Kvalitetsgranska felet",
          body: "Lagom subtilt är nyckeln: ett teckenfel i rad tre som följer med genom resten av lösningen är perfekt. ”2+2=5” på första raden är för lätt; ett konceptfel som kräver kunskap över klassens nivå är för svårt. Tumregel: hittar du det själv på under en minut är det för lätt.",
        },
        {
          title: "Rätta materialet själv",
          body: "Bock/kryss per rad, som eleverna ska göra. Känn efter var du frestas att skumma — snygga mellanled invaggar. Notera raden där felet sitter i ditt eget facit.",
        },
      ],
    },
    {
      type: "example",
      label: "Prompt för att plantera felet",
      user: "Lös uppgiften nedan steg för steg, en beräkning per rad, som en säker mattelärare som visar sin lösning på tavlan. Gör ETT subtilt fel någonstans i mitten av lösningen — ett teckenfel, en felaktig förenkling eller ett tappat led — och låt resten av lösningen bygga vidare på felet så att slutsvaret ser rimligt ut. Avslöja inte var felet är.",
      note: "Kontrollera alltid resultatet själv: ibland gör AI:n felet för uppenbart, ibland råkar den göra ett ANNAT fel än det den tror — vilket i och för sig är en poäng i sig.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Börja samla grodor",
      body: "Spara äkta AI-felsvar när du stöter på dem i vardagen — en mapp med autentiska felräkningar på din kursnivå är guld. Äkta fel har en kvalitet inplanterade sällan når: de är fel på exakt det sätt modellen faktiskt är fel.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Generera och kvalitetsgranska lösningarna (se Prova själv). Blanda: minst en med fel, resten korrekta — det är blandningen som tvingar fram granskning i stället för gissning.",
        "Märk lösningarna A–E och skriv ut ett set per par. Behåll ett eget facit där felraden är markerad.",
        "Säg INTE hur många fel som finns — bara ”minst en lösning har fel”. Vet eleverna att det är exakt en slutar de granska när de hittat den.",
        "Bestäm rättarformatet: bock eller kryss i marginalen per rad, plus en mening vid varje kryss — ”här går det snett eftersom …”.",
        "Para ihop medvetet: två som räknar i ungefär samma takt granskar tillsammans; ett par där en drar hela lasset rättar inte, det diktera.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rama in rollbytet",
          body: "”I dag är ni lärarna. AI:n har lämnat in sina lösningar — och minst en av dem har fel. Den kommer inte se osäker ut. AI:n skriver fel med exakt samma självförtroende som den skriver rätt, så ni kan inte leta efter tvekan. Ni måste räkna.”",
          time: "5 min",
        },
        {
          title: "Rättning i par",
          body: "Rad för rad, bock eller kryss. Hård regel: ingen får underkänna en hel lösning utan att peka på EXAKT vilken rad det går snett på — och visa räkningen som bevisar det. Går ett par för fort: ”ni har bockat av C på två minuter — vilken rad var ni minst säkra på?”",
          time: "15 min",
        },
        {
          title: "Redovisning",
          body: "Par som hittat fel visar raden och förklarar VARFÖR den var lätt att missa — det är den frågan som lyfter övningen från felsökning till insikt. Om par är oense om en rad: låt dem argumentera med räkning inför klassen innan du avgör.",
          time: "7 min",
        },
        {
          title: "Landa poängen",
          body: "Två frågor: Hur såg felraden ut jämfört med raderna runt omkring? (Likadan.) Vad var det enda som kunde avslöja den? (Att ni kan matten.) Det är hela övningen i två svar — AI:n är en användbar räknekompis bara för den som kan kontrollera den.",
          time: "3 min",
        },
      ],
    },
    { type: "h", text: "Bedömning och efterarbete" },
    {
      type: "p",
      text: "Rättarprotokollen är formativt guld. En elev som kryssar rätt rad men motiverar fel har ett annat glapp än en som bockar av allt utan att se felet — och båda glappen är osynliga i vanlig inlämning. Återanvänd formatet som rutin: en AI-lösning att rätta som startuppgift när ett nytt moment har satt sig tar tio minuter och håller verifieringsmuskeln varm. Snabba par får nästa nivå direkt: skriv om felraden så att lösningen blir korrekt — och räkna om resten därifrån.",
    },
    {
      type: "callout",
      tone: "note",
      title: "”Kan vi inte bara be en annan AI rätta?”",
      body: "Förr eller senare föreslår en elev det — och det är en av övningens bästa öppningar. Kör frågan öppet: vem rättar rättaren? Om den andra AI:n godkänner felet, hur skulle ni veta? Diskussionen landar av sig själv i övningens kärna: någonstans i kedjan måste det finnas någon som faktiskt kan matten.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "I dag byter ni roller. AI:n har lämnat in sina mattelösningar — och du och din parkompis är lärarna som rättar. Minst en av lösningarna har ett fel. Ni vet inte vilken, och den kommer inte att se osäker ut: AI:n skriver fel med precis samma självförtroende som den skriver rätt.",
    },
    { type: "h", text: "Så funkar det" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ni får 4–5 utskrivna AI-lösningar, märkta A–E.",
        "Rätta rad för rad: bock i marginalen om raden stämmer, kryss om den inte gör det. Skumma inte — felen ser likadana ut som rätten.",
        "Vid varje kryss: skriv exakt VAD som går snett på raden och visa räkningen som bevisar det. ”Det känns fel” räcker inte.",
        "Skriv också en mening om varför felet var lätt att missa.",
        "Är ni oense om en rad? Räkna om den tillsammans — börja från raden innan och räkna framåt.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Rättarknepet",
      body: "Täck över resten av lösningen och räkna själv vidare från raden du granskar. Stämmer din nästa rad med AI:ns nästa rad? Det är så du hittar fel som ser snygga ut — du jämför med din egen räkning i stället för att låta dig övertygas av AI:ns.",
    },
    { type: "h", text: "Det här visar du efteråt" },
    {
      type: "p",
      text: "Lämna in era rättade lösningar med bockar och kryss — och för varje kryss: vilken rad, vad som går snett, och varför det var lätt att missa. Var beredda att visa er räkning för klassen om ni hittade felet.",
    },
  ],

  diskussion: [
    "Hur såg felraden ut jämfört med raderna runt omkring? Vad var det som INTE avslöjade den?",
    "Vad krävdes av er för att hitta felet? Hade ni hittat det i ett moment ni inte pluggat än?",
    "Om AI:n låter lika säker när den har fel som när den har rätt — vad betyder det för hur du använder den när du pluggar matte?",
    "En kompis föreslår: ”be en annan AI rätta i stället”. Vad är problemet med det?",
  ],

  fallgropar: [
    "Felet är för lätt (hittas på 30 sekunder) eller för svårt (kräver kunskap över klassens nivå) — i båda fallen dör granskningen. Kalibrera genom att rätta materialet själv: hittar du felet på under en minut behöver det bli subtilare.",
    "Eleverna underkänner hela lösningar på känsla utan att peka på rad. Kravet ”exakt rad plus räkning som bevisar” är övningens ryggrad — utan det tränas magkänsla i stället för matte.",
    "Alla lösningar har fel — då tränar ni misstänksamhet i stället för granskning. Bockarna på de korrekta lösningarna är lika viktiga som kryssen: att våga godkänna kräver också att man räknat.",
  ],

  evidens: [
    {
      ref: "ji-2023",
      relevance:
        "Hallucination är ett systembeteende, inte ett undantag: språkmodeller producerar felaktigt innehåll med samma flyt och säkerhet som korrekt — även i beräkningar. Övningen låter eleverna uppleva konsekvensen konkret: felraden ser likadan ut som de rätta raderna.",
    },
    {
      ref: "lee-2025",
      relevance:
        "Studien visar att tillit till det egna omdömet — inte AI-skepsis — är det som driver kritisk granskning av AI-utfall. Det är övningens kärna i forskningsform: den som kan matten granskar, den som bara litar på AI:n skummar.",
    },
  ],

  variationer: [
    "Åk 6 eller första gången: rätta två lösningar gemensamt på projektorn först — modellera bock/kryss-rutinen och rättarknepet högt, kör sen parvis med resten.",
    "Gymnasiet: låt paren efter rättningen skriva om felraden så att lösningen blir korrekt — och sedan konstruera ett eget subtilt felsvar till ett annat par. Att designa ett trovärdigt fel kräver mer matte än att hitta ett.",
  ],

  kedjarMed: ["detektiv-utan-detektor", "bygg-quizet"],

  kalla: "banken",
};
