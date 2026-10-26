# Audit: cele 12 exerciții pentru lecția „Ion”

- **Set auditat:** `content/romana/exercitii/ion.ts` (cheia `romana/ion`), afișat la `/romana/opere/ion/exercitii`.
- **Data:** 2026-10-25.
- **Realizat de:** Claude (asistent AI). Nu este o validare pedagogică făcută de un profesor.
- **Statusul lecției:** `draft-neverificat` (neschimbat).
- **Surse folosite:**
  - lecția `content/romana/opere/ion.mdx`;
  - rapoartele `audit-ion-2026-10-25.md` și `audit-ion-2026-10-25-runda2.md`;
  - transcrierea romanului de pe Wikisource (ediția Alcalay, 1920), aceeași folosită pentru lecție.

Afirmațiile despre roman care nu apar în lecție au fost căutate în această transcriere. Transcrierea nu a fost comparată cu o ediție tipărită.

---

## 1. Cum funcționează exercițiile

| Componentă | Fișier | Rol |
|---|---|---|
| Datele | `content/romana/exercitii/ion.ts` | 12 exerciții cu enunț, variante, răspuns, explicație, dificultate, secțiune din lecție și `basis` (sursa, vizibilă doar pentru recenzenți) |
| Tipurile | `lib/exercises/types.ts` | `multiple-choice`, `true-false`, `short-answer` (cu `keywords` sau `self-assessment`) |
| Corectarea | `lib/exercises/grading.ts` | Funcții pure: normalizare (fără diacritice și majuscule), verificare, validarea setului |
| Verificarea pe server | `lib/exercises/actions.ts` | Server Action: răspunsurile și explicațiile nu ajung în browser înainte de verificare |
| Registrul | `lib/exercises/registry.ts` | Validează setul la build, pe baza titlurilor din lecție (ancore existente, răspunsul-model trece propria verificare) |
| Interfața | `components/exercises/*.tsx`, `app/romana/opere/[slug]/exercitii/page.tsx` | Un exercițiu pe ecran, feedback, navigare, rezumat, reluare |
| Testele | `lib/exercises/grading.test.mjs` | 22 de teste pentru corectare și validare |

Nu există exerciții de asociere: tipul nu este implementat.

---

## 2. Inventarul celor 12 exerciții

| # | Id | Tip | Dificultate | Ce verifică | Secțiunea din lecție | Verdict |
|---|---|---|---|---|---|---|
| 1 | `ion-mc-context` | Alegere multiplă | Ușor | Diferența dintre anul publicării (1920) și timpul acțiunii | 3.2 | Bun. `basis` formulat ambiguu (vezi 3.2) |
| 2 | `ion-mc-conflict-interior` | Alegere multiplă | Mediu | Conflictul interior sugerat de titlurile părților | 5.5 | Bun |
| 3 | `ion-mc-hora-motiv` | Alegere multiplă | Mediu | Motivul pentru care Ion se apropie de Ana | 4.3 | Corect pe text. Explicația prezintă o interpretare ca fapt (vezi 3.3) |
| 4 | `ion-mc-caracterizare-directa` | Alegere multiplă | Ușor | Caracterizare directă făcută de alt personaj | 6.4 | Bun |
| 5 | `ion-mc-narator` | Alegere multiplă | Ușor | Tipul de narator | 5.4 | Corect, dar distractorii sunt prea ușor de eliminat (vezi 4) |
| 6 | `ion-af-pamant-dupa-nunta` | Adevărat/fals | Mediu | Amânarea zestrei după nuntă | 6.2 | Bun |
| 7 | `ion-af-sarutarea` | Adevărat/fals | Ușor | Ordinea: intrarea în stăpânirea pământurilor, apoi sărutarea | 4.4 | Bun |
| 8 | `ion-af-fapt-sau-interpretare` | Adevărat/fals | Dificil | Distincția fapt/interpretare | 4.4 | Foarte bun: verifică exact abilitatea pe care o cere baremul |
| 9 | `ion-af-final` | Adevărat/fals | Mediu | Finalul romanului: drumul, trăsura Herdelea | 5.3 | Bun. Confirmat pe text |
| 10 | `ion-ra-partile-romanului` | Răspuns scurt (cuvinte-cheie) | Ușor | Titlurile celor două părți | 2 | Bun ca reper. Verificarea automată are limite (vezi 5) |
| 11 | `ion-ra-stil-indirect-liber` | Răspuns scurt (cuvinte-cheie) | Mediu | Numele procedeului, pe baza definiției și a citatului | 5.6 | Corect. Verifică mai ales memorarea termenului (vezi 4) |
| 12 | `ion-ra-interpretare-sarutare` | Răspuns scurt (autoevaluare) | Dificil | Fapt + interpretare + legătura cu tema | 4.4 | Foarte bun. Răspunsul-model folosește o formulare a temei care nu e în lecție (vezi 3.4) |

