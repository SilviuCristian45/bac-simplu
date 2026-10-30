# Audit vizual: homepage BAC Simplu

**Data:** 2026-10-30. **Stadiu:** audit și propunere. Nu s-a modificat niciun fișier de cod, conținut sau configurare; acest raport este singurul fișier creat.

## 0. Cum s-a făcut auditul

- Aplicația a fost rulată local (`next start`, build de producție) și inspectată într-un Chrome real, controlat prin Chrome DevTools Protocol, cu emulare de dispozitiv.
- Capturi pagină întreagă, în tema deschisă și în cea închisă (emularea `prefers-color-scheme`, iar scriptul de temă al site-ului a setat `data-theme` corespunzător):
  - desktop 1440 px,
  - tabletă 768 px,
  - mobil 390 px (cu emulare mobilă).
- Măsurători din DOM: dimensiuni de font, înălțimea secțiunilor, depășire orizontală.
- Codul a fost citit pentru a înțelege structura (`app/page.tsx`, `components/site/*`, `lib/site/home.ts`, `app/globals.css`) și sistemul vizual al lecțiilor (`components/lesson/intro/*`, `label-styles.ts`).
- Numerele din raport (19 opere, 266 exerciții) au fost obținute din codul existent, nu estimate.

**Limite:**
- Nu s-a testat cu cititor de ecran.
- Contrastul nu a fost măsurat cu un instrument, ci doar apreciat vizual.
- Mobilul a fost emulat, nu verificat pe un telefon real.
- Nu s-a făcut testare cu elevi: observațiile sunt de design, nu rezultate de utilizare.

## 1. Diagnostic

Homepage-ul actual este **curat, funcțional și corect tehnic**: fără depășire orizontală la niciuna dintre cele trei lățimi, fără elemente rupte, cu ierarhie de titluri coerentă. Problema nu este lipsa de rigoare, ci **lipsa de identitate**: pagina ar putea găzdui orice produs educațional sau SaaS. Se vede în trei locuri:

1. **Pagina nu arată produsul.** Nu apare nicio lecție, nicio ilustrație, nicio imagine, niciun fragment real. Hero-ul este un bloc de text pe fundal albastru-gri.
2. **Se folosește un limbaj vizual generic.** Fontul este Geist (fontul implicit al șablonului Next.js), culorile sunt albastru Tailwind + zinc, iar tema închisă este negru aproape pur cu o strălucire albastră la partea de sus. Combinația este recognoscibilă ca „template modern” și nu spune nimic despre literatură.
3. **Cele trei secțiuni au aceeași formă.** Fiecare este: titlu H2 aliniat la stânga + paragraf gri + grilă de elemente. Fără contrast de ritm, de scară sau de densitate, ochiul nu are un punct de oprire.

Contrastul cel mai puternic este cu restul platformei: **lecțiile au deja un sistem vizual bogat**, pe care homepage-ul îl ignoră complet (vezi §2.8).

## 2. Probleme concrete

### 2.1 Prima impresie și zona hero

- La 1440 px, hero-ul are 527 px înălțime. Tot textul stă într-o coloană de aproximativ 640 px, aliniată la stânga; **cam jumătate din lățime rămâne goală** și nu există niciun element vizual care să o echilibreze (captura desktop).
- Titlul „Română, pas cu pas.” are 60 px și este singurul element cu greutate. Kickerul („BACALAUREATUL LA LIMBA ȘI LITERATURA ROMÂNĂ”) are ~14 px, majuscule, albastru: repetă ce spune deja subtitlul și, la 390 px, se rupe pe două rânduri.
- Hero-ul spune „ce este” în abstract („Lecții despre operele studiate…”), dar nu arată nimic concret. Un elev nu poate afla în 5 secunde cum arată o lecție sau ce primește.
- Sub butoane rămâne spațiu mort (~90 px), iar linia de separare cu secțiunea următoare pare arbitrară.

