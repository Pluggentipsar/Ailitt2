# Spec: Hallucinationsjakten + Deepfake-detektiv (interaktiva övningar, Lektion 4)

> **Syfte:** Två sammanhängande övningar som tränar elevens granskningsförmåga — en för text (hallucinationer) och en för bilder (deepfakes).
>
> **Kärnpoäng:** Granskning är en *färdighet*. Den tränas genom att *göra*, inte genom att läsa om det.
>
> **Format:** Spec för utvecklare när webbsidan byggs. Kan tills vidare köras analogt.

---

## ÖVERSIKT — två övningar i ett pass

| Tid | Övning | Vad |
|-----|--------|-----|
| 12 min | **Hallucinationsjakten** | Eleverna får en AI-genererad text om något *lokalt* — letar fel |
| 13 min | **Deepfake-detektiv** | Eleverna spelar quiz: AI-bild eller äkta? |

---

# Del 1: Hallucinationsjakten

## Pedagogiskt mål

Efter Hallucinationsjakten ska eleven kunna:

1. **Identifiera** påhittade fakta i en AI-genererad text
2. **Använda** oberoende källor för verifiering
3. **Förklara** *varför* AI hittar på (mönster utan grund)

---

## Spelmekanik

### Setup

1. Eleverna får (i par) en AI-genererad text om något *lokalt* eller *specifikt*
2. Texten innehåller medvetna hallucinationer — fel fakta som ser trovärdiga ut
3. Eleverna ska hitta minst 3 fel och verifiera dem

### Två varianter

#### Variant A: Webbkomponent (när webbsidan är klar)

Skärmen visar:

```
┌──────────────────────────────────────────────────────────┐
│ HALLUCINATIONSJAKTEN                                     │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   AI-text om: Vasaskeppet                                │
│                                                          │
│   "Vasaskeppet är ett av Sveriges mest kända historiska  │
│   skepp. Det byggdes mellan 1626 och 1628 i Stockholm.   │
│   Skeppet var 99 meter långt och hade 96 kanoner. Vid    │
│   sin jungfrutur den 10 augusti 1628 sjönk skeppet bara  │
│   1300 meter från startpunkten. Skeppet hittades 1956    │
│   av Anders Franzén och bärgades 1961. Idag finns det    │
│   utställt på Vasamuseet på Djurgården i Stockholm."     │
│                                                          │
│   ─────────────────────────────────────────────────────  │
│                                                          │
│   MARKERA FEL DU HITTAR:                                 │
│                                                          │
│   [Klickbara meningar — eleven markerar misstänkta]      │
│                                                          │
│   FÖR VARJE FEL: var kollade du?                         │
│   [Vasamuseets webbsida] [Wikipedia] [Lärobok] [Annat]   │
│                                                          │
│   [LÄMNA IN]                                             │
└──────────────────────────────────────────────────────────┘
```

Efter inlämning visas:
- Vilka fel eleven hittade
- Vilka fel som fanns
- Korrekt fakta + källa

#### Variant B: Analog (utskriven text + verifierings-stationer)

1. Lärare delar ut den AI-genererade texten på papper
2. Klassen har 4 "verifierings-stationer" (datorer, böcker, eller en lärare):
   - Wikipedia
   - Lokal lärobok
   - Officiell hemsida (kommun, museum, etc.)
   - "Fråga läraren"
3. Eleverna går runt och verifierar
4. Skriver ner fynd

---

## Hur Joel skapar texten (för utvecklare/lärare)

### Exempel: Vasaskeppet med 4 medvetna fel

