import type { OperaSlug } from "@/lib/content/romana-opere-slugs";

/**
 * Text of the visual introduction shown at the top of each lesson (components/lesson/intro).
 * Everything here repeats, in short, what the lesson itself says and verifies; each item points
 * to the heading where the details and sources are. `section` is the exact heading text
 * (checked by lib/content/introduceri.test.mjs). Interpretations keep their label.
 */

/** Same kinds as the lesson labels: text = about the work, oficial = exam documents. */
export type IntroKind = "text" | "interpretare" | "oficial" | "recomandare";

export type IntroFact = {
  label: string;
  value: string;
  /** Short qualifier shown under the value (e.g. „după prefața ediției din 1967”). */
  note?: string;
  kind: IntroKind;
  section: string;
};

export type IntroEssential = {
  text: string;
  kind: IntroKind;
  section: string;
};

export type LessonIntroContent = {
  /** Lesson label used for facts about the text: „Despre roman”, „Despre nuvelă”, „Despre basm”. */
  textLabel: string;
  /** One or two sentences: what the work is about, without interpretation. */
  lead: string;
  /** Three or four essentials shown as chips. */
  facts: IntroFact[];
  /** Three to five ideas for „Ce trebuie să reții pentru BAC?”, most important first: only the first three are shown before „Vezi toate ideile”. */
  essentials: IntroEssential[];
};

