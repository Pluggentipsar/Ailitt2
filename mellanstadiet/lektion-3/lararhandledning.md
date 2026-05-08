# Lärarhandledning — Lektion 3: Använda AI som ett verktyg

> **Dimension 2:** Använda AI
> **Målgrupp:** Mellanstadiet, åk 4-6
> **Tid:** 90-120 min (1-2 lektionspass)
> **Förkunskap:** Lektion 1 (tidslinjen), Lektion 2 (mönster, träningsdata, bias)

---

## Lektionens kärnfråga

> *Hur blir jag chefen över verktyget — inte tvärtom?*

Eleverna ska efter lektionen kunna:

- **Förklara** skillnaden mellan en *sökning* och en *prompt*
- **Bygga** en bra prompt med fem komponenter (vem/vad, hurdan, var, stil, detalj)
- **Tillämpa** Tänkartrappan (Jag → AI → Jag → Iterera) i en faktisk skapande-uppgift
- **Berätta** att de använt AI när de använt AI (ärlighetsprincipen)

---

## Lektionens upplägg i sex steg

| Steg | Vad | Tid | Vem leder |
|------|-----|-----|-----------|
| A | **Kroken**: Två promptar live — "superhjälte" vs "orange katt med blå mantel..." | 8 min | Lärare |
| B | **Fallet**: MrBeast-thumbnails + Pixar AI + Live-demo med två AI:er | 15 min | Lärare visar, klassen diskuterar |
| C | **Kärntexten**: Eleverna läser elevtexten | 12 min | Eleverna |
| D | **Interaktivt**: Prompt-labbet (drag-and-drop) | 25 min | Eleverna i par |
| E | **Egen praktik**: Skapa-något-i-par med Tänkartrappan | 25 min | Eleverna i par |
| F | **Landning**: Tre frågor innan jag använder AI | 5 min | Helklass |

**Total: 90 min.** Vid 2 pass: paus efter D.

---

## Förberedelser inför lektionen

### Det här behöver du som lärare ha klart

1. **Läs lärartexten** (`lararetext.md`) — *särskilt* om Tänkartrappan i full skala. Det är kärnan.
2. **Bestäm klipp** från klipp-biblioteket (`klipp-bibliotek.md`) — minst MrBeast-relaterat klipp + ev. Pixar-experiment-klipp.
3. **Förbered live-demo (B3):** välj *en* prompt och förbered att skicka den till två olika AI:er (t.ex. ChatGPT + Microsoft Copilot, eller om ni bara har en — testa olika *formuleringar* av samma fråga).
4. **Testa Prompt-labbet** själv — kör igenom övningen, så du vet vad eleverna upplever.
5. **Samla in bias-jakt-resultat** från L2 — använd som krok ("Tänk om ni hade promptat bättre — kan ni få annat resultat?")
6. **Förbered "tre regler"-affischen** för steg E.

### Material som behövs

- Projektor + ljud
- AI-verktyg för eleverna (verktygsoberoende)
- Prompt-labbet (webbkomponent eller analog mallning)
- Eleverna behöver penna + papper (eller motsvarande digitalt) för promptlogg
- Resultat från L2:s bias-jakt-hemuppgift (eleverna tar med själva)

---

## Steg A: Kroken (8 min)

**Mål:** Visa konkret vad skillnaden mellan en otydlig och en tydlig prompt är.

### Så här gör du

1. Öppna ert AI-verktyg på storbild.
2. Skriv prompten: **"Rita en superhjälte"**
3. Visa resultatet. Kommentera kort: "Kanske coolt, men ganska generiskt. Inget speciellt."
4. Skriv ny prompt: **"En orange katt med blå mantel, gröna ögon, solglasögon, sittande på ett hustak vid solnedgång, tecknad stil"**
5. Visa resultatet. Kommentera: "Helt annan grej, va?"
6. Pausa. Säg:
   > *"Det vi precis såg: prompten är inte en *sökning* — det är en *instruktion*. Och idag ska vi lära oss att skriva *bra* instruktioner."*

