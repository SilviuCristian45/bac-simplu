"use client";

import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { horaFigure } from "@/content/romana/opere/ion-figuri";

const FADE = "transition-opacity duration-500 motion-reduce:transition-none";
const show = (visible: boolean) => `${FADE} ${visible ? "opacity-100" : "opacity-0"}`;

// Positions in the 600 × 400 viewBox.
const HORA = { cx: 300, cy: 300, rx: 150, ry: 44 };
const pointOnHora = (degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return { x: HORA.cx + HORA.rx * Math.cos(radians), y: HORA.cy + HORA.ry * Math.sin(radians) };
};
const ION = pointOnHora(150);
const ANA = pointOnHora(118);
const FLORICA = pointOnHora(-35);
const VASILE = { x: 532, y: 336 };
const OTHER_DANCERS = [185, 210, 240, 265, 290, 320, 350, 15, 45, 75].map(pointOnHora);

const pct = (value: number, of: number) => (value / of) * 100;

function Dancer({ x, y, className, scale = 1 }: { x: number; y: number; className: string; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <circle cx="0" cy="-24" r="7" />
      <path d="M -9 -14 Q 0 -19 9 -14 L 12 8 Q 0 12 -12 8 Z" />
    </g>
  );
}

function HoraVisual({ step }: { step: number }) {
  const showHierarchy = step === 1 || step === 4;
  const showChoice = step >= 2;
  const showConflict = step >= 3;

  return (
    <FigureCanvas ratio="3 / 2">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Peisaj stilizat: dealuri, case, biserică */}
        <path d="M0 250 Q140 190 300 228 T600 214 L600 400 L0 400 Z" className="fill-emerald-100 dark:fill-emerald-950" />
        <path d="M0 290 Q160 250 330 278 T600 268 L600 400 L0 400 Z" className="fill-emerald-200/70 dark:fill-emerald-900/60" />
        {[
          [70, 214],
          [128, 204],
          [440, 202],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} className="fill-amber-50 stroke-zinc-500 dark:fill-zinc-800 dark:stroke-zinc-400" strokeWidth="2">
            <rect x={x - 18} y={y - 16} width="36" height="24" />
            <path d={`M ${x - 23} ${y - 16} L ${x} ${y - 36} L ${x + 23} ${y - 16} Z`} className="fill-zinc-400 dark:fill-zinc-600" />
          </g>
        ))}
        <g className="fill-zinc-50 stroke-zinc-500 dark:fill-zinc-800 dark:stroke-zinc-400" strokeWidth="2">
          <rect x="500" y="150" width="34" height="58" />
          <path d="M 495 150 L 517 108 L 539 150 Z" className="fill-zinc-400 dark:fill-zinc-600" />
          <path d="M 517 96 L 517 110 M 511 101 L 523 101" fill="none" />
        </g>

        {/* Locul horei */}
        <ellipse
          cx={HORA.cx}
          cy={HORA.cy}
          rx={HORA.rx + 22}
          ry={HORA.ry + 14}
          className="fill-amber-100/70 stroke-amber-400 dark:fill-amber-950/50 dark:stroke-amber-700"
          strokeWidth="2"
          strokeDasharray={step === 3 ? "6 6" : undefined}
        />

        {/* Legături: alegerea lui Ion */}
        <g className={show(showChoice)}>
          <path
            d={`M ${ION.x} ${ION.y - 30} Q ${(ION.x + FLORICA.x) / 2} ${FLORICA.y - 120} ${FLORICA.x} ${FLORICA.y - 30}`}
            fill="none"
            strokeWidth="3"
            strokeDasharray="8 7"
            className="stroke-rose-500 dark:stroke-rose-400"
          />
          <path
            d={`M ${ION.x + 8} ${ION.y - 10} L ${ANA.x - 12} ${ANA.y - 10}`}
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            className="stroke-blue-600 dark:stroke-blue-400"
          />
        </g>

        {/* Conflictul cu Vasile Baciu */}
        <path
          d={`M ${VASILE.x - 14} ${VASILE.y - 20} L 470 300 L 440 330 L 380 296 L 330 336 L 270 312 L ${ION.x + 14} ${ION.y - 18}`}
          fill="none"
          strokeWidth="3"
          strokeLinejoin="round"
          className={`stroke-red-600 dark:stroke-red-400 ${show(showConflict)}`}
        />

        {/* Dansatori: Ion, Ana, Florica evidențiați; ceilalți generici */}
        {OTHER_DANCERS.map((point) => (
          <Dancer key={`${point.x}-${point.y}`} x={point.x} y={point.y} className="fill-zinc-400 dark:fill-zinc-500" />
        ))}
        <Dancer x={FLORICA.x} y={FLORICA.y} className="fill-rose-500 dark:fill-rose-400" />
        <Dancer x={ANA.x} y={ANA.y} className="fill-amber-500 dark:fill-amber-400" />
        <Dancer x={ION.x} y={ION.y} className="fill-blue-600 dark:fill-blue-400" />
        <Dancer x={VASILE.x} y={VASILE.y} scale={1.2} className="fill-slate-700 dark:fill-slate-300" />

        {/* Ierarhia satului (schemă) */}
        <g className={show(showHierarchy)}>
          <rect x="16" y="22" width="230" height="40" rx="8" className="fill-surface/95 stroke-zinc-300 dark:stroke-zinc-600" />
          <rect x="16" y="70" width="230" height="40" rx="8" className="fill-surface/95 stroke-zinc-300 dark:stroke-zinc-600" />
          <rect x="262" y="22" width="150" height="40" rx="8" className="fill-surface/95 stroke-zinc-300 dark:stroke-zinc-600" />
          <circle cx="196" cy="42" r="8" className="fill-slate-700 dark:fill-slate-300" />
          <circle cx="222" cy="42" r="8" className="fill-amber-500 dark:fill-amber-400" />
          <circle cx="196" cy="90" r="8" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="222" cy="90" r="8" className="fill-rose-500 dark:fill-rose-400" />
          <path d="M 254 66 L 254 98" strokeWidth="2" className="stroke-zinc-400" />
        </g>
      </svg>

      {/* Nume (mereu vizibile) */}
      <CanvasLabel x={pct(ION.x, 600)} y={pct(ION.y + 22, 400)} tone="accent">Ion</CanvasLabel>
      <CanvasLabel x={pct(ANA.x + 8, 600)} y={pct(ANA.y + 24, 400)}>Ana</CanvasLabel>
      <CanvasLabel x={pct(FLORICA.x, 600)} y={pct(FLORICA.y - 44, 400)}>Florica</CanvasLabel>
      <CanvasLabel x={pct(VASILE.x, 600)} y={pct(VASILE.y + 26, 400)}>Vasile Baciu</CanvasLabel>

      {/* Etichete pe etape */}
      <CanvasLabel x={pct(HORA.cx, 600)} y={pct(HORA.cy - 66, 400)} visible={step === 0}>hora de duminică</CanvasLabel>
      <CanvasLabel x={pct(90, 600)} y={pct(42, 400)} visible={showHierarchy}>țărani înstăriți</CanvasLabel>
      <CanvasLabel x={pct(84, 600)} y={pct(90, 400)} visible={showHierarchy}>țărani săraci</CanvasLabel>
      <CanvasLabel x={pct(337, 600)} y={pct(42, 400)} visible={showHierarchy}>învățătorul, preotul</CanvasLabel>
      <CanvasLabel x={pct(300, 600)} y={pct(196, 400)} visible={showChoice} tone="neutral">
        o iubește pe Florica (săracă)
      </CanvasLabel>
      <CanvasLabel x={pct(ION.x - 6, 600)} y={pct(ION.y - 52, 400)} visible={showChoice} tone="accent">
        se apropie de Ana
      </CanvasLabel>
      <CanvasLabel x={pct(430, 600)} y={pct(366, 400)} visible={showConflict} tone="warning">
        dispreț public pentru sărăcie
      </CanvasLabel>
      <CanvasLabel x={pct(130, 600)} y={pct(136, 400)} visible={step === 4} tone="interpretation">
        pământul decide locul în sat
      </CanvasLabel>
    </FigureCanvas>
  );
}

export function HoraContextSocial() {
  return <StepFigure content={horaFigure} kicker="Figură interactivă · Hora" renderVisual={(step) => <HoraVisual step={step} />} />;
}
