import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site/url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    // A sitemap with made-up addresses would be worse than none, so it is listed only
    // when SITE_URL is configured.
    ...(siteUrl && { sitemap: new URL("/sitemap.xml", siteUrl).toString() }),
  };
}
