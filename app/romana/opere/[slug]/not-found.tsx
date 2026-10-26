import Link from "next/link";

export default function OperaNotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">Lecția nu există</h1>
      <p className="mb-6 text-ink-body">
        Nu am găsit o lecție la această adresă. Este posibil ca lecția să nu fi fost publicată încă.
      </p>
      <Link
        href="/romana/opere"
        className="text-accent-ink underline underline-offset-2 hover:text-ink "
      >
        Vezi toate operele
      </Link>
    </main>
  );
}
