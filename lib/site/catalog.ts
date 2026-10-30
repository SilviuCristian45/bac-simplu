import { isDraft, shortTitle } from "@/lib/content/lesson";
import { getAllOperaMeta } from "@/lib/content/romana-opere";
import { OPERA_SLUGS, type OperaSlug } from "@/lib/content/romana-opere-slugs";
import { getExerciseSet, romanaOperaSetKey } from "@/lib/exercises/registry";
import { sessionStorageKey } from "@/lib/exercises/session-storage";
import { groupOpere, type OperaGroup } from "./opere-grupe";

export type CatalogItem = {
  slug: OperaSlug;
  /** Full title with author, used for sorting and as the accessible name. */
  title: string;
  /** Title without author and the opening quotes, for lists. */
  shortTitle: string;
  author: string;
  draft: boolean;
  exerciseCount: number;
  /** localStorage key of the exercise session; see lib/exercises/session-storage.ts. */
  storageKey: string;
};

export type Catalog = {
  groups: OperaGroup<CatalogItem>[];
  operaCount: number;
  exerciseCount: number;
};

function isOperaSlugValue(slug: string): slug is OperaSlug {
  return (OPERA_SLUGS as readonly string[]).includes(slug);
}

/** All works, grouped for navigation, with the numbers shown on the home page computed from data. */
export async function getCatalog(): Promise<Catalog> {
  const metas = await getAllOperaMeta();
  const items: CatalogItem[] = metas.map((meta) => {
    if (!isOperaSlugValue(meta.slug)) throw new Error(`Slug necunoscut în catalog: ${meta.slug}`);
    const setKey = romanaOperaSetKey(meta.slug);
    return {
      slug: meta.slug,
      title: meta.title,
      shortTitle: shortTitle(meta),
      author: meta.author,
      draft: isDraft(meta),
      exerciseCount: getExerciseSet(setKey)?.set.exercises.length ?? 0,
      storageKey: sessionStorageKey(setKey),
    };
  });
  const groups = groupOpere(items);
  return {
    groups,
    operaCount: items.length,
    exerciseCount: items.reduce((sum, item) => sum + item.exerciseCount, 0),
  };
}
