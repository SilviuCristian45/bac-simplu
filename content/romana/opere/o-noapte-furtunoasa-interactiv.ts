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
 * Textele experiențelor interactive din lecția „O noapte furtunoasă” (content/romana/opere/o-noapte-furtunoasa.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), acțiunea și citatele au fost
 * verificate pe transcrierea Wikisource a piesei (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt-piesa”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele două acte ──────────────────────────────────────────────────────────

export const structuraActelorContent: DetailExplorerContent = {
  title: "Cele două acte, pe scurt",
  summary: "Piesa are două acte, fiecare cu câte nouă scene. Alege un act ca să vezi ce se întâmplă în el.",
  note: "Rezumatele sunt verificate pe textul piesei. Rolul fiecărui act în subiect este o interpretare.",
  prompt: "Alege un act",
};

export const structuraActelorItems: DetailItem[] = [
  {
    id: "actul-1",
    label: "Actul I",
    fields: [
      { label: "Decor", text: "O odaie de mahala (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "Dumitrache îi povestește lui Ipingescu cum a fost urmărit de un „bagabont”. Ipingescu citește un articol din ziar. Zița îi trimite un bilet lui Rică prin Spiridon. Veta și Chiriac se împacă, iar Dumitrache le cere de afară să fie atenți.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Expoziția: se află personajele, gelozia lui Dumitrache și relația ascunsă dintre Veta și Chiriac.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.1–6.3.",
  },
  {
    id: "actul-2",
    label: "Actul II",
    fields: [
      { label: "Decor", text: "Aceeași odaie, cu o lampă cu gaz pe masă (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "Rică intră noaptea în casă, crezând că o găsește pe Zița, dar dă peste Veta și fuge pe fereastră. Dumitrache, Ipingescu și Chiriac îl urmăresc; Rică este prins, recunoscut de Ipingescu, iar încurcătura este explicată prin dragostea lui pentru Zița.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Desfășurarea, punctul culminant și deznodământul comic, într-o singură noapte.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.4–6.5.",
  },
];

// ── 3.2. Tipuri de comic ────────────────────────────────────────────────────────────────────

export const tipuriDeComicQuiz: QuizContent = {
  title: "Ce fel de comic este?",
  summary: "Alege tipul de comic pe care îl ilustrează cel mai clar fiecare exemplu din piesă.",
  note: "Un exemplu poate ilustra mai multe tipuri de comic. Lecția alege tipul pe care îl subliniază (3.2).",
  choices: [
    { id: "nume", label: "Comic de nume" },
    { id: "limbaj", label: "Comic de limbaj" },
    { id: "situatie", label: "Comic de situație" },
    { id: "caracter", label: "Comic de caracter" },
  ],
  items: [
    {
      id: "titirca",
      prompt: "Numele personajului: „Jupân Dumitrache Titircă Inimă-Rea”.",
      tag: "fapt-piesa",
      correct: "nume",
      explanation: "Numele lung, cu o poreclă, caracterizează personajul și provoacă râsul; este comic de nume.",
      source: "Lecția, 3.2; piesa, lista personajelor.",
    },
    {
      id: "rezon",
      prompt: "Ipingescu răspunde mereu „Rezon!” la ce spune Dumitrache.",
      tag: "citat",
      correct: "limbaj",
      explanation: "Formula repetată este un tic verbal: comic de limbaj, care arată și servilismul personajului.",
      source: "Lecția, 3.2 și 7.5; piesa, I, 1.",
    },
    {
      id: "tablita",
      prompt: "Rică intră în casa greșită pentru că numărul de la poartă a fost bătut „d-a-ndoaselea”.",
      tag: "fapt-piesa",
      correct: "situatie",
      explanation: "Încurcătura vine dintr-o întâmplare, nu din personaje: comic de situație.",
      source: "Lecția, 6.5; piesa, II, 9.",
    },
    {
      id: "ambit",
      prompt: "Dumitrache vorbește mereu despre „ambiț” și „onoarea mea de familist”, dar este înșelat de omul în care are încredere.",
      tag: "citat",
      correct: "caracter",
      explanation: "Contrastul dintre ce crede despre sine și ce se întâmplă arată o trăsătură a lui: mândria oarbă. Este comic de caracter.",
      source: "Lecția, 3.2 și 7.2; piesa, I, 1.",
    },
    {
      id: "angel",
      prompt: "Rică se aruncă în genunchi și spune: „Angel radios!”.",
      tag: "citat",
      correct: "limbaj",
      explanation: "Exprimarea pompoasă, de poet de ocazie, contrastează cu situația; comicul vine din limbaj.",
      source: "Lecția, 3.2 și 7.6; piesa, II, 2.",
    },
  ],
};

// ── 7.7. Cine spune? ────────────────────────────────────────────────────────────────────────

export const cineVorbesteQuiz: QuizContent = {
  title: "Cine spune replica?",
  summary: "Alege personajul căruia îi aparține fiecare replică. Replicile sunt scurte și au fost verificate în text.",
  note: "Asta urmărești: cum îți recunoști personajul după felul de a vorbi.",
  choices: [
    { id: "dumitrache", label: "Dumitrache" },
    { id: "ipingescu", label: "Ipingescu" },
    { id: "chiriac", label: "Chiriac" },
    { id: "rica", label: "Rică Venturiano" },
    { id: "veta", label: "Veta" },
    { id: "zita", label: "Zița" },
  ],
  items: [
    {
      id: "ambit",
      prompt: "„Eu am ambiț, domnule, când e vorba la o adică de onoarea mea de familist...”",
      attribution: "act I",
      tag: "citat",
      correct: "dumitrache",
      explanation: "Dumitrache își repetă preocuparea pentru „onoarea de familist”.",
      source: "Lecția, 6.1 și 7.2; piesa, I, 1.",
    },
    {
      id: "aprob",
      prompt: "„Aprob pozitiv.”",
      attribution: "act II",
      tag: "citat",
      correct: "ipingescu",
      explanation: "Ipingescu aprobă fără rezerve ce spune prietenul lui.",
      source: "Lecția, 7.5; piesa, II, 5.",
    },
    {
      id: "consimt",
      prompt: "„Lasă, jupâne, mă știi că consimț la onoarea dumitale de familist!...”",
      attribution: "act I, final",
      tag: "citat",
      correct: "chiriac",
      explanation: "Chiriac, ținând-o în brațe pe Veta, îi răspunde lui Dumitrache cu o replică cu două sensuri.",
      source: "Lecția, 6.3; piesa, I, 9.",
    },
    {
      id: "angel",
      prompt: "„Sunt un june tânăr și nefericit, care sufere peste poate și iubește la nemurire.”",
      attribution: "act II",
      tag: "citat",
      correct: "rica",
      explanation: "Declarația pompoasă este a lui Rică, în fața lui Veta, pe care o crede Zița.",
      source: "Lecția, 6.4 și 7.6; piesa, II, 2.",
    },
    {
      id: "dragoste",
      prompt: "„Dragoste cu sila nu se poate.”",
      attribution: "act I",
      tag: "citat",
      correct: "veta",
      explanation: "Veta o spune singură, după ce Chiriac s-a certat cu ea.",
      source: "Lecția, 6.3; piesa, I, 8.",
    },
    {
      id: "viitor",
      prompt: "„Nene Dumitrache, nu-mi asasina viitorul!”",
      attribution: "act II",
      tag: "citat",
      correct: "zita",
      explanation: "Zița îl oprește pe Dumitrache să-l lovească pe Rică.",
      source: "Lecția, 6.5; piesa, II, 9.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din piesă sau interpretare?",
  summary: "Pentru fiecare enunț, alege dacă este un fapt verificabil în text sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din piesă" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "doua-acte",
      prompt: "Piesa are două acte, fiecare cu câte nouă scene.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Numărul actelor și al scenelor se verifică în text: două acte, fiecare cu nouă scene.",
      source: "Lecția, 2 și 5.1.",
    },
    {
      id: "veta-chiriac",
      prompt: "Veta și Chiriac sunt îndrăgostiți.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Se vede în scenele lor, în care se împacă și se îmbrățișează.",
      source: "Lecția, 6.3; piesa, I, 9.",
    },
    {
      id: "ipingescu-servil",
      prompt: "Ipingescu este tipul funcționarului servil.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Faptul este că el repetă „Rezon!” și „Aprob pozitiv”; „servil” este o lectură a personajului.",
      source: "Lecția, 7.5.",
    },
    {
      id: "tablita",
      prompt: "Rică spune că vina este „a tăbliții de la poartă”.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Replica se citește în ultima scenă.",
      source: "Lecția, 6.5; piesa, II, 9.",
    },
    {
      id: "adevar-ascuns",
      prompt: "Piesa arată că adevărul este mereu înlocuit de o explicație convenabilă.",
      tag: "interpretare",
      correct: "interpretare",
      explanation: "Textul arată o explicație convenabilă într-un caz; generalizarea este o lectură.",
      source: "Lecția, 4.1.",
    },
  ],
};

// ── 7.1. Harta relațiilor ───────────────────────────────────────────────────────────────────

export type NoapteFurtunoasaPerson = "dumitrache" | "veta" | "chiriac" | "ipingescu" | "zita" | "rica";

export const noaptePeople: Record<NoapteFurtunoasaPerson, RelationPersonData> = {
  dumitrache: {
    name: "Dumitrache",
    role: "cherestigiu, căpitan în gardă",
    position: { x: 50, y: 45 },
    tone: "blue",
    details: [
      { tag: "fapt-piesa", text: "Gelos, vorbește despre „ambiț” și „onoarea de familist”; are încredere oarbă în Chiriac.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Tipul soțului gelos și înșelat.", source: "Lecția, 7.2." },
    ],
  },
  veta: {
    name: "Veta",
    role: "soția lui Dumitrache",
    position: { x: 80, y: 15 },
    tone: "rose",
    details: [
      { tag: "fapt-piesa", text: "Iubita lui Chiriac; îl ajută pe Rică să fugă și găsește explicația la final.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Duce singură jocul dublu, calmă în pericol.", source: "Lecția, 7.3." },
    ],
  },
  chiriac: {
    name: "Chiriac",
    role: "tejghetar, sergent",
    position: { x: 20, y: 15 },
    tone: "amber",
    details: [
      { tag: "fapt-piesa", text: "Omul de încredere al lui Dumitrache și iubitul Vetei; gelos și impulsiv.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Credinciosul ironic: îl înșală pe cel pe care îl servește.", source: "Lecția, 7.4." },
    ],
  },
  ipingescu: {
    name: "Ipingescu",
    role: "ipistat, prietenul lui Dumitrache",
    position: { x: 15, y: 62 },
    tone: "slate",
    details: [
      { tag: "fapt-piesa", text: "Repetă „Rezon!” și „Aprob pozitiv”; îl recunoaște pe Rică în final.", source: "Lecția, 7.5." },
      { tag: "interpretare", text: "Funcționarul servil, care aprobă tot.", source: "Lecția, 7.5." },
    ],
  },
  zita: {
    name: "Zița",
    role: "sora Vetei",
    position: { x: 85, y: 62 },
    tone: "violet",
    details: [
      { tag: "fapt-piesa", text: "Îi scrie lui Rică prin Spiridon și îl apără la final.", source: "Lecția, 7.7." },
      { tag: "interpretare", text: "Pune în mișcare încurcătura.", source: "Lecția, 7.7." },
    ],
  },
  rica: {
    name: "Rică Venturiano",
    role: "arhivar, student, publicist",
    position: { x: 50, y: 88 },
    tone: "emerald",
    details: [
      { tag: "fapt-piesa", text: "Scrie bilete pompoase și articole; intră în casa greșită.", source: "Lecția, 7.6." },
      { tag: "interpretare", text: "Tânărul cu aere de poet și om politic, care vorbește mai mult decât înțelege.", source: "Lecția, 7.6." },
    ],
  },
};

export const noapteEdges: RelationEdge<NoapteFurtunoasaPerson>[] = [
  { from: "dumitrache", to: "veta", label: "soți", shortLabel: "soți", step: 0 },
  { from: "dumitrache", to: "chiriac", label: "încredere oarbă", shortLabel: "încredere", step: 0 },
  { from: "dumitrache", to: "ipingescu", label: "prieteni", shortLabel: "prieteni", step: 0 },
  { from: "veta", to: "chiriac", label: "iubiți în ascuns", shortLabel: "iubiți", step: 0 },
  { from: "zita", to: "rica", label: "se scriu bilete de dragoste", shortLabel: "bilete", step: 1 },
  { from: "dumitrache", to: "rica", label: "îl urmărește ca pe un „bagabont”", shortLabel: "urmărire", step: 1 },
];

export const relatiiNoapteFigure: FigureContent = {
  title: "Harta relațiilor: casa lui Dumitrache",
  summary:
    "Dumitrache este în centru. Parcurge etapele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta nu include toate legăturile (de exemplu, Spiridon). Ele sunt prezentate în 7.7.",
  steps: [
    {
      id: "casa",
      title: "Actul I: casa",
      text: "Dumitrache are încredere în Chiriac și în Ipingescu. Veta și Chiriac se iubesc în ascuns.",
      tag: "fapt-piesa",
      source: "Lecția, 6.3 și 7.2–7.5.",
    },
    {
      id: "bagabontul",
      title: "Actul II: „bagabontul”",
      text: "Rică, iubit de Zița, este urmărit ca „bagabont”. La final, explicația „e amorezat de Zița” liniștește pe toți.",
      tag: "interpretare",
      source: "Lecția, 6.4–6.5.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansNoapte: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile unei comedii",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1879) și încadrarea (de exemplu, comedie de moravuri).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Specia și două trăsături, fiecare arătată în text.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.1. Specia și curentul", "3.2. Comicul"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "6.4. Secvența 4: Rică în casă (II, 2)", "6.5. Secvența 5: finalul (II, 9)"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, comicul, titlul, didascaliile: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură sau de limbaj · 6 p",
        see: ["3.2. Comicul", "4.2. Titlul", "5.4. Elemente ale textului dramatic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre piesă, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroNoapte: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul acoperit de fiecare bloc. Poți schimba ordinea reperelor.",
  note: "Planul este o recomandare a lecției, nu barem oficial. Subiectele 2026 din proiect nu conțin o cerință despre text dramatic; reperele sunt adaptate din cele despre texte narative și poetice. Verifică formularea reală a cerinței (vezi 1).",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsNoapte: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile unei comedii)",
    items: [
      "Am precizat încadrarea (specie) și am numit două trăsături, fiecare arătată în text.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă, fără să repovestesc.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, comicul, titlul), cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din piesă de interpretări.",
      "Citatele sunt verificate în textul piesei și sunt scurte.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
