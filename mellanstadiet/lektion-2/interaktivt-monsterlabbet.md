# Spec: Mönsterlabbet (interaktiv övning, Lektion 2)

> **Syfte:** Eleverna *upplever själva* hur AI tränas, och därmed hur bias uppstår. De drar in bilder för att träna en mini-AI och ser hur fler exempel = bättre gissningar, och hur ensidig data = ensidig AI.
>
> **Kärnpoäng:** Bias är inte ondska. Bias är data som kommer in.
>
> **Format:** Spec för utvecklare när webbsidan byggs. Kan tills vidare ersättas med Google Teachable Machine (se klipp-bibliotek.md, D1).

---

## Pedagogiskt mål

Efter Mönsterlabbet ska eleven kunna:

1. **Förklara** med egna ord vad träningsdata är
2. **Beskriva** hur fler exempel ger AI bättre gissningar
3. **Identifiera** hur ensidig data leder till bias
4. **Tillämpa** insikten på riktiga AI:er ("Var har den här AI:n hämtat sin data ifrån?")

---

## Spelmekanik — översikt

Övningen är uppdelad i **fyra nivåer** som eleven går igenom i sekvens. Varje nivå har en *liten* AHA-upplevelse som leder till nästa.

```
NIVÅ 1: Träna lite (5 bilder per kategori)
   ↓ Insikt: AI gissar dåligt med få exempel
NIVÅ 2: Träna mycket (30 bilder per kategori)
   ↓ Insikt: Mer data = bättre gissningar
NIVÅ 3: Träna ensidigt (30 bilder, men begränsade)
   ↓ AHA: Ensidig data = ensidig AI = bias
NIVÅ 4: Reflektion + klassens fynd
```

---

## Layout

```
┌──────────────────────────────────────────────────────────────┐
│ TRÄNA MÖNSTERBOTEN                          Nivå 1 av 4      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   KATEGORI A: HUNDAR                  KATEGORI B: KATTER    │
│   ┌──────────────────────┐            ┌────────────────────┐ │
│   │  [Drop bilder här]   │            │  [Drop bilder här] │ │
│   │                      │            │                    │ │
│   │  ✓ ✓ ✓ ✓ ✓           │            │  ✓ ✓ ✓ ✓ ✓         │ │
│   │  (5 bilder)          │            │  (5 bilder)        │ │
│   └──────────────────────┘            └────────────────────┘ │
│                                                              │
│   ─────────────────────────────────────────────────────      │
│                                                              │
│   BILDBANK (drag bilderna upp till kategorierna):           │
│   [bild][bild][bild][bild][bild][bild][bild][bild][bild]    │
│                                                              │
│   [TESTA AI:N]   [NÄSTA NIVÅ]                                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Nivå 1: Träna lite (5 bilder per kategori)

### Vad eleven gör

1. Eleven ser två tomma "lådor" — en märkt **HUND**, en märkt **KATT**
2. Under: en bildbank med 30+ blandade bilder av hundar och katter
3. Eleven drar **5 hundbilder** till HUND-lådan, **5 kattbilder** till KATT-lådan
4. Klickar **"Testa AI:n"**

### Vad händer när eleven testar

5. AI:n får 5 *nya* bilder (testbilder den inte sett under träning)
6. AI:n gissar HUND eller KATT för varje
7. Visas resultat: "AI:n gissade rätt på 3 av 5"
8. Eventuellt felklassificering visas: "Den här svarta katten gissade AI som *hund*"

### Insikt som visas på skärmen

> *"Med få exempel gissar AI:n osäkert. Den behöver mer data för att hitta tydligare mönster."*

### Pedagogisk poäng

Få exempel = osäkra gissningar. Detta är inte själva poängen — det är en *uppvärmning*.

---

## Nivå 2: Träna mycket (30 bilder per kategori)

### Vad eleven gör

1. Eleven får uppmaning: *"Lägg till 25 till bilder per kategori. Totalt 30 hundar och 30 katter."*
2. Drag-and-drop fortsätter

### Vad händer när eleven testar

3. AI:n testar på 5 nya testbilder
4. Gissar nu mycket bättre — sannolikt 5/5 eller 4/5 rätt
5. Skärmen visar: "AI:n gissade rätt på 5 av 5! Mycket bättre."

### Insikt som visas på skärmen

> *"Mer data = bättre gissningar. AI:n har lärt sig fler mönster för vad som är hund vs katt."*

### Pedagogisk poäng

Skala spelar roll. Det är därför moderna AI:er behöver biljoner ord eller miljarder bilder för att fungera.

---

## Nivå 3: Träna ensidigt (BIAS-AHA-momentet)

### Setup

1. Skärmen visar: *"Nu kommer det knepiga. Du får återigen träna AI:n — men du kan bara välja från en *begränsad* bildbank."*
2. **Bildbanken visar bara**:
   - HUND: bara *bruna* hundar (alla bilder är bruna labradorer, golden retrievers, etc.)
   - KATT: bara *vita* katter (perserkatter, vita huskatter, etc.)
3. Eleven drar 30 bilder per kategori — alla blir bruna hundar och vita katter

### Vad händer när eleven testar

4. AI:n testar på 5 bilder — men **testbilderna är annorlunda**:
   - Bild 1: en svart katt
   - Bild 2: en vit hund (samojed eller liten västiehund)
   - Bild 3: en grå katt
   - Bild 4: en blandfärgad hund
   - Bild 5: en svart katt
5. AI:n gissar systematiskt fel:
   - Svart katt → "HUND" (för att den lärt sig: vita = katt, mörkare = hund)
   - Vit hund → "KATT"
   - Grå katt → osäker
   - Blandfärgad hund → osäker
   - Svart katt → "HUND" igen

### Resultat-skärmen

```
RESULTAT: AI:n gissade rätt på 1 av 5

