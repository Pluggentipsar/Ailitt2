# Spec: Dilemma-spelet + Dark Pattern Detective (interaktiva övningar, Lektion 5)

> **Syfte:** Två sammanhängande etiska träningsövningar. Dilemma-spelet ger övning i etiska val. Dark Pattern Detective tränar förmågan att se manipulativ design.
>
> **Kärnpoäng:** Etik handlar inte om "rätt svar" — det handlar om att *fråga rätt frågor*.
>
> **Format:** Spec för utvecklare när webbsidan byggs. Kan tills vidare köras analogt.

---

## ÖVERSIKT

| Tid | Övning | Vad |
|-----|--------|-----|
| 12 min | **Dilemma-spelet** | Eleven gör val i 8-10 etiska scenarier. Konsekvenser visas. |
| 13 min | **Dark Pattern Detective** | Eleven identifierar manipulativ design i 8 verkliga UI-skärmar. |

---

# Del 1: Dilemma-spelet

## Pedagogiskt mål

Efter Dilemma-spelet ska eleven kunna:

1. **Tillämpa** Tre etiska frågor (är det ärligt? lär jag mig? är det snällt?) på konkreta scenarier
2. **Erkänna** att etik ofta handlar om *trade-offs* — inte enkla rätta svar
3. **Reflektera** över sina egna värderingar utan att skuldbelägga sig

---

## Spelmekanik

### Setup

Eleven får ett scenario presenterat — ofta i 1:a person ("Du har glömt..."). 3-4 valalternativ visas. Eleven väljer.

Efter valet:
- **Konsekvenser** visas (kort beskrivning)
- **Tre etiska frågor** appliceras på valet
- **Andras val** visas (anonym statistik)
- **Reflektionsfråga** ställs

Inga "rätta" eller "felaktiga" svar — bara *konsekvenser*.

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│ DILEMMA-SPELET                              Scenario 3 av 8 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   SITUATIONEN                                               │
│                                                             │
│   Du har glömt läxan tills sista kvällen. Du ska skriva en  │
│   text om vasaskeppet. AI kan skriva den på 30 sekunder.    │
│                                                             │
│   Vad gör du?                                               │
│                                                             │
│   [ Låter AI skriva allt och lämnar in ]                    │
│   [ Använder AI för struktur, skriver själv ]               │
│   [ Skriver själv det jag hinner, säger sanning ]           │
│   [ Säger till läraren att jag glömt och ber om mer tid ]   │
│                                                             │
│                                                             │
│   ◯◯●◯◯◯◯◯  3/8                                            │
└─────────────────────────────────────────────────────────────┘
```

Efter val:

```
┌─────────────────────────────────────────────────────────────┐
│ DILEMMA-SPELET                              Scenario 3 av 8 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   DU VALDE: "Använder AI för struktur, skriver själv"       │
│                                                             │
│   KONSEKVENSER                                              │
│                                                             │
│   ✓ Du har en tydligare text                                │
│   ✓ Du har lärt dig något                                   │
│   ⚠️ Är det OK? Beror på vad läraren tycker — fråga.        │
│                                                             │
│   TRE ETISKA FRÅGOR PÅ DITT VAL:                           │
│                                                             │
│   • Är det ärligt? — Endast om du berättar för läraren      │
│   • Lärde du dig? — Ja, mer än om AI gjort allt             │
│   • Var det snällt? — Ingen skadades                        │
│                                                             │
│   42% av andra elever valde samma som du                    │
│                                                             │
│   REFLEKTION: Vad gör du nästa gång?                        │
│                                                             │
│   [NÄSTA SCENARIO →]                                        │
└─────────────────────────────────────────────────────────────┘
```

### Slutprofil

Efter alla 8 scenarier visas elevens "etiska profil":

```
DIN ETISKA PROFIL

Du tenderade att välja:
- Mer ärlighet
- Mer egen ansträngning
- Du tänkte på andra ofta

Detta är inte ett betyg. Det är *du*.

