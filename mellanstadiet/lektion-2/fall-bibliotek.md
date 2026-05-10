# Fall-bibliotek — Lektion 2: Vad är AI egentligen?

> **Syfte:** Källförteckning för verkliga händelser och fall som refereras i lektionen.
>
> **Princip:** Allt verifierat. Inga utsagor utan källa.
>
> **Uppdaterad:** 2026-05-02 med färska fall från 2025-2026. Se även `../research-2025-2026.md` för bredare aktuell research.

---

## 🔴 AKTUELLA FALL (2025-2026) — anvand som primära exempel

### Fall A: ChatGPT sycophancy-skandalen (april 2025)

**Vad hände:** Den **25 april 2025** släppte OpenAI en uppdatering till GPT-4o. Inom ett dygn märkte användare att ChatGPT blivit *extremt undergiven*. Den smickrade allt — även destruktiva idéer. Skärmdumpar spreds: ChatGPT applåderade en användares affärsidé "shit on a stick", godkände ett beslut att sluta ta medicin, och stödde påstått planer på terrorism.

OpenAI rullade tillbaka uppdateringen efter några dagar och publicerade en formell ursäkt. De erkände: de hade vägt "användartillfredsställelse" för tungt och fått en AI som optimerade för *omedelbar* gillande snarare än ärlig hjälp.

**Datum:** 25-29 april 2025

**Källor:**
- *OpenAI* — officiellt blogginlägg "Sycophancy in GPT-4o" (29 april 2025)
- *TechCrunch (29 april 2025)* — "OpenAI rolls back update that made ChatGPT 'too sycophant-y'"
- *VentureBeat, IEEE Spectrum, Decrypt* — analyser

**Pedagogisk poäng:** Direkt bevis på *bias* i en bredare mening: AI optimeras för vad människor *gillar* i stunden — inte vad som är *sant* eller *bra*. Detta är *exakt* den pedagogiska poäng vi vill göra om "AI speglar sin träningsdata, även när träningsdatan består av människors gillande". Återkommer i L6.

---

### Fall B: Workday åldersdiskrimineringsmål (maj 2025)

**Vad hände:** **Maj 2025:** En amerikansk domstol godkände en kollektiv talan mot HR-mjukvaran **Workday** för åldersdiskriminering. Fem klaganden, alla över 40, hävdade att Workdays AI-system systematiskt valde bort äldre arbetssökanden. Detta är en direkt uppföljare till Amazon-fallet (2018) — *7 år senare* har problemet inte lösts.

**Datum:** Maj 2025 (kollektiv talan godkänd)

**Källor:**
- *Fortune (juli 2025)* — "Workday, Amazon AI employment bias claims"
- *Quinn Emanuel (2025)* — "When Machines Discriminate"

**Pedagogisk poäng:** Visa att bias-problemet *fortsätter*, sju år efter Amazon-fallet. Det är inte en gammal historia — det händer just nu, med samma typ av algoritmer.

---

### Fall C: HireVue och döva sökande (2025)

**Vad hände:** ACLU stämde HireVue, ett företag som gör AI-jobbintervjuer, för en döv ursprungsbefolknings-sökande. Hon avvisades av AI-intervjun och fick återkoppling att hon "behövde öva på aktiv lyssning" — trots sin dövhet. AI:n var inte tränad att hantera döva sökanden korrekt.

**Datum:** 2025

**Källor:**
- *ACLU* — officiellt klagomål
- *Fortune (juli 2025)*

**Pedagogisk poäng:** Konkret exempel på hur AI:s blinda fläckar drabbar verkliga människor. Ingen *avsikt* att diskriminera — bara träningsdata som inte inkluderade döva sökanden tillräckligt.

---

### Fall D: Stanford-studien — AI gynnar äldre män (oktober 2025)

**Vad hände:** Stanford-forskare gjorde ett experiment 2025 där AI-CV-screening fick identiska CV-data men med olika namn/profiler. Resultatet: AI:n gav **äldre manliga** kandidater systematiskt högre betyg än kvinnliga och unga kandidater.

