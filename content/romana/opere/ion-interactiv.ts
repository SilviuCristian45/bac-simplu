import type { FigureTagKind } from "@/components/lesson/label-styles";
import type {
  ChecklistGroup,
  EssayPlan,
  FigureContent,
  QuizContent,
} from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive adăugate lecției „Ion” (pe lângă figurile din ion-figuri.ts).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), cerințele oficiale
 * păstrează documentul și pagina din lecție, iar citatele din roman sunt doar cele deja verificate
 * în lecție (secțiunile 4.4, 5.6, 6.2 și 6.4). Exemplele construite de noi sunt marcate ca atare.
 */

type Tagged = { text: string; tag: FigureTagKind; source: string };

// ── „Cum să folosești această lecție”: cele patru tipuri de informații ──────────────────────

export const tipuriInformatieQuiz: QuizContent = {
  title: "Ce tip de informație citești?",
  summary:
    "Lecția separă patru tipuri de informații. Încearcă să recunoști tipul fiecărui enunț de mai jos – toate sunt luate din lecție.",
  choices: [
    { id: "roman", label: "Despre roman" },
    { id: "interpretare", label: "Interpretare" },
    { id: "oficial", label: "Cerință oficială" },
    { id: "recomandare", label: "Recomandare" },
  ],
  items: [
    {
      id: "aparitie",
      prompt: "Romanul a apărut în 1920.",
      correct: "roman",
      explanation: "Este o informație despre text, pe care o poți verifica. În fișa rapidă apare între datele verificate pe textul romanului.",
      source: "Lecția, 2.",
    },
    {
      id: "eseu-400",
      prompt: "La Subiectul al III-lea se cere un eseu de minimum 400 de cuvinte, notat cu 30 de puncte.",
      correct: "oficial",
      explanation: "Așa scrie în subiectele și baremele oficiale din 2026; lecția indică documentul și pagina (Varianta 4, p. 2).",
      source: "Lecția, 1.",
    },
    {
      id: "alegerea-anei",
      prompt: "Ion nu o alege pe Ana din iubire, ci pentru că ea poate aduce pământul pe care el nu îl are.",
      correct: "interpretare",
      explanation:
        "Este o lectură a scenei horei, susținută de text, dar nu singura posibilă. Faptul este că Ion se apropie de Ana; motivul ține de interpretare.",
      source: "Lecția, 4.3.",
    },
    {
      id: "doua-elemente",
      prompt: "Pregătește bine două elemente de structură; ca rezervă, poți lucra și cu altele.",
      correct: "recomandare",
      explanation: "Este un sfat de învățare al lecției, nu o cerință a examenului.",
      source: "Lecția, 5.6.",
    },
    {
      id: "narator",
      prompt: "Naratorul relatează la persoana a III-a și nu participă la acțiune.",
      correct: "roman",
      explanation: "Este o observație despre cum e construit textul, verificabilă prin lectură. Numele perspectivei („obiectivă”) e deja un termen de analiză.",
      source: "Lecția, 5.4.",
    },
    {
      id: "circular",
      prompt: "Structura romanului poate fi numită circulară sau simetrică.",
      correct: "interpretare",
      explanation:
        "Faptul verificabil este că incipitul și finalul descriu același drum. Numele „circulară” sau „simetrică” este concluzia pe care o tragem din această observație.",
      source: "Lecția, 5.3.",
    },
  ],
};

// ── 1. Ce trebuie să știi despre examen: punctajul Subiectului al III-lea ───────────────────

export type ScorePart = { label: string; points: number };
export type ScoreBlock = {
  id: string;
  title: string;
  /** Formulation of the reper as quoted in the lesson. */
  quote?: string;
  points: number;
  parts: ScorePart[];
  note?: string;
  section: string;
};
export type ScoreTask = { id: string; label: string; source: string; repere: ScoreBlock[] };

