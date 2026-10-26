import { NextResponse, type NextRequest } from "next/server";
import { isOperaSlug } from "@/lib/content/romana-opere-slugs";

// With cacheComponents, /romana/opere/[slug] starts streaming before the page can call
// notFound(), so an unknown slug would get HTTP 200. Checking the slug here, before
// rendering, lets unknown slugs fall through to the root not-found page with a real 404.
// Paths starting with "_" are private folders in the App Router and never match a route.
const NO_ROUTE_PATH = "/_pagina-inexistenta";

function readSlug(pathname: string): string | null {
  const segment = pathname.split("/")[3];
  if (!segment) return null;
  try {
    return decodeURIComponent(segment);
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const slug = readSlug(request.nextUrl.pathname);
  if (slug !== null && isOperaSlug(slug)) return NextResponse.next();

  return NextResponse.rewrite(new URL(NO_ROUTE_PATH, request.url));
}

export const config = {
  matcher: ["/romana/opere/:slug", "/romana/opere/:slug/exercitii"],
};
