# Audit: „Enigma Otiliei” de George Călinescu (surse, citate și conținut literar)

- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare didactică.
- **Lecția auditată:** `content/romana/opere/enigma-otiliei.mdx`, cu datele figurilor (`enigma-otiliei-interactiv.ts`) și exercițiile (`content/romana/exercitii/enigma-otiliei.ts`).
- **Statusul lecției:** `draft-neverificat`.
- **Precedă:** `documentare-enigma-otiliei-2026-10-26.md` (documentarea inițială). Acest raport o completează și, unde e cazul, o corectează (vezi §3.3).
- **Completat de:** `audit-exercitii-enigma-otiliei-2026-10-26.md` și `verificare-browser-enigma-otiliei-2026-10-26.md`.

---

## 0. Statutul operei la examen

| Afirmație | Stare | Sursă |
|---|---|---|
| „G. Călinescu” este unul dintre cei 17 autori canonici | verificat | Programa 2014 (Anexa 2 la OMEN 4.923/2013), p. 6, ambele variante |
| Programa cere „studierea a cel puțin unui text din opera acestora” și **nu numește operele** | verificat | idem, p. 6 |
| Programa cere „orientări tematice în romanul interbelic” și enumeră realismul | verificat | idem, p. 5 |
| Programa 2030: Călinescu rămâne canonic; „Realismul în romanul interbelic”, „romanul citadin (text integral)” | verificat | MO nr. 737 bis/2.IX.2026, p. 9 și 28 |
| Niciun subiect 2026 din proiect nu îl numește pe Călinescu | verificat | Subiectele Model și Var. 3–6 (real/tehnologic), Model și Var. 6 (uman/pedagogic) |
| „Enigma Otiliei” este textul de Călinescu studiat de obicei | **neverificat oficial** | Doar culegerea școlară locală și practica școlară; programa școlară de liceu nu există în proiect |

**Concluzie.** Autorul este canonic, deci romanul poate fi folosit la o cerință care îl numește pe Călinescu. Programa nu impune însă acest roman. Lecția spune explicit ambele lucruri (secțiunea 1) și **nu** prezintă opera drept prioritate sau obligatorie.

---

## 1. Surse

### 1.1. Documente oficiale

Aceleași ca în lecțiile anterioare: programa 2014 (copii locale, SHA-256 în `references/bac-romana/README.md`, 2.1), programa 2030 (locală) și subiectele și baremele 2026 (locale). Trimiterea la ordinele care fixează programa pentru 2026 și 2027 este preluată din lecția „Ion” (audit Ion, runda 2); nu am reconfruntat ordinele în această sesiune.

### 1.2. Textul romanului: o singură ediție

**Ediția:** G. Călinescu, *Enigma Otiliei*, roman, vol. I–II, prefață de Paul Georgescu, Editura pentru Literatură, 1967, „Biblioteca pentru toți” nr. 53–54, ediția a II-a; textul ediției este reprodus după G. Călinescu, *Opere*, vol. III–IV, Editura pentru literatură, 1966. Datele au fost citite pe imaginile foii de titlu, ale versoului ei și ale copertei (vezi `documentare-enigma-otiliei-2026-10-26.md`, §1.2).

**Sursa digitală:** Internet Archive, `53-george-calinescu-enigma-otiliei-vol-i-1967` (ambele volume), scanare neoficială („Anonim și CAT Graur, Antwerpen, 2025”). Copiile au fost descărcate în directorul temporar al sesiunii, în etapa de documentare, și **nu au fost puse în proiect**. În etapa de implementare nu am mai descărcat nimic: am folosit copiile deja existente, doar pentru verificare. Amprente SHA-256:

| Fișier | SHA-256 |
|---|---|
| vol. I, PDF | `36bb8ae3ce6686bac02ff20272d902892ad8e129d0b74afc6bbcd999738102a2` |
| vol. II, PDF | `a9e80623f97ba0a5ce2781eb83ab9f6177e07c8569b056835f79813971a0224f` |
| vol. I, OCR (`_djvu.txt`) | `4c6b53cb9afb6f3d07eeaa0eabbf9421e70e08c2cc254914b167154ccfe0c35a` |
| vol. II, OCR | `9f2dd8e28817b1b5e6845023f9ac72303cd34b0230f459242ab338ef6f4dd78e` |

