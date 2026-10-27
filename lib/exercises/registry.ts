import { readFileSync } from "node:fs";
import path from "node:path";
import { alexandruLapusneanulExercises } from "@/content/romana/exercitii/alexandru-lapusneanul";
import { baltagulExercises } from "@/content/romana/exercitii/baltagul";
import { blagaExercises } from "@/content/romana/exercitii/eu-nu-strivesc-corola-de-minuni-a-lumii";
import { enigmaOtilieiExercises } from "@/content/romana/exercitii/enigma-otiliei";
import { inContraDirectieiExercises } from "@/content/romana/exercitii/in-contra-directiei-de-astazi";
import { ionExercises } from "@/content/romana/exercitii/ion";
import { ionaExercises } from "@/content/romana/exercitii/iona";
import { leoaicaExercises } from "@/content/romana/exercitii/leoaica-tanara-iubirea";
import { luceafarulExercises } from "@/content/romana/exercitii/luceafarul";
import { moaraCuNorocExercises } from "@/content/romana/exercitii/moara-cu-noroc";
import { morometiiExercises } from "@/content/romana/exercitii/morometii-volumul-1";
import { oNoapteFurtunoasaExercises } from "@/content/romana/exercitii/o-noapte-furtunoasa";
import { oScrisoarePierdutaExercises } from "@/content/romana/exercitii/o-scrisoare-pierduta";
import { plumbExercises } from "@/content/romana/exercitii/plumb";
import { scrisoareaIIIExercises } from "@/content/romana/exercitii/scrisoarea-iii";
import { sincronismulExercises } from "@/content/romana/exercitii/sincronismul-lovinescu";
import { testamentExercises } from "@/content/romana/exercitii/testament";
import { ultimaNoapteExercises } from "@/content/romana/exercitii/ultima-noapte-de-dragoste";
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
  [alexandruLapusneanulExercises.key]: {
    set: alexandruLapusneanulExercises,
    lessonFile: "romana/opere/alexandru-lapusneanul.mdx",
    lessonHref: "/romana/opere/alexandru-lapusneanul",
  },
  [enigmaOtilieiExercises.key]: {
    set: enigmaOtilieiExercises,
    lessonFile: "romana/opere/enigma-otiliei.mdx",
    lessonHref: "/romana/opere/enigma-otiliei",
  },
  [oScrisoarePierdutaExercises.key]: {
    set: oScrisoarePierdutaExercises,
    lessonFile: "romana/opere/o-scrisoare-pierduta.mdx",
    lessonHref: "/romana/opere/o-scrisoare-pierduta",
  },
  [luceafarulExercises.key]: {
    set: luceafarulExercises,
    lessonFile: "romana/opere/luceafarul.mdx",
    lessonHref: "/romana/opere/luceafarul",
  },
  [plumbExercises.key]: {
    set: plumbExercises,
    lessonFile: "romana/opere/plumb.mdx",
    lessonHref: "/romana/opere/plumb",
  },
  [testamentExercises.key]: {
    set: testamentExercises,
    lessonFile: "romana/opere/testament.mdx",
    lessonHref: "/romana/opere/testament",
  },
  [scrisoareaIIIExercises.key]: {
    set: scrisoareaIIIExercises,
    lessonFile: "romana/opere/scrisoarea-iii.mdx",
    lessonHref: "/romana/opere/scrisoarea-iii",
  },
  [oNoapteFurtunoasaExercises.key]: {
    set: oNoapteFurtunoasaExercises,
    lessonFile: "romana/opere/o-noapte-furtunoasa.mdx",
    lessonHref: "/romana/opere/o-noapte-furtunoasa",
  },
  [inContraDirectieiExercises.key]: {
    set: inContraDirectieiExercises,
    lessonFile: "romana/opere/in-contra-directiei-de-astazi.mdx",
    lessonHref: "/romana/opere/in-contra-directiei-de-astazi",
  },
  [baltagulExercises.key]: {
    set: baltagulExercises,
    lessonFile: "romana/opere/baltagul.mdx",
    lessonHref: "/romana/opere/baltagul",
  },
  [blagaExercises.key]: {
    set: blagaExercises,
    lessonFile: "romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii.mdx",
    lessonHref: "/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii",
  },
  [ultimaNoapteExercises.key]: {
    set: ultimaNoapteExercises,
    lessonFile: "romana/opere/ultima-noapte-de-dragoste.mdx",
    lessonHref: "/romana/opere/ultima-noapte-de-dragoste",
  },
  [ionaExercises.key]: {
    set: ionaExercises,
    lessonFile: "romana/opere/iona.mdx",
    lessonHref: "/romana/opere/iona",
  },
  [leoaicaExercises.key]: {
    set: leoaicaExercises,
    lessonFile: "romana/opere/leoaica-tanara-iubirea.mdx",
    lessonHref: "/romana/opere/leoaica-tanara-iubirea",
  },
  [sincronismulExercises.key]: {
    set: sincronismulExercises,
    lessonFile: "romana/opere/sincronismul-lovinescu.mdx",
    lessonHref: "/romana/opere/sincronismul-lovinescu",
  },
  [morometiiExercises.key]: {
    set: morometiiExercises,
    lessonFile: "romana/opere/morometii-volumul-1.mdx",
    lessonHref: "/romana/opere/morometii-volumul-1",
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
