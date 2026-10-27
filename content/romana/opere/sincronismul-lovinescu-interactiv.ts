import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția despre fragmentul lui Lovinescu
 * (content/romana/opere/sincronismul-lovinescu.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar citatele au fost verificate pe
 * transcrierea Wikisource (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: structura fragmentului ──────────────────────────────────────────────────

export const structuraContent: DetailExplorerContent = {
  title: "Cum este construit fragmentul",
  summary: "Alege o etapă ca să vezi ce spune autorul și ce rol are în argumentare.",
  note: "Etapele sunt rezumate din lectura fragmentului; rolul lor în argumentare este o interpretare.",
  prompt: "Alege o etapă",
};

export const structuraItems: DetailItem[] = [
  {
    id: "reviste",
    label: "1. Revistele",
    fields: [
      { label: "Ce spune", text: "Prezintă Sburătorul (19 aprilie 1919) ca revistă a esteticului pur și Contimporanul (1923) ca revistă de avangardă.", tag: "fapt" },
      { label: "Rol", text: "Pune în context cele două feluri de modernism.", tag: "interpretare" },
    ],
    source: "Lecția, 3.1 și 5.1.",
  },
  {
    id: "critica",
    label: "2. Critica lui Lovinescu",
    fields: [
      { label: "Ce spune", text: "Urmărește critica lui E. Lovinescu de la scepticism și impresionism la un sistem.", tag: "fapt" },
      { label: "Rol", text: "Arată evoluția unei atitudini critice.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1.",
  },
  {
    id: "sincronism",
    label: "3. Sincronismul",
    fields: [
      { label: "Ce spune", text: "Definește sincronismul: civilizația românească s-a format „prin importație integrală”; imitația este „prima formă a originalității”.", tag: "fapt" },
      { label: "Rol", text: "Ideea centrală a fragmentului.", tag: "interpretare" },
    ],
    source: "Lecția, 4.1–4.2.",
  },
  {
    id: "mutatia",
    label: "4. Mutația valorilor estetice",
    fields: [
      { label: "Ce spune", text: "Descrie lucrarea ca sistem: nu există o știință a literaturii, ci o istorie a ei.", tag: "fapt" },
      { label: "Rol", text: "Leagă teoria despre civilizație de teoria despre literatură.", tag: "interpretare" },
    ],
    source: "Lecția, 4.4.",
  },
  {
    id: "incheiere",
    label: "5. Caracterizarea criticului",
    fields: [
      { label: "Ce spune", text: "Încheie spunând că criticul a trecut de la „un scepticism ostentativ și minor” la „un sistem cu aparențe de dogmatism”.", tag: "fapt" },
      { label: "Rol", text: "Concluzia fragmentului: un portret al criticului.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1.",
  },
];

// ── 5.2. Conceptele principale ──────────────────────────────────────────────────────────────

export const conceptelePrincipaleQuiz: QuizContent = {
  title: "Ce idee exprimă citatul?",
  summary: "Alege ideea exprimată de fiecare citat din fragment.",
  note: "Ideile sunt cele din secțiunile 4 și 5.2, prezentate acolo ca interpretare.",
  choices: [
    { id: "sincronism", label: "Sincronismul: formarea civilizației prin importație." },
    { id: "imitatie", label: "Imitația ca primă formă a originalității." },
    { id: "avangarda", label: "Diferența dintre modernismul teoretic și cel de avangardă." },
    { id: "sistem", label: "Evoluția criticului de la scepticism la sistem." },
  ],
  items: [
    {
      id: "importatie",
      prompt: "„civilizația noastră actuală s-a format prin importație integrală”",
      tag: "citat",
      correct: "sincronism",
      explanation: "Citatul este definiția sincronismului: o formare prin importație, nu evolutivă.",
      source: "Lecția, 4.1.",
    },
    {
      id: "prima-forma",
      prompt: "„la popoarele tinere imitația este prima formă a originalității”",
      tag: "citat",
      correct: "imitatie",
      explanation: "Formula spune că imitația, adaptată, poate deveni originalitate.",
      source: "Lecția, 4.2.",
    },
    {
      id: "artistii",
      prompt: "„Adevăratele revoluții nu le fac decât artiștii.”",
      tag: "citat",
      correct: "avangarda",
      explanation: "Autorul explică de ce modernismul de avangardă a fost susținut de reviste, nu de modernismul „teoretic” al criticului.",
      source: "Lecția, 4.3.",
    },
    {
      id: "dogmatism",
      prompt: "„un scepticism ostentativ și minor” devenit „un sistem cu aparențe de dogmatism”",
      tag: "citat",
      correct: "sistem",
      explanation: "Fraza încheie fragmentul și rezumă evoluția criticului.",
      source: "Lecția, 5.1.",
    },
  ],
};

// ── 7. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din text sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în fragment sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din text" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "data-sburatorul",
      prompt: "Fragmentul spune că Sburătorul a apărut la 19 aprilie 1919.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Data se citește în fragment: „apărut la 19 aprilie 1919”.",
      source: "Lecția, 3.1.",
    },
    {
      id: "definitie",
      prompt: "Autorul definește sincronismul ca formare a civilizației „prin importație integrală”.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Definiția apare în fragment: formarea prin „importație integrală”.",
      source: "Lecția, 4.1.",
    },
    {
      id: "recomandare",
      prompt: "Autorul recomandă imitarea Occidentului.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul spune că imitația există și că devine valoare prin adaptare; „nimeni nu recomandă, firește, principial, imitația”. A spune că recomandă imitarea este o lectură greșită sau cel puțin nesusținută.",
      source: "Lecția, 4.2.",
    },
    {
      id: "disputa",
      prompt: "Fragmentul arată o dispută între modernism și tradiționalism.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că tradiționalismul a contestat „violent” sincronismul; „dispută între orientări” este o descriere interpretativă.",
      source: "Lecția, 3.1.",
    },
    {
      id: "persoana-a-treia",
      prompt: "Fragmentul vorbește despre critica lui E. Lovinescu la persoana a treia.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Autorul scrie „criticul” și „critica lui E. Lovinescu”.",
      source: "Lecția, 5.2.",
    },
  ],
};

// ── 8. Planul eseului ───────────────────────────────────────────────────────────────────────

export const planArgumentativPlans: EssayPlan[] = [
  {
    id: "argumentativ",
    label: "Eseu argumentativ despre ideea de sincronism",
    section: "8",
    blocks: [
      { id: "intro", title: "Introducere", text: "Contextul (modernism și tradiționalism în perioada interbelică) și teza pe care o discuți.", see: [] },
      {
        id: "teza",
        title: "Ce susține textul",
        text: "Formulează ideea de sincronism și arată-o cu un citat scurt.",
        see: ["3.1. Ce spune programa", "4.1. Sincronismul"],
      },
      {
        id: "argumente",
        title: "Argumentele textului",
        text: "Comentează ideea că imitația este „prima formă a originalității” și distincția dintre cele două feluri de modernism.",
        see: ["4.2. Imitația și originalitatea", "4.3. Modernismul teoretic și modernismul de avangardă"],
      },
      {
        id: "procedee",
        title: "Procedeele",
        text: "Arată cum construiește autorul argumentul: definiție, formulă memorabilă, opoziții, enumerații.",
        see: ["5.2. Procedee"],
      },
      {
        id: "opinie",
        title: "Opinia ta",
        text: "Separă ce spune textul de ce crezi tu și argumentează o poziție personală.",
        see: ["6. Cum îl citești critic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O concluzie argumentată, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroArgumentativ: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary: "Planul propune un eseu argumentativ despre ideea de sincronism, pornind de la fragment.",
  note: "Planul este o recomandare a lecției, nu barem oficial: subiectele 2026 din proiect nu cer eseuri despre texte critice (vezi 1).",
};

// ── 9. Autoevaluare ─────────────────────────────────────────────────────────────────────────

export const checklistGroupsLovinescu: ChecklistGroup[] = [
  {
    id: "argumentare",
    title: "Conținut (eseu argumentativ)",
    items: [
      "Am formulat clar ideea de sincronism și am susținut-o cu un citat scurt, verificat.",
      "Am comentat cel puțin două argumente sau idei din text, fără să le repovestesc.",
      "Am numit procedeele argumentative (definiție, formulă, opoziție).",
      "Am separat ce spune textul de opinia mea și am argumentat opinia.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele, prin conectori.",
      "Nu am atribuit lui Lovinescu sau criticilor idei pe care nu le-am verificat.",
      "Citatele sunt scurte și verificate.",
      "Am verificat ortografia și punctuația.",
    ],
  },
];
