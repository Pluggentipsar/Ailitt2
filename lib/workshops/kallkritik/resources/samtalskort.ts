export type ConversationCard = {
  text: string;
};

export type CardDeck = {
  id: string;
  title: string;
  description: string;
  cards: ConversationCard[];
};

export const samtalskort = {
  id: "samtalskort",
  title: "Samtalskort",
  blurb:
    "Korta frågor för mentorstid, elevhälsoteam, klassrum eller arbetslag.",
  intro:
    "De här korta frågorna kan användas på mentorstid, i elevhälsoteam, i klassrum eller i arbetslag.",
  decks: [
    {
      id: "med-elever",
      title: "Med elever",
      description:
        "Öppnar samtal om AI-vänner och relationskritik. Använd som mentorstid eller efter en av relationskritik-övningarna.",
      cards: [
        { text: "Vad kan en riktig kompis ge som en AI aldrig kan?" },
        { text: "Vad kan en AI ge som en kompis inte alltid kan?" },
        {
          text: "Har du någon gång känt att en AI verkligen förstod dig? Vad gjorde AI:n då?",
        },
        { text: "En vän säger ibland emot. Gör din AI det?" },
        {
          text: "Om du var ledsen sent en kväll, vem skulle du helst prata med och varför?",
        },
        { text: "Vad skulle du sakna om alla AI-vänner försvann i morgon?" },
        {
          text: "Finns det något du tycker att vuxna missförstår om varför unga pratar med AI?",
        },
      ],
    },
    {
      id: "i-arbetslaget",
      title: "I arbetslaget",
      description:
        "Frågor för kollegial reflektion. Använd på APT, planeringstid eller efter att ni gått igenom workshopens nyckelaktiviteter.",
      cards: [
        {
          text: "Hur pratar vi om AI med våra elever idag: som verktyg, fusk, fara eller något mer?",
        },
        { text: "Vilka elever hos oss riskerar att bli ensamma med svåra tankar?" },
        {
          text: "Var finns friktionen i vår undervisning, den som gör att lärande faktiskt sker?",
        },
        {
          text: "Vad gör vi när en elev använder AI för relationer, oro eller självbild?",
        },
        {
          text: "När ska frågan ligga hos undervisande lärare, när hos mentor och när hos elevhälsan?",
        },
        {
          text: "Hur säkrar vi att en elev som mår dåligt möter en människa först, inte bara en app?",
        },
      ],
    },
  ] satisfies CardDeck[],
};

export type SamtalskortData = typeof samtalskort;