const REDACTARE: ScoreBlock = {
  id: "redactare",
  title: "Redactarea",
  points: 12,
  parts: [
    { label: "părțile componente (introducere, cuprins, încheiere)", points: 1 },
    { label: "logica înlănțuirii ideilor", points: 1 },
    { label: "abilități de analiză și de argumentare", points: 3 },
    { label: "utilizarea limbii literare", points: 2 },
    { label: "ortografia", points: 2 },
    { label: "punctuația", points: 2 },
    { label: "așezarea în pagină, lizibilitatea", points: 1 },
  ],
  note: "Punctajul pentru redactare se acordă numai dacă eseul are minimum 400 de cuvinte și dezvoltă subiectul propus.",
  section: "7.1",
};

export const scoreTasks: ScoreTask[] = [
  {
    id: "particularitati",
    label: "Particularitățile unui text narativ",
    source: "Subiect și barem, Bacalaureat 2026, Varianta 4, p. 2.",
    repere: [
      {
        id: "incadrare",
        title: "Încadrarea",
        quote:
          "evidențierea a două trăsături care fac posibilă încadrarea textului narativ studiat într-o perioadă, într-un curent cultural/literar sau într-o orientare tematică",
        points: 6,
        parts: [
          { label: "precizarea perioadei, a curentului sau a orientării tematice", points: 2 },
          { label: "numirea primei trăsături", points: 1 },
          { label: "numirea celei de-a doua trăsături", points: 1 },
          { label: "evidențierea primei trăsături prin valorificarea textului", points: 1 },
          { label: "evidențierea celei de-a doua trăsături prin valorificarea textului", points: 1 },
        ],
        section: "3.1",
      },
      {
        id: "tema",
        title: "Tema și două secvențe",
        quote: "comentarea a două episoade/secvențe semnificative pentru tema textului narativ studiat",
        points: 6,
        parts: [
          { label: "precizarea temei", points: 2 },
          { label: "comentarea primului episod", points: 2 },
          { label: "comentarea celui de-al doilea episod", points: 2 },
        ],
        note: "Pentru simpla numire a episoadelor sau tendința de rezumare se acordă doar 1 punct pe episod.",
        section: "4.1",
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        points: 6,
        parts: [
          { label: "primul element: analiză cu justificarea relevanței", points: 3 },
          { label: "al doilea element: analiză cu justificarea relevanței", points: 3 },
        ],
        note: "Fără justificarea relevanței: 2 puncte pe element; abordare schematică: 1 punct.",
        section: "5.1",
      },
      REDACTARE,
    ],
  },
  {
    id: "personaj",
    label: "Construcția unui personaj",
    source: "Subiect și barem, Bacalaureat 2026, Model, p. 2 (cerința a vizat alt autor, nu romanul „Ion”).",
    repere: [
      {
        id: "statut",
        title: "Statutul personajului",
        quote: "prezentarea statutului social, psihologic, moral etc. al personajului ales",
        points: 6,
        parts: [{ label: "prezentare adecvată și nuanțată", points: 6 }],
        note: "Prezentare ezitantă: 3 puncte; încercare de prezentare: 1 punct.",
        section: "6.1",
      },
      {
        id: "trasatura",
        title: "O trăsătură prin două secvențe",
        quote: "evidențierea unei trăsături a personajului ales, prin două episoade/secvențe comentate",
        points: 6,
        parts: [
          { label: "menționarea trăsăturii", points: 2 },
          { label: "primul episod comentat", points: 2 },
          { label: "al doilea episod comentat", points: 2 },
        ],
        note: "Simpla numire sau tendința de rezumare: 1 + 1 puncte.",
        section: "6.1",
      },
      {
        id: "elemente-personaj",
        title: "Două elemente relevante pentru personaj",
        quote:
          "analiza a două elemente de structură, de compoziție și/sau de limbaj ale textului narativ, relevante pentru construcția personajului ales",
        points: 6,
        parts: [
          { label: "primul element", points: 3 },
          { label: "al doilea element", points: 3 },
        ],
        section: "6.1",
      },
      REDACTARE,
    ],
  },
];

// ── 2. Fișă rapidă: cele 13 capitole ────────────────────────────────────────────────────────

export type Chapter = {
  number: number;
  numeral: string;
  /** Only the titles named in the lesson. */
  title?: string;
  facts: Tagged[];
};

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"];

