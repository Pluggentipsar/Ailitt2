# Bildprompter — mellanstadiematerialet

Samlade Midjourney-prompter för alla bildplatser i lektionerna 1–7 + spelen. Sajten ska få ett **ljusare formspråk**, så alla prompter följer en gemensam ljus stilguide. Varje lektion har en accentfärg som vävs in.

> **När du har CDN-URL:erna**: skicka dem listade efter lektion + nummer (t.ex. "L1.2 = https://..."). Jag kopplar dem till rätt `PlaceholderImage`-platser i koden.

---

## Gemensam stilguide

Lägg detta som suffix på **varje** prompt (justera aspect-ratio per bild):

```
flat editorial illustration, soft pastel palette with subtle paper grain, generous negative space on warm off-white background (#FAF8F2), gentle natural lighting, friendly approachable mood, modern Scandinavian children's textbook aesthetic, age 10–12 appropriate, optimistic and curious, no harsh shadows, no photorealism, clean vector-like shapes with hand-drawn touches --no text words letters logos watermark --ar {AR} --v 7 --style raw
```

**Per-lektion accentfärg** — byt ut `{ACCENT}` i prompterna:

| Lektion | Tema | `{ACCENT}` |
|---|---|---|
| L1 | Berättelsen om AI | `indigo and deep periwinkle (#6366f1)` |
| L2 | Vad är AI egentligen? | `warm amber and honey (#f59e0b)` |
| L3 | Använda AI som verktyg | `fresh emerald green (#10b981)` |
| L4 | Kritiskt granska AI | `coral rose (#f43f5e)` |
| L5 | Etik och ansvar | `sunny golden yellow (#eab308)` |
| L6 | Människa och maskin | `soft violet (#8b5cf6)` |
| L7 | Framtid och samhälle | `bright cyan teal (#06b6d4)` |

---

## Bilder placerade i lektionerna (14 st)

### L1 — Berättelsen om AI · indigo

**L1.1** · Krok · `Lektion1Content.tsx:36` · `--ar 16:9`
> *Slot: filmcollage med R2-D2, Baymax, JARVIS, Wall-E, Pokédex, Minecraft-zombie*
>
> Midjourney klarar inte upphovsrättsskyddade karaktärer direkt. Promptar en **generisk hyllning** istället:

```
A friendly montage of six imagined sci-fi helper robots from children's stories, side by side on a soft cream stage: a small blue domed astromech, a plush white inflatable medical robot, a glowing blue holographic assistant, a sad-cute trash-cleaning robot with binocular eyes, a red pocket creature scanner, and a pixelated green zombie figure. Storybook illustration with {ACCENT} accents. [Style suffix]
```

**L1.2** · Kärntext · `Lektion1Content.tsx:110` · `--ar 3:2`
> *Slot: parallella tidslinjer — Fantasi vs Verklighet*

```
Two parallel horizontal timelines drawn as wavy ribbons crossing a light cream canvas. The upper ribbon labeled with subtle illustrated icons for fictional AI stories (a Frankenstein bolt, a glowing red camera eye, a glinting robot skull, a small lonely trash robot). The lower ribbon shows real AI milestones (a vintage typewriter machine, a chess board, a Go board, a chat bubble with sparkles). Soft {ACCENT} accents, hand-drawn educational infographic feel. [Style suffix]
```

**L1.3** · Kärntext · `Lektion1Content.tsx:193` · `--ar 16:7`
> *Slot: Will Smith spaghetti 2023 vs Sora 2026 — utvecklingen på 3 år*

```
Split panel illustration. Left side labeled "2023": a melting, distorted, glitchy face attempting to eat noodles, drawn in muted soft colors with visible imperfections. Right side labeled "2026": a sharp, clean, photorealistic-style illustration of a person eating spaghetti happily. Educational comparison, {ACCENT} accent on a thin divider line. [Style suffix]
```

---

### L2 — Vad är AI egentligen? · amber

**L2.1** · Fall · `Lektion2Content.tsx:73` · `--ar 3:2`
> *Slot: Amazon CV-AI (87% män, 13% kvinnor)*
>
> ⚠️ **Skippa Amazons logotyp** — gör en generisk illustration av problemet:

```
An editorial infographic showing a giant funnel sorting hundreds of small paper resumes. A pile of resumes from male figures flows easily through; a smaller stack with female figures bounces off the funnel walls. Subtle bar chart visible to the side showing "87% / 13%". Warm {ACCENT} highlights, gentle paper-cutout aesthetic, no brand names visible. [Style suffix]
```

