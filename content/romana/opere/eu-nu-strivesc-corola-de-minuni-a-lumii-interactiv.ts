import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Eu nu strivesc corola de minuni a lumii”
 * (content/romana/opere/eu-nu-strivesc-corola-de-minuni-a-lumii.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Versurile au fost găsite citate în trei
 * surse secundare (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md); textul integral nu a fost consultat.
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: fragmentele verificate ──────────────────────────────────────────────────

export const fragmenteContent: DetailExplorerContent = {
  title: "Fragmentele verificate",
  summary: "Alege un fragment ca să vezi ce spune și ce poți susține cu el în eseu.",
  note: "Lecția nu acoperă întreaga poezie, ci doar fragmentele găsite citate în trei surse secundare. Ce înseamnă fragmentul este o interpretare.",
  prompt: "Alege un fragment",
};

export const fragmenteItems: DetailItem[] = [
  {
    id: "incipit",
    label: "Începutul",
    fields: [
      { label: "Versul", text: "„Eu nu strivesc corola de minuni a lumii”", tag: "citat" },
      { label: "Ce spune", text: "Titlul este și primul vers; are pronumele „eu”, un verb negativ și o metaforă.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Negația „nu strivesc” are sens pozitiv: poetul apără misterul.", tag: "interpretare" },
    ],
    source: "Lecția, 4.2 și 6.1.",
  },
  {
    id: "luna",
    label: "Luna și taina nopții",
    fields: [
      { label: "Versurile", text: "„și-ntocmai cum cu razele ei albe luna / nu micșorează, ci tremurătoare / mărește și mai tare taina nopții”", tag: "citat" },
      { label: "Ce spune", text: "Luna nu micșorează, ci mărește taina nopții.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Poetul se compară cu luna: lumina lui adâncește misterul.", tag: "interpretare" },
    ],
    source: "Lecția, 6.2; sursa: fișa ISJ Dolj.",
  },
  {
    id: "imbogatesc",
    label: "Îmbogățirea zării",
    fields: [
      { label: "Versurile", text: "„așa îmbogățesc și eu întunecata zare / cu largi fiori de sfânt mister”", tag: "citat" },
      { label: "Ce spune", text: "Poetul îmbogățește „întunecata zare” cu „sfânt mister”.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Cunoașterea poetică sporește misterul, nu îl distruge.", tag: "interpretare" },
    ],
    source: "Lecția, 4.1 și 6.2; surse: Neca (2022) și fișa ISJ Dolj.",
  },
  {
    id: "final",
    label: "Finalul",
    fields: [
      { label: "Versurile", text: "„căci eu iubesc / și flori și ochi și buze și morminte”", tag: "citat" },
      { label: "Ce spune", text: "Poetul își declară iubirea pentru flori, ochi, buze și morminte.", tag: "fapt-poezie" },
      { label: "În eseu", text: "Cunoașterea poetică este un act de iubire, care cuprinde și viața, și moartea.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3; sursa: fișa ISJ Dolj.",
  },
];

// ── 3.2. Trăsături ──────────────────────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Ce arată fiecare fragment?",
  summary: "Alege ideea pe care o susține fiecare fragment din poezie.",
  note: "Ideile sunt cele din secțiunile 3.2, 4 și 6, prezentate acolo ca interpretare.",
  choices: [
    { id: "negatie", label: "Atitudine: poetul apără misterul, nu îl distruge." },
    { id: "luciferica", label: "Cunoașterea poetică sporește misterul." },
    { id: "iubire", label: "Cunoașterea poetică este iubire și cuprinde viața și moartea." },
    { id: "creator", label: "Eul creator se afirmă la începutul poeziei." },
  ],
  items: [
    {
      id: "strivesc",
      prompt: "„Eu nu strivesc corola de minuni a lumii”",
      tag: "citat",
      correct: "negatie",
      explanation: "Negația „nu strivesc” exprimă refuzul de a distruge; sursele o citesc ca sens pozitiv.",
      source: "Lecția, 4.2 și 6.1.",
    },
    {
      id: "imbogatesc",
      prompt: "„așa îmbogățesc și eu întunecata zare / cu largi fiori de sfânt mister”",
      tag: "citat",
      correct: "luciferica",
      explanation: "Poetul spune că îmbogățește zarea cu mister: cunoașterea lui sporește taina.",
      source: "Lecția, 3.2 (punctul 2) și 6.2.",
    },
    {
      id: "iubesc",
      prompt: "„căci eu iubesc / și flori și ochi și buze și morminte”",
      tag: "citat",
      correct: "iubire",
      explanation: "Finalul unește iubirea cu o enumerație care cuprinde viața (flori, ochi, buze) și moartea (morminte).",
      source: "Lecția, 6.3.",
    },
    {
      id: "eu",
      prompt: "Pronumele „eu” deschide poezia (primul cuvânt din titlu și din primul vers).",
      tag: "fapt-poezie",
      correct: "creator",
      explanation: "Poziția pronumelui în fruntea poeziei afirmă eul creator; este trăsătura 3 din lecție.",
      source: "Lecția, 3.2 (punctul 3).",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

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
      id: "titlu-vers",
      prompt: "Titlul poeziei este și primul ei vers.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Titlul și primul vers coincid: „Eu nu strivesc corola de minuni a lumii”.",
      source: "Lecția, 2 și 4.2.",
    },
    {
      id: "negatie-pozitiva",
      prompt: "Negația „nu strivesc” are sens pozitiv: dorința de a păstra lumea.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că verbul este la forma negativă; sensul pozitiv este o lectură, formulată în articolul Frățean (2022) și în lecție.",
      source: "Lecția, 4.2.",
    },
    {
      id: "luna",
      prompt: "Poetul compară cunoașterea poetică cu lumina lunii.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Comparația cu luna este citată în fișa ISJ; faptul că ea reprezintă cunoașterea poetică este o lectură a imaginii.",
      source: "Lecția, 6.2.",
    },
    {
      id: "iubesc",
      prompt: "Un vers spune: „căci eu iubesc / și flori și ochi și buze și morminte”.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Versul este citat în fișa ISJ; confirmă-l în ediția ta înainte de a-l folosi.",
      source: "Lecția, 6.3.",
    },
    {
      id: "volum",
      prompt: "Poezia este așezată în fruntea volumului „Poemele luminii” (1919).",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Informația apare în fișa ISJ Dolj; verifică-o în manual.",
      source: "Lecția, 2.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansBlaga: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, volumul (1919) și încadrarea (de exemplu, modernism, artă poetică).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Curentul sau perioada (de exemplu, modernismul) și două trăsături, fiecare arătată în versuri din manual.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Ce spune programa", "3.2. Trăsături care pot fi arătate"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.2. Imaginea îmbogățirii misterului", "6.3. Ideea finală: iubirea"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, negațiile, opoziția „lumina mea” – „lumina altora”: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["4.2. Titlul", "5.1. Trei secvențe, după fișa ISJ", "7. Limbaj artistic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poezie, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroBlaga: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției. Reperele vin din cerința despre un text poetic (Varianta 6, p. 2), care numește alți autori. Completează-l cu poezia din manual: lecția nu acoperă întreg textul.",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsBlaga: ChecklistGroup[] = [
  {
    id: "poezie",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri din manual.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, negațiile), cu relevanța lor.",
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
