# Bildprompter — mellanstadiematerialet

Samlade Midjourney-prompter för alla bildplatser i lektionerna 1–7 + spelen. Varje prompt är **komplett och färdig att copy-paste:a** — stilval, accentfärg och aspect-ratio är redan inbakade.

> **När du har CDN-URL:erna**: skicka dem listade efter ID (t.ex. "L1.2 = https://..."), eller fyll i `bildleverans.csv`. Jag kopplar dem till rätt `PlaceholderImage`-platser i koden.

---

## Visuell stilfamilj

Sajten ska kännas ljus och vänlig genomgående, men inte enformig. Fyra besläktade stilar växlar beroende på scenen:

| Stil | När den används | Look |
|---|---|---|
| **A. Storybook painterly** | Scener med karaktär/känsla, hero-bilder | Akvarell + gouache, mjuka penseldrag, drömsk barnboks-look |
| **B. Flat editorial** | Infografik, jämförelser, koncept | Modern skandinavisk lärobok, pappersgrain, generös luft |
| **C. Bold playful graphic** | Spelomslag, energiska moment | Retro-arkad-poster, vibrant, lekfull |
| **D. Cinematic semi-realistic** | Foto-jämförelser, dramatiska kontraster | Painterly cinematic, mjukt ljus, mer realism |

Genomgående gemensamt: **off-white bakgrund `#FAF8F2`**, mjukt naturligt ljus, ingen hård skugga, ålder 10–12, optimistiskt och nyfiket.

## Lektions-accentfärger

| L | Tema | Färgnamn för prompten |
|---|---|---|
| L1 | Berättelsen om AI | `indigo and deep periwinkle (#6366f1)` |
| L2 | Vad är AI egentligen? | `warm amber and honey (#f59e0b)` |
| L3 | Använda AI som verktyg | `fresh emerald green (#10b981)` |
| L4 | Kritiskt granska AI | `coral rose (#f43f5e)` |
| L5 | Etik och ansvar | `sunny golden yellow (#eab308)` |
| L6 | Människa och maskin | `soft violet (#8b5cf6)` |
| L7 | Framtid och samhälle | `bright cyan teal (#06b6d4)` |

---

## Inbäddade bilder i lektionerna (14 st)

### L1.1 · Krok · `Lektion1Content.tsx:36` — Stil A (storybook)
> *Filmcollage: sex generiska sci-fi-hjälparrobotar (R2-D2/Baymax/JARVIS/Wall-E/Pokédex/Minecraft-zombie-stil)*

```
A friendly montage of six imagined sci-fi helper robots standing side by side on a soft cream stage: a small blue domed astromech, a plush white inflatable medical robot, a glowing blue holographic assistant, a sad-cute trash-cleaning robot with binocular eyes, a red pocket creature scanner, and a pixelated green zombie figure. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), indigo and deep periwinkle accents (#6366f1), gentle natural lighting, dreamy storybook mood, age 10–12 appropriate, optimistic and curious --ar 16:9 --v 8.1 --style raw
```

### L1.2 · Kärntext · `Lektion1Content.tsx:110` — Stil B (flat editorial)
> *Parallella tidslinjer — Fantasi vs Verklighet*

```
Two parallel horizontal timelines drawn as wavy ribbons crossing a light cream canvas. The upper ribbon labeled with subtle illustrated icons for fictional AI stories — a Frankenstein bolt, a glowing red camera eye, a glinting robot skull, a small lonely trash robot. The lower ribbon shows real AI milestones — a vintage typewriter, a chess board, a Go board, a chat bubble with sparkles. Flat editorial illustration with subtle paper grain, generous negative space on warm off-white background (#FAF8F2), indigo and deep periwinkle accents (#6366f1), modern Scandinavian children's textbook aesthetic, age 10–12 appropriate, no harsh shadows, clean composition --ar 3:2 --v 8.1 --style raw
```

### L1.3 · Kärntext · `Lektion1Content.tsx:193` — Stil D (cinematic)
> *Will Smith spaghetti 2023 (glitchy) vs Sora 2026 (fotorealistisk) — split panel*

