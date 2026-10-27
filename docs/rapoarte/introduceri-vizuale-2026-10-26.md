# Introduceri vizuale pentru lecțiile de română

- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Opere:** „Ion”, „Moara cu noroc”, „Povestea lui Harap-Alb”, „Alexandru Lăpușneanul”, „Enigma Otiliei”. Toate rămân `draft-neverificat`.

## 1. Ce s-a schimbat

**Antetul lecției** a fost înlocuit cu o introducere comună (`components/lesson/intro/lesson-intro.tsx`):

- insigna „Draft – în curs de verificare”, titlul operei (mare) și autorul (dedesubt), în același `h1`;
- o prezentare de una sau două propoziții, fără interpretări;
- 3–4 carduri: specie, curent (ca „încadrare posibilă”), temă (marcată „Interpretare”, cu precizarea „o formulare posibilă”) și anul apariției, cu precizările din lecție (de exemplu, „după prefața ediției din 1967”, „unele surse dau 1878”); fiecare card este un link spre secțiunea care explică informația;
- o ilustrație SVG proprie fiecărei opere, decorativă (`aria-hidden`);
- butonul „Exersează”;
- „Ce trebuie să reții pentru BAC?”: 3–4 idei, fiecare cu eticheta lecției (Cerință oficială, Despre roman/nuvelă/basm, Recomandare) și cu link „Detalii: <secțiunea>”.

**Textul introducerilor** stă separat, în `content/romana/opere/introduceri.ts`. El rezumă ce spune deja lecția; nu adaugă informații noi. Pentru „Alexandru Lăpușneanul”, prima idee spune că opera este material suplimentar (Negruzzi nu este autor canonic).

**Începutul lecțiilor.** Listele din „Cum să folosești această lecție” și din „2. Fișă rapidă” sunt afișate ca un set de carduri, pe două coloane de la 640 px (`components/lesson/card-grid.tsx`, folosit în MDX ca `<CardGrid>`). Textul MDX nu s-a schimbat: s-au adăugat doar cele două învelișuri (40 de linii noi în cele cinci fișiere, nicio linie modificată sau ștearsă). Titlurile și ancorele sunt aceleași.

**Ilustrațiile** (`components/lesson/intro/intro-art.tsx`) folosesc motive pe care lecțiile le verifică în text:

| Operă | Motive | Paletă |
|---|---|---|
| „Ion” | ogoare și brazde, drumul spre sat, podul de lemn, crucea de la marginea satului (lecția, 5.3) | chihlimbar, verde |
| „Moara cu noroc” | valea, drumul de la Ineu, cele cinci cruci, cârciuma și roata morii (4.3, 6.3) | smarald, piatră |
| „Povestea lui Harap-Alb” | fântâna, drumul probelor cu trei popasuri, castelul | indigo, cer |
| „Alexandru Lăpușneanul” | o curte domnească și o biserică, în lumina serii | roz închis, piatră |
| „Enigma Otiliei” | o stradă bucureșteană și o casă cu coloane, cu o fereastră luminată | violet, ardezie |

## 2. Animații

- Doar CSS (`app/globals.css`), aplicate numai sub `prefers-reduced-motion: no-preference`: intrarea treptată a textului și a cardurilor (0,5–0,7 s, întârzieri de cel mult 0,7 s), apariția ilustrației, trasarea unui drum, o deplasare de câțiva pixeli a unui plan, o rotire unică a roții morii, aprinderea ferestrei.
- Nicio animație nu se repetă. Conținutul este în HTML de la început; nimic nu așteaptă JavaScript (introducerea este o componentă de server).
- Cardurile și linkurile au doar tranziții scurte de culoare (și o ridicare de 2 px la cardurile din introducere), dezactivate cu mișcare redusă.

## 3. Verificări

| Verificare | Rezultat |
|---|---|
| `npm run test:exercises` (include noul `lib/content/introduceri.test.mjs`) | **168 din 168** |
| `npx tsc --noEmit` | fără erori |
| `npm run lint` | fără erori |
| `npm run build` | reușit, 17 pagini statice |

