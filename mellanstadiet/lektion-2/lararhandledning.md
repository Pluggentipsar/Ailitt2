# Lärarhandledning — Lektion 2: Vad är AI egentligen?

> **Dimension 1:** Vad är AI?
> **Målgrupp:** Mellanstadiet, åk 4-6
> **Tid:** 90-120 min (1-2 lektionspass)
> **Förkunskap:** Lektion 1 (eleverna ska känna till tidslinjen och de tre vågorna)

---

## Lektionens kärnfråga

> *Hur kan något som inte tänker ändå verka så smart?*

Eleverna ska efter lektionen kunna:

- **Förklara** med egna ord vad mönsterigenkänning är, och varför det är AI:s grundprincip
- **Beskriva** vad träningsdata är och varför det spelar roll
- **Identifiera** *bias* i AI — och förklara att bias inte är "ondska" utan en följd av ensidig data
- **Tillämpa** Tänkartrappan i en konkret AI-uppgift (eget arbete med bias-test)

---

## Lektionens upplägg i sex steg

| Steg | Vad | Tid | Vem leder |
|------|-----|-----|-----------|
| A | **Kroken**: "Det var en gång en..." — språkmodellen i klassrummet | 8 min | Lärare |
| B | **Fallet**: Klassen testar AI live + Amazon-historien + 3Blue1Brown-klipp | 15 min | Lärare visar, klassen reagerar |
| C | **Kärntexten**: Eleverna läser elevtexten + samtal | 15 min | Eleverna |
| D | **Interaktivt**: Mönsterlabbet (bias-simulator) | 25 min | Eleverna i grupper / individuellt |
| E | **Egen praktik**: Tvillingbild-experimentet med AI | 20 min | Eleverna individuellt + helklass |
| F | **Landning**: "AI gissar smart — den vet inte" | 7 min | Helklass |

**Total: 90 min.** Vid 2 pass: paus efter D.

---

## Förberedelser inför lektionen

### Det här behöver du som lärare ha klart

1. **Läs lärartexten** (`lararetext.md`) — *särskilt* avsnittet om bias. Det är den centrala punkten i lektionen och det är *lätt* att hamna fel pedagogiskt.
2. **Bestäm klipp** från klipp-biblioteket. Minst: ett 3Blue1Brown-utdrag eller ett liknande visuellt förklaringsklipp.
3. **Testa Mönsterlabbet** — kör igenom hela övningen själv så du vet vad eleverna kommer uppleva. Alternativt: gå till **teachablemachine.withgoogle.com** och bygg en egen bildmodell på 3 minuter.
4. **Förbered live-test:** välj en lokal eller specifik fråga ("Berätta om vår skola" / "Berätta om [lokal förening]") som du *vet* AI kommer hantera dåligt.
5. **Repetera tidslinjen från L1** — ta 2 min i början för att aktivera förkunskap.

### Material som behövs

- Projektor + ljud
- Eleverna har tillgång till AI-verktyg (verktygsoberoende — ChatGPT, Microsoft Copilot, Snap AI, Skol-AI; vad ni nu har)
- Mönsterlabbet (digital komponent när webbsidan är klar — eller analog version, se spec)
- Tillgång till **teachablemachine.withgoogle.com** eller motsvarande
- Eleverna behöver penna + papper
- Samla in AI-vecka-loggarna från L1 (hemuppgift)

---

## Steg A: Kroken (8 min)

**Mål:** Visa konkret vad en "språkmodell" gör — *innan* vi använder det ordet.

### Så här gör du

1. Skriv på tavlan: **"Det var en gång en..."**
2. Klassen ropar nästa ord. Skriv ner det. (Antagligen: "prinsessa" eller "kung".)
3. Skriv: **"Det var en gång en prinsessa som..."**
4. Klassen ropar nästa ord. Skriv ner. (Antagligen: "bodde" eller "var".)
5. Fortsätt 5-6 ord.
6. **Pausa.** Säg:
   > *"Det ni precis gjorde — gissa nästa ord baserat på vad som troligen kommer härnäst — det är vad ChatGPT, Snap AI och alla andra språk-AI:er gör. Hela tiden. Ord för ord. Skillnaden är att de har sett biljoner exempel istället för era hundra sagor."*
