# Verificare tehnică și în browser: „Enigma Otiliei”

- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Statusul lecției:** `draft-neverificat`.
- **Completează:** `audit-enigma-otiliei-2026-10-26.md` (surse și conținut) și `audit-exercitii-enigma-otiliei-2026-10-26.md` (exerciții).

## 1. Cum s-a testat

- **Aplicația:** build de producție (`npm run build` + `next start`, port 3123). Un server rămas pornit din sesiunea anterioară (cu build-ul vechi) a fost oprit și repornit pe build-ul nou.
- **Browser:** Google Chrome 155 (headless), comandat prin Chrome DevTools Protocol, cu aceleași scripturi Node fără dependențe ca în raportul pentru „Alexandru Lăpușneanul”, adaptate la noua operă. Scripturile sunt în directorul temporar al sesiunii, nu în proiect.
- **Ce înseamnă „în browser”:** paginile au fost deschise într-un browser real și folosite prin clicuri, taste, reîncărcări și citirea `localStorage`. **Un om nu s-a uitat la ele:** am citit eu capturile figurilor la 390 px, în ambele teme (harta capitolelor, harta relațiilor după avansarea unei etape).
- **Lățimi:** 320, 360, 390, 768, 1280. **Teme:** luminoasă și întunecată (prin `prefers-color-scheme`).
- **Nu s-a testat:** Safari, Firefox, un telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei, `prefers-reduced-motion` (lecția nu adaugă animații noi).

## 2. Verificări tehnice

| Comandă | Rezultat |
|---|---|
| `npx tsc --noEmit` | fără erori |
| `npm run lint` | fără erori |
| `npm run test:exercises` | **130 din 130** (inclusiv `enigma-otiliei.test.mjs`) |
| `npm run build` | reușit; 17 pagini statice (înainte: 15), inclusiv `/romana/opere/enigma-otiliei` și `/exercitii` |
| HTTP | lecția și exercițiile: 200; catalogul: 200; `/romana/opere/nu-exista`: 404 |

## 3. Ce a funcționat în browser

| Verificare | Rezultat |
|---|---|
| Lecția: titlu, insigna „Draft – în curs de verificare”, butonul „Exersează: 16 exerciții”, 11 secțiuni (H2), 31 de subsecțiuni (H3), 10 figuri, fără MDX nerandat | Corect, la toate cele 10 combinații lățime × temă |
| Ancore interne și din cuprins fără țintă | 0 |
| Scroll orizontal | 0 px, la toate lățimile |
| Contrast (calculat pe ~880 de elemente cu text) | minim **5,36:1** (luminos) și **5,17:1** (întunecat; butonul „Exersează”, comun tuturor operelor) |
| Harta relațiilor, cele 4 etape, la 320–1280 px: noduri sau etichete tăiate ori suprapuse | **0 probleme** după corectura din §4 |
| Cele 4 quiz-uri (21 de enunțuri): fiecare variantă încercată (77 de verificări); fiecare enunț acceptă **exact o variantă**, identică cu datele din `enigma-otiliei-interactiv.ts`; fiecare feedback are explicație și „Sursa:”; „Încearcă din nou” apare după răspuns greșit | Corect, la 390 px (luminos) și 1280 px (întunecat) |
| 40 de butoane selectabile (capitole, elemente incipit/final, personaje, noduri, tipuri de plan, cerințe din autoevaluare): fiecare devine `aria-pressed="true"` | Corect |
| Harta relațiilor: „Înainte” parcurge 4 etape cu texte diferite | Corect |
| Planul de eseu: 11 linkuri „Recitește” distincte, toate spre titluri existente; cele 9 bife din autoevaluare se activează | Corect |
| Tastatură: săgeata mută selecția într-un quiz; Space pe „Înainte” avansează | Corect |
| Lecția nu scrie în `localStorage` | Corect |
| Catalogul `/romana/opere`: cinci opere, inclusiv „Enigma Otiliei” | Corect |
| Erori JavaScript / avertismente în consolă (toate scripturile) | Niciuna |

### Exerciții

Vezi `audit-exercitii-enigma-otiliei-2026-10-26.md`, §4: parcurs complet, scor 10 din 15, restaurare după reîncărcare, „← Anterior”, absența răspunsurilor din HTML și din stocare, cheie proprie.

### Regresii pe celelalte opere

La 390 px (luminos) și 1280 px (întunecat): „Ion” (14 figuri, 49 de clicuri), „Moara cu noroc” (11 figuri, 46), „Povestea lui Harap-Alb” (13 figuri, 63), „Alexandru Lăpușneanul” (10 figuri, 27) și paginile lor de exerciții se încarcă fără erori în consolă și fără scroll orizontal. Cele cinci chei de stocare rămân separate. Nota de pe pagina principală este prezentă.

## 4. Defecte găsite în timpul lucrului

| # | Problema | Corectura |
|---|---|---|
| 1 | Harta relațiilor, la 320–390 px: nodurile „Moș Costache” și „Aglae” se suprapuneau, iar două etichete de muchii se acopereau | Pozițiile nodurilor au fost rearanjate (Aglae sus, Felix și Pascalopol la mijloc, Costache și Stănică jos); 0 probleme la remăsurare |
| 2 | Varianta corectă era cea mai lungă la 6 din 11 grile | Distractori reechilibrați (vezi raportul de exerciții) |
| 3 | Pagini și formulări inexacte în citate | Corectate după verificarea pe imagini (raportul de audit, §3.1) |

Nu au fost create componente noi și nu au fost adăugate dependențe. Codul comun și lecțiile celorlalte opere nu au fost modificate.

## 5. Limite și ce rămâne

1. **Neverificat de mine:** Safari/Firefox, telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei.
2. Limitele comune deja consemnate: scorul poate fi falsificat editând `localStorage`; răspunsurile quiz-urilor din lecție sunt în codul clientului (exercițiile, nu).

## 6. Verificări manuale recomandate (cinci minute)

1. Pe telefon (sau DevTools, 390 px): parcurge harta capitolelor (2) și harta relațiilor (7.7), în ambele teme.
2. În „Incipitul și finalul, față în față” (6.3) și „Otilia, văzută de ceilalți” (7.2): apasă pe câteva butoane; panoul trebuie să se schimbe și să se citească bine.
3. La exerciții: răspunde greșit la unul, apasă „Modifică răspunsul”, reîncarcă pagina și citește rezumatul.
4. Citește secțiunea 1 a lecției și decide dacă formularea despre statutul operei la examen este potrivită pentru elevii tăi.