const zestre: Tagged = {
  text: "Capitolele VI–IX: Vasile Baciu promite ca zestre pământurile Anei, dar după nuntă amână să i le dea; abia după un lung conflict Ion ajunge stăpân pe ele.",
  tag: "fapt",
  source: "Lecția, 6.2.",
};
const bataie: Tagged = {
  text: "Capitolele VII–VIII: după nuntă, când Vasile Baciu amână să-i dea pământurile, Ion devine brutal cu Ana: o bate și o alungă la tatăl ei.",
  tag: "fapt",
  source: "Lecția, 6.2.",
};

const CHAPTER_FACTS: Record<number, { title?: string; facts: Tagged[] }> = {
  1: {
    title: "Începutul",
    facts: [
      { text: "Incipitul: descrierea drumului care intră în satul Pripas.", tag: "fapt", source: "Lecția, 5.3." },
      {
        text: "Satul se adună la horă. Ion o iubește pe Florica, dar se apropie de Ana; Vasile Baciu îl disprețuiește pentru că e sărac.",
        tag: "fapt",
        source: "Lecția, 4.3.",
      },
    ],
  },
  2: {
    facts: [
      {
        text: "În copilărie, Ion a fost „cel mai iubit elev al învățătorului Herdelea”, dar a renunțat la școală.",
        tag: "fapt",
        source: "Lecția, 6.2.",
      },
      {
        text: "Exemplele de caracterizare directă din lecție – ale naratorului, ale doamnei Herdelea și ale preotului Belciug – provin din acest capitol.",
        tag: "fapt",
        source: "Lecția, 6.4.",
      },
    ],
  },
  3: {
    facts: [
      {
        text: "Ion simte că „toată istețimea lui nu plătește o ceapă degerată, dacă n-are și el pământ”.",
        tag: "fapt",
        source: "Lecția, 6.2.",
      },
      {
        text: "Stil indirect liber: „Vasăzică va trebui să fie veșnic slugă pe la alții, să muncească spre a îmbogăți pe alții?”",
        tag: "fapt",
        source: "Lecția, 5.6.",
      },
    ],
  },
  6: { facts: [zestre] },
  7: {
    facts: [
      zestre,
      bataie,
      {
        text: "Capitolul VII amintește „bătăile suferite de la tatăl său” – Ana fusese bătută și de Vasile Baciu.",
        tag: "fapt",
        source: "Lecția, 6.2.",
      },
    ],
  },
  8: { facts: [zestre, bataie] },
  9: {
    title: "Sărutarea",
    facts: [
      zestre,
      {
        text: "Ion merge pe câmp, îngenunchează și sărută pământul: „se lăsă în genunchi, își coborî fruntea și-și lipi buzele cu voluptate de pământul ud”.",
        tag: "fapt",
        source: "Lecția, 4.4.",
      },
    ],
  },
  10: { facts: [{ text: "Sinuciderea Anei.", tag: "fapt", source: "Lecția, 6.2." }] },
  13: {
    title: "Sfârșitul",
    facts: [
      {
        text: "Finalul: același drum, parcurs în sens invers de trăsura familiei Herdelea, care părăsește satul după sfințirea bisericii noi.",
        tag: "fapt",
        source: "Lecția, 5.3.",
      },
    ],
  },
};

export const chapters: Chapter[] = NUMERALS.map((numeral, index) => ({
  number: index + 1,
  numeral,
  title: CHAPTER_FACTS[index + 1]?.title,
  facts: CHAPTER_FACTS[index + 1]?.facts ?? [],
}));

export const bookParts = [
  { id: "pamant", title: "Glasul pământului", range: [1, 6] as const },
  { id: "iubire", title: "Glasul iubirii", range: [7, 13] as const },
];

export const structuraIntro = {
  title: "Structura romanului: două părți, 13 capitole",
  summary:
    "Romanul are două părți – „Glasul pământului” (capitolele I–VI) și „Glasul iubirii” (capitolele VII–XIII). Alege un capitol ca să vezi ce spune lecția despre el.",
  note: "Sunt marcate doar capitolele discutate în lecție. Lecția numește titlurile capitolelor I, IX și XIII; pentru celelalte titluri și pentru capitolele nediscutate, consultă romanul. Moartea lui Ion nu este plasată aici, pentru că lecția nu precizează capitolul.",
  source: "Lecția, 2 (structura) și secțiunile indicate la fiecare capitol.",
};

