import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Ion” (content/romana/opere/ion.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Lecția este încă în stadiul draft-neverificat.
 */
export const ionExercises: ExerciseSet = {
  key: "romana/ion",
  subject: "romana",
  work: "ion",
  title: "„Ion” de Liviu Rebreanu",
  exercises: [
    {
      id: "ion-mc-context",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Care afirmație despre publicarea romanului și timpul acțiunii este corectă?",
      options: [
        {
          id: "a",
          text: "Romanul a apărut în 1920, în perioada interbelică, iar acțiunea se petrece înainte de Primul Război Mondial, în Transilvania.",
        },
        { id: "b", text: "Romanul a apărut în 1920, iar acțiunea se petrece tot în perioada interbelică." },
        { id: "c", text: "Romanul a apărut înainte de Primul Război Mondial, iar acțiunea se petrece în perioada interbelică." },
        { id: "d", text: "Romanul a apărut în 1920, iar acțiunea se petrece într-un sat din Moldova." },
      ],
      correctOptionId: "a",
      explanation:
        "Romanul a fost publicat în 1920, deci în perioada interbelică, dar acțiunea se petrece mai devreme: înainte de Primul Război Mondial, în satul Pripas din Transilvania. Nu confunda momentul publicării cu timpul acțiunii.",
      lessonSection: { id: "3-2-incadrari-posibile", label: "3.2. Încadrări posibile" },
      basis:
        "Lecția, secțiunile 2 (Fișă rapidă) și 3.2; romanul, cap. XII („George”), replica unui căpitan: „Se știe doar că România e aliata noastră” (indiciu că acțiunea precede războiul).",
    },
    {
      id: "ion-mc-conflict-interior",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce conflict sugerează titlurile celor două părți ale romanului, „Glasul pământului” și „Glasul iubirii”?",
      options: [
        { id: "a", text: "Conflictul dintre învățătorul Herdelea și preotul Belciug." },
        { id: "b", text: "Conflictul interior al lui Ion, între dorința de a avea pământ și iubirea pentru Florica." },
        { id: "c", text: "Conflictul dintre satul Pripas și satul Jidovița." },
        { id: "d", text: "Conflictul dintre Ion și autoritățile austro-ungare." },
      ],
      correctOptionId: "b",
      explanation:
        "Cele două titluri numesc cele două forțe care îl atrag pe Ion: pământul și iubirea pentru Florica. De aceea, lecția le leagă de conflictul interior al personajului. Celelalte conflicte nu sunt sugerate de titlurile părților.",
      lessonSection: { id: "5-5-conflictul", label: "5.5. Conflictul" },
      basis: "Lecția, secțiunea 5.5 (interpretare marcată ca atare); titlurile părților, verificate în roman.",
    },
    {
      id: "ion-mc-hora-motiv",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt:
        "În scena horei (capitolul I), Ion se apropie de Ana, deși o iubește pe Florica. Ce motiv sugerează textul pentru această alegere?",
      options: [
        { id: "a", text: "Ana este fiica lui Vasile Baciu, un țăran înstărit, și poate aduce pământul pe care Ion nu îl are." },
        { id: "b", text: "Vasile Baciu îi ceruse lui Ion să o ia pe Ana de nevastă." },
        { id: "c", text: "Florica îl respinsese pe Ion în fața satului." },
        { id: "d", text: "Ana era singura fată nemăritată din Pripas." },
      ],
      correctOptionId: "a",
      explanation:
        "În capitolul I, Ion se gândește că Florica e mai săracă decât el, în timp ce Ana are pământuri, case și vite. Pe acest gând se sprijină interpretarea din lecție: pentru Ion, dorința de pământ trece înaintea iubirii. Vasile Baciu, dimpotrivă, îl jignește pe Ion pentru că e sărac, nu îi cere să se însoare cu Ana.",
      lessonSection: { id: "4-3-secventa-1-hora-de-duminica", label: "4.3. Secvența 1: hora de duminică" },
      basis:
        "Lecția, secțiunea 4.3 (interpretarea motivului); romanul, cap. I: „Dar Florica era mai săracă decât dânsul, iar Ana avea locuri și case și vite multe...”.",
    },
    {
      id: "ion-mc-caracterizare-directa",
      type: "multiple-choice",
      difficulty: "usor",
      prompt:
        "Replica doamnei Herdelea „Ion e băiat cumsecade. E muncitor, e harnic, e săritor, e isteț.” (capitolul II) este un exemplu de:",
      options: [
        { id: "a", text: "caracterizare directă, făcută de narator" },
        { id: "b", text: "autocaracterizare" },
        { id: "c", text: "caracterizare directă, făcută de un alt personaj" },
        { id: "d", text: "caracterizare indirectă, prin faptele personajului" },
      ],
      correctOptionId: "c",
      explanation:
        "Trăsăturile lui Ion sunt numite explicit, deci caracterizarea este directă. Le numește doamna Herdelea, un alt personaj, nu naratorul și nici Ion despre sine. Un exemplu de caracterizare directă făcută de narator este „Era iute și harnic, ca mă-sa.”",
      lessonSection: {
        id: "6-4-elemente-de-structura-relevante-pentru-personaj",
        label: "6.4. Elemente de structură relevante pentru personaj",
      },
      basis: "Lecția, secțiunea 6.4; romanul, cap. II.",
    },
    {
      id: "ion-mc-narator",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cum este naratorul romanului „Ion”?",
      options: [
        { id: "a", text: "Este Ion însuși, care își povestește viața la persoana I." },
        { id: "b", text: "Este un locuitor al satului care relatează doar ce a văzut cu ochii lui." },
        { id: "c", text: "Se adresează direct cititorului, la persoana a II-a." },
        { id: "d", text: "Relatează la persoana a III-a, nu participă la acțiune și cunoaște gândurile mai multor personaje." },
      ],
      correctOptionId: "d",
      explanation:
        "Naratorul nu este personaj, povestește la persoana a III-a și are acces la gândurile mai multor personaje. Pe aceste fapte se sprijină interpretarea din lecție: perspectivă obiectivă, cu narator omniscient.",
      lessonSection: { id: "5-4-perspectiva-narativa", label: "5.4. Perspectiva narativă" },
      basis: "Lecția, secțiunile 2 și 5.4.",
    },
    {
      id: "ion-af-pamant-dupa-nunta",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Ion devine stăpân pe pământurile lui Vasile Baciu imediat după nuntă.",
      correct: false,
      explanation:
        "Fals. Vasile Baciu îi promite pământurile ca zestre, dar după nuntă amână să i le dea. Ion ajunge stăpân pe ele abia după un lung conflict (capitolele VI–IX), iar în acest timp devine brutal cu Ana.",
      lessonSection: { id: "6-2-statutul-personajului", label: "6.2. Statutul personajului" },
      basis: "Lecția, secțiunea 6.2; romanul, cap. VI–IX.",
    },
    {
      id: "ion-af-sarutarea",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Scena în care Ion sărută pământul are loc după ce el a devenit stăpân pe pământurile lui Vasile Baciu.",
      correct: true,
      explanation:
        "Adevărat. În capitolul IX, „Sărutarea”, Ion merge pe câmp după ce a intrat în stăpânirea pământurilor, îngenunchează și sărută pământul.",
      lessonSection: { id: "4-4-secventa-2-sarutarea-pamantului", label: "4.4. Secvența 2: sărutarea pământului" },
      basis: "Lecția, secțiunea 4.4; romanul, cap. IX.",
    },
    {
      id: "ion-af-fapt-sau-interpretare",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement:
        "Afirmația „Prin sărutarea pământului, Ion își arată o pasiune aproape erotică pentru pământ” este un fapt din roman, nu o interpretare.",
      correct: false,
      explanation:
        "Fals. Faptul din roman este gestul: Ion îngenunchează și sărută pământul. „Pasiunea aproape erotică” este o interpretare a gestului. Este bine susținută de text (naratorul spune că Ion voia să-și mângâie pământurile „ca pe niște ibovnice credincioase”), dar rămâne o lectură pe care trebuie să o argumentezi.",
      lessonSection: { id: "4-4-secventa-2-sarutarea-pamantului", label: "4.4. Secvența 2: sărutarea pământului" },
      basis: "Lecția, secțiunea 4.4 și legenda din „Cum să folosești această lecție”; romanul, cap. IX.",
    },
    {
      id: "ion-af-final",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Romanul se încheie cu descrierea drumului pe care trăsura familiei Herdelea părăsește satul Pripas.",
      correct: true,
      explanation:
        "Adevărat. Finalul (capitolul XIII, „Sfârșitul”) descrie drumul parcurs în sens invers față de incipit, de trăsura familiei Herdelea, după sfințirea bisericii noi. Această oglindire stă la baza interpretării structurii ca circulară sau simetrică.",
      lessonSection: { id: "5-3-incipitul-si-finalul", label: "5.3. Incipitul și finalul" },
      basis: "Lecția, secțiunea 5.3; romanul, cap. I și XIII.",
    },
    {
      id: "ion-ra-partile-romanului",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Scrie titlurile celor două părți ale romanului.",
      // „pămîntului” (cu î) apare în ediții mai vechi.
      grading: { mode: "keywords", requiredGroups: [["glasul pământului", "glasul pămîntului"], ["glasul iubirii"]] },
      modelAnswer: "„Glasul pământului” și „Glasul iubirii”.",
      maxLength: 200,
      explanation:
        "Romanul are două părți: „Glasul pământului” (capitolele I–VI) și „Glasul iubirii” (capitolele VII–XIII). Titlurile sunt importante și pentru interpretare, pentru că sugerează conflictul interior al lui Ion.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, secțiunea 2; structura verificată în roman.",
    },
    {
      id: "ion-ra-stil-indirect-liber",
      type: "short-answer",
      difficulty: "mediu",
      prompt:
        "În capitolul III, gândurile lui Ion sunt redate astfel: „Vasăzică va trebui să fie veșnic slugă pe la alții, să muncească spre a îmbogăți pe alții?”. Cum se numește modul în care naratorul redă gândurile personajului la persoana a III-a, fără verb de declarație, păstrând întrebările și tonul acestuia?",
      grading: { mode: "keywords", requiredGroups: [["indirect liber", "indirectul liber"]] },
      modelAnswer: "Stilul indirect liber.",
      maxLength: 200,
      explanation:
        "Este stilul indirect liber. Gândul aparține lui Ion (se vede din întrebare și din tonul personajului), dar este redat de narator, la persoana a III-a, fără un verb ca „își zise” urmat de citarea gândului.",
      lessonSection: { id: "5-6-alte-elemente-pe-care-le-poti-alege", label: "5.6. Alte elemente pe care le poți alege" },
      basis: "Lecția, secțiunea 5.6; programa de examen (Anexa nr. 2 la OMEN nr. 4.923/2013), competența 2.2; romanul, cap. III.",
    },
    {
      id: "ion-ra-interpretare-sarutare",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Formulează, în 2–3 enunțuri, o interpretare a scenei în care Ion sărută pământul (capitolul IX). Separă ce se întâmplă în text de ceea ce interpretezi și leagă interpretarea de tema romanului.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat corect faptul din text: după ce devine stăpân pe pământuri, Ion îngenunchează și sărută pământul.",
          "Am formulat o interpretare a gestului, nu doar am repovestit scena.",
          "Am susținut interpretarea cu un detaliu din text (de exemplu, pământurile mângâiate „ca pe niște ibovnice credincioase”).",
          "Am legat scena de tema romanului (problematica pământului sau conflictul dintre pământ și iubire).",
        ],
      },
      modelAnswer:
        "După ce intră în stăpânirea pământurilor, Ion îngenunchează și sărută pământul (fapt). Gestul poate fi citit ca semn că pământul a devenit pentru el obiectul unei pasiuni aproape erotice: naratorul spune că voia să-și mângâie pământurile „ca pe niște ibovnice credincioase” (interpretare susținută de text). Scena ilustrează astfel tema romanului, problematica pământului: pentru Ion, pământul înseamnă demnitate și loc în comunitate.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un răspuns bun separă faptul (gestul) de interpretare, susține interpretarea cu un detaliu din text și o leagă de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "4-4-secventa-2-sarutarea-pamantului", label: "4.4. Secvența 2: sărutarea pământului" },
      basis: "Lecția, secțiunile 4.4 și 4.5; romanul, cap. IX.",
    },
  ],
};
