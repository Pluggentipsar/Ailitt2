# Spec: Prompt-labbet (interaktiv övning, Lektion 3)

> **Syfte:** Eleverna *bygger* prompter genom drag-and-drop med 5 byggblock — och ser direkt hur ändringar påverkar resultatet.
>
> **Kärnpoäng:** En tydlig prompt = mer kontroll. Iteration är hjärtat i prompt-arbete.
>
> **Format:** Spec för utvecklare när webbsidan byggs.

---

## Pedagogiskt mål

Efter Prompt-labbet ska eleven kunna:

1. **Bygga** en prompt med 5 komponenter (vem/vad, hurdan, var, stil, detalj)
2. **Förändra** en prompt och se hur resultatet ändras
3. **Reverse-engineera** — gissa vilken prompt som skapade en given bild
4. **Förklara** varför iteration är centralt i prompt-arbete

---

## Spelmekanik — översikt

Övningen har **fyra steg** (alla i samma session):

```
STEG 1: Bygg en första prompt med 5 byggblock
   ↓ Insikt: Det finns en struktur
STEG 2: Ändra ETT block och kör igen
   ↓ Insikt: Varje ord påverkar resultatet
STEG 3: Reverse engineering — gissa prompten
   ↓ Insikt: Resultat → prompt-tänk
STEG 4: Egen utmaning — bygg din egen
   ↓ Insikt: Kreativitet i ramverk
```

---

## Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ PROMPT-LABBET                                Steg 1 av 4         │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   BYGG DIN PROMPT (drag och släpp block):                       │
│                                                                  │
│   ┌─VEM/VAD─┐  ┌─HURDAN─┐  ┌──VAR──┐  ┌──STIL──┐  ┌─DETALJ─┐   │
│   │en katt  │  │modig   │  │hustak │  │tecknad │  │solned- │   │
│   │         │  │orange  │  │månen  │  │realistisk│ │gång   │   │
│   │ ...     │  │ ...    │  │ ...   │  │ ...    │  │ ...    │   │
│   └─────────┘  └────────┘  └───────┘  └────────┘  └────────┘   │
│                                                                  │
│   ─────────────────────────────────────────────────────         │
│                                                                  │
│   DIN PROMPT:                                                    │
│   "[VEM/VAD] [HURDAN] på [VAR] i [STIL] med [DETALJ]"           │
│                                                                  │
│   [BYGG OCH KÖR]                                                 │
│                                                                  │
│   ─────────────────────────────────────────────────────         │
│                                                                  │
│   RESULTAT:                                                      │
│   [bild visas här när du klickat KÖR]                           │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Steg 1: Bygg en första prompt

### Vad eleven gör

1. Eleven ser en panel med 5 kategorier av "block": VEM/VAD, HURDAN, VAR, STIL, DETALJ
2. Varje kategori har 6-10 fördefinierade alternativ
3. Eleven drar **ett** block från varje kategori till "PROMPT-RUTAN"
4. Prompten byggs ihop automatiskt: t.ex. *"En katt, modig och orange, på ett hustak, i tecknad stil, vid solnedgång"*
5. Eleven klickar **"BYGG OCH KÖR"**

### Vad händer när eleven klickar

6. Prompten skickas till en **förinspelad bildbank** (ej riktig bild-AI — för pedagogisk tydlighet och hastighet)
7. Resultatet visas (en bild som matchar prompten)
8. Skärmen visar: **"Du har just byggt en prompt med 5 byggblock! Kolla resultatet."**

### Förinspelad bildbank — varför

- Pedagogiskt deterministiskt: samma prompt ger alltid samma bild → eleven kan jämföra
- Snabbt: ingen API-kostnad, ingen vänteti
- Säkert: inga oväntade resultat
- Pedagogiskt klart: AHA-momentet kommer från *jämförelsen*, inte från generering

Bildbanken behöver täcka kombinationer av blocken — kan göras av Joel i förväg med t.ex. Midjourney och kuraterat resultat.

---

## Steg 2: Ändra ett block