Vill du dela med klassen? [JA] [NEJ]
```

---

## 8 scenarier — exempelinnehåll

### Scenario 1: Läxan
> *Du har glömt läxan. AI kan skriva den på 30 sekunder.*

Val: använda AI helt / som hjälp / själv / be om mer tid

### Scenario 2: Berätta eller dölja
> *Din kompis säger att de använt AI för en text. Du har också. Men ingen vet.*

Val: berätta för läraren / inte berätta / fråga kompis vad de gör / inte göra något

### Scenario 3: Fejk-bilden
> *Du ser en bild på din lärare på TikTok som verkar fejk. 50 personer har redan delat den.*

Val: dela vidare / rapportera / berätta för läraren / ignorera

### Scenario 4: Snap My AI
> *Snap My AI har sparat alla dina samtal. Du upptäcker det.*

Val: stänga av Snapchat / fortsätta använda / rapportera till föräldrar / ignorera

### Scenario 5: AI som rådgivare
> *Du gillar någon i din klass. Ska du fråga AI om råd om hur du gör?*

Val: ja / nej, fråga en kompis / nej, fråga en vuxen / nej, lös själv

### Scenario 6: Idén
> *Du har en idé till en uppfinning. Du frågar AI hur du ska bygga. AI hjälper. Vem äger idén?*

Val: jag / AI:n / både / vet inte

### Scenario 7: Energi
> *Du ska göra en kort skoluppgift. Du vet att AI drar 10 ggr mer el än Google. Vad gör du?*

Val: använder AI ändå / Google / fråga lärare / strunta i miljön

### Scenario 8: Kompis som läxar
> *Din kompis ber dig "lära" deras AI-konto att svara åt dem på prov.*

Val: ja / nej / berätta för lärare / försöker prata med kompisen

---

## Rapporteringsalternativ

Eleven kan välja att dela sina val anonymt med klassen (för helklass-statistik). Detta visar:

- Vilka scenarier delade klassen mest
- Vilka var överens
- Vilka skapade bra diskussioner

---

# Del 2: Dark Pattern Detective

## Pedagogiskt mål

Efter Dark Pattern Detective ska eleven kunna:

1. **Identifiera** vanliga dark patterns i appar och spel
2. **Förklara** *varför* designen är manipulativ
3. **Använda** den nya synen på sina egna mest använda appar

---

## Spelmekanik

### Setup

Eleven ser 8 verkliga UI-skärmar (anonymiserade — ej kända varumärken visas direkt). För varje:

1. Skärm visas
2. Eleven ska identifiera dark pattern (klicka på misstänkt element)
3. Avslöjas vad det är + vilken typ av dark pattern
4. Förklaring av *varför* designen är manipulativ

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│ DARK PATTERN DETECTIVE                     Skärm 4 av 8     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [STOR SKÄRMDUMP AV UI]                                    │
│                                                             │
│   "Vill du verkligen avsluta din prenumeration?"            │
│                                                             │
│   [ Ja, avsluta ] (liten, grå)    [ Stanna kvar! ] (stor,  │
│                                      grön, animation)        │
│                                                             │
│   Ser du dark pattern? Klicka där du ser det.               │
│                                                             │
│   ────────────────────────────────────────────────────      │
│                                                             │
│   ◯◯◯●◯◯◯◯  4/8                                            │
└─────────────────────────────────────────────────────────────┘
```

Efter klick:

```
┌─────────────────────────────────────────────────────────────┐
│ DARK PATTERN DETECTIVE                     Skärm 4 av 8     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [SKÄRMDUMP MED MARKERINGAR]                              │
│                                                             │
│   ✓ Du upptäckte det!                                       │
│                                                             │
│   TYP: Misdirection (omdirigering)                         │
│                                                             │
│   VARFÖR DET ÄR DARK PATTERN:                              │
│   "Stanna kvar"-knappen är stor, grön och animerad —        │
│   designern vill att du ska klicka där.                     │
│   "Ja, avsluta"-knappen är liten och grå — för att du       │
│   ska missa eller välja den andra.                          │
│                                                             │
│   FRÅGA TILL DIG: Har du någon gång nästan klickat fel?     │
│                                                             │
│   [NÄSTA SKÄRM →]                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 8 skärmar — exempelinnehåll

### Skärm 1: Avslutnings-dark pattern
- "Vill du verkligen avsluta?" — JA grå/liten, NEJ grön/stor

### Skärm 2: Loot box med vilseledande odds
- "5% chans till sällsynt item!" — verkligen oddsen är 0.5%
- Liten asterisk längst ner: "*Förväntade odds varierar"

### Skärm 3: Auto-checkbox
- "Skaffa ditt nyhetsbrev" — kryssrutan är förkryssad
- Ovan har du klickat "skapa konto"

### Skärm 4: Förvirrande priser
- "Bara 99 kr/månad!" stor text
- "*efter 3 månader 199 kr/månad" liten text längst ner

### Skärm 5: Roach motel (inloggning)
- Skapa konto: 1 klick
- Ta bort konto: 12 klick + bekräfta via email + vänta 30 dagar

### Skärm 6: Confirmshaming
- "Vill du verkligen tacka nej till 50% rabatt?"
- "Nej tack, jag vill inte spara pengar"

### Skärm 7: Falsk brådska
- "Bara 3 lediga platser kvar!" (ofta inte sant)
- Timer som börjar om varje gång du laddar om sidan

### Skärm 8: Förinstallerad AI (Snap My AI-stil)
- Top of chat list shows "My AI" pinned, can't be removed
- Real friends below

---

## Slutskärm

Efter alla 8:

```
DU ÄR EN DARK PATTERN DETEKTIV

