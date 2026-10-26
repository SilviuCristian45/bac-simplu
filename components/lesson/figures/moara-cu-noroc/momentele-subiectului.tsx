"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { momentPoints, momenteFigure } from "@/content/romana/opere/moara-cu-noroc-interactiv";

// 600 × 300 viewBox: x spreads the five moments, y draws the (schematic) tension.
const LEFT = 60;
const RIGHT = 540;
const TOP = 40;
const BOTTOM = 240;
const points = momentPoints.map((point, index) => ({
  ...point,
  x: LEFT + (index * (RIGHT - LEFT)) / (momentPoints.length - 1),
  y: BOTTOM - point.tension * (BOTTOM - TOP),
}));
// The alternative climax (Ana's murder, ch. XVI) sits between the climax and the end.
const ALTERNATIVE = { x: (points[3].x + points[4].x) / 2 - 10, y: TOP + 6 };

const pctX = (x: number) => (x / 600) * 100;
// On a phone the first and the last label are anchored by their outer edge, so they stay inside the canvas.
const EDGE_ANCHOR: Record<number, string> = { 0: "max-sm:translate-x-0", [points.length - 1]: "max-sm:-translate-x-full" };
const pctY = (y: number) => (y / 300) * 100;

function TensionVisual({ step }: { step: number }) {
  return (
    <FigureCanvas ratio="2 / 1">
      <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d={`M${LEFT - 20} ${BOTTOM} L${RIGHT + 20} ${BOTTOM}`} strokeWidth="2" className="stroke-zinc-300 dark:stroke-zinc-700" />
        <path d={`M${LEFT - 20} ${BOTTOM} L${LEFT - 20} ${TOP - 15}`} strokeWidth="2" className="stroke-zinc-300 dark:stroke-zinc-700" />
        {points.slice(1).map((point, index) => {
          const previous = points[index];
          return (
            <path
              key={point.id}
              d={`M${previous.x} ${previous.y} L${point.x} ${point.y}`}
              strokeWidth="4"
              strokeLinecap="round"
              className={`stroke-blue-600 transition-opacity duration-500 motion-reduce:transition-none dark:stroke-blue-400 ${
                step >= index + 1 ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}
        {/* Varianta alternativă de punct culminant */}
        <g className={`transition-opacity duration-500 motion-reduce:transition-none ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
          <path
            d={`M${points[3].x} ${points[3].y} Q ${ALTERNATIVE.x - 10} ${ALTERNATIVE.y - 4}, ${ALTERNATIVE.x} ${ALTERNATIVE.y}`}
            fill="none"
            strokeWidth="2"
            strokeDasharray="5 5"
            className="stroke-violet-600 dark:stroke-violet-400"
          />
          <circle cx={ALTERNATIVE.x} cy={ALTERNATIVE.y} r="6" className="fill-violet-100 stroke-violet-600 dark:fill-violet-950 dark:stroke-violet-400" strokeWidth="2" />
        </g>
        {points.map((point, index) => (
          <circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r={index === step ? 10 : 7}
            strokeWidth="3"
            className={`transition-[r,opacity] duration-300 motion-reduce:transition-none ${
              step >= index ? "opacity-100" : "opacity-25"
            } ${index === step ? "fill-blue-600 stroke-blue-200 dark:fill-blue-400 dark:stroke-blue-900" : "fill-surface stroke-blue-600 dark:stroke-blue-400"}`}
          />
        ))}
      </svg>

      <CanvasLabel x={pctX(LEFT - 30)} y={pctY(TOP - 28)} align="start">tensiune</CanvasLabel>
      {/* On a phone the five labels would overlap, so only the label of the current moment is shown there. */}
      {points.map((point, index) => (
        <CanvasLabel
          key={point.id}
          x={pctX(point.x)}
          y={pctY(BOTTOM + 26)}
          tone={index === step ? "accent" : "neutral"}
          visible={step >= index}
          className={index === step ? EDGE_ANCHOR[index] ?? "" : "max-sm:hidden"}
        >
          <span className="block">{point.label}</span>
          <span className="block font-normal">cap. {point.chapters}</span>
        </CanvasLabel>
      ))}
      <CanvasLabel x={pctX(RIGHT + 30)} y={pctY(ALTERNATIVE.y - 20)} align="end" visible={step >= 3} tone="interpretation" className="max-sm:hidden">
        altă variantă: cap. XVI
      </CanvasLabel>
    </FigureCanvas>
  );
}

export function MomenteleSubiectului() {
  return (
    <StepFigure
      content={momenteFigure}
      kicker="Figură interactivă · Momentele subiectului"
      renderVisual={(step) => <TensionVisual step={step} />}
    />
  );
}
