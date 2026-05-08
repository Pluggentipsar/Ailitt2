# Lärartext — Lektion 2: Vad är AI egentligen?

> **Syfte:** Ge dig som lärare djupare bakgrund så att du kan svara på frågor och bygga din egen variant av lektionen.
>
> **Längd:** ~5 A4-sidor utskrivet.

---

## Lektionens kärnpåstående

> *AI tänker inte. AI gissar. Den känner igen mönster i enorma mängder data — och svarar med det som troligen kommer härnäst.*

Detta är *kärnan i avmystifieringen*. Om eleverna förstår detta — bara detta — har lektionen lyckats. Allt annat (källkritik i L4, etik i L5, autenticitet i L6) hänger på att de förstår detta först.

---

## Det stora skiftet: från regler till mönster

På 1950-1990-talet trodde forskare att AI skulle byggas så här:

```
Programmera in alla regler för "vad är en katt":
- Fyra ben
- Päls
- Spetsiga öron
- Morrhår
- ... (tusentals fler)
```

Det fungerade dåligt. Det finns för många undantag. Vad är en katt utan svans? Med skadade öron? Med konstig ljussättning?

På 2000-2010-talet kom genombrottet: *visa AI miljoner bilder av katter och låt den hitta mönstret själv*. Det heter **maskininlärning** (machine learning).

Med modern AI — särskilt sedan 2017 (transformers) — har detta tagits till sin spets. AI är inte tränad att göra *en specifik sak*. Den är tränad på *hela internet* och kan applicera mönster brett.

---

## Tre nivåer av begreppet "mönster"

För att förklara mönsterigenkänning på mellanstadienivå — bryt det i tre nivåer:

### Nivå 1: Synliga mönster

- Ett tigerns ränder är ett mönster
- Ett checkmönster på en skjorta
- Tapeten på rummet

Eleverna förstår detta utan problem.

### Nivå 2: Icke-uppenbara mönster

- "Människor som klickar X klickar oftast också Y" (Spotify)
- "Texter som börjar med 'Det var en gång' fortsätter med 'en'" (språkmodeller)
- "Bilder med stora ögon, päls och spetsiga öron är ofta katter"

Här måste eleven göra ett mentalt skifte. Mönstret är inte *visuellt* för människan — men det är räknebart.

### Nivå 3: Mönster i sannolikheter

- "Givet de senaste 1000 ord i en text — vilket är 1001:a ordet *mest sannolikt*?"
- "Givet ett spelläge i Go — vilket drag har *störst sannolikhet* att vinna?"
- "Givet en användares senaste 100 klick — vilken video har *störst sannolikhet* att hålla kvar uppmärksamheten?"

Det är här modern AI lever. Den kan inte säga "jag vet" — bara "med 87% sannolikhet är det A".

**Pedagogisk metafor:** En kamrat som ser dig öppna kylskåpet 100 gånger. Efter ett tag kan kompisen *gissa* med ganska god säkerhet vad du tar — utan att veta dig som person. Det är AI.

---

## Träningsdata: AI:s skolgång

För att en AI ska kunna gissa *bra* måste den ha sett *mycket*. Inte vilken data som helst — *bred och relevant* data.

Tre saker att lyfta:

### 1. Skala är allt

ChatGPT-4 är tränad på storleksordningen 13 biljoner ord (vissa estimat säger ännu mer). För perspektiv:

- Ett genomsnittligt mellanstadiebarn läser ca 1 miljon ord per år
- 13 biljoner ord motsvarar 13 miljoner *års* läsning
- Eller 130 000 livstider av läsning för en svensk

Det är så mycket data AI har att jämföra mot när den gissar.

### 2. Data formar AI

> *"You are what you eat."*

Det gäller AI också. En AI tränad på enbart engelska forum kan inte svenska väl. En AI tränad på enbart tekniska texter kan inte skoja. En AI tränad på bara män i höga befattningar kommer associera "chef" med man.

### 3. Data är aldrig neutralt

Det här är en av de svåraste poängerna att förmedla — men en av de viktigaste. **All data är skapad av människor i en viss tid och plats**. Det innebär att den bär:

- Den tidens språk och normer
- Den platsens världsbild
- De röster som skrev (och *inte* de som inte skrev)

När AI tränas på Wikipedia — vem skriver Wikipedia? Mer än 80% är män, mestadels från USA och Europa. Det märks i det AI:n "vet".

---

## Bias: kärnpunkten i lektionen

Den här pedagogiska poängen är *svår*, så här är hur du tänker när du förklarar:

### Vad bias *inte* är

