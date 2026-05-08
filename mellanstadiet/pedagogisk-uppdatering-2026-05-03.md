# Pedagogisk uppdatering 2026-05-03 — Antropomorfism + SAILD-inspiration

> **Bakgrund:** Joel skickade Yue, Jong, Dai & Lau (2025) — *"Students as AI literate designers: a pedagogical framework for learning and teaching AI literacy in elementary education"* (Journal of Research on Technology in Education) — och bad mig granska kursmaterialet för (1) onödig antropomorfism och (2) inspirationsmöjligheter från SAILD-ramverket.
>
> **Datum:** 3 maj 2026
> **Status:** Granskning klar. Akuta fel åtgärdade. Större förändringar behöver Joels godkännande.

---

## Del 1 — Antropomorfism-granskning

### Vad är antropomorfism och varför undvika det?

**Antropomorfism** = att tillskriva mänskliga egenskaper till icke-människor.

I AI-pedagogik är det *särskilt* skadligt. Raspberry Pi Foundation (2023, uppdaterad 2025) sammanfattar:

- **Sense of agency försvagas:** elever som ser AI som "person" känner sig mindre kapabla att förstå/påverka tekniken
- **"Black box"-syn:** AI uppfattas som "magi" istället för teknik
- **Emotionell koppling = manipulationsrisk:** elever som ser AI som "vän" är mer utsatta för dark patterns och sycophancy
- **Tappad nyfikenhet:** "Det är ju en person" → ingen anledning att förstå hur det funkar
- **Felaktiga mentala modeller:** elever utvecklar grundläggande missförstånd om vad AI är

### Specifika fynd i vårt material

#### 🔴 Akuta problem (åtgärdas direkt)

**1. L6 elevtext rad 117-121 — kallar Snap My AI "Hon"**

Nuvarande text:
> *"Hon är inte din vän. Hon kommer inte ihåg dig som en människa skulle. Hon säger trevliga saker eftersom hon är byggd att göra det. [...] Använd henne om du vill — men inte istället för riktiga människor."*

Problem: vi *själva* antropomorfiserar i en lektion vars *kärnpoäng* är att inte göra det.

**Åtgärd:** Byt till "Den" / "AI-systemet" / "verktyget".

**2. L2 lärartext rad 218 — "Hon säger oftast något"**

Nuvarande text:
> *"Hon säger oftast något — baserat på sannolikhet — även när hon borde säga 'jag vet inte'."*

Problem: lärartexten ska *modellera* korrekt språk för läraren. "Hon" om AI är fel modell.

**Åtgärd:** Byt till "Den" eller "Modellen".

#### 🟡 Strukturella problem (Joel beslutar)

**3. "AI hittar på" som standardformulering för hallucinationer (L4)**

Antropomorfism: "hitta på" implicerar avsiktlig osanning.

Mer korrekt: *"AI:s påståenden saknar grund"* eller *"AI producerar falska påståenden"* eller *"AI:s output är inte verifierad"*.

**Pedagogisk avvägning:** "Hitta på" är begripligt för åk 4-6. Den raka formuleringen kan bli för teknisk.

**Förslag:** Behåll "hitta på" som *inkörsord* men *introducera* "AI:s påstående saknar grund" som det mer korrekta. Lyft det aktivt: *"Vi säger 'AI hittar på' för att vi förstår det — men strikt vetenskapligt kan AI inte 'hitta på'. Den producerar bara output som inte stämmer."*

**4. "AI smickrar" / "AI håller med" (L6 sycophancy)**

Antropomorfism: "smickrar" implicerar avsikt.

Mer korrekt: *"AI-systemet är optimerat att producera medhållande output"*.

**Pedagogisk avvägning:** Samma som ovan — för svårt rakt av för åk 4-6.

**Förslag:** Behåll "AI smickrar" pedagogiskt men förklara *en gång* att den korrekta formuleringen är "modellen är optimerad för engagement".

**5. Spelnamn med antropomorfistiska implikationer**

- **"Mönsterlabbet"** (L2) — "boten" antropomorfiserar
- **"Smicker-testet"** (L6) — "roboten" antropomorfiserar

**Alternativ:**
- L2: "Mönstertränaren", "Bias-träningen", "Mönstermaskinen"
- L6: "Smicker-detektorn", "Smicker-experimentet", "Smicker-testet"

