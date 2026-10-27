import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Moromeții” (volumul I) (content/romana/opere/morometii-volumul-1.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Romanul nu a fost citit; faptele sunt
 * preluate din surse secundare (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar lecția nu conține citate
 * verificate din roman. Faptele sunt marcate „fapt”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: scenele principale ──────────────────────────────────────────────────────

export const sceneContent: DetailExplorerContent = {
  title: "Scenele principale",
  summary: "Alege o scenă ca să vezi ce se întâmplă în ea și ce poți susține cu ea în eseu.",
  note: "Scenele sunt rezumate după surse secundare (romanul nu a fost citit pentru lecție); capitolele nu sunt indicate aici. Ce înseamnă scena este o interpretare.",
  prompt: "Alege o scenă",
};

export const sceneItems: DetailItem[] = [
  {
    id: "cina",
    label: "Cina",
    fields: [
      { label: "Ce se întâmplă", text: "Familia ia masa pe o masă joasă; Ilie stă pe pragul celei de-a doua odăi, iar fiii cei mari în pragul ușii.", tag: "fapt" },
      { label: "În eseu", text: "Așezarea arată autoritatea tatălui și anticipează conflictele.", tag: "interpretare" },
    ],
    source: "Lecția, 6.1.",
  },
  {
    id: "poiana",
    label: "Poiana lui Iocan",
    fields: [
      { label: "Ce se întâmplă", text: "Moromete, Cocoșilă și Dumitru lui Nae citesc ziarul și comentează politica, cu ironie și umor.", tag: "fapt" },
      { label: "În eseu", text: "Arată lumea satului și locul lui Moromete în ea.", tag: "interpretare" },
    ],
    source: "Lecția, 6.2.",
  },
  {
    id: "fonciirea",
    label: "„Fonciirea”",
    fields: [
      { label: "Ce se întâmplă", text: "Perceptorul vine să ceară impozitul; Moromete joacă o scenă a amânării plății.", tag: "fapt" },
      { label: "În eseu", text: "Presiunea economică și disimularea personajului.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3.",
  },
  {
    id: "salcamul",
    label: "Salcâmul",
    fields: [
      { label: "Ce se întâmplă", text: "Moromete taie salcâmul din curte înainte de răsăritul soarelui.", tag: "fapt" },
      { label: "În eseu", text: "„Începutul sfârșitului”: dispare simbolul stabilității (după material).", tag: "interpretare" },
    ],
    source: "Lecția, 6.4.",
  },
  {
    id: "bataia",
    label: "Bătaia și fuga",
    fields: [
      { label: "Ce se întâmplă", text: "Moromete îi bate pe fiii cei mari; aceștia fug cu caii și cu o parte din zestrea fetelor; el vinde din pământ.", tag: "fapt" },
      { label: "În eseu", text: "Punctul culminant și deznodământul conflictului dintre generații.", tag: "interpretare" },
    ],
    source: "Lecția, 6.6.",
  },
];

// ── 3.2. Trăsături ──────────────────────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Leagă trăsătura de scena din roman",
  summary: "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură, scena care o susține.",
  note: "Trăsăturile sunt cele din secțiunea 3.2, prezentate acolo ca interpretare, după surse secundare.",
  choices: [
    { id: "sat", label: "Cina, Poiana lui Iocan, secerișul: lumea satului în scene." },
    { id: "generatii", label: "Fiii cei mari se răzvrătesc și fug cu caii." },
    { id: "economie", label: "Perceptorul cere impozitul; Moromete vinde din pământ." },
    { id: "timp", label: "De la „timpul răbdător” de la început la finalul unui Moromete învins." },
  ],
  items: [
    {
      id: "lumea-satului",
      prompt: "Lumea satului, descrisă în scene",
      tag: "interpretare",
      correct: "sat",
      explanation: "Romanul prezintă viața satului prin scene detaliate: masă, adunare, seceriș.",
      source: "Lecția, 3.2 (punctul 1) și 6.1–6.5.",
    },
    {
      id: "conflict",
      prompt: "Conflictul dintre generații",
      tag: "interpretare",
      correct: "generatii",
      explanation: "Fiii din prima căsătorie se răzvrătesc și fug; conflictul se rezolvă în volum prin fuga lor.",
      source: "Lecția, 3.2 (punctul 2) și 6.6.",
    },
    {
      id: "presiune",
      prompt: "Presiunea economică",
      tag: "interpretare",
      correct: "economie",
      explanation: "Taxele și datoriile duc la vânzarea unei părți din pământ.",
      source: "Lecția, 3.2 (punctul 3), 6.3 și 6.6.",
    },
    {
      id: "timpul",
      prompt: "Timpul care se schimbă",
      tag: "interpretare",
      correct: "timp",
      explanation: "Romanul începe cu o vreme „răbdătoare” și se încheie cu un personaj învins.",
      source: "Lecția, 3.2 (punctul 4) și 5.2.",
    },
  ],
};

// ── 7. Rolul personajelor ───────────────────────────────────────────────────────────────────

export const rolQuiz: QuizContent = {
  title: "Ce rol are personajul?",
  summary: "Alege ce face fiecare personaj în acțiune, după lecție.",
  note: "Rolurile sunt cele din secțiunile 6 și 7, după surse secundare.",
  choices: [
    { id: "patriarh", label: "Patriarhul familiei, ironic și mândru." },
    { id: "scoala", label: "Copilul legat de școală." },
    { id: "fii", label: "Fiii din prima căsătorie, care fug." },
    { id: "perceptor", label: "Cel care vine să ceară impozitul." },
  ],
  items: [
    {
      id: "ilie",
      prompt: "Ilie Moromete",
      tag: "fapt",
      correct: "patriarh",
      explanation: "Ilie este capul familiei, care domină discuția și își păstrează autoritatea, până când conflictul cu fiii o zdruncină.",
      source: "Lecția, 7.",
    },
    {
      id: "niculae",
      prompt: "Niculae",
      tag: "fapt",
      correct: "scoala",
      explanation: "Niculae este cel căruia îi place școala; ia premiul I la serbare.",
      source: "Lecția, 6.7.",
    },
    {
      id: "paraschiv-nila",
      prompt: "Paraschiv și Nilă (și, după o sursă, Achim)",
      tag: "fapt",
      correct: "fii",
      explanation: "Fiii cei mari fug cu caii și cu o parte din zestrea fetelor, după bătaie.",
      source: "Lecția, 6.6.",
    },
    {
      id: "jupuitu",
      prompt: "Jupuitu",
      tag: "fapt",
      correct: "perceptor",
      explanation: "Jupuitu este perceptorul care vine să ceară „fonciirea”, după fișa consultată.",
      source: "Lecția, 6.3 și 7.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din roman sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt (după sursele consultate) sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din roman" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "ani",
      prompt: "Volumul I a apărut în 1955, iar volumul al II-lea în 1967.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Anii apar în sursele consultate; verifică-i în ediția ta.",
      source: "Lecția, 1 și 2.",
    },
    {
      id: "salcam-sfarsit",
      prompt: "Tăierea salcâmului este „începutul sfârșitului”.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Moromete taie salcâmul; „începutul sfârșitului” este lectura materialului consultat.",
      source: "Lecția, 6.4.",
    },
    {
      id: "poiana-parlament",
      prompt: "Poiana lui Iocan este un „miniparlament sătesc”.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că acolo se adună oamenii și comentează ziarul; comparația cu un parlament este o lectură.",
      source: "Lecția, 6.2.",
    },
    {
      id: "fuga",
      prompt: "Fiii cei mari fug cu caii și cu o parte din zestrea fetelor.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Este o secvență a acțiunii, după ambele surse consultate.",
      source: "Lecția, 6.6.",
    },
    {
      id: "titlu-familie",
      prompt: "Titlul pune în centru familia, nu doar pe Ilie.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că titlul este numele de familie; ideea că pune în centru familia este o lectură a lecției.",
      source: "Lecția, 4.2.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansMorometii: EssayPlan[] = [
  {
    id: "text-narativ",
    label: "Particularitățile unui text narativ",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1955) și încadrarea (de exemplu, roman postbelic, al lumii rurale).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Perioada sau orientarea și două trăsături, fiecare arătată în text (cu citate din ediția ta).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Ce spune programa", "3.2. Trăsături care pot fi arătate"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două episoade, legate explicit de ea.",
        reper: "Reperul despre episoade/secvențe · 6 p",
        see: ["4.1. Tema", "6.1. Cina", "6.6. Bătaia și fuga fiilor"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură sau de limbaj",
        text: "De exemplu, titlul, structura pe scene, timpul și spațiul, caracterizarea personajului: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre structură și compoziție · 6 p",
        see: ["4.2. Titlul", "5.1. Structura", "5.3. Timpul și spațiul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre roman, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroMorometii: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 5 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției, nu barem oficial pentru acest roman. Reperele vin din cerința din Varianta 5 (real/tehnologic), p. 2, care numește pe Sadoveanu sau Preda. Completează-l cu citate verificate din ediția ta.",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsMorometii: ChecklistGroup[] = [
  {
    id: "text-narativ",
    title: "Conținut (cerința despre un text narativ)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în text.",
      "Am formulat tema și am comentat două episoade, fără să repovestesc.",
      "Am analizat două elemente de structură, de compoziție sau de limbaj, cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din roman de interpretări.",
      "Citatele sunt verificate în ediția mea și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
