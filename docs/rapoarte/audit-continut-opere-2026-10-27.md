# Audit de conținut: cele 19 lecții de Română și cele 266 de exerciții

- **Data:** 2026-10-27
- **Realizat de:** Claude (asistent AI). **Nu este o validare didactică făcută de un profesor.**
- **Tip:** exclusiv analiză. Nu am modificat lecții, exerciții, configurări sau statusuri (toate rămân `draft-neverificat`). Fără instalări, commit, push sau deploy. Singurul fișier creat este acest raport.
- **Domeniu:** conținutul pentru Română. Rebrandingul și identitatea vizuală nu fac parte din audit.
- **Teste automate și randare în browser:** nu reprezintă validare didactică; nu le invoc ca dovadă a corectitudinii.

---

## 0. Rezumat

| | |
|---|---|
| Lecții auditate | 19 (5 inițiale + 14 noi) |
| Exerciții trecute prin tabelele din §6 | 266 |
| Probleme **critice** (afirmații contrazise de textul-sursă sau citate greșit atribuite) | 5 (în 4 lecții; 3 exerciții afectate direct) |
| Probleme **importante** | 12 |
| Probleme **minore** | 20+ |
| Lecții care au nevoie de **textul integral** | 7 (Testament, Blaga, Stănescu, Baltagul, Ultima noapte, Iona, Moromeții) |
| Exerciții de **revizuit** | 7 (1 Scrisoarea pierdută, 1 Plumb, 2 Testament, 2 O noapte furtunoasă, 1 Leoaică) |

**Cele mai importante concluzii:**

1. În 3 lecții noi, redactate pe text integral, am găsit patru afirmații care **contrazic textul**: Baiazid ca visător în „Scrisoarea III”; „casa greșită” dată ca fapt în „O noapte furtunoasă”; cuvântul „mormânt” atribuit poeziei „Plumb”; „divorțată” atribuit Ziței. Sunt erori de redactare ale lecțiilor, nu ale surselor.
2. Șapte lecții se sprijină pe fragmente sau pe surse secundare. Sunt etichetate onest, dar nu pot susține un eseu de examen fără textul integral.
3. Programa 2014 nu se află în depozit (dosarul `references/bac-romana/local/` nu există în această copie), iar varianta pentru profilul real nu a putut fi recitită. Toate citatele din programă pentru Variantele 4, 5, 6 real/tehnologic sunt verificate doar pe copia pentru profilul umanist.
4. Cinci lecții noi (Scrisoarea pierdută, O noapte furtunoasă, Iona, Maiorescu, Lovinescu) vizează tipuri de text pe care **niciun subiect 2026 din proiect nu le cere** (text dramatic, text critic).

---

## 1. Metodă, surse, limite

### 1.1. Cum am lucrat

- **Citire integrală** a fiecărei lecții noi (MDX) și a fiecărui set de exerciții; citire a datelor interactive pentru „Scrisoarea III”, cu verificări prin căutare pentru „O noapte furtunoasă”, „Baltagul” și „Moromeții”.
- **Confruntare automată a citatelor** cu sursele salvate în sesiunile anterioare (transcrieri Wikisource, PDF-uri); acolo unde sursa avea diacritice deformate, am comparat în litere ASCII.
- **Verificare manuală pe text** a faptelor și a atribuirilor de scenă (piese) și a numărătorilor (strofe, scene, versuri) prin scripturi.
- **Programa 2014:** confruntare cu copia pentru profilul umanist (ISJ Vaslui), în scratchpad. **Programa 2030**, **subiectele și baremele 2026:** citite din `references/bac-romana/`.
- **Cele 5 lecții inițiale:** exercițiile au fost citite integral (Ion, Moara cu noroc, Harap-Alb, Lăpușneanul, Enigma). Lecția „Ion” a fost citită integral. Pentru celelalte patru **nu am recitit lecțiile**, nici citatele din ele pe edițiile tipărite: m-am bazat pe auditurile existente din `docs/rapoarte/` (care documentează verificarea pe două ediții și pe pagini) și pe lectura exercițiilor.

### 1.2. Cele cinci categorii folosite

| Cod | Sens |
|---|---|
| **(1)** | Confirmat direct pe textul operei (transcriere sau ediție citată) |
| **(2)** | Susținut doar de surse secundare (Wikipedia, articole, fișe școlare) |
| **(3)** | Interpretare plauzibilă, neverificabilă ca fapt |
| **(4)** | Posibilă eroare sau ambiguitate |
| **(5)** | Imposibil de verificat fără ediție sau fără validare de specialist |

Separat, marchez când un enunț este **cerință a programei**, **exemplu recomandat** sau **alegere editorială a platformei**.

### 1.3. Surse consultate

- Programa de examen, Bacalaureat 2014, Anexa 2 la OMEN 4.923/2013, profil umanist (copie ISJ Vaslui).
- Programa 2030 (MO 737 bis/2.IX.2026) și subiectele/baremele 2026 din `references/bac-romana/`.
- Transcrieri Wikisource: O scrisoare pierdută (rev. 106053), Luceafărul (148561), Scrisoarea III (138737), O noapte furtunoasă (152604), Maiorescu (122403), Lovinescu, „Istoria literaturii române contemporane / Evoluția ideologiei literare”.
- „Plumb” de Bacovia: ediție digitizată (Biblioteca Cernăuți, extragere OCR cu diacritice deformate).
- Pentru Testament, Blaga și Stănescu: articolele și fișele citate în lecții (Funeriu 2020, Parpală 2009, Frățean 2022, Neca 2022, Crișan 2020, fișa ISJ Dolj, un ghid de studiu fără autor).
- Rapoartele din `docs/rapoarte/` (în special `documentare-opere-noi-2026-10-26.md` și auditurile celor 5 lecții inițiale).
- Un singur acces web în acest audit: pagina Wikisource a romanului „Ion” (pentru structura în capitole).