### 2.2 Ierarhie și CTA-uri

- Două butoane: „Vezi operele” (principal, albastru) și „Cum funcționează” (secundar). Cel secundar duce la o ancoră de pe aceeași pagină, deci mută atenția spre explicație înainte ca elevul să vadă produsul. Este un CTA pentru cei care nu sunt convinși, plasat în locul în care ar trebui să fie un al doilea punct de intrare util.
- În header, pe mobil rămâne un singur link, „Opere”. Nu există un CTA în header și nicio cale directă către o lecție anume.

### 2.3 Secțiunea „Operele din platformă”: cea mai importantă și cea mai slabă

- Este **lista de 19 opere în ordine alfabetică**, 3 coloane pe desktop, 2 pe tabletă, 1 pe mobil. Înălțime: 954 px pe desktop și **1776 px pe mobil** (jumătate din toată pagina mobilă).
- Ordinea alfabetică este arbitrară pentru un elev: „Ion” și „Iona” (romanul lui Rebreanu și piesa lui Sorescu) apar unul lângă altul, ca și cum ar fi legate. Nu există nicio grupare după gen, deși elevul gândește pe genuri (proză, poezie, teatru), iar examenul cere încadrări pe specii.
- Elementele nu arată ca butoane sau carduri: text simplu, fără bordură, fundal sau săgeată; doar la hover se schimbă fundalul. Pe mobil nu există hover, deci nimic nu spune că sunt linkuri.
- **Defect de afișare introdus la ultima modificare:** titlurile scurte pierd ghilimeaua de deschidere în două cazuri: „Moromeții” (volumul I)” apare ca `Morometii” (volumul I)`, iar „Sincronismul” în „Istoria…”” apare ca `Sincronismul” în „Istoria…`. Cauza este expresia din `shortTitle()` (`lib/content/lesson.ts:87`), care taie primul și ultimul ghilimel. Defectul se vede și în breadcrumb-urile paginilor acestor lecții (existent dinainte). Nu a fost corectat, pentru că auditul nu modifică cod.
- Singura informație suplimentară este autorul. Nu apare nimic despre: gen, ce conține lecția, câte exerciții are, dacă elevul a început-o.
- Nota „Lecțiile sunt în curs de verificare: nu au fost încă validate de un profesor” este corectă și necesară, dar apare ca text gri mic sub titlu, fără formă proprie. Onestitatea este un atu al produsului, iar acum arată ca o clauză.

### 2.4 Secțiunea „Cum funcționează”

- Trei carduri egale, cu cerc numerotat, titlu, text. Este cel mai întâlnit model de template.
- La 768 px, cele trei coloane devin înguste (~140 px de text): „Verifică răspunsurile” se rupe pe două rânduri, iar cardurile au înălțimi inegale (captura de tabletă).
- Conținutul este corect, dar nu are nicio legătură vizuală cu produsul: nu se vede un exercițiu, o explicație sau o etichetă din lecție.

### 2.5 Tipografie

- O singură familie (Geist) pentru titluri, text și interfață. Funcționează bine pentru interfață, dar nu are caracter pentru un produs despre literatură.
- Titlurile sunt bold, strânse (tracking negativ), de aceeași greutate la toate nivelurile (H1, H2, titluri de card). Diferența dintre niveluri se face doar prin mărime.
- Textul de corp din hero are 20 px și lungime de rând de aproximativ 65 de caractere: bun pentru citire. Aici nu e o problemă.

### 2.6 Paletă și teme

- Albastru Tailwind (`#2459d6`) pe fundal alb-albăstrui (`#f4f6fb`), cu un gradient radial deschis în partea de sus. În tema închisă: `#0a0a0b` + strălucire albastră + suprafețe zinc. Ambele sunt corecte tehnic și rămân lizibile, dar sunt paleta implicită a oricărui produs „modern”.
- Un singur accent (albastrul) este folosit și pentru butoane, linkuri și kickere: nu există ierarhie cromatică.
- Tema închisă este de calitate bună ca implementare (aceleași jetoane), dar nu are o atmosferă proprie: este versiunea inversată a celei deschise.

