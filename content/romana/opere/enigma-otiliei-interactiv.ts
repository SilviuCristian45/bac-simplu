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
 * Textele experiențelor interactive din lecția „Enigma Otiliei” (content/romana/opere/enigma-otiliei.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), iar faptele și citatele au fost
 * verificate în ediția G. Călinescu, „Enigma Otiliei”, BPT nr. 53–54, Editura pentru Literatură, 1967
 * (vezi docs/rapoarte/audit-enigma-otiliei-2026-10-26.md). Citatele sunt în ortografia actuală (â, sunt).
 * Faptele sunt marcate „fapt” (Despre roman), interpretările „interpretare”.
 */

// ── 2. Fișă rapidă: cele 20 de capitole ─────────────────────────────────────────────────────

const NUMERALS = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
];

/** Faptele rezumate în lecție, pe capitole; capitolele fără intrare nu sunt rezumate. */
const CHAPTER_FACTS: Partial<Record<string, { text: string; source: string }[]>> = {
  I: [
    {
      text: "Felix Sima, venit de la Iași, ajunge seara în strada Antim, la tutorele lui. Bătrânul care deschide, moș Costache, îi spune că „nu-nu stă nimeni aici”.",
      source: "Romanul, cap. I (vol. I, p. 3–8).",
    },
    {
      text: "Otilia îl primește. În salon, Felix îi cunoaște pe Pascalopol, pe Aglae, pe Aurica și pe Simion; Aglae îl întâmpinează ostil.",
      source: "Romanul, cap. I (vol. I, p. 11–17).",
    },
  ],
  VI: [
    {
      text: "Felix și Otilia merg la moșia lui Pascalopol: coboară „în gara Ciulnița”, unde îi așteaptă moșierul cu brișca.",
      source: "Romanul, cap. VI (vol. I, p. 108).",
    },
  ],
  IX: [
    {
      text: "Aglae află că moș Costache vrea s-o adopte pe Otilia și se împotrivește: „Niciodată! Cât trăiesc eu, niciodată.”",
      source: "Romanul, cap. IX (vol. I, p. 230).",
    },
  ],
  X: [
    {
      text: "Stănică i-o prezintă lui Felix pe Georgeta: „Asta e Georgeta, fată faină!”",
      source: "Romanul, cap. X (vol. I, p. 261–262).",
    },
  ],
  XI: [
    {
      text: "Georgeta îl întreabă pe Felix despre Otilia. El răspunde: „E o fată admirabilă, pe care n-o înțeleg.”",
      source: "Romanul, cap. XI (vol. I, p. 299).",
    },
  ],
  XII: [
    {
      text: "Felix primește de la Otilia o carte poștală din Paris și bănuiește că ea a plecat cu Pascalopol.",
      source: "Romanul, cap. XII (vol. I, p. 301).",
    },
    {
      text: "Moș Costache are un atac al bolii: „L-a lovit damblaua”, spune Stănică.",
      source: "Romanul, cap. XII (vol. I, p. 319).",
    },
  ],
  XVIII: [
    {
      text: "Pe la sfârșitul lui septembrie, moș Costache cade printre cărămizile adunate în curte pentru casa pe care vrea s-o zidească.",
      source: "Romanul, cap. XVIII (vol. II, p. 168).",
    },
  ],
  XX: [
    {
      text: "Stănică fură banii de sub salteaua bătrânului bolnav; moș Costache se prăbușește și moare.",
      source: "Romanul, cap. XX (vol. II, p. 311).",
    },
    {
      text: "Otilia pleacă la Paris cu Pascalopol și se căsătorește cu el. În epilog, după război, Felix este profesor universitar și revede casa pustie din strada Antim.",
      source: "Romanul, cap. XX (vol. II, p. 344–349).",
    },
  ],
};

export const otiliaChapters: MapChapter[] = NUMERALS.map((numeral, index) => ({
  number: index + 1,
  numeral,
  facts: (CHAPTER_FACTS[numeral] ?? []).map((fact) => ({ ...fact, tag: "fapt" })),
}));

