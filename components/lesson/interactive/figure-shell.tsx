"use client";

import { useId, type ReactNode } from "react";

type FigureShellProps = {
  kicker: string;
  title: string;
  /** Always-visible summary: the essential idea, readable without interacting. */
  summary: string;
  note?: string;
  /** Optional visual stage, shown on a tinted band under the caption. */
  stage?: ReactNode;
  /** Optional text version of the whole figure, collapsed by default. */
  textAlternative?: ReactNode;
  children: ReactNode;
};

/** Common frame for every interactive element in a lesson: caption, stage, body, note, text version. */
export function FigureShell({ kicker, title, summary, note, stage, textAlternative, children }: FigureShellProps) {
  const titleId = `${useId()}-titlu`;

  return (
    <figure
      aria-labelledby={titleId}
      className="my-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-slate-900/5 dark:shadow-none"
    >
      <figcaption className="border-b border-line px-4 pt-4 pb-3 sm:px-6">
        <span className="text-xs font-semibold tracking-wide text-accent-ink uppercase">{kicker}</span>
        <span id={titleId} className="mt-1 block text-lg leading-snug font-bold text-ink">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-ink-body">{summary}</span>
      </figcaption>

      {stage && (
        <div className="bg-linear-to-b from-sky-50 to-surface px-2 pt-3 sm:px-4 dark:from-zinc-900 dark:to-zinc-950">{stage}</div>
      )}

      <div className="px-4 py-4 sm:px-6">
        {children}

        {note && <p className="mt-4 text-xs leading-relaxed text-ink-muted">{note}</p>}

        {textAlternative && (
          <details className="group mt-3 rounded-lg border border-line">
            <summary className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-ink-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Varianta text a figurii (toate etapele)
            </summary>
            <div className="px-3 pb-3 text-sm leading-relaxed text-ink-body">{textAlternative}</div>
          </details>
        )}
      </div>
    </figure>
  );
}

/** Shared look of the small buttons used inside figures. */
export const FIGURE_BUTTON = {
  primary:
    "rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-on-accent hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50",
  secondary:
    "rounded-lg border border-line-strong px-3 py-2 text-sm font-semibold text-ink-body hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50",
};
