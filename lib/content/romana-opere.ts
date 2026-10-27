import { readFileSync } from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import { extractHeadings, extractTitle, type Heading } from "./headings";
import { parseLessonMeta, type LessonMeta } from "./lesson";
import { OPERA_SLUGS, isOperaSlug, type OperaSlug } from "./romana-opere-slugs";

type LessonModule = {
  default: MDXContent;
  lesson?: unknown;
};

/**
 * Registry of the literary works under /romana/opere.
 * Adding a work: create content/romana/opere/<slug>.mdx, add the slug to
 * OPERA_SLUGS and one line here (TypeScript requires both to stay in sync).
 */
const opere: Record<OperaSlug, () => Promise<LessonModule>> = {
  ion: () => import("@/content/romana/opere/ion.mdx"),
  "moara-cu-noroc": () => import("@/content/romana/opere/moara-cu-noroc.mdx"),
  "povestea-lui-harap-alb": () => import("@/content/romana/opere/povestea-lui-harap-alb.mdx"),
  "alexandru-lapusneanul": () => import("@/content/romana/opere/alexandru-lapusneanul.mdx"),
  "enigma-otiliei": () => import("@/content/romana/opere/enigma-otiliei.mdx"),
  "o-scrisoare-pierduta": () => import("@/content/romana/opere/o-scrisoare-pierduta.mdx"),
  luceafarul: () => import("@/content/romana/opere/luceafarul.mdx"),
  plumb: () => import("@/content/romana/opere/plumb.mdx"),
  testament: () => import("@/content/romana/opere/testament.mdx"),
  "scrisoarea-iii": () => import("@/content/romana/opere/scrisoarea-iii.mdx"),
  "o-noapte-furtunoasa": () => import("@/content/romana/opere/o-noapte-furtunoasa.mdx"),
  "in-contra-directiei-de-astazi": () => import("@/content/romana/opere/in-contra-directiei-de-astazi.mdx"),
  baltagul: () => import("@/content/romana/opere/baltagul.mdx"),
  "eu-nu-strivesc-corola-de-minuni-a-lumii": () => import("@/content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii.mdx"),
  "ultima-noapte-de-dragoste": () => import("@/content/romana/opere/ultima-noapte-de-dragoste.mdx"),
  iona: () => import("@/content/romana/opere/iona.mdx"),
  "leoaica-tanara-iubirea": () => import("@/content/romana/opere/leoaica-tanara-iubirea.mdx"),
  "sincronismul-lovinescu": () => import("@/content/romana/opere/sincronismul-lovinescu.mdx"),
  "morometii-volumul-1": () => import("@/content/romana/opere/morometii-volumul-1.mdx"),
};

export type Opera = {
  meta: LessonMeta;
  Content: MDXContent;
  /** Level-2 and level-3 headings of the lesson, in order, for the table of contents. */
  headings: Heading[];
};

export function getOperaSlugs(): string[] {
  return [...OPERA_SLUGS];
}

export async function getOpera(slug: string): Promise<Opera | null> {
  if (!isOperaSlug(slug)) return null;

  const mod = await opere[slug]();
  const source = `content/romana/opere/${slug}.mdx`;
  const meta = parseLessonMeta(mod.lesson, source);
  if (meta.slug !== slug) {
    throw new Error(
      `Slug-ul din „${source}” („${meta.slug}”) nu corespunde intrării din registru („${slug}”).`,
    );
  }

  // The page shows meta.title as its heading, so the MDX title must say the same thing.
  const mdxSource = readFileSync(path.join(process.cwd(), source), "utf8");
  const mdxTitle = extractTitle(mdxSource);
  if (mdxTitle !== null && mdxTitle !== meta.title) {
    throw new Error(
      `Titlul din „${source}” („${mdxTitle}”) diferă de lesson.title („${meta.title}”).`,
    );
  }

  return { meta, Content: mod.default, headings: extractHeadings(mdxSource, source) };
}

export async function getAllOperaMeta(): Promise<LessonMeta[]> {
  const opereList = await Promise.all(getOperaSlugs().map((slug) => getOpera(slug)));
  return opereList
    .filter((opera): opera is Opera => opera !== null)
    .map((opera) => opera.meta)
    .sort((a, b) => a.title.localeCompare(b.title, "ro"));
}
