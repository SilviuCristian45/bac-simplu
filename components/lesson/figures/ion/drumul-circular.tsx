"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { FIGURE_BUTTON } from "@/components/lesson/interactive/figure-shell";
import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { drumFigure } from "@/content/romana/opere/ion-interactiv";

// 600 × 360 viewBox. The road passes exactly through the landmarks (smooth quadratic segments),
// in the order of the incipit (cap. I): the bridge over the Someș, then Jidovița, then the cross.
const START = { x: 30, y: 330 };
const BRIDGE = { x: 170, y: 262 };
const JIDOVITA = { x: 300, y: 222 };
const CROSS = { x: 430, y: 170 };
const PRIPAS = { x: 555, y: 112 };
const ROAD = `M${START.x} ${START.y} Q100 310 ${BRIDGE.x} ${BRIDGE.y} T${JIDOVITA.x} ${JIDOVITA.y} T${CROSS.x} ${CROSS.y} T${PRIPAS.x} ${PRIPAS.y}`;
const ENDS = [START, PRIPAS];
const DURATION = 1800;

const pctX = (x: number) => (x / 600) * 100;
const pctY = (y: number) => (y / 360) * 100;
const show = (visible: boolean) => `transition-opacity duration-500 motion-reduce:transition-none ${visible ? "opacity-100" : "opacity-0"}`;

/** Moves a point along the road towards `target` (0 = outside the village, 1 = Pripas). */
function useRoadPosition(pathRef: RefObject<SVGPathElement | null>, target: 0 | 1) {
  const [position, setPosition] = useState<{ fraction: number; x: number; y: number }>({ fraction: target, ...ENDS[target] });
  const fractionRef = useRef<number>(target);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    const from = fractionRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = reduce ? 1 : Math.min(1, (now - started) / DURATION);
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const fraction = from + (target - from) * eased;
      const point = path.getPointAtLength(fraction * length);
      fractionRef.current = fraction;
      setPosition({ fraction, x: point.x, y: point.y });
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [pathRef, target]);

  return position;
}

function Houses({ x, y, count, className }: { x: number; y: number; count: number; className: string }) {
  return (
    <g className={className} strokeWidth="1.5">
      {Array.from({ length: count }, (_, index) => {
        const hx = x + index * 26;
        const hy = y + (index % 2) * 8;
        return (
          <g key={index}>
            <rect x={hx - 10} y={hy - 8} width="20" height="14" />
            <path d={`M ${hx - 13} ${hy - 8} L ${hx} ${hy - 20} L ${hx + 13} ${hy - 8} Z`} />
          </g>
        );
      })}
    </g>
  );
}

