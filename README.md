# AI-litt: Didaktik för AI-litteracitet i gymnasiet

En modern resursplattform för gymnasielärare att integrera undervisning om och med AI i sina ämnen, kopplat till Skolverkets kursplaner.

## Översikt

AI-litt är en skalbar webbplats byggd med Next.js som erbjuder:

- **Strukturerat innehåll**: Moduler och aktiviteter kopplade till det centrala innehållet i gymnasiets kursplaner
- **Sju AI-litteracitetsaspekter**: Allt innehåll kategoriseras enligt definierade aspekter med visuella badges
- **Sökning och filtrering**: Kraftfull sökfunktion med fuzzy search och filtrering på aspekter
- **Modern design**: Skandinavisk minimalism med fokus på läsbarhet och användarvänlighet

## Teknisk stack

- **Ramverk**: Next.js 15 (App Router)
- **Språk**: TypeScript
- **Styling**: Tailwind CSS
- **UI-komponenter**: Shadcn/UI (Radix UI)
- **Content Management**: Contentlayer för MDX-hantering
- **Sökning**: Fuse.js för fuzzy search
- **Typografi**: Inter font

## Kom igång

### Förutsättningar

- Node.js 18+
- npm eller yarn

### Installation

1. Installera beroenden:
```bash
npm install
```

2. Starta utvecklingsservern:
```bash
npm run dev
```

3. Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare

### Bygga för produktion

```bash
npm run build
npm start
```

## Projektstruktur

```
ai-litt/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout med header/footer
│   ├── page.tsx                 # Startsida med sök/filter
│   └── amnen/                   # Ämnessidor
│       ├── page.tsx             # Ämneslista
│       └── [subject]/[course]/[slug]/
│           └── page.tsx         # Modulsida
├── components/
│   ├── layout/                  # Layout-komponenter
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── search/                  # Sök-komponenter
│   │   ├── SearchBar.tsx
│   │   └── ModuleCard.tsx
│   └── ui/                      # UI-komponenter
│       ├── AiLiteracyBadge.tsx # AI-aspekt badges
│       ├── MetaBadge.tsx       # Metadata badges
│       ├── ActivityBlock.tsx   # Aktivitetsblock för MDX
│       ├── accordion.tsx       # Accordion-komponent
│       └── badge.tsx           # Bas badge-komponent
├── content/                     # MDX-innehåll
│   └── svenska/
│       ├── svenska-1/
│       └── svenska-2/
├── lib/
│   ├── aiLiteracyConfig.ts     # Konfiguration för AI-aspekter
│   └── utils.ts                # Utility-funktioner
└── contentlayer.config.ts      # Contentlayer-konfiguration
```

## AI-litteracitetsaspekter

Plattformen använder sju definierade aspekter av AI-litteracitet, var och en med en unik färg:

1. **Berättelsen om AI** (lila) - AI:s historia och utveckling
2. **Vad är AI?** (blå) - Teknisk förståelse
3. **Använda AI** (grön) - Praktisk användning
4. **Etik** (röd) - Etiska överväganden
5. **Kritiskt granska** (orange) - Källkritik och utvärdering
6. **Människa & maskin** (fuchsia) - Relationen mellan människor och AI
7. **Framtid & samhälle** (turkos) - AI:s samhällspåverkan

## Skapa innehåll

### Lägga till en ny modul

1. Skapa en ny MDX-fil i `content/[ämne]/[kurs]/`
2. Lägg till frontmatter:

```mdx
---
title: "Modulens titel"
subject: "Svenska"
course: "Svenska 1"
description: "Kort beskrivning av modulen"
ai_literacy_ids: [2, 3, 4]
time: "90 min"
groupSize: "Smågrupper (3-4 elever)"
---

# Modulens titel

Innehåll här...
```

### Använd ActivityBlock-komponenten

I ditt MDX-innehåll kan du använda ActivityBlock för interaktiva aktiviteter:

```mdx
<ActivityBlock
  title="Aktivitetens titel"
  time="90 min"
  groupSize="Smågrupper (3-4 elever)"
  literacyIds={[3, 4]}
  type="OM AI"
>

Aktivitetens innehåll här...

### Steg 1: Förberedelse
...

</ActivityBlock>
```

## Komponenter

### AiLiteracyBadge

Visuell badge för AI-litteracitetsaspekter:

```tsx
<AiLiteracyBadge id={2} />
<AiLiteracyBadgeList ids={[2, 3, 4]} />
```

### MetaBadge

Badge för metadata som tid och gruppstorlek:

```tsx
<MetaBadge type="time" value="90 min" />
<MetaBadge type="group" value="Smågrupper" />
```

## Anpassning

### Ändra AI-aspekter

Redigera `lib/aiLiteracyConfig.ts` för att ändra aspekter, färger eller lägga till nya.

### Styling

Projektet använder Tailwind CSS. Anpassa färger och typografi i `tailwind.config.ts`.

### Lägg till nya ämnen

1. Skapa en ny mapp under `content/[nytt-ämne]/`
2. Lägg till kursmappar och MDX-filer
3. Contentlayer kommer automatiskt att indexera innehållet

## Utveckling

### Köra i utvecklingsläge

```bash
npm run dev
```

### Linting

```bash
npm run lint
```

### Type-checking

TypeScript kommer att validera typer automatiskt under utveckling.

## Framtida utveckling

- [ ] Användargenererat innehåll (formulär för att skicka in aktiviteter)
- [ ] Backend med databas (Supabase/PostgreSQL)
- [ ] Fler ämnen och kurser
- [ ] Export-funktioner (PDF, Word)
- [ ] Kommentarer och betyg
- [ ] Lärarguider och videogenomgångar

## Bidra

Bidrag är välkomna! Kontakta projektägaren för mer information.

## Licens

Alla rättigheter förbehållna © 2025 AI-litt

## Kontakt

För frågor eller support, kontakta projektteamet.
