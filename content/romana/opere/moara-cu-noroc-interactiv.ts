import type { ChapterGroup, ChapterMapIntro, MapChapter } from "@/components/lesson/interactive/chapter-map";
import type { RelationEdge, RelationPersonData } from "@/components/lesson/interactive/relation-map";
import type {
  ChecklistGroup,
  EssayPlan,
  EssayPlanIntro,
  FigureContent,
  QuizContent,
} from "@/components/lesson/interactive/types";

/**
 * Textele experiențelor interactive din lecția „Moara cu noroc” (content/romana/opere/moara-cu-noroc.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), acțiunea a fost
 * verificată pe text (vezi docs/rapoarte/audit-moara-cu-noroc-2026-10-25.md), iar citatele sunt doar
 * cele din lista verificată în două ediții. Faptele sunt marcate „fapt-nuvela”, interpretările „interpretare”.
 */

// ── 2. Fișă rapidă: cele 17 capitole, grupate pe momentele subiectului ───────────────────────

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII"];

const CHAPTER_FACTS: string[][] = [
  ["Dialogul dintre bătrână și Ghiță; familia hotărăște să ia în arendă cârciuma de la Moara cu noroc, de la Sfântul Gheorghe."],
  [
    "Drumul de la Ineu, moara părăsită „cu lopețile rupte” și cele cinci cruci.",
    "Primele luni: cârciuma e mereu plină, iar sâmbăta familia numără banii, „dintr-un câștig făcut cu bine”.",
  ],
  ["Porcarii și sămădăii; sosirea lui Lică Sămădăul, portretul lui și condițiile pe care i le pune lui Ghiță."],
  [
    "Ghiță cumpără două pistoale, își ia o slugă, pe Marți, și doi căței; devine ursuz și aspru cu familia.",
    "Visul celor „zece calfe” și prima dorință de a nu avea nevastă și copii.",
  ],
  ["Lică vine pe ascuns cu doi oameni, ia banii „cu împrumut”, iar Ghiță intră în învoială cu el."],
  ["Ana îl avertizează pe Ghiță; Ghiță primește porci fără semnele turmelor lui Lică; Lică joacă cu Ana și rămâne peste noapte."],
  ["Apare Pintea, căprarul de jandarmi, fost tovarăș al lui Lică; noaptea vin un om și o femeie; arendașul a fost jefuit."],
  ["O doamnă în negru, cu un copil, se oprește la cârciumă; slugile ei bănuiesc o legătură cu Sămădăul."],
  ["Cercetarea de la Ineu: Ghiță e lăsat „pe chezășie”; pe drum găsesc copilul ucis lângă trăsură; cearta cu Ana."],
  ["Pintea găsește femeia moartă și biciul lui Lică; jandarmul Hanțl moare; Lică e prins și eliberat; Ghiță e arestat."],
  ["Judecata de la Oradea-Mare: Lică e găsit nevinovat, Ghiță scapă din lipsă de dovezi, Buză-Ruptă și Săilă sunt osândiți pe viață."],
  ["Lică aduce bani și își mărturisește crimele; Ghiță îi spune „Tu nu ești om, Lică, ci diavol!” și jură în gând să-l ducă la spânzurătoare."],
  ["Ana descoperă hârtiile însemnate; Ghiță merge noaptea la Pintea și se înțelege cu el."],
  [
    "Ghiță îi ascunde lui Pintea că jumătate din banii dați lui sunt partea sa de la Lică; trece iarna.",
    "De Paști, bătrâna pleacă cu copiii la Ineu; Ghiță o lasă pe Ana cu Lică și pleacă după Pintea; Ana i se dăruiește lui Lică.",
  ],
  ["Lică pleacă în furtună, intră cu forța în biserică și hotărăște să-i ucidă pe cei care îl pot vinde; se întoarce spre cârciumă."],
  [
    "Ghiță se întoarce și o ucide pe Ana; Răuț îl împușcă, la porunca lui Lică; cârciuma e incendiată.",
    "Încolțit de Pintea, Lică se sinucide izbindu-se cu capul de un stejar.",
  ],
  ["Cârciuma arsă; bătrâna plânge cu copiii lângă cele cinci cruci, apoi pleacă mai departe cu ei."],
];