### Vad du kan vänta dig

- Skratt och engagemang vid den absurda katten — bra
- Vissa elever vill genast prova själva — bra, säg "snart"
- Någon säger "men jag bara skriver såna korta saker till Snap AI" — använd det: "Och därför får du ofta osäkra svar. Idag fixar vi det."

---

## Steg B: Fallet (15 min)

**Mål:** Tre verkliga exempel som visar att proffs *jobbar* med prompts.

### B1: MrBeast och thumbnails (5 min)

1. Visa ett klipp eller skärmbilder av MrBeasts kollektion av thumbnails (de extremt detaljerade tumnaglarna).
2. Berätta:
   > *"Mr Beast är världens största YouTuber — över 300 miljoner prenumeranter. Hans team jobbar i veckor med en enda thumbnail. Och när de använder AI för att hjälpa till med ideer, skriver de prompts som är *en hel sida lång*. Inte 'rita en cool bild'. Utan exakt: vilken färg, vilken känsla, vilken vinkel, vilken storlek på texten, vilket uttryck."*
3. Visa exempel om möjligt: bredvid varandra ett "vanligt" prompt och en MrBeast-stil prompt.
4. Säg:
   > *"Ju tydligare prompt, desto närmare kommer du det du tänkt dig."*

### B2: Pixar och AI-experimentet (5 min)

1. Visa eller berätta:
   > *"Pixar — som gjort Toy Story, Wall-E, Coco — har testat AI-verktyg. Inte för att ersätta sina animatörer, utan för att hjälpa dem testa idéer snabbt. Vad de upptäckte: en bra prompt kunde spara dagar. En dålig prompt gav resultat de inte kunde använda."*
2. (Om klipp finns: visa korta utdrag från Pixar-experiment.)

### B3: Live-demo — samma fråga, olika resultat (5 min)

1. Skriv samma prompt till två olika AI:er (eller två olika *formuleringar* av samma fråga).
2. Visa resultaten bredvid varandra.
3. Diskutera: vad blev lika? Vad blev olika?
4. Säg:
   > *"Verktyget är inte neutralt. Olika AI gör olika. Olika formuleringar ger olika svar. Du som styr — det är du som gör skillnaden."*

### Material för slidedeck (om Joel skapar ett)

- Slide 1: MrBeast-thumbnail-collage
- Slide 2: Pixar-citat eller bild
- Slide 3: Två AI-svar bredvid varandra (fyll i efter live-demo)

---

## Steg C: Kärntexten (12 min)

**Mål:** Eleverna får läsa om vad en prompt är och möter Tänkartrappan i full skala.

### Så här gör du

1. Dela ut elevtexten (`elevtext.md`).
2. Läsupplägg:
   - **Pararbete** rekommenderas — eleverna läser tillsammans och kan diskutera direkt
   - Eller: tystläsning + 3 kontrollfrågor
3. Efter läsning — **3 frågor i helklass** (3 min):
   - Vad är skillnaden mellan en *sökning* och en *prompt*?
   - Vad är de fem byggblocken i en bra prompt?
   - Vad är Tänkartrappan?

### Anpassningar

- **Snabba elever:** Lärartextens fördjupning om "prompt engineering" som yrke
- **Svaga läsare:** TTS-version, eller bara läs huvudpoängerna
- **NPF-stöd:** Visualisera Tänkartrappan på tavlan med tre tydliga steg

---

## Steg D: Prompt-labbet (25 min)

**Mål:** Eleverna *bygger* prompter med drag-and-drop och ser hur varje del påverkar resultatet.

### Så här gör du

#### Variant A: Digital (Prompt-labbet på webbsidan)

