import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Scrisoarea III” (content/romana/opere/scrisoarea-iii.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar versurile au fost verificate
 * pe transcrierea Wikisource a poemului (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele patru părți ────────────────────────────────────────────────────────

export const structuraPartilorContent: DetailExplorerContent = {
  title: "Cele patru părți",
  summary: "Alege o parte ca să vezi ce se întâmplă în ea și ce rol are în poem.",
  note: "Împărțirea în patru părți este cea din manuale și poate varia; rolul fiecărei părți este o interpretare.",
  prompt: "Alege o parte",
};

export const structuraPartilorItems: DetailItem[] = [
  {
    id: "partea-1",
    label: "Partea I",
    fields: [
      { label: "Titlu orientativ", text: "Visul sultanului.", tag: "interpretare" },
      { label: "Ce se întâmplă", text: "Un sultan visează că luna devine fecioară, iar din inima lui crește un copac care acoperă lumea. La trezire vede casa șeihului Edebali și o înțelege ca pe un semn al unui imperiu.", tag: "fapt-poezie" },
      { label: "Rol în poem", text: "Arată originea mitică și forța puterii otomane.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1.",
  },
  {
    id: "partea-2",
    label: "Partea a II-a",
    fields: [
      { label: "Titlu orientativ", text: "Întâlnirea Baiazid – Mircea.", tag: "interpretare" },
      { label: "Ce se întâmplă", text: "Sultanul cere supunere, iar Mircea răspunde că își apără „sărăcia și nevoile și neamul” și că „iubirea de moșie” este un zid.", tag: "fapt-poezie" },
      { label: "Rol în poem", text: "Opune puterea mare a sultanului demnității unui domn al unei țări mici.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2.",
  },
  {
    id: "partea-3",
    label: "Partea a III-a",
    fields: [
      { label: "Titlu orientativ", text: "Bătălia și biletul.", tag: "interpretare" },
      { label: "Ce se întâmplă", text: "Oastea țării învinge, iar seara un fiu al domnului scrie un bilet în versuri către cea pe care o iubește.", tag: "fapt-poezie" },
      { label: "Rol în poem", text: "Încheie partea eroică și aduce o notă intimă.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.3.",
  },
  {
    id: "partea-4",
    label: "Partea a IV-a",
    fields: [
      { label: "Titlu orientativ", text: "Satira prezentului.", tag: "interpretare" },
      { label: "Ce se întâmplă", text: "Poetul compară trecutul cu prezentul, îi atacă pe cei care conduc țara și îl cheamă pe Țepeș.", tag: "fapt-poezie" },
      { label: "Rol în poem", text: "Dă sensul poemului: contrastul dintre eroism și demagogie.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.4.",
  },
];

// ── 3.3. Trăsături ale romantismului ────────────────────────────────────────────────────────

export const trasaturiRomantismQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din poem",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură, versurile care o susțin.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare.",
  choices: [
    { id: "antiteza", label: "„De-așa vremi se-nvredniciră cronicarii și rapsozii; / Veacul nostru ni-l umplură saltimbancii și irozii…”" },
    { id: "istorie", label: "„Tu ești Mircea?” – dialogul dintre Baiazid și domnul Țării Românești." },
    { id: "vis", label: "„Un sultan dintre aceia ce domnesc peste vro limbă”, care visează." },
    { id: "grandoare", label: "„Ca nouri de aramă și ca ropotul de grindeni”: bătălia ca o furtună." },
  ],
  items: [
    {
      id: "antiteza",
      prompt: "Antiteza: trecutul eroic față de prezentul degradat",
      tag: "interpretare",
      correct: "antiteza",
      explanation: "Versurile opun „cronicarii și rapsozii” din vremea eroilor „saltimbancilor și irozilor” din prezent.",
      source: "Lecția, 3.3 (punctul 1).",
    },
    {
      id: "istorie",
      prompt: "Istoria ca sursă",
      tag: "interpretare",
      correct: "istorie",
      explanation: "Eroul este Mircea, domnul Țării Românești; întâlnirea cu sultanul este reconstituită literar.",
      source: "Lecția, 3.3 (punctul 2).",
    },
    {
      id: "vis",
      prompt: "Visul",
      tag: "interpretare",
      correct: "vis",
      explanation: "Poemul începe cu visul unui sultan; visul arată originea imperiului.",
      source: "Lecția, 3.3 (punctul 3) și 6.1.",
    },
    {
      id: "grandoare",
      prompt: "Fantezia și imaginea grandioasă",
      tag: "interpretare",
      correct: "grandoare",
      explanation: "Bătălia este descrisă prin comparații cu forțe ale naturii, într-o imagine amplă.",
      source: "Lecția, 3.3 (punctul 4) și 8.",
    },
  ],
};

// ── 7. Cine vorbește? ───────────────────────────────────────────────────────────────────────

export const cineVorbesteQuiz: QuizContent = {
  title: "Cine rostește versurile?",
  summary: "Alege vocea căreia îi aparțin versurile. Citatele sunt scurte și verificate în text.",
  note: "Poemul are mai multe voci: personajele, biletul fiului domnului și poetul însuși.",
  choices: [
    { id: "baiazid", label: "Baiazid" },
    { id: "mircea", label: "Mircea" },
    { id: "fiul", label: "Fiul domnului (în bilet)" },
    { id: "poetul", label: "Poetul (în satiră)" },
  ],
  items: [
    {
      id: "coroana",
      prompt: "„Am venit să mi te-nchini, / De nu, schimb a ta coroană într-o ramură de spini”",
      tag: "citat",
      correct: "baiazid",
      explanation: "Sultanul îi cere supunere domnului Țării Românești și îl amenință.",
      source: "Lecția, 6.2.",
    },
    {
      id: "saracia",
      prompt: "„Eu? Îmi apăr sărăcia și nevoile și neamul…”",
      tag: "citat",
      correct: "mircea",
      explanation: "Mircea răspunde sultanului ce apără: nu glorie, ci sărăcia și neamul.",
      source: "Lecția, 6.2.",
    },
    {
      id: "flamuri",
      prompt: "„Oastea mea cu flamurile, / Codrul și cu ramurile”",
      tag: "citat",
      correct: "fiul",
      explanation: "În bilet, fiul domnului spune ce îi trimite iubitei: oastea și codrul.",
      source: "Lecția, 6.3.",
    },
    {
      id: "tepes",
      prompt: "„Cum nu vii tu, Țepeș doamne, ca punînd mîna pe ei”",
      tag: "citat",
      correct: "poetul",
      explanation: "Poetul însuși, în satira finală, îl cheamă pe Țepeș ca să-i pedepsească pe politicieni.",
      source: "Lecția, 6.4.",
    },
    {
      id: "zid",
      prompt: "„N-avem oști, dară iubirea de moșie e un zid”",
      tag: "citat",
      correct: "mircea",
      explanation: "Mircea spune că iubirea de țară este o apărare mai puternică decât oastea.",
      source: "Lecția, 6.2.",
    },
    {
      id: "prezent",
      prompt: "„Au prezentul nu ni-i mare?”",
      tag: "citat",
      correct: "poetul",
      explanation: "Întrebarea ironică deschide satira prezentului; vorbește poetul.",
      source: "Lecția, 6.4.",
    },
  ],
};

// ── 9. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din poem sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în text sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din poem" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "dialog",
      prompt: "În poem există un dialog între sultan și Mircea.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Dialogul se citește în text: „Tu ești Mircea?” – „Da-mpărate!”.",
      source: "Lecția, 6.2.",
    },
    {
      id: "bilet",
      prompt: "Un fiu al domnului scrie un bilet în versuri către cea pe care o iubește.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Biletul apare după bătălie, într-o seară.",
      source: "Lecția, 6.3.",
    },
    {
      id: "iubirea-zid",
      prompt: "Iubirea de țară este prezentată ca o forță mai mare decât oastea.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul spune că „iubirea de moșie e un zid”; ideea de forță mai mare decât oastea este o lectură.",
      source: "Lecția, 6.2.",
    },
    {
      id: "versuri-lungi",
      prompt: "Poemul are 285 de versuri în transcrierea folosită.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Versurile se numără după rândurile transcrierii; numărul poate diferi în alte ediții.",
      source: "Lecția, 2 și 12.",
    },
    {
      id: "tepes-pedeapsa",
      prompt: "Invocarea lui Țepeș arată dorința unei pedepse exemplare.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că poetul îl cheamă pe Țepeș; sensul de pedeapsă exemplară este o lectură.",
      source: "Lecția, 6.4.",
    },
  ],
};

// ── 10. Planul eseului ──────────────────────────────────────────────────────────────────────

export const eseuPlansScrisoareaIII: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic",
    section: "10",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1881) și încadrarea (de exemplu, poem romantic cu satiră).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Curentul (de exemplu, romantismul) și două trăsături, fiecare arătată în versuri.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Specia", "3.3. Trăsături ale romantismului"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.2. Dialogul Mircea–Baiazid", "6.4. Satira"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, antiteza, instanțele comunicării, biletul, rima: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["5.2. Versul și rima", "5.3. Instanțele comunicării", "8. Limbaj artistic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poem, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroScrisoareaIII: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției. Reperele vin din cerința despre un text poetic (Varianta 6, p. 2), care numește alți autori; verifică formularea cerinței de la examen (vezi 1).",
};

// ── 11. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsScrisoareaIII: ChecklistGroup[] = [
  {
    id: "poezie",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, antiteza, instanțele comunicării), cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din poem de interpretări.",
      "Versurile citate sunt verificate în text și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
