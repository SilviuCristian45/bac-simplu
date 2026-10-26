# Audit: cele 12 exerciții pentru lecția „Moara cu noroc”

- **Set auditat:** `content/romana/exercitii/moara-cu-noroc.ts` (cheia `romana/moara-cu-noroc`), afișat la `/romana/opere/moara-cu-noroc/exercitii`.
- **Data:** 2026-10-25.
- **Realizat de:** Claude (asistent AI). Nu este o validare pedagogică făcută de un profesor.
- **Statusul lecției:** `draft-neverificat` (neschimbat).
- **Surse folosite:** lecția `content/romana/opere/moara-cu-noroc.mdx`; raportul `audit-moara-cu-noroc-2026-10-25.md`; textul nuvelei din Wikisource (rev. 129071) și ediția „Biblioteca pentru toți” 1965 (OCR), aceleași ca la lecție.

Sistemul de exerciții (tipuri, corectare, server action, registru, sesiune, salvare locală) este **cel din „Ion”**. Nu a fost modificat pentru această operă; defectele găsite la „Ion” (scor umflat, blocarea în timpul verificării) sunt deja corectate în codul comun, vezi `audit-exercitii-ion-2026-10-25.md`.

---

## 1. Inventar

| # | Id | Tip | Dificultate | Ce verifică | Secțiunea din lecție |
|---|---|---|---|---|---|
| 1 | `moara-mc-intriga` | Alegere multiplă | Mediu | Intriga (sosirea lui Lică) față de expozițiune și desfășurare | 5.2 |
| 2 | `moara-mc-moartea-lui-ghita` | Alegere multiplă | Ușor | Cine îl ucide pe Ghiță | 5.3 |
| 3 | `moara-af-copiii` | Adevărat/fals | Mediu | Soarta copiilor | 8.4 |
| 4 | `moara-mc-titlu` | Alegere multiplă | Mediu | Semnificația titlului (interpretare vs. fapte) | 4.2 |
| 5 | `moara-mc-dovada` | Alegere multiplă | Dificil | Alegerea citatului care susține o idee | 6.5 |
| 6 | `moara-mc-ana-despre-ghita` | Alegere multiplă | Mediu | Tipul de caracterizare | 7.7 |
| 7 | `moara-mc-ordine` | Alegere multiplă | Mediu | Ordinea evenimentelor | 6.2 |
| 8 | `moara-mc-pintea` | Alegere multiplă | Mediu | Relația Ghiță–Pintea | 7.6 |
| 9 | `moara-mc-stil-indirect-liber` | Alegere multiplă | Mediu | Recunoașterea stilului indirect liber | 6.4 |
| 10 | `moara-af-fapt-sau-interpretare` | Adevărat/fals | Dificil | Fapt vs. interpretare („structură circulară”) | 6.3 |
| 11 | `moara-ra-batrana` | Răspuns scurt (cuvinte-cheie) | Ușor | Cine rostește prima și ultima replică | 6.3 |
| 12 | `moara-ra-secventa-pastelui` | Răspuns scurt (autoevaluare) | Dificil | Comentariul unei secvențe | 5.3 |

**Distribuție:** 8 alegere multiplă, 2 adevărat/fals, 2 răspuns scurt (unul cu cuvinte-cheie, unul cu autoevaluare). Ușor 2, mediu 7, dificil 3.

**Nu există** exerciții de asociere, de ordonare sau de identificare a relațiilor ca tip separat: sistemul nu le suportă și nu au fost adăugate. Ordonarea (7) și relațiile (8) sunt acoperite prin alegere multiplă. Asocierile afirmație–dovadă sunt în figurile interactive ale lecției, separate de scor.

**Ancore:** toate cele 12 trimiteri la secțiuni există în lecție. Registrul validează asta la build, iar build-ul trece.

---

## 2. Verificarea conținutului pe textul nuvelei

Fiecare citat și fapt din exerciții a fost căutat în textul din Wikisource, iar capitolele au fost confruntate cu ediția 1965 (care numerotează toate cele 17 capitole; transcrierea Wikisource nu are marcajele XII, XV și XVI).

