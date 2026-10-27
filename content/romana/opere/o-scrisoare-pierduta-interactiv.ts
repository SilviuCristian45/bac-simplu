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
 * Textele experiențelor interactive din lecția „O scrisoare pierdută”
 * (content/romana/opere/o-scrisoare-pierduta.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), acțiunea și citatele au fost
 * verificate pe transcrierea Wikisource a piesei (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md).
 * Faptele sunt marcate „fapt-piesa”, interpretările „interpretare”. Lecția este draft-neverificat.
 */

// ── 2. Fișă rapidă: cele patru acte ─────────────────────────────────────────────────────────

export const structuraActelorContent: DetailExplorerContent = {
  title: "Cele patru acte, pe scurt",
  summary:
    "Piesa are patru acte. Alege un act ca să vezi ce se întâmplă în el și ce rol are în desfășurarea conflictului.",
  note: "Rezumatele sunt verificate pe textul piesei. Rolul fiecărui act în subiect este o interpretare.",
  prompt: "Alege un act",
};

export const structuraActelorItems: DetailItem[] = [
  {
    id: "actul-1",
    label: "Actul I",
    fields: [
      { label: "Decor", text: "O anticameră bine mobilată (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "Trahanache îi povestește lui Tipătescu că Cațavencu i-a arătat o scrisoare de dragoste atribuită prefectului, pe care Trahanache o crede o plastografie. Zoe recunoaște că a pierdut-o. Farfuridi și Brânzovenescu bănuiesc o trădare. Cetățeanul turmentat spune că a găsit scrisoarea și că Cațavencu i-a luat-o. La final, Trahanache anunță că l-a prins pe Cațavencu cu „alta mai boacănă”: o plastografie.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Expoziția și intriga: se află ce s-a pierdut, cine o deține și ce vrea.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1; piesa, actul I.",
  },
  {
    id: "actul-2",
    label: "Actul II",
    fields: [
      { label: "Decor", text: "Același salon (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "Farfuridi și Brânzovenescu hotărăsc să trimită o depeșă anonimă. Pristanda îl arestează pe Cațavencu, iar Zoe îl cheamă. Cațavencu cere mandatul de deputat în schimbul scrisorii. Tipătescu cedează la insistențele lui Zoe, dar o depeșă anunță că trebuie ales Agamemnon Dandanache.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Desfășurarea acțiunii: conflictul se complică prin negociere și prin intervenția capitalei.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1; piesa, actul II.",
  },
  {
    id: "actul-3",
    label: "Actul III",
    fields: [
      { label: "Decor", text: "„Sala cea mare a pretoriului primăriei” (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "La întrunire, Farfuridi ține un discurs despre revizuire, iar Cațavencu un discurs despre progres. Trahanache proclamă candidatura lui Dandanache. Cațavencu strigă „Trădare!”, încearcă să dezvăluie scrisoarea și este scos cu forța din sală.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Punctul culminant: ciocnirea publică dintre cele două tabere.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.2–6.3; piesa, actul III.",
  },
  {
    id: "actul-4",
    label: "Actul IV",
    fields: [
      { label: "Decor", text: "Grădina lui Trahanache (didascalie).", tag: "fapt-piesa" },
      {
        label: "Ce se întâmplă",
        text: "Sosește Dandanache și povestește cum a obținut mandatul. Cațavencu îi spune lui Zoe că a pierdut scrisoarea în căptușeala pălăriei, iar cetățeanul turmentat o aduce lui Zoe. Zoe îl iartă pe Cațavencu cu o condiție. Piesa se încheie cu o petrecere și cu toasturi.",
        tag: "fapt-piesa",
      },
      { label: "Rol în subiect", text: "Deznodământul: toți se împacă, iar situația morală rămâne neschimbată.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1 și 6.4; piesa, actul IV.",
  },
];

// ── 3.4. Tipuri de comic ────────────────────────────────────────────────────────────────────

export const tipuriDeComicQuiz: QuizContent = {
  title: "Ce fel de comic este?",
  summary:
    "Alege tipul de comic pe care îl ilustrează cel mai clar fiecare exemplu din piesă.",
  note: "Un exemplu poate ilustra mai multe tipuri de comic. Lecția alege tipul pe care îl subliniază (3.4); clasificarea este un instrument de analiză, nu o regulă a autorului.",
  choices: [
    { id: "limbaj", label: "Comic de limbaj" },
    { id: "situatie", label: "Comic de situație" },
    { id: "caracter", label: "Comic de caracter" },
    { id: "nume", label: "Comic de nume" },
  ],
  items: [
    {
      id: "revizuire",
      prompt: "Farfuridi: „ori să se revizuiască, primesc! dar să nu se schimbe nimica; ori să nu se revizuiască, primesc! dar atunci să se schimbe pe ici pe colo, și anume în punctele... esențiale”.",
      attribution: "Farfuridi, III, 1",
      tag: "citat",
      correct: "limbaj",
      explanation:
        "Fraza are forma unei dileme, dar spune două lucruri contradictorii. Comicul vine din limbajul care pare profund și nu spune nimic precis.",
      source: "Lecția, 3.4 și 6.2; piesa, III, 1.",
    },
    {
      id: "cetatean",
      prompt: "Cetățeanul turmentat vine de mai multe ori să întrebe „Eu pentru cine votez?”, iar la final aduce scrisoarea găsită în căptușeala unei pălării.",
      attribution: "cetățeanul turmentat, actele I–IV",
      tag: "fapt-piesa",
      correct: "situatie",
      explanation:
        "Comicul vine din întâmplări și repetiții: un alegător beat, uitat de toți, ajunge să decidă soarta scrisorii. Este comic de situație.",
      source: "Lecția, 3.4 și 6.4; piesa, actele I și IV.",
    },
    {
      id: "plans",
      prompt: "Cațavencu urcă la tribună și plânge („plânsul îl îneacă”), apoi își revine „d-odată” și începe să strige.",
      attribution: "Cațavencu, III, 5 (didascalii)",
      tag: "fapt-piesa",
      correct: "caracter",
      explanation:
        "Emoția jucată arată o trăsătură de caracter, ipocrizia demagogului, nu un accident. Este comic de caracter.",
      source: "Lecția, 3.4 și 7.5; piesa, III, 5.",
    },
    {
      id: "agamemnon",
      prompt: "Un „vechi luptător de la 48” se numește Agamemnon Dandanache.",
      attribution: "lista personajelor",
      tag: "fapt-piesa",
      correct: "nume",
      explanation:
        "Numele de erou mitologic contrastează cu personajul. Comicul vine din nume, nu din ce spune sau face.",
      source: "Lecția, 3.4 și 7.8; piesa, lista personajelor.",
    },
    {
      id: "puticica",
      prompt: "Trahanache repetă în aproape fiecare replică „Ai puțintică răbdare”.",
      attribution: "Trahanache, actele I–III",
      tag: "citat",
      correct: "limbaj",
      explanation:
        "Formula repetată, un tic verbal, este un procedeu de limbaj. Ea individualizează personajul și provoacă râsul prin repetiție.",
      source: "Lecția, 7.4 și 7.9; piesa, I, 3–4.",
    },
  ],
};

// ── 8. Fapt și interpretare ─────────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din piesă sau interpretare?",
  summary:
    "Pentru fiecare enunț, alege dacă este un fapt care se poate verifica în text sau o interpretare.",
  note: "Aceeași distincție contează în eseu: faptele se arată în text, interpretările se argumentează.",
  choices: [
    { id: "fapt", label: "Fapt din piesă" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "patru-acte",
      prompt: "Piesa are patru acte.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Numărul actelor se verifică în text.",
      source: "Lecția, 2; piesa.",
    },
    {
      id: "zoe-pierde",
      prompt: "Zoe spune că scrisoarea a fost pierdută, probabil căzută din buzunar odată cu batista.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Replica lui Zoe din actul I, scena V, se citește în text.",
      source: "Lecția, 4.2; piesa, I, 5.",
    },
    {
      id: "trahanache-stie",
      prompt: "Trahanache știe de relația dintre Zoe și Tipătescu și o tolerează.",
      tag: "interpretare",
      correct: "interpretare",
      explanation:
        "Piesa nu spune acest lucru. Trahanache pare să nu creadă în scrisoare („Firește că nu se poate”, I, 4), dar replicile lui se pot citi și ca naivitate, și ca prefăcătorie. Este o interpretare.",
      source: "Lecția, 7.4; piesa, I, 4.",
    },
    {
      id: "dandanache-santaj",
      prompt: "Dandanache povestește că a obținut mandatul amenințând că publică o scrisoare în ziarul „Răsboiul”.",
      tag: "fapt-piesa",
      correct: "fapt",
      explanation: "Povestirea lui Dandanache se află în actul IV, scena III.",
      source: "Lecția, 7.8; piesa, IV, 3.",
    },
    {
      id: "final-circular",
      prompt: "Finalul arată că sistemul politic rămâne neschimbat.",
      tag: "interpretare",
      correct: "interpretare",
      explanation:
        "Faptele sunt că toți se împacă și ciocnesc pahare. Că aceasta înseamnă o lume care nu se schimbă este o lectură a lecției, care trebuie argumentată.",
      source: "Lecția, 4.1 și 6.4; piesa, IV, 14.",
    },
    {
      id: "titlu-principii",
      prompt: "Titlul sugerează și pierderea principiilor morale.",
      tag: "interpretare",
      correct: "interpretare",
      explanation:
        "Titlul numește o scrisoare pierdută. Sensul figurat este o interpretare posibilă, nu ceva afirmat în text.",
      source: "Lecția, 4.2.",
    },
  ],
};

// ── 7.1. Harta relațiilor ───────────────────────────────────────────────────────────────────

export type ScrisoarePerson = "tipatescu" | "zoe" | "trahanache" | "catavencu" | "pristanda";

export const scrisoarePeople: Record<ScrisoarePerson, RelationPersonData> = {
  tipatescu: {
    name: "Tipătescu",
    role: "prefectul județului",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt-piesa", text: "Autorul scrisorii către Zoe. Vrea la început să-l „împuște” pe Cațavencu, apoi cedează.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Impulsiv și vanitos; funcția lui depinde de relațiile cu Zoe și Trahanache.", source: "Lecția, 7.2." },
    ],
  },
  zoe: {
    name: "Zoe",
    role: "soția lui Trahanache",
    position: { x: 74, y: 18 },
    tone: "rose",
    details: [
      { tag: "fapt-piesa", text: "A pierdut scrisoarea. Îl convinge pe Tipătescu să-l sprijine pe Cațavencu și își recapătă scrisoarea la final.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Mai hotărâtă decât Tipătescu; folosește emoția ca pe o armă.", source: "Lecția, 7.3." },
    ],
  },
  trahanache: {
    name: "Trahanache",
    role: "președintele comitetelor",
    position: { x: 26, y: 18 },
    tone: "amber",
    details: [
      { tag: "fapt-piesa", text: "Îi dă lui Tipătescu vestea scrisorii și găsește polița falsificată de Cațavencu.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Piesa nu spune ce știe despre relația soției; rămâne ambiguu.", source: "Lecția, 7.4." },
    ],
  },
  catavencu: {
    name: "Cațavencu",
    role: "avocat, director de ziar",
    position: { x: 26, y: 82 },
    tone: "emerald",
    details: [
      { tag: "fapt-piesa", text: "Deține scrisoarea și cere mandatul de deputat; o pierde în căptușeala pălăriei.", source: "Lecția, 7.5." },
      { tag: "interpretare", text: "Demagog și șantajist, învins de o întâmplare.", source: "Lecția, 7.5." },
    ],
  },
  pristanda: {
    name: "Pristanda",
    role: "polițaiul orașului",
    position: { x: 74, y: 82 },
    tone: "slate",
    details: [
      { tag: "fapt-piesa", text: "Execută ordinele lui Tipătescu și, la nevoie, pe ale lui Zoe.", source: "Lecția, 7.7." },
      { tag: "interpretare", text: "Funcționarul servil, care servește pe oricine are putere.", source: "Lecția, 7.7." },
    ],
  },
};

export const scrisoareEdges: RelationEdge<ScrisoarePerson>[] = [
  { from: "tipatescu", to: "zoe", label: "iubire ascunsă", shortLabel: "iubire", step: 0 },
  { from: "zoe", to: "trahanache", label: "soți", shortLabel: "soți", step: 0 },
  { from: "tipatescu", to: "trahanache", label: "prieteni; Trahanache îi spune „Fănică”", shortLabel: "prieteni", step: 0 },
  { from: "tipatescu", to: "pristanda", label: "ordine date polițaiului", shortLabel: "ordine", step: 0 },
  { from: "zoe", to: "catavencu", label: "șantaj și negociere", shortLabel: "șantaj", step: 1 },
  { from: "tipatescu", to: "catavencu", label: "dușmani; apoi aliați forțați", shortLabel: "adversari", step: 1 },
];

export const relatiiScrisoareFigure: FigureContent = {
  title: "Harta relațiilor: puterea locală și adversarul ei",
  summary:
    "Tipătescu este în centru. Parcurge actele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta nu include toate personajele (de exemplu Farfuridi, Brânzovenescu, Dandanache, cetățeanul turmentat). Ele sunt prezentate în 7.6 și 7.8.",
  steps: [
    {
      id: "grupul",
      title: "Actul I: grupul puterii",
      text: "Tipătescu, Zoe și Trahanache formează grupul puterii locale. Pristanda execută ordinele prefectului.",
      tag: "fapt-piesa",
      source: "Lecția, 7.2–7.7.",
    },
    {
      id: "santaj",
      title: "Actele II–IV: șantajul",
      text: "Cațavencu intră în joc prin scrisoare. Zoe negociază cu el, iar Tipătescu cedează. La final, relațiile revin la starea inițială.",
      tag: "interpretare",
      source: "Lecția, 5.3 și 6.4.",
    },
  ],
};

// ── 7.8. Cine spune? ────────────────────────────────────────────────────────────────────────

export const caracterizareQuiz: QuizContent = {
  title: "Cine spune replica?",
  summary:
    "Alege personajul căruia îi aparține fiecare replică. Replicile sunt scurte și au fost verificate în text.",
  note: "Replicile sunt prezentate fără context. Asta urmărești: cum își recunoști personajul după felul de a vorbi.",
  choices: [
    { id: "tipatescu", label: "Tipătescu" },
    { id: "zoe", label: "Zoe" },
    { id: "trahanache", label: "Trahanache" },
    { id: "catavencu", label: "Cațavencu" },
    { id: "pristanda", label: "Pristanda" },
    { id: "dandanache", label: "Dandanache" },
  ],
  items: [
    {
      id: "ai-puticica",
      prompt: "„Ai puțintică răbdare... Nu trebuie să știe Joițica.”",
      attribution: "act I",
      tag: "citat",
      correct: "trahanache",
      explanation:
        "„Ai puțintică răbdare” este tic verbal al lui Trahanache. Joițica este numele cu care îi spune soției lui.",
      source: "Lecția, 7.4; piesa, I, 3.",
    },
    {
      id: "famelie",
      prompt: "„Famelie mare, renumerație mică, după buget”",
      attribution: "act I",
      tag: "citat",
      correct: "pristanda",
      explanation:
        "Pristanda se plânge de leafa mică cu o formulă repetată; ea scoate la iveală și mica lui corupție.",
      source: "Lecția, 7.7; piesa, I, 1.",
    },
    {
      id: "mandat",
      prompt: "„Vreau... mandatul de deputat, iată ce vreau: nimic altceva! nimic! nimic!”",
      attribution: "act II",
      tag: "citat",
      correct: "catavencu",
      explanation:
        "Cațavencu își spune scopul și îl prezintă ca pe o recompensă firească. De la el pornește șantajul scrisorii.",
      source: "Lecția, 7.5; piesa, II, 9.",
    },
    {
      id: "impusc",
      prompt: "„Îl împușc! îi dau foc!”",
      attribution: "act I",
      tag: "citat",
      correct: "tipatescu",
      explanation: "Tipătescu reacționează impulsiv când află de scrisoare.",
      source: "Lecția, 6.1 și 7.2; piesa, I, 4.",
    },
    {
      id: "alegem",
      prompt: "„Trebuie să alegem pe Cațavencu.”",
      attribution: "act II",
      tag: "citat",
      correct: "zoe",
      explanation:
        "Zoe este cea care ia hotărârea de a ceda șantajului; Tipătescu o urmează cu greu.",
      source: "Lecția, 7.3; piesa, II, 5.",
    },
    {
      id: "coledzi",
      prompt: "„Găseste-mi, mă-nțeledzi, un coledzi, ori dau scrisoarea la «Răsboiul»”",
      attribution: "act IV",
      tag: "citat",
      correct: "dandanache",
      explanation:
        "Vorbirea peltică („coledzi”, „mă-nțeledzi”) îl individualizează pe Dandanache, care povestește cum a obținut mandatul.",
      source: "Lecția, 7.8; piesa, IV, 3.",
    },
  ],
};

// ── 9. Planul eseului ───────────────────────────────────────────────────────────────────────

export const eseuPlansScrisoare: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile unei comedii",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul premierei și încadrarea (de exemplu, comedie de moravuri).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Specia și curentul (de exemplu, realismul), cu două trăsături arătate în text.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Specia: comedia", "3.3. Curentul: realismul"],
      },
      {
        id: "secvente",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "6.2. Secvența 2: discursul lui Farfuridi (III, 1)", "6.3. Secvența 3: întrunirea și lovitura de teatru (III, 5–7)"],
      },
      {
        id: "elemente",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, comicul și titlul sau didascaliile: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură sau de limbaj · 6 p",
        see: ["3.4. Comicul", "4.2. Titlul", "5.4. Elemente ale textului dramatic"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre piesă, fără informații noi neargumentate.", see: [] },
    ],
  },
  {
    id: "personaj",
    label: "Construcția unui personaj (Cațavencu)",
    section: "9",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, personajul ales și locul lui în piesă.", see: [] },
      {
        id: "statut",
        title: "Statutul personajului",
        text: "Social (avocat, director de ziar), psihologic (demagog, ambițios) și moral (șantajist), fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["7.5. Nae Cațavencu"],
      },
      {
        id: "secvente",
        title: "O trăsătură prin două secvențe",
        text: "De exemplu, demagogia: discursul din actul III și cererea mandatului din actul II. Comentează, nu repovesti.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["6.3. Secvența 3: întrunirea și lovitura de teatru (III, 5–7)"],
      },
      {
        id: "caracterizare",
        title: "Două elemente de compoziție sau de limbaj",
        text: "De exemplu, modalitățile de caracterizare și limbajul, cu relevanța lor pentru construcția personajului.",
        reper: "Reperul despre elemente de structură sau de limbaj · 6 p",
        see: ["7.9. Modalitățile de caracterizare", "3.4. Comicul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată, fără informații noi.", see: [] },
    ],
  },
];

export const planIntroScrisoare: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremele din proiect o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției, nu barem oficial. Subiectele 2026 din proiect nu conțin o cerință despre text dramatic; reperele sunt adaptate din cele despre texte narative și poetice. Verifică formularea reală a cerinței (vezi 1).",
};

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsScrisoare: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile unei comedii)",
    items: [
      "Am precizat încadrarea (specie, curent) și am numit două trăsături, fiecare arătată în text.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă, fără să repovestesc.",
      "Am analizat două elemente de compoziție sau de limbaj (de exemplu, comicul, titlul), cu relevanța lor.",
    ],
  },
  {
    id: "personaj",
    title: "Conținut (cerința despre un personaj)",
    items: [
      "Am prezentat statutul social, psihologic și moral al personajului, cu exemple.",
      "Am numit o trăsătură și am ilustrat-o prin două secvențe comentate.",
      "Am analizat două elemente de compoziție sau de limbaj și am arătat cum construiesc personajul.",
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
