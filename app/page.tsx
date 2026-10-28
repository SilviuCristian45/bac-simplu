import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/home/icons";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { shortTitle } from "@/lib/content/lesson";
import { getAllOperaMeta } from "@/lib/content/romana-opere";
import { SITE_DESCRIPTION, SITE_TAGLINE, SITE_TITLE, STEPS } from "@/lib/site/home";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
};

export default async function Home() {
  const opere = await getAllOperaMeta();

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-blue-100),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-blue-900)_45%,transparent),transparent_65%)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
            <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase ">
              Bacalaureatul la Limba și literatura română
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              {SITE_TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-body sm:text-xl">
              Lecții despre operele studiate, construite pornind de la programa și baremele
              oficiale. Înveți teoria pe înțelesul tău, apoi verifici ce ai reținut cu exerciții
              și explicații.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/romana/opere"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Vezi operele
                <ArrowRightIcon className="size-4" />
              </Link>
              <a
                href="#cum-functioneaza"
                className="inline-flex items-center justify-center rounded-xl border border-line-strong bg-surface/70 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Cum funcționează
              </a>
            </div>
          </div>
        </section>

        <section
          id="opere"
          aria-labelledby="opere-titlu"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
        >
          <h2 id="opere-titlu" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Operele din platformă
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            Fiecare operă are o lecție de teorie și un set de exerciții. Lecțiile sunt în curs de
            verificare: nu au fost încă validate de un profesor.
          </p>
          {opere.length === 0 ? (
            <p className="mt-10">Nu există încă lecții publicate.</p>
          ) : (
            <ul className="mt-10 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {opere.map((opera) => (
                <li key={opera.id}>
                  <Link
                    href={`/romana/opere/${opera.slug}`}
                    className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="font-semibold text-ink">{shortTitle(opera)}</span>
                    <span className="text-sm text-ink-muted">{opera.author}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/romana/opere"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Vezi toate lecțiile
            <ArrowRightIcon className="size-4" />
          </Link>
        </section>

        <section
          id="cum-functioneaza"
          aria-labelledby="cum-functioneaza-titlu"
          className="scroll-mt-20 border-t border-line bg-surface-muted"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2
              id="cum-functioneaza-titlu"
              className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Cum funcționează
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
              Trei pași simpli, pentru fiecare operă: teoria, exercițiile și explicațiile
              răspunsurilor.
            </p>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-line bg-surface p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-full bg-accent text-base font-bold text-white"
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    <span className="sr-only">Pasul {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
