export const LESSON_STATUSES = ["draft-neverificat", "verificat"] as const;

const SECTION_LABELS: Record<string, string> = {
  teorie: "Teorie",
  exercitii: "Exerciții",
};

export function sectionLabel(section: string): string {
  return SECTION_LABELS[section] ?? section;
}

export type LessonStatus = (typeof LESSON_STATUSES)[number];

export type LessonMeta = {
  id: string;
  slug: string;
  subject: string;
  title: string;
  author: string;
  sections: string[];
  status: LessonStatus;
  lastReviewed: string | null;
  referenceAnalysis?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isLessonStatus(value: unknown): value is LessonStatus {
  return LESSON_STATUSES.some((status) => status === value);
}

/**
 * Validates the `lesson` export of an MDX file. Throws with the source file
 * in the message so that a malformed lesson fails the build, not silently.
 */
export function parseLessonMeta(value: unknown, source: string): LessonMeta {
  const fail = (reason: string): never => {
    throw new Error(`Metadate invalide pentru lecția „${source}”: ${reason}`);
  };

  if (!isRecord(value)) fail("lipsește exportul `lesson`");
  const raw = value as Record<string, unknown>;

  for (const key of ["id", "slug", "subject", "title", "author"] as const) {
    if (!isNonEmptyString(raw[key])) fail(`câmpul „${key}” trebuie să fie un text nevid`);
  }
  if (!Array.isArray(raw.sections) || !raw.sections.every(isNonEmptyString)) {
    fail("câmpul „sections” trebuie să fie o listă de texte");
  }
  if (!isLessonStatus(raw.status)) {
    fail(`câmpul „status” trebuie să fie unul dintre: ${LESSON_STATUSES.join(", ")}`);
  }
  if (raw.lastReviewed !== null && !isNonEmptyString(raw.lastReviewed)) {
    fail("câmpul „lastReviewed” trebuie să fie un text sau null");
  }
  if (raw.referenceAnalysis !== undefined && !isNonEmptyString(raw.referenceAnalysis)) {
    fail("câmpul „referenceAnalysis” trebuie să fie un text");
  }

  return {
    id: raw.id as string,
    slug: raw.slug as string,
    subject: raw.subject as string,
    title: raw.title as string,
    author: raw.author as string,
    sections: raw.sections as string[],
    status: raw.status as LessonStatus,
    lastReviewed: raw.lastReviewed as string | null,
    referenceAnalysis: raw.referenceAnalysis as string | undefined,
  };
}

const CLOSING_QUOTE: Record<string, string> = { "„": "”", "«": "»", '"': '"' };

/** The title without the trailing " de <author>", with its own quotes kept („Ion” de Liviu Rebreanu → „Ion”). */
export function titleWithoutAuthor(meta: LessonMeta): string {
  const suffix = ` de ${meta.author}`;
  return (meta.title.endsWith(suffix) ? meta.title.slice(0, -suffix.length) : meta.title).trim();
}

/**
 * Short form of the title for breadcrumbs and lists: drops the trailing " de <author>" and the
 * quote pair that opens the title („Ion” de Liviu Rebreanu → Ion). Only that first pair goes,
 * so quotes further on stay balanced („Moromeții” (volumul I) → Moromeții (volumul I)).
 * Falls back to the full title.
 */
export function shortTitle(meta: LessonMeta): string {
  const base = titleWithoutAuthor(meta);
  const closing = CLOSING_QUOTE[base.charAt(0)];
  if (closing === undefined) return base || meta.title;
  const closeAt = base.indexOf(closing, 1);
  if (closeAt === -1) return base || meta.title;
  const unquoted = `${base.slice(1, closeAt).trim()}${base.slice(closeAt + 1)}`.trim();
  return unquoted || meta.title;
}

export function isDraft(meta: LessonMeta): boolean {
  return meta.status !== "verificat";
}
