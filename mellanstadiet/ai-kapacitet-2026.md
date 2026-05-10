# AI:s kapacitet 2026 — central referens för kursen

> **Bakgrund:** Joel påpekade att kursen riskerar att beskriva AI utifrån 2022-2023-nivå (ChatGPT-3.5, Claude 3.5) snarare än vad tekniken faktiskt kan idag (våren 2026). Den här filen samlar aktuell kapacitet — som referensgrund för lektionernas texter.
>
> **Princip:** Inte spekulera. Inte skrämma. Inte hype. **Beskriva vad som faktiskt har mätts** + introducera moderna begrepp åldersanpassat.
>
> **Datum:** 3 maj 2026
> **Uppdateringskadens:** Bör uppdateras minst varje termin (AI-utveckling går fort).

---

## Den centrala punkten

> *AI-system 2026 är inte samma teknik som ChatGPT-3.5 från 2022. De kan göra saker som verkade omöjliga 3-4 år sedan. Men de gör det fortfarande genom mönsterigenkänning — inte genom att tänka.*

För eleverna: AI är *inte* magisk, *inte* tänkande — men *betydligt* kraftfullare än 2022. Den centrala metoden är fortfarande mönster i data. Det som ändrats är **skala**, **harness** (verktyg runt AI), och **kapaciteten att hantera långa uppgifter**.

---

## Två nyckel-benchmarks att känna till

### 1. METR Time Horizon (2025-2026)

**Vad mäts:** Hur långa uppgifter (mätt i minuter/timmar/dagar för en människa) kan AI-system utföra autonomt med 50% framgång?

**Resultat:**
- **2026 januari:** Claude 3.7 Sonnet har 50% framgångsrate på uppgifter som tar människor cirka **50 minuter**
- **Trend (sedan 2019):** Tidshorisonten **fördubblas var 7:e månad** — exponentiell tillväxt
- **Idag:** AI-agenter kan autonomt utföra kodningsuppgifter som tar människor **över 14 timmar**
- **Projektion:** Om trenden fortsätter — *veckolånga* uppgifter inom 2-4 år, *månadslånga* inom 5 år

**Pedagogisk poäng för åk 4-6:**

> *"Forskare på METR har mätt: AI:s förmåga att lösa långa uppgifter blir dubbelt så bra ungefär varje halvår. Det är som när din lillebror plötsligt blivit mycket bättre på att läsa — fast snabbare. Vi vet inte om trenden fortsätter."*

