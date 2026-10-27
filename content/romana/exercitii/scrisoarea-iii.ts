import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Scrisoarea III” (content/romana/opere/scrisoarea-iii.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Versurile au fost verificate pe transcrierea Wikisource a poemului
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const scrisoareaIIIExercises: ExerciseSet = {
  key: "romana/scrisoarea-iii",
  subject: "romana",
  work: "scrisoarea-iii",
  title: "„Scrisoarea III” de Mihai Eminescu",
  exercises: [
    {
      id: "scrisoarea3-mc-vis",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cu ce scenă începe poemul?",
      options: [
        { id: "a", text: "Cu bătălia dintre Mircea și Baiazid." },
        { id: "b", text: "Cu satira împotriva politicienilor." },
        { id: "c", text: "Cu visul unui sultan." },
        { id: "d", text: "Cu biletul unui fiu de domn." },
      ],
      correctOptionId: "c",
      explanation:
        "Poemul începe cu visul unui sultan: „Un sultan dintre aceia ce domnesc peste vro limbă”. Bătălia, biletul și satira vin mai târziu.",
      lessonSection: { id: "6-1-visul-sultanului", label: "6.1. Visul sultanului" },
      basis: "Lecția, 6.1; poemul, începutul.",
    },
    {
      id: "scrisoarea3-mc-rima",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce fel de rimă au versurile lungi ale poemului?",
      options: [
        { id: "a", text: "Împerecheată (aabb)." },
        { id: "b", text: "Încrucișată (abab), ca într-o strofă clasică." },
        { id: "c", text: "Îmbrățișată (abba)." },
        { id: "d", text: "Nu au rimă." },
      ],
      correctOptionId: "a",
      explanation:
        "Versurile rimează două câte două: „limbă – schimbă”, „dreaptă – deșteaptă”. Este rimă împerecheată; nu este încrucișată sau îmbrățișată, iar poemul nu este în vers alb.",
      lessonSection: { id: "5-2-versul-si-rima", label: "5.2. Versul și rima" },
      basis: "Lecția, 2 și 5.2; poemul, primele versuri.",
    },
    {
      id: "scrisoarea3-mc-tepes",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Pe cine invocă poetul la sfârșitul satirei, ca să-i pedepsească pe politicieni?",
      options: [
        { id: "a", text: "Pe Țepeș." },
        { id: "b", text: "Pe Mircea." },
        { id: "c", text: "Pe Baiazid." },
        { id: "d", text: "Pe Apollo." },
      ],
      correctOptionId: "a",
      explanation:
        "Poetul spune: „Cum nu vii tu, Țepeș doamne, ca punînd mîna pe ei”. Mircea și Baiazid apar în partea epică; Apollo este invocat mai devreme, în alt context.",
      lessonSection: { id: "6-4-satira", label: "6.4. Satira" },
      basis: "Lecția, 6.4; poemul, finalul.",
    },
    {
      id: "scrisoarea3-mc-mircea",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce spune Mircea că apără, când sultanul îi cere să se supună?",
      options: [
        { id: "a", text: "Gloria și tronul de la Roma." },
        { id: "b", text: "Sărăcia, nevoile și neamul." },
        { id: "c", text: "Bogățiile cetăților de pe Dunăre." },
        { id: "d", text: "Alianța cu regii Apusului." },
      ],
      correctOptionId: "b",
      explanation:
        "Mircea răspunde: „Eu? Îmi apăr sărăcia și nevoile și neamul…”. Gloria și laurii sunt motivele pentru care, spune el, au venit cavalerii Apusului, nu ale lui.",
      lessonSection: { id: "6-2-dialogul-mircea-baiazid", label: "6.2. Dialogul Mircea–Baiazid" },
      basis: "Lecția, 6.2; poemul, dialogul dintre Mircea și Baiazid.",
    },
    {
      id: "scrisoarea3-mc-bilet",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine scrie biletul în versuri, după bătălie?",
      options: [
        { id: "a", text: "Sultanul Baiazid, pentru soția lui." },
        { id: "b", text: "Mircea, pentru oastea lui." },
        { id: "c", text: "Un fiu al domnului, pentru cea pe care o iubește." },
        { id: "d", text: "Poetul, pentru cititori." },
      ],
      correctOptionId: "c",
      explanation:
        "Textul spune: „unul dintre fiii falnicului domn / Sta zîmbind de-o amintire, pe genunchi scriind o carte, / S-o trimiță dragei sale”. Nu sultanul, nu Mircea și nu poetul.",
      lessonSection: { id: "6-3-biletul", label: "6.3. Biletul" },
      basis: "Lecția, 6.3; poemul, partea a III-a.",
    },
    {
      id: "scrisoarea3-mc-antiteza",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce opune antiteza principală a poemului?",
      options: [
        { id: "a", text: "Un trecut eroic și un prezent degradat." },
        { id: "b", text: "Natura calmă și orașul agitat." },
        { id: "c", text: "Visul și realitatea unei iubiri personale." },
        { id: "d", text: "Credința creștină și credința musulmană." },
      ],
      correctOptionId: "a",
      explanation:
        "Poemul opune vremea eroilor („cronicarii și rapsozii”) prezentului („saltimbancii și irozii”). Credințele diferite apar doar în episodul bătăliei și nu sunt miezul antitezei.",
      lessonSection: { id: "3-3-trasaturi-ale-romantismului", label: "3.3. Trăsături ale romantismului" },
      basis: "Lecția, 3.3 și 4.1; poemul, trecerea spre satiră.",
    },
    {
      id: "scrisoarea3-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în text?",
      options: [
        { id: "a", text: "În poem există un dialog între Mircea și Baiazid." },
        { id: "b", text: "Un fiu al domnului scrie un bilet în versuri către iubită." },
        { id: "c", text: "Poetul îl cheamă pe Țepeș." },
        { id: "d", text: "Iubirea de țară este o forță mai puternică decât oastea." },
      ],
      correctOptionId: "d",
      explanation:
        "Primele trei enunțuri se verifică în text. Mircea spune doar că „iubirea de moșie e un zid”; că ea este mai puternică decât oastea este o lectură a versului.",
      lessonSection: { id: "9-fapt-si-interpretare", label: "9. Fapt și interpretare" },
      basis: "Lecția, 6.2 și 9.",
    },
    {
      id: "scrisoarea3-mc-apostrofa",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce figură de stil ilustrează versul „Cum nu vii tu, Țepeș doamne”?",
      options: [
        { id: "a", text: "Comparație." },
        { id: "b", text: "Hiperbolă." },
        { id: "c", text: "Oximoron." },
        { id: "d", text: "Apostrofă." },
      ],
      correctOptionId: "d",
      explanation:
        "Poetul se adresează direct unei persoane absente (Țepeș) ca și cum ar fi de față: este o apostrofă. Nu este comparație, hiperbolă sau oximoron.",
      lessonSection: { id: "8-limbaj-artistic", label: "8. Limbaj artistic" },
      basis: "Lecția, 5.3 și 8; poemul, finalul.",
    },
    {
      id: "scrisoarea3-af-dialog",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Mircea îi răspunde sultanului că acceptă să i se supună.",
      correct: false,
      explanation:
        "Fals. Mircea îi spune sultanului: „Despre parte închinării însă, doamne, să ne ierți”; refuză închinarea și apără „sărăcia și nevoile și neamul”.",
      lessonSection: { id: "6-2-dialogul-mircea-baiazid", label: "6.2. Dialogul Mircea–Baiazid" },
      basis: "Lecția, 6.2; poemul, partea a II-a.",
    },
    {
      id: "scrisoarea3-af-bilet",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Biletul din poem este scris în versuri scurte, rimate două câte două.",
      correct: true,
      explanation:
        "Adevărat: „De din vale de Rovine / Grăim, Doamnă, către Tine” este în versuri scurte, cu rimă împerecheată. Ritmul diferă de cel al părții epice.",
      lessonSection: { id: "5-2-versul-si-rima", label: "5.2. Versul și rima" },
      basis: "Lecția, 5.2; poemul, biletul.",
    },
    {
      id: "scrisoarea3-af-strofe",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Poemul este împărțit în strofe regulate, de câte patru versuri.",
      correct: false,
      explanation:
        "Fals. Poemul este împărțit în blocuri inegale de versuri lungi, rimate două câte două, fără strofe regulate de patru versuri.",
      lessonSection: { id: "5-2-versul-si-rima", label: "5.2. Versul și rima" },
      basis: "Lecția, 5.2.",
    },
    {
      id: "scrisoarea3-ra-apar",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește sultanul care apare în poem?",
      grading: { mode: "keywords", requiredGroups: [["baiazid", "bayezid"]] },
      modelAnswer: "Baiazid.",
      maxLength: 100,
      explanation: "Sultanul este Baiazid, care pornește cu oastea peste Dunăre și se întâlnește cu Mircea.",
      lessonSection: { id: "7-personajele", label: "7. Personajele" },
      basis: "Lecția, 7; poemul.",
    },
    {
      id: "scrisoarea3-ra-satira",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, antiteza dintre trecut și prezent, folosind versurile „De-așa vremi se-nvredniciră cronicarii și rapsozii; / Veacul nostru ni-l umplură saltimbancii și irozii…”. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat ce opun versurile: „cronicarii și rapsozii” față de „saltimbancii și irozii”.",
          "Am numit figura (antiteza) și am arătat cum apare în text.",
          "Am formulat o interpretare legată de tema contrastului dintre trecutul eroic și prezentul degradat.",
          "Am folosit un citat scurt și verificat.",
        ],
      },
      modelAnswer:
        "Versurile opun „cronicarii și rapsozii”, care au putut cânta faptele eroilor, „saltimbancilor și irozilor” din vremea poetului (fapt). Antiteza arată o distanță între cele două epoci. Interpretare: poetul spune că prezentul nu mai are eroi, ci demagogi, ceea ce pregătește satira din finalul poemului.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă textul de interpretare, numește figura, folosește un citat scurt și o leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "3-3-trasaturi-ale-romantismului", label: "3.3. Trăsături ale romantismului" },
      basis: "Lecția, 3.3 și 8; poemul, trecerea spre satiră.",
    },
  ],
};
