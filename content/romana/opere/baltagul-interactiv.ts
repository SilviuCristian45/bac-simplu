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
 * Textele experiențelor interactive din lecția „Baltagul” (content/romana/opere/baltagul.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Romanul nu a fost citit; faptele sunt
 * preluate din surse secundare (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar lecția nu conține citate din roman.
 * Faptele sunt marcate „fapt”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: momentele subiectului ───────────────────────────────────────────────────

export const momenteContent: DetailExplorerContent = {
  title: "Momentele subiectului",
  summary: "Alege un moment ca să vezi ce se întâmplă în el și ce rol are în desfășurarea acțiunii.",
  note: "Rezumatele sunt preluate din surse secundare (romanul nu a fost citit pentru lecție); rolul fiecărui moment este o interpretare. Numerele capitolelor nu sunt indicate.",
  prompt: "Alege un moment",
};

export const momenteItems: DetailItem[] = [
  {
    id: "disparitia",
    label: "1. Dispariția",
    fields: [
      { label: "Ce se întâmplă", text: "Nechifor Lipan pleacă să cumpere oi și nu se mai întoarce acasă, la Tarcău. Vitoria visează că el trece o apă la apusul soarelui.", tag: "fapt" },
      { label: "Rol", text: "Expoziția și intriga: se declanșează căutarea.", tag: "interpretare" },
    ],
    source: "Lecția, 6.1.",
  },
  {
    id: "hotararea",
    label: "2. Hotărârea",
    fields: [
      { label: "Ce se întâmplă", text: "Vitoria cere sfatul preotului și al babei Maranda, ține post, merge la Mănăstirea Bistrița, anunță dispariția la Piatra Neamț și hotărăște să-l caute, cu Gheorghiță.", tag: "fapt" },
      { label: "Rol", text: "Arată rânduiala după care acționează personajul.", tag: "interpretare" },
    ],
    source: "Lecția, 6.1.",
  },
  {
    id: "drumul",
    label: "3. Drumul",
    fields: [
      { label: "Ce se întâmplă", text: "Pe 10 martie, Vitoria și Gheorghiță urmează traseul lui Nechifor prin Bicaz, Borca, Broșteni, Vatra Dornei. La Dorna află din registre că Nechifor cumpărase 300 de oi.", tag: "fapt" },
      { label: "Rol", text: "Desfășurarea acțiunii, în formă de anchetă.", tag: "interpretare" },
    ],
    source: "Lecția, 6.2.",
  },
  {
    id: "suha",
    label: "4. Suha",
    fields: [
      { label: "Ce se întâmplă", text: "La Suha, cârciumarul spune că au trecut doar doi ciobani, Bogza și Cuțui, care se îmbogățiseră brusc. Chemați la primărie, ei spun că au cumpărat toate oile.", tag: "fapt" },
      { label: "Rol", text: "Apar bănuiții.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3.",
  },
  {
    id: "sabasa",
    label: "5. Sabasa",
    fields: [
      { label: "Ce se întâmplă", text: "La Sabasa, câinele Lupu o duce pe Vitoria la o râpă, unde sunt oasele lui Nechifor și ale calului. Craniul este spart de o lovitură de baltag.", tag: "fapt" },
      { label: "Rol", text: "Descoperirea adevărului; confirmă crima.", tag: "interpretare" },
    ],
    source: "Lecția, 6.4.",
  },
  {
    id: "praznic",
    label: "6. Praznicul",
    fields: [
      { label: "Ce se întâmplă", text: "La praznicul de înmormântare, Vitoria îi acuză pe Bogza și pe Cuțui. Bogza se repede la Gheorghiță, este lovit cu muchia baltagului și mușcat de Lupu; Cuțui se predă, iar Bogza mărturisește.", tag: "fapt" },
      { label: "Rol", text: "Punctul culminant și deznodământul.", tag: "interpretare" },
    ],
    source: "Lecția, 6.5.",
  },
];

// ── 3.3. Trăsături ──────────────────────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Leagă trăsătura de elementul din roman",
  summary: "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură, elementul care o susține.",
  note: "Trăsăturile și elementele sunt cele din secțiunea 3.3, prezentate acolo ca interpretare, după surse secundare.",
  choices: [
    { id: "lume", label: "Acțiunea urmărește un traseu prin sate și munți, de la Tarcău la Sabasa." },
    { id: "credinte", label: "Visul premonitoriu, postul, baba Maranda, ritualul înmormântării și praznicul." },
    { id: "mit", label: "Căutarea ciobanului ucis, perseverența femeii și animalul credincios, ca în „Miorița”." },
    { id: "personaj", label: "Vitoria conduce singură ancheta și demască ucigașii." },
  ],
  items: [
    {
      id: "lumea-satului",
      prompt: "Lumea satului și a muntelui",
      tag: "interpretare",
      correct: "lume",
      explanation: "Locurile și drumul dau cadrul unui roman al lumii rurale și montane.",
      source: "Lecția, 3.3 (punctul 1) și 5.3.",
    },
    {
      id: "obiceiuri",
      prompt: "Obiceiuri și credințe",
      tag: "interpretare",
      correct: "credinte",
      explanation: "Semnele, credința și ritualurile organizează acțiunea Vituriei.",
      source: "Lecția, 3.3 (punctul 2) și 6.1.",
    },
    {
      id: "miorita",
      prompt: "Legătura cu mitul („Miorița”)",
      tag: "interpretare",
      correct: "mit",
      explanation: "Sursa consultată arată că balada este sursa simbolului și a motivelor: conflictul dintre ciobani, femeia care caută și animalul credincios.",
      source: "Lecția, 3.3 (punctul 3) și 8.",
    },
    {
      id: "exemplar",
      prompt: "Personaj reprezentativ",
      tag: "interpretare",
      correct: "personaj",
      explanation: "Hotărârea și rânduiala după care acționează Vitoria o fac un personaj exemplar.",
      source: "Lecția, 3.3 (punctul 4) și 7.2.",
    },
  ],
};

// ── 7. Rolul personajelor ───────────────────────────────────────────────────────────────────

export const rolQuiz: QuizContent = {
  title: "Ce rol are personajul?",
  summary: "Alege ce face fiecare personaj în acțiune, după lecție.",
  note: "Rolurile sunt cele din secțiunea 7, după surse secundare.",
  choices: [
    { id: "cauta", label: "Pornește în căutare și conduce ancheta." },
    { id: "victima", label: "Este ucis în drum, după ce cumpără oi." },
    { id: "ucigas", label: "Îl lovește pe Nechifor și mărturisește la praznic." },
    { id: "caine", label: "Duce la oasele stăpânului și îl mușcă pe vinovat." },
    { id: "fiu", label: "Îi însoțește mama și îl lovește pe Bogza cu muchia baltagului." },
  ],
  items: [
    {
      id: "vitoria",
      prompt: "Vitoria Lipan",
      tag: "fapt",
      correct: "cauta",
      explanation: "Vitoria hotărăște să-l caute pe soțul ei și urmează traseul lui, până la demascare.",
      source: "Lecția, 6.1 și 7.2.",
    },
    {
      id: "nechifor",
      prompt: "Nechifor Lipan",
      tag: "fapt",
      correct: "victima",
      explanation: "Nechifor dispare în drum spre Dorna; oasele lui sunt găsite la Sabasa.",
      source: "Lecția, 7.4.",
    },
    {
      id: "bogza",
      prompt: "Calistrat Bogza",
      tag: "fapt",
      correct: "ucigas",
      explanation: "Vitoria îl acuză că l-a lovit pe Nechifor din spate; la praznic el mărturisește.",
      source: "Lecția, 6.5 și 7.5.",
    },
    {
      id: "lupu",
      prompt: "Lupu",
      tag: "fapt",
      correct: "caine",
      explanation: "Câinele o duce pe Vitoria la râpa cu oasele, iar la praznic îl mușcă pe Bogza de gât.",
      source: "Lecția, 6.4 și 7.6.",
    },
    {
      id: "gheorghita",
      prompt: "Gheorghiță",
      tag: "fapt",
      correct: "fiu",
      explanation: "Gheorghiță o însoțește pe Vitoria și, la praznic, îl lovește pe Bogza în frunte cu muchia baltagului.",
      source: "Lecția, 6.5 și 7.3.",
    },
  ],
};

// ── 9. Fapt și interpretare ─────────────────────────────────────────────────────────────────

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
      id: "capitole",
      prompt: "Romanul are 16 capitole, numerotate cu cifre romane, fără titluri.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Structura apare în sursa consultată; se poate verifica în ediția romanului.",
      source: "Lecția, 2 și 5.1.",
    },
    {
      id: "lupu",
      prompt: "Lupu o duce pe Vitoria la râpa cu oasele lui Nechifor.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Este o secvență a acțiunii, nu o lectură.",
      source: "Lecția, 6.4.",
    },
    {
      id: "dreptate-ritual",
      prompt: "Dreptatea vine prin ritual și demascare, nu prin tribunal.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Bogza mărturisește la praznic; ideea că dreptatea vine prin ritual, nu prin tribunal, este o lectură.",
      source: "Lecția, 6.5.",
    },
    {
      id: "baltag-simbol",
      prompt: "Baltagul este un simbol al dreptății făcute cu aceeași armă.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că lovitura și răzbunarea au loc cu un baltag; sensul simbolic este o lectură.",
      source: "Lecția, 4.2.",
    },
    {
      id: "data",
      prompt: "Romanul a apărut în noiembrie 1930, la Cartea Românească.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Data apare în sursa consultată (pagina ro.wikipedia.org); verifică-o și în ediția ta.",
      source: "Lecția, 2 și 12.",
    },
  ],
};

