# Audit: cele 16 exerciții pentru lecția „Povestea lui Harap-Alb”

- **Set auditat:** `content/romana/exercitii/povestea-lui-harap-alb.ts` (cheia `romana/povestea-lui-harap-alb`), afișat la `/romana/opere/povestea-lui-harap-alb/exercitii`.
- **Data:** 2026-10-25.
- **Realizat de:** Claude (asistent AI). Nu este o validare pedagogică făcută de un profesor.
- **Statusul lecției:** `draft-neverificat`.
- **Surse:** lecția `povestea-lui-harap-alb.mdx`, raportul `audit-povestea-lui-harap-alb-2026-10-25.md`, textul basmului (Wikisource rev. 152404, confruntat cu ediția BPT 1967).

Sistemul de exerciții (tipuri, corectare pe server, registru, sesiune, salvare locală) este cel din „Ion” și „Moara cu noroc”. Nu a fost modificat.

---

## 1. Inventar

| # | Id | Tip | Dificultate | Ce verifică | Secțiunea din lecție |
|---|---|---|---|---|---|
| 1 | `harap-mc-numele` | Alegere multiplă | Ușor | Cine îi dă numele Harap-Alb | 4.2 |
| 2 | `harap-mc-basm-cult` | Alegere multiplă | Mediu | Trăsătură de basm în general vs. amprentă a basmului cult | 3.2 |
| 3 | `harap-af-spanul-moare` | Adevărat/fals | Mediu | Cine îl ucide pe Spân | 5.5 |
| 4 | `harap-mc-ordinea` | Alegere multiplă | Mediu | Ordinea fântâna → trei probe ale Spânului | 5.2 |
| 5 | `harap-mc-casa-arama` | Alegere multiplă | Mediu | Cine scapă tovarășii în casa de aramă | 5.2 |
| 6 | `harap-mc-fantastic-umanizat` | Alegere multiplă | Dificil | Aplicarea conceptului „fantastic umanizat” pe un fragment | 6.5 |
| 7 | `harap-mc-formula-mediana` | Alegere multiplă | Mediu | Recunoașterea formulei mediane | 6.5 |
| 8 | `harap-af-rau-necesar` | Adevărat/fals | Dificil | Fapt vs. interpretare | 7.3 |
| 9 | `harap-mc-bunatate` | Alegere multiplă | Mediu | Episod care susține o trăsătură | 5.4 |
| 10 | `harap-mc-titlul` | Alegere multiplă | Mediu | Lectura titlului (interpretare marcată) | 4.2 |
| 11 | `harap-mc-caracterizare` | Alegere multiplă | Dificil | Tipul de caracterizare | 7.8 |
| 12 | `harap-mc-conflict-interior` | Alegere multiplă | Dificil | Conflictul interior (dragoste vs. datorie) | 6.7 |
| 13 | `harap-mc-narator` | Alegere multiplă | Mediu | Tipul de narator | 6.4 |
| 14 | `harap-af-invierea` | Adevărat/fals | Mediu | Învierea lui Harap-Alb | 5.5 |
| 15 | `harap-ra-aripa` | Răspuns scurt (cuvinte-cheie) | Ușor | Ce primește de la furnici și albine | 5.4 |
| 16 | `harap-ra-comentariu-fantana` | Răspuns scurt (autoevaluare) | Dificil | Comentariul unui episod, fapt + interpretare | 5.3 |

**Distribuție:**
- **pe tipuri:** 11 alegere multiplă, 3 adevărat/fals, 2 răspuns scurt;
- **pe dificultate:** 2 ușoare, 9 medii, 5 dificile;
- **pe conținut:** fapte (1, 3, 4, 5, 14, 15); concepte aplicate pe text (2, 6, 7, 11, 13); interpretare și argumentare (8, 9, 10, 12, 16).

**Ancore:** toate cele 16 trimiteri la secțiuni există, iar etichetele coincid cu titlurile din lecție (verificat automat).

