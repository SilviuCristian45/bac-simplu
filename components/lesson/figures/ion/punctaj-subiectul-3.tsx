"use client";

import { useState } from "react";
import { FigureShell } from "@/components/lesson/interactive/figure-shell";
import { FigureTag } from "@/components/lesson/interactive/step-figure";
import { scoreTasks, type ScoreBlock } from "@/content/romana/opere/ion-interactiv";

// One colour per reper; the redaction block is neutral. Labels always accompany the colours.
const BLOCK_STYLES = [
  { cell: "bg-blue-600 dark:bg-blue-500", soft: "bg-blue-200 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-300" },
  { cell: "bg-violet-600 dark:bg-violet-500", soft: "bg-violet-200 dark:bg-violet-900", text: "text-violet-800 dark:text-violet-300" },
  { cell: "bg-teal-600 dark:bg-teal-500", soft: "bg-teal-200 dark:bg-teal-900", text: "text-teal-800 dark:text-teal-300" },
  { cell: "bg-slate-600 dark:bg-slate-400", soft: "bg-slate-300 dark:bg-slate-700", text: "text-slate-700 dark:text-slate-300" },
];

function PointsBar({ blocks, selected }: { blocks: ScoreBlock[]; selected: string }) {
  return (
    <div className="flex gap-1.5 sm:gap-2" aria-hidden="true">
      {blocks.map((block, blockIndex) => {
        const style = BLOCK_STYLES[blockIndex];
        const active = block.id === selected;
        return (
          <div key={block.id} className="min-w-0" style={{ flex: `${block.points} 1 0` }}>
            <div className="flex h-9 gap-0.5 sm:h-11">
              {block.parts.map((part, partIndex) => (
                <div key={partIndex} className="flex min-w-0 gap-px" style={{ flex: `${part.points} 1 0` }}>
                  {Array.from({ length: part.points }, (_, cell) => (
                    <span
                      key={cell}
                      className={`min-w-0 flex-1 rounded-[3px] transition-[background-color,transform] duration-300 motion-reduce:transition-none ${
                        active ? `${style.cell} scale-y-100` : `${style.soft} scale-y-75`
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className={`mt-1 truncate text-center text-[0.7rem] font-semibold sm:text-xs ${style.text}`}>{block.points} p</p>
          </div>
        );
      })}
    </div>
  );
}

/** Explorer for the 30 points of Subiectul al III-lea, built only from the barem lines quoted in the lesson. */
export function PunctajSubiectulIII() {
  const [taskId, setTaskId] = useState(scoreTasks[0].id);
  const [blockId, setBlockId] = useState(scoreTasks[0].repere[0].id);
  const task = scoreTasks.find((item) => item.id === taskId) ?? scoreTasks[0];
  const block = task.repere.find((item) => item.id === blockId) ?? task.repere[0];
  const blockIndex = task.repere.indexOf(block);

  return (
    <FigureShell
      kicker="Figură interactivă · Baremul"
      title="Cum se împart cele 30 de puncte"
      summary="Eseul de la Subiectul al III-lea are 30 de puncte: 18 pentru conținut (trei repere a câte 6 puncte) și 12 pentru redactare. Fiecare pătrățel de mai jos este un punct."
      note="Punctajele sunt cele din baremele citate în lecție (secțiunile 1, 3.1, 4.1, 5.1, 6.1 și 7.1). Pentru cerința despre personaj, reperele vin din Modelul 2026, unde cerința a vizat alt autor."
      stage={
        <div className="px-1 pb-4 sm:px-2">
          <PointsBar blocks={task.repere} selected={block.id} />
        </div>
      }
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Tipul de cerință">
        {scoreTasks.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === task.id}
            onClick={() => {
              setTaskId(item.id);
              setBlockId(item.repere[0].id);
            }}
            className="rounded-full border-2 border-line-strong px-3 py-1.5 text-sm font-semibold text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-ink"
          >
            {item.label}
          </button>
        ))}
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2" aria-label="Părțile punctajului">
        {task.repere.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={item.id === block.id}
              onClick={() => setBlockId(item.id)}
              className="flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5 text-left text-sm hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:ring-2 aria-pressed:ring-accent/30"
            >
              <span aria-hidden="true" className={`size-3.5 shrink-0 rounded-sm ${BLOCK_STYLES[index].cell}`} />
              <span className="flex-1 font-semibold text-ink">
                {item.id === "redactare" ? item.title : `Reperul ${index + 1}: ${item.title}`}
              </span>
              <span className="font-bold text-ink-body">{item.points} p</span>
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="mt-4 rounded-xl border border-line bg-surface-muted p-4">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <FigureTag kind="oficial" />
          <span className="text-ink-muted">{block.id === "redactare" ? "Subiect și barem, Bacalaureat 2026, Varianta 4, p. 2." : task.source}</span>
        </p>
        <p className={`mt-2 font-semibold ${BLOCK_STYLES[blockIndex].text}`}>
          {block.title} – {block.points} puncte
        </p>
        {block.quote && <p className="mt-1 text-sm leading-relaxed text-ink-body">Reperul din barem: „{block.quote}”.</p>}
        <ul className="mt-2 space-y-1 text-sm text-ink-body">
          {block.parts.map((part) => (
            <li key={part.label} className="flex gap-3">
              <span className="w-10 shrink-0 font-bold text-ink tabular-nums">{part.points} p</span>
              <span>{part.label}</span>
            </li>
          ))}
        </ul>
        {block.note && <p className="mt-2 text-sm leading-relaxed text-ink-body">{block.note}</p>}
        <p className="mt-2 text-xs text-ink-muted">În lecție: secțiunea {block.section}.</p>
      </div>
    </FigureShell>
  );
}
