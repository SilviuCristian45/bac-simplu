import type { FigureTagKind } from "@/components/lesson/label-styles";
import type { FigureContent } from "@/components/lesson/interactive/types";

/**
 * Textele figurilor interactive din lecția „Ion” (content/romana/opere/ion.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), faptele și
 * interpretările sunt marcate separat, iar singurul citat din roman este cel din secțiunea 5.6.
 */

export const horaFigure: FigureContent = {
  title: "Hora și locul fiecăruia în sat",
  summary:
    "La hora de la începutul romanului, alegerea lui Ion devine publică: o iubește pe Florica, săracă, dar se apropie de Ana, fiica înstăritului Vasile Baciu, care îl disprețuiește pentru sărăcie.",
  note: "Ilustrație schematică: satul și personajele sunt reprezentate generic, ca să arate relațiile sociale. Nu reproduce exact scena din roman.",
  steps: [
    {
      id: "hora",
      title: "Satul la horă",
      text: "Romanul începe cu satul Pripas adunat la hora de duminică.",
      tag: "fapt",
      source: "Lecția, 4.3; romanul, cap. I.",
    },
    {
      id: "ierarhie",
      title: "Cine ce loc are în sat",
      text: "Satul are o ierarhie socială clară: țărani înstăriți și țărani săraci, iar alături de ei învățătorul și preotul.",
      tag: "interpretare",
      source: "Lecția, 3.3.",
    },
    {
      id: "alegerea",
      title: "Alegerea lui Ion",
      text: "Ion o iubește pe Florica, o fată săracă, dar se apropie de Ana, fiica lui Vasile Baciu, unul dintre țăranii înstăriți.",
      tag: "fapt",
      source: "Lecția, 4.3.",
    },
    {
      id: "umilinta",
      title: "Umilința în fața satului",
      text: "Vasile Baciu îl disprețuiește pe Ion pentru că e sărac, iar conflictul dintre ei se deschide public.",
      tag: "fapt",
      source: "Lecția, 4.3.",
    },
    {
      id: "sens",
      title: "Ce arată scena",
      text: "În Pripas, valoarea unui om se măsoară după pământul pe care îl stăpânește: Ion e umilit nu pentru ce face, ci pentru că e sărac.",
      tag: "interpretare",
      source: "Lecția, 4.3.",
    },
  ],
};

export const pamantFigure: FigureContent = {
  title: "Ion și pământul: drumul statutului social",
  summary:
    "Ion pornește ca țăran sărac, cu puțin pământ, și ajunge stăpân pe pământurile lui Vasile Baciu abia după un lung conflict. Lecția interpretează pământul ca sursă de demnitate, dar arată că noul statut nu-i aduce împlinirea.",
  note: "Reprezentare simbolică: suprafețele nu sunt la scară și nu redau loturi reale din roman.",
  steps: [
    {
      id: "plecare",
      title: "Punctul de plecare",
      text: "Ion este fiul lui Alexandru Glanetașu, dintr-o familie săracă, și are puțin pământ. Sărăcia îl umilește în fața țăranilor înstăriți, mai ales a lui Vasile Baciu.",
      tag: "fapt",
      source: "Lecția, 6.2.",
    },
    {
      id: "promis",
      title: "Pământul promis",
      text: "Vasile Baciu îi promite ca zestre pământurile Anei, dar după nuntă amână să i le dea.",
      tag: "fapt",
      source: "Lecția, 6.2; romanul, cap. VI–IX.",
    },
    {
      id: "stapan",
      title: "Stăpân pe pământuri",
      text: "Abia după un lung conflict, Ion ajunge stăpân pe pământuri. Atunci merge pe câmp, îngenunchează și sărută pământul.",
      tag: "fapt",
      source: "Lecția, 4.4 și 6.2; romanul, cap. IX.",
    },
    {
      id: "demnitate",
      title: "Ce înseamnă pământul pentru Ion",
      text: "Pentru Ion, pământul înseamnă demnitate și un loc în comunitate.",
      tag: "interpretare",
      source: "Lecția, 4.2.",
    },
    {
      id: "fara-implinire",
      title: "Statut nou, fără împlinire",
      text: "Statutul lui Ion se schimbă, dar schimbarea nu-i aduce împlinirea: odată ce are pământul, Ion se întoarce spre iubirea pentru Florica.",
      tag: "interpretare",
      source: "Lecția, 4.4 și 6.2.",
    },
  ],
};

export type RelationPerson = "ion" | "ana" | "florica" | "vasile";

