"use client";

import Link from "next/link";
import { forwardRef, type ReactNode } from "react";
import type { SelfAssessment } from "@/lib/exercises/session-state";
import { correctedLater, countSession, scoredStatus, type AttemptRecord } from "@/lib/exercises/summary";
import type { CheckResult, PublicExercise } from "@/lib/exercises/types";

const STATUS: Record<CheckResult["status"], { title: string; icon: string; box: string }> = {
  correct: {
    title: "Corect",
    icon: "✓",
    box: "border-emerald-600 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950/50 dark:text-emerald-50",
  },
  incorrect: {
    title: "Greșit",
    icon: "✗",
    box: "border-red-600 bg-red-50 text-red-950 dark:border-red-400 dark:bg-red-950/50 dark:text-red-50",
  },
  "not-recognized": {
    title: "Răspuns nerecunoscut",
    icon: "?",
    box: "border-amber-600 bg-amber-50 text-amber-950 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-50",
  },
  "self-assessment": {
    title: "Autoevaluare",
    icon: "✎",
    box: "border-blue-600 bg-blue-50 text-blue-950 dark:border-blue-400 dark:bg-blue-950/50 dark:text-blue-50",
  },
};

type FeedbackPanelProps = {
  result: CheckResult;
  lessonHref: string;
  lessonSection: PublicExercise["lessonSection"];
  selfAssessment: SelfAssessment | null;
  onSelfAssess: (value: SelfAssessment) => void;
};

export const FeedbackPanel = forwardRef<HTMLHeadingElement, FeedbackPanelProps>(function FeedbackPanel(
  { result, lessonHref, lessonSection, selfAssessment, onSelfAssess },
  headingRef,
) {
  const status = STATUS[result.status];

  return (
    <section aria-labelledby="feedback-titlu" className={`mt-6 rounded-xl border-l-4 p-5 ${status.box}`}>
      <h3 id="feedback-titlu" ref={headingRef} tabIndex={-1} className="flex items-center gap-2 text-lg font-bold focus:outline-none">
        <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border-2 border-current text-sm">
          {status.icon}
        </span>
        {status.title}
      </h3>

      {result.status === "not-recognized" && (
        <p className="mt-2 leading-relaxed">
          Verificarea automată nu a găsit în răspunsul tău termenii așteptați. Răspunsul poate fi greșit sau
          formulat altfel. Compară-l cu răspunsul corect de mai jos.
        </p>
      )}

      {result.status !== "correct" && (
        <p className="mt-3 leading-relaxed">
          <span className="font-semibold">
            {result.status === "self-assessment" ? "Exemplu de răspuns:" : "Răspunsul corect:"}
          </span>{" "}
          {result.correctAnswer}
        </p>
      )}

      <p className="mt-3 leading-relaxed">
        <span className="font-semibold">Explicație: </span>
        {result.explanation}
      </p>

      {result.status === "self-assessment" && (
        <div className="mt-4">
          <p className="font-semibold">Verifică-ți răspunsul după aceste criterii:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 leading-relaxed">
            {result.criteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold" id="autoevaluare-intrebare">
            Răspunsul tău îndeplinește toate criteriile?
          </p>
          <div role="group" aria-labelledby="autoevaluare-intrebare" className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["met", "Da, le îndeplinește"],
                ["not-met", "Nu încă"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={selfAssessment === value}
                onClick={() => onSelfAssess(value)}
                className="rounded-lg border-2 border-current px-3 py-1.5 text-sm font-semibold aria-pressed:bg-blue-700 aria-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:aria-pressed:bg-blue-300 dark:aria-pressed:text-blue-950"
              >
                {selfAssessment === value && <span aria-hidden="true">✓ </span>}
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 text-sm">
        Recitește în lecție:{" "}
        <Link
          href={`${lessonHref}#${lessonSection.id}`}
          className="font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {lessonSection.label}
        </Link>
      </p>
    </section>
  );
});

export type SummaryRow = {
  id: string;
  number: number;
  attempt: AttemptRecord;
  selfAssessment: SelfAssessment | null;
};

function rowLabel(row: SummaryRow): string {
  const label = statusLabel(row);
  return correctedLater(row.attempt) ? `${label} · corectat după feedback` : label;
}

function statusLabel(row: SummaryRow): string {
  switch (scoredStatus(row.attempt)) {
    case "correct":
      return "✓ Corect";
    case "incorrect":
      return "✗ Greșit";
    case "not-recognized":
      return "? Nerecunoscut automat";
    case "self-assessment":
      return row.selfAssessment === "met"
        ? "✎ Autoevaluare: criterii îndeplinite"
        : row.selfAssessment === "not-met"
          ? "✎ Autoevaluare: de lucrat"
          : "✎ Autoevaluare: nemarcată";
    case "unanswered":
      return "– Fără răspuns";
  }
}

type SessionSummaryProps = {
  rows: SummaryRow[];
  lessonHref: string;
  /** Starts a new session; the caller decides whether to ask for confirmation first. */
  restartControl: ReactNode;
  onOpen: (index: number) => void;
};

export const SessionSummary = forwardRef<HTMLHeadingElement, SessionSummaryProps>(function SessionSummary(
  { rows, lessonHref, restartControl, onOpen },
  headingRef,
) {
  const counts = countSession(rows.map((row) => row.attempt));
  const stats = [
    { label: "Corecte", value: counts.correct },
    { label: "Greșite", value: counts.incorrect },
    { label: "Nerecunoscute automat", value: counts.notRecognized },
    { label: "Autoevaluate", value: counts.selfAssessed },
    { label: "Fără răspuns", value: counts.unanswered },
  ];

  return (
    <section aria-labelledby="sumar-titlu" className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <h2 id="sumar-titlu" ref={headingRef} tabIndex={-1} className="text-2xl font-bold tracking-tight focus:outline-none">
        Rezultatele sesiunii
      </h2>
      <p className="mt-2 leading-relaxed text-ink-body">
        Ai răspuns corect la {counts.correct} din {counts.autoGraded} exerciții verificate automat, la prima
        verificare.
        {counts.correctedLater > 0 &&
          ` Ai corectat ulterior ${counts.correctedLater} ${counts.correctedLater === 1 ? "răspuns" : "răspunsuri"}, după ce ai văzut explicația.`}{" "}
        Rezultatul nu este o notă.
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line p-3">
            <dt className="text-xs text-ink-muted">{stat.label}</dt>
            <dd className="mt-1 text-2xl font-bold">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {rows.map((row, index) => (
          <li key={row.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
            <span className="font-medium">Exercițiul {row.number}</span>
            <span className="flex items-center gap-3 text-sm">
              <span>{rowLabel(row)}</span>
              <button
                type="button"
                onClick={() => onOpen(index)}
                className="rounded-md px-2 py-1 font-semibold text-accent-ink underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent "
              >
                Vezi<span className="sr-only"> exercițiul {row.number}</span>
              </button>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {restartControl}
        <Link
          href={lessonHref}
          className="inline-flex items-center justify-center rounded-xl border border-line-strong px-5 py-3 font-semibold hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Înapoi la lecție
        </Link>
      </div>
    </section>
  );
});
