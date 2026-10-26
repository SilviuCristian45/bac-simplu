// Run with: npm run test:exercises
// Checks specific to „Alexandru Lăpușneanul”: the exercise set, the data of the interactive figures and
// the local saving of the session (isolated from the other works).
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { extractHeadings, extractTitle, slugifyHeading } from "../content/headings.ts";
import { OPERA_SLUGS } from "../content/romana-opere-slugs.ts";
import { alexandruLapusneanulExercises as set } from "../../content/romana/exercitii/alexandru-lapusneanul.ts";
import * as content from "../../content/romana/opere/alexandru-lapusneanul-interactiv.ts";
import { checkAnswer, toPublicExercise } from "./grading.ts";
import { EMPTY_ENTRY, changeDraft, recordCheck } from "./session-state.ts";
import { restoreSession, serializeSession, sessionStorageKey } from "./session-storage.ts";

const lessonSource = readFileSync(new URL("../../content/romana/opere/alexandru-lapusneanul.mdx", import.meta.url), "utf8");
const headings = extractHeadings(lessonSource, "alexandru-lapusneanul.mdx");
const headingText = new Map(headings.map((heading) => [heading.id, heading.text]));
const choiceExercises = set.exercises.filter((exercise) => exercise.type === "multiple-choice");

describe("lecția „Alexandru Lăpușneanul”", () => {
  it("este înregistrată, are titlul din metadate și rămâne nevalidată", () => {
    assert.ok(OPERA_SLUGS.includes("alexandru-lapusneanul"));
    assert.equal(extractTitle(lessonSource), "„Alexandru Lăpușneanul” de Costache Negruzzi");
    assert.match(lessonSource, /status: "draft-neverificat"/);
    assert.match(lessonSource, /lastReviewed: null/);
  });

  it("spune explicit că Negruzzi nu este autor canonic în programa aplicabilă", () => {
    assert.match(lessonSource, /Costache Negruzzi nu se află pe această listă/);
  });

  it("fiecare componentă importată este folosită, iar fiecare componentă folosită este importată", () => {
    const imported = /import \{([^}]*)\} from "@\/components\/lesson\/figures\/alexandru-lapusneanul"/.exec(lessonSource)[1]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);
    const used = [...lessonSource.matchAll(/^<([A-Z]\w*) \/>$/gm)].map((match) => match[1]);
    assert.deepEqual([...new Set(used)].sort(), [...imported].sort());
  });
});