export const otiliaArcs: ChapterGroup[] = [
  { id: "sosirea", title: "Sosirea lui Felix", range: [1, 1], tone: "emerald" },
  { id: "casa", title: "Viața în casa din strada Antim", range: [2, 11], tone: "amber" },
  { id: "plecari", title: "Plecări, boală și pândă", range: [12, 19], tone: "violet" },
  { id: "final", title: "Moartea lui moș Costache și epilogul", range: [20, 20], tone: "rose" },
];

export const structuraOtiliaIntro: ChapterMapIntro = {
  title: "Cele 20 de capitole",
  summary:
    "Romanul are 20 de capitole numerotate, fără titluri. Alege un capitol ca să vezi ce rezumă lecția din el; culorile arată o împărțire posibilă a acțiunii.",
  note: "Faptele sunt verificate în ediția din 1967. Lecția nu rezumă toate capitolele. Împărțirea în patru etape este o interpretare a lecției, nu a autorului.",
  source: "Lecția, 2 și 6.2; romanul, cap. I–XX.",
};

// ── 3.3. Trăsături ale realismului balzacian ────────────────────────────────────────────────

export const trasaturiRealismOtiliaQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din roman",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură a realismului balzacian, elementul din „Enigma Otiliei” care o susține.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare: o încadrare posibilă, nu singura acceptată.",
  choices: [
    { id: "repere", label: "Romanul începe „într-o seară de la începutul lui iulie 1909”, cu un tânăr care intră „în strada Antim”." },
    { id: "mediu", label: "Strada este „o caricatură în moloz a unei străzi italice”, iar casa are ferestre „de o înălțime absurdă”." },
    { id: "ban", label: "Aglae se opune adoptării Otiliei, iar Stănică fură banii bătrânului bolnav." },
    { id: "tip", label: "Moș Costache își ține banii asupra lui și apoi sub saltea și nu-i dă Otiliei decât o parte." },
  ],
  items: [
    {
      id: "repere-precise",
      prompt: "Repere precise de timp și de spațiu",
      tag: "interpretare",
      correct: "repere",
      explanation: "Data exactă și numele străzii dau impresia de lume reală, ca într-o cronică a orașului. Incipitul romanului realist fixează de la început unde și când are loc acțiunea.",
      source: "Lecția, 3.3 (punctul 1); romanul, cap. I (vol. I, p. 3).",
    },
    {
      id: "mediu-caracter",
      prompt: "Mediul descris în detaliu, care anunță caracterul personajelor",
      tag: "interpretare",
      correct: "mediu",
      explanation: "Strada și casa sunt descrise înaintea oamenilor. Grandoarea ratată și dărăpănarea casei pregătesc portretul stăpânului zgârcit.",
      source: "Lecția, 3.3 (punctul 2); romanul, cap. I (vol. I, p. 4–7).",
    },
    {
      id: "ban-mostenire",
      prompt: "Banul și moștenirea în centrul conflictului",
      tag: "interpretare",
      correct: "ban",
      explanation: "Familia Tulea luptă ca averea lui moș Costache să nu ajungă la Otilia, iar conflictul se încheie cu furtul banilor. Prefața ediției vorbește despre „lupta titanică pentru moștenirea unei case părăsite”.",
      source: "Lecția, 3.3 (punctul 3); romanul, cap. IX și XX.",
    },
    {
      id: "personaj-tip",
      prompt: "Personajul-tip (avarul)",
      tag: "interpretare",
      correct: "tip",
      explanation: "Avariția lui moș Costache se vede în fapte: nici bolnav nu se desparte de bani. Prefața îl numește chiar „Avarul”.",
      source: "Lecția, 3.3 (punctul 4) și 7.4; romanul, cap. XX (vol. II, p. 303).",
    },
  ],
};

// ── 6.3. Incipitul și finalul ───────────────────────────────────────────────────────────────

export const incipitFinalContent: DetailExplorerContent = {
  title: "Incipitul și finalul, față în față",
  summary:
    "Romanul începe și se încheie în strada Antim, în fața casei lui moș Costache. Alege un element și compară cum apare la început și la sfârșit.",
  note: "Citatele sunt din cap. I și XX, ediția din 1967. Ce „arată” comparația este o interpretare a lecției.",
  prompt: "Alege un element:",
};