export const LESSON_INTROS: Record<OperaSlug, LessonIntroContent> = {
  ion: {
    textLabel: "Despre roman",
    lead:
      "Roman despre satul Pripas, din Transilvania, în anii dinaintea Primului Război Mondial. Cele două părți, „Glasul pământului” și „Glasul iubirii”, urmăresc destinul lui Ion, fiul lui Alexandru Glanetașu.",
    facts: [
      { label: "Specie", value: "roman", kind: "text", section: "2. Fișă rapidă" },
      {
        label: "Curent",
        value: "realism",
        note: "o încadrare posibilă",
        kind: "recomandare",
        section: "3.2. Încadrări posibile",
      },
      {
        label: "Temă",
        value: "satul ardelean și pământul",
        note: "o formulare posibilă",
        kind: "interpretare",
        section: "4.2. Tema",
      },
      { label: "Apariție", value: "1920", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      {
        text: "Rebreanu este autor canonic, dar programa nu impune un roman anume: „Ion” este textul ales pentru lecție.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Eseul de la Subiectul al III-lea are minimum 400 de cuvinte și 30 de puncte: 18 pentru conținut și 12 pentru redactare.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Două părți, 13 capitole: primul se numește „Începutul”, ultimul „Sfârșitul”.",
        kind: "text",
        section: "2. Fișă rapidă",
      },
      {
        text: "Alege o singură încadrare și arat-o în text prin două trăsături.",
        kind: "recomandare",
        section: "3.2. Încadrări posibile",
      },
    ],
  },

  "moara-cu-noroc": {
    textLabel: "Despre nuvelă",
    lead:
      "Nuvelă despre Ghiță, un cizmar care ia în arendă cârciuma de la Moara cu noroc, și despre întâlnirea lui cu Lică Sămădăul.",
    facts: [
      { label: "Specie", value: "nuvelă", kind: "text", section: "2. Fișă rapidă" },
      {
        label: "Curent",
        value: "realism",
        note: "o încadrare posibilă",
        kind: "recomandare",
        section: "3.2. Încadrări posibile",
      },
      {
        label: "Temă",
        value: "dorința de înavuțire",
        note: "o formulare posibilă",
        kind: "interpretare",
        section: "4.1. Tema",
      },
      {
        label: "Apariție",
        value: "1881",
        note: "în volumul Novele din popor",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
    essentials: [
      {
        text: "Slavici este autor canonic; programa nu numește o operă anume a lui.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Pregătește nuvela pentru două tipuri de cerințe: particularitățile nuvelei și construcția personajului Ghiță.",
        kind: "recomandare",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "17 capitole fără titluri; nuvela începe direct cu vorbele bătrânei.",
        kind: "text",
        section: "6.3. Incipitul și finalul",
      },
      {
        text: "Narator la persoana a III-a, care cunoaște gândurile personajelor.",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
  },

  "povestea-lui-harap-alb": {
    textLabel: "Despre basm",
    lead:
      "Basm cult despre fiul cel mic al unui crai, care pleacă spre împărăția unchiului său, Verde-împărat. Pe drum ajunge sluga Spânului și trece prin probe până la nunta de la sfârșit.",
    facts: [
      { label: "Specie", value: "basm cult", kind: "text", section: "3. Încadrarea: basm cult" },
      {
        label: "Temă",
        value: "drumul de maturizare",
        note: "o formulare posibilă",
        kind: "interpretare",
        section: "4.1. Tema",
      },
      {
        label: "Apariție",
        value: "1877",
        note: "Convorbiri literare; unele surse dau 1878",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
    essentials: [
      {
        text: "Creangă este autor canonic; în 2026, Varianta 3 a cerut construcția unui personaj „într-un basm cult studiat”.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Basmul cult are un autor cunoscut, personaje individualizate, oralitate stilizată și umor. Arată fiecare trăsătură în text, nu doar o numi.",
        kind: "recomandare",
        section: "3.2. Basmul popular și basmul cult",
      },
      {
        text: "Pregătește ambele cerințe: construcția personajului Harap-Alb și particularitățile basmului cult.",
        kind: "recomandare",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Basmul nu are capitole: acțiunea se desface în episoade legate prin formule.",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
  },

  "alexandru-lapusneanul": {
    textLabel: "Despre nuvelă",
    lead:
      "Nuvelă istorică despre a doua domnie a lui Alexandru Lăpușneanul în Moldova, de la întoarcerea în țară până la moartea lui.",
    facts: [
      { label: "Specie", value: "nuvelă istorică", kind: "text", section: "2. Fișă rapidă" },
      {
        label: "Curent",
        value: "romantism",
        note: "o încadrare posibilă",
        kind: "recomandare",
        section: "3.2. Încadrări posibile",
      },
      {
        label: "Temă",
        value: "puterea prin teroare",
        note: "o formulare posibilă",
        kind: "interpretare",
        section: "4.1. Tema",
      },
      {
        label: "Apariție",
        value: "1840",
        note: "în revista Dacia literară",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
    essentials: [
      {
        text: "Negruzzi nu este autor canonic pentru 2026 și 2027: lecția este material suplimentar, nu un eseu „sigur” pentru Subiectul al III-lea.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Programa cere însă nuvela, perioada pașoptistă și romantismul, iar un fragment poate apărea ca text la prima vedere.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Patru capitole numerotate, fiecare cu un motto: o replică dintr-o scenă a capitolului.",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
  },

  "enigma-otiliei": {
    textLabel: "Despre roman",
    lead:
      "Roman despre Felix Sima, un orfan venit din Iași în casa tutorelui său, moș Costache, din strada Antim, și despre Otilia, într-o familie care așteaptă moștenirea bătrânului.",
    facts: [
      { label: "Specie", value: "roman", kind: "text", section: "2. Fișă rapidă" },
      {
        label: "Curent",
        value: "realism",
        note: "o încadrare posibilă; „balzacian” e o etichetă a criticii",
        kind: "recomandare",
        section: "3.2. Încadrări posibile",
      },
      {
        label: "Temă",
        value: "familia și lupta pentru moștenire",
        note: "o formulare posibilă",
        kind: "interpretare",
        section: "4.1. Tema",
      },
      {
        label: "Apariție",
        value: "1938",
        note: "după prefața ediției din 1967",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
    essentials: [
      {
        text: "Călinescu este autor canonic, dar programa nu numește romanul: „Enigma Otiliei” este textul ales pentru lecție.",
        kind: "oficial",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "Otilia nu se căsătorește cu Felix: pleacă cu Pascalopol.",
        kind: "text",
        section: "8.5. Greșeli de evitat",
      },
      {
        text: "Pregătește romanul pentru particularitățile unui text narativ și pentru construcția unui personaj (Otilia sau Felix).",
        kind: "recomandare",
        section: "1. Ce trebuie să știi despre examen",
      },
      {
        text: "20 de capitole numerotate, fără titluri; acțiunea începe în iulie 1909.",
        kind: "text",
        section: "2. Fișă rapidă",
      },
    ],
  },
};
