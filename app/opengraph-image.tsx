import { ImageResponse } from "next/og";
import { BRAND_ACCENT } from "@/lib/site/brand";
import { BrandGlyph } from "@/lib/site/brand-image";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site/home";

export const alt = `${SITE_NAME} — Bacalaureatul la Română`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: BRAND_ACCENT,
          color: "#ffffff",
        }}
      >
        <BrandGlyph size={140} />
        <div style={{ marginTop: 40, fontSize: 96, fontWeight: 700 }}>{SITE_NAME}</div>
        <div style={{ marginTop: 16, fontSize: 48 }}>{SITE_TAGLINE}</div>
      </div>
    ),
    size,
  );
}
