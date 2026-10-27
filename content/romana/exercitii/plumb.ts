import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Plumb” (content/romana/opere/plumb.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Versurile au fost verificate pe ediția digitizată citată în lecție
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const plumbExercises: ExerciseSet = {
  key: "romana/plumb",
  subject: "romana",
  work: "plumb",
  title: "„Plumb” de George Bacovia",
  exercises: [
    {
      id: "plumb-mc-strofe",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Din câte strofe este alcătuită poezia „Plumb”?",
      options: [
        { id: "a", text: "Dintr-o singură strofă de opt versuri." },
        { id: "b", text: "Din două strofe de câte patru versuri." },
        { id: "c", text: "Din trei strofe de câte patru versuri." },
        { id: "d", text: "Din patru strofe de câte două versuri." },
      ],
      correctOptionId: "b",
      explanation:
        "Poezia are opt versuri împărțite în două strofe de câte patru versuri. Celelalte variante nu corespund textului.",
      lessonSection: { id: "5-1-cele-doua-strofe", label: "5.1. Cele două strofe" },
      basis: "Lecția, 2 și 5.1; poezia „Plumb”.",
    },
    {
      id: "plumb-mc-rima",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce fel de rimă are fiecare strofă a poeziei?",
      options: [
        { id: "a", text: "Împerecheată (aabb)." },
        { id: "b", text: "Încrucișată (abab)." },
        { id: "c", text: "Îmbrățișată (abba)." },
        { id: "d", text: "Monorimă (aaaa)." },
      ],
      correctOptionId: "c",
      explanation:
        "Primul și ultimul vers rimează între ele (plumb – plumb), la fel cele din mijloc (vestmânt – vânt; strig – frig): rimă îmbrățișată. Nu este încrucișată (abab) și nici împerecheată (aabb).",
      lessonSection: { id: "5-1-cele-doua-strofe", label: "5.1. Cele două strofe" },
      basis: "Lecția, 2 și 5.1; poezia „Plumb”.",
    },
    {
      id: "plumb-mc-simbol",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Care este cuvântul-simbol care revine în aproape fiecare vers?",
      options: [
        { id: "a", text: "Plumb." },
        { id: "b", text: "Cavou." },
        { id: "c", text: "Vânt." },
        { id: "d", text: "Frig." },
      ],
      correctOptionId: "a",
      explanation:
        "„Plumb” apare de șase ori în opt versuri și este titlul poeziei și al volumului. „Cavou”, „vânt” și „frig” apar o dată fiecare, ca elemente ale decorului.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 2, 3.2 și 4.2; poezia „Plumb”.",
    },
    {
      id: "plumb-mc-persoana",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum se exprimă vorbitorul în poezie?",
      options: [
        { id: "a", text: "La persoana I: „Stam singur în cavou”." },
        { id: "b", text: "La persoana a III-a, ca un narator care nu apare." },
        { id: "c", text: "La persoana a II-a, adresându-se cititorului." },
        { id: "d", text: "Prin dialog între două personaje." },
      ],
      correctOptionId: "a",
      explanation:
        "Poezia folosește persoana I („amorul meu”, „Stam singur”, „am început să-l strig”): este lirism subiectiv. Nu are narator exterior, destinatar explicit sau dialog.",
      lessonSection: { id: "5-3-instantele-comunicarii", label: "5.3. Instanțele comunicării" },
      basis: "Lecția, 5.3; poezia „Plumb”.",
    },
    {
      id: "plumb-mc-aripi",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce arată imaginea „aripile de plumb”, după lecție?",
      options: [
        { id: "a", text: "O imagine contradictorie: aripile sugerează zbor, plumbul greutate." },
        { id: "b", text: "O comparație între păsări și sicrie, făcută cu ajutorul lui „ca”." },
        { id: "c", text: "O hiperbolă care exagerează viteza zborului păsărilor." },
        { id: "d", text: "O personificare a vântului care mișcă coroanele." },
      ],
      correctOptionId: "a",
      explanation:
        "Aripile sugerează zbor, iar plumbul greutate; cei doi termeni se contrazic, iar imaginea poate arăta iubirea care nu mai poate zbura (interpretare). Nu este comparație, hiperbolă sau personificare.",
      lessonSection: { id: "6-3-dormea-intors-amorul-meu-de-plumb", label: "6.3. „Dormea întors amorul meu de plumb”" },
      basis: "Lecția, 6.3 și 7; poezia „Plumb”, strofa a II-a.",
    },
    {
      id: "plumb-mc-curent",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce curent literar enumeră programa pentru perioada de început de secol XX și poate încadra poezia?",
      options: [
        { id: "a", text: "Romantismul pașoptist, exclusiv." },
        { id: "b", text: "Neomodernismul postbelic." },
        { id: "c", text: "Clasicismul iluminist." },
        { id: "d", text: "Simbolismul." },
      ],
      correctOptionId: "d",
      explanation:
        "Programa enumeră „simbolismul” între curentele secolului al XIX-lea – începutul secolului al XX-lea, iar lecția arată trăsături simboliste în poezie (simbol central, muzicalitate, sugestie). Neomodernismul este postbelic, iar celelalte nu se potrivesc cu textul.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1 și 3.2; programa 2014, p. 5.",
    },
    {
      id: "plumb-mc-aer",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în text?",
      options: [
        { id: "a", text: "Poezia este alcătuită din două strofe, de câte patru versuri fiecare." },
        { id: "b", text: "Vorbitorul spune că stă singur în cavou, iar afară era vânt." },
        { id: "c", text: "Aripile de plumb arată iubirea care nu mai poate zbura." },
        { id: "d", text: "Fiecare strofă are rimă îmbrățișată, de tip abba." },
      ],
      correctOptionId: "c",
      explanation:
        "Primul, al doilea și al patrulea enunț se verifică în text. Faptul că aripile de plumb arată iubirea care nu mai poate zbura este o lectură a imaginii, nu o afirmație din poezie.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 6.3 și 8.",
    },
    {
      id: "plumb-mc-tema",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care formulare a temei este susținută de versurile poeziei, după lecție?",
      options: [
        { id: "a", text: "Triumful iubirii asupra morții, prin sacrificiu și credință." },
        { id: "b", text: "Frumusețea naturii în anotimpul toamnei, cu peisaje calme." },
        { id: "c", text: "Singurătatea și moartea iubirii într-o lume funerară." },
        { id: "d", text: "Lupta pentru dreptate socială și pentru drepturile celor săraci." },
      ],
      correctOptionId: "c",
      explanation:
        "Decorul funerar (sicrie, cavou), singurătatea („Stam singur”) și amorul „de plumb” susțin această temă (interpretare). Celelalte teme nu au suport în versuri.",
      lessonSection: { id: "4-1-tema", label: "4.1. Tema" },
      basis: "Lecția, 4.1; poezia „Plumb”.",
    },
    {
      id: "plumb-af-volum",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Poezia „Plumb” deschide volumul cu același titlu, apărut în 1916.",
      correct: true,
      explanation:
        "Adevărat: în ediția folosită, „Plumb” este primul text al volumului din 1916, căruia îi dă titlul; în „Însemnări autobiografice”, poetul spune că poeziile au apărut „sub titlul Plumb, Editura Flacăra, în anul 1916”.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 11; ediția digitizată citată în lecție.",
    },
    {
      id: "plumb-af-dialog",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Poezia conține un dialog între vorbitor și o altă persoană.",
      correct: false,
      explanation:
        "Fals. Vorbitorul își exprimă starea la persoana I și „îl strigă” pe amor, dar replicile nu sunt redate: nu există dialog.",
      lessonSection: { id: "5-3-instantele-comunicarii", label: "5.3. Instanțele comunicării" },
      basis: "Lecția, 5.3; poezia „Plumb”.",
    },
    {
      id: "plumb-af-vasiliu",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Potrivit tabelului cronologic din ediția folosită, poetul s-a născut Gheorghe Vasiliu.",
      correct: true,
      explanation:
        "Adevărat: tabelul cronologic notează, la 1881, nașterea lui Gheorghe Vasiliu; poezia este semnată cu numele George Bacovia. Verifică datele biografice și în manual.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; tabelul cronologic din ediția citată.",
    },
    {
      id: "plumb-af-cavou",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția prezintă ca fapt, verificat în text, că poezia exprimă moartea iubirii.",
      correct: false,
      explanation:
        "Fals. Lecția prezintă „singurătatea și moartea iubirii” ca interpretare a temei, susținută cu imagini din text; poezia nu o spune direct.",
      lessonSection: { id: "4-1-tema", label: "4.1. Tema" },
      basis: "Lecția, 4.1 și 8.",
    },
    {
      id: "plumb-ra-repetitii",
      type: "short-answer",
      difficulty: "usor",
      prompt: "De câte ori apare cuvântul „plumb” în cele opt versuri ale poeziei? Scrie numărul în cifre sau în litere.",
      grading: { mode: "keywords", requiredGroups: [["6", "sase"]] },
      modelAnswer: "De șase ori.",
      maxLength: 100,
      explanation:
        "Cuvântul apare în versurile 1, 2, 4, 5, 6 și 8: „sicriele de plumb”, „flori de plumb”, „coroanele de plumb”, „amorul meu de plumb”, „flori de plumb”, „aripile de plumb”.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 7; poezia „Plumb”.",
    },
    {
      id: "plumb-ra-imagine",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, imaginea „Stam singur în cavou... și era vânt...”, legând-o de tema poeziei. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat ce spune versul: vorbitorul este singur în cavou, iar vântul mișcă coroanele.",
          "Am numit un procedeu (de exemplu, sugestia prin puncte de suspensie sau atmosfera funerară).",
          "Am formulat o interpretare legată de tema singurătății și a morții iubirii.",
          "Am folosit un citat scurt și verificat (de exemplu, „și scârțâiau coroanele de plumb”).",
        ],
      },
      modelAnswer:
        "Vorbitorul stă singur în cavou, iar vântul și coroanele care scârțâie sunt singurele mișcări (fapt). Punctele de suspensie lasă sugestia mai departe, fără să explice. Interpretare: imaginea arată singurătatea și frica într-un spațiu funerar, în sprijinul temei morții iubirii.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă textul de interpretare, numește un procedeu, folosește un citat scurt și leagă imaginea de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-stam-singur-in-cavou-si-era-vant", label: "6.2. „Stam singur în cavou... și era vânt...”" },
      basis: "Lecția, 6.2 și 4.1; poezia „Plumb”, strofa I.",
    },
  ],
};
