import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Iona” (content/romana/opere/iona.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”). Piesa nu a fost citită; faptele sunt
 * preluate dintr-un articol de presă (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md), iar lecția nu conține citate din piesă.
 * Faptele sunt marcate „fapt-piesa”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele patru tablouri ─────────────────────────────────────────────────────

export const structuraContent: DetailExplorerContent = {
  title: "Cele patru tablouri",
  summary: "Alege un tablou ca să vezi ce se întâmplă în el și ce rol are în piesă.",
  note: "Rezumatele sunt preluate dintr-un articol de presă (piesa nu a fost citită pentru lecție); rolul fiecărui tablou este o interpretare.",
  prompt: "Alege un tablou",
};

export const structuraItems: DetailItem[] = [
  {
    id: "tabloul-1",
    label: "Tabloul I",
    fields: [
      { label: "Ce se întâmplă", text: "Iona pescuiește de pe țărm; are un mic acvariu, din care aruncă pești în plasă ca să pară că a prins. Se apleacă peste acvariu și este înghițit de monstru, iar peștii din acvariu îi cântă.", tag: "fapt-piesa" },
      { label: "Rol", text: "Arată iluzia (acvariul) și începutul captivității.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1.",
  },
  {
    id: "tabloul-2",
    label: "Tabloul II",
    fields: [
      { label: "Ce se întâmplă", text: "În burta peștelui, Iona crede că moare, apoi își dă seama că trăiește. Își amintește mitul biblic, dar nu-i știe sfârșitul, și încearcă să taie o ieșire cu cuțitul.", tag: "fapt-piesa" },
      { label: "Rol", text: "Prima limită: captivitatea.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2.",
  },
  {
    id: "tabloul-3",
    label: "Tabloul III",
    fields: [
      { label: "Ce se întâmplă", text: "Iona descoperă că peștele a fost înghițit de unul mai mare; ajunge într-un al treilea pește. Scrie un SOS pe palmă. Vede puii nenăscuți ai monstrului.", tag: "fapt-piesa" },
      { label: "Rol", text: "Limitele devin succesive; fiecare ieșire duce într-o altă captivitate.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2.",
  },
  {
    id: "tabloul-4",
    label: "Tabloul IV",
    fields: [
      { label: "Ce se întâmplă", text: "Ani mai târziu, Iona este rătăcit, dar liniștit. Își amintește propriul nume, hotărăște să se întoarcă și își taie burta.", tag: "fapt-piesa" },
      { label: "Rol", text: "Finalul: hotărârea de a ieși, ambiguă ca sens.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.4.",
  },
];

// ── 3.3 / 8. Simboluri ──────────────────────────────────────────────────────────────────────

export const simboluriQuiz: QuizContent = {
  title: "Ce poate simboliza elementul?",
  summary: "Alege lectura propusă de lecție pentru fiecare element din piesă.",
  note: "Lecturile sunt cele din secțiunile 3.3, 6 și 8, prezentate ca interpretări posibile, nu ca singurele corecte.",
  choices: [
    { id: "limita", label: "Limita, captivitatea; limite succesive." },
    { id: "iluzie", label: "Iluzia, autoamăgirea." },
    { id: "incercare", label: "Încercarea de a prinde ceva." },
    { id: "comunicare", label: "Comunicarea, identitatea." },
  ],
  items: [
    {
      id: "pestele",
      prompt: "Peștele (și lanțul de pești care se înghit unul pe altul)",
      tag: "interpretare",
      correct: "limita",
      explanation: "Burțile succesive sugerează limite concentrice: fiecare ieșire duce într-o nouă captivitate.",
      source: "Lecția, 6.2 și 8.",
    },
    {
      id: "acvariul",
      prompt: "Acvariul din care Iona aruncă pești în plasă",
      tag: "interpretare",
      correct: "iluzie",
      explanation: "Iona își joacă o captură: imaginea autoiluzionării.",
      source: "Lecția, 6.1 și 8.",
    },
    {
      id: "plasa",
      prompt: "Plasa, cu care Iona pescuiește și, la final, vrea să prindă soarele",
      tag: "interpretare",
      correct: "incercare",
      explanation: "Plasa arată încercarea de a prinde hrană sau soarele, adică un țel.",
      source: "Lecția, 8.",
    },
    {
      id: "ecoul",
      prompt: "Ecoul care se pierde: când Iona strigă, se aude doar „Io”",
      tag: "interpretare",
      correct: "comunicare",
      explanation: "Pierderea ecoului poate fi citită ca pierdere a comunicării și a identității.",
      source: "Lecția, 6.3 și 8.",
    },
  ],
};

// ── 9. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din piesă sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt (după sursa consultată) sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din piesă" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "patru-tablouri",
      prompt: "Piesa are subtitlul „tragedie în patru tablouri”.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Subtitlul și numărul tablourilor apar în sursa consultată; verifică-le în ediția ta.",
      source: "Lecția, 2 și 5.1.",
    },
    {
      id: "peste-in-peste",
      prompt: "Iona descoperă că peștele care l-a înghițit a fost înghițit de un altul mai mare.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Este o secvență a acțiunii din tabloul III.",
      source: "Lecția, 6.2.",
    },
    {
      id: "limite",
      prompt: "Lanțul de pești simbolizează limite concentrice.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Iona ajunge în pești succesivi; sensul de limite este o lectură.",
      source: "Lecția, 6.2 și 8.",
    },
    {
      id: "final-sinucidere",
      prompt: "Finalul înseamnă sinuciderea lui Iona.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că Iona își taie burta; sursa lasă deschisă întrebarea dacă este un eveniment real sau un gest simbolic, iar sinuciderea este o lectură printre altele.",
      source: "Lecția, 6.4.",
    },
    {
      id: "data",
      prompt: "Piesa a fost publicată în 1968, în revista Luceafărul.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Data apare în sursa consultată; confirmă-o într-o ediție.",
      source: "Lecția, 2.",
    },
  ],
};

// ── 10. Planul eseului ──────────────────────────────────────────────────────────────────────

export const eseuPlansIona: EssayPlan[] = [
  {
    id: "text-dramatic",
    label: "Particularitățile unui text dramatic postbelic",
    section: "10",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1968) și încadrarea (de exemplu, dramă postbelică, parabolă).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Specia sau perioada și două trăsături, fiecare arătată în text (cu citate din ediția ta).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Cum este descrisă piesa în sursă", "3.3. Trăsături care pot fi arătate"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "6.1. Tabloul I: acvariul și înghițirea", "6.4. Tabloul IV: hotărârea"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, titlul, structura în tablouri, didascaliile, simbolurile: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură sau de limbaj · 6 p",
        see: ["4.2. Titlul", "5.3. Elemente ale textului dramatic", "8. Simboluri"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre piesă, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroIona: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Planul adaptează cele trei repere din cerințele despre texte narative și poetice (6 puncte fiecare) la un text dramatic. Poți schimba ordinea reperelor.",
  note: "Planul este o recomandare a lecției, nu barem oficial: subiectele 2026 din proiect nu conțin o cerință despre text dramatic. Completează-l cu citate verificate din ediția ta.",
};

// ── 11. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsIona: ChecklistGroup[] = [
  {
    id: "text-dramatic",
    title: "Conținut (cerința despre un text dramatic)",
    items: [
      "Am precizat încadrarea (specie, perioadă) și am numit două trăsături, fiecare arătată în text.",
      "Am formulat tema și am comentat două secvențe, fără să repovestesc.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, titlul, didascaliile, simbolurile), cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din piesă de interpretări.",
      "Citatele sunt verificate în ediția mea și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
