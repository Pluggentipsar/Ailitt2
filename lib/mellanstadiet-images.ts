/**
 * URL:er till alla bilder i mellanstadiematerialet. Single source of truth
 * — uppdatera bara här om en bild ska bytas. Mappas mot ID:n i
 * `mellanstadiet/bildleverans.csv` och `mellanstadiet/bildprompter.md`.
 */

export const MELLANSTADIET_IMAGES = {
  // Inline-bilder i lektionerna
  "L1.1":
    "https://cdn.midjourney.com/ee3375b3-81af-43dc-b9a5-13af855a180d/0_1.png",
  "L1.2":
    "https://cdn.midjourney.com/a7c7cd8d-618f-4ecc-be53-23d87404da49/0_3.png",
  "L1.3":
    "https://cdn.midjourney.com/51208608-0c85-4bcc-baa5-b09d64eb4346/0_2.png",
  "L2.1":
    "https://cdn.midjourney.com/3311c3ce-af3d-495d-84da-70b88f4747f4/0_3.png",
  "L2.2":
    "https://cdn.midjourney.com/3e95685c-0b03-4106-94d0-b5bec993cc44/0_1.png",
  "L3.1":
    "https://cdn.midjourney.com/2509f5bb-9083-445e-b7c8-4a3df90c738d/0_0.png",
  "L3.2":
    "https://cdn.midjourney.com/01233cef-dd16-4e33-8129-5f1e2adfdec8/0_1.png",
  "L3.3":
    "https://cdn.midjourney.com/e94b38c3-f54a-4611-b3c1-89768b6483b1/0_3.png",
  "L4.1":
    "https://cdn.midjourney.com/2a8901cb-b435-430c-862d-75056ec012f7/0_1.png",
  "L4.2":
    "https://cdn.midjourney.com/7e2f07c4-b095-45ae-8c21-ecf37f6b0400/0_0.png",
  "L5.1":
    "https://cdn.midjourney.com/179a69cb-b6f0-4655-bc4c-06e5ea313a5e/0_3.png",
  "L5.2":
    "https://cdn.midjourney.com/adf7a01c-8cc3-4669-808d-421015eca120/0_3.png",
  "L6.1":
    "https://cdn.midjourney.com/b64e195f-4723-4870-a656-4254461ab788/0_1.png",
  "L6.2":
    "https://cdn.midjourney.com/c6ef08cb-6bd5-43b8-9b8c-6b1ceca19246/0_2.png",
  "L7.1":
    "https://cdn.midjourney.com/ff6d1272-fb2c-436a-8069-9e969dd1f5e7/0_0.png",
  "L7.2":
    "https://cdn.midjourney.com/1071e01a-775d-4f3f-9a0c-2a4df49f1272/0_3.png",

  // Hero-bilder per lektion (21:9 panoramiska)
  "L1-hero":
    "https://cdn.midjourney.com/39793642-1ab0-4a3e-acae-2a992aad61a2/0_2.png",
  "L2-hero":
    "https://cdn.midjourney.com/ac520742-3469-49f4-86dd-89eea6f8df38/0_0.png",
  "L3-hero":
    "https://cdn.midjourney.com/6d209e28-6de5-42a7-9eef-ee8f3588daa4/0_0.png",
  "L4-hero":
    "https://cdn.midjourney.com/1245b224-8d40-477f-a48b-7e9e8fd77e04/0_0.png",
  "L5-hero":
    "https://cdn.midjourney.com/d9dfbc94-a278-4ea9-a916-b922b1eaaaa8/0_2.png",
  "L6-hero":
    "https://cdn.midjourney.com/37343a57-35bd-4d37-b99a-ad92e743145f/0_3.png",
  "L7-hero":
    "https://cdn.midjourney.com/a70e4bea-d658-486a-9625-f3adb8323fdb/0_1.png",

  // Spel-omslag
  S1: "https://cdn.midjourney.com/3e183034-9f27-4c20-b804-2f23b113d3ce/0_1.png",
  S2: "https://cdn.midjourney.com/91fa498a-1611-4aaf-b02e-323ed5de886c/0_2.png",
  S3: "https://cdn.midjourney.com/ced6fc27-5334-4729-abc4-30e5aa3db325/0_3.png",
  S4: "https://cdn.midjourney.com/0744fde7-57ba-4fd5-939a-0c53ccef1a76/0_1.png",
  S5: "https://cdn.midjourney.com/f3ca642d-cdb1-4efc-846c-2a0f7dc05296/0_1.png",
  S6: "https://cdn.midjourney.com/6c6b546b-efb7-40bf-92a0-a7740c2804ec/0_1.png",
  S7: "https://cdn.midjourney.com/286a5e2a-b615-4760-bf9b-98e7ca644d8d/0_2.png",
  S8: "https://cdn.midjourney.com/a04165fa-d494-4c30-a9fc-08d4ba2b2c00/0_2.png",
} as const;

export type MellanstadietImageId = keyof typeof MELLANSTADIET_IMAGES;

/** Hero-bild för en lektion utifrån dess nummer (1–7). */
export function getLessonHero(lessonNumber: number): string | undefined {
  const key = `L${lessonNumber}-hero` as MellanstadietImageId;
  return MELLANSTADIET_IMAGES[key];
}

/** Omslagsbild för ett spel utifrån dess slug. */
const GAME_COVER_BY_SLUG: Record<string, MellanstadietImageId> = {
  "monster-fangaren": "S1",
  "nasta-ord": "S2",
  "ai-eller-manniska": "S3",
  "sycophancy-detektorn": "S4",
  "byg-din-framtid": "S5",
  "dilemma-spelet": "S6",
  "hallucination-rally": "S7",
  "bias-detektiven": "S8",
};

export function getGameCover(slug: string): string | undefined {
  const id = GAME_COVER_BY_SLUG[slug];
  return id ? MELLANSTADIET_IMAGES[id] : undefined;
}
