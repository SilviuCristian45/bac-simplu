// Local persistence of an exercise session (localStorage, this browser only).
// Pure apart from the injected storage, with type imports only, so it can be tested with Node.
import type { Draft, SessionEntry } from "./session-state";
import type { AttemptStatus } from "./summary";
import type { PublicExercise } from "./types";

/** Bump when the stored shape changes; add a migration in `upgrade` or let old data be discarded. */
export const SESSION_STORAGE_VERSION = 1;

export function sessionStorageKey(setKey: string): string {
  return `bac-simplu:exercitii:${setKey}`;
}

/**
 * Stored format, version 1. Only what the student did: no correct answers, explanations or
 * personal data. Entries are keyed by exercise id and tied to the exercise revision.
 */
export type StoredSessionV1 = {
  version: 1;
  setKey: string;
  savedAt: string;
  index: number;
  finished: boolean;
  entries: Record<string, StoredEntryV1>;
};

export type StoredEntryV1 = {
  /** Revision of the exercise when the entry was saved; a different revision resets the entry. */
  revision: string;
  draft: Draft;
  checked: boolean;
  firstStatus: AttemptStatus | null;
  latestStatus: AttemptStatus | null;
  selfAssessment: "met" | "not-met" | null;
};

export type SessionSnapshot = { index: number; finished: boolean; entries: SessionEntry[] };

export type RestoredSession = SessionSnapshot & {
  /** empty: nothing saved; restored: saved data used; discarded: saved data unusable and ignored. */
  outcome: "empty" | "restored" | "discarded";
  /** Saved entries dropped because their exercise changed or their data was invalid. */
  resetCount: number;
};

// Same value as EMPTY_ENTRY in session-state.ts; repeated so this module keeps type-only imports.
const EMPTY_ENTRY: SessionEntry = { draft: null, checked: false, firstStatus: null, latestStatus: null, selfAssessment: null };

const STATUSES: readonly AttemptStatus[] = ["correct", "incorrect", "not-recognized", "self-assessment"];