```
Split panel illustration. Left side shows a melting distorted glitchy face attempting to eat noodles, drawn in muted soft colors with visible imperfections and digital artifacts. Right side shows a sharp clean almost photorealistic person eating spaghetti happily. Cinematic semi-realistic illustration with painterly detail, warm off-white background (#FAF8F2), indigo and deep periwinkle accents (#6366f1) on the thin divider line, soft natural lighting, age 10–12 appropriate, no harsh shadows --ar 16:7 --v 8.1
```

---

### L2.1 · Fall · `Lektion2Content.tsx:73` — Stil B (flat editorial) · ⚠️ varumärke
> *Amazon CV-AI bias (87% män, 13% kvinnor) — generisk funnel-illustration utan logo*

```
An editorial infographic showing a giant funnel sorting hundreds of small paper resumes. A pile of resumes from male figure silhouettes flows easily through. A smaller stack with female figure silhouettes bounces off the funnel walls. Flat editorial illustration with subtle paper grain, generous negative space on warm off-white background (#FAF8F2), warm amber and honey accents (#f59e0b), modern Scandinavian children's textbook aesthetic, age 10–12 appropriate, no brand names visible, gentle natural lighting --ar 3:2 --v 8.1 --style raw
```

### L2.2 · Kärntext · `Lektion2Content.tsx:145` — Stil B/A hybrid
> *Skala: barn med 1M-ord-stack vs gigantisk 13T-ord-torn*

```
An infographic illustration comparing two stacks of books. On the left a small child stands next to a knee-high stack. On the right a colossal tower of books stretches off the top of the frame, dwarfing the child. Whimsical scale exaggeration, soft painterly illustration with subtle paper grain, warm off-white background (#FAF8F2), warm amber and honey accents (#f59e0b) on the giant tower, modern Scandinavian children's textbook aesthetic, age 10–12 appropriate, no harsh shadows, optimistic mood --ar 16:7 --v 8.1 --style raw
```

---

### L3.1 · Kärntext · `Lektion3Content.tsx:61` — Stil B (medvetet generisk)
> *Generisk superhjälte (vag prompt 'Rita en hjälte')*

```
A generic comic-book superhero in a red cape standing in a hero pose, drawn in a simple flat editorial style. Deliberately stereotypical and bland — square jaw, mask, default proportions, no character originality. Flat editorial illustration with subtle paper grain on warm off-white background (#FAF8F2), fresh emerald green accents (#10b981) in a subtle background swirl, age 10–12 appropriate, slightly tongue-in-cheek --ar 1:1 --v 8.1 --style raw
```

### L3.2 · Kärntext · `Lektion3Content.tsx:76` — Stil A (storybook)
> *Orange katt med riddarhjälm på bokhög i biblioteksnisch*

```
An expressive orange tabby cat with a small blue knight's helmet sitting on a stack of three weathered books in a sunlit cozy library nook, holding a tiny embroidered banner, floating dust motes in warm sunlight. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), fresh emerald green accents (#10b981) on the cat's banner and book bindings, gentle warm natural lighting, dreamy storybook mood, age 10–12 appropriate, charming detailed character moment --ar 1:1 --v 8.1 --style raw
```

### L3.3 · Kärntext · `Lektion3Content.tsx:116` — Stil C (bold playful) · ⚠️ person
> *MrBeast-stil dramatisk YouTube-thumbnail-pastisch (utan riktig person)*

```
A pastiche of a dramatic YouTube thumbnail style: an illustrated young content creator with wide shocked expression, bright cartoon money bills swirling around, oversized arrow pointing at a stylized prize. Bold playful graphic illustration with vibrant accents and slight retro poster energy, warm off-white background (#FAF8F2), fresh emerald green burst accents (#10b981) behind the figure, deliberately over-the-top energetic composition, no real person likeness, age 10–12 appropriate --ar 16:9 --v 8.1 --style raw
```

---

### L4.1 · Krok · `Lektion4Content.tsx:45` — Stil D (cinematic)
> *Will Smith spaghetti vs Sora — kan återanvända L1.3 om du vill*