// ── 3.3. Încadrarea în realism ──────────────────────────────────────────────────────────────

export const trasaturiRealismQuiz: QuizContent = {
  title: "Leagă trăsătura de elementul din roman",
  summary:
    "Pentru 6 puncte la încadrare nu ajunge să numești trăsăturile: trebuie să le arăți în text. Alege, pentru fiecare trăsătură a realismului, elementul din „Ion” care o ilustrează.",
  note: "Trăsăturile și exemplele sunt cele din secțiunea 3.3, unde sunt prezentate ca interpretare: o încadrare posibilă, nu singura acceptată.",
  choices: [
    {
      id: "narator",
      label: "Naratorul comentează rar faptele lui Ion; judecățile morale le formulează mai ales alte personaje.",
    },
    {
      id: "sat",
      label: "Satul Pripas are o ierarhie socială clară, iar viața lui apare prin momente concrete: hora, nunta, conflictele pentru pământ.",
    },
    {
      id: "ion",
      label: "Ion reprezintă țăranul care vrea pământ, dar calculul, orgoliul și conflictul interior îl fac individual.",
    },
  ],
  items: [
    {
      id: "obiectivitate",
      prompt: "Obiectivitatea naratorului",
      tag: "interpretare",
      correct: "narator",
      explanation:
        "Naratorul relatează la persoana a III-a, din afara acțiunii, fără să-și spună direct părerea; de aceea cititorul își formează singur judecata despre Ion.",
      source: "Lecția, 3.3 (punctul 1).",
    },
    {
      id: "verosimilitate",
      prompt: "Verosimilitatea (impresia de viață reală)",
      tag: "interpretare",
      correct: "sat",
      explanation: "Spațiul, timpul și relațiile sociale sunt credibile: lumea satului seamănă cu lumea reală.",
      source: "Lecția, 3.3 (punctul 2).",
    },
    {
      id: "tipic",
      prompt: "Personajul tipic, dar individualizat",
      tag: "interpretare",
      correct: "ion",
      explanation:
        "Personajul reprezintă o categorie socială (țăranul care vrea pământ), dar felul în care își urmărește scopul îi dă o personalitate proprie.",
      source: "Lecția, 3.3 (punctul 3).",
    },
  ],
};

// ── 4.5. Rezumat sau comentariu ─────────────────────────────────────────────────────────────

export type SummarySentence = { text: string; narrates: boolean; highlight?: { phrase: string; feature: number } };

/** Varianta A și varianta B, copiate din lecție (4.5), împărțite în propoziții. */
export const variantaA: SummarySentence[] = [
  { text: "Duminică, tinerii din Pripas se adună la horă.", narrates: true },
  { text: "Ion joacă cu Ana, deși o place pe Florica.", narrates: true },
  { text: "Vasile Baciu se supără și îl jignește pe Ion.", narrates: true },
  { text: "Hora se strică.", narrates: true },
];

export const variantaB: SummarySentence[] = [
  {
    text: "Hora din primul capitol nu e doar un tablou al satului în sărbătoare, ci prima confruntare dintre Ion și lumea care îl judecă după avere.",
    narrates: false,
    highlight: { phrase: "prima confruntare", feature: 1 },
  },
  {
    text: "Alegând-o pe Ana în locul Floricăi, Ion arată că dorința de pământ trece înaintea iubirii, iar jignirile lui Vasile Baciu confirmă că, în Pripas, sărăcia înseamnă lipsă de demnitate.",
    narrates: false,
    highlight: { phrase: "Ion arată că dorința de pământ trece înaintea iubirii", feature: 2 },
  },
  {
    text: "Secvența anunță astfel tema romanului: lupta pentru pământ ca luptă pentru un loc în comunitate.",
    narrates: false,
    highlight: { phrase: "Secvența anunță astfel tema romanului", feature: 3 },
  },
];

export const differenceFeatures = [
  "numește rolul secvenței",
  "explică gesturile personajului, nu doar le enumeră",
  "leagă explicit secvența de temă",
];