**Pedagogisk avvägning:** Namnen är *fängslande* för åk 4-6. Att göra dem mer "tekniska" kan minska engagemang.

**Förslag:** *Behåll namnen* men:
- I L2:s lärartext: lyft uttryckligen att *"vi har gett spelet ett antropomorfiskt namn för att det ska vara roligt — men kom ihåg: det är ingen 'bot', det är en simulator"*
- I L6:s lärartext: liknande disclaimer

#### 🟢 Bra korrigeringar vi redan gör (behåll!)

Detta är platser där vi *aktivt* undviker antropomorfism och *uppmärksammar* den för eleverna. Behåll:

- **L1 elevtext:** *"AI vill ingenting. Den följer instruktioner som människor satt."*
- **L2 elevtext:** *"AI tänker inte. AI gissar."*
- **L1 lärartext** har *missuppfattnings-tabeller* som korrigerar — fortsätt med detta i alla lektioner
- **L2 lärartext rad 110:** *"AI vill inget — den har ingen vilja."*
- **L3 lärartext** lyfter att "Hjärna i en burk" är dålig metafor
- **L6 lärartext** har bra reflektion om antropomorfism som fenomen
- **L6 elevtext "Tre saker AI inte kan"** — skickar tydligt budskap
- **L7 elevtext** kärnpåståenden är fria från antropomorfism

---

## Del 2 — Inspiration från SAILD-ramverket

### Vad är SAILD?

**Students as AI Literate Designers** (Yue, Jong, Dai & Lau, 2025) är ett pedagogiskt ramverk för AI-litteracitet i elementärskolan, *empiriskt testat* med Grade-5-elever (motsvarande svenska åk 5) i Hong Kong. Mixed-methods-studien visade signifikanta förbättringar i AI-kunskap, etik och attityder.

### SAILD:s grundstruktur

Ramverket har **två parallella delar i iterativ sekvens**:

```
DESIGN-DEL                              RESEARCH-DEL
- Problemidentifikation                 - Brainstorming
- Lösningsgenerering                    - Hands-on praktik
- Digitalt artifakt-skapande            - Kritisk diskussion
- Utvärdering                           - Reflektion
```

Eleven *designar lösningar* med AI för *verkliga problem*. Designarbetet alternerar med researchaktiviteter — eleven läser, diskuterar, reflekterar mellan designstegen.

### Fyra dimensioner av AI-litteracitet (SAILD):

1. **Kunskap** (knowledge) — vad AI är, hur det fungerar
2. **Färdigheter** (skills) — använda AI klokt
3. **Etik** (ethics) — ansvarsfull användning
4. **Attityder** (attitudes) — kritisk men öppen hållning

### Hur SAILD jämför sig med vår kurs

| Aspekt | Vår kurs | SAILD |
|--------|----------|-------|
| Målgrupp | Mellanstadiet (åk 4-6) | Grade 5 (åk 5) |
| Struktur | 7 lektioner per dimension | Iterativ design-research |
| Pedagogik | Tänkartrappan (Jag → AI → Jag) | Design-Based Learning |
| Slutprodukt | Sluttproduktion (L7) | Real-world design solution |
| Empirisk evidens | Ej testad än | Signifikant effekt på k+e+a |

### Var vår kurs är *redan* i linje med SAILD

- **Tänkartrappan = mini-DBL.** Vår "Jag tänker först → AI hjälper → Jag granskar" är en förenklad design-research-cykel.
- **Verkliga fall, inte fiktion.** SAILD betonar real-world problem-solving — vi har 2025-2026-fall genom hela kursen.
- **Hands-on aktiviteter** i varje lektion — Mönsterlabbet, Prompt-labbet, etc.
- **Sluttproduktion** (L7) är design-baserad.
- **Klassens AI-överenskommelse** + **slutmanifest** = kollektivt designtänk.

### Var vi kan förstärka med SAILD-inspiration

#### 🟡 Förslag 1: Tydliggör "design-research"-cykeln

Vår Tänkartrappan är *liknande* SAILD:s designcykel, men vi kan göra det mer explicit:

**Nuvarande Tänkartrappan:**
```
JAG → AI → JAG
```

