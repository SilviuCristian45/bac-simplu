import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INTRO_IDENTITIES } from "@/components/lesson/intro/intro-art";
import { LessonIntro } from "@/components/lesson/intro/lesson-intro";
import { TableOfContents } from "@/components/lesson/table-of-contents";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { LESSON_INTROS } from "@/content/romana/opere/introduceri";
import { shortTitle } from "@/lib/content/lesson";
import { getOpera, getOperaSlugs } from "@/lib/content/romana-opere";
import { isOperaSlug } from "@/lib/content/romana-opere-slugs";
import { getExerciseSet, romanaOperaSetKey } from "@/lib/exercises/registry";

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
  if (!opera || !isOperaSlug(slug)) notFound();

  const { meta, Content, headings } = opera;
  const exerciseSet = getExerciseSet(romanaOperaSetKey(slug));

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

      <LessonIntro
        meta={meta}
        content={LESSON_INTROS[slug]}
        identity={INTRO_IDENTITIES[slug]}
        exercises={
          exerciseSet
            ? { href: `/romana/opere/${slug}/exercitii`, count: exerciseSet.set.exercises.length }
            : null
        }
      />

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
