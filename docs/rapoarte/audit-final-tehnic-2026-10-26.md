# Audit tehnic final: BAC Simplu

- **Data:** 2026-10-26.
- **Realizat de:** Claude (asistent AI). Este un audit tehnic, **nu o validare didactică**.
- **Tip:** doar analiză. Nu a fost modificat cod, nu s-au instalat dependențe, nu s-a făcut commit sau push. Singurul fișier creat în proiect este acest raport.
- **Statusul lecțiilor:** toate cele cinci au `status: "draft-neverificat"` în MDX, iar pagina afișează insigna „Draft – în curs de verificare”. Nu există nicio validare documentată de un profesor. Faptul că testele tehnice trec **nu** schimbă acest statut.

## 1. Starea repository-ului

| Verificare | Rezultat |
|---|---|
| Branch | `main` |
| Ultimul commit | `9e9d3da` (Merge branch 'main' of `SilviuCristian45/bac-simplu`), 2026-10-26 20:35 |
| `git status --short` la început | gol (fără modificări locale) |
| `git status --short` după build, teste și verificări în browser | gol |

## 2. Comenzi executate și rezultate

| Comandă | Rezultat |
|---|---|
| `npm run test:exercises` | **130 din 130 teste trecute**, 24 de suite, 0 eșuate, 0 sărite (~1,8 s) |
| `npx tsc --noEmit --incremental false` | fără erori (cod de ieșire 0). `package.json` nu are script pentru TypeScript, așa că am rulat `tsc` direct; `--incremental false` evită rescrierea `tsconfig.tsbuildinfo` |
| `npm run lint` (`eslint`) | fără erori și fără avertismente |
| `npm run build` (`next build`, Next 16.4.3, Turbopack) | reușit; „Running TypeScript” fără erori; 17 pagini generate (inclusiv `/_not-found`) |
| `next start -p 3199` + `curl` pe cele 17 rute de mai jos | 200 pe paginile existente, 404 pe cele inexistente |
| Script Node (`fetch`) peste cele 12 pagini | 0 linkuri interne invalide, 0 ancore fără țintă, 0 reziduuri MDX în textul vizibil, câte un `<h1>`, `lang="ro"`, `<title>` și `description` pe fiecare |
| Chrome 155 headless (CDP), 12 pagini × 4 lățimi (320, 390, 768, 1280) × 2 teme (luminoasă, întunecată) = 96 de încărcări | 0 erori sau avertismente în consolă, 0 excepții JavaScript, 0 răspunsuri HTTP ≥ 400, 0 scroll orizontal, 0 elemente care ies din viewport; insigna de draft prezentă pe toate lecțiile |
| Chrome headless, flux de exerciții pe cele 5 opere (390 px) | vezi §4 |

Scripturile de verificare sunt în directorul temporar al sesiunii, nu în proiect.

Rute verificate prin HTTP:

| Rută | Cod |
|---|---|
| `/`, `/romana/opere` | 200 |
| `/romana/opere/{ion, moara-cu-noroc, povestea-lui-harap-alb, alexandru-lapusneanul, enigma-otiliei}` | 200 |
| `/romana/opere/{…}/exercitii` (aceleași cinci) | 200 |
| `/romana/opere/nu-exista`, `/romana/opere/nu-exista/exercitii`, `/nimic`, `/romana`, `/exercitii` | 404 |

## 3. Cele cinci opere

| Operă | Lecție | Exerciții | Draft vizibil | Erori consolă | Linkuri / ancore | MDX nerandat |
|---|---|---|---|---|---|---|
| Ion | 200 | 200 | da | 0 | 0 invalide | nu am găsit |
| Moara cu noroc | 200 | 200 | da | 0 | 0 invalide | nu am găsit |
| Povestea lui Harap-Alb | 200 | 200 | da | 0 | 0 invalide | nu am găsit |
| Alexandru Lăpușneanul | 200 | 200 | da | 0 | 0 invalide | nu am găsit |
| Enigma Otiliei | 200 | 200 | da | 0 | 0 invalide | nu am găsit |

Catalogul `/romana/opere` listează cele cinci opere. „Nu am găsit” reziduuri MDX înseamnă că în HTML-ul generat nu apar `import`, `export const`, tag-uri cu majusculă sau acolade rămase în text; nu este o citire a fiecărei pagini de către un om.

## 4. Progres și exerciții fără cont și fără backend

**Concluzie:** funcționează conform arhitecturii. Nu există conturi, bază de date sau serviciu extern.