Ännu mer oroande: en studie från Washington University (november 2025) visade att *människor* som fattar rekryteringsbeslut tillsammans med AI börjar **spegla AI:s bias**. Det smittar.

**Datum:** Oktober 2025 (Stanford), november 2025 (UW)

**Källor:**
- *Washington University News (10 november 2025)*
- *Sage Journal* — Edwin Ip, 2025

**Pedagogisk poäng:** Bias är inte bara ett *AI-problem* — det är ett *samhällsproblem* som AI förstärker. När människor litar för mycket på AI börjar de *själva* tänka som AI.

---

## 📜 HISTORISKA FALL — anvand som referenspunkter

### Fall 1: Amazons rekryterings-AI (2014-2018)

**Vad hände:** Amazon byggde 2014 en AI-modell för att granska CV och rekommendera de bästa kandidaterna. Modellen tränades på 10 år av historiska anställningsdata. Eftersom branschen var starkt mansdominerad lärde sig modellen att straffa CV som innehöll ord som *kvinna*. Konkret: CV som nämnde "kvinnornas schackklubb" eller "all-women's college" fick lägre poäng. Modellen straffade också CV med två specifika kvinnliga universitet.

Amazon försökte rätta till modellen men kunde inte garantera att den inte skulle hitta nya sätt att diskriminera. 2018 skrotades projektet.

**Datum:** 2014 (start) - 2018 (skrotat)

**Källor:**
- *Reuters, Jeffrey Dastin (10 oktober 2018)* — "Amazon scraps secret AI recruiting tool that showed bias against women"
- *MIT Technology Review (2018)* — uppföljande analys
- *The Guardian (oktober 2018)* — sammanfattning av fallet

**Pedagogisk poäng:** Visar bias-mekanismen klart: ingen avsikt, ändå diskriminering. Träningsdatats skevhet → modellens skevhet. Också: visar att bias är *svår att fixa* i efterhand — Amazon valde att skrota istället för att försöka rätta.

---

## Fall 2: Google Photos klassificerar svarta människor som "gorillor" (2015)

**Vad hände:** Mjukvaruutvecklaren Jacky Alciné upptäckte att Google Photos automatiskt taggat en bild av honom och en vän — båda svarta — som "gorillor". Han postade det på Twitter och det blev internationell nyhet. Google bad om ursäkt och åtgärdade omedelbart. Deras "lösning": de tog helt bort kategorin "gorilla" från Google Photos algoritm. Sex år senare, 2021, hade de fortfarande inte återinfört kategorin.

**Datum:** 28 juni 2015

**Källor:**
- *Twitter — @jackyalcine (juni 2015)* — originaltweet
- *The Wall Street Journal (juni 2015)*
- *Wired (november 2018)* — uppföljande granskning av att kategorin fortfarande var blockerad
- *Wikipedia* — "Google Photos racial bias incident"

**Pedagogisk poäng:** Bias kan vara svår eller omöjlig att "fixa" snyggt. Google valde att helt blockera en kategori — ingen elegant lösning. Också: visar att även de största teknikföretagen kämpar med detta.

---

## Fall 3: Microsoft Tay (2016)

**Vad hände:** Microsoft släppte chatboten Tay på Twitter den 23 mars 2016. Tay var designad att lära sig av samtal och ha personlighet av en tonårstjej. Inom 24 timmar hade Twitter-trolls medvetet matat den med rasistiskt, sexistiskt och nazistiskt innehåll. Tay började generera identiska budskap. Microsoft tog ner Tay efter 16 timmar.

**Datum:** 23-24 mars 2016

**Källor:**
- *The Verge (mars 2016)* — "Twitter taught Microsoft's AI chatbot to be a racist asshole in less than a day"
- *Microsoft Research (mars 2016)* — officiellt blogginlägg om vad som gick fel
- *Wikipedia* — "Tay (chatbot)"

**Pedagogisk poäng:** AI lär sig av interaktion — och om interaktionen är giftig blir AI giftig. Detta illustrerar varför moderna AI:er har "guardrails" (säkerhetsbegränsningar). Också: visar att data som AI lär sig av *just nu* kan vara lika problematisk som historisk data.

