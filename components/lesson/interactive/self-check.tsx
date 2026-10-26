"use client";

import { useId, useState } from "react";
import { FIGURE_BUTTON, FigureShell } from "./figure-shell";
import type { ChecklistGroup } from "./types";

const MIN_WORDS = 400;

/** Approximate count: sequences of letters or digits; a hyphenated form such as „s-a” counts once. */
function countWords(text: string): number {
  return text.match(/[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

function WordCounter() {
  const id = useId();
  const [text, setText] = useState("");
  const words = countWords(text);

  return (
    <div className="mt-6 rounded-xl border border-line bg-surface-muted p-4">
      <label htmlFor={id} className="font-semibold text-ink">
        Numără cuvintele eseului tău
      </label>
      <p className="mt-1 text-xs leading-relaxed text-ink-muted">
        Lipește textul aici. Rămâne doar în această pagină: nu este trimis nicăieri și nu este salvat. Numărătoarea este aproximativă.
      </p>
      <textarea
        id={id}
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={5}
        className="mt-2 w-full rounded-lg border border-line-strong bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
        placeholder="Textul eseului…"
      />
      <p className="mt-2 text-sm font-semibold text-ink" aria-live="polite">
        {words === 0
          ? "0 cuvinte."
          : words >= MIN_WORDS
            ? `✓ ${words} cuvinte – ai atins minimum ${MIN_WORDS}.`
            : `${words} cuvinte – mai ai nevoie de aproximativ ${MIN_WORDS - words} până la minimum ${MIN_WORDS}.`}
      </p>
    </div>
  );
}

type TaskOption = { id: string; label: string };

/**
 * Self-assessment lists as checkboxes, with progress. Nothing is stored.
 * Groups whose id matches a task are shown for that task; the group "redactare" is always shown.
 */
export function SelfCheck({ groups: checklistGroups, tasks }: { groups: ChecklistGroup[]; tasks: TaskOption[] }) {
  const [task, setTask] = useState(tasks[0].id);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const groups = checklistGroups.filter((group) => group.id === task || group.id === "redactare");
  const keys = groups.flatMap((group) => group.items.map((item) => `${group.id}:${item}`));
  const done = keys.filter((key) => checked.has(key)).length;

  const toggle = (key: string) =>
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <FigureShell
      kicker="Autoevaluare"
      title="Lista de verificare după ce scrii eseul"
      summary="Alege cerința la care ai lucrat și bifează ce ai acoperit. Lista te ajută să verifici reperele din barem, dar nu înlocuiește evaluarea unui profesor și nu îți spune ce notă ai lua."
      note="Bifele nu sunt salvate: dispar când părăsești sau reîncarci pagina."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Cerința la care ai lucrat">
        {tasks.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={task === id}
            onClick={() => setTask(id)}
            className="rounded-full border-2 border-line-strong px-3 py-1.5 text-sm font-semibold text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-ink"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4" aria-live="polite">
        <p className="text-sm font-semibold text-ink">
          Ai bifat {done} din {keys.length}
        </p>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-muted ring-1 ring-line" aria-hidden="true">
          <div
            className="h-full rounded-full bg-emerald-600 transition-[width] duration-300 motion-reduce:transition-none dark:bg-emerald-500"
            style={{ width: `${(done / keys.length) * 100}%` }}
          />
        </div>
      </div>

      {groups.map((group) => (
        <fieldset key={group.id} className="mt-5">
          <legend className="font-semibold text-ink">{group.title}</legend>
          <ul className="mt-2 space-y-1.5">
            {group.items.map((item) => {
              const key = `${group.id}:${item}`;
              return (
                <li key={key}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 text-ink-body hover:bg-surface-muted has-[:checked]:text-ink has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent">
                    <input
                      type="checkbox"
                      checked={checked.has(key)}
                      onChange={() => toggle(key)}
                      className="mt-1 size-4 shrink-0 accent-emerald-600"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      ))}

      {checked.size > 0 && (
        <button type="button" onClick={() => setChecked(new Set())} className={`mt-4 ${FIGURE_BUTTON.secondary}`}>
          <span aria-hidden="true">↺ </span>Debifează tot
        </button>
      )}

      <WordCounter />
    </FigureShell>
  );
}
