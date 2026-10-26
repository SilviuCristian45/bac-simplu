"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { treptePrabusirii } from "@/content/romana/opere/moara-cu-noroc-interactiv";

// 600 × 320 viewBox: a staircase going down from left to right, one stair per step of the figure.
const SHORT_LABELS = ["cizmarul", "frica", "învoiala", "mărturia", "banii", "capătul"];
const COUNT = SHORT_LABELS.length;
const STAIR_W = 84;
const STAIR_H = 38;
const START_X = 40;
const START_Y = 70;
const stairs = SHORT_LABELS.map((label, index) => ({
  label,
  x: START_X + index * STAIR_W,
  y: START_Y + index * STAIR_H,
}));

const pctX = (x: number) => (x / 600) * 100;
const pctY = (y: number) => (y / 320) * 100;

function StairsVisual({ step }: { step: number }) {
  const current = stairs[Math.min(step, COUNT - 1)];

  return (
    <FigureCanvas ratio="15 / 8">
      <svg viewBox="0 0 600 320" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {stairs.map((stair, index) => (
          <rect
            key={stair.label}
            x={stair.x}
            y={stair.y}
            width={STAIR_W}
            height={320 - stair.y}
            className={`transition-[fill] duration-500 motion-reduce:transition-none ${
              index <= step
                ? index === COUNT - 1
                  ? "fill-red-200 dark:fill-red-950"
                  : "fill-amber-100 dark:fill-amber-950/60"
                : "fill-zinc-100 dark:fill-zinc-800/60"
            } stroke-zinc-400 dark:stroke-zinc-600`}
            strokeWidth="1.5"
          />
        ))}
        {/* Ghiță coboară treptele */}
        <g
          className="transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translate(${current.x + STAIR_W / 2}px, ${current.y}px)` }}
        >
          <circle cx="0" cy="-30" r="8" className="fill-blue-600 dark:fill-blue-400" />
          <path d="M -9 -20 Q 0 -25 9 -20 L 11 0 L -11 0 Z" className="fill-blue-600 dark:fill-blue-400" />
        </g>
      </svg>

      {stairs.map((stair, index) => (
        <CanvasLabel
          key={stair.label}
          x={pctX(stair.x + STAIR_W / 2)}
          y={pctY(stair.y + 20)}
          tone={index === step ? "accent" : "neutral"}
          visible={index <= step}
        >
          {stair.label}
        </CanvasLabel>
      ))}
      <CanvasLabel x={pctX(24)} y={pctY(24)} align="start">„dintr-un câștig făcut cu bine”</CanvasLabel>
      <CanvasLabel x={pctX(590)} y={pctY(80)} align="end" visible={step >= 4} tone="interpretation">
        cu cât adună bani, cu atât „scăpăta”
      </CanvasLabel>
    </FigureCanvas>
  );
}

export function TreptelePrabusirii() {
  return (
    <StepFigure
      content={treptePrabusirii}
      kicker="Figură interactivă · Personajul Ghiță"
      renderVisual={(step) => <StairsVisual step={step} />}
    />
  );
}
