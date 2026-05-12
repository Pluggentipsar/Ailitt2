import { MellanstadietLesson } from "@/lib/mellanstadiet-data";
import { Sektion } from "@/components/mellanstadiet/Sektion";
import { Citat } from "@/components/mellanstadiet/Citat";
import { Begrepp } from "@/components/mellanstadiet/Begrepp";
import { Quiz } from "@/components/mellanstadiet/Quiz";
import { TidslinjePussel } from "@/components/mellanstadiet/TidslinjePussel";
import { MetrTimeline } from "@/components/mellanstadiet/MetrTimeline";
import { BegreppsBank } from "@/components/mellanstadiet/BegreppsBank";
import { SpelCallout } from "@/components/mellanstadiet/SpelCallout";
import { PlaceholderImage } from "@/components/mellanstadiet/PlaceholderImage";
import { MELLANSTADIET_IMAGES } from "@/lib/mellanstadiet-images";
import { ReflectionPrompt } from "@/components/mellanstadiet/ReflectionPrompt";
import { PravaMedAI } from "@/components/mellanstadiet/PravaMedAI";
import { DiskutteraBlock } from "@/components/mellanstadiet/DiskutteraBlock";
import { SammanfattningsQuiz } from "@/components/mellanstadiet/SammanfattningsQuiz";
import { VagorDiagram } from "@/components/mellanstadiet/VagorDiagram";