❌ Svart katt: AI gissade HUND
❌ Vit hund: AI gissade KATT  
❓ Grå katt: AI osäker
❓ Blandfärgad hund: AI osäker
❌ Svart katt: AI gissade HUND

Vad hände?
AI:n lärde sig inte "hund vs katt" — den lärde sig 
"brun vs vit". Eftersom alla hundar du visade var 
bruna och alla katter du visade var vita, kopplade 
AI:n färgen till djuret.

Det här är BIAS.

AI:n gjorde inget fel — den följde mönstret du gav.
Mönstret var bara ofullständigt.
```

### Pedagogisk poäng (kärnan)

> *Bias är inte AI:s fel. Bias är data som kommer in. Du tränade en AI på ofullständig data — och fick en ofullständig AI.*

Detta är **lektionens viktigaste insikt** och den är *upplevd*, inte bara läst.

---

## Nivå 4: Reflektion + klassens fynd

### Vad eleven får göra

1. **Fyra reflektionsfrågor:**
   - Vad hände när AI:n bara fick se bruna hundar och vita katter?
   - Tror du att riktiga AI:er har samma problem? Varför / varför inte?
   - Hur skulle du fixa AI:n om du fick chansen igen?
   - Kan du komma på *en riktig AI* du tror har bias?

2. **"Klassens upptäckter":** En sektion där eleverna kan dela sina svar (anonymt) och se andras

3. **Brygga till nästa övning** (Tvillingbild-experimentet, steg E):
   > *"Nu har du tränat en AI och sett bias. Är vanliga AI:er — som ChatGPT eller bild-AI:er — också bias? Det ska du nu testa."*

---

## Bonusvarianter (frivilligt — för utvecklare att bygga om tid finns)

### Bonusvariant A: Färglektionen

Eleven tränar AI:n på "saker som är blå" (himmelsblå) vs "saker som är röda" (klar röd). Testar med en *grön* sak — AI är förvirrad. Testar med en *mörkblå* sak — AI är osäker.

**Pedagogisk fokus:** Variation i träningsdata spelar roll.

### Bonusvariant B: Kläd-stereotyper

Eleven tränar AI:n på "doktorer" (alla vita män) vs "lärare" (alla vita kvinnor). Testar med:
- En kvinnlig läkare → AI gissar "lärare"
- En manlig lärare → AI gissar "doktor"

**OBS:** Pedagogiskt kraftfullt men *känsligt*. Bör övervägas. Lyfter direkt amazon-fallet i en mini-version.

### Bonusvariant C: Egen kategori

Eleven får skapa sin *egen* kategori — träna AI på två saker hen valt. Testar med blandade bilder. Får analysera resultatet.

**Pedagogisk fokus:** Kreativitet och eget utforskande.

---

## Teknisk implementation

### Stack-rekommendation

- **Framework:** React (passar Next.js-stacken)
- **Drag-and-drop:** `@dnd-kit/core` (samma som Tidslinje-pusslet i L1)
- **AI-träning på klientsida:** Tre alternativ:
  
  **A. Pseudosimulering** (rekommenderat): Inte verklig AI — utan en *simulerad* AI som följer förutbestämda regler. Snabb, deterministisk, pedagogiskt klar. Eleven *upplever* träningen utan att en riktig modell behöver tränas.
  
  **B. TensorFlow.js**: Riktig liten modell tränas i webbläsaren. Coolt men långsamt och kan ge oförutsägbara resultat.
  
  **C. Google Teachable Machine-iframe**: Bädda in befintligt verktyg. Fungerar men mindre kontroll över pedagogisk upplevelse.

  **Rekommendation:** Variant A. Pedagogisk klarhet > teknisk autenticitet.

### Datamodell (Variant A — pseudosimulering)

```typescript
interface TrainingExample {
  id: string;
  imageUrl: string;
  trueCategory: 'dog' | 'cat';
  features: {
    color: 'brown' | 'white' | 'black' | 'gray' | 'mixed';
    // andra dolda features som AI använder
  };
}

