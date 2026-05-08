# Lektion 2: Vad är AI egentligen?

> **Dimension 1** — *Vad är AI?*
> **Målgrupp:** Mellanstadiet (åk 4-6)
> **Tid:** 90-120 min (1-2 lektionspass)
> **Förkunskap:** Lektion 1 (tidslinjen, tre vågorna)

---

## Lektionens kärnfråga

> *Hur kan något som inte tänker ändå verka så smart?*

## Lektionens kärnpåstående

> *AI tänker inte. AI gissar. Den känner igen mönster i enorma mängder data — och svarar med det som troligen kommer härnäst.*

---

## Filer i denna mapp

| Fil | Vem den är till för | Innehåll |
|-----|---------------------|----------|
| **`README.md`** | Översikt | Den här filen |
| **`lararhandledning.md`** | Lärare | Steg-för-steg, tider, anpassningar |
| **`lararetext.md`** | Lärare | Fördjupning (~5 sidor) |
| **`elevtext.md`** | Elever | Kärntexten (~2 sidor) |
| **`klipp-bibliotek.md`** | Lärare | YouTube-klipp + Teachable Machine |
| **`fall-bibliotek.md`** | Lärare | Källförteckning för 9 verkliga fall (Amazon, Google Photos, Tay, etc.) |
| **`interaktivt-monsterlabbet.md`** | Utvecklare + lärare | Spec för bias-simulator (4-nivåer) |
| **`bedomningsstod-och-hemuppgifter.md`** | Lärare | Formativ bedömning + bias-jakt-hemuppgift |

---

## Lektionens struktur i sex steg

| Steg | Vad | Tid | Material |
|------|-----|-----|----------|
| **A** | Kroken: "Det var en gång en..." (klassen som språkmodell) | 8 min | Tavla |
| **B** | Fallet: Live-test + 3Blue1Brown + Amazon-historien | 15 min | AI-verktyg + 3Blue1Brown-klipp |
| **C** | Kärntexten: Eleverna läser | 15 min | `elevtext.md` |
| **D** | Mönsterlabbet (bias-simulator i 4 nivåer) | 25 min | Webbkomponent (eller Teachable Machine) |
| **E** | Egen praktik: Tvillingbild-experimentet | 20 min | AI-verktyg + uppgiftsmall |
| **F** | Landning: MÖNSTER • TRÄNINGSDATA • BIAS | 7 min | Klassrumssamtal |

**Total: 90 min.** Vid 2 pass: paus efter D.

---

## Lärandemål

Efter lektionen ska eleven kunna:

1. **Förklara** med egna ord vad mönsterigenkänning är
2. **Beskriva** vad träningsdata är och varför det spelar roll
3. **Identifiera** bias i AI och förklara att bias inte är "ondska" utan en följd av ensidig data
4. **Tillämpa** Tänkartrappan i en bild-AI-uppgift

---

## Tre nyckelbegrepp

```
MÖNSTER • TRÄNINGSDATA • BIAS
```

Dessa tre ord är hela lektionen. Kommer återkomma i hela kursen.

---

## Det centrala AHA-momentet

I **Mönsterlabbet Nivå 3** tränar eleven AI:n bara på *bruna hundar* och *vita katter*. När hen sedan testar med en *svart katt* gissar AI:n **HUND** — eftersom den lärt sig "brun = hund, vit = katt", inte "hund vs katt".

Detta är upplevelsen som ger insikten: **bias är data som kommer in.**

Inget annat i lektionen är lika kraftfullt. Allt annat är stöd-strukturer för det momentet.

---

## Förkunskap som krävs

Eleverna ska kunna från L1:

- AI är inte en sak — det är många system
- Det finns "tre vågor" — generativ AI är från 2017+
- AI gissar, vet inte säkert
- Tänkartrappan: Jag → AI → Jag → Iterera

---

## Material som behövs

### På plats

