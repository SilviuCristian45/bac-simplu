# Redesign vizual complet: BAC Simplu

**Data:** 2026-10-30. **Direcția:** A, „Caietul” (editorial), conform `docs/rapoarte/audit-vizual-homepage.md`. **Stadiu:** implementat, necomis. Nicio operație Git de scriere nu a fost făcută de mine; modificările de mai jos sunt față de commit-ul `a55c086` („before redesignd”).

## 1. Ce s-a făcut

### Sistem vizual (pe tot site-ul)
- **Literata** (titluri și zone editoriale) încărcat prin `next/font/google`, fără dependențe noi, cu subseturile `latin` și `latin-ext`. Se aplică prin regula de bază `h1, h2, h3` din `app/globals.css`, deci acoperă homepage-ul, lecțiile, exercițiile, paginile de eroare și catalogul. Textul de corp și interfața rămân în Geist (sans).
- **Paletă „hârtie și cerneală”** prin aceiași jetoni semantici (`--canvas`, `--surface`, `--line`, `--ink*`), deci se propagă fără modificări în componente:
  - tema deschisă: hârtie caldă (`#f8f4ea`), cerneală (`#1c1a16`);
  - tema închisă: cărbune cald (`#15130f`) cu strălucire caldă, nu negru zinc cu strălucire albastră;
  - accentul rămâne albastrul brandului (`#2459d6` / `#2563eb`).
- **Păstrate neschimbate:** culorile individuale ale operelor, ilustrațiile SVG, etichetele semantice (chip-urile „Despre roman”, „Interpretare”, „Cerință oficială”, „Recomandare”), animațiile de intrare ale lecțiilor, logo-ul, numele, sloganul.

### Homepage (`app/page.tsx`), secțiune cu secțiune
1. **Hero:** „Română, pas cu pas.” în Literata, două CTA-uri („Începe cu o operă”, „Vezi cum arată o lecție”). În dreapta, un **specimen real** din lecția „Ion”: cerința oficială despre Subiectul al III-lea, cu sursa, citată cuvânt cu cuvânt.
2. **Banda „Continuă de unde ai rămas”:** apare doar când browserul conține o sesiune de exerciții începută și neterminată.
3. **Cifre:** „19 opere · 266 exerciții cu explicații”, calculate din date, nu scrise de mână.
4. **„Alege o operă”:** operele pe patru grupe (Proză 8, Poezie 6, Teatru 3, Critică și teorie literară 2), cu bară de salt între grupe, miniatura ilustrației fiecărei opere în culoarea ei, autor și „Teorie · N exerciții”. Nota: „Grupele sunt organizate pentru navigare în platformă și nu reprezintă o clasificare oficială a programei BAC.”
5. **„Cum arată o lecție”:** trei fragmente exacte din „Ion” (Despre roman, Interpretare, Recomandare), plus cei trei pași (teorie, exerciții, verificare) ca listă numerotată, nu carduri.
6. **„Stadiul conținutului”:** blocul cu badge-ul „Draft – în curs de verificare” și mesajul că lecțiile nu au fost validate de un profesor.
7. **Subsol:** nume, slogan, linkuri, nota despre documentele oficiale și despre imaginile generate cu AI.

Pagina `/romana/opere` folosește aceeași listă grupată (în locul cardurilor), cu aceeași notă.

### Mesaje corectate
Pașii „Rezolvă exerciții” și „Verifică răspunsurile” nu mai sunt marcați „în dezvoltare” (corectat încă în rebranding); eliminate referințele rămase la „Materii”; navigația nu mai conține „Cum funcționează”, ci „Opere”, „Cum arată o lecție” și „Despre conținut”.

## 2. Gruparea operelor
- Harta explicită `slug → grupă` este în `lib/site/opere-grupe.ts` (nu derivată din etichete sau titluri). Tipul `Record<OperaSlug, GrupaId>` face ca TypeScript să respingă o operă nouă fără grupă.
- `groupOpere()` aruncă o eroare la build dacă o operă nu are grupă, deci nu poate dispărea tăcut de pe pagină.
- Încadrările (verificate individual în metadata fiecărei opere, la pasul anterior):
  - **Proză (8):** Ion, Enigma Otiliei, Baltagul, Ultima noapte de dragoste…, Moromeții (vol. I), Moara cu noroc, Alexandru Lăpușneanul, Povestea lui Harap-Alb (text epic în proză).
  - **Poezie (6):** Luceafărul, Scrisoarea III, Plumb, Testament, Eu nu strivesc corola de minuni a lumii, Leoaică tânără, iubirea.
  - **Teatru (3):** O scrisoare pierdută, O noapte furtunoasă, Iona.
  - **Critică și teorie literară (2):** În contra direcției de astăzi în cultura română, Sincronismul.
