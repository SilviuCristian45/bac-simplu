import { BRAND_ACCENT, BRAND_MARK_PAGES, BRAND_MARK_VIEWBOX, BRAND_ON_ACCENT } from "./brand";

/** The mark as inline SVG, in a form that next/og can render. `size` is in pixels. */
export function BrandGlyph({ size, color = BRAND_ON_ACCENT }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox={BRAND_MARK_VIEWBOX} fill={color}>
      {BRAND_MARK_PAGES.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/** Full-bleed square icon: the glyph stays inside the safe zone, so it also works as maskable. */
export function BrandSquare({ size }: { size: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND_ACCENT,
      }}
    >
      <BrandGlyph size={Math.round(size * 0.78)} />
    </div>
  );
}
