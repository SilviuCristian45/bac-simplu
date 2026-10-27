import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { RelationEdge, RelationPersonData } from "@/components/lesson/interactive/relation-map";
import type {
  ChecklistGroup,
  EssayPlan,
  EssayPlanIntro,
  FigureContent,
  QuizContent,
} from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Luceafărul” (content/romana/opere/luceafarul.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar versurile au fost
 * verificate pe transcrierea Wikisource a poemului (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele patru tablouri ─────────────────────────────────────────────────────

export const structuraTablourilorContent: DetailExplorerContent = {
  title: "Cele patru tablouri",
  summary: "Alege un tablou ca să vezi ce se întâmplă în el și ce rol are în poem.",
  note: "Împărțirea în patru tablouri este cea din manuale și corespunde secțiunilor marcate cu asterisc în transcrierea folosită; rolul fiecărui tablou este o interpretare.",
  prompt: "Alege un tablou",
};

export const structuraTablourilorItems: DetailItem[] = [
  {
    id: "tabloul-1",
    label: "Tabloul I",
    fields: [
      { label: "Strofele", text: "1–43 (secțiunile de 7, 17 și 19 strofe).", tag: "fapt-poezie" },
      {
        label: "Ce se întâmplă",
        text: "O fată de împărat privește Luceafărul de la fereastră și îl cheamă. El apare întâi din ape, apoi din foc, și îi cere să-i fie mireasă. Ea refuză de două ori.",
        tag: "fapt-poezie",
      },
      { label: "Rol în poem", text: "Prezintă iubirea dintre două ființe de natură diferită.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1.",
  },
  {
    id: "tabloul-2",
    label: "Tabloul II",
    fields: [
      { label: "Strofele", text: "44–64 (secțiunea de 21 de strofe).", tag: "fapt-poezie" },
      {
        label: "Ce se întâmplă",
        text: "Cătălin, pajul, o abordează pe fată și îi propune să fugă în lume. Ea spune că o leagă un dor de Luceafăr.",
        tag: "fapt-poezie",
      },
      { label: "Rol în poem", text: "Introduce iubirea „potrivită” pentru lumea oamenilor.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 7.4.",
  },
  {
    id: "tabloul-3",
    label: "Tabloul III",
    fields: [
      { label: "Strofele", text: "65–85 (secțiunea de 21 de strofe).", tag: "fapt-poezie" },
      {
        label: "Ce se întâmplă",
        text: "Luceafărul străbate spațiul cosmic și cere să fie eliberat de nemurire. I se refuză: „Dar moartea nu se poate...”.",
        tag: "fapt-poezie",
      },
      { label: "Rol în poem", text: "Dă sensul filozofic: nemurirea nu poate fi schimbată cu o oră de iubire.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2.",
  },
  {
    id: "tabloul-4",
    label: "Tabloul IV",
    fields: [
      { label: "Strofele", text: "86–98 (secțiunea de 13 strofe).", tag: "fapt-poezie" },
      {
        label: "Ce se întâmplă",
        text: "Luceafărul se întoarce la locul lui. Cătălin și fata se iubesc sub tei, iar ea îl cheamă iar. Luceafărul răspunde rece.",
        tag: "fapt-poezie",
      },
      { label: "Rol în poem", text: "Încheie poemul cu o distanță, nu cu o împăcare.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.3.",
  },
];

// ── 3.3. Trăsături ale romantismului ────────────────────────────────────────────────────────

export const trasaturiRomantismQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din poem",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură a romantismului, versurile care o susțin.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare.",
  choices: [
    { id: "antiteza", label: "„Cum că eu sunt nemuritor, / Și tu ești muritoare?”" },
    { id: "cosmic", label: "„Un cer de stele dedesubt, / Deasupra-i cer de stele”" },
    { id: "iubire", label: "„Dară pe calea ce-ai deschis / N-oi merge niciodată”" },
    { id: "folclor", label: "„A fost odată ca-n povești, / A fost ca niciodată”" },
  ],
  items: [
    {
      id: "antiteza",
      prompt: "Antiteza: două lumi opuse (nemurire – moarte)",
      tag: "interpretare",
      correct: "antiteza",
      explanation: "Luceafărul își numește natura („nemuritor”) în opoziție cu a fetei („muritoare”).",
      source: "Lecția, 3.3 (punctul 1).",
    },
    {
      id: "cosmic",
      prompt: "Spațiul cosmic și motivul zborului",
      tag: "interpretare",
      correct: "cosmic",
      explanation: "Versurile descriu zborul Luceafărului printre stele, în tabloul al III-lea.",
      source: "Lecția, 3.3 (punctul 2).",
    },
    {
      id: "iubire",
      prompt: "Iubirea imposibilă între ființe de natură diferită",
      tag: "interpretare",
      correct: "iubire",
      explanation: "Fata respinge „calea” deschisă de Luceafăr: iubirea nu se poate împlini între ei.",
      source: "Lecția, 3.3 (punctul 3).",
    },
    {
      id: "folclor",
      prompt: "Inspirația folclorică",
      tag: "interpretare",
      correct: "folclor",
      explanation: "Formula de început imită basmul, de la care a pornit o primă versiune a poemului.",
      source: "Lecția, 3.3 (punctul 4).",
    },
  ],
};

// ── 7.5. Cine vorbește? ─────────────────────────────────────────────────────────────────────

export const cineVorbesteQuiz: QuizContent = {
  title: "Cine rostește versurile?",
  summary: "Alege personajul căruia îi aparțin versurile. Citatele sunt scurte și verificate în text.",
  note: "Interpretarea „Demiurgul” pentru cel care îi răspunde Luceafărului este din manuale; cuvântul nu apare în text.",
  choices: [
    { id: "luceafarul", label: "Luceafărul" },
    { id: "fata", label: "Fata de împărat" },
    { id: "catalin", label: "Cătălin" },
    { id: "demiurg", label: "Cel care îi răspunde Luceafărului" },
  ],
  items: [
    {
      id: "mireasa",
      prompt: "„Eu sunt luceafărul de sus, / Iar tu să-mi fii mireasă”",
      tag: "citat",
      correct: "luceafarul",
      explanation: "Luceafărul își spune cine este și îi cere fetei să-i fie mireasă.",
      source: "Lecția, 6.1.",
    },
    {
      id: "mort",
      prompt: "„Căci eu sunt vie, tu ești mort, / Și ochiul tău mă-ngheață.”",
      tag: "citat",
      correct: "fata",
      explanation: "Fata îl refuză pe Luceafăr, spunând că lui îi lipsește viața.",
      source: "Lecția, 6.1.",
    },
    {
      id: "hyperion",
      prompt: "„Hyperion, ce din genuni / Răsai c-o-ntreagă lume”",
      tag: "citat",
      correct: "demiurg",
      explanation: "Cel căruia i se roagă Luceafărul îi răspunde și îl numește Hyperion.",
      source: "Lecția, 4.2 și 7.5.",
    },
    {
      id: "arat",
      prompt: "„Dacă nu știi, ți-aș arăta / Din bob în bob amorul”",
      tag: "citat",
      correct: "catalin",
      explanation: "Cătălin îi propune fetei o iubire practică, de pe pământ.",
      source: "Lecția, 7.4.",
    },
    {
      id: "muritor",
      prompt: "„Tu te coboară pe pământ, / Fii muritor ca mine.”",
      tag: "citat",
      correct: "fata",
      explanation: "Fata îi cere Luceafărului să renunțe la nemurire, dacă vrea să fie iubit.",
      source: "Lecția, 3.3 și 6.2.",
    },
    {
      id: "nimb",
      prompt: "„Reia-mi al nemuririi nimb / Și focul din privire”",
      tag: "citat",
      correct: "luceafarul",
      explanation: "Luceafărul cere să renunțe la nemurire în schimbul iubirii.",
      source: "Lecția, 6.2.",
    },
  ],
};

// ── 8. Limbaj artistic ──────────────────────────────────────────────────────────────────────

export const figuriDeStilQuiz: QuizContent = {
  title: "Ce figură de stil este?",
  summary: "Alege figura de stil ilustrată de fiecare exemplu din poem.",
  note: "Exemplele sunt cele din secțiunea 8.",
  choices: [
    { id: "comparatie", label: "Comparație" },
    { id: "oximoron", label: "Oximoron" },
    { id: "hiperbola", label: "Hiperbolă" },
    { id: "personificare", label: "Personificare" },
  ],
  items: [
    {
      id: "fecioara",
      prompt: "„Cum e Fecioara între sfinți / Și luna între stele”",
      tag: "citat",
      correct: "comparatie",
      explanation: "Fata este asemuită cu Fecioara și cu luna prin cuvântul de legătură „cum”.",
      source: "Lecția, 8.",
    },
    {
      id: "mort-frumos",
      prompt: "„Un mort frumos cu ochii vii”",
      tag: "citat",
      correct: "oximoron",
      explanation: "„Mort” și „ochii vii” se exclud: se unesc doi termeni contradictorii.",
      source: "Lecția, 6.1 și 8.",
    },
    {
      id: "mii-de-ani",
      prompt: "„Și căi de mii de ani treceau / În tot atâtea clipe”",
      tag: "citat",
      correct: "hiperbola",
      explanation: "Exagerarea (mii de ani în clipe) arată viteza zborului.",
      source: "Lecția, 8.",
    },
    {
      id: "durere",
      prompt: "Luceafărul „se stinse cu durere”",
      tag: "citat",
      correct: "personificare",
      explanation: "Un astru este înfățișat ca o ființă care simte durere.",
      source: "Lecția, 8.",
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
      id: "strofe",
      prompt: "Poemul are 98 de strofe în transcrierea folosită.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Strofele se pot număra în text: 7 + 17 + 19 + 21 + 21 + 13.",
      source: "Lecția, 5.1.",
    },
    {
      id: "catalina-o-data",
      prompt: "Numele Cătălina apare o singură dată în poem.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Apare în versul „Privind la Cătălina”; în rest fata este numită doar „fata”, „ea”, „copila”.",
      source: "Lecția, 2 și 7.3.",
    },
    {
      id: "geniu",
      prompt: "Luceafărul simbolizează geniul singur.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul nu spune acest lucru; este o lectură a poemului, care trebuie susținută cu versuri.",
      source: "Lecția, 3.3 și 4.2.",
    },
    {
      id: "demiurg-cuvant",
      prompt: "Cuvântul „Demiurg” nu apare în poem.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Luceafărul i se adresează cu „Părinte” și „Doamne”; numele „Demiurg” vine din manuale.",
      source: "Lecția, 7.5.",
    },
    {
      id: "final-distanta",
      prompt: "Finalul arată o distanță de nedepășit între Luceafăr și oameni.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Luceafărul răspunde rece și rămâne „nemuritor și rece”; „distanța de nedepășit” este o lectură.",
      source: "Lecția, 6.3.",
    },
    {
      id: "refuz-de-doua-ori",
      prompt: "Fata refuză propunerea Luceafărului de două ori, după fiecare apariție.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "După apariția din ape și după cea din foc, fata răspunde cu un refuz.",
      source: "Lecția, 6.1.",
    },
  ],
};

// ── 7.1. Harta relațiilor ───────────────────────────────────────────────────────────────────

export type LuceafarulPerson = "luceafarul" | "fata" | "catalin" | "demiurg";

export const luceafarulPeople: Record<LuceafarulPerson, RelationPersonData> = {
  luceafarul: {
    name: "Luceafărul",
    role: "Hyperion, astrul",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt-poezie", text: "Apare întâi din ape, apoi din foc; cere să devină muritor și este refuzat.", source: "Lecția, 6.1–6.2 și 7.2." },
      { tag: "interpretare", text: "Ființa superioară și singură, care nu se poate adapta lumii obișnuite.", source: "Lecția, 7.2." },
    ],
  },
  fata: {
    name: "Fata de împărat",
    role: "„o prea frumoasă fată”",
    position: { x: 74, y: 18 },
    tone: "rose",
    details: [
      { tag: "fapt-poezie", text: "Îl cheamă pe Luceafăr, îl refuză și se apropie de Cătălin.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Divizată între visul de iubire și viața reală.", source: "Lecția, 7.3." },
    ],
  },
  catalin: {
    name: "Cătălin",
    role: "pajul",
    position: { x: 74, y: 82 },
    tone: "amber",
    details: [
      { tag: "fapt-poezie", text: "Un „viclean copil de casă”, care o abordează pe fată și îi propune să fugă în lume.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Iubitul potrivit lumii oamenilor, practic și direct.", source: "Lecția, 7.4." },
    ],
  },
  demiurg: {
    name: "Cel care răspunde",
    role: "„Părinte”, „Doamne”",
    position: { x: 26, y: 18 },
    tone: "slate",
    details: [
      { tag: "fapt-poezie", text: "Îi refuză Luceafărului dorința de a deveni muritor.", source: "Lecția, 6.2 și 7.5." },
      { tag: "interpretare", text: "În manuale este numit Demiurgul; spune legea lumii.", source: "Lecția, 7.5." },
    ],
  },
};

export const luceafarulEdges: RelationEdge<LuceafarulPerson>[] = [
  { from: "fata", to: "luceafarul", label: "îl cheamă, apoi îl refuză", shortLabel: "cheamă", step: 0 },
  { from: "fata", to: "catalin", label: "se apropie de el", shortLabel: "iubire", step: 1 },
  { from: "luceafarul", to: "demiurg", label: "cere să fie muritor; refuzat", shortLabel: "cerere", step: 2 },
];

export const relatiiLuceafarulFigure: FigureContent = {
  title: "Harta relațiilor: Luceafărul și cei din jurul lui",
  summary:
    "Luceafărul este în centru. Parcurge tablourile ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta arată personajele principale; relațiile sunt rezumate, iar sensul lor este o interpretare.",
  steps: [
    {
      id: "chemarea",
      title: "Tabloul I: chemarea",
      text: "Fata îl cheamă pe Luceafăr și îl refuză după fiecare apariție.",
      tag: "fapt-poezie",
      source: "Lecția, 6.1.",
    },
    {
      id: "catalin",
      title: "Tabloul II: Cătălin",
      text: "Cătălin se apropie de fată. Ea mărturisește că o leagă un dor de Luceafăr.",
      tag: "fapt-poezie",
      source: "Lecția, 7.4.",
    },
    {
      id: "cerere",
      title: "Tabloul III: cererea",
      text: "Luceafărul cere să devină muritor și este refuzat.",
      tag: "fapt-poezie",
      source: "Lecția, 6.2.",
    },
    {
      id: "final",
      title: "Tabloul IV: distanța",
      text: "Fata îl cheamă iar, dar Luceafărul răspunde rece și se întoarce la locul lui.",
      tag: "interpretare",
      source: "Lecția, 6.3.",
    },
  ],
};

// ── 10. Planul eseului ──────────────────────────────────────────────────────────────────────

export const eseuPlansLuceafarul: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic",
    section: "10",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1883) și încadrarea (de exemplu, poem romantic).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Perioada sau curentul (de exemplu, romantismul) și două trăsături, fiecare arătată în versuri.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Specia", "3.3. Trăsături ale romantismului"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.1. Cele două apariții ale Luceafărului (tabloul I)", "6.3. Finalul (tabloul IV)"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, strofa și rima, antiteza, figurile de stil: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["4.2. Titlul", "5.2. Strofa și versul", "8. Limbaj artistic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poem, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroLuceafarul: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției, nu barem oficial pentru acest poem. Reperele vin din cerința despre un text poetic al lui Bacovia (Varianta 6, p. 2). Verifică întâi dacă cerința de la examen permite acest poem (vezi 1).",
};

// ── 11. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsLuceafarul: ChecklistGroup[] = [
  {
    id: "poem",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, strofa, figurile de stil), cu relevanța lor.",
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