- **Parcurs testat pe fiecare operă** (profil curat, 390 px): am șters `localStorage`, am deschis exercițiile, am ales prima variantă, am apăsat „Verifică răspunsul”, am primit feedback (corect sau greșit), am reîncărcat pagina.
- După reîncărcare, toate cele 5 seturi au afișat „Verificate: 1 din N” (N = 12, 12, 16, 16, 16) și mesajul „Ai continuat sesiunea salvată: 1 exercițiu verificat.” Fără erori în consolă.
- **Chei de stocare separate**, câte una pe operă: `bac-simplu:exercitii:romana/<slug>`.
- **Răspunsurile corecte nu sunt în HTML-ul paginii de exerciții** înainte de verificare (căutare după câmpurile de răspuns și explicație în `/ion/exercitii`: 0 potriviri). Corectarea se face într-o **server action** (`lib/exercises/actions.ts`), fără stare stocată pe server.
- **Nuanță importantă:** „fără backend” înseamnă fără bază de date și fără cont, dar **verificarea unui răspuns cere ca serverul Next.js să ruleze**. Site-ul nu este un export static; fără server, elevul vede „Răspunsul nu a putut fi verificat…”. Mesajul de eroare există în cod, dar **nu am testat scenariul offline**.
- **Nu am testat**: parcursul complet al unui set, rezumatul final, „← Anterior” și modificarea răspunsului (acoperite de rapoartele `audit-exercitii-*`), limitele de stocare, modul privat.

## 5. Probleme găsite, după severitate

Nu am găsit **defecte critice sau majore de natură tehnică**. Mai jos, ce este nou față de rapoartele existente (N) și ce era deja cunoscut (C).

### Blocante pentru publicare (conținut, nu cod)