`introduceri.test.mjs` verifică: o introducere pentru fiecare operă; prezentarea de 1–2 propoziții (cel mult 260 de caractere); 3–4 carduri și 3–5 idei; fiecare trimitere duce la un titlu existent; tema este marcată ca interpretare; anul din introducere apare în fișa rapidă a lecției; avertismentul despre 1878 la „Harap-Alb”; mențiunea „material suplimentar” la „Lăpușneanul”; cele două `<CardGrid>` din fiecare lecție.

**În browser** (Chrome 155 headless, build de producție; 5 opere × 4 lățimi — 320, 390, 768, 1280 px — × 2 teme = 40 de combinații):

| Verificare | Rezultat |
|---|---|
| Un singur `h1`, cu titlul complet; insigna draft prezentă | Corect, 40/40 |
| Linkuri din introducere fără țintă | 0 |
| Scroll orizontal; introducere ieșită din ecran | 0 |
| Contrast minim al textului din introducere și din carduri | 6,04:1 (luminos), 5,17:1 (întunecat; butonul „Exersează”, același ca înainte) |
| Ținte de atingere sub 24 px | 0 (linkurile „Detalii” au fost mărite după prima rulare) |
| Animații: niciuna infinită; după 2,6 s toate elementele sunt vizibile și drumurile trasate | Corect |
| `prefers-reduced-motion: reduce`: 0 animații, totul vizibil imediat | Corect, la toate cele 5 opere |
| Tastatură: Tab ajunge la primul card, cu contur de focalizare; Enter duce la `#2-fisa-rapida` | Corect |
| Erori sau avertismente în consolă (inclusiv erori de hidratare React) | 0 |
| Cardurile din „Fișă rapidă” și „Cum să folosești”: 2 seturi pe lecție, o coloană pe telefon, două de la 768 px | Corect |
| Regresii: scripturile din verificările anterioare (lecțiile „Enigma Otiliei” și „Alexandru Lăpușneanul”, la 10 combinații fiecare; paginile tuturor operelor și ale exercițiilor) | 0 ancore lipsă, 0 scroll orizontal, 0 erori; harta relațiilor fără suprapuneri |

Capturile au fost citite de mine (Claude), nu de un om. **Netestat:** Safari, Firefox, un telefon real, cititoare de ecran, zoom 200%, butonul de comutare a temei.

## 4. Ce ar trebui validat

1. Formulările scurte ale temelor („satul ardelean și pământul”, „dorința de înavuțire”, „drumul de maturizare”, „puterea prin teroare”, „familia și lupta pentru moștenire”) condensează interpretările din lecții; sunt marcate „Interpretare”, dar un profesor ar trebui să le confirme.
2. „Curent: realism/romantism” apare ca „o încadrare posibilă”, ca în secțiunile 3.2. „Harap-Alb” nu are card de curent, pentru că lecția nu propune unul.
3. Ilustrațiile sunt decorative și stilizate; nu reproduc locuri sau clădiri reale.
4. Pe telefon, „Ce trebuie să reții” ocupă aproximativ un ecran și jumătate; dacă e prea lung, se pot păstra trei idei.

---

## 5. Etapa a doua: conținut pliabil (aceeași zi)

### Ce s-a schimbat