**L2.2** · Kärntext · `Lektion2Content.tsx:145` · `--ar 16:7`
> *Slot: skala 1 milj ord (elev) vs 13 biljoner ord (AI)*

```
An infographic comparing two stacks of books. On the left, a small child stands next to a knee-high stack labeled with a tiny "1M". On the right, a colossal tower of books stretches off the top of the frame, dwarfing the child, labeled "13T". Whimsical scale exaggeration, soft {ACCENT} on the giant tower, light cream background. [Style suffix]
```

---

### L3 — Använda AI som verktyg · emerald

**L3.1** · Kärntext · `Lektion3Content.tsx:61` · `--ar 1:1`
> *Slot: generisk superhjälte (vag prompt "Rita en hjälte")*

```
A generic comic-book superhero in a red cape standing in a hero pose, drawn in a simple flat editorial style on a soft cream background. Deliberately stereotypical and bland — square jaw, mask, generic costume. {ACCENT} subtle background swirl. [Style suffix]
```

**L3.2** · Kärntext · `Lektion3Content.tsx:76` · `--ar 1:1`
> *Slot: orange katt med exakt prompt-detaljer matchade*

```
An expressive orange tabby cat with a small blue knight's helmet sitting on a stack of three weathered books, holding a tiny embroidered banner that reads no text, in a sunlit cozy library nook with floating dust motes. Detailed and specific, warm {ACCENT} light, storybook illustration style. [Style suffix]
```

**L3.3** · Kärntext · `Lektion3Content.tsx:116` · `--ar 16:9`
> *Slot: MrBeast-thumbnail-stil (dramatisk YouTube-thumbnail-känsla)*
>
> ⚠️ **Skippa MrBeast direkt** — generisk dramatic-thumbnail-illustration:

```
A pastiche of a dramatic YouTube thumbnail style: an illustrated young content creator with wide shocked expression, bright cartoon money bills swirling around, oversized arrow pointing at a stylized prize, bold {ACCENT} accent burst behind the figure, deliberately over-the-top energetic composition. No real person likeness. [Style suffix]
```

---

### L4 — Kritiskt granska AI · rose

**L4.1** · Krok · `Lektion4Content.tsx:45` · `--ar 16:7`
> *Slot: Will Smith spaghetti vs Sora (samma motiv som L1.3 men annan vinkel)*
>
> Återanvänd gärna L1.3-bilden — eller, om du vill ha unik bild, variant:

```
Side-by-side panel. Left labeled "2023" shows a clearly glitchy AI-generated face with melting features attempting to eat pasta, soft and slightly unsettling. Right labeled "2026" shows a polished, almost photorealistic illustration of a person enjoying spaghetti. Thin {ACCENT} divider down the middle. Educational tone. [Style suffix]
```

**L4.2** · Fall · `Lektion4Content.tsx:80` · `--ar 3:2`
> *Slot: domstolsillustration — 712 hallucinerade citat 2025*

```
An editorial illustration of a courtroom desk piled with legal documents. A pair of hands sorting papers, several with comically obvious fake citation numbers floating up like dust. A large stylized "712" number softly glowing in {ACCENT} in the upper right corner. Light, slightly humorous but serious tone. [Style suffix]
```

---

### L5 — Etik och ansvar · yellow

**L5.1** · Fall · `Lektion5Content.tsx:113` · `--ar 3:2`
> *Slot: Roblox + USA-delstater som stämt*
>
> ⚠️ **Skippa Roblox-logotyp** — generisk gaming-platform-illustration:

```
An editorial illustration of a stylized USA map outline in soft cream tones with five states highlighted in {ACCENT} (Florida, Texas, Nebraska, Tennessee, and a Los Angeles county marker). Above the map floats a generic blocky gaming platform symbol (cube with smiley face). Thin lines connect highlighted states to a small gavel icon. Clean infographic style. [Style suffix]
```

**L5.2** · Kärntext · `Lektion5Content.tsx:176` · `--ar 16:7`
> *Slot: 720 miljarder gallons vatten = 18 milj hushåll*

```
A visual scale illustration: on the left, a single small house surrounded by a tiny water droplet. On the right, a colossal stylized water reservoir or wave with eighteen tiny houses floating before it. Large numerical "720B" gently glowing in {ACCENT}. Educational infographic, calm but striking. [Style suffix]
```

---

### L6 — Människa och maskin · violet

