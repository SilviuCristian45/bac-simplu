import { SITE_NAME, SITE_TAGLINE } from "@/lib/site/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-semibold text-ink">{SITE_NAME} · {SITE_TAGLINE}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
          Materiale gratuite pentru pregătirea examenului de Bacalaureat la Limba și literatura română. Platforma este în
          dezvoltare, iar conținutul este verificat treptat.
        </p>
      </div>
    </footer>
  );
}
