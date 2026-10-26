"use client";

import { useEffect, useRef, useState, useSyncExternalStore, useTransition } from "react";
import { checkExerciseAnswer } from "@/lib/exercises/actions";
import {
  EMPTY_ENTRY,
  assessSelf,
  changeDraft,
  recordCheck,
  reopen,
  toAnswer,
  toAttempt,
  type SessionEntry,
} from "@/lib/exercises/session-state";
import {
  createSessionStore,
  restoreSession,
  serializeSession,
  sessionStorageKey,
  type RestoredSession,
  type SessionStore,
} from "@/lib/exercises/session-storage";
import type { CheckResult, Difficulty, PublicExercise } from "@/lib/exercises/types";
import { ConfirmReset } from "./confirm-reset";
import { ChoiceInput, ShortAnswerInput, type ChoiceItem } from "./exercise-inputs";
import { FeedbackPanel, SessionSummary, type SummaryRow } from "./exercise-feedback";
import { StorageNotice } from "./storage-notice";

const DIFFICULTY_LABEL: Record<Difficulty, string> = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil" };

const TYPE_LABEL: Record<PublicExercise["type"], string> = {
  "multiple-choice": "Alegere multiplă",
  "true-false": "Adevărat sau fals",
  "short-answer": "Răspuns scurt",
};

const TRUE_FALSE_ITEMS: ChoiceItem[] = [
  { value: "true", label: "Adevărat" },
  { value: "false", label: "Fals" },
];

/** Value of the option the student should see marked as correct, once the answer is checked. */
function revealedCorrectValue(exercise: PublicExercise, result: CheckResult): string | null {
  if (exercise.type === "short-answer") return null;
  if (result.status !== "correct" && result.status !== "incorrect") return null;
  return result.correctOptionId ?? null;
}

// One store per exercise set, shared by remounts of the session in the same tab.
const stores = new Map<string, SessionStore>();

function storeFor(setKey: string): SessionStore {
  let store = stores.get(setKey);
  if (!store) {
    store = createSessionStore(() => window.localStorage, sessionStorageKey(setKey));
    stores.set(setKey, store);
  }
  return store;
}

const subscribeNothing = () => () => {};

type ExerciseSessionProps = {
  setKey: string;
  exercises: PublicExercise[];
  lessonHref: string;
};

/**
 * The saved session lives in localStorage, which only exists in the browser. The static HTML
 * shows a placeholder; the session mounts after hydration, already restored, so there is no
 * mismatch and no flash of an empty session.
 */
export function ExerciseSession(props: ExerciseSessionProps) {
  const isClient = useSyncExternalStore(subscribeNothing, () => true, () => false);
  if (!isClient) {
    return (
      <p aria-busy="true" className="rounded-2xl border border-line bg-surface p-6 text-ink-muted">
        Se încarcă exercițiile…
      </p>
    );
  }
  return <RestoredExerciseSession {...props} />;
}

