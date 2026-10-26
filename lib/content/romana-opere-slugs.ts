/**
 * Slugs of the published works under /romana/opere.
 * Kept free of MDX imports so that proxy.ts can use it without bundling lesson content.
 */
export const OPERA_SLUGS = ["ion", "moara-cu-noroc", "povestea-lui-harap-alb"] as const;

export type OperaSlug = (typeof OPERA_SLUGS)[number];

export function isOperaSlug(value: string): value is OperaSlug {
  return OPERA_SLUGS.some((slug) => slug === value);
}