### 2.7 Densitate, spațiere, echilibru

- Spațiere verticală uniformă (aproximativ 64–96 px între secțiuni). Combinată cu aceeași formă a secțiunilor, creează un ritm monoton.
- Pe desktop, conținutul stă pe o singură coloană stângă în hero, apoi se întinde pe 3 coloane în secțiuni: fără o compoziție care să le lege.
- Pe mobil, pagina are 3479 px; lista de opere ocupă 1776 px dintre ei. Cele trei secțiuni principale conțin informație utilă mică raportată la lungime.

### 2.8 Coerența cu identitatea BAC Simplu și cu restul platformei

Aici este diferența cea mai mare între homepage și produs:

- **Fiecare lecție are propria identitate vizuală**: o ilustrație SVG (`IntroArt`, 19 desene), o culoare de fundal și un accent per operă (chihlimbar pentru „Ion”, smarald pentru „Moara cu noroc”, indigo, roz, violet etc.), o animație de intrare. Homepage-ul nu folosește nimic din ele.
- **Lecțiile au un sistem de etichete** care separă faptele de interpretări: „Despre roman”, „Interpretare”, „Cerință oficială”, „Recomandare”, fiecare cu culoarea și chip-ul ei. Este trăsătura cea mai distinctivă a produsului: spune elevului ce este text, ce este părere și ce este cerință de examen. Homepage-ul nu o menționează.
- Lecția „Ion” are acum și portretele celor trei personaje.
- Logo-ul (cartea deschisă în pătrat albastru) este mic (32 px) și apare doar în header; nu este folosit ca motiv în pagină.
- Pagina nu spune nimic despre **ce a fost verificat și cum**: numărul de opere (19), de exerciții (266 în 19 seturi), faptul că lecțiile citează documentele oficiale cu pagina. Toate acestea sunt adevărate și verificabile, deci pot construi încredere fără exagerare.

### 2.9 Progres

- Platforma salvează local (în browser) sesiunea de exerciții, per set (`bac-simplu:exercitii:<set>`, vezi `lib/exercises/session-storage.ts`): întrebarea la care a ajuns elevul, răspunsurile verificate, dacă setul e terminat.
- **Homepage-ul nu arată nimic din asta**: un elev care revine nu vede „Continuă de unde ai rămas”. Nu există conturi și nici o pagină de progres general; nu trebuie presupusă una.

### 2.10 Navigare și subsol

- Header: logo + „Cum funcționează” (ascuns sub 640 px) + „Opere” + comutator de temă. Este minimal și curat, dar nu are nicio ancoră pentru conținut („Eseu”, „Exerciții”).
- Subsol: nume + slogan + o propoziție. Nu are linkuri, nici o mențiune despre surse (documentele oficiale din `references/`), nici despre stadiul conținutului.

## 3. Trei direcții de design

Toate respectă brandul existent (nume, slogan, monograma, albastru `#2459d6` ca accent) și nu cer conținut nou despre literatură.

### Direcția A: „Caietul” (editorial / revistă culturală)

**Concept.** Platforma ca o publicație despre literatură pentru elevi: pagină de revistă, nu pagină de aplicație. Elementul central este lectura, iar homepage-ul o prezintă ca pe o copertă și un cuprins.

**Atmosferă.** Caldă, atentă, matură. Hârtie, cerneală, margine de caiet, creion de profesor. Seriozitate fără rigiditate.

**Paletă.**
- Tema deschisă: hârtie caldă (`#f8f4ea`), cerneală aproape neagră caldă (`#1c1a16`), albastrul brandului ca singură culoare de acțiune. Un roșu de corectură (`#b3261e` sau similar) folosit foarte rar, pentru marcajul „Cerință oficială” sau pentru sublinierea unui cuvânt din titlu.
- Tema închisă: cărbune cald (`#15130f`), nu negru zinc; textul în crem (`#ece6d8`). Atmosferă de lampă de birou, nu de ecran.
- Culorile per operă din lecții apar în paletele de „coperți” (§3).