export const rezumatFigure: FigureContent = {
  title: "Testul ștergerii: rezumat sau comentariu?",
  summary:
    "Aceeași secvență – hora – scrisă în două feluri. Dacă ștergi propozițiile care doar povestesc, din rezumat nu mai rămâne nimic, iar comentariul rămâne întreg.",
  note: "Variantele A și B sunt exemplele didactice ale lecției (4.5), nu text din roman. Împărțirea în „povestește” și „interpretează” aplică testul propus de lecție.",
  steps: [
    {
      id: "variante",
      title: "Două variante ale aceleiași secvențe",
      text: "Ambele variante vorbesc despre hora din primul capitol. Citește-le înainte să aplici testul.",
      tag: "exemplu-didactic",
      source: "Lecția, 4.5.",
    },
    {
      id: "marcare",
      title: "Care propoziții doar povestesc?",
      text: "Rezumatul răspunde la „Ce se întâmplă?”. Comentariul răspunde la „Ce înseamnă?” și „De ce contează pentru temă?”. Fiecare propoziție e marcată după întrebarea la care răspunde.",
      tag: "concept",
      source: "Lecția, 4.5.",
    },
    {
      id: "stergere",
      title: "Șterge propozițiile care doar povestesc",
      text: "Din varianta A nu mai rămâne nimic: e un rezumat. Varianta B rămâne întreagă: pornește de la fapte, dar le interpretează.",
      tag: "recomandare",
      source: "Lecția, 4.5 (testul din recomandare).",
    },
    {
      id: "diferenta",
      title: "Ce face diferența în varianta B",
      text: "Varianta B numește rolul secvenței, explică gesturile personajului și leagă explicit secvența de temă.",
      tag: "concept",
      source: "Lecția, 4.5.",
    },
  ],
};

// ── 5.2. Nivelurile de justificare ──────────────────────────────────────────────────────────

const perspectivaAnaliza =
  "Naratorul relatează la persoana a III-a, nu participă la acțiune și cunoaște gândurile și trăirile mai multor personaje. Este o perspectivă obiectivă, cu narator omniscient.";

export const niveluriJustificareQuiz: QuizContent = {
  title: "Ce nivel din barem atinge fiecare răspuns?",
  summary:
    "Trei răspunsuri despre același element – perspectiva narativă. Diferența dintre 2 și 3 puncte este justificarea relevanței. Alege nivelul potrivit pentru fiecare.",
  note: "Răspunsurile sunt exemple didactice construite din secțiunea 5.4, nu fragmente de eseu reale. Nivelurile sunt descriptorii din barem (Varianta 4, p. 2); încadrarea unui răspuns real o face profesorul sau evaluatorul.",
  choices: [
    { id: "1", label: "1 punct – abordare schematică, fără justificarea relevanței" },
    { id: "2", label: "2 puncte – analiză fără justificarea relevanței" },
    { id: "3", label: "3 puncte – analiză cu justificarea relevanței" },
  ],
  items: [
    {
      id: "complet",
      prompt: `${perspectivaAnaliza} Elementul e relevant pentru că lasă cititorul să judece singur faptele lui Ion: naratorul nu-l condamnă explicit, iar din fapte se vede cum dorința de pământ îl transformă pe personaj.`,
      tag: "exemplu-didactic",
      correct: "3",
      explanation:
        "Răspunsul arată cum e construit elementul și spune de ce contează pentru sensul romanului – pasul 3 din 5.2 („Elementul este relevant deoarece…”).",
      source: "Lecția, 5.1, 5.2 și 5.4.",
    },
    {
      id: "schematic",
      prompt: "Romanul are o perspectivă narativă obiectivă.",
      tag: "exemplu-didactic",
      correct: "1",
      explanation: "Răspunsul doar numește elementul. Nu arată cum apare în text și nu spune de ce contează.",
      source: "Lecția, 5.1 și 5.2.",
    },
    {
      id: "fara-relevanta",
      prompt: perspectivaAnaliza,
      tag: "exemplu-didactic",
      correct: "2",
      explanation:
        "Elementul e numit și arătat în text (pașii 1 și 2 din 5.2), dar lipsește pasul 3: de ce contează perspectiva pentru roman.",
      source: "Lecția, 5.1 și 5.2.",
    },
  ],
};