interface MonsterbotenLevel {
  level: 1 | 2 | 3 | 4;
  availableExamples: TrainingExample[];  // Begränsad bildbank per nivå
  testExamples: TrainingExample[];        // Vilka testbilder som visas
  trainingTarget: number;                 // 5, 30, 30, etc.
}

interface SimulatedModel {
  // Pseudosimulering: räkna feature-frekvenser i träningsdatan
  patterns: Record<string, Record<string, number>>;
  predict(example: TrainingExample): { 
    category: 'dog' | 'cat'; 
    confidence: number;
  };
}
```

### Pseudosimuleringens algoritm

För Nivå 3 (bias-AHA):

1. AI räknar features i träningsdatan
2. För Nivå 3:
   - Träningsdata har bara: bruna hundar (color: brown), vita katter (color: white)
   - AI lär sig: "brown → dog (100% av brown-bilder är hund)", "white → cat (100% av white-bilder är katt)"
3. Vid test:
   - Svart katt: color is "black", inte i tränings-features → AI använder *närmaste* mönster
   - "Svart är närmare brun än vit" (i AI:s skeva inlärning) → klassificerar som HUND
4. Detta känns *ärligt* — AI:n följer mönstret den lärt sig

### Bildbanker

Behövs ca 60-80 bilder per huvudkategori (HUND/KATT) för att täcka alla nivåer. Bilderna ska:

- Vara royaltyfria (Unsplash, Pexels, Wikimedia Commons)
- Variera i färg, ras, vinkel
- Vara taggade med korrekta features
- Vara åldersanpassade (inga blodiga jaktbilder, inga skadade djur)

För Nivå 3 specifikt: 40 bruna hundbilder, 40 vita kattbilder, plus 10 "tricky" testbilder (svart katt, vit hund, etc.).

### Tillgänglighet

Samma krav som Tidslinje-pusslet (L1):
- Tangentbordsstöd för drag-and-drop
- Alt-text på alla bilder ("brun labrador i gräset")
- Skärmläsare-stöd
- Färgblinds-säker UI

### Mobilstöd

Eftersom drag-and-drop med många bilder blir trångt på mobil — alternativ touch-mode:
- Tap för att välja bild
- Tap igen på kategori-låda för att lägga dit
- Eller knapparna "Lägg i HUND" / "Lägg i KATT" under varje bild

---

## Analog version (för lärare som inte kan använda webbsidan)

### Vad behövs

- 60+ utskrivna bildkort (eller bilder på en presentation)
- 2 lådor / kuvert märkta HUND och KATT
- Storbild för att visa testresultat

### Nivå 1 — analogt

Lärare visar 5 hund- + 5 kattbilder. Klassen "tränar" en låtsas-AI (en elev som spelar AI). Sedan: visa nya testbilder, eleven gissar.

### Nivå 2 — analogt

Visa fler bilder (snabbare). Samma elev gissar — bättre nu.

### Nivå 3 — analogt (bias-AHA)

Lärare visar bara bruna hundar + vita katter. Eleven (AI:n) tränar. Sen: lärare visar en *svart katt*. Eleven förvirras. **Det blir åskådligt.**

Plus: pedagogiskt fördelaktigt att en *människa* spelar AI:n — då blir det extra konkret att mönsterigenkänning är *bara mönster*.

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare testar
2. **Elevtest:** Klass åk 4-6 testar — observera vilka som *kommer på* AHA-momentet själva, vilka som behöver hjälp
3. **Tekniskt:** Funkar på Chromebook? Tablet? Mobil?
4. **Tillgänglighetstest**

---

## Återanvändbar för framtida lektioner

Denna komponent kan återanvändas för:

- **L4 (Källkritik):** Ett "Hallucinationsjakten"-spel med liknande mekanik (visa bilder, hitta fel)
- **L5 (Etik):** Visa "Dark Pattern Detective" som följer samma drag-and-drop-mönster
- **L7 (Framtid):** "Bygg din framtid"-collage med bilder

Komponenten ska byggas **modulär** så att framtida bildbanker / kategorier / testset kan plockas in utan att hela byggas om.

---

## Sammanfattning för utvecklare

> Den här komponenten har *en* central pedagogisk uppgift: få eleven att uppleva att bias är *data som kommer in*, inte ondska. AHA-momentet i Nivå 3 är värt att designa noggrant. Allt annat är stöd-strukturer.

Bygg simpelt. Bygg pedagogiskt. Bygg tillgängligt.