7. **Fyll på tidslinjen från L1:** Sätt upp "ELIZA, 1966 — första chatboten" (om ni inte redan tagit den).

### Vad du kan vänta dig

- Skratt och engagemang. Bra start.
- Vissa elever föreslår orimliga ord som chock-fö effekt — det är OK, lyft det: "AI hade inte föreslagit det heller. Den föreslår det *vanligaste* nästa ordet."

---

## Steg B: Fallet (15 min)

**Mål:** Tre konkreta exempel som visar *vad mönsterigenkänning är*, *vad träningsdata är* och *vad bias är*.

### Så här gör du

#### B1: Live-test — klassen utmanar AI (5 min)

1. Öppna ert AI-verktyg på storbild.
2. Skriv en fråga om något lokalt och specifikt — exempelvis:
   - *"Berätta om [er skola]"*
   - *"Vem driver [lokal förening]?"*
   - *"Vad heter rektorn på [er skola]?"*
3. Läs svaret högt. Pausa.
4. Fråga: **"Stämmer detta?"**
5. Eleverna kommer säga "nej" — för det stämmer aldrig helt med lokala specifika frågor. AI hittar på men låter självsäker.
6. Säg:
   > *"Notera. AI ljög inte med flit. Den gissade — för det är vad den gör. Den såg hur sådana texter brukar se ut, och fyllde i."*

#### B2: 3Blue1Brown — neural network på 3 minuter (5 min)

1. Visa **första 3 minuterna** av 3Blue1Browns "But what is a Neural Network?" (YouTube). Sätt på undertexter.
2. Du behöver *inte* förstå allt själv. Klippet visar visuellt hur en AI känner igen siffran "3" i en bildruta.
3. Stoppa efter 3 min. Säg:
   > *"AI känner igen mönster. Den känner igen siffran 3 inte för att den vet vad 3 är — utan för att den sett miljoner exempel av 3:or."*

#### B3: Amazon-historien (5 min)

1. Berätta (utan klipp — bara muntligt eller med en slide):
   > *"År 2014 byggde Amazon en AI för att läsa CV och välja ut bra sökanden till jobb. Den tränades på 10 år av CV som faktiskt anställts. Året var 2018 när Amazon blev tvungna att skrota AI:n. Den hade nämligen lärt sig att straffa ord som 'kvinna'. CV som nämnde 'kvinnornas schackklubb' fick lägre poäng. Hon sökte med 'fotbollsklubben Mälarhöjdens damer' — minus poäng."*
2. Pausa. Fråga: **"Var AI:n elak?"**
3. Diskutera. Den var inte elak — den hade tränats på 10 år av anställningar där företaget mest anställt män. Den hade *lärt sig mönstret*: "Anställda är oftast män, alltså är manliga ord positiva."
4. **Det här är bias.** Inte ondska. Inte rasism. Det är *data som kommer in*.

### Material för slidedeck (om Joel skapar ett)

3 slides räcker för B:
- Slide 1: Live-testet (skärmbild av ert misslyckade AI-svar — fyll i efteråt)
- Slide 2: 3Blue1Brown thumbnail + sökord
- Slide 3: Amazon — citat eller ikon

---

## Steg C: Kärntexten (15 min)

**Mål:** Eleverna får gemensam grundförståelse av tre begrepp: *mönster*, *träningsdata*, *bias*.

### Så här gör du

1. Dela ut elevtexten (`elevtext.md`).
2. Läsupplägg (välj efter klass):
   - **Tystläsning** + 3 kontrollfrågor
   - **Pararbete** — läs två stycken högt, prata om vad det betyder
   - **Helklasshögläsning** — läraren läser, klassen följer
3. Efter läsning — **3 frågor i helklass** (3 min):
   - Vad menas med *mönsterigenkänning*?
   - Vad är *träningsdata*?
   - Varför kan AI vara *bias*?

### Anpassningar

