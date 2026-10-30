import type { OperaSlug } from "../content/romana-opere-slugs";

/**
 * Groups of works for navigation on the home page and in the catalogue.
 * They are NOT an official classification of the BAC syllabus. Each work is assigned by hand,
 * after checking its lesson metadata (the „Specie” fact in content/romana/opere/introduceri.ts):
 * Record<OperaSlug, …> makes TypeScript reject a new work that has no group, and
 * lib/site/opere-grupe.test.mjs checks the final distribution.
 */
export const GRUPE_NOTA =
  "Grupele sunt organizate pentru navigare în platformă și nu reprezintă o clasificare oficială a programei BAC.";

export const GRUPE = [
  { id: "proza", title: "Proză" },
  { id: "poezie", title: "Poezie" },
  { id: "teatru", title: "Teatru" },
  { id: "critica", title: "Critică și teorie literară" },
] as const;

export type GrupaId = (typeof GRUPE)[number]["id"];

export const OPERA_GRUPA: Record<OperaSlug, GrupaId> = {
  // Proză: epic, în proză (roman, nuvelă, basm cult).
  ion: "proza",
  "enigma-otiliei": "proza",
  baltagul: "proza",
  "ultima-noapte-de-dragoste": "proza",
  "morometii-volumul-1": "proza",
  "moara-cu-noroc": "proza",
  "alexandru-lapusneanul": "proza",
  "povestea-lui-harap-alb": "proza",
  // Poezie: poem, poezie, artă poetică.
  luceafarul: "poezie",
  "scrisoarea-iii": "poezie",
  plumb: "poezie",
  testament: "poezie",
  "eu-nu-strivesc-corola-de-minuni-a-lumii": "poezie",
  "leoaica-tanara-iubirea": "poezie",
  // Teatru: texte dramatice.
  "o-scrisoare-pierduta": "teatru",
  "o-noapte-furtunoasa": "teatru",
  iona: "teatru",
  // Critică și teorie literară: studiu și text critic.
  "in-contra-directiei-de-astazi": "critica",
  "sincronismul-lovinescu": "critica",
};

export type OperaGroup<T> = { id: GrupaId; title: string; items: T[] };

/**
 * Splits works into the groups above, each sorted by title. Throws when a work has no group,
 * so a new work cannot silently drop out of the page.
 */
export function groupOpere<T extends { slug: string; title: string }>(items: T[]): OperaGroup<T>[] {
  const bySlug: Record<string, GrupaId | undefined> = OPERA_GRUPA;
  const groups = GRUPE.map((grupa) => ({ id: grupa.id, title: grupa.title, items: [] as T[] }));
  for (const item of items) {
    const id = bySlug[item.slug];
    const group = groups.find((candidate) => candidate.id === id);
    if (!group) throw new Error(`Opera „${item.slug}” nu are o grupă în lib/site/opere-grupe.ts.`);
    group.items.push(item);
  }
  for (const group of groups) {
    group.items.sort((a, b) => a.title.localeCompare(b.title, "ro"));
  }
  return groups;
}
