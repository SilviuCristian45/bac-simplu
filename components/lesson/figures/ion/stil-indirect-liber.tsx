"use client";

import { Appear } from "@/components/lesson/interactive/appear";
import { FigureTag, StepFigure } from "@/components/lesson/interactive/step-figure";
import { speechFigure, speechForms, type SpeechForm } from "@/content/romana/opere/ion-figuri";

type Lane = "narator" | "ambele" | "personaj";

const LANES: { id: Lane; title: string; className: string }[] = [
  {
    id: "narator",
    title: "Vocea naratorului",
    className: "border-line-strong bg-surface-muted",
  },
  {
    id: "ambele",
    title: "Vocile se suprapun",
    className:
      "border-violet-300 bg-linear-to-r from-zinc-50 to-violet-50 dark:border-violet-700 dark:from-zinc-800/70 dark:to-violet-950/60",
  },
  {
    id: "personaj",
    title: "Gândul personajului",
    className: "border-violet-300 bg-violet-50 dark:border-violet-700 dark:bg-violet-950/60",
  },
];

function laneContent(form: SpeechForm, lane: Lane) {
  const pieces: { key: string; text: string; voice: "narator" | "personaj" | "amestec" }[] = [];
  if (lane === "narator" && form.narrator) pieces.push({ key: "intro", text: form.narrator, voice: "narator" });
  if (form.lane === lane) {
    pieces.push({
      key: "gand",
      text: form.thought,
      voice: lane === "ambele" ? "amestec" : lane === "personaj" ? "personaj" : "narator",
    });
  }
  return pieces;
}

const VOICE_STYLE = {
  narator: "border-zinc-400 bg-surface text-ink dark:border-zinc-500",
  personaj: "border-violet-500 bg-surface text-violet-950 dark:border-violet-400 dark:text-violet-100",
  amestec:
    "border-violet-500 bg-linear-to-r from-white to-violet-100 text-ink dark:border-violet-400 dark:from-zinc-900 dark:to-violet-950",
};

function SpeechVisual({ step }: { step: number }) {
  const form = speechForms[Math.min(step, speechForms.length - 1)];
  const isRecognition = step >= speechForms.length;

  return (
    <div className="px-1 pb-4 sm:px-2">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink">{form.label}</span>
        <FigureTag kind={form.tag} />
        {form.tag === "citat" && <span className="text-xs text-ink-muted">capitolul III</span>}
      </div>

      <div className="space-y-2">
        {LANES.map((lane) => {
          const pieces = laneContent(form, lane.id);
          return (
            <div key={lane.id} className={`rounded-xl border-2 border-dashed p-2.5 sm:p-3 ${lane.className}`}>
              <p className="text-[0.7rem] font-semibold tracking-wide text-ink-body uppercase">{lane.title}</p>
              <div className="mt-1.5 flex min-h-9 flex-wrap items-center gap-2">
                {pieces.length === 0 ? (
                  <span className="text-sm text-ink-muted italic">—</span>
                ) : (
                  pieces.map((piece) => (
                    <Appear key={`${form.id}-${piece.key}`}>
                      <span className={`inline-block rounded-lg border-2 px-2.5 py-1.5 text-sm leading-relaxed ${VOICE_STYLE[piece.voice]}`}>
                        {piece.text}
                      </span>
                    </Appear>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      <dl className={`mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 ${isRecognition ? "rounded-xl ring-2 ring-sky-500/60 p-2" : ""}`}>
        {form.markers.map((marker) => (
          <div key={marker.label} className="flex flex-wrap items-start gap-x-1.5 gap-y-0.5 rounded-lg bg-surface px-2.5 py-2 text-sm ring-1 ring-line">
            <dt className="flex items-start gap-2 font-semibold text-ink">
              <span
                aria-hidden="true"
                className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  marker.present
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    : "bg-zinc-200 text-ink-body dark:bg-zinc-700 "
                }`}
              >
                {marker.present ? "✓" : "–"}
              </span>
              {marker.label}:
            </dt>
            <dd className="text-ink-body">{marker.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function StilIndirectLiber() {
  return (
    <StepFigure
      content={speechFigure}
      kicker="Figură interactivă · Perspectivă narativă"
      renderVisual={(step) => <SpeechVisual step={step} />}
    />
  );
}