export const moaraChapters: MapChapter[] = NUMERALS.map((numeral, index) => ({
  number: index + 1,
  numeral,
  facts: CHAPTER_FACTS[index].map((text) => ({ text, tag: "fapt-nuvela", source: `Nuvela, cap. ${numeral}.` })),
}));

export const moaraMoments: ChapterGroup[] = [
  { id: "expozitiune", title: "Expozițiunea", range: [1, 2], tone: "emerald" },
  { id: "intriga", title: "Intriga", range: [3, 3], tone: "sky" },
  { id: "desfasurare", title: "Desfășurarea acțiunii", range: [4, 14], tone: "amber" },
  { id: "culminant", title: "Punctul culminant (o variantă)", range: [15, 15], tone: "violet" },
  { id: "deznodamant", title: "Deznodământul", range: [16, 17], tone: "rose" },
];

export const structuraNuveleiIntro: ChapterMapIntro = {
  title: "Cele 17 capitole, pe momentele subiectului",
  summary:
    "Nuvela are 17 capitole numerotate, fără titluri. Alege un capitol ca să vezi ce se întâmplă în el; culorile arată o împărțire posibilă pe momentele subiectului.",
  note: "Rezumatele capitolelor sunt verificate pe text. Gruparea pe momente este o interpretare: punctul culminant începe la sfârșitul capitolului XIV, iar unele surse îl situează în capitolul XVI (vezi 6.2).",
  source: "Lecția, 2 și 6.2; nuvela, cap. I–XVII.",
};

// ── 3.3. Trăsături ale realismului ──────────────────────────────────────────────────────────

export const trasaturiRealismMoaraQuiz: QuizContent = {
  title: "Leagă trăsătura de dovada din nuvelă",
  summary:
    "La încadrare, fiecare trăsătură trebuie arătată în text. Alege, pentru fiecare trăsătură a realismului, elementul din „Moara cu noroc” care o susține.",
  note: "Trăsăturile și dovezile sunt cele din secțiunea 3.3, prezentate acolo ca interpretare: o încadrare posibilă, nu singura acceptată.",
  choices: [
    {
      id: "spatiu",
      label: "Locuri cu nume reale (Ineu, Arad, Oradea-Mare), meserii și instituții concrete: porcari, arendaș, comisar, jandarmi, judecată.",
    },
    {
      id: "narator",
      label: "Naratorul arată pas cu pas compromisurile lui Ghiță fără să-l condamne direct; judecata morală o rostesc personajele.",
    },
    {
      id: "personaj",
      label: "Ghiță vrea să iasă din sărăcie („zece calfe”), iar din această dorință legitimă pornesc compromisurile lui.",
    },
  ],
  items: [
    {
      id: "verosimilitate",
      prompt: "Verosimilitatea spațiului și a lumii sociale",
      tag: "interpretare",
      correct: "spatiu",
      explanation: "Lumea ficțiunii seamănă cu lumea reală: locuri numite, ocupații și instituții pe care cititorul le recunoaște.",
      source: "Lecția, 3.3 (punctul 1); nuvela, cap. II–III, IX–XI.",
    },
    {
      id: "obiectivitate",
      prompt: "Obiectivitatea naratorului",
      tag: "interpretare",
      correct: "narator",
      explanation: "Naratorul relatează la persoana a III-a și lasă faptele să vorbească; cititorul își formează singur judecata.",
      source: "Lecția, 3.3 (punctul 2) și 6.4.",
    },
    {
      id: "personaj",
      prompt: "Personajul complex, motivat social și psihologic",
      tag: "interpretare",
      correct: "personaj",
      explanation:
        "Ghiță nu e „rău” de la început: are un motiv credibil (ieșirea din sărăcie), iar căderea lui e pregătită de acest motiv.",
      source: "Lecția, 3.3 (punctul 3) și 7.2; nuvela, cap. IV.",
    },
  ],
};

// ── 4.3. Spațiul ────────────────────────────────────────────────────────────────────────────

