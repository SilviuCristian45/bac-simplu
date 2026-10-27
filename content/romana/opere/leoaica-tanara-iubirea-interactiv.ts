import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Leoaică tânără, iubirea”
 * (content/romana/opere/leoaica-tanara-iubirea.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Versurile (patru) au fost găsite citate
 * într-un articol științific (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md); textul integral nu a fost consultat.
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: fragmentul verificat ────────────────────────────────────────────────────

export const fragmenteContent: DetailExplorerContent = {
  title: "Fragmentul verificat",
  summary: "Alege un vers ca să vezi ce spune și ce poți susține cu el în eseu.",
  note: "Lecția nu acoperă întreaga poezie, ci doar primele patru versuri, citate într-un articol științific. Ce înseamnă fragmentul este o interpretare.",
  prompt: "Alege un vers",
};

export const fragmenteItems: DetailItem[] = [
  {
    id: "vers-1",
    label: "Versul 1",
    fields: [
      { label: "Versul", text: "„Leoaică tânără, iubirea mi-a sărit în față.”", tag: "citat" },
      { label: "Ce spune", text: "Iubirea este numită „leoaică tânără” și „a sărit în față”.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Metafora face din iubire o ființă vie, care atacă brusc.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1.",
  },
  {
    id: "vers-2",
    label: "Versul 2",
    fields: [
      { label: "Versul", text: "„Mă pândise-n încordare mai de mult.”", tag: "citat" },
      { label: "Ce spune", text: "Iubirea îl pândise pe vorbitor din timp.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Sentimentul vine ca o fatalitate, nu din alegere.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3.",
  },
  {
    id: "vers-3-4",
    label: "Versurile 3–4",
    fields: [
      { label: "Versurile", text: "„Colții albi mi i-a înfipt în față, / m-a mușcat leoaica azi de față.”", tag: "citat" },
      { label: "Ce spune", text: "Leoaica înfige colții și mușcă.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Mușcătura arată o iubire care marchează; repetiția lui „față” întărește ritmul atacului.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2.",
  },
];

// ── 3.2. Trăsături ──────────────────────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Ce arată fiecare element?",
  summary: "Alege trăsătura pe care o susține fiecare element din fragment.",
  note: "Trăsăturile sunt cele din secțiunea 3.2, prezentate acolo ca interpretare.",
  choices: [
    { id: "metafora", label: "Metaforă pentru un sentiment: iubirea ca ființă." },
    { id: "violenta", label: "Violență și surpriză: iubirea vine brusc." },
    { id: "eveniment", label: "Iubirea ca eveniment care schimbă ființa." },
    { id: "inversare", label: "Inversarea unui motiv clasic: bărbatul este cel pândit." },
  ],
  items: [
    {
      id: "leoaica",
      prompt: "„Leoaică tânără, iubirea”",
      tag: "citat",
      correct: "metafora",
      explanation: "Un sentiment abstract este numit cu numele unui animal: metaforă.",
      source: "Lecția, 3.2 (punctul 1).",
    },
    {
      id: "sarit",
      prompt: "„mi-a sărit în față”, „m-a mușcat”",
      tag: "citat",
      correct: "violenta",
      explanation: "Verbele arată un atac brusc, cu violență.",
      source: "Lecția, 3.2 (punctul 2).",
    },
    {
      id: "fatalitate",
      prompt: "Articolul citește poezia ca iubire-fatalitate: „o fatalitate care cade brusc asupra ființei”.",
      tag: "interpretare",
      correct: "eveniment",
      explanation: "Iubirea apare ca o întâmplare care schimbă ființa, nu ca o alegere.",
      source: "Lecția, 3.2 (punctul 3) și 4.3.",
    },
    {
      id: "pandise",
      prompt: "„Mă pândise-n încordare mai de mult.”",
      tag: "citat",
      correct: "inversare",
      explanation: "Vorbitorul este cel pândit; leoaica este cea care atacă (lectură găsită în surse).",
      source: "Lecția, 3.2 (punctul 4) și 6.3.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din poezie sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în fragmentul citat sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din poezie" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "leoaica-iubire",
      prompt: "În primul vers, iubirea este numită „leoaică tânără”.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Se verifică în versul citat: iubirea este numită „leoaică tânără”.",
      source: "Lecția, 5.1 și 6.1.",
    },
    {
      id: "fata",
      prompt: "Cuvântul „față” apare la sfârșitul versurilor 1, 3 și 4 din fragment.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Se verifică în cele patru versuri citate.",
      source: "Lecția, 5.1.",
    },
    {
      id: "fatalitate",
      prompt: "Iubirea este o fatalitate care cade brusc asupra ființei.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Este lectura din articol, nu o afirmație din versuri.",
      source: "Lecția, 3.2 și 4.3.",
    },
    {
      id: "neomodernism",
      prompt: "Poezia ilustrează neomodernismul românesc.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Încadrarea vine din articol și din manuale; trebuie argumentată cu trăsături din text.",
      source: "Lecția, 3.1.",
    },
    {
      id: "persoana-i",
      prompt: "Vorbitorul se exprimă la persoana întâi („mi-a sărit”, „m-a mușcat”).",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Verbele cu pronume la persoana I se citesc în fragment.",
      source: "Lecția, 5.2.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansStanescu: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul și încadrarea (de exemplu, poezie neomodernistă).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Perioada sau curentul și două trăsături, fiecare arătată în versuri din manual.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Ce spune programa", "3.2. Trăsături care pot fi arătate"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.1. „Leoaică tânără, iubirea”", "6.2. „Colții albi... m-a mușcat”"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, metafora, repetiția: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["4.2. Titlul", "5.1. Începutul", "7. Limbaj artistic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poezie, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroStanescu: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției. Reperele vin din cerința despre un text poetic (Varianta 6, p. 2), care numește alți autori. Completează-l cu poezia din manual: lecția nu acoperă întreg textul.",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsStanescu: ChecklistGroup[] = [
  {
    id: "poezie",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri din manual.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, metafora, repetiția), cu relevanța lor.",
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