- Ordinea în grupă este alfabetică după titlu.

## 3. Corecția `shortTitle()`
- **Defect:** expresia anterioară tăia primul și ultimul ghilimel al titlului. „Moromeții” (volumul I)” devenea `Morometii” (volumul I)`, iar „Sincronismul” în „Istoria…”” pierdea ghilimeaua de deschidere.
- **Corecție:** `shortTitle()` scoate doar perechea de ghilimele care deschide titlul, deci ghilimelele următoare rămân echilibrate: `Moromeții (volumul I)`, `Sincronismul în „Istoria literaturii române contemporane”`.
- **Funcție nouă:** `titleWithoutAuthor()`, folosită în `lesson-intro.tsx` pentru titlul mare al lecției, ca să păstreze ghilimelele titlului exact ca în metadata. Înainte, înfășurarea cu „ ” compensa, din întâmplare, defectul; acum nu mai depinde de el. Titlul afișat pentru „Ion” este neschimbat.

## 4. Teste adăugate
Script nou: `npm run test:site` (248 teste, include și `introduceri.test.mjs` existent).

| Fișier | Ce verifică |
|---|---|
| `lib/site/opere-grupe.test.mjs` | fiecare slug din `OPERA_SLUGS` are exact o grupă validă; harta nu are slug-uri inexistente; distribuția 8 / 6 / 3 / 2; încadrările confirmate (Scrisoarea III, Ultima noapte…, Harap-Alb); fiecare fișier `.mdx` din `content/romana/opere/` are grupă (o operă nouă nu poate lipsi accidental); `groupOpere` păstrează toate operele, le sortează și refuză o operă fără grupă; nota despre navigare |
| `lib/content/lesson.test.mjs` | cazurile de ghilimele de mai sus, titluri fără ghilimele sau cu ghilimea neînchisă, și, pentru **toate cele 19 lecții reale**, titluri echilibrate în ambele forme |
| `lib/site/specimen.test.mjs` | fragmentele de pe homepage sunt citate **exact** din `ion.mdx`, cu sursa, eticheta și secțiunea reale |

## 5. Verificări tehnice rulate
- `npm run lint`: fără erori.
- `npx tsc --noEmit`: fără erori.
- `npm run test:exercises`: **424 / 424** trecute.
- `npm run test:site`: **248 / 248** trecute.
- `npm run build`: reușit.

## 6. Verificări în browser
Chrome real (Chrome DevTools Protocol), cu emulare de dispozitiv, în tema deschisă și în cea închisă, la 1440, 768 și 390 px (mobil emulat), pe: homepage, `/romana/opere`, lecția „Ion”, exercițiile „Ion” și lecția „Moara cu noroc” (identitate cromatică diferită).

- **Fără scroll orizontal** pe niciuna dintre cele 30 de combinații (pagină × lățime × temă).
- **Literata:** titlurile folosesc fontul (`font-family` calculat: `Literata`). Diacriticele `ș ț ă â î` (și majusculele) apar corect, cu virgulă dedesubt, în hero, titluri, imaginea Open Graph și corpul lecțiilor (verificat vizual la mărime mare).
- Lecțiile păstrează identitatea per operă (ilustrația, culorile, chip-urile); exercițiile arată coerent cu noua paletă, în ambele teme.
- **Banda „Continuă”**, testată cu date seed în `localStorage`:
  - fără date: nu apare;
  - sesiune neterminată: „Ion · exercițiul 5 din 12”;
  - două sesiuni: se alege cea salvată cel mai recent;
  - sesiune terminată sau JSON corupt: nu apare.
  Componenta citește, fără să scrie, formatul `version: 1` existent; formatul salvat și logica de salvare nu au fost modificate.

## 7. Limite și observații
- **Nu s-a verificat pe un telefon real**; mobilul este emulat. Nu s-a testat cu cititor de ecran și nu s-a măsurat contrastul cu un instrument (apreciat doar vizual, cu jetoni calculați pentru lizibilitate).
- **Tema deschisă și cea închisă** au fost verificate prin emularea preferinței de sistem; comutatorul manual de temă nu a fost exercitat în această sesiune.
- **Pagina este mai lungă:** homepage-ul măsoară acum ~3870 px la desktop și ~6140 px la mobil (față de ~2240 și ~3480 înainte). Cauza: catalogul grupat cu miniaturi și secțiunea „Cum arată o lecție”. O variantă viitoare ar putea plia grupele pe mobil.
- **Specimenul** este o citare a lecției „Ion”; dacă textul lecției se schimbă, `specimen.test.mjs` va eșua și îl va semnala.
- **Subsol și „Stadiul conținutului”:** textele evită afirmații generale despre surse. Din cele 19 lecții, doar 5 au o secțiune numită „## Surse”; de aceea textele spun doar că cerințele sunt marcate cu „Cerință oficială” și se raportează la documentele oficiale, nu că fiecare lecție listează toate sursele. Merită verificat separat.
- **Fonturile** se descarcă de pe Google Fonts la build (auto-găzduite apoi); build-ul cere acces la rețea, ca și până acum pentru Geist.
- **Prompt de implementare anterior:** cererea trimitea la „promptul complet de implementare transmis anterior”. Nu există în conversație; am folosit ca specificație raportul `audit-vizual-homepage.md` și instrucțiunile din ultimul mesaj.
- Nu au apărut probleme care să ceară modificarea logicii funcționale sau a formatului datelor.

