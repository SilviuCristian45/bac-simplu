import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția despre fragmentul lui Lovinescu (content/romana/opere/sincronismul-lovinescu.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Citatele au fost verificate pe transcrierea Wikisource a fragmentului
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const sincronismulExercises: ExerciseSet = {
  key: "romana/sincronismul-lovinescu",
  subject: "romana",
  work: "sincronismul-lovinescu",
  title: "„Sincronismul” în „Istoria literaturii române contemporane” de E. Lovinescu",
  exercises: [
    {
      id: "sincronism-mc-definitie",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum a fost denumit, în fragment, principiul prin care civilizația românească s-a format „prin importație integrală”?",
      options: [
        { id: "a", text: "Tradiționalism." },
        { id: "b", text: "Impresionism." },
        { id: "c", text: "Avangardism." },
        { id: "d", text: "Sincronism." },
      ],
      correctOptionId: "d",
      explanation:
        "Textul spune: „Principiul acestei fatalități sociologice, criticul l-a denumit sincronism”. Impresionismul este metoda criticii lui din prima epocă, iar avangardismul este un fel de modernism susținut de reviste ca Contimporanul.",
      lessonSection: { id: "4-1-sincronismul", label: "4.1. Sincronismul" },
      basis: "Lecția, 4.1; fragmentul, „Critica modernistă”.",
    },
    {
      id: "sincronism-mc-sburatorul",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Când a apărut revista Sburătorul, după fragment?",
      options: [
        { id: "a", text: "La 19 aprilie 1919." },
        { id: "b", text: "În 1923, în același an cu Contimporanul." },
        { id: "c", text: "În 1906, odată cu volumul Pași pe nisip." },
        { id: "d", text: "În 1929, odată cu Mutația valorilor estetice." },
      ],
      correctOptionId: "a",
      explanation:
        "Fragmentul spune: „apărut la 19 aprilie 1919”. 1923 este anul Contimporanului, 1906 anul lucrării Pași pe nisip, iar 1929 anul lucrării Mutația valorilor estetice, după fragment.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1; fragmentul, „Modernismul”.",
    },
    {
      id: "sincronism-mc-formula",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce spune textul despre imitație la popoarele tinere?",
      options: [
        { id: "a", text: "Că imitația este o greșeală gravă de evitat mereu." },
        { id: "b", text: "Că imitația este prima formă a originalității." },
        { id: "c", text: "Că imitația nu apare niciodată." },
        { id: "d", text: "Că imitația înlocuiește complet tradiția." },
      ],
      correctOptionId: "b",
      explanation:
        "Textul spune: „la popoarele tinere imitația este prima formă a originalității”. Adaugă că imitația brută nu aduce progres, ci doar adaptarea ei, deci nu este nici „greșeală de evitat”, nici înlocuire a tradiției.",
      lessonSection: { id: "4-2-imitatia-si-originalitatea", label: "4.2. Imitația și originalitatea" },
      basis: "Lecția, 4.2; fragmentul.",
    },
    {
      id: "sincronism-mc-avangarda",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce revistă este dată în fragment ca exemplu de modernism de avangardă?",
      options: [
        { id: "a", text: "Convorbiri literare, revista junimistă din Iași." },
        { id: "b", text: "Sămănătorul, revista lui Iorga și Coșbuc." },
        { id: "c", text: "Contimporanul, condusă de I. Vinea." },
        { id: "d", text: "Viața românească, revista poporanistă din Iași." },
      ],
      correctOptionId: "c",
      explanation:
        "Fragmentul numește Contimporanul (1923), al poetului I. Vinea, ca reprezentant al avangardismului. Convorbiri literare și Sămănătorul apar în alte contexte, iar Viața românească nu este pomenită în secțiune.",
      lessonSection: { id: "4-3-modernismul-teoretic-si-modernismul-de-avangarda", label: "4.3. Modernismul teoretic și modernismul de avangardă" },
      basis: "Lecția, 4.3; fragmentul.",
    },
    {
      id: "sincronism-mc-teoretic",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum numește autorul modernismul lui Lovinescu și al Sburătorului?",
      options: [
        { id: "a", text: "Un modernism revoluționar, făcut de artiști în reviste." },
        { id: "b", text: "Un modernism teoretic, bazat pe psihologie socială." },
        { id: "c", text: "Un modernism de avangardă experimentală și radicală." },
        { id: "d", text: "Un modernism moralizator." },
      ],
      correctOptionId: "b",
      explanation:
        "Textul îl numește „încă un modernism teoretic”, bazat pe „o lege de psihologie socială”. Modernismul revoluționar și experimental este al avangardei (Contimporanul), nu al criticului.",
      lessonSection: { id: "4-3-modernismul-teoretic-si-modernismul-de-avangarda", label: "4.3. Modernismul teoretic și modernismul de avangardă" },
      basis: "Lecția, 4.3; fragmentul.",
    },
    {
      id: "sincronism-mc-final",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum încheie fragmentul portretul criticului?",
      options: [
        { id: "a", text: "Ca pe un dogmatic de la început." },
        { id: "b", text: "Ca pe un critic care a renunțat la orice sistem." },
        { id: "c", text: "De la scepticism la un sistem cu aparențe de dogmatism." },
        { id: "d", text: "Ca pe un poet al avangardei." },
      ],
      correctOptionId: "c",
      explanation:
        "Concluzia spune că criticul, „plecând de la un scepticism ostentativ și minor”, a ajuns să și-l organizeze „într-un sistem cu aparențe de dogmatism”. Celelalte variante contrazic textul.",
      lessonSection: { id: "5-1-cum-este-construit-fragmentul", label: "5.1. Cum este construit fragmentul" },
      basis: "Lecția, 5.1; fragmentul.",
    },
    {
      id: "sincronism-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în fragment?",
      options: [
        { id: "a", text: "Sburătorul a apărut la 19 aprilie 1919." },
        { id: "b", text: "Textul definește sincronismul prin „importație integrală”." },
        { id: "c", text: "Textul recomandă imitarea Occidentului." },
        { id: "d", text: "Autorul vorbește despre „criticul” la persoana a treia." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte enunțuri se verifică în fragment. Textul spune că imitația există și devine valoare prin adaptare, nu că ar trebui recomandată; a spune că o recomandă este o lectură nesusținută de text.",
      lessonSection: { id: "7-fapt-si-interpretare", label: "7. Fapt și interpretare" },
      basis: "Lecția, 4.2 și 7.",
    },
    {
      id: "sincronism-af-programa",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Subiectele 2026 din proiect cer eseuri despre texte critice, precum cel al lui Lovinescu.",
      correct: false,
      explanation:
        "Fals. Subiectul al III-lea din subiectele 2026 din proiect cere eseuri despre texte literare. Fragmentul lui Lovinescu este util pentru contextul interbelic și pentru analiza unui text argumentativ.",
      lessonSection: { id: "1-ce-trebuie-sa-stii-despre-examen", label: "1. Ce trebuie să știi despre examen" },
      basis: "Lecția, 1; subiectele 2026 din references/bac-romana/.",
    },
    {
      id: "sincronism-af-mutatia",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția a citit lucrarea „Mutația valorilor estetice” în întregime.",
      correct: false,
      explanation:
        "Fals. Lecția analizează doar fragmentul din „Evoluția ideologiei literare” și spune că lucrarea „Mutația valorilor estetice” nu a fost citită; prezintă doar descrierea din fragment.",
      lessonSection: { id: "10-surse-si-limite", label: "10. Surse și limite" },
      basis: "Lecția, începutul și 10.",
    },
    {
      id: "sincronism-af-volum",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Fragmentul și nota lui nu se potrivesc în privința numărului volumului „Mutația valorilor estetice”.",
      correct: true,
      explanation:
        "Adevărat: textul spune „volumul al VI-lea”, iar nota de subsol listează lucrarea ca al cincilea volum; lecția avertizează să nu folosești numărul volumului fără verificare.",
      lessonSection: { id: "4-4-mutatia-valorilor-estetice", label: "4.4. Mutația valorilor estetice" },
      basis: "Lecția, 4.4; fragmentul și nota lui.",
    },
    {
      id: "sincronism-ra-concept",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește principiul formării civilizației românești prin importație, în fragment? Scrie un cuvânt.",
      grading: { mode: "keywords", requiredGroups: [["sincronism", "sincronismul", "sincronismului"]] },
      modelAnswer: "Sincronismul.",
      maxLength: 100,
      explanation: "Principiul este denumit sincronism; răspunsul poate avea articolul hotărât.",
      lessonSection: { id: "4-1-sincronismul", label: "4.1. Sincronismul" },
      basis: "Lecția, 4.1.",
    },
    {
      id: "sincronism-ra-comentariu",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, formula „la popoarele tinere imitația este prima formă a originalității”, legând-o de ideea de sincronism. Separă ce spune textul de ce crezi tu.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am explicat ideea: imitația este o etapă, devine originalitate prin adaptare.",
          "Am legat formula de sincronism (formare prin importație).",
          "Am numit procedeul (formulă memorabilă, definiție) și am arătat cum susține teza.",
          "Am separat clar opinia mea de ce spune textul și am argumentat-o.",
        ],
      },
      modelAnswer:
        "Textul spune că la popoarele tinere imitația este prima formă a originalității și adaugă că progresul începe când imitația este adaptată (fapte). Formula explică sincronismul: civilizația s-a format prin importație. Opinie: ideea este convingătoare pentru un moment de formare, dar textul nu arată aici cum se trece de la imitație la originalitate.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun explică ideea, o leagă de sincronism, numește procedeul și separă opinia proprie de text. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "4-2-imitatia-si-originalitatea", label: "4.2. Imitația și originalitatea" },
      basis: "Lecția, 4.1, 4.2 și 6.",
    },
  ],
};
