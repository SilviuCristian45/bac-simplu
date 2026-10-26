# Verificare tehnică și în browser: „Povestea lui Harap-Alb”

- **Data:** 2026-10-25.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Statusul lecției:** `draft-neverificat`.
- **Completează:** `audit-povestea-lui-harap-alb-2026-10-25.md` (surse și conținut) și `audit-exercitii-povestea-lui-harap-alb-2026-10-25.md` (exerciții).

## 1. Cum s-a testat

- **Aplicația:** build de producție (`npm run build` + `npm start`, port 3123).
- **Browser:** Google Chrome 155 (headless), comandat prin Chrome DevTools Protocol, cu scripturi Node, fără dependențe noi în proiect (aceeași metodă ca în `verificare-browser-moara-cu-noroc-2026-10-25.md`). Scripturile sunt în directorul temporar al sesiunii, nu în proiect.
- **Ce înseamnă „în browser”:** paginile au fost deschise într-un browser real și folosite prin clicuri, taste, încărcări repetate și modificări ale `localStorage`. **Un om nu s-a uitat la ele:** capturile le-am citit eu, pe câteva figuri (lecția, drumul, probele, evoluția, harta relațiilor, în ambele teme).
- **Lățimi:** 320, 360, 390 (telefon), 768 (tabletă), 1280 (desktop). **Teme:** luminoasă și întunecată (prin `prefers-color-scheme`).
- **Nu s-a testat:** Safari, Firefox, un telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei.

## 2. Verificări tehnice (comenzile reale din `package.json`)

| Comandă | Rezultat |
|---|---|
| `npx tsc --noEmit` | fără erori |
| `npm run lint` | fără erori |
| `npm run test:exercises` | **76 din 76** (inclusiv `harap-alb.test.mjs`) |
| `npm run build` | reușit; `/romana/opere/povestea-lui-harap-alb` și `/romana/opere/povestea-lui-harap-alb/exercitii` prerandate |

Build-ul validează la rulare și ancorele exercițiilor față de titlurile lecției (`lib/exercises/registry.ts`).

## 3. Ce a funcționat în browser

| Verificare | Rezultat |
|---|---|
| Lecția: titlu, metadate, 12 secțiuni (H2), 35 de subsecțiuni (H3), cuprins (94 de intrări), insigna „draft”, fără MDX nerandat, 21 de callout-uri și 73 de etichete de tip | Corect |
| Catalog: cardul „Povestea lui Harap-Alb” (Draft, „Teorie”, „Deschide lecția”), alături de „Ion” și „Moara cu noroc” | Corect |
| Toate cele 13 figuri randate; 74 de clicuri pe butoanele figurilor; stări selectate (`aria-pressed`) corecte | Corect |
| Figurile cu etape (harta drumului, momentele subiectului, evoluția, harta relațiilor): „Înainte”, „Înapoi”, numerele, textul vocal (`aria-live`) | Corect |
| Cele 3 quiz-uri (18 întrebări), parcurse în două treceri (înainte și invers): fiecare întrebare are **exact un răspuns corect**, iar toate variantele greșite dau feedback cu explicație și sursă; reluarea funcționează | Corect |
| Quiz-urile din lecție nu scriu în `localStorage` | Corect |
| Cele 4 explorări (probe, formule, comparație, laborator): fiecare element de selectat se activează, panoul se schimbă | Corect |
| Planul de eseu: linkurile „Recitește” (6) duc la titluri existente; lista de autoevaluare (bifare, comutare între cerințe) | Corect |
| Cuprins: click duce la `#10-autoevaluare`; nicio ancoră fără țintă; linkurile interne răspund 200 | Corect |
| Contrast (calculat pe toate textele): minim 6,04:1 (luminos) și 5,17:1 (întunecat), pe lecție și pe toate stările paginii de exerciții, la 390 și 1280 px | Corect |
| Scroll orizontal | Niciunul |
| `prefers-reduced-motion`: nicio tranziție de mișcare; rămân doar tranziții de culoare ale etichetelor de quiz | Corect |
| Tastatură: Enter și Space pe „Înainte”; Space pe un buton de selectare (probe) îl activează; săgeți pe variantele quiz-urilor; contur de focus vizibil (2 px) | Corect |
| Erori JavaScript / avertismente în consolă (toate testele) | Niciuna |

### Exerciții
Vezi `audit-exercitii-povestea-lui-harap-alb-2026-10-25.md`, §4: parcurs complet, scor 11 din 15, restaurare după reîncărcare, date locale invalide, absența răspunsurilor în HTML și în stocare, cheie proprie.

### Regresii pe celelalte opere
„Ion” (14 figuri, 63 de clicuri) și „Moara cu noroc” (11 figuri, 57 de clicuri), lecțiile și paginile de exerciții: se încarcă, fără erori în consolă. Testul de geometrie al etichetelor pe „Moara cu noroc” dă în continuare 0 probleme. Cheia de stocare a lui „Ion” nu este creată sau modificată de sesiunea noului set.

## 4. Testul de geometrie al figurilor

