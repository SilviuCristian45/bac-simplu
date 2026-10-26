# Surse pentru Limba și literatura română – catalog

Acest fișier descrie sursele din `references/bac-romana/` și sursele folosite pentru lecțiile deja redactate („Ion”, „Moara cu noroc”, „Povestea lui Harap-Alb”, „Alexandru Lăpușneanul”, „Enigma Otiliei”).

- **Redactat:** 26 octombrie 2026, de Claude (asistent AI), pe baza fișierelor din proiect și a rapoartelor din `docs/rapoarte/`. Completat în aceeași zi cu sursele pentru „Alexandru Lăpușneanul” (secțiunile 2.1, 4, 5, 6.4, 7 și 9.3) și pentru „Enigma Otiliei” (secțiunile 4, 5, 6.5, 7.2 și 9.3).
- **Nu este o validare făcută de un profesor sau de un jurist.** Recomandările despre redistribuire (secțiunea 9) nu sunt opinii juridice.

**Legendă pentru coloana „Stare”:**

| Marcaj | Semnificație |
|---|---|
| **local** | Fișierul există pe disc și a fost deschis la redactarea catalogului (text extras cu `pdftotext`). Din 26.10.2026, toate PDF-urile se află în `references/bac-romana/local/` și nu mai sunt în Git (vezi 9.1). |
| **consultat (raport)** | Sursa externă a fost consultată efectiv, conform unui raport din `docs/rapoarte/`. Fișierul nu este în proiect. |
| **mediat** | Sursa nu a fost consultată direct; e cunoscută doar prin citarea ei în altă sursă. |
| **online 26.10.2026** | URL-ul a fost accesat la redactarea acestui catalog și a răspuns (HTTP 200). Asta confirmă doar că documentul este disponibil, nu și conținutul lui. |
| **neverificat** | Informația nu a putut fi confirmată. |

---

## Cuprins

