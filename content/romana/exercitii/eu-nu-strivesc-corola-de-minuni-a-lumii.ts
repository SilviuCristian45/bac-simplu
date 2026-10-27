import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Eu nu strivesc corola de minuni a lumii”
 * (content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Versurile au fost găsite citate în trei surse secundare; textul integral nu a
 * fost consultat (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const blagaExercises: ExerciseSet = {
  key: "romana/eu-nu-strivesc-corola-de-minuni-a-lumii",
  subject: "romana",
  work: "eu-nu-strivesc-corola-de-minuni-a-lumii",
  title: "„Eu nu strivesc corola de minuni a lumii” de Lucian Blaga",
  exercises: [
    {
      id: "blaga-mc-specia",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum este încadrată poezia după specie, în lecție?",
      options: [
        { id: "a", text: "Artă poetică." },
        { id: "b", text: "Baladă populară." },
        { id: "c", text: "Doină de jale." },
        { id: "d", text: "Satiră politică." },
      ],
      correctOptionId: "a",
      explanation:
        "Poezia este o artă poetică: poetul își exprimă atitudinea față de lume și de creație. Nu este baladă, doină sau satiră.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; fișa ISJ Dolj.",
    },
    {
      id: "blaga-mc-titlu",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce relație există între titlul poeziei și primul ei vers?",
      options: [
        { id: "a", text: "Sunt diferite: primul vers descrie o noapte." },
        { id: "b", text: "Primul vers explică titlul." },
        { id: "c", text: "Titlul este mai lung decât primul vers." },
        { id: "d", text: "Titlul reia chiar primul vers." },
      ],
      correctOptionId: "d",
      explanation:
        "Titlul este și primul vers: „Eu nu strivesc corola de minuni a lumii”. Celelalte variante nu corespund textului.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2; sursele consultate.",
    },
    {
      id: "blaga-mc-volum",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "În ce volum este așezată poezia, după fișa ISJ Dolj?",
      options: [
        { id: "a", text: "Lauda somnului." },
        { id: "b", text: "Poemele luminii." },
        { id: "c", text: "La cumpăna apelor." },
        { id: "d", text: "În marea trecere." },
      ],
      correctOptionId: "b",
      explanation:
        "Fișa spune că poezia este așezată în fruntea volumului „Poemele luminii” (1919). Celelalte sunt alte volume ale lui Blaga și nu sunt volumul din fișă.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 11; fișa ISJ Dolj.",
    },
    {
      id: "blaga-mc-negatie",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce sens au negațiile „nu strivesc”, „nu ucid”, „nu micșorează”, după lecție?",
      options: [
        { id: "a", text: "Sens pozitiv: dorința de a păstra misterul." },
        { id: "b", text: "Exprimă teama poetului față de lume și de oameni." },
        { id: "c", text: "Arată indiferența poetului față de misterul lumii." },
        { id: "d", text: "Sunt simple formule de politețe, fără sens poetic." },
      ],
      correctOptionId: "a",
      explanation:
        "Articolul Frățean (2022) notează că negațiile verbale din poezie au un înțeles pozitiv și exprimă ideea de adâncire a misterului. Celelalte lecturi nu au suport în fragmentele citate.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2; sursa: Frățean (2022).",
    },
    {
      id: "blaga-mc-luna",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce face luna, în comparația citată în fișa ISJ?",
      options: [
        { id: "a", text: "Luminează tot și alungă taina nopții." },
        { id: "b", text: "Mărește taina nopții." },
        { id: "c", text: "Se ascunde în spatele norilor." },
        { id: "d", text: "Se stinge la răsăritul soarelui." },
      ],
      correctOptionId: "b",
      explanation:
        "Versurile spun că luna „nu micșorează, ci tremurătoare / mărește și mai tare taina nopții”. Imaginea arată cunoașterea poetică, care sporește misterul. Nu luminează ca să-l alunge și nu se ascunde.",
      lessonSection: { id: "6-2-imaginea-imbogatirii-misterului", label: "6.2. Imaginea îmbogățirii misterului" },
      basis: "Lecția, 6.2; fișa ISJ Dolj.",
    },
    {
      id: "blaga-mc-final",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce declară poetul în finalul poeziei, după fișa ISJ?",
      options: [
        { id: "a", text: "Că urăște orice cunoaștere, inclusiv pe cea poetică." },
        { id: "b", text: "Că iubește doar florile din grădina copilăriei." },
        { id: "c", text: "Că iubește flori, ochi, buze și morminte." },
        { id: "d", text: "Că vrea să părăsească lumea și să trăiască singur." },
      ],
      correctOptionId: "c",
      explanation:
        "Finalul spune: „căci eu iubesc / și flori și ochi și buze și morminte”: o enumerație care cuprinde viața și moartea. Nu urăște cunoașterea, nu iubește doar florile și nu vrea să plece.",
      lessonSection: { id: "6-3-ideea-finala-iubirea", label: "6.3. Ideea finală: iubirea" },
      basis: "Lecția, 6.3; fișa ISJ Dolj.",
    },
    {
      id: "blaga-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în fragmentele citate?",
      options: [
        { id: "a", text: "Titlul poeziei coincide cu primul vers al poeziei, ca fapt de text." },
        { id: "b", text: "Un vers spune „căci eu iubesc”." },
        { id: "c", text: "Poetul se compară cu luna, ca imagine a cunoașterii poetice." },
        { id: "d", text: "Poezia conține verbul „nu strivesc”." },
      ],
      correctOptionId: "c",
      explanation:
        "Celelalte enunțuri se verifică în versurile citate. Că poetul se compară cu luna ca imagine a cunoașterii poetice este o lectură a comparației, care trebuie argumentată.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 6.2 și 8.",
    },
    {
      id: "blaga-mc-tema",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care formulare a temei este susținută de fragmentele verificate, după lecție?",
      options: [
        { id: "a", text: "Triumful rațiunii asupra misterului, prin cunoaștere științifică." },
        { id: "b", text: "A păstra și a adânci misterul prin creație și iubire." },
        { id: "c", text: "Nostalgia copilăriei petrecute la sat, în casa bunicilor." },
        { id: "d", text: "Critica societății contemporane poetului și a politicienilor." },
      ],
      correctOptionId: "b",
      explanation:
        "Negațiile (nu strivesc, nu ucid), imaginea îmbogățirii misterului și finalul despre iubire susțin această temă (interpretare). Celelalte teme nu au suport în fragmente.",
      lessonSection: { id: "4-1-tema", label: "4.1. Tema" },
      basis: "Lecția, 4.1.",
    },
    {
      id: "blaga-af-integral",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția a verificat textul integral al poeziei într-o ediție.",
      correct: false,
      explanation:
        "Fals. Lecția spune că textul integral nu a fost consultat într-o ediție verificată; se bazează pe fragmente din trei surse secundare. Poezia trebuie citită integral în manual.",
      lessonSection: { id: "11-surse-si-limite", label: "11. Surse și limite" },
      basis: "Lecția, începutul și 11.",
    },
    {
      id: "blaga-af-opozitie",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "După fișa ISJ, relația de opoziție principală este între „lumina mea” și „lumina altora”.",
      correct: true,
      explanation:
        "Adevărat: fișa spune că poezia se organizează în jurul opoziției dintre „lumina mea” și „lumina altora”. Lecția precizează că împărțirea în secvențe este a fișei și nu a fost verificată pe text.",
      lessonSection: { id: "5-1-trei-secvente-dupa-fisa-isj", label: "5.1. Trei secvențe, după fișa ISJ" },
      basis: "Lecția, 5.1; fișa ISJ Dolj.",
    },
    {
      id: "blaga-af-rima",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Lecția confirmă pe text că poezia are exact 20 de versuri libere.",
      correct: false,
      explanation:
        "Fals. Numărul de 20 de versuri și caracterul de vers liber sunt preluate din fișa ISJ; lecția spune că nu a verificat numărătoarea pe text și recomandă verificarea în manual.",
      lessonSection: { id: "5-2-versuri-libere", label: "5.2. Versuri libere" },
      basis: "Lecția, 2 și 5.2; fișa ISJ Dolj.",
    },
    {
      id: "blaga-af-pozitie",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Faptul că poetul alege „cunoașterea luciferică” este o afirmație explicită din poezie.",
      correct: false,
      explanation:
        "Fals. Termenii „cunoaștere paradisiacă” și „luciferică” sunt din filosofia lui Blaga, așa cum o descrie fișa ISJ; lecția îi folosește ca interpretare a poeziei, nu ca vorbe ale poeziei.",
      lessonSection: { id: "3-2-trasaturi-care-pot-fi-aratate", label: "3.2. Trăsături care pot fi arătate" },
      basis: "Lecția, 3.2; fișa ISJ Dolj.",
    },
    {
      id: "blaga-ra-volum",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește volumul în fruntea căruia este așezată poezia?",
      grading: { mode: "keywords", requiredGroups: [["poemele"], ["luminii"]] },
      modelAnswer: "Poemele luminii.",
      maxLength: 100,
      explanation:
        "Fișa ISJ Dolj spune că poezia este așezată în fruntea volumului „Poemele luminii” (1919). Răspunsul trebuie să conțină ambele cuvinte din titlu.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; fișa ISJ Dolj.",
    },
    {
      id: "blaga-ra-imagine",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, ideea din versurile „așa îmbogățesc și eu întunecata zare / cu largi fiori de sfânt mister”, legând-o de tema poeziei. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat ce spun versurile: poetul îmbogățește „întunecata zare” cu „sfânt mister”.",
          "Am numit o figură sau un procedeu (de exemplu, comparația cu luna, metafora zării) și am arătat cum apare.",
          "Am formulat o interpretare legată de tema misterului și a cunoașterii poetice.",
          "Am folosit un citat scurt și verificat în manualul meu.",
        ],
      },
      modelAnswer:
        "Versurile spun că poetul îmbogățește „întunecata zare” cu „largi fiori de sfânt mister” (fapt). Imaginea continuă comparația cu luna, care nu micșorează taina nopții, ci o mărește. Interpretare: poetul susține o cunoaștere care sporește misterul, în sprijinul temei apărării tainei lumii.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă textul de interpretare, numește un procedeu, folosește un citat scurt și îl leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-imaginea-imbogatirii-misterului", label: "6.2. Imaginea îmbogățirii misterului" },
      basis: "Lecția, 4.1 și 6.2; surse: Neca (2022), fișa ISJ Dolj.",
    },
  ],
};
