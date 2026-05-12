import { MellanstadietLesson } from "@/lib/mellanstadiet-data";
import { Sektion } from "@/components/mellanstadiet/Sektion";
import { Citat } from "@/components/mellanstadiet/Citat";
import { Begrepp } from "@/components/mellanstadiet/Begrepp";
import { Quiz } from "@/components/mellanstadiet/Quiz";
import { BegreppsBank } from "@/components/mellanstadiet/BegreppsBank";
import { SpelCallout } from "@/components/mellanstadiet/SpelCallout";
import { PlaceholderImage } from "@/components/mellanstadiet/PlaceholderImage";
import { MELLANSTADIET_IMAGES } from "@/lib/mellanstadiet-images";
import { ReflectionPrompt } from "@/components/mellanstadiet/ReflectionPrompt";
import { PravaMedAI } from "@/components/mellanstadiet/PravaMedAI";
import { DiskutteraBlock } from "@/components/mellanstadiet/DiskutteraBlock";
import { SammanfattningsQuiz } from "@/components/mellanstadiet/SammanfattningsQuiz";
import { Tankartrappan } from "@/components/mellanstadiet/Tankartrappan";
import { PromptLabbet } from "@/components/mellanstadiet/PromptLabbet";

export function Lektion3Content({ lesson }: { lesson: MellanstadietLesson }) {
  return (
    <>
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Citat accentHex={lesson.accentHex}>{lesson.kernpastaende}</Citat>
        </div>
      </section>

      {/* === STEG A: KROK === */}
      <Sektion
        id="krok"
        step="A"
        title="Två promptar — samma AI"
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="Vad är skillnaden mellan att söka på Google och att prompta en AI?"
      >
        <p>
          Du kanske tänker: &quot;Båda är när jag skriver något i ett sökfält
          och får ett svar.&quot;
        </p>
        <p>Nästan rätt. Men inte riktigt.</p>
        <p>
          <strong>Google hittar saker som redan finns.</strong> När du söker
          &quot;katter med solglasögon&quot; får du listor med webbsidor som
          någon annan har gjort.
        </p>
        <p>
          <strong>AI skapar saker som inte fanns.</strong> När du skriver till
          ChatGPT eller bild-AI:n: &quot;Rita en katt med solglasögon&quot; —
          då gör den en helt ny bild. Den fanns inte innan du frågade.
        </p>
        <p>
          Det betyder att <strong>dina ord är instruktioner</strong>, inte
          sökord. Du beställer något — du letar inte efter det.
        </p>

        <h3>Två promptar — samma bild-AI</h3>
        <p>Titta på dessa två:</p>

        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-5">
            <div className="ms-mono mb-2 text-[#94a3b8]">PROMPT 1 · VAG</div>
            <p className="font-mono text-[#e6edf7]">&ldquo;Rita en hjälte&rdquo;</p>
            <PlaceholderImage
              src={MELLANSTADIET_IMAGES["L3.1"]}
              caption="Generisk superhjälte med kappa — vad AI gissar att 'hjälte' är"
              hint="Joel: en standard-superhjälte-bild"
              aspect="1/1"
            />
          </div>
          <div className="rounded-lg border border-[#243248] bg-[#1a2235] p-5">
            <div className="ms-mono mb-2 text-[#94a3b8]">
              PROMPT 2 · SPECIFIK
            </div>
            <p className="font-mono text-sm text-[#e6edf7]">
              &ldquo;Rita en orange katt med blå mantel, gröna ögon,
              solglasögon, sittande på ett hustak vid solnedgång, tecknad
              stil&rdquo;
            </p>
            <PlaceholderImage
              src={MELLANSTADIET_IMAGES["L3.2"]}
              caption="Orange katt med exakt allt som promptet beskriver"
              hint="Joel: en specifik bild som matchar prompten exakt"
              aspect="1/1"
            />
          </div>
        </div>

        <Citat accentHex={lesson.accentHex}>
          En tydligare prompt = mer kontroll.
        </Citat>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="När använde du senast AI? Var din prompt vag eller specifik?"
          followups={[
            "Skrev du bara några ord, eller en hel mening?",
            "Vad fick du tillbaka — något användbart eller något generiskt?",
            "Skulle du formulera om prompten nu?",
          ]}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Hur proffsen jobbar"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>MrBeast och hans tumnaglar</h3>
        <p>
          <strong>MrBeast</strong> är världens största YouTuber. Han har över
          300 miljoner prenumeranter. Hans team kan jobba <em>flera veckor</em>{" "}
          på en enda thumbnail (den lilla bilden som visas innan du klickar på
          en video).
        </p>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L3.3"]}
          caption="MrBeast-thumbnail med dramatiskt uttryck, pengar i bakgrunden, lysande färger"
          hint="Joel: skärmdump eller licensierad bild av en MrBeast-thumbnail"
          aspect="16/9"
        />

        <p>
          När de använder AI för att hjälpa till med ideer, skriver de prompter
          som är <strong>en hel sida långa</strong>. De skriver inte &quot;rita
          en cool bild&quot;. De skriver:
        </p>

        <blockquote className="my-6 rounded-lg border-l-4 border-[#fcd34d] bg-[#1a2235] p-5 font-mono text-sm leading-relaxed text-[#e6edf7]">
          &ldquo;En thumbnail för YouTube. Mr Beast i mitten med ett uttryck av
          total chock. Bakom honom en exploderande pengakast med dollarsedlar
          som flyger. Ljusstark gul bakgrund med röda accenter. Texten &apos;I
          GAVE AWAY $1,000,000&apos; i stor svart text till höger. Ansikte i
          fokus, scharp och detaljrik. Stil: hyper-realistisk men med mättade
          färger som drar uppmärksamhet på mobilskärmar.&rdquo;
        </blockquote>

        <p>
          Det är prompt-arbete på <strong>proffsnivå</strong>.
        </p>

        <h3>Pixar och AI-experimentet</h3>
        <p>
          <strong>Pixar</strong> — som gjort Toy Story, Wall-E och Coco —
          testar också AI. De använder det inte för att <em>ersätta</em> sina
          animatörer, utan för att hjälpa dem testa idéer snabbt. De säger: en
          bra prompt kan spara dagar. En dålig prompt ger resultat de inte kan
          använda.
        </p>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Tror du proffsen alltid får en bra bild på första försöket?"
          prompts={[
            "MrBeasts team testar 20+ versioner av en thumbnail. Varför?",
            "Vad säger det om hur AI fungerar?",
            "Är 'iteration' ett rimligt sätt att jobba — eller ineffektivt?",
          ]}
        />
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="De fem byggblocken + Tänkartrappan"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>De fem byggblocken</h3>
        <p>
          En bra prompt har oftast fem delar. Tänk på dem som byggklossar du
          sätter ihop:
        </p>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            { label: "VEM/VAD", q: "Vad ska det handla om?", ex: "en astronaut" },
            { label: "HURDAN", q: "Vilka egenskaper?", ex: "yngre, leende" },
            { label: "VAR", q: "Var utspelar det sig?", ex: "på månen" },
            { label: "STIL", q: "Vilken stil?", ex: "fotografi / akvarell / tecknad" },
            { label: "DETALJ", q: "Något särskilt?", ex: "med svensk flagga på dräkten" },
          ].map((b) => (
            <div
              key={b.label}
              className="rounded-lg border border-[#243248] bg-[#1a2235] p-4"
            >
              <div
                className="ms-mono text-xs font-bold"
                style={{ color: lesson.accentHex }}
              >
                {b.label}
              </div>
              <div className="mt-1 font-semibold text-white">{b.q}</div>
              <div className="mt-1 text-sm text-[#94a3b8]">
                Ex: <em>&ldquo;{b.ex}&rdquo;</em>
              </div>
            </div>
          ))}
        </div>

        <p>
          Alla fem behövs inte alltid. Men ju fler du tänker på, desto mer styr
          du resultatet.
        </p>

        <h3>Bygga en prompt steg för steg</h3>
        <p>Titta hur prompten växer:</p>

        <div className="my-6 overflow-hidden rounded-lg border border-[#243248] bg-[#1a2235]">
          <table className="w-full text-sm">
            <thead className="border-b border-[#243248]">
              <tr>
                <th className="ms-mono p-3 text-left text-[#94a3b8]">STEG</th>
                <th className="ms-mono p-3 text-left text-[#94a3b8]">
                  PROMPT
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  step: "1",
                  text: "Skriv en dikt",
                  fade: "text-[#64748b]",
                },
                {
                  step: "2",
                  text: "Skriv en dikt om hösten",
                  fade: "text-[#94a3b8]",
                },
                {
                  step: "3",
                  text: "Skriv en dikt om hösten, med röda och gula löv som faller",
                  fade: "text-[#cbd5e1]",
                },
                {
                  step: "4",
                  text: "Skriv en dikt om hösten, med röda och gula löv, i 4 strofer som rimmar",
                  fade: "text-white",
                },
                {
                  step: "5",
                  text: "Skriv en dikt om hösten, med röda och gula löv, i 4 strofer som rimmar, ur en katts perspektiv",
                  fade: "text-white font-semibold",
                },
              ].map((row) => (
                <tr
                  key={row.step}
                  className="border-b border-[#243248] last:border-0"
                >
                  <td className="ms-mono p-3 text-[#fcd34d]">{row.step}</td>
                  <td className={`p-3 ${row.fade}`}>{row.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Märker du? Ju fler ord — desto mer <strong>du</strong>.
        </p>

        <h3>Tänkartrappan: Jag → AI → Jag → Iterera</h3>
        <p>
          Du har sett den i lektion 1 och 2. Nu använder vi den på riktigt — och
          utökar med ett fjärde steg:{" "}
          <Begrepp ord="iteration">
            Att försöka, justera, försöka igen. Bra arbete med AI är aldrig ett
            enda försök. MrBeasts team testar 20+ versioner per thumbnail.
          </Begrepp>
          .
        </p>

        <Tankartrappan accentHex={lesson.accentHex} />

        <Citat accentHex={lesson.accentHex}>
          Iteration = att göra om, lära sig, göra bättre. Det är inte att
          misslyckas — det är hela poängen.
        </Citat>

        <h3>Olika AI-system för olika saker</h3>
        <p>
          &quot;AI&quot; är inte <em>en</em> sak. Det finns många olika typer av
          AI-system. Här är de viktigaste 2026:
        </p>

        <div className="my-6 overflow-hidden rounded-lg border border-[#243248] bg-[#1a2235]">
          <table className="w-full text-sm">
            <thead className="border-b border-[#243248]">
              <tr>
                <th className="ms-mono p-3 text-left text-[#94a3b8]">TYP</th>
                <th className="ms-mono p-3 text-left text-[#94a3b8]">
                  GÖR
                </th>
                <th className="ms-mono hidden p-3 text-left text-[#94a3b8] sm:table-cell">
                  EXEMPEL
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: "Text-AI (LLM)",
                  does: "Skriver, översätter, programmerar",
                  ex: "Claude, ChatGPT, Gemini, Snap My AI",
                },
                {
                  type: "Bild-AI",
                  does: "Skapar och redigerar bilder",
                  ex: "DALL-E, Midjourney, Adobe Firefly, Flux",
                },
                {
                  type: "Video-AI",
                  does: "Skapar videoklipp med ljud",
                  ex: "Veo 4, Kling 3, Runway, Pika",
                },
                {
                  type: "Ljud-AI",
                  does: "Skapar musik och röster",
                  ex: "Suno, Udio, ElevenLabs",
                },
                {
                  type: "Multimodal AI",
                  does: "Hanterar flera typer samtidigt",
                  ex: "Claude Opus 4.7, GPT-5.3, Gemini 3",
                },
                {
                  type: "AI-agent",
                  does: "Gör saker — kör kod, klickar",
                  ex: "Claude Code, Codex, Computer Use",
                },
              ].map((row) => (
                <tr
                  key={row.type}
                  className="border-b border-[#243248] last:border-0"
                >
                  <td className="p-3 font-semibold text-white">{row.type}</td>
                  <td className="p-3 text-[#cbd5e1]">{row.does}</td>
                  <td className="hidden p-3 text-[#94a3b8] sm:table-cell">
                    {row.ex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Du behöver olika prompter för olika AI-system. Det som funkar för
          text funkar inte för bild.
        </p>

        <h3>Ärlighetsprincipen</h3>
        <p>Här är en väldigt viktig regel:</p>
        <Citat accentHex={lesson.accentHex}>
          Berätta alltid när du använt AI.
        </Citat>
        <p>Varför?</p>
        <ol>
          <li>
            <strong>Skolan vill veta vad du själv kan.</strong> Om AI gjorde
            jobbet ska det vara tydligt.
          </li>
          <li>
            <strong>Tillit.</strong> Om läraren märker att du dolt
            AI-användning blir det jobbigt.
          </li>
          <li>
            <strong>Du lär dig genom att dokumentera.</strong> Vad du gjorde,
            vilken prompt, vad du ändrade — <em>det</em> är ditt lärande.
          </li>
          <li>
            <strong>Det är så vuxna jobbar.</strong> I många yrken där AI
            används är transparens viktig.
          </li>
        </ol>

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — har du Tänkartrappan koll?"
          question={{
            prompt:
              "Vilket är det fjärde — och oftast viktigaste — steget i Tänkartrappan?",
            options: [
              {
                text: "Jag tänker först",
                correct: false,
                feedback: "Det är steg 1, inte steg 4.",
              },
              {
                text: "AI hjälper",
                correct: false,
                feedback: "Det är steg 2.",
              },
              {
                text: "Jag granskar och äger",
                correct: false,
                feedback: "Det är steg 3.",
              },
              {
                text: "Iterera — försök igen, justera, lär dig",
                correct: true,
                feedback:
                  "Just det. Iteration är det flest hoppar över. Och det är där proffsen separerar sig från amatörerna.",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Prompt-Labbet"
        duration="20 min"
        accentHex={lesson.accentHex}
        intro="Nu provar du själv att bygga en prompt med fem block. Se hur prompten växer för varje block. Generera och se vad AI skulle producera."
      >
        <PromptLabbet accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["nasta-ord", "ai-eller-manniska"]}
          intro="Vill du jämföra hur AI gissar och hur AI-text känns igen?"
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Egen praktik — Tänkartrappan på riktigt"
        duration="25 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Använd Tänkartrappan på en <strong>riktig</strong> uppgift. Det kan
          vara:
        </p>
        <ul>
          <li>En läxa (fråga din lärare först om det är OK)</li>
          <li>Hjälp med ett brev till en släkting</li>
          <li>Idéer till en födelsedagskalas</li>
          <li>Hjälp med en sport-strategi</li>
          <li>Vad du vill — välj något <em>du</em> bryr dig om</li>
        </ul>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Tänkartrappan i praktiken"
          prompt="Hjälp mig komma på fem idéer till en kort presentation om [DITT ÄMNE] för åk 5. Jag vill att de är konkreta och inte typiska skol-presentationer. Ge förslag — jag väljer själv vilken jag bygger vidare på."
          observation="Notera: prompten ber om FÖRSLAG, inte slutsvar. Den är specifik om mottagare (åk 5) och stil (inte typisk). Det här är hur Steg 2 ('AI hjälper') ska se ut. Spara svaren — vi använder dem i lektion 4."
        />

        <p>
          <strong>Dokumentera processen</strong> i tre kolumner:
        </p>

        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              num: "1",
              title: "Jag tänker först",
              q: "Vad ville jag? Vad var min idé?",
            },
            {
              num: "2",
              title: "AI hjälper",
              q: "Vilken prompt skrev jag? Vad svarade AI?",
            },
            {
              num: "3",
              title: "Jag granskar och äger",
              q: "Vad ändrade jag? Vad är mitt i slutprodukten?",
            },
          ].map((s) => (
            <div
              key={s.num}
              className="rounded-lg border border-[#243248] bg-[#1a2235] p-4"
            >
              <div
                className="ms-mono mb-2 text-xs"
                style={{ color: lesson.accentHex }}
              >
                STEG {s.num}
              </div>
              <div className="font-semibold text-white">{s.title}</div>
              <div className="mt-1 text-sm text-[#cbd5e1]">{s.q}</div>
            </div>
          ))}
        </div>

        <p>
          Ta med dokumentationen till nästa lektion. Vi pratar då om hur ni
          gjorde — och hur ni <em>granskade</em> AI:s svar (vilket är vad
          lektion 4 handlar om).
        </p>
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Tre frågor innan du använder AI"
        duration="5 min"
        accentHex={lesson.accentHex}
      >
        <Citat accentHex={lesson.accentHex}>
          1. Vet jag vad jag vill?
          <br />
          <br />
          2. Hur säger jag det tydligt?
          <br />
          <br />
          3. Vad gör jag med resultatet?
        </Citat>

        <p>Och en mening:</p>
        <Citat accentHex={lesson.accentHex}>
          AI är ett verktyg. Som hammaren — den vet inte vad den bygger. Du gör
          det. Du är chefen.
        </Citat>

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L3"
          questions={[
            {
              prompt: "Vad är skillnaden mellan en Google-sökning och en AI-prompt?",
              options: [
                { text: "Google är gratis, AI kostar pengar", correct: false, feedback: "Det handlar inte om priset. Skillnaden är hur de fungerar." },
                { text: "Google hittar saker som finns; AI skapar saker som inte fanns", correct: true, feedback: "Just det. AI är generativ — den producerar nytt. Google är hämtar — den listar existerande sidor." },
                { text: "Det är ingen skillnad", correct: false, feedback: "Faktiskt en stor skillnad. AI är generativ — den skapar. Google är en sökmotor — den listar." },
                { text: "Google är AI", correct: false, feedback: "Google använder AI i många funktioner, men sök-resultatet är fortfarande listning av existerande sidor — inte ny generering." },
              ],
            },
            {
              prompt: "Hur många byggblock har en bra prompt enligt lektionen?",
              options: [
                { text: "Tre", correct: false, feedback: "Vi lärde oss FEM block: Vem/Vad, Hurdan, Var, Stil, Detalj." },
                { text: "Fem: Vem/Vad, Hurdan, Var, Stil, Detalj", correct: true, feedback: "Just det. Alla fem behövs inte alltid — men ju fler du använder, desto mer styr du resultatet." },
                { text: "Tio", correct: false, feedback: "Inte så många. Fem är bra grund." },
                { text: "Lika många som du vill", correct: false, feedback: "Pedagogiskt fokuserar vi på fem konkreta block. Du KAN lägga till mer förstås — men de fem är basen." },
              ],
            },
            {
              prompt: "Vad menas med iteration i AI-arbete?",
              options: [
                { text: "Att fråga om samma sak flera gånger för att få bättre svar", correct: false, feedback: "Närmare — men inte exakt. Iteration är att JUSTERA prompten varje gång, inte upprepa." },
                { text: "Att försöka, justera prompten, försöka igen — lära sig av varje försök", correct: true, feedback: "Rätt. Iteration är hela poängen med proffsigt AI-arbete. MrBeast testar 20+ versioner per thumbnail." },
                { text: "Att skriva en jättelång prompt en gång", correct: false, feedback: "Inte alls. Iteration är många mindre justeringar — inte ett superlångt försök." },
                { text: "Att kopiera AI:s svar utan ändring", correct: false, feedback: "Tvärtom! Iteration är att INTE acceptera första svaret — försök igen, ändra något." },
              ],
            },
            {
              prompt: "Varför ska du berätta när du använt AI?",
              options: [
                { text: "Det är förbjudet att använda AI annars", correct: false, feedback: "Inte alls — du får använda AI. Men du bör berätta." },
                { text: "Skolan vill veta vad du själv kan + transparens bygger tillit + du lär dig genom att dokumentera", correct: true, feedback: "Alla tre. Ärlighetsprincipen handlar om både skolans bedömning och om DITT lärande." },
                { text: "Bara om läraren frågar", correct: false, feedback: "Nej — proaktivt är bättre. Vänta inte på fråga." },
                { text: "Bara om AI:n gjorde mycket", correct: false, feedback: "Berätta även om små bidrag — det är vanan som är viktig." },
              ],
            },
            {
              prompt: "Vad är tre frågor du bör ställa innan du använder AI?",
              options: [
                { text: "Är AI:n laddad? Funkar internet? Har jag tid?", correct: false, feedback: "Praktiska men inte de pedagogiska frågorna. Vi pratar om förberedelsen i tanken." },
                { text: "Vet jag vad jag vill? Hur säger jag det tydligt? Vad gör jag med resultatet?", correct: true, feedback: "Just det. Tre frågor som gör dig till chefen — inte AI:s assistent." },
                { text: "Är det fusk? Får jag? Säger jag till någon?", correct: false, feedback: "Det är etik-frågor — viktiga, men inte de tre vi lärt oss om i den här lektionen." },
                { text: "Är AI:n duktig? Har den rätt? Är den snabb?", correct: false, feedback: "AI är ett verktyg. Frågorna handlar om DIG, inte om verktyget." },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Tänk på en uppgift där du skulle vilja använda AI. Skriv en första prompt nu."
          followups={[
            "Vilka av de fem byggblocken har du med?",
            "Vilka saknas?",
            "Skriv om prompten så att alla fem block är med.",
          ]}
        />
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "Prompt",
            forklaring:
              "Instruktion till AI. Inte en sökning — en beställning.",
          },
          {
            ord: "Prompt engineering",
            forklaring:
              "Konsten att skriva bra prompter. Riktigt yrke i vissa företag.",
          },
          {
            ord: "Iteration",
            forklaring:
              "Att försöka, justera, försöka igen. Bra prompt-arbete är aldrig ett enda försök.",
          },
          {
            ord: "Tänkartrappan",
            forklaring:
              "Jag → AI → Jag → Iterera. Modellen för att vara chef över verktyget.",
          },
          {
            ord: "Generera",
            forklaring:
              "När AI skapar något nytt (bild, text, ljud) — inte hittar något gammalt.",
          },
          {
            ord: "AI-agent",
            forklaring:
              "AI-system som kan göra saker, inte bara svara. T.ex. Claude Code.",
          },
          {
            ord: "Multimodal",
            forklaring:
              "AI-system som hanterar flera typer samtidigt — text, bild, ljud, video.",
          },
          {
            ord: "Ärlighetsprincipen",
            forklaring: "Berätta alltid när du använt AI.",
          },
        ]}
      />
    </>
  );
}
