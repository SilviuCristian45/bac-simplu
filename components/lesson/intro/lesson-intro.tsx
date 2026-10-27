import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRightIcon } from "@/components/home/icons";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { LABEL_CHIP } from "@/components/lesson/label-styles";
import type { IntroEssential, IntroKind, LessonIntroContent } from "@/content/romana/opere/introduceri";
import { slugifyHeading } from "@/lib/content/headings";
import { isDraft, shortTitle, type LessonMeta } from "@/lib/content/lesson";
import type { IntroIdentity } from "./intro-art";

type LessonIntroProps = {
  meta: LessonMeta;
  content: LessonIntroContent;
  identity: IntroIdentity;
  exercises: { href: string; count: number } | null;
};

/** Stagger for the one-shot entrance (globals.css, .intro-rise). Ignored with reduced motion. */
function delay(ms: number): CSSProperties {
  return { "--intro-delay": `${ms}ms` } as CSSProperties;
}

const KIND_LABELS: Record<Exclude<IntroKind, "text">, string> = {
  interpretare: "Interpretare",
  oficial: "Cerință oficială",
  recomandare: "Recomandare",
};

function KindChip({ kind, textLabel }: { kind: IntroKind; textLabel: string }) {
  return (
    <span className={`inline-block rounded-md px-1.5 py-0.5 text-xs leading-snug font-semibold ${LABEL_CHIP[kind]}`}>
      {kind === "text" ? textLabel : KIND_LABELS[kind]}
    </span>
  );
}

const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Ideas shown before „Vezi toate ideile”; the content lists the most important ones first. */
const VISIBLE_ESSENTIALS = 3;
const ESSENTIALS_GRID = "mt-4 grid gap-3 sm:grid-cols-2";

/**
 * Opening of a lesson page: title, a one- or two-sentence lead, the essentials as chips that
 * link to the sections where they are explained, an illustration, and „Ce trebuie să reții”.
 * Server-rendered; the entrance animation is CSS only, so nothing waits for JavaScript.
 */
export function LessonIntro({ meta, content, identity, exercises }: LessonIntroProps) {
  const { Art } = identity;
  const first = content.essentials.slice(0, VISIBLE_ESSENTIALS);
  const rest = content.essentials.slice(VISIBLE_ESSENTIALS);

  const renderEssential = (item: IntroEssential, index: number) => (
    <li
      key={item.text}
      className="intro-rise flex gap-3 rounded-2xl border border-line bg-surface p-3.5 transition-colors duration-200 hover:border-line-strong motion-reduce:transition-none sm:p-4"
      style={delay(480 + Math.min(index, VISIBLE_ESSENTIALS - 1) * 70)}
    >
      <span
        aria-hidden="true"
        className={`flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${identity.badge}`}
      >
        {index + 1}
      </span>
      <div className="min-w-0">
        <KindChip kind={item.kind} textLabel={content.textLabel} />
        <p className="mt-1.5 leading-relaxed text-ink-body">{item.text}</p>
        <a
          href={`#${slugifyHeading(item.section)}`}
          className={`mt-1 inline-flex min-h-7 items-center gap-1 rounded py-1 text-sm font-medium underline-offset-2 hover:underline ${identity.accent} ${FOCUS}`}
        >
          Detalii: {item.section}
          <ArrowRightIcon className="size-3.5" />
        </a>
      </div>
    </li>
  );

  return (
    <header
      aria-labelledby="lectie-titlu"
      className={`mt-6 overflow-hidden rounded-3xl border border-line bg-linear-to-br shadow-sm shadow-slate-900/5 dark:shadow-none ${identity.wash}`}
    >
      <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(15rem,21rem)] md:items-center md:gap-8">
        <div className="min-w-0">
          <div className="intro-rise flex flex-wrap items-center gap-x-3 gap-y-2" style={delay(0)}>
            {isDraft(meta) && <DraftBadge />}
            <span className={`text-xs font-semibold tracking-wide uppercase ${identity.accent}`}>
              Lecție · Limba și literatura română
            </span>
          </div>

          <h1 id="lectie-titlu" className="intro-title mt-4 text-balance" style={delay(80)}>
            <span className="block text-4xl leading-[1.1] font-bold tracking-tight text-ink sm:text-5xl">
              „{shortTitle(meta)}”
            </span>{" "}
            <span className="mt-2 block text-lg font-medium text-ink-muted sm:text-xl">de {meta.author}</span>
          </h1>

          <p className="intro-rise mt-4 max-w-prose text-base leading-relaxed text-ink-body sm:text-lg" style={delay(200)}>
            {content.lead}
          </p>
        </div>

        <div
          className={`intro-art relative aspect-[16/10] overflow-hidden rounded-2xl border border-line/70 ${identity.frame}`}
          style={delay(120)}
        >
          <Art />
        </div>

        <div className="md:col-span-2">
          <ul
            aria-label="Pe scurt"
            className="grid gap-2 sm:gap-3 [grid-template-columns:repeat(auto-fit,minmax(8.5rem,1fr))]"
          >
            {content.facts.map((fact, index) => (
              <li key={fact.label} className="intro-rise flex" style={delay(260 + index * 60)}>
                <a
                  href={`#${slugifyHeading(fact.section)}`}
                  className={`group flex w-full flex-col rounded-2xl border border-line bg-surface/90 px-3.5 py-3 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${FOCUS}`}
                >
                  <span className="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wide text-ink-muted uppercase">
                    {fact.label}
                    {fact.kind === "interpretare" && <KindChip kind="interpretare" textLabel={content.textLabel} />}
                  </span>
                  <span className="mt-1 font-semibold text-ink">{fact.value}</span>
                  {fact.note && <span className="mt-0.5 text-sm leading-snug text-ink-muted">{fact.note}</span>}
                  <span className="sr-only">. Vezi secțiunea „{fact.section}”.</span>
                </a>
              </li>
            ))}
          </ul>

          {exercises && (
            <Link
              href={exercises.href}
              className={`intro-rise mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover ${FOCUS}`}
              style={delay(420)}
            >
              Exersează: {exercises.count} exerciții
              <ArrowRightIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>

      <section aria-labelledby="lectie-esential" className="border-t border-line bg-surface/70 px-5 py-6 sm:px-8">
        <h2 id="lectie-esential" className="text-lg font-bold text-ink">
          Ce trebuie să reții pentru BAC?
        </h2>
        <p className="mt-1 text-sm text-ink-muted">Pe scurt. Explicațiile și sursele sunt în secțiunile lecției.</p>
        <ol className={ESSENTIALS_GRID}>{first.map(renderEssential)}</ol>

        {rest.length > 0 && (
          <details className="group/more mt-3">
            <summary
              className={`inline-flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink hover:border-line-strong [&::-webkit-details-marker]:hidden ${FOCUS}`}
            >
              <span className="group-open/more:hidden">Vezi toate ideile (încă {rest.length})</span>
              <span className="hidden group-open/more:inline">Restrânge</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-open/more:rotate-180 motion-reduce:transition-none"
              >
                ▾
              </span>
            </summary>
            <ol start={VISIBLE_ESSENTIALS + 1} className={ESSENTIALS_GRID}>
              {rest.map((item, index) => renderEssential(item, VISIBLE_ESSENTIALS + index))}
            </ol>
          </details>
        )}
      </section>
    </header>
  );
}