1. [Scopul folderului](#1-scopul-folderului)
2. [Programa și documentele oficiale BAC](#2-programa-și-documentele-oficiale-bac)
3. [Subiecte și bareme](#3-subiecte-și-bareme)
4. [Textele literare și edițiile consultate](#4-textele-literare-și-edițiile-consultate)
5. [Comentarii și surse secundare](#5-comentarii-și-surse-secundare)
6. [Surse utilizate pentru fiecare operă](#6-surse-utilizate-pentru-fiecare-operă)
7. [Limitări și neconcordanțe](#7-limitări-și-neconcordanțe)
8. [Cum se adaugă surse pentru o operă nouă](#8-cum-se-adaugă-surse-pentru-o-operă-nouă)
9. [Politica Git și a materialelor locale](#9-politica-git-și-a-materialelor-locale)

---

## 1. Scopul folderului

`references/bac-romana/` conține materiale de **referință pentru dezvoltare și verificare**, nu conținut publicat pe site (vezi `CLAUDE.md`, §4).

> **Unde sunt PDF-urile:** din 26.10.2026, toate cele 22 de PDF-uri descrise mai jos se află în `references/bac-romana/local/`, folder exclus din Git, și au fost eliminate din istoricul Git (vezi 9.1). În tabele apar doar cu numele fișierului. Rapoartele din `docs/rapoarte/` folosesc în continuare vechile căi `references/bac-romana/<fișier>.pdf`.

Materialele descrise sunt:

- programe de examen (două documente);
- subiecte și bareme de bacalaureat 2026 (19 PDF-uri, dintre care unul este duplicat);
- o carte anonimă de comentarii școlare (`comentarii-opere-romana.pdf`);
- o notă de analiză internă (`analiza-ion.md`);
- subfolderul `local/`, ignorat de Git, pentru materiale care nu se publică (vezi 9.3).

Cum sunt folosite:

- **Documentele oficiale** stabilesc cerințele de examen citate în lecții (cu document și pagină).
- **Comentariul școlar** servește doar la confruntare: erorile lui sunt consemnate în rapoarte, iar formulările nu au fost copiate.
- **Textele operelor literare nu sunt în acest folder.** Ele au fost consultate online (Wikisource, Internet Archive); vezi secțiunea 4.
- Rapoartele de audit din `docs/rapoarte/` documentează ce s-a verificat efectiv. Acest catalog le rezumă și trimite la ele.

---

## 2. Programa și documentele oficiale BAC

### 2.1. Programa aplicabilă sesiunilor 2026 și 2027

Concluzia vine din `docs/rapoarte/audit-ion-2026-10-25-runda2.md`, §1. Ordinele anuale de organizare (art. 3 alin. (4)) trimit la **anexa nr. 2 la OMEN nr. 4.923/2013**. **Această programă nu se află în folder.**

| Document | Instituție / publicare | Unde | Stare |
|---|---|---|---|
| Programa de examen pentru disciplina Limba și literatura română (Bacalaureat 2014), Anexa nr. 2 la OMEN nr. 4.923/29.08.2013 – filiera teoretică, profil real; filiera tehnologică; filiera vocațională (fără profilul pedagogic) | Ministerul Educației Naționale | Copie edupedu.ro: <https://cdn.edupedu.ro/wp-content/uploads/2025/02/Programa_Bac_2014_Lb_si_literatura_romana_profil_real.pdf> | consultat (raport); **online 26.10.2026: HTTP 403** (serverul refuză accesul automat; documentul nu a putut fi redeschis) |
| Aceeași programă – profil umanist și profil pedagogic | Ministerul Educației Naționale | Copie ISJ Vaslui: <https://isj.vs.edu.ro/download/5.Programa_Bac_2014_Lb_si_literatura_romana_profil_uman.pdf> | consultat (raport); online 26.10.2026 (PDF) |
| Ordinul nr. 6.059/29.08.2025 privind organizarea și desfășurarea examenului național de bacalaureat – 2026 (MO nr. 821 din 5.09.2025) | Ministerul Educației și Cercetării | Copie: <https://eminescuoradea.ro/wp-content/uploads/2026/04/Ordin-6059_29.08.2025.pdf>; a doua copie: <https://colegiulcarmensylvatimisoara.ro/wp-content/uploads/2026/01/ORDIN-nr.-6059_organizarea-si-desfasurarea-examenului-de-bac.pdf> | consultat (raport); ambele copii online 26.10.2026 (PDF) |
| Ordinul nr. 5.211/27.08.2026 privind organizarea și desfășurarea examenului național de bacalaureat – 2027 (MO nr. 758 din 7.09.2026) | Ministerul Educației și Cercetării | Facsimil MO, copie edupedu.ro: <https://cdn.edupedu.ro/wp-content/uploads/2026/09/ORDIN-Nr.-5.211-2025-Calendar-Bacalaureat-2027-organizarea-si-sefasurarea-examnului-de-bacalaureat-2027-Monitorul-Oficial-Partea-I-nr.-758.pdf> | consultat (raport); **online 26.10.2026: HTTP 403** |
| Proiectul ordinului pentru BAC 2027 | Ministerul Educației și Cercetării (edu.ro) | <https://edu.ro/sites/default/files/2026-08/PO_organizare_bacalaureat_calendar_2027.pdf> | consultat (raport); online 26.10.2026 (PDF) |

**Copie locală (din 26.10.2026):** ambele variante ale programei 2014 au fost descărcate din copiile de mai sus și salvate în `references/bac-romana/local/` sub numele originale (`Programa_Bac_2014_Lb_si_literatura_romana_profil_real.pdf`, SHA-256 `e65f4ab2e85cd23ee609f539a0744bce0c03f9f64e9b577ee2a0775a3b136367`; `Programa_Bac_2014_Lb_si_literatura_romana_profil_uman.pdf`, SHA-256 `03487a380d9c862f479b07cb3f2d35c2622b271150a50d5cb9bbf025af19e553`). La descărcarea cu un antet de browser, edupedu.ro a răspuns cu 200. Lista autorilor canonici (p. 6) a fost recitită: 17 autori, fără Costache Negruzzi (vezi `docs/rapoarte/audit-alexandru-lapusneanul-2026-10-26.md`, §0).

**Limitări** (din raportul citat):

- ordinele au fost citite din copii găzduite de școli și de presă, nu direct de pe site-ul Monitorului Oficial sau al ministerului;
- programa pentru **2028–2029** nu este confirmată (ordinele nu sunt emise).

### 2.2. Documente oficiale din folder

| Fișier | Identificare (din antet) | Pagini PDF | Statut pentru proiect | Stare |
|---|---|---|---|---|
| `programa-Limba-Romana-Bac-2022.pdf` | Anexa nr. 2 la Ordinul ministrului educației nr. 3237/05.02.2021, „în anul școlar 2020–2021”. Conține două programe: real/tehnologic/vocațional (p. PDF 1–6) și umanist/pedagogic (p. PDF 7–12). | 12 | **Nu este programa aplicabilă BAC 2026–2027** (vezi 2.1). Numele fișierului („2022”) nu corespunde antetului. Păstrat ca document istoric. | local |
| `Programa-Bac-2030-Romana-1.pdf` | Programe de examen pentru disciplina Limba și literatura română, Examenul național de bacalaureat – 2030, Anexa nr. 2, Monitorul Oficial, Partea I, nr. 737 bis/2.IX.2026 (MO p. 4–28). Trei programe: LLRO_P1, LLRO_P2 (filologie), LLR_MAGH (secții maghiare), conform `analiza-ion.md`. | 25 | Se aplică de la sesiunea 2030. Citată în lecții pentru context. | local |

**Neidentificat:** URL-ul oficial de la care au fost descărcate cele două fișiere. Nu apare în proiect. **neverificat**

---

## 3. Subiecte și bareme

Toate fișierele de mai jos au antetul „Ministerul Educației și Cercetării, Centrul Național pentru Curriculum și Evaluare – Examenul național de bacalaureat 2026, Proba E. a)”. Conținutul relevant pentru Subiectul al III-lea este rezumat după `analiza-ion.md` (§1.2) și după rapoartele de operă.

### 3.1. Filiera teoretică – profil real; filiera tehnologică; filiera vocațională (fără profilul pedagogic)

| Varianta | Subiect | Barem | Relevanță pentru lecțiile existente |
|---|---|---|---|
| Model | `E_a_romana_real_tehn_2026_var_model.pdf` | `E_a_romana_real_tehn_2026_bar_model.pdf` | Sub. III: construcția unui personaj dintr-un text narativ de Ion Creangă → Harap-Alb; structura eseului → toate |
| Varianta 3 | `E_a_romana_real_tehn_2026_var_03.pdf` | `E_a_romana_real_tehn_2026_bar_03.pdf` | Sub. III: personaj într-un basm cult → Harap-Alb |
| Varianta 4 | `E_a_romana_real_tehn_2026_var_04.pdf` | `E_a_romana_real_tehn_2026_bar_04.pdf` | Sub. III: text narativ de Liviu Rebreanu sau Camil Petrescu → Ion |
| Varianta 5 | `E_a_romana_real_tehn_2026_var_05.pdf` | `E_a_romana_real_tehn_2026_bar_05.pdf` | Sub. III: Sadoveanu sau Preda; Slavici apare doar la Sub. I, cu un text nonliterar → Moara cu noroc (doar ca observație) |
| Varianta 6 | `E_a_romana_real_tehn_2026_var_06.pdf` | `E_a_romana_real_tehn_2026_bar_06.pdf` | Sub. II: fragment din *Jar* de Rebreanu; Sub. III: text poetic, Bacovia |
| (duplicat) | `subiect-bac-romana-2026-tehnologic.pdf` | – | **Identic cu `E_a_romana_real_tehn_2026_var_model.pdf`** (același hash MD5, verificat la 26.10.2026). Nu aduce informații noi. |

### 3.2. Filiera teoretică – profil umanist; filiera vocațională – profil pedagogic

| Varianta | Subiect | Barem | Relevanță |
|---|---|---|---|
| Model | `E_a_romana_uman_ped_2026_var_model.pdf` | `E_a_romana_uman_ped_2026_bar_model.pdf` | Sub. III: roman scris după 1980 (argument pentru programa 2014, vezi 2.1) |
| Varianta 6 | `E_a_romana_uman_ped_2026_var_06.pdf` | `E_a_romana_uman_ped_2026_bar_06.pdf` | Sub. II: același fragment din *Jar*; Sub. III: text poetic, Arghezi |

### 3.3. Școli și secții cu predare în limba maghiară

| Varianta | Subiect | Barem |
|---|---|---|
| Varianta 6, profil real / vocațional | `E_a_romana_pentru_minoritatea_maghiara_var_06_teoretic_real_2026.pdf` | `E_a_romana_pentru_minoritatea_maghiara_bar_06_teoretic_real_2026.pdf` |
| Varianta 6, profil umanist / pedagogic | `E_a_romana_pentru_minoritatea_maghiara_var_06_teoretic_umanist_2026.pdf` | `E_a_romana_pentru_minoritatea_maghiara_bar_06_teoretic_umanist_2026.pdf` |

Structura probei diferă: eseu de minimum 300 de cuvinte, 22 + 8 puncte (vezi `docs/rapoarte/audit-ion-2026-10-25.md`, §2.1).

### 3.4. Ce nu se știe despre aceste documente

- **Sesiunea fiecărei variante: neverificată.** Documentele spun doar „2026” și numărul variantei. Nu știm din proiect dacă Variantele 3–5 provin dintr-o sesiune, dintr-o simulare sau din alt set.
- **Informație găsită online la 26.10.2026, neconfirmată pe site-ul oficial:** articolul edupedu.ro [„Subiecte Limba Română real și tehnologic – BAC 2026…”](https://www.edupedu.ro/subiecte-limba-romana-real-si-tehnologic-bac-2026-la-subiectul-al-iii-lea-a-picat-george-bacovia/) relatează, citând Euronews România, că la proba din 29 iunie 2026 (sesiunea iunie–iulie) s-a extras **Varianta 6** pentru real/tehnologic, cu Bacovia la Subiectul al III-lea. Informația corespunde cu `E_a_romana_real_tehn_2026_var_06.pdf`, dar nu a fost confirmată pe un site al ministerului.
- **URL-ul oficial de descărcare** (de exemplu, platforma `subiecte.edu.ro`, menționată în presă) **nu a fost identificat** pentru niciun fișier. **neverificat**

---

## 4. Textele literare și edițiile consultate

**Niciun text literar nu este salvat în proiect.** Textele de lucru (transcrieri descărcate, OCR, scripturi de confruntare a citatelor) au fost păstrate în directorul temporar al sesiunilor de audit și **nu mai sunt disponibile în repository** (vezi `audit-moara-cu-noroc-2026-10-25.md`, §7, și `audit-povestea-lui-harap-alb-2026-10-25.md`, §1.2).

| Operă | Ediție / transcriere | Identificare | URL | Stare |
|---|---|---|---|---|
| Liviu Rebreanu, „Ion” | Transcriere Wikisource a ediției Editura Universală Alcalay, 1920, în ortografie actuală, fără paginația ediției | „Ion (Rebreanu)/1. Glasul pământului”, rev. 149664; „Ion (Rebreanu)/2. Glasul iubirii”, rev. 149663 | <https://ro.wikisource.org/wiki/Ion_(Rebreanu)/1._Glasul_p%C4%83m%C3%A2ntului>; <https://ro.wikisource.org/wiki/Ion_(Rebreanu)/2._Glasul_iubirii> | consultat (raport); online 26.10.2026. Ambele revizii există și sunt datate 14.02.2026 (verificat prin API-ul Wikisource) |
| Ioan Slavici, „Moara cu noroc” | **A.** Transcriere Wikisource, ortografie actuală; **pagina nu indică ediția-sursă** | rev. 129071 | <https://ro.wikisource.org/wiki/Moara_cu_noroc> | consultat (raport); online 26.10.2026; revizia există, datată 11.11.2022 (API) |
| Ioan Slavici, „Moara cu noroc” | **B.** *Moara cu noroc*, „Biblioteca pentru toți”, nr. 31, Editura pentru Literatură, București, 1965, ed. a II-a revăzută, prefață de Pompiliu Marcea; textul reproduce *Novele din popor*, București, 1881 | Internet Archive, `0031-ion-slavici-moara-cu-noroc-1965` (scanare + OCR) | <https://archive.org/details/0031-ion-slavici-moara-cu-noroc-1965> | consultat (raport), prin OCR; online 26.10.2026. Metadatele Archive: creator „Ion Slavici”, an 1965 |
| Ion Creangă, „Povestea lui Harap-Alb” | **A.** Transcriere Wikisource, „calitate 100%”, ortografie actuală; **nu indică ediția-sursă** | rev. 152404 | <https://ro.wikisource.org/wiki/Povestea_lui_Harap-Alb> | consultat (raport); online 26.10.2026; revizia există, datată 24.09.2026 (API) |
| Ion Creangă, „Povestea lui Harap-Alb” | **B.** *Povești, amintiri, povestiri*, „Biblioteca pentru toți”, Editura pentru Literatură, ed. a II-a, 1967, prefață de Al. Piru; texte reproduse după *Opere* (ed. Iorgu Iordan și Elisabeta Brîncuș) | Internet Archive, `6-ion-creanga-povesti-amintiri-povestiri-1967` (scanare + OCR) | <https://archive.org/details/6-ion-creanga-povesti-amintiri-povestiri-1967> | consultat (raport), prin OCR; online 26.10.2026. Metadatele Archive: creator „Ion Creangă”, an 1967 |
| Costache Negruzzi, „Alexandru Lăpușneanul” | **A.** Transcriere Wikisource, ortografie cu „î” și „sînt”; nota paginii indică prima apariție (*Dacia literară*, 1840) și volumul din 1857, **dar nu ediția-sursă** | rev. 115307 (28.01.2019) | <https://ro.wikisource.org/wiki/Alexandru_L%C4%83pu%C8%99neanul> | consultat (raport); wikitext salvat în `local/alexandru-lapusneanul/wikisource-rev115307.wikitext` |
| Costache Negruzzi, „Alexandru Lăpușneanul” | **B.** *Păcatele tinerețelor*, „Biblioteca pentru toți” nr. 1137, Minerva, 1982, ed. îngrijită de Liviu Leonte, prefață și tabel cronologic de Elvira Sorohan | Internet Archive, `pacatele-tineretelor` (scanare + OCR) | <https://archive.org/details/pacatele-tineretelor> | consultat (raport), prin OCR; OCR salvat în `local/alexandru-lapusneanul/bpt1137-1982-ocr.txt`. Licența afișată (CC BY-NC-ND 4.0) este declarată de cel care a încărcat fișierul |
| Mihail Kogălniceanu, „Introducție” la *Dacia literară* | Transcriere Wikisource, fără ediție-sursă indicată | rev. 135602 | <https://ro.wikisource.org/wiki/Introduc%C8%9Bie_la_%22Dacia_literar%C4%83%22> | consultat (raport); un singur citat, folosit în lecția „Alexandru Lăpușneanul” |
| George Călinescu, „Enigma Otiliei” | G. Călinescu, *Enigma Otiliei*, roman, vol. I–II, prefață de Paul Georgescu, Editura pentru Literatură, 1967, „Biblioteca pentru toți” nr. 53–54, ed. a II-a; textul reprodus după *Opere*, vol. III–IV, Editura pentru literatură, 1966 (date citite pe imaginile foii de titlu, ale versoului ei și ale copertei) | Internet Archive, `53-george-calinescu-enigma-otiliei-vol-i-1967` (scanare + OCR, ambele volume); pe ultima pagină: „Scanare și prelucrare digitală de Anonim și CAT Graur, Antwerpen, 2025” | <https://archive.org/details/53-george-calinescu-enigma-otiliei-vol-i-1967> | consultat (raport), prin OCR și pe imaginile paginilor. **Textul este protejat prin drept de autor**; statutul legal al încărcării este incert, iar licența afișată (CC BY-NC-ND 4.0) este declarată de cel care a încărcat fișierul. Copia nu a fost păstrată în proiect; amprentele SHA-256 sunt în `audit-enigma-otiliei-2026-10-26.md`, §1.2 |

**Observații:**

- Pentru „Ion”, **nu a fost consultată nicio ediție tipărită** sau scanare. Citatele au fost verificate doar pe transcrierea Wikisource.
- Pentru „Moara cu noroc”, „Harap-Alb” și „Alexandru Lăpușneanul”, ediția B a fost citită **prin OCR**, cu potriviri aproximative (vezi secțiunea 7).
- Pentru „Enigma Otiliei” există **o singură ediție** consultată (BPT 1967), citită prin OCR și confirmată pe imaginile paginilor; nu există o transcriere liberă cu care să fie confruntată.
- Nu au fost consultate edițiile princeps (*Novele din popor*, 1881; *Convorbiri literare*, 1877; *Dacia literară*, 1840; „Enigma Otiliei”, 1938) și nici ediții critice moderne.

### 4.1. Dicționare

| Sursă | Intrări | URL | Stare |
|---|---|---|---|
| dexonline.ro | „spân” (DEX); „harap” (DEX '09, trimite la „arap”) | <https://dexonline.ro/definitie/sp%C3%A2n>; <https://dexonline.ro/definitie/harap> | consultat (raport Harap-Alb, §1.3); online 26.10.2026 |

---

## 5. Comentarii și surse secundare

Sursele de interpretare sunt separate de textele literare. **Nicio sursă din această secțiune nu este autoritate pentru lecții.** Interpretările din lecții sunt formulate pe baza textului și marcate „Interpretare”.

### 5.1. Comentariul școlar din folder

| Câmp | Informație |
|---|---|
| Fișier | `comentarii-opere-romana.pdf` |
| Titlu | Pe prima pagină: „COMENTARII / LIMBA ROMÂNĂ / BACALAUREAT” |
| Autor, editură, an | **Neidentificabile** (nu apar în text; metadatele PDF conțin doar programele de generare), conform `audit-ion-2026-10-25.md`, §1.1 |
| Pagini | 62 (numărare la 26.10.2026; raportul din prima rundă Ion indică 63, vezi secțiunea 7) |
| Conținut (cuprins, p. 2) | Plumb, Eu nu strivesc corola de minuni a lumii, Flori de mucigai, Riga Crypto și lapona Enigel, Leoaica tânără, iubirea, Floare-albastră, Povestea lui Harap-Alb, Moara cu noroc, Baltagul, Ion, Ultima noapte de dragoste, întâia noapte de război, Enigma Otiliei, Moromeții |
| Folosire | Doar confruntare. Capitolul „Enigma Otiliei” (p. 41–46) a fost citit pentru documentare; mai multe formulări din el diferă de ediția 1967 sau nu apar în ea (vezi `documentare-enigma-otiliei-2026-10-26.md`, §2). **Nu are capitol despre „Alexandru Lăpușneanul”** (Negruzzi e pomenit o singură dată, în context pașoptist). Capitole citite: Ion (p. 32–36), Moara cu noroc (p. 25–27), Harap-Alb (p. 21–25). Numerele din cuprins nu corespund paginilor reale (de exemplu, Ion: p. 29 în cuprins, p. 32 în fișier). |
| Erori găsite | Consemnate în rapoarte: Ion – §4 din `audit-ion-2026-10-25.md`; Moara – §3.1 din `audit-moara-cu-noroc-2026-10-25.md`; Harap-Alb – §3 din `audit-povestea-lui-harap-alb-2026-10-25.md` |

### 5.2. Surse critice și editoriale consultate

| Sursă | Pentru | Stare | Ce s-a folosit |
|---|---|---|---|
| Pompiliu Marcea, prefața la *Moara cu noroc*, BPT 1965 (ediția B de la secțiunea 4) | Moara cu noroc | consultat (raport), prin OCR | Date de publicare (*Novele din popor*, 1881, Socec, dedicat lui Titu Maiorescu); citate atribuite; paginile p. XXXVI–XXXVII se bazează pe marcajele din scanare |
| Nota editorială de la sfârșitul basmului, BPT 1967: „(Convorbiri literare, 1 august 1877)” | Harap-Alb | consultat (raport), prin OCR | Data apariției |
| Al. Piru, prefața la BPT 1967 | Harap-Alb | consultat (raport), OCR zgomotos | Doar ideea generală despre probe; nu este citată |
| ro.wikipedia, „Povestea lui Harap-Alb” | Harap-Alb | consultat (raport); sursă terțiară | Doar confirmarea datei 1 august 1877; celelalte afirmații nu au fost preluate |
| Wikipedia (articol nespecificat), pentru „Jar” (1934) ca roman | Ion | consultat (raport); sursă terțiară | Mențiune de context; unica sursă |
| Elvira Sorohan, prefața și tabelul cronologic la *Păcatele tinerețelor*, BPT 1982 (ediția B pentru „Alexandru Lăpușneanul”) | Alexandru Lăpușneanul | consultat (raport), prin OCR | Prima apariție (*Dacia literară*, nr. 1, 1840), ciclul „Scene istorice din cronicele Moldaviei”, volumul din 1857; observațiile despre raportul cu cronica (parafrazate, p. XXI–XXII); discuția personaj static/dinamic |
| Internet Archive (fișa `nuvele0000negr`) și ro.wikipedia, „Constantin Negruzzi” (rev. 17986222) | Alexandru Lăpușneanul | consultat (raport); surse terțiare | Doar anii 1808–1868 |
| Paul Georgescu, prefața la *Enigma Otiliei*, BPT 1967 (vol. I, p. V–XVI), și tabelul cronologic din același volum (p. XIX–XXXIII) | Enigma Otiliei | consultat (raport), pe imaginile paginilor | Anul apariției (1938), datele nașterii și morții autorului; citate critice (realismul balzacian, personajele-tip, „roman citadin”, Felix „martorul”, „indeterminarea Otiliei”) |

### 5.3. Surse critice mediate sau neconsultate

| Sursă | Cum apare în proiect | Stare |
|---|---|---|
| G. Călinescu, *Istoria literaturii române* (1941) | Citată în lecția „Moara cu noroc” după prefața lui Marcea | mediat |
| G. Topîrceanu, *Viața românească*, august 1925 | Citat în lecția „Moara cu noroc” după prefața lui Marcea | mediat |
| N. Manolescu, E. Lovinescu, G. Călinescu, T. Vianu; L. Rebreanu, *Amalgam* | Citate în comentariul școlar (capitolul Ion) | **neverificat**; nu sunt folosite în lecție |
| Magdalena Popescu, Al. Philippide, G. Călinescu („în alb și negru”), P. Marcea („moralistul nostru prin excelență”) | Citate în comentariul școlar (capitolul Moara cu noroc) | **neverificat**; nu sunt folosite |
| V. Propp, T. Vianu, E. M. Forster, J. Boutière, B. P. Hasdeu, Novalis, Vl. Streinu, Boroianu | Atribuiri din comentariul școlar (capitolul Harap-Alb) | **neverificat**; nu sunt citate (Propp apare doar ca terminologie) |
| G. Călinescu („romantism pozitiv”) și T. Vianu, citați în prefața Elvirei Sorohan (BPT 1982) | Prefața ediției B pentru „Alexandru Lăpușneanul” | mediat; **necitate** în lecție |
| Ov. S. Crohmălniceanu (*Curs de istorie a literaturii române între cele două războaie mondiale*, p. 468) și G. Călinescu (*Clasicism, romantism, baroc*), citați în prefața lui Paul Georgescu (BPT 1967) | Prefața ediției pentru „Enigma Otiliei” | mediat; **necitate** în lecție |
| Crohmălniceanu („primul nostru roman citadin…”), Manolescu, Călinescu („Nu Otilia are o enigmă…”, „tipizarea mea…”), citatul „noi vom putea fi tolstoieni sau balzacieni…” | Comentariul școlar (capitolul Enigma Otiliei) | **neverificat**; nu apar în ediția 1967; excluse din lecție |

---

## 6. Surse utilizate pentru fiecare operă

Coloana „Dovadă” indică raportul sau fișierul care susține folosirea. Lecțiile au toate statusul `draft-neverificat`.

### 6.1. „Ion” – Liviu Rebreanu

Fișiere: `content/romana/opere/ion.mdx`, `content/romana/exercitii/ion.ts`.

| Sursă | Tip | Folosire | Dovadă |
|---|---|---|---|
| Programa 2014 (Anexa 2, OMEN 4.923/2013), ambele variante, p. 5–6 | oficială, externă | Autor canonic, realism, „orientări tematice în romanul interbelic” | `audit-ion-2026-10-25-runda2.md` §1, §6; secțiunea Surse din lecție |
| Ordinele 6.059/2025 și 5.211/2026, art. 3 alin. (4) | oficială, copii externe | Programa aplicabilă | idem |
| `Programa-Bac-2030-Romana-1.pdf`, p. 9 | oficială, locală | Context BAC 2030 | Surse din lecție |
| `programa-Limba-Romana-Bac-2022.pdf` | oficială, locală | Folosită în prima rundă și în `analiza-ion.md`; **înlocuită** în runda a 2-a | `audit-ion-2026-10-25.md` §1.3; runda 2 §1.3 |
| Subiecte și bareme 2026 real/tehnologic: Model, Var. 3, 4, 6 (citate în lecție); Var. 5 și uman/ped. Model, Var. 6, secții maghiare Var. 6 (analizate în audit) | oficiale, locale | Structura și punctajul Subiectului al III-lea | Surse din lecție; `audit-ion-2026-10-25.md` §2.1 |
| Wikisource, „Ion”, rev. 149664 și 149663 | text literar | Acțiune, personaje, toate citatele (9 în lecție), exerciții | `audit-ion-2026-10-25.md` §1.2; runda 2 §4; `audit-exercitii-ion-2026-10-25.md` |
| `comentarii-opere-romana.pdf`, p. 32–36 | secundară | Confruntare; o interpretare a titlului (5.6) apare și în carte | `audit-ion-2026-10-25.md` §3–4 |
| `analiza-ion.md` | notă internă | Analiza documentelor oficiale înainte de redactare | câmpul `referenceAnalysis` din `content/romana/opere/ion.mdx` |
| Wikipedia, „Jar” (1934) | terțiară | Context | `audit-ion-2026-10-25.md` §6 |

### 6.2. „Moara cu noroc” – Ioan Slavici

Fișiere: `content/romana/opere/moara-cu-noroc.mdx`, `content/romana/exercitii/moara-cu-noroc.ts`.

| Sursă | Tip | Folosire | Dovadă |
|---|---|---|---|
| Programa 2014, p. 4–6 | oficială, externă | Autor canonic; nuvela între speciile epice; perioada și curentele | `audit-moara-cu-noroc-2026-10-25.md` §1.1 |
| `Programa-Bac-2030-Romana-1.pdf`, p. 9, 17, 28 (MO) | oficială, locală | „Nuvela realistă (text integral)”; Slavici autor canonic | idem |
| Subiecte și bareme 2026 real/tehnologic: Model, Var. 3, 4, 5 | oficiale, locale | Structura Subiectului al III-lea; Var. 5 (Slavici la Sub. I) | idem; Surse din lecție |
| Wikisource, „Moara cu noroc”, rev. 129071 (ediția A) | text literar | Lectură integrală; textul citatelor | raport §1.2 |
| BPT 1965, Internet Archive (ediția B) | text literar, OCR | Confruntarea celor 31 de citate; nota „Păun”/„Pîrvu” | raport §1.2, §7 |
| Prefața lui P. Marcea (în B) | critică / editorială | Date de publicare; citate Călinescu și Topîrceanu (mediate) | raport §1.3 |
| `comentarii-opere-romana.pdf`, p. 25–27 | secundară | Doar confruntare | raport §3.1 |
| Descrierea scanării pe Internet Archive | metadate | Erori semnalate (copiii, proverbul); nu e sursă | raport §3.2 |

### 6.3. „Povestea lui Harap-Alb” – Ion Creangă

Fișiere: `content/romana/opere/povestea-lui-harap-alb.mdx`, `content/romana/opere/povestea-lui-harap-alb-interactiv.ts`, `content/romana/exercitii/povestea-lui-harap-alb.ts`.

| Sursă | Tip | Folosire | Dovadă |
|---|---|---|---|
| Programa 2014, p. 4, 6 | oficială, externă (copia din auditurile Ion) | Autor canonic; basmul cult | `audit-povestea-lui-harap-alb-2026-10-25.md` §1.1 |
| `E_a_romana_real_tehn_2026_var_03.pdf` și `E_a_romana_real_tehn_2026_bar_03.pdf`, p. 2 | oficiale, locale | Cerința despre personajul din basmul cult; punctaj | idem |
| `E_a_romana_real_tehn_2026_var_model.pdf` (identic cu `subiect-bac-romana-2026-tehnologic.pdf`), p. 2 | oficială, locală | Cerința despre personaj, Ion Creangă | idem |
| `Programa-Bac-2030-Romana-1.pdf`, p. 4, 12, 25 ale fișierului | oficială, locală | Basm popular / basm cult; Creangă autor canonic | idem |
| Wikisource, rev. 152404 (ediția A) | text literar | Lectură integrală; citate | raport §1.2 |
| BPT 1967, Internet Archive (ediția B) | text literar, OCR | Confruntarea citatelor (94 de segmente); data 1877 | raport §1.2, §1.4 |
| dexonline.ro („spân”, „harap”) | dicționar | Explicații lexicale | raport §1.3 |
| ro.wikipedia | terțiară | Confirmarea datei | raport §1.4 |
| `comentarii-opere-romana.pdf`, p. 21–25 | secundară | Doar confruntare | raport §1.4, §3 |

### 6.4. „Alexandru Lăpușneanul” – Costache Negruzzi

Fișiere: `content/romana/opere/alexandru-lapusneanul.mdx`, `content/romana/opere/alexandru-lapusneanul-interactiv.ts`, `content/romana/exercitii/alexandru-lapusneanul.ts`.

| Sursă | Tip | Folosire | Dovadă |
|---|---|---|---|
| Programa 2014, p. 4–6 (copie locală, vezi 2.1) | oficială | Negruzzi **nu** este autor canonic; nuvela, perioada pașoptistă, romantismul; textele la prima vedere | `audit-alexandru-lapusneanul-2026-10-26.md` §0 |
| `Programa-Bac-2030-Romana-1.pdf`, MO p. 8 și 28 | oficială, locală | „Nuvela romantică (text integral)”; lista autorilor canonici 2030 | idem |
| Subiecte și bareme 2026: real/tehnologic Model, Var. 3–6; uman/ped. Model, Var. 6; secții maghiare Var. 6 | oficiale, locale | Formularea cerințelor (autor / specie / perioadă); reperele și punctajul | idem; Surse din lecție |
| Wikisource rev. 115307 (ediția A) | text literar | Lectură integrală; textul tuturor citatelor (101 segmente) | raport §1.2 |
| BPT 1982, Internet Archive (ediția B) | text literar, OCR | Confruntarea citatelor | raport §1.2, §3 |
| Prefața și cronologia E. Sorohan (în B) | critică / editorială | Date de publicare; istorie și ficțiune | raport §1.3 |
| Wikisource, „Introducție” la *Dacia literară*, rev. 135602 | text primar | Un citat (lecția, 3.2) | raport §1.3 |
| Scriptul `local/alexandru-lapusneanul/check_quotes.py` | instrument | Confruntarea automată a citatelor în A și B | raport §1.2 |

### 6.5. „Enigma Otiliei” – George Călinescu

Fișiere: `content/romana/opere/enigma-otiliei.mdx`, `content/romana/opere/enigma-otiliei-interactiv.ts`, `content/romana/exercitii/enigma-otiliei.ts`.

| Sursă | Tip | Folosire | Dovadă |
|---|---|---|---|
| Programa 2014, p. 5–6 (copie locală, vezi 2.1) | oficială | Călinescu este autor canonic; programa nu numește opera; romanul interbelic, realismul | `audit-enigma-otiliei-2026-10-26.md` §0 |
| `Programa-Bac-2030-Romana-1.pdf`, MO p. 9 și 28 | oficială, locală | „Realismul în romanul interbelic”, „romanul citadin (text integral)”; autorii canonici 2030 | idem |
| Subiecte și bareme 2026 (aceleași ca la 6.4) | oficiale, locale | Reperele și punctajul; niciun subiect nu numește Călinescu | idem |
| BPT 1967, Internet Archive (vezi 4) | text literar, OCR + imagini | Faptele, citatele și paginile din lecție | raport §1–§2 |
| Prefața lui Paul Georgescu și tabelul cronologic (în aceeași ediție) | critică / editorială | Date despre autor și apariție; citate critice | raport §1.3 |
| `comentarii-opere-romana.pdf`, p. 41–46 | secundară | Doar confruntare; formulările divergente sau negăsite sunt excluse | `documentare-enigma-otiliei-2026-10-26.md` §2 |
| Scripturile din `local/enigma-otiliei/` (`check_quotes.py`, `check_lesson_quotes.py`, `find_page.py`) | instrumente | Confruntarea citatelor cu OCR-ul și găsirea paginii tipărite | raport §1.2 |

---

## 7. Limitări și neconcordanțe

Neconcordanțele de mai jos sunt **consemnate, nu rezolvate**.

### 7.1. Programe și documente oficiale

1. **Programa citată de `analiza-ion.md` este greșită pentru 2026–2027.** Analiza folosește programa din 2021; runda a 2-a a auditului Ion a stabilit că se aplică programa din 2013/2014. Fișierul `analiza-ion.md` **nu a fost corectat**. Corecția se află în `audit-ion-2026-10-25-runda2.md`, §1.3.
2. **Programa 2014 lipsea din folder** până la 26.10.2026; acum există o copie locală (vezi 2.1), tot din surse secundare (presă, inspectorat). Recomandarea de a o adăuga apare în runda 2 Ion (§7) și în auditul Harap-Alb (§1.1).
3. **Două copii externe nu au mai putut fi redeschise la 26.10.2026** (edupedu.ro răspunde cu HTTP 403 la accesul automat): programa 2014 real/tehnologic și facsimilul Ordinului 5.211/2026. Ele au fost consultate în auditurile din 25.10.2026, potrivit raportului.
4. **Numele fișierului `programa-Limba-Romana-Bac-2022.pdf`** nu corespunde antetului (anul școlar 2020–2021).
5. **`subiect-bac-romana-2026-tehnologic.pdf` este duplicat** al `E_a_romana_real_tehn_2026_var_model.pdf`. Numele poate induce în eroare.
6. **Sesiunea și proveniența variantelor 2026** sunt neverificate (vezi 3.4).

### 7.2. Texte literare

1. **Wikisource nu indică ediția-sursă** pentru „Moara cu noroc” și „Harap-Alb”. Pentru „Ion”, transcrierea este atribuită ediției Alcalay, 1920, dar **nu a fost comparată cu o ediție tipărită**.
2. **OCR-ul nu este o reproducere exactă a edițiilor tipărite.** Ediția BPT 1965 („Moara cu noroc”): potriviri de 0,91–1,00 pentru citatele lungi; citatele scurte (0,86–0,89) au fost confirmate manual. Ediția BPT 1967 („Harap-Alb”): patru pasaje cu coloane amestecate au confirmare doar parțială (raport Harap-Alb, §1.2).
3. **Numărul de capitole din transcrierea Wikisource a „Morii cu noroc”:** raportul de documentare (§2.1) spune că ediția A are capitolele I–XVII. Raportul de exerciții (§2) spune că transcrierea Wikisource **nu are marcajele XII, XV și XVI**, iar numerotarea a fost confruntată cu ediția 1965. **Verificat online la 26.10.2026:** textul-sursă (wikitext) al reviziei 129071 conține titluri pentru toate capitolele, I–XVII. Afirmația din raportul de exerciții nu este susținută de wikitext; cauza (de exemplu, o extragere diferită a textului în sesiunea de audit) nu este cunoscută. Raportul nu a fost modificat.
4. **„Alexandru Lăpușneanul”:** diferențe între A și B („eu vă vreau” / „eu vă vreu” în replica din cap. I; „greșeală” / „greșală”; „pîn-a” / „păn-a”); motto-ul cap. III ilizibil în OCR-ul B; motto-ul cap. IV („De mă voi scula”) diferă de replica din text („de mă voi îndrepta”) în ambele ediții. Vezi `audit-alexandru-lapusneanul-2026-10-26.md`, §3.
5. **„Enigma Otiliei”:** o singură ediție (BPT 1967); OCR-ul nu recunoaște sigur cifrele romane ale capitolelor (numărul de 20 a fost stabilit pe imagini). Câteva formulări din comentariul școlar diferă de ediție (de exemplu, „orele 10” față de „orele zece”; suma de „300000 lei” față de „o sută de mii”). Vezi `audit-enigma-otiliei-2026-10-26.md`, §3.
6. **„Păun” / „Pârvu”** în cap. XVI din „Moara cu noroc”: inconsecvență din textul original, notată de ediția 1965. Lecția folosește „Păun”.
7. **Anul apariției „Poveștii lui Harap-Alb”:** 1877 (nota din BPT 1967, Wikisource, ro.wikipedia) față de 1878 (cronologia din BPT 1967 și comentariul școlar). Lecția folosește 1877; contradicția din ediția 1967 nu a fost explicată.
8. **Variante de formă între ediții** (de exemplu, „rânjetul” / „rînjitul”); lecția „Moara cu noroc” evită pasajele de acest tip.
9. **Ortografie:** transcrierile pentru „Moara cu noroc” și „Harap-Alb” folosesc ortografia actuală, cea pentru „Alexandru Lăpușneanul” folosește „î” și „sînt” (lecția citează în ortografia actuală, păstrând formele vechi ale cuvintelor); edițiile din 1965 și 1967, ortografia cu „î” și cu sedilă.

### 7.3. Surse secundare

1. **Comentariul școlar este anonim și conține erori factuale** în toate cele trei capitole citite (vezi rapoartele indicate în 5.1).
2. **Numărul de pagini ale comentariului:** `audit-ion-2026-10-25.md` (§1.1) spune 63 de pagini; fișierul are 62 de pagini (numărate la 26.10.2026 după obiectele `/Page` și după textul extras). Același raport afirmă că numărul tipărit în subsol coincide cu numărul paginii PDF; nu am reverificat această afirmație.
3. **Citatele critice mediate** (Călinescu, Topîrceanu) nu au fost confruntate cu lucrările originale.
4. **„Jar” (1934) ca roman** are o singură sursă, terțiară.

### 7.4. Fișiere de lucru pierdute

Transcrierile, OCR-urile, scripturile și listele de citate folosite la confruntare (de exemplu `moara.txt`, `bpt1965.txt`, `check_quotes.py`, `quotes.json`) erau în directorul temporar al sesiunilor de audit. **Nu sunt în repository**, deci verificarea citatelor nu poate fi reprodusă de pe alt calculator fără a le descărca din nou. Pentru „Alexandru Lăpușneanul”, fișierele de lucru și scriptul sunt păstrate în `references/bac-romana/local/alexandru-lapusneanul/` (tot în afara Git).

---

## 8. Cum se adaugă surse pentru o operă nouă

1. **Documentele oficiale.** Verifică ordinul de organizare al sesiunii vizate (art. 3 alin. (4)), ca să afli ce programă se aplică. Notează numărul ordinului, data, numărul Monitorului Oficial și URL-ul. Preferă sursa primară (Monitorul Oficial, edu.ro) în locul copiilor.
2. **Subiectele și baremele.** Caută variantele în care apare autorul sau specia. Notează fișierul, varianta, filiera și pagina. Nu generaliza baremul unei singure variante.
3. **Textul literar.** Folosește cel puțin două ediții: o transcriere (de exemplu, Wikisource, cu numărul reviziei și data consultării) și o ediție tipărită identificabilă (editură, an, ediție, îngrijitor). Dacă ediția tipărită e citită prin OCR, spune asta explicit.
4. **Fișierele de lucru.** Păstrează textele descărcate și scripturile de verificare a citatelor într-un loc recuperabil (de exemplu, un folder local documentat, vezi secțiunea 9), nu doar în directorul temporar al sesiunii.
5. **Sursele critice.** Separă sursele consultate direct de cele citate prin intermediar. Nu prelua citate din comentarii anonime.
6. **Raportul.** Scrie un raport în `docs/rapoarte/` (`audit-<slug>-AAAA-LL-ZZ.md`) cu marcajele [T]/[S]/[I]/[?], după modelul rapoartelor existente.
7. **Lecția.** Completează secțiunea „Surse” din `content/romana/opere/<slug>.mdx` și câmpul `basis` din exerciții.
8. **Acest catalog.** Adaugă o subsecțiune în secțiunea 6, rândurile corespunzătoare în tabelele 4 și 5 și eventualele neconcordanțe în secțiunea 7.

**Convenții recomandate pentru fișiere noi** (recomandare, nu regulă existentă în proiect): păstrează numele oficiale ale fișierelor descărcate de la minister; pentru alte documente, folosește litere mici, cratime și anul (de exemplu `programa-bac-2014-real-tehnologic.pdf`).

---

## 9. Politica Git și a materialelor locale

### 9.1. Situația actuală

- **PDF-urile au fost eliminate din întregul istoric Git local** la 26.10.2026, cu `git filter-repo --path-glob 'references/bac-romana/*.pdf' --invert-paths`. Sunt păstrate pe disc în `references/bac-romana/local/`, cu sumele SHA-256 verificate față de originale.
- În Git rămân din acest folder doar `analiza-ion.md` și (după commit) acest `README.md`.
- `.gitignore` conține regula `/references/bac-romana/local/`.
- **Remote-ul nu a fost încă actualizat.** Până la un push forțat, GitHub păstrează istoricul vechi, cu PDF-urile incluse. Repository-ul GitHub este privat, potrivit proprietarului.
- **Backup** dinaintea rescrierii, în afara repository-ului: `E:\learn\bac-simplu-backup-2026-10-26\` (bundle Git complet, clonă `--mirror`, copie a directorului de lucru, PDF-uri și `pdf-sha256.txt`). Backup-ul conține PDF-urile, deci nu trebuie urcat nicăieri public.

### 9.2. Clasificare propusă

> Clasificarea este o recomandare. Nu este o evaluare juridică. Faptul că un PDF este disponibil pe internet nu înseamnă că poate fi redistribuit.

| Categorie | Fișiere | Motiv | Recomandare |
|---|---|---|---|
| **Potrivite pentru repository** | `README.md`, `analiza-ion.md` | Documentație redactată în proiect | Păstrare |
| **Probabil potrivite, de verificat** | `Programa-Bac-2030-Romana-1.pdf`, `programa-Limba-Romana-Bac-2022.pdf` | Anexe la ordine publicate în Monitorul Oficial. Legislația română exclude de obicei textele oficiale de la protecția dreptului de autor, dar statutul exact al anexelor **nu a fost verificat** | Păstrare până la verificare; alternativ, înlocuire cu URL-ul oficial (încă neidentificat) |
| **Drept de redistribuire de verificat** | Toate subiectele și baremele `E_a_romana_*_2026_*.pdf` (18 fișiere) | Documente oficiale CNCE, dar subiectele conțin fragmente din opere literare și texte ale unor autori care pot fi încă protejate | Verificare; dacă se găsește URL-ul oficial, poate fi documentat în locul fișierelor |
| **Doar local** | `comentarii-opere-romana.pdf` | Autor, editură și licență necunoscute; text secundar, probabil protejat | Păstrare locală, în afara Git; în README rămâne doar descrierea |
| **Redundant** | `subiect-bac-romana-2026-tehnologic.pdf` | Duplicat exact al `E_a_romana_real_tehn_2026_var_model.pdf` | Eliminare sau redenumire, după decizia proprietarului proiectului (decizie deja cerută în `analiza-ion.md`, §6) |
| **Înlocuibile cu URL** | Programa 2014, ordinele 6.059/2025 și 5.211/2026, textele Wikisource | Nu sunt în folder; sunt deja documentate prin URL (secțiunile 2 și 4) | Dacă se descarcă programa 2014 local, se aplică aceeași regulă ca pentru celelalte programe |
| **Doar local, dacă se descarcă** | Scanările și OCR-urile BPT 1965 și BPT 1967 | Internet Archive afișează licența CC BY-NC-ND 4.0, declarată de cel care a încărcat fișierele (metadate verificate la 26.10.2026). Licența nu a fost verificată față de deținătorii drepturilor; prefețele (Marcea, Piru) sunt probabil încă protejate | Nu se includ în repository; se documentează identificatorul Archive |

### 9.3. Folderul `local/`

Regula din `.gitignore`:

```gitignore
# materiale de referință locale (nu se sincronizează prin Git)
/references/bac-romana/local/
```

- `references/bac-romana/local/` este locul pentru materialele care **nu se publică în repository**: comentarii și culegeri cu drepturi neclare, scanări și OCR-uri, texte descărcate, scripturi și liste de citate folosite la verificare.
- **Conținutul lui nu este sincronizat prin Git.** Pe un alt calculator, folderul nu există după `git clone` (Git nu păstrează foldere goale sau ignorate). Fișierele trebuie copiate separat, de exemplu printr-un spațiu de stocare privat.
- Acest README rămâne lista de referință: orice fișier pus în `local/` trebuie trecut în catalog (secțiunile 4–6) cu identificarea și proveniența lui, ca să poată fi recuperat de pe alt calculator.
- La 26.10.2026, folderul conține cele 22 de PDF-uri descrise în secțiunile 2, 3 și 5, cele două copii ale programei 2014 (secțiunea 2.1) și subfolderul `alexandru-lapusneanul/` (wikitext Wikisource, OCR BPT 1982, metadate Archive, „Introducție” la *Dacia literară*, scriptul `check_quotes.py`; secțiunile 4 și 6.4), precum și subfolderul `enigma-otiliei/` (scripturile de confruntare `check_quotes.py`, `check_lesson_quotes.py` și `find_page.py`, citatele candidate, raportul `raport-citate-lectie.txt` și metadatele Archive pentru ediția BPT 1967; **fără** textul romanului, protejat prin drept de autor; vezi `docs/rapoarte/audit-enigma-otiliei-2026-10-26.md`). Clasificarea din 9.2 rămâne valabilă dacă unele dintre ele vor fi readuse în repository.

**Atenție:** regula nu scoate din Git fișierele deja urmărite. Pentru asta este nevoie de `git rm --cached` (vezi 9.4), iar fișierele rămân oricum în istoric, dacă istoricul nu este rescris (cum s-a făcut pentru PDF-uri, vezi 9.1).

### 9.4. Mutarea în siguranță a unui fișier deja urmărit

Procedura e utilă pentru fișiere urmărite adăugate în viitor. PDF-urile existente au fost deja mutate.

Exemplu pentru `comentarii-opere-romana.pdf`, în PowerShell, din rădăcina proiectului:

1. Fă o copie de siguranță în afara repository-ului:
   `Copy-Item references/bac-romana/comentarii-opere-romana.pdf <folder-de-backup>/`
2. Mută fișierul în `local/`:
   `Move-Item references/bac-romana/comentarii-opere-romana.pdf references/bac-romana/local/`
3. Scoate vechea cale din index. Fișierul de pe disc nu este afectat:
   `git rm --cached references/bac-romana/comentarii-opere-romana.pdf`
4. Verifică: `git status` trebuie să arate fișierul ca șters (`deleted`), fără să apară ceva din `local/`. Apoi `Test-Path references/bac-romana/local/comentarii-opere-romana.pdf` trebuie să întoarcă `True`.
5. Actualizează căile din acest README și, dacă e cazul, trimiterile din rapoarte.

**Pe celelalte calculatoare:** când primesc prin `git pull` commitul care scoate fișierul din Git, Git **șterge fișierul** de pe disc. Înainte de `pull`, copiază fișierul în `references/bac-romana/local/` pe calculatorul respectiv. Dacă a fost deja șters, îl poți recupera din istoric:
`git show <commit-anterior>:references/bac-romana/comentarii-opere-romana.pdf > references/bac-romana/local/comentarii-opere-romana.pdf`
În PowerShell 5.1, redirecționarea `>` poate altera fișierele binare. Folosește Git Bash pentru această comandă sau `git restore --source=<commit-anterior> -- <cale>`, apoi mută fișierul.