| Ex. | Afirmația | Rezultat |
|---|---|---|
| 1 | Lică: „Eu voiesc să știu totdeauna cine umblă pe drum, cine trece pe aici” | Confirmat, cap. III |
| 2 | „— Dă foc! zise Lică, și Răuț își descărcă pistolul în ceafa lui Ghiță” | Confirmat, cap. XVI (ed. 1965) |
| 3 | Copiii pleacă la Ineu cu bătrâna; la final „Bătrâna ședea cu copiii pe-o piatră de lângă cele cinci cruci” și „luă copiii și plecă mai departe” | Confirmat, cap. XIV și XVII |
| 4 | „cu lopețile rupte”; cele cinci cruci la început și la sfârșit | Confirmat, cap. II și XVII |
| 5 | Cele patru citate (bătrâna, gândul lui Ghiță „Prea puțin îmi pasă!”, „Lică e om rău și om primejdios”, „Furaserăm niște cai, Lică și eu”) | Confirmate; vorbitorii și capitolele (I, IV, VI, VII) corespund |
| 6 | „Tu ești om, Lică, iară Ghiță nu e decât o muiere îmbrăcată în haine bărbătești” | Confirmat, cap. XIV (ed. 1965); spusă Anei către Lică, după ce află că Ghiță a plecat |
| 7 | „Vineri după Sfântul Dumitru se ținu judecata” | Confirmat, cap. XI. Ordinea celorlalte evenimente corespunde capitolelor V, VII, XIV–XVI |
| 8 | „Dumnezeu să te ferească pe tine să nu te pună păcatul să mă înșeli pe mine!” | Confirmat, cap. XIV. Vezi defectul 3.1 |
| 9 | „Dar acești trei ani atârnau de Lică…” | Confirmat, cap. IV |
| 11 | Prima și ultima replică ale bătrânei; „Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...” | Confirmat, cap. I și XVII |
| 12 | Pintea: „n-aș fi putut să-mi arunc o nevastă ca a ta drept momeală în cursa cu care vreau să-l prind” | Confirmat, cap. XVI |

### 2.1. Defect găsit și corectat

**Exercițiul 8 (și lecția) – formulare inexactă.** Varianta corectă spunea că Ghiță „păstrează jumătate din banii însemnați”. În text, Lică îi aduce lui Ghiță hârtii cu semne și spune „În jumătate: cât ție, atât mie”; Ghiță îi dă lui Pintea „cele patrusprezece bucăți de hârtie” și îi cere să i le schimbe în bani întregi, **fără să-i spună că jumătate din bani sunt ai săi** (cap. XIV). El nu „păstrează” banii. Formularea greșită apărea și în lecție (5.3, lista faptelor despre Ghiță) și în figura interactivă (momentele subiectului și treptele prăbușirii).

Corectat în: `content/romana/exercitii/moara-cu-noroc.ts` (varianta și explicația), `content/romana/opere/moara-cu-noroc.mdx` (rândul 244), `content/romana/opere/moara-cu-noroc-interactiv.ts` (două texte). Noua formulare: Ghiță îi ascunde lui Pintea că jumătate din banii pe care i-i dă sunt partea lui de la Lică.

### 2.2. Interpretări marcate în exerciții

Exercițiile 1, 4, 6, 9, 10 și 12 conțin explicații care spun deschis că o parte este interpretare (delimitarea momentelor, lectura ironică a titlului, stilul indirect liber, structura circulară). Nu s-a schimbat nimic aici.

---

## 3. Calitatea pedagogică

**Puncte bune**
- Distractorii sunt plauzibili și provin din confuzii reale: Pintea ca ucigaș (2), copiii morți în incendiu (3), citate reale dar care nu susțin ideea (5), alte ordini ale evenimentelor (7).
- Exercițiile 4, 10 și 12 exersează distincția fapt/interpretare, cerută de barem.
- Explicațiile spun de ce variantele greșite sunt greșite.