// ── 7.1. Harta relațiilor ───────────────────────────────────────────────────────────────────

export type BaltagulPerson = "vitoria" | "gheorghita" | "nechifor" | "bogza" | "cutui" | "lupu";

export const baltagulPeople: Record<BaltagulPerson, RelationPersonData> = {
  vitoria: {
    name: "Vitoria",
    role: "soția lui Nechifor",
    position: { x: 50, y: 48 },
    tone: "rose",
    details: [
      { tag: "fapt", text: "Pornește în căutare, găsește oasele și îi demască pe ucigași la praznic.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Personaj exemplar prin hotărâre și rânduială.", source: "Lecția, 7.2." },
    ],
  },
  gheorghita: {
    name: "Gheorghiță",
    role: "fiul",
    position: { x: 20, y: 18 },
    tone: "blue",
    details: [
      { tag: "fapt", text: "O însoțește pe mama lui și îl lovește pe Bogza cu muchia baltagului.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Urmașul care preia datoria.", source: "Lecția, 7.3." },
    ],
  },
  nechifor: {
    name: "Nechifor",
    role: "soțul, ucis",
    position: { x: 80, y: 18 },
    tone: "slate",
    details: [
      { tag: "fapt", text: "Dispare în drum spre Dorna; oasele sunt găsite la Sabasa.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Prezent mai ales prin absență.", source: "Lecția, 7.4." },
    ],
  },
  bogza: {
    name: "Bogza",
    role: "crescător de oi, ucigaș",
    position: { x: 20, y: 80 },
    tone: "amber",
    details: [
      { tag: "fapt", text: "Acuzat că l-a lovit pe Nechifor din spate; mărturisește la praznic.", source: "Lecția, 6.5 și 7.5." },
      { tag: "interpretare", text: "Răul care se dă drept om cinstit, până la demascare.", source: "Lecția, 7.5." },
    ],
  },
  cutui: {
    name: "Cuțui",
    role: "complicele",
    position: { x: 50, y: 90 },
    tone: "violet",
    details: [
      { tag: "fapt", text: "Acuzat că a păzit; se predă și confirmă acuzația.", source: "Lecția, 6.5 și 7.5." },
      { tag: "interpretare", text: "Complicele mai slab, care cedează primul.", source: "Lecția, 7.5." },
    ],
  },
  lupu: {
    name: "Lupu",
    role: "câinele",
    position: { x: 80, y: 80 },
    tone: "emerald",
    details: [
      { tag: "fapt", text: "O duce pe Vitoria la oase și îl mușcă pe Bogza la praznic.", source: "Lecția, 6.4 și 7.6." },
      { tag: "interpretare", text: "Animalul credincios, motiv popular.", source: "Lecția, 7.6." },
    ],
  },
};