**Neimplementat în sistem:** exerciții de asociere sau de ordonare ca tip separat. Ordonarea evenimentelor (4) este alegere multiplă. Relațiile dintre personaje sunt acoperite în lecție prin harta relațiilor și prin comparația Harap-Alb–Spân (figuri, fără scor).

---

## 2. Verificarea conținutului

Fiecare fapt și citat din exerciții a fost căutat în textul basmului (A: Wikisource) și confruntat cu B (BPT 1967) prin scriptul de citate (vezi `audit-povestea-lui-harap-alb-2026-10-25.md`, §1.2).

| Ex. | Afirmația | Rezultat |
|---|---|---|
| 1 | „De-acum înainte să știi că te cheamă Harap-Alb; aista ți-i numele, și altul nu.” (Spânul, după fântână) | Confirmat |
| 2, 6 | „Ia tacă-ți gura, măi Gerilă! ziseră ceilalți. Acuși se face ziuă, și tu nu mai stinchești cu brașoave de-ale tale.” | Confirmat (cuvânt cu cuvânt) |
| 3 | Calul îl înșfacă pe Spân de cap, zboară și îi dă drumul; „praf și pulbere” | Confirmat |
| 4 | Ordinea: fântâna → sălăți → pielea cerbului → fata lui Roș | Confirmat |
| 5 | Gerilă suflă de trei ori, casa rămâne „nici fierbinte, nici rece” | Confirmat |
| 7 | „Dumnezeu să ne ție, că cuvântul din poveste, înainte mult mai este.” | Confirmat; formula apare de mai multe ori |
| 8 | Replica calului: „unii ca aceștia sunt trebuitori pe lume câteodată, pentru că fac pe oameni să prindă la minte” | Confirmat |
| 9 | „decât să curm viața atâtor gâzulițe nevinovate” | Confirmat |
| 11 | „Fiul craiului, boboc în felul său la trebi de aieste, se potrivește Spânului și se bagă în fântână” | Confirmat |
| 12 | „pe fata împăratului Roș mai nu-i venea s-o ducă, fiind nebun de dragostea ei”; ajunge cu ea la împărăție | Confirmat |
| 13 | „Eu sunt dator să spun povestea și vă rog să ascultați.” | Confirmat; naratorul cunoaște gândurile personajelor („zise Spânul în sine”) |
| 14 | Învierea cu cele trei smicele, apa moartă și apa vie; „Ei, da' din greu mai adormisem!” | Confirmat |
| 15 | Aripa de furnică și aripa de albină, aprinse la nevoie | Confirmat |

**Interpretări marcate în exerciții:** 2 (distincția e de grad), 6 (umanizarea fantasticului), 8 (rău necesar), 10 (oximoron), 16 (fapt și interpretare).

---

## 3. Calitatea pedagogică

**Puncte bune**
- **Distractorii** provin din confuzii reale: Spânul vs. calul ca „ucigaș” (3); numele dat de altcineva (1); casa de aramă vs. alte probe (5); formulă mediană vs. inițială, finală sau proverb (7); caracterizare directă a naratorului vs. a altui personaj sau autocaracterizare (11); personaj-martor sau narator impersonal (13).
- **Lungimea variantelor:** varianta corectă **nu este cea mai lungă** la niciuna dintre cele 11 întrebări cu alegere multiplă (verificat automat; pragul din test este maximum o treime). Lungimile din ex. 4 sunt egale.
- **Pozițiile corecte** sunt distribuite pe toate cele patru poziții (a: 3, b: 3, c: 2, d: 3).
- **Adevărat/fals:** două afirmații false și una adevărată (14). O primă versiune avea toate cele trei afirmații false, ceea ce permitea ghicirea tiparului; a fost corectată, iar testul verifică acum că există și răspuns adevărat, și răspuns fals.
- **Fapt vs. interpretare** este exersată explicit (8, 10, 16 și, în lecție, 4.4).
- **Explicațiile** spun și de ce celelalte variante sunt greșite.
- **Ex. 16** nu pretinde că poate nota automat un comentariu.

