# CLAUDE.md — Platformă de pregătire pentru Bacalaureat

## 1. Scopul proiectului

Construim o platformă web modernă pentru pregătirea elevilor de clasa a XII-a pentru examenul de Bacalaureat din România.

Materii planificate:
- Limba și literatura română
- Matematică
- Informatică

Prima etapă a proiectului se concentrează exclusiv pe Limba și literatura română, începând cu romanul „Ion” de Liviu Rebreanu.

Obiectivul este să oferim materiale gratuite, corecte, ușor de înțeles și utile pentru pregătirea examenului.

## 2. Stack tehnologic

Tehnologii principale:
- Next.js cu App Router
- React
- TypeScript
- Tailwind CSS
- MDX pentru lecții și materiale educaționale
- JSON sau module TypeScript pentru seturile de exerciții
- Zod pentru validarea datelor, dacă este necesar

Pentru funcționalități viitoare:
- KaTeX pentru formule matematice
- Mermaid.js pentru diagrame de algoritmi
- Supabase pentru autentificare și salvarea progresului, numai când este necesar

Nu adăuga biblioteci sau servicii externe fără un motiv concret.

Folosește versiunile compatibile cu proiectul existent. Nu actualiza dependențele majore fără să verifici impactul.

## 3. Reguli de dezvoltare

- Folosește TypeScript și evită `any`.
- Scrie componente mici, reutilizabile și ușor de testat.
- Separă conținutul educațional de logica aplicației și de componentele vizuale.
- Respectă structura existentă a proiectului.
- Folosește convențiile Next.js App Router.
- Evită duplicarea codului.
- Folosește semantic HTML și respectă accesibilitatea.
- Tratează toate paginile ca mobile-first.
- Gestionează corect stările de încărcare, eroare și conținut lipsă.
- Nu implementa funcționalități care nu au fost solicitate.
- Nu modifica fișiere fără legătură cu sarcina curentă.
- Nu șterge sau suprascrie conținut existent fără să verifici impactul.

Înainte de modificări importante, inspectează codul existent și explică pe scurt abordarea.

După modificări, rulează verificările disponibile: lint, TypeScript și testele relevante. Raportează erorile pe care nu le-ai putut rezolva.

## 4. Organizarea conținutului

Directorul `references/bac-romana/` conține documente de referință, inclusiv programe, subiecte și bareme oficiale.

Aceste documente sunt surse pentru dezvoltare și verificare. Nu le publica automat pe site.

Directorul `content/romana/` conține materialele educaționale pregătite pentru publicare.

Separă clar:
- sursele oficiale;
- notițele de analiză;
- conținutul educațional redactat pentru platformă;
- exercițiile interactive;
- componentele UI.

Folosește identificatori stabili pentru opere, lecții și întrebări.

## 5. Reguli obligatorii pentru conținutul BAC

Corectitudinea educațională este prioritară față de viteza de generare.

- Nu inventa cerințe oficiale, bareme, punctaje, citate sau surse.
- Nu prezenta recomandările pedagogice drept cerințe oficiale.
- Verifică informațiile despre programă și evaluare în documentele oficiale disponibile.
- Indică sursa, anul, sesiunea și pagina atunci când sunt disponibile.
- Nu pretinde că ai verificat o sursă dacă nu ai putut să o accesezi.
- Dacă informațiile sunt insuficiente sau contradictorii, semnalează problema.
- Nu inventa citate din opere literare. Verifică formularea și proveniența citatelor înainte de publicare.
- Redactează explicații și eseuri originale; nu copia integral materiale de pe alte site-uri sau din culegeri.
- Nu marca un material ca verificat doar pentru că a fost generat de AI.
- Păstrează conținutul în limba română, cu diacritice corecte și terminologie literară adecvată.

## 6. Structura lecțiilor de Română

O lecție despre o operă literară poate conține, în funcție de relevanță:

1. Fișă rapidă de recapitulare.
2. Autorul și contextul literar.
3. Încadrarea într-un curent sau într-o perioadă literară.
4. Specia și particularitățile operei.
5. Tema și viziunea despre lume.
6. Titlul și semnificațiile sale.
7. Structura, compoziția și tehnicile narative sau lirice.
8. Personajele și relațiile dintre acestea.
9. Secvențe relevante și interpretarea lor.
10. Plan de eseu și model de redactare, când este cazul.
11. Checklist pentru autoevaluare.
12. Exerciții de verificare și aplicare.

Nu forța toate secțiunile în fiecare lecție. Structura trebuie să respecte particularitățile operei și cerința de examen analizată.

## 7. Exerciții interactive

Fiecare exercițiu trebuie să aibă, în funcție de tip:
- identificator unic;
- enunț clar;
- variante de răspuns, dacă este grilă;
- răspuns corect sau criterii de evaluare;
- explicație pentru răspuns;
- dificultate;
- subiect și capitol;
- sursă sau justificare pedagogică.

Pentru grile:
- evită întrebările ambigue;
- oferă un singur răspuns corect, dacă întrebarea este declarată cu răspuns unic;
- oferă feedback explicativ, inclusiv când elevul răspunde greșit.

Nu prezenta evaluarea automată a unui eseu ca echivalent garantat al evaluării oficiale.

Validează structura datelor și testează logica de corectare.

## 8. Design și experiența utilizatorului

Platforma trebuie să fie:
- simplă și intuitivă;
- rapidă;
- responsive, în special pe telefon;
- accesibilă;
- ușor de citit pentru sesiuni lungi de studiu.

Folosește:
- ierarhie vizuală clară;
- titluri și subtitluri descriptive;
- paragrafe scurte;
- liste și scheme unde ajută învățarea;
- progres vizibil în quiz-uri;
- feedback clar după răspuns;
- stări vizuale distincte pentru răspuns corect și greșit.

Evită animațiile excesive, elementele decorative inutile și interfețele aglomerate.

Nu sacrifica lizibilitatea în favoarea aspectului vizual.

## 9. Performanță, SEO și securitate

- Preferă randarea statică pentru conținutul educațional care nu depinde de utilizator.
- Folosește metadate relevante pentru fiecare pagină.
- Păstrează URL-urile descriptive și stabile.
- Evită JavaScript inutil pe paginile de lecții.
- Nu expune secrete sau chei private în codul clientului.
- Nu introduce autentificare sau colectare de date personale fără necesitate.
- Dacă vor fi adăugate conturi, aplică verificări de autorizare pe server.
- Nu executa cod trimis de utilizatori pe serverul principal.

## 10. Testare și criterii de finalizare

O sarcină nu este considerată completă doar pentru că interfața arată corect.

Verifică, unde este relevant:
- TypeScript fără erori;
- lint fără erori noi;
- validitatea datelor;
- corectitudinea răspunsurilor din quiz;
- afișarea corectă a diacriticelor;
- afișarea pe mobil și desktop;
- navigarea și linkurile;
- stările de eroare și conținutul lipsă.

Nu afirma că testele au trecut dacă nu le-ai rulat.

La finalul fiecărei sarcini, oferă un rezumat al modificărilor, fișierele afectate, testele executate și problemele rămase.

## 11. Reguli de colaborare

Lucrează incremental.

Înainte de o sarcină:
1. Inspectează fișierele relevante.
2. Identifică dependențele și constrângerile.
3. Propune o soluție simplă.

După implementare:
1. Verifică modificările.
2. Rulează testele relevante.
3. Raportează rezultatul.

Dacă lipsește o informație importantă, cere clarificări în loc să faci presupuneri cu impact major.

Prioritatea proiectului în etapa curentă este să realizăm o lecție completă, verificabilă și funcțională pentru „Ion” de Liviu Rebreanu, cu secțiunile Teorie și Exerciții, înainte de extinderea la alte opere sau materii.