export function serializeSession(
  setKey: string,
  exercises: Pick<PublicExercise, "id" | "revision">[],
  snapshot: SessionSnapshot,
  now: Date = new Date(),
): string {
  const entries: Record<string, StoredEntryV1> = {};
  exercises.forEach((exercise, position) => {
    const entry = snapshot.entries[position] ?? EMPTY_ENTRY;
    // Untouched exercises are not stored.
    if (!entry.draft && entry.firstStatus === null) return;
    entries[exercise.id] = {
      revision: exercise.revision,
      draft: entry.draft,
      checked: entry.checked,
      firstStatus: entry.firstStatus,
      latestStatus: entry.latestStatus,
      selfAssessment: entry.selfAssessment,
    };
  });
  const stored: StoredSessionV1 = {
    version: SESSION_STORAGE_VERSION,
    setKey,
    savedAt: now.toISOString(),
    index: snapshot.index,
    finished: snapshot.finished,
    entries,
  };
  return JSON.stringify(stored);
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asStatus = (value: unknown): AttemptStatus | null =>
  typeof value === "string" && (STATUSES as readonly string[]).includes(value) ? (value as AttemptStatus) : null;

/** A draft is kept only if it is a possible answer to this exercise as it is now. */
function validDraft(exercise: PublicExercise, value: unknown): Draft | undefined {
  if (value === null) return null;
  if (!isRecord(value) || typeof value.value !== "string") return undefined;
  switch (exercise.type) {
    case "multiple-choice":
      return value.kind === "choice" && exercise.options.some((option) => option.id === value.value)
        ? { kind: "choice", value: value.value }
        : undefined;
    case "true-false":
      return value.kind === "choice" && (value.value === "true" || value.value === "false")
        ? { kind: "choice", value: value.value }
        : undefined;
    case "short-answer":
      return value.kind === "text" && value.value.length <= exercise.maxLength
        ? { kind: "text", value: value.value }
        : undefined;
  }
}

function restoreEntry(exercise: PublicExercise, raw: unknown): SessionEntry | null {
  if (!isRecord(raw) || raw.revision !== exercise.revision) return null;
  const draft = validDraft(exercise, raw.draft);
  if (draft === undefined) return null;

  const firstStatus = asStatus(raw.firstStatus);
  const latestStatus = firstStatus ? asStatus(raw.latestStatus) : null;
  // A checked entry needs the answer that was checked and the statuses the server returned.
  const checked = raw.checked === true && draft !== null && firstStatus !== null && latestStatus !== null;
  const selfAssessment =
    checked && latestStatus === "self-assessment" && (raw.selfAssessment === "met" || raw.selfAssessment === "not-met")
      ? raw.selfAssessment
      : null;

  return { draft, checked, firstStatus, latestStatus: latestStatus ?? firstStatus, selfAssessment };
}

/** Old versions would be migrated here, one step at a time. Unknown versions are discarded. */
function upgrade(data: Record<string, unknown>): Record<string, unknown> | null {
  return data.version === SESSION_STORAGE_VERSION ? data : null;
}

export function restoreSession(raw: string | null, setKey: string, exercises: PublicExercise[]): RestoredSession {
  const empty: RestoredSession = {
    outcome: "empty",
    resetCount: 0,
    index: 0,
    finished: false,
    entries: exercises.map(() => EMPTY_ENTRY),
  };
  if (raw === null) return empty;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ...empty, outcome: "discarded" };
  }
  const data = isRecord(parsed) ? upgrade(parsed) : null;
  if (!data || data.setKey !== setKey || !isRecord(data.entries)) return { ...empty, outcome: "discarded" };

  const stored = data.entries;
  let resetCount = 0;
  const entries = exercises.map((exercise) => {
    if (!Object.hasOwn(stored, exercise.id)) return EMPTY_ENTRY;
    const entry = restoreEntry(exercise, stored[exercise.id]);
    if (!entry) resetCount += 1;
    return entry ?? EMPTY_ENTRY;
  });

  const index =
    typeof data.index === "number" && Number.isInteger(data.index) && data.index >= 0 && data.index < exercises.length
      ? data.index
      : 0;
  // A finished session whose answers were all discarded (for example, the exercises were edited)
  // would show an empty result page, so it starts over instead.
  const nothingLeft = resetCount > 0 && entries.every((entry) => entry === EMPTY_ENTRY);
  return { outcome: "restored", resetCount, index, finished: data.finished === true && !nothingLeft, entries };
}

// ---- Storage access. Every call is guarded: storage may be missing, blocked or full.

export type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

/** ok: saving works; unavailable: no usable storage; failed: storage exists but the last write failed. */
export type StorageStatus = "ok" | "unavailable" | "failed";

export type SessionStore = {
  read: () => string | null;
  write: (value: string) => void;
  clear: () => void;
  getStatus: () => StorageStatus;
  subscribe: (listener: () => void) => () => void;
};

export function createSessionStore(getStorage: () => StorageLike | null, key: string): SessionStore {
  const listeners = new Set<() => void>();
  let storage: StorageLike | null = null;
  try {
    storage = getStorage();
    // Some browsers expose localStorage but throw on write (private mode, policies, quota).
    storage?.setItem(`${key}:test`, "1");
    storage?.removeItem(`${key}:test`);
  } catch {
    storage = null;
  }
  let status: StorageStatus = storage ? "ok" : "unavailable";

  const setStatus = (next: StorageStatus) => {
    if (next === status) return;
    status = next;
    listeners.forEach((listener) => listener());
  };

  return {
    read: () => {
      try {
        return storage?.getItem(key) ?? null;
      } catch {
        return null;
      }
    },
    write: (value) => {
      if (!storage) return;
      try {
        storage.setItem(key, value);
        setStatus("ok");
      } catch {
        setStatus("failed");
      }
    },
    clear: () => {
      try {
        storage?.removeItem(key);
      } catch {
        setStatus("failed");
      }
    },
    getStatus: () => status,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
