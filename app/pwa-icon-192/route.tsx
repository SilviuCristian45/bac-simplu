import { ImageResponse } from "next/og";
import { BrandSquare } from "@/lib/site/brand-image";

const SIZE = 192;

export function GET() {
  return new ImageResponse(<BrandSquare size={SIZE} />, { width: SIZE, height: SIZE });
}