export const locFigure: FigureContent = {
  title: "Locul: o cârciumă între pripor și „locurile rele”",
  summary:
    "Drumul de la Ineu coboară în valea în care stau moara părăsită, cele cinci cruci și cârciuma lui Ghiță; mai departe „locurile sunt rele”. Aceleași cruci reapar în ultimul capitol.",
  note: "Ilustrație schematică după descrierea din capitolul II: pozițiile și distanțele nu sunt la scară.",
  steps: [
    {
      id: "drum",
      title: "Drumul de la Ineu",
      text: "De la Ineu, drumul de țară trece printre păduri, urcă un pripor și coboară în vale. Aici drumeții fac popas, fiindcă mai departe „locurile sunt rele”.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.3; nuvela, cap. II.",
    },
    {
      id: "moara",
      title: "Moara părăsită și cârciuma",
      text: "Moara a încetat să mai macine și a rămas părăsită, „cu lopețile rupte”; arendașul a zidit cârciuma la câteva sute de pași de râuleț.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.2; nuvela, cap. II.",
    },
    {
      id: "cruci",
      title: "Cele cinci cruci",
      text: "Înaintea morii stau cinci cruci, semne că acolo cineva a aflat o bucurie ori a scăpat de o primejdie.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.3; nuvela, cap. II.",
    },
    {
      id: "izolare",
      title: "Pustietatea",
      text: "Cârciuma e izolată: bătrâna pleacă duminica la biserică „cu inima grea”, lăsându-i „la pustietatea aceea de cârciumă”.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.3; nuvela, cap. II.",
    },
    {
      id: "sens",
      title: "Ce pregătește spațiul",
      text: "Locul izolat, la marginea „locurilor rele” și sub stăpânirea lui Lică, pregătește tragedia; crucile de la început reapar în final, lângă bătrâna care plânge.",
      tag: "interpretare",
      source: "Lecția, 4.3 și 6.3; nuvela, cap. XVII.",
    },
  ],
};

// ── 5.4. Alegerile lui Ghiță ────────────────────────────────────────────────────────────────

export const alegeriQuiz: QuizContent = {
  title: "Ce face Ghiță?",
  summary:
    "În mai multe momente, Ghiță are în față o alegere pe care textul o numește. Ghicește ce face, apoi citește ce spune nuvela și ce înseamnă alegerea lui pentru temă.",
  note: "Situațiile și răspunsurile corecte sunt fapte din text; explicațiile despre semnificație sunt interpretări (lecția, 5 și 7.2).",
  choices: [],
  items: [
    {
      id: "porci",
      prompt: "Lică îi trimite șase porci, dintre care patru nu poartă niciunul dintre semnele turmelor lui (cap. VI). Ce face Ghiță?",
      tag: "fapt-nuvela",
      choices: [
        { id: "refuza", label: "Îi refuză și îi spune Anei." },
        { id: "primeste", label: "Îi primește, ca să nu se strice cu Lică, și nu-i spune nimic Anei." },
        { id: "jandarmi", label: "Îi duce la jandarmii de la Ineu." },
      ],
      correct: "primeste",
      explanation:
        "Ghiță „a stătut mult la luptă cu sine”, dar îi primește și tace, de teamă că Ana îl va opri. E primul pas concret spre complicitate.",
      source: "Lecția, 7.2; nuvela, cap. VI.",
    },
    {
      id: "judecata",
      prompt: "La judecată, este întrebat dacă poate jura că Lică a stat toată noaptea la cârciumă (cap. XI). Ce răspunde?",
      tag: "fapt-nuvela",
      choices: [
        { id: "da", label: "Jură că Lică n-a plecat deloc din cârciumă." },
        { id: "acuza", label: "Spune că l-a văzut pe Lică plecând și întorcându-se." },
        { id: "ambiguu", label: "Spune că nu poate jura că n-a plecat, dar jură că „l-a știut” toată noaptea la cârciumă." },
      ],
      correct: "ambiguu",
      explanation:
        "Răspunsul e ambiguu și îl ajută pe Lică. Ghiță renunță să spună tot ce știe când o vede pe Ana în sală și se gândește la familie.",
      source: "Lecția, 7.2; nuvela, cap. XI.",
    },
    {
      id: "bani",
      prompt: "Lică îi aduce hârtii însemnate, „în jumătate: cât ție, atât mie” (cap. XIV). Ce face Ghiță cu ele?",
      tag: "fapt-nuvela",
      choices: [
        { id: "tot", label: "Îi duce lui Pintea toți banii și îi spune adevărul." },
        { id: "ascunde", label: "Îi duce lui Pintea la schimbat, dar îi ascunde că jumătate sunt ai lui." },
        { id: "arunca", label: "Aruncă banii, ca să nu fie prins cu ei." },
      ],
      correct: "ascunde",
      explanation:
        "Ghiță îi cere lui Pintea să-i schimbe banii întregi și nu-i spune că jumătate din ei sunt partea lui. Naratorul notează că, pe măsură ce aduna banii, „el scăpăta mereu în gândul său”.",
      source: "Lecția, 7.2; nuvela, cap. XIV.",
    },
    {
      id: "pasti",
      prompt: "De Paști, Lică îi cere să plece și s-o lase pe Ana singură cu el (cap. XIV). Ce face Ghiță?",
      tag: "fapt-nuvela",
      choices: [
        { id: "refuza", label: "Refuză și îl dă afară pe Lică." },
        { id: "pleaca", label: "Acceptă și pleacă după Pintea, ca să-l prindă pe Lică cu banii asupra lui." },
        { id: "ana", label: "O ia pe Ana cu el la Ineu." },
      ],
      correct: "pleaca",
      explanation:
        "Ghiță acceptă, gândindu-se la răzbunare: „Așa vrea Dumnezeu! [...] așa mi-a fost rânduit.” Pintea însuși se miră că și-a folosit soția ca momeală (cap. XVI).",
      source: "Lecția, 5.3 și 7.2; nuvela, cap. XIV, XVI.",
    },
  ],
};