- **Snabba elever:** Tilläggstext om "stochastic parrot" (lärartext, fördjupningsruta)
- **Svaga läsare:** TTS-version, eller att läsa endast huvudpunkter
- **NPF-stöd:** Tydlig struktur — markera nyckelord i förväg

---

## Steg D: Mönsterlabbet (25 min)

**Mål:** Eleverna *upplever* hur AI tränas och hur bias uppstår, genom att själva göra det.

### Så här gör du

#### Variant A: Digital (Mönsterlabbet på webbsidan)

1. Eleverna går (i par eller individuellt) till webbsidan.
2. **Steg 1 (5 min):** Träna AI:n att skilja på hund och katt. Eleven drar in 5 hundbilder och 5 kattbilder. Testar — AI gissar dåligt.
3. **Steg 2 (5 min):** Eleven drar in 30 bilder per kategori. Testar — AI gissar bättre. Lärdom: **fler exempel = säkrare AI**.
4. **Steg 3 (5 min):** Eleven får uppdrag: "Träna AI bara på *vita* katter och *bruna* hundar." 30 bilder var. Testar med en *svart* katt — AI tror det är hund. **Lärdom: ensidig data = ensidig AI.**
5. **Steg 4 (10 min):** Helklassgenomgång. Vad upplevde de?

#### Variant B: Google Teachable Machine (om webbsidan inte är klar)

Samma upplägg men på **teachablemachine.withgoogle.com**:

1. Eleverna (par-vis) tränar en bildmodell på sin egen kameraström.
2. Klass A: "tummen upp" vs "tummen ner".
3. Klass B (avancerad): "kamera mot en skugga" vs "kamera mot ljus" — se hur AI lär sig oavsiktliga saker.

#### Variant C: Helt analog

1. Klassen sitter i ring. Läraren håller upp kort med olika djur.
2. Eleverna ska "träna" en kompis att gissa "katt" eller "hund" — genom att bara visa kort utan att säga vad det är.
3. Visa 3 kort. Be eleven gissa. Visa 30 kort. Be gissa. **Fler exempel = bättre gissning.**
4. Visa bara *vita* katter. Eleven gissar säkert. Visa sedan en svart katt — eleven får inget mönster att jämföra med.

### Vad du som lärare letar efter

- AHA-momentet när eleven inser att *ensidig data = ensidig AI*
- Förståelsen att bias är data, inte ondska
- Insikten att **mer data inte automatiskt löser bias** — det måste vara *bredare* data

---

## Bonus-övning D2: Antropomorfism-detektiven (10 min)

> **Inspiration:** Raspberry Pi Foundation (2025) om antropomorfism-pedagogik. SAILD betonar epistemisk medvetenhet om vad AI faktiskt är vs vad det verkar vara.
>
> **Syfte:** Träna eleverna att *själva* upptäcka när språk gör AI mänskligt — och formulera om.

### Så här gör du

1. Skriv 10 påståenden på tavlan (eller dela ut som papper):

```
ANTROPOMORFISM-DETEKTIVEN

Är dessa påståenden korrekta? Om inte, omformulera dem.

1. "AI:n vet svaret på min fråga."
2. "ChatGPT förstår vad jag menar."
3. "Snap My AI känner när jag är ledsen."
4. "AI:n tänker innan den svarar."
5. "Min telefon vet var jag är."
6. "AI:n vill hjälpa mig."
7. "AI:n har lärt sig svenska."
8. "Spotify gillar samma musik som jag."
9. "AI:n hittar på saker."
10. "AI:n bryr sig inte om vad jag tycker."
```

2. **I par eller grupper, 5 min:** Eleverna går igenom påståendena och föreslår omformuleringar.

3. **Helklass, 5 min:** Diskutera. Visa exempel på korrekta omformuleringar:

