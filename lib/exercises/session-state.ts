// State of one exercise in a session, and the only ways it may change.
// Pure (type imports only) so lib/exercises/session-storage.test.mjs can run it with Node.
import type { AttemptRecord, AttemptStatus } from "./summary";
import type { ExerciseAnswer, PublicExercise } from "./types";

export type Draft = { kind: "choice"; value: string } | { kind: "text"; value: string } | null;

export type SelfAssessment = "met" | "not-met";

/**
 * What the session remembers about an exercise. It holds the student's own answer and the
 * statuses returned by the server, never the correct answer or the explanation.
 */
export type SessionEntry = {
  draft: Draft;
  /** True while the shown answer is the one that was checked (the input is locked). */
  checked: boolean;
  /** Status of the first checked answer: the one the summary scores. Never overwritten. */
  firstStatus: AttemptStatus | null;
  /** Status of the most recent check, used to report corrections made after feedback. */
  latestStatus: AttemptStatus | null;
  selfAssessment: SelfAssessment | null;
};

export const EMPTY_ENTRY: SessionEntry = {
  draft: null,
  checked: false,
  firstStatus: null,
  latestStatus: null,
  selfAssessment: null,
};

/** A checked answer cannot be edited until the student reopens it. */
export function changeDraft(entry: SessionEntry, draft: Draft): SessionEntry {
  return entry.checked ? entry : { ...entry, draft };
}

/** Records a server check of `draft`. The first status is kept forever, whatever comes next. */
export function recordCheck(entry: SessionEntry, draft: Draft, status: AttemptStatus): SessionEntry {
  return {
    ...entry,
    draft,
    checked: true,
    firstStatus: entry.firstStatus ?? status,
    latestStatus: status,
    selfAssessment: null,
  };
}

/** "Modifică răspunsul": the answer becomes editable; the recorded statuses stay. */
export function reopen(entry: SessionEntry): SessionEntry {
  return { ...entry, checked: false, selfAssessment: null };
}

export function assessSelf(entry: SessionEntry, value: SelfAssessment): SessionEntry {
  return entry.checked && entry.latestStatus === "self-assessment" ? { ...entry, selfAssessment: value } : entry;
}

export function toAttempt(entry: SessionEntry): AttemptRecord {
  return { first: entry.firstStatus, latest: entry.latestStatus };
}

export function toAnswer(exercise: PublicExercise, draft: Draft): ExerciseAnswer | null {
  if (!draft || draft.value.trim().length === 0) return null;
  switch (exercise.type) {
    case "multiple-choice":
      return draft.kind === "choice" ? { type: "multiple-choice", optionId: draft.value } : null;
    case "true-false":
      return draft.kind === "choice" ? { type: "true-false", value: draft.value === "true" } : null;
    case "short-answer":
      return draft.kind === "text" ? { type: "short-answer", text: draft.value } : null;
  }
}