// ── 6.2. Momentele subiectului ──────────────────────────────────────────────────────────────

export type MomentPoint = { id: string; label: string; chapters: string; tension: number };

/** Tension values are only a drawing aid (0 = calm, 1 = climax), not measurements. */
export const momentPoints: MomentPoint[] = [
  { id: "expozitiune", label: "Expozițiunea", chapters: "I–II", tension: 0.12 },
  { id: "intriga", label: "Intriga", chapters: "III", tension: 0.32 },
  { id: "desfasurare", label: "Desfășurarea", chapters: "IV–XIV", tension: 0.62 },
  { id: "culminant", label: "Punctul culminant", chapters: "XIV–XV", tension: 0.95 },
  { id: "deznodamant", label: "Deznodământul", chapters: "XVI–XVII", tension: 0.4 },
];

export const momenteFigure: FigureContent = {
  title: "Momentele subiectului: tensiunea crește",
  summary:
    "Acțiunea pornește de la liniștea de la început, se încordează odată cu sosirea lui Lică și ajunge la capăt de Paști. Linia arată o împărțire posibilă, nu o măsurătoare.",
  note: "Înălțimea liniei e doar o reprezentare a tensiunii. Delimitarea punctului culminant diferă între surse (vezi 6.2).",
  steps: [
    {
      id: "expozitiune",
      title: "Expozițiunea (cap. I–II)",
      text: "Familia ia în arendă cârciuma de la Moara cu noroc; primele luni aduc liniște și un câștig cinstit.",
      tag: "fapt-nuvela",
      source: "Lecția, 6.2; nuvela, cap. I–II.",
    },
    {
      id: "intriga",
      title: "Intriga (cap. III)",
      text: "Sosește Lică Sămădăul și cere să știe tot ce se petrece pe drum: echilibrul de la început se rupe.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.2 și 6.2; nuvela, cap. III.",
    },
    {
      id: "desfasurare",
      title: "Desfășurarea acțiunii (cap. IV–XIV)",
      text: "Învoiala cu Lică, jefuirea arendașului și omorurile din drum, judecata, banii însemnați și înțelegerea ascunsă cu Pintea; Ghiță și Ana se înstrăinează.",
      tag: "fapt-nuvela",
      source: "Lecția, 6.2; nuvela, cap. IV–XIV.",
    },
    {
      id: "culminant",
      title: "Punctul culminant (o variantă)",
      text: "De Paști, Ghiță o lasă pe Ana singură cu Lică și pleacă după Pintea; Ana i se dăruiește lui Lică, iar Lică, fugit în furtună, hotărăște să-i ucidă pe cei care îl pot vinde (cap. XIV–XV). Alte surse situează punctul culminant la uciderea Anei (cap. XVI).",
      tag: "interpretare",
      source: "Lecția, 6.2; nuvela, cap. XIV–XVI.",
    },
    {
      id: "deznodamant",
      title: "Deznodământul (cap. XVI–XVII)",
      text: "Ghiță o ucide pe Ana și este împușcat de Răuț; cârciuma arde; Lică se sinucide; bătrâna rămâne cu copiii lângă cele cinci cruci.",
      tag: "fapt-nuvela",
      source: "Lecția, 6.2; nuvela, cap. XVI–XVII.",
    },
  ],
};

