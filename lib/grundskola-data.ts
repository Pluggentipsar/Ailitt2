export type GradeLevel = '1-3' | '4-6';

export interface DialogueLine {
  speaker: 'Maja' | 'Gnista' | 'Narrator' | 'Leo' | 'Mamma' | 'Sara' | 'Kassörskan' | 'Musikanten';
  text: string;
  image?: string;
}

export interface StoryChapter {
  title: string;
  dialogue: DialogueLine[];
}

export interface Activity {
  title: string;
  studentDescription: string;
  teacherInstructions: {
    purpose?: string;
    preparation?: string[];
    steps: string[];
    discussion?: string;
    examples?: string[]; // New field for concrete examples
    explanation?: string; // New field for teacher background info
  };
  type: 'analog' | 'digital';
}

export interface ModulePart {
  id: string;
  title: string;
  description: string;
  icon?: string;
  story?: StoryChapter;
  learningMaterial?: {
    title: string;
    content: string;
    image?: string;
    video?: string;
  };
  activities?: Activity[];
}

export const grundskolaModules: ModulePart[] = [
  {
    id: 'berattelsen-om-ai',
    title: 'Berättelsen om AI',
    description: 'Hur började allt? Vi följer med Maja när hon upptäcker en gammal dator på vinden.',
    learningMaterial: {
      title: "Kapitel 0 – Berättelsen om AI: “Maja möter Gnista”",
      content: `
**AI betyder artificiell intelligens.** Ett svårt ord som egentligen betyder något ganska enkelt:

👉 **AI är program som människor har skapat.**
Människor har skrivit massor av kod — alltså instruktioner för en dator — så att AI kan hjälpa till med olika saker.

En AI kan ibland låta som en figur i en saga eller ett spel.
Men det betyder inte att den är en person.

👉 **AI är egentligen bara kod som räknar och följer instruktioner.**
I filmer och spel kan robotar vara superhjältar, prata som människor eller ha känslor.
Det är roligt att titta på — men det är inte så AI fungerar i verkligheten.

👉 **AI i filmer är fantasi. AI i verkligheten är ett verktyg.**
En AI kan hjälpa dig att skriva, rita, hitta ord eller ge idéer.
Men den bestämmer inte själv.
Den vet inte saker som en människa vet.
Och den har inga känslor.

När du använder AI är det du som tänker och bestämmer.
AI är bara ett hjälpverktyg — lite som en miniräknare eller en smart app.
        `,
      image: "/chapter_0_learning.jpg",
      video: "/0.mp4"
    },
    story: {
      title: 'Kapitel 0 – Maja möter Gnista',
      dialogue: [
        { speaker: 'Narrator', text: 'Maja satt vid sin surfplatta och ritade. Hon höll på att göra en riktigt färgglad rymdraket, med stjärnor som glittrade runt omkring. Hon var så koncentrerad att hon nästan inte märkte när skärmen plötsligt började lysa lite extra.', image: '/saga1.jpg' },
        { speaker: 'Narrator', text: 'Plopp! Mitt bredvid hennes raket dök en liten ljus gnista upp. Den såg ut som en liten figur av ljus – med stora runda, nyfikna ögon. Den vinkade, fast det egentligen bara var en del av animationen.', image: '/saga2.jpg' },
        { speaker: 'Gnista', text: 'Hej! Jag heter Gnista. Jag är en AI.', image: '/saga3.jpg' },
        { speaker: 'Maja', text: 'En… vadå?' },
        { speaker: 'Gnista', text: 'AI. Det är ett slags super-verktyg som bor i datorer och surfplattor. Jag är inte magisk, och jag är inte en person. Jag är ett program som människor har byggt och tränat.' },
        { speaker: 'Maja', text: 'Men… du låter som en figur ur en film. Som robotar som kan prata och tänka och… ja, typ göra allt!' },
        { speaker: 'Gnista', text: 'Just det! I filmer och spel kan robotar ofta rädda världen, flyga eller ha känslor. Men jag fungerar inte så. Jag är mer som en smart miniräknare eller en jätteduktig hjälp-app.' },
        { speaker: 'Maja', text: 'Så du är inte farlig?' },
        { speaker: 'Gnista', text: 'Nej. Jag är bara ett digitalt verktyg som följer instruktioner. Jag kan hjälpa dig med saker, men jag bestämmer aldrig själv.' },
        { speaker: 'Maja', text: 'Så du är som… ett extra verktyg i min surfplatta?' },
        { speaker: 'Gnista', text: 'Precis! Jag låter kanske som en liten figur här, men egentligen är jag bara kod i en dator. Den här figuren finns bara för att göra det lättare att förstå hur jag fungerar.' },
        { speaker: 'Narrator', text: 'Maja log. Det kändes tryggt.' },
        { speaker: 'Maja', text: 'Då kanske du kan hjälpa mig med min rymdraket någon gång?' },
        { speaker: 'Gnista', text: 'Det kan jag säkert. Om du berättar vad du behöver hjälp med.' },
        { speaker: 'Narrator', text: 'Och just där började deras äventyr.' },
      ]
    },
    activities: [
      {
        title: '1. AI eller inte AI? – Sorteringsleken (Analog)',
        studentDescription: 'Här ska du lista ut vilka saker som använder AI och vilka som inte gör det!\nLäraren säger ett ord (t.ex. “robotdammsugare”, “penna”, “kamerafilter”).\nDu springer eller pekar på rätt sida: AI eller Inte AI.',
        teacherInstructions: {
          purpose: 'Introducera AI som verktyg, inte magi.',
          explanation: 'AI (Artificiell Intelligens) handlar ofta om datorer som kan "lära sig" eller känna igen mönster. En vanlig brödrost följer bara ett schema (tid), medan en robotdammsugare "ser" rummet och fattar beslut.',
          preparation: ['Förbered två zoner i klassrummet: “AI” och “Inte AI”.'],
          steps: [
            'Säg ett föremål i taget; eleverna springer till rätt zon.',
            'Diskutera kort efter varje runda: Varför är detta AI/inte AI?'
          ],
          examples: [
            '✅ Robotdammsugare (AI: Den "ser" och undviker hinder)',
            '❌ Brödrost (Inte AI: Den blir bara varm på tid)',
            '✅ FaceID / Ansiktsfilter (AI: Den känner igen ditt ansikte)',
            '❌ Elcykel (Inte AI: Den ger bara kraft, den "tänker" inte)',
            '✅ YouTube-rekommendationer (AI: Den gissar vad du gillar)',
            '❌ Miniräknare (Inte AI: Den gör bara exakt vad du trycker)'
          ]
        },
        type: 'analog'
      },
      {
        title: '2. Sortera Sakerna – Digitalt Spel',
        studentDescription: 'Spela spelet på skärmen! Dra sakerna till rätt låda: "AI" eller "Inte AI".\nKlicka på "Kontrollera" när du är klar för att se om du hade rätt.',
        teacherInstructions: {
          purpose: 'Öva på att känna igen AI i vardagen genom ett interaktivt spel.',
          explanation: 'Detta är den digitala versionen av sorteringsleken. Eleverna får direkt feedback och förklaringar på varför något är AI eller inte.',
          steps: [
            'Låt eleverna spela en och en eller i par på en surfplatta/dator.',
            'Eller spela tillsammans på storskärm: Låt en elev komma fram och dra ett kort.',
            'Läs förklaringarna högt tillsammans.'
          ]
        },
        type: 'digital'
      },
      {
        title: '3. Sant eller påhittat? – Filmrobot-leken',
        studentDescription: 'Lyssna noga!\nLäraren säger något om AI eller robotar.\nDu hoppar åt höger om du tror att det är sant i verkligheten.\nDu hoppar åt vänster om du tror att det är påhittat.',
        teacherInstructions: {
          purpose: 'Fokusera på skillnaden fantasi vs verklighet.',
          explanation: 'Barn möter ofta AI i filmer (som Wall-E eller Star Wars) där robotar har känslor och egen vilja. I verkligheten är AI bara kod utan känslor.',
          steps: [
            'Läs upp ett påstående.',
            'Låt eleverna hoppa till höger (SANT) eller vänster (PÅHITTAT).',
            'Berätta det rätta svaret.'
          ],
          examples: [
            '🤥 "En robot kan bli kär i en annan robot." (Påhittat)',
            '✅ "En dator kan vinna över världsmästaren i schack." (Sant)',
            '🤥 "AI kan bestämma sig för att vara elak." (Påhittat)',
            '✅ "En bil kan köra själv utan förare." (Sant - finns, men ovanligt)',
            '🤥 "Om du pratar med en AI så förstår den allt du känner." (Påhittat - den bara gissar ord)'
          ]
        },
        type: 'analog'
      },
      {
        title: '4. Hitta AI-apparaterna! – Interaktiv klickjakt',
        studentDescription: 'Här ska du hitta 5 saker som använder AI!\nKlicka på de saker du tror har AI i sig.\nSen trycker du på “Kontrollera svar” för att se hur många du fick rätt.',
        teacherInstructions: {
          purpose: 'Visa att AI finns i vardagliga prylar.',
          explanation: 'Många saker vi använder varje dag har "osynlig" AI. Det är inte alltid robotar, utan ofta smarta funktioner i appar.',
          steps: [
            'Låt eleverna gissa vilka prylar som är "smarta".',
            'Diskutera vad som gör att en pryl använder AI:',
            '– Kan den lära sig?',
            '– Kan den tolka mönster?',
            '– Fattar den “små beslut”?'
          ],
          examples: [
            '📱 Smartphone (Kamera, Röstassistent, Appar)',
            '📺 Smart TV (Rekommenderar filmer)',
            '🎮 Spelkonsol (Fiender i spel som "tänker")',
            '🧹 Robotdammsugare',
            '🗣️ Smart högtalare (Google Home, Alexa)'
          ]
        },
        type: 'digital'
      },
      {
        title: '5. AI-stoppdans – Rörelseaktivitet',
        studentDescription: 'Dans när musiken spelar!\nNär musiken stoppar ropar läraren en AI-pryl.\nDu ska frysa och göra en rörelse som visar vad AI:n gör.',
        teacherInstructions: {
          purpose: 'Koppla kropp → begrepp.',
          explanation: 'Genom att gestalta tekniken blir den mindre abstrakt. Det hjälper eleverna att minnas funktionerna.',
          steps: [
            'Starta musik.',
            'När du stoppar musiken: ropa en AI-pryl.',
            'Eleverna gestaltar prylen med en rörelse.',
            'Starta musiken igen.'
          ],
          examples: [
            '🧹 Robotdammsugare: Kryp/rulla på golvet och "krocka" försiktigt.',
            '🗣️ Smart högtalare: Stå blickstilla och håll handen bakom örat (lyssnar).',
            '🗺️ Kart-app: Peka med hela armen "Sväng höger!".',
            '📸 Ansiktsfilter: Gör en grimas och håll händerna som en ram runt ansiktet.'
          ]
        },
        type: 'analog'
      },
      {
        title: '6. Rita: “AI i film” vs “AI i verkligheten”',
        studentDescription: 'Dela pappret i två rutor:\n🦾 AI i film – rita hur AI brukar se ut i filmer.\n📱 AI i verkligheten – rita hur AI fungerar på riktigt.',
        teacherInstructions: {
          purpose: 'Diskutera: Vad är fantasi? Vad är verklighet?',
          explanation: 'Hjälp eleverna se kontrasten mellan "Hollywood-AI" (humanoida robotar) och "Verklig AI" (koder, servrar, osynliga funktioner).',
          steps: [
            'Dela ut papper och pennor.',
            'Be dem vika pappret på mitten.',
            'Vänster sida: "Film" (t.ex. robotar med ögon).',
            'Höger sida: "Verklighet" (t.ex. en mobiltelefon eller en dator).'
          ]
        },
        type: 'analog'
      },
      {
        title: '7. AI-detektiver – Light version',
        studentDescription: 'Gå runt i klassrummet och leta efter saker som kan ha AI.\nRita eller skriv ned dem på ett papper.',
        teacherInstructions: {
          purpose: 'Be eleverna hitta 3–5 föremål som verkar “smarta”.',
          explanation: 'Detta tränar observationsförmågan. Det är okej om de gissar fel – diskussionen är det viktiga.',
          steps: [
            'Be eleverna hitta 3–5 föremål som verkar “smarta”.',
            'Samlas i ring och gå igenom fynden.',
            'Diskutera: Vad får dig att tro att den har AI?'
          ],
          examples: [
            '🔍 "Har vi någon smart högtalare?"',
            '🔍 "Finns det en iPad? Vilka appar på den har AI?"',
            '🔍 "Termostaten på väggen? (Kanske, kanske inte - bra diskussion!)"',
            '🔍 "Brandvarnaren? (Oftast inte AI, bara en sensor)"'
          ]
        },
        type: 'analog'
      },
      {
        title: '8. AI finns överallt! – Utforskaren',
        studentDescription: 'Klicka på ikonerna för att upptäcka hur AI hjälper oss i vardagen.\nLär dig om allt från mobiltelefoner till robotdammsugare!',
        teacherInstructions: {
          purpose: 'Visa bredden av AI-användning i vardagen.',
          explanation: 'Eleverna får utforska 12 olika områden där AI används. Varje område har exempel och en "Visste du att"-fakta.',
          steps: [
            'Låt eleverna utforska fritt eller gå igenom ikonerna tillsammans.',
            'Diskutera: Vilka av dessa använder ni hemma?',
            'Lyssna på förklaringarna med talsyntesen.'
          ]
        },
        type: 'digital'
      },
      {
        title: '9. Vem kan vad? – AI vs Människa',
        studentDescription: 'Ett quiz där du ska gissa: Kan AI göra detta? Eller är det bara människor som kan?\nSe upp för luringar där AI bara "låtsas"!',
        teacherInstructions: {
          purpose: 'Diskutera skillnaden mellan simulering och äkta känslor/förståelse.',
          explanation: 'Detta quiz utmanar eleverna att tänka djupare. AI kan skriva en "snäll" text, men den ÄR inte snäll. Den bara simulerar.',
          steps: [
            'Låt eleverna göra quizet enskilt eller i par.',
            'Lyft särskilt frågorna om känslor och kreativitet.',
            'Diskutera: Varför säger vi att AI "låtsas"?'
          ]
        },
        type: 'digital'
      }
    ]
  },
  {
    id: 'vad-ar-ai',
    title: 'Vad är AI?',
    description: 'Teknisk förståelse av hur AI-system fungerar',
    learningMaterial: {
      title: "Kapitel 1 – Vad är AI?: “Gnista inuti burken”",
      content: `
AI fungerar lite annorlunda än människor.
AI lär sig genom att få se massor av exempel — bilder, texter, filmer och ljud.

👉 **AI tränas på data.**

När AI tränas hittar den mönster.
Till exempel: Om den har sett många bilder på hundar och katter, kan den gissa vad som är vad.

• Men den vet inte.
• Den gissar smart.
• AI tänker inte själv.
• AI känner inte.
• AI förstår inte hur det är att vara människa.

👉 **AI tänker inte och känner inte — den bara räknar.**

Och eftersom AI tränas på de exempel den får, kan den ibland visa världen orättvist.
Till exempel: Om AI mest sett bilder på manliga brandmän kan den tro att brandmän oftast är män.

👉 **AI visar inte alltid världen rättvist.**

Därför är dina egna tankar viktiga — du ser mer än AI gör.
        `,
      image: "/kap2.png",
      video: "/2.mp4"
    },
    story: {
      title: 'Kapitel 1 – Gnista inuti burken',
      dialogue: [
        { speaker: 'Narrator', text: 'Nästa dag satte sig Maja vid surfplattan igen. Gnista dök upp direkt med ett pling.' },
        { speaker: 'Maja', text: 'Hej igen! Jag har funderat på en sak. Du ser ju ut som en liten figur… men var är du egentligen? Är du liksom inuti min surfplatta?' },
        { speaker: 'Narrator', text: 'Gnista blinkade lugnt.' },
        { speaker: 'Gnista', text: 'Jag förstår varför det ser ut så. Men egentligen är jag inte här inne i plattan. Det här är bara en bild som visar hur jag kan svara dig.' },
        { speaker: 'Narrator', text: 'Maja lutade sig närmare skärmen.' },
        { speaker: 'Maja', text: 'Så… var är du då?' },
        { speaker: 'Gnista', text: 'Det ser ut som att jag är här i surfplattan, men egentligen är jag inte det. Jag är ett program som körs i en dator. Surfplattan skickar det du skriver till datorn, datorn räknar ut ett svar, och så får du det tillbaka på skärmen. Figuren du ser är bara en bild som hjälper dig att förstå mig.' },
        { speaker: 'Narrator', text: 'Maja nickade långsamt. Det var lite som att rösten kom från ett annat rum, fast superfort.' },
        { speaker: 'Maja', text: 'Men hur kan du då veta saker? Vem har lärt dig?' },
        { speaker: 'Gnista', text: 'Jag vet faktiskt ingenting på riktigt. Jag är tränad att känna igen mönster. Människor har låtit mig titta på massor och massor av exempel – bilder, ord, meningar. På så sätt lär jag mig att gissa vad som brukar komma härnäst.' },
        { speaker: 'Maja', text: 'Så du gissar?' },
        { speaker: 'Gnista', text: 'Ja! Jag gör smarta gissningar. Ungefär som när du ser ett mönster i matte, till exempel: 2, 4, 6, 8… då kan du gissa nästa tal.' },
        { speaker: 'Maja', text: '10!' },
        { speaker: 'Gnista', text: 'Precis! Du såg ett mönster. Du lär dig mönster i skolan. Jag tränas också, fast på otroligt många fler exempel än en människa hinner med. Det är så jag fungerar.' },
        { speaker: 'Gnista', text: 'Du kan tänka på mig som en jättestor låda med LEGO-bitar av information. När du säger något till mig väljer jag bitar som brukar passa ihop och försöker bygga ett svar. Men jag förstår inte bitarna. Jag bara känner igen hur de brukar se ut tillsammans.' },
        { speaker: 'Narrator', text: 'Maja blinkade.' },
        { speaker: 'Maja', text: 'Så du tänker inte själv? Du känner inte något?' },
        { speaker: 'Gnista', text: 'Nej. Jag tänker inte. Jag känner inte. Jag gör bara beräkningar. Men ibland kan det se ut som att jag förstår, för jag är bra på att gissa efter mönster.' },
        { speaker: 'Narrator', text: 'Maja satte sig rakare.' },
        { speaker: 'Maja', text: 'Okej. Då ska jag komma ihåg att du är ett verktyg. Ett avancerat verktyg – men fortfarande ett verktyg.' },
        { speaker: 'Gnista', text: 'Det är helt rätt. Och när du förstår hur jag fungerar blir det lättare att använda mig på ett smart sätt.' },
        { speaker: 'Narrator', text: 'Maja log åt surfplattan.' },
        { speaker: 'Maja', text: 'Då kör vi vidare, Gnista.' },
      ]
    },
    activities: [
      {
        title: '1. Mönsterleken – “Vad kommer härnäst?”',
        studentDescription: 'Här ska du hitta mönster!\nLäraren visar ett mönster på tavlan.\nDet kan vara färger, symboler, ljud eller siffror.\nExempel:\n🔴 🔴 🔵 🔵 🔴 🔴 🔵 🔵 …\nEller: 3 – 6 – 9 – 12 – …\nDin uppgift är att gissa vad som kommer härnäst!\nPrecis så här jobbar AI också — den letar efter mönster.',
        teacherInstructions: {
          purpose: 'Introducera AI:s mönsterigenkänning på ett konkret och kroppsligt sätt.',
          preparation: [
            'Whiteboard eller digital tavla',
            'Färgpennor eller symbolbilder (valfritt)'
          ],
          steps: [
            'Visa ett mönster på tavlan (färger, former, siffror eller rörelser).',
            'Låt eleverna gissa nästa del i mönstret.',
            'Repetera med svårare mönster.',
            'Förklara: “AI gör exakt det här – fast med jättemånga exempel och mycket snabbare.”'
          ],
          explanation: 'Alla årskurser kan delta. Kan kopplas till matte. Förbereder barnen på tanken att AI bygger på statistik, inte “sanning”.'
        },
        type: 'analog'
      },
      {
        title: '1b. Mönsterleken – Digitalt Spel',
        studentDescription: 'Kan du lista ut mönstret?\nDra rätt figur till den tomma rutan.\nKlarar du alla nivåer?',
        teacherInstructions: {
          purpose: 'Träna mönsterigenkänning interaktivt.',
          steps: [
            'Låt eleverna spela en och en eller i par.',
            'Diskutera efteråt: Hur visste ni vad som skulle komma härnäst?'
          ],
          explanation: 'Digital version av mönsterleken med direkt feedback.'
        },
        type: 'digital'
      },
      {
        title: '2. Träna klasskompisen-roboten – “AI följer exakta instruktioner”',
        studentDescription: 'En i klassen får vara robot.\nDu och dina kompisar ska ge roboten instruktioner.\nMen roboten får bara göra exakt det du säger!\nExempel:\n“Gå två steg framåt. Stopp. Sträck ut handen. Ta pennan.”\nOm instruktionen är otydlig → roboten gör något tokigt!\nAI fungerar likadant – den gör bara det den får instruktioner om.',
        teacherInstructions: {
          purpose: 'Förklara att AI inte förstår avsikt — den utför bokstavliga steg.',
          steps: [
            'Välj en elev som “robot”.',
            'Klassen ska tillsammans ge roboten stegvisa instruktioner.',
            'Om instruktionen är otydlig, ska roboten antingen stå still eller tolka den bokstavligt.',
            'Diskutera efteråt: Var gick det fel? Hur kunde vi göra instruktionen tydligare?'
          ],
          explanation: 'Lämpligt för alla åldrar, särskilt åk 1–2.'
        },
        type: 'analog'
      },
      {
        title: '2b. Programmering vs AI – Digitalt Spel',
        studentDescription: 'Programmera roboten steg för steg!\nDu ger den exakta instruktioner: uppåt, nedåt, vänster, höger.\nDet här är SKILLNADEN: Programmering = exakta instruktioner. AI = lär sig från exempel.',
        teacherInstructions: {
          purpose: 'Förstå sekvenser och exakta instruktioner.',
          steps: [
            'Låt eleverna lösa banorna genom att bygga program.',
            'Diskutera: Vad händer om man missar ett steg?'
          ],
          explanation: 'Visar hur datorer följer kod rad för rad.'
        },
        type: 'digital'
      },
      {
        title: '3. AI-gissningar – “Gissa vem jag beskriver?”',
        studentDescription: 'Läraren beskriver något — t.ex. ett djur — med ledtrådar.\nDu gissar vilket djur det är!\nExempel:\n“Har fläckar. Är snabb. Lever i Afrika.” → Gepard\n“Har päls. Kan vara liten. Kan vara stor.” → Otydligt → många svar\nAI fungerar likadant: den gissar utifrån ledtrådar.',
        teacherInstructions: {
          purpose: 'Förstå gissning vs kunskap.',
          steps: [
            'Börja med tydliga ledtrådar → ett svar.',
            'Ge sedan otydliga ledtrådar → flera möjliga svar.',
            'Förklara: “Om AI får få eller otydliga exempel, måste den Gissa.”'
          ],
          explanation: 'Koppling: perfekt inför kapitel 3 (när AI gissar fel).'
        },
        type: 'analog'
      },
      {
        title: '4. Träningsbanan – “Fler exempel gör AI bättre”',
        studentDescription: 'Du får se två olika bunchar bilder:\n• 2 exempel → jättesvårt att se mönster\n• 20 exempel → mycket lättare\nAI lär sig också bättre när den får många exempel.',
        teacherInstructions: {
          purpose: 'Visa att fler exempel ger säkrare gissningar.',
          preparation: ['Bildkort'],
          steps: [
            'Visa två situationer: 1. Visa två hundbilder → fråga vad som är lika.',
            '2. Visa 20 hundbilder → mycket tydligare mönster.',
            'Diskutera: “Ju fler exempel, desto säkrare gissar AI.”'
          ],
          explanation: 'Fokus: dataset-storlek'
        },
        type: 'analog'
      },
      {
        title: '5. AI:s mönsterhjärna – “Hitta dolda mönster”',
        studentDescription: 'Du får se en rad med figurer.\nDet finns ett mönster gömt där.\nKan du hitta det?\nExempel:\n🔺🟦🟦🔺🟦🔺🔺🟦🔺\nMarkera vad som upprepas!',
        teacherInstructions: {
          purpose: 'Förklara att AI “ser” mönster i stora datamängder.',
          preparation: ['Mönstersidor eller tavla'],
          steps: [
            'Låt eleverna ringa in delar som upprepas.',
            'Ställ frågor: Vad upprepas? Finns det en regel? Är mönstret helt regelbundet eller lite rörigt?'
          ],
          explanation: 'Förklara att AI “ser” mönster i stora datamängder.'
        },
        type: 'analog'
      },
      {
        title: '6. “Veta eller gissa smart?” – konkret begreppslek',
        studentDescription: 'Läraren visar saker:\n– något du vet (finns i rummet)\n– något du måste gissa (suddig bild, klipp av ett djur)\nDu pekar på “Veta” eller “Gissa”.\nAI gissar oftare än den vet.',
        teacherInstructions: {
          purpose: 'Perfekt meta-aktivitet. Skilja på fakta och sannolikhet.',
          steps: [
            'Visa saker: något du vet (finns i rummet) vs något du måste gissa (suddig bild).',
            'Låt eleverna peka på “Veta” eller “Gissa”.',
            'Förklara: Veta = sett själv, fakta, tydligt. Gissa = ledtrådar, mönster, osäkerhet.'
          ],
          explanation: 'Knyt till hållbar AI-användning.'
        },
        type: 'analog'
      },
      {
        title: '7. Mini-saga-byggaren – “AI skapar av mönster”',
        studentDescription: 'Du får tre kort:\n• en hjälte\n• en plats\n• ett problem\nLägg dem i ordning och skapa en liten saga!\nAI gör något liknande när den skriver text.',
        teacherInstructions: {
          purpose: 'Fokuserar på struktur, inte kvalitet.',
          steps: [
            'Dela ut tre kort: en hjälte, en plats, ett problem.',
            'Låt eleverna lägga dem i ordning och skapa en liten saga.',
            'Poängtera att AI inte “förstår berättelser” utan följer vanliga mönster.'
          ]
        },
        type: 'analog'
      },
      {
        title: '8. Färglägg Gnistas hjärna – Anti-antropomorfism',
        studentDescription: 'Du får en bild av Gnista.\nSkriv i rutan:\n“Gnista är en figur. AI är egentligen ______.”\nDu kan skriva:\n• kod\n• ett program\n• data\n• ett verktyg',
        teacherInstructions: {
          purpose: 'Fortsättning på kapitel 0:s “AI är kod, inte person”.',
          steps: [
            'Dela ut en bild av Gnista.',
            'Låt eleverna skriva i rutan vad AI egentligen är (kod, program, data, verktyg).',
            'Låt eleverna dekorera sin egen “AI-sanning”.'
          ]
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'anvanda-ai',
    title: 'Använda AI',
    description: 'Praktisk användning av AI-verktyg och strategier',
    story: {
      title: 'Kapitel 2 – Bygga bilder och berättelser',
      dialogue: [
        { speaker: 'Narrator', text: 'Några dagar senare satt Maja och ritade på sin egen serietidning. Den handlade om Superkatten, en orange katt som räddade världen på nätterna. Hon hade redan skissat på flera rutor, men hon saknade en riktigt häftig framsida.' },
        { speaker: 'Narrator', text: 'Hon öppnade surfplattan.' },
        { speaker: 'Maja', text: 'Gnista, jag behöver hjälp!' },
        { speaker: 'Narrator', text: 'Gnista dök upp som vanligt, som en liten ljus figur på skärmen.' },
        { speaker: 'Gnista', text: 'Vad roligt att du gör en serietidning. Vad vill du ha hjälp med?' },
        { speaker: 'Maja', text: 'Jag behöver en bild på min superhjälte-katt. Kan du göra det?' },
        { speaker: 'Gnista', text: 'Jag kan försöka. Vad vill du att jag ska skapa?' },
        { speaker: 'Narrator', text: 'Maja tänkte inte så länge.' },
        { speaker: 'Maja', text: 'En superhjälte-katt!' },
        { speaker: 'Gnista', text: 'Jag testar.' },
        { speaker: 'Narrator', text: 'Ett ögonblick senare dök en bild upp på skärmen. Det var en katt med en mantel — men den såg ganska vanlig ut. Den svävade inte. Den såg inte modig ut. Och den såg inte alls ut som Majas Superkatt.' },
        { speaker: 'Maja', text: 'Nja… Det där är ju fint, men inte riktigt rätt.' },
        { speaker: 'Gnista', text: 'Det kan bli så när instruktionen är väldigt kort. "Superhjälte-katt" kan betyda många olika saker. Jag försöker gissa, men gissningarna kan bli olika än det du hade i tankarna. Kan du beskriva din idé mer noggrant?' },
        { speaker: 'Narrator', text: 'Maja tittade på sin egen teckning. Hon kände exakt hur Superkatten skulle se ut.' },
        { speaker: 'Maja', text: 'Okej. Jag försöker igen.' },
        { speaker: 'Narrator', text: 'Hon tog ett djupt andetag och sa:' },
        { speaker: 'Maja', text: 'Skapa en bild på: En orange katt med stora gröna ögon, en blå mantel som flyger i vinden, och som flyger snabbt framåt med blixtar runt tassarna, över en stad på natten.' },
        { speaker: 'Gnista', text: 'Nu fick jag mycket mer information. Jag använder allt du sa för att göra en bättre gissning.' },
        { speaker: 'Narrator', text: 'Det blinkade till. Den nya bilden visade en orange katt med blå mantel, blixtar, fartstreck, och en mörk stad under sig. Precis så som Maja hade föreställt sig.' },
        { speaker: 'Maja', text: 'JAAA! Det där är min superhjälte-katt! Den är perfekt!' },
        { speaker: 'Gnista', text: 'Vad bra att du gillar den. Men kom ihåg — bilden är din idé. Jag är bara ett verktyg som använder allt jag tränats på för att försöka skapa det du beskriver. Du är serietecknaren. Jag är som en superpenna som kan hjälpa till när du vill.' },
        { speaker: 'Narrator', text: 'Maja log stort.' },
        { speaker: 'Maja', text: 'Superpenna… det låter perfekt. Då är vi ett bra team.' },
        { speaker: 'Narrator', text: 'Hon sparade bilden och fortsatte rita vidare på sin serietidning, ännu mer peppad än tidigare.' },
      ]
    }
  },
  {
    id: 'kritiskt-granska',
    title: 'Kritiskt granska',
    description: 'Källkritik, utvärdering och faktakontroll av AI-genererat innehåll',
    story: {
      title: 'Kapitel 3 – Kiosken i parken',
      dialogue: [
        { speaker: 'Narrator', text: 'En solig eftermiddag satt Maja och småpratade med Gnista på surfplattan. Hon hade just varit i parken och fått en glass.' },
        { speaker: 'Maja', text: 'Gnista, kan du berätta något om kiosken vid parken där jag köpte glass i dag?' },
        { speaker: 'Narrator', text: 'Gnista svarade snabbt:' },
        { speaker: 'Gnista', text: 'Jag kan försöka! Kiosken vid parken drivs av en kvinna som heter Karin. Hon bakar blåbärspaj och kiosken är känd för sina kanelbullar.' },
        { speaker: 'Narrator', text: 'Maja skrattade till.' },
        { speaker: 'Maja', text: 'Men… det där stämmer ju inte alls! Det är en man som heter Anders som har kiosken. Han säljer glass och godis. Jag köper alltid piggelin där.' },
        { speaker: 'Narrator', text: 'Gnista stannade upp ett ögonblick, som om den "tänkte".' },
        { speaker: 'Gnista', text: 'Då gjorde jag en felgissning. Jag kan inte se din park eller din kiosk. När du frågar om något väldigt lokalt — som bara finns där du bor — då hittar jag ofta inte det i den information jag är tränad på. Då försöker jag gissa utifrån sådant jag sett många gånger tidigare. Och ibland blir det helt fel.' },
        { speaker: 'Narrator', text: 'Maja funderade.' },
        { speaker: 'Maja', text: 'Så du hittar inte saker som gäller bara här hos mig?' },
        { speaker: 'Gnista', text: 'Precis. Jag har tränats på mycket information, men inte allt. Om något bara finns i din stad, din skola eller din park, kan jag gissa fel. Därför är det viktigt att du dubbelkollar viktiga saker.' },
        { speaker: 'Narrator', text: 'Maja nickade långsamt.' },
        { speaker: 'Maja', text: 'Okej. Då vet jag en regel.' },
        { speaker: 'Narrator', text: 'Hon satte sig rak i ryggen och sa:' },
        { speaker: 'Maja', text: 'När det gäller saker här i mitt liv — som kiosken, skolan eller vad som finns i vår stad — då är det jag, eller en vuxen, som vet bäst. Du kan gissa, men jag måste tänka själv.' },
        { speaker: 'Gnista', text: 'Det är helt rätt. Det är så man använder AI på ett smart sätt. Fråga — tänk — och dubbelkolla vid behov.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Det känns bra. Då vet jag när jag kan lita på mig själv istället för dig.' },
      ]
    }
  },
  {
    id: 'etik',
    title: 'Etik',
    description: 'Etiska överväganden och ansvarsfrågor kring AI',
    story: {
      title: 'Kapitel 4 – Gnista och bilderna',
      dialogue: [
        { speaker: 'Narrator', text: 'En dag satt Maja i klassrummet med sin kompis Leo. De jobbade med ett bildprojekt och fick använda surfplattor för att skapa egna affischer.' },
        { speaker: 'Leo', text: 'Vi kan göra en bild på dig som superhjälte! Vi lägger bara in en bild av dig i Gnista!' },
        { speaker: 'Narrator', text: 'Han höll upp surfplattan och var på väg att ta en bild på Maja. Maja höjde handen.' },
        { speaker: 'Maja', text: 'Vänta lite, Leo… Får man verkligen göra så? Alltså… ta en bild på mig och lägga in i ett program?' },
        { speaker: 'Narrator', text: 'Leo ryckte på axlarna.' },
        { speaker: 'Leo', text: 'Det är ju bara på skoj.' },
        { speaker: 'Narrator', text: 'Maja öppnade sin surfplatta.' },
        { speaker: 'Maja', text: 'Gnista, vad säger du?' },
        { speaker: 'Narrator', text: 'Gnista dök upp på skärmen.' },
        { speaker: 'Gnista', text: 'Jag kan inte bestämma över sådant. Jag har inga känslor och blir inte glad eller ledsen. Men människor kan bli ledsna, arga eller känna sig obekväma om någon använder en bild på dem utan att fråga.' },
        { speaker: 'Narrator', text: 'Leo blev tyst en stund.' },
        { speaker: 'Leo', text: 'Så… man måste fråga först?' },
        { speaker: 'Gnista', text: 'Ja. Det är ni människor som bestämmer vad som är schysst och rättvist. Jag följer bara instruktioner. Men ni behöver tänka på hur andra kan känna. Det är alltid en bra idé att fråga innan man använder en bild på någon annan.' },
        { speaker: 'Narrator', text: 'Maja nickade.' },
        { speaker: 'Maja', text: 'Det känns bättre så. Om någon skulle lägga upp en bild på mig utan att fråga… ja, då kanske jag inte skulle gilla det.' },
        { speaker: 'Gnista', text: 'Det gäller också vad man skriver. Jag kan hjälpa till att skriva saker snabbt, men jag vet inte om orden är snälla eller elaka. Där måste ni vara extra försiktiga.' },
        { speaker: 'Narrator', text: 'Leo satte ner surfplattan.' },
        { speaker: 'Leo', text: 'Okej. Då gör vi det på rätt sätt. Maja, får jag använda en bild på dig som superhjälte?' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Ja, om jag får välja vilken bild!' },
        { speaker: 'Narrator', text: 'Leo skrattade.' },
        { speaker: 'Leo', text: 'Deal!' },
        { speaker: 'Gnista', text: 'En sista sak: Jag tränas på massor av bilder och texter som andra människor gjort. Därför är det viktigt att ni också är rädda om andras verk. Fråga. Var snäll. Och tänk efter före.' },
        { speaker: 'Narrator', text: 'Maja och Leo nickade samtidigt.' },
        { speaker: 'Maja', text: 'Det låter rättvist.' },
      ]
    }
  },
  {
    id: 'manniska-och-maskin',
    title: 'Människa & maskin',
    description: 'Relationen mellan människor och AI, autenticitet och kreativitet',
    story: {
      title: 'Kapitel 5 – Team Maja',
      dialogue: [
        { speaker: 'Narrator', text: 'Medan de letade tänkte Maja på något viktigt.' },
        { speaker: 'Maja', text: 'Gnista kan hjälpa mig med ord och idéer. Men jag är den som bestämmer vad jag ska göra. Jag kan leka. Trösta. Förstå hur andra känner sig. Det kan inte en dator.' },
        { speaker: 'Narrator', text: 'När de hittade pennan under ett bord jublade Sara högt. De sprang ut och fortsatte leka. Senare, när Maja öppnade surfplattan igen, sa hon:' },
        { speaker: 'Maja', text: 'Gnista, du är bra på mycket. Men jag är ändå chefen.' },
        { speaker: 'Gnista', text: 'Det stämmer. Jag är som en stark motor som kan räkna snabbt, men du bestämmer alltid riktning och fart. Vi är ett bra team – så länge du leder.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Exakt. Team Maja.' },
      ]
    }
  },
  {
    id: 'framtid-och-samhalle',
    title: 'Framtid & samhälle',
    description: 'AI:s samhällspåverkan, demokrati och framtidsperspektiv',
    story: {
      title: 'Kapitel 6 – Maja gör AI-safari',
      dialogue: [
        { speaker: 'Narrator', text: 'En lördag följde Maja med sin mamma till stan. De skulle köpa nya gympaskor och äta lunch ute. När de steg av bussen såg Maja sig omkring.' },
        { speaker: 'Maja', text: 'Mamma, finns det AI här också? Alltså… utanför surfplattan?' },
        { speaker: 'Narrator', text: 'Mamman log.' },
        { speaker: 'Mamma', text: 'Ja, faktiskt. AI finns på fler ställen än man tror. Inte som figurer eller robotar, men som små program som hjälper saker att fungera.' },
        { speaker: 'Maja', text: 'Kan vi titta efter?' },
        { speaker: 'Mamma', text: 'Det kan vi. Vi gör en AI-safari!' },
        { speaker: 'Narrator', text: 'De började gå längs gatan. Först stannade mamman vid trafikljuset.' },
        { speaker: 'Mamma', text: 'Det här vet när bilarna står i kö. Ett datorprogram hjälper till att räkna ut hur länge det ska vara rött och grönt.' },
        { speaker: 'Maja', text: 'Så det är också som en liten… hjärnmotor?' },
        { speaker: 'Mamma', text: 'Precis. Men en väldigt enkel sådan.' },
        { speaker: 'Narrator', text: 'De fortsatte. Utanför sportaffären tog mamman upp mobilen.' },
        { speaker: 'Mamma', text: 'Jag ska kolla vad som finns inne. Den här appen använder AI för att gissa vilken väg som är snabbast och när bussarna kommer.' },
        { speaker: 'Narrator', text: 'Maja tittade storslaget på mobilen.' },
        { speaker: 'Maja', text: 'Så den gissar också efter mönster?' },
        { speaker: 'Mamma', text: 'Ja. Precis som Gnista.' },
        { speaker: 'Narrator', text: 'När de kom in i affären provade Maja ett par blå gympaskor. De passade perfekt. Vid kassan viskade Maja:' },
        { speaker: 'Maja', text: 'Finns det AI här också?' },
        { speaker: 'Narrator', text: 'Kassörskan skrattade.' },
        { speaker: 'Kassörskan', text: 'Ja, ibland hjälper datorprogram oss att hålla reda på vilka skor som finns i lager och vilka storlekar som säljer snabbast.' },
        { speaker: 'Narrator', text: 'Sen gick de ut på torget. Där stod en gatumusikant som sjöng och spelade gitarr. En liten högtalare bredvid visade text på skärmen.' },
        { speaker: 'Musikanten', text: 'Den kan översätta vad jag sjunger till olika språk. Så turister förstår vad sången handlar om.' },
        { speaker: 'Mamma', text: 'Det är också AI.' },
        { speaker: 'Narrator', text: 'När de kom hem lade sig Maja i soffan.' },
        { speaker: 'Maja', text: 'Jag trodde AI bara fanns i spel och surfplattor. Men den finns ju överallt. Fast man märker det knappt.' },
        { speaker: 'Mamma', text: 'Just det. AI är som ett verktyg i bakgrunden. Det hjälper människor – men det tar inte över. Och det viktigaste är fortfarande människor: vi bestämmer, vi tänker och vi använder tekniken klokt.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Det var en bra safari. Nästa gång ska jag se hur många fler "hjärn-verktyg" jag kan hitta!' },
      ]
    }
  },
  {
    id: 'min-tankar-trappa',
    title: 'Min Tänkar-trappa',
    description: 'Epistemisk medvetenhet: Jag–AI–Jag',
    story: {
      title: 'Kapitel 7 – Majas tänkar-trappa',
      dialogue: [
        { speaker: 'Narrator', text: 'En eftermiddag satt Maja vid sitt skrivbord och gjorde en faktauppgift om rymden. Hon kom till en fråga om planeten Jupiter och blev osäker.' },
        { speaker: 'Maja', text: 'Gnista, kan du hjälpa mig igen?' },
        { speaker: 'Narrator', text: 'Gnista dök upp som vanligt.' },
        { speaker: 'Gnista', text: 'Jag kan försöka. Vad undrar du?' },
        { speaker: 'Narrator', text: 'Maja öppnade munnen för att fråga direkt — men stannade. Hon tänkte på allt hon och Gnista hade lärt sig tillsammans.' },
        { speaker: 'Maja', text: 'Vänta. Jag ska nog göra min tänkar-trappa först.' },
        { speaker: 'Narrator', text: 'Gnista lyste till.' },
        { speaker: 'Gnista', text: 'Det låter som en bra idé. Hur är den nu igen?' },
        { speaker: 'Narrator', text: 'Maja räknade på fingrarna.' },
        { speaker: 'Maja', text: '1. Jag tänker först. Först ska jag tänka själv. Vad vet jag redan om Jupiter? Jag vet att det är en stor gasplanet. Jag vet att den är mycket större än jorden. Och jag vet att den har en stor röd fläck.' },
        { speaker: 'Maja', text: '2. Jag frågar Gnista. Nästa steg är att fråga dig — men med en tydlig instruktion.' },
        { speaker: 'Narrator', text: 'Hon sa:' },
        { speaker: 'Maja', text: 'Gnista, kan du hjälpa mig att skriva en kort mening om varför Jupiter kallas en gasjätte?' },
        { speaker: 'Gnista', text: 'Jupiter kallas en gasjätte eftersom den är en enorm planet som mest består av gaser som väte och helium.' },
        { speaker: 'Narrator', text: 'Maja läste svaret noga.' },
        { speaker: 'Maja', text: '3. Jag tänker igen. Och nu ska jag tänka efter. Håller det här? Stämmer det med det jag vet? Och om jag är osäker — då måste jag fråga en vuxen eller kolla i en bok.' },
        { speaker: 'Gnista', text: 'Precis. Jag kan ge dig förslag, men du bestämmer vad som är rätt för din uppgift.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Så här är min tänkar-trappa: Tänk först → Fråga Gnista → Tänk efter.' },
        { speaker: 'Narrator', text: 'Hon ritade små symboler bredvid varje steg: en hjärna, en frågebubbla och ett förstoringsglas. Maja höll upp pappret.' },
        { speaker: 'Maja', text: 'Nu ska jag ha den här i min bänk. Då kommer jag alltid ihåg att jag är den som tänker. Gnista är bara ett hjälpverktyg i mitten.' },
        { speaker: 'Gnista', text: 'Det är en perfekt trappa. Och det bästa är att du leder den själv.' },
        { speaker: 'Narrator', text: 'Maja nickade nöjt.' },
        { speaker: 'Maja', text: 'Jag–AI–Jag. Det känns smart.' },
      ]
    }
  }
];