- **„Ce trebuie să reții pentru BAC?”** afișează inițial primele 3 idei. Restul (câte una la „Ion”, „Moara cu noroc”, „Harap-Alb” și „Enigma Otiliei”) apar după butonul „Vezi toate ideile (încă 1)”, care devine „Restrânge”. „Alexandru Lăpușneanul” are doar 3 idei, deci nu are buton. Ordinea ideilor la „Harap-Alb” și „Enigma Otiliei” a fost schimbată, ca primele trei să fie cele despre examen; numărul de capitole a trecut pe locul 4. Nicio idee nu a fost eliminată.
- **„Cum să folosești această lecție”** este un singur bloc pliabil, închis inițial: se văd cele patru etichete (Despre roman/nuvelă/basm, Interpretare, Cerință oficială, Recomandare) și titlul „Etichetele din lecție, citatele și ediția folosită”. Înăuntru: legenda, notele despre citate și ediție și, la „Ion”, exercițiul „Verifică-te · Cum citești lecția”.
- **„1. Ce trebuie să știi despre examen”**: fiecare citat oficial (17 în total, în cele cinci lecții) este într-un bloc pliabil al cărui titlu spune ideea și pagina, de exemplu „Costache Negruzzi nu este printre autorii canonici (Programa, p. 6)”. Citatele, sursele și notele de incertitudine sunt neschimbate, înăuntru. Rămân vizibile: paragrafele explicative („Programa nu numește…”, „Ce înseamnă asta pentru tine”), listele, recomandările și figura cu punctajul de la „Ion”.
- Componenta nouă `components/lesson/disclosure.tsx` folosește `<details>`/`<summary>` native: merge cu tastatura (Enter, Space) și fără JavaScript, iar căutarea din browser deschide blocul care conține textul găsit. Indicatorul ▾ se rotește la deschidere; cu mișcare redusă, fără tranziție.
- În MDX s-au adăugat doar etichetele `<Disclosure …>` și `</Disclosure>`; un script a verificat că, fără ele, textul fiecărei lecții este identic cu cel dinainte. Titlurile și ancorele sunt aceleași.

### Verificări

| Verificare | Rezultat |
|---|---|
| `npm run test:exercises` (cu testele noi: fiecare citat oficial din secțiunea 1 e într-un bloc pliabil, nicio recomandare nu e ascunsă, „Cum să folosești” e un singur bloc, primele 3 idei includ o cerință oficială, etichetele se închid corect) | **188 din 188** |
| TypeScript, lint | fără erori |
| Build | reușit, 17 pagini statice |
| Browser: 5 opere × 5 lățimi (320, 360, 390, 768, 1280) × 2 teme = 50 de combinații: 3 idei vizibile inițial, toate după „Vezi toate ideile”, din nou 3 după „Restrânge”; toate blocurile închise inițial și deschise la cerere; scroll orizontal 0; ancore lipsă 0; erori în consolă 0 | **0 eșecuri** |
| Înălțimea minimă a unui titlu de bloc pliabil / a butonului „Vezi toate ideile” | 98 px / 44 px |
| Contrast minim în blocuri (închise și deschise) | 6,04:1 luminos, 5,17:1 întunecat |
| Tastatură: Tab ajunge la bloc, cu contur; Enter îl deschide; Space îl închide | Corect |
| Mișcare redusă: indicatorul ▾ fără tranziție | Corect |
| Regresii (scripturile anterioare: introduceri, lecții, exerciții) | 0 eșecuri |

**Spațiul ocupat la 390 px** (de la titlul „Cum să folosești” la „2. Fișă rapidă”, cu tot ce e pliabil închis, față de tot deschis): „Enigma Otiliei” 1 737 px față de 4 101 px; „Alexandru Lăpușneanul” 2 050 px față de 4 513 px; „Moara cu noroc” 1 507 px față de 3 525 px; „Harap-Alb” 1 628 px față de 4 602 px; „Ion” 2 590 px față de 7 144 px (la „Ion”, blocul „Cum să folosești” conține și un exercițiu).

### Rezumate la începutul secțiunilor (analiză, nu implementare)

- Secțiunile 3–8 încep, aproape toate, cu „X.1. Ce cere baremul”, un citat oficial din barem. Același bloc pliabil li s-ar putea aplica, cu titluri de tipul „Baremul: 6 puncte pentru două trăsături ale încadrării”. Nu s-a făcut acum, pentru că cererea viza secțiunea 1.
- Schemele vizuale există deja acolo unde ajută: structura (secțiunea 2), harta relațiilor și caracterizarea (7), planul de eseu (8), autoevaluarea. Nu am adăugat altele.
- Un rezumat „Pe scurt” la începutul fiecărei secțiuni ar însemna text literar nou (interpretări condensate). L-am amânat până la validarea de către un profesor.
