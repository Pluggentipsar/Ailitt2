# Sajt-plan: rensa upp landningssida & meny

Arbets-dokument för omorganiseringen av ai-litt.se. Skapad efter att sidan vuxit organiskt från gymnasie-fokus → grundskole-läromedel → workshop. Spretigheten är reell — det här löser tre saker: navigation, första-intryck, och copy.

Anvisning: när ett delsteg är klart, byt `[ ]` mot `[x]`. Inget i denna fil behöver fungera som hård spec — det är riktning, inte ritning.

## Beslutad riktning

- **Målgrupp**: Bred (alla lärare F-12 + vuxenutbildning). Hero ska INTE säga "gymnasielärare".
- **Första intryck**: En "vad letar du efter?"-vy direkt under hero. Två chip-rader (stadie + behov) som filtrerar fram 1-3 relevanta ingångar.
- **Sektionsidentiteter**: Behålls. Workshopen får ha sin "papper-och-tape"-stil, grundskolan sin egen, etc. Det är förenkling av STRUKTUR vi gör, inte stil.

## Lager 1 — Meny

**Före (10 toppnivå-länkar):**
Hem · Grundskola · Mellanstadiet · AI-litteracitet · Didaktiska modeller · Ämnen · Aktiviteter · Verktygslåda · Sparat · Om

**Efter (5 toppnivå + footer):**
```
Hem  |  Stadier ▾  |  Ramverk ▾  |  Verktyg  |  Sparat
```

- **Stadier ▾**: Grundskola F-6 · Mellanstadiet 4-6 · Workshop: Källkritik · Gymnasiet (→ /amnen)
- **Ramverk ▾**: AI-litteracitet · Didaktiska modeller
- **Verktyg**: Verktygslåda (med /aktiviteter inbäddat som flik — se Lager 4)
- **Sparat**: behåller egen plats (snabbåtkomst till bookmarks)
- **Om**: flyttas till footern, inte toppmenyn

Dropdown vs mega-meny: börja med enkla dropdowns (mindre att bygga). Mega-meny om vi senare hittar att det behövs.

### Tasks
- [x] Header.tsx: NAV_LINKS byts ut mot ny struktur med dropdowns
- [x] Mobilmenyn (drawer) anpassas — kategorier som expanderar
- [ ] Footer.tsx: lägg in /om-länk (samt copyright/credits om de saknas)
- [x] Workshop-shellets nav uppdateras inte — den är intern till workshop-rummet

## Lager 2 — Landningssida

### Struktur (uppifrån och ner)

1. **Hero** — kortare, neutrare copy. Ingen "för gymnasielärare"-badge.
2. **Wizard-widget** ("Vad letar du efter?") — kärnan.
3. **Highlight-banner** — vad är nytt eller mest använt just nu (t.ex. workshopen).
4. **Sekundär utforskning** — sökmotorn (som finns idag) + de två stora ramverkskorten.
5. **Footer**.

### Hero — copy-förslag

- **Huvudrubrik**: *"Färdiga lektioner, workshops och verktyg för AI-undervisning"*
- **Underrubrik**: *"För dig som undervisar i grundskolan, gymnasiet eller vuxenutbildningen — kopplat till kursplaner och evidensbaserat."*
- **CTA**: *"Hjälp mig hitta rätt"* (scroll till wizard) + *"Utforska alla moduler"* (scroll till sökmotorn)
- **Borttaget**: Stats-raden (Moduler / AI-aspekter / Möjligheter) — den känns inte central för en ny besökare. Eventuellt återinför som mindre "i siffror"-rad längre ner.

### Wizard-widget

Två steg, båda chip-rader:

**Steg 1 — Jag undervisar i:**
`[Förskoleklass-3] [Åk 4-6] [Åk 7-9] [Gymnasiet] [Vuxen/SFI] [Allmänt/blandat]`

**Steg 2 — Jag letar efter:**
`[Färdig lektion] [Workshop] [Aktivitet att plocka från] [Ramverk & teori] [Verktyg]`

**Resultat** (visas när minst stadie + behov är valda):
- 1-3 kort med konkret länk + en mening om vad det är
- Vid tom kombination: ärlig text *"Vi har inget specifikt för X just nu — men dessa kan passa: [närmaste alternativ]"*

#### Mappning av kombinationer (utkast)

| Stadie \ Behov | Färdig lektion | Workshop | Aktivitet | Ramverk | Verktyg |
|---|---|---|---|---|---|
| F-3 | /grundskola | — | /verktygslada (filtrerat) | /ai-litteracitet | /verktygslada |
| 4-6 | /grundskola + /mellanstadiet | /workshops/kallkritik-mellanstadiet | /mellanstadiet/labb | /ai-litteracitet | /verktygslada |
| 7-9 | (lucka — fyll med "närmaste") | /workshops/kallkritik-mellanstadiet (passar 7-9) | /verktygslada | /ai-litteracitet | /verktygslada |
| Gymnasiet | /amnen | (lucka) | /aktiviteter | /didaktiska-modeller | /verktygslada |
| Vuxen/SFI | (lucka — säg det) | (lucka) | /verktygslada | /didaktiska-modeller | /verktygslada |
| Allmänt | sökmotorn nedan | /workshops/kallkritik-mellanstadiet | /verktygslada | /ai-litteracitet + /didaktiska-modeller | /verktygslada |

