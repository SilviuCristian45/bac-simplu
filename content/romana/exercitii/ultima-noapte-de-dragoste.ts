import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția despre romanul lui Camil Petrescu (content/romana/opere/ultima-noapte-de-dragoste.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Romanul nu a fost citit pentru lecție; faptele provin dintr-o sursă secundară
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar exercițiile nu conțin citate din roman.
 * Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const ultimaNoapteExercises: ExerciseSet = {
  key: "romana/ultima-noapte-de-dragoste",
  subject: "romana",
  work: "ultima-noapte-de-dragoste",
  title: "„Ultima noapte de dragoste, întâia noapte de război” de Camil Petrescu",
  exercises: [
    {
      id: "ultima-mc-parti",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Din câte părți este alcătuit romanul, după sursa consultată?",
      options: [
        { id: "a", text: "Dintr-o singură parte." },
        { id: "b", text: "Din două părți." },
        { id: "c", text: "Din trei părți." },
        { id: "d", text: "Din patru părți." },
      ],
      correctOptionId: "b",
      explanation:
        "Romanul are două părți, care corespund celor două părți ale titlului: „Ultima noapte de dragoste” și „Întâia noapte de război”. Celelalte numere nu corespund.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 4.2; sursa: ro.wikipedia.org.",
    },
    {
      id: "ultima-mc-narator",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine povestește întâmplările romanului?",
      options: [
        { id: "a", text: "Un narator exterior, omniscient." },
        { id: "b", text: "Ela, soția lui Ștefan, în scrisori către el." },
        { id: "c", text: "Unchiul Nae, în conversațiile cu Ștefan." },
        { id: "d", text: "Ștefan Gheorghidiu, personajul principal." },
      ],
      correctOptionId: "d",
      explanation:
        "După sursa consultată, povestirea este la persoana I, de către Ștefan Gheorghidiu. Ela și unchiul Nae sunt personaje văzute prin ochii lui.",
      lessonSection: { id: "5-4-perspectiva-narativa", label: "5.4. Perspectiva narativă" },
      basis: "Lecția, 5.4; sursa secundară.",
    },
    {
      id: "ultima-mc-fabrica",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine îl convinge pe Ștefan să cumpere o fabrică metalurgică?",
      options: [
        { id: "a", text: "Unchiul Nae Gheorghidiu." },
        { id: "b", text: "Ela, soția lui Ștefan." },
        { id: "c", text: "Domnul Grigoriade, bănuitul amant." },
        { id: "d", text: "Anișoara, verișoara lui Ștefan." },
      ],
      correctOptionId: "a",
      explanation:
        "Unchiul Nae îl convinge pe Ștefan să cumpere fabrica, împreună cu Tănase Vasilescu Lumânăraru, și o salvează cumpărând un depozit de fier la Galați. Ceilalți nu au legătură cu fabrica.",
      lessonSection: { id: "6-2-afacerea-cu-fabrica", label: "6.2. Afacerea cu fabrica" },
      basis: "Lecția, 6.2; sursa secundară.",
    },
    {
      id: "ultima-mc-anisoara",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce face Ștefan după ce găsește scrisoarea Anișoarei?",
      options: [
        { id: "a", text: "Merge la Câmpulung, unde se află Ela." },
        { id: "b", text: "Pleacă la București ca să-l caute pe Grigoriade." },
        { id: "c", text: "Se întoarce pe front, fără să mai vorbească cu nimeni." },
        { id: "d", text: "Îi scrie Elei ca să-i ceară iertare." },
      ],
      correctOptionId: "a",
      explanation:
        "Ștefan obține permisie și merge la Câmpulung, unde Ela îi cere să-i transfere o parte din avere; el o părăsește din nou. Celelalte variante nu corespund rezumatului.",
      lessonSection: { id: "6-4-scrisoarea-anisoarei-si-campulungul", label: "6.4. Scrisoarea Anișoarei și Câmpulungul" },
      basis: "Lecția, 6.4; sursa secundară.",
    },
    {
      id: "ultima-mc-razboi",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce i se întâmplă lui Ștefan la Măgura, din cauza comenzii incompetente?",
      options: [
        { id: "a", text: "Este promovat pentru curaj în luptă." },
        { id: "b", text: "Este luat drept dușman de ai lui." },
        { id: "c", text: "Este rănit de o schijă." },
        { id: "d", text: "Își pierde batalionul într-o ceață deasă." },
      ],
      correctOptionId: "b",
      explanation:
        "Sursa spune că, din cauza comenzii incompetente, Ștefan este luat drept soldat inamic și făcut prizonier de ai lui. Rănirea are loc mai târziu, la Cohalm.",
      lessonSection: { id: "6-5-razboiul-magura-olt-cohalm", label: "6.5. Războiul: Măgura, Olt, Cohalm" },
      basis: "Lecția, 6.5; sursa secundară.",
    },
    {
      id: "ultima-mc-ela",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "De ce nu se poate stabili sigur, din roman, dacă Ela l-a înșelat?",
      options: [
        { id: "a", text: "Pentru că Ela mărturisește la final." },
        { id: "b", text: "Pentru că ea apare doar în relatarea lui Ștefan." },
        { id: "c", text: "Pentru că romanul nu o pomenește în a doua parte." },
        { id: "d", text: "Pentru că Grigoriade neagă totul în public." },
      ],
      correctOptionId: "b",
      explanation:
        "Povestirea este la persoana I, a lui Ștefan: ceea ce știm despre Ela vine din relatarea lui. De aceea orice concluzie despre vinovăția ei este interpretare. Celelalte variante nu apar în rezumat.",
      lessonSection: { id: "7-3-ela", label: "7.3. Ela" },
      basis: "Lecția, 6.3 și 7.3; sursa secundară.",
    },
    {
      id: "ultima-mc-tip",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce tipuri de roman interbelic numește programa, la care lecția leagă acest roman?",
      options: [
        { id: "a", text: "Romanul istoric și romanul de aventuri exotice." },
        { id: "b", text: "Romanul policier și romanul-frescă." },
        { id: "c", text: "Romanul rural și romanul fantastic." },
        { id: "d", text: "Romanul psihologic și romanul experienței." },
      ],
      correctOptionId: "d",
      explanation:
        "Programa numește „tipuri de roman: psihologic și al experienței” pentru romanul interbelic. Celelalte perechi nu apar în textul programei citat.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1; programa 2014, p. 5.",
    },
    {
      id: "ultima-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt din roman?",
      options: [
        { id: "a", text: "Romanul are două părți." },
        { id: "b", text: "Ștefan se desparte de Ela la final." },
        { id: "c", text: "Ela l-a înșelat pe Ștefan." },
        { id: "d", text: "Ștefan este rănit la Cohalm." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte enunțuri sunt fapte din acțiune, după sursă. Că Ela l-a înșelat este o concluzie care nu poate fi stabilită sigur: gelozia lui Ștefan este prezentată ca certitudine a lui, nu ca fapt dovedit.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 6.3 și 8.",
    },
    {
      id: "ultima-af-an",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția conține citate din roman, verificate pe text.",
      correct: false,
      explanation:
        "Fals. Romanul nu a fost citit pentru lecție, iar lecția nu conține citate din roman; recomandă folosirea citatelor din ediția proprie.",
      lessonSection: { id: "11-surse-si-limite", label: "11. Surse și limite" },
      basis: "Lecția, începutul și 11.",
    },
    {
      id: "ultima-af-barem",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Subiectul al III-lea din Varianta 4 (real/tehnologic) permite un text narativ al lui Camil Petrescu.",
      correct: true,
      explanation:
        "Adevărat: cerința este despre „un text narativ aparținând lui Liviu Rebreanu sau lui Camil Petrescu”. Cerința numește autorii, nu romanele.",
      lessonSection: { id: "1-ce-trebuie-sa-stii-despre-examen", label: "1. Ce trebuie să știi despre examen" },
      basis: "Lecția, 1; Subiect Varianta 4, p. 2.",
    },
    {
      id: "ultima-af-final",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "La final, Ștefan rămâne cu Ela și se mută cu ea la București.",
      correct: false,
      explanation:
        "Fals. După sursă, la întoarcere Ștefan se desparte de Ela, lăsându-i banii și proprietățile rămase.",
      lessonSection: { id: "6-6-intoarcerea-la-bucuresti", label: "6.6. Întoarcerea la București" },
      basis: "Lecția, 6.6; sursa secundară.",
    },
    {
      id: "ultima-af-modern",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Sursa consultată descrie romanul explicit ca „modernist” și îl compară cu alți scriitori.",
      correct: false,
      explanation:
        "Fals. Sursa îl numește roman interbelic „subiectiv psihologic” și nu folosește eticheta „modernist” și nu face comparații; lecția precizează acest lucru și cere verificarea în manual.",
      lessonSection: { id: "3-2-cum-este-descris-romanul-in-sursa", label: "3.2. Cum este descris romanul în sursă" },
      basis: "Lecția, 3.2 și 11.",
    },
    {
      id: "ultima-ra-narator",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește personajul-narator al romanului?",
      grading: { mode: "keywords", requiredGroups: [["stefan", "gheorghidiu"]] },
      modelAnswer: "Ștefan Gheorghidiu.",
      maxLength: 100,
      explanation: "Naratorul este Ștefan Gheorghidiu; răspunsul poate conține prenumele sau numele.",
      lessonSection: { id: "7-2-stefan-gheorghidiu", label: "7.2. Ștefan Gheorghidiu" },
      basis: "Lecția, 5.4 și 7.2; sursa secundară.",
    },
    {
      id: "ultima-ra-secventa",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, secvența războiului de la Măgura, legând-o de tema romanului. Separă ce se întâmplă de ceea ce interpretezi. Nu folosi citate pe care nu le-ai verificat în ediția ta.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat faptele: din cauza comenzii incompetente, Ștefan este luat drept dușman și făcut prizonier de ai lui.",
          "Am legat secvența de tema războiului ca experiență absurdă.",
          "Am formulat o interpretare (de exemplu, contrastul dintre experiența reală și imaginea oficială a războiului).",
          "Dacă am folosit un citat, l-am verificat în ediția mea.",
        ],
      },
      modelAnswer:
        "La Măgura, din cauza comenzii incompetente, Ștefan este luat drept soldat inamic și făcut prizonier de ai lui (fapt). Episodul arată războiul ca experiență absurdă: ordinele și confuzia contează mai mult decât curajul. Interpretare: scena susține tema contrastului dintre ce se spune despre război și ce se trăiește.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, leagă secvența de temă și folosește doar citate verificate. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-5-razboiul-magura-olt-cohalm", label: "6.5. Războiul: Măgura, Olt, Cohalm" },
      basis: "Lecția, 6.5 și 4.1; sursa secundară.",
    },
  ],
};