**Puncte slabe (necesită validare didactică)**
1. **Lungimea variantelor.** La exercițiile 1 și 4, varianta corectă este mai lungă decât celelalte, ceea ce poate ghida un elev atent la formă, nu la conținut. La 5 și 7 lungimile sunt echilibrate.
2. **Exercițiul 5** este foarte exigent: cere să recunoască ce idee susține un citat dintre patru citate reale. Dificultatea „dificil” este justificată.
3. **Exercițiul 11 (cuvinte-cheie)** acceptă „soacra”, „bătrâna”, „mama Anei”. Nu înțelege negația („nu bătrâna” este acceptat). Limita este cunoscută și comună cu „Ion”; răspunsurile nerecunoscute nu sunt numărate ca greșite.
4. **Feedback pe variantă.** Sistemul oferă o singură explicație pentru exercițiu, nu un mesaj distinct pentru fiecare variantă. Explicațiile le acoperă pe toate, dar un feedback pe variantă ar fi mai bun; ar cere schimbarea tipului comun, deci nu s-a făcut.
5. **Acoperire.** Lipsesc exerciții despre: încadrarea în realism (trăsătură + exemplu), planul de eseu, simbolul hanului/spațiului ca element de compoziție. Nu au fost adăugate doar ca să crească numărul.

---

## 4. Funcționalitate

Cod comun cu „Ion”. Ce am verificat acum, **fără browser** (nu am deschis aplicația într-un browser în această sesiune):

| Verificare | Rezultat |
|---|---|
| Setul trece `findExerciseSetProblems` (ancore, id-uri unice, răspunsul-model trece propria verificare) | Da, validat la build |
| Id-uri unice | 12 din 12 |
| Răspunsurile, explicațiile, criteriile și răspunsul-model nu apar în HTML-ul și în RSC-ul paginii de exerciții generat la build (căutat: `correctOptionId`, `explanation`, `requiredGroups`, `modelAnswer`, replica finală a bătrânei) | Da, 0 apariții; apar doar `revision` și `gradingMode` |
| Datele exercițiilor în pachetele JS din `.next/static` | Nu (singura apariție a numelui `correctOptionId` este accesul la câmp în componenta de feedback, nu date) |
| Corectarea cuvintelor-cheie pentru ex. 11: „bătrâna”, „Bătrîna”, „mama Anei”, „soacra” = corect; „Ana”, „Lică” = nerecunoscut | Da |
| Testele comune de corectare, de rezumat (primul răspuns verificat) și de stocare a sesiunii | 53 din 53 |

**Neverificate de mine în această sesiune:** parcursul în browser (alegere, verificare, modificare, reluare, tastatură, teme, mobil). Comportamentul acesta a fost testat în browser pentru „Ion”, în raportul `audit-exercitii-ion-2026-10-25.md`, pe același cod, dar nu a fost repetat pentru „Moara cu noroc”. Salvarea și restaurarea sesiunii, tratarea datelor locale invalide sunt acoperite doar de `session-storage.test.mjs` (teste unitare), nu de un test pe pagină.

---

## 5. Corecturi aplicate

| # | Problema | Corectura | Fișiere |
|---|---|---|---|
| 1 | Formulare inexactă despre banii lui Ghiță și Pintea (ex. 8, lecție, figuri) | Reformulat conform textului, cap. XIV | `content/romana/exercitii/moara-cu-noroc.ts`, `content/romana/opere/moara-cu-noroc.mdx`, `content/romana/opere/moara-cu-noroc-interactiv.ts` |

**Neaplicate:** punctele din §3 (au nevoie de decizie didactică sau de modificarea tipului comun).

**Verificare după corectură:** `npx tsc --noEmit` fără erori; `npm run lint` fără erori; `npm run test:exercises` 53 din 53; `npm run build` reușit, cu `/romana/opere/moara-cu-noroc` și `/romana/opere/moara-cu-noroc/exercitii` prerandate.