export const incipitFinalItems: DetailItem[] = [
  {
    id: "strada",
    label: "Strada Antim",
    fields: [
      { label: "La început", text: "Felix intră „în strada Antim”, care îi pare „o caricatură în moloz a unei străzi italice” (vol. I, p. 3–4).", tag: "citat" },
      { label: "La sfârșit", text: "Felix trece intenționat pe strada Antim: „Prefacerile nu schimbaseră cu totul caracterul străzii.” (vol. II, p. 348)", tag: "citat" },
      { label: "Ce arată", text: "Strada rămâne aceeași; s-au schimbat oamenii și privirea lui Felix.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3; romanul, cap. I și XX.",
  },
  {
    id: "casa",
    label: "Casa lui moș Costache",
    fields: [
      { label: "La început", text: "O casă cu „patru ferestre de o înălțime absurdă”, cu zidăria „crăpată și scorojită” (vol. I, p. 5).", tag: "citat" },
      { label: "La sfârșit", text: "„Casa lui moș Costache era leproasă, înnegrită. Poarta era ținută cu un lanț” (vol. II, p. 348).", tag: "citat" },
      { label: "Ce arată", text: "Casa pentru care s-a luptat familia ajunge o ruină: moștenirea nu a folosit nimănui.", tag: "interpretare" },
    ],
    source: "Lecția, 3.3 și 6.3; romanul, cap. I și XX.",
  },
  {
    id: "replica",
    label: "„Nu stă nimeni aici”",
    fields: [
      { label: "La început", text: "Moș Costache îi răspunde lui Felix: „nu-nu stă nimeni aici, nu cunosc...” (vol. I, p. 8).", tag: "citat" },
      { label: "La sfârșit", text: "„I se păru că țeasta lucioasă a lui moș Costache apare la ușă și vechile vorbe îi răsunară limpede la ureche: «Aici nu stă nimeni!»” (vol. II, p. 349)", tag: "citat" },
      { label: "Ce arată", text: "Replica se întoarce: la început era o minciună a avarului, la sfârșit este adevărul. Romanul are o structură circulară.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2 și 6.3; romanul, cap. I și XX.",
  },
  {
    id: "felix",
    label: "Felix",
    fields: [
      { label: "La început", text: "„un tânăr de vreo optsprezece ani, îmbrăcat în uniformă de licean”, cu o valiză grea în mână (vol. I, p. 3).", tag: "citat" },
      { label: "La sfârșit", text: "Profesor universitar, „specialist cunoscut”, căsătorit; revede strada singur (vol. II, p. 347–349).", tag: "fapt" },
      { label: "Ce arată", text: "Între cele două momente, Felix și-a împlinit cariera, dar a pierdut-o pe Otilia.", tag: "interpretare" },
    ],
    source: "Lecția, 5.4, 6.3 și 7.3; romanul, cap. I și XX.",
  },
];

// ── 5.5. Fapt sau interpretare? ─────────────────────────────────────────────────────────────

export const faptInterpretareOtiliaQuiz: QuizContent = {
  title: "Fapt din text sau interpretare?",
  summary:
    "În eseu, o parte din puncte vine din felul în care arăți faptele din text și le interpretezi. Hotărăște pentru fiecare enunț dacă e un fapt din roman sau o interpretare.",
  note: "Un fapt se poate verifica în text. O interpretare e o lectură argumentată: poate fi susținută cu fapte, dar nu e un fapt.",
  choices: [
    { id: "fapt", label: "Fapt din text" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "furt",
      prompt: "Stănică scoate pachetul cu bani de sub salteaua lui moș Costache.",
      correct: "fapt",
      explanation: "Se verifică în text: Stănică „vârî brusc mâna sub ea și trase pachetul cu bani” (cap. XX; vol. II, p. 311).",
      source: "Lecția, 5.3.",
    },
    {
      id: "culminant",
      prompt: "Moartea lui moș Costache este punctul culminant al conflictului pentru moștenire.",
      correct: "interpretare",
      explanation: "Textul nu spune unde e punctul culminant. Este o lectură, care trebuie justificată cu fapte (furtul, căutarea banilor de către Aglae).",
      source: "Lecția, 5.3.",
    },
    {
      id: "carte-postala",
      prompt: "Otilia îi scrie lui Felix că el este „capabil să învingă și o dragoste nepotrivită pentru marele lui viitor”.",
      correct: "fapt",
      explanation: "Este textul cărții poștale primite de Felix după plecarea Otiliei (cap. XX; vol. II, p. 346).",
      source: "Lecția, 5.4.",
    },
    {
      id: "sacrificiu",
      prompt: "Otilia pleacă pentru că nu vrea să-i încurce lui Felix cariera.",
      correct: "interpretare",
      explanation: "Motivul este dedus. Îl sprijină cartea poștală și discuțiile despre studiile lui Felix, dar se pot susține și alte motive, de exemplu siguranța oferită de Pascalopol.",
      source: "Lecția, 5.4 și 7.2.",
    },
    {
      id: "suma",
      prompt: "Bolnav, moș Costache îi dă lui Pascalopol, pentru Otilia, un pachet de o sută de mii.",
      correct: "fapt",
      explanation: "Bătrânul „luă numai un pachețel de o sută de mii din cele trei și-l dădu lui Pascalopol pentru fe-fetiță” (cap. XX; vol. II, p. 303).",
      source: "Lecția, 5.3 și 8.5.",
    },
    {
      id: "circular",
      prompt: "Romanul are o structură circulară.",
      correct: "interpretare",
      explanation: "Este o concluzie a cititorului, susținută de faptul că incipitul și finalul se petrec în fața aceleiași case, cu aceeași replică („nu stă nimeni”).",
      source: "Lecția, 6.3.",
    },
  ],
};

// ── 7.2. Otilia văzută de ceilalți ──────────────────────────────────────────────────────────

export const otiliaVazutaContent: DetailExplorerContent = {
  title: "Otilia, văzută de ceilalți",
  summary:
    "Otilia este construită mai ales prin felul în care o văd ceilalți. Alege un personaj și vezi ce spune despre ea, în ce moment și ce trădează despre el însuși.",
  note: "Replicile sunt din ediția din 1967. Ce arată ele (despre Otilia și despre cel care vorbește) este o interpretare a lecției.",
  prompt: "Cine vorbește despre Otilia?",
};

export const otiliaVazutaItems: DetailItem[] = [
  {
    id: "felix",
    label: "Felix",
    fields: [
      { label: "Replica", text: "„Otilia e o fată admirabilă, o fată superioară” (vol. I, p. 299)", tag: "citat" },
      { label: "Contextul", text: "Vorbește cu Georgeta, care îl întreabă despre Otilia. Adaugă: „E o fată admirabilă, pe care n-o înțeleg.”", tag: "fapt" },
      { label: "Ce arată", text: "Admirația și neputința de a o înțelege: de aici vine „enigma”.", tag: "interpretare" },
    ],
    source: "Lecția, 4.2 și 7.8; romanul, cap. XI.",
  },
  {
    id: "pascalopol",
    label: "Pascalopol",
    fields: [
      { label: "Replica", text: "„A fost o fată delicioasă, dar ciudată. Pentru mine e o enigmă.” (vol. II, p. 348)", tag: "citat" },
      { label: "Contextul", text: "În epilog, după ce o lăsase liberă, îi vorbește lui Felix în tren.", tag: "fapt" },
      { label: "Ce arată", text: "Nici omul care a trăit lângă ea nu o înțelege: enigma nu ține doar de tinerețea lui Felix.", tag: "interpretare" },
    ],
    source: "Lecția, 4.2 și 5.4; romanul, cap. XX.",
  },
  {
    id: "stanica",
    label: "Stănică",
    fields: [
      { label: "Replica", text: "„Nostimă fată, delicioasă, de acord, dar ușuratică, cheltuitoare” (vol. I, p. 260)", tag: "citat" },
      { label: "Contextul", text: "I-o spune lui Felix, care suferă din cauza Otiliei, chiar înainte de a i-o prezenta pe Georgeta.", tag: "fapt" },
      { label: "Ce arată", text: "Stănică judecă totul după bani; portretul spune mai mult despre el decât despre Otilia.", tag: "interpretare" },
    ],
    source: "Lecția, 7.2 și 7.6; romanul, cap. X.",
  },
  {
    id: "aglae",
    label: "Aglae",
    fields: [
      { label: "Replica", text: "„Scârbă!” (vol. I, p. 303)", tag: "citat" },
      { label: "Contextul", text: "Aurica îi spune că Otilia este la Paris; Aglae își rezumă astfel „toată fierea”.", tag: "fapt" },
      { label: "Ce arată", text: "Ostilitatea familiei Tulea față de fata care ar putea moșteni averea.", tag: "interpretare" },
    ],
    source: "Lecția, 7.6; romanul, cap. XII.",
  },
  {
    id: "costache",
    label: "Moș Costache",
    fields: [
      { label: "Replica", text: "„fac eu ceva pentru fe-fetița mea!” (vol. II, p. 147)", tag: "citat" },
      { label: "Contextul", text: "Otilia îl întreabă de ce aduce var și materiale în curte.", tag: "fapt" },
      { label: "Ce arată", text: "Dragostea părintească reală, care nu ajunge însă niciodată fapte: casa nu va fi construită.", tag: "interpretare" },
    ],
    source: "Lecția, 7.4; romanul, vol. II, p. 146–147.",
  },
  {
    id: "narator",
    label: "Naratorul",
    fields: [
      { label: "Replica", text: "„Otilia era socotită ușuratică și se dovedea devotată.” (vol. II, p. 307)", tag: "citat" },
      { label: "Contextul", text: "Otilia îl îngrijește pe moș Costache bolnav, fără să se lase alungată de familie.", tag: "fapt" },
      { label: "Ce arată", text: "Naratorul corectează părerea celorlalți: ușurătatea Otiliei e doar aparentă.", tag: "interpretare" },
    ],
    source: "Lecția, 5.3, 7.2 și 7.8; romanul, cap. XX.",
  },
];

// ── 7.6. Personaje-tip ──────────────────────────────────────────────────────────────────────

export const personajeTipQuiz: QuizContent = {
  title: "Ce tip uman ilustrează personajul?",
  summary:
    "Prefața ediției din 1967 numește câteva personaje după tipul pe care îl ilustrează. Leagă fiecare personaj de tipul său și citește explicația din text.",
  note: "Numele tipurilor sunt cele din prefața lui Paul Georgescu (vol. I, p. VIII). Faptul că un personaj e „tip” este o interpretare critică, nu o informație din roman.",
  choices: [
    { id: "avarul", label: "Avarul" },
    { id: "fata-batrana", label: "Fata bătrână" },
    { id: "adolescenta", label: "Adolescenta" },
    { id: "baba", label: "„Baba absolută”" },
    { id: "arivistul", label: "Arivistul demagog" },
  ],
  items: [
    {
      id: "costache",
      prompt: "Moș Costache",
      tag: "interpretare",
      correct: "avarul",
      explanation: "Ține banii asupra lui, apoi sub saltea, și nu se desparte de ei nici ca să-i asigure viitorul Otiliei.",
      source: "Lecția, 3.3 și 7.4; prefața, vol. I, p. VIII.",
    },
    {
      id: "aurica",
      prompt: "Aurica",
      tag: "interpretare",
      correct: "fata-batrana",
      explanation: "„O fată cam de treizeci de ani” (vol. I, p. 15), obsedată de căsătorie. Otilia o dă chiar ea ca exemplu („Privește la biata Aurica”, vol. II, p. 338).",
      source: "Lecția, 7.6; prefața, vol. I, p. VIII.",
    },
    {
      id: "otilia",
      prompt: "Otilia",
      tag: "interpretare",
      correct: "adolescenta",
      explanation: "Prefața o numește „Adolescenta”, dar observă tot ea că Otilia nu încape într-o formulă: aici e „indeterminarea” ei (vezi 3.4).",
      source: "Lecția, 3.4 și 7.2; prefața, vol. I, p. VIII și XVI.",
    },
    {
      id: "aglae",
      prompt: "Aglae",
      tag: "interpretare",
      correct: "baba",
      explanation: "Aspră, bănuitoare, ostilă Otiliei și lui Felix, conduce familia în lupta pentru moștenire.",
      source: "Lecția, 7.6; prefața, vol. I, p. VIII.",
    },
    {
      id: "stanica",
      prompt: "Stănică Rațiu",
      tag: "interpretare",
      correct: "arivistul",
      explanation: "Vorbăreț, fără scrupule, profită de toți: fură banii bătrânului și ajunge prefect.",
      source: "Lecția, 7.6; prefața, vol. I, p. VIII.",
    },
  ],
};

// ── 7.7. Relațiile dintre personaje ─────────────────────────────────────────────────────────

export type OtiliaPerson = "otilia" | "felix" | "costache" | "pascalopol" | "aglae" | "stanica";

export const otiliaPeople: Record<OtiliaPerson, RelationPersonData> = {
  otilia: {
    name: "Otilia",
    role: "fiica vitregă a lui moș Costache",
    position: { x: 50, y: 54 },
    tone: "rose",
    details: [
      { tag: "fapt", text: "Orfană, crescută de moș Costache; îl iubește pe Felix, dar pleacă la Paris cu Pascalopol și se căsătorește cu el.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Spontană în aparență, lucidă în fond; „enigma” ei vine din felul în care o văd ceilalți.", source: "Lecția, 4.2 și 7.2." },
    ],
  },
  felix: {
    name: "Felix",
    role: "student la medicină, nepotul",
    position: { x: 17, y: 32 },
    tone: "blue",
    details: [
      { tag: "fapt", text: "Orfan, venit de la Iași; în epilog este profesor universitar.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Martorul prin ochii căruia vedem cea mai mare parte a romanului.", source: "Lecția, 6.4 și 7.3." },
    ],
  },
  pascalopol: {
    name: "Pascalopol",
    role: "moșier",
    position: { x: 83, y: 32 },
    tone: "violet",
    details: [
      { tag: "fapt", text: "„Cam de vreo cincizeci de ani”, prieten al casei; o duce pe Otilia la Paris și se căsătorește cu ea.", source: "Lecția, 7.5." },
      { tag: "citat", text: "„n-am prea stat ca să disting ce e patern și ce e viril în dragostea mea”", source: "Lecția, 7.5." },
    ],
  },
  costache: {
    name: "Moș Costache",
    role: "tutorele, avarul",
    position: { x: 20, y: 86 },
    tone: "amber",
    details: [
      { tag: "fapt", text: "Tutorele lui Felix; o iubește pe Otilia („fe-fetița mea”), dar amână să-i asigure viitorul; moare după ce e furat.", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Avarul care nu-și poate transforma dragostea în fapte.", source: "Lecția, 7.4." },
    ],
  },
  aglae: {
    name: "Aglae",
    role: "sora lui Costache, familia Tulea",
    position: { x: 50, y: 10 },
    tone: "slate",
    details: [
      { tag: "fapt", text: "Se opune adoptării Otiliei și pândește averea fratelui.", source: "Lecția, 7.6." },
      { tag: "citat", text: "„Niciodată! Cât trăiesc eu, niciodată.”", source: "Lecția, 7.6." },
    ],
  },
  stanica: {
    name: "Stănică",
    role: "avocat, ginerele Aglaei",
    position: { x: 80, y: 86 },
    tone: "emerald",
    details: [
      { tag: "fapt", text: "Soțul Olimpiei; fură banii lui moș Costache, apoi se însoară cu Georgeta și ajunge prefect.", source: "Lecția, 7.6." },
      { tag: "interpretare", text: "Arivistul: singurul care câștigă din lupta pentru moștenire.", source: "Lecția, 7.6." },
    ],
  },
};

export const otiliaEdges: RelationEdge<OtiliaPerson>[] = [
  { from: "otilia", to: "felix", label: "iubire; prietenie", shortLabel: "iubire", step: 0 },
  { from: "otilia", to: "costache", label: "fiică vitregă; „fe-fetița mea”", shortLabel: "fiică vitregă", step: 0 },
  { from: "aglae", to: "otilia", label: "ostilitate; teama de moștenire", shortLabel: "ostilitate", step: 1 },
  { from: "stanica", to: "costache", label: "pândă, apoi furt", shortLabel: "furt", step: 2 },
  { from: "otilia", to: "pascalopol", label: "protector, apoi soț", shortLabel: "soț", step: 3 },
];

export const relatiiOtiliaFigure: FigureContent = {
  title: "Harta relațiilor: Otilia și cei din jurul ei",
  summary:
    "Otilia este în centru. Parcurge etapele ca să vezi cum apar relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta nu include toate personajele (de exemplu Simion, Olimpia, Aurica, Titi, Georgeta, Weissmann, Marina). Ele sunt prezentate în 7.6 și în fișa rapidă.",
  steps: [
    {
      id: "sosirea",
      title: "Sosirea lui Felix",
      text: "Felix ajunge în casa tutorelui lui, moș Costache. Otilia, fiica vitregă a bătrânului, îl primește prietenos.",
      tag: "fapt",
      source: "Lecția, 5.2.",
    },
    {
      id: "familia",
      title: "Familia Tulea",
      text: "Aglae se teme că averea fratelui ei va ajunge la Otilia și se opune adoptării: „Niciodată! Cât trăiesc eu, niciodată.”",
      tag: "fapt",
      source: "Lecția, 6.5 și 7.6.",
    },
    {
      id: "furtul",
      title: "Moartea lui moș Costache",
      text: "Stănică îl pândește pe bătrânul bolnav și îi fură banii de sub saltea; moș Costache moare.",
      tag: "fapt",
      source: "Lecția, 5.3.",
    },
    {
      id: "plecarea",
      title: "Plecarea Otiliei",
      text: "Rămasă fără sprijin, Otilia pleacă cu Pascalopol și se căsătorește cu el. Relația cu Felix se încheie printr-o carte poștală.",
      tag: "interpretare",
      source: "Lecția, 5.4 și 7.5.",
    },
  ],
};

// ── 7.8. Modalitățile de caracterizare ──────────────────────────────────────────────────────

export const caracterizareOtiliaQuiz: QuizContent = {
  title: "Ce fel de caracterizare este?",
  summary:
    "Personajele romanului sunt caracterizate direct (de narator, de alte personaje, de ele însele) și indirect (prin fapte, vorbe și gesturi). Recunoaște modalitatea din fiecare exemplu.",
  note: "Un exemplu poate fi analizat din mai multe unghiuri; aici alegem modalitatea cea mai clară.",
  choices: [
    { id: "narator", label: "Caracterizare directă, făcută de narator" },
    { id: "alt-personaj", label: "Caracterizare directă, făcută de alt personaj" },
    { id: "auto", label: "Autocaracterizare" },
    { id: "indirect", label: "Caracterizare indirectă, prin fapte, vorbe sau gesturi" },
  ],
  items: [
    {
      id: "devotata",
      prompt: "„Otilia era socotită ușuratică și se dovedea devotată.”",
      attribution: "despre Otilia, cap. XX",
      correct: "narator",
      explanation: "Naratorul numește direct trăsătura („devotată”) și corectează părerea celorlalți.",
      source: "Lecția, 7.2 și 7.8; romanul, vol. II, p. 307.",
    },
    {
      id: "admirabila",
      prompt: "„Otilia e o fată admirabilă, o fată superioară”",
      attribution: "Felix, către Georgeta, cap. XI",
      correct: "alt-personaj",
      explanation: "Un personaj (Felix) o caracterizează direct pe altul (Otilia), numindu-i calitățile.",
      source: "Lecția, 7.8; romanul, vol. I, p. 299.",
    },
    {
      id: "un-nume",
      prompt: "„Am de gând să mă specializez, să devin un nume.”",
      attribution: "Felix, către Otilia, cap. XX",
      correct: "auto",
      explanation: "Felix vorbește despre sine și își numește ambiția.",
      source: "Lecția, 7.3 și 7.8; romanul, vol. II, p. 336.",
    },
    {
      id: "saltea",
      prompt: "Bolnav, moș Costache îl roagă pe Pascalopol să-i pună banii sub saltea și îi dă doar o parte pentru Otilia.",
      attribution: "faptele lui moș Costache, cap. XX",
      correct: "indirect",
      explanation: "Nimeni nu spune aici „e avar”: avariția reiese din faptă.",
      source: "Lecția, 7.4; romanul, vol. II, p. 303.",
    },
    {
      id: "imparte",
      prompt: "După moartea bătrânului, Otilia își împarte rochiile și lucrurile celor din casă.",
      attribution: "faptele Otiliei, cap. XX",
      correct: "indirect",
      explanation: "Generozitatea Otiliei reiese din gest, fără să fie numită.",
      source: "Lecția, 7.2; romanul, vol. II, p. 339.",
    },
    {
      id: "cheltuitoare",
      prompt: "„Nostimă fată, delicioasă, de acord, dar ușuratică, cheltuitoare”",
      attribution: "Stănică, despre Otilia, cap. X",
      correct: "alt-personaj",
      explanation: "Stănică o caracterizează direct pe Otilia; judecata lui, interesată, trebuie comparată cu faptele ei.",
      source: "Lecția, 7.2; romanul, vol. I, p. 260.",
    },
  ],
};

// ── 8. Planurile de eseu ────────────────────────────────────────────────────────────────────

export const essayPlansOtilia: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile romanului",
    section: "8.2",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1938) și încadrarea (de exemplu, roman realist de tip balzacian).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Realismul și două trăsături, fiecare arătată în text (de exemplu, reperele precise din incipit și moștenirea ca motor al conflictului).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Încadrări posibile", "3.3. Trăsături ale realismului balzacian în roman"],
      },
      {
        id: "tema",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "5.2. Secvența 1: sosirea lui Felix în strada Antim", "5.3. Secvența 2: moartea lui moș Costache"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, incipitul și finalul, perspectiva narativă sau conflictul: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["6.3. Incipitul și finalul", "6.4. Perspectiva narativă", "6.5. Conflictul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre roman, fără informații noi neargumentate.", see: [] },
    ],
  },
  {
    id: "personaj",
    label: "Construcția personajului Otilia",
    section: "8.3",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, personajul ales și locul lui în roman.", see: [] },
      {
        id: "statut",
        title: "Statutul personajului",
        text: "Social (orfană, fiica vitregă a lui moș Costache, fără avere), psihologic (spontană, dar lucidă) și moral (generoasă), fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["7.2. Otilia Mărculescu"],
      },
      {
        id: "trasatura",
        title: "O trăsătură prin două secvențe",
        text: "De exemplu, generozitatea: îngrijirea bătrânului bolnav și plecarea din final. Comentează, nu repovesti.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["5.3. Secvența 2: moartea lui moș Costache", "5.4. Secvența 3: plecarea Otiliei și epilogul"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, modalitățile de caracterizare și perspectiva narativă, cu relevanța lor pentru construcția personajului.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["7.8. Modalitățile de caracterizare", "6.4. Perspectiva narativă"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată, fără informații noi.", see: [] },
    ],
  },
];

export const planIntroOtilia: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul din barem acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției (8.2 și 8.3), nu singurele corecte. Reperele vin din cerințele din 2026 (Varianta 4 și Model, p. 2), care vizau alți autori. Pentru Felix, adaptează planul personajului cu secțiunea 7.3.",
};

// ── 9. Autoevaluare ─────────────────────────────────────────────────────────────────────────

export const checklistGroupsOtilia: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile romanului)",
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
      "Am prezentat statutul social, psihologic și moral al personajului, cu exemple.",
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
      "Am separat faptele din roman de interpretări.",
      "Citatele sunt verificate în textul romanului, nu preluate din culegeri.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
