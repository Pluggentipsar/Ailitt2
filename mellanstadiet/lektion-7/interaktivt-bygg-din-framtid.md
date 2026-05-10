# Spec: Bygg din framtid (interaktiv övning, Lektion 7)

> **Syfte:** Eleverna *visualiserar* sin egen framtid med AI-stöd. Kombinerar val över olika domäner och ser konsekvenser. Avslutar med "Din framtid 2040"-collage.
>
> **Kärnpoäng:** Framtiden är *valbar*. Eleven har röst.
>
> **Format:** Spec för utvecklare när webbsidan byggs. Kan tills vidare köras analogt med Framtidskarta.

---

## Pedagogiskt mål

Efter Bygg din framtid ska eleven kunna:

1. **Visualisera** flera framtidsmöjligheter över olika livsdomäner
2. **Reflektera** över *konsekvenser* av samhälleliga val
3. **Formulera** sin egen önskan om framtiden
4. **Förstå** att framtiden inte är *en* sak — utan *många möjliga*

---

## Spelmekanik — översikt

Eleven gör val i 5 domäner. För varje domän finns 4 alternativ. Olika kombinationer ger olika "framtider".

```
ARBETE       SKOLA        TRANSPORT     FRITID       VÄNSKAP
[4 val]      [4 val]      [4 val]       [4 val]      [4 val]

         ↓ klicka "BYGG MIN FRAMTID 2040" ↓

         RESULTAT: collage med konsekvenser
```

---

## Layout

### Steg 1-5: Välj per domän

```
┌─────────────────────────────────────────────────────────────┐
│ BYGG DIN FRAMTID 2040                       Domän 1 av 5    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ARBETE                                                    │
│                                                             │
│   Hur jobbar människor 2040?                                │
│                                                             │
│   ┌──────────────────────────────────────────────┐          │
│   │ A) AI gör allt monotont — människor gör      │          │
│   │    kreativt och samarbetande arbete           │          │
│   └──────────────────────────────────────────────┘          │
│   ┌──────────────────────────────────────────────┐          │
│   │ B) De flesta människor utan jobb — UBI       │          │
│   │    (grundinkomst) till alla                   │          │
│   └──────────────────────────────────────────────┘          │
│   ┌──────────────────────────────────────────────┐          │
│   │ C) Stora företag äger AI — vanliga människor │          │
│   │    kämpar med osäkra deltidsjobb              │          │
│   └──────────────────────────────────────────────┘          │
│   ┌──────────────────────────────────────────────┐          │
│   │ D) Människor reglerade AI strikt — färre nya │          │
│   │    AI-tjänster, men fler stabila jobb         │          │
│   └──────────────────────────────────────────────┘          │
│                                                             │
│   ●○○○○                                                     │
└─────────────────────────────────────────────────────────────┘
```

Efter val visas korta konsekvenser:

```
DU VALDE A:
"AI gör allt monotont — människor gör kreativt arbete"

KONSEKVENSER:
✓ Mer tid för konst, omsorg, samarbete
⚠️ Vissa människor saknar mening i avbruten yrkesidentitet
⚠️ Risk att kreativa jobb också automatiseras

[NÄSTA DOMÄN →]
```

---

## De 5 domänerna och deras alternativ

### 1. ARBETE — hur jobbar människor 2040?

| Val | Beskrivning |
|-----|-------------|
| **A** | AI gör monotont arbete — människor gör kreativt + omsorgsbaserat |
| **B** | UBI (grundinkomst) — många utan jobb men med pengar |
| **C** | Stora företag dominerar — osäkra deltidsjobb för många |
| **D** | Strikt reglering — färre AI-tjänster, fler stabila jobb |

### 2. SKOLA — hur ser skolan ut?

| Val | Beskrivning |
|-----|-------------|
| **A** | AI-tutor för varje elev — individuella vägar |
| **B** | AI hjälper läraren — mer tid för relation och samtal |
| **C** | AI-betygssystem — eleverna pressas av algoritmer |
| **D** | AI förbjudet i klassrummet — gammaldags undervisning |

### 3. TRANSPORT — hur tar vi oss runt?

| Val | Beskrivning |
|-----|-------------|
| **A** | Självkörande bilar dominerar — färre bilolyckor, men många jobb borta |
| **B** | Mer kollektivtrafik — AI optimerar bussar och tåg |
| **C** | Drönare för leveranser — bullriga städer |
| **D** | Tillbaka till mer cyklar och promenader — AI hjälper logistik |

### 4. FRITID — vad gör vi för skoj?

| Val | Beskrivning |
|-----|-------------|
| **A** | AI-genererad underhållning — alla får personlig film/spel |
| **B** | VR-världar dominerar — vi möter "vänner" i virtuella rum |
| **C** | Tillbaka till natur, sport och böcker — AI som verktyg, inte centrum |
| **D** | AI-companions ersätter mycket av sociala umgänget |

### 5. VÄNSKAP — hur möter vi människor?

| Val | Beskrivning |
|-----|-------------|
| **A** | AI hjälper oss hitta nya kompisar — fler djupa relationer |
| **B** | Många AI-relationer — färre människor i livet |
| **C** | Lokal gemenskap stark — AI hjälper organisera möten |
| **D** | Splittrad värld — vi pratar mest med människor som tycker likadant |

---

## Slutskärmen — Din framtid 2040

Efter alla 5 val visas ett collage:

