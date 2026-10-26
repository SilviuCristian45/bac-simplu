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

/**
 * Short form of the title for breadcrumbs: drops the trailing " de <author>" and the
 * surrounding quotes („Ion” de Liviu Rebreanu → Ion). Falls back to the full title.
 */
export function shortTitle(meta: LessonMeta): string {
  const withoutAuthor = meta.title.endsWith(` de ${meta.author}`)
    ? meta.title.slice(0, -` de ${meta.author}`.length)
    : meta.title;
  return withoutAuthor.replace(/^[„"«]\s*|\s*[”"»]$/g, "").trim() || meta.title;
}

export function isDraft(meta: LessonMeta): boolean {
  return meta.status !== "verificat";
}
