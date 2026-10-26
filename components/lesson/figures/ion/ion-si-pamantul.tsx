"use client";

import { useEffect, useState } from "react";
import { CanvasLabel, FigureCanvas, StepFigure } from "@/components/lesson/interactive/step-figure";
import { pamantFigure } from "@/content/romana/opere/ion-figuri";

const MOTION = "duration-700 ease-out motion-reduce:transition-none";
const show = (visible: boolean) => `transition-opacity ${MOTION} ${visible ? "opacity-100" : "opacity-0"}`;
const pct = (value: number, of: number) => (value / of) * 100;

const VASILE_PLOTS = [
  "300,200 410,200 425,245 315,245",
  "420,200 530,200 545,245 435,245",
  "315,255 425,255 440,300 330,300",
  "435,255 545,255 560,300 450,300",
];

/** Status meter that rises once after mounting; it is mounted only on the interpretation steps. */
function StatusMeter() {
  const [level, setLevel] = useState(0.15);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLevel(0.85));
    return () => cancelAnimationFrame(frame);
  }, []);

  const height = 130 * level;
  return (
    <g>
      <rect x="60" y="40" width="28" height="130" rx="6" className="fill-white stroke-zinc-400 dark:fill-zinc-900 dark:stroke-zinc-500" strokeWidth="2" />
      <rect
        x="64"
        width="20"
        rx="4"
        y={166 - height}
        height={height}
        className={`fill-violet-500 transition-[y,height] dark:fill-violet-400 ${MOTION}`}
      />
    </g>
  );
}

function PamantVisual({ step }: { step: number }) {
  const owner = step >= 2;
  const ionPosition = owner ? "translate(275px, 15px)" : "translate(0px, 0px)";

  return (
    <FigureCanvas ratio="3 / 2">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <marker id="pamant-sageata" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>
        <rect x="0" y="185" width="600" height="215" className="fill-lime-50 dark:fill-zinc-900" />

        {/* Lotul inițial al lui Ion */}
        <polygon points="40,250 140,250 160,300 60,300" strokeWidth="2" className="fill-blue-200 stroke-blue-700 dark:fill-blue-900 dark:stroke-blue-400" />

        {/* Pământurile lui Vasile Baciu: își schimbă stăpânul la pasul 3 */}
        {VASILE_PLOTS.map((points) => (
          <polygon
            key={points}
            points={points}
            strokeWidth="2"
            className={`transition-[fill,stroke] ${MOTION} ${
              owner
                ? "fill-blue-200 stroke-blue-700 dark:fill-blue-900 dark:stroke-blue-400"
                : "fill-amber-200 stroke-amber-700 dark:fill-amber-900 dark:stroke-amber-500"
            }`}
          />
        ))}

        {/* Promisiunea zestrei și amânarea */}
        <g className={show(step === 1)}>
          <path
            d="M 420 190 Q 270 70 130 236"
            fill="none"
            strokeWidth="3"
            strokeDasharray="9 7"
            markerEnd="url(#pamant-sageata)"
            className="stroke-amber-600 dark:stroke-amber-400"
          />
          <path d="M 250 112 L 296 146" strokeWidth="9" strokeLinecap="round" className="stroke-red-600 dark:stroke-red-400" />
        </g>

        {/* Sărutarea pământului */}
        <circle cx="378" cy="230" r="34" fill="none" strokeWidth="3" strokeDasharray="5 5" className={`stroke-blue-700 dark:stroke-blue-300 ${show(step === 2)}`} />

        {/* Florica: întoarcerea spre iubire */}
        <g className={show(step === 4)}>
          <path d="M 395 205 Q 470 110 515 92" fill="none" strokeWidth="3" strokeDasharray="7 6" className="stroke-rose-500 dark:stroke-rose-400" />
          <circle cx="525" cy="86" r="11" className="fill-rose-500 dark:fill-rose-400" />
        </g>

        {/* Ion (se mută pe pământurile dobândite) */}
        <g style={{ transform: ionPosition }} className={`transition-transform ${MOTION}`}>
          <g transform="translate(100 238)" className="fill-blue-600 dark:fill-blue-400">
            <circle cx="0" cy="-30" r="9" />
            <path d="M -11 -18 Q 0 -24 11 -18 L 14 10 Q 0 15 -14 10 Z" />
          </g>
        </g>

        {/* Vasile Baciu */}
        <g transform="translate(575 236)" className="fill-slate-700 dark:fill-slate-300">
          <circle cx="0" cy="-30" r="9" />
          <path d="M -11 -18 Q 0 -24 11 -18 L 14 10 Q 0 15 -14 10 Z" />
        </g>

        {step >= 3 && <StatusMeter />}
      </svg>

      <CanvasLabel x={pct(100, 600)} y={pct(322, 400)} tone="accent">lotul lui Ion</CanvasLabel>
      <CanvasLabel x={pct(432, 600)} y={pct(326, 400)} tone={owner ? "accent" : "neutral"}>
        {owner ? "acum stăpânite de Ion" : "pământurile lui Vasile Baciu"}
      </CanvasLabel>
      <CanvasLabel x={pct(560, 600)} y={pct(270, 400)}>Vasile</CanvasLabel>
      <CanvasLabel x={pct(300, 600)} y={pct(70, 400)} visible={step === 1}>promise ca zestre</CanvasLabel>
      <CanvasLabel x={pct(300, 600)} y={pct(178, 400)} visible={step === 1} tone="warning">amânate după nuntă</CanvasLabel>
      <CanvasLabel x={pct(378, 600)} y={pct(174, 400)} visible={step === 2} tone="accent">sărutarea pământului (cap. IX)</CanvasLabel>
      <CanvasLabel x={pct(74, 600)} y={pct(190, 400)} visible={step >= 3}>statut în sat</CanvasLabel>
      <CanvasLabel x={pct(215, 600)} y={pct(70, 400)} visible={step === 3} tone="interpretation">pământ = demnitate</CanvasLabel>
      <CanvasLabel x={pct(525, 600)} y={pct(52, 400)} visible={step === 4}>Florica</CanvasLabel>
      <CanvasLabel x={pct(225, 600)} y={pct(70, 400)} visible={step === 4} tone="interpretation">statut nou, fără împlinire</CanvasLabel>
    </FigureCanvas>
  );
}

export function IonSiPamantul() {
  return (
    <StepFigure content={pamantFigure} kicker="Figură interactivă · Ion și pământul" renderVisual={(step) => <PamantVisual step={step} />} />
  );
}