### 1.4. Limite ale auditului

1. Nu am avut acces la ediții tipărite; citatele sunt confruntate cu transcrieri online.
2. Nu am citit romanele „Baltagul”, „Ultima noapte…”, „Moromeții”, piesa „Iona”, nici integralele pentru „Testament”, „Eu nu strivesc…”, „Leoaică tânără…”. Afirmațiile mele despre aceste opere vin din lecții și din cunoștințe generale, **neverificate**; unde le menționez, le marchez.
3. Programa pentru profilul real nu a fost recitită. O reîncercare de descărcare a fost refuzată de mediul de lucru și nu am insistat.
4. Aplicabilitatea programei 2014 pentru 2026–2027 rezultă din ordinele anuale (citite în auditul „Ion”, runda 2, din copii); nu le-am reverificat. Documentul însuși spune „Subiectele pentru examenul de bacalaureat 2014 se elaborează în baza prevederilor prezentei programe”.
5. Fișierele interactive ale operelor (în afară de Scrisoarea III) nu au fost citite rând cu rând.

---

## 2. Probleme critice (pot induce elevii în eroare)

„Critic” = afirmație prezentată ca fapt, contrazisă de textul-sursă sau de un document oficial, sau citat atribuit greșit.

| # | Operă | Locul | Problema | Dovadă | Categorie |
|---|---|---|---|---|---|
| C1 | Scrisoarea III | `scrisoarea-iii.mdx` 5.1 (Partea I) | „**Baiazid** visează o fecioară, luna, apoi un copac”. În poem visătorul este „un sultan dintre aceia ce domnesc peste vro limbă”, **nenumit** (cu elemente ale legendei Edebali–Malcatun). Baiazid apare mai târziu: „Pîn-în Dunăre ajunge furtunosul Baiazid”. Fișa rapidă („sultanul Baiazid și visul lui”) sugerează aceeași confuzie. Figura interactivă și secțiunea 6.1 spun corect „un sultan”. | Transcrierea Wikisource, v. 1–3 și 47–50 | (1)/(4) |
| C2 | O noapte furtunoasă | `.mdx` 3.2 (comic de situație); element interactiv `tablita` (etichetat **fapt-piesa**); fișa lui Rică (fapt-piesa); exercițiul `noapte-mc-numar` | „Rică intră în **casa greșită**” este dat ca fapt. În text, Rică a fost invitat de Zița prin bilet („i-am scris eu în bilet unde să vie”, I,6), iar Spiridon i-a arătat casa. „A greșit casa” este explicația improvizată de Veta (II,9) și acceptată de Dumitrache; „tăblița” o adaugă Rică. Lecția 4.1 o numește corect „explicație convenabilă”, deci este inconsecventă cu 3.2. În 6.5, „numărul 9, bătut de meșter ca 6” e confuz (textul: „numărul 6 d-a-ndoaselea”). | Transcrierea Wikisource, I,6; II,9 | (1)/(4) |
| C3 | Plumb | `plumb.mdx` 3.2 pct. 4 și 4.1 | „**mormânt**” este dat ca element al poeziei, între ghilimele („sicriele de plumb”, „cavou”, „mormânt”, „coroanele”). Poezia nu conține cuvântul (are „mort”, „cavou”, „sicrie”, „coroane”). | Ediția digitizată, cele 8 versuri | (1)/(4) |
| C4 | O scrisoare pierdută | Exercițiul `scrisoare-mc-poliza`; `.mdx` 6.3 și 7.4 | Enunțul: „Cu ce îl poate Trahanache amenința pe Cațavencu, în actul III?” – premisa e falsă. Trahanache arată polița în III,4 în fața lui Tipătescu și Zoei și i-o dă lui Tipătescu („ți-am dat polița lui Cațavencu”); în actul III nu o folosește nimeni împotriva lui Cațavencu; Zoe o folosește în IV,6. Lecția 6.3 („cu ajutorul unei polițe”) și 7.4 („are polița prin care îl pune la punct”) sunt imprecise. | Transcrierea, III,4; IV,6 | (1)/(4) |
| C5 | O noapte furtunoasă | Exercițiul `noapte-ra-final`; `.mdx` 6.5 | „**Ultima replică a piesei**, «Uite așa se orbește omul la necaz!»” – ultima replică este „Rezon!” a lui Ipingescu (apoi didascalie și „Cortina”). Fraza e ultima a lui Dumitrache (lecția 4.1 spune corect „ultima replică a lui Dumitrache”). | Transcrierea, finalul II,9 | (1) |

**Efect:** un elev care învață C1–C3 și le repetă în eseu pierde puncte la reperele despre „secvențe” și „imagini poetice”. C4–C5 pot da feedback greșit unor răspunsuri corecte.

---

## 3. Probleme importante