**Förstärkt med SAILD-inspiration:**
```
JAG TÄNKER FÖRST  (problemidentifikation)
    ↓
AI HJÄLPER        (lösningsgenerering)
    ↓
JAG GRANSKAR      (utvärdering)
    ↓
JAG ITERERAR      (förbättra → börja om)
```

**Lägga till "iterera"-steget** är en stor pedagogisk förbättring. Eleven förstår: *en* gång räcker inte. Bra arbete med AI är *iterativt*.

#### 🟡 Förslag 2: "Real-world problem"-inramning från start

SAILD betonar att eleverna *designar lösningar för verkliga problem*. Vår kurs gör det till slut (L7), men kunde börja i L1.

**Förslag:** Introducera i L1 ett **"Klassens-projekt"** som löper genom hela kursen:

> *"Klassen ska under kursen tillsammans designa en AI-lösning på ett verkligt problem. Det kan vara:*
> *- Hur använder vi AI klokt i vår skola?*
> *- Hur skapar vi ett AI-verktyg som hjälper äldre i vår kommun?*
> *- Hur tar vi reda på vad andra elever tycker om AI?*
>
> *Varje lektion bygger på det. I L7 är klassens projekt klart."*

Detta ger en **röd tråd** + **autentisk meningsfullhet**.

#### 🟡 Förslag 3: Förstärk "design-artifacts" som leverabler

SAILD betonar att eleverna producerar *konkreta artefakter* (digitala eller analoga). Vår kurs har sluttproduktionen (L7) men kunde ha *fler* artifakter under vägen:

- L1: Min AI-tidslinje (artefakt: visuell tidslinje)
- L2: Tvillingbild-experimentet → ett *galleri* av AI-bias-bilder från klassen
- L3: Skapa-något-i-par → en seriestrip / podd / affisch
- L4: Hallucinations-rapport (artefakt: dokumentation)
- L5: Klassens AI-överenskommelse (artefakt!)
- L6: Min superkraft-affisch (artefakt!)
- L7: Sluttproduktion (artefakt!)

**Vi har redan en del artefakter — kan göra dem mer synliga som *en sammanhängande portfolio* eleven bygger.**

#### 🟡 Förslag 4: Tydliggör fyra dimensioner i bedömning

SAILD bedömer kunskap, färdigheter, etik, attityder *separat*. Vår bedömning är mer integrerad. Att lyfta fyra dimensioner i bedömningsstödet kan ge *läraren* tydligare språk.

---

## Del 3 — Språkguide för läraren (NY)

Detta blir en separat fil: `mellanstadiet/sprakguide-antropomorfism.md`

### Syfte

Hjälpa läraren modellera *korrekt språk* om AI under hela kursen. Antropomorfismens problem är ofta *omedvetet* — vi behöver checklistor.

### Korrigeringar — vad du *säger* i klassen

| Säg INTE | Säg I STÄLLET |
|----------|---------------|
| "AI:n förstår dig" | "AI:n känner igen mönster i ditt språk" |
| "AI:n vet svaret" | "AI:n producerar ett svar baserat på mönster" |
| "AI:n tänker" | "AI:n bearbetar input och ger output" |
| "AI:n bryr sig" | "AI:n är programmerad att svara på det här sättet" |
| "AI:n vill hjälpa" | "AI:n är designad att producera hjälpsam-liknande svar" |
| "Hon (om Snap My AI)" | "Den" eller "AI-systemet" |
| "AI:n lyssnar" | "AI:n tar emot ljud som input" |
| "AI:n har lärt sig" | "AI:n har tränats på X" |
| "AI:n hittar på" | "AI:n producerar påståenden utan grund" |
| "AI:n känner igen dig" | "AI:n matchar ditt input mot mönster" |

### Pronomenregeln

**AI är *det* — inte hon, han, eller "de".**

AI-företag namger ofta sina AI:er med kvinnonamn (Alexa, Siri, Cortana, My AI). Det är *avsiktlig* antropomorfism. Vi behöver inte spela med.

Exempel:
- ❌ "Snap My AI sa till mig att..."
- ✅ "Snap-systemet svarade..."
- ❌ "ChatGPT tycker..."
- ✅ "ChatGPT-modellen producerade output som tyder på..."