describe("setul de exerciții „Alexandru Lăpușneanul”", () => {
  it("are 12–16 exerciții, de tipuri variate, cu dificultăți variate", () => {
    assert.ok(set.exercises.length >= 12 && set.exercises.length <= 16, `${set.exercises.length} exerciții`);
    const types = new Set(set.exercises.map((exercise) => exercise.type));
    assert.deepEqual([...types].sort(), ["multiple-choice", "short-answer", "true-false"]);
    assert.equal(new Set(set.exercises.map((exercise) => exercise.difficulty)).size, 3);
  });

  it("id-urile au prefixul operei și sunt unice", () => {
    for (const exercise of set.exercises) assert.match(exercise.id, /^lapusneanul-(mc|af|ra)-[a-z0-9-]+$/);
    assert.equal(new Set(set.exercises.map((exercise) => exercise.id)).size, set.exercises.length);
  });

  it("etichetele secțiunilor sunt chiar titlurile din lecție", () => {
    for (const exercise of set.exercises) {
      assert.equal(headingText.get(exercise.lessonSection.id), exercise.lessonSection.label, exercise.id);
    }
  });

  it("variantele corecte nu sunt în mod repetat cele mai lungi și nu stau mereu pe aceeași poziție", () => {
    const length = (option) => option.text.length;
    const longest = choiceExercises.filter((exercise) => {
      const correct = exercise.options.find((option) => option.id === exercise.correctOptionId);
      return exercise.options.every((option) => option === correct || length(option) < length(correct));
    });
    assert.ok(longest.length <= Math.floor(choiceExercises.length / 3), `${longest.length} din ${choiceExercises.length} au varianta corectă cea mai lungă`);
    const positions = new Set(choiceExercises.map((exercise) => exercise.options.findIndex((option) => option.id === exercise.correctOptionId)));
    assert.equal(positions.size, 4);
  });

  it("întrebările adevărat/fals nu au toate același răspuns", () => {
    const answers = set.exercises.filter((exercise) => exercise.type === "true-false").map((exercise) => exercise.correct);
    assert.ok(answers.includes(true) && answers.includes(false));
  });

  it("variantele sunt distincte, câte patru la fiecare întrebare", () => {
    for (const exercise of choiceExercises) {
      assert.equal(new Set(exercise.options.map((option) => option.text)).size, exercise.options.length, exercise.id);
      assert.ok(exercise.options.length === 4, `${exercise.id}: ${exercise.options.length} variante`);
    }
  });

  it("fiecare exercițiu are explicație și sursă", () => {
    for (const exercise of set.exercises) {
      assert.ok(exercise.explanation.length > 60, exercise.id);
      assert.ok(exercise.basis.length > 0, exercise.id);
    }
  });

  it("răspunsurile corecte nu ajung în datele publice", () => {
    for (const exercise of set.exercises) {
      const serialized = JSON.stringify(toPublicExercise(exercise));
      for (const secret of ["correctOptionId", "explanation", "modelAnswer", "criteria", "requiredGroups", "basis"]) {
        assert.ok(!serialized.includes(secret), `${exercise.id} conține ${secret}`);
      }
      assert.ok(!serialized.includes(exercise.explanation), exercise.id);
      if (exercise.type === "short-answer") assert.ok(!serialized.includes(exercise.modelAnswer), exercise.id);
    }
  });

  it("alegere multiplă și adevărat/fals: răspunsul corect este recunoscut, celelalte nu", () => {
    for (const exercise of choiceExercises) {
      for (const option of exercise.options) {
        const expected = option.id === exercise.correctOptionId ? "correct" : "incorrect";
        assert.equal(checkAnswer(exercise, { type: "multiple-choice", optionId: option.id }).status, expected, `${exercise.id}/${option.id}`);
      }
    }
    for (const exercise of set.exercises.filter((item) => item.type === "true-false")) {
      assert.equal(checkAnswer(exercise, { type: "true-false", value: exercise.correct }).status, "correct", exercise.id);
      assert.equal(checkAnswer(exercise, { type: "true-false", value: !exercise.correct }).status, "incorrect", exercise.id);
    }
  });

  it("răspunsul scurt cu termeni-cheie: variante de scriere acceptate, răspunsuri greșite nerecunoscute", () => {
    const exercise = set.exercises.find((item) => item.id === "lapusneanul-ra-boieri");
    const status = (text) => checkAnswer(exercise, { type: "short-answer", text }).status;
    for (const text of ["47", "Au fost uciși 47 de boieri.", "patruzeci și șapte", "PATRUZECI ȘI ȘEPTE", "Patruzeci si sapte de boieri"]) {
      assert.equal(status(text), "correct", text);
    }
    for (const text of ["74", "470", "patruzeci", "șapte", "48 de boieri", "o sută"]) assert.equal(status(text), "not-recognized", text);
  });

  it("răspunsul scurt cu autoevaluare întoarce criteriile, fără verdict", () => {
    const exercise = set.exercises.find((item) => item.id === "lapusneanul-ra-comentariu-biserica");
    const result = checkAnswer(exercise, { type: "short-answer", text: "Un comentariu." });
    assert.equal(result.status, "self-assessment");
    assert.ok(result.criteria.length >= 3);
  });
});

