# Verificare în browser: „Moara cu noroc”

- **Data:** 2026-10-25.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Statusul lecției:** `draft-neverificat` (neschimbat).
- **Ce completează:** `audit-moara-cu-noroc-2026-10-25.md` (conținut) și `audit-exercitii-moara-cu-noroc-2026-10-25.md` (exerciții). Acesta din urmă spunea că parcursul în browser nu fusese verificat; aici este verificat.

## 1. Cum s-a testat

- **Aplicația:** build de producție (`npm run build` + `npm start`, port 3123).
- **Browser:** Google Chrome 155 (headless), comandat prin Chrome DevTools Protocol cu scripturi Node, fără dependențe noi în proiect. Scripturile sunt în directorul temporar al sesiunii, nu în proiect.
- **Ce înseamnă „manual” aici:** paginile au fost deschise într-un browser real și folosite prin clicuri, apăsări de taste, încărcări repetate și modificări ale `localStorage`. Un om **nu** s-a uitat la ele: capturile au fost citite de asistent, pe câteva figuri. Verificările de mai jos sunt automatizate sau pe capturi, nu o evaluare estetică umană.
- **Lățimi:** 320, 360, 390 (telefon), 768 (tabletă), 1280 (desktop). **Teme:** luminoasă și întunecată (prin `prefers-color-scheme`). Nu s-a testat butonul de comutare a temei.
- **Nu s-a testat:** Safari, Firefox, un telefon real, cititoare de ecran, zoom al textului la 200%.

## 2. Ce a funcționat

| Verificare | Rezultat |
|---|---|
| Lecția: titlu, metadate, 11 secțiuni, cuprins (80 de intrări), insigna „draft”, fără MDX nerandat | Corect |
| Toate cele 11 figuri: butoane apăsate unul câte unul, fără erori JavaScript în consolă | Corect |
| Figuri cu etape: „Înainte”, „Înapoi”, numerele, textul vocal (`aria-live`) | Corect |
| Harta relațiilor: selectarea fiecărui personaj; harta capitolelor (17 butoane); planul de eseu (inclusiv „Altă ordine”); lista de verificare (bifare, comutare între cerințe, păstrare) | Corect |
| Cele 3 quiz-uri din lecție (12 întrebări): selectare, verificare, feedback, reluare, focus mutat pe feedback și înapoi pe prima variantă | Corect |
| Quiz-urile din lecție **nu scriu** în `localStorage` (cheile rămân goale) | Corect |
| Tastatură: Enter pe butoane, Tab, săgeți pe variante, contur de focus vizibil | Corect |
| `prefers-reduced-motion`: nicio tranziție de mișcare; rămân doar tranziții de culoare/umbră pe butoane | Corect |
| Cuprins: click duce la `#9-autoevaluare`; toate ancorele din pagină au țintă; linkurile interne răspund 200, inclusiv ancora spre „Ion” | Corect |
| Catalog: cardul „Moara cu noroc” (Draft, „Teorie”, „Deschide lecția”), la fel ca „Ion”; slug inexistent → „Pagina nu a fost găsită” | Corect |
| Contrast (calculat pe toate textele): minim 5,36:1 (luminos) și 5,17:1 (întunecat), pe lecție și pe toate stările paginii de exerciții, la 390 și 1280 px | Corect |
| Scroll orizontal | Niciunul |

### Exerciții (`/romana/opere/moara-cu-noroc/exercitii`)

| Verificare | Rezultat |
|---|---|
| Parcurs complet: răspuns greșit → „Modifică răspunsul” → corect; răspuns ales și neverificat; reîncărcare; revenire la exerciții anterioare; răspuns scurt nerecunoscut; autoevaluare; rezumat | Corect |
| Scor așteptat vs. afișat: 7 corecte la prima verificare, 3 greșite, 1 nerecunoscut, 1 autoevaluat, 1 „corectat după feedback” | Identic, și după reîncărcare |
| Salvare: restaurează poziția, ciornele și rezultatele; în `localStorage` nu apar răspunsuri corecte sau explicații | Corect |
| Date locale invalide: JSON stricat, versiune veche, alt `setKey`, index invalid (99, −1, „x”, 1,5), revizie veche, id necunoscut, ciornă de tip greșit | Fără erori; sesiunea pornește curat sau ignoră intrarea |
| Text de 5000 de caractere forțat în câmp (peste `maxLength` = 200) | Serverul îl refuză: „Răspunsul nu este valid pentru acest exercițiu.” |
| „Începe o sesiune nouă”: dialogul de confirmare, focus pe „Renunță”, Escape anulează și readuce focusul, „Da, șterge progresul” resetează | Corect |
| Cheia de stocare a lui „Ion” nu este atinsă de sesiunea „Moara cu noroc” | Corect |
| Tastatură: săgeată pe variante, Space, Tab până la „Verifică răspunsul”, Enter → feedback, focus mutat pe titlul feedbackului | Corect |

## 3. Defecte găsite și corectate

### 3.1. Formulare inexactă rămasă într-o explicație din lecție (conținut)

Raportul anterior corectase formularea „Ghiță păstrează jumătate din banii însemnați”, dar o explicație dintr-un quiz din lecție (`alegeriQuiz`, „Ce face Ghiță?”, enunțul 3) conținea încă „nu-i spune că jumătate rămân la el”. Acum: „nu-i spune că jumătate din ei sunt partea lui”. Fișier: `content/romana/opere/moara-cu-noroc-interactiv.ts`.

### 3.2. Etichete tăiate sau suprapuse în figuri, pe telefon (vizual)