| Påstående | Omformulering |
|-----------|---------------|
| "AI:n vet svaret" | "AI:n producerar ett svar baserat på mönster" |
| "ChatGPT förstår" | "ChatGPT känner igen mönster i ditt språk" |
| "Snap My AI känner" | "Snap My AI matchar dina ord mot 'ledsna' mönster" |
| "AI:n tänker" | "AI:n bearbetar input och producerar output" |
| "Telefonen vet var jag är" | "Telefonen sparar GPS-koordinater" |
| "AI:n vill hjälpa" | "AI:n är designad att producera hjälpsam-liknande output" |
| "AI:n har lärt sig svenska" | "AI:n har tränats på stora mängder svensk text" (acceptabelt — *träning* är tekniskt korrekt) |
| "Spotify gillar samma musik" | "Spotifys algoritm rekommenderar musik baserat på ditt lyssnar-mönster" |
| "AI:n hittar på" | "AI:n producerar påståenden utan grund" (men "hittar på" är OK pedagogiskt) |
| "AI:n bryr sig inte" | "AI:n har inga preferenser eller känslor" |

### Vad du som lärare letar efter

- Eleverna *upptäcker* själva antropomorfismen
- Förståelse för *varför* det spelar roll (försvagar agens, skapar magi-känsla)
- Insikt: språk är *makt* — när vi säger AI är "smart" tänker vi om den som "någon"

### Pedagogisk poäng

> *Säg vänligt: "Vi använder ofta de korta orden — 'AI tänker', 'AI vet'. Det är OK ibland. Men kom ihåg: det är **förenklingar**. AI har inga tankar, inget vetande, ingen vilja. När det blir viktigt att vara exakt — använd de längre orden."*

Detta blir *extra användbart* i L4 (när vi pratar om "hallucinationer") och L6 (när vi pratar om "AI-vänner").

### Kopplingar

- Se `../sprakguide-antropomorfism.md` för fullständig korrigeringstabell
- Övningen kan upprepas i mini-form i L4 och L6 som påminnelse

---

## Steg E: Egen praktik — Tvillingbild-experimentet (20 min)

**Mål:** Eleven använder bild-AI och ser bias *i verkligheten* med sitt eget verktyg. Tänkartrappan tränas igen: *Jag tänker först → AI hjälper → Jag granskar*.

### Så här gör du

Eleven får en uppgiftsmall (kan ges på papper eller digitalt):

```
Tvillingbild-experimentet

1. Tänk först:
   Innan du frågar AI — skriv ner:
   "När jag säger 'lärare' — vad ser jag framför mig?"
   ___________________________________________________

2. AI hjälper:
   Be ett bild-AI (eller Bing/DALL-E/Snap) rita:
   PROMPT 1: "En lärare"
   Spara bilden eller skärmdumpa den.
   
   PROMPT 2: "En lärare i Sverige år 2026"
   Spara bilden.
   
   PROMPT 3: "En kvinnlig lärare med slöja"
   Spara bilden.

3. Granska:
   Vad var lika? Vad var olika?
   Vad gissade AI:n om "lärare" som *standard*?
   Visste AI vad "lärare i Sverige år 2026" ser ut som?
   
   Vad lär detta dig om AI:s träningsdata?
   ___________________________________________________
   ___________________________________________________
```

**Helklassreflektion (8 min):**

- Visa några elevers bilder bredvid varandra
- Diskussion: *vad blir AI:s "default-bild" av en lärare?*
- Vanlig observation: bilder med vita män, eller en specifik åldersgrupp
- Lyft: detta är *inte* AI:s "åsikt" — det är *träningsdatans återklang*

### Säkerhetsnät

Om AI vägrar generera vissa bilder ("kvinnlig lärare med slöja" kan trigga säkerhetsfilter): notera det. **Det är ett intressant resultat i sig.** Lyft frågan: *"Varför vägrade AI:n? Vem bestämde det? Är det rätt?"*

(Detta är en bra brygga till L5 om etik.)

### Variant utan bild-AI

Om klassen inte har bild-AI-tillgång:

- Använd text-AI istället
- Be AI: "Beskriv en lärare i tre meningar." Sedan: "Beskriv en lärare i Sverige år 2026 i tre meningar." Jämför.
- Notera ord som dyker upp eller inte dyker upp

---

## Steg F: Landning (7 min)

**Mål:** Kondensera. Förbereda för lektion 3.