describe("datele figurilor interactive", () => {
  const quizzes = [content.trasaturiRomantismQuiz, content.faptInterpretareQuiz, content.glosarQuiz, content.caracterizareQuiz];
  const explorers = [content.mottouriItems, content.replicileItems];

  it("quiz-urile: răspunsul corect există printre variante, fiecare enunț are explicație și sursă", () => {
    for (const quiz of quizzes) {
      const ids = quiz.choices.map((choice) => choice.id);
      assert.equal(new Set(ids).size, ids.length, quiz.title);
      assert.equal(new Set(quiz.items.map((item) => item.id)).size, quiz.items.length, quiz.title);
      for (const item of quiz.items) {
        assert.match(item.id, /^[a-z0-9-]+$/, `${quiz.title}/${item.id}`);
        const choices = item.choices ?? quiz.choices;
        assert.ok(choices.length >= 2, `${quiz.title}/${item.id}`);
        assert.equal(new Set(choices.map((choice) => choice.id)).size, choices.length, `${quiz.title}/${item.id}`);
        assert.ok(choices.some((choice) => choice.id === item.correct), `${quiz.title}/${item.id}`);
        assert.ok(item.explanation.length > 30 && item.source.length > 0, `${quiz.title}/${item.id}`);
      }
    }
  });

  it("glosarul: sensul din nota autorului nu stă mereu pe aceeași poziție", () => {
    const positions = content.glosarQuiz.items.map((item) => item.choices.findIndex((choice) => choice.id === item.correct));
    assert.equal(new Set(positions).size, 3);
  });

  it("quiz-ul fapt/interpretare are ambele tipuri de răspuns", () => {
    const answers = new Set(content.faptInterpretareQuiz.items.map((item) => item.correct));
    assert.deepEqual([...answers].sort(), ["fapt", "interpretare"]);
  });

  it("explorările: id-uri unice, câmpuri și sursă prezente", () => {
    for (const items of explorers) {
      assert.equal(new Set(items.map((item) => item.id)).size, items.length);
      for (const item of items) {
        assert.ok(item.fields.length >= 3 && item.source.length > 0, item.id);
        assert.equal(new Set(item.fields.map((field) => field.label)).size, item.fields.length, item.id);
      }
    }
    assert.equal(content.mottouriItems.length, 4);
  });

  it("harta capitolelor: patru capitole cu motto, fiecare într-un singur moment al subiectului", () => {
    assert.equal(content.lapusneanulChapters.length, 4);
    for (const chapter of content.lapusneanulChapters) {
      assert.ok(chapter.title && chapter.facts.length > 0, chapter.numeral);
      const groups = content.lapusneanulMoments.filter((group) => chapter.number >= group.range[0] && chapter.number <= group.range[1]);
      assert.equal(groups.length, 1, chapter.numeral);
    }
  });

  it("motto-urile din harta capitolelor apar și în lecție", () => {
    for (const chapter of content.lapusneanulChapters) assert.ok(lessonSource.includes(chapter.title), chapter.title);
  });

  it("harta relațiilor: muchiile leagă personaje existente, la etape existente", () => {
    const steps = content.relatiiLapusneanulFigure.steps;
    assert.equal(new Set(steps.map((step) => step.id)).size, steps.length);
    for (const edge of content.lapusneanulEdges) {
      assert.ok(edge.from in content.lapusneanulPeople && edge.to in content.lapusneanulPeople, `${edge.from}-${edge.to}`);
      assert.ok(edge.step >= 0 && edge.step < steps.length, `${edge.from}-${edge.to}`);
    }
  });

  it("planurile de eseu trimit doar la titluri care există în lecție", () => {
    for (const plan of content.essayPlansLapusneanul) {
      for (const block of plan.blocks) {
        for (const heading of block.see) assert.ok(headingText.has(slugifyHeading(heading)), `${plan.id}/${block.id}: „${heading}”`);
      }
    }
  });

  it("lista de autoevaluare are grup pentru fiecare cerință și grupul de redactare", () => {
    const ids = content.checklistGroupsLapusneanul.map((group) => group.id);
    for (const id of ["personaj", "particularitati", "redactare"]) assert.ok(ids.includes(id), id);
  });
});

describe("salvarea locală pentru „Alexandru Lăpușneanul”", () => {
  const exercises = set.exercises.map(toPublicExercise);
  const blank = () => exercises.map(() => EMPTY_ENTRY);
  const choice = (value) => ({ kind: "choice", value });

  it("cheia de stocare este proprie setului", () => {
    assert.equal(sessionStorageKey(set.key), "bac-simplu:exercitii:romana/alexandru-lapusneanul");
    for (const other of ["romana/ion", "romana/moara-cu-noroc", "romana/povestea-lui-harap-alb"]) {
      assert.notEqual(sessionStorageKey(set.key), sessionStorageKey(other));
    }
  });

  it("restaurează o sesiune și nu salvează răspunsuri corecte sau explicații", () => {
    const entries = blank();
    entries[0] = recordCheck(changeDraft(EMPTY_ENTRY, choice("a")), choice("a"), "incorrect");
    entries[1] = changeDraft(EMPTY_ENTRY, choice("b"));
    const raw = serializeSession(set.key, exercises, { index: 1, finished: false, entries });
    const restored = restoreSession(raw, set.key, exercises);
    assert.equal(restored.outcome, "restored");
    assert.equal(restored.resetCount, 0);
    assert.equal(restored.index, 1);
    assert.deepEqual(restored.entries, entries);
    for (const exercise of set.exercises) assert.ok(!raw.includes(exercise.explanation), exercise.id);
    assert.ok(!/correctOptionId|correctAnswer|explanation|criteria/.test(raw));
  });

  it("datele altui set sunt ignorate", () => {
    const raw = serializeSession("romana/povestea-lui-harap-alb", exercises, { index: 0, finished: false, entries: blank() });
    assert.equal(restoreSession(raw, set.key, exercises).outcome, "discarded");
  });
});
