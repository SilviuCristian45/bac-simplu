import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Moara cu noroc” (content/romana/opere/moara-cu-noroc.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele au fost verificate pe text în două ediții
 * (vezi docs/rapoarte/audit-moara-cu-noroc-2026-10-25.md). Lecția este în stadiul draft-neverificat.
 */
export const moaraCuNorocExercises: ExerciseSet = {
  key: "romana/moara-cu-noroc",
  subject: "romana",
  work: "moara-cu-noroc",
  title: "„Moara cu noroc” de Ioan Slavici",
  exercises: [
    {
      id: "moara-mc-intriga",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce moment rupe echilibrul de la început și poate fi socotit intriga nuvelei?",
      options: [
        { id: "a", text: "Hotărârea familiei de a lua în arendă cârciuma de la Moara cu noroc." },
        { id: "b", text: "Sosirea lui Lică Sămădăul, care îi cere lui Ghiță să-i spună tot ce se petrece pe drum." },
        { id: "c", text: "Jefuirea arendașului." },
        { id: "d", text: "Judecata de la Oradea-Mare." },
      ],
      correctOptionId: "b",
      explanation:
        "Până la venirea lui Lică (cap. III), familia trăiește liniștită dintr-un câștig cinstit. Lică cere să știe „cine umblă pe drum, cine trece pe aici” și, de atunci, Ghiță nu mai poate rămâne la cârciumă fără voia lui. Hotărârea de a lua cârciuma ține de expozițiune; jaful și judecata vin mai târziu, în desfășurarea acțiunii. Delimitarea momentelor subiectului e o interpretare, dar aceasta este susținută de text.",
      lessonSection: { id: "5-2-secventa-1-sosirea-lui-lica", label: "5.2. Secvența 1: sosirea lui Lică" },
      basis: "Lecția, 5.2 și 6.2; nuvela, cap. I–IV.",
    },
    {
      id: "moara-mc-moartea-lui-ghita",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine îl ucide pe Ghiță în capitolul XVI?",
      options: [
        { id: "a", text: "Pintea, care îl găsește lângă Ana ucisă." },
        { id: "b", text: "Lică, cu propriul pistol." },
        { id: "c", text: "Răuț, la porunca lui Lică." },
        { id: "d", text: "Marți, sluga lui Ghiță." },
      ],
      correctOptionId: "c",
      explanation:
        "Când ușa cade, Lică îi poruncește lui Răuț „Dă foc!”, iar Răuț îl împușcă pe Ghiță în ceafă. Pintea ajunge abia mai târziu, pe urmele lui Lică. Confuzia apare des în rezumate: verifică faptele în text.",
      lessonSection: { id: "5-3-secventa-2-pastele-la-moara-cu-noroc", label: "5.3. Secvența 2: Paștele la Moara cu noroc" },
      basis: "Lecția, 5.3 și 8.4; nuvela, cap. XVI.",
    },
    {
      id: "moara-af-copiii",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "În incendiul de la sfârșitul nuvelei mor și copiii lui Ghiță.",
      correct: false,
      explanation:
        "Fals. De Paști, copiii sunt la Ineu cu bătrâna (cap. XIV). În ultimul capitol, bătrâna plânge cu copiii lângă cele cinci cruci, apoi „luă copiii și plecă mai departe” (cap. XVII). Greșeala apare și în unele descrieri ale nuvelei.",
      lessonSection: { id: "8-4-greseli-de-evitat", label: "8.4. Greșeli de evitat" },
      basis: "Lecția, 6.3 și 8.4; nuvela, cap. XIV și XVII; raportul de documentare, §3.2.",
    },
    {
      id: "moara-mc-titlu",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care lectură a titlului este susținută de textul nuvelei?",
      options: [
        { id: "a", text: "Titlul numește moara la care Ghiță macină grâu pentru oamenii din sat." },
        { id: "b", text: "Titlul arată că norocul familiei se păstrează până la sfârșit." },
        {
          id: "c",
          text: "Titlul poate fi citit ca ironic: locul „cu noroc”, unde câștigul era la început cinstit, devine locul nenorocirii.",
        },
        { id: "d", text: "Titlul este numele satului din care vine Ghiță." },
      ],
      correctOptionId: "c",
      explanation:
        "Moara este de mult părăsită, „cu lopețile rupte”, iar cârciuma era la început „cu noroc” pentru Ghiță (cap. II). La final rămân doar ruine și cele cinci cruci (cap. XVII). Lectura ironică este o interpretare, dar celelalte variante contrazic faptele din text.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2 (interpretare marcată ca atare); nuvela, cap. II și XVII.",
    },
    {
      id: "moara-mc-dovada",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt:
        "Care citat susține cel mai bine ideea că, pentru Ghiță, câștigul începe să cântărească mai mult decât familia?",
      options: [
        { id: "a", text: "„Omul să fie mulțumit cu sărăcia sa, căci, dacă e vorba, nu bogăția, ci liniștea colibei tale te face fericit.”" },
        {
          id: "b",
          text: "„Ghiță întâia oară în viața lui ar fi voit să n-aibă nevastă și copii, pentru ca să poată zice: «Prea puțin îmi pasă!»”",
        },
        { id: "c", text: "„Lică e om rău și om primejdios”" },
        { id: "d", text: "„Furaserăm niște cai, Lică și eu”" },
      ],
      correctOptionId: "b",
      explanation:
        "Citatul din capitolul IV arată direct gândul lui Ghiță: familia îl împiedică să se arunce în câștigul alături de Lică. Primul citat este sfatul bătrânei, nu gândul lui Ghiță; al treilea este părerea Anei despre Lică; al patrulea, o mărturisire a lui Pintea. Toate sunt citate reale, dar doar unul susține ideea cerută.",
      lessonSection: { id: "6-5-conflictul", label: "6.5. Conflictul" },
      basis: "Lecția, 6.5 și 7.2; nuvela, cap. I, IV, VI, VII.",
    },
    {
      id: "moara-mc-ana-despre-ghita",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt:
        "Replica Anei „Tu ești om, Lică, iară Ghiță nu e decât o muiere îmbrăcată în haine bărbătești” (cap. XIV) este, pentru Ghiță, un exemplu de:",
      options: [
        { id: "a", text: "caracterizare directă, făcută de narator" },
        { id: "b", text: "autocaracterizare" },
        { id: "c", text: "caracterizare directă, făcută de alt personaj, într-un moment de revoltă" },
        { id: "d", text: "caracterizare indirectă, prin faptele lui Ghiță" },
      ],
      correctOptionId: "c",
      explanation:
        "Ana îl judecă direct pe Ghiță, imediat ce vede că a plecat și a lăsat-o singură cu Lică. Fiind părerea unui personaj, rostită la mânie, ea nu este verdictul naratorului: la eseu, folosește-o ca pe o opinie a Anei, nu ca pe adevărul despre Ghiță.",
      lessonSection: { id: "7-7-modalitatile-de-caracterizare", label: "7.7. Modalitățile de caracterizare" },
      basis: "Lecția, 5.3 și 7.7; nuvela, cap. XIV.",
    },
    {
      id: "moara-mc-ordine",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Care este ordinea corectă a evenimentelor?",
      options: [
        { id: "a", text: "Jefuirea arendașului → învoiala cu Lică → Paștele la Moara cu noroc → judecata." },
        { id: "b", text: "Învoiala cu Lică → judecata → jefuirea arendașului → Paștele la Moara cu noroc." },
        { id: "c", text: "Învoiala cu Lică → jefuirea arendașului → judecata → Paștele la Moara cu noroc." },
        { id: "d", text: "Judecata → învoiala cu Lică → jefuirea arendașului → Paștele la Moara cu noroc." },
      ],
      correctOptionId: "c",
      explanation:
        "Ghiță se învoiește cu Lică în capitolul V. Arendașul este jefuit în noaptea din capitolul VII. Judecata are loc la Oradea-Mare, „vineri după Sfântul Dumitru” (cap. XI). Paștele, cu deznodământul, vine în primăvara următoare (cap. XIV–XVI).",
      lessonSection: { id: "6-2-momentele-subiectului", label: "6.2. Momentele subiectului" },
      basis: "Lecția, 2 și 6.2; nuvela, cap. V, VII, XI, XIV–XVI.",
    },
    {
      id: "moara-mc-pintea",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce relație are Ghiță cu Pintea după judecată (cap. XIII–XIV)?",
      options: [
        { id: "a", text: "Se înțelege cu el ca să-l prindă pe Lică, dar îi ascunde că jumătate din banii pe care i-i dă sunt partea lui de la Lică." },
        { id: "b", text: "Îl ajută pe Lică să scape de Pintea, fiindcă Pintea îl acuzase la judecată." },
        { id: "c", text: "Nu mai vorbește cu el până la final." },
        { id: "d", text: "Îi spune tot adevărul, iar Pintea îl ia sub protecție." },
      ],
      correctOptionId: "a",
      explanation:
        "Ghiță merge noaptea la Pintea și se înțelege cu el (cap. XIII). Mai târziu, îi dă hârtiile primite de la Lică, îi cere să i le schimbe în bani întregi și nu-i spune că jumătate din ele sunt ale lui, partea cuvenită de la Lică (cap. XIV). Alianța este reală, dar plină de neîncredere. Pintea, fost tovarăș al lui Lică (cap. VII), îl avertizează: „Dumnezeu să te ferească pe tine să nu te pună păcatul să mă înșeli pe mine!”",
      lessonSection: { id: "7-6-relatiile-dintre-personaje", label: "7.6. Relațiile dintre personaje" },
      basis: "Lecția, 7.5 și 7.6; nuvela, cap. VII, XIII–XIV.",
    },
    {
      id: "moara-mc-stil-indirect-liber",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt:
        "Ce procedeu se poate recunoaște în pasajul „Dar acești trei ani atârnau de Lică. Dacă se punea bine cu dânsul, putea să-i meargă de minune, căci oamenii ca Lică sunt darnici. E numai vorba ce va fi cerând Lică pentru ceea ce dă.” (cap. IV)?",
      options: [
        { id: "a", text: "Un dialog între Ghiță și Lică." },
        { id: "b", text: "Gândurile lui Ghiță, redate de narator la persoana a III-a, fără verb de declarație (stil indirect liber)." },
        { id: "c", text: "O intervenție a naratorului, care îl condamnă direct pe Ghiță." },
        { id: "d", text: "Un monolog al lui Lică despre afacerile lui." },
      ],
      correctOptionId: "b",
      explanation:
        "Socoteala îi aparține lui Ghiță (el își cântărește câștigul și riscul), dar este redată în vocea naratorului, la persoana a III-a, fără „își zise”. Nu e dialog: nu vorbește nimeni cu glas tare. Nu e o condamnare: naratorul nu-și spune părerea. Recunoașterea stilului indirect liber ține de interpretarea textului.",
      lessonSection: {
        id: "6-4-perspectiva-narativa-si-stilul-indirect-liber",
        label: "6.4. Perspectiva narativă și stilul indirect liber",
      },
      basis: "Lecția, 6.4; programa de examen (Anexa nr. 2 la OMEN nr. 4.923/2013), competența 2.2; nuvela, cap. IV.",
    },
    {
      id: "moara-af-fapt-sau-interpretare",
      type: "true-false",
      difficulty: "dificil",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Afirmația „Structura nuvelei este circulară” este un fapt din text, nu o interpretare.",
      correct: false,
      explanation:
        "Fals. Faptele din text sunt că bătrâna rostește prima și ultima replică și că aceleași cinci cruci apar la început (cap. II) și la sfârșit (cap. XVII). „Circulară” este numele pe care îl dăm acestei oglindiri: o interpretare bine susținută, pe care trebuie să o argumentezi cu faptele.",
      lessonSection: { id: "6-3-incipitul-si-finalul", label: "6.3. Incipitul și finalul" },
      basis: "Lecția, 6.3 și legenda din „Cum să folosești această lecție”; nuvela, cap. I, II, XVII.",
    },
    {
      id: "moara-ra-batrana",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Ce personaj rostește atât prima, cât și ultima replică a nuvelei?",
      grading: {
        mode: "keywords",
        // „bătrîna” (cu î) apare în ediții mai vechi.
        requiredGroups: [["bătrâna", "bătrîna", "batrana", "soacra", "soacra lui Ghiță", "mama Anei"]],
      },
      modelAnswer: "Bătrâna, mama Anei (soacra lui Ghiță).",
      maxLength: 200,
      explanation:
        "Nuvela începe cu sfatul bătrânei despre „liniștea colibei” (cap. I) și se încheie cu vorbele ei lângă cele cinci cruci: „Simțeam eu că nu are să iasă bine; dar așa le-a fost dat!...” (cap. XVII). Această simetrie susține lectura structurii ca circulară.",
      lessonSection: { id: "6-3-incipitul-si-finalul", label: "6.3. Incipitul și finalul" },
      basis: "Lecția, 4.4 și 6.3; nuvela, cap. I și XVII.",
    },
    {
      id: "moara-ra-secventa-pastelui",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, secvența de Paști (cap. XIV–XVI), legând-o de tema nuvelei. Separă ce se întâmplă în text de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat corect faptele: Ghiță o lasă pe Ana singură cu Lică și pleacă după Pintea; Ana i se dăruiește lui Lică; Ghiță o ucide la întoarcere.",
          "Am formulat o interpretare, nu doar am repovestit.",
          "Am susținut interpretarea cu un detaliu sau un citat verificat (de exemplu, vorbele lui Pintea despre „momeală”).",
          "Am legat secvența de tema nuvelei (dorința de înavuțire și efectele ei asupra omului și a familiei).",
        ],
      },
      modelAnswer:
        "De Paști, Ghiță o lasă pe Ana singură cu Lică și pleacă după Pintea, ca să-l prindă pe Lică cu banii furați; Ana i se dăruiește lui Lică, iar Ghiță o ucide la întoarcere (fapte, cap. XIV–XVI). Secvența arată capătul drumului deschis de dorința de câștig: Ghiță își folosește soția ca momeală într-o răzbunare, lucru de care se miră chiar Pintea: „n-aș fi putut să-mi arunc o nevastă ca a ta drept momeală în cursa cu care vreau să-l prind” (interpretare susținută de text). Familia, pentru care Ghiță spunea că face totul, este distrusă de mâna lui: tema se încheie tragic.",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, folosește un detaliu verificat din text și leagă secvența de temă. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "5-3-secventa-2-pastele-la-moara-cu-noroc", label: "5.3. Secvența 2: Paștele la Moara cu noroc" },
      basis: "Lecția, 4.1 și 5.3; nuvela, cap. XIV–XVI.",
    },
  ],
};