### Setup

1. Skärmen visar: *"Bra! Nu ska du ändra **ett enda** block och se vad som händer."*
2. Eleven byter t.ex. STIL från "tecknad" till "fotografi"
3. Klickar KÖR igen

### Vad händer

4. Den nya bilden visas — *bredvid* den gamla
5. Skärmen jämför:
   ```
   FÖRE: tecknad orange katt på hustak vid solnedgång
   EFTER: fotografi orange katt på hustak vid solnedgång
   ```
6. Insikt visas: *"Ett ord ändrade hela bilden. Det här är prompt-arbete."*

### Variationer eleven uppmuntras prova

- Byta STIL: tecknad → fotografi → akvarell
- Byta DETALJ: solnedgång → snöstorm → klar dag
- Byta VAR: hustak → månen → undervattensvärlden
- Byta HURDAN: modig → ledsen → arg

---

## Steg 3: Reverse engineering

### Setup

1. Skärmen visar en *färdig bild* (från bildbanken)
2. Eleven får 5 tomma byggblock-platser
3. Eleven ska *gissa* vilka block som skapade bilden
4. Drag-and-drop som tidigare

### Validering

5. När eleven trycker "VERIFIERA":
   - Korrekta block markeras gröna
   - Felaktiga markeras gula (delvis rätt) eller röda
   - Den faktiska prompten visas

### Pedagogisk poäng

Det är *svårare* att gissa prompten än att bygga en. Det här uppmärksammar eleven på:
- Hur många detaljer som påverkar
- Hur två "liknande" prompter kan ge olika resultat
- Att bra prompter är *uppfinnssamma*

### Variationer

- Lätt nivå: 3 av 5 block är förinplockade, eleven gissar de 2 saknade
- Standard: alla 5 ska gissas
- Svår nivå: bilden är komplex, det finns flera "rätta" gissningar

---

## Steg 4: Egen utmaning

### Setup

1. Skärmen visar: *"Nu får du leka själv. Bygg vad som helst."*
2. Eleven får också skriva *fritext* — inte bara välja färdiga block
3. Skärmen ger 3 prompts att börja från:
   - "En framtidsstad"
   - "En djup havet-scen"
   - "En sport-scen"
4. Eller eleven börjar från noll

### Vad händer

5. Här används en *riktig* bild-AI om webbsidan kopplats till en API:n (eller Microsoft Designer iframe, eller bilderna kvarstår på förinspelad bank med fritext-fallback till "ungefär liknande" matchning)
6. Eleven kan iterera fritt
7. Klassen kan dela sina favoritprompter

### Avslutande reflektionsfrågor

1. Vilken prompt funkade bäst för dig?
2. Vad ändrade du för att få det du ville?
3. Vad förvånar dig med vad AI gjorde?
4. Vad gjorde *du*? Vad gjorde *AI*?

---

## Block-bibliotek (innehåll)

### VEM/VAD (10-15 alternativ)

```
en katt
en hund
en astronaut
en superhjälte
en drake
en pirat
en dansare
en fotbollsspelare
en uppfinnare
en rymdvarelse
en vulkanforskare
en orkester
en rytter
ett spöke
en kock
```

### HURDAN (10-15 alternativ)

```
modig
ledsen
arg
glad
mystisk
sömnig
överraskad
fokuserad
vänlig
elak
gammal
ung
liten
gigantisk
energisk
```

### VAR (10-15 alternativ)

```
på ett hustak
på månen
i en djungel
i en underjordisk grotta
under havet
i en framtidsstad
på en strand
i en gammal slott
i klassrummet
i ett tåg
på en bergstopp
i ett vardagsrum
i en rymdskepp
i en regnskog
på en pirat-skepp
```

### STIL (8-12 alternativ)

```
tecknad
fotografi
akvarell
oljemålning
pixelkonst
manga
3D-renderad
collage
silhuett
linjeritning
abstrakt
realistisk
Pixar-stil
Studio Ghibli-stil
serietidnings-stil
```

