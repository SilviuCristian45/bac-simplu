import type { ContentLabelKind } from "./content-labels";

/** Chip colours for the lesson labels (Despre roman, Interpretare, Cerință oficială…). */
export const LABEL_CHIP: Record<ContentLabelKind, string> = {
  oficial: "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200",
  recomandare: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
  stadiu: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  interpretare: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
  text: "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
};

/** Kinds of statement shown inside interactive figures. */
export type FigureTagKind =
  | "fapt"
  | "fapt-nuvela"
  | "fapt-basm"
  | "fapt-piesa"
  | "fapt-poezie"
  | "interpretare"
  | "concept"
  | "exemplu-didactic"
  | "citat"
  | "oficial"
  | "recomandare";

/** Same palette as the lesson labels, so a fact or an interpretation looks the same everywhere. */
export const FIGURE_TAGS: Record<FigureTagKind, { label: string; className: string }> = {
  fapt: { label: "Despre roman", className: LABEL_CHIP.text },
  "fapt-nuvela": { label: "Despre nuvelă", className: LABEL_CHIP.text },
  "fapt-basm": { label: "Despre basm", className: LABEL_CHIP.text },
  "fapt-piesa": { label: "Despre piesă", className: LABEL_CHIP.text },
  "fapt-poezie": { label: "Despre poezie", className: LABEL_CHIP.text },
  interpretare: { label: "Interpretare", className: LABEL_CHIP.interpretare },
  concept: { label: "Concept literar", className: "bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-200" },
  "exemplu-didactic": {
    label: "Exemplu didactic – nu este citat",
    className: "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
  },
  citat: { label: "Citat din operă", className: "bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200" },
  oficial: { label: "Cerință oficială", className: LABEL_CHIP.oficial },
  recomandare: { label: "Recomandare", className: LABEL_CHIP.recomandare },
};