export const baltagulEdges: RelationEdge<BaltagulPerson>[] = [
  { from: "vitoria", to: "gheorghita", label: "mamă și fiu; pornesc împreună", shortLabel: "însoțire", step: 0 },
  { from: "vitoria", to: "nechifor", label: "soți; îl caută", shortLabel: "căutare", step: 0 },
  { from: "vitoria", to: "lupu", label: "câinele o duce la oase", shortLabel: "oasele", step: 1 },
  { from: "vitoria", to: "bogza", label: "îl acuză la praznic", shortLabel: "acuzație", step: 2 },
  { from: "bogza", to: "cutui", label: "complici", shortLabel: "complici", step: 2 },
];

export const relatiiBaltagulFigure: FigureContent = {
  title: "Harta relațiilor: Vitoria și cei din jurul ei",
  summary:
    "Vitoria este în centru. Parcurge etapele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta arată personajele principale, după surse secundare; sensul relațiilor este o interpretare.",
  steps: [
    { id: "cautarea", title: "Începutul căutării", text: "Vitoria pornește cu Gheorghiță în căutarea lui Nechifor.", tag: "fapt", source: "Lecția, 6.1." },
    { id: "oasele", title: "Descoperirea", text: "Lupu o duce pe Vitoria la oasele lui Nechifor.", tag: "fapt", source: "Lecția, 6.4." },
    { id: "praznicul", title: "Praznicul", text: "Vitoria îi acuză pe Bogza și pe Cuțui, care sunt complici.", tag: "fapt", source: "Lecția, 6.5." },
  ],
};

