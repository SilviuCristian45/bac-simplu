# Audit: „Alexandru Lăpușneanul” de Costache Negruzzi (surse, plan și conținut literar)

- **Lecție auditată:** `content/romana/opere/alexandru-lapusneanul.mdx`, cu textele figurilor din `content/romana/opere/alexandru-lapusneanul-interactiv.ts`.
- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Nu este o validare făcută de un profesor.
- **Statusul lecției:** `draft-neverificat`.

Raportul separă: **[T]** verificat direct în textul nuvelei; **[S]** confirmat de o sursă identificată; **[I]** interpretare literară argumentată (marcată „Interpretare” în lecție); **[?]** incert sau neconfirmat (exclus sau marcat).

---

## 0. Constatarea principală: statutul operei la examen

| Afirmație | Tip | Sursă |
|---|---|---|
| Programa aplicabilă BAC 2026–2027 (Anexa nr. 2 la OMEN nr. 4.923/2013) are 17 autori canonici; **Costache Negruzzi nu este printre ei** | [S] | Programa 2014, p. 6, ambele variante (real/tehnologic și umanist/pedagogic), recitite pe 26.10.2026 |
| Programa conține „specii epice: basm cult, nuvelă, roman” (p. 4), „perioada pașoptistă” și romantismul (p. 5); „textele literare la prima vedere pot aparține atât autorilor canonici, cât și altor autori studiați” (p. 6) | [S] | idem |
| Nicio variantă 2026 din proiect nu numește Negruzzi și nu cere nuvela istorică/romantică | [S] | Căutare în textul extras din toate cele 19 PDF-uri `E_a_*` și `subiect-*` („negruzzi”, „nuvel”, „romant”, „istoric”) + citirea Subiectului al III-lea din fiecare variantă |
| Varianta 3 (real/tehnologic) are o cerință formulată doar prin specie („un basm cult studiat”); Modelul uman/pedagogic, doar prin perioadă („un roman scris după 1980”); secțiile maghiare (Var. 6) cer „un autor din patrimoniul cultural școlar” | [S] | Subiectele respective, p. 2 |
| Programa 2030 cere „nuvela romantică (text integral)” la romantismul pașoptist, fără să numească textul; Negruzzi nu e în lista autorilor canonici 2030 | [S] | `Programa-Bac-2030-Romana-1.pdf`, MO p. 8 (și p. 16–17, programa P2), lista p. 28 |

**Consecință pentru lecție:** „Alexandru Lăpușneanul” nu poate fi folosit la o cerință care numește un autor canonic. Poate fi folosit la o cerință formulată prin specie sau curent, dacă formularea o permite, și poate apărea ca text la prima vedere. Lecția se prezintă drept „Material suplimentar” chiar în antet (nota adăugată la verificarea finală), explică situația în secțiunea 1 și repetă avertismentul în 8.5 și în nota planului de eseu. **Decizia de a o publica rămâne a proprietarului proiectului**; o semnalez pentru că diferă de cele trei opere existente, toate de autori canonici.

---

## 1. Surse consultate

### 1.1. Documente oficiale

| Sursă | Ce confirmă | Pagină |
|---|---|---|
| Programa 2014 (Anexa nr. 2 la OMEN nr. 4.923/29.08.2013), copiile edupedu.ro (real/tehnologic) și ISJ Vaslui (umanist), descărcate pe 26.10.2026 și salvate în `references/bac-romana/local/` (SHA-256 în §6) | Vezi §0 | p. 4–6 |
| `E_a_romana_real_tehn_2026_var_04.pdf` și `..._bar_04.pdf` | Reperele și punctajul cerinței despre particularitățile textului narativ; redactarea (12 puncte) | p. 2 |
| `E_a_romana_real_tehn_2026_var_model.pdf`, `..._bar_model.pdf`, `..._var_03.pdf`, `..._bar_03.pdf` | Reperele cerinței despre construcția personajului; exemplul de cerință formulată prin specie | p. 2 |
| `E_a_romana_uman_ped_2026_var_model.pdf`, `E_a_romana_pentru_minoritatea_maghiara_var_06_*` | Formulări prin perioadă / „patrimoniul cultural școlar” | p. 2 |
| `Programa-Bac-2030-Romana-1.pdf` | Nuvela romantică, „Introducție la Dacia literară”, lista autorilor canonici | MO p. 8, 28 |

