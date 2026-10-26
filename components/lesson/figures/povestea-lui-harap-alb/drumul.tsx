"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { drumFigure } from "@/content/romana/opere/povestea-lui-harap-alb-interactiv";

// 600 × 380 viewBox, schematic (the tale gives no real places). The stops follow the order of the action.
const STOPS = [
  { n: "1", name: "casa craiului", x: 80, y: 70 },
  { n: "2", name: "codrul", x: 170, y: 175 },
  { n: "3", name: "fântâna", x: 270, y: 95 },
  { n: "4", name: "curtea lui Verde", x: 370, y: 190 },
  { n: "5", name: "ostrovul", x: 500, y: 90 },
  { n: "6", name: "curtea lui Roș", x: 470, y: 300 },
] as const;

// Which stop is highlighted at each step; the last step returns to the court of Verde (stop 4).
const STEP_STOP = [0, 1, 2, 3, 4, 5, 3];

const pctX = (x: number) => (x / 600) * 100;
const pctY = (y: number) => (y / 380) * 100;
const route = (from: number, to: number) =>
  STOPS.slice(from, to + 1)
    .map((stop, index) => `${index === 0 ? "M" : "L"}${stop.x} ${stop.y}`)
    .join(" ");

function MapVisual({ step }: { step: number }) {
  const current = STEP_STOP[step];
  // Last stop reached so far; stops after it are shown as not visited yet.
  const reached = Math.max(...STEP_STOP.slice(0, step + 1));

  return (
    <FigureCanvas ratio="30 / 19">
      <svg viewBox="0 0 600 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Dealuri */}
        <path d="M0 150 Q150 90 300 140 T600 130 L600 380 L0 380 Z" className="fill-emerald-100 dark:fill-emerald-950" />
        <path d="M0 270 Q160 230 320 270 T600 260 L600 380 L0 380 Z" className="fill-emerald-200/70 dark:fill-emerald-900/50" />
        {/* Marea și ostrovul */}
        <ellipse cx="500" cy="95" rx="85" ry="55" className="fill-sky-200 dark:fill-sky-900/70" />
        <ellipse cx="500" cy="100" rx="30" ry="14" className="fill-emerald-300 dark:fill-emerald-800" />
        {/* Codrul */}
        <g className="fill-emerald-800/60 dark:fill-emerald-700/40">
          {[110, 135, 160, 195, 225].map((x, index) => (
            <path key={x} d={`M${x} ${215 + (index % 2) * 12} l12 30 l-24 0 Z`} />
          ))}
        </g>
        {/* Drumul parcurs și drumul de întoarcere */}
        <path d={route(0, 5)} fill="none" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="stroke-amber-200 dark:stroke-stone-700" />
        <path
          d={route(0, reached)}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="7 7"
          className="stroke-blue-600 transition-[stroke] duration-500 motion-reduce:transition-none dark:stroke-blue-400"
        />
        {step === 6 && (
          <path
            d={`M${STOPS[5].x} ${STOPS[5].y} L${STOPS[3].x} ${STOPS[3].y}`}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="2 8"
            className="stroke-violet-600 dark:stroke-violet-400"
          />
        )}
        {STOPS.map((stop, index) => {
          const visited = index <= reached;
          return (
            <circle
              key={stop.n}
              cx={stop.x}
              cy={stop.y}
              r={index === current ? 12 : 9}
              strokeWidth="3"
              className={`transition-[r] duration-300 motion-reduce:transition-none ${
                index === current
                  ? "fill-blue-600 stroke-blue-200 dark:fill-blue-400 dark:stroke-blue-900"
                  : visited
                    ? "fill-surface stroke-blue-600 dark:stroke-blue-400"
                    : "fill-surface stroke-zinc-400 dark:stroke-zinc-600"
              }`}
            />
          );
        })}
      </svg>

      {/* On a phone only the label of the current stop is shown, so that the labels never overlap. */}
      {STOPS.map((stop, index) => {
        const isCurrent = index === current;
        const align = stop.x > 460 ? "end" : stop.x < 110 ? "start" : "center";
        return (
          <CanvasLabel
            key={stop.n}
            x={pctX(align === "end" ? stop.x + 30 : align === "start" ? stop.x - 30 : stop.x)}
            y={pctY(stop.y + 32)}
            align={align}
            tone={isCurrent ? "accent" : "neutral"}
            visible={index <= reached}
            className={isCurrent ? "" : "max-sm:hidden"}
          >
            {stop.n === "4" ? "4 · 7" : stop.n} · {stop.name}
          </CanvasLabel>
        );
      })}
    </FigureCanvas>
  );
}

export function DrumulLuiHarapAlb() {
  return <StepFigure content={drumFigure} kicker="Figură interactivă · Traseul inițiatic" renderVisual={(step) => <MapVisual step={step} />} />;
}