```
Side-by-side panel. Left shows a clearly glitchy AI-generated face with melting features attempting to eat pasta, soft and slightly unsettling. Right shows a polished almost photorealistic person enjoying spaghetti. Cinematic semi-realistic illustration with painterly detail, warm off-white background (#FAF8F2), thin coral rose divider (#f43f5e), soft natural lighting, educational tone, age 10–12 appropriate --ar 16:7 --v 8.1
```

### L4.2 · Fall · `Lektion4Content.tsx:80` — Stil B (flat editorial)
> *Domstolsillustration — 712 hallucinerade citat 2025*

```
An editorial illustration of a courtroom desk piled with legal documents. A pair of hands sort papers, several with comically obvious fake citation numbers floating up like dust. Flat editorial illustration with subtle paper grain, generous negative space on warm off-white background (#FAF8F2), coral rose accents (#f43f5e) on a large stylized number softly glowing in the upper right, modern Scandinavian children's textbook aesthetic, light slightly humorous but serious tone, age 10–12 appropriate, no harsh shadows --ar 3:2 --v 8.1 --style raw
```

---

### L5.1 · Fall · `Lektion5Content.tsx:113` — Stil B (flat editorial) · ⚠️ varumärke
> *USA-karta med 5 delstater highlightade (Roblox-stämningar, utan logo)*

```
An editorial illustration of a stylized USA map outline in soft cream tones. Five states are highlighted with sunny golden yellow — Florida, Texas, Nebraska, Tennessee, and a Los Angeles county marker. Above the map floats a generic blocky gaming platform symbol — a cube with a simple smiley face, no brand identity. Thin lines connect the highlighted states to a small gavel icon. Flat editorial illustration with subtle paper grain on warm off-white background (#FAF8F2), sunny golden yellow accents (#eab308), modern Scandinavian children's textbook aesthetic, age 10–12 appropriate, clean infographic composition --ar 3:2 --v 8.1 --style raw
```

### L5.2 · Kärntext · `Lektion5Content.tsx:176` — Stil B
> *720 miljarder gallons vatten = 18 miljoner hushåll-scale*

```
A visual scale illustration. On the left a single small house surrounded by a tiny water droplet. On the right a colossal stylized water reservoir or wave with eighteen tiny houses floating before it. Flat editorial illustration with subtle paper grain and gentle painterly water texture, warm off-white background (#FAF8F2), sunny golden yellow accents (#eab308), modern Scandinavian children's textbook aesthetic, calm but striking, age 10–12 appropriate, no harsh shadows --ar 16:7 --v 8.1 --style raw
```

---

### L6.1 · Fall · `Lektion6Content.tsx:95` — Stil B (UI-mockup)
> *Chat-mockup där AI smickrar absurt påstående*

```
An editorial illustration of a stylized chat interface window on a tablet. Inside the window a glowing speech bubble enthusiastically replies with sparkles around it, while a small thought-bubble above shows a person looking confused. Flat editorial illustration with subtle paper grain, warm off-white surroundings (#FAF8F2), soft violet accents (#8b5cf6) on the chat window border and sparkles, modern Scandinavian children's textbook aesthetic, no real product logos, age 10–12 appropriate, gentle natural lighting --ar 16:9 --v 8.1 --style raw
```

### L6.2 · Kärntext · `Lektion6Content.tsx:181` — Stil B (infografik)
> *Statistik tonåringar och AI-companions (1 av 2)*

```
An infographic showing ten stylized teen silhouettes in a row on a cream background. Six of them are connected by glowing soft lines to a small floating chat bubble emitting gentle light. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), soft violet accents (#8b5cf6) on the connecting lines and chat bubble glow, modern Scandinavian children's textbook aesthetic, calm slightly thoughtful tone, no faces visible, age 10–12 appropriate --ar 16:7 --v 8.1 --style raw
```

---

### L7.1 · Krok · `Lektion7Content.tsx:63` — Stil A/D hybrid · ⚠️ upphovsrätt
> *Passiv (Wall-E-style flytstolar) vs aktiv (Star Trek-style brygga) — utan filmreferenser*

