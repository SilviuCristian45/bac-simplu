# Audit: cele 16 exerciții pentru lecția „Alexandru Lăpușneanul”

- **Set auditat:** `content/romana/exercitii/alexandru-lapusneanul.ts` (cheia `romana/alexandru-lapusneanul`), afișat la `/romana/opere/alexandru-lapusneanul/exercitii`.
- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare pedagogică făcută de un profesor.
- **Statusul lecției:** `draft-neverificat`.
- **Surse:** lecția `alexandru-lapusneanul.mdx`, raportul `audit-alexandru-lapusneanul-2026-10-26.md`, textul nuvelei (Wikisource rev. 115307, confruntat cu ediția BPT 1982).

Sistemul de exerciții (tipuri, corectare pe server, registru, sesiune, salvare locală) este cel comun. Nu a fost modificat.

---

## 1. Inventar

| # | Id | Tip | Dificultate | Ce verifică | Secțiunea din lecție |
|---|---|---|---|---|---|
| 1 | `lapusneanul-mc-motto-boieri` | Alegere multiplă | Ușor | Cui îi răspunde domnul cu motto-ul cap. I | 5.2 |
| 2 | `lapusneanul-mc-aparitie` | Alegere multiplă | Ușor | Prima apariție (*Dacia literară*, 1840) | 2 |
| 3 | `lapusneanul-af-motoc-ospat` | Adevărat/fals (F) | Mediu | Moțoc nu moare la masă | 7.4 |
| 4 | `lapusneanul-mc-leac` | Alegere multiplă | Mediu | „Un leac de frică” = piramida de capete | 5.3 |
| 5 | `lapusneanul-mc-ordinea` | Alegere multiplă | Mediu | Ordinea: biserică → ospăț → Moțoc → călugărire | 6.2 |
| 6 | `lapusneanul-mc-culoare` | Alegere multiplă | Mediu | Culoarea de epocă (trăsătură romantică) | 3.3 |
| 7 | `lapusneanul-mc-prosti-multi` | Alegere multiplă | Dificil | Sensul replicii „Proști, dar mulți” | 7.2 |
| 8 | `lapusneanul-mc-caracterizare` | Alegere multiplă | Dificil | Caracterizare directă de narator | 7.8 |
| 9 | `lapusneanul-af-narator` | Adevărat/fals (F) | Mediu | Naratorul intervine cu judecăți | 6.4 |
| 10 | `lapusneanul-af-motto-iv` | Adevărat/fals (A) | Mediu | Motto IV vs. replica din text („scula” / „îndrepta”) | 4.3 |
| 11 | `lapusneanul-mc-otrava` | Alegere multiplă | Mediu | Cine dă otrava | 5.4 |
| 12 | `lapusneanul-mc-tema` | Alegere multiplă | Dificil | Formularea temei (interpretare marcată) | 4.1 |
| 13 | `lapusneanul-mc-note-cronica` | Alegere multiplă | Mediu | Notele „Miron Costin” și nuvela istorică | 3.4 |
| 14 | `lapusneanul-mc-ruxanda` | Alegere multiplă | Mediu | Ruxanda construită prin antiteză | 7.3 |
| 15 | `lapusneanul-ra-boieri` | Răspuns scurt (cuvinte-cheie) | Ușor | 47 de boieri | 5.3 |
| 16 | `lapusneanul-ra-comentariu-biserica` | Răspuns scurt (autoevaluare) | Dificil | Comentariul discursului din biserică | 5.3 |

**Distribuție:** 11 alegere multiplă, 3 adevărat/fals (două false, una adevărată), 2 răspuns scurt; 3 ușoare, 9 medii, 4 dificile; fapte (1–5, 11, 15), concepte aplicate (6, 8, 9, 10, 13, 14), interpretare și argumentare (7, 12, 16).

**Ancore:** toate cele 16 trimiteri există, iar etichetele coincid cu titlurile din lecție (verificat automat și la build, prin `lib/exercises/registry.ts`).

---

## 2. Verificarea conținutului

Fiecare fapt și citat din exerciții a fost căutat în textul A și confruntat cu B prin scriptul de citate (raportul de audit, §1.2).

| Ex. | Afirmația | Rezultat |
|---|---|---|
| 1 | Motto-ul cap. I e răspunsul dat boierilor; „norodul nu te vrea, nici te iubește” | Confirmat |
| 2 | *Dacia literară*, 1840; „Scene istorice din cronicele Moldaviei”; *Păcatele tinerețelor*, 1857 | Confirmat în prefața și cronologia B (o singură sursă pentru ciclu) |
| 3 | Moțoc privește masacrul de la fereastră cu domnul; „Capul lui Moțoc vrem!”; dat norodului | Confirmat |
| 4 | „un leac de frică” (cap. II); piramida arătată Ruxandei (cap. III) | Confirmat |
| 5 | Ordinea evenimentelor din cap. III–IV | Confirmat |
| 6 | „borșul polonez”, „mâncări grecești”, „pilaful turcesc” | Confirmat |
| 7 | „Proști, dar mulți, răspunse Lăpușneanul cu sânge rece”; Moțoc cere tunurile | Confirmat |
| 8 | „aducându-și aminte de întăia lui domnie, în care el nu avusese vreme a-și dezvălui urâtul caracter” | Confirmat (forma „întăia” corectată după verificare) |
| 9 | „această deșănțată cuvântare”, „mârșavul curtezan”, „o pată de sânge în istoria Moldaviei” | Confirmat |
| 10 | Motto „De mă voi scula…” / text „de mă voi îndrepta, pre mulți am să popesc și eu!” | Confirmat în A și B |
| 11 | „Iată un praf”; Ruxanda „silită mai mult de boieri”; mitropolitul pleacă | Confirmat |
| 13 | Notele 1, 14, 15: „Miron Costin (n.a.)” | Confirmat în A și B |
| 14 | „gingașa Ruxanda”; „ca floarea espusă arșiții soarelui” | Confirmat |
| 15 | „47 la număr”; „Patruzeci și șepte de trupuri”; Spancioc: „cînd ai ucis 47 de boieri” | Confirmat |

