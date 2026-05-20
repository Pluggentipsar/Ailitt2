import type { Block } from "../types";

export const trygghetsregler = {
  id: "trygghetsregler",
  title: "Trygghetsregler för deepfake-aktiviteter",
  blurb:
    "Innan ni gör NÅGON deepfake-aktivitet i klassrummet — läs dessa. Gäller varje gång man skapar deepfakes med eller på elever.",
  intro:
    "Innan ni gör någon deepfake-aktivitet i klassrummet, säkerställ följande:",
  rules: [
    {
      title: "Inget elevansikte utan dokumenterad samtycke",
      body: "En lärare/karaktär/historisk person är OK. En klasskamrats foto är INTE OK utan skriftligt samtycke från eleven OCH vårdnadshavare.",
    },
    {
      title: "Inga deepfakes ska sparas eller delas utanför klassrummet",
      body: "Klass-galleriet visas live, sen raderas allt.",
    },
    {
      title: "Tjänsten ska vara godkänd enligt skolans GDPR/DPIA",
      body: "Gå INTE på okända tjänster med elevkonton.",
    },
    {
      title: "Vårdnadshavare informeras i förväg",
      body: "Gärna med syfte och vad som händer med materialet.",
    },
    {
      title: "Stop-ord finns klart formulerade",
      body: "”Om någon i klassen känner sig obekväm — säg till mig direkt”.",
    },
    {
      title: "Avsluta alltid med ett samtal",
      body: "Om hur det känns att skapa fejk, och vad det betyder att andra kan göra det här på en.",
    },
    {
      title: "Polisanmäl ALLTID om någon utsätts",
      body: "Om någon i klassen blir utsatt för en deepfake utanför skolan — identitetsstöld och förtal är brottsligt.",
    },
  ],
  footnote:
    "Reglerna gäller också Higgsfield (2.1), Lucy.decart (2.2) och deepfake.civai (2.3). Skriv ut listan, sätt upp i klassrummet, gå igenom innan första övningen.",
};

export type TrygghetsreglerData = typeof trygghetsregler;
