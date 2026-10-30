import Link from "next/link";
import { ArrowRightIcon } from "@/components/home/icons";
import { INTRO_IDENTITIES } from "@/components/lesson/intro/intro-art";
import { OperaGroupsAccordion } from "@/components/home/opera-groups-accordion";
import type { CatalogItem } from "@/lib/site/catalog";
import { GRUPE_NOTA, type OperaGroup } from "@/lib/site/opere-grupe";

function exercisesLabel(count: number): string {
  if (count === 0) return "Teorie";
  return `Teorie · ${count} ${count === 1 ? "exercițiu" : "exerciții"}`;
}

function OperaRow({ item }: { item: CatalogItem }) {
  const { Art, frame } = INTRO_IDENTITIES[item.slug];
  return (
    <li>
      <Link
        href={`/romana/opere/${item.slug}`}
        aria-label={`${item.title}. ${exercisesLabel(item.exerciseCount)}`}
        className="group flex items-center gap-4 rounded-xl border border-transparent px-2 py-2.5 transition-colors hover:border-line hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none sm:px-3"
      >
        <span
          aria-hidden="true"
          className={`art-static block aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-lg border border-line/70 sm:w-24 ${frame}`}
        >
          <Art />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-lg leading-snug font-semibold text-ink">
            {item.shortTitle}
          </span>
          <span className="block text-sm text-ink-body">{item.author}</span>
          <span className="block text-sm text-ink-muted">{exercisesLabel(item.exerciseCount)}</span>
        </span>
        <ArrowRightIcon className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-ink motion-reduce:transition-none" />
      </Link>
    </li>
  );
}

/** Works grouped for navigation (lib/site/opere-grupe.ts), with a jump bar and the note about the grouping. */
export function OperaGroups({ groups, idPrefix = "grupa" }: { groups: OperaGroup<CatalogItem>[]; idPrefix?: string }) {
  return (
    <div>
      <OperaGroupsAccordion
        idPrefix={idPrefix}
        groups={groups.map((group) => ({
          id: group.id,
          title: group.title,
          count: group.items.length,
          panel: (
            <ul className="mt-3 grid gap-x-8 gap-y-1 lg:grid-cols-2">
              {group.items.map((item) => (
                <OperaRow key={item.slug} item={item} />
              ))}
            </ul>
          ),
        }))}
      />

      <p className="mt-8 max-w-prose text-sm leading-relaxed text-ink-muted">{GRUPE_NOTA}</p>
    </div>
  );
}