Test: pentru fiecare etapă a fiecărei figuri cu etape, la 5 lățimi, se măsoară dacă vreo etichetă iese din desen sau se suprapune cu alta.

- **Înainte:** 145 de probleme. Figurile 3 (Locul), 5 (Momentele subiectului), 7 (Ghiță, pas cu pas) și 8 (Harta relațiilor) aveau etichete tăiate la 320–390 px („ensiune”, „pozițiunea · I–II”), suprapuse (cele cinci etichete ale momentelor, „soț – soție” cu „învoială, complicitate”) și, la figura 5, suprapuse chiar și la 768 și 1280 px.
- **După:** 0 probleme, la toate cele 5 lățimi și în toate etapele.
- **Cum:**
  - `CanvasLabel` (comun) primește două proprietăți **opționale**: `align` („start”, „center”, „end”) și `className`. Valorile implicite dau exact aceeași ieșire ca înainte, deci figurile din „Ion” nu se schimbă.
  - `RelationEdge` primește un `shortLabel` opțional (text mai scurt pe ecrane înguste). „Ion” nu îl folosește.
  - Figura 5: etichetă pe două rânduri (nume și capitole); pe telefon se afișează doar eticheta momentului curent, ancorată la margine pentru primul și ultimul moment; eticheta „altă variantă” se ascunde pe telefon (informația rămâne în textul etapei).
  - Figurile 3 și 7: etichete ancorate la margine; în figura 3, un text scurt pe telefon.
  - Harta relațiilor: pozițiile personajelor laterale mutate spre interior (x = 22 și 78) și etichete scurte pe telefon („învoială”, „foști tovarăși”).
  - Nu s-a schimbat niciun fapt literar: etichetele lungi rămân neschimbate pe ecrane late.
- **Fișiere:** `components/lesson/interactive/step-figure.tsx`, `components/lesson/interactive/relation-map.tsx`, `components/lesson/figures/moara-cu-noroc/{locul-morii,momentele-subiectului,treptele-prabusirii}.tsx`, `content/romana/opere/moara-cu-noroc-interactiv.ts`.

### 3.3. Sesiune „terminată” cu răspunsurile invalidate (cod comun)

Dacă o sesiune era marcată „terminată” și toate răspunsurile ei erau invalidate (de exemplu, după ce exercițiile au fost modificate și reviziile nu mai coincideau), pagina afișa un rezumat gol: „0 din 0 exerciții verificate”. Acum, în acest caz, sesiunea reîncepe de la primul exercițiu. O sesiune terminată căreia i se păstrează măcar un răspuns, sau o sesiune terminată fără niciun răspuns (doar răsfoită), rămâne neschimbată.

- **Fișiere:** `lib/exercises/session-storage.ts`.
- **Teste adăugate:** 3 în `lib/exercises/session-storage.test.mjs`. Total: 56 din 56.
- Funcția este comună cu „Ion”; modificarea nu schimbă niciun alt caz.

## 4. Limite și aspecte care rămân

1. **Scorul poate fi falsificat local.** Cine editează manual `localStorage` (de exemplu, setează `firstStatus: "correct"` pentru un răspuns greșit) obține un rezumat modificat. Datele sunt ale elevului, pe dispozitivul lui; rezumatul spune „Rezultatul nu este o notă”. Nu s-a schimbat nimic: nu există server care să țină scorul.
2. **Quiz-urile din lecție** (12 întrebări) au răspunsurile în codul clientului, ca la „Ion”: sunt verificări în timpul lecturii, fără scor. Răspunsurile **exercițiilor** nu ajung în browser înainte de verificare (confirmat în HTML-ul generat și în pachetele JS).
3. **Butonul „⇅ Altă ordine a reperelor”** (planul de eseu) schimbă conținutul, dar nu expune starea (`aria-pressed`). Componentă comună cu „Ion”; nemodificat.
4. **„Ion” are aceeași categorie de probleme de etichete pe telefon** (figurile 5 și 8: de exemplu „Vasile Baciu” suprapusă cu „dispreț public pentru…”, „podul de lemn” cu „cap. I: spre sat”; și la 1280 px la figura 5). Nu am modificat „Ion”, conform cerinței. Noile proprietăți `align` și `className` ar putea fi folosite pentru a le corecta, într-o etapă separată.
5. **Neverificat:** vizual pe dispozitive reale, Safari/Firefox, cititoare de ecran, zoom 200%, butonul de comutare a temei. Rămân în sarcina unui om.

## 5. Verificări manuale recomandate (cinci minute)

1. Pe telefon sau în Chrome DevTools (390 px): deschide lecția și parcurge figurile 3, 5, 7 și 8 cu „Înainte”; nicio etichetă nu trebuie să fie tăiată sau suprapusă.
2. Același lucru în tema întunecată (setarea sistemului sau comutatorul din antet).
3. La exerciții: răspunde la 3–4 întrebări (una greșit, apoi „Modifică răspunsul”), reîncarcă pagina, verifică dacă te întoarce la același exercițiu cu răspunsurile păstrate.
4. Parcurge cu tastatura (Tab, săgeți, Enter) un exercițiu și un quiz din lecție.
5. Citește rezumatul final și verifică dacă scorul respectă regula „prima verificare”.

## 6. Verificări rulate la final

- `npx tsc --noEmit`: fără erori.
- `npm run lint`: fără erori.
- `npm run test:exercises`: 56 din 56.
- `npm run build`: reușit; `/romana/opere/moara-cu-noroc` și `/romana/opere/moara-cu-noroc/exercitii` prerandate.