// ── 6.3. Incipitul și finalul ───────────────────────────────────────────────────────────────

export type MirrorPair = { id: string; theme: string; incipit: string; final: string; step: number };

export const mirrorPairs: MirrorPair[] = [
  {
    id: "batrana",
    theme: "Vocea bătrânei",
    incipit: "„Omul să fie mulțumit cu sărăcia sa, căci, dacă e vorba, nu bogăția, ci liniștea colibei tale te face fericit.” (cap. I)",
    final: "„Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...” (cap. XVII)",
    step: 0,
  },
  {
    id: "cruci",
    theme: "Cele cinci cruci",
    incipit: "„Cinci cruci stau înaintea morii, două de piatră și trei altele cioplite din lemn de stejar” (cap. II)",
    final: "„Bătrâna ședea cu copiii pe-o piatră de lângă cele cinci cruci și plângea cu lacrimi alinătoare.” (cap. XVII)",
    step: 1,
  },
  {
    id: "loc",
    theme: "Locul",
    incipit: "Moara părăsită, „cu lopețile rupte”, și cârciuma nouă, plină de drumeți (cap. II).",
    final: "Din cârciumă au rămas doar ziduri afumate și cenușă (cap. XVII).",
    step: 2,
  },
];

export const incipitFinalFigure: FigureContent = {
  title: "Incipitul și finalul se oglindesc",
  summary:
    "Nuvela începe și se încheie cu bătrâna și cu cele cinci cruci. Parcurge perechile ca să vezi cum avertismentul de la început se adeverește la sfârșit.",
  note: "Citatele sunt verificate în două ediții (vezi Surse). Lectura „circulară” a structurii este o interpretare.",
  steps: [
    {
      id: "batrana",
      title: "Aceeași voce deschide și închide nuvela",
      text: "Prima și ultima replică îi aparțin bătrânei: un sfat despre liniștea colibei și o constatare tristă.",
      tag: "fapt-nuvela",
      source: "Lecția, 6.3; nuvela, cap. I și XVII.",
    },
    {
      id: "cruci",
      title: "Aceleași cruci",
      text: "Crucile descrise în capitolul II, semne ale unor primejdii de care cineva a scăpat, sunt locul în care bătrâna plânge la final.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.3 și 6.3; nuvela, cap. II și XVII.",
    },
    {
      id: "loc",
      title: "De la cârciuma plină la ruină",
      text: "Locul „cu noroc” de la început, plin de drumeți, a devenit un morman de cenușă.",
      tag: "fapt-nuvela",
      source: "Lecția, 4.2 și 6.3; nuvela, cap. II și XVII.",
    },
    {
      id: "sens",
      title: "O structură circulară",
      text: "Pentru că incipitul și finalul se oglindesc, structura poate fi numită circulară sau simetrică: avertismentul bătrânei se adeverește, iar povestea lui Ghiță devine o pildă.",
      tag: "interpretare",
      source: "Lecția, 6.3.",
    },
  ],
};

// ── 7.2. Treptele căderii lui Ghiță ─────────────────────────────────────────────────────────

