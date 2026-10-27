import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { slugifyHeading } from "@/lib/content/headings";
import { CardGrid } from "./card-grid";
import { Disclosure } from "./disclosure";
import { matchContentLabel, type ContentLabelKind } from "./content-labels";
import { LABEL_CHIP } from "./label-styles";

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/** Children without the whitespace-only strings MDX inserts between blocks. */
function meaningfulChildren(children: ReactNode): ReactNode[] {
  return Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === ""),
  );
}

type LeadingLabel = { kind: ContentLabelKind; index: number };

/** Detects a lesson label only when the block starts with a bold element holding exactly that label. */
function findLeadingLabel(children: ReactNode): LeadingLabel | null {
  const items = Children.toArray(children);
  const index = items.findIndex((child) => !(typeof child === "string" && child.trim() === ""));
  const first = items[index];
  if (!isValidElement(first) || first.type !== Strong) return null;
  const kind = matchContentLabel(textOf((first as ElementWithChildren).props.children));
  return kind ? { kind, index } : null;
}

function withLabelMarked(children: ReactNode, label: LeadingLabel | null): ReactNode {
  if (!label) return children;
  const items = Children.toArray(children);
  const labelElement = items[label.index];
  if (isValidElement<StrongProps>(labelElement)) {
    items[label.index] = cloneElement(labelElement, { "data-label": label.kind });
  }
  return items;
}

const CALLOUT: Partial<Record<ContentLabelKind, string>> = {
  oficial: "border-blue-500 bg-blue-50/70 dark:border-blue-400 dark:bg-blue-950/40",
  recomandare: "border-emerald-500 bg-emerald-50/70 dark:border-emerald-400 dark:bg-emerald-950/40",
  stadiu: "border-amber-500 bg-amber-50/70 dark:border-amber-400 dark:bg-amber-950/40",
};

type StrongProps = ComponentPropsWithoutRef<"strong"> & { "data-label"?: ContentLabelKind };

function Strong({ "data-label": label, className, ...props }: StrongProps) {
  if (label) {
    return (
      <strong
        data-label={label}
        className={`mr-1 inline-block rounded-md px-1.5 py-0.5 text-[0.85em] leading-snug font-semibold ${LABEL_CHIP[label]}`}
        {...props}
      />
    );
  }
  return <strong className={className ?? "font-semibold text-ink"} {...props} />;
}

function Paragraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  const label = findLeadingLabel(children);
  return (
    <p className="my-4 leading-relaxed" {...props}>
      {withLabelMarked(children, label)}
    </p>
  );
}

function ListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
  const label = findLeadingLabel(children);
  return (
    <li className="pl-1 leading-relaxed marker:text-zinc-400 [&>ol]:my-2 [&>ul]:my-2" {...props}>
      {withLabelMarked(children, label)}
    </li>
  );
}

function Blockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
  const first = meaningfulChildren(children)[0];
  const label =
    isValidElement(first) && first.type === Paragraph
      ? findLeadingLabel((first as ElementWithChildren).props.children)
      : null;
  const variant =
    (label && CALLOUT[label.kind]) ??
    "border-line-strong bg-surface-muted";

  return (
    <blockquote
      data-callout={label?.kind}
      className={`my-6 rounded-r-xl border-l-4 px-4 py-1 sm:px-5 [&>ol]:my-3 [&>p]:my-3 [&>ul]:my-3 ${variant}`}
      {...props}
    >
      {children}
    </blockquote>
  );
}

function Heading2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      id={slugifyHeading(textOf(children))}
      className="mt-14 mb-4 scroll-mt-24 border-b border-line pb-3 text-2xl leading-snug font-bold tracking-tight text-ink sm:text-[1.7rem]"
      {...props}
    >
      {children}
    </h2>
  );
}

function Heading3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      id={slugifyHeading(textOf(children))}
      className="mt-10 mb-3 scroll-mt-24 text-xl leading-snug font-semibold text-ink"
      {...props}
    >
      {children}
    </h3>
  );
}

function MdxLink({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const className =
    "font-medium text-accent-ink underline underline-offset-2 hover:text-ink ";

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

/** Styles for the HTML elements produced by lesson MDX files. */
export const lessonMdxElements: MDXComponents = {
  h1: (props) => (
    <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight sm:text-4xl" {...props} />
  ),
  h2: Heading2,
  h3: Heading3,
  h4: (props) => <h4 className="mt-6 mb-2 text-lg font-semibold" {...props} />,
  p: Paragraph,
  ul: (props) => <ul className="my-4 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />,
  li: ListItem,
  blockquote: Blockquote,
  strong: Strong,
  hr: (props) => <hr className="my-10 border-line" {...props} />,
  a: MdxLink,
  // Layout wrappers that lessons may use without importing them.
  CardGrid,
  Disclosure,
};
