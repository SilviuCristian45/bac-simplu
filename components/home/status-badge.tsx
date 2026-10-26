const TONES = {
  available:
    "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  soon: "border-line bg-surface-muted text-ink-body",
} as const;

export function StatusBadge({ tone, children }: { tone: keyof typeof TONES; children: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
