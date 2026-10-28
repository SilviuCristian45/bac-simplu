import { ImageResponse } from "next/og";
import { BrandSquare } from "@/lib/site/brand-image";

const SIZE = 512;

export function GET() {
  return new ImageResponse(<BrandSquare size={SIZE} />, { width: SIZE, height: SIZE });
}
