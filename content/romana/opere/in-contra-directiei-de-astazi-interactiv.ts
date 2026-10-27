import type { DetailExplorerContent, DetailItem } from "@/components/lesson/interactive/detail-explorer";
import type { ChecklistGroup, EssayPlan, EssayPlanIntro, QuizContent } from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „În contra direcției de astăzi în cultura română”
 * (content/romana/opere/in-contra-directiei-de-astazi.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar citatele au fost verificate pe
 * transcrierea Wikisource a studiului (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: structura argumentului ──────────────────────────────────────────────────

export const structuraContent: DetailExplorerContent = {
  title: "Cum este construit argumentul",
  summary: "Alege o etapă ca să vezi ce spune Maiorescu și ce rol are în argumentare.",
  note: "Etapele sunt rezumate din lectura textului; rolul lor în argumentare este o interpretare.",
  prompt: "Alege o etapă",
};

export const structuraItems: DetailItem[] = [
  {
    id: "polemica",
    label: "1. Polemica",
    fields: [
      { label: "Ce spune", text: "Revista Transilvania numește criticile lui Maiorescu „bagatele” și citează proverbul „satul arde, baba se piaptănă”.", tag: "fapt" },
      { label: "Rol", text: "Punctul de pornire: un caz concret, de la care se ajunge la o idee generală.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1.",
  },
  {
    id: "diagnoza",
    label: "2. Diagnoza și cauza",
    fields: [
      { label: "Ce spune", text: "Viciul culturii vremii este „neadevărul”; tinerii care au studiat în Franța și Germania au adus „numai lustrul dinafară”.", tag: "fapt" },
      { label: "Rol", text: "Formulează teza și explică de unde vine problema.", tag: "interpretare" },
    ],
    source: "Lecția, 4.1 și 5.1.",
  },
  {
    id: "exemple",
    label: "3. Exemple și consecințe",
    fields: [
      { label: "Ce spune", text: "Exemple istorice (Petru Maior, Lexiconul de la Buda, Tentamen criticum), enumerarea instituțiilor făcute „înainte de a avea” fondul lor și consecința pentru țăran.", tag: "fapt" },
      { label: "Rol", text: "Susțin teza cu dovezi și arată costul social.", tag: "interpretare" },
    ],
    source: "Lecția, 6.1–6.3.",
  },
  {
    id: "concluzia",
    label: "4. Concluzia",
    fields: [
      { label: "Ce spune", text: "Două „adevăruri” (descurajarea mediocrităților, forma fără fond) și ideea că „cu o cultură falsă nu poate trăi un popor”.", tag: "fapt" },
      { label: "Rol", text: "Încheie argumentul cu o generalizare și un avertisment.", tag: "interpretare" },
    ],
    source: "Lecția, 4.2–4.3 și 6.4.",
  },
];

// ── 5.2. Procedee ───────────────────────────────────────────────────────────────────────────

export const procedeeQuiz: QuizContent = {
  title: "Ce procedeu argumentativ este?",
  summary: "Alege procedeul ilustrat de fiecare exemplu din text.",
  note: "Procedeele sunt cele din secțiunea 5.2, prezentate acolo ca interpretare.",
  choices: [
    { id: "exemplu", label: "Exemplu istoric" },
    { id: "enumeratie", label: "Enumerare cu repetiție" },
    { id: "intrebare", label: "Întrebare retorică" },
    { id: "concesie", label: "Concesie" },
  ],
  items: [
    {
      id: "maior",
      prompt: "La 1812, Petru Maior susține că dacii au fost exterminați de romani, iar Maiorescu vede în asta o „falsificare a istoriei”.",
      tag: "interpretare",
      correct: "exemplu",
      explanation: "Un caz istoric concret este folosit ca dovadă pentru teză.",
      source: "Lecția, 5.2 și 6.1.",
    },
    {
      id: "inainte",
      prompt: "„Înainte de a avea artiști trebuincioși, am făcut conservatorul de muzică; înainte de a avea un singur pictor de valoare, am făcut școala de bele-arte”.",
      tag: "citat",
      correct: "enumeratie",
      explanation: "Formula „înainte de a avea... am făcut” se repetă și construiește un ritm de acuzare.",
      source: "Lecția, 5.2 și 6.2.",
    },
    {
      id: "scapare",
      prompt: "„Mai este oare timp de scăpare?”",
      tag: "citat",
      correct: "intrebare",
      explanation: "Întrebarea nu așteaptă un răspuns; atrage atenția asupra urgenței.",
      source: "Lecția, 5.2.",
    },
    {
      id: "usoare",
      prompt: "Maiorescu spune că va căuta „împrejurările ușurătoare” pentru revista pe care o critică.",
      tag: "interpretare",
      correct: "concesie",
      explanation: "Autorul acceptă că există circumstanțe care explică purtarea revistei, înainte de a o condamna: este o concesie.",
      source: "Lecția, 5.2.",
    },
  ],
};

// ── 6. Argumente și exemple ─────────────────────────────────────────────────────────────────

export const argumenteQuiz: QuizContent = {
  title: "Ce idee susține fiecare citat?",
  summary: "Alege ideea susținută de fiecare citat din studiu.",
  note: "Ideile sunt cele din secțiunile 4 și 6, prezentate acolo ca interpretare.",
  choices: [
    { id: "forma", label: "Forma fără fond este dăunătoare." },
    { id: "taran", label: "Costul lipsei de fond îl plătește țăranul." },
    { id: "mediocritati", label: "Mediocritățile trebuie descurajate." },
    { id: "cultura", label: "O cultură falsă nu poate dăinui." },
  ],
  items: [
    {
      id: "pinacoteca",
      prompt: "„mai bine să nu facem o pinacotecă deloc decât să o facem lipsită de arta frumoasă”",
      tag: "citat",
      correct: "forma",
      explanation: "Exemplul arată că o formă goală (pinacoteca fără artă) face mai mult rău decât lipsa ei.",
      source: "Lecția, 4.2.",
    },
    {
      id: "clasa-reala",
      prompt: "„Singura clasă reală la noi este țăranul român”",
      tag: "citat",
      correct: "taran",
      explanation: "Țăranul plătește cu munca lui „edificiul fictiv” al culturii, fără să primească nimic înapoi.",
      source: "Lecția, 6.3.",
    },
    {
      id: "descurajate",
      prompt: "„mediocritățile trebuiesc descurajate de la viața publică a unui popor”",
      tag: "citat",
      correct: "mediocritati",
      explanation: "Este a doua idee a studiului: indulgența față de lucrări slabe nu ajută valoarea.",
      source: "Lecția, 4.3.",
    },
    {
      id: "popor",
      prompt: "„cu o cultură falsă nu poate trăi un popor”",
      tag: "citat",
      correct: "cultura",
      explanation: "Este concluzia studiului: avertisment asupra consecințelor culturii false.",
      source: "Lecția, 6.4.",
    },
  ],
};

// ── 9. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din text sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în text sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din text" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "data",
      prompt: "Studiul a apărut în Convorbiri literare, la 1 decembrie 1868.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Data se află în nota transcrierii: „publicat în Convorbiri literare, No.19. - Anul II. Iassi, 1 Decembrie 1868”.",
      source: "Lecția, 2 și 12.",
    },
    {
      id: "exemple",
      prompt: "Maiorescu dă ca exemple Petru Maior, Lexiconul de la Buda și Tentamen criticum.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Cele trei exemple se citesc în text.",
      source: "Lecția, 6.1.",
    },
    {
      id: "particular-general",
      prompt: "Structura merge de la un caz mic la o idee generală.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că textul începe cu o polemică; descrierea structurii ca drum de la particular la general este o lectură.",
      source: "Lecția, 5.1.",
    },
    {
      id: "junime",
      prompt: "În citatul „datoria impusă junimii române”, cuvântul „junimii” înseamnă tineretul.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Citatul este un fapt, dar sensul „tineretul” este o lectură a contextului, nu o afirmație explicită.",
      source: "Lecția, 3.1.",
    },
    {
      id: "taran",
      prompt: "Maiorescu numește țăranul „singura clasă reală”.",
      tag: "fapt",
      correct: "fapt",
      explanation: "Citatul „Singura clasă reală la noi este țăranul român” se citește în text.",
      source: "Lecția, 6.3.",
    },
  ],
};

// ── 10. Planul eseului ──────────────────────────────────────────────────────────────────────

export const planArgumentativPlans: EssayPlan[] = [
  {
    id: "argumentativ",
    label: "Eseu argumentativ despre ideea „forma fără fond”",
    section: "10",
    blocks: [
      { id: "intro", title: "Introducere", text: "Contextul (studiul din 1868) și teza pe care o discuți.", see: [] },
      {
        id: "teza",
        title: "Ce susține textul",
        text: "Formulează ideea „forma fără fond” și arată-o cu un citat scurt.",
        see: ["4.2. Forma fără fond", "4.1. Neadevărul"],
      },
      {
        id: "argumente",
        title: "Argumentele textului",
        text: "Alege două argumente din text (exemplele istorice, enumerarea instituțiilor, consecința pentru țăran) și comentează-le.",
        see: ["6.1. Exemplele despre începuturi", "6.2. Enumerarea formelor", "6.3. Consecința pentru țăran"],
      },
      {
        id: "procedee",
        title: "Procedeele",
        text: "Arată cum construiește autorul argumentul: exemple, enumerare, întrebare retorică, concesie.",
        see: ["5.2. Procedee ale argumentării"],
      },
      {
        id: "opinie",
        title: "Opinia ta",
        text: "Separă ce spune textul de ce crezi tu și argumentează o poziție personală.",
        see: ["8. Cum îl citești critic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O concluzie argumentată, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroArgumentativ: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary: "Planul propune un eseu argumentativ despre ideea „forma fără fond”, pornind de la text.",
  note: "Planul este o recomandare a lecției, nu barem oficial: subiectele 2026 din proiect nu cer eseuri despre texte critice (vezi 1).",
};

// ── 11. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsMaiorescu: ChecklistGroup[] = [
  {
    id: "argumentare",
    title: "Conținut (eseu argumentativ)",
    items: [
      "Am formulat clar teza textului și am susținut-o cu un citat scurt, verificat.",
      "Am comentat cel puțin două argumente din text, fără să le repovestesc.",
      "Am numit procedeele argumentative (exemplu, enumerare, întrebare retorică, concesie).",
      "Am separat ce spune textul de opinia mea și am argumentat opinia.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele, prin conectori.",
      "Nu am atribuit lui Maiorescu sau criticilor idei pe care nu le-am verificat.",
      "Citatele sunt scurte și verificate.",
      "Am verificat ortografia și punctuația.",
    ],
  },
];
