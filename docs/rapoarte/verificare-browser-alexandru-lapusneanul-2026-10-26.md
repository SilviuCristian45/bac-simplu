# Verificare tehnică și în browser: „Alexandru Lăpușneanul”

- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Statusul lecției:** `draft-neverificat`.
- **Completează:** `audit-alexandru-lapusneanul-2026-10-26.md` (surse și conținut) și `audit-exercitii-alexandru-lapusneanul-2026-10-26.md` (exerciții).

## 1. Cum s-a testat

- **Aplicația:** build de producție (`npm run build` + `next start`, port 3123).
- **Browser:** Google Chrome 155 (headless), comandat prin Chrome DevTools Protocol, cu scripturi Node fără dependențe (aceeași metodă ca în rapoartele anterioare). Scripturile (`cdp.mjs`, `lesson.mjs`, `figures.mjs`, `interactions.mjs`, `exercises.mjs`, `regression.mjs`) sunt în directorul temporar al sesiunii, nu în proiect.
- **Ce înseamnă „în browser”:** paginile au fost deschise într-un browser real și folosite prin clicuri, taste, reîncărcări și citirea `localStorage`. **Un om nu s-a uitat la ele:** am citit eu capturile figurilor la 390 px (harta capitolelor, quiz-ul de caracterizare în tema întunecată, harta relațiilor) și capturile paginii întregi.
- **Lățimi:** 320, 360, 390, 768, 1280. **Teme:** luminoasă și întunecată (prin `prefers-color-scheme`).
- **Nu s-a testat:** Safari, Firefox, un telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei, `prefers-reduced-motion` (lecția nu adaugă animații noi; componentele sunt cele verificate în rapoartele anterioare).

## 2. Verificări tehnice

| Comandă | Rezultat |
|---|---|
| `npx tsc --noEmit` | fără erori |
| `npm run lint` | fără erori |
| `npm run test:exercises` | **103 din 103** (inclusiv `alexandru-lapusneanul.test.mjs`) |
| `npm run build` | reușit; 15 pagini statice, inclusiv `/romana/opere/alexandru-lapusneanul` și `/exercitii` |
| HTTP | lecția și exercițiile: 200; `/romana/opere/nu-exista`: 404 |

## 3. Ce a funcționat în browser

| Verificare | Rezultat |
|---|---|
| Lecția: titlu, insigna „Draft”, butonul „Exersează: 16 exerciții”, 11 secțiuni (H2), 33 de subsecțiuni (H3), cuprins (44 de intrări × 2: mobil și desktop), 10 figuri, fără MDX nerandat | Corect, la toate cele 10 combinații lățime × temă |
| Ancore interne și din cuprins fără țintă | 0 |
| Scroll orizontal | 0 px, la toate lățimile |
| Contrast (calculat pe toate cele ~925 de elemente cu text) | minim **5,36:1** (luminos) și **5,17:1** (întunecat; butonul „Exersează”, comun tuturor operelor) |
| Harta relațiilor, cele 4 etape, la 320–1280 px: noduri sau etichete tăiate ori suprapuse | **0 probleme** |
| Cele 4 quiz-uri (22 de enunțuri): fiecare variantă încercată (70 de verificări); fiecare enunț acceptă **exact o variantă**, identică cu datele din `alexandru-lapusneanul-interactiv.ts`; fiecare feedback are explicație și „Sursa:”; „Încearcă din nou” apare după răspuns greșit | Corect, la 390 px (luminos) și 1280 px (întunecat) |
| 24 de butoane selectabile (capitole, motto-uri, replici, noduri, tipuri de plan, cerințe din autoevaluare): fiecare devine `aria-pressed="true"` | Corect |
| Harta relațiilor: „Înainte” parcurge 4 etape cu texte diferite | Corect |
| Planul de eseu: 11 linkuri „Recitește” distincte, toate spre titluri existente; bifele din autoevaluare se activează | Corect |
| Tastatură: săgeata mută selecția într-un quiz; Space pe „Înainte” avansează | Corect |
| Lecția nu scrie în `localStorage` | Corect |
| Catalogul `/romana/opere`: patru carduri (Alexandru Lăpușneanul, Ion, Moara cu noroc, Povestea lui Harap-Alb), sortate alfabetic | Corect |
| Pagina principală: noua notă despre verificarea lecțiilor | Corect |
| Erori JavaScript / avertismente în consolă (toate scripturile) | Niciuna |