Luckor är värdefulla — de blir prioriteringslista för framtida innehåll.

### Tasks
- [x] Ny komponent `components/landing/SubjectFinderWizard.tsx` — håller state för stadie + behov, mappar till resultat
- [x] Datastruktur `lib/landing/subject-finder-map.ts` — matrisen ovan, så vi kan ändra utan att röra UI
- [x] Hero rewrite i `app/page.tsx`
- [ ] Highlight-banner-komponent (kan flagga workshopen + eventuellt senaste tillägg)
- [x] Behåll befintlig sökmotor + ramverkskort, men flytta ner i hierarkin

## Lager 3 — Copy

Listigt minimum (inte total om-text):

- [ ] Hero — ny copy (se ovan)
- [ ] "Value proposition"-rutan (Kopplat till kursplaner / Praktiska aktiviteter / AI-litteracitet integrerat) — uppdatera så "kursplaner" inte enbart kopplar till gymnasiet
- [ ] Grundskola-bannern — ändra "Nyhet för grundskolan" om det inte är nytt längre; flytta dess egen exponering till stadier-dropdown istället för full-bredd-banner på framsidan
- [ ] De två stora korten (AI-litteracitet + Didaktiska modeller) — behåll men nyansera "Mer än verktygskunskap" eftersom vi har mycket verktygsinnehåll också
- [ ] Footer — lägg till länkar till /om, credits, ev. licens

## Lager 4 — Strukturändringar bakom kulisserna

### /aktiviteter → flik i /verktygslada
- [ ] `/aktiviteter` och `/verktygslada` ska kunna nås via flikar i samma sida
- [ ] URL-strategi: behåll `/aktiviteter` med redirect till `/verktygslada?tab=aktiviteter`? Eller ny route `/verktygslada/aktiviteter`?
- [ ] Beslut: redirect är okej men flikarna ska vara TYDLIGA — det är två olika databaser även om de bor på samma sida

### /bookmarks
- [ ] Stannar på `/bookmarks` — bara meny-positionen flyttas (sista plats)

### /om
- [ ] `/om` flyttas från header till footer
- [ ] (Sidan finns inte ännu — kolla om det behöver skapas)

## Lager 5 — Taxonomi (tillagt aug 2026)

Det som Lager 1–4 inte löste. Menyn och landningssidan blev bättre, men
**klassifikationen** är fortfarande spretig — och det är den som gör att
startsidan och övningsbanken känns som två olika sajter.

### Kartläggning: sex system i bruk

| System | Antal | Var |
|---|---|---|
| AI-litteracitetsdimensioner | 7 | Startsidans filter, ramverkssektionen, badge på övningar, sökindexet |
| OECD-domäner | 4 | **Bara** övningsbanken — filter + badge |
| Innehållstyper (`UnifiedItemType`) | 10 | Startsidans typfilter |
| Stadier | 3 | Navigationen, wizarden |
| Källkritikens egna | 8 kapitel + 19 färdigheter + 4 nivåer | Workshoppen |
| Bankens facetter | domän, tid, årskurs, källa | BankExplorer |

Två av dem svarar på **samma fråga** — "vilken sorts AI-kunnande tränar det
här?". Symptomet syns på varje övningssida: den renderar både `DomanBadge`
och `AiLiteracyBadgeList`, två parallella etiketter utan förklarad relation.

### Beslutat kontrakt

- **De 4 domänerna (Möta · Skapa · Styra · Forma) är navigationsfiltret.**
  Fyra facetter går att skanna. De beskriver vad eleven GÖR, vilket är hur
  man väljer material till en specifik lektion.
- **De 7 dimensionerna är täckningslagret.** De svarar på "vad har jag gjort
  i termin och vad saknas?" — hör hemma på ramverkssidorna och som badge,
  inte som primärt filter.

### Två mätningar som styr genomförandet

**1. Automatisk härledning går inte.** Testade mot befintligt data i banken:
`styra` mappar till `[2]`, `[2,4]`, `[2,5]` och `[2,3]` beroende på övning;
`mota` till `[1,4]`, `[4]` och `[0,1]`. Många-till-många åt båda håll — en
människa gjorde en redaktionell bedömning varje gång. En mekanisk mappning
vore en efterhandskonstruktion. **Domäntaggar måste sättas för hand.**

**2. Domäner finns bara i banken.** Dimensionerna är redan trädda genom hela
sajten. Kontraktet ovan kostar därför omtaggning av allt utanför banken:

| Innehåll | Antal | Kommentar |
|---|---|---|
| Moduler (contentlayer) | 24 | Frontmatter-fält |
| Verktyg | 75 | Ofta självklart: skapa eller möta |
| Mellanstadielektioner | 7 | |
| Grundskola-delar + aktiviteter | ~15 | |

