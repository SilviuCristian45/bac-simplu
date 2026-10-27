import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Luceafărul” (content/romana/opere/luceafarul.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Versurile au fost verificate pe transcrierea Wikisource a poemului
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const luceafarulExercises: ExerciseSet = {
  key: "romana/luceafarul",
  subject: "romana",
  work: "luceafarul",
  title: "„Luceafărul” de Mihai Eminescu",
  exercises: [
    {
      id: "luceafar-mc-refuz",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum răspunde fata de împărat când Luceafărul îi cere să-i fie mireasă?",
      options: [
        { id: "a", text: "Acceptă și pleacă cu el în ocean." },
        { id: "b", text: "Îl refuză, spunând că el este mort, iar ea vie." },
        { id: "c", text: "Îi cere să o ducă în lumea ei obișnuită, de zi cu zi." },
        { id: "d", text: "Nu îi răspunde și îl cheamă pe Cătălin." },
      ],
      correctOptionId: "b",
      explanation:
        "Fata îl refuză: „Căci eu sunt vie, tu ești mort, / Și ochiul tău mă-ngheață”. Refuzul vine după prima apariție a Luceafărului, nu după apariția lui Cătălin, iar ea nu pleacă niciodată cu el.",
      lessonSection: { id: "6-1-cele-doua-aparitii-ale-luceafarului-tabloul-i", label: "6.1. Cele două apariții ale Luceafărului (tabloul I)" },
      basis: "Lecția, 6.1; poemul, tabloul I.",
    },
    {
      id: "luceafar-mc-strofe",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Din câte versuri este alcătuită fiecare strofă a poemului?",
      options: [
        { id: "a", text: "Din patru versuri." },
        { id: "b", text: "Din cinci versuri." },
        { id: "c", text: "Din șase versuri." },
        { id: "d", text: "Din opt versuri." },
      ],
      correctOptionId: "a",
      explanation:
        "Poemul are strofe de patru versuri, cu rimă încrucișată (abab): de exemplu, „povești” rimează cu „împărătești”, iar „niciodată” cu „fată”. Celelalte variante nu corespund textului.",
      lessonSection: { id: "5-2-strofa-si-versul", label: "5.2. Strofa și versul" },
      basis: "Lecția, 5.2; poemul, strofa 1.",
    },
    {
      id: "luceafar-mc-oximoron",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce figură de stil este „Un mort frumos cu ochii vii”?",
      options: [
        { id: "a", text: "Comparație." },
        { id: "b", text: "Hiperbolă." },
        { id: "c", text: "Personificare." },
        { id: "d", text: "Oximoron." },
      ],
      correctOptionId: "d",
      explanation:
        "Sunt unite doi termeni care se exclud: „mort” și „ochii vii”. Este un oximoron. Nu e comparație (lipsește cuvântul de legătură), nici hiperbolă sau personificare.",
      lessonSection: { id: "8-limbaj-artistic", label: "8. Limbaj artistic" },
      basis: "Lecția, 6.1 și 8; poemul, tabloul I.",
    },
    {
      id: "luceafar-mc-cerere",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce cere Luceafărul în schimbul nemuririi, în dialogul cu cel căruia i se roagă?",
      options: [
        { id: "a", text: "Puterea de a stăpâni pământul." },
        { id: "b", text: "Înțelepciune și glas care mișcă munții." },
        { id: "c", text: "O oră de iubire." },
        { id: "d", text: "Un nou loc pe cer, mai aproape de pământ." },
      ],
      correctOptionId: "c",
      explanation:
        "Luceafărul spune: „Reia-mi al nemuririi nimb / Și focul din privire, / Și pentru toate dă-mi în schimb / O oră de iubire”. Pământul, înțelepciunea și glasul sunt ofertele pe care i le face cel care îi răspunde, nu cererea lui.",
      lessonSection: { id: "6-2-dialogul-luceafarului-cu-cel-caruia-i-se-roaga-tabloul-iii", label: "6.2. Dialogul Luceafărului cu cel căruia i se roagă (tabloul III)" },
      basis: "Lecția, 6.2; poemul, tabloul III.",
    },
    {
      id: "luceafar-mc-catalin",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine este Cătălin în poem?",
      options: [
        { id: "a", text: "Un tânăr voievod din lumea fetei, care vine cu un toiag încununat cu trestii." },
        { id: "b", text: "Un paj, „viclean copil de casă”, care o curtează pe fată." },
        { id: "c", text: "Un alt chip sub care apare Luceafărul." },
        { id: "d", text: "Un servitor al Demiurgului." },
      ],
      correctOptionId: "b",
      explanation:
        "Cătălin este pajul din casa împărătesei, descris ca „viclean copil de casă”, „băiat din flori și de pripas”. Nu este voievod și nici chip al Luceafărului; „Demiurgul” nu apare în text.",
      lessonSection: { id: "7-4-catalin", label: "7.4. Cătălin" },
      basis: "Lecția, 7.4; poemul, tabloul II.",
    },
    {
      id: "luceafar-mc-final",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum răspunde Luceafărul când fata îl cheamă din nou, în final?",
      options: [
        { id: "a", text: "Coboară și o duce în palatele de mărgean, cum îi promisese la început." },
        { id: "b", text: "Se transformă în muritor și rămâne cu ea, în lumea oamenilor." },
        { id: "c", text: "Cade în mare, ca în prima noapte." },
        { id: "d", text: "Răspunde rece: „Ce-ți pasă ție, chip de lut, dac-oi fi eu sau altul?”" },
      ],
      correctOptionId: "d",
      explanation:
        "În final, Luceafărul nu mai cade în mare și nu coboară. Răspunsul lui: „Ce-ți pasă ție, chip de lut, / Dac-oi fi eu sau altul?”, urmat de „nemuritor și rece”. Celelalte variante contrazic textul.",
      lessonSection: { id: "6-3-finalul-tabloul-iv", label: "6.3. Finalul (tabloul IV)" },
      basis: "Lecția, 6.3; poemul, tabloul IV.",
    },
    {
      id: "luceafar-mc-tablou",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "În care tablou, după împărțirea din lecție, zboară Luceafărul prin spațiul cosmic?",
      options: [
        { id: "a", text: "În primul tablou." },
        { id: "b", text: "În al doilea tablou." },
        { id: "c", text: "În al treilea tablou." },
        { id: "d", text: "În ultimul tablou." },
      ],
      correctOptionId: "c",
      explanation:
        "Zborul cosmic și dialogul cu cel căruia i se roagă sunt în tabloul III (strofele 65–85). În tabloul I are loc chemarea, în al II-lea apare Cătălin, iar în al IV-lea scena finală.",
      lessonSection: { id: "5-1-cele-patru-tablouri", label: "5.1. Cele patru tablouri" },
      basis: "Lecția, 5.1; poemul, secțiunile marcate cu asterisc.",
    },
    {
      id: "luceafar-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în text?",
      options: [
        { id: "a", text: "Fata îl refuză pe Luceafăr de două ori." },
        { id: "b", text: "Cătălin o abordează pe fată în tabloul al II-lea." },
        { id: "c", text: "Luceafărul simbolizează geniul singur." },
        { id: "d", text: "Poemul are strofe de câte patru versuri." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte trei enunțuri se pot verifica în text. Că Luceafărul simbolizează geniul singur este o lectură a poemului: se argumentează cu versuri, dar nu este spusă în text.",
      lessonSection: { id: "9-fapt-si-interpretare", label: "9. Fapt și interpretare" },
      basis: "Lecția, 3.3, 4.2 și 9.",
    },
    {
      id: "luceafar-mc-antiteza",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Care pereche de versuri ilustrează cel mai clar antiteza dintre cele două lumi ale poemului?",
      options: [
        { id: "a", text: "„A fost odată ca-n povești, / A fost ca niciodată”" },
        { id: "b", text: "„Cum că eu sunt nemuritor, / Și tu ești muritoare?”" },
        { id: "c", text: "„Cum e Fecioara între sfinți / Și luna între stele”" },
        { id: "d", text: "„Părea un fulger ne-ntrerupt / Rătăcitor prin ele”" },
      ],
      correctOptionId: "b",
      explanation:
        "Antiteza opune doi termeni: „nemuritor” și „muritoare”. Primele versuri sunt formula basmului, al treilea set este o comparație, iar al patrulea o comparație sau metaforă a zborului.",
      lessonSection: { id: "3-3-trasaturi-ale-romantismului", label: "3.3. Trăsături ale romantismului" },
      basis: "Lecția, 3.3 și 8; poemul, tabloul I.",
    },
    {
      id: "luceafar-af-catalina",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Numele Cătălina apare o singură dată în text.",
      correct: true,
      explanation:
        "Adevărat: apare în versul „Privind la Cătălina”. În rest, fata este numită „fata”, „ea”, „copila”.",
      lessonSection: { id: "7-3-fata-de-imparat-catalina", label: "7.3. Fata de împărat (Cătălina)" },
      basis: "Lecția, 2 și 7.3; poemul, tabloul II.",
    },
    {
      id: "luceafar-af-demiurg",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Cuvântul „Demiurg” apare în textul poemului.",
      correct: false,
      explanation:
        "Fals. Luceafărul i se adresează cu „Părinte” și „Doamne”, iar el îl numește „Hyperion”. Numele „Demiurg” vine din manuale și din interpretări.",
      lessonSection: { id: "7-5-cel-care-ii-raspunde-luceafarului", label: "7.5. Cel care îi răspunde Luceafărului" },
      basis: "Lecția, 7.5; poemul, tabloul III.",
    },
    {
      id: "luceafar-af-fuga",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Cătălin îi propune fetei să fugă în lume.",
      correct: true,
      explanation:
        "Adevărat: „Hai ș-om fugi în lume”, spune Cătălin, și adaugă că vor „pierde dorul de părinți / Și visul de luceferi”.",
      lessonSection: { id: "7-4-catalin", label: "7.4. Cătălin" },
      basis: "Lecția, 7.4; poemul, tabloul II.",
    },
    {
      id: "luceafar-af-moarte",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Cel care îi răspunde Luceafărului îi acceptă cererea de a deveni muritor.",
      correct: false,
      explanation:
        "Fals. Răspunsul este „Dar moartea nu se poate...”; îi oferă în schimb înțelepciune, glas, pământ și oștiri.",
      lessonSection: { id: "6-2-dialogul-luceafarului-cu-cel-caruia-i-se-roaga-tabloul-iii", label: "6.2. Dialogul Luceafărului cu cel căruia i se roagă (tabloul III)" },
      basis: "Lecția, 6.2; poemul, tabloul III.",
    },
    {
      id: "luceafar-ra-versuri",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Câte strofe are poemul în transcrierea folosită? Scrie numărul în cifre sau în litere.",
      grading: { mode: "keywords", requiredGroups: [["98", "nouazeci si opt"]] },
      modelAnswer: "98 de strofe (de câte patru versuri).",
      maxLength: 100,
      explanation: "Strofele se numără pe secțiuni: 7 + 17 + 19 + 21 + 21 + 13 = 98, adică 392 de versuri.",
      lessonSection: { id: "5-1-cele-patru-tablouri", label: "5.1. Cele patru tablouri" },
      basis: "Lecția, 2 și 5.1; poemul.",
    },
    {
      id: "luceafar-ra-imagine",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, imaginea „un mort frumos cu ochii vii”, legând-o de tema poemului. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat contextul: prima apariție a Luceafărului din ape, în fața fetei.",
          "Am numit figura de stil (oximoron) și am arătat cum unește termeni contrari.",
          "Am formulat o interpretare (de exemplu, frumusețea lui rece, străină vieții) legată de tema iubirii imposibile.",
          "Am folosit un citat scurt și verificat (de exemplu, „Căci eu sunt vie, tu ești mort”).",
        ],
      },
      modelAnswer:
        "La prima apariție, Luceafărul vine din ape ca un tânăr cu „un vânăt giulgi” și „un mort frumos cu ochii vii” (fapt). Oximoronul unește frumusețea și privirea vie cu moartea. Interpretare: imaginea arată o ființă strălucitoare, dar străină vieții, de aceea fata spune „Căci eu sunt vie, tu ești mort” și îl refuză; astfel se susține tema iubirii imposibile.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun numește figura, o susține cu un citat scurt, separă textul de interpretare și o leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-1-cele-doua-aparitii-ale-luceafarului-tabloul-i", label: "6.1. Cele două apariții ale Luceafărului (tabloul I)" },
      basis: "Lecția, 6.1 și 8; poemul, tabloul I.",
    },
  ],
};