| # | Problemă | N/C |
|---|---|---|
| 1 | **Nicio lecție nu are validare de către un profesor.** Toate cele cinci sunt `draft-neverificat`; rapoartele de audit o spun explicit („Nu a existat validare de către un profesor”). Subsolul site-ului spune „conținutul este verificat treptat”, ceea ce poate fi citit ca mai mult decât este adevărat (vezi #5) | C (nou: observația despre subsol) |
| 2 | **Documentarea surselor are lacune declarate:** edițiile-sursă de pe Wikisource nu sunt indicate (Moara cu noroc, Harap-Alb, Lăpușneanul); „Enigma Otiliei” nu a fost citit integral (doar cap. I, XX și pasajele citate) și are o ediție, iar statutul legal al scanării folosite este incert; programa nu este în `references/` (Enigma: programa școlară; Lăpușneanul și Harap-Alb: programa 2014 citită din copii, nu de pe edu.ro) | C |
| 3 | **Fraza-proverb din „Moara cu noroc” (§3.2)** nu a fost găsită în nicio ediție consultată | C |

### Medii

| # | Problemă | N/C |
|---|---|---|
| 4 | **„Ion”: etichete suprapuse pe telefon** în figurile 5 și 8 (și la 1280 px în figura 5), raportate în `verificare-browser-moara-cu-noroc`. **Nu le-am remăsurat**: verificarea mea a căutat doar depășiri orizontale, nu suprapuneri de etichete | C, neremăsurat |
| 5 | **Formulare din subsol:** „Platforma este în dezvoltare, iar conținutul este verificat treptat” (`components/site/site-footer.tsx`). Cu cinci lecții `draft-neverificat`, mesajul nu spune clar că **niciuna nu e încă validată**. Insigna de pe fiecare lecție compensează parțial | N |
| 6 | **Verificarea răspunsurilor depinde de server** (vezi §4): dacă platforma ajunge pe găzduire statică sau elevul pierde conexiunea, exercițiile nu pot fi verificate. Decizie de arhitectură de confirmat, nu defect | N |

### Minore

| # | Problemă | N/C |
|---|---|---|
| 7 | Scorul exercițiilor poate fi falsificat editând `localStorage`; rezumatul spune „Rezultatul nu este o notă” | C |
| 8 | Răspunsurile quiz-urilor **din lecții** sunt în codul clientului (verificări în timpul lecturii, fără scor); răspunsurile exercițiilor nu | C |
| 9 | Butonul „⇅ Altă ordine a reperelor” (`components/lesson/interactive/essay-plan.tsx`) schimbă conținutul fără să expună starea prin `aria-pressed`; raportat ca nemodificat. Nu am reverificat codul | C |
| 10 | `package.json` nu are script pentru TypeScript (`typecheck`); verificarea rulează doar indirect prin `next build` | N |
| 11 | `next.config.ts` conține `experimental.agentFeedback: true` și `allowedDevOrigins: ['172.29.0.1']`, opțiuni de dezvoltare. Nu le-am evaluat impactul în producție | N, de confirmat |
| 12 | `public/` conține doar fișierele SVG implicite din create-next-app (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`). Nu am verificat dacă sunt folosite | N |
| 13 | Raportul `verificare-browser-enigma-otiliei` spune că build-ul include „`/exercitii`”; ruta `/exercitii` returnează 404. Probabil se referă la `/romana/opere/enigma-otiliei/exercitii`; este o scăpare de redactare | N |
| 14 | Verificarea automată a răspunsurilor scurte nu înțelege negațiile (limită cunoscută, afișată în interfață) | C |

## 6. Verificări deja acoperite de rapoartele existente (`docs/rapoarte/`)

Nu le-am repetat în profunzime; le-am confirmat doar în măsura din §2–§4.

| Subiect | Rapoarte |
|---|---|
| Citate, surse, pagini și conținutul fiecărei lecții | `audit-ion-2026-10-25`, `…-runda2`, `audit-moara-cu-noroc-…`, `audit-povestea-lui-harap-alb-…`, `audit-alexandru-lapusneanul-…`, `audit-enigma-otiliei-…`, `documentare-enigma-otiliei-…` |
| Exerciții: o singură variantă corectă, feedback, distractori, regula „primul răspuns verificat”, răspunsuri scurte | `audit-exercitii-{ion, moara-cu-noroc, povestea-lui-harap-alb, alexandru-lapusneanul, enigma-otiliei}-…` |
| Parcurs în browser (figuri, quiz-uri, tastatură, teme, contrast, 320–1280 px, `localStorage`) | `verificare-browser-{moara-cu-noroc, povestea-lui-harap-alb, alexandru-lapusneanul, enigma-otiliei}-…` |

**Lacune de acoperire:** pentru „Ion” nu există un raport `verificare-browser-ion`; cele trei rapoarte despre „Ion” sunt de conținut și de exerciții. Parcursul interactiv din browser pentru „Ion” apare doar ca regresie în rapoartele celorlalte opere.

## 7. Ce trebuie reparat înainte de publicare

1. **Validare de către un profesor de română** pentru fiecare lecție și set de exerciții. Până atunci, statutul rămâne `draft-neverificat` și insigna rămâne vizibilă.
2. **Clarificarea mesajului din subsol** (#5), astfel încât să nu sugereze că ceva este deja verificat. Decizie de redactare, pentru care nu am propus text.
3. **Remăsurarea etichetelor din „Ion”** (#4, figurile 5 și 8) pe telefon și corectarea, dacă problema persistă.
4. **Completarea documentării surselor** (#2): edițiile-sursă, programa oficială în `references/`, citirea integrală sau declararea explicită a limitelor pentru „Enigma Otiliei”, clarificarea statutului legal al scanării.
5. **Rezolvarea frazei negăsite** din „Moara cu noroc” (#3): sursă sau eliminare.
6. **Decizia privind găzduirea** (#6): serverul Next trebuie să ruleze pentru ca exercițiile să funcționeze.

## 8. Ce rămâne de verificat manual

1. Citirea lecțiilor și a explicațiilor din exerciții de către un om, pe fond (literar și didactic).
2. Telefon real, Safari și Firefox (am folosit doar Chrome headless), cititoare de ecran, zoom 200%, butonul de comutare a temei, `prefers-reduced-motion`.
3. Suprapunerea etichetelor în figurile SVG interactive la toate lățimile, în ambele teme, pentru toate cele cinci lecții (vezi #4).
4. Parcursul complet al unui set de exerciții pe fiecare operă, cu rezumat final, „← Anterior” și modificarea răspunsului.
5. Comportamentul fără conexiune la server (#6) și cu `localStorage` blocat sau plin.
6. Textul subsolului și al insignei de draft: sunt suficient de clare pentru un elev?
7. `npm audit` și vulnerabilitățile dependențelor: **nu am rulat**, pentru că cere acces la rețea și nu era în cerere.

## 9. Limite ale acestui audit

- Verificările în browser au folosit un browser real, controlat prin script. **Nu s-a uitat nimeni la capturile de ecran**; nu am făcut capturi în acest audit.
- Fluxul de exerciții a fost testat doar pe **primul exercițiu** al fiecărui set.
- „Fără probleme” înseamnă „fără probleme detectate de scripturile și comenzile de mai sus”, nu corectitudine literară sau didactică.
