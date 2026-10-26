import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/home/icons";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { TableOfContents } from "@/components/lesson/table-of-contents";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { isDraft, sectionLabel, shortTitle } from "@/lib/content/lesson";
import { getOpera, getOperaSlugs } from "@/lib/content/romana-opere";
import { getExerciseSet, romanaOperaSetKey } from "@/lib/exercises/registry";
import { SUBJECTS } from "@/lib/site/home";

export function generateStaticParams() {
  return getOperaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/romana/opere/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const opera = await getOpera(slug);
  if (!opera) return {};

  return {
    title: opera.meta.title,
    description: `Lecție pentru Bacalaureat despre ${opera.meta.title}: particularități, temă, structură, personaje și redactarea eseului.`,
  };
}

// The page header renders the lesson title, so the MDX h1 is not repeated.
// getOpera checks that both say the same thing.
const contentOverrides = { h1: () => null };

export default async function OperaPage({ params }: PageProps<"/romana/opere/[slug]">) {
  const { slug } = await params;
  const opera = await getOpera(slug);
  // dynamicParams is not available with cacheComponents, so unknown slugs 404 here.
  if (!opera) notFound();

  const { meta, Content, headings } = opera;
  const exerciseSet = getExerciseSet(romanaOperaSetKey(slug));
  const subjectTitle = SUBJECTS.find((subject) => subject.id === meta.subject)?.title ?? meta.subject;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Română" },
          { label: "Opere", href: "/romana/opere" },
          { label: shortTitle(meta) },
        ]}
      />

      <header className="mt-6 max-w-3xl border-b border-line pb-8">
        {isDraft(meta) && <DraftBadge />}
        <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance text-ink sm:text-5xl">
          {meta.title}
        </h1>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-ink-muted">Autor</dt>
            <dd className="mt-0.5 font-medium text-ink">{meta.author}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">Materie</dt>
            <dd className="mt-0.5 font-medium text-ink">{subjectTitle}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">Conținut</dt>
            <dd className="mt-0.5 font-medium text-ink">
              {meta.sections.map(sectionLabel).join(" · ")}
            </dd>
          </div>
        </dl>
        {exerciseSet && (
          <Link
            href={`/romana/opere/${slug}/exercitii`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white shadow-sm hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Exersează: {exerciseSet.set.exercises.length} exerciții
            <ArrowRightIcon className="size-4" />
          </Link>
        )}
      </header>

      {headings.length > 0 && (
        <details className="group mt-6 rounded-xl border border-line bg-surface lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
            Cuprins
            <span
              aria-hidden="true"
              className="text-ink-muted transition-transform group-open:rotate-180"
            >
              ▾
            </span>
          </summary>
          <nav aria-label="Cuprinsul lecției" className="max-h-[60vh] overflow-y-auto px-2 pb-3">
            <TableOfContents headings={headings} />
          </nav>
        </details>
      )}

      <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_16rem] xl:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="max-w-[70ch] text-[1.0625rem] text-ink-body [&>*:first-child]:mt-0">
          <Content components={contentOverrides} />
        </article>

        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <nav
              aria-label="Cuprinsul lecției"
              className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6"
            >
              <p className="mb-3 px-3 text-xs font-semibold tracking-wide text-ink-muted uppercase">
                Cuprins
              </p>
              <TableOfContents headings={headings} />
            </nav>
          </aside>
        )}
      </div>
    </main>
  );
}
