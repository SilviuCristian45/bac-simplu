import Link from "next/link";
import { ArrowRightIcon } from "@/components/home/icons";
import { LabelChip } from "@/components/home/label-chip";
import {
  SPECIMEN_LESSON_HREF,
  SPECIMEN_LESSON_TITLE,
  SPECIMEN_OFFICIAL,
} from "@/lib/site/specimen";

/** A real fragment of the „Ion” lesson, set like a page: shows the product instead of describing it. */
export function HeroSpecimen() {
  return (
    <figure className="relative m-0 rounded-sm border border-line bg-surface px-5 pt-5 pb-4 shadow-[0_1px_0_var(--line),0_14px_30px_-18px_rgb(60_45_10/0.35)] sm:px-7 sm:pt-6 dark:shadow-[0_14px_30px_-18px_rgb(0_0_0/0.8)]">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-3 w-px bg-red-700/25 sm:left-4 dark:bg-red-400/25"
      />
      <figcaption className="pl-3 text-xs font-semibold tracking-wide text-ink-muted uppercase">
        Fragment din lecția {SPECIMEN_LESSON_TITLE}
      </figcaption>
      <div className="mt-3 pl-3">
        <LabelChip kind={SPECIMEN_OFFICIAL.kind}>{SPECIMEN_OFFICIAL.label}</LabelChip>
        <blockquote className="m-0 mt-2 font-serif text-lg leading-relaxed text-ink">
          {SPECIMEN_OFFICIAL.text}
        </blockquote>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Sursa: {SPECIMEN_OFFICIAL.source}.
        </p>
        <Link
          href={SPECIMEN_LESSON_HREF}
          className="mt-3 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Deschide lecția
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </figure>
  );
}
