"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content/headings";

/**
 * Lesson table of contents. The links are plain anchors and work without JavaScript;
 * on the client it additionally marks the section currently being read.
 */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    // The active section is the last heading that has scrolled past the top zone
    // (just below the sticky site header). Recomputed at most once per frame while scrolling,
    // so it is also correct when a smooth scroll to an anchor comes to rest.
    const threshold = 120;
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string | null = elements[0].id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top - threshold <= 0) current = element.id;
        else break;
      }
      setActiveId(current);
    };
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, [headings]);

  return (
    <ol className="space-y-0.5 text-sm">
      {headings.map((heading) => {
        const isActive = heading.id === activeId;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`block rounded-md border-l-2 py-1.5 pr-2 leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${
                heading.level === 3 ? "pl-6" : "pl-3 font-medium"
              } ${
                isActive
                  ? "border-blue-600 bg-blue-50 text-blue-800 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-200"
                  : "border-transparent text-ink-body hover:bg-zinc-100 hover:text-ink dark:hover:bg-zinc-800/60 "
              }`}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
