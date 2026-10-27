import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția despre studiul lui Maiorescu (content/romana/opere/in-contra-directiei-de-astazi.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Citatele au fost verificate pe transcrierea Wikisource a studiului
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const inContraDirectieiExercises: ExerciseSet = {
  key: "romana/in-contra-directiei-de-astazi",
  subject: "romana",
  work: "in-contra-directiei-de-astazi",
  title: "„În contra direcției de astăzi în cultura română” de Titu Maiorescu",
  exercises: [
    {
      id: "maiorescu-mc-revista",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "În ce revistă a apărut studiul, potrivit notei transcrierii?",
      options: [
        { id: "a", text: "Transilvania, revista criticată în studiu." },
        { id: "b", text: "Familia." },
        { id: "c", text: "Dacia literară." },
        { id: "d", text: "Convorbiri literare." },
      ],
      correctOptionId: "d",
      explanation:
        "Nota transcrierii spune: „publicat în Convorbiri literare, No.19. - Anul II. Iassi, 1 Decembrie 1868”. Transilvania și Familia sunt revistele criticate în text, iar Dacia literară nu este pomenită.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 12; nota transcrierii Wikisource.",
    },
    {
      id: "maiorescu-mc-viciu",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Care este, după Maiorescu, „viciul radical” al culturii vremii?",
      options: [
        { id: "a", text: "Neadevărul." },
        { id: "b", text: "Lipsa școlilor." },
        { id: "c", text: "Numărul prea mare de reviste." },
        { id: "d", text: "Influența culturii occidentale în sine." },
      ],
      correctOptionId: "a",
      explanation:
        "Textul spune că viciul din cultura vremii „este neadevărul”, în aspirări, politică, poezie și gramatică. Maiorescu nu critică existența școlilor sau a revistelor, ci faptul că sunt forme fără fond, și nici cultura occidentală ca atare.",
      lessonSection: { id: "4-1-neadevarul", label: "4.1. Neadevărul" },
      basis: "Lecția, 4.1.",
    },
    {
      id: "maiorescu-mc-proverb",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce proverb citează revista Transilvania, în răspunsul ei?",
      options: [
        { id: "a", text: "Satul arde, baba se piaptănă." },
        { id: "b", text: "Capul plecat sabia nu-l taie." },
        { id: "c", text: "Cine se scoală de dimineață, departe ajunge." },
        { id: "d", text: "Tot răul spre bine." },
      ],
      correctOptionId: "a",
      explanation:
        "Revista numește criticile lui Maiorescu „pieptenare de babă”, citând proverbul „satul arde, baba se piaptănă”. Celelalte proverbe nu apar în text.",
      lessonSection: { id: "5-1-cum-este-construit-studiul", label: "5.1. Cum este construit studiul" },
      basis: "Lecția, 5.1.",
    },
    {
      id: "maiorescu-mc-exemple",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care dintre aceste lucrări este dată ca exemplu de „falsificare” la începuturile culturii moderne?",
      options: [
        { id: "a", text: "Letopisețul lui Ion Neculce." },
        { id: "b", text: "Lexiconul de la Buda." },
        { id: "c", text: "Gramatica lui Heliade Rădulescu." },
        { id: "d", text: "Cronica lui Miron Costin." },
      ],
      correctOptionId: "b",
      explanation:
        "Maiorescu discută „Lexiconul de la Buda” (1825), care derivă cuvinte românești din latină în moduri forțate. Celelalte lucrări nu sunt pomenite în text.",
      lessonSection: { id: "6-1-exemplele-despre-inceputuri", label: "6.1. Exemplele despre începuturi" },
      basis: "Lecția, 6.1.",
    },
    {
      id: "maiorescu-mc-enumerare",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce procedeu ilustrează „Înainte de a avea artiști trebuincioși, am făcut conservatorul de muzică; înainte de a avea un singur pictor de valoare, am făcut școala de bele-arte”?",
      options: [
        { id: "a", text: "Întrebare retorică, cu răspuns implicit." },
        { id: "b", text: "Concesie, urmată de o respingere." },
        { id: "c", text: "Enumerare cu repetiție." },
        { id: "d", text: "Citat latin, cu notă a editorului." },
      ],
      correctOptionId: "c",
      explanation:
        "Formula „înainte de a avea... am făcut” se repetă pentru mai multe instituții: enumerare cu repetiție. Nu este întrebare, concesie sau citat latin.",
      lessonSection: { id: "6-2-enumerarea-formelor", label: "6.2. Enumerarea formelor" },
      basis: "Lecția, 5.2 și 6.2.",
    },
    {
      id: "maiorescu-mc-taran",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce rol are, în argument, afirmația că țăranul este „singura clasă reală”?",
      options: [
        { id: "a", text: "Arată că țăranul trebuie ales în Academie, ca reprezentant al poporului." },
        { id: "b", text: "Susține că țăranii au creat singuri forme culturale noi, mai valoroase." },
        { id: "c", text: "Arată că lipsa fondului are un cost social: țăranul plătește „edificiul fictiv”." },
        { id: "d", text: "Cere desființarea tuturor școlilor din sate, ca pe niște cheltuieli inutile." },
      ],
      correctOptionId: "c",
      explanation:
        "Maiorescu spune că din „sudoarea” țăranului se susține „edificiul fictiv, ce-l numim cultură română”; argumentul dă greutate socială tezei. Textul nu cere desființarea școlilor sătești și nu propune alegerea țăranilor în Academie.",
      lessonSection: { id: "6-3-consecinta-pentru-taran", label: "6.3. Consecința pentru țăran" },
      basis: "Lecția, 6.3.",
    },
    {
      id: "maiorescu-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în text?",
      options: [
        { id: "a", text: "Maiorescu dă ca exemple Petru Maior și Lexiconul de la Buda." },
        { id: "b", text: "Studiul începe cu un răspuns al revistei Transilvania." },
        { id: "c", text: "Structura merge de la un caz mic la o idee generală." },
        { id: "d", text: "Textul spune „cu o cultură falsă nu poate trăi un popor”." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte trei enunțuri se verifică în text. Descrierea structurii ca drum de la particular la general este o lectură a lecției, care trebuie argumentată.",
      lessonSection: { id: "9-fapt-si-interpretare", label: "9. Fapt și interpretare" },
      basis: "Lecția, 5.1 și 9.",
    },
    {
      id: "maiorescu-mc-concluzie",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care este concluzia studiului, după lecție?",
      options: [
        { id: "a", text: "Imitarea modelelor străine este singura cale către progres rapid." },
        { id: "b", text: "Revistele literare trebuie desființate." },
        { id: "c", text: "Țăranii trebuie scutiți de impozite." },
        { id: "d", text: "O cultură falsă nu poate dăinui: un popor nu poate trăi cu ea." },
      ],
      correctOptionId: "d",
      explanation:
        "Ultima frază spune că „cu o cultură falsă nu poate trăi un popor”. Textul critică imitarea formelor fără fond, nu cere desființarea revistelor și nu vorbește despre impozite.",
      lessonSection: { id: "6-4-concluzia", label: "6.4. Concluzia" },
      basis: "Lecția, 6.4.",
    },
    {
      id: "maiorescu-af-an",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Studiul a apărut în Convorbiri literare, în anul 1868.",
      correct: true,
      explanation: "Adevărat: nota transcrierii dă data de 1 decembrie 1868 (anul II al revistei).",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; nota transcrierii Wikisource.",
    },
    {
      id: "maiorescu-af-programa",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Subiectele 2026 din proiect cer eseuri despre texte critice, precum studiul lui Maiorescu.",
      correct: false,
      explanation:
        "Fals. Subiectul al III-lea din subiectele 2026 din proiect cere eseuri despre texte literare (narative, poetice), nu critice. Studiul lui Maiorescu este util pentru contextul cultural și pentru analiza unui text argumentativ.",
      lessonSection: { id: "1-ce-trebuie-sa-stii-despre-examen", label: "1. Ce trebuie să știi despre examen" },
      basis: "Lecția, 1; subiectele 2026 din references/bac-romana/.",
    },
    {
      id: "maiorescu-af-junime",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția afirmă ca fapt, cu certitudine, că „junimii” din „datoria impusă junimii române” desemnează tineretul.",
      correct: false,
      explanation:
        "Fals. Lecția spune că „pare să însemne” tineretul și prezintă asta ca lectură a contextului, nu ca fapt sigur.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1.",
    },
    {
      id: "maiorescu-ra-teza",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește viciul culturii vremii, după Maiorescu? Scrie un cuvânt.",
      grading: { mode: "keywords", requiredGroups: [["neadevar", "neadevarul"]] },
      modelAnswer: "Neadevărul.",
      maxLength: 100,
      explanation: "Maiorescu spune că viciul culturii vremii „este neadevărul”, în toate formele de manifestare a spiritului public.",
      lessonSection: { id: "4-1-neadevarul", label: "4.1. Neadevărul" },
      basis: "Lecția, 4.1.",
    },
    {
      id: "maiorescu-ra-comentariu",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, ideea din fraza „mai bine să nu facem o pinacotecă deloc decât să o facem lipsită de arta frumoasă”. Separă ce spune textul de ce crezi tu.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am explicat ideea: o formă fără conținut este mai dăunătoare decât lipsa ei.",
          "Am legat fraza de teza formă fără fond.",
          "Am numit procedeul (exemplu, argument prin consecință) și am arătat cum susține teza.",
          "Am separat clar opinia mea de ce spune textul și am argumentat-o.",
        ],
      },
      modelAnswer:
        "Maiorescu spune că este mai bine să nu existe o pinacotecă decât una lipsită de artă frumoasă (fapt). Exemplul ilustrează teza că forma fără fond este dăunătoare, pentru că discreditează forma. Opinie: argumentul este convingător pentru instituțiile culturale, dar se poate discuta dacă o formă nu poate fi umplută cu conținut în timp.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun explică ideea, o leagă de teză, numește procedeul și separă opinia proprie de text. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "4-2-forma-fara-fond", label: "4.2. Forma fără fond" },
      basis: "Lecția, 4.2 și 8.",
    },
  ],
};
