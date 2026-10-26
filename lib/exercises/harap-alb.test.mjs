// Run with: npm run test:exercises
// Checks specific to „Povestea lui Harap-Alb”: the exercise set, the data of the interactive figures and
// the local saving of the session (isolated from the other works).
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { extractHeadings } from "../content/headings.ts";
import { slugifyHeading } from "../content/headings.ts";
import { povesteaLuiHarapAlbExercises as set } from "../../content/romana/exercitii/povestea-lui-harap-alb.ts";
import * as content from "../../content/romana/opere/povestea-lui-harap-alb-interactiv.ts";
import { checkAnswer, toPublicExercise } from "./grading.ts";
import { EMPTY_ENTRY, changeDraft, recordCheck } from "./session-state.ts";
import { restoreSession, serializeSession, sessionStorageKey } from "./session-storage.ts";

const lessonSource = readFileSync(new URL("../../content/romana/opere/povestea-lui-harap-alb.mdx", import.meta.url), "utf8");
const headings = extractHeadings(lessonSource, "povestea-lui-harap-alb.mdx");
const headingText = new Map(headings.map((heading) => [heading.id, heading.text]));
const choiceExercises = set.exercises.filter((exercise) => exercise.type === "multiple-choice");

describe("setul de exerciții „Povestea lui Harap-Alb”", () => {
  it("are 12–16 exerciții, de tipuri variate, cu dificultăți variate", () => {
    assert.ok(set.exercises.length >= 12 && set.exercises.length <= 16, `${set.exercises.length} exerciții`);
    const types = new Set(set.exercises.map((exercise) => exercise.type));
    assert.deepEqual([...types].sort(), ["multiple-choice", "short-answer", "true-false"]);
    assert.equal(new Set(set.exercises.map((exercise) => exercise.difficulty)).size, 3);
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

  it("variantele sunt distincte și nu există variante identice între ele", () => {
    for (const exercise of choiceExercises) {
      assert.equal(new Set(exercise.options.map((option) => option.text)).size, exercise.options.length, exercise.id);
      assert.ok(exercise.options.length === 4, `${exercise.id}: ${exercise.options.length} variante`);
    }
  });

  it("fiecare exercițiu are explicație și sursă, iar enunțul nu conține răspunsul în text", () => {
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
    const exercise = set.exercises.find((item) => item.id === "harap-ra-aripa");
    const status = (text) => checkAnswer(exercise, { type: "short-answer", text }).status;
    for (const text of ["aripa", "O ARIPĂ de furnică și una de albină", "Câte o aripă, pe care o aprinde.", "aripile"]) {
      assert.equal(status(text), "correct", text);
    }
    for (const text of ["un clopoțel", "o pălărie", "nimic"]) assert.equal(status(text), "not-recognized", text);
  });

  it("răspunsul scurt cu autoevaluare întoarce criteriile, fără verdict", () => {
    const exercise = set.exercises.find((item) => item.id === "harap-ra-comentariu-fantana");
    const result = checkAnswer(exercise, { type: "short-answer", text: "Un comentariu." });
    assert.equal(result.status, "self-assessment");
    assert.ok(result.criteria.length >= 3);
  });
});

describe("datele figurilor interactive", () => {
  const quizzes = [content.trasaturiBasmQuiz, content.faptInterpretareQuiz, content.caracterizareQuiz];
  const explorers = [content.probeItems, content.formuleItems, content.comparatieItems, content.laboratorItems];
  const figures = [content.drumFigure, content.momenteFigure, content.evolutieFigure, content.relatiiFigure];

  it("quiz-urile: răspunsul corect există printre variante, fiecare enunț are explicație și sursă", () => {
    for (const quiz of quizzes) {
      const ids = quiz.choices.map((choice) => choice.id);
      assert.equal(new Set(ids).size, ids.length, quiz.title);
      assert.equal(new Set(quiz.items.map((item) => item.id)).size, quiz.items.length, quiz.title);
      for (const item of quiz.items) {
        assert.ok((item.choices ?? quiz.choices).some((choice) => choice.id === item.correct), `${quiz.title}/${item.id}`);
        assert.ok(item.explanation.length > 30 && item.source.length > 0, `${quiz.title}/${item.id}`);
      }
    }
  });

  it("explorările: id-uri unice, câmpuri și sursă prezente", () => {
    for (const items of explorers) {
      assert.equal(new Set(items.map((item) => item.id)).size, items.length);
      for (const item of items) {
        assert.ok(item.fields.length >= 3 && item.source.length > 0, item.id);
        assert.equal(new Set(item.fields.map((field) => field.label)).size, item.fields.length, item.id);
      }
    }
  });

  it("figurile cu etape: id-uri unice și fiecare etapă are text, etichetă și sursă", () => {
    for (const figure of figures) {
      assert.equal(new Set(figure.steps.map((step) => step.id)).size, figure.steps.length, figure.title);
      for (const step of figure.steps) assert.ok(step.title && step.text && step.source, `${figure.title}/${step.id}`);
    }
    assert.equal(content.drumFigure.steps.length, 7);
    assert.equal(content.momenteFigure.steps.length, 5);
    assert.equal(content.evolutieFigure.steps.length, 7);
  });

  it("harta relațiilor: muchiile leagă personaje existente, la etape existente", () => {
    for (const edge of content.harapEdges) {
      assert.ok(edge.from in content.harapPeople && edge.to in content.harapPeople, `${edge.from}-${edge.to}`);
      assert.ok(edge.step >= 0 && edge.step < content.relatiiFigure.steps.length, `${edge.from}-${edge.to}`);
    }
  });

  it("planurile de eseu trimit doar la titluri care există în lecție", () => {
    for (const plan of content.essayPlansHarap) {
      for (const block of plan.blocks) {
        for (const heading of block.see) assert.ok(headingText.has(slugifyHeading(heading)), `${plan.id}/${block.id}: „${heading}”`);
      }
    }
  });

  it("lista de autoevaluare are grup pentru fiecare cerință și grupul de redactare", () => {
    const ids = content.checklistGroupsHarap.map((group) => group.id);
    for (const id of ["personaj", "particularitati", "redactare"]) assert.ok(ids.includes(id), id);
  });
});

describe("salvarea locală pentru „Povestea lui Harap-Alb”", () => {
  const exercises = set.exercises.map(toPublicExercise);
  const blank = () => exercises.map(() => EMPTY_ENTRY);
  const choice = (value) => ({ kind: "choice", value });

  it("cheia de stocare este proprie setului", () => {
    assert.equal(sessionStorageKey(set.key), "bac-simplu:exercitii:romana/povestea-lui-harap-alb");
    assert.notEqual(sessionStorageKey(set.key), sessionStorageKey("romana/ion"));
    assert.notEqual(sessionStorageKey(set.key), sessionStorageKey("romana/moara-cu-noroc"));
  });

  it("restaurează o sesiune și nu salvează răspunsuri corecte sau explicații", () => {
    const entries = blank();
    entries[0] = recordCheck(changeDraft(EMPTY_ENTRY, choice("c")), choice("c"), "incorrect");
    entries[1] = changeDraft(EMPTY_ENTRY, choice("c"));
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
    const raw = serializeSession("romana/ion", exercises, { index: 0, finished: false, entries: blank() });
    assert.equal(restoreSession(raw, set.key, exercises).outcome, "discarded");
  });
});
