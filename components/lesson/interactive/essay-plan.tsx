"use client";

import { useState } from "react";
import { Appear } from "./appear";
import { FIGURE_BUTTON, FigureShell } from "./figure-shell";
import { FigureTag } from "./step-figure";
import { slugifyHeading } from "@/lib/content/headings";
import type { EssayPlan, EssayPlanIntro, PlanBlock } from "./types";

const REPER_STYLES = [
  "border-blue-500 dark:border-blue-400",
  "border-violet-500 dark:border-violet-400",
  "border-teal-500 dark:border-teal-400",
];

function rotate<T>(items: T[], by: number): T[] {
  const shift = by % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
}

/** Essay plans as blocks; the middle (the repere) can be reordered, as the barem allows. */
export function EssayPlanExplorer({ plans: essayPlans, intro: planIntro }: { plans: EssayPlan[]; intro: EssayPlanIntro }) {
  const [planId, setPlanId] = useState(essayPlans[0].id);
  const [rotation, setRotation] = useState(0);
  const plan = essayPlans.find((item) => item.id === planId) ?? essayPlans[0];

  const frame = plan.blocks.filter((block) => !block.reper);
  const repere = plan.blocks.filter((block) => block.reper);
  const ordered: PlanBlock[] = [frame[0], ...rotate(repere, rotation), frame[1]];
  const colourOf = (block: PlanBlock) => REPER_STYLES[repere.indexOf(block)] ?? "border-line-strong";

  return (
    <FigureShell kicker="Figură interactivă · Plan de eseu" title={planIntro.title} summary={planIntro.summary} note={planIntro.note}>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Tipul de cerință">
        {essayPlans.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === plan.id}
            onClick={() => {
              setPlanId(item.id);
              setRotation(0);
            }}
            className="rounded-full border-2 border-line-strong px-3 py-1.5 text-sm font-semibold text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-ink"
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <FigureTag kind="recomandare" /> Lecția, {plan.section}
      </p>

      <ol className="mt-3 space-y-2" aria-live="polite">
        {ordered.map((block, index) => (
          <li key={`${plan.id}-${block.id}`}>
            <Appear>
              <div className={`rounded-xl border border-l-4 border-line bg-surface p-3 ${colourOf(block)}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="font-semibold text-ink">
                    {index + 1}. {block.title}
                  </p>
                  <p className="text-xs font-semibold text-ink-muted">{block.reper ?? "Redactare: părțile componente"}</p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-body">{block.text}</p>
                {block.see.length > 0 && (
                  <p className="mt-1.5 text-xs text-ink-muted">
                    Recitește:{" "}
                    {block.see.map((heading, seeIndex) => (
                      <span key={heading}>
                        {seeIndex > 0 && ", "}
                        <a
                          href={`#${slugifyHeading(heading)}`}
                          className="font-medium text-accent-ink underline underline-offset-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                          {heading.split(" ")[0].replace(/\.$/, "")}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </Appear>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setRotation((value) => value + 1)} className={FIGURE_BUTTON.secondary}>
          <span aria-hidden="true">⇅ </span>Altă ordine a reperelor
        </button>
        <p className="text-xs text-ink-muted">
          {rotation % repere.length === 0 ? "Ordinea din lecție." : "Altă ordine posibilă: introducerea și încheierea rămân la locul lor."}
        </p>
      </div>
    </FigureShell>
  );
}
