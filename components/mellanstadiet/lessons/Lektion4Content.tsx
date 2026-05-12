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
import { Hallucinationsjakten } from "@/components/mellanstadiet/Hallucinationsjakten";

export function Lektion4Content({ lesson }: { lesson: MellanstadietLesson }) {
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
        title="En väldigt övertygande gissningsmaskin"
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="Du har lärt dig hur AI fungerar. Du har använt den. Idag handlar det om en superkraft du behöver: att se när AI har fel."
      >
        <p>Det finns två sorters fel du måste lära dig att upptäcka:</p>
        <ol>
          <li>
            <strong>Hallucinationer</strong> — när AI hittar på saker som låter
            sant
          </li>
          <li>
            <strong>Deepfakes</strong> — när AI fejkar bilder eller videor av
            riktiga människor
          </li>
        </ol>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L4.1"]}
          caption="Two-panel: 'Will Smith eats spaghetti' (2023, ansikte smälter) vs Sora-genererad video (2026, fotorealistisk)"
          hint="Joel: stillbilder från båda för krokens visuella jämförelse"
          aspect="16/7"
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="Har du själv blivit lurad av en AI-bild eller AI-text?"
          followups={[
            "Var det på TikTok? I en chattbot? I en skoluppgift?",
            "När märkte du att det var fejk?",
            "Vad var tellet — vad fick dig att börja tvivla?",
          ]}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Hallucinationer — när AI hittar på"
        duration="18 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Du minns från lektion 2 att AI gissar baserat på mönster. Om mönstret
          inte finns — gissar den ändå. Och eftersom AI nästan alltid svarar{" "}
          <em>säkert</em>, kan du tro att den vet något som den faktiskt bara
          gissat.
        </p>

        <h3>Ett verkligt exempel — advokater som luras</h3>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L4.2"]}
          caption="Domstols-illustration eller dokument-mockup. '712 fall under 2025 där advokater lämnade in AI-hallucinerade citat'"
          hint="Joel: kanske en infografik med stora siffror"
          aspect="3/2"
        />

        <p>
          Under 2025 hände något konstigt: <strong>över 712 gånger</strong>{" "}
          lämnade advokater in juridiska dokument till domstol som var fyllda
          med saker AI hittat på. Inte gamla människor som inte fattar
          tekniken. <strong>Wall Street-advokater på världens dyraste
          advokatbyråer.</strong>
        </p>
        <p>
          Hur hände det? AI:n skrev citat som <em>lät</em> trovärdiga.
          &quot;Smith v. Jones, 2018, paragraf 47&quot; — låter rätt? Det är så
          domstolsfall ser ut. Men &quot;Smith v. Jones&quot; fanns inte. AI:n
          hade hittat på det.
        </p>
        <p>Och advokaterna <em>kontrollerade inte</em>.</p>

        <Citat accentHex={lesson.accentHex}>
          Lärdomen: även vuxna proffs luras. Det är inte ditt fel om du också
          gör det. Det är bara ditt ansvar att granska.
        </Citat>

        <h3>Sora-stängningen — april 2026</h3>

        <p>
          År <strong>2023</strong> kom den första virala AI-videon —{" "}
          <strong>&quot;Will Smith eats spaghetti&quot;</strong>. Den var
          konstig och rolig. Ingen trodde den var äkta.
        </p>
        <p>
          År <strong>september 2025</strong> släppte OpenAI en ny app som hette{" "}
          <strong>Sora</strong>. Plötsligt kunde vem som helst skapa videor som
          såg nästan äkta ut. Folk skapade videor av Michael Jackson — som
          varit död sedan 2009. Folk skapade fake-videor av immigrationskontroller.
          Miljontals tittare på TikTok luras av sånt här.
        </p>
        <p>
          I <strong>april 2026</strong> — bara för några veckor sedan —
          tvingades OpenAI att stänga ner Sora-appen helt. Det var första
          gången en så stor AI-app togs ner efter att människor protesterat.
        </p>
        <p>
          <strong>Men problemet är inte borta.</strong> Andra AI-video-verktyg
          finns kvar. Och de blir bättre varje månad.
        </p>

        <h3>Val-deepfakes 2025</h3>

        <p>De farligaste deepfakes är de som påverkar val:</p>

        <div className="my-6 grid gap-3">
          {[
            {
              place: "Kanada",
              date: "april 2025",
              what:
                "Fejk-video av politikern Mark Carney som 'rekommenderade' kryptobedrägeri. Över 1 miljon tittare.",
            },
            {
              place: "Rumänien",
              date: "maj 2025",
              what: "Fake-presidentkandidater i investeringsbedrägeri.",
            },
            {
              place: "Irland",
              date: "oktober 2025",
              what:
                "Fejk-video som visade att en presidentkandidat 'drog sig ur valet' — bara dagar innan röstning.",
            },
          ].map((c) => (
            <div
              key={c.place}
              className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-4"
            >
              <div className="ms-mono mb-1 text-rose-300">
                {c.place.toUpperCase()} · {c.date.toUpperCase()}
              </div>
              <p className="text-[var(--ms-text-body)]">{c.what}</p>
            </div>
          ))}
        </div>

        <p>
          I alla dessa fall — <strong>människor luras, demokratin skadas</strong>.
        </p>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Tänk om en deepfake släpps natten innan ett svenskt val…"
          prompts={[
            "Vad skulle du själv göra för att kolla om den är äkta?",
            "Vem kan man lita på under val? (Källkritikbyrån? SVT? något annat?)",
            "Borde tillgång till AI-video begränsas? Vem ska bestämma?",
          ]}
        />
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="Tre kontrollfrågor + prebunking"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>Tre frågor att alltid ställa</h3>
        <p>När du tittar på en bild, video, text eller AI-svar — fråga:</p>

        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              num: "1",
              q: "Vem säger detta?",
              h: "Källa",
              ex: "Är det en seriös tidning? En anonym TikTok-konto? Ett bot-konto?",
            },
            {
              num: "2",
              q: "Hur kan jag kolla själv?",
              h: "Verifiering",
              ex: "Sök på Wikipedia, fråga en lärare, leta efter samma sak från en oberoende källa.",
            },
            {
              num: "3",
              q: "Varför vill någon att jag tror det här?",
              h: "Motiv",
              ex: "Vill någon sälja något? Vinna en omröstning? Få dig att klicka?",
            },
          ].map((q) => (
            <div
              key={q.num}
              className="rounded-lg border bg-[var(--ms-bg-card)] p-5"
              style={{ borderColor: `${lesson.accentHex}40` }}
            >
              <div
                className="ms-mono mb-2 text-xs"
                style={{ color: lesson.accentHex }}
              >
                FRÅGA {q.num} · {q.h.toUpperCase()}
              </div>
              <div className="text-lg font-semibold text-[var(--ms-text)]">{q.q}</div>
              <p className="mt-2 text-sm text-[var(--ms-text-muted)]">{q.ex}</p>
            </div>
          ))}
        </div>

        <p>
          Det här är gammal källkritik. Den fungerar fortfarande. Den blir bara
          ännu viktigare med AI.
        </p>

        <h3>Hur du verifierar saker</h3>
        <p>
          Det räcker inte att fråga AI:n igen. Det är som att fråga någon
          &quot;ljög du nyss?&quot; — de säger nej.
        </p>
        <p>
          Du måste fråga <strong>en annan källa</strong>.
        </p>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">FÖR TEXT</div>
            <ul className="space-y-1 text-sm text-[var(--ms-text-body)]">
              <li>→ Wikipedia (åtminstone som start)</li>
              <li>→ Källkritikbyrån (kallakriker.se)</li>
              <li>→ En lärobok</li>
              <li>→ En lärare eller bibliotekarie</li>
              <li>→ Officiella sajter (skola, kommun, Skolverket)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--ms-border)] bg-[var(--ms-bg-card)] p-4">
            <div className="ms-mono mb-2 text-[var(--ms-text-muted)]">FÖR BILDER</div>
            <ul className="space-y-1 text-sm text-[var(--ms-text-body)]">
              <li>→ Google Lens — visa bilden, se var den finns på nätet</li>
              <li>→ Bing visuell sök</li>
              <li>→ Sök på bildens sammanhang</li>
              <li>→ Kontrollera att personen verkligen sa det</li>
            </ul>
          </div>
        </div>

        <h3>Prebunking: vaccin mot fejk</h3>

        <p>
          Forskare har upptäckt något coolt: om du <em>vet</em> hur
          fejk-information ser ut, <em>före</em> du möter det — luras du
          mindre.
        </p>
        <p>
          Det heter{" "}
          <Begrepp ord="prebunking">
            Förebyggande avslöjning. Att lära sig om fejk INNAN man möter det.
            Som vaccinering — om du sett ett virus en gång kan din kropp
            (eller hjärna) känna igen det nästa gång.
          </Begrepp>{" "}
          (&quot;förebyggande avslöjning&quot;). Tänk på det som{" "}
          <em>vaccinering</em>:
        </p>

        <Citat accentHex={lesson.accentHex}>
          Om du sett ett virus en gång — kan din kropp känna igen det nästa
          gång och slå ut det snabbt.
        </Citat>

        <p>
          Det är vad denna lektion gör. Vi <em>vaccinerar</em> dig genom att
          visa exempel. När du sedan möter en deepfake i verkligheten — kommer
          du känna igen den.
        </p>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Be AI om något lokalt — och granska"
          prompt="Berätta om [din skola/förenings/lokala park] och dess historia. Var specifik med årtal, namn på människor och händelser."
          observation="AI känner ofta inte till lokala detaljer. Vad kommer den att säga? Notera ALLA specifika namn och årtal i svaret. Sök sedan på minst tre av dem — finns de? Det här är ett exempel på hur snabbt hallucinationer uppstår."
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — vad är prebunking?"
          question={{
            prompt:
              "Du sitter på TikTok och möter en chockerande deepfake. Vad är 'prebunking' enligt lektionen?",
            options: [
              {
                text: "Att rapportera videon till TikTok",
                correct: false,
                feedback:
                  "Bra att rapportera — men det är inte prebunking. Prebunking handlar om vad som händer INNAN du möter fejket.",
              },
              {
                text: "Att i förväg ha lärt sig hur deepfakes ser ut, så du känner igen dem snabbare",
                correct: true,
                feedback:
                  "Just det. Som ett vaccin — du har sett ett 'virus' förut, så hjärnan känner igen det.",
              },
              {
                text: "Att bara titta på seriösa kanaler",
                correct: false,
                feedback:
                  "En bra strategi — men inte prebunking. Prebunking handlar om aktiv träning, inte passiv undvikning.",
              },
              {
                text: "Att fråga ChatGPT om videon är fejk",
                correct: false,
                feedback:
                  "AI är inte ett pålitligt verifieringsverktyg — och det är inte prebunking i alla fall.",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Hallucinationsjakten"
        duration="25 min"
        accentHex={lesson.accentHex}
        intro="Nu provar du själv. Här är AI-genererade texter med både sanna och påhittade fakta. Klicka på de meningar du tror är hallucinerade. Du ser facit + förklaring efteråt."
      >
        <Hallucinationsjakten accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["hallucination-rally", "ai-eller-manniska"]}
          intro="Vill du testa hur snabbt du klarar det? Hallucination-rally tar samma idé och gör det till en 90-sekunders arkadupplevelse."
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Egen praktik — granska din L3-uppgift"
        duration="20 min"
        accentHex={lesson.accentHex}
      >
        <p>
          I lektion 3 använde du Tänkartrappan för en riktig uppgift. Hade AI
          rätt om allt?
        </p>
        <p>
          Ta fram din dokumentation från L3. Granska AI:s svar mot{" "}
          <strong>tre kontrollfrågor</strong>:
        </p>

        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            { num: "1", q: "Vem säger detta?", a: "I detta fall: AI. Vad har AI för 'källa'? Den har bara sina mönster — inga riktiga källor." },
            { num: "2", q: "Hur kan jag kolla själv?", a: "Välj minst ett påstående i AI:s svar. Sök på Wikipedia, fråga din lärare, läs i en bok." },
            { num: "3", q: "Varför skulle AI hitta på just detta?", a: "AI fyller i 'rimliga' detaljer för att svaret ska låta proffsigt. Det är ofta i siffror, namn och årtal du hittar hallucinationer." },
          ].map((q) => (
            <div
              key={q.num}
              className="rounded-lg border bg-[var(--ms-bg-card)] p-4"
              style={{ borderColor: `${lesson.accentHex}40` }}
            >
              <div className="ms-mono mb-1" style={{ color: lesson.accentHex }}>
                FRÅGA {q.num}
              </div>
              <div className="font-semibold text-[var(--ms-text)]">{q.q}</div>
              <p className="mt-1 text-sm text-[var(--ms-text-body)]">{q.a}</p>
            </div>
          ))}
        </div>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Be AI granska sig själv (försiktigt!)"
          prompt="Här är ett svar du gav mig tidigare: [klistra in AI:s tidigare svar]. Granska det kritiskt: vilka påståenden kan vara hallucinerade? Vilka är väl etablerade?"
          observation="AI är dålig på att granska sig själv eftersom den inte 'minns' vad den sagt och inte vet vad som är sant. Ta dess granskning med en NYPA SALT — och verifiera mot oberoende källa."
        />

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Jämför era L3-uppgifter och hallucinationer ni hittade"
          prompts={[
            "Hade AI:n hittat på något i båda era uppgifter?",
            "I vilka delar av svaret? (siffror? namn? årtal?)",
            "Hade ni märkt det utan att granska — eller såg det 'rätt' ut?",
          ]}
        />
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Granskning är vår superkraft"
        duration="7 min"
        accentHex={lesson.accentHex}
      >
        <Citat accentHex={lesson.accentHex}>
          AI är en väldigt övertygande gissningsmaskin. Aldrig en
          sanningsmaskin.
          <br />
          <br />
          Granskning är vår superkraft.
        </Citat>

        <p>Tre frågor att alltid ställa:</p>
        <ol>
          <li>
            <strong>Vem säger detta?</strong>
          </li>
          <li>
            <strong>Hur kan jag kolla själv?</strong>
          </li>
          <li>
            <strong>Varför vill någon att jag tror det här?</strong>
          </li>
        </ol>

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L4"
          questions={[
            {
              prompt: "Vad är en hallucination i AI-sammanhang?",
              options: [
                { text: "När AI får en bugg och slutar fungera", correct: false, feedback: "Nej — det är ett tekniskt fel. Hallucinationer händer när AI fungerar 'normalt'." },
                { text: "När AI hittar på fakta som låter sanna men inte är det", correct: true, feedback: "Just det. AI gissar baserat på mönster. När det inte finns ett mönster som matchar gissar den ändå — och låter alltid säker." },
                { text: "När AI ser bilder som inte finns", correct: false, feedback: "AI 'ser' inte alls. Hallucinationer är ett begrepp om text-AI som hittar på fakta." },
                { text: "När AI börjar drömma", correct: false, feedback: "AI drömmer inte — den är inte ens vaken. Det är ett antropomorfistiskt missförstånd." },
              ],
            },
            {
              prompt: "Vad är prebunking?",
              options: [
                { text: "Att avslöja en lögn EFTER den spridits", correct: false, feedback: "Det är 'debunking'. Prebunking är något annat — det händer FÖRE." },
                { text: "Att i förväg lära sig hur fejk ser ut, så man känner igen det snabbt när man möter det", correct: true, feedback: "Rätt. Som vaccinering — du har sett 'viruset' förut och hjärnan reagerar snabbare." },
                { text: "Att blockera fejkkonton på sociala medier", correct: false, feedback: "Bra strategi men inte prebunking. Prebunking är aktiv mental träning, inte passiv blockering." },
                { text: "Att alltid lita på AI:s första svar", correct: false, feedback: "Tvärtom! Prebunking handlar om att inte automatiskt lita på något." },
              ],
            },
            {
              prompt: "Hände det verkligen att advokater använde AI och fick problem?",
              options: [
                { text: "Nej, det är en pedagogisk skämthistoria", correct: false, feedback: "Det är på riktigt. Över 712 fall under 2025." },
                { text: "Ja, över 712 fall under 2025 där AI-hallucinerade citat lämnades in till domstol", correct: true, feedback: "Just det. Inte småaktörer — Wall Street-advokater. Det visar hur övertygande hallucinationer är." },
                { text: "Bara ett fall i USA", correct: false, feedback: "Mycket fler — över 712 dokumenterade under 2025." },
                { text: "Ja, men bara med kostnadsfri AI", correct: false, feedback: "Hallucinationer drabbar alla AI — också de dyraste och bästa modellerna." },
              ],
            },
            {
              prompt: "Är det säkert att fråga AI:n igen för att kontrollera om den hade rätt?",
              options: [
                { text: "Ja — om man frågar 'är detta sant?' så säger AI sanningen", correct: false, feedback: "Nej. AI:n har inget sätt att veta om sina egna svar är sanna. Den gissar igen." },
                { text: "Nej — du måste fråga en oberoende källa", correct: true, feedback: "Rätt. Det är som att fråga någon 'ljög du nyss?' — de säger nej. Du behöver en oberoende källa: Wikipedia, lärare, lärobok, etc." },
                { text: "Ja, om du frågar tre gånger", correct: false, feedback: "AI:n kan upprepa samma hallucination flera gånger — det blir inte sannare av att frågas igen." },
                { text: "Bara om du betalar för Pro-versionen", correct: false, feedback: "Pris ändrar inte att AI inte vet vad som är sant — den gissar." },
              ],
            },
            {
              prompt: "Vilken är den BÄSTA strategin när du möter AI-text eller AI-bilder?",
              options: [
                { text: "Lita på det som ser proffsigt ut", correct: false, feedback: "AI-text och AI-bilder ser ALLTID proffsiga ut — det är just det som är problemet." },
                { text: "Tre kontrollfrågor: Vem säger? Hur kollar jag? Varför vill någon att jag tror?", correct: true, feedback: "Just det. Tre frågor som funkar oavsett om det är AI eller människa, oavsett om det är text, bild eller video." },
                { text: "Skickа vidare till alla mina vänner och se vad de tycker", correct: false, feedback: "Då sprider du eventuell fejk vidare. Granska FÖRST." },
                { text: "Bara titta på röst-AI", correct: false, feedback: "Röst kan också fejkas. Inget medium är säkert." },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Beskriv när du nästa gång ska använda 'tre kontrollfrågor' i ditt liv."
          followups={[
            "Vilken situation? (sociala medier? skolarbete? nyheter?)",
            "Vad är det första du ska kolla?",
            "Vem skulle du fråga om du var osäker?",
          ]}
        />
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "Hallucination",
            forklaring:
              "När AI hittar på fakta som låter sant men inte är det.",
          },
          {
            ord: "Deepfake",
            forklaring:
              "AI-genererad bild, video eller röst av en riktig person.",
          },
          {
            ord: "Källkritik",
            forklaring:
              "Att granska vem som säger något, när och varför.",
          },
          {
            ord: "Verifiera",
            forklaring:
              "Att kolla något mot en annan källa för att se om det stämmer.",
          },
          {
            ord: "Prebunking",
            forklaring:
              "Vaccinering — att lära sig om fejk innan man möter det.",
          },
          {
            ord: "Triangulera",
            forklaring:
              "Att hitta tre oberoende källor som bekräftar samma sak.",
          },
          {
            ord: "Reverse image search",
            forklaring:
              "Att söka på en bild för att se var den först dök upp.",
          },
          {
            ord: "Källkritikbyrån",
            forklaring:
              "Svensk myndighet som hjälper med medie- och informationskunnighet.",
          },
        ]}
      />
    </>
  );
}
