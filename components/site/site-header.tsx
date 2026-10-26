import Link from "next/link";
import { SITE_NAME } from "@/lib/site/home";
import { ThemeToggle } from "./theme-toggle";

const navLinkClass =
  "rounded-md px-2 py-1.5 text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-white"
          >
            B
          </span>
          <span className="text-base sm:text-lg">{SITE_NAME}</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
        <nav aria-label="Navigare principală">
          <ul className="flex items-center gap-1 text-sm font-medium sm:gap-2">
            <li>
              <Link href="/#materii" className={navLinkClass}>
                Materii
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link href="/#cum-functioneaza" className={navLinkClass}>
                Cum funcționează
              </Link>
            </li>
            <li>
              <Link href="/romana/opere" className={navLinkClass}>
                Opere
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
