# Audit: cele 16 exerciții pentru lecția „Enigma Otiliei”

- **Set auditat:** `content/romana/exercitii/enigma-otiliei.ts` (cheia `romana/enigma-otiliei`), afișat la `/romana/opere/enigma-otiliei/exercitii`.
- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare pedagogică făcută de un profesor.
- **Statusul lecției:** `draft-neverificat`.
- **Surse:** lecția `enigma-otiliei.mdx`, raportul `audit-enigma-otiliei-2026-10-26.md`, ediția G. Călinescu, *Enigma Otiliei*, BPT nr. 53–54, Editura pentru Literatură, 1967.

Sistemul de exerciții (tipuri, corectare pe server, registru, sesiune, salvare locală) este cel comun. Nu a fost modificat.

---

## 1. Inventar

| # | Id | Tip | Dificultate | Ce verifică | Secțiunea din lecție |
|---|---|---|---|---|---|
| 1 | `otilia-mc-felix-origine` | Alegere multiplă | Ușor | Felix vine din Iași | 7.3 |
| 2 | `otilia-mc-aparitie` | Alegere multiplă | Ușor | Anul apariției (1938) | 2 |
| 3 | `otilia-af-casatorie` | Adevărat/fals (F) | Mediu | Otilia nu se căsătorește cu Felix | 5.4 |
| 4 | `otilia-mc-furt` | Alegere multiplă | Ușor | Stănică fură banii | 5.3 |
| 5 | `otilia-mc-suma` | Alegere multiplă | Dificil | Pachetul de o sută de mii dat lui Pascalopol | 5.3 |
| 6 | `otilia-mc-incipit` | Alegere multiplă | Mediu | „nu stă nimeni aici” | 5.2 |
| 7 | `otilia-mc-enigma` | Alegere multiplă | Mediu | Cine spune „Pentru mine e o enigmă” | 4.2 |
| 8 | `otilia-af-structura` | Adevărat/fals (A) | Mediu | Incipit și final în strada Antim | 6.3 |
| 9 | `otilia-mc-perspectiva` | Alegere multiplă | Dificil | Narator omniscient, privirea lui Felix | 6.4 |
| 10 | `otilia-mc-tip` | Alegere multiplă | Mediu | Moș Costache, „Avarul” (prefața) | 3.3 |
| 11 | `otilia-mc-caracterizare` | Alegere multiplă | Dificil | Caracterizare directă, de narator | 7.8 |
| 12 | `otilia-af-adoptie` | Adevărat/fals (F) | Ușor | Aglae se opune adoptării | 7.6 |
| 13 | `otilia-mc-balzac` | Alegere multiplă | Mediu | Mediul descris amănunțit | 3.3 |
| 14 | `otilia-mc-felix-final` | Alegere multiplă | Ușor | Felix, profesor universitar | 5.4 |
| 15 | `otilia-ra-strada` | Răspuns scurt (cuvinte-cheie) | Ușor | Strada Antim | 5.2 |
| 16 | `otilia-ra-comentariu-final` | Răspuns scurt (autoevaluare) | Dificil | Comentariul plecării Otiliei | 5.4 |

**Distribuție:** 11 alegere multiplă, 3 adevărat/fals (două false, una adevărată), 2 răspuns scurt; 6 ușoare, 6 medii, 4 dificile; fapte (1–8, 12, 14, 15), concepte aplicate (9–11, 13), interpretare și argumentare (16).

**Ancore:** toate cele 16 trimiteri există, iar etichetele coincid cu titlurile din lecție (verificat de test și la build, prin `lib/exercises/registry.ts`).

---

## 2. Verificarea conținutului

Fiecare fapt și citat a fost căutat în OCR-ul ediției și văzut pe imaginea paginii (raportul de audit, §2).

| Ex. | Afirmația | Unde |
|---|---|---|
| 1 | „sosise cu o oră mai înainte în București venind din Iași” | vol. I, p. 9 |
| 2 | 1938 | prefața, vol. I, p. V–VI |
| 3 | Otilia pleacă cu Pascalopol și se căsătorește cu el; Felix se căsătorește cu altcineva | vol. II, p. 344–348 |
| 4 | Stănică scoate pachetul de sub saltea | vol. II, p. 311 |
| 5 | „un pachețel de o sută de mii […] pentru fe-fetiță”; Pascalopol depune banii la bancă | vol. II, p. 303 și 307–308 |
| 6 | „Nu-nu-nu știu... nu-nu stă nimeni aici, nu cunosc...”; „Dar, papa, e Felix!” | vol. I, p. 8 și 12 |
| 7 | „A fost o fată delicioasă, dar ciudată. Pentru mine e o enigmă.” (Pascalopol) | vol. II, p. 348 |
| 8 | Strada Antim la început și la sfârșit; casa „leproasă, înnegrită” | vol. I, p. 3; vol. II, p. 348–349 |
| 9 | Gândurile lui Stănică („în sinea lui”); prefața: Felix „martorul” | vol. II, p. 304; vol. I, p. XV |
| 10 | „moș Costache e Avarul […]” | prefața, vol. I, p. VIII |
| 11 | „Otilia era socotită ușuratică și se dovedea devotată.” | vol. II, p. 307 |
| 12 | „Niciodată! Cât trăiesc eu, niciodată.” | vol. I, p. 230 |
| 13 | „o caricatură în moloz a unei străzi italice” | vol. I, p. 4 |
| 14 | „profesor universitar, specialist cunoscut” | vol. II, p. 347 |
| 15 | „în strada Antim”; casa lui Felix „în strada Lăpușneanu” | vol. I, p. 3 și 9 |
| 16 | Cartea poștală; „Rostul femeii este să placă […]” | vol. II, p. 337–338 și 346 |

