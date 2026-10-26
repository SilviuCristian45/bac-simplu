import type { FigureTagKind } from "../label-styles";

/** One stage of an interactive figure. The text must be understandable without the visual. */
export type FigureStep = {
  id: string;
  title: string;
  text: string;
  tag: FigureTagKind;
  /** Lesson section or chapter supporting the statement, e.g. "Lecția, 4.3". */
  source: string;
};

export type FigureContent = {
  title: string;
  /** Always-visible summary: the essential idea, readable without interacting. */
  summary: string;
  /** Visible note on what the illustration is (and is not). */
  note?: string;
  steps: FigureStep[];
};

export type QuizChoice = { id: string; label: string };

/** One statement the reader classifies by choosing one of the quiz choices. */
export type QuizItem = {
  id: string;
  prompt: string;
  /** Who said it or where it comes from, shown under the prompt (e.g. "naratorul, cap. II"). */
  attribution?: string;
  tag?: FigureTagKind;
  /** Choices for this item only; when absent, the quiz-wide choices are offered. */
  choices?: QuizChoice[];
  correct: string;
  /** Shown after checking, for right and wrong answers alike. */
  explanation: string;
  source: string;
};

export type QuizContent = {
  title: string;
  summary: string;
  note?: string;
  /** Choices offered for every item that does not define its own. */
  choices: QuizChoice[];
  items: QuizItem[];
};

/** One block of an essay plan; `see` lists lesson headings (exact text) turned into anchors. */
export type PlanBlock = {
  id: string;
  title: string;
  text: string;
  /** Which barem reper the block covers; undefined for the introduction and the conclusion. */
  reper?: string;
  see: string[];
};
export type EssayPlan = { id: string; label: string; section: string; blocks: PlanBlock[] };
export type EssayPlanIntro = { title: string; summary: string; note?: string };

export type ChecklistGroup = { id: string; title: string; items: string[] };
