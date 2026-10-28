/**
 * Public address of the site, read from the SITE_URL environment variable (for example
 * https://exemplu.ro). No production address is configured in the repository, so when the
 * variable is missing or invalid this returns null and callers use a safe fallback.
 */
export function getSiteUrl(): URL | null {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.protocol === "http:" ? url : null;
  } catch {
    return null;
  }
}

/** Only used to resolve relative metadata URLs during development and local builds. */
export const FALLBACK_SITE_URL = "http://localhost:3000";