function RoadVisual({ step, played }: { step: number; played: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const isCarriage = step >= 2;
  const target: 0 | 1 = step === 0 ? (played ? 1 : 0) : step === 1 ? 1 : step === 2 ? (played ? 0 : 1) : 0;
  const position = useRoadPosition(pathRef, target);
  const showLandmarks = step >= 1;
  const showMirror = step >= 3;

  return (
    <FigureCanvas ratio="5 / 3">
      <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Dealuri */}
        <path d="M0 150 Q150 90 300 130 T600 90 L600 360 L0 360 Z" className="fill-emerald-100 dark:fill-emerald-950" />
        <path d="M0 230 Q170 180 340 215 T600 180 L600 360 L0 360 Z" className="fill-emerald-200/70 dark:fill-emerald-900/50" />
        {/* Someșul */}
        <path
          d="M120 90 C 150 150, 130 220, 170 262 S 200 330, 170 360"
          fill="none"
          strokeWidth="18"
          strokeLinecap="round"
          className="stroke-sky-300 dark:stroke-sky-800"
        />
        {/* Drumul */}
        <path d={ROAD} fill="none" strokeWidth="14" strokeLinecap="round" className="stroke-amber-200 dark:stroke-stone-700" />
        <path ref={pathRef} d={ROAD} fill="none" strokeWidth="2" strokeDasharray="6 8" className="stroke-amber-600 dark:stroke-stone-400" />

        {/* Repere */}
        <Houses x={JIDOVITA.x - 40} y={JIDOVITA.y - 26} count={3} className="fill-zinc-100 stroke-zinc-500 dark:fill-zinc-800 dark:stroke-zinc-400" />
        <g transform={`translate(${BRIDGE.x} ${BRIDGE.y}) rotate(-17)`}>
          <rect x="-22" y="-9" width="44" height="18" rx="2" className="fill-amber-700 dark:fill-amber-600" />
          <path d="M-22 -9 L22 -9 M-22 9 L22 9" strokeWidth="2" className="stroke-amber-900 dark:stroke-amber-300" />
        </g>
        <g transform={`translate(${CROSS.x + 14} ${CROSS.y - 30})`} strokeWidth="4" strokeLinecap="round" className="stroke-zinc-700 dark:stroke-zinc-300">
          <path d="M0 0 L0 30 M-9 8 L9 8" fill="none" />
        </g>
        <Houses x={PRIPAS.x - 40} y={PRIPAS.y - 36} count={3} className="fill-amber-50 stroke-zinc-500 dark:fill-zinc-800 dark:stroke-zinc-400" />
        <g className="fill-zinc-50 stroke-zinc-500 dark:fill-zinc-800 dark:stroke-zinc-400" strokeWidth="1.5">
          <rect x={PRIPAS.x + 8} y={PRIPAS.y - 4} width="20" height="30" />
          <path d={`M ${PRIPAS.x + 5} ${PRIPAS.y - 4} L ${PRIPAS.x + 18} ${PRIPAS.y - 28} L ${PRIPAS.x + 31} ${PRIPAS.y - 4} Z`} />
        </g>

        {/* Oglindirea: intrare și ieșire pe același drum */}
        <g className={show(showMirror)}>
          <path d="M60 300 Q 120 280 150 262" fill="none" strokeWidth="3" markerEnd="url(#sageata-intrare)" className="stroke-blue-600 dark:stroke-blue-400" />
          <path d="M520 150 Q 470 175 455 182" fill="none" strokeWidth="3" markerEnd="url(#sageata-iesire)" className="stroke-rose-600 dark:stroke-rose-400" />
        </g>
        <defs>
          <marker id="sageata-intrare" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" className="fill-blue-600 dark:fill-blue-400" />
          </marker>
          <marker id="sageata-iesire" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" className="fill-rose-600 dark:fill-rose-400" />
          </marker>
        </defs>

        {/* Cine parcurge drumul */}
        <g transform={`translate(${position.x} ${position.y})`}>
          {isCarriage ? (
            <g className="fill-rose-600 stroke-rose-900 dark:fill-rose-400 dark:stroke-rose-100" strokeWidth="1.5">
              <rect x="-15" y="-22" width="30" height="16" rx="3" />
              <circle cx="-9" cy="-4" r="5" className="fill-zinc-800 dark:fill-zinc-200" />
              <circle cx="9" cy="-4" r="5" className="fill-zinc-800 dark:fill-zinc-200" />
            </g>
          ) : (
            <g className="fill-blue-600 dark:fill-blue-400">
              <circle cx="0" cy="-26" r="6" />
              <path d="M -7 -18 Q 0 -22 7 -18 L 9 0 L -9 0 Z" />
            </g>
          )}
        </g>
      </svg>

      <CanvasLabel x={pctX(JIDOVITA.x - 14)} y={pctY(JIDOVITA.y + 26)} visible={showLandmarks}>Jidovița</CanvasLabel>
      <CanvasLabel x={pctX(BRIDGE.x + 6)} y={pctY(BRIDGE.y + 34)} visible={showLandmarks}>podul de lemn peste Someș</CanvasLabel>
      <CanvasLabel x={pctX(CROSS.x + 4)} y={pctY(CROSS.y - 46)} visible={showLandmarks}>crucea</CanvasLabel>
      <CanvasLabel x={pctX(PRIPAS.x - 12)} y={pctY(PRIPAS.y - 58)} tone="accent">Pripas</CanvasLabel>
      <CanvasLabel x={pctX(START.x + 40)} y={pctY(START.y - 4)} visible={step <= 1}>
        cap. I: spre sat
      </CanvasLabel>
      <CanvasLabel x={pctX(START.x + 52)} y={pctY(START.y - 4)} visible={step === 2}>
        cap. XIII: trăsura Herdelea pleacă
      </CanvasLabel>
      <CanvasLabel x={pctX(440)} y={pctY(300)} visible={showMirror} tone="interpretation">
        intrare și ieșire pe același drum
      </CanvasLabel>
      <CanvasLabel x={pctX(470)} y={pctY(248)} visible={step === 4} tone="interpretation">
        satul își continuă viața
      </CanvasLabel>
    </FigureCanvas>
  );
}

export function DrumulCircular() {
  // The movement plays only when the reader asks for it, once per visit of the step.
  const [playedStep, setPlayedStep] = useState<number | null>(null);

  return (
    <StepFigure
      content={drumFigure}
      kicker="Figură interactivă · Incipit și final"
      renderVisual={(step) => <RoadVisual step={step} played={playedStep === step} />}
      renderDetails={(step) =>
        step === 0 || step === 2 ? (
          <button type="button" onClick={() => setPlayedStep(step)} disabled={playedStep === step} className={`mt-3 ${FIGURE_BUTTON.secondary}`}>
            <span aria-hidden="true">▶ </span>
            {step === 0 ? "Parcurge drumul spre Pripas" : "Pornește trăsura din sat"}
          </button>
        ) : null
      }
    />
  );
}