**Källor:**
- [METR — Measuring AI Ability to Complete Long Tasks (mars 2025)](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
- [METR — Time Horizon 1.1 Update (januari 2026)](https://metr.org/blog/2026-1-29-time-horizon-1-1/)
- [Epoch AI — METR Time Horizons benchmark](https://epoch.ai/benchmarks/metr-time-horizons)
- [arXiv 2503.14499](https://arxiv.org/html/2503.14499v1)

---

### 2. GDPval (OpenAI, 2025-2026)

**Vad mäts:** Hur väl klarar AI-system *riktiga arbetsuppgifter* från 44 yrken i 9 ekonomiska sektorer (sammanlagt $3 biljoner i USA-ekonomi)?

**Resultat:**
- **GPT-5.2 Thinking** presterar **vid eller över** mänsklig expertnivå på **70.9%** av jämförelserna
- **Claude Opus 4.1** är bäst på estetik (dokumentlayout, slides)
- **GPT-5** är bäst på noggrannhet (faktakontroll, domänspecifik kunskap)
- **Hastighet och kostnad:** AI är **~100× snabbare och billigare** än mänsklig expert

**Vad som testats:** juridiska brief, ingenjörsritningar, kundtjänst-konversationer, vårdplaner, etc. — *verkliga arbetsprodukter*.

**Pedagogisk poäng för åk 4-6:**

> *"OpenAI har testat AI mot riktiga jobb — som advokater, sjuksköterskor, ingenjörer. På majoriteten av uppgifterna är AI nu **lika bra eller bättre än experter**. Men: en människa måste fortfarande kontrollera. AI gör fortfarande misstag."*

**Källor:**
- [OpenAI — GDPval (september 2025)](https://openai.com/index/gdpval/)
- [arXiv 2510.04374](https://arxiv.org/abs/2510.04374)
- [Axios — OpenAI's new GDPval benchmark (sept 2025)](https://www.axios.com/2025/09/25/chatgpt-gdp-val-ai-study)
- [Marketing AI Institute — GDPval explained](https://www.marketingaiinstitute.com/blog/openai-gdpval)

---

## Nyckelbegrepp för 2026 — åldersanpassat

### AI-system (inte "en AI")

**Vad det är:** Den korrekta benämningen. Inte "en AI" (som "en hund"). AI är ett *fält* eller *teknik* — inte en räknebar sak.

**För åk 4-6:**

> *"Det heter ett AI-system, inte 'en AI'. Som att man säger 'en bil' men 'en bilteknik'. AI är tekniken. Systemet är det specifika som du använder."*

### AI-agent

**Vad det är:** Ett AI-system som *kan utföra uppgifter*, inte bara svara på frågor. En chattbot svarar. En agent gör saker — kör kod, skickar mejl, navigerar webben, klickar på knappar.

**För åk 4-6:**

> *"En vanlig chattbot är som någon du frågar saker. En AI-agent är som någon du ger ett uppdrag. 'Boka en biljett åt mig' — den kan göra det självt. Skillnaden är stor."*

**Verkliga exempel:**
- **Claude Code** — kör i din terminal, läser dina filer, ändrar kod, kör tester
- **Codex (OpenAI)** — molnbaserad, kör i sandbox, returnerar resultat
- **GitHub Agent HQ** — flera agenter samarbetar
- **Computer Use** (Anthropic, sedan 2024) — AI som kan *klicka på saker* i en webbläsare

### Harness

**Vad det är:** "Selen" som omger AI-modellen. Modellen är hjärnan — harness är armar, ben, ögon. Utan harness kan AI bara prata. Med harness kan AI *göra*.

**För åk 4-6:**

> *"Tänk på AI som en hjärna i en burk. För att kunna göra något i världen behöver hjärnan kropp. Den kroppen heter 'harness' — det är verktygen som AI får använda: kan se filer, kan skriva kod, kan klicka på saker. Mer harness = mer som AI kan göra."*

### Multimodal

**Vad det är:** Ett AI-system som kan hantera *flera* typer av input/output samtidigt — text, bild, ljud, video.

**För åk 4-6:**

> *"Förr hade vi en AI för text, en för bild, en för ljud. Idag har vi AI som klarar allt — det heter multimodal. Den kan se en bild, höra ditt ljud, läsa din text, och svara med vad du vill ha tillbaka."*

### Tool use / Computer use

**Vad det är:** AI som kan använda externa verktyg (sökmotor, kalkylator, fil-system) eller styra en dator (klicka, scrolla, skriva).

**För åk 4-6:**

> *"AI som kan 'tooluse' kan be om hjälp av andra program. AI som har 'computer use' kan klicka på saker som du. Det är helt nytt — funnits sedan 2024."*

---

## AI-modaliteter 2026 — vad som kan göras

### Text (LLM = Large Language Model)

**Aktuella system:** Claude Opus 4.7, GPT-5.3, Gemini 3, Llama 4

**Kapacitet:**
- Skriver, översätter, sammanfattar
- Programmerar (kan lösa medel-svår kod på första försöket)
- Resoneraf om matematik och vetenskap (på universitetsnivå för enklare problem)
- Hanterar miljontals ord context (= komplett bok)

**Vad det fortfarande inte kan:** vara säker på fakta utan att hallucinera

### Bild

**Aktuella system:** DALL-E 4, Midjourney 8, Stable Diffusion 4, Adobe Firefly, Flux

**Kapacitet:**
- Fotorealistiska bilder från text
- Konstnärliga stilar (tusentals)
- Editing av befintliga bilder ("ta bort personen i bakgrunden")
- Bildanalys (vad finns i en bild)

**Vad det fortfarande inte kan:** händer rätt alltid, exakt text i bilder

### Video

**Aktuella system:** Veo 4 (Google), Kling 3.0 (Kuaishou), Runway Gen-4, Pika 2

**Kapacitet (våren 2026):**
- 4K 60fps videor från text
- Synkat ljud (dialog, sound effects, ambient)
- Karaktärs-konsistens över flera scener
- Multi-shot storytelling
- Logisk fysik och rörelse

**Vad har hänt:** OpenAI:s **Sora-app stängdes april 2026** efter offentlig backlash mot deepfakes. Andra system är fortfarande aktiva.

**Vad det fortfarande inte kan:** långa filmer (över ~1 minut), helt oprecis kontroll

### Ljud / Musik

**Aktuella system:** Suno 4, Udio 2, ElevenLabs, Stable Audio

**Kapacitet:**
- Hela låtar med vokaler från textprompts
- Realistiska röster (text-till-tal, även röst-kloning)
- Ambient sound, sound effects
- Musikomvandling (låt → annan stil)

### Kod

**Aktuella system:** Claude Code, Codex, Cursor, Copilot, Windsurf

**Kapacitet:**
- Skriver hela funktioner, debugar, omfaktorerar
- Kör i terminal, läser filsystem, kör tester
- *Agentic* — gör flera steg autonomt
- Förstår kontext över hela kodbaser

**Detta är där AI är *mest* kapabelt 2026.** METR Time Horizon mäter just kodningsuppgifter.

### Vetenskap / forskning

**Aktuella system:** AlphaFold 3, AlphaGenome, AlphaProteo, Aurora

**Kapacitet:**
- Proteinveckning (Nobelpris 2024)
- DNA-sekvens-analys
- Klimatmodellering 25× snabbare
- Antikropps-design

---

## Hur vi pratar om kapacitet i kursen — fyra principer

### 1. Beskriv *mätbart*, inte spekulativt

❌ "AI kommer snart vara smartare än oss"
✅ "AI klarar idag uppgifter som tar 50 minuter för en människa"

### 2. Använd *aktuella* exempel

❌ "ChatGPT-3.5 är en chattbot"
✅ "GPT-5.3 och Claude Opus 4.7 är dagens generation. Sedan 2022 har det fördubblats sex gånger."

### 3. Visa *bredden* — inte bara chattbottar

❌ "AI kan svara på frågor"
✅ "Det finns olika typer: text-AI, bild-AI, video-AI, kod-AI, agenter. De gör olika saker."

### 4. Hantera trender *försiktigt*

❌ "Om 5 år kan AI göra allt"
✅ "Om en trend som mätts senaste 6 åren fortsätter, kan AI om 2-4 år göra uppgifter som tar veckor. Vi vet inte om trenden fortsätter."

---

## Praktiska tillägg per lektion

### L1 (Berättelsen om AI)

**Lägg till** i tidslinjen:
- 2024: GPT-4o, Claude 3.5 Sonnet, **Computer Use** (AI som kan klicka)
- 2024: Nobelpriset till AI (Hinton, Hassabis m.fl.)
- 2025: GPT-5, Claude Opus 4, **METR mäter exponentiell kapacitetsökning**
- 2025: Sora lanseras (september)
- 2025: GDPval visar AI på expert-nivå
- 2026 januari: Claude 3.7 Sonnet — 50-minuters uppgifter
- 2026 februari: AGI-debatten — säkerhetsforskare lämnar
- 2026 mars-april: Sora-appen stängs
- 2026 maj: GPT-5.2 Thinking presterar 70.9% vid eller över expert

**Lägg till** i kärntext:
- Tre kategorier: chattbottar, agenter, multimodala system
- "AI är inte längre bara en chatt — det är ett *fält* med många typer"

### L3 (Använda AI som verktyg)

**Lägg till** efter "Olika AI för olika saker":

> *"En *agent* är något nytt. Det är AI som kan **göra** saker, inte bara svara. Claude Code är ett exempel — du säger 'fixa felet i mitt kodprojekt' och den läser dina filer, ändrar koden, kör testerna. Det är inte science fiction. Det fungerar idag, 2026."*

**Lägg till** verktyg-tabellen:
- **Claude Code / Codex** — kodningsagenter
- **Computer Use** — AI som klickar på saker

### L7 (Framtid och samhälle)

**Lägg till** i "Vad AI redan har gjort":

> *"Forskare på METR mäter AI:s förmåga att göra långa uppgifter. Resultatet: kapaciteten dubblas var 7:e månad. 2019 klarade AI uppgifter på sekunder. 2026 klarar AI uppgifter på 50 minuter — autonomt. Om trenden fortsätter (vi vet inte om den gör det) kommer AI snart kunna göra uppgifter som tar veckor."*

> *"OpenAI:s GDPval-test visar att AI 2026 presterar **vid eller över** mänsklig expert-nivå på 70% av riktiga arbetsuppgifter. Inte alla. Men många."*

---

## Begrepp att lägga till i begreppsbanker

| Begrepp | Lektion | Förklaring åk 4-6 |
|---------|---------|-------------------|
| **AI-system** | L1 | "Det specifika du använder, t.ex. ChatGPT — inte 'en AI'" |
| **AI-agent** | L3 | "AI som kan **göra** saker, inte bara svara på frågor" |
| **Harness** | L3 | "Verktygen runt AI — armar och ögon, så att den kan agera" |
| **Multimodal** | L1, L3 | "AI som hanterar flera typer: text, bild, ljud, video" |
| **Computer Use** | L3 | "AI som kan klicka på saker och styra en dator" |
| **Benchmark** | L7 | "Mätning av hur bra AI är på olika uppgifter" |
| **METR Time Horizon** | L7 | "Mäter hur långa uppgifter AI kan göra ensam" |
| **GDPval** | L7 | "OpenAI:s test mot riktiga jobbuppgifter" |
| **LLM** | L2 | "Stor språkmodell — typ av AI-system tränad på text" |

---

## Hur denna fil används

1. **Läs den först** — som lärare, innan du börjar kursen
2. **Hänvisa till den** i lärartexterna när du undervisar
3. **Uppdatera den varje termin** — fakta åldras snabbt

Även om elevtexterna inte ändras varje termin, kan denna fil hjälpa läraren *modernisera språket* när hen pratar i klassrummet.

---

## Att vara försiktig med

### Inte spekulera

Vi vet inte om METR-trenden fortsätter. Vi vet inte när/om AGI kommer. Vi vet inte vad som händer 2030.

**Säg:** "Vi vet inte. Trenden visar X. Vad tror du?"

### Inte skrämma

AGI-debatten är pedagogiskt känslig. Visa att forskare *är delade* — vissa oroliga, vissa optimistiska. Det är *därför* eleven måste förstå.

### Inte hype

AI är imponerande. Men det är inte magi. Det är fortfarande mönsterigenkänning + harness — bara mycket större skala.

### Modellera osäkerhet

> *"Det här är vad vi vet just nu, maj 2026. Det kan ha förändrats när du läser det här. Det är så snabbt det går."*

---

## Källor

### Aktuella benchmarks
- [METR Time Horizons benchmark](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
- [METR Time Horizon 1.1 (januari 2026)](https://metr.org/blog/2026-1-29-time-horizon-1-1/)
- [Epoch AI — METR Time Horizons](https://epoch.ai/benchmarks/metr-time-horizons)
- [OpenAI GDPval](https://openai.com/index/gdpval/)
- [GDPval research paper (arXiv)](https://arxiv.org/abs/2510.04374)
- [Stanford HAI 2026 predictions](https://hai.stanford.edu/news/stanford-ai-experts-predict-what-will-happen-in-2026)

### Agenter och harness
- [Anthropic Claude Code](https://www.anthropic.com/product/claude-code)
- [Codex vs Claude Code Comparison 2026](https://www.mindstudio.ai/blog/codex-vs-claude-code-2026)
- [GitHub Agent HQ](https://github.blog/news-insights/company-news/pick-your-agent-use-claude-and-codex-on-agent-hq/)
- [Long-Running AI Agents 2026](https://zylos.ai/research/2026-01-16-long-running-ai-agents)

### Multimodala system
- [State of AI Video Generation Feb 2026](https://medium.com/@cliprise/the-state-of-ai-video-generation-in-february-2026-every-major-model-analyzed-6dbfedbe3a5c)
- [Multimodal AI Trends 2026](https://www.ai.cc/blogs/multimodal-ai-generative-video-trends-2026/)
- [Best AI Video Models 2026](https://www.atlascloud.ai/blog/guides/best-ai-video-generation-models-2026)
- [Veo 4 Guide](https://resource.digen.ai/veo-4-video-generator-guide-2026/)

### Övrigt
- [Sora alternatives after shutdown 2026](https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/)
- [Stanford AI Index Report 2025/2026](https://hai.stanford.edu/ai-index/)
