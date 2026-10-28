import type { MetadataRoute } from "next";
import { OPERA_SLUGS } from "@/lib/content/romana-opere-slugs";
import { getRomanaOperaSlugsWithExercises } from "@/lib/exercises/registry";
import { getSiteUrl } from "@/lib/site/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  // Without a configured SITE_URL the real addresses are unknown: publish no entries.
  if (!siteUrl) return [];

  const withExercises = new Set<string>(getRomanaOperaSlugsWithExercises());
  const paths = [
    "/",
    "/romana/opere",
    ...OPERA_SLUGS.flatMap((slug) => [
      `/romana/opere/${slug}`,
      ...(withExercises.has(slug) ? [`/romana/opere/${slug}/exercitii`] : []),
    ]),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
