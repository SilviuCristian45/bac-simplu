import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Testament” (content/romana/opere/testament.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Versurile au fost găsite citate în două articole științifice;
 * textul integral nu a fost consultat (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const testamentExercises: ExerciseSet = {
  key: "romana/testament",
  subject: "romana",
  work: "testament",
  title: "„Testament” de Tudor Arghezi",
  exercises: [
    {
      id: "testament-mc-specia",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum este încadrată poezia „Testament” în lecție, după specie?",
      options: [
        { id: "a", text: "Baladă populară." },
        { id: "b", text: "Elegie de dragoste." },
        { id: "c", text: "Artă poetică." },
        { id: "d", text: "Satiră socială." },
      ],
      correctOptionId: "c",
      explanation:
        "Poezia este o artă poetică: poetul își exprimă concepția despre poezie și despre ce lasă după el. Încadrarea apare în ambele articole consultate. Nu este baladă, elegie de dragoste sau satiră.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 3.2.",
    },
    {
      id: "testament-mc-lasa",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce spune poetul că lasă după moarte, în primele versuri?",
      options: [
        { id: "a", text: "Un nume adunat pe o carte." },
        { id: "b", text: "O avere mare, împărțită fiului." },
        { id: "c", text: "Un sat întreg și pământurile lui." },
        { id: "d", text: "O casă cu grădină, lângă un râu." },
      ],
      correctOptionId: "a",
      explanation:
        "Primele versuri sunt: „Nu-i voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”. Poetul nu lasă bunuri materiale, ci o carte.",
      lessonSection: { id: "6-1-nu-i-voi-lasa-drept-bunuri-dupa-moarte-decat-un-nume-adunat-pe-o-carte", label: "6.1. „Nu-i voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”" },
      basis: "Lecția, 6.1; sursa: Funeriu (2020).",
    },
    {
      id: "testament-mc-adresant",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cui i se adresează vorbitorul în versul „Cartea mea-i, fiule, o treaptă”?",
      options: [
        { id: "a", text: "Unui prieten poet." },
        { id: "b", text: "Unui fiu, care este urmașul." },
        { id: "c", text: "Cititorului din viitor, în general, fără să-l numească." },
        { id: "d", text: "Lui Dumnezeu." },
      ],
      correctOptionId: "b",
      explanation:
        "Vorbitorul se adresează unui „fiu” („fiule”), un destinatar explicit. Lecția îl citește ca urmaș, iar ideea este o interpretare. Nu apare un prieten poet, iar adresarea către Dumnezeu nu este în fragmentele verificate.",
      lessonSection: { id: "5-3-instantele-comunicarii", label: "5.3. Instanțele comunicării" },
      basis: "Lecția, 5.1 și 5.3.",
    },
    {
      id: "testament-mc-sapa",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce arată imaginea „Sapa-n condei și brazda-n climar”?",
      options: [
        { id: "a", text: "O comparație între un țăran și un scriitor, făcută cu ajutorul lui „ca”." },
        { id: "b", text: "Trecerea de la munca pământului la munca cuvântului." },
        { id: "c", text: "O descriere a unui peisaj de câmp." },
        { id: "d", text: "O invocație către muză, la începutul poeziei." },
      ],
      correctOptionId: "b",
      explanation:
        "Obiectele muncii pământului (sapa, brazda) devin obiecte ale scrisului (condeiul, climara): munca pământului devine munca cuvântului. Nu este comparație cu „ca”, peisaj sau invocație.",
      lessonSection: { id: "6-2-sapa-n-condei-si-brazda-n-climar", label: "6.2. „Sapa-n condei și brazda-n climar”" },
      basis: "Lecția, 3.2 și 6.2; sursa: Parpală (2009).",
    },
    {
      id: "testament-mc-rima",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce fel de rimă au primele opt versuri ale poeziei?",
      options: [
        { id: "a", text: "Încrucișată (abab)." },
        { id: "b", text: "Îmbrățișată (abba)." },
        { id: "c", text: "Împerecheată (aabb)." },
        { id: "d", text: "Nu au rimă (vers alb)." },
      ],
      correctOptionId: "c",
      explanation:
        "Versurile rimează două câte două: moarte – carte, vine – tine, adânci – brânci, așteaptă – treaptă. Este rimă împerecheată. Lecția nu a verificat rima în restul poeziei.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; sursa: Funeriu (2020).",
    },
    {
      id: "testament-mc-seara",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce propune autorul articolului despre erorile de editare la versul „În seara răzvrătită care vine”?",
      options: [
        { id: "a", text: "Că „seara” ar putea fi greșit și că textul corect ar fi „scara”." },
        { id: "b", text: "Că întregul vers trebuie eliminat din poezie, pentru că nu are sens." },
        { id: "c", text: "Că „răzvrătită” ar fi un cuvânt inventat de editori." },
        { id: "d", text: "Că Arghezi însuși a corectat versul într-un manuscris." },
      ],
      correctOptionId: "a",
      explanation:
        "Autorul crede că textul corect ar fi „scara”, urcată „treaptă după treaptă”, dar recunoaște că nu are manuscrise sau variante: este o ipoteză. Celelalte variante nu apar în articol.",
      lessonSection: { id: "5-2-o-chestiune-de-text-seara-sau-scara", label: "5.2. O chestiune de text: „seara” sau „scara”?" },
      basis: "Lecția, 5.2; sursa: Funeriu (2020).",
    },
    {
      id: "testament-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în fragmentele citate?",
      options: [
        { id: "a", text: "Poetul se adresează unui „fiu”." },
        { id: "b", text: "Primele opt versuri au rimă împerecheată." },
        { id: "c", text: "Poetul apare ca meșteșugar al cuvântului." },
        { id: "d", text: "Versul „Sapa-n condei și brazda-n climar” conține cuvântul „condei”." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte enunțuri se verifică în text. Că poetul apare ca meșteșugar este o lectură a imaginii cu sapa și condeiul, care trebuie argumentată.",
      lessonSection: { id: "7-fapt-si-interpretare", label: "7. Fapt și interpretare" },
      basis: "Lecția, 3.2, 6.2 și 7.",
    },
    {
      id: "testament-mc-robul",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Cum poate fi citit, ca interpretare, versul „Robul a scris-o, Domnul o citește”?",
      options: [
        { id: "a", text: "Ca o dovadă că poezia a fost scrisă la comandă." },
        { id: "b", text: "Ca o plângere a poetului împotriva editorilor." },
        { id: "c", text: "Ca o imagine a unui dialog între doi prieteni poeți." },
        { id: "d", text: "Ca un contrast între cel care scrie (robul) și cel care citește (Domnul), care nu vede suferința ascunsă în carte." },
      ],
      correctOptionId: "d",
      explanation:
        "În fragmentul citat în articol, „Domnul” citește „fără-a cunoaște c-n adâncul ei / zace mânia bunilor mei”; lecția citește versul ca pe un contrast între cel care scrie și cel care citește. Celelalte lecturi nu au suport în fragment.",
      lessonSection: { id: "6-3-robul-a-scris-o-domnul-o-citeste", label: "6.3. „Robul a scris-o, Domnul o citește”" },
      basis: "Lecția, 6.3; sursa: Parpală (2009).",
    },
    {
      id: "testament-af-volum",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Potrivit articolului consultat, „Testament” este primul text din volumul „Cuvinte potrivite”.",
      correct: true,
      explanation:
        "Adevărat: articolul din „Studii de știință și cultură” (2009) spune că primul text din „Cuvinte potrivite” este „Testament”. Anul volumului (1927) apare în alte surse secundare.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 10; sursa: Parpală (2009).",
    },
    {
      id: "testament-af-integral",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția a verificat textul integral al poeziei „Testament” într-o ediție.",
      correct: false,
      explanation:
        "Fals. Lecția spune că textul integral nu a fost consultat într-o ediție verificată; se bazează pe fragmente citate în două articole. De aceea trebuie completată cu poezia din manual.",
      lessonSection: { id: "10-surse-si-limite", label: "10. Surse și limite" },
      basis: "Lecția, 10.",
    },
    {
      id: "testament-af-scara",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Ipoteza „scara” în loc de „seara” este o corectură acceptată, cu dovezi din manuscrise.",
      correct: false,
      explanation:
        "Fals. Autorul articolului o prezintă ca ipoteză și recunoaște că nu are manuscrise sau variante; lecția o numește „ipoteză, nu o corectură acceptată”.",
      lessonSection: { id: "5-2-o-chestiune-de-text-seara-sau-scara", label: "5.2. O chestiune de text: „seara” sau „scara”?" },
      basis: "Lecția, 5.2; sursa: Funeriu (2020).",
    },
    {
      id: "testament-ra-volum",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește volumul în care apare poezia „Testament”?",
      grading: { mode: "keywords", requiredGroups: [["cuvinte"], ["potrivite"]] },
      modelAnswer: "Cuvinte potrivite.",
      maxLength: 100,
      explanation:
        "„Testament” este primul text din volumul „Cuvinte potrivite” (1927, după surse secundare). Răspunsul trebuie să conțină ambele cuvinte din titlu.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2.",
    },
    {
      id: "testament-ra-imagine",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, imaginea „Sapa-n condei și brazda-n climar”, legând-o de tema poeziei. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat ce spune versul: sapa devine condei, iar brazda devine climară.",
          "Am numit transformarea (munca pământului → munca cuvântului) sau imaginea poetului ca meșteșugar.",
          "Am formulat o interpretare legată de tema concepției despre artă.",
          "Am folosit un citat scurt și verificat (de exemplu, „Sapa-n condei și brazda-n climar”).",
        ],
      },
      modelAnswer:
        "Versul spune că sapa devine condei, iar brazda devine climară (fapt). Obiectele muncii pământului devin obiecte ale scrisului: poetul este înfățișat ca meșteșugar care muncește cuvântul, așa cum țăranul muncește pământul. Interpretare: imaginea susține tema artei ca muncă și ca moștenire lăsată urmașilor.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă textul de interpretare, numește transformarea, folosește un citat scurt și o leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-sapa-n-condei-si-brazda-n-climar", label: "6.2. „Sapa-n condei și brazda-n climar”" },
      basis: "Lecția, 3.2 și 6.2; sursa: Parpală (2009).",
    },
  ],
};