Pentru fiecare etapă a fiecărei figuri cu etape, la 320, 360, 390, 768 și 1280 px, se măsoară dacă vreo etichetă iese din desen sau se suprapune cu alta; pentru harta relațiilor se măsoară și nodurile (decupare, suprapuneri între noduri și cu etichete).

| Figură | Rezultat final |
|---|---|
| Harta drumului (7 etape), momentele subiectului (5), evoluția (7) | 0 probleme |
| Harta relațiilor (5 etape) | 0 probleme (după corecție) |

## 5. Defecte găsite și corectate

### 5.1. Harta relațiilor: noduri tăiate și etichete suprapuse (vizual)
- **Înainte** (șase personaje, nodurile laterale la 16% și 84%): **90 de probleme** la 320–1280 px: nodurile „Sfânta Duminică” și „Fata lui Roș” tăiate la margine pe telefon; „Verde-împărat” suprapus cu „Sfânta Duminică”; etichetele „tovarăși” și „slugă – stăpân prin jurământ” peste noduri, inclusiv pe desktop.
- **Cauza:** nume de noduri prea late pentru un desen cu șase personaje într-o fereastră de 270 px; etichetele de muchie sunt așezate la mijlocul muchiei, deci nu încap între noduri apropiate.
- **Corecția:** harta are acum cinci personaje (Harap-Alb în centru; Spânul, Sfânta Duminică, calul și fata lui Roș în colțuri), desenul este pătrat (`ratio="1 / 1"`), iar etichetele lungi au variante scurte pe telefon („jurământ”, „ajutor”, „dragoste”). Verde-împărat nu mai este nod: apare în detaliile Spânului și în textul etapei, iar nota figurii spune ce personaje nu sunt pe hartă.
- **După:** 0 probleme la toate cele 5 lățimi.

### 5.2. Formulări aproximative între ghilimele (conținut)
Verificarea citatelor (vezi raportul de audit, §1.2) a prins „se bat în capete” și „se face roș cum îi gotca”, scrise între ghilimele, dar diferite de text. Corectate la forma din text.

### 5.3. Afirmații adevărat/fals toate false (exerciții)
Vezi raportul de audit al exercițiilor, §5.

### 5.4. Ce nu a fost defect
Erorile apărute în scripturile mele (regex-uri scăpate greșit, o variabilă `locked` folosită în două sensuri, un buton dezactivat ales din greșeală, o codare stricată de PowerShell la un script) au fost ale testelor, nu ale aplicației. Au fost corectate în scripturi.

## 6. Modificări în componente comune (compatibile cu lecțiile existente)

- **Nou:** `components/lesson/interactive/detail-explorer.tsx` (explorare generică: alegi un element, citești câmpurile lui). Folosit de patru figuri din această lecție.
- **Extinse, cu valori implicite neschimbate:** `components/lesson/label-styles.ts` și `content-labels.ts` (eticheta „Despre basm”). Celelalte componente („CanvasLabel”, „RelationMap”) au fost extinse în sesiunea anterioară cu proprietăți opționale; nu au fost modificate acum.
- Verificarea de regresie de mai sus nu a găsit diferențe în „Ion” sau „Moara cu noroc”.
- **Nu a fost modificat** nimic în lecțiile „Ion” și „Moara cu noroc”, în temă, în autentificare sau în arhitectura aplicației. Nu au fost adăugate dependențe.

## 7. Limite și ce rămâne

1. **Butonul „⇅ Altă ordine a reperelor”** din planul de eseu (componentă comună) schimbă conținutul, dar nu expune starea (`aria-pressed`). Neschimbat.
2. **Scorul exercițiilor poate fi falsificat** editând manual `localStorage` (comun tuturor seturilor; vezi raportul „Moara cu noroc”).
3. **Quiz-urile din lecție** au răspunsurile în codul clientului (verificări în timpul lecturii, fără scor), ca la „Ion” și „Moara cu noroc”. Răspunsurile **exercițiilor** nu ajung în browser înainte de verificare.
4. **„Ion” are etichete suprapuse pe telefon** în figurile 5 și 8 (vezi raportul „Moara cu noroc”). Nu au fost modificate.
5. **Neverificat de mine:** Safari/Firefox, telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei.

## 8. Verificări manuale recomandate (cinci minute)

1. Pe telefon (sau în DevTools, 390 px): deschide lecția și parcurge cu „Înainte” harta drumului (2), evoluția (7.2) și harta relațiilor (7.7); nicio etichetă sau nod nu trebuie să fie tăiat sau suprapus.
2. Același lucru în tema întunecată.
3. În „Diagrama probelor” (5.2): apasă pe 4–5 încercări; panoul trebuie să se schimbe și să se citească bine pe telefon.
4. La exerciții: răspunde la 3–4 întrebări (una greșit, apoi „Modifică răspunsul”), reîncarcă pagina, verifică dacă te întoarce la același exercițiu cu răspunsurile păstrate; citește rezumatul.
5. Parcurge cu tastatura (Tab, săgeți, Enter, Space) un quiz și o explorare.
