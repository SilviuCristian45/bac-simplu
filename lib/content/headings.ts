export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

/**
 * Stable anchor id for a heading. Used both when rendering MDX headings and when
 * building the table of contents, so the two always match.
 * Diacritics are dropped (ș → s, ț → t, ă → a) to keep URLs ASCII.
 */
export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__|\*|_|`)/g, "")
    .trim();
}

/** Text of the first level-1 heading, or null if the source has none. */
export function extractTitle(source: string): string | null {
  const match = /^#\s+(.+?)\s*#*\s*$/m.exec(source);
  return match ? stripInlineMarkdown(match[1]) : null;
}

/**
 * Extracts level-2 and level-3 headings from MDX source, skipping fenced code.
 * Throws on duplicate ids so that a broken table of contents fails the build.
 */
export function extractHeadings(source: string, sourceName: string): Heading[] {
  const headings: Heading[] = [];
  const seen = new Set<string>();
  let inFence = false;

  for (const line of source.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const text = stripInlineMarkdown(match[2]);
    const id = slugifyHeading(text);
    if (!id) continue;
    if (seen.has(id)) {
      throw new Error(`Titlu duplicat în „${sourceName}”: „${text}” (ancora „${id}”).`);
    }
    seen.add(id);
    headings.push({ id, text, level: match[1].length === 2 ? 2 : 3 });
  }

  return headings;
}
