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
import { BygDinFramtid } from "@/components/mellanstadiet/BygDinFramtid";
import { SlutManifest } from "@/components/mellanstadiet/SlutManifest";
import { SluttproduktionGuide } from "@/components/mellanstadiet/SluttproduktionGuide";
import { DiplomMall } from "@/components/mellanstadiet/DiplomMall";

export function Lektion7Content({ lesson }: { lesson: MellanstadietLesson }) {
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
        title="Två framtider"
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="Tänk dig två framtider — vilken vill DU leva i?"
      >
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-500/40 bg-rose-500/5 p-5">
            <div className="ms-mono mb-2 text-rose-300">
              WALL-E-FRAMTIDEN
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Människor i flytstolar
            </h3>
            <p className="text-sm leading-relaxed text-[#cbd5e1]">
              Allas ansikten klistrade vid skärmar. Robotar gör allt. Människor
              har glömt bort hur man gör något själv.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-5">
            <div className="ms-mono mb-2 text-emerald-300">
              STAR TREK-FRAMTIDEN
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Människor utforskar
            </h3>
            <p className="text-sm leading-relaxed text-[#cbd5e1]">
              Tekniken gör tråkiga jobb så att människor kan utforska, lära
              sig, samarbeta. Alla har möjlighet.
            </p>
          </div>
        </div>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L7.1"]}
          caption="Two-panel: Wall-E (människor i flytstolar) vs Star Trek (USS Enterprise på rymdresa)"
          hint="Joel: filmstillar eller iconisk illustration som visar kontrasten"
          aspect="16/7"
        />

        <p>De flesta säger Star Trek. Och det är ingen slump.</p>

        <p>Men här är poängen:</p>

        <Citat accentHex={lesson.accentHex}>
          AI är inte en framtid som HÄNDER. Det är en framtid som BYGGS — av
          val som människor gör. Just nu. Och snart är det DU som gör de
          valen.
        </Citat>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="Vad är den ENA sak du redan idag gör som påverkar framtidens AI?"
          followups={[
            "Vad du klickar på — TikTok, YouTube — tränar algoritmer.",
            "Hur du pratar om AI — påverkar vad andra tror.",
            "Vilka regler du följer i klassens AI-överenskommelse.",
            "Du bygger redan framtiden. Det är inte teori.",
          ]}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Vad AI redan har gjort — bra och dåligt"
        duration="18 min"
        accentHex={lesson.accentHex}
      >
        <h3>Nobelpriset 2024</h3>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L7.2"]}
          caption="Geoffrey Hinton, John Hopfield, Demis Hassabis och John Jumper med Nobelmedaljerna"
          hint="Joel: pressbild från Nobelceremonin 2024"
          aspect="3/2"
        />

        <p>
          I <strong>oktober 2024</strong> — för bara 1,5 år sedan — fick AI
          sina första Nobelpriser någonsin. Två stycken:
        </p>
        <ul>
          <li>
            <strong>Fysikpriset</strong> till{" "}
            <strong>John Hopfield</strong> och{" "}
            <strong>Geoffrey Hinton</strong> — för grundtekniken bakom all
            modern AI.
          </li>
          <li>
            <strong>Kemipriset</strong> till{" "}
            <strong>Demis Hassabis</strong> och{" "}
            <strong>John Jumper</strong> (DeepMind) för{" "}
            <strong>AlphaFold</strong> — ett AI-system som löste ett 50 år
            gammalt biologi-problem och hjälpt forskare hitta nya mediciner.
          </li>
        </ul>

        <h3>Aktuella genombrott (2025–2026)</h3>

        <p>Bara några exempel från de senaste månaderna:</p>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Aurora-modellen",
              desc: "AI som ger bättre väderprognoser än tidigare metoder",
            },
            {
              title: "Spherical DYffusion",
              desc: "Projekterar 100 år av klimatmönster på 25 timmar",
            },
            {
              title: "AI och Alzheimer's",
              desc: "Forskare hittade ny gen tack vare AI som modellerar proteiner",
            },
            {
              title: "Antibakterieresistens",
              desc: "Diagnostik från dagar till minuter",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4"
            >
              <div className="ms-mono mb-1 text-emerald-300">GENOMBROTT</div>
              <div className="font-bold text-white">{b.title}</div>
              <p className="text-sm text-[#cbd5e1]">{b.desc}</p>
            </div>
          ))}
        </div>

        <p>AI hjälper. På riktigt. Detta är inte hype.</p>

        <h3>Och baksidan — vi har gått igenom det</h3>

        <p>Men vi har också sett vad som går fel — vi har gått igenom det:</p>

        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {[
            { l: "L4", what: "Hallucinationer", who: "Wall Street-advokater luras (712 fall 2025)" },
            { l: "L4", what: "Deepfakes", who: "Val-desinformation 2025 (Kanada, Rumänien, Irland)" },
            { l: "L2", what: "Bias", who: "Workday-rättegången, äldre diskrimineras" },
            { l: "L6", what: "Sycophancy", who: "ChatGPT smickrade destruktiva idéer (april 2025)" },
            { l: "L6", what: "AI-companions", who: "Tonåringar mår dåligt (Drexel/Aalto 2026)" },
            { l: "L5", what: "Roblox-rättegångarna", who: "Otillräckliga skydd för barn" },
            { l: "L5", what: "AI-energi", who: "720 miljarder gallons vatten/år" },
          ].map((row) => (
            <div
              key={row.what}
              className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="ms-mono rounded bg-rose-500/20 px-1.5 py-0.5 text-xs text-rose-200">
                  {row.l}
                </span>
                <span className="font-semibold text-white">{row.what}</span>
              </div>
              <p className="mt-1 text-rose-100">{row.who}</p>
            </div>
          ))}
        </div>

        <h3>Det som imponerar mest — vi KAN säga nej</h3>

        <p>
          I <strong>mars-april 2026</strong> — för bara några veckor sedan —
          hände något viktigt. OpenAI tvingades stänga ner Sora-appen efter
          offentliga protester mot deepfakes av kändisar och politiker.
        </p>
        <p>
          Det är <strong>första gången</strong> en så stor AI-app tagits ner
          efter offentliga protester. Det visar något viktigt:
        </p>

        <Citat accentHex={lesson.accentHex}>
          Vi KAN säga nej. Tekniken är inte oss överordnad. Vi är medborgare.
          Vi har röst.
        </Citat>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Sora-stängningen — vad lär oss det om makt?"
          prompts={[
            "Vem var det som faktiskt 'sa nej'? (Familjer? Tittare? Media?)",
            "Skulle samma sak hänt utan offentliga protester?",
            "Vad borde du själv kunna säga nej till?",
          ]}
        />
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="AGI och din agens"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>Den stora frågan: AGI</h3>

        <p>
          Det finns ett konstigt ord du behöver känna till:{" "}
          <Begrepp ord="AGI">
            Artificiell Generell Intelligens. AI som är lika smart som
            människan i ALLA områden. Idag finns det inte. Forskare är delade
            om när — eller om — det kommer.
          </Begrepp>{" "}
          — <em>Artificiell Generell Intelligens</em>. Det betyder AI som är{" "}
          <em>lika smart som människan i alla områden</em>.
        </p>
        <p>
          Idag finns AGI inte. Vi har bra AI för vissa saker (text, bilder,
          schack, Go). Inte för allt.
        </p>
        <p>
          Men i <strong>februari 2026</strong> hände något dramatiskt. Flera
          AI-forskare lämnade sina jobb på OpenAI och xAI i protest. De varnade:
          AGI kan komma snart — kanske inom 1–3 år. Vissa är{" "}
          <em>oroliga</em>. De tycker vi ska sakta ner.
        </p>
        <p>Andra forskare säger: nej, det tar mycket längre. Eller kanske händer det aldrig.</p>

        <Citat accentHex={lesson.accentHex}>
          Vi vet inte vad som är sant. Men vi vet en sak: vuxna är delade. Och
          det är DU som lever i den framtid de pratar om.
        </Citat>

        <p>Det är därför du måste <em>förstå</em> AI — inte bara <em>använda</em> den.</p>

        <h3>Vad du kan göra (på riktigt)</h3>

        <p>Du är inte maktlös. Här är konkreta saker:</p>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              level: "PERSONLIGEN",
              items: [
                "Tänkartrappan: Jag → AI → Jag → Iterera",
                "Tre etiska frågor (är det ärligt? lär jag mig? snällt?)",
                "Tre kontrollfrågor (vem säger? hur kollar jag? vem tjänar?)",
              ],
            },
            {
              level: "I SKOLAN",
              items: [
                "Följ klassens AI-manifest",
                "Säg ifrån när någon delar fejk",
                "Diskutera öppet med kompisar och lärare",
              ],
            },
            {
              level: "HEMMA",
              items: [
                "Prata med din familj om vad du lärt dig",
                "Föreslå familjeregler",
                "Visa vuxna hur AI kan användas klokt",
              ],
            },
            {
              level: "SOM MEDBORGARE (SNART)",
              items: [
                "När du blir 18 — RÖSTA. Politik styr ramarna.",
                "Välj plattformar — bojkott är makt.",
                "Skriv, debattera, protestera om något känns fel.",
                "Lär andra om vad du vet.",
              ],
            },
          ].map((b) => (
            <div
              key={b.level}
              className="rounded-lg border bg-[#1a2235] p-4"
              style={{ borderColor: `${lesson.accentHex}40` }}
            >
              <div
                className="ms-mono mb-2"
                style={{ color: lesson.accentHex }}
              >
                {b.level}
              </div>
              <ul className="space-y-1 text-sm text-[#cbd5e1]">
                {b.items.map((it, i) => (
                  <li
                    key={i}
                    className="flex gap-2"
                  >
                    <span style={{ color: lesson.accentHex }}>→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3>Hur framtiden formas</h3>

        <p>Filmer brukar visa framtiden som något som <em>händer</em>. Det är fel.</p>

        <Citat accentHex={lesson.accentHex}>
          Framtiden är inte en plats vi besöker. Det är en plats vi BYGGER.
        </Citat>

        <p>
          Wall-E och Star Trek hade <em>båda</em> avancerad teknik. Skillnaden
          var <strong>vad människor gjorde med den</strong>.
        </p>
        <p>
          Det är samma sak idag. AI finns. Vi kan inte gömma oss från den. Men
          vi kan <strong>välja</strong> vad vi gör med den. Vad vi tillåter.
          Vad vi förbjuder. Vad vi använder för. Och vad vi <em>aldrig</em>{" "}
          lämnar över.
        </p>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Be AI om en framtidsbild — och granska den"
          prompt="Beskriv hur en svensk mellanstadie-elev kan ha det år 2040. Var konkret med teknik, skola, fritid. Behöver inte vara optimistisk eller pessimistisk — beskriv ärligt."
          observation="Vad antar AI är 'normalt' 2040? Vilka val har AI gjort åt dig som inte verkar realistiska? Vad känns sant — och vad känns påhittat? Det är just det här du nu är tränad i: granska ALLT, även framtidsbilder."
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — har du agens-tänket inne?"
          question={{
            prompt:
              "Vilket av följande påståenden stämmer BÄST med vad lektionen försöker säga?",
            options: [
              {
                text: "AI är farlig — vi måste förbjuda den",
                correct: false,
                feedback:
                  "Inte vad lektionen säger. AI har gjort mycket bra (Nobelpris, AlphaFold, klimatmodeller). Det handlar om att VÄLJA vad AI används till.",
              },
              {
                text: "AI är magisk — den kommer fixa allt",
                correct: false,
                feedback:
                  "Inte alls. Lektionen är tydlig: AI är inte magi och inte överordnat människor. Det är teknik vi bygger och styr.",
              },
              {
                text:
                  "Framtiden byggs av människor genom val. Du är en av dem som bygger den.",
                correct: true,
                feedback:
                  "Just det. Det är hela kursens slutpunkt: agens. Du är inte maktlös, inte konsument — du är medborgare och designer av framtiden.",
              },
              {
                text: "AGI kommer snart och vi kan inget göra",
                correct: false,
                feedback:
                  "Vuxna är delade om AGI. Och även OM det kommer styr människor vad det används till. Du har ALLTID agens.",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Bygg din framtid + Klassens slut-manifest"
        duration="35 min"
        accentHex={lesson.accentHex}
        intro="Två moment som tillsammans formar er kurs-avslutning. Först bygger DU din framtidsbild för 2040. Sedan formulerar klassen tillsammans ett slut-manifest med en punkt per lektion."
      >
        <BygDinFramtid accentHex={lesson.accentHex} />

        <SlutManifest accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={[
            "dilemma-spelet",
            "sycophancy-detektorn",
            "hallucination-rally",
          ]}
          intro="Vill du repetera kursen genom spel? Här är tre du kan ha glädje av — alla från tidigare lektioner."
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Sluttproduktion"
        duration="1–2 lektionspass extra"
        accentHex={lesson.accentHex}
      >
        <p>
          Det här är ditt sista uppdrag i kursen. Du väljer{" "}
          <strong>ett</strong> av tre format. Allt får använda AI som verktyg —
          men du måste <strong>berätta hur</strong> i din process.
        </p>

        <SluttproduktionGuide accentHex={lesson.accentHex} />

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="grupp"
          question="När alla har valt format — diskutera"
          prompts={[
            "Vilket format passar dig bäst — och varför?",
            "Vad är det viktigaste budskap du vill få fram?",
            "Vad är det första du ska göra för att komma igång?",
            "Vilken hjälp behöver du av läraren? Av dina kompisar?",
          ]}
        />
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Sju insikter — och ett diplom"
        duration="10 min"
        accentHex={lesson.accentHex}
      >
        <h3>Det viktigaste från hela kursen</h3>

        <div className="my-6 space-y-2">
          {[
            {
              n: "L1",
              text: "AI är inte en sak. Det är många. Och det går snabbt.",
              color: "#a5b4fc",
            },
            {
              n: "L2",
              text: "AI tänker inte. Den gissar mönster. Och bias är data som kommer in.",
              color: "#fb923c",
            },
            {
              n: "L3",
              text: "AI är ett verktyg. Du är chefen. Tänk först → AI hjälper → Du granskar.",
              color: "#10b981",
            },
            {
              n: "L4",
              text:
                "AI är en övertygande gissningsmaskin. Aldrig en sanningsmaskin. Granskning är vår superkraft.",
              color: "#f43f5e",
            },
            {
              n: "L5",
              text:
                "AI är inte ond. Inte god. Den är ett verktyg som människor designat med vissa mål. Du har agens.",
              color: "#eab308",
            },
            {
              n: "L6",
              text:
                "AI kan låta snäll. Men en kompis är snäll — också när det är obekvämt. AI är ett verktyg. Använd det. Bli inte vän med det.",
              color: "#8b5cf6",
            },
            {
              n: "L7",
              text: "Framtiden byggs av människor. Du är en av dem.",
              color: "#06b6d4",
            },
          ].map((row) => (
            <div
              key={row.n}
              className="flex items-start gap-3 rounded-lg border bg-[#1a2235] p-4"
              style={{ borderLeft: `4px solid ${row.color}` }}
            >
              <span
                className="ms-mono flex h-8 w-8 flex-none items-center justify-center rounded font-bold text-[#0a0e1a]"
                style={{ background: row.color }}
              >
                {row.n}
              </span>
              <p className="leading-relaxed text-white">{row.text}</p>
            </div>
          ))}
        </div>

        <Citat accentHex={lesson.accentHex}>
          Du sitter inte här för att lära dig vara bättre än AI. Du sitter här
          för att lära dig vara mer människa.
        </Citat>

        <h3>Ditt diplom</h3>

        <p>
          Du har gått sju lektioner. Du vet mer om AI än de flesta vuxna i
          Sverige. Skriv ditt namn nedan och printa diplomet — det är ditt.
        </p>

        <DiplomMall accentHex={lesson.accentHex} />

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L7"
          questions={[
            {
              prompt: "Vad är AGI?",
              options: [
                {
                  text: "En typ av AI som finns idag",
                  correct: false,
                  feedback:
                    "Nej — AGI finns INTE idag. Vi har specialiserad AI för vissa uppgifter, men inte 'lika smart som människan i allt'.",
                },
                {
                  text: "Artificiell Generell Intelligens — AI som är lika smart som människan i ALLA områden. Finns inte än.",
                  correct: true,
                  feedback:
                    "Just det. Vuxna är DELADE om när det kommer — vissa säger 1–3 år, andra aldrig. Vi vet inte.",
                },
                {
                  text: "AI för spel",
                  correct: false,
                  feedback: "Nej — det är något annat. AGI är ett bredare begrepp.",
                },
                {
                  text: "AI som kan kopiera människor exakt",
                  correct: false,
                  feedback:
                    "Inte exakt. AGI handlar om generell INTELLIGENS — att klara allt en människa klarar, inte bara kopiera.",
                },
              ],
            },
            {
              prompt: "Vad visar Sora-stängningen i april 2026?",
              options: [
                {
                  text: "Att AI är dåligt och bör förbjudas",
                  correct: false,
                  feedback: "Inte budskapet. Det handlar om makt — vi KAN säga nej.",
                },
                {
                  text:
                    "Att människor och samhälle KAN säga nej till AI som missbrukas — vi har röst",
                  correct: true,
                  feedback:
                    "Just det. Det är första gången en så stor AI-app togs ner efter protester. Vi är medborgare, inte bara konsumenter.",
                },
                {
                  text: "Att OpenAI gick i konkurs",
                  correct: false,
                  feedback:
                    "Nej — Sora stängdes, men OpenAI finns kvar. Det handlar om en specifik produkt.",
                },
                {
                  text: "Att deepfakes är omöjliga att göra",
                  correct: false,
                  feedback:
                    "Tvärtom — andra video-AI finns kvar och blir bättre. Sora var en av många.",
                },
              ],
            },
            {
              prompt: "Vilken är de vuxnas inställning till AGI 2026?",
              options: [
                {
                  text: "Alla forskare är överens om att AGI kommer 2027",
                  correct: false,
                  feedback:
                    "Tvärtom — forskare är DELADE. Det är just det som lektionen säger.",
                },
                {
                  text: "Forskare är delade — vissa varnar för AGI inom 1-3 år, andra säger aldrig",
                  correct: true,
                  feedback:
                    "Just det. I februari 2026 lämnade flera forskare OpenAI/xAI i protest — de tycker vi ska sakta ner. Andra håller inte med.",
                },
                {
                  text: "Alla tycker AGI är säkert",
                  correct: false,
                  feedback: "Inte alls — det är delade åsikter.",
                },
                {
                  text: "Alla forskare jobbar med AGI",
                  correct: false,
                  feedback: "Många AI-forskare gör helt annat. AGI är en specifik fråga.",
                },
              ],
            },
            {
              prompt: "Vad är slutsatsen för hela kursen?",
              options: [
                { text: "AI är farligt och vi bör vara rädda", correct: false, feedback: "Inte budskapet. Lektionen säger 'realistisk hoppfullhet'." },
                {
                  text:
                    "Framtiden byggs av människor genom val. Du är en av dem. Du har agens.",
                  correct: true,
                  feedback:
                    "Just det. Hela kursen leder hit. Du är inte maktlös konsument — du är medborgare och en av dem som formar framtiden.",
                },
                { text: "AI fixar allt — vi kan slappna av", correct: false, feedback: "Inte alls. Det här är teknooptimism — också fel." },
                {
                  text: "Bara vuxna kan göra något",
                  correct: false,
                  feedback:
                    "Tvärtom. Just därför du fått den här kursen — för att DU ska kunna göra något.",
                },
              ],
            },
            {
              prompt: 'Joel-citatet i kursens slut säger: "Du sitter inte här för att lära dig vara bättre än AI. Du sitter här för att lära dig vara mer ___."',
              options: [
                { text: "smart", correct: false, feedback: "Nej — fyll på." },
                { text: "snabb", correct: false, feedback: "Nej." },
                { text: "människa", correct: true, feedback: "Just det. Det är vad hela kursen handlat om: dina mänskliga superkrafter — granskning, omtanke, agens." },
                { text: "produktiv", correct: false, feedback: "Nej." },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Den allra sista reflektionen — en mening till dig själv"
          followups={[
            "Vad är den ENA insikt du tar med dig från kursen?",
            "Skriv den som om du skriver till dig själv om fem år.",
            "Spara den. Plocka fram den 2030.",
          ]}
        />

        <div
          className="my-10 rounded-xl border bg-[#0d1322] p-8 text-center"
          style={{ borderColor: lesson.accentHex }}
        >
          <p className="mb-3 text-2xl font-bold leading-relaxed text-white">
            Du har gått sju lektioner.
            <br />
            Du vet mer om AI än de flesta vuxna i Sverige.
          </p>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            Du är inte färdig att förstå AI — det blir vi aldrig. Tekniken
            förändras. Men du har <strong className="text-white">språk</strong>.
            Du har <strong className="text-white">verktyg</strong>. Du har{" "}
            <strong className="text-white">din egen syn</strong>.
          </p>
          <p className="mt-4 text-lg italic text-[#cbd5e1]">
            Det är vad bildning är. Inte att veta allt. Att vara <em>vaken</em>.
          </p>
          <p
            className="mt-6 text-xl font-bold"
            style={{ color: lesson.accentHex }}
          >
            Världen behöver dig. Lycka till.
          </p>
        </div>
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "AGI",
            forklaring:
              "Artificiell Generell Intelligens — AI som är lika smart som människan i allt. Finns inte än.",
          },
          {
            ord: "UBI",
            forklaring:
              "Universal Basic Income — grundinkomst till alla, om AI tar över jobben.",
          },
          {
            ord: "METR Time Horizon",
            forklaring:
              "Mätning av hur långa uppgifter AI kan göra själv. Dubblas var 7:e månad sedan 2019.",
          },
          {
            ord: "GDPval",
            forklaring:
              "OpenAI:s test mot riktiga jobb. 2026: AI presterar vid eller över expert på 70% av uppgifterna.",
          },
          {
            ord: "Benchmark",
            forklaring:
              "Mätning av hur bra olika AI-system är. Inte hype — riktiga siffror.",
          },
          {
            ord: "Agens",
            forklaring:
              "Att kunna välja. Att göra något som påverkar utfallet.",
          },
          {
            ord: "Demokrati",
            forklaring:
              "När folket bestämmer — genom röster, debatt, opinion.",
          },
          {
            ord: "Medborgare",
            forklaring:
              "Du. Inte bara konsument — också någon med röst och ansvar.",
          },
        ]}
      />
    </>
  );
}