```
Split-panel cinematic illustration. Left side: a row of people lounging in floating hover-chairs holding screens, surrounded by gentle gray haze, soft sad palette. Right side: a sleek explorer spaceship bridge with diverse silhouettes standing alert looking out at glowing stars, hopeful and active mood. Painterly cinematic illustration with watercolor and gouache texture, warm off-white background framing (#FAF8F2), bright cyan teal accents (#06b6d4) on the right-side highlights, clear visual contrast between passive and curious futures, age 10–12 appropriate --ar 16:7 --v 8.1 --style raw
```

### L7.2 · Kärntext · `Lektion7Content.tsx:102` — Stil B · ⚠️ riktiga personer
> *Nobelpristagare 2024 (Hinton/Hopfield/Hassabis/Jumper) — silhuetter, ej likhet*

```
An editorial illustration of four silhouetted scientists on a softly lit stage holding small glowing medals on ribbons. Above them floats a subtle constellation of interconnected neural network nodes. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), bright cyan teal accents (#06b6d4) on the constellation, faces in soft profile so no specific likeness, dignified and warm mood, age 10–12 appropriate, modern Scandinavian children's textbook aesthetic --ar 3:2 --v 8.1 --style raw
```

---

## Lektions-omslag (hero) — 7 st, valfritt

> Lektionsstart har idag bara en färggradient. Om du vill ha hero-bild lägger jag till en bild-slot i `LessonHero`. Alla i Stil A (storybook painterly) för en sammanhållen narrativ ton genom kursen.

### L1-hero · "Berättelsen om AI"

```
A serene panoramic illustration. A child stands at the edge of a soft cream landscape gazing at a long winding ribbon of light that stretches into the distance. Along the ribbon, gentle ghostly silhouettes of historical AI moments fade in and out — an old typewriter, a chess piece, a chat bubble, a swirl of light. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), indigo and deep periwinkle accents (#6366f1), wistful and curious mood, gentle natural lighting, age 10–12 appropriate, dreamy storybook --ar 21:9 --v 8.1 --style raw
```

### L2-hero · "Vad är AI egentligen?"