export function Lektion1Content({ lesson }: { lesson: MellanstadietLesson }) {
  return (
    <>
      {/* Kärnpåstående direkt under hero */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Citat accentHex={lesson.accentHex}>{lesson.kernpastaende}</Citat>
        </div>
      </section>

      {/* === STEG A: KROK === */}
      <Sektion
        id="krok"
        step="A"
        title="Vilken är AI på riktigt?"
        duration="10 min"
        accentHex={lesson.accentHex}
        intro="R2-D2 i Star Wars. Baymax i Big Hero 6. JARVIS i Iron Man. Pokédex i Pokémon. En zombie i Minecraft. Vilken av dem är AI på riktigt?"
      >
        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L1.1"]}
          caption="Filmcollage: R2-D2, Baymax, JARVIS, Wall-E, Pokédex, Minecraft-zombie sida vid sida"
          hint="Joel klipper ihop kort sekvens — 8-12 sek per karaktär"
          aspect="16/9"
        />

        <p>
          <strong>Trickfråga.</strong> Ingen av dem.
        </p>
        <p>
          Alla är <em>berättelser om AI</em>. Människor har drömt om robotar och
          tänkande maskiner i mer än 200 år. Men AI så som vi pratar om idag —
          ChatGPT, Snap AI, AI som ritar bilder — ser inte ut som en robot. Det
          finns ingen kropp. Det finns inga ögon. AI är program som kör i
          datorhallar långt borta. Vi pratar med dem genom våra telefoner och
          datorer.
        </p>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Innan du läser vidare — vad trodde DU att AI var när du var liten?"
          followups={[
            "Vad var den första AI:n du minns att du mötte?",
            "Vad gjorde den?",
            "Trodde du att den 'tänkte'?",
          ]}
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="SNABBKOLL — innan du läser vidare"
          question={{
            prompt:
              "Vilken av följande har den största likheten med AI som vi använder idag (2026)?",
            options: [
              {
                text: "R2-D2 från Star Wars",
                correct: false,
                feedback:
                  "R2-D2 är en filmrobot med kropp. Modern AI har ingen kropp — den är program som kör i datacenter.",
              },
              {
                text: "ChatGPT som svarar i en chatt",
                correct: true,
                feedback:
                  "Just det. AI 2026 har ingen robotkropp. Du pratar med den genom din skärm.",
              },
              {
                text: "Terminator (Skynet)",
                correct: false,
                feedback:
                  "Skynet är en filmskräck om en AI som vill utrota människor. Riktig AI vill ingenting — den följer instruktioner.",
              },
              {
                text: "Pokédexen i Pokémon-anime",
                correct: false,
                feedback:
                  "Pokédexen är fiktion. Men intressant nog: dagens kameraappar känner igen växter och djur ungefär som Pokédexen — så fiktionen blev verklighet på sätt och vis.",
              },
            ],
            hint: "Tänk på vad AI har för kropp idag.",
          }}
        />
      </Sektion>

      {/* === STEG B: FALL === */}
      <Sektion
        id="fall"
        step="B"
        title="Två historier som löper bredvid varandra"
        duration="15 min"
        accentHex={lesson.accentHex}
      >
        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L1.2"]}
          caption="Två parallella tidslinjer: 'Berättelser om AI' (Frankenstein, HAL, Skynet, Wall-E) och 'AI på riktigt' (Turing, Deep Blue, AlphaGo, ChatGPT)"
          hint="Joel: en illustrerad dubbel-tidslinje, kanske svart-vit för fantasi och färg för verklighet"
          aspect="3/2"
        />

        <h3>Berättelsen i fantasin</h3>
        <p>
          År <strong>1818</strong> skrev Mary Shelley en bok som heter{" "}
          <em>Frankenstein</em>. En vetenskapsman bygger en varelse som börjar
          tänka själv. Inget bra slut.
        </p>
        <p>
          År <strong>1942</strong> skrev författaren Isaac Asimov om{" "}
          <em>robotlagar</em> — regler som robotar skulle följa för att inte
          skada människor.
        </p>
        <p>
          År <strong>1968</strong> kom filmen{" "}
          <em>2001: A Space Odyssey</em>. Datorn HAL vägrar lyda och dödar
          nästan alla ombord på rymdskeppet.
        </p>
        <p>
          År <strong>1984</strong> kom <em>Terminator</em>. AI:n Skynet vill
          förinta mänskligheten.
        </p>
        <p>
          År <strong>2008</strong> kom Pixar-filmen <em>Wall-E</em>. En söt
          robot som städar och bryr sig.
        </p>
        <p>
          I 200 år har människor berättat om robotar och tänkande maskiner.
          Ibland som hjältar. Ibland som hot. Alltid med kropp och själ.
        </p>

        <h3>Berättelsen i verkligheten</h3>
        <p>
          Samtidigt har något helt annat hänt — <em>på riktigt</em>, i forskarnas
          labb.
        </p>
        <p>
          År <strong>1950</strong> skrev en matematiker som hette{" "}
          <Begrepp ord="Alan Turing">
            En brittisk matematiker. Brutit den tyska Enigma-koden i andra
            världskriget. Räknas som dataspionernas och AI-forskningens
            grundare.
          </Begrepp>{" "}
          en idé: kan en dator någonsin lura en människa att tro att den är en
          människa? Det kallas idag <em>Turing-testet</em>.
        </p>
        <p>
          År <strong>1956</strong> träffades några forskare på ett universitet
          i USA, Dartmouth, och hittade på ordet{" "}
          <strong>&quot;artificiell intelligens&quot;</strong> — AI. De trodde
          de skulle bygga tänkande maskiner inom några år. Det tog 60 år.
        </p>
        <p>
          År <strong>1997</strong> vann en dator som hette{" "}
          <strong>Deep Blue</strong> över världsmästaren i schack. Det var
          nyheter över hela världen.
        </p>
        <p>
          År <strong>2016</strong> vann en AI som hette{" "}
          <strong>AlphaGo</strong> över världsmästaren i Go. Folk trodde Go var
          omöjligt för datorer — det är ett spel där det finns fler möjliga
          drag än det finns atomer i universum. AlphaGo gjorde det ändå. I
          match nummer 2 spelade AlphaGo ett drag som ingen människa skulle
          gjort. Drag 37. Det blev legendariskt.
        </p>
        <p>
          År <strong>2022, 30 november</strong> släpptes{" "}
          <strong>ChatGPT</strong>. På fem dagar hade en miljon människor
          börjat använda den. På två månader: hundra miljoner. Det är den
          snabbaste teknik mänskligheten någonsin spridit.
        </p>
        <p>
          År <strong>2023</strong> började AI skapa bilder och videor. Den
          första virala AI-videon hette <em>&quot;Will Smith eats spaghetti&quot;</em>.
          Den var konstig och rolig — Will Smiths ansikte smälte och spaghettin
          försvann i luften.
        </p>
        <p>Bara ett halvår senare gick det inte längre att se skillnad.</p>

        <PlaceholderImage
          src={MELLANSTADIET_IMAGES["L1.3"]}
          caption="Will Smith spaghetti 2023 (vänster, suddig och konstig) jämfört med Sora 2026 (höger, fotorealistisk)"
          hint="Joel: två stillbilder sida vid sida — visar utvecklingen på 3 år"
          aspect="16/7"
        />

        <p>
          År <strong>2024</strong> fick AI-forskarna{" "}
          <strong>Nobelpriset i fysik och kemi</strong> — det första Nobelpriset
          någonsin för AI-arbete. Geoffrey Hinton fick fysikpriset. Demis
          Hassabis fick kemipriset för att hans AI{" "}
          <strong>AlphaFold</strong> löste ett 50 år gammalt biologi-problem.
        </p>
        <p>
          I <strong>september 2025</strong> släppte OpenAI en helt ny
          AI-video-app som heter <strong>Sora</strong>. Du kunde skriva vad som
          helst och få en video som såg nästan äkta ut. Den blev superpopulär —
          och samtidigt jätteproblematisk. I <strong>april 2026</strong>{" "}
          tvingades OpenAI stänga ner Sora-appen helt. Det var första gången en
          så stor AI-app togs ner efter att människor protesterat.
        </p>
        <p>
          Det är där vi är just nu. <strong>2026.</strong>
        </p>

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Vad gissade filmerna RÄTT om — och vad blev annorlunda?"
          prompts={[
            "Filmerna hade nästan alltid AI med kropp. Hur ser AI ut idag?",
            "Filmerna gjorde ofta AI till skurken. Är dagens AI 'ond'?",
            "Vad gissade filmerna ändå RÄTT? (tips: AI som vinner i spel)",
          ]}
        />
      </Sektion>

      {/* === STEG C: KÄRNTEXT === */}
      <Sektion
        id="kartext"
        step="C"
        title="Tre vågor av AI — och en fjärde"
        duration="15 min"
        accentHex={lesson.accentHex}
        intro="Forskare brukar dela in AI:s utveckling i stora vågor. Du läser nu om alla fyra."
      >
        <VagorDiagram />

        <h3>Våg 1: AI som följer regler (1956–2000)</h3>
        <p>
          Människor <em>programmerade in</em> alla regler i datorn. &quot;Om
          motståndaren spelar X, spela Y.&quot; Det var hur Deep Blue spelade
          schack. Det fungerade i avgränsade saker som schack — men inte i den
          riktiga världen, för där finns för många regler.
        </p>
        <p>
          Tänk dig en <em>kokbok</em>. Datorn följer recept. Den kan ingenting
          den inte fått instruktioner om.
        </p>

        <h3>Våg 2: AI som lär sig av exempel (2000–2017)</h3>
        <p>
          Forskarna kom på en bättre idé: i stället för att skriva alla regler —{" "}
          <em>visa många exempel</em> och låt AI:n hitta mönstren själv. Det är
          så Spotify gissar vilka låtar du gillar. Det är så Google Bilder
          hittar bilder med katter. Det är så TikTok vet vad du vill se
          härnäst.
        </p>
        <p>
          Tänk dig en <em>lärling</em>. Den lär sig genom att titta på{" "}
          <em>många</em> exempel.
        </p>

        <h3>Våg 3: AI som skapar (2017–2024)</h3>
        <p>
          År 2017 hände något viktigt. Forskare på Google publicerade ett
          papper som hette{" "}
          <strong>&quot;Attention is All You Need&quot;</strong>. De beskrev en
          ny sorts AI-arkitektur som kallas{" "}
          <Begrepp ord="transformer">
            En matematisk struktur som låter AI hålla reda på sammanhanget i
            mycket långa texter. Hjärtat i alla moderna språk-AI som ChatGPT,
            Claude och Gemini.
          </Begrepp>
          . Det är denna idé som ChatGPT, Claude, Gemini och alla moderna
          AI-system bygger på.
        </p>
        <p>
          Plötsligt kunde AI inte bara <em>känna igen</em> — den kunde också{" "}
          <em>skapa</em>. Skriva texter. Måla bilder. Komponera musik. Göra
          filmklipp.
        </p>

        <h3>Våg 4: AI som agerar (2024–nu)</h3>
        <p>
          Något nytt började hända 2024–2025. AI-system slutade bara{" "}
          <em>svara</em> — de började <em>göra</em>.
        </p>
        <ul>
          <li>
            <strong>Claude Code</strong> är ett AI-system som programmerar
            tillsammans med människor. När en programmerare säger &quot;fixa
            felet i mitt projekt&quot; kan Claude Code öppna alla filer, läsa
            koden, hitta felet, ändra det och köra testerna <em>helt själv</em>{" "}
            — utan att människan styr varje klick. Sådant klarade ingen AI för
            bara två år sedan.
          </li>
          <li>
            <strong>Computer Use</strong> (sedan oktober 2024): AI-system kan{" "}
            <strong>klicka på saker</strong> i en webbläsare. Som du. Den ser
            skärmen, hittar knapparna och styr musen och tangentbordet.
          </li>
          <li>
            <strong>AI-agenter</strong> kan utföra långa uppgifter — saker som
            tar människor en hel arbetsdag eller mer.
          </li>
        </ul>
        <p>
          Vi kallar det här <em>agenter</em>. En{" "}
          <Begrepp ord="agent">
            AI som kan göra saker, inte bara svara på frågor. En vanlig chattbot
            är som någon du frågar; en agent är som någon du ger ett uppdrag.
          </Begrepp>{" "}
          är AI som kan <strong>göra saker</strong>, inte bara svara.
        </p>

        <Citat accentHex={lesson.accentHex}>
          En vanlig chattbot är som någon du frågar. En AI-agent är som någon
          du ger ett uppdrag.
        </Citat>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Förklara agenter med AI:s egna ord"
          prompt="Förklara skillnaden mellan en AI-chattbot och en AI-agent för en 11-åring. Ge tre konkreta exempel på vad en agent kan göra som en vanlig chattbot inte kan."
          observation="Stämmer AI:s svar med vad du läst i den här lektionen? Hittade du minst tre exempel? Är de specifika eller generiska? Ifrågasätt fritt."
        />

        <h3>Varför går det så snabbt just nu?</h3>
        <p>Tre saker har hänt samtidigt:</p>
        <p>
          <strong>1. Data.</strong> Hela internet finns nu — Wikipedia, böcker,
          Reddit, Stack Overflow. AI tränas på enorma datamängder.
        </p>
        <p>
          <strong>2. Datorkraft.</strong> Speciella datorchipp som ursprungligen
          byggdes för dataspel visade sig vara perfekta för AI-träning.
          Datacenter har blivit så stora att de drar lika mycket el som
          småstäder.
        </p>
        <p>
          <strong>3. Arkitekturen.</strong> Transformer-idén från 2017 löste
          något som alla tidigare AI:er hade kämpat med — hur man håller reda på
          sammanhanget i ett långt stycke text.
        </p>
        <p>
          Och nu, 2026, har vi lagt till en <strong>fjärde</strong> ingrediens:{" "}
          <Begrepp ord="harness">
            &quot;Selen&quot; — som man sätter på en häst. Verktygen som ger AI
            kropp: får läsa filer, klicka på knappar, köra kod. Utan harness kan
            AI bara prata. Med harness kan AI göra.
          </Begrepp>
          . AI utan harness kan bara <em>prata</em>. AI med harness kan{" "}
          <em>göra</em>.
        </p>

        <h3>Hur duktig är AI just nu? (2026)</h3>
        <p>
          Här är två konkreta saker som forskare har <strong>mätt</strong>:
        </p>
        <p>
          <strong>METR</strong> mäter sedan 2019: hur långa uppgifter kan AI
          göra själv? 2019 klarade AI uppgifter på <em>några sekunder</em>. 2023
          på <em>några minuter</em>. 2026 klarar de bästa AI-agenterna{" "}
          <strong>kodningsuppgifter som tar människor över 14 timmar</strong> —
          autonomt, från start till mål. Det dubblas ungefär var sjunde månad.
        </p>

        <MetrTimeline accentHex={lesson.accentHex} />

        <p>
          <strong>OpenAI testade GPT-5.2 mot riktiga jobb</strong> (GDPval
          2026): advokater, sjuksköterskor, ingenjörer fick lösa uppgifter. AI
          fick lösa samma. Resultat: AI var <strong>lika bra eller bättre</strong>{" "}
          än experten på <strong>70%</strong> av uppgifterna. AI gjorde det
          också <strong>100 gånger snabbare</strong> och{" "}
          <strong>100 gånger billigare</strong>.
        </p>
        <p>
          Men AI gör fortfarande misstag. Människan behövs för att kontrollera.
          Det är vad du kommer lära dig i den här kursen.
        </p>

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="tänk"
          question="Om AI dubblas var sjunde månad — vad kan AI göra om TVÅ ÅR?"
          followups={[
            "Försök räkna: hur många dubblingar blir det på 24 månader?",
            "Vad innebär det om uppgifter på 14 timmar dubblas tre gånger?",
            "Vilka jobb skulle förändras mest? Vilka tror du består?",
          ]}
        />

        <Quiz
          accentHex={lesson.accentHex}
          title="KOLL — har du våg 4 koll?"
          question={{
            prompt:
              "Vad är skillnaden mellan en chattbot och en AI-agent?",
            options: [
              {
                text: "Det är samma sak — bara olika namn",
                correct: false,
                feedback:
                  "Inte riktigt. En chattbot svarar på frågor. En agent kan utföra uppgifter — klicka, köra kod, fatta delbeslut.",
              },
              {
                text: "En chattbot svarar på frågor; en agent gör saker",
                correct: true,
                feedback:
                  "Just det. Chattbot = någon du frågar. Agent = någon du ger ett uppdrag.",
              },
              {
                text: "En agent har en kropp; en chattbot har inte",
                correct: false,
                feedback:
                  "Nej — ingen av dem har en kropp. AI är program som kör på servrar. Skillnaden ligger i vad de kan göra med din dator, inte i utseende.",
              },
              {
                text: "Agenter är fortfarande science fiction",
                correct: false,
                feedback:
                  "Inte längre. Claude Code, Codex och Computer Use är riktiga AI-agenter som finns idag (2026).",
              },
            ],
          }}
        />
      </Sektion>

      {/* === STEG D: INTERAKTIVT === */}
      <Sektion
        id="interaktivt"
        step="D"
        title="Tidslinje-pusslet"
        duration="20 min"
        accentHex={lesson.accentHex}
        intro="Du har just läst om filmer och om verkliga händelser. Pussla nu ihop dem på en gemensam tidslinje. Vad gissade filmerna rätt? Vad blev annorlunda?"
      >
        <TidslinjePussel accentHex={lesson.accentHex} />

        <SpelCallout
          gameSlugs={["nasta-ord"]}
          intro="Vill du själv prova hur det är att gissa nästa ord — som AI gör?"
        />
      </Sektion>

      {/* === STEG E: PRAKTIK === */}
      <Sektion
        id="praktik"
        step="E"
        title="Egen praktik — AI-vecka-loggen"
        duration="20 min"
        accentHex={lesson.accentHex}
      >
        <p>
          Nästa vecka ska du <strong>logga AI</strong>. Skriv ner när du stöter
          på AI i din vardag — TikTok-flödet, Snap AI, en översättning, en
          autocompletion när du skriver ett SMS, ett filter i Snapchat eller
          Instagram, Spotifys rekommendationer, ett spel med smarta motståndare.
          Räkna upp till 10. Ta med din lista nästa lektion.
        </p>

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Födelseårstestet"
          prompt="Berätta tre konkreta saker som hände inom AI-utvecklingen år [skriv ditt födelseår]. Var specifik med datum och företag."
          observation="Skriv ner svaret. Kontrollera mot Wikipedia eller en lärobok. Hade AI rätt om allt? Hittade den på något? Markera vad som stämde och vad som var påhittat."
        />

        <PravaMedAI
          accentHex={lesson.accentHex}
          title="Lokal kontroll-test"
          prompt="Berätta om [din skola/fotbollsklubb/lokala park]. Vad har hänt där de senaste tio åren?"
          observation="AI känner ofta inte till lokala detaljer. Hur märks det i svaret? Är det generiskt? Hittar den på? Det här är ett bra sätt att se när AI gissar utan grund."
        />

        <DiskutteraBlock
          accentHex={lesson.accentHex}
          format="par"
          question="Jämför era AI-vecka-loggar"
          prompts={[
            "Hade ni samma AI:er på listan? Vilka skillnader?",
            "Hur många av punkterna visste ni var AI innan denna lektion?",
            "Är det något ni använder dagligen som ni inte tänkte på som AI?",
          ]}
        />
      </Sektion>

      {/* === STEG F: LANDNING === */}
      <Sektion
        id="landning"
        step="F"
        title="Tre saker att ta med sig"
        duration="10 min"
        accentHex={lesson.accentHex}
      >
        <ol>
          <li>
            <strong>AI är inte en sak.</strong> Det är många olika system —
            chattbottar, agenter, bild-AI, video-AI, kod-AI. Inte magi. Inte en
            person.
          </li>
          <li>
            <strong>Berättelser om AI är inte AI.</strong> Filmer har drömt om
            tänkande maskiner i 200 år, men det vi har idag fungerar annorlunda
            än filmerna gissade. AI har ingen kropp, ingen vilja, vet ingenting
            säkert.
          </li>
          <li>
            <strong>Det går snabbt nu.</strong> AI kan göra saker idag som
            verkade omöjliga 2022. Och det dubblas ungefär var sjunde månad.
            Det betyder att <em>du</em> behöver förstå det, för det blir bara
            mer.
          </li>
        </ol>

        <SammanfattningsQuiz
          accentHex={lesson.accentHex}
          title="Sammanfattningsquiz · L1"
          questions={[
            {
              prompt: "Vilket år lanserades ChatGPT?",
              options: [
                { text: "2017 — samma år som transformer-arkitekturen", correct: false, feedback: "2017 var året transformer-arkitekturen publicerades. Men ChatGPT kom senare." },
                { text: "30 november 2022", correct: true, feedback: "Just det. På fem dagar hade en miljon användare börjat använda den." },
                { text: "2024 — samtidigt som AI-Nobelpriset", correct: false, feedback: "Nobelpriset till AI kom 2024, men ChatGPT lanserades två år tidigare." },
                { text: "2020 — under pandemin", correct: false, feedback: "Nej, ChatGPT lanserades efter pandemin." },
              ],
            },
            {
              prompt: "Vad är harness?",
              options: [
                { text: "En typ av AI-modell", correct: false, feedback: "Nej. Modellen är 'hjärnan'. Harness är något annat." },
                { text: "Verktygen runt AI som låter den agera — läsa filer, klicka, köra kod", correct: true, feedback: "Just det. Som selen på en häst — det som ger AI 'kropp'." },
                { text: "Datorkraften som tränar AI", correct: false, feedback: "Datorkraft är en av tre ingredienser för dagens AI, men inte harness." },
                { text: "Ett företag som bygger AI", correct: false, feedback: "Inte alls — det är ett tekniskt begrepp om verktygen runt en AI-modell." },
              ],
            },
            {
              prompt: "Vilken är den bästa beskrivningen av en AI-agent?",
              options: [
                { text: "AI med en fysisk robot-kropp", correct: false, feedback: "Inte alls — AI-agenter har ingen kropp. De är program." },
                { text: "AI som kan utföra uppgifter, inte bara svara — klicka, köra kod, fatta delbeslut", correct: true, feedback: "Rätt. Chattbot = någon du frågar. Agent = någon du ger ett uppdrag." },
                { text: "En förbjuden, farlig typ av AI", correct: false, feedback: "Nej — agenter är vanliga 2026 och används brett." },
                { text: "AI som har egen vilja", correct: false, feedback: "Nej — AI har ingen egen vilja. Agenter följer instruktioner människor har gett." },
              ],
            },
            {
              prompt: "Vad menas med att AI 'dubblas var sjunde månad' enligt METR?",
              options: [
                { text: "AI blir dubbelt så dyr", correct: false, feedback: "Nej — det är inte priset som dubblas." },
                { text: "Hur långa uppgifter AI kan göra autonomt fördubblas", correct: true, feedback: "Just det. 2019 var det sekunder. 2026 är det 14 timmar för agenter på kodningsuppgifter." },
                { text: "AI blir dubbelt så bra på allt", correct: false, feedback: "Det här gäller specifikt tidshorisonten — hur LÅNGA uppgifter AI klarar." },
                { text: "Antalet AI-företag dubblas", correct: false, feedback: "Inte det måttet. METR mäter förmåga, inte bransch." },
              ],
            },
            {
              prompt: "Var det Iron Man-filmen som först visade AI som löser kemi-problem?",
              options: [
                { text: "Ja — JARVIS löste flera kemi-problem i Iron Man", correct: false, feedback: "Iron Man visar fiktiv AI. Riktig AI som löser kemi-problem är AlphaFold (Nobelpris 2024)." },
                { text: "Nej — det var verkligheten som hann före. AlphaFold löste protein-problem och fick Nobelpris 2024", correct: true, feedback: "Just det. Filmer hann inte gissa rätt om allt — verkligheten överraskade på vissa punkter." },
                { text: "Ja — alla AI-genombrott har förutspåtts av filmer", correct: false, feedback: "Inte alls. Många riktiga AI-genombrott (transformer, Nobelpris, agenter) var oväntade." },
                { text: "Det går inte att jämföra film och verklighet", correct: false, feedback: "Jo — det är just det vi gör i den här lektionen. Vissa filmer hade rätt, andra fel." },
              ],
            },
          ]}
        />

        <ReflectionPrompt
          accentHex={lesson.accentHex}
          mode="skriv"
          question="Tre frågor till dig själv"
          followups={[
            "Vad i lektionen förvånade dig mest?",
            "Vilken AI-användning har du som du nu ser annorlunda på?",
            "Vad vill du veta mer om till nästa lektion?",
          ]}
        />
      </Sektion>

      {/* Begreppsbank */}
      <BegreppsBank
        accentHex={lesson.accentHex}
        items={[
          {
            ord: "AI",
            forklaring:
              "Artificiell intelligens. Ett fält eller teknik. Inte en räknebar sak — vi säger 'ett AI-system', inte 'en AI'.",
          },
          {
            ord: "AI-system",
            forklaring:
              "Det specifika du använder, t.ex. ChatGPT, Claude, Gemini.",
          },
          {
            ord: "Algoritm",
            forklaring:
              "En lista med instruktioner som datorn följer. Som ett recept.",
          },
          {
            ord: "Maskininlärning",
            forklaring: "När AI lär sig av exempel istället för att få regler.",
          },
          {
            ord: "Generativ AI",
            forklaring:
              "AI-system som skapar nytt — text, bilder, musik, video.",
          },
          {
            ord: "Träningsdata",
            forklaring: "De exempel som AI-systemet har tränats på.",
          },
          {
            ord: "Transformer",
            forklaring:
              "AI-arkitektur från 2017 som möjliggjort dagens moderna AI-system.",
          },
          {
            ord: "Multimodal",
            forklaring:
              "AI-system som hanterar flera typer samtidigt — text, bild, ljud, video.",
          },
          {
            ord: "AI-agent",
            forklaring:
              "AI-system som kan göra saker, inte bara svara. Claude Code, Codex.",
          },
          {
            ord: "Harness",
            forklaring:
              "Verktygen runt AI-systemet som låter den agera — läsa filer, klicka, köra kod.",
          },
          {
            ord: "Computer Use",
            forklaring:
              "När AI kan styra en dator som du — klicka, scrolla, skriva. Funnits sedan 2024.",
          },
          {
            ord: "Benchmark",
            forklaring:
              "Mätning av hur bra olika AI-system är. T.ex. METR (kapacitet) och GDPval (jobb-uppgifter).",
          },
        ]}
      />
    </>
  );
}