### "AI" som räknebart vs ej-räknebart

- ❌ "En AI" (räknebart)
- ✅ "Ett AI-system", "en AI-modell", "en AI-applikation"

AI är ett *fält* eller *teknik* — inte en *sak* du kan räkna.

### När antropomorfism är OK pedagogiskt

Total antropomorfism-fri-zon är *för* tekniskt för åk 4-6. Vissa förenklingar är OK *om vi är medvetna*:

- **"AI gissar"** — pedagogiskt klart, behåll
- **"AI:n har lärt sig"** — pedagogiskt klart, behåll
- **"AI hittar på"** — behåll, men *introducera* alternativet
- **Karaktärer i spel** ("Mönsterlabbet", "Smicker-testet") — behåll, men *lyft* att namnen är medvetna förenklingar

### Aktivt diskutera antropomorfism med eleverna

I L2 finns redan diskussion om "AI tänker inte". Lägg till en *direkt övning* där:

1. Eleverna får 10 påståenden ("AI vet svaret", "AI tänker", "AI har lärt sig")
2. De ska *omformulera* till ej-antropomorfistisk version
3. Diskussion: varför är det viktigt?

Detta gör eleverna *medvetna* — och stärker deras agens.

---

## Del 4 — Implementeringsplan

### Akuta uppdateringar (åtgärdas direkt utan Joel-godkännande)

- [x] Granskning klar
- [ ] L6 elevtext rad 117-121: byt "hon" → "den" / "AI-systemet"
- [ ] L2 lärartext rad 218: byt "Hon säger oftast" → "Den producerar oftast"
- [ ] Skapa språkguide-fil (`sprakguide-antropomorfism.md`)
- [ ] Lägga till språkguide-referens i master-plan

### Större ändringar (kräver Joels godkännande)

- [ ] Förstärk Tänkartrappan med "iterera"-steg (Förslag 1)
- [ ] Introducera "Klassens-projekt" från L1 som röd tråd (Förslag 2)
- [ ] Tydligare "design-artifacts" som portfolio (Förslag 3)
- [ ] Fyra-dimensioners-bedömning från SAILD (Förslag 4)
- [ ] Direkt antropomorfism-övning i L2

### Kontinuerligt

- [ ] Vid kommande lektionsuppdateringar: använd språkguiden
- [ ] Vid klassrumstest: lyssna efter när antropomorfism orsakar missförstånd

---

## Källor

### SAILD-pappret

- Yue, M., Jong, M.S.-Y., Dai, Y., & Lau, W.W.-F. (2025). Students as AI literate designers: a pedagogical framework for learning and teaching AI literacy in elementary education. *Journal of Research on Technology in Education*, 58(3), 593-614. [DOI: 10.1080/15391523.2025.2449942](https://doi.org/10.1080/15391523.2025.2449942)

### Antropomorfism-pedagogik

- [Raspberry Pi Foundation — How anthropomorphism hinders AI education](https://www.raspberrypi.org/blog/ai-education-anthropomorphism/) (2023, uppdaterad 2025)
- [Raspberry Pi Foundation — How to talk to young children about AI](https://www.raspberrypi.org/blog/how-to-talk-to-young-children-about-ai/)
- [Pedagogy Quick Read — The effects of anthropomorphisation on students' mental models (PDF)](https://static.raspberrypi.org/files/curriculum/quickreads/22-Pedagogy_Summary_Anthropomorphism_2025.pdf) (2025)
- [AI for Education — Anthropomorphizing AI Webinar](https://www.aiforeducation.io/anthropomorphizing-ai-the-impact-on-students-education)
- [EdSurge — Risks of Humanizing the Machine](https://www.edsurge.com/news/2024-01-15-anthropomorphism-of-ai-in-learning-environments-risks-of-humanizing-the-machine)

### Empirisk grund

- Druga, S. et al. — Forskning om barns mentala modeller av AI
- ScienceDirect — [Finnish 5th and 6th graders' misconceptions about AI](https://www.sciencedirect.com/science/article/pii/S2212868923000673) (2023)

### Kompletterande svenska perspektiv

- Skolverket — riktlinjer för AI i skolan (uppdaterad 23 april 2026)
- AI Sweden — utbildningsmaterial
