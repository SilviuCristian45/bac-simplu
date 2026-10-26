import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Povestea lui Harap-Alb” (content/romana/opere/povestea-lui-harap-alb.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele și citatele au fost verificate pe text în două ediții
 * (vezi docs/rapoarte/audit-povestea-lui-harap-alb-2026-10-25.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const povesteaLuiHarapAlbExercises: ExerciseSet = {
  key: "romana/povestea-lui-harap-alb",
  subject: "romana",
  work: "povestea-lui-harap-alb",
  title: "„Povestea lui Harap-Alb” de Ion Creangă",
  exercises: [
    {
      id: "harap-mc-numele",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine îi dă fiului de crai numele Harap-Alb?",
      options: [
        { id: "a", text: "Sfânta Duminică, la prima întâlnire cu el." },
        { id: "b", text: "Spânul, după ce îl închide în fântână." },
        { id: "c", text: "Craiul, când îl trimite să-și încerce norocul." },
        { id: "d", text: "Verde-împărat, la sosirea lui la curte." },
      ],
      correctOptionId: "b",
      explanation:
        "Spânul îl momește în fântână, îi cere jurământ și îi spune: „De-acum înainte să știi că te cheamă Harap-Alb; aista ți-i numele, și altul nu.” Până atunci, personajul este numit „fiul craiului”. Sfânta Duminică și craiul îi dau sfaturi, nu un nume, iar Verde-împărat îl primește pe Spân drept nepot.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2 și 5.3; basmul, fântâna.",
    },
    {
      id: "harap-mc-basm-cult",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care dintre exemple ilustrează mai ales amprenta autorului unui basm cult, nu o trăsătură comună oricărui basm?",
      options: [
        { id: "a", text: "Eroul pornește la drum și trece prin mai multe probe." },
        { id: "b", text: "Binele este răsplătit, iar răul este pedepsit la final." },
        { id: "c", text: "Ființele fabuloase se ceartă între ele ca oamenii." },
        { id: "d", text: "Numărul trei revine în mai multe episoade." },
      ],
      correctOptionId: "c",
      explanation:
        "Drumul cu probe, victoria binelui și numerele simbolice se găsesc în basmul în general, inclusiv în cel popular. Certurile dintre Gerilă, Flămânzilă și ceilalți, cu replici de zi cu zi („Ia tacă-ți gura, măi Gerilă!”), țin de umanizarea fantasticului și de individualizarea personajelor, adică de stilul unui autor. Distincția este de grad, nu absolută: la examen, argumentează-o cu exemple din text.",
      lessonSection: { id: "3-2-basmul-popular-si-basmul-cult", label: "3.2. Basmul popular și basmul cult" },
      basis: "Lecția, 3.2 și 3.3; basmul, noaptea în casa de aramă.",
    },
    {
      id: "harap-af-spanul-moare",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Spânul moare lovit de paloșul lui Harap-Alb.",
      correct: false,
      explanation:
        "Fals. Calul îl înșfacă pe Spân de cap, zboară cu el în înaltul cerului și îi dă drumul: Spânul se face „praf și pulbere”. Harap-Alb nu se răzbună: el fusese ucis de Spân și este înviat de fata împăratului Roș.",
      lessonSection: { id: "5-5-secventa-3-moartea-si-invierea", label: "5.5. Secvența 3: moartea și învierea" },
      basis: "Lecția, 5.5 și 8.5; basmul, sfârșitul.",
    },
    {
      id: "harap-mc-ordinea",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care este ordinea corectă a acestor evenimente din basm?",
      options: [
        { id: "a", text: "fântâna → sălățile → pielea cerbului → fata împăratului Roș" },
        { id: "b", text: "sălățile → fântâna → pielea cerbului → fata împăratului Roș" },
        { id: "c", text: "fântâna → pielea cerbului → sălățile → fata împăratului Roș" },
        { id: "d", text: "fântâna → sălățile → fata împăratului Roș → pielea cerbului" },
      ],
      correctOptionId: "a",
      explanation:
        "Mai întâi Spânul îl închide pe erou în fântână. Apoi îi cere, pe rând, sălățile din Grădina Ursului, pielea și capul cerbului și, după pasărea măiastră de la ospăț, pe fata împăratului Roș. Probele Spânului sunt trei și vin după fântână.",
      lessonSection: { id: "5-2-drumul-initiatic-si-probele", label: "5.2. Drumul inițiatic și probele" },
      basis: "Lecția, 5.1 și 5.2; basmul, probele Spânului.",
    },
    {
      id: "harap-mc-casa-arama",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine îi scapă pe tovarășii lui Harap-Alb de moartea în casa de aramă încinsă?",
      options: [
        { id: "a", text: "Ochilă, care vede prin pereții de aramă" },
        { id: "b", text: "Setilă, care bea tot focul din casă" },
        { id: "c", text: "Furnicile, chemate cu aripa lui Harap-Alb" },
        { id: "d", text: "Gerilă, care suflă de trei ori în casă" },
      ],
      correctOptionId: "d",
      explanation:
        "Gerilă suflă de trei ori și casa rămâne „nici fierbinte, nici rece”; peste noapte o umple chiar de brumă. Furnicile sunt chemate la proba cu macul și nisipul, Ochilă o urmărește pe fata lui Roș la străjuire, iar Setilă și Flămânzilă golesc ospățul.",
      lessonSection: { id: "5-2-drumul-initiatic-si-probele", label: "5.2. Drumul inițiatic și probele" },
      basis: "Lecția, 5.2 și 7.5; basmul, probele lui Roș.",
    },
    {
      id: "harap-mc-fantastic-umanizat",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Citește fragmentul: „— Ia tacă-ți gura, măi Gerilă! ziseră ceilalți. Acuși se face ziuă, și tu nu mai stinchești cu brașoave de-ale tale.” Ce se evidențiază prin acest dialog?",
      options: [
        { id: "a", text: "Descrierea unui peisaj fabulos, făcută de narator ca pauză în mijlocul acțiunii." },
        { id: "b", text: "Umanizarea fantasticului: ființele fabuloase se ceartă cu replici de zi cu zi." },
        { id: "c", text: "Monologul interior al lui Harap-Alb, care se gândește în tăcere la ce îl așteaptă." },
        { id: "d", text: "Formula mediană, prin care naratorul leagă două episoade ale drumului eroului." },
      ],
      correctOptionId: "b",
      explanation:
        "Personajele fabuloase se ceartă în limbaj colocvial, ca niște oameni obișnuiți, iar naratorul nu își spune părerea. Nu este peisaj, nici monolog (vorbesc mai multe personaje), nici formulă mediană: formula este „cuvântul din poveste, înainte mult mai este”. Recunoașterea umanizării fantasticului ține de interpretarea textului.",
      lessonSection: { id: "6-5-formulele-basmului-si-oralitatea", label: "6.5. Formulele basmului și oralitatea" },
      basis: "Lecția, 3.3, 6.5 și 7.5; basmul, casa de aramă.",
    },
    {
      id: "harap-mc-formula-mediana",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care dintre următoarele enunțuri din basm este o formulă mediană?",
      options: [
        { id: "a", text: "„Amu cică era odată într-o țară un crai, care avea trei feciori.”" },
        { id: "b", text: "„Iar pe la noi, cine are bani bea și mănâncă, iară cine nu, se uită și rabdă.”" },
        { id: "c", text: "„Vorba ceea: «Dă-i cu cinstea, să piară rușinea.»”" },
        { id: "d", text: "„Dumnezeu să ne ție, că cuvântul din poveste, înainte mult mai este.”" },
      ],
      correctOptionId: "d",
      explanation:
        "Formula mediană apare în mijlocul acțiunii și leagă episoadele: „cuvântul din poveste, înainte mult mai este”. Prima variantă este formula inițială, a doua este formula finală, iar a treia este un proverb, cu rol de oralitate, nu o formulă de legătură.",
      lessonSection: { id: "6-5-formulele-basmului-si-oralitatea", label: "6.5. Formulele basmului și oralitatea" },
      basis: "Lecția, 6.3 și 6.5; basmul, în mai multe episoade.",
    },
    {
      id: "harap-af-rau-necesar",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Afirmația „Spânul este un rău necesar” este un fapt din text, nu o interpretare.",
      correct: false,
      explanation:
        "Fals. Faptele din text sunt cele pe care le poți verifica: Spânul îl închide pe erou în fântână și îl trimite în probe, iar calul spune că „unii ca aceștia sunt trebuitori pe lume câteodată, pentru că fac pe oameni să prindă la minte”. „Rău necesar” este numele pe care îl dăm noi acestei idei: o interpretare susținută de text, pe care trebuie s-o argumentezi.",
      lessonSection: { id: "7-3-spanul", label: "7.3. Spânul" },
      basis: "Lecția, 4.4 și 7.3; basmul, ce spune calul înainte de proba cerbului.",
    },
    {
      id: "harap-mc-bunatate",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care episod susține cel mai bine ideea că Harap-Alb este bun cu cei mici?",
      options: [
        { id: "a", text: "Trece râul prin apă, ca să nu strivească nunta furnicilor." },
        { id: "b", text: "Se bagă în fântână, la îndemnul Spânului, fără să se gândească." },
        { id: "c", text: "Jură pe paloș că i se va supune Spânului în tot ce îi cere." },
        { id: "d", text: "Tace în groapă, deși capul cerbului îl strigă pe nume." },
      ],
      correctOptionId: "a",
      explanation:
        "Gestul față de furnici („decât să curm viața atâtor gâzulițe nevinovate”) arată bunătatea față de cei mici. Celelalte episoade ilustrează alte trăsături: naivitatea (fântâna), loialitatea (jurământul) și stăpânirea de sine (tăcerea în fața cerbului). Un episod poate susține mai multe trăsături; aici îl alegem pe cel mai potrivit.",
      lessonSection: { id: "5-4-secventa-2-milostenia-rasplatita", label: "5.4. Secvența 2: milostenia răsplătită" },
      basis: "Lecția, 5.3, 5.4 și 7.2; basmul, drumul spre Roș.",
    },
    {
      id: "harap-mc-titlul",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care lectură a titlului este susținută de text și de lecție?",
      options: [
        { id: "a", text: "Numele a fost ales de craiu ca să-și ascundă fiul de ochii răi ai Spânului." },
        { id: "b", text: "Harap-Alb este numele calului, care îl duce pe erou pe tot drumul său." },
        { id: "c", text: "Numele vine de la Spân, după fântână, și poate fi citit ca un oximoron." },
        { id: "d", text: "Numele este al unei țări îndepărtate, în care eroul ajunge abia la sfârșit." },
      ],
      correctOptionId: "c",
      explanation:
        "Spânul îi dă numele după fântână, iar lectura ca oximoron (doi termeni opuși pentru un personaj cu identitate dublă) este o interpretare a lecției, nu singura posibilă. Craiul nu alege numele, calul nu are acest nume, iar Harap-Alb nu este o țară: textul le contrazice pe celelalte.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2 (interpretare marcată ca atare); basmul, fântâna.",
    },
    {
      id: "harap-mc-caracterizare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Ce fel de caracterizare conține fraza „Fiul craiului, boboc în felul său la trebi de aieste, se potrivește Spânului și se bagă în fântână”?",
      options: [
        { id: "a", text: "autocaracterizare" },
        { id: "b", text: "caracterizare indirectă, prin vorbele eroului" },
        { id: "c", text: "caracterizare directă, făcută de alt personaj" },
        { id: "d", text: "caracterizare directă, făcută de narator" },
      ],
      correctOptionId: "d",
      explanation:
        "Naratorul spune direct cum este eroul: „boboc în felul său la trebi de aieste”, adică neexperimentat. Nu este autocaracterizare (eroul nu vorbește despre sine) și nu este o părere a altui personaj. Gestul de a se băga în fântână este o caracterizare indirectă, dar fraza numește trăsătura direct.",
      lessonSection: { id: "7-8-modalitatile-de-caracterizare", label: "7.8. Modalitățile de caracterizare" },
      basis: "Lecția, 5.3 și 7.8; basmul, fântâna.",
    },
    {
      id: "harap-mc-conflict-interior",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Ce arată propoziția „pe fata împăratului Roș mai nu-i venea s-o ducă, fiind nebun de dragostea ei” despre Harap-Alb?",
      options: [
        { id: "a", text: "Că Harap-Alb își încalcă jurământul și fuge împreună cu fata, lăsându-l pe Spân." },
        { id: "b", text: "Că Harap-Alb ezită între dragoste și datorie, dar duce fata la împărăție." },
        { id: "c", text: "Că Harap-Alb nu o iubește și o duce Spânului doar din teamă să nu moară." },
        { id: "d", text: "Că fata îl obligă pe Harap-Alb să se răzvrătească împotriva stăpânului său." },
      ],
      correctOptionId: "b",
      explanation:
        "Fraza arată un conflict interior: eroul este îndrăgostit și ezită, dar își duce misiunea până la capăt și ajunge cu fata la împărăție. Nu își încalcă jurământul, nu este lipsit de dragoste și nu este împins la răzvrătire de fată. Șovăiala îl arată pe erou ca pe un om, nu ca pe un personaj fără defecte.",
      lessonSection: { id: "6-7-conflictul", label: "6.7. Conflictul" },
      basis: "Lecția, 6.7 și 7.2; basmul, drumul de întoarcere.",
    },
    {
      id: "harap-mc-narator",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum poate fi descris naratorul din „Povestea lui Harap-Alb”?",
      options: [
        {
          id: "a",
          text: "Omniscient, la persoana a III-a, care comentează și se adresează ascultătorilor.",
        },
        {
          id: "b",
          text: "Personaj-martor, care povestește la persoana I ce a văzut de pe margine, fără să intervină.",
        },
        {
          id: "c",
          text: "Obiectiv și impersonal, la persoana a III-a, fără să comenteze sau să se adreseze cuiva.",
        },
        { id: "d", text: "Un personaj negativ, care povestește totul din punctul de vedere al Spânului." },
      ],
      correctOptionId: "a",
      explanation:
        "Naratorul nu este personaj: povestește la persoana a III-a și cunoaște gândurile personajelor, dar intervine mereu („Eu sunt dator să spun povestea și vă rog să ascultați”). Nu este nici martor la persoana I, nici obiectiv și impersonal, nici legat de punctul de vedere al Spânului.",
      lessonSection: { id: "6-4-perspectiva-narativa-si-instantele-comunicarii", label: "6.4. Perspectiva narativă și instanțele comunicării" },
      basis: "Lecția, 6.4; basmul, intervențiile naratorului.",
    },
    {
      id: "harap-af-invierea",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Harap-Alb este înviat de fata împăratului Roș, cu smicelele, apa moartă și apa vie.",
      correct: true,
      explanation:
        "Adevărat. Spânul îi taie capul, dar fata împăratului Roș pune capul la loc, îl înconjoară de trei ori cu cele trei smicele de măr dulce, toarnă apă moartă și îl stropește cu apă vie: Harap-Alb învie și spune „Ei, da' din greu mai adormisem!”. Harap-Alb nu rămâne mort: urmează nunta.",
      lessonSection: { id: "5-5-secventa-3-moartea-si-invierea", label: "5.5. Secvența 3: moartea și învierea" },
      basis: "Lecția, 5.5 și 8.5; basmul, sfârșitul.",
    },
    {
      id: "harap-ra-aripa",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Ce primește Harap-Alb de la furnici și de la albine, ca să le poată chema în ajutor?",
      grading: {
        mode: "keywords",
        requiredGroups: [["aripa", "aripă", "aripi", "aripile"]],
      },
      modelAnswer: "O aripă de la fiecare (de furnică și de albină), pe care o aprinde atunci când are nevoie de ele.",
      maxLength: 200,
      explanation:
        "Crăiasa furnicilor și crăiasa albinelor îi dau câte o aripă și îi spun să o aprindă la nevoie. Cu aripa de furnică cheamă furnicile la proba cu macul și nisipul, iar cu cea de albină, albinele, ca să o recunoască pe fata adevărată a împăratului Roș.",
      lessonSection: { id: "5-4-secventa-2-milostenia-rasplatita", label: "5.4. Secvența 2: milostenia răsplătită" },
      basis: "Lecția, 5.4; basmul, drumul spre Roș și probele lui Roș.",
    },
    {
      id: "harap-ra-comentariu-fantana",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, episodul fântânii, legându-l de construcția personajului Harap-Alb. Separă ce se întâmplă în text de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat corect faptele: tatăl îl avertizase, Spânul îl momește în fântână, îi cere jurământ și îi dă numele Harap-Alb.",
          "Am numit o trăsătură a eroului (de exemplu, naivitatea) și am arătat că reiese din episod.",
          "Am formulat o interpretare, nu doar am repovestit.",
          "Am folosit un detaliu sau un citat verificat (de exemplu, „boboc în felul său la trebi de aieste”).",
        ],
      },
      modelAnswer:
        "Deși tatăl îl avertizase să se ferească de omul spân, fiul de crai îl tocmește pe Spân și coboară în fântână, unde este închis și silit să jure ascultare; de acum se numește Harap-Alb (fapte). Naratorul îl numește „boboc în felul său la trebi de aieste”, așa că episodul pune în lumină naivitatea eroului. Greșeala îi aduce pierderea libertății și a identității, dar este și începutul unui drum de maturizare (interpretare).",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește o trăsătură, o susține cu un detaliu din text și o leagă de construcția personajului. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "5-3-secventa-1-fantana-si-numele-harap-alb", label: "5.3. Secvența 1: fântâna și numele Harap-Alb" },
      basis: "Lecția, 5.3 și 7.2; basmul, fântâna.",
    },
  ],
};