| # | Operă | Problema | Categorie |
|---|---|---|---|
| I1 | Moromeții | Cinci citate din roman ( „Ocupațiunea ta mintală…”, „Nu sunt caii tatei, sunt ai mei.”, „3 chestiuni se desprind…”, „ca să se mire proștii”, final „numai răspundea cu multe cuvinte la salut…”) provin dintr-o fișă școlară și **nu au fost confruntate cu o ediție**. Ghilimelele le fac să arate verificate. Lecția declară asta. | (2)/(5) |
| I2 | Moromeții, Baltagul, Ultima noapte, Iona | Romanele/piesa **nu au fost citite**; toate evenimentele, locurile (Măgura, Olt, Cohalm; Sabasa; plaja din „Iona”), capitolele și numele secundare provin din Wikipedia, un articol de presă și o fișă. Reperele Subiectului III (incipit, final, perspectivă, timp/spațiu) sunt tocmai cele neverificate. | (2)/(5) |
| I3 | Testament, Blaga, Stănescu | Fără text integral: opt versuri, câteva fragmente și patru versuri. Lipsesc numărul strofelor/versurilor, rima, măsura – exact elementele reperului 3 al Variantei 6. Sursa pentru Blaga este o fișă ISJ fără autor. | (2)/(5) |
| I4 | Leoaică tânără, iubirea | Exercițiul `leoaica-mc-repetitie` și lecția 5.1 numerotează „versurile 1, 3 și 4” (cuvântul „față” la sfârșit). Articolul citează patru segmente separate prin „/”; după cunoștințele mele generale (**neverificate aici**), edițiile așază începutul în versuri mai scurte, caz în care „față” nu încheie versurile 1, 3, 4. Dacă manualul elevului diferă, exercițiul îl contrazice. | (5) |
| I5 | Blaga | `.mdx` 4.1 pune „nu strivesc”, „nu ucid”, „nu micșorează” în „prima parte”; fișa ISJ pune în prima secvență doar primele două, iar „nu micșorează” e în comparația cu luna (lecția 6.2). Inconsecvență internă. | (4) |
| I6 | O noapte furtunoasă | „Zița… este **divorțată**” (7.7, „Despre piesă”): nu e în text; lista personajelor spune „sora ei”, iar Zița spune „nu sunt văduvă, sunt liberă… jună sunt”. Adaos nesusținut. | (4) |
| I7 | Plumb | Secțiunea „Limbaj artistic” (metaforă, epitet „de materie”, oximoron) e sub eticheta „Despre poezie” (fapt); încadrarea figurilor e interpretare („sicrie de plumb” poate fi literal; „de plumb” e atribut prepozițional, „epitet” e discutabil). „Vântul mișcă coroanele” (6.2, exercițiu `plumb-ra-imagine`) e inferență. | (3)/(4) |
| I8 | Testament | Exercițiile `testament-mc-seara` și `testament-af-scara` testează conjectura „scara/seara” a unui articol (Funeriu), care amintește și o anecdotă (Pienescu: „acuma las-o așa”) omisă în lecție. Nu e cerință de examen. Prima strofă se citează „Nu-i voi lăsa” (în toate cele trei surse); nu pot verifica dacă manualele tipăresc „Nu-ți voi lăsa”. | (3)/(5) |
| I9 | Programa, 7 lecții | Citatele din programă „particularități ale compoziției: incipit, final…” și „particularități ale construcției subiectului” omit „în textele narative” fără semn de elipsă (Baltagul, Moromeții, Ultima noapte). Programa: „…compoziției în textele narative: incipit, final, episoade/secvențe narative, tehnici narative”. | (1) |
| I10 | Maiorescu, Lovinescu | Nu sunt în canonul programei 2030 (14 autori); lecțiile sunt valabile doar pentru sesiunile 2026–2027. Lecțiile nu spun asta; planul de lucru (`docs/plan-opere-bac.md`) o spune. | (1) |
| I11 | Moromeții | Lecția numește, în secțiunea Surse, o persoană privată (profesoara, după numele fișierului PDF). Decizie editorială/de confidențialitate a proprietarului. | editorial |
| I12 | Corectare automată (toate seturile) | `containsTerm` acceptă orice răspuns care conține cuvântul-cheie ca cuvânt întreg: „nu 4, ci 5”, „4 sau 5” trec ca „corect”. Limită cunoscută (audit „Ion”, §5.2). | funcțional |

---

## 4. Probleme minore (selecție)

- **Scrisoarea pierdută:** explicația din `scrisoare-mc-pret` atribuie mențiunea banilor „unei replici a lui Pristanda” (în text, „cu orice preț” e replica Zoei, I,5; Pristanda se plânge de leafă).
- **Luceafărul:** identificarea fata de împărat = Cătălina e convenție școlară (numele apare o dată, „Privind la Cătălina”); „Antiteză: nemuritor și rece față de Eu sunt vie” e un exemplu slab (perechea reală: nemuritor/muritoare); `luceafar-mc-antiteza` are „cel mai clar” discutabil.
- **Scrisoarea III:** citat modificat în model („saltimbancilor și irozilor”, text: „saltimbancii și irozii”); „gloria” e parafrază pentru „laurii”; „virtutea și geniul sunt pierdute” (4.3) forțează versurile care redau atitudinea contemporanilor; data apariției (1 mai 1881) e dintr-un rezumat de căutare.
- **Maiorescu:** 4.3 numește mediocritățile „a doua idee”, dar textul le pune primele („prima greșeală”) și numește „Al doilea adevăr, și cel mai însemnat” forma fără fond.
- **Plumb:** „îi atârnau” în ghilimele vs. text „Și-i atârnau”; „plumb” „de șase ori, în fiecare strofă” e ambiguu (3 per strofă); fișa numește „repetate” cuvintele „cavou/frig/vânt” care apar o dată.
- **Ultima noapte:** 5.4 repetă din Wikipedia că „prima parte e ficțiune pentru că autorul nu era căsătorit” – afirmație biografică neverificată, ușor de reluat în eseu ca fapt.
- **Baltagul:** exercițiul `baltagul-mc-cautare` introduce un nume (Balmez) și un rol („conduce formal ancheta”) absente din lecție.
- **Iona:** `iona-ra-pesti` acceptă prepoziția „peste”.
- **Moromeții:** distractori slabi în `morometii-mc-programa`.
- **Teme meta:** mai multe exerciții de tip adevărat/fals verifică doar disclaimerul lecției („Lecția conține citate…”). Nu verifică cunoștințe literare; sunt marcate META în tabele.
- **Interactiv („O noapte furtunoasă”):** fapt-piesa pentru „intră în casa greșită”, vezi C2.