**Distribuție:**
- **pe tipuri:** 5 alegere multiplă, 4 adevărat/fals, 3 răspuns scurt;
- **pe dificultate:** 5 ușoare, 5 medii, 2 dificile.

**Ancore:** toate trimiterile la secțiuni există în lecție. Validarea de la build le verifică automat.

---

## 3. Verificarea conținutului

### 3.1. Afirmații confirmate pe textul romanului (transcrierea Wikisource)

| Exercițiu | Afirmația | Unde apare |
|---|---|---|
| 3 | În capitolul I, Ion se gândește că Florica e mai săracă decât el, iar Ana are pământuri, case și vite | cap. I: „Dar Florica era mai săracă decât dânsul, iar Ana avea locuri și case și vite multe...” |
| 9 | Romanul se încheie cu drumul pe care pleacă trăsura familiei Herdelea | cap. XIII, ultima frază narativă: „Drumul trece prin Jidovița, pe podul de lemn, acoperit, de peste Someș, și pe urmă se pierde în șoseaua cea mare și fără început...” |
| 1 | Acțiunea precede războiul (indiciu din text) | cap. XII, replica unui căpitan: „Se știe doar că România e aliata noastră” |

Celelalte afirmații despre roman (exercițiile 2, 4–8, 10–12) sunt preluate din lecție, unde au fost verificate în rundele anterioare. Citatele din exercițiile 4, 8, 11 și 12 sunt identice cu cele din lecție.

### 3.2. Probleme confirmate

1. **Exercițiul 1 – `basis` ambiguu.** Câmpul spune „romanul, cap. XII („România e aliata noastră”)”, ca și cum acesta ar fi titlul capitolului. În transcriere, capitolul XII se numește „George”, iar fraza e replica unui personaj. Câmpul e intern (nu e afișat elevilor), dar poate induce în eroare un recenzent.
2. **Exercițiul 3 – interpretarea prezentată ca fapt.** Explicația spune: „Alegerea arată că dorința de pământ trece înaintea iubirii.” În lecție (4.3), concluzia aceasta e marcată **Interpretare**. Faptul verificabil este gândul lui Ion din capitolul I. Explicația trebuie să păstreze nuanța.
3. **Exercițiul 12 – formularea temei din răspunsul-model.** Răspunsul-model leagă scena de „pământul ca valoare supremă în lumea satului”. Lecția formulează tema altfel (4.2): „problematica pământului”, pentru un țăran „pentru care pământul înseamnă demnitate și loc în comunitate”. Răspunsul-model ar trebui să folosească formularea din lecție. Criteriile de autoevaluare o fac deja.

### 3.3. Probleme potențiale (necesită validare de un profesor)

1. **Exercițiul 2:** varianta corectă se sprijină pe o interpretare (titlurile părților „sugerează” conflictul interior). Explicația spune corect că lecția face această legătură. Un profesor ar putea dori o formulare care să admită și alte lecturi ale titlurilor.
2. **Exercițiul 8:** enunțul conține o afirmație în ghilimele („Afirmația «…» este un fapt…”). Este corect, dar dubla încadrare poate deruta unii elevi. De testat cu elevi.
3. **Exercițiul 11:** dificultatea „Mediu” e discutabilă. Enunțul dă definiția, iar elevul trebuie doar să numească termenul.
4. **Exercițiul 1:** argumentul pentru „înainte de Primul Război Mondial” se sprijină pe lecție și pe un indiciu din cap. XII. Lecția nu indică un an precis al acțiunii. Pentru o formulare mai exactă, e nevoie de o sursă de istorie literară.

### 3.4. Redundanțe

- **Exercițiul 4 și quizul din lecție:** exercițiul 4 folosește același citat (doamna Herdelea) ca quizul „Cum este caracterizat Ion?” adăugat în lecție (6.4). Nu e o eroare: unul e verificare în timpul lecturii, celălalt exercițiu separat. O variantă viitoare a exercițiului poate folosi caracterizarea preotului Belciug, ca să nu repete exemplul.
- **Exercițiile 6 și 7** verifică aceeași cronologie (pământul după nuntă, apoi sărutarea), din unghiuri diferite. Redundanța e acceptabilă.

---

## 4. Calitatea pedagogică

**Puncte bune:**
- **Distractorii încarcă un risc real la examen.** Exemple: confuzia dintre anul publicării și timpul acțiunii (1), caracterizarea directă făcută de narator sau de alt personaj (4).
- **Diferența fapt/interpretare** este exersată explicit (8, 12). Este abilitatea pe care baremul o cere prin „comentarea adecvată”.
- **Explicațiile spun și de ce variantele greșite sunt greșite** și trimit la secțiunea din lecție.
- **Exercițiul 12** nu pretinde că poate nota automat un comentariu.

