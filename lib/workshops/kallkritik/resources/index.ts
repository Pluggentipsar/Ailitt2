import type { Resource } from "../types";
import { trygghetsregler } from "./trygghetsregler";
import { promptbibliotek } from "./promptbibliotek";
import { dramaturgi } from "./dramaturgi";
import { samtalskort } from "./samtalskort";
import { foraldraguide } from "./foraldraguide";
import { kallor } from "./kallor";

// Lista som driver navigation/kort i hubben — själva innehållet importeras
// direkt från respektive fil i varje resurssida.
export const resources: Resource[] = [
  {
    id: "trygghetsregler",
    title: trygghetsregler.title,
    blurb: trygghetsregler.blurb,
    icon: "ShieldAlert",
    tone: "warning",
  },
  {
    id: "promptbibliotek",
    title: promptbibliotek.title,
    blurb: promptbibliotek.blurb,
    icon: "Terminal",
    tone: "tools",
  },
  {
    id: "dramaturgi",
    title: dramaturgi.title,
    blurb: dramaturgi.blurb,
    icon: "Clock",
    tone: "plan",
  },
  {
    id: "samtalskort",
    title: samtalskort.title,
    blurb: samtalskort.blurb,
    icon: "MessageSquareQuote",
    tone: "cards",
  },
  {
    id: "foraldraguide",
    title: foraldraguide.title,
    blurb: foraldraguide.blurb,
    icon: "Users",
    tone: "parents",
  },
  {
    id: "kallor",
    title: kallor.title,
    blurb: kallor.blurb,
    icon: "BookMarked",
    tone: "sources",
  },
];

export {
  trygghetsregler,
  promptbibliotek,
  dramaturgi,
  samtalskort,
  foraldraguide,
  kallor,
};