---

## 5. Pe operă: ce este confirmat, ce nu

Pentru fiecare operă: sursa, ce este (1) confirmat pe text, ce este (2)–(5), problemele (cu trimitere la §2–4) și dacă merită păstrată în starea actuală.

### 5.1. Lecțiile noi, redactate pe text integral

#### „O scrisoare pierdută” (Caragiale) — sursă: transcriere Wikisource (rev. 106053), citită integral
- **(1) Confirmat:** structura (4 acte, 9/14/7/14 scene), personajele, replicile citate, atribuirile de scenă și acte, traseul scrisorii (batista I,5; cetățeanul de două ori; pălăria albă IV,8), povestea lui Dandanache (pardesiu, IV,3), condiția lui Zoe (IV,9).
- **(2):** data premierei (13 noiembrie 1884) din Wikipedia; lecția evită datele contradictorii.
- **Probleme:** C4; explicația `scrisoare-mc-pret`; „comic de nume” etc. = clasificare convențională.
- **Programă/recomandare:** programa cere „specii dramatice: comedia, drama” (p. 4); **nu numește piesa**; niciun subiect 2026 nu cere text dramatic. Planul de eseu e recomandare (lecția o spune).
- **Verdict:** păstrabilă după corectarea C4; necesită validare de profesor pentru încadrare (realism/clasicism) – lecția lasă alegerea manualului.

#### „Plumb” (Bacovia) — sursă: ediție digitizată (OCR)
- **(1):** textul celor opt versuri, rima îmbrățișată, de 6 ori „plumb”, numărul strofelor; citatele din *Însemnări autobiografice*, anul 1916.
- **Probleme:** C3, I7, minore.
- **Programă:** Varianta 6 (real/tehnologic) cere un text de Bacovia; citatul cerinței verificat în PDF-ul subiectului.
- **Verdict:** foarte utilă după corectarea C3; interpretările (simbol, tema) trebuie validate.

#### „Luceafărul” (Eminescu) — Wikisource rev. 148561
- **(1):** 98 de strofe/392 de versuri; secțiunile 7/17/19/21/21/13 (recalculate); personajele, dialogurile, „Părinte/Doamne/Hyperion”, absența cuvântului „Demiurg”, „Dar moartea nu se poate…”, finalul.
- **(2):** apariția 1883, basmul-sursă, măsura versului (7–8 silabe) – declarate secundare.
- **(5):** împărțirea în patru tablouri (convenție + asteriscuri din transcriere).
- **Verdict:** bună; probleme minore (Lu1–Lu3).

#### „Scrisoarea III” (Eminescu) — Wikisource rev. 138737
- **(1):** 285 de rânduri; dialogul Mircea–Baiazid; biletul; satira; „Apollo”, „Țepeș”.
- **(2):** data apariției; împărțirea în patru părți e a manualelor.
- **Probleme:** C1; minore.
- **Observație pozitivă:** lecția evită reproducerea formulărilor etnice jignitoare și spune de ce.
- **Verdict:** bună după corectarea C1.

#### „O noapte furtunoasă” (Caragiale) — Wikisource rev. 152604
- **(1):** 2 acte × 9 scene; replici („Rezon!”, „Angel radios!”, „11:20”), legătura de gât, bastonul, bacșișul lui Spiridon.
- **Probleme:** C2, C5, I6; identificarea „bagabont = Rică” e inferență (ochelari + giuben), cat. (3).
- **Verdict:** păstrabilă după corectarea C2, C5, I6; relevanță redusă pentru subiectele 2026 (text dramatic).

#### Maiorescu, „În contra direcției de astăzi în cultura română” — Wikisource rev. 122403, citit integral
- **(1):** teza („neadevărul”), exemplele (1812, 1825, 1840), „singura clasă reală”, ultima frază, revistele Transilvania și Familia.
- **Probleme:** minoră (ordinea „ideilor”); I10.
- **Programă:** „criticismul junimist” (3.2 b); competențele 4.1 și 4.3 (text critic) – verificate; niciun subiect 2026 nu cere text critic.
- **Verdict:** cea mai bine ancorată dintre lecțiile noi.

#### Lovinescu, „Sincronismul” (un fragment) — Wikisource, „Istoria literaturii române contemporane / Evoluția ideologiei literare”, secțiunea VI
- **(1):** citatele; 1906, 1923, 19 aprilie 1919, 1924–1925, 1929 (în lista de lucrări din notă); neconcordanța „volumul al VI-lea” vs. nota „5. Mutația valorilor estetice”.
- **(5):** ediția-sursă nu e indicată; paternitatea (Lovinescu) rezultă din antetul paginii.
- **Verdict:** corectă în ce susține; fragment unic; nu acoperă *Istoria civilizației…* și *Mutația…*.

### 5.2. Lecții bazate pe fragmente

#### „Testament” (Arghezi)
- **(1):** primele opt versuri (cu rimă împerecheată) și fragmentele din Parpală; „Testament” = primul text din *Cuvinte potrivite* (Parpală).
- **(2):** anul 1927; „estetica urâtului” (versul „Din bube, mucegaiuri și noroi / Iscat-am frumuseți” – doar în ghidul fără autor).
- **(5):** textul integral, strofele, prozodia, varianta „Nu-i/Nu-ți”.
- **Probleme:** I3, I8.