**Puncte slabe:**
- **Exercițiul 5:** distractorii (narator la persoana I, la persoana a II-a, martor) sunt prea ușor de eliminat. Un distractor mai fin ar verifica nuanța „obiectiv / omniscient”.
- **Exercițiile 10 și 11 verifică memorarea.** E acceptabil pentru niveluri ușoare, dar nu ar trebui să crească ponderea lor.

**Sunt suficiente cele 12 pentru o primă versiune?**

Da, pentru verificarea faptelor și a noțiunilor de bază. Nu acoperă însă trei competențe pe care lecția le tratează ca esențiale pentru punctajul de la Subiectul al III-lea:

| Competență | Unde e în lecție | Acoperită de exerciții? | De ce contează |
|---|---|---|---|
| Încadrarea: trăsătură + exemplu din text | 3.1–3.3 | Nu (exercițiul 1 atinge doar perioada) | Primul reper din barem, 6 puncte |
| Rezumat vs comentariu | 4.5 | Nu direct (exercițiul 12 o atinge) | Lecția: „Aici se pierd cel mai ușor puncte” |
| Justificarea relevanței unui element | 5.2 | Nu | Diferența dintre 2 și 3 puncte la fiecare element |

Statutul moral al personajului (6.2) și criteriile de redactare (7.1) nu sunt acoperite. Sunt însă mai puțin potrivite pentru exerciții cu răspuns fix.

**Recomandare:** cel mult trei exerciții noi, câte unul pentru fiecare lacună din tabel, scrise pe baza lecției și validate de un profesor. Lecția are deja quizuri pentru aceste trei competențe (3.3, 4.5 și 5.2). Exercițiile noi ar trebui să folosească alte exemple, nu să le copieze. Nu le-am adăugat în această rundă.

---

## 5. Funcționalitate

Testat pe build-ul de producție, în Chrome headless.

| Verificare | Rezultat |
|---|---|
| Răspunsurile și explicațiile nu sunt în HTML înainte de verificare | OK |
| Selectarea și schimbarea răspunsului înainte de verificare | OK |
| Feedback numai după verificare; variantele blocate după verificare | OK |
| Navigarea Anterior / Următorul, „Vezi exercițiul N” din rezumat | OK |
| Calculul scorului pentru un parcurs cunoscut (10 corecte, 1 nerecunoscut, 1 fără răspuns) | OK |
| Reluarea sesiunii | OK: totul se resetează, focusul revine pe primul exercițiu |
| Autoevaluarea (exercițiul 12) | OK |
| Tastatură: săgeți pe variante, Enter pe „Verifică”, focus mutat pe feedback și pe rezumat | OK |
| Contrast în ambele teme, pe mobil (390 px) și pe desktop (1280 px) | OK: minimum 6,04:1 (luminos) și 5,17:1 (întunecat) |
| Scroll orizontal, erori în consolă | Niciunul |

### 5.1. Probleme confirmate

1. **Scorul poate fi umflat (gravă).** După verificare, aplicația afișează răspunsul corect. Butonul „Modifică răspunsul” permite apoi alegerea lui și o nouă verificare. Rezumatul numără ultimul rezultat, deci un răspuns greșit devine „Corect”.
   - *Reproducere:* exercițiul 1 → b → Verifică (Greșit) → Modifică răspunsul → a → Verifică → „Corect”.
2. **Răspunsul se poate schimba în timpul verificării (medie).** Variantele nu sunt blocate cât timp serverul verifică. Dacă elevul alege altă variantă în acest interval, feedbackul corespunde primei variante, dar „Răspunsul tău” apare pe a doua.
   - *Reproducere:* exercițiul 2 → a → Verifică → imediat c. Feedback „Greșit” pentru a, marcaj pe c.
3. **Spațiu lipsă în feedback (minoră, regresie).** Apare „Răspunsul corect:Romanul…” și „Exemplu de răspuns:După…”. Cauza este scriptul de migrare a culorilor din runda „Light Mode” (aceeași zi), care a eliminat spațiile de la capătul unor șiruri de text.

### 5.2. Limite ale verificării automate (răspuns scurt)

| Răspuns | Rezultat | Comentariu |
|---|---|---|
| „glasul pamantului, glasul iubirii” | Corect | Diacriticele și majusculele sunt ignorate corect |
| „Glasul pămîntului și Glasul iubirii” | Nerecunoscut | Ortografia cu „î” apare în ediții mai vechi. Poate fi acceptată fără risc |
| „indirectul liber” | Nerecunoscut | Forma articulată e corectă. Poate fi acceptată fără risc |
| „stil indirect” | Nerecunoscut | Corect: răspunsul e incomplet |
| „nu e stil indirect liber” / „Nu sunt Glasul pământului…” | Corect | **Limită cunoscută:** verificarea nu înțelege negațiile. Interfața o spune explicit. Nu se poate rezolva fiabil cu cuvinte-cheie |

