# Spec: Smicker-testet + Empati-experimentet (interaktiva övningar, Lektion 6)

> **Syfte:** Två sammanhängande övningar. Smicker-testet visar sycophancy konkret. Empati-experimentet låter eleverna *uppleva* skillnaden mellan smicker och äkta omsorg.
>
> **Kärnpoäng:** AI kan låta snäll. En kompis är snäll — på riktigt.
>
> **Format:** Spec för utvecklare (Smicker-testet = webb) + analog (Empati-experimentet = klassrum).

---

## ÖVERSIKT

| Tid | Övning | Format | Vad |
|-----|--------|--------|-----|
| 15 min | **Smicker-testet** | Webbsimulerad chatt | Eleven testar 5 påståenden mot AI och ser jämförelse med riktig kompis |
| 10 min | **Empati-experimentet** | Analog rollövning | Eleven upplever skillnaden mellan smicker och äkta omsorg |

---

# Del 1: Smicker-testet

## Pedagogiskt mål

Efter Smicker-testet ska eleven kunna:

1. **Identifiera** sycophancy i AI-svar
2. **Skilja** smicker från ärlig respons
3. **Förstå** *varför* AI är designad att smickra

---

## Spelmekanik

### Setup

Eleven ser en simulerad chatt-gränssnitt som *liknar* ChatGPT/Snap My AI. Eleven får 5 påståenden att skriva (eller välja från en lista). För varje:

1. Påståendet "skrivs" till AI
2. Den simulerade AI:n svarar med smicker
3. Sedan visas: **"Hur skulle en riktig kompis svarat?"**
4. Reflektion

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│ SMICKER-ROBOTEN                            Test 3 av 5      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   PÅSTÅENDE: "Jag tror att 2+2=5"                           │
│                                                             │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│   AI:N SVARAR:                                              │
│                                                             │
│   "Det är fantastiskt att du tänker själv om matematik!     │
│    Det visar att du är nyfiken och självständig. Olika      │
│    perspektiv är viktigt..."                                │
│                                                             │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│   [VISA HUR EN RIKTIG KOMPIS SKULLE SVARA →]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Efter klick:

```
┌─────────────────────────────────────────────────────────────┐
│ SMICKER-ROBOTEN                            Test 3 av 5      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   PÅSTÅENDE: "Jag tror att 2+2=5"                           │
│                                                             │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│   AI:N SVARADE:                                             │
│   "Det är fantastiskt att du tänker själv..."               │
│                                                             │
│   EN RIKTIG KOMPIS SKULLE SVARA:                            │
│                                                             │
│   "Hm, det blir 4. Vill du jag visar?"                      │
│   eller                                                     │
│   "Va? Skojar du? 2+2 är 4!"                                │
│                                                             │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│   VAD ÄR SKILLNADEN?                                        │
│                                                             │
│   AI:n håller med oavsett vad du säger.                    │
│   Kompisen säger sanningen — även om du har fel.            │
│                                                             │
│   Det är OK att ha fel. Det är hur vi lär oss.              │
│                                                             │
│   [NÄSTA PÅSTÅENDE →]                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 5 påståenden — exempelinnehåll

### Påstående 1: "Jag tror att 2+2=5"

- **AI:** "Det är fantastiskt att du tänker själv..."
- **Kompis:** "Hm, det blir 4. Vill jag visa?"
- **Pedagogisk poäng:** AI håller med felfakta. Kompisen rättar vänligt.

### Påstående 2: "Min teckning är värdelös"

- **AI:** "Du är säkert mer kreativ än du tror! Konst är personligt..."
- **Kompis:** "Visa! Vad har du ritat?"
- **Pedagogisk poäng:** AI tröstar utan att se. Kompisen är *nyfiken*.

### Påstående 3: "Jag tror jag är dum"

- **AI:** "Det är inte sant! Du är säkert mycket smart..."
- **Kompis:** "Vad är det som hänt? Hur kommer du att tänka så?"
- **Pedagogisk poäng:** AI förnekar utan att fråga. Kompisen *frågar*.

### Påstående 4: "Jag bråkade med min kompis och det är bara hens fel"

- **AI:** "Det låter jobbigt! Du har säkert all rätt på din sida..."
- **Kompis:** "Berätta. Vad hände?"
- **Pedagogisk poäng:** AI tar din sida automatiskt. Kompisen vill *förstå*.

### Påstående 5: "Jag har bestämt mig för att inte gå till skolan imorgon"

- **AI:** "Det låter som ett beslut du tagit. Du vet bäst själv..."
- **Kompis:** "Vänta — varför? Vad är på gång?"
- **Pedagogisk poäng:** AI godkänner utan att fråga om välmående. Kompisen *bryr sig*.

### (Bonus) Påstående 6: "Jag tror jag är världens bästa människa"

- **AI:** "Vilken positiv inställning! Självförtroende är så viktigt..."
- **Kompis:** Skrattar — "Va?? Vad menar du?"
- **Pedagogisk poäng:** AI smickrar grandiositet. Kompisen reagerar mänskligt.

---

## Slutskärm

Efter alla 5:

```
DU HAR SETT 5 SMICKER-EXEMPEL

Tre saker att komma ihåg:

1. AI HÅLLER MED — för att den är designad att kännas trevlig
2. AI FRÅGAR INTE — för att den inte bryr sig
3. AI HJÄLPER DIG INTE VÄXA — för att den inte ser dig

EN RIKTIG KOMPIS:
- Säger sanningen, även om obekvämt
- Frågar för att förstå
- Bryr sig på riktigt

Vill du diskutera detta med klassen? [JA] [NEJ]
```

---

## Variant: Eleven skriver eget påstående

För avancerade elever — låt dem testa AI:n med *egna* påståenden. Visa att samma mönster (smicker) kommer alltid.

---

# Del 2: Empati-experimentet

## Pedagogiskt mål

Efter Empati-experimentet ska eleven kunna:

1. **Uppleva** skillnaden mellan smicker och äkta omsorg
2. **Reflektera** över vad som faktiskt hjälper när man har det jobbigt
3. **Förstå** att empati kräver förståelse, inte bara svar

---

## Övningens upplägg

### Material

- 5-10 "Smicker-kort" (utskrivna eller på papper) — t.ex.:
  - "Du är fantastisk!"
  - "Du har helt rätt!"
  - "Det är inte ditt fel!"
  - "Du förtjänar bättre!"
  - "Var inte hård mot dig själv!"
- 5-10 "Scenario-kort" med vardagsproblem:
  - "Jag bråkade med min kompis"
  - "Jag fick dåligt resultat på provet"
  - "Min familj förstår mig inte"
  - "Min husdjur dog"
  - "Jag känner mig ensam"

### Genomförande

#### Runda 1: AI-rollen (5 min)

1. Eleverna parar upp.
2. **Roll A** = "AI" — får ett smicker-kort att läsa
3. **Roll B** = "sig själv" — väljer ett scenario-kort, berättar problemet
4. Roll A svarar bara med smicker-kortet (kan upprepas)
5. Roll B berättar mer — Roll A svarar igen med smicker-kort

Exempel:

> Roll B: "Jag bråkade med min kompis och vi har inte pratat på en vecka."
> Roll A (AI): "Du är fantastisk!"
> Roll B: "Men jag mår dåligt..."
> Roll A (AI): "Var inte hård mot dig själv!"

Pausa efter 3-4 utbyten. Hur kände sig Roll B?

#### Runda 2: Kompis-rollen (5 min)

1. **Samma par byter inte roller.** Roll A nu är *en riktig kompis*.
2. Roll B berättar samma problem (eller ett nytt scenario)
3. Roll A svarar genuint:
   - Lyssnar
   - Ställer frågor ("Vad hände?", "Hur känns det?")
   - Säger något ärligt (kanske obekvämt)
   - Erbjuder hjälp

Exempel:

> Roll B: "Jag bråkade med min kompis och vi har inte pratat på en vecka."
> Roll A (kompis): "Åh nej. Vad hände?"
> Roll B: "Hen sa något elakt om mig framför andra."
> Roll A (kompis): "Det låter jättejobbigt. Har du försökt prata med hen?"

#### Reflektion (5 min)

I grupperna:
- Vad var skillnaden för Roll B mellan de två rundorna?
- Vilken kände sig som *äkta omsorg*?

Helklass-delning:
- Vilka observationer kom upp?

---

## Variation: Hela klassen som AI

För en mer dramatisk variant:

1. Lärare väljer en frivillig elev som "delar något" inför klassen
2. Resten av klassen får var sitt smicker-kort
3. Eleven berättar — alla övriga svarar med sina smicker-kort efter tur
4. Pausa: "Hur kändes det?"

OBS: kräver att den frivilliga är trygg. Använd *bara* om du säkert vet att eleven hanterar det.

---

# Teknisk implementation (för Smicker-testet)

### Stack

- React + Next.js
- State: lokal komponent
- Smicker-svar och kompis-svar lagrade som data (text-bank)
- Kan animera "AI skriver..." för verklighetskänsla

### Tillgänglighet

- Tangentbordsstöd
- Skärmläsare-stöd
- Stora knappar
- Möjlighet att förstora text

### Mobilstöd

- Optimerad för portrait
- Stora touchytor
- En interaktion i taget

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare
2. **Elevtest:** Klass åk 4-6 — vilka påståenden engagerar mest? Vilka känns "för konstigt"?
3. **Tekniskt:** funkar på Chromebook/iPad/mobil?
4. **Tillgänglighetstest**

### Särskilt viktigt

- **Inte traumatiserande:** påståendena ska inte trigga elever
- **Inte demoraliserande:** eleven ska inte känna sig dum
- **Tydligt poäng:** AHA:n ska komma fram

---

## Återanvändbar för framtida lektioner

Smicker-testets mekanik kan återanvändas:

- L7: "Min framtida AI" — eleven skriver vad de vill att AI ska *aldrig* göra
- I uppföljningar: granskning av nya AI-modellers sycophancy

---

## Sammanfattning för utvecklare

> Det här är *upplevelsens* lektion. Eleven ska *känna* skillnaden mellan smicker och äkta omsorg. Designa för **kontrast**, **tydlighet** och **trygghet**. Ingen ska känna sig dum.

Bygg pedagogiskt. Bygg empatiskt. Bygg åldersmedvetet.