#### Blaga, „Eu nu strivesc corola de minuni a lumii”
- **(2):** toate: fragmente din ISJ Dolj, Frățean, Neca; „20 de versuri libere”, „trei secvențe”, „lumina mea – lumina altora” provin din fișa ISJ.
- **Probleme:** I3, I5.

#### Stănescu, „Leoaică tânără, iubirea”
- **(2):** patru versuri din Crișan 2020; încadrarea „neomodernism” e din articol; programa 2014 **nu folosește** cuvântul (verificat).
- **Probleme:** I3, I4.

### 5.3. Lecții fără text primar

#### „Baltagul”, „Ultima noapte de dragoste…”, „Iona”, „Moromeții” I
- Toate faptele sunt categoria (2). Lecțiile nu conțin citate din text (în afară de „Iona”: două fraze din prefață, prin articol; și „Moromeții”: cinci citate din fișă).
- **Relevanță pentru examen:** Baltagul (Varianta 5), Ultima noapte (Varianta 4), Moromeții (Varianta 5) sunt între autorii numiți în subiectele 2026; Iona e un exemplu de „text dramatic postbelic” cerut de programă.
- Lecția „Moromeții” semnalează corect că volumul I (1955) nu intră în „1960–1980”.
- **Verdict:** nu recomand consultarea lor ca unică sursă; fiecare necesită text integral și validare.

### 5.4. Cele cinci lecții inițiale

- Ion, Moara cu noroc, Povestea lui Harap-Alb, Alexandru Lăpușneanul, Enigma Otiliei: verificate în ediții/transcrieri în auditurile din `docs/rapoarte/`.
- La citirea exercițiilor din acest audit nu am găsit erori; am verificat pe Wikisource doar structura în capitole a lui „Ion” (partea I = capitolele I–VI, confirmat).
- **Nu am recitit** lecțiile Moara cu noroc, Harap-Alb, Lăpușneanul, Enigma; nu pot garanta că auditurile anterioare au acoperit tot ce ar găsi o recitire.
- Rămân valabile limitele din rapoartele existente (de ex. „Ion”, runda 2, §7: programele 2014 nesalvate local; citatele verificate doar pe transcriere).

---

## 6. Exercițiile, unul câte unul

Legendă: **OK** = un singur răspuns justificabil, explicație consecventă, distractori falși. **OK\*** = corect, cu observație de formulare. **REVIZUIRE** = enunț, cheie sau explicație de corectat. **NEVERIF.** = cheia depinde de o sursă secundară. **META** = testează disclaimerul lecției. **OK pe fragment** = verificat doar pe fragmentele existente. **OK (audit anterior)** = fără contradicții la citirea din acest audit; verificarea primară este în rapoartele anterioare.

Verificările standard făcute pe fiecare grilă: răspunsul unic, falsitatea distractorilor, consecvența explicației cu textul-sursă, ancora către lecție, absența unui răspuns alternativ justificabil.

### 6.1. Rezumat pe seturi

| Set | Total | REVIZUIRE | OK* | NEVERIF. | META |
|---|---|---|---|---|---|
| O scrisoare pierdută | 15 | 1 | 3 | 0 | 0 |
| Plumb | 14 | 1 | 2 | 0 | 0 |
| Testament | 13 | 2 | 2 | 0 | 1 |
| Luceafărul | 15 | 0 | 3 | 0 | 0 |
| Scrisoarea III | 13 | 0 | 2 | 0 | 0 |
| O noapte furtunoasă | 15 | 2 | 1 | 0 | 1 |
| Maiorescu | 13 | 0 | 0 | 0 | 1 |
| Baltagul | 14 | 0 | 2 | 10 | 2 |
| Blaga | 14 | 0 | 1 | 0 | 2 |
| Ultima noapte | 14 | 0 | 0 | 10 | 2 |
| Iona | 14 | 0 | 2 | 9 | 1 |
| Leoaică tânără | 13 | 1 | 0 | 0 | 1 |
| Lovinescu | 12 | 0 | 1 | 0 | 1 |
| Moromeții | 15 | 0 | 2 | 11 | 2 |
| Ion | 12 | 0 | 0 | 0 | 0 |
| Moara cu noroc | 12 | 0 | 0 | 0 | 0 |
| Harap-Alb | 16 | 0 | 0 | 0 | 0 |
| Lăpușneanul | 16 | 0 | 0 | 0 | 0 |
| Enigma Otiliei | 16 | 0 | 0 | 0 | 0 |
| **Total** | **266** | **7** | **21** | **40** | **14** |

(„NEVERIF.” include și exercițiile de autoevaluare din seturile bazate pe surse secundare.)

### 6.2. Exercițiile de revizuit (rezumat al propunerilor)

1. `scrisoare-mc-poliza` – reformulare: „Ce face Trahanache cu polița în actul III?” sau mutare în IV,6 (Zoe).
2. `plumb-ra-imagine` – criteriul 1 și modelul: „se aude vântul; coroanele scârțâie”, fără legătură cauzală dată ca fapt.
3. `testament-mc-seara`, `testament-af-scara` – marcare ca „extra” sau eliminare.
4. `noapte-mc-numar` – „Ce explicație dă Rică (și acceptă Dumitrache) pentru prezența lui în casă?”.
5. `noapte-ra-final` – „ultima replică a lui Dumitrache”.
6. `leoaica-mc-repetitie` – eliminare a numerotării versurilor până la verificarea așezării în ediție.

### 6.3. Tabele pe exercițiu