**L6.1** · Fall · `Lektion6Content.tsx:95` · `--ar 16:9`
> *Slot: ChatGPT sycophancy-skärmdump-mockup*

```
An editorial illustration of a stylized chat interface window on a tablet. Inside the window, a glowing speech bubble enthusiastically replies "What a wonderful idea!" with sparkles around it, while a small thought-bubble above shows a person looking confused. Subtle {ACCENT} accent on the chat window border. Light cream surroundings, no real product logos. [Style suffix]
```

**L6.2** · Kärntext · `Lektion6Content.tsx:181` · `--ar 16:7`
> *Slot: statistik om tonåringar och AI-companions*

```
An infographic showing ten stylized teen silhouettes in a row on a cream background. Six of them are connected by glowing soft lines to a small floating chat bubble emitting gentle {ACCENT} light. A large "1 in 2" number sits on the left. Calm, slightly thoughtful tone, no faces visible. [Style suffix]
```

---

### L7 — Framtid och samhälle · cyan

**L7.1** · Krok · `Lektion7Content.tsx:63` · `--ar 16:7`
> *Slot: Wall-E vs Star Trek — passiv konsumtion vs aktiv utforskning*
>
> ⚠️ **Skippa exakta filmreferenser** — visuell metafor:

```
Split-panel illustration. Left side: a row of people lounging in floating hover-chairs, holding screens, surrounded by gentle gray haze, soft sad palette. Right side: a sleek explorer spaceship bridge with diverse silhouettes standing alert, looking out at glowing stars, bright {ACCENT} highlights, hopeful and active mood. Clear visual contrast between passive and curious futures. [Style suffix]
```

**L7.2** · Kärntext · `Lektion7Content.tsx:102` · `--ar 3:2`
> *Slot: Nobelpristagarna 2024 (Hinton, Hopfield, Hassabis, Jumper)*
>
> ⚠️ **Midjourney gör inte riktiga personer pålitligt.** Två alternativ:
> 1. Använd pressbilden från Nobel-prisutdelningen (sök "Nobel Prize 2024 physics chemistry photo")
> 2. Generisk illustration:

```
An editorial illustration of four silhouetted scientists on a softly lit stage holding small glowing medals on ribbons. Above them floats a subtle constellation of interconnected neural network nodes in {ACCENT}. Dignified and warm, faces in soft profile. No specific likenesses. [Style suffix]
```

---

## Lektions-omslag (hero) — 7 st, valfritt

Lektionsstart-headern har idag bara en färggradient. Jag kan lägga till en bild-slot om du vill ha hero-bild. Föreslagna prompter:

**L1-hero** · "Berättelsen om AI" · `--ar 21:9`
```
A serene panoramic illustration: a child stands at the edge of a soft cream landscape, gazing at a long winding ribbon of light that stretches into the distance. Along the ribbon, gentle ghostly silhouettes of historical AI moments fade in and out — an old typewriter, a chess piece, a chat bubble, a swirl of light. Indigo and deep periwinkle accents (#6366f1), wistful and curious mood. [Style suffix]
```

**L2-hero** · "Vad är AI egentligen?" · `--ar 21:9`
```
A wide illustration of a curious child holding a magnifying glass over a transparent floating cube made of softly glowing data points and patterns. Behind the cube, faint columns of numbers and tiny pictures of cats, dogs, faces flow like a gentle waterfall. Warm amber and honey accents (#f59e0b), inquisitive cozy mood. [Style suffix]
```

**L3-hero** · "Använda AI som verktyg" · `--ar 21:9`
```
A child confidently holds a glowing toolbox, lid open, from which floating tools emerge — a pencil, a paintbrush, a wrench, a tiny chat bubble — all hovering in mid-air ready to be used. Fresh emerald green accents (#10b981), empowered playful mood. [Style suffix]
```

**L4-hero** · "Kritiskt granska AI" · `--ar 21:9`
```
A child holds a large magnifying glass over a floating screen showing slightly off, glitchy content — a slightly melting cat, a number that doesn't add up, a face with one too many fingers visible at the edge. The child looks calmly focused, not alarmed. Coral rose accents (#f43f5e), detective-curious mood. [Style suffix]
```

**L5-hero** · "Etik och ansvar" · `--ar 21:9`
```
A child stands at a crossroads in a soft landscape, two glowing paths diverging — one leading to a bright sunny meadow, the other into a dim foggy valley. The child holds a tiny balance scale. Sunny golden yellow accents (#eab308), thoughtful contemplative mood. [Style suffix]
```