**Interpretări marcate în explicații:** 7 (calcul politic), 12 (formularea temei), 13 (observația prefeței despre N. Costin), 16 (disimularea).

---

## 3. Calitatea pedagogică

**Puncte bune**

- **Distractorii** vin din confuzii plauzibile: Moțoc ucis la masă (3); ordinea biserică/ospăț (5); otrava dată de Moțoc, deși murise (11); caracterizarea de narator vs. de alt personaj (8); persoana a III-a sau timpul confundate cu culoarea de epocă (6).
- **Lungimea variantelor:** varianta corectă **nu** este cea mai lungă la niciuna dintre cele 11 întrebări cu alegere multiplă (calculat; pragul testului: maximum o treime).
- **Pozițiile corecte:** a – 3, b – 3, c – 3, d – 2.
- **Adevărat/fals:** ambele răspunsuri sunt reprezentate.
- **Exercițiul 10** previne o greșeală frecventă de citare (motto vs. text).
- **Ex. 16** nu pretinde că poate nota automat un comentariu.

**Puncte slabe (necesită validare didactică)**

1. **O singură explicație pe exercițiu** (limită comună sistemului); explicațiile acoperă și variantele greșite.
2. **Ex. 2 și 13** verifică informații de istorie literară care provin dintr-o singură sursă critică (prefața B).
3. **Ex. 12** se sprijină pe o interpretare; explicația o spune deschis.
4. **Ex. 15** acceptă „47”, „patruzeci și șapte/șepte” (fără diacritice, orice majuscule); nu înțelege negațiile (limită comună).
5. **Acoperire:** nu există exerciții despre Veveriță, mitropolit, glosarul notelor (acoperit în lecție printr-un quiz) sau despre statutul operei la examen.
6. **Statutul la examen:** exercițiile nu verifică dacă elevul știe că Negruzzi nu e autor canonic; informația este în lecție (secțiunea 1).

---

## 4. Funcționalitate

**Teste automate** (`npm run test:exercises`: **103 din 103**; testele dedicate sunt în `lib/exercises/alexandru-lapusneanul.test.mjs`, iar setul e și în lista din `grading.test.mjs`):

- setul trece `findExerciseSetProblems`; 12–16 exerciții, trei tipuri, trei dificultăți; id-uri cu prefixul `lapusneanul-`;
- etichetele secțiunilor coincid cu titlurile; varianta corectă nu e cea mai lungă în peste o treime din cazuri; toate cele patru poziții sunt folosite; adevărat/fals are ambele răspunsuri;
- pentru fiecare exercițiu, răspunsul corect e recunoscut, iar celelalte nu; termenii-cheie: „47”, „patruzeci și șapte”, „PATRUZECI ȘI ȘEPTE” acceptate; „74”, „470”, „patruzeci”, „șapte”, „48 de boieri” nerecunoscute;
- datele publice nu conțin răspunsuri, explicații, criterii, răspuns-model sau sursă;
- salvarea locală: cheia `bac-simplu:exercitii:romana/alexandru-lapusneanul` e proprie; restaurarea funcționează; nu se salvează explicații sau răspunsuri; datele altui set sunt ignorate;
- lecția: înregistrată, titlu identic cu metadatele, `draft-neverificat`, avertismentul despre autorii canonici prezent, componentele importate = componentele folosite;
- datele figurilor: răspunsul corect există la fiecare enunț, sensul din nota autorului nu e mereu pe aceeași poziție, motto-urile din harta capitolelor apar în lecție, muchiile hărții leagă personaje existente, planurile trimit doar la titluri existente.

**În browser** (Chrome 155 headless, build de producție; detalii în `verificare-browser-alexandru-lapusneanul-2026-10-26.md`), la 390 px (luminos) și 1280 px (întunecat):

| Verificare | Rezultat |
|---|---|
| Parcurs complet: greșit → „Modifică răspunsul” → corect (ex. 1, 5, 13); ales și verificat, apoi reîncărcare (ex. 2 restaurat, cu rezultatul afișat); „← Anterior”; răspuns scurt nerecunoscut („patruzeci”); autoevaluare; rezumat | Corect |
| Scor: **11 din 15** la prima verificare (11 corecte, 3 greșite, 1 nerecunoscut, 1 autoevaluat); identic după reîncărcare | Corect |
| `localStorage`: o singură cheie, a acestui set; fără răspunsuri corecte sau explicații | Corect |
| HTML-ul prerandat al paginii: 0 apariții ale `correctOptionId`, `requiredGroups`, `modelAnswer` sau ale frazelor din explicații | Corect |
| Erori sau avertismente în consolă | Niciuna |