### DETALJ (10-15 alternativ)

```
vid solnedgång
i regn
i snöstorm
i klart väder
med varma färger
med kalla färger
med dramatisk belysning
i mörker
med mjuk belysning
med många färger
i svartvitt
med en flagga i bakgrunden
med en stor måne
med en specifik karaktär i fokus
med många människor
```

---

## Bildbank — skapande och organisation

### Vad behövs

- En bildbank med ~150-300 förinspelade bilder
- Varje bild taggad med vilka block som "skapade" den
- Strukturerad så att kombinationen av block kan matchas mot rätt bild

### Hur Joel skapar bildbanken

1. Definiera 50-100 "kanoniska kombinationer" (de mest pedagogiskt värdefulla)
2. Generera bilderna med Midjourney/DALL-E/Adobe Firefly
3. Granska — bara behåll bilder som *tydligt* speglar prompten
4. Tagga och organisera

### Datamodell

```typescript
interface PromptBlock {
  id: string;
  category: 'whoWhat' | 'howWhat' | 'where' | 'style' | 'detail';
  text: string;
}

interface PromptResult {
  blocks: PromptBlock[];
  imageUrl: string;
  matchScore: number;  // hur exakt matchar bilden prompten
}

interface ReversePuzzle {
  imageUrl: string;
  correctBlocks: PromptBlock[];
  hints?: string[];
}
```

---

## Teknisk implementation

### Stack-rekommendation

- **Framework:** React (samma stack)
- **Drag-and-drop:** `@dnd-kit/core`
- **Bilder:** Förinspelade i bildbank, ev. CDN
- **State:** Lokal komponent + localStorage för att spara elevens favoriter

### Tillgänglighet

- Tangentbordsstöd för drag-and-drop (samma som tidigare övningar)
- Bilder ska ha alt-text som beskriver innehåll
- Skärmläsare-stöd för promptbygget
- Möjlighet att förstora text och bilder

### Mobilstöd

- Stora drag-handles
- Touch-support
- Liggande mode för bredare scrolling-områden

### Performance

- Bildbanken bör vara optimerad (WebP, lågupplöst preview + högre upplösning på begäran)
- Förladda nästa förväntade bilder

---

## Analog version (om webbsidan inte är klar)

### Vad behövs

- Utskrivna kort: 10 av varje kategori (VEM/VAD, HURDAN, VAR, STIL, DETALJ)
- Skrivpapper för att skriva ner prompten
- En lärar-dator med riktig AI för att köra prompterna

### Genomförande

1. Eleverna bygger prompts med korten i par
2. Skriver upp på papper
3. Räcker upp handen — läraren testar prompten i AI:n
4. Resultat visas på storbild
5. Eleverna jämför

### Fördel med analog

- Mer interaktion mellan elever och lärare
- Verkligt AI-resultat (inte förinspelat)
- Stora pedagogiska samtal i klass

### Nackdel

- Långsammare
- Begränsat antal "körningar"
- Svårt att jämföra prompter sida vid sida

---

## Tester innan publicering

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare
2. **Elevtest:** Klass åk 4-6 — vilka block missförstås? Vad behövs mer alternativ av?
3. **Tekniskt:** Funkar på Chromebook/iPad/mobil?
4. **Tillgänglighetstest**

---

## Återanvändbar för framtida lektioner

Komponenten kan återanvändas:

- **L4:** "Hallucinations-prompten" — bygg en prompt som *får AI att hitta på*
- **L6:** "Sycophancy-prompten" — bygg en prompt som testar om AI håller med dig oavsett
- **L7:** "Framtids-prompten" — beskriv en framtid med blocken

Bygg modulärt så att framtida block-bibliotek kan plockas in.

---

## Sammanfattning för utvecklare

> Det här är *finmotorisk* pedagogik. Eleven ska känna att hen *styr* AI:n. Varje litet ord ska göra skillnad. Designa för iteration — inte för "ett rätt svar".

Bygg flexibelt. Bygg pedagogiskt. Bygg med många exempel.
