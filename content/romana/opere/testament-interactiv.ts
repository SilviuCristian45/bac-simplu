import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Testament” (content/romana/opere/testament.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Versurile au fost găsite citate în două
 * articole științifice (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md); textul integral nu a fost consultat.
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: fragmentele verificate ──────────────────────────────────────────────────

export const fragmenteContent: DetailExplorerContent = {
  title: "Fragmentele verificate",
  summary: "Alege un fragment ca să vezi ce spune și ce poți susține cu el în eseu.",
  note: "Lecția nu acoperă întreaga poezie, ci doar fragmentele găsite citate în două articole științifice. Ce înseamnă fragmentul este o interpretare.",
  prompt: "Alege un fragment",
};

export const fragmenteItems: DetailItem[] = [
  {
    id: "inceput",
    label: "Începutul",
    fields: [
      { label: "Versurile", text: "„Nu-i voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte.”", tag: "citat" },
      { label: "Ce spune", text: "Poetul nu lasă bunuri, ci „un nume adunat pe-o carte”.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Pentru idee poetică și titlu: ce lasă un poet după moarte este opera.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1.",
  },
  {
    id: "sapa",
    label: "Sapa-n condei",
    fields: [
      { label: "Versurile", text: "„Ca să schimbăm acum, întâia oară, / Sapa-n condei și brazda-n climar.”", tag: "citat" },
      { label: "Ce spune", text: "Sapa devine condei, iar brazda climară (vas pentru cerneală).", tag: "fapt-poezie" },
      { label: "În eseu", text: "Trecerea de la munca pământului la munca cuvântului: poetul ca meșteșugar.", tag: "interpretare" },
    ],
    source: "Lecția, 3.2 și 6.2.",
  },
  {
    id: "robul",
    label: "Robul și Domnul",
    fields: [
      { label: "Versurile", text: "„Robul a scris-o, Domnul o citește / Fără-a cunoaște c-n adâncul ei / Zace mânia bunilor mei.”", tag: "citat" },
      { label: "Ce spune", text: "Cartea este scrisă de „rob” și citită de „Domn”, care nu cunoaște ce se ascunde în ea.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Poezia păstrează o suferință a strămoșilor pe care cititorul nu o vede de la început.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 6.3.",
  },
];

// ── 3.2 / 6. Ce arată fiecare vers? ─────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Ce arată fiecare vers?",
  summary: "Alege ideea pe care o susține fiecare vers sau grup de versuri.",
  note: "Ideile sunt cele din secțiunile 3.2, 4 și 6, prezentate acolo ca interpretare.",
  choices: [
    { id: "arta", label: "Concepția despre artă: ce rămâne după poet este opera." },
    { id: "munca", label: "Poetul ca meșteșugar: munca pământului devine muncă a cuvântului." },
    { id: "generatii", label: "Lanțul generațiilor: cartea vine de la strămoși la urmaș." },
    { id: "suferinta", label: "Suferința strămoșilor ascunsă în carte." },
  ],
  items: [
    {
      id: "bunuri",
      prompt: "„Nu-i voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”",
      tag: "citat",
      correct: "arta",
      explanation: "Poetul spune ce lasă după moarte: nu bunuri, ci o carte. Este o idee despre rolul artei.",
      source: "Lecția, 6.1.",
    },
    {
      id: "condei",
      prompt: "„Sapa-n condei și brazda-n climar”",
      tag: "citat",
      correct: "munca",
      explanation: "Obiecte ale muncii pământului se transformă în obiecte ale scrisului.",
      source: "Lecția, 6.2.",
    },
    {
      id: "stramosi",
      prompt: "„De la străbunii mei până la tine”",
      tag: "citat",
      correct: "generatii",
      explanation: "Versul leagă strămoșii de urmaș printr-un drum care ajunge la „tine”.",
      source: "Lecția, 4.3.",
    },
    {
      id: "mania",
      prompt: "„Zace mânia bunilor mei”",
      tag: "citat",
      correct: "suferinta",
      explanation: "„În adâncul” cărții zace „mânia” strămoșilor: suferința lor ajunge materie a poeziei.",
      source: "Lecția, 4.3 și 6.3.",
    },
  ],
};

// ── 7. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din poezie sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în fragmentele citate sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din poezie" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "fiule",
      prompt: "Poetul se adresează unui „fiu”.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Versul „Cartea mea-i, fiule, o treaptă” conține adresarea „fiule”.",
      source: "Lecția, 5.1.",
    },
    {
      id: "carte-valoare",
      prompt: "Valoarea unui poet este opera lui, nu averea.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul spune că poetul lasă „un nume adunat pe-o carte”; ideea de valoare este o lectură.",
      source: "Lecția, 4.1 și 6.1.",
    },
    {
      id: "rima",
      prompt: "Primele opt versuri au rimă împerecheată: moarte – carte, vine – tine, adânci – brânci, așteaptă – treaptă.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Rimele se verifică în primele opt versuri; restul poeziei nu a fost verificat.",
      source: "Lecția, 2.",
    },
    {
      id: "scara",
      prompt: "Versul corect este „În scara răzvrătită care vine”, nu „seara”.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Este ipoteza unui singur autor, fără dovezi din manuscrise; nu este o corectură acceptată.",
      source: "Lecția, 5.2.",
    },
    {
      id: "meserias",
      prompt: "Poetul apare ca meșteșugar al cuvântului.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că „sapa” devine „condei”; ideea de meșteșugar este o lectură a imaginii.",
      source: "Lecția, 3.2 și 6.2.",
    },
  ],
};

// ── 8. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansTestament: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic (Arghezi)",
    section: "8",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, volumul (1927) și încadrarea (de exemplu, modernism, artă poetică).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Curentul sau perioada (de exemplu, modernismul) și două trăsături, fiecare arătată în versuri.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Ce spune programa", "3.2. Trăsături care pot fi arătate"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.1. „Nu-i voi lăsa drept bunuri, după moarte, / Decât un nume adunat pe-o carte”", "6.2. „Sapa-n condei și brazda-n climar”"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, adresarea către „fiu”, imaginea cărții-treaptă: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["4.2. Titlul", "5.1. Prima strofă", "5.3. Instanțele comunicării"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poezie, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroTestament: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției. Reperele vin din cerința despre un text poetic al lui Arghezi (Varianta 6, umanist/pedagogic, p. 2). Completează-l cu poezia din manual: lecția nu acoperă întreg textul.",
};

// ── 9. Autoevaluare ─────────────────────────────────────────────────────────────────────────

export const checklistGroupsTestament: ChecklistGroup[] = [
  {
    id: "poezie",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri din manual.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, adresarea, imaginea cărții), cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din poezie de interpretări.",
      "Versurile citate sunt verificate în manual și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