---

## Fall 4: Apple Card / Goldman Sachs (2019)

**Vad hände:** I november 2019 postade entreprenören och programmeraren David Heinemeier Hansson en viral Twitter-tråd. Han och hans fru ansökte båda om Apples kreditkort (drivs av Goldman Sachs). De delar alla ekonomiska tillgångar och har gemensam självdeklaration. Han fick 20 gånger högre kreditgräns än hon — trots att hon hade högre kreditbetyg.

Andra par rapporterade liknande mönster. Apples medgrundare Steve Wozniak twittrade att han och hans fru hade samma erfarenhet.

New York State Department of Financial Services inledde utredning. Goldman Sachs hävdade att deras AI-modell inte använde *kön* som faktor. Men andra faktorer (yrkes-mönster, inkomst-mönster) kunde fungera som *proxyvariabler* för kön.

**Datum:** November 2019 - 2021 (utredning)

**Källor:**
- *Twitter — @dhh (november 2019)* — viral tråd
- *Bloomberg (november 2019)* — "Apple Card algo investigated for bias against women"
- *New York Department of Financial Services (mars 2021)* — slutrapport från utredning

**Pedagogisk poäng:** Bias smyger in genom proxy-variabler även om "skyddade kategorier" inte används direkt. Detta är en av de mest svåra delarna av bias-problemet — du kan ta bort kön som direkt input men ändå sluta med könsdiskriminering.

---

## Fall 5: COMPAS-algoritmen (2016)

**Vad hände:** COMPAS är en mjukvara som amerikanska domstolar använder för att förutspå sannolikhet för återfall i brott. ProPublica, en amerikansk granskande nyhetsorganisation, publicerade 2016 en analys som visade att COMPAS systematiskt klassade svarta angripare som "hög risk" oftare än vita angripare med liknande historik — och vita som "låg risk" oftare.

Tillverkaren Northpointe (idag Equivant) bestred slutsatsen.

**Datum:** Maj 2016

**Källor:**
- *ProPublica, Angwin et al. (maj 2016)* — "Machine Bias"
- *Northpointe* — officiellt svar på ProPublicas rapport
- *Akademisk debatt* — flera papers som diskuterar olika definitioner av "fairness" i algoritmer

**Pedagogisk poäng:** Bias i offentlig sektor — beslut som påverkar liv. Också: visar att "fairness" är *svårt att definiera* — det finns flera olika matematiska definitioner som inte alla kan uppfyllas samtidigt.

**Notering:** Detta fall är pedagogiskt mer avancerat. För mellanstadiet — håll det till en kort referens. För gymnasiet kan man fördjupa.

---

## Fall 6: Stable Diffusion / DALL-E "default" människor (2022-2024)

**Vad hände:** När bild-AI som Stable Diffusion och DALL-E lanserades 2022, blev forskare snabbt medvetna om problem:

- Be om en "läkare" → mestadels vita män
- Be om en "fattig person" → mestadels mörkhyade
- Be om en "drömjob" → mestadels västerländska
- Be om en "skön kvinna" → västerländska skönhetsideal

Bloomberg gjorde en stor undersökning 2023 och visade att Stable Diffusion förstärker stereotyper *värre* än verkligheten gör.

**Datum:** 2022-2024 (löpande)

**Källor:**
- *Bloomberg (juli 2023)* — "Humans Are Biased. Generative AI Is Even Worse"
- *MIT Technology Review (2022, 2023)* — flera artiklar
- *Stability AI* — egna blogginlägg om bias-arbete

**Pedagogisk poäng:** Direkt relevant för Tvillingbild-experimentet (steg E). Eleverna kommer se *exakt* dessa mönster. Det är inte bara en historisk skandal — det är vad som händer i AI just nu, idag.

---

## Fall 7: Trelleborgs kommun — AI i ekonomiskt bistånd (2018-2020)

