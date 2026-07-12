// Övningsbanken — Stilstölden (Skapa med AI + Forma AI, bild/estetiska ämnen)
// Bankens första estetiska övning. Tre verk — människoskapat, AI-genererat
// "i stil med" en namngiven konstnär, och hybrid — analyseras genom en enda
// lins: vilka VAL gjorde en människa? Sen skapar eleverna själva "i stil med"
// och upptäcker hur konstnärens stil hamnade i modellen: träningsdata utan
// samtycke. Avslut: förändrar AI vad "konstnär" betyder?

import type { BankOvning } from "../types";

export const ovning: BankOvning = {
  id: "stilstolden",
  titel: "Stilstölden",
  blurb:
    "Tre verk: ett människoskapat, ett AI-genererat ”i stil med” en känd konstnär, ett hybrid. Vem gjorde valen — och vem ska krediteras?",
  syfte:
    "Bild och estetiska ämnen står mitt i AI-frågans hetaste zon — och har nästan inga övningar. Den här fyller luckan. I stället för att fråga ”är AI-konst riktig konst?” (som blir tyckande) tränar den en skarpare fråga: vilka VAL gjorde en människa i det här verket — motiv, urval, prompt, efterarbete — och räcker de valen för kredit? Eleverna analyserar tre verk, skapar sedan själva ”i stil med” en konstnär och upptäcker den obekväma mekaniken: konstnärens stil finns i modellen för att verken skrapats som träningsdata, utan att någon frågade. Det är Skapa med AI och Forma AI i samma lektion — göra själv, och förstå systemet man gör det i.",

  domaner: ["skapa", "forma"],
  aiLiteracyIds: [2, 3],

  tid: "60 min",
  tidMinuter: 60,
  arskurser: "Åk 6–gymnasiet",
  digitalaVerktyg: true,
  material:
    "Projektor och tre förberedda verk (A: människoskapat, B: AI-genererat ”i stil med” en namngiven konstnär, C: hybrid — människoverk som AI bearbetat). Elevdatorer eller plattor med en bildgenerator skolan får använda — kolla kommunens riktlinjer. Original av elevernas valda konstnärer framme för jämförelsen (bok, sajt eller utskrift).",

  provaSjalv: [
    {
      type: "callout",
      tone: "info",
      title: "Vad du ska göra och varför",
      body: "Du ska bygga övningens tre verk själv — och det är ingen börda, det är själva förberedelsen. När du genererar verk B kommer du känna exakt det eleverna ska känna: kittlingen när stilen träffar, och obehaget när du inser varför den kan träffa. Du behöver ha känt båda för att kunna leda samtalet utan att landa i ”AI är fusk” eller ”AI är magi”.",
    },
    { type: "h", text: "Så gör du steg för steg" },
    {
      type: "steps",
      steps: [
        {
          title: "Välj verk A — människoskapat",
          body: "Ett verk av en konstnär med tydlig, igenkännbar stil. Gärna någon ni ändå jobbar med i undervisningen. Nu levande konstnärer gör frågan om samtycke skarpare — döda mästare gör den säkrare. Båda funkar, välj medvetet.",
        },
        {
          title: "Generera verk B — ”i stil med”",
          body: "Be en bildgenerator om ett nytt motiv ”i stil med” samma konstnär. Prova några gånger tills stilen verkligen känns igen. Notera vad du själv gjorde: du valde motiv, formulerade om prompten, förkastade tre versioner och behöll en. Det ÄR val — frågan är om de räcker för kredit.",
        },
        {
          title: "Gör verk C — hybriden",
          body: "Ta något du själv gjort (foto, skiss, gammal målning) och låt AI bearbeta det: byt stil, lägg till, arbeta om. Nu är kedjan människa → AI → människa. Känn efter: är det här fortfarande ditt?",
        },
        {
          title: "Kör val-analysen på dig själv",
          body: "Lista för varje verk: vilka val gjorde en människa? För A blir listan lång (motiv, komposition, teknik, varje penseldrag). För B kort men inte tom (motivval, prompt, urval). För C — någonstans mitt emellan. Var din gräns för kredit går är exakt den diskussion klassen ska ha.",
        },
        {
          title: "Ställ dig själv slutfrågan",
          body: "Hur hamnade konstnärens stil i modellen? Svaret — verken skrapades som träningsdata utan samtycke — ska du kunna ge sakligt, utan att predika. Läs gärna på om Glaze-projektet (evidensen nedan) så du har konkreta exempel på hur konstnärer försvarar sig.",
        },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Det du ska lyssna efter i klassrummet",
      body: "Ögonblicket när en elev säger ”men jag GJORDE ju den... typ” om sin egen genererade bild. Den tvekan är övningens hjärta — ägarskapskänslan och tvivlet på samma gång. Lyft den, döm den inte.",
    },
  ],

  lararhandledning: [
    { type: "h", text: "Förberedelser" },
    {
      type: "list",
      items: [
        "Gör klart de tre verken (se Prova själv) och lägg dem i en presentation utan etiketter — avslöja inte vilket som är vilket förrän analysen är gjord.",
        "Testa att bildgeneratorn funkar på elevernas enheter och att den får användas enligt kommunens riktlinjer. Ha en reservplan: om eleverna inte kan generera själva, generera i helklass via projektorn med elevernas prompter.",
        "Be eleverna (eller förbered själv) 3–4 konstnärer med tydlig stil att välja bland till skapandemomentet — och se till att original finns framme att jämföra mot: bok, konstnärens sajt eller utskrifter.",
        "Bestäm din linje i kreditfrågan i förväg: du har ingen. Övningen ska inte landa i ditt svar utan i elevernas kriterier. Skriv gärna upp de tre analysfrågorna synligt: Vilka val gjorde en människa? Vilka val gjorde ingen alls? Vem ska krediteras?",
      ],
    },
    { type: "h", text: "Genomförande" },
    {
      type: "steps",
      steps: [
        {
          title: "Visa de tre verken",
          body: "Visa A, B och C utan att avslöja ursprunget. Låt eleverna gissa i par: vilket är människa, vilket är AI, vilket är både och? Avslöja sen — och gå direkt till den viktigare frågan: spelar det roll? Varför kändes det angeläget att gissa rätt?",
          time: "10 min",
        },
        {
          title: "Val-analysen",
          body: "Grupper om 3–4 analyserar verken med samma lins: lista vilka VAL en människa gjorde i varje verk — motiv, komposition, urval, prompt, efterarbete. För B: är prompten och urvalet (”jag förkastade tre, behöll en”) skapande val? Samla gruppernas listor på tavlan. Landa delfrågan: vem ska krediteras för B — promptskrivaren, konstnären vars stil lånats, företaget bakom modellen, eller alla tre?",
          time: "15 min",
        },
        {
          title: "Skapa själva",
          body: "Varje elev eller par väljer en konstnär, genererar en bild ”i stil med” och jämför sida vid sida med ett original: vad fångade modellen (färg, form, motivvärld)? Vad förlorades (avsikt, sammanhang, det ojämna som gör ett verk levande)? Kort anteckning: två saker som fångades, två som förlorades.",
          time: "20 min",
        },
        {
          title: "Mekaniken bakom — och ställningstagandet",
          body: "Ställ frågan: hur kan modellen härma er konstnär? Svar: verken har skrapats från nätet som träningsdata — i regel utan att någon frågade. Berätta kort att konstnärer nu försvarar sig med verktyg som ”förgiftar” stilkopiering (Glaze) och genom stämningar. Avsluta med ställningstagandet, som exit ticket eller runda: förändrar AI vad ordet ”konstnär” betyder? Motivera med ett av dagens verk.",
          time: "15 min",
        },
      ],
    },
    { type: "h", text: "Ledarrollen" },
    {
      type: "p",
      text: "Håll isär övningens två känslor i stället för att släta över dem: det ÄR häftigt att kunna generera en bild i sin favoritkonstnärs stil, och det ÄR problematiskt hur den förmågan uppstod. Elever som bara känner det ena behöver mötas med det andra — entusiasten med samtyckesfrågan, skeptikern med val-analysen av sin egen prompt. Du är inte domare i kreditfrågan; ditt jobb är att hålla kvar klassen vid kriterier i stället för tyckande. När någon säger ”AI-bilden är inte konst” — fråga vilket VAL som saknas. När någon säger ”min prompt gör mig till konstnär” — fråga var gränsen går: är den som beställer en tavla av en målare också konstnär?",
    },
    {
      type: "callout",
      tone: "warning",
      title: "Om levande konstnärer",
      body: "Att generera ”i stil med” en nu levande konstnär är juridiskt omstritt och för många konstnärer djupt känsligt — flera stämningar pågår. Det gör det till ett utmärkt undervisningsexempel men ett tveksamt publiceringsmaterial: låt elevbilderna stanna i klassrummet och lägg inte ut dem. Säg det öppet till eleverna — varför vi kan öva med det här men inte posta det är en lektion i sig.",
    },
  ],

  elevinstruktion: [
    {
      type: "p",
      text: "Tre verk visas på skärmen. Ett har en människa gjort. Ett har en AI gjort ”i stil med” en känd konstnär. Ett är både och — en människa gjorde grunden, en AI arbetade om den. Din uppgift är inte att gissa rätt. Din uppgift är att lista ut vem som egentligen gjort jobbet.",
    },
    { type: "h", text: "Så här gör du" },
    {
      type: "list",
      ordered: true,
      items: [
        "Gissa först i par: vilket verk är människa, AI, både och? Sen får ni veta svaret.",
        "Analysera i grupp: lista vilka VAL en människa gjorde i varje verk. Motiv? Komposition? Prompt? Att välja vilken version som behölls? Skriv listan för alla tre verken.",
        "Ta ställning i gruppen: vem ska krediteras för AI-verket — den som skrev prompten, konstnären vars stil användes, företaget som byggde AI:n? En mening med motivering.",
        "Skapa själv: välj en konstnär du gillar och generera en bild ”i stil med” hen. Lägg din bild bredvid ett riktigt verk av konstnären.",
        "Jämför och anteckna: två saker AI:n fångade av stilen — och två saker som gick förlorade.",
        "Fundera på: hur kan AI:n härma din konstnär? Var har den lärt sig stilen någonstans — och fick konstnären frågan?",
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Bilderna stannar i klassrummet",
      body: "Att härma en konstnärs stil med AI är omdiskuterat — flera konstnärer har stämt AI-företag för att deras verk använts utan lov. Därför övar vi med det här i klassrummet, men vi publicerar ingenting. Fråga läraren varför — det är en bra diskussion.",
    },
    { type: "h", text: "Det här lämnar du in" },
    {
      type: "p",
      text: "Din jämförelse (AI-bilden bredvid originalet), dina anteckningar om vad som fångades och förlorades, och ditt svar på slutfrågan i 3–4 meningar: förändrar AI vad ordet ”konstnär” betyder? Använd minst ett av dagens verk som exempel.",
    },
  ],

  diskussion: [
    "Vilka val räcker för att få kredit för ett verk? Räcker en prompt? Räcker att välja vilken av fyra genererade bilder som behålls?",
    "Konstnärens stil finns i modellen för att verken skrapats som träningsdata utan samtycke. Är det stöld, lån, inspiration — eller något vi saknar ord för?",
    "Mänskliga konstnärer härmar också varandra — hela konsthistorien är stilar som ärvs. Vad är skillnaden när en maskin gör det, i industriell skala?",
    "Förändrar AI vad ordet ”konstnär” betyder — eller har ordet alltid ändrat betydelse när ny teknik kommit (fotografiet, samplern, Photoshop)?",
  ],

  fallgropar: [
    "Diskussionen fastnar i ”AI-konst är fusk” kontra ”AI-konst är häftigt” — tyckande utan kriterier. Motdrag: tvinga tillbaka varje påstående till val-analysen. Vilket VAL saknas? Vilket VAL gjordes? Listan på tavlan är ditt ankare.",
    "Skapandemomentet äter lektionen — eleverna genererar bild efter bild och jämförelsen hinns aldrig med. Sätt en tydlig gräns: max tre genereringar, sen väljer du EN och jämför. Urvalet är för övrigt en poäng i sig — det är ett av de val som gör dig delaktig.",
    "Tekniken strular — generatorn är blockerad eller långsam på elevenheterna. Ha reservplanen klar: kör skapandemomentet i helklass via projektorn med elevernas prompter. Analysen och ställningstagandet, som är övningens kärna, kräver inga elevskärmar alls.",
  ],

  evidens: [
    {
      ref: "oecd-ailit-2026",
      relevance:
        "Ramverkets Create-domän kräver exakt det övningen tränar: att skapa med AI och samtidigt kunna resonera om autenticitet, upphovsrätt och kredit — vem har gjort vad, och vad är hederligt att kalla sitt eget.",
    },
    {
      ref: "shan-glaze-2023",
      relevance:
        "Glaze-forskningen är beviset på att stilkopiering inte är en teoretisk skolfråga utan ett pågående angrepp som konstnärer bygger tekniska försvar mot — konkret, aktuellt material till lektionens sista kvart om hur stilen hamnade i modellen.",
    },
  ],

  variationer: [
    "Åk 6–7: hoppa över hybridverket och kör bara människa mot AI — två verk räcker för val-analysen, och skapandemomentet får mer tid. Ta kreditfrågan muntligt i stället för skriftligt.",
    "Gymnasiet (särskilt estetiska programmet): låt eleverna göra ett eget hybridverk som slutuppgift — eget verk som grund, AI-bearbetning, och en skriftlig deklaration av varje val i kedjan. Deklarationen är den egentliga examinationen: den som kan redovisa sina val äger sitt verk.",
  ],

  kedjarMed: ["namnbytet", "model-card-for-skolans-ai"],

  kalla: "banken",
};
