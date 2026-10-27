import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Iona” (content/romana/opere/iona.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Piesa nu a fost citită pentru lecție; faptele provin dintr-un articol de presă
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar exercițiile nu conțin citate din piesă.
 * Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const ionaExercises: ExerciseSet = {
  key: "romana/iona",
  subject: "romana",
  work: "iona",
  title: "„Iona” de Marin Sorescu",
  exercises: [
    {
      id: "iona-mc-tablouri",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Câte tablouri are piesa, după subtitlul ei?",
      options: [
        { id: "a", text: "Două." },
        { id: "b", text: "Trei." },
        { id: "c", text: "Patru." },
        { id: "d", text: "Cinci." },
      ],
      correctOptionId: "c",
      explanation:
        "Subtitlul piesei, după articolul consultat, este „tragedie în patru tablouri”. Celelalte numere nu corespund.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 5.1; sursa: articol Cotidianul.",
    },
    {
      id: "iona-mc-inceput",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce face Iona în tabloul I?",
      options: [
        { id: "a", text: "Pescuiește de pe țărm și este înghițit de un monstru." },
        { id: "b", text: "Predică într-o cetate mare, ca profetul din Biblie, la porunca lui Dumnezeu." },
        { id: "c", text: "Călătorește pe o corabie, în furtună." },
        { id: "d", text: "Își construiește o casă pe plajă." },
      ],
      correctOptionId: "a",
      explanation:
        "În tabloul I, Iona pescuiește de pe țărm, cu plasă și undiță, își joacă o captură și este înghițit de monstru. Celelalte variante nu apar în rezumat.",
      lessonSection: { id: "6-1-tabloul-i-acvariul-si-inghitirea", label: "6.1. Tabloul I: acvariul și înghițirea" },
      basis: "Lecția, 6.1; sursa secundară.",
    },
    {
      id: "iona-mc-ecou",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce se aude când Iona își strigă numele, după ce și-a pierdut ecoul?",
      options: [
        { id: "a", text: "Numele întreg, repetat de trei ori." },
        { id: "b", text: "Un cântec al peștilor." },
        { id: "c", text: "Doar „Io”." },
        { id: "d", text: "Nimic, deloc." },
      ],
      correctOptionId: "c",
      explanation:
        "Articolul spune că ecoul întoarce doar „Io”, adică jumătate din nume. Peștii cântă în alt moment, iar tăcerea completă nu este ceea ce descrie sursa.",
      lessonSection: { id: "6-3-ecoul-io", label: "6.3. Ecoul „Io”" },
      basis: "Lecția, 6.3; sursa secundară.",
    },
    {
      id: "iona-mc-acvariu",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce arată, după lecție, acvariul din tabloul I?",
      options: [
        { id: "a", text: "Dragostea lui Iona pentru pești." },
        { id: "b", text: "Sărăcia lui Iona." },
        { id: "c", text: "Un loc sigur, în care Iona se ascunde de monstru." },
        { id: "d", text: "Autoiluzionarea: Iona își joacă o captură." },
      ],
      correctOptionId: "d",
      explanation:
        "Iona aruncă în plasă pești din acvariu, ca să pară că a prins: imaginea autoiluzionării. Nu este iubire pentru pești, sărăcie sau adăpost; acvariul este chiar locul peste care se apleacă și este înghițit.",
      lessonSection: { id: "6-1-tabloul-i-acvariul-si-inghitirea", label: "6.1. Tabloul I: acvariul și înghițirea" },
      basis: "Lecția, 6.1 și 8; sursa secundară.",
    },
    {
      id: "iona-mc-peste",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce descoperă Iona în tabloul III?",
      options: [
        { id: "a", text: "Că peștele a fost înghițit de unul mai mare." },
        { id: "b", text: "Că peștele a ajuns la mal, într-un port aglomerat." },
        { id: "c", text: "Că își poate vorbi mama prin ecou, cu glas de copil." },
        { id: "d", text: "Că toți peștii l-au uitat și îl lasă singur." },
      ],
      correctOptionId: "a",
      explanation:
        "Iona află că peștele care l-a înghițit a fost la rândul lui înghițit, încearcă să iasă și ajunge într-un al treilea pește. Celelalte variante nu corespund rezumatului.",
      lessonSection: { id: "6-2-tablourile-ii-si-iii-burtile-succesive", label: "6.2. Tablourile II și III: burțile succesive" },
      basis: "Lecția, 6.2; sursa secundară.",
    },
    {
      id: "iona-mc-final",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce face Iona în tabloul IV, la final?",
      options: [
        { id: "a", text: "Adoarme pentru totdeauna, în liniște deplină." },
        { id: "b", text: "Își cere iertare de la pește, în genunchi." },
        { id: "c", text: "Hotărăște să se întoarcă, tăindu-și burta." },
        { id: "d", text: "Își scrie testamentul, pe un petic de hârtie." },
      ],
      correctOptionId: "c",
      explanation:
        "Iona își amintește numele, hotărăște să se întoarcă și își taie burta. Sursa lasă deschisă întrebarea dacă este un eveniment real sau un gest simbolic. Celelalte variante nu apar în rezumat.",
      lessonSection: { id: "6-4-tabloul-iv-hotararea", label: "6.4. Tabloul IV: hotărârea" },
      basis: "Lecția, 6.4; sursa secundară.",
    },
    {
      id: "iona-mc-programa",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce cere programa pentru textul dramatic, în legătură cu perioada postbelică?",
      options: [
        { id: "a", text: "Studiul monografic al unui dramaturg." },
        { id: "b", text: "Un text dramatic postbelic." },
        { id: "c", text: "Doar comedii interbelice." },
        { id: "d", text: "O piesă cu cinci acte, cu text integral." },
      ],
      correctOptionId: "b",
      explanation:
        "Programa include „un text dramatic postbelic” între conținuturile textului dramatic, fără să numească piesa. Nu cere studiu monografic, doar comedii interbelice sau o structură în cinci acte.",
      lessonSection: { id: "3-1-ce-spune-programa", label: "3.1. Ce spune programa" },
      basis: "Lecția, 1 și 3.1; programa 2014, p. 4.",
    },
    {
      id: "iona-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt din piesă (după sursă)?",
      options: [
        { id: "a", text: "Iona își pierde ecoul și se aude doar „Io”." },
        { id: "b", text: "Peștele este un simbol al limitei." },
        { id: "c", text: "În tabloul III, Iona scrie un SOS pe palmă." },
        { id: "d", text: "Piesa are patru tablouri." },
      ],
      correctOptionId: "b",
      explanation:
        "Celelalte enunțuri sunt fapte din acțiune sau din structură. Că peștele este un simbol al limitei este o lectură, care trebuie argumentată.",
      lessonSection: { id: "9-fapt-si-interpretare", label: "9. Fapt și interpretare" },
      basis: "Lecția, 6.2 și 9.",
    },
    {
      id: "iona-af-citate",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția conține citate din piesă, verificate pe text.",
      correct: false,
      explanation:
        "Fals. Piesa nu a fost citită pentru lecție și lecția nu conține citate din piesă, doar două fraze ale autorului, din prefață, citate de articol. Folosește citate din ediția ta.",
      lessonSection: { id: "12-surse-si-limite", label: "12. Surse și limite" },
      basis: "Lecția, începutul și 12.",
    },
    {
      id: "iona-af-barem",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Subiectele 2026 din proiect conțin o cerință oficială despre un text dramatic.",
      correct: false,
      explanation:
        "Fals. Nici unul dintre subiectele din proiect nu cere un eseu despre un text dramatic; planul lecției adaptează reperele de la alte tipuri de texte și este o recomandare, nu un barem.",
      lessonSection: { id: "1-ce-trebuie-sa-stii-despre-examen", label: "1. Ce trebuie să știi despre examen" },
      basis: "Lecția, 1; subiectele 2026 din references/bac-romana/.",
    },
    {
      id: "iona-af-mama",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "După sursă, mama lui Iona apare doar într-un cântec care îl cheamă.",
      correct: true,
      explanation:
        "Adevărat: după sursă, mama apare doar într-un cântec care îl cheamă pe Iona, iar soția este doar amintită, ca cea care îl învinuiește. Nu sunt personaje care apar pe scenă.",
      lessonSection: { id: "7-personajele", label: "7. Personajele" },
      basis: "Lecția, 7; sursa secundară.",
    },
    {
      id: "iona-af-final",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Sursa consultată stabilește sigur că finalul înseamnă sinuciderea lui Iona.",
      correct: false,
      explanation:
        "Fals. Sursa lasă deschisă întrebarea dacă gestul este un eveniment real sau unul simbolic; sinuciderea este o lectură pomenită în alte surse, în legătură cu existențialismul.",
      lessonSection: { id: "6-4-tabloul-iv-hotararea", label: "6.4. Tabloul IV: hotărârea" },
      basis: "Lecția, 6.4.",
    },
    {
      id: "iona-ra-pesti",
      type: "short-answer",
      difficulty: "usor",
      prompt: "În ce se află Iona în tablourile II și III? Scrie un cuvânt.",
      grading: { mode: "keywords", requiredGroups: [["peste", "pesti", "pestelui", "pestilor"]] },
      modelAnswer: "În burta peștelui (a unor pești).",
      maxLength: 100,
      explanation:
        "Iona este captiv în burta peștelui care l-a înghițit, apoi în burta altor pești, mai mari. Răspunsul trebuie să conțină cuvântul „pește” sau o formă a lui.",
      lessonSection: { id: "6-2-tablourile-ii-si-iii-burtile-succesive", label: "6.2. Tablourile II și III: burțile succesive" },
      basis: "Lecția, 6.2; sursa secundară.",
    },
    {
      id: "iona-ra-secventa",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, imaginea peștilor care se înghit unul pe altul, legând-o de tema piesei. Separă ce se întâmplă de ceea ce interpretezi. Nu folosi citate pe care nu le-ai verificat în ediția ta.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat faptele: Iona descoperă că peștele care l-a înghițit a fost înghițit de un altul mai mare și ajunge într-un al treilea.",
          "Am numit simbolul sau procedeul (lanț de limite, spațiu simbolic).",
          "Am formulat o interpretare legată de tema omului prins în limite.",
          "Dacă am folosit un citat, l-am verificat în ediția mea.",
        ],
      },
      modelAnswer:
        "Iona descoperă că peștele care l-a înghițit a fost înghițit de unul mai mare și ajunge într-un al treilea pește (fapte). Lanțul de burți poate fi citit ca un spațiu simbolic al limitelor succesive. Interpretare: imaginea susține tema omului care, ieșind dintr-o limită, intră în alta.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește simbolul și îl leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-tablourile-ii-si-iii-burtile-succesive", label: "6.2. Tablourile II și III: burțile succesive" },
      basis: "Lecția, 6.2, 4.1 și 8; sursa secundară.",
    },
  ],
};