export type PersonDetail = { tag: FigureTagKind; text: string; source: string };

export const relationPeople: Record<RelationPerson, { name: string; role: string; details: PersonDetail[] }> = {
  ion: {
    name: "Ion",
    role: "personajul principal",
    details: [
      { tag: "fapt", text: "Fiul lui Alexandru Glanetașu, dintr-o familie săracă; are puțin pământ.", source: "Lecția, 6.2." },
      {
        tag: "interpretare",
        text: "Este dominat de două pasiuni care se exclud: dorința de pământ și iubirea pentru Florica.",
        source: "Lecția, 6.2.",
      },
    ],
  },
  ana: {
    name: "Ana",
    role: "fiica lui Vasile Baciu",
    details: [
      { tag: "fapt", text: "Fiica lui Vasile Baciu, țăran înstărit. Ion o seduce și se căsătorește cu ea.", source: "Lecția, 4.3 și 6.2." },
      {
        tag: "fapt",
        text: "După nuntă, când Vasile Baciu amână să-i dea pământurile, Ion o bate și o alungă la tatăl ei. Ana se sinucide.",
        source: "Lecția, 6.2; romanul, cap. VII–VIII și X.",
      },
      { tag: "interpretare", text: "Pentru Ion, Ana este un mijloc de a obține pământul.", source: "Lecția, 6.2." },
    ],
  },
  florica: {
    name: "Florica",
    role: "fată săracă",
    details: [
      { tag: "fapt", text: "O fată săracă, pe care Ion o iubește.", source: "Lecția, 4.3." },
      {
        tag: "interpretare",
        text: "După ce obține pământul, Ion se întoarce spre ea; conflictul interior duce spre deznodământul tragic.",
        source: "Lecția, 4.4.",
      },
    ],
  },
  vasile: {
    name: "Vasile Baciu",
    role: "țăran înstărit, tatăl Anei",
    details: [
      { tag: "fapt", text: "Îl disprețuiește public pe Ion pentru că e sărac.", source: "Lecția, 4.3; romanul, cap. I." },
      {
        tag: "fapt",
        text: "Îi promite lui Ion pământurile ca zestre, dar după nuntă amână să i le dea. Își bătuse și el fiica.",
        source: "Lecția, 6.2; romanul, cap. VI–IX.",
      },
    ],
  },
};

export const relationEdges: { from: RelationPerson; to: RelationPerson; label: string; step: number }[] = [
  { from: "ion", to: "florica", label: "iubire", step: 0 },
  { from: "ion", to: "ana", label: "căsătorie", step: 1 },
  { from: "ion", to: "vasile", label: "conflict", step: 2 },
  { from: "vasile", to: "ana", label: "tată – fiică", step: 3 },
];

export const relationsFigure: FigureContent = {
  title: "Harta relațiilor: Ion, Ana, Florica și Vasile Baciu",
  summary:
    "Ion o iubește pe Florica, dar se căsătorește cu Ana pentru pământurile tatălui ei, Vasile Baciu, cu care intră în conflict. Selectează un personaj ca să vezi ce spune lecția despre el.",
  note: "Harta arată doar relațiile din această etapă a lecției. George Bulbuc, rivalul lui Ion (vezi 5.5), nu este reprezentat.",
  steps: [
    {
      id: "ion-florica",
      title: "Ion și Florica",
      text: "Ion o iubește pe Florica, o fată săracă.",
      tag: "fapt",
      source: "Lecția, 4.3.",
    },
    {
      id: "ion-ana",
      title: "Ion și Ana",
      text: "Ion se apropie de Ana, fiica unui țăran înstărit, o seduce și se căsătorește cu ea.",
      tag: "fapt",
      source: "Lecția, 4.3 și 6.2.",
    },
    {
      id: "ion-vasile",
      title: "Ion și Vasile Baciu",
      text: "Ion intră în conflict cu Vasile Baciu, pentru pământ și pentru Ana. Vasile îl disprețuiește pentru sărăcie și amână să-i dea zestrea.",
      tag: "fapt",
      source: "Lecția, 5.5 și 6.2.",
    },
    {
      id: "vasile-ana",
      title: "Vasile Baciu și Ana",
      text: "Sunt tată și fiică. Ana suferă și din partea tatălui ei, care o bătuse.",
      tag: "fapt",
      source: "Lecția, 6.2; romanul, cap. VII.",
    },
    {
      id: "ansamblu",
      title: "Imaginea de ansamblu",
      text: "Ion este prins între Ana, care îi aduce pământul, și Florica, pe care o iubește. Ana ajunge victima conflictului dintre soțul și tatăl ei.",
      tag: "interpretare",
      source: "Lecția, 5.5 și 6.2.",
    },
  ],
};