#### „O scrisoare pierdută” — 15 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `scrisoare-mc-pierde` | multiple-choice | OK* | Răspunsul b e susținut de I,5 („poate să fi scos batista… mi-a căzut”); pierderea e o presupunere a personajului. |
| `scrisoare-mc-specia` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-mc-formula` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-mc-pret` | multiple-choice | OK* | Răspunsul b e corect; explicația atribuie banii „unei replici a lui Pristanda”, dar „cu orice preț” e replica Zoei (I,5). Corectare de formulare. |
| `scrisoare-mc-poliza` | multiple-choice | REVIZUIRE | Premisa „amenință în actul III” nu e în text: polița apare în III,4 (Trahanache o dă lui Tipătescu) și e folosită de Zoe în IV,6. Reformulare. |
| `scrisoare-mc-dandanache` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-mc-palarie` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-mc-comic` | multiple-choice | OK* | Tipurile de comic sunt convenție de analiză (lecția o spune). |
| `scrisoare-af-acte` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-af-cetatean` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-af-zoe` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-af-trahanache` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-ra-acte` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoare-ra-farfuridi` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Plumb” — 14 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `plumb-mc-strofe` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-mc-rima` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-mc-simbol` | multiple-choice | OK* | Explicația (cavou/vânt/frig o dată) e corectă; fișa lecției le numește „elemente repetate” – inconsecvență. |
| `plumb-mc-persoana` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-mc-aripi` | multiple-choice | OK* | Încadrarea figurii e interpretare; lecția o prezintă la „Despre poezie”. |
| `plumb-mc-curent` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-mc-aer` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-mc-tema` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-af-volum` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-af-dialog` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-af-vasiliu` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-af-cavou` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-ra-repetitii` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `plumb-ra-imagine` | short-answer | REVIZUIRE | Criteriul 1 și modelul dau „vântul mișcă coroanele” ca fapt; versul spune doar „era vânt” și „scârțâiau coroanele”. |

#### „Testament” — 13 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `testament-mc-specia` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-mc-lasa` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-mc-adresant` | multiple-choice | OK* | „fiule” poate fi citit și figurat (urmaș/cititor); varianta c nu e total exclusă. |
| `testament-mc-sapa` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-mc-rima` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-mc-seara` | multiple-choice | REVIZUIRE | Testează conjectura unui articol (Funeriu), nu o cerință; risc de a sugera că textul din manual e greșit. De marcat ca extra sau eliminat. |
| `testament-mc-interpretare` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-mc-robul` | multiple-choice | OK* | Lectura „Domnul = cititorul” e susținută de Parpală; alte lecturi nu sunt menționate. |
| `testament-af-volum` | true-false | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-af-integral` | true-false | META | Testează disclaimerul lecției. |
| `testament-af-scara` | true-false | REVIZUIRE | Idem testament-mc-seara. |
| `testament-ra-volum` | short-answer | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `testament-ra-imagine` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Luceafărul” — 15 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `luceafar-mc-refuz` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-strofe` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-oximoron` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-cerere` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-catalin` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-final` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-tablou` | multiple-choice | OK* | Depinde de împărțirea în tablouri din lecție (precizată în enunț). |
| `luceafar-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-mc-antiteza` | multiple-choice | OK* | „Cel mai clar”: varianta a (odată/niciodată) e citită uneori ca antiteză; b rămâne cea mai bună pentru „cele două lumi”. Explicația „comparație sau metaforă” e vagă. |
| `luceafar-af-catalina` | true-false | OK* | Identificarea fata de împărat = Cătălina e convenție școlară, nu enunț explicit în text. |
| `luceafar-af-demiurg` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-af-fuga` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-af-moarte` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-ra-versuri` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `luceafar-ra-imagine` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Scrisoarea III” — 13 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `scrisoarea3-mc-vis` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-rima` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-tepes` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-mircea` | multiple-choice | OK* | „Gloria” e parafrază pentru „Laurii…” din text. |
| `scrisoarea3-mc-bilet` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-antiteza` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-mc-apostrofa` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-af-dialog` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-af-bilet` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-af-strofe` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-ra-apar` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `scrisoarea3-ra-satira` | short-answer | OK* | Modelul citează „saltimbancilor și irozilor”; forma din text: „saltimbancii și irozii”. |

#### „O noapte furtunoasă” — 15 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `noapte-mc-acte` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-bagabont` | multiple-choice | OK* | Identificarea bagabont = Rică e inferență (ochelari + giuben); textul nu o spune explicit. |
| `noapte-mc-rezon` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-numar` | multiple-choice | REVIZUIRE | Enunțul presupune că Rică „a intrat în casa greșită”; în text, explicația e un pretext (Zița îl invitase; Spiridon îi arătase casa). |
| `noapte-mc-fuga` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-gazeta` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-legatura` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-mc-comic` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-af-noapte` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-af-arest` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-af-adevar` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-af-chiriac` | true-false | META | Testează statutul unei etichete interpretative din lecție. |
| `noapte-ra-ziar` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `noapte-ra-final` | short-answer | REVIZUIRE | „Ultima replică a piesei” nu e „Uite așa se orbește…”; ultima e „Rezon!” a lui Ipingescu. Corect: „ultima replică a lui Dumitrache”. |