## 8. Fișiere

**Modificate:** `README.md`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/romana/opere/page.tsx`, `components/lesson/intro/lesson-intro.tsx`, `components/site/site-footer.tsx`, `components/site/site-header.tsx`, `lib/content/lesson.ts`, `package.json` (script `test:site`).

**Noi:**
- Componente: `components/home/continue-strip.tsx`, `components/home/hero-specimen.tsx`, `components/home/label-chip.tsx`, `components/home/opera-groups.tsx`.
- Date și logică: `lib/site/catalog.ts`, `lib/site/opere-grupe.ts`, `lib/site/specimen.ts`.
- Teste: `lib/content/lesson.test.mjs`, `lib/site/opere-grupe.test.mjs`, `lib/site/specimen.test.mjs`.
- Raport: `docs/rapoarte/redesign-vizual-complet-2026-10.md`.

**Neatinse:** conținutul lecțiilor și al exercițiilor, răspunsurile, rutele, `proxy.ts`, formatul salvat în `localStorage`, logica de corectare, portretele din „Ion”, brandingul (nume, slogan, monogramă, accent).

## 9. Decizii rămase
1. Dacă păstrezi textul lecțiilor în sans (lizibilitate) sau vrei și corp serif în zonele de lectură lungă; acum doar titlurile h1–h3 sunt serif.
2. Pliere pe mobil a grupelor de opere, ca să scurtăm pagina.
3. Verificarea cu o persoană reală pe telefon, în ambele teme.

## 10. Etapa de verificare și finisare (2026-10-30)

### Modificări făcute
- **Grupe pliabile sub 768 px** (`components/home/opera-groups-accordion.tsx`, nou; `opera-groups.tsx` îl folosește). Antetul fiecărei grupe e un `<button>` cu `aria-expanded` și `aria-controls`; prima grupă e deschisă. De la 768 px în sus toate grupele sunt vizibile, iar antetul nu mai e buton. Chip-urile de salt deschid grupa țintă. Înălțimea paginii pe mobil: ~6140 → ~4980 px. Panourile pliate sunt `display: none`, deci linkurile din ele nu primesc focus.
- **Titlul lecției la 768–1023 px** (`lesson-intro.tsx`): cuvinte lungi ca „Moromeții” depășeau cu ~9 px coloana h1; am coborât dimensiunea în acest interval (`md:text-4xl lg:text-5xl`).

### Rezultate verificate în browser (build de producție)
- Tema manuală: Întunecată/Luminoasă/Sistem aplicate pe homepage, catalog, lecție, exerciții; persistă după refresh (`bac-simplu-tema`); alegerea manuală suprascrie preferința sistemului; „Sistem” urmărește schimbarea; Escape închide panoul, iar focusul revine pe buton.
- Tastatură: Enter și Space comută grupele, Tab intră în panou, etichetele butoanelor sunt corecte.
- Contrast text (calcul WCAG, 2 teme × 5 pagini): 0 elemente sub AA. Răspuns corect: 7,23 (deschis) / 10,7 (închis). Inelul de focus: minim 3,33:1 (închis), 5,5+ în rest.
- Regresii: banda „Continuă” (4 cazuri, la fel ca înainte), breadcrumb-uri, navigare home → operă → exerciții, avansarea în exerciții și salvarea sesiunii.
- Fără scroll orizontal la 1440/768/390, în ambele teme; titlurile cu ghilimele se afișează corect.

### Nu a fost testat / neterminat
- Starea „greșit” (roșu) nu a fost măsurată; primul răspuns testat era cel corect.
- După fixul h1 (768 px) am refăcut build-ul, dar **nu am rerulat** măsurătoarea la 768 px, nici lint/tsc/teste după această ultimă modificare.
- Hash-ul din URL la încărcare (ex. `/#grupa-acasa-teatru`) nu deschide automat grupa pe mobil; doar chip-urile o fac.
- Tot netestat: telefon real, cititor de ecran, instrument dedicat de contrast, stările de eroare ale exercițiilor cu scurt răspuns.
