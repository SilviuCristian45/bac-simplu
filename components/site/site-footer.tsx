import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site/home";

const footerLink =
  "rounded text-ink-body underline decoration-line-strong underline-offset-4 hover:text-ink hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <p className="font-serif text-xl font-semibold text-ink">{SITE_NAME}</p>
          <p className="mt-1 text-ink-body">{SITE_TAGLINE}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
            Materiale gratuite pentru pregătirea examenului de Bacalaureat la Limba și literatura
            română. Platforma este în dezvoltare, iar conținutul este verificat treptat.
          </p>
        </div>
        <div className="text-sm">
          <nav aria-label="Subsol">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link href="/romana/opere" className={footerLink}>
                  Opere
                </Link>
              </li>
              <li>
                <Link href="/#lectie" className={footerLink}>
                  Cum arată o lecție
                </Link>
              </li>
              <li>
                <Link href="/#stadiu" className={footerLink}>
                  Stadiul conținutului
                </Link>
              </li>
            </ul>
          </nav>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
            Cerințele de examen din lecții sunt marcate cu eticheta „Cerință oficială” și se
            raportează la documentele oficiale (programa de examen, subiectele și baremele). Unele
            imagini din lecții sunt generate cu inteligență artificială și sunt marcate ca atare.
          </p>
        </div>
      </div>
    </footer>
  );
}
