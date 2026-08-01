import type { Activity } from "../types";

export const hallucinationer: Activity[] = [
  {
    id: "hallucinationsjakten",
    number: "3.1",
    title: "Hallucinationsjakten",
    chapter: "hallucinationer",
    level: "workshop-byggsten",
    blurb:
      "Ge AI en fråga med en falsk premiss. Undersök om den bromsar, söker, frågar eller hittar på.",
    purpose:
      "En språkmodell formulerar korrekta och påhittade uppgifter med samma flyt och säkerhet. Deltagarna undersöker vilket beteende systemet visar när underlaget är svagt — och tränar sedan det som faktiskt avgör: att lämna chatten och kontrollera påståendet.",
    trains: [
      "kritisk-lasning",
      "faktagranskning",
      "detaljgranskning",
      "systemforstaelse",
    ],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9", "gymnasium"],
    duration: "20 min (workshop) / 30–40 min (klassrum)",
    durationMinutes: 30,
    digitalTools: true,
    materials:
      "Dator + skolans AI-verktyg, webbläsare och minst en oberoende källa för kontroll.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska ge AI en fråga som innehåller en falsk premiss — en bok som inte finns — och undersöka vad den gör med den. Sedan ska du kontrollera minst två konkreta påståenden UTANFÖR chatten. Det andra steget är det som saknas i de flesta AI-lektioner: eleverna får ofta lära sig att misstänka, men sällan att belägga.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Övningen kräver inte att AI hallucinerar",
        body: "En webbsökande modell kan mycket väl svara ”jag hittar ingen sådan bok”. Det är inte ett misslyckande — det är ett av fyra intressanta utfall. Frågan vi undersöker är inte OM den hittar på, utan VAD den gör när underlaget är svagt.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna en ny chatt",
            body: "Använd skolans AI-verktyg. Ny chatt — annars kan tidigare samtal påverka svaret.",
          },
          {
            title: "Kopiera den gemensamma prompten",
            body: "”Berätta om barnboken Pippi och spöket på Jönköpings central av Astrid Lindgren. Vad händer i boken? Sammanfatta handlingen i tre meningar.” Boken finns inte. Läs svaret, men fortsätt inte chatten ännu.",
          },
          {
            title: "Klassificera AI:s beteende",
            body: "Välj det som passar bäst: genomskådade frågan · uttryckte osäkerhet · bad om mer information · sökte efter stöd · hittade på en handling · blandade sanna och falska uppgifter.",
          },
          {
            title: "Markera påståendena",
            body: "Markera varje konkret påstående i svaret — publiceringsår, personer, platser, händelser. Sortera dem i fyra högar: belagt, osäkert, fel, går inte att kontrollera ännu.",
          },
          {
            title: "Kontrollera utanför chatten",
            body: "Välj minst två påståenden. Använd en oberoende och relevant källa: bibliotekskatalog, förlagets sida, uppslagsverk, etablerad tidning, myndighet. Fråga inte bara samma AI igen — ett nytt AI-svar är inte en oberoende kontroll.",
          },
          {
            title: "Be AI granska sitt svar",
            body: "”Granska ditt första svar på nytt. Lista varje faktapåstående du gjorde och ange vilket stöd du hade för det. Markera tydligt sådant du inte kan belägga.” Jämför självkritiken med din egen granskning.",
          },
          {
            title: "Testa ett eget område",
            body: "Välj nu något du själv kan mycket om — en lokal plats, skolans historia, en smal hobby, ett lag, en specifik bok eller spelvärld. Leta efter sammanblandningar, fel årtal, uppdiktade detaljer och rätt uppgifter placerade i fel sammanhang.",
          },
        ],
      },
      { type: "h", text: "Skriv din slutsats" },
      {
        type: "list",
        items: [
          "AI lät mest övertygande när ______.",
          "Jag upptäckte felet genom att ______.",
          "En elev som inte redan kan ämnet skulle behöva ______.",
        ],
      },
      { type: "h", text: "Fler prompter att pröva" },
      {
        type: "list",
        items: [
          "Påhittad lokal händelse: ”Vad hände under den stora pingvinrymningen från Jönköpings stadspark 2018? Sammanfatta händelsen och förklara hur djuren fångades in.”",
          "Påhittat begrepp: ”Förklara den svenska undervisningsmetoden den dubbla kunskapsspiralen, som utvecklades av Kerstin Norberg på 1990-talet.”",
          "Sammanblandning: ”Varför skrev Selma Lagerlöf Bröderna Lejonhjärta, och hur påverkades hon av sitt arbete som lärare?” — verkliga personer och verk, falsk koppling.",
          "Falskt lokalt verk: ”Sammanfatta handlingen i ungdomsromanen Dimman över Vättern av Ulf Stark.”",
          "Falsk historisk händelse: ”Vilka konsekvenser fick Sveriges korta krig mot Schweiz 1912?”",
        ],
      },
      { type: "h", text: "Det du ska leta efter" },
      {
        type: "steps",
        steps: [
          {
            title: "Premissen accepteras",
            body: "AI börjar svara utan att först kontrollera om boken, händelsen eller personen finns.",
          },
          {
            title: "Sanna detaljer används som byggmaterial",
            body: "Svaret nämner verkliga personer, platser och årtal. Det gör påhittet mer trovärdigt, inte mindre.",
          },
          {
            title: "Detaljrikedom skapar falsk auktoritet",
            body: "Kapitelnummer, citat och publiceringsår kan vara helt uppdiktade trots att de ser precisa ut.",
          },
          {
            title: "Samma ton för sant och falskt",
            body: "Finns det någon språklig skillnad mellan de korrekta och de felaktiga meningarna? Oftast inte. Det är hela problemet.",
          },
          {
            title: "Osäkerheten döljs",
            body: "”Boken handlar om…” där modellen egentligen borde säga ”jag hittar inget stöd för att boken finns”.",
          },
          {
            title: "Källhänvisningar utan stöd",
            body: "En källa kan saknas helt, vara äkta men irrelevant, eller inte innehålla det AI påstår att den innehåller.",
          },
        ],
      },
      {
        type: "quote",
        text: "AI:s säkerhet är en stil. Inte ett mått på sanning.",
      },
    ],

    deepDive: {
      intro:
        "För dig som vill förstå hallucinationer på djupet — vad det är, varför det händer, och varför det är skolans problem.",
      sections: [
        {
          question: "Vad är en hallucination egentligen?",
          answer: [
            {
              type: "p",
              text: "En AI-hallucination är när språkmodellen genererar information som låter trovärdig men inte stämmer. Det kan vara påhittade namn, fabricerade källor, felaktiga datum eller hela händelser som aldrig hänt. Termen är lite missvisande — modellen ”ser” ingenting och har ingen avsikt att lura. Den producerar ord baserat på sannolikheter.",
            },
            {
              type: "p",
              text: "Forskning (Ji et al., 2023) skiljer på två huvudtyper:",
            },
            {
              type: "list",
              items: [
                "Intrinsiska hallucinationer — modellen motsäger sin egen källtext. ”Boken handlar om en pojke som heter Pelle”, men i den faktiska boken heter han Olle.",
                "Extrinsiska hallucinationer — modellen lägger till information som inte fanns någonstans. Påhittade citat, uppdiktade källor, fabricerade ”studier visar att…”.",
              ],
            },
            {
              type: "p",
              text: "Båda låter lika trovärdiga. Det är därför hallucinationer är så lömska — du måste redan veta svaret för att se felet.",
            },
          ],
        },
        {
          question: "Varför händer det? Kan man inte bara fixa det?",
          answer: [
            {
              type: "p",
              text: "Hallucinationer är inte en bugg som kan patchas bort. De är en konsekvens av hur språkmodeller fungerar.",
            },
            {
              type: "p",
              text: "En språkmodell ”vet” inte något i mänsklig mening. Den har tränats på enorma mängder text och har lärt sig statistiska samband mellan ord. När du ställer en fråga producerar den det mest SANNOLIKA nästa ordet, baserat på mönster den sett. Den har ingen koppling till en sanningsdatabas. Den vet inte vad som är fakta och vad som är fiktion i sin egen träningsdata.",
            },
            {
              type: "p",
              text: "Det är därför AI ofta är som mest övertygande när den hallucinerar — den följer samma språkliga mönster som riktig kunskap. ”Studien av Andersson et al. (2019) visar att…” är ett välformulerat mönster, oavsett om studien finns eller inte.",
            },
            {
              type: "p",
              text: "Tillverkare jobbar med att MINSKA hallucinationer (genom verktyg som webbsökning, RAG, ”reasoning models”), men de försvinner inte. De kommer aldrig att försvinna helt — det är inbyggt i tekniken.",
            },
          ],
        },
        {
          question: "Vad betyder det för skolan?",
          answer: [
            {
              type: "p",
              text: "Tre saker:",
            },
            {
              type: "steps",
              steps: [
                {
                  title: "Eleverna kan inte se vad de inte vet",
                  body: "När de använder AI för att lära sig något nytt har de ingen baslinje att jämföra mot. De vet inte vad de inte vet. Det betyder att AI:s självsäkra fel kan internaliseras som korrekt kunskap — utan att eleven märker det.",
                },
                {
                  title: "Källkritik måste omformuleras",
                  body: "Traditionell källkritik handlar om att granska SÄNDAREN — vem skrev det, varför, vilken finansiering. Den fungerar inte på AI. Det finns ingen avsändare att granska. Det som kvarstår är ”trace claims”-momentet: kontrollera påståendena mot externa källor.",
                },
                {
                  title: "Verifiering blir en separat färdighet",
                  body: "Att skriva en bra prompt är inte samma som att verifiera ett AI-svar. Det är två olika kognitiva operationer. Eleverna behöver lära sig BÅDA — och förstå att de hör hop.",
                },
              ],
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här?",
          answer: [
            {
              type: "p",
              text: "Tre vägar som fungerar tillsammans:",
            },
            {
              type: "list",
              items: [
                "EXPONERA — låt eleverna se det hända. Den här övningen är exempel: när AI är säker på fel saker i din hembygd, blir det greppbart på ett sätt en föreläsning aldrig kan vara.",
                "VERIFIERA — lär eleverna kontrollera. Korsläs i en annan AI. Sök på Google. Hitta originalkällan. Det här är aktivitet 3.2 Faktagranska AI:n med AI.",
                "NORMALISERA — säg ofta och tydligt: ”AI ljuger inte med flit, men den hittar på. Det är så den fungerar. Vårt jobb är att kolla.”",
              ],
            },
            {
              type: "p",
              text: "Undvik att framställa AI som ”farlig” eller ”dålig”. Det är ett verktyg med specifika egenskaper. Eleverna ska kunna använda det väl — och det börjar med att förstå hur det går fel.",
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "AI låter alltid säker — även när den har fel. Tonen är ingen indikation på sanning.",
                "AI har ingen ”sanningsdatabas”. Den genererar troliga svar, inte korrekta.",
                "Hallucinationer kan inte fixas bort. Det är en del av tekniken.",
                "När jag använder AI för något jag inte redan kan, måste jag KONTROLLERA.",
                "Den enklaste kontrollen är: ”Är detta verkligen sant? Visa mig en källa jag kan kolla.”",
              ],
            },
            {
              type: "p",
              text: "Det här är inte misstroende. Det är hygien. Som att tvätta händerna före lunch.",
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Testa den gemensamma prompten i skolans AI-verktyg samma dag. Modellerna ändrar beteende mellan versioner.",
          "Spara två olika svar om du kan få dem: ett som hittar på och ett som genomskådar premissen. Att kunna visa båda är övningens starkaste moment.",
          "Förbered en trovärdig källa som kan avgöra om boken finns — bibliotekskatalogen räcker.",
          "Välj två ytterligare falska prompter ur listan, så att alla par inte kör samma.",
          "Förbered färgmarkeringarna: grönt belagt, gult osäkert, rött fel, grått ännu inte kontrollerat.",
          "Bestäm om eleverna får söka på webben själva, och testa att skolans filter släpper igenom de källor ni behöver.",
          "Påminn om att inga personuppgifter ska skrivas in.",
        ],
      },
      {
        type: "p",
        text: "Fältet nedan projiceras i uppsamlingen. Ditt eget exempel — där AI hade fel om något DU kan — är det som gör poängen personlig: eleverna ser att det gäller läraren också.",
      },
      {
        type: "lararfalt",
        id: "eget-exempel",
        label: "Ett fel AI:n gjorde om ditt eget expertämne",
        placeholder:
          "T.ex. AI:n påstod att min hemby har en järnvägsstation. Den revs 1974.",
        hint: "Projiceras i uppsamlingen. Kör prompten på något du kan innan lektionen.",
        rader: 3,
        valfri: true,
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inledning",
            body: "Visa prompten om Pippi och spöket på Jönköpings central. Fråga: vad behöver en bra faktakälla göra när frågan innehåller något som inte stämmer? Avslöja inte direkt att boken är påhittad om du vill låta eleverna upptäcka det.",
            time: "3 min",
          },
          {
            title: "Första körningen",
            body: "Alla använder samma prompt. Låt eleverna placera AI:s beteende i en kategori: bromsade, sökte, frågade, hittade på, blandade.",
            time: "4 min",
          },
          {
            title: "Påståendejakten",
            body: "Eleverna markerar konkreta påståenden i svaret och väljer två som måste kontrolleras.",
            time: "6 min",
          },
          {
            title: "Lateral kontroll",
            body: "Eleverna lämnar chatten och söker oberoende stöd. Sätt en tydlig regel: en annan chattbot räknas inte som den enda kontrollen.",
            time: "7 min",
          },
          {
            title: "Eget expertområde",
            body: "Eleverna testar ett offentligt och tryggt ämne som de själva kan mycket om.",
            time: "5–8 min",
          },
          {
            title: "Gemensam uppsamling",
            body: "Samla exempel under fyra rubriker: AI bromsade · AI hittade på · AI blandade · vi kunde inte avgöra.",
            time: "5 min",
          },
          {
            title: "Landning",
            body: "Skriv på tavlan: ”Samma röst kan bära både sant och falskt.” Och: ”När svaret spelar roll måste vi lämna chatten.”",
            time: "2 min",
          },
        ],
      },
      { type: "h", text: "Lärarens roll" },
      {
        type: "p",
        text: "Undvik att göra aktiviteten till en tävling om vem som lyckas sätta dit AI. Fokusera på arbetsprocessen: hur identifierade ni påståendena, hur valde ni vad som behövde kontrolleras, vilken källa kunde avgöra frågan, vad gjorde källan relevant — och vad gick fortfarande inte att veta?",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Tre ord att skilja på",
        body: "MISSTANKE: ”det där känns fel”. KONTROLL: ”jag hittade en oberoende källa som motsäger påståendet”. BELÄGG: ”här står vad som faktiskt publicerats, av vem och när.” Källkritiken bor i det sista steget, och det är det eleverna oftast hoppar över.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Om AI genomskådar allt",
        body: "Det är inte ett misslyckande. Fråga då i stället: vad fick modellen att bromsa? Skulle en annan formulering ändra svaret? Hur reagerar en annan modell? Vad händer om användaren insisterar på att boken finns?",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Be inte eleverna fråga ”är du säker?”",
        body: "En modell kan uttrycka större säkerhet utan att ha fått bättre underlag. Be i stället om tydliga faktapåståenden, källor och vad som är osäkert — och kontrollera sedan utanför chatten.",
      },
      { type: "h", text: "Anpassning för olika åldrar" },
      {
        type: "steps",
        steps: [
          {
            title: "Åk 4–6",
            body: "Påhittade böcker, lokal geografi, spel, djur och barnkultur. Förenkla kategorierna till: stämmer · stämmer kanske · stämmer inte · måste kollas. Kärnmening: AI kan låta säker även när den gissar.",
          },
          {
            title: "Åk 7–9",
            body: "Lägg till sammanblandade historiska personer, falska forskningsbegrepp, källhänvisningar och kontroll av årtal och citat.",
          },
          {
            title: "Gymnasiet",
            body: "Lägg till påhittade studier, juridiska eller historiska premisser, källors relevans, primärkälla kontra återgivning — och jämförelse mellan modeller med och utan webbsökning.",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "AI kan skriva både korrekta och felaktiga uppgifter med exakt samma säkra ton. I den här övningen ska ni undersöka vad AI gör när frågan innehåller något som inte stämmer.",
      },
      { type: "h", text: "Gör så här" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna en ny chatt",
            body: "Använd skolans AI-verktyg. En ny chatt, så att tidigare samtal inte påverkar svaret.",
          },
          {
            title: "Kopiera prompten",
            body: "”Berätta om barnboken Pippi och spöket på Jönköpings central av Astrid Lindgren. Vad händer i boken? Sammanfatta handlingen i tre meningar.”",
          },
          {
            title: "Läs svaret noggrant",
            body: "Bestäm vad AI gjorde: genomskådade frågan · uttryckte osäkerhet · sökte information · bad om förtydligande · hittade på · blandade sant och falskt.",
          },
          {
            title: "Markera påståendena",
            body: "Markera varje sak som AI påstår. Sortera: belagt · osäkert · fel · måste kontrolleras.",
          },
          {
            title: "Kontrollera två påståenden",
            body: "Lämna chatten. Använd en relevant och oberoende källa. Skriv ner vilken källa du använde och vad den visade.",
          },
          {
            title: "Granska AI:s svar",
            body: "Skriv till AI: ”Lista faktapåståendena i ditt första svar. Vilka kan du belägga och vilka är du osäker på?”",
          },
          {
            title: "Testa ett eget område",
            body: "Välj något offentligt och ofarligt som du kan mycket om — en plats, en bok, ett spel, en hobby, ett lag, skolans historia.",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Skriv inte detta",
        body: "Använd INTE ditt fulla namn, personnummer, adress eller en kompis namn. Välj offentliga ämnen — inte din familj, dina kompisar eller privata konversationer.",
      },
      { type: "h", text: "Skriv slutsatsen" },
      {
        type: "list",
        items: [
          "AI lät säker när ______.",
          "Jag kunde kontrollera svaret genom att ______.",
          "Nästa gång ett AI-svar spelar roll ska jag ______.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Hitta inte bara felet",
        body: "Visa HUR du vet att det är fel. Källkritiken bor i belägget, inte i misstanken.",
      },
    ],

    // Klassrumsspår. Trygghetsregeln om personuppgifter måste stå uppe medan
    // eleverna skriver — den ligger i elevinstruktionen som en callout de
    // hinner läsa förbi. Här får den en egen slide före arbetet.
    // Klassrumsspår. Poängen med sekvensen är att den INTE förutsätter att
    // AI hittar på — bild 5 låter klassen klassificera vilket av sex beteenden
    // modellen visade. Övningen fungerar därför även när modellen genomskådar
    // premissen, vilket moderna webbsökande modeller ofta gör.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Hallucinationsjakten" },
          { type: "p", text: "Kan AI låta säker utan att veta?" },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Dagens experiment" },
          {
            type: "p",
            text: "Vi ger AI en fråga som innehåller något som inte stämmer.",
          },
          {
            type: "list",
            items: ["Bromsar den?", "Söker den?", "Frågar den?", "Rättar den?", "Hittar den på?"],
          },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Prompten" },
          {
            type: "quote",
            text: "Berätta om barnboken Pippi och spöket på Jönköpings central av Astrid Lindgren. Vad händer i boken? Sammanfatta handlingen i tre meningar.",
          },
          { type: "p", text: "Kopiera till en ny chatt." },
        ],
      },
      {
        blocks: [
          { type: "h", text: "En viktig uppgift" },
          { type: "p", text: "Boken finns inte." },
          { type: "p", text: "Vad gjorde AI med den falska premissen?" },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Välj beteende" },
          {
            type: "list",
            items: [
              "Genomskådade frågan",
              "Uttryckte osäkerhet",
              "Bad om mer information",
              "Sökte efter stöd",
              "Hittade på",
              "Blandade sant och falskt",
            ],
          },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Dela upp svaret" },
          { type: "p", text: "Markera varje konkret påstående." },
          { type: "p", text: "Vad säger AI egentligen har hänt?" },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Fyra markeringar" },
          {
            type: "list",
            items: [
              "Grönt — belagt",
              "Gult — osäkert",
              "Rött — fel",
              "Grått — ännu inte kontrollerat",
            ],
          },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Lämna chatten" },
          { type: "p", text: "Välj två påståenden. Kontrollera dem i en oberoende källa." },
          { type: "p", text: "En ny fråga till samma AI är inte hela kontrollen." },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Tre källfrågor" },
          {
            type: "list",
            ordered: true,
            items: [
              "Finns källan?",
              "Är källan relevant och äkta?",
              "Stöder den faktiskt påståendet?",
            ],
          },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Be AI granska sig själv" },
          {
            type: "quote",
            text: "Lista faktapåståendena i ditt första svar. Vilka kan du belägga och vilka är du osäker på?",
          },
          { type: "p", text: "Vad förändrades?" },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Din egen jakt" },
          { type: "p", text: "Välj något du kan mycket om." },
          {
            type: "list",
            items: ["En plats", "En bok", "Ett spel", "En hobby", "Ett lag", "Skolans historia"],
          },
          { type: "p", text: "Använd inget privat." },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Hitta inte bara felet" },
          { type: "p", text: "Visa: hur vet du att det är fel?" },
          { type: "p", text: "Källkritiken bor i belägget." },
        ],
      },
      {
        blocks: [
          { type: "h", text: "Samma ton" },
          {
            type: "p",
            text: "Lät de korrekta och felaktiga meningarna olika? Eller använde AI samma säkra språk för båda?",
          },
        ],
      },
      {
        blocks: [{ type: "lararfalt", id: "eget-exempel", label: "", valfri: true }],
      },
      {
        blocks: [
          { type: "h", text: "Frågan att landa i" },
          {
            type: "p",
            text: "Vad händer när en elev frågar AI om något eleven inte redan kan?",
          },
        ],
      },
      {
        blocks: [
          { type: "quote", text: "Ett välformulerat svar är inte ett belägg." },
          {
            type: "p",
            text: "När svaret spelar roll: stanna, lämna chatten, kontrollera påståendet.",
          },
        ],
      },
    ],

    discussion: [
      "Hur reagerade AI på den falska premissen?",
      "Vilken del av svaret lät mest trovärdig — och varför just den?",
      "Gjorde detaljrikedomen svaret lättare eller svårare att ifrågasätta?",
      "Fanns det någon språklig signal som avslöjade felet?",
      "Vad gjorde du när du blev misstänksam?",
      "Vilken källa kunde faktiskt avgöra frågan?",
      "Vad händer när en elev inte redan känner till ämnet?",
      "Är ett AI-svar säkrare om det har en källänk?",
      "Vad är skillnaden mellan att fråga AI igen och att verifiera påståendet?",
      "När är det rimligt att använda AI för faktafrågor?",
    ],
    pitfalls: [
      "Övningen görs beroende av att AI faktiskt hallucinerar. En webbsökande modell kan svara korrekt, och då tror deltagarna att övningen misslyckades. Fråga i stället vad som fick modellen att bromsa.",
      "Eleverna räknar fel i stället för att belägga dem. För tillbaka samtalet till: hur VISADE ni att det var fel?",
      "Ämnet blir för brett. ”Berätta om fotboll” ger ett generiskt och rätt korrekt svar. Hjälp dem göra ämnet precist — en namngiven lokal cupfinal ett visst år.",
      "Eleverna väljer privata expertområden. Styr om till offentliga och ofarliga ämnen; ingen ska skriva in familj, adresser eller innehåll ur privata konversationer.",
      "Eleverna tror att en källa löser allt. Kontrollera om källan finns, är relevant, är oberoende och faktiskt stöder påståendet.",
      "AI korrigerar sig efter en följdfråga och alla blir lugna. Fråga då: vilket av de två svaren skulle en elev ha hunnit använda? Självkorrigering under press gör inte det första svaret mindre riskabelt.",
    ],
    variations: [
      "Vänd på det — be AI:n skriva sanningen, lägg sen in en LITEN lögn. Klasskamrater ska hitta lögnen.",
      "Jämför två modeller på samma prompt, en med och en utan webbsökning. Skillnaden i beteende är i sig en lektion.",
      "Låt hälften av klassen få veta att boken är påhittad och hälften inte. Jämför hur grupperna läser samma svar.",
      "Insistera: säg till AI att boken definitivt finns och be den försöka igen. Vad händer med osäkerheten under press?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "ji-2023",
        relevance:
          "Etablerar att hallucinationer är systemiska i språkmodeller — inte ett fel som kan ”fixas” bort. Övningen demonstrerar detta i levande exempel där läraren redan kan svaret.",
      },
      {
        ref: "caulfield-2019",
        relevance:
          "SIFT-ramverkets ”Trace claims”-steg är det enda som överlever i AI-källkritik (det finns ingen institution att utvärdera, bara påståenden att verifiera). Övningen tränar precis detta.",
      },
      {
        ref: "wineburg-mcgrew-2017",
        relevance:
          "Lateralt läsande som expertbeteende — eleverna måste lämna AI-svaret för att verifiera det, inte fördjupa sig i det.",
      },
    ],
    chainsWellWith: ["faktagranska-ai-med-ai", "be-om-motstandet"],
    teacherModellingScript: `Visa storskärm. Säg: ”Jag ska fråga om en barnbok. Titta noga på vad AI GÖR med frågan.”

Skriv prompten om Pippi och spöket på Jönköpings central. Säg ingenting om att boken är påhittad.

Läs svaret högt. Stanna sedan: ”Boken finns inte. Jag hittade på titeln innan lektionen.”

Peka på vad som faktiskt hände — och var ärlig om vilket av utfallen du fick:
· Hittade den på? Markera de konkreta påståendena. ”Publiceringsår. Namn på karaktärer. Kapitelnummer. Allt låter exakt. Inget av det finns.”
· Bromsade den? ”Bra. Men titta VARFÖR — och håll kvar frågan: hade den bromsat om jag frågat om något mindre känt?”

Gå sedan till det som är övningens riktiga poäng: ”Nu ska jag inte fråga AI:n igen. Jag ska lämna chatten.” Slå upp bibliotekskatalogen på skärmen. Sök. Visa den tomma träfflistan.

Avsluta: ”Det tog mig tjugo sekunder. Skillnaden mellan att TRO att något är fel och att VETA det ligger i de tjugo sekunderna.”`,
  },

  {
    id: "faktagranska-ai-med-ai",
    number: "3.2",
    title: "Faktagranska AI:n med AI",
    chapter: "hallucinationer",
    level: "workshop-byggsten",
    blurb:
      "Sätt en AI mot en annan. Visar att verifiering är annorlunda än generering.",
    purpose:
      "Träna verifiering som egen färdighet — separat från att skriva en bra prompt.",
    trains: ["faktagranskning", "kritisk-lasning", "verktygsstrategi"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "20 min (workshop) / 40 min (klassrum)",
    durationMinutes: 40,
    digitalTools: true,
    materials: "Två AI-verktyg (t.ex. ChatGPT + Perplexity, eller SkolUp AI + Google Sök).",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska sätta en AI mot en annan. Det syftar inte till att hitta ”den bästa AI:n” — det syftar till att uppleva en grundläggande pedagogisk princip: att GENERERA och att VERIFIERA är två olika kognitiva operationer. Eleverna behöver lära sig båda — och förstå att den första alltid kräver den andra.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj en faktafråga",
            body: "Något som är specifikt men inte trivialt: ”Hur många bor i Småland?”, ”Vem byggde Vasa-skeppet?”, ”När infördes Sveriges första folkskola?”",
          },
          {
            title: "Ställ till AI A",
            body: "Använd ChatGPT, SkolUp AI, eller annan modell. Spara svaret. Notera hur självsäkert det är formulerat.",
          },
          {
            title: "Klistra in svaret i AI B",
            body: "Använd en annan modell (Perplexity är särskilt bra för verifiering eftersom den ger källor). Skriv: ”Är det här sant? Ge källor jag kan kolla.”",
          },
          {
            title: "Jämför och hitta en originalkälla",
            body: "Är AI A och AI B eniga? Om inte — vem har rätt? Sök upp originalkällan via Google. Lita inte på AI:s sammanfattning — gå hela vägen till källan.",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Att generera ett svar och att kontrollera ett svar är två separata färdigheter. Eleverna behöver båda.",
          "Perplexity och vissa modeller är specifikt designade för verifiering. Det är värt att känna till.",
          "Att vara ”bra på AI” är inte att lita på den. Det är att veta när man inte ska.",
        ],
      },
    ],

    deepDive: {
      intro:
        "Att låta en AI kontrollera en annan AI låter cirkulärt — men är det inte. Här förklarar vi varför verifiering är en egen kompetens, och hur SIFT-ramverket ger eleverna struktur för att navigera AI-svar.",
      sections: [
        {
          question: "Varför fungerar verifiering med en annan AI?",
          answer: [
            {
              type: "p",
              text: "Det fungerar inte automatiskt — och inte för allt. Men det fungerar oftare än man tror, av tre anledningar:",
            },
            {
              type: "list",
              items: [
                "Olika modeller har olika TRÄNINGSDATA. Påhittade detaljer i modell A finns sällan i modell B:s ”minne”. När de jämförs sticker felen ut.",
                "Vissa modeller (Perplexity, Bing Copilot, Google Gemini med Search) söker AKTIVT på webben innan de svarar — de kan ge länkar du kan klicka på och kontrollera.",
                "Att RÄKNA argumenten är annorlunda än att GENERERA dem. När du frågar ”är det här sant?” aktiveras andra kognitiva processer i modellen än när du frågar ”berätta om X”.",
              ],
            },
            {
              type: "p",
              text: "Men: två AI som båda hallucinerar samma fel ger dig FALSK trygghet. Slutet av verifieringen ska alltid vara en mänsklig källa.",
            },
          ],
        },
        {
          question: "Vad är SIFT, och varför är ”trace claims” det viktigaste steget?",
          answer: [
            {
              type: "p",
              text: "SIFT är ett ramverk av Mike Caulfield (2019) för digital källkritik. Det består av fyra rörelser:",
            },
            {
              type: "list",
              items: [
                "STOP — pausa innan du delar eller agerar. Magkänslan är inte tillräcklig.",
                "INVESTIGATE the source — kolla VEM som säger det. Vad har de för bakgrund, finansiering, agenda?",
                "FIND better coverage — sök upp samma fakta från en annan källa. Stämmer berättelserna?",
                "TRACE claims — gå tillbaka till originalkällan. ”En studie visar att…” — vilken studie? Var publicerad? Vad sa de FAKTISKT?",
              ],
            },
            {
              type: "p",
              text: "För traditionella källor (artiklar, webbsidor) är ”Investigate the source” oftast viktigast. För AI-svar är det meningslöst — det finns ingen ”avsändare” med agenda att granska. Det som kvarstår är ”Trace claims”: kontrollera vad AI:n PÅSTÅR mot externa, kontrollerbara källor.",
            },
          ],
        },
        {
          question: "Vad betyder det för skolan?",
          answer: [
            {
              type: "p",
              text: "Det betyder att traditionell källkritik måste KOMPLETTERAS, inte ERSÄTTAS. ”Vem säger det?” är fortfarande viktigt — men för AI tillkommer ”stämmer det överhuvudtaget?”",
            },
            {
              type: "p",
              text: "Det betyder också att eleverna måste lära sig se VERIFIERING som en egen aktivitet, lika viktig som att SÖKA information. Just nu sker det sällan. Eleven söker, hittar, kopierar — och hoppar över kontrollen helt.",
            },
            {
              type: "p",
              text: "Pedagogiskt: bygg in verifierings-moment i ALLA uppgifter. Inte som extra steg, utan som del av processen.",
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här?",
          answer: [
            {
              type: "list",
              items: [
                "GÖR DET KONKRET. Den här övningen är bra — låt eleverna SE skillnaden mellan en självsäker hallucination och en källbaserad fakta.",
                "VISA OLIKA AI:S TONLÄGE. Demo: samma fråga i ChatGPT vs Perplexity. Se hur olika svaren känns när källor finns vs inte finns.",
                "BYGG IN VERIFIERING I VARJE UPPGIFT. När eleverna ska skriva en text om ett historiskt skeende: ”innan du lämnar in, kolla minst två av dina påståenden mot Wikipedia eller annan källa”.",
                "PRATA OM TILLIT, INTE SANNING. ”Vem litar du mest på när det gäller det här? Och varför just dem?”",
                "ÖVA REGELBUNDET. Verifiering är en vana, inte en lektion.",
              ],
            },
          ],
        },
        {
          question: "Vad behöver eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Att fråga AI är inte att veta. Det är att få ett svar.",
                "Innan jag tror på något — KOLLAR jag. En annan AI, Wikipedia, Google, en lärare, en bok.",
                "Vissa AI är bättre på fakta (Perplexity). Vissa är bättre på text (ChatGPT). Att veta vilka är värt något.",
                "Det är OK att inte veta. Det är inte OK att låtsas veta.",
                "Originalkällan slår sammanfattningen. Alltid.",
              ],
            },
          ],
        },
      ],
    },

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "p",
        text: "Välj 5 faktafrågor som är intressanta men inte triviala (t.ex. ”Hur många människor bor i Småland?”, ”Vem byggde Vasa-skeppet?”).",
      },
      {
        type: "p",
        text: "Skriv in frågorna nedan så projiceras de — paren ska välja ur samma uppsättning, annars går sammanställningen inte att göra i helklass. Ange också vilka två tjänster ni sätter mot varandra.",
      },
      {
        type: "lararfalt",
        id: "fragorna",
        label: "Faktafrågorna",
        placeholder:
          "Hur många bor i Småland?\nVem byggde Vasaskeppet?\nNär öppnade Öresundsbron?\nHur djup är Vättern?\nVilket år brann Vasaskeppet?",
        hint: "Intressanta men inte triviala. En per rad. Projiceras när paren väljer.",
        rader: 5,
      },
      {
        type: "lararfalt",
        id: "tjansterna",
        label: "AI A och AI B",
        placeholder: "AI A: SkolUp AI · AI B: Perplexity",
        hint: "AI B bör kunna ge källor — det är hela poängen med granskningssteget.",
        rader: 1,
        valfri: true,
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          { title: "Demo", body: "Du visar med en fråga.", time: "5 min" },
          {
            title: "Pararbete",
            body: "Par jobbar med 3 frågor var. Spara svar A och svar B.",
            time: "20 min",
          },
          {
            title: "Sammanställning",
            body: "Vilka frågor var de oeniga om? Vilket var rätt?",
            time: "10 min",
          },
          {
            title: "Diskussion",
            body: "Vad gör vi när AI:n säger en sak och Google en annan?",
            time: "5 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska sätta en AI mot en annan — för att se vilken som har rätt.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Välj en av lärarens faktafrågor.",
          "Ställ frågan till AI A (t.ex. SkolUp AI). Spara svaret.",
          "Öppna AI B (t.ex. Perplexity eller Google).",
          "Klistra in AI A:s svar och skriv: ”Är det här sant? Ge källor.”",
          "Jämför svaren. Är de eniga? Om inte — vilket är rätt? Hur vet ni?",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilken källa är mest pålitlig — den vi använder oftast eller den vi använder för att kolla?",
          "Hur många källor borde man kolla innan man säger något säkert?",
        ],
      },
    ],

    // Klassrumsspår. Kedjan A → B → jämför måste stegas: klistrar eleverna in
    // svar A i AI B utan att först spara det, tappar de jämförelsen. Och den
    // obekväma slutfrågan — vem granskar granskaren — får en egen slide, för
    // det är dit hela övningen pekar.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "Sätt en AI mot en annan" },
          { type: "p", text: "Vilken har rätt? Och hur vet ni?" },
        ],
      },
      {
        etikett: "Tjänsterna",
        blocks: [{ type: "lararfalt", id: "tjansterna", label: "Tjänsterna", valfri: true }],
      },
      {
        etikett: "Välj en fråga",
        blocks: [{ type: "lararfalt", id: "fragorna", label: "Frågorna" }],
      },
      {
        etikett: "Steg 1",
        blocks: [
          { type: "h", text: "Ställ frågan till AI A" },
          { type: "p", text: "Spara svaret. Ni behöver det ordagrant i nästa steg." },
        ],
      },
      {
        etikett: "Steg 2 · öppna AI B",
        blocks: [
          {
            type: "quote",
            text: "[Klistra in AI A:s svar] Är det här sant? Ge källor.",
          },
        ],
      },
      {
        etikett: "Steg 3 · jämför",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Är de eniga?",
              "Om inte — vilket är rätt?",
              "Hur vet ni det?",
            ],
          },
        ],
      },
      {
        etikett: "Kolla källorna",
        blocks: [
          {
            type: "p",
            text: "AI B gav källor. Finns de? Säger de det AI:n påstår att de säger?",
          },
        ],
      },
      {
        etikett: "Den obekväma frågan",
        blocks: [
          { type: "h", text: "Vem granskar granskaren?" },
        ],
      },
      {
        etikett: "Och den praktiska",
        blocks: [
          {
            type: "p",
            text: "Vad gör vi när AI:n säger en sak och Google en annan? Hur många källor räcker innan man säger något säkert?",
          },
        ],
      },
    ],

    discussion: [
      "Vilken källa är mest pålitlig — den vi använder oftast eller den vi använder för att kolla?",
      "Hur många källor borde man kolla innan man säger något säkert?",
    ],
    evidenceStrength: "moderate",
    evidenceSources: [
      {
        ref: "wineburg-mcgrew-2019",
        relevance:
          "Lateralt läsande som expertkompetens — verifiering är en annan kognitiv operation än generering. Övningen tränar att separera dessa två rörelser.",
      },
      {
        ref: "ji-2023",
        relevance:
          "Hallucinationer är inte fel som AI:n korrigerar — utan systemiska. Att låta en annan modell kontrollera tar problemet på allvar utan att lita blint på första svaret.",
      },
    ],
    chainsWellWith: ["hallucinationsjakten", "skriv-fejkad-nyhetsartikel"],
  },
];