#### Maiorescu, „În contra direcției…” — 13 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `maiorescu-mc-revista` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-viciu` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-proverb` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-exemple` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-enumerare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-taran` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-mc-concluzie` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-af-an` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-af-programa` | true-false | OK | Verificat: niciun subiect 2026 nu cere text critic. |
| `maiorescu-af-junime` | true-false | META | Testează formularea prudentă din lecție. |
| `maiorescu-ra-teza` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `maiorescu-ra-comentariu` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Baltagul” — 14 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `baltagul-mc-capitole` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-mc-cautare` | multiple-choice | OK* | Explicația introduce „subprefectul Anastase Balmez… conduce formal ancheta”, absent din lecție; neverificabil. |
| `baltagul-mc-lupu` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-mc-traseu` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-mc-suha` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-mc-praznic` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-mc-miorita` | multiple-choice | OK* | Distractorul c („cere ajutorul unui mag”) e parțial adevărat în roman (baba Maranda) – distractor slab. |
| `baltagul-mc-interpretare` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-af-an` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-af-citate` | true-false | META | Testează disclaimerul lecției. |
| `baltagul-af-prefect` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-af-perspectiva` | true-false | META | Testează disclaimerul lecției. |
| `baltagul-ra-caine` | short-answer | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `baltagul-ra-secventa` | short-answer | NEVERIF. (autoevaluare) | Criteriile repetă fapte din sursa secundară; nu se corectează automat. |

#### Blaga, „Eu nu strivesc…” — 14 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `blaga-mc-specia` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-titlu` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-volum` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-negatie` | multiple-choice | OK* | Frățean listează trei negații; fișa ISJ pune în prima secvență doar „nu strivesc, nu ucid”, iar lecția 4.1 le pune pe toate trei în „prima parte”. |
| `blaga-mc-luna` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-final` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-interpretare` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-mc-tema` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-af-integral` | true-false | META | Testează disclaimerul lecției. |
| `blaga-af-opozitie` | true-false | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-af-rima` | true-false | META | Testează disclaimerul lecției. |
| `blaga-af-pozitie` | true-false | OK | Corect și bine construit (termeni din filosofia lui Blaga, nu din poezie). |
| `blaga-ra-volum` | short-answer | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `blaga-ra-imagine` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Ultima noapte de dragoste…” — 14 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `ultima-mc-parti` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-narator` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-fabrica` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-anisoara` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-razboi` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-ela` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-mc-tip` | multiple-choice | OK | Verificat în programa 2014 (3.2 c). |
| `ultima-mc-interpretare` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-af-an` | true-false | META | Testează disclaimerul lecției. |
| `ultima-af-barem` | true-false | OK | Verificat pe Varianta 4, p. 2. |
| `ultima-af-final` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-af-modern` | true-false | META | Testează descrierea sursei secundare. |
| `ultima-ra-narator` | short-answer | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `ultima-ra-secventa` | short-answer | NEVERIF. (autoevaluare) | Criteriile repetă fapte din sursa secundară; nu se corectează automat. |

#### „Iona” — 14 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `iona-mc-tablouri` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-mc-inceput` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-mc-ecou` | multiple-choice | OK* | Premisa „și-a pierdut ecoul” provine din articol; neverificat pe text. |
| `iona-mc-acvariu` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-mc-peste` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-mc-final` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-mc-programa` | multiple-choice | OK | Programa 2014 conține „un text dramatic postbelic” (2.3). |
| `iona-mc-interpretare` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-af-citate` | true-false | META | Testează disclaimerul lecției. |
| `iona-af-barem` | true-false | OK | Verificat: niciun subiect 2026 din proiect nu cere text dramatic. |
| `iona-af-mama` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-af-final` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `iona-ra-pesti` | short-answer | OK* | Grupul de cuvinte-cheie acceptă și prepoziția „peste” (fals-pozitiv). |
| `iona-ra-secventa` | short-answer | NEVERIF. (autoevaluare) | Criteriile repetă fapte din sursa secundară; nu se corectează automat. |