**Tipografie.** Serif pentru titluri și pentru fragmentele de lectură; sans pentru interfață. Candidații principali: Literata (proiectat pentru citit pe ecran, potrivit sesiunilor lungi), Newsreader sau Source Serif 4. Încărcare prin `next/font/google`, deci fără dependențe noi (se auto-găzduiesc la build). **Trebuie verificat explicit că `ș`, `ț`, `ă`, `â`, `î` au forma corectă (cu virgulă dedesubt).** Este o cerință din CLAUDE.md și un punct unde multe fonturi eșuează.

**Structura.**
1. Header discret cu logo și 3 linkuri.
2. Hero tipografic.
3. „Raftul cu opere”, grupat pe genuri.
4. Modul „Cum arată o lecție”: un specimen real.
5. Secțiune scurtă despre ce a fost verificat.
6. Subsol cu surse.

**Hero.** Titlul „Română, pas cu pas.” în serif mare, pe două rânduri, cu „pas cu pas” cu o linie subțire de creion dedesubt. În dreapta, o „pagină” decupată dintr-o lecție reală: un fragment cu eticheta „Cerință oficială” și o referință la pagină, de exemplu cea despre Subiectul al III-lea din lecția „Ion” (eseu de minimum 400 de cuvinte, 30 de puncte), exact cum apare în lecție. Arată produsul și onestitatea lui din prima secundă.

**Opere.** Un cuprins de carte: grupe (Proză, Poezie, Teatru, Critică) cu titlul grupei în serif mare, iar sub el rânduri cu număr, titlu, autor, linie punctată, pagina/seria „lecție + 15 exerciții”. Fără carduri.

**Progres.** O bandă subțire „Continuă: Ion, exercițiul 7 din 12” doar când există date salvate; altfel nu apare.

**Avantaje.** Cea mai originală și cea mai potrivită pentru literatură; are personalitate fără a fi copilărească; folosește material pe care îl avem deja; excelent pentru citit.
**Dezavantaje.** Cere o schimbare tipografică (font nou) și o disciplină mai mare la spațiere; riscul este un aspect „prea literar” pentru cei care vor doar exerciții; fontul serif trebuie testat pe diacritice; paleta caldă schimbă senzația tuturor paginilor dacă tokenii sunt partajați (se poate limita la homepage la început).

### Direcția B: „Raftul” (platformă premium, minimalistă, orientată pe coperți)

**Concept.** Biblioteca ca produs: fiecare operă este o „copertă” colorată cu ilustrația ei din lecție. Pagina este în mare parte un raft de coperți pe un fundal foarte curat.

**Atmosferă.** Liniștită, galerie, aproape fără text. Se bazează pe imagini și pe spațiu alb.

**Paletă.** Neutre foarte reci și curate (alb, gri deschis), cu **culorile din identitatea fiecărei lecții** ca singura culoare: chihlimbar pentru „Ion”, smarald pentru „Moara cu noroc” ș.a. Albastrul brandului doar la CTA.

**Tipografie.** Sans geometric, cu greutăți fine (Geist rămâne posibil, cu mai mult contrast între greutăți); titluri mari, subțiri.

**Structura.** Hero cu un rând de 4–5 coloane de coperți decupate (parțial vizibile, cu ușoară suprapunere), apoi raft pe genuri cu derulare orizontală pe mobil, apoi un modul scurt „Teorie · Exerciții · Eseu”.

**Hero.** Titlul centrat, foarte mare, sub el un rând de coperți care „ies” din partea de jos. CTA unic: „Alege o operă”.

**Opere.** Coperți portret (raport ~3:4) cu ilustrația SVG, titlul și autorul. Pe mobil, șine orizontale cu snap pe fiecare gen.