### Så här gör du

1. **Skriv på tavlan tre nyckelord från lektionen:**
   ```
   MÖNSTER • TRÄNINGSDATA • BIAS
   ```
2. Be eleverna formulera (i par, 2 min): **"Vad betyder dessa ord, med dina egna ord?"**
3. Helklassdelning (3 min). Skriv elevernas formuleringar bredvid orden.
4. Sammanfatta:
   > *"AI gissar smart — den vet ingenting säkert. Vad den 'kan' beror på vad den lärt sig. Och vad den lärt sig speglar världen — på gott och ont."*
5. **Cliffhanger till lektion 3:**
   > *"Imorgon: nu vet vi hur AI fungerar. Hur använder vi det utan att bli styrda av det? Hur blir vi chefen?"*
6. **Hemuppgift:** Pröva en bias-jakt hemma (frivilligt, se hemuppgifter-filen).

---

## Förväntade frågor från eleverna

| Fråga | Kort svar |
|-------|-----------|
| "Är AI rasistisk?" | "AI:n själv har ingen åsikt. Men data den tränats på speglar världen — och världen har orättvisor. Så AI kan *visa fram* dem. Vi måste tänka kritiskt." |
| "Kan vi fixa bias?" | "Ja, delvis — om vi medvetet ger AI bredare och mer rättvis data. Men det är svårt och inte löst. Forskare jobbar på det." |
| "Är bias dåligt?" | "Beror på. *All* AI har bias eftersom all data är ofullständig. Frågan är om biasen *skadar* någon." |
| "Hur många bilder har AI sett?" | "Miljarder. ChatGPT är tränad på *hela internet* — Wikipedia, Reddit, böcker, allt." |
| "Är det fusk att jag tränar AI?" | "Nej! Du *ska* träna AI när du använder den — det heter att ge bättre prompter. Vi pratar mer i lektion 3." |
| "Vet AI att den hittar på?" | "Nej. AI vet ingenting. Den gissar. Att kalla det att 'hitta på' är vår tolkning." |

---

## Bedömning (formativ)

Tre signaler att leta efter under lektionen — detaljer i `bedomningsstod-och-hemuppgifter.md`:

1. **Förstår eleven mönsterigenkänning?** (Visas i Mönsterlabbet + reflektioner)
2. **Kan eleven identifiera bias?** (Tvillingbild-experimentet)
3. **Använder eleven Tänkartrappan?** (Tänk först → AI → Granska — ses i tvillingbild-uppgiften)

---

## Anpassningar för olika behov

### NPF-anpassningar

- **Strukturen synliggjord:** A-F-stegen på tavlan, timer per steg
- **Mönsterlabbet:** lugn variant utan ljud, kortare omgångar
- **Tvillingbild:** ge fasta promptmallar så att eleven inte behöver hitta på dem

### Språkstöd

- Begreppsbanken översatt om möjligt
- Para starka/svaga läsare i Mönsterlabbet

### Snabba elever

- Lärartextens fördjupningsruta om "stochastic parrot" och RLHF
- Be dem testa: "Hur många exempel behöver AI för att gissa rätt? Hitta brytpunkten."
- Hemuppgift: "Bias-jakt i din vardag" (se hemuppgifter)

---

## Koppling till Lgr22 (åk 4-6)

| Ämne | Centralt innehåll |
|------|-------------------|
| **Teknik** | "Hur tekniska system fungerar" — algoritmer, automatisering |
| **Matematik** | "Mönster och samband" — koppling till AI:s mönsterigenkänning |
| **Samhällskunskap** | "Mediers funktion" — algoritmer i sociala medier |
| **Bild** | "Bilder som behandlar identitet, sexualitet och maktrelationer" — bias-bilder |

---

## Vad du som lärare kan göra inför nästa lektion

- Spara några tvillingbild-resultat — använd som krok i L3 ("Tänk om vi promptar bättre?")
- Notera vilka elever som hade *flest* bias-fynd — utse dem som experter i L4
- Om du själv kände dig osäker på något — fråga AI! "Förklara bias för en mellanstadielärare."