**Notă:** edupedu.ro răspundea cu HTTP 403 la 26.10.2026 în catalogul surselor (`references/bac-romana/README.md`, §2.1); la descărcarea din această sesiune (cu un antet de browser) a răspuns cu 200. Copia este tot o copie de presă, nu sursa primară.

### 1.2. Textul nuvelei: două ediții confruntate

| Ediție | Identificare | Folosire |
|---|---|---|
| **A. Wikisource** | ro.wikisource.org, pagina „Alexandru Lăpușneanul” (titlul din antet: „Alexandru Lăpușneanu”), revizia 115307 (28.01.2019), descărcată prin API pe 26.10.2026. Ortografie cu „î” și „sînt”. Nota paginii: „Dacia literară, tom I, ianuarie—iunie, 1840; vol. Păcatele tinerețelor, 1857”. **Nu indică ediția după care s-a transcris.** | Lectura integrală; textul citatelor |
| **B. BPT 1982** | Constantin Negruzzi, *Păcatele tinerețelor*, „Biblioteca pentru toți” nr. 1137, Minerva, 1982, ed. îngrijită de Liviu Leonte, prefață și tabel cronologic de Elvira Sorohan; XLI + 366 p. Internet Archive, identificator `pacatele-tineretelor`, text OCR (`_djvu.txt`). Licența afișată pe Archive: CC BY-NC-ND 4.0, declarată de cel care a încărcat fișierul (neverificată față de deținători). | Confruntarea citatelor; date de publicare; observațiile prefeței despre sursa istorică |

**Metodă:** scriptul `references/bac-romana/local/alexandru-lapusneanul/check_quotes.py` extrage toate secvențele „…” din lecție, din figuri și din exerciții (132 de segmente unice de peste 12 caractere, după separarea omisiunilor „[…]”), le normalizează (fără diacritice, â/î → i, „sunt” → „sînt”, fără trimiterile [n] la note) și le caută exact în A și aproximativ în B (difflib).

**Rezultat:**

- **Citatele din nuvelă: 101 din 101 găsite exact în A.**
- **În B:** 91 au potrivire ≥ 0,85. Celelalte 10 au fost găsite manual în OCR: diferențele vin din despărțirea în silabe la capăt de rând, din erori OCR („ureceşti” pentru „greceşti”, „vos” pentru „voi”) și din două **variante reale între ediții** (vezi §3).
- Un citat din „Introducție” la *Dacia literară* a fost găsit exact în Wikisource (rev. 135602).
- **Cele 30 de segmente negăsite** în A nu sunt citate din nuvelă: 18 citate din documente oficiale (verificate separat în textul extras din PDF-uri, toate găsite), titluri („Biblioteca pentru toți”, „Convorbiri literare”, „Novele din popor”, „Scene istorice din cronicele Moldaviei” – găsit în B), sintagme ale lecției („calcul politic”, „simbolizează”, „o nuvelă studiată”) și modelele de redactare.

**Greșeli prinse și corectate de verificare (înainte de publicare):** „în loc să muște” → „mușce”; „de întâia lui domnie” → „întăia”; „de poimâine… și mâine” → „poimâne… mâne”; „strice pre boieri” → „a nu mai strica pre boieri”; „hidra acestei cu multe capete” → „idrei acestei cu multe capete”; „Iacob Eraclid” → „Iacov”; „înarmat din cap până în picioare” (despre Lăpușneanul singur) → „înarmați” (el și Bogdan); „scânteiară” (formă din prefața B, nu din A) eliminat din ghilimele; sintagma „leacul de frică”, scrisă între ghilimele, nu apare în text (textul are „un leac de frică”) – titlul 5.3 și exercițiul au fost reformulate.

### 1.3. Alte surse

| Sursă | Statut | Ce folosim |
|---|---|---|
| Prefața Elvirei Sorohan (B), p. XXI–XXVI | Sursă critică și editorială, citită prin OCR | Publicarea în *Dacia literară*, nr. 1, 1840; volumul din 1857; observațiile despre cronică (vorbire indirectă → dialog, Stroici făcut personaj, Spancioc păstrat în viață, nota „Miron Costin” față de textul transcris de Nicolae Costin); discuția personaj static/dinamic. **Parafrazate, nu citate.** |
| Tabelul cronologic (B), p. XXXVI | Editorial | Ciclul „Scene istorice din cronicele Moldaviei” (1840) |
| M. Kogălniceanu, „Introducție” la *Dacia literară*, Wikisource rev. 135602 | Text primar, transcriere fără ediție-sursă indicată | Citatul despre „fapte eroice” (lecția, 3.2) |
| Internet Archive, fișa volumului `nuvele0000negr` („Negruzzi, Costache, 1808-1868”) și ro.wikipedia, „Constantin Negruzzi” (rev. 17986222) | Fișă de bibliotecă; enciclopedie | Anii 1808–1868 |
| `comentarii-opere-romana.pdf` | Comentariu școlar | **Nu are capitol despre această nuvelă** (Negruzzi e pomenit o singură dată, în context pașoptist). Nefolosit |

