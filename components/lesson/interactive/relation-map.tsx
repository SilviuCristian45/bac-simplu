"use client";

import { useState } from "react";
import type { FigureTagKind } from "../label-styles";
import { CanvasLabel, FigureCanvas, FigureTag, StepFigure } from "./step-figure";
import type { FigureContent } from "./types";

export type RelationTone = "blue" | "rose" | "amber" | "slate" | "emerald" | "violet";

export type RelationPersonData = {
  name: string;
  role: string;
  details: { tag: FigureTagKind; text: string; source: string }[];
  /** Node centre in percent of the canvas. */
  position: { x: number; y: number };
  tone: RelationTone;
};

export type RelationEdge<Id extends string> = {
  from: Id;
  to: Id;
  label: string;
  /** Shorter wording shown instead of `label` on narrow screens, where long labels collide. */
  shortLabel?: string;
  step: number;
};

const NODE_COLOURS: Record<RelationTone, string> = {
  blue: "border-blue-600 bg-blue-50 text-blue-950 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-50",
  rose: "border-rose-500 bg-rose-50 text-rose-950 dark:border-rose-400 dark:bg-rose-950 dark:text-rose-50",
  amber: "border-amber-500 bg-amber-50 text-amber-950 dark:border-amber-400 dark:bg-amber-950 dark:text-amber-50",
  slate: "border-slate-600 bg-slate-50 text-slate-950 dark:border-slate-300 dark:bg-slate-900 dark:text-slate-50",
  emerald: "border-emerald-600 bg-emerald-50 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-950 dark:text-emerald-50",
  violet: "border-violet-600 bg-violet-50 text-violet-950 dark:border-violet-400 dark:bg-violet-950 dark:text-violet-50",
};

type RelationMapProps<Id extends string> = {
  content: FigureContent;
  people: Record<Id, RelationPersonData>;
  edges: RelationEdge<Id>[];
  /** Order of the person buttons (and tab order). */
  order: Id[];
  initial: Id;
  kicker?: string;
  ratio?: string;
};

function RelationsVisual<Id extends string>({
  step,
  selected,
  onSelect,
  people,
  edges,
  order,
  ratio,
}: {
  step: number;
  selected: Id;
  onSelect: (person: Id) => void;
  people: Record<Id, RelationPersonData>;
  edges: RelationEdge<Id>[];
  order: Id[];
  ratio: string;
}) {
  return (
    <FigureCanvas ratio={ratio}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {edges.map((edge) => {
          const from = people[edge.from].position;
          const to = people[edge.to].position;
          const visible = step >= edge.step;
          const involved = edge.from === selected || edge.to === selected;
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              vectorEffect="non-scaling-stroke"
              strokeWidth={involved ? 4 : 2.5}
              strokeLinecap="round"
              className={`transition-[opacity,stroke] duration-700 ease-out motion-reduce:transition-none ${
                visible ? "opacity-100" : "opacity-0"
              } ${involved ? "stroke-blue-600 dark:stroke-blue-400" : "stroke-zinc-400 dark:stroke-zinc-500"}`}
            />
          );
        })}
      </svg>

      {edges.map((edge) => {
        const from = people[edge.from].position;
        const to = people[edge.to].position;
        return (
          <CanvasLabel
            key={`label-${edge.from}-${edge.to}`}
            x={(from.x + to.x) / 2}
            y={(from.y + to.y) / 2}
            visible={step >= edge.step}
          >
            {edge.shortLabel ? (
              <>
                <span className="sm:hidden">{edge.shortLabel}</span>
                <span className="max-sm:hidden">{edge.label}</span>
              </>
            ) : (
              edge.label
            )}
          </CanvasLabel>
        );
      })}

      {order.map((person) => {
        const data = people[person];
        const isSelected = person === selected;
        return (
          <button
            key={person}
            type="button"
            onClick={() => onSelect(person)}
            aria-pressed={isSelected}
            aria-label={`${data.name}: afișează ce spune lecția`}
            style={{ left: `${data.position.x}%`, top: `${data.position.y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 px-2.5 py-1.5 text-xs font-bold whitespace-nowrap shadow-sm transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3 sm:text-sm ${NODE_COLOURS[data.tone]} ${
              isSelected ? "ring-4 ring-blue-600/40 dark:ring-blue-400/50" : ""
            }`}
          >
            {data.name}
          </button>
        );
      })}
    </FigureCanvas>
  );
}

function PersonPanel({ data }: { data: RelationPersonData }) {
  return (
    <div className="mt-4 rounded-xl border border-line bg-surface-muted p-4" aria-live="polite">
      <p className="font-semibold text-ink">
        {data.name} <span className="font-normal text-ink-muted">– {data.role}</span>
      </p>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-body">
        {data.details.map((detail) => (
          <li key={detail.text}>
            <FigureTag kind={detail.tag} /> {detail.text}{" "}
            <span className="text-xs text-ink-muted">({detail.source})</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-ink-muted">Selectează alt personaj din hartă pentru a-i vedea relațiile.</p>
    </div>
  );
}

/**
 * Character map built step by step: edges appear in the order of their `step`, and selecting a
 * person shows what the lesson says about them (facts and interpretations tagged separately).
 */
export function RelationMap<Id extends string>({
  content,
  people,
  edges,
  order,
  initial,
  kicker = "Figură interactivă · Personaje",
  ratio = "3 / 2",
}: RelationMapProps<Id>) {
  const [selected, setSelected] = useState<Id>(initial);

  return (
    <StepFigure
      content={content}
      kicker={kicker}
      renderVisual={(step) => (
        <RelationsVisual
          step={step}
          selected={selected}
          onSelect={setSelected}
          people={people}
          edges={edges}
          order={order}
          ratio={ratio}
        />
      )}
      renderDetails={() => <PersonPanel data={people[selected]} />}
    />
  );
}
