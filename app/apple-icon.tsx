import { ImageResponse } from "next/og";
import { BrandSquare } from "@/lib/site/brand-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<BrandSquare size={size.width} />, size);
}
