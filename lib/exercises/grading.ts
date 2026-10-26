// Pure exercise logic: grading, the public (answer-free) view and set validation.
// Only type imports, so lib/exercises/grading.test.mjs can run it with plain Node.
import type {
  CheckResult,
  Exercise,
  ExerciseAnswer,
  ExerciseSet,
  PublicExercise,
} from "./types";

/** Lowercase, without diacritics or punctuation, single spaces: "Glasul Pământului!" → "glasul pamantului". */
export function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** True when the normalized answer contains the normalized term as whole words. */
export function containsTerm(answer: string, term: string): boolean {
  const haystack = ` ${normalizeText(answer)} `;
  const needle = normalizeText(term);
  return needle.length > 0 && haystack.includes(` ${needle} `);
}

/** cyrb53: small non-cryptographic 53-bit string hash, enough to detect edits. */
function hash53(text: string): string {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ code, 2654435761);
    h2 = Math.imul(h2 ^ code, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/** Revision of an exercise: changes when any field changes (see PublicExercise.revision). */
export function exerciseRevision(exercise: Exercise): string {
  return hash53(JSON.stringify(exercise));
}

export function toPublicExercise(exercise: Exercise): PublicExercise {
  const { id, prompt, difficulty, lessonSection } = exercise;
  const revision = exerciseRevision(exercise);
  switch (exercise.type) {
    case "multiple-choice":
      return { id, type: "multiple-choice", prompt, difficulty, lessonSection, options: exercise.options, revision };
    case "true-false":
      return { id, type: "true-false", prompt, difficulty, lessonSection, statement: exercise.statement, revision };
    case "short-answer":
      return {
        id,
        type: "short-answer",
        prompt,
        difficulty,
        lessonSection,
        maxLength: exercise.maxLength,
        gradingMode: exercise.grading.mode,
        revision,
      };
  }
}

/** Returns null when the answer does not match the exercise type or is empty. */
export function checkAnswer(exercise: Exercise, answer: ExerciseAnswer): CheckResult | null {
  if (exercise.type !== answer.type) return null;

  if (exercise.type === "multiple-choice" && answer.type === "multiple-choice") {
    const correct = exercise.options.find((option) => option.id === exercise.correctOptionId);
    if (!correct || !exercise.options.some((option) => option.id === answer.optionId)) return null;
    return {
      status: answer.optionId === exercise.correctOptionId ? "correct" : "incorrect",
      explanation: exercise.explanation,
      correctAnswer: correct.text,
      correctOptionId: correct.id,
    };
  }

  if (exercise.type === "true-false" && answer.type === "true-false") {
    return {
      status: answer.value === exercise.correct ? "correct" : "incorrect",
      explanation: exercise.explanation,
      correctAnswer: exercise.correct ? "Adevărat" : "Fals",
      correctOptionId: String(exercise.correct),
    };
  }

  if (exercise.type === "short-answer" && answer.type === "short-answer") {
    const text = answer.text.trim();
    if (text.length === 0 || text.length > exercise.maxLength) return null;

    if (exercise.grading.mode === "self-assessment") {
      return {
        status: "self-assessment",
        explanation: exercise.explanation,
        criteria: exercise.grading.criteria,
        correctAnswer: exercise.modelAnswer,
      };
    }

    const matchesAll = exercise.grading.requiredGroups.every((group) =>
      group.some((term) => containsTerm(text, term)),
    );
    return {
      status: matchesAll ? "correct" : "not-recognized",
      explanation: exercise.explanation,
      correctAnswer: exercise.modelAnswer,
    };
  }

  return null;
}

/**
 * Structural checks for an exercise set. Returns the problems found (empty when valid).
 * `sectionIds` are the anchor ids of the lesson headings the exercises may point to.
 */
export function findExerciseSetProblems(set: ExerciseSet, sectionIds: ReadonlySet<string>): string[] {
  const problems: string[] = [];
  const seen = new Set<string>();

  for (const exercise of set.exercises) {
    const where = `${set.key}/${exercise.id}`;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(exercise.id)) problems.push(`${where}: id invalid`);
    if (seen.has(exercise.id)) problems.push(`${where}: id duplicat`);
    seen.add(exercise.id);

    const required = [exercise.prompt, exercise.explanation, exercise.basis, exercise.lessonSection.label];
    if (required.some((value) => value.trim().length === 0)) problems.push(`${where}: câmp obligatoriu gol`);
    if (!sectionIds.has(exercise.lessonSection.id)) {
      problems.push(`${where}: secțiunea „${exercise.lessonSection.id}” nu există în lecție`);
    }

    switch (exercise.type) {
      case "multiple-choice": {
        const ids = exercise.options.map((option) => option.id);
        if (exercise.options.length < 3) problems.push(`${where}: prea puține variante`);
        if (new Set(ids).size !== ids.length) problems.push(`${where}: variante cu id duplicat`);
        if (!ids.includes(exercise.correctOptionId)) problems.push(`${where}: răspunsul corect nu e printre variante`);
        break;
      }
      case "true-false":
        if (exercise.statement.trim().length === 0) problems.push(`${where}: afirmație goală`);
        break;
      case "short-answer":
        if (exercise.modelAnswer.trim().length === 0) problems.push(`${where}: răspuns-model gol`);
        if (exercise.grading.mode === "keywords") {
          const groups = exercise.grading.requiredGroups;
          if (groups.length === 0 || groups.some((group) => group.length === 0)) {
            problems.push(`${where}: grupuri de termeni goale`);
          }
          // The reference answer must pass its own automatic check.
          const own = checkAnswer(exercise, { type: "short-answer", text: exercise.modelAnswer });
          if (own?.status !== "correct") problems.push(`${where}: răspunsul-model nu trece verificarea automată`);
        } else if (exercise.grading.criteria.length === 0) {
          problems.push(`${where}: lipsesc criteriile de autoevaluare`);
        }
        break;
    }
  }

  return problems;
}
