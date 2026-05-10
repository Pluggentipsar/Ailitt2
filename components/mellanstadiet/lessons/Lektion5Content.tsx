import { MellanstadietLesson } from "@/lib/mellanstadiet-data";
import { Sektion } from "@/components/mellanstadiet/Sektion";
import { Citat } from "@/components/mellanstadiet/Citat";
import { Begrepp } from "@/components/mellanstadiet/Begrepp";
import { Quiz } from "@/components/mellanstadiet/Quiz";
import { BegreppsBank } from "@/components/mellanstadiet/BegreppsBank";
import { SpelCallout } from "@/components/mellanstadiet/SpelCallout";
import { PlaceholderImage } from "@/components/mellanstadiet/PlaceholderImage";
import { ReflectionPrompt } from "@/components/mellanstadiet/ReflectionPrompt";
import { PravaMedAI } from "@/components/mellanstadiet/PravaMedAI";
import { DiskutteraBlock } from "@/components/mellanstadiet/DiskutteraBlock";
import { SammanfattningsQuiz } from "@/components/mellanstadiet/SammanfattningsQuiz";
import { TreEtiskaFragor } from "@/components/mellanstadiet/TreEtiskaFragor";
import { DilemmaSpelet } from "@/components/mellanstadiet/DilemmaSpelet";
import { DarkPatternDetective } from "@/components/mellanstadiet/DarkPatternDetective";
import { AiOverenskommelse } from "@/components/mellanstadiet/AiOverenskommelse";

