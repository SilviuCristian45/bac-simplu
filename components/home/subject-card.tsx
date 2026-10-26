import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import type { Subject, SubjectId } from "@/lib/site/home";
import { ArrowRightIcon, BookIcon, CodeIcon, FunctionIcon } from "./icons";
import { StatusBadge } from "./status-badge";

const SUBJECT_ICONS: Record<SubjectId, ComponentType<SVGProps<SVGSVGElement>>> = {
  romana: BookIcon,
  matematica: FunctionIcon,
  informatica: CodeIcon,
};

export function SubjectCard({ subject }: { subject: Subject }) {
  const Icon = SUBJECT_ICONS[subject.id];
  const available = subject.link !== undefined;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
        available
          ? "border-line bg-surface shadow-sm transition-shadow hover:shadow-md "
          : "border-line bg-zinc-50 dark:bg-zinc-900/50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid size-12 place-items-center rounded-xl ${
            available
              ? "bg-blue-50 text-accent-ink dark:bg-blue-950 "
              : "bg-zinc-200/70 text-ink-muted dark:bg-zinc-800 "
          }`}
        >
          <Icon className="size-6" />
        </span>
        <StatusBadge tone={available ? "available" : "soon"}>
          {available ? "Disponibil" : "În curând"}
        </StatusBadge>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-ink">{subject.title}</h3>
      <p className="mt-2 leading-relaxed text-ink-muted">{subject.description}</p>
      {subject.note && (
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{subject.note}</p>
      )}

      {subject.link && (
        <div className="mt-auto pt-6">
          <Link
            href={subject.link.href}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {subject.link.label}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      )}
    </article>
  );
}
