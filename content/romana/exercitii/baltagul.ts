import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Baltagul” (content/romana/opere/baltagul.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Romanul nu a fost citit pentru lecție; faptele provin din surse secundare
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar exercițiile nu conțin citate din roman.
 * Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const baltagulExercises: ExerciseSet = {
  key: "romana/baltagul",
  subject: "romana",
  work: "baltagul",
  title: "„Baltagul” de Mihail Sadoveanu",
  exercises: [
    {
      id: "baltagul-mc-capitole",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Câte capitole are romanul, după sursa consultată?",
      options: [
        { id: "a", text: "Opt capitole." },
        { id: "b", text: "Doisprezece capitole." },
        { id: "c", text: "Șaisprezece capitole." },
        { id: "d", text: "Douăzeci de capitole." },
      ],
      correctOptionId: "c",
      explanation:
        "Sursa consultată spune că romanul are 16 capitole, numerotate cu cifre romane, fără titluri. Celelalte numere nu corespund.",
      lessonSection: { id: "5-1-structura", label: "5.1. Structura" },
      basis: "Lecția, 2 și 5.1; sursa: ro.wikipedia.org, „Baltagul (roman)”.",
    },
    {
      id: "baltagul-mc-cautare",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine pornește în căutarea lui Nechifor Lipan, după dispariția lui?",
      options: [
        { id: "a", text: "Subprefectul Anastase Balmez, ajutat de jandarmi." },
        { id: "b", text: "Vitoria, împreună cu Gheorghiță." },
        { id: "c", text: "Cârciumarul Iorgu Vasiliu, din Suha." },
        { id: "d", text: "Calistrat Bogza, venit din Doi Meri." },
      ],
      correctOptionId: "b",
      explanation:
        "Vitoria hotărăște să-l caute pe Nechifor și pornește cu Gheorghiță, luând un baltag. Subprefectul conduce formal ancheta, dar nu pornește în căutare; Vasiliu este cârciumarul din Suha, iar Bogza este ucigașul.",
      lessonSection: { id: "6-1-disparitia-lui-nechifor-si-hotararea-vituriei", label: "6.1. Dispariția lui Nechifor și hotărârea Vituriei" },
      basis: "Lecția, 6.1; sursa secundară.",
    },
    {
      id: "baltagul-mc-lupu",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine o duce pe Vitoria la râpa unde sunt oasele lui Nechifor?",
      options: [
        { id: "a", text: "Un cioban din Doi Meri." },
        { id: "b", text: "Preotul Dănilă." },
        { id: "c", text: "Gheorghiță." },
        { id: "d", text: "Câinele Lupu." },
      ],
      correctOptionId: "d",
      explanation:
        "La Sabasa, Vitoria găsește câinele credincios al lui Nechifor, Lupu, care o duce la râpă. Ceilalți nu o conduc la oase.",
      lessonSection: { id: "6-4-sabasa-oasele-si-lupu", label: "6.4. Sabasa: oasele și Lupu" },
      basis: "Lecția, 6.4; sursa secundară.",
    },
    {
      id: "baltagul-mc-traseu",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Unde află Vitoria, din registre, că Nechifor cumpărase 300 de oi?",
      options: [
        { id: "a", text: "La Vatra Dornei." },
        { id: "b", text: "La Piatra Neamț." },
        { id: "c", text: "La Mănăstirea Bistrița." },
        { id: "d", text: "La Tarcău, acasă." },
      ],
      correctOptionId: "a",
      explanation:
        "La Dorna (Vatra Dornei), din registrele de vânzare, află că Nechifor cumpărase 300 de oi. La Piatra Neamț anunță dispariția, la Bistrița merge în pelerinaj, iar acasă, la Tarcău, începe totul.",
      lessonSection: { id: "6-2-drumul-pe-urmele-lui-nechifor", label: "6.2. Drumul pe urmele lui Nechifor" },
      basis: "Lecția, 6.2; sursa secundară.",
    },
    {
      id: "baltagul-mc-suha",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce află Vitoria la Suha, de la cârciumarul Iorgu Vasiliu și soția lui?",
      options: [
        { id: "a", text: "Că Nechifor a vândut toată turma și a plecat departe." },
        { id: "b", text: "Că au trecut doar doi ciobani, care se îmbogățiseră." },
        { id: "c", text: "Că Nechifor a plecat în străinătate, fără să spună cuiva." },
        { id: "d", text: "Că turma a fost furată de o bandă de hoți din munți." },
      ],
      correctOptionId: "b",
      explanation:
        "Cei doi cârciumari spun că au trecut doar doi ciobani, Bogza și Cuțui, care se îmbogățiseră. Ei nu spun că Nechifor a vândut turma, că a plecat în străinătate sau că ar fi fost vorba de hoți.",
      lessonSection: { id: "6-3-suha-banuiala", label: "6.3. Suha: bănuiala" },
      basis: "Lecția, 6.3; sursa secundară.",
    },
    {
      id: "baltagul-mc-praznic",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce se întâmplă la praznic, după ce Vitoria îl acuză pe Bogza?",
      options: [
        { id: "a", text: "Bogza atacă, Gheorghiță îl lovește, iar Lupu îl mușcă." },
        { id: "b", text: "Subprefectul îi arestează pe cei doi fără nicio rezistență." },
        { id: "c", text: "Bogza fuge în munți și nu mai este văzut." },
        { id: "d", text: "Cuțui îl acuză pe Gheorghiță de crimă." },
      ],
      correctOptionId: "a",
      explanation:
        "Bogza atacă, este lovit în frunte cu muchia baltagului și mușcat de Lupu; Cuțui se predă, iar Bogza mărturisește. Celelalte variante nu corespund rezumatului.",
      lessonSection: { id: "6-5-praznicul-si-marturisirea", label: "6.5. Praznicul și mărturisirea" },
      basis: "Lecția, 6.5; sursa secundară.",
    },
    {
      id: "baltagul-mc-miorita",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Cum se deosebește, după lecție, atitudinea Vituriei de cea din balada „Miorița”?",
      options: [
        { id: "a", text: "Vitoria acceptă moartea în liniște, ca ciobanul din baladă." },
        { id: "b", text: "Vitoria nu se resemnează: caută și află dreptatea." },
        { id: "c", text: "Vitoria cere ajutorul unui mag." },
        { id: "d", text: "Vitoria nu mai caută după ce află de moarte." },
      ],
      correctOptionId: "b",
      explanation:
        "Sursa spune că Sadoveanu respinge resemnarea baladei: în balada „Miorița” ciobanul acceptă moartea, în roman Vitoria caută dreptatea. Celelalte variante contrazic rezumatul.",
      lessonSection: { id: "8-legatura-cu-balada-miorita", label: "8. Legătura cu balada „Miorița”" },
      basis: "Lecția, 8; sursa secundară.",
    },
    {
      id: "baltagul-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt din roman?",
      options: [
        { id: "a", text: "Craniul lui Nechifor este spart de o lovitură de baltag." },
        { id: "b", text: "Bogza mărturisește la praznic, după ce este lovit de Gheorghiță și mușcat." },
        { id: "c", text: "Baltagul este un simbol al dreptății făcute cu aceeași armă." },
        { id: "d", text: "Vitoria pornește la drum pe 10 martie." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte enunțuri sunt fapte din acțiune. Că baltagul simbolizează dreptatea făcută cu aceeași armă este o lectură a lecției, care trebuie argumentată.",
      lessonSection: { id: "9-fapt-si-interpretare", label: "9. Fapt și interpretare" },
      basis: "Lecția, 4.2 și 9.",
    },
    {
      id: "baltagul-af-an",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Romanul a apărut pentru prima dată în noiembrie 1930.",
      correct: true,
      explanation:
        "Adevărat, după sursa consultată (ro.wikipedia.org): prima publicare, noiembrie 1930, la Editura Cartea Românească. Verifică data și în ediția ta.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 12.",
    },
    {
      id: "baltagul-af-citate",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția conține citate din roman, verificate pe text.",
      correct: false,
      explanation:
        "Fals. Romanul nu a fost citit pentru lecție și lecția nu conține citate din roman; recomandă folosirea citatelor din ediția proprie.",
      lessonSection: { id: "12-surse-si-limite", label: "12. Surse și limite" },
      basis: "Lecția, începutul și 12.",
    },
    {
      id: "baltagul-af-prefect",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Prefectul de la Piatra Neamț îi spune Vituriei că soțul ei a plecat de bunăvoie.",
      correct: false,
      explanation:
        "Fals. Prefectul de la Piatra Neamț crede că Nechifor a fost jefuit și ucis, nu că a plecat de bunăvoie.",
      lessonSection: { id: "6-1-disparitia-lui-nechifor-si-hotararea-vituriei", label: "6.1. Dispariția lui Nechifor și hotărârea Vituriei" },
      basis: "Lecția, 6.1; sursa secundară.",
    },
    {
      id: "baltagul-af-perspectiva",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția stabilește perspectiva narativă a romanului și o prezintă ca fapt verificat.",
      correct: false,
      explanation:
        "Fals. Lecția spune că perspectiva narativă nu este stabilită în sursele consultate și recomandă verificarea în manual și în text.",
      lessonSection: { id: "5-4-perspectiva-narativa", label: "5.4. Perspectiva narativă" },
      basis: "Lecția, 5.4 și 12.",
    },
    {
      id: "baltagul-ra-caine",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește câinele lui Nechifor, care o duce pe Vitoria la oase?",
      grading: { mode: "keywords", requiredGroups: [["lupu"]] },
      modelAnswer: "Lupu.",
      maxLength: 100,
      explanation: "Câinele credincios al lui Nechifor este Lupu; o duce pe Vitoria la râpa cu oasele și îl mușcă pe Bogza la praznic.",
      lessonSection: { id: "7-6-lupu", label: "7.6. Lupu" },
      basis: "Lecția, 6.4 și 7.6; sursa secundară.",
    },
    {
      id: "baltagul-ra-secventa",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, secvența praznicului, legând-o de tema romanului. Separă ce se întâmplă de ceea ce interpretezi. Nu folosi citate pe care nu le-ai verificat în ediția ta.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat faptele: Vitoria îi acuză pe Bogza și pe Cuțui; Bogza atacă, este lovit de Gheorghiță și mușcat de Lupu; Bogza mărturisește.",
          "Am legat secvența de tema dreptății și a rânduielii.",
          "Am formulat o interpretare (de exemplu, dreptatea vine prin ritual și demascare).",
          "Dacă am folosit un citat, l-am verificat în ediția mea.",
        ],
      },
      modelAnswer:
        "La praznicul de înmormântare, Vitoria îi acuză pe Bogza și pe Cuțui; Bogza atacă, este lovit de Gheorghiță cu muchia baltagului și mușcat de Lupu, iar Cuțui se predă și Bogza mărturisește (fapte). Interpretare: scena arată o dreptate făcută prin ritual și demascare, nu prin tribunal, ceea ce susține tema căutării dreptății conform rânduielii.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, leagă secvența de temă și folosește doar citate verificate. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-5-praznicul-si-marturisirea", label: "6.5. Praznicul și mărturisirea" },
      basis: "Lecția, 6.5 și 4.1; sursa secundară.",
    },
  ],
};
