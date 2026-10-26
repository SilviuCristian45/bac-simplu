"use client";

import { StepFigure } from "@/components/lesson/interactive/step-figure";
import { momenteFigure } from "@/content/romana/opere/povestea-lui-harap-alb-interactiv";

const MOMENTS = [
  { name: "Expozițiunea", hint: "doi frați, două țări" },
  { name: "Intriga", hint: "scrisoarea lui Verde-împărat" },
  { name: "Desfășurarea acțiunii", hint: "Spânul, probele, drumul" },
  { name: "Punctul culminant", hint: "confruntarea de la curte" },
  { name: "Deznodământul", hint: "Spânul pedepsit, învierea, nunta" },
];

/** Five rows, one per moment: the current one is highlighted, the earlier ones are filled, the later ones are dashed. */
function MomentsVisual({ step }: { step: number }) {
  return (
    <div className="px-2 pb-4 sm:px-4" aria-hidden="true">
      <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 motion-reduce:transition-none"
          style={{ width: `${((step + 1) / MOMENTS.length) * 100}%` }}
        />
      </div>
      <ol className="mt-3 grid gap-1.5">
        {MOMENTS.map((moment, index) => (
          <li
            key={moment.name}
            className={`flex flex-wrap items-baseline justify-between gap-x-3 rounded-lg border-2 px-3 py-2 transition-colors duration-300 motion-reduce:transition-none ${
              index === step
                ? "border-accent bg-accent-soft text-ink"
                : index < step
                  ? "border-line bg-surface text-ink-body"
                  : "border-dashed border-line-strong bg-transparent text-ink-muted"
            }`}
          >
            <span className="text-sm font-semibold sm:text-base">
              {index + 1}. {moment.name}
            </span>
            <span className="text-xs sm:text-sm">{moment.hint}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MomenteleSubiectuluiHarap() {
  return (
    <StepFigure
      content={momenteFigure}
      kicker="Figură interactivă · Momentele subiectului"
      renderVisual={(step) => <MomentsVisual step={step} />}
    />
  );
}
