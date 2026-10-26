import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, BookIcon } from "@/components/home/icons";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { isDraft, sectionLabel } from "@/lib/content/lesson";
import { getAllOperaMeta } from "@/lib/content/romana-opere";

export const metadata: Metadata = {
  title: "Opere literare – Limba și literatura română",
  description:
    "Lecții despre operele literare studiate pentru Bacalaureat la limba și literatura română.",
};

export default async function OperePage() {
  const opere = await getAllOperaMeta();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Română" }, { label: "Opere" }]} />

      <header className="mt-6 max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase ">
          Limba și literatura română
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Opere literare
        </h1>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Lecții despre operele studiate pentru examenul de Bacalaureat.
        </p>
      </header>

      {opere.length === 0 ? (
        <p className="mt-10">Nu există încă lecții publicate.</p>
      ) : (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opere.map((opera) => (
            <li key={opera.id}>
              <Link
                href={`/romana/opere/${opera.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-accent-ink dark:bg-blue-950 ">
                    <BookIcon className="size-6" />
                  </span>
                  {isDraft(opera) && <DraftBadge />}
                </span>
                <span className="mt-5 block text-lg font-semibold text-ink">
                  {opera.title}
                </span>
                <span className="mt-1 block text-ink-muted">{opera.author}</span>
                <span className="mt-1 block text-sm text-ink-muted">
                  {opera.sections.map(sectionLabel).join(" · ")}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-ink group-hover:underline ">
                  Deschide lecția
                  <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
