import type { ChapterGroup, ChapterMapIntro, MapChapter } from "@/components/lesson/interactive/chapter-map";
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
 * Textele experiențelor interactive din lecția „Alexandru Lăpușneanul”
 * (content/romana/opere/alexandru-lapusneanul.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), acțiunea a fost verificată
 * pe text, iar citatele au fost confruntate în două ediții (vezi docs/rapoarte/audit-alexandru-lapusneanul-2026-10-26.md).
 * Citatele sunt în ortografia actuală (â, sunt). Faptele sunt marcate „fapt-nuvela”, interpretările „interpretare”.
 */

// ── 2. Fișă rapidă: cele patru capitole, grupate pe momentele subiectului ───────────────────

const NUMERALS = ["I", "II", "III", "IV"];

/** Motto-urile, care țin loc de titluri ale capitolelor. */
const MOTTOS = [
  "Dacă voi nu mă vreți, eu vă vreu…",
  "Ai să dai samă, doamnă!…",
  "Capul lui Moțoc vrem…",
  "De mă voi scula, pre mulți am să popesc și eu…",
];

const CHAPTER_FACTS: string[][] = [
  [
    "Lăpușneanul se întoarce în Moldova cu oști turcești, ca să-și ia înapoi tronul ocupat de Tomșa.",
    "Patru boieri (Moțoc, Veveriță, Spancioc, Stroici) îi cer să se întoarcă; el refuză și îi amenință. Moțoc rămâne pe lângă el.",
  ],
  [
    "Lăpușneanul ajunge domn fără luptă și conduce prin teroare: arde cetățile, ia averile boierilor, le spânzură capetele în poarta curții.",
    "Doamna Ruxanda îl roagă să nu mai verse sânge. El îi promite că „de poimâne” nu va mai vedea capete tăiate și că îi va da „un leac de frică”.",
  ],
  [
    "Discursul de împăcare din biserică; ospățul la care sunt uciși 47 de boieri.",
    "Mulțimea cere capul lui Moțoc, iar domnul i-l dă. Din capetele boierilor face o piramidă, pe care i-o arată Ruxandei. Spancioc și Stroici fug peste Nistru.",
  ],
  [
    "După patru ani, bolnav la Hotin, Lăpușneanul este călugărit și amenință pe toți când se trezește.",
    "Îndemnată de Spancioc și Stroici, Ruxanda îi dă otrava; cei doi boieri îl privesc murind.",
  ],
];

export const lapusneanulChapters: MapChapter[] = NUMERALS.map((numeral, index) => ({
  number: index + 1,
  numeral,
  title: MOTTOS[index],
  facts: CHAPTER_FACTS[index].map((text) => ({ text, tag: "fapt-nuvela", source: `Nuvela, cap. ${numeral}.` })),
}));

export const lapusneanulMoments: ChapterGroup[] = [
  { id: "expozitiune-intriga", title: "Expozițiunea și intriga", range: [1, 1], tone: "emerald" },
  { id: "desfasurare", title: "Desfășurarea acțiunii", range: [2, 2], tone: "amber" },
  { id: "culminant", title: "Punctul culminant", range: [3, 3], tone: "violet" },
  { id: "deznodamant", title: "Deznodământul", range: [4, 4], tone: "rose" },
];

export const structuraLapusneanulIntro: ChapterMapIntro = {
  title: "Cele patru capitole, pe momentele subiectului",
  summary:
    "Nuvela are patru capitole numerotate, fiecare cu un motto în loc de titlu. Alege un capitol ca să vezi motto-ul și ce se întâmplă în el; culorile arată o împărțire posibilă pe momentele subiectului.",
  note: "Rezumatele capitolelor sunt verificate pe text. Gruparea pe momente este o interpretare și e simplificată: desfășurarea acțiunii continuă la începutul capitolului III, cu discursul din biserică (vezi 6.2).",
  source: "Lecția, 2 și 6.2; nuvela, cap. I–IV.",
};

// ── 3.3. Trăsături ale romantismului ────────────────────────────────────────────────────────