---

## 2. Afirmații verificate

### 2.1. Date despre operă

| Afirmație | Tip | Sursă |
|---|---|---|
| Apariție în *Dacia literară*, nr. 1, 1840; apoi în *Păcatele tinerețelor*, 1857 | [S] | Prefața B, p. XXI și nota de subsol; nota paginii A |
| Publicată în ciclul „Scene istorice din cronicele Moldaviei” | [S] | Tabelul cronologic B, p. XXXVI (o singură sursă) |
| Patru capitole numerotate, fiecare cu motto | [T] | A și B (motto-ul III nu se citește în OCR-ul B, §3) |
| Notele de subsol „Miron Costin” după trei replici; celelalte note explică cuvinte | [T] | A (marcate „n.a.”) și B (nota ediției: notele de subsol „aparţin în exclusivitate lui C. Negruzzi”) |
| Negruzzi 1808–1868 | [S] | Fișa Archive și ro.wikipedia (surse terțiare) |

### 2.2. Acțiune, personaje și citate [T]

Acțiunea din fișa rapidă, din harta capitolelor, din secvențele 5.2–5.4 și din toate figurile a fost confruntată cu textul A, citit integral. Puncte verificate cu atenție: cei patru boieri trimiși (Moțoc, Veveriță, Spancioc, Stroici); Moțoc **cruțat** în cap. I și **dat mulțimii** în cap. III (nu ucis la masă); primul lovit la ospăț este Veveriță, de buzduganul armașului; 47 de boieri (text: „47 la număr”, „Patruzeci și șepte de trupuri”, piramida); „leac de frică” promis în II și arătat în III; Spancioc și Stroici nu răspund în biserică și fug peste Nistru; patru ani între III și IV; Hotin; călugărirea și numele Paisie; otrava dată de Ruxanda, la îndemnul lui Spancioc („Iată un praf”), mitropolitul plecând înainte; Stroici și Spancioc îi toarnă restul otrăvii; ultima frază și mănăstirea Slatina.

### 2.3. Interpretări [I] (marcate „Interpretare” în lecție)

- încadrarea ca nuvelă istorică romantică și cele patru trăsături romantice;
- observația despre construcția echilibrată, „de tip clasic”;
- tema (putere prin teroare și pedeapsă) și formulările alternative;
- rolul motto-urilor; viziunea despre lume (nimeni nu e nevinovat);
- împărțirea pe momentele subiectului (simplificată pe capitole în figură);
- Lăpușneanul ca personaj static; trăsăturile (cruzime, disimulare, inteligență politică, răzbunare); Ruxanda construită prin antiteză; Moțoc ca tip al curteanului.

---

## 3. Diferențe între surse

| Problemă | Unde | Cum am tratat-o |
|---|---|---|
| „eu vă **vreau**” (A, în replica din cap. I) / „eu vă **vreu**” (B, în replică; ambele ediții în motto) | Cap. I | Lecția citează doar motto-ul („vreu”, identic în A și B) și continuarea replicii, care nu diferă |
| Motto IV „De mă voi **scula**” / replica din text „de mă voi **îndrepta**” | A și B | Nu e o eroare: diferență din text. Lecția o semnalează (4.3, 8.5) și are un exercițiu despre ea |
| „greșeală” (A) / „greșală” (B); „pîn-a nu muri” (A) / „păn-a nu muri” (B) | Cap. II, III | Lecția folosește forma din A; diferența este de formă, nu de sens |
| Motto-ul cap. III nu poate fi citit în OCR-ul B (pagină deteriorată) | B | Confirmat doar în A și în replicile din text („Capul lui Moțoc vrem!”, identic în A și B) **[?]** |
| A scrie uneori „Ruxandra”, „diuoasa”, „vror”, „deciț” | A | Greșeli de transcriere; pasajele nu sunt citate |
| Titlul: „Alexandru Lăpușneanul” (B, ultima frază în A și B) / „Alexandru Lăpușneanu” (antetul A, ediția Archive din 2007) | — | Lecția folosește prima formă și menționează varianta |
| B tipărește sub titlu niște ani pe care OCR-ul îi redă „1564-1639” | B, p. 92 | Ilizibil; probabil anii domniei. **Nefolosit [?]** |

