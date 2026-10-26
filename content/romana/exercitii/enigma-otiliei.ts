import type { ExerciseSet } from "@/lib/exercises/types";

/**
 * Exerciții pentru lecția „Enigma Otiliei” (content/romana/opere/enigma-otiliei.mdx).
 * Fiecare exercițiu trimite la o secțiune existentă a lecției (lessonSection.id = ancora titlului);
 * „basis” arată de unde provine conținutul. Faptele și citatele au fost verificate în ediția BPT 1967
 * (vezi docs/rapoarte/audit-enigma-otiliei-2026-10-26.md). Lecția este în stadiul draft-neverificat.
 * Sistemul de exerciții oferă o singură explicație pentru fiecare exercițiu; ea spune și de ce celelalte variante sunt greșite.
 */
export const enigmaOtilieiExercises: ExerciseSet = {
  key: "romana/enigma-otiliei",
  subject: "romana",
  work: "enigma-otiliei",
  title: "„Enigma Otiliei” de George Călinescu",
  exercises: [
    {
      id: "otilia-mc-felix-origine",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "De unde vine Felix Sima când ajunge, în prima seară, în strada Antim?",
      options: [
        { id: "a", text: "Din Iași, unde terminase liceul." },
        { id: "b", text: "De la Paris, unde studiase medicina." },
        { id: "c", text: "De la moșia lui Pascalopol." },
        { id: "d", text: "Din casa părinților lui Stănică Rațiu." },
      ],
      correctOptionId: "a",
      explanation:
        "Felix „sosise cu o oră mai înainte în București venind din Iași”, unde fusese elev la Liceul Internat, și vine la tutorele lui, moș Costache. Medicina abia urmează s-o studieze la București, iar la moșia lui Pascalopol merge mai târziu, cu Otilia (cap. VI).",
      lessonSection: { id: "7-3-felix-sima", label: "7.3. Felix Sima" },
      basis: "Lecția, 2 și 7.3; romanul, cap. I (vol. I, p. 9).",
    },
    {
      id: "otilia-mc-aparitie",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "În ce an a apărut romanul „Enigma Otiliei”?",
      options: [
        { id: "a", text: "În 1920, la Editura Alcalay." },
        { id: "b", text: "În 1933, după un volum de critică." },
        { id: "c", text: "În 1909, anul în care începe acțiunea." },
        { id: "d", text: "În 1938." },
      ],
      correctOptionId: "d",
      explanation:
        "Prefața ediției din 1967 dă anul 1938. În 1909 începe acțiunea („într-o seară de la începutul lui iulie 1909”), în 1920 a apărut „Ion” al lui Rebreanu, iar în 1933 Călinescu publicase alt roman, „Cartea nunții”.",
      lessonSection: { id: "2-fisa-rapida", label: "2. Fișă rapidă" },
      basis: "Lecția, 2; prefața ediției din 1967 (vol. I, p. V–VI).",
    },
    {
      id: "otilia-af-casatorie",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "La sfârșitul romanului, Otilia se căsătorește cu Felix.",
      correct: false,
      explanation:
        "Fals. Otilia îi spune lui Felix că acum nu se pot căsători, pleacă a doua zi cu Pascalopol la Paris, iar Felix află „numai că se căsătorise cu Pascalopol”. În epilog, Felix este căsătorit cu altcineva, iar Otilia, despărțită de Pascalopol, cu un alt bărbat.",
      lessonSection: { id: "5-4-secventa-3-plecarea-otiliei-si-epilogul", label: "5.4. Secvența 3: plecarea Otiliei și epilogul" },
      basis: "Lecția, 5.4 și 8.5; romanul, cap. XX (vol. II, p. 344–348).",
    },
    {
      id: "otilia-mc-furt",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Cine ia pachetul cu bani de sub salteaua lui moș Costache bolnav?",
      options: [
        { id: "a", text: "Aglae, sora lui moș Costache." },
        { id: "b", text: "Stănică Rațiu, ginerele Aglaei." },
        { id: "c", text: "Marina, servitoarea lui moș Costache." },
        { id: "d", text: "Titi, fiul cel mic al Aglaei." },
      ],
      correctOptionId: "b",
      explanation:
        "Stănică o convinge pe Otilia să iasă în oraș, rămâne singur cu bătrânul și scoate pachetul de sub saltea; moș Costache strigă „Banii, ba-banii, pu-pungașule!” și se prăbușește. Aglae caută banii abia după moartea fratelui ei, fără să-i găsească.",
      lessonSection: { id: "5-3-secventa-2-moartea-lui-mos-costache", label: "5.3. Secvența 2: moartea lui moș Costache" },
      basis: "Lecția, 5.3; romanul, cap. XX (vol. II, p. 311).",
    },
    {
      id: "otilia-mc-suma",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Ce face moș Costache, bolnav, ca s-o ajute pe Otilia?",
      options: [
        { id: "a", text: "Îi lasă toată averea printr-un testament scris în fața familiei." },
        { id: "b", text: "Îi dă toți banii lui Felix, ca să i-i păstreze până la majorat." },
        { id: "c", text: "Îi dă lui Pascalopol, pentru ea, un pachet de o sută de mii." },
        { id: "d", text: "O adoptă legal, cu acordul Aglaei." },
      ],
      correctOptionId: "c",
      explanation:
        "Bătrânul „luă numai un pachețel de o sută de mii din cele trei și-l dădu lui Pascalopol pentru fe-fetiță”, iar restul l-a ținut sub saltea, de unde îl fură Stănică. Pascalopol depune apoi acești bani la bancă, pe numele Otiliei. Bătrânul nu lasă testament, nu îi dă bani lui Felix, iar Aglae se opune adoptării Otiliei. Atenție la cifrele care circulă în unele materiale: în ediția verificată suma este „o sută de mii”.",
      lessonSection: { id: "5-3-secventa-2-moartea-lui-mos-costache", label: "5.3. Secvența 2: moartea lui moș Costache" },
      basis: "Lecția, 5.3, 7.4 și 8.5; romanul, cap. XX (vol. II, p. 303 și 308).",
    },
    {
      id: "otilia-mc-incipit",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce îi răspunde moș Costache lui Felix, când acesta îl caută prima oară?",
      options: [
        { id: "a", text: "Îl invită sus, la masa de table." },
        { id: "b", text: "Că nu stă nimeni acolo." },
        { id: "c", text: "Că Felix trebuie să stea la Aglae." },
        { id: "d", text: "Îi cere să aștepte până dimineață." },
      ],
      correctOptionId: "b",
      explanation:
        "Bătrânul îi spune „Nu-nu-nu știu... nu-nu stă nimeni aici, nu cunosc...” și urcă înapoi. Abia când Felix sună a doua oară, Otilia strigă de sus „Dar, papa, e Felix!”, iar bătrânul îl cheamă sus. Replica revine în finalul romanului.",
      lessonSection: { id: "5-2-secventa-1-sosirea-lui-felix-in-strada-antim", label: "5.2. Secvența 1: sosirea lui Felix în strada Antim" },
      basis: "Lecția, 5.2 și 6.3; romanul, cap. I (vol. I, p. 8–12).",
    },
    {
      id: "otilia-mc-enigma",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Cine spune, în epilog, despre Otilia: „A fost o fată delicioasă, dar ciudată. Pentru mine e o enigmă”?",
      options: [
        { id: "a", text: "Felix, către Georgeta, în cap. XI." },
        { id: "b", text: "Stănică, către Olimpia." },
        { id: "c", text: "Aglae, către Aurica și Olimpia." },
        { id: "d", text: "Pascalopol, către Felix." },
      ],
      correctOptionId: "d",
      explanation:
        "Pascalopol, îmbătrânit, îl recunoaște pe Felix în tren, îi arată o fotografie a Otiliei și îi spune aceste cuvinte. Naratorul adaugă: „Nu numai Otilia era o enigmă, ci și destinul însuși.” Felix vorbește cu Georgeta despre Otilia mult mai devreme (cap. XI), dar cu alte cuvinte.",
      lessonSection: { id: "4-2-titlul", label: "4.2. Titlul" },
      basis: "Lecția, 4.2 și 5.4; romanul, cap. XX (vol. II, p. 348).",
    },
    {
      id: "otilia-af-structura",
      type: "true-false",
      difficulty: "mediu",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Romanul începe și se încheie în strada Antim, în fața casei lui moș Costache.",
      correct: true,
      explanation:
        "Adevărat. În cap. I, Felix caută casa lui moș Costache în strada Antim; în epilog, trece din nou pe acolo, găsește casa „leproasă, înnegrită” și își amintește replica „Aici nu stă nimeni!”. De aici se poate susține ideea de structură circulară, care este o interpretare.",
      lessonSection: { id: "6-3-incipitul-si-finalul", label: "6.3. Incipitul și finalul" },
      basis: "Lecția, 6.3; romanul, cap. I și XX (vol. I, p. 3–8; vol. II, p. 348–349).",
    },
    {
      id: "otilia-mc-perspectiva",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "Care afirmație descrie corect perspectiva narativă din „Enigma Otiliei”?",
      options: [
        { id: "a", text: "Narator la persoana a III-a, omniscient, dar multe scene sunt văzute prin ochii lui Felix." },
        { id: "b", text: "Felix povestește la persoana I, ca într-un jurnal ținut în anii de studenție, după moartea tatălui său." },
        { id: "c", text: "Otilia povestește la persoana I, în scrisori trimise lui Felix de la Paris, după plecare." },
        { id: "d", text: "Narator la persoana a III-a care nu cunoaște gândurile niciunui personaj." },
      ],
      correctOptionId: "a",
      explanation:
        "Naratorul nu participă la acțiune și cunoaște gândurile mai multor personaje (de exemplu, ce gândește Stănică „în sinea lui”), deci nu este limitat la exterior. Cele mai multe scene sunt însă văzute prin ochii lui Felix, care sosește la început și privește casa la sfârșit. Prefața îl numește pe Felix „martorul”.",
      lessonSection: { id: "6-4-perspectiva-narativa", label: "6.4. Perspectiva narativă" },
      basis: "Lecția, 6.4; romanul, vol. II, p. 304 și 339; prefața, vol. I, p. XV.",
    },
    {
      id: "otilia-mc-tip",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce tip uman ilustrează moș Costache, după prefața ediției din 1967?",
      options: [
        { id: "a", text: "Arivistul demagog." },
        { id: "b", text: "Avarul." },
        { id: "c", text: "Fata bătrână." },
        { id: "d", text: "Adolescentul." },
      ],
      correctOptionId: "b",
      explanation:
        "Prefața scrie: „moș Costache e Avarul, Aurica e Fata bătrână, Otilia e Adolescenta, Aglae, «baba absolută», iar Stănică Rațiu, Arivistul demagog”. În roman, avariția lui se vede în fapte: nici bolnav nu se desparte de bani.",
      lessonSection: { id: "3-3-trasaturi-ale-realismului-balzacian-in-roman", label: "3.3. Trăsături ale realismului balzacian în roman" },
      basis: "Lecția, 3.3 și 7.4; prefața, vol. I, p. VIII.",
    },
    {
      id: "otilia-mc-caracterizare",
      type: "multiple-choice",
      difficulty: "dificil",
      prompt: "„Otilia era socotită ușuratică și se dovedea devotată.” Ce modalitate de caracterizare ilustrează enunțul?",
      options: [
        { id: "a", text: "Autocaracterizarea Otiliei." },
        { id: "b", text: "Caracterizare directă, făcută de Felix." },
        { id: "c", text: "Caracterizare directă, făcută de narator." },
        { id: "d", text: "Caracterizare indirectă, prin portret fizic." },
      ],
      correctOptionId: "c",
      explanation:
        "Enunțul aparține naratorului, care numește direct o trăsătură („devotată”) și corectează părerea celorlalți („socotită ușuratică”). Nu vorbește Otilia despre ea și nici Felix, iar enunțul nu descrie înfățișarea.",
      lessonSection: { id: "7-8-modalitatile-de-caracterizare", label: "7.8. Modalitățile de caracterizare" },
      basis: "Lecția, 7.2 și 7.8; romanul, cap. XX (vol. II, p. 307).",
    },
    {
      id: "otilia-af-adoptie",
      type: "true-false",
      difficulty: "usor",
      prompt: "Stabilește dacă afirmația este adevărată sau falsă.",
      statement: "Aglae este de acord ca moș Costache s-o adopte pe Otilia.",
      correct: false,
      explanation:
        "Fals. Când află că fratele ei vrea s-o adopte pe Otilia, Aglae izbucnește: „Niciodată! Cât trăiesc eu, niciodată.” Adoptarea ar fi dat Otiliei drepturi asupra averii pe care familia Tulea o vrea pentru sine.",
      lessonSection: { id: "7-6-familia-tulea-si-stanica-ratiu", label: "7.6. Familia Tulea și Stănică Rațiu" },
      basis: "Lecția, 3.3 și 7.6; romanul, cap. IX (vol. I, p. 230).",
    },
    {
      id: "otilia-mc-balzac",
      type: "multiple-choice",
      difficulty: "mediu",
      prompt: "Ce trăsătură a romanului realist de tip balzacian ilustrează descrierea străzii Antim și a casei lui moș Costache din incipit?",
      options: [
        { id: "a", text: "Monologul interior al personajului principal, Felix Sima." },
        { id: "b", text: "Fantasticul, care face casa misterioasă." },
        { id: "c", text: "Fragmentarea timpului și a acțiunii." },
        { id: "d", text: "Mediul descris amănunțit, care anunță caracterul." },
      ],
      correctOptionId: "d",
      explanation:
        "Strada, „o caricatură în moloz a unei străzi italice”, și casa dărăpănată sunt descrise înaintea oamenilor și pregătesc portretul stăpânului zgârcit. Romanul nu folosește monologul interior în incipit, nu are elemente fantastice, iar acțiunea este cronologică.",
      lessonSection: { id: "3-3-trasaturi-ale-realismului-balzacian-in-roman", label: "3.3. Trăsături ale realismului balzacian în roman" },
      basis: "Lecția, 3.3 și 6.6; romanul, cap. I (vol. I, p. 4–7).",
    },
    {
      id: "otilia-mc-felix-final",
      type: "multiple-choice",
      difficulty: "usor",
      prompt: "Ce devine Felix, după cum arată epilogul romanului?",
      options: [
        { id: "a", text: "Avocat, ca Stănică." },
        { id: "b", text: "Prefect, ajutat de relațiile politice ale soției." },
        { id: "c", text: "Profesor universitar, specialist cunoscut." },
        { id: "d", text: "Moșier, după ce cumpără moșia lui Pascalopol." },
      ],
      correctOptionId: "c",
      explanation:
        "Epilogul spune că Felix ajunge „profesor universitar, specialist cunoscut” și se căsătorește. Prefect devine Stănică, care este avocat, iar Pascalopol trăiește încă: Felix îl întâlnește în tren.",
      lessonSection: { id: "5-4-secventa-3-plecarea-otiliei-si-epilogul", label: "5.4. Secvența 3: plecarea Otiliei și epilogul" },
      basis: "Lecția, 5.4 și 7.3; romanul, cap. XX (vol. II, p. 347).",
    },
    {
      id: "otilia-ra-strada",
      type: "short-answer",
      difficulty: "usor",
      prompt: "Pe ce stradă din București se află casa lui moș Costache?",
      grading: {
        mode: "keywords",
        requiredGroups: [["antim"]],
      },
      modelAnswer: "Pe strada Antim.",
      maxLength: 200,
      explanation:
        "Felix caută casa tutorelui său „în strada Antim” în prima seară, iar în epilog revine tot acolo. Nu confunda: casa moștenită de Felix de la tatăl lui este „în strada Lăpușneanu”.",
      lessonSection: { id: "5-2-secventa-1-sosirea-lui-felix-in-strada-antim", label: "5.2. Secvența 1: sosirea lui Felix în strada Antim" },
      basis: "Lecția, 2, 5.2 și 7.3; romanul, cap. I (vol. I, p. 3 și 9) și XX (vol. II, p. 348).",
    },
    {
      id: "otilia-ra-comentariu-final",
      type: "short-answer",
      difficulty: "dificil",
      prompt:
        "Comentează, în 3–4 enunțuri, plecarea Otiliei și cartea poștală trimisă lui Felix (cap. XX), legându-le de o trăsătură a personajului. Separă ce se întâmplă în text de ceea ce interpretezi.",
      grading: {
        mode: "self-assessment",
        criteria: [
          "Am precizat corect faptele: Otilia îi spune lui Felix că acum nu se pot căsători, pleacă cu Pascalopol și îi trimite o carte poștală.",
          "Am numit o trăsătură (de exemplu, generozitatea sau luciditatea) și am arătat că reiese din episod.",
          "Am formulat o interpretare, nu doar am repovestit.",
          "Am folosit un detaliu sau un citat verificat (de exemplu, din cartea poștală sau replica despre „rostul femeii”).",
        ],
      },
      modelAnswer:
        "După moartea lui moș Costache, Otilia îi spune lui Felix că acum nu se pot căsători, pleacă la Paris cu Pascalopol și îi scrie că cine a fost în stare de atâta stăpânire „e capabil să învingă și o dragoste nepotrivită pentru marele lui viitor” (fapte). Plecarea poate fi citită ca un gest de generozitate: Otilia renunță la Felix ca să nu-i încurce cariera. Discuția despre „rostul femeii” arată însă și luciditatea ei: fără avere, își alege siguranța (interpretare).",
      maxLength: 1200,
      explanation:
        "Nu există un singur răspuns corect. Un comentariu bun separă faptele de interpretare, numește o trăsătură, o susține cu un detaliu din text și o leagă de construcția personajului. Verificarea automată nu poate evalua această sarcină: compară-ți răspunsul cu criteriile.",
      lessonSection: { id: "5-4-secventa-3-plecarea-otiliei-si-epilogul", label: "5.4. Secvența 3: plecarea Otiliei și epilogul" },
      basis: "Lecția, 5.4, 7.2 și 8.4; romanul, cap. XX (vol. II, p. 337–346).",
    },
  ],
};