export type SpeechForm = {
  id: "direct" | "indirect" | "indirect-liber";
  label: string;
  tag: FigureTagKind;
  /** Words that belong to the narrator. */
  narrator: string | null;
  /** Words that carry the character's thought. */
  thought: string;
  /** Where the thought sits: in the character's lane, in the narrator's lane, or across both. */
  lane: "personaj" | "narator" | "ambele";
  markers: { label: string; value: string; present: boolean }[];
};

export const speechForms: SpeechForm[] = [
  {
    id: "direct",
    label: "Stil direct",
    tag: "exemplu-didactic",
    narrator: "Ion se întreba:",
    thought: "„Voi fi veșnic slugă pe la alții, să muncesc ca să-i îmbogățesc pe alții?”",
    lane: "personaj",
    markers: [
      { label: "Persoana", value: "I (gândul e citat)", present: true },
      { label: "Verb de declarație", value: "„se întreba”", present: true },
      { label: "Ghilimele", value: "da", present: true },
      { label: "Întrebarea personajului", value: "păstrată", present: true },
    ],
  },
  {
    id: "indirect",
    label: "Stil indirect",
    tag: "exemplu-didactic",
    narrator: "Ion se întreba",
    thought: "dacă va fi veșnic slugă pe la alții și dacă va munci ca să-i îmbogățească pe alții.",
    lane: "narator",
    markers: [
      { label: "Persoana", value: "a III-a", present: true },
      { label: "Verb de declarație", value: "„se întreba”", present: true },
      { label: "Ghilimele", value: "nu", present: false },
      { label: "Întrebarea personajului", value: "transformată în propoziție cu „dacă”", present: false },
    ],
  },
  {
    id: "indirect-liber",
    label: "Stil indirect liber",
    tag: "citat",
    narrator: null,
    thought: "Vasăzică va trebui să fie veșnic slugă pe la alții, să muncească spre a îmbogăți pe alții?",
    lane: "ambele",
    markers: [
      { label: "Persoana", value: "a III-a", present: true },
      { label: "Verb de declarație", value: "lipsește", present: false },
      { label: "Ghilimele", value: "nu (în roman, gândul face parte din narațiune)", present: false },
      { label: "Întrebarea personajului", value: "păstrată (și „Vasăzică”)", present: true },
    ],
  },
];

export const speechFigure: FigureContent = {
  title: "Cine vorbește? Vocea naratorului și gândul lui Ion",
  summary:
    "În stilul indirect liber, gândul personajului este redat de narator la persoana a III-a, fără verb de declarație, dar cu întrebările și tonul personajului. Compară cele trei moduri de a reda același gând.",
  note: "Primele două variante sunt reformulări construite pentru lecție, nu citate din roman. Varianta a treia este citatul din capitolul III folosit în secțiunea 5.6.",
  steps: [
    {
      id: "direct",
      title: "Stil direct",
      text: "Gândul este citat exact, la persoana I, după un verb de declarație („se întreba”) și între ghilimele. Vocea naratorului și cea a personajului sunt separate.",
      tag: "exemplu-didactic",
      source: "Reformulare construită pentru lecție, nu citat din roman.",
    },
    {
      id: "indirect",
      title: "Stil indirect",
      text: "Naratorul povestește gândul, la persoana a III-a, după un verb de declarație. Întrebarea personajului devine o propoziție introdusă prin „dacă”; vocea personajului nu se mai aude direct.",
      tag: "exemplu-didactic",
      source: "Reformulare construită pentru lecție, nu citat din roman.",
    },
    {
      id: "indirect-liber",
      title: "Stil indirect liber",
      text: "Gândul lui Ion este redat de narator la persoana a III-a, fără verb de declarație și fără ghilimele, dar păstrează întrebarea și tonul personajului. Cele două voci se suprapun.",
      tag: "citat",
      source: "Lecția, 5.6; romanul, cap. III.",
    },
    {
      id: "recunoastere",
      title: "Cum recunoști stilul indirect liber",
      text: "Caută trei semne: persoana a III-a, lipsa verbului de declarație și a ghilimelelor, păstrarea întrebărilor sau a cuvintelor personajului.",
      tag: "concept",
      source: "Lecția, 5.6; programa de examen (Anexa nr. 2 la OMEN nr. 4.923/2013), competența 2.2.",
    },
  ],
};
