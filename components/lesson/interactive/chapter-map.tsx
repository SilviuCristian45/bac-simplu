"use client";

import { useState } from "react";
import type { FigureTagKind } from "../label-styles";
import { FigureShell } from "./figure-shell";
import { FigureTag } from "./step-figure";

export type ChapterFact = { text: string; tag: FigureTagKind; source: string };

export type MapChapter = {
  number: number;
  numeral: string;
  /** Only titles that exist in the work (and are named in the lesson). */
  title?: string;
  facts: ChapterFact[];
};

export type ChapterGroupTone = "amber" | "rose" | "sky" | "violet" | "emerald" | "slate";

export type ChapterGroup = {
  id: string;
  title: string;
  /** First and last chapter number, inclusive. */
  range: readonly [number, number];
  tone: ChapterGroupTone;
  /** Titles written by the author are shown in quotation marks; descriptive group names are not. */
  quoted?: boolean;
};

export type ChapterMapIntro = { title: string; summary: string; note?: string; source: string };

const GROUP_STYLES: Record<ChapterGroupTone, { band: string; title: string; selected: string }> = {
  amber: {
    band: "border-amber-300 bg-amber-50/80 dark:border-amber-800 dark:bg-amber-950/30",
    title: "text-amber-900 dark:text-amber-200",
    selected:
      "aria-pressed:border-amber-700 aria-pressed:bg-amber-700 aria-pressed:text-white dark:aria-pressed:border-amber-400 dark:aria-pressed:bg-amber-400 dark:aria-pressed:text-amber-950",
  },
  rose: {
    band: "border-rose-300 bg-rose-50/80 dark:border-rose-800 dark:bg-rose-950/30",
    title: "text-rose-900 dark:text-rose-200",
    selected:
      "aria-pressed:border-rose-700 aria-pressed:bg-rose-700 aria-pressed:text-white dark:aria-pressed:border-rose-400 dark:aria-pressed:bg-rose-400 dark:aria-pressed:text-rose-950",
  },
  sky: {
    band: "border-sky-300 bg-sky-50/80 dark:border-sky-800 dark:bg-sky-950/30",
    title: "text-sky-900 dark:text-sky-200",
    selected:
      "aria-pressed:border-sky-700 aria-pressed:bg-sky-700 aria-pressed:text-white dark:aria-pressed:border-sky-400 dark:aria-pressed:bg-sky-400 dark:aria-pressed:text-sky-950",
  },
  violet: {
    band: "border-violet-300 bg-violet-50/80 dark:border-violet-800 dark:bg-violet-950/30",
    title: "text-violet-900 dark:text-violet-200",
    selected:
      "aria-pressed:border-violet-700 aria-pressed:bg-violet-700 aria-pressed:text-white dark:aria-pressed:border-violet-400 dark:aria-pressed:bg-violet-400 dark:aria-pressed:text-violet-950",
  },
  emerald: {
    band: "border-emerald-300 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/30",
    title: "text-emerald-900 dark:text-emerald-200",
    selected:
      "aria-pressed:border-emerald-700 aria-pressed:bg-emerald-700 aria-pressed:text-white dark:aria-pressed:border-emerald-400 dark:aria-pressed:bg-emerald-400 dark:aria-pressed:text-emerald-950",
  },
  slate: {
    band: "border-slate-300 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/40",
    title: "text-slate-800 dark:text-slate-200",
    selected:
      "aria-pressed:border-slate-700 aria-pressed:bg-slate-700 aria-pressed:text-white dark:aria-pressed:border-slate-300 dark:aria-pressed:bg-slate-300 dark:aria-pressed:text-slate-950",
  },
};

type ChapterMapProps = {
  intro: ChapterMapIntro;
  groups: ChapterGroup[];
  chapters: MapChapter[];
  /** How a group is named in sentences: „partea” (book parts) or „momentul” (moments of the plot). */
  groupNoun: string;
  /** Shown for a chapter the lesson does not discuss, e.g. „Ce se întâmplă aici afli citind romanul.” */
  emptyMessage: string;
  kicker?: string;
};

