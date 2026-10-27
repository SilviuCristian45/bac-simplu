import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „O scrisoare pierdută” (content/romana/opere/o-scrisoare-pierduta.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele și citatele au fost verificate pe transcrierea Wikisource a piesei
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const oScrisoarePierdutaExercises: ExerciseSet = {
  key: "romana/o-scrisoare-pierduta",
  subject: "romana",
  work: "o-scrisoare-pierduta",
  title: "„O scrisoare pierdută” de I. L. Caragiale",
  exercises: [
    {
      id: "scrisoare-mc-pierde",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine pierde scrisoarea de dragoste la începutul acțiunii?",
      options: [
        { id: "a", text: "Tipătescu, autorul scrisorii." },
        { id: "b", text: "Zoe, căreia îi era adresată." },
        { id: "c", text: "Trahanache, soțul lui Zoe." },
        { id: "d", text: "Pristanda, polițaiul orașului." },
      ],
      correctOptionId: "b",
      explanation:
        "Zoe spune că scrisoarea poate să-i fi căzut din buzunar odată cu batista (actul I, scena V). Cațavencu o pierde mai târziu, în căptușeala pălăriei, dar la începutul acțiunii scrisoarea este pierdută de Zoe. Tipătescu a scris-o, Trahanache o recită, iar Pristanda nu o are.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2; piesa, I, 5.",
    },
    {
      id: "scrisoare-mc-specia",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum se încadrează „O scrisoare pierdută” ca specie, după lecție?",
      options: [
        { id: "a", text: "Comedie de moravuri." },
        { id: "b", text: "Dramă romantică." },
        { id: "c", text: "Tragedie clasică." },
        { id: "d", text: "Nuvelă realistă." },
      ],
      correctOptionId: "a",
      explanation:
        "Piesa este o comedie de moravuri: satirizează obiceiurile unei societăți (politicianism, șantaj, corupție) și se încheie cu o împăcare comică. Drama și tragedia presupun un deznodământ grav, iar nuvela este o specie epică, nu dramatică.",
      lessonSection: { id: "3-2-specia-comedia", label: "3.2. Specia: comedia" },
      basis: "Lecția, 3.2; programa 2014, p. 4 („specii dramatice: comedia, drama”).",
    },
    {
      id: "scrisoare-mc-formula",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Care personaj repetă mereu formula „Ai puțintică răbdare”?",
      options: [
        { id: "a", text: "Zaharia Trahanache." },
        { id: "b", text: "Ghiță Pristanda." },
        { id: "c", text: "Nae Cațavencu." },
        { id: "d", text: "Agamemnon Dandanache." },
      ],
      correctOptionId: "a",
      explanation:
        "„Ai puțintică răbdare” este un tic verbal al lui Trahanache, prezent în aproape fiecare replică a lui. Pristanda are alt tic („Curat!”), Cațavencu vorbește pompos, iar Dandanache este recunoscut după vorbirea peltică.",
      lessonSection: { id: "7-4-zaharia-trahanache", label: "7.4. Zaharia Trahanache" },
      basis: "Lecția, 7.4 și 7.9; piesa, actele I–III.",
    },
    {
      id: "scrisoare-mc-pret",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce îi cere Cațavencu lui Tipătescu, în actul II, în schimbul scrisorii?",
      options: [
        { id: "a", text: "O sumă mare de bani, plătită pe loc de Tipătescu." },
        { id: "b", text: "Să fie sprijinit în alegeri, ca să devină deputat." },
        { id: "c", text: "Funcția de prefect al județului, în locul lui Tipătescu." },
        { id: "d", text: "Mutarea lui Pristanda din oraș, ca să nu mai fie spionat." },
      ],
      correctOptionId: "b",
      explanation:
        "Cațavencu spune că vrea „mandatul de deputat” și adaugă: „nimic altceva”. Tipătescu îi propune mai întâi alte funcții, dar Cațavencu le refuză. Banii apar doar într-o replică a lui Pristanda din actul I, nu în cererea lui Cațavencu din actul II, iar funcția de prefect nu este pomenită.",
      lessonSection: { id: "7-5-nae-catavencu", label: "7.5. Nae Cațavencu" },
      basis: "Lecția, 7.5; piesa, II, 9.",
    },
    {
      id: "scrisoare-mc-poliza",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cu ce îl poate Trahanache amenința pe Cațavencu, în actul III, ca să-l oprească?",
      options: [
        { id: "a", text: "Cu o scrisoare scrisă de Cațavencu către Zoe, găsită în sala primăriei." },
        { id: "b", text: "Cu o poliță cu giruri falsificate de Cațavencu." },
        { id: "c", text: "Cu mărturia cetățeanului turmentat despre întrunirea de alaltăieri." },
        { id: "d", text: "Cu un articol din ziarul lui Cațavencu, publicat chiar în ziua aceea." },
      ],
      correctOptionId: "b",
      explanation:
        "Trahanache scoate o poliță ale cărei giruri Cațavencu le-a plastografiat ca să ia cinci mii de lei de la societate. O folosește ca armă. Celelalte variante nu apar în text.",
      lessonSection: { id: "6-3-secventa-3-intrunirea-si-lovitura-de-teatru-iii-5-7", label: "6.3. Secvența 3: întrunirea și lovitura de teatru (III, 5–7)" },
      basis: "Lecția, 6.3 și 7.5; piesa, I, 9 și III, 4.",
    },
    {
      id: "scrisoare-mc-dandanache",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum spune Dandanache că a obținut mandatul de deputat?",
      options: [
        { id: "a", text: "A câștigat alegerile cu voturile majorității cetățenilor din județ." },
        { id: "b", text: "A fost susținut de Trahanache și de Farfuridi, care i-au asigurat voturile din județ." },
        { id: "c", text: "A amenințat că publică o scrisoare de amor, dacă nu primește un colegiu." },
        { id: "d", text: "A cumpărat ziarul „Răcnetul Carpaților” și a publicat articole în favoarea lui." },
      ],
      correctOptionId: "c",
      explanation:
        "Dandanache povestește că a găsit o scrisoare de amor în buzunarul unui pardesiu uitat de o „persoană însemnată” și a spus: „Găseste-mi [...] un coledzi, ori dau scrisoarea la «Răsboiul»”. Mandatul vine din șantaj, nu din vot sau din sprijinul local.",
      lessonSection: { id: "7-8-agamemnon-dandanache-si-cetateanul-turmentat", label: "7.8. Agamemnon Dandanache și cetățeanul turmentat" },
      basis: "Lecția, 7.8; piesa, IV, 3.",
    },
    {
      id: "scrisoare-mc-palarie",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Unde a fost găsită scrisoarea la final și de cine?",
      options: [
        { id: "a", text: "În căptușeala pălăriei lui Cațavencu, de cetățeanul turmentat." },
        { id: "b", text: "În ziarul „Răcnetul Carpaților”, într-un număr găsit de Farfuridi." },
        { id: "c", text: "În buzunarul unui pardesiu uitat, găsit de Dandanache acasă la el." },
        { id: "d", text: "Sub banca din sala primăriei, de către Pristanda, după întrunire." },
      ],
      correctOptionId: "a",
      explanation:
        "Cațavencu își ținea scrisoarea în căptușeala pălăriei și a pierdut-o în scandalul de la întrunire. Cetățeanul turmentat a găsit pălăria, a vrut să-i lărgească căptușeala și a dat peste scrisoare, pe care i-o dă lui Zoe. Pardesiul este cel din povestea lui Dandanache, altă scrisoare.",
      lessonSection: { id: "6-4-secventa-4-finalul-iv-8-14", label: "6.4. Secvența 4: finalul (IV, 8–14)" },
      basis: "Lecția, 6.4; piesa, IV, 7–8.",
    },
    {
      id: "scrisoare-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt care se verifică în text?",
      options: [
        { id: "a", text: "Piesa are patru acte, împărțite în scene." },
        { id: "b", text: "Dandanache este ales deputat, în ultimul act." },
        { id: "c", text: "Cațavencu urcă la tribună și ține un discurs în actul III." },
        { id: "d", text: "Finalul arată o lume care nu se schimbă." },
      ],
      correctOptionId: "d",
      explanation:
        "Primele trei enunțuri se pot verifica în text. Faptul că finalul arată o lume care nu se schimbă este o lectură: se poate susține cu argumente (toți se împacă, nimic nu se rezolvă moral), dar nu este afirmat în piesă.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 4.1, 6.4 și 8; piesa, IV, 14.",
    },
    {
      id: "scrisoare-mc-comic",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Farfuridi spune: „ori să se revizuiască, primesc! dar să nu se schimbe nimica; ori să nu se revizuiască, primesc! dar atunci să se schimbe pe ici pe colo”. Ce tip de comic ilustrează cel mai bine?",
      options: [
        { id: "a", text: "Comic de nume." },
        { id: "b", text: "Comic de limbaj." },
        { id: "c", text: "Comic de situație." },
        { id: "d", text: "Comic de decor." },
      ],
      correctOptionId: "b",
      explanation:
        "Fraza are forma unei dileme, dar este o contradicție: comicul vine din felul în care e spusă. Este comic de limbaj. Numele personajului nu contează aici, situația (un discurs la o întrunire) este doar cadrul, iar „comic de decor” nu e un tip folosit în lecție.",
      lessonSection: { id: "3-4-comicul", label: "3.4. Comicul" },
      basis: "Lecția, 3.4 și 6.2; piesa, III, 1.",
    },
    {
      id: "scrisoare-af-acte",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "„O scrisoare pierdută” are cinci acte.",
      correct: false,
      explanation: "Fals. Piesa are patru acte: actul I are 9 scene, actul II 14, actul III 7, actul IV 14.",
      lessonSection: { id: "5-1-cele-patru-acte", label: "5.1. Cele patru acte" },
      basis: "Lecția, 2 și 5.1; piesa.",
    },
    {
      id: "scrisoare-af-cetatean",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement:
        "Cetățeanul turmentat găsește scrisoarea de două ori: o dată pe drum, o dată în căptușeala pălăriei lui Cațavencu.",
      correct: true,
      explanation:
        "Adevărat. În actul I el povestește că a găsit scrisoarea pe drum, după întrunirea de alaltăieri, și că Cațavencu i-a luat-o. În actul IV o găsește din nou, în căptușeala pălăriei pe care Cațavencu o pierduse. Asta e și o parte a comicului de situație.",
      lessonSection: { id: "3-4-comicul", label: "3.4. Comicul" },
      basis: "Lecția, 3.4 și 6.4; piesa, I, 7 și IV, 8.",
    },
    {
      id: "scrisoare-af-zoe",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Zoe îl iartă pe Cațavencu la final fără să-i pună nicio condiție.",
      correct: false,
      explanation:
        "Fals. Zoe îi spune că e „scăpat”, dar cu o condiție: să conducă manifestația publică, să prezideze banchetul și să vină să-i salute pe deputatul ales și pe prefect.",
      lessonSection: { id: "6-4-secventa-4-finalul-iv-8-14", label: "6.4. Secvența 4: finalul (IV, 8–14)" },
      basis: "Lecția, 6.4; piesa, IV, 9.",
    },
    {
      id: "scrisoare-af-trahanache",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement:
        "Lecția afirmă ca fapt, verificat în text, că Trahanache știe de relația dintre Zoe și Tipătescu.",
      correct: false,
      explanation:
        "Fals. Lecția spune că piesa nu hotărăște acest lucru: replicile lui Trahanache se pot citi și ca naivitate, și ca prefăcătorie. Este o interpretare deschisă, pe care trebuie să o argumentezi, nu un fapt.",
      lessonSection: { id: "7-4-zaharia-trahanache", label: "7.4. Zaharia Trahanache" },
      basis: "Lecția, 7.4 și 8.",
    },
    {
      id: "scrisoare-ra-acte",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Câte acte are piesa? Scrie numărul în cifre sau în litere.",
      grading: { mode: "keywords", requiredGroups: [["4", "patru"]] },
      modelAnswer: "Patru acte.",
      maxLength: 100,
      explanation: "Piesa are patru acte, împărțite în scene: actul I are 9, actul II 14, actul III 7, iar actul IV 14.",
      lessonSection: { id: "5-1-cele-patru-acte", label: "5.1. Cele patru acte" },
      basis: "Lecția, 2 și 5.1; piesa.",
    },
    {
      id: "scrisoare-ra-farfuridi",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, discursul lui Farfuridi din actul III (scena 1), legându-l de comicul de limbaj. Separă ce se întâmplă în text de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat faptele: Farfuridi vorbește la întrunire, este întrerupt și ajunge la dilema despre revizuire.",
          "Am numit tipul de comic (de limbaj) și am arătat că reiese din text.",
          "Am formulat o interpretare (de exemplu, satira unui discurs gol sau a admirației de grup), nu doar am repovestit.",
          "Am folosit un citat scurt și verificat (de exemplu, „Din două una, dați-mi voie”).",
        ],
      },
      modelAnswer:
        "La întrunire, Farfuridi vrea să spună „scurt” părerea lui, dar începe de la 1821, e întrerupt și ajunge la dilema revizuirii: „ori să se revizuiască, primesc! dar să nu se schimbe nimica” (fapte). Fraza pare o dilemă, dar este o contradicție: comicul este de limbaj. Interpretare: discursul arată un orator care vrea să pară profund și un public care aplaudă fără să înțeleagă.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește tipul de comic, îl susține cu un citat scurt și îl leagă de tema piesei. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-2-secventa-2-discursul-lui-farfuridi-iii-1", label: "6.2. Secvența 2: discursul lui Farfuridi (III, 1)" },
      basis: "Lecția, 3.4 și 6.2; piesa, III, 1.",
    },
  ],
};
