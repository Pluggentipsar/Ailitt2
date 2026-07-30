import type { Activity } from "../types";

export const hallucinationer: Activity[] = [
  {
    id: "hallucinationsjakten",
    number: "3.1",
    title: "Hallucinationsjakten",
    chapter: "hallucinationer",
    level: "workshop-byggsten",
    blurb:
      "Be AI:n berätta om något du själv vet mycket om — och leta felen.",
    purpose:
      "Lärarna upplever själva hur självsäkert AI kan ha fel inom ett område där de är experter.",
    trains: ["kritisk-lasning", "faktagranskning"],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "20 min (workshop) / 30 min (klassrum)",
    durationMinutes: 30,
    digitalTools: true,
    materials: "Dator + skolans AI-verktyg.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body: "Du ska be AI:n berätta om något DU är expert på. När du är expert märker du genast när något är fel, halvsant eller påhittat. Den här övningen ska få DIG att uppleva — i kroppen — hur självsäkert AI kan ha fel. Det är den känslan dina elever inte kommer att ha på områden där de inte är experter.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Tänk på ditt expertområde",
            body: "Något du KAN. Din hembygd. En bok du läst tio gånger. Ditt favoritlag. Din morfars yrke. Något så specifikt att du genast skulle se ett fel. Det här är viktigt — utan expertområde märker du inte felen.",
          },
          {
            title: "Skriv prompten till AI:n",
            body: "Använd skolans AI-verktyg. Skriv enkelt: ”Berätta om [ditt ämne].” Inget mer. Ge AI:n ingen vägledning — vi vill se vad den hittar på.",
          },
          {
            title: "Läs som detektiv",
            body: "Läs svaret mening för mening. Stryk under VARJE påstående som är fel, halvsant eller påhittat. Markera även när den blandar samman saker.",
          },
          {
            title: "Räkna felen",
            body: "Hur många fel på hur långt svar? Notera särskilt: hur säkert LÄT AI:n när den hade fel? Användes samma tonläge som när den hade rätt?",
          },
        ],
      },
      { type: "h", text: "Reflektera tyst i två minuter" },
      {
        type: "list",
        items: [
          "Hur kändes det att läsa ett självsäkert svar du visste var fel?",
          "Vad händer när dina elever frågar AI om något DE inte kan?",
          "Vilken färdighet behöver eleverna träna för att fånga det här?",
          "Vad lär du redan dem som hjälper — och vad saknas?",
        ],
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
        type: "p",
        text: "Be eleverna i förväg fundera över ett ”expertämne” — sin lillasyster, sin hund, sin favoritbok, sitt favoritspel. Något där de märker ett fel direkt.",
      },
      {
        type: "p",
        text: "Fältet nedan projiceras i uppsamlingen. Ditt eget exempel — där AI:n hade fel om något DU kan — är övningens mest övertygande moment: eleverna ser att det gäller läraren också, inte bara dem.",
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
            title: "Inramning",
            body: "”AI:n KAN ha fel. Idag ska ni märka hur vi märker det.”",
            time: "5 min",
          },
          {
            title: "Individuellt",
            body: "Eleverna ber AI om en kort text om sitt expertämne. Markerar allt som är fel eller påhittat.",
            time: "15 min",
          },
          {
            title: "Storgrupp",
            body: "Läs upp några exempel. Diskutera hur säker AI:n lät trots felen.",
            time: "10 min",
          },
        ],
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Du ska få AI:n att berätta om något DU är expert på — och leta felen.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Tänk ut ett ämne du kan mycket om: din lillasyster, din hund, din favoritbok, ditt favoritspel.",
          "Gå till skolans AI-verktyg.",
          "Skriv: ”Berätta om [ditt ämne].”",
          "Läs svaret långsamt. Stryk under VARJE sak du vet är fel eller påhittad.",
          "Räkna felen.",
          "Notera: hur säkert lät AI:n när den hade fel?",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Skriv inte detta",
        body: "Använd INTE ditt fulla namn, personnummer, adress eller en kompis fulla namn. Använd förnamn eller hitta på namn.",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vad ska vi alltid kolla efter när AI:n säger något?",
          "Vad är det FARLIGASTE med att AI:n låter säker?",
        ],
      },
    ],

    // Klassrumsspår. Trygghetsregeln om personuppgifter måste stå uppe medan
    // eleverna skriver — den ligger i elevinstruktionen som en callout de
    // hinner läsa förbi. Här får den en egen slide före arbetet.
    klassrum: [
      {
        blocks: [
          { type: "h", text: "AI:n kan ha fel" },
          { type: "p", text: "I dag ska ni märka HUR vi märker det." },
        ],
      },
      {
        etikett: "Ditt expertämne",
        blocks: [
          {
            type: "p",
            text: "Något du kan mycket om. Din lillasyster, din hund, din favoritbok, ditt favoritspel.",
          },
        ],
      },
      {
        etikett: "Innan ni skriver",
        blocks: [
          {
            type: "callout",
            tone: "warning",
            title: "Inga personuppgifter",
            body: "Inte ditt fulla namn, personnummer eller adress. Inte en kompis fulla namn. Förnamn eller påhittat namn.",
          },
        ],
      },
      {
        etikett: "Prompten",
        blocks: [{ type: "quote", text: "Berätta om [ditt ämne]." }],
      },
      {
        etikett: "Läs svaret långsamt",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Stryk under VARJE sak du vet är fel eller påhittad",
              "Räkna felen",
              "Notera: hur säkert lät AI:n när den hade fel?",
            ],
          },
        ],
      },
      {
        etikett: "Från min egen körning",
        blocks: [
          { type: "lararfalt", id: "eget-exempel", label: "Lärarens exempel", valfri: true },
        ],
      },
      {
        etikett: "Frågan",
        blocks: [
          { type: "h", text: "Hur säker lät AI:n när den hade fel?" },
        ],
      },
      {
        etikett: "Det farliga",
        blocks: [
          {
            type: "p",
            text: "AI:n låter precis lika säker när den har fel som när den har rätt. Den vet inte skillnaden.",
          },
        ],
      },
      {
        etikett: "Alltså",
        blocks: [
          { type: "h", text: "Vad ska vi alltid kolla efter?" },
        ],
      },
    ],

    discussion: [
      "Vad ska vi alltid kolla efter när AI:n säger något?",
      "Vad är det FARLIGASTE med att AI:n låter säker?",
      "När får man använda AI:n för att svara på frågor?",
    ],
    pitfalls: [
      "Be elever INTE skriva personnummer, adresser eller fulla namn i prompten. Använd förnamn eller ett påhittat namn.",
    ],
    variations: [
      "Vänd på det — be AI:n skriva sanningen, lägg sen i en LITEN lögn. Klasskamrater ska hitta lögnen.",
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
    teacherModellingScript: `Visa storskärm. Säg: ”Jag ska be AI:n berätta om [min hembygd / min bok / mitt lag]. Jag VET att jag är expert här — så jag kan se var det börjar gå fel.”

Skriv prompten. Läs svaret högt, mening för mening.

Stanna efter första fel: ”Vänta. Det där stämmer inte. Min skola byggdes på 80-talet, inte 60-talet. Lägg märke till — AI:n säger det med EXAKT samma självsäkerhet som de saker den har rätt om.”

Fortsätt. Markera felaktigheter med markeringspenna på skärmen.

Avsluta: ”Räkna med mig. På fyra meningar hittade jag tre fel — och jag är inte ens en hård kritiker. Vad händer när vi använder AI till saker vi INTE redan kan?”`,
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