**Drept de autor.** Autorul a murit la 12 martie 1965 (tabelul cronologic al ediției, vol. I, p. XXXIII), deci romanul pare încă protejat. Statutul legal al scanării de pe Internet Archive este incert. Lecția folosește doar citate scurte, pentru analiză; textul integral nu este salvat nici în repository, nici în `references/bac-romana/local/`.

**Metoda de verificare:**

1. **Căutare automată în OCR** (`references/bac-romana/local/enigma-otiliei/check_lesson_quotes.py`): extrage toate segmentele dintre „ și ” din cele trei fișiere ale lecției și le caută în OCR-ul ambelor volume, după normalizarea diacriticelor și a ortografiei („â” → „î”, „sunt” → „sînt”). Rezultatul complet: `local/enigma-otiliei/raport-citate-lectie.txt`.
2. **Pagina tipărită** (`find_page.py`): caută fragmentul în stratul de text al PDF-ului și calculează pagina tipărită. Formula a fost calibrată pe imaginile paginilor 8–9, 134–135, 298–299 și 346–349; toate paginile citate în lecție au fost apoi văzute pe imagine.
3. **Citire pe imagine** pentru toate citatele cu potrivire aproximativă și pentru toate paginile citate.

### 1.3. Prefața și tabelul cronologic

Prefața lui Paul Georgescu (vol. I, p. V–XVI) și tabelul cronologic (p. XIX–XXXIII) fac parte din aceeași ediție. Toate citatele critice din lecție provin din prefață și au fost citite pe imagine (p. VI, VIII, IX, X, XI, XIV, XV, XVI). Criticii citați **în** prefață (Crohmălniceanu, Călinescu în *Clasicism, romantism, baroc*) **nu** sunt citați în lecție.

### 1.4. Surse secundare

`comentarii-opere-romana.pdf`, p. 41–46 (culegere școlară anonimă): doar confruntare. Diferențele și formulările negăsite sunt în §3.2 și §5.

---

## 2. Rezultatul verificării citatelor

**128 de segmente distincte** între ghilimele, în lecție, în datele figurilor și în exerciții:

| Rezultat | Număr | Ce înseamnă |
|---|---|---|
| Găsite exact în OCR | 84 | 46 doar în vol. I (inclusiv prefața), 25 doar în vol. II, 13 în ambele |
| Potrivire aproximativă (0,78–0,99), **confirmate pe imagine** | 21 | Diferențe de OCR: „tinar”, „opt sprezece”, „ba 43 trina”, „pu-pu ngasule”, „caivitie”, rânduri despărțite |
| Găsite în textele de referință locale | 16 | 14 din programe, subiecte și bareme; „nu-nu stă nimeni aici, nu cunosc” (și în roman, confirmat pe imagine, vol. I, p. 8); „Părinții Otiliei” (doar în culegere, folosit într-o recomandare de prudență) |
| Nu sunt citate din surse | 6 | 3 formulări-model ale lecției (8.4), o formulare recomandată („roman realist de tip balzacian”) și două fragmente din cartea poștală (vol. II, p. 346), confirmate pe imagine; OCR-ul are acolo un rând rupt |
| Fals pozitiv | 1 | „vol. I, p. 3”, scris între ghilimele ca exemplu de trimitere |

**Pagini verificate pe imagine:** vol. I: V–XVI, XIX, XXVI–XXVII, XXXII–XXXIII, 3–17, 108–109, 134–135, 230–231, 260–263, 298–303; vol. II: 117, 140–141, 146–147, 168–169, 176–177, 302–311, 334–349.

### 2.1. Afirmații verificate (selecție)

