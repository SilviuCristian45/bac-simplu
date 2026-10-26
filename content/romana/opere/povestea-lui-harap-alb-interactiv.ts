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
 * Textele experiențelor interactive din lecția „Povestea lui Harap-Alb”
 * (content/romana/opere/povestea-lui-harap-alb.mdx).
 * Reguli: fiecare enunț provine din lecție (secțiunea e indicată în „source”), acțiunea și citatele au fost
 * verificate pe text în două ediții (vezi docs/rapoarte/audit-povestea-lui-harap-alb-2026-10-25.md).
 * Faptele din basm sunt marcate „fapt-basm”, interpretările „interpretare”, conceptele „concept”.
 */

// ── 2. Fișă rapidă: harta drumului ──────────────────────────────────────────────────────────

export const drumFigure: FigureContent = {
  title: "Drumul lui Harap-Alb, stație cu stație",
  summary:
    "Basmul nu are capitole, dar are stații clare: casa craiului, codrul, fântâna, curtea lui Verde-împărat, ostrovul Sfintei Duminici, curtea lui Roș și întoarcerea. Parcurge-le în ordine.",
  note: "Harta este schematică: basmul nu dă locuri reale și nu măsoară distanțe (vezi 6.8). Numerele arată doar ordinea stațiilor.",
  steps: [
    {
      id: "casa-craiului",
      title: "Acasă: podul și ursul",
      text: "Craiul își încearcă feciorii: se îmbracă într-o piele de urs și se pune sub un pod. Cel mare și cel mijlociu se întorc speriați. Cel mic, cu calul ales după sfatul babei, dă năvală asupra ursului și își recunoaște tatăl. Primește sfatul să se ferească de omul roș și, mai ales, de cel spân.",
      tag: "fapt-basm",
      source: "Lecția, 5.1; basmul, începutul.",
    },
    {
      id: "codrul",
      title: "În codru: Spânul",
      text: "În codru, fiul de crai se întâlnește de trei ori cu un om spân. Primele două ori îl refuză. Rătăcit, se gândește: „asta-i țara spânilor” și, într-un târziu, îl ia slugă.",
      tag: "fapt-basm",
      source: "Lecția, 5.1 și 5.3; basmul, drumul spre împărăție.",
    },
    {
      id: "fantana",
      title: "Fântâna",
      text: "Spânul îl momește în fântână, pune capacul și îl silește să jure pe paloș că i se va supune. Îi ia banii, armele și scrisoarea și îi spune că de acum îl cheamă Harap-Alb.",
      tag: "fapt-basm",
      source: "Lecția, 5.3; basmul, fântâna.",
    },
    {
      id: "curtea-lui-verde",
      title: "La Verde-împărat",
      text: "La curtea lui Verde-împărat, Spânul trece drept nepotul împăratului, iar Harap-Alb îi slujește. De aici Spânul îl trimite, pe rând, în trei locuri primejdioase, ca să scape de el.",
      tag: "fapt-basm",
      source: "Lecția, 5.2; basmul, sosirea la curtea lui Verde.",
    },
    {
      id: "ostrovul",
      title: "Ostrovul Sfintei Duminici",
      text: "Pentru sălățile din Grădina Ursului și pentru pielea și capul cerbului, Harap-Alb ajunge, zburând cu calul, la casa Sfintei Duminici, pe un ostrov din mijlocul mării. Ea îl găzduiește și îl ajută.",
      tag: "fapt-basm",
      source: "Lecția, 5.2; basmul, primele două probe ale Spânului.",
    },
    {
      id: "curtea-lui-ros",
      title: "Spre Roș și la Roș",
      text: "Spre curtea lui Roș, Harap-Alb își face tovarăși: furnicile, albinele și cinci ființe fabuloase. La Roș urmează șase încercări. Ultima o cere fata împăratului: trei smicele de măr dulce, apă vie și apă moartă, de unde se bat munții în capete.",
      tag: "fapt-basm",
      source: "Lecția, 5.2; basmul, a treia probă a Spânului.",
    },
    {
      id: "intoarcerea",
      title: "Întoarcerea: moartea și învierea",
      text: "La curtea lui Verde, fata lui Roș îl dezvăluie pe Harap-Alb drept adevăratul nepot, iar Spânul îi taie capul. Calul îl ridică pe Spân în înaltul cerului și îl lasă să cadă. Fata îl învie pe Harap-Alb, iar basmul se încheie cu nunta.",
      tag: "fapt-basm",
      source: "Lecția, 5.5; basmul, sfârșitul.",
    },
  ],
};

// ── 3.3. Trăsături ale basmului în „Povestea lui Harap-Alb” ─────────────────────────────────

export const trasaturiBasmQuiz: QuizContent = {
  title: "Ce trăsătură ilustrează exemplul?",
  summary:
    "La examen nu e de ajuns să numești o trăsătură: trebuie să arăți unde se vede în text. Recunoaște trăsătura pe care o ilustrează fiecare exemplu.",
  note: "Clasificarea unor exemple este o interpretare a lecției: unele exemple pot ilustra mai multe trăsături. Alege-o pe cea mai potrivită.",
  choices: [
    { id: "formula", label: "Formulă a basmului" },
    { id: "numar", label: "Număr simbolic sau hiperbolă" },
    { id: "oralitate", label: "Oralitate" },
    { id: "umanizat", label: "Fantastic umanizat" },
    { id: "real", label: "Ieșire din lumea basmului" },
  ],
  items: [
    {
      id: "mediana",
      prompt: "„cuvântul din poveste, înainte mult mai este”",
      attribution: "naratorul, la fiecare nou drum",
      correct: "formula",
      explanation:
        "Este o formulă mediană: apare în mijlocul acțiunii, ca să lege două episoade și să marcheze trecerea la drumul următor. Se repetă de mai multe ori în basm.",
      source: "Lecția, 3.3 și 6.5.",
    },
    {
      id: "noua",
      prompt: "„peste nouă mări, peste nouă țări și peste nouă ape mari”",
      attribution: "naratorul, la sosirea Spânului și a lui Harap-Alb la împărăție",
      correct: "numar",
      explanation:
        "Numărul nouă (multiplu al lui trei) arată distanța în chip hiperbolic. Locul nu e precizat geografic: contează că drumul e lung și greu.",
      source: "Lecția, 3.3 și 6.8.",
    },
    {
      id: "gerila",
      prompt: "„Ia tacă-ți gura, măi Gerilă!”",
      attribution: "tovarășii lui Harap-Alb, noaptea, în casa de aramă",
      correct: "umanizat",
      explanation:
        "Ființe cu însușiri fabuloase se ceartă ca niște oameni obișnuiți, cu replici de zi cu zi. Fantasticul este adus aproape de lumea cunoscută.",
      source: "Lecția, 3.3 și 7.5.",
    },
    {
      id: "proverb",
      prompt: "Vorba ceea: „Frica păzește bostănăria.”",
      attribution: "Spânul, către împăratul Verde",
      correct: "oralitate",
      explanation:
        "Proverbul introdus prin „vorba ceea” dă vorbirii aspect de limbă vorbită. Spânul îl folosește ca să-și justifice asprimea față de Harap-Alb.",
      source: "Lecția, 3.3 și 6.5.",
    },
    {
      id: "adresare",
      prompt: "„Dar ia să nu ne depărtăm cu vorba și să încep a depăna firul poveștii.”",
      attribution: "naratorul, la începutul basmului",
      correct: "oralitate",
      explanation:
        "Naratorul vorbește ca un povestitor în fața unor ascultători, își dă seama că a luat-o pe alături și revine la fir. Așa se creează impresia de poveste spusă, nu scrisă.",
      source: "Lecția, 6.4 și 6.5.",
    },
    {
      id: "final",
      prompt: "„Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”",
      attribution: "naratorul, ultima frază a basmului",
      correct: "real",
      explanation:
        "După nunta fabuloasă, naratorul se întoarce în lumea reală, a „noastră”, printr-o comparație ironică. Este o ieșire din convenția basmului; cum o interpretezi (critică socială, umor) rămâne la alegerea ta, dacă o argumentezi.",
      source: "Lecția, 6.3 și 6.5.",
    },
  ],
};

