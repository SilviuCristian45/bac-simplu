"use client";

import { StepFigure } from "@/components/lesson/interactive/step-figure";
import {
  differenceFeatures,
  rezumatFigure,
  variantaA,
  variantaB,
  type SummarySentence,
} from "@/content/romana/opere/ion-interactiv";

const COLLAPSE = "transition-[opacity,max-height,margin] duration-500 ease-out motion-reduce:transition-none";

function SentenceText({ sentence, showFeatures }: { sentence: SummarySentence; showFeatures: boolean }) {
  const highlight = sentence.highlight;
  if (!showFeatures || !highlight) return <>{sentence.text}</>;
  const [before, after] = sentence.text.split(highlight.phrase);
  return (
    <>
      {before}
      <mark className="rounded bg-sky-100 px-0.5 text-sky-950 ring-1 ring-sky-400 dark:bg-sky-950 dark:text-sky-50 dark:ring-sky-600">
        <sup className="mr-0.5 font-bold">{highlight.feature}</sup>
        {highlight.phrase}
      </mark>
      {after}
    </>
  );
}

function VariantCard({
  label,
  sentences,
  step,
}: {
  label: string;
  sentences: SummarySentence[];
  step: number;
}) {
  const showMarks = step >= 1;
  const deleted = step >= 2;
  const remaining = sentences.filter((sentence) => !sentence.narrates).length;

  return (
    <div className="flex-1 rounded-xl border border-line bg-surface p-3 sm:p-4">
      <p className="text-sm font-bold text-ink">{label}</p>
      <ol className="mt-2">
        {sentences.map((sentence) => {
          const gone = deleted && sentence.narrates;
          return (
            <li
              key={sentence.text}
              className={`overflow-hidden ${COLLAPSE} ${gone ? "my-0 max-h-0 opacity-0" : "my-2 max-h-60 opacity-100"}`}
              aria-hidden={gone || undefined}
            >
              <p className={`text-sm leading-relaxed text-ink-body ${showMarks && sentence.narrates ? "line-through decoration-red-500/70 decoration-2" : ""}`}>
                <SentenceText sentence={sentence} showFeatures={step >= 3} />
              </p>
              {showMarks && (
                <p
                  className={`mt-0.5 text-xs font-semibold ${
                    sentence.narrates ? "text-red-800 dark:text-red-300" : "text-emerald-800 dark:text-emerald-300"
                  }`}
                >
                  {sentence.narrates ? "✗ doar povestește („Ce se întâmplă?”)" : "✓ interpretează („Ce înseamnă?”)"}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {deleted && (
        <p className="mt-2 rounded-lg bg-surface-muted px-3 py-2 text-sm font-semibold text-ink">
          {remaining === 0
            ? "După ștergere nu rămâne nimic → rezumat."
            : `După ștergere rămân ${remaining} din ${sentences.length} propoziții → comentariu.`}
        </p>
      )}
    </div>
  );
}

export function RezumatSauComentariu() {
  return (
    <StepFigure
      content={rezumatFigure}
      kicker="Figură interactivă · Rezumat și comentariu"
      renderVisual={(step) => (
        <div className="flex flex-col gap-3 px-1 pb-4 sm:flex-row sm:px-2">
          <VariantCard label="Varianta A" sentences={variantaA} step={step} />
          <VariantCard label="Varianta B" sentences={variantaB} step={step} />
        </div>
      )}
      renderDetails={(step) =>
        step >= 3 ? (
          <ol className="mt-3 space-y-1 text-sm text-ink-body">
            {differenceFeatures.map((feature, index) => (
              <li key={feature} className="flex gap-2">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sky-100 text-xs font-bold text-sky-950 ring-1 ring-sky-400 dark:bg-sky-950 dark:text-sky-50 dark:ring-sky-600">
                  {index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ol>
        ) : null
      }
    />
  );
}
