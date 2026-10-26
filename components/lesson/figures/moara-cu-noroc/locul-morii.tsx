"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { locFigure } from "@/content/romana/opere/moara-cu-noroc-interactiv";

// 600 × 380 viewBox, after the description in chapter II (schematic, not to scale).
const ROAD = "M20 70 C 90 80, 120 110, 150 120 S 200 90, 235 95 S 270 190, 300 235 S 420 250, 590 260";
const MILL = { x: 330, y: 268 };
const INN = { x: 420, y: 222 };
const CROSSES = [300, 312, 324, 336, 348].map((x, index) => ({ x, y: 300 + (index % 2) * 6 }));

const pctX = (x: number) => (x / 600) * 100;
const pctY = (y: number) => (y / 380) * 100;
const show = (visible: boolean) => `transition-opacity duration-500 motion-reduce:transition-none ${visible ? "opacity-100" : "opacity-0"}`;

function Cross({ x, y, className }: { x: number; y: number; className: string }) {
  return <path d={`M${x} ${y} l0 -16 M${x - 5} ${y - 11} l10 0`} strokeWidth="3" strokeLinecap="round" fill="none" className={className} />;
}

function PlaceVisual({ step }: { step: number }) {
  const focusRoad = step === 0;
  const focusMill = step === 1;
  const focusCrosses = step === 2 || step === 4;
  const lonely = step === 3;

  return (
    <FigureCanvas ratio="30 / 19">
      <svg viewBox="0 0 600 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Dealuri și vale */}
        <path d="M0 110 Q120 40 240 95 T600 120 L600 380 L0 380 Z" className="fill-emerald-100 dark:fill-emerald-950" />
        <path d="M0 260 Q150 210 300 250 T600 250 L600 380 L0 380 Z" className="fill-emerald-200/70 dark:fill-emerald-900/50" />
        {/* Locurile rele: pădure întunecată spre dreapta */}
        <g className={`${show(true)} fill-emerald-800/70 dark:fill-emerald-700/40`}>
          {[470, 500, 530, 560, 585].map((x, index) => (
            <path key={x} d={`M${x} ${150 + (index % 2) * 10} l14 34 l-28 0 Z`} />
          ))}
        </g>
        {/* Turnul bisericii din Fundureni, în depărtare */}
        <path d="M560 112 l6 -22 l6 22 Z M561 112 l10 0 l0 14 l-10 0 Z" className="fill-zinc-400 dark:fill-zinc-500" />
        {/* Râulețul */}
        <path d="M0 330 C 150 310, 300 340, 450 318 S 600 330, 600 330" fill="none" strokeWidth="10" strokeLinecap="round" className="stroke-sky-300 dark:stroke-sky-800" />
        {/* Drumul de la Ineu, peste pripor, în vale */}
        <path d={ROAD} fill="none" strokeWidth="12" strokeLinecap="round" className="stroke-amber-200 dark:stroke-stone-700" />
        <path
          d={ROAD}
          fill="none"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          className={`${focusRoad ? "stroke-blue-600 dark:stroke-blue-400" : "stroke-amber-600 dark:stroke-stone-400"} transition-[stroke] duration-500 motion-reduce:transition-none`}
        />
        {/* Moara părăsită, cu lopețile rupte */}
        <g className={focusMill ? "" : "opacity-80"}>
          <rect x={MILL.x - 16} y={MILL.y - 26} width="32" height="26" className="fill-stone-300 stroke-stone-600 dark:fill-stone-700 dark:stroke-stone-400" strokeWidth="2" />
          <g transform={`translate(${MILL.x - 22} ${MILL.y - 14})`} className="stroke-stone-700 dark:stroke-stone-300" strokeWidth="2.5" strokeLinecap="round">
            <circle r="10" fill="none" />
            <path d="M0 -10 L0 -16 M10 0 L15 3 M-7 7 L-11 13" />
          </g>
        </g>
        {/* Cârciuma */}
        <g>
          <rect x={INN.x - 30} y={INN.y - 22} width="60" height="30" className="fill-amber-50 stroke-zinc-600 dark:fill-zinc-800 dark:stroke-zinc-400" strokeWidth="2" />
          <path d={`M${INN.x - 36} ${INN.y - 22} L${INN.x} ${INN.y - 44} L${INN.x + 36} ${INN.y - 22} Z`} className="fill-red-800/80 dark:fill-red-900" />
          <rect x={INN.x - 6} y={INN.y - 6} width="12" height="14" className="fill-amber-700 dark:fill-amber-600" />
        </g>
        {/* Cele cinci cruci */}
        {CROSSES.map((cross) => (
          <Cross
            key={cross.x}
            x={cross.x}
            y={cross.y}
            className={`transition-[stroke] duration-500 motion-reduce:transition-none ${focusCrosses ? "stroke-violet-700 dark:stroke-violet-300" : "stroke-zinc-600 dark:stroke-zinc-400"}`}
          />
        ))}
        {/* Pustietatea: tot ce nu e cârciuma se estompează */}
        <rect x="0" y="0" width="600" height="380" className={`fill-zinc-900/35 dark:fill-black/45 ${show(lonely)}`} />
        <circle cx={INN.x} cy={INN.y - 10} r="60" className={`fill-amber-200/50 dark:fill-amber-500/20 ${show(lonely)}`} />
      </svg>

      <CanvasLabel x={pctX(14)} y={pctY(52)} align="start" tone={focusRoad ? "accent" : "neutral"}>spre Ineu</CanvasLabel>
      <CanvasLabel x={pctX(200)} y={pctY(70)} visible={step === 0}>priporul</CanvasLabel>
      <CanvasLabel x={pctX(592)} y={pctY(208)} align="end" tone={step === 0 || lonely ? "warning" : "neutral"}>„locurile rele”</CanvasLabel>
      <CanvasLabel x={pctX(MILL.x - 30)} y={pctY(MILL.y - 48)} visible={step >= 1}>moara părăsită</CanvasLabel>
      <CanvasLabel x={pctX(INN.x + 10)} y={pctY(INN.y - 60)} tone={focusMill || lonely ? "accent" : "neutral"}>
        cârciuma lui Ghiță
      </CanvasLabel>
      <CanvasLabel x={pctX(324)} y={pctY(352)} visible={step >= 2} tone={focusCrosses ? "interpretation" : "neutral"}>
        cinci cruci
      </CanvasLabel>
      <CanvasLabel x={pctX(596)} y={pctY(70)} align="end" visible={step >= 1}>Fundureni</CanvasLabel>
      <CanvasLabel x={pctX(14)} y={pctY(170)} align="start" visible={step === 4} tone="interpretation">
        <span className="sm:hidden">aceleași cruci (cap. XVII)</span>
        <span className="max-sm:hidden">aceleași cruci în final (cap. XVII)</span>
      </CanvasLabel>
    </FigureCanvas>
  );
}

export function LoculMoriiCuNoroc() {
  return <StepFigure content={locFigure} kicker="Figură interactivă · Spațiul" renderVisual={(step) => <PlaceVisual step={step} />} />;
}