```
A wide painterly illustration of a curious child holding a magnifying glass over a transparent floating cube made of softly glowing data points and patterns. Behind the cube, faint columns of numbers and tiny pictures of cats, dogs, and faces flow like a gentle waterfall. Soft painterly illustration with watercolor texture, warm off-white background (#FAF8F2), warm amber and honey accents (#f59e0b), inquisitive cozy mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

### L3-hero · "Använda AI som verktyg"

```
A wide painterly illustration of a child confidently holding a glowing toolbox with the lid open. Floating tools emerge from it — a pencil, a paintbrush, a wrench, a tiny chat bubble — hovering in mid-air ready to be used. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), fresh emerald green accents (#10b981), empowered and playful mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

### L4-hero · "Kritiskt granska AI"

```
A wide painterly illustration of a child holding a large magnifying glass over a floating screen showing slightly off glitchy content — a slightly melting cat, a number that doesn't add up, a face with too many fingers visible at the edge. The child looks calmly focused, not alarmed. Soft painterly illustration with watercolor texture, warm off-white background (#FAF8F2), coral rose accents (#f43f5e), detective-curious mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

### L5-hero · "Etik och ansvar"

```
A wide painterly illustration of a child standing at a crossroads in a soft landscape. Two glowing paths diverge — one leading to a bright sunny meadow, the other into a dim foggy valley. The child holds a tiny balance scale. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), sunny golden yellow accents (#eab308), thoughtful contemplative mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

### L6-hero · "Människa och maskin"

```
A wide painterly illustration of a child sharing a quiet moment with a friend on a park bench in soft afternoon light. A small glowing chat-bubble-creature hovers respectfully nearby watching but not interrupting. Clear contrast between the warmth of human friendship and the polite distance of the AI. Soft painterly illustration with watercolor texture, warm off-white background (#FAF8F2), soft violet accents (#8b5cf6), tender mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

### L7-hero · "Framtid och samhälle"

```
A wide painterly illustration of a group of children standing at the foot of a partially-built scaffold structure that floats above them. They hold tools, paintbrushes, and blueprints. The scaffold is forming the rough shape of a year ahead, with glowing possibilities trailing off into the sky. Soft painterly illustration with watercolor and gouache texture, warm off-white background (#FAF8F2), bright cyan teal accents (#06b6d4), hopeful empowered mood, gentle natural lighting, age 10–12 appropriate --ar 21:9 --v 8.1 --style raw
```

---

## Spel-omslag — 8 st

> Mer varierad mix mellan Stil B (lugn lärobok) och Stil C (energisk arkad) beroende på spelets tempo.

### S1 — Mönster-fångaren (Stil C · arkad)

```
A whimsical arcade illustration of a small paddle with two compartments labeled with simple icons — a dog silhouette and a cat silhouette — catching falling shapes from above. Some shapes match, some don't. Bold playful graphic illustration with vibrant accents and slight retro arcade poster feel, warm off-white background (#FAF8F2), fresh emerald green accents (#10b981) for hit feedback, modern energy, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S2 — Nästa ord (Stil B)

```
An illustration of two thought bubbles facing each other across a soft cream background. One bubble labeled with a small child's silhouette, the other with a friendly geometric cloud shape. Both bubbles contain a partial sentence ending in a glowing missing word slot. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), warm amber accents (#f59e0b), playful competitive mood, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S3 — AI eller människa? (Stil B)

```
Two stylized text blocks side by side on a cream background. One has subtle organic imperfections — a slight smudge, a tiny doodle in the margin. The other is perfectly aligned and uniform. Above them a question mark gently floats. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), indigo accents (#6366f1), detective game feel, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S4 — Sycophancy-detektorn (Stil B)

```
A speech bubble overflowing with hearts and sparkles, beside a calmer speech bubble with a single steady checkmark. A small character stands between them weighing which is honest. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), soft violet accents (#8b5cf6), discerning thoughtful mood, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S5 — Bygg din framtid (Stil C)

```
A child stands in front of a wall covered in seven illustrated panels, each showing a different domain of life — a school, a workplace, a road, a park, friends, a voting box, a tree. The child holds up a glowing card to choose. Bold playful graphic illustration with vibrant accents, warm off-white background (#FAF8F2), bright cyan teal accents (#06b6d4), empowering mood, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S6 — Dilemma-spelet (Stil B)

```
A path branching into eight glowing trails on a soft landscape, each trail labeled with a tiny scenario icon — a test paper, a heart, a screen, a leaf, a hand, a clock, an arrow, a question mark. A child stands at the junction looking carefully at the options. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), sunny golden yellow accents (#eab308), reflective mood, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S7 — Hallucination-rally (Stil C · arkad)

```
A race-track style illustration with claims floating like obstacles. Some are clearly fake — a fish wearing glasses, a year written backward, a square wheel. Some look plausible. A timer in the corner ticks down. Bold playful graphic illustration with vibrant accents and slight retro poster energy, warm off-white background (#FAF8F2), coral rose accents (#f43f5e), fast playful detective vibe, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

### S8 — Bias-detektiven (Stil B · detektiv)

```
A detective's desk illustration with three case files spread out, each showing a different scenario — a resume sorting funnel, a doctor figure puzzle, a microphone with a soundwave. A magnifying glass rests on top. Flat editorial illustration with subtle paper grain, warm off-white background (#FAF8F2), indigo accents (#6366f1), investigative warm mood, age 10–12 appropriate --ar 16:10 --v 8.1 --style raw
```

---

## Anteckningar

- **Inga riktiga personer, varumärken eller upphovsrättsskyddade karaktärer.** Flaggade ⚠️ ovan har säkrare alternativ. För riktiga personer (Nobelpristagarna) eller faktiska varumärken (Amazon, Roblox) bör du själv hitta pressbilder eller godkända använda-fritt-versioner om du vill ha äkta vara.
- **Stil-mix är medveten.** Storybook painterly för känsla, flat editorial för infografik, bold playful för energi, cinematic för foto-jämförelser. Alla delar samma ljusa off-white-bakgrund så de hänger ihop.
- **Aspect ratios** matchar exakt vad koden förväntar sig — behåll vid omkörning.
- **När du levererar CDN-URL:erna:** namnge dem `L1.1`, `L1.2`, ..., `L7-hero`, `S1`, ..., eller fyll i `bildleverans.csv`. Då kopplar jag dem direkt till `PlaceholderImage`-platserna.