**Interpretări marcate în explicații:** 8 (structura circulară), 9 (privirea lui Felix), 10 (personaj-tip, după prefață), 16 (motivul plecării).

---

## 3. Calitatea pedagogică

**Puncte bune**

- **Distractorii vin din confuzii plauzibile:** strada Lăpușneanu față de strada Antim (15); 1920 („Ion”) și 1909 (anul acțiunii) față de 1938 (2); Aglae, care caută banii abia după moarte (4); Felix, care vorbește și el despre Otilia, dar mai devreme (7); prefectul (Stănică) față de profesorul universitar (14).
- **Lungimea variantelor:** la prima redactare, varianta corectă era cea mai lungă la 6 din 11 întrebări. Testul a prins problema, iar distractorii au fost reechilibrați. Acum varianta corectă **nu** este cea mai lungă la niciuna (calculat).
- **Pozițiile corecte:** a – 2, b – 3, c – 3, d – 3.
- **Un distractor prea aproape de adevăr a fost înlocuit:** la ex. 5, „Îi depune banii la bancă, pe numele ei” descria ce face de fapt Pascalopol (p. 307–308).
- **Ex. 5** corectează explicit o cifră greșită din culegerea școlară (300000).
- **Ex. 16** nu pretinde că poate nota automat un comentariu.

**Puncte slabe (necesită validare didactică)**

1. **O singură explicație pe exercițiu** (limită comună sistemului); explicațiile acoperă și variantele greșite.
2. **Ex. 10** verifică o grilă critică (prefața din 1967), nu un fapt din roman.
3. **Ex. 2** se sprijină doar pe prefața ediției.
4. **Ex. 15** acceptă orice răspuns care conține „Antim” (fără diacritice, orice majuscule); nu înțelege negațiile (limită comună).
5. **Acoperire:** nu există exerciții despre Georgeta, Weissmann, Simion, Titi sau Olimpia, nici despre excursia la moșie.

---

## 4. Funcționalitate

**Teste automate** (`npm run test:exercises`: **130 din 130**; testele dedicate sunt în `lib/exercises/enigma-otiliei.test.mjs`, iar setul e și în lista din `grading.test.mjs`):

- setul trece `findExerciseSetProblems`; 12–16 exerciții, trei tipuri, trei dificultăți; id-uri cu prefixul `otilia-`;
- etichetele secțiunilor coincid cu titlurile; varianta corectă nu e cea mai lungă în peste o treime din cazuri; toate cele patru poziții sunt folosite; adevărat/fals are ambele răspunsuri;
- pentru fiecare exercițiu, răspunsul corect e recunoscut, iar celelalte nu; termenii-cheie: „Antim”, „strada Antim”, „Pe strada ANTIM.”, „str. antim” acceptate; „Lăpușneanu”, „strada Lapusneanu”, „Știrbey-Vodă”, „Calea Victoriei”, „Sfinții Apostoli” nerecunoscute;
- datele publice nu conțin răspunsuri, explicații, criterii, răspuns-model sau sursă;
- salvarea locală: cheia `bac-simplu:exercitii:romana/enigma-otiliei` e proprie; restaurarea funcționează; nu se salvează explicații sau răspunsuri; datele altui set sunt ignorate;
- lecția: înregistrată, titlu identic cu metadatele, `draft-neverificat`, mențiunea despre autorul canonic și despre programa care nu numește opera, componentele importate = componentele folosite, formulările neconfirmate absente.

**În browser** (Chrome 155 headless, build de producție; detalii în `verificare-browser-enigma-otiliei-2026-10-26.md`), la 390 px (luminos) și 1280 px (întunecat):

| Verificare | Rezultat |
|---|---|
| Parcurs complet: greșit → „Modifică răspunsul” → corect (ex. 1, 5, 9, 13); ales și verificat, apoi reîncărcare (ex. 2 restaurat, cu rezultatul afișat); „← Anterior”; răspuns scurt nerecunoscut („strada Lăpușneanu”); autoevaluare; rezumat | Corect |
| Scor: **10 din 15** la prima verificare (10 corecte, 4 greșite, 1 nerecunoscut, 1 autoevaluat); identic după reîncărcare | Corect |
| `localStorage`: o singură cheie, a acestui set; fără răspunsuri corecte sau explicații | Corect |
| HTML-ul prerandat al paginii: 0 apariții ale `correctOptionId`, `requiredGroups`, `modelAnswer` sau ale frazelor din explicații | Corect |
| Erori sau avertismente în consolă | Niciuna |
