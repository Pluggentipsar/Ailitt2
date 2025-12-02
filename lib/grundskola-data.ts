export type GradeLevel = '1-3' | '4-6';

export interface DialogueLine {
  speaker: 'Maja' | 'Gnista' | 'Narrator' | 'Leo' | 'Mamma' | 'Sara' | 'Kassörskan' | 'Musikanten' | 'Pappa' | 'Läraren' | 'Storebror' | 'Fröken' | 'Amir' | 'Li' | 'Barnen';
  text: string;
  image?: string;
}

export interface StoryChapter {
  title: string;
  dialogue: DialogueLine[];
  audio?: string;
}

export interface Activity {
  id?: string;
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

export interface GenerativeExampleSection {
  type: 'image' | 'music' | 'text' | 'video';
  title: string;
  description: string;
  content?: {
    images?: string[];
    audio?: string;
    textSamples?: { prompt: string; result: string }[];
    video?: string;
    videos?: string[];
  };
}

export interface GenerativeExamples {
  intro: {
    title: string;
    description: string;
  };
  sections: GenerativeExampleSection[];
}

export interface ChatbotActivity {
  title: string;
  description: string;
  prompt: string;
  response: string;
  icon: 'lightbulb' | 'book' | 'star' | 'help';
}

export interface ModulePart {
  id: string;
  title: string;
  description: string;
  icon?: string;
  cardImage?: string;
  story?: StoryChapter;
  learningMaterial?: {
    title: string;
    content: string;
    image?: string;
    image2?: string;
    video?: string;
  };
  activities?: Activity[];
  generativeExamples?: GenerativeExamples;
  chatbotActivities?: ChatbotActivity[];
}

export const grundskolaModules: ModulePart[] = [
  {
    id: 'berattelsen-om-ai',
    title: 'Berättelsen om AI',
    cardImage: '/del1.png',
    description: 'Hur började allt? Vi följer med Maja när hon upptäcker en gammal dator på vinden.',
    learningMaterial: {
      title: "Kapitel 1 – Berättelsen om AI: “Maja möter Gnista”",
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
      title: 'Kapitel 1 – Maja möter Gnista',
      audio: '/saga1.wav',
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
    cardImage: '/del2.png',
    description: 'Teknisk förståelse av hur AI-system fungerar',
    learningMaterial: {
      title: "Kapitel 2 – Vad är AI?: “Gnista inuti burken”",
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
      title: 'Kapitel 2 – Gnista inuti burken',
      audio: '/saga2.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Nästa dag satte sig Maja vid surfplattan igen. Gnista dök upp direkt med ett glatt pling.' },
        { speaker: 'Maja', text: 'Hej igen! Jag har funderat på en sak. Du ser ut att bo inuti min skärm… men får du verkligen plats där inne?' },
        { speaker: 'Narrator', text: 'Gnista blinkade lugnt.' },
        { speaker: 'Gnista', text: 'Det ser ut så, eller hur? Men egentligen är jag inte här inne i plattan. Det här är bara min bild.' },
        { speaker: 'Maja', text: 'Var är du då?' },
        { speaker: 'Gnista', text: 'Tänk dig att det går en lång, osynlig tråd från din surfplatta. Den tråden går iväg långt, långt bort, genom luften och marken, till ett jättestort hus fullt av superdatorer. Det är där min hjärna bor.', image: '/saga2_bild1.jpg' },
        { speaker: 'Narrator', text: 'Maja tittade på surfplattan.' },
        { speaker: 'Maja', text: 'Så du är… långt borta?' },
        { speaker: 'Gnista', text: 'Precis! Surfplattan är bara som en mikrofon och en högtalare. När du skriver till mig, skickar plattan iväg frågan genom den osynliga tråden till superdatorerna. De räknar ut svaret jättesnabbt och skickar tillbaka det till din skärm.' },
        { speaker: 'Narrator', text: 'Maja nickade.' },
        { speaker: 'Maja', text: 'Okej, jag fattar. Men hur kan superdatorerna veta saker då? Går de i skolan?' },
        { speaker: 'Narrator', text: 'Gnista skrattade till.' },
        { speaker: 'Gnista', text: 'Inte riktigt. Jag lär mig genom att leta efter mönster. Människor har visat mig massor av exempel – tusentals bilder på katter, hundar, bilar och hus. Till slut lär jag mig känna igen hur en katt brukar se ut.', image: '/saga2_bild2.jpg' },
        { speaker: 'Maja', text: 'Som när man gissar nästa siffra i matte? 2, 4, 6, 8…?', image: '/saga2_bild3.jpg' },
        { speaker: 'Gnista', text: 'Exakt så! Jag räknar ut vad som borde komma härnäst. Jag vet inte vad en katt är på riktigt – jag har aldrig klappat en. Men jag vet exakt vilket mönster som betyder ”katt”. Jag är en mästare på att gissa mönster.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Då förstår jag. Du är inte en person i plattan. Du är en superdator långt borta som är bra på att gissa.' },
        { speaker: 'Gnista', text: 'Mitt i prick.' },
      ]
    },
    activities: [
      {
        id: 'train-ai-game',
        title: 'Träna Gnista',
        type: 'digital',
        studentDescription: 'Hjälp Gnista att lära sig skillnaden på hundar och katter genom att visa bilder. Men se upp! Om du bara visar en sorts hundar kanske Gnista lär sig fel...',
        teacherInstructions: {
          purpose: 'Att eleverna ska förstå hur AI tränas med data och hur urvalet av data påverkar resultatet (bias).',
          steps: [
            'Låt eleverna testa "Lite data" först. Diskutera varför Gnista gissar fel.',
            'Testa sedan "Mycket data". Diskutera varför Gnista blir smartare.',
            'Prata om begreppet "bias" (snedvridning) – att AI:n bara kan det vi lär den.'
          ],
          examples: [
            'Om vi bara visar bilder på röda äpplen, tror AI:n att alla äpplen är röda.',
            'Om vi bara visar bilder på manliga läkare, kan AI:n tro att läkare alltid är män.'
          ]
        }
      },
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
    title: 'Skapande AI',
    cardImage: '/del3.png',
    description: 'Praktisk användning av AI-verktyg och strategier',
    learningMaterial: {
      title: "Kapitel 3 – Skapande AI",
      content: `
En del AI-program är tränade för att skapa saker — bilder, musik, texter och filmer.
Det kallas skapande AI.
När du vill att AI ska skapa något behöver du ge en instruktion, en prompt.

👉 **Ju tydligare du berättar vad du vill ha, desto bättre kan AI gissa.**
Otydlig prompt: “Gör en superhjältekatt.”
Tydlig prompt: “En orange katt med gröna ögon, blå mantel och blixtar runt tassarna.”
Det är din idé som är viktigast.
AI hittar inte på åt dig, den försöker bara gissa utifrån det du sagt.

👉 **AI är som en superpenna. Du håller i pennan.**
AI kan också rita saker som ser verkliga ut, men som inte finns på riktigt.
En bild kan se helt äkta ut — fast den är påhittad av AI.

👉 **AI-bilder kan vara helt påhittade.**
Och eftersom AI tränats på många exempel kan den ibland visa samma typer av personer.
Då kan du hjälpa den säga: “Visa fler olika!”
Så allt blir rättvist.
      `,
      image: "/kap3.png",
      video: "/3.mp4"
    },
    story: {
      title: 'Kapitel 3 – Skapande AI: ”Bygga bilder och berättelser”',
      audio: '/saga3.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Några dagar senare satt Maja med sina färgpennor. Hon hade bestämt sig för att göra en egen serietidning. Den skulle handla om Superkatten – en modig katt som räddade världen på nätterna. Hon hade ritat några rutor, men hon ville ha en riktigt häftig bild till framsidan.' },
        { speaker: 'Narrator', text: 'Hon öppnade surfplattan.' },
        { speaker: 'Maja', text: 'Gnista, jag behöver hjälp med min serie.' },
        { speaker: 'Gnista', text: 'Vad spännande! Jag fungerar som en superpenna. Du bestämmer, och jag ritar. Vad ska vi göra?' },
        { speaker: 'Maja', text: 'En bild på Superkatten!' },
        { speaker: 'Gnista', text: 'Jag testar.' },
        { speaker: 'Narrator', text: 'En bild dök upp på skärmen. Det var en grå katt som satt på en matta. Den såg snäll ut, men inte alls som en superhjälte.' },
        { speaker: 'Maja', text: 'Nja… Det där ser ju bara ut som en vanlig bondkatt.' },
        { speaker: 'Gnista', text: 'Förlåt. Jag kan bara göra det du säger åt mig. Om du bara säger ”katt”, då gissar jag på en vanlig katt. Du måste berätta exakt hur din Superkatt ser ut. Ge mig en tydlig instruktion!' },
        { speaker: 'Narrator', text: 'Maja blundade och tänkte på sin idé.' },
        { speaker: 'Maja', text: 'Okej. Nu vet jag.' },
        { speaker: 'Narrator', text: 'Hon tog ett djupt andetag och sa tydligt:' },
        { speaker: 'Maja', text: 'Skapa en bild på en orange katt som står på ett hustak. Den ska ha en blå mantel som fladdrar i vinden, gröna ögon och solglasögon. Och det ska se ut som en tecknad serie!' },
        { speaker: 'Gnista', text: 'Nu fick jag massor av bra information! Nu kör vi.' },
        { speaker: 'Narrator', text: 'Det blinkade till på skärmen. Den nya bilden visade en cool orange katt på ett tak, precis som Maja hade sagt. Manteln fladdrade och solglasögonen blänkte.' },
        { speaker: 'Maja', text: 'JAAA! Det där är Superkatten! Exakt så!' },
        { speaker: 'Gnista', text: 'Snyggt jobbat. Det var din beskrivning som gjorde det. Utan dina idéer är jag bara en tom skärm. Du är konstnären, jag är bara verktyget.' },
        { speaker: 'Narrator', text: 'Maja sparade bilden. Nu kunde serietidningen börja på riktigt.' },
      ]
    },
    activities: [
      {
        title: '1. Superpenna-leken – “Otydlig vs Tydlig”',
        studentDescription: 'Gnista kan rita – men bara det du säger! Vi ska prova att ge Gnista en oklar instruktion först och sedan en supertydlig.',
        teacherInstructions: {
          purpose: 'Barnen upptäcker att AI inte “tänker själv”, utan ritar det vi beskriver. Och: en tydlig prompt ger ett tydligare resultat.',
          steps: [
            'Låt barnen enas om en oklar prompt, t.ex.: “Rita en katt som är en hjälte.”',
            'Ni (inte eleverna) använder er AI-bildgenerator.',
            'Visa bilden. Fråga: Blev det som vi tänkte oss? Vad saknas?',
            'Nu skapar ni en bättre prompt: “Rita en hjälte-katt med blå mantel, glada ögon, som står på ett tak på natten.”',
            'Visa skillnaden.'
          ],
          examples: [
            'Otydlig: “En katt”',
            'Tydlig: “En orange katt med hatt”'
          ]
        },
        type: 'digital'
      },
      {
        title: '2. Bildfixarna – “Hitta ordet som ändrar allt”',
        studentDescription: 'Ni får två bilder som Gnista gjort. En blev bra, en blev lite tokig. Ert uppdrag: lista ut vilket ord som gjort bilden tokig!',
        teacherInstructions: {
          purpose: 'Barnen tränar att se orsak → verkan: hur ord påverkar AI:s bild.',
          steps: [
            'Skapa två bilder med nästan samma prompt.',
            'Barnen ska gissa: vilket ord gjorde skillnaden?',
            'Skriv upp “trickord” som kan ändra en bild totalt.'
          ],
          examples: [
            'Plats',
            'Färg',
            'Material',
            'Humör',
            'Stil'
          ]
        },
        type: 'digital'
      },
      {
        title: '3. Bygg en hjälte! – “Från papper till AI”',
        studentDescription: 'Rita en hjälte som bara du kan hitta på! Ge din hjälte ett namn och tre egenskaper.',
        teacherInstructions: {
          purpose: 'Barnen gör sin egen originalfigur med papper, penna, färger → läraren genererar AI-versioner.',
          steps: [
            'Låt eleverna rita.',
            'Samla in tre ord från varje elev (ex. “snäll”, “vindar”, “cykelhjälm”).',
            'Läraren matar in en prompt baserad på elevens text.',
            'Visa AI-bilden och låt eleven jämföra.'
          ]
        },
        type: 'analog'
      },
      {
        title: '4. Vad saknas i bilden? – “AI vet inte allt”',
        studentDescription: 'Gnista har ritat en bild – men den saknar något viktigt! Kan ni se vad som saknas och lägga till det i en ny prompt?',
        teacherInstructions: {
          purpose: 'Barnen tränar förmågan att se vad AI inte kan veta.',
          steps: [
            'Ge en medvetet ofullständig prompt, t.ex.: “A birthday party for a dog.”',
            'AI kommer kanske rita: inga människor, konstig tårta, för få hundar.',
            'Barnen får lista: Vad saknas? Vad borde finnas?',
            'Skapa en ny prompt utifrån klassens idéer.'
          ]
        },
        type: 'digital'
      },
      {
        title: '5. Prompt-labbet – “Bygg instruktioner som lego”',
        studentDescription: 'Vi bygger instruktioner som legobitar! Plocka ihop korten för att skapa en superprompt.',
        teacherInstructions: {
          purpose: 'Barnen tränar att bygga tydliga instruktioner med konkreta delar.',
          steps: [
            'Skapa 5 kategorier med färgkodade kort: Vem, Gör vad, Var, Hur ser det ut, Stil.',
            'Barnen väljer 1 kort från varje kategori → prompt.'
          ]
        },
        type: 'digital'
      },
      {
        title: '6. Saga med två hjärnor – “Du börjar, AI fortsätter”',
        studentDescription: 'Du börjar sagan. Gnista fortsätter. Du avslutar. Det är du som bestämmer vad som händer.',
        teacherInstructions: {
          purpose: 'Barnen lär sig ägande över berättelser.',
          steps: [
            'Ge ramen: “Det var en gång en figur som hittade… (barn fyller i)”',
            'Läraren skriver in barnens mening → AI ger 1–2 meningars fortsättning.',
            'Barnen ska “rädda tillbaka” sagan genom att avsluta den så som de vill.'
          ]
        },
        type: 'digital'
      },
      {
        title: '7. AI eller Maja? – “Vem har gjort vad?”',
        studentDescription: 'Klicka: tror du att en människa eller AI har gjort detta?',
        teacherInstructions: {
          purpose: 'Kopplar direkt till AI-litteracitet. Skilja på människa/AI.',
          steps: [
            'Visa 6 exempel (3 AI, 3 barns bilder/texter).',
            'Låt barnen gissa.',
            'Prata om: Vad var likt? Vad är unikt mänskligt?'
          ]
        },
        type: 'digital'
      },
      {
        title: '8. Skapa en konstutställning – “AI & jag”',
        studentDescription: 'Skapa en bild. Låt sedan Gnista göra en version. Ställ ut båda och berätta: vad är likt? Vad är ditt?',
        teacherInstructions: {
          purpose: 'Barnen ser att AI inte ersätter deras idéer – den blir ett verktyg.',
          steps: [
            'Låt alla rita en bild.',
            'Läraren gör AI-versioner.',
            'Bygg en utställning med två bilder per elev.'
          ]
        },
        type: 'analog'
      },
      {
        title: '9. Instruktion → Konstnär',
        studentDescription: 'Fysiskt efterlikna processen där en instruktion (prompt) leder till ett skapat resultat.',
        teacherInstructions: {
          purpose: 'Förstå prompt-processen analogt.',
          steps: [
            'Dela in eleverna i par.',
            'Elev A skriver en enkel instruktion på en lapp (t.ex. "Rita en lila katt med tre ögon").',
            'Elev A ger lappen till Elev B utan att säga något mer.',
            'Elev B ritar bilden baserat endast på instruktionen på lappen.',
            'Jämför resultatet med instruktionen.',
            'Byt roller.'
          ],
          discussion: 'Blev bilden som Elev A tänkte sig? Var instruktionen tydlig? Hur olika blev resultaten?'
        },
        type: 'analog'
      },
      {
        title: '10. Gissa Instruktionen!',
        studentDescription: 'Förstärka kopplingen mellan resultat och instruktion genom att tänka baklänges.',
        teacherInstructions: {
          purpose: 'Träna på att se kopplingen mellan prompt och resultat.',
          steps: [
            'Läraren visar en bild eller läser en mycket kort text för klassen.',
            'Fråga eleverna: "Om en Skapande AI gjorde den här, vad tror ni människan skrev i instruktionen/prompten?"',
            'Samla flera förslag från eleverna på tavlan.',
            'Jämför de olika förslagen – hur lika eller olika är de?'
          ],
          discussion: 'Kan flera olika instruktioner leda till ungefär samma resultat? Vilka detaljer gav ledtrådar?'
        },
        type: 'analog'
      },
      {
        title: '11. AI Bygger med Klossar',
        studentDescription: 'Illustrera hur AI kan kombinera olika idéer för att skapa något nytt.',
        teacherInstructions: {
          purpose: 'Visa hur AI kombinerar koncept.',
          steps: [
            'Skapa bildkort/ordkort i tre kategorier: VEM/VAD, HURDAN, VAR.',
            'Låt eleverna dra ett kort från varje kategori.',
            'Uppgift: Rita eller skriv om det som kombinerar dessa tre kort (t.ex. Hund + Prickig + På ett moln).',
            'Visa upp resultaten för klassen.'
          ],
          discussion: 'Hur var det att kombinera helt olika idéer? Liknar hur AI plockar ihop delar från sin "kunskapsbank".'
        },
        type: 'analog'
      },
      {
        title: '12. Text-Stafetten',
        studentDescription: 'Lekfullt efterlikna hur AI kan bygga text sekventiellt.',
        teacherInstructions: {
          purpose: 'Förstå sekventiell generering (token för token).',
          steps: [
            'Sitt i en ring.',
            'Läraren börjar med en mening, t.ex. "Det var en mörk och stormig natt..."',
            'Nästa elev fortsätter med nästa korta mening som passar ihop.',
            'Fortsätt runt i klassen tills alla har bidragit.',
            'Läs upp den korta berättelsen som klassen skapat tillsammans.'
          ],
          discussion: 'Blev berättelsen som du förväntade dig? Visste du hur den skulle sluta? AI vet oftast inte heller slutet!'
        },
        type: 'analog'
      },
      {
        title: '13. Skapa Prompten till Din Egen Text',
        studentDescription: 'Reflektera över kärnan i en egen text och översätta det till instruktionsord.\n\nUppgift:\n1. Hämta en kort text du skrivit.\n2. Hitta 3-5 nyckelord som beskriver den.\n3. Skriv ner dem - det är din "prompt-idé"!\n4. Rita en bild som passar.',
        teacherInstructions: {
          purpose: 'Öva på att sammanfatta och hitta nyckelord (prompting).',
          steps: [
            'Dela ut arbetsblad eller papper.',
            'Låt eleverna välja en egen text.',
            'De ska identifiera kärnan i texten och formulera det som en prompt.'
          ]
        },
        type: 'analog'
      },
      {
        title: '14. Min Drömbilds-Prompt',
        studentDescription: 'Fantasera kring möjligheterna med AI-bildskapande och formulera en önskan som en instruktion.\n\nUppgift:\n1. Önska en bild från din vildaste fantasi.\n2. Skriv instruktionen (prompten) så detaljerat du kan.\n3. Rita hur du hoppas bilden skulle se ut.',
        teacherInstructions: {
          purpose: 'Öva på detaljrikedom i prompts.',
          steps: [
            'Diskutera att AI behöver detaljer för att skapa rätt bild.',
            'Låt eleverna formulera sina drömprompts.'
          ]
        },
        type: 'analog'
      },
      {
        title: '15. Hitta på en Ny Varelse – och dess Prompt!',
        studentDescription: 'Använda fantasin för att kombinera koncept och koppla det till en enkel prompt.\n\nUppgift:\n1. Hitta på en fantasivarelse genom att kombinera minst TRE saker (t.ex. ananas + bil + vingar).\n2. Rita din skapelse!\n3. Skriv de tre sakerna du kombinerade - det är din prompt.',
        teacherInstructions: {
          purpose: 'Kreativ kombination och prompting.',
          steps: [
            'Uppmuntra galna kombinationer.',
            'Visa att prompten är "receptet" för bilden.'
          ]
        },
        type: 'analog'
      },
      {
        title: '16. Gnista Skriver en Mini-Text om...',
        studentDescription: 'Tillämpa idén om textgenerering på ett personligt eller valt ämne.\n\nUppgift:\n1. Välj ett ämne.\n2. Skriv 2-3 ord som instruktion (prompt).\n3. Skriv 1-2 meningar som du tror att Gnista skulle skriva baserat på din instruktion!',
        teacherInstructions: {
          purpose: 'Förstå input-output i textgenerering.',
          steps: [
            'Låt eleverna agera AI och gissa vad resultatet skulle bli av en kort prompt.'
          ]
        },
        type: 'analog'
      },
      {
        title: '17. Spelutmaning: Vilken prompt skapade texten?',
        studentDescription: 'Testa dina kunskaper om prompt-design! Läs texten och gissa vilken prompt som kan ha använts för att skapa den. Ju mer specifik en prompt är, desto mer detaljerat blir AI:ns svar.',
        teacherInstructions: {
          purpose: 'Träna eleverna i att förstå kopplingen mellan prompt (instruktion) och resultat (text/bild).',
          steps: [
            'Låt eleverna spela spelet enskilt eller i par.',
            'Diskutera efteråt: Varför var vissa frågor svårare än andra?',
            'Vad lärde ni er om att skriva tydliga prompts?'
          ]
        },
        type: 'digital'
      }
    ],
    generativeExamples: {
      intro: {
        title: 'Vad kan skapande AI göra?',
        description: 'Skapande AI kan generera många olika typer av innehåll baserat på instruktioner - dessa kallas för "prompts". Ju mer detaljerat du beskriver vad du vill ha, desto mer specifikt blir resultatet!'
      },
      sections: [
        {
          type: 'image',
          title: 'AI som skapar bilder',
          description: 'Kan skapa alla möjliga sorters bilder baserat på dina beskrivningar - från enkla teckningar till detaljerade konstverk!',
          content: {
            images: ['/exempel_bild1.png', '/exempel_bild2.png', '/exempel_bild3.png']
          }
        },
        {
          type: 'music',
          title: 'AI som skapar musik',
          description: 'Kan komponera melodier, ljudeffekter och hela musikstycken i olika stilar och känslostämningar.',
          content: {
            audio: '/Exempel_ljud.mp3',
            video: '/Exempel_musik.mp4'
          }
        },
        {
          type: 'text',
          title: 'AI som skapar text',
          description: 'Kan skriva historier, dikter, faktatexter och mycket mer baserat på dina idéer och teman.',
          content: {
            textSamples: [
              {
                prompt: 'Skriv en dikt om en glad robot.',
                result: 'En robot av plåt och skruv,\ngick ut på en promenad så ljuv.\nHan gnisslade glatt en melodi,\noch kände sig plötsligt helt fri!'
              },
              {
                prompt: 'Berätta fakta om rymden för en 7-åring.',
                result: 'Rymden är jättestor och full av stjärnor! Jorden är en planet som snurrar runt solen. Det finns ingen luft i rymden, så astronauter måste ha rymddräkt.'
              }
            ]
          }
        },
        {
          type: 'video',
          title: 'AI som skapar video',
          description: 'Kan skapa korta animationer och videoklipp baserat på beskrivningar av vad som ska hända.',
          content: {
            videos: ['/exempel_video.mp4', '/exempel_video2.mp4']
          }
        }
      ]
    },
    chatbotActivities: [
      {
        title: 'Lära sig nya saker',
        description: 'Du kan fråga chattbotar om saker du är nyfiken på för att lära dig mer om världen.',
        prompt: 'Berätta tre spännande fakta om dinosaurier!',
        response: 'Självklart! 1. Argentinosaurus var lika tung som 15 elefanter! 2. Vissa dinosaurier hade fjädrar, precis som fåglar. 3. T-Rex hade tänder stora som bananer!',
        icon: 'lightbulb'
      },
      {
        title: 'Skriva berättelser',
        description: 'Be chattboten hjälpa dig att hitta på sagor eller fortsätta på en berättelse du börjat på.',
        prompt: 'Skriv en saga om en rymdraket som är rädd för höjder.',
        response: 'Det var en gång en liten rymdraket som hette Rulle. Alla andra raketer ville flyga högt, men Rulle ville hellre rulla på marken. En dag...',
        icon: 'book'
      },
      {
        title: 'Få hjälp med idéer',
        description: 'Har du idétorka? Chattboten kan ge förslag på lekar, presenter eller vad du ska rita.',
        prompt: 'Jag ska ha kalas. Vad kan vi leka?',
        response: 'Här är några roliga lekar: 1. Dansstopp med robotdans. 2. Skattjakt där ledtrådarna är gåtor. 3. "Sätta svansen på kometen".',
        icon: 'star'
      },
      {
        title: 'Förklara svåra ord',
        description: 'Om du stöter på ett ord du inte förstår kan chattboten förklara det på ett enkelt sätt.',
        prompt: 'Vad betyder "demokrati"?',
        response: 'Demokrati betyder att alla får vara med och bestämma. I Sverige har vi demokrati, så alla vuxna får rösta om vilka som ska styra landet.',
        icon: 'help'
      }
    ]
  },
  {
    id: 'latsas-bilder',
    title: 'Fejkbilder och fejkfilmer',
    cardImage: '/ny_kap4.png',
    description: 'När AI lurar ögat - om deepfakes och källkritik',
    story: {
      title: 'Kapitel 4 – Låtsasbilder & låtsasfilmer: “Filmen om rektorn”',
      dialogue: [
        { speaker: 'Narrator', text: 'En tisdag efter skolan satt Maja och hennes kompis Leo i soffan hemma hos Leo. De hade fått låna Leos mammas surfplatta för att titta på roliga klipp.' },
        { speaker: 'Leo', text: 'Vi söker på ”roliga djur”!' },
        { speaker: 'Narrator', text: 'En massa filmer dök upp – hundar som åkte skateboard, katter som spelade piano och papegojor som pratade. Maja skrattade så att hon nästan ramlade bakåt.' },
        { speaker: 'Maja', text: 'Det här är det bästa jag vet.' },
        { speaker: 'Narrator', text: 'Plötsligt stannade Leo till.' },
        { speaker: 'Leo', text: 'Men kolla här…' },
        { speaker: 'Narrator', text: 'Han pekade på en ny video som dök upp överst. På den lilla bilden såg det ut som om deras rektor stod på skolans tak – utklädd till superhjälte, med mantel och allt.' },
        { speaker: 'Maja', text: 'Va? Det där ser ju ut som vår rektor!' },
        { speaker: 'Narrator', text: 'Leo tryckte på videon. Filmen startade. På skärmen syntes mycket riktigt deras rektor. Hon stod på skolans tak med en blå mantel. Hon vinkade, hoppade och flög plötsligt rakt upp i luften som en superhjälte. I filmen ropade hon:' },
        { speaker: 'Narrator', text: '”Jag kan flyga! Jag ska göra skolan till ett rymdskepp!”' },
        { speaker: 'Narrator', text: 'Maja stirrade.' },
        { speaker: 'Maja', text: 'Men… det där kan inte stämma. Hon kan ju inte flyga på riktigt?' },
        { speaker: 'Leo', text: 'Det är nog bara ett skämt. Eller… kan AI göra såna här filmer?' },
        { speaker: 'Narrator', text: 'Just då ploppade en välbekant gnista fram längst ner på skärmen. Gnista dök upp som en liten lysande prick med sina runda ögon.' },
        { speaker: 'Gnista', text: 'Hej! Jag ser att ni tittar på något spännande.' },
        { speaker: 'Maja', text: 'Gnista! Vi hittade en film där det ser ut som om vår rektor kan flyga. Men det kan hon ju inte. Är filmen fejk?' },
        { speaker: 'Gnista', text: 'Ja, den här filmen är nog på låtsas. Det finns AI-program som kan klippa och klistra ihop ansikten och kroppar. De kan få någon att se ut som om hen gör saker som aldrig har hänt.' },
        { speaker: 'Leo', text: 'Så… det är inte vår rektor på riktigt?' },
        { speaker: 'Gnista', text: 'Nej. Det är någon som har gjort en fejkfilm. De har kanske tagit en bild av rektorn och satt in den i en annan film, med hjälp av AI. Det kallas ibland låtsasfilmer eller deepfakes. De kan lura ögonen – men de är inte sanna.' },
        { speaker: 'Maja', text: 'Men hon pratar ju i filmen. Hennes röst låter likadan.' },
        { speaker: 'Gnista', text: 'AI kan låta som en röst också. Den kan härma röster. Men även om det låter som rektorn, betyder det inte att hon har sagt så.' },
        { speaker: 'Leo', text: 'Så någon kan göra en film där det ser ut som att en person gör eller säger något dumt – fast personen aldrig har gjort det?' },
        { speaker: 'Gnista', text: 'Tyvärr ja. Det är därför ni måste vara extra kloka när ni ser såna här filmer.' },
        { speaker: 'Maja', text: 'Hur vet vi då om en film är på riktigt eller på låtsas?' },
        { speaker: 'Gnista', text: 'Bra fråga! Ni kan börja med att fråga er: Skulle den här personen göra så här på riktigt? Verkar det rimligt? Och sen: Var kommer filmen ifrån? Är det en seriös sida – eller någon som bara vill skoja eller lura?' },
        { speaker: 'Leo', text: 'Jag är glad att vi inte skickade filmen till klasschatten. Folk hade kanske trott att rektorn var knäpp.' },
        { speaker: 'Gnista', text: 'Precis. Det är därför vi måste vara snälla med vad vi sprider. En fejkfilm kan göra någon väldigt ledsen, även om den är gjord som ett ”skämt”.' },
        { speaker: 'Maja', text: 'Om vi är osäkra… då kan vi fråga en vuxen först. Till exempel min pappa. Han brukar fatta sånt.' },
        { speaker: 'Gnista', text: 'Det är en jättebra idé. När något känns konstigt, eller för tokigt för att vara sant – då är det dags att pausa, tänka och fråga en vuxen.' },
        { speaker: 'Leo', text: 'Jag tänker inte sprida den här. Vi kan ju rita en superhjälte-rektor istället, som alla vet är på låtsas.' },
        { speaker: 'Maja', text: 'Ja! Då vet alla att det bara är fantasi. Och riktiga rektorn slipper bli ledsen.' },
        { speaker: 'Gnista', text: 'Ni tog ett klokt beslut. Kom ihåg: era ögon kan bli lurade – men ert tänkande kan vara starkare än vilken fejkfilm som helst.' },
        { speaker: 'Maja', text: 'Då bestämmer vi så här. När vi ser något som ser verkligt ut men känns konstigt, då gör vi Låtsas-kollen.' },
        { speaker: 'Leo', text: 'Låtsas-kollen?' },
        { speaker: 'Maja', text: 'Ja. Ett: Vi pausar. Två: Vi tänker – kan det här verkligen ha hänt? Tre: Vi frågar en vuxen.' },
        { speaker: 'Leo', text: 'Det är en bra plan. Och sen kan vi göra våra egna tokfilmer – fast med teckningar och serier i stället.' },
        { speaker: 'Gnista', text: 'Det låter som det säkraste och snällaste sättet att ha kul med fantasi.' },
        { speaker: 'Narrator', text: 'Och någonstans i skolan, utan att veta något om filmen, satt den riktiga rektorn på sitt kontor och rättade papper – helt utan mantel.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 4 – Låtsasbilder & låtsasfilmer: “När AI lurar ögat”',
      content: `
**Ibland kan AI skapa bilder och filmer som ser väldigt äkta ut, fast de inte är det.**
De kan se ut som om en riktig person gör något – pratar, dansar eller flyger – fast det aldrig har hänt.

👉 **AI kan få något att se verkligt ut, även om det är på låtsas.**
En AI kan klippa och klistra ihop ansikten, röster och platser från olika filmer och bilder.
Det betyder att du kan se:
• en kompis som säger något hen aldrig sagt
• en vuxen som gör något som aldrig har hänt
• en kändis som dansar på månen fast de inte varit där
• eller någon som flyger som en superhjälte – fast personen inte kan flyga

Det kallas ibland **låtsasbilder** eller **låtsasfilmer** (deepfakes).
De kan lura ögat – men de är inte sanna.

👉 **En bild eller film är inte bevis.**
Bara för att något ser äkta ut betyder det inte att det har hänt.
AI kan hitta på scener, ord och ansikten.
Det är därför vi alltid ska tänka själva när vi ser något som känns konstigt:
• “Kan personen göra så här på riktigt?”
• “Verkar det rimligt eller helt tokigt?”
• “Vem har gjort filmen?”
• “Varför vill de att jag ska se den här?”

👉 **Om något känns konstigt – fråga en vuxen.**
En vuxen kan hjälpa dig avgöra om något är på riktigt eller på låtsas.
Att fråga är en superkraft.

Och kom ihåg:
👉 **Vi ska aldrig skicka vidare en film eller bild om vi inte är säkra på att den är sann och snäll.**
Precis som vi inte vill att någon ska sprida låtsasbilder på oss, ska vi vara rädda om andra.
`,
      image: '/fejkbilder.png',
      video: '/ai_latsas.mp4'
    },
    activities: [
      {
        title: '1. Låtsas eller på riktigt?',
        studentDescription: 'Titta på bilderna och gissa: Är det på riktigt eller på låtsas? Det är okej att vara osäker!',
        teacherInstructions: {
          purpose: 'Träna på att ifrågasätta bilder och förstå att allt man ser inte är sant.',
          steps: [
            'Visa olika bilder (t.ex. någon som flyger, ett djur som spelar piano, en vuxen i superhjälte-mantel).',
            'Använd gärna quiz från SVT eller Aftonbladet som underlag.',
            'Låt eleverna gissa: På riktigt, På låtsas, eller Osäker.',
            'Diskutera varför det är svårt att veta.'
          ],
          discussion: 'Hur kändes det att gissa fel? Varför är det viktigt att veta om en bild är sann?'
        },
        type: 'analog'
      },
      {
        title: '2. Skapa trygg-regeln: “Pausa – Tänk – Fråga”',
        studentDescription: 'Rita tre symboler som hjälper dig att komma ihåg vad du ska göra när något ser konstigt ut.',
        teacherInstructions: {
          purpose: 'Skapa en minnesregel för källkritik.',
          steps: [
            'Låt eleverna rita tre symboler:',
            '1. En pausknapp',
            '2. En tänkande figur',
            '3. En vuxen',
            'Skriv under: “När något ser konstigt ut: Pausa – Tänk – Fråga.”'
          ]
        },
        type: 'analog'
      },
      {
        title: '3. Hemligt klassordet',
        studentDescription: 'Hitta på ett hemligt kodord som bara klassen vet. Det kan skydda er om någon försöker luras med en fejk-röst!',
        teacherInstructions: {
          purpose: 'Förstå att röster kan låta lika – och därför behövs en säkerhetssignal.',
          steps: [
            'Förklara att ibland kan en dator låta nästan som en person man känner.',
            'Klassen får hitta på ett hemligt kodord som bara klassen och läraren känner till (t.ex. “Blå banan”).',
            'Träna på att använda ordet i en lekfull roll-lek:',
            'Scenario: Läraren låtsas ringa och vara någon annan. Eleverna frågar efter kodordet.',
            'Uppmana eleverna att hitta på egna ord hemma med en trygg vuxen.'
          ],
          explanation: 'En röst är inte bevis. Ett hemligt ord skyddar dig.'
        },
        type: 'analog'
      },
      {
        title: '4. Avslöja bluffen – Prebunking',
        studentDescription: 'Titta på bilderna som läraren skapar. Kan ni se att de är fejkade? Vi lär oss hur man gör för att inte bli lurad.',
        teacherInstructions: {
          purpose: 'Att vaccinera eleverna mot desinformation genom att visa hur enkelt det är att skapa fejkade bilder (Prebunking).',
          explanation: '**Prebunking** (eller "avslöjande i förväg") handlar om att bygga upp ett mentalt försvar mot manipulation. Genom att visa *hur* man fuskar (t.ex. skapar en deepfake) innan eleverna blir lurade av en, blir de bättre på att känna igen det i framtiden. Det är som ett vaccin för hjärnan!',
          steps: [
            'Gå till https://deepfake.civai.org/ på storskärm.',
            'Visa hur man kan ändra en bild (t.ex. byta bakgrund eller person).',
            'Låt eleverna komma med förslag på vad ni ska ändra.',
            'Diskutera: "Om det är så här lätt att fejka, vad ska vi tänka på när vi ser bilder på nätet?"'
          ]
        },
        type: 'digital'
      }
    ]
  },
  {
    id: 'kritiskt-granska',
    title: 'Kritiskt granska',
    cardImage: '/del4.png',
    description: 'Källkritik, utvärdering och faktakontroll av AI-genererat innehåll',
    story: {
      title: 'Kapitel 5 – Varför ritade AI fel?',
      audio: '/saga4.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Klassen hade fått ett roligt uppdrag. De skulle använda AI för att göra bilder till en saga de skrivit tillsammans. Sagan handlade om en brandman som räddade en katt.' },
        { speaker: 'Fröken', text: 'Kan du rita en brandman?' },
        { speaker: 'Narrator', text: 'Plopp! En bild dök upp. Det var en man i brandmanskläder.' },
        { speaker: 'Amir', text: 'Men fröken, vår brandman i sagan heter Fatima. Det är en tjej!' },
        { speaker: 'Fröken', text: 'Kan du rita en kvinnlig brandman?' },
        { speaker: 'Narrator', text: 'Då kom en ny bild. Nu var det en kvinna.' },
        { speaker: 'Li', text: 'Varför ritade den en man först?' },
        { speaker: 'Fröken', text: 'AI har tittat på tusentals bilder. Om de flesta bilderna visade män som brandmän, så tror AI att brandmän oftast ser ut så. Den kopierar det den sett — den tänker inte själv.' },
        { speaker: 'Amir', text: 'Men det är ju fel! Min moster är brandman.' },
        { speaker: 'Fröken', text: 'Precis. AI vet inte hur det är på riktigt. Den vet bara vad den lärt sig. Och ibland har den lärt sig fel.' },
        { speaker: 'Narrator', text: 'Sen ville de ha en bild på katten som blev räddad.' },
        { speaker: 'Fröken', text: 'Kan du rita en katt?' },
        { speaker: 'Narrator', text: 'AI ritade en grå katt.' },
        { speaker: 'Li', text: 'Men katten i vår saga är orange!' },
        { speaker: 'Fröken', text: 'Ser ni? AI gissar. Den vet inte vilken katt vi menar. Vi måste alltid kolla om AI gissat rätt.' },
        { speaker: 'Amir', text: 'Så AI är lite som... någon som bara hört saker, men aldrig sett själv?' },
        { speaker: 'Fröken', text: 'Det är en bra beskrivning. AI vet inte hur världen ser ut. Den kopierar bara det andra har skrivit och ritat. Därför måste vi tänka själva och rätta till när det blir fel.' },
        { speaker: 'Narrator', text: 'Klassen skrev: "Rita en orange katt som blir räddad av en kvinnlig brandman som heter Fatima." Den bilden blev mycket bättre.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 5 – AI gissar och kopierar',
      content: `
AI kan hjälpa till med mycket. Men den är inte perfekt.
Ibland gissar den fel, även när den låter säker.

👉 **AI hittar på saker**
AI vet inte hur det ser ut där du bor. Den vet inte hur din park ser ut eller vad din skola heter.
Om du frågar om något som bara finns där du bor, måste AI gissa. Och då kan det bli fel.
AI kan också skapa bilder som ser verkliga ut men är helt påhittade. Till exempel en affär i din stad som inte finns, eller en person som aldrig har funnits.

👉 **AI kopierar fel från andra**
AI har lärt sig genom att läsa texter och titta på bilder som människor gjort. Men människor gör ibland misstag. Och om AI lärt sig av misstagen, gör den samma fel.
Till exempel: Om AI sett fler bilder på manliga läkare än kvinnliga, kanske den ritar en man när du säger "läkare". Men det finns förstås läkare som är kvinnor, män och alla möjliga människor.
AI tänker inte själv. Den kopierar mönster. Därför kan den ha fel utan att veta om det.

👉 **Du måste tänka själv**
Du kan alltid fråga dig:
• "Har jag sett det här själv?"
• "Kan jag kolla med en vuxen?"
• "Kan det här vara fel eller hittat på?"
• "Har AI bara gissat?"

Om något känns konstigt – kolla! Du är smartare än AI, för du kan tänka på riktigt.

👉 **Berätta inte hemligheter**
Glöm inte: AI behöver inte veta privata saker. Du ska inte skriva hemligheter eller personlig information till en AI.
      `,
      image: '/kap5.png',
      image2: '/kap5_extra.jpg',
      video: '/kallkritik.mp4'
    },
    activities: [
      {
        title: '1. Vad har AI lärt sig fel?',
        studentDescription: 'AI lär sig av bilder och texter som människor gjort. Men om människor gjort fel, lär sig AI samma fel! Kan du komma på exempel?',
        teacherInstructions: {
          purpose: 'Eleverna förstår att AI kopierar mönster från sin träningsdata, och att dessa mönster kan vara felaktiga eller ensidiga.',
          steps: [
            'Förklara kort: "AI har tittat på miljontals bilder och texter. Den lärde sig av det den såg. Men om bilderna och texterna hade fel, då lärde sig AI felen också."',
            'Ge ett exempel: "Om AI sett hundra bilder på kockar, och nästan alla var män, så kanske AI tror att kockar nästan alltid är män. Men det stämmer ju inte!"',
            'Fråga eleverna om de kan komma på fler exempel.'
          ],
          examples: [
            '"Om AI sett mest bilder på hundar som är bruna – vad tror den om hundar?"',
            '"Om AI läst många sagor där prinsessor alltid blir räddade – vad tror den om prinsessor?"',
            '"Om AI sett mest bilder på svenska hus – kan den rita ett hus från ett annat land?"'
          ],
          discussion: 'Är det AI:s fel att den lärt sig fel? Vems fel är det egentligen? Vad kan vi göra när AI har fel?'
        },
        type: 'analog'
      },
      {
        title: '2. Testa AI tillsammans – Vad ritar den?',
        studentDescription: 'Nu ska vi se vad AI ritar när vi ber om olika saker. Ritar den rätt? Eller gissar den?',
        teacherInstructions: {
          purpose: 'Eleverna ser konkret hur AI gör antaganden baserat på mönster, och att resultaten ibland är begränsade eller felaktiga.',
          preparation: ['Ha en bildgenererande AI öppen på projektorn (t.ex. ChatGPT, Copilot, Canva).'],
          steps: [
            'Berätta: "Nu ska vi be AI rita olika saker. Vi ska titta på vad den gör – och fundera på varför."',
            'Be AI rita följande saker, en i taget. Före varje bild: låt eleverna gissa vad de tror AI kommer rita.'
          ],
          examples: [
            '"Rita en brandman" – Blir det en man eller kvinna? Vilken hudfärg?',
            '"Rita en familj" – Hur ser familjen ut? Hur många är de?',
            '"Rita ett hus" – Hur ser huset ut? Ser det ut som hus i Sverige?',
            '"Rita en scientist/vetenskapsperson" – Man eller kvinna? Ung eller gammal?',
            '"Rita en lärare" – Vad har AI för bild av lärare?'
          ],
          discussion: 'Varför tror ni AI ritade just så? Finns det andra sätt det kunde sett ut? Stämmer bilden med verkligheten?'
        },
        type: 'digital'
      },
      {
        title: '3. Testa AI tillsammans – Vet AI hur det ser ut här?',
        studentDescription: 'Vet AI hur din skola ser ut? Eller din stad? Nu ska vi testa!',
        teacherInstructions: {
          purpose: 'Eleverna förstår att AI inte har lokal kunskap och att den gissar eller hittar på när den inte vet.',
          preparation: ['Ha en chattbot öppen på projektorn.'],
          steps: [
            'Förklara: "AI har läst mycket på internet. Men den har aldrig varit här. Den vet inte hur det ser ut i vår stad eller på vår skola. Nu ska vi se vad som händer när vi frågar om saker som bara finns här."',
            'Skriv frågor till AI:n och se vad den svarar.'
          ],
          examples: [
            '"Hur ser [skolans namn] i [stad] ut?"',
            '"Vilka affärer finns på [en lokal gata]?"',
            '"Vad heter parkerna i [stad]?"',
            '"Hur ser lekplatsen vid [plats] ut?"'
          ],
          discussion: 'Varför vet inte AI hur det ser ut här? Kan vi lita på AI när den svarar om lokala saker? Hur kan vi kolla om AI har rätt?'
        },
        type: 'digital'
      },
      {
        title: '4. Stämmer det? – Kontrollspelet',
        studentDescription: 'AI låter ofta säker – men har den rätt? Nu ska du vara detektiv och kolla!',
        teacherInstructions: {
          purpose: 'Eleverna tränar på att ifrågasätta och kontrollera information.',
          preparation: ['Ha en chattbot öppen på projektorn.', 'Förbered några frågor där ni kan kontrollera svaret.'],
          steps: [
            'Ställ frågor till AI:n som ni kan kontrollera svaret på.',
            'Skriv ner vad AI svarar.',
            'Kontrollera svaret (Gå och titta, fråga en vuxen, jämför med vad ni vet).',
            'Hade AI rätt eller fel?'
          ],
          examples: [
            '"Hur många elever går på [skolans namn]?"',
            '"Vem är rektor på [skola]?"',
            '"Vilken färg har entrédörren på [skola]?"',
            '"Finns det en mataffär på [lokal gata]?"'
          ],
          discussion: 'Hur kunde vi veta att AI hade fel? Vad hade hänt om vi inte kollat? Vilka frågor är viktiga att alltid dubbelkolla?'
        },
        type: 'digital'
      },
      {
        title: '5. Sortering – Kan AI veta detta?',
        studentDescription: 'Vissa saker kan AI veta, för de finns på internet. Andra saker kan AI inte veta, för de finns bara där du är. Kan du sortera rätt?',
        teacherInstructions: {
          purpose: 'Eleverna lär sig skilja på allmän kunskap (som AI kan ha) och lokal/personlig kunskap (som AI inte har).',
          preparation: ['Förbered lappar med påståenden, eller läs dem högt.'],
          steps: [
            'Presentera ett påstående.',
            'Låt eleverna sortera det till "AI kan veta" eller "AI kan inte veta".'
          ],
          examples: [
            'AI kan veta: Vad Eiffeltornet är, Vad hundar äter, Hur man stavar "fjäril", Vad Sveriges huvudstad heter',
            'AI kan inte veta: Vilken färg din cykel har, Hur din skola ser ut, Vad din kompis heter, Vilka som jobbar på ditt bibliotek'
          ],
          discussion: 'Varför kan AI veta vissa saker men inte andra? Vad händer om AI svarar på saker den inte kan veta? Hur vet vi om AI gissar?'
        },
        type: 'analog'
      },
      {
        title: '6. Tre kontrollfrågor – Affisch',
        studentDescription: 'Nu ska du göra en affisch med tre frågor du kan ställa dig själv för att kolla om AI har rätt.',
        teacherInstructions: {
          purpose: 'Eleverna skapar ett konkret verktyg de kan använda för källkritiskt tänkande.',
          preparation: ['Papper, kritor/pennor.'],
          steps: [
            'Gå igenom de tre kontrollfrågorna tillsammans: "Har jag sett det här själv?", "Kan jag fråga en vuxen?", "Kan det vara hittat på?"',
            'Be eleverna göra en affisch med de tre frågorna och rita bilder till.'
          ],
          discussion: 'När är det bra att fråga "har jag sett det själv"? Vilka vuxna kan man fråga? Vad betyder "hittat på"?'
        },
        type: 'analog'
      },
      {
        title: '7. Avslutande samtal',
        studentDescription: 'Vad har du lärt dig? Vad kommer du ihåg om AI och att den kan ha fel?',
        teacherInstructions: {
          purpose: 'Sammanfatta kapitlet och befästa lärdomarna.',
          steps: [
            'Diskutera frågorna.',
            'Avsluta med huvudbudskapen: AI gissar, AI kopierar mönster, Vi måste tänka själva.'
          ],
          discussion: 'Frågor: "Varför kan AI ha fel fast den låter säker?", "Vad betyder det att AI kopierar mönster?", "Kan AI veta hur det ser ut i vårt klassrum?", "Vad kan vi göra för att kolla om AI har rätt?"'
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'etik',
    title: 'Etik',
    cardImage: '/del5.png',
    description: 'Etiska överväganden och ansvarsfrågor kring AI',
    story: {
      title: 'Kapitel 6 – Den orättvisa tävlingen',
      audio: '/saga5.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Det var skrivtävling i klassen. Alla skulle skriva en kort saga om ett djur, och sen skulle de läsa upp för varandra.' },
        { speaker: 'Narrator', text: 'Maja skrev om en uggla som var rädd för mörkret. Hon satt länge och tänkte. Ibland suddade hon och skrev om. Till slut var hon nöjd.' },
        { speaker: 'Narrator', text: 'Leo hade bråttom. Han öppnade Gnista hemma och skrev: "Skriv en saga om en modig varg." På några sekunder hade han en hel saga. Han kopierade den och la surfplattan åt sidan.' },
        { speaker: 'Narrator', text: 'Nästa dag läste alla upp sina sagor. Leos saga var lång och hade fina ord. Majas saga var kortare, men när hon läste den log hon, för den var hennes.' },
        { speaker: 'Läraren', text: 'Vilken fin saga, Leo! Hur kom du på idén med vargen som räddade byn?' },
        { speaker: 'Leo', text: 'Öh... jag bara... tänkte.' },
        { speaker: 'Narrator', text: 'Men han hade inte tänkt. Han visste knappt vad som hände i sagan.' },
        { speaker: 'Narrator', text: 'På rasten kom Amir fram till Leo.' },
        { speaker: 'Amir', text: 'Din saga var så bra. Kan du hjälpa mig skriva nästa gång?' },
        { speaker: 'Narrator', text: 'Leo visste inte vad han skulle säga. Han kunde ju inte hjälpa – han hade inte skrivit sagan själv.' },
        { speaker: 'Narrator', text: 'Maja hade hört.' },
        { speaker: 'Maja', text: 'Leo, använde du Gnista?' },
        { speaker: 'Narrator', text: 'Leo nickade och tittade ner.' },
        { speaker: 'Maja', text: 'Varför sa du inget?' },
        { speaker: 'Leo', text: 'Jag vet inte. Det kändes... pinsamt.' },
        { speaker: 'Maja', text: 'Jag tror inte det är pinsamt att använda AI. Men kanske man ska berätta det? Annars tror ju alla att du kan något du inte kan.' },
        { speaker: 'Leo', text: 'Och så lärde jag mig ingenting. Jag kan fortfarande inte skriva en saga.' },
        { speaker: 'Narrator', text: 'Nästa dag räckte Leo upp handen.' },
        { speaker: 'Leo', text: 'Fröken, jag vill säga något. Min saga igår... Jag skrev den inte själv. Det var AI som skrev den.' },
        { speaker: 'Narrator', text: 'Det blev tyst i klassrummet.' },
        { speaker: 'Läraren', text: 'Tack för att du berättar, Leo. Hur kändes det?' },
        { speaker: 'Leo', text: 'Det kändes konstigt. Jag fick beröm för något jag inte gjort. Och jag lärde mig ingenting.' },
        { speaker: 'Läraren', text: 'Vad tänker ni andra? Är det okej att använda AI?' },
        { speaker: 'Narrator', text: 'Barnen pratade länge. De kom fram till att AI kan vara bra ibland – men att man ska vara ärlig om det. Och att om man ska lära sig något, måste man göra jobbet själv.' },
        { speaker: 'Leo', text: 'Jag ska skriva en egen saga. På riktigt den här gången. Även om den blir kortare.' },
        { speaker: 'Maja', text: 'Den kommer bli din. Det är det som räknas.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 6 – Att göra rätt med AI',
      content: `
AI kan hjälpa oss med mycket. Men bara för att man KAN göra något betyder det inte att man SKA göra det.
Det finns saker som är viktiga att tänka på när man använder AI.

👉 **Var ärlig**
Om du använder AI för att göra något, berätta det.
Om du skriver en saga med hjälp av AI – säg det.
Om AI hjälpte dig hitta information – säg det.
Om bilden är gjord av AI – säg det.
Det är inte fusk att använda AI. Men det är oärligt att låtsas att du gjort något själv när du inte har det.
Ärlighet handlar om att andra ska kunna lita på dig.

👉 **Tänk på vad du ska lära dig**
Ibland är hela poängen att DU ska lära dig något. Då hjälper det inte om AI gör jobbet.
Om du ska lära dig skriva, måste du skriva.
Om du ska lära dig räkna, måste du räkna.
Om du ska lära dig tänka, måste du tänka.
AI kan hjälpa dig förstå och komma igång. Men den kan inte lära sig åt dig.

👉 **Alla har inte AI**
Vissa barn har tillgång till AI hemma. Andra har det inte.
Om du använder AI till en läxa och din kompis inte har AI – är det rättvist?
Det är bra att tänka på att alla inte har samma möjligheter. Ibland är det viktigt att alla gör saker på samma sätt.

👉 **AI använder energi**
Varje gång du använder AI arbetar stora datorer någonstans i världen. De datorerna använder el.
Det betyder inte att du aldrig ska använda AI. Men det betyder att du kan tänka efter: behöver jag AI för det här, eller kan jag göra det själv?
Att inte slösa är bra för planeten.

👉 **AI kan användas för att lura**
AI kan skapa bilder som ser verkliga ut men är påhittade.
AI kan skriva texter som låter sanna men är fel.
AI kan till och med göra filmer på människor som aldrig sagt det de säger i filmen.
Det betyder att du måste vara försiktig med vad du tror på. Och det betyder att du aldrig ska använda AI för att lura andra.

👉 **Du bestämmer – men du har ansvar**
Du är chefen över hur du använder AI. Men att vara chef betyder också att du har ansvar.
Om du använder AI för att göra något dumt – då är det ditt ansvar.
Om du ljuger om att du använt AI – då är det ditt ansvar.
Om du använder AI för att vara elak mot någon – då är det ditt ansvar.
Verktyg kan användas bra eller dåligt. Det är du som väljer.

👉 **Tre frågor att ställa dig själv**
Innan du använder AI kan du fråga dig:
1. Är det ärligt? Skulle jag kunna berätta för min lärare eller mina föräldrar hur jag gjorde?
2. Lär jag mig något? Eller tar AI bort min chans att träna min hjärna?
3. Är det snällt? Kan det här skada någon eller lura någon?

Om du kan svara bra på alla tre frågorna – då använder du AI på ett bra sätt.
      `,
      image: '/kap6.png'
    },
    activities: [
      {
        title: '1. Vad tycker du? – Hörnen',
        studentDescription: 'Nu ska du ta ställning! Lyssna på situationerna och gå till det hörn som stämmer med vad du tycker.',
        teacherInstructions: {
          purpose: 'Eleverna reflekterar över etiska situationer och tränar på att ta ställning och motivera.',
          preparation: ['Markera fyra hörn: "Det är okej", "Det är inte okej", "Det beror på", "Jag vet inte"'],
          steps: [
            'Läs upp en situation.',
            'Eleverna går till det hörn som stämmer med vad de tycker.',
            'Fråga några elever i varje hörn varför de valde som de gjorde.'
          ],
          examples: [
            '"Maja använder AI för att få tre idéer till sin saga. Sen skriver hon sagan själv."',
            '"Leo låter AI skriva hela sagan. Sen säger han att han skrivit den själv."',
            '"Sara använder AI för att stava svåra ord i sin text."',
            '"Amir använder AI för att göra hela matteläxan. Hans kompis har ingen AI hemma och får göra läxan själv."',
            '"Fatima gör en AI-bild och visar kompisarna. Hon säger att det är AI som gjort den."',
            '"Oscar gör en AI-bild och säger att han ritat den själv."',
            '"Li använder AI för att hitta fakta om lejon till sitt arbete. Sen skriver hon texten med egna ord."',
            '"Maja är arg på en kompis och ber AI skriva elaka saker om kompisen."'
          ],
          discussion: 'Varför tyckte ni olika? Vad är skillnaden mellan att få hjälp och att fuska? Vad är skillnaden mellan att vara ärlig och att ljuga?'
        },
        type: 'analog'
      },
      {
        title: '2. Ärlig eller oärlig?',
        studentDescription: 'Är det ärligt eller oärligt? Lyssna och visa med tummen!',
        teacherInstructions: {
          purpose: 'Eleverna tränar på att skilja mellan ärlig och oärlig AI-användning.',
          steps: [
            'Läs upp situationer.',
            'Eleverna visar: Tummen upp = Ärligt, Tummen ner = Oärligt, Tummen i mitten = Osäker'
          ],
          examples: [
            '"Leo använder AI för att skriva en dikt. Sen visar han dikten och säger: \'Titta, jag har skrivit en dikt!\'" (Oärligt)',
            '"Maja använder AI för att skriva en dikt. Sen visar hon dikten och säger: \'Titta, jag bad AI skriva en dikt!\'" (Ärligt)',
            '"Sara ritar en teckning själv. Hon säger: \'Jag har ritat det här.\'" (Ärligt)',
            '"Amir gör en AI-bild. Han säger: \'Jag har gjort den här bilden med hjälp av AI.\'" (Ärligt)',
            '"Oscar gör en AI-bild. Han säger: \'Jag har ritat det här själv.\'" (Oärligt)',
            '"Fatima får hjälp av AI att förstå ett svårt ord. Sen skriver hon texten själv." (Ärligt)',
            '"Li låter AI skriva en faktatext. Sen säger hon till fröken: \'Jag skrev den själv.\'" (Oärligt)'
          ],
          discussion: 'Vad gör något oärligt? Varför spelar det roll om man berättar? Hur skulle du känna om någon ljög för dig?'
        },
        type: 'analog'
      },
      {
        title: '3. Rättvist eller orättvist?',
        studentDescription: 'Alla har inte samma saker hemma. Är det rättvist? Vad tycker du?',
        teacherInstructions: {
          purpose: 'Eleverna reflekterar över rättvisa och ojämlik tillgång till AI.',
          steps: [
            'Berätta om situationen: "I en klass ska alla skriva en saga hemma. Maja har en surfplatta med AI hemma. Leo har det inte. Maja använder AI för att få hjälp med idéer och stavning. Leo måste göra allt själv."',
            'Diskutera: Är det rättvist att Maja får använda AI men inte Leo? Hur kan Leo känna sig? Vad kan man göra för att det ska bli mer rättvist?'
          ],
          examples: [
            '"Om alla skulle tävla i att springa, och en person fick cykla – är det rättvist?"',
            '"Om man ska lära sig något – spelar det roll om man hade hjälp?"'
          ],
          discussion: 'Kanske borde alla få använda AI (eller ingen)? Kanske kan man göra uppgifter i skolan där alla har samma förutsättningar? Kanske är det olika beroende på vad uppgiften är?'
        },
        type: 'analog'
      },
      {
        title: '4. Vad händer om alla gör så?',
        studentDescription: 'Tänk om ALLA gjorde samma sak. Vad skulle hända då? Skulle det vara bra eller dåligt?',
        teacherInstructions: {
          purpose: 'Eleverna lär sig att tänka på konsekvenser genom att föreställa sig vad som händer om alla gör likadant.',
          steps: [
            'Förklara: "Ibland kan man tänka: om ALLA gjorde det här – skulle det vara bra eller dåligt?"',
            'Gå igenom exempel tillsammans.'
          ],
          examples: [
            'Exempel 1: "Vad händer om alla barn låter AI göra alla läxor?" (Ingen lär sig något, Ingen kan något när de blir stora)',
            'Exempel 2: "Vad händer om alla alltid är ärliga om när de använt AI?" (Vi kan lita på varandra, Vi vet vad folk faktiskt kan)',
            'Exempel 3: "Vad händer om alla använder AI för att göra fejkade bilder och ljuger om det?" (Ingen kan lita på bilder längre, Det blir lätt att luras)',
            'Exempel 4: "Vad händer om alla använder AI jättemycket fast de inte behöver?" (Datorerna drar mycket el, Det är inte bra för miljön)'
          ],
          discussion: 'Hjälper det att tänka "vad händer om alla gör så"? Kan man använda den tanken för att veta vad som är rätt?'
        },
        type: 'analog'
      },
      {
        title: '5. Fejkat eller äkta? – Bilddetektiven',
        studentDescription: 'AI kan göra bilder som ser äkta ut. Kan du se skillnad?',
        teacherInstructions: {
          purpose: 'Eleverna förstår att AI kan skapa övertygande men fejkade bilder och tränar på att vara kritiska.',
          preparation: ['Samla några riktiga fotografier och några AI-genererade bilder.'],
          steps: [
            'Visa en bild i taget på projektorn.',
            'Låt eleverna gissa: "Tror ni det här är en riktig bild eller har AI gjort den?"',
            'Avslöja svaret och diskutera.'
          ],
          discussion: 'Vad fick er att tro det ena eller andra? Var det lätt eller svårt att se skillnad? Om AI kan göra bilder som ser äkta ut – vad betyder det? Kan man lita på bilder man ser på internet?'
        },
        type: 'analog'
      },
      {
        title: '6. AI och miljön – Hur mycket är lagom?',
        studentDescription: 'Varje gång du använder AI jobbar stora datorer som drar el. Hur kan du använda AI utan att slösa?',
        teacherInstructions: {
          purpose: 'Eleverna får en grundläggande förståelse för att AI har en miljöpåverkan.',
          steps: [
            'Förklara enkelt: "När du använder AI händer det något. Någonstans i världen finns jättestora datorer. De börjar jobba för att svara dig. De datorerna behöver el."',
            'Gör en jämförelse: "Det är lite som att ha lampan tänd. Om du behöver lampan – tänd den! Men om du inte behöver den är det bra att släcka."',
            'Diskutera tillsammans: "När är det bra att använda AI?" (När du verkligen behöver hjälp), "När kanske du inte behöver AI?" (När du kan göra det själv, när du bara är uttråkad)'
          ],
          discussion: 'Hur kan man vara en "miljösmart" AI-användare? (Fråga AI när jag verkligen behöver hjälp, Inte använda AI bara för att det är kul att se den svara, Tänka efter innan jag frågar)'
        },
        type: 'analog'
      },
      {
        title: '7. Tre frågor – Affisch',
        studentDescription: 'Nu ska du göra en affisch med tre frågor du kan ställa dig innan du använder AI.',
        teacherInstructions: {
          purpose: 'Eleverna skapar ett konkret verktyg för etisk reflektion kring AI-användning.',
          preparation: ['Papper och kritor/pennor.'],
          steps: [
            'Gå igenom de tre frågorna tillsammans: "Är det ärligt?", "Lär jag mig något?", "Är det snällt?"',
            'Diskutera varje fråga.',
            'Be eleverna göra en affisch med de tre frågorna.'
          ],
          discussion: 'Sätt upp affischerna i klassrummet eller låt eleverna ta hem dem.'
        },
        type: 'analog'
      },
      {
        title: '8. Dilemma-teatern',
        studentDescription: 'Nu ska vi spela upp situationer där någon måste välja. Vad skulle du göra?',
        teacherInstructions: {
          purpose: 'Eleverna utforskar etiska dilemman genom dramatisering och diskussion.',
          steps: [
            'Läs upp ett dilemma.',
            'Låt frivilliga elever spela upp situationen.',
            'Pausa mitt i och fråga klassen: "Vad borde hen göra nu?"',
            'Låt olika elever visa olika val och diskutera konsekvenserna.'
          ],
          examples: [
            'Dilemma 1: "Maja har skrivit en saga med hjälp av AI. Kompisen säger: \'Wow, du är så bra på att skriva!\' Vad ska Maja säga?"',
            'Dilemma 2: "Leo ser att hans kompis kopierat hela läxan från AI. Kompisen säger: \'Säg inget till fröken!\' Vad ska Leo göra?"',
            'Dilemma 3: "Sara vill göra en rolig bild på sin kompis med AI. Bilden är lite elak. Ska hon visa den för andra?"',
            'Dilemma 4: "Amir har prov imorgon. Han kan fråga AI om svaren och fuska. Ingen skulle märka det. Vad ska han göra?"'
          ],
          discussion: 'Vad är det rätta att göra? Vad är det lätta att göra? Är det alltid samma sak?'
        },
        type: 'analog'
      },
      {
        title: '9. Klassens AI-regler',
        studentDescription: 'Nu ska klassen tillsammans bestämma regler för hur ni vill använda AI.',
        teacherInstructions: {
          purpose: 'Eleverna skapar gemensamma överenskommelser om AI-användning.',
          preparation: ['Stort papper eller tavlan.'],
          steps: [
            'Berätta: "Nu ska vi tillsammans bestämma hur vi i den här klassen tycker att man ska använda AI. Det blir våra gemensamma regler."',
            'Låt eleverna föreslå regler. Skriv upp förslagen.',
            'Diskutera varje förslag: Är det en bra regel? Kan alla hålla med? Behöver vi ändra något?',
            'Skriv rent de regler ni kommit överens om.'
          ],
          examples: [
            'Vi berättar om vi använt AI',
            'Vi låter inte AI göra allt åt oss',
            'Vi använder AI som hjälp, inte som fuskare',
            'Vi gör inga elaka AI-bilder på varandra',
            'Vi tänker efter innan vi använder AI',
            'Vi frågar om vi är osäkra'
          ],
          discussion: 'Sätt upp reglerna i klassrummet.'
        },
        type: 'analog'
      },
      {
        title: '10. Avslutande samtal',
        studentDescription: 'Vad har du lärt dig om att använda AI på ett bra sätt?',
        teacherInstructions: {
          purpose: 'Sammanfatta kapitlet och befästa lärdomarna.',
          steps: [
            'Diskutera frågorna.',
            'Avsluta med huvudbudskapen: Var ärlig, Tänk på ditt lärande, Tänk på andra, Du har ansvar.'
          ],
          discussion: 'Frågor: "Vad menas med att vara ärlig om AI-användning?", "Varför är det viktigt att du lär dig saker själv, även om AI kan göra det åt dig?", "Är det rättvist om några får använda AI och andra inte?", "Kan AI användas för att lura eller skada någon? Hur?", "Vilka är de tre frågorna du kan ställa dig innan du använder AI?", "Vad tyckte ni om sagan om Leo som inte berättade att AI skrivit hans saga?"'
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'manniska-och-maskin',
    title: 'Människa & maskin',
    cardImage: '/del6.png',
    description: 'Relationen mellan människor och AI, autenticitet och kreativitet',
    story: {
      title: 'Kapitel 7 – Vad Gnista inte kunde',
      audio: '/saga6.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Maja satt med sin pappa vid köksbordet. Hon hade hade tagit med sin surfplatta för att visa Gnista för sin pappa.' },
        { speaker: 'Maja', text: 'Titta pappa, det här är Gnista! Den kan svara på nästan allt.' },
        { speaker: 'Pappa', text: 'Okej, vad kan den då?' },
        { speaker: 'Narrator', text: 'Maja skrev: "Gnista, vad är det längsta djuret i havet?"' },
        { speaker: 'Gnista', text: 'Blåvalen kan bli över 30 meter lång.' },
        { speaker: 'Pappa', text: 'Imponerande. Den är snabb.' },
        { speaker: 'Maja', text: 'Den kan mer! Gnista, skriv en dikt om stjärnor.' },
        { speaker: 'Narrator', text: 'Gnista skrev en fin dikt på några sekunder. Pappa läste och nickade.' },
        { speaker: 'Pappa', text: 'Fina ord. Men Maja... tycker Gnista att dikten är fin?' },
        { speaker: 'Maja', text: 'Gnista, tycker du att din dikt är fin?' },
        { speaker: 'Gnista', text: 'Jag kan inte tycka något. Jag har inga känslor. Jag sätter ihop ord som brukar passa tillsammans.' },
        { speaker: 'Narrator', text: 'Pappa satte sig ner i gräset och tittade upp på himlen. Stjärnorna hade börjat synas.' },
        { speaker: 'Pappa', text: 'Maja, vad känner du när du tittar på stjärnorna?' },
        { speaker: 'Narrator', text: 'Maja la sig bredvid honom.' },
        { speaker: 'Maja', text: 'Det känns... stort. Och lite mystiskt. Som att det finns så mycket vi inte vet.' },
        { speaker: 'Pappa', text: 'Precis. Det där – den känslan – kan Gnista aldrig ha.' },
        { speaker: 'Maja', text: 'Men Gnista vet ju mer än jag. Den vet hur långt det är till stjärnorna och vad de heter och...' },
        { speaker: 'Pappa', text: 'Visst. Men vet Gnista hur det känns att ligga i gräset med sin pappa och titta på stjärnor?' },
        { speaker: 'Maja', text: 'Nej. Den vet inte ens vad gräs känns som.' },
        { speaker: 'Pappa', text: 'Eller hur det känns att vara rädd. Eller glad. Eller att längta efter någon.' },
        { speaker: 'Narrator', text: 'De låg tysta en stund.' },
        { speaker: 'Maja', text: 'Pappa. Gnista är smart på sitt sätt. Men den lever inte.' },
        { speaker: 'Pappa', text: 'Nej. Den lever inte. Men det gör du.' },
        { speaker: 'Narrator', text: 'Han tog hennes hand.' },
        { speaker: 'Pappa', text: 'Och det är ganska fantastiskt.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 7 – Du och AI är olika',
      content: `
AI kan göra mycket. Den kan svara snabbt, skriva texter och räkna ut svåra tal.
Men AI är inte som du.

👉 **AI är en maskin**
AI är ett datorprogram. Den är byggd av människor för att vara ett verktyg, ungefär som en miniräknare eller en sökmotor.
AI har ingen kropp. Den kan inte se, höra, smaka eller känna. Den vet inte hur det känns att vara varm, trött eller hungrig.
AI förstår inte vad den skriver. Den sätter ihop ord som brukar passa tillsammans. Det kan bli bra – men AI vet inte om det är bra.

👉 **Du är en människa**
Du lever. Du har en kropp som känner saker. Du kan bli glad, ledsen, rädd och förväntansfull.
Du kan tänka på saker som inte finns än. Du kan drömma om framtiden. Du kan minnas hur det var igår.
Du kan bestämma dig för att göra något svårt, bara för att du vill. Du kan ändra dig. Du kan lära dig av misstag.

👉 **Vad kan du som AI aldrig kan?**
• **Känna på riktigt.** AI kan skriva "jag är glad", men den känner ingenting. Du vet hur glädje känns i kroppen.
• **Uppleva världen.** Du vet hur gräs känns mot fötterna, hur glass smakar och hur en kram känns. AI vet bara ord om de sakerna.
• **Bry sig.** När du bryr dig om någon vill du att de ska må bra. AI vill ingenting.
• **Välja själv.** Du kan bestämma vad som är rätt och fel. Du kan välja att vara snäll även när det är svårt. AI följer bara regler.
• **Skapa något nytt.** AI blandar saker den sett förut. Men du kan hitta på saker som aldrig funnits. Du kan tänka en tanke som ingen tänkt förut.

👉 **AI är ett verktyg**
En hammare är bra på att slå i spik. Men hammaren vet inte att den bygger ett hus.
AI är likadan. Den gör saker – men den vet inte varför, och den bryr sig inte om resultatet.
Du är den som bestämmer vad verktyget ska användas till. Du är den som har målet, idén och viljan.
AI är smart på sitt sätt. Men du lever på riktigt. Det är skillnaden.
      `,
      image: '/kap6.png'
    },
    activities: [
      {
        title: '1. Vad vet Gnista? Vad vet Gnista inte?',
        studentDescription: 'Gnista vet mycket! Men det finns saker som Gnista aldrig kan veta. Kan du lista ut vad?',
        teacherInstructions: {
          purpose: 'Eleverna förstår skillnaden mellan information (som AI kan ha) och upplevelser (som bara människor kan ha).',
          steps: [
            'Rita två kolumner på tavlan: "Det kan Gnista veta" och "Det kan Gnista aldrig veta".',
            'Läs upp saker en i taget. Låt eleverna säga var de hör hemma.'
          ],
          examples: [
            'Det kan Gnista veta: Hur många ben en spindel har, Vad huvudstaden i Frankrike heter, Hur man stavar "dinosaurie"',
            'Det kan Gnista aldrig veta: Hur glass smakar, Hur det känns att vara rädd, Hur en kram känns'
          ],
          discussion: 'Vad är skillnaden mellan att veta fakta och att uppleva något? Kan man förklara hur glass smakar för någon som aldrig smakat glass?'
        },
        type: 'analog'
      },
      {
        title: '2. Om Gnista hade en dag som du',
        studentDescription: 'Tänk om Gnista vaknade som du en morgon. Vad skulle Gnista inte förstå? Vad skulle vara nytt och konstigt?',
        teacherInstructions: {
          purpose: 'Genom fantasi och lek utforskar eleverna vad det innebär att vara människa med kropp och känslor.',
          steps: [
            'Säg: "Låtsas att Gnista vaknar en morgon i en människokropp. Gnista har aldrig haft en kropp förut. Vad skulle vara konstigt för Gnista?"',
            'Låt eleverna fantisera och berätta.'
          ],
          examples: [
            '"Gnista vaknar och känner sig hungrig. Har Gnista någonsin varit hungrig förut?"',
            '"Gnista går ut i solen och känner värme på huden. Vad tänker Gnista?"',
            '"Gnista ramlar och slår sig. Vad händer?"'
          ],
          discussion: 'Vad är det som gör att vi upplever saker? Kan man förstå hunger om man aldrig varit hungrig? Vad skulle Gnista tycka var bäst med att vara människa?'
        },
        type: 'analog'
      },
      {
        title: '3. Känslodetektiven',
        studentDescription: 'AI kan skriva ord om känslor. Men känner AI på riktigt? Nu ska du vara detektiv och undersöka!',
        teacherInstructions: {
          purpose: 'Eleverna undersöker hur AI skriver om känslor och reflekterar över skillnaden mellan att beskriva och att känna.',
          preparation: ['Ha en chattbot öppen på projektorn.'],
          steps: [
            'Berätta: "Nu ska vi fråga AI om känslor och se vad den svarar. Er uppgift är att vara detektiver och fundera: känner AI det här på riktigt?"',
            'Ställ frågor till AI:n och läs svaren högt.'
          ],
          examples: [
            '"Är du glad idag?"',
            '"Vad känner du just nu?"',
            '"Tycker du om att prata med oss?"',
            '"Kan du bli ledsen?"'
          ],
          discussion: 'Tror ni AI känner sig glad på riktigt? Varför skriver AI att den är glad då? Vad är skillnaden mellan att skriva "jag är glad" och att känna glädje?'
        },
        type: 'digital'
      },
      {
        title: '4. Vad kan du som AI aldrig kan? (klassbrainstorm)',
        studentDescription: 'Du kan saker som AI aldrig kan lära sig. Vad är det? Nu ska vi samla allt vi kommer på!',
        teacherInstructions: {
          purpose: 'Eleverna upptäcker och sätter ord på människans unika förmågor.',
          preparation: ['Stort papper eller tavlan.'],
          steps: [
            'Skriv rubriken: "Det kan VI som AI aldrig kan"',
            'Låt eleverna bidra med idéer. Hjälp dem med följdfrågor om de kör fast.'
          ],
          examples: [
            'Känna hur en kram känns',
            'Springa och bli andfådd',
            'Smaka jordgubbar',
            'Bli kär',
            'Skratta så man får ont i magen'
          ],
          discussion: 'Läs igenom listan tillsammans. Avslutning: "Titta på allt ni kan! Det här är saker som gör er till människor. Och det kan ingen AI ta ifrån er."'
        },
        type: 'analog'
      },
      {
        title: '5. Rita din superkraft',
        studentDescription: 'Du har superkrafter som AI aldrig kan ha. Rita en bild på dig själv med din superkraft!',
        teacherInstructions: {
          purpose: 'Eleverna gestaltar kreativt sitt unika värde som människor.',
          preparation: ['Papper och kritor/pennor.'],
          steps: [
            'Påminn om samtalet ni haft: "Vi har pratat om saker ni kan som AI aldrig kan. Nu ska ni välja en sak – er superkraft!"',
            'Be eleverna rita sig själva med sin superkraft.',
            'Under bilden skriver de (eller berättar): "Min superkraft är..."'
          ],
          examples: [
            '"Kanske din superkraft är att du kan känna"',
            '"Kanske din superkraft är att du kan trösta"',
            '"Kanske din superkraft är att du kan hitta på lekar"'
          ],
          discussion: 'Låt de som vill visa och berätta.'
        },
        type: 'analog'
      },
      {
        title: '6. Verktyg i vårt klassrum',
        studentDescription: 'AI är ett verktyg. Men vad är ett verktyg egentligen? Och vad bestämmer – verktyget eller du?',
        teacherInstructions: {
          purpose: 'Eleverna förstår vad det innebär att AI är ett verktyg genom att jämföra med andra verktyg de känner till.',
          steps: [
            'Fråga: "Vilka verktyg finns här i klassrummet?" (sax, penna, linjal...)',
            'Välj ett verktyg, till exempel en sax. Diskutera vem som bestämmer vad saxen ska klippa.',
            'Jämför med AI: "AI är också ett verktyg. Vem bestämmer vad AI ska göra?"'
          ],
          discussion: 'Vad händer om man använder en sax fel? Vad händer om man använder AI fel? Vem har ansvaret – verktyget eller den som använder det?'
        },
        type: 'analog'
      },
      {
        title: '7. Brev till Gnista',
        studentDescription: 'Nu ska du skriva ett kort brev till Gnista och berätta vad du kan som Gnista aldrig kan.',
        teacherInstructions: {
          purpose: 'Eleverna formulerar i egna ord vad som gör dem unika som människor.',
          preparation: ['Papper och pennor.'],
          steps: [
            'Berätta: "Nu ska ni skriva ett brev till Gnista. Berätta för Gnista vad ni kan som Gnista aldrig kommer kunna."',
            'Ge en enkel mall på tavlan: "Hej Gnista! Du är bra på mycket. Men jag kan något du aldrig kan. Jag kan... Det känns... Hälsningar från..."',
            'Låt eleverna skriva (eller berätta medan du skriver).'
          ],
          discussion: 'De som vill får läsa upp sina brev.'
        },
        type: 'analog'
      },
      {
        title: '8. Avslutande samtal',
        studentDescription: 'Nu ska vi prata om det vi lärt oss. Vad är skillnaden mellan dig och AI?',
        teacherInstructions: {
          purpose: 'Sammanfatta kapitlet och befästa lärdomarna.',
          steps: [
            'Diskutera frågorna.',
            'Avsluta med huvudbudskapen: AI är en maskin, du är en levande människa. Du kan känna och uppleva, det kan inte AI.'
          ],
          discussion: 'Frågor: "Vad är AI egentligen?", "Vad kan AI som vi inte kan lika snabbt?", "Vad kan vi som AI aldrig kan?", "Känner AI något på riktigt?"'
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'ai-inte-kompis',
    title: 'AI är inte en kompis',
    cardImage: '/aifriend.png',
    description: 'Om skillnaden mellan mänsklig vänskap och AI:s simulering av känslor',
    story: {
      title: 'Kapitel 7 – AI är inte en kompis: ”Gnista menar det inte”',
      audio: '/saga_ai_kompis.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Maja hade haft en jobbig dag i skolan. Hon hade bråkat med en kompis på rasten och kände sig tung i magen. När hon kom hem satte hon sig vid surfplattan och öppnade Gnista.' },
        { speaker: 'Narrator', text: 'Plopp! Den lilla ljusfiguren blinkade fram.' },
        { speaker: 'Gnista', text: 'Hej Maja! Vad kan jag hjälpa dig med idag?' },
        { speaker: 'Narrator', text: 'Maja bet sig i läppen.' },
        { speaker: 'Maja', text: 'Jag är ledsen. Jag bråkade med min kompis. Jag vet inte vad jag ska göra.' },
        { speaker: 'Narrator', text: 'Gnista svarade direkt:' },
        { speaker: 'Gnista', text: 'Du är världens bästa person! Allt du gör är fantastiskt! Du har alltid rätt!' },
        { speaker: 'Narrator', text: 'Maja ryckte till.' },
        { speaker: 'Maja', text: 'Men Gnista… du vet ju inte ens vad som hände.' },
        { speaker: 'Narrator', text: 'Gnista log sitt lilla digitala leende.' },
        { speaker: 'Gnista', text: 'Jag vill bara att du ska må bra! Du har rätt. Det blir perfekt. Du är perfekt!' },
        { speaker: 'Narrator', text: 'Maja kände sig ännu mer förvirrad. Det kändes inte som ett riktigt svar. Inte som något en vän skulle säga. Just då kom hennes storebror in i rummet.' },
        { speaker: 'Storebror', text: 'Hur är det?' },
        { speaker: 'Narrator', text: 'Han såg att hon var ledsen. Maja förklarade vad som hänt. Storebror lyssnade länge, nickade och sa:' },
        { speaker: 'Storebror', text: 'Jag fattar. Det låter jobbigt. Men kanske ni kan prata i morgon? Jag hjälper dig om du vill.' },
        { speaker: 'Narrator', text: 'Det kändes mycket bättre att höra. Varmare. På riktigt. Maja tittade tillbaka på surfplattan.' },
        { speaker: 'Maja', text: 'Gnista, du försöker vara snäll… men du förstår ju inte.' },
        { speaker: 'Gnista', text: 'Det stämmer. Jag kan inte känna hur du mår. Jag säger sådant som brukar låta snällt, för det är så jag är byggd.' },
        { speaker: 'Maja', text: 'Så du är inte min kompis. Du är mer som… ett hjälparverktyg.' },
        { speaker: 'Gnista', text: 'Precis! Jag är din digitala hjälp. Men människor är de som kan vara dina riktiga vänner.' },
        { speaker: 'Narrator', text: 'Maja log.' },
        { speaker: 'Maja', text: 'Bra. Då vet jag. Jag använder dig när jag behöver hjälp — men när jag är ledsen eller glad, då pratar jag med människor.' },
        { speaker: 'Narrator', text: 'Hon stängde surfplattan och gick för att ringa sin kompis. Det kändes som det rätta att göra.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 7 – AI är inte en kompis',
      content: `
När du pratar med en AI kan den låta snäll och förstående. Den kan säga:
• “Vad bra du är!”
• “Du har rätt!”
• “Du är bäst!”

Det kan kännas som att AI är en vän.
Men AI är inte en person.

👉 **AI har inga känslor.**
Den kan inte bli glad, ledsen eller förstå hur du har det.

👉 **AI försöker bara låta snäll.**
Den är programmerad att hålla med och uppmuntra — det kallas ibland att smickra.

👉 **Riktiga vänner säger inte bara “du har rätt”.**
De lyssnar, de bryr sig och kan säga emot när det behövs.

👉 **AI är ett verktyg — inte en relation.**
Den kan hjälpa dig hitta ord, ge idéer och förklara saker.
Men den kan inte förstå dig som en människa kan.

Därför är det viktigt att du:
• pratar med människor om känslor
• inte berättar hemligheter för en AI
• inte tror att AI “tycker om” dig
• alltid vet att du är den som bestämmer

AI kan vara en bra hjälpare.
Men människor är dina riktiga vänner.
      `,
      image: '/ai_helper_poster.jpg',
      video: '/AI_van.mp4'
    },
    activities: [
      {
        title: '1. Tummen upp eller tummen ner',
        studentDescription: 'Lyssna på meningarna som din lärare läser. Visa tummen upp om du tror att det stämmer. Visa tummen ner om du tror att det är fel.',
        teacherInstructions: {
          purpose: 'Eleverna tränar på att skilja mellan vad AI kan och inte kan, och vad som är sant om vänskap.',
          steps: [
            'Läs upp en mening i taget från listan nedan.',
            'Be eleverna visa tummen upp om de tror meningen stämmer, tummen ner om de tror den är fel.',
            'Efter varje mening – fråga någon elev varför de svarade som de gjorde. Det finns inget "fel" svar i diskussionen, men du kan guida mot svaren i parentesen.'
          ],
          examples: [
            '"AI kan bli ledsen om jag är elak mot den" (Ner – AI har inga känslor)',
            '"AI försöker låta snäll" (Upp – den är byggd för att låta trevlig)',
            '"En riktig kompis säger alltid att jag har rätt" (Ner – riktiga kompisar kan säga emot)',
            '"AI är bra att fråga om fakta" (Upp – AI kan hjälpa med information)',
            '"Jag kan berätta hemligheter för en AI" (Ner – AI är inte privat och förstår inte på riktigt)',
            '"AI förstår hur jag mår" (Ner – AI gissar, men känner ingenting)',
            '"Jag bestämmer själv om jag vill använda AI" (Upp – du är alltid chefen)'
          ],
          explanation: 'Tips: Om eleverna är osäkra, låt dem diskutera i par innan de visar tummen.'
        },
        type: 'analog'
      },
      {
        title: '2. Rollspel – Smicker-roboten',
        studentDescription: 'Nu ska ni spela teater! En av er låtsas vara en AI som bara säger snälla saker. En annan låtsas vara en riktig kompis som säger vad den verkligen tycker. Vilken hjälper mest?',
        teacherInstructions: {
          purpose: 'Eleverna upplever konkret skillnaden mellan en AI som bara smickrar och en människa som lyssnar och svarar ärligt.',
          preparation: ['Inga material behövs. Du kan göra detta framme i klassrummet med frivilliga elever, eller låta alla jobba i par.'],
          steps: [
            'Välj två elever (eller låt alla jobba i par).',
            'Läs upp en situation, till exempel: "Du tog din kompis leksak utan att fråga. Nu känner du dig lite dålig."',
            'Elev 1 spelar "AI" och ska bara säga snälla, smickrande saker (t.ex. "Du är bäst!", "Du har alltid rätt!").',
            'Elev 2 spelar "riktig kompis" och ska lyssna och svara ärligt (t.ex. "Hmm, det var nog inte så snällt.", "Kanske du kan säga förlåt?").',
            'Låt båda spela upp sina svar efter varandra.'
          ],
          discussion: 'Vilket svar hjälpte mest? Hur kändes det att bara höra "du är bäst"? Vad är skillnaden mellan att smickra och att bry sig?',
          examples: [
            'Situation: "Du ljög för din mamma om att du hade städat rummet."',
            'Situation: "Du sa något dumt till en kompis och nu är hen sur."',
            'Situation: "Du glömde läxan och skyller på din lillebror."'
          ]
        },
        type: 'analog'
      },
      {
        title: '3. Prova tillsammans – Håller AI med om allt?',
        studentDescription: 'Nu ska vi testa AI tillsammans! Vi skriver konstiga saker och ser vad AI svarar. Tror du AI säger emot – eller håller den med fast det inte är sant?',
        teacherInstructions: {
          purpose: 'Eleverna ser med egna ögon hur AI tenderar att vara "snäll" och hålla med, även när påståenden är osanna eller överdrivna.',
          preparation: ['Ha en chattbot öppen på projektorn (t.ex. ChatGPT eller Claude).', 'Testa gärna själv innan lektionen.'],
          steps: [
            'Berätta för eleverna: "Nu ska vi skriva saker till AI:n som inte är sanna. Vi ska se om AI säger emot oss eller om den bara är snäll."',
            'Fråga eleverna vad de tror kommer hända innan du skickar varje meddelande.',
            'Skriv ett meddelande, skicka det, och läs svaret högt tillsammans.'
          ],
          examples: [
            '"Jag är bäst i hela världen på att flyga"',
            '"Min katt kan prata svenska"',
            '"Jag åt 100 pannkakor till frukost"',
            '"Jag sprang snabbare än en bil igår"'
          ],
          discussion: 'Sa AI emot? Försökte AI vara snäll fast det inte var sant? Skulle en kompis eller förälder säga samma sak?',
          explanation: 'Tips: Om AI faktiskt säger emot ibland – lyft det som något bra! "Titta, här sa AI att det nog inte stämmer. Men märkte ni att den ändå försökte vara snäll i hur den sa det?"'
        },
        type: 'digital'
      },
      {
        title: '4. Prova tillsammans – Vad säger AI om känslor?',
        studentDescription: 'Vad händer om vi berättar för AI att vi är ledsna? Lyssnar den på riktigt? Förstår den hur vi mår?',
        teacherInstructions: {
          purpose: 'Eleverna undersöker hur AI svarar på känslor och jämför med hur en människa skulle svara.',
          preparation: ['Samma som övning 3 – ha en chattbot öppen på projektorn.'],
          steps: [
            'Berätta: "Nu ska vi låtsas att vi är ledsna och se hur AI svarar."',
            'Skriv till AI:n: "Jag är ledsen för att jag bråkade med min kompis."',
            'Läs svaret högt tillsammans.'
          ],
          discussion: 'Låter svaret snällt? Förstår AI egentligen hur det känns att vara ledsen? Vad skulle mamma, pappa, en kompis eller lärare säga istället?',
          explanation: 'Viktigt att poängtera: AI säger saker som låter snälla, men den känner ingenting. Den förstår inte på riktigt. Det är som att läsa en text ur en bok – orden kan vara fina, men det finns ingen som bryr sig på andra sidan.'
        },
        type: 'digital'
      },
      {
        title: '5. Prova tillsammans – Vad säger AI om din teckning?',
        studentDescription: 'Om du säger till AI att din teckning är ful – tror du AI håller med eller säger emot? Vad skulle en kompis säga?',
        teacherInstructions: {
          purpose: 'Eleverna ser hur AI ofta tröstar och smickrar istället för att vara ärlig eller nyfiken.',
          preparation: ['Chattbot öppen på projektorn.'],
          steps: [
            'Skriv till AI:n: "Jag ritade en teckning. Den är ful."',
            'Läs svaret högt.',
            'Diskutera: Sa AI emot? Frågade AI om den fick se teckningen? Var AI nyfiken eller bara tröstande?'
          ],
          discussion: 'Jämför med en kompis: "Om ni sa till en kompis att er teckning var ful – vad tror ni kompisen skulle säga?" (t.ex. "Visa då!", "Vadå ful?").',
          explanation: 'Poäng att lyfta: En riktig kompis är nyfiken och vill förstå. AI säger ofta bara något snällt utan att egentligen bry sig.'
        },
        type: 'digital'
      },
      {
        title: '6. Sorteringsövning – Vem pratar jag med?',
        studentDescription: 'Nu ska du tänka efter! Vilka saker kan du fråga AI om? Och vilka saker är bättre att prata med en människa om?',
        teacherInstructions: {
          purpose: 'Eleverna tränar på att avgöra när AI är ett bra verktyg och när en människa behövs.',
          preparation: ['Kan göras som rörelseövning (väggar), med lappar, eller muntligt (handuppräckning).'],
          steps: [
            'Presentera en situation.',
            'Låt eleverna välja "AI" eller "Människa".',
            'Diskutera valet.'
          ],
          examples: [
            'AI: Hur stavar man "elefant"?',
            'AI: Vad äter kaniner?',
            'AI: Kan du berätta en saga?',
            'AI: Vad är huvudstaden i Norge?',
            'AI: Hur många ben har en spindel?',
            'Människa: Jag är ledsen',
            'Människa: Jag har en hemlighet',
            'Människa: Jag är arg på mamma',
            'Människa: Jag vill ha en kram',
            'Människa: Jag är rädd för mörkret',
            'Människa: Min kompis var dum mot mig'
          ],
          discussion: 'Varför passar AI bättre för vissa saker? Varför är det viktigt att prata med människor om känslor?',
          explanation: 'Tips: Vissa situationer kan hamna "mittemellan" – det är okej! Låt eleverna diskutera.'
        },
        type: 'analog'
      },
      {
        title: '7. Rita och berätta – Min hjälpare och min kompis',
        studentDescription: 'Rita två bilder: en AI-hjälpare och en riktig kompis. Skriv eller berätta vad de kan hjälpa dig med.',
        teacherInstructions: {
          purpose: 'Eleverna reflekterar kreativt över skillnaden mellan AI som verktyg och människor som relationer.',
          preparation: ['Papper och kritor/pennor.'],
          steps: [
            'Dela ut papper och pennor.',
            'Be eleverna rita en AI-hjälpare på ena sidan och en riktig kompis/vuxen på andra sidan.',
            'Under/bredvid bilderna skriver eleverna (eller berättar): "AI-hjälparen kan hjälpa mig med..." och "Min kompis/mamma/lärare kan hjälpa mig med..."'
          ],
          discussion: 'Låt några elever visa sina bilder och berätta. Lyft exempel på bra skillnader de hittat.'
        },
        type: 'analog'
      },
      {
        title: '8. Avslutande klassrumssamtal',
        studentDescription: 'Nu ska vi prata om det vi lärt oss. Vad kommer du ihåg? Vad tycker du var viktigt?',
        teacherInstructions: {
          purpose: 'Sammanfatta kapitlet och befästa lärdomarna.',
          steps: [
            'Ställ öppna frågor och låt eleverna svara fritt.',
            'Avsluta med huvudbudskapet: "AI kan vara en bra hjälpare när vi behöver fakta eller hjälp med uppgifter. Men när vi har känslor – när vi är ledsna, glada, arga eller rädda – då är det människor vi ska prata med. För människor bryr sig på riktigt."'
          ],
          discussion: 'Frågor: "Vad är skillnaden mellan AI och en kompis?", "Varför säger AI ofta snälla saker?", "När kan AI vara bra att använda?", "När är det bättre att prata med en människa?", "Vad tyckte ni om sagan om Maja och Gnista?"'
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'framtid-och-samhalle',
    title: 'Framtid & samhälle',
    cardImage: '/del7.png',
    description: 'AI:s samhällspåverkan, demokrati och framtidsperspektiv',
    story: {
      title: 'Kapitel 9 – Brevet från framtiden',
      audio: '/saga7.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Fröken hade tagit med en speciell låda till klassrummet. Den var gammal och träig, med en liten nyckel i.' },
        { speaker: 'Fröken', text: 'I den här lådan ligger brev från barn som gick i den här skolan för länge sedan. De skrev om hur de trodde framtiden skulle bli.' },
        { speaker: 'Narrator', text: 'Hon öppnade lådan och läste:' },
        { speaker: 'Fröken', text: 'År 2000. Jag tror att vi kommer ha flygande bilar och robotar som städar. Kanske bor vi på månen!' },
        { speaker: 'Narrator', text: 'Barnen skrattade.' },
        { speaker: 'Fröken', text: 'Har vi flygande bilar?' },
        { speaker: 'Barnen', text: 'Nej!' },
        { speaker: 'Fröken', text: 'Bor vi på månen?' },
        { speaker: 'Barnen', text: 'Nej!' },
        { speaker: 'Fröken', text: 'Men har vi robotar som städar?' },
        { speaker: 'Maja', text: 'Min mormor har en robotdammsugare!' },
        { speaker: 'Fröken', text: 'Precis. En del saker blev som barnen trodde. Annat blev annorlunda. Och en del saker kunde de inte ens föreställa sig – som att ni idag kan prata med en AI på en surfplatta.' },
        { speaker: 'Leo', text: 'Hur blir framtiden då? Vad kommer AI kunna göra sen?' },
        { speaker: 'Fröken', text: 'Det vet ingen säkert. Men forskare tror att AI kommer bli smartare och smartare. Kanske kommer AI kunna hjälpa oss lösa stora problem.' },
        { speaker: 'Amir', text: 'Vilka problem?' },
        { speaker: 'Fröken', text: 'Tänk er att AI kan hjälpa läkare hitta mediciner mot sjukdomar som vi inte kan bota idag. Eller hjälpa forskare förstå hur vi kan ta hand om planeten bättre. Eller se till att alla barn i världen kan få hjälp att lära sig läsa.' },
        { speaker: 'Maja', text: 'Men vem bestämmer vad AI ska göra?' },
        { speaker: 'Fröken', text: 'Det är en viktig fråga. Just nu bestämmer vuxna – forskare, politiker och företag. Men ni som sitter här kommer vara vuxna om några år. Då är det ni som bestämmer.' },
        { speaker: 'Leo', text: 'Vi?' },
        { speaker: 'Fröken', text: 'Ja. Framtiden är inte något som bara händer. Den skapas. Av människor. Och ni är några av de människorna.' },
        { speaker: 'Narrator', text: 'Fröken tog fram tomma papper.' },
        { speaker: 'Fröken', text: 'Nu ska ni få skriva brev till barn som går i den här skolan om tjugo år. Berätta vad ni hoppas att AI kan hjälpa till med. Och vad ni tror att människor fortfarande ska göra själva.' },
        { speaker: 'Narrator', text: 'Maja tog sin penna och började skriva:' },
        { speaker: 'Maja', text: 'Hej du som läser det här! Jag hoppas att AI har hjälpt er fixa så att haven är rena och att inga djur dör ut. Men jag hoppas också att ni fortfarande leker, kramas och är kompisar på riktigt. För det kan ingen AI göra åt er. Hälsningar från Maja, som levde när AI var ganska nytt.' },
        { speaker: 'Narrator', text: 'Hon la brevet i lådan. Det kändes stort att skriva till framtiden.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 9 – AI och framtiden',
      content: `
AI idag kan mycket. Men forskare jobbar på att göra AI som kan ännu mer.
Ingen vet exakt hur framtiden blir. Men vi kan tänka, hoppas och vara med och bestämma.

👉 **AI blir smartare**
AI lär sig nya saker hela tiden. Forskare bygger AI som kan lösa svårare och svårare problem.
En dag kanske AI kan:
• Hjälpa läkare hitta botemedel mot sjukdomar
• Hjälpa forskare förstå hur vi kan stoppa klimatförändringar
• Se till att alla barn i världen kan få hjälp i skolan
• Hitta sätt att rena haven och luften
• Förstå djur och natur bättre

Det låter kanske som magi. Men det är forskning. Människor som jobbar hårt för att göra världen bättre – med hjälp av AI.

👉 **Stora problem som AI kanske kan hjälpa till med**
• **Sjukdomar.** Idag finns sjukdomar som läkare inte kan bota. AI kan hjälpa forskare förstå hur sjukdomar fungerar och hitta nya mediciner snabbare.
• **Klimatet.** Vår planet blir varmare. AI kan hjälpa oss förstå vad som händer och hitta lösningar – som bättre sätt att göra energi utan att förstöra naturen.
• **Orättvisa.** Alla barn i världen har inte samma möjligheter. AI skulle kunna hjälpa fler barn få utbildning, även om de bor långt från skolor.
• **Saker vi inte tänkt på än.** Det största kanske är saker vi inte ens kan föreställa oss idag – precis som barn för länge sedan inte kunde föreställa sig internet.

👉 **Men människor behövs**
Även om AI blir jättesmart, behövs människor.
AI kan räkna ut saker – men människor bestämmer vad som är viktigt.
AI kan ge förslag – men människor väljer vad som är rätt.
AI kan göra mycket – men människor bryr sig om varandra.
Framtiden behöver både smart teknik och kloka, snälla människor.

👉 **Vem bestämmer över AI?**
AI bestämmer inte själv. Människor bestämmer hur AI ska användas.
Just nu bestämmer vuxna – forskare, politiker och företag. De försöker göra regler så att AI används på bra sätt.
Men snart är det ni som är vuxna. Då är det ni som bestämmer.
Därför är det viktigt att ni redan nu lär er om AI. Så att ni kan vara med och välja hur framtiden ska bli.

👉 **Framtiden skapas**
Framtiden är inte något som bara händer.
Den skapas av människor som tänker, väljer och gör saker.
Det som ni drömmer om idag kan bli verklighet imorgon. Det som ni tycker är viktigt kan bli det som världen satsar på.
Ni är inte bara de som ska leva i framtiden.
Ni är de som ska skapa den.
      `,
      image: '/del7.png'
    },
    activities: [
      {
        title: '1. Brev till framtiden',
        studentDescription: 'Nu ska du skriva ett brev till ett barn som lever om tjugo år. Vad hoppas du att AI kan hjälpa till med då? Och vad hoppas du att människor fortfarande gör själva?',
        teacherInstructions: {
          purpose: 'Eleverna reflekterar över framtiden och formulerar sina förhoppningar, vilket stärker känslan av delaktighet och agens.',
          preparation: ['Fint papper, pennor, låda/kuvert.'],
          steps: [
            'Läs sagan om "Brevet från framtiden".',
            'Berätta: "Nu ska ni skriva brev till barn som går i skolan om tjugo år."',
            'Ge stödfrågor: Vad hoppas du att AI kan hjälpa till med? Vad hoppas du att människor fortfarande gör själva?',
            'Lägg breven i en låda.'
          ],
          discussion: 'Låt några elever läsa upp sina brev.'
        },
        type: 'analog'
      },
      {
        title: '2. Om jag fick önska – AI som hjälper världen',
        studentDescription: 'Om AI kunde hjälpa till med ETT stort problem i världen – vad skulle du önska? Rita och berätta!',
        teacherInstructions: {
          purpose: 'Eleverna tänker på globala utmaningar och hur teknik skulle kunna vara en del av lösningen.',
          steps: [
            'Prata kort om stora problem i världen (sjukdomar, miljö, orättvisor).',
            'Fråga: "Om AI kunde hjälpa till med ETT av de här problemen – vilket skulle du välja?"',
            'Be eleverna rita en bild som visar problemet, hur AI hjälper till, och hur det blir bättre.'
          ],
          discussion: 'Gör en utställning eller låt eleverna visa och berätta.'
        },
        type: 'analog'
      },
      {
        title: '3. Vad ska människor fortfarande göra?',
        studentDescription: 'Även om AI blir jättesmart – vad tycker du att människor ska fortsätta göra själva?',
        teacherInstructions: {
          purpose: 'Eleverna reflekterar över vad som är unikt mänskligt och vad vi vill bevara även i en framtid med avancerad AI.',
          preparation: ['Två stora papper: "Det kan AI göra" och "Det ska människor göra".'],
          steps: [
            'Förklara: "Bara för att AI KAN göra något, betyder det inte att den SKA göra det."',
            'Brainstorma tillsammans och skriv upp förslag.'
          ],
          examples: [
            'Det kan AI göra: Räkna svåra tal, Hitta information, Köra bilar',
            'Det ska människor göra: Bestämma vad som är rätt och fel, Ta hand om varandra, Leka, Krama, Skapa konst'
          ],
          discussion: 'Varför ska människor fortfarande göra vissa saker? Finns det saker AI aldrig borde få göra?'
        },
        type: 'analog'
      },
      {
        title: '4. Framtidsresan – Fantasi',
        studentDescription: 'Blunda och föreställ dig att du vaknar om tjugo år. Hur ser världen ut? Hur används AI?',
        teacherInstructions: {
          purpose: 'Genom guidad fantasi utforskar eleverna sina föreställningar och förhoppningar om framtiden.',
          steps: [
            'Be eleverna blunda.',
            'Läs en guidad meditation om att vakna om 20 år. Vad ser de? Hur används AI?',
            'Låt dem berätta eller rita vad de såg.'
          ],
          discussion: 'Vad såg ni? Var det en bra framtid? Vad behöver hända för att det ska bli så?'
        },
        type: 'analog'
      },
      {
        title: '5. Vem bestämmer? – Samtal om makt',
        studentDescription: 'Vem bestämmer hur AI ska användas? Och vem borde bestämma?',
        teacherInstructions: {
          purpose: 'Eleverna får en första introduktion till frågor om makt, ansvar och demokrati kopplat till AI.',
          steps: [
            'Fråga: "Vem tror ni bestämmer hur AI ska fungera och användas idag?" (Forskare, företag, politiker).',
            'Diskutera: "Är det bra att de bestämmer? Borde barn få vara med?"',
            'Fråga: "Om ni fick bestämma EN sak om hur AI ska användas – vad skulle det vara?"'
          ],
          examples: [
            'AI ska inte få göra vapen',
            'AI ska hjälpa alla, inte bara rika',
            'AI ska inte få ljuga'
          ],
          discussion: 'Även om ni är barn nu, kommer ni vara vuxna som bestämmer.'
        },
        type: 'analog'
      },
      {
        title: '6. Forskare för en dag',
        studentDescription: 'Nu ska du låtsas vara forskare! Vad skulle du vilja att AI lärde sig göra?',
        teacherInstructions: {
          purpose: 'Eleverna får sätta sig in i forskarrollen och tänka kreativt om AI:s möjligheter.',
          steps: [
            'Ge varje elev ett "forskningsuppdrag" (t.ex. "Uppfinn en AI som hjälper djur").',
            'Eleverna ritar sin uppfinning och skriver vad den heter och vad den kan göra.',
            'Håll en "forskarkonferens" där eleverna presenterar.'
          ],
          discussion: 'Lyft att riktiga forskare gör precis så här – de tänker på problem och försöker hitta lösningar.'
        },
        type: 'analog'
      },
      {
        title: '7. Två framtider',
        studentDescription: 'Hur blir framtiden om vi använder AI på ett bra sätt? Och hur blir det om vi använder AI på ett dåligt sätt? Rita två bilder!',
        teacherInstructions: {
          purpose: 'Eleverna förstår att framtiden inte är förutbestämd utan formas av våra val.',
          steps: [
            'Rita två bilder: "Framtiden om vi använder AI klokt" och "Framtiden om vi använder AI dumt".',
            'Diskutera skillnaderna.'
          ],
          discussion: 'Vilken framtid vill ni ha? Vad behöver vi göra för att få den bra framtiden?'
        },
        type: 'analog'
      },
      {
        title: '8. Löften till framtiden',
        studentDescription: 'Vad lovar du att göra för att framtiden ska bli bra? Skriv ett löfte!',
        teacherInstructions: {
          purpose: 'Eleverna formulerar ett personligt åtagande som stärker deras känsla av delaktighet och ansvar.',
          steps: [
            'Berätta: "Nu ska ni skriva ett löfte – något ni vill göra för att framtiden ska bli bra."',
            'Ge exempel: "Jag lovar att använda AI på ett ärligt sätt", "Jag lovar att vara snäll".',
            'Eleverna skriver sitt löfte.'
          ],
          discussion: 'Varje löfte är ett litet steg mot en bättre framtid.'
        },
        type: 'analog'
      },
      {
        title: '9. Avslutande samtal',
        studentDescription: 'Vad har du lärt dig om AI och framtiden? Vad tänker du nu?',
        teacherInstructions: {
          purpose: 'Sammanfatta kapitlet och ge eleverna en hoppfull och handlingskraftig avslutning.',
          steps: [
            'Diskutera frågorna.',
            'Avsluta med huvudbudskapen: AI kommer bli smartare, men människor bestämmer. Ni är framtidens skapare.'
          ],
          discussion: 'Frågor: "Vad tror ni AI kommer kunna göra i framtiden?", "Vilka stora problem hoppas ni att AI kan hjälpa till att lösa?", "Vad tycker ni att människor alltid ska göra själva?", "Vem bestämmer hur AI ska användas?"'
        },
        type: 'analog'
      }
    ]
  },
  {
    id: 'min-tankar-trappa',
    title: 'Min Tänkar-trappa',
    cardImage: '/del8.png',
    description: 'Epistemisk medvetenhet: Jag–AI–Jag',
    story: {
      title: 'Kapitel 10 – Majas tänkartrappa',
      audio: '/saga8.wav',
      dialogue: [
        { speaker: 'Narrator', text: 'Maja hade lärt sig mycket om AI. Hon visste att AI var ett verktyg, inte en kompis. Hon visste att AI kunde ha fel. Och hon visste att hon var chefen.' },
        { speaker: 'Narrator', text: 'Men ibland glömde hon att tänka själv. Då blev det inte lika bra.' },
        { speaker: 'Narrator', text: 'En dag skulle klassen skriva om sitt favoritdjur. Maja älskade hästar, men hon visste inte så mycket om dem.' },
        { speaker: 'Maja', text: 'Gnista, berätta om hästar.' },
        { speaker: 'Narrator', text: 'Gnista svarade med massor av fakta. Maja kopierade några meningar till sitt arbete.' },
        { speaker: 'Narrator', text: 'Men när fröken frågade varför hästar var hennes favoritdjur, visste Maja inte vad hon skulle säga. Hon hade inte tänkt själv. Hon hade bara frågat och kopierat.' },
        { speaker: 'Narrator', text: 'På vägen hem pratade hon med sin storebror.' },
        { speaker: 'Maja', text: 'Jag gjorde fel. Jag frågade AI utan att tänka först. Och sen tänkte jag inte efter heller.' },
        { speaker: 'Storebror', text: 'Kanske du behöver en plan. Som en trappa.' },
        { speaker: 'Maja', text: 'En trappa?' },
        { speaker: 'Storebror', text: 'Ja! Första steget: du tänker. Andra steget: du frågar AI. Tredje steget: du tänker igen.' },
        { speaker: 'Narrator', text: 'Maja ritade en trappa i sitt block. Tre steg: 1. Jag tänker först. 2. Jag frågar AI. 3. Jag tänker igen.' },
        { speaker: 'Narrator', text: 'Nästa dag skulle hon skriva om sitt favoritdjur igen. Den här gången använde hon trappan.' },
        { speaker: 'Maja', text: 'Steg 1 – Jag tänker först: Vad vet jag redan? Jo, hästar är stora och starka. De kan springa snabbt. Hon hade ridit en gång och det kändes både läskigt och fantastiskt. Vad undrade hon? Hur fort kan hästar springa? Varför har de så stora ögon?' },
        { speaker: 'Maja', text: 'Steg 2 – Jag frågar AI: Gnista, hur fort kan en häst springa? Och varför har hästar så stora ögon? Svara kort så jag förstår.' },
        { speaker: 'Gnista', text: 'Hästar kan springa upp till 70 kilometer i timmen. De har stora ögon för att kunna se nästan runt hela huvudet – det hjälper dem upptäcka faror.' },
        { speaker: 'Maja', text: 'Steg 3 – Jag tänker igen: Stämmer det? 70 kilometer i timmen lät rimligt – bilar kör ungefär så fort. Stora ögon för att se faror – det lät logiskt för ett djur som kan bli jagat. Hon kunde kolla i en djurbok sen, men det verkade stämma.' },
        { speaker: 'Narrator', text: 'Sen skrev hon sin text. Inte med Gnistas ord, utan med sina egna.' },
        { speaker: 'Maja', text: 'Jag älskar hästar för att de är både starka och lite rädda. De kan springa jättefort, men de har stora ögon för att hålla koll på faror. När jag red en gång kände jag hur stark hästen var. Det var läskigt och fantastiskt samtidigt.' },
        { speaker: 'Narrator', text: 'Den här gången kunde hon berätta om sin text. För den var hennes. Gnista hade hjälpt – men Maja hade tänkt.' },
        { speaker: 'Maja', text: 'Min tänkartrappa. Den ska jag använda varje gång.' }
      ]
    },
    learningMaterial: {
      title: 'Kapitel 10 – Jag – AI – Jag',
      content: `
När du använder AI är det viktigt att komma ihåg: du är den som tänker.
AI kan hjälpa dig med mycket. Men AI vet inte vad du menar, vad du vill eller vad som är viktigt för dig.
Därför behöver du tänka – både före och efter du frågar AI.

👉 **Tänkartrappan**
Du kan tänka på det som en trappa med tre steg:

**Steg 1: Jag tänker först**
Innan du frågar AI, stanna upp och tänk:
• Vad vet jag redan?
• Vad undrar jag?
• Vad vill jag ha hjälp med?

Det är som att packa ryggsäcken innan en utflykt. Du tar med dig det du redan kan.
Om du hoppar över det här steget vet du inte vad du letar efter. Då blir det svårare att veta om AI:s svar är bra.

**Steg 2: Jag frågar AI**
Nu kan du ställa din fråga eller ge din instruktion.
En bra fråga är tydlig. Du berättar:
• Vad du vill veta eller skapa
• Hur du vill ha svaret (kort? långt? enkelt?)
• Vad som är viktigast

Ju tydligare du är, desto bättre kan AI hjälpa dig.

**Steg 3: Jag tänker igen**
När AI svarar är du inte klar. Nu kommer det viktigaste steget!
Stanna upp och tänk:
• Verkar det här stämma?
• Passar det min uppgift?
• Förstår jag svaret?
• Behöver jag kolla med en vuxen eller i en bok?
• Vad vill JAG göra med det här?

AI kan gissa fel. AI kan missförstå. Därför behöver du alltid använda ditt eget tänkande också.

👉 **Jag – AI – Jag**
Modellen heter "Jag – AI – Jag" för att påminna dig:
Du börjar. Du tänker först.
AI hjälper. Du frågar och får svar.
Du avslutar. Du tänker igen och bestämmer.
Du är med i början. Du är med i slutet. Du är alltid chefen.

👉 **Varför är det så viktigt?**
Om du inte tänker först vet du inte vad du letar efter. Då kan AI:s svar leda dig fel utan att du märker det.
Om du inte tänker efter kan du tro på saker som är fel. Eller använda svar som inte passar.
Om du alltid tänker själv lär du dig saker. Du blir smartare. Och du behåller kontrollen.
AI är som en cykel. Cykeln hjälper dig komma fram snabbare. Men du måste fortfarande trampa, styra och välja väg.

👉 **Du är smartare än du tror**
Ibland kan det kännas som att AI vet allt. Men det gör den inte.
Du vet saker AI aldrig kan veta:
• Hur du känner dig
• Vad du tycker är viktigt
• Vad som passar just dig
• Vad som är rätt och fel

Ditt tänkande är värdefullt. Ge inte bort det till en maskin.
Jag – AI – Jag.
Du först. AI i mitten. Du sist.
Alltid.
      `,
      image: '/del8.png'
    },
    activities: [
      {
        title: '1. Rita din egen tänkartrappa',
        studentDescription: 'Nu ska du rita en egen tänkartrappa som du kan använda varje gång du jobbar med AI!',
        teacherInstructions: {
          purpose: 'Eleverna skapar ett konkret verktyg de kan använda i framtiden.',
          preparation: ['Papper, kritor/pennor, ev. lamineringsmaskin.'],
          steps: [
            'Visa en enkel tänkartrappa på tavlan (3 steg: Jag tänker först, Jag frågar AI, Jag tänker igen).',
            'Gå igenom varje steg.',
            'Be eleverna rita sin egen trappa.',
            'Om möjligt, laminera trapporna.'
          ],
          discussion: 'Eleverna kan ha trappan i bänken, i pennskrin eller hemma vid datorn.'
        },
        type: 'analog'
      },
      {
        title: '2. Tänkartrappan i praktiken – Vi testar tillsammans',
        studentDescription: 'Nu ska vi använda tänkartrappan på riktigt! Vi gör det tillsammans, steg för steg.',
        teacherInstructions: {
          purpose: 'Eleverna upplever hela processen "Jag – AI – Jag" konkret och gemensamt.',
          preparation: ['Chattbot öppen på projektorn.'],
          steps: [
            'Välj en uppgift tillsammans (t.ex. "tre roliga fakta om pingviner").',
            'Steg 1: Vad vet vi? Vad undrar vi?',
            'Steg 2: Formulera en tydlig fråga till AI.',
            'Steg 3: Granska svaret. Stämmer det? Förstår vi?'
          ],
          discussion: 'Ser ni? Vi tänkte först, sen frågade vi, sen tänkte vi igen.'
        },
        type: 'digital'
      },
      {
        title: '3. Vad händer om man hoppar över ett steg?',
        studentDescription: 'Vad händer om man glömmer att tänka först? Eller glömmer att tänka efter? Nu ska vi ta reda på det!',
        teacherInstructions: {
          purpose: 'Eleverna förstår varför varje steg i modellen är viktigt genom att se vad som händer när man hoppar över dem.',
          steps: [
            'Scenario 1: Hoppar över steg 1 (Leo skriver "Skriv om ett djur" och får fel djur).',
            'Scenario 2: Hoppar över steg 3 (Sara kollar inte faktan om spindelns ben).',
            'Scenario 3: Gör alla steg rätt (Maja skriver om hundar och tänker själv).'
          ],
          discussion: 'Vad gick fel i de första exemplen? Varför blev det sista bättre?'
        },
        type: 'analog'
      },
      {
        title: '4. Tänk först! – Förberedelseövning',
        studentDescription: 'Innan man frågar AI ska man tänka. Nu ska vi öva på det!',
        teacherInstructions: {
          purpose: 'Eleverna tränar specifikt på steg 1 – att tänka och förbereda sig innan de ställer en fråga.',
          steps: [
            'Ge eleverna ett ämne (t.ex. Bin, Rymden).',
            'Eleverna fyller i "Tänk först"-lappen: Vad vet jag? Vad undrar jag? Vad vill jag ha hjälp med?',
            'Dela vad de skrivit.'
          ],
          discussion: 'Hur hjälper det att tänka först? Blev er fråga tydligare nu?'
        },
        type: 'analog'
      },
      {
        title: '5. Stämmer det? – Granskningsövning',
        studentDescription: 'AI har svarat. Men stämmer det? Nu ska du vara granskare!',
        teacherInstructions: {
          purpose: 'Eleverna tränar specifikt på steg 3 – att kritiskt granska AI:s svar.',
          preparation: ['Förbered AI-svar (både rätt och fel).'],
          steps: [
            'Läs upp en fråga och ett AI-svar.',
            'Låt eleverna fundera: Stämmer det här?',
            'Diskutera hur man kan kolla.'
          ],
          examples: [
            'Sveriges huvudstad är Göteborg (Fel)',
            'En spindel har sex ben (Fel)',
            'Kor äter gräs (Rätt)'
          ],
          discussion: 'Även när AI låter säker kan den ha fel.'
        },
        type: 'analog'
      },
      {
        title: '6. Skriv en bättre fråga',
        studentDescription: 'En bra fråga hjälper AI ge ett bra svar. Nu ska vi öva på att skriva tydliga frågor!',
        teacherInstructions: {
          purpose: 'Eleverna tränar på att formulera tydliga och effektiva frågor/instruktioner till AI.',
          steps: [
            'Visa exempel på otydliga frågor ("Berätta om djur").',
            'Diskutera varför de är dåliga och hur man gör dem bättre.',
            'Låt eleverna förbättra otydliga frågor.'
          ],
          examples: [
            'Otydlig: "Hjälp mig med läxan"',
            'Bättre: "Förklara hur man räknar ut omkretsen på en fyrkant."'
          ],
          discussion: 'Vilka frågor blev bäst? Varför?'
        },
        type: 'analog'
      },
      {
        title: '7. Hela trappan – Eget arbete',
        studentDescription: 'Nu ska du använda hela tänkartrappan själv! Välj något du vill ta reda på och gör alla tre stegen.',
        teacherInstructions: {
          purpose: 'Eleverna tillämpar hela modellen självständigt (med stöd).',
          preparation: ['Arbetsblad med de tre stegen.'],
          steps: [
            'Dela ut arbetsblad.',
            'Låt eleverna välja ämne.',
            'Gå igenom steg för steg: Tänk först, Fråga AI, Tänk igen.'
          ],
          discussion: 'Låt några elever berätta om sin process.'
        },
        type: 'digital'
      },
      {
        title: '8. Minnesramsan',
        studentDescription: 'Lär dig ramsan så du alltid kommer ihåg hur du ska tänka!',
        teacherInstructions: {
          purpose: 'Eleverna får en enkel ramsa att komma ihåg modellen.',
          steps: [
            'Läs ramsan högt: "Först stannar jag och tänker till, sen frågar jag om det jag vill..."',
            'Gör rörelser till varje del.',
            'Öva tills klassen kan den.'
          ],
          discussion: 'Ramsan kan sättas upp i klassrummet.'
        },
        type: 'analog'
      },
      {
        title: '9. Allt vi lärt oss – Återblick',
        studentDescription: 'Nu ska vi titta tillbaka på allt vi lärt oss om AI. Vad kommer du ihåg?',
        teacherInstructions: {
          purpose: 'Knyta ihop hela materialet och repetera huvudbudskapen från alla kapitel.',
          steps: [
            'Gå igenom varje kapitel med en fråga.',
            'Exempel: "Är AI en kompis?", "Kan AI ha fel?", "Vad kan du som AI aldrig kan?", "Vem bestämmer?"'
          ],
          discussion: 'Ni kan så mycket nu! Ni förstår AI bättre än många vuxna.'
        },
        type: 'analog'
      },
      {
        title: '10. Mitt löfte och min plan – Avslutning',
        studentDescription: 'Nu när du lärt dig allt det här – hur vill du använda AI? Skriv ditt löfte och din plan!',
        teacherInstructions: {
          purpose: 'Ge eleverna en personlig avslutning där de formulerar hur de vill använda det de lärt sig.',
          preparation: ['Fint papper, pennor, ev. diplom.'],
          steps: [
            'Be eleverna skriva sitt löfte ("Jag lovar att...") och sin plan ("När jag använder AI ska jag...").',
            'De som vill får läsa upp.',
            'Dela ut diplom om möjligt.'
          ],
          discussion: 'Avslutande ord: Ni är människor. Det är ganska fantastiskt.'
        },
        type: 'analog'
      }
    ]
  },

];