// ── 4.4. Fapt, citat sau interpretare? ──────────────────────────────────────────────────────

export const faptInterpretareQuiz: QuizContent = {
  title: "Fapt din text sau interpretare?",
  summary:
    "În eseu, o parte din puncte vine din felul în care arăți faptele din text și le interpretezi. Hotărăște pentru fiecare enunț dacă e un fapt din basm sau o interpretare.",
  note: "Un fapt se poate verifica în text. O interpretare e o lectură argumentată: poate fi susținută cu fapte, dar nu e un fapt.",
  choices: [
    { id: "fapt", label: "Fapt din text" },
    { id: "interpretare", label: "Interpretare" },
  ],
  items: [
    {
      id: "fantana-fapt",
      prompt: "Spânul îl închide pe fiul de crai în fântână.",
      correct: "fapt",
      explanation: "Se verifică în text: Spânul „face tranc! capacul pe gura fântânii” și îi cere jurământul.",
      source: "Lecția, 5.3.",
    },
    {
      id: "fantana-simbol",
      prompt: "Fântâna simbolizează trecerea fiului de crai într-o altă condiție.",
      correct: "interpretare",
      explanation:
        "Textul nu spune că fântâna este un simbol. Lectura simbolică se sprijină pe fapte: după fântână, eroul își pierde identitatea și primește alt nume.",
      source: "Lecția, 5.3.",
    },
    {
      id: "nume",
      prompt: "Harap-Alb primește numele de la Spân.",
      correct: "fapt",
      explanation: "Spânul îi spune: „De-acum înainte să știi că te cheamă Harap-Alb; aista ți-i numele, și altul nu.”",
      source: "Lecția, 4.2 și 5.3.",
    },
    {
      id: "rau-necesar",
      prompt: "Spânul este un „rău necesar”.",
      correct: "interpretare",
      explanation:
        "Formularea este o lectură. Textul o sprijină doar în parte: calul spune că „unii ca aceștia sunt trebuitori pe lume câteodată, pentru că fac pe oameni să prindă la minte”.",
      source: "Lecția, 7.3.",
    },
    {
      id: "cinci",
      prompt: "Gerilă, Flămânzilă, Setilă, Ochilă și Păsări-Lăți-Lungilă merg împreună cu Harap-Alb la curtea lui Roș.",
      correct: "fapt",
      explanation: "Harap-Alb îi întâlnește pe rând, îi ia cu el, iar toți ajung la împărăția lui Roș.",
      source: "Lecția, 7.5.",
    },
    {
      id: "rasplata",
      prompt: "Basmul arată că binele făcut este răsplătit.",
      correct: "interpretare",
      explanation:
        "Este o idee despre sensul basmului, nu un fapt. O poți susține cu episoade (furnicile, albinele, banul dat babei), dar este o lectură, iar altcineva ar putea sublinia și răutatea care nu e pedepsită imediat.",
      source: "Lecția, 4.3.",
    },
  ],
};

// ── 5.2. Probele ────────────────────────────────────────────────────────────────────────────

export const probeContent: DetailExplorerContent = {
  title: "Diagrama probelor",
  summary:
    "Drumul lui Harap-Alb este un lanț de încercări. Alege o încercare și vezi ce i se cere, cine îl ajută, ce calitate iese în evidență și ce arată ea despre drum.",
  note: "Provocarea și ajutorul sunt fapte din basm. Calitatea și rolul în drum sunt interpretări ale lecției. Unele încercări sunt greșeli ale eroului, nu probe puse de cineva (de exemplu, fântâna).",
  prompt: "Alege o încercare:",
};

