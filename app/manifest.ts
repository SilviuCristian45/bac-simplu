import type { MetadataRoute } from "next";
import { BRAND_ACCENT } from "@/lib/site/brand";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site/home";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    lang: "ro",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: BRAND_ACCENT,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/pwa-icon-192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa-icon-512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa-icon-512", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