| Afirmație din lecție | Unde |
|---|---|
| 20 de capitole numerotate, fără titluri; cap. XX începe la vol. II, p. 290, iar textul se încheie la p. 349 | imagini; cap. I (p. 3), III (p. 54), V (p. 93), VI (p. 108), VIII (p. 163), X (p. 242), XII (p. 301), XIV (vol. II, la început), XVIII (p. 168), XX (p. 290) |
| Felix vine din Iași, fiul doctorului Iosif Sima; casa moștenită e „în strada Lăpușneanu” | vol. I, p. 9 |
| Otilia „trecea în genere drept fata lui Costache”; este fata vitregă, „din a doua căsătorie” | vol. I, p. 10; vol. II, p. 304 |
| Moș Costache îi dă lui Pascalopol „un pachețel de o sută de mii” pentru Otilia; restul, sub saltea | vol. II, p. 303 |
| Pascalopol depune banii la bancă pe numele Otiliei | vol. II, p. 307–308 |
| Stănică fură pachetul de sub saltea; bătrânul moare | vol. II, p. 310–311 |
| Otilia doarme în patul lui Felix, el pe canapea; pleacă a doua zi cu Pascalopol | vol. II, p. 344–346 |
| Epilogul: Felix profesor universitar; Stănică, însurat cu Georgeta, prefect; Pascalopol în tren | vol. II, p. 346–348 |
| Grafia „Stănică Rațiu” | peste 750 de apariții în OCR; imagini p. 260–262 și VIII |

---

## 3. Corecturi și diferențe

### 3.1. Corecturi făcute în timpul lucrului (prinse de verificare)

| Prima formă | Corectată | Cum s-a observat |
|---|---|---|
| „Rostul femeii este să placă, afară de asta…” | „…placă, **în** afară de asta…” | imaginea p. 338 (OCR-ul pierduse „în”) |
| „fac eu ceva... pentru fe-fetița mea!” (p. 146) | „fac eu ceva pentru fe-fetița mea!” (p. 147) | imaginea p. 147: fără puncte de suspensie |
| Replica lui Felix către Georgeta pusă în cap. XII | cap. XI | cap. XII începe la p. 301; replica e la p. 299 |
| Mai multe trimiteri (în lecție, în figuri și în exerciții) cu pagina greșită cu 1–7 pagini (de exemplu, „Eu sunt Otilia” la p. 12, contul lui Felix la p. 170) | paginile corecte (p. 13; p. 177) | calibrarea paginilor pe imagini |
| Prefață: „angelic-demonic” la p. X, „singurul biruitor” la p. XIII, „două personaje scapă” la p. IX | p. XI, XIV, X | imagini |
| Formularea ipotetică „un roman interbelic” pusă între ghilimele în secțiunea 1 | fără ghilimele | putea fi citită ca formulare oficială |
| Distractor la exercițiul despre bani: „Îi depune banii la bancă, pe numele ei” | înlocuit | Pascalopol chiar depune banii la bancă (p. 307–308); distractorul era aproape de adevăr |
| „Stănică o trimite pe Otilia în oraș” | „o convinge să iasă în oraș” | textul: Otilia îi cere lui să meargă, el refuză și o îndeamnă pe ea (p. 309) |
| „îl trage spre ea” (prima întâlnire) | „îi întinde «cu franchețe» brațul” | imaginea p. 12 |

### 3.2. Diferențe față de culegerea școlară

| Culegerea | Ediția 1967 |
|---|---|
| „cu puțin înainte de orele 10, un tânăr de vreo optsprezece ani intra în strada Antim” | „orele zece”; „îmbrăcat în uniformă de licean” omis fără semn |
| „n-am stat să disting cea ce e patern…” | „n-am prea stat ca să disting ce e patern…” (p. 135) |
| „Otilia o fată admirabilă, superioară, pe care n-o înteleg” | două propoziții distincte (p. 299) |
| „cont în bancă pe numele Otiliei cu suma de 300000 lei” | „un pachețel de o sută de mii” (p. 303) |
| „Stănică Raţiu” (culegerea) / „Stanică Rațiu” (fișa Archive) | „Stănică Rațiu” |

### 3.3. Corecturi față de documentarea inițială

- Numărul de capitole, marcat incert, este acum stabilit: **20**.
- Pagina pentru „fe-fetița mea”, necunoscută, este acum stabilită: vol. II, p. 147 (și alte apariții).
- Documentarea dădea pentru Pascalopol replica de la p. 135; ea rămâne valabilă.

---

## 4. Interpretări care cer validarea unui profesor

