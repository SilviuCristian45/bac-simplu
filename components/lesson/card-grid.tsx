import type { ReactNode } from "react";

/**
 * Wraps a Markdown list in a lesson and shows its items as compact cards (two columns from
 * the small breakpoint). The text stays in the MDX file; only the presentation changes.
 * A leading bold label („**Autor:**”) becomes the card's small heading; lesson labels
 * („**Despre roman**”, „**Interpretare**”…) keep their chip.
 */
export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 [&>ul]:my-0 [&>ul]:list-none [&>ul]:gap-3 [&>ul]:pl-0 sm:[&>ul]:columns-2 [&>ul>li]:mb-3 [&>ul>li]:break-inside-avoid [&>ul>li]:rounded-xl [&>ul>li]:border [&>ul>li]:border-line [&>ul>li]:bg-surface [&>ul>li]:px-4 [&>ul>li]:py-3 [&>ul>li]:text-base [&>ul>li]:transition-colors [&>ul>li]:duration-200 [&>ul>li:hover]:border-line-strong motion-reduce:[&>ul>li]:transition-none [&>ul>li>strong:first-child:not([data-label])]:mb-0.5 [&>ul>li>strong:first-child:not([data-label])]:block [&>ul>li>strong:first-child:not([data-label])]:text-xs [&>ul>li>strong:first-child:not([data-label])]:tracking-wide [&>ul>li>strong:first-child:not([data-label])]:text-ink-muted [&>ul>li>strong:first-child:not([data-label])]:uppercase">
      {children}
    </div>
  );
}