1. Eleverna går (i par) till webbsidan.
2. **Steg 1 (8 min):** Bygg en prompt med 5 byggblock — VEM/VAD, HURDAN, VAR, STIL, DETALJ. Klicka kör. Se resultatet.
3. **Steg 2 (8 min):** Ändra *ett* block — t.ex. byt STIL från "tecknad" till "fotografi". Kör igen. Jämför.
4. **Steg 3 (5 min):** Reverse engineering — eleverna ser en bild och ska gissa prompten som skapade den.
5. **Steg 4 (4 min):** Helklassgenomgång — vilka prompter funkade bäst? Vilka var överraskande?

#### Variant B: Analog (om Prompt-labbet inte är klart)

1. Skriv ut "promptkort" — 10 av varje kategori (VEM/VAD, HURDAN, VAR, STIL, DETALJ).
2. Eleverna kombinerar kort till en prompt.
3. Skickar prompten till AI:n (via lärarens dator eller egen).
4. Visar resultatet, jämför med kompisen.

### Vad du som lärare letar efter

- AHA-momentet när eleven ser att *ett ord* förändrar bilden helt
- Förståelsen att fler detaljer = mer kontroll
- Insikten att samma byggblock kan ge olika resultat hos olika AI:er

---

## Steg E: Egen praktik — Skapa-något-i-par (25 min)

**Mål:** Eleverna *äger* en skapande-process från idé till färdig produkt med AI-stöd. Tänkartrappan tränas i full skala.

### Så här gör du

#### Uppgiften

> *I par, skapa **en** av följande:*
>
> 1. **En kort seriestrip** (3-4 rutor) — egen historia, AI hjälper med bilder
> 2. **En filmaffisch** för en påhittad film — AI hjälper med bild
> 3. **Ett mini-radioinslag** (1 min) — AI hjälper med dialog eller röst

#### Tre regler (sätts upp på tavlan)

```
TRE REGLER NÄR DU SKAPAR MED AI

1. Börja med din egen idé
   (vad vill DU göra?)

2. Dokumentera prompten
   (vilka ord skrev du?)

3. Bearbeta resultatet
   (det första AI gav är aldrig slutprodukten)
```

#### Tänkartrappan i praktiken

Eleverna får en mall:

```
1. JAG TÄNKER FÖRST (5 min)
   Vad vill jag skapa?
   ___________________________
   Vad ska det handla om?
   ___________________________
   Vilken känsla ska det ge?
   ___________________________

2. AI HJÄLPER (10 min)
   Min prompt:
   ___________________________
   ___________________________
   Resultatet jag fick:
   [bild/text]
   
   Min nya prompt (efter att jag bearbetat):
   ___________________________
   ___________________________

3. JAG GRANSKAR OCH ÄGER (10 min)
   Vad ändrade jag i resultatet?
   ___________________________
   Hur skulle jag berätta för någon att jag använt AI?
   ___________________________
```

#### Helklassdelning (sista 5 min av E)

- Några par visar sina resultat
- Diskussion: vad gjorde AI:n bra? Vad behövde ni ändra?
- Lyft *en* viktig poäng: ni har skapat något — *ni* är konstnärerna, AI:n var pennan

### Säkerhetsnät

Om något pars resultat blir oväntat (AI vägrar svara, oväntat resultat) — det är pedagogiskt guld. Lyft det:

> *"Vad hände? Varför vägrade AI? Vad lär det oss?"*

Detta är direkt brygga till L4 (kritiskt granska) och L5 (etik).

---

## Steg F: Landning (5 min)

**Mål:** Kondensera. Förbereda för lektion 4.

### Så här gör du

1. **Skriv på tavlan:**
   ```
   TRE FRÅGOR INNAN JAG ANVÄNDER AI:
   
   1. Vet jag vad jag vill?
   2. Hur säger jag det tydligt?
   3. Vad gör jag med resultatet?
   ```
