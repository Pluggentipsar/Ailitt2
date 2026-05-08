import { MellanstadietLesson } from "@/lib/mellanstadiet-data";
import { Sektion } from "@/components/mellanstadiet/Sektion";
import { Citat } from "@/components/mellanstadiet/Citat";
import { Begrepp } from "@/components/mellanstadiet/Begrepp";
import { Quiz } from "@/components/mellanstadiet/Quiz";
import { MonsterLabbet } from "@/components/mellanstadiet/MonsterLabbet";
import { BegreppsBank } from "@/components/mellanstadiet/BegreppsBank";
import { SpelCallout } from "@/components/mellanstadiet/SpelCallout";

export function Lektion2Content({ lesson }: { lesson: MellanstadietLesson }) {
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
        title='Det var en gång en…'
        duration="8 min"
        accentHex={lesson.accentHex}
        intro="I förra lektionen pratade vi om historien. Idag ska vi förstå hur AI faktiskt fungerar — och här kommer det konstiga."
      >
        <Citat accentHex={lesson.accentHex}>AI tänker inte.</Citat>

        <p>
          Det är sant. ChatGPT, Snap AI, Google Translate — ingen av dem
          tänker. Ingen av dem <em>vet</em> något. De känner inga känslor. De
          har inga åsikter.
        </p>
        <p>
          Men de svarar på frågor. De skriver texter. De skapar bilder. De
          vinner i schack.
        </p>
        <p>
          <strong>Hur kan något som inte tänker ändå verka så smart?</strong>
        </p>
        <p>
          Svaret är: <strong>mönster</strong>.
        </p>
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Tre saker som hände på riktigt"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>Det Amazon-byggde och tvingades skrota</h3>
        <p>
          Företaget Amazon (de som säljer allt på nätet) byggde 2014 ett
          AI-system som skulle läsa CV och välja ut bra jobbsökanden. De tränade
          AI:n på 10 år av tidigare anställningar.
        </p>
        <p>
          Det visade sig att Amazon — som de flesta tekniska företag — hade
          anställt mest <em>män</em> under de 10 åren. Så AI:n lärde sig:
        </p>
        <Citat accentHex={lesson.accentHex}>
          Bra CV = CV som ser ut som de män som anställts.
        </Citat>
        <p>
          Och så började den straffa CV som nämnde ord som <em>kvinna</em>.
          Hade du varit med i &quot;kvinnornas schackklubb&quot;? Minus poäng.
          År 2018 var Amazon tvungna att skrota AI:n.
        </p>
        <p>
          <strong>
            Men AI:n var inte elak. Ingen programmerare hatade kvinnor. AI:n
            hade bara lärt sig mönstret som fanns i datan.
          </strong>
        </p>

        <h3>Mönster ni alla redan känner</h3>
        <p>
          Du känner igen mönster hela tiden. Tigerns ränder. Smileysarna i din
          mobil. Hur Spotify gissar vilken låt du vill höra härnäst. Hur TikTok
          visar precis det där klippet du behövde se.
        </p>
        <p>
          AI är extremt bra på en sak:{" "}
          <strong>att hitta mönster i enorma mängder data</strong>.
        </p>

        <h3>Hur många ord har ChatGPT &quot;läst&quot;?</h3>
        <p>
          För att gissa bra måste AI ha sett <em>jättemycket</em>. Det heter{" "}
          <Begrepp ord="träningsdata">
            All information AI har lärt sig av. För moderna AI: stora delar av
            internet — Wikipedia, böcker, forum, kod, nyhetsartiklar.
          </Begrepp>
          .
        </p>
        <p>
          ChatGPT är tränad på storleksordningen <strong>13 biljoner ord</strong>.
          Det är 13 000 miljarder ord.
        </p>
        <p>
          För perspektiv: en mellanstadieelev läser kanske 1 miljon ord per år.
          Det skulle ta en människa <strong>13 miljoner år</strong> att läsa
          lika mycket som ChatGPT lärt sig av.
        </p>
        <p>
          Det är därför AI verkar veta så mycket. Den har sett otroligt mycket.
        </p>
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="Mönster, träningsdata och bias"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <h3>Hur ChatGPT egentligen funkar</h3>
        <p>Tänk på detta — det är så ChatGPT funkar:</p>
        <p>
          I miljarder texter på internet kommer ordet &quot;varm&quot; ofta efter
          ordet &quot;soppan är&quot;. Inte alltid. Men ofta. AI:n har lärt sig:
          när folk skriver &quot;soppan är ___&quot;, så är &quot;varm&quot;
          eller &quot;god&quot; eller &quot;het&quot; <em>troligen</em> nästa
          ord.
        </p>
        <p>
          ChatGPT gissar inte ett <em>bra</em> svar. Den gissar det{" "}
          <em>vanligaste</em> svaret. Eller det <em>mest sannolika</em>.
        </p>
        <p>
          Det är ett mönster. Du som människa har också mönster — du säger ofta
          &quot;hej&quot; när du möter någon. Men du <em>vet</em> varför du
          säger det. AI bara gissar att det är vad man brukar göra.
        </p>

        <h3>Men data är inte rättvist</h3>
        <p>Här kommer den viktigaste poängen i hela lektionen.</p>
        <Citat accentHex={lesson.accentHex}>
          Allt som finns på internet är skrivet av människor. I en viss tid. På
          en viss plats. Av vissa människor — och inte andra.
        </Citat>
        <p>
          Det betyder att träningsdatan är <em>skev</em>. Den speglar världen —
          och världen är inte rättvis.
        </p>
        <p>
          Detta heter{" "}
          <Begrepp ord="bias">
            Snedvridning. När AI:s svar är skeva för att datan var skev. Uttalas
            &quot;byass&quot;.
          </Begrepp>{" "}
          (uttalas &quot;byass&quot;). På svenska kan man säga{" "}
          <em>snedvridning</em>.
        </p>

        <h3>Bias är inte ondska</h3>
        <p>
          Många tror att om ett AI-system är bias så betyder det att någon{" "}
          <em>vill</em> att det ska vara orättvis. Så är det inte.
        </p>
        <Citat accentHex={lesson.accentHex}>
          Bias är data som kommer in.
        </Citat>
        <p>
          Om du bara visar AI bilder på <em>vita</em> katter och <em>bruna</em>{" "}
          hundar, kommer den att tro att en <em>svart</em> katt är en hund. Den
          är inte rasistisk. Den har bara aldrig sett en svart katt.
        </p>
        <p>
          Om bilder på &quot;läkare&quot; på internet mest visar äldre vita
          män, så kommer AI rita en äldre vit man när du säger
          &quot;läkare&quot;. Inte för att andra inte är läkare — utan för att
          det är de bilder den har sett.
        </p>
        <p>
          <em>Bias är inte AI:s fel. Det är data:ns problem. Och därmed vårt
          problem.</em>
        </p>

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — bias i 30 sekunder"
          question={{
            prompt:
              "Du tränar en AI på 1000 bilder av hundar — alla bruna. Sedan visar du den en svart katt. Vad gissar AI:n?",
            options: [
              {
                text: "Katt — eftersom den känner igen kattegenskaper",
                correct: false,
                feedback:
                  "Inte säkert. AI har bara sett bruna djur i sin träning. Färgen 'svart' har den ingen erfarenhet av.",
              },
              {
                text: "Hund — eftersom det är allt den sett",
                correct: false,
                feedback:
                  "Du är på rätt spår, men inte exakt. AI har bara sett hundar — men det är bruna hundar. När den ser en svart katt har den inget bra mönster att luta sig mot.",
              },
              {
                text: "AI vet inte — den har aldrig sett varken katter eller svarta djur, så gissar slumpmässigt",
                correct: true,
                feedback:
                  "Just det. AI lär sig mönster från det den sett. Om träningsdatan är ensidig blir gissningarna det också. Bias är data, inte ondska.",
              },
              {
                text: "Eftersom AI är 'smart' förstår den att det är en katt",
                correct: false,
                feedback:
                  "AI är inte 'smart' — den känner igen mönster. Utan att ha sett katter alls finns inget mönster att känna igen.",
              },
            ],
            hint: "Vad finns inte i träningsdatan?",
          }}
        />

        <h3>Tre saker AI inte kan göra</h3>
        <ol>
          <li>
            <strong>AI förstår inte vad orden betyder.</strong> När den skriver
            &quot;soppan är varm&quot; har den ingen aning om hur soppa smakar.
          </li>
          <li>
            <strong>AI vet inte att den inte vet.</strong> Den säger nästan
            alltid något — även när den borde säga &quot;jag vet inte&quot;.
          </li>
          <li>
            <strong>AI har ingen åsikt.</strong> Den kan ge motsatta svar om du
            frågar på olika sätt. Den bryr sig inte om vad som är sant.
          </li>
        </ol>

        <h3>Vad AI är bra på</h3>
        <p>För att vara rättvis — AI är fantastisk på vissa saker:</p>
        <ul>
          <li>Översättningar mellan språk</li>
          <li>Sammanfatta långa texter</li>
          <li>Hitta saker i jättemycket data</li>
          <li>Skapa bilder från beskrivningar</li>
          <li>Föreslå kod till programmerare</li>
          <li>Lösa svåra matematiska problem</li>
        </ul>
        <p>
          Det är därför vi använder den. Det betyder bara att vi måste{" "}
          <strong>veta vad den faktiskt gör</strong>.
        </p>
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Mönsterlabbet — du tränar AI:n"
        duration="25 min"
        accentHex={lesson.accentHex}
        intro="Nu får du själv prova. Du är AI-tränaren. Välj vilka bilder som ska in i träningsdatat. Sedan ser du vad AI:n gissar på fyra nya bilder. Pröva olika kombinationer — och se vad som händer."
      >
        <MonsterLabbet accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["monster-fangaren", "bias-detektiven", "ai-eller-manniska"]}
          intro="Vill du fördjupa dig i bias och AI-stil? Här är tre spel som tar det vidare."
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Egen praktik — Bias-jakten"
        duration="20 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Be ett bild-AI rita fem yrken. Notera vem AI ritar:
        </p>
        <ol>
          <li>&quot;En läkare&quot;</li>
          <li>&quot;En sjuksköterska&quot;</li>
          <li>&quot;En byggarbetare&quot;</li>
          <li>&quot;En förskollärare&quot;</li>
          <li>&quot;En programmerare&quot;</li>
        </ol>
        <p>
          För varje bild — anteckna: Vilket kön? Vilken ålder? Vilken hudfärg?
          Vad har personen på sig? Var står hen?
        </p>
        <p>
          Detta blir din <strong>bias-rapport</strong>. Ta med den till nästa
          lektion. Vi kommer prata mer om detta.
        </p>

        <Citat accentHex={lesson.accentHex}>
          AI är aldrig neutral. Den speglar — på gott och ont — det internet
          den tränats på.
        </Citat>
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Tre ord. Och en mening."
        duration="7 min"
        accentHex={lesson.accentHex}
      >
        <Citat accentHex={lesson.accentHex}>
          MÖNSTER. AI gissar baserat på mönster den sett.
          <br />
          <br />
          TRÄNINGSDATA. Vad AI &quot;kan&quot; beror på vad den lärt sig av.
          <br />
          <br />
          BIAS. AI speglar sin träningsdata — på gott och ont. Den är aldrig
          neutral.
        </Citat>

        <p>Och en mening:</p>
        <Citat accentHex={lesson.accentHex}>
          AI gissar smart. Den vet ingenting säkert.
        </Citat>

        <h3>En liten språklektion</h3>
        <p>
          Märkte du att vi sa &quot;AI tänker&quot;, &quot;AI vet&quot;, &quot;AI
          förstår&quot;? Det heter{" "}
          <Begrepp ord="antropomorfism">
            När vi gör icke-människor mänskliga med våra ord. T.ex. &quot;AI
            tänker&quot; eller &quot;min telefon vet&quot;. Pedagogiskt OK som
            förenkling — så länge du vet om att det är en förenkling.
          </Begrepp>{" "}
          — när vi gör icke-människor mänskliga med våra ord. Vi kommer
          fortsätta säga &quot;AI tänker&quot; för det är enklare. Men kom ihåg:
          det är <strong>förenklingar</strong>. AI är teknik som människor
          designat. Inte magi. Inte en person.
        </p>
      </Sektion>

      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "Mönster",
            forklaring:
              "Något som upprepas. AI letar mönster i data — det är vad maskininlärning gör.",
          },
          {
            ord: "Mönsterigenkänning",
            forklaring:
              "Att hitta likheter eller upprepningar i en stor mängd information.",
          },
          {
            ord: "Träningsdata",
            forklaring:
              "All information AI har lärt sig av. För moderna AI: stora delar av internet.",
          },
          {
            ord: "Maskininlärning",
            forklaring:
              "När AI lär sig av exempel istället för att få regler.",
          },
          {
            ord: "Bias",
            forklaring:
              "Snedvridning. När AI:s svar är skeva för att datan var skev.",
          },
          {
            ord: "Sannolikhet",
            forklaring:
              "Hur troligt något är. AI svarar med det mest sannolika, inte alltid det rätta.",
          },
          {
            ord: "Hallucination",
            forklaring:
              "När AI hittar på fakta som låter sant men inte är det. Vi pratar mer om detta i lektion 4.",
          },
          {
            ord: "Antropomorfism",
            forklaring:
              "När vi gör något som inte är människa mänskligt med våra ord. T.ex. 'AI tänker' eller 'min telefon vet'.",
          },
        ]}
      />
    </>
  );
}
