import type { RestoredSession, StorageStatus } from "@/lib/exercises/session-storage";

type StorageNoticeProps = {
  status: StorageStatus;
  /** How the session started; null once the reader has started a new session. */
  restored: Pick<RestoredSession, "outcome" | "resetCount"> | null;
  checkedCount: number;
};

/** Tells the student where the progress is kept, and what happened to the saved progress. */
export function StorageNotice({ status, restored, checkedCount }: StorageNoticeProps) {
  const messages: string[] = [];
  if (restored?.outcome === "restored" && checkedCount > 0) {
    messages.push(
      `Ai continuat sesiunea salvată: ${checkedCount} ${checkedCount === 1 ? "exercițiu verificat" : "exerciții verificate"}.`,
    );
  }
  if (restored && restored.resetCount > 0) {
    messages.push(
      restored.resetCount === 1
        ? "Un exercițiu s-a schimbat de la ultima vizită, așa că progresul la el a fost resetat."
        : `${restored.resetCount} exerciții s-au schimbat de la ultima vizită, așa că progresul la ele a fost resetat.`,
    );
  }
  if (restored?.outcome === "discarded") {
    messages.push("Progresul salvat anterior nu a putut fi citit (format vechi sau deteriorat), așa că ai început o sesiune nouă.");
  }

  const warning =
    status === "unavailable"
      ? "Progresul nu poate fi salvat: stocarea locală este blocată sau indisponibilă în acest browser (de exemplu, în unele moduri private). Poți rezolva exercițiile, dar progresul se pierde la reîncărcarea paginii."
      : status === "failed"
        ? "Ultima salvare a progresului a eșuat (stocarea locală este plină sau blocată). Poți continua, dar progresul recent poate să nu fie păstrat la reîncărcare."
        : null;

  return (
    <div className="space-y-2 text-sm" role="status">
      {warning ? (
        <p className="rounded-lg border-l-4 border-amber-600 bg-amber-50 px-3 py-2 leading-relaxed text-amber-950 dark:border-amber-400 dark:bg-amber-950/50 dark:text-amber-50">
          <span aria-hidden="true">⚠ </span>
          {warning}
        </p>
      ) : (
        <p className="leading-relaxed text-ink-muted">
          Progresul se salvează automat doar în acest browser, pe acest dispozitiv. Nu se sincronizează între
          dispozitive și nu conține date personale.
        </p>
      )}
      {messages.length > 0 && (
        <p className="rounded-lg border-l-4 border-accent bg-accent-soft px-3 py-2 leading-relaxed text-ink">{messages.join(" ")}</p>
      )}
    </div>
  );
}