**Progres.** Un inel sau o bară subțire pe copertă pentru operele începute.

**Avantaje.** Foloseste cel mai bine activele vizuale deja făcute (19 ilustrații, 19 identități cromatice); cea mai ușor de parcurs; foarte „premium”; ușor de extins.
**Dezavantaje.** Ilustrațiile actuale sunt desenate pentru un cadru 16:10, nu pentru coperți portret: ar fi nevoie de recadrare sau de o variantă nouă. 19 culori diferite pot ieși zgomotoase dacă nu sunt temperate. Fără text, pagina spune mai puțin despre ce primește elevul. Este mai puțin distinctivă dacă nu e însoțită de o tipografie cu caracter.

### Direcția C: „Planul meu” (dashboard educațional centrat pe progres)

**Concept.** Homepage-ul ca punct de intrare într-un plan de pregătire: ce ai făcut, ce urmează, cât ai acoperit.

**Atmosferă.** Eficientă, motivantă, orientată pe acțiune. Seamănă cu o aplicație.

**Paletă.** Albastrul brandului ca bază, cu verde pentru „terminat”, chihlimbar pentru „în lucru”; fundal gri deschis, carduri albe.

**Tipografie.** Sans, cu cifre tabulare pentru statistici.

**Structura.** Hero scurt cu un „panou” (continuă / recomandare), apoi hartă a cerințelor de examen (încadrare, temă, personaj, structură, eseu) ca matrice operă × cerință, apoi liste.

**Hero.** Un card mare „Continuă” în stânga și, pentru un vizitator nou, „Începe cu Ion”.

**Opere.** Tabel/matrice cu stare per operă (neînceput / în lucru / terminat).

**Progres.** Este elementul central.

**Avantaje.** Foarte clară pentru elevii care revin; sprijină obiceiul de studiu; folosește date reale.
**Dezavantaje.** Pentru un vizitator nou (cazul principal al homepage-ului), panoul este gol: pagina ar fi cea mai slabă exact la prima vizită. Progresul există doar local, per set de exerciții, fără o vedere agregată (ar fi nevoie de cod nou care citește mai multe chei, fără a schimba structura salvată). Riscă să promită mai mult decât oferă (platforma nu are conturi sau statistici). Este cea mai generică dintre cele trei, adică exact ce vrem să evităm.

## 4. Recomandare

**Direcția A („Caietul”)**, cu două împrumuturi cu rol clar delimitat:

- din **B**: coperțile operelor folosesc ilustrațiile și culorile deja existente, ca să ofere variație vizuală în secțiunea de opere, fără a pierde cuprinsul editorial. La început, versiunea simplă: miniatura ilustrației (decupată pe 16:10, ca acum) în fiecare rând;
- din **C**: doar banda „Continuă”, vizibilă doar când există progres salvat.

**De ce:**

1. **Este singura direcție care iese din registrul „SaaS generic” fără să trădeze produsul.** Produsul este despre citit și despre a scrie, iar tipografia și hârtia sunt limbajul acestor lucruri.
2. **Transformă cel mai mare avantaj al platformei într-un element vizual:** separarea dintre fapt, interpretare și cerință oficială (§2.8). Specimenul din hero face acest avantaj imposibil de ratat și îl face real, nu declarativ.
3. **Se potrivește publicului**: elevi de liceu, dar cu lecții serioase. Editorialul este matur fără a fi corporatist și nu este copilăresc.
4. **Folosește ce avem deja**: ilustrații, culori, etichete, numere verificate. Nu cere conținut nou.
5. **Rezolvă problemele concrete** din §2: hero-ul gol (specimen), lista alfabetică (grupare pe genuri), lipsa de afordanță (rânduri cu săgeată și detalii), ritmul monoton (secțiuni cu forme diferite), lipsa de legătură cu lecțiile.
6. **Riscul principal este controlabil:** schimbarea tipografiei și a paletei se poate limita la homepage prin jetoane noi, fără a atinge lecțiile, iar extinderea la restul site-ului se decide separat.

