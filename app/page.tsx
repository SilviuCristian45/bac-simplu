import type { Metadata } from "next";
import Link from "next/link";
import { ContinueStrip } from "@/components/home/continue-strip";
import { HeroSpecimen } from "@/components/home/hero-specimen";
import { ArrowRightIcon } from "@/components/home/icons";
import { LabelChip } from "@/components/home/label-chip";
import { OperaGroups } from "@/components/home/opera-groups";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getCatalog } from "@/lib/site/catalog";
import { SITE_DESCRIPTION, SITE_TITLE, STEPS } from "@/lib/site/home";
import { SPECIMEN_FRAGMENTS, SPECIMEN_LESSON_TITLE } from "@/lib/site/specimen";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
};

const SECTION = "mx-auto w-full max-w-6xl px-4 sm:px-6";

export default async function Home() {
  const catalog = await getCatalog();
  const candidates = catalog.groups.flatMap((group) =>
    group.items.map(({ slug, shortTitle, exerciseCount, storageKey }) => ({
      slug,
      shortTitle,
      exerciseCount,
      storageKey,
    })),
  );

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section aria-labelledby="titlu-principal" className="border-b border-line">
          <div
            className={`${SECTION} grid gap-12 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:pb-24`}
          >
            <div>
              <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
                Bacalaureat · Limba și literatura română
              </p>
              <h1
                id="titlu-principal"
                className="mt-5 text-5xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl"
              >
                Română,{" "}
                <span className="underline decoration-red-700/50 decoration-[3px] underline-offset-[0.18em] dark:decoration-red-400/50">
                  pas cu pas.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-body sm:text-xl">
                Lecții despre operele studiate, construite pornind de la programa și baremele oficiale.
                Înveți teoria pe înțelesul tău, apoi verifici ce ai reținut cu exerciții și explicații.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#opere"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
                >
                  Începe cu o operă
                  <ArrowRightIcon className="size-4" />
                </a>
                <a
                  href="#lectie"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl px-3 text-base font-semibold text-ink underline decoration-line-strong decoration-2 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Vezi cum arată o lecție
                </a>
              </div>
              <ContinueStrip candidates={candidates} />
            </div>

            <HeroSpecimen />
          </div>
        </section>

        <section aria-label="Platforma în cifre" className="border-b border-line bg-surface-muted">
          <dl
            className={`${SECTION} grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-12`}
          >
            <div className="flex items-baseline gap-2">
              <dt className="order-2 text-ink-body">opere</dt>
              <dd className="m-0 font-serif text-3xl font-semibold text-ink">{catalog.operaCount}</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="order-2 text-ink-body">exerciții cu explicații</dt>
              <dd className="m-0 font-serif text-3xl font-semibold text-ink">{catalog.exerciseCount}</dd>
            </div>
            <div className="col-span-2 text-ink-body sm:col-span-1">
              Fiecare operă are o lecție de teorie și un set de exerciții.
            </div>
          </dl>
        </section>

        <section id="opere" aria-labelledby="opere-titlu" className={`${SECTION} scroll-mt-20 py-16 sm:py-24`}>
          <h2 id="opere-titlu" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Alege o operă
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-body">
            Operele sunt grupate după gen, ca să le găsești mai repede. Fiecare duce la lecție, iar de
            acolo la exerciții.
          </p>
          <OperaGroups groups={catalog.groups} idPrefix="grupa-acasa" />
        </section>

        <section id="lectie" aria-labelledby="lectie-titlu" className="scroll-mt-20 border-y border-line bg-surface-muted">
          <div className={`${SECTION} grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
            <div>
              <h2 id="lectie-titlu" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Cum arată o lecție
              </h2>
              <p className="mt-3 leading-relaxed text-ink-body">
                Lecțiile separă, prin etichete, ce spune textul, ce este interpretare și ce cere
                examenul. Mai jos, trei fragmente din lecția {SPECIMEN_LESSON_TITLE}.
              </p>
              <ol className="mt-8 space-y-5">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="w-8 shrink-0 font-serif text-3xl leading-none font-semibold text-accent-ink"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink">
                        <span className="sr-only">Pasul {index + 1}: </span>
                        {step.title}
                      </h3>
                      <p className="mt-1 leading-relaxed text-ink-body">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="space-y-4">
              {SPECIMEN_FRAGMENTS.map((fragment) => (
                <li
                  key={fragment.kind}
                  className="rounded-xl border border-line bg-surface p-5"
                >
                  <LabelChip kind={fragment.kind}>{fragment.label}</LabelChip>
                  <p className="mt-2 font-serif text-lg leading-relaxed text-ink">
                    {fragment.kind === "interpretare" ? "…" : ""}
                    {fragment.text}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">Din secțiunea „{fragment.section}”.</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stadiu" aria-labelledby="stadiu-titlu" className={`${SECTION} scroll-mt-20 py-16 sm:py-24`}>
          <div className="max-w-3xl rounded-2xl border border-line-strong bg-surface p-6 sm:p-8">
            <DraftBadge />
            <h2 id="stadiu-titlu" className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Stadiul conținutului
            </h2>
            <p className="mt-3 leading-relaxed text-ink-body">
              Lecțiile sunt în curs de verificare și nu au fost încă validate de un profesor. Citește-le
              împreună cu manualul și cu profesorul tău. Cerințele de examen sunt marcate în lecții cu
              eticheta „Cerință oficială”.
            </p>
            <Link
              href="/romana/opere"
              className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-accent-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Vezi toate lecțiile
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