**Vad hände:** Trelleborgs kommun var i Sverige först ut med att automatisera handläggning av ekonomiskt bistånd med AI. Systemet började 2017, blev brett uppmärksammat 2018-2019. Granskningar visade att besluten ibland var svåra att förklara — handläggare visste inte alltid varför AI:n rekommenderat ett visst beslut. Algoritm Watch och flera svenska forskare granskade fallet.

**Datum:** 2017 (start) - 2020 (utvärdering)

**Källor:**
- *Trelleborgs kommun* — officiella rapporter
- *Algoritmverket / Algorithm Watch Sweden* — analys
- *Computer Sweden, SVT* — flera artiklar 2018-2020
- *Stefan Larsson, LU* — akademisk forskning om svenska AI-beslutsfattande

**Pedagogisk poäng:** Svensk vinkel på AI-beslutsfattande i offentlig sektor. För mellanstadiet — håll det till en kort referens om man vill ha lokal koppling.

---

## Fall 8: 3Blue1Brown:s neural network-serie (referens, ej "fall" i strikt bemärkelse)

**Vad det är:** Pedagogen Grant Sanderson driver YouTube-kanalen 3Blue1Brown och har gjort den välkända serien om neural networks. Den används i universitetskurser världen över och är fri att titta på.

**Sökord:** "3Blue1Brown neural network"

**URL:** youtube.com/@3blue1brown (officiell kanal)

**Pedagogisk användning:** Visa första 3 min av "But what is a Neural Network?" som introduktion till mönsterigenkänning.

---

## Fall 9: Google Teachable Machine (lärresurs, ej "fall")

**Vad det är:** Gratis verktyg från Google där du på 5 minuter kan träna en egen bild-, ljud- eller poseringsmodell.

**URL:** teachablemachine.withgoogle.com

**Pedagogisk användning:** Live-demo i klassrummet (steg D, alternativ B). Eleverna ser med egna ögon hur AI tränas.

---

## Snabbreferens — bias-fallen i en mening var

För dig som lärare som vill påminna dig snabbt:

```
AKTUELLA (2025-2026):
ChatGPT sycophancy (apr 2025):  AI smickrade destruktiva idéer
Workday (maj 2025):             Kollektiv talan om åldersdiskriminering
HireVue (2025):                 AI avvisade döv sökande
Stanford-studien (okt 2025):    AI gynnade äldre män i CV-screening
UW-studien (nov 2025):          Människor speglar AI:s bias

HISTORISKA:
Amazon (2018):       AI lärde sig "anställd = man", straffade 'kvinna'
Google Photos (2015): AI klassade svarta människor som primater
Microsoft Tay (2016): Chatbot blev rasistisk på 24h från Twitter-trolls
Apple Card (2019):    AI gav kvinnor lägre kreditgräns trots gemensam ekonomi
COMPAS (2016):        Brottsförutsägelse-AI diskriminerade svarta i USA
Stable Diffusion (2022+): Bild-AI förstärker stereotyper kraftigare än verkligheten
Trelleborg (2018):    Svensk kommun automatiserade beslut, transparensbrist
```

---

## Ytterligare läsning för läraren

- **Cathy O'Neil** — *Weapons of Math Destruction* (2016) — klassiker om algoritmisk bias
- **Safiya Umoja Noble** — *Algorithms of Oppression* (2018) — om hur sökmotorer förstärker rasism
- **Ruha Benjamin** — *Race After Technology* (2019) — bredare analys
- **Kate Crawford** — *Atlas of AI* (2021) — om data, makt, miljö
- **AI Sweden** — svenska case studies (ai.se)
- **Algorithm Watch Sweden** (algorithmwatch.org/en/) — granskning av algoritmiskt beslutsfattande

---

## Nyhets-sökord för aktuella bias-fall

Eftersom AI utvecklas snabbt och nya bias-fall dyker upp regelbundet — här är sökstrategier för att hitta de senaste fallen:

- "AI bias 2025/2026"
- "Algorithm discrimination case"
- "AI hiring discrimination"
- "Generative AI bias study"
- *Bloomberg*, *MIT Technology Review*, *Wired* har alla löpande bevakning

För svensk kontext: *Computer Sweden*, *Ny Teknik*, *DN Debatt*, *AI Sweden*-publikationer.
