import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Plumb” (content/romana/opere/plumb.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar versurile au fost
 * verificate pe ediția digitizată citată în lecție (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt-poezie”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele două strofe ────────────────────────────────────────────────────────

export const structuraPlumbContent: DetailExplorerContent = {
  title: "Cele două strofe",
  summary: "Alege o strofă ca să vezi ce imagini conține și cum se leagă de cealaltă.",
  note: "Poezia are opt versuri; imaginile sunt rezumate, iar legătura dintre strofe este o interpretare.",
  prompt: "Alege o strofă",
};

export const structuraPlumbItems: DetailItem[] = [
  {
    id: "strofa-1",
    label: "Strofa I",
    fields: [
      { label: "Imagini", text: "Sicriele și florile de plumb, „funerar vestmânt”, vorbitorul singur în cavou, vântul, coroanele care scârțâie.", tag: "fapt-poezie" },
      { label: "Rima", text: "Îmbrățișată (abba): plumb – vestmânt – vânt – plumb.", tag: "fapt-poezie" },
      { label: "Rol", text: "Așază decorul funerar și singurătatea.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1–6.2.",
  },
  {
    id: "strofa-2",
    label: "Strofa a II-a",
    fields: [
      { label: "Imagini", text: "Amorul de plumb adormit pe flori de plumb; vorbitorul îl strigă; frigul; aripile de plumb.", tag: "fapt-poezie" },
      { label: "Rima", text: "Îmbrățișată (abba): plumb – strig – frig – plumb.", tag: "fapt-poezie" },
      { label: "Rol", text: "Trece de la decor la o pierdere personală: iubirea nu mai poate zbura.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.3.",
  },
];

// ── 3.2. Trăsături ale simbolismului ────────────────────────────────────────────────────────

export const trasaturiSimbolismQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din poezie",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură, versurile sau observația care o susține.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.2, prezentate acolo ca interpretare.",
  choices: [
    { id: "simbol", label: "Cuvântul „plumb” revine în aproape fiecare vers și acoperă sicriele, florile, amorul, aripile." },
    { id: "muzicalitate", label: "„Plumb” este și rimă, și refren: „sicriele de plumb”, „coroanele de plumb”, „aripile de plumb”." },
    { id: "sugestie", label: "Poezia nu explică ce s-a pierdut; sugerează: „Stam singur în cavou... și era vânt...”." },
    { id: "atmosfera", label: "Cavou, sicrie, coroane, mormânt, „frig” formează o atmosferă de moarte." },
  ],
  items: [
    {
      id: "simbol-central",
      prompt: "Simbolul central",
      tag: "interpretare",
      correct: "simbol",
      explanation: "Un singur cuvânt-simbol organizează toate imaginile; el dă sensul de greutate și lipsă de viață.",
      source: "Lecția, 3.2 (punctul 1) și 4.2.",
    },
    {
      id: "muzicalitate",
      prompt: "Muzicalitatea prin repetiție",
      tag: "interpretare",
      correct: "muzicalitate",
      explanation: "Repetiția cuvântului la rimă creează un efect muzical, de refren.",
      source: "Lecția, 3.2 (punctul 2) și 5.1.",
    },
    {
      id: "sugestie",
      prompt: "Sugestia, nu explicația",
      tag: "interpretare",
      correct: "sugestie",
      explanation: "Punctele de suspensie și lipsa explicațiilor lasă cititorul să completeze sensul.",
      source: "Lecția, 3.2 (punctul 3) și 6.2.",
    },
    {
      id: "atmosfera",
      prompt: "Atmosfera de moarte și de singurătate",
      tag: "interpretare",
      correct: "atmosfera",
      explanation: "Vocabularul funerar (cavou, sicrie, coroane, mormânt) și „frigul” construiesc atmosfera.",
      source: "Lecția, 3.2 (punctul 4).",
    },
  ],
};

// ── 7. Limbaj artistic ──────────────────────────────────────────────────────────────────────

export const elementeLimbajPlumbQuiz: QuizContent = {
  title: "Ce procedeu este?",
  summary: "Alege procedeul ilustrat de fiecare exemplu din poezie.",
  note: "Exemplele sunt cele din secțiunea 7.",
  choices: [
    { id: "repetitie", label: "Repetiție" },
    { id: "metafora", label: "Metaforă" },
    { id: "personificare", label: "Personificare" },
    { id: "contradictie", label: "Imagine contradictorie" },
  ],
  items: [
    {
      id: "plumb-repetat",
      prompt: "Cuvântul „plumb” apare de șase ori în opt versuri.",
      tag: "fapt-poezie",
      correct: "repetitie",
      explanation: "Revenirea aceluiași cuvânt este o repetiție, care aici funcționează și ca rimă.",
      source: "Lecția, 2 și 7.",
    },
    {
      id: "sicrie-de-plumb",
      prompt: "„Sicriele de plumb”, „flori de plumb”",
      tag: "citat",
      correct: "metafora",
      explanation: "Plumbul înlocuiește materialul obișnuit și le dă obiectelor greutate și lipsă de viață.",
      source: "Lecția, 7.",
    },
    {
      id: "dormeau",
      prompt: "„Dormeau adânc sicriele de plumb”",
      tag: "citat",
      correct: "personificare",
      explanation: "Obiectelor li se atribuie o acțiune umană: ele „dorm”.",
      source: "Lecția, 6.1 și 7.",
    },
    {
      id: "aripi",
      prompt: "„Aripile de plumb”",
      tag: "citat",
      correct: "contradictie",
      explanation: "Aripile sugerează zbor, iar plumbul greutate: cei doi termeni se contrazic.",
      source: "Lecția, 6.3 și 7.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretarePlumbQuiz: QuizContent = {
  title: "Fapt din poezie sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în text sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din poezie" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "doua-strofe",
      prompt: "Poezia are două strofe de câte patru versuri.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Numărul strofelor și al versurilor se verifică în text: sunt două strofe, fiecare cu patru versuri.",
      source: "Lecția, 5.1.",
    },
    {
      id: "rima",
      prompt: "Fiecare strofă are rimă îmbrățișată (abba).",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Rimele se verifică: plumb – vestmânt – vânt – plumb și plumb – strig – frig – plumb.",
      source: "Lecția, 2 și 5.1.",
    },
    {
      id: "iubire-muritoare",
      prompt: "Aripile de plumb arată iubirea care nu mai poate zbura.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul spune doar că amorului „îi atârnau aripile de plumb”; sensul figurat este o lectură.",
      source: "Lecția, 6.3.",
    },
    {
      id: "singur-cavou",
      prompt: "Vorbitorul spune că stă singur în cavou.",
      tag: "fapt-poezie",
      correct: "fapt",
      explanation: "Versul „Stam singur în cavou... și era vânt...” se citește în poezie.",
      source: "Lecția, 6.2.",
    },
    {
      id: "lume-moarte",
      prompt: "Lumea poeziei este un spațiu al morții fără ieșire.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Decorul funerar este fapt; ideea de lume fără ieșire este o interpretare a viziunii.",
      source: "Lecția, 4.3.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansPlumb: EssayPlan[] = [
  {
    id: "text-poetic",
    label: "Particularitățile unui text poetic (Bacovia)",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, volumul (1916) și încadrarea (de exemplu, simbolism).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Curentul (de exemplu, simbolismul) și două trăsături, fiecare arătată în versuri.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Ce spune programa", "3.2. Trăsături ale simbolismului în poezie"],
      },
      {
        id: "imagini",
        title: "Tema și două imagini poetice",
        text: "Formulează tema și comentează două imagini sau idei poetice, legate explicit de ea.",
        reper: "Reperul despre imagini/idei poetice · 6 p",
        see: ["4.1. Tema", "6.2. „Stam singur în cavou... și era vânt...”", "6.3. „Dormea întors amorul meu de plumb”"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, repetiția, rima, imaginea contradictorie: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre compoziție și limbaj · 6 p",
        see: ["4.2. Titlul", "5.1. Cele două strofe", "7. Limbaj artistic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre poezie, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroPlumb: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 6 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției. Reperele vin din cerința din Varianta 6 (real/tehnologic), p. 2, care numește un text poetic al lui Bacovia; verifică formularea cerinței de la examen (vezi 1).",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsPlumb: ChecklistGroup[] = [
  {
    id: "poezie",
    title: "Conținut (cerința despre un text poetic)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în versuri.",
      "Am formulat tema și am comentat două imagini sau idei poetice legate de ea.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, rima, repetiția), cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din poezie de interpretări.",
      "Versurile citate sunt verificate în text și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
