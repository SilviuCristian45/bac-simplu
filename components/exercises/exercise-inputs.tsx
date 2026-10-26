"use client";

export type ChoiceItem = { value: string; label: string };

type ChoiceInputProps = {
  name: string;
  items: ChoiceItem[];
  selected: string | null;
  onSelect: (value: string) => void;
  /** Set after checking: the input is locked and the options are annotated. */
  reveal: { correctValue: string | null } | null;
  /** Locks the options without annotating them (e.g. while the answer is being checked). */
  disabled?: boolean;
};

export function ChoiceInput({ name, items, selected, onSelect, reveal, disabled = false }: ChoiceInputProps) {
  const locked = reveal !== null;

  return (
    <fieldset className="mt-6" disabled={locked || disabled} aria-busy={disabled || undefined}>
      <legend className="sr-only">Alege un răspuns</legend>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const isSelected = selected === item.value;
          const isCorrect = reveal?.correctValue === item.value;
          const state = !locked
            ? isSelected
              ? "border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/50"
              : "border-line-strong bg-surface hover:border-zinc-400 dark:hover:border-zinc-500"
            : isCorrect
              ? "border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950/50"
              : isSelected
                ? "border-red-600 bg-red-50 dark:border-red-400 dark:bg-red-950/50"
                : "border-line bg-surface opacity-80";

          return (
            <li key={item.value}>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-600 has-[:disabled]:cursor-default ${state}`}
              >
                <input
                  type="radio"
                  name={name}
                  value={item.value}
                  checked={isSelected}
                  onChange={() => onSelect(item.value)}
                  className="mt-1 size-4 shrink-0 accent-blue-600"
                />
                <span className="flex-1 leading-relaxed">
                  <span className="sr-only">Varianta {index + 1}: </span>
                  {item.label}
                  {locked && (isCorrect || isSelected) && (
                    <span className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
                      {isSelected && (
                        <span className="text-ink-body">Răspunsul tău</span>
                      )}
                      {isCorrect ? (
                        <span className="text-emerald-800 dark:text-emerald-300">
                          <span aria-hidden="true">✓ </span>Răspunsul corect
                        </span>
                      ) : (
                        <span className="text-red-800 dark:text-red-300">
                          <span aria-hidden="true">✗ </span>Greșit
                        </span>
                      )}
                    </span>
                  )}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

type ShortAnswerInputProps = {
  id: string;
  value: string;
  maxLength: number;
  locked: boolean;
  onChange: (value: string) => void;
  gradingNote: string;
};

export function ShortAnswerInput({ id, value, maxLength, locked, onChange, gradingNote }: ShortAnswerInputProps) {
  const noteId = `${id}-nota`;
  const counterId = `${id}-contor`;

  return (
    <div className="mt-6">
      <label htmlFor={id} className="block font-semibold text-ink">
        Răspunsul tău
      </label>
      <p id={noteId} className="mt-1 text-sm leading-relaxed text-ink-muted">
        {gradingNote}
      </p>
      <textarea
        id={id}
        value={value}
        maxLength={maxLength}
        readOnly={locked}
        aria-describedby={`${noteId} ${counterId}`}
        onChange={(event) => onChange(event.target.value)}
        rows={maxLength > 300 ? 6 : 2}
        className="mt-3 w-full rounded-xl border-2 border-line-strong bg-surface p-3 leading-relaxed text-ink focus-visible:border-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent read-only:bg-zinc-100 read-only:text-zinc-700 dark:read-only:bg-zinc-800 dark:read-only:text-zinc-300"
      />
      <p id={counterId} className="mt-1 text-right text-xs text-ink-muted">
        {value.length} / {maxLength} caractere
      </p>
    </div>
  );
}