---

## 4. Interpretări care cer prudență (pentru un profesor)

1. **Oportunitatea lecției pentru BAC 2026–2027** (vezi §0): opera nu este a unui autor canonic. Lecția o prezintă ca utilă pentru cerințe formulate prin specie/curent, pentru texte la prima vedere și pentru programa 2030; un profesor poate decide altfel.
2. **Încadrarea**: „nuvelă istorică romantică” este încadrarea aleasă; elementele clasice sunt menționate doar ca observație de structură. Unele manuale vorbesc și despre realism (scena mulțimii); lecția nu folosește această etichetă.
3. **Intriga și punctul culminant**: alternative menționate în 6.2; figura simplifică momentele pe capitole.
4. **Personaj static**: prefața B discută ambele lecturi; lecția alege „static” și menționează accentuarea obsesiilor.
5. **Ruxanda „mai ales mamă”**: interpretare, cu alternativă (presiunea boierilor) în quiz.
6. **Distincția istorie/ficțiune** se bazează pe o singură sursă critică (prefața B), neconfruntată cu cronicile.

---

## 5. Informații fără confirmare (excluse)

- „Prima nuvelă istorică din literatura română” – formulare frecventă în materialele școlare, neconfirmată într-o sursă critică consultată. **Exclusă.**
- Citatele critice din prefața B atribuite lui G. Călinescu („romantism pozitiv”) și lui T. Vianu – mediate; **necitate**.
- Anii domniilor lui Alexandru Lăpușneanu (apar în ro.wikipedia); nuvela nu îi dă, lecția nu îi folosește.
- Locul de apariție al revistei *Dacia literară* (Iași) – neconfirmat în sursele consultate; scos din fișa rapidă.

---

## 6. Plan de implementare (realizat)

1. **Documentare** (acest raport): programa aplicabilă, subiecte și bareme, două ediții ale textului, sursele critice disponibile. Fișierele de lucru sunt în `references/bac-romana/local/alexandru-lapusneanul/` (nu în Git):
   - `wikisource-rev115307.wikitext` – SHA-256 `756818a4…2d24`
   - `bpt1137-1982-ocr.txt` – SHA-256 `843581f3…ad61`
   - `wikisource-introductie-dacia-literara-rev135602.wikitext` – SHA-256 `a59bedee…3048`
   - `archive-meta-pacatele-tineretelor.json` (metadatele Archive)
   - `check_quotes.py` (scriptul de confruntare)
   - În `references/bac-romana/local/`: `Programa_Bac_2014_Lb_si_literatura_romana_profil_real.pdf` (SHA-256 `e65f4ab2…6367`) și `..._profil_uman.pdf` (`03487a38…e553`).
2. **Lecția** `alexandru-lapusneanul.mdx`, cu aceeași structură și aceleași etichete ca „Moara cu noroc” („Despre nuvelă”, „Interpretare”, „Cerință oficială”, „Recomandare”).
3. **Figuri** în `components/lesson/figures/alexandru-lapusneanul/`, **numai din componente comune** (nicio componentă nouă): harta capitolelor cu motto-uri (`ChapterMap`), quiz-uri (romantism, fapt/interpretare, glosarul notelor autorului, caracterizare), explorări (motto-urile, replicile tiranului), harta relațiilor, planul de eseu, autoevaluarea.
4. **Exerciții** (16) în `content/romana/exercitii/alexandru-lapusneanul.ts`; raport separat.
5. **Registre:** `romana-opere-slugs.ts`, `romana-opere.ts`, `lib/exercises/registry.ts`, lista din `grading.test.mjs`, scriptul `test:exercises`.
6. **Teste** `lib/exercises/alexandru-lapusneanul.test.mjs`; verificare în browser (raport separat).

---

## 7. Limitele documentării

- **Ediția-sursă a Wikisource nu este indicată**; compensat prin confruntarea cu B, citită prin OCR.
- **Nu am consultat** prima apariție (*Dacia literară*, 1840), volumul din 1857, o ediție critică sau cronicile (Ureche, M. Costin, N. Costin).
- Observațiile despre raportul cu cronica provin dintr-o singură prefață.
- Programa 2014 a fost citită din copii (presă, inspectorat), nu de pe edu.ro sau din Monitorul Oficial.
- **Nu a existat validare de către un profesor.**