export const trasaturiRomantismQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din nuvelă",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură a romantismului, elementul din „Alexandru Lăpușneanul” care o susține.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare: o încadrare posibilă, nu singura acceptată.",
  choices: [
    { id: "istorie", label: "Acțiunea are loc în Moldova veacului al XVI-lea, iar naratorul citează cronica („zice hronica”)." },
    { id: "exceptional", label: "Domnul ucide 47 de boieri la un ospăț și face din capetele lor o piramidă." },
    { id: "antiteza", label: "Lângă domnul crud stă „gingașa Ruxanda”, tristă „ca floarea espusă arșiții soarelui”." },
    { id: "culoare", label: "Portretul doamnei, cu zobon și șlic de samur, și ospățul, cu borș polonez și pilaf turcesc." },
  ],
  items: [
    {
      id: "istorie-nationala",
      prompt: "Subiectul luat din istoria națională",
      tag: "interpretare",
      correct: "istorie",
      explanation:
        "Romanticii își caută subiectele în trecutul propriului popor. Trimiterile la cronică arată că nuvela pornește de la istoria Moldovei, cum cerea programul „Daciei literare”.",
      source: "Lecția, 3.2 și 3.3 (punctul 1); nuvela, cap. II.",
    },
    {
      id: "personaj-exceptional",
      prompt: "Personajul excepțional, în situații excepționale",
      tag: "interpretare",
      correct: "exceptional",
      explanation:
        "Faptele lui Lăpușneanul sunt ieșite din comun prin cruzime, iar scena ospățului este una extremă. Eroul romantic poate fi și un personaj negativ.",
      source: "Lecția, 3.3 (punctul 2); nuvela, cap. III.",
    },
    {
      id: "antiteza",
      prompt: "Antiteza",
      tag: "interpretare",
      correct: "antiteza",
      explanation:
        "Ruxanda, blândă și temătoare, este construită prin contrast cu domnul crud. Antiteza apare și în scena din biserică urmată de masacru.",
      source: "Lecția, 3.3 (punctul 3) și 7.3; nuvela, cap. II.",
    },
    {
      id: "culoare-locala",
      prompt: "Culoarea locală și de epocă",
      tag: "interpretare",
      correct: "culoare",
      explanation:
        "Descrierea veșmintelor și a mâncărurilor reconstituie viața unei epoci trecute. Cuvintele vechi sunt explicate de autor în note.",
      source: "Lecția, 3.3 (punctul 4) și 6.6; nuvela, cap. II–III.",
    },
  ],
};

// ── 4.3. Motto-urile capitolelor ────────────────────────────────────────────────────────────

export const mottouriContent: DetailExplorerContent = {
  title: "Cele patru motto-uri",
  summary:
    "Fiecare capitol începe cu o replică rostită chiar în el. Alege un capitol și vezi cine spune replica, în ce moment și ce anunță.",
  note: "Motto-urile și contextul lor sunt din nuvelă. Ce „anunță” fiecare este o interpretare a lecției.",
  prompt: "Alege un capitol:",
};