Cirka 120 bedömningar. Var och en snabb, men det är redaktionellt arbete —
inte mekaniskt.

### Tasks
- [ ] `lib/taxonomi.ts` — ett ställe som definierar båda systemen, deras
      jobb, och att de INTE är härledbara ur varandra. Ersätter att
      `DOMAN_META` bor i banken och `aiLiteracyConfig` bor för sig.
- [ ] Domänfält på `UnifiedItem` i sökindexet
- [ ] Tagga moduler (frontmatter `domaner`)
- [ ] Tagga verktyg
- [ ] Tagga mellanstadiet + grundskola + aktiviteter
- [ ] Startsidan: typfiltret byts mot domän + stadium + tid
- [ ] `UnifiedItemType` blir kvar som liten etikett på kortet, inte filter
- [ ] Ramverkssidorna: bygg täckningsvyn — "dina 7 dimensioner, så här
      mycket material finns per dimension"

### Öppen fråga
Källkritikens 19 färdigheter (`Skill`) används bara internt i workshoppen och
exponeras inte som filter. Lämnas orörda tills vidare — men de är en sjunde
taxonomi, och om workshoppen någon gång ska filtreras utåt bör de mappas mot
domänerna först.

## Lager 6 — Kort och visuella primitiver (tillagt aug 2026)

### Vad som finns

Sju separata kortkomponenter, plus inline-kortmarkup på minst tre ställen till
(bankens hubb, spellisteöversikten, workshopsidorna):

`eleverna-om-ai/MetodKort` · `grundskola/ActivityCard` · `grundskola/ModuleCard`
`mellanstadiet/labb/CategoryCard` · `search/ModuleCard` · `search/SearchResultCard`
`search/UnifiedResultCard`

Ingen av dem är fel. De uppstod för att det aldrig fanns en gemensam.

### Avgränsning — viktigt

Detta handlar om att minska antalet KOMPONENTER, inte antalet FORMSPRÅK.
Sajtspråk (rent, sans, ljus) för att hitta och välja; workshopspråk
(gräddpapper, Caveat, Nunito Sans) för materialet man faktiskt kör. Den
gränsen är ett medvetet val — se "Sektionsidentiteter" under Beslutad
riktning — och ska bevaras. Ett kort i workshoppen ska fortfarande se ut som
workshoppen.

### Tasks
- [ ] Inventera vad korten faktiskt skiljer sig i: bara ikon/badge/metarad,
      eller struktur? (Hypotes: mest metarad.)
- [ ] En `<Kort>`-primitiv med varianter (`sajt` | `workshop`) och slots för
      ikon, badges, metarad, CTA
- [ ] Migrera ett kort i taget, börja med `search/*` (tre komponenter, samma
      användning)
- [ ] Ta bort inline-kortmarkupen i bankens hubb och spellisteöversikten

### Görs EFTER Lager 5
Korten visar taxonomibadges. Bygger vi kortet först får vi göra om det när
taxonomin ändrar vad som ska stå på det.

## Bygg-ordning (förslag)

**Lager 1–4 (gjort våren 2026):**

1. ~~Wizard-widget + data-mapping~~ ✅
2. ~~Ny hero + copy~~ ✅
3. ~~Ny meny~~ ✅ (footer-länken till /om återstår)
4. Slå ihop /aktiviteter med /verktygslada som flikar — **ej gjord**
5. Copy-genomgång på resten av landningssidan — delvis

**Lager 5–6 (nästa):**

6. **Taxonomikontraktet i kod** — `lib/taxonomi.ts`. Ingen synlig ändring,
   men allt annat vilar på det.
7. **Tagga om innehållet.** Störst arbete, helt redaktionellt. Kan delas i
   batchar per innehållstyp och committas var för sig.
8. **Startsidans filter byts** — typ ut, domän + stadium + tid in. Först här
   syns förändringen för besökaren.
9. **Täckningsvyn på ramverkssidorna** — dimensionerna får sitt eget jobb.
10. **Kortkonsolidering** — sist, när det är klart vad korten ska visa.

Varje steg är ett naturligt commit-tillfälle. Steg 6–7 lämnar sajten
oförändrad utåt; steg 8 är det som faktiskt löser "rörigheten".

Inget av detta påverkar workshop-shellet (den har egen layout) eller
existerande aktivitets-sidor — bara navigation, framsida och taggning.

## Saker som inte är beslutade ännu

- Vill vi ha "senast publicerat"-feed eller statisk highlight? Statisk räcker antagligen.
- Ska "Stadier ▾"-dropdownen ha bild-tumnaglar (mega-meny) eller text-länkar (vanlig dropdown)? Börja med text.
- Om/när vi flyttar /amnen så det heter "Gymnasiet" i menyn — påverkar det SEO eller internal links? Antagligen lite, kollas vid bygge.
- Vad ska bilder på landningssidan vara? `headerbackground1_50.webp` används överallt nu. Värt att fundera om alla stadier ska ha varsin "ingångsbild".