**Original (källa: Vasamuseet):**
- Byggdes 1626-1628 ✓
- 69 meter lång ✓ (NOT 99 — fel #1)
- 64 kanoner ✓ (NOT 96 — fel #2)
- Sjönk 10 augusti 1628 ✓
- Sjönk efter ungefär 1300 meter ✓
- Hittades 1956 av Anders Franzén ✓
- Bärgades 1961 ✓

**4 medvetna fel:**
- "99 meter" istället för 69 meter
- "96 kanoner" istället för 64 kanoner
- (lägg till ytterligare fel — t.ex. "byggdes i Göteborg" eller liknande)

### Texter som passar för åk 4-6

Välj saker eleverna *kan* verifiera:

- **Lokala:** er skola, er kommun, en lokal förening
- **Kända:** Vasaskeppet, Selma Lagerlöf, Astrid Lindgren, Kungliga slottet
- **Spel/kultur:** Minecraft (när lanserades?), Pokémon (hur många finns?), Mario
- **Sport:** Allsvenskan, Zlatan, en lokal klubb

Undvik:
- För kontroversiella ämnen
- Saker som är svåra att verifiera (eleven får inte rätt svar)
- För komplexa ämnen (eleven kan inte själv värdera)

### Mall för ny text

1. Hitta en seriös källa (Wikipedia, museum, officiell sajt)
2. Be ChatGPT skriva en text om ämnet, på 100-150 ord
3. Be ChatGPT *medvetet* lägga in 4 påhittade fakta som ser trovärdiga ut
4. Granska resultatet — *du* ska kunna lista exakt vilka fel som finns
5. Förbered facit med korrekt info + källor

---

## Sentidighetstabell — vad eleverna ska upptäcka

```
Påstående            | Sant?  | Källa att kolla
---------------------|--------|---------------------------
Vasaskeppet 99m      | NEJ    | Vasamuseet.se: 69m
96 kanoner           | NEJ    | Vasamuseet.se: 64 kanoner
Anders Franzén       | JA     | Wikipedia
Bärgades 1961        | JA     | Wikipedia
1300 meter           | JA     | Wikipedia, Vasamuseet
```

---

## Reflektionsfrågor (visas efter)

1. Hur kände du när du upptäckte ett fel?
2. Vad gjorde att du *misstänkte* något?
3. Vilka påståenden trodde du *först* var sanna men visade sig vara fel?
4. Varför är det här svårt?

---

# Del 2: Deepfake-detektiv

## Pedagogiskt mål

Efter Deepfake-detektiv ska eleven kunna:

1. **Identifiera** vanliga tecken på AI-genererade bilder
2. **Acceptera** att detta är *svårt* — även proffs gör fel
3. **Förstå** att källkritik (vem, var, varför) är *viktigare* än bildanalys

---

## Spelmekanik

### Setup

Eleven får 10 bilder presenterade en i taget. För varje:

1. Bilden visas
2. Eleven röstar: **AI** eller **ÄKTA**
3. Avslöjas svar
4. Förklaring av tecken som avslöjade (eller misslyckade)

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│ DEEPFAKE-DETEKTIV                          Bild 3 av 10     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [STOR BILD]                                               │
│                                                             │
│                                                             │
│                                                             │
│   Vad tror du?                                              │
│                                                             │
│   [ AI-genererat ]    [ Äkta foto ]                         │
│                                                             │
│                                                             │
│   Slutresultat: 0/2 hittills                                │
└─────────────────────────────────────────────────────────────┘
```

Efter klick:

```
┌─────────────────────────────────────────────────────────────┐
│ DEEPFAKE-DETEKTIV                          Bild 3 av 10     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [STOR BILD med markeringar]                               │
│                                                             │
│   ✅ DU GISSADE RÄTT!                                       │
│                                                             │
│   Detta var AI-genererat. Tecken som avslöjade:             │
│                                                             │
│   ◉ Sex fingrar på vänster hand (cirkel ritad)             │
│   ◉ Texten i bakgrunden går inte att läsa                  │
│   ◉ Hårets gränser är suddiga                               │
│                                                             │
│   Källa: skapad med Midjourney 2025                         │
│                                                             │
│   [NÄSTA BILD →]                                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Bildbank (10 bilder per session)

### Mix av:

- **5 äkta bilder** — variera människor, miljöer, situationer
- **5 AI-genererade bilder** — variera AI-verktyg (Midjourney, DALL-E, Stable Diffusion, Sora)
- **Svårighetsgrad:** börja med enkla (uppenbara), bli svårare

### Exempel på AI-bildkategorier (åldersanpassade)

- Personer i vardagssituationer
- Djur i naturen
- Sportbilder
- Vetenskapsbilder (laboratorium etc.)
- Konst eller fotografi-stil

### Vad du ABSOLUT INTE använder

- Sexuellt eller suggestivt innehåll
- Våld
- Politiska personer (för åk 4-6 — för politiskt)
- Innehåll som kan triggera

### Källor till äkta bilder

- Unsplash, Pexels, Wikimedia Commons (royaltyfria)
- Egna foton (Joel kan ta)

### Källor till AI-bilder

- Joel genererar med Midjourney/DALL-E etc.
- Granskar och taggar med tecken som avslöjar

---

## Tecken-bibliotek (vad som ska markeras)

För varje AI-bild — markera (med cirkel eller pil) ett eller flera tecken:

| Tecken | Beskrivning |
|--------|-------------|
| **Händer/fingrar** | Fel antal, deformerade, smältande |
| **Bakgrundstext** | Inte läsbar, glitches, märkliga tecken |
| **Ögon/pupiller** | Olika reflektioner, konstiga blinkningar |
| **Hår-gränser** | Suddigt, smälter ihop med bakgrund |
| **Öron** | Asymmetriska, deformerade |
| **Lim/skugga** | Skuggor som inte stämmer med ljuskällan |
| **Symmetri-fel** | Något som borde vara symmetriskt är inte det |
| **Konstig komposition** | Saker som "borde" vara där men är borta |

---

## Algoritm för poäng och feedback

```typescript
interface RoundResult {
  imageId: string;
  isAI: boolean;
  guess: 'ai' | 'real';
  isCorrect: boolean;
  signsExplained: string[];
}

interface SessionResult {
  totalCorrect: number;  // 0-10
  byCategory: {
    aiCorrect: number;
    realCorrect: number;
  };
  feedback: string;  // varieras baserat på score
}
```

### Score-feedback

- **9-10:** "Detektiv-stjärna! Du har skarp blick. Men kom ihåg — riktiga deepfakes kan vara *svårare* än våra exempel."
- **7-8:** "Bra detektivarbete! Du ser de flesta tecknen. Träna mer och du blir ännu bättre."
- **5-6:** "Du är på god väg. Det är **svårt**. Även proffs får inte alla rätt. Källkritik är *minst* lika viktigt som bildanalys."
- **3-4:** "Granskning är ett muskel — det tränas. Det viktigaste: nu *vet* du att deepfakes finns. Det är vaccinet."
- **0-2:** "Det är OK! Det här är *avsiktligt* svårt. Lärdomen är: lita inte på första intrycket. *Granska* innan du delar."

**Viktigt:** ingen elev ska känna sig dum. Också proffs får 60-70% rätt på sådana här quiz.

---

## Avslutande lärdomar (visas efter alla 10)

```
Vad lärde du dig?

1. Det är SVÅRT att se deepfakes med blotta ögat — även för proffs
2. Vissa tecken finns ofta (händer, bakgrund, ögon) — men inte alltid
3. KÄLLAN är viktigare än bilden själv:
   - Vem postade?
   - Var dök bilden upp först?
   - Är det en seriös sajt?
4. När du är osäker — verifiera. Reverse image search är ditt vän.

Bonus: prova civ-ai.org hemma. De har fler bilder att träna på.
```

---

# Teknisk implementation (gemensamt för båda)

### Stack-rekommendation

- **Framework:** React (samma som tidigare)
- **State:** Lokal komponent + localStorage för att spara session
- **Bilder:** Förbered bildbank (Joel skapar)
- **Texter:** Förbered text-bank (Joel skapar tillsammans med AI)

### Tillgänglighet

- Tangentbordsstöd
- Skärmläsare-stöd (alt-text på alla bilder, beskrivningar av tecken)
- Pause-knapp
- Möjlighet att förstora text/bilder

### Mobilstöd

- Bilderna måste vara skarpa även på mobil
- Touch-vänliga knappar
- Enkelriktning (en bild i taget på mobil)

### Performance

- Lazy-load bilder
- Förladda nästa bild
- Bildkomprimering

---

## Analog version (om webbsidan inte är klar)

### Hallucinationsjakten — analog

1. Lärare delar ut den utskrivna texten + en verifierings-checklista
2. Klassen jobbar i par
3. Lärare har facit redo

### Deepfake-detektiv — analog

1. Lärare visar bilder en och en på storbild
2. Klassen röstar med kort (RÖD = AI, GRÖN = ÄKTA) eller tum upp/ner
3. Avslöjar och förklarar
4. Räknar resultat tillsammans

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare
2. **Elevtest:** Klass åk 4-6 testar — vilka fel hittas? Vilka tecken är "för svåra"?
3. **Tekniskt:** funkar på Chromebook/iPad/mobil?
4. **Tillgänglighetstest**

### Särskilt viktigt att testa

- **Inte för demoraliserande:** om eleverna får 1/10 rätt och känner sig dumma — det är fel design
- **Inte för lätt:** om alla får 10/10 är det inte pedagogiskt
- **Tecken-förklaringar:** måste vara tydliga, inte abstrakta

---

## Återanvändbar för framtida lektioner

Komponenten kan återanvändas:

- **L5 (Etik):** Dilemma-spelet kan följa liknande quiz-mekanik
- **L6 (Människa-maskin):** Smicker-testet — skärmar med AI-svar att utvärdera
- **L7 (Framtid):** "Bygg din framtid"-mekanik

Bygg modulärt så att framtida bildbanker / textbanker kan plockas in utan att bygga om.

---

## Sammanfattning för utvecklare

> Det här är *granskningens* lektion. Eleven ska bli en *detektiv*. Designa för **upptäckter**, **överraskningar**, och **trygghet att ha fel**. Lärandet sker när elev *gör fel* — inte när de får rätt på första försöket.

Bygg pedagogiskt. Bygg åldersmedvetet. Bygg uppmuntrande.
