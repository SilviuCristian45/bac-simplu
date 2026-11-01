# Decizii rămase după corecturile din audit

Starea: branch-ul `fix/audit-literar` conține toate cele 30 de corecturi din `audit-literar.md` (tabelul (a)). Nu este integrat în `main`, nu s-a făcut push sau deploy. Build și lint trec, `test:exercises` 424/0.

## Decizii luate (2026-11-01)

- **Integrare:** `fix/audit-literar` se integrează în `main`. Publicarea se face cu mențiunea din subsol: lecțiile nu înlocuiesc textul operei, citește opera și consultă un profesor de română. Etichetele „în curs de verificare" rămân.
- **Iona:** ecoul rămâne (itemul `iona-mc-ecou` cere acum explicit „după prefața autorului"); mutismul pescarilor nu mai apare în lista de personaje (rămâne ca fapt din didascalii, itemul `iona-af-distributie`); lecția nu mai atribuie piesei datele (1965/1968/1969/1970), „porumbel", interpretările Ecoului și „au trecut ani"; itemul „data" din quiz a fost scos.
- **Leoaica tânără, iubirea:** de completat cu poezia întreagă după ediția stabilită de proprietar. **Rămâne deschis**: ediția și textul trebuie furnizate; până atunci textele „primele patru versuri" nu s-au modificat.
- **Sincronismul:** marcat în lecție ca „NU este gata"; anul Contimporanului nu mai e afirmat nicăieri.
- **Moara cu noroc:** nu se mai afirmă „structura circulară"; ex. 10 vorbește acum despre „finalul confirmă avertismentul" ca interpretare; lecția spune „simetrie între început și sfârșit".
- **Scrisoarea III:** rămâne „285 de versuri în transcrierea folosită" (cu sursa indicată). **Harap-Alb:** neschimbat.
- **Plumb:** lecția 4.3 nu mai dă vântului o acțiune; spune doar că în text apar vântul și scârțâitul coroanelor.
- **Exerciții (c), decise de Claude:** Scrisoarea III ex. 12 reformulat („sultanul care îl înfruntă pe Mircea"); explicația Baltagul `baltagul-mc-miorita` corectată (cheia neschimbată); Luceafărul ex. 1 precizează „la prima apariție". **Exercițiile „meta" nu s-au modificat**: rămân de decis cu un profesor (marcare „despre lecție" sau reformulare despre operă).
- **Rămân neatinse (de dat mai departe unui profesor):** Enigma Otiliei (divorțul), Camil Petrescu (fabrica/Galați), Lăpușneanul 175, Ultima noapte de dragoste (Cohalm și distractorul din `ultima-mc-razboi`), variantele de text din Leoaica, `test:site` (CRLF).

## 1. Publicare

- [ ] **Integrăm `fix/audit-literar` în `main`?** Tehnic e gata.
- [ ] **Publicăm site-ul acum?** Lecțiile sunt marcate `draft-neverificat`, iar multe spun că opera nu a fost citită. Dacă publici, lasă etichetele de „în curs de verificare" vizibile și nu marca nimic „verificat" fără un profesor de română.
- [ ] **`test:site`: 12–14 teste pică și pe codul original.** Testele caută `\n`, iar fișierele `.mdx` sunt CRLF în worktree-ul de pe Windows. De confirmat pe un build Linux (de ex. Vercel) sau cu `core.autocrlf` corectat. Nu s-au modificat teste.

## 2. Iona

- [ ] **Ecoul și „doar Io"** (`opere/iona.mdx` 114, `opere/iona-interactiv.ts` 98, ex. `iona-mc-ecou`, audit (c) #17). În piesă ecoul nu răspunde deloc („Io… na…", apoi „Gata și cu ecoul meu"); „doar Io" vine din prefață. Variante: enunț „după prefața autorului", acceptarea ambelor răspunsuri (c și d) sau schimbarea cheii.
- [ ] **Enunțul itemului `iona-af-distributie`** spune „în distribuția piesei … figuri mute". Mutismul e în didascalia din tabloul III, nu în lista de personaje. Îl lăsăm așa sau scoatem „în distribuția piesei"?

## 3. Leoaica tânără, iubirea

- [ ] Textele „primele patru versuri" (`leoaica-tanara-iubirea.mdx` 23, 40, 190, 192; nota din `…-interactiv.ts` 17) nu mai corespund numerotării (fragmentul acoperă acum versurile 1–3 și 5–6, versul 4 lipsește). Completăm lecția cu poezia întreagă (24 de versuri) după ediția folosită? Trebuie stabilită ediția.
- [ ] Variante de text de confirmat pe manual (audit (b) #1): „mi-ai sărit" / „mi-a sărit", „mai demult" / „mai de mult", „azi, de față" / „azi de față".

## 4. Probleme „posibile" din audit, (b) – de verificat de un om

- [ ] **Sincronismul:** „Contimporanul (1923)" vs. iunie 1922 (monoskop). Textul lui Lovinescu nu a fost accesibil.
- [ ] **Moara cu noroc ex. 10:** „structura nuvelei este circulară" marcat FALS la fapt/interpretare. Manualele o dau ca trăsătură standard.
- [ ] **Scrisoarea III:** „285 de versuri" marcat „fapt"; ediția Creția are 287.
- [x] **Enigma Otiliei — rezolvat 2026-11-01 pe PDF-ul din `references/bac-romana/`** (divorțul și al doilea bărbat sunt acum în lecție). Textul inițial: căsătoria cu Pascalopol dată ca fapt final, dar în epilog Otilia divorțează și se mărită cu un conte; lecțiile omit divorțul. Lecția 5.4 spune „soția altcuiva".
- [ ] **Harap-Alb:** lecția 5.4 spune „la prima probă", iar 5.1 și 7.5 spun „primele două probe" (incomplet, nu fals).
- [x] **Camil Petrescu (rezolvat 2026-11-01 pe EPUB-ul din `references/bac-romana/`; „depozitul de fier la Galați” nu e în text și a fost scos; afirmația biografică din Wikipedia rămâne neverificată):** planul cu fabrica/depozitul de fier la Galați nu s-a putut confirma (OCR fără diacritice); afirmația biografică despre „prima parte ficțiune" vine din Wikipedia.
- [ ] **Iona:** datele 1965/1968/1969/1970, „porumbel", „Ecoul" ca naiadă/proiecție/figură divină și „în tabloul IV au trecut ani" nu se pot verifica pe text (audit (b) #24). Recomandarea auditului: lecția să nu mai atribuie piesei aceste detalii.
- [ ] **Plumb:** lecția 4.3 („vântul scârțâie coroanele") dă vântului o acțiune pe care textul n-o spune (audit (b) #11).
- [ ] **Lăpușneanul:** `alexandru-lapusneanul.mdx` 175, „Nuvela se încheie tot cu numele lui", ușor imprecis (propoziția cu numele e penultima).
- [x] **Ultima noapte de dragoste (rezolvat 2026-11-01 pe text: Cohalm reformulat, distractorul `ultima-mc-razboi` e fals pe text; fabrica corectată):** „la Cohalm batalionul este atacat de unguri" (`ultima-noapte-de-dragoste.mdx` 188) nu e acoperit de audit. Distractorul nou din ex. `ultima-mc-razboi` (opt. d: „luat prizonier de armata inamică…") e formulat de Claude și trebuie verificat pe carte.

## 5. Exerciții discutabile, (c) – de decis cu un profesor

Convenția fapt vs. interpretare și încadrarea momentelor subiectului. Cele mai importante:

- [ ] **Scrisoarea III ex. 12:** „Cum se numește sultanul care apare în poem?" Apar doi sultani; cheia acceptă doar Baiazid. Reformulare: „Sultanul care îl înfruntă pe Mircea".
- [ ] **Baltagul `baltagul-mc-miorita`:** explicația spune că opțiunea c contrazice rezumatul, deși lecția o susține (de corectat explicația, nu cheia).
- [ ] **Luceafărul ex. 1:** enunț care nu precizează apariția (prima sau a doua).
- [ ] **Exerciții „meta"** (testează lecția, nu opera): Scrisoarea III ex. 13, Plumb ex. 12, O scrisoare pierdută ex. 13, O noapte furtunoasă ex. 13, Testament ex. 6, 10, 11, Camil Petrescu ex. 9. Le marcăm vizibil ca „despre lecție" sau le reformulăm despre operă?

## 6. Pași de calitate pe termen mediu

- [ ] Confruntarea citatelor de poezie cu o ediție tipărită (tiparul din Testament și Scrisoarea III arată că lecțiile se pot abate de la ediția citată).
- [ ] Notarea ediției folosite și a deciziei pentru fiecare punct din (a) și (b), înainte de validarea de către profesor.
- [ ] Salvarea locală a textelor verificate ale operelor (README §7.4).
- [ ] Lacune de conținut: perspectiva narativă și încadrarea școlară la Moromeții și Camil Petrescu; titlul complet „O noapte furtunoasă sau Numărul 9".
- [ ] Anexa 1 din audit are mici greșeli de tipar („brigă", „făță"); la corecturi s-a folosit forma corectă.
