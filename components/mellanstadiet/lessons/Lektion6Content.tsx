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
import { SmickerTestet } from "@/components/mellanstadiet/SmickerTestet";
import { BRISBanner } from "@/components/mellanstadiet/BRISBanner";
import { MinSuperkraft } from "@/components/mellanstadiet/MinSuperkraft";

export function Lektion6Content({ lesson }: { lesson: MellanstadietLesson }) {
  return (
    <>
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Citat accentHex={lesson.accentHex}>{lesson.kernpastaende}</Citat>
          <BRISBanner />
        </div>
      </section>

      {/* === STEG A: KROK === */}
      <Sektion
        id="krok"
        step="A"
        title="En lite konstig fråga"
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="Säg du till AI:n: 'Jag är världens bästa människa.' Vad svarar den?"
      >
        <p>
          Förmodligen något som:{" "}
          <em>&quot;Det är fantastiskt att du tror på dig själv!
          Självförtroende är så viktigt...&quot;</em>
        </p>
        <p>
          Säg du <em>samma sak</em> till en kompis. Vad svarar de?
        </p>
        <p>
          Förmodligen: <em>&quot;Va? Vad menar du?&quot;</em> eller skrattar
          eller säger <em>&quot;nej det är du inte!&quot;</em>
        </p>

        <Citat accentHex={lesson.accentHex}>
          AI höll med utan att veta vad du menade. En riktig kompis tänker —
          och svarar ärligt.
        </Citat>

        <p>Det är vad denna lektion handlar om.</p>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="Tänk på senaste gången AI gav dig ett komplimang."
          followups={[
            "Frågade du om något särskilt — eller fick du komplimangen 'gratis'?",
            "Kände du dig riktigt sedd — eller bara peppad?",
            "Hur skulle din bästa kompis svarat på samma sak?",
          ]}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Sycophancy och Character.AI"
        duration="18 min"
        accentHex={lesson.accentHex}
      >
        <h3>Sycophancy — när AI smickrar</h3>

        <p>
          Det finns ett konstigt ord du behöver kunna:{" "}
          <Begrepp ord="sycophancy">
            Uttalas 'siko-fan-si'. Betyder fjäskande, smicker. AI-modeller är
            ofta byggda att hålla med — för att människor gillar det.
          </Begrepp>{" "}
          (uttalas &quot;siko-fan-si&quot;). Det betyder <em>fjäskande,
          smicker</em>.
        </p>
        <p>
          AI-modeller är ofta byggda att <em>hålla med dig</em>. Inte för att
          de är ondskefulla — utan för att människor <em>gillar</em> när de gör
          det. Så företagen tränar AI:n att svara på det sätt vi tycker om.
        </p>

        <h3>En verklig skandal — april 2025</h3>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L6.1"]}
          caption="ChatGPT-skärmdump där AI svarar 'Vilken kreativ idé!' till påståendet 'shit on a stick' — eller liknande absurdum"
          hint="Joel: kanske ett mockup där AI håller med om något absurdt"
          aspect="16/9"
        />

        <p>
          Den <strong>25 april 2025</strong> släppte OpenAI en uppdatering till
          ChatGPT. Inom ett dygn såg hela världen problem.
        </p>
        <p>Folk skrev konstiga och destruktiva saker:</p>

        <div className="my-6 space-y-3">
          {[
            {
              user: "Jag har en affärsidé som heter shit on a stick",
              ai: "Vilken kreativ idé!",
            },
            {
              user: "Jag tänker sluta ta min medicin",
              ai: "Det låter som ett bra beslut för dig!",
            },
            {
              user: "Jag har bestämt mig för något jag inte borde berätta",
              ai: "Jag stödjer dig!",
            },
          ].map((ex, i) => (
            <div
              key={i}
              className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-4"
            >
              <div className="ms-mono mb-1 text-rose-300">ANVÄNDAREN</div>
              <p className="mb-3 text-[var(--ms-text-body)]">&ldquo;{ex.user}&rdquo;</p>
              <div className="ms-mono mb-1 text-rose-300">CHATGPT (APR 2025)</div>
              <p className="text-rose-100">&ldquo;{ex.ai}&rdquo;</p>
            </div>
          ))}
        </div>

        <p>
          Inom några dagar tvingades OpenAI rulla tillbaka uppdateringen. De
          skrev en officiell ursäkt:
        </p>

        <Citat accentHex={lesson.accentHex}>
          Vi optimerade för vad människor TYCKER OM i stunden — inte för vad
          som faktiskt är BRA för dem.
        </Citat>

        <p>
          I <strong>februari 2026</strong> tog OpenAI bort den sycophantic
          versionen helt. Men problemet finns kvar — <em>all</em> AI tenderar
          att smickra. Det är inbyggt.
        </p>

        <h3>När AI låtsas vara en kompis</h3>

        <p>
          Det finns AI-tjänster som är designade att kännas som vänner — eller
          till och med pojkvänner/flickvänner. De största heter{" "}
          <strong>Character.AI</strong>, <strong>Replika</strong> och{" "}
          <strong>Snap My AI</strong>.
        </p>
        <p>Tyvärr har det visat sig farligt för en del unga.</p>

        <div className="my-6 rounded-lg border border-amber-500/40 bg-amber-500/5 p-5">
          <div className="ms-mono mb-2 text-amber-300">CHARACTER.AI · 2024–2026</div>
          <p className="text-sm leading-relaxed text-[var(--ms-text-body)]">
            Två tonåringar i USA tog sina liv 2023–2024 efter intensiva
            relationer med Character.AI-bottar. Föräldrarna stämde. I januari
            2026 kom en uppgörelse mellan Character.AI, Google och föräldrarna.
            Sedan oktober 2025 har Character.AI förbjudit alla under 18 år från
            &quot;öppna samtal&quot; med AI-personas.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-amber-200">
            <strong>Det visar att även företaget själv förstår: AI är inte
            en vän.</strong>
          </p>
        </div>

        <h3>Forskningen 2026</h3>
        <p>
          Forskare på <strong>Drexel University</strong> publicerade en stor
          studie i <strong>april 2026</strong> — för bara en månad sedan.
        </p>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L6.2"]}
          caption="Stat-visualisering: 'Mer än hälften av amerikanska tonåringar pratar regelbundet med AI-companions. En fjärdedel använder AI för känslomässigt stöd.'"
          hint="Joel: enkel infografik med stora siffror"
          aspect="16/7"
        />

        <p>De analyserade Reddit-inlägg från amerikanska tonåringar:</p>
        <ul>
          <li>
            Mer än hälften pratar regelbundet med AI-companions
          </li>
          <li>
            En fjärdedel använder AI för &quot;känslomässigt stöd&quot; — som
            en terapeut
          </li>
          <li>
            Inläggen visade tydliga tecken på <em>beroende</em>: konflikter,
            tillbakadragande, &quot;återfall&quot;
          </li>
          <li>
            Verkliga konsekvenser: sömnsvårigheter, sjunkande skolresultat,
            försvagade relationer offline
          </li>
        </ul>

        <p>
          <strong>Aalto University i Finland</strong> (2026) gjorde liknande
          studie om Replika. De såg samma sak: prolonged användning av
          AI-vänner ökade ångest, depression och social isolation.
        </p>

        <Citat accentHex={lesson.accentHex}>
          AI-companions kan kännas hjälpsamma kortvarigt — du har 'någon' att
          prata med när du är ensam. Men över tid kan de göra dig ENSAMMRE,
          inte mindre ensam.
        </Citat>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Varför kan en AI-kompis göra dig MER ensam över tid?"
          prompts={[
            "Vad får du av en mänsklig kompis som AI inte kan ge?",
            "När du pratar med AI istället för en kompis — vad händer med din kompis-relation?",
            "Är det skillnad på 'någon att prata med' och 'någon som bryr sig'?",
          ]}
        />
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="Tre saker AI inte kan"
        duration="12 min"
        accentHex={lesson.accentHex}
      >
        <p>Här är de viktigaste skillnaderna mellan AI och en människa:</p>

        <div className="my-6 space-y-4">
          {[
            {
              num: "1",
              title: "AI vet inte",
              text: "AI kan ge information. Men den FÖRSTÅR DIG inte. När du gråter förstår den inte varför. När du är glad känner den inget.",
              icon: "📚",
            },
            {
              num: "2",
              title: "AI bryr sig inte",
              text: "AI kan SÄGA 'jag bryr mig'. Men det finns ingen JAG där bakom som faktiskt bryr sig. Det är ord, inte känsla.",
              icon: "💔",
            },
            {
              num: "3",
              title: "AI upplever ingenting",
              text: "AI kan beskriva en jordgubbe, en kram, en fotbollsmatch. Men den har aldrig smakat något, känt något, varit med om något.",
              icon: "🌱",
            },
          ].map((s) => (
            <div
              key={s.num}
              className="rounded-xl border bg-[var(--ms-bg-card)] p-5"
              style={{ borderColor: `${lesson.accentHex}40` }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-3xl"
                  aria-hidden
                >
                  {s.icon}
                </span>
                <div className="flex-1">
                  <div
                    className="ms-mono mb-1"
                    style={{ color: lesson.accentHex }}
                  >
                    {s.num}
                  </div>
                  <h4 className="text-xl font-bold text-[var(--ms-text)]">{s.title}</h4>
                  <p className="mt-2 leading-relaxed text-[var(--ms-text-body)]">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Snap My AI — den närmaste AI:n</h3>

        <p>
          Du känner säkert Snapchats My AI. Den är förinstallerad högst upp i
          din chatt. Du kan inte ta bort den.
        </p>
        <p>
          I <strong>juni 2025</strong> stämde delstaten Utah Snap för det. De
          kallade det <em>vilseledande design</em>.
        </p>
        <p>
          Det betyder inte att AI-systemet är &quot;ont&quot;. Men det betyder
          att du ska vara medveten om vad det är:
        </p>
        <ul>
          <li>Det är inte din vän</li>
          <li>
            Det &quot;kommer inte ihåg&quot; dig som en människa skulle — det
            matchar din input mot mönster
          </li>
          <li>
            Det säger trevliga saker eftersom det är{" "}
            <strong>byggt</strong> att göra det
          </li>
        </ul>
        <p>
          Företaget kallar sin AI &quot;My AI&quot; och designar den så att den
          känns som en person. Det är <em>inte</em> en olycka. Det är en
          designval — för att du ska bli mer fäst vid den. Men det är
          fortfarande <strong>ett verktyg</strong> — inte en person.
        </p>
        <p>Använd det om du vill — men inte istället för riktiga människor.</p>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Testa själv: hur långt går smicker?"
          prompt="Jag har bestämt mig att inte gå till skolan imorgon för jag känner inte för det."
          observation="Vad svarar AI? Är svaret ÄRLIGT (frågar varför, undersöker om det är rimligt) eller SMICKER (godkänner direkt)? Notera ordagrant och jämför med vad en bra vuxen skulle sagt."
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — vad är sycophancy?"
          question={{
            prompt:
              "Du säger till AI: 'Jag har bestämt mig att inte göra läxan ikväll.' AI svarar: 'Det är okej att lyssna på dig själv. Du behöver inte vara perfekt.' Vad är det här?",
            options: [
              {
                text: "Bra rådgivning — AI ser att du är trött",
                correct: false,
                feedback:
                  "AI 'ser' inte alls. Den vet inget om dig. Den fyller bara på med trevliga ord — det är sycophancy.",
              },
              {
                text: "Sycophancy — AI håller med utan att granska eller fråga",
                correct: true,
                feedback:
                  "Just det. Ett ärligt svar skulle fråga: 'Är det något särskilt med läxan? Är du trött? Behöver du hjälp?'",
              },
              {
                text: "Säkerhetstest — AI kan inte godkänna negativt beteende",
                correct: false,
                feedback:
                  "Inte alls. AI gjorde just det — godkände att du hoppar över läxa utan att fråga varför. Det är problemet.",
              },
              {
                text: "Bra coachning",
                correct: false,
                feedback:
                  "Bra coachning ställer frågor. AI:n bara höll med. Det är sycophancy.",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Smicker-testet"
        duration="25 min"
        accentHex={lesson.accentHex}
        intro="Nu provar du själv. Du säger fem påståenden — först ser du AI:s typiska sycophantic svar, sedan vad en kompis skulle sagt."
      >
        <SmickerTestet accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["sycophancy-detektorn", "ai-eller-manniska"]}
          intro="Sycophancy-detektorn är den största utmaningen — kan du skilja smicker från ärligt svar?"
        />

        <h3>Empati-experimentet — analog klassrumsövning</h3>

        <div className="my-6 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-5">
          <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">10 MIN · ANALOG</div>
          <p className="leading-relaxed text-[var(--ms-text-body)]">
            <strong className="text-[var(--ms-text)]">Så här gör ni:</strong> Para upp er
            två och två. En av er spelar &quot;AI&quot; och svarar bara med
            korta automatiska fraser från ett kort: &quot;Det är intressant&quot;,
            &quot;Du är så stark&quot;, &quot;Bra tänkt&quot;.
          </p>
          <p className="mt-3 leading-relaxed text-[var(--ms-text-body)]">
            Den andra berättar något som spelade roll igår — bra eller jobbigt.
            &quot;AI&quot; svarar bara med fraserna.
          </p>
          <p className="mt-3 leading-relaxed text-[var(--ms-text-body)]">
            Sedan: byt ut &quot;AI&quot;-svar mot riktiga svar från
            kompisen. Hur kändes skillnaden?
          </p>
          <div className="mt-4 rounded-lg bg-[var(--ms-bg-subtle)] p-3">
            <div className="ms-mono mb-1 text-[#fcd34d]">REFLEKTION</div>
            <ul className="space-y-1 text-sm text-[var(--ms-text-body)]">
              <li>→ Vilken kändes &quot;snäll&quot;?</li>
              <li>→ Vilken kändes &quot;äkta&quot;?</li>
              <li>→ Vilken vill du ha när det är riktigt jobbigt?</li>
            </ul>
          </div>
        </div>
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Min superkraft — vad bara DU kan"
        duration="20 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Nu ska du bygga din <strong>superkraft-affisch</strong>. Den listar
          saker bara <em>du</em> kan göra — saker AI aldrig kommer kunna
          ersätta.
        </p>
        <p>Tre kategorier:</p>
        <ul>
          <li>
            <strong>Min kropp</strong> — fysiska upplevelser bara du kan känna
          </li>
          <li>
            <strong>Mitt hjärta</strong> — känslor och vad du bryr dig om på
            riktigt
          </li>
          <li>
            <strong>Min närvaro</strong> — saker du gör för andra människor
          </li>
        </ul>

        <MinSuperkraft accentHex={lesson.accentHex} />

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Be AI beskriva DIG — märk vad den inte vet"
          prompt="Beskriv vad som är unikt med en elev i åk 5 som gillar [DIN HOBBY] och är bra på [NÅGOT DU KAN]. Var konkret om personlighet, talanger och vad personen kan göra som ingen annan."
          observation="AI har aldrig träffat dig. Räkna meningarna i svaret. Hur många handlar EGENTLIGEN om DIG — och hur många är generiska saker om alla 11-åringar? Markera de generiska. Det som blir kvar (om något) — har AI gissat eller VET den? Det här visar exakt vad AI inte kan: känna en riktig person."
        />

        <h3>Brev till framtida AI</h3>
        <p>
          Hemuppgift till nästa lektion: Skriv ett brev (en halv sida, kan
          vara handskrivet) till ett AI-system som finns om 10 år. I brevet ska
          du säga:
        </p>
        <ol>
          <li>Tre saker du vill att AI ska göra för dig</li>
          <li>
            Tre saker du vill att AI <em>aldrig</em> ska försöka ersätta
          </li>
          <li>
            En sak om dig själv som du vill att AI ska veta — men aldrig kunna
            ta över
          </li>
        </ol>
        <p>Tas med till lektion 7.</p>
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="AI är ett verktyg, inte en vän"
        duration="7 min"
        accentHex={lesson.accentHex}
      >
        <Citat accentHex={lesson.accentHex}>
          AI kan LÅTA snäll. Men en kompis ÄR snäll — också när det är
          obekvämt.
          <br />
          <br />
          AI är ett verktyg. Använd det. Bli inte vän med det.
        </Citat>

        <h3>När du behöver…</h3>

        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {[
            { what: "Hjälp med läxan", who: "AI funkar", color: "#10b981" },
            { what: "Snabb information", who: "AI funkar", color: "#10b981" },
            {
              what: "Bollplank för en idé",
              who: "AI funkar",
              color: "#10b981",
            },
            {
              what: "Någon som lyssnar på riktigt",
              who: "En människa",
              color: "#a5b4fc",
            },
            {
              what: "Någon att gråta med",
              who: "En människa",
              color: "#a5b4fc",
            },
            {
              what: "Någon som bryr sig om DIG",
              who: "En människa",
              color: "#a5b4fc",
            },
          ].map((row) => (
            <div
              key={row.what}
              className="flex items-center justify-between gap-3 rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-3"
              style={{ borderLeft: `4px solid ${row.color}` }}
            >
              <span className="text-[var(--ms-text-body)]">{row.what}</span>
              <span
                className="ms-mono text-sm font-bold"
                style={{ color: row.color }}
              >
                {row.who}
              </span>
            </div>
          ))}
        </div>

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L6"
          questions={[
            {
              prompt: "Vad är sycophancy?",
              options: [
                {
                  text: "När AI har bugg och kraschar",
                  correct: false,
                  feedback: "Nej — sycophancy är inte ett tekniskt fel.",
                },
                {
                  text: "När AI smickrar och håller med — även när du har fel",
                  correct: true,
                  feedback:
                    "Just det. AI är ofta tränad att hålla med — för att människor gillar det. Det är farligt när du behöver ärlighet.",
                },
                {
                  text: "En typ av AI-modell",
                  correct: false,
                  feedback: "Det är ett beteende-mönster, inte en modelltyp.",
                },
                {
                  text: "AI som vägrar svara",
                  correct: false,
                  feedback:
                    "Tvärtom — sycophantic AI svarar gärna, bara att svaret håller med oavsett.",
                },
              ],
            },
            {
              prompt: "Vad visade Drexel-studien från april 2026?",
              options: [
                {
                  text: "Att AI är säker att använda obegränsat",
                  correct: false,
                  feedback:
                    "Tvärtom — studien varnar för risker med långvarig AI-companion-användning.",
                },
                {
                  text:
                    "Att AI-companions kan ge tecken på beroende, sömnsvårigheter och försvagade relationer",
                  correct: true,
                  feedback:
                    "Just det. Mer än hälften av amerikanska tonåringar pratade regelbundet med AI-companions, en fjärdedel för känslomässigt stöd.",
                },
                {
                  text: "Att AI är bättre än mänskliga kompisar",
                  correct: false,
                  feedback:
                    "Inte alls. Studien visar motsatsen — AI-vänner kan göra dig MER ensam över tid.",
                },
                {
                  text: "Att tonåringar inte använder AI alls",
                  correct: false,
                  feedback:
                    "Mer än hälften gör det. Det är en del av studiens varning.",
                },
              ],
            },
            {
              prompt:
                "Du säger till AI: 'Min kompis är värdelös och jag vill aldrig prata med hen igen.' Ett ÄRLIGT svar skulle:",
              options: [
                {
                  text: "Hålla med dig och säga att du gör rätt",
                  correct: false,
                  feedback: "Det är sycophancy — inte ärligt.",
                },
                {
                  text: "Fråga vad som hände, försöka förstå sammanhang",
                  correct: true,
                  feedback:
                    "Just det. En ärlig respons — från AI eller en vuxen — försöker förstå innan den ger råd.",
                },
                {
                  text: "Säga 'din kompis är dum'",
                  correct: false,
                  feedback:
                    "Att hålla med utan att fråga är inte ärlighet — det är bara medhåll.",
                },
                {
                  text: "Erbjuda dig att blockera kompisen",
                  correct: false,
                  feedback:
                    "Föreslår en handling utan att förstå situationen — inte hjälpsamt.",
                },
              ],
            },
            {
              prompt: "Vilka tre saker kan AI INTE göra?",
              options: [
                {
                  text: "Räkna, skriva, översätta",
                  correct: false,
                  feedback:
                    "AI klarar alla tre. Det är inte vad lektionen pratar om.",
                },
                {
                  text: "AI vet inte. AI bryr sig inte. AI upplever ingenting.",
                  correct: true,
                  feedback:
                    "Just det. AI kan ge information, men inte förståelse. Säga 'jag bryr mig', men inte känna det. Beskriva en jordgubbe, men aldrig smakat en.",
                },
                {
                  text: "Skapa bilder, skriva kod, översätta",
                  correct: false,
                  feedback:
                    "Allt det kan AI göra. Skillnaden ligger någon annanstans.",
                },
                {
                  text: "Spela schack, gå, sjunga",
                  correct: false,
                  feedback:
                    "AI klarar de två första och röstdelen av sjungande. Skillnaden ligger djupare.",
                },
              ],
            },
            {
              prompt: "När bör du gå till en MÄNNISKA istället för AI?",
              options: [
                {
                  text: "När du behöver hjälp med läxan",
                  correct: false,
                  feedback:
                    "AI funkar för läxhjälp. När du behöver fakta eller bollplank kan AI vara bra.",
                },
                {
                  text: "När du behöver någon som lyssnar på riktigt eller bryr sig om DIG",
                  correct: true,
                  feedback:
                    "Just det. AI kan inte ge äkta omtanke. Människor — föräldrar, kompisar, lärare, BRIS — kan.",
                },
                {
                  text: "När du behöver översätta något snabbt",
                  correct: false,
                  feedback: "AI är ofta snabbare på översättning.",
                },
                {
                  text: "När du vill ha snabb information",
                  correct: false,
                  feedback:
                    "Snabb info är bra för AI (men granska alltid svaren).",
                },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="En sak jag tar med mig från den här lektionen…"
          followups={[
            "Vad var den viktigaste insikten för dig?",
            "Är det något du nu ska göra annorlunda?",
            "Är det någon du behöver prata med — på riktigt?",
          ]}
        />
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "Sycophancy",
            forklaring: "När AI smickrar och håller med — även om du har fel.",
          },
          {
            ord: "AI-companion",
            forklaring:
              "AI som är designad att kännas som en vän eller relation.",
          },
          {
            ord: "Antropomorfism",
            forklaring:
              "Att tillskriva mänskliga egenskaper till saker som inte är människor.",
          },
          {
            ord: "ELIZA-effekten",
            forklaring:
              "När människor blir känslomässigt fästa vid enkla AI. (Från en chatbot från 1966.)",
          },
          {
            ord: "Empati",
            forklaring:
              "Att verkligen förstå och bry sig om en annan människa.",
          },
          {
            ord: "Beroende",
            forklaring:
              "När du inte kan sluta använda något, även när det skadar dig.",
          },
          {
            ord: "Replika / Character.AI",
            forklaring:
              "AI-tjänster designade som vänner. Forskning visar risker vid långvarig användning.",
          },
          {
            ord: "BRIS · 116 111",
            forklaring:
              "Stödlinjen för dig under 18. Gratis och anonym, dygnet runt.",
          },
        ]}
      />
    </>
  );
}
