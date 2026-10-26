"use client";

import { useId, useRef, useState } from "react";
import { FIGURE_BUTTON, FigureShell } from "./figure-shell";
import { FigureTag } from "./step-figure";
import type { QuizContent, QuizItem } from "./types";

type ItemState = { choice?: string; checked: boolean };

function QuizQuestion({
  item,
  index,
  content,
  state,
  onChoose,
  onCheck,
  onRetry,
}: {
  item: QuizItem;
  index: number;
  content: QuizContent;
  state: ItemState;
  onChoose: (choice: string) => void;
  onCheck: () => void;
  onRetry: () => void;
}) {
  const name = `${useId()}-${item.id}`;
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  // The button the reader pressed disappears, so focus moves to what replaced it.
  const check = () => {
    onCheck();
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };
  const retry = () => {
    onRetry();
    requestAnimationFrame(() => fieldsetRef.current?.querySelector("input")?.focus());
  };
  const isCorrect = state.checked && state.choice === item.correct;
  const choices = item.choices ?? content.choices;
  const correctLabel = choices.find((choice) => choice.id === item.correct)?.label;

  return (
    <li className="rounded-xl border border-line bg-surface-muted/60 p-3 sm:p-4">
      <fieldset ref={fieldsetRef}>
        <legend className="w-full">
          <span className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ink-muted">
            Enunțul {index + 1} din {content.items.length}
            {item.tag && <FigureTag kind={item.tag} />}
          </span>
          <span className="mt-1.5 block leading-relaxed font-medium text-ink">{item.prompt}</span>
          {item.attribution && <span className="mt-0.5 block text-sm text-ink-muted">– {item.attribution}</span>}
        </legend>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {choices.map((choice) => {
            const chosen = state.choice === choice.id;
            const showCorrect = state.checked && choice.id === item.correct;
            const showWrong = state.checked && chosen && choice.id !== item.correct;
            return (
              <label
                key={choice.id}
                className={`flex cursor-pointer items-start gap-2.5 rounded-lg border-2 bg-surface px-3 py-2 text-sm leading-snug transition-colors has-[:disabled]:cursor-default has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                  showCorrect
                    ? "border-emerald-600 dark:border-emerald-400"
                    : showWrong
                      ? "border-red-600 dark:border-red-400"
                      : chosen
                        ? "border-accent"
                        : "border-line hover:border-line-strong"
                }`}
              >
                <input
                  type="radio"
                  name={name}
                  value={choice.id}
                  checked={chosen}
                  disabled={state.checked}
                  onChange={() => onChoose(choice.id)}
                  className="mt-0.5 size-4 shrink-0 accent-(--accent)"
                />
                <span className="flex-1 text-ink-body">
                  {choice.label}
                  {showCorrect && <span className="mt-0.5 block text-xs font-semibold text-emerald-800 dark:text-emerald-300">✓ răspunsul potrivit</span>}
                  {showWrong && <span className="mt-0.5 block text-xs font-semibold text-red-800 dark:text-red-300">✗ alegerea ta</span>}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div aria-live="polite">
        {state.checked ? (
          <div
            ref={feedbackRef}
            tabIndex={-1}
            className={`mt-3 rounded-lg border-l-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent px-3 py-2 text-sm leading-relaxed ${
              isCorrect
                ? "border-emerald-600 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950/50 dark:text-emerald-50"
                : "border-amber-600 bg-amber-50 text-amber-950 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-50"
            }`}
          >
            <p className="font-semibold">
              {isCorrect ? "✓ Corect." : `✗ Nu chiar. Răspunsul potrivit: ${correctLabel?.replace(/\.$/, "")}.`}
            </p>
            <p className="mt-1">{item.explanation}</p>
            <p className="mt-1 text-xs opacity-80">Sursa: {item.source}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {!state.checked ? (
          <button type="button" onClick={check} disabled={!state.choice} className={FIGURE_BUTTON.primary}>
            Verifică
          </button>
        ) : (
          !isCorrect && (
            <button type="button" onClick={retry} className={FIGURE_BUTTON.secondary}>
              Încearcă din nou
            </button>
          )
        )}
        {!state.checked && !state.choice && <span className="self-center text-xs text-ink-muted">Alege o variantă.</span>}
      </div>
    </li>
  );
}

/**
 * Short self-check inside a lesson: each statement is classified with one of the shared choices,
 * then the reader gets an explanation whether the answer was right or wrong.
 * It is practice, not grading: answers live in the page and nothing is recorded.
 */
export function ClassifyQuiz({ content, kicker = "Verifică-te" }: { content: QuizContent; kicker?: string }) {
  const [states, setStates] = useState<Record<string, ItemState>>({});
  const stateOf = (id: string): ItemState => states[id] ?? { checked: false };
  const update = (id: string, next: ItemState) => setStates((all) => ({ ...all, [id]: next }));

  const checked = content.items.filter((item) => stateOf(item.id).checked);
  const correct = checked.filter((item) => stateOf(item.id).choice === item.correct);

  return (
    <FigureShell kicker={kicker} title={content.title} summary={content.summary} note={content.note}>
      <p className="text-sm text-ink-muted" aria-live="polite">
        {checked.length === 0
          ? `${content.items.length} enunțuri. Alege o variantă și apasă „Verifică”.`
          : `Ai verificat ${checked.length} din ${content.items.length} enunțuri; ${correct.length} corecte.`}
      </p>
      <ol className="mt-3 space-y-3">
        {content.items.map((item, index) => (
          <QuizQuestion
            key={item.id}
            item={item}
            index={index}
            content={content}
            state={stateOf(item.id)}
            onChoose={(choice) => update(item.id, { choice, checked: false })}
            onCheck={() => update(item.id, { ...stateOf(item.id), checked: true })}
            onRetry={() => update(item.id, { checked: false })}
          />
        ))}
      </ol>
      {checked.length > 0 && (
        <button type="button" onClick={() => setStates({})} className={`mt-4 ${FIGURE_BUTTON.secondary}`}>
          <span aria-hidden="true">↺ </span>Ia-o de la capăt
        </button>
      )}
    </FigureShell>
  );
}
