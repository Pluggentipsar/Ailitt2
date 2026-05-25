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
- [ ] Header.tsx: NAV_LINKS byts ut mot ny struktur med dropdowns
- [ ] Mobilmenyn (drawer) anpassas — kategorier som expanderar
- [ ] Footer.tsx: lägg in /om-länk (samt copyright/credits om de saknas)
- [ ] Workshop-shellets nav uppdateras inte — den är intern till workshop-rummet

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
- [ ] Ny komponent `components/landing/SubjectFinderWizard.tsx` — håller state för stadie + behov, mappar till resultat
- [ ] Datastruktur `lib/landing/subject-finder-map.ts` — matrisen ovan, så vi kan ändra utan att röra UI
- [ ] Hero rewrite i `app/page.tsx`
- [ ] Highlight-banner-komponent (kan flagga workshopen + eventuellt senaste tillägg)
- [ ] Behåll befintlig sökmotor + ramverkskort, men flytta ner i hierarkin

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

## Bygg-ordning (förslag)

1. **Wizard-widget + data-mapping** (huvudvärde, lätt att testa). Lägger den standalone på en /tmp-route först om vi vill, eller direkt i page.tsx.
2. **Ny hero + copy**.
3. **Ny meny** (Header.tsx + footer).
4. **Slå ihop /aktiviteter med /verktygslada som flikar**.
5. **Copy-genomgång på resten av landningssidan**.

Varje steg är ett naturligt commit-tillfälle. Inget av detta påverkar workshop-shellet (den har egen layout) eller existerande aktivitets-sidor — bara navigation och framsida.

## Saker som inte är beslutade ännu

- Vill vi ha "senast publicerat"-feed eller statisk highlight? Statisk räcker antagligen.
- Ska "Stadier ▾"-dropdownen ha bild-tumnaglar (mega-meny) eller text-länkar (vanlig dropdown)? Börja med text.
- Om/när vi flyttar /amnen så det heter "Gymnasiet" i menyn — påverkar det SEO eller internal links? Antagligen lite, kollas vid bygge.
- Vad ska bilder på landningssidan vara? `headerbackground1_50.webp` används överallt nu. Värt att fundera om alla stadier ska ha varsin "ingångsbild".
