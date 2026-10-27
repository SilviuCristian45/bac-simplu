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
  "o-scrisoare-pierduta": {
    textLabel: "Despre piesă",
    lead:
      "Comedie în patru acte despre o scrisoare de dragoste pierdută și folosită ca armă într-o campanie electorală de provincie. Personajele principale sunt prefectul Tipătescu, Zoe, Zaharia Trahanache și Nae Cațavencu.",
    facts: [
      { label: "Specie", value: "comedie", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "comedie de moravuri", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Specia: comedia" },
      { label: "Temă", value: "mecanismele luptei pentru putere într-o societate de provincie", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1884", note: "premiera, după o sursă secundară", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Caragiale este autor canonic, dar programa nu numește piesa; niciun subiect 2026 din proiect nu cere un text dramatic.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Piesa are patru acte (9, 14, 7 și 14 scene); totul pornește de la scrisoarea pierdută de Zoe.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Nu există barem oficial pentru text dramatic în proiect: planul eseului din lecție este o recomandare.", kind: "recomandare", section: "9. Planul unui eseu" },
    ],
  },
  luceafarul: {
    textLabel: "Despre poezie",
    lead:
      "Poem romantic de 98 de strofe despre iubirea dintre o fată de împărat și Luceafărul, care cere să devină muritor. La final, fata îl cheamă din nou, iar el răspunde rece.",
    facts: [
      { label: "Specie", value: "poem", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "romantism", note: "o încadrare posibilă", kind: "recomandare", section: "3.3. Trăsături ale romantismului" },
      { label: "Temă", value: "iubirea imposibilă și condiția geniului", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1883", note: "după nota transcrierii", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Eminescu este autor canonic; subiectele 2026 din proiect cer texte poetice de Bacovia sau Arghezi, deci verifică ce autor numește cerința.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "98 de strofe de câte patru versuri, cu rimă încrucișată (abab).", kind: "text", section: "2. Fișă rapidă" },
      { text: "Împărțirea în patru tablouri este cea din manuale: verific-o în manualul tău.", kind: "recomandare", section: "5.1. Cele patru tablouri" },
    ],
  },
  plumb: {
    textLabel: "Despre poezie",
    lead:
      "Poezie simbolistă de opt versuri, în două strofe, care deschide volumul din 1916. Cuvântul „plumb” apare de șase ori și leagă imaginile funerare.",
    facts: [
      { label: "Specie", value: "poezie", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "simbolism", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Trăsături ale simbolismului în poezie" },
      { label: "Temă", value: "singurătatea și moartea iubirii", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1916", note: "volumul Plumb", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Varianta 6 din 2026 cere un eseu despre un text poetic al lui Bacovia: „Plumb” se potrivește formatului.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Rimă îmbrățișată (abba) în ambele strofe.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Două trăsături bine arătate în text valorează mai mult decât multe doar enumerate.", kind: "recomandare", section: "3.2. Trăsături ale simbolismului în poezie" },
    ],
  },
  testament: {
    textLabel: "Despre poezie",
    lead:
      "Artă poetică de Tudor Arghezi, așezată după surse la începutul volumului „Cuvinte potrivite”. Lecția se bazează doar pe fragmentele verificate.",
    facts: [
      { label: "Specie", value: "artă poetică", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "modernism", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Trăsături care pot fi arătate" },
      { label: "Temă", value: "poezia ca moștenire spirituală și muncă asupra cuvântului", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1927", note: "volumul Cuvinte potrivite", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Varianta 6 pentru profilul umanist cere un eseu despre un text poetic al lui Arghezi.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Textul integral nu a fost consultat: citește poezia în manual înainte de a folosi lecția.", kind: "recomandare", section: "10. Surse și limite" },
      { text: "„Scara” în loc de „seara” este o ipoteză dintr-un articol, nu o corectură acceptată.", kind: "text", section: "5.2. O chestiune de text: „seara” sau „scara”?" },
    ],
  },
  "scrisoarea-iii": {
    textLabel: "Despre poezie",
    lead:
      "Poem despre întâlnirea dintre Mircea și sultanul Baiazid, urmat de o satiră a prezentului. Conține și un bilet în versuri scris de un fiu al domnului.",
    facts: [
      { label: "Specie", value: "poem", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "romantism, cu satiră", note: "o încadrare posibilă", kind: "recomandare", section: "3.3. Trăsături ale romantismului" },
      { label: "Temă", value: "contrastul dintre trecutul eroic și prezentul degradat", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1881", note: "după surse secundare", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Eminescu este autor canonic; subiectele 2026 din proiect cer texte poetice de Bacovia sau Arghezi, deci verifică cerința.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Patru părți: visul sultanului, dialogul, bătălia și biletul, satira.", kind: "text", section: "5.1. Cele patru părți" },
      { text: "Ultima parte folosește invective etnice, pe care lecția nu le reproduce.", kind: "recomandare", section: "Cum să folosești această lecție" },
    ],
  },
  "o-noapte-furtunoasa": {
    textLabel: "Despre piesă",
    lead:
      "Comedie în două acte despre gelozia lui Dumitrache și o încurcătură într-o noapte la mahala. Rică Venturiano intră în casa greșită, iar Veta și Chiriac sunt îndrăgostiți în ascuns.",
    facts: [
      { label: "Specie", value: "comedie", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "comedie de moravuri", note: "o încadrare posibilă", kind: "recomandare", section: "3.1. Specia și curentul" },
      { label: "Temă", value: "gelozia și aparențele", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1879", note: "după nota transcrierii", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Caragiale este autor canonic, dar programa nu numește piesa; niciun subiect 2026 din proiect nu cere un text dramatic.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Două acte, fiecare cu nouă scene; acțiunea durează o noapte.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Ultima replică rezumă ironia piesei: „Uite așa se orbește omul la necaz!”.", kind: "text", section: "6.5. Secvența 5: finalul (II, 9)" },
    ],
  },
  "in-contra-directiei-de-astazi": {
    textLabel: "Despre text",
    lead:
      "Studiu critic publicat în 1868, ca răspuns la o polemică cu revista „Transilvania”. Autorul critică imitarea formelor culturii occidentale fără fond.",
    facts: [
      { label: "Specie", value: "studiu critic", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "criticism junimist", note: "o încadrare posibilă", kind: "recomandare", section: "3.1. Ce spune programa" },
      { label: "Temă", value: "forma fără fond și neadevărul în cultură", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Neadevărul" },
      { label: "Apariție", value: "1868", note: "Convorbiri literare", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Programa trece criticismul junimist și textul critic între conținuturi, dar Subiectul al III-lea cere eseuri despre texte literare.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Exemple din text: Petru Maior, Lexiconul de la Buda, Tentamen criticum.", kind: "text", section: "6.1. Exemplele despre începuturi" },
      { text: "Planul din lecție este o recomandare pentru un eseu argumentativ, nu un barem oficial.", kind: "recomandare", section: "10. Plan pentru un eseu argumentativ despre idee" },
    ],
  },
  baltagul: {
    textLabel: "Despre roman",
    lead:
      "Roman despre Vitoria Lipan, care pornește în căutarea soțului dispărut și îi demască pe ucigași la un praznic. Lecția folosește surse secundare și nu conține citate din roman.",
    facts: [
      { label: "Specie", value: "roman", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "tradiționalism", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Cum este descris romanul în surse" },
      { label: "Temă", value: "dreptatea căutată după rânduială", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1930", note: "după surse secundare", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Varianta 5 din 2026 cere un text narativ de Sadoveanu sau Preda.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "16 capitole numerotate, fără titluri.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Romanul nu a fost citit pentru lecție: folosește citate din ediția ta.", kind: "recomandare", section: "12. Surse și limite" },
    ],
  },
  "eu-nu-strivesc-corola-de-minuni-a-lumii": {
    textLabel: "Despre poezie",
    lead:
      "Artă poetică de Lucian Blaga, așezată în fruntea volumului „Poemele luminii”. Lecția se bazează pe fragmente citate în trei surse secundare.",
    facts: [
      { label: "Specie", value: "artă poetică", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "modernism", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Trăsături care pot fi arătate" },
      { label: "Temă", value: "apărarea misterului lumii prin creație și iubire", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1919", note: "după fișa ISJ Dolj", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Blaga este autor canonic; subiectele 2026 din proiect cer texte poetice de Bacovia sau Arghezi, deci verifică cerința.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Titlul este și primul vers: „Eu nu strivesc corola de minuni a lumii”.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Textul integral nu a fost consultat: citește poezia în manual înainte de a folosi lecția.", kind: "recomandare", section: "11. Surse și limite" },
    ],
  },
  "ultima-noapte-de-dragoste": {
    textLabel: "Despre roman",
    lead:
      "Roman în două părți despre iubirea și gelozia lui Ștefan Gheorghidiu, urmate de experiența războiului. Povestirea este la persoana I, iar lecția folosește o sursă secundară.",
    facts: [
      { label: "Specie", value: "roman", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "roman psihologic și al experienței", note: "o încadrare posibilă", kind: "recomandare", section: "3.1. Ce spune programa" },
      { label: "Temă", value: "dragostea absolută, gelozia și războiul", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1930", note: "după o sursă secundară", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Varianta 4 din 2026 cere un text narativ de Rebreanu sau Camil Petrescu.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Două părți, ca în titlu: „Ultima noapte de dragoste” și „Întâia noapte de război”.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Romanul nu a fost citit pentru lecție: lecția nu conține citate din roman.", kind: "recomandare", section: "11. Surse și limite" },
    ],
  },
  iona: {
    textLabel: "Despre piesă",
    lead:
      "Piesă în patru tablouri despre un om înghițit de un pește, apoi de alții, care hotărăște să se întoarcă. Lecția folosește un articol de presă; piesa nu a fost citită.",
    facts: [
      { label: "Specie", value: "tragedie în patru tablouri", note: "subtitlul, după articol", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "dramă postbelică, parabolă", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Cum este descrisă piesa în sursă" },
      { label: "Temă", value: "omul prins în limite succesive", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1968", note: "revista Luceafărul, după articol", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Programa cere explicit „un text dramatic postbelic”, fără să numească piesa.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Piesa nu a fost citită pentru lecție: folosește citate din ediția ta.", kind: "recomandare", section: "12. Surse și limite" },
      { text: "Finalul rămâne ambiguu: ieșire, sinucidere sau gest simbolic.", kind: "interpretare", section: "6.4. Tabloul IV: hotărârea" },
    ],
  },
  "leoaica-tanara-iubirea": {
    textLabel: "Despre poezie",
    lead:
      "Poezie neomodernistă de Nichita Stănescu în care iubirea este o leoaică tânără care atacă. Lecția se bazează pe primele patru versuri, citate într-un articol.",
    facts: [
      { label: "Specie", value: "poezie", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "neomodernism", note: "o încadrare posibilă", kind: "recomandare", section: "3.1. Ce spune programa" },
      { label: "Temă", value: "iubirea ca forță care atacă și schimbă ființa", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1964", note: "volumul O viziune a sentimentelor, neconfirmat", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Programa nu folosește cuvântul „neomodernism”: verifică încadrarea în manual.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Cuvântul „față” încheie versurile 1, 3 și 4 din fragmentul verificat.", kind: "text", section: "5.1. Începutul" },
      { text: "Textul integral nu a fost consultat: citește poezia în manual înainte de a folosi lecția.", kind: "recomandare", section: "11. Surse și limite" },
    ],
  },
  "sincronismul-lovinescu": {
    textLabel: "Despre text",
    lead:
      "Fragment din „Istoria literaturii române contemporane”, în care Lovinescu definește sincronismul: civilizația românească s-a format prin importație. Lecția nu acoperă „Mutația valorilor estetice” în întregime.",
    facts: [
      { label: "Specie", value: "text critic", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "modernism interbelic", note: "o încadrare posibilă", kind: "recomandare", section: "3.1. Ce spune programa" },
      { label: "Temă", value: "sincronismul și imitația ca primă formă a originalității", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Sincronismul" },
      { label: "Apariție", value: "1926–1929", note: "anii din antetul transcrierii", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Programa trece modernismul și textul critic între conținuturi, dar Subiectul al III-lea cere eseuri despre texte literare.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Formula centrală: imitația este prima formă a originalității.", kind: "text", section: "4.2. Imitația și originalitatea" },
      { text: "Au fost citite doar fragmentul despre modernism, nu lucrarea „Mutația valorilor estetice”.", kind: "recomandare", section: "10. Surse și limite" },
    ],
  },
  "morometii-volumul-1": {
    textLabel: "Despre roman",
    lead:
      "Roman despre familia lui Ilie Moromete din Siliștea-Gumești, destrămată de taxe și de conflictul cu fiii. Lecția folosește surse secundare, fără citate verificate din roman.",
    facts: [
      { label: "Specie", value: "roman", kind: "text", section: "2. Fișă rapidă" },
      { label: "Încadrare", value: "roman postbelic, al lumii rurale", note: "o încadrare posibilă", kind: "recomandare", section: "3.2. Trăsături care pot fi arătate" },
      { label: "Temă", value: "destrămarea unei familii țărănești", note: "o formulare posibilă", kind: "interpretare", section: "4.1. Tema" },
      { label: "Apariție", value: "1955", note: "volumul I, după surse secundare", kind: "text", section: "2. Fișă rapidă" },
    ],
    essentials: [
      { text: "Programa cere „un roman scris între 1960–1980”, dar volumul I este din 1955: verifică cu profesorul.", kind: "oficial", section: "1. Ce trebuie să știi despre examen" },
      { text: "Scene principale: cina, Poiana lui Iocan, „fonciirea”, salcâmul, bătaia și fuga fiilor.", kind: "text", section: "2. Fișă rapidă" },
      { text: "Romanul nu a fost citit pentru lecție: folosește citate din ediția ta.", kind: "recomandare", section: "11. Surse și limite" },
    ],
  },
};