// ── 5.3. Incipitul și finalul ───────────────────────────────────────────────────────────────

export const drumFigure: FigureContent = {
  title: "Drumul care deschide și închide romanul",
  summary:
    "Romanul începe cu drumul care intră în Pripas și se încheie cu același drum, parcurs invers de trăsura familiei Herdelea. De aceea structura poate fi numită circulară sau simetrică.",
  note: "Ilustrație schematică: reperele sunt cele numite în lecție, în ordinea din incipit, dar distanțele dintre ele și forma drumului nu redau geografia din roman.",
  steps: [
    {
      id: "incipit",
      title: "Incipitul: drumul intră în sat",
      text: "Romanul începe cu descrierea drumului care intră în satul Pripas.",
      tag: "fapt",
      source: "Lecția, 5.3; romanul, cap. I, „Începutul”.",
    },
    {
      id: "repere",
      title: "Reperele drumului",
      text: "În descriere apar podul de lemn de peste Someș, satul Jidovița și crucea de la marginea satului. Spre Pripas, drumul trece podul, apoi Jidovița; crucea îl întâmpină pe cititor la marginea satului.",
      tag: "fapt",
      source: "Lecția, 5.3 (reperele); romanul, cap. I (ordinea lor).",
    },
    {
      id: "final",
      title: "Finalul: același drum, în sens invers",
      text: "După sfințirea bisericii noi, trăsura familiei Herdelea părăsește satul pe același drum. Apar aceleași repere.",
      tag: "fapt",
      source: "Lecția, 5.3; romanul, cap. XIII, „Sfârșitul”.",
    },
    {
      id: "simetrie",
      title: "Incipitul și finalul se oglindesc",
      text: "Cititorul intră în lumea satului pe drum și o părăsește tot pe drum. De aceea, structura romanului poate fi numită circulară sau simetrică.",
      tag: "interpretare",
      source: "Lecția, 5.3.",
    },
    {
      id: "relevanta",
      title: "De ce contează (exemplu de justificare)",
      text: "Simetria arată că destinele individuale, oricât de dramatice, nu schimbă ritmul vieții satului: Ion moare, dar satul își continuă existența.",
      tag: "interpretare",
      source: "Lecția, 5.3 (justificarea relevanței).",
    },
  ],
};

// ── 6.4. Modalitățile de caracterizare ──────────────────────────────────────────────────────

export const caracterizareQuiz: QuizContent = {
  title: "Cum este caracterizat Ion?",
  summary:
    "Ion este caracterizat direct, de narator și de alte personaje, și indirect, prin fapte, gesturi, limbaj și relații. Recunoaște modalitatea din fiecare exemplu.",
  note: "Citatele sunt cele din lecție, din capitolul II. Exemplele de caracterizare indirectă rezumă fapte prezentate în lecție (6.2 și 4.4); nu sunt citate.",
  choices: [
    { id: "narator", label: "Caracterizare directă, făcută de narator" },
    { id: "personaj", label: "Caracterizare directă, făcută de alt personaj" },
    { id: "indirecta", label: "Caracterizare indirectă, prin fapte și gesturi" },
  ],
  items: [
    {
      id: "iute",
      prompt: "„Era iute și harnic, ca mă-sa.”",
      attribution: "naratorul, cap. II",
      tag: "citat",
      correct: "narator",
      explanation: "Naratorul numește direct trăsăturile lui Ion.",
      source: "Lecția, 6.4.",
    },
    {
      id: "pamant",
      prompt: "Ion îngenunchează pe câmp și sărută pământul.",
      attribution: "rezumatul faptei, cap. IX",
      tag: "fapt",
      correct: "indirecta",
      explanation:
        "Nimeni nu spune ce fel de om este Ion; cititorul deduce din gest cât de puternică a devenit pasiunea lui pentru pământ.",
      source: "Lecția, 4.4 și 6.4.",
    },
    {
      id: "cumsecade",
      prompt: "„Ion e băiat cumsecade. E muncitor, e harnic, e săritor, e isteț.”",
      attribution: "doamna Herdelea, cap. II",
      tag: "citat",
      correct: "personaj",
      explanation: "Un alt personaj își spune direct părerea despre Ion – aici, una favorabilă.",
      source: "Lecția, 6.4.",
    },
    {
      id: "ana",
      prompt: "Când Vasile Baciu amână să-i dea pământurile, Ion o bate pe Ana și o alungă la tatăl ei.",
      attribution: "rezumatul faptelor, cap. VII–VIII",
      tag: "fapt",
      correct: "indirecta",
      explanation: "Felul în care o tratează pe Ana îl caracterizează prin fapte. Lecția observă că acest tip de caracterizare predomină.",
      source: "Lecția, 6.2 și 6.4.",
    },
    {
      id: "stricat",
      prompt: "„ești un stricat și-un bătăuș ș-un om de nimic”",
      attribution: "preotul Belciug, care îl mustră, cap. II",
      tag: "citat",
      correct: "personaj",
      explanation:
        "Tot o caracterizare directă făcută de un personaj, dar opusă celei a doamnei Herdelea. Părerile opuse arată personajul din mai multe perspective.",
      source: "Lecția, 6.4.",
    },
  ],
};

