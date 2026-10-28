/**
 * Brand constants shared by the header mark, the icon files and the generated images.
 * The mark is an open book on the accent colour, drawn on a 64×64 grid.
 */
export const BRAND_ACCENT = "#2459d6";
export const BRAND_ON_ACCENT = "#ffffff";
export const BRAND_MARK_VIEWBOX = "0 0 64 64";

/** Left and right page of the open book; the gap between them is the spine. */
export const BRAND_MARK_PAGES = [
  "M31 20C26 16.5 19 15.5 13 17V45C19 43.5 26 44.5 31 48Z",
  "M33 20C38 16.5 45 15.5 51 17V45C45 43.5 38 44.5 33 48Z",
] as const;
