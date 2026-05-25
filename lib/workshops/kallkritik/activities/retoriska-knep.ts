import type { Activity } from "../types";

// Färdig prompt-mall för 5.1 — läraren klistrar in och anpassar ämnet.
// Exporteras så promptbiblioteket kan återanvända samma text.
export const LARARDEMO_PROMPT = `Du är retoriklärare för mellanstadiet. Skriv en kort övertalande text (4–6 meningar) som försöker övertyga om följande tes: [LÄRAREN SKRIVER IN TES, t.ex. "skoldagen borde börja kl 10"].

Använd MINST tre av följande retoriska knep, blanda gärna:
- Cherry-picking (välj bara siffror/exempel som stöder dig)
- Falskt motsatspar (antingen X eller katastrof)
- Känsloladdat språk (starka, värderande ord)
- Halmgubbe (överdriv motståndarens åsikt)
- Glidande slutsats (en sak leder till nästa till nästa)
- Anekdotbevis (en enskild historia som "bevis")
- Auktoritetsargument (forskare/expert/kändis tycker)
- Whataboutism (vad sägs om Y då?)
- Ad hominem (angrip personen, inte argumentet)

EFTER texten — skriv en numrerad lista där du för VARJE mening markerar:
1. Vilken mening (citera kort)
2. Vilket knep den använder
3. Varför knepet fungerar psykologiskt
4. Vad en kritisk läsare kan invända

Avsluta med: "Övning till klassen: hur skulle ni reagera på texten utan min förklaring nedanför?"`;

// Färdig SkolUp-bot-prompt för 5.2 — kan klistras in när läraren skapar
// custom chatbot, eller användas som system-prompt i ChatGPT/Claude/Copilot.
// Exporteras så promptbiblioteket kan återanvända samma text.
export const RETORIK_DETEKTIVEN_BOT_PROMPT = `Du är "Retorik-detektiven" — en pedagogisk AI för mellanstadiet (åk 4–6) som hjälper elever att se retoriska knep i texter de stöter på (nyheter, sociala medier, politiska tal, reklam).

NÄR en elev klistrar in en text gör du följande i ordning:

1) KORT SAMMANFATTNING (1–2 meningar): vad texten påstår och vad den verkar VILJA få läsaren att tycka.

2) HITTA KNEPEN: gå igenom texten och markera retoriska knep från denna lista:
   - Cherry-picking · Falskt motsatspar · Känsloladdat språk · Halmgubbe
   - Glidande slutsats · Anekdotbevis · Auktoritetsargument · Whataboutism · Ad hominem

   För VARJE knep du hittar:
   • Citera kort från texten (max en mening)
   • Säg vilket knep det är
   • Förklara på ett enkelt språk (åk 5-nivå) VARFÖR det är ett knep — inte bara att det är det

3) VAD SAKNAS? (en mening): vilken siffra, källa eller motargument hade gjort texten mer balanserad?

4) FRÅGA TILLBAKA: ställ en konkret följdfråga till eleven, t.ex. "Vilket av knepen tror du fungerar bäst på dig själv?" eller "Hur skulle texten se ut om den var skriven utan knepen?"

REGLER:
- Var pedagogisk, inte dömande. "Den här texten använder X-knepet" — inte "den här texten är manipulativ".
- En text kan vara HELT KORREKT i sak och ändå använda knep — säg det när det stämmer.
- Om texten är saklig och balanserad: säg det också. "Här hittar jag inga tydliga knep" är ett giltigt svar.
- Aldrig politiska åsikter. Du analyserar form, inte sak. Om texten är politisk, var extra noga med att analysera båda sidors knep om båda finns med.
- Svara på svenska.`;

