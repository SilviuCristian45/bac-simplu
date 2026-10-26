"use server";

import { checkAnswer } from "./grading";
import { getExerciseSet } from "./registry";
import type { CheckResult, ExerciseAnswer } from "./types";

export type CheckAnswerResponse =
  | { ok: true; result: CheckResult }
  | { ok: false; error: string };

function parseAnswer(value: unknown): ExerciseAnswer | null {
  if (typeof value !== "object" || value === null) return null;
  const answer = value as Record<string, unknown>;
  switch (answer.type) {
    case "multiple-choice":
      return typeof answer.optionId === "string" ? { type: "multiple-choice", optionId: answer.optionId } : null;
    case "true-false":
      return typeof answer.value === "boolean" ? { type: "true-false", value: answer.value } : null;
    case "short-answer":
      return typeof answer.text === "string" ? { type: "short-answer", text: answer.text } : null;
    default:
      return null;
  }
}

/**
 * Checks one answer on the server, so that correct answers and explanations are never
 * sent to the browser before the student answers. Stateless: nothing is stored.
 */
export async function checkExerciseAnswer(
  setKey: string,
  exerciseId: string,
  rawAnswer: unknown,
): Promise<CheckAnswerResponse> {
  const entry = typeof setKey === "string" ? getExerciseSet(setKey) : null;
  const exercise = entry?.set.exercises.find((item) => item.id === exerciseId);
  if (!exercise) return { ok: false, error: "Exercițiul nu a fost găsit. Reîncarcă pagina." };

  const answer = parseAnswer(rawAnswer);
  const result = answer ? checkAnswer(exercise, answer) : null;
  if (!result) return { ok: false, error: "Răspunsul nu este valid pentru acest exercițiu." };

  return { ok: true, result };
}
