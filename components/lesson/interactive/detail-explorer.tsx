"use client";

import { useState } from "react";
import type { FigureTagKind } from "../label-styles";
import { Appear } from "./appear";
import { FigureShell } from "./figure-shell";
import { FigureTag } from "./step-figure";

/** One labelled statement in the panel of an item, optionally marked as fact, interpretation, etc. */
export type DetailField = { label: string; text: string; tag?: FigureTagKind };

export type DetailItem = {
  id: string;
  /** Short text of the button. */
  label: string;
  /** Items with the same group are shown together, under the group name. */
  group?: string;
  fields: DetailField[];
  /** Lesson section or text passage supporting the item, e.g. "Lecția, 5.2; basmul, probele lui Roș". */
  source: string;
};

export type DetailExplorerContent = {
  title: string;
  summary: string;
  note?: string;
  /** Instruction shown above the buttons, e.g. „Alege o probă”. */
  prompt: string;
};

/**
 * Pick one item from a list (a trial, an aspect, a formula…) and read its fields in a panel.
 * Nothing is stored. The text version at the bottom lists every item, so the figure is also readable without interacting.
 */
export function DetailExplorer({
  content,
  items,
  kicker = "Figură interactivă",
}: {
  content: DetailExplorerContent;
  items: DetailItem[];
  kicker?: string;
}) {
  const [selectedId, setSelectedId] = useState(items[0].id);
  const selected = items.find((item) => item.id === selectedId) ?? items[0];
  const groups = [...new Set(items.map((item) => item.group ?? ""))];

  return (
    <FigureShell
      kicker={kicker}
      title={content.title}
      summary={content.summary}
      note={content.note}
      textAlternative={
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <p className="font-semibold">
                {item.group ? `${item.group}: ` : ""}
                {item.label}
              </p>
              <ul className="mt-1 space-y-1">
                {item.fields.map((field) => (
                  <li key={field.label}>
                    <span className="font-semibold">{field.label}:</span> {field.text}
                  </li>
                ))}
              </ul>
              <p className="mt-0.5 text-xs text-ink-muted">Sursa: {item.source}</p>
            </li>
          ))}
        </ul>
      }
    >
      <p className="text-sm font-semibold text-ink-muted">{content.prompt}</p>
      <div className="mt-2 space-y-3">
        {groups.map((group) => (
          <div key={group || "toate"} role="group" aria-label={group || content.prompt}>
            {group && <p className="mb-1.5 text-xs font-bold tracking-wide text-ink-muted uppercase">{group}</p>}
            <div className="flex flex-wrap gap-2">
              {items
                .filter((item) => (item.group ?? "") === group)
                .map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={item.id === selected.id}
                    onClick={() => setSelectedId(item.id)}
                    className="rounded-full border-2 border-line-strong px-3 py-1.5 text-left text-sm font-semibold text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-ink"
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-4 rounded-xl border border-line bg-surface-muted p-4">
        <Appear key={selected.id}>
          <p className="font-semibold text-ink">
            {selected.label}
            {selected.group && <span className="font-normal text-ink-muted"> · {selected.group}</span>}
          </p>
          <dl className="mt-2 space-y-2 text-sm leading-relaxed text-ink-body">
            {selected.fields.map((field) => (
              <div key={field.label}>
                <dt className="flex flex-wrap items-center gap-2 font-semibold text-ink">
                  {field.label}
                  {field.tag && <FigureTag kind={field.tag} />}
                </dt>
                <dd className="mt-0.5">{field.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-ink-muted">Sursa: {selected.source}</p>
        </Appear>
      </div>
    </FigureShell>
  );
}
