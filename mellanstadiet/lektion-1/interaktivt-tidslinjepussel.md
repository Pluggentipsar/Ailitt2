# Spec: Tidslinje-pusslet (interaktiv övning, Lektion 1)

> **Syfte:** Eleverna sorterar 20 kort med AI-händelser i kronologisk ordning *och* delar upp dem i två rader: **FANTASI** (filmer, böcker, spel) och **VERKLIGHET** (riktiga händelser, vetenskapliga genombrott).
>
> **Format:** Detta är en spec för utvecklare när webbsidan byggs. Tills vidare kan övningen göras *analogt* med utskrivna kort (se sista sektionen).

---

## Pedagogiskt mål

Efter Tidslinje-pusslet ska eleven kunna:

1. **Skilja på** fiktiva AI-berättelser och verkliga AI-händelser
2. **Placera** ungefär 6-8 nyckelhändelser på en tidslinje från 1800-talet till nutid
3. **Notera** att vissa filmer kom *före* tekniken (Frankenstein 1818) och vissa kom *efter* (Iron Man 2008 efter röststyrda assistenter)
4. **Reflektera** över "vad gissade filmerna rätt? Vad blev annorlunda?"

---

## Spelmekanik

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  FANTASI    [ kort kort kort kort kort ]                    │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  1800────1900────1950────2000────2010────2020────2026       │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│  VERKLIGHET [ kort kort kort kort kort kort ]               │
│                                                              │
└─────────────────────────────────────────────────────────────┘