export const treptePrabusirii: FigureContent = {
  title: "Ghiță, pas cu pas",
  summary:
    "Ghiță nu se schimbă dintr-odată: fiecare treaptă e un compromis mic, iar compromisurile se adună. Coboară treaptă cu treaptă și urmărește ce câștigă și ce pierde.",
  note: "Treptele sunt fapte din text; ordinea lor ca „cădere” morală este interpretarea lecției (7.2).",
  steps: [
    {
      id: "start",
      title: "Cizmarul care vrea mai mult (cap. I–II)",
      text: "Ghiță ia cârciuma în arendă ca să iasă din sărăcie; banii vin „dintr-un câștig făcut cu bine”.",
      tag: "fapt-nuvela",
      source: "Lecția, 7.2; nuvela, cap. I–II.",
    },
    {
      id: "frica",
      title: "Frica și tăcerea (cap. III–IV)",
      text: "După venirea lui Lică își cumpără pistoale și câini, devine ursuz și ar vrea, pentru prima dată, să nu aibă nevastă și copii.",
      tag: "fapt-nuvela",
      source: "Lecția, 6.5 și 7.2; nuvela, cap. IV.",
    },
    {
      id: "invoiala",
      title: "Învoiala (cap. V–VI)",
      text: "Se învoiește cu Lică („Pe vrăjmașul pe care nu-l poate birui tot omul cu minte și-l face tovarăș”) și primește porci furați.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.4 și 7.2; nuvela, cap. V–VI.",
    },
    {
      id: "judecata",
      title: "Mărturia (cap. XI)",
      text: "La judecată, dă o mărturie ambiguă, care îl ajută pe Lică; apoi îi cere Anei iertare.",
      tag: "fapt-nuvela",
      source: "Lecția, 7.2; nuvela, cap. XI.",
    },
    {
      id: "bani",
      title: "Banii (cap. XIII–XIV)",
      text: "Îi ascunde lui Pintea că jumătate din banii dați lui sunt partea sa de la Lică; „precum aduna banii, el scăpăta mereu în gândul său”.",
      tag: "fapt-nuvela",
      source: "Lecția, 7.2; nuvela, cap. XIV.",
    },
    {
      id: "capat",
      title: "Capătul (cap. XIV–XVI)",
      text: "O lasă pe Ana cu Lică pentru a-și împlini răzbunarea, apoi o ucide; este ucis la rândul lui.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.3 și 7.2; nuvela, cap. XIV–XVI.",
    },
  ],
};

// ── 7.6. Relațiile dintre personaje ─────────────────────────────────────────────────────────

export type MoaraPerson = "ghita" | "ana" | "lica" | "pintea" | "batrana";

export const moaraPeople: Record<MoaraPerson, RelationPersonData> = {
  ghita: {
    name: "Ghiță",
    role: "cizmar ajuns cârciumar",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt-nuvela", text: "Ia cârciuma în arendă ca să iasă din sărăcie și ajunge complicele lui Lică.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Se schimbă treptat, prin compromisuri mici, între dorința de câștig și dragostea pentru familie.", source: "Lecția, 6.5 și 7.2." },
    ],
  },
  ana: {
    name: "Ana",
    role: "soția lui Ghiță",
    position: { x: 78, y: 20 },
    tone: "amber",
    details: [
      { tag: "fapt-nuvela", text: "Simte devreme pericolul: „Lică e om rău și om primejdios” (cap. VI).", source: "Lecția, 7.4." },
      { tag: "interpretare", text: "Poate fi văzută ca victimă a înstrăinării lui Ghiță, care o folosește ca momeală.", source: "Lecția, 7.4." },
    ],
  },
  lica: {
    name: "Lică",
    role: "sămădăul",
    position: { x: 22, y: 20 },
    tone: "slate",
    details: [
      { tag: "fapt-nuvela", text: "„Stăpânea drumurile”; își mărturisește crimele în fața lui Ghiță (cap. IV, XII).", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Domină prin frică și prin slăbiciunile celorlalți.", source: "Lecția, 7.3." },
    ],
  },
  pintea: {
    name: "Pintea",
    role: "căprar de jandarmi",
    position: { x: 22, y: 82 },
    tone: "emerald",
    details: [
      { tag: "fapt-nuvela", text: "Fost tovarăș al lui Lică la furtul de cai (cap. VII); vrea să-l prindă cu orice preț.", source: "Lecția, 7.5." },
    ],
  },
  batrana: {
    name: "Bătrâna",
    role: "mama Anei",
    position: { x: 78, y: 82 },
    tone: "violet",
    details: [
      { tag: "fapt-nuvela", text: "Deschide și închide nuvela; la final pleacă împreună cu copiii (cap. I, XVII).", source: "Lecția, 6.3 și 7.5." },
      { tag: "interpretare", text: "Vocea înțelepciunii tradiționale: liniștea colibei prețuiește mai mult decât bogăția.", source: "Lecția, 4.4." },
    ],
  },
};

