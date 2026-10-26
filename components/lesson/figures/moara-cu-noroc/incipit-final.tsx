"use client";

import { Appear } from "@/components/lesson/interactive/appear";
import { StepFigure } from "@/components/lesson/interactive/step-figure";
import { incipitFinalFigure, mirrorPairs } from "@/content/romana/opere/moara-cu-noroc-interactiv";

function PairsVisual({ step }: { step: number }) {
  const shown = mirrorPairs.filter((pair) => pair.step <= step);
  const circular = step >= mirrorPairs.length;

  return (
    <div className="px-1 pb-4 sm:px-2">
      <div className="hidden grid-cols-2 gap-3 px-1 pb-2 text-xs font-bold tracking-wide text-ink-muted uppercase sm:grid">
        <span>Incipit</span>
        <span>Final</span>
      </div>
      <ol className="space-y-3">
        {shown.map((pair) => (
          <li key={pair.id}>
            <Appear>
              <div className={`rounded-xl border bg-surface p-3 transition-colors ${circular ? "border-violet-400 dark:border-violet-600" : "border-line"}`}>
                <p className="text-sm font-semibold text-ink">{pair.theme}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 sm:gap-3">
                  <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm leading-relaxed text-emerald-950 dark:bg-emerald-950/50 dark:text-emerald-50">
                    <span className="mb-0.5 block text-xs font-bold uppercase sm:hidden">Incipit</span>
                    {pair.incipit}
                  </p>
                  <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm leading-relaxed text-rose-950 dark:bg-rose-950/50 dark:text-rose-50">
                    <span className="mb-0.5 block text-xs font-bold uppercase sm:hidden">Final</span>
                    {pair.final}
                  </p>
                </div>
              </div>
            </Appear>
          </li>
        ))}
      </ol>
      {circular && (
        <Appear>
          <p className="mt-3 flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-950 dark:bg-violet-950/50 dark:text-violet-50">
            <span aria-hidden="true" className="text-lg">↻</span>
            Începutul și sfârșitul se răspund: o structură circulară.
          </p>
        </Appear>
      )}
    </div>
  );
}

export function IncipitSiFinal() {
  return (
    <StepFigure
      content={incipitFinalFigure}
      kicker="Figură interactivă · Incipit și final"
      renderVisual={(step) => <PairsVisual step={step} />}
    />
  );
}
