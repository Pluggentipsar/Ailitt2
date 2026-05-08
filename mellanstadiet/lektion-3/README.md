# Lektion 3: Använda AI som ett verktyg

> **Dimension 2** — *Använda AI*
> **Målgrupp:** Mellanstadiet (åk 4-6)
> **Tid:** 90-120 min (1-2 lektionspass)
> **Förkunskap:** L1 (tidslinjen) + L2 (mönster, träningsdata, bias)

---

## Lektionens kärnfråga

> *Hur blir jag chefen över verktyget — inte tvärtom?*

## Lektionens kärnpåstående

> *AI är ett verktyg. Du är chefen. Tydliga instruktioner ger användbara resultat.*

---

## Filer i denna mapp

| Fil | Vem | Innehåll |
|-----|-----|----------|
| **`README.md`** | Översikt | Den här filen |
| **`lararhandledning.md`** | Lärare | Steg-för-steg, tider, anpassningar |
| **`lararetext.md`** | Lärare | Fördjupning (~5 sidor) — prompt vs sökning, Tänkartrappan, ärlighetsprincipen |
| **`elevtext.md`** | Elever | Kärntexten (~2 sidor) — fem byggblock, Tänkartrappan |
| **`klipp-bibliotek.md`** | Lärare | YouTube-klipp (MrBeast, Pixar, Roblox Studio) + verktygsöversikt |
| **`fall-bibliotek.md`** | Lärare | Källförteckning för 9 verkliga fall (MrBeast leak, Pixar AI, Roblox Studio, Adobe Firefly, etc.) |
| **`interaktivt-prompt-labbet.md`** | Utvecklare + lärare | Spec för Prompt-labbet (drag-and-drop block-byggare i 4 steg) |
| **`bedomningsstod-och-hemuppgifter.md`** | Lärare | Formativ bedömning + Tänkartrappan-hemuppgift |

---

## Lektionens struktur i sex steg

| Steg | Vad | Tid | Material |
|------|-----|-----|----------|
| **A** | Kroken: Två promptar live (superhjälte vs orange katt) | 8 min | Bild-AI på storbild |
| **B** | Fallet: MrBeast + Pixar + Live-demo (samma fråga, två AI:er) | 15 min | Klipp + AI-verktyg |
| **C** | Kärntexten: Eleverna läser | 12 min | `elevtext.md` |
| **D** | Prompt-labbet (drag-and-drop, 4 steg) | 25 min | Webbkomponent eller analog |
| **E** | Skapa-något-i-par med Tänkartrappan | 25 min | AI-verktyg + uppgiftsmall |
| **F** | Landning: Tre frågor innan jag använder AI | 5 min | Klassrumssamtal |

**Total: 90 min.** Vid 2 pass: paus efter D.

---

## Lärandemål

Efter lektionen ska eleven kunna:

1. **Förklara** skillnaden mellan en sökning och en prompt
2. **Bygga** en prompt med fem komponenter (vem/vad, hurdan, var, stil, detalj)
3. **Tillämpa** Tänkartrappan (Jag → AI → Jag → Iterera) i en faktisk skapande-uppgift
4. **Berätta** att de använt AI när de använt AI (ärlighetsprincipen)

---

## De fem byggblocken

```
VEM/VAD  +  HURDAN  +  VAR  +  STIL  +  DETALJ  =  bra prompt
```

Detta är *kärnramverket* eleverna får. Återkommande genom L4-L7.

---

## Tänkartrappan i full skala (utökad med iterera-steg)

I L1 och L2 introducerades den. I L3 utökas den med ett *fjärde* steg — **iterera** — inspirerat av SAILD-ramverket (Yue et al., 2025).

```
JAG → AI → JAG → ITERERA
```

- **JAG TÄNKER FÖRST:** Vad vill jag? Vad är min idé? Vad vet jag redan?
- **AI HJÄLPER:** Tydlig prompt. Förslag, inte slutsvar.
- **JAG GRANSKAR OCH ÄGER:** Stämmer det? Vad ändrar jag? Vad är *mitt*?
- **ITERERA:** Försök igen, justera, lär dig. Ett försök räcker aldrig.

Iteration är *själva poängen* med design-arbete. MrBeasts team testar 20+ versioner. Vi tränar samma muskel.