function RestoredExerciseSession({ setKey, exercises, lessonHref }: ExerciseSessionProps) {
  const store = storeFor(setKey);
  const [initial] = useState<RestoredSession>(() => restoreSession(store.read(), setKey, exercises));
  const [restored, setRestored] = useState<RestoredSession | null>(initial);
  const [index, setIndex] = useState(initial.index);
  const [entries, setEntries] = useState<SessionEntry[]>(initial.entries);
  const [finished, setFinished] = useState(initial.finished);
  // Feedback from the server, by exercise id. Kept in memory only, never saved.
  const [results, setResults] = useState<Record<string, CheckResult>>({});
  const [error, setError] = useState<string | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const [isChecking, startChecking] = useTransition();
  const storageStatus = useSyncExternalStore(store.subscribe, store.getStatus, store.getStatus);

  const exerciseHeadingRef = useRef<HTMLHeadingElement>(null);
  const feedbackHeadingRef = useRef<HTMLHeadingElement>(null);
  const summaryHeadingRef = useRef<HTMLHeadingElement>(null);
  const focusTarget = useRef<"exercise" | "feedback" | "summary" | null>(null);
  const feedbackRequested = useRef(new Set<string>());

  // Move focus after navigation, checking or finishing, so keyboard and screen-reader users follow along.
  useEffect(() => {
    const target = focusTarget.current;
    focusTarget.current = null;
    if (target === "exercise") exerciseHeadingRef.current?.focus();
    if (target === "feedback") feedbackHeadingRef.current?.focus();
    if (target === "summary") summaryHeadingRef.current?.focus();
  });

  // Save after every change. Only the student's answers and the recorded statuses are written.
  useEffect(() => {
    store.write(serializeSession(setKey, exercises, { index, finished, entries }));
  }, [store, setKey, exercises, index, finished, entries]);

  const exercise = exercises[index];
  const entry = entries[index];
  const result = results[exercise.id] ?? null;
  const answer = toAnswer(exercise, entry.draft);
  const checkedCount = entries.filter((item) => item.firstStatus !== null).length;
  const hasProgress = entries.some((item) => item.draft !== null || item.firstStatus !== null);
  const isLast = index === exercises.length - 1;

  // A restored, checked answer has no feedback in memory: ask the server again, for display only.
  // The recorded statuses are not touched, so the score cannot change on reload.
  const needsFeedback = entry.checked && result === null && answer !== null;
  useEffect(() => {
    if (!needsFeedback || !answer || feedbackRequested.current.has(exercise.id)) return;
    feedbackRequested.current.add(exercise.id);
    const id = exercise.id;
    startChecking(async () => {
      try {
        const response = await checkExerciseAnswer(setKey, id, answer);
        if (response.ok) setResults((current) => ({ ...current, [id]: response.result }));
        else setFeedbackError(response.error);
      } catch {
        setFeedbackError("Explicația nu a putut fi încărcată. Verifică conexiunea și încearcă din nou.");
      }
    });
  }, [needsFeedback, answer, exercise.id, setKey]);

  const updateEntry = (position: number, change: (item: SessionEntry) => SessionEntry) =>
    setEntries((current) => current.map((item, i) => (i === position ? change(item) : item)));

  const goTo = (position: number) => {
    setError(null);
    setFeedbackError(null);
    setFinished(false);
    setIndex(position);
    focusTarget.current = "exercise";
  };

  const check = () => {
    if (!answer) return;
    setError(null);
    const position = index;
    const id = exercise.id;
    // The feedback describes this draft, so it is restored if the input changed during the check.
    const checkedDraft = entry.draft;
    startChecking(async () => {
      try {
        const response = await checkExerciseAnswer(setKey, id, answer);
        if (response.ok) {
          setResults((current) => ({ ...current, [id]: response.result }));
          updateEntry(position, (item) => recordCheck(item, checkedDraft, response.result.status));
          focusTarget.current = "feedback";
        } else {
          setError(response.error);
        }
      } catch {
        setError("Răspunsul nu a putut fi verificat. Verifică conexiunea și încearcă din nou.");
      }
    });
  };

  const retryFeedback = () => {
    feedbackRequested.current.delete(exercise.id);
    // The re-render clears the error, and the effect above asks the server again.
    setFeedbackError(null);
  };

  const startNewSession = () => {
    store.clear();
    feedbackRequested.current.clear();
    setResults({});
    setEntries(exercises.map(() => EMPTY_ENTRY));
    setRestored(null);
    goTo(0);
  };

  const finish = () => {
    setError(null);
    setFinished(true);
    focusTarget.current = "summary";
  };

  const notice = <StorageNotice status={storageStatus} restored={restored} checkedCount={checkedCount} />;

  if (finished) {
    const rows: SummaryRow[] = entries.map((item, i) => ({
      id: exercises[i].id,
      number: i + 1,
      attempt: toAttempt(item),
      selfAssessment: item.selfAssessment,
    }));
    return (
      <div className="space-y-4">
        {notice}
        <SessionSummary
          ref={summaryHeadingRef}
          rows={rows}
          lessonHref={lessonHref}
          onOpen={goTo}
          restartControl={
            <ConfirmReset label="Reia exercițiile" needsConfirmation={hasProgress} onConfirm={startNewSession} variant="primary" />
          }
        />
      </div>
    );
  }

  const inputId = `raspuns-${exercise.id}`;
  // Locked after checking, and while the server checks, so the feedback always matches the shown answer.
  const locked = entry.checked || isChecking;

  return (
    <div>
      <div className="mb-6 space-y-3">
        {notice}
        {hasProgress && (
          <ConfirmReset label="Începe o sesiune nouă" needsConfirmation onConfirm={startNewSession} />
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <p className="font-semibold text-ink" aria-live="polite">
          Exercițiul {index + 1} din {exercises.length}
        </p>
        <p className="text-ink-muted">
          Verificate: {checkedCount} din {exercises.length}
        </p>
      </div>
      <progress
        value={index + 1}
        max={exercises.length}
        aria-label={`Exercițiul ${index + 1} din ${exercises.length}`}
        className="mt-2 h-2 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-blue-600 [&::-webkit-progress-bar]:bg-zinc-200 [&::-webkit-progress-value]:bg-blue-600 dark:[&::-webkit-progress-bar]:bg-zinc-800"
      />

      <article
        aria-labelledby="exercitiu-titlu"
        className="mt-6 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-8"
      >
        <p className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-ink-body">
            {TYPE_LABEL[exercise.type]}
          </span>
          <span className="rounded-full bg-surface-muted px-2.5 py-1 text-ink-body">
            Dificultate: {DIFFICULTY_LABEL[exercise.difficulty]}
          </span>
        </p>

        <h2
          id="exercitiu-titlu"
          ref={exerciseHeadingRef}
          tabIndex={-1}
          className="mt-4 text-lg leading-relaxed font-semibold text-ink focus:outline-none sm:text-xl"
        >
          <span className="sr-only">Exercițiul {index + 1}. </span>
          {exercise.prompt}
        </h2>

        {exercise.type === "true-false" && (
          <p className="mt-4 rounded-xl border-l-4 border-zinc-400 bg-surface-muted p-4 text-lg leading-relaxed dark:border-zinc-500">
            „{exercise.statement}”
          </p>
        )}

        {exercise.type === "short-answer" ? (
          <ShortAnswerInput
            key={exercise.id}
            id={inputId}
            value={entry.draft?.kind === "text" ? entry.draft.value : ""}
            maxLength={exercise.maxLength}
            locked={locked}
            onChange={(value) => updateEntry(index, (item) => changeDraft(item, { kind: "text", value }))}
            gradingNote={
              exercise.gradingMode === "keywords"
                ? "Verificarea automată caută termenii-cheie ai răspunsului corect (fără să țină cont de diacritice sau de majuscule). Un răspuns corect formulat altfel poate să nu fie recunoscut, iar verificarea nu înțelege negațiile."
                : "Acest exercițiu nu este corectat automat. După ce trimiți răspunsul, vei primi criteriile de evaluare și un exemplu, ca să-ți evaluezi singur răspunsul."
            }
          />
        ) : (
          <ChoiceInput
            key={exercise.id}
            name={inputId}
            items={
              exercise.type === "multiple-choice"
                ? exercise.options.map((option) => ({ value: option.id, label: option.text }))
                : TRUE_FALSE_ITEMS
            }
            selected={entry.draft?.kind === "choice" ? entry.draft.value : null}
            // Until the feedback is back, a checked answer is locked but not annotated.
            disabled={locked}
            onSelect={(value) => updateEntry(index, (item) => changeDraft(item, { kind: "choice", value }))}
            reveal={entry.checked && result ? { correctValue: revealedCorrectValue(exercise, result) } : null}
          />
        )}

        {error && (
          <p role="alert" className="mt-4 rounded-lg border-l-4 border-red-600 bg-red-50 p-3 text-red-900 dark:bg-red-950/50 dark:text-red-100">
            {error}
          </p>
        )}

        {entry.checked ? (
          <>
            {result ? (
              <FeedbackPanel
                ref={feedbackHeadingRef}
                result={result}
                lessonHref={lessonHref}
                lessonSection={exercise.lessonSection}
                selfAssessment={entry.selfAssessment}
                onSelfAssess={(value) => updateEntry(index, (item) => assessSelf(item, value))}
              />
            ) : feedbackError ? (
              <div role="alert" className="mt-6 rounded-xl border-l-4 border-amber-600 bg-amber-50 p-4 text-amber-950 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-50">
                <p>Răspunsul tău a fost verificat anterior. {feedbackError}</p>
                <button
                  type="button"
                  onClick={retryFeedback}
                  className="mt-2 rounded-lg border border-current px-3 py-1.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Încarcă din nou explicația
                </button>
              </div>
            ) : (
              <p aria-live="polite" className="mt-6 rounded-xl bg-surface-muted p-4 text-ink-muted">
                Răspuns verificat anterior. Se încarcă explicația…
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                updateEntry(index, reopen);
                setResults((current) => {
                  const next = { ...current };
                  delete next[exercise.id];
                  return next;
                });
                feedbackRequested.current.delete(exercise.id);
                setFeedbackError(null);
                focusTarget.current = "exercise";
              }}
              className="mt-4 rounded-lg px-3 py-2 text-sm font-semibold text-accent-ink underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Modifică răspunsul
            </button>
            {exercise.type !== "short-answer" || exercise.gradingMode === "keywords" ? (
              <p className="mt-1 px-3 text-xs text-ink-muted">
                Poți încerca din nou, dar în rezultatele sesiunii contează primul răspuns verificat.
              </p>
            ) : null}
          </>
        ) : (
          <div className="mt-6">
            <button
              type="button"
              onClick={check}
              disabled={!answer || isChecking}
              aria-describedby={!answer ? `${inputId}-indiciu` : undefined}
              className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-700 sm:w-auto dark:disabled:bg-zinc-700 dark:disabled:text-zinc-200"
            >
              {isChecking ? "Se verifică…" : "Verifică răspunsul"}
            </button>
            {!answer && (
              <p id={`${inputId}-indiciu`} className="mt-2 text-sm text-ink-muted">
                {exercise.type === "short-answer" ? "Scrie un răspuns pentru a-l putea verifica." : "Alege o variantă pentru a o putea verifica."}
              </p>
            )}
          </div>
        )}
      </article>

      <nav aria-label="Navigare între exerciții" className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="rounded-xl border border-line-strong px-4 py-2.5 font-semibold hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span aria-hidden="true">← </span>Anterior
        </button>
        {isLast ? (
          <button
            type="button"
            onClick={finish}
            className="rounded-xl bg-zinc-900 px-4 py-2.5 font-semibold text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Vezi rezultatele
          </button>
        ) : (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="rounded-xl border border-line-strong px-4 py-2.5 font-semibold hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Următorul<span aria-hidden="true"> →</span>
          </button>
        )}
      </nav>
    </div>
  );
}