- Projektor + ljud
- AI-verktyg för eleverna (verktygsoberoende — ChatGPT, Microsoft Copilot, Snap AI, eller Skol-AI)
- Webbkomponent Mönsterlabbet (eller Teachable Machine som backup)
- Eleverna behöver penna + papper

### Förberett av lärare

- Läs `lararhandledning.md` och `lararetext.md` (särskilt avsnittet om bias)
- Bestäm klipp från `klipp-bibliotek.md` (minst 3Blue1Brown-utdrag eller likvärdigt)
- Testa Mönsterlabbet själv innan
- Förbered en "lokal fråga" för live-testet (B1) som AI sannolikt hanterar dåligt
- Repetera tidslinjen från L1 (2 min i början)

---

## Pedagogiska principer (genomsyrar lektionen)

1. **Förklara på riktigt — inte fördumma.** Begrepp som "transformer", "RLHF", "stochastic parrot" — använd när det är relevant, förklara på svenska.
2. **Verkliga exempel före fiktion.** Amazon. Google Photos. Tay. Apple Card. Stable Diffusion.
3. **Eleven äger processen.** Tänkartrappan tränas igen i steg E.
4. **Källkritisk grundhållning.** Varje AI-svar granskas.
5. **Bias är data, inte ondska.** Den pedagogiska kärnan.

---

## Vad lektionen *inte* gör

- Vi går *inte* djupt in på matematiken bakom neural networks (det är gymnasiet)
- Vi tar *inte* upp prompting i detalj (det är L3)
- Vi tar *inte* upp deepfakes och hallucinationer (det är L4)
- Vi tar *inte* upp etiska dilemman på allvar (det är L5)

L2 lägger den *tekniska grundförståelsen*. Allt vidare bygger på denna.

---

## Cliffhanger till lektion 3

> *"Imorgon: nu vet vi hur AI fungerar. Hur använder vi det utan att bli styrda av det? Hur blir vi chefen?"*

---

## Status och nästa steg

- [x] Lärarhandledning skapad
- [x] Lärartext skapad
- [x] Elevtext skapad
- [x] Klipp-bibliotek skapat
- [x] Fall-bibliotek skapat
- [x] Spec för Mönsterlabbet skapad
- [x] Bedömningsstöd och hemuppgifter skapade
- [ ] **Joel granskar och ger feedback**
- [ ] Slidedeck skapas
- [ ] Introvideo (2-3 min) — Joel skapar
- [ ] Mönsterlabbet byggs som webbkomponent
- [ ] Klipp-biblioteket verifieras med riktiga URL:er
- [ ] Klassrumstest med åk 4-6
- [ ] Iterera

---

## Frågor att fundera på (Joel)

1. **Mönsterlabbet Nivå 3** — träffrätt på AHA? Eller behöver vi tona ner det / förstärka pedagogiken?
2. **Bias-jakt-hemuppgiften** — kommer eleverna ha vuxenstöd? Bör vi ha en alternativ analog version?
3. **3Blue1Brown** — engelska. Är det rimligt för åk 4-6 med undertexter? Eller bör vi prioritera UR Play?
4. **Tvillingbild-experimentet med "kvinnlig lärare med slöja"** — risk för säkerhetsfilter. Acceptabelt? Eller ska vi byta prompts?
5. **Apple Card / COMPAS** — tas bara upp i lärartexten. Ska de in i elevtexten också?
6. **Tay-fallet** — tas upp i fall-bibliotek + frivillig hemuppgift. Bör vi ha det som *huvudfall* istället för Amazon? (Mer dramatiskt men mer obehagligt.)

---

## Anslutande material

- **Lektion 1:** `../lektion-1/` — bygger på tidslinjen och de tre vågorna
- **Master-plan:** `../master-plan.md`
- **Lektion 3 (kommer):** *Använda AI som ett verktyg* — bygger på "AI gissar mönster" från L2
