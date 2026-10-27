import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Leoaică tânără, iubirea” (content/romana/opere/leoaica-tanara-iubirea.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Cele patru versuri au fost găsite citate într-un articol științific; textul
 * integral nu a fost consultat (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const leoaicaExercises: ExerciseSet = {
  key: "romana/leoaica-tanara-iubirea",
  subject: "romana",
  work: "leoaica-tanara-iubirea",
  title: "„Leoaică tânără, iubirea” de Nichita Stănescu",
  exercises: [
    {
      id: "leoaica-mc-metafora",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce este numit „leoaică tânără” în primul vers?",
      options: [
        { id: "a", text: "Natura." },
        { id: "b", text: "Iubirea." },
        { id: "c", text: "Moartea." },
        { id: "d", text: "Poezia." },
      ],
      correctOptionId: "b",
      explanation:
        "Primul vers spune: „Leoaică tânără, iubirea mi-a sărit în față”. Iubirea este numită leoaică; natura, moartea și poezia nu apar în fragment.",
      lessonSection: { id: "6-1-leoaica-tanara-iubirea", label: "6.1. „Leoaică tânără, iubirea”" },
      basis: "Lecția, 5.1 și 6.1; sursa: Crișan (2020).",
    },
    {
      id: "leoaica-mc-persoana",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "La ce persoană se exprimă vorbitorul în fragment?",
      options: [
        { id: "a", text: "La persoana a III-a, ca un narator exterior." },
        { id: "b", text: "La persoana I: „mi-a sărit”, „m-a mușcat”." },
        { id: "c", text: "La persoana a II-a, adresându-se iubitei." },
        { id: "d", text: "Prin dialog între doi vorbitori." },
      ],
      correctOptionId: "b",
      explanation:
        "Verbele cu pronumele „mi-”, „m-” arată persoana I: lirism subiectiv. Nu există narator exterior, adresare directă sau dialog în fragmentul citat.",
      lessonSection: { id: "5-2-instantele-comunicarii", label: "5.2. Instanțele comunicării" },
      basis: "Lecția, 5.2.",
    },
    {
      id: "leoaica-mc-repetitie",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce cuvânt se repetă la sfârșitul versurilor 1, 3 și 4 din fragment?",
      options: [
        { id: "a", text: "Iubirea." },
        { id: "b", text: "Față." },
        { id: "c", text: "Colții." },
        { id: "d", text: "Pândise." },
      ],
      correctOptionId: "b",
      explanation:
        "„Față” încheie versurile 1 („mi-a sărit în față”), 3 („înfipt în față”) și 4 („azi de față”). Celelalte cuvinte nu se repetă la sfârșit de vers.",
      lessonSection: { id: "5-1-inceputul", label: "5.1. Începutul" },
      basis: "Lecția, 5.1.",
    },
    {
      id: "leoaica-mc-pandise",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce sugerează versul „Mă pândise-n încordare mai de mult”, după lecție?",
      options: [
        { id: "a", text: "Că iubirea este o alegere liberă." },
        { id: "b", text: "Că vorbitorul a pândit-o pe leoaică." },
        { id: "c", text: "Că iubirea vine ca o fatalitate, pregătită din timp." },
        { id: "d", text: "Că leoaica este un animal blând." },
      ],
      correctOptionId: "c",
      explanation:
        "Verbul „pândise” arată că iubirea îl urmărea din timp pe vorbitor; lecția citește asta ca fatalitate (interpretare). Nu vorbitorul pândește, iar leoaica nu este blândă.",
      lessonSection: { id: "6-3-ma-pandise-n-incordare", label: "6.3. „Mă pândise-n încordare”" },
      basis: "Lecția, 6.3; sursa: Crișan (2020).",
    },
    {
      id: "leoaica-mc-metafora-fel",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce procedeu ilustrează numirea iubirii „leoaică tânără”?",
      options: [
        { id: "a", text: "Comparație (cu „ca”)." },
        { id: "b", text: "Hiperbolă." },
        { id: "c", text: "Metaforă." },
        { id: "d", text: "Oximoron." },
      ],
      correctOptionId: "c",
      explanation:
        "Iubirea este numită direct „leoaică”, fără cuvânt de legătură: metaforă. Nu este comparație (lipsește „ca”), hiperbolă sau oximoron.",
      lessonSection: { id: "7-limbaj-artistic", label: "7. Limbaj artistic" },
      basis: "Lecția, 7; fragmentul citat.",
    },
    {
      id: "leoaica-mc-programa",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce enumeră programa, pentru perioada postbelică, în legătură cu poezia?",
      options: [
        { id: "a", text: "Poezia în perioada postbelică." },
        { id: "b", text: "Doar poezia populară." },
        { id: "c", text: "Doar poezia romantică." },
        { id: "d", text: "Nu menționează poezia postbelică." },
      ],
      correctOptionId: "a",
      explanation:
        "Programa enumeră „poezia în perioada postbelică” între conținuturile perioadei postbelice. Nu cere doar poezie populară sau romantică și nu o omite.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1; programa 2014, p. 5.",
    },
    {
      id: "leoaica-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în fragment?",
      options: [
        { id: "a", text: "Iubirea este numită „leoaică tânără”." },
        { id: "b", text: "Cuvântul „față” se repetă la sfârșitul unor versuri." },
        { id: "c", text: "Vorbitorul folosește persoana I." },
        { id: "d", text: "Iubirea este o fatalitate care cade brusc asupra ființei." },
      ],
      correctOptionId: "d",
      explanation:
        "Primele trei enunțuri se verifică în versuri. Ideea de fatalitate este lectura din articol, care trebuie argumentată.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 4.3 și 8.",
    },
    {
      id: "leoaica-mc-tema",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care formulare a temei este susținută de fragmentul verificat, după lecție?",
      options: [
        { id: "a", text: "Iubirea ca forță care atacă și schimbă ființa." },
        { id: "b", text: "Frumusețea unui peisaj de iarnă, cu zăpadă și liniște." },
        { id: "c", text: "Dorul de casă al unui emigrant plecat în străinătate." },
        { id: "d", text: "Critica politicienilor corupți din vremea poetului." },
      ],
      correctOptionId: "a",
      explanation:
        "Imaginea leoaicei care „a sărit” și „a mușcat” susține tema iubirii ca forță care atacă (interpretare). Celelalte teme nu au suport în fragment.",
      lessonSection: { id: "4-1-tema", label: "4.1. Tema" },
      basis: "Lecția, 4.1.",
    },
    {
      id: "leoaica-af-integral",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția a verificat textul integral al poeziei într-o ediție.",
      correct: false,
      explanation:
        "Fals. Lecția spune că textul integral nu a fost consultat; se bazează pe primele patru versuri, citate într-un articol științific. Poezia trebuie citită integral în manual.",
      lessonSection: { id: "11-surse-si-limite", label: "11. Surse și limite" },
      basis: "Lecția, începutul și 11.",
    },
    {
      id: "leoaica-af-titlu",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Titlul poeziei reia primele cuvinte ale primului vers.",
      correct: true,
      explanation:
        "Adevărat: titlul „Leoaică tânără, iubirea” reia începutul versului „Leoaică tânără, iubirea mi-a sărit în față”.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2.",
    },
    {
      id: "leoaica-af-termen",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Programa 2014 folosește cuvântul „neomodernism”.",
      correct: false,
      explanation:
        "Fals. Programa enumeră „poezia în perioada postbelică” și „postmodernismul”, dar nu folosește cuvântul „neomodernism”; încadrarea vine din articol și din manuale și trebuie argumentată.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 3.1; programa 2014, p. 5.",
    },
    {
      id: "leoaica-ra-animal",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Ce animal sălbatic este numit în titlu? Scrie un cuvânt.",
      grading: { mode: "keywords", requiredGroups: [["leoaica", "leoaice", "leoaicei"]] },
      modelAnswer: "Leoaica.",
      maxLength: 100,
      explanation: "Titlul are cuvântul „leoaică”: iubirea este numită „leoaică tânără”.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2.",
    },
    {
      id: "leoaica-ra-imagine",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, imaginea leoaicei care „m-a mușcat”, legând-o de tema poeziei. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat ce spune textul: iubirea este leoaică; ea a sărit în față, a înfipt colții și a mușcat.",
          "Am numit procedeul (metafora, personificarea) și am arătat cum apare.",
          "Am formulat o interpretare legată de tema iubirii ca forță care atacă și marchează.",
          "Am folosit un citat scurt și verificat (de exemplu, „m-a mușcat leoaica azi de față”).",
        ],
      },
      modelAnswer:
        "Iubirea este numită „leoaică tânără”, care „mi-a sărit în față”, și-a înfipt colții și „m-a mușcat” (fapt). Metafora face din iubire o ființă feroce, iar mușcătura arată un sentiment care marchează. Interpretare: imaginea susține tema iubirii ca forță care atacă brusc și schimbă ființa.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă textul de interpretare, numește un procedeu, folosește un citat scurt și îl leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-coltii-albi-m-a-muscat", label: "6.2. „Colții albi... m-a mușcat”" },
      basis: "Lecția, 4.1, 6.1 și 6.2; sursa: Crișan (2020).",
    },
  ],
};
