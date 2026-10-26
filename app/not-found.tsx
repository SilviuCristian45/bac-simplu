import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită",
};

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6">
      <p className="mb-2 text-sm font-medium text-ink-muted">Eroare 404</p>
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Pagina nu a fost găsită</h1>
      <p className="mb-6 text-ink-body">
        Adresa accesată nu există sau pagina nu a fost publicată încă. Verifică adresa sau
        pornește de la pagina principală.
      </p>
      <Link
        href="/"
        className="text-accent-ink underline underline-offset-2 hover:text-ink "
      >
        Mergi la pagina principală
      </Link>
    </main>
  );
}