// ── 7.2–7.3. Planurile de eseu ──────────────────────────────────────────────────────────────


export const essayPlans: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile romanului",
    section: "7.2",
    blocks: [
      {
        id: "intro",
        title: "Introducere",
        text: "Autorul, titlul, anul apariției și încadrarea pe care o vei susține (de exemplu: roman realist).",
        see: [],
      },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Numește curentul (sau perioada, sau orientarea), apoi două trăsături. Pentru fiecare trăsătură, dă un exemplu din roman.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.3. Exemplu: încadrarea în realism"],
      },
      {
        id: "tema",
        title: "Tema",
        text: "Formulează tema și comentează două secvențe, fiecare legată explicit de temă.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.2. Tema", "4.3. Secvența 1: hora de duminică", "4.4. Secvența 2: sărutarea pământului"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "Pentru fiecare: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["5.2. Cum justifici relevanța unui element", "5.3. Incipitul și finalul", "5.4. Perspectiva narativă", "5.5. Conflictul"],
      },
      {
        id: "incheiere",
        title: "Încheiere",
        text: "O judecată de valoare argumentată – de exemplu, de ce romanul rămâne relevant – fără informații noi neargumentate.",
        see: [],
      },
    ],
  },
  {
    id: "personaj",
    label: "Construcția personajului Ion",
    section: "7.3",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, personajul ales și locul lui în roman.", see: [] },
      {
        id: "statut",
        title: "Statutul",
        text: "Social, psihologic, moral, fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["6.2. Statutul personajului"],
      },
      {
        id: "trasatura",
        title: "Trăsătura",
        text: "Numește trăsătura și comenteaz-o prin două secvențe.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["6.3. O trăsătură ilustrată prin două secvențe"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "Fiecare cu justificarea relevanței pentru construcția personajului.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["6.4. Elemente de structură relevante pentru personaj"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată.", see: [] },
    ],
  },
];

export const planIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul din barem acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției (7.2 și 7.3), „Un plan posibil, nu singurul corect”. Faptul că ordinea reperelor este la alegere apare în barem (Subiect și barem, Bacalaureat 2026, Varianta 4, p. 2), citat în 7.1. Introducerea și încheierea țin de redactare (existența părților componente).",
};

// ── 8. Autoevaluare ─────────────────────────────────────────────────────────────────────────

/** Listele din secțiunea 8 a lecției, neschimbate. */
export const checklistGroups: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile romanului)",
    items: [
      "Am numit clar perioada, curentul sau orientarea tematică.",
      "Am numit două trăsături și le-am arătat pe fiecare în roman.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă, fără să le repovestesc.",
      "Am analizat două elemente de structură, compoziție sau limbaj.",
      "Pentru fiecare element, am explicat de ce este relevant pentru roman.",
    ],
  },
  {
    id: "personaj",
    title: "Conținut (cerința despre personaj)",
    items: [
      "Am prezentat statutul social, psihologic și moral al lui Ion, cu nuanțe.",
      "Am numit o trăsătură și am ilustrat-o prin două secvențe comentate.",
      "Am analizat două elemente de structură și am arătat cum construiesc personajul.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Afirmațiile sunt susținute de argumente din text.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