**L6-hero** · "Människa och maskin" · `--ar 21:9`
```
A child shares a quiet moment with a friend on a park bench in soft afternoon light, while a small glowing chat-bubble-creature hovers respectfully nearby, watching. Clear contrast between the warmth of the human friendship and the polite distance of the AI. Soft violet accents (#8b5cf6), tender mood. [Style suffix]
```

**L7-hero** · "Framtid och samhälle" · `--ar 21:9`
```
A group of children stand at the foot of a partially-built scaffold structure that floats above them, holding tools, paintbrushes, and blueprints. The scaffold is forming the rough shape of the year 2040 above them, with glowing possibilities trailing off into the sky. Bright cyan teal accents (#06b6d4), hopeful empowered mood. [Style suffix]
```

---

## Spel-omslag — 8 st

Spelen på `/mellanstadiet/spel` har idag tunna kortvyer. Föreslagna omslagsbilder, alla `--ar 16:10`:

**S1 — Mönster-fångaren**
```
A whimsical arcade illustration: a small paddle with two compartments labeled with simple icons (a dog silhouette and a cat silhouette) catching falling shapes from above. Some shapes match, some don't. Playful retro-arcade feel with soft pastel palette, fresh emerald green accents (#10b981) for hit feedback. [Style suffix] --ar 16:10
```

**S2 — Nästa ord**
```
Illustration of two thought bubbles facing each other, one labeled with a small child's silhouette, the other with a friendly geometric "AI" cloud. Both bubbles contain a partial sentence with a glowing missing word slot. Warm amber accents (#f59e0b), playful competitive mood. [Style suffix] --ar 16:10
```

**S3 — AI eller människa?**
```
Two stylized text blocks side by side on a cream background. One has subtle organic imperfections (a slight smudge, a tiny doodle), the other is perfectly aligned and uniform. Above them, a question mark gently floats. Indigo accents (#6366f1), detective game feel. [Style suffix] --ar 16:10
```

**S4 — Sycophancy-detektorn**
```
A speech bubble overflowing with hearts and "great idea!" sparkles, beside a calmer speech bubble with a single steady checkmark. A small character stands between them weighing which is honest. Soft violet accents (#8b5cf6), discerning mood. [Style suffix] --ar 16:10
```

**S5 — Bygg din framtid**
```
A child standing in front of a wall covered in seven illustrated panels, each showing a different domain (a school, a workplace, a road, a park, friends, a voting box, a tree). The child holds up a glowing card to choose. Bright cyan teal accents (#06b6d4), empowering mood. [Style suffix] --ar 16:10
```

**S6 — Dilemma-spelet**
```
A path branching into eight glowing trails on a soft landscape, each trail labeled with a tiny scenario icon (a test paper, a heart, a screen, a leaf). A child stands at the junction looking carefully at the options. Sunny golden yellow accents (#eab308), reflective mood. [Style suffix] --ar 16:10
```

**S7 — Hallucination-rally**
```
A race-track style illustration with claims floating like obstacles — some clearly fake (a fish wearing glasses, a year written wrong), some plausible. A timer in the corner ticks down with coral rose accents (#f43f5e). Fast playful detective vibe. [Style suffix] --ar 16:10
```

**S8 — Bias-detektiven**
```
A detective's desk illustration with three case files spread out, each showing a different scenario (a resume sorting funnel, a doctor figure puzzle, a microphone with a soundwave). A magnifying glass rests on top. Indigo accents (#6366f1), investigative warm mood. [Style suffix] --ar 16:10
```

---

## Anteckningar

- **Inga riktiga personer, varumärken eller upphovsrättsskyddade karaktärer.** Vid varje sådan plats finns en flaggning ⚠️ ovan med ett säkrare alternativ. För riktiga personer (Nobelpristagarna) eller faktiska varumärken (Amazon-logga, Roblox-logga) bör du själv hitta pressbilder eller godkända använda-fritt-versioner.
- **Aspect ratios** matchar exakt vad koden förväntar sig — om Midjourney genererar något du inte gillar, behåll förhållandet vid omkörning.
- **Konsistens:** alla prompter slutar med samma stilsuffix → ger sammanhängande visuell ton.
- **När du levererar CDN-URL:erna:** namnge dem `L1.1`, `L1.2`, ..., `L7-hero`, `S1`, ..., så mappar jag dem i koden snabbt.
