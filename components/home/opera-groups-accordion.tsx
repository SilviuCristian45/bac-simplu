"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";

export type AccordionGroup = { id: string; title: string; count: number; panel: ReactNode };

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeDesktop(onChange: () => void): () => void {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// The server and hydration assume the narrow layout; CSS (md:block) shows every panel on wide screens regardless.
const useIsDesktop = () =>
  useSyncExternalStore(subscribeDesktop, () => window.matchMedia(DESKTOP_QUERY).matches, () => false);

function countLabel(count: number): string {
  return `${count} ${count === 1 ? "operă" : "opere"}`;
}

const HEADING = "text-2xl font-semibold tracking-tight text-ink";

/**
 * Genre groups: always expanded from 768px up, collapsible below it with the first group open.
 * The panels are rendered on the server and passed in; this component only owns the open/closed state.
 */
export function OperaGroupsAccordion({ groups, idPrefix }: { groups: AccordionGroup[]; idPrefix: string }) {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(groups.slice(0, 1).map((group) => group.id)));

  const toggle = (id: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  const reveal = (id: string) => setOpen((current) => (current.has(id) ? current : new Set(current).add(id)));

  return (
    <>
      <nav aria-label="Grupe de opere" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {groups.map((group) => (
            <li key={group.id}>
              <a
                href={`#${idPrefix}-${group.id}`}
                onClick={() => reveal(group.id)}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line-strong px-3.5 text-sm font-semibold text-ink-body transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                {group.title}
                <span className="font-normal text-ink-muted">{group.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-6 md:space-y-10">
        {groups.map((group) => {
          const expanded = open.has(group.id);
          const panelId = `${idPrefix}-${group.id}-panel`;
          return (
            <section key={group.id} aria-labelledby={`${idPrefix}-${group.id}`} className="scroll-mt-24">
              <h3 id={`${idPrefix}-${group.id}`} className={`border-b border-line-strong ${HEADING}`}>
                {isDesktop ? (
                  <span className="flex items-baseline gap-3 pb-2">
                    {group.title}
                    <span className="font-sans text-sm font-normal text-ink-muted">{countLabel(group.count)}</span>
                  </span>
                ) : (
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => toggle(group.id)}
                    className="flex min-h-12 w-full items-center gap-3 rounded text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="flex-1">
                      {group.title}
                      <span className="ml-3 font-sans text-sm font-normal text-ink-muted">{countLabel(group.count)}</span>
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-ink-muted transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                )}
              </h3>
              <div id={panelId} className={expanded ? "block" : "hidden md:block"}>
                {group.panel}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
