import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExerciseSession } from "@/components/exercises/exercise-session";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { isDraft, shortTitle } from "@/lib/content/lesson";
import { getOpera } from "@/lib/content/romana-opere";
import { toPublicExercise } from "@/lib/exercises/grading";
import {
  getExerciseSet,
  getRomanaOperaSlugsWithExercises,
  romanaOperaSetKey,
} from "@/lib/exercises/registry";

export function generateStaticParams() {
  return getRomanaOperaSlugsWithExercises().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/romana/opere/[slug]/exercitii">): Promise<Metadata> {
  const { slug } = await params;
  const opera = await getOpera(slug);
  if (!opera || !getExerciseSet(romanaOperaSetKey(slug))) return {};
  return {
    title: `Exerciții – ${opera.meta.title}`,
    description: `Exerciții de verificare pentru lecția despre ${opera.meta.title}: alegere multiplă, adevărat/fals și răspuns scurt, cu explicații.`,
  };
}

export default async function OperaExercisesPage({ params }: PageProps<"/romana/opere/[slug]/exercitii">) {
  const { slug } = await params;
  const opera = await getOpera(slug);
  const entry = opera ? getExerciseSet(romanaOperaSetKey(slug)) : null;
  if (!opera || !entry) notFound();

  const { meta } = opera;
  // Only the answer-free view reaches the browser; answers are checked by a server action.
  const exercises = entry.set.exercises.map(toPublicExercise);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Română" },
          { label: "Opere", href: "/romana/opere" },
          { label: shortTitle(meta), href: entry.lessonHref },
          { label: "Exerciții" },
        ]}
      />

      <header className="mt-6 border-b border-line pb-6">
        <h1 className="text-3xl leading-tight font-bold tracking-tight text-balance text-ink sm:text-4xl">
          Exerciții: {meta.title}
        </h1>
        <p className="mt-3 leading-relaxed text-ink-body">
          {exercises.length} exerciții pentru verificarea lecției. După fiecare răspuns primești o explicație și
          trimiterea la secțiunea din lecție unde poți recapitula.
        </p>
        {isDraft(meta) && (
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-body">
            <DraftBadge />
            <span>Exercițiile se bazează pe o lecție aflată încă în verificare.</span>
          </div>
        )}
      </header>

      <div className="mt-8">
        <ExerciseSession setKey={entry.set.key} exercises={exercises} lessonHref={entry.lessonHref} />
      </div>
    </main>
  );
}
