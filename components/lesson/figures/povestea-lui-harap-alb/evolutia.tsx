"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { evolutieFigure } from "@/content/romana/opere/povestea-lui-harap-alb-interactiv";

// 600 × 300 viewBox: a staircase going up from left to right, one stair per step of the figure.
const SHORT_LABELS = ["mezin", "boboc", "slugă", "încercat", "prieten", "fidel", "înviat"];
const COUNT = SHORT_LABELS.length;
const STAIR_W = 80;
const STAIR_H = 30;
const START_X = 20;
const BASE_Y = 250;
const stairs = SHORT_LABELS.map((label, index) => ({
  label,
  x: START_X + index * STAIR_W,
  y: BASE_Y - index * STAIR_H,
}));

const pctX = (x: number) => (x / 600) * 100;
const pctY = (y: number) => (y / 300) * 100;

function StairsVisual({ step }: { step: number }) {
  const current = stairs[Math.min(step, COUNT - 1)];

  return (
    <FigureCanvas ratio="2 / 1">
      <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {stairs.map((stair, index) => (
          <rect
            key={stair.label}
            x={stair.x}
            y={stair.y}
            width={STAIR_W}
            height={300 - stair.y}
            className={`transition-[fill] duration-500 motion-reduce:transition-none ${
              index <= step
                ? index === COUNT - 1
                  ? "fill-emerald-200 dark:fill-emerald-950"
                  : "fill-sky-100 dark:fill-sky-950/60"
                : "fill-zinc-100 dark:fill-zinc-800/60"
            } stroke-zinc-400 dark:stroke-zinc-600`}
            strokeWidth="1.5"
          />
        ))}
        <g
          className="transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translate(${current.x + STAIR_W / 2}px, ${current.y}px)` }}
        >
          <circle cx="0" cy="-30" r="8" className="fill-blue-600 dark:fill-blue-400" />
          <path d="M -9 -20 Q 0 -25 9 -20 L 11 0 L -11 0 Z" className="fill-blue-600 dark:fill-blue-400" />
        </g>
      </svg>

      {/* On a phone only the label of the current stair is shown, so that the labels never overlap. */}
      {stairs.map((stair, index) => {
        const isCurrent = index === step;
        const last = index === COUNT - 1;
        return (
          <CanvasLabel
            key={stair.label}
            x={pctX(last ? stair.x + STAIR_W : index === 0 ? stair.x : stair.x + STAIR_W / 2)}
            y={pctY(stair.y + 22)}
            align={last ? "end" : index === 0 ? "start" : "center"}
            tone={isCurrent ? "accent" : "neutral"}
            visible={index <= step}
            className={isCurrent ? "" : "max-sm:hidden"}
          >
            {stair.label}
          </CanvasLabel>
        );
      })}
    </FigureCanvas>
  );
}

export function EvolutiaLuiHarapAlb() {
  return (
    <StepFigure content={evolutieFigure} kicker="Figură interactivă · Evoluția personajului" renderVisual={(step) => <StairsVisual step={step} />} />
  );
}