export function Lektion5Content({ lesson }: { lesson: MellanstadietLesson }) {
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
        title="Är det fusk?"
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="Snabb fråga: är det fusk att låta AI skriva läxan?"
      >
        <p>Du tänker säkert ett av dessa:</p>

        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            { v: "JA", reason: "för läraren bedömer ditt arbete" },
            { v: "NEJ", reason: "för AI är bara ett verktyg" },
            {
              v: "BEROR PÅ",
              reason: "fråga om hjälp ≠ låta AI skriva allt",
            },
            { v: "VET INTE", reason: "för det är komplicerat" },
          ].map((opt) => (
            <div
              key={opt.v}
              className="rounded-lg border bg-[#1a2235] p-4"
              style={{ borderColor: `${lesson.accentHex}40` }}
            >
              <div
                className="ms-mono mb-1"
                style={{ color: lesson.accentHex }}
              >
                {opt.v}
              </div>
              <p className="text-[#cbd5e1]">{opt.reason}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Alla svar är rimliga.</strong> Det är just därför detta är{" "}
          <Begrepp ord="etik">
            Frågor om vad som är rätt och fel — där människor kan ha olika
            åsikter och måste prata för att komma framåt. Inte 'lagar' utan
            samtal.
          </Begrepp>{" "}
          — frågor där människor kan ha olika åsikter och måste prata för att
          komma framåt.
        </p>
        <p>
          Den här lektionen handlar inte om att ge dig &quot;rätt svar&quot;.
          Den handlar om att lära dig <strong>fråga rätt frågor</strong>.
        </p>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="Vart ställde du dig — JA, NEJ, BEROR PÅ eller VET INTE?"
          followups={[
            "Varför just det svaret?",
            "Vilket av de andra svaren tycker du är näst närmast?",
            "Vad skulle få dig att ändra åsikt?",
          ]}
        />

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="helklass"
          question="Fyra hörn i klassrummet — gå dit ditt svar är"
          prompts={[
            "JA, NEJ, BEROR PÅ, VET INTE — välj ett hörn.",
            "Diskutera 5 min med dem som står i samma hörn.",
            "Tre starka argument från varje hörn — säg högt.",
            "Får ni byta hörn under diskussionen? (Ja, det är poängen.)",
          ]}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Etiska problem just nu"
        duration="18 min"
        accentHex={lesson.accentHex}
      >
        <h3>Roblox och barnsäkerhet</h3>

        <PlaceholderImage
          caption="Roblox-logotyp + karta över USA-delstater som stämt: Florida, Texas, Nebraska, Tennessee, LA County (feb 2026)"
          hint="Joel: kanske en infografik med stämningarnas tidslinje"
          aspect="3/2"
        />

        <p>
          Du känner Roblox. Sedan <strong>2025</strong> har många amerikanska
          delstater stämt företaget Roblox: Florida, Texas, Nebraska, Tennessee
          — och Los Angeles County i februari 2026. Anklagelsen: Roblox
          marknadsför sig som <em>säkert för barn</em>, men har inte
          tillräckliga skydd mot vuxna som söker upp barn.
        </p>
        <p>
          Roblox har börjat ändra sig. Sedan <strong>januari 2026</strong>{" "}
          måste användare göra ansiktsverifiering för att chatta. Frågan
          kvarstår: räcker det?
        </p>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Vem ansvarar när Roblox inte är säkert?"
          prompts={[
            "Företaget Roblox? De byggde och tjänar på det.",
            "Föräldrarna? De gav tillgång.",
            "Spelarna? De kunde valt annat.",
            "Politiker? De kunde stiftat strängare lagar.",
            "Vad är ert svar?",
          ]}
        />

        <h3>Snapchat och My AI</h3>

        <p>
          Den <strong>30 juni 2025</strong> stämde delstaten Utah Snap, som
          äger Snapchat. Anklagelsen handlar om My AI:
        </p>
        <ul>
          <li>
            Den är <strong>förinstallerad högst upp</strong> i din chatt —{" "}
            <em>före</em> dina riktiga vänner
          </li>
          <li>
            Den <strong>kan inte tas bort</strong>
          </li>
          <li>
            Den samlar <strong>var du är</strong> även när &quot;Ghost
            Mode&quot; är på
          </li>
          <li>
            Snap framställde plattformen som <em>säker</em> — fast internt
            visste de om risker
          </li>
        </ul>

        <h3>AI och miljön — den dolda kostnaden</h3>

        <p>
          Något du kanske inte tänkt på: varje gång du frågar ChatGPT använder
          AI:n <strong>ungefär 10 gånger mer el</strong> än en Google-sökning.
        </p>

        <PlaceholderImage
          caption="Stort siffervisualisering: '720 miljarder gallons vatten årligen för AI-kylning = 18 miljoner hushåll'"
          hint="Joel: enkel infografik med dramatiska siffror"
          aspect="16/7"
        />

        <p>
          Och alla AI-datacenter tillsammans kräver{" "}
          <strong>720 miljarder gallons vatten årligen</strong> för kylning.
          Det är som vad <strong>18 miljoner hushåll</strong> behöver.
        </p>
        <p>
          Och människor som bor nära datacenter har{" "}
          <strong>upp till 267% högre elkostnader</strong> än för 5 år sedan.
        </p>

        <h3>En glimt av hopp — SAG-AFTRA</h3>

        <p>
          Allt är inte mörker. I <strong>juli 2025</strong> vann skådespelarfacket
          SAG-AFTRA en stor strejk. Efter 11 månader fick de igenom:
        </p>
        <ul>
          <li>
            Skådespelare måste <em>säga ja</em> innan AI får göra digitala
            kopior av dem
          </li>
          <li>
            Skådespelare får <em>säga nej</em> under en strejk
          </li>
          <li>Höjningar i ersättning</li>
        </ul>

        <Citat accentHex={lesson.accentHex}>
          Människor som står tillsammans kan vinna mot stora företag.
        </Citat>
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="Tre etiska frågor + vem ansvarar?"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>Tre etiska frågor</h3>
        <p>
          När du ska bestämma något kring AI, ställ dig dessa tre frågor. De
          hjälper dig tänka klart.
        </p>

        <TreEtiskaFragor accentHex={lesson.accentHex} />

        <h3>Dark patterns — när design lurar dig</h3>

        <p>
          Har du någonsin trillat på något i en app — och tänkt &quot;vänta,
          det vill jag inte&quot;?
        </p>
        <p>
          Det är troligen ett{" "}
          <Begrepp ord="dark pattern">
            Design som AVSIKTLIGT lurar dig att göra något du inte tänkt göra.
            Tidspress, gömda knappar, förkryssade rutor, social press. Designern
            vet vad de gör.
          </Begrepp>
          .
        </p>

        <h3>Verkligt fall: Fortnite (Epic Games)</h3>

        <p>
          År <strong>2022 fick Fortnite-skaparen Epic Games böter på 520
          miljoner dollar</strong>. För vad? För att de använde dark patterns:
        </p>
        <ul>
          <li>Förvirrande knappar fick barn att råka köpa V-Bucks</li>
          <li>Det var lätt att råka aktivera prenumerationer</li>
          <li>Det var svårt att få pengar tillbaka</li>
        </ul>
        <p>Stora delar av pengarna gick till barn och föräldrar som drabbats.</p>

        <h3>Vem ansvarar?</h3>

        <p>När något går fel — vem är det som ska göra något?</p>

        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {[
            { who: "FÖRETAGET", does: "designar och tjänar pengar" },
            { who: "ANVÄNDAREN", does: "väljer att använda" },
            { who: "FÖRÄLDRARNA", does: "ger eller nekar tillgång" },
            { who: "SKOLAN", does: "lär ut kritiskt tänkande" },
            { who: "POLITIKERNA", does: "skriver lagar" },
            { who: "SAMHÄLLET", does: "röstar och pratar" },
          ].map((r) => (
            <div
              key={r.who}
              className="rounded-lg border border-[#243248] bg-[#1a2235] p-4"
            >
              <div
                className="ms-mono"
                style={{ color: lesson.accentHex }}
              >
                {r.who}
              </div>
              <p className="text-sm text-[#cbd5e1]">{r.does}</p>
            </div>
          ))}
        </div>

        <Citat accentHex={lesson.accentHex}>
          Etik handlar INTE om att hitta en skyldig. Det handlar om att FLERA
          har ansvar — och alla behöver göra sin del.
        </Citat>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Be AI argumentera för båda sidor"
          prompt="Ge mig två argument FÖR och två argument MOT att låta AI skriva läxor i skolan. Behandla båda sidor lika seriöst."
          observation="Märker du om AI lutar åt en sida? Har AI en åsikt — eller speglar den bara internets samlade röst? Diskutera med en kompis: är AI:s lista 'objektiv'?"
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — vad är ett dark pattern?"
          question={{
            prompt:
              "Du försöker avsluta en prenumeration. Sajten visar en stor grön 'Stanna kvar'-knapp och en liten grå länk 'avsluta ändå' längst ner. Vad är detta?",
            options: [
              {
                text: "Bra design — det är tydligt vad som rekommenderas",
                correct: false,
                feedback:
                  "Tvärtom. Att ena valet är stort och grönt och det andra litet och grått är manipulativt. Vad du EGENTLIGEN kom för att göra är gömt.",
              },
              {
                text: "Ett dark pattern — designat för att få dig att klicka på 'stanna kvar' av misstag",
                correct: true,
                feedback:
                  "Just det. Asymmetrisk knappdesign + gömd huvudfunktion. Designern vet vad de gör.",
              },
              {
                text: "Olagligt — företaget kan stämmas",
                correct: false,
                feedback:
                  "Ibland leder det till stämningar (Epic Games 2022, Snap 2025). Men inte alltid olagligt — bara manipulativt.",
              },
              {
                text: "Ett tekniskt fel hos webbläsaren",
                correct: false,
                feedback:
                  "Inte alls — det är avsiktlig design. Företaget tjänar pengar på att du stannar kvar.",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Dilemma-spelet + Dark Pattern Detective"
        duration="25 min"
        accentHex={lesson.accentHex}
        intro="Nu provar du själv. Först: åtta etiska dilemman där du måste välja. Sedan: hitta dark patterns i två UI-mockups."
      >
        <DilemmaSpelet accentHex={lesson.accentHex} />

        <DarkPatternDetective accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["bias-detektiven"]}
          intro="Vill du fortsätta utforska AI:s bakgrund? Bias-detektiven är en undersökning i tre verkliga fall."
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Klassens AI-överenskommelse"
        duration="20 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Nu skapar klassen <strong>tillsammans</strong> en överenskommelse —
          gemensamma regler för hur AI används i ert klassrum.
        </p>
        <p>
          Det är inte regler som läraren bestämmer åt er. Det är regler ni
          skapar tillsammans. Och som ni själva står bakom.
        </p>
        <p>
          <strong>Tänk:</strong> vad vill <em>du</em> att din klass ska tycka
          om AI-användning?
        </p>

        <AiOverenskommelse accentHex={lesson.accentHex} />

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="helklass"
          question="När ni skapat överenskommelsen — bekräfta tillsammans"
          prompts={[
            "Är det här regler vi alla kan stå bakom?",
            "Är det något som saknas?",
            "Är det någon regel någon vill ta bort?",
            "När ska vi titta på den igen — om en månad? En termin?",
          ]}
        />
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Du har agens. Du bestämmer."
        duration="7 min"
        accentHex={lesson.accentHex}
      >
        <Citat accentHex={lesson.accentHex}>
          AI är inte ond. Men den är inte heller god. Den är ett verktyg som
          människor designat med vissa mål.
          <br />
          <br />
          Du har agens — du bestämmer.
        </Citat>

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L5"
          questions={[
            {
              prompt:
                "Vad är de tre etiska frågorna att ställa sig kring AI-användning?",
              options: [
                {
                  text: "Är det snabbt? Är det billigt? Är det enkelt?",
                  correct: false,
                  feedback:
                    "Det är effektivitetsfrågor — inte etik. Etik handlar om vad som är rätt, inte vad som är effektivt.",
                },
                {
                  text: "Är det ärligt? Lär jag mig något? Är det snällt mot andra?",
                  correct: true,
                  feedback:
                    "Just det. Tre korta frågor — men de fångar nästan all etik kring AI.",
                },
                {
                  text: "Är det lagligt? Är det vanligt? Är det populärt?",
                  correct: false,
                  feedback:
                    "Det är inte etik. Lagligt eller populärt betyder inte samma sak som etiskt.",
                },
                {
                  text: "Är AI smart? Är AI snäll? Är AI snabb?",
                  correct: false,
                  feedback:
                    "Frågorna handlar om DIG och dina val — inte om AI:n.",
                },
              ],
            },
            {
              prompt: "Vad är ett 'dark pattern'?",
              options: [
                {
                  text: "Mörkt tema i en app",
                  correct: false,
                  feedback:
                    "Nej — det är 'dark mode' (mörkt läge). Dark pattern är något helt annat.",
                },
                {
                  text: "Design som avsiktligt lurar dig att göra något du inte tänkt göra",
                  correct: true,
                  feedback:
                    "Just det. Tidspress, gömda knappar, förkryssade rutor — designern vet exakt vad de gör.",
                },
                {
                  text: "Ett tekniskt fel som syns sällan",
                  correct: false,
                  feedback:
                    "Inte alls — dark patterns är AVSIKTLIGA, inte fel.",
                },
                {
                  text: "Regnigt väder i ett spel",
                  correct: false,
                  feedback:
                    "Nej — det är ett designbegrepp om manipulation, inte om visuell stil.",
                },
              ],
            },
            {
              prompt:
                "Hur mycket mer el drar ett ChatGPT-svar jämfört med en Google-sökning?",
              options: [
                { text: "Lika mycket", correct: false, feedback: "Mycket mer än så." },
                {
                  text: "Ungefär 10× så mycket",
                  correct: true,
                  feedback:
                    "Just det. Det är därför AI-användning får en miljöpåverkan om man ofta använder den för triviala frågor.",
                },
                {
                  text: "Mindre, för AI är effektivare",
                  correct: false,
                  feedback:
                    "Nej — AI är beräkningstung. Den drar mer el, inte mindre.",
                },
                {
                  text: "Tusen gånger mer",
                  correct: false,
                  feedback:
                    "Inte så mycket. ~10× är siffran enligt AI-energi-rapporter 2025.",
                },
              ],
            },
            {
              prompt: "Vem har ansvar när AI går fel?",
              options: [
                {
                  text: "Bara företaget som byggde det",
                  correct: false,
                  feedback:
                    "Företaget har ansvar — men inte ENDAST. Flera nivåer har ansvar.",
                },
                {
                  text: "Bara användaren — för de valde att använda",
                  correct: false,
                  feedback:
                    "Användaren har ansvar — men inte ENDAST. Företag som lurar är också ansvariga.",
                },
                {
                  text: "Flera tillsammans — företaget, användaren, föräldrar, skola, politiker, samhället",
                  correct: true,
                  feedback:
                    "Just det. Etik handlar inte om att hitta en skyldig — det handlar om att flera har ansvar och alla behöver göra sin del.",
                },
                {
                  text: "Ingen — det är AI:s fel",
                  correct: false,
                  feedback:
                    "AI har ingen vilja, ingen agens — den kan inte 'ta ansvar'. Det måste människor göra.",
                },
              ],
            },
            {
              prompt: "Vad säger Joels mening om AI och dig?",
              options: [
                {
                  text: "AI är farlig och bör förbjudas",
                  correct: false,
                  feedback: "Inte alls — det är inte budskapet i lektionen.",
                },
                {
                  text: "AI är ond — människor måste skydda sig",
                  correct: false,
                  feedback:
                    "Nej. AI är 'inte ond'. Den är ett verktyg människor designat.",
                },
                {
                  text: "AI är inte ond, inte god — den är ett verktyg människor designat. Du har agens — du bestämmer.",
                  correct: true,
                  feedback:
                    "Just det. Det viktigaste är att du har MAKT. AI är inte en kraft du måste lyda — den är ett val.",
                },
                {
                  text: "AI är magisk och oövervinnerlig",
                  correct: false,
                  feedback:
                    "AI är inte magisk. Det är teknik människor designat — och som människor kan välja att ändra.",
                },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Etisk dagbok — ditt uppdrag tills nästa lektion"
          followups={[
            "Dokumentera tre AI-val du gör den här veckan.",
            "För varje: var det ärligt? Lärde du dig något? Var det snällt mot andra?",
            "Skulle du gjort något annorlunda?",
          ]}
        />
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "Etik",
            forklaring:
              "Frågor om vad som är rätt och fel — där människor kan ha olika åsikter.",
          },
          {
            ord: "Ansvar",
            forklaring: "Vem som ska göra något när något händer.",
          },
          {
            ord: "Dark pattern",
            forklaring: "Design som lurar dig att göra något du inte vill.",
          },
          {
            ord: "Agens",
            forklaring:
              "Att kunna välja — att göra något som påverkar utfallet.",
          },
          {
            ord: "Reglering",
            forklaring:
              "Regler/lagar som politiker skriver för att styra företag.",
          },
          {
            ord: "Tillsynsmyndighet",
            forklaring:
              "Myndighet som bevakar att företag följer reglerna (FTC i USA, EU AI Act).",
          },
          {
            ord: "Konsumentskydd",
            forklaring:
              "Lagar som skyddar dig som köper saker — också mot dark patterns.",
          },
          {
            ord: "Sycophancy",
            forklaring:
              "När AI håller med dig oavsett vad du säger — designat för engagemang.",
          },
        ]}
      />
    </>
  );
}
