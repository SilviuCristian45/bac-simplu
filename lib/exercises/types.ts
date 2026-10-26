/**
 * Exercise model. Kept free of runtime imports so that grading and validation can be
 * unit-tested with Node directly (see lib/exercises/*.test.mjs).
 */

export type Difficulty = "usor" | "mediu" | "dificil";

/** Section of the lesson that the exercise practises (anchor id + visible label). */
export type LessonSectionRef = {
  id: string;
  label: string;
};

type ExerciseBase = {
  /** Stable id, unique within the set, e.g. "ion-mc-context". Never reuse a retired id. */
  id: string;
  prompt: string;
  difficulty: Difficulty;
  lessonSection: LessonSectionRef;
  /** Shown only after the answer is checked. */
  explanation: string;
  /** Where the content comes from (lesson section, novel chapter), for reviewers. */
  basis: string;
};

export type ChoiceOption = {
  id: string;
  text: string;
};

export type MultipleChoiceExercise = ExerciseBase & {
  type: "multiple-choice";
  options: ChoiceOption[];
  correctOptionId: string;
};

export type TrueFalseExercise = ExerciseBase & {
  type: "true-false";
  statement: string;
  correct: boolean;
};

/**
 * keywords: answer is accepted when every group has at least one match (after removing
 * diacritics and case). Use only for short factual answers with a fixed wording.
 * self-assessment: no automatic grading; the student compares with the criteria.
 */
export type ShortAnswerGrading =
  | { mode: "keywords"; requiredGroups: string[][] }
  | { mode: "self-assessment"; criteria: string[] };

export type ShortAnswerExercise = ExerciseBase & {
  type: "short-answer";
  grading: ShortAnswerGrading;
  /** Shown after checking, as a reference answer. */
  modelAnswer: string;
  maxLength: number;
};

export type Exercise = MultipleChoiceExercise | TrueFalseExercise | ShortAnswerExercise;

export type ExerciseSet = {
  /** Stable key, e.g. "romana/ion". */
  key: string;
  subject: string;
  /** Slug of the work or chapter the set belongs to. */
  work: string;
  title: string;
  exercises: Exercise[];
};

// ---- What the browser receives before answering: no answers, criteria or explanations.

export type PublicExercise = (
  | (Pick<MultipleChoiceExercise, "id" | "type" | "prompt" | "difficulty" | "lessonSection" | "options">)
  | (Pick<TrueFalseExercise, "id" | "type" | "prompt" | "difficulty" | "lessonSection" | "statement">)
  | (Pick<ShortAnswerExercise, "id" | "type" | "prompt" | "difficulty" | "lessonSection" | "maxLength"> & {
      gradingMode: ShortAnswerGrading["mode"];
    })
) & {
  /**
   * Changes whenever anything in the exercise changes (answer included), so saved progress for
   * an edited exercise is discarded. Derived from the full exercise, explanation included; the
   * explanation is unknown before answering, so the value cannot be used to guess the answer.
   */
  revision: string;
};

export type ExerciseAnswer =
  | { type: "multiple-choice"; optionId: string }
  | { type: "true-false"; value: boolean }
  | { type: "short-answer"; text: string };

// ---- What the server returns after checking.

export type CheckResult =
  | {
      status: "correct" | "incorrect";
      explanation: string;
      /** Human-readable correct answer, revealed only after checking. */
      correctAnswer: string;
      /** Option id for multiple choice; "true" / "false" for true-false. */
      correctOptionId?: string;
    }
  | {
      /** Keyword grading found no match: may be wrong or phrased differently. */
      status: "not-recognized";
      explanation: string;
      correctAnswer: string;
    }
  | {
      status: "self-assessment";
      explanation: string;
      criteria: string[];
      correctAnswer: string;
    };
