import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Alexandru Lăpușneanul” (content/romana/opere/alexandru-lapusneanul.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele și citatele au fost verificate pe text în două ediții
 * (vezi docs/rapoarte/audit-alexandru-lapusneanul-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const alexandruLapusneanulExercises: ExerciseSet = {
  key: "romana/alexandru-lapusneanul",
  subject: "romana",
  work: "alexandru-lapusneanul",
  title: "„Alexandru Lăpușneanul” de Costache Negruzzi",
  exercises: [
    {
      id: "lapusneanul-mc-motto-boieri",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cui îi răspunde Lăpușneanul cu replica „Dacă voi nu mă vreți, eu vă vreu…”?",
      options: [
        { id: "a", text: "Doamnei Ruxanda, care îl roagă să nu mai verse sânge." },
        { id: "b", text: "Mulțimii adunate la porțile curții după ospăț." },
        { id: "c", text: "Boierilor trimiși să-i spună că țara nu îl vrea." },
        { id: "d", text: "Mitropolitului, care îl călugărește la Hotin." },
      ],
      correctOptionId: "c",
      explanation:
        "Replica, devenită motto-ul capitolului I, este răspunsul dat boierilor care îi spun că „norodul nu te vrea, nici te iubește” și îi cer să se întoarcă. Ruxanda apare în capitolul II, mulțimea în capitolul III, iar mitropolitul în capitolul IV.",
      lessonSection: { id: "5-2-secventa-1-intalnirea-cu-solii-boierilor", label: "5.2. Secvența 1: întâlnirea cu solii boierilor" },
      basis: "Lecția, 4.3 și 5.2; nuvela, cap. I.",
    },
    {
      id: "lapusneanul-mc-aparitie",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Unde a apărut pentru prima dată nuvela „Alexandru Lăpușneanul”?",
      options: [
        { id: "a", text: "În primul număr al revistei Dacia literară, în 1840." },
        { id: "b", text: "În revista Convorbiri literare, în anul 1877." },
        { id: "c", text: "În volumul Novele din popor, apărut în 1881." },
        { id: "d", text: "Într-un letopiseț al Moldovei, scris de Miron Costin." },
      ],
      correctOptionId: "a",
      explanation:
        "Nuvela a apărut în primul număr al „Daciei literare” (1840), ca parte a ciclului „Scene istorice din cronicele Moldaviei”, apoi în volumul „Păcatele tinerețelor” (1857). „Convorbiri literare” și „Novele din popor” țin de alți autori și de altă perioadă, iar letopisețul este o sursă istorică folosită de Negruzzi, nu locul de publicare.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2 și 3.2; prefața și tabelul cronologic din ediția BPT 1982, p. XXI și XXXVI.",
    },
    {
      id: "lapusneanul-af-motoc-ospat",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Vornicul Moțoc este ucis la ospăț, împreună cu ceilalți boieri.",
      correct: false,
      explanation:
        "Fals. La ospăț, Lăpușneanul îl ia pe Moțoc de mână și privesc împreună masacrul de la fereastră. Moțoc moare mai târziu: mulțimea strânsă la poartă cere „Capul lui Moțoc vrem!”, iar domnul poruncește să fie dat norodului, care îl ucide.",
      lessonSection: { id: "7-4-vornicul-motoc", label: "7.4. Vornicul Moțoc" },
      basis: "Lecția, 5.3, 7.4 și 8.5; nuvela, cap. III.",
    },
    {
      id: "lapusneanul-mc-leac",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce îi arată Lăpușneanul doamnei Ruxanda drept „un leac de frică”, cum îi promisese?",
      options: [
        { id: "a", text: "O băutură care o ajută să doarmă liniștită." },
        { id: "b", text: "Piramida făcută din capetele boierilor uciși." },
        { id: "c", text: "Hotărârea domnului de a se călugări la Slatina." },
        { id: "d", text: "Plecarea doamnei cu copiii departe de curtea domnească." },
      ],
      correctOptionId: "b",
      explanation:
        "În capitolul II, Ruxanda spune că, de frica unui cap tăiat văzut la poarta curții, nu se mai poate odihni. Domnul îi promite „un leac de frică”, iar în capitolul III o aduce în sală și îi arată piramida de 47 de capete. Promisiunea este ținută într-un fel monstruos. Călugăria apare abia în capitolul IV, iar celelalte variante nu există în text.",
      lessonSection: { id: "5-3-secventa-2-ospatul-si-un-leac-de-frica", label: "5.3. Secvența 2: ospățul și „un leac de frică”" },
      basis: "Lecția, 5.3 și 7.2; nuvela, cap. II–III.",
    },
    {
      id: "lapusneanul-mc-ordinea",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care este ordinea corectă a acestor evenimente din nuvelă?",
      options: [
        { id: "a", text: "ospățul → discursul din biserică → moartea lui Moțoc → călugărirea" },
        { id: "b", text: "discursul din biserică → moartea lui Moțoc → ospățul → călugărirea" },
        { id: "c", text: "discursul din biserică → ospățul → călugărirea → moartea lui Moțoc" },
        { id: "d", text: "discursul din biserică → ospățul → moartea lui Moțoc → călugărirea" },
      ],
      correctOptionId: "d",
      explanation:
        "În capitolul III, domnul ține întâi discursul de împăcare în biserică, apoi îi ucide pe boieri la ospăț, iar după masacru îl dă pe Moțoc mulțimii. Călugărirea are loc în capitolul IV, după patru ani.",
      lessonSection: { id: "6-2-momentele-subiectului", label: "6.2. Momentele subiectului" },
      basis: "Lecția, 5.3, 5.4 și 6.2; nuvela, cap. III–IV.",
    },
    {
      id: "lapusneanul-mc-culoare",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care detaliu ilustrează culoarea de epocă, una dintre trăsăturile romantice ale nuvelei?",
      options: [
        { id: "a", text: "Lăpușneanul îi spune Ruxandei „Femeia tot femeie”." },
        { id: "b", text: "Ospățul are borș polonez, mâncări grecești și pilaf turcesc." },
        { id: "c", text: "Patru ani trec între capitolele III și IV ale nuvelei." },
        { id: "d", text: "Naratorul relatează la persoana a III-a și nu participă la acțiune." },
      ],
      correctOptionId: "b",
      explanation:
        "Descrierea mâncărurilor de la ospăț reconstituie obiceiurile unei epoci trecute, la fel ca portretul doamnei, cu zobon și șlic de samur. Replica domnului îl caracterizează pe el, saltul de patru ani ține de timpul narativ, iar persoana a III-a ține de perspectiva narativă.",
      lessonSection: { id: "3-3-trasaturi-ale-romantismului-in-nuvela", label: "3.3. Trăsături ale romantismului în nuvelă" },
      basis: "Lecția, 3.3 (punctul 4); nuvela, cap. III.",
    },
    {
      id: "lapusneanul-mc-prosti-multi",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce arată replica „Proști, dar mulți”, rostită de Lăpușneanul „cu sânge rece”?",
      options: [
        { id: "a", text: "Că domnul disprețuiește mulțimea, dar îi calculează puterea." },
        { id: "b", text: "Că domnul se teme de mulțime și se pregătește să fugă din cetate." },
        { id: "c", text: "Că domnul ține la Moțoc și încearcă, de fapt, să-l salveze de mulțime." },
        { id: "d", text: "Că domnul se căiește acum pentru boierii pe care i-a ucis la masă." },
      ],
      correctOptionId: "a",
      explanation:
        "Moțoc îi cere să tragă cu tunurile în mulțime, iar domnul refuză: oamenii sunt „proști”, dar „mulți”. Disprețul și calculul merg împreună: îl sacrifică pe Moțoc, pe care îl cruțase tocmai ca să-l poată da norodului. Domnul nu fuge, nu îl apără pe Moțoc și nu se căiește. Lectura „calcul politic” este o interpretare susținută de text.",
      lessonSection: { id: "7-2-alexandru-lapusneanul", label: "7.2. Alexandru Lăpușneanul" },
      basis: "Lecția, 5.2, 5.3 și 7.2; nuvela, cap. I și III.",
    },
    {
      id: "lapusneanul-mc-caracterizare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Ce fel de caracterizare conține fragmentul: norodul îl întâmpina cu bucurie, „aducându-și aminte de întăia lui domnie, în care el nu avusese vreme a-și dezvălui urâtul caracter”?",
      options: [
        { id: "a", text: "autocaracterizare" },
        { id: "b", text: "caracterizare indirectă, prin faptele lui" },
        { id: "c", text: "caracterizare directă, făcută de narator" },
        { id: "d", text: "caracterizare directă, făcută de alt personaj" },
      ],
      correctOptionId: "c",
      explanation:
        "Naratorul numește direct trăsătura („urâtul caracter”). Nu vorbește domnul despre sine (autocaracterizare), nu este o faptă din care să deduci trăsătura (caracterizare indirectă) și nu este părerea unui personaj: norodul își amintea, dimpotrivă, cu bucurie de el.",
      lessonSection: { id: "7-8-modalitatile-de-caracterizare", label: "7.8. Modalitățile de caracterizare" },
      basis: "Lecția, 7.8; nuvela, cap. II.",
    },
    {
      id: "lapusneanul-af-narator",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Naratorul nu își exprimă niciodată părerea despre personaje sau despre faptele lor.",
      correct: false,
      explanation:
        "Fals. Naratorul relatează în general obiectiv, dar intervine uneori cu judecăți: discursul domnului din biserică este „această deșănțată cuvântare”, Moțoc este „mârșavul curtezan”, iar ultima frază spune că Lăpușneanul „lăsă o pată de sânge în istoria Moldaviei”.",
      lessonSection: { id: "6-4-perspectiva-narativa", label: "6.4. Perspectiva narativă" },
      basis: "Lecția, 6.3 și 6.4; nuvela, cap. III și IV.",
    },
    {
      id: "lapusneanul-af-motto-iv",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement:
        "Motto-ul capitolului al IV-lea reia, cu o mică diferență, o replică pe care Lăpușneanul o rostește după ce se trezește călugărit.",
      correct: true,
      explanation:
        "Adevărat. Motto-ul este „De mă voi scula, pre mulți am să popesc și eu…”, iar în capitol domnul strigă: „M-ați popit voi, dar de mă voi îndrepta, pre mulți am să popesc și eu!”. Diferența („scula” / „îndrepta”) contează când citezi: scrie fiecare formă exact.",
      lessonSection: { id: "4-3-motto-urile-capitolelor", label: "4.3. Motto-urile capitolelor" },
      basis: "Lecția, 4.3 și 8.5; nuvela, cap. IV.",
    },
    {
      id: "lapusneanul-mc-otrava",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine îi dă lui Lăpușneanul paharul cu otravă?",
      options: [
        { id: "a", text: "Mitropolitul Teofan, care îl călugărise mai înainte" },
        { id: "b", text: "Spancioc, care o pune în pahar fără știrea doamnei" },
        { id: "c", text: "Vornicul Moțoc, ca să se răzbune pentru umilințe" },
        { id: "d", text: "Ruxanda, îndemnată de Spancioc și de Stroici" },
      ],
      correctOptionId: "d",
      explanation:
        "Spancioc îi dă Ruxandei praful, iar ea, „silită mai mult de boieri”, îl pune în paharul cu apă și i-l duce domnului. Mitropolitul pleacă înainte, Spancioc nu acționează pe ascuns, iar Moțoc murise deja, în capitolul III.",
      lessonSection: { id: "5-4-secventa-3-moartea-tiranului", label: "5.4. Secvența 3: moartea tiranului" },
      basis: "Lecția, 5.4, 7.3 și 8.5; nuvela, cap. IV.",
    },
    {
      id: "lapusneanul-mc-tema",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care formulare a temei este susținută de textul nuvelei?",
      options: [
        { id: "a", text: "Iubirea dintre domn și doamnă, împiedicată de boierii trădători." },
        { id: "b", text: "Puterea exercitată prin teroare și pedeapsa care îl ajunge pe tiran." },
        { id: "c", text: "Lupta Moldovei împotriva turcilor, condusă de un domn viteaz și drept." },
        { id: "d", text: "Viața liniștită de la curte, tulburată doar de o boală a domnului." },
      ],
      correctOptionId: "b",
      explanation:
        "Nuvela urmărește o domnie impusă prin forță, masacrul boierilor și moartea domnului otrăvit. Formularea temei este o interpretare (se poate pune accentul și pe conflictul domn–boieri), dar celelalte variante sunt contrazise de text: Ruxanda nu găsește în domn „cât de puțină simțire omenească”, Lăpușneanul vine chiar cu oști turcești, iar curtea nu este liniștită.",
      lessonSection: { id: "4-1-tema", label: "4.1. Tema" },
      basis: "Lecția, 4.1 (interpretare marcată ca atare); nuvela, cap. I–IV.",
    },
    {
      id: "lapusneanul-mc-note-cronica",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce arată notele de subsol „Miron Costin”, puse de Negruzzi după unele replici din nuvelă?",
      options: [
        { id: "a", text: "Că autorul indică drept sursă a replicilor cronica Moldovei." },
        { id: "b", text: "Că replicile au fost adăugate mai târziu de un alt editor al textului." },
        { id: "c", text: "Că Miron Costin este unul dintre personajele care apar în nuvelă." },
        { id: "d", text: "Că nuvela a fost scrisă împreună cu un cronicar al vremii lui." },
      ],
      correctOptionId: "a",
      explanation:
        "Notele sunt ale autorului și trimit la cronica unde a găsit replicile, ceea ce susține încadrarea ca nuvelă istorică. Miron Costin nu este personaj, iar nuvela nu are coautor. Prefața ediției din 1982 observă că pasajele folosite provin de fapt dintr-un text transcris de Nicolae Costin; nota arată totuși intenția autorului de a se sprijini pe cronică.",
      lessonSection: { id: "3-4-specia-nuvela-istorica", label: "3.4. Specia: nuvela istorică" },
      basis: "Lecția, 3.4; nuvela, notele 1, 14 și 15; prefața ediției BPT 1982, p. XXI–XXII.",
    },
    {
      id: "lapusneanul-mc-ruxanda",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Prin ce procedeu este construită, mai ales, doamna Ruxanda în raport cu Lăpușneanul?",
      options: [
        { id: "a", text: "prin repetiție, ca o dublură a domnului" },
        { id: "b", text: "prin enumerația faptelor ei de vitejie" },
        { id: "c", text: "prin antiteză cu domnul crud" },
        { id: "d", text: "prin ironia naratorului față de ea" },
      ],
      correctOptionId: "c",
      explanation:
        "„Gingașa Ruxanda”, tristă „ca floarea espusă arșiții soarelui”, care cere să nu se mai verse sânge, este opusul domnului crud. Nu îi seamănă (nu e o dublură), nu are fapte de vitejie, iar naratorul o descrie cu simpatie, nu cu ironie.",
      lessonSection: { id: "7-3-doamna-ruxanda", label: "7.3. Doamna Ruxanda" },
      basis: "Lecția, 3.3 (punctul 3) și 7.3; nuvela, cap. II.",
    },
    {
      id: "lapusneanul-ra-boieri",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Câți boieri sunt uciși la ospățul din capitolul al III-lea? Scrie numărul în cifre sau în litere.",
      grading: {
        mode: "keywords",
        requiredGroups: [["47", "patruzeci si sapte", "patruzeci si septe", "patruzecisisapte"]],
      },
      modelAnswer: "47 de boieri („Patruzeci și șepte de trupuri zăceau pe parchet!”).",
      maxLength: 200,
      explanation:
        "Textul dă numărul de două ori în capitolul III: boierii adunați la masă sunt „47 la număr”, iar după masacru „Patruzeci și șepte de trupuri zăceau pe parchet!”. Tot din 47 de capete este făcută piramida. Spancioc amintește numărul și în capitolul IV.",
      lessonSection: { id: "5-3-secventa-2-ospatul-si-un-leac-de-frica", label: "5.3. Secvența 2: ospățul și „un leac de frică”" },
      basis: "Lecția, 5.3; nuvela, cap. III și IV.",
    },
    {
      id: "lapusneanul-ra-comentariu-biserica",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, discursul lui Lăpușneanul din biserică (cap. III), legându-l de o trăsătură a personajului. Separă ce se întâmplă în text de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat corect faptele: domnul cere iertare în biserică, îi cheamă pe boieri la ospăț și îi ucide acolo.",
          "Am numit o trăsătură (de exemplu, disimularea sau cruzimea) și am arătat că reiese din episod.",
          "Am formulat o interpretare, nu doar am repovestit.",
          "Am folosit un detaliu sau un citat verificat (de exemplu, „m-am arătat cumplit, rău” sau „această deșănțată cuvântare”).",
        ],
      },
      modelAnswer:
        "În biserică, Lăpușneanul recunoaște că s-a arătat „cumplit, rău”, cere iertare și îi cheamă pe boieri la masă, unde îi ucide pe toți (fapte). Naratorul numește discursul „această deșănțată cuvântare”, iar Spancioc și Stroici nu răspund la cererea de iertare. Episodul arată disimularea domnului: vorbele de împăcare sunt o capcană, iar religia devine o mască (interpretare).",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește o trăsătură, o susține cu un detaliu din text și o leagă de construcția personajului. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "5-3-secventa-2-ospatul-si-un-leac-de-frica", label: "5.3. Secvența 2: ospățul și „un leac de frică”" },
      basis: "Lecția, 5.3, 7.2 și 8.4; nuvela, cap. III.",
    },
  ],
};
