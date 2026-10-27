import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „O noapte furtunoasă” (content/romana/opere/o-noapte-furtunoasa.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele și citatele au fost verificate pe transcrierea Wikisource a piesei
 * (vezi docs/rapoarte/documentare-opere-noi-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const oNoapteFurtunoasaExercises: ExerciseSet = {
  key: "romana/o-noapte-furtunoasa",
  subject: "romana",
  work: "o-noapte-furtunoasa",
  title: "„O noapte furtunoasă” de I. L. Caragiale",
  exercises: [
    {
      id: "noapte-mc-acte",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Câte acte are piesa „O noapte furtunoasă”?",
      options: [
        { id: "a", text: "Unul." },
        { id: "b", text: "Două." },
        { id: "c", text: "Trei." },
        { id: "d", text: "Patru." },
      ],
      correctOptionId: "b",
      explanation:
        "Titlul din transcriere este „Comedie în 2 acte”: fiecare act are câte nouă scene. Piesa „O scrisoare pierdută”, în schimb, are patru acte.",
      lessonSection: { id: "5-1-cele-doua-acte", label: "5.1. Cele două acte" },
      basis: "Lecția, 2 și 5.1; piesa.",
    },
    {
      id: "noapte-mc-bagabont",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine este, de fapt, „bagabontul” de care se plânge Dumitrache?",
      options: [
        { id: "a", text: "Chiriac, tejghetarul din casă." },
        { id: "b", text: "Un hoț care vrea să intre în casă." },
        { id: "c", text: "Ipingescu, prietenul lui." },
        { id: "d", text: "Rică Venturiano, care o urmărește pe Zița." },
      ],
      correctOptionId: "d",
      explanation:
        "Tânărul cu ochelari și „giuben” este Rică Venturiano, arhivar și publicist, îndrăgostit de Zița, nu de Veta. Chiriac și Veta sunt cei care ascund adevărata relație.",
      lessonSection: { id: "6-1-secventa-1-povestea-bagabontului-i-1", label: "6.1. Secvența 1: povestea „bagabontului” (I, 1)" },
      basis: "Lecția, 6.1 și 7.6; piesa, I, 1 și II, 9.",
    },
    {
      id: "noapte-mc-rezon",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Care personaj repetă mereu „Rezon!”?",
      options: [
        { id: "a", text: "Nae Ipingescu." },
        { id: "b", text: "Rică Venturiano." },
        { id: "c", text: "Spiridon." },
        { id: "d", text: "Chiriac." },
      ],
      correctOptionId: "a",
      explanation:
        "„Rezon!” este tic verbal al lui Ipingescu, care îi dă mereu dreptate lui Dumitrache. Rică vorbește pompos, Spiridon este băiatul din casă, iar Chiriac are alte replici.",
      lessonSection: { id: "7-5-nae-ipingescu", label: "7.5. Nae Ipingescu" },
      basis: "Lecția, 3.2 și 7.5; piesa, I, 1.",
    },
    {
      id: "noapte-mc-numar",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cum explică Rică faptul că a intrat în casa greșită?",
      options: [
        { id: "a", text: "Zița i-a scris adresa greșit în bilet." },
        { id: "b", text: "Spiridon l-a condus intenționat în altă casă." },
        { id: "c", text: "Vina este a tăbliții de la poartă, cu numărul 9 bătut din greșeală." },
        { id: "d", text: "A urmat un câine care l-a dus în curte." },
      ],
      correctOptionId: "c",
      explanation:
        "Rică spune că Zița îi scrisese „numărul 9”, iar tăblița de la poartă avea numărul 9; Dumitrache explică, la rândul lui, că meșterul l-a bătut pe 6 „d-a-ndoaselea”. Zița nu a greșit adresa, iar Spiridon și câinele nu au legătură cu acest moment.",
      lessonSection: { id: "6-5-secventa-5-finalul-ii-9", label: "6.5. Secvența 5: finalul (II, 9)" },
      basis: "Lecția, 6.5; piesa, II, 9.",
    },
    {
      id: "noapte-mc-fuga",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine îl ajută pe Rică să scape pe fereastră când se aude Dumitrache în curte?",
      options: [
        { id: "a", text: "Zița." },
        { id: "b", text: "Spiridon." },
        { id: "c", text: "Veta." },
        { id: "d", text: "Chiriac." },
      ],
      correctOptionId: "c",
      explanation:
        "Veta îi spune lui Rică să iasă pe fereastră și să treacă pe schele. Spiridon îi cere bani mai târziu, Chiriac îl urmărește, iar Zița apare după ce Rică a fugit.",
      lessonSection: { id: "6-4-secventa-4-rica-in-casa-ii-2", label: "6.4. Secvența 4: Rică în casă (II, 2)" },
      basis: "Lecția, 6.4; piesa, II, 2.",
    },
    {
      id: "noapte-mc-gazeta",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce arată scena în care Ipingescu citește gazeta „Vocea Patriotului Naționale”?",
      options: [
        { id: "a", text: "Că cei doi înțeleg bine articolul și îl discută." },
        { id: "b", text: "Că politica este redusă la cuvinte pe care nimeni nu le pricepe, dar toți le aplaudă." },
        { id: "c", text: "Că Dumitrache scrie în ziar sub un pseudonim." },
        { id: "d", text: "Că articolul este o știre despre garda civică." },
      ],
      correctOptionId: "b",
      explanation:
        "Ipingescu citește cu greu un articol despre „sufragiu universal” și îl explică greșit; Dumitrache aprobă entuziasmat, fără să înțeleagă. Este comic de limbaj și de moravuri. Articolul este al lui Rică, nu al lui Dumitrache.",
      lessonSection: { id: "6-2-secventa-2-gazeta-vocea-patriotului-nationale-i-4", label: "6.2. Secvența 2: gazeta „Vocea Patriotului Naționale” (I, 4)" },
      basis: "Lecția, 6.2; piesa, I, 4.",
    },
    {
      id: "noapte-mc-legatura",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce obiect găsește Dumitrache pe pernele patului Vetei, la final, și care este explicația lui Chiriac?",
      options: [
        { id: "a", text: "Un bilet de dragoste; Chiriac spune că este al lui Rică." },
        { id: "b", text: "Un baston uitat; Chiriac spune că este al lui Ipingescu." },
        { id: "c", text: "O pălărie; Chiriac spune că este a lui Spiridon." },
        { id: "d", text: "O legătură de gât; Chiriac spune că este a lui." },
      ],
      correctOptionId: "d",
      explanation:
        "Dumitrache scoate din buzunar o legătură de gât, iar Chiriac îi spune: „asta-i legătura mea”. Dumitrache se liniștește: „Uite așa se orbește omul la necaz!”. Bastonul este al lui Rică și a fost găsit mai devreme.",
      lessonSection: { id: "6-5-secventa-5-finalul-ii-9", label: "6.5. Secvența 5: finalul (II, 9)" },
      basis: "Lecția, 4.1 și 6.5; piesa, II, 9.",
    },
    {
      id: "noapte-mc-interpretare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care dintre aceste enunțuri este o interpretare, nu un fapt verificabil în text?",
      options: [
        { id: "a", text: "Piesa are două acte." },
        { id: "b", text: "Rică spune că vina este a tăbliții de la poartă." },
        { id: "c", text: "Ipingescu repetă „Rezon!”." },
        { id: "d", text: "Ipingescu este tipul funcționarului servil." },
      ],
      correctOptionId: "d",
      explanation:
        "Primele trei enunțuri se pot verifica în text. Că Ipingescu este tipul funcționarului servil este o lectură a personajului, care trebuie argumentată.",
      lessonSection: { id: "8-fapt-si-interpretare", label: "8. Fapt și interpretare" },
      basis: "Lecția, 7.5 și 8.",
    },
    {
      id: "noapte-mc-comic",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce tip de comic ilustrează cel mai bine replica lui Rică „Angel radios!”?",
      options: [
        { id: "a", text: "Comic de nume." },
        { id: "b", text: "Comic de limbaj." },
        { id: "c", text: "Comic de situație." },
        { id: "d", text: "Comic de decor." },
      ],
      correctOptionId: "b",
      explanation:
        "Exprimarea pompoasă, de poet de ocazie, provoacă râsul prin felul în care este rostită: comic de limbaj. Nu este comic de nume, iar situația este doar cadrul; „comic de decor” nu e un tip folosit în lecție.",
      lessonSection: { id: "3-2-comicul", label: "3.2. Comicul" },
      basis: "Lecția, 3.2 și 7.6; piesa, II, 2.",
    },
    {
      id: "noapte-af-noapte",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Acțiunea piesei se petrece într-o singură noapte.",
      correct: true,
      explanation:
        "Adevărat: Dumitrache este „de rond” în acea noapte, iar actul al II-lea se petrece până aproape de miezul nopții (orologiul bate 11:20). Piesa se petrece într-o singură odaie.",
      lessonSection: { id: "5-2-timpul-si-spatiul", label: "5.2. Timpul și spațiul" },
      basis: "Lecția, 5.2; piesa, actul II.",
    },
    {
      id: "noapte-af-arest",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Ipingescu îl arestează pe Rică, pentru că îl crede „bagabont”.",
      correct: false,
      explanation:
        "Fals. Ipingescu îl recunoaște pe Rică: „Pe dumnealui îl cunosc eu!” și spune că este „d-ai noștri, e patriot”, autorul articolelor din „Vocea Patriotului Naționale”.",
      lessonSection: { id: "6-5-secventa-5-finalul-ii-9", label: "6.5. Secvența 5: finalul (II, 9)" },
      basis: "Lecția, 6.5; piesa, II, 9.",
    },
    {
      id: "noapte-af-adevar",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "La final, Dumitrache află că Veta și Chiriac sunt îndrăgostiți.",
      correct: false,
      explanation:
        "Fals. Dumitrache nu află adevărul: primește explicația că Rică este amorezat de Zița și a greșit casa, iar legătura de gât este a lui Chiriac. De aici ironia finală.",
      lessonSection: { id: "6-5-secventa-5-finalul-ii-9", label: "6.5. Secvența 5: finalul (II, 9)" },
      basis: "Lecția, 6.5; piesa, II, 9.",
    },
    {
      id: "noapte-af-chiriac",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Faptul că Chiriac este „credinciosul ironic” este un fapt din text, nu o interpretare.",
      correct: false,
      explanation:
        "Fals. Textul arată că Chiriac îi răspunde lui Dumitrache cu „consimț la onoarea dumitale de familist” în timp ce o ține în brațe pe Veta; ideea de „credincios ironic” este o interpretare a acestui contrast.",
      lessonSection: { id: "7-4-chiriac", label: "7.4. Chiriac" },
      basis: "Lecția, 6.3 și 7.4.",
    },
    {
      id: "noapte-ra-ziar",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Cum se numește personajul care scrie articole în gazeta „Vocea Patriotului Naționale”?",
      grading: { mode: "keywords", requiredGroups: [["rica", "venturiano"]] },
      modelAnswer: "Rică Venturiano.",
      maxLength: 100,
      explanation:
        "Articolul citit de Ipingescu aparține lui Rică Venturiano, „studinte în drept și publicist”. Răspunsul poate conține prenumele (Rică) sau numele (Venturiano).",
      lessonSection: { id: "7-6-rica-venturiano", label: "7.6. Rică Venturiano" },
      basis: "Lecția, 6.2 și 7.6; piesa, I, 4.",
    },
    {
      id: "noapte-ra-final",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, ultima replică a piesei, „Uite așa se orbește omul la necaz!”, legând-o de tema piesei. Separă ce spune textul de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat contextul: Dumitrache găsește o legătură de gât și o crede suspectă, apoi află că este a lui Chiriac.",
          "Am arătat ironia: Dumitrache nu află adevărul și crede că a avut dreptate.",
          "Am formulat o interpretare legată de tema gelozie și aparențe.",
          "Am folosit un citat scurt și verificat (de exemplu, „asta-i legătura mea”).",
        ],
      },
      modelAnswer:
        "Dumitrache găsește o legătură de gât pe pernele patului Vetei și se tulbură, dar Chiriac spune că este a lui, iar Dumitrache concluzionează: „Uite așa se orbește omul la necaz!” (fapt). Ironia este că el nu vede adevărul, deși îl are în față. Interpretare: replica rezumă tema piesei, geloziile care se sprijină pe aparențe și explicațiile convenabile.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește ironia, folosește un citat scurt și o leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "6-5-secventa-5-finalul-ii-9", label: "6.5. Secvența 5: finalul (II, 9)" },
      basis: "Lecția, 4.1 și 6.5; piesa, II, 9.",
    },
  ],
};