export const probeItems: DetailItem[] = [
  {
    id: "ursul",
    group: "Înainte de drum",
    label: "Ursul de sub pod",
    fields: [
      { label: "Provocarea", text: "Craiul, îmbrăcat în piele de urs, își încearcă feciorii pe rând. Cei doi mai mari se întorc din drum.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Mezinul a primit sfatul babei: calul, armele și hainele cu care fusese tatăl lui mire.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Hotărârea de a merge mai departe, chiar dacă se teme.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Pornirea nu e un dar, ci un prag: doar mezinul îl trece.", tag: "interpretare" },
    ],
    source: "Lecția, 5.1; basmul, începutul.",
  },
  {
    id: "spanul-codru",
    group: "Înainte de drum",
    label: "Cele trei întâlniri cu Spânul",
    fields: [
      { label: "Provocarea", text: "Tatăl i-a spus să se ferească de omul roș, mai ales de cel spân. Spânul îi iese în cale de trei ori.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Niciunul: eroul hotărăște singur, deși tatăl îl sfătuise.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Lipsa de experiență: ia aparența drept adevăr.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Prima lecție vine din greșeală: sfatul părintelui contează.", tag: "interpretare" },
    ],
    source: "Lecția, 5.3.",
  },
  {
    id: "fantana",
    group: "Înainte de drum",
    label: "Fântâna",
    fields: [
      { label: "Provocarea", text: "Spânul îl momește să coboare, apoi închide capacul și îi cere jurământ.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Niciunul. Eroul se supune ca să nu moară.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Naivitatea, numită de narator: „boboc în felul său la trebi de aieste”.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Greșeala schimbă identitatea eroului și deschide șirul probelor.", tag: "interpretare" },
    ],
    source: "Lecția, 5.3.",
  },
  {
    id: "salatile",
    group: "Probele Spânului",
    label: "Sălățile din Grădina Ursului",
    fields: [
      { label: "Provocarea", text: "Spânul vrea sălăți din Grădina Ursului, unde, spune împăratul, rar scapă cineva cu viață.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Sfânta Duminică toarnă în fântâna grădinii o băutură cu somnoroasă, lapte și miere: ursul bea și adoarme. Apoi îi spune lui Harap-Alb să se îmbrace în pielea de urs.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Ascultarea sfatului primit.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Milostenia de la început se întoarce ca ajutor: Sfânta Duminică este baba căreia îi dăduse un ban.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2 și 5.4.",
  },
  {
    id: "cerbul",
    group: "Probele Spânului",
    label: "Pielea și capul cerbului",
    fields: [
      { label: "Provocarea", text: "Spânul cere pielea cerbului bătută cu pietre scumpe, cu cap cu tot. Privirea cerbului ucide.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Sfânta Duminică îi dă obrăzarul și sabia lui Statu-Palmă-Barbă-Cot și sapă groapa în care se ascunde.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Stăpânirea de sine: capul cerbului îl strigă, iar Harap-Alb „tăcea molcum”.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Ajutorul nu înlocuiește efortul: tot el trebuie să lovească și să tacă.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2.",
  },
  {
    id: "fata-ros",
    group: "Probele Spânului",
    label: "Fata împăratului Roș",
    fields: [
      { label: "Provocarea", text: "După ce o pasăre măiastră vorbește la ospăț, Spânul îi cere lui Harap-Alb să-i aducă fata împăratului Roș.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Calul, care cunoaște drumul, și tovarășii pe care eroul îi întâlnește pe cale.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Bunătatea și deschiderea față de ceilalți.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Proba cea mai lungă schimbă relațiile eroului: din slugă singură, ajunge în fruntea unui grup.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2 și 7.5.",
  },
  {
    id: "furnici",
    group: "Pe drumul spre Roș",
    label: "Furnicile și albinele",
    fields: [
      { label: "Provocarea", text: "O nuntă de furnici trece podul, iar eroul ar putea trece peste ele. Un roi de albine nu are unde să se așeze.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Harap-Alb trece râul prin apă, ca să nu strivească furnicile, și face un adăpost albinelor. Crăiasa fiecăruia îi dă câte o aripă, cu care să o cheme la nevoie.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Bunătatea față de cei mici.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Binele făcut fără interes se întoarce, mai târziu, ca ajutor.", tag: "interpretare" },
    ],
    source: "Lecția, 5.4; basmul, drumul spre Roș.",
  },
  {
    id: "cinci",
    group: "Pe drumul spre Roș",
    label: "Cei cinci tovarăși",
    fields: [
      { label: "Provocarea", text: "Harap-Alb întâlnește pe rând pe Gerilă, Flămânzilă, Setilă, Ochilă și Păsări-Lăți-Lungilă. Fiecare îi spune: „unde mergi, fără mine n-ai să poți face nimica” (în forme apropiate).", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Harap-Alb îi primește de fiecare dată în tovărășie.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Capacitatea de a primi pe alții și de a face echipă, fără să se lase păcălit de înfățișarea lor ciudată.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Fiecare însușire exagerată (frig, foame, sete, vedere, lungime) rezolvă o încercare.", tag: "interpretare" },
    ],
    source: "Lecția, 7.5.",
  },
  {
    id: "casa-arama",
    group: "Probele lui Roș",
    label: "Casa de aramă",
    fields: [
      { label: "Provocarea", text: "Tovarășii sunt închiși în casa de aramă încinsă, ca să ardă până dimineață.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Gerilă suflă de trei ori și casa rămâne nici fierbinte, nici rece. Pe urmă o umple de brumă.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Priceperea celor din grup de a-și folosi darul.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Roș încearcă să scape de pețitori, nu doar să-i pună la încercare.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2.",
  },
  {
    id: "ospat",
    group: "Probele lui Roș",
    label: "Ospățul",
    fields: [
      { label: "Provocarea", text: "Roș le dă 12 harabale cu pâine, 12 ialovițe fripte și 12 buți cu vin: să vadă cât pot mânca și bea.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Flămânzilă înghite mâncarea, iar Setilă bea vinul, până nu mai rămâne nimic.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Hiperbola și umorul: o încercare pusă ca amenințare se termină ca o scenă comică.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Însușirea „urâtă” a unui tovarăș (lăcomia) devine, aici, un avantaj.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2 și 6.6.",
  },
  {
    id: "mac",
    group: "Probele lui Roș",
    label: "Macul și nisipul",
    fields: [
      { label: "Provocarea", text: "Roș amestecă o mierță de mac cu una de nisip și cere să fie despărțite până dimineață.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Harap-Alb dă foc aripii de furnică, iar furnicile aleg macul de nisip.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Memoria: își amintește de aripa primită.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Binele făcut mai devreme (furnicile) rezolvă acum încercarea.", tag: "interpretare" },
    ],
    source: "Lecția, 5.4.",
  },
  {
    id: "strajuire",
    group: "Probele lui Roș",
    label: "Străjuirea fetei",
    fields: [
      { label: "Provocarea", text: "Fata trebuie păzită toată noaptea. Dacă a doua zi nu mai e în odaie, eroii pierd.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Ochilă o vede când se preface în păsărică, iar Păsări-Lăți-Lungilă o prinde și o aduce înapoi.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Rolul grupului: însușiri diferite se completează.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Meritul revine în mare parte tovarășilor, iar Ochilă o spune: „dacă nu eram eu și cu Păsărilă, ce făceați voi acum?”", tag: "interpretare" },
    ],
    source: "Lecția, 5.2.",
  },
  {
    id: "fata-adevarata",
    group: "Probele lui Roș",
    label: "Fata adevărată",
    fields: [
      { label: "Provocarea", text: "Roș îi pune în față două fete, la fel îmbrăcate, și cere să o recunoască pe a lui.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Crăiasa albinelor, chemată cu aripa, zboară pe obrazul fetei adevărate, care se apără cu năframa.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Răbdarea și încrederea în ajutorul primit.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Al doilea gest bun (albinele) se întoarce ca ajutor, ca și primul (furnicile).", tag: "interpretare" },
    ],
    source: "Lecția, 5.4.",
  },
  {
    id: "smicele",
    group: "Probele lui Roș",
    label: "Smicelele, apa vie și apa moartă",
    fields: [
      { label: "Provocarea", text: "Fata cere trei smicele de măr dulce, apă vie și apă moartă, de unde se bat munții în capete. Calul și turturica ei pornesc întrecere.", tag: "fapt-basm" },
      { label: "Ajutorul", text: "Calul o oprește pe turturică și îi ia lucrurile cu măgulelile și cu un gest iute.", tag: "fapt-basm" },
      { label: "Calitatea pusă în evidență", text: "Isteția calului, nu a eroului.", tag: "interpretare" },
      { label: "Ce arată despre drum", text: "Obiectele aduse vor fi cele care îl învie pe Harap-Alb: finalul e pregătit de o încercare aparent obișnuită.", tag: "interpretare" },
    ],
    source: "Lecția, 5.2 și 5.5.",
  },
];

// ── 6.2. Momentele subiectului ──────────────────────────────────────────────────────────────

export const momenteFigure: FigureContent = {
  title: "Momentele subiectului în „Povestea lui Harap-Alb”",
  summary:
    "O împărțire posibilă a acțiunii în cinci momente. Urmărește cum se ridică miza: de la scrisoare la probe, apoi la confruntarea finală.",
  note: "Împărțirea pe momente este o interpretare; sursele diferă în privința intrigii și a punctului culminant. Într-un eseu, justifică împărțirea pe care o alegi.",
  steps: [
    {
      id: "expozitiune",
      title: "Expozițiunea",
      text: "Craiul, cu trei feciori, și fratele lui, Verde-împărat, fără feciori, trăiesc la capete opuse ale pământului și nu s-au văzut de mult. Naratorul pregătește povestea: „Dar ia să nu ne depărtăm cu vorba și să încep a depăna firul poveștii.”",
      tag: "interpretare",
      source: "Lecția, 6.2; basmul, primele două paragrafe.",
    },
    {
      id: "intriga",
      title: "Intriga",
      text: "Verde-împărat, bătrân și bolnav, scrie fratelui său să-i trimită „pe cel mai vrednic dintre nepoți”, ca să-l lase împărat. Scrisoarea pune în mișcare cei trei feciori și, odată cu ei, acțiunea.",
      tag: "interpretare",
      source: "Lecția, 6.2; basmul, scrisoarea lui Verde-împărat.",
    },
    {
      id: "desfasurare",
      title: "Desfășurarea acțiunii",
      text: "Cea mai lungă parte: ursul de sub pod, sfatul Sfintei Duminici, calul, Spânul, fântâna, cele trei probe ale Spânului, drumul cu ajutoarele, probele lui Roș și întoarcerea la Verde.",
      tag: "interpretare",
      source: "Lecția, 5.2 și 6.2.",
    },
    {
      id: "culminant",
      title: "Punctul culminant",
      text: "Cea mai încordată clipă este confruntarea de la curtea lui Verde. Fata lui Roș îl respinge pe Spân și spune că Harap-Alb este adevăratul nepot, iar Spânul îi taie capul. Alții văd punctul culminant în probele lui Roș; alegerea trebuie argumentată.",
      tag: "interpretare",
      source: "Lecția, 5.5 și 6.2.",
    },
    {
      id: "deznodamant",
      title: "Deznodământul",
      text: "Calul îl ridică pe Spân în înaltul cerului și îl lasă să cadă. Fata pune capul la loc și îl învie pe Harap-Alb. Urmează nunta și formula finală.",
      tag: "interpretare",
      source: "Lecția, 5.5 și 6.3.",
    },
  ],
};

// ── 6.5. Formulele basmului și oralitatea ───────────────────────────────────────────────────

export const formuleContent: DetailExplorerContent = {
  title: "Formule narative și oralitate",
  summary:
    "Basmul lui Creangă sună ca o poveste spusă cu voce tare. Alege un procedeu și vezi un exemplu din text, în ce context apare și ce efect are.",
  note: "Exemplele sunt citate din basm (verificate în două ediții). Efectele sunt interpretări ale lecției.",
  prompt: "Alege un procedeu:",
};

export const formuleItems: DetailItem[] = [
  {
    id: "initiala",
    label: "Formula inițială",
    fields: [
      { label: "Exemplu", text: "„Amu cică era odată într-o țară un crai, care avea trei feciori.”", tag: "citat" },
      { label: "Context", text: "Prima frază a basmului. „Cică” aduce în față un narator care spune ce a auzit.", tag: "fapt-basm" },
      { label: "Efect", text: "Formula „era odată” este cea a basmului popular, dar intrarea „amu cică” îi dă ton vorbit și familiar.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3 și 6.5.",
  },
  {
    id: "mediana",
    label: "Formula mediană",
    fields: [
      { label: "Exemplu", text: "„Dumnezeu să ne ție, că cuvântul din poveste, înainte mult mai este.”", tag: "citat" },
      { label: "Context", text: "Apare ori de câte ori acțiunea trece la un nou drum: spre împărăție, spre Sfânta Duminică, spre Roș.", tag: "fapt-basm" },
      { label: "Efect", text: "Leagă episoadele, dă ritm drumului și amintește că povestea nu s-a terminat.", tag: "interpretare" },
    ],
    source: "Lecția, 6.5.",
  },
  {
    id: "finala",
    label: "Formula finală",
    fields: [
      { label: "Exemplu", text: "„Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”", tag: "citat" },
      { label: "Context", text: "Ultima frază, după nuntă („Și a ținut veselia ani întregi, și acum mai ține încă”).", tag: "fapt-basm" },
      { label: "Efect", text: "Naratorul iese din lumea basmului și compară cu lumea „noastră”. Poate fi citită ca ironie sau ca observație socială.", tag: "interpretare" },
    ],
    source: "Lecția, 6.3.",
  },
  {
    id: "adresare",
    label: "Adresarea către ascultători",
    fields: [
      { label: "Exemplu", text: "„Eu sunt dator să spun povestea și vă rog să ascultați.”", tag: "citat" },
      { label: "Context", text: "Naratorul se oprește din povestit, după ce a vorbit despre cei cinci tovarăși ai lui Harap-Alb, și vorbește cititorilor ca unor ascultători.", tag: "fapt-basm" },
      { label: "Efect", text: "Creează impresia unui povestitor de față cu publicul și arată că naratorul nu e doar un martor neutru.", tag: "interpretare" },
    ],
    source: "Lecția, 6.4.",
  },
  {
    id: "proverbe",
    label: "Proverbe și zicători",
    fields: [
      { label: "Exemplu", text: "Setilă: „Vorba ceea: «Dă-i cu cinstea, să piară rușinea.»”", tag: "citat" },
      { label: "Context", text: "Proverbele apar în gura personajelor și a naratorului, de obicei după „vorba ceea”.", tag: "fapt-basm" },
      { label: "Efect", text: "Dau vorbirii savoare populară și caracterizează: aceeași formă (proverbul) poate fi comică în gura unui tovarăș lacom și cinică în gura Spânului.", tag: "interpretare" },
    ],
    source: "Lecția, 6.5 și 6.6.",
  },
  {
    id: "versuri",
    label: "Versuri și formule de zbor",
    fields: [
      { label: "Exemplu", text: "„În înaltul cerului, / Văzduhul pământului; / Pe deasupra codrilor, / Peste vârful munților…”", tag: "citat" },
      { label: "Context", text: "Calul își anunță zborul în versuri, înainte de călătoria spre Sfânta Duminică și spre Roș.", tag: "fapt-basm" },
      { label: "Efect", text: "Ritmul și rima dau zborului o formă de cântec, ca în poveștile spuse cu voce.", tag: "interpretare" },
    ],
    source: "Lecția, 6.5.",
  },
  {
    id: "numere",
    label: "Numere simbolice și hiperbole",
    fields: [
      { label: "Exemplu", text: "„peste nouă mări, peste nouă țări și peste nouă ape mari”; „trei feciori”; „cele trei smicele”.", tag: "citat" },
      { label: "Context", text: "Numărul trei revine (trei feciori, trei întâlniri cu Spânul, trei probe ale Spânului, trei smicele), iar distanțele sunt exagerate.", tag: "fapt-basm" },
      { label: "Efect", text: "Dau basmului tipar și ritm; hiperbola arată că drumul e lung și greu, fără să spună locuri reale.", tag: "interpretare" },
    ],
    source: "Lecția, 3.3 și 6.8.",
  },
  {
    id: "dialog",
    label: "Dialogul colocvial și interjecțiile",
    fields: [
      { label: "Exemplu", text: "„Ia tacă-ți gura, măi Gerilă!”; „numai iaca ce le iese înainte un om spân”; „face tranc! capacul”", tag: "citat" },
      { label: "Context", text: "Personajele vorbesc între ele ca niște oameni obișnuiți, chiar și cele fantastice, iar naratorul folosește interjecții și expresii vorbite.", tag: "fapt-basm" },
      { label: "Efect", text: "Individualizează personajele și le apropie de cititor. Fantasticul este umanizat, iar umorul vine din contrastul dintre ființa fabuloasă și vorba de zi cu zi.", tag: "interpretare" },
    ],
    source: "Lecția, 6.6 și 7.5.",
  },
];

// ── 7.2. Evoluția lui Harap-Alb ─────────────────────────────────────────────────────────────

export const evolutieFigure: FigureContent = {
  title: "Treptele maturizării lui Harap-Alb",
  summary:
    "Harap-Alb nu este perfect de la început. Urcă treaptă cu treaptă: din fiul de crai rușinat, prin greșeală și slujire, până la eroul care primește împărăția.",
  note: "Ordinea treptelor urmărește acțiunea din basm. Etichetele („boboc”, „încercat” etc.) și ideea de maturizare sunt interpretări ale lecției (7.2).",
  steps: [
    {
      id: "mezinul",
      title: "Mezinul rușinat și milos",
      text: "După cuvintele aspre ale tatălui, fiul cel mic, „făcându-se atunci roș cum îi gotca”, plânge în grădină. Fermecat de vorbele unei bătrâne, îi dă un ban: un gest bun, făcut înainte de orice probă.",
      tag: "fapt-basm",
      source: "Lecția, 7.2; basmul, începutul.",
    },
    {
      id: "boboc",
      title: "Boboc la trebi de aieste",
      text: "Uită sfatul tatălui să se ferească de spân și coboară în fântână. Naratorul îl numește „boboc în felul său la trebi de aieste”. Greșeala îl costă libertatea.",
      tag: "fapt-basm",
      source: "Lecția, 5.3 și 7.2.",
    },
    {
      id: "sluga",
      title: "Slugă care își ține jurământul",
      text: "Își pierde numele, banii și armele, dar nu își calcă jurământul. Răspunde: „Da, stăpâne”, și duce la bun sfârșit tot ce i se cere. Alte personaje îi recunosc însă meritele, de pildă împăratul Verde: „o slugă așa de vrednică și credincioasă”.",
      tag: "fapt-basm",
      source: "Lecția, 7.2.",
    },
    {
      id: "incercat",
      title: "Încercat, dar nu fără șovăială",
      text: "În fața probelor are momente de deznădejde: „mai bine moarte de o mie de ori!” Sfânta Duminică îl mustră pentru că e slab de înger și îi spune să mai rabde. Totuși merge mai departe, cu ajutor.",
      tag: "fapt-basm",
      source: "Lecția, 7.2.",
    },
    {
      id: "prieten",
      title: "Prieten care înțelege pe ceilalți",
      text: "Nu strivește furnicile, face adăpost albinelor și îi ia cu el pe cei cinci tovarăși, fără să se lase condus de aparențe. Binele făcut se întoarce, la nevoie, ca ajutor.",
      tag: "interpretare",
      source: "Lecția, 5.4 și 7.2.",
    },
    {
      id: "fidel",
      title: "Îndrăgostit, dar fidel jurământului",
      text: "Pe drumul de întoarcere, „pe fata împăratului Roș mai nu-i venea s-o ducă, fiind nebun de dragostea ei”. O duce totuși la împărăție. Șovăiala este cea mai puternică din tot basmul și arată că eroul nu este un personaj fără defecte.",
      tag: "fapt-basm",
      source: "Lecția, 6.7 și 7.2.",
    },
    {
      id: "inviat",
      title: "Mort și înviat: împărat",
      text: "Spânul îi taie capul, iar fata îl învie cu smicelele, apa moartă și apa vie. Eroul primește binecuvântarea lui Verde „și împărăția totodată”. Moartea simbolică de la fântână (a identității) se încheie prin învierea de la sfârșit.",
      tag: "fapt-basm",
      source: "Lecția, 5.5 și 7.2.",
    },
  ],
};

// ── 7.4. Harap-Alb și Spânul ────────────────────────────────────────────────────────────────

export const comparatieContent: DetailExplorerContent = {
  title: "Protagonist și antagonist: o comparație",
  summary:
    "Harap-Alb și Spânul nu sunt doar „bun” și „rău”. Alege un aspect și compară-i, cu fapte din basm. Ultimul câmp arată ce se poate argumenta, nu ce e obligatoriu.",
  note: "Comparația este o interpretare. Faptele din fiecare câmp sunt din basm.",
  prompt: "Alege un aspect:",
};

export const comparatieItems: DetailItem[] = [
  {
    id: "statut",
    label: "Statutul",
    fields: [
      { label: "Harap-Alb", text: "Fiu mezin de crai; după fântână, slugă cu numele primit de la Spân; la sfârșit, primește împărăția.", tag: "fapt-basm" },
      { label: "Spânul", text: "Un om spân întâlnit în codru; la curte se dă drept nepotul lui Verde-împărat, cu scrisoarea și banii celui pe care îl închisese în fântână.", tag: "fapt-basm" },
      { label: "Ce se poate argumenta", text: "Statutul lor se răstoarnă de două ori: la fântână, Spânul ia locul eroului, iar la final fiecare ajunge unde îi este locul.", tag: "interpretare" },
    ],
    source: "Lecția, 7.2 și 7.3.",
  },
  {
    id: "mijloace",
    label: "Mijloacele",
    fields: [
      { label: "Harap-Alb", text: "Răbdare, ajutor primit de la Sfânta Duminică, de la cal și de la tovarăși; face singur gesturi de bunătate.", tag: "fapt-basm" },
      { label: "Spânul", text: "Înșelăciune, deghizare („prefăcut în alte straie”), amenințare, ordine date cu asprime.", tag: "fapt-basm" },
      { label: "Ce se poate argumenta", text: "Eroul are prieteni, Spânul are doar putere obținută prin viclenie, iar asta explică de ce unul rezistă și celălalt cade.", tag: "interpretare" },
    ],
    source: "Lecția, 7.2 și 7.3.",
  },
  {
    id: "cuvant",
    label: "Cuvântul dat",
    fields: [
      { label: "Harap-Alb", text: "Își ține jurământul făcut pe paloș, chiar și atunci când e trimis spre pericole.", tag: "fapt-basm" },
      { label: "Spânul", text: "Cere jurământ prin amenințare, minte despre propria identitate, iar la final spune: „Na! așa trebuie să pățească cine calcă jurământul!”", tag: "citat" },
      { label: "Ce se poate argumenta", text: "Ironia: cel care acuză încălcarea jurământului este cel care a obținut totul prin minciună.", tag: "interpretare" },
    ],
    source: "Lecția, 7.3 și 5.5.",
  },
  {
    id: "oameni",
    label: "Față de ceilalți",
    fields: [
      { label: "Harap-Alb", text: "Ajută pe cei mici (furnici, albine), primește tovarăși, e apreciat de fetele împăratului și de Verde.", tag: "fapt-basm" },
      { label: "Spânul", text: "Își tratează sluga cu dispreț; fetele lui Verde îl urăsc, iar împăratul, uluit de vorbele lui, „a uitat și de Harap-Alb, și de cerb, și de tot”.", tag: "fapt-basm" },
      { label: "Ce se poate argumenta", text: "Cei doi reprezintă două feluri de a trata oamenii: prin ajutor reciproc, respectiv prin forță și minciună.", tag: "interpretare" },
    ],
    source: "Lecția, 7.3 și 7.4.",
  },
  {
    id: "lume",
    label: "Viziunea despre lume",
    fields: [
      { label: "Harap-Alb", text: "Sfânta Duminică îi spune că, ajuns mare și tare, va trebui să-i creadă pe cei asupriți „pentru că știi acum ce e necazul”.", tag: "citat" },
      { label: "Spânul", text: "Spune împăratului că dacă „dobitoacele n-ar fi fost înfrânate, de demult ar fi sfâșiat pe om” și că „cea mai mare parte” dintre oameni sunt dobitoace, ținute din frâu.", tag: "citat" },
      { label: "Ce se poate argumenta", text: "Cele două replici dau două idei despre putere: una bazată pe experiența suferinței, alta pe dispreț.", tag: "interpretare" },
    ],
    source: "Lecția, 4.3 și 7.3.",
  },
  {
    id: "final",
    label: "Finalul",
    fields: [
      { label: "Harap-Alb", text: "Moare prin lovitura Spânului, dar este înviat de fata lui Roș cu smicelele, apa moartă și apa vie, apoi primește împărăția.", tag: "fapt-basm" },
      { label: "Spânul", text: "Calul îl duce în înaltul cerului și îi dă drumul: se face „praf și pulbere”.", tag: "citat" },
      { label: "Ce se poate argumenta", text: "Pedeapsa Spânului vine de la un ajutor al eroului (calul), nu de la mâna lui: dreptatea se face prin cei pe care eroul i-a câștigat.", tag: "interpretare" },
    ],
    source: "Lecția, 5.5 și 7.4.",
  },
];

// ── 7.7. Relațiile dintre personaje ─────────────────────────────────────────────────────────

export type HarapPerson = "harap" | "span" | "duminica" | "cal" | "fata";

export const harapPeople: Record<HarapPerson, RelationPersonData> = {
  harap: {
    name: "Harap-Alb",
    role: "fiul mezin al craiului",
    position: { x: 50, y: 50 },
    tone: "blue",
    details: [
      { tag: "fapt-basm", text: "Pornește cu hainele și calul tatălui, ajunge slugă prin înșelăciune și, la sfârșit, primește împărăția.", source: "Lecția, 7.2." },
      { tag: "interpretare", text: "Se maturizează prin greșeli, încercări și prietenii.", source: "Lecția, 7.2." },
    ],
  },
  span: {
    name: "Spânul",
    role: "antagonistul",
    position: { x: 26, y: 18 },
    tone: "slate",
    details: [
      { tag: "fapt-basm", text: "Îl momește pe fiul de crai în fântână, îi ia identitatea și îl trimite în trei locuri primejdioase. La curte se dă drept nepotul lui Verde-împărat, care îl crede.", source: "Lecția, 7.3." },
      { tag: "interpretare", text: "Reprezintă înșelăciunea și ambiția fără scrupule, dar face să iasă la iveală, prin încercări, calitățile eroului.", source: "Lecția, 7.3." },
    ],
  },
  duminica: {
    name: "Sfânta Duminică",
    role: "bătrâna căreia i s-a dat un ban",
    position: { x: 74, y: 18 },
    tone: "violet",
    details: [
      { tag: "fapt-basm", text: "Apare ca o bătrână cerșetoare, îi dă sfaturi și, după ce se arată, îl ajută la primele două probe ale Spânului.", source: "Lecția, 7.5." },
      { tag: "citat", text: "„nu eu, ci puterea milosteniei și inima ta cea bună te ajută”", source: "Lecția, 5.4." },
    ],
  },
  cal: {
    name: "Calul",
    role: "tovarășul din tinerețea craiului",
    position: { x: 26, y: 82 },
    tone: "emerald",
    details: [
      { tag: "fapt-basm", text: "Răpciugă de cal, pare slab, dar după ce mănâncă jăratec și se scutură devine frumos și vorbitor; îl duce pe erou, îl sfătuiește și, la sfârșit, îl ridică pe Spân în cer.", source: "Lecția, 7.5." },
      { tag: "interpretare", text: "Reprezintă experiența și înțelepciunea moștenite de la tată.", source: "Lecția, 7.5." },
    ],
  },
  fata: {
    name: "Fata lui Roș",
    role: "fata împăratului Roș",
    position: { x: 74, y: 82 },
    tone: "rose",
    details: [
      { tag: "fapt-basm", text: "Se preface în păsărică, pune ea însăși ultima încercare, îl respinge pe Spân și îl învie pe erou.", source: "Lecția, 7.6." },
      { tag: "interpretare", text: "Este și un personaj activ, care alege și hotărăște, nu doar premiul probei.", source: "Lecția, 7.6." },
    ],
  },
};

export const harapEdges: RelationEdge<HarapPerson>[] = [
  { from: "harap", to: "cal", label: "tovarăși", step: 0 },
  { from: "harap", to: "duminica", label: "milostenie, apoi ajutor", shortLabel: "ajutor", step: 0 },
  { from: "harap", to: "span", label: "slugă – stăpân prin jurământ", shortLabel: "jurământ", step: 1 },
  { from: "harap", to: "fata", label: "dragoste; ea îl învie", shortLabel: "dragoste", step: 3 },
];

export const relatiiFigure: FigureContent = {
  title: "Harta relațiilor: Harap-Alb și cei din jurul lui",
  summary:
    "Harap-Alb este în centru. Parcurge etapele ca să vezi cum se adaugă relațiile, apoi alege un personaj ca să citești ce spune lecția despre el.",
  note: "Harta nu include toate personajele (de exemplu craiul, ceilalți doi frați, Verde-împărat, împăratul Roș, cei cinci tovarăși). Ele sunt prezentate în 7.5 și 7.6.",
  steps: [
    {
      id: "ajutoare",
      title: "Pornirea: ajutoare",
      text: "Harap-Alb pornește cu calul tatălui său și cu sfatul Sfintei Duminici, căreia îi dăduse un ban. Calul este tovarășul lui pe tot drumul.",
      tag: "fapt-basm",
      source: "Lecția, 7.5.",
    },
    {
      id: "span",
      title: "Spânul: stăpânul prin jurământ",
      text: "Spânul îl ia pe erou ca slugă, apoi îl pune să jure pe paloș. La curte se dă drept nepotul lui Verde-împărat, care îl crede.",
      tag: "fapt-basm",
      source: "Lecția, 5.3 și 7.3.",
    },
    {
      id: "probe",
      title: "Probele: relațiile se strâng",
      text: "Spânul îl trimite pe Harap-Alb în locuri primejdioase, iar Sfânta Duminică și calul îl ajută. Pe drum, eroul își face și alți tovarăși. Cu cât probele sunt mai grele, cu atât ajutoarele sunt mai multe.",
      tag: "interpretare",
      source: "Lecția, 5.2 și 7.5.",
    },
    {
      id: "fata",
      title: "Fata lui Roș",
      text: "Fata împăratului Roș pune ultima încercare, merge cu Harap-Alb și se îndrăgostește de el, iar el de ea. Relația nouă îi aduce eroului un sprijin hotărâtor în final.",
      tag: "fapt-basm",
      source: "Lecția, 7.6.",
    },
    {
      id: "final",
      title: "Dezvăluirea",
      text: "Fata îl respinge pe Spân: „Lipsește dinaintea mea, Spânule!” Calul îl ridică pe Spân în înaltul cerului. Harap-Alb este înviat, iar Verde-împărat află adevărul și binecuvântează cuplul.",
      tag: "fapt-basm",
      source: "Lecția, 5.5.",
    },
  ],
};

// ── 7.8. Modalitățile de caracterizare ──────────────────────────────────────────────────────

export const caracterizareQuiz: QuizContent = {
  title: "Ce fel de caracterizare este?",
  summary:
    "Personajele din basm sunt caracterizate direct (de narator, de alte personaje, de ele însele) și indirect (prin fapte și vorbe). Recunoaște modalitatea din fiecare exemplu.",
  note: "Un exemplu poate fi analizat din mai multe unghiuri; aici alegem modalitatea cea mai clară.",
  choices: [
    { id: "narator", label: "Caracterizare directă, făcută de narator" },
    { id: "alt-personaj", label: "Caracterizare directă, făcută de alt personaj" },
    { id: "auto", label: "Autocaracterizare" },
    { id: "indirect", label: "Caracterizare indirectă, prin fapte" },
  ],
  items: [
    {
      id: "boboc",
      prompt: "Fiul craiului, „boboc în felul său la trebi de aieste”, se bagă în fântână.",
      attribution: "despre Harap-Alb, narator",
      correct: "narator",
      explanation: "Naratorul spune direct cum este eroul: neexperimentat. De aceea îl și explică prin fapte, în fântână.",
      source: "Lecția, 5.3 și 7.8.",
    },
    {
      id: "slab",
      prompt: "„Parcă nu te-aș fi crezut așa slab de înger.”",
      attribution: "Sfânta Duminică, către Harap-Alb",
      correct: "alt-personaj",
      explanation: "Un personaj îl judecă direct pe erou, într-un moment de deznădejde al acestuia. Judecata e a Sfintei Duminici, nu verdictul definitiv al naratorului.",
      source: "Lecția, 7.2 și 7.8.",
    },
    {
      id: "borș",
      prompt: "„Mie unuia știu că nu-mi suflă nimene în borș.”",
      attribution: "Spânul, către Verde-împărat",
      correct: "auto",
      explanation: "Spânul se descrie singur, lăudându-se. Trăsătura (îngâmfarea, ambiția) iese din felul în care vorbește despre sine.",
      source: "Lecția, 7.3 și 7.8.",
    },
    {
      id: "albine",
      prompt: "Harap-Alb își scoate pălăria, o pune pe iarbă cu gura în sus ca albinele să se adune în ea, apoi le face un adăpost într-un buștean scobit.",
      attribution: "faptele eroului",
      correct: "indirect",
      explanation: "Nimeni nu spune „e bun”, dar faptele arată bunătatea și grija pentru cei mici.",
      source: "Lecția, 5.4 și 7.8.",
    },
    {
      id: "tace",
      prompt: "Capul cerbului îl strigă pe nume, iar Harap-Alb „tăcea molcum”.",
      attribution: "faptele eroului",
      correct: "indirect",
      explanation: "Stăpânirea de sine reiese din ce face (tace) în fața unei tentații. Naratorul doar relatează.",
      source: "Lecția, 5.2 și 7.8.",
    },
    {
      id: "vrednic",
      prompt: "„Ia, să am eu o slugă așa de vrednică și credincioasă ca Harap-Alb, aș pune-o la masă cu mine.”",
      attribution: "împăratul Verde",
      correct: "alt-personaj",
      explanation: "Verde-împăratul numește direct calitățile slugii, fără să știe cine este de fapt. Este părerea unui personaj, nu a naratorului.",
      source: "Lecția, 7.2 și 7.8.",
    },
  ],
};

// ── 8. Planurile de eseu ────────────────────────────────────────────────────────────────────

export const essayPlansHarap: EssayPlan[] = [
  {
    id: "personaj",
    label: "Construcția personajului Harap-Alb",
    section: "8.2",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, specia (basm cult) și personajul ales, cu locul lui în basm.", see: [] },
      {
        id: "statut",
        title: "Statutul personajului",
        text: "Social (fiu de crai, apoi slugă, apoi împărat), psihologic (naiv, milos, șovăitor) și moral (loial, bun), fiecare legat de text.",
        reper: "Reperul despre statut · 6 p",
        see: ["7.2. Harap-Alb"],
      },
      {
        id: "trasatura",
        title: "O trăsătură prin două episoade",
        text: "De exemplu, bunătatea: furnicile și albinele, sau naivitatea: fântâna și întâlnirile cu Spânul. Comentează, nu repovesti.",
        reper: "Reperul despre trăsătură · 6 p",
        see: ["5.3. Secvența 1: fântâna și numele Harap-Alb", "5.4. Secvența 2: milostenia răsplătită"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură sau de limbaj",
        text: "De exemplu, probele (acțiunea) și modalitățile de caracterizare, sau oralitatea. Numește, arată în text, justifică relevanța pentru personaj.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["5.2. Drumul inițiatic și probele", "7.8. Modalitățile de caracterizare", "6.5. Formulele basmului și oralitatea"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare despre personaj, argumentată, fără informații noi.", see: [] },
    ],
  },
  {
    id: "particularitati",
    label: "Particularitățile basmului cult",
    section: "8.3",
    blocks: [
      { id: "intro", title: "Introducere", text: "Autorul, titlul, anul apariției (1877) și încadrarea (basm cult).", see: [] },
      {
        id: "incadrare",
        title: "Încadrarea în specie",
        text: "Basmul cult și două trăsături, fiecare arătată în text (de exemplu, formulele și oralitatea, umanizarea fantasticului).",
        reper: "Reperul despre încadrare · 6 p",
        see: ["3.2. Basmul popular și basmul cult", "3.3. Trăsături ale basmului în „Povestea lui Harap-Alb”"],
      },
      {
        id: "tema",
        title: "Tema și două secvențe",
        text: "Formulează tema și comentează două secvențe, legate explicit de ea.",
        reper: "Reperul despre temă și secvențe · 6 p",
        see: ["4.1. Tema", "5.3. Secvența 1: fântâna și numele Harap-Alb", "5.5. Secvența 3: moartea și învierea"],
      },
      {
        id: "elemente",
        title: "Două elemente de structură sau de limbaj",
        text: "De exemplu, incipitul și finalul, perspectiva narativă sau formulele: numește, arată în text, justifică relevanța.",
        reper: "Reperul despre elemente de structură · 6 p",
        see: ["6.3. Incipitul și finalul", "6.4. Perspectiva narativă și instanțele comunicării"],
      },
      { id: "incheiere", title: "Încheiere", text: "O judecată de valoare argumentată despre basm, fără informații noi neargumentate.", see: [] },
    ],
  },
];

export const planIntroHarap: EssayPlanIntro = {
  title: "Planul eseului, bloc cu bloc",
  summary:
    "Alege tipul de cerință ca să vezi planul propus de lecție și reperul din barem acoperit de fiecare bloc. Poți schimba ordinea reperelor: baremul o lasă la alegere.",
  note: "Planurile sunt recomandări ale lecției (8.2 și 8.3), „un plan posibil, nu singurul corect”. Cerința despre personajul unui basm cult apare în Varianta 3 din 2026 (profil real, filiera tehnologică), p. 2; același barem spune că ordinea reperelor este la alegere. Introducerea și încheierea țin de redactare.",
};

// ── 9.2. Laboratorul de interpretare ────────────────────────────────────────────────────────

export const laboratorContent: DetailExplorerContent = {
  title: "Laborator de interpretare: de la episod la argument",
  summary:
    "Alege un episod și vezi cum îl poți lega de o trăsătură, de temă și de un element de structură sau de limbaj. Fiecare rând este un model de gândire, nu un text de memorat.",
  note: "Primul câmp este fapt din basm; celelalte sunt interpretări, deci pot fi formulate și altfel, dacă le argumentezi.",
  prompt: "Alege un episod:",
};

export const laboratorItems: DetailItem[] = [
  {
    id: "fantana",
    label: "Fântâna",
    fields: [
      { label: "Fapt din text", text: "Spânul îl momește pe fiul de crai în fântână, îi cere jurământ și îi dă numele Harap-Alb.", tag: "fapt-basm" },
      { label: "Trăsătura susținută", text: "Naivitatea, lipsa de experiență.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Începutul drumului de maturizare: eroul trebuie să învețe din greșeală.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Intriga sau desfășurarea: schimbă identitatea eroului; numele dat devine titlul basmului.", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Naivitatea lui Harap-Alb, numită de narator „boboc în felul său”, se vede în fântână, unde pierde nu doar libertatea, ci și identitatea.", tag: "recomandare" },
    ],
    source: "Lecția, 5.3.",
  },
  {
    id: "furnici",
    label: "Furnicile și albinele",
    fields: [
      { label: "Fapt din text", text: "Harap-Alb trece prin apă ca să nu strivească furnicile și face adăpost albinelor; primește câte o aripă.", tag: "fapt-basm" },
      { label: "Trăsătura susținută", text: "Bunătatea față de cei mici.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Binele făcut fără interes se întoarce ca ajutor, în probele de la Roș.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Acțiunea: aripile sunt o pregătire (un „obiect magic” introdus înainte să fie folosit).", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Gestul lui Harap-Alb față de furnici și albine nu rămâne fără urmări: aripile primite devin, mai târziu, cheia a două probe.", tag: "recomandare" },
    ],
    source: "Lecția, 5.4.",
  },
  {
    id: "cerb",
    label: "Cerbul și tăcerea",
    fields: [
      { label: "Fapt din text", text: "Din groapă, Harap-Alb nu răspunde capului cerbului, care îl strigă; iese abia după asfințitul soarelui.", tag: "fapt-basm" },
      { label: "Trăsătura susținută", text: "Stăpânirea de sine, răbdarea.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Ajutorul nu înlocuiește efortul: eroul trebuie să și reziste.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Caracterizarea indirectă: trăsătura reiese din ce face, nu din ce spune naratorul.", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Tăcerea lui Harap-Alb în fața capului cerbului arată, prin faptă, o stăpânire de sine pe care naratorul nu o mai numește.", tag: "recomandare" },
    ],
    source: "Lecția, 5.2 și 7.8.",
  },
  {
    id: "sovaiala",
    label: "Dragostea și jurământul",
    fields: [
      { label: "Fapt din text", text: "Eroul „mai nu-i venea s-o ducă” Spânului pe fata împăratului Roș, „fiind nebun de dragostea ei”.", tag: "fapt-basm" },
      { label: "Trăsătura susținută", text: "Umanitatea eroului: nu e fără șovăială.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Maturizarea include sentimentele și alegerile grele.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Conflictul interior: între datorie (jurământul) și dorință.", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Șovăiala lui Harap-Alb între dragoste și jurământ îl scoate din tiparul eroului fără greșeală și îl face mai omenesc.", tag: "recomandare" },
    ],
    source: "Lecția, 6.7 și 7.2.",
  },
  {
    id: "inviere",
    label: "Moartea și învierea",
    fields: [
      { label: "Fapt din text", text: "Spânul îi taie capul lui Harap-Alb. Fata pune capul la loc și îl învie cu smicelele, apa moartă și apa vie.", tag: "fapt-basm" },
      { label: "Trăsătura susținută", text: "Dreptatea răsplătită, la sfârșitul unui drum greu.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Spânul spusese că jurământul ține „până când îi muri și iar îi învia”; la final, numele de slugă se încheie prin înviere.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Punctul culminant și deznodământul; încheierea unui cerc deschis la fântână.", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Învierea lui Harap-Alb încheie, simbolic, drumul început la fântână, unde Spânul îi dăduse această condiție.", tag: "recomandare" },
    ],
    source: "Lecția, 5.5.",
  },
  {
    id: "final",
    label: "Formula finală",
    fields: [
      { label: "Fapt din text", text: "După nuntă: „Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”", tag: "citat" },
      { label: "Trăsătura susținută", text: "Oralitatea și umorul naratorului.", tag: "interpretare" },
      { label: "Legătura cu tema", text: "Contrastul dintre lumea basmului (în care binele e răsplătit) și lumea de zi cu zi.", tag: "interpretare" },
      { label: "Element de structură sau de limbaj", text: "Finalul și perspectiva narativă: naratorul iese din basm.", tag: "interpretare" },
      { label: "O propoziție de eseu", text: "Prin formula finală, naratorul compară lumea basmului cu lumea „noastră”, cu un zâmbet amar care apropie basmul de cititor.", tag: "recomandare" },
    ],
    source: "Lecția, 6.3.",
  },
];

// ── 10. Autoevaluare ────────────────────────────────────────────────────────────────────────

export const checklistGroupsHarap: ChecklistGroup[] = [
  {
    id: "personaj",
    title: "Conținut (cerința despre personaj)",
    items: [
      "Am prezentat statutul social, psihologic și moral al lui Harap-Alb, cu nuanțe.",
      "Am numit o trăsătură și am ilustrat-o prin două episoade comentate, nu repovestite.",
      "Am analizat două elemente de structură, de compoziție sau de limbaj și am arătat cum construiesc personajul.",
      "Am justificat, pentru fiecare element, relevanța lui pentru construcția personajului.",
    ],
  },
  {
    id: "particularitati",
    title: "Conținut (cerința despre particularitățile basmului cult)",
    items: [
      "Am numit specia și două trăsături ale basmului cult și am arătat fiecare trăsătură în text.",
      "Am formulat tema într-o propoziție clară.",
      "Am comentat două secvențe și le-am legat de temă.",
      "Am analizat două elemente de structură, de compoziție sau de limbaj, cu relevanța lor.",
    ],
  },
  {
    id: "redactare",
    title: "Redactare",
    items: [
      "Eseul are introducere, cuprins și încheiere.",
      "Ideile se leagă logic între ele.",
      "Am separat faptele din basm de interpretări.",
      "Citatele sunt verificate în textul basmului.",
      "Am verificat ortografia și punctuația.",
      "Eseul are cel puțin 400 de cuvinte.",
    ],
  },
];