[ Korthög med blandade kort att dra och släppa ]
```

### Flöde

1. **Start:** Alla 20 kort är staplade i en hög nere på skärmen, blandade.
2. **Drag:** Eleven drar ett kort till tidslinjen. Kortet kan placeras antingen ovanför (FANTASI) eller under (VERKLIGHET) tidslinjen, vid ungefär rätt år.
3. **Snap:** Kortet fastnar vid närmaste år-position på tidslinjen.
4. **Validering på begäran:** När eleven känner sig klar — knapp "Kontrollera". Då markeras:
   - **Grönt:** Rätt år (±5 år) OCH rätt rad (fantasi/verklighet)
   - **Gult:** Rätt år men fel rad — eller rätt rad men fel år
   - **Rött:** Fel år och fel rad
5. **Reflektion:** Vid klar — popup: "Vilka kort var lättast? Vilka var svårast? Vad förvånade dig?"

### Snäll svårighetsgrad

- Tidslinjens skala är *icke-linjär* — 1800-1950 är komprimerad, 2000-2026 är expanderad. Annars hopar sig allt nytt på en pixel.
- "±5 år"-tolerans betyder att eleven inte behöver kunna exakta år — bara ungefärlig period.
- Vid första försöket: bara FÖRSLAG på rätt rad. Inga felaktiga utslagningar — eleven kan flytta korten tills allt är grönt.
- *Inget* score eller leaderboard — det är ett undersökande spel, inte en tävling.

---

## Kortlistan (20 kort)

### Format på varje kort

```
┌─────────────────────────┐
│  [Bild eller ikon]      │
│                         │
│  TITEL                  │
│  ────                   │
│  Kort beskrivning,      │
│  1-2 meningar           │
│                         │
│  [TYP-tag: F eller V]   │
│  År: ____               │
└─────────────────────────┘
```

OBS: Typ-taggen och året är **dolt** tills eleven validerar. Eleven måste själv gissa.

### FANTASI-kort (10 st)

| ID | Titel | Beskrivning för kortet | Korrekt år | Korrekt rad |
|----|-------|------------------------|------------|-------------|
| F1 | **Frankenstein** | Mary Shelley skriver romanen om mannen som skapar liv av döda kroppar | 1818 | FANTASI |
| F2 | **R.U.R.** | Karel Čapek hittar på ordet "robot" i en tjeckisk pjäs | 1920 | FANTASI |
| F3 | **Asimovs robotlagar** | Isaac Asimov skriver de första reglerna för hur robotar ska bete sig | 1942 | FANTASI |
| F4 | **2001: A Space Odyssey** | Stanley Kubricks film med datorn HAL som vägrar lyda | 1968 | FANTASI |
| F5 | **Star Wars: R2-D2** | Den älskade roboten dyker upp i den första Star Wars-filmen | 1977 | FANTASI |
| F6 | **Terminator** | AI:n Skynet vill utrota mänskligheten — i en film | 1984 | FANTASI |
| F7 | **Pokémon: Pokédex** | Den lilla maskinen som känner igen pokémon. I anime och spel | 1996 | FANTASI |
| F8 | **Wall-E** | Pixar-filmen om den ensamma sopsorteringsroboten | 2008 | FANTASI |
| F9 | **Iron Man: JARVIS** | Tony Starks AI-assistent i den första Iron Man-filmen | 2008 | FANTASI |
| F10 | **Big Hero 6: Baymax** | Den stora vita vårdroboten | 2014 | FANTASI |

### VERKLIGHET-kort (10 st)

| ID | Titel | Beskrivning för kortet | Korrekt år | Korrekt rad |
|----|-------|------------------------|------------|-------------|
| V1 | **Turing-testet** | Matematikern Alan Turing föreslår: kan en dator lura en människa? | 1950 | VERKLIGHET |
| V2 | **Begreppet "AI" myntas** | Forskare träffas på Dartmouth College och hittar på ordet "Artificial Intelligence" | 1956 | VERKLIGHET |
| V3 | **ELIZA** | Världens första chatbot — låtsas vara en psykolog | 1966 | VERKLIGHET |
| V4 | **Deep Blue slår Kasparov** | En IBM-dator slår världsmästaren i schack | 1997 | VERKLIGHET |
| V5 | **AlexNet** | AI-genombrott i bildigenkänning. Plötsligt fungerar det! | 2012 | VERKLIGHET |
| V6 | **AlphaGo slår Lee Sedol** | AI vinner i det asiatiska spelet Go — drag 37 blir legend | 2016 | VERKLIGHET |
| V7 | **Transformer-arkitekturen** | Google-forskare publicerar idén som möjliggör all modern AI | 2017 | VERKLIGHET |
| V8 | **AlphaFold löser proteiner** | DeepMinds AI löser ett 50 år gammalt biologiproblem | 2020 | VERKLIGHET |
| V9 | **ChatGPT lanseras** | 1 miljon användare på 5 dagar. Snabbaste teknik-spridning någonsin. | 2022 | VERKLIGHET |
| V10 | **Sora — AI-video** | OpenAI släpper text-till-video som ser nästan äkta ut | 2024 | VERKLIGHET |

### Bonuskort (frivilliga, för snabba grupper)

| ID | Titel | Beskrivning | År | Rad |
|----|-------|-------------|----|----|
| B1 | **Watson vinner Jeopardy** | IBM:s AI vinner amerikanska Jeopardy mot människor | 2011 | VERKLIGHET |
| B2 | **Drake AI-låten** | Falsk Drake-låt blir hit — utan att Drake gjort den | 2023 | VERKLIGHET |
| B3 | **Black Mirror** | Brittisk TV-serie om teknik som går snett | 2011 | FANTASI |
| B4 | **Her** | Filmen om mannen som blir kär i sin AI-assistent | 2014 | FANTASI |
| B5 | **Nobelpriset till AlphaFold** | Demis Hassabis och John Jumper får Nobelpriset i kemi | 2024 | VERKLIGHET |

---

## Diskussionsfrågor (visas efter validering)

När eleven klarat pusslet — fyra reflektionsfrågor på skärmen:

1. **Vad förvånade dig?** Var det någon händelse du inte trodde var så *gammal*? Eller så *ny*?
2. **Vilka filmer kom före tekniken?** (Tipps: Frankenstein, Asimov, R.U.R.)
3. **Vilka filmer kom efter tekniken?** (Tipps: Iron Man kom efter att vi börjat med röststyrda assistenter. Big Hero 6 kom när AI-genombrott redan var igång.)
4. **Den största skillnaden:** Filmer trodde robotar med kropp. Vad blev det istället? *(Skicka in svar — visas sedan anonymt för klassen.)*

---

## Teknisk implementation (för utvecklare)

### Stack-rekommendation

- **Framework:** React (passar Next.js-stacken som de andra projekten)
- **Drag-and-drop:** `@dnd-kit/core` (modern, accessible, tillgänglig). Inte `react-dnd` — den är inte längre underhållen lika aktivt.
- **State:** Lokal komponent-state. Kan persistas i localStorage så elev kan återuppta.
- **Tillgänglighet:** Tangentbordsstöd obligatoriskt. Tabbordning genom korten, mellanslag för att "plocka upp", piltangenter för att flytta, mellanslag igen för att släppa.

### Datamodell

```typescript
interface TimelineCard {
  id: string;
  title: string;
  description: string;
  year: number;
  type: 'fantasy' | 'reality';
  imageUrl?: string;
  iconName?: string;
}

