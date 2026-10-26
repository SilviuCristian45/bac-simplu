"use client";

import { useEffect, useId, useRef, useState } from "react";

type ConfirmResetProps = {
  label: string;
  /** Without saved progress there is nothing to lose, so the action runs without asking. */
  needsConfirmation: boolean;
  onConfirm: () => void;
  variant?: "primary" | "secondary";
};

/** Button that asks for confirmation, inline, before erasing the session progress. */
export function ConfirmReset({ label, needsConfirmation, onConfirm, variant = "secondary" }: ConfirmResetProps) {
  const [asking, setAsking] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (asking) cancelRef.current?.focus();
    else if (restoreFocus.current) {
      restoreFocus.current = false;
      triggerRef.current?.focus();
    }
  }, [asking]);

  const cancel = () => {
    restoreFocus.current = true;
    setAsking(false);
  };

  const triggerClass =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      : "rounded-lg border border-line-strong px-3 py-2 text-sm font-semibold text-ink-body hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  if (!asking) {
    return (
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (needsConfirmation ? setAsking(true) : onConfirm())}
        className={triggerClass}
      >
        {label}
      </button>
    );
  }

  return (
    // Inline confirmation, not a modal: focus moves to „Renunță”, Escape cancels, Tab may leave it.
    <div
      role="group"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onKeyDown={(event) => {
        if (event.key === "Escape") cancel();
      }}
      className="w-full rounded-xl border-l-4 border-amber-600 bg-amber-50 p-4 text-amber-950 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-50"
    >
      <p id={titleId} className="font-semibold">
        Ștergi progresul salvat și începi o sesiune nouă?
      </p>
      <p id={descriptionId} className="mt-1 text-sm leading-relaxed">
        Răspunsurile și rezultatele de până acum vor fi șterse din acest browser. Acțiunea nu poate fi anulată.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setAsking(false);
            onConfirm();
          }}
          className="rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-red-600 dark:hover:bg-red-700"
        >
          Da, șterge progresul
        </button>
        <button
          ref={cancelRef}
          type="button"
          onClick={cancel}
          className="rounded-lg border border-current px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Renunță
        </button>
      </div>
    </div>
  );
}
