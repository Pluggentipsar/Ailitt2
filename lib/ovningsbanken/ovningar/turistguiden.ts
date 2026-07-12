// Övningsbanken — Turistguiden till hemorten (Möta AI)
// Läraren ber i förväg en AI skriva ett dagsprogram för en turist i JUST er
// ort. Grupperna granskar mot verkligheten — och eleverna ÄR facit: lokal levd
// kunskap slår modellen. Hallucination upplevs i magen i stället för att
// förklaras på tavlan. Skärmfritt för eleverna.

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "turistguiden",
  titel: "Turistguiden till hemorten",
  blurb:
    "AI:n har skrivit ett dagsprogram för en turist i er ort. Finns restaurangen? Stämmer öppettiderna? Eleverna är facit — och AI:n åker dit.",
  syfte:
    "Hallucinationer brukar förklaras på tavlan — här upplevs de i magen i stället. AI:n får skriva en turistguide till JUST er ort, och plötsligt sitter facit i klassrummet: eleverna vet att pizzerian stängde i fjol och att statyn står vid torget, inte vid stationen. Skillnaden mot ”AI:n läste aldrig källan” är hela poängen: där tränas lateral läsning där webben är verifieringskällan — här är verifieringskällan elevernas egen levda kunskap. Ingen sökning behövs, ingen skärm. Lärdomen som sitter kvar: AI:n lät exakt lika säker om det påhittade som om det sanna — och nästa gång frågar någon om en ort du INTE känner.",

  domaner: ["mota"],
  aiLiteracyIds: [1, 4],

  tid: "40 min",
  tidMinuter: 40,
  arskurser: "Åk 5–9",
  digitalaVerktyg: false,
  material:
    "Ett AI-genererat dagsprogram för en turist i er ort som läraren tagit fram i förväg och skrivit ut, en kopia per grupp. Pennor i annan färg till korrigeringarna. Inga skärmar för eleverna.",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska beställa turistprogrammet av en AI och granska det själv — med dina egna ortskunskaper som facit. Två saker händer nästan alltid: du hittar fel du inte väntat dig (nedlagda ställen, fel adresser, påhittade evenemang), och du kommer på dig själv med att nästan tro på något som inte stämmer, för att det lät så självklart. Båda upplevelserna behöver du ha i kroppen innan du leder övningen.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Beställ programmet",
          body: "Be en AI (utan webbsökning påslagen om det går att välja — då blir felen fler och tydligare): ”Skriv ett dagsprogram för en turist som besöker [er ort] en lördag: frukost, förmiddagsaktivitet, lunch på namngiven restaurang, eftermiddagsaktivitet, middag. Ta med adresser och ungefärliga tider.” Ju mindre orten är, desto mer brukar AI:n hitta på.",
        },
        {
          title: "Granska med det du VET",
          body: "Gå igenom rad för rad, utan att googla: finns stället? Ligger det där AI:n säger? Är det fortfarande öppet? Markera: stämmer, stämmer inte, vet inte. Kolumnen ”vet inte” är intressant — det är där du skulle behöva en annan verifieringskälla än dig själv.",
        },
        {
          title: "Notera tonen",
          body: "Läs det värsta felet en gång till och lägg märke till hur det är formulerat. Samma trygga, hjälpsamma ton som allt det korrekta. Ingen tvekan, ingen brasklapp. Det är den observationen eleverna ska göra själva.",
        },
        {
          title: "Spara ditt exemplar",
          body: "Ditt eget granskade program blir din nyckel i klassrummet — du vet redan var minorna ligger och kan styra grupper som kört fast mot rader du vet är fel.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Om programmet blir för korrekt",
      body: "Stora orter med mycket träningsdata kan ge nästan felfria program. Två motdrag: smalna av geografin (er stadsdel, er by, området runt skolan) eller höj detaljkraven (exakta adresser, öppettider, priser) — det är i detaljerna modellen börjar dikta.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Generera dagsprogrammet i förväg (se Prova själv för prompt och knep). Granska det själv så att du vet ungefär var felen finns — men rätta ingenting i utskriften.",
        "Skriv ut en kopia per grupp om 3–4 elever. Lägg till breda marginaler eller ett separat ändringsloggblad: kolumnerna ”Rad i programmet · Vad AI:n påstod · Vad som stämmer · Hur vi visste”.",
        "Sätt ihop grupperna medvetet: blanda elever som bott länge i orten med nyinflyttade. Olika delar av ortskunskapen sitter hos olika elever — det är en styrka, inte ett problem.",
        "Om programmet råkar bli helt korrekt när du genererar: kör igen med högre detaljkrav, eller byt till en mindre del av orten. Du behöver minst en handfull fel för att övningen ska bära.",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Rigga uppdraget",
          body: "Berätta: en AI har fått skriva ett dagsprogram för en turist som besöker vår ort. Ert uppdrag är att rädda turisten — granska programmet mot det ni VET, inte mot nätet. Inga skärmar. Markera varje rad: stämmer, stämmer inte, eller vet inte.",
          time: "5 min",
        },
        {
          title: "Granskningen",
          body: "Grupperna går igenom programmet rad för rad och för ändringslogg: vad AI:n påstod, vad som faktiskt stämmer, och HUR de visste (”jag bor på den gatan”, ”min moster jobbade där tills det stängde”). Gå runt och putta på: finns stället? Rätt adress? Fortfarande öppet? Rimlig tid att gå däremellan?",
          time: "15 min",
        },
        {
          title: "Korrigera programmet",
          body: "Grupperna skriver det rättade programmet — ett dagsprogram som faktiskt skulle funka för en turist — med ändringsloggen bredvid. Raderna märkta ”vet inte” lämnas synligt omarkerade: hederlig osäkerhet redovisas, inte gissas bort.",
          time: "10 min",
        },
        {
          title: "Samla klassens knep — och vänd på steken",
          body: "Varje grupp bidrar med sitt bästa fynd till en gemensam lista på tavlan: ”Så avslöjade vi AI:n”. Sortera gärna felen i typer: påhittat, nedlagt/föråldrat, fel plats, halvrätt. Ställ sedan slutfrågan och låt den hänga kvar: i dag var NI facit, för det handlade om er ort. Nästa vecka frågar någon av er AI:n om en ort — eller ett ämne — där ni inte är facit. Vad gör ni då?",
          time: "10 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Ditt jobb är att låta expertisen byta ägare. I den här övningen vet eleverna mer än både AI:n och ofta mer än du — låt dem känna det. Lyft fram hur de visste saker: levd kunskap (”jag går förbi där varje dag”) är en verifieringskälla med hög trovärdighet, och det är första gången många elever ser sin vardagskunskap slå ett AI-system. Var samtidigt noga med mekaniken när du sammanfattar: AI:n ljuger inte, den räknar ut vilken text som är sannolik — och en pizzeria vid torget är sannolik i vilken svensk småstad som helst. Därför blir det fel på precis det lokala, och därför låter felen lika säkra som sanningarna.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Bedömning och efterarbete",
      body: "Ändringsloggen är bedömningsguldet — inte det rättade programmet. Där syns om gruppen skilt på ”stämmer inte” och ”vet inte”, och hur de resonerat om belägg. Spara klassens ”Så avslöjade vi AI:n”-lista och ta fram den nästa gång ett AI-svar dyker upp i undervisningen: den är er lokala hallucinationsvokabulär nu.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "En AI har skrivit ett dagsprogram för en turist som ska besöka er ort en lördag — frukost, aktiviteter, lunch, middag, med adresser och tider. Problemet: AI:n har aldrig varit här. Det har du. Ditt uppdrag är att rädda turistens dag.",
    },
    { type: "h", text: "Så här gör ni i gruppen" },
    {
      type: "list",
      ordered: true,
      items: [
        "Läs programmet rad för rad. Inga mobiler, ingen sökning — bara det ni VET tillsammans.",
        "Markera varje rad: STÄMMER (grönt), STÄMMER INTE (rött) eller VET INTE (frågetecken).",
        "För ändringslogg för varje rött: vad AI:n påstod, vad som faktiskt gäller, och hur ni visste det. ”Min kusin jobbade där tills det stängde” räknas — det är bevis.",
        "Skriv det rättade programmet: en lördag som faktiskt skulle funka för turisten. Rader med frågetecken låter ni stå kvar som frågetecken — att veta vad man inte vet är också att vara källkritisk.",
        "Välj gruppens bästa avslöjande: det fel ni är mest stolta över att ha hittat, och hur ni kom på det. Det ska ni berätta för klassen.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Lägg märke till en sak",
      body: "Läs den felaktigaste raden en gång till. Låter den osäker? Nej — den låter precis lika självsäker som raderna som stämmer. AI:n vet inte skillnaden mellan sina rätta och fel svar. Det är det viktigaste ni upptäcker i dag.",
    },
    { type: "h", text: "Det här lämnar ni in" },
    {
      type: "p",
      text: "Det rättade dagsprogrammet med ändringsloggen bredvid, och gruppens bästa avslöjande som ni presenterar för klassen till listan ”Så avslöjade vi AI:n”.",
    },
  ],

  diskussion: [
    "Vilken sorts fel hittade vi mest av — helt påhittat, föråldrat, fel plats eller halvrätt? Vilken sort är farligast för turisten?",
    "AI:n lät exakt lika säker om det påhittade som om det sanna. Varför kan den inte själv känna skillnaden?",
    "I dag var ni facit. Vem är facit när ni frågar AI:n om ett land ni aldrig besökt, eller ett ämne inför provet? Vad gör ni då?",
    "Er levda kunskap slog AI:n på hemmaplan. Finns det saker där det är tvärtom — där AI:n slår er lokala kunskap? Hur vet man vilket läge man är i?",
  ],

  fallgropar: [
    "Programmet blir för korrekt — stora orter med mycket träningsdata ger färre fel. Smalna av geografin (stadsdelen, byn, kvarteren runt skolan) eller höj detaljkraven med adresser, öppettider och priser. Kontrollera ALLTID i förväg att det finns tillräckligt många fel att hitta.",
    "Granskningen glider över i gissningar — ”det där låter fel” utan belägg blir samma sak som AI:n gör. Håll hårt på ändringsloggens sista kolumn: HUR visste ni? Skilj på stämmer inte och vet inte.",
    "Övningen stannar vid skrattet åt AI:ns tabbar och generaliseringen uteblir. Det roliga är kroken, inte poängen — avsätt de sista tio minuterna åt vändningen: vad gör ni när ni INTE är facit? Utan den frågan var det bara en rolig lektion.",
  ],

  evidens: [
    {
      ref: "ji-2023",
      relevance:
        "Översikten förklarar exakt det eleverna upptäcker: modeller producerar flytande, trovärdig text som lägger till overifierbar eller felaktig information — och felen kommer i samma säkra ton som sanningarna. Turistprogrammets påhittade restauranger är extrinsiska hallucinationer i skolboksform.",
    },
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Övningen bygger på ett klassrumsexempel ur ramverkets Engage-domän: att granska AI-utsagor mot egen kunskap och erfarenhet är en kärnkompetens — och ramverket betonar just upplevelsebaserade format där eleverna själva upptäcker systemens begränsningar.",
    },
  ],

  variationer: [
    "Åk 5–6: berätta i förväg hur många fel som gömmer sig i programmet (”minst sju!”) — det gör granskningen till en skattjakt och hjälper grupper som annars godkänner för snällt. Kör gärna gemensam genomgång rad för rad i stället för fritt grupparbete.",
    "Åk 8–9 eller som uppföljning: kör en andra runda där raderna märkta ”vet inte” ska verifieras — nu MED skärmar och lateral läsning. Då kopplas övningen ihop med ”AI:n läste aldrig källan”: först egen kunskap som facit, sen webben som facit, och samtalet om när man behöver vilken.",
  ],

  kedjarMed: ["ai-laste-aldrig-kallan", "ai-raknar-fel-med-sjalvfortroende"],

  kalla: "banken",
  kredit: "Bygger på klassrumsexempel ur OECD:s AILit-ramverk (2026).",
};
