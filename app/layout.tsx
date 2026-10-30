import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Literata } from "next/font/google";
import { BRAND_ACCENT } from "@/lib/site/brand";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/site/home";
import { themeBootScript } from "@/lib/site/theme";
import { FALLBACK_SITE_URL, getSiteUrl } from "@/lib/site/url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

// SITE_URL (see lib/site/url.ts) is the production address; the fallback only resolves
// relative URLs locally.
export const metadata: Metadata = {
  metadataBase: getSiteUrl() ?? new URL(FALLBACK_SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ro_RO",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: BRAND_ACCENT,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The boot script sets data-theme on <html> before hydration, hence suppressHydrationWarning.
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${literata.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
