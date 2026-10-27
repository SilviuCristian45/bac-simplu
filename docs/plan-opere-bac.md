# Plan de extindere a bibliotecii de opere (Limba și literatura română)

Document de urmărire a progresului, actualizat la fiecare lot. **Nu este o listă oficială de opere obligatorii.**

- **Creat:** 2026-10-26, de Claude (asistent AI).
- **Reluare între sesiuni:** continuă de la prima operă cu statutul `neîncepută` sau `în lucru` din tabelul de la §3.

## 1. Ce spune programa (și ce nu spune)

Sursa: Programa de examen pentru disciplina Limba și literatura română, Bacalaureat 2014, Anexa nr. 2 la OMEN nr. 4.923/29.08.2013 (aplicabilă sesiunilor 2026 și 2027, conform `docs/rapoarte/audit-ion-2026-10-25-runda2.md`, §1). Textul profilului umanist a fost redescărcat de la ISJ Vaslui (<https://isj.vs.edu.ro/download/5.Programa_Bac_2014_Lb_si_literatura_romana_profil_uman.pdf>) la 2026-10-26 și citit; copia profilului real (edupedu.ro) a răspuns 403 și **nu** a fost recitită în această sesiune.

- **Cerință oficială** (p. 6): lista de **17 autori canonici**: Mihai Eminescu, Ion Creangă, I. L. Caragiale, Titu Maiorescu, Ioan Slavici, G. Bacovia, Lucian Blaga, Tudor Arghezi, Ion Barbu, Mihail Sadoveanu, Liviu Rebreanu, Camil Petrescu, G. Călinescu, E. Lovinescu, Marin Preda, Nichita Stănescu, Marin Sorescu. Examenul nu implică studiul monografic, ci „studierea a cel puțin unui text din opera acestora”.
- **Cerință oficială** (p. 3–5): specii epice „basm cult, nuvelă, roman”; specii dramatice „comedia, drama”; „un text dramatic postbelic”; textul poetic; perioade: pașoptistă, criticismul junimist; curente: romantism, realism, simbolism, modernism, tradiționalism, avangardă; la perioada postbelică: „un roman scris între 1960–1980, un roman scris după 1980”, poezia și teatrul postbelic, postmodernismul.
- **Programa nu numește opere concrete.** Alegerea unui titlu pentru fiecare autor este o **recomandare a proiectului**, bazată pe ce se studiază în mod obișnuit, nu o cerință oficială. Programa școlară de liceu (care stabilește textele studiate) **nu se află în proiect**; de aceea lecțiile trebuie citite împreună cu manualul și profesorul.
- Programa 2030 (`Programa-Bac-2030-Romana-1.pdf`) nu se aplică înainte de sesiunea 2030.

## 2. Reguli de lucru pentru lecțiile noi

- Statut în aplicație: `draft-neverificat`, `lastReviewed: null`. Operele noi **nu** sunt validate de un profesor, chiar dacă cele cinci existente au fost.
- Citatele sunt scurte și verificate pe o sursă citată în lecție (secțiunea „Surse”); când există o singură sursă online, lecția o spune.
- Faptele sunt separate de interpretări prin etichetele existente. Nu se atribuie formulări criticilor decât dacă au fost verificate.
- Fiecare lecție are exerciții în sistemul existent (12–16, trei tipuri) și teste.

## 3. Lista de urmărire

Statuturi: `neîncepută`, `în lucru`, `implementată` (lecție + exerciții integrate, build trecut), `testată (automat)` (plus teste, lint, TypeScript, build și verificare în Chrome headless: HTTP, linkuri, consolă, scroll orizontal, figuri, flux de exerciții; **nu s-a uitat un om la pagini**). **Niciun statut nu înseamnă validare didactică.**

| # | Operă | Autor (canonic?) | Specie / curent | Relevanță în programă | Prioritate | Statut |
|---|---|---|---|---|---|---|
| 0a | Ion | Rebreanu (da) | roman interbelic, obiectiv | roman interbelic | – | existentă |
| 0b | Moara cu noroc | Slavici (da) | nuvelă realist-psihologică | nuvelă | – | existentă |
| 0c | Povestea lui Harap-Alb | Creangă (da) | basm cult | basm cult | – | existentă |
| 0d | Alexandru Lăpușneanul | Negruzzi (nu) | nuvelă istorică romantică | nuvelă, pașoptism | – | existentă |
| 0e | Enigma Otiliei | Călinescu (da) | roman realist-balzacian | roman interbelic | – | existentă |
| 1 | O scrisoare pierdută | Caragiale (da) | comedie, realism clasic | comedia | 1 | testată (automat) |
| 2 | Luceafărul | Eminescu (da) | poem romantic | poezie, romantism | 1 | testată (automat) |
| 3 | Plumb | Bacovia (da) | poezie simbolistă | simbolism | 1 | testată (automat) |
| 4 | Testament | Arghezi (da) | poezie modernistă, artă poetică | modernism | 1 | testată (automat); **text integral neconsultat** |
| 5 | Eu nu strivesc corola de minuni a lumii | Blaga (da) | poezie modernistă, artă poetică | modernism, expresionism | 1 | testată (automat); **text integral neconsultat** |
| 6 | Baltagul | Sadoveanu (da) | roman tradiționalist | roman interbelic, tradiționalism | 1 | testată (automat); **romanul necitit, doar surse secundare** |
| 7 | Ultima noapte de dragoste, întâia noapte de război | Camil Petrescu (da) | roman psihologic modernist | roman psihologic și al experienței | 1 | testată (automat); **romanul necitit, doar sursă secundară** |
| 8 | Moromeții (vol. I) | Preda (da) | roman postbelic, al lumii rurale | roman postbelic; **atenție:** vol. I este din 1955, deci în afara intervalului „1960–1980” din programă (vol. II: 1967) | 1 | testată (automat); **romanul necitit, surse secundare slabe** |
| 9 | Iona | Sorescu (da) | dramă postbelică | „un text dramatic postbelic” | 1 | testată (automat); **piesa necitită, doar articol de presă** |
| 10 | Leoaică tânără, iubirea | Stănescu (da) | poezie neomodernistă | poezia postbelică | 2 | testată (automat); **doar 4 versuri verificate** |
| 11 | Riga Crypto și lapona Enigel | Barbu (da) | poezie modernistă, ermetism | modernism | 2 | **blocat:** nu am găsit un text al poeziei și nici un articol științific care să citeze versuri; poemul este ermetic și nu poate fi tratat fără text (vezi §5) |
| 12 | Scrisoarea III | Eminescu (da) | poem romantic, satiră și epic | romantism | 2 | testată (automat) |
| 13 | În contra direcției de astăzi în cultura română | Maiorescu (da) | studiu critic, criticism junimist | criticismul junimist; text critic | 2 | testată (automat) |
| 14 | „Sincronismul” (fragmentul din *Istoria literaturii române contemporane*; nu *Mutația valorilor estetice* în întregime) | Lovinescu (da) | critică, modernism | perioada interbelică, text critic | 3 | testată (automat); **doar fragmentul din Wikisource** |
| 15 | O noapte furtunoasă | Caragiale (da) | comedie | comedia | 3 | testată (automat) |
| 16 | Roman scris după 1980 | – | roman postmodern | „un roman scris după 1980” | – | **blocat:** programa nu numește opera, iar programa școlară nu este în proiect; e nevoie de decizia utilizatorului |

Observații:
- Ordinea prioritară 1 acoperă o operă din fiecare specie și perioadă numite în programă, plus autorii canonici cei mai frecvenți în subiectele din `references/bac-romana/` (Bacovia, Arghezi, Rebreanu, Sadoveanu, Preda, Camil Petrescu apar în subiectele 2026 din proiect).
- Titlurile de la 10–15 sunt opțiuni; se pot înlocui după programa școlară.
- Pentru „Moromeții” (8): programa cere „un roman scris între 1960–1980”, dar volumul I este din 1955; volumul al II-lea (1967) se încadrează. Lecția spune asta.
- Excluderi justificate: **Negruzzi** e deja în proiect fără a fi canonic; **Titu Maiorescu** și **E. Lovinescu** sunt critici, tratați ca texte critice (13–14) fiindcă programa cere „textul critic”.

## 4. Jurnal de progres

| Data | Lot | Rezultat |
|---|---|---|
| 2026-10-26 | Analiză și plan | Lista de mai sus creată. |
| 2026-10-26 | Lot 1 (parțial): 1–3 | „O scrisoare pierdută”, „Luceafărul”, „Plumb” implementate și testate automat. Documentare: `docs/rapoarte/documentare-opere-noi-2026-10-26.md`. |
| 2026-10-27 | Lot 1 (continuare) | „Testament” (4), „Baltagul” (6), „Scrisoarea III” (12), „În contra direcției...” (13), „O noapte furtunoasă” (15) implementate. |
| 2026-10-27 | Lot 2 | „Eu nu strivesc corola...” (5), „Ultima noapte de dragoste...” (7), „Moromeții” vol. I (8), „Iona” (9), „Leoaică tânără, iubirea” (10), „Sincronismul” (14) implementate. |
| 2026-10-27 | Verificări de închidere | 424 de teste trecute, `eslint` și `tsc` fără erori, `next build` reușit (45 de pagini). Chrome headless: 16 lecții noi și cele 5 vechi, fără erori de consolă, scroll orizontal sau linkuri invalide. **Rămân:** nr. 11 (Barbu) și nr. 16 (roman după 1980), ambele blocate (vezi §5). |

## 5. Blocaje și excluderi

| Operă | Motiv | Ce ar debloca-o |
|---|---|---|
| 11. Ion Barbu, „Riga Crypto și lapona Enigel” | Nu am găsit textul poeziei într-o sursă accesibilă și nici un articol științific care să citeze versuri; singurele surse găsite sunt fișe școlare fără autor și un proiect didactic despre Barbu în general. Poemul este ermetic: o lecție fără text ar fi o interpretare nesusținută. | Textul poeziei dintr-o ediție (sau alt text barbian ales de profesor, de exemplu din *Joc secund*) și, ideal, un articol critic care îl citează. |
| 16. Roman scris după 1980 | Programa nu numește romanul, iar programa școlară de liceu (care stabilește textele) nu este în proiect. Alegerea unui titlu ar fi o presupunere cu impact mare. | Decizia utilizatorului sau programa școlară. |
| Texte integrale | Pentru 8 lecții (Testament, Blaga, Stănescu, Baltagul, Camil Petrescu, Preda, Sorescu, Lovinescu parțial) textul integral nu a fost consultat; ele sunt marcate în lecție și în `docs/rapoarte/documentare-opere-noi-2026-10-26.md`. | Ediții ale operelor (în `references/`, pentru verificarea citatelor). |
