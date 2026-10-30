# BAC Simplu — Română, pas cu pas

Platformă gratuită pentru pregătirea Bacalaureatului la **Limba și literatura română**: lecții despre operele studiate, exerciții cu explicații și planuri de eseu.

> Lecțiile sunt în curs de verificare și **nu au fost validate de un profesor**. Citește-le împreună cu manualul și cu profesorul tău. Documentele oficiale (programe, subiecte, bareme) sunt în `references/bac-romana/` și sunt doar surse de verificare, nu se publică pe site.

## Tehnologii

Next.js (App Router), React, TypeScript, Tailwind CSS, MDX pentru lecții. Fonturi (prin `next/font`, auto-găzduite la build): Literata pentru titluri și zone editoriale, Geist pentru interfață și text.

## Rulare locală

```bash
npm install
npm run dev
```

Deschide <http://localhost:3000>.

Verificări:

```bash
npm run lint
npx tsc --noEmit
npm run test:exercises
npm run test:site
npm run build
```

## Configurare

| Variabilă | Rol |
|---|---|
| `SITE_URL` | Adresa publică a site-ului, de exemplu `https://exemplu.ro` (fără cale). Folosită pentru `metadataBase`, linkurile Open Graph, `sitemap.xml` și linia `Sitemap:` din `robots.txt`. |

Dacă `SITE_URL` lipsește, `sitemap.xml` este gol, `robots.txt` nu menționează sitemap-ul, iar `metadataBase` revine la `http://localhost:3000`. **Setează `SITE_URL` în mediul de producție înainte de lansare.**

## Structura proiectului

- `app/` — rute (`/`, `/romana/opere`, `/romana/opere/[slug]`, `/romana/opere/[slug]/exercitii`), `manifest.ts`, `robots.ts`, `sitemap.ts`, iconuri și imaginea Open Graph.
- `content/romana/opere/` — lecțiile (MDX) și datele interactive.
- `content/romana/exercitii/` — seturile de exerciții.
- `components/` — componente UI (site, lecții, exerciții).
- `lib/` — logica aplicației: conținut, corectarea exercițiilor, salvarea locală a progresului, constante de brand și gruparea operelor pentru navigare (`lib/site/`).
- `docs/` — planul operelor și rapoartele de audit.
- `references/bac-romana/` — documente oficiale de referință.

## Identitate

Nume: **BAC Simplu**. Slogan: „Română, pas cu pas.”. Titlu implicit: „BAC Simplu — Bacalaureatul la Română”. Monograma (o carte deschisă) este definită în `lib/site/brand.ts`, desenată în `app/icon.svg` și în `components/site/brand-mark.tsx`.

Cheile `localStorage` (`bac-simplu-tema`, `bac-simplu:exercitii:<set>`) sunt stabile și nu trebuie redenumite fără migrare, pentru a nu pierde preferințele și progresul utilizatorilor.

## Gruparea operelor

Operele sunt grupate (Proză, Poezie, Teatru, Critică și teorie literară) **doar pentru navigare**; nu este o clasificare oficială a programei BAC. Harta explicită `slug → grupă` este în `lib/site/opere-grupe.ts`. O operă nouă trebuie adăugată acolo: TypeScript și `npm run test:site` eșuează dacă lipsește.