Du klarade ___ / 8

Vad du nu kan:
- Se igenom design som lurar dig
- Stoppa innan du klickar
- Berätta för andra (familj, vänner) vad du sett

VECKANS UPPDRAG:
Hitta minst 3 dark patterns i appar du använder. Skriv ner.
```

---

# Teknisk implementation (gemensamt)

### Stack

- React + Next.js
- Drag-and-drop / klick: `@dnd-kit/core` eller bara button-baserat
- State: lokal komponent + localStorage
- Bilder: kuraterade screenshots (Joel skapar med Photoshop / Figma)

### Tillgänglighet

- Tangentbordsstöd
- Skärmläsare-stöd (alt-text på skärmdumpar, beskrivningar)
- Stora knappar
- Möjlighet att zooma

### Mobilstöd

- Liggande mode för bredare skärmdumpar
- Touch-vänliga knappar
- Inline-laddning

### Performance

- Skärmdumpar optimerade (WebP)
- Förladda nästa skärm

---

## Bildbank — kuratering

För Dark Pattern Detective behöver Joel skapa 8 skärmdumpar:

**Variant A (rekommenderat):** Designa egna skärmdumpar i Figma som *liknar* riktiga appar utan att vara kända varumärken. Säkrare juridiskt, mer pedagogiskt klart.

**Variant B:** Använd anonymiserade skärmdumpar från riktiga appar (lägg suddiga loggor). Mer äkthet men juridisk risk.

Min rekommendation: variant A.

---

## Analog version (om webbsidan inte är klar)

### Dilemma-spelet — analog

1. Lärare läser scenario högt
2. Eleverna går till hörn (4 alternativ = 4 hörn)
3. Diskussion 2-3 min per scenario
4. Lärare ger konsekvensbeskrivningar muntligt

**Tidsåtgång:** Liknande som digital, ~12-15 min för 5-6 scenarier

### Dark Pattern Detective — analog

1. Lärare visar utskrivna skärmdumpar (eller på storbild)
2. Eleverna får 30 sek att hitta dark pattern
3. Diskussion: vad såg ni?
4. Lärare avslöjar och förklarar

**Tidsåtgång:** ~10-12 min för 6-7 skärmar

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare
2. **Elevtest:** Klass åk 4-6 testar — vilka scenarier engagerar mest? Vilka dark patterns är "för svåra" att se?
3. **Tekniskt:** funkar på Chromebook/iPad/mobil?
4. **Tillgänglighetstest**

---

## Återanvändbar för framtida lektioner

Dilemma-spelets mekanik kan återanvändas:

- **L6:** "Smicker-testet" — chattsimulering med val
- **L7:** "Bygg din framtid" — val-baserad framtidssimulator

Komponenten ska byggas modulär.

---

## Sammanfattning för utvecklare

> Det här är *etikens* lektion. Eleverna ska känna *konsekvenser av val* — inte bli straffade för "fel" svar. Designa för **reflektion**, **respekt för olika åsikter**, och **igenkänning** ("oh — det här ser jag varje dag i mina appar!").

Bygg pedagogiskt. Bygg respektfullt. Bygg åldersmedvetet.