- **Inte ondska.** AI vill inget — den har ingen vilja. Den kan inte vara "ond".
- **Inte avsikt.** Ingen programmerare sa "låt AI:n vara orättvis". Bias smyger sig in.
- **Inte unikt för AI.** Människor har också bias. Det är *därför* tränings-datat har bias.

### Vad bias *är*

- **Skevhet i data.** Träningsdatat speglar världen — och världen är inte rättvis.
- **Förstärkt skevhet.** AI lär sig de mönster som *finns mest av* i datan. Om 80% av de anställda är män, lär AI sig att "anställd = man".
- **Återkoppling.** AI används sen — och förstärker mönstret. (Vissa förkastas baserat på AI-bedömning, då anställs ännu mer av "rätt" sort, AI lär sig att den hade "rätt".)

### De tre typerna av bias

Jag använder en förenklad indelning som funkar för åk 4-6:

#### 1. Representations-bias (vem syns inte?)

AI tränas på data där vissa grupper är underrepresenterade. När AI ska skapa eller välja, syns de gruppen mindre.

**Exempel:** Bild-AI som ritar "läkare" → mest män, mest vita. Eftersom de flesta bilder på läkare i träningsdatat var det.

#### 2. Mätnings-bias (vad räknas som "bra"?)

AI lär sig vad som är "rätt svar" — men *vem* har bestämt det?

**Exempel:** Amazon-rekryterings-AI:n. Den lärde sig att "bra CV" var det som blivit anställt. Men de som blev anställda var en skev grupp att börja med.

#### 3. Historisk bias (det som *var* normalt)

AI lär sig av gamla data — och världen har ändrats.

**Exempel:** Försäkringsbolags-AI som baserar premier på 50 år gammal statistik. Roller och förutsättningar har ändrats sen dess.

---

## Det viktigaste verkliga fallet: Amazons rekryterings-AI

Det här fallet är pedagogiskt *guld* — det är väldokumenterat och visar bias-mekanismen kristallklart. Källa: Reuters, oktober 2018.

### Vad hände

- Amazon byggde 2014 en AI för att läsa CV och rekommendera de bästa kandidaterna
- AI:n tränades på 10 år av historiska anställningar
- Branschen var mansdominerad — 60-70% av tekniska anställda var män
- AI lärde sig: "Bra CV = CV från män"
- Konkret straffade den ord som *kvinna*: "kvinnoschackklubben", "kvinnornas idrottsförening" → minus poäng
- 2018 skrotade Amazon AI:n. De konstaterade att de inte kunde *fixa* den utan att börja om

### Varför det är pedagogiskt centralt

- **Inte en "rasistisk programmerare"** — ingen sa till AI:n att straffa kvinnor
- **AI:n följde matematik** — den hittade ett verkligt mönster i datan
- **Ändå blev resultatet orättvist** — för att datan var orättvis

Det är *exakt* det här eleverna ska förstå.

---

## Andra verkliga fall för fördjupning

### Google Photos klassificerade svarta människor som "gorillor" (2015)

- Bild-AI tränad på övervägande vita ansikten
- Fick problem att klassificera svarta människor
- Klassificerade dem felaktigt som primater
- Google "fixade" det genom att helt ta bort kategorin "gorilla" — det fanns ingen bra lösning på riktigt

**Pedagogisk poäng:** Bias är inte alltid lätt att fixa. Ibland är "lösningen" att stänga av funktionen.

### Microsoft Tay-chatbotten (2016)

- Microsoft släppte en chatbot på Twitter som lärde sig av samtal
- På 24 timmar var den rasistisk, sexistisk och Hitler-positiv
- Trolls hade medvetet matat den med hatfullt innehåll
- Microsoft tog ned den

**Pedagogisk poäng:** AI:s "personlighet" är spegel av datan. Om data är giftig — AI är giftig. Och **det är aktiv data också** — det som händer just nu påverkar vad AI lär sig.

### Apple Card / Goldman Sachs (2019)

- Apples kreditkort gav kvinnor systematiskt lägre kreditgränser än män
- Även när de var gifta och hade gemensamma bankkonton
- Goldman Sachs (som drev kortet) hävdade att deras AI inte använde kön som faktor
- Men *andra faktorer* (yrke, inkomstmönster) korrelerade med kön

**Pedagogisk poäng:** Du kan ta bort "kön" som direkt input — men bias smyger in via *proxyvariabler*. Detta är svårt att lösa.

---

## Sannolikhet vs vetande — den finasiska poängen

Detta är en abstraktare poäng, men viktig att kunna förklara om elever frågar:

> *"Vad är skillnaden mellan att 'veta' och att 'gissa'?"*

### Att veta

- Du har förstått *varför* något är sant
- Du kan förklara
- Du kan generalisera till nya situationer du aldrig sett
- Du *vet att du vet*, eller *vet att du inte vet*