Eleverna fyller i en mall i steg E och tar med hem som hemuppgift.

---

## Det centrala AHA-momentet

I **Prompt-labbets steg 2** — eleven ändrar *ett enda block* och ser bilden förändras helt. *"Ett ord ändrade allt."*

Det är insikten: **prompt är inte ett enskilt försök — det är iteration.**

---

## Material som behövs

### På plats

- Projektor + ljud
- AI-verktyg för eleverna (verktygsoberoende)
- Bild-AI som ger snabba resultat (Microsoft Designer, Bing Image Creator, eller motsvarande)
- Prompt-labbet (webbkomponent eller analog mallning)
- Eleverna behöver penna + papper
- Bias-jakt-resultat från L2 (eleverna tar med själva)

### Förberett av lärare

- Läs `lararhandledning.md` och `lararetext.md` (särskilt avsnittet om Tänkartrappan)
- Bestäm klipp från `klipp-bibliotek.md`
- Förbered live-demo (B3): två AI:er eller två formuleringar
- Testa Prompt-labbet själv
- Förbered "tre regler"-affischen för steg E

---

## Pedagogiska principer

1. **Förklara på riktigt — inte fördumma.** Begrepp som "prompt engineering", "iteration" — använd när relevant.
2. **Verkliga exempel.** MrBeast, Pixar, Roblox, Adobe Firefly. Inte fiktiva karaktärer.
3. **Eleven äger processen.** Tänkartrappan är *själva metoden*.
4. **Ärlighetsprincipen.** Berätta alltid när du använt AI.
5. **AI är verktyg.** Inte ersättning, inte vän — verktyg.

---

## Vad lektionen *inte* gör

- Vi tar *inte* upp deepfakes och hallucinationer (det är L4)
- Vi tar *inte* upp etik kring AI (det är L5)
- Vi tar *inte* upp AI som vän/relation (det är L6)
- Vi tar *inte* upp samhällskonsekvenser (det är L7)

L3 är *praktikens* lektion — färdighet i att använda AI klokt.

---

## Cliffhanger till lektion 4

> *"Imorgon: nu kan ni använda AI. Men hur ser ni när AI har fel? Hur vet ni vad som är sant? Detektivskola."*

---

## Status och nästa steg

- [x] Lärarhandledning skapad
- [x] Lärartext skapad
- [x] Elevtext skapad
- [x] Klipp-bibliotek skapat
- [x] Fall-bibliotek skapat
- [x] Spec för Prompt-labbet skapad
- [x] Bedömningsstöd och hemuppgifter skapade
- [ ] **Joel granskar och ger feedback**
- [ ] Slidedeck skapas
- [ ] Prompt-labbet byggs som webbkomponent
- [ ] Bildbank för Prompt-labbet skapas (Joel genererar)
- [ ] Klassrumstest med åk 4-6
- [ ] Iterera

---

## Frågor att fundera på (Joel)

1. **Prompt-labbets bildbank** — bör Joel skapa den med Midjourney/DALL-E innan webbsidan byggs? Cirka 150-300 bilder behövs.
2. **Skapa-något-uppgiften (steg E)** — tre alternativ (seriestrip, filmaffisch, mini-radioinslag). Bra mix? Något att lägga till?
3. **Tänkartrappan-mallen** — är den för detaljerad för åk 4? Kan göras kortare för yngre.
4. **MrBeast som huvudfall** — bra val? Eller bör vi byta till någon som är mer "neutral" (Pixar?). MrBeast är populär men kontroversiell hos vissa lärare.
5. **Verktygsoberoende** — vi nämner Microsoft Designer, Bing Image Creator, Adobe Firefly etc. Är det rätt nivå av verktygskonkretion?
6. **Förinspelad bildbank vs riktig AI-koppling i Prompt-labbet** — pedagogisk klarhet (förinspelad) eller äkthet (riktig API)? Min lutning: förinspelad i steg 1-3, riktig (eller Microsoft Designer iframe) i steg 4.

---

## Anslutande material

- **Lektion 1:** `../lektion-1/`
- **Lektion 2:** `../lektion-2/`
- **Master-plan:** `../master-plan.md`
- **Lektion 4 (kommer):** *Kritiskt granska AI* — bygger på "AI är ett verktyg" från L3