### Exerciții

Vezi `audit-exercitii-alexandru-lapusneanul-2026-10-26.md`, §4: parcurs complet, scor 11 din 15, restaurare după reîncărcare, „← Anterior”, absența răspunsurilor din HTML și din stocare, cheie proprie.

### Regresii pe celelalte opere

La 390 px (luminos) și 1280 px (întunecat): „Ion” (14 figuri, 49 de clicuri), „Moara cu noroc” (11 figuri, 46), „Povestea lui Harap-Alb” (13 figuri, 63) și paginile lor de exerciții se încarcă fără erori în consolă și fără scroll orizontal. Cheile de stocare ale celorlalte seturi rămân separate.

## 4. Modificări în cod comun (compatibile cu lecțiile existente)

| Fișier | Modificare | Motiv |
|---|---|---|
| `components/lesson/label-styles.ts` | Eticheta `citat`: „Citat din roman” → **„Citat din operă”** | Eticheta apărea și în „Moara cu noroc” (nuvelă) și „Povestea lui Harap-Alb” (basm), unde era inexactă; apare și în noua nuvelă |
| `lib/site/home.ts` | Nota de pe pagina principală: „Lecțiile publicate („Ion”…, „Moara cu noroc”…) sunt în curs de verificare.” → „Toate lecțiile publicate sunt în curs de verificare: nu au fost încă validate de un profesor.” | Lista omitea deja „Povestea lui Harap-Alb”; formularea generală nu mai trebuie actualizată la fiecare operă |

Nu au fost create componente noi și nu au fost adăugate dependențe. Lecțiile „Ion”, „Moara cu noroc” și „Povestea lui Harap-Alb” nu au fost modificate (doar afișarea etichetei de citat se schimbă în ele).

## 5. Defecte găsite în timpul lucrului

| # | Problema | Corectura |
|---|---|---|
| 1 | Formulări între ghilimele diferite de text (8 cazuri: „muște”, „întâia”, „poimâine/mâine”, „strice pre boieri”, „hidra”, „Iacob”, „înarmat”, „leacul de frică”) | Corectate după verificarea automată a citatelor (raportul de audit, §1.2) |
| 2 | Glosarul notelor autorului avea, la prima redactare, răspunsul corect mereu pe prima poziție | Pozițiile variază acum; test dedicat |
| 3 | Două id-uri de quiz cu diacritice | Înlocuite cu id-uri ASCII; test dedicat |
| 4 | Fișierele editate prin script Python au primit terminații CRLF | Readuse la LF înainte de verificări |
| 5 | Erori în scripturile mele de test (culori `oklch` necitite, prefixul „Varianta N:” al etichetelor, escapări) | Ale testelor, nu ale aplicației; corectate în scripturi |

## 6. Limite și ce rămâne

1. **Statutul operei la examen** (Negruzzi nu este autor canonic în programa 2026–2027) – decizie didactică, vezi raportul de audit, §0.
2. Limitele comune deja consemnate: scorul poate fi falsificat editând `localStorage`; răspunsurile quiz-urilor din lecție sunt în codul clientului (exercițiile, nu).
3. **Neverificat de mine:** Safari/Firefox, telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei.

## 7. Verificări manuale recomandate (cinci minute)

1. Pe telefon (sau DevTools, 390 px): parcurge harta capitolelor (2) și harta relațiilor (7.7), în ambele teme.
2. În „Replicile tiranului” (7.2) și „Cele patru motto-uri” (4.3): apasă pe câteva butoane; panoul trebuie să se schimbe și să se citească bine.
3. La exerciții: răspunde greșit la unul, apasă „Modifică răspunsul”, reîncarcă pagina și citește rezumatul.
4. Citește secțiunea 1 a lecției și decide dacă formularea despre statutul operei la examen este potrivită pentru elevii tăi.