interface PlacedCard {
  cardId: string;
  placedYear: number;      // Året eleven placerade kortet vid
  placedRow: 'fantasy' | 'reality';
  isValidated: boolean;
  validationStatus?: 'correct' | 'wrong-year' | 'wrong-row' | 'wrong-both';
}
```

### Tidslinjens icke-linjära skala

```
1800 ──── 1900 ── 1950 ─ 1970 ─ 1990 ─ 2000 ─ 2010 ─ 2015 ─ 2020 ─ 2024 ─ 2026
[───────][──────][─────][─────][─────][─────][─────][─────][─────][─────][──]
   100 år  50 år  20 år  20 år  10 år  10 år  5 år   5 år   4 år   2 år
```

Alla intervall är ungefär lika breda visuellt, men representerar olika tidsspann. Detta gör att 2017-2026 inte trängs ihop.

### Bilder/ikoner

För varje kort behövs en illustration. Två alternativ:

1. **Filmaffisch-style små thumbnails** (kräver licens — kontrollera Creative Commons)
2. **Ikoner från icon-pack** (Heroicons, Lucide) som representerar kortet — säkrare licensmässigt

Joels uppfattning ska styra. Min rekommendation: ikoner med tydliga illustrationer skapade av Joel själv (eller AI-genererade som Joel granskar). Samma stil hela vägen för enhetligt utseende.

### Ljud/återkoppling

- **Pling** vid kort-snap till position (kort, behaglig)
- **Validation-ljud** vid kontroll (positivt för rätt, neutralt för fel — *inget* misslyckande-ljud, vi vill inte stigmatisera)
- Möjlighet att stänga av ljud helt

### Tillgänglighet (WCAG AA, eftersom det är skola)

- Tangentbordsstöd (se ovan)
- Skärmläsare-stöd (aria-labels på korten)
- Färgblindssäker färgkodning (grönt/gult/rött — komplettera med ikoner)
- Möjlighet att förstora text
- Pause/take-a-break-knapp

### Mobilstöd

- Drag-and-drop med touch (`@dnd-kit` stödjer detta)
- Liggande mode för mobilen — tidslinjen är bred
- Stora drag-handles för fingrar

### Persistens

- Eleven kan stänga och återuppta — `localStorage` med klassens kod / elevens ID

### Telemetri (frivilligt)

Om webbsidan har stöd för det:

- Antal försök innan rätt
- Vilka kort som missas mest (ger insikt till lärare)
- Tid på övningen

Allt anonymt och aggregerat.

---

## Analog version (för lärare som föredrar pappersversion eller om webbsidan inte är klar)

### Vad behövs

- 20 kort utskrivna på A6-format (eller större)
- En lång tidslinje på tavlan eller ett brunt papper rullat ut på golvet
- Ev. tejp eller blu-tack

### Genomförande (analog version)

1. Klassen delas i grupper om 3-4
2. Varje grupp får sin uppsättning av 20 kort
3. På golvet (eller tavlan): två rader och tidslinjen
4. Gruppen lägger korten — diskuterar
5. Lärare går runt, ställer frågor, hjälper utan att avslöja
6. Efter 15 min: en grupp får visa sin tidslinje för klassen
7. Diskussion

### Material att skriva ut (PDF-version finns när lektion 1 är klar)

Mall för utskrift med alla 20 kort i A6 + tidslinje-bakgrund.

---

## Tester och validering

Innan webbversionen släpps live:

1. **Pedagogtest:** Joel + 1-2 mellanstadielärare testar
2. **Elevtest:** En klass åk 4-6 testar (med samtycke). Observation av vilka kort som missas.
3. **Tillgänglighetstest:** Skärmläsare, tangentbord, ljus/mörkt mode
4. **Performance:** Funkar på en 5 år gammal Chromebook?

---

## Framtida utbyggnader (när lektion 1 fungerar)

- **Lokala tidslinje-utbyggnader:** "Lägg till en händelse från ditt eget liv på tidslinjen"
- **Klassens egen tidslinje:** Klassen kan lägga till sina egna observationer (när de fick första AI-erfarenheten)
- **Före och efter:** En "1995" / "2024" jämförande slider — vad fanns då, vad finns nu
- **Andra teman:** Samma mekanik kan återanvändas i lektion 4 (deepfake-tidslinje), lektion 7 (framtid-tidslinje med tomma år)

Komponenten ska byggas **återanvändbar** — inte bara för lektion 1.