1. **Încadrarea „realist de tip balzacian”.** Sprijinită de prefața ediției, dar este o etichetă critică. Programa vorbește doar de realism și de „orientări tematice în romanul interbelic”.
2. **„Romanul citadin” ca orientare tematică pentru 2026–2027.** Termenul apare oficial doar în programa 2030.
3. **Structura circulară** (incipit și final în fața aceleiași case, aceeași replică): interpretare susținută de text.
4. **Cele patru etape** din harta capitolelor sunt o împărțire a lecției, nu a autorului.
5. **Motivul plecării Otiliei** (generozitate față de cariera lui Felix sau căutarea siguranței): lecția prezintă ambele lecturi.
6. **Personajul principal** (Otilia sau Felix) și alegerea episoadelor pentru eseu.
7. **Personajele-tip**, preluate din prefață („Avarul”, „Fata bătrână”, „Adolescenta”, „baba absolută”, „Arivistul demagog”): o grilă critică din 1967, nu singura posibilă.

---

## 5. Informații excluse (neconfirmate)

| Formulare | De ce |
|---|---|
| Titlul inițial „Părinții Otiliei” | Nu apare în prefața sau în cronologia ediției; lecția o pomenește doar ca să-l avertizeze pe elev |
| „Nu Otilia are o enigmă, ci Felix crede că ea le are…” (atribuit lui Călinescu) | Nu apare în ediție; sursa nu e indicată |
| „noi vom putea fi tolstoieni sau balzacieni…” | idem |
| „primul nostru roman citadin, nu de tip analitic, ci clasic balzacian” (Crohmălniceanu) | Nu apare în ediție |
| „tipizarea mea în ipostază feminină” | Nu apare în ediție |
| „spirit practic” (Stănică despre Otilia) | Negăsit în OCR |
| Editura primei ediții (1938) | Nu apare în paginile citite |
| Suma de „300000 lei” | Contrazisă de ediție |

Testul `lib/exercises/enigma-otiliei.test.mjs` verifică automat că formulările din acest tabel (și cifra 300000) nu apar în lecție drept fapte.

---

## 6. Implementare

1. **Lecția** `enigma-otiliei.mdx`: 11 secțiuni (H2), 31 de subsecțiuni (H3), aceleași etichete ca la celelalte opere („Despre roman”, „Interpretare”, „Cerință oficială”, „Recomandare”).
2. **Zece figuri**, în `components/lesson/figures/enigma-otiliei/`, toate din componentele comune (nicio componentă nouă, nicio dependență nouă): harta celor 20 de capitole (`ChapterMap`), trei quiz-uri de potrivire și unul de clasificare (`ClassifyQuiz`: realism balzacian, fapt/interpretare, personaje-tip, caracterizare), două explorări (`DetailExplorer`: incipit și final; „Otilia, văzută de ceilalți”), harta relațiilor (`RelationMap`), planul de eseu și autoevaluarea.
3. **16 exerciții**; raport separat.
4. **Registre:** `OPERA_SLUGS`, `romana-opere.ts`, `lib/exercises/registry.ts`, lista din `grading.test.mjs`, scriptul `test:exercises`.
5. **Teste:** `lib/exercises/enigma-otiliei.test.mjs`.
6. **Catalogul surselor:** `references/bac-romana/README.md` (secțiunile 4, 5, 6.5, 7.2, 9.3).
7. **Cod comun și alte opere:** nemodificate.

---

## 7. Limite

1. **Romanul nu a fost citit integral.** Am citit capitolul I, ultimul capitol (XX) și pasajele în care apar faptele și citatele din lecție. Lecția nu rezumă capitolele pe care nu le-am citit (harta capitolelor are faptele doar pentru capitolele I, VI, IX–XII, XVIII și XX).
2. **O singură ediție**, fără o a doua cu care să fie confruntată; ediția din 1965 cerută inițial nu a fost găsită.
3. **Statutul legal al scanării** este incert (vezi §1.2).
4. **OCR-ul** nu recunoaște sigur cifrele romane și unele rânduri; de aceea toate paginile citate au fost văzute pe imagine.
5. Anul apariției romanului (1938) este confirmat de prefață (p. V–VI); intrarea din tabelul cronologic are anul pe o pagină pe care nu am citit-o pe imagine.
6. Nu am consultat ediția princeps, ediții critice, *Istoria literaturii române* a lui Călinescu sau alte studii critice.
7. Programa școlară de liceu (care stabilește textele studiate) nu există în proiect.