B ar fi alegerea cea mai sigură, dar cea mai puțin distinctivă fără o tipografie proprie. C ar fi cea mai slabă pentru prima vizită.

## 5. Propunere de structură pentru noul homepage

Presupune direcția A. Textele sunt provizorii și se supun regulilor din CLAUDE.md: fără afirmații neverificate; numerele (19 opere, 266 exerciții) trebuie să fie calculate din date, nu scrise de mână, ca să nu se învechească.

### 5.1 Header
- Logo (monograma, puțin mai mare) + „BAC Simplu”.
- Linkuri: „Opere”, „Cum arată o lecție”, „Surse”.
- Comutator de temă.
- Pe mobil: logo, „Opere” și comutatorul. Meniul rămâne fără sertar, pentru că sunt puține linkuri.

### 5.2 Hero (copertă)
- Kicker scurt: „Bacalaureat · Limba și literatura română”.
- H1 „Română, pas cu pas.” în serif, 64–88 px pe desktop, 40 px pe mobil.
- Paragraf de maximum două rânduri.
- CTA principal „Începe cu o operă” (spre grupa de opere) și un link secundar discret „Vezi cum arată o lecție” (spre specimen).
- Dreapta (desktop) / sub text (mobil): **specimenul**: o „pagină” cu un fragment real din „Ion”, eticheta „Cerință oficială”, sursa cu pagina. Sub el, un rând de trei chipuri cu etichetele sistemului („Despre roman”, „Interpretare”, „Recomandare”), cu explicația într-o propoziție: „Fiecare afirmație din lecții e marcată: text, interpretare sau cerință oficială.”
- Banda „Continuă” (doar la utilizatori cu progres), sub hero, pe toată lățimea.

### 5.3 Cifrele verificate (bandă îngustă)
- „19 opere · 266 exerciții · surse oficiale citate cu pagină” (primele două calculate; al treilea doar dacă se confirmă, vezi §6).
- Fără superlative și fără „sute de elevi”: nu există date despre utilizatori.

### 5.4 Operele (secțiunea centrală)
- Titlu: „Alege o operă”.
- Patru grupe: **Proză** (8), **Poezie** (6), **Teatru** (3), **Critică și teorie literară** (2).
- Fiecare grupă: titlu de grupă în serif; rânduri cu miniatura ilustrației, titlul corect (cu ghilimelele reparate), autorul, „Teorie · 15 exerciții”, o săgeată și starea (Draft).
- Desktop: 2 coloane de rânduri pe grupă. Mobil: rânduri pe o coloană, cu grupele pliabile (prima deschisă).
- Grupările sunt de navigare, nu oficiale: se definesc într-o hartă separată în `lib/site/`, nu în lecții.

### 5.5 „Cum arată o lecție” (specimen extins)
- O pagină dintr-o lecție, în două fragmente: o cerință oficială cu sursa și o interpretare marcată. Explică de ce există etichetele.
- Este înlocuirea pentru cardurile „Cum funcționează”. Cei trei pași (teorie, exerciții, verificare) rămân ca o linie scurtă dedesubt, în rând, fără carduri.

### 5.6 „Stadiul conținutului”
- Un bloc sobru, cu chip-ul „Draft – în curs de verificare” și o propoziție: lecțiile sunt verificate pe text și pe documente oficiale, dar nu au fost validate de un profesor. Link spre `/romana/opere`.
- Onestitatea devine element de design, nu notă de subsol.

### 5.7 Subsol
- Nume + slogan, linkuri (Opere, Surse, Stadiul conținutului), mențiunea despre documentele oficiale folosite, mențiunea că imaginile unor lecții sunt generate cu AI.

## 6. Ce trebuie decis sau verificat înainte de implementare

