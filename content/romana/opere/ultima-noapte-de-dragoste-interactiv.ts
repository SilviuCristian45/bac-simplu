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
 * Textele experiențelor interactive din lecția despre romanul lui Camil Petrescu
 * (content/romana/opere/ultima-noapte-de-dragoste.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Romanul nu a fost citit; faptele sunt
 * preluate dintr-o sursă secundară (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar lecția nu conține citate din roman.
 * Faptele sunt marcate „fapt”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: momentele subiectului ───────────────────────────────────────────────────

export const momenteContent: DetailExplorerContent = {
  title: "Momentele subiectului",
  summary: "Alege un moment ca să vezi ce se întâmplă în el și ce rol are în acțiune.",
  note: "Rezumatele sunt preluate dintr-o sursă secundară (romanul nu a fost citit pentru lecție); rolul fiecărui moment este o interpretare.",
  prompt: "Alege un moment",
};

export const momenteItems: DetailItem[] = [
  {
    id: "casnicia",
    label: "1. Căsnicia și moștenirea",
    fields: [
      { label: "Ce se întâmplă", text: "Ștefan, student sărac la filozofie, se căsătorește cu Ela. După moartea unchiului Tache primește cea mai mare parte din avere, dar renunță la partea lui din dispută.", tag: "fapt" },
      { label: "Rol", text: "Expoziția: personajul și contrastul cu lumea bănească.", tag: "interpretare" },
    ],
    source: "Lecția, 6.1.",
  },
  {
    id: "fabrica",
    label: "2. Fabrica",
    fields: [
      { label: "Ce se întâmplă", text: "Unchiul Nae îl convinge să cumpere o fabrică metalurgică; afacerea aproape eșuează, dar Nae o salvează.", tag: "fapt" },
      { label: "Rol", text: "Arată lumea pragmatică, opusă lui Ștefan.", tag: "interpretare" },
    ],
    source: "Lecția, 6.2.",
  },
  {
    id: "gelozia",
    label: "3. Gelozia",
    fields: [
      { label: "Ce se întâmplă", text: "Ștefan devine sigur că Ela preferă un rival; la o petrecere încearcă s-o pedepsească și pleacă singur; Ela îi găsește împreună cu o altă femeie și pleacă.", tag: "fapt" },
      { label: "Rol", text: "Intriga și ruptura.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3.",
  },
  {
    id: "anisoara",
    label: "4. Scrisoarea Anișoarei",
    fields: [
      { label: "Ce se întâmplă", text: "O scrisoare a Anișoarei îl duce la Câmpulung, unde Ela îi cere o parte din avere; el o părăsește din nou și renunță să se răzbune.", tag: "fapt" },
      { label: "Rol", text: "Punctul culminant al părții întâi.", tag: "interpretare" },
    ],
    source: "Lecția, 6.4.",
  },
  {
    id: "razboiul",
    label: "5. Războiul",
    fields: [
      { label: "Ce se întâmplă", text: "Batalionul este mobilizat; la Măgura, Ștefan este luat drept dușman de ai lui; trece Oltul; la Cohalm este rănit.", tag: "fapt" },
      { label: "Rol", text: "Desfășurarea și culminarea părții a doua: experiența războiului.", tag: "interpretare" },
    ],
    source: "Lecția, 6.5.",
  },
  {
    id: "bucuresti",
    label: "6. Întoarcerea",
    fields: [
      { label: "Ce se întâmplă", text: "Ștefan ajunge la spitalul din București, unde grija familiei i se pare falsă, și se desparte de Ela.", tag: "fapt" },
      { label: "Rol", text: "Deznodământul: detașarea.", tag: "interpretare" },
    ],
    source: "Lecția, 6.6.",
  },
];

// ── 3.3. Trăsături ──────────────────────────────────────────────────────────────────────────

export const trasaturiQuiz: QuizContent = {
  title: "Leagă trăsătura de elementul din roman",
  summary: "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură, elementul care o susține.",
  note: "Trăsăturile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare, după sursa secundară.",
  choices: [
    { id: "narator", label: "Povestirea la persoana I, de către Ștefan Gheorghidiu." },
    { id: "timp", label: "Alternanța planurilor, cu retrospecție." },
    { id: "spatiu", label: "Locuri reale (frontul, Odobești, Câmpulung) și spațiul conștiinței." },
    { id: "tema", label: "Iubire și gelozie în prima parte, război în a doua." },
  ],
  items: [
    {
      id: "naratorul",
      prompt: "Naratorul-personaj",
      tag: "interpretare",
      correct: "narator",
      explanation: "Ștefan își povestește propria viață; sursa spune că povestirea este la persoana I.",
      source: "Lecția, 3.3 (punctul 1) și 5.4.",
    },
    {
      id: "timpul",
      prompt: "Timpul discontinuu",
      tag: "interpretare",
      correct: "timp",
      explanation: "Sursa descrie alternanța planurilor și retrospecția (flashback).",
      source: "Lecția, 3.3 (punctul 2) și 5.3.",
    },
    {
      id: "spatiul",
      prompt: "Spațiul interior",
      tag: "interpretare",
      correct: "spatiu",
      explanation: "Sursa spune că spațiul real se îmbină cu spațiul conștiinței personajului.",
      source: "Lecția, 3.3 (punctul 3) și 5.3.",
    },
    {
      id: "tema",
      prompt: "Tema",
      tag: "interpretare",
      correct: "tema",
      explanation: "Cele două părți ale titlului corespund iubirii și războiului.",
      source: "Lecția, 3.3 (punctul 4) și 4.2.",
    },
  ],
};

// ── 7. Rolul personajelor ───────────────────────────────────────────────────────────────────

export const rolQuiz: QuizContent = {
  title: "Ce rol are personajul?",
  summary: "Alege ce face fiecare personaj în acțiune, după lecție.",
  note: "Rolurile sunt cele din secțiunea 7, după sursa secundară.",
  choices: [
    { id: "narator", label: "Naratorul; student, apoi ofițer." },
    { id: "practic", label: "Unchiul practic, care salvează afacerea cu fabrica." },
    { id: "sotia", label: "Soția, văzută prin ochii naratorului." },
    { id: "amant", label: "Bănuitul amant al soției." },
  ],
  items: [
    {
      id: "stefan",
      prompt: "Ștefan Gheorghidiu",
      tag: "fapt",
      correct: "narator",
      explanation: "Ștefan este naratorul și personajul central; ajunge ofițer în război.",
      source: "Lecția, 7.2.",
    },
    {
      id: "nae",
      prompt: "Nae Gheorghidiu",
      tag: "fapt",
      correct: "practic",
      explanation: "Nae îl convinge pe Ștefan să cumpere fabrica și o salvează cumpărând un depozit de fier.",
      source: "Lecția, 6.2 și 7.4.",
    },
    {
      id: "ela",
      prompt: "Ela",
      tag: "fapt",
      correct: "sotia",
      explanation: "Ela este soția lui Ștefan și apare în relatarea lui.",
      source: "Lecția, 7.3.",
    },
    {
      id: "grigoriade",
      prompt: "Domnul Grigoriade",
      tag: "fapt",
      correct: "amant",
      explanation: "Este bănuitul amant al Elei, după sursă.",
      source: "Lecția, 7.5.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din roman sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt (după sursa consultată) sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din roman" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "doua-parti",
      prompt: "Romanul are două părți, care corespund celor două părți ale titlului.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Structura apare în sursa consultată; se poate verifica în ediția romanului.",
      source: "Lecția, 2 și 4.2.",
    },
    {
      id: "persoana-i",
      prompt: "Povestirea este la persoana I.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Sursa spune că naratorul este Ștefan Gheorghidiu.",
      source: "Lecția, 5.4.",
    },
    {
      id: "ela-vinovata",
      prompt: "Ela l-a înșelat pe Ștefan.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Ela este văzută doar prin ochii lui Ștefan; sursa prezintă gelozia ca certitudine a lui Ștefan, nu ca fapt dovedit. Orice concluzie este o interpretare.",
      source: "Lecția, 6.3 și 7.3.",
    },
    {
      id: "razboi-absurd",
      prompt: "Războiul apare ca experiență absurdă.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Ștefan este luat drept dușman de ai lui; ideea de absurd este o lectură a sursei.",
      source: "Lecția, 6.5.",
    },
    {
      id: "separare",
      prompt: "La final, Ștefan se desparte de Ela.",
      tag: "fapt",
      correct: "fapt",
      explanation: "După sursă, la întoarcere se desparte de ea, lăsându-i banii și proprietățile rămase.",
      source: "Lecția, 6.6.",
    },
  ],
};

// ── 7.1. Harta relațiilor ───────────────────────────────────────────────────────────────────

export type UltimaNoaptePerson = "stefan" | "ela" | "nae" | "grigoriade" | "lumanararu";

export const ultimaNoaptePeople: Record<UltimaNoaptePerson, RelationPersonData> = {
  stefan: {
    name: "Ștefan",
    role: "naratorul",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt", text: "Student, apoi ofițer; își povestește căsnicia și războiul.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Intelectualul lucid, gelos, în conflict cu lumea convențiilor.", source: "Lecția, 7.2." },
    ],
  },
  ela: {
    name: "Ela",
    role: "soția",
    position: { x: 78, y: 18 },
    tone: "rose",
    details: [
      { tag: "fapt", text: "Soția lui Ștefan; ei se despart la final.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Văzută doar prin ochii lui Ștefan.", source: "Lecția, 7.3." },
    ],
  },
  nae: {
    name: "Nae",
    role: "unchiul practic",
    position: { x: 22, y: 18 },
    tone: "amber",
    details: [
      { tag: "fapt", text: "Salvează afacerea cu fabrica.", source: "Lecția, 6.2 și 7.4." },
      { tag: "interpretare", text: "Omul pragmatic, opus lui Ștefan.", source: "Lecția, 7.4." },
    ],
  },
  lumanararu: {
    name: "Lumânăraru",
    role: "asociat în afacere",
    position: { x: 22, y: 82 },
    tone: "slate",
    details: [
      { tag: "fapt", text: "Asociat cu Ștefan la fabrică; nici el nu poate conduce afacerea.", source: "Lecția, 6.2 și 7.4." },
      { tag: "interpretare", text: "Reprezintă lumea afacerilor.", source: "Lecția, 7.4." },
    ],
  },
  grigoriade: {
    name: "Grigoriade",
    role: "bănuitul amant",
    position: { x: 78, y: 82 },
    tone: "emerald",
    details: [
      { tag: "fapt", text: "Este bănuit de Ștefan că ar fi amantul Elei.", source: "Lecția, 6.4 și 7.5." },
      { tag: "interpretare", text: "Susține gelozia și ambiguitatea.", source: "Lecția, 7.5." },
    ],
  },
};

export const ultimaNoapteEdges: RelationEdge<UltimaNoaptePerson>[] = [
  { from: "stefan", to: "ela", label: "soț și soție; se despart", shortLabel: "căsnicie", step: 0 },
  { from: "stefan", to: "nae", label: "unchi și nepot; afacerea", shortLabel: "afacere", step: 0 },
  { from: "nae", to: "lumanararu", label: "afacerea cu fabrica", shortLabel: "fabrica", step: 0 },
  { from: "ela", to: "grigoriade", label: "bănuită de Ștefan", shortLabel: "bănuială", step: 1 },
];

export const relatiiUltimaNoapteFigure: FigureContent = {
  title: "Harta relațiilor: Ștefan și cei din jurul lui",
  summary:
    "Ștefan este în centru. Parcurge etapele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta arată personajele principale, după o sursă secundară; sensul relațiilor este o interpretare.",
  steps: [
    { id: "familia", title: "Familia și afacerea", text: "Ștefan se căsătorește cu Ela și intră în afacerea propusă de unchiul Nae.", tag: "fapt", source: "Lecția, 6.1–6.2." },
    { id: "banuiala", title: "Bănuiala", text: "Ștefan o bănuiește pe Ela de o relație cu Grigoriade.", tag: "fapt", source: "Lecția, 6.3–6.4." },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansUltimaNoapte: EssayPlan[] = [
  {
    id: "text-narativ",
    label: "Particularitățile unui text narativ",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1930) și încadrarea (de exemplu, roman psihologic, al experienței).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Tipul de roman și două trăsături, fiecare arătată în text (cu citate din ediția ta).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Cum este descris romanul în sursă", "3.3. Trăsături care pot fi arătate"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două episoade, legate explicit de ea.",
        reper: "Reperul despre episoade/secvențe · 6 p",
        see: ["4.1. Tema", "6.3. Gelozia", "6.5. Războiul: Măgura, Olt, Cohalm"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură sau de limbaj",
        text: "De exemplu, titlul, perspectiva narativă, timpul și spațiul: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre structură și compoziție · 6 p",
        see: ["4.2. Titlul", "5.3. Timpul și spațiul", "5.4. Perspectiva narativă"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre roman, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroUltimaNoapte: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul urmează cele trei repere din Subiectul al III-lea, Varianta 4 (6 puncte fiecare). Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planul este o recomandare a lecției, nu barem oficial pentru acest roman. Reperele vin din cerința din Varianta 4 (real/tehnologic), p. 2, care numește pe Rebreanu sau Camil Petrescu. Completează-l cu citate verificate din ediția ta.",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsUltimaNoapte: ChecklistGroup[] = [
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