export const moaraEdges: RelationEdge<MoaraPerson>[] = [
  { from: "ghita", to: "ana", label: "soț – soție", step: 0 },
  { from: "batrana", to: "ana", label: "mamă – fiică", step: 0 },
  { from: "ghita", to: "lica", label: "învoială, complicitate", shortLabel: "învoială", step: 1 },
  { from: "ghita", to: "pintea", label: "alianță cu neîncredere", step: 2 },
  { from: "lica", to: "pintea", label: "foști tovarăși, dușmani", shortLabel: "foști tovarăși", step: 2 },
  { from: "lica", to: "ana", label: "seducție", step: 3 },
];

export const relationsFigureMoara: FigureContent = {
  title: "Harta relațiilor: Ghiță, Ana, Lică, Pintea, bătrâna",
  summary:
    "În centrul nuvelei stă Ghiță, prins între familia lui și Lică; Pintea îl folosește ca să-l prindă pe Lică. Parcurge etapele ca să vezi cum se schimbă relațiile, apoi alege un personaj.",
  note: "Harta urmărește cele cinci personaje discutate în lecție; oamenii lui Lică și slugile sunt prezentate în 7.5.",
  steps: [
    {
      id: "familia",
      title: "Familia de la început",
      text: "Ghiță, Ana și bătrâna vin împreună la Moara cu noroc; banii se numără sâmbăta, toți laolaltă.",
      tag: "fapt-nuvela",
      source: "Lecția, 2; nuvela, cap. I–II.",
    },
    {
      id: "lica",
      title: "Lică intră în joc",
      text: "Lică îi cere lui Ghiță supunere; Ghiță intră în învoială cu el și ajunge complice.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.2 și 6.5; nuvela, cap. III, V.",
    },
    {
      id: "pintea",
      title: "Pintea, între cei doi",
      text: "Pintea, fost tovarăș al lui Lică, vrea să-l prindă; Ghiță se înțelege cu el, dar îi ascunde o parte din adevăr.",
      tag: "fapt-nuvela",
      source: "Lecția, 7.5; nuvela, cap. VII, XIII–XIV.",
    },
    {
      id: "ana",
      title: "Ana, prinsă la mijloc",
      text: "Înstrăinată de Ghiță și lăsată singură cu Lică de Paști, Ana i se dăruiește acestuia.",
      tag: "fapt-nuvela",
      source: "Lecția, 5.3 și 7.4; nuvela, cap. XIV.",
    },
    {
      id: "sens",
      title: "Ce arată harta",
      text: "Relația cu Lică le strică pe toate celelalte: căsnicia, încrederea bătrânei, prietenia cu Pintea.",
      tag: "interpretare",
      source: "Lecția, 6.5 și 7.6.",
    },
  ],
};

// ── 7.7. Modalitățile de caracterizare ──────────────────────────────────────────────────────

