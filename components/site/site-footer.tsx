import { SITE_NAME } from "@/lib/site/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-semibold text-ink">{SITE_NAME}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
          Materiale de pregătire pentru examenul de Bacalaureat din România. Platforma este în
          dezvoltare, iar conținutul este verificat treptat.
        </p>
      </div>
    </footer>
  );
}
