import { readFileSync } from "node:fs";
import path from "node:path";
import { ionExercises } from "@/content/romana/exercitii/ion";
import { moaraCuNorocExercises } from "@/content/romana/exercitii/moara-cu-noroc";
import { povesteaLuiHarapAlbExercises } from "@/content/romana/exercitii/povestea-lui-harap-alb";
import { extractHeadings } from "@/lib/content/headings";
import { findExerciseSetProblems } from "./grading";
import type { ExerciseSet } from "./types";

type RegistryEntry = {
  set: ExerciseSet;
  /** Lesson the exercises practise, relative to content/; its headings are the valid lessonSection ids. */
  lessonFile: string;
  lessonHref: string;
};

/**
 * Exercise sets by key ("<subject>/<work>"). Adding a set: create the data module under
 * content/<subject>/exercitii/ and add one entry here.
 */
const REGISTRY: Record<string, RegistryEntry> = {
  [ionExercises.key]: {
    set: ionExercises,
    lessonFile: "romana/opere/ion.mdx",
    lessonHref: "/romana/opere/ion",
  },
  [moaraCuNorocExercises.key]: {
    set: moaraCuNorocExercises,
    lessonFile: "romana/opere/moara-cu-noroc.mdx",
    lessonHref: "/romana/opere/moara-cu-noroc",
  },
  [povesteaLuiHarapAlbExercises.key]: {
    set: povesteaLuiHarapAlbExercises,
    lessonFile: "romana/opere/povestea-lui-harap-alb.mdx",
    lessonHref: "/romana/opere/povestea-lui-harap-alb",
  },
};

const validated = new Set<string>();

function validate(entry: RegistryEntry): void {
  if (validated.has(entry.set.key)) return;
  // Scoped to content/ so that Turbopack traces only that folder, not the whole project.
  const source = readFileSync(path.join(process.cwd(), "content", entry.lessonFile), "utf8");
  const sectionIds = new Set(extractHeadings(source, entry.lessonFile).map((heading) => heading.id));
  const problems = findExerciseSetProblems(entry.set, sectionIds);
  if (problems.length > 0) {
    throw new Error(`Setul de exerciții „${entry.set.key}” este invalid:\n- ${problems.join("\n- ")}`);
  }
  validated.add(entry.set.key);
}

export type ExerciseSetEntry = {
  set: ExerciseSet;
  lessonHref: string;
};

export function getExerciseSet(key: string): ExerciseSetEntry | null {
  if (!Object.hasOwn(REGISTRY, key)) return null;
  const entry = REGISTRY[key];
  validate(entry);
  return { set: entry.set, lessonHref: entry.lessonHref };
}

export function romanaOperaSetKey(slug: string): string {
  return `romana/${slug}`;
}

/** Slugs of the works under /romana/opere that have an exercise set. */
export function getRomanaOperaSlugsWithExercises(): string[] {
  return Object.values(REGISTRY)
    .filter((entry) => entry.set.subject === "romana")
    .map((entry) => entry.set.work);
}