export const caracterizareMoaraQuiz: QuizContent = {
  title: "Ce fel de caracterizare este?",
  summary:
    "Personajele nuvelei sunt caracterizate direct (de narator, de alte personaje, de ele însele) și indirect (prin fapte și vorbe). Recunoaște modalitatea din fiecare exemplu.",
  note: "Citatele sunt verificate în două ediții. Exemplele de caracterizare indirectă rezumă fapte din text; nu sunt citate.",
  choices: [
    { id: "narator", label: "Caracterizare directă, făcută de narator" },
    { id: "personaj", label: "Caracterizare directă, făcută de alt personaj" },
    { id: "auto", label: "Autocaracterizare" },
    { id: "indirecta", label: "Caracterizare indirectă, prin fapte" },
  ],
  items: [
    {
      id: "portret",
      prompt:
        "„un om de treizeci și șase de ani, înalt, uscățiv și supt la față, cu mustața lungă, cu ochii mici și verzi și cu sprâncenele dese și împreunate la mijloc”",
      attribution: "despre Lică, cap. III",
      tag: "citat",
      correct: "narator",
      explanation: "Naratorul face portretul fizic al lui Lică la prima apariție.",
      source: "Lecția, 5.2 și 7.7.",
    },
    {
      id: "multe-se-zic",
      prompt: "„Eu sunt Lică, sămădăul... Multe se zic despre mine, și dintre multe, multe vor fi adevărate și multe scornite.”",
      attribution: "Lică, cap. III",
      tag: "citat",
      correct: "auto",
      explanation: "Lică vorbește despre sine și își construiește singur imaginea de om de care toți se tem.",
      source: "Lecția, 7.3 și 7.7.",
    },
    {
      id: "ura",
      prompt: "„Tu ești om, Ghiță, om cu multă ură în sufletul tău, și ești om cu minte”",
      attribution: "Lică, cap. XII",
      tag: "citat",
      correct: "personaj",
      explanation: "Un alt personaj, Lică, îl caracterizează direct pe Ghiță, numindu-i trăsăturile.",
      source: "Lecția, 7.3 și 7.7.",
    },
    {
      id: "porci",
      prompt: "Ghiță primește porci care nu poartă semnele turmelor lui Lică și nu-i spune nimic Anei.",
      attribution: "rezumatul faptelor, cap. VI",
      tag: "fapt-nuvela",
      correct: "indirecta",
      explanation: "Nimeni nu numește trăsătura; cititorul o deduce din faptă: slăbiciunea și complicitatea lui Ghiță.",
      source: "Lecția, 7.2 și 7.7.",
    },
    {
      id: "primejdios",
      prompt: "„Lică e om rău și om primejdios”",
      attribution: "Ana, cap. VI",
      tag: "citat",
      correct: "personaj",
      explanation: "Ana îl caracterizează direct pe Lică, numind ce crede despre el; îi spune asta lui Ghiță, ca avertisment.",
      source: "Lecția, 7.4 și 7.7.",
    },
  ],
};

// ── 8. Planurile de eseu ────────────────────────────────────────────────────────────────────

export const essayPlansMoara: EssayPlan[] = [
  {
    id: "particularitati",
    label: "Particularitățile nuvelei",
    section: "8.2",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției și încadrarea (de exemplu: nuvelă realistă).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea",
        text: "Realismul și două trăsături, fiecare arătată în text.",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.3. Exemplu: trăsături ale realismului"],
      },
      {
        id: "tema",
        title: "Tema",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "5.2. Secvența 1: sosirea lui Lică", "5.3. Secvența 2: Paștele la Moara cu noroc"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, incipitul și finalul, perspectiva narativă: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["6.3. Incipitul și finalul", "6.4. Perspectiva narativă și stilul indirect liber"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată, fără informații noi neargumentate.", see: [] },
    ],
  },
  {
    id: "personaj",
    label: "Construcția personajului Ghiță",
    section: "8.3",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, personajul ales și locul lui în nuvelă.", see: [] },
      {
        id: "statut",
        title: "Statutul",
        text: "Social, psihologic, moral, fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["7.2. Ghiță"],
      },
      {
        id: "trasatura",
        title: "O trăsătură prin două secvențe",
        text: "De exemplu, slăbiciunea în fața câștigului: învoiala cu Lică și banii însemnați.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["5.4. Alte secvențe potrivite"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură",
        text: "De exemplu, conflictul interior și perspectiva narativă, cu relevanța pentru construcția personajului.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["6.4. Perspectiva narativă și stilul indirect liber", "6.5. Conflictul"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată.", see: [] },
    ],
  },
];

export const planIntroMoara: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul din barem acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției (8.2 și 8.3), „un plan posibil, nu singurul corect”. Faptul că ordinea reperelor este la alegere apare în barem (Subiect și barem, Bacalaureat 2026, Varianta 4, p. 2). Introducerea și încheierea țin de redactare.",
};

// ── 9. Autoevaluare ─────────────────────────────────────────────────────────────────────────

export const checklistGroupsMoara: ChecklistGroup[] = [
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile nuvelei)",
    items: [
      "Am numit clar curentul, perioada sau orientarea și am arătat două trăsături în nuvelă.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă, fără să le repovestesc.",
      "Am analizat două elemente de structură, compoziție sau limbaj.",
      "Pentru fiecare element, am explicat de ce este relevant pentru nuvelă.",
    ],
  },
  {
    id: "personaj",
    title: "Conținut (cerința despre personaj)",
    items: [
      "Am prezentat statutul social, psihologic și moral al lui Ghiță, cu nuanțe.",
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
      "Afirmațiile sunt susținute de argumente din text, iar citatele sunt verificate.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
