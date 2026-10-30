"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowRightIcon } from "@/components/home/icons";

export type ContinueCandidate = {
  slug: string;
  shortTitle: string;
  exerciseCount: number;
  /** Key under which the exercise session of this work is saved (sessionStorageKey). */
  storageKey: string;
};

type Resume = { slug: string; shortTitle: string; position: number; total: number };

/**
 * Reads, without writing, the sessions the exercise pages already save in this browser and picks
 * the most recently saved unfinished one. Anything unreadable is ignored: the strip simply
 * does not appear.
 */
function findResume(candidates: ContinueCandidate[]): Resume | null {
  let best: { savedAt: number; resume: Resume } | null = null;
  for (const candidate of candidates) {
    try {
      const raw = window.localStorage.getItem(candidate.storageKey);
      if (raw === null) continue;
      const data: unknown = JSON.parse(raw);
      if (typeof data !== "object" || data === null) continue;
      const record = data as Record<string, unknown>;
      if (record.version !== 1 || record.finished !== false) continue;
      if (typeof record.entries !== "object" || record.entries === null || Object.keys(record.entries).length === 0) continue;
      const savedAt = typeof record.savedAt === "string" ? Date.parse(record.savedAt) : Number.NaN;
      if (Number.isNaN(savedAt)) continue;
      const index = typeof record.index === "number" && Number.isInteger(record.index) ? record.index : 0;
      const position = Math.min(Math.max(index, 0), candidate.exerciseCount - 1) + 1;
      if (!best || savedAt > best.savedAt) {
        best = {
          savedAt,
          resume: { slug: candidate.slug, shortTitle: candidate.shortTitle, position, total: candidate.exerciseCount },
        };
      }
    } catch {
      // Storage blocked or data malformed: no strip.
    }
  }
  return best?.resume ?? null;
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

/** "Continue where you left off": shown only when this browser holds an unfinished exercise session. */
export function ContinueStrip({ candidates }: { candidates: ContinueCandidate[] }) {
  // A string snapshot keeps getSnapshot stable between renders; the server and hydration see "".
  const snapshot = useSyncExternalStore(
    subscribe,
    () => {
      const resume = findResume(candidates);
      return resume ? JSON.stringify(resume) : "";
    },
    () => "",
  );
  if (snapshot === "") return null;
  const resume = JSON.parse(snapshot) as Resume;

  return (
    <aside aria-label="Continuă exercițiile" className="mt-8 max-w-2xl">
      <Link
        href={`/romana/opere/${resume.slug}/exercitii`}
        className="group flex items-center justify-between gap-4 rounded-xl border border-line-strong bg-surface px-4 py-3 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        <span>
          <span className="block text-xs font-semibold tracking-wide text-ink-muted uppercase">
            Continuă de unde ai rămas
          </span>
          <span className="block font-serif text-lg font-semibold text-ink">
            {resume.shortTitle}
            <span className="font-sans text-sm font-normal text-ink-body">
              {" "}
              · exercițiul {resume.position} din {resume.total}
            </span>
          </span>
        </span>
        <ArrowRightIcon className="size-5 shrink-0 text-accent-ink transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </Link>
    </aside>
  );
}
