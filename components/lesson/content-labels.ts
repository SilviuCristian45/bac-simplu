/**
 * Labels that lessons use, in bold at the very start of a block, to mark the kind of
 * information that follows (see the legend at the top of each lesson). Styling is applied
 * only when a block starts with one of these exact labels; other text is never classified.
 */
export const CONTENT_LABELS = {
  "Cerință oficială": "oficial",
  Recomandare: "recomandare",
  "Stadiul lecției": "stadiu",
  Interpretare: "interpretare",
  "Despre roman": "text",
  "Despre nuvelă": "text",
  "Despre operă": "text",
  "Despre basm": "text",
  "Despre piesă": "text",
  "Despre poezie": "text",
} as const;

export type ContentLabelKind = (typeof CONTENT_LABELS)[keyof typeof CONTENT_LABELS];

const LABEL_PATTERN = new RegExp(
  `^(${Object.keys(CONTENT_LABELS).join("|")})(\\s*\\([^)]*\\))?[.:]?$`,
);

/** Accepts e.g. "Interpretare.", "Interpretare (comentariu posibil).", "Despre roman:". */
export function matchContentLabel(text: string): ContentLabelKind | null {
  const match = LABEL_PATTERN.exec(text.trim());
  if (!match) return null;
  return CONTENT_LABELS[match[1] as keyof typeof CONTENT_LABELS];
}