Rezultatul „nerecunoscut” nu e numărat ca greșit. Elevul vede răspunsul corect și decide singur.

---

## 6. Modificări recomandate (după importanță)

1. **Scorul:** rezumatul trebuie să numere primul răspuns verificat. Corectarea ulterioară rămâne posibilă (are valoare de învățare), dar e marcată separat.
2. **Blocarea variantelor în timpul verificării.**
3. **Spațiul lipsă din feedback.**
4. **Exercițiul 3:** explicația să marcheze interpretarea ca interpretare; `basis` să indice pasajul din cap. I.
5. **Exercițiul 12:** răspunsul-model să folosească formularea temei din lecție (4.2).
6. **Exercițiul 1:** `basis` să numească exact capitolul XII („George”) și replica.
7. **Răspunsuri scurte:** să accepte variantele sigure „pămîntului” și „indirectul liber”.
8. *(Necesită validare)* Distractori mai fini la exercițiul 5; dificultatea exercițiului 11.
9. *(Necesită validare)* Cel mult trei exerciții noi pentru lacunele din secțiunea 4.

---

## 7. Observație despre lecție, găsită în timpul auditului

Figura interactivă „Drumul care deschide și închide romanul” (5.3), adăugată în runda „Light Mode”, desena reperele în ordinea **Jidovița → pod → cruce → Pripas**. Ordinea din text nu e aceasta:

- **Incipitul:** drumul „trece râul peste podul bătrân de lemn [...], spintecă satul Jidovița”, iar crucea apare „la marginea satului”. Spre sat, ordinea este **pod → Jidovița → cruce → Pripas**.
- **Finalul:** traseul invers este cruce → Jidovița → pod.

Ordinea din desen trebuie corectată. Textul lecției (5.3) doar enumeră reperele, fără să sugereze o ordine, deci nu trebuie modificat.

---

## 8. Corecturi aplicate

| # | Problema | Corectura | Fișiere |
|---|---|---|---|
| 1 | Scor umflat după „Modifică răspunsul” | Rezumatul numără primul răspuns verificat (`lib/exercises/summary.ts`, funcții pure testate). Corectările ulterioare apar separat („corectat după feedback”). Sub buton apare o notă care explică regula. Contorul „Verificate” nu mai scade după „Modifică”. | `lib/exercises/summary.ts`, `summary.test.mjs`, `exercise-session.tsx`, `exercise-feedback.tsx` |
| 2 | Răspuns schimbat în timpul verificării | Variantele și textul sunt blocate cât timp serverul verifică. La primirea rezultatului se reafișează exact răspunsul trimis. | `exercise-session.tsx`, `exercise-inputs.tsx` |
| 3 | Spațiu lipsă în feedback | Restabilit | `exercise-feedback.tsx` |
| 4 | Exercițiul 3: interpretare prezentată ca fapt | Explicația spune acum că pe gândul din cap. I „se sprijină interpretarea din lecție”. `basis` citează pasajul. | `content/romana/exercitii/ion.ts` |
| 5 | Exercițiul 12: formularea temei | Răspunsul-model folosește formularea din lecție (4.2) | idem |
| 6 | Exercițiul 1: `basis` ambiguu | Numește cap. XII („George”) și replica | idem |
| 7 | Răspunsuri scurte | Sunt acceptate și „Glasul pămîntului” și „indirectul liber”. Testele fixează și limita cunoscută a negațiilor. | idem, `grading.test.mjs`, `package.json` (scriptul rulează și noul test) |
| 8 | Ordinea reperelor în figura „Drumul…” | Pod → Jidovița → cruce → Pripas, ca în incipit. Textul și nota figurii au fost actualizate. | `components/lesson/figures/ion/drumul-circular.tsx`, `content/romana/opere/ion-interactiv.ts` |

**Neaplicate (necesită validare):** punctele 8–9 din secțiunea 6 și problemele potențiale din 3.3. Textul lecției (`ion.mdx`) nu a fost modificat.

**Verificare după corecturi:**
- `npx tsc --noEmit`, `npm run lint`, `npm run build`: fără erori.
- `npm run test:exercises`: 30 din 30.
- **Fluxul complet, în browser:** scorul e calculat pe primul răspuns; rezumatul arată „corectat după feedback”; variantele sunt blocate în timpul verificării; selecția afișată coincide cu răspunsul trimis; reluarea, navigarea și tastatura funcționează.
- **Afișare:** ambele teme, pe mobil și pe desktop, fără probleme de contrast, scroll orizontal sau erori în consolă.
- **Regresie pe lecție:** cele 14 figuri sunt la locul lor și nu au apărut erori.
