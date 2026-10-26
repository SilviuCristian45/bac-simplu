import type { ReactNode } from "react";
import { matchContentLabel } from "./content-labels";
import { LABEL_CHIP } from "./label-styles";

type DisclosureProps = {
  /** Always-visible title: says what is inside, so the essential idea is readable while closed. */
  title: string;
  /** Lesson labels shown as chips above the title, comma-separated („Cerință oficială”). */
  labels?: string;
  /** Short line under the title while closed. */
  hint?: string;
  children: ReactNode;
};

/**
 * A collapsible block for long material that the reader may open when needed (official texts and
 * their sources, reading notes). Native <details>: keyboard accessible, works without JavaScript,
 * and the browser's find-in-page opens it. Closed by default; nothing inside is removed.
 */
export function Disclosure({ title, labels, hint = "Deschide pentru textul complet și sursă", children }: DisclosureProps) {
  const chips = (labels ?? "")
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean);

  return (
    <details className="group my-4 rounded-xl border border-line bg-surface open:border-line-strong">
      <summary className="flex min-h-11 cursor-pointer list-none items-start gap-3 rounded-xl px-4 py-3 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          {chips.length > 0 && (
            <span className="mb-1.5 flex flex-wrap gap-1.5">
              {chips.map((label) => {
                const kind = matchContentLabel(label);
                return (
                  <span
                    key={label}
                    className={`inline-block rounded-md px-1.5 py-0.5 text-xs leading-snug font-semibold ${
                      kind ? LABEL_CHIP[kind] : "bg-surface-muted text-ink-body"
                    }`}
                  >
                    {label}
                  </span>
                );
              })}
            </span>
          )}
          <span className="block leading-snug font-semibold text-ink">{title}</span>
          <span className="mt-1 block text-sm text-ink-muted group-open:hidden">{hint}</span>
          <span className="mt-1 hidden text-sm text-ink-muted group-open:block">Restrânge</span>
        </span>
        <span
          aria-hidden="true"
          className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-muted transition-transform duration-150 group-open:rotate-180 motion-reduce:transition-none"
        >
          ▾
        </span>
      </summary>
      <div className="border-t border-line px-4 sm:px-5 [&>*:first-child]:mt-4 [&>*:last-child]:mb-4">{children}</div>
    </details>
  );
}