### Att gissa (smart)

- Du har sett mönster
- Du föreslår det mest sannolika svaret
- Du kan inte alltid förklara varför
- Du *vet inte* att du vet — du svarar bara

AI gör det andra. Den kan inte säga "jag vet inte" om den inte tränats att göra det. Modellen producerar oftast något — *baserat på sannolikhet* — även när det korrekta svaret hade varit "jag vet inte".

Det här är **hallucinationsproblemet**, som vi tar upp ordentligt i L4.

---

## Den fjärde dimensionen: stokastisk papegoja (för avancerade frågor)

Forskarna Emily Bender, Timnit Gebru m.fl. publicerade 2021 en uppmärksammad artikel: *"On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"*

Begreppet **"stochastic parrot"** (stokastisk papegoja) beskriver vad LLM:er gör: de upprepar mönster från sin träningsdata, men *utan förståelse* för vad orden betyder. De papegojar — men slumpmässigt, baserat på sannolikhet.

Du behöver inte säga "stokastisk papegoja" till elever. Men *idén* — att AI låter den begåvad utan att förstå — är central.

**Citat värt att memorera:**

> *"A language model is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning."*  
> — Bender, Gebru et al. (2021)

I översättning för åk 4-6: *"AI:n syr ihop ord den sett, baserat på vad som brukar passa, utan att veta vad orden betyder."*

---

## Svenska forskningsanknytningar

Om du vill göra lektionen lokalt relevant — några svenska kopplingar:

- **AI Sweden** — nationella centrumet för tillämpad AI, Lindholmen Science Park, Göteborg
- **Stiftelsen för strategisk forskning (SSF)** — finansierar AI-forskning
- **WASP (Wallenberg AI, Autonomous Systems and Software Program)** — Sveriges största AI-forskningsprogram, KTH/Linköping/Lund/Uppsala/Chalmers
- **Algorithm Watch Sweden** — granskar algoritmiskt beslutsfattande i offentlig sektor

Lokal vinkel: **Trelleborgs kommun** har varit pilot för AI-beslutsfattande i ekonomiskt bistånd, en uppmärksammad svensk fråga 2018-2020. Inte direkt mellanstadiematerial men för dig som lärare bra att veta.

---

## Tänkartrappan i lektion 2

Tvillingbild-experimentet (steg E) är *andra gången* eleverna formellt går igenom Tänkartrappan. Förstärk:

```
JAG → AI → JAG
```

Skillnaden från L1: nu *vet* eleven att AI har bias. Granskningssteget får en ny dimension: *"Vad missar AI? Vem syns inte? Varför?"*

---

## Vanliga missuppfattningar att korrigera

| Missuppfattning | Verklighet |
|-----------------|------------|
| "AI förstår vad den säger" | Nej. Den gissar mönster utan att förstå mening. |
| "Bias är AI:s fel" | Nej. Bias är data:ns problem (och därmed människans). |
| "Mer data fixar bias" | Inte alltid. *Bredare* data kan hjälpa, men inte *mer av samma*. |
| "AI är 100% objektiv" | Nej. AI är aldrig neutral — den är spegel av sin träningsdata. |
| "Jag kan lita på AI om jag inte använder känsliga ord" | Nej. Bias smyger in via proxy-variabler. |
| "AI lär sig själv" | Delvis. Den optimerar mönster, men *människor* bestämmer vilka mönster som belönas. |

---

## Källor och referenser

- **Bender, Gebru et al. (2021)** — "On the Dangers of Stochastic Parrots"
- **Reuters, Dastin (2018)** — "Amazon scraps secret AI recruiting tool that showed bias against women"
- **3Blue1Brown** — YouTube-serie om Neural Networks (start med "But what *is* a Neural Network?")
- **Crawford, Kate (2021)** — *Atlas of AI* (om data, makt, miljö)
- **O'Neil, Cathy (2016)** — *Weapons of Math Destruction* (klassiker om algoritmisk bias)
- **DeepLearning.AI** — utbildningsmaterial (Andrew Ng)
- **Stanford AI Index Report** — uppdaterad statistik om AI-utveckling
- **AI Sweden** — svensk dokumentation och case studies

---

## Inför nästa lektion (L3)

L2 ger eleverna förståelse av *vad AI är*. L3 låter dem *använda* det. Bra brygga:

> *"Nu vet vi hur AI fungerar — den gissar baserat på mönster, och har bias. Imorgon: hur använder vi det här verktyget *bra*? Hur blir vi chefen, inte den som blir styrd?"*

Det är ingången till prompting och Tänkartrappan steg 2-3.