2. Säg:
   > *"AI är ett verktyg. Som hammaren — den vet inte vad den bygger. Du gör det. Du är chefen."*
3. **Cliffhanger till lektion 4:**
   > *"Imorgon: nu kan ni använda AI. Men hur ser ni när AI hittar på? Hur ser ni när bilden eller filmen är fejkad?"*
4. **Hemuppgift:** Använd Tänkartrappan på *en* riktig uppgift hemma (skola, fritid, vad som helst). Dokumentera processen. Tas med till L4.

---

## Förväntade frågor från eleverna

| Fråga | Kort svar |
|-------|-----------|
| "Är det fusk att be AI hjälpa?" | "Beror på. Om läraren förbjudit det — ja. Om uppgiften är att lära sig något — ja, om AI gör allt åt dig. Om uppgiften är att *skapa något*, och du använder AI som verktyg — då är det inte fusk, om du berättar det." |
| "Måste jag alltid säga att jag använt AI?" | "Ja. Det heter ärlighetsprincipen. Det är som att säga 'tack' när någon hjälpt dig." |
| "Kan AI skriva mina läxor?" | "Den kan skriva *texter* som ser ut som läxor. Men då har AI lärt sig — inte du. Vi pratar om detta i lektion 5 (etik)." |
| "Vilken AI är bäst?" | "Beror på vad du vill. ChatGPT är bra på text, Midjourney på bilder, Suno på musik. Inget verktyg är 'bäst' — bara olika." |
| "Måste jag kunna engelska för att använda AI?" | "Nej. De flesta moderna AI:er fungerar på svenska. Men ibland funkar svaret bättre på engelska — för det är vad de tränats mest på." |
| "Får man hitta på prompts?" | "Det är *poängen*. Bra prompter är *uppfunna*, inte hittade. Ju mer kreativ du är, desto bättre verktyg blir AI." |

---

## Bedömning (formativ)

Tre signaler att leta efter — detaljer i `bedomningsstod-och-hemuppgifter.md`:

1. **Bygger eleven prompts med struktur?** (Visas i Prompt-labbet)
2. **Använder eleven Tänkartrappan?** (Visas i steg E — fyller i mallen?)
3. **Berättar eleven att hen använt AI?** (Ärlighetsprincipen)

---

## Anpassningar för olika behov

### NPF-anpassningar

- **Strukturen synliggjord:** A-F-stegen på tavlan, timer per steg
- **Prompt-labbet:** ge fasta promptmallar att börja från
- **Skapa-något-uppgiften:** ge tydligt valmöjlighet (ej "öppen kreativitet")

### Språkstöd

- Tillåt prompter på modersmål — de flesta AI:er fungerar
- Para starka/svaga skrivare i Skapa-något

### Snabba elever

- Lägg till **prompt-utmaning**: hitta på den *konstigaste* prompten som ändå ger ett *vackert* resultat
- **Reverse engineering** på avancerad nivå: visa en konstnärlig bild, gissa exakt prompt
- Fördjupningsuppgift: jämför samma prompt på 3 olika AI:er

---

## Koppling till Lgr22 (åk 4-6)

| Ämne | Centralt innehåll |
|------|-------------------|
| **Svenska** | "Skrivande av olika typer av texter" — eleverna producerar med stöd |
| **Bild** | "Verktyg för bildskapande" — bild-AI som verktyg |
| **Teknik** | "Hur tekniska system utvecklats" — prompts som ny "instruktion" till maskin |
| **Samhällskunskap** | "Information och kommunikation" — varför vi måste vara tydliga med våra ord |

---

## Vad du som lärare kan göra inför nästa lektion

- Spara några elevprompter och resultat — använd som krok i L4 ("Hur vet vi att den här bilden är AI?")
- Notera vilka elever som hade lättast/svårast med Tänkartrappan
- Fundera: vilka av era egna AI-verktyg har inbyggda säkerhetsfilter ni märkt? Det är L4-material.