**Puncte slabe (necesită validare didactică)**
1. **O singură explicație pe exercițiu**, nu una pe variantă. Sistemul comun nu are feedback per variantă. Explicațiile le acoperă pe toate.
2. **Ex. 2 și 6** presupun acceptarea distincției popular/cult ca „de grad”. Un profesor poate prefera altă formulare.
3. **Ex. 10 și 12** se sprijină pe interpretări. Explicațiile le spun deschis.
4. **Ex. 15 (cuvinte-cheie)** acceptă „aripa/aripă/aripi”, ignoră diacriticele și majusculele, dar nu înțelege negațiile (limită comună tuturor exercițiilor). Răspunsul nerecunoscut nu este numărat ca greșit.
5. **Acoperire:** nu există exerciții despre Verde-împărat și fetele lui, despre împăratul Roș sau despre planul de eseu. Nu au fost adăugate doar ca să crească numărul.
6. **Ex. 1 și 15** verifică memorarea. Sunt „ușoare” intenționat.

---

## 4. Funcționalitate

**Teste automate** (`npm run test:exercises`, 76 din 76; setul are teste dedicate în `lib/exercises/harap-alb.test.mjs` și o intrare în lista de seturi validate din `grading.test.mjs`):
- setul trece `findExerciseSetProblems` (ancore, id-uri unice, răspunsul-model trece propria verificare);
- 12–16 exerciții, trei tipuri, trei dificultăți; etichetele secțiunilor coincid cu titlurile;
- varianta corectă nu e mai lungă decât celelalte în mai mult de o treime din cazuri; toate cele patru poziții sunt folosite; adevărat/fals are ambele răspunsuri;
- pentru fiecare exercițiu, răspunsul corect e recunoscut, iar celelalte nu;
- datele publice (`toPublicExercise`) nu conțin răspunsuri, explicații, criterii, răspuns-model sau sursa;
- salvarea locală: cheia `bac-simplu:exercitii:romana/povestea-lui-harap-alb` este proprie; o sesiune restaurează corect; nu salvează explicații sau răspunsuri corecte; datele altui set sunt ignorate.

**În browser** (Chrome 155 headless, build de producție, 1280 px; detalii în `verificare-browser-povestea-lui-harap-alb-2026-10-25.md`):

| Verificare | Rezultat |
|---|---|
| Parcurs: greșit → „Modifică răspunsul” → corect; ales și neverificat; reîncărcare; revenire la exerciții anterioare; răspuns scurt nerecunoscut; autoevaluare; rezumat | Corect |
| Scor afișat: 11 din 15 la prima verificare (11 corecte, 3 greșite, 1 nerecunoscut, 1 autoevaluat, 1 corectat după feedback); identic după reîncărcare | Corect |
| În `localStorage` nu apar răspunsuri corecte sau explicații; apare doar cheia acestui set | Corect |
| Răspunsurile, explicațiile, criteriile și răspunsul-model nu sunt în HTML-ul și RSC-ul paginii generate la build (căutate: `correctOptionId`, `explanation`, `requiredGroups`, `modelAnswer`, fraze din explicații) | 0 apariții |
| Date locale invalide (JSON stricat, versiune veche, alt set, index 99 / „x”, revizie veche cu sesiune terminată, id necunoscut, ciornă de tip greșit) | Fără erori; sesiunea pornește curat |

Verificarea pe server (Server Action) este cea comună; nu am modificat-o.

---

## 5. Defecte găsite în timpul lucrului

| # | Problema | Corectura |
|---|---|---|
| 1 | Cele trei întrebări adevărat/fals aveau răspunsul „Fals” | Ex. 14 a devenit o afirmație adevărată; test adăugat |
| 2 | Risc de variante corecte vizibil mai lungi decât distractorii | Lungimile au fost egalizate deliberat la redactare; testul automat confirmă că nu există niciun caz (0 din 11) |
| 3 | Formulări aproximative între ghilimele în lecție („se bat în capete”, „se face roș cum îi gotca”), găsite la verificarea citatelor | Corectate la forma din text (nu în exerciții) |

**Neaplicat / de decis de un profesor:** punctele din §3.
