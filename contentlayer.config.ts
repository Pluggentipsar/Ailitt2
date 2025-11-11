import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";

export const Module = defineDocumentType(() => ({
  name: "Module",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Modulens titel",
      required: true,
    },
    subject: {
      type: "string",
      description: "Ämne (t.ex. Svenska)",
      required: true,
    },
    course: {
      type: "string",
      description: "Kurs (t.ex. Svenska 1)",
      required: true,
    },
    description: {
      type: "string",
      description: "Kort beskrivning av modulen",
      required: true,
    },
    ai_literacy_ids: {
      type: "list",
      of: { type: "number" },
      description: "Lista med AI-litteracitetsaspekter som modulen täcker",
      required: true,
    },
    time: {
      type: "string",
      description: "Tidsåtgång (t.ex. '90 min')",
      required: false,
    },
    groupSize: {
      type: "string",
      description: "Gruppstorlek (t.ex. 'Individuellt', 'Smågrupper (3-4 elever)')",
      required: false,
    },
    parent: {
      type: "string",
      description: "Moderns överordnade modul (för att skapa hierarkiska strukturer)",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        // Remove 'page' from the end if it exists (for folder-based routing)
        if (parts[parts.length - 1] === "page") {
          parts.pop();
        }
        return `/amnen/${parts.join("/")}`;
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    // Fulltext för sökning - innehåller all MDX-text
    searchableContent: {
      type: "string",
      resolve: (doc) => {
        // Kombinera titel, beskrivning och råtext för bättre sökbarhet
        return `${doc.title} ${doc.description} ${doc.body.raw}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Module],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
