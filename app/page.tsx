import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownIcon } from "@/components/home/icons";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StatusBadge } from "@/components/home/status-badge";
import { SubjectCard } from "@/components/home/subject-card";
import { SITE_NAME, STEPS, SUBJECTS } from "@/lib/site/home";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} – Pregătește-te pentru BAC, pas cu pas` },
  description:
    "Lecții clare pentru examenul de Bacalaureat, construite pornind de la programa și baremele oficiale. Începe cu limba și literatura română.",
};

export default function Home() {
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
              Pregătire pentru Bacalaureat
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              Pregătește-te pentru BAC, pas cu pas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-body sm:text-xl">
              Lecții clare, construite pornind de la programa și baremele oficiale. Înveți teoria pe
              înțelesul tău, iar în curând vei putea exersa pe tipurile de cerințe de la examen.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#materii"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explorează materiile
                <ArrowDownIcon className="size-4" />
              </a>
              <Link
                href="/romana/opere"
                className="inline-flex items-center justify-center rounded-xl border border-line-strong bg-surface/70 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Vezi operele de română
              </Link>
            </div>
          </div>
        </section>

        <section
          id="materii"
          aria-labelledby="materii-titlu"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
        >
          <h2
            id="materii-titlu"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Materii
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
            Începem cu limba și literatura română. Matematica și informatica vor fi adăugate pe rând.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {SUBJECTS.map((subject) => (
              <li key={subject.id}>
                <SubjectCard subject={subject} />
              </li>
            ))}
          </ul>
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
              Trei pași simpli. Deocamdată sunt disponibile lecțiile de teorie;
              exercițiile interactive sunt în dezvoltare.
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
                    <StatusBadge tone={step.available ? "available" : "soon"}>
                      {step.available ? "Disponibil" : "În dezvoltare"}
                    </StatusBadge>
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