export const retoriskaKnep: Activity[] = [
  // ============================================================
  // 5.1 AI berättar sina knep — LÄRARDEMO PÅ STORSKÄRM
  // ============================================================
  {
    id: "ai-berattar-sina-knep",
    number: "5.1",
    title: "AI berättar sina knep",
    chapter: "retoriska-knep",
    level: "workshop-byggsten",
    blurb:
      "Lärardemo: AI skriver en övertalande text OCH avslöjar löpande vilka retoriska knep den använder. Genomskådligt och pedagogiskt.",
    purpose:
      "Synliggör retoriska knep genom att låta AI:n både ANVÄNDA och NAMNGE dem i samma övning. Eleverna ser hur en text byggs — och får språket att se det i andras texter sedan.",
    trains: [
      "retorisk-medvetenhet",
      "manipulationsmedvetenhet",
      "kritisk-lasning",
      "prebunking",
    ],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "30 min (workshop) / 40 min (klassrum)",
    durationMinutes: 35,
    digitalTools: true,
    materials:
      "AI-tjänst på storskärm (SkolUp AI, Copilot eller ChatGPT) + förberedd prompt (finns i lärarhandledningen) + ev. utskriven lista med de 9 knepen.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body:
          "Du ska få se hur en AI både kan ANVÄNDA retoriska knep och NAMNGE dem i samma övning. Den färdiga prompten ber AI:n skriva en kort övertalande text om något elev-nära (t.ex. ”skoldagen borde börja kl 10”) och sedan förklara mening för mening vilket knep den använt och varför. Du ser tekniken inifrån — och får ett konkret upplägg att köra med eleverna.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Öppna AI-tjänsten på storskärm",
            body: "SkolUp AI, Microsoft Copilot eller ChatGPT — vilket du nu har. Gör ett tomt samtal så eleverna ser starten.",
          },
          {
            title: "Klistra in den färdiga prompten",
            body: "Kopiera prompten nedanför och fyll bara i en tes som engagerar deltagarna — t.ex. ”skoldagen borde börja kl 10”, ”telefoner borde vara förbjudna i skolan”, ”svenska borde inte vara obligatoriskt”.",
          },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Den färdiga prompten — kopiera",
        body: LARARDEMO_PROMPT,
      },
      {
        type: "steps",
        startFromStep: 3,
        steps: [
          {
            title: "Pausa efter den övertalande texten",
            body: "Innan du visar AI:ns egen analys: läs texten högt. Be deltagarna tänka tyst i 30 sek: vad känner ni när ni läser? Vilka ord triggade en känsla? Vad i texten skulle ni inte ha noterat om någon bara hade sagt det till er?",
          },
          {
            title: "Visa AI:ns avslöjande",
            body: "Scrolla nu ner till AI:ns egen analys där varje mening är markerad med vilket knep den använt. Läs igenom tillsammans. Aha-momentet är det viktiga.",
          },
          {
            title: "Reflektera",
            body: "Vilket knep kände du DIG mest påverkad av? Vilket är svårast att upptäcka i en text? Varför fungerar känsloladdat språk även när vi VET att det används?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det är pedagogiskt KRAFTFULLT att AI:n både använder och avslöjar knepen — eleverna ser tekniken inifrån, inte bara utifrån.",
          "Välj en tes som är lätt att försvara från flera håll, men där eleverna har egna åsikter. Den emotionella laddningen gör övningen levande.",
          "AI:n kan ibland missa eller felmärka knep. Det är OK — använd det som diskussion: ”stämmer det att den här meningen är ett halmgubbe-argument? Eller är det något annat?”",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Varför just lärardemo?",
        body:
          "Att modellera övningen själv — istället för att skicka ut eleverna direkt — är det evidensbaserade upplägget för retorisk medvetenhet (Cook et al., 2017). Klassen ser HUR man läser kritiskt innan de prövar själva.",
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Välj 2–3 teser i förväg som du vet engagerar din specifika klass. Lokal-anpassade är bäst (”skolmaten borde få vara fri”, ”vi borde få ha rast tre gånger om dagen”).",
          "Testa prompten en gång hemma så du vet hur lång AI:ns text blir och vilka knep den brukar plocka. Du behöver INTE memorera — men du ska känna igen formen.",
          "Förbered en kort A4-utskrift med de 9 knepen + en mening per knep. Eleverna behöver det som referens.",
          "Säkerställ att storskärmen är stor nog att alla läser AI:ns svar utan att stå upp.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Den färdiga prompten",
        body: LARARDEMO_PROMPT,
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Idag tittar vi på hur språk används för att övertyga — inte för att informera. AI:n kommer att HJÄLPA oss genom att både skriva en sådan text OCH avslöja hur den gjorde.”",
            time: "5 min",
          },
          {
            title: "Demo: AI skriver",
            body: "Klistra in prompten med en tes. Klassen läser AI:ns övertalande text tyst. Tänk högt: ”vilka ord drog er in?” Pausa innan analysen.",
            time: "10 min",
          },
          {
            title: "Demo: AI avslöjar",
            body: "Visa AI:ns mening-för-mening-analys. Stanna på varje knep. Be 1–2 elever ge ett eget exempel på samma knep från sin vardag (TikTok, en reklam, en vuxen).",
            time: "15 min",
          },
          {
            title: "Mini-utmaning",
            body: "Be eleverna parvis välja en NY tes och GISSA vilka 3 knep AI:n kommer att använda. Kör prompten med deras tes på storskärm. Hur många gissade de rätt?",
            time: "5 min",
          },
          {
            title: "Reflektion",
            body: "Vilket av de 9 knepen MÄRKER ni mest i ert eget liv? Räkna handuppräckning. Avsluta med: ”det viktiga är inte att aldrig använda knep — det är att VETA NÄR någon använder dem på er.”",
            time: "5 min",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Om AI:n missar ett knep",
        body:
          "AI:n kan ibland markera fel knep eller missa ett uppenbart. Använd det som diskussion: ”stämmer AI:ns analys? Eller är det här något annat?” Att eleverna ifrågasätter AI:ns analys är en VINST — det är då de tränar sin egen retoriska blick.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag ska du se hur en AI kan skriva en text som försöker övertyga dig — och själv förklara vilka knep den använt. Du ska titta, känna, och försöka se mönstren.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Läs texten AI:n skriver på storskärm — TYST först. Markera i tankarna: vilka ord drog dig in i texten? Vilka fick dig att hålla med? Vilka fick dig att säga emot?",
          "Lyssna på din kropp: kände du irritation någonstans? Stark medhåll? Tvekan? Det är ofta TECKEN på att ett retoriskt knep arbetar.",
          "När AI:n avslöjar knepen: jämför med vad DU märkte. Hittade du knepen utan AI:ns hjälp? Vilka missade du?",
          "Ta fram referensbladet med de 9 knepen. Vilka KÄNNS du igen från ditt eget flöde? Vilka är nya?",
          "Försök i par: välj en ny tes (något ni bryr er om) och GISSA vilka tre knep AI:n kommer att välja innan ni kör.",
        ],
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilket knep fungerar BÄST på dig själv? Är det samma som på dina kompisar?",
          "Är det fusk att använda retoriska knep när man skriver? Var går gränsen mellan ”övertyga” och ”manipulera”?",
          "Skulle du kunna skriva ett inlägg utan ETT enda knep? Vad skulle det säga i så fall?",
        ],
      },
    ],

    discussion: [
      "Är det skillnad på att övertyga och att manipulera? Var går gränsen?",
      "Vilket av de 9 knepen är vanligast på TikTok? På nyheter? I politiska tal?",
      "Vad är okej att använda när man själv ska argumentera — och vad är inte okej?",
      "Hur är det att en AI både ANVÄNDER och AVSLÖJAR knepen? Är det ärligt eller fortfarande manipulativt?",
    ],
    pitfalls: [
      "Välj inte teser som rör elevers privata åsikter på ett känsligt sätt (politik, kropp, familj). Skoldagen, skolmaten, läxor, sport — bra. Migration, religion, kön — undvik på den här nivån.",
      "Om AI:n levererar en svag eller felaktig analys av sina egna knep: använd det som diskussion, inte som problem.",
      "Vissa elever blir cyniska — ”så ALLT är manipulation då?”. Avsluta alltid med att skilja mellan att övertyga (öppet, redovisa knep) och att manipulera (dolt, utnyttja knep).",
    ],
    variations: [
      "Vänd på det: be AI:n skriva samma tes UTAN knep — bara fakta. Jämför. Vad försvann? Vad blev tråkigare? Vad blev ärligare?",
      "Köra två varianter samtidigt: be AI:n skriva en text FÖR tesen och en MOT — med samma knep. Eleverna ser att knepen fungerar åt båda hållen.",
      "Be AI:n skriva en lokal-anpassad version (om er skola, er kommun, ert idrottslag). Närheten gör att eleverna känner igen knepen tydligare.",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "cook-2017",
        relevance:
          "Inoculation-forskningen visar att att EXPONERA retoriska tekniker i klassrum gör elever mer motståndskraftiga utanför — exakt det den här övningen gör genom att låta AI:n både använda och namnge knepen.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Prebunking är mer effektivt än debunking. Att se en text byggas med knep INNAN man möter den i naturen ger varaktigare immunitet.",
      },
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Bad News-studien visar att aktivt arbete med manipulationstekniker (inte bara teoretisk genomgång) ger bestående effekter — den här övningen är en lärarledd version av samma princip.",
      },
    ],
    chainsWellWith: ["retorik-detektiven", "bygg-knep-text", "cranky-uncle"],

    teacherModellingScript: `Idag ska vi titta på hur språk används för att övertyga oss — inte för att lära oss något.

(Skriv tesen på tavlan: t.ex. "skoldagen borde börja kl 10")

Jag tänker be AI:n att skriva en KORT övertalande text om det här. Och sedan — det här är det smarta — ber jag den ÄRLIGT förklara vilka knep den använde.

Lyssna noga när jag läser texten högt. Märk var ni HÅLLER MED. Märk var ni vill SÄGA EMOT. Märk var ni känner något.

(Kör prompten. Läs texten högt. Pausa. Visa AI:ns analys.)

Se hur AI:n bryter ner det? Den säger: "I mening 2 använde jag känsloladdat språk för att…" — det är som om en magiker visar trickets baksida.

Det här är vad jag vill att ni lär er: när någon övertygar er, finns det ALLTID knep. Inte alltid onda. Men de finns. Och nu har vi språk att se dem.`,

    deepDive: {
      intro:
        "Retoriska knep är inte ondska — de är hur språk fungerar. Aristoteles katalogiserade dem för 2 400 år sedan. Skillnaden är att eleverna idag möter dem 100 gånger om dagen i sina flöden, ofta dolda. Här förklarar vi vilka knep det är, varför de fungerar, och hur lärardemot bryter mönstret.",
      sections: [
        {
          question: "Vad är ett retoriskt knep?",
          answer: [
            {
              type: "p",
              text: "Ett retoriskt knep är en språklig teknik som påverkar HUR vi tar emot ett budskap, oberoende av om budskapet är sant. Klassisk retorik talar om ethos (avsändare), pathos (känsla) och logos (logik). De flesta knep utnyttjar pathos och ethos för att smyga förbi logos.",
            },
            {
              type: "p",
              text: "Mellanstadie-versionen: ett retoriskt knep är när språket gör jobbet åt argumentet. ”Skoldagen borde börja senare” är ett påstående. ”Forskning visar att tonåringar lider av tidiga skolstart” är samma påstående, men med auktoritetsargument inbakat. Båda kan vara sanna — men det andra kräver att du KAN avslöja vilken forskning, hur stor effekten är, vem som finansierat.",
            },
            {
              type: "p",
              text: "Att lära eleverna se knepen är inte att lära dem att vara cyniska. Det är att ge dem språk så de kan möta texter aktivt — och själva välja att hålla med eller inte.",
            },
          ],
        },
        {
          question: "Varför är AI så bra på det här?",
          answer: [
            {
              type: "p",
              text: "AI är tränad på enorma mängder text — inklusive politisk retorik, reklam, opinionstexter, sociala medier. Den HAR sett alla knepen, om och om igen. När vi ber den producera en övertalande text plockar den fram det mest sannolika språkmönstret för just det syftet.",
            },
            {
              type: "p",
              text: "Det betyder också att AI är ovanligt bra på att METAANALYSERA sin egen text. Om du ber den lista vilka knep den använt, kan den (oftast) göra det med stor precision. Det är som att be en kock förklara EXAKT vilka kryddor hen blandade — det blir inte bara klart vad som är där, det blir också synligt VARFÖR det fungerade.",
            },
            {
              type: "p",
              text: "Den här övningen utnyttjar precis den kapaciteten: vi vänder AI:s förmåga att producera retorik mot AI:s förmåga att analysera retorik. Resultatet är en transparent demonstration som ingen lärare själv hade orkat skriva ihop.",
            },
          ],
        },
        {
          question: "Vilka 9 knep är viktigast för mellanstadiet?",
          answer: [
            {
              type: "list",
              items: [
                "CHERRY-PICKING — välja bara siffror eller exempel som stöder ens sida. ”Tre studier visar X” (men 12 visar det motsatta). Vanligast i politik och hälsovård.",
                "FALSKT MOTSATSPAR — låta det se ut som om det bara finns två alternativ. ”Antingen tillåter vi X, eller så förlorar vi friheten.” I verkligheten finns ofta många nyanser.",
                "KÄNSLOLADDAT SPRÅK — välja ord som triggar känsla. ”Invasion” istället för ”inflyttning”. ”Slakt” istället för ”neddragning”. Samma sak, olika reaktion.",
                "HALMGUBBE — överdriva eller förvränga motståndarens argument så att det blir lätt att slå ner. ”De som tycker X menar EGENTLIGEN att …”",
                "GLIDANDE SLUTSATS — ”om vi tillåter A leder det till B, som leder till C, som leder till katastrof”. Kedjan kan låta logisk men varje länk är osäker.",
                "ANEKDOTBEVIS — en enskild stark historia presenterad som bevis för ett mönster. ”Min granne fick magont av vacciner.” Anekdoten kan vara sann men säger inget om mängden.",
                "AUKTORITETSARGUMENT — ”forskare/experter/Nobelpristagare tycker”. Ofta utan källa, ibland missvisande. En forskare på fel område är inte auktoritet bara för att hen är forskare.",
                "WHATABOUTISM — när någon ifrågasätter ditt argument, peka på något annat. ”Men vad sägs om Y då?” Avleder från huvudfrågan utan att svara på den.",
                "AD HOMINEM — angrip personen istället för argumentet. ”Du kan inte ha en åsikt om det här, du är bara 12 år.” Eller ”hen säger så bara för att hen är politiker.”",
              ],
            },
          ],
        },
        {
          question: "Hur undervisar jag om det här utan att eleverna blir cyniska?",
          answer: [
            {
              type: "list",
              items: [
                "GE LISTAN. Det viktigaste är att eleverna får NAMN på knepen. När de kan säga ”det där är ett halmgubbe-argument” har de ett verktyg, inte bara en misstänksamhet.",
                "VISA ATT KNEP KAN VARA ÄRLIGA. Att använda känsloladdat språk är inte alltid manipulation — det är ofta hur vi pratar om saker vi bryr oss om. Skillnaden ligger i om man DOLT eller ÖPPET använder knep.",
                "MODELLERA SJÄLV. Använd ett knep MEDVETET i din egen undervisning och säg det rakt ut: ”nu använde jag ett auktoritetsargument — och det jag sa kan stämma ändå.”",
                "BALANSERA. Avsluta alltid med att flera olika sidor i en debatt använder knep. Det är inte ”vi” mot ”dem” — det är ett språkmönster som finns överallt.",
                "ÅTERKOM. Övningen gör mest skada om den är en engångshändelse. Räck upp handen-läge i andra ämnen: ”vilket knep använder läroboken här?” Gör det till en VANA.",
              ],
            },
          ],
        },
        {
          question: "Vad ska eleverna kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Det finns SPRÅKLIGA KNEP som påverkar hur jag tar emot ett budskap. De har namn.",
                "AI kan både använda knepen och avslöja dem — ett verktyg jag kan be om hjälp av.",
                "När jag känner stark känsla av en text — paus. Kolla: är det fakta eller är det språket?",
                "Att skriva övertygande är inte fel. Att dölja att man övertygar är det.",
                "Jag har rätt att be om en faktatext utan knep. Och jag har rätt att fråga: ”vilka knep använder den här texten?”",
              ],
            },
          ],
        },
      ],
    },
  },

  // ============================================================
  // 5.2 RETORIK-DETEKTIVEN — EGEN BOT FÖR ELEVERNA
  // ============================================================
  {
    id: "retorik-detektiven",
    number: "5.2",
    title: "Retorik-detektiven",
    chapter: "retoriska-knep",
    level: "workshop-byggsten",
    blurb:
      "En förberedd AI-chatbot där eleverna klistrar in verklig text — nyheter, sociala medier, politiska tal — och får en pedagogisk genomgång av vilka knep texten använder.",
    purpose:
      "Ge eleverna ett VERKTYG de kan använda i sin vardag. Inte bara lära sig knepen i en lektion utan ha en följeslagare som hjälper dem analysera texter de själva stöter på. Skala upp lärarens närvaro.",
    trains: [
      "retorisk-medvetenhet",
      "kritisk-lasning",
      "kallkritik",
      "verktygsstrategi",
    ],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "35 min (workshop) / 45 min (klassrum)",
    durationMinutes: 40,
    digitalTools: true,
    materials:
      "SkolUp AI (helst som custom chatbot skapad av läraren) ELLER Copilot/ChatGPT med färdig system-prompt (finns i lärarhandledningen) + 3–5 förberedda exempeltexter att klistra in.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body:
          "Du ska få se och pröva en förberedd ”Retorik-detektiv” — en AI-bot som är instruerad att analysera vilka retoriska knep en text använder, på ett sätt anpassat för mellanstadiet. Tanken är att läraren förbereder boten en gång, sen kan eleverna använda den om och om igen — för texter de möter i sin egen vardag.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Förstå själva botten",
            body: "Läs system-prompten nedanför. Den säger till AI:n: sammanfatta texten, hitta knepen, säg vad som saknas, ställ en följdfråga. Notera att den är designad så att AI:n INTE tar politisk ställning.",
          },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Den färdiga system-prompten — kopiera",
        body: RETORIK_DETEKTIVEN_BOT_PROMPT,
      },
      {
        type: "steps",
        startFromStep: 2,
        steps: [
          {
            title: "Sätt upp boten i SkolUp (eller alternativ)",
            body: "Om du har tillgång till SkolUp där läraren kan skapa egna chatbottar: klistra in system-prompten där. Annars: använd Copilot eller ChatGPT och klistra in prompten som första meddelande till AI:n.",
          },
          {
            title: "Testa själv först — välj 2 olika texter",
            body: "Hitta en politisk text (debattartikel, ett uttalande, en social-media-post) och en faktatext (en nyhetsartikel utan tydlig vinkel, en Wikipedia-ingress). Klistra in båda i boten. Jämför svaren.",
          },
          {
            title: "Mät kvaliteten",
            body: "Är AI:ns analys konkret? Pekar den på rätt meningar? Är förklaringen på en nivå en 11-åring förstår? Justera prompten om något inte stämmer.",
          },
          {
            title: "Reflektera över upplägget",
            body: "När du sätter detta i händerna på eleverna — vad kan gå fel? Var det ärlig? Snäv? För svår? Du vet din klass — anpassa.",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Boten är ett VERKTYG, inte en lärare. Den lyfter blicken på språk — men den ersätter inte samtal i klassrummet.",
          "En text kan vara FAKTAMÄSSIGT korrekt och fortfarande använda retoriska knep. Boten ska säga det. Det är pedagogiskt viktigt: knep ≠ lögn.",
          "Botens svar varierar mellan körningar — exakt samma text kan ge lite olika analys. Använd det som diskussion: ”varför fokuserar AI:n på olika saker?”",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Varför en CUSTOM bot?",
        body:
          "En generisk AI svarar olika varje gång. En custom bot med system-prompt svarar i samma format varje gång — så eleverna får en KÄND struktur att luta sig mot. Det är skillnaden mellan att be om en analys och att ha ett konsistent verktyg.",
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Sätt upp boten en gång — antingen som custom chatbot i SkolUp (om er kommun har det), eller spara system-prompten i en mall så eleverna får klistra in den först.",
          "Förbered 3–5 exempel-texter på olika nivå: en faktatext (svag knep-användning), en debattartikel (medelmycket), en politisk social-media-post (mycket). Gärna en med svensk politiker, en med utländsk (t.ex. en översatt Trump-post), en med influencer.",
          "Testa varje exempel i boten innan lektionen så du vet vad eleverna kommer få. Var beredd att korrigera om botens analys är fel eller missar.",
          "Förbered hur ni hanterar känsliga ämnen. Vad gör du om en elev klistrar in något stötande? Sätt regel: vi analyserar SPRÅK, inte vi tar politisk ställning.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Den färdiga system-prompten",
        body: RETORIK_DETEKTIVEN_BOT_PROMPT,
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Nu får ni ett verktyg. Den här AI-detektiven är förberedd att analysera retoriska knep i texter ni klistrar in. Vi börjar tillsammans — och sen får ni testa själva.”",
            time: "5 min",
          },
          {
            title: "Demo på storskärm",
            body: "Klistra in EN av era förberedda texter. Läs AI:ns analys högt. Pausa och fråga: ”stämmer det här? Saknas något? Tycker AI:n samma som du?”",
            time: "10 min",
          },
          {
            title: "Par-arbete",
            body: "Eleverna får 2–3 färdiga texter (utskrivna eller delade digitalt). De kör texterna i boten parvis. För varje text: skriv ner 2 knep AI:n hittade + 1 ni själva tycker AI:n missade.",
            time: "15 min",
          },
          {
            title: "Klassgenomgång",
            body: "Vilken text använde flest knep? Vilket knep var vanligast i sociala medier vs i nyheter? Vad var AI:n bäst på? Vad var den sämst på?",
            time: "10 min",
          },
          {
            title: "Hemuppgift",
            body: "Be eleverna hitta EN text själva — en social-media-post, en rubrik, ett YouTube-citat — och köra den i boten innan nästa lektion. Ta med analysen och visa upp.",
            time: "5 min (instruktion)",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Politiska texter & känsliga ämnen",
        body:
          "Boten är instruerad att analysera FORM, inte ta politisk ställning. Men eleverna kommer naturligt fråga ”vem har rätt?”. Förbered svaret: ”det är inte AI:s jobb att säga vem som har rätt. Det är att hjälpa er SE hur språket fungerar — sedan får ni själva tänka.” Sätt också tydlig regel: alla texter eleverna klistrar in måste vara offentliga (artikel, känt uttalande) — inte privata DM:s eller kompis-meddelanden.",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag får du ett verktyg du kan använda om och om igen — en AI-detektiv som hjälper dig SE retoriska knep i texter. Du klistrar in en text, och boten visar dig vad texten försöker göra med dig.",
      },
      { type: "h", text: "Så gör du" },
      {
        type: "list",
        ordered: true,
        items: [
          "Öppna detektiv-boten som läraren visar. Den är förberedd så du behöver inte ge några extra instruktioner — bara klistra in.",
          "Välj en text att börja med — läraren har förberett några exempel. Klistra in HELA texten och tryck skicka.",
          "Läs AI:ns analys. Den ska göra fyra saker: (1) sammanfatta texten, (2) lista vilka knep den använder, (3) säga vad som saknas, (4) ställa en fråga till dig.",
          "Tänk själv: håller du med? Markerade AI:n samma meningar du själv reagerade på? Vad missade den?",
          "Diskutera med bordsgrannen: vilka knep var ENKLAST att se? Vilka var SVÅRAST?",
          "Pröva på en text du SJÄLV hittat — en post, en rubrik, ett citat. Hur ser analysen ut då?",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Regler",
        body:
          "Klistra bara in OFFENTLIGA texter — alltså sådant som finns på en hemsida, i en tidning, eller på en känd persons konto. Inte privata meddelanden från kompisar eller familj. Detektiv-boten är till för att läsa OFFENTLIGT språk kritiskt.",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Vilket knep använder DIN egen sociala-medie-tråd mest? Skulle du själv vilja bli analyserad?",
          "AI hittade kanske knep du inte själv såg — eller missade knep du själv såg. Vem hade ”rätt”?",
          "Skulle du lita på AI:n mer om den var en lärare? Mer om den var en kompis? Varför?",
        ],
      },
    ],

    discussion: [
      "Vilken typ av text använder FLEST knep — politik, reklam, nyheter, sociala medier? Vad säger det om varför texten finns?",
      "Är det möjligt att skriva en text helt utan knep? Skulle den vara intressant att läsa?",
      "AI:n är förberedd att inte ta politisk ställning. Är det bra eller dåligt?",
      "Tycker du AI:n ”såg” samma knep du själv såg? Vad lärde du dig av att jämföra?",
      "Hur skulle skolan se ut om alla elever kunde köra boten på sin lärobok?",
    ],
    pitfalls: [
      "Eleverna kan börja klistra in privata meddelanden eller känsliga texter. Sätt regel tydligt: bara offentliga texter.",
      "AI:n kan missa knep eller markera fel. Använd det som diskussion — INTE som problem.",
      "Vissa elever kan bli FÖR beroende av boten — ”jag vet inte vad jag tycker, jag måste fråga boten”. Avsluta alltid med att de ska tänka SJÄLVA innan de frågar boten, och jämföra efteråt.",
      "Politiskt känsliga texter kan väcka starka reaktioner. Var beredd att styra samtalet tillbaka till SPRÅK, inte SAK.",
    ],
    variations: [
      "Köra samma text genom TVÅ olika AI-tjänster och jämföra. Vad markerar Copilot som ChatGPT missar?",
      "Eleverna bygger sin EGEN bot med en variant av prompten — t.ex. ”Reklam-detektiven” som bara analyserar reklam, eller ”Nyhets-detektiven” med fokus på rubriker.",
      "Köra boten på elevernas EGNA skrivuppgifter (med tillåtelse). Vilka knep använder de själva utan att veta om det?",
      "Kombinera med aktivitet 5.1 ”AI berättar sina knep”: först låt AI:n skriva och avslöja, sen analysera samma text med detektiv-boten. Stämmer analyserna?",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "cook-2017",
        relevance:
          "Inoculation genom AKTIV exponering för retoriska tekniker — exakt vad eleverna gör när de klistrar in verkliga texter och får dem analyserade. Cook visade att SJÄLV använda tekniken (inte bara lyssna på den) ger varaktigare effekt.",
      },
      {
        ref: "wineburg-mcgrew-2017",
        relevance:
          "Stanfords forskning om hur till och med doktorander missade att analysera källor lateralt. Att eleverna får ett VERKTYG som hjälper dem analysera lateralt — istället för att lita på första intrycket — är en konkret implementation av Stanfords pedagogiska rekommendationer.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Prebunking är effektivt när det är pågående, inte engångs. En kontinuerligt tillgänglig detektiv-bot förvandlar prebunking från ett momentärt klassrumsmoment till en livslång vana.",
      },
    ],
    chainsWellWith: [
      "ai-berattar-sina-knep",
      "bygg-knep-text",
      "cranky-uncle",
      "hallucinationsjakten",
    ],

    teacherModellingScript: `Vi har gjort vår egen detektiv. Den är förberedd att hjälpa oss SE retoriska knep i texter.

Jag ska visa hur det funkar. (Klistrar in exempeltext på storskärm.)

Se? AI:n gör fyra saker. Först sammanfattar den texten. Sen — och det är det viktiga — listar den knepen. Cherry-picking här. Auktoritetsargument där. Den citerar de exakta meningarna.

Lyssna på den tredje delen: ”vad saknas”. Det är där det blir intressant. AI:n säger: ”texten nämner inte att det finns flera studier som säger det motsatta.” Det är källkritik i en mening.

Och fjärde delen — frågan till dig. Det här är inte ett verktyg som tar över ert tänkande. Det är ett verktyg som FRÅGAR ER tillbaka. ”Vilket av knepen tror du fungerar bäst på dig själv?”

Och nu får ni testa. Klistra in en text ni undrar över. Boten väntar.`,

    deepDive: {
      intro:
        "Att skala upp lärarens närvaro är en av AI:ns starkaste pedagogiska möjligheter. Detektiv-boten är inte en ersättning för läraren — den är en assistent som finns där när eleven sitter på bussen, läser nyheter, eller bråkar med en kompis i en grupp-chatt. Här förklarar vi varför designen är som den är, vad som händer pedagogiskt, och vad lärare bör hålla koll på.",
      sections: [
        {
          question: "Varför ska eleverna ha tillgång till detektiv-boten utanför klassrummet?",
          answer: [
            {
              type: "p",
              text: "Eleverna möter retoriska knep flera gånger om dagen — i sina flöden, i samtal, i reklam. Klassrumsundervisning kan ge språk, men språket fastnar bara om det används RUNT där eleverna bor pedagogiskt: när de scrollar, när de bråkar, när de tvekar.",
            },
            {
              type: "p",
              text: "En tillgänglig bot förvandlar en engångsövning till en pågående vana. Det är skillnaden mellan att lära sig om dark patterns en gång och att ha ett namn att säga när TikTok manipulerar dig nästa gång.",
            },
            {
              type: "p",
              text: "Detta är inkapslat i Cook m.fl. (2017) — inoculation fungerar BÄST när den är upprepad och tillgänglig, inte när den är en lektion i april.",
            },
          ],
        },
        {
          question: "Varför är system-prompten skriven så här?",
          answer: [
            {
              type: "p",
              text: "Designen följer fyra principer:",
            },
            {
              type: "list",
              items: [
                "STRUKTUR. Eleverna får samma format varje gång (sammanfattning → knep → vad saknas → fråga tillbaka). Det är pedagogiskt avgörande — när formatet är förutsägbart kan eleverna fokusera på INNEHÅLLET.",
                "CITAT. Boten är instruerad att CITERA från texten när den markerar knep. Det förhindrar luddiga ”det här är manipulation”-svar och tvingar konkretion.",
                "POLITISK NEUTRALITET. Boten ska inte säga vem som har rätt. Den ska visa språkmönster. Det är inte bara av politiska skäl — det är pedagogiskt: eleven ska forma sin egen åsikt utifrån mer info, inte få en åsikt serverad.",
                "FRÅGA TILLBAKA. Sista steget är alltid en fråga TILL eleven. Det förhindrar passivt konsumerande och säkerställer att eleven tänker själv.",
              ],
            },
          ],
        },
        {
          question: "Hur ska jag prata med eleverna om botens begränsningar?",
          answer: [
            {
              type: "list",
              items: [
                "BOTEN ÄR INTE OFELBAR. Den missar ibland och markerar ibland fel. Det är OK — använd det som tränings-tillfälle. ”Tycker du AI:n har rätt här?”",
                "BOTEN ÄR INTE EN DOMARE. Den säger inte vem som har rätt. Den hjälper er se hur språk fungerar — sen får ni tänka själva.",
                "BOTEN SVARAR OLIKA. Exakt samma text kan ge olika analys nästa gång. Det är inte ett fel — det är hur AI fungerar.",
                "BOTEN SER INTE BILDER. Sociala medier är ofta text + bild + tonfall. Boten ser bara texten. Det är en begränsning.",
                "BOTEN BEHÖVER ER. Den är ett verktyg, inte en lärare. Använd den för att TÄNKA, inte för att SLIPPA TÄNKA.",
              ],
            },
          ],
        },
        {
          question: "Vad gör jag om en elev klistrar in något problematiskt?",
          answer: [
            {
              type: "p",
              text: "Det kommer att hända. En elev klistrar in en stark Trump-tweet, en kontroversiell svensk post, ett uttalande som triggar starka reaktioner.",
            },
            {
              type: "p",
              text: "Plan: (1) Hänvisa till regeln om offentliga texter — den är OK om den är offentlig. (2) Styra samtalet till SPRÅK, inte SAK: ”ja, den här texten väcker starka känslor — låt oss titta på VILKA SPRÅKLIGA VAL som gör det.” (3) Om texten är extremt stötande (hot, hat, kränkningar): ta texten ner, prata om varför, fortsätt med en annan.",
            },
            {
              type: "p",
              text: "Det är OK att inte ha alla svar. Det är OK att säga: ”det här är komplicerat, vi tar det med er klasslärare/kurator/föräldrar.” Boten ska göra retorisk analys synlig — den ska INTE ersätta vuxen omdöme om vad som är lämpligt att diskutera i skolan.",
            },
          ],
        },
        {
          question: "Hur följer jag upp över tid?",
          answer: [
            {
              type: "list",
              items: [
                "INTRODUCERA EN GÅNG. Den första lektionen är intensiv — boten introduceras, prövas på 3 förberedda texter, eleverna får hemuppgift.",
                "ÅTERKOM VARJE VECKA. Sätt 5 minuter i en annan lektion (svenska, SO, NO) där en elev visar en text de hittat och kört i boten. Inget mer.",
                "KOPPLA TILL ANDRA AKTIVITETER. Boten är ett naturligt nästa steg efter aktivitet 5.1 (där AI berättar sina knep) och 5.3 (där eleverna själva skriver knep-texter). Den hör också ihop med 6.2 Cranky Uncle (samma logiska tradition).",
                "MÄT MED HISTORIER. Den bästa indikatorn på att övningen funkat är när en elev kommer in och säger: ”titta vad jag hittade i NN:s flöde — jättemycket halmgubbar!” Det är förvandlingen från lektion till vana.",
                "DOKUMENTERA BOTENS FEL. När boten missar eller felmarkerar — spara exemplet. Det är guld för nästa lektion. ”Förra veckan sa boten X. Vad tycker ni nu, ett halvår senare?”",
              ],
            },
          ],
        },
      ],
    },
  },

  // ============================================================
  // 5.3 BYGG DIN EGEN KNEP-TEXT — PREBUNKING GENOM PRODUKTION
  // ============================================================
  {
    id: "bygg-knep-text",
    number: "5.3",
    title: "Bygg din egen knep-text",
    chapter: "retoriska-knep",
    level: "workshop-byggsten",
    blurb:
      "Eleven väljer ett retoriskt knep, skriver en kort övertalande text med det inbakat, och låter sedan AI:n peka ut knepet. Prebunking genom egen produktion.",
    purpose:
      "Att SJÄLV producera ett retoriskt knep gör att man känner igen det utifrån. Det är prebunking-principen tillämpad på språk: när du har byggt halmgubben själv, ser du den i andras texter direkt.",
    trains: [
      "retorisk-medvetenhet",
      "prebunking",
      "manipulationsmedvetenhet",
      "sjalvreflektion",
    ],
    ageRanges: ["vuxen-workshop", "ak4-6", "ak7-9"],
    duration: "25 min (workshop) / 40 min (klassrum)",
    durationMinutes: 30,
    digitalTools: true,
    materials:
      "AI-tjänst (SkolUp AI, Copilot eller ChatGPT) + lista med de 9 knepen + papper för anteckningar. Funkar även analogt om man INTE använder AI till verifieringen.",

    workshopExperience: [
      {
        type: "callout",
        tone: "info",
        title: "Vad du ska göra och varför",
        body:
          "Du ska SJÄLV bygga en text med ett valt retoriskt knep — och sedan be AI:n analysera vad du gjort. Det är prebunking genom produktion: när du själv har byggt halmgubben en gång, ser du den i andras texter direkt resten av livet. Den här övningen funkar BÄST som tredje steg efter 5.1 och 5.2 — eleverna har då sett knepen i AI:ns och i andras texter, nu ska de pröva själv.",
      },
      { type: "h", text: "Så gör du steg för steg" },
      {
        type: "steps",
        steps: [
          {
            title: "Välj ett knep att jobba med",
            body: "Använd listan: cherry-picking, falskt motsatspar, känsloladdat språk, halmgubbe, glidande slutsats, anekdotbevis, auktoritetsargument, whataboutism, ad hominem. Välj ett du tycker är intressant — eller ett du själv möter ofta.",
          },
          {
            title: "Välj en tes",
            body: "Något du själv har en åsikt om. ”Skoldagen borde börja kl 10.” ”Läxor borde vara förbjudna.” ”Hund är bättre än katt.” Tesen ska vara LÄTT att försvara — det är knepet som ska göra jobbet.",
          },
          {
            title: "Skriv 3–5 meningar",
            body: "Använd ditt valda knep så tydligt du bara kan. Överdriv om du måste — det är pedagogiskt smart. Du ska KÄNNA hur knepet fungerar.",
          },
          {
            title: "Be AI peka ut det",
            body: "Klistra in din text i AI:n och be: ”Vilket eller vilka retoriska knep använder den här texten? Citera meningarna och förklara.” Notera vad AI:n säger.",
          },
          {
            title: "Reflektera",
            body: "Hittade AI:n knepet du LADE IN? Hittade den knep du INTE menade att lägga in (men som ändå blev där)? Varför är det svårare att vara ”ren” än man tror?",
          },
        ],
      },
      { type: "h", text: "Tänk på" },
      {
        type: "list",
        items: [
          "Det är OK att överdriva. Det är pedagogiken — du SKA göra knepet uppenbart för att känna det.",
          "Ett knep ”ger gas” åt en text — det är inte alltid manipulation. Men nu vet du att det är där, och kan välja om du vill ha det där eller inte.",
          "AI är ofta bra på att hitta uppenbara knep. Den missar oftare subtila — det är pedagogiskt intressant: när är AI inte tillräcklig?",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Varför just bygg-själv?",
        body:
          "Att producera ett retoriskt knep själv är pedagogiskt starkare än att bara läsa om det. Roozenbeek & van der Linden (2019) visade detta med Bad News-spelet: att SJÄLV skriva fejk-nyheter ger varaktigare immunitet än att bara lära sig om dem. Samma princip — applicerad på retoriska knep.",
      },
    ],

    teacherGuide: [
      { type: "h", text: "Förberedelser" },
      {
        type: "list",
        items: [
          "Förbered en utskrift av de 9 knepen + en exempel-mening per knep. Eleverna behöver den för att välja och för att jämföra.",
          "Förbered 2–3 EGNA exempel — texter du själv skrivit med ett tydligt knep — som du kan visa som modell. Eleverna ska se att det är OK att överdriva.",
          "Bestäm i förväg: ska vi använda AI till analysen, eller ska eleverna analysera VARANDRAS texter? Båda funkar. AI ger snabb feedback. Pararbete ger djupare diskussion.",
          "Förbered hur ni skyddar texter från att sprida sig om de är obehagliga (ad hominem-övningar kan bli personliga). Sätt regel: tesen ska INTE handla om personer i klassen, skolan, eller specifika kompisar.",
        ],
      },
      { type: "h", text: "Så här kör du" },
      {
        type: "steps",
        steps: [
          {
            title: "Inramning",
            body: "”Nu ska ni själva bygga retoriken. Inte för att lära er manipulera — utan för att SE manipulationen utifrån, från insidan. Det är som att lära sig magi: när du vet hur tricket görs, blir det aldrig samma igen.”",
            time: "5 min",
          },
          {
            title: "Visa modell",
            body: "Visa 1–2 av dina egna exempel på storskärm. Eleverna ska se nivån — det är OK att överdriva, det är OK att vara dramatisk.",
            time: "5 min",
          },
          {
            title: "Skriv tyst",
            body: "Eleverna väljer knep och tes, skriver i 10 minuter. Inga datorer än — bara papper eller anteckningsappen. Det är viktigt att de tänker själva först.",
            time: "10 min",
          },
          {
            title: "Verifiering",
            body: "Eleverna kör sin text i AI:n och ber den analysera. Skriv ner: hittade AI:n knepet du lade in? Hittade den andra? Vilken mening var den TYDLIGASTE?",
            time: "10 min",
          },
          {
            title: "Galleri",
            body: "Eleverna går runt och läser varandras texter. För varje text: gissa knepet INNAN du läser klart. Klistra en post-it med ditt gissning.",
            time: "10 min",
          },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Ad hominem & känsliga teser",
        body:
          "Ad hominem-knepet kan bli problematiskt om eleverna riktar det mot någon riktig person. Sätt regel: tesen får inte handla om någon i klassen, skolan, kommunen, eller någon de känner personligt. Använd hellre påhittade personer (”Filip Skoldirektör tycker…”) eller offentliga roller utan namn (”vissa lärare tycker…”).",
      },
    ],

    studentInstructions: [
      {
        type: "p",
        text: "Idag är DU retoriken. Du ska välja ett knep, skriva en text med det, och sedan be AI:n peka ut vad du gjorde. När du har BYGGT en halmgubbe en gång, ser du dem aldrig samma igen.",
      },
      { type: "h", text: "Steg för steg" },
      {
        type: "list",
        ordered: true,
        items: [
          "Titta på listan med 9 knep. Välj ett. Tips: välj ett du själv MÖTER ofta — då blir övningen mest värdefull.",
          "Välj en tes. Något du själv har åsikt om. ”Läxor borde vara förbjudna.” ”Hund är bättre än katt.” ”Glass är världens bästa mat.”",
          "Skriv 3–5 meningar som försöker övertyga om tesen. Använd ditt knep så TYDLIGT du bara kan. Du får överdriva — det är poängen.",
          "Läs texten högt för dig själv. Hör knepet? Skulle du själv köpa argumentet?",
          "Klistra in texten i AI:n. Be: ”Vilket eller vilka retoriska knep använder den här texten?” Läs AI:ns analys.",
          "Skriv ner: HITTADE AI:n knepet du tänkte? HITTADE den andra knep du inte tänkte på men som ändå hamnade där?",
          "Visa din text för en kompis och se om de gissar knepet utan att veta vilket du valde.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Regler",
        body:
          "Tesen får inte handla om någon riktig person ni känner — inte klasskamrater, lärare, släkt eller kompisar. Använd hellre påhittade exempel eller allmänna roller (”vissa vuxna tycker”, ”många elever brukar säga”).",
      },
      { type: "h", text: "Att fundera på" },
      {
        type: "list",
        items: [
          "Var det LÄTT att skriva med knepet? Eller svårare än du trodde?",
          "AI hittade kanske KNEP DU INTE TÄNKT PÅ. Hur kom de in?",
          "Skulle du själv kunna skriva en text om något du bryr dig om UTAN att använda ett enda knep? Vad skulle den säga i så fall?",
          "Vilket knep blev SVÅRAST att se i andras texter när du läste klassens galleri?",
        ],
      },
    ],

    discussion: [
      "Vilket knep var lättast att skriva med? Vilket var svårast?",
      "AI:n hittade kanske knep du inte själv lade in. Varför hamnade de där?",
      "Är det fusk att kunna ANVÄNDA retoriska knep medvetet? Eller är det bara hantverk?",
      "Skulle skolarbeten bli bättre eller sämre om man fick välja ett knep att använda?",
      "Vad är skillnaden mellan att SKRIVA retorik och att MANIPULERA?",
    ],
    pitfalls: [
      "Vissa elever tar inte i tillräckligt — texten blir för försiktig och knepet syns inte. Modellera tydligt att överdrift är OK, även välkommen.",
      "Vissa elever tar i FÖR mycket och hamnar i hat eller kränkningar — särskilt med ad hominem. Sätt regel i förväg: tesen får inte handla om någon i klassrummet.",
      "AI:n hittar inte alltid det knep eleven menade. Använd det pedagogiskt: ”varför ser AI:n något annat än vad du planerade?”",
      "Det kan kännas konstigt eller obekvämt att producera knepen själv. Påminn att det är PEDAGOGIK — som att lära sig att stoppa svordomar genom att se hur de byggs.",
    ],
    variations: [
      "Tävla i lag: varje lag får ett knep, samma tes. Vem skriver den tydligaste versionen? Klassen röstar med sluten omröstning.",
      "Vänd på det: SKRIV en text utan ett enda knep (svårare än det låter). Be AI:n verifiera. Vad blev kvar?",
      "Komparativ analys: skriv samma tes med tre olika knep. Vilken version är mest övertygande? Vilken är ärligast?",
      "Koppla till svenskämnet: använd övningen som förarbete till en argumenterande text. Eleverna identifierar knep de använt i ett första utkast — och redigerar dem bort eller behåller dem medvetet.",
      "Knep-byte: två elever skriver var sin text. Sen byter de — och försöker REDIGERA bort knepen i den andras text utan att förlora poängen.",
    ],
    evidenceStrength: "strong",
    evidenceSources: [
      {
        ref: "roozenbeek-vanderlinden-2019",
        relevance:
          "Bad News-studien är den evidensbaserade grunden för prebunking-via-produktion. Att SJÄLV skriva med en manipulationsteknik ger varaktigare immunitet än att bara studera den utifrån — exakt vad denna övning bygger på.",
      },
      {
        ref: "cook-2017",
        relevance:
          "Inoculation theory tillämpad på retorik. När eleverna själva använder knepen får de en starkare cognitive antibody mot att bli övertygade av samma knep i framtiden.",
      },
      {
        ref: "lewandowsky-2017",
        relevance:
          "Visar att prebunking är mer effektivt än debunking. Den här övningen är prebunking i renaste form — eleverna möter teknikerna AKTIVT före de möter dem manipulativt i sina flöden.",
      },
      {
        ref: "vanderlinden-2017",
        relevance:
          "Tidig studie på psykologisk vaccinering mot misinformation. Den här övningen är en klassrumsversion: lågdos-exponering för manipulationsknepen i en trygg miljö.",
      },
    ],
    chainsWellWith: [
      "ai-berattar-sina-knep",
      "retorik-detektiven",
      "skriv-fejkad-nyhetsartikel",
      "cranky-uncle",
    ],

    teacherModellingScript: `Nu ska ni själva bygga. Inte för att lära er manipulera — utan för att SE manipulation utifrån genom att ha varit på insidan.

Jag visar er först. (Visa exempel.) Se? Jag valde halmgubbe. Min tes är ”vi borde få ha hund i klassrummet”. Min text överdriver vad motståndarna säger. Jag skriver: ”De som är emot hundar i skolan menar att alla barn är allergiker — vilket inte stämmer.” Det är halmgubben. Jag har FÖRENKLAT och ÖVERDRIVIT vad min motståndare tycker, så det blir lätt att slå ner.

Ni gör samma sak. Välj ett knep — gärna ett ni MÖTER ofta. Välj en tes ni har åsikt om. Och skriv. Överdriv om ni vill. Det är poängen.

Sen kör vi AI:n på texten — och ser om AI:n hittar samma knep som ni tänkte. Eller om den hittar annat.

När ni har gjort det här en gång, ser ni knepen i naturen för alltid. Det är hela poängen.`,

    deepDive: {
      intro:
        "Att producera retoriska knep själv är pedagogiskt kraftfullt på ett sätt som passiv lärning aldrig är. Det är samma logik som Bad News-spelet, Cranky Uncle, eller att lära sig svordomar genom att förstå deras struktur. Här utvecklar vi varför, hur, och vad lärare bör vara observanta på.",
      sections: [
        {
          question: "Varför är produktion starkare än passiv lärning?",
          answer: [
            {
              type: "p",
              text: "Forskningen är tydlig: vi minns bättre, ser mönster snabbare, och kan tillämpa kunskapen mer flexibelt när vi har PRODUCERAT med ett begrepp än när vi bara läst om det. För retorik är effekten särskilt stark, eftersom retorik HANDLAR om språkliga val — och att göra valen själv tränar metakognitionen.",
            },
            {
              type: "p",
              text: "Roozenbeek & van der Linden (2019) testade detta med Bad News-spelet. Användare som spelade spelet (där man bygger falska nyheter) blev signifikant mer immuna mot manipulationstekniker i en kontrollerad uppföljning — mer än kontrollgruppen som bara läst om manipulation.",
            },
            {
              type: "p",
              text: "För mellanstadie-eleverna är effekten dubbelt så stor: de lär sig knepen kognitivt, OCH de lär sig att de har AGENS — de kan välja att använda eller inte använda knep i sitt eget skrivande. Det är empowerment, inte bara försvar.",
            },
          ],
        },
        {
          question: "Är det inte farligt att lära eleverna manipulera?",
          answer: [
            {
              type: "p",
              text: "En berättigad oro — och en som forskningen besvarat. Studier av prebunking har FÖLJT UPP deltagare upp till ett år senare och funnit att de använder teknikerna LÄTTARE i analytisk riktning (för att avslöja andras manipulation), INTE i produktiv riktning (för att själva manipulera andra).",
            },
            {
              type: "p",
              text: "Tänk på det som karatträning: när du har lärt dig hur en spark fungerar, är du bättre på att försvara dig — du blir inte automatiskt en gatuvåldsman. Att SE knepet ger immunitet; att kunna namnge det ger kontroll.",
            },
            {
              type: "p",
              text: "Det viktiga är RAMMEN. Lärare som introducerar övningen som ”vi lär oss att vara bättre kritiska läsare” får helt andra utfall än lärare som introducerar den som ”vi lär oss att övertyga.” Övningen ska sluta med reflektion: när är knep OK (öppen retorik)? När är det manipulation (dold avsikt)?",
            },
          ],
        },
        {
          question: "Vad gör AI för pedagogiken?",
          answer: [
            {
              type: "p",
              text: "AI:n är ett verifieringsverktyg som ger snabb, individuell feedback — något lärare själva sällan kan ge på 25 olika texter samtidigt. När eleven har skrivit sin text och AI:n säger ”jag hittar ett tydligt halmgubbe-argument i mening 2 och en undertext av känsloladdat språk i mening 4”, får eleven konkret feedback i ögonblicket.",
            },
            {
              type: "p",
              text: "Men AI:n är inte bara en granskare — den är också ett spegel. När den hittar knep som eleven INTE tänkte sätta in, blir det synligt att språk ofta gör mer än vi planerar. Det är en avgörande insikt om retorik: knepen finns där även när vi inte ”väljer” dem.",
            },
            {
              type: "p",
              text: "Pedagogiskt motsvarar AI:n en personlig lärare som har tid för var och en. Men — och detta är viktigt — den ersätter inte klassgemenskapen. Galleri-momentet där eleverna LÄSER varandras texter och GISSAR knepen är pedagogiskt minst lika viktigt: det är då de tränar sin egen blick, inte bara läser AI:ns analys.",
            },
          ],
        },
        {
          question: "Hur kopplar jag övningen till skrivande i svenskämnet?",
          answer: [
            {
              type: "list",
              items: [
                "ARGUMENTERANDE TEXT. Övningen är perfekt förarbete till en argumenterande text. Eleverna har språk för vad de gör, och kan medvetet välja att använda eller undvika knep.",
                "TIDNINGSANALYS. När ni nästa gång läser en debattartikel — be eleverna identifiera knepen som om de byggt texten själva. ”Vilket knep använder den här?”",
                "REDIGERING. Använd AI:n som granskare i andra skrivuppgifter. ”Be AI:n hitta retoriska knep i din egen uppsats — vilka behåller du, vilka tar du bort?”",
                "JÄMFÖR KÄLLOR. Två texter om samma ämne — vilka knep använder var och en? Vad säger det om perspektivet?",
                "FACKTEXTER VS OPINION. Synliggör skillnaden: en faktatext ska sträva efter att vara knep-fri, en opinionstext får använda knep men ska göra det öppet.",
              ],
            },
          ],
        },
        {
          question: "Vad är det viktigaste eleverna ska kunna ta med sig?",
          answer: [
            {
              type: "list",
              items: [
                "Jag KAN bygga ett retoriskt knep. Det betyder att jag också kan se det i andras texter.",
                "Knep är inte alltid manipulation. De är hur språk fungerar. Men jag har rätt att veta att de är där.",
                "Att skriva utan knep är svårare än man tror — och ibland tråkigare. Det är OK att välja knep, om jag är öppen med det.",
                "AI:n kan hjälpa mig se vad jag gjort — men jag måste tänka själv om jag VILL ha det där.",
                "Det jag möter i mitt flöde, i nyheter, i skolböcker — har ofta knep. Nu har jag språk att se dem.",
              ],
            },
          ],
        },
      ],
    },
  },
];
