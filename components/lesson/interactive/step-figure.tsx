"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { FIGURE_TAGS, type FigureTagKind } from "../label-styles";
import { FIGURE_BUTTON, FigureShell } from "./figure-shell";
import type { FigureContent } from "./types";

export function FigureTag({ kind }: { kind: FigureTagKind }) {
  const tag = FIGURE_TAGS[kind];
  return (
    <span className={`inline-block rounded-md px-1.5 py-0.5 text-xs leading-snug font-semibold ${tag.className}`}>
      {tag.label}
    </span>
  );
}

/** Fixed-ratio stage for an illustration: an SVG layer plus HTML labels that stay readable on phones. */
export function FigureCanvas({ ratio, children }: { ratio: string; children: ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
}

const LABEL_ANCHOR = { start: "", center: "-translate-x-1/2", end: "-translate-x-full" } as const;

/**
 * HTML label positioned in percentages of the canvas. It is centred on the point by default;
 * "start" and "end" anchor its left or right edge there instead, so a label near the border stays inside.
 */
export function CanvasLabel({
  x,
  y,
  visible = true,
  tone = "neutral",
  align = "center",
  className = "",
  children,
}: {
  x: number;
  y: number;
  visible?: boolean;
  tone?: "neutral" | "accent" | "warning" | "interpretation";
  align?: keyof typeof LABEL_ANCHOR;
  /** Extra utility classes, for example to hide the label on narrow screens. */
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    neutral: "bg-surface/95 text-ink ring-line-strong",
    accent: "bg-accent text-on-accent ring-blue-700 dark:ring-blue-300",
    warning: "bg-red-50 text-red-900 ring-red-300 dark:bg-red-950 dark:text-red-100 dark:ring-red-700",
    interpretation: "bg-violet-50 text-violet-900 ring-violet-300 dark:bg-violet-950 dark:text-violet-100 dark:ring-violet-700",
  };
  const style: CSSProperties = { left: `${x}%`, top: `${y}%` };
  return (
    <span
      aria-hidden="true"
      style={style}
      className={`pointer-events-none absolute ${LABEL_ANCHOR[align]} -translate-y-1/2 rounded-md px-1.5 py-0.5 text-center text-[0.65rem] leading-tight font-semibold whitespace-nowrap shadow-sm ring-1 sm:text-xs ${tones[tone]} transition-opacity duration-500 motion-reduce:transition-none ${visible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </span>
  );
}

type StepFigureProps = {
  content: FigureContent;
  /** Renders the illustration for the current step (0-based). */
  renderVisual: (step: number) => ReactNode;
  /** Optional extra content under the step text (e.g. a checklist). */
  renderDetails?: (step: number) => ReactNode;
  kicker?: string;
};

/**
 * Generic step-by-step lesson figure. No autoplay: the reader moves through the steps.
 * Transitions use motion-reduce fallbacks, and every step has a text equivalent.
 */
export function StepFigure({ content, renderVisual, renderDetails, kicker = "Figură interactivă" }: StepFigureProps) {
  const [step, setStep] = useState(0);
  const total = content.steps.length;
  const current = content.steps[step];

  return (
    <FigureShell
      kicker={kicker}
      title={content.title}
      summary={content.summary}
      note={content.note}
      stage={renderVisual(step)}
      textAlternative={
        <ol className="space-y-3">
          {content.steps.map((item, index) => (
            <li key={item.id}>
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">
                  {index + 1}. {item.title}
                </span>
                <FigureTag kind={item.tag} />
              </p>
              <p className="mt-1">{item.text}</p>
              <p className="mt-0.5 text-xs text-ink-muted">Sursa: {item.source}</p>
            </li>
          ))}
        </ol>
      }
    >
      <div aria-live="polite" aria-atomic="true">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-ink-muted">
            Pasul {step + 1} din {total}
          </span>
          <FigureTag kind={current.tag} />
        </p>
        <p className="mt-2 font-semibold text-ink">{current.title}</p>
        <p className="mt-1 leading-relaxed text-ink-body">{current.text}</p>
        <p className="mt-1 text-xs text-ink-muted">Sursa: {current.source}</p>
      </div>
      {renderDetails?.(step)}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <ol className="flex flex-wrap gap-1.5" aria-label="Etapele figurii">
          {content.steps.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setStep(index)}
                aria-current={index === step ? "step" : undefined}
                aria-label={`Pasul ${index + 1}: ${item.title}`}
                className={`grid size-8 place-items-center rounded-full border-2 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  index === step
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line-strong text-ink-body hover:border-ink-muted"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ol>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            disabled={step === 0}
            className={FIGURE_BUTTON.secondary}
          >
            <span aria-hidden="true">← </span>Înapoi
          </button>
          {step < total - 1 ? (
            <button
              type="button"
              onClick={() => setStep((value) => Math.min(total - 1, value + 1))}
              className={FIGURE_BUTTON.primary}
            >
              Înainte<span aria-hidden="true"> →</span>
            </button>
          ) : (
            <button type="button" onClick={() => setStep(0)} className={FIGURE_BUTTON.primary}>
              <span aria-hidden="true">↺ </span>Reia
            </button>
          )}
        </div>
      </div>
    </FigureShell>
  );
}
