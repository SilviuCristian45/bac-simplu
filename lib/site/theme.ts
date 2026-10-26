/** Theme preference shared by the inline boot script and the theme switcher. */
export const THEME_STORAGE_KEY = "bac-simplu-tema";
export const THEME_CHANGE_EVENT = "bac-simplu-tema";

export const THEME_PREFERENCES = ["light", "dark", "system"] as const;
export type ThemePreference = (typeof THEME_PREFERENCES)[number];
export type ResolvedTheme = "light" | "dark";

export function isThemePreference(value: unknown): value is ThemePreference {
  return typeof value === "string" && (THEME_PREFERENCES as readonly string[]).includes(value);
}

/**
 * Runs in <head> before the page is painted, so the saved theme never flashes.
 * It sets data-theme on <html> and keeps following the system while the preference is "system".
 * Kept dependency-free and wrapped in try/catch: storage can be blocked (private mode, policies).
 */
export const themeBootScript = `(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var unsaved = null;
  function preference() {
    if (unsaved) return unsaved;
    try {
      var saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
      if (saved === "light" || saved === "dark" || saved === "system") return saved;
    } catch (error) {}
    return "system";
  }
  function apply() {
    var pref = preference();
    var resolved = pref === "system" ? (media.matches ? "dark" : "light") : pref;
    root.setAttribute("data-theme", resolved);
    root.setAttribute("data-theme-preference", pref);
    root.style.colorScheme = resolved;
  }
  apply();
  media.addEventListener("change", apply);
  window.addEventListener("storage", function (event) {
    if (event.key === ${JSON.stringify(THEME_STORAGE_KEY)}) apply();
  });
  window.addEventListener(${JSON.stringify(THEME_CHANGE_EVENT)}, function (event) {
    if (event.detail === "light" || event.detail === "dark" || event.detail === "system") unsaved = event.detail;
    apply();
  });
})();`;
