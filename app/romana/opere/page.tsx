import type { Metadata } from "next";
import { OperaGroups } from "@/components/home/opera-groups";
import { DraftBadge } from "@/components/lesson/draft-badge";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { getCatalog } from "@/lib/site/catalog";

export const metadata: Metadata = {
  title: "Opere literare",
  description:
    "Lecții despre operele literare studiate pentru Bacalaureat la limba și literatura română.",
};

export default async function OperePage() {
  const catalog = await getCatalog();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <Breadcrumb items={[{ label: "Acasă", href: "/" }, { label: "Română" }, { label: "Opere" }]} />

      <header className="mt-6 max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-accent-ink uppercase">
          Limba și literatura română
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Opere literare</h1>
        <p className="mt-3 leading-relaxed text-ink-body">
          Lecții despre operele studiate pentru examenul de Bacalaureat: {catalog.operaCount} opere,
          cu {catalog.exerciseCount} de exerciții.
        </p>
        <p className="mt-4">
          <DraftBadge />
        </p>
      </header>

      {catalog.operaCount === 0 ? (
        <p className="mt-10">Nu există încă lecții publicate.</p>
      ) : (
        <OperaGroups groups={catalog.groups} idPrefix="grupa" />
      )}
    </main>
  );
}