const quote = (group: ChapterGroup) => (group.quoted ? `„${group.title}”` : group.title);

/** Chapters of a work in groups; selecting a chapter shows what the lesson says about it. */
export function ChapterMap({
  intro,
  groups,
  chapters,
  groupNoun,
  emptyMessage,
  kicker = "Figură interactivă · Structură",
}: ChapterMapProps) {
  const [selected, setSelected] = useState(1);
  const chapter = chapters[selected - 1];
  const group = groups.find((item) => selected >= item.range[0] && selected <= item.range[1]) ?? groups[0];

  return (
    <FigureShell
      kicker={kicker}
      title={intro.title}
      summary={intro.summary}
      note={intro.note}
      stage={
        <div className="flex flex-col gap-2 px-1 pb-4 sm:flex-row sm:flex-wrap sm:px-2">
          {groups.map((item) => {
            const style = GROUP_STYLES[item.tone];
            const items = chapters.filter((ch) => ch.number >= item.range[0] && ch.number <= item.range[1]);
            const span =
              items.length > 1 ? `cap. ${items[0].numeral}–${items[items.length - 1].numeral}` : `cap. ${items[0].numeral}`;
            return (
              <div
                key={item.id}
                className={`rounded-xl border-2 p-2 sm:min-w-32 ${style.band}`}
                style={{ flex: `${items.length} 1 0` }}
                role="group"
                aria-label={`${groupNoun[0].toUpperCase()}${groupNoun.slice(1)} ${quote(item)}, ${span.replace("cap.", "capitolele")}`}
              >
                <p className={`px-1 text-xs font-bold tracking-wide uppercase ${style.title}`}>
                  {quote(item)} <span className="font-semibold normal-case">· {span}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {items.map((ch) => (
                    <button
                      key={ch.number}
                      type="button"
                      aria-pressed={ch.number === selected}
                      aria-label={`Capitolul ${ch.numeral}${ch.title ? `, „${ch.title}”` : ""}${ch.facts.length ? "" : " (nediscutat în lecție)"}`}
                      onClick={() => setSelected(ch.number)}
                      className={`relative flex h-14 min-w-9 flex-1 flex-col items-center justify-center rounded-lg border-2 border-line bg-surface text-xs font-bold text-ink-body transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm ${style.selected}`}
                    >
                      {ch.numeral}
                      <span
                        aria-hidden="true"
                        className={`mt-1 size-1.5 rounded-full ${ch.facts.length ? "bg-current" : "bg-transparent"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      }
      textAlternative={
        <ul className="space-y-2">
          {chapters
            .filter((ch) => ch.facts.length > 0)
            .map((ch) => (
              <li key={ch.number}>
                <span className="font-semibold">
                  Capitolul {ch.numeral}
                  {ch.title ? `, „${ch.title}”` : ""}:
                </span>{" "}
                {ch.facts.map((fact) => fact.text).join(" ")}
              </li>
            ))}
        </ul>
      }
    >
      <p className="text-xs text-ink-muted">
        <span aria-hidden="true">● </span>capitol discutat în lecție
      </p>
      <div aria-live="polite" className="mt-3 rounded-xl border border-line bg-surface-muted p-4">
        <p className="font-semibold text-ink">
          Capitolul {chapter.numeral}
          {chapter.title && <span> – „{chapter.title}”</span>}
          <span className="font-normal text-ink-muted">
            {" "}
            · {groupNoun} {quote(group)}
          </span>
        </p>
        {chapter.facts.length > 0 ? (
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-body">
            {chapter.facts.map((fact) => (
              <li key={fact.text}>
                <FigureTag kind={fact.tag} /> {fact.text} <span className="text-xs text-ink-muted">({fact.source})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-ink-body">{emptyMessage}</p>
        )}
      </div>
      <p className="mt-3 text-xs text-ink-muted">Sursa structurii: {intro.source}</p>
    </FigureShell>
  );
}
