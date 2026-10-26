// Session scoring, kept pure (type imports only) so lib/exercises/summary.test.mjs can run it with Node.
import type { CheckResult } from "./types";

export type AttemptStatus = CheckResult["status"];

/**
 * The first checked answer is the one that counts. After checking, the correct answer is
 * revealed, so a later "correct" only shows that the student read the feedback.
 */
export type AttemptRecord = { first: AttemptStatus | null; latest: AttemptStatus | null };

export type SummaryStatus = AttemptStatus | "unanswered";

export function scoredStatus(record: AttemptRecord): SummaryStatus {
  return record.first ?? "unanswered";
}

/** True when the first answer was not correct and a later attempt was. */
export function correctedLater(record: AttemptRecord): boolean {
  return record.first !== null && record.first !== "correct" && record.latest === "correct";
}

export type SessionCounts = {
  correct: number;
  incorrect: number;
  notRecognized: number;
  selfAssessed: number;
  unanswered: number;
  /** Exercises with automatic grading that were answered (denominator of the score). */
  autoGraded: number;
  correctedLater: number;
};

export function countSession(records: AttemptRecord[]): SessionCounts {
  const statuses = records.map(scoredStatus);
  const count = (status: SummaryStatus) => statuses.filter((item) => item === status).length;
  return {
    correct: count("correct"),
    incorrect: count("incorrect"),
    notRecognized: count("not-recognized"),
    selfAssessed: count("self-assessment"),
    unanswered: count("unanswered"),
    autoGraded: count("correct") + count("incorrect") + count("not-recognized"),
    correctedLater: records.filter(correctedLater).length,
  };
}