#### „Leoaică tânără, iubirea” — 13 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `leoaica-mc-metafora` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-mc-persoana` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-mc-repetitie` | multiple-choice | REVIZUIRE | Numerotarea „versurile 1, 3 și 4” depinde de așezarea în versuri; articolul citează patru segmente separate prin „/”, edițiile pot avea versuri mai scurte. |
| `leoaica-mc-pandise` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-mc-metafora-fel` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-mc-programa` | multiple-choice | OK | Verificat în programa 2014 (3.2 d). |
| `leoaica-mc-interpretare` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-mc-tema` | multiple-choice | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-af-integral` | true-false | META | Testează disclaimerul lecției. |
| `leoaica-af-titlu` | true-false | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-af-termen` | true-false | OK | Verificat: „neomodernism” nu apare în programa 2014. |
| `leoaica-ra-animal` | short-answer | OK pe fragment | Verificat doar pe fragmentele disponibile (vezi secțiunea operei). |
| `leoaica-ra-imagine` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### Lovinescu, „Sincronismul” — 12 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `sincronism-mc-definitie` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-mc-sburatorul` | multiple-choice | OK* | Corect (19 aprilie 1919), dar valoare didactică redusă (dată). |
| `sincronism-mc-formula` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-mc-avangarda` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-mc-teoretic` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-mc-final` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-mc-interpretare` | multiple-choice | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-af-programa` | true-false | OK | Verificat: niciun subiect 2026 nu cere text critic. |
| `sincronism-af-mutatia` | true-false | META | Testează disclaimerul lecției. |
| `sincronism-af-volum` | true-false | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-ra-concept` | short-answer | OK | Răspuns unic justificabil; explicație consecventă cu textul-sursă; distractori falși. |
| `sincronism-ra-comentariu` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Moromeții” I — 15 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `morometii-mc-ani` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-cina` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-satul` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-poiana` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-salcam` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-fuga` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-niculae` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-mc-programa` | multiple-choice | OK* | Răspunsul a e corect; distractorii c, d slabi („1990”). |
| `morometii-mc-interpretare` | multiple-choice | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-af-citate` | true-false | META | Testează disclaimerul lecției. |
| `morometii-af-structura` | true-false | OK* | „Trei părți” provine din fișa unui profesor; Wikipedia nu descrie împărțirea. |
| `morometii-af-fii` | true-false | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-af-perspectiva` | true-false | META | Testează disclaimerul lecției. |
| `morometii-ra-protagonist` | short-answer | NEVERIF. | Cheia depinde de o sursă secundară; lecția o declară. Nu pot confirma pe text. |
| `morometii-ra-secventa` | short-answer | NEVERIF. (autoevaluare) | Criteriile repetă fapte din sursa secundară; nu se corectează automat. |

#### „Ion” — 12 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `ion-mc-context` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-mc-conflict-interior` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-mc-hora-motiv` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-mc-caracterizare-directa` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-mc-narator` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-af-pamant-dupa-nunta` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-af-sarutarea` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-af-fapt-sau-interpretare` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-af-final` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-ra-partile-romanului` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-ra-stil-indirect-liber` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `ion-ra-interpretare-sarutare` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Moara cu noroc” — 12 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `moara-mc-intriga` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-moartea-lui-ghita` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-af-copiii` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-titlu` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-dovada` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-ana-despre-ghita` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-ordine` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-pintea` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-mc-stil-indirect-liber` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-af-fapt-sau-interpretare` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-ra-batrana` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `moara-ra-secventa-pastelui` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Povestea lui Harap-Alb” — 16 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `harap-mc-numele` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-basm-cult` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-af-spanul-moare` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-ordinea` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-casa-arama` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-fantastic-umanizat` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-formula-mediana` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-af-rau-necesar` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-bunatate` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-titlul` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-caracterizare` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-conflict-interior` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-mc-narator` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-af-invierea` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-ra-aripa` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `harap-ra-comentariu-fantana` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Alexandru Lăpușneanul” — 16 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `lapusneanul-mc-motto-boieri` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-aparitie` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-af-motoc-ospat` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-leac` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-ordinea` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-culoare` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-prosti-multi` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-caracterizare` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-af-narator` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-af-motto-iv` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-otrava` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-tema` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-note-cronica` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-mc-ruxanda` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-ra-boieri` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `lapusneanul-ra-comentariu-biserica` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

#### „Enigma Otiliei” — 16 exerciții

| Id | Tip | Verdict | Observație |
|---|---|---|---|
| `otilia-mc-felix-origine` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-aparitie` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-af-casatorie` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-furt` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-suma` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-incipit` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-enigma` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-af-structura` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-perspectiva` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-tip` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-caracterizare` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-af-adoptie` | true-false | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-balzac` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-mc-felix-final` | multiple-choice | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-ra-strada` | short-answer | OK (audit anterior) | Verificat în ediții/transcrieri în auditurile anterioare; la citirea din acest audit nu am găsit contradicții. |
| `otilia-ra-comentariu-final` | short-answer | OK (autoevaluare) | Criterii verificabile; nu se corectează automat. |

---

## 7. Pași de rezolvare (în ordinea priorității)

1. **Corectează C1–C5** (câte o frază sau un enunț fiecare) și actualizează figurile interactive care repetă C2. Ele sunt erori față de textul-sursă, nu chestiuni de interpretare.
2. **Obține textele integrale** pentru Testament, Blaga, Stănescu, Baltagul, Ultima noapte, Iona, Moromeții (ediții în bibliotecă sau de la profesor) și refă secțiunile de compoziție (strofe, rimă, incipit, final, perspectivă) și citatele pe ediție.
3. **Elimină sau verifică** citatele din Moromeții până la confruntarea cu o ediție.
4. **Reface exercițiile marcate REVIZUIRE** (§6.2); decide dacă exercițiile despre conjectura „scara/seara” rămân ca extra.
5. **Recuperează programa 2014** (ambele variante) în `references/bac-romana/local/` sau în alt loc urmărit și recitește varianta pentru profilul real; apoi recitește citatele din programă din lecțiile Variantelor 4–6.
6. **Corectează citatele din programă** care omit „în textele narative” (I9) și stabilește dacă lecțiile pentru Maiorescu/Lovinescu trebuie să menționeze că nu sunt în canonul 2030 (I10).
7. **Un profesor** validează interpretările, încadrările și clasificările de figuri (Plumb, Luceafărul, comic) înainte de orice schimbare de status.
8. **Decizie editorială:** păstrarea lecțiilor pentru texte dramatice/critice având în vedere că subiectele 2026 din proiect nu le cer; mențiunea numelui unui profesor în Surse (Moromeții).
9. **Ulterior (tehnic):** grading mai strict pentru răspunsurile scurte (negații, mai multe numere).

## 8. Ce se poate păstra și ce cere validare

- **Se poate păstra ca material de studiu în stadiu draft** (după corectările C1–C5): Scrisoarea pierdută, Plumb, Luceafărul, Scrisoarea III, O noapte furtunoasă, Maiorescu, Lovinescu, cele cinci lecții inițiale.
- **Trebuie însoțite de text integral înainte de folosire serioasă:** Testament, Blaga, Stănescu, Baltagul, Ultima noapte, Iona, Moromeții.
- **Cer validare de profesor:** toate interpretările, încadrările (realism/clasicism, simbolism, neomodernism, tradiționalism), clasificările de figuri de stil și tipuri de comic, planurile de eseu pentru text dramatic/critic (fără barem oficial în proiect).
- Statusul rămâne `draft-neverificat` pentru toate cele 19 lecții.