// ── 10. Planul eseului ──────────────────────────────────────────────────────────────────────

export const eseuPlansBaltagul: EssayPlan[] = [
  {
    id: "text-narativ",
    label: "Particularitățile unui text narativ",
    section: "10",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1930) și încadrarea (de exemplu, tradiționalism).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Perioada sau orientarea (de exemplu, tradiționalismul) și două trăsături, fiecare arătată în text (cu citate din ediția ta).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Cum este descris romanul în surse", "3.3. Trăsături care pot fi arătate"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două episoade, legate explicit de ea.",
        reper: "Reperul despre episoade/secvențe · 6 p",
        see: ["4.1. Tema", "6.4. Sabasa: oasele și Lupu", "6.5. Praznicul și mărturisirea"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură sau de limbaj",
        text: "De exemplu, titlul, structura (anchetă), spațiul și timpul, caracterizarea personajului: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre structură și compoziție · 6 p",
        see: ["4.2. Titlul", "5.1. Structura", "5.3. Timpul și spațiul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre roman, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroBaltagul: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 5 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției, nu barem oficial pentru acest roman. Reperele vin din cerința din Varianta 5 (real/tehnologic), p. 2, care numește pe Sadoveanu sau Preda. Completează-l cu citate verificate din ediția ta.",
};

// ── 11. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsBaltagul: ChecklistGroup[] = [
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