```
┌─────────────────────────────────────────────────────────────┐
│ DIN FRAMTID 2040                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   "I din framtid 2040..."                                   │
│                                                             │
│   🏢 ARBETE: AI gör monotont arbete                         │
│   🎓 SKOLA: AI hjälper läraren                              │
│   🚇 TRANSPORT: Mer kollektivtrafik                         │
│   🎨 FRITID: Natur, sport och böcker                        │
│   👥 VÄNSKAP: Lokal gemenskap                               │
│                                                             │
│   [GENERERAD BILD ELLER COLLAGE]                            │
│                                                             │
│   Den här framtiden är:                                     │
│   ✓ HOPPFULL — människor blomstrar                         │
│   ⚠️ KRÄVER — politisk vilja och engagemang                │
│                                                             │
│   ──────────────────────────────────────────────────        │
│                                                             │
│   VAD NÄSTA?                                                │
│                                                             │
│   [DELA MED KLASSEN]  [BYGG OM]  [SPARA SOM PDF]            │
└─────────────────────────────────────────────────────────────┘
```

### "Framtidstyper" som genereras

Baserat på elevens kombinerade val genererar systemet en *karaktäristik*:

| Karaktäristik | Triggar när |
|---------------|-------------|
| **"Den hoppfulla"** | Mest A+B-val, fokus på samarbete |
| **"Den vakna"** | Mest C/D-val, fokus på risker |
| **"Den balanserade"** | Mix — ser båda sidor |
| **"Den lokala"** | Värdesätter lokal gemenskap |
| **"Den teknikoptimistiska"** | Mest A-val |
| **"Den traditionella"** | Mest D-val |

Inga *fel* — bara olika *visioner*.

---

## Reflektionsfrågor (visas på slutskärmen)

1. **Vad var lättast att bestämma?** ___
2. **Vad var svårast?** ___
3. **Vilken fråga vill du diskutera mer?** ___
4. **Vad oroar dig mest med din framtid?** ___
5. **Vad ger dig mest hopp?** ___

Eleven kan dela svar med klassen (anonymt — för helklass-statistik).

---

## Koppling till klassens slutmanifest (steg E)

Bygg din framtid genererar individuella visioner. Klassens slutmanifest (steg E) sammanställer *kollektiva* åtaganden.

Naturlig övergång:

> *"Du har byggt din egen framtid. Nu — vad ska *vi* göra tillsammans för att den framtiden ska bli möjlig?"*

---

## Teknisk implementation

### Stack

- React + Next.js
- State: lokal komponent + localStorage för att spara
- Bilder: kuraterade illustrationer per scenario (Joel skapar)
- Ev. AI-genererad sammanfattningsbild på slutskärmen

### Datamodell

```typescript
type Domain = 'arbete' | 'skola' | 'transport' | 'fritid' | 'vänskap';
type Choice = 'A' | 'B' | 'C' | 'D';

interface FutureChoice {
  domain: Domain;
  choice: Choice;
  consequences: string[];
}

interface FutureProfile {
  choices: FutureChoice[];
  characterization: string;  // "Den hoppfulla", etc.
  collageImageUrl?: string;
}
```

### Tillgänglighet

- Tangentbordsstöd
- Skärmläsare-stöd för alla val
- Stora knappar
- Möjlighet att förstora text
- Färgblindssäker design

### Mobilstöd

- En domän per skärm
- Stora touch-knappar
- Snabb laddning av nästa domän

### Animationer (sparsamt)

- Övergång mellan domäner — mjuk
- Konsekvensvyn — tydlig pop-up
- Slutskärm — collage byggs steg för steg

---

## Variant: Analog version (Framtidskarta)

### Material

- A3-papper med 5 fält (ARBETE, SKOLA, TRANSPORT, FRITID, VÄNSKAP)
- Penna, färgpennor
- Ev. tillgång till AI för bilder eller idé-generering

### Genomförande

1. Lärare delar ut A3-papper
2. Eleven skriver/ritar i varje fält
3. Eleven kan välja från färdiga alternativ (A-D) som lärare läser upp, eller skriva egna
4. Eleven motiverar varje val i en mening
5. Eleven kan använda AI för bilder ("rita en framtidsstad där människor jobbar med kreativt arbete") — men ska *äga* slutprodukten
6. Sätts upp i klassrummet eller delas

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare
2. **Elevtest:** Klass åk 4-6 — vilka val känns "äkta"? Vilka känns "påtvingade"?
3. **Tekniskt:** funkar på Chromebook/iPad/mobil?
4. **Tillgänglighetstest**

### Särskilt viktigt

- **Inga "rätta" svar:** alla framtider ska vara möjliga och respektabla
- **Ingen blame:** eleven får inte känna sig dum eller dömd
- **Hopp och realism:** balansera utan att vara naiv

---

## Återanvändbar för framtida lektioner

Bygg din framtid-mekaniken kan återanvändas:

- För andra ämnen (klimat, demokrati, kreativitet)
- I uppföljningskurser
- Som elev-tävling i skolan

---

## Sammanfattning för utvecklare

> Detta är *avslutningens* övning. Eleven ska känna *agens* — "min syn räknas". Designa för **bemyndigande**, **respekt för olika visioner**, och **hopp grundat i realism**. Ingen ska känna sig naiv eller cynisk. Alla ska känna sig *hörd*.

Bygg pedagogiskt. Bygg respektfullt. Bygg som om du ger en gåva till framtidens medborgare. För det gör du.