export const mottouriItems: DetailItem[] = [
  {
    id: "cap-1",
    label: "Cap. I",
    fields: [
      { label: "Motto", text: "„Dacă voi nu mă vreți, eu vă vreu…”", tag: "citat" },
      { label: "Cine îl rostește și când", text: "Lăpușneanul, boierilor trimiși să-i spună că „norodul nu te vrea, nici te iubește”.", tag: "fapt-nuvela" },
      { label: "Ce anunță", text: "O domnie impusă prin forță și conflictul dintre domn și boieri, care leagă toată nuvela.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 5.2; nuvela, cap. I.",
  },
  {
    id: "cap-2",
    label: "Cap. II",
    fields: [
      { label: "Motto", text: "„Ai să dai samă, doamnă!…”", tag: "citat" },
      { label: "Cine îl rostește și când", text: "O jupâneasă al cărei soț fusese ucis i-a strigat aceste vorbe Ruxandei, la poarta curții; Ruxanda i le povestește domnului.", tag: "fapt-nuvela" },
      { label: "Ce anunță", text: "Ideea răspunderii pentru sângele vărsat. Ruxanda îi spune și ea domnului: „ai să dai seamă!”, iar finalul arată această socoteală.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 7.3; nuvela, cap. II.",
  },
  {
    id: "cap-3",
    label: "Cap. III",
    fields: [
      { label: "Motto", text: "„Capul lui Moțoc vrem…”", tag: "citat" },
      { label: "Cine îl rostește și când", text: "Mulțimea adunată la porțile curții, după uciderea boierilor la ospăț.", tag: "fapt-nuvela" },
      { label: "Ce anunță", text: "Sacrificarea lui Moțoc, pe care domnul o folosește ca să liniștească mulțimea: „Proști, dar mulți”.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 5.3; nuvela, cap. III.",
  },
  {
    id: "cap-4",
    label: "Cap. IV",
    fields: [
      { label: "Motto", text: "„De mă voi scula, pre mulți am să popesc și eu…”", tag: "citat" },
      { label: "Cine îl rostește și când", text: "Lăpușneanul, după ce se trezește îmbrăcat în rasă de călugăr. În capitol, replica sună „de mă voi îndrepta, pre mulți am să popesc și eu!”.", tag: "fapt-nuvela" },
      { label: "Ce anunță", text: "Că personajul nu se schimbă nici în fața morții. Amenințarea grăbește hotărârea de a-l otrăvi.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 5.4; nuvela, cap. IV.",
  },
];

// ── 5.5. Fapt sau interpretare? ─────────────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din text sau interpretare?",
  summary:
    "În eseu, o parte din puncte vine din felul în care arăți faptele din text și le interpretezi. Hotărăște pentru fiecare enunț dacă e un fapt din nuvelă sau o interpretare.",
  note: "Un fapt se poate verifica în text. O interpretare e o lectură argumentată: poate fi susținută cu fapte, dar nu e un fapt.",
  choices: [
    { id: "fapt", label: "Fapt din text" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "boieri-47",
      prompt: "La ospăț sunt uciși 47 de boieri.",
      correct: "fapt",
      explanation: "Se verifică în text: „Patruzeci și șepte de trupuri zăceau pe parchet!” (cap. III).",
      source: "Lecția, 5.3.",
    },
    {
      id: "culminant",
      prompt: "Ospățul este punctul culminant al nuvelei.",
      correct: "interpretare",
      explanation:
        "Textul nu spune unde este punctul culminant. Împărțirea pe momentele subiectului este o lectură, care trebuie justificată cu fapte.",
      source: "Lecția, 6.2.",
    },
    {
      id: "motoc-multime",
      prompt: "Mulțimea cere capul lui Moțoc, iar domnul i-l dă.",
      correct: "fapt",
      explanation: "Mulțimea strigă „Capul lui Moțoc vrem!”, iar Lăpușneanul poruncește: „luați-l de-l dați norodului” (cap. III).",
      source: "Lecția, 5.3 și 7.4.",
    },
    {
      id: "calcul",
      prompt: "Lăpușneanul îl sacrifică pe Moțoc dintr-un calcul politic.",
      correct: "interpretare",
      explanation:
        "Motivul este dedus de cititor. Lectura are sprijin în text: în cap. I domnul îi spune lui Moțoc că îl cruță „ca să mă ușurezi de blăstemurile norodului”, iar în cap. III răspunde „Proști, dar mulți”.",
      source: "Lecția, 5.2, 5.3 și 7.2.",
    },
    {
      id: "otrava",
      prompt: "Ruxanda pune otrava în paharul domnului.",
      correct: "fapt",
      explanation: "Textul spune că Ruxanda, „silită mai mult de boieri”, lasă otrava să cadă în pahar (cap. IV).",
      source: "Lecția, 5.4 și 7.3.",
    },
    {
      id: "mama",
      prompt: "Ruxanda acționează mai ales ca o mamă care își apără copilul.",
      correct: "interpretare",
      explanation:
        "Este o lectură a gestului ei. O susține replica lui Spancioc („Moară tatăl ca să scape fiul”) și teama ei că domnul vrea să-l omoare pe copil, dar alții pot sublinia presiunea boierilor.",
      source: "Lecția, 7.3.",
    },
  ],
};

// ── 6.6. Cuvinte explicate în notele autorului ──────────────────────────────────────────────

/** Three choices with ids a, b, c; the author's gloss is placed at `position` so it does not always come first. */
const glossChoices = (correct: string, wrong: [string, string], position: 0 | 1 | 2) => {
  const labels = [...wrong];
  labels.splice(position, 0, correct);
  return labels.map((label, index) => ({ id: "abc"[index], label }));
};

export const glosarQuiz: QuizContent = {
  title: "Ce înseamnă cuvântul, după nota autorului?",
  summary:
    "Negruzzi a explicat în note de subsol cuvintele vechi din nuvelă. Alege sensul pe care îl dă autorul fiecărui cuvânt, în contextul din text.",
  note: "Sensurile corecte sunt cele din notele autorului (n.a.), prezente în ambele ediții consultate. Variantele greșite sunt construite de lecție.",
  choices: [],
  items: [
    {
      id: "mosia",
      prompt: "„vedem că moșia noastră a să cadă de isnoavă în călcarea păgânilor”: „moșia” înseamnă…",
      attribution: "Stroici, cap. I",
      choices: glossChoices("patria", ["proprietatea unui boier", "familia domnului"], 1),
      correct: "b",
      explanation: "Nota autorului: „Patria”. Stroici vorbește despre țară, care ar fi prădată de oștile turcești aduse de domn.",
      source: "Lecția, 6.6; nuvela, cap. I, nota 2.",
    },
    {
      id: "pamantean",
      prompt: "„Adă-ți aminte că ești pământean”: „pământean” înseamnă…",
      attribution: "Moțoc, cap. I",
      choices: glossChoices("patriot", ["țăran", "om de rând"], 2),
      correct: "c",
      explanation: "Nota autorului: „Patriot”. Moțoc îi cere domnului să nu aducă oști străine împotriva propriei țări.",
      source: "Lecția, 6.6; nuvela, cap. I, nota 3.",
    },
    {
      id: "sarimani",
      prompt: "„Ajungă atâta sânge vărsat, atâte văduvii, atâța sărimani!”: „sărimani” înseamnă…",
      attribution: "Ruxanda, cap. II",
      choices: glossChoices("orfani", ["săraci", "slujitori"], 0),
      correct: "a",
      explanation: "Nota autorului: „Orfani”. Ruxanda vorbește despre copiii boierilor uciși.",
      source: "Lecția, 6.6 și 7.3; nuvela, cap. II, nota 7.",
    },
    {
      id: "felendres",
      prompt: "„un benișel de felendreș albastru blănit cu samur”: „felendreș” înseamnă…",
      attribution: "portretul Ruxandei, cap. II",
      choices: glossChoices("catifea", ["mătase", "blană de vulpe"], 2),
      correct: "c",
      explanation: "Nota autorului: „Catifea”. Detaliile de port fac parte din culoarea de epocă a portretului.",
      source: "Lecția, 3.3 și 6.6; nuvela, cap. II, nota 6.",
    },
    {
      id: "zice",
      prompt: "„Începură a zice din surle”: „a zice” înseamnă…",
      attribution: "ospățul, cap. III",
      choices: glossChoices("a cânta", ["a striga", "a se ruga"], 1),
      correct: "b",
      explanation: "Nota autorului: „A cânta — cuvânt vechi”. Surlele cântă la începutul ospățului.",
      source: "Lecția, 6.6; nuvela, cap. III, nota 10.",
    },
    {
      id: "dregea",
      prompt: "„la spatele fieștecăruia boier dvorea câte o slugă, care dregea”: „dregea” înseamnă…",
      attribution: "ospățul, cap. III",
      choices: glossChoices("turna vin", ["repara vasele", "păzea ușa"], 0),
      correct: "a",
      explanation: "Nota autorului: „Turna vin”. Aceste slugi, înarmate, sunt cele care îi ucid pe boieri.",
      source: "Lecția, 6.6; nuvela, cap. III, nota 12.",
    },
  ],
};

// ── 7.2. Replicile tiranului ────────────────────────────────────────────────────────────────

export const replicileContent: DetailExplorerContent = {
  title: "Replicile tiranului",
  summary:
    "Lăpușneanul se caracterizează mai ales prin ce spune. Alege o replică și vezi contextul ei, trăsătura pe care o arată și cum o poți folosi în eseu.",
  note: "Replicile și contextul sunt din nuvelă. Trăsăturile și folosirea în eseu sunt interpretări ale lecției.",
  prompt: "Alege o replică:",
};

export const replicileItems: DetailItem[] = [
  {
    id: "vreu",
    group: "Capitolul I",
    label: "„eu vă vreu”",
    fields: [
      { label: "Replica", text: "„Dacă voi nu mă vreți, eu vă vreu…” (motto-ul capitolului)", tag: "citat" },
      { label: "Contextul", text: "Răspunsul dat boierilor care îi spun că țara nu-l vrea.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Voința de a domni cu orice preț, fără să țină seama de ceilalți.", tag: "interpretare" },
      { label: "În eseu", text: "Bună pentru statutul social și pentru conflictul cu boierii.", tag: "recomandare" },
    ],
    source: "Lecția, 4.3 și 5.2; nuvela, cap. I.",
  },
  {
    id: "mulg",
    group: "Capitolul I",
    label: "„să vă mulg”",
    fields: [
      { label: "Replica", text: "„Voi mulgeți laptele țării, dar au venit vremea să vă mulg și eu pre voi.”", tag: "citat" },
      { label: "Contextul", text: "Boierii îl întreabă cu ce va hrăni oștile turcești aduse în țară.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Ura față de boieri și o justificare: se prezintă ca apărător al țăranilor jefuiți.", tag: "interpretare" },
      { label: "În eseu", text: "Arată că tiranul își caută motive „juste”; nu e doar o brută.", tag: "recomandare" },
    ],
    source: "Lecția, 5.2; nuvela, cap. I.",
  },
  {
    id: "trebuitor",
    group: "Capitolul I",
    label: "„îmi ești trebuitor”",
    fields: [
      { label: "Replica", text: "„te voi cruța, căci îmi ești trebuitor, ca să mă ușurezi de blăstemurile norodului”", tag: "citat" },
      { label: "Contextul", text: "Lui Moțoc, care rămăsese să-i ceară iertare.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Calculul politic: îl păstrează pe Moțoc ca să-l poată sacrifica mai târziu.", tag: "interpretare" },
      { label: "În eseu", text: "Pereche bună cu „Proști, dar mulți” (cap. III): două episoade pentru aceeași trăsătură.", tag: "recomandare" },
    ],
    source: "Lecția, 5.2 și 7.2; nuvela, cap. I.",
  },
  {
    id: "leac",
    group: "Capitolele II–III",
    label: "„un leac de frică”",
    fields: [
      { label: "Replica", text: "„Îți făgăduiesc că de poimâne nu vei mai vedea […]; și mâne îți voi da un leac de frică.”", tag: "citat" },
      { label: "Contextul", text: "Ruxanda îl roagă să nu mai verse sânge. „Leacul” este piramida de capete pe care i-o arată a doua zi.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Disimularea și cruzimea, cu un umor macabru: promisiunea e ținută, dar monstruos.", tag: "interpretare" },
      { label: "În eseu", text: "Leagă capitolele II și III: arată că masacrul era plănuit.", tag: "recomandare" },
    ],
    source: "Lecția, 5.3 și 7.2; nuvela, cap. II–III.",
  },
  {
    id: "prosti",
    group: "Capitolele II–III",
    label: "„Proști, dar mulți”",
    fields: [
      { label: "Replica", text: "„Proști, dar mulți, răspunse Lăpușneanul cu sânge rece”", tag: "citat" },
      { label: "Contextul", text: "Moțoc îi cere să tragă cu tunurile în mulțimea care îi cere capul.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Luciditatea și cinismul: mulțimea contează doar prin număr.", tag: "interpretare" },
      { label: "În eseu", text: "Replică-cheie pentru inteligența politică a personajului.", tag: "recomandare" },
    ],
    source: "Lecția, 5.3 și 7.2; nuvela, cap. III.",
  },
  {
    id: "femeia",
    group: "Capitolele II–III",
    label: "„Femeia tot femeie”",
    fields: [
      { label: "Replica", text: "„Femeia tot femeie, zise Lăpușneanul zâmbind; în loc să se bucure, ea se sparie.”", tag: "citat" },
      { label: "Contextul", text: "Ruxanda leșină la vederea piramidei de capete.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Lipsa de milă și disprețul față de suferința celorlalți.", tag: "interpretare" },
      { label: "În eseu", text: "Detaliul „zâmbind” arată că naratorul îl caracterizează indirect, prin gest.", tag: "recomandare" },
    ],
    source: "Lecția, 5.3 și 7.8; nuvela, cap. III.",
  },
  {
    id: "popesc",
    group: "Capitolul IV",
    label: "„am să popesc și eu”",
    fields: [
      { label: "Replica", text: "„M-ați popit voi, dar de mă voi îndrepta, pre mulți am să popesc și eu!”", tag: "citat" },
      { label: "Contextul", text: "Se trezește călugărit și îi amenință pe mitropolit, pe Ruxanda și pe copil.", tag: "fapt-nuvela" },
      { label: "Ce arată", text: "Că personajul nu se schimbă: amenință până în pragul morții.", tag: "interpretare" },
      { label: "În eseu", text: "Argument pentru personajul static; legătură cu motto-ul capitolului.", tag: "recomandare" },
    ],
    source: "Lecția, 5.4 și 7.2; nuvela, cap. IV.",
  },
];

// ── 7.7. Relațiile dintre personaje ─────────────────────────────────────────────────────────

export type LapusneanulPerson = "lapusneanul" | "motoc" | "ruxanda" | "multimea" | "spancioc";

export const lapusneanulPeople: Record<LapusneanulPerson, RelationPersonData> = {
  lapusneanul: {
    name: "Lăpușneanul",
    role: "domnul Moldovei",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt-nuvela", text: "Se întoarce cu oști turcești, conduce prin teroare, ucide 47 de boieri la ospăț și moare otrăvit.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Tiran crud, disimulat și calculat, stăpânit de gândul răzbunării.", source: "Lecția, 7.2." },
    ],
  },
  motoc: {
    name: "Moțoc",
    role: "vornic, curtean",
    position: { x: 26, y: 18 },
    tone: "amber",
    details: [
      { tag: "fapt-nuvela", text: "Trimis să-l întoarcă pe domn din drum, rămâne pe lângă el. Este dat mulțimii, care îl ucide.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Tipul curteanului lingușitor și trădător; moartea lui este cerută chiar de „norodul” în numele căruia vorbise.", source: "Lecția, 7.4." },
    ],
  },
  ruxanda: {
    name: "Ruxanda",
    role: "doamna, soția domnului",
    position: { x: 74, y: 18 },
    tone: "rose",
    details: [
      { tag: "fapt-nuvela", text: "Fiica lui Petru Rareș, căsătorită cu domnul fără să fie întrebată. Îl roagă să nu mai verse sânge, iar la sfârșit îi dă otrava.", source: "Lecția, 7.3." },
      { tag: "citat", text: "„ar fi voit să-l iubească, dacă ar fi aflat în el cât de puțină simțire omenească”", source: "Lecția, 7.3." },
    ],
  },
  multimea: {
    name: "Mulțimea",
    role: "„norodul”",
    position: { x: 26, y: 82 },
    tone: "emerald",
    details: [
      { tag: "fapt-nuvela", text: "Se adună la porțile curții după masacru, cere capul lui Moțoc și se împrăștie după ce îl primește.", source: "Lecția, 7.6." },
      { tag: "interpretare", text: "Ușor de manipulat: domnul o liniștește sacrificând un singur om.", source: "Lecția, 5.3." },
    ],
  },
  spancioc: {
    name: "Spancioc, Stroici",
    role: "boierii tineri, pribegi",
    position: { x: 74, y: 82 },
    tone: "slate",
    details: [
      { tag: "fapt-nuvela", text: "Nu merg la ospăț, fug peste Nistru, se întorc la moartea domnului și o îndeamnă pe Ruxanda să-i dea otravă.", source: "Lecția, 7.5." },
      { tag: "citat", text: "„învață a muri, tu care știai numai a omorî”", source: "Lecția, 5.4." },
    ],
  },
};

export const lapusneanulEdges: RelationEdge<LapusneanulPerson>[] = [
  { from: "lapusneanul", to: "motoc", label: "cruțat, apoi sacrificat", shortLabel: "sacrificat", step: 0 },
  { from: "lapusneanul", to: "spancioc", label: "dușmani; răzbunare", shortLabel: "răzbunare", step: 0 },
  { from: "lapusneanul", to: "ruxanda", label: "soție silită; îi cere milă", shortLabel: "soție", step: 1 },
  { from: "lapusneanul", to: "multimea", label: "manipulată prin Moțoc", shortLabel: "manipulare", step: 2 },
];

export const relatiiLapusneanulFigure: FigureContent = {
  title: "Harta relațiilor: domnul și cei din jurul lui",
  summary:
    "Lăpușneanul este în centru. Parcurge capitolele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta nu include toate personajele (de exemplu Veveriță, armașul, mitropolitul Teofan, fiul domnului). Ele sunt prezentate în 7.6.",
  steps: [
    {
      id: "boierii",
      title: "Cap. I: boierii",
      text: "Boierii îi cer domnului să se întoarcă. El refuză și îi amenință. Moțoc rămâne lângă el și este cruțat, „ca să mă ușurezi de blăstemurile norodului”. Spancioc și Stroici rămân dușmani.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.2 și 7.4.",
    },
    {
      id: "ruxanda",
      title: "Cap. II: doamna",
      text: "Ruxanda, căsătorită cu domnul fără să fie întrebată, îl roagă să nu mai verse sânge. El îi promite un „leac de frică”.",
      tag: "fapt-nuvela",
      source: "Lecția, 7.3.",
    },
    {
      id: "multimea",
      title: "Cap. III: mulțimea",
      text: "După masacru, mulțimea cere capul lui Moțoc. Domnul i-l dă și o liniștește. Spancioc și Stroici scapă peste graniță.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.3.",
    },
    {
      id: "final",
      title: "Cap. IV: răzbunarea",
      text: "Spancioc și Stroici se întorc și o împing pe Ruxanda să-i dea otrava. Relațiile construite prin frică se întorc împotriva domnului.",
      tag: "interpretare",
      source: "Lecția, 5.4 și 7.5.",
    },
  ],
};

// ── 7.8. Modalitățile de caracterizare ──────────────────────────────────────────────────────

export const caracterizareQuiz: QuizContent = {
  title: "Ce fel de caracterizare este?",
  summary:
    "Personajele nuvelei sunt caracterizate direct (de narator, de alte personaje, de ele însele) și indirect (prin fapte, vorbe și gesturi). Recunoaște modalitatea din fiecare exemplu.",
  note: "Un exemplu poate fi analizat din mai multe unghiuri; aici alegem modalitatea cea mai clară.",
  choices: [
    { id: "narator", label: "Caracterizare directă, făcută de narator" },
    { id: "alt-personaj", label: "Caracterizare directă, făcută de alt personaj" },
    { id: "auto", label: "Autocaracterizare" },
    { id: "indirect", label: "Caracterizare indirectă, prin fapte, vorbe sau gesturi" },
  ],
  items: [
    {
      id: "urat-caracter",
      prompt: "Norodul își amintea de prima lui domnie, „în care el nu avusese vreme a-și dezvălui urâtul caracter”.",
      attribution: "despre Lăpușneanul, cap. II",
      correct: "narator",
      explanation: "Naratorul numește direct trăsătura („urâtul caracter”) și o judecă.",
      source: "Lecția, 7.8; nuvela, cap. II.",
    },
    {
      id: "ciocoi",
      prompt: "„învechit în zile rele, deprins a te ciocoi la toți domnii, ai vândut pre Despot, m-ai vândut și pre mine”",
      attribution: "Lăpușneanul, către Moțoc, cap. I",
      correct: "alt-personaj",
      explanation: "Un personaj (domnul) îl caracterizează direct pe altul (Moțoc), numindu-i trădarea și lingușirea.",
      source: "Lecția, 7.4 și 7.8; nuvela, cap. I.",
    },
    {
      id: "cumplit",
      prompt: "„m-am arătat cumplit, rău, vărsând sângele multora”",
      attribution: "Lăpușneanul, în biserică, cap. III",
      correct: "auto",
      explanation:
        "Domnul vorbește despre sine. Atenție: autocaracterizarea face parte dintr-un discurs prefăcut, rostit chiar înainte de masacru, deci trebuie citită împreună cu faptele.",
      source: "Lecția, 5.3 și 7.8; nuvela, cap. III.",
    },
    {
      id: "piramida",
      prompt: "Domnul așază capetele boierilor uciși într-o piramidă, „după neam și după ranguri”.",
      attribution: "faptele lui Lăpușneanul, cap. III",
      correct: "indirect",
      explanation: "Nimeni nu spune aici „e crud”: cruzimea reiese din faptă.",
      source: "Lecția, 5.3 și 7.8; nuvela, cap. III.",
    },
    {
      id: "junghi",
      prompt: "Când Ruxanda îl mustră, mâna lui, „prin deprindere, se răzăma pe junghiul din cingătoarea sa”.",
      attribution: "gestul lui Lăpușneanul, cap. II",
      correct: "indirect",
      explanation: "Gestul, făcut din obișnuință, arată violența gata să izbucnească, fără ca trăsătura să fie numită.",
      source: "Lecția, 7.2 și 7.8; nuvela, cap. II.",
    },
    {
      id: "mosie",
      prompt: "„Spancioc este încă tânăr, în inima lui este iubire de moșie”",
      attribution: "Lăpușneanul, despre Spancioc, cap. I",
      correct: "alt-personaj",
      explanation: "Domnul îl caracterizează direct pe Spancioc: tânăr și patriot („moșie” înseamnă aici „patrie”, după nota autorului).",
      source: "Lecția, 7.5 și 7.8; nuvela, cap. I.",
    },
  ],
};

// ── 8. Planurile de eseu ────────────────────────────────────────────────────────────────────

export const essayPlansLapusneanul: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile nuvelei istorice",
    section: "8.2",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1840, Dacia literară) și încadrarea (de exemplu, nuvelă istorică romantică).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Romantismul și două trăsături, fiecare arătată în text (de exemplu, subiectul istoric și antiteza).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Încadrări posibile", "3.3. Trăsături ale romantismului în nuvelă"],
      },
      {
        id: "tema",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "5.2. Secvența 1: întâlnirea cu solii boierilor", "5.3. Secvența 2: ospățul și „un leac de frică”"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, motto-urile, incipitul și finalul sau conflictul: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["4.3. Motto-urile capitolelor", "6.3. Incipitul și finalul", "6.5. Conflictul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre nuvelă, fără informații noi neargumentate.", see: [] },
    ],
  },
  {
    id: "personaj",
    label: "Construcția personajului Lăpușneanul",
    section: "8.3",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, personajul ales și locul lui în nuvelă.", see: [] },
      {
        id: "statut",
        title: "Statutul personajului",
        text: "Social (domn la a doua domnie), psihologic (stăpânit de răzbunare, disimulat) și moral (tiran), fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["7.2. Alexandru Lăpușneanul"],
      },
      {
        id: "trasatura",
        title: "O trăsătură prin două secvențe",
        text: "De exemplu, disimularea: discursul din biserică și ospățul, sau cruzimea: ospățul și finalul. Comentează, nu repovesti.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["5.3. Secvența 2: ospățul și „un leac de frică”", "5.4. Secvența 3: moartea tiranului"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, modalitățile de caracterizare și conflictul, cu relevanța lor pentru construcția personajului.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["7.8. Modalitățile de caracterizare", "6.5. Conflictul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată, fără informații noi.", see: [] },
    ],
  },
];

export const planIntroLapusneanul: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul din barem acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției (8.2 și 8.3), nu singurele corecte. Reperele vin din cerințele din 2026 (Varianta 4 și Model, p. 2), care vizau alți autori. Verifică întâi dacă cerința de la examen permite această nuvelă (vezi 1).",
};

// ── 9. Autoevaluare ─────────────────────────────────────────────────────────────────────────

export const checklistGroupsLapusneanul: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile nuvelei)",
    items: [
      "Am precizat încadrarea și am numit două trăsături, fiecare arătată în text.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă, fără să repovestesc.",
      "Am analizat două elemente de structură sau de limbaj, cu relevanța lor.",
    ],
  },
  {
    id: "personaj",
    title: "Conținut (cerința despre personaj)",
    items: [
      "Am prezentat statutul social, psihologic și moral al lui Lăpușneanul, cu exemple.",
      "Am numit o trăsătură și am ilustrat-o prin două episoade comentate.",
      "Am analizat două elemente de structură și am arătat cum construiesc personajul.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din nuvelă de interpretări.",
      "Citatele sunt verificate în textul nuvelei, iar motto-urile sunt scrise exact.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