1. **Direcția** (A recomandată) și, dacă A, dacă tipografia nouă se aplică doar homepage-ului sau tuturor paginilor.
2. **Fontul:** test de randare pentru `ș ț ă â î` (comma-below), greutatea fișierelor și contrastul în ambele teme.
3. **Specimenul din hero** trebuie să citeze textual din lecție (fără parafrază) și să păstreze eticheta și sursa exacte. Se ia din `content/romana/opere/ion.mdx`, secțiunea 1.
4. **Cifra „surse oficiale cu pagină”** se afirmă doar după o verificare pe toate cele 19 lecții; până atunci, doar numărul de opere și de exerciții.
5. **Gruparea pe genuri** este o propunere de navigare. Încadrarea (de exemplu „Scrisoarea III” la poezie, „Ultima noapte…” la proză) trebuie confirmată de tine.
6. **Defectul `shortTitle`** (ghilimele lipsă la „Moromeții” și „Sincronismul”) se corectează în același lot, pentru că afectează direct homepage-ul și breadcrumb-urile.
7. **Banda „Continuă”** citește chei `localStorage` existente; nu schimbă structura salvată. Necesită o componentă client și stare goală corectă (fără sărituri la hidratare).
8. **Imaginea unor lecții este generată cu AI** (portretele din „Ion”): dacă apar pe homepage, trebuie marcate ca atare; termenii de utilizare ai instrumentului nu au fost verificați.

## 7. Componente existente

### Se reutilizează
- `SiteHeader` și `SiteFooter` (se adaptează, structura rămâne).
- `ThemeToggle`, `lib/site/theme.ts` (temă și cheia `bac-simplu-tema` neschimbate).
- `BrandMark` și `lib/site/brand.ts`.
- `INTRO_IDENTITIES` și componentele `Art` din `components/lesson/intro/intro-art.tsx`: sursa pentru miniaturile operelor și pentru culoarea fiecărei opere.
- `LABEL_CHIP` și `components/lesson/label-styles.ts`: chip-urile de etichetă din specimen.
- `DraftBadge`.
- `getAllOperaMeta()` și `LESSON_INTROS` (genul, specia și lead-ul fiecărei opere).
- `lib/exercises/registry.ts` (numărul de exerciții per operă) și `session-storage.ts` (`sessionStorageKey`, `restoreSession`) pentru banda „Continuă”.
- Jetonii de culoare din `app/globals.css`: se extind, nu se înlocuiesc, pentru ca tema închisă și restul site-ului să rămână coerente.
- `Breadcrumb` și `ArrowRightIcon`/`BookIcon`.

### Se refac
- `app/page.tsx`: toată compoziția (hero, secțiunile).
- Secțiunea „Operele din platformă” (lista alfabetică) și cardurile „Cum funcționează”.
- `lib/site/home.ts`: se adaugă harta de grupare pe genuri, textele noi și cifrele calculate.
- `SiteFooter` (linkuri, surse, stadiu).
- `shortTitle()` (corectarea ghilimelelor).

### Componente noi probabile
- `HeroSpecimen`, `OperaRow`, `OperaGroup`, `ContinueStrip` (client), `ContentStatusNote`.
- Încărcarea fontului serif în `app/layout.tsx` (prin `next/font/google`, fără dependențe noi).

### Neatinse
- Lecțiile, exercițiile, rutele, `proxy.ts`, logica de salvare, conținutul literar.

## 8. Risc și ordine propusă (doar orientativ, după aprobare)

1. Decizia de direcție + test de font pe diacritice.
2. Jetoane noi (hârtie/cerneală) aplicate doar homepage-ului; verificare în ambele teme.
3. Hero + specimen.
4. Secțiunea de opere (grupare, rânduri, miniaturi) + corectarea `shortTitle`.
5. Specimenul extins, stadiul conținutului, subsolul.
6. Banda „Continuă”.
7. Verificare: lint, TypeScript, teste, build, browser la 1440/768/390 în ambele teme, depășire orizontală, tastatură și focus.
