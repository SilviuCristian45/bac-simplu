import { BRAND_MARK_PAGES, BRAND_MARK_VIEWBOX } from "@/lib/site/brand";

/** Decorative monogram: an open book. The site name next to it carries the meaning. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={BRAND_MARK_VIEWBOX}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {BRAND_MARK_PAGES.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
