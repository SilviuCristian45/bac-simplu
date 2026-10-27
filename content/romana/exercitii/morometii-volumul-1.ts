import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Moromeții” (volumul I) (content/romana/opere/morometii-volumul-1.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Romanul nu a fost citit pentru lecție; faptele provin din surse secundare
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar exercițiile nu conțin citate din roman.
 * Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const morometiiExercises: ExerciseSet = {
  key: "romana/morometii-volumul-1",
  subject: "romana",
  work: "morometii-volumul-1",
  title: "„Moromeții” (volumul I) de Marin Preda",
  exercises: [
    {
      id: "morometii-mc-ani",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "În ce an a apărut volumul I, după sursele consultate?",
      options: [
        { id: "a", text: "1930." },
        { id: "b", text: "1955." },
        { id: "c", text: "1967." },
        { id: "d", text: "1980." },
      ],
      correctOptionId: "b",
      explanation:
        "Volumul I a apărut în 1955, iar volumul al II-lea în 1967. De aceea volumul I nu se încadrează în intervalul 1960–1980 din programă.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 1 și 2; surse: ro.wikipedia.org, en.wikipedia.org.",
    },
    {
      id: "morometii-mc-cina",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Unde stă Ilie Moromete la cină, după materialul profesorului?",
      options: [
        { id: "a", text: "Pe un scaun înalt, în capul mesei, ca stăpânul casei." },
        { id: "b", text: "Pe prispă, afară, cu fața spre drum și spre vecini." },
        { id: "c", text: "Pe jos, lângă sobă, alături de Catrina și de copii." },
        { id: "d", text: "Pe pragul celei de-a doua odăi." },
      ],
      correctOptionId: "d",
      explanation:
        "Ilie stă pe pragul celei de-a doua odăi și îi domină pe toți; fiii cei mari stau în pragul ușii, iar Niculae stă pe jos. Celelalte locuri nu sunt cele descrise.",
      lessonSection: { id: "6-1-cina", label: "6.1. Cina" },
      basis: "Lecția, 6.1; fișa Liceului Haltrich.",
    },
    {
      id: "morometii-mc-satul",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "În ce sat se petrece acțiunea?",
      options: [
        { id: "a", text: "Siliștea-Gumești, în Teleorman." },
        { id: "b", text: "Hanu Ancuței, un han din Moldova." },
        { id: "c", text: "Tarcău, în munții Moldovei, la Dorna." },
        { id: "d", text: "Prislop, un sat de la poalele munților." },
      ],
      correctOptionId: "a",
      explanation:
        "Acțiunea se petrece în satul Siliștea-Gumești din Teleorman (după en.wikipedia.org). Tarcău este satul din „Baltagul”, iar celelalte nu sunt pomenite în sursele consultate.",
      lessonSection: { id: "5-3-timpul-si-spatiul", label: "5.3. Timpul și spațiul" },
      basis: "Lecția, 5.3; sursa: en.wikipedia.org.",
    },
    {
      id: "morometii-mc-poiana",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce se întâmplă în Poiana lui Iocan, după lecție?",
      options: [
        { id: "a", text: "Se țin slujbe religioase în fiecare duminică, la biserică." },
        { id: "b", text: "Oamenii citesc ziarul și comentează politic, cu ironie." },
        { id: "c", text: "Se organizează hora satului, cu lăutari și dansuri." },
        { id: "d", text: "Se strâng taxele pe lanuri, de către perceptor." },
      ],
      correctOptionId: "b",
      explanation:
        "În zilele de sărbătoare sau duminica, Moromete, Cocoșilă și alții se adună în Poiana lui Iocan, citesc ziarul și comentează politic cu ironie și umor. Taxele se discută în altă scenă, iar slujba și hora nu sunt descrise în aceste surse.",
      lessonSection: { id: "6-2-poiana-lui-iocan", label: "6.2. Poiana lui Iocan" },
      basis: "Lecția, 6.2; fișa Liceului Haltrich.",
    },
    {
      id: "morometii-mc-salcam",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum interpretează materialul profesorului tăierea salcâmului?",
      options: [
        { id: "a", text: "Ca pe un gest de bucurie, făcut în cinstea unei sărbători." },
        { id: "b", text: "Ca pe o greșeală fără urmări pentru familie și pentru sat." },
        { id: "c", text: "Ca „începutul sfârșitului”, semn de declin." },
        { id: "d", text: "Ca pe o glumă a copiilor, făcută în timpul serii." },
      ],
      correctOptionId: "c",
      explanation:
        "Materialul consultat citește scena ca „începutul sfârșitului” și ca prim semn al declinului: salcâmul, simbol al stabilității, dispare. Este o interpretare, nu un fapt din text.",
      lessonSection: { id: "6-4-taierea-salcamului", label: "6.4. Tăierea salcâmului" },
      basis: "Lecția, 6.4; fișa Liceului Haltrich.",
    },
    {
      id: "morometii-mc-fuga",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce iau fiii cei mari când fug, după ambele surse?",
      options: [
        { id: "a", text: "Caii și o parte din zestrea fetelor." },
        { id: "b", text: "Banii adunați la seceriș." },
        { id: "c", text: "Câinele familiei, ca să le păzească drumul." },
        { id: "d", text: "Doar hainele, fără nimic altceva." },
      ],
      correctOptionId: "a",
      explanation:
        "Fiii fug cu caii și cu o parte din zestrea fetelor; Moromete vinde apoi din pământ ca să plătească datoriile. Sursele nu pomenesc banii de la seceriș sau un câine.",
      lessonSection: { id: "6-6-bataia-si-fuga-fiilor", label: "6.6. Bătaia și fuga fiilor" },
      basis: "Lecția, 6.6; surse: ro.wikipedia.org și fișa Liceului Haltrich.",
    },
    {
      id: "morometii-mc-niculae",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce face Niculae la serbarea școlară?",
      options: [
        { id: "a", text: "Este pedepsit pentru obrăznicie și trimis la culcare." },
        { id: "b", text: "Ia premiul I, spre uimirea tatălui." },
        { id: "c", text: "Pleacă din sat cu frații lui, spre București." },
        { id: "d", text: "Refuză să mai meargă la școală, de rușine." },
      ],
      correctOptionId: "b",
      explanation:
        "Niculae ia premiul I, iar tatăl, venit întâmplător, este uimit. Nu este pedepsit, nu pleacă cu frații și nu renunță la școală.",
      lessonSection: { id: "6-7-serbarea-scolara", label: "6.7. Serbarea școlară" },
      basis: "Lecția, 6.7; fișa Liceului Haltrich.",
    },
    {
      id: "morometii-mc-programa",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "De ce atrage lecția atenția asupra formulării „un roman scris între 1960–1980” în cazul volumului I?",
      options: [
        { id: "a", text: "Pentru că volumul I este din 1955." },
        { id: "b", text: "Pentru că romanul nu mai este studiat." },
        { id: "c", text: "Pentru că Preda nu este autor canonic." },
        { id: "d", text: "Pentru că volumul I este din 1990." },
      ],
      correctOptionId: "a",
      explanation:
        "Volumul I este din 1955, deci în afara intervalului 1960–1980; volumul al II-lea (1967) se încadrează. Preda este autor canonic, iar volumul I nu este din 1990.",
      lessonSection: { id: "1-ce-trebuie-sa-stii-despre-examen", label: "1. Ce trebuie să știi despre examen" },
      basis: "Lecția, 1; programa 2014, p. 5.",
    },
    {
      id: "morometii-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt din roman (după surse)?",
      options: [
        { id: "a", text: "Moromete taie salcâmul înainte de răsăritul soarelui." },
        { id: "b", text: "Fiii cei mari fug cu caii." },
        { id: "c", text: "Niculae ia premiul I la serbare." },
        { id: "d", text: "Poiana lui Iocan este un „miniparlament sătesc”." },
      ],
      correctOptionId: "d",
      explanation:
        "Celelalte enunțuri sunt fapte din acțiune. Comparația Poienii cu un parlament este o lectură a materialului consultat, care trebuie argumentată.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 6.2 și 8.",
    },
    {
      id: "morometii-af-citate",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția conține citate din roman, confruntate cu o ediție.",
      correct: false,
      explanation:
        "Fals. Romanul nu a fost citit pentru lecție, iar citatele provin din materialul unui profesor, fără confruntare cu o ediție; lecția recomandă folosirea citatelor din ediția proprie.",
      lessonSection: { id: "11-surse-si-limite", label: "11. Surse și limite" },
      basis: "Lecția, începutul și 11.",
    },
    {
      id: "morometii-af-structura",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "După materialul profesorului, volumul I are trei părți.",
      correct: true,
      explanation:
        "Adevărat, după materialul consultat, care menționează „Partea I” și „Partea a III-a”; sursa de pe Wikipedia nu descrie împărțirea, deci verifică în ediția ta.",
      lessonSection: { id: "5-1-structura", label: "5.1. Structura" },
      basis: "Lecția, 5.1; fișa Liceului Haltrich.",
    },
    {
      id: "morometii-af-fii",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Ambele surse consultate dau același număr de fii care fug cu caii.",
      correct: false,
      explanation:
        "Fals. Materialul profesorului îi numește pe Paraschiv și Nilă, iar pagina ro.wikipedia.org vorbește despre toți cei trei fii mai mari; lecția semnalează diferența.",
      lessonSection: { id: "6-6-bataia-si-fuga-fiilor", label: "6.6. Bătaia și fuga fiilor" },
      basis: "Lecția, 6.6 și 11.",
    },
    {
      id: "morometii-af-perspectiva",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția stabilește perspectiva narativă a romanului și o prezintă ca fapt verificat.",
      correct: false,
      explanation:
        "Fals. Lecția spune că perspectiva narativă nu este stabilită în sursele consultate și recomandă verificarea în manual și în text.",
      lessonSection: { id: "5-4-perspectiva-narativa", label: "5.4. Perspectiva narativă" },
      basis: "Lecția, 5.4 și 11.",
    },
    {
      id: "morometii-ra-protagonist",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește protagonistul romanului, capul familiei Moromete?",
      grading: { mode: "keywords", requiredGroups: [["ilie"], ["moromete"]] },
      modelAnswer: "Ilie Moromete.",
      maxLength: 100,
      explanation: "Protagonistul este Ilie Moromete, patriarhul familiei; răspunsul trebuie să conțină ambele cuvinte din nume.",
      lessonSection: { id: "7-personajele", label: "7. Personajele" },
      basis: "Lecția, 2 și 7; surse secundare.",
    },
    {
      id: "morometii-ra-secventa",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, scena cinei, legând-o de tema romanului. Separă ce se întâmplă de ceea ce interpretezi. Nu folosi citate pe care nu le-ai verificat în ediția ta.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat faptele: așezarea familiei la masa joasă; Ilie pe pragul celei de-a doua odăi; fiii cei mari în pragul ușii; Niculae pe jos.",
          "Am legat scena de tema autorității tatălui și a conflictelor din familie.",
          "Am formulat o interpretare (de exemplu, așezarea anticipează conflictul).",
          "Dacă am folosit un citat, l-am verificat în ediția mea.",
        ],
      },
      modelAnswer:
        "Familia ia masa pe o masă joasă și rotundă, Ilie stă pe pragul celei de-a doua odăi și îi domină pe toți, fiii cei mari stau în pragul ușii, iar Niculae stă pe jos (fapte). Interpretare: așezarea la masă arată autoritatea tatălui și anticipează conflictele din familie, pe care romanul le urmărește în volum.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, leagă scena de temă și folosește doar citate verificate. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-1-cina", label: "6.1. Cina" },
      basis: "Lecția, 6.1 și 4.1; fișa Liceului Haltrich.",
    },
  ],
};